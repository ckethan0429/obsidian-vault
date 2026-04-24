# Raw Transcript — Interest Signal Collection (08:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-19
Run time: 08:00 KST (captured around 08:02–08:15 KST)
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT loaded conversations, Claude loaded conversations, Discord target state
- 브라우저는 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, CDP `Runtime.evaluate` 기반)
- Threads의 웹 UI에서는 direct likes 전용 탭을 이번 런에서도 확인하지 못해 `activity + reposts + profile`을 상호작용 근거로 사용함
- 2026-04-18 19:00 / 08:00 run과 비교하면, 오늘 아침의 fresh factor는 **Anthropic managed agent / long-running harness 검색 + ChatGPT의 하네스=런타임/운영체제 관점 강화** 쪽이 가장 분명했고, X/Threads/GitHub는 기존 관심축을 재강화하는 성격이 더 강했음
- Discord 채널 대상 탭은 이번에도 로그인 화면으로 열려 있어 브라우저 내부 직접 전송은 불가했음

## 1) YouTube subscriptions — copied text
Page title:
- `(11) 구독 - YouTube`

Visible AI/infra/tooling feed items (verbatim):

```text
11:23
“현존하는 앱의 80%는 사라질겁니다” 오픈클로 창시자가 말한 AI 에이전트의 미래 | 피터 스테인버거(Peter Steinberger)
동기부여학과
조회수 2.4천회
•
6일 전
```

```text
13:32
I Plugged an RTX 5090 Into a Mac... and Didn’t Expect This
Alex Ziskind
조회수 28만회
•
2일 전
```

```text
라이브
AI 기본법 시대,데이터 중심의 AI 거버넌스 및AI 에이전트 실행 전략[김선영의 AI-Ready Data ep.2, 엔코아]
토크아이티(Talk IT)
159명 시청 중
```

```text
Claude랑 Codex를 둘 다 모바일에서 쉽게 관리하자. happy! #ai #llm #agent #anthropic #openai #chatgpt
조회수 8.2천회
```

```text
8:59
Claude Opus 4.7 LEAKS is INSANE!
Julian Goldie SEO
조회수 222회
•
32분 전
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
[25/26 UCL] 리버풀 vs PSG 3분 하이라이트｜SPOTV FOOTBALL
[25/26 UCL] AT 마드리드 vs 바르셀로나 3분 하이라이트｜SPOTV FOOTBALL
"소니가 경기를 끝장냈다!" 손흥민 폭풍질주 환상 킬패스 PK 유도 쐐기골로 4강행 캐리!
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
Quote
Boris Cherny
@bcherny
·
Mar 30
I wanted to share a bunch of my favorite hidden and under-utilized features in Claude Code. I'll focus on the ones I use the most.
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
```

## 4) Threads activity — copied text
Page title:
- `활동 • Threads`

Visible text:

```text
slamslam__
5일
넵 감사합니다 추천모델도 있나요? 요새 핫한 gemma 4?
H200 몇대인데, 더 큰거로 가보시죠!
minimax m2.5 bf16?
```

```text
slamslam__
5일
H200 몇개 테스트할 기회가 생겼는데 간단한 가이드 주실수있나요?
vllm으로 모델 돌려보시죠
```

```text
hadazzang
님 외 1명
1주
Terminus는 클코나 코덱스 스크롤이 안되어서 지난 대화는 읽기가 좀힘들지않나요
```

```text
net.amond
님 외 2명
2주
그 말 길게 했는데 결론은 “새 용어 마음에 안 든다” 이상도 이하도 아님.
현장에선 프롬프트만으로 안 되니까 상태관리, 검증, 권한, 도구 연결, 재시도 같은 운영 레이어를 따로 다루기 시작한 거고.
거기에 이름 붙인 걸 가지고 현학적으로 비웃는다고 현실 문제가 사라지진 않음.
```

Observed mixed/non-target items kept raw but not promoted:

```text
아비트라지, 즉 재정거래는 온라인 말고 오프라인에서 그 기회가 더 있다.
김진짜는 한낱 유튜버로 치부할수 있지만, 내가 볼 때 한국축구에 분명한 도움줄 수 있는 사람이다.
오스트리아전 15분 감상평
```

## 5) Threads reposts — copied text
Page URL:
- `https://www.threads.com/@ethan13917/reposts`

Visible excerpts:

```text
softdaddy_o
4일
주식 데이터를 파이썬으로 가져오고 싶으면 yfinance부터 시작해. `pip install yfinance` 한 줄이면 끝이야. GitHub 스타 22.9K, 어제 v1.2.2가 나왔어.
Yahoo Finance API를 감싸서 개별 종목, 과거 시세, 재무제표, 옵션 데이터까지 가져올 수 있어. 실시간 WebSocket 스트리밍도 지원해.
```

