---
title: Interest signal collection — 08:00 social run (2026-08-19)
type: raw
created: 2026-08-19
captured_at: 2026-08-19T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-19 raw existed before this run.
  Baseline = prior social run raw/transcripts/interest-signal-collection-19-00-2026-08-18.md
  (most recent completed social transcript by mtime) + the same-day-prior 22:00 new-target run.
  CROSS-DAY BOTH-STATIC NO-NEW-SIGNAL: Threads via official Graph API (configured path):
  token refresh OK (expires_in 5137233), /v1.0/me OK (ethan13917, id 27173231028946699).
  Own /threads top row = DcLEvAFk6xt (2026-08-18T07:26 agentic-security thread) — BYTE-IDENTICAL
  to the 19:00 baseline top. /replies top = the same 08-18T07:26-07:27 agentic-security 6-part
  reply chain — BYTE-IDENTICAL to the 19:00 baseline. /mentions 0 rows. keyword_search (agent /
  Claude Code / Codex) = all CK's OWN older posts (reinforcement, not discovery). CK made NO new
  posts between the 19:00 pass and this 08:00 pass → own surfaces genuinely static. Live Chrome CDP
  UP (Chrome/147): GitHub stars (90, top piyushsachdeva/CKA-2024, len 2781), YouTube subscriptions
  (len 9469), Google My Activity (len 5301) ALL byte-identical to the 19:00 baseline → 변화 없음.
  No genuinely-new cross-surface durable signal → raw_only / no-new-signal. Durable layer
  (index.md, concept pages) unchanged; durable action = this raw transcript + Honcho routing audit
  + log.md entry only.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-19 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-19
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0819.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_0800_0819.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137233); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0819.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0819_0800.json`.
- **Baseline** = prior social run `interest-signal-collection-19-00-2026-08-18.md` (most recent completed social transcript by mtime; itself a raw_only run where CK posted a fresh agentic-security thread that restated an already-durable axis) + the same-day-prior `interest-signal-collection-22-00-2026-08-18.md` new-target run (reinforcement-only). No `08-00-2026-08-19` transcript existed before this run → idempotency guard clear, collection proceeded.

## Novelty summary
**Cross-day both-static no-new-signal.** Own `/threads` newest row AND `/replies` newest row are BOTH byte-identical to the prior social baseline (08-18 19:00). CK made no posts between the two passes. All three live CDP surfaces (GitHub stars, YouTube subscriptions, Google My Activity) are byte-identical to the 19:00 baseline. No genuinely-new signal on any surface → whole run `raw_only`. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 변화 없음 (both /threads and /replies static vs 19:00 baseline)
### `/threads` (own posts) — top row UNCHANGED
Page: `https://www.threads.com/@ethan13917`
> https://www.threads.com/@ethan13917/post/DcLEvAFk6xt
> 2026-08-18T07:26 UTC TEXT_POST 18335069719286024 —
> "AI agent가 코드 생성 수정 다해주다보니까 실제로 해킹공격도 진짜 많이 들어오는거 같네. 스노우플레이크에서는 깃헙 코파일럿 …"

Below carry-over identical to the 19:00 baseline: `DcDVFzFkwm5` (오픈웨이트가 프론티어를 따라잡은 여름, 08-15), `Db7jAcME5yK` (미중 AI 모델 전쟁, 08-12), `Db7Z2SfEyHX` (30만원 챌린지 Day 2, 08-12), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료, 08-11), `Db5ElOtkzM3` (Day 1, 08-11), plus the older 08-11/08-10/08-08/08-04/08-03 rows and REPOST_FACADE entries.

### `/replies` (own replies) — top row UNCHANGED
> https://www.threads.com/@ethan13917/post/DcLEx6iE959
> 2026-08-18T07:27 UTC — "원문: https://www.wiz.io/blog/red-agent-snowflake-copilot-cicd-bug …"

The full 08-18T07:26–07:27 agentic-security 6-part chain (DcLEvTrE6mG / DcLEvw8k8MS / DcLEwMtExT1 / DcLEwyak1BV / DcLExYkk9Jm / DcLEx6iE959) is byte-identical to the 19:00 baseline. Below unchanged: open-weight self-host chain (08-15), token-volume-vs-revenue chain (08-12), 08-14 "모두가 개발자" reply.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → the 08-18 agentic-security rows (DcLEx6iE959, DcLEvAFk6xt) + CK's own 08-03 agent-security 6/6 + 07-22 investing + 05-01 AgentCore/managed-agents thread + 04-20/04-21 Managed Agents thread
- `Claude Code` → CK's own 04-22 "Claude Code + Aurora DSQL" post
- `Codex` → CK's own 07-21 "국산 하네스 까지마라" + 07-10 "codex는 없나요?" + 05-01 보안과비용 + 2025-09 AI-as-OS

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical to the 08-18 19:00 baseline)
- Visible rows same noise cluster: 삼전닉스/코스피 반도체, 축구협회 성접대 라이브, 폭염(안될과학), 힙합플레이야, 정치 라이브, 아반떼 견적. Weak AI-adjacent rows ("2026년 CSS는 어떻게 바뀌었을까…", Piyush "Stop telling freshers AI can't do DevOps" live) already in baseline.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical to baseline)
> https://github.com/piyushsachdeva/CKA-2024 (top, "Recently starred" — unchanged since the 08-16 89→90 bump)
Carry-over: pbakaus/impeccable, lyogavin/airllm, zhaoxuya520/reverse-skill, virattt/ai-hedge-fund, nathankim0/clean-architecture-skills, lidge-jun/opencodex — all previously captured.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline, tab stale)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical to baseline)
- "오늘" top rows unchanged: 오픈AI 알림, Outlook. Older rows (CUDA/한컴독스/Hermes 문서, Durable Agent Runtime, 양도소득세/법원경매/등기부등본) all carry-over. Tab has not refreshed since the baseline capture.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회/폭염/힙합/정치/자동차 noise (all baseline carry-over).
- No genuinely-new signal on any surface. Own Threads surfaces static (CK posted nothing between 19:00 and 08:00); all CDP tabs byte-identical to baseline.

## Why this raw exists
Evidence store for the 2026-08-19 08:00 morning social pass. **Cross-day both-static no-new-signal:** own `/threads` top AND `/replies` top byte-identical to the 08-18 19:00 baseline; CK made no posts between passes; all three CDP surfaces (YouTube 9469, GitHub stars 90, Google 5301) byte-identical to baseline → 변화 없음. No genuinely-new cross-surface durable signal → `raw_only`. Durable layer (index.md, concept pages) unchanged.
