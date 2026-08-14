---
title: Interest signal collection — 08:00 social run (2026-08-15)
created: 2026-08-15
type: raw-transcript
captured_at: 2026-08-15T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-15 raw existed before this run.
  Baseline = most-recent-by-mtime completed social transcript =
  interest-signal-collection-19-00-2026-08-14.md (reinforcement-only). Live
  Chrome CDP `127.0.0.1:9222` UP (Chrome/147); hydrated YouTube subscriptions
  / GitHub /stars / Google My Activity read via stdlib raw-socket WS CDP
  client (/tmp/cdp_read_0800_0815.py). Threads via official Graph API
  (configured path): token refresh OK, `/v1.0/me` OK (id 27173231028946699,
  ethan13917). RESULT: CROSS-DAY BOTH-STATIC NO-NEW-SIGNAL. Own `/threads`
  top (`Db7jAcME5yK` 08-12 미중 AI 모델 전쟁 ROOT) AND `/replies` top
  (`DcAQnEjkyS6` 08-14 11:38 KST, already captured in the 08-14 19:00
  baseline) both byte-identical to the prior social baseline; CK posted
  nothing between passes. `/mentions` empty. YouTube = same 삼전닉스/코스피
  반도체 + 정몽규 성접대 + 폭염/힙합/정치/엔터 noise with the same two weak
  rotational AI rows; GitHub `/stars` still 89 (pbakaus/impeccable top,
  unchanged — deeper scroll rows are pre-existing 89, no new star); Google My
  Activity "오늘" unchanged (오픈AI 알림 6:48 + Outlook 12:16-17, no new
  08-15 morning search; the claude-code/cocoindex/threads rows are under 7월
  27일/30일 deep-scroll headers, NOT today). Durable action = this raw
  transcript + a Honcho audit + a log entry only; index.md and all concept
  pages unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-08-14.md
  - raw/transcripts/interest-signal-collection-08-00-2026-08-14.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-15 (captured ~08:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-15.md` existed → collection proceeded on time (~08:05 KST).
- Baseline: most-recent-by-mtime completed social transcript = 08-14 19:00 (reinforcement-only). CK posted nothing between passes.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Hydrated targets read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0815.py`): YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301). Raw dump cached `~/wiki/.cache/cdp_0815_0800_full.txt`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_0800_0815.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0815_0800.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — 변화 없음
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — NO NEW rows vs 08-14 19:00 baseline
Top row byte-identical: `Db7jAcME5yK` (18329220475275183, 2026-08-12T06:43Z) — "미중 AI 모델 전쟁 / 토큰 가격은 한 달 만에 13.6% 떨어졌다. DeepSeek이 구글을 제치고 토큰 사용량 2위 랩이 됐다…" (ROOT).
> https://www.threads.com/@ethan13917/post/Db7jAcME5yK

Carry-over identical to baseline: `18099596678203517` (30만원 챌린지 Day 2), `18113262016984508` (무료 AI 토큰 시대의 종료), `18138408793585928` (챌린지 Day 1), `18104282615582932` (윤자동 30만원 도전), `17889069084426720` (주간 업무회의 기시감), `18089312705392873` (AI 단가 싸움 08-04), REPOST_FACADEs `18145884259527886`/`17996171441808341` (08-08), `18103368383177215` (08-03).

### `/replies` — NO NEW rows vs 08-14 19:00 baseline
Top row byte-identical: `DcAQnEjkyS6` (18132387253628663, 2026-08-14T02:38Z = 11:38 KST) — "모두가 개발자가 되고 모두가 프로그래밍을 한다 … 커뮤니케이션 스킬이 제일 중요할듯하다 … 에이전트 워크플로우의 매커니즘을 갖춘 개발자가 되겠지". Already captured in the 08-14 19:00 baseline (own single-surface post, agent-workflow axis).
> https://www.threads.com/@ethan13917/post/DcAQnEjkyS6

Full 6-part AI token-economics chain (1/6..6/6) + 30만원-스프린트 replies (크몽 승인 대기 13건, Gumroad/래피드 결제 경로, 업무별 AI 비서) — all identical to baseline.

### `/mentions`
> 0 rows (empty dataset).

## 2) YouTube subscriptions (CDP) — 변화 없음 (reinforcement)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Same two weak rotational AI rows as the baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락 ("또 급락! 삼전닉스 호실적인데!! 추풍낙엽 코스피 반도체 왜?" 3.1만회), 대한축구협회 정몽규 성접대 스캔들 (다수 라이브: 이임생 "정몽규가 시켰다"), 폭염 19명 사망(안될과학), 힙합플레이야, 뻑가/김선태 Shorts, 김혜경 정치.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top row unchanged: `pbakaus/impeccable` (JavaScript, 57,819★). Star count still 89 → no new star since 08-12. Deeper-scroll rows now visible (`lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, `nathankim0/clean-architecture-skills`, `lidge-jun/opencodex`, `jung-wan-kim/teamclaude`, `codecrafters-io/build-your-own-x`) are all pre-existing within the same 89 — not new stars.

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" unchanged vs baseline: 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16). No genuinely-new 08-15 morning search.
Note: deep-scroll rows for "claude code"/"permission mode"/"cocoindex"/"threads" are dated **7월 27일 / 7월 30일** headers, i.e. old history, NOT today.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/엔터 noise.
- Strongest signal this run: none genuinely-new. Both Threads surfaces static since the 08-14 19:00 baseline; YouTube/GitHub/Google unchanged.

## Why this raw exists
Evidence store for the 08:00 morning social pass. Confirms a clean cross-day both-static no-new-signal run: own `/threads` top AND `/replies` top both byte-identical to the prior social baseline (08-14 19:00), CK posted nothing between passes, YouTube/GitHub/Google unchanged. Durable layer unchanged.
