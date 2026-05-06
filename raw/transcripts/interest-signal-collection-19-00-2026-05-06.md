---
title: Interest Signal Collection — 2026-05-06 19:00 KST
created: 2026-05-06
updated: 2026-05-06
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, raw-only, reinforcement, agents, infra]
sources:
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/activity
  - https://www.threads.com/liked
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: raw_only
route_confidence: 0.82
route_reason: The 19:00 pass mostly reinforced the existing AI agent / harness / infra axis already captured earlier today. Threads stayed on harness, routing, triage, Proxmox, GPU, memory-bank, and oh-my-agent language; GitHub Stars and Google My Activity did not materially change; Claude repeated the same education/B2B and infra themes. The only fresh deltas were a few new ChatGPT recent prompts and YouTube subscription titles, but they still fit the same operator/tooling lane and did not justify a durable wiki update.
routing:
  route: raw_only
  confidence: 0.82
  reasons:
    - Threads, GitHub, Google, and Claude were reinforcement-heavy
    - new ChatGPT and YouTube titles stayed inside the established agent / infra / automation axis
    - no concept page needed a durable update from this pass
    - raw evidence should be retained, but not promoted beyond the existing wiki structure
---

# Interest Signal Collection — 2026-05-06 19:00 KST

## Live session notes
- Live Chrome/CDP tabs were available and logged in for Threads, YouTube, GitHub stars, Google My Activity, ChatGPT, and Claude.
- Compared with the 08:00 raw set and the 11:00 new-target run, this afternoon pass was mostly reinforcement.
- Raw evidence is saved here first; durable synthesis did not change.

## 1) Threads — profile / replies / reposts / activity / likes

### Current signal shape
- The visible Threads surfaces kept emphasizing harness / routing / triage / operator language.
- New visible lines on the profile and activity surfaces did not open a new branch; they stayed in the same AI-infra / operational workflow lane.

### Representative excerpts
```text
ethan13917
2026-04-23
요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다. 노가다라고 했으면 귀엽게 봐주려나? 사실 목적성에 맞게 쓰기 위해서는 난 오히려 강력한 모델을 써야하는게 맞다고 본다. 오푸스나 gpt5.4같은
예를들어 간단한 llm 위키 큐레이션을 크론 자동화를 하고있는데 최고 프론티어모델 쓰더라도 라우팅이며 트리아지며 노가다로 깎고 깎아야 하거늘….
다만 미래를 위해서라도(가격을 계속 올리는) 멀티 모델에 테스트는 해야겠지. 프론티어든 온프레 오픈소스든 근데 이것자체도 하네스인걸?
```

```text
bellman.pub
1주
요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.

작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다. 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.
```

```text
vibevault.nesto
1주
그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
```

## 2) YouTube — subscriptions / watch later / liked / downloads

### New surfaced titles worth keeping as raw only
```text
Reddit AI SEO: Rank #1 on Google FREE!
Lobster Father: New Telegram AI Agent is INSANE!
변호사가 앱으로 시장을 바꾼다 (Claude Code)
```

### Existing lane still dominant
```text
Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
Claude Code is now FREE: Here’s how…
Redis: From Cache to AI Agent Backbone
NEW Google Browser Use AI Agent is INSANE!
```

## 3) GitHub stars — current daily list

### No meaningful change
```text
code-yeongyu / not-claude-code-emulator
AtomicBot-ai / atomic-hermes
NousResearch / hermes-agent
jung-wan-kim / memory-bank
first-fluke / oh-my-agent
firecrawl / web-agent
shanraisshan / claude-code-best-practice
outsourc-e / hermes-workspace
```

## 4) Google My Activity — search history

### No meaningful change at the top of today’s feed
```text
오늘
검색
알림 3개
포함된 주제:
KRX:071050
Google 기능 업데이트
박동빈
오후 6:48 • 세부정보

검색
Google 검색 을(를) 방문했습니다.
오후 5:12 • 세부정보
```

## 5) ChatGPT — recent list / current conversation

### Newly surfaced recent prompts
```text
비트코인 청산 맵 해석
Codex 실무 활용법
Proxmox API 클러스터 인증
Cloudflare vs 가비아 비교
Claude Code와 Hermes 활용
리눅스 자동 패키지 설치
와이파이 셀룰러 약한 이유
```

### Noise filtered out
- hairstyle/lookbook items
- sports broadcast screenshots/clips
- generic entertainment and social chatter

## 6) Claude — recent list / current conversation

### Reinforcement only
```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
GPU 사업 기반 경제적 자유 로드맵
메모리 업데이트 내용
```

## Filtering notes
- Kept the AI agent / infra / operator signals and the few new ChatGPT / YouTube titles that stayed inside that lane.
- Dropped sports-heavy, entertainment-only, beauty, and general chatter surfaces.
- No durable concept update was justified from this pass.

## Why this raw exists
This file is the evidence store for the 2026-05-06 19:00 collection pass, kept separate from the durable summary layer.
