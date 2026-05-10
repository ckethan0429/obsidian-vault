---
title: Interest Signal Collection — 2026-05-10 08:00 KST
created: 2026-05-10
updated: 2026-05-10
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, managed-agents, ai-infra, memory-bank, oh-my-agent, shared-memory, agent-harness]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: append_existing
route_confidence: 0.87
route_reason: Live surfaces added a few fresh repo names, watch-later titles, and search-history items, but they still reinforce the existing managed-agents / AI-infra / operator-workflow axis rather than opening a new durable branch.
routing:
  route: append_existing
  confidence: 0.87
  reasons:
    - GitHub stars moved from empty / baseline-heavy to a concrete agent-tooling cluster, but the repos still map to the existing harness / memory / Claude Code / agent-runtime lane
    - YouTube watch later and subscriptions surfaced new AI/productization examples, but they fit the same infra / tooling / commercialization pattern as the prior run
    - Google, ChatGPT, and Claude mostly reinforced the current operator and infrastructure research axis
    - Threads remained mostly reinforcement with only small language/runtime preference deltas
---

# Interest Signal Collection — 2026-05-10 08:00 KST

## Live session notes
- Live Chrome CDP targets on `127.0.0.1:9222` were usable and already logged in for Threads, YouTube, GitHub, Google, ChatGPT, and Claude.
- Compared with the 2026-05-09 baseline, the clearest new delta was GitHub stars plus YouTube / Google / ChatGPT / Claude recents; Threads mostly reinforced the same axis.
- This run is still on the same managed-agents / AI infra / operator-workflow branch.

## 1) Threads

### Likes — reinforcement with a small language-choice delta
```text
좋아요
besty_moon
1주
진짜 멋지다ㅠㅠㅠㅠㅠ

korean.thiel
1주
xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
VC = 모험자본
모험은 익숙한 것에서 벗어난 베팅이다.
근데 한국 VC씬에서 딜소싱 채널은 — 대학 동기, 회사 동기, 군대 동기다.
같은 학번 다섯 명이 같은 회사 라운드에 들어간다.
이건 VC 투자가 아니라 동창회 계모임일뿐이다.
모험은 술자리에서 일어나지 않는다.
술자리에서 일어나는 건 위험 회피다.

braincheck.co.kr
바이브코딩 Vibe coding
1주
바이브 코딩에 가장 좋은 언어는?
나는 지금 이렇게 쓰고 있음
프론트: Dart (Flutter)
백엔드: Go
이유는 단순함
컴파일 타임에 오류 잡히는 게 진짜 큼
Flutter는
👉 iOS / Android 한 번에 할 수 있어.
Go는
👉 문법 단순해서 AI가 짜도 안정적이야.
```

### Activity — mostly reinforcement, with Ceph / Proxmox / GPU and operator wording still visible
```text
활동
vibevault.nesto
2주
지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다.

news_subs
2주
Managed Agents
프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다.

bellman.pub
2주
병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다.
```

### Reposts — reinforcement
```text
gptaku_ai
2026-03-01
더욱 많은 분들이 클로드코드로
놀라움을 경험해보셨으면 하는 마음에
클로드코드 101을 만들었습니다
...
Claude Code막 시작하시는 분들께
작은 출발점이 됐으면 좋겠습니다
```

### Replies — reinforcement
```text
choisungh
2026-04-17
아니 얼탱이가 없어서 님들 이것 좀 들어보셈
...
"이거 구워줘" 이러는 거야
미역국 국물에 빠진 고기를… 구워달라고???
```

### Profile — unchanged
```text
프로필
씨케이
ethan13917
ai/비트코인/크립토/it 관심있고 투자합니다.
```

## 2) YouTube

### Subscriptions — new AI/productization items amid sports noise
```text
코드팩토리
OpenAI x 코드팩토리 Codex로 모노레포 멀티 플랫폼 서비스 만들기

비디오머그
'클로드 디자인'은 디자이너의 일을 어떻게 바꾸고 있나 / 오그랲 / 비디오머그
```

### Watch later — strongest new items
```text
State of the Claw — Peter Steinberger
바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
LiteParse - The Local Document Parser
Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
If I Started A Business in 2026, I'd Do This
65줄의 스킬에 깃허브 스타 6500개, 단순하지만 직관적 가이드라인으로 성능을 끌어올린 사례 - 안티그래비티에 적용하기 feat : 생활형 계산기 10개
I built a private AI mini-cluster with Framework Desktop
What Is an AI Stack? LLMs, RAG, & AI Hardware
EP 70. 100x 엔지니어의 Claude Code 활용법
고급 개발자용 제대로된 AI 사용법
```

### Liked / downloads — unchanged
```text
YouTube liked videos page showed no visible items in the live body.
오프라인 저장한 동영상이 여기에 표시됩니다.
```

## 3) GitHub Stars — strongest new surface
```text
blader / humanizer
code-yeongyu / not-claude-code-emulator
AtomicBot-ai / atomic-hermes
NousResearch / hermes-agent
k2-fsa / OmniVoice
jung-wan-kim / memory-bank
first-fluke / oh-my-agent
firecrawl / web-agent
jorgebmann / pyturboquant
shanraisshan / claude-code-best-practice
```

### GitHub note
- The stars page is no longer empty; the new visible cluster is still tightly aligned to agent harnesses, memory, Claude Code practice, and adjacent tooling.

## 4) Google My Activity — small but fresh
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

검색
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
Claude Code와 Hermes 활용 을(를) 검색했습니다.
Proxmox API 클러스터 인증 을(를) 검색했습니다.
Cloudflare vs 가비아 비교 을(를) 검색했습니다.
```

## 5) ChatGPT — same lane, slightly newer recents
```text
Claude Code와 Hermes 활용
리눅스 자동 패키지 설치
Proxmox API 클러스터 인증
Cloudflare vs 가비아 비교
Sports Broadcast Photo Analysis
```

## 6) Claude — same lane, slightly newer recents
```text
Meta 스레드 API 리다이렉트 URL 설정 오류
AI 연동 가능한 영상편집 툴
M365 Planner와 GitHub Project 연동
B2B 솔루션 배포 사이클 전략
Obsidian vault 모바일 동기화 방법
Claude 코드 권한 우회 방법
온프레 PVE 서버 자동 배포 구성
GPU 사업 기반 경제적 자유 로드맵
```

## Filtering notes
- Threads likes / activity / reposts / replies were mostly reinforcement; the only notable new-ish bite was the Flutter/Go vibe-coding preference and the Ceph·Proxmox·GPU operator phrasing.
- YouTube subscriptions had a lot of sports / entertainment noise; I kept only the AI / Claude Code / data-center / infra items.
- GitHub stars were the clearest newly surfaced delta.
- Google, ChatGPT, and Claude mostly reinforced the same operator / infra / agent-research axis.

## Why this raw exists
This file is the evidence store for the 2026-05-10 morning collection run, separate from the previous-day baseline and ready for Honcho triage.
