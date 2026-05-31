---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-01
created: 2026-06-01
captured_at: 2026-06-01 08:14 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, ai-agents, claude-code, document-parsing, ai-infra]
route_hint: raw_only
route_confidence: 0.82
route_reason: Morning browser/CDP surfaces added fresh Threads-liked examples around OpenDataLoader PDF licensing, Claude Code /tui, HWP browser tooling, AI-infra engineering, RISC-V, and Codex CLI/Ollama, but the durable axis remains CK's existing agent-tooling / document-parser / AI-infra / operator-control lanes.
routing:
  route: raw_only
  confidence: 0.82
  reasons:
    - Compared against the 2026-05-31 08:00/19:00 social raw transcripts, 22:00 new-target raw, 23:00 Honcho refinement, and current log before judging novelty.
    - The only clearly fresh high-signal rows came from Threads liked-page rotation; YouTube, GitHub Stars, Watch Later, Liked videos, ChatGPT, Claude, and Threads API keyword surfaces mostly repeated recent baselines.
    - Google My Activity only added a low-durability same-day search topic (`탈모증`) plus prior-day Anthropic/MCP context; not enough for durable promotion.
    - X likes/profile remained unusable from the live target and no X signal was inferred.
  signal_tags: [threads-liked, document-parsing, claude-code, codex-cli, ai-infra, github-stars, youtube, google]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/ckethan0429/likes
---

# Raw Transcript — Interest Signal Collection 08:00 2026-06-01

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-01  
Account: `ethan13917` on Threads; `ckethan0429` GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `interest-signal-collection-08-00-2026-06-01.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface page targets were inspected and the hydrated target with the longest useful `document.body.innerText` was used.
- Threads used both live CDP surfaces (`liked`, `activity`, `reposts`, `replies`, `profile`) and the official Threads API for own threads/replies/mentions/keyword snapshots. Token refresh and `/v1.0/me` succeeded; tokens were not logged.
- Raw disposable evidence caches were saved under `wiki/.cache/interest-signals-2026-06-01-0800-cdp.json` and `wiki/.cache/interest-signals-2026-06-01-0800-threads-api.json`.
- Compared against the 2026-05-31 social/browser transcripts, the 2026-05-31 22:00 new-target raw transcript, and the 2026-05-31 23:00 Honcho refinement before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요`

### Newly visible high-signal rows

- URL: https://www.threads.com/@tangokorea/post/DY_tkscE6l6
> tangokorea
> 15시간
> opendataloader pdf 를 공공기관 SI 프로젝트 도입시 고려할 점 #1
> 한글과컴퓨터가 주도하는 오픈소스 PDF 파서인 OpenDataLoader PDF는 PDF 검증 표준 라이브러리인 veraPDF(Dual Lab 개발)를 연동 및 내장하고 있습니다.
> 이 프로젝트 도입시 검토되었던 라이선스 충돌 문제와 해결 과정은 다음과 같이 요약할 수 있습니다.
> OpenDataLoader PDF v2.0을 출시하면서 라이선스를 더욱 허용적인 Apache License 2.0으로 전격 변경했습니다.
> ... 구조적 분리를 통해 해결했습니다.
> ... 상용 파이프라인(RAG 구축 등)에 도입할 때 라이선스 리스크는 매우 낮은 편입니다.

- URL: https://www.threads.com/@roach_log/post/DY_ddsAGhTL
> roach_log
> 17시간
> 오랜만에 클로드 코드를 엄청나게 사용하고 있는데
> /tui fullscreen 이거 겁나게 편하네요.
> view 도 마음에 들고, anthropic 공식문서에서 메모리 사용량도 안정화 된다는데 계속해서 써봐야겠네요

- URL: https://www.threads.com/@tangokorea/post/DY_1-NtkxzP
> tangokorea
> 13시간
> 남들 다 AI로 멋진 거 만들 때
> 나는 hwp 여는 거 만들고 있었음
> 근데 그게 매주 10만 명이 씀
> chromewebstore.google.com/detai…
> URL: https://l.threads.com/?u=https%3A%2F%2Fchromewebstore.google.com%2Fdetail%2Fpgakpjflombjmehnebnbpnalhegaanag%3Futm_source%3Ditem-share-cb

