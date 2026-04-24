# Raw Transcript — Interest Signal Collection (08:00 rerun with Threads liked page)

Source: official Threads API + live logged-in Chrome/CDP browser session
Date: 2026-04-22
Run time: 08:00 KST rerun (captured around 10:43–10:52 KST)
Browser: `Chrome/147.0.7727.55`
Threads token store: `~/.config/threads-api/credentials.json`
Accounts seen: `@ethan13917` (Threads API profile), `@ChangkyunAhn` (X), `ckethan0429` (GitHub), logged-in Google/YouTube, logged-in ChatGPT, logged-in Claude

## Live session notes
- 확인한 소스: Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, post insights; Threads liked page `https://www.threads.com/liked`; YouTube subscriptions; X likes/profile; GitHub stars; Google search history; ChatGPT loaded conversations; Claude loaded conversations; Discord target state.
- Threads는 이번 rerun에서도 **공식 API를 primary path**로 썼고, 별도로 **liked page만 CDP fallback**으로 열었습니다.
- token store는 refresh 후에도 `0600` 이었고, `/v1.0/me` 로 `user_id=27173231028946699`, `@ethan13917` 를 다시 확인했습니다.
- non-Threads 소스와 Threads liked page는 라이브 Chrome/CDP 세션에 직접 붙어서 확인했습니다 (`http://127.0.0.1:9222/json/version`, `http://127.0.0.1:9222/json/list`, page target별 `Runtime.evaluate`).
- 비교 기준: 오늘 아침에 이미 저장된 `raw/transcripts/interest-signal-collection-08-00-2026-04-22.md` 와 `2026-04-21 19:00` raw. 이번 rerun의 가장 분명한 추가 포인트는 **Threads liked page가 실제로 열렸고 고신호 liked posts를 확인했다는 점**, 그리고 **Threads API `mentions` / `keyword_search` 상태가 오전 첫 수집 때의 permission-error 패턴과 달리 `mentions=빈 배열`, `keyword_search(agent)=실제 hit` 로 바뀌었다는 점**입니다.
- Discord 대상 채널은 재확인 결과 `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026` 로 리다이렉트되었고, 로그인 폼(`이메일 또는 전화번호`, `비밀번호`, `로그인`)이 보여 브라우저 내부 직접 전송은 불가했습니다.

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
- 이번 rerun의 Threads 수집 기준 계정은 계속 `@ethan13917` 입니다.

## 2) Threads API — `/27173231028946699/threads` raw JSON excerpts

이번 rerun에서 가장 최신 row는 **새 repost evidence** 였습니다.

```json
{
  "id": "18163085524434927",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXafVQ6k75r",
  "timestamp": "2026-04-22T00:30:48+0000"
}
```

앞선 리포스트 evidence도 그대로 보였습니다.

```json
{
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYyjYQE5zb",
  "timestamp": "2026-04-21T08:40:16+0000"
}
```

Strongest visible own post:

```json
{
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:24:04+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다."
}
```

같은 묶음 안에서 계속 보이는 own post anchors:

```json
{
  "media_type": "TEXT_POST",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOTPFkycL",
  "text": "스레드에서 놀고있는 개발자,디자이너 마케터는 망하진 않을듯ㅋㅋㅋㅋㅋ\n이렇게 ai 자료가 넘쳐나는데?"
}
```

```json
{
  "media_type": "TEXT_POST",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMCrQk7nl",
  "text": "Managed Agents\n\n프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다. LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다."
}
```

간단 해석:
- own-post surface는 여전히 **Managed Agents / 운영 습관 / 병렬 실행 / worktree 격리** 축이 핵심입니다.
- 다만 이번 rerun의 진짜 신규성은 own-post 내용 자체보다 **liked page 확인** 쪽이 더 컸습니다.

## 3) Threads API — `/27173231028946699/replies` raw JSON excerpts

