# Raw Transcript — Interest Signal Collection (19:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-18
Run time: 19:00 KST (captured around 19:02–19:12 KST)
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub), logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT recent/home + loaded conversation, Claude loaded conversations, Discord target state
- 브라우저는 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list` 기반)
- Threads의 웹 UI에서는 이번 캡처에서도 likes 전용 탭을 확인하지 못해 `activity` + `reposts` + profile을 상호작용 근거로 사용함
- Discord 웹 세션은 채널 링크로 향하는 탭도 로그인 화면으로 열려 있어 채널 직접 전송이 불가한 상태였음
- 2026-04-18 08:00 run과 비교하면 저녁 기준 신규성은 **Claude/ChatGPT 최근 맥락의 PM·PRD·에이전트 협업 도구 탐색**과 **YouTube 상의 Gemini/MCP/Hermes 운영형 툴 영상 노출** 쪽이 가장 두드러졌고, GitHub stars는 변동이 없었음

## 1) YouTube subscriptions — copied text
Page title:
- `(11) 구독 - YouTube`

Visible AI/infra/tooling feed items (verbatim):

```text
11:23“현존하는 앱의 80%는 사라질겁니다” 오픈클로 창시자가 말한 AI 에이전트의 미래 | 피터 스테인버거(Peter Steinberger)동기부여학과조회수 2.6천회 • 7일 전
```

```text
5:14Why do AI models hallucinate?Claude 및 Anthropic조회수 5.3만회 • 18시간 전
```

```text
11:00I Pay for Fewer AI Tools Now... But These 8 StayedAlex Ziskind조회수 3.1만회 • 1일 전
```

```text
Claude Code 나만 어렵나? 이 3가지만 기억하세요 😤 #Shorts #ClaudeCode #클로드코드 #클로드코드강의 #잔재미코딩조회수 310회
```

```text
바이브코딩의 좋은 사례와 참사 소개. 바이브코딩 해도 될까요? #ai #llm #agent #vibecoding #openai #codex #claude #chatgpt조회수 1.5만회
```

```text
19:30
"모르면 다 망할거예요" AI시대에 무조건 주목받을 진짜 브랜드 특징 3가지 (충격적 미래 예측)
큰손 노희영
조회수 3천회
•
1시간 전
```

```text
30:31
쇼핑몰 → 소비자, AI커머스 시대 쇼핑주도권이 바뀐다 (허진호 박사)
티타임즈TV
조회수 253회
•
1시간 전
```

```text
14:45
Build AI Voice Agents with Gemini 3.1 Flash TTS
Julian Goldie SEO
조회수 175회
•
1시간 전
```

```text
7:43
NEW Gemini CLI Subagents Update (FREE!)
Julian Goldie SEO
조회수 849회
•
3시간 전
```

```text
8:52
Kimi K2.6: China's New AI DESTROYS Claude?
Julian Goldie SEO
조회수 5.1천회
•
5시간 전
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
[2026 K리그1] 2R 울산 vs 서울 풀 하이라이트
크로스핏 코치들의 하이록스 릴레이 결과는?
미국 최초, 성범죄자 '물리적 거세' 합법화
Trump Lashes Out at the Pope AGAIN, Posts an A.I. Jesus Pic AGAIN & Distracts from Iran AGAIN!
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
lucas
@lucas_flatwhite
·
Mar 30
 "Claude Code 숨겨진 15가지 파워 기능"
