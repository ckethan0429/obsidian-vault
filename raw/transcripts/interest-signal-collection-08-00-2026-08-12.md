# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-12 (captured ~08:00 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-12 raw existed before this run.
  Baseline = most-recent completed social transcript by mtime = same-day-prior
  08-11 19:00 social (`-19-00-2026-08-11`) plus the 08-11 22:00 new-target + 23:00
  whole-day refinement (all reinforcement-only, zero durable delta applied 08-11).
  Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147). Threads collected via official
  Graph API (configured path): token refreshed OK, `/v1.0/me` OK (id 27173231028946699,
  ethan13917). CROSS-DAY BOTH-STATIC no-new-signal: own `/threads` top =
  `Db5MqsgE0pa` (08-11 17:49 "무료 AI 토큰 시대의 종료") AND `/replies` top =
  `Db5MwQ6k_Xf` (08-11 5/5 free-token chain) are BOTH byte-identical to the 08-11
  19:00 baseline — CK posted nothing between 19:00 and 08:00. `/mentions` empty.
  CDP surfaces all reinforcement: YouTube subscriptions = same two weak rotational
  AI rows as 19:00 ("2026 CSS 개발자 40% 정신적 문제", "Stop telling freshers AI can't do
  DevOps" live) buried in 코스피/삼전닉스 반도체 급락 + 축구협회 정몽규 성접대 스캔들 + 정치/엔터 noise;
  GitHub `/stars` "Recently starred" top rows (impeccable, airllm, reverse-skill,
  ai-hedge-fund, clean-architecture-skills, opencodex, teamclaude, mattpocock/skills,
  build-your-own-x) ALL already recorded in the 08-11 19:00 stars capture — no new
  star; Google My Activity "오늘" still shows 08-11 rows (오픈AI alert 오후 6:48 + Outlook
  12:16-17), page not refreshed to 08-12 → 변화 없음. Durable action = this raw
  transcript + Honcho audit + log entry only; index.md and all concept pages unchanged.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-12.md` existed → collection proceeded on time (~08:00 KST).
- Baseline: most-recent completed social transcript by mtime = 08-11 19:00 social (`interest-signal-collection-19-00-2026-08-11.md`) + 08-11 22:00 new-target + 23:00 refinement (all reinforcement-only).
- **Live Chrome CDP `127.0.0.1:9222` UP** (Chrome/147.0.7727.55). Hydrated page targets: YouTube `feed/subscriptions` (len 9469), GitHub `/stars` (len 2566, `ckchain91`, 89 stars), Google My Activity search (len 5301). Read via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0812.py`).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_0812.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0812_0800.json`.

## 1) Threads (Graph API) — own posts / replies / mentions
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — top rows
> [2026-08-11T08:49Z / 17:49 KST] TEXT_POST `Db5MqsgE0pa` — "무료 AI 토큰 시대의 종료 / 깃허브가 GitHub Models를 소리 없이 완전히 접었다…"
> https://www.threads.com/@ethan13917/post/Db5MqsgE0pa
> [2026-08-11T07:39Z] TEXT_POST `Db5ElOtkzM3` — "[5일 30만원 챌린지 Day 1] 첫 상품이 판매를 시작했다 (Gumroad 전자책 2권 각 19,000원)"
> [2026-08-11T06:32Z] TEXT_POST `Db486QDE2qq` — "윤자동님 '5일 안에 30만원 벌기' 도전…"
> [2026-08-10T01:42Z] TEXT_POST `Db12_2dE-e0` — "회사 주간회의 = 작년 연말 회의록과 똑같다. 이제 빠져야할 시기."

**All identical to the 08-11 19:00 baseline top rows — no new own post since 19:00.**

### `/replies` — top row
> [2026-08-11T08:50Z] TEXT_POST `Db5MwQ6k_Xf` — "5/5 정리 / 에이전트 시대의 비용 구조는 '쓴 만큼 낸다'로 수렴한다…"
> https://www.threads.com/@ethan13917/post/Db5MwQ6k_Xf

**Identical to the 08-11 19:00 baseline `/replies` top (free-token 5-part chain) — no new reply since 19:00.**

### `/mentions`
> 0 rows (empty dataset).

## 2) YouTube subscriptions (CDP) — reinforcement / feed rotation
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Weak rotational AI rows (same lane as 08-11 19:00, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?"
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, live)

Dominant noise (kept in raw, excluded from report): 코스피/삼전닉스 반도체 급락, 대한축구협회 정몽규 성접대 스캔들 (다수 라이브), 김여정/북한, SCHD ETF, 아반떼 견적, 정치/엔터.

## 3) GitHub stars (CDP) — 변화 없음 (all previously recorded)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 89 stars, len 2566)

"Recently starred" top rows — ALL already captured in the 08-11 19:00 `/stars` transcript:
> pbakaus/impeccable · lyogavin/airllm · zhaoxuya520/reverse-skill · virattt/ai-hedge-fund · nathankim0/clean-architecture-skills · lidge-jun/opencodex · jung-wan-kim/teamclaude · codecrafters-io/build-your-own-x · mattpocock/skills

No new star since 08-11 19:00.

## 4) Google My Activity (CDP) — 변화 없음
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)

"오늘" section still shows 08-11 rows (page not refreshed to 08-12):
> 오픈AI 알림 (오후 6:48) · Outlook 방문 (오후 12:17) · outlook 검색 (오후 12:16)

Identical to the 08-11 19:00 baseline — no new 08-12 search rows surfaced yet.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/정치/엔터 noise, ETF/자동차 rows.
- Strongest signal type this run: none genuinely new — Threads both-static, GitHub stars all previously recorded, Google unrefreshed, YouTube same weak rows.

## Why this raw exists
Evidence store for the 08:00 social pass. Confirms a clean cross-day both-static no-new-signal morning run: durable layer unchanged, all surfaces reinforcement or unrefreshed vs the 08-11 19:00 baseline.
