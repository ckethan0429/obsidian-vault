---
title: Interest Signal Collection — 2026-05-09 08:00 KST
created: 2026-05-09
updated: 2026-05-09
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, managed-agents, agent-backbone, mcp, shared-memory]
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
route_confidence: 0.88
route_reason: The live surfaces mostly reinforced the managed-agents / shared-memory / AI agent stack axis. Threads and YouTube surfaced new examples, but they fit an existing durable branch rather than opening a new one.
routing:
  route: append_existing
  confidence: 0.88
  reasons:
    - Threads/YouTube/Google/ChatGPT/Claude all converged on agent orchestration, shared memory, and MCP/backbone tooling
    - GitHub stars remained reinforcement-only with no new repo names
    - the strongest new material sharpened the existing managed-agents/practical-summary pages instead of adding a new concept
---

# Interest Signal Collection — 2026-05-09 08:00 KST

## Live session notes
- Live Chrome CDP targets on `127.0.0.1:9222` were usable and already logged in for Threads, YouTube, GitHub, Google, ChatGPT, and Claude.
- Browser-tool snapshots were not used as authority; the CDP pages were the source of truth.
- Compared against the 2026-05-08 morning pass, most surfaces were reinforcement. The clearest new examples came from managed-agents / AI-agent productization.
- GitHub stars did not surface a new repo name in this pass.

## 1) Threads

### Likes — mostly reinforcement
```text
좋아요 • Threads
Flutter는
Go는
👉 문법 단순해서 AI가 짜도 안정적이야.
```

### Activity — strongest new surface
```text
활동
Managed Agents
2/4 Restartable cattle
1/4 Brain / Hands / Memory
프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다.
Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다.
LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다.
AI 인프라의 진짜 승부처
프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어.
이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다.
AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.
```

### Reposts — operator / agent tooling reinforcement
```text
Claude Code막 시작하시는 분들께
Hermes -> kimi-k2.5
openclaw -> qwen3.6-plus
현시점 opencode-go가 최고의 대안이 될듯 싶다.
AI 에이전트가 영상을 "직접 쓰도록" 설계된 세상 첫 프레임워크, 왜 이게 판을 바꾸는지 정리했습니다.
```

### Replies — same axis, plus vLLM/runtime talk
```text
vllm으로 모델 돌려보시죠
월 200달러 클로드 맥스를 10개씩 돌리는 사람, N억원 가치의 로컬 AI 인프라를 돌리는 사람들을 얘기하는겁니다.
```

### Profile — unchanged / reinforcement
```text
프로필
씨케이
ethan13917
aI/비트코인/크립토/it 관심있고 투자합니다.
```

## 2) YouTube

### Subscriptions — new agent/backbone clips
```text
Lobster Father: New Telegram AI Agent is INSANE!
변호사가 앱으로 시장을 바꾼다 (Claude Code)
Redis: From Cache to AI Agent Backbone
NEW Google Browser Use AI Agent is INSANE!
```

### Watch later — strongest new items
```text
AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자 (커서맛피아 최수민님)
Supabase MCP로 앱 찍어내는 방법
내가 사용해 본 가장 유용한 MCP 서버 😎
이제 대세는 Claude Code!? 찐 꿀팁 대방출 🔥
What Is an AI Stack? LLMs, RAG, & AI Hardware
How I use LLMs
```

### Liked / downloads — 변화 없음
```text
오프라인 저장한 동영상이 여기에 표시됩니다.
```

## 3) GitHub Stars

```text
Your stars
Sort: Recently starred
Starred
You don’t have any starred topics, yet.
```

- 변화 없음. 이번 패스에서는 새 repo 이름이 뜨지 않았다.

## 4) Google My Activity

```text
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
claude code discord 을(를) 검색했습니다.
openclaw cloud 을(를) 검색했습니다.
OpenClaw
Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
anthropic effective harness for long running agents 을(를) 검색했습니다.
anthropic managed agent 을(를) 검색했습니다.
```

## 5) ChatGPT

```text
공유 메모리 에이전트
Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
Claude Code Stop hook으로 메모리를 연결하는 방법
Qdrant + Ollama + mem0 세 개를 올린다
provider.allow_fallbacks: false
Qdrant 타임아웃 발생
```

## 6) Claude

```text
소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
B2C로 다시 볼게요.
AI 학습 프로그램
입력 내용: 오픈클로때문에 맥미니 대란났던거 알지?
그것 때문에 이제 서버를 팩트로 하나 활용하게 되었는데, 이걸 클라우드 호스팅용으로 활용해 보면 어떨까 싶어.
```

### 최근 항목에서 보인 같은 축
```text
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
GPU 클라우드 사업과 퀀트 투자로 경제적 자유 달성하기
관심 신호에서 패턴 찾기
Claude 코드 권한 우회 방법
온프레 PVE 서버 자동 배포 구성
```

## Filtering notes
- Threads likes, GitHub stars, and the browser/Google history were mostly reinforcement of the existing agent / infra / Claude Code axis.
- YouTube sports/entertainment noise was excluded from the summary; only the agent/MCP/backbone items were kept.
- The strongest fresh cluster was the managed-agents / shared-memory / agent-backbone stack, which still fits the existing durable concept set.

## Why this raw exists
This file is the evidence store for the 2026-05-09 morning collection run, separate from the previous-day reinforcement passes.
