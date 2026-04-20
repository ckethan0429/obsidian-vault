# Raw Transcript — Interest Signal Collection (19:00 run)

Source: live logged-in Chrome/CDP browser session
Date: 2026-04-20
Run time: 19:00 KST
Browser: `Chrome/147.0.7727.55`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 페이지: YouTube subscriptions, X likes/profile, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT loaded conversations, Claude loaded conversations, Discord target state
- 이번 런도 브라우저 도구 대신 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, CDP `Runtime.evaluate` 기반)
- Threads 웹 UI에서는 이번 런도 direct likes 전용 탭을 확인하지 못해 `activity + reposts + profile`을 상호작용 근거로 사용함
- Discord 채널 대상 탭은 이번에도 `discord.com/login` 으로 열려 브라우저 내부 직접 전송은 불가했음
- `2026-04-20 08:00` 및 `2026-04-19 19:00` raw와 대조하면, 이번 19:00 런은 **대부분 강화 신호**였고 상대적으로 눈에 띈 추가 가시성은 YouTube의 `The Routing Loop`, `AI커머스/브랜드` 계열과 Claude의 `Twenty CRM` 심화 대화였음

## 1) YouTube subscriptions — copied text
Page title:
- `구독 - YouTube`

Visible AI/infra/business feed items (verbatim):

```text
•
5분 전
2:05:22
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
freeCodeCamp.org
조회수 721회
•
```

```text
•
1시간 전
14:45
Build AI Voice Agents with Gemini 3.1 Flash TTS
Julian Goldie SEO
조회수 175회
•
```

```text
•
2시간 전
53:22
The Routing Loop - Ask Me Anything with Jamie and Matt
AWS Events
조회수 166회
•
```

```text
•
59분 전
19:30
"모르면 다 망할거예요" AI시대에 무조건 주목받을 진짜 브랜드 특징 3가지 (충격적 미래 예측)
큰손 노희영
조회수 3천회
•
```

```text
•
1시간 전
30:31
쇼핑몰 → 소비자, AI커머스 시대 쇼핑주도권이 바뀐다 (허진호 박사)
티타임즈TV
조회수 253회
•
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
yongho_8867
2주
인프라 설계할 때 TPS 계산해본 적 있어?
그냥 감으로 서버 몇 대 올리고
감당 안 되면 추가하고
이런 식으로 했던 거 나만 아니지?
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
더불어 세팅용 프롬프트 또한 공유 합니다. 써보세요~
1/10 — 훅: 문제 정의
기록은 많은데, 다시 못 꺼내 쓴다.
이건 정보 부족 문제가 아니다.
정보가 너무 많아서 생긴 문제다.
그래서 나는 "저장"을 멈추고
"운영"을 시작했다.
Hermes agent와 함께. 🧠
```

## 6) Threads profile/posts — copied text
Page URL:
- `https://www.threads.com/@ethan13917`

Visible text:

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

Visible star rows (verbatim excerpt):

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

Visible search/activity lines (verbatim):

```text
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
검색
hermes agent 을(를) 검색했습니다.
오후 4:56
```

```text
검색
vllm 을(를) 검색했습니다.
오후 5:02
검색
discord.com developers portal 을(를) 검색했습니다.
오후 5:17
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
공유 메모리 에이전트
ACP Editor Integration
Power usage analysis tool
Discord Target Normalization
NVIDIA GPU 모델 확인
```

Note:
- `ACP Editor Integration`, `공유 메모리 에이전트`, `Power usage analysis tool`, `Discord Target Normalization` 탭은 이번 런에서 실제 assistant answer 전체보다 사용자 프롬프트/제목 가시성이 더 강했으므로 제목/프롬프트 자체를 raw evidence로 간주함

## 10) Claude answers / recent conversations — copied text
Observed recent Claude titles in sidebar/body (verbatim):

```text
소프트웨어 개발 기획 통합 관리 도구
프로젝트 관리를 위한 AI 도구 추천
온프레 PVE 서버 자동 배포 구성
AI 시대 승진 기준의 변화: 성과에서 대체 불가능성으로
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
```

### 10.1) `프로젝트 관리를 위한 AI 도구 추천 - Claude`
- URL: `https://claude.ai/chat/bff733aa-da43-408d-8fc6-dfb15f107e7d`

```text
1. AI 네이티브 PM 툴 (요즘 뜨는 카테고리)
Linear + AI [중]
엔지니어링 팀이 많이 쓰는 이슈 트래커인데, Linear AI가 PRD 기반으로 이슈 자동 생성, 우선순위 추천, 중복 감지까지 해줌
CK 같은 3인 개발팀 리딩하는 CTO한테는 Jira보다 훨씬 가벼움
```

