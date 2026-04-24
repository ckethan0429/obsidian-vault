# Raw Transcript — Interest Signal Collection (19:00 run)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-22
Run time: 19:00 KST run (captured around 19:02–19:06 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), `@ChangkyunAhn` (X), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, own-post insights; Threads liked page `https://www.threads.com/liked`; YouTube subscriptions; X likes/profile; GitHub stars; Google search history; ChatGPT loaded conversations; Claude loaded conversations; Discord target state.
- Threads는 이번 19:00 런에서도 **공식 API를 primary path**로 썼고, **liked page만 CDP fallback**으로 열었습니다.
- token store는 refresh 후에도 `0600` 이었고, `/v1.0/me` 로 `user_id=27173231028946699`, `@ethan13917` 를 다시 확인했습니다.
- non-Threads 소스와 Threads liked page는 라이브 Chrome/CDP 세션에 직접 붙어서 확인했습니다 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate`).
- 비교 기준: 오늘 오전 raw/note (`interest-signal-collection-08-00-2026-04-22.md`, `interest-signal-collection-08-00-2026-04-22-threads-liked-rerun.md`) 와 어제 19:00 raw. 이번 런의 가장 선명한 신규 포인트는 **Threads own-post/reply 체인이 Managed Agents 일반론에서 한 단계 더 내려와 Kimi K2.6 운영비, Anthropic/AWS 컴퓨트 베팅, Ceph/Proxmox/GPU 운영경제성, Claude Code + Aurora DSQL 런타임**으로 이동했다는 점입니다.
- GitHub stars는 오전 rerun의 11개에서 **13개**로 늘었고, 상단이 `AtomicBot-ai/atomic-hermes`, `NousResearch/hermes-agent` 로 바뀌었습니다.
- Discord 대상 채널은 재확인 결과 `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026` 로 리다이렉트되었고, 로그인 폼(`이메일 또는 전화번호`, `비밀번호`, `로그인`)이 보여 브라우저 내부 직접 전송은 불가했습니다.

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
- 이번 19:00 런의 Threads 수집 기준 계정은 계속 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

이번 런에서 가장 중요한 신규 own-post는 **AI 인프라 운영경제성**을 정면으로 밀어붙인 새 글 묶음입니다.

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

가장 최신 repost evidence는 여전히 남아 있습니다.

```json
{
  "id": "18163085524434927",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXafVQ6k75r",
  "timestamp": "2026-04-22T00:30:48+0000"
}
```

간단 해석:
- 오전 rerun 때까지 강했던 Boris-style parallel/worktree/verification 축이, 이번에는 **A100 수량 / 스토리지 / 캐시 / 복구 / 서버리스 DB / 운영비** 쪽으로 더 내려왔습니다.
- `phase마다 나눠 병렬`, `native vs OMX`, `충돌 비용 큰 구간만 병렬` 같은 문장이 실무 분기 기준까지 같이 보여줍니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

새 root post에 붙은 1/7–7/7 chain은 이번 19:00 런의 가장 선명한 신규 evidence입니다.

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ006k6oD",
  "text": "1/7 오픈모델의 기준선\n\nKimi K2.6 같은 오픈모델이 ‘A100 8장, 월 1천5백 정도면 운영 가능’ 같은 숫자로 읽히기 시작하면 판이 바뀐다. 이제 관심은 벤치마크 점수 하나가 아니라 보안 조직도 내부에 들일 수 있냐, 웹서치까지 붙여 실전에 태울 수 있냐로 이동한다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ2obk-32",
  "text": "2/7 클라우드 베팅의 의미\n\nAnthropic/AWS 올인 해석이 강하게 먹히는 이유는 단순하다. 모델 회사도 결국 컴퓨트·배포 파트너십 위에서 커지기 때문이야. 모델은 헤드라인이지만 매출과 락인은 리전, 네트워크, 계약, 조달, 크레딧 구조 같은 밑단에서 굳어진다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ4Q3EyzB",
  "text": "3/7 스토리지가 다시 주인공\n\nCeph가 계속 눈에 밟히는 건 우연이 아니야. 에이전트가 길게 돌고 데이터가 쌓일수록 병목은 금방 모델에서 저장소로 내려온다. 벡터 검색, 로그, 체크포인트, 아카이브를 끝까지 버티는 팀이 결국 운영권과 마진을 같이 가져간다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "4/7 앱개발의 새 기본값\n\nClaude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ8u6ky0Q",
  "text": "5/7 운영자의 새로운 질문\n\n앞으로는 ‘무슨 모델 쓸까?’보다 ‘캐시 hit-rate 얼마냐, GPU 유휴시간 얼마나 줄였냐, 장애 나면 어디서 복구하냐’를 먼저 묻는 사람이 이긴다. AI 인프라 회사의 경쟁력은 똑똑해 보이는 데서 안 나오고, 운영비를 구조적으로 깎는 설계에서 나온다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ_kOk3rR",
  "text": "7/7 참고한 출처들\n\nSource: https://www.threads.com/@mine_asset/post/DXYfl5KE7ax\nhttps://www.threads.com/@keke_appa/post/DXYxERVko1V"
}
```

