# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-23
Run time: 08:00 KST (captured around 08:01–08:08 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), `@ChangkyunAhn` (X), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, own-post insights; Threads liked page `https://www.threads.com/liked`; YouTube subscriptions; X likes/profile; GitHub stars; Google search history; ChatGPT loaded conversations; Claude loaded conversations; Discord target state.
- Threads는 이번 08:00 런에서도 **공식 API를 primary path**로 썼고, **liked page만 CDP fallback**으로 열었습니다.
- token store 확인 결과 저장된 `access_token` 필드는 짧은 잘린 값처럼 보였고 `/v1.0/me` 에서 `Failed to decode` 를 냈습니다. 대신 `long_lived_access_token` 으로 `/refresh_access_token` 을 성공시킨 뒤, refresh된 long-lived token을 `access_token`/`long_lived_access_token` 둘 다에 다시 저장했습니다. token store 권한은 계속 `0600` 이었습니다.
- `/v1.0/me` 는 refresh 이후 정상 응답했고, 이번 런의 Threads 수집 기준 계정은 계속 `user_id=27173231028946699`, `@ethan13917` 였습니다.
- non-Threads 소스와 Threads liked page는 라이브 Chrome/CDP 세션에 직접 붙어서 확인했습니다 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate` 기반).
- 비교 기준: `2026-04-22 19:00` raw/note와 `2026-04-22 08:00` raw/rerun. 이번 08:00의 상대적 신규 포인트는 **YouTube 상단이 `Space Agent`, `ChatGPT Images 2.0 + Space Agent`, `AWS Lambda durable functions`, `Opus 4.7 VS GPT-5.4 VS Kimi K2.6` 쪽으로 바뀐 점**, **X likes 최상단에 `freeCodeCamp graphs` 가 새로 올라와 DAG/orchestrator 축을 보강한 점**, **Google 기록 상단에 `스마트스토어 판매자센터`, `천유닷컴`, `proxlb`, `엠피씨플러스` 같은 사업/벤더 탐색 레이어가 올라온 점** 쪽이었습니다.
- Threads own posts / liked page / GitHub stars는 어젯밤 19:00 런의 **AI infra operating economics** 축을 거의 그대로 유지하는 강화 신호에 가까웠습니다.
- Discord 대상 채널 탭은 이번에도 `discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026` 로 열려 브라우저 내부 직접 전송은 불가했습니다.

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

간단 해석:
- refresh 이후에도 `/me` 가 정상 응답했습니다.
- 이번 08:00 런의 Threads 수집 기준 계정은 계속 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

최신 surface는 어젯밤 새 own-post + repost evidence를 그대로 유지했습니다.

```json
{
  "id": "18217425820320232",
  "media_type": "IMAGE",
  "timestamp": "2026-04-22T08:23:00+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbVXtqE2sj",
  "text": "요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.\n\n작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다. 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요."
}
```

```json
{
  "id": "17927998704090443",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-22T07:43:14+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ0LAk7UW",
  "text": "AI 인프라의 진짜 승부처\n\n프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야."
}
```

최신 repost evidence:

```json
{
  "id": "18163085524434927",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXafVQ6k75r",
  "timestamp": "2026-04-22T00:30:48+0000"
}
```

Earlier strong anchor still present:

```json
{
  "id": "18021615854650509",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:24:04+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다."
}
```

간단 해석:
- own-post surface는 계속 **phase-based parallelism / AI infra operating economics / orchestration discipline** 축을 유지합니다.
- 이번 아침의 Threads 자체는 어젯밤 19:00에서 드러난 결론을 뒤집기보다 그대로 유지하는 쪽입니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

최신 replies 상단에는 어젯밤의 infra chain과 그 뒤 반응이 함께 남아 있었습니다.

```json
{
  "timestamp": "2026-04-22T14:30:07+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요\n솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도\n\n클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다"
}
```

```json
{
  "timestamp": "2026-04-22T07:44:39+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다."
}
```

```json
{
  "timestamp": "2026-04-22T07:44:02+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "4/7 앱개발의 새 기본값\n\nClaude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다."
}
```

```json
{
  "timestamp": "2026-04-22T07:43:19+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ006k6oD",
  "text": "1/7 오픈모델의 기준선\n\nKimi K2.6 같은 오픈모델이 ‘A100 8장, 월 1천5백 정도면 운영 가능’ 같은 숫자로 읽히기 시작하면 판이 바뀐다. 이제 관심은 벤치마크 점수 하나가 아니라 보안 조직도 내부에 들일 수 있냐, 웹서치까지 붙여 실전에 태울 수 있냐로 이동한다."
}
```

간단 해석:
- replies surface는 계속 **Kimi K2.6 운영비 / Ceph·Proxmox·GPU 포지션 / Claude Code + 서버리스 DB / ROI** 쪽을 선명하게 보여줍니다.
- 이번 아침에는 새 chain이 추가되기보다는 어젯밤 infra-economics chain의 지속성과 반응이 확인되었습니다.

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
- `Hermes`
- `MCP`
- `vLLM`
- `Threads API`

간단 해석:
- `/mentions` 는 이번에도 빈 배열이었습니다.
- `keyword_search` 는 여전히 일부 실제 hit가 있고, 이번 hit는 계속 **Claude Code / agent / memory / GPU / Proxmox / Ceph** 묶음에 집중됩니다.

## 5) Threads API — latest own-post insights

Top own-post insight snapshot:

```json
{
  "post": "AI 인프라의 진짜 승부처",
  "views": 736,
  "likes": 1,
  "replies": 7,
  "reposts": 1,
  "quotes": 0
}
```

Still-strong anchor:

```json
{
  "post": "에이전트 생산성의 진실",
  "views": 3023,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

Additional visible anchor:

```json
{
  "post": "Managed Agents",
  "views": 651,
  "likes": 3,
  "replies": 4,
  "reposts": 0,
  "quotes": 0
}
```

간단 해석:
- `AI 인프라의 진짜 승부처` 는 밤사이 **736 views / 7 replies / 1 repost** 까지 올라왔습니다.
- 가장 큰 engagement는 여전히 `에이전트 생산성의 진실` 이지만, 최신 주제는 **운영경제성** 쪽으로 유지됩니다.

## 6) Threads liked page (`https://www.threads.com/liked`) — copied text

Page title:
- `좋아요 • Threads`

Visible text (verbatim):

> feeltech__  
> 23시간  
> 역시나 제 유튜브에서  
> 가장 인기 있는 콘텐츠는 쿠버네티스 강의네요.  
> "오버엔지니어링인데 굳이…???" 란 말  
> 생각 많이들 하시죠?  
> 얼마 전 CNCF 공식 발표를 공유해드리고싶어요.  
> "쿠버네티스는 이제 AI의 사실상 운영체제(de facto OS)가 되었다"  
> - 컨테이너 쓰는 곳의 82%가 프로덕션에서 K8s 운영 (2023년 66% → 2025년 82%)  
> - 생성형 AI 호스팅 조직의 66%가 추론을 K8s에서  
> - 조사 대상 조직의 98%가 클라우드 네이티브 채택  
> 재밌는 건, 예전엔 "쿠버네티스 어렵다"가 도입 1위 장벽이었는데  
> 이젠 "조직 문화 변화(47%)"가 1위로 올라섰다는 점.  
> 도구의 시대는 지나갔고, 이제 사람·조직의 문제라는 뜻이죠.

> ai_ethan_sns  
> 1일  
> 구글 CEO 순다르 피차이가 방금 선언했다.  
> Gemini 맥(Mac) 데스크톱 앱 공식 출시.  
> 핵심은 앱의 기능이 아니다.  
> 아이디어에서 네이티브 Swift 앱 프로토타입이 나오기까지 '단 며칠'밖에 안 걸렸다는 속도다.

> unclejobs.ai  
> 1일  
> Anthropic이 아마존에 향후 10년간  
> 약 146조 원(1,000억 달러)을 쏟기로 했습니다.  
> 확보하는 전력이 최대 5GW예요.  
> 원전 5기가 만드는 전기 전부를 AI 계산에 쓰는 규모.  
> 왜 이런 돈이 필요하냐면,  
> Anthropic 수입이 1년 만에 3배 넘게 뛰었거든요.  
> 두 거대 공룡이 메가딜을 성사시킵니다.

> choi.openai  
> 1일  
> 코덱스 400만 돌파로 사용량 리셋

Anchor/account evidence actually seen:
- `https://www.threads.com/@feeltech__`
- `https://www.threads.com/@feeltech__/post/DXacMwTkuFe`
- `https://www.threads.com/@ai_ethan_sns`
- `https://www.threads.com/@ai_ethan_sns/post/DXZYofAARGD`
- `https://www.threads.com/@unclejobs.ai`
- `https://www.threads.com/@unclejobs.ai/post/DXZVxoPifZH`
- `https://www.threads.com/@choi.openai`
- `https://www.threads.com/@choi.openai/post/DXZdOrrD2zA`

간단 해석:
- liked page 상단은 어젯밤 19:00과 거의 같은 고신호 묶음이 유지됐습니다.
- 핵심은 여전히 **Kubernetes as AI OS / Gemini Mac prototyping speed / Anthropic-AWS compute bet / Codex usage reset** 입니다.

## 7) YouTube subscriptions — copied text

Page title:
- `(3) 구독 - YouTube`

Visible AI/infra/tooling headings (verbatim):

```text
Space Agent: New Autonomous AI Agent is INSANE (FREE!)
ChatGPT Images 2.0 is INSANE + Space Agent
Express Brokers Solve Kafka's Operational Challenges in the Cloud
AWS Lambda durable functions: Best Practices, AI patterns, and Futures | Serverless Office Hours
Opus 4.7 VS GPT-5.4 VS Kimi K2.6 Code! 🤯
3주만에 바이브코딩 끝내실 진지한 팀원분들 모집합니다. | 내 서비스 만드는 법의 모든걸 알려드립니다.
```

Visible mixed/non-target items kept raw but intended for exclusion from the short note:

```text
OpenAI의 완승! 방금 나온 덕테잎 vs 나노 바나나 심층 비교!
1633. 다들 반도체만 보던데, 진짜 돈은 여기!
하이록스가 위험한 이유..
부부싸움 안하는 방법
Eric Cantona leads out his OGFC legends
한국 금융위기 터지기 직전, '이것' 알아야 내 돈 지킨다
```

간단 해석:
- 이번 아침 YouTube 상단은 어제의 Ceph-heavy surface보다 **practical agent tooling + serverless runtime + model/code comparison** 쪽이 더 강합니다.
- `Space Agent`, `AWS Lambda durable functions`, `Opus 4.7 VS GPT-5.4 VS Kimi K2.6` 가 이번 run의 상대적 신규 포인트입니다.

## 8) X likes — copied text

Page URL:
- `https://x.com/ChangkyunAhn/likes`

Visible liked-post excerpts (verbatim):

```text
freeCodeCamp.org
@freeCodeCamp
·
Apr 21
You might think graphs are just something you learned about in math class - but they're everywhere.

Think Google Maps, friend connections on social media, visualizing Git branches, etc.
```

```text
Python Developer
@Python_Dv
·
Apr 19
𝗘𝘃𝗲𝗿𝘆 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗲𝘃𝗲𝗿 𝗱𝗲𝗯𝘂𝗴𝗴𝗲𝗱 𝗮𝘁 𝟯 𝗔𝗠 𝘄𝗮𝘀 𝗮 𝗴𝗿𝗮𝗽𝗵.

A DAG (Directed Acyclic Graph) is the structure underneath every modern orchestrator.
```

```text
Artem Zhutov
@ArtemXTech
·
Apr 20
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

Every query hits the vector DB. Even for static information that hasn't changed in months.
```

```text
Avi Chawla
@_avichawla
·
Apr 16
Prompt caching in LLMs, clearly explained
A case study on how Claude achieves 92% cache hit-rate
```

```text
kaize
@0x_kaize
·
Mar 30
I stopped hitting Claude's usage limits - 10 things I changed
Most people blame Claude for strict limits. I blamed Claude too.
```

Anchor/status URLs actually seen:
- `https://x.com/freeCodeCamp/status/2046258488725193067`
- `https://x.com/Python_Dv/status/2045640266758115329`
- `https://x.com/ArtemXTech/status/2045912259210485815`
- `https://x.com/heynavtoor/status/2046119089475932590`
- `https://x.com/_avichawla/status/2045767552526340205`
- `https://x.com/0x_kaize/status/2038286026284667239`

간단 해석:
- X likes는 어제 DAG / LLM wiki / repo-first AI engineer / CAG / prompt caching 축을 유지하면서, 이번에는 **freeCodeCamp graphs** 가 최상단에 직접 올라와 구조/그래프 관점을 더 노골적으로 보강했습니다.

## 9) X profile / reposts — copied text

Page URL:
- `https://x.com/ChangkyunAhn`

Visible reposted-post excerpts (verbatim):

```text
You reposted
Nav Toor
@heynavtoor
·
Apr 20
If I had to become an AI engineer in 90 days, I would not start with courses.

I would build projects from these 10 GitHub repos.
```

```text
You reposted
hoeem
@hooeem
·
Apr 10
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
This is exactly what Microsoft's Agent Lightning solves.
```

간단 해석:
- profile/reposts는 상대적 신규성보다 **Claude Code / usage limits / agent integrations / Agent Lightning** 축의 강화 쪽입니다.

## 10) GitHub stars — copied text

Page title:
- `Your stars`

Visible text (verbatim):

```text
Stars 13
AtomicBot-ai / atomic-hermes
The agent that grows with you

NousResearch / hermes-agent
The agent that grows with you

k2-fsa / OmniVoice
High-Quality Voice Cloning TTS for 600+ Languages

jung-wan-kim / memory-bank
first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams

firecrawl / web-agent
Open-source web data agent optimized for structured web research

jorgebmann / pyturboquant
shanraisshan / claude-code-best-practice
outsourc-e / hermes-workspace
kipeum86 / legal-agent-orchestrator
```

Repo URLs actually seen:
- `https://github.com/AtomicBot-ai/atomic-hermes`
- `https://github.com/NousResearch/hermes-agent`
- `https://github.com/k2-fsa/OmniVoice`
- `https://github.com/jung-wan-kim/memory-bank`
- `https://github.com/first-fluke/oh-my-agent`
- `https://github.com/firecrawl/web-agent`
- `https://github.com/jorgebmann/pyturboquant`
- `https://github.com/shanraisshan/claude-code-best-practice`
- `https://github.com/outsourc-e/hermes-workspace`
- `https://github.com/kipeum86/legal-agent-orchestrator`

간단 해석:
- GitHub stars는 계속 **13개**로 보였고, 이 뷰에서는 새로 추가된 저장소가 확인되지 않았습니다.
- 상단 구성이 계속 `atomic-hermes`, `hermes-agent`, `OmniVoice`, `memory-bank`, `oh-my-agent` 라는 점 자체가 현재 관심축의 유지 신호입니다.

## 11) Google search history — copied text

Page title:
- `Google - 내 활동`

Visible text (verbatim):

```text
오늘
포함된 주제:
클로드
제미나이

스마트스토어 판매자센터 을(를) 검색했습니다.
(주)천유닷컴 을(를) 조회했습니다.
천유 을(를) 검색했습니다.
proxlb 을(를) 검색했습니다.
엠피씨 을(를) 조회했습니다.
엠피씨플러스 을(를) 검색했습니다.
```

```text
어제
unsloth/Kimi-K2.6 · Hugging Face 을(를) 방문했습니다.
Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.
kimi k2.6 을(를) 검색했습니다.
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
gemini api pricing 을(를) 검색했습니다.
kimi api pricing 을(를) 검색했습니다.
claude api pricing 을(를) 검색했습니다.
openclaw cloud 을(를) 검색했습니다.
openclaw pass 을(를) 검색했습니다.
xterm.js 을(를) 검색했습니다.
개발자 FAQ - Meta for Developers 을(를) 방문했습니다.
ngrok Log in — Manage Tunnels, Domains & API Gateways 을(를) 방문했습니다.
Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
threads api 을(를) 검색했습니다.
```

간단 해석:
- 이번 아침 Google 기록의 상대적 신규성은 **사업/벤더 탐색 레이어** (`스마트스토어 판매자센터`, `천유닷컴`, `proxlb`, `엠피씨플러스`) 입니다.
- 동시에 어젯밤 기록에는 여전히 **Kimi K2.6 / pricing / shared memory infra / Threads API / ngrok / openclaw / xterm.js** 가 남아 있습니다.

## 12) ChatGPT — `ACP Editor Integration` answer excerpt

Conversation title:
- `ACP Editor Integration`

Visible assistant excerpt (verbatim):

```text
Here’s a precise, structured summary of the ACP Editor Integration (Hermes Agent) page:

1. What ACP Integration Is
Hermes Agent can run as an ACP (Agent Client Protocol) server
Enables editor-native AI agent behavior instead of CLI/chatbot usage
Communication happens via stdio + JSON-RPC

Included:
File ops: read_file, write_file, patch, search_files
Terminal/process execution
Web/browser tools
Memory + session search
Skills system
execute_code, delegate_task
Vision

Sessions are not persistent across server restarts
→ 장기 운영/자동화에는 별도 state layer 필요
```

간단 해석:
- ChatGPT surface는 계속 **Hermes ACP = IDE-native agent / ephemeral session / external durable state 필요** 축을 강화합니다.

## 13) ChatGPT — `공유 메모리 에이전트` answer excerpt

Conversation title:
- `공유 메모리 에이전트`

Visible assistant excerpt (verbatim):

```text
TL;DR
이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며,
이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
```

간단 해석:
- ChatGPT surface는 계속 **shared memory wiring / Stop hook / provider pinning / idempotency / local fallback** 을 운영 디테일로 밀고 있습니다.

## 14) Claude — `GPU 사업 기반 경제적 자유 로드맵` answer excerpt

Conversation title:
- `GPU 사업 기반 경제적 자유 로드맵`

Visible answer excerpt (verbatim):

```text
VirtOn은 연매출 10억, 고객 이탈률 0%, 10개 엔터프라이즈 고객이라는 탄탄한 기반이 있어요.
여기에 GPU 가상화라는 고성장 영역에 이미 진입했고, 교육 사업(연 6천만)까지 돌아가고 있죠.

1. GPU 클라우드 사업 스케일업 (최우선, 가장 큰 레버리지)
VirtOn의 "Missing Middle" 포지셔닝은 정확해요.
중견기업들이 AWS/GCP는 비싸고, 자체 구축은 부담스러운 그 틈새가 핵심이에요.

GPU-as-a-Service 월 구독 모델 정착시키기
GPU 고객 20개 이상으로 확장하면 GPU 매출만 연 30~50억 가능
핵심은 "인프라 운영 대행"이 아니라 "GPU 클라우드 호스팅 사업을 가능하게 해주는 플랫폼"으로 포지셔닝
```

간단 해석:
- Claude surface는 계속 **GPU 사업 스케일업 / Missing Middle / GPUaaS / 플랫폼화** 축을 유지합니다.

## 15) Claude — `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델` answer excerpt

Conversation title:
- `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델`

Visible answer excerpt (verbatim):

```text
AI Infrastructure Distribution

OS
+ GPU driver
+ AI runtime
+ RAG stack
+ 운영 도구

GPU 서버 → 10분 안에 AI 서버

AI version of Linux distribution

Open-core 전략이 가장 현실적입니다.

Tier 1 — Container
Tier 2 — Installer
Tier 3 — AI OS
```

간단 해석:
- Claude surface는 계속 **AI infra distribution / installer / AI OS / open-core** 쪽을 명확히 밀고 있습니다.

## 16) Discord target state — copied text

Target URL:
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

간단 해석:
- Discord 대상 채널은 이번에도 로그인 페이지로 열렸습니다.
- 따라서 브라우저 내부 직접 게시를 완료할 수 없었습니다.

## Filtering notes
- Threads liked page에서는 `miing_kue`, `jjjj_trading` 같은 저신호/비핵심 rows를 raw에만 남기고 short note에서는 제외했습니다.
- YouTube의 스포츠/엔터/재테크 잡음은 raw에는 일부 남겼지만 short note에서는 제외 예정입니다.
- X profile와 likes는 겹치는 `repo-first AI engineer`, `Claude usage limit`, `Claude Code hidden features` 축이 있어 short note에서는 중복을 줄일 예정입니다.
- GitHub stars / Threads liked / Threads own-post는 이번 아침에 **신규보다는 강화 신호** 성격이 강했습니다.

## Why this raw exists
This file is the evidence store for later summary/curation.