```text
dayum_gud
Herme의 회고
1주
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

## 6) Threads profile / authored posts — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible authored post excerpts:

```text
ethan13917
AI Threads
1주
AI에 대처하는 대한민국 국민의 자세
1. 최신 AI 기술을 알려주는 자
2. AI 모델을 잘 쓸 수있게 확장 툴을 개발하는 자
3. 실제로 많이 쓰고 생산성을 높이는 자
4. 관심은 있지만 너무 방대해서 FOMO가 오는 자
...
5. chatgpt 채팅 정도만 쓰고 관심 1도 없는 자
```

```text
ethan13917
1주
나 3번,4번 같은데 5번들이랑 같이 일을 하려고 하니 동기화가 잘 안된다..
서로 다른 세상에서 다른 얘기하는 거 같아..
```

## 7) GitHub stars — copied text
Page title:
- `Your stars`

Visible repository rows (verbatim):

```text
6
All stars
6
All repositories
0
Your repositories
6
Others’ repositories
0
Topics
2
Python
3
TypeScript
1
HTML
```

```text
shanraisshan / claude-code-best-practice
Starred
from vibe coding to agentic engineering - practice makes claude perfect
HTML  44,590  4,268
```

```text
outsourc-e / hermes-workspace
Starred
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
TypeScript  1,427  167
```

```text
kipeum86 / legal-agent-orchestrator
Starred
An AI law firm running on Claude Code. Eight specialist lawyer agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate like a real firm to produce legal opinions with full audit trails.
Python  21  4
```

```text
Yeachan-Heo / oh-my-codex
Sponsor
Starred
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.
```

## 8) Google search history — copied text
Page title:
- `Google - 내 활동`

Visible text:

```text
오늘
검색
anthropic effective harness for long running ag... 을(를) 검색했습니다.
오후 5:14 • • 세부정보
검색
anthropic managed agent 을(를) 검색했습니다.
오후 5:11 • • 세부정보
검색
claude dangerously skip permissions 을(를) 검색했습니다.
오후 12:17 • • 세부정보
검색
claude code discord 을(를) 검색했습니다.
오전 11:21 • 세부정보
```

```text
어제
검색
https://chatgpt.com?utm_source=google&utm_mediu... 을(를) 방문했습니다.
오후 8:54 • 세부정보
검색
chatgpt 을(를) 검색했습니다.
오후 8:54 • • 세부정보
검색
Claude 을(를) 방문했습니다.
오후 8:53 • 세부정보
검색
claude 을(를) 검색했습니다.
오후 8:53 • • 세부정보
```

```text
검색
honcho 을(를) 검색했습니다.
오후 4:24 • 세부정보
검색
comet cdp 을(를) 검색했습니다.
오후 4:18 • 세부정보
```

## 9) ChatGPT answers — copied text
Loaded conversation:
- `하네스 엔지니어링 확장`

Visible excerpt:

```text
좋은 문제제기입니다.

2번 관점에서 더 밀어붙이면, 하네스 엔지니어링은 더 이상 “에이전트 프롬프트 설계”가 아니라 에이전트 런타임/운영체제 설계 문제로 커집니다.
...
여기서 하네스는 “LLM 호출기”가 아니라 search policy가 됩니다.
트리 최적 순회, best-first, branch-and-bound, speculative execution, anytime algorithm 같은 개념이 들어와야 합니다.
...
하네스 엔지니어링의 다음 전장은 프롬프트가 아니라 런타임이다.
탐색, 스케줄링, 메모리, 검증, 장애복구, 비용제어를 통합한 ‘에이전트 운영체제’가 진짜 승부처다.
```

Loaded conversation:
- `H200 추론용 오픈모델 추천`

Visible excerpt:

```text
좋아요. 이 문장은 그냥 풀면 “모델을 하나 크게 올려서 다 해결하려 하지 말고, 역할별로 나눠서 배치하라”는 뜻입니다.

한 줄 요약
메인 추론 모델 1개 + 라우팅 모델 1개 + 임베딩 모델 1개 + 멀티모달/OCR 모델 1개로 분리하라는 말입니다.
...
지금은 Gemma 4 31B 하나만 먼저 성공
그 다음에 정말 필요하면
코드 전용 모델 추가
라우팅 모델 추가
임베딩 모델 추가
순으로 가는 게 맞습니다.
...
너한테 가장 맞는 해석은
지금은 Gemma 4 31B 하나로 OpenClaw를 먼저 완성하고,
그 다음 임베딩 모델을 붙이는 순서입니다.
```

## 10) Claude answers — copied text
Loaded conversation:
- `프로젝트 관리를 위한 AI 도구 추천 - Claude`

Visible excerpt:

```text
PRD, 와이어프레임, MVP를 계속 만들고 계시니까 실제로 현업에서 많이 쓰이는 툴들을 용도별로 정리해드릴게요.

