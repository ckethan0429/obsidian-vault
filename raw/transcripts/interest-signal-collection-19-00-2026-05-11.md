---
title: Interest Signal Collection — 2026-05-11 19:00 KST
created: 2026-05-11
updated: 2026-05-11
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, raw-only, reinforcement, agents, infra]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/feed/liked
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://claude.ai/chat/1bfd27bd-5f7a-4d79-81c8-911499253e76
  - https://chatgpt.com/c/69e1beff-8be0-83e8-8015-df4828c6b986
route_hint: raw_only
route_confidence: 0.93
route_reason: Same-day social surfaces stayed on the established managed-agent / AI-infra / operator-economics axis. A few fresh items surfaced on YouTube and Google, but they reinforced existing themes rather than opening a new durable branch.
routing:
  route: raw_only
  confidence: 0.93
  reasons:
    - Threads liked/activity/reposts/profile mostly repeated the same AI coding, operator, and infra signals seen earlier today.
    - YouTube subscriptions and watch-later added a few fresh agent/backbone items, but they still sit inside the existing managed-agents / AI-infra axis.
    - GitHub Stars repeated the same agent / Claude Code ecosystem cluster.
    - Google My Activity repeated the existing operator trail and added GPT-5.5 / OpenAI browsing context.
    - Claude and ChatGPT recent lists stayed on the same B2B education, OpenClaw, PVE, memory, and infra themes.
---

# Interest Signal Collection — 2026-05-11 19:00 KST

## Live session notes
- Chrome CDP targets on `127.0.0.1:9222` were available and already logged in.
- The morning `2026-05-11 08:00` raw transcript was used as the main baseline; repeated items were suppressed in the final readout.
- The strongest new material was additive detail inside the same managed-agent / AI-infra / operator-economics lane.

## 1) Threads — liked / activity / profile / reposts / replies

### Liked
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
근데 한국 VC씬에서 딜소싱 채널은 — 대학 동기, 회사 동기, 군대 동기다.
braincheck.co.kr
1주
바이브코딩 Vibe coding
👉 문법 단순해서 AI가 짜도 안정적이야.
vibematfia
1주
요즘 지인들한테 추천하는 바이브코딩 책
park0_602
1주
```

### Activity
```text
활동
zinc10000mg
님 외 48명
1주
회원님의 스레드 조회수가 100회가 넘었습니다.
진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.

님 외 1명
1주
회원님의 스레드 조회수가 100회가 넘었습니다.
진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.

danharu_ai_lab
1주
진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.

2주
머리좋은놈을 알잘딱깔센으로 24시간동안 굴린다 = 오푸스 4.7 토큰을 태운다 아주많이 ㅎㅎㅎ
요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
vibevault.nesto
2주
6/7 지금 잡아야 할 포지션
그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도
memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지.
Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.
3/5 알림 관리
병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다.
2/5 환경 분리
15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다. 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다. 서로의 변경을 덮어쓰지 않고, 충돌 없이 독립적으로 전진한다. 멀티에이전트의 첫 원칙은 협업보다 격리다.
1/5 병렬 실행
보리스의 핵심은 “한 세션을 끝까지 붙잡기”가 아니다. 여러 AI 세션을 동시에 던져놓고, 사람은 막힌 탭을 기다리지 않고 계속 다음 일로 넘어간다. 산출량은 천재 모델 1개보다, 멈추지 않는 작업 큐에서 나온다. 병렬성은 옵션이 아니라 생산성 엔진이다.
4/5 공용 규칙
팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다. AI가 실수할 때마다 규칙을 추가해 같은 사고를 반복하지 않게 만든다. 프롬프트를 길게 쓰는 게 핵심이 아니다. 실패를 규칙으로 축적해 팀의 운영체계로 바꾸는 것, 그게 진짜 레버리지다.
B2B 세일즈와 협상 전략
B2B 세일즈를 '말빨'로 보는 순간 끝이다.
```

### Reposts
```text
gptaku_ai
2026-03-01
더욱 많은 분들이 클로드코드로
놀라움을 경험해보셨으면 하는 마음에
클로드코드 101을 만들었습니다

