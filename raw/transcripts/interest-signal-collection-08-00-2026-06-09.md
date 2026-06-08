---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-09
created: 2026-06-09
captured_at: 2026-06-09T08:03:16+09:00
source: Threads API + browser-visible public permalink recovery; live Chrome CDP unavailable on 127.0.0.1:9222 during this run
type: raw
run_tag: interest-signal-collection-08-00
tags: [interest-signals, threads, threads-api, browser, honcho, raw-only, reinforcement, civic-signal]
route_hint: raw_only
route_confidence: 0.70
route_reason: Morning pass found two newly API-visible Threads repost facades after the 2026-06-08 19:00 baseline, and public browser recovery resolved both to civic/political election-law/statistics posts. They continue the recent civic/political rotation rather than creating a durable AI/operator or Honcho/memory-routing signal. Live Chrome CDP was unavailable, while browser-visible checks for YouTube, GitHub Stars, Google My Activity, ChatGPT, Claude, Threads liked, and X were logged out or challenge-blocked, so no cross-surface durable signal emerged.
routing:
  route: raw_only
  confidence: 0.70
  reasons:
    - Read /home/ck/wiki/README.md first and performed the 08:00 idempotency check; no same-day 08:00 raw transcript existed before this run.
    - Compared against the 2026-06-08 11:00, 19:00, 22:00, and 23:00 Honcho/log baselines before judging novelty.
    - Threads API token refresh and /v1.0/me succeeded; /threads exposed two new 2026-06-08 UTC repost facades after the previous 19:00 capture.
    - Browser public permalink recovery resolved both new repost facades to civic/political posts, not AI/agent/operator infrastructure signals.
    - Live Chrome CDP at http://127.0.0.1:9222 returned connection refused; authenticated browser/CDP social surfaces were recorded as unavailable rather than inferred negative evidence.
  signal_tags: [threads-api, civic-signal, raw-only, reinforcement, cdp-unavailable]
sources:
  - https://graph.threads.net/v1.0/
  - https://www.threads.com/@ethan13917/post/DZVSLOWkyQ6
  - https://www.threads.com/@jeonhangil/post/DZU55HKk27r
  - https://www.threads.com/@ethan13917/post/DZVR2ayk2xv
  - https://www.threads.com/@so.so._.atelier/post/DZTdwZTkruz
  - https://www.youtube.com/playlist?list=LL
  - https://github.com/stars
  - https://myactivity.google.com/product/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://www.threads.com/liked
  - https://x.com/ck_lovesai
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-09

Source: Threads API + browser-visible public permalink recovery
Source URL: multiple; see per-section URLs below
Date: 2026-06-09
Account: `ethan13917` on Threads

## Live session notes

- Read top-level wiki `README.md` first and followed the raw evidence → Honcho triage → durable-promotion split.
- Idempotency check: no `raw/transcripts/interest-signal-collection-08-00-2026-06-09.md` existed before this run.
- Compared against `raw/transcripts/interest-signal-collection-11-00-2026-06-08.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-08.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-08.md`, the 2026-06-08 23:00 Honcho refinement in `concepts/honcho.md`, and current `log.md` before judging novelty.
- Live Chrome CDP at `http://127.0.0.1:9222` was unavailable in this run: the collector received `ConnectionRefusedError(111, 'Connection refused')` for `/json/version` / `/json/list`.
- Threads API collection succeeded after refreshing the long-lived token from `~/.config/threads-api/credentials.json`; token values are omitted from this raw note and the credential file remained mode `0600`.
- Disposable cache saved under `wiki/.cache/interest-signals/2026-06-09-0800/collection.json` with API paging URLs redacted.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK for `ethan13917`; `/threads` returned two rows newer than the 2026-06-08 19:00 raw transcript; `/replies` newest row repeated the 2026-06-08 19:00 baseline; `/mentions` returned 0 rows; keyword searches returned older CK-authored rows or empty results. |
| Threads public permalink recovery | Available | Browser navigation to the two new repost-facade permalinks resolved to public original posts and copied visible text. |
| Threads liked / activity / reposts via live CDP | Unavailable | CDP endpoint `127.0.0.1:9222` was not reachable; browser navigation to `/liked` redirected to Threads login. |
| YouTube liked / Watch Later / subscriptions / downloads | Unavailable | Browser-visible YouTube liked playlist showed logged-out navigation with a `로그인` link; no authenticated playlist/feed evidence was visible. |
| GitHub Stars | Unavailable | Browser session redirected `https://github.com/stars` to GitHub sign-in. |
| Google My Activity | Unavailable | Browser session showed Google My Activity welcome/sign-in page. |
| ChatGPT | Unavailable | Browser session hit Cloudflare challenge. |
| Claude | Unavailable | Browser session hit Cloudflare security verification. |
| X profile/likes | Unavailable | Browser session showed logged-out X signup/login shell; no authenticated profile/like evidence was visible. |

## 1) Threads API — current authenticated snapshot

API base: `https://graph.threads.net/v1.0/`
User: `ethan13917` / `씨케이`

### `/threads` newest rows

- API permalink: https://www.threads.com/@ethan13917/post/DZVSLOWkyQ6
  Timestamp: `2026-06-08T17:02:25+0000`
  Media type: `REPOST_FACADE`
  Text from API: `unavailable for repost facade`
  Baseline note: newer than the previous 2026-06-08 19:00 raw transcript.

