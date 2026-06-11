---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-12
created: 2026-06-12
captured_at: 2026-06-12T08:04:52+09:00
source: Threads API + public Threads permalink recovery + browser-visible auth/status checks; live Chrome CDP unavailable on 127.0.0.1:9222 during this run
type: raw
run_tag: interest-signal-collection-08-00
tags: [interest-signals, threads, threads-api, browser, honcho, raw-only, reinforcement, cdp-unavailable]
route_hint: raw_only
route_confidence: 0.66
route_reason: Morning pass found one Threads API repost facade newer than the 2026-06-11 19:00 social/browser baseline. Public Threads recovery resolved it to a single-surface civic/political election photo post, while replies, mentions, and keyword searches did not add newer AI/agent/Honcho evidence. Live Chrome CDP remained unavailable, and browser-visible checks for Threads liked, YouTube, GitHub Stars, Google My Activity, ChatGPT, Claude, and X were logged out, challenge-blocked, or unauthenticated. The new row is preserved as raw-only social chronology evidence and does not change the durable AI-agent / Honcho / memory-routing / AI-infra map.
routing:
  route: raw_only
  confidence: 0.66
  reasons:
    - Read /home/ck/wiki/README.md first and performed the 08:00 idempotency check; no same-day 08:00 raw transcript existed before this run.
    - Compared against the 2026-06-11 08:00 and 19:00 social/browser transcripts, the 2026-06-11 11:00 and 22:00 new-target appends, the 2026-06-11 23:00 Honcho refinement, current concepts/honcho.md, and log.md before judging novelty.
    - Threads API token refresh and /v1.0/me succeeded; /threads exposed one new repost facade after the 2026-06-11 19:00 baseline.
    - Public recovery resolved the new repost to a nyearpromo election-photo thread; this is single-surface civic/political feed rotation, not a durable AI/operator signal.
    - /replies added no row newer than the 2026-06-11 19:00 baseline; /mentions returned 0 rows; keyword searches returned older CK-authored rows or empty results.
    - Live Chrome CDP at http://127.0.0.1:9222 returned connection refused; authenticated browser/CDP surfaces were recorded as unavailable rather than inferred negative evidence.
  signal_tags: [threads-api, civic-signal, raw-only, reinforcement, cdp-unavailable]
sources:
  - https://graph.threads.net/v1.0/
  - https://www.threads.com/@ethan13917/post/DZdK7-8Ex2O
  - https://www.threads.com/@nyearpromo/post/DZcSFpUGCU9
  - https://www.threads.com/liked
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://github.com/stars
  - https://myactivity.google.com/product/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/ck_lovesai/likes
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-12

Source: Threads API + public Threads permalink recovery + browser-visible auth/status checks
Source URL: multiple; see per-section URLs below
Date: 2026-06-12
Account: `ethan13917` on Threads

## Live session notes

- Read top-level wiki `README.md` first and followed the raw evidence → Honcho triage → durable-promotion split.
- Idempotency check: no `raw/transcripts/interest-signal-collection-08-00-2026-06-12.md` existed before this run.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-11.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-11.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-11.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-11.md`, the 2026-06-11 23:00 Honcho refinement in `concepts/honcho.md`, and current `log.md` before judging novelty.
- Live Chrome CDP at `http://127.0.0.1:9222` was unavailable in this run: `/json/version` and `/json/list` returned `ConnectionRefusedError(111, 'Connection refused')`.
- Threads API collection succeeded after refreshing the long-lived token from `~/.config/threads-api/credentials.json`; token values are omitted from this raw note and the credential file remained mode `0600`.
- Disposable cache saved under `wiki/.cache/interest-signals/2026-06-12-0800/threads-api-summary.json` with credential/token values redacted.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK for `ethan13917`; `/threads` had one newer repost facade after the 2026-06-11 19:00 baseline; `/replies` newest rows repeated the 19:00 baseline; `/mentions` returned 0 rows; keyword searches returned older CK-authored rows or empty results. |
| Threads public permalink recovery | Available/partial | Browser navigation from the CK repost facade resolved to the original public post at `@nyearpromo`; visible text exposed the election-photo thread and comments, with a login prompt for deeper replies. |
| Threads liked / activity / reposts via live CDP | Unavailable | CDP endpoint `127.0.0.1:9222` was not reachable; browser navigation to `/liked` redirected to Threads login. |
| YouTube subscriptions / liked / Watch Later | Unavailable | Browser-visible YouTube subscriptions asked for login; liked and Watch Later playlists showed logged-out navigation and `존재하지 않는 재생목록입니다.` |
| GitHub Stars | Unavailable | Browser session redirected `https://github.com/stars` to GitHub sign-in. |
| Google My Activity | Unavailable | Browser session showed Google My Activity welcome/sign-in page. |
| ChatGPT | Unavailable | Browser session hit Cloudflare challenge. |
| Claude | Unavailable | Browser session hit Cloudflare security verification. |
| X profile/likes | Unavailable | Browser session resolved to logged-out/profile-unavailable shell for `https://x.com/ck_lovesai/likes`. |

