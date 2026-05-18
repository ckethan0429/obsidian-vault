---
title: Interest Signal Collection — 2026-05-18 19:00 KST
created: 2026-05-18
updated: 2026-05-18
type: raw
tags: [interest-signals, browser, threads, youtube, github, google, claude, chatgpt, raw_only]
sources:
  - live Chrome CDP targets
  - raw/transcripts/interest-signal-collection-08-00-2026-05-18.md
  - raw/transcripts/interest-signal-collection-11-00-2026-05-18.md
route_hint: raw_only
route_confidence: 0.87
route_reason: Fresh visible rows appeared on Threads activity, YouTube subscriptions/watch later, and Google My Activity, but they all stayed inside the existing Claude Code / agent-ops / AI-infra / MCP / operating-economics lane. GitHub stars, Claude, and ChatGPT were reinforcement-only, so this run is best kept as raw evidence rather than a durable promotion.
routing:
  route: raw_only
  confidence: 0.87
  reasons:
    - Threads activity added new infra/operator comments, but they were still variations on the same AI infra operating-economics theme.
    - YouTube surfaced a few new AI/Claude Code/MCP titles, yet they matched the already-dominant agent/tooling backlog.
    - Google My Activity added a small cluster of new May 18 searches, but they were still in the operator research lane.
    - GitHub stars, Claude recents, and ChatGPT recents remained reinforcement-only.
---

# Raw Transcript — Interest Signal Collection 19:00 KST 2026-05-18

Source: live Chrome CDP / browser-visible surfaces
Date: 2026-05-18
Account: `ckethan0429` / `ethan13917`

## Live session notes
- Live `/json/list` exposed logged-in Threads, YouTube, Google My Activity, Claude, ChatGPT, and GitHub tabs.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-05-18.md`, `raw/transcripts/interest-signal-collection-11-00-2026-05-18.md`, and the 2026-05-17 baselines.
- Threads likes/reposts/profile were mostly repetition; the freshest visible change was in activity.
- YouTube stayed noisy, but a few AI/Claude Code/MCP titles were new enough to keep.
- Google My Activity added a small new search cluster from 2026-05-18.
- GitHub stars, Claude, and ChatGPT were reinforcement-heavy and did not open a new branch.

## 1) Threads — liked / activity / reposts / replies / profile
Page titles: `좋아요 • Threads` / `활동 • Threads` / `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

Visible text:
> 좋아요
> besty_moon
> 2주
> 진짜 멋지다ㅠㅠㅠㅠㅠ
> korean.thiel
> 2주
> xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
> VC = 모험자본
> 모험은 익숙한 것에서 벗어난 베팅이다.
> braincheck.co.kr
> 바이브코딩 Vibe coding
> 2주
> 바이브 코딩에 가장 좋은 언어는?
> 나는 지금 이렇게 쓰고 있음
> 프론트: Dart (Flutter)
> 백엔드: Go
> 이유는 단순함
> 컴파일 타임에 오류 잡히는 게 진짜 큼
> Flutter는
> 👉 iOS / Android 한 번에 할 수 있어.
> Go는
> 👉 문법 단순해서 AI가 짜도 안정적이야.
> park0_602
> 2주
> sinsadeul

Activity — newly surfaced items:
> 진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.
> 뭐 해볼라카면 정치한다고 쇼하네.. 지금까지 정부랑 대기업 뭐함??
> danharu_ai_lab
> 회원님의 게시물에서 팔로우했습니다
> 팔로잉
> 진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.
> 뭐 해볼라카면 정치한다고 쇼하네.. 지금까지 정부랑 대기업 뭐함??
> 요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
> 그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
> 솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도
> 에이전트 생산성의 진실
> memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.
> 병렬은 계속 쳐다보는 순간 무너진다. 그래서 탭에 번호를 붙이고, AI가 사람 입력을 요구할 때만 시스템 알림을 띄운다. 운영자는 모든 과정을 감시하지 않는다. 필요한 순간에만 개입한다. 좋은 워크플로는 상시 감시가 아니라 이벤트 기반 호출이다.
> AI 인프라의 진짜 승부처
> 프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.
> 텔레그램 와이어 다시해볼께요 - 저게 오픈클로 내 크론잡찍어놓은거만 되는건지 input도 되는건지 테스트해봐야 할거 같아요
> 15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다. 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다. 서로의 변경을 덮어쓰지 않고, 충돌 없이 독립적으로 전진한다. 멀티에이전트의 첫 원칙은 협업보다 격리다.
> 보리스의 핵심은 “한 세션을 끝까지 붙잡기”가 아니다. 여러 AI 세션을 동시에 던져놓고, 사람은 막힌 탭을 기다리지 않고 계속 다음 일로 넘어간다. 산출량은 천재 모델 1개보다, 멈추지 않는 작업 큐에서 나온다. 병렬성은 옵션이 아니라 생산성 엔진이다.
> 팀은 코드베이스 전체에 적용되는 짧은 CLAUDE.md 하나를 운영한다. AI가 실수할 때마다 규칙을 추가해 같은 사고를 반복하지 않게 만든다. 프롬프트를 길게 쓰는 게 핵심이 아니다. 실패를 규칙으로 축적해 팀의 운영체계로 바꾸는 것, 그게 진짜 레버리지다.
> 보리스가 강조한 건 생성보다 검증이다. 브라우저, 시뮬레이터, 실제 서버 실행 환경처럼 AI가 자기 결과를 직접 확인할 루프를 붙이면 품질이 2~3배 뛴다. 그리고 코드는 바로 치지 않는다. plan mode에서 설계를 먼저 굳혀 인간의 후반 디버깅 시간을 줄인다.

