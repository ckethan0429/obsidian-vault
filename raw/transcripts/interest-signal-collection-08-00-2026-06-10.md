---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-10
created: 2026-06-10
captured_at: 2026-06-10T08:02:08+09:00
source: Threads API + browser-visible auth/status checks; live Chrome CDP unavailable on 127.0.0.1:9222 during this run
type: raw
run_tag: interest-signal-collection-08-00
tags: [interest-signals, threads, threads-api, browser, honcho, raw-only, reinforcement, no-new-signal]
route_hint: raw_only
route_confidence: 0.65
route_reason: Morning pass found no Threads API rows newer than the 2026-06-09 19:00 social/browser baseline. Live Chrome CDP was still unavailable, while browser-visible checks for Threads liked, YouTube, GitHub Stars, Google My Activity, ChatGPT, Claude, and X were logged out or challenge-blocked. The grounded result is a raw-only availability/no-change audit, not a durable wiki promotion.
routing:
  route: raw_only
  confidence: 0.65
  reasons:
    - Read /home/ck/wiki/README.md first and performed the 08:00 idempotency check; no same-day 08:00 raw transcript existed before this run.
    - Compared against the 2026-06-09 08:00, 19:00, 22:00 raw transcripts and the 2026-06-09 23:00 Honcho/log baseline before judging novelty.
    - Threads API token refresh and /v1.0/me succeeded, but /threads and /replies newest rows repeated the 2026-06-09 19:00 baseline.
    - /mentions returned 0 rows and keyword searches returned older CK-authored rows or empty results.
    - Live Chrome CDP at http://127.0.0.1:9222 returned connection refused; authenticated browser/CDP social surfaces were recorded as unavailable rather than inferred negative evidence.
  signal_tags: [threads-api, raw-only, reinforcement, no-new-signal, cdp-unavailable]
sources:
  - https://graph.threads.net/v1.0/
  - https://www.threads.com/@ethan13917/post/DZWE_m5k-tD
  - https://www.threads.com/@ethan13917/post/DZWMQdgk34M
  - https://www.threads.com/liked
  - https://www.youtube.com/playlist?list=LL
  - https://github.com/stars
  - https://myactivity.google.com/product/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/ck_lovesai/likes
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-10

Source: Threads API + browser-visible auth/status checks
Source URL: multiple; see per-section URLs below
Date: 2026-06-10
Account: `ethan13917` on Threads

## Live session notes

- Read top-level wiki `README.md` first and followed the raw evidence → Honcho triage → durable-promotion split.
- Idempotency check: no `raw/transcripts/interest-signal-collection-08-00-2026-06-10.md` existed before this run.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-09.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-09.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-09.md`, the 2026-06-09 23:00 Honcho refinement in `concepts/honcho.md`, and current `log.md` before judging novelty.
- Live Chrome CDP at `http://127.0.0.1:9222` was unavailable in this run: `/json/version` and `/json/list` returned `ConnectionRefusedError(111, 'Connection refused')`.
- Threads API collection succeeded after refreshing the long-lived token from `~/.config/threads-api/credentials.json`; token values are omitted from this raw note and the credential file remained mode `0600`.
- Disposable cache saved under `wiki/.cache/interest-signals/2026-06-10-0800/collection.json` with credential/token values omitted.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK for `ethan13917`; `/threads` newest row repeated the 2026-06-09 19:00 baseline; `/replies` newest row repeated the 2026-06-09 19:00 baseline; `/mentions` returned 0 rows; keyword searches returned older CK-authored rows or empty results. |
| Threads liked / activity / reposts via live CDP | Unavailable | CDP endpoint `127.0.0.1:9222` was not reachable; browser navigation to `/liked` redirected to Threads login. |
| YouTube liked / Watch Later / subscriptions / downloads | Unavailable | Browser-visible YouTube liked playlist showed logged-out navigation with a `로그인` link; no authenticated playlist/feed evidence was visible. |
| GitHub Stars | Unavailable | Browser session redirected `https://github.com/stars` to GitHub sign-in. |
| Google My Activity | Unavailable | Browser session showed Google My Activity welcome/sign-in page. |
| ChatGPT | Unavailable | Browser session hit Cloudflare challenge. |
| Claude | Unavailable | Browser session hit Cloudflare security verification. |
| X profile/likes | Unavailable | Browser session showed logged-out/profile-unavailable shell; no authenticated like evidence was visible. |

## 1) Threads API — current authenticated snapshot

API base: `https://graph.threads.net/v1.0/`
User: `ethan13917` / `씨케이`

### `/threads` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZWE_m5k-tD
  Timestamp: `2026-06-09T00:26:29+0000`
  Media type: `REPOST_FACADE`
  Shortcode: `DZWE_m5k-tD`
  Text from API: `unavailable for repost facade`
  Baseline note: already captured in the 2026-06-09 19:00 run.

- URL: https://www.threads.com/@ethan13917/post/DZVSLOWkyQ6
  Timestamp: `2026-06-08T17:02:25+0000`
  Media type: `REPOST_FACADE`
  Shortcode: `DZVSLOWkyQ6`
  Text from API: `unavailable for repost facade`
  Baseline note: older than or already represented in prior runs.

- URL: https://www.threads.com/@ethan13917/post/DZVR2ayk2xv
  Timestamp: `2026-06-08T16:59:35+0000`
  Media type: `REPOST_FACADE`
  Shortcode: `DZVR2ayk2xv`
  Text from API: `unavailable for repost facade`
  Baseline note: older than or already represented in prior runs.