간단 해석:
- 오늘 오전 liked-page rerun에서 보였던 `Anthropic/AWS`, `Kimi K2.6 / A100 8장` liked evidence가 저녁에는 바로 **own-post argument chain** 으로 재가공됐습니다.
- 이번 chain은 단순 agent hype가 아니라 **운영비·스토리지·배포·락인·조달·서버리스 DB** 쪽으로 명시적으로 이동합니다.

## 4) Threads API — `/mentions` / `keyword_search` / own-post insights

`mentions` 는 이번 런에서도 빈 배열이었습니다.

```json
{
  "data": []
}
```

이번 런에서 실제 hit가 나온 keyword query들만 남기면 다음과 같습니다.

```json
{
  "query": "Claude Code",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "Claude Code + Aurora DSQL 조합이 던지는 메시지도 명확해..."
}
```

```json
{
  "query": "GPU",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다."
}
```

```json
{
  "query": "Ceph",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ4Q3EyzB",
  "text": "Ceph가 계속 눈에 밟히는 건 우연이 아니야... 병목은 금방 모델에서 저장소로 내려온다."
}
```

```json
{
  "query": "Proxmox",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 ... 운영 가능한 스택에서 나온다."
}
```

반면 이번 선택 query 중 `Hermes`, `MCP`, `vLLM`, `ZFS`, `Threads API` 는 빈 결과였습니다.

Top own-post insight snapshot:

```json
{
  "post": "AI 인프라의 진짜 승부처",
  "views": 502,
  "likes": 0,
  "replies": 7,
  "reposts": 0,
  "quotes": 0
}
```

이전 강한 anchor는 계속 유지됩니다.

```json
{
  "post": "에이전트 생산성의 진실",
  "views": 2949,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

간단 해석:
- 오전 rerun에서는 `agent` 위주 hit였는데, 저녁에는 **`Claude Code` / `GPU` / `Proxmox` / `Ceph`** 까지 실제 hit가 늘었습니다.
- 신상 root post는 아직 좋아요는 없지만, 짧은 시간에 reply 7개가 붙어 **반응의 형태가 discussion/chain 쪽**으로 나타났습니다.

## 5) Threads liked page (`https://www.threads.com/liked`) — copied text

Page title:
- `좋아요 • Threads`

Visible text (verbatim):

> feeltech__  
> 10시간  
> 역시나 제 유튜브에서  
> 가장 인기 있는 콘텐츠는 쿠버네티스 강의네요.  
> "오버엔지니어링인데 굳이…???" 란 말  
> 생각 많이들 하시죠?  
> 얼마 전 CNCF 공식 발표를 공유해드리고싶어요.  
> "쿠버네티스는 이제 AI의 사실상 운영체제(de facto OS)가 되었다"  
> 기자 표현이 아니라 CNCF 공식 발표문 제목에 직접 쓴 문구입니다.  
> - 컨테이너 쓰는 곳의 82%가 프로덕션에서 K8s 운영 (2023년 66% → 2025년 82%)  
> - 생성형 AI 호스팅 조직의 66%가 추론을 K8s에서