고신호 reply thread는 오전 첫 수집 때와 같은 Boris-style 병렬 운영 5연속 묶음이었습니다.

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXvLkxNX",
  "text": "1/5 병렬 실행\n\n보리스의 핵심은 “한 세션을 끝까지 붙잡기”가 아니다. 여러 AI 세션을 동시에 던져놓고, 사람은 막힌 탭을 기다리지 않고 계속 다음 일로 넘어간다. 산출량은 천재 모델 1개보다, 멈추지 않는 작업 큐에서 나온다. 병렬성은 옵션이 아니라 생산성 엔진이다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOZWVkxRQ",
  "text": "2/5 환경 분리\n\n15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다. 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다. 서로의 변경을 덮어쓰지 않고, 충돌 없이 독립적으로 전진한다. 멀티에이전트의 첫 원칙은 협업보다 격리다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOaTek43e",
  "text": "3/5 알림 관리\n\n병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOb7xk_Wy",
  "text": "4/5 공용 규칙\n\n팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다. AI가 실수할 때마다 규칙을 추가해 같은 사고를 반복하지 않게 만든다. 프롬프트를 길게 쓰는 게 핵심이 아니다. 실패를 규칙으로 축적해 팀의 운영체계로 바꾸는 것, 그게 진짜 레버리지다."
}
```

```json
{
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOc3Gk9EI",
  "text": "5/5 셀프 검증과 설계\n\n보리스가 강조한 건 생성보다 검증이다. 브라우저, 시뮬레이터, 실제 서버 실행 환경처럼 AI가 자기 결과를 직접 확인할 루프를 붙이면 품질이 2~3배 뛴다. 그리고 코드는 바로 치지 않는다. plan mode에서 설계를 먼저 굳혀 인간의 후반 디버깅 시간을 줄인다."
}
```

간단 해석:
- replies surface는 계속 **병렬 실행 / worktree 분리 / 이벤트 기반 개입 / CLAUDE.md 규칙 축적 / self-verification** 을 가장 선명하게 보여줍니다.

## 4) Threads API — `/mentions` / `keyword_search` / own-post insights

이번 rerun에서 `mentions` 는 **permission error가 아니라 빈 배열**로 내려왔습니다.

```json
{
  "data": []
}
```

`keyword_search` 는 이번에는 완전히 막히지 않았고, `agent` query에서 실제 hit가 나왔습니다.

```json
{
  "query": "agent",
  "data": [
    {
      "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
      "text": "에이전트 생산성의 진실 ..."
    },
    {
      "permalink": "https://www.threads.com/@ethan13917/post/DXXMWQ2ExXi",
      "text": "다음 병목은 프롬프트가 아니다. 라우팅, 복구, 역할 분리, 도구 오케스트레이션이다."
    },
    {
      "permalink": "https://www.threads.com/@ethan13917/post/DXXMCrQk7nl",
      "text": "Managed Agents ... 세션·하네스·샌드박스를 분리한 운영 시스템"
    }
  ]
}
```

반면 `Claude Code`, `Hermes`, `MCP`, `Ceph` queries는 빈 결과였습니다.

Top own-post insight snapshot:

```json
{
  "post": "에이전트 생산성의 진실",
  "views": 2662,
  "likes": 12,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

다른 visible insight anchors:

```json
{
  "post": "Managed Agents",
  "views": 649,
  "likes": 3,
  "replies": 4,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "post": "스레드에서 놀고있는 개발자,디자이너 마케터는 망하진 않을듯ㅋㅋㅋㅋㅋ",
  "views": 119,
  "likes": 1,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

간단 해석:
- 오전 첫 수집에서 보였던 **access-tier 전면 차단**과 달리, 이번 rerun에서는 `mentions` 와 `keyword_search` 가 적어도 API 레벨에서는 호출 가능했습니다.
- 실질적으로는 `agent` query만 강한 hit를 냈고, 그 hit들도 결국 CK님의 own-post / Managed Agents / orchestration 축을 재확인하는 쪽이었습니다.

## 5) Threads liked page (`https://www.threads.com/liked`) — copied text

Page title:
- `좋아요 • Threads`

Visible text (verbatim):

> 좋아요  
> mine_asset  
> 19시간  
> 🚨 방금 앤트로픽이 역대급 베팅을 했습니다.  
> 아마존 클라우드에 10년간 1,000억 달러.  
> 한화로 약 147조 원.  
> Claude를 만드는 회사가  
> AWS에 올인 선언을 한 겁니다.  
> 이게 AI 산업 판도!!  
> 무슨 의미인지 정리합니다!!

> keke_appa  
> 17시간  
> 키미를 오랫 동안 써오고 있지만 내 생각에는 클로드 소넷 4.5 정도 밖에 되지 않음  
> 참고로 나는 키미 최고 요금제를 3개월 이상 사용 중임  
> 하지만 이번에 오픈소스로 풀었다는 것은 쇼킹함  
> 계산을 해보니 런포드에서 A100 8장으로 돌릴 수가 있음  
> 결론은 월 천 오백만원 정도면 돌릴 수 있다는 결론  
> 대기업이나 공기업에서 보안 때문에 바이브코딩을 못돌렸던 곳들은 충분히 사용 가능  
> 그리고 키미는 정말 웹서치에서는 타의 추종을 불허험

> huggingface.co  
> moonshotai/Kimi-K2.6 · Hugging Face

Lower-signal but still visible liked rows kept as evidence:

> ghil_book_pic  
> 21시간  
> 아니 하이닉스.. 도대체 무슨 일이야..

> brandwake  
> 1일  
> ENTJ 사업가가 많은 이유 (1)

Anchor/account evidence actually seen:
- `https://www.threads.com/@mine_asset`
- `https://www.threads.com/@mine_asset/post/DXYfl5KE7ax`
- `https://www.threads.com/@keke_appa`
- `https://www.threads.com/@keke_appa/post/DXYxERVko1V`
- `https://huggingface.co/moonshotai/Kimi-K2.6`

간단 해석:
- **liked page가 실제로 열렸고**, 적어도 상단 기준으로는 `Anthropic/AWS/Claude` 와 `Kimi K2.6 open-source/A100 economics/web search` 가 가장 강한 고신호였습니다.
- 오전 첫 수집에서는 없던 **새 evidence layer** 였습니다.

## 6) YouTube subscriptions — copied text

Page title:
- `(3) 구독 - YouTube`

Top viewport was mixed/noisy, but below-the-fold high-signal snippets were still visible.

Relevant copied excerpts:

> China's Kimi K2.6 Agent Swarms are INSANE!  
> Julian Goldie SEO

> 데이터 처리,분석도 GPU에서 한다! 스냅챗 80% 비용절감 사례 feat. Nvidia cuDF [GTC 2026 젠슨황 키노트, 세미남784@토크아이티]

> Hermes Agent + Gemma 4: FREE Private AI Agent!

> LIVE: China's NEW Kimi K2.6 + Hermes Agent = Build ANYTHING

> Keynote - State of Ceph

> Build a serverless app with Claude Code and Aurora DSQL - no expertise required | Databases for AI

> Closer than you think: Ceph's journey to nearest neighbor search

Visible mixed/noisy items kept raw but intended for exclusion from the short note:

> [손경제플러스 LIVE] ...  
> 국민의힘 상 치르는데 장동혁은 여행? ...  
> [수요일은 버디버디] 케빈워시 청문회 핵심 메세지 ...

간단 해석:
- 위쪽 viewport는 경제/정치/잡음이 섞여 있었지만, 아래쪽에서는 다시 **Kimi + Hermes + GPU + Ceph + Claude Code/Aurora** 묶음이 살아 있었습니다.

## 7) X likes / profile — copied text

### X likes
Page title:
- `(18) Posts liked by ckchain (@ChangkyunAhn) / X`

Visible liked-post excerpts (verbatim):

> If you're prepping for AI/ML engineer interviews, bookmark this now  
> A free GitHub repo with 300+ Q&As covering:  
> LLM fundamentals  
> RAG pipelines  
> AI agents & MCP  
> Fine-tuning (LoRA, QLoRA, RLHF)  
> Vector DBs & embeddings

> I had the same thought so I've been playing with it in nanochat. E.g. here's 8 agents (4 claude, 4 codex), with 1 GPU each running nanochat experiments ...

> 안드레카파시 OpenClaw 에 대해  
> “지금 당장 보이는 걸 과대평가했다”라고 하면 ...  
> ‘자율적인 LLM 에이전트 네트워크’라는 개념과 잠재력 자체를 과대평가한 건 아니다.

### X profile
Visible repost/profile excerpts (verbatim):

> You reposted  
> StockMarket.News  
> Here’s a list of companies building the backbone of AI.  
> These are the players powering, cooling, and securing the world’s data centers ...

> America is in the middle of a massive construction shift.  
> Over $40 billion worth of data centers are being built right now ...

간단 해석:
- X는 이번 rerun에서 **AI/ML engineer corpus + MCP + multi-agent GPU experiments + OpenClaw/agent-network framing + AI data-center backbone** 쪽을 재강화했습니다.
- 오늘 아침 첫 note에서 잡았던 DAG/wiki/cache 쪽만큼의 신규성은 아니었고, **강화 신호**에 더 가까웠습니다.

## 8) GitHub stars — copied text

Page title:
- `Your stars`

Visible starred-repo excerpts (verbatim):

> Stars  
> 11

> k2-fsa / OmniVoice  
> High-Quality Voice Cloning TTS for 600+ Languages

> jung-wan-kim / memory-bank

> first-fluke / oh-my-agent  
> Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.

> firecrawl / web-agent  
> Open-source web data agent optimized for structured web research

> outsourc-e / hermes-workspace  
> Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.

> kipeum86 / legal-agent-orchestrator  
> An AI legal workflow running on Claude Code. Eight legal agents — each with their own jurisdiction, knowledge base, and MCP tools — collaborate to produce legal opinions with full audit trails.

간단 해석:
- GitHub stars는 **11개 유지**였습니다.
- 따라서 OmniVoice 추가 자체는 오늘 아침 첫 수집에서 이미 포착된 사항이고, 이번 rerun에서는 **voice/TTS + memory/workspace + multi-agent harness** 축의 재확인에 가깝습니다.

## 9) Google My Activity — copied text

Page title:
- `Google - 내 활동`

Visible search-history excerpts (verbatim):

> unsloth/Kimi-K2.6 · Hugging Face 을(를) 방문했습니다.  
> 오후 10:40

> Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.  
> 오후 10:40

> kimi k2.6 을(를) 검색했습니다.  
> 오후 10:40

> Claude 을(를) 방문했습니다.  
> 오후 10:34

> 2/ 핵심은 공유 메모리 계층 mem0도 아니고 Qdrant도 아니고 Ollama ... 을(를) 방문했습니다.  
> 오후 7:37

> Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.  
> 오후 7:37

> openclaw cloud 을(를) 검색했습니다.  
> 오후 12:25

> openclaw pass 을(를) 검색했습니다.  
> 오후 12:25

> xterm.js 을(를) 검색했습니다.  
> 오전 11:55

> 개발자 FAQ - Meta for Developers 을(를) 방문했습니다.  
> 오전 2:05

> ngrok Log in — Manage Tunnels, Domains & API Gateways 을(를) 방문했습니다.  
> 오전 1:59

> Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.  
> 오전 12:44

간단 해석:
- Google history는 **Kimi K2.6 / Claude Code + Telegram agent + mem0 + Qdrant + Ollama / openclaw / xterm.js / Threads API / ngrok** 축을 강하게 재확인했습니다.

## 10) ChatGPT loaded conversations — copied text

### Sidebar / recents actually visible
> AI 인프라 구축 필수 요소  
> 공유 메모리 에이전트  
> ACP Editor Integration  
> Claude Code 원격 제어  
> 하네스 엔지니어링 확장

### Specific chat: `공유 메모리 에이전트`
User-visible assistant excerpt (verbatim):

> TL;DR  
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.  
> 중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.

> 도구가 여러 개여도, 모두가 같은 저장소의 reader/writer가 되면 하나의 작업 환경처럼 동작한다.

### Specific chat: `ACP Editor Integration`
User-visible assistant excerpt (verbatim):

> Hermes Agent can run as an ACP (Agent Client Protocol) server  
> Enables editor-native AI agent behavior instead of CLI/chatbot usage  
> Communication happens via stdio + JSON-RPC

> Hermes exposes a curated toolset optimized for editor workflows  
> File ops, terminal/process execution, web/browser tools, memory + session search, skills system, execute_code, delegate_task, vision

> 👉 Hermes ACP = IDE 안에서 동작하는 “코딩 에이전트 서버 모드”  
> stdio 기반 RPC 통신  
> editor workspace 기준으로 실행  
> 세션은 in-memory  
> durable state 없음 → 장기 운영/자동화에는 별도 state layer 필요

간단 해석:
- ChatGPT는 이번 rerun에서도 **shared memory agent wiring** 과 **ACP editor-native runtime** 를 핵심 표면으로 유지했습니다.

## 11) Claude loaded conversations — copied text

### Claude recents/sidebar actually visible
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델  
> Meta 스레드 API 리다이렉트 URL 설정 오류  
> 관심 신호에서 패턴 찾기  
> M365 Planner와 GitHub Project 연동  
> AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델

### Specific chat: `Meta 스레드 API 리다이렉트 URL 설정 오류`
Visible excerpt (verbatim):

> Threads API redirect URI 오류는 대부분 몇 가지 흔한 원인이 있어.  
> 1. URI 형식 문제 — `https://` / 끝 슬래시 일치 / 공백·특수문자 확인  
> 2. 허용되지 않는 URI — localhost vs 127.0.0.1, IP 직접 입력 거부, ngrok 같은 터널링 URL  
> 3. 앱 설정 순서 문제 — Threads API 제품 추가, Threads API 설정에서 redirect URI 입력  
> 4. 도메인 검증 — 앱 도메인 등록 필요 가능성

### Specific chat: `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`
Visible excerpt (verbatim):

> 한국 B2B SaaS 시장의 고질적 문제는 “월 구독료”라는 단어 자체에 대한 저항입니다. ... 반면 교육비·컨설팅비·용역비는 무제한으로 씁니다.

> B2C에서 이 프레이밍이 더 강력한 이유  
> 한국 부모의 지갑은 “교육”이라는 단어 앞에서 완전히 다른 사람이 됩니다. ... “구독 = 낭비, 교육 = 투자” 라는 프레임 차이입니다.

> OpenClaw Ready Box (가칭)  
> [고객] → [Virton 물리 서버] → [가상 맥 or Linux VM 1인 1개] → [OpenClaw 사전 설치]  
> [온보딩 교육 2~3시간]  
> [텔레그램/Discord 연동까지 “완성된 상태”로 인도]

> 카페24가 이 상품을 출시했다는 건 두 가지를 증명한 거예요:  
> 시장이 실존한다  
> 카페24는 교육을 절대 못 한다

> 카페24는 “집 열쇠”를 팔고, CK는 “인테리어 + 가전 설치 + 살림 매뉴얼”을 파는 겁니다.

> OMO/OMX Ready Workspace  
> Virton Proxmox 서버에 격리된 개발자 VM 1인 1개 제공 ...  
> 비용 상한선(spending cap) 기본 내장 ...  
> HUD/로그 웹 대시보드

간단 해석:
- Claude는 이번 rerun에서도 **Threads API 운영 설정**, **교육+SaaS/호스팅 패키징**, **OpenClaw bootcamp/ready box**, **OMO/OMX managed workspace monetization** 으로 이어지는 productization axis를 강하게 보여줬습니다.

## 12) Discord target state — copied text

Target URL after load:
- `https://discord.com/login?redirect_to=%2Fchannels%2F1490692905604481026%2F1490692905604481026`

Visible text:

> QR 코드 로그인 준비 완료  
> 돌아오신 것을 환영해요!  
> 다시 만나다니 너무 반가워요!  
> 이메일 또는 전화번호*  
> 비밀번호*  
> 비밀번호를 잊으셨나요?  
> 로그인  
> 계정이 필요한가요?  
> 가입하기  
> QR 코드로 로그인

간단 해석:
- Discord 웹 세션은 이번 rerun에서도 **로그아웃 상태**였습니다.
- 따라서 short note를 브라우저 안에서 직접 게시하지 못했습니다.

## Filtering notes
- Threads liked page에서는 `Anthropic/AWS/Claude`, `Kimi K2.6/A100/Hugging Face` 를 고신호로 보고, 하이닉스/MBTI형 사업가 같은 항목은 raw evidence로만 남겼습니다.
- YouTube는 위쪽 viewport의 정치/경제/잡음을 raw에 남기되 short note에서는 제외했습니다.
- X profile의 비AI/비infra 성격 repost는 short note에서 제외했습니다.
- GitHub stars는 이번 rerun에서 새 star가 확인되지 않았으므로 “신규”가 아니라 강화 신호로 취급했습니다.

## Why this raw exists
이 파일은 오늘 08:00 수집의 **rerun evidence store** 입니다. 오전 첫 수집에서 비어 있던 Threads liked surface를 실제로 확인했고, Threads API availability 상태 변화와 ChatGPT/Claude의 구체적 answer surface를 함께 남겨 이후 요약/비교/큐레이션의 근거로 쓰기 위한 raw입니다.
