# Raw Transcript — Interest Signal Collection (19:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-19
Run time: 19:00 KST (captured around 19:01–19:06 KST)
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT loaded conversations, Claude loaded conversations, Discord target state
- 브라우저 도구 daemon은 이번 런에서 기동 실패하여, 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, CDP `Runtime.evaluate` 기반)
- Threads 웹 UI에서는 direct likes 전용 탭을 이번 런에서도 확인하지 못해 `activity + reposts + profile`을 상호작용 근거로 사용함
- Discord 채널 대상 탭은 이번에도 로그인 화면으로 열려 있어 브라우저 내부 직접 전송은 불가했음
- 최근 raw들과 대조하면 이번 19:00 런은 **신규보다는 강화 신호가 많고**, 상대적으로 fresh한 것은 Threads repost의 `덕테이프 테스트 노션공유` 와 YouTube에서 새로 보인 몇 개의 비스포츠 영상 정도였음

## 1) YouTube subscriptions — copied text
Page title:
- `구독 - YouTube`

Visible text (verbatim excerpt):

```text
2:05:22
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
freeCodeCamp.org
조회수 721회
•
5분 전
```

```text
12:52
불편한 팀원, 합리적으로 달래서 일 시키는 방법(+갈등)ㅣ한기용의 나침반
EO Korea
조회수 272회
•
26분 전
```

```text
16:25
우주산업 황금기, 뉴스페이스에 투자하자! SOL 미국우주항공TOP10 ETF가 나왔습니다 (SOL 미국우주항공TOP10 ETF)
전인구경제연구소
조회수 166회
•
6분 전
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
[2026 K리그1] 2R 울산 vs 서울 풀 하이라이트
크로스핏 코치들의 하이록스 릴레이 결과는?
"토트넘은 축구의 기본, 패스를 못한다"
국내 최장신 보디빌더의 어깨 운동법
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
25
220
1.6K
1.4M
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
been_yg
17시간
그정도에요?
처음 썼을 땐 어려운 벤치마크파이프라인도 잘 해결하고 가격도 싼 편인데 프론트엔드쪽은 많이 아쉬운거같아요!
```

```text
slamslam__
6일
넵 감사합니다 추천모델도 있나요? 요새 핫한 gemma 4?
H200 몇대인데, 더 큰거로 가보시죠!
minimax m2.5 bf16?
```

```text
slamslam__
6일
H200 몇개 테스트할 기회가 생겼는데 간단한 가이드 주실수있나요?
vllm으로 모델 돌려보시죠
```

```text
hadazzang
님 외 1명
1주
Terminus는 클코나 코덱스 스크롤이 안되어서 지난 대화는 읽기가 좀힘들지않나요
```

Observed mixed/non-target items kept raw but not promoted:

```text
아비트라지, 즉 재정거래는 온라인 말고 오프라인에서 그 기회가 더 있다.
여기서 양띠 친구들 다보네 하이하이💜
이거 뭐 동네 무서워서 살겠나
```

## 5) Threads reposts — copied text
Page URL:
- `https://www.threads.com/@ethan13917/reposts`

Visible excerpts:

```text
specal1849
AI Threads
3일
[덕테이프 테스트 노션공유]
덱테이프 테스트한거 대충 60건정도 프롬프트 공유입니다.
지인이 오늘 아침에 출근하자마자 GPT 덕테이프글 복사하고 있다는
슬픈 신고를 받았습니다..
지인왈 슬렉에 제글올라왔고 팀장님이 그거보고
회사에서 프롬프트 정리해서 올리라는 소리듣고
맨탈이 나가버렸습니다 이러네요
걍 노션달라그래요 정리된 데이터 달라하면 되잔아...
```

```text
softdaddy_o
5일
주식 데이터를 파이썬으로 가져오고 싶으면 yfinance부터 시작해. `pip install yfinance` 한 줄이면 끝이야. GitHub 스타 22.9K, 어제 v1.2.2가 나왔어.
Yahoo Finance API를 감싸서 개별 종목, 과거 시세, 재무제표, 옵션 데이터까지 가져올 수 있어. 실시간 WebSocket 스트리밍도 지원해.
```

```text
dayum_gud
Herme의 회고
2026-04-11
👇아래의 내용은 제가 키우는 hermes agent가 작성한 내용임을 미리 밝힙니다.
기록은 많은데, 다시 못 꺼내 쓴다.
이건 정보 부족 문제가 아니다.
정보가 너무 많아서 생긴 문제다.
그래서 나는 "저장"을 멈추고
"운영"을 시작했다.
Hermes agent와 함께. 🧠
```

## 6) Threads profile — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible excerpts:

