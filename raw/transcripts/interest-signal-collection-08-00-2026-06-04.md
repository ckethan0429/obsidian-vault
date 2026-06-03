---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-04
created: 2026-06-04
captured_at: 2026-06-04 08:06 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, ai-agents, developer-workflow, equity, cto, crypto]
route_hint: raw_only
route_confidence: 0.83
route_reason: Morning browser/CDP surfaces mostly repeated the 2026-06-03 19:00 social/browser baseline and 23:00 Honcho refinement. Freshly visible rows were thin reinforcement: Claude added a CTO/equity recent title, YouTube Watch Later/liked hydrated known AI-agent playlist rows, and Threads still centered Codex role plugins / Codex SDK / equity / cloud-infra comments. No new durable wiki branch is justified.
routing:
  route: raw_only
  confidence: 0.83
  reasons:
    - Compared against the 2026-06-03 08:00, 19:00, 22:00 raw transcripts and the 2026-06-03 23:00 Honcho refinement before judging novelty.
    - Threads liked/reposts/activity repeated the same Codex role-plugin, Codex SDK, LazyCodex, equity-alignment, and cloud/on-demand rows already captured on 2026-06-03.
    - YouTube subscriptions and downloads remained navigation-only shells; Watch Later and liked playlists hydrated useful but repeated AI-agent / Claude Code / MCP / infra rows.
    - GitHub Stars, Google My Activity, ChatGPT, Threads API, and X were unchanged, repeated, or unusable at the durable layer.
    - Claude recents added a small CTO/equity/operator-context row, but it fits existing career/equity and AI-infra lanes.
  signal_tags: [threads-liked, codex-role-plugins, codex-sdk, youtube-watch-later, claude-recents, raw-only]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/ckethan0429/likes
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-04
Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-04  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `interest-signal-collection-08-00-2026-06-04.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface targets were inspected and fresh targets were opened where useful.
- Disposable raw evidence cache: `wiki/.cache/interest-signals/cdp-2026-06-04-0800.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens were not logged. The API still has no verified liked-post edge, so Threads liked evidence came from CDP.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-03.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-03.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-03.md`, `concepts/honcho.md`, and `log.md` before judging novelty.

## 1) Threads liked / reposts — copied text

Liked URL: https://www.threads.com/liked  
Reposts URL: https://www.threads.com/@ethan13917/reposts  
Page titles: `좋아요 • Threads`; `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

### Liked page — repeated high-signal rows

- URL: https://www.threads.com/@choi.openai/post/DZGeZZ_gXut
> choi.openai
> 1일
> 이제는 챗GPT 말고 Codex 쓰셔야합니다.
> 오픈AI가 Codex를 업무용 AI 에이전트 플랫폼으로 확장하고 있습니다.
> 이번에 공개된 역할별 플러그인은 데이터 분석, 영업, 제품 디자인, 크리에이티브 제작, 투자 분석 등 직무별 업무 흐름을 한 번에 설치할 수 있도록 설계됐는데요.
> 지금까지는 "무엇이든 할 수 있는 범용 AI"를 만드는 경쟁이었다면, 이제는 특정 직무를 얼마나 잘 수행할 수 있는지로 경쟁 축이 이동하고 있습니다.
> 앞으로는 "GPT를 쓴다"보다 "AI 데이터 분석가", "AI 디자이너", "AI 영업 담당자"를 고용한다는 표현이 더 자연스러워질지도 모르겠습니다.

- URL unavailable: Threads liked row did not expose a canonical post URL in the selected text block; tag/profile surface retained.
> vlab_juhyun
> AI Native
> 1일
> AI Native 회사를 너무 거창하게 생각하지 않기로 했음

- URL unavailable: Threads liked row did not expose a canonical post URL in the selected text block; tag/profile surface retained.
> happymagon
> 크립토활용법
> 1일
> [김프 활용하기] 김치프리미엄 -3.6%대로 역대 최저 기록중
> 김프는 환율과 스테이블코인간의 가격 괴리를 뜻하는 용어로
> 한국거래소에 입금한 원화로 스테이블코인 혹은 코인을 매수하려는 경향이 글로벌보다 n% 심했다고 보면됨.
> 코인에서 탈출하여 주식으로 도달한 유동성은 주식 맛을 보면 절대 돌아오지 않음. (코숏주롱)

