# Raw Transcript — Interest Signal Collection (08:00 rerun, Threads API)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-21
Run time: 08:00 KST rerun (captured around 11:13–11:18 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads API profile), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`; YouTube subscriptions; X likes/profile; GitHub stars; Google search history; ChatGPT recent/home + selected conversations; Claude recent/home + selected conversations; Discord target state
- Threads는 이번 런에서 **웹/CDP를 쓰지 않고 공식 API만 사용**했습니다. 먼저 long-lived token refresh를 수행했고, 이후 `/v1.0/me`로 `user_id=27173231028946699` 를 재확인했습니다.
- Threads API 결과상 `/mentions` 와 `keyword_search` 는 모두 `Application does not have permission for this action` / `앱에 액세스 티어 접근 권한이 없습니다` 로 막혔습니다. 즉, 토큰 자체는 유효하지만 현재 앱 access tier에서는 일부 검색/멘션 surface를 못 읽습니다.
- Threads API에는 direct likes 전용 surface가 없어서 likes는 이번 런에서 수집하지 않았고, Threads에 대해서는 **CDP fallback도 사용하지 않았습니다**.
- non-Threads 소스는 라이브 Chrome/CDP 세션에 직접 붙어서 확인했습니다 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate`).
- `2026-04-20 08:00` / `2026-04-20 19:00` raw와 대조하면, 이번 런의 상대적 신규 포인트는 **Threads를 웹이 아니라 API로 다시 검증했을 때 `mentions`·`keyword_search` 가 앱 티어 제약으로 막힌 사실**, **GitHub stars가 10개로 확장된 상태가 유지된 사실**, **Google 검색 기록에 `threads api` / Meta docs / `ngrok` 이 실제로 남아 있는 점**, 그리고 **ChatGPT/Claude 최근 대화가 shared memory / Codex plugins / ACP / interest-signal curation / Planner↔GitHub Project 같은 운영형 주제를 전면에 올리고 있다는 점** 쪽입니다.
- Discord 대상 채널 탭은 이번에도 `discord.com/login` 으로 열려 브라우저 내부 직접 전송은 불가했습니다.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_biography": "비트코인/크립토/it 투자합니다",
  "is_verified": false
}
```

간단 해석:
- 공식 API 토큰 refresh 이후에도 `/me` 가 정상 응답했습니다.
- 이번 런의 Threads 수집 기준 계정은 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

최신 2개는 `REPOST_FACADE` 로 내려오며 본문 `text` 가 비어 있었습니다.

```json
{
  "timestamp": "2026-04-21T00:41:37+0000",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXX7xptk7qR",
  "text": ""
}
```

```json
{
  "timestamp": "2026-04-21T00:38:48+0000",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXX7c8Nkzlv",
  "text": ""
}
```

```json
{
  "timestamp": "2026-04-20T17:45:04+0000",
  "media_type": "TEXT_POST",
  "has_replies": true,
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMCrQk7nl",
  "text": "Managed Agents\n\n프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다. LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다."
}
```

```json
{
  "timestamp": "2026-04-20T08:00:42+0000",
  "media_type": "TEXT_POST",
  "has_replies": true,
  "permalink": "https://www.threads.com/@ethan13917/post/DXWJOq5E4L5",
  "text": "B2B 세일즈와 협상 전략\n\nB2B 세일즈를 '말빨'로 보는 순간 끝이다.\n실제 승부는 상대의 의사결정 구조를 뜯어보고, 돈·리스크·책임을 다시 설계하는 데서 난다.\n제안서 잘 쓰는 사람보다, 결정이 왜 멈췄는지 읽는 사람이 이긴다."
}
```

간단 해석:
- API 기준으로도 현재 상단 텍스트 포스트 강신호는 **Managed Agents / 레이어 분리 / 운영 시스템화** 입니다.
- 다만 최신 repost 행은 `REPOST_FACADE` + 빈 본문으로 떨어져서, API만으로는 해당 repost의 full body를 그대로 복원하기 어렵습니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

```json
{
  "timestamp": "2026-04-21T01:26:22+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYA5YZk0PU",
  "text": "어플 뭔가요?"
}
```

```json
{
  "timestamp": "2026-04-21T01:24:37+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYAsg5kxDr",
  "text": "what tools do you use?"
}
```

```json
{
  "timestamp": "2026-04-20T17:45:41+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMHRQExkC",
  "root_post": {"id": "18033386420799468"},
  "text": "1/4 Brain / Hands / Memory\n\n핵심은 세 가지다. 모델은 머리, 하네스는 손, 세션 로그는 기억. 이 셋을 한 컨테이너에 우겨 넣으면 복구도 어렵고 디버깅은 더 지옥이다. 에이전트가 길게 일할수록 분리가 답이다. 이게 하네스 설계의 출발점이다."
}
```

```json
{
  "timestamp": "2026-04-20T17:46:22+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMMPmEy5-",
  "root_post": {"id": "18033386420799468"},
  "text": "2/4 Restartable cattle\n\n좋은 에이전트는 한 번 떠서 오래 버티는 애완동물이 아니다. 죽어도 다시 붙는 소모품이어야 한다. 세션은 외부에 두고, 실행 환경은 교체 가능하게. 그래야 장기 작업이 멈추지 않는다. 운영은 끊김 없이 이어져야 한다."
}
```

```json
{
  "timestamp": "2026-04-20T17:47:03+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMRL7k5Mm",
  "root_post": {"id": "18033386420799468"},
  "text": "3/4 Security boundary\n\n진짜 중요한 건 권한 설계다. 생성 코드가 크레덴셜에 닿는 순간 게임 끝이다. 자격증명은 샌드박스 밖에 두고, 하네스만 안전하게 접근하게 만들어야 한다. 모델은 똑똑해져도, 보안은 자동으로 해결되지 않는다. 사람 몫이다."
}
```

```json
{
  "timestamp": "2026-04-20T17:47:45+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMWQ2ExXi",
  "root_post": {"id": "18033386420799468"},
  "text": "4/4 What's next\n\n다음 병목은 프롬프트가 아니다. 라우팅, 복구, 역할 분리, 도구 오케스트레이션이다. 에이전트를 잘 만드는 팀은 이제 모델보다 운영체계를 먼저 설계한다. 원문: https://www.anthropic.com/engineering/managed-agents"
}
```

간단 해석:
- Threads replies surface에서도 **Brain / Hands / Memory 분리**, **restartable cattle**, **security boundary**, **routing/recovery/orchestration** 가 아주 선명합니다.
- 최신 짧은 reply `what tools do you use?` / `어플 뭔가요?` 는 관심이 실사용 툴링으로 이어지고 있음을 보여주지만, 방향성 자체는 여전히 agent runtime/infra 쪽입니다.

## 4) Threads API — `/mentions` / `keyword_search` availability

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

`keyword_search?q=Claude Code` raw error (동일 계열):

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
- likes 전용 surface는 API에서 직접 노출되지 않았음
- `mentions` 는 access tier 부족으로 unavailable
- `keyword_search` 도 `Claude Code`, `Hermes`, `MCP`, `vLLM`, `agent`, `memory`, `GPU`, `Proxmox` 전부 같은 permission 오류
- 따라서 이번 런의 Threads 강신호는 **own posts + replies** 기준으로만 정리함

## 5) YouTube subscriptions — copied text

Page title:
- `(3) 구독 - YouTube`

Visible AI/infra/tooling feed items (verbatim):

```text
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
```

```text
Running LLMs on your iPhone: 40 tok/s Gemma 4 with MLX — Adrien Grondin, Locally AI
```

```text
How Anthropic uses Claude in Product Engineering
Claude
```

```text
Codex 2.0: Automate ANYTHING!
```

```text
Hermes Agent Workspace + Claude Code Local!
```

```text
Claude Code Local DESTROYS Claude Code?
```

```text
Claude Routines Just Launched. Here Are 13 You Need.
```

```text
Hermes AI Workspace: New FREE Mission Control!
```

Observed mixed/noisy items kept raw but intended for exclusion from summary:

```text
🔴 [손경제플러스 LIVE] 무뎌진 전쟁 리스크, 시장은 계속 달릴까?
그가 또 날뛰기 시작했습니다...
4/21(화) 안갯속 미국·이란 2차 협상...
```

## 6) X likes — copied text

Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible excerpts:

```text
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same. Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits to offload heavy document...
```

```text
"Claude Code 숨겨진 15가지 파워 기능"
Claude Code를 매일 사용하면서도 몰랐던 기능들이 있다면?!!
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
```

```text
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.
```

```text
This is exactly what Microsoft's Agent Lightning solves.
It's an open-source framework that trains ANY AI
```

```text
how to set up autoresearch with claude code
how autoresearch works, simplified
it's a pattern that lets AI agents run experiments and improve anything you can measure
```

## 7) X reposts/profile timeline — copied text

Page URL:
- `https://x.com/ChangkyunAhn`

