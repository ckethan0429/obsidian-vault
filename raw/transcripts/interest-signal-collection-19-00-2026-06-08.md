---
title: Raw Transcript — Interest Signal Collection 19:00 2026-06-08
created: 2026-06-08
captured_at: 2026-06-08T19:03:16+09:00
source: Threads API + browser-visible public permalink recovery; live Chrome CDP unavailable on 127.0.0.1:9222 during this run
type: raw
run_tag: interest-signal-collection-19-00
tags: [interest-signals, threads, threads-api, browser, honcho, raw-only, reinforcement, civic-signal]
route_hint: raw_only
route_confidence: 0.71
route_reason: Afternoon pass found newly API-visible 2026-06-08 Threads repost/reply rows, but direct public permalink recovery showed they continue the same civic/political rotation already captured on 2026-06-06 and 2026-06-07. CDP was unavailable and the browser session was logged out or challenge-blocked on YouTube, GitHub, Google, ChatGPT, Claude, and Threads liked surfaces, so no cross-surface durable AI/operator signal emerged after comparison with the same-day 11:00 new-target append and recent 2026-06-07 baselines.
routing:
  route: raw_only
  confidence: 0.71
  reasons:
    - Read /home/ck/wiki/README.md first and performed the 19:00 idempotency check; no same-day 19:00 raw transcript existed before this run.
    - Used the prior 2026-06-07 19:00 social/browser run, the 2026-06-07 23:00 refinement, and the same-day 2026-06-08 11:00 new-target append as baselines before judging novelty.
    - Live Chrome CDP at http://127.0.0.1:9222 returned connection refused, so browser/CDP social surfaces were not reachable through the usual authenticated target list.
    - Threads API token refresh and /v1.0/me succeeded; /threads and /replies exposed new 2026-06-08 rows.
    - Browser public permalink recovery resolved the two new repost facades to civic/political posts, not AI/agent/operator infrastructure signals.
    - Browser-tool checks showed Threads liked, YouTube liked, GitHub stars, Google My Activity, ChatGPT, and Claude were logged out, redirected, or Cloudflare-challenge blocked; these were recorded as unavailable rather than inferred.
  signal_tags: [threads-api, civic-signal, raw-only, reinforcement, cdp-unavailable]
sources:
  - https://graph.threads.net/v1.0/
  - https://www.threads.com/@ethan13917/post/DZUfpcBE3nx
  - https://www.threads.com/@dbwlszl160/post/DZURnF2kS14
  - https://www.threads.com/@ethan13917/post/DZTvXA7k9Sh
  - https://www.threads.com/@stop_wony/post/DZRnBwLDa69
  - https://www.threads.com/@ethan13917/post/DZUfrWvkwf0
  - https://www.threads.com/liked
  - https://www.youtube.com/playlist?list=LL
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
---
# Raw Transcript — Interest Signal Collection 19:00 2026-06-08

Source: Threads API + browser-visible public permalink recovery  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-08  
Account: `ethan13917` on Threads

## Live session notes

- Read top-level wiki `README.md` first and followed the raw evidence → Honcho triage → durable-promotion split.
- Idempotency check: no `raw/transcripts/interest-signal-collection-19-00-2026-06-08.md` existed before this run.
- Compared against `raw/transcripts/interest-signal-collection-19-00-2026-06-07.md`, `raw/transcripts/interest-signal-collection-08-00-2026-06-07.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-08.md`, the 2026-06-07 23:00 Honcho refinement, `concepts/honcho.md`, and current `log.md` before judging novelty.
- Live Chrome CDP at `http://127.0.0.1:9222` was unavailable in this run: `/json/list` and `/json/version` returned connection refused from the collection script.
- Threads API collection succeeded after refreshing the long-lived token from `~/.config/threads-api/credentials.json`; token values are omitted from this raw note and the credential file remained mode `0600`.
- Disposable cache saved under `wiki/.cache/interest-signals/2026-06-08-1900/cdp_threads_results.json`.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK for `ethan13917`; `/threads` and `/replies` returned new 2026-06-08 rows; `/mentions` returned 0 rows; keyword searches returned older CK-authored rows or empty results. |
| Threads public permalink recovery | Available | Browser navigation to the two new repost-facade permalinks resolved to public original posts and copied visible text. |
| Threads liked / activity / reposts via live CDP | Unavailable | CDP endpoint `127.0.0.1:9222` was not reachable; browser navigation to `/liked` redirected to Threads login. |
| YouTube liked / Watch Later / subscriptions | Unavailable | Browser session showed logged-out YouTube navigation and a login link; no authenticated playlist evidence was visible. |
| GitHub Stars | Unavailable | Browser session redirected `https://github.com/stars` to GitHub sign-in. |
| Google My Activity | Unavailable | Browser session showed Google My Activity welcome/sign-in page. |
| ChatGPT | Unavailable | Browser session hit Cloudflare challenge. |
| Claude | Unavailable | Browser session hit Cloudflare security verification. |