- URL: https://www.threads.com/@ethan13917/post/DZUfpcBE3nx
  Timestamp: `2026-06-08T09:40:54+0000`
  Media type: `REPOST_FACADE`
  Shortcode: `DZUfpcBE3nx`
  Text from API: `unavailable for repost facade`
  Baseline note: older than or already represented in prior runs.

- URL: https://www.threads.com/@ethan13917/post/DZTvXA7k9Sh
  Timestamp: `2026-06-08T02:38:57+0000`
  Media type: `REPOST_FACADE`
  Shortcode: `DZTvXA7k9Sh`
  Text from API: `unavailable for repost facade`
  Baseline note: older than or already represented in prior runs.

### `/replies` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZWMQdgk34M
  Timestamp: `2026-06-09T01:29:57+0000`
  Media type: `TEXT_POST`
  Shortcode: `DZWMQdgk34M`

> ??? 비교가 왜그러죠?
  Baseline note: already captured in the 2026-06-09 19:00 run.

- URL: https://www.threads.com/@ethan13917/post/DZUfrWvkwf0
  Timestamp: `2026-06-08T09:41:10+0000`
  Media type: `TEXT_POST`
  Shortcode: `DZUfrWvkwf0`

> 위선자들 지들 이익만 따지려고 드는것들
  Baseline note: older than or already represented in prior runs.

- URL: https://www.threads.com/@ethan13917/post/DZJ3Nrhk_T7
  Timestamp: `2026-06-04T06:35:11+0000`
  Media type: `TEXT_POST`
  Shortcode: `DZJ3Nrhk_T7`

> 진짜 한마디해라 트윗날리라고
  Baseline note: older than or already represented in prior runs.

### Other API surfaces

- `/mentions`: returned 0 rows.
- `keyword_search(agent)`: returned 5 row(s); newest visible row `2026-05-01T06:44:43+0000` / https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk (older CK-authored baseline evidence, not new for this run).
- `keyword_search(Claude Code)`: returned 1 row(s); newest visible row `2026-04-22T07:44:02+0000` / https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww (older CK-authored baseline evidence, not new for this run).
- `keyword_search(Codex)`: returned 2 row(s); newest visible row `2026-05-01T06:40:51+0000` / https://www.threads.com/@ethan13917/post/DXyU1IFE7l5 (older CK-authored baseline evidence, not new for this run).
- `keyword_search(Hermes)`: 0 rows.
- `keyword_search(Honcho)`: 0 rows.
- `keyword_search(MCP)`: 0 rows.
- `keyword_search(GPU)`: returned 4 row(s); newest visible row `2026-05-01T06:44:43+0000` / https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk (older CK-authored baseline evidence, not new for this run).
- `keyword_search(Ceph)`: returned 2 row(s); newest visible row `2026-04-22T07:44:39+0000` / https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx (older CK-authored baseline evidence, not new for this run).
- `keyword_search(Proxmox)`: returned 1 row(s); newest visible row `2026-04-22T07:44:39+0000` / https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx (older CK-authored baseline evidence, not new for this run).
- `keyword_search(memory)`: returned 3 row(s); newest visible row `2026-04-21T03:24:04+0000` / https://www.threads.com/@ethan13917/post/DXYOXEPk5SM (older CK-authored baseline evidence, not new for this run).

Routing note: no Threads API row in this run was newer than the 2026-06-09 19:00 social/browser baseline. The API result is preserved as a no-change snapshot rather than promoted.

## 2) Browser/auth status checks — unavailable surfaces

### Threads liked

Surface URL: https://www.threads.com/liked
Observed URL: `https://www.threads.com/login?next=https%3A%2F%2Fwww.threads.com%2Fliked%3F__coig_login%3D1`
Page title: `Threads • 로그인`

> Browser-visible snapshot showed Threads login and no authenticated liked-feed rows. The API still has no verified liked-post feed endpoint in this environment.

### YouTube liked videos

Surface URL: https://www.youtube.com/playlist?list=LL
Page title: `undefined - YouTube`

> Browser-visible snapshot showed logged-out navigation with a `로그인` link and no authenticated playlist rows.

### GitHub Stars

Surface URL: https://github.com/stars
Observed URL: `https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fstars`
Page title: `Sign in to GitHub · GitHub`

> Browser-visible snapshot showed GitHub sign-in form; no star-list evidence was available.

### Google My Activity

Surface URL: https://myactivity.google.com/product/search
Observed URL: `https://myactivity.google.com/?continue=https://myactivity.google.com/product/search`
Page title: `내 활동에 오신 것을 환영합니다`

> Browser-visible snapshot showed Google sign-in / welcome page; no search-history evidence was available.

### ChatGPT / Claude / X

- ChatGPT URL: https://chatgpt.com/ — Cloudflare challenge page.
- Claude URL: https://claude.ai/new — Cloudflare security verification page.
- X URL: https://x.com/ck_lovesai/likes — browser-visible session resolved to `https://x.com/ck_lovesai` with a logged-out/profile-unavailable shell.

## Filtering notes

- This run did not infer absence of activity from unavailable browser/CDP surfaces. It only records that authenticated browser/CDP surfaces were not reachable during this invocation.
- The only authenticated grounded source was Threads API, and it repeated the 2026-06-09 19:00 newest `/threads` and `/replies` rows.
- Because no new grounded row or durable cross-surface signal emerged, this run is routed `raw_only` with no concept-page or index update beyond the Honcho/log audit.

## Why this raw exists

This file is the evidence store for later Honcho-style triage and same-day refinement. It preserves the 2026-06-10 08:00 no-change Threads API snapshot plus explicit unavailable-surface checks so later runs do not confuse missing CDP/browser access with negative evidence.