- URL: https://www.threads.com/@slamslam__/post/DZANBkRk1vw
> slamslam__
> 10시간
> AI 인프라 엔지니어링에 대한 해외 자료를 보면
> 머리가 아찔해질 정도로 재미있는 아이디어가 많습니다 ㅋㅋ
> 1. AI 칩의 발열로 대중목욕탕 물을 데운다던지
> 2. 풍력발전기 안에 AI 칩을 넣으면 된다던지
> ... 누군가에게는 새로운 비즈니스 기회로 보일 것 같습니다.

- URL: https://www.threads.com/@minjaekimprime/post/DY__-WgiTdn
> minjaekimprime
> 컴퓨터
> 12시간
> 와 edX에서 RISC-V 프로세서 설계 과정 처음부터 천천히 듣는데
> 한국어로 번역한 사람 내가 처음이라 오래걸린대 ㅋㅋㅋ 한국인 최초 edX RISC-V 설계 과정 듣는 사람 여기요~

- URL: https://www.threads.com/@borel.chu/post/DY_eoS2kmRe
> borel.chu
> 17시간
> 흔한 K-기업의 AI 엔지니어 채용 공고 특징.
> 🚨 [공고] AI 추진단 신설에 따른 '풀스택 AI 오케스트레이터' 채용
> [담당 업무]
> 오픈소스 sLLM 경량화 및 온프레미스 RAG 파이프라인 구축
> 사내 시스템 연동을 위한 데이터 파싱 및 API 개발
> 폐쇄망 환경에서 쿠버네티스 올리고 GPU 클러스터 모니터링 구축
> [지원 자격 및 우대사항]
> 혼자서 IT 자회사 하나를 차릴 수 있는 능력을 보유하신 분

- URL: https://www.threads.com/@qjc.ai/post/DY_MXnPE-JX
> qjc.ai
> 20시간
> Codex, 유료인 줄 알았죠?
> 터미널에서 쓰는 Codex CLI는 따로 있어요.
> 그리고 그건 오픈소스입니다.
> Ollama랑 연결하면 API 토큰 비용 0.

### Filtering note

- These are newly visible versus the immediate 2026-05-31 social/browser baseline, but they reinforce existing durable lanes: document parsing/RAG ingestion, Claude Code ergonomics, local/open-source agent tooling, AI-infra operations, and operator skill breadth.
- Political/lifestyle/noise rows from the same liked surface were preserved only in the disposable CDP cache and not promoted.

## 2) Threads reposts / activity / replies / API — copied text

Reposts URL: https://www.threads.com/@ethan13917/reposts  
Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
Profile URL: https://www.threads.com/@ethan13917  
API base: https://graph.threads.net/v1.0/

### Reposts — stable baseline excerpts

- URL: https://www.threads.com/@catlovessubakba/post/DYKqIjKgUHi
> catlovessubakba
> 2026-05-11
> 온톨로지...하지 말라고 하기 위해 예시를 꺼내보겠습니다
> ... vector DB + BM25 하이브리드로 98% 가까이는 커버가 될 것이라고 장담합니다.
> LLM Wiki 같은거를 적는거 아니구요, 그래프 DB도 아니에요. 진짜 이 방법이 현재의 스탠다드입니다

- URL: https://www.threads.com/@asin_cartel/post/DYG1-Qpj7ob
> asin_cartel
> AI Threads
> 2026-05-09
> 방금 Hermes Meetup 에서 oh-my-hermes를 공개했습니다.
> Hermes를 SaaS 개발/배포/운영 자동화용으로 확장하려는
> Hermes Agent용 “스킬/워크플로우 팩” 입니다.
> GitHub - Salomondiei08/oh-my-hermes: An opinionated workflow layer for building, shipping, and operating apps with Hermes Agent

- URL: https://www.threads.com/@slamslam__/post/DYGWOxQE4AM
> slamslam__
> 2026-05-09
> 최근 인텔과 AMD 주가가 급상승하면서 많은 분들이 CPU 수요에 주목하고 있습니다.
> ... Agentic AI 시대에 진짜로 중요한 CPU의 ’종류’
> ... 차세대 AI 컴퓨터 설계 전략

### Activity / replies — reinforcement excerpts

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다.

