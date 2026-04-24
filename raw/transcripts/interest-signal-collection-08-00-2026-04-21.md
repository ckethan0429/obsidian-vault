# Raw Transcript — Interest Signal Collection (08:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-21
Run time: 08:00 KST (captured around 10:44–10:51 KST)
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT recent/home + selected conversations, Claude recent/home + selected conversations, Discord target state
- 이번 런은 브라우저 도구 대신 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, CDP `Runtime.evaluate` 기반)
- 대부분의 페이지는 fresh CDP target으로 읽었고, Claude 홈 fresh target은 `https://claude.ai/api/challenge_redirect?...` 로 튀어 기존에 열려 있던 hydrated `https://claude.ai/new` 탭과 direct chat URL로 보완함
- Threads 웹 UI에서는 이번 런도 direct likes 전용 탭을 확인하지 못해 `activity + reposts + profile`을 상호작용 근거로 사용함
- `2026-04-20 19:00` / `2026-04-20 08:00` raw와 대조하면, 이번 아침 런의 상대적 신규 포인트는 **GitHub stars가 6개 → 10개로 늘어나며 `memory-bank`, `oh-my-agent`, `web-agent`, `pyturboquant` 가 추가로 보인 점**, **Google 검색 기록에 `threads api` / Meta docs / `ngrok` 계열이 밤사이에 찍힌 점**, **YouTube에 `How Anthropic uses Claude in Product Engineering`, `Running LLMs on your iPhone: ... Gemma 4 with MLX`, `Codex 2.0`, `Hermes Agent Workspace + Claude Code Local!` 같은 운영형 신호가 전면화된 점**, **X likes에 `Agent Lightning` / `autoresearch with claude code` 가 보인 점** 쪽이었음
- Discord 채널 대상 탭은 이번에도 `discord.com/login` 으로 열려 브라우저 내부 직접 전송은 불가했음

## 1) YouTube subscriptions — copied text
Page title:
- `(3) 구독 - YouTube`

Visible AI/infra/tooling feed items (verbatim):

```text
3시간 전
2:58
How Anthropic uses Claude in Product Engineering
Claude
조회수 1.2만회
```

```text
3시간 전
10:51
Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX — Adrien Grondin, Locally AI
AI Engineer
조회수 688회
```

```text
48분 전
7:13
Codex 2.0: Automate ANYTHING!
Julian Goldie SEO
조회수 237회
```

```text
2시간 전
57:33
Hermes Agent Workspace + Claude Code Local!
Julian Goldie SEO
조회수 1.1천회
```

```text
스트리밍 시간: 14시간 전
6:39
Claude Code Local DESTROYS Claude Code?
Julian Goldie SEO
조회수 216회
```

```text
10분 전
10:49
오픈 모델 최초 돌종벤치 100점. Kimi-K2.6.  엔지니어링 업무능력 평가
토목엔지니어 돌종
조회수 16회
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
🔴 [손경제플러스 LIVE] 무뎌진 전쟁 리스크, 시장은 계속 달릴까?
그가 또 날뛰기 시작했습니다...
4/21(화) 안갯속 미국·이란 2차 협상...
Billion-Dollar Lessons On How To Win In The Trillion-Dollar Sports Business
```

## 2) X likes — copied text
Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible text:

```text
ckchain
@ChangkyunAhn
Likes
Your likes are private. Only you can see them.
ckchain’s liked posts
hoeem
@hooeem
·
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...
```

```text
Moe
@katibmoe
·
Mar 27
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.
RT + comment “One” for access & 1M free API requests/month.
```

```text
Microsoft did it again!
Building with AI agents almost never works on the first try.
A dev has to spend days tweaking prompts, adding examples, hoping it gets better.
This is exactly what Microsoft's Agent Lightning solves.
It's an open-source framework that trains ANY AI
```

```text
Shann³
@shannholmberg
·
Mar 30
how to set up autoresearch with claude code
From
David Ondrej
Quote
Shann³
```

```text
lucas
@lucas_flatwhite
·
Mar 30
"Claude Code 숨겨진 15가지 파워 기능"
Claude Code를 매일 사용하면서도 몰랐던 기능들이 있다면?!!
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
```

