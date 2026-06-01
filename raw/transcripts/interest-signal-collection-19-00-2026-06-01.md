---
title: Raw Transcript — Interest Signal Collection 19:00 2026-06-01
created: 2026-06-01
captured_at: 2026-06-01 19:06 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, ai-agents, claude-code, business-negotiation]
route_hint: raw_only
route_confidence: 0.84
route_reason: Afternoon social/browser capture produced mostly same-day reinforcement versus the 08:00 social run and 11:00 new-target run. The only genuinely new Threads API rows were low-durability replies about equity negotiation / reaction; other surfaces repeated the existing document-parser, Claude Code, AI-infra, agent-tooling, and business-model lanes.
routing:
  route: raw_only
  confidence: 0.84
  reasons:
    - Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-01.md`, the 2026-06-01 11:00 new-target log/Honcho entry, and recent same-surface baselines before judging novelty.
    - Threads liked was largely the same as the morning OpenDataLoader PDF / Claude Code / HWP / AI-infra / Codex CLI cluster, with only feed-age/ordering changes and one lower-signal software-engineering fundamentals row.
    - Threads API replies added two same-day replies after the morning run, but they are business/social-context evidence rather than a new durable AI/infra branch.
    - YouTube, GitHub Stars, Google My Activity, ChatGPT, Claude, Watch Later, Liked videos, and X were unchanged, reinforcement-only, low-durability, or unusable.
  signal_tags: [threads-api-replies, threads-liked, youtube, github-stars, google, chatgpt, claude, x-unusable]
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

# Raw Transcript — Interest Signal Collection 19:00 2026-06-01

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-01  
Account: `ethan13917` on Threads; `ckethan0429` GitHub/X where visible

## Live session notes

- Read the wiki README and performed the idempotency check. No `interest-signal-collection-19-00-2026-06-01.md` existed before this run, so the scheduled afternoon capture proceeded.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface targets were inspected and hydrated pages were used where available.
- Threads used both live CDP surfaces (`liked`, `activity`, `reposts`, `replies`, `profile`) and the official Threads API for own threads/replies/mentions/keyword snapshots. Token refresh and `/v1.0/me` succeeded; tokens were not logged.
- Raw disposable evidence caches were saved under `wiki/.cache/interest-signals/cdp-2026-06-01-1900.json` and `wiki/.cache/interest-signals/threads-api-2026-06-01-1900.json`.
- Compared against the 2026-06-01 08:00 social/browser raw transcript, the same-day 11:00 new-target Honcho/log entry, and current log entries before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요`

### Repeated high-signal rows from the 08:00 baseline

- URL: https://www.threads.com/@tangokorea/post/DY_tkscE6l6
> tangokorea
> 1일
> opendataloader pdf 를 공공기관 SI 프로젝트 도입시 고려할 점 #1
> 한글과컴퓨터가 주도하는 오픈소스 PDF 파서인 OpenDataLoader PDF는 PDF 검증 표준 라이브러리인 veraPDF(Dual Lab 개발)를 연동 및 내장하고 있습니다.
> ... OpenDataLoader PDF v2.0을 출시하면서 라이선스를 더욱 허용적인 Apache License 2.0으로 전격 변경했습니다.
> ... 일반적인 상용 파이프라인(RAG 구축 등)에 도입할 때 라이선스 리스크는 매우 낮은 편입니다.

- URL: https://www.threads.com/@roach_log/post/DY_ddsAGhTL
> roach_log
> 1일
> 오랜만에 클로드 코드를 엄청나게 사용하고 있는데
> /tui fullscreen 이거 겁나게 편하네요.
> view 도 마음에 들고, anthropic 공식문서에서 메모리 사용량도 안정화 된다는데 계속해서 써봐야겠네요

- URL: https://www.threads.com/@tangokorea/post/DY_1-NtkxzP
> tangokorea
> 1일
> 남들 다 AI로 멋진 거 만들 때
> 나는 hwp 여는 거 만들고 있었음
> 근데 그게 매주 10만 명이 씀
> chromewebstore.google.com/detai…

- URL: https://www.threads.com/@slamslam__/post/DZANBkRk1vw
> slamslam__
> 21시간
> AI 인프라 엔지니어링에 대한 해외 자료를 보면
> 머리가 아찔해질 정도로 재미있는 아이디어가 많습니다 ㅋㅋ
> 1. AI 칩의 발열로 대중목욕탕 물을 데운다던지
> 2. 풍력발전기 안에 AI 칩을 넣으면 된다던지
> 누군가에게는 새로운 비즈니스 기회로 보일 것 같습니다.