flowkater
2026-04-19
GPT 모델로 바꾸고나서 Agent 사용률이 급격하게 줄었다..
Hermes -> kimi-k2.5
openclaw -> qwen3.6-plus

qjc.ai
2026-04-20
Claude Code가 이제 영상을 만듭니다.
AI 에이전트가 영상을 "직접 쓰도록" 설계된 세상 첫 프레임워크, 왜 이게 판을 바꾸는지 정리했습니다.

slamslam__
2026-04-19
DGX SPARK로 Agentic AI 서버 구축하는 분들은
- 젠슨황의 추천 Nemotron-3-Super
- 요즘 핫한 Gemma4 31B풀 성능 / 양자화 모델
- 보급형 Gemma4 26B 풀 성능 / 양자화 모델

specal1849
AI Threads
2026-04-16
[덕테이프 테스트한거 대충 60건정도 프롬프트 공유입니다.]
```

### Replies
```text
choisungh
2026-04-17
아니 얼탱이가 없어서 님들 이것 좀 들어보셈
만 2세 꼬맹이가 아파서 축 쳐져서 얼집에서 픽업하고 오는 길
힘들었는지 유모차에서 잠듦
근데 깨울 때 짱부리면서 일어남
물도 안 먹음
밥도 안 먹음
미역국에 밥 해줌 -> 안 먹음
...

daniel_mhkim
2026-04-10
외부에서 코딩할 때
터미널 잘 쓰시면
(tmux +) Tailscale + Termius 조합 좋은데
GUI가 필요할 때도 있죠.