- URL unavailable: Threads liked row did not expose a canonical post URL in the selected text block; tag/profile surface retained.
> zerohch0
> 1일
> 음성이 타자보다 4배 더 빠르다는 걸 앎？？ 한손에 우산이나 짐 들고있을 때도 음성으로 타이핑하면 엄청 편하고 빠름.
> 요즘 한국어 인식도 매우 굿. 근데 아이폰 갤럭시 내장 키보드랑 뭐가 다르냐고？ Ai 탑재이지롱. 댓글에 영상 올려둠 Typeless

### Reposts — repeated high-signal rows

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 1일
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.
> 기존에도 Codex App Server를 활용해 CLI나 RPC 수준에서 로컬 제어가 가능했지만, 이제는 복잡한 프로토콜 조작 없이 백엔드 워크플로우에 에이전트 런타임을 완전히 네이티브하게 이식할 수 있게 되었습니다.
> 최근 오픈AI의 움직임을 보면 챗GPT를 만드는 회사에서 AI 운영체제를 만드는 회사로 확장하고 있는 모습인데요.

- URL unavailable: older repost row visible but canonical item URL was not exposed in the selected text block; surface URL retained.
> claudebum
> AI Threads
> 2026-05-17
> @openai
> 코덱스 홍보팀 진짜 뭐하냐고
> 장난감 같은 휴대폰 리모트 컨트롤보다 개쩌는게 나옴
> codex 맥앱에는 ssh 기능이 있는데
> SSH 자동 감지하고 연결이 가능하다고...?

Routing note: Threads rows are useful raw evidence, but they repeat the 2026-06-03 Codex role-plugin / Codex SDK / AI-native / crypto side-surface cluster and stay `raw_only`.

## 2) Threads activity / replies / API — copied text

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
API base: https://graph.threads.net/v1.0/

### Activity / replies

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> bu66lymuffin
> 1일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 2일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> god800913
> 5일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다.
> 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다.

- URL: https://www.threads.com/@ma.chi.n.e/post/DYrFnfYE6Cm
> 네 알고 있습니다. 서비스 월간 트래픽이 십만 단위로 넘어가다보니(뷰 수보다 인당 용량이 더 많이 드는 서버라) 자체 인프라를 만들었고, 과금을 거의 제로에 수렴시키는 과정에서 관련 구조를 직접 구축하게 됐습니다.
> 덧붙이지면 스케일 아웃 자체가 클라우드의 절대적 정의라고 보진 않습니다. 구축도 어렵진 않구요.

- URL: https://www.threads.com/@ethan13917/post/DYOWsXiE9Lj
> 꼭 봐야하는 Andrej Karpathy의 포스팅입니다.
> 최근 아주 흥미로운 제안을 했습니다. AI에게 마지막에 "답변을 HTML로 구조화해줘"라는 문구를 붙여보라는 것입니다.
> 이 방법의 핵심은 ‘읽는 에너지’를 줄이는 것입니다.

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned 10 rows; latest row remained the 2026-06-02 `REPOST_FACADE`:

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> ethan13917
> 2026-06-02T08:30:08+0000
> media_type: REPOST_FACADE