Visible repost excerpts:

```text
You reposted
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same.
```

```text
You reposted
"Claude Code 숨겨진 15가지 파워 기능"
Claude Code를 매일 사용하면서도 몰랐던 기능들이 있다면?!!
Anthropic 보리스가 자신이 가장 자주 쓰는 숨겨진 기능과 과소평가된 기능들을 공유했어요.
```

```text
You reposted
Introducing One.
The simplest way to connect and monitor AI agents to hundreds of apps.
And we’re open-sourcing the world’s largest integration database powering it: 47,000 agentic actions across 250+ apps.
```

```text
Building with AI agents almost never works on the first try.
A dev has to spend days tweaking prompts, adding examples, hoping it gets better.
This is exactly what Microsoft's Agent Lightning solves.
```

## 8) GitHub stars — copied text

Page title:
- `Your stars`

Visible starred repo rows (verbatim):

```text
jung-wan-kim / memory-bank
```

```text
first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
```

```text
firecrawl / web-agent
Open-source web data agent optimized for structured web research
```

```text
jorgebmann / pyturboquant
A Python implementation of Google's TurboQuant framework (WIP)
```

```text
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

```text
outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
```

```text
kipeum86 / legal-agent-orchestrator
An AI legal workflow running on Claude Code. Eight legal agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate to produce legal opinions with full audit trails.
```

```text
Yeachan-Heo / oh-my-codex
OmX - Oh My codeX: Your codex is not alone. Add hooks, agent teams, HUDs, and so much more.
```

```text
hyungyunlim / obsidian-social-archiver-releases
Release repository for Social Archiver - Archive social media posts from 8 platforms into Obsidian
```

```text
RichardAtCT / claude-code-telegram
A powerful Telegram bot that provides remote access to Claude Code, enabling developers to interact with their projects from anywhere with full AI assistance and session persistence.
```

## 9) Google My Activity — copied text

Page title:
- `Google - 내 활동`

Visible search/history lines (verbatim):

```text
개발자 FAQ - Meta for Developers 을(를) 방문했습니다.
ngrok Log in — Manage Tunnels, Domains & API Gateways 을(를) 방문했습니다.
dashboard ngrok 을(를) 검색했습니다.
Threads API - 문서 - Meta for Developers 을(를) 방문했습니다.
threads api 을(를) 검색했습니다.
threads api 을(를) 검색했습니다.
```

```text
anthropic effective harness for long running agents 을(를) 검색했습니다.
anthropic managed agent 을(를) 검색했습니다.
claude dangerously skip permissions 을(를) 검색했습니다.
claude code discord 을(를) 검색했습니다.
```

```text
hermes agent 을(를) 검색했습니다.
claude code 을(를) 검색했습니다.
Claude 을(를) 방문했습니다.
chatgpt 을(를) 검색했습니다.
```

## 10) ChatGPT — recent titles + selected answer excerpts

### 10-1) Recent titles visible on home

```text
공유 메모리 에이전트
Codex 플러그인 요약
ACP Editor Integration
관심사 정리 위키 작성
NVIDIA GPU 모델 확인
Discord Target Normalization
하네스 엔지니어링 확장
Claude Code 원격 제어
AI와 협업 동기화
PVE 암호화 및 인증
```

### 10-2) ChatGPT conversation — `공유 메모리 에이전트`

```text
TL;DR

