---
title: Proxmox Bond Failover and Switch Notification
created: 2026-08-18
updated: 2026-08-18
type: concept
tags: [infrastructure, networking, proxmox, vmware, virtualization, homelab]
sources: [2026-08-18 Aside conversation — VMware Notify Switches vs Proxmox]
---

# Proxmox 본드 페일오버와 스위치 알림 (VMware Notify Switches 대응)

VMware NIC 팀의 "Notify Switches" 옵션이 Proxmox/Linux에서 무엇으로 대응되는지,
그리고 본드 페일오버 후 "스위치가 새 경로를 다시 배우는 문제"를 정리한 노트.
CK 홈랩(prox220, active-backup bond + vmbr 브리지) 맥락. 관련: [[ck-technology-engineering-profile]],
[[VMware_이후의_세계_AI시대_가상화_운영_재설계_2026-02-11]]

## 1. VMware Notify Switches란

- vSwitch/포트그룹 NIC Teaming 설정. 기본 Yes
- VM 부팅, vMotion, NIC 페일오버 시 ESXi가 **각 vNIC MAC으로 RARP를 브로드캐스트**해
  물리 스위치의 MAC 테이블을 즉시 갱신 → 순단 최소화
- 끄면 스위치 MAC 에이징(통상 300초)까지 옛 포트로 트래픽이 가서 블랙홀 발생 가능

## 2. 페일오버의 두 층위

| 층위 | 내용 | 자동 여부 |
|---|---|---|
| ① 전환 | bonding이 링크 다운 감지(miimon) 후 활성 슬레이브 교체 | 항상 자동, 호스트 안에서 완결 |
| ② 재학습 | 스위치 MAC 테이블·이웃 ARP 캐시가 새 경로를 알게 되는 것 | **조건부** — 여기가 문제 지점 |

- 전환 성공은 필요조건이지 충분조건이 아님. ①만 검증하고 ②까지 통과했다고 결론 내리는 게 흔한 함정
- ②의 자연 치유 기준: **"바뀐 정보를 평소 트래픽이 스스로 고칠 수 있는가"**
  - MAC 불변(포트만 이동) → 아무 송신 한 발이면 스위치가 출발지 MAC으로 재학습 → 자연 치유 O
  - 침묵 VM(수신 대기형 서버) → 송신할 계기가 없어 치유 불가 → 에이징 300초까지 블랙홀
  - 링크 이벤트가 있으면 스위치가 link-down flush + 플러딩으로 구제. **링크 이벤트 없는 전환**(수동 전환,
    링크 너머 장애)이 최악 조건

## 3. Linux/Proxmox 대응 요소

VMware의 체크박스 하나가 Linux에서는 세 조각으로 분해됨:

| 몫 | 담당 | 트리거 | 비고 |
|---|---|---|---|
| bond 자신의 MAC | bonding 드라이버 GARP (`num_grat_arp`, 기본 1회) | 페일오버 시 자동 | 기본 1발 → 유실 대비 3~5 권장 |
| VM MAC (마이그레이션) | QEMU self-announce (RARP) | 라이브 마이그레이션 시 자동 | |
| VM MAC (본드 페일오버) | **없음 — 수제 스크립트 필요** | active_slave 감시 데몬 → VM별 `announce_self` | 아래 §7 |

## 4. fail_over_mac 옵션과 리스크

modprobe 전역 설정(`options bonding fail_over_mac=1`) 또는 per-bond 설정. active-backup 전용.

| 값 | 동작 | GARP 의존도 |
|---|---|---|
| 0 none (기본) | 슬레이브 전체가 bond MAC 공유. 페일오버 시 포트만 이동 | 낮음 — 자연 치유 가능 |
| 1 active | bond MAC이 활성 슬레이브 MAC을 따라감 → **IP→MAC 매핑 자체가 바뀜** | 높음 — GARP 도달이 생존 조건 |
| 2 follow | 활성 슬레이브에 MAC 이전 | 중간 |

`active`의 리스크:

- 치유가 GARP 도달에 전적으로 의존 (유실 시 이웃 ARP 캐시 만료까지 먹통)
- vmbr 브리지 MAC이 bond MAC에서 파생되면 **관리 IP MAC까지 흔들림** → SSH/corosync 순단, DHCP 고정할당 파손
- failback 시 MAC이 또 바뀌어 장애 1회당 위험 구간 2회
- 본질은 성능 옵션이 아니라 **NIC이 MAC 덮어쓰기를 거부할 때의 우회책**. none으로 동작하면 none이 정답
- active를 유지해야 한다면: `num_grat_arp` 상향 + vmbr에 `hwaddress`로 MAC 고정 세트로

