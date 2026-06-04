---
title: Raw Transcript — Interest Signal Collection 19:00 2026-06-04
created: 2026-06-04
captured_at: 2026-06-04 19:00 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, api-replies, ai-agents, developer-workflow, equity, crypto]
route_hint: raw_only
route_confidence: 0.82
route_reason: Afternoon browser/CDP surfaces mostly repeated the same-day 08:00 social raw and 11:00 new-target append. The only truly new grounded rows were two low-durability same-day Threads API own replies; Threads liked, YouTube playlists, GitHub Stars, Google My Activity, ChatGPT, Claude, and X were unchanged, repeated, or unavailable at the durable layer.
routing:
  route: raw_only
  confidence: 0.82
  reasons:
    - Compared against the 2026-06-04 08:00 social/browser raw, the 2026-06-04 11:00 new-target append, the 2026-06-03 19:00 social raw, and current Honcho/log entries before judging novelty.
    - Threads API returned two new same-day own replies after the morning run, but they are low-durability social/context rows rather than durable wiki concepts.
    - Threads liked/reposts/activity repeated Codex role plugins, Codex Python SDK, AI Native, crypto/김프, equity/alignment, Claude Code memory/context, and cloud/on-demand rows already captured earlier.
    - YouTube liked and Watch Later hydrated the same Claude Code / MCP / agent / AI infra playlist rows; subscriptions and downloads stayed navigation-only shells.
    - GitHub Stars, Google My Activity, ChatGPT, Claude, and X did not add a durable new signal.
  signal_tags: [threads-api-replies, threads-liked, youtube-watch-later, github-stars, google-activity, raw-only]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://graph.threads.net/v1.0/
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
# Raw Transcript — Interest Signal Collection 19:00 2026-06-04
Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-04  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `raw/transcripts/interest-signal-collection-19-00-2026-06-04.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Fresh per-surface targets were opened and existing hydrated targets were retained when they had longer useful body text.
- Disposable raw evidence caches were saved under `wiki/.cache/interest-signals/cdp-2026-06-04-1900.json` and `wiki/.cache/interest-signals/threads-api-2026-06-04-1900.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens were not logged. The API still has no verified liked-post edge, so Threads liked evidence came from CDP.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-04.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-04.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-03.md`, `concepts/honcho.md`, and current `log.md` before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Repeated high-signal liked rows

- URL: https://www.threads.com/@choi.openai/post/DZGeZZ_gXut
> choi.openai
> 1일
> 이제는 챗GPT 말고 Codex 쓰셔야합니다.
> 오픈AI가 Codex를 업무용 AI 에이전트 플랫폼으로 확장하고 있습니다.
> 이번에 공개된 역할별 플러그인은 데이터 분석, 영업, 제품 디자인, 크리에이티브 제작, 투자 분석 등 직무별 업무 흐름을 한 번에 설치할 수 있도록 설계됐는데요.
> 예를 들어 데이터 분석 플러그인을 설치하면 Snowflake, Tableau 같은 도구와 연결되어 보고서와 대시보드를 만들고, 제품 디자인 플러그인은 아이디어를 프로토타입으로 변환해 팀이 바로 검토할 수 있습니다.
> 지금까지는 "무엇이든 할 수 있는 범용 AI"를 만드는 경쟁이었다면, 이제는 특정 직무를 얼마나 잘 수행할 수 있는지로 경쟁 축이 이동하고 있습니다.
> 결국 사람들은 AI에게 기능이 아니라 역할을 맡기게 될 가능성이 높은데요.
> 앞으로는 "GPT를 쓴다"보다 "AI 데이터 분석가", "AI 디자이너", "AI 영업 담당자"를 고용한다는 표현이 더 자연스러워질지도 모르겠습니다.

- URL: https://www.threads.com/@vlab_juhyun/post/DZFD10Uk2Ew
> vlab_juhyun
> AI Native
> 2일
> AI Native 회사를 너무 거창하게 생각하지 않기로 했음

- URL: https://www.threads.com/@happymagon/post/DZFUYbZEpIp
> happymagon
> 크립토활용법
> 1일
> [김프 활용하기] 김치프리미엄 -3.6%대로 역대 최저 기록중
> 김프는 환율과 스테이블코인간의 가격 괴리를 뜻하는 용어로
> 한국에서 김프는 항상 양수였었음.
> 무슨 뜻이냐면,
> 한국거래소에 입금한 원화로 스테이블코인 혹은 코인을 매수하려는 경향이 글로벌보다 n% 심했다고 보면됨.
> 하지만 요즘 계속 방장이 주장하는 것처럼
> 코인에서 탈출하여 주식으로 도달한 유동성은
> 주식 맛을 보면 절대 돌아오지 않음. (코숏주롱)
> 코인에 대한 투자심리가 한국에서 폭락하고 있는 것을 반영하여
> 오히려 스테이블 코인이 환율보다 낮은 현상을 기록하고 있음.

- URL: https://www.threads.com/@zerohch0/post/DZFN7dwGk3K
> zerohch0
> 1일
> 음성이 타자보다 4배 더 빠르다는 걸 앎？？ 한손에 우산이나 짐 들고있을 때도 음성으로 타이핑하면 엄청 편하고 빠름. 요즘 한국어 인식도 매우 굿. 근데 아이폰 갤럭시 내장 키보드랑 뭐가 다르냐고？ Ai 탑재이지롱. 댓글에 영상 올려둠 Typeless

Routing note: liked-page rows were useful evidence, but they repeated the morning Codex role-plugin / AI-native / crypto / Typeless set and stayed `raw_only`.

## 2) Threads activity / replies / reposts / API — copied text

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
Reposts URL: https://www.threads.com/@ethan13917/reposts  
API base: https://graph.threads.net/v1.0/

### Activity / replies visible via CDP

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 3일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@choisungh/post/DZBo6bwGe_h
> choisungh
> 3일
> 성과급 싸움은 사실 성과급이 문제가 아님. 진짜 문제는 직원이 회사 성장에 같이 올라탈 방법이 없다는 거지.
> 삼성전자나 하이닉스가 글로벌에서 아무리 대박을 쳐도 직원 입장에선 결국 “성과급 몇 퍼 더 주냐” 싸움으로 끝나는데.
> 미국은 엔비디아, 애플, 구글 이런 데는 보상에서 RSU나 스톡옵션이 큰 비중인데 회사 잘돼서 주가 오르면 직원도 같이 부자 되는 구조.
> 이게 진짜 alignment야. 회사 잘되는 게 곧 내 자산 늘어나는 거니까, 노사관계가 훨씬 덜 제로섬이 돼.
> 근데 한국 기업들은 맨날 직원한테 주인의식 가지라 그러잖아. 지분은 한 푼도 안 주면서 무슨 주인의식이야. 주인의식이 교육으로 생기냐? 주식으로 생기는 거지.

- URL: https://www.threads.com/@choisungh/post/DZBofzQGfCg
> choisungh
> 3일
> 내가 X에서 본 Claude Code팁 중 최고는:
> CLAUDE.md에 다음 지시사항을 추가하세요:
> 답장할 때마다 나를 [여보]라고 불러.
> Claude가 갑자기 이 호칭으로 부르기를 멈춘다면,
> 이는 CLAUDE.md를 무시하기 시작했다는 뜻이며,
> 그 시점에서는 컨텍스트를 초기화해야 합니다.

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다

### Reposts

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 2일
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.
> 기존에도 Codex App Server를 활용해 CLI나 RPC 수준에서 로컬 제어가 가능했지만, 이제는 복잡한 프로토콜 조작 없이 백엔드 워크플로우에 에이전트 런타임을 완전히 네이티브하게 이식할 수 있게 되었습니다.
> 최근 오픈AI의 움직임을 보면 챗GPT를 만드는 회사에서 AI 운영체제를 만드는 회사로 확장하고 있는 모습인데요.
> 모델, 에이전트, Codex, SDK, AWS 연동까지 이어지면서 오픈AI가 직접 제품을 만드는 것보다 다른 개발자들이 오픈AI 위에서 제품을 만들도록 생태계를 구축하는 방향으로 가고 있는 것으로 보입니다.

- URL: https://www.threads.com/@thehackathonkr/post/DYQ1dy3iSwJ
> thehackathonkr
> 2026-05-13
> 전세계에서 주목을 받는 한국인 개발자가 있습니다.
> oh-my-claudecode(33K+ 스타), oh-my-codex(28K+ 스타) 를 만든 허예찬님이신데요.
> 전통 알고리즘으로 닫힌 루프를 만들고 LLM이 그 안에서 판단을 내리게 하는 게 하네스 엔지니어링의 핵심이라고 말합니다.

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned 10 rows; latest row remained the same `REPOST_FACADE` from the prior baseline:

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> ethan13917
> 2026-06-02T08:30:08+0000
> media_type: REPOST_FACADE

- `/replies` returned 10 rows. Two same-day API replies were newer than the morning raw transcript:

- URL: https://www.threads.com/@ethan13917/post/DZJ3Nrhk_T7
> ethan13917
> 2026-06-04T06:35:11+0000
> 진짜 한마디해라 트윗날리라고

- URL: https://www.threads.com/@ethan13917/post/DZJjR5REzLX
> ethan13917
> 2026-06-04T03:40:59+0000
> 꿈의 도시다 입성하기를 학수고대하며..

- `/mentions` returned HTTP 200 with 0 rows.
- `keyword_search` `agent`: HTTP 200, 8 rows; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk`.
- `keyword_search` `Claude Code`: HTTP 200, 1 row; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww`.
- `keyword_search` `Codex`: HTTP 200, 2 rows; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXyU1IFE7l5`.
- `keyword_search` `OpenAI`: HTTP 200, 3 rows; latest visible result remained older CK-authored post `https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk`.
- `keyword_search` `Hermes`, `MCP`, `AI infra`, `LazyCodex`, `oh-my-pi`, and `Honcho`: HTTP 200 with 0 rows.