이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
```

```text
도구가 여러 개여도, 모두가 같은 저장소의 reader/writer가 되면 하나의 작업 환경처럼 동작한다.
```

```text
실제 연결고리로 제시되는 것은 Claude Code의 Stop hook입니다.
Stop 이벤트가 발생할 때
mem_broadcast.py 같은 훅 스크립트를 호출
이 스크립트가 transcript를 읽어 mem0.add를 수행
```

### 10-3) ChatGPT conversation — `Codex 플러그인 요약`

```text
플러그인 = Codex 기능 확장용 워크플로우 패키지
구성 요소 3가지:
Skills: 작업 절차/지침 (자동 실행 로직)
Apps: 외부 서비스 연동 (GitHub, Slack, Gmail 등)
MCP Servers: 외부 도구/데이터 접근 인터페이스
```

```text
Codex Plugin = “AI가 실제 업무를 수행하게 만드는 실행 단위 (Workflow + Tool + Integration)”
```

### 10-4) ChatGPT conversation — `ACP Editor Integration`

```text
Hermes Agent can run as an ACP (Agent Client Protocol) server
Enables editor-native AI agent behavior instead of CLI/chatbot usage
Communication happens via stdio + JSON-RPC
```

```text
Included:
File ops: read_file, write_file, patch, search_files
Terminal/process execution
Web/browser tools
Memory + session search
Skills system
execute_code, delegate_task
Vision
```

```text
👉 Hermes ACP = IDE 안에서 동작하는 “코딩 에이전트 서버 모드”
```

## 11) Claude — recent titles + selected answer excerpts

### 11-1) Recent titles visible on home

```text
Meta 스레드 API 리다이렉트 URL 설정 오류
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
소프트웨어 개발 기획 통합 관리 도구
프로젝트 관리를 위한 AI 도구 추천
관심사 정리 및 위키 작성
온프레 PVE 서버 자동 배포 구성
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
```

### 11-2) Claude conversation — `관심 신호에서 패턴 찾기`

```text
관심 신호는 패턴이다  브라우저 기록, 검색 기록, 좋아요 로그. 다 쌓아도 신호가 아니다. 반복되는 주제만 남겨야 한다. 큐레이션은 저장이 아니라 판별이다. 안 남길 걸 자르는 능력이 시스템을 만든다.
```

```text
0/4 나는 내 관심사를 모른다
브라우저 기록, 검색 기록, 좋아요 로그.
다 쌓았는데 정작 "나는 무엇에 관심 있나"를 말 못한다.
데이터가 없어서가 아니다.
패턴을 읽지 않아서다.
LLM이 내 행동 데이터를 읽고, 반복 주제만 추려서 위키로 승격시키는 시스템을 만들고 있다.
```

### 11-3) Claude conversation — `M365 Planner와 GitHub Project 연동`

```text
직접적인 공식 연동은 없고, 몇 가지 방법으로 구현 가능합니다.
1. Power Automate (가장 현실적)
2. GitHub Actions + Microsoft Graph API
3. Zapier / Make (n8n)
4. GitHub Project → Planner 단방향 webhook
```

```text
현실적으로 GitHub Project v2와 Planner의 양방향 완전 동기화는 어렵고, 단방향(GitHub → Planner) 또는 이벤트 기반 트리거로 구성하는 게 안정적입니다.
```

```text
3인 개발팀이면 솔직한 추천
그냥 GitHub Project로 완전히 이전하세요.
Planner를 억지로 연동해서 유지하는 비용이 훨씬 큽니다.
```

```text
Virton GitHub Project 초기 세팅 가이드
Status: Backlog / In Progress / Review / Done
Type: Feature / Bug / Release / Infra
Priority: 🔴 High / 🟡 Medium / 🟢 Low
Version: v1.2.0 형태
```

### 11-4) Claude conversation — `Meta 스레드 API 리다이렉트 URL 설정 오류`

```text
Threads API redirect URI 오류는 대부분 몇 가지 흔한 원인이 있어.
1. URI 형식 문제
2. 허용되지 않는 URI
3. 앱 설정 순서 문제
4. 도메인 검증
```

```text
localhost 대신 127.0.0.1 써야 하는 경우 있음 (또는 반대)
ngrok 같은 터널링 URL은 보통 됨
Redirect URI는 Threads API → 설정 에서 입력해야 함 (앱 기본 설정 아님)
```

## 12) Discord target state

Target URL:
- `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026`

Visible body text:

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

이번 런 판단:
- Discord 웹 세션은 로그인 상태가 아니어서 채널 `1490692905604481026` 로 직접 게시할 수 없었음
- 따라서 short note는 로컬 markdown 파일로 저장함

## Filtering notes
- YouTube raw에는 정치/시장/라이브/엔터 노이즈가 섞여 있었지만 요약에서는 제외 예정
- Threads는 API-only 규칙 때문에 웹 activity/reposts/profile을 보지 않았고, API에서 실제로 내려온 own posts/replies만 근거로 삼음
- Threads mentions / keyword_search 는 unavailable 로 명시하고 추정으로 메우지 않음
- Discord는 로그아웃 상태라 전달 성공으로 가장하지 않음

## Why this raw exists
이 파일은 2026-04-21 08:00 interest-signal 수집을 **Threads API-only 규칙**에 맞춰 다시 기록한 evidence store입니다. Threads는 공식 API raw JSON을, 나머지 소스는 라이브 Chrome/CDP에서 보이는 텍스트를 최대한 원문에 가깝게 남겨 두고, 이후 짧은 note/curation에서만 압축합니다.
