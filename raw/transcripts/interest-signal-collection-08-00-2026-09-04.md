---
title: Interest signal collection — 08:00 social run (2026-09-04)
type: raw
created: 2026-09-04
captured_at: 2026-09-04T08:00 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:00 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-04 raw existed before this run. Prior social baseline (by
  mtime) = interest-signal-collection-19-00-2026-09-03.md (reinforcement-only); also compared against
  22-00-2026-09-03 new-target. Live Chrome CDP UP (Chrome/147). Threads via official Graph API
  (configured path); token refresh OK (expires_in 5124579), /v1.0/me OK (ethan13917, id
  27173231028946699). GitHub stars + Google My Activity + YouTube subscriptions read via stdlib
  raw-socket WS CDP client from hydrated tabs. Result: REINFORCEMENT-ONLY. Threads /threads gained
  ONE genuinely-new own root since the 19:00 baseline — 18437084800131008 (2026-09-03 19:07 KST,
  "카피 한 벌 뽑는 일은 앱으로도 됩니다..." — 마케터 카피/채널 자동화 series root) + its full reply chain (성과분석
  CSV, UTM 링크, 이미지 규격 변환, 채널별 카피, 4가지 정리) — CK's OWN single-surface post continuing the
  already-durable terminal-agent-automation-for-non-devs lane → own-posts-only-reinforcement →
  raw_only. /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's own posts
  (reinforcement). GitHub stars 93 top unchanged (miuuyy/codex-chatgpt-web) → 변화 없음. Google My
  Activity byte-identical to 09-03 (len 5301, stale tab; today = 오픈AI 6:48pm, Outlook 12:16/12:17)
  → 변화 없음. YouTube subscriptions hydrated (len 8812): 코드팩토리 browser-automation upload + 메타콘
  short both carry from the 19:00 baseline; only fresh below-fold rows are 2분전 noise + a mild
  Julian Goldie SEO "This NEW Chinese AI Model" row (off CK's durable axis) → raw_only. Durable
  action = this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept
  pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-04 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-04
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0904.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` hydrated (`구독 - YouTube`, len 8812). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0904.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5124579); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0904.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0904_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript `interest-signal-collection-19-00-2026-09-03.md` (reinforcement-only); also cross-checked against `interest-signal-collection-22-00-2026-09-03.md` (new-target). No `08-00-2026-09-04` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only.** Threads `/threads` gained ONE genuinely-new own root since the 19:00 baseline — `18437084800131008` (09-03 19:07 KST, 마케터 카피/채널 자동화 series root) plus its full reply chain — but it is CK's OWN single-surface post continuing the already-durable terminal-agent-automation-for-non-devs lane → own-posts-only-reinforcement → `raw_only`. GitHub stars 93 top unchanged; Google My Activity byte-identical (stale tab); YouTube subscriptions carry the 코드팩토리 + 메타콘 rows from 19:00 with only 2분전 noise + one mild off-axis AI row fresh. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — NEW own marketer-automation thread since 19:00 (own-post reinforcement → raw_only)
### /threads — one new top root vs the 19:00 baseline
- **NEW** top row **`18437084800131008`** (2026-09-03 10:07:03 UTC / **09-03 19:07 KST**) — https://www.threads.com/@ethan13917/post/Dc0jyutEyVE — TEXT_POST: `"카피 한 벌 뽑는 일은 앱으로도 됩니다. 그런데 마케터의 하루는 문구 하나가 아니라 채널 세 개, 길이 세 벌, 이미지 수십 ..."` — 마케터 카피/채널 자동화 series root. Posted ~7 min after the 19:00 baseline run started. CK's OWN post continuing the terminal-agent-automation-for-non-devs series (영업 목록 → 사무직 파일 → 마케터). Single-surface, already-durable lane → `raw_only`.
- Carry below (unchanged vs 19:00): `18076240841372243` (09-02 11:22 KST 영업 목록 자동화 root, DcxJ4bokzrY); `18186615706405937` (09-01 11:44 KST personal opinion, DcunhiPE1EH); 08-31 series PART 3 `18120302675316701` (사무직 파일 자동화); 08-30 PART 2 `18117970942932395`; 08-29 series intro `18104744447622673`.

### /replies — full reply chain of the new marketer thread (own-post continuation → raw_only)
All new `/replies` top rows are the reply chain of the new 마케터 thread above (09-03 19:08–19:14 KST):
- `17934533235122610` (Dc0knOCk5az) — `"만들어진 것은 모두 초안이고, 게시 결정은 언제나 사람이 합니다..."` (승인제/사람-검수 원칙)
- `18392592859207724` (Dc0kdzGk4kH) — `성과 분석. "성과데이터.csv를 읽어 클릭률을 계산하고 상위 열 개·하위 열 개로 나눠 줘..."`
- `17967565329159398` (Dc0kVR3kwc2) — `UTM 링크...` — `18177002236386689` (Dc0kMrTk-9S) — `이미지 규격 변환...` — `18114249452012171` (Dc0kD8xE2Up) — `채널별 카피부터...` — `17964510642174672` (Dc0j7cHkzJt) — `이번 편에서 마케터가 바로 따라 할 수 있는 네 가지...`
- All single-surface own-post continuation → `raw_only`.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — managed-agents 원문 (Dcn_QHWE3Ws), agent-skill-languages (DcdEpS9k6Ey), Snowflake Copilot 해킹 (DcLEx6iE959), agent-security 6/6 (Dbkp6TPk-Pt), Claude Code/Codex 공식 설치 문서 (Dcp6_EBk6Sq / Dcp6TdfE-8y), 마케터 카피 root (Dc0jyutEyVE). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-03 19:00 / 11:00), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (Python 7,390★), then the same carry cluster. No new star since the 19:00 pass.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 09-03 cache (stale tab, not reloaded). 오늘 = 오픈AI (오후 6:48), Outlook (오후 12:16/12:17). No new search captured since 09-03 evening.

## 4) YouTube subscriptions (CDP) — carry rows + noise (raw_only)
Hydrated (`구독 - YouTube`, len 8812). Feed rows:
- `[1시간 전] 드디어 모든 브라우저 자동화 고민을 해결해줄 구세주가 탄생했습니다.` — **코드팩토리** (조회수 1.3천회) — **carry from the 19:00 baseline** (already captured), browser-automation on an already-tracked channel/axis → reinforcement.
- `[1일 전] 파혼 후, 브라질 친구들이 내게 해준 말` — 마인드씨피알 (personal, off-axis); `[3일 전] 유튜브 조회수, 갑자기 대놓고 뻥튀기 된 이유` — 흑우스토리 (creator-economy, mild) — both carry.
- Short `[메타콘 2026] "한국 AI가 세계 3위? 착각입니다"` (조회수 2.5만회) — carry from 19:00.
- Only genuinely-fresh below-fold rows are `2분 전` uploads (탈모 확인법, 어깨 재활, 김원효, HIPHOPPLAYA 팟캐스트) — noise — plus one mild on-axis-adjacent English row `This NEW Chinese AI Model is Crazy Good!` — **Julian Goldie SEO** (조회수 1회, 2분 전) — SEO/general-AI channel off CK's durable agent/infra axis → `raw_only` noise.
- Off-axis noise (excluded from report): 불주먹 shorts, 코스피/한화오션/이란, 비트/이더 코인, 고딩 여친, 블랙컴뱃 라이브, 축구 라이브 (달수네/새벽의축구전문가), 기업거버넌스 라이브.

## Filtering notes
- Only genuinely-new evidence this pass: the new Threads 마케터 카피/채널 자동화 thread + reply chain (CK's own, already-durable lane). YouTube 코드팩토리/메타콘 carry from 19:00; only 2분전 noise + one off-axis AI row fresh.
- `/mentions` empty; keyword_search hits all CK's own posts → reinforcement, not discovery.
- GitHub stars static (93), Google My Activity byte-identical (stale tab).
- Sports/coin/politics YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-04 08:00 social pass. Reinforcement-only: the one genuinely-new signal is CK's own marketer-automation Threads thread continuing an already-durable series lane; all browser surfaces are static or carry from the 09-03 evening baseline. Route `raw_only`; no durable page or index change.
