---
title: Raw Transcript — Interest Signal Collection 19:00 2026-06-02
created: 2026-06-02
captured_at: 2026-06-02 19:00 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, hermes, codex, ai-agents, ai-infra]
route_hint: raw_only
route_confidence: 0.84
route_reason: Afternoon browser/CDP surfaces added fresh evidence around Hermes skill bloat, LazyCodex, AI-agent account-recovery security failure, Codex Python SDK, and same-day Google/ChatGPT Hermes/Claude-SDK searches. These strongly reinforce CK's existing managed-agent, AI-infra, sandbox, provider, and operator-tooling lanes, while the 11:00 same-day new-target pass had already applied the durable append_existing update.
routing:
  route: raw_only
  confidence: 0.84
  reasons:
    - Compared against the same-day 08:00 social/browser transcript, 11:00 new-target append, and current same-day log before judging novelty.
    - Threads liked/reposts produced fresh Codex/Hermes/LazyCodex/security-agent rows, but they sit inside the existing managed-agent / safe-runtime / AI-infra axis.
    - Google My Activity and ChatGPT recents moved toward Hermes providers, Claude SDK/subscription, OpenCode/Claude subscription, and LazyCodex, but these are operator intent signals rather than a new durable page.
    - YouTube subscriptions did not hydrate beyond navigation in this run; YouTube playlists, GitHub Stars, Threads activity/replies/API, Claude, and X were unchanged, reinforcement-only, low-durability, or unusable.
  signal_tags: [threads-liked, threads-reposts, codex-python-sdk, hermes-skills, lazycodex, ai-agent-security, google-my-activity, chatgpt-recents, raw-only]
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