Reposts / replies / profile:
> 프로필
> 씨케이
> ethan13917
> ai/비트코인/크립토/it 관심있고 투자합니다.
> Running Threads
> AI Threads
> +
> 팔로워 126명
> ·
> 최근 조회수 10만회
> 리포스트
> gptaku_ai
> 2026-03-01
> 더욱 많은 분들이 클로드코드로
> 놀라움을 경험해보셨으면 하는 마음에
> 클로드코드 101을 만들었습니다
> ...
> Claude Code막 시작하시는 분들께
> 작은 출발점이 됐으면 좋겠습니다
> gptaku_ai
> 2026-04-20
> 이 정도면 Insane하지 아니한가?
> 클로드코드로 X, 링크드인도 다 뚫어버려!!
> qjc.ai
> 2026-04-20
> Claude Code가 이제 영상을 만듭니다.
> Hermes -> kimi-k2.5
> openclaw -> qwen3.6-plus

## 2) YouTube — subscriptions / watch later / liked
Page titles: `(27) 구독 - YouTube`, `(27) 나중에 볼 동영상 - YouTube`, `YouTube`

Subscriptions — newly surfaced items:
> State of the Claw — Peter Steinberger
> Claude Code is now FREE: Here’s how…
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Supabase MCP로 앱 찍어내는 방법
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자 (커서맛피아 최수민님)
> I built a private AI mini-cluster with Framework Desktop
> GitHub이 만든 AI 프레임워크 Spec Kit
> What Is an AI Stack? LLMs, RAG, & AI Hardware
> EP 70. 100x 엔지니어의 Claude Code 활용법
> 10 Insane AI Agent Use Cases in n8n! (steal these)
> 고급 개발자용 제대로된 AI 사용법
> 개발 환경 설정 및 비즈니스 요구사항 분석 | GitHub Copilot 바이브코딩 | Microsoft Developer Korea
> 3 Ways to Build ACTUALLY Beautiful Websites Using Cursor AI
> 내가 사용해 본 가장 유용한 MCP 서버 😎

Watch Later — newly surfaced items:
> 최소 비용 최대 효과, 데스크 셋업은 이렇게 하세요
> State of the Claw — Peter Steinberger
> 바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
> 이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
> 데스크테리어 100개 본 유튜버가 알려주는 입문템 (2026ver.)
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> 바이브 코딩은 끝났다! 클로드 코드로 1시간 만에 결제 시스템까지 완성 에이전틱 코딩이란?
> Supabase MCP로 앱 찍어내는 방법
> I built a private AI mini-cluster with Framework Desktop
> 랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자 (커서맛피아 최수민님)
> GitHub이 만든 AI 프레임워크 Spec Kit
> GitHub Copilot 바이브코딩
> 내가 사용해 본 가장 유용한 MCP 서버 😎
> 3 Ways to Build ACTUALLY Beautiful Websites Using Cursor AI

Liked / downloads:
> 홈
> Shorts
> 구독
> 내 페이지
> 사용할 수 없는 동영상은 숨겨졌습니다.

## 3) GitHub — stars
Page title: `Your stars`

Visible text:
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
> AtomicBot-ai / atomic-hermes
> The agent that grows with you
> NousResearch / hermes-agent
> The agent that grows with you
> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages
> jung-wan-kim / memory-bank
> first-fluke / oh-my-agent
> Portable multi-agent harness for .agents-based skills, workflows, and standards-aware agent teams across Antigravity, Claude Code, Codex, Cursor, OpenCode, and more.
> firecrawl / web-agent
> 🔥 Open-source web data agent optimized for structured web research
> jorgebmann / pyturboquant
> A Python implementation of Google's TurboQuant framework (WIP)

## 4) Google — My Activity
Page title: `Google - 내 활동`

