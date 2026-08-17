---
title: Interest signal collection — 08:00 social run (2026-08-18)
type: raw
created: 2026-08-18
captured_at: 2026-08-18T08:00 KST
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  Cross-day both-static no-new-signal vs the 08-17 19:00 social baseline (the most
  recent completed social transcript). Threads via official Graph API (configured
  path): token refresh OK (expires_in 5137151), /v1.0/me OK. Own /threads top
  UNCHANGED (18148967395523856 = DcDVFzFkwm5, "오픈웨이트가 프론티어를 따라잡은 여름",
  2026-08-15) and /replies top UNCHANGED (17874998763543193 = DcDVLOYk0Cm, "4/4 결론",
  2026-08-15); CK posted nothing since the baseline. /mentions empty; keyword_search
  "agent"/"Claude Code"/"Codex"/"GPU" = CK's own old posts only → reinforcement.
  Live Chrome CDP UP (Chrome/147): YouTube subscriptions (len 9469), GitHub stars
  (90, top piyushsachdeva/CKA-2024), Google My Activity (len 5301) all byte-identical
  to the 08-17 19:00 baseline. No genuinely-new signal on any surface → raw_only.
  Durable layer (index.md, concept pages) unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-18 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-18
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0818.py`). YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2781), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_0800_0818.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137151); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0818.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0818_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-17.md` (08-17 19:00, itself both-static vs the 08-17 08:00 pass). No `08-00-2026-08-18` transcript existed before this run → idempotency guard clear, collection proceeded.

## 1) Threads (Graph API) — own posts / replies / mentions — BOTH-STATIC, no new posts
### `/threads` (own posts) — top row UNCHANGED vs 08-17 baseline
Page: `https://www.threads.com/@ethan13917`
> https://www.threads.com/@ethan13917/post/DcDVFzFkwm5
> 2026-08-15T07:15 TEXT_POST 18148967395523856 — "오픈웨이트가 프론티어를 따라잡은 여름 …"

Carry-over identical below: `18329220475275183` (미중 AI 모델 전쟁, 08-12), `18099596678203517` (30만원 챌린지 Day 2, 08-12), `18113262016984508` (무료 AI 토큰 시대의 종료, 08-11), `18138408793585928` (Day 1, 08-11), `18104282615582932` (윤자동 30만원 도전, 08-11), `17889069084426720` (주간 업무회의 회의록, 08-10), `18145884259527886` + `17996171441808341` (REPOST_FACADE, 08-08, empty text — carry-over), `18089312705392873` (AI 단가 싸움, 08-04), plus older reposts.

### `/replies` (own replies) — top row UNCHANGED vs 08-17 baseline
> https://www.threads.com/@ethan13917/post/DcDVLOYk0Cm
> 2026-08-15T07:16 TEXT_POST 17874998763543193 — "4/4 결론 … '모델 고르기'에서 '모델 잘 돌리기'로의 이동 …"

Full 1/4–4/4 open-weight self-host chain (08-15) + 6/6 token-volume-vs-revenue chain (08-12) all carry-over identical.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN old posts (reinforcement, not discovery)
- `agent` → CK's own 05-01 AgentCore/managed-agents thread + 08-03 agent-security 6/6 + investing post
- `Claude Code` → CK's own 04-22 "Claude Code + Aurora DSQL" post
- `Codex` → CK's own 07-21 "국산 하네스 까지마라" + 07-10 "codex는 없나요?"
- `GPU` → CK's own 08-15 self-host chain + 08-11 GPU 서버 구축 가이드/챌린지 posts

## 2) YouTube subscriptions (CDP) — 변화 없음 (feed rotation only, len 9469 identical to baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical to the 08-17 19:00 baseline)
- Visible rows same noise cluster: 삼전닉스/코스피 반도체, 축구협회 성접대 라이브, 19명 사망 폭염(안될과학), 힙합플레이야, 정치 라이브, 아반떼 견적. Weak AI-adjacent row present: "2026년 CSS는 어떻게 바뀌었을까… 개발자 40%가 정신적 문제를…?" + Piyush "Stop telling freshers AI can't do DevOps" live — both already in baseline.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star since 08-16 08:00)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical to baseline)
> https://github.com/piyushsachdeva/CKA-2024 (top, "Recently starred" — unchanged since the 08-16 08:00 89→90 bump)
Carry-over: pbakaus/impeccable, lyogavin/airllm, zhaoxuya520/reverse-skill, virattt/ai-hedge-fund, nathankim0/clean-architecture-skills, lidge-jun/opencodex, jung-wan-kim/teamclaude — all previously captured.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 identical to baseline, tab stale)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical to baseline)
- "오늘" top rows unchanged: 오픈AI 알림(오후 6:48), Outlook(오후 12:17/12:16). Older rows (CUDA/한컴독스/Hermes 문서, Durable Agent Runtime, 양도소득세/법원경매/등기부등본) all carry-over. Tab has not refreshed since the baseline capture.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회-성접대/폭염/힙합/정치/자동차 noise.
- No genuinely-new signal on any surface this pass. The strongest item in the recent multi-day window remains the 08-17 22:00 GitHub-Trending agentic-security cluster (incl. OFFICIAL `anthropics/defending-code-reference-harness`), already captured 08-17 and held `raw_only` as the leading promotion candidate.

## Why this raw exists
Evidence store for the 2026-08-18 08:00 morning social pass. Cross-day both-static: baseline is the most-recent completed social transcript (08-17 19:00), and every surface is reinforcement/static vs it — Threads both-static (no posts since baseline), YouTube feed rotation only (len 9469 identical), GitHub stars unchanged at 90, Google tab stale/unchanged (len 5301 identical). No genuinely-new signal → `raw_only`. Durable layer (index.md, concept pages) unchanged.
