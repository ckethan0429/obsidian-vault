---
title: Interest signal collection — 08:00 social run (2026-08-26)
type: raw
created: 2026-08-26
captured_at: 2026-08-26T08:10 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no interest-signal-collection-08-00-2026-08-26
  raw existed before this run. Baseline = most-recent-by-mtime completed SOCIAL transcript =
  interest-signal-collection-19-00-2026-08-25.md (previous evening; the 22:00 was new-target track).
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token refreshed OK
  (expires_in 5128374). Result: CLEAN NO-NEW-SIGNAL / reinforcement-only. Threads /threads top TWO rows
  (own A/B fluent-korean-tone test 18121004206879425 = DcdHfulk0nd 16:37 KST + agent-skill-languages
  18048552698799161 = DcdEmLmk-DL 16:11 KST) BOTH identical to the 19:00 baseline — CK posted nothing
  overnight. /replies top (ㅋㅋㅋ + A/B tone chain + plicara/k-skill links) also identical to baseline.
  /mentions empty; keyword_search all CK's own posts (reinforcement). GitHub stars (len 2839),
  YouTube subscriptions (len 9469), Google My Activity (len 5301) all BYTE-IDENTICAL to the 19:00 CDP
  cache (full len match + overlapping-prefix diff clean) -> 변화 없음. Net reinforcement-only; durable
  action = this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept
  pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-26 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-26
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0826.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839), YouTube `feed/subscriptions` (`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9469), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0826.json` — all three surfaces **byte-identical** to the 19:00 cache (`/tmp/cmp_cdp_0826.py` full-len match + `/tmp/cmp2_0826.py` overlapping-prefix diff clean; tabs not reloaded since prior evening, no movement).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5128374); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0826.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0826_0800.json`.
- **Baseline** = most-recent-by-mtime completed SOCIAL transcript = `interest-signal-collection-19-00-2026-08-25.md` (the 22:00 same-day run was the new-target track, not social). No `08-00-2026-08-26` transcript existed before this run -> idempotency guard clear, collection proceeded on time.

## Novelty summary
**Clean no-new-signal / reinforcement-only morning run.** Both Threads `/threads` top rows AND `/replies` top row are byte-identical to the 19:00 baseline — CK made no new posts overnight. `/mentions` empty; keyword_search all CK's own posts. All three CDP surfaces (GitHub stars / YouTube subscriptions / Google My Activity) byte-identical to the 19:00 cache -> `변화 없음`. No mover on any surface. Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — 변화 없음 (both /threads and /replies tops identical to 19:00 baseline)

### /threads — UNCHANGED since the 19:00 baseline
Top two rows both own posts from 08-25 afternoon, identical to baseline:
- `18121004206879425` (2026-08-25 16:37 KST) — A/B fluent-korean-tone test = `DcdHfulk0nd` (https://www.threads.com/@ethan13917/post/DcdHfulk0nd). Carry-over.
- `18048552698799161` (2026-08-25 16:11 KST) — agent-skill-languages curation thread = `DcdEmLmk-DL` (https://www.threads.com/@ethan13917/post/DcdEmLmk-DL). Carry-over.
- Below: `DcayfBaE9An` (Fable-5 model-cost, 08-24), `DcX6LRvk7EG`, `DcS8W0yE6LG`, OpenRouter→Stripe, aside-browser, one `REPOST_FACADE` (08-20, empty text) — all prior, unchanged.

### /replies — UNCHANGED since the 19:00 baseline
Top rows identical to baseline: `ㅋㅋㅋㅋㅋㅋ` (08-25 07:57 UTC), the A/B tone reply pair (A안/B안 MTIA 300 restated), the 7-part agent-skill-languages chain (plicara.ai + own snflkd/fluent-korean + NomaDamas/k-skill + epoko77-ai/im-not-ai links). No new dated reply rows since baseline.

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search — `agent` 10 / `Claude Code` 1 / `Codex` 4, all `ethan13917`'s OWN posts (reinforcement, not discovery).

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 19:00, len 2839)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 19:00 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 19:00, len 9469)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Full body len 9469 matches; overlapping-prefix diff clean (tab not reloaded, no feed movement observed).

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 19:00, len 5301)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Full body len 5301 matches; overlapping-prefix diff clean. No new search activity.

## Filtering notes
- No mover on any surface this run. Threads both tops static; all three CDP surfaces byte-identical to the 19:00 baseline.
- CK posted nothing overnight, so `/threads` and `/replies` are both unchanged (contrast the 19:00 run where CK had published two afternoon threads).

## Why this raw exists
Evidence store for the 2026-08-26 08:00 morning social pass. Clean no-new-signal / reinforcement-only run: Threads `/threads` + `/replies` tops and all three CDP surfaces byte-identical to the previous-evening 19:00 social baseline. Durable layer (index.md, concept pages) unchanged.