- API permalink: https://www.threads.com/@ethan13917/post/DZVR2ayk2xv
  Timestamp: `2026-06-08T16:59:35+0000`
  Media type: `REPOST_FACADE`
  Text from API: `unavailable for repost facade`
  Baseline note: newer than the previous 2026-06-08 19:00 raw transcript.

- API permalink: https://www.threads.com/@ethan13917/post/DZUfpcBE3nx
  Timestamp: `2026-06-08T09:40:54+0000`
  Media type: `REPOST_FACADE`
  Text from API: `unavailable for repost facade`
  Baseline note: already captured in the 2026-06-08 19:00 run.

- API permalink: https://www.threads.com/@ethan13917/post/DZTvXA7k9Sh
  Timestamp: `2026-06-08T02:38:57+0000`
  Media type: `REPOST_FACADE`
  Text from API: `unavailable for repost facade`
  Baseline note: already captured in the 2026-06-08 19:00 run.

### `/replies` newest row

- URL: https://www.threads.com/@ethan13917/post/DZUfrWvkwf0
  Timestamp: `2026-06-08T09:41:10+0000`
  Media type: `TEXT_POST`
  Baseline note: already captured in the 2026-06-08 19:00 run.

> 위선자들 지들 이익만 따지려고 드는것들

### Other API surfaces

- `/mentions`: returned 0 rows.
- `keyword_search(agent)`, `keyword_search(Claude Code)`, `keyword_search(Codex)`, `keyword_search(GPU)`, `keyword_search(Ceph)`, `keyword_search(Proxmox)`, and `keyword_search(memory)` returned older CK-authored rows already represented in prior baselines.
- `keyword_search(Hermes)`, `keyword_search(Honcho)`, and `keyword_search(MCP)` returned 0 rows.

## 2) Threads public permalink recovery — new 2026-06-08 repost facades

### Repost facade 1 — 전한길 / election-statistics row

API permalink: https://www.threads.com/@ethan13917/post/DZVSLOWkyQ6
Recovered public/original URL: https://www.threads.com/@jeonhangil/post/DZU55HKk27r
Page title: `전국 초중고 수학교사, 대학교 통계학 교수님들 이런 통계 우연?`

Copied visible excerpt:
> 스레드
> 조회 8.9만회
> jeonhangil
> 9시간
> 전국 초중고 수학교사, 대학교 통계학 교수님들 이런 통계 우연?
> 6천
> 328
> 687
> 180

Representative surrounding visible replies:
> vol_4620
> 9시간
> 전국의 대학 교수님들, 학생들이 주권을 찾겠다고 거리로 나와서 외치는데 언제까지 침묵 하실겁니까!!!!

> iamyohany
> 9시간
> 투표용지 부족 50 ➡️ 91 계속 늘어요.

> buildingzoo
> 7시간
> 클로드는 전 세계 투표 10조번 반복해도 불가능한 수치라고 하네요

### Repost facade 2 — foreigner local-election voting row

API permalink: https://www.threads.com/@ethan13917/post/DZVR2ayk2xv
Recovered public/original URL: https://www.threads.com/@so.so._.atelier/post/DZTdwZTkruz
Page title: `이런 내용도 이제 알았네. 나의 무지가 어디까지였나 ㅠㅠ`

Copied visible excerpt:
> 스레드
> 조회 2.6만회
> so.so._.atelier
> 22시간
> 이런 내용도 이제 알았네.
> 나의 무지가 어디까지였나 ㅠㅠ

Embedded/reposted visible excerpt:
> sangchoo.kr
> 1일
> 좀 된건데
> 응 계속 지적해봐 바지 벗으면 그만이야. 니들이 뭘 어쩔건데 었지

Representative surrounding visible replies:
> brightness_shin
> 20시간
> 그만큼 언론통제가 진짜 심했던거지
> 나도 예전에 이거 보고 어이가 없더라

> happy10477
> 20시간
> 미국산다고 투표권주냐?
> 영주권만 주잖아!
> 이게 말이야 방구야
> 외국인이 투표를 하는거 자체가 이상해!!

> lightgreensoo
> 11시간
> 외국인은 투표권이 없어야 합니다. 특히 자유민주주의 국가가 공산주의 외국인에게 자국 지방선거에 투표권을 주는 제도는 있을 수 없습니다.

Routing note: these two reposts are newly API-visible relative to the previous social/browser run, but they remain civic/political feed rotation. They do not alter CK's durable AI-agent / Honcho / memory-routing / managed-agent operating-stack pages.

## 3) Browser/auth status checks — unavailable surfaces

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
- X URL: https://x.com/ck_lovesai — logged-out signup/login shell.

## Filtering notes

- This run did not infer absence of activity from unavailable browser/CDP surfaces. It only records that authenticated browser/CDP surfaces were not reachable during this invocation.
- The only new grounded rows were Threads API rows from 2026-06-08 UTC plus browser-recovered public permalink text.
- The new Threads rows are civic/political and single-source; they do not alter the durable AI-agent / Honcho / memory-routing / managed-agent operating-stack pages.
- The previous 2026-06-08 11:00 durable append for `plastic-labs/honcho` remains the latest durable AI/operator update in the current baseline.

## Why this raw exists

This file is the evidence store for later Honcho-style triage and same-day refinement. It preserves the available Threads API/browser evidence while explicitly recording unavailable surfaces so later runs do not confuse missing CDP/browser access with negative evidence.
