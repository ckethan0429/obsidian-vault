---
title: Interest Signal Collection — 2026-05-09 19:00 KST
created: 2026-05-09
updated: 2026-05-09
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, managed-agents, ai-infra, memory-bank, oh-my-agent, shared-memory]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/@ethan13917/replies
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: append_existing
route_confidence: 0.90
route_reason: The afternoon live pass mostly reinforced the existing managed-agents / AI infra thesis. The strongest fresh evidence was a real GitHub stars cluster plus Threads/YouTube examples that sharpen the same operator and operating-economics axes.
routing:
  route: append_existing
  confidence: 0.90
  reasons:
    - Threads activity/replies repeated the harness, parallelism, worktree isolation, and event-driven escalation language already present in earlier runs
    - GitHub stars finally exposed concrete repo names in the same agent / memory / harness cluster instead of an empty shell
    - YouTube watch later added more agent / skills / AI-stack / data-center examples, but they fit existing durable concepts
    - Google, ChatGPT, and Claude were mostly reinforcement, with no new durable branch
---

# Interest Signal Collection — 2026-05-09 19:00 KST

## Live session notes
- Live Chrome CDP targets on `127.0.0.1:9222` were usable and already logged in for Threads, YouTube, GitHub, Google, ChatGPT, and Claude.
- Compared against the 08:00 social pass and the 11:00 new-target pass, most surfaces were reinforcement. The clearest new evidence was the GitHub stars list, which finally surfaced actual repo names in the agent / memory / harness cluster.
- Browser-tool snapshots were not used as authority; the CDP page text was the source of truth.

## 1) Threads

### Likes — mostly reinforcement
```text
좋아요 • Threads
besty_moon
1주
진짜 멋지다ㅠㅠㅠㅠㅠ

korean.thiel
1주
xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
VC = 모험자본
모험은 익숙한 것에서 벗어난 베팅이다.

braincheck.co.kr
바이브코딩 Vibe coding
1주
바이브 코딩에 가장 좋은 언어는?
나는 지금 이렇게 쓰고 있음
프론트: Dart (Flutter)
백엔드: Go
```

### Activity — strongest reinforcement surface
```text
활동
zinc10000mg
님 외 48명
1주
부모 잘못이지 뭐.. 기본 예의가 없는거다

회원님의 게시물에서 팔로우했습니다
부모 잘못이지 뭐.. 기본 예의가 없는거다

회원님의 스레드 조회수가 100회가 넘었습니다.
1주
진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.

회원님의 게시물에서 팔로우했습니다
팔로잉
진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.
뭐 해볼라카면 정치한다고 쇼하네.. 지금까지 정부랑 대기업 뭐함??

bellman.pub
2주
요즘은 그냥 phase마다 나눠서 병렬 작업합니다.
작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다.
병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.

vibevault.nesto
2주
회원님의 게시물에서 팔로우했습니다
맞팔로우
6/7 지금 잡아야 할 포지션

그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다.
Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다.
다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.

witty_y
님 외 12명
2주
에이전트 생산성의 진실
memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다.
Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다.
차이는 모델이 아니라 운용 습관이다.

pcswoo
님 외 1명
2주
4/5 공용 규칙
팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다.
AI가 실수할 때마다 규...
```

### Reposts — operator / agent tooling reinforcement
```text
Claude Code막 시작하시는 분들께
Hermes -> kimi-k2.5
openclaw -> qwen3.6-plus
현시점 opencode-go가 최고의 대안이 될듯 싶다.

AI 에이전트가 영상을 "직접 쓰도록" 설계된 세상 첫 프레임워크, 왜 이게 판을 바꾸는지 정리했습니다.
```

### Replies — same axis, plus infra economics
```text
vllm으로 모델 돌려보시죠

월 200달러 클로드 맥스를 10개씩 돌리는 사람, N억원 가치의 로컬 AI 인프라를 돌리는 사람들을 얘기하는겁니다.

회원님의 답글 조회수가 100회가 넘었습니다.
3/5 알림 관리
병렬은 계속 쳐다보는 순간 무너진다.
그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다.
운영자는 모든 과정을 감시하지 않는다.
필요한 순간에만 개입한다.
좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다.
```

