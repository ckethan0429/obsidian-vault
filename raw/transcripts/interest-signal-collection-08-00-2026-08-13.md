# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-13 (captured ~08:00 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-13 raw existed before this run.
  Baseline = most-recent-by-mtime completed social transcript =
  08-12 19:00 (`interest-signal-collection-19-00-2026-08-12.md`, itself a
  reinforcement-only afternoon pass). Live Chrome CDP `127.0.0.1:9222` UP
  (Chrome/147). Threads collected via official Graph API (configured path):
  token refreshed OK, `/v1.0/me` OK (id 27173231028946699, ethan13917).
  CROSS-DAY BOTH-STATIC NO-NEW-SIGNAL: own `/threads` top (`Db7oJdRE_q1`
  07:28 무잉여 경매) AND `/replies` top (`Db7jIeRE-ZG` 6/6 AI token-economics)
  are BYTE-IDENTICAL to the 08-12 19:00 baseline — CK made no new posts
  between passes. `/mentions` empty. CDP surfaces all reinforcement/변화 없음:
  YouTube subscriptions = same two weak rotational AI rows ("2026 CSS 개발자
  40% 정신적 문제", "Stop telling freshers AI can't do DevOps" live) buried in
  삼전닉스/코스피 반도체 급락 + 대한축구협회 정몽규 성접대 스캔들 + 정치/엔터 noise;
  GitHub `/stars` still 89 (no new star, top row pbakaus/impeccable
  unchanged); Google My Activity "오늘" still = 08-11 rows (오픈AI 6:48,
  Outlook 12:16-17), "어제" now = 08-12 rows (CUDA/날씨 10:38, 한컴독스 11:26,
  Hermes Agent 10:25) already recorded as historical reinforcement in the
  08-12 19:00 baseline — no genuinely-new 08-13 search. Durable action =
  this raw transcript + Honcho audit + log entry only; index.md and all
  concept pages unchanged.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-13.md` existed → collection proceeded on time (~08:00 KST).
- Baseline: 08-12 19:00 social (`interest-signal-collection-19-00-2026-08-12.md`, most-recent-by-mtime completed social transcript; reinforcement-only afternoon pass).
- **Live Chrome CDP `127.0.0.1:9222` UP** (Chrome/147.0.7727.55). Hydrated targets: YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301). Read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0813.py`).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_0800_0813.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0813_0800.json`.

## 1) Threads (Graph API) — own posts / replies / mentions
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — NO NEW rows vs 08-12 19:00 baseline
Top row unchanged (byte-identical to baseline):
> [2026-08-12T07:28Z] TEXT_POST `Db7oJdRE_q1` — "부동산 경매에서 초보가 제일 먼저 데는 곳… 이름하여 '무잉여'."
> https://www.threads.com/@ethan13917/post/Db7oJdRE_q1

Carry-over (identical to baseline): `Db7jAcME5yK` (미중 AI 모델 전쟁, ROOT of 6-part thread), `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa`, `Db5ElOtkzM3`, `Db486QDE2qq`, `Db12_2dE-e0`, `DbnNVXGE6cn`, plus REPOST_FACADEs `DbzAP2CE_r7`/`DbyCIZXk9ee` (08-08), `DblTFNfE_Tr`/`DblG8smExWc` (08-03).

### `/replies` — NO NEW rows vs 08-12 19:00 baseline
Top row unchanged (byte-identical to baseline):
> [2026-08-12T06:44Z] `Db7jIeRE-ZG` 6/6 "그래서 뭘 봐야 하나 / 비용은 오픈웨이트 라우팅으로 내리고 품질 매출 구간엔 프리미엄. 라우팅 전략 = 마진 설계."
> https://www.threads.com/@ethan13917/post/Db7jIeRE-ZG

Carry-over: full 6-part AI token-economics chain (`Db7jBKOEzn0`..`Db7jIeRE-ZG`) + monetization-sprint replies (`Db7aLHIE3pV`, `Db7aGXzE_9_`, `Db7aCRRk3IN`, `Db7Z-LWEz0l`, `Db7Z58HkzKM`) + `Db5MwQ6k_Xf` (08-11 5/5 free-token chain) — all identical to baseline.

### `/mentions`
> 0 rows (empty dataset).

## 2) YouTube subscriptions (CDP) — 변화 없음 (reinforcement)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Weak rotational AI rows (same lane as 08-12 baseline, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락 ("또 급락! 삼전닉스 호실적인데!! 추풍낙엽 코스피 반도체 왜?"), 대한축구협회 정몽규 성접대 스캔들 (다수 라이브), 폭염/힙합/흉가/엔터.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top row unchanged: `pbakaus/impeccable` (JavaScript, 57,819★). No new star since 08-12 (still 89).

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" still shows 08-11 rows (same as baseline): 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16).
"어제"(08-12) now visible: CUDA/날씨 알림 (오후 10:38) · Google 검색 방문 (오후 9:12) · 한컴독스 방문 (오전 11:26) · 한글 웹 검색 (오전 11:26) · Hermes Agent 한국어 문서 방문 + hermes 검색 (오전 10:25). Already recorded as historical reinforcement in the 08-12 19:00 baseline. No genuinely-new 08-13 search.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/엔터 noise.
- Strongest signal type this run: none new — every surface reinforced the 08-12 baseline.

## Why this raw exists
Evidence store for the 08:00 morning social pass. Confirms a clean cross-day both-static no-new-signal run: Threads own `/threads`+`/replies` tops byte-identical to the 08-12 19:00 baseline (no posts made between passes), CDP surfaces all 변화 없음/reinforcement. Durable layer unchanged.