## 1) Threads API — current authenticated snapshot

API base: `https://graph.threads.net/v1.0/`  
User: `ethan13917` / `씨케이`

### `/threads` newest rows

- API permalink: https://www.threads.com/@ethan13917/post/DZUfpcBE3nx  
  Timestamp: `2026-06-08T09:40:54+0000`  
  Media type: `REPOST_FACADE`  
  Text from API: `unavailable for repost facade`

- API permalink: https://www.threads.com/@ethan13917/post/DZTvXA7k9Sh  
  Timestamp: `2026-06-08T02:38:57+0000`  
  Media type: `REPOST_FACADE`  
  Text from API: `unavailable for repost facade`

- API permalink: https://www.threads.com/@ethan13917/post/DZRHPdgE2KE  
  Timestamp: `2026-06-07T02:09:55+0000`  
  Media type: `REPOST_FACADE`  
  Text from API: `unavailable for repost facade`  
  Baseline note: already captured in the 2026-06-07 19:00 run.

- API permalink: https://www.threads.com/@ethan13917/post/DZRHAb0k_CJ  
  Timestamp: `2026-06-07T02:07:52+0000`  
  Media type: `REPOST_FACADE`  
  Text from API: `unavailable for repost facade`  
  Baseline note: already captured in the 2026-06-07 19:00 run.

### `/replies` newest row

- URL: https://www.threads.com/@ethan13917/post/DZUfrWvkwf0  
  Timestamp: `2026-06-08T09:41:10+0000`  
  Media type: `TEXT_POST`
> 위선자들 지들 이익만 따지려고 드는것들

### Other API surfaces

- `/mentions`: returned 0 rows.
- `keyword_search(agent)`, `keyword_search(Claude Code)`, `keyword_search(Codex)`, `keyword_search(GPU)`, `keyword_search(Ceph)`, `keyword_search(Proxmox)`, and `keyword_search(memory)` returned older CK-authored rows already represented in prior baselines.
- `keyword_search(Hermes)`, `keyword_search(MCP)`, and `keyword_search(Honcho)` returned 0 rows.

## 2) Threads public permalink recovery — new 2026-06-08 repost facades

### Repost facade 1 — 김은혜 의원 / 시민단체 row

API permalink: https://www.threads.com/@ethan13917/post/DZUfpcBE3nx  
Recovered public/original URL: https://www.threads.com/@dbwlszl160/post/DZURnF2kS14  
Page title: `<실시간> 김은혜 의원 긴급 기자회견 “ 그 많던 시민단체, 환경단체, 민주당 왜 다 조용한가 ?”`

Copied visible excerpt:
> 스레드
> 조회 8.8만회
> dbwlszl160
> 2시간
> <실시간> 김은혜 의원 긴급 기자회견
> “ 그 많던 시민단체, 환경단체, 민주당 왜 다 조용한가 ?”
> 1.0만
> 256
> 1.1천
> 186

Representative surrounding visible replies:
> cpa25
> 2시간
> 엠븅신이 나은 귀한 보석인건가...김은혜&이진숙? 다음 청와대 드가던게 당대표하자!

> an_syant
> 1시간
> 쓰레드 화력이 약해서 주변에 널리 알려주세요
> 🚨 투표용지 사태 이후의 위험한 시나리오
> 1 빌미 제공: "종이 투표용지가 부족했으니, 아예 전자투표로 바꾸자"는 주장이 명분으로 떠오릅니다.
> ...
> 한 줄 요약: 국민투표 없이 국회 표결만으로 전자투표가 도입될 수 있으니, 법안 움직임을 눈여겨보고 여론으로 감시해야 합니다.

