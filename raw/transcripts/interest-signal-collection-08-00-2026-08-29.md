---
title: Interest signal collection — 08:00 social run (2026-08-29)
type: raw
created: 2026-08-29
captured_at: 2026-08-29T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-08-29 raw existed before this run. Baseline = prior social
  transcript interest-signal-collection-19-00-2026-08-28.md (reinforcement-only; CK's own delay-publishing
  experiment thread + reply chain, all other surfaces unchanged/unavailable). Live Chrome CDP UP (Chrome/147).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5137173), /v1.0/me OK
  (ethan13917). GitHub stars + Google My Activity + YouTube subscriptions read via stdlib raw-socket WS CDP client.
  Result: CLEAN CROSS-DAY NO-NEW-SIGNAL. Threads /threads top row byte-identical to the 19:00 baseline
  (18334131481261806 — the 08-28 15:32 KST delay-publishing thread) AND /replies top row byte-identical
  (18102036731628406 — 08-28 15:39 KST reply); CK posted nothing between the 19:00 pass and this 08:00 pass
  → genuinely unchanged, not a transport artifact. /mentions empty; keyword_search 'agent' all CK's own older
  posts (reinforcement). GitHub stars byte-identical (len 2839, 92 stars) -> 변화 없음. Google My Activity
  byte-identical (len 5301, stale tab, top=오픈AI 오후6:48/Outlook/CUDA·날씨) -> 변화 없음. YouTube subscriptions
  blank nav-only shell (len 17) -> unavailable (access fact). Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-29 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-29
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0829.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0829.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137173); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0829.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0829_0800.json`.
- **Baseline** = prior social transcript `interest-signal-collection-19-00-2026-08-28.md` (reinforcement-only). No `08-00-2026-08-29` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Clean cross-day no-new-signal.** CK made no new posts between the 19:00 baseline and this 08:00 pass, so both Threads own-surfaces are byte-identical to the baseline. All CDP surfaces unchanged or unavailable. Route the whole run `raw_only`; durable action = raw transcript + Honcho audit + `log.md` entry only. index.md and all concept pages unchanged.

## 1) Threads (Graph API) — both surfaces static (no-new-signal)

### /threads — UNCHANGED (top identical to 19:00 baseline)
- `18334131481261806` (2026-08-28 06:32:52 UTC / **15:32 KST**) — https://www.threads.com/@ethan13917/post/DckugrYkwd3
  > 며칠 전부터 조회수 왜 폭망했나 붙잡고 실험하던 거, 이제 숫자가 좀 쌓였어. 딜레이 두고 하나씩 올리기 시작하니까 바닥 찍었던 조회수가 조금씩 올라오긴 하네.
- This was already the top row in the 19:00 baseline. No new own post since.

### /replies — UNCHANGED (top identical to 19:00 baseline)
- `18102036731628406` (2026-08-28 06:39:16 UTC / **15:39 KST**) — https://www.threads.com/@ethan13917/post/DckvPloE_p1
  > 사람들은 뭘 해달라는 글보다 그냥 관찰 하나 툭 던지는 걸 더 봐주는 거 같아. 앞으로는 구걸하는 톤 빼고 그냥 내가 본 거만 담백하게 올려보려고.
- Same top reply as the 19:00 baseline (the 15:34-15:39 KST reply chain). No new reply since.

### /mentions — empty
No mentions.

### keyword_search 'agent' — reinforcement (CK's own older posts)
Top hits all CK's own posts: `18146723302555311` (plicara agent-skill-languages), `18335069719286024` (Snowflake Copilot CI/CD 보안), `18073626953394942` (08-03 agent-security 6/6 thread), `18407011492183414` (05-01 AgentCore/managed-agents 4/4 thread). No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08-28 caches. Top still `snflkd/fluent-korean` (709·52), `anthropics/defending-code-reference-harness` (7,351·593), `piyushsachdeva/CKA-2024`. No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08-28 caches (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes Agent/한컴독스 (어제). Older 8월 5일 rows (NASDAQ:TSLA, 클로드, 쿠버네티스) still present. No new search captured since 08-28.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- No surface produced a genuinely-new row vs the 19:00 baseline. Threads both-static (CK posted nothing between passes), GitHub stars / Google My Activity byte-identical, YouTube blank shell.
- keyword_search hits are all CK's own already-durable posts → reinforcement, not new discovery.

## Why this raw exists
Evidence store for the 2026-08-29 08:00 social pass. Clean cross-day no-new-signal: Threads own-surfaces byte-identical to the prior evening baseline (CK made no posts between passes), every CDP surface unchanged or unavailable. Route `raw_only`; no durable page or index change.