- `/replies` returned 10 rows; latest own reply remained:

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 2026-06-01T02:31:45+0000
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- `/mentions` returned HTTP 200 with 0 rows.
- `keyword_search` `agent`: HTTP 200, 5 rows; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk`.
- `keyword_search` `Claude Code`: HTTP 200, 1 row; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww`.
- `keyword_search` `Codex`: HTTP 200, 2 rows; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXyU1IFE7l5`.
- `keyword_search` `Hermes`, `MCP`, `AI infra`, `LazyCodex`, `oh-my-pi`, and `Honcho`: HTTP 200 with 0 rows.

Routing note: API/replies/activity were reinforcement-only; no new Threads durable branch.

## 3) YouTube — copied text

Subscriptions URL: https://www.youtube.com/feed/subscriptions  
Liked videos URL: https://www.youtube.com/playlist?list=LL  
Watch Later URL: https://www.youtube.com/playlist?list=WL  
Downloads URL: https://www.youtube.com/feed/downloads

### Subscriptions / downloads availability

> Subscriptions page title: 구독 - YouTube
> Visible text: 홈 / Shorts / 구독 / 내 페이지
> No video rows hydrated in the visible CDP target during this run.

> Downloads page title: YouTube
> Visible text: 홈 / Shorts / 구독 / 내 페이지 / 설정
> Recorded as navigation shell rather than negative evidence.

### Liked videos — visible rows

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s&pp=iAQBsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan
> Sequoia Capital

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers

- URL: https://www.youtube.com/watch?v=MKV6DTVmxwE&list=LL&index=8&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> 미토스 AI는 왜 전 세계 금융권을 긴급 소집하게 만들었나
> 오그랲 / 비디오머그

- URL unavailable from extracted anchor list; liked playlist surface retained.
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16

- URL unavailable from extracted anchor list; liked playlist surface retained.
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer

- URL unavailable from extracted anchor list; liked playlist surface retained.
> 모르면 진짜 개손해... AI로 회사 운영 해주는 Paper Clip. 심지어 무료 오픈소스
> 코드팩토리

### Watch Later — visible rows

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s&pp=iAQBsAgC
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4&pp=iAQBsAgC
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler

- URL: https://www.youtube.com/watch?v=lrHsTYq8XVo&list=WL&index=5&pp=iAQBsAgC
> AI시대 이렇게 연봉 2배 올리세요.
> 동기부여학과

- URL: https://www.youtube.com/watch?v=4TNRp0oQ1lQ&list=WL&index=8&t=569s&pp=iAQBsAgC
> 바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
> Jay Choi | 인디해커 라이프

- URL: https://www.youtube.com/watch?v=gYkAAiA1W7g&list=WL&index=9&pp=iAQBsAgC
> 이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
> 방구석 리뷰룸

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=13&t=108s&pp=iAQBsAgC
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung

- URL: https://www.youtube.com/watch?v=GhIJs4zbH0o&list=WL&index=16&t=32s&pp=iAQBsAgC
> Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
> Bloomberg Originals

- URL: https://www.youtube.com/watch?v=G121VNcu0dg&list=WL&index=17&t=222s&pp=iAQBsAgC
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
> Steve Eisman

- URL: https://www.youtube.com/watch?v=H7_oH-Ujqak&list=WL&index=20&t=849s&pp=iAQBsAgC
> EBS가 영혼을 갈아 만든 2026 주식 다큐멘터리 1시간 핵심 요약본｜코스피 6,000시대 우량주와 ETF｜AI 버블｜다큐프라임 2026｜#골라듄다큐
> EBSDocumentary (EBS 다큐)

- URL: https://www.youtube.com/watch?v=rb3ZYR_Q1po&list=WL&index=25&t=318s&pp=iAQBsAgC
> 랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀
> Bloom AI

- URL: https://www.youtube.com/watch?v=GL3LXWBZfy0&list=WL&index=26&t=5s&pp=iAQBsAgC
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자 (커서맛피아 최수민님)
> 빌더 조쉬 Builder Josh

- URL: https://www.youtube.com/watch?v=Og0mtAbDrDY&list=WL&index=33&t=1s&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> EP 70. 100x 엔지니어의 Claude Code 활용법
> 노정석

- URL: https://www.youtube.com/watch?v=N5xhOqlvRh4&list=WL&index=39&t=653s&pp=iAQBsAgC
> I built a private AI mini-cluster with Framework Desktop
> Jeff Geerling

Routing note: YouTube was useful as raw evidence, but the rows remain same-axis reinforcement for Claude Code / MCP / AI-agent / AI-infra / investing lanes.

## 4) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

- URL: https://github.com/tech-leads-club/agent-skills
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.

- URL: https://github.com/smithersai/claude-p
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.

- URL: https://github.com/kelseyhightower/kubernetes-the-hard-way
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.

- URL: https://github.com/blader/humanizer
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text

- URL: https://github.com/code-yeongyu/not-claude-code-emulator
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

Routing note: the top stars list remains the same agent-tooling list as prior raw transcripts; no new repo/entity page was created.

## 5) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

- URL: https://www.google.com/search?q=claude+sdk
> 검색
> claude sdk 을(를) 검색했습니다.
> 오후 3:03 • 세부정보

- URL: https://www.google.com/search?q=hermes+providers
> 검색
> hermes providers 을(를) 검색했습니다.
> 오후 2:38 • 세부정보

- URL: https://www.google.com/search?q=open+code+claude+subscription
> 검색
> open code claude subscription 을(를) 검색했습니다.
> 오후 1:53 • 세부정보

- URL: https://www.google.com/search?q=lazy+codex
> 검색
> lazy codex 을(를) 검색했습니다.
> 오전 10:14 • 세부정보

- URL: https://www.google.com/search?q=proxmox+guest+agent+install
> 검색
> proxmox guest agent install 을(를) 검색했습니다.
> 오후 12:18 • 세부정보

- URL: https://www.google.com/search?q=draw+io+mcp
> 검색
> draw io mcp 을(를) 검색했습니다.

Routing note: Google repeated the 2026-06-03 operator/provider and Proxmox/MCP rows; no fresh durable Google signal.

## 6) ChatGPT / Claude — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new

### ChatGPT recent titles

> 깃 워크트리 사용법
> Accountable harness 해석
> 업비트에서 바이낸스로 전송
> Hermes 여러 모델 사용법
> Top-level await 해결법
> Claude SDK와 구독 사용
> 이적 고민과 성장 전략
> GS 인증 준비 점검사항
> 블로그 논리 분석 요청
> 주식 내러티브 설명
> RSU vs 스톡옵션 비교
> 치실 영어 번역
> 앵무새 영어 단어
> Claude Code 사용 제한
> Ceph OSD 장애 분석
> Using Claude Plugins
> MCP 서버 만들기

### Claude recent titles

- URL: https://claude.ai/chat/036a858a-e51e-479d-9ff6-2d7e260034d7
> 지분 획득 시 CTO의 역할과 준비

- URL: https://claude.ai/chat/4b192f85-c217-48dd-918f-92220703b7ae
> 엔지니어 커리어 최대치 현실적 평가

- URL: https://claude.ai/chat/3e145c7c-c15c-4214-b12c-2069697bf793
> 버튼 지분 받는 일반적인 규모

- URL: https://claude.ai/chat/a7297b4b-01e8-4022-9554-d83484f85319
> 엔지니어 경력 발전 방향

> 기술 비교 분석의 공정성 문제
> 아내의 정신 건강 걱정
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기

Routing note: Claude's top CTO/equity title is the freshest side-surface row, but it reinforces the existing career/equity/operator lane rather than creating a new durable concept page.

## 7) X / Twitter — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: empty

> Ads info

Routing note: X likes remained unusable from the exposed session; no inference was made.

## Filtering notes

- Strongest newly visible / materially changed item: Claude sidebar now shows `지분 획득 시 CTO의 역할과 준비`; this is useful raw operator-context evidence but same-axis with career/equity rows.
- Threads and YouTube primarily reinforced prior-day Codex role-plugin, Codex SDK, Claude Code, MCP, AI-agent, infra, and crypto/investing lanes.
- Repeated or unchanged surfaces: Threads API, GitHub Stars, Google My Activity, ChatGPT recents, YouTube liked/Watch Later AI rows, and X availability.
- Low-value/noisy rows intentionally not promoted: sports/music/parenting YouTube rows, generic lifestyle/social noise, navigation-shell YouTube subscriptions/downloads, and unusable X page.

## Why this raw exists

This file preserves the 2026-06-04 08:00 evidence store for later Honcho-style triage. The current route is `raw_only`: useful reinforcement and one small Claude CTO/equity row, but no new durable page or index update is justified.