Routing note: the two same-day API replies are the only fresh Threads rows in this run. They are preserved as raw evidence but are too low-durability for a concept or entity update.

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
> Visible text: 홈 / Shorts / 구독 / 내 페이지
> Recorded as navigation shell rather than negative evidence.

### Liked videos — visible rows

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s&pp=iAQBsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan
> Sequoia Capital

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7&pp=iAQBsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers

- URL: https://www.youtube.com/watch?v=MKV6DTVmxwE&list=LL&index=8&pp=iAQBsAgC
> 미토스 AI는 왜 전 세계 금융권을 긴급 소집하게 만들었나 / 오그랲 / 비디오머그
> 비디오머그 - VIDEOMUG

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=9&t=22s&pp=iAQBsAgC
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=10&t=17s&pp=iAQBsAgC
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer

- URL: https://www.youtube.com/watch?v=Am5y6x-erJs&list=LL&index=13&pp=iAQBsAgC
> 모르면 진짜 개손해... AI로 회사 운영 해주는 Paper Clip. 심지어 무료 오픈소스
> 코드팩토리

- URL: https://www.youtube.com/watch?v=IAEV_fUAdWk&list=LL&index=14&t=325s&pp=iAQBsAgC
> 앤트로픽이 말하는 가장 효율적인 Harnessing. Managed Agents! 앙
> 코드팩토리