Visible text:
> KRX:071050
> Google 기능 업데이트
> 박동빈
> Google 검색 을(를) 방문했습니다.
> 오후 6:48 • 세부정보
> 검색
> 알림 3개
> 포함된 주제:
> 클로드
> 깃허브
> 파업
> 주식
> 날씨
> 오후 11:02 • 세부정보
> 검색
> 마인크래프트 몹 투표를 중단해달라는 청원이 폭발적으로 증가 > 게임 ... 을(를) 방문했습니다.
> 오후 6:47 • 세부정보
> 이미지 검색
> 마인크래프트 몹 사진 을(를) 검색했습니다.
> 오후 6:45 • 세부정보
> 검색
> 모두의 창업 을(를) 검색했습니다.
> 오전 11:17 • 세부정보
> 검색
> microsoft build rsvp code 을(를) 검색했습니다.
> 오전 11:21 • 세부정보
> 검색
> naver 을(를) 검색했습니다.
> 오후 4:15 • 세부정보
> 검색
> m365 graph api 을(를) 검색했습니다.
> 오후 3:45 • 세부정보
> 검색
> claude code install 을(를) 검색했습니다.
> 오후 3:10 • 세부정보
> 검색
> how to update claude code 을(를) 검색했습니다.
> 오후 3:09 • 세부정보
> 검색
> codex 을(를) 검색했습니다.
> 오전 10:50 • 세부정보
> 검색
> https://openai.com/index/introducing-gpt-5-5/ 을(를) 방문했습니다.
> 오후 4:48 • 세부정보
> 검색
> Introducing GPT-5.5 | OpenAI 을(를) 방문했습니다.
> 오후 4:48 • 세부정보
> 검색
> https://portal.nousresearch.com/manage-subscription?user_code=8UMK-F2QK 을(를) 검색했습니다.
> 오전 11:10 • 세부정보
> 검색
> Kimi AI with K2.6 | Better Coding, Smarter Agents 을(를) 방문했습니다.
> 오후 10:40 • 세부정보
> 검색
> kimi api pricing 을(를) 검색했습니다.
> 오후 12:43 • 세부정보
> 검색
> Claude Code + Telegram agent + mem0 + Qdrant + Ollama 을(를) 검색했습니다.
> 오후 7:37 • 세부정보
> 검색
> Threads API - 문서 - Meta for Developers - Facebook 을(를) 방문했습니다.
> 오전 12:44 • 세부정보
> 검색
> threads api 을(를) 검색했습니다.
> 오전 12:44 • 세부정보
> 검색
> opencode-go 을(를) 검색했습니다.
> 오후 1:49 • 세부정보
> 검색
> openclaw cloud 을(를) 검색했습니다.
> 오후 12:25 • 세부정보
> 검색
> openclaw pass 을(를) 검색했습니다.
> 오후 12:25 • 세부정보
> 검색
> Claude: Sign in 을(를) 방문했습니다.
> 오후 10:34 • 세부정보
> 검색
> anthropic effective harness for long running agents 을(를) 검색했습니다.
> 오후 5:14 • 세부정보
> 검색
> anthropic managed agent 을(를) 검색했습니다.
> 오후 5:11 • 세부정보
> 검색
> claude dangerously skip permissions 을(를) 검색했습니다.
> 오후 12:17 • 세부정보
> 검색
> claude code discord 을(를) 검색했습니다.

## 5) Claude — recent chats
Reinforcement only:
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> 어른용 장난감 네이버스토어 판매
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기
> M365 Planner와 GitHub Project 연동
> 소프트웨어 개발 기획 통합 관리 도구
> Obsidian vault 모바일 동기화 방법
> 프로젝트 관리를 위한 AI 도구 추천
> AI 인프라 배포판 전략 및 오픈소스 비즈니스 모델
> GPU 클라우드 사업과 퀀트 투자로 경제적 자유 달성하기

## 6) ChatGPT — recent chat / current chat
Reinforcement only:
> 최근
> AI 인프라 오픈소스 전략
> AI 비서의 중요성
> 유료 맥 앱 추천
> AI 인프라 메시지 재정의
> Proxmox 시험환경 구성도
> AI Infra 정의
> AIOps 정의와 역할
> AI Native 개인 운영체제
> Claude Opus와 Codex 구조
> PR package json 누락 이유
> next-env.d.ts 커밋 여부
> 스레드 내용 분석

## Filtering notes
- YouTube subscriptions and Watch Later mixed in some sports / entertainment / general lifestyle rows, but the AI / Claude Code / MCP / agent / infra titles were the strongest visible changes.
- Threads likes mostly repeated the VC / vibe-coding rows; the best fresh signal came from activity, especially the Ceph·Proxmox·GPU / parallel-work comments.
- GitHub stars did not show a new repo branch.
- Google My Activity had a small new 2026-05-18 cluster, but it still sat in the operator research lane.

## Why this raw exists
This file is the evidence store for the 2026-05-18 19:00 collection pass.
