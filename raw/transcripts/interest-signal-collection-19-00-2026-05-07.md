---
title: Interest Signal Collection — 2026-05-07 19:00 KST
created: 2026-05-07
updated: 2026-05-07
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, raw-only, reinforcement, agents, infra]
sources:
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/activity
  - https://www.threads.com/liked
  - https://www.youtube.com/feed/subscriptions
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: raw_only
route_confidence: 0.85
route_reason: 대부분의 표면이 아침/11시 패스의 반복이었고, 새로 보인 항목들은 YouTube의 일부 AI/마케팅/검색노출 영상과 Threads liked의 소수 신규 행 정도였다. 새 durable concept 분기로 올릴 만큼의 변화는 없었고, raw evidence만 보존하는 쪽이 적절했다.
routing:
  route: raw_only
  confidence: 0.85
  reasons:
    - Threads profile / reposts / replies / activity는 기존의 agent / infra / 운영자 관점 반복이 대부분이었다
    - YouTube subscriptions에서 AI 데이터센터, GoHighLevel, Reddit AI SEO 같은 몇 개의 새 영상이 surfaced 되었지만 기존 축의 변형에 가깝다
    - Threads liked에서 새롭게 보인 vibematfia의 vibe coding book 추천은 흥미롭지만 durable branch로 승격할 정도는 아니다
    - GitHub stars, Google My Activity, ChatGPT, Claude는 전반적으로 reinforcement였다
---

# Interest Signal Collection — 2026-05-07 19:00 KST

## Live session notes
- Live CDP tabs from the running Chrome profile were usable.
- Compared with the morning run and the 11:00 new-target pass, most surfaces were reinforcement.
- Only a few new surfaced items were worth keeping as raw evidence; no durable wiki promotion was justified.

## 1) YouTube — newly surfaced items

Page source: `https://www.youtube.com/feed/subscriptions`

```text
Live on 4/30(목) 이란 전쟁 때문에 AI 데이터센터 거품 터지나 (김열매 / 애널리스트)
언더스탠딩 : 세상의 모든 지식
194명 시청 중

The Only GoHighLevel Guide You'll Ever Need in 2026
AI Guy
조회수 131회
•
1시간 전

Reddit AI SEO: Rank #1 on Google FREE!
Julian Goldie SEO
조회수 60회
•
1시간 전
```

## 2) Threads — newly surfaced like

Page source: `https://www.threads.com/liked`

```text
vibematfia
요즘 지인들한테 추천하는 바이브코딩 책
```

## 3) Threads — reinforcement, not a new branch

Page source: `https://www.threads.com/activity`

```text
vibevault.nesto
6/7 지금 잡아야 할 포지션
그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
```

## 4) GitHub Stars / Google / ChatGPT / Claude — reinforcement

### GitHub Stars
- starred repos were effectively unchanged from the morning pass: `not-claude-code-emulator`, `atomic-hermes`, `hermes-agent`, `OmniVoice`, `memory-bank`, `oh-my-agent`, `web-agent`, `pyturboquant`, `claude-code-best-practice`, `hermes-workspace`.

### Google My Activity
```text
Google 검색 을(를) 방문했습니다.
오후 5:12 • 세부정보
```

### ChatGPT
- same `공유 메모리 에이전트` conversation and same shared-memory / Claude Code / mem0 / Qdrant / Ollama pattern.

### Claude
- same B2B/B2C software-plus-education framing and same recent-item cluster around Proxmox, GPU, AI infra, Obsidian, and Threads API.

## Filtering notes
- Omitted repeated morning items from Threads profile/replies/reposts, GitHub stars, ChatGPT, and Claude.
- Sports-heavy YouTube items were kept in raw evidence but not treated as the main signal.
- No durable wiki page was updated in this pass.

## Why this raw exists
This file preserves the afternoon raw evidence for the 2026-05-07 collection run, separate from the morning and 11:00 passes.