## 3) X reposts/profile timeline — copied text
Page URL:
- `https://x.com/ChangkyunAhn`

Visible post excerpts:

```text
You reposted
hoeem
@hooeem
·
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same.
```

```text
You reposted
lucas
@lucas_flatwhite
·
Mar 30
"Claude Code 숨겨진 15가지 파워 기능"
Claude Code를 매일 사용하면서도 몰랐던 기능들이 있다면?!!
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
```

```text
You reposted
Moe
@katibmoe
·
Mar 27
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.
```

## 4) Threads activity — copied text
Page title:
- `활동 • Threads`

Visible text:

```text
news_subs
3시간
2/4 Restartable cattle
좋은 에이전트는 한 번 떠서 오래 버티는 애완동물이 아니다. 죽어도 다시 붙는 소모품이어야 한다. 세션은 외부에 두고, 실행 환경은 교체 가능하게. 그래야 장기 작업이 멈추지 않는다. 운영은 끊김 없이 이어져야 한다.
```

```text
news_subs
3시간
1/4 Brain / Hands / Memory
핵심은 세 가지다. 모델은 머리, 하네스는 손, 세션 로그는 기억. 이 셋을 한 컨테이너에 우겨 넣으면 복구도 어렵고 디버깅은 더 지옥이다. 에이전트가 길게 일할수록 분리가 답이다. 이게 하네스 설계의 출발점이다.
```

```text
net.amond
님 외 5명
2주
Llm이 정적함수 아니니까 바깥에 하네스 붙여서 어떻게든 일 되게 만드는 게 핵심인데, 그걸 두고 엄밀한 피드백은 아니다라고 하는건 그냥 논문 톤으로 실무 깎아내리는 거지. 현장에서는 우아한 정의보다 결과가 먼저임.
```

Observed mixed/non-target items kept raw but not promoted:

```text
군대는 시간낭비일까 아닐까
회원님의 스레드 조회수가 100회가 넘었습니다.
```

## 5) Threads reposts — copied text
Page URL:
- `https://www.threads.com/@ethan13917/reposts`

Visible excerpts:

```text
minorabanggu
AI Threads
2시간
pgvector는 다들 알잖아?
근데 pgAI는 써봤어?
같은 Timescale(지금은 TigerData) 진영인데, 역할이 완전히 달라.
pgvector가 벡터 '저장·검색'이라면, pgAI는 그 위에서 ‘임베딩 자동화 + LLM 호출 + RAG’를 SQL로 끝내게 해줌.
핵심은 나열형 선언:
"이 테이블의 이 컬럼을 임베딩해줘"
→ 이후 INSERT/UPDATE 일어나면 벡터 자동 동기화. 그만.
```

```text
qjc.ai
4일
주말에 에이전트 인프라 하나 복제해봤어요.
구성: Claude Code + Telegram agent
공유 메모리: mem0 + Qdrant + Ollama
소요 시간: 2일
Moshe라는 분이 만든 Hermes 플릿을 축소 재현한 건데요.
정리하면서 배운 것들 공유할게요.
```

```text
jwon.ig
1일
클로드 코드,
토큰 낭비를 줄일 수 있는 레포 10개
1. Caveman Claude
- 말 그대로 Claude가 원시인처럼 말하게 만듭니다
- 정확도 손실 없이 출력 토큰의 75%를 줄입니다
Repo → http://github.com/juliusbrussee/caveman
```

```text
3. Code Review Graph
- Tree-sitter 그래프를 사용해 Claude가 중요한 부분만 읽습니다
- 거대 모노레포에서 믿기지 않는 49배 토큰 감소
Repo → http://github.com/tirth8205/code-review-graph
4. Context Mode
- 컨텍스트 대신 SQLite에 원시 출력을 샌드박스화합니다
- 로그 & GitHub에서 놀라운 98% 컨텍스트 감소
```

## 6) Threads profile/posts — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible text:

```text
ethan13917
8시간
Managed Agents
프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다. LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다.
```

