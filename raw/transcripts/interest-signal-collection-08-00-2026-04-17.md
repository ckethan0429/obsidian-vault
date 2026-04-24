# Raw Transcript — Interest Signal Collection (08:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-17
Run time: 08:00 KST (captured around 08:02–08:12 KST)
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub)

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT home + conversation pages, Claude conversation page, Discord login page
- 브라우저는 라이브 Chrome/CDP 세션에 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list` 기반)
- Threads의 웹 UI에서는 직접적인 likes 탭이 보이지 않아 `activity` + `reposts` 를 상호작용 근거로 사용함
- Discord 웹 세션은 로그인 페이지로 리다이렉트되어 채널 직접 진입/전송이 불가했음

## 1) YouTube subscriptions — copied text
Page title:
- `(11) 구독 - YouTube`

Relevant non-sports / non-entertainment visible feed items (verbatim excerpts):

```text
5분 전
2:05:22
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
freeCodeCamp.org
조회수 721회
```

```text
1시간 전
14:45
Build AI Voice Agents with Gemini 3.1 Flash TTS
Julian Goldie SEO
조회수 175회
```

```text
3시간 전
7:43
NEW Gemini CLI Subagents Update (FREE!)
Julian Goldie SEO
조회수 849회
```

```text
6시간 전
10:03
MCP Had a Huge Problem in Production… Google Just Fixed It
ByteMonk
조회수 3.6천회
```

```text
7시간 전
8:28
NEW Google Gemini Mac App is Insane (FREE!)
Julian Goldie SEO
조회수 1천회
```

```text
7시간 전
1:38:40
[브레인크루 X 테디노트] #LangGraph 빌더를 위한 올인원 프론트엔드, langgraph-chat-ui 🔥
테디노트 TeddyNote
조회수 798회
```

```text
스트리밍 시간: 20시간 전
9:12
PaperClip + Hermes Agent + Gemma 4 is INSANE!
Julian Goldie SEO
조회수 1.6천회
```

Additional visible lines from the same page (mixed/noisy viewport kept raw):

```text
19:30
"모르면 다 망할거예요" AI시대에 무조건 주목받을 진짜 브랜드 특징 3가지 (충격적 미래 예측)
큰손 노희영
조회수 3천회

30:31
쇼핑몰 → 소비자, AI커머스 시대 쇼핑주도권이 바뀐다 (허진호 박사)
티타임즈TV
조회수 253회

53:22
The Routing Loop - Ask Me Anything with Jamie and Matt
AWS Events
조회수 166회
```

## 2) X likes — copied text
Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible text:

```text
ckchain
90 Likes
@ChangkyunAhn
Your likes are private. Only you can see them.
ckchain’s liked posts

hoeem
@hooeem
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...

lucas
@lucas_flatwhite
Mar 30
"Claude Code 숨겨진 15가지 파워 기능"
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
I wanted to share a bunch of my favorite hidden and under-utilized features in Claude Code. I'll focus on the ones I use the most.

Moe
@katibmoe
Mar 27
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.

Avi Chawla
@_avichawla
Mar 29
Microsoft did it again!
This is exactly what Microsoft's Agent Lightning solves.
It's an open-source framework that trains ANY AI

Shann³
@shannholmberg
Mar 30
how to set up autoresearch with claude code
it's a pattern that lets AI agents run experiments and improve anything you can measure
```

## 3) X reposts/profile timeline — copied text
Page URL:
- `https://x.com/ChangkyunAhn`

Visible text:

```text
ckchain
84 posts
@ChangkyunAhn

You reposted
hoeem
Apr 10
I want to extend my Claude sessions (full guide).

You reposted
lucas
Mar 30
"Claude Code 숨겨진 15가지 파워 기능"
I wanted to share a bunch of my favorite hidden and under-utilized features in Claude Code.

You reposted
Moe
Mar 27
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.

You reposted
Avi Chawla
Mar 29
Microsoft did it again!
This is exactly what Microsoft's Agent Lightning solves.
```

## 4) Threads activity — copied text
Page title:
- `활동 • Threads`

Visible text:

