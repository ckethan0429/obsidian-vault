---
source: live Chrome CDP + browser-visible surfaces
date: 2026-05-26
run: 08:00
route_hint: raw_only
route_confidence: 0.86
route_reason: Only one genuinely new item surfaced (`smithersai / claude-p`); Threads, Google My Activity, and YouTube were reinforcement-only.
routing: raw_only
signal_tags:
  - github-stars
  - claude-code
  - agent-tooling
  - reinforcement
---

# Raw Transcript — Interest Signal Collection 08:00 2026-05-26

## Live session notes
- Read the live Chrome CDP target list from `http://127.0.0.1:9222/json/list` and attached to `type == "page"` targets.
- The browser tool itself landed on the GitHub sign-in page, but the live CDP GitHub Stars page was already hydrated and readable.
- Most surfaces in this pass repeated the 2026-05-25 baseline; GitHub Stars was the only place that surfaced a fresh repo candidate.

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
- `smithersai / claude-p` did not appear in the prior same-day baseline and is the only new GitHub Stars candidate in this pass.
- The rest of the stars list is reinforcement of the existing Claude Code / agent tooling / Hermes / infra axis.

## 2) Threads — likes/activity
Page titles:
- `좋아요 • Threads`
- `활동 • Threads`

Visible text:
> besty_moon
> 3주
> 진짜 멋지다ㅠㅠㅠㅠㅠ
>
> korean.thiel
> 3주
> xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
>
> braincheck.co.kr
> 바이브코딩 Vibe coding
> 3주
> 바이브 코딩에 가장 좋은 언어는?
>
> vibematfia
> 3주
> 요즘 지인들한테 추천하는 바이브코딩 책
>
> park0_602
> 3주
> sinsadeul

and

> bellman.pub
> 1주
> 이런생각 자체를 우리나라 정부는 안하는듯
>
> revolth_labs
> 1주
> 나를 팔로우함
>
> starsky_323
> 1주
> 사기업의 이익을 국민이 나눠쓰는 구조가 자본주의 시스템이라고???ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ국민이 아니라 주주겠지
>
> minkyung7400
> 1주
> 현대자본주의 ㅋㅋㅋㅋㅋ 만약 정부가 국가주도로 반도체컨트롤 타워의 역할을 하고 그 수익금을 복지의 형태로 돌리는 구조라면 모를까 이건 단순히 삥뜯기인데 무슨 현대자본주의?
>
> aje.travel
> 1주
> 꼭 봐야하는 Andrej Karpathy의 포스팅입니다.
>
> gptaku_ai
> 2주
> 저도 블루스택 후 결제까지 했는데 차단당함...
>
> blackbear_ai
> 2주
> 감사합니다 덕분에 잘되었어요.
>
> godo_ri85
> 2주
> 아주좋은 아이디어입니다.
>
> agent.choi
> 2주
> api나 자동화가 압도적입니다.

Filtering notes:
- All of these rows were already present in the earlier same-day / recent baselines.
- Treated as reinforcement only.

## 3) Google My Activity — copied text
Page title:
- `Google - 내 활동`

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
> 검색
> Google 검색 을(를) 방문했습니다.
> 오후 5:12 • 세부정보

Filtering notes:
- Same core topic cluster as the prior baseline.
- No new search-history axis surfaced.

## 4) YouTube — 구독 / 나중에 볼 동영상 / 좋아요
### 구독 feed excerpt
> Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
> Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor
> Claude Code is now FREE: Here’s how…
> Lobster Father: New Telegram AI Agent is INSANE!
> Redis: From Cache to AI Agent Backbone
> NEW Google Browser Use AI Agent is INSANE!
> 변호사가 앱으로 시장을 바꾼다 (Claude Code)

### 나중에 볼 동영상 excerpt
> State of the Claw — Peter Steinberger
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> LiteParse - The Local Document Parser
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자
> GitHub이 만든 AI 프레임워크 Spec Kit
> Supabase MCP로 앱 찍어내는 방법
> 3 Ways to Build ACTUALLY Beautiful Websites Using Cursor AI

### 좋아요 page excerpt
> 홈
> Shorts
> 구독
> 내 페이지

Filtering notes:
- Top viewport was mostly sports / entertainment noise.
- The AI/agent rows visible below were already in the same-day baseline and did not change the durable picture.
- No new durable YouTube signal this run.

## Why this raw exists
This file is the evidence store for later triage and wiki promotion.
