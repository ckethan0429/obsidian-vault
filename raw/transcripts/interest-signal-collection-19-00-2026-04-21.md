# Raw Transcript — Interest Signal Collection (19:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-21
Run time: 19:00 KST (captured around 19:00–19:07 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads API profile), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: YouTube subscriptions, X likes/profile, GitHub stars, Google search history, ChatGPT loaded conversations, Claude loaded conversations, Threads API `/me` `/threads` `/replies` `/mentions` `keyword_search`, Discord target state
- non-Threads 소스는 라이브 Chrome/CDP 세션에 직접 붙어서 확인함 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate` 기반)
- Threads는 이번 런에서 **브라우저/CDP를 쓰지 않고 공식 API만 사용**함. `refresh_access_token` 성공 후 `expires_in=5124548`, `/v1.0/me` 로 `user_id=27173231028946699` 를 재확인했고 token store 권한은 `0600` 유지됨
- 비교 기준: `2026-04-20 19:00`, `2026-04-21 08:00`, `2026-04-21 08:00 rerun (Threads API)` raw. 이번 19:00의 상대적 신규 포인트는 **Threads own posts/replies에서 Boris/병렬 운영 습관을 1/5~5/5로 풀어낸 스레드**, **YouTube 구독 피드에 `서브에이전트+스킬+MCP`, `Deep Research Agents` 같은 운영형 제목이 더 노골적으로 같이 보인 점** 쪽이었고, X / GitHub / Google은 주로 강화 신호였음
- X likes는 private surface로 계속 열람 가능했음. Discord 대상 채널은 이번에도 `discord.com/login` 으로 열려 브라우저 내부 직접 전송은 불가했음
- mixed evidence는 raw에 남기되, summary/short note에서는 정치·스포츠·일반 엔터테인먼트·군대/잡담성 항목을 제외하기로 함

## 1) YouTube subscriptions — copied text
Page title:
- `(3) 구독 - YouTube`

Visible AI/infra/agent feed items (verbatim):

```text
•
스트리밍 시간: 46분 전
관련성
2:05:22
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
freeCodeCamp.org
조회수 11만회
•
```

```text
•
4일 전
10:51
Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX — Adrien Grondin, Locally AI
AI Engineer
조회수 680회
•
```

```text
•
3시간 전
2:58
How Anthropic uses Claude in Product Engineering
Claude
조회수 1.2만회
•
```

```text
•
45분 전
7:13
Codex 2.0: Automate ANYTHING!
Julian Goldie SEO
조회수 224회
•
```

Visible headings lower in the same subscriptions surface (verbatim):

```text
클로드 코드로 100% 자동화 마케팅 에이전트 팀을 만드는 방법 (서브에이전트+스킬+MCP 모두)
Full Workshop: Build Your Own Deep Research Agents - Louis-François Bouchard, Paul Iusztin, Samridhi
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
🔴 [손경제플러스 LIVE] 무뎌진 전쟁 리스크, 시장은 계속 달릴까? - 이선엽 대표 (AFW파트너스 대표)
Billion-Dollar Lessons On How To Win In The Trillion-Dollar Sports Business
한국 선수들이 덩크 못하는 이유
실제 상황! 거대 함정 속에서 벌어지는 해군 생도들의 90일간의 지구 한 바퀴 항해기
```

## 2) X likes — copied text
Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible post excerpts (verbatim):

```text
hoeem
@hooeem
·
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...
26
223
1.6K
1.5M
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

```text
Avi Chawla
@_avichawla
·
Mar 29
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
@shannholmberg
·
Mar 28
how autoresearch works, simplified
it's a pattern that lets AI agents run experiments and improve anything you can measure
three files is all you need, everyone should be running it. ↓
```

## 3) X reposts/profile timeline — copied text
Page URL:
- `https://x.com/ChangkyunAhn`

Visible repost excerpts (verbatim):

```text
You reposted
hoeem
@hooeem
·
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...
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

```text
You reposted
Avi Chawla
@_avichawla
·
Mar 29
Microsoft did it again!
Building with AI agents almost never works on the first try.
A dev has to spend days tweaking prompts, adding examples, hoping it gets better.
This is exactly what Microsoft's Agent Lightning solves.
```

## 4) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_biography": "비트코인/크립토/it 투자합니다",
  "is_verified": false
}
```