> ai_ethan_sns  
> 19시간  
> 구글 CEO 순다르 피차이가 방금 선언했다.  
> Gemini 맥(Mac) 데스크톱 앱 공식 출시.  
> 핵심은 앱의 기능이 아니다.  
> 아이디어에서 네이티브 Swift 앱 프로토타입이 나오기까지 '단 며칠'밖에 안 걸렸다는 속도다.

> unclejobs.ai  
> 20시간  
> Anthropic이 아마존에 향후 10년간  
> 약 146조 원(1,000억 달러)을 쏟기로 했습니다.  
> 확보하는 전력이 최대 5GW예요.  
> 원전 5기가 만드는 전기 전부를 AI 계산에 쓰는 규모.  
> 왜 이런 돈이 필요하냐면,  
> Anthropic 수입이 1년 만에 3배 넘게 뛰었거든요.

> choi.openai  
> 19시간  
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
- 오전 rerun에서 liked 상단이 `Anthropic/AWS` + `Kimi K2.6/A100` 쪽이었다면, 이번 19:00 상단은 **Kubernetes as AI OS**, **Gemini 앱 속도/네이티브 프로토타이핑**, **Anthropic/AWS megadeal**, **Codex usage reset** 쪽으로 바뀌었습니다.
- `miing_kue`, `jjjj_trading` 같은 저신호/비핵심 rows는 raw에는 남기되 short note에서는 제외했습니다.

## 6) YouTube subscriptions — copied text

Page title:
- `(3) 구독 - YouTube`

상단 viewport는 정치/운동/투자/Shorts 잡음이 섞여 있었습니다. 그래도 아래쪽/하단 link list에서 AI 관련 항목은 실제로 보였습니다.

Relevant copied excerpts (verbatim):

> 클로드 코드로 100% 자동화 마케팅 에이전트 팀을 만드는 방법 (서브에이전트+스킬+MCP 모두)

> 21:30  
> Space Agent: New Autonomous AI Agent is INSANE (FREE!)  
> Julian Goldie SEO  
> 조회수 16회  
> 5분 전

> 8:16  
> Opus 4.7 VS GPT-5.4 VS Kimi K2.6 Code! 🤯  
> Julian Goldie SEO  
> 조회수 251회  
> 3시간 전

> 10:51  
> OpenClaw 4.21 + OpenAI Image 2 Is WILD!  
> Julian Goldie SEO  
> 조회수 818회  
> 4시간 전

> I Pay for Fewer AI Tools Now... But These 8 Stayed

간단 해석:
- 오전 rerun의 `Kimi + Hermes/Gemma + Ceph + Claude Code/Aurora DSQL` 조합만큼 인프라 쪽이 직접적이진 않았고, 저녁에는 **subagents/skills/MCP**, **agent tooling 비교**, **OpenClaw**, **Kimi code benchmark** 쪽이 더 전면에 있었습니다.
- 스포츠/엔터/일반 투자 영상은 raw에 남기되 summary에서는 제외했습니다.

## 7) X likes — copied text

Page title:
- `(18) Posts liked by ckchain (@ChangkyunAhn) / X`

Visible text (verbatim):

> Python Developer  
> @Python_Dv  
> Apr 19  
> 𝗘𝘃𝗲𝗿𝘆 𝗽𝗶𝗽𝗲𝗹𝗶𝗻𝗲 𝘆𝗼𝘂 𝗵𝗮𝘃𝗲 𝗲𝘃𝗲𝗿 𝗱𝗲𝗯𝘂𝗴𝗴𝗲𝗱 𝗮𝘁 𝟯 𝗔𝗠 𝘄𝗮𝘀 𝗮 𝗴𝗿𝗮𝗽𝗵. 𝗬𝗼𝘂 𝗷𝘂𝘀𝘁 𝗺𝗶𝗴𝗵𝘁 𝗻𝗼𝘁 𝗵𝗮𝘃𝗲 𝗱𝗿𝗮𝘄𝗻 𝗶𝘁 𝘁𝗵𝗮𝘁 𝘄𝗮𝘆.  
> A DAG (Directed Acyclic Graph) is the structure underneath every modern orchestrator.