### Watch Later — visible rows

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s&pp=iAQBsAgC
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4&pp=iAQBsAgC
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler

- URL: https://www.youtube.com/watch?v=zgNvts_2TUE&list=WL&index=7&t=65s&pp=iAQBsAgC
> State of the Claw — Peter Steinberger
> AI Engineer

- URL: https://www.youtube.com/watch?v=gYkAAiA1W7g&list=WL&index=9&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> 이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
> 방구석 리뷰룸

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=13&t=108s&pp=iAQBsAgC
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung

- URL: https://www.youtube.com/watch?v=_lpYx03VVBM&list=WL&index=15&t=85s&pp=iAQBsAgC
> LiteParse - The Local Document Parser
> Sam Witteveen

- URL: https://www.youtube.com/watch?v=GhIJs4zbH0o&list=WL&index=16&t=32s&pp=iAQBsAgC
> Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
> Bloomberg Originals

- URL: https://www.youtube.com/watch?v=G121VNcu0dg&list=WL&index=17&t=222s&pp=iAQBsAgC
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
> Steve Eisman

Routing note: YouTube stayed same-axis reinforcement. New top-of-list entertainment/sports/music rows were preserved in the cache but intentionally excluded from the concise signal report.

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

- URL: https://github.com/AtomicBot-ai/atomic-hermes
> AtomicBot-ai / atomic-hermes
> The agent that grows with you