Claude Code를 매일 사용하면서도 몰랐던 기능들이 있다면?!!
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
Quote
Boris Cherny
@bcherny
·
Mar 30
I wanted to share a bunch of my favorite hidden and under-utilized features in Claude Code. I'll focus on the ones I use the most.
Moe
@katibmoe
·
Mar 27
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.
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
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...
25
220
1.6K
1.4M
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
Quote
Boris Cherny
@bcherny
·
Mar 30
I wanted to share a bunch of my favorite hidden and under-utilized features in Claude Code. I'll focus on the ones I use the most.
4
54
154
16K
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
RT + comment “One” for access & 1M free API requests/month.
741
479
858
160K
```

## 4) Threads activity — copied text
Page title:
- `활동 • Threads`

Visible text:

```text
활동
slamslam__
5일
넵 감사합니다 추천모델도 있나요? 요새 핫한 gemma 4?
H200 몇대인데, 더 큰거로 가보시죠!
minimax m2.5 bf16?
slamslam__
5일
H200 몇개 테스트할 기회가 생겼는데 간단한 가이드 주실수있나요?
vllm으로 모델 돌려보시죠
hadazzang
님 외 1명
1주
Terminus는 클코나 코덱스 스크롤이 안되어서 지난 대화는 읽기가 좀힘들지않나요
네 맞습니다. 그게 단점이에요. 그런데 밖에서 접속이 가능한 게 어디냐 하고 만족하고 있습니다. 아니면 필요한 건 문서화 하라고 해서 그걸 보거나 합니다.
yongho_8867
1주
인프라 설계할 때 TPS 계산해본 적 있어?
그냥 감으로 서버 몇 대 올리고
감당 안 되면 추가하고
이런 식으로 했던 거 나만 아니지?
net.amond
님 외 5명
2주
Llm이 정적함수 아니니까 바깥에 하네스 붙여서 어떻게든 일 되게 만드는 게 핵심인데, 그걸 두고 엄밀한 피드백은 아니다라고 하는건 그냥 논문 톤으로 실무 깎아내리는 거지. 현장에서는 우아한 정의보다 결과가 먼저임.
net.amond
님 외 2명
2주
그 말 길게 했는데 결론은 “새 용어 마음에 안 든다” 이상도 이하도 아님. 현장에선 프롬프트만으로 안 되니까 상태관리, 검증, 권한, 도구 연결, 재시도 같은 운영 레이어를 따로 다루기 시작한 거고.
```

## 5) Threads reposts — copied text
Page URL:
- `https://www.threads.com/@ethan13917/reposts`

Visible text:

```text
softdaddy_o
4일
주식 데이터를 파이썬으로 가져오고 싶으면 yfinance부터 시작해. `pip install yfinance` 한 줄이면 끝이야. GitHub 스타 22.9K, 어제 v1.2.2가 나왔어.
Yahoo Finance API를 감싸서 개별 종목, 과거 시세, 재무제표, 옵션 데이터까지 가져올 수 있어. 실시간 WebSocket 스트리밍도 지원해.
```

```text
dayum_gud
Herme의 회고
6일
👇아래의 내용은 제가 키우는 hermes agent가 작성한 내용임을 미리 밝힙니다.
더불어 세팅용 프롬프트 또한 공유 합니다. 써보세요~
1/10 — 훅: 문제 정의
기록은 많은데, 다시 못 꺼내 쓴다.
이건 정보 부족 문제가 아니다.
정보가 너무 많아서 생긴 문제다.
그래서 나는 "저장"을 멈추고
"운영"을 시작했다.
Hermes agent와 함께. 🧠
hermes-agent.nousresearch.com
```

```text
ddg.kang
AI Threads
1주
4월 11일 기준 AI 코딩 최고 셋업은
에르메스(Hermes) + 코덱스 + OmX인듯...
또한 화장실 AI 코딩을 위해 맥미니를 집에 서버같이 24시간 켜놓고
tailscale + ssh + tmux 셋업이면
안드로이드에서는 Termius로
회사 윈도우컴에서는 순정 윈도우 터미널로 ssh mac 치면 바로 접속
그냥 쉬지않고 코딩... 너무 좋다...😭😭😭
```

```text
choi.openai
5일
Claude Code 정말 잘쓰고 계신가요?
최근 깃허브에서 3만 2천 개 이상의 스타를 받으며 트렌딩 1위에 오른 'claude-code-best-practice' 프로젝트가 큰 주목을 받고 있는데요.
커뮤니티가 실제 환경에서 부딪히며 찾아낸 84개 이상의 실전 팁과 설정 템플릿을 한곳에 모았습니다.
가장 눈여겨볼 부분은 'Everything Claude Code', 'Superpowers' 등 인기 있는 8가지 워크플로우의 비교 자료입니다.
코드 품질을 높일지, 개발 속도를 올릴지 목적에 맞는 명확한 선택 기준을 보여줍니다.
이제는 도구 자체보다 각자 상황에 맞는 워크플로우를 어떻게 조립하느냐가 생산성의 차이를 만듭니다.
```