> Artem Zhutov  
> @ArtemXTech  
> Apr 20  
> I Replaced Karpathy's LLM Wiki with Something That Actually Works  
> The top comment on the biggest LLM wiki video says it's "largely worthless for most people."

> Nav Toor  
> @heynavtoor  
> Apr 20  
> If I had to become an AI engineer in 90 days, I would not start with courses.  
> I would build projects from these 10 GitHub repos.  
> 1. LangChain

> @_avichawla  
> Apr 16  
> Prompt caching in LLMs, clearly explained  
> A case study on how Claude achieves 92% cache hit-rate  
> Every time an AI agent takes a step, it sends the entire conversation history back to the LLM.

> @Ronycoder  
> Apr 20  
> Instead of watching an hour of Netflix, watch this 30-minute speech by the Head of Anthropic’s Coding Agents research team. It will teach you more about vibe coding than 100 paid courses.

Visible status-link evidence actually seen:
- `https://x.com/freeCodeCamp/status/2046258488725193067`
- `https://x.com/Python_Dv/status/2045640266758115329`
- `https://x.com/ArtemXTech/status/2045912259210485815`
- `https://x.com/heynavtoor/status/2046119089475932590`

간단 해석:
- 오전 08:00 런에서 이미 `graphs / LLM wiki critique / AI engineer repo path / prompt caching` 축이 포착됐기 때문에, 이번 X likes는 **신규보다 강화 신호**에 가깝습니다.
- 그래도 prompt-caching / DAG / repo-based learning / Anthropic coding-agents talk 묶음은 여전히 선명합니다.

## 8) X profile / reposts — copied text

Page title:
- `(18) ckchain (@ChangkyunAhn) / X`

Visible repost excerpts (verbatim):

> You reposted  
> Nav Toor  
> @heynavtoor  
> Apr 20  
> If I had to become an AI engineer in 90 days, I would not start with courses.  
> I would build projects from these 10 GitHub repos.

> You reposted  
> hoeem  
> @hooeem  
> Apr 10  
> I want to extend my Claude sessions (full guide).  
> Here’s 4 workflows that integrate Claude Code with NotebookLM to bypass limits...

> You reposted  
> lucas  
> @lucas_flatwhite  
> Mar 30  
> "Claude Code 숨겨진 15가지 파워 기능"

> You reposted  
> Moe  
> @katibmoe  
> Mar 27  
> Introducing One.  
> The simplest way to connect and monitor AI agents to hundreds of apps.  
> 47,000 agentic actions across 250+ apps.

> You reposted  
> Avi Chawla  
> Mar 29  
> Microsoft's Agent Lightning solves...  
> It's an open-source framework that trains ANY AI

> You reposted  
> Shann³  
> @shannholmberg  
> Mar 30  
> how to set up autoresearch with claude code

간단 해석:
- repost surface는 어제 19:00와 거의 같은 축입니다.
- 즉 X profile은 여전히 **Claude Code 세션 확장 / hidden features / 47,000 agentic actions / Agent Lightning / autoresearch** 축을 강화합니다.

## 9) GitHub stars — copied text

Page title:
- `Your stars`

Visible starred-repo excerpts (verbatim):

> Stars  
> 13

> AtomicBot-ai / atomic-hermes  
> The agent that grows with you

> NousResearch / hermes-agent  
> The agent that grows with you

> k2-fsa / OmniVoice  
> High-Quality Voice Cloning TTS for 600+ Languages

> jung-wan-kim / memory-bank

> first-fluke / oh-my-agent  
> Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.