## 1) Threads API — current authenticated snapshot

API base: `https://graph.threads.net/v1.0/`
User: `ethan13917` / `씨케이`

### `/threads` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZdK7-8Ex2O
  Timestamp: `2026-06-11T18:33:06+0000` / `2026-06-12 03:33:06 KST`
  Media type: `REPOST_FACADE`
  Shortcode: `DZdK7-8Ex2O`
  Baseline note: newer than the 2026-06-11 19:00 social/browser raw transcript. Public recovery redirects to the original `nyearpromo` election-photo post below.

> API text unavailable for repost facade.

- URL: https://www.threads.com/@ethan13917/post/DZbXd5GE70r
  Timestamp: `2026-06-11T01:44:06+0000` / `2026-06-11 10:44:06 KST`
  Media type: `REPOST_FACADE`
  Shortcode: `DZbXd5GE70r`
  Baseline note: already captured in the 2026-06-11 19:00 social/browser run as the Fable 5 / Claude AI thread.

- URL: https://www.threads.com/@ethan13917/post/DZZd_15k-FC
  Timestamp: `2026-06-10T08:02:41+0000` / `2026-06-10 17:02:41 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZZd_15k-FC`
  Baseline note: already captured in prior 2026-06-10/2026-06-11 runs.

> 멸공은 예비역 가슴안에 다있음. 걱정할 필요가 없다.
> 10대 군가에서 부르는 멸공의 횃불.
> 가사의 내용도 평화를 위해 내 나라지킨다는 내용임.
>
> 우리나라 전쟁할때, 무장공비 쳐들어왔을 때 멸공하자고 했고, 지금은 겉보기에는 평화로워서 그 단어 키워드가 안쓰인것뿐. 그러니까 멸공이라는게 잠깐 제쳐두고 본업하느라 바빠서 그렇지.. 그 말을 쓰면 안되는게 아니란 말이다.
>
> 요새 스멀스멀 기어나오는 것들 보면은 다시한번 느낌
> 우리 다시 멸공해야함

### `/replies` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZcEx9GE1rQ
  Timestamp: `2026-06-11T08:20:03+0000` / `2026-06-11 17:20:03 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZcEx9GE1rQ`
  Baseline note: already captured in the 2026-06-11 19:00 social/browser run.

> 좋아했는데 실망이네. 딴따라나 광대는 앞으로 소신 밝히지 마라.. 그 견해를 계속 밀고 가던지.. 선택적, 특정상황에서, 정치적으로 편향적으로 정의롭게 행동하지말고. 그냥 그위치에서 할것만해라 이제

- URL: https://www.threads.com/@ethan13917/post/DZbXfKDkxZR
  Timestamp: `2026-06-11T01:44:16+0000` / `2026-06-11 10:44:16 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZbXfKDkxZR`
  Baseline note: already captured in the 2026-06-11 19:00 social/browser run.

> 쩌네요..

- URL: https://www.threads.com/@ethan13917/post/DZaCwZ7E60n
  Timestamp: `2026-06-10T13:23:53+0000` / `2026-06-10 22:23:53 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZaCwZ7E60n`
  Baseline note: already captured in the 2026-06-11 08:00 social/browser run.

> https://www.threads.com/@ethan13917/post/DZZd_15k-FC?xmt=AQG09vXfLs1HFH5-GTt47d_EdTady9bJkPwfz6EuhdEizGN_wPkgRV2ijlBiRxQUQIJuO2J-&slof=1

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

Routing note: the only new Threads API row was a repost facade that resolved to a public civic/political election-photo thread. It is preserved as raw chronology evidence only rather than promoted into the AI-agent / infrastructure concept pages.

## 2) Threads public permalink recovery — new 2026-06-12 row

### Original repost target — `nyearpromo` election-photo thread

