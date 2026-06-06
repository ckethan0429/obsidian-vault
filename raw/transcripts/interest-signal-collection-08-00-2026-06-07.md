---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-07
created: 2026-06-07
captured_at: 2026-06-07T08:00:41+09:00
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, civic-signal, ai-agents, developer-workflow]
route_hint: raw_only
route_confidence: 0.72
route_reason: Morning browser/CDP surfaces surfaced fresh Threads-liked political/civic rows and one repeated K-AI startup-accountability row, while YouTube, GitHub Stars, Google My Activity, ChatGPT, Claude, Threads API, and X were repeated, side-surface, or unavailable at the durable layer. The run preserves raw evidence and updates Honcho/log only.
routing:
  route: raw_only
  confidence: 0.72
  reasons:
    - Compared against the 2026-06-06 08:00, 11:00, 19:00, 22:00 raw transcripts and 23:00 Honcho refinement before judging novelty.
    - Threads liked added newly visible civic/political rows relative to yesterday morning, but this is a continuation of the 2026-06-06 19:00 political/civic-rights rotation and remains single-surface feed evidence.
    - The relevant AI/startup row around K-AI expert accountability repeated the late-May/early-June K-문샷/AsteroMorph baseline rather than opening a new durable branch.
    - YouTube liked, GitHub Stars, Google My Activity, ChatGPT, Claude, Threads API, and X did not add a new cross-surface durable signal.
  signal_tags: [threads-liked, youtube-liked, github-stars, google-activity, chatgpt, claude, raw-only, reinforcement]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://graph.threads.net/v1.0/
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/CKAhn7/likes
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-07

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-07  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `raw/transcripts/interest-signal-collection-08-00-2026-06-07.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface CDP extraction was used, and blank fresh targets were compared against existing hydrated tabs.
- Disposable evidence caches were saved under `wiki/.cache/interest-signals/2026-06-07-0800/cdp_results.json` and `wiki/.cache/interest-signals/2026-06-07-0800/threads_api_raw.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens are omitted from this raw note. The API still has no verified liked-post edge, so Threads liked evidence came from CDP.
- Compared against the 2026-06-06 08:00 / 11:00 / 19:00 / 22:00 raw transcripts, the 2026-06-06 23:00 Honcho refinement, `concepts/honcho.md`, and current `log.md` before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Newly visible civic/political rotation

- URL: https://www.threads.com/@speedycheckj/post/DZPtGMGAUjE
> speedycheckj
> 재선거
> 9시간
> 실시간 대구 반월당네거리.
> 6천
> 192
> 649
> 268

- URL: https://www.threads.com/@h_ruby_haha/post/DZP6iHOEyf8
> h_ruby_haha
> 8시간
> 언론의 선동에 빡친 콘텐츠PD가 작정하고 선동하는법
> 2.3천
> 75
> 637
> 101

- URL: https://www.threads.com/@jeonhangil/post/DZP5oysE3Hu
> jeonhangil
> 7시간
> 6.6.현충일에 드디어 잠실에 "재선거" 불이 붙었습니다. 전국 67개 선거구 투표용지 부족이라는 부정선거 꼬리가 잡히자 청년들과 시민들이 자발적으로 일어났습니다.
> 헌법에 보장된 참정권을 도둑맞은 시민의 주권회복운동으로 활활 타올라서 부디, 재선거 실시되고 선관위 해체되고 20년 계속된 부정선거 척결의 전환점이 되길 소망합니다.
> 저는 3일째 잠못자고 목도 완전 잠기고 아스팔트에 드러눕기도 하고 ...싸울만큼 싸워왔고 이젠 청년들과 시민들께 맡기고 저곳에서 그저 "재선거" 격려하는 역할하고자 합니다. 자유는 공짜가 아니다.
> 5.7천
> 323
> 472
> 46

- URL: https://www.threads.com/@__kms1212/post/DZPlVWYlPFk
> __kms1212
> 11시간
> 로이터 기사 나왔습니다!!
> reuters.com/world…
> reuters.com
> South Korean protesters keep calling for re-run of election after ballot shortage
> 52
> 10

- URL: https://www.threads.com/@hangman_void/post/DZPuxbkAKa7
> hangman_void
> 9시간
> SBS가 드디어 참언론이 되었다.
> 감격스럽다 진짜 😭
> 1.7만
> 454
> 1.5천
> 778

### Repeated AI/startup-accountability row

- URL: https://www.threads.com/@realryunsu/post/DZPS1VAk4uN
> realryunsu
> 스타트업
> 13시간
> awareinvest.com/ko/no…
> 투자유치 소식을 접하고 이상하다고는 느꼈지만 소란을 만들고 싶지는 않아 넘어갔었는데, 연세대 원주의과대학 김광은 교수님의 의혹제기를 접하고 그 실체를 알아보니 단순히 "누가 어디에 투자했다" 수준을 넘어서는 영역이라 고민끝에 글을 작성합니다.
> awareinvest.com
> K-AI 전문가들의 한심한 실체, 5천억 예산 'K-문샷' PD 아스테로모프 이민형 대표를 둘러싼 의혹
> 132
> 11
> 18
> 6

