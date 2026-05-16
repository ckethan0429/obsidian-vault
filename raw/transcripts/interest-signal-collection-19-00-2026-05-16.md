---
title: Interest Signal Collection — 2026-05-16 19:00 KST
created: 2026-05-16
updated: 2026-05-16
type: raw
tags: [interest-signals, browser, threads, youtube, google, claude, chatgpt, append-existing]
sources:
  - live Chrome CDP targets
  - raw/transcripts/interest-signal-collection-08-00-2026-05-16.md
  - raw/transcripts/interest-signal-collection-11-00-2026-05-16.md
route_hint: append_existing
route_confidence: 0.87
route_reason: The 19:00 social pass added a few new YouTube conversational-agent / skills items and a couple of fresh Threads liked rows, but the macro-axis stayed on managed agents, operator economics, harness design, and phase-based parallelism. Google, Claude, and ChatGPT were mostly reinforcement, and GitHub stars did not yield new readable evidence in this pass.
routing:
  route: append_existing
  confidence: 0.87
  reasons:
    - New YouTube rows were concrete and durable, but they still fit the existing managed-agent / skills / conversational-agent axis.
    - Threads likes and activity mostly repeated the same vibe-coding / operator / parallelism / AI-infra patterns from earlier same-day runs.
    - No evidence opened a genuinely new durable branch beyond the current managed-agent thesis.
  signal_tags:
    - conversational-agents
    - skills
    - parallelism
    - operator-economics
    - worktree-isolation
---

# Interest Signal Collection — 2026-05-16 19:00 KST

## Live session notes
- Live `/json/list` exposed logged-in Threads, YouTube, Google My Activity, Claude, ChatGPT, and GitHub tabs.
- The live GitHub stars tab existed, but direct CDP evaluation hung on both stars targets during this pass, so no fresh readable GitHub star rows were captured.
- Compared against the 2026-05-16 08:00 and 11:00 runs and suppressed repeats from those baselines.
- The main change was a small set of new YouTube rows; the rest of the surfaces were mostly reinforcement.

## 1) Threads — liked
> besty_moon
> 2주
> 진짜 멋지다ㅠㅠㅠㅠㅠ
> 2.9천
> 133
> 50
> 190

> korean.thiel
> 2주
> xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
> VC = 모험자본
> 모험은 익숙한 것에서 벗어난 베팅이다.
> 근데 한국 VC씬에서 딜소싱 채널은 — 대학 동기, 회사 동기, 군대 동기다.
> 같은 학번 다섯 명이 같은 회사 라운드에 들어간다.
> 이건 VC 투자가 아니라 동창회 계모임일뿐이다.

## 2) Threads — activity / reposts / replies
> vibevault.nesto
> 요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.
> 작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다.
> 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.

> bellman.pub
> 에이전트 생산성의 진실
> memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다.
> Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다.

> ulysses31_forever
> 2/5 환경 분리
> 15개를 돌려도 안 꼬이는 이유는 협업툴이 좋아서가 아니다.
> 각 에이전트가 같은 리포를 각자 분리된 git checkout/worktree에서 만지기 때문이다.

## 3) Threads — profile / reposts / replies
> 프로필
> 씨케이
> ethan13917
> ai/비트코인/크립토/it 관심있고 투자합니다.

> 프로필 편집
> 스레드
> 답글
> 미디어
> 리포스트
> 새로운 소식이 있나요?
> 게시

- 새로 보이는 자체 게시물은 없었고, 이전 same-day 축을 반복하는 수준이었다.

## 4) YouTube — subscriptions
> Building Conversational Agents — Thor Schaeff and Philipp Schmid, Google DeepMind
> LLM codegen fails and how to stop 'em — Danilo Campos, PostHog
> Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor

## 5) YouTube — watch later / liked / downloads
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자
> State of the Claw — Peter Steinberger

- watch later 큐는 여전히 agent / Claude / skills 쪽으로 이어지고 있었고, liked / downloads는 유의미한 새 항목이 보이지 않았다.

## 6) Google — My Activity
> 오늘
> 포함된 주제:
> KRX:071050
> Google 기능 업데이트
> 박동빈
> 오후 6:48 • 세부정보

> 어제
> 포함된 주제:
> 클로드
> 깃허브
> 파업
> 주식
> 날씨

- 오늘 섹션은 기존 축을 다시 보여줬고, 새롭게 확장된 축은 뚜렷하지 않았다.

## 7) Claude / ChatGPT
> Claude recent chat: 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> ChatGPT recent chat: 공유 메모리 에이전트

- 두 표면 모두 기존의 소프트웨어/교육/메모리-에이전트 축을 재확인하는 수준이었다.

## 8) GitHub
- `https://github.com/stars` tabs were visible in `/json/list`, but the live CDP target did not return readable eval output in this pass.
- Browser navigation to GitHub stars fell back to the GitHub sign-in page in the separate browser tool session, so no fresh star evidence was captured here.

## Filtering notes
- Suppressed repeated same-day rows from the 08:00 and 11:00 baselines.
- Kept only the visible rows that either added a new concrete YouTube item or reinforced the managed-agent / operator axis.
- Excluded sports-heavy YouTube noise and older repeated Threads / Google / Claude / ChatGPT rows unless they helped show the same-day reinforcement pattern.

## Why this raw exists
This file is the evidence store for the 2026-05-16 19:00 collection pass, separate from earlier same-day baselines and from the 11:00 new-target run.