1. AI 네이티브 PM 툴 (요즘 뜨는 카테고리)
Linear + AI
ChatPRD
Dovetail AI

2. 와이어프레임/디자인 쪽
v0 by Vercel
Figma Make (구 Figma AI)
Uizard / Visily

3. 문서/지식 허브
Notion AI + Notion Projects
Coda AI

4. 올인원 AI PM 에이전트
Devin / Cursor Background Agents
Reforge AI / Productboard Pulse

CK 상황 기준 추천 스택
Notion AI
Linear
v0
Cursor
```

```text
Paperclip이 완전 흥미롭네요.
Node.js 서버 + React UI로 AI 에이전트 팀을 오케스트레이션해서 비즈니스를 운영하는 "zero-human company" 컨셉이네요.
...
AI 에이전트 오케스트레이션 오픈소스
LangGraph
CrewAI
AutoGen
Mastra
...
PRD/문서 → 구현 자동화 오픈소스
Task Master AI
BMad-Method
OpenHands (구 OpenDevin)
...
CK한테 Paperclip + Task Master AI 조합이 가장 바로 꽂힐 것 같아요.
```

Loaded conversation:
- `소프트웨어 개발 기획 통합 관리 도구 - Claude`

Visible excerpt:

```text
PRD + 기능명세서 + 유저플로우 통합 관리 툴
1. Notion — 소규모팀 최적, CK한테 가장 맞을 것
2. Confluence + Jira — Atlassian 생태계
3. Linear — 개발팀 실행 관리는 최고
4. Fibery — 덜 알려졌지만 진짜 통합형
5. Productboard — Product Discovery 특화
...
Virton처럼 3인 개발팀 + CTO 직접 기획 구조면:
PRD + 기능명세서 → Notion
유저플로우 다이어그램 → FigJam 또는 Whimsical
이슈/스프린트 실행 → Linear
Notion ↔ Linear 인테그레이션
사실상 Notion + Linear 조합이 2025년 기준 소규모 SaaS팀 표준이에요.
```

Loaded conversation:
- `온프레 PVE 서버 자동 배포 구성 - Claude`

Visible excerpt:

```text
가능하지. GitHub push → 온프레 PVE 서버 자동 배포, 충분히 구현할 수 있어.
핵심은 GitHub Actions self-hosted runner 또는 webhook 기반 pull 배포야.

방법 1: GitHub Actions + Self-Hosted Runner (추천)
...
방법 2: Webhook + Pull 방식 (경량)
...
방법 3: Coolify / Dokku (Vercel-like 경험)
진짜 Vercel처럼 쓰고 싶으면 Coolify나 Dokku를 PVE LXC/VM에 올려.
GitHub 연결하면 push 시 자동 빌드/배포 + SSL + 도메인까지 알아서 해줌.
```

```text
좋은 페인포인트 짚었어. 메신저 의존 없이 음성 → 텍스트 → 서버 클립보드 직통 파이프라인.

핵심 아키텍처
[폰] 음성 → STT → HTTPS POST
        ↓
[서버] API 수신 → 클립보드 버퍼 저장
        ↓
[서버 터미널] `cb paste` or 웹 UI에서 원클릭 복사

메신저가 빠지니까 병목이 사라져. 디스코드/텔레그램 API 의존도 0.
```

## 11) Source availability / exclusions
- **Discord**: live CDP tab title was `Discord`, but body text was login UI and the target URL was:
  - `https://discord.com/login?redirect_to=%2Flogin%3Fredirect_to%3D%252Fchannels%252F1490692905604481026%252F1490692905604481026`
- Discord body text was:

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

- **Threads likes**: 웹 UI상 direct likes surface를 확인하지 못해 `activity + reposts + profile`로 대체함
- **X likes**: page is visible, but likes are marked private; private shell 안에서 일부 liked post만 확인 가능했음
- **GitHub stars**: `6`개로 보였고 이번 run에서 새 star 추가 정황은 확인되지 않음
- **X / Threads / GitHub freshness**: 이번 아침 기준으로는 신규성보다 기존 `Claude Code / agent orchestration / Hermes / H200 / vLLM` 축 강화 성격이 큼
- **Filtered / excluded as noise**: YouTube 축구 하이라이트/손흥민 클립, Threads 축구 논쟁, X 광고/트렌드 등 스포츠·엔터 항목은 summary에서 제외 대상으로 취급함

## 12) Delivery note
- Discord 채널 `1490692905604481026`에 브라우저 내부 직접 게시를 시도할 수 있는 로그인 세션이 없었음
- 따라서 짧은 delivery note는 로컬 파일로 먼저 저장함:
  - `/home/ck/wiki/raw/transcripts/interest-signal-note-08-00-2026-04-19.md`
- 실제 Discord 전송 성공으로 가장하지 않음; 로그인 불가 상태를 그대로 기록함
