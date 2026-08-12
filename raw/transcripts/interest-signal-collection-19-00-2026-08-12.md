# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-12 (captured ~19:00 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social pass, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-12 raw existed before this run.
  Baselines = same-day 08:00 social (`-08-00-2026-08-12`, cross-day both-static
  no-new-signal) + same-day 11:00 new-target (`-11-00-2026-08-12`, ONE durable delta
  = Vercel AI Gateway Production Index Aug-2026 append on ai-infra-operating-economics.md)
  + the 08-12 11:00 `query | Threads curation draft` log entry.
  Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147). Threads collected via official
  Graph API (configured path): token refreshed OK, `/v1.0/me` OK (id 27173231028946699,
  ethan13917). THREADS MOVED between 08:00 and 19:00 — CK posted a fresh 6-part AI
  token-economics thread (root `Db7jAcME5yK` 06:43 "미중 AI 모델 전쟁" + replies 1/6..6/6
  `Db7jBKOEzn0`..`Db7jIeRE-ZG`), a 부동산 경매 무잉여 post (`Db7oJdRE_q1` 07:28), and the
  [5일 30만원 챌린지 Day 2] monetization sprint chain. BUT the 6-part AI thread is the
  SAME-DAY 11:00 curation draft NOW PUBLISHED (same-day curation-draft→publish→social
  cycle = ONE reinforcement thread): it restates the already-durable Vercel Production
  Index / operating-economics axis absorbed at 08-12 11:00. Own-posts-only-reinforcement
  rule → raw_only, no concept-page change. The 경매/30만원-챌린지 posts are CK's own
  single-surface personal/monetization content, off the durable AI/agent/infra axis →
  raw_only. `/mentions` empty. CDP surfaces all reinforcement: YouTube subscriptions =
  same two weak rotational AI rows as 08:00/19:00 baselines ("2026 CSS 개발자 40% 정신적
  문제", "Stop telling freshers AI can't do DevOps" live) buried in 코스피/삼전닉스 반도체
  급락 + 축구협회 정몽규 성접대 스캔들 + 정치/엔터 noise; GitHub `/stars` 89 stars, "Recently
  starred" top rows all already recorded (no new star); Google My Activity "오늘" still =
  08-11 rows (오픈AI 6:48, Outlook 12:16-17), "어제"(08-11) now shows CUDA/한컴독스/Hermes
  Agent 문서 rows — historical reinforcement, no genuinely-new 08-12 search. Durable
  action = this raw transcript + Honcho audit + log entry only; index.md and all concept
  pages unchanged.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-12.md` existed → collection proceeded on time (~19:00 KST).
- Baselines: same-day 08:00 social (`interest-signal-collection-08-00-2026-08-12.md`) + same-day 11:00 new-target (`interest-signal-collection-11-00-2026-08-12.md`, Vercel Production Index `append_existing`) + 08-12 11:00 `query | Threads curation draft` log entry.
- **Live Chrome CDP `127.0.0.1:9222` UP** (Chrome/147.0.7727.55). Hydrated targets: YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301). Read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0812.py`).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_1900_0812.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0812_1900.json`.

## 1) Threads (Graph API) — own posts / replies / mentions
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — NEW rows since 08:00 baseline
> [2026-08-12T07:28Z] TEXT_POST `Db7oJdRE_q1` — "부동산 경매에서 초보가 제일 먼저 데는 곳. 최저가만 보고 '싸다!' 하고 들어갔는데 실제로는 그 가격에 못 산다… 이름하여 '무잉여'."
> https://www.threads.com/@ethan13917/post/Db7oJdRE_q1
> [2026-08-12T06:43Z] TEXT_POST `Db7jAcME5yK` — "미중 AI 모델 전쟁 / 토큰 가격은 한 달 만에 13.6% 떨어졌다. DeepSeek이 구글을 제치고 토큰 사용량 2위 랩이 됐다… Anthropic이 전체 게이트웨이 지출의 65%를 가져간다." (ROOT of the 6-part thread)
> https://www.threads.com/@ethan13917/post/Db7jAcME5yK
> [2026-08-12T05:23Z] TEXT_POST `Db7Z2SfEyHX` — "[5일 30만원 챌린지 Day 2] 크몽 상품 8개를 검수 줄에 세우고… 수익 0원. 상품 수보다 구매 동선이 문제였다."
> https://www.threads.com/@ethan13917/post/Db7Z2SfEyHX

Carry-over (identical to 08:00 baseline): `Db5MqsgE0pa` (08-11 무료 AI 토큰 시대의 종료), `Db5ElOtkzM3`, `Db486QDE2qq`, `Db12_2dE-e0`, plus REPOST_FACADEs `DbzAP2CE_r7`/`DbyCIZXk9ee` (08-08, carry-over) and `DbnNVXGE6cn` (08-04).

### `/replies` — NEW 6-part AI token-economics chain (= 11:00 curation draft, now published)
> [2026-08-12T06:43-06:44Z] `Db7jBKOEzn0` 1/6 "토큰 사용량(볼륨)과 매출은 다른 축이다 / 한 게이트웨이가 라우팅한 실제 프로덕션 토큰(수십조 개) 기준…"
> `Db7jDJ3E-RR` 2/6 "중국 오픈웨이트가 토큰 볼륨을 삼킨다 / 오픈웨이트 점유율 3배, DeepSeek 구글 넘어 2위, 블렌디드 단가 −13.6%…"
> `Db7jEQ9k893` 3/6 "매출은 Anthropic의 Claude가 독식 / 볼륨 30%로 지출의 65.1%, 토큰당 평균 단가 4.4배…"
> `Db7jFkOk6iJ` 4/6 "중국산 싼 모델은 매출은 못 가져갔다 / Kimi K3·GLM 5.2가 DeepSeek 단가 11배 넘는 가격대에서 의미있는 볼륨…"
> `Db7jGmOE4fy` 5/6 "새 강자는 중국계 랩 / 성장 90% 이상이 Moonshot·Z.ai, Moonshot 지출 점유율 2.3%로 4배…"
> `Db7jIeRE-ZG` 6/6 "그래서 뭘 봐야 하나 / 비용은 오픈웨이트 라우팅으로 내리고 품질 매출 구간엔 프리미엄. 라우팅 전략 = 마진 설계."
> https://www.threads.com/@ethan13917/post/Db7jBKOEzn0

Plus monetization-sprint replies (`Db7aLHIE3pV`, `Db7aGXzE_9_`, `Db7aCRRk3IN`, `Db7Z-LWEz0l`, `Db7Z58HkzKM` — 크몽/Gumroad/래피드 결제경로·구매동선). Carry-over reply top: `Db5MwQ6k_Xf` (08-11 5/5 free-token chain).

### `/mentions`
> 0 rows (empty dataset).

## 2) YouTube subscriptions (CDP) — 변화 없음 (AI axis) / reinforcement
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Weak rotational AI rows (same lane as 08:00/prior 19:00, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?"
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, live)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락, 대한축구협회 정몽규 성접대 스캔들 (다수 라이브), 김여정/북한, 아반떼 견적, 1주택 아파트, 정치/엔터.

## 3) GitHub stars (CDP) — 변화 없음
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top rows — ALL already captured previously:
> pbakaus/impeccable · lyogavin/airllm · zhaoxuya520/reverse-skill · virattt/ai-hedge-fund · nathankim0/clean-architecture-skills · lidge-jun/opencodex · jung-wan-kim/teamclaude · codecrafters-io/build-your-own-x

No new star since 08:00 (still 89).

## 4) Google My Activity (CDP) — 변화 없음 (new 08-12) / 어제 rows now visible
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" still shows 08-11 rows (same as 08:00): 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16).
"어제"(08-11) now visible: CUDA/날씨 알림 (오후 10:38) · 한컴독스 방문 (오전 11:26) · Hermes Agent 한국어 문서 방문 + hermes 검색 (오전 10:25). Historical reinforcement (CUDA/Hermes mildly on-axis), no genuinely-new 08-12 search.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/정치/엔터/자동차/부동산-유튜버 noise.
- Strongest signal type this run: CK's own 6-part AI token-economics thread — but it is the 11:00 curation draft now published, restating the already-durable operating-economics axis → reinforcement, not new durable signal.

## Why this raw exists
Evidence store for the 19:00 social pass. Confirms an afternoon reinforcement-only run: Threads moved (own posts) but the AI thread is the same-day curation-draft→publish cycle over an already-absorbed axis; CDP surfaces all reinforcement/변화 없음. Durable layer unchanged.