메모:
- 이번 런의 Threads 수집 기준 계정은 `@ethan13917`
- 이번 런은 refresh 이후에도 공식 API 토큰이 정상 동작했음

## 5) Threads API — `/27173231028946699/threads` raw JSON excerpts

최신 2개는 `REPOST_FACADE` 로 내려왔고 본문 텍스트가 직접 노출되지 않았음:

```json
{
  "media_type": "REPOST_FACADE",
  "timestamp": "2026-04-21T08:40:16+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYyjYQE5zb"
}
```

```json
{
  "media_type": "REPOST_FACADE",
  "timestamp": "2026-04-21T05:34:43+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYdUWLk7yM"
}
```

Strongest visible own post in this run:

```json
{
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:24:04+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다."
}
```

Earlier anchor post still present in the API surface:

```json
{
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-20T17:45:04+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMCrQk7nl",
  "text": "Managed Agents\n\n프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다. LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다."
}
```

Mixed/non-target own post kept raw but not promoted:

```json
{
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:23:30+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOTPFkycL",
  "text": "스레드에서 놀고있는 개발자,디자이너 마케터는 망하진 않을듯ㅋㅋㅋㅋㅋ\n이렇게 ai 자료가 넘쳐나는데?"
}
```

## 6) Threads API — `/27173231028946699/replies` raw JSON excerpts

This run’s strongest new reply-chain excerpts (verbatim):

```json
{
  "timestamp": "2026-04-21T03:24:09+0000",
  "root_post": {"id": "18021615854650509"},
  "text": "1/5 병렬 실행\n\n보리스의 핵심은 “한 세션을 끝까지 붙잡기”가 아니다. 여러 AI 세션을 동시에 던져놓고, 사람은 막힌 탭을 기다리지 않고 계속 다음 일로 넘어간다. 산출량은 천재 모델 1개보다, 멈추지 않는 작업 큐에서 나온다. 병렬성은 옵션이 아니라 생산성 엔진이다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:22+0000",
  "root_post": {"id": "18021615854650509"},
  "text": "2/5 환경 분리\n\n15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다. 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다. 서로의 변경을 덮어쓰지 않고, 충돌 없이 독립적으로 전진한다. 멀티에이전트의 첫 원칙은 협업보다 격리다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:30+0000",
  "root_post": {"id": "18021615854650509"},
  "text": "3/5 알림 관리\n\n병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:43+0000",
  "root_post": {"id": "18021615854650509"},
  "text": "4/5 공용 규칙\n\n팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다. AI가 실수할 때마다 규칙을 추가해 같은 사고를 반복하지 않게 만든다. 프롬프트를 길게 쓰는 게 핵심이 아니다. 실패를 규칙으로 축적해 팀의 운영체계로 바꾸는 것, 그게 진짜 레버리지다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:51+0000",
  "root_post": {"id": "18021615854650509"},
  "text": "5/5 셀프 검증과 설계\n\n보리스가 강조한 건 생성보다 검증이다. 브라우저, 시뮬레이터, 실제 서버 실행 환경처럼 AI가 자기 결과를 직접 확인할 루프를 붙이면 품질이 2~3배 뛴다. 그리고 코드는 바로 치지 않는다. plan mode에서 설계를 먼저 굳혀 인간의 후반 디버깅 시간을 줄인다."
}
```

Other reply rows kept raw:

```json
{
  "timestamp": "2026-04-21T05:34:23+0000",
  "text": "omx, omc 저도 잘쓰고 있습니다 ㅎㅎㅎ화이팅!"
}
```

```json
{
  "timestamp": "2026-04-21T01:26:22+0000",
  "text": "어플 뭔가요?"
}
```

## 7) Threads API — `/mentions` / `keyword_search` availability

`/mentions` raw error:

```json
{
  "error": {
    "message": "Application does not have permission for this action",
    "type": "OAuthException",
    "code": 10,
    "error_subcode": 4279067,
    "error_user_title": "앱에 액세스 티어 접근 권한이 없습니다",
    "error_user_msg": "현재 데이터 액세스 티어에서는 요청한 데이터에 액세스할 수 없습니다. 앱 검토가 필요합니다."
  }
}
```

`keyword_search?q=Claude Code` raw error:

```json
{
  "error": {
    "message": "Application does not have permission for this action",
    "type": "OAuthException",
    "code": 10,
    "error_subcode": 4279067,
    "error_user_title": "앱에 액세스 티어 접근 권한이 없습니다",
    "error_user_msg": "현재 데이터 액세스 티어에서는 요청한 데이터에 액세스할 수 없습니다. 앱 검토가 필요합니다."
  }
}
```

