---
title: Interest signal collection — 19:00 social run (2026-09-03)
type: raw
created: 2026-09-03
captured_at: 2026-09-03T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-03 raw existed before this run. Same-day baselines =
  interest-signal-collection-08-00-2026-09-03.md (cross-day both-static no-new-signal) +
  interest-signal-collection-11-00-2026-09-03.md (new-target reinforcement-only). Live Chrome CDP
  UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5171408), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity read via stdlib raw-socket WS CDP client; YouTube subs hydrated on a fresh target this
  pass (was blank at 08:00). Result: REINFORCEMENT-ONLY. Own /threads top unchanged
  (18076240841372243, 09-02 11:22 KST 영업 목록 자동화 root). /replies gained ONE new top row since
  08:00 — 18069156164743995 (09-03 10:56 KST "탈모 정복 가즈아!!!!!", personal/off-axis) → raw_only.
  /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's own posts (reinforcement).
  GitHub stars 93 top unchanged (miuuyy/codex-chatgpt-web) → 변화 없음. Google My Activity byte-identical
  to 08:00 (len 5301, stale tab) → 변화 없음. YouTube subscriptions hydrated (len 8812): fresh 코드팩토리
  browser-automation upload (1시간 전) + 메타콘 2026 "한국 AI 세계 3위 착각" short — single-surface on
  already-tracked channel/axis → raw_only. Durable action = this raw transcript + Honcho routing
  audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-03 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-03
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0903.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` existing tab blank nav shell (len 17), but a **fresh CDP target hydrated this pass** (len 8812) after scroll. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0903.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5171408); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0903.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0903_1900.json`.
- **Baselines** = same-day `interest-signal-collection-08-00-2026-09-03.md` (cross-day both-static no-new-signal) + `interest-signal-collection-11-00-2026-09-03.md` (new-target reinforcement-only). No `19-00-2026-09-03` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only.** Own `/threads` top row still `18076240841372243` (09-02 11:22 KST 영업 목록 자동화 series root), byte-identical to the 08:00 baseline — CK posted no new root since. `/replies` moved: ONE new top row `18069156164743995` (09-03 10:56 KST "탈모 정복 가즈아!!!!!") — personal/off-axis, single-surface → `raw_only`. `/mentions` empty; keyword_search hits all CK's own posts. GitHub stars 93 top unchanged. Google My Activity byte-identical (stale tab). YouTube subscriptions hydrated this pass with a fresh **코드팩토리 browser-automation upload** (1시간 전) on an already-tracked channel/axis → `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — /replies moved (personal row); /threads static
### /threads — top unchanged vs 08:00 baseline
- Top row still **`18076240841372243`** (2026-09-02 02:22:54 UTC / 11:22 KST) — https://www.threads.com/@ethan13917/post/DcxJ4bokzrY — TEXT_POST, 영업 목록 자동화 series root. Same as the 08:00 baseline / 09-02 19:00.
- Carry below (unchanged): `18186615706405937` (09-01 11:44 KST personal opinion, DcunhiPE1EH); 08-31 series PART 3 root `18120302675316701` (사무직 파일 자동화); 08-30 PART 2 `18117970942932395`; 08-29 series intro `18104744447622673` + `17902817622557812`; older 08-29 view-count-experiment posts (`18113614858988319`, `18132499333726979`).

### /replies — ONE new top row since 08:00 (personal/off-axis → raw_only)
- **NEW** top row **`18069156164743995`** (2026-09-03 01:56 UTC / 10:56 KST) — https://www.threads.com/@ethan13917/post/DczroW4E2ee — TEXT_POST, `"탈모 정복 가즈아!!!!!"` — personal/off-axis reply, single-surface → `raw_only`.
- Below it unchanged: `17987633220027373` (09-02 11:30 KST series-closer teasing 마케터, DcxKzoKk9tC) + the 09-02 6-part 영업 reply chain (`17969990037151850`, `18015340607934286`, `18021084833875942`, `18012377018950444`, `17905423290514961`, `18026720045850729`). All byte-identical to the 08:00 baseline.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — managed-agents 원문, agent-skill-languages, Claude Code/Codex 설치 문서, agent-security 6/6, Snowflake Copilot 해킹, etc. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 08:00 / 09-02), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), then the same carry cluster. No new star since the 08:00 pass.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, not reloaded). Today = 오픈AI (오후 6:48), Outlook (오후 12:16/12:17). No new search captured since morning.

## 4) YouTube subscriptions (CDP) — hydrated this pass; single-surface reinforcement (raw_only)
Existing tab was a blank nav shell (len 17), but a **fresh CDP target hydrated** after scroll (`구독 - YouTube`, len 8812). Visible feed rows:
- `[1시간 전] 드디어 모든 브라우저 자동화 고민을 해결해줄 구세주가 탄생했습니다.` — **코드팩토리** (조회수 1.3천회) — browser-automation tooling; 코드팩토리 is an already-tracked channel and browser-automation/agent-tooling is an already-tracked axis → `raw_only` (fresh upload, single-surface).
- `[1일 전] 파혼 후, 브라질 친구들이 내게 해준 말` — 마인드씨피알 (personal, off-axis).
- `[3일 전] 유튜브 조회수, 갑자기 대놓고 뻥튀기 된 이유` — 흑우스토리 (creator-economy, mild).
- Shorts row: `[메타콘 2026] "한국 AI가 세계 3위? 착각입니다"` (조회수 2.5만회) — Korean-AI-position take, mild-on-axis but a Short/single-surface → `raw_only`.
- Off-axis noise (excluded from report): 불주먹 shorts, 코스피/한화오션/이란, 비트/이더 코인, 고딩 여친, 블랙컴뱃 라이브, 기업거버넌스 라이브.

## Filtering notes
- Only genuinely-new evidence this pass: `/replies` new personal row (`탈모 정복`), and the YouTube subscriptions feed hydrating with a fresh 코드팩토리 browser-automation upload + 메타콘 short. All single-surface, already-tracked channels/lanes → `raw_only`.
- `/threads` static, GitHub stars static, Google My Activity byte-identical (stale tab).
- keyword_search hits all CK's own posts → reinforcement, not discovery.
- Sports/coin/politics YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-03 19:00 social pass. Reinforcement-only: `/threads` unchanged vs the 08:00 baseline (no new root), `/replies` gained one personal/off-axis row, YouTube subscriptions hydrated with a fresh but already-tracked-channel browser-automation upload. Route `raw_only`; no durable page or index change.