```text
3. 문서/지식 허브
Notion AI + Notion Projects
PRD, 회의록, 로드맵, 태스크를 한 곳에서 관리
AI가 문서 요약, 액션 아이템 추출, 주간 리포트 자동 생성
```

```text
v0 by Vercel [중]
텍스트 프롬프트 → React 코드 + Tailwind UI 바로 생성. shadcn/ui 기반
CK가 Next.js 스택 쓰시니까 특히 궁합 좋음. 와이어프레임을 그림이 아니라 실제 작동하는 코드로 뽑을 수 있음
```

### 10.2) `Twenty CRM` 관련 심화 구간 — same Claude conversation body

```text
twenty라는 오픈소스 crm도 있던데 이것도 조사해줘
4월 16일
Twenty는 단순 CRM을 넘어서 CK한테 굉장히 흥미로운 포지션의 오픈소스입니다. 핵심부터 전략적 활용까지 정리해드릴게요.
CK가 주목할 포인트는 단순히 "CRM"이 아니라는 것입니다. Twenty는 사실상 **"커스텀 객체/워크플로우/권한/API를 갖춘 메타데이터 프레임워크"**이고, 여기에 우연히 CRM 스키마가 디폴트로 들어있는 거예요.
```

```text
기술 스택 (CK 스택과의 궁합)
백엔드	NestJS	NestJS ✅
프론트	React + TS	React + TS ✅
DB	PostgreSQL	친숙 ✅
큐	Redis + BullMQ	친숙 ✅
스토리지	MinIO (S3 호환)	Proxmox에 MinIO 배포 가능 ✅
API	GraphQL + REST	친숙 ✅
궁합이 너무 좋습니다. 포크해서 뜯어고치기에 러닝커브가 거의 없음.
```

```text
시나리오 2: 리드젠 플랫폼의 백엔드 ⭐
CK가 모든 아이디어에 리드젠을 붙일 계획이라고 하셨는데, 매번 리드젠 플랫폼을 새로 만드는 건 낭비입니다. Twenty를 리드젠 백엔드 코어로 쓰면 답이 나옵니다.
[랜딩 페이지 A: GPU 비용 계산기]
[랜딩 페이지 B: Proxmox 건강 진단]  → Twenty API → 커스텀 객체 "Lead"
[랜딩 페이지 C: AI 인프라 RFP]
Hermes가 워크플로우로
→ 리드 스코어링
→ 이메일 시퀀스
→ Discord 알림
```

```text
시나리오 3: GPU 브로커리지/RFP 플랫폼의 오퍼레이션 OS
GPU 브로커리지는 본질적으로 "공급자 ↔ 수요자 ↔ 계약 ↔ 할당" 관리 비즈니스.
Twenty면 1주일 만에 MVP.
```

```text
시나리오 5: 개인 CRM (2nd Brain의 확장) ⭐
지난번 파이프라인(Chrome CDP → Wiki)의 관계 레이어 역할.
Wiki는 "내가 본 정보"
Twenty는 "내가 만난 사람"
두 개를 연결하면: "CK가 GPU 관련 리서치를 한 달 전에 했는데, 그때 언급된 회사 A의 CTO를 3일 전에 LinkedIn에서 봤다" 같은 크로스 레퍼런스가 자동으로 떠오름.
LinkedIn MCP/Gmail MCP를 Twenty에 연결하면 모든 인맥이 자동 축적.
```

### 10.3) `온프레 PVE 서버 자동 배포 구성 - Claude`
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

## Filtering notes
- X / Threads / GitHub는 이번 런에서도 agent workflows, Claude Code, Hermes, H200/vllm, prompt/harness 운영화 축이 강했고 큰 방향성 변화는 적었음
- YouTube는 AI/infra/business 항목과 스포츠/운동/연예 noise가 같은 화면에 섞여 있었음. raw에는 남기고 short note에서는 스포츠/운동/엔터테인먼트를 제외함
- ChatGPT 일부 최근 탭은 새로 연 recent shell만 보이거나 사용자 프롬프트 가시성이 더 강했음. 이런 경우 제목/프롬프트를 raw evidence로 남기고, fully hydrated된 대화(`하네스 엔지니어링 확장`, `H200 추론용 오픈모델 추천`, `AI 인프라 구축 필수 요소`)를 우선 신호로 사용함

## Why this raw exists
This file is the evidence store for later summary/curation.