`num_grat_arp`와 `fail_over_mac`은 **완전 별개 옵션** (전자는 GARP 발송 횟수, 후자는 MAC 처리 방식).

## 5. RARP vs GARP

| | RARP | GARP |
|---|---|---|
| 담긴 정보 | MAC만 | IP + MAC |
| 스위치 MAC 테이블 갱신 | O | O |
| 호스트 ARP 캐시 갱신 | X | O |
| 필요 조건 | MAC만 알면 됨 | IP를 알아야 함 |
| 쓰는 곳 | 하이퍼바이저의 VM 대리 알림 (게스트 IP를 몰라도 가능) | fail_over_mac=active 복구, VRRP/keepalived |

- VM은 MAC이 안 바뀌므로 스위치 테이블(MAC→포트)만 고치면 됨 → RARP로 충분
- fail_over_mac=active는 이웃들의 IP→MAC 캐시가 깨짐 → GARP 필수
- "포트"는 물리 스위치의 물리 포트 (다중 스위치면 업링크, LACP면 LAG일 수 있음).
  vmbr 브리지도 자체 FDB(MAC→tap/bond)를 가진 소프트웨어 L2 스위치지만, 페일오버 시
  브리지 입장에선 출구가 bond 하나로 고정이라 낡은 엔트리는 **호스트 바깥 물리 스위치에만** 생김

## 6. miimon

- bonding의 링크 생사 감시 주기(ms). Proxmox 기본 `bond-miimon 100`
- NIC 캐리어 상태만 읽으므로 부하 제로. `updelay`/`downdelay`로 플래핑 방어
- 한계: **내 NIC과 바로 앞 포트 사이의 전기적 링크만** 봄. 링크 너머 장애(업링크, 미디어 컨버터 등)는
  감지 불가 → 그 경우 `arp_interval` + `arp_ip_target`(ARP 모니터) 검토

## 7. 본드 페일오버 시 VM MAC 알림 스크립트 (수제 Notify Switches)

- 구조: `/sys/class/net/bondX/bonding/active_slave`를 0.1s 폴링 → 변경 감지 시 settle 후,
  해당 브리지에 붙은 실행 중 QEMU VM 전체에 `pvesh .../monitor --command announce_self` 반복 호출
- 평가: bonding GARP가 못 커버하는 "VM MAC 몫"을 정확히 채움. 접근 타당
- 주의점:
  - systemd 유닛 파일 별도 작성 필요 (원본 절차에 누락)
  - **LXC 미커버** (qm만 순회)
  - `qm list` 파싱은 VM 이름에 공백 있으면 오동작 가능
  - pvesh는 호출당 무거움 — 빈도 낮으니 실용상 OK, 필요시 QMP 소켓 직접 호출
- 진가는 **링크 이벤트 없는 전환 + 침묵 VM** 조합에서 발휘 (그 외엔 flush/플러딩이 상당 부분 구제)
- 스크립트 전문 + systemd 유닛 + 설치 절차: [[proxmox-bond-announce-script]]

## 8. 테스트 방법론

### 국룰 (기본 검수)

연속 핑(`ping -D -i 0.2`) + 케이블 뽑기 → 손실 1~10발 내 복구, active slave 전환 로그 확인,
양방향 반복, failback 포함. 이걸로 검증되는 건 ①전환 + 핑 쏘던 경로뿐.

### 함정: 테스트 트래픽이 치유 트래픽을 겸하면 안 된다

- VM 내부 핑은 그 자체가 송신 = 치유 행위 → 문제를 가림 (냉장고 문 열고 불 확인하는 격)
- 실환경에서 터지는 건 침묵 VM의 인바운드인데, 핑 테스트의 VM은 가장 유리한 조건의 VM

### 제대로 된 ② 재학습 테스트

```bash
# 링크 이벤트 없는 전환 (스위치가 flush할 계기를 안 줌 = 최악 조건 재현)
echo eno2 > /sys/class/net/bond2/bonding/active_slave
# VM은 침묵시키고, 외부에서 핑 → 블랙홀 시간 측정
ping -D -i 0.2 <VM-IP>
```

### PoC 매트릭스 (요지)