- URL: https://www.threads.com/@borel.chu/post/DY_eoS2kmRe
> borel.chu
> 1일
> 흔한 K-기업의 AI 엔지니어 채용 공고 특징.
> 🚨 [공고] AI 추진단 신설에 따른 '풀스택 AI 오케스트레이터' 채용
> 오픈소스 sLLM 경량화 및 온프레미스 RAG 파이프라인 구축
> 사내 시스템 연동을 위한 데이터 파싱 및 API 개발
> 폐쇄망 환경에서 쿠버네티스 올리고 GPU 클러스터 모니터링 구축
> 혼자서 IT 자회사 하나를 차릴 수 있는 능력을 보유하신 분

- URL: https://www.threads.com/@qjc.ai/post/DY_MXnPE-JX
> qjc.ai
> 1일
> Codex, 유료인 줄 알았죠?
> 터미널에서 쓰는 Codex CLI는 따로 있어요.
> 그리고 그건 오픈소스입니다.
> Ollama랑 연결하면 API 토큰 비용 0.

### Newly visible or lower-signal liked row

- URL: https://www.threads.com/@grab.frontier/post/DY_-qF4gZKd
> grab.frontier
> 23시간
> 소프트웨어 엔지니어링 단단한 기본기를 쌓고 싶은 엔지니어들에게 추천
> (돈 받은 거 아님)

### Filtering note

- The liked-page cluster is essentially same-day reinforcement of the morning document-parser / Claude Code / HWP / AI-infra / Codex CLI lanes. `grab.frontier` is useful evidence for engineering fundamentals, but too thin for a durable concept update.
- Lifestyle, politics, and generic social rows were preserved only in the disposable CDP cache and not promoted.

## 2) Threads API / replies / activity — copied text

API base: https://graph.threads.net/v1.0/  
Replies surface: `/{threads-user-id}/replies`  
Activity URL: https://www.threads.com/activity  
Reposts URL: https://www.threads.com/@ethan13917/reposts  
Profile URL: https://www.threads.com/@ethan13917

### Newly returned API replies after the 08:00 run

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 2026-06-01T02:31:45+0000
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DZBrvY2E3_7
> ethan13917
> 2026-06-01T02:21:00+0000
> 와...

### API profile / own-post baseline

- `/v1.0/me` succeeded after token refresh and returned the app-scoped profile for `ethan13917`.
- `/threads` returned the same own-post baseline as the morning run; the latest own post remained:

- URL: https://www.threads.com/@ethan13917/post/DY8xaS5E-vt
> ethan13917
> 2026-05-30T04:34:21+0000
> 상식이 통하는 당에 투표하고싶다.
> 중도는 대부분 해당할듯
> 근데 그치만 현존하는 당들은 해당사항이 없지.

### Mentions / keyword search

- `/mentions` returned `data: []`.
- `keyword_search` for `agent`, `Claude Code`, `Hermes`, `MCP`, `AI infra`, `OpenDataLoader`, and `Codex` returned either empty sets or older CK-authored posts already captured in prior runs.

Relevant repeated API examples:

- URL: https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk
> 4/4 지금 봐야 할 것:
> 배포, 인증, 저장, GPU, 관측을 묶는가. 묶인 순간 에이전트는 기능이 아니라 사업이 된다.

- URL: https://www.threads.com/@ethan13917/post/DXyU1IFE7l5
> 3/4 보안과 비용
> AWS는 AgentCore, OBO token exchange, managed agents를 밀고 있다. OpenAI도 Codex와 managed agents를 AWS에 얹는다. 결국 승부는 모델 성능이 아니라 runtime, security, billing을 누가 잡느냐로 간다.

### Activity / reposts reinforcement excerpts

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다.

- URL: https://www.threads.com/@ma.chi.n.e/post/DYrFnfYE6Cm
> 네 알고 있습니다. 서비스 월간 트래픽이 십만 단위로 넘어가다보니(뷰 수보다 인당 용량이 더 많이 드는 서버라) 자체 인프라를 만들었고, 과금을 거의 제로에 수렴시키는 과정에서 관련 구조를 직접 구축하게 됐습니다.

