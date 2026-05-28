---
source: live Chrome CDP + browser-visible surfaces
date: 2026-05-28
run: 08:00
captured_at: 2026-05-28 13:53 KST
route_hint: raw_only
route_confidence: 0.78
route_reason: Threads likes/activity/replies and ChatGPT/Claude/Google rotated toward Anthropic Korea, AgentOps/agentic engineering, and private-cloud/AIOps/Proxmox questions, but the pattern still reinforces CK's existing AI-agent / infra / operator lane rather than opening a durable new branch. GitHub Stars and YouTube Watch Later/Liked were mostly baseline repeats.
routing: raw_only
signal_tags:
  - threads
  - youtube
  - github-stars
  - google
  - chatgpt
  - claude
  - ai-infra
  - private-cloud
  - agentic-engineering
  - reinforcement
---

# Raw Transcript — Interest Signal Collection 08:00 2026-05-28

## Live session notes
- Read the top-level wiki `README.md` first and followed the raw → Honcho triage → durable-promotion workflow.
- No same-day `interest-signal-collection-08-00-2026-05-28.md` raw transcript existed at start, so this was not treated as a duplicate retry.
- Queried live Chrome CDP at `http://127.0.0.1:9222/json/version` and `http://127.0.0.1:9222/json/list`; the live session was reachable.
- The initial CDP target list only had `chrome://newtab/`, so fresh page targets were opened per source and read with `Runtime.evaluate`.
- Source transport: browser/CDP for Threads, YouTube, GitHub, Google My Activity, ChatGPT, and Claude. Threads API was not used for this pass because the relevant liked/activity/repost surfaces are browser-visible and prior morning baselines used the CDP path.
- Baseline compared: `raw/transcripts/interest-signal-collection-08-00-2026-05-27.md` plus recent log entries through 2026-05-27.
- Routing decision: `raw_only`; several fresh rows appeared, but they fit the established AI-agent / infra / operator lane.

## 1) GitHub Stars — copied text
Page title:
- `Your stars`

Visible text:
> Your Stars
>
> Browse your starred repositories and topics
>
> 18
> All stars
>
> STARRED REPOSITORIES
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
>
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.
>
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.
>
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text
>
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
>
> AtomicBot-ai / atomic-hermes
> The agent that grows with you
>
> NousResearch / hermes-agent
> The agent that grows with you
>
> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages
>
> jung-wan-kim / memory-bank
>
> first-fluke / oh-my-agent
> Portable, vendor-agnostic agent harness for project-specific skills, workflows, and agent teams aligned with your codebase, conventions, and engineering standards.

Filtering notes:
- Visible repo order and count matched the 2026-05-27 baseline. No newly visible starred repo was captured in this pass.

