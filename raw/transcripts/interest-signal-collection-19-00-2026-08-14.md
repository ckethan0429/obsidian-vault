---
title: Interest signal collection — 19:00 social run (2026-08-14)
created: 2026-08-14
type: raw-transcript
captured_at: 2026-08-14T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social pass, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-14 raw existed before this run.
  Baseline = same-day 08:00 social transcript
  (interest-signal-collection-08-00-2026-08-14.md, reinforcement-only /
  no-new-signal) plus the 11:00 new-target run. Live Chrome CDP
  `127.0.0.1:9222` UP (Chrome/147); hydrated YouTube subscriptions / GitHub
  /stars / Google My Activity read via stdlib raw-socket WS CDP client
  (/tmp/cdp_read_1900_0814.py). Threads via official Graph API (configured
  path): token refresh OK, `/v1.0/me` OK (id 27173231028946699, ethan13917).
  RESULT: REINFORCEMENT-ONLY. One genuinely-new own `/replies` row appeared
  since the 08:00 pass — `DcAQnEjkyS6` (2026-08-14T02:38Z = 11:38 KST)
  TEXT_POST "모두가 개발자가 되고 모두가 프로그래밍을 한다 … 커뮤니케이션 스킬이 제일 중요 …
  에이전트 워크플로우의 매커니즘을 갖춘 개발자" — CK's OWN single-surface post
  reinforcing his coding-agent / AI-workflow / everyone-programs axis
  (own-posts-only-reinforcement rule → raw_only, no durable branch).
  Own `/threads` top (`Db7jAcME5yK` 08-12 미중 AI 모델 전쟁 ROOT) and the full
  6-part `/replies` token-economics chain byte-identical to the 08:00 baseline.
  `/mentions` empty. YouTube = same 삼전닉스/코스피 반도체 + 대한축구협회 정몽규
  성접대 + 폭염/힙합/엔터 noise with the same two weak rotational AI rows;
  GitHub `/stars` still 89 (pbakaus/impeccable top, unchanged); Google My
  Activity unchanged (오픈AI 알림 6:48 + Outlook 12:16-12:17, no new 08-14
  afternoon search). Durable action = this raw transcript + a Honcho audit +
  a log entry only; index.md and all concept pages unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-14.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-14.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-14 (captured ~19:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-14.md` existed → collection proceeded on time (~19:05 KST).
- Baseline: same-day 08:00 social transcript (reinforcement-only) + 11:00 new-target transcript.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Hydrated targets read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0814.py`): YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301). Raw JSON cached `~/wiki/.cache/cdp_0814_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_1900_0814.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0814_1900.json`.

## 1) Threads (Graph API) — own posts / replies / mentions
Account: `ethan13917` (id 27173231028946699)

### `/replies` — ONE NEW row since 08:00 baseline
> [2026-08-14T02:38Z = 11:38 KST] TEXT_POST `18132387253628663` (`DcAQnEjkyS6`) — "모두가 개발자가 되고 모두가 프로그래밍을 한다. 기존 개발자들은 그들만의 세상에서 벗어나서 다른 도메인에 살던, 개발자들만의 당연함과 쪼에서 벗어나야한다. 커뮤니케이션 스킬이 제일 중요할듯하다. 기존 개발자들은 자기가 디자인도하고 pm도 하면서 필요한 스킬을 장착하면 에이전트 워크플로우의 매커니즘을 갖춘 개발자가 되겠지"
> https://www.threads.com/@ethan13917/post/DcAQnEjkyS6

Interpretation note: CK's OWN post, single-surface. Reinforces the coding-agent / AI-workflow / "everyone programs" axis already durable in the wiki (managed-agents / agent workflow). Own-posts-only-reinforcement → `raw_only`, no concept-page change.

### `/threads` (own posts) — NO NEW rows vs 08:00 baseline
Top row byte-identical: `Db7jAcME5yK` (18329220475275183, 2026-08-12T06:43Z) — "미중 AI 모델 전쟁 / 토큰 가격은 한 달 만에 13.6% 떨어졌다. DeepSeek이 구글을 제치고 토큰 사용량 2위 랩이 됐다…" (ROOT).
Carry-over identical to baseline: `18099596678203517` (30만원 챌린지 Day 2), `18113262016984508` (무료 AI 토큰 시대의 종료), `18138408793585928` (챌린지 Day 1), `18104282615582932` (윤자동 30만원 도전), `17889069084426720` (주간 업무회의 기시감), `18089312705392873` (AI 단가 싸움 08-04), REPOST_FACADEs `18145884259527886`/`17996171441808341` (08-08), `18103368383177215` (08-03).

### `/replies` chain carry-over (identical to baseline)
Full 6-part AI token-economics chain (1/6..6/6, `Db7jIeRE-ZG` etc.) + 30만원-스프린트 replies (크몽 승인 대기 13건, Gumroad/래피드 결제 경로, 업무별 AI 비서) — all identical to baseline.

### `/mentions`
> 0 rows (empty dataset).

## 2) YouTube subscriptions (CDP) — 변화 없음 (reinforcement)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Same two weak rotational AI rows as the 08:00 baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락 ("또 급락! 삼전닉스 호실적인데!! 추풍낙엽 코스피 반도체 왜?" 3.1만회), 대한축구협회 정몽규 성접대 스캔들 (다수 라이브: 이임생 "정몽규가 시켰다"), 폭염 19명 사망(안될과학), 힙합플레이야 페스티벌, 흉가 서바이벌, 아반떼 풀체인지, 뻑가/김선태 Shorts, 김혜경 정치.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top row unchanged: `pbakaus/impeccable` (JavaScript, 57,819★). No new star since 08-12 (still 89). Carry-over: `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund` — all pre-existing.

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" unchanged vs 08:00 baseline: 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16). No genuinely-new 08-14 afternoon search.
"어제" unchanged: CUDA/날씨 알림 (오후 10:38) · 한컴독스 방문 · 한글 웹 검색 · Hermes Agent 문서 방문 + hermes 검색.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/엔터 noise.
- Strongest signal this run: the new own reply `DcAQnEjkyS6` (agent-workflow / everyone-programs) — on-axis but single-surface own post → reinforcement, not a new durable branch.

## Why this raw exists
Evidence store for the 19:00 afternoon social pass. Confirms a reinforcement-only run: one new own Threads reply (`DcAQnEjkyS6`, agent-workflow axis) posted between the 08:00 and 19:00 passes, everything else (own `/threads`, 6-part chain, YouTube/GitHub/Google) byte-identical to the 08:00 baseline. Durable layer unchanged.
