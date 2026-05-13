---
title: Interest Signal Collection — 2026-05-13 19:00 KST
created: 2026-05-13
updated: 2026-05-13
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, raw-only, reinforcement, agents, infra, claude-code, mcp]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
route_hint: raw_only
route_confidence: 0.88
route_reason: Same-day afternoon pass mostly reinforced the existing Claude Code / agent / infra / business-model axis. Fresh visible deltas included new GitHub stars for blader/humanizer and k2-fsa/OmniVoice, a new Google search trail around Threads API / pricing / long-running agents, and fresh YouTube items about conversational agents, skills, agent backbones, and browser-use agents, but nothing crossed the bar for a new durable branch.
routing:
  route: raw_only
  confidence: 0.88
  reasons:
    - Threads activity/reposts/replies stayed within the existing AI coding / operator / infra cluster.
    - YouTube subscriptions and watch later mixed sports noise with new AI agent/tooling titles, but the macro-axis stayed stable.
    - GitHub Stars rotated to a new pair of repos, yet they still sit inside the AI tooling / assistant / voice / writing ecosystem.
    - Google My Activity added a stronger Threads API / long-running agents / pricing research trail, but it reinforced the same platform / agent / ops lane.
    - ChatGPT and Claude remained in the memory / Proxmox / PVE / SaaS / education orbit.
    - No new durable concept branch emerged today.
---

# Interest Signal Collection — 2026-05-13 19:00 KST

## Live session notes
- Chrome CDP targets on `127.0.0.1:9222` were available and already logged in.
- The browser snapshot itself was not the source of truth; live page targets were used for extraction.
- Compared against the 2026-05-13 08:00 and 11:00 baselines, the run was mostly reinforcement.
- Freshest deltas were GitHub stars, Google My Activity, ChatGPT recents, Claude recents, and rotated YouTube surfaces.
- `X` was not present in the live CDP page-target list for this run, so it was not collected.

## 1) Threads — liked / activity / profile / reposts / replies

### Liked
```text
braincheck.co.kr
바이브코딩 Vibe coding
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
다들 뭐 씀?
```

### Activity
```text
요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.
병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다.
AI 인프라의 진짜 승부처
프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.
```

### Reposts
```text
GPT 모델로 바꾸고나서 Agent 사용률이 급격하게 줄었다.. GPT 5.4 형님의 TMI 대답이 코딩할땐 참 좋은데.. 대화할때 티키타카가 너무 안된다. ㅋㅋ; 말이 넘 길어요
그런데 현시점 opencode-go 가 최고의 대안이 될듯 싶다. 5$ 첫달 프로모션 월 10달러이다. 대충 60달러 정도 되는 쿼터를 10달러에 쓸 수 있다고 생각하면 된다.
Hermes -> kimi-k2.5
openclaw -> qwen3.6-plus
체감상 이렇게 맞춰서 쓰니까 너무 좋다. 만능 일꾼에 가까운 에르메스에는 안정성이 좋은 kimi 가, 멀티 에이전트 설정 및 에이전트 별 명확한 역할 부여가 되어있는 오픈클로에는 qwen3.6-plus 의 성능이 도움이 된다.
Claude Code가 이제 영상을 만듭니다.
AI 에이전트가 영상을 "직접 쓰도록" 설계된 세상 첫 프레임워크, 왜 이게 판을 바꾸는지 정리했습니다.
DGX SPARK로 Agentic AI 서버 구축하는 분들은
- 요즘 핫한 Gemma4 31B풀 성능 / 양자화 모델
- 보급형 Gemma4 26B 풀 성능 / 양자화 모델
더욱 많은 분들이 클로드코드로
놀라움을 경험해보셨으면 하는 마음에
클로드코드 101을 만들었습니다
```

### Replies / Profile
```text
AI를 적극적으로 사용하는 분들은 정말 몇십배 몇백배의 생산성을 뽑아냅니다.
적극적으로 쓴다는 레벨은, M5 32GB 맥북 하나 사서 ollama 깔고 32B INT4 모델 돌려보고나서 ‘클로드가 더 좋네’라는 수준이 아닙니다.
월 200달러 클로드 맥스를 10개씩 돌리는 사람, N억원 가치의 로컬 AI 인프라를 돌리는 사람들을 얘기하는겁니다.
이 사람들에게는 5%의 성능 향상이 눈에 보이는 돈/성과/시간으로 돌아옵니다.
```

## 2) YouTube — subscriptions / watch later / likes / downloads

### Subscriptions
```text
Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor
Claude Code is now FREE: Here’s how…
Redis: From Cache to AI Agent Backbone
NEW Google Browser Use AI Agent is INSANE!
```

### Watch later
```text
65줄의 스킬에 깃허브 스타 6500개, 단순하지만 직관적 가이드라인으로 성능을 끌어올린 사례 - 안티그래비티에 적용하기
Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀
GitHub이 만든 AI 프레임워크 Spec Kit
이제 대세는 Claude Code!? 찐 꿀팁 대방출 🔥
Supabase MCP로 앱 찍어내는 방법
```