Routing note: the civic/political rows are fresh relative to the previous morning surface, but they continue the 2026-06-06 19:00 political/civic-rights rotation and stay low-durability for the AI/operator wiki. The K-AI/AsteroMorph row is relevant to AI-startup accountability but repeats late-May/early-June raw evidence.

## 2) Threads activity / replies / API — copied text

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
API base: https://graph.threads.net/v1.0/

### Activity / replies visible via CDP

- URL: https://www.threads.com/@ethan13917/post/DZJjR5REzLX
> youj7jinny
> 2일
> 꿈의 도시다 입성하기를 학수고대하며..

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> bu66lymuffin
> 4일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DZBrvY2E3_7
> choisungh
> 5일
> 와...

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned 12 rows. Latest rows were the same repost facades already seen in recent baselines:

- URL: https://www.threads.com/@ethan13917/post/DZMCey6k0Ah
> media_type: REPOST_FACADE
> timestamp: 2026-06-05T02:52:07+0000
> text: unavailable from API for repost facade

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> media_type: REPOST_FACADE
> timestamp: 2026-06-02T08:30:08+0000
> text: unavailable from API for repost facade

- `/replies` returned 12 rows. Latest visible API replies repeated the same rows captured in prior baselines:

- URL: https://www.threads.com/@ethan13917/post/DZJ3Nrhk_T7
> timestamp: 2026-06-04T06:35:11+0000
> 진짜 한마디해라 트윗날리라고

- URL: https://www.threads.com/@ethan13917/post/DZJjR5REzLX
> timestamp: 2026-06-04T03:40:59+0000
> 꿈의 도시다 입성하기를 학수고대하며..

- `/mentions` returned 0 rows.
- `keyword_search` returned older CK-authored rows for `agent`, `Claude Code`, `Codex`, `GPU`, and `Ceph`; `Hermes` and `MCP` returned 0 rows.

Routing note: Threads API and activity/replies did not add a new durable signal this morning.

## 3) YouTube — copied text

Subscriptions URL: https://www.youtube.com/feed/subscriptions  
Liked videos URL: https://www.youtube.com/playlist?list=LL  
Watch Later URL: https://www.youtube.com/playlist?list=WL

### Availability

> Subscriptions page title: `구독 - YouTube`
> Visible text: 홈 / Shorts / 구독 / 내 페이지

> Watch Later fresh target title: `나중에 볼 동영상 - YouTube`
> Visible text: empty body after CDP read; an existing hydrated Liked playlist tab contained the usable video rows below.

### Liked videos — visible repeated high-signal rows

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s&pp=iAQBsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7&pp=iAQBsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues

- URL: https://www.youtube.com/watch?v=MKV6DTVmxwE&list=LL&index=8&pp=iAQB0gcJCTgLAYcqIYzvsAgC
> 미토스 AI는 왜 전 세계 금융권을 긴급 소집하게 만들었나 / 오그랲 / 비디오머그

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=9&t=22s&pp=iAQBsAgC
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=10&t=17s&pp=iAQBsAgC
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI

- URL: https://www.youtube.com/watch?v=Am5y6x-erJs&list=LL&index=13&pp=iAQBsAgC
> 모르면 진짜 개손해... AI로 회사 운영 해주는 Paper Clip. 심지어 무료 오픈소스

- URL: https://www.youtube.com/watch?v=IAEV_fUAdWk&list=LL&index=14&t=325s&pp=iAQBsAgC
> 앤트로픽이 말하는 가장 효율적인 Harnessing. Managed Agents! 앙

- URL: https://www.youtube.com/watch?v=RcIWhm16ouQ&list=LL&index=15&t=1240s&pp=iAQBsAgC
> Intel just CRUSHED Nvidia & AMD GPU pricing

- URL: https://www.youtube.com/watch?v=4votPcplooo&list=LL&index=20&t=1s&pp=iAQBsAgC
> AI가 종교를 만들었네요 ㄷㄷㄷ (클로드봇)

- URL: https://www.youtube.com/watch?v=X_idSUmKSBw&list=LL&index=22&pp=iAQBsAgC
> AI 때문에 직원 75% 해고하고 매출 80% 하락한 Tailwind

Routing note: YouTube remains reinforcement of the same agentic-engineering, managed-agents, Cloudflare Queues, AI-infra/GPU, and AI-business rows already captured in recent baselines. Sports/music/lifestyle rows were preserved in the cache but excluded from durable interpretation.