## 2) Threads — likes / activity / reposts / replies / profile
Page titles:
- `좋아요 • Threads`
- `활동 • Threads`
- `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

### Likes surface — copied text
> funfun_universe
> 11시간
> 5.6천
> 313
> 301
> 2.6천
>
> runningonestep
> 1일
> [초보러너가 알아두면 좋을 러닝화 종류 4가지]
> > 쿠션화-안정화-레이싱화-슈퍼트레이너
> 1. 쿠션화
> - 충격 흡수에 올인해 구름 위를 걷는 듯한 푹신한 러닝화
> - 추천: 과체중 러너, 부상 방지가 최우선인 왕초보 런린이
> - 제품 : 아식스 젤님버스28, 뉴발란스1080 V15, 써코니 트라이엄프23
>
> gymcoding
> ClaudeCode
> 22시간
> 속보 🚨
> Claude 만든 Anthropic이
> 서울에 옵니다.
> 아시아 3번째 거점, 한국.
> 대표는 최기영 (전 Snowflake 한국 GM).
> 본사 임원진, 수주 내 방한.
> 이유 하나.
> "한국인은 클로드를 3.5배 더 쓴다"
> 남 얘기 아니에요.
> 이미 시작됐습니다.
> 이제는 써보는 게 아니라,
> 제대로 배워야 할 때입니다.
>
> vibematfia
> AgentOps
> 16시간
> 개인적으로
> 에이전틱 엔지니어링 = 소프트웨어 엔지니어링
> 이라고 생각하는데요,
> 이 분야의 명저를 들고와봤습니다.
> 바이브코딩을 더 잘하고싶은 분이라면 누구나 읽어볼만한 책입니다.
> ""프로그래밍과 소프트웨어 엔지니어링의 가장 큰 차이는 시간, 확장, 실전에서의 트레이드오프, 이렇게 세 가지라고 생각합니다. 소프트웨어 엔지니어링 프로젝트에서 엔지니어는 시간의 흐름과 언젠가 변경될 가능성에 더 신경 써야 합니다.""

### Activity surface — copied text
> blrkexxon
> 님 외 14명
> 3일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
>
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
>
> danny_gwangsick
> 님 외 5명
> 4일
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
>
> ma.chi.n.e
> 4일
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
> 네 알고 있습니다. 서비스 월간 트래픽이 십만 단위로 넘어가다보니(뷰 수보다 인당 용량이 더 많이 드는 서버라) 자체 인프라를 만들었고, 과금을 거의 제로에 수렴시키는 과정에서 관련 구조를 직접 구축하게 됐습니다.

### Reposts surface — copied text
> ho_ho_ju_ju
> 2026-05-06
> 반도체 투자 중인 사람들은
> 이 글 그냥 넘기지 마세요
> 삼전닉스 다음은 반도체 소부장입니다.
> 저장해두면 계속 꺼내보게 되는
> 2026 반도체 소부장 총정리
>
> claudebum
> AI Threads
> 2026-05-17
> 아 
> @openai
>  코덱스 홍보팀 진짜 뭐하냐고
> ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
> 장난감 같은 휴대폰 리모트 컨트롤보다 개쩌는게 나옴
> codex 맥앱에는 ssh 기능이 있는데
> SSH 자동 감지하고 연결이 가능하다고...?
> 아니 홍보를 왜이렇게 하는건데.....
>
> thehackathonkr
> 2026-05-13
> 전세계에서 주목을 받는 한국인 개발자가 있습니다.
> oh-my-claudecode(33K+ 스타), oh-my-codex(28K+ 스타) 를 만든 허예찬님이신데요.
> 전통 알고리즘으로 닫힌 루프를 만들고 LLM이 그 안에서 판단을 내리게 하는 게 하네스 엔지니어링의 핵심이라고 말합니다.
>
> aicoffeechat
> 2026-05-12
> 꼭 봐야하는 Andrej Karpathy의 포스팅입니다.
> 최근 아주 흥미로운 제안을 했습니다. AI에게 마지막에 "답변을 HTML로 구조화해줘"라는 문구를 붙여보라는 것입니다.
> 보통 우리는 AI가 주는 텍스트를 채팅창 안에서 읽습니다. 하지만 HTML로 답변을 받으면 그 내용을 복사해서 브라우저로 볼 수 있습니다.

### Replies / profile — copied text
> ethan13917
> 4일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
>
> ethan13917
> 5일
> 다른 건 내려두고 월드컵이니까 응원해달라
> 다른 건 제쳐두고 경제부터 먼저 살리자
> 다른 건 고려하지말고 건물부터 올리자
> 다른 건 상관 없으니 애 대학부터 보내자
> 우리나라는 과정과 토대를 항상 무시해 옴.

Filtering notes:
- Freshest relevant rows: Anthropic Korea / Claude adoption, agentic-engineering-as-software-engineering, and the cloud/on-demand/infrastructure definition discussion.
- Running, politics, and generic social rows were preserved only as raw context and not promoted.

## 3) YouTube — subscriptions / watch later / likes
Page titles:
- `구독 - YouTube`
- `나중에 볼 동영상 - YouTube`
- `좋아요 표시한 동영상 - YouTube`

### Subscriptions feed excerpt
> AI가 말을 너무 장황하게 한다면? 원시인처럼 만드는 caveman 우가우가!! 토큰 절약하기 #llm #agent #token #openai #openclaw #claude
> 조회수 1만회
>
> Amazon Connect Health: Embedding Agentic AI at the Point of Care
> AWS Events
> 조회수 201회
> 스트리밍 시간: 13시간 전
>
> New AntiGravity Update is Insane (FREE!) 🤯
> Julian Goldie SEO
> 조회수 84회
> 55분 전
>
> New Hermes MCP Agent Update is INSANE (FREE!)
> Julian Goldie SEO
> 조회수 386회
> 1시간 전
>
> OpenClaw 5.26 Update Just Dropped...
> Julian Goldie SEO
> 조회수 755회
> 2시간 전
>
> GitHub Copilot: Your AI Companion for Every Workflow
> GitHub
> 조회수 102회
> 6시간 전
>
> Robinhood Will Allow Users’ AI Agents To Trade Stocks
> Forbes
> 조회수 1.7천회
> 7시간 전
>
> What Maintainers need to know about Open Source Licensing, SBOMs and Security
> GitHub
> 조회수 362회
> 스트리밍 시간: 7시간 전
>
> How to manage context the right way with LangSmith's Context Hub
> LangChain
> 조회수 633회
> 11시간 전
>
> Comprehend First, Code Later: The AI Skill I Rely On Daily — Priscila Andre de Oliveira, Sentry
> AI Engineer
> 조회수 5.9천회
> 11시간 전
>
> This Startup Is Pioneering The Next Massive Tech Boom: Physical AI
> Forbes
> 조회수 6.2천회
> 12시간 전

### Watch-later excerpt
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology
> 조회수 8.4만회 • 3주 전
>
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler
> 조회수 2.7만회 • 3주 전
>
> State of the Claw — Peter Steinberger
> AI Engineer
> 조회수 14만회 • 1개월 전
>
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung
> 조회수 25만회 • 1개월 전
>
> LiteParse - The Local Document Parser
> Sam Witteveen
> 조회수 7.5만회 • 2개월 전
>
> Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
> Bloomberg Originals
> 조회수 634만회 • 1년 전
>
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
> Steve Eisman
> 조회수 9.7만회 • 7개월 전
>
> 65줄의 스킬에 깃허브 스타 6500개, 단순하지만 직관적 가이드라인으로 성능을 끌어올린 사례 - 안티그래비티에 적용하기 feat : 생활형 계산기 10개
> 오늘코드todaycode
>
> 랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀
> Bloom AI
>
> I built a private AI mini-cluster with Framework Desktop
> Jeff Geerling

### Likes page excerpt
> Andrej Karpathy: From Vibe Coding to Agentic Engineering
> Sequoia Capital
> 조회수 114만회 • 4주 전
>
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers
> 조회수 2.1만회 • 1개월 전
>
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16
> 조회수 4.3천회 • 1개월 전
>
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer
> 조회수 13만회 • 1개월 전
>
> 모르면 진짜 개손해... AI로 회사 운영 해주는 Paper Clip. 심지어 무료 오픈소스
> 코드팩토리
>
> 앤트로픽이 말하는 가장 효율적인 Harnessing. Managed Agents! 앙
> 코드팩토리
>
> Every Type of API Simply Explained in 9 Minutes!
> Codist
>
> The 8 AI Skills That Will Separate Winners From Losers in 2025
> Liam Ottley

Filtering notes:
- Subscriptions rotated several fresh AI-agent / MCP / OpenClaw / LangSmith / AI-trading rows.
- Watch Later and Liked pages mostly repeated the established agent / harness / infra baseline.
- Sports, political, entertainment, and lifestyle rows were visible in the feed but omitted from this short excerpt unless they affected the interpretation.

## 4) Google My Activity — copied text
Page title:
- `Google - 내 활동`

Visible text:
> Google 검색 서비스 기록
>
> 어제
> 검색
> 알림 6개
> 포함된 주제:
> 찌르기
> 구글 AI
> 아이폰
> GPT-5
> 안전
> 날씨
> 오후 10:48 • 세부정보
>
> 5월 26일
> 검색
> 알림 6개
> 포함된 주제:
> 샘 올트먼
> 주식
> 클로드
> 조지 호츠
> 날씨
> 오후 9:48 • 세부정보
>
> 검색
> draw io mcp 을(를) 검색했습니다.
> 오후 3:52 • 세부정보
>
> 검색
> draw.io 을(를) 검색했습니다.
> 오후 3:41 • 세부정보
>
> 검색
> 딥엑스 을(를) 검색했습니다.
> 오후 2:21 • 세부정보
>
> 검색
> deepx m1 을(를) 검색했습니다.
> 오후 2:20 • 세부정보
>
> 검색
> 한글 웹 을(를) 검색했습니다.
> 오전 11:42 • 세부정보
>
> 검색
> grok cursor 을(를) 검색했습니다.
> 오전 11:41 • 세부정보
>
> 검색
> what is oss 을(를) 검색했습니다.
> 오전 10:28 • 세부정보
>
> 검색
> esp32 디스플레이 을(를) 검색했습니다.
> 오전 10:27 • 세부정보
>
> 검색
> esp32 을(를) 검색했습니다.
> 오전 10:26 • 세부정보
>
> 5월 22일
> 검색
> proxmox vxlan 설정 을(를) 검색했습니다.
> 오후 5:10 • 세부정보
>
> 검색
> proxmox release notes 을(를) 검색했습니다.
> 오후 5:09 • 세부정보

Filtering notes:
- Freshest visible Google row versus the 2026-05-27 baseline: `구글 AI`, `GPT-5`, `draw io mcp`, `DeepX M1`, and `grok cursor`.
- These still sit inside the existing AI tooling / hardware / infra lane.

## 5) ChatGPT — recent chat surface
Page title:
- `ChatGPT`

Visible text:
> 채팅 기록
> ChatGPT
> 새 채팅
> 채팅 검색
> 라이브러리
> 앱
> Codex
> 더 보기
> 프로젝트
> 사업
> virton
> ai learning
> ai 인프라
> 최근
> CJS MJS 차이
> Ceph OSD 장애 분석
> 창업자 자질 보완 방법
> Semiconductor ETFs US
> Using Claude Plugins
> bcrypt 보안성과 심사
> CI 도커 파일 오류
> MCP 서버 만들기
> AI로 서버 구성도 그리기
> 공공 보안적합성 vs ISMS-P
> AI 하드웨어 비교 분석
> Proxmox 재부팅 로그 분석
> Proxmox SSH 비밀번호 없이 접속
> Proxmox VE 9.2 업데이트
> Proactive 정의 및 예시

Filtering notes:
- Recent titles rotated toward module-format debugging, Ceph/Proxmox operations, Claude plugins, CI Docker, security compliance, and AI hardware comparison.
- This reinforces the private-infra / agent-tooling lane rather than a new concept.

## 6) Claude — recent chat surface
Page title:
- `New chat - Claude`

Visible text:
> 최근 항목
> 엔지니어 커리어 최대치 현실적 평가
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
> 버튼 지분 받는 일반적인 규모
> Virton과 AI agent의 인프라 자동화 시너지
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> MBTI 64유형이란
> K-pop 엔터테인먼트와 기술 사업 접목 기회
> 토큰 가격 상승의 구조적 필연성
> 어른용 장난감 네이버스토어 판매
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기
> M365 Planner와 GitHub Project 연동

Filtering notes:
- Claude recents show a stronger private-cloud / AIOps / k3s / Virton-infra cluster than the 2026-05-27 baseline.
- Still routed `raw_only` because this is a reinforcement of the established CK infrastructure/operator map, not a new durable branch.

## Honcho triage
- `GitHub Stars`: `raw_only` — unchanged visible starred repo set.
- `Threads`: `raw_only` — fresh rows around Anthropic Korea, AgentOps, and cloud/on-demand semantics, but still inside the existing AI-agent / infrastructure / operator lane.
- `YouTube`: `raw_only` — subscriptions added fresh MCP/OpenClaw/LangSmith/AI-trading examples; Watch Later and Likes repeated the agent/harness baseline.
- `Google`: `raw_only` — visible searches around `draw io mcp`, `DeepX M1`, and `grok cursor` reinforce tooling/hardware interest.
- `ChatGPT`: `raw_only` — recents reinforce Ceph/Proxmox/security/Claude-plugin work.
- `Claude`: `raw_only` — recents reinforce private-cloud/AIOps/k3s/Virton-infra work.

## Why this raw exists
This file preserves the browser-visible evidence for later Honcho triage and possible wiki promotion. The current pass contains fresh examples but no durable new branch, so no concept page or index update was made.