- URL: https://www.threads.com/@ma.chi.n.e/post/DYrFnfYE6Cm
> 네 알고 있습니다. 서비스 월간 트래픽이 십만 단위로 넘어가다보니(뷰 수보다 인당 용량이 더 많이 드는 서버라) 자체 인프라를 만들었고, 과금을 거의 제로에 수렴시키는 과정에서 관련 구조를 직접 구축하게 됐습니다.

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh.
- `/threads` and `/replies` returned the same recent own-post/reply baseline as the prior run; no new API-only item after the previous 2026-05-31 snapshot changed the durable interpretation.
- `/mentions` returned 200 with no highlighted durable hit.
- `keyword_search` for `agent`, `Claude Code`, `Codex`, `Ceph` returned older CK-authored posts already captured in earlier runs.

Relevant copied API examples:

- URL: https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk
> 4/4 지금 봐야 할 것:
> 배포, 인증, 저장, GPU, 관측을 묶는가. 묶인 순간 에이전트는 기능이 아니라 사업이 된다.

- URL: https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx
> 6/7 지금 잡아야 할 포지션
> 그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다.

Routing note: CDP liked rows had fresh surface rotation; API/reposts/activity/replies were reinforcement-only.

## 3) YouTube subscriptions — copied text

Surface URL: https://www.youtube.com/feed/subscriptions  
Page title: `(42) 구독 - YouTube`

### High-signal rows visible in this run

- URL: https://www.youtube.com/watch?v=5HVPeux24WU
> Embrace long-running tasks with Opus 4.8 and Claude Code
> Claude
> 조회수 5만회
> 6시간 전

- URL unavailable: live row had no canonical anchor in the extracted subset; surface URL above retained.
> How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust
> AI Engineer
> 6명 시청 중
> 라이브

- URL: https://www.youtube.com/watch?v=DX4HERWHCbA
> Vibe Coding With Claude Opus 4.8
> BridgeMind
> 조회수 2.4만회
> 스트리밍 시간: 2시간 전

- URL: https://www.youtube.com/watch?v=VsSvHd1bO04
> I Helped My 50-Year-Old Brother Build a One Person AI Business In 1 Month ($214/Day With Claude)
> Shane Hummus
> 조회수 366회
> 1시간 전

- URL: https://www.youtube.com/watch?v=Wx0C42-S5z4&t=12s
> EP 98. AI가 실행하는 시대, 인간에게 남는 건 '의도' (Hashed 김서준 대표)
> 노정석

