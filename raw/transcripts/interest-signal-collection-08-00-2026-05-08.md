---
title: Interest Signal Collection — 2026-05-08 08:00 KST
created: 2026-05-08
updated: 2026-05-08
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, raw-only, reinforcement, agents, infra, claude-code]
sources:
  - https://www.threads.com/@calmtiger_/post/DVdXBiKAaXH
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/activity
  - https://www.threads.com/liked
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: raw_only
route_confidence: 0.87
route_reason: Most live surfaces repeated the 2026-05-07 reinforcement axis around Claude Code, agent workflows, AI infra, and operator economics. The only clearly new raw items were a Threads post about Claude Code setup tips + plugins and a new GitHub star (`blader / humanizer`); those fit the existing ecosystem and do not justify a new durable wiki branch.
routing:
  route: raw_only
  confidence: 0.87
  reasons:
    - Threads profile / reposts / replies / activity mostly repeated the existing agent / infra / education-packaging axis
    - YouTube subscriptions and watch-later remained dominated by the same AI agent, Claude Code, MCP, and Proxmox items seen in prior passes
    - GitHub Stars added one new repo, `blader / humanizer`, but it still fits the Claude Code / best-practice ecosystem rather than opening a new branch
    - Google My Activity, Claude, and ChatGPT were largely reinforcement of earlier search / conversation patterns
    - raw evidence should be retained, but no durable wiki promotion was clearly justified today
---

# Interest Signal Collection — 2026-05-08 08:00 KST

## Live session notes
- browser tool opened Threads logged out, but the live Chrome CDP tabs on `127.0.0.1:9222` were usable and already logged in.
- Compared with the 2026-05-07 raw passes, most surfaces were reinforcement.
- The only clearly new raw items were a Threads post about Claude Code setup tips + plugins and a new GitHub star (`blader / humanizer`).

## 1) Threads — new post surface

### `calmtiger_` post
Page title:
- `누구나 그럴듯한 '딸각' 계획은 있다. 바이브코딩 해보기 전까지는. 2주 동안 클로드 코드와 격하게 딩굴고 깨달은 점이 있어! 비개발자는 초기 새팅을 잘 해야 한다. 그래서 준비했어! 처음부터 알았으면 2주를 아꼈을 클로드 코드 기본 세팅 팁 + 알아서 해주는 플러그인 모음🗂`

```text
스레드
조회 7.1만회
calmtiger_
2026-03-04
누구나 그럴듯한 '딸각' 계획은 있다.
바이브코딩 해보기 전까지는.
2주 동안 클로드 코드와 격하게 딩굴고
깨달은 점이 있어!
비개발자는 초기 새팅을 잘 해야 한다.
그래서 준비했어!
처음부터 알았으면 2주를 아꼈을
클로드 코드 기본 세팅 팁 + 알아서 해주는 플러그인 모음🗂
```

### Threads likes / activity / reposts / profile — mostly reinforcement

`좋아요` viewport:
```text
좋아요
besty_moon
1주
진짜 멋지다ㅠㅠㅠㅠㅠ
2.9천
133
50
190
korean.thiel
1주
xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
VC = 모험자본
모험은 익숙한 것에서 벗어난 베팅이다.
근데 한국 VC씬에서 딜소싱 채널은 — 대학 동기, 회사 동기, 군대 동기다. 같은 학번 다섯 명이 같은 회사 라운드에 들어간다.
이건 VC 투자가 아니라 동창회 계모임일뿐이다.
braincheck.co.kr
바이브코딩 Vibe coding
1주
바이브 코딩에 가장 좋은 언어는?
나는 지금 이렇게 쓰고 있음
프론트: Dart (Flutter)
백엔드: Go
vibematfia
1주
요즘 지인들한테 추천하는 바이브코딩 책
park0_602
1주
...
```

`활동` viewport:
```text
활동
zinc10000mg
님 외 48명
1주
부모 잘못이지 뭐.. 기본 예의가 없는거다
vibevault.nesto
2주
6/7 지금 잡아야 할 포지션
그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다.
bellman.pub
2주
요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다.
```

