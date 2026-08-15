---
title: Interest signal collection — 19:00 social run (2026-08-15)
created: 2026-08-15
type: raw-transcript
captured_at: 2026-08-15T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social pass, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-15 raw existed before this run.
  Baseline = same-day 08:00 social transcript (cross-day both-static
  no-new-signal) + the same-day 11:00 new-target transcript. Live Chrome CDP
  `127.0.0.1:9222` UP (Chrome/147); hydrated YouTube subscriptions / GitHub
  /stars / Google My Activity read via stdlib raw-socket WS CDP client
  (/tmp/cdp_read_1900_0815.py). Threads via official Graph API (configured
  path): token refresh OK, `/v1.0/me` OK (id 27173231028946699, ethan13917).
  RESULT: REINFORCEMENT-ONLY — the ONLY movement since 08:00 is CK's OWN new
  4-part thread `DcDVFzFkwm5` "오픈웨이트가 프론티어를 따라잡은 여름" (root
  2026-08-15T16:15 KST) + replies 1/4..4/4 (`DcDVGm6E4EO`/`DcDVIMSE4hg`/
  `DcDVJkOE8n0`/`DcDVLOYk0Cm`). This is the same-day OWN CURATION DRAFT NOW
  LIVE — CK's synthesis of today's 11:00 new-target open-weight signals (HF
  "State of Open Models: Summer 2026", Qwen 3.8 27B FP8, GLM-5.3, Cloudflare
  MCP-traffic-security) into the open-weight-self-host / operating-economics
  axis. Genuinely-new own-post evidence but restates an ALREADY-DURABLE axis
  → own-posts-only-reinforcement rule → raw_only, no concept-page change.
  YouTube (len 9469), GitHub /stars (89, pbakaus/impeccable top), Google My
  Activity "오늘" (오픈AI 6:48 + Outlook 12:16-17) all BYTE-IDENTICAL to the
  08:00 baseline. `/mentions` empty; keyword_search "Claude Code" = CK's own
  04-22 post (reinforcement). Durable action = this raw transcript + a Honcho
  audit + a log entry only; index.md and all concept pages unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-15.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-15.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-15 (captured ~19:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-15.md` existed → collection proceeded on time (~19:05 KST).
- Baseline: same-day 08:00 social transcript (cross-day both-static no-new-signal) + same-day 11:00 new-target transcript.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Hydrated targets read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0815.py`): YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (89 stars, `ckchain91`), Google My Activity search (len 5301). Raw dump cached `~/wiki/.cache/cdp_0815_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_1900_0815.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0815_1900.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — ONE new own thread
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — ONE NEW root vs 08:00 baseline
Top row is NEW: `DcDVFzFkwm5` (2026-08-15T07:15:48Z = 16:15 KST) — "오픈웨이트가 프론티어를 따라잡은 여름":
> https://www.threads.com/@ethan13917/post/DcDVFzFkwm5
> 2026년 여름, 오픈웨이트 모델이 조용히 프론티어 급을 따라잡았다. HuggingFace가 "State of Open Models: Summer 2026"을 냈고, 같은 주 Qwen 3.8 27B(FP8)와 GLM-5.3가 오픈웨이트로 풀렸다. 이제 "어떤 모델이 제일 센가"가 아니라 "누가 이걸 싸게 돌리는가"다.

Carry-over identical to baseline below: `Db7jAcME5yK` (미중 AI 모델 전쟁, 08-12 ROOT), `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료), `Db5ElOtkzM3` (Day 1), `Db486QDE2qq` (윤자동 30만원 도전), `Db12_2dE-e0` (주간 업무회의 기시감), REPOST_FACADEs, etc.

### `/replies` — NEW 1/4..4/4 chain under the new root
`DcDVGm6E4EO` (1/4 무엇이 바뀌었나), `DcDVIMSE4hg` (2/4 왜 self-host가 다시 전략이 되나 — "모델은 상품이고, 인프라는 역량이다"), `DcDVJkOE8n0` (3/4 공짜가 아닌 진짜 비용 — Cloudflare MCP 트래픽 탐지·보호, "self-host의 진짜 비용은 GPU 카드값이 아니라 운영과 보안 거버넌스"), `DcDVLOYk0Cm` (4/4 결론 — "모델 고르기에서 모델 잘 돌리기로의 이동. 남은 해자는 운영이다", 원문 링크 https://huggingface.co/blog/state-of-open-models-summer-2026). All 2026-08-15T07:15-07:16Z (16:15-16:16 KST).
> https://www.threads.com/@ethan13917/post/DcDVGm6E4EO
> https://www.threads.com/@ethan13917/post/DcDVIMSE4hg
> https://www.threads.com/@ethan13917/post/DcDVJkOE8n0
> https://www.threads.com/@ethan13917/post/DcDVLOYk0Cm

Prior reply chain (`DcAQnEjkyS6` 08-14 everyone-programs, 6-part 미중 AI token-economics 1/6..6/6) all identical to baseline.

### `/mentions`
> 0 rows (empty dataset).

### keyword_search "Claude Code"
> 1 row = CK's OWN old post `18075885890193333` (2026-04-22, "4/7 앱개발의 새 기본값 — Claude Code + Aurora DSQL") → own already-durable content, reinforcement, NOT new discovery.

## 2) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08:00)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Same two weak rotational AI rows as the 08:00 baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락, 대한축구협회 정몽규 성접대 스캔들 라이브 다수, 폭염 19명 사망(안될과학), 뻑가/김선태 Shorts, 김혜경 정치.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)
Star count still 89 → no new star since 08-12. Same as 08:00 baseline.

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)
"오늘" unchanged vs 08:00 baseline: 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16). No genuinely-new afternoon search.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/정치 noise.
- Strongest signal this run: CK's own new 4-part open-weight-self-host thread `DcDVFzFkwm5` — same-day 11:00 curation draft now live, single-surface own post reinforcing the already-durable open-weight / operating-economics axis. YouTube/GitHub/Google static.

## Why this raw exists
Evidence store for the 19:00 afternoon social pass. The ONLY movement since the 08:00 both-static baseline is CK's own new 4-part thread (`DcDVFzFkwm5` + 1/4..4/4), his published synthesis of today's 11:00 open-weight/operating-economics signals. Genuinely-new own-post evidence but restates an already-durable axis → own-posts-only-reinforcement → `raw_only`. YouTube/GitHub/Google byte-identical to 08:00. Durable layer unchanged.
