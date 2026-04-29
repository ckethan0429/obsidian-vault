# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + live Chrome/CDP fallback checks
Date: 2026-04-29
Run time: 08:00 KST
Threads token store: `~/.config/threads-api/credentials.json`
Threads account: `@ethan13917` (`user_id=27173231028946699`)
Saved API dump: `/tmp/interest_signal_2026-04-29.json`

## Live session notes
- Threads API primary path succeeded: `GET /v1.0/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, and post insights all returned.
- Threads liked page was available in the live Chrome/CDP session at `https://www.threads.com/liked` and showed real liked rows instead of a login shell.
- GitHub stars needed a fresh CDP target (`PUT /json/new?https://github.com/stars`) because the existing stars tab was empty; the fresh target rendered successfully.
- Google My Activity was also inspected through a fresh CDP target and showed a real search-history timeline.
- YouTube, X, ChatGPT, and Claude were all available through live CDP page targets in this run.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_biography": "ai/비트코인/크립토/it 관심있고 투자합니다.",
  "is_verified": false
}
```

## 2) Threads API — recent own posts raw excerpts

```json
{
  "id": "18115420996687104",
  "media_type": "TEXT_POST",
  "text": "프론티어 모델을 따라가던지 버티컬 모델을 새롭게 구상하던지 그게 중요한게 아닌거 같다.\n\n중요한건 목표를 가진 기술 리더다. 국가주도로 한다면 누군가 어떤 청사진을 가지고 어느정도 기간을 두고 쭉 이끌어가야한다고 본다. 주변의 잡음이 어느정도 있더라도 뚝심있게 밀고나갈만한 그런사람은 진짜 없는건가..?",
  "permalink": "https://www.threads.com/@ethan13917/post/DXrcrrOE7aR",
  "timestamp": "2026-04-28T14:34:44+0000"
}
```

```json
{
  "id": "18120009229638666",
  "media_type": "TEXT_POST",
  "text": "진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다. \n뭐 해볼라카면 정치한다고 쇼하네.. 지금까지 정부랑 대기업 뭐함??",
  "permalink": "https://www.threads.com/@ethan13917/post/DXqh8AGk9EG",
  "timestamp": "2026-04-28T06:01:25+0000"
}
```

```json
{
  "id": "18077655098185822",
  "media_type": "TEXT_POST",
  "text": "아 코덱스 또 리셋해줬네... 좀 쉬자 엉???",
  "permalink": "https://www.threads.com/@ethan13917/post/DXqeidOkySm",
  "timestamp": "2026-04-28T05:31:43+0000"
}
```

### Recent post insights raw excerpt

```json
{
  "post_id": "18115420996687104",
  "insights": {
    "views": 159,
    "likes": 0,
    "replies": 0,
    "reposts": 0,
    "quotes": 0
  }
}
```

```json
{
  "post_id": "18120009229638666",
  "insights": {
    "views": 322,
    "likes": 2,
    "replies": 0,
    "reposts": 0,
    "quotes": 0
  }
}
```

```json
{
  "post_id": "18077655098185822",
  "insights": {
    "views": 1109,
    "likes": 1,
    "replies": 0,
    "reposts": 0,
    "quotes": 0
  }
}
```

## 3) Threads API — replies raw excerpts

```json
{
  "id": "18116918668668731",
  "media_type": "TEXT_POST",
  "text": "예전에 의문을 제기하는 사람이 있었는데..",
  "permalink": "https://www.threads.com/@ethan13917/post/DXrVWjSkwzH",
  "timestamp": "2026-04-28T13:30:41+0000"
}
```

```json
{
  "id": "18023926694820432",
  "media_type": "TEXT_POST",
  "text": "과거 경험도 큰 자산이 될 겁니다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXq1gk7kzzA",
  "timestamp": "2026-04-28T08:52:26+0000"
}
```

```json
{
  "id": "17874234324597256",
  "media_type": "TEXT_POST",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "timestamp": "2026-04-22T07:44:39+0000"
}
```

## 4) Threads API — mentions / keyword search raw excerpts

`/mentions` returned an empty dataset:

```json
{
  "data": []
}
```

### Keyword search counts

```json
{
  "Claude Code": 1,
  "agent": 5,
  "memory": 3,
  "GPU": 3,
  "Ceph": 2,
  "Proxmox": 1,
  "Hermes": 0,
  "MCP": 0,
  "vLLM": 0,
  "ZFS": 0,
  "Honcho": 0,
  "singlefile": 0,
  "browser": 0,
  "CDP": 0,
  "wiki": 0,
  "obsidian": 0
}
```

## 5) Threads liked page via live CDP — copied text

Page title:
- `좋아요 • Threads`

Visible liked rows (verbatim excerpts):

```text
좋아요
choisungh
14시간
이제 한국 주식시장 시총이
영국 독일 프랑스 시총보다 큼
하드케리
```

```text
ppnique_
22시간
클로드 코드 강의를 13만원에 판다고..?
구독료도 비싸죽겠는데 너무 한 거 아닌가라는 생각이 드네..
그래서 내가 그냥 무료로 알려줄려고 해!
그냥 알려주는 것도 아니고 어떻게 무엇을 해야하는지 세세하게 말이야 😄
앞으로 하나씩 클로드 코드에 관련된 정보들을 공유할려고 하니 꼭 팔로우하고 좋은 정보 챙겨놔!
```

```text
keke_appa
17시간
바이브코딩을 잘한다는 건 결국 코딩을 잘한다는 뜻이고
그래서 객체지향 프로그래밍, 함수형 프로그래밍, 디자인 패턴 같은 개념들을 알고만 있으면 아무 의미가 없다
그걸 기반으로 구조를 나누고 책임을 정의하고 설계를 명령할 수 있어야 한다
AI에게 코드를 맡긴다는 건 그냥 만들어달라고 하는 게 아니다
이건 책임을 분리해라..
상태를 최소화해라 ..
이 부분은 패턴으로 추상화해라..
같은 식으로 구체적으로 지시할 수 있어야 한다.
```

```text
a i_tusol
19시간
썸네일은 클로드 코드
본문은 덕테이프
아니 덕테이프 미쳤다니까 진짜로
```

## 6) X profile / likes via live CDP — copied text

### Profile page (`https://x.com/ChangkyunAhn`)

