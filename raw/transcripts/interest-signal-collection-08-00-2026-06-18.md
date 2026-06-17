---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-18
created: 2026-06-18
captured_at: 2026-06-18T08:02:40+09:00
source: Threads API + public Threads permalink recovery + public GitHub Trending + browser-visible auth/status checks; live Chrome CDP unavailable on 127.0.0.1:9222 during this run
type: raw
run_tag: interest-signal-collection-08-00
tags: [interest-signals, threads, threads-api, github-trending, browser, honcho, append-existing, raw-only, cdp-unavailable]
route_hint: append_existing
route_confidence: 0.72
route_reason: Morning pass found fresh Threads API rows after the 2026-06-13 08:00 baseline and public GitHub Trending rows that strongly reinforce CK's existing Honcho / managed-agent / MCP / skills axis. Authenticated browser/CDP surfaces remained unavailable. Preserve raw evidence, append the routing audit to Honcho/log, and avoid a new concept page.
routing:
  route: append_existing
  confidence: 0.72
  reasons:
    - Read /home/ck/wiki/README.md first and performed the 08:00 idempotency check; no same-day 08:00 raw transcript existed before this run.
    - Compared against the 2026-06-13 08:00 social/browser transcript, recent Honcho/log context, and current source availability before judging novelty.
    - Threads API token refresh and /v1.0/me succeeded; /threads and /replies exposed several rows newer than the 2026-06-13 baseline.
    - Public GitHub Trending exposed high-signal same-axis repos: codebase-memory-mcp, Agent-Reach, superpowers, mattpocock/skills, continue, and UI-TARS-desktop.
    - The GitHub rows reinforce existing Honcho / managed-agent / memory-routing / agent-skills pages rather than opening a new durable branch.
    - Live Chrome CDP at http://127.0.0.1:9222 returned connection refused; browser-visible authenticated surfaces were recorded as unavailable rather than inferred negative evidence.
  signal_tags: [threads-api, github-trending, honcho, managed-agents, mcp, skills, raw-only, append-existing, cdp-unavailable]
sources:
  - https://graph.threads.net/v1.0/
  - https://www.threads.com/@ethan13917/post/DZmXBsjE0hq
  - https://www.threads.com/@choi.openai/post/DZlrZlzD86B
  - https://www.threads.com/@ethan13917/post/DZmJifzE1T6
  - https://www.threads.com/@unclejobs.ai/post/DZmFFMKiX-j
  - https://www.threads.com/@ethan13917/post/DZm-uI3k3My
  - https://www.threads.com/@ethan13917/post/DZrY3ICk9SA
  - https://github.com/trending?since=daily
  - https://github.com/DeusData/codebase-memory-mcp
  - https://github.com/Panniantong/Agent-Reach
  - https://github.com/obra/superpowers
  - https://github.com/mattpocock/skills
  - https://github.com/bytedance/UI-TARS-desktop
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
# Raw Transcript — Interest Signal Collection 08:00 2026-06-18

Source: Threads API + public Threads permalink recovery + public GitHub Trending + browser-visible auth/status checks
Source URL: multiple; see per-section URLs below
Date: 2026-06-18
Account: `ethan13917` on Threads

## Live session notes

