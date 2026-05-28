---
source: live Chrome CDP + browser-visible surfaces
date: 2026-05-27
run: 08:00
route_hint: raw_only
route_confidence: 0.84
route_reason: Threads likes surfaced a fresh AI/education sample, but GitHub Stars, YouTube, Google My Activity, ChatGPT, and Claude mostly reinforced the existing agent/runtime/shared-memory lane; no durable new branch emerged.
routing: raw_only
signal_tags:
  - threads
  - github-stars
  - youtube
  - google
  - chatgpt
  - claude
  - reinforcement
---

# Raw Transcript — Interest Signal Collection 08:00 2026-05-27

## Live session notes
- Read the live Chrome CDP target list from `http://127.0.0.1:9222/json/list` and attached to hydrated `type == "page"` targets.
- The browser tool itself was not the source of truth; the live CDP tabs were.
- GitHub Stars was still showing the same top set as the previous baseline even though the account total showed 18 stars.
- Threads likes rotated to a new AI/education sample; the rest of Threads, YouTube, Google My Activity, ChatGPT, and Claude stayed in the same durable lane.

## 1) GitHub Stars — copied text
Page title:
- `Your stars`

Visible text:
> tech-leads-club / agent-skills
>
> smithersai / claude-p
>
> kelseyhightower / kubernetes-the-hard-way
>
> blader / humanizer
>
> code-yeongyu / not-claude-code-emulator
>
> AtomicBot-ai / atomic-hermes
>
> NousResearch / hermes-agent
>
> k2-fsa / OmniVoice
>
> jung-wan-kim / memory-bank
>
> first-fluke / oh-my-agent

Filtering notes:
- The visible top set matches the prior baseline; no new repo was visible in this pass.
- The 18-star count appears to be a broader account total, but the hydrated page only exposed the same top set.