```text
Learn AI for free directly from top companies.

1 - Anthropic:
http://anthropic.skilljar.com

2 - Google:
http://grow.google/ai

3 - Meta:
http://ai.meta.com/resources/

4 - NVIDIA:
http://developer.nvidia.com/cuda

5 - Microsoft:
http://learn.microsoft.com/en-us/training/

6 - OpenAI:
```

```text
30 Claude Code Commands & Workflows That Feel Like a Cheat Code
Most people install Claude Code…
generate a few snippets… and think “yeah, it’s useful.”
They’ve barely scratched the surface.
I’ve been using it daily for months.
```

```text
If I had to become an AI engineer in 90 days, I would not start with courses.
I would build projects from these 10 GitHub repos.
```

### Likes page (`https://x.com/ChangkyunAhn/likes`)

```text
A DAG (Directed Acyclic Graph) is the structure underneath every modern orchestrator.
```

```text
I Replaced Karpathy's LLM Wiki with Something That Actually Works
The top comment on the biggest LLM wiki video says it's "largely worthless for most people."
```

```text
RAG vs. CAG, clearly explained!
RAG is great, but it has a major problem:
Every query hits the vector DB. Even for static information that hasn't changed in months.
```

```text
Prompt caching in LLMs, clearly explained
A case study on how Claude achieves 92% cache hit-rate
```

## 7) YouTube watch later via live CDP — copied text

Page title:
- `(11) 나중에 볼 동영상 - YouTube`

Visible AI / infra / tooling headings (verbatim):