- Read top-level wiki `README.md` first and followed the raw evidence → Honcho triage → durable-promotion split.
- Idempotency check: no `raw/transcripts/interest-signal-collection-08-00-2026-06-18.md` existed before this run.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-13.md`, current `concepts/honcho.md`, and current `log.md` before judging novelty. There were no saved same-day 2026-06-18 transcripts before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was unavailable in this run: `/json/version` and `/json/list` returned `ConnectionRefusedError(111, 'Connection refused')`.
- Threads API collection succeeded after refreshing the long-lived token from `~/.config/threads-api/credentials.json`; token values are omitted from this raw note and the credential file remained mode `0600`.
- Disposable redacted caches saved under `wiki/.cache/interest-signals/2026-06-18-0800/threads-api-summary.json` and `wiki/.cache/interest-signals/2026-06-18-0800/github-trending-browser.json`.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK for `ethan13917`; `/threads` and `/replies` had rows newer than the 2026-06-13 baseline; `/mentions` returned 0 rows; keyword searches repeated older CK-authored AI/agent rows except the newer GPU/self-hosting reply. |
| Threads public permalink recovery | Available | New `REPOST_FACADE` rows resolved to public original Threads posts; CK reply permalinks exposed at least title/description text. |
| Threads liked / activity / reposts via live CDP | Unavailable | CDP endpoint `127.0.0.1:9222` was not reachable; browser navigation to `/liked` redirected to Threads login. |
| YouTube subscriptions / liked / Watch Later | Unavailable | Browser-visible YouTube subscriptions asked for login; liked and Watch Later playlists showed logged-out navigation and unavailable playlist state. |
| GitHub Stars | Unavailable | Browser session redirected `https://github.com/stars` to GitHub sign-in. |
| GitHub Trending public | Available | Public unauthenticated page loaded and exposed daily trending repositories. |
| Google My Activity | Unavailable | Browser session showed Google My Activity welcome/sign-in page. |
| ChatGPT | Unavailable | Browser session hit Cloudflare challenge. |
| Claude | Unavailable | Browser session hit Cloudflare security verification. |
| X profile/likes | Unavailable | Browser session resolved to `https://x.com/ck_lovesai` with a logged-out shell and no authenticated like evidence. |

## 1) Threads API — current authenticated snapshot

API base: `https://graph.threads.net/v1.0/`
User: `ethan13917` / `씨케이`

### `/threads` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZmXBsjE0hq
  Timestamp: `2026-06-15T08:11:54+0000` / `2026-06-15 17:11:54 KST`
  Media type: `REPOST_FACADE`
  Shortcode: `DZmXBsjE0hq`
  Public recovery: redirected to https://www.threads.com/@choi.openai/post/DZlrZlzD86B
  Baseline note: newer than the 2026-06-13 08:00 social/browser raw transcript.

> 세계 1%는 이미 이 그림을 보고 베팅을 끝냈습니다.
> 세계에서 가장 영향력 있는 AI·반도체 거물들이 똑같은 미래를 짓고 있습니다.
> 그리고 이 흐름을 못 따라가는 기업은 소리 없이 밀려나고 있습니다.
> 이 글을 다 읽게 된다면 세상을 보는 시선이 달라질겁니다. 🧵

- URL: https://www.threads.com/@ethan13917/post/DZmJifzE1T6
  Timestamp: `2026-06-15T06:14:02+0000` / `2026-06-15 15:14:02 KST`
  Media type: `REPOST_FACADE`
  Shortcode: `DZmJifzE1T6`
  Public recovery: redirected to https://www.threads.com/@unclejobs.ai/post/DZmFFMKiX-j
  Baseline note: newer than the 2026-06-13 08:00 social/browser raw transcript.

> 카파시의 LLM Wiki를, 구글이 업계 표준으로 만들었어요.
> 안드레이 카파시가 4월에 작은 글 하나를 올렸어요.
> AI한테 지식을 쌓게 하는 방법인데, LLM Wiki라고 불렀죠.
> 두 달 만에 구글 클라우드가 그걸 정식 표준으로 못 박았습니다.
> 이름은 OKF, Open Knowledge Format이고요.
> 거창한 이름이죠? 알맹이는 그냥 텍스트 파일 몇 개를 폴더에 모아둔 게 전부예요.

- URL: https://www.threads.com/@ethan13917/post/DZfLEOJE72M
  Timestamp: `2026-06-12T13:12:42+0000` / `2026-06-12 22:12:42 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZfLEOJE72M`
  Baseline note: already captured in the 2026-06-13 08:00 run.

> 2017-2019에 우리나라에 북한이 날린 무인기 드론 기사나 찾아보고 오쇼. 우린 대응사격도 dmz쪽으로 안하고 날라오면 우리 영토쪽으로 함. 북한 매체 그대로 베낀 우리 미디어 보고 선동당해가지고 평화 위협한다고 생각하겠지 ㅉㅉ

### `/replies` newest rows