이번 런의 Threads API gap 메모:
- likes 전용 surface는 이번 API 런에서도 직접 노출되지 않았음
- `/mentions` 와 `keyword_search` 는 토큰 실패가 아니라 앱 access tier 제한으로 unavailable
- 따라서 이번 런의 Threads 강신호는 **own posts + replies** 기준으로만 정리함

## 8) GitHub stars — copied text
Page title:
- `Your stars`

Visible starred repository rows (verbatim):

```text
jung-wan-kim / memory-bank
TypeScript  62  86

first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
TypeScript  730  88

firecrawl / web-agent
Open-source web data agent optimized for structured web research
TypeScript  675  81

jorgebmann / pyturboquant
A Python implementation of Google's TurboQuant framework (WIP)
Python  344  36

shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
HTML  46,929  4,610

outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
TypeScript  1,785  210

kipeum86 / legal-agent-orchestrator
An AI legal workflow running on Claude Code. Eight legal agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate to produce legal opinions with full audit trails.
Python  29  7

Yeachan-Heo / oh-my-codex
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.
TypeScript  24,611  2,075

hyungyunlim / obsidian-social-archiver-releases
Release repository for Social Archiver - Archive social media posts from 8 platforms into Obsidian
TypeScript  101  5

RichardAtCT / claude-code-telegram
A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.
Python  2,469  344
```

Page-state caveat kept raw:

```text
Sorry, something went wrong.
Uh oh!
You don't have any lists yet.
```

## 9) Google search history — copied text
Page title:
- `Google - 내 활동`

Visible timestamped entries (verbatim):

```text
오전 2:09 •  • 세부정보
검색
양식을 저장할 수 없음 모든 정보가 정확하게 입력되었는지 확인한 후 다시 시도해주세요 을(를) 검색했습니다.

오전 2:05 • 세부정보
검색
개발자 FAQ - Meta for Developers 을(를) 방문했습니다.

오전 1:59 • 세부정보
검색
ngrok Log in — Manage Tunnels, Domains & API Gateways 을(를) 방문했습니다.

오전 1:59 •  • 세부정보
검색
dashboard ngrok 을(를) 검색했습니다.

오전 12:44 • 세부정보
검색
Threads API - 문서 - Meta for Developers 을(를) 방문했습니다.

오전 12:44 •  • 세부정보
검색
threads api 을(를) 검색했습니다.
```

Previous-day reinforcement still visible in the same surface:

```text
오후 9:48 • 세부정보
검색
threads api 을(를) 검색했습니다.

오후 4:58 • 세부정보
검색
opencode-go 을(를) 검색했습니다.

오후 10:13 •  • 세부정보
검색
anthropic effective harness for long running agents 을(를) 검색했습니다.
```

Observed mixed/non-target items kept raw but not promoted:

```text
날씨
알리익스프레스 을(를) 검색했습니다.
facebook 을(를) 검색했습니다.
mh_bbang 을(를) 검색했습니다.
```

## 10) ChatGPT answers — copied text
### 10-1) `공유 메모리 에이전트`
Conversation URL:
- `https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986`

Visible excerpt (verbatim):

```text
TL;DR
이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다. 핵심 메시지는 단순합니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
```

```text
Telegram 에이전트가 Claude Code의 작업 맥락을 안다
다음 Claude Code 세션이 이전 Telegram 대화를 안다
즉, 에이전트 간 컨텍스트 전환 비용이 줄어든다
```

```text
Stop hook은 단순 이벤트 훅이 아니라
세션 종료 시점의 작업 흔적을 공용 메모리로 브로드캐스트하는 핵심 연결부입니다.
```

```text
provider.allow_fallbacks: false
공유 메모리 기반 시스템에서 모델/provider가 조용히 바뀌는 것은
단순 성능 문제가 아니라 메모리의 의미 자체를 흔드는 문제라는 관점입니다.
```

### 10-2) `ACP Editor Integration`
Conversation URL:
- `https://chatgpt.com/c/69e187a8-4458-83e8-b8a4-fa217c96108f`

Visible excerpt (verbatim):