```text
Hermes Agent + Gemma 4: FREE Private AI Agent!
LIVE: China's NEW Kimi K2.6 + Hermes Agent = Build ANYTHING
Keynote - State of Ceph
Build a serverless app with Claude Code and Aurora DSQL - no expertise required | Databases for AI
Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
What Is an AI Stack? LLMs, RAG, & AI Hardware
EP 70. 100x 엔지니어의 Claude Code 활용법
AI Agent가 뭐길래?🤖 일 도와주는 5개 AI Agent 만들기! (+무료 템플릿)
10 Insane AI Agent Use Cases in n8n! (steal these)
My Proxmox Home Server ... (GPU Passthrough, IOMMU Groups and more)
```

Visible mixed/noisy items were present too, but were excluded from the short note.

## 8) GitHub stars via fresh live CDP target — copied text

Page title:
- `Your stars`

```text
code-yeongyu / not-claude-code-emulator
ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
```

```text
AtomicBot-ai / atomic-hermes
The agent that grows with you
```

```text
NousResearch / hermes-agent
The agent that grows with you
```

```text
k2-fsa / OmniVoice
High-Quality Voice Cloning TTS for 600+ Languages
```

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
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

```text
outsourc-e / hermes-workspace
Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
```

## 9) Google My Activity via live CDP — copied text

Page title:
- `Google - 내 활동`

```text
m365 graph api 을(를) 검색했습니다.
claude code install 을(를) 검색했습니다.
how to update claude code 을(를) 검색했습니다.
codex 을(를) 검색했습니다.
keepalived 을(를) 검색했습니다.
```

```text
unsloth/Kimi-K2.6 · Hugging Face 을(를) 방문했습니다.
Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
Anthropic effective harness for long running agents 을(를) 검색했습니다.
anthropic managed agent 을(를) 검색했습니다.
claude dangerously skip permissions 을(를) 검색했습니다.
claude code discord 을(를) 검색했습니다.
```

```text
https://claude.ai/login?selectAccount=true&returnTo=%2Foauth%2Fauthorize%3Fcode%3Dtrue... 을(를) 방문했습니다.
claude api pricing 을(를) 검색했습니다.
kimi api pricing 을(를) 검색했습니다.
```

## 10) ChatGPT / Claude via live CDP — copied text

### ChatGPT — `공유 메모리 에이전트`

```text
TL;DR

이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다. 핵심 메시지는 단순합니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
```

### ChatGPT recent sidebar titles excerpt

```text
Meta 스레드 API 리다이렉트 URL 설정 오류
Obsidian vault 모바일 동기화 방법
프로젝트 관리를 위한 AI 도구 추천
관심사 정리 및 위키 작성
온프레 PVE 서버 자동 배포 구성
GPU 사업 기반 경제적 자유 로드맵
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
```

### Claude — `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델 - Claude`

```text
한국 B2B SaaS 시장의 고질적 문제는 "월 구독료"라는 단어 자체에 대한 저항입니다.
교육비 = 인재개발비, 연초 예산에 통으로 편성, 성과 측정 느슨
컨설팅/용역 = 프로젝트 예산, "이번에 한 번" 심리
```

```text
"GPU 인프라 운영 역량 내재화 프로그램"
3개월 온사이트 교육 (엔지니어 3~5명 대상)
Virton 대시보드 1년 라이선스 포함
월 1회 아키텍처 리뷰 세션
수료 시 사내 GPU 운영 인증서 발급
```

## Filtering notes
- Kept only the strongest AI/infra/agent/harness/memory/workflow lines.
- Excluded sports, entertainment, and generic engagement-bait noise except where it framed an AI/Claude Code signal.
- This run had more useful live CDP coverage than the prior morning run: Threads liked, X, YouTube, GitHub stars, Google history, ChatGPT, and Claude were all actually readable.
- The GitHub stars surface required a fresh CDP target to avoid the blank shell.

## Why this raw exists
This file is the evidence store for later triage and curation.