slamslam__
2026-04-13
‘미쳤습니다‘ AI 소식에 피로감을 토로하시는 분들이 종종 보입니다.
AI를 적극적으로 사용하는 분들은 정말 몇십배 몇백배의 생산성을 뽑아냅니다.
월 200달러 클로드 맥스를 10개씩 돌리는 사람...
```

### Profile
```text
프로필
씨케이
ethan13917
ai/비트코인/크립토/it 관심있고 투자합니다.
Running Threads
AI Threads
+
팔로워 126명
·
최근 조회수 10만회
```

## 2) YouTube — subscriptions / watch later / likes / downloads

### Subscriptions
```text
1일 전
Live on 4/30(목) 이란 전쟁 때문에 AI 데이터센터 거품 터지나 (김열매 / 애널리스트)
[#전원일기] 90분 몰아보기 | 행방불명된 영남이 MBC19850514방송 l 221~223회
PAIN LAB
Reddit AI SEO: Rank #1 on Google FREE!
Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
Claude Code is now FREE: Here’s how…
Lobster Father: New Telegram AI Agent is INSANE!
변호사가 앱으로 시장을 바꾼다 (Claude Code)
Redis: From Cache to AI Agent Backbone
NEW Google Browser Use AI Agent is INSANE!
```

### Watch later
```text
State of the Claw — Peter Steinberger
바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
IT 기술 지식 20분만에 시원하게 뻥 뚫어 드립니다. | 바이브코딩 하는 분 꼭 끝까지 들어보세요.
Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI
What Is an AI Stack? LLMs, RAG, & AI Hardware
```

### Likes / downloads
```text
오프라인 저장한 동영상이 여기에 표시됩니다.
좋아요
홈
Shorts
구독
내 페이지
설정
```

## 3) GitHub — stars
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

## 4) Google My Activity — search / browse history
```text
오늘
검색
포함된 주제:
오후 6:48 • 세부정보
검색
Google 검색 을(를) 방문했습니다.
오후 5:12 • 세부정보
어제
검색
포함된 주제:
오후 11:02 • 세부정보
검색
오후 6:47 • 세부정보
이미지 검색
오후 6:47 • 세부정보
이미지 검색
오후 6:46 • 세부정보
검색
오후 6:45 • 세부정보
검색
오후 6:45 • 세부정보
검색
오전 11:17 •  • 세부정보
검색
포함된 주제:
오후 10:38 • 세부정보
검색
오후 5:55 • 세부정보
검색
오후 12:06 • 세부정보
검색
오전 11:21 • 세부정보
검색
포함된 주제:
오후 10:26 • 세부정보
검색
오후 4:15 • 세부정보
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
오전 11:02 • 세부정보
검색
오전 10:51 • 세부정보
검색
codex 을(를) 검색했습니다.
오전 10:50 •  • 세부정보
검색
포함된 주제:
오후 10:35 • 세부정보
검색
포함된 주제:
오후 10:35 • 세부정보
검색
포함된 주제:
챗GPT - 클릭함
오후 10:48 • 세부정보
검색
오후 7:09 • 세부정보
오후 7:08 •  • 세부정보
검색
오후 7:08 • 세부정보
검색
https://openai.com/index/introducing-gpt-5-5/ 을(를) 방문했습니다.
오후 4:48 • 세부정보
검색
Introducing GPT-5.5 | OpenAI 을(를) 방문했습니다.
오후 4:48 • 세부정보
검색
GPT-5.5 을(를) 검색했습니다.
오후 4:48 •  • 세부정보
검색
```

## 5) Claude / ChatGPT

### Claude recent list
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
예방접종 후 아기 발열 시 아세트아미노펜 용량
효율적인 영어 노출 방법 찾기
소프트웨어 개발 기획 통합 관리 도구
Obsidian vault 모바일 동기화 방법
프로젝트 관리를 위한 AI 도구 추천
관심사 정리 및 위키 작성
신생아 릴스 이상 vs 현실 컨셉 아이디어
Claude 코드 권한 우회 방법
온프레 PVE 서버 자동 배포 구성
온프레 서버와 NAS를 이용한 배포파일 제공 방식
AI 시대 승진 기준의 변화: 성과에서 대체 불가능성으로
GS인증 상담요청서 작성 - PVE 클러스터 장비 사양
AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
파파레벨스
GPU 사업 기반 경제적 자유 로드맵
B2B 비즈니스와 B2C 트렌드 상품의 가치 평가
한국 방산 소프트웨어 스타트업의 가능성
메모리 업데이트 내용
GPU 클라우드 사업과 퀀트 투자로 경제적 자유 달성하기
내 관심사 정리하기
모든 채팅
```

### Claude conversation body excerpt
```text
입력 내용: 우리나라는 교육에 돈을 많이쓰지만 상대적으로 saas구독에는 인색해.

우리나라는 교육에 돈을 많이쓰지만 상대적으로 saas구독에는 인색해. 그래서 소프트웨어 + 교육비를 녹이는 비즈니스는 어떻게 생각해

B2C에서 먹히는 "녹이는" 패턴들

1. 학습 앱 + 커리큘럼 (가장 검증됨)

2. 자기계발 툴 + 챌린지/코칭

3. 부모가 아이에게 사주는 것 (가장 지갑이 열림)

4. 전문 역량 구독 (성인 대상)
```

### ChatGPT recent list
```text
공유 메모리 에이전트
AI 인프라 플랫폼 개발
VM 삭제 보호 해제 방법
AI 인프라 수요 분석
GS인증과 보안적합성 검증 관계
PVE 호스트 네트워크 장애
영어 회화 학습 가능
PVE DHCP 구성 가능 여부
Link Shared
2개월 아기 속역류
축구 중계 화면 제작 요청
축구 중계 화면 요청
축구 중계 화면 제작 요청
축구 중계 화면 디자인
비트코인 청산 맵 해석
Hairstyle Lookbook Grid
법인 출자금 필수 여부
회계 재무 세법 차이
Codex 실무 활용법
야구 중계 화면 컷
코스피 급등 사례
```

## Filtering notes
- Threads liked / GitHub stars / Claude / ChatGPT mostly reinforced the same AI coding, agent workflow, memory-routing, and infra axes seen earlier today.
- Sports, entertainment, and generic noise on YouTube were not treated as durable signal.
- The only clearly fresh delta was the tighter YouTube / Google surfacing around AI-agent backbone, browser-use, Telegram agent, and GPT-5.5 / OpenAI browsing context.
- No new durable concept page was promoted during this pass.

## Why this raw exists
This file is the evidence store for the 2026-05-11 19:00 live social-signal pass.
It preserves the live surface text as raw evidence, separate from the earlier 11:00 new-target run.