```text
활동
slamslam__
3일
넵 감사합니다 추천모델도 있나요? 요새 핫한 gemma 4?
H200 몇대인데, 더 큰거로 가보시죠!
minimax m2.5 bf16?

slamslam__
3일
H200 몇개 테스트할 기회가 생겼는데 간단한 가이드 주실수있나요?
vllm으로 모델 돌려보시죠

Terminus는 클코나 코덱스 스크롤이 안되어서 지난 대화는 읽기가 좀힘들지않나요
네 맞습니다. 그게 단점이에요. 그런데 밖에서 접속이 가능한 게 어디냐 하고 만족하고 있습니다. 아니면 필요한 건 문서화 하라고 해서 그걸 보거나 합니다.

아비트라지, 즉 재정거래는 온라인 말고 오프라인에서 그 기회가 더 있다. 온라인은 일반인 초보자가 기회를 잡기는 거의 불가능..
오프라인이라 함은 예를 들어 당근 거래, 크림 운동화 거래, 달러 환치기정도라 할 수 있다… 생각보다 정보의 불균형이 강력함.

인프라 설계할 때 TPS 계산해본 적 있어?
그냥 감으로 서버 몇 대 올리고
감당 안 되면 추가하고
이런 식으로 했던 거 나만 아니지?

Llm이 정적함수 아니니까 바깥에 하네스 붙여서 어떻게든 일 되게 만드는 게 핵심인데
상태관리, 검증, 권한, 도구 연결, 재시도 같은 운영 레이어를 따로 다루기 시작한 거고.
```

## 5) Threads reposts — copied text
Page URL:
- `https://www.threads.com/@ethan13917/reposts`

Visible text:

```text
softdaddy_o
2일
주식 데이터를 파이썬으로 가져오고 싶으면 yfinance부터 시작해. `pip install yfinance` 한 줄이면 끝이야. GitHub 스타 22.9K, 어제 v1.2.2가 나왔어.
Yahoo Finance API를 감싸서 개별 종목, 과거 시세, 재무제표, 옵션 데이터까지 가져올 수 있어. 실시간 WebSocket 스트리밍도 지원해.

dayum_gud
Herme의 회고
5일
👇아래의 내용은 제가 키우는 hermes agent가 작성한 내용임을 미리 밝힙니다.
기록은 많은데, 다시 못 꺼내 쓴다.
이건 정보 부족 문제가 아니다.
정보가 너무 많아서 생긴 문제다.
그래서 나는 "저장"을 멈추고
"운영"을 시작했다.
Hermes agent와 함께.

AI Threads
6일
4월 11일 기준 AI 코딩 최고 셋업은
에르메스(Hermes) + 코덱스 + OmX인듯...
tailscale + ssh + tmux 셋업이면
안드로이드에서는 Termius로
회사 윈도우컴에서는 순정 윈도우 터미널로 ssh mac 치면 바로 접속
그냥 쉬지않고 코딩...

choi.openai
3일
Claude Code 정말 잘쓰고 계신가요?
최근 깃허브에서 3만 2천 개 이상의 스타를 받으며 트렌딩 1위에 오른 'claude-code-best-practice' 프로젝트가 큰 주목을 받고 있는데요.
무거운 조사를 서브 에이전트에게 맡기는 분업법 등 실무에 바로 적용할 내용도 가득합니다.

vibe.tip
2026-04-04
[Github] oh-my-codex
최근 Claude Code 토큰 제한이 빡빡해지면서 Codex CLI를 찾는 사람이 늘고 있다.
최근 가장 빠르게 100k⭐️ claw-code 를 만드는데 사용된 @bellman.pub 의 oh-my-codex 의 사용방법을 알아보자.
```

## 6) Threads profile/posts — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible text:

```text
ethan13917
AI Threads
6일
AI에 대처하는 대한민국 국민의 자세
1. 최신 AI 기술을 알려주는 자
2. AI 모델을 잘 쓸 수있게 확장 툴을 개발하는 자
3. 실제로 많이 쓰고 생산성을 높이는 자
4. 관심은 있지만 너무 방대해서 FOMO가 오는 자
5. chatgpt 채팅 정도만 쓰고 관심 1도 없는 자

ethan13917
6일
나 3번,4번 같은데 5번들이랑 같이 일을 하려고 하니 동기화가 잘 안된다..
서로 다른 세상에서 다른 얘기하는 거 같아..

ethan13917
2026-04-04
아비트라지, 즉 재정거래는 온라인 말고 오프라인에서 그 기회가 더 있다. 온라인은 일반인 초보자가 기회를 잡기는 거의 불가능..
오프라인이라 함은 예를 들어 당근 거래, 크림 운동화 거래, 달러 환치기정도라 할 수 있다… 생각보다 정보의 불균형이 강력함.

ethan13917
2026-04-01
엉뚱한 질문을 계속해야 새로운 아이디어가 나옴.
초중고 특히 중고에 다닐때 주입식으로 넣는거 사고력 확장에 도움 1도 안됨.
학원 하나 끊고 챗gpt에 하루 5개 질문+ 꼬리질문 3개하는게 오히려 나을수도 있어
```

## 7) GitHub stars — copied text
Page title:
- `Your stars`

Visible text:

```text
Your Stars
6
STARRED REPOSITORIES
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect

outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.

kipeum86 / legal-agent-orchestrator
An AI law firm running on Claude Code. Eight specialist lawyer agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate like a real firm to produce legal opinions with full audit trails.

Yeachan-Heo / oh-my-codex
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.

hyungyunlim / obsidian-social-archiver-releases
Release repository for Social Archiver - Archive social media posts from 8 platforms into Obsidian

RichardAtCT / claude-code-telegram
A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.
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

검색
알림 2개
포함된 주제:
LG전자
클로드
오전 8:48
```

## 9) ChatGPT home / recent titles — copied text
Page title:
- `ChatGPT`

Recent visible titles:

```text
Power usage analysis tool
사막의 수박 비유
BOJ 의미 설명
관심사 정리 위키 작성
NVIDIA GPU 모델 확인
Discord Target Normalization
하네스 엔지니어링 확장
OpenClaw 페어링 문제
신생아 배불림 원인
OpenClaw 타임아웃 문제
AI 인프라 구축 필수 요소
Claude Code 원격 제어
AI와 협업 동기화
```

## 10) ChatGPT conversation — `AI 인프라 구축 필수 요소`
Visible assistant excerpt:

```text
지금 보여준 수준만 놓고 보면, 한국 시장에서는 대략 중상급 인프라 엔지니어 ~ AI 인프라/MLOps 엔지니어 초중상급 포지션으로 읽힙니다.
단순 리눅스 운영이 아니라 GPU passthrough, CUDA toolkit, 샘플 빌드, 검증 문서화까지 가고 있어서, “일반 인프라 운영자”보다는 위 구간입니다.
다만 NCCL, 멀티 GPU, Kubernetes/서빙, 운영 자동화까지 실전 사례가 더 붙으면 몸값이 한 단계 더 올라갑니다.

1) 지금 수준만 포트폴리오로 잘 포장한 경우
대략 연 7천만~1.1억 원 구간이 가장 그럴듯합니다.

2) AI 인프라를 실무형으로 더 증명한 경우
2x H200 passthrough 완료
P2P / NCCL 결과 확보
vLLM 또는 PyTorch 멀티 GPU 실험
문서화 + 재현 자동화
K8s/GPU Operator/모니터링까지 연결

중요한 건, 당신 역량은 “인프라 엔지니어”보다 아래 제목으로 내면 손해입니다.
AI Infrastructure Engineer
GPU Platform Engineer
MLOps / AI Platform Engineer
AI Runtime / Infra Engineer
```

## 11) ChatGPT conversation — `하네스 엔지니어링 확장`
Visible assistant excerpt:

```text
좋은 문제제기입니다.
2번 관점에서 더 밀어붙이면, 하네스 엔지니어링은 더 이상 “에이전트 프롬프트 설계”가 아니라 에이전트 런타임/운영체제 설계 문제로 커집니다.
실제로 최근 OpenAI는 하네스를 “환경 설계, 의도 명시, 피드백 루프 구축”으로 설명했고, Anthropic은 장기 실행 에이전트에서 구조화된 handoff, planner/generator/evaluator 분리, 병렬 에이전트 팀, eval harness를 핵심으로 다뤘습니다.

그러니까 2번을 확장하면, 이건 그냥 “트리 탐색 좀 넣자” 수준이 아닙니다.
알고리즘 + 분산시스템 + 운영체제 + 컴파일러 + 데이터베이스 + 검증공학이 한데 섞인 문제입니다.

여기서 하네스는 “LLM 호출기”가 아니라 search policy가 됩니다.
트리 최적 순회, best-first, branch-and-bound, speculative execution, anytime algorithm 같은 개념이 들어와야 합니다.

그래서 하네스는 앞으로
task graph 생성
dependency resolution
critical path 단축
readiness-based scheduling
failed node 재실행
subgraph rollback
같은 문제를 풀게 됩니다.
```

## 12) ChatGPT conversation — `H200 추론용 오픈모델 추천`
Visible assistant excerpt:

```text
좋아요. 이 문장은 그냥 풀면 “모델을 하나 크게 올려서 다 해결하려 하지 말고, 역할별로 나눠서 배치하라”는 뜻입니다.

한 줄 요약
메인 추론 모델 1개 + 라우팅 모델 1개 + 임베딩 모델 1개 + 멀티모달/OCR 모델 1개로 분리하라는 말입니다.

지금은 Gemma 4 31B 하나만 먼저 성공
그 다음에 정말 필요하면
코드 전용 모델 추가
라우팅 모델 추가
임베딩 모델 추가
순으로 가는 게 맞습니다.

즉, 이 말은 “지금 단계에서는 모델 욕심 줄여라”에 가깝습니다.
```

## 13) Claude conversation — `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델`
Visible assistant excerpt:

```text
지금까지 CK와 이야기한 AI Infra Distribution + 오픈소스 전략을 핵심만 정리해 드리겠습니다.

CK가 구상한 제품은
AI Infrastructure Distribution
즉
OS
+ GPU driver
+ AI runtime
+ RAG stack
+ 운영 도구
를 한 번에 설치되는 AI 서버 플랫폼입니다.

목표
GPU 서버 → 10분 안에 AI 서버

AI version of Linux distribution
같은 포지션입니다.

Open-core 전략이 가장 현실적입니다.

Tier 1 — Container
docker run ai-stack

Tier 2 — Installer
curl install-ai-stack.sh
자동
GPU detect
CUDA
AI runtime
RAG

Tier 3 — AI OS
AI distribution OS

Enterprise Add-on
multi node cluster
GPU scheduler
RBAC
SSO
HA
backup
monitoring
```

## 14) Delivery check — Discord
Page title:
- `Discord`

Visible text:

```text
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

## Filtering / change notes
- 이번 런에서 YouTube 쪽 신규 강신호는 이전 raw들에 없던 `System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra`, `Build AI Voice Agents with Gemini 3.1 Flash TTS`, `NEW Gemini CLI Subagents Update (FREE!)`, `MCP Had a Huge Problem in Production… Google Just Fixed It`, `NEW Google Gemini Mac App is Insane (FREE!)`, `#LangGraph 빌더를 위한 올인원 프론트엔드`, `PaperClip + Hermes Agent + Gemma 4 is INSANE!` 쪽으로 보임
- X likes/reposts, Threads reposts/activity의 큰 축은 이전 런들과 거의 동일하게 Claude Code / Hermes / OmX / autoresearch / H200 / vLLM / 하네스 레이어에 수렴함
- GitHub stars는 여전히 6개로 보였고, 새로 추가된 저장소는 이 뷰에서 확인되지 않음
- Google 검색 기록의 핵심 질의(`anthropic effective harness for long running ag...`, `anthropic managed agent`, `claude dangerously skip permissions`, `claude code discord`)는 계속 동일 축을 강화함
- 스포츠/엔터/일반 시사 노이즈(축구 하이라이트, MLB, 예능/음악, 운동 루틴 등)는 raw에는 일부 남겼지만 요약에서는 제외함

## Why this raw exists
이 파일은 2026-04-17 08:00 수집 런의 원문 근거 저장본입니다. 요약/큐레이션은 별도 note에서 처리합니다.
