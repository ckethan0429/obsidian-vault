---
title: Interest signal collection — 19:00 social run (2026-08-28)
type: raw
created: 2026-08-28
captured_at: 2026-08-28T19:10 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:10 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-08-28 raw existed before this run (only the same-day 08:00 social
  + 11:00 new-target). Baselines = same-day 08:00 social transcript
  (interest-signal-collection-08-00-2026-08-28.md, clean no-new-signal) + 11:00 new-target transcript
  (reinforcement-only). Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path);
  token refresh OK (expires_in 5183998), /v1.0/me OK (ethan13917). GitHub stars + Google My Activity +
  YouTube subscriptions read via stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY. The one genuinely-new signal is Threads: CK POSTED a new own thread today
  ~15:32 KST (18334131481261806 — https://www.threads.com/@ethan13917/post/DckugrYkwd3) continuing his
  조회수/delay-publishing experiment ("딜레이 두고 하나씩 올리기 시작하니까 바닥 찍었던 조회수가 조금씩 올라오긴 하네"),
  plus a fresh 5-part reply chain (15:34-15:39 KST, 조회수 16→30→60→69 회복 + 포맷 문제 반성 + 구걸 톤 빼고 관찰
  담백하게). This is CK's OWN single-surface post reinforcing the already-tracked content-strategy
  self-reflection axis (same axis as the 08-27 1530 curation thread) → own-posts-only-reinforcement → raw_only.
  /mentions empty; keyword_search 'agent' all CK's own older posts (reinforcement). GitHub stars byte-identical
  to the 08:00 cache (len 2839, 92 stars) -> 변화 없음. Google My Activity byte-identical (len 5301, stale tab,
  top=오픈AI/Outlook/CUDA; auction/양도세/baby-gear rows all old 8월4-5일) -> 변화 없음. YouTube subscriptions
  blank nav-only shell (len 17) -> unavailable (access fact). Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-28 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-28
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0828.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0828.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5183998); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0828.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0828_1900.json`.
- **Baselines** = same-day `interest-signal-collection-08-00-2026-08-28.md` (clean no-new-signal) + `interest-signal-collection-11-00-2026-08-28.md` (reinforcement-only). No `19-00-2026-08-28` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only.** The one genuinely-new signal is Threads: **CK posted a new own thread today ~15:32 KST** (between the 08:00 and 19:00 passes) continuing his 조회수/delay-publishing experiment, with a fresh 5-part reply chain reporting empirical results (조회수 회복 16→30→60→69, "딜레이가 반은 맞고 나머지 반은 포맷 문제"). This is CK's OWN single-surface post reinforcing the already-tracked content-strategy self-reflection axis (same axis as the 08-27 1530 curation thread) → own-posts-only-reinforcement → `raw_only`, no concept-page change. All CDP surfaces unchanged: GitHub stars byte-identical (92 stars), Google My Activity byte-identical (stale tab, top rows old), YouTube subscriptions blank shell (unavailable). Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — NEW own post + reply chain (raw_only, own-posts-only-reinforcement)

### /threads — MOVED (CK posted a new thread today ~15:32 KST)
New top row, genuinely new since the 08:00 baseline:
- `18334131481261806` (2026-08-28 06:32:52 UTC / **15:32 KST**) — https://www.threads.com/@ethan13917/post/DckugrYkwd3
  > 며칠 전부터 조회수 왜 폭망했나 붙잡고 실험하던 거, 이제 숫자가 좀 쌓였어. 딜레이 두고 하나씩 올리기 시작하니까 바닥 찍었던 조회수가 조금씩 올라오긴 하네.
- Prior top `18418843435144547` (08-27 15:32 KST — the 1530 curation thread) is now the second row → confirms CK made exactly one new post since the 08:00 pass.

### /replies — MOVED (fresh 15:34-15:39 KST reply chain to the new thread)
New rows since 08:00 baseline (all 2026-08-28, own replies extending the new thread):
- `18102036731628406` (06:39:16 UTC / 15:39 KST) — https://www.threads.com/@ethan13917/post/DckvPloE_p1
  > 사람들은 뭘 해달라는 글보다 그냥 관찰 하나 툭 던지는 걸 더 봐주는 거 같아. 앞으로는 구걸하는 톤 빼고 그냥 내가 본 거만 담백하게 올려보려고.
- `18198836899373745` (06:37:57 UTC / 15:37 KST) — https://www.threads.com/@ethan13917/post/DckvGAMEwYX
  > 결국 딜레이가 반은 맞았던 거고, 나머지 반은 포맷 문제였던 거지. 골라줘 투표해줘 하고 남한테 뭘 시키는 글은 잘 안 퍼지더라.
- `18118430656902541` (06:36:41 UTC / 15:36 KST) — https://www.threads.com/@ethan13917/post/Dcku8u_k1Du
  > 근데 여기서 좀 애매한 게, 예순아홉까지 올라와도 평소 백몇십에는 아직 한참 못 미치거든.
- `18114366167065714` (06:35:19 UTC / 15:35 KST) — https://www.threads.com/@ethan13917/post/DckuywPkyII
  > 그담부터 텀 두고 하나씩 올렸더니 서른, 예순, 예순아홉 이렇게 회복이 되더라고.
- `17993183364042926` (06:34:03 UTC / 15:34 KST) — https://www.threads.com/@ethan13917/post/DckupiqE4VX
  > 그니까 말투 골라달라고 올렸던 그 글이 조회수 열여섯이었거든. 그게 진짜 바닥이었어.

### /mentions — empty
No mentions.

### keyword_search 'agent' — reinforcement (CK's own older posts)
Top hits all CK's own posts: `18146723302555311` (plicara agent-skill-languages), `18335069719286024` (Snowflake Copilot CI/CD 보안), `18073626953394942` (08-03 agent-security 6/6 thread), `18407011492183414` (05-01 AgentCore/managed-agents 4/4 thread). No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08:00 cache. Top still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`, `lyogavin/airllm`. No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제). The auction (courtauction/법원경매/타경 11662), 양도소득세/홈택스, and baby-gear (쏘서/보행기) rows are all old 8월 4-5일 entries already present in the baseline. No new search captured since 08:00.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as the 08:00 pass.

## Filtering notes
- Only Threads produced a genuinely-new row vs the 08:00 baseline, and it is CK's OWN post/reply-chain on the already-tracked content-strategy axis → single-surface `raw_only`.
- The new Threads thread is the empirical follow-up to CK's delay-publishing hypothesis (spacing posts ~1 min apart to avoid looking spammy) — content-cadence meta-commentary, not a new AI/infra durable branch.
- GitHub stars / Google My Activity byte-identical; YouTube blank shell = access fact.

## Why this raw exists
Evidence store for the 2026-08-28 19:00 social pass. Reinforcement-only: CK posted one new own thread + reply chain today ~15:32 KST continuing his 조회수/delay-publishing experiment (own-posts-only-reinforcement of the content-strategy axis); every other surface is unchanged or unavailable. Route `raw_only`; no durable page or index change.