CK repost facade URL: https://www.threads.com/@ethan13917/post/DZdK7-8Ex2O
Recovered original URL: https://www.threads.com/@nyearpromo/post/DZcSFpUGCU9
Page title: `님(@nyearpromo)이 게시한 사진`
Observed public page URL after redirect: `https://www.threads.com/@nyearpromo/post/DZcSFpUGCU9`

Copied visible excerpt from browser page:

> 스레드
> 조회 1.6만회
> nyearpromo
> 선거
> 13시간
> 자 이제 제대로 보이지?
> 4.5천
> 160
> 392
> 18
> nyearpromo
> 12시간
> 950
> 12
> 42
> 9

Related/comment excerpts visible on the public page:

> ghk18521112
> 10시간
> 역시 계산된 프로젝트 인사
> 19

> debbn.play
> 10시간
> 이거 소름인데
> 14

> boomcart01
> 12시간
> 그럼 시팔 나머지 두명은 뭠데
> 7
> 2

> strandkings
> 8시간
> 선관위 부정선거 1차 배후가 헌재야~ 헌재 갈어 엎어버히고~ 최종 배후 밝혀내야지~
> 2

Routing note: this is a newly surfaced Threads row, but it remains single-surface civic/political social evidence. It does not strengthen CK's durable AI-agent / Honcho / AI-infra wiki pages.

## 3) Browser/auth status checks — unavailable surfaces

### Threads liked

Surface URL: https://www.threads.com/liked
Observed URL: `https://www.threads.com/login?next=https%3A%2F%2Fwww.threads.com%2Fliked%3F__coig_login%3D1`
Page title: `Threads • 로그인`

> 스캔하여 앱 다운로드하기
> Instagram 계정으로 로그인
> 로그인
> 비밀번호를 잊으셨나요?
> 또는
> Instagram으로 계속하기

### YouTube subscriptions

Surface URL: https://www.youtube.com/feed/subscriptions
Observed URL: `https://www.youtube.com/feed/subscriptions`
Page title: `구독 - YouTube`

> 로그인
> 홈
> Shorts
> 구독
> 내 페이지
> 새로운 동영상을 놓치지 마세요.
> 즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.

### YouTube liked videos / Watch Later

Liked URL: https://www.youtube.com/playlist?list=LL
Watch Later URL: https://www.youtube.com/playlist?list=WL
Page title: `YouTube`

> 로그인
> 홈
> Shorts
> 구독
> 내 페이지
> 존재하지 않는 재생목록입니다.

### GitHub Stars

Surface URL: https://github.com/stars
Observed URL: `https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fstars`
Page title: `Sign in to GitHub · GitHub`

> Sign in to GitHub
> Username or email address
> Password
> Forgot password?
> or
> Continue with Google
> Continue with Apple

### Google My Activity

Surface URL: https://myactivity.google.com/product/search
Observed URL: `https://myactivity.google.com/?continue=https://myactivity.google.com/product/search`
Page title: `내 활동에 오신 것을 환영합니다`

> 내 활동
> 로그인
> 내 활동에 오신 것을 환영합니다
> 데이터를 활용해 더 나은 Google 서비스를 만들어 보세요. 로그인하여 검색한 내용, 방문한 사이트, 시청한 동영상을 비롯해 내 활동을 검토하고 관리하세요.

### ChatGPT / Claude / X

- ChatGPT URL: https://chatgpt.com/ — page title `잠시만 기다리십시오…`; Cloudflare challenge frame was visible and no authenticated conversation evidence was available.
- Claude URL: https://claude.ai/new — page title `잠시만 기다리십시오…`; visible text said `보안 확인 수행 중` and no authenticated chat evidence was available.
- X URL: https://x.com/ck_lovesai/likes — browser-visible session resolved to `https://x.com/ck_lovesai` with a logged-out/profile-unavailable shell and no authenticated like evidence.

## Filtering notes

- This run did not infer absence of activity from unavailable browser/CDP surfaces. It only records that authenticated browser/CDP surfaces were not reachable during this invocation.
- The only newly surfaced authenticated row was a Threads API repost facade recovered publicly as a civic/political election-photo thread. It does not change CK's durable AI/agent/infra interest map.
- Because no new durable signal emerged, this run is routed `raw_only` with no concept-page or index update beyond the Honcho/log audit.

## Why this raw exists

This file is the evidence store for later Honcho-style triage and same-day refinement. It preserves the 2026-06-12 08:00 Threads API snapshot, the one public-recovered repost row that appeared after the 2026-06-11 19:00 baseline, and explicit unavailable-surface checks so later runs do not confuse missing CDP/browser access with negative evidence.