- 주입 6종: 케이블 제거 / 스위치 포트 shutdown / 호스트 ip link down / **수동 전환(무이벤트)** /
  링크 너머 장애 / 복구(failback)
- 트래픽 5종: 수다쟁이 VM / **침묵 VM 인바운드** / 신규 세션 / 유지 세션 / 다수 VM 동시
- 관측 3점: 호스트(`/proc/net/bonding`, journal) / 패킷(`tcpdump -e 'rarp or arp'`로 알림이 실제
  나가는지) / 스위치 MAC 테이블
- 대조 실험: announce 스크립트 on/off로 동일 조건 블랙홀 시간 비교
- 최소 세트: (케이블+수다쟁이), (수동 전환+침묵 VM 인바운드), (failback), (스크립트 on/off 대조)

## 9. 보완 대안: OVS 전환과 LACP

### OVS bond의 내장 알림 (수제 스크립트의 네이티브 대체)

- OVS bond(active-backup 포함)는 활성 멤버 변경 시 `bond_send_learning_packets`로
  **브리지 FDB에 학습된 모든 MAC**을 출발지로 하는 학습 패킷을 새 활성 포트로 자동 송출
- 학습 패킷 포맷은 **RARP** (임의 프레임이 일부 스위치를 혼란시켜 RARP로 변경된 이력)
  — VMware Notify Switches / QEMU announce_self와 동일 방식
- 트리거가 "활성 멤버 변경" 자체라 **링크 이벤트 없는 전환에도 동작**하고,
  FDB 기반이라 **LXC까지 커버** (tap/veth 구분 없음)

| | Linux bridge + bonding | OVS bridge + OVS bond |
|---|---|---|
| bond 자기 MAC 알림 | GARP (num_grat_arp) | 학습 패킷에 포함 |
| VM MAC 알림 | 없음 → 수제 스크립트 필요 | **내장 (FDB 전체 RARP)** |
| LXC 커버 | 스크립트 미커버 | 커버 |

```
# /etc/network/interfaces (apt install openvswitch-switch)
auto bond2
iface bond2 inet manual
    ovs_type OVSBond
    ovs_bridge vmbr1
    ovs_bonds eno1 eno2
    ovs_options bond_mode=active-backup other_config:bond-miimon-interval=100

auto vmbr1
iface vmbr1 inet manual
    ovs_type OVSBridge
    ovs_ports bond2
```

- 미묘한 점: OVS는 FDB에 있는 MAC만 알림 → 에이징(기본 300초)으로 빠진 장기 침묵 VM은 제외.
  단 그 경우 물리 스위치 엔트리도 같이 만료됐으므로 unknown unicast 플러딩으로 도달 →
  낡은 엔트리가 존재하는 시간대의 MAC은 반드시 FDB에도 있어 **실질 빈틈 없음**

### LACP (스위치 지원 시 문제의 근원 제거)

- Linux bonding `802.3ad` 또는 OVS `balance-tcp`로 두 포트를 하나의 논리 포트(LAG)로 묶으면
  스위치 MAC 테이블이 "MAC → LAG"를 가리킴 → 멤버가 죽어도 **포트 매핑 자체가 불변** →
  재학습도 알림도 불필요. 대역폭 합산은 덤
- 이중 스위치 구성이면 스위치 쪽 MLAG 지원 필요

### 선택지 비교

| 선택지 | 장점 | 비용/조건 |
|---|---|---|
| 현행 유지 (bridge + 스크립트) | 이미 동작, 추가 비용 없음 | LXC 미커버, 스크립트 유지보수 |
| OVS 전환 | 알림 내장, 스크립트 제거, LXC 커버 | 패키지/설정 체계 변경, 운영 익숙함 |
| LACP 전환 | 문제 근원 제거, 가장 깔끔 | 스위치 LACP 필요, 이중 스위치면 MLAG |

- 전환 검증: §8의 (수동 전환 + 침묵 VM 인바운드) 테스트 + `tcpdump -e 'rarp'`로 OVS가 실제
  RARP를 쏘는지 확인한 뒤 스크립트 제거

## 10. 한 줄 결론

VMware의 Notify Switches 체크박스 = Linux에서는 "bonding GARP(호스트 몫) + QEMU RARP(VM 몫,
단 본드 페일오버 트리거는 수제)"로 분해되며, 모든 논점은 결국 **스위치 MAC 테이블의 포트 매핑을
누가 언제 고쳐주느냐** 하나로 귀결된다.
