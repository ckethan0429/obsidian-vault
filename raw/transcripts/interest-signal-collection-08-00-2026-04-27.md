# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-27
Run time: 08:00 KST (captured around 08:00–08:25 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), live logged-in Threads liked page, logged-in Google/YouTube/X/GitHub/ChatGPT/Claude

## Live session notes
- Threads는 이번 08:00 런에서도 **공식 API를 primary path**로 썼고, **liked page만 CDP fallback**으로 확인했습니다.
- `http://127.0.0.1:9222/json/version` / `.../json/list` 가 정상 응답했고, `https://www.threads.com/liked` target도 로그인된 상태로 열렸습니다.
- `/v1.0/me` 는 별도 refresh 없이 정상 응답했고, 앱 스코프 계정은 계속 `user_id=27173231028946699`, `@ethan13917` 입니다.
- YouTube / X / GitHub / Google / ChatGPT / Claude 는 기존 live Chrome/CDP 세션에 열린 상태를 읽었습니다.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_profile_picture_url": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/430222516_8042971535718144_6268404829974212197_n.jpg?...",
  "threads_biography": "ai/비트코인/크립토/it 관심있고 투자합니다.",
  "is_verified": false
}
```

간단 해석:
- login/token 상태는 정상입니다.
- 이번 런의 Threads 수집 기준 계정은 계속 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

```json
{
  "id": "18040847894780735",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXgBkUUk6SM",
  "timestamp": "2026-04-24T04:06:09+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18021764978827681",
  "media_type": "TEXT_POST",
  "text": "요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다. 노가다라고 했으면 귀엽게 봐주려나? 사실 목적성에 맞게 쓰기 위해서는 난 오히려 강력한 모델을 써야하는게 맞다고 본다. 오푸스나 gpt5.4같은\n\n예를들어 간단한 llm 위키 큐레이션을 크론 자동화를 하고있는데 최고 프론티어모델 쓰더라도 라우팅이며 트리아지며 노가다로 깎고 깎아야 하거늘…. \n\n다만 미래를 위해서라도(가격을 계속 올리는) 멀티 모델에 테스트는 해야겠지. 프론티어든 온프레 오픈소스든 근데 이것자체도 하네스인걸?\n\n모델이랑 씨름 노가다 하는게 하네스인데 왜 그말들을 싫어할까?ㅎㅎ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXeAE2qE-n1",
  "timestamp": "2026-04-23T09:14:38+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18217425820320232",
  "media_type": "IMAGE",
  "text": "요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.\n\n작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다. 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbVXtqE2sj",
  "timestamp": "2026-04-22T08:23:00+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "17927998704090443",
  "media_type": "TEXT_POST",
  "text": "AI 인프라의 진짜 승부처\n\n프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ0LAk7UW",
  "timestamp": "2026-04-22T07:43:14+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

간단 해석:
- 새 repost facade(2026-04-24)가 보이지만, 내용 축은 여전히 **AI infra / harness / parallelism** 쪽입니다.
- 2026-04-23의 “하네스” 포스트는 기존 managed-agents / routing / triage 축을 더 직접적으로 밀어줍니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

```json
{
  "timestamp": "2026-04-24T04:06:06+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXgBj-ik78_",
  "text": "인사이트 많이 받고 갑니다!",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false
}
```

```json
{
  "timestamp": "2026-04-22T14:30:07+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요\n솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도\n\n클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true
}
```

```json
{
  "timestamp": "2026-04-22T07:44:39+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true,
  "root_post": { "id": "17927998704090443" }
}
```

간단 해석:
- replies surface는 여전히 **GPU ROI / Ceph / Proxmox / parallel execution** 축을 가리킵니다.

## 4) Threads API — `/mentions` / `keyword_search` / insights

`/mentions` raw excerpt:

```json
{
  "data": []
}
```

이번 런에서 실제 hit가 난 query들만 남기면 다음과 같습니다.

```json
{
  "query": "Claude Code",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "4/7 앱개발의 새 기본값 ... Claude Code + Aurora DSQL ... 서버리스 DB로 바로 운영 붙이기"
}
```

```json
{
  "query": "agent",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실 ... memory-bank, oh-my-agent ... Boris Cherny ..."
}
```

```json
{
  "query": "memory",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실 ... memory-bank, oh-my-agent ..."
}
```

```json
{
  "query": "GPU",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요 ... gpu roi ..."
}
```

```json
{
  "query": "Proxmox",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 ... 운영 가능한 스택"
}
```

```json
{
  "query": "Ceph",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 ... 운영 가능한 스택"
}
```

`MCP`, `vLLM`, `ZFS`, `Hermes`, `Threads API` 는 이번 런에서 실 hit가 없었습니다.

### own post insights excerpt

```json
{
  "id": "18021764978827681",
  "views": 256,
  "likes": 0,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "id": "17927998704090443",
  "views": 842,
  "likes": 1,
  "replies": 7,
  "reposts": 1,
  "quotes": 0
}
```

```json
{
  "id": "18021615854650509",
  "views": 3184,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

```json
{
  "id": "18033386420799468",
  "views": 655,
  "likes": 3,
  "replies": 4,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "id": "18085930580599773",
  "views": 126,
  "likes": 1,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

## 5) Threads liked page — visible text excerpts

### feeltech__
> 4일
> 역시나 제 유튜브에서
> 가장 인기 있는 콘텐츠는 쿠버네티스 강의네요.
> "오버엔지니어링인데 굳이…???" 란 말
> 생각 많이들 하시죠?
> 얼마 전 CNCF 공식 발표를 공유해드리고싶어요.
> "쿠버네티스는 이제 AI의 사실상 운영체제(de facto OS)가 되었다"
> - 컨테이너 쓰는 곳의 82%가 프로덕션에서 K8s 운영 (2023년 66% → 2025년 82%)
> - 생성형 AI 호스팅 조직의 66%가 추론을 K8s에서

### ai_ethan_sns
> 5일
> 구글 CEO 순다르 피차이가 방금 선언했다.
> Gemini 맥(Mac) 데스크톱 앱 공식 출시.
> 핵심은 앱의 기능이 아니다.
> 아이디어에서 네이티브 Swift 앱 프로토타입이 나오기까지 '단 며칠'밖에 안 걸렸다는 속도다.

### unclejobs.ai / AI Threads
> 5일
> Anthropic이 아마존에 향후 10년간
> 약 146조 원(1,000억 달러)을 쏟기로 했습니다.
> 확보하는 전력이 최대 5GW예요.
> 원전 5기가 만드는 전기 전부를 AI 계산에 쓰는 규모.
> 왜 이런 돈이 필요하냐면,
> Anthropic 수입이 1년 만에 3배 넘게 뛰었거든요.

### choi.openai
> 5일
> 코덱스 400만 돌파로 사용량 리셋

간단 해석:
- liked page는 이번에도 **Kubernetes as AI OS / Gemini Mac 속도 / Anthropic-AWS 급 compute / Codex 사용량** 쪽이 강했습니다.
- 잡음성 개인 글은 제외했습니다.

## 6) X — profile / likes visible excerpts

### profile page (`@ChangkyunAhn`)
> You reposted
> Nav Toor
> If I had to become an AI engineer in 90 days, I would not start with courses.
> I would build projects from these 10 GitHub repos.
> 1. LangChain
> The LLM application framework on almost every AI engineer JD.

> You reposted
> hoeem
> I want to extend my Claude sessions (full guide).

> You reposted
> lucas_flatwhite
> Claude Code 숨겨진 15가지 파워 기능

> You reposted
> Moe
> Introducing One.
> The simplest way to connect and monitor AI agents to hundreds of apps.

> You reposted
> Avi Chawla
> Microsoft did it again!
> Building with AI agents almost never works on the first try.
> This is exactly what Microsoft's Agent Lightning solves.

> You reposted
> Shann³
> how to set up autoresearch with claude code

### likes page (`/likes`)
> You might think graphs are just something you learned about in math class - but they're everywhere.
> Think Google Maps, friend connections on social media, visualizing Git branches, etc.
> In this guide,
> @b_eautifulchaos explains how we use graphs in real-world systems

> Every pipeline you have ever debugged at 3 AM was a graph.
> A DAG (Directed Acyclic Graph) is the structure underneath every modern orchestrator.

> Article
> Prompt caching in LLMs, clearly explained
> A case study on how Claude achieves 92% cache hit-rate

> Article
> I stopped hitting Claude's usage limits - 10 things I changed
> Recently I realized that Claude doesn't count the number of messages. it counts tokens.

간단 해석:
- X는 **graphs / DAG / orchestrator / caching / Claude limits / agent tooling** 축을 계속 강화합니다.

## 7) YouTube subscriptions — visible excerpts

> OpenAI의 완승! 방금 나온 덕테잎 vs 나노 바나나 심층 비교! 앙
> 코드팩토리
> 조회수 4.9천회

> Space Agent: New Autonomous AI Agent is INSANE (FREE!)
> Julian Goldie SEO

> NEW ChatGPT Images 2.0 is INSANE!
> Julian Goldie SEO

> ChatGPT Images 2.0 is INSANE + Space Agent
> Julian Goldie SEO

> OpenClaude v0.4 Update is INSANE!
> Julian Goldie SEO

> AWS Lambda durable functions: Best Practices, AI patterns, and Futures | Serverless Office Hours
> AWS Events

> Opus 4.7 VS GPT-5.4 VS Kimi K2.6 Code! 🤯
> Julian Goldie SEO

> OpenClaw 4.21 + OpenAI Image 2 Is WILD!
> Julian Goldie SEO

> OpenClaw X API Update is INSANE!
> Julian Goldie SEO

간단 해석:
- 상단과 중간에 스포츠/엔터테인먼트 노이즈가 섞였지만, 강한 AI/runtime 항목은 위와 같습니다.

## 8) Google My Activity — visible search lines

> 검색
> Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.

> 검색
> Claude 을(를) 방문했습니다.
> 오후 10:34 • 세부정보

> 검색
> Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.

> 검색
> claude api pricing 을(를) 검색했습니다.

> 검색
> Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.

> 검색
> anthropic effective harness for long running agents 을(를) 검색했습니다.

> 검색
> anthropic managed agent 을(를) 검색했습니다.

> 검색
> claude dangerously skip permissions 을(를) 검색했습니다.

> 검색
> claude code discord 을(를) 검색했습니다.

> 검색
> chatgpt 을(를) 검색했습니다.

> 검색
> Threads에서 소통해보세요 을(를) 방문했습니다.

간단 해석:
- Google search/history는 **Claude / Threads API / harness / shared-memory agent / pricing / permission** 쪽으로 계속 붙어 있습니다.

## 9) ChatGPT — conversation excerpts

### `ACP Editor Integration`
> user: Summarize this content
>
> assistant: Here’s a precise, structured summary of the ACP Editor Integration (Hermes Agent) page:
>
> 1. What ACP Integration Is
>
> Hermes Agent can run as an ACP (Agent Client Protocol) server
>
> Enables editor-native AI agent behavior instead of CLI/chatbot usage
>
> Communication happens via stdio + JSON-RPC
>
> What editors can display:
>
> Chat messages
>
> Tool execution activity
>
> File diffs
>
> Terminal commands
>
> Approval prompts
>
> Streaming responses (“thinking” chunks)

### `공유 메모리 에이전트`
> user: 너는 웹페이지 요약 전문가야. 주어진 웹페이지 Url을 잘보고 한국어로 요약해줘.
>
> assistant: TL;DR
>
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
> 중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조입니다.

### `무결성 영어 번역`
> assistant: Design in Figma
> Build with Next.js
> Merge into main

간단 해석:
- ChatGPT는 **ACP / editor-native agent / shared memory / mem0 / Qdrant / Ollama / Hermes Agent** 쪽을 계속 만지고 있습니다.

## 10) Claude — conversation excerpts / recent sidebar

Recent sidebar titles visible on the page included:
- `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`
- `Meta 스레드 API 리다이렉트 URL 설정 오류`
- `AI 연동 가능한 영상편집 툴`
- `관심 신호에서 패턴 찾기`
- `B2B 솔루션 배포 사이클 전략`
- `Claude 코드 권한 우회 방법`
- `온프레 PVE 서버 자동 배포 구성`
- `AI 시대 승진 기준의 변화: 성과에서 대체 불가능성으로`
- `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델`
- `GPU 사업 기반 경제적 자유 로드맵`

### `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델`
> 입력 내용: 지금까지 CK와 이야기한 AI Infra Distribution + 오픈소스 전략을 핵심만 정리해 드리겠습니다.
>
> AI Infrastructure Distribution
>
> 즉
>
> OS + GPU driver + AI runtime + RAG stack + 운영 도구
>
> 를 한 번에 설치되는 AI 서버 플랫폼입니다.
>
> 목표
>
> GPU 서버 → 10분 안에 AI 서버
>
> Open-core 전략이 가장 현실적입니다.
>
> Tier 1 — Container
> docker run ai-stack
>
> Tier 2 — Installer
> curl install-ai-stack.sh
>
> Tier 3 — AI OS
>
> AI distribution OS

### `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`
> 입력 내용: 우리나라는 교육에 돈을 많이쓰지만 상대적으로 saas구독에는 인색해.
>
> 굉장히 날카로운 관찰이에요. 한국 시장의 구조적 특성을 정확히 찌른 포인트라, 제가 본 대로 솔직하게 분석해볼게요.
>
> 구독료 = OPEX, 매달 품의, 효과 측정 압박
>
> 교육비 = 인재개발비, 연초 예산에 통으로 편성, 성과 측정 느슨
>
> 컨설팅/용역 = 프로젝트 예산, "이번에 한 번" 심리
>
> Education-Led SaaS
>
> SaaS-as-Curriculum
>
> Outcome 보장형 Hybrid

### `GPU 사업 기반 경제적 자유 로드맵`
> 입력 내용: 대화 나눈 바탕으로 내가 돈을 많이 벌어 경제적 장로 가는 실질적인 방법을 알려줘
>
> GPU 클라우드 사업 스케일업 (최우선, 가장 큰 레버리지)
>
> 교육 사업 확장 (낮은 리스크, 안정적 캐시카우)
>
> 퀀트 투자 (복리 자산 증식)
>
> 콘텐츠 & 퍼스널 브랜딩 (중장기 복합 수익)

간단 해석:
- Claude는 **GPU business / AI infra distribution / education-led SaaS** 로 계속 수렴합니다.

## Filtering notes
- YouTube의 스포츠/엔터테인먼트 항목은 raw에 남겼지만 요약에는 넣지 않았습니다.
- Threads liked page에서 개인 잡담/저신호 row는 제외했습니다.
- X / Google / Claude / ChatGPT 에서는 AI infra / agent / memory / orchestration / distribution 축만 강하게 남겼습니다.

## Why this raw exists
This file is the evidence store for later summary/curation.