### Repost facade 2 — 벽돌투표지 / 형상기억종이 row

API permalink: https://www.threads.com/@ethan13917/post/DZTvXA7k9Sh  
Recovered public/original URL: https://www.threads.com/@stop_wony/post/DZRnBwLDa69  
Page title: `부정선거 아니라는 분들을 위해 정리해드립니다...`

Copied visible excerpt:
> 스레드
> 조회 12만회
> stop_wony
> 벽돌:부실인가 부정인가
> 1일
> 부정선거 아니라는 분들을 위해 정리해드립니다.
> 출판사를 운영했습니다.
> 단가를 위해 한번에 3000권씩 책을 찍습니다.
> 모든 종이를 비교하며 매번 인쇄소에서 감리(확인작업)를 봅니다.
> 선관위가 주장하는 ‘형상기억종이’는 세상에 없는 종이입니다. 세계의 어느 제지소에서도 그런 종이를 만들지 못합니다. 인류사에 없는 종이입니다.
> ...
> 또한 검은 잉크가 옆면에 일렬로 묻은 것, 이건 변명의 여지가 없는 인쇄해놓고 쌓인 그 자체의 모습입니다.
> 당신이 의심하는 그것이 정확히 맞습니다.
> 7.6천
> 266
> 1.5천
> 589

Representative surrounding visible replies:
> stop_wony
> 1일
> ·
> 작성자
> 출판사 사업자등록증 원하시면 인증가능합니다. 이전에 경찰분 아내라면서 글 지우신 분과는 다릅니다.

> gomnyangi63
> 1일
> 사람들이 투표할때 안접어요
> 형상기억종이고 뭐고.
> 이번투표할때도
> 스레드에 참관인들이
> 사람들이 투표용지를 안접는다고. 그거 문제라면서 증언글 많아요

Routing note: these two reposts are newly API-visible for 2026-06-08, but they remain civic/political feed rotation and continue the 2026-06-06 / 2026-06-07 civic thread. They are preserved as raw evidence only.

## 3) Browser/auth status checks — unavailable surfaces

### Threads liked

Surface URL: https://www.threads.com/liked  
Observed URL: `https://www.threads.com/login?next=https%3A%2F%2Fwww.threads.com%2Fliked%3F__coig_login%3D1`  
Page title: `Threads • 로그인`

> Browser-visible snapshot showed Threads login and no authenticated liked-feed rows.

### YouTube liked videos

Surface URL: https://www.youtube.com/playlist?list=LL  
Page title: `YouTube`

> Browser-visible snapshot showed logged-out navigation with a `로그인` link and no authenticated playlist rows.

### GitHub Stars

Surface URL: https://github.com/stars  
Observed URL: `https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fstars`  
Page title: `Sign in to GitHub · GitHub`

> Browser-visible snapshot showed GitHub sign-in form; no star-list evidence was available.

### Google My Activity

Surface URL: https://myactivity.google.com/search-services/history/search  
Observed URL: `https://myactivity.google.com/?continue=https://myactivity.google.com/search-services/history/search`  
Page title: `내 활동에 오신 것을 환영합니다`

> Browser-visible snapshot showed Google sign-in / welcome page; no search-history evidence was available.

### ChatGPT / Claude

- ChatGPT URL: https://chatgpt.com/ — Cloudflare challenge page.
- Claude URL: https://claude.ai/new — Cloudflare security verification page.

## Filtering notes

- This run did not infer absence of activity from unavailable browser/CDP surfaces. It only records that the authenticated browser/CDP surfaces were not reachable during this invocation.
- The only new grounded rows were Threads API rows from 2026-06-08 plus browser-recovered public permalink text.
- The new Threads rows are civic/political and single-source; they do not alter the durable AI-agent / Honcho / memory-routing / managed-agent operating-stack pages.
- Same-day 11:00 durable append for `plastic-labs/honcho` remains the day's durable AI/operator update so far; this 19:00 pass does not add a second durable concept-page change.

## Why this raw exists

This file is the evidence store for later Honcho-style triage and same-day refinement. It preserves the available Threads API/browser evidence while explicitly recording unavailable surfaces so later runs do not confuse missing CDP/browser access with negative evidence.
