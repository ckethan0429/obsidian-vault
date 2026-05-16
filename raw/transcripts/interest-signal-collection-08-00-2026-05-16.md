---
title: interest-signal-collection-08-00-2026-05-16
created: 2026-05-16
updated: 2026-05-16
type: summary
tags: [interest-signals, browser, threads, youtube, github, google, claude, chatgpt]
sources: [live Chrome CDP targets, raw/transcripts/interest-signal-collection-08-00-2026-05-15.md]
---

# Raw Transcript — Interest Signal Collection 08:00 KST 2026-05-16

Source: live Chrome CDP / browser-visible surfaces
Date: 2026-05-16
Account: `ckethan0429` / `ethan13917`

## Live session notes
- Live `/json/list` exposed logged-in Threads, YouTube, Google My Activity, Claude, ChatGPT, and GitHub tabs.
- The browser tool's fresh GitHub navigation redirected to sign-in, so the live CDP tabs were treated as the source of truth.
- YouTube liked/videos surfaced as an effectively blank shell; subscriptions and watch-later were the useful YouTube surfaces.

## 1) Threads — liked
> braincheck.co.kr
> 바이브코딩 Vibe coding
> 2주
> 바이브 코딩에 가장 좋은 언어는?
> 나는 지금 이렇게 쓰고 있음
> 프론트: Dart (Flutter)
> 백엔드: Go
> 이유는 단순함
> 컴파일 타임에 오류 잡히는 게 진짜 큼
> Flutter는 ...
> Go는 👉 문법 단순해서 AI가 짜도 안정적이야. 다들 뭐 씀?

> vibematfia
> 요즘 지인들한테 추천하는 바이브코딩 책

## 2) Threads — activity
> vibevault.nesto
> 요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
> 작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다. 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.

> kimjudy333
> AI 인프라의 진짜 승부처
> 프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.

> bellman.pub
> 에이전트 생산성의 진실
> memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.

## 3) Threads — profile / reposts / replies
> ai/비트코인/크립토/it 관심있고 투자합니다.
> 팔로워 126명
> 최근 조회수 10만회
- 반복된 프로필/답글/리포스트 항목이 많았고, 새로 보이는 자체 게시물은 없었음.

## 4) YouTube — subscriptions
> Redis: From Cache to AI Agent Backbone
> ByteMonk
> 조회수 14:43

> NEW Google Browser Use AI Agent is INSANE!
> Julian Goldie SEO
> 8:09

> Lobster Father: New Telegram AI Agent is INSANE!
> Julian Goldie SEO
> 8:06

> 변호사가 앱으로 시장을 바꾼다 (Claude Code)
> 개발자방16
> 3:47

## 5) YouTube — watch later
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> AI Engineer

> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자
> 빌더 조쉬 Builder Josh

> State of the Claw — Peter Steinberger
> AI Engineer

- watch later 자체는 기존 agent/Claude/skills/marketing 큐가 이어진 상태로 보였음.

## 6) YouTube — liked / downloads
- liked: 사실상 빈 셸처럼 보였고 현재 의미 있는 항목이 보이지 않았음.
- downloads: `오프라인 저장한 동영상이 여기에 표시됩니다.`만 보였음.

## 7) GitHub — stars
> outsourc-e / hermes-workspace
> Native web workspace for Hermes Agent — chat, terminal, memory, skills, inspector.
> TypeScript 2,576 302

> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

> AtomicBot-ai / atomic-hermes
> The agent that grows with you

> NousResearch / hermes-agent
> The agent that grows with you

> first-fluke / oh-my-agent
> Portable multi-agent harness ...

> firecrawl / web-agent
> Open-source web data agent optimized for structured web research

> shanraisshan / claude-code-best-practice
> from vibe coding to agentic engineering - practice makes claude perfect

> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages

## 8) Google — My Activity
- 오늘/어제 섹션은 `KRX:071050`, `Google 기능 업데이트`, `박동빈`, `Claude`, `GitHub`, `주식`, `날씨` 등 기존 축을 다시 보여줬고, 새롭게 확장된 축은 뚜렷하지 않았음.

## 9) Claude / ChatGPT
> Claude recent chat: `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델`
> ChatGPT recent chat: `공유 메모리 에이전트`
- 두 표면 모두 기존의 소프트웨어/교육/메모리-에이전트 축을 재확인하는 수준이었음.

## Filtering notes
- Threads liked/activity는 새로 보인 관심사 묶음이 있었지만, 대부분 기존 AI/infra/agent/operator 축의 reinforcement로 보였음.
- YouTube subscriptions에서만 비교적 분명한 새 항목 4개가 보였음: Redis agent backbone, browser-use agent, Telegram AI agent, Claude Code 시장/앱 전환.
- GitHub stars에서 `hermes-workspace`가 새로 보였음.
- Google / Claude / ChatGPT / Threads profile은 대체로 재강화(reinforcement)였음.

## Why this raw exists
This file is the evidence store for later summary/curation.
