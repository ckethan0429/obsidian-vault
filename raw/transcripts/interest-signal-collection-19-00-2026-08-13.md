---
title: Interest signal collection — 19:00 social run (2026-08-13)
created: 2026-08-13
type: raw-transcript
captured_at: 2026-08-13T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social pass, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-13 raw existed before this run.
  Baseline = same-day 08:00 social (`interest-signal-collection-08-00-2026-08-13.md`,
  itself cross-day both-static no-new-signal) plus the 08-13 11:00 new-target run and
  the 08-13 "query | Threads curation draft" log entry. Live Chrome CDP
  `127.0.0.1:9222` UP (Chrome/147.0.7727.55); YouTube subscriptions / GitHub /stars /
  Google My Activity all hydrated. Threads collected via official Graph API
  (configured path): token refreshed OK, `/v1.0/me` OK (id 27173231028946699,
  ethan13917). RESULT: REINFORCEMENT-ONLY / no-new-signal on every surface.
  Own `/threads` top (`Db7jAcME5yK` 08-12 06:43 미중 AI 모델 전쟁 ROOT) and full
  `/replies` chain (6/6 AI token-economics `Db7jIeRE-ZG`..1/6 `Db7jBKOEzn0` +
  monetization-sprint replies) are byte-identical to the 08:00 baseline — CK posted
  nothing between passes. `/mentions` empty. The 08-13 Docker "Agent Baseline v1.0"
  curation draft prepared at 11:00 is a DRAFT only (not published), so it does not
  appear on `/threads`. CDP surfaces all 변화 없음: YouTube subscriptions = same two
  weak rotational AI rows ("2026 CSS 개발자 40% 정신적 문제", "Stop telling freshers AI
  can't do DevOps" live) buried in 삼전닉스/코스피 반도체 급락 + 대한축구협회 정몽규
  성접대 스캔들 + 폭염/힙합/엔터 noise; GitHub `/stars` still 89 (top row
  pbakaus/impeccable unchanged, no new star since 08-12); Google My Activity "오늘"
  still = 오픈AI 알림 18:48 + Outlook 12:17/12:16 (same as 08:00), "어제"(08-12) rows
  unchanged — no genuinely-new 08-13 search. Durable action = this raw transcript +
  a Honcho audit + a log entry only; index.md and all concept pages unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-13.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-13.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-13 (captured ~19:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-13.md` existed → collection proceeded on time (~19:05 KST).
- Baseline: same-day 08:00 social (`interest-signal-collection-08-00-2026-08-13.md`) + 08-13 11:00 new-target run + 08-13 "query | Threads curation draft" log entry.
- **Live Chrome CDP `127.0.0.1:9222` UP** (Chrome/147.0.7727.55). Hydrated targets read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0813.py`): YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_1900_0813.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0813_1900.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — 변화 없음
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — NO NEW rows vs 08:00 baseline
Top row unchanged (byte-identical to baseline):
> [2026-08-12T06:43Z] TEXT_POST `Db7jAcME5yK` — "미중 AI 모델 전쟁 / 토큰 가격은 한 달 만에 13.6% 떨어졌다. DeepSeek이 구글을 제치고 토큰 사용량 2위 랩이 됐다…" (ROOT of 6-part thread)
> https://www.threads.com/@ethan13917/post/Db7jAcME5yK

Carry-over (identical to baseline): `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료), `Db5ElOtkzM3` (챌린지 Day 1), `Db486QDE2qq`, `Db12_2dE-e0`, `DbnNVXGE6cn` (AI 단가 싸움), `DbkpxynEyy9` (AI 에이전트 보안 런타임 경계), plus REPOST_FACADEs `DbzAP2CE_r7`/`DbyCIZXk9ee` (08-08), `DblTFNfE_Tr`/`DblG8smExWc` (08-03).

### `/replies` — NO NEW rows vs 08:00 baseline
Top row unchanged (byte-identical to baseline):
> [2026-08-12T06:44Z] `Db7jIeRE-ZG` 6/6 "그래서 뭘 봐야 하나 / 비용은 오픈웨이트 라우팅으로 내리고 품질이 매출을 좌우하는 구간엔 프리미엄…"
> https://www.threads.com/@ethan13917/post/Db7jIeRE-ZG

Carry-over: full 6-part AI token-economics chain (`Db7jBKOEzn0`..`Db7jIeRE-ZG`) + monetization-sprint replies (`Db7aLHIE3pV`, `Db7aGXzE_9_`, `Db7aCRRk3IN`, `Db7Z-LWEz0l`, `Db7Z58HkzKM`) + `Db5MwQ6k_Xf` (08-11 5/5 free-token chain) — all identical to baseline.

### `/mentions`
> 0 rows (empty dataset).

Note: the 08-13 11:00 "Agent Baseline v1.0" Docker curation draft is a DRAFT only (approval-first, not published), so it correctly does not appear on `/threads`.

## 2) YouTube subscriptions (CDP) — 변화 없음 (reinforcement)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Weak rotational AI rows (same lane as 08:00 baseline, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락 ("또 급락! 삼전닉스 호실적인데!! 추풍낙엽 코스피 반도체 왜?" 3.1만회), 대한축구협회 정몽규 성접대 스캔들 (다수 라이브), 폭염 사망(안될과학), 힙합플레이야 페스티벌, 흉가 서바이벌, 아반떼 풀체인지, 김혜경/정치 등.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top row unchanged: `pbakaus/impeccable` (JavaScript, 57,819★). No new star since 08-12 (still 89). Below-the-fold carry-over visible this pass: `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund` — all pre-existing stars, not new.

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" unchanged vs 08:00 baseline: 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16).
"어제"(08-12) unchanged: CUDA/날씨 알림 (오후 10:38) · Google 검색 방문 (오후 9:12) · 한컴독스 방문 (오전 11:26) · 한글 웹 검색 (오전 11:26) · Hermes Agent 한국어 문서 방문 + hermes 검색 (오전 10:25). No genuinely-new 08-13 search between 08:00 and 19:00.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/엔터 noise.
- Strongest signal type this run: none new — every surface reinforced the same-day 08:00 baseline.

## Why this raw exists
Evidence store for the 19:00 afternoon social pass. Confirms a clean same-day reinforcement-only / no-new-signal run: Threads own `/threads`+`/replies` byte-identical to the 08:00 baseline (no posts made between passes), CDP surfaces (YouTube/GitHub/Google) all 변화 없음. Durable layer unchanged.