## 2) Threads — likes / activity / reposts / replies / profile
Page titles:
- `좋아요 • Threads`
- `활동 • Threads`
- `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

### Likes surface — fresh visible rows
> choi.openai
> 2026-04-29
> 🚨속보 ) 구글, YBM 협력으로 Gemini에서 토익 문제 제공
>
> bythepulse
> 2026-04-29
> ✅ 1열 직관 부러우면 개추
>
> a__agbolahan
> 2026-04-29
> Wow Harry Kane Look at this 🤯
> 번역하기
>
> unclejobs.ai
> AI Threads
> 2026-04-29
> 2021년 11월,
> 한 사용자가 Warp 이슈에 글을 하나 올렸습니다.
> "터미널처럼 매일 쓰는 도구가
> 어느 날 갑자기 사라지면 곤란합니다."
> 오픈소스로 풀어달라는 요청이었어요.
> 이 글은 5년 동안 살아있었죠.

### Activity surface — representative excerpt
> aje.travel
> 꼭 봐야하는 Andrej Karpathy의 포스팅입니다.
> 
> 최근 아주 흥미로운 제안을 했습니다. AI에게 마지막에 "답변을 HTML로 구조화해줘"라는 문구를 붙여보라는 것입니다.
> 
> 보통 우리는 AI가 주는 텍스트를 채팅창 안에서 읽습니다. 하지만 HTML로 답변을 받으면 그 내용을 복사해서 브라우저로 볼 수 있습니다.
> 이렇게 하면 단순한 글자 뭉치가 아니라, 깔끔한 레이아웃, 표, 심지어 클릭이 가능한 요소들이 포함된 ‘웹페이지’ 형태의 결과물을 얻게 됩니다.

> gptaku_ai
> 저도 블루스택 후 결제까지 했는데 차단당함...
>
> blackbear_ai
> 감사합니다 덕분에 잘되었어요.
>
> godo_ri85
> 아주좋은 아이디어입니다.
>
> agent.choi
> api나 자동화가 압도적입니다.

### Reposts surface — representative excerpt
> ddg.kang
> 2026-04-11
> 4월 11일 기준 AI 코딩 최고 셋업은
> 에르메스(Hermes) + 코덱스 + OmX인듯...
> 
> choi.openai
> 2026-04-13
> Claude Code 정말 잘쓰고 계신가요?
> 최근 깃허브에서 3만 2천 개 이상의 스타를 받으며 트렌딩 1위에 오른 'claude-code-best-practice' 프로젝트가 큰 주목을 받고 있는데요.
> 
> vibe.tip
> [Github] oh-my-codex
> 최근 Claude Code 토큰 제한이 빡빡해지면서 Codex CLI를 찾는 사람이 늘고 있다.
> 
> qjc.ai
> Andrej Karpathy가 AI 코딩의 문제점을 콕 집었어요.
> 그리고 누군가가 그걸 CLAUDE.md 한 파일로 해결했습니다.
> 
> yeon.gyu.kim
> OpenCode
> omo(oh-my-opencode / oh-my-openagent) 오픈코드 만든 사람의 설정 / 카테고리 / 셋업 공유

### Replies / profile
- Replies and profile stayed on the older AI / infra / crypto / opinion lane.
- No new durable branch from those surfaces.

Filtering notes:
- Likes was the only clearly fresh surface.
- The new rows still sit inside the broader AI/workflow lane, so this run stays raw-only.
- Activity and reposts were reinforcement rather than a new concept branch.

## 3) YouTube — subscriptions / watch later / likes
### Subscriptions feed excerpt
> Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
> Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor
> Claude Code is now FREE: Here’s how…
> LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
> What Is an AI Stack? LLMs, RAG, & AI Hardware
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자

### Watch-later excerpt
> State of the Claw — Peter Steinberger
> 바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
> 이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> LiteParse - The Local Document Parser
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI

### Likes page excerpt
> 홈
> Shorts
> 구독
> 내 페이지

Filtering notes:
- The AI/agent rows were already in the same-day baseline pattern.
- Sports / entertainment / live rows continued to dominate the rest of the feed.
- No new durable YouTube signal this run.

## 4) Google My Activity — copied text
Page title:
- `Google 검색 서비스 기록`

Visible text:
> 오늘
> 검색
> 알림 3개
> 포함된 주제:
> KRX:071050
> Google 기능 업데이트
> 박동빈
> 오후 6:48 • 세부정보
>
> 어제
> 검색
> 알림 6개
> 포함된 주제:
> 클로드
> 깃허브
> 파업
> 주식
> 날씨
> 오후 11:02 • 세부정보
>
> 검색
> claude code install 을(를) 검색했습니다.
> 오후 3:10 • 세부정보
>
> 검색
> how to update claude code 을(를) 검색했습니다.
> 오후 3:09 • 세부정보
>
> 검색
> m365 graph api 을(를) 검색했습니다.
> 오후 3:45 • 세부정보
>
> 검색
> threads api 을(를) 검색했습니다.
> 오전 12:44 • 세부정보

Filtering notes:
- The current-day top items matched the prior baseline.
- Older search rows continued to reinforce the Claude Code / Threads API / GitHub / infra lane.
- No new search-history axis surfaced.

## 5) ChatGPT — recent chat surface
Page title:
- `공유 메모리 에이전트`

Visible text:
> 채팅 기록
> 새 채팅
> 채팅 검색
> 최근
> MCP 서버 만들기
> AI로 서버 구성도 그리기
> Proxmox 재부팅 로그 분석
> Proxmox SSH 비밀번호 없이 접속
> Obsidian vault 모바일 동기화 방법
> 프로젝트 관리를 위한 AI 도구 추천
> 관심사 정리 및 위키 작성
> Claude 코드 권한 우회 방법
> 온프레 PVE 서버 자동 배포 구성

> TL;DR
>
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
> 핵심 메시지는 단순합니다.
> 중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.

Filtering notes:
- This recent chat surface remained on the same shared-memory / agent-infra theme as before.
- No new durable branch surfaced.

## 6) Claude — recent chat surface
Page title:
- `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델 - Claude`

Visible text:
> 최근 항목
> 숨기기
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> 어른용 장난감 네이버스토어 판매
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기
> M365 Planner와 GitHub Project 연동
> 플랩풋볼 서비스 분석 및 개선방향
> B2B 솔루션 배포 사이클 전략
> 프로필 편집
> 스레드
> 답글
> 미디어
> 리포스트

> Claude 응답: 굉장히 날카로운 관찰이에요.
> 한국 B2B SaaS 시장의 고질적 문제는 "월 구독료"라는 단어 자체에 대한 저항입니다.
> ...
> "Education-Led SaaS (교육이 입구, SaaS가 lock-in)"
> "SaaS-as-Curriculum (SaaS를 교재로 파는 것)"
> "Outcome 보장형 Hybrid"

Filtering notes:
- The recent Claude workspace stayed on education / software packaging / infra / agent-ops themes.
- No new durable branch surfaced.

## Why this raw exists
This file is the evidence store for later triage and wiki promotion.