```text
vibe.tip
AI Threads
2026-04-04
[Github] oh-my-codex
github.com/Yeach…
최근 Claude Code 토큰 제한이 빡빡해지면서 Codex CLI를 찾는 사람이 늘고 있다.
토큰 한도가 Claude보다 훨씬 넉넉하고, 코드 작업 성능도 좋다.
근데 네이티브 Codex만으로는 아쉬운 점이 있다. 워크플로우를 원활하게 하기엔 건드려야할 부분이 너무 많다.
최근 가장 빠르게 100k⭐️ claw-code 를 만드는데 사용된 @bellman.pub 의 oh-my-codex 의 사용방법을 알아보자.
```

## 6) Threads profile/posts — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible text:

```text
프로필
씨케이
ethan13917
비트코인/크립토/it 투자합니다
Running Threads
AI Threads
팔로워 113명
ethan13917
AI Threads
1주
AI에 대처하는 대한민국 국민의 자세
1. 최신 AI 기술을 알려주는 자
2. AI 모델을 잘 쓸 수있게 확장 툴을 개발하는 자
3. 실제로 많이 쓰고 생산성을 높이는 자
4. 관심은 있지만 너무 방대해서 FOMO가 오는 자
5. chatgpt 채팅 정도만 쓰고 관심 1도 없는 자
ethan13917
1주
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

Visible repo list:

```text
shanraisshan / claude-code-best-practice
outsourc-e / hermes-workspace
kipeum86 / legal-agent-orchestrator
Yeachan-Heo / oh-my-codex
hyungyunlim / obsidian-social-archiver-releases
RichardAtCT / claude-code-telegram
```

Page body excerpt:

```text
Your Stars
Browse your starred repositories and topics
6
All stars
6
All repositories
0
Your repositories
6
Others’ repositories
Sort: Recently starred
STARRED REPOSITORIES
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

## 8) Google search history — copied text
Page URL:
- `https://myactivity.google.com/product/search`

Visible text:

```text
검색 기록
검색 기록 작동 원리
웹 및 앱 활동에 저장
자동 삭제(중지됨)
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

## 9) ChatGPT recent titles / home shell — copied text
Page URL:
- `https://chatgpt.com/`

Visible recent list excerpt:

```text
최근
AI 인프라 구축 필수 요소
웹페이지 요약 요청
공유 메모리 에이전트
프롬프트 분석
Codex 플러그인 요약
ACP Editor Integration
Power usage analysis tool
사막의 수박 비유
BOJ 의미 설명
관심사 정리 위키 작성
NVIDIA GPU 모델 확인
Discord Target Normalization
하네스 엔지니어링 확장
OpenClaw 페어링 문제
Claude Code 원격 제어
AI와 협업 동기화
Tailscale SSH 접속 문제
PVE 암호화 및 인증
H200 추론용 오픈모델 추천
```

## 10) ChatGPT loaded answer — copied text
Loaded conversation:
- `하네스 엔지니어링 확장`

Visible user/assistant exchange:

```text
최신 하네스 엔지니어링 방법론은 2가지로 나뉘는 것 같습니다.
1. 산업공학에서 영감을 얻음
2. 컴퓨터공학에서 영감을 얻음
...
2번에 관점에서 더 문제를 확장해줘
```