```text
ethan13917
8시간
1/4 Brain / Hands / Memory
핵심은 세 가지다. 모델은 머리, 하네스는 손, 세션 로그는 기억. 이 셋을 한 컨테이너에 우겨 넣으면 복구도 어렵고 디버깅은 더 지옥이다. 에이전트가 길게 일할수록 분리가 답이다. 이게 하네스 설계의 출발점이다.
```

```text
ethan13917
21시간
1/7 Anthropic의 Managed Agents는 그냥 ‘에이전트 기능’이 아니야.
핵심은 session / harness / sandbox / vault를 분리해서, 오래 도는 에이전트를 서비스처럼 굴리게 만드는 런타임 설계라는 거지. 중요한 건 모델이 얼마나 똑똑하냐가 아니라, 이 구조가 안 죽고, 재시작 가능하고, 보안 경계를 지키냐야.
```

## 7) GitHub stars — copied text
Page title:
- `Your stars`

Visible star rows (verbatim excerpt):

```text
Sort: Recently starred
STARRED REPOSITORIES
jung-wan-kim / memory-bank
Starred
TypeScript  62  86
```

```text
first-fluke / oh-my-agent
Starred
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
TypeScript  730  88
```

```text
firecrawl / web-agent
Starred
Open-source web data agent optimized for structured web research
TypeScript  675  81
```

```text
jorgebmann / pyturboquant
Starred
A Python implementation of Google's TurboQuant framework (WIP)
Python  344  36
```

```text
shanraisshan / claude-code-best-practice
Starred
from vibe coding to agentic engineering - practice makes claude perfect
HTML  46,925  4,609
```

```text
outsourc-e / hermes-workspace
Starred
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
TypeScript  1,784  210
```

```text
kipeum86 / legal-agent-orchestrator
Starred
An AI legal workflow running on Claude Code. Eight legal agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate to produce legal opinions with full audit trails.
Python  29  7
```

```text
Yeachan-Heo / oh-my-codex
Starred
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.
```

```text
hyungyunlim / obsidian-social-archiver-releases
Starred
Release repository for Social Archiver - Archive social media posts from 8 platforms into Obsidian
TypeScript  101  5
```

```text
RichardAtCT / claude-code-telegram
Starred
A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.
Python  2,469  344
```

## 8) Google search history — copied text
Page title:
- `Google - 내 활동`

Visible search/activity lines (verbatim):

```text
오늘
검색
양식을 저장할 수 없음 모든 정보가 정확하게 입력되었는지 확인한 후 다시 시도해주세요 을(를) 검색했습니다.
오전 2:09
검색
개발자 FAQ - Meta for Developers 을(를) 방문했습니다.
오전 2:05
검색
dashboard ngrok 을(를) 검색했습니다.
오전 1:59
```

```text
검색
Facebook - 로그인 또는 가입 을(를) 방문했습니다.
오전 12:51
검색
facebook 을(를) 검색했습니다.
오전 12:50
검색
Threads API - 문서 - Meta for Developers 을(를) 방문했습니다.
오전 12:44
검색
threads api 을(를) 검색했습니다.
오전 12:44
```

```text
알림 1개
포함된 주제:
챗GPT
오전 7:48 • 세부정보
```

## 9) ChatGPT answers / recent conversations — copied text
Observed recent ChatGPT titles in sidebar/body (verbatim):

```text
Tmux jump-to-backward 원인
AI 인프라 구축 필수 요소
웹페이지 요약 요청
공유 메모리 에이전트
Codex 플러그인 요약
ACP Editor Integration
Power usage analysis tool
관심사 정리 위키 작성
Discord Target Normalization
하네스 엔지니어링 확장
Claude Code 원격 제어
```

### 9.1) `공유 메모리 에이전트`

```text
TL;DR
이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
```

### 9.2) `Codex 플러그인 요약`

```text
Codex Plugins 요약
1. 개념
플러그인 = Codex 기능 확장용 워크플로우 패키지
구성 요소 3가지:
Skills: 작업 절차/지침 (자동 실행 로직)
Apps: 외부 서비스 연동 (GitHub, Slack, Gmail 등)
MCP Servers: 외부 도구/데이터 접근 인터페이스
👉 즉, “툴 + 실행 방식 + 데이터 접근”을 묶은 재사용 가능한 작업 단위
```