```text
ACP Editor Integration | Hermes Agent
Hermes Agent can run as an ACP (Agent Client Protocol) server
Enables editor-native AI agent behavior instead of CLI/chatbot usage
Communication happens via stdio + JSON-RPC
```

```text
What editors can display:
Chat messages
Tool execution activity
File diffs
Terminal commands
Approval prompts
Streaming responses (“thinking” chunks)
```

```text
Session Model
ACP sessions are:
Managed in-memory (per running server)
Each session tracks:
Session ID
Working directory
Model
Conversation history
Cancel state
👉 Important constraint:
Sessions are not persistent across server restarts
```

```text
Workspace binding
“환경(context)”을 IDE로 강하게 고정
→ 운영 흐름 = 파일 + 터미널 + 히스토리
Session ephemeral
 durable state 없음
→ 장기 운영/자동화에는 별도 state layer 필요
```

Recent ChatGPT titles visible in the same account sidebar:

```text
공유 메모리 에이전트
Codex 플러그인 요약
ACP Editor Integration
Discord Target Normalization
하네스 엔지니어링 확장
Claude Code 원격 제어
AI 인프라 구축 필수 요소
```

## 11) Claude answers — copied text
### 11-1) Claude recent/home sidebar
Page URL:
- `https://claude.ai/new`

Visible recent titles (verbatim):

```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
Meta 스레드 API 리다이렉트 URL 설정 오류
AI 연동 가능한 영상편집 툴
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
B2B 솔루션 배포 사이클 전략
프로젝트 관리를 위한 AI 도구 추천
관심사 정리 및 위키 작성
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
GPU 사업 기반 경제적 자유 로드맵
```

### 11-2) `Meta 스레드 API 리다이렉트 URL 설정 오류`
Conversation URL:
- `https://claude.ai/chat/75a29339-c6bb-46c4-b28c-1291b83c85d7`

Visible excerpt (verbatim):

```text
Threads API redirect URI 오류는 대부분 몇 가지 흔한 원인이 있어. 체크해보자.

1. URI 형식 문제
http:// → 로컬호스트 제외하고는 반드시 https://여야 함
끝에 슬래시(/) 유무가 실제 앱 설정이랑 정확히 일치해야 함
공백, 특수문자, 인코딩 문제 없는지 확인

2. 허용되지 않는 URI
localhost 대신 127.0.0.1 써야 하는 경우 있음 (또는 반대)
IP 주소 직접 입력은 대부분 거부됨
ngrok 같은 터널링 URL은 보통 됨
```

```text
3. 앱 설정 순서 문제 Meta Developer Console에서 Threads API를 쓰려면:
앱 유형이 "비즈니스" 또는 "소비자"로 설정되어 있어야 함
"Threads API" 제품이 앱에 추가되어 있어야 함
Redirect URI는 Threads API → 설정 에서 입력해야 함 (앱 기본 설정 아님)

4. 도메인 검증
입력한 redirect URI의 도메인이 앱의 "앱 도메인" 에도 등록되어 있어야 할 수 있음
```

### 11-3) `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`
Conversation URL:
- `https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76`

Visible excerpt (verbatim):

```text
한국 B2B SaaS 시장의 고질적 문제는 "월 구독료"라는 단어 자체에 대한 저항입니다.
대기업조차도 "연간 라이선스"는 사도 "월 50만원 구독"은 품의가 안 올라가죠.
반면 교육비·컨설팅비·용역비는 무제한으로 씁니다. 같은 돈인데도요.
```

```text
"녹이는" 비즈니스의 3가지 패턴
1. Education-Led SaaS (교육이 입구, SaaS가 lock-in)
2. SaaS-as-Curriculum (SaaS를 교재로 파는 것)
3. Outcome 보장형 Hybrid
```

```text
여기서 나오는 답은 "설치 안 해도 되는 OpenClaw"를 교육 상품으로 파는 것입니다.
제안 상품: "OpenClaw Ready Box" (가칭)
[고객] → [Virton 물리 서버] → [가상 맥 or Linux VM 1인 1개] → [OpenClaw 사전 설치]
[온보딩 교육 2~3시간]
```

## 12) Discord target state
Target channel URL:
- `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026`

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

이번 런의 delivery 상태 메모:
- Discord는 로그인 상태가 아니어서 채널 `1490692905604481026` 에 직접 게시할 수 없었음
- 따라서 short note는 로컬 파일로 저장하고, 실제 전달은 이번 런에서 완료되지 않음