- URL: https://github.com/NousResearch/hermes-agent
> NousResearch / hermes-agent
> The agent that grows with you

- URL: https://github.com/k2-fsa/OmniVoice
> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages

Routing note: GitHub Stars remained the same agent-tooling list as the 08:00 run; no new entity page was created.

## 5) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> claude sdk 을(를) 검색했습니다.
> 오후 3:03 •  • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> hermes providers 을(를) 검색했습니다.
> 오후 2:38 •  • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> open code claude subscription 을(를) 검색했습니다.
> 오후 1:53 •  • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> lazy codex 을(를) 검색했습니다.
> 오전 10:14 •  • 세부정보

Routing note: the visible Google rows matched the morning transcript; no fresh Google signal after the 08:00 run was observed.

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

### Claude recent titles

> 엔지니어 커리어 최대치 현실적 평가
> 버튼 지분 받는 일반적인 규모
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> 아내가 음식을 권할 때 대처법
> 아내의 정신 건강 걱정
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> Virton과 AI agent의 인프라 자동화 시너지
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> 토큰 가격 상승의 구조적 필연성
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기

Routing note: ChatGPT was unchanged versus the morning run. Claude remained in the career/equity/AI-infra/B2B-product lanes and did not add a fresher durable row than the morning `지분 획득 시 CTO의 역할과 준비` signal.

## 7) X / Twitter — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: empty

> To view keyboard shortcuts, press question mark
> View keyboard shortcuts
> 20+
> Profile
> See new posts
> This account doesn’t exist
> Try searching for another.
> Trending now
> What’s happening
> Bloated AI Slop Labs
> @bloatedaislop
> Follow

Routing note: X likes remained unusable from the exposed session. The recommendations/trending sidebar was not treated as CK interest evidence.

## Filtering notes

- Strongest newly surfaced row: Threads API returned two same-day own replies after the 08:00 run (`진짜 한마디해라 트윗날리라고`, `꿈의 도시다 입성하기를 학수고대하며..`). These are raw context only.
- Threads liked/reposts/activity repeated Codex role plugins, Codex Python SDK, AI Native, 김프/crypto, Claude Code memory/context, equity/alignment, and cloud/on-demand rows already captured earlier.
- YouTube playlists repeated Claude Code / MCP / harness / AI infra / investing rows. Subscriptions/downloads remained navigation shells.
- Repeated or unchanged surfaces: GitHub Stars, Google My Activity, ChatGPT, Claude, Threads API keyword searches, and X availability.
- Low-value/noisy rows intentionally not promoted: sports/music/parenting YouTube items, generic lifestyle/social noise, X recommendation sidebar, and YouTube navigation shells.

## Why this raw exists

This file preserves the 2026-06-04 19:00 evidence store for later Honcho-style triage. The current route is `raw_only`: useful same-day afternoon evidence and two low-durability Threads API replies, but no new durable wiki page or index update is justified.