> firecrawl / web-agent  
> Open-source web data agent optimized for structured web research

> shanraisshan / claude-code-best-practice  
> from vibe coding to agentic engineering - practice makes claude perfect

> outsourc-e / hermes-workspace  
> Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.

> kipeum86 / legal-agent-orchestrator  
> An AI legal workflow running on Claude Code. Eight legal agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate to produce legal opinions with full audit trails.

Visible repo-link evidence actually seen:
- `https://github.com/AtomicBot-ai/atomic-hermes`
- `https://github.com/NousResearch/hermes-agent`
- `https://github.com/k2-fsa/OmniVoice`
- `https://github.com/jung-wan-kim/memory-bank`
- `https://github.com/first-fluke/oh-my-agent`
- `https://github.com/firecrawl/web-agent`
- `https://github.com/shanraisshan/claude-code-best-practice`
- `https://github.com/outsourc-e/hermes-workspace`
- `https://github.com/kipeum86/legal-agent-orchestrator`

간단 해석:
- 오전 rerun의 11개에서 **13개로 증가**했습니다.
- 이번 런의 상대적 신규성은 상단에 바로 보인 `atomic-hermes`, `hermes-agent` 로, CK님의 star surface가 **Hermes-centric agent/workspace/memory stack** 쪽으로 더 직접적으로 당겨졌다는 점입니다.

## 10) Google My Activity — copied text

Page title:
- `Google - 내 활동`

Visible text (verbatim):

> 오늘  
> 포함된 주제:  
> 클로드  
> 제미나이  
> 오후 5:48

> 검색  
> 스마트스토어 판매자센터 을(를) 검색했습니다.  
> 오후 4:33

> 검색  
> (주)천유닷컴 을(를) 조회했습니다.  
> 오후 4:24

> 검색  
> 천유 을(를) 검색했습니다.  
> 오후 4:24

> 검색  
> proxlb 을(를) 검색했습니다.  
> 오전 11:26

> 검색  
> 엠피씨 을(를) 조회했습니다.  
> 오전 10:47

> 검색  
> 엠피씨플러스 을(를) 검색했습니다.  
> 오전 10:47

어제까지 이어진 AI/infra 쿼리들은 여전히 raw evidence로 남아 있습니다.

> unsloth/Kimi-K2.6 · Hugging Face 을(를) 방문했습니다.  
> 오후 10:40

> Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.  
> 오후 10:40

> Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.  
> 오후 7:37

> openclaw cloud 을(를) 검색했습니다.

> xterm.js 을(를) 검색했습니다.

> Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.

> threads api 을(를) 검색했습니다.

간단 해석:
- 오전/어제까지 이어진 AI infra 질의 위에, 오늘 상단 slice는 **스마트스토어/천유/proxlb/엠피씨** 같은 **사업/공급/vendor 탐색** 이 더 올라와 있습니다.
- 즉 Google history는 이번 런에서 AI infra 관심축이 사라진 것이 아니라, 그 위에 **실물 사업·유통·운영 거래처 탐색** 이 덧씌워진 상태로 보입니다.

## 11) ChatGPT answers — copied text

### 11-1) `공유 메모리 에이전트`

Visible assistant excerpt (verbatim):

> TL;DR  
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.  
> 중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.

> 글의 핵심은 mem0, Qdrant, Ollama 각각이 아니라,  
> 이 세 가지를 하나의 컬렉션/메모리 계층으로 묶어 여러 도구가 공통 저장소를 읽고 쓰게 만드는 구조입니다.

> provider.allow_fallbacks: false

### 11-2) `ACP Editor Integration`

Visible assistant excerpt (verbatim):

> Hermes Agent can run as an ACP (Agent Client Protocol) server  
> Enables editor-native AI agent behavior instead of CLI/chatbot usage  
> Communication happens via stdio + JSON-RPC

> Included:  
> File ops: read_file, write_file, patch, search_files  
> Terminal/process execution  
> Web/browser tools  
> Memory + session search  
> Skills system  
> execute_code, delegate_task

