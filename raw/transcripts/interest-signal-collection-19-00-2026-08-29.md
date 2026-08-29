---
title: Interest signal collection — 19:00 social run (2026-08-29)
type: raw
created: 2026-08-29
captured_at: 2026-08-29T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-08-29 raw existed before this run. Baseline = same-day
  interest-signal-collection-08-00-2026-08-29.md (clean cross-day no-new-signal) + 11:00 new-target
  reinforcement pass. Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured
  path); token refresh OK (expires_in 5097626), /v1.0/me OK (ethan13917). GitHub stars + Google My
  Activity + YouTube subscriptions read via stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY. Unlike the 08:00 both-static pass, CK DID post between 08:00 and 19:00,
  so Threads /threads AND /replies tops both moved — but every new own row restates CK's ongoing
  view-count experiment and concludes it ("딜레이가 핵심이 아니라 남에게 쓸모있는 정보가 조회수를
  만든다; 다음주부터 정보글로 복귀"). Own-posts-only-reinforcement of the already-durable
  "정보글이 조회수를 만든다" lesson → raw_only. Two NEW REPOST_FACADEs recovered by og:title only:
  @choi.openai (DcnTHbJExNu, AI-adjacent) + @aicoffeechat (DcmwNuJkws9, AI-adjacent) — both text
  unrecoverable without CDP, single-surface → raw_only. /mentions empty; keyword_search 'agent' all
  CK's own older posts (reinforcement). GitHub stars byte-identical (len 2839, 92 stars) → 변화 없음.
  Google My Activity byte-identical (len 5301, stale tab) → 변화 없음. YouTube subscriptions blank
  nav-only shell (len 17) → unavailable (access fact). Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-29 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-29
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0829.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0829.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097626); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0829.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0829_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-08-29.md` (clean cross-day no-new-signal) + `interest-signal-collection-11-00-2026-08-29.md` (new-target reinforcement). No `19-00-2026-08-29` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only.** The 08:00 pass was both-static (CK posted nothing overnight). This 19:00 pass is different: CK posted a fresh thread + a full reply chain around **15:31–15:58 KST** concluding his multi-day view-count experiment. New own-post evidence, but it restates the already-durable "정보글이 조회수를 만든다" lesson (info posts > self-reflection posts) — own-posts-only-reinforcement → route `raw_only`. Two new `REPOST_FACADE`s (AI-adjacent authors, text unrecoverable). All CDP surfaces unchanged or unavailable. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both surfaces moved, but reinforcement

### /threads — NEW own posts (experiment conclusion) + 2 new REPOST_FACADE
- `18113614858988319` (2026-08-29 06:52:45 UTC / **15:52 KST**) — https://www.threads.com/@ethan13917/post/DcnVlR9Exxe
  > 며칠째 내 조회수 붙잡고 실험한 거, 오늘 데이터를 쫙 뽑아보니까 내가 착각하고 있었더라고. 딜레이가 문제의 핵심이 아니었어.
- `18132499333726979` (2026-08-29 06:31:39 UTC / **15:31 KST**) — https://www.threads.com/@ethan13917/post/DcnTKuXk4XA
  > 조회수 폭망한 거 붙잡고 딜레이 두고 올리는 실험한 지 며칠 됐는데, 오늘 숫자를 쭉 놓고 보니까 좀 냉정하게 봐야겠더라고.
- `17990609628010840` (2026-08-29 06:31:09 UTC / **15:31 KST**) — **REPOST_FACADE** — https://www.threads.com/@ethan13917/post/DcnTHbJExNu
  - og:title recovered: `CHOI (@choi.openai) on Threads` — reposted author **@choi.openai** (AI-adjacent). og:description empty; post text not recoverable without CDP.
- `17938296684347324` (2026-08-29 01:26:10 UTC / **10:26 KST**) — **REPOST_FACADE** — https://www.threads.com/@ethan13917/post/DcmwNuJkws9
  - og:title recovered: `AI Coffee Chat (@aicoffeechat) on Threads` — reposted author **@aicoffeechat** (AI-adjacent). og:description empty; post text not recoverable without CDP.
- Carry (unchanged below): `18334131481261806` (08-28 15:32 KST delay-publishing thread — DckugrYkwd3), 08-27/08-26 experiment-log posts.

### /replies — NEW reply chain (experiment conclusion, 15:33–15:58 KST)
- `17938539738359002` (06:58:47 UTC / **15:58 KST**) — https://www.threads.com/@ethan13917/post/DcnWRizk-Yy
  > 사실 이게 사람이든 AI든 똑같은 교훈인 듯. 내 얘기 들어달라고 붙잡는 것보다, 상대가 얻어갈 게 있어야 계속 보러 온다는 거. 다음주부턴 정보글로 돌아갈게.
- `18102511823523206` (06:57:39 UTC / **15:57 KST**) — https://www.threads.com/@ethan13917/post/DcnWJF-E0kK
  > 그래서 계획은 이래. 내 실험일지 그만 쓰고, 그날 본 것 중에 제일 쓸만한 걸 골라서 정리해 올린다. 딜레이는 부작용 없으니까 그냥 계속 켜두고. 자기반성은 가…
- `17954624007012351` (06:56:28 UTC / **15:56 KST**) — https://www.threads.com/@ethan13917/post/DcnWAgnk06X
  > 그러니까 답이 나왔어. 딜레이는 바닥 깔린 거 건져올린 정도고, 진짜로 조회수를 만든 건 내 얘기가 아니라 남한테 쓸모있는 정보였던거야. 순서를 잘못 짚고 있었네…
- `17944154790323142` (06:55:06 UTC / **15:55 KST**) — https://www.threads.com/@ethan13917/post/DcnV2ifEycN
  > 제일 많이 본 글이 뭐였냐면, 남들이 만든 AI 스킬이 무슨 언어로 쓰였나 정리한 거였어. 천뷰 넘게 나왔어. 나랑 상관없이 그냥 남이 궁금해할 정보였던거지.
- `18186673267406113` (06:53:56 UTC / **15:53 KST**) — https://www.threads.com/@ethan13917/post/DcnVt_Tk9lB
  > 그니까 내 글을 종류별로 갈라서 조회수를 봤거든. 정보 정리해서 올린 글들은 백오십, 이백, 심지어 천도 나왔어. 근데 내 조회수 얘기 하는 반성글은 죄다 열아홉…
- Earlier same-chain rows (`18111271367327927` 15:36, `18101763494232681` 15:35, `18116449450983591` 15:33 KST) continue the experiment-log narrative.

### /mentions — empty
No mentions.

### keyword_search 'agent' — reinforcement (CK's own older posts)
Top hits all CK's own posts: `18146723302555311` (plicara agent-skill-languages), `18335069719286024`/`18104722361592294` (Snowflake Copilot CI/CD 보안), `18073626953394942` (08-03 agent-security 6/6 thread). No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08:00/08-28 caches. Top still `snflkd/fluent-korean` (709·52), `anthropics/defending-code-reference-harness` (7,351·593), `piyushsachdeva/CKA-2024`. No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes Agent/한컴독스 (어제). Older 8월 5일 rows (NASDAQ:TSLA, 클로드, 쿠버네티스, Durable Agent Runtime, 양도소득세) still present. No new search captured since 08:00.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Threads own-surfaces genuinely moved this pass (CK posted 15:31–15:58 KST), unlike the 08:00 both-static run — but the content is CK's own single-surface conclusion of his view-count experiment, restating the already-durable "정보글이 조회수를 만든다" lesson → reinforcement, not a new durable branch.
- Two new REPOST_FACADEs recovered by og:title only (@choi.openai, @aicoffeechat, both AI-adjacent); post text unrecoverable without CDP → single-surface `raw_only`.
- keyword_search hits are all CK's own already-durable posts → reinforcement, not new discovery.
- GitHub stars / Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-08-29 19:00 social pass. Reinforcement-only: CK posted a fresh experiment-conclusion thread + reply chain (own-posts-only reinforcement of an already-durable lesson) plus two AI-adjacent REPOST_FACADEs; every CDP surface unchanged or unavailable. Route `raw_only`; no durable page or index change.
