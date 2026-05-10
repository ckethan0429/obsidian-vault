---
title: Interest Signal Collection — 2026-05-10 19:00 KST
created: 2026-05-10
updated: 2026-05-10
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, ai-infra, managed-agents, threads-api]
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
  - https://developers.facebook.com/tools/explorer/2412305655898781/?domain=THREADS&method=GET&path=help&version=v1.0
route_hint: append_existing
route_confidence: 0.82
route_reason: Live surfaces surfaced a few fresh examples—Threads liked-page Claude Code setup/plugins post, YouTube conversational-agent / codegen / skill items, new ChatGPT and Claude recents, and a Meta Threads API explorer error—but they still reinforce the existing managed-agents / Claude Code / AI-infra / education-packaging axis rather than opening a new durable branch.
routing:
  route: append_existing
  confidence: 0.82
  reasons:
    - Threads liked-page top item introduced a more concrete Claude Code setup/plugins example, but it still fits the existing Claude Code / agent tooling lane
    - YouTube subscriptions surfaced new agent/conversational-agent items, but they are the same durability axis as the earlier managed-agents and skills signals
    - ChatGPT and Claude recents moved deeper into AI infra, Proxmox, and packaging discussions, reinforcing existing operator/business themes
    - Meta's Threads API explorer showed live troubleshooting / token-generation context, but the visible error was operational rather than a new concept branch
    - GitHub stars and Google My Activity were largely reinforcement-only in the visible slices
---

# Interest Signal Collection — 2026-05-10 19:00 KST

## Live session notes
- Live Chrome CDP targets on `127.0.0.1:9222` were usable.
- Threads, YouTube, GitHub, Google, ChatGPT, Claude, and a Meta Threads API explorer tab were open in the live session.
- Compared with the morning run, the clearest fresh deltas were one new Threads liked item, new YouTube AI/agent items, a new ChatGPT recent-chat cluster, a new Claude business-model discussion, and a Meta Threads API explorer error.
- GitHub stars and Google My Activity were mostly reinforcement-only.

## 1) Threads — liked page / profile surfaces

### New liked item visible at the top
```text
좋아요
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

### Reinforcement only
- `activity`, `reposts`, `replies`, and profile were still the same operator / AI-infra / social-noise mix as the morning run.
- The profile header still shows `ai/비트코인/크립토/it 관심있고 투자합니다.`

## 2) YouTube — subscriptions / watch later / downloads

### New subscription items visible in the hydrated feed
```text
Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor
Claude Code is now FREE: Here’s how…
Reddit AI SEO: Rank #1 on Google FREE!
```

### Noise I filtered out
- The top of the subscriptions feed was still dominated by sports, Shorts, and live content.
- Watch later remained the same AI / infra / Claude Code backlog from the morning run.
- Liked videos remained effectively empty in the visible body.

## 3) GitHub Stars — reinforcement only
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
- The visible top slice was the same agent / harness / Claude Code cluster as the morning run.
- The page counter now shows 15 starred repositories, but no new repo names were visible in the top slice.

## 4) Google My Activity — reinforcement only
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
- The rest of the page repeated earlier `Claude Code + Telegram agent + mem0 + Qdrant + Ollama`, `Proxmox API 클러스터 인증`, `Cloudflare vs 가비아 비교`, and related searches.

## 5) ChatGPT — new recent topic cluster
```text
공유 메모리 에이전트
CPU shortage in AI
AI 인프라 플랫폼 개발
VM 삭제 보호 해제 방법
AI 인프라 수요 분석
GS인증과 보안적합성 검증 관계
PVE 호스트 네트워크 장애
PVE DHCP 구성 가능 여부
Proxmox API 클러스터 인증
Cloudflare vs 가비아 비교
Claude Code와 Hermes 활용
리눅스 자동 패키지 설치
```

### Current answer excerpt
```text
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조
```
- This is the clearest new ChatGPT delta vs the morning run: the current recent-chat list moved deeper into AI infra / Proxmox / security / supportability topics.

## 6) Claude — new business-model framing
```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
```

### Current answer excerpt
```text
굉장히 날카로운 관찰이에요. 한국 시장의 구조적 특성을 정확히 찌른 포인트라...
교육이 입구, SaaS가 lock-in
SaaS를 "교육 과정 수강료"로 리프레이밍
```

### Reinforcement items near the current chat
```text
어른용 장난감 네이버스토어 판매
관심 신호에서 패턴 찾기
B2B 솔루션 배포 사이클 전략
Obsidian vault 모바일 동기화 방법
Claude 코드 권한 우회 방법
온프레 PVE 서버 자동 배포 구성
GPU 사업 기반 경제적 자유 로드맵
```

## 7) Meta for Developers / Threads API — new operational signal
```text
그래프 API 탐색기
GET graph.threads.net/v1.0/
Node: help
Unsupported get request. Object with ID 'help' does not exist, cannot be loaded due to missing permissions, or does not support this operation
code: 100
error_subcode: 33
Meta 앱 hermes-app
Generate Threads Access Token
```
- This looks like active Threads API exploration/troubleshooting rather than a consumer-interest signal, but it is still a useful live operational clue.

## Filtering notes
- I excluded most sports, Shorts, and live-stream noise from YouTube.
- GitHub and Google were mostly reinforcement, so I did not treat them as new durable branches.
- Threads activity/reposts/profile were stable; only the top liked item looked meaningfully new.
- The new ChatGPT / Claude items still sit inside the existing managed-agents / AI-infra / Claude Code / packaging lane.

## Why this raw exists
This file is the evidence store for the 2026-05-10 19:00 collection pass, separate from the 08:00 and 11:00 runs.
