---
title: Proxmox Bond Announce Script (pve-bond-announce)
created: 2026-08-18
updated: 2026-08-18
type: concept
tags: [infrastructure, networking, proxmox, homelab, automation]
sources: [2026-08-18 Aside conversation — user-provided script]
---

# pve-bond-announce 스크립트 전문

본드 페일오버 후 브리지에 붙은 VM MAC들을 스위치에 알리는(수제 VMware Notify Switches) 데몬 스크립트.
배경/평가는 [[proxmox-bond-failover-switch-notification]] 참고. CK 홈랩 맥락: [[ck-technology-engineering-profile]]

동작 요약: `active_slave`를 0.1s 폴링 → 변경 감지 → 0.3s 안정화 대기 → 대상 브리지의 실행 중
QEMU VM 전체에 `announce_self`(RARP)를 0.5s 간격 10회 호출. 반복 중 재전환 감지 시 중단.

## 스크립트: /usr/local/sbin/pve-bond-announce.sh

```bash
#!/usr/bin/env bash

set -uo pipefail

BOND="bond2"
BRIDGE="vmbr1"

# 전환 감지 주기
CHECK_INTERVAL="0.1"

# active slave 전환 후 첫 실행까지 대기
SETTLE_DELAY="0.3"

# announce_self 반복 횟수와 간격
ANNOUNCE_ATTEMPTS=10
ANNOUNCE_INTERVAL="0.5"

ACTIVE_FILE="/sys/class/net/${BOND}/bonding/active_slave"
NODE="$(hostname -s)"
LOG_TAG="pve-bond-announce"

read_active_slave() {
    if [[ -r "$ACTIVE_FILE" ]]; then
        tr -d '[:space:]' < "$ACTIVE_FILE"
    fi
}

get_target_vms() {
    local vmid

    while read -r vmid; do
        [[ -n "$vmid" ]] || continue

        # 실행 중이며 vmbr1에 연결된 QEMU VM만 선택
        if qm config "$vmid" 2>/dev/null |
            grep -Eq "^net[0-9]+: .*bridge=${BRIDGE}(,|$)"; then
            printf '%s\n' "$vmid"
        fi
    done < <(
        qm list 2>/dev/null |
        awk 'NR > 1 && $3 == "running" {print $1}'
    )
}

announce_vm_macs() {
    local expected_slave="$1"
    local current_slave
    local attempt
    local vmid
    local failures=0
    local -a target_vms

    mapfile -t target_vms < <(get_target_vms)

    if [[ "${#target_vms[@]}" -eq 0 ]]; then
        logger -t "$LOG_TAG" \
            "${BRIDGE}에 연결된 실행 중 VM이 없음"
        return
    fi

    logger -t "$LOG_TAG" \
        "MAC 알림 시작: active=${expected_slave}, VM=${target_vms[*]}, 횟수=${ANNOUNCE_ATTEMPTS}"

    for ((attempt=1; attempt<=ANNOUNCE_ATTEMPTS; attempt++)); do
        current_slave="$(read_active_slave)"

        # 반복 실행 도중 active slave가 또 바뀌면 현재 작업 중단
        if [[ "$current_slave" != "$expected_slave" ]]; then
            logger -t "$LOG_TAG" \
                "전환 재발생으로 MAC 알림 중단: ${expected_slave} -> ${current_slave:-none}"
            return
        fi

        for vmid in "${target_vms[@]}"; do
            if ! pvesh create \
                "/nodes/${NODE}/qemu/${vmid}/monitor" \
                --command announce_self >/dev/null 2>&1; then

                failures=$((failures + 1))

                logger -t "$LOG_TAG" \
                    "VM ${vmid}: announce_self 실패, 시도=${attempt}/${ANNOUNCE_ATTEMPTS}"
            fi
        done

        logger -t "$LOG_TAG" \
            "announce_self 실행: active=${expected_slave}, 시도=${attempt}/${ANNOUNCE_ATTEMPTS}"

        if [[ "$attempt" -lt "$ANNOUNCE_ATTEMPTS" ]]; then
            sleep "$ANNOUNCE_INTERVAL"
        fi
    done

    logger -t "$LOG_TAG" \
        "MAC 알림 완료: active=${expected_slave}, 실패=${failures}"
}

# bond 인터페이스가 생성될 때까지 대기
while [[ ! -r "$ACTIVE_FILE" ]]; do
    sleep 1
done

previous="$(read_active_slave)"

logger -t "$LOG_TAG" \
    "감시 시작: ${BOND}, active_slave=${previous:-none}"

while true; do
    current="$(read_active_slave)"

    if [[ "$current" != "$previous" ]]; then
        old="$previous"
        previous="$current"

        logger -t "$LOG_TAG" \
            "active_slave 변경 감지: ${old:-none} -> ${current:-none}"

        if [[ -n "$current" ]]; then
            sleep "$SETTLE_DELAY"

            confirmed="$(read_active_slave)"

            if [[ "$confirmed" == "$current" ]]; then
                announce_vm_macs "$current"
            else
                logger -t "$LOG_TAG" \
                    "안정화 대기 중 재전환: ${current} -> ${confirmed:-none}"
            fi
        fi
    fi

    sleep "$CHECK_INTERVAL"
done
```

## systemd 유닛 (원본 절차에 누락 — 별도 작성 필요)

```ini
# /etc/systemd/system/pve-bond-announce.service
[Unit]
Description=Announce VM MACs after bond failover
After=network-online.target pve-cluster.service

[Service]
ExecStart=/usr/local/sbin/pve-bond-announce.sh
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

## 설치 절차

```bash
# 1. 스크립트 저장 후 문법 검사 (출력 없어야 정상)
bash -n /usr/local/sbin/pve-bond-announce.sh

# 2. 실행 권한
chmod 750 /usr/local/sbin/pve-bond-announce.sh

# 3. 유닛 등록 및 기동
systemctl daemon-reload
systemctl enable --now pve-bond-announce.service

# 4. 확인
systemctl status pve-bond-announce.service --no-pager
journalctl -t pve-bond-announce -f
```

## 알려진 한계 (상세는 본문 페이지 §7)

- LXC 미커버 (`qm`만 순회)
- `qm list` 파싱: VM 이름에 공백 있으면 오동작 가능
- `pvesh`는 호출당 무거움 — 페일오버 빈도가 낮아 실용상 OK, 필요시 QMP 소켓 직접 호출로 경량화
- BOND/BRIDGE가 하드코딩 — 다중 본드/브리지 환경이면 확장 필요
- **OVS 전환 시 이 스크립트는 불필요** — OVS bond는 페일오버 시 FDB 전체 MAC에 RARP 학습 패킷을 내장 송출 (본문 §9 참고)