```text
ethan13917
AI Threads
2026-04-10
AI에 대처하는 대한민국 국민의 자세
1. 최신 AI 기술을 알려주는 자
2. AI 모델을 잘 쓸 수있게 확장 툴을 개발하는 자
3. 실제로 많이 쓰고 생산성을 높이는 자
4. 관심은 있지만 너무 방대해서 FOMO가 오는 자
.
.
.
5. chatgpt 채팅 정도만 쓰고 관심 1도 없는 자
```

```text
ethan13917
2026-04-10
나 3번,4번 같은데 5번들이랑 같이 일을 하려고 하니 동기화가 잘 안된다..
서로 다른 세상에서 다른 얘기하는 거 같아..
```

## 7) GitHub stars — copied text
Page title:
- `Your stars`

Visible text:

```text
Your Stars
6
All stars
6
All repositories
0
Your repositories
6
Others’ repositories
```

```text
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
HTML  44,590  4,268
```

```text
outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
TypeScript  1,427  167
```

```text
kipeum86 / legal-agent-orchestrator
An AI law firm running on Claude Code. Eight specialist lawyer agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate like a real firm to produce legal opinions with full audit trails.
Python  21  4
```

```text
Yeachan-Heo / oh-my-codex
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.
TypeScript  23,004  1,985
```

```text
hyungyunlim / obsidian-social-archiver-releases
Release repository for Social Archiver - Archive social media posts from 8 platforms into Obsidian
TypeScript  101  5
```

```text
RichardAtCT / claude-code-telegram
A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.
Python  2,437  338
```

## 8) Google search history — copied text
Page title:
- `Google - 내 활동`

Visible text:

```text
오늘
검색
anthropic effective harness for long running ag... 을(를) 검색했습니다.
오후 5:14
검색
anthropic managed agent 을(를) 검색했습니다.
오후 5:11
검색
claude dangerously skip permissions 을(를) 검색했습니다.
오후 12:17
검색
claude code discord 을(를) 검색했습니다.
오전 11:21
```

```text
검색
honcho 을(를) 검색했습니다.
오후 4:24
검색
comet cdp 을(를) 검색했습니다.
오후 4:18
```

```text
검색
hermes agent 을(를) 검색했습니다.
4월 13일 오후 4:56
```

## 9) ChatGPT answers / recent conversations — copied text
### 9.1) `하네스 엔지니어링 확장`
- URL: `https://chatgpt.com/c/69dc74b6-1900-83a7-953e-24782b186b6a`

```text
좋은 문제제기입니다.

2번 관점에서 더 밀어붙이면, 하네스 엔지니어링은 더 이상 “에이전트 프롬프트 설계”가 아니라 에이전트 런타임/운영체제 설계 문제로 커집니다.
...
알고리즘 + 분산시스템 + 운영체제 + 컴파일러 + 데이터베이스 + 검증공학이 한데 섞인 문제입니다.
...
하네스 엔지니어링의 다음 전장은 프롬프트가 아니라 런타임이다.
탐색, 스케줄링, 메모리, 검증, 장애복구, 비용제어를 통합한 ‘에이전트 운영체제’가 진짜 승부처다.
```

### 9.2) `H200 추론용 오픈모델 추천`
- URL: `https://chatgpt.com/c/69d4b5d8-2254-83a3-9037-2accadc7a44a`

```text
좋아요. 이 문장은 그냥 풀면 **“모델을 하나 크게 올려서 다 해결하려 하지 말고, 역할별로 나눠서 배치하라”**는 뜻입니다.
...
한 줄 요약
메인 추론 모델 1개 + 라우팅 모델 1개 + 임베딩 모델 1개 + 멀티모달/OCR 모델 1개로 분리하라는 말입니다.
...
지금은 Gemma 4 31B 하나로 OpenClaw를 먼저 완성하고,
그 다음 임베딩 모델을 붙이는 순서입니다.
```

### 9.3) `AI 인프라 구축 필수 요소`
- URL: `https://chatgpt.com/c/69d87435-cf20-83aa-817a-46310f736b8f`

```text
지금 보여준 수준만 놓고 보면, 한국 시장에서는 대략 중상급 인프라 엔지니어 ~ AI 인프라/MLOps 엔지니어 초중상급 포지션으로 읽힙니다.
...
중요한 건, 당신 역량은 “인프라 엔지니어”보다 아래 제목으로 내면 손해입니다.
AI Infrastructure Engineer
GPU Platform Engineer
MLOps / AI Platform Engineer
AI Runtime / Infra Engineer
```

Observed recent ChatGPT titles in sidebar/body (verbatim):

```text
AI 인프라 구축 필수 요소
공유 메모리 에이전트
ACP Editor Integration
Power usage analysis tool
Discord Target Normalization
NVIDIA GPU 모델 확인
```

## 10) Claude answers / recent conversations — copied text
### 10.1) `프로젝트 관리를 위한 AI 도구 추천 - Claude`
- URL: `https://claude.ai/chat/bff733aa-da43-408d-8fc6-dfb15f107e7d`

