---
title: Interest signal collection — 08:00 social run (2026-08-28)
type: raw
created: 2026-08-28
captured_at: 2026-08-28T08:01 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:01 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-08-28 raw existed before this run. Baseline = the most-recent
  completed social transcript by mtime = 2026-08-27 19:00
  (interest-signal-collection-19-00-2026-08-27.md), itself a reinforcement-only run.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5137191). GitHub stars + Google My Activity read via stdlib raw-socket WS CDP client;
  YouTube subscriptions tab reload came up as a blank nav-only shell (len 17) = access fact, NOT 변화 없음.
  Result: clean no-new-signal morning run. Threads /threads AND /replies tops byte-identical to the
  08-27 19:00 baseline (CK made no posts between passes); /mentions empty; keyword_search 'agent' all
  CK's own older posts. GitHub stars byte-identical to the 19:00 cache (len 2839, 92 stars) -> 변화 없음.
  Google My Activity byte-identical to the 19:00 cache (len 5301, top=오픈AI/Outlook/CUDA) -> 변화 없음.
  YouTube subscriptions blank shell after reload (len 17) -> unavailable (access fact). Durable action =
  this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-28 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-28
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0828.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` reload → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0828.json`; CDP target list `~/wiki/.cache/cdp_list_0800_0828.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137191); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0828.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0828_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-27.md` (itself reinforcement-only). No `08-00-2026-08-28` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Clean no-new-signal morning run.** Every collected surface is byte-identical to the 08-27 19:00 baseline. Threads `/threads` AND `/replies` newest rows both match the baseline (top = CK's own 08-27 15:32 curation-thread cluster `18418843435144547`, still the 조회수/content-strategy self-reflection axis); CK posted nothing between passes. `/mentions` empty. keyword_search 'agent' all CK's own older posts (reinforcement). GitHub stars byte-identical (92 stars). Google My Activity byte-identical (top = 오픈AI / Outlook / CUDA searches). YouTube subscriptions reloaded to a blank nav-only shell (len 17) → unavailable (access fact, not negative evidence). Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — 변화 없음 (byte-identical to 08-27 19:00 baseline)

### /threads — UNCHANGED
Newest row identical to baseline:
- `18418843435144547` (2026-08-27 06:32:47 UTC / 15:32 KST) — content-strategy self-reflection (조회수 폭망 재진단: 답글 스팸이 아니라 글 종류 문제). Root of the 08-27 1530 auto-published curation thread. All rows below are 08-24..08-26 carry-over.

### /replies — UNCHANGED
Newest reply identical to baseline:
- `17979563091115555` (2026-08-27 06:38:41 UTC / 15:38 KST) — "결국 반성 하나 남는다. 다음부턴 내 상황 중계 말고..." (same 1530 thread reply chain).

### /mentions — empty
No mentions.

### keyword_search 'agent' — reinforcement (CK's own older posts)
Top hits all CK's own posts: `18146723302555311` (plicara agent-skill-languages), `18335069719286024` (Snowflake Copilot CI/CD 보안), the 08-03 agent-security 6/6 thread, the 05-01 AgentCore/managed-agents thread. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08-27 19:00 cache. No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08-27 19:00 cache. Top rows: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 오후 10:38). No new search since baseline.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
Fresh reload of `https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as the 08-27 19:00 pass.

## Filtering notes
- No surface produced a genuinely-new row vs the 08-27 19:00 baseline.
- Threads `REPOST_FACADE`/own-post distinction not needed this run — no new rows at all.
- YouTube subscriptions blank shell is a hydration/access fact, not a content signal.

## Why this raw exists
Evidence store for the 2026-08-28 08:00 social pass. Confirms a clean no-new-signal morning: Threads + GitHub stars + Google My Activity all byte-identical to the prior social baseline, YouTube unavailable. Route `raw_only`; no durable page or index change.