- URL: https://www.threads.com/@ethan13917/post/DZrY3ICk9SA
  Timestamp: `2026-06-17T07:04:08+0000` / `2026-06-17 16:04:08 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZrY3ICk9SA`
  Baseline note: newer than the 2026-06-13 08:00 social/browser raw transcript, but low-context from API/public title alone.

> 이거보고 신청했는데 바로 주는데요?

- URL: https://www.threads.com/@ethan13917/post/DZm-uI3k3My
  Timestamp: `2026-06-15T13:58:45+0000` / `2026-06-15 22:58:45 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZm-uI3k3My`
  Baseline note: newer than the 2026-06-13 08:00 social/browser raw transcript; also appeared in `keyword_search(GPU)`.

> 이해가 안되네요. 셀프호스팅 하지마세요.
> 리얼타임 api나 다른 ai 클라우드 서비스를 이용하면 되었지. Gpu서버를 왜쓰나요? 메인글이나 댓글 다 봤는데 그 서비스가 따로 서버를 둬야하는지 의문입니다

- URL: https://www.threads.com/@ethan13917/post/DZmkddQk9MJ
  Timestamp: `2026-06-15T10:09:17+0000` / `2026-06-15 19:09:17 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZmkddQk9MJ`

> 와우 그가 왔다!

- URL: https://www.threads.com/@ethan13917/post/DZmbmHek56G
  Timestamp: `2026-06-15T08:51:49+0000` / `2026-06-15 17:51:49 KST`
  Media type: `TEXT_POST`
  Shortcode: `DZmbmHek56G`

> 거시적인 시각에서 본 관점 최고입니다. 여러번 읽을게요

### Other API surfaces

- `/mentions`: returned 0 rows.
- `keyword_search(agent)`: older CK-authored rows; newest visible row `2026-05-01T06:44:43+0000` / https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk.
- `keyword_search(Claude Code)`: older CK-authored row; newest visible row `2026-04-22T07:44:02+0000` / https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww.
- `keyword_search(Codex)`: older CK-authored rows; newest current-year visible row `2026-05-01T06:40:51+0000` / https://www.threads.com/@ethan13917/post/DXyU1IFE7l5.
- `keyword_search(Hermes)`: 0 rows.
- `keyword_search(Honcho)`: 0 rows.
- `keyword_search(MCP)`: 0 rows.
- `keyword_search(GPU)`: included the newer self-hosting/GPU reply at https://www.threads.com/@ethan13917/post/DZm-uI3k3My plus older CK-authored GPU/infra rows.
- `keyword_search(Ceph)`: older CK-authored rows; newest visible row `2026-04-22T07:44:39+0000` / https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx.
- `keyword_search(Proxmox)`: older CK-authored row; newest visible row `2026-04-22T07:44:39+0000` / https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx.
- `keyword_search(memory)`: older CK-authored rows; newest visible row `2026-04-21T03:24:04+0000` / https://www.threads.com/@ethan13917/post/DXYOXEPk5SM.
- `keyword_search(Fable)`: 0 rows.
- `keyword_search(Virton)`: 0 rows.

Routing note: Threads API adds fresh social chronology and one relevant GPU/build-vs-buy reply, but most Threads rows remain single-surface and insufficient for a new concept page.

## 2) GitHub Trending public — daily agent / memory / skills rows

Surface URL: https://github.com/trending?since=daily
Page title: `Trending repositories on GitHub today · GitHub`

### Relevant copied excerpts

- URL: https://github.com/DeusData/codebase-memory-mcp

> DeusData / codebase-memory-mcp
> High-performance code intelligence MCP server. Indexes codebases into a persistent knowledge graph — average repo in milliseconds. 158 languages, sub-ms queries, 99% fewer tokens. Single static binary, zero dependencies.
> C 5,159 480 Built by
> 718 stars today

- URL: https://github.com/Panniantong/Agent-Reach

> Panniantong / Agent-Reach
> Give your AI agent eyes to see the entire internet. Read & search Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees.
> Python 33,113 2,667 Built by
> 1,154 stars today

