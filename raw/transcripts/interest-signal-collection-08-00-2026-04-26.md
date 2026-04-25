# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-26
Run time: 08:00 KST (captured around 08:00–08:15 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), live logged-in Threads liked page, logged-in Google/YouTube/X/GitHub/ChatGPT/Claude

## Live session notes
- Threads는 이번 08:00 런에서도 **공식 API를 primary path**로 썼고, **liked page만 CDP fallback**으로 확인했습니다.
- `http://127.0.0.1:9222/json/version` / `.../json/list` 가 정상 응답했고, Threads liked page target(`https://www.threads.com/liked`)도 살아 있었습니다.
- `/v1.0/me` 는 별도 refresh 없이 바로 정상 응답했고, 앱 스코프 계정은 계속 `user_id=27173231028946699`, `@ethan13917` 입니다.
- Discord target page는 여전히 `discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026` 로 잡혀 있어 이번 런에서는 사용하지 않았습니다.

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

최신 surface는 여전히 **repost evidence + harness/infra text posts** 조합입니다.

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

```json
{
  "id": "18021615854650509",
  "media_type": "TEXT_POST",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "timestamp": "2026-04-21T03:24:04+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

간단 해석:
- 새 repost facade(`2026-04-24`)가 보이지만, 내용 축은 여전히 기존의 **AI infra / harness / parallelism** 쪽입니다.
- 2026-04-23의 “하네스” 포스트는 기존 managed-agents / routing / triage 축을 더 직접적으로 밀어줍니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

최신 replies 상단에는 여전히 인프라/에이전트 반응이 함께 남아 있습니다.

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

```json
{
  "timestamp": "2026-04-21T03:24:22+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOZWVkxRQ",
  "text": "Boris Cherny-style 병렬 실행은 한 세션을 붙잡는 게 아니라, 여러 세션을 동시에 던지고 사람은 막힌 탭을 기다리지 않는 방식이다.",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true,
  "root_post": { "id": "18021615854650509" }
}
```

간단 해석:
- replies surface는 여전히 **GPU ROI / Ceph / Proxmox / parallel execution** 축을 가리킵니다.
- 2026-04-24의 짧은 반응은 기존 글의 연장선상에서 들어온 가벼운 피드백입니다.

## 4) Threads API — `/mentions` / `keyword_search`

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

이번 query set에서 빈 결과였던 키워드:
- `MCP`
- `vLLM`
- `Threads API`

간단 해석:
- `/mentions` 는 이번에도 빈 배열이었습니다.
- `keyword_search` 는 여전히 **Claude Code / agent / memory / GPU / Proxmox / Ceph** 묶음에 집중됩니다.
- `MCP`, `vLLM`, `Threads API` 는 이번 런에서 빈 결과였습니다.

## 5) Threads API — latest own-post insights

```json
{
  "post": "요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다.",
  "views": 254,
  "likes": 0,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "post": "AI 인프라의 진짜 승부처",
  "views": 841,
  "likes": 1,
  "replies": 7,
  "reposts": 1,
  "quotes": 0
}
```

```json
{
  "post": "에이전트 생산성의 진실",
  "views": 3163,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

```json
{
  "post": "Managed Agents",
  "views": 655,
  "likes": 3,
  "replies": 4,
  "reposts": 0,
  "quotes": 0
}
```

간단 해석:
- 가장 강한 engagement anchor는 여전히 **에이전트 생산성의 진실**입니다.
- 2026-04-23의 **하네스** 포스트는 engagement는 약하지만, 키워드상으로는 `harness / routing / triage` 축을 직접적으로 강화합니다.

## 6) Threads liked page — CDP fallback

`https://www.threads.com/liked` 는 로그인된 live page로 열렸고, body text에서도 실제 liked rows가 보였습니다.

### Visible text excerpts

```text
좋아요
feeltech__
3일
역시나 제 유튜브에서
가장 인기 있는 콘텐츠는 쿠버네티스 강의네요.
"오버엔지니어링인데 굳이…???" 란 말
생각 많이들 하시죠?
얼마 전 CNCF 공식 발표를 공유해드리고싶어요.
"쿠버네티스는 이제 AI의 사실상 운영체제(de facto OS)가 되었다"
기자 표현이 아니라 CNCF 공식 발표문 제목에 직접 쓴 문구입니다.
수치 몇 개만 보면요 👇
- 컨테이너 쓰는 곳의 82%가 프로덕션에서 K8s 운영 (2023년 66% → 2025년 82%)
- 생성형 AI 호스팅 조직의 66%가 추론을 K8s에서
- 조사 대상 조직의 98%가 클라우드 네이티브 채택
```

```text
ai_ethan_sns
4일
구글 CEO 순다르 피차이가 방금 선언했다.
Gemini 맥(Mac) 데스크톱 앱 공식 출시.
핵심은 앱의 기능이 아니다.
아이디어에서 네이티브 Swift 앱 프로토타입이 나오기까지 '단 며칠'밖에 안 걸렸다는 속도다.
```

```text
unclejobs.ai
AI Threads
4일
Anthropic이 아마존에 향후 10년간
약 146조 원(1,000억 달러)을 쏟기로 했습니다.
확보하는 전력이 최대 5GW예요.
원전 5기가 만드는 전기 전부를 AI 계산에 쓰는 규모.
왜 이런 돈이 필요하냐면,
Anthropic 수입이 1년 만에 3배 넘게 뛰었거든요.
두 거대 공룡이 메가딜을 성사시킵니다.
```

```text
choi.openai
4일
코덱스 400만 돌파로 사용량 리셋
```

### Anchor / URL sample

```json
{
  "text": "feeltech__",
  "href": "https://www.threads.com/@feeltech__"
}
```

```json
{
  "text": "3일",
  "href": "https://www.threads.com/@feeltech__/post/DXacMwTkuFe"
}
```

```json
{
  "text": "ai_ethan_sns",
  "href": "https://www.threads.com/@ai_ethan_sns"
}
```

```json
{
  "text": "4일",
  "href": "https://www.threads.com/@ai_ethan_sns/post/DXZYofAARGD"
}
```

```json
{
  "text": "unclejobs.ai",
  "href": "https://www.threads.com/@unclejobs.ai"
}
```

```json
{
  "text": "4일",
  "href": "https://www.threads.com/@unclejobs.ai/post/DXZVxoPifZH"
}
```

```json
{
  "text": "choi.openai",
  "href": "https://www.threads.com/@choi.openai"
}
```

```json
{
  "text": "4일",
  "href": "https://www.threads.com/@choi.openai/post/DXZdOrrD2zA"
}
```

### Filtering notes
- 유지한 liked rows: Kubernetes as AI OS, Gemini Mac app speed, Anthropic/AWS compute scale, Codex usage reset.
- 제외한 rows: miing_kue / bellman.pub / jjjj_trading 쪽의 정치·잡담·트레이딩 성분.

## 7) YouTube subscriptions — live CDP excerpt

```text
Space Agent: New Autonomous AI Agent is INSANE (FREE!)
ChatGPT Images 2.0 is INSANE + Space Agent
AWS Lambda durable functions: Best Practices, AI patterns, and Futures | Serverless Office Hours
OpenClaw 4.20 Just Changed AI Agents Forever
```

간단 해석:
- 상단과 하단 모두에서 **agent / durable runtime / serverless / OpenClaw** 축이 보였습니다.

## 8) X profile / likes — live CDP excerpt

```text
I want to extend my Claude sessions (full guide).
\"Claude Code 숨겨진 15가지 파워 기능\"
how to set up autoresearch with claude code
A case study on how Claude achieves 92% cache hit-rate
Every time an AI agent takes a step, it sends the entire conversation history back to the LLM.
Instead of watching an hour of Netflix, watch this 30-minute speech by the Head of Anthropic’s Coding Agents research team.
```

간단 해석:
- X 쪽은 **Claude sessions / Claude Code / cache hit-rate / coding agents** 축을 유지했습니다.

## 9) GitHub stars — live CDP excerpt

```text
AtomicBot-ai / atomic-hermes
NousResearch / hermes-agent
jung-wan-kim / memory-bank
first-fluke / oh-my-agent
firecrawl / web-agent
outsourc-e / hermes-workspace
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
```

간단 해석:
- stars 쪽도 **Hermes / memory-bank / oh-my-agent / web-agent / workspace / multi-agent harness** 축이 그대로였습니다.

## 10) Google search history — live CDP excerpt

```text
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
claude api pricing 을(를) 검색했습니다.
Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
threads api 을(를) 검색했습니다.
anthropic effective harness for long running agents 을(를) 검색했습니다.
anthropic managed agent 을(를) 검색했습니다.
claude dangerously skip permissions 을(를) 검색했습니다.
claude code discord 을(를) 검색했습니다.
```

간단 해석:
- Google activity는 **shared memory / Threads API / long-running harness / Claude Code** 조합으로 남아 있었습니다.

## 11) ChatGPT answers — live CDP excerpt

```text
ACP Editor Integration
Hermes Agent can run as an ACP (Agent Client Protocol) server
Memory + session search
execute_code, delegate_task
Turns Hermes into a coding agent embedded inside IDEs
```

```text
공유 메모리 에이전트
Claude Code + Telegram agent + mem0 + Qdrant + Ollama
Stop hook
shared memory layer
```

간단 해석:
- ChatGPT 쪽은 **ACP / editor integration / shared memory agent infra** 를 계속 밀고 있었습니다.

## 12) Claude answers — live CDP excerpt

```text
GPU 사업 기반 경제적 자유 로드맵
Proxmox 교육
GPU 가상화
GPU 클라우드 사업 스케일업
VirtOn
```

```text
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
GPU 서버 → 10분 안에 AI 서버
ai-gpu-setup CLI
3-tier 배포 전략(docker → installer → OS)
```

간단 해석:
- Claude 쪽은 **GPU/Proxmox 사업화 + AI infra distribution** 축이 계속 중심이었습니다.

## Why this raw exists
This file is the evidence store for later summary/curation. It preserves the raw Threads API payload shape and the live liked-page CDP fallback so the routing layer can decide what to keep, append, or promote.