```text
PRD, 와이어프레임, MVP를 계속 만들고 계시니까 실제로 현업에서 많이 쓰이는 툴들을 용도별로 정리해드릴게요.

1. AI 네이티브 PM 툴 (요즘 뜨는 카테고리)
Linear + AI
ChatPRD
Dovetail AI

2. 와이어프레임/디자인 쪽
v0 by Vercel
Figma Make
Uizard / Visily

3. 문서/지식 허브
Notion AI + Notion Projects
Coda AI
```

```text
Paperclip이 완전 흥미롭네요.
Node.js 서버 + React UI로 AI 에이전트 팀을 오케스트레이션해서 비즈니스를 운영하는 "zero-human company" 컨셉이네요.
...
LangGraph
CrewAI
AutoGen
Mastra
Task Master AI
BMad-Method
Dify
```

```text
Hermes Agent를 정확히 파악하고 답을 드릴게요.
...
Hermes는 MCP를 지원하니까, 디스코드 한 줄로 이 도구들을 다 쓰게 됩니다.
GitHub MCP
Notion MCP / Obsidian MCP
Playwright MCP / Browserbase MCP
Slack MCP
Linear MCP / Jira MCP
```

### 10.2) `온프레 PVE 서버 자동 배포 구성 - Claude`
- URL: `https://claude.ai/chat/6a82f6be-82c5-4ce9-83df-559e8888d228`

```text
가능하지. GitHub push → 온프레 PVE 서버 자동 배포, 충분히 구현할 수 있어.
핵심은 GitHub Actions self-hosted runner 또는 webhook 기반 pull 배포야.
```

```text
방법 3: Coolify / Dokku (Vercel-like 경험)
진짜 Vercel처럼 쓰고 싶으면 Coolify나 Dokku를 PVE LXC/VM에 올려.
GitHub 연결하면 push 시 자동 빌드/배포 + SSL + 도메인까지 알아서 해줌.
```

```text
좋은 페인포인트 짚었어. 메신저 의존 없이 음성 → 텍스트 → 서버 클립보드 직통 파이프라인.
심플하고 실용적이야.
```

### 10.3) `소프트웨어 개발 기획 통합 관리 도구 - Claude`
- URL: `https://claude.ai/chat/52edded8-725a-45f3-a76b-12dfb1b7db17`

```text
PRD + 기능명세서 + 유저플로우 통합 관리 툴
1. Notion — 소규모팀 최적, CK한테 가장 맞을 것
2. Confluence + Jira — Atlassian 생태계
3. Linear — 개발팀 실행 관리는 최고
4. Fibery — 덜 알려졌지만 진짜 통합형
5. Productboard — Product Discovery 특화
```

```text
Virton처럼 3인 개발팀 + CTO 직접 기획 구조면:
PRD + 기능명세서	Notion (AI 초안 생성 활용)
유저플로우 다이어그램	FigJam 또는 Whimsical (무료)
이슈/스프린트 실행	Linear
세 곳 연결	Notion ↔ Linear 인테그레이션
```

## 11) Discord target state — copied text
Target URL:
- `https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1490692905604481026%252F1490692905604481026`

Visible text:

```text
돌아오신 것을 환영해요!
다시 만나다니 너무 반가워요!
이메일 또는 전화번호*
비밀번호*
로그인
계정이 필요한가요?
가입하기
QR 코드로 로그인
```

## Filtering / change notes
- 이번 19:00 런은 **신규성보다는 기존 축 강화**가 훨씬 큼. X likes/reposts, GitHub stars, Google 검색 기록, ChatGPT/Claude 주요 대화는 최근 raw들에서 반복적으로 보이던 Claude Code / managed agents / harness / H200 / PM tooling / PVE 자동배포 축을 재강화함
- 상대적으로 fresh하게 보인 것은 Threads repost의 `덕테이프 테스트 노션공유` 와 YouTube의 `불편한 팀원, 합리적으로 달래서 일 시키는 방법(+갈등)`, `우주산업 황금기...`, 그리고 다시 보인 `System Design Course ... Production Infra` 정도였음
- Threads direct likes는 이번 런에서도 웹에서 확인되지 않아 `activity + reposts + profile`로 대체함
- GitHub stars는 여전히 6개로 보였고, 이 뷰에서 새로 추가된 저장소는 확인되지 않음
- Discord 채널 `1490692905604481026` 은 라이브 Chrome/CDP 세션에서 로그인 페이지로 열려 직접 게시하지 못함
- 스포츠/운동/엔터/일반 잡음(축구 하이라이트, 크로스핏, 보디빌딩 등)은 raw에는 일부 남겼지만 요약에서는 제외 예정

## Why this raw exists
This file is the evidence store for later summary/curation.