- URL: https://github.com/obra/superpowers

> obra / superpowers
> An agentic skills framework & software development methodology that works.
> Shell 231,001 20,536 Built by
> 1,205 stars today

- URL: https://github.com/mattpocock/skills

> mattpocock / skills
> Skills for Real Engineers. Straight from my .claude directory.
> Shell 133,456 11,597 Built by
> 1,570 stars today

- URL: https://github.com/continuedev/continue

> continuedev / continue
> open-source coding agent
> TypeScript 33,873 4,693 Built by
> 38 stars today

- URL: https://github.com/bytedance/UI-TARS-desktop

> bytedance / UI-TARS-desktop
> The Open-Source Multimodal AI Agent Stack: Connecting Cutting-Edge AI Models and Agent Infra
> TypeScript 36,681 3,700 Built by
> 148 stars today

- URL: https://github.com/google-research/timesfm

> google-research / timesfm
> TimesFM (Time Series Foundation Model) is a pretrained time-series foundation model developed by Google Research for time-series forecasting.
> Python 21,848 2,128 Built by
> 712 stars today

Routing note: the strongest GitHub rows reinforce the existing Honcho / managed-agent / MCP / skills axis. They are worth appending as routing evidence, but a public daily-trending page alone is not enough to create a new durable entity page.

## 3) Browser/auth status checks — unavailable authenticated surfaces

### Threads liked

Surface URL: https://www.threads.com/liked
Observed URL: `https://www.threads.com/login?next=https%3A%2F%2Fwww.threads.com%2Fliked%3F__coig_login%3D1`
Page title: `Threads • 로그인`

> 앱 다운로드

### YouTube subscriptions

Surface URL: https://www.youtube.com/feed/subscriptions
Observed URL: `https://www.youtube.com/feed/subscriptions`
Page title: blank / browser snapshot showed YouTube logged-out shell

> 새로운 동영상을 놓치지 마세요.
> 즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.
> 로그인

### YouTube liked videos / Watch Later

Liked URL: https://www.youtube.com/playlist?list=LL
Watch Later URL: https://www.youtube.com/playlist?list=WL
Page title: `undefined - YouTube`

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
> Continue with Google
> Continue with Apple

### Google My Activity

Surface URL: https://myactivity.google.com/product/search
Observed URL: `https://myactivity.google.com/?continue=https://myactivity.google.com/product/search`
Page title: `내 활동에 오신 것을 환영합니다`

> 내 활동
> 로그인
> 내 활동에 오신 것을 환영합니다

### ChatGPT / Claude / X

- ChatGPT URL: https://chatgpt.com/ — page title `잠시만 기다리십시오…`; Cloudflare challenge frame was visible and no authenticated conversation evidence was available.
- Claude URL: https://claude.ai/new — page title `잠시만 기다리십시오…`; visible text said `보안 확인 수행 중` and no authenticated chat evidence was available.
- X URL: https://x.com/ck_lovesai/likes — browser-visible session resolved to `https://x.com/ck_lovesai` with a logged-out shell and no authenticated like evidence.

## Filtering notes

- This run did not infer absence of activity from unavailable browser/CDP surfaces. It only records that authenticated browser/CDP surfaces were not reachable during this invocation.
- Threads API and public GitHub Trending were the only grounded sources with fresh rows.
- GitHub Trending's memory/MCP/agent-skills rows are the strongest durable signal, but they reinforce existing Honcho/managed-agent lanes rather than justifying a new page.
- Threads API's AI/infra-related reply about GPU self-hosting is preserved as raw evidence and watchlist support; the other fresh Threads rows are low-context, civic/social, or macro-commentary chronology evidence.
- Because no new durable concept emerged, this run updates only the raw transcript, Honcho routing audit, and log entry; `index.md` and non-Honcho concept pages remain unchanged.

## Why this raw exists

This file is the evidence store for the 2026-06-18 08:00 social/browser interest-signal collection pass. Honcho triage can later compare the GitHub memory/MCP/skills reinforcement and Threads API chronology against future repeats without mixing raw evidence into durable concept prose.