`리포스트` viewport:
```text
gptaku_ai
2026-03-01
더욱 많은 분들이 클로드코드로
놀라움을 경험해보셨으면 하는 마음에
클로드코드 101을 만들었습니다
...
qjc.ai
2026-04-20
Claude Code가 이제 영상을 만듭니다.
HeyGen이 "HyperFrames"를 오픈소스로 공개했습니다.
...
slamslam__
2026-04-19
DGX SPARK로 Agentic AI 서버 구축하는 분들은
이글을 꼭 보시길 바랍니다.
...
```

## 2) YouTube — reinforcement

### Subscriptions
```text
Live on 4/30(목) 이란 전쟁 때문에 AI 데이터센터 거품 터지나 (김열매 / 애널리스트)
언더스탠딩 : 세상의 모든 지식

Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
AI Engineer

LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
AI Engineer

Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor
AI Engineer

Claude Code is now FREE: Here’s how…
Julian Goldie SEO

The Only GoHighLevel Guide You'll Ever Need in 2026
AI Guy

Reddit AI SEO: Rank #1 on Google FREE!
Julian Goldie SEO
```

### Watch later
```text
State of the Claw — Peter Steinberger
AI Engineer

바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
Jay Choi | 인디해커 라이프

IT 기술 지식 20분만에 시원하게 뻥 뚫어 드립니다. | 바이브코딩 하는 분 꼭 끝까지 들어보세요.
기술노트with 알렉

Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
Grace Leung

Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
Bloomberg Originals

Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
Steve Eisman
```

### Liked / downloads
```text
좋아요
홈
Shorts
구독
내 페이지
설정
오프라인 저장한 동영상이 여기에 표시됩니다.
```

## 3) GitHub Stars — one new repo, rest unchanged

Page source: `https://github.com/stars`

```text
Your Stars
15
All stars
15
All repositories
0
Your repositories
15
Others’ repositories
0

STARRED REPOSITORIES
blader / humanizer
Claude Code skill that removes signs of AI-generated writing from text

code-yeongyu / not-claude-code-emulator
ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

AtomicBot-ai / atomic-hermes
The agent that grows with you

NousResearch / hermes-agent
The agent that grows with you

k2-fsa / OmniVoice
High-Quality Voice Cloning TTS for 600+ Languages

jung-wan-kim / memory-bank

first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.

firecrawl / web-agent
Open-source web data agent optimized for structured web research

jorgebmann / pyturboquant
A Python implementation of Google's TurboQuant framework (WIP)

shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

## 4) Google My Activity — reinforcement

Page source: `https://myactivity.google.com/search-services/history/search`

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
어제
검색
알림 6개
포함된 주제:
클로드
깃허브
파업
주식
날씨
오후 11:02 • 세부정보
검색
m365 graph api 을(를) 검색했습니다.
오후 3:45 • 세부정보
검색
claude code install 을(를) 검색했습니다.
오후 3:10 • 세부정보
검색
how to update claude code 을(를) 검색했습니다.
오후 3:09 • 세부정보
검색
threads api 을(를) 검색했습니다.
오전 12:44 • 세부정보
```

## 5) Claude / ChatGPT — reinforcement

### Claude recent items
```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
어른용 장난감 네이버스토어 판매
Meta 스레드 API 리다이렉트 URL 설정 오류
AI 연동 가능한 영상편집 툴
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
플랩풋볼 서비스 분석 및 개선방향
B2B 솔루션 배포 사이클 전략
YouTube video relatable moment
효율적인 영어 노출 방법 찾기
Claude 코드 권한 우회 방법
온프레 PVE 서버 자동 배포 구성
GPU 사업 기반 경제적 자유 로드맵
```

### ChatGPT conversation
```text
공유 메모리 에이전트

TL;DR
이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.

최근
Claude Code와 Hermes 활용
Proxmox API 클러스터 인증
Cloudflare vs 가비아 비교
리눅스 자동 패키지 설치
GitHub CLI 워크플로우 권한
```

## Filtering notes
- Threads profile / reposts / replies / activity were kept for evidence, but most rows were repeated from prior runs and did not change the macro reading.
- YouTube sports/entertainment noise was not treated as the main signal; the same AI / agent / Claude Code / MCP / Proxmox titles kept resurfacing.
- GitHub Stars had one genuinely new repo (`blader / humanizer`), but it still fits the existing Claude Code ecosystem.
- Google My Activity, Claude, and ChatGPT were reinforcement rather than a new branch.

## Why this raw exists
This file is the evidence store for the 2026-05-08 morning collection run, separate from the previous-day reinforcement passes.