> ACP sessions are:  
> Managed in-memory (per running server)  
> editor workspace 기준으로 실행  
> durable state 없음 → 장기 운영/자동화에는 별도 state layer 필요

간단 해석:
- ChatGPT 쪽에서는 여전히 **shared memory wiring + Stop hook + provider pinning + idempotency + editor-native ACP runtime** 축이 가장 선명합니다.
- 이번 런에서도 단순 툴 소개보다 **메모리 배선과 세션/상태 설계** 를 강조하는 패턴이 유지됩니다.

## 12) Claude answers — copied text

### 12-1) `AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델`

Visible answer excerpt (verbatim):

> CK가 구상한 제품은  
> AI Infrastructure Distribution  
> 즉  
> OS  
> + GPU driver  
> + AI runtime  
> + RAG stack  
> + 운영 도구  
> 를 한 번에 설치되는 AI 서버 플랫폼입니다.

> 목표  
> GPU 서버 → 10분 안에 AI 서버

> Open-core 전략이 가장 현실적입니다.

> Tier 1 — Container  
> docker run ai-stack

> Tier 2 — Installer  
> curl install-ai-stack.sh

> Tier 3 — AI OS  
> AI distribution OS

### 12-2) `GPU 사업 기반 경제적 자유 로드맵`

Visible answer excerpt (verbatim):

> VirtOn은 연매출 10억, 고객 이탈률 0%, 10개 엔터프라이즈 고객이라는 탄탄한 기반이 있어요.  
> 여기에 GPU 가상화라는 고성장 영역에 이미 진입했고, 교육 사업(연 6천만)까지 돌아가고 있죠.

> 1. GPU 클라우드 사업 스케일업 (최우선, 가장 큰 레버리지)

> 현재 H200/L40s 고객 레퍼런스를 적극 활용해서 동종 업계 고객 3~5개 추가 확보  
> GPU-as-a-Service 월 구독 모델 정착시키기 — 고객당 월 500~2,000만원 반복매출 구조

> 핵심은 "인프라 운영 대행"이 아니라 **"GPU 클라우드 호스팅 사업을 가능하게 해주는 플랫폼"**으로 포지셔닝

간단 해석:
- Claude 쪽은 이번에도 **AI infra distribution / installer / AI OS / GPU cloud platform / 교육+소프트웨어 결합** 쪽을 아주 직접적으로 강조합니다.
- CK님의 장기 관심축이 agent tooling에만 머무르지 않고 **GPU infra 사업화와 배포판 전략** 쪽으로 이어져 있음을 보여줍니다.

## 13) Discord delivery target check

Page title:
- `Discord`

Visible text (verbatim):

> QR 코드 로그인 준비 완료  
> 돌아오신 것을 환영해요!  
> 이메일 또는 전화번호*  
> 비밀번호*  
> 로그인  
> 계정이 필요한가요?  
> 가입하기

간단 해석:
- 대상 채널 `1490692905604481026` 로 직접 열어도 로그인 페이지로 리다이렉트되었습니다.
- 따라서 이번 short note도 로컬 파일로만 저장하고, 브라우저 내부 직접 게시 성공으로 간주하지 않았습니다.

## Filtering notes
- YouTube 상단 viewport의 스포츠/엔터/일반 투자 잡음은 raw에 남기되 short note에서는 제외했습니다.
- Threads liked page의 `miing_kue`, `jjjj_trading` 같은 저신호 rows는 raw evidence로만 남겼습니다.
- X profile의 비AI/비infra 성격 row는 short note에서 제외했습니다.
- `mentions` 는 이번에도 빈 배열이었고, `Hermes` / `MCP` / `vLLM` / `ZFS` / `Threads API` keyword search는 실제 hit가 없었다고 그대로 적었습니다.

## Why this raw exists
This file is the evidence store for later summary/curation. It keeps the copied browser/API evidence separate from the shorter interpretation note and the durable concept page.