## 4) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

- URL: https://github.com/tech-leads-club/agent-skills
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.

- URL: https://github.com/smithersai/claude-p
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.

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

Routing note: GitHub Stars repeated the same agent-skills / Claude Code / Hermes / oh-my-agent star set; no new starred repo was observed.

## 5) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

> 오늘
> 일부 활동은 아직 표시되지 않을 수 있습니다.
> 검색
> 알림 1개
> 포함된 주제:
> 스티브 승준 유
> 오전 7:48 • 세부정보

> 어제
> 검색
> 알림 5개
> 포함된 주제:
> 젠슨 황
> 주가
> 코스피
> C++
> 날씨
> 오후 10:48 • 세부정보

Older visible links preserved from the same surface:

- URL: https://www.google.com/search?q=claude+sdk
> claude sdk

- URL: https://www.google.com/search?q=hermes+providers
> hermes providers

- URL: https://www.google.com/search?q=open+code+claude+subscription
> open code claude subscription

- URL: https://www.google.com/search?q=lazy+codex
> lazy codex

Routing note: today's Google row is not useful for durable promotion. Yesterday's Jensen/C++/stock context repeats investing/AI-infra side lanes; stable per-row permalinks were unavailable, so the surface URL is retained.

## 6) ChatGPT — copied text

Surface URL: https://chatgpt.com/  
Page title: `ChatGPT`

- URL: https://chatgpt.com/c/6a24280d-65ec-83a2-bb46-4376936f84d1
> 샴푸 바디워시 구분 방법

- URL: https://chatgpt.com/c/6a22bcc4-785c-83a8-b46f-3a78db771ccf
> 엉덩이 큰 사람 허리 통증 예방

- URL: https://chatgpt.com/c/6a220857-dfc0-83aa-8dc8-342baf8668c7
> 경제적 독립과 영향력

- URL: https://chatgpt.com/c/6a1f30f7-fbc0-83a5-b240-40a348952fb7
> 깃 워크트리 사용법

- URL: https://chatgpt.com/c/6a1f3098-3244-83a8-acd0-28c69b1481d9
> Accountable harness 해석

- URL: https://chatgpt.com/c/6a1e7812-39d4-83aa-ad57-ce1fce973467
> Hermes 여러 모델 사용법

- URL: https://chatgpt.com/c/6a1e61f6-7478-83ab-8dc9-84950a4a819a
> Claude SDK와 구독 사용

Routing note: ChatGPT recents mixed personal/life rows with repeated developer-workflow/Hermes/provider rows. No new durable page was justified.

## 7) Claude — copied text

Surface URL: https://claude.ai/new  
Page title: `New chat - Claude`

- URL: https://claude.ai/chat/036a858a-e51e-479d-9ff6-2d7e260034d7
> 지분 획득 시 CTO의 역할과 준비

- URL: https://claude.ai/chat/4b192f85-c217-48dd-918f-92220703b7ae
> 엔지니어 커리어 최대치 현실적 평가

- URL: https://claude.ai/chat/3e145c7c-c15c-4214-b12c-2069697bf793
> 버튼 지분 받는 일반적인 규모

- URL: https://claude.ai/chat/418fc360-fd97-4c27-b6ac-655b2fa64604
> AI 인프라 및 AIOps 사업 방향 검토

- URL: https://claude.ai/chat/304af6b0-1f32-4818-a19f-4ef9463af6b0
> 르노 그랑콜레오스 AI 에이전트 제어 방법

- URL: https://claude.ai/chat/1d5f25dd-f153-4b85-8d38-2c4682914281
> 여러 AI 모델을 안전하게 함께 사용하기

- URL: https://claude.ai/chat/aa8a48a6-33b0-4269-b129-8ddadc953c1b
> Virton과 AI agent의 인프라 자동화 시너지

Routing note: Claude recents continue the existing career/equity, AI-infra/AIOps, AI-agent, and product/business lanes; no new durable page was justified.

## 8) X — availability note

Surface URL: https://x.com/CKAhn7/likes  
Page title: ``

> This account doesn’t exist
> Try searching for another.

Routing note: X remained an unusable shell from the exposed session and was not treated as negative evidence.

## Filtering notes

- Preserved raw evidence for newly visible Threads liked civic/political rows, repeated YouTube/GitHub/Google/ChatGPT/Claude evidence, and availability failures.
- Intentionally excluded sports/music/lifestyle and generic social noise from durable interpretation while keeping the source cache intact.
- Strongest newly visible rows were on Threads liked, but they stayed `raw_only` after comparison with the previous-day 19:00 and 23:00 baselines.

## Why this raw exists

This file is the evidence store for later Honcho-style routing review. The morning route is `raw_only`: preserve the evidence and update Honcho/log, but do not promote a new durable wiki page.