### Likes / Downloads
- Likes는 비어 있었고 Downloads도 비어 있었다.

## 3) GitHub Stars
```text
blader / humanizer
Claude Code skill that removes signs of AI-generated writing from text
k2-fsa / OmniVoice
High-Quality Voice Cloning TTS for 600+ Languages
NousResearch / hermes-agent
first-fluke / oh-my-agent
Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
firecrawl / web-agent
Open-source web data agent optimized for structured web research
shanraisshan / claude-code-best-practice
from vibe coding to agentic engineering - practice makes claude perfect
```

## 4) Google My Activity
```text
검색 / Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
검색 / threads api 을(를) 검색했습니다.
검색 / gemini api pricing 을(를) 검색했습니다.
검색 / kimi api pricing 을(를) 검색했습니다.
검색 / claude api pricing 을(를) 검색했습니다.
검색 / Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
검색 / opencode-go 을(를) 검색했습니다.
검색 / anthropic effective harness for long running agents 을(를) 검색했습니다.
검색 / anthropic managed agent 을(를) 검색했습니다.
검색 / claude dangerously skip permissions 을(를) 검색했습니다.
검색 / claude code discord 을(를) 검색했습니다.
검색 / Threads에서 소통해보세요 을(를) 방문했습니다.
검색 / Claude: Sign in 을(를) 방문했습니다.
검색 / chatgpt 을(를) 검색했습니다.
검색 / Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.
```

### Notes on noise
- There were also consumer/gaming/stock-search rows in the timeline, but they were not durable enough to surface here.

## 5) ChatGPT
```text
최근 / AI 인프라 메시지 재정의 / 아이폰 음성 회의록 작성
아이폰 음성 회의록 작성 / Proxmox 시험환경 구성도 / VMware Nutanix AIOps 기능
Proxmox 시험환경 구성도 / VMware Nutanix AIOps 기능 / AI Infra 정의
AI Native 개인 운영체제 / 차량 제조사 API 제공 / 프론티어 모델 정책 설정
AI 인프라 팔로우 추천 / MCP 서버 원격 연결 방법 / Mitmproxy 설명
AI Freemium 전략 문제 / CPU shortage in AI / AI 인프라 플랫폼 개발
```

```text
이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
중요한 것은 개별 도구 자체보다, 여러 에이전트와 세션이 같은 메모리 저장소를 읽고 쓰도록 “배선”하는 구조이며, 이를 위해 Stop hook, mem0 설정 명시, provider 고정, idempotency, 로컬 fallback 같은 운영 디테일을 반드시 챙겨야 한다는 내용입니다.
Claude Code Stop hook으로 메모리를 연결하는 방법
mem0 + Qdrant + Ollama
```

## 6) Claude
```text
숨기기 / 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델 / 어른용 장난감 네이버스토어 판매
어른용 장난감 네이버스토어 판매 / Meta 스레드 API 리다이렉트 URL 설정 오류 / AI 연동 가능한 영상편집 툴
AI 연동 가능한 영상편집 툴 / 관심 신호에서 패턴 찾기 / M365 Planner와 GitHub Project 연동
온프레 PVE 서버 자동 배포 구성 / 온프레 서버와 NAS를 이용한 배포파일 제공 방식 / AI 시대 승진 기준의 변화: 성과에서 대체 불가능성으로
AI 시대 승진 기준의 변화: 성과에서 대체 불가능성으로 / GS인증 상담요청서 작성 - PVE 클러스터 장비 사양
GPU 사업 기반 경제적 자유 로드맵 / B2B 비즈니스와 B2C 트렌드 상품의 가치 평가 / 한국 방산 소프트웨어 스타트업의 가능성
```

```text
한국 B2B SaaS 시장의 고질적 문제는 "월 구독료"라는 단어 자체에 대한 저항입니다.
구독료 = OPEX, 매달 품의, 효과 측정 압박 / 교육비 = 인재개발비, 연초 예산에 통으로 편성, 성과 측정 느슨
CK가 이미 하고 있는 Proxmox 교육 프로그램(연 6천만원)은 이 구조를 정확히 활용하고 있는 증거죠.
"교육 + SaaS" 번들로 리프레이밍하면, 같은 제품도 교육비/컨설팅비/용역비로 더 쉽게 팔 수 있습니다.
```

## Filtering notes
- `X`는 이번 live CDP 타깃 목록에 없어서 수집하지 못했다.
- YouTube의 스포츠/연예/라이브 노이즈는 원문에 남겼지만 짧은 요약에서는 제외했다.
- `Likes`와 `Downloads`는 이번 런에서 비어 있었다.
- 오늘은 새 durable concept page로 올릴 만큼 축이 바뀌지 않아 `raw_only`로 정리했다.

## Why this raw exists
This file is the evidence store for the 2026-05-13 19:00 KST afternoon collection pass, kept separate from same-day morning and new-target runs.