### Profile — unchanged / reinforcement
```text
프로필
씨케이
ethan13917
aI/비트코인/크립토/it 관심있고 투자합니다.
```

## 2) YouTube

### Subscriptions — mostly sports / entertainment noise
```text
[25/26 UCL] AT 마드리드 vs 아스날 3분 하이라이트｜SPOTV FOOTBALL
[2026 북중미 챔피언스컵] 4강 1차전 LAFC vs 톨루카 손흥민 주요장면
코비 마이누는 2031년까지 맨유와 함께하기로 결정했다
```

### Watch later — strongest new items
```text
최소 비용 최대 효과, 데스크 셋업은 이렇게 하세요
State of the Claw — Peter Steinberger
바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
LiteParse - The Local Document Parser
Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
If I Started A Business in 2026, I'd Do This
AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자 (커서맛피아 최수민님)
랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀
What Is an AI Stack? LLMs, RAG, & AI Hardware
바이브 코딩은 끝났다! 클로드 코드로 1시간 만에 결제 시스템까지 완성 에이전틱 코딩이란?
```

### Liked / downloads — 변화 없음
```text
홈
Shorts
구독
내 페이지
```

```text
오프라인 저장한 동영상이 여기에 표시됩니다.
```

## 3) GitHub Stars — strongest new source

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
Topics
Filter by languages
1 JavaScript
6 Python
6 TypeScript
1 HTML
```

```text
blader / humanizer
Claude Code skill that removes signs of AI-generated writing from text

code-yeongyu / not-claude-code-emulator
ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

AtomicBot-ai / atomic-hermes
The agent that grows with you

NousResearch / hermes-agent
The agent that grows with you

jung-wan-kim / memory-bank
Starred

first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.

firecrawl / web-agent
Open-source web data agent optimized for structured web research

shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

## 4) Google My Activity

```text
오늘
검색
알림 3개
포함된 주제:
KRX:071050
Google 기능 업데이트
박동빈
오후 6:48 • 세부정보
```

```text
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
```

```text
4월 27일
검색
claude code install 을(를) 검색했습니다.
how to update claude code 을(를) 검색했습니다.
codex 을(를) 검색했습니다.
```

## 5) ChatGPT

```text
공유 메모리 에이전트
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조입니다.
```

```text
Claude Code Stop hook으로 메모리를 연결하는 방법
Qdrant + Ollama + mem0 세 개를 올린다
provider.allow_fallbacks: false
Qdrant 타임아웃 발생
```

## 6) Claude

```text
최근 항목
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
어른용 장난감 네이버스토어 판매
Meta 스레드 API 리다이렉트 URL 설정 오류
AI 연동 가능한 영상편집 툴
관심 신호에서 패턴 찾기
M365 Planner와 GitHub Project 연동
플랩풋볼 서비스 분석 및 개선방향
B2B 솔루션 배포 사이클 전략
```

```text
입력 내용: 우리나라는 교육에 돈을 많이쓰지만 상대적으로 saas구독에는 인색해.
우리나라는 교육에 돈을 많이쓰지만 상대적으로 saas구독에는 인색해. 그래서 소프트웨어 + 교육비를 녹이는 비즈니스는 어떻게 생각해

굉장히 날카로운 관찰이에요. 한국 시장의 구조적 특성을 정확히 찌른 포인트라, 제가 본 대로 솔직하게 분석해볼게요.
```

### Filtering notes
- Threads likes, GitHub stars, and YouTube subscriptions were mostly reinforcement or noise; the strongest new evidence came from Threads activity, GitHub stars, and the watch-later list.
- Sports/entertainment content in YouTube subscriptions was kept in raw but excluded from any summary reading.
- The afternoon pass did not open a new durable concept branch; it sharpened the existing managed-agents / AI-infra / shared-memory axis.

## Why this raw exists
This file is the evidence store for the 2026-05-09 afternoon collection run.
