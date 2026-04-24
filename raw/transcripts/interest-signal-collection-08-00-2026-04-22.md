# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-22
Run time: 08:00 KST (captured around 08:01–08:12 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ChangkyunAhn` (X), `@ethan13917` (Threads API profile), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`; YouTube subscriptions; X likes/profile; GitHub stars; Google search history; ChatGPT loaded conversations; Claude loaded conversations; Discord target state
- Threads는 이번 런에서도 **웹/CDP를 쓰지 않고 공식 API만 사용**했습니다. 먼저 저장된 token store로 `/refresh_access_token` 을 수행했고, 이후 `/v1.0/me` 로 `user_id=27173231028946699` 를 재확인했습니다. token store 권한은 계속 `0600` 이었습니다.
- non-Threads 소스는 라이브 Chrome/CDP 세션에 직접 붙어서 확인했습니다 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate` 기반).
- 비교 기준: `2026-04-21 19:00`, `2026-04-21 08:00 rerun (Threads API)` raw. 이번 08:00의 상대적 신규 포인트는 **GitHub stars가 10개 → 11개로 늘며 `k2-fsa/OmniVoice` 가 추가된 점**, **X likes 상단이 기존 Claude Code tips 중심에서 `DAG/orchestrator`, `LLM wiki 대체`, `AI engineer용 repo`, `RAG vs CAG / prompt caching` 쪽으로 바뀐 점**, **YouTube가 `Kimi K2.6`, `Hermes Agent + Gemma 4`, `Ceph`, `Claude Code + Aurora DSQL` 같은 인프라/스토리지/서버리스 표면을 더 강하게 드러낸 점** 쪽이었습니다.
- Threads API의 `mentions` 와 `keyword_search` 는 이번에도 모두 앱 access tier 권한 부족(`code=10`, `subcode=4279067`)으로 막혔습니다. likes 전용 surface도 API에 직접 노출되지 않아 Threads는 **own posts + replies** 기준으로만 정리했습니다.
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
- refresh 이후에도 `/me` 가 정상 응답했습니다.
- 이번 런의 Threads 수집 기준 계정은 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

최신 2개는 이번에도 `REPOST_FACADE` 로 내려왔고 본문 텍스트가 직접 노출되지 않았습니다.

```json
{
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYyjYQE5zb",
  "timestamp": "2026-04-21T08:40:16+0000"
}
```

```json
{
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYdUWLk7yM",
  "timestamp": "2026-04-21T05:34:43+0000"
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

간단 해석:
- Threads own-post surface에서는 여전히 **Managed Agents / 운영 습관 / 멀티세션 병렬성** 축이 가장 강합니다.
- 하지만 이번 아침 자체의 상대적 신규성은 Threads보다는 다른 surface(X / GitHub / YouTube) 쪽이 더 컸고, Threads는 전날 저녁 패턴의 강화에 가깝습니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

```json
{
  "timestamp": "2026-04-21T03:24:09+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXvLkxNX",
  "text": "1/5 병렬 실행\n\n보리스의 핵심은 “한 세션을 끝까지 붙잡기”가 아니다. 여러 AI 세션을 동시에 던져놓고, 사람은 막힌 탭을 기다리지 않고 계속 다음 일로 넘어간다. 산출량은 천재 모델 1개보다, 멈추지 않는 작업 큐에서 나온다. 병렬성은 옵션이 아니라 생산성 엔진이다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:22+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOZWVkxRQ",
  "text": "2/5 환경 분리\n\n15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다. 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다. 서로의 변경을 덮어쓰지 않고, 충돌 없이 독립적으로 전진한다. 멀티에이전트의 첫 원칙은 협업보다 격리다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:30+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOaTek43e",
  "text": "3/5 알림 관리\n\n병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:43+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOb7xk_Wy",
  "text": "4/5 공용 규칙\n\n팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다. AI가 실수할 때마다 규칙을 추가해 같은 사고를 반복하지 않게 만든다. 프롬프트를 길게 쓰는 게 핵심이 아니다. 실패를 규칙으로 축적해 팀의 운영체계로 바꾸는 것, 그게 진짜 레버리지다."
}
```

```json
{
  "timestamp": "2026-04-21T03:24:51+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOc3Gk9EI",
  "text": "5/5 셀프 검증과 설계\n\n보리스가 강조한 건 생성보다 검증이다. 브라우저, 시뮬레이터, 실제 서버 실행 환경처럼 AI가 자기 결과를 직접 확인할 루프를 붙이면 품질이 2~3배 뛴다. 그리고 코드는 바로 치지 않는다. plan mode에서 설계를 먼저 굳혀 인간의 후반 디버깅 시간을 줄인다."
}
```

Additional short replies still visible:

```json
{
  "timestamp": "2026-04-21T01:24:37+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYAsg5kxDr",
  "text": "what tools do you use?"
}
```

```json
{
  "timestamp": "2026-04-21T01:26:22+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYA5YZk0PU",
  "text": "어플 뭔가요?"
}
```

간단 해석:
- replies surface에서도 **병렬 실행 / worktree 격리 / 이벤트 기반 호출 / CLAUDE.md 규칙 축적 / self-verification** 이 매우 선명합니다.
- 다만 이것 역시 전날 저녁에 이미 드러난 패턴의 유지/강화입니다.

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
- `keyword_search` 는 `Claude Code`, `Hermes`, `MCP`, `vLLM`, `agent`, `memory`, `GPU`, `Threads API` 전부 같은 permission 오류였음
- 따라서 이번 런의 Threads 강신호는 **own posts + replies** 기준으로만 정리함

## 5) YouTube subscriptions — copied text

Page title:
- `(3) 구독 - YouTube`

Visible AI/infra/tooling headings (verbatim):

```text
Agentic AI for Financial Advisors: Portfolio Analysis, Client Experience and More
China's Kimi K2.6 Agent Swarms are INSANE!
EP 94. Anthropic Opus 4.7 과 낮게 열린 과실들
Hermes Agent + Gemma 4: FREE Private AI Agent!
LIVE: China's NEW Kimi K2.6 + Hermes Agent = Build ANYTHING
Keynote - State of Ceph
Build a serverless app with Claude Code and Aurora DSQL - no expertise required | Databases for AI
Closer than you think: Ceph's journey to nearest neighbor search
Implementing Ceph at GMU's College of Engineering and Computing
AIE Miami Day 2 ft. Cerebras, OpenCode, Cursor, Arize AI, and more!
System Design Course – APIs, Databases, Caching, CDNs, Load Balancing & Production Infra
정형 데이터 분석도 GPU에서 한다! 스냅챗 80% 비용절감 사례 feat. Nvidia cuDF  [GTC 2026 젠슨황 키노트, 세미남784@토크아이티]
```

Visible mixed/non-target items kept raw but intended for exclusion from the short note:

```text
[수요일은 버디버디] 미국-이스라엘, 새로운 전쟁 준비?ㅣ케빈워시 청문회 핵심 메세지
[🔴월간 김종인] "국힘 선대위는 없다? / 장동혁 또 징계 카드 / 민주당 파란 바람 불까?"
[라리가] 33R 레알 마드리드 vs 알라베스 2분 하이라이트
신형 셀토스 보다 잘나가고, 경차보다 싸고 넓은 1천만원대 SUV
```

## 6) X likes — copied text

Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible liked-post excerpts (verbatim):

```text
Python Developer
@Python_Dv
·
Apr 19
𝗘𝘃𝗲𝗿𝘆 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗲𝘃𝗲𝗿 𝗱𝗲𝗯𝘂𝗴𝗴𝗲𝗱 𝗮𝘁 𝟯 𝗔𝗠 𝘄𝗮𝘀 𝗮 𝗴𝗿𝗮𝗽𝗵. 𝗬𝗼𝘂 𝗷𝘂𝘀𝘁 𝗺𝗶𝗴𝗵𝘁 𝗻𝗼𝘁 𝗵𝗮𝘃𝗲 𝗱𝗿𝗮𝘄𝗻 𝗶𝘁 𝘁𝗵𝗮𝘁 𝘄𝗮𝘆.

A DAG (Directed Acyclic Graph) is the structure underneath every modern orchestrator.
```

```text
Artem Zhutov
@ArtemXTech
·
Apr 20
Article
I Replaced Karpathy's LLM Wiki with Something That Actually Works
The top comment on the biggest LLM wiki video says it's "largely worthless for most people."
```

```text
Nav Toor
@heynavtoor
·
Apr 20
If I had to become an AI engineer in 90 days, I would not start with courses.

I would build projects from these 10 GitHub repos.
```

```text
Avi Chawla
@_avichawla
·
Apr 19
RAG vs. CAG, clearly explained!

RAG is great, but it has a major problem:

Every query hits the vector DB. Even for static information that hasn't changed in months.
```

```text
Avi Chawla
@_avichawla
·
Apr 16
Article
Prompt caching in LLMs, clearly explained
A case study on how Claude achieves 92% cache hit-rate
```

```text
kaize
@0x_kaize
·
Mar 30
Article
I stopped hitting Claude's usage limits - 10 things I changed
```

```text
Rony
@Ronycoder
·
Apr 20
Instead of watching an hour of Netflix, watch this 30-minute speech by the Head of Anthropic’s Coding Agents research team.
```

```text
hoeem
@hooeem
·
Apr 10
Article
I want to extend my Claude sessions (full guide).
Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same.
```

## 7) X reposts/profile timeline — copied text

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
```

```text
You reposted
lucas
@lucas_flatwhite
·
Mar 30
"Claude Code 숨겨진 15가지 파워 기능"
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
This is exactly what Microsoft's Agent Lightning solves.
It's an open-source framework that trains ANY AI
```

```text
You reposted
Shann³
@shannholmberg
·
Mar 30
how to set up autoresearch with claude code
how autoresearch works, simplified
it's a pattern that lets AI agents run experiments and improve anything you can measure
```

## 8) GitHub stars — copied text

Page title:
- `Your stars`

Visible repo list (verbatim):

```text
11
All stars
k2-fsa / OmniVoice
jung-wan-kim / memory-bank
first-fluke / oh-my-agent
firecrawl / web-agent
jorgebmann / pyturboquant
shanraisshan / claude-code-best-practice
outsourc-e / hermes-workspace
kipeum86 / legal-agent-orchestrator
Yeachan-Heo / oh-my-codex
hyungyunlim / obsidian-social-archiver-releases
```

Additional copied body excerpt:

```text
k2-fsa / OmniVoice
High-Quality Voice Cloning TTS for 600+ Languages

first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.

firecrawl / web-agent
Open-source web data agent optimized for structured web research

jorgebmann / pyturboquant
A Python implementation of Google's TurboQuant framework (WIP)

outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
```

메모:
- 전날 저녁 raw에서는 stars가 10개였고, 이번 아침에는 `OmniVoice` 가 추가되어 11개가 보였습니다.
- 기존의 **memory / multi-agent harness / web research / Hermes workspace** 축 위에 **voice cloning / TTS** 축이 새로 얹힌 형태입니다.

## 9) Google search history — copied text

Page title:
- `Google - 내 활동`

Visible timestamped lines (verbatim):

```text
오후 10:40
unsloth/Kimi-K2.6 · Hugging Face 을(를) 방문했습니다.
Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.
kimi k2.6 을(를) 검색했습니다.
```

```text
오후 10:34
Claude 을(를) 방문했습니다.
claude 을(를) 검색했습니다.
```

```text
오후 7:37
2/ 핵심은 공유 메모리 계층 mem0도 아니고 Qdrant도 아니고 Ollama ... 을(를) 방문했습니다.
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
```

```text
오후 12:43
kimi api pricing 을(를) 검색했습니다.
claude api pricing 을(를) 검색했습니다.
```

```text
오전 2:05 ~ 1:59
개발자 FAQ - Meta for Developers 을(를) 방문했습니다.
ngrok Log in — Manage Tunnels, Domains & API Gateways 을(를) 방문했습니다.
dashboard ngrok 을(를) 검색했습니다.
Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
threads api 을(를) 검색했습니다.
```

```text
기타 같은 surface에서 보인 항목
openclaw cloud 을(를) 검색했습니다.
openclaw pass 을(를) 검색했습니다.
xterm.js 을(를) 검색했습니다.
claude code discord 을(를) 검색했습니다.
```

## 10) ChatGPT answers — copied text

Loaded conversation titles seen:
- `ACP Editor Integration`
- `공유 메모리 에이전트`
- `Tmux jump-to-backward 원인`

### 10-1) `ACP Editor Integration`

```text
Hermes Agent can run as an ACP (Agent Client Protocol) server
Enables editor-native AI agent behavior instead of CLI/chatbot usage
Communication happens via stdio + JSON-RPC
Turns Hermes into a coding agent embedded inside IDEs

Included:
File ops: read_file, write_file, patch, search_files
Terminal/process execution
Web/browser tools
Memory + session search
Skills system
execute_code, delegate_task
Vision
```

### 10-2) `공유 메모리 에이전트`

```text
TL;DR

이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.

Claude Code Stop hook으로 메모리를 연결하는 방법
세션 종료 시점의 작업 흔적을 공용 메모리로 브로드캐스트하는 핵심 연결부입니다.
```

### 10-3) `Tmux jump-to-backward 원인`

```text
그건 에러가 아니라 tmux의 copy mode 안내문입니다.
tmux가 vi 키바인딩 copy mode를 쓰는 상태에서 대문자 T 를 누르면 jump-to-backward 동작이 실행됩니다.
tmux list-keys -T copy-mode-vi | grep ' T '
unbind -T copy-mode-vi T
set -g mode-keys emacs
```

## 11) Claude answers / recent sidebar — copied text

Recent titles visible in the loaded Claude session sidebar:

```text
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
온프레 PVE 서버 자동 배포 구성
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
GPU 사업 기반 경제적 자유 로드맵
```

Loaded conversation excerpt 1 — `Meta 스레드 API 리다이렉트 URL 설정 오류`:

```text
Threads API redirect URI 오류는 대부분 몇 가지 흔한 원인이 있어.

1. URI 형식 문제
http:// → 로컬호스트 제외하고는 반드시 https://여야 함
끝에 슬래시(/) 유무가 실제 앱 설정이랑 정확히 일치해야 함

2. 허용되지 않는 URI
localhost 대신 127.0.0.1 써야 하는 경우 있음 (또는 반대)
IP 주소 직접 입력은 대부분 거부됨
ngrok 같은 터널링 URL은 보통 됨

3. 앱 설정 순서 문제
앱 유형이 "비즈니스" 또는 "소비자"로 설정되어 있어야 함
"Threads API" 제품이 앱에 추가되어 있어야 함
Redirect URI는 Threads API → 설정 에서 입력해야 함 (앱 기본 설정 아님)
```

Loaded conversation excerpt 2 — `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`:

```text
한국 B2B SaaS 시장의 고질적 문제는 "월 구독료"라는 단어 자체에 대한 저항입니다.
대기업조차도 "연간 라이선스"는 사도 "월 50만원 구독"은 품의가 안 올라가죠.
반면 교육비·컨설팅비·용역비는 무제한으로 씁니다.

구독료 = OPEX, 매달 품의, 효과 측정 압박
교육비 = 인재개발비, 연초 예산에 통으로 편성, 성과 측정 느슨
컨설팅/용역 = 프로젝트 예산, "이번에 한 번" 심리

한국형: "Proxmox 실무 과정 수료 → Virton 대시보드 6개월 무료 → 유료 전환"
결제 단위: 월 구독 ❌ → "연간 인재양성 패키지" ⭕
```

## 12) Discord target state — copied text

Page URL:
- `https://discord.com/channels/1490692905604481024/1490692905604481026`

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
- summary/short note에서는 정치, 스포츠, 차량, 연예/잡담성 항목을 제외했습니다.
- Threads는 API-only 규칙 때문에 웹 activity/reposts/likes fallback을 쓰지 않았습니다.
- ChatGPT/Claude는 실제로 열려 있던 loaded conversations와 visible sidebar만 근거로 사용했습니다.

## Why this raw exists
This file preserves grounded evidence from the 2026-04-22 08:00 collection run so later summary/curation can distinguish raw capture from durable interpretation.