```text
좋은 문제제기입니다.
2번 관점에서 더 밀어붙이면, 하네스 엔지니어링은 더 이상 “에이전트 프롬프트 설계”가 아니라 에이전트 런타임/운영체제 설계 문제로 커집니다.
...
여기서 하네스는 “LLM 호출기”가 아니라 search policy가 됩니다.
트리 최적 순회, best-first, branch-and-bound, speculative execution, anytime algorithm 같은 개념이 들어와야 합니다.
...
즉 앞으로의 핵심은
“더 똑똑한 답변”보다 “탐색 예산을 어디에 배분하느냐” 입니다.
...
그래서 앞으로는
“긴 프롬프트”가 아니라 “메모리 계층” 이 중요합니다.
...
하네스의 본질은 “좋은 답을 생성하게 하는 장치”가 아니라
“나쁜 답을 통과시키지 않는 장치” 입니다.
...
하네스 엔지니어링의 다음 전장은 프롬프트가 아니라 런타임이다.
탐색, 스케줄링, 메모리, 검증, 장애복구, 비용제어를 통합한 ‘에이전트 운영체제’가 진짜 승부처다.
```

Recent ChatGPT pages where answer text was not fully hydrated in the live tab shell (titles/prompts still visible):

```text
ACP Editor Integration | Hermes Agent
Summarize this content

공유 메모리 에이전트
너는 웹페이지 요약 전문가야. 주어진 웹페이지 Url을 잘보고 한국어로 요약해줘...

NVIDIA GPU 모델 확인
lspci | grep -i nvidia 입력할때 아래결과나오면 어떤 gpu야?
01:00.0 3D controller: NVIDIA Corporation Device 233b (rev a1)
개당 144g인가?
4bit 양자화면 Qwen3.5-397B-A17B 이런거정도가 어때
16빗에 코딩하시면 qwen3-coder-next 같은거
여기서 양자화가 뭐야
Thinking
```

## 11) Claude answers — project / PM tooling — copied text
Loaded conversation:
- `프로젝트 관리를 위한 AI 도구 추천 - Claude`

Visible excerpt:

```text
prd wireframe mvp 이런거 많이 만들고있는데, 전체적인 project managing에 좋은 ai tool이나 ai 서비스 있을까?

PRD, 와이어프레임, MVP를 계속 만들고 계시니까 실제로 현업에서 많이 쓰이는 툴들을 용도별로 정리해드릴게요.

1. AI 네이티브 PM 툴 (요즘 뜨는 카테고리)
Linear + AI [중]
엔지니어링 팀이 많이 쓰는 이슈 트래커인데, Linear AI가 PRD 기반으로 이슈 자동 생성, 우선순위 추천, 중복 감지까지 해줌
CK 같은 3인 개발팀 리딩하는 CTO한테는 Jira보다 훨씬 가벼움

ChatPRD [중]
PRD 작성에 특화된 GPT-4 기반 도구. 아이디어만 던지면 PRD 초안 + user story + success metrics까지 생성

Dovetail AI [고]
유저 인터뷰/리서치 데이터를 AI로 분석 → insight 자동 추출

2. 와이어프레임/디자인 쪽
v0 by Vercel [중]
텍스트 프롬프트 → React 코드 + Tailwind UI 바로 생성.
Figma Make (구 Figma AI) [중]
Uizard / Visily [초]

3. 문서/지식 허브
Notion AI + Notion Projects
Coda AI

4. 올인원 AI PM 에이전트 (2025~2026 신흥)
Devin / Cursor Background Agents
Reforge AI / Productboard Pulse
```

Additional Claude excerpt from same conversation:

```text
Paperclip이 완전 흥미롭네요. Node.js 서버 + React UI로 AI 에이전트 팀을 오케스트레이션해서 비즈니스를 운영하는 "zero-human company" 컨셉이네요.

AI 에이전트 오케스트레이션 오픈소스
LangGraph (by LangChain)
CrewAI
AutoGen (Microsoft)
Mastra

"프로젝트 매니징" 관점의 AI 오픈소스
AgentKit (OpenAI)
Plane (오픈소스 Linear 대체) + AI 플러그인
OpenProject / Taiga
```

## 12) Claude answers — planning / deployment — copied text
Loaded conversation:
- `소프트웨어 개발 기획 통합 관리 도구 - Claude`

Visible excerpt:

```text
소프트웨어 개발전 기획을 도와주는 서비스 있나? prd - 기능명세서- 유저플로우 통합적으로 관리하고 싶은데

PRD + 기능명세서 + 유저플로우 통합 관리 툴
1. Notion — 소규모팀 최적, CK한테 가장 맞을 것
PRD 문서 + DB(기능 목록) + 관계형 링크 한 공간에
유저플로우는 내부에 Figma/Whimsical 임베드로 해결
AI로 초안 자동 생성 가능

2. Confluence + Jira — Atlassian 생태계
PRD 작성 → 텍스트 드래그해서 Jira 이슈 바로 생성
문서↔태스크 traceability 최강
단점: 무겁고 설정 많음, 3인팀에는 오버스펙 가능성

3. Linear — 개발팀 실행 관리는 최고
4. Fibery — 덜 알려졌지만 진짜 통합형
5. Productboard — Product Discovery 특화

Virton처럼 3인 개발팀 + CTO 직접 기획 구조면:
PRD + 기능명세서 → Notion (AI 초안 생성 활용)
유저플로우 다이어그램 → FigJam 또는 Whimsical
이슈/스프린트 실행 → Linear
Notion ↔ Linear 인테그레이션
사실상 Notion + Linear 조합이 2025년 기준 소규모 SaaS팀 표준이에요.
```

Loaded conversation:
- `온프레 PVE 서버 자동 배포 구성 - Claude`

Visible excerpt:

```text
가능하지. GitHub push → 온프레 PVE 서버 자동 배포, 충분히 구현할 수 있어. 핵심은 GitHub Actions self-hosted runner 또는 webhook 기반 pull 배포야.

방법 1: GitHub Actions + Self-Hosted Runner (추천)
PVE 호스트나 LXC/VM 안에 GitHub Actions runner를 설치하면, git push → runner가 빌드/배포를 자동 실행해.

방법 2: Webhook + Pull 방식 (경량)
별도 runner 없이, 경량 webhook 서버가 GitHub webhook을 받아서 git pull + restart하는 구조.

방법 3: Coolify / Dokku (Vercel-like 경험)
진짜 Vercel처럼 쓰고 싶으면 Coolify나 Dokku를 PVE LXC/VM에 올려. GitHub 연결하면 push 시 자동 빌드/배포 + SSL + 도메인까지 알아서 해줌.

CK 상황 기준 추천
Self-hosted runner / Webhook pull / Coolify on PVE LXC
Virton 고객한테 제공하는 부가가치로도 좋고, 본인 사이드 프로젝트 배포용으로도 Coolify on PVE LXC가 가장 실용적이야.
```

## 13) Source availability / exclusions
- **Discord**: live CDP tab title was `Discord`, but body text was login UI and the target URL was:
  - `https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1490692905604481026%252F1490692905604481026`
- Discord body text was:

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

- **Threads likes**: 웹 UI상 직접적인 likes 탭을 확인하지 못해 `activity + reposts + profile`로 대체함
- **X likes**: page is visible, but likes are marked private; still some liked posts are visible in the private view shell
- **GitHub stars**: `6`개로 보였고 이번 run에서 새 star 추가 정황은 확인되지 않음
- **ChatGPT recent answers**: 일부 최신 페이지는 본문이 `Thinking` 또는 shell 상태로 보여 recent titles/prompts만 raw로 보존함
- **Filtered / excluded as noise**: YouTube 스포츠 하이라이트, Threads 축구 감상/논쟁, X 광고/트렌드, 기타 엔터테인먼트성 항목은 summary에서 제외 대상으로 취급함

## 14) Delivery note
- Discord 채널 `1490692905604481026`에 브라우저 내부 직접 게시를 시도할 수 있는 로그인 세션이 없었음
- 따라서 짧은 delivery note는 로컬 파일로 먼저 저장함:
  - `/home/ck/wiki/raw/transcripts/interest-signal-note-19-00-2026-04-18.md`
- 실제 Discord 전송 성공으로 가장하지 않음; 로그인 불가 상태를 그대로 기록함