- URL: https://www.youtube.com/watch?v=BFH9D05UFvM
> Fine-Tuning, Clearly Explained (it's easier than you think)
> David Ondrej

### Filtering note

- These YouTube rows largely repeat the 2026-05-29 / 2026-05-31 Claude Code, observability, one-person AI business, fine-tuning, and operator-intent lanes.
- Sports, entertainment, politics, finance, and generic lifestyle rows were present in the mixed viewport but excluded from durable interpretation.

## 4) YouTube liked videos / Watch Later — copied text

Liked surface URL: https://www.youtube.com/playlist?list=LL  
Watch Later surface URL: https://www.youtube.com/playlist?list=WL

### Liked videos — stable baseline excerpts

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=5&t=413s
> Andrej Karpathy: From Vibe Coding to Agentic Engineering
> Sequoia Capital
> 조회수 116만회 • 4주 전

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=6
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers
> 조회수 2.1만회 • 1개월 전

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=8&t=22s
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16
> 조회수 4.3천회 • 1개월 전

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=9&t=17s
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer
> 조회수 13만회 • 1개월 전

### Watch Later — stable baseline excerpts

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=1&t=62s
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology
> 조회수 8.6만회 • 3주 전

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=3
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler
> 조회수 2.8만회 • 3주 전

- URL: https://www.youtube.com/watch?v=zgNvts_2TUE&list=WL&index=6&t=65s
> State of the Claw — Peter Steinberger
> AI Engineer
> 조회수 14만회 • 1개월 전

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=12&t=108s
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung
> 조회수 26만회 • 2개월 전

Routing note: stable reinforcement; no new durable YouTube playlist change.

## 5) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

### Visible starred repositories

- URL: https://github.com/tech-leads-club/agent-skills
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
> TypeScript 4,487 392

- URL: https://github.com/smithersai/claude-p
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.
> Zig 340 28

- URL: https://github.com/kelseyhightower/kubernetes-the-hard-way
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.

- URL: https://github.com/blader/humanizer
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text

- URL: https://github.com/code-yeongyu/not-claude-code-emulator
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

- URL: https://github.com/AtomicBot-ai/atomic-hermes
> AtomicBot-ai / atomic-hermes
> The agent that grows with you

- URL: https://github.com/NousResearch/hermes-agent
> NousResearch / hermes-agent
> The agent that grows with you

- URL: https://github.com/first-fluke/oh-my-agent
> first-fluke / oh-my-agent
> Portable, vendor-agnostic agent harness for project-specific skills, workflows, and agent teams aligned with your codebase, conventions, and engineering standards.

Routing note: unchanged from 2026-05-31; `agent-skills`, `claude-p`, `humanizer`, `not-claude-code-emulator`, `atomic-hermes`, `hermes-agent`, and `oh-my-agent` remain reinforcement-only.

## 6) Google My Activity search history — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

### Visible rows

> 오늘
> 검색
> 알림 1개
> 포함된 주제:
> 탈모증
> 오전 5:48 • 세부정보

> 어제
> 검색
> 알림 6개
> 포함된 주제:
> CJ그룹
> 앤트로픽
> 모델 컨텍스트 프로토콜
> 자동차 운전면허
> 주가 대폭락
> 날씨
> 오후 9:48 • 세부정보

> 5월 30일
> 포함된 주제:
> 스페이스X
> 뉴질랜드
> 문원
> 회사
> 날씨

> 5월 29일
> 포함된 주제:
> 젠투 리눅스
> 뉴스
> 성과 관리
> commvault korea 을(를) 검색했습니다.

Routing note: same-day `탈모증` is low-durability for the AI/infra interest map. Prior-day Anthropic/MCP context reinforces existing lanes but does not create a new page.

## 7) ChatGPT / Claude — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new

### ChatGPT recent titles

> Claude Code 사용 제한
> Measuring Token Usage
> Nginx HTTPS와 OpenSSL
> SSH 공개키 인증 문제
> React forwardRef 타입오류
> CJS MJS 차이
> Ceph OSD 장애 분석
> 창업자 자질 보완 방법
> Semiconductor ETFs US
> Using Claude Plugins
> bcrypt 보안성과 심사
> CI 도커 파일 오류
> MCP 서버 만들기
> AI로 서버 구성도 그리기
> 공공 보안적합성 vs ISMS-P
> AI 하드웨어 비교 분석
> Proxmox 재부팅 로그 분석

### Claude recent titles

> 엔지니어 커리어 최대치 현실적 평가
> 기술 비교 분석의 공정성 문제
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> Virton과 AI agent의 인프라 자동화 시너지
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기
> M365 Planner와 GitHub Project 연동
> B2B 솔루션 배포 사이클 전략

Routing note: both chat surfaces reinforce existing AI-infra / Proxmox / Ceph / MCP / Claude Code / business-model lanes. No new durable concept page was justified from visible recent-title evidence alone.

## 8) X likes/profile — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: `Profile / X`

> This account doesn’t exist
> Try searching for another.
> Trending now
> What’s happening
> AHCwithWINTER
> Promoted by AHC
> Trending in South Korea

Routing note: unusable for interest extraction in this live session. No X inference was made.

## Filtering notes

- Strongest new signal type: Threads-liked rows around Korean document-parser deployment/licensing, Claude Code UX, HWP tooling, open-source/local Codex, RISC-V learning, and AI-infra work breadth.
- Repeated/reinforcement surfaces: YouTube subscriptions/playlists, GitHub Stars, ChatGPT, Claude, Threads API/reposts/activity, Google My Activity.
- Excluded from final interpretation: sports, generic entertainment, politics/lifestyle noise, X login/account errors, and low-durability one-off searches.

## Why this raw exists

This file is the evidence store for the 2026-06-01 08:00 social/browser interest-signal collection run. Honcho routing kept the run `raw_only`: the evidence is useful, but it reinforces existing durable pages rather than requiring a new concept page or index change.