### 9.3) `ACP Editor Integration`

```text
Hermes Agent can run as an ACP (Agent Client Protocol) server
Enables editor-native AI agent behavior instead of CLI/chatbot usage
Communication happens via stdio + JSON-RPC
What editors can display:
Chat messages
Tool execution activity
File diffs
Terminal commands
Approval prompts
Streaming responses (“thinking” chunks)
👉 Positioning: Turns Hermes into a coding agent embedded inside IDEs
```

### 9.4) `AI 인프라 구축 필수 요소`

```text
Ai인프라 스택을 구축하기위해 필요한 사항 정리해줘
...
pve vm paththrough ubuntu 24.04 h200 2개
테스트할거고 결과문서 산출물 만들려고. 이건 내 커리어 확장 + 생산성 확장 용도가 목표야.
테스트 계획서와 결과 템플릿을 만들어줘
```

## 10) Claude answers / recent conversations — copied text
Observed recent Claude titles in sidebar/body (verbatim):

```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
Meta 스레드 API 리다이렉트 URL 설정 오류
AI 연동 가능한 영상편집 툴
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
B2B 솔루션 배포 사이클 전략
소프트웨어 개발 기획 통합 관리 도구
프로젝트 관리를 위한 AI 도구 추천
온프레 PVE 서버 자동 배포 구성
```

### 10.1) `관심 신호에서 패턴 찾기 - Claude`

```text
0/4 나는 내 관심사를 모른다
브라우저 기록, 검색 기록, 좋아요 로그.
다 쌓았는데 정작 “나는 무엇에 관심 있나”를 말 못한다.
데이터가 없어서가 아니다.
패턴을 읽지 않아서다.
LLM이 내 행동 데이터를 읽고, 반복 주제만 추려서 위키로 승격시키는 시스템을 만들고 있다.
...
raw 데이터는 신호가 아니다. 반복이 신호다. 큐레이션은 저장이 아니라 판별이다.
안 남길 걸 자르는 능력이 시스템을 만든다.
```

### 10.2) `M365 Planner와 GitHub Project 연동 - Claude`

```text
직접적인 공식 연동은 없고, 몇 가지 방법으로 구현 가능합니다.
1. Power Automate (가장 현실적)
2. GitHub Actions + Microsoft Graph API
3. Zapier / Make (n8n)
4. GitHub Project → Planner 단방향 webhook
...
현실적으로 GitHub Project v2와 Planner의 양방향 완전 동기화는 어렵고, 단방향(GitHub → Planner) 또는 이벤트 기반 트리거로 구성하는 게 안정적입니다.
```

```text
왜 연동이 깔끔하지 않나
데이터 모델이 서로 다름
GitHub Project v2: Issue/PR 중심, 커스텀 필드 자유도 높음
Planner: Task/Bucket/Plan 구조, M365 생태계에 종속
...
3인 개발팀이면 솔직한 추천
그냥 GitHub Project로 완전히 이전하세요.
Planner를 억지로 연동해서 유지하는 비용이 훨씬 큽니다.
```

## 11) Discord target state — copied text
Target URL:
- `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026`

Visible text:

```text
QR 코드 로그인 준비 완료
돌아오신 것을 환영해요!
다시 만나다니 너무 반가워요!
이메일 또는 전화번호*
비밀번호*
비밀번호를 잊으셨나요?
로그인
계정이 필요한가요?
가입하기
QR 코드로 로그인
Discord 모바일 앱으로 스캔해 바로 로그인하세요.
또는, 패스키로 로그인하세요
```

## Filtering notes
- YouTube에는 정치/시사 라이브, 재테크/주식 잡신호, 스포츠/엔터테인먼트가 같이 섞여 있었고 raw에는 남겼지만 short note에서는 제외함
- Threads activity는 군대 관련 대화와 조회수 알림이 상단에 섞여 있었고, raw에는 남겼지만 short note에서는 제외함
- X likes/profile은 `Claude sessions` / `Claude Code hidden features` / `One` 축이 여전히 유지되며, 이번 런에서는 `Agent Lightning` / `autoresearch with claude code` 가 상대적 신규 신호였음

## Why this raw exists
This file is the evidence store for later summary/curation.