Routing note: two same-day API replies are new versus the 08:00 run, but they are low-durability business/social-context evidence. CDP activity/reposts remain reinforcement-only.

## 3) YouTube subscriptions — copied text

Surface URL: https://www.youtube.com/feed/subscriptions  
Page title: `(42) 구독 - YouTube`

### High-signal rows visible in this run

- URL: https://www.youtube.com/watch?v=5HVPeux24WU
> Embrace long-running tasks with Opus 4.8 and Claude Code
> Claude
> 조회수 5만회
> 6시간 전

- URL: https://www.youtube.com/watch?v=XBaznoTRDFI
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

- URL: https://www.youtube.com/watch?v=BFH9D05UFvM
> Fine-Tuning, Clearly Explained (it's easier than you think)
> David Ondrej
> 조회수 868회
> 1시간 전

- URL: https://www.youtube.com/watch?v=AGkzpxMdPn8
> Most Enterprise Agentic Projects Are Doomed, Here's Why — Jess Grogan-Avignon & Jack Wang, Accenture
> AI Engineer
> 조회수 768회
> 2시간 전

- URL: https://www.youtube.com/watch?v=Kx_prE0UhZ0
> [홍장원의 불앤베어] 인텔은 40배 넘는데 왜 마이크론은 고작 PER 9배냐
> 조회수 1시간 전

Routing note: subscriptions repeated the same Opus 4.8 / Claude Code / agent-observability / one-person AI business / fine-tuning / enterprise-agent lane from the 08:00 run and recent baselines. Sports, entertainment, politics, and generic finance rows stayed raw/noise unless they changed the interpretation.

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

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=9&t=17s
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer

### Watch Later — stable baseline excerpts

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=1&t=62s
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=3
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=12&t=108s
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung

- URL: https://www.youtube.com/watch?v=_lpYx03VVBM&list=WL&index=14&t=85s
> LiteParse - The Local Document Parser
> Sam Witteveen

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

Routing note: unchanged from the 08:00 run; reinforcement-only.

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

Relevant older links still visible:

- URL: https://www.google.com/search?q=draw+io+mcp
> draw io mcp 을(를) 검색했습니다.

- URL: https://www.google.com/search?q=grok+cursor
> grok cursor 을(를) 검색했습니다.

- URL: https://www.google.com/search?q=proxmox+release+notes
> proxmox release notes 을(를) 검색했습니다.

Routing note: unchanged from 08:00; same-day `탈모증` remains low-durability for the AI/infra interest map.

## 7) ChatGPT / Claude — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new

### ChatGPT recent titles

> 블로그 논리 분석 요청
> 주식 내러티브 설명
> RSU vs 스톡옵션 비교
> Claude Code 사용 제한
> Measuring Token Usage
> Nginx HTTPS와 OpenSSL
> SSH 공개키 인증 문제
> React forwardRef 타입오류
> Ceph OSD 장애 분석
> MCP 서버 만들기
> AI 하드웨어 비교 분석
> Proxmox VE 9.2 업데이트

### Claude recent titles

> 엔지니어 커리어 최대치 현실적 평가
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> Virton과 AI agent의 인프라 자동화 시너지
> B2B 솔루션 배포 사이클 전략

Routing note: recent-title surfaces reinforce existing AI-infra / Proxmox / Ceph / MCP / business-negotiation lanes. Visible title evidence alone does not justify a durable page update.

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

- Strongest truly new item versus the 08:00 run: two same-day Threads API replies, especially the equity-negotiation reply. This is useful raw evidence for CK’s business/negotiation context but too thin for a durable concept update.
- Strongest repeated signal type: the morning’s Korean document-parser / Claude Code ergonomics / HWP utility / AI-infra / local Codex cluster remained visible but did not change meaning.
- Repeated/reinforcement surfaces: YouTube subscriptions/playlists, GitHub Stars, Google My Activity, ChatGPT, Claude, Threads CDP activity/reposts, and X.
- Excluded from final interpretation: sports, generic entertainment, politics/lifestyle noise, X account errors, and low-durability one-off searches.

## Why this raw exists

This file is the evidence store for the 2026-06-01 19:00 social/browser interest-signal collection run. Honcho routing kept the run `raw_only`: the evidence is useful, but after comparison with the same-day 08:00 and 11:00 baselines it reinforces existing durable pages rather than requiring a new concept page or index change.
