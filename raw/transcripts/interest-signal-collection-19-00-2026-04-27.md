# Raw Transcript — Interest Signal Collection (19:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-27
Run time: 19:00 KST (captured around 19:00–19:30 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), live logged-in Threads liked page, logged-in Google/YouTube/X/GitHub/ChatGPT/Claude

## Live session notes
- `http://127.0.0.1:9222/json/version` / `.../json/list` responded normally.
- `https://www.threads.com/liked` was open in the live Chrome profile and returned visible liked posts.
- Threads API long-lived token was refreshed and `/v1.0/me` returned the app-scoped profile again.
- This run mostly reinforced the same AI infra / agent / harness / GPU / distribution axis that showed up in the 08:00 pass.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_profile_picture_url": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/...",
  "threads_biography": "ai/비트코인/크립토/it 관심있고 투자합니다.",
  "is_verified": false
}
```

간단 해석:
- login/token 상태는 정상입니다.
- 이번 런의 Threads 수집 기준 계정은 계속 `@ethan13917` 입니다.

## 2) Threads API — own posts / replies / keyword hits

### `/27173231028946699/threads` selected raw excerpts

```json
{
  "id": "17997369674764566",
  "media_type": "TEXT_POST",
  "username": "ethan13917",
  "timestamp": "2026-04-27T00:24:16+0000",
  "text": "다운펌 앞뒤로 강력하게 한거 보면 그렇게 에겐스러울수 없더라. 한달에 한번은 에바고..\n\n 커트를 자주하는게 더 자연스럽고 멋있다",
  "permalink": "https://www.threads.com/@ethan13917/post/DXnWjx9k6Xz",
  "media_product_type": "THREADS",
  "has_replies": false,
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18021764978827681",
  "media_type": "TEXT_POST",
  "username": "ethan13917",
  "timestamp": "2026-04-23T09:14:38+0000",
  "text": "요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다. 노가다라고 했으면 귀엽게 봐주려나? 사실 목적성에 맞게 쓰기 위해서는 난 오히려 강력한 모델을 써야하는게 맞다고 본다. 오푸스나 gpt5.4같은\n\n예를들어 간단한 llm 위키 큐레이션을 크론 자동화를 하고있는데 최고 프론티어모델 쓰더라도 라우팅이며 트리아지며 노가다로 깎고 깎아야 하거늘…. \n\n다만 미래를 위해서라도(가격을 계속 올리는) 멀티 모델에 테스트는 해야겠지. 프론티어든 온프레 오픈소스든 근데 이것자체도 하네스인걸?\n\n모델이랑 씨름 노가다 하는게 하네스인데 왜 그말들을 싫어할까?ㅎㅎ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXeAE2qE-n1",
  "media_product_type": "THREADS",
  "has_replies": false,
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "17927998704090443",
  "media_type": "TEXT_POST",
  "username": "ethan13917",
  "timestamp": "2026-04-22T07:43:14+0000",
  "text": "AI 인프라의 진짜 승부처\n\n프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ0LAk7UW",
  "media_product_type": "THREADS",
  "has_replies": true,
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18021615854650509",
  "media_type": "TEXT_POST",
  "username": "ethan13917",
  "timestamp": "2026-04-21T03:24:04+0000",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "media_product_type": "THREADS",
  "has_replies": false,
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18085930580599773",
  "media_type": "TEXT_POST",
  "username": "ethan13917",
  "timestamp": "2026-04-21T03:23:30+0000",
  "text": "스레드에서 놀고있는 개발자,디자이너 마케터는 망하진 않을듯ㅋㅋㅋㅋㅋ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYO7K5k0S9",
  "media_product_type": "THREADS",
  "has_replies": false,
  "reply_audience": "EVERYONE"
}
```

### `/27173231028946699/replies` selected raw excerpts

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

### `/mentions` / `keyword_search` raw excerpts

```json
{
  "data": []
}
```

This run had real hits for:

```json
{
  "query": "Claude Code",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "4/7 앱개발의 새 기본값  Claude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다."
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
  "id": "17997369674764566",
  "views": 534,
  "likes": 0,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

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
  "views": 3195,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
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

간단 해석:
- 이번 런의 own-post 신호는 여전히 **agent / harness / routing / GPU ROI / Ceph / Proxmox / memory** 축입니다.
- 가장 강한 참여 반응은 `18021615854650509` (`에이전트 생산성의 진실`) 쪽이었습니다.

## 3) Threads liked page — visible text excerpts

### feeltech__
> 4일
> 역시나 제 유튜브에서
> 가장 인기 있는 콘텐츠는 쿠버네티스 강의네요.
> "오버엔지니어링인데 굳이…???" 란 말
> 생각 많이들 하시죠?
> 얼마 전 CNCF 공식 발표를 공유해드리고싶어요.
> "쿠버네티스는 이제 AI의 사실상 운영체제(de facto OS)가 되었다"
> 기자 표현이 아니라 CNCF 공식 발표문 제목에 직접 쓴 문구입니다.
> 수치 몇 개만 보면요 👇
> - 컨테이너 쓰는 곳의 82%가 프로덕션에서 K8s 운영 (2023년 66% → 2025년 82%)
> - 생성형 AI 호스팅 조직의 66%가 추론을 K8s에서
> - 조사 대상 조직의 98%가 클라우드 네이티브 채택

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
> 두 거대 공룡이 메가딜을 성사시킵니다.

### choi.openai
> 5일
> 코덱스 400만 돌파로 사용량 리셋

## 4) YouTube subscriptions — visible text excerpt

> OpenAI의 완승! 방금 나온 덕테잎 vs 나노 바나나 심층 비교! 앙
> 코드팩토리
> 조회수 4.9천회
> •
> 6시간 전
>
> 11:32
> 퇴근하시나요? 모카로 출근하면 어떨까요?...함께 키우실 분들 구인공고!
> 김한용의 MOCAR
> 조회수 80회
> •
> 2분 전
>
> 21:30
> Space Agent: New Autonomous AI Agent is INSANE (FREE!)
> Julian Goldie SEO
> 조회수 16회
> •
> 5분 전
>
> 32:10
> "OpenClaude v0.4 Update is INSANE!"
> Julian Goldie SEO
> 조회수 259회
> •
> 2시간 전
>
> 5:24:28
> 3D Web Development with Blender and Three.js – Create a Cozy Café Portfolio
> freeCodeCamp.org
> 조회수 445회
> •
> 5분 전
>
> 54:36
> Express Brokers Solve Kafka's Operational Challenges in the Cloud
> AWS Events
> 조회수 153회
> •
> 스트리밍 시간: 13시간 전
>
> 16:41
> 비트코인 규모가 커질수밖에 없다. 디파이 코인 위험? [해킹] 켈프, 레이어 제로, 아베
> 비트슈아
> 조회수 2.9천회
> •
> 51분 전

## 5) X profile / likes — visible text excerpts

### X profile reposts
> You reposted
> Nav Toor
> @heynavtoor
> ·
> Apr 20
> If I had to become an AI engineer in 90 days, I would not start with courses.
> I would build projects from these 10 GitHub repos.
> 1. LangChain
> The LLM application framework on almost every AI engineer JD.

> You reposted
> hoeem
> @hooeem
> ·
> Apr 10
> I want to extend my Claude sessions (full guide).
> Are you sick of reading “Claude usage limit reached. Your limit will reset at 7pm”? Same.

> You reposted
> lucas_flatwhite
> "Claude Code 숨겨진 15가지 파워 기능"

> You reposted
> Moe
> "Introducing One."

> You reposted
> Avi Chawla
> "Microsoft did it again!"

### X likes
> freeCodeCamp.org
> @freeCodeCamp
> ·
> Apr 21
> You might think graphs are just something you learned about in math class - but they're everywhere.
> Think Google Maps, friend connections on social media, visualizing Git branches, etc.

> Python Developer
> @Python_Dv
> ·
> Apr 19
> 𝗘𝘃𝗲𝗿𝘆 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗲𝘃𝗲𝗿 𝗱𝗲𝗯𝘂𝗴𝗴𝗲𝗱 𝗮𝘁 𝟯 𝗔𝗠 𝘄𝗮𝘀 𝗮 𝗴𝗿𝗮𝗽𝗵.

> Artem Zhutov
> @ArtemXTech
> ·
> Apr 20
> I Replaced Karpathy's LLM Wiki with Something That Actually Works

> Avi Chawla
> @_avichawla
> ·
> Apr 16
> Prompt caching in LLMs, clearly explained
> A case study on how Claude achieves 92% cache hit-rate

> kaize
> @0x_kaize
> ·
> Mar 30
> I stopped hitting Claude's usage limits - 10 things I changed

## 6) GitHub stars — visible text excerpt

> Skip to content
> ckethan0429
> Type / to search
> User navigation
> Overview
> Repositories
> 41
> Projects
> Packages
> Stars
> 14
>
> STARRED REPOSITORIES
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
>
> AtomicBot-ai / atomic-hermes
> The agent that grows with you
>
> NousResearch / hermes-agent
> The agent that grows with you
>
> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages
>
> jung-wan-kim / memory-bank
> 
> first-fluke / oh-my-agent
> Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
>
> firecrawl / web-agent
> Open-source web data agent optimized for structured web research
>
> jorgebmann / pyturboquant
> A Python implementation of Google's TurboQuant framework (WIP)
>
> shanraisshan / claude-code-best-practice
> from vibe coding to agentic engineering - practice makes claude perfect
>
> outsourc-e / hermes-workspace
> Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.

## 7) Google search history — visible text excerpts

> 검색\nClaude Code + Telegram agent + mem0 + Qdrant + Ollama
> 오후 7:37 • 세부정보
>
> 검색\nClaude 을(를) 방문했습니다.
> 오후 10:34 • 세부정보
>
> 검색\nclaude api pricing 을(를) 검색했습니다.
> 오후 12:43 • 세부정보
>
> 검색\ngemini api pricing 을(를) 검색했습니다.
> 오후 12:43 • 세부정보
>
> 검색\nkimi api pricing 을(를) 검색했습니다.
> 오후 12:43 • 세부정보
>
> 검색\nthreads api 을(를) 검색했습니다.
> 오후 12:44 • 세부정보
>
> 검색\nOpenClaw 대란 + 설치가 로또 수준이다 + 24시간 켜놓고 써야 함 + 맥미니 품귀
> 오후 4:21 • 세부정보
>
> 검색\nproxlb 을(를) 검색했습니다.
> 오전 11:26 • 세부정보
>
> 검색\n엠피씨플러스 을(를) 검색했습니다.
> 오전 10:47 • 세부정보

## 8) ChatGPT answers — visible excerpts

### ACP Editor Integration
> Hermes Agent can run as an ACP (Agent Client Protocol) server
> Enables editor-native AI agent behavior instead of CLI/chatbot usage
> Communication happens via stdio + JSON-RPC
> Included: File ops, Terminal/process execution, Web/browser tools, Memory + session search, Skills system, execute_code, delegate_task, Vision
> Excluded: Messaging delivery, Cron/job scheduling
> Sessions are not persistent across server restarts

### Shared memory agent
> TL;DR
>
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
>
> 중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조
>
> Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback

### English phrasing chat
> Design in Figma
> Build with Next.js
> Merge into main

## 9) Claude answers — visible excerpts

### GPU 사업 기반 경제적 자유 로드맵
> GPU 클라우드 사업 스케일업 (최우선, 가장 큰 레버리지)
> 교육 사업 확장 (낮은 리스크, 안정적 캐시카우)
> 퀀트 투자 (복리 자산 증식)
> 콘텐츠 & 퍼스널 브랜딩 (중장기 복합 수익)
> 가장 빠른 첫 번째 액션은 기존 GPU 고객 성공 사례를 정리해서 동종 업계에 영업하는 것이에요.

### AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
> AI Infrastructure Distribution
> GPU 서버 → 10분 안에 AI 서버
> Open-core 전략이 가장 현실적입니다.
> Tier 1 — Container / Tier 2 — Installer / Tier 3 — AI OS
> 첫 단추는 작아야 합니다.

### 소프트웨어+교육 B2B/B2C
> 한국 시장의 구조적 특성을 정확히 찌른 포인트
> 교육비·컨설팅비·용역비는 무제한으로 씁니다. 같은 돈인데도요.
> Education-Led SaaS (교육이 입구, SaaS가 lock-in)
> SaaS-as-Curriculum (SaaS를 교재로 파는 것)
> B2C로 다시 볼게요.
> 부모가 아이에게 사주는 것 (가장 지갑이 열림)

## Filtering notes
- YouTube는 스포츠/잡음이 많았고, AI/infra/agent 항목만 남겼습니다.
- Threads `mentions` 는 비었고, `MCP` / `vLLM` / `Threads API` keyword search 는 이번 런에서 실 hit가 없었습니다.
- X / Google / ChatGPT / Claude 는 모두 기존 축을 재강화했으며, 새 durable topic 보다는 append_existing 쪽으로 읽힙니다.
- GitHub stars는 agent / memory / harness / Claude Code / Hermes / workspace / web-agent 쪽이 강했습니다.

## Why this raw exists
This file is the evidence store for later summary/curation.