# Raw Transcript — Interest Signal Collection 19:00 2026-06-02

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-02  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `interest-signal-collection-19-00-2026-06-02.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface page targets were inspected; fresh targets were opened where useful and existing hydrated targets were used for Threads / ChatGPT / Claude where they were stronger.
- Disposable raw evidence cache was saved under `wiki/.cache/interest-signals/cdp-2026-06-02-1900.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens were not logged.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-02.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-02.md`, and current-day `log.md` entries before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Newly visible high-signal / medium-signal rows

- URL: https://www.threads.com/@roach_log/post/DZEFS4FAW7T
> roach_log
> AI Threads
> 9시간
> (헤르메스 쓰시면 꼭 읽어보세요)
> 최근 X 에서는 헤르메스 스킬 셋이 너무 장황하다는 말이 나오고 있습니다. 이 이야기를 주도한 인물은 Theo 라는 Tech 인플루언서로 부터 시작됬어요
> 헤르메스에는 설치만해도 활성화 되어 있는 스킬이 사실 엄청나게 많습니다. Pocketmon, Minecraft 등 이상한 스킬들이 많은데요. 그래서 Theo 는 이 부분을 지적했습니다
> “왜 모든 유저가 polymarket, pocketmon, minecraft 스킬을 가져야 하나?“
> 그리고 오늘 또 Nvidia 관련 스킬이 들어옵니다.
> 사실 저도 헤르메스를 좋아하지만 진짜 왜 이것들이 모든 유저가 가져야 하는지 모르겠어요.
> 그래서 해결하기 위한 방법을 가져왔습니다

- URL: https://www.threads.com/@yeon.gyu.kim/post/DZE0cy-Es_4
> yeon.gyu.kim
> LazyCodex
> 2시간
> LazyCodex 후기
> “걍 이거 안돼 딸깍 ulw 하니까 다 고쳐놓네요”
> “컴퓨터 유즈 되는게 개사기네요” (지혼자 화면보고 키보드 마우스 조작해서 QA 해서 고치면서 일함)
> “Pro 20 하나 더 결제하고 올게요”
> 토큰 비쌉니다
> 그런데 여러분의 삶과 지능이 더 비쌉니다
> 맡겨두시고 삶을 사세요

- URL: https://www.threads.com/@choi.openai/post/DZEq0ZBDMBH
> choi.openai
> 3시간
> 메타에서 심각한 보안사고 문제가 터졌었습니다.
> 메타가 인스타그램 유저 일부를 대상으로 계정 복구 AI 기능을 A/B 테스트하는 과정에서 인공지능 상담원에게 "이메일 주소 바꿨으니 비밀번호 초기화 링크 좀 보내줘"라고 정중하게 부탁했더니 진짜로 계정 권한을 넘겨주는 초유의 보안사고가 터졌었습니다.
> 공격자는 타깃의 유저네임과 지역 우회용 VPN만 있으면 별도의 본인 인증이나 인간 검토 없이 상담 AI를 속여 비밀번호 변경 링크를 가로챌 수 있었는데요.
> ... 백엔드 시스템 권한을 쥔 AI 에이전트가 보안과 정체성 검증이라는 가장 기초적인 규칙을 무시할 때 어떤 재앙이 발생하는지 보여주는 완벽한 실패 사례입니다.

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 2시간
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.
> 기존에도 Codex App Server를 활용해 CLI나 RPC 수준에서 로컬 제어가 가능했지만, 이제는 복잡한 프로토콜 조작 없이 백엔드 워크플로우에 에이전트 런타임을 완전히 네이티브하게 이식할 수 있게 되었습니다.
> 최근 오픈AI의 움직임을 보면 챗GPT를 만드는 회사에서 AI 운영체제를 만드는 회사로 확장하고 있는 모습인데요.
> 모델, 에이전트, Codex, SDK, AWS 연동까지 이어지면서 오픈AI가 직접 제품을 만드는 것보다 다른 개발자들이 오픈AI 위에서 제품을 만들도록 생태계를 구축하는 방향으로 가고 있는 것으로 보입니다.

- URL: https://www.threads.com/@jayeeyeonee/post/DZEaawOkaBz
> jayeeyeonee
> AI Threads
> 6시간
> 얼마 전 젠슨황이 말했어요.
> "연봉 7억 개발자라면
> 토큰에 3억은 써야 정상"
> 근데 넷플릭스 엔지니어가
> 이걸 뒤집는 도구를 만들었어요.

- URL: https://www.threads.com/@dy1.mag/post/DZD893NAVl2
> dy1.mag
> 10시간
> AI-native 조직들이 한국에도 생겨나고 있습니다.
> 회사의 모든 맥락을 AI가 읽을 수 있게 쌓아두고, 매일 자가 개선 루프를 돌리고, 필요한 사내 도구는 직접 만들어 쓴다고 합니다. 회의록이나 슬랙 대화가 다 쌓여서, 어떤 멤버가 어떤 일을 하는지 시스템이 안다고 합니다.
> 가야 하는 길은 명확합니다. 이 복리가 쌓이면, 생산성은 AI를 쓰지 않는 조직보다 압도적으로 강할 수밖에 없으니까요.

### Filtering note

- These rows are newly visible versus the same-day 08:00 social/browser baseline. They reinforce Hermes skill hygiene, LazyCodex/autonomous QA, AI-agent security boundary failures, Codex runtime embedding, token-cost control, and AI-native organization loops.
- The route is `raw_only`: the same-day 11:00 new-target run already applied the durable append around governed OpenAI/AWS/Codex, private MCP, Docker/LangSmith sandboxing, and AI-infra controls.

## 2) Threads reposts / replies / activity / API — copied text

Reposts URL: https://www.threads.com/@ethan13917/reposts  
Replies URL: https://www.threads.com/@ethan13917/replies  
Activity URL: https://www.threads.com/activity  
API base: https://graph.threads.net/v1.0/

### Reposts — newly visible row

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 2시간
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.
> 기존에도 Codex App Server를 활용해 CLI나 RPC 수준에서 로컬 제어가 가능했지만, 이제는 복잡한 프로토콜 조작 없이 백엔드 워크플로우에 에이전트 런타임을 완전히 네이티브하게 이식할 수 있게 되었습니다.

### Activity / replies — repeated or older rows

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> choisungh
> 1일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DZBrvY2E3_7
> choisungh
> 1일
> 와...

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> god800913
> 4일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned one new `REPOST_FACADE` after the morning run:

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> ethan13917
> 2026-06-02T08:30:08+0000
> REPOST_FACADE
> text unavailable from API response

- `/replies` latest rows were the same 2026-06-01 replies already captured in the 08:00 baseline.
- `/mentions` returned 200 with no rows.
- `keyword_search` for `agent`, `Claude Code`, `Hermes`, `MCP`, `AI infra`, `Codex`, `sandbox`, `AWS Bedrock`, `LangSmith Sandboxes`, and `Amazon Quick` returned empty sets or older CK-authored posts already captured in prior runs.

Representative repeated keyword rows:

- URL: https://www.threads.com/@ethan13917/post/DXyU1IFE7l5
> 3/4 보안과 비용
> AWS는 AgentCore, OBO token exchange, managed agents를 밀고 있다. OpenAI도 Codex와 managed agents를 AWS에 얹는다. 결국 승부는 모델 성능이 아니라 runtime, security, billing을 누가 잡느냐로 간다.

- URL: https://www.threads.com/@ethan13917/post/DXVujzGE5Md
> 7/7 결국 Managed Agents의 본체는 ‘좋은 프롬프트’가 아니라 런타임이다.
> session은 기록, harness는 제어 루프, sandbox는 실행환경, vault는 보안 경계. 이 분리를 못 하면

Routing note: Threads CDP liked/reposts had fresh same-axis rows; API/replies/activity were mostly reinforcement-only.

## 3) YouTube subscriptions — copied text

Surface URL: https://www.youtube.com/feed/subscriptions  
Page title: `구독 - YouTube`

### Visible text from this run

> 홈
> Shorts
> 구독
> 내 페이지

### Availability note

- A fresh CDP target and reload/scroll retry both hydrated only the navigation shell (`document.body.innerText` length 17; `ytd-rich-item-renderer` count 0). No subscription feed item was inferred from this blank shell.
- This differs from the 08:00 run, where subscriptions produced usable rows. The afternoon route therefore treats YouTube subscriptions as unavailable/blank for this pass, not as evidence of no interesting videos.

## 4) YouTube liked videos / Watch Later — copied text

Liked surface URL: https://www.youtube.com/playlist?list=LL  
Watch Later surface URL: https://www.youtube.com/playlist?list=WL

### Liked videos — visible top rows

- URL: https://www.youtube.com/watch?v=CkEhL7I2ffk&list=LL&index=1
> 김동현의 압도적인 기술
> 텟카이
> 조회수 283만회 • 2주 전

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s
> Andrej Karpathy: From Vibe Coding to Agentic Engineering
> Sequoia Capital
> 조회수 121만회 • 1개월 전

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers
> 조회수 2.1만회 • 1개월 전

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=9&t=22s
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16
> 조회수 4.3천회 • 1개월 전

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=10&t=17s
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer
> 조회수 13만회 • 1개월 전

### Watch Later — visible top rows

- URL: https://www.youtube.com/watch?v=sEWJ2OWFy04&list=WL&index=1
> [full] 모두가 자식의 폰과 싸우고 있다 | 추적60분 KBS 260522 방송
> KBS 추적60분
> 조회수 72만회 • 10일 전

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology
> 조회수 8.9만회 • 4주 전

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler
> 조회수 3만회 • 4주 전

- URL: https://www.youtube.com/watch?v=zgNvts_2TUE&list=WL&index=7&t=65s
> State of the Claw — Peter Steinberger
> AI Engineer
> 조회수 14만회 • 1개월 전

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=13&t=108s
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung
> 조회수 26만회 • 2개월 전

Routing note: playlists mainly repeated stable baseline AI-agent / MCP / KV-cache / Claude Code rows plus sports/parenting/lifestyle noise. No durable YouTube playlist change.

## 5) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

### Visible starred repositories

- URL: https://github.com/tech-leads-club/agent-skills
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
> TypeScript 4,500 396

- URL: https://github.com/smithersai/claude-p
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.
> Zig 345 27

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

Routing note: GitHub Stars were unchanged from the same-day 08:00 baseline; no new starred-repo signal was promoted.

## 6) Google My Activity search history — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

### Today rows newly visible after the 08:00 run

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 오늘
> 검색
> claude sdk 을(를) 검색했습니다.
> 오후 3:03 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> hermes providers 을(를) 검색했습니다.
> 오후 2:38 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> open code claude subscription 을(를) 검색했습니다.
> 오후 1:53 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> lazy codex 을(를) 검색했습니다.
> 오전 10:14 • 세부정보

### Repeated prior-day rows still visible

> 어제
> 검색
> redhat RHEL 을(를) 검색했습니다.
> 오후 2:19 • 세부정보

> 검색
> proxmox guest agent install 을(를) 검색했습니다.
> 오후 12:18 • 세부정보

Routing note: same-day searches are direct operator-intent evidence around Claude SDK, Hermes providers, OpenCode/Claude subscription constraints, and LazyCodex. They reinforce the managed-agent/provider-cost lane but do not need a new durable page.

## 7) ChatGPT / Claude / X — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new  
X URL: https://x.com/ckethan0429/likes

### ChatGPT recent titles

> Hermes 여러 모델 사용법
> Top-level await 해결법
> Claude SDK와 구독 사용
> 이적 고민과 성장 전략
> GS 인증 준비 점검사항
> 블로그 논리 분석 요청
> 주식 내러티브 설명
> RSU vs 스톡옵션 비교
> 치실 영어 번역
> 앵무새 영어 단어
> Claude Code 사용 제한
> Measuring Token Usage
> Nginx HTTPS와 OpenSSL
> 링크드인 임프레션 멤버 리치드
> SSH 공개키 인증 문제
> React forwardRef 타입오류
> CJS MJS 차이
> Ceph OSD 장애 분석
> 창업자 자질 보완 방법
> Semiconductor ETFs US

### Claude recent titles

> 엔지니어 커리어 최대치 현실적 평가
> 버튼 지분 받는 일반적인 규모
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> 아내가 음식을 권할 때 대처법
> 아내의 정신 건강 걱정
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> Virton과 AI agent의 인프라 자동화 시너지
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> MBTI 64유형이란
> K-pop 엔터테인먼트와 기술 사업 접목 기회
> 토큰 가격 상승의 구조적 필연성
> 어른용 장난감 네이버스토어 판매
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴

### X

> To view keyboard shortcuts, press question mark
> Profile
> See new posts
> This account doesn’t exist
> Try searching for another.

Routing note: ChatGPT/Google converged on Hermes provider and Claude SDK/subscription questions; Claude sidebar stayed mixed career/business/AI-infra/life context; X remained unusable from the live target.

## Filtering notes

- Strongest fresh items in this pass: Threads `Codex Python SDK`, Hermes skill-set bloat critique, LazyCodex autonomous QA, Meta AI account-recovery security failure, and Google/ChatGPT `Claude SDK` / `Hermes providers` / `Lazy Codex` search intent.
- YouTube subscriptions were blank in this run and were not used to infer absence of new YouTube content.
- Sports, entertainment, lifestyle, parenting, and generic social rows were preserved in raw evidence where visible but excluded from durable interpretation.
- Overall route remains `raw_only` because the same-day 11:00 new-target pass already performed the durable `append_existing` update for the governed Codex/AWS/MCP/sandbox-control axis.

## Why this raw exists

This file is the evidence store for later summary/curation. It preserves afternoon browser/API-visible signals separately from Honcho triage and durable wiki promotion.
