---
title: Interest Signal Collection 19:00
created: 2026-05-15
updated: 2026-05-15
type: raw
source: live Chrome/CDP
account: ethan13917
route_hint: raw_only
route_confidence: 0.58
route_reason: 이번 19:00 패스는 Threads / YouTube / Google / Claude 전반에서 이미 08:00·11:00에 확인된 Claude Code / agent / Proxmox / OpenClaw / shared-memory 축을 반복했고, GitHub stars는 타임아웃되어 새 durable branch가 나오지 않았다.
signal_tags: [threads, youtube, google-activity, claude, agents, infra, proxmox, openclaw, kimi, shared-memory, raw_only]
routing:
  route: raw_only
  confidence: 0.58
  reasons:
    - Threads, YouTube, Google, Claude, and the API/Coolify side surfaces mostly repeated the established agent / infra / education / hosted-workspace lane.
    - The few fresh rows (VC / vibe-coding chatter, KRX search, 박동빈, Kimi references, OpenClaw packaging language) still fit existing durable pages rather than opening a new branch.
    - GitHub stars did not yield readable evidence in this run because the page timed out.
    - The Meta Threads API explorer only returned an unsupported help-node request, so it did not produce a useful new signal.
---

# Raw Transcript — Interest Signal Collection 19:00 (2026-05-15)

## Live session notes
- 오후 refinement 패스로, 08:00 / 11:00 baseline과 비교해 새로 떠오른 표면만 남기려 했다.
- 대부분의 표면은 전날과 같은 Claude Code / agent / infra / Proxmox / OpenClaw 축을 반복했다.
- GitHub stars 표면은 `TimeoutError()`로 끝나 읽을 수 있는 새 별표 델타가 없었다.
- Meta Threads API explorer는 `help` 노드에 대해 unsupported request 오류만 내서, API 쪽 새 신호는 없었다.
- 따라서 이번 패스는 durable page promotion 없이 raw evidence 로 보존한다.

## 1) Threads — 좋아요 / 활동 / 리포스트 / 답글 / 프로필

### 좋아요 페이지
Page title:
- `좋아요 • Threads`

Visible text excerpts:
> besty_moon
> 2주
> 진짜 멋지다ㅠㅠㅠㅠㅠ
>
> korean.thiel
> 2주
> xx년생 술자리에서 서로 주거니 받거니 하면서 딜 공유하는 게 정말 모험자본의 역할인가?
> VC = 모험자본
> 모험은 익숙한 것에서 벗어난 베팅이다.
> 근데 한국 VC씬에서 딜소싱 채널은 — 대학 동기, 회사 동기, 군대 동기다.
> 이건 VC 투자가 아니라 동창회 계모임일뿐이다.
> 모험은 술자리에서 일어나지 않는다.
>
> braincheck.co.kr
> 바이브코딩 Vibe coding
> 2주
> 바이브 코딩에 가장 좋은 언어는?
> 나는 지금 이렇게 쓰고 있음
> 프론트: Dart (Flutter)
> 백엔드: Go
> 이유는 단순함
> 컴파일 타임에 오류 잡히는 게 진짜 큼
> Flutter는 iOS / Android 한 번에 할 수 있어.
> Go는 문법 단순해서 AI가 짜도 안정적이야.

### 활동 페이지
Page title:
- `활동 • Threads`

Visible text excerpts:
> 회원님의 게시물에서 팔로우했습니다
> 진짜 ai 육성하려면 오픈소스 & 스타트업 지원 빠방하게해줘야한다.
> 뭐 해볼라카면 정치한다고 쇼하네.. 지금까지 정부랑 대기업 뭐함??
>
> 회원님의 답글 조회수가 100회가 넘었습니다.
> 출처
> 머리좋은놈을 알잘딱깔센으로 24시간동안 굴린다 = 오푸스 4.7 토큰을 태운다 아주많이 ㅎㅎㅎ
>
> 요즘은 그냥 phase마다 나눠서 병렬 작업합니다.
> 작은 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다.
> 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.
>
> 그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다.
> Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다.
> 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
>
> 에이전트 생산성의 진실
> memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다.
> Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다.

### 프로필 / 리포스트 / 답글
Page title:
- `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

Visible text excerpts:
> 씨케이
> ethan13917
> ai/비트코인/크립토/it 관심있고 투자합니다.
> Running Threads
> AI Threads
>
> Claude Code막 시작하시는 분들께
> 설치부터 클코를 처음 접하는 분들이 전체 흐름을 한 번에 잡을 수 있도록 20개 섹션으로 정리했어요
>
> 최근 Claude Code 토큰 제한이 빡빡해지면서 Codex CLI를 찾는 사람이 늘고 있다.
>
> Hermes -> kimi-k2.5
> openclaw -> qwen3.6-plus
> 체감상 이렇게 맞춰서 쓰니까 너무 좋다.
>
> 에르메스(Hermes) + 코덱스 + OmX인듯...
>
> 회원님의 게시물에서 팔로우했습니다
> Claude Code가 이제 영상을 만듭니다.
> GitHub stars / AI helper / workflow 비교 자료

## 2) YouTube — 구독 / 나중에 볼 동영상 / 좋아요 / 다운로드

### 구독 피드와 나중에 볼 동영상에서 보인 항목
Visible text excerpts:
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> EP 70. 100x 엔지니어의 Claude Code 활용법
> 이제 대세는 Claude Code!? 찐 꿀팁 대방출 🔥
> 내가 사용해 본 가장 유용한 MCP 서버 😎
> Supabase MCP로 앱 찍어내는 방법
> Proxmox 8.0 - PCIe Passthrough Tutorial
> My Proxmox Home Server ... (GPU Passthrough, IOMMU Groups and more)
> AI 에이전트 100개를 한 번에 관리하는 1인 유니콘 개발자
> 바이브 코딩은 끝났다! 클로드 코드로 1시간 만에 결제 시스템까지 완성 에이전틱 코딩이란?
> How I use LLMs
> AI Stack / AI Hardware / embeddings / batching 관련 영상들

### 필터링 노트
- 영어학습 / 운동 / 일반 금융·라이프 영상도 함께 섞였지만, 이번 노트에는 AI·infra 쪽만 남겼다.
- `좋아요` / `다운로드` 표면은 상대적으로 빈약했고, 구독 / 나중에 볼 동영상 쪽이 더 신호가 강했다.

## 3) Google My Activity — 검색 기록

오늘
> 검색
> 알림 3개
> 포함된 주제:
> KRX:071050
> Google 기능 업데이트
> 박동빈
> 오후 6:48 • 세부정보
>
> 검색
> Google 검색 을(를) 방문했습니다.
> 오후 5:12 • 세부정보

### 필터링 노트
- 오늘 섹션의 새 검색 주제는 주식/인물 키워드가 핵심이었다.
- 아래쪽 과거 기록에는 Claude / GitHub / 날씨 / Minecraft / Microsoft Build 등 예전 검색이 섞여 있었지만, 이번 19:00 증거로는 오늘 섹션만 남겼다.

## 4) Claude — shared memory / OpenClaw / OMO-OMX 패키징

Page title:
- `소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델 - Claude`

Visible text excerpts:
> 이 스레드는 Claude Code + Telegram agent + mem0 + Qdrant + Ollama 조합으로 공유 메모리를 가진 에이전트 인프라를 2일 만에 축소 재현한 경험담입니다.
> MCP 서버 원격 연결 방법
> Claude Code Stop hook으로 메모리를 연결하는 방법
> Claude Code의 .claude/settings.json에서
> mem_broadcast.py 같은 훅 스크립트를 호출
> Telegram 에이전트가 Claude Code의 작업 맥락을 안다
> 다음 Claude Code 세션이 이전 Telegram 대화를 안다
>
> 맥락 잡았어요. OpenClaw 대란 + 설치가 로또 수준이다 + 24시간 켜놓고 써야 함 + 맥미니 품귀 → 지금 이 시장에 정확히 꽂히는 빈틈이 CK 아이디어에 있네요.
> 제안 상품: "OpenClaw Ready Box" (가칭)
> [고객] → [Virton 물리 서버] → [가상 맥 or Linux VM 1인 1개] → [OpenClaw 사전 설치]
> 프로: 전용 VM + MCP 서버 3개 연동 + Google/Slack 통합 세팅 (59만원)
> 3주	Skills & Subagents 설계	내 업무 루틴 3개 자동화
> MCP 서버 조합, Skills 작성, Subagent 구성까지 고객 업무에 맞춰 설계
> 상품: "OMO/OMX Ready Workspace"
> Virton Proxmox 서버에 격리된 개발자 VM 1인 1개 제공 (Linux + tmux + OpenCode + OMO 또는 Codex + OMX 전부 세팅)
> CK의 Proxmox 서버 활용 방안 재정의
> Virton Proxmox + GPU 인프라
> Virton의 Proxmox + Ceph 운영 경험
> OMO/OMX 관찰 + 본인 Hermes Agent 운영 경험
> OpenClaw 교육 상품 설계 안

### 필터링 노트
- 위 대화는 여전히 교육 + 호스팅 + 에이전트 오케스트레이션 패키징 축에 머물렀다.
- 새로운 durable branch라기보다는 기존 `OpenClaw / OMO-OMX / Proxmox / managed workspace` 축의 구체화로 판단했다.

## 5) 기타 표면 / 실패 / 노이즈

### GitHub stars
- `https://github.com/stars` 는 `TimeoutError()` 로 종료되어 읽을 수 있는 새 별표 목록이 없었다.

### Meta Threads API explorer
- `GET graph.threads.net/v1.0/help` 에 대해 다음 오류만 받았다:
> `Unsupported get request. Object with ID 'help' does not exist, cannot be loaded due to missing permissions, or does not support this operation`
- 이 표면은 이번 패스에서 유의미한 새 신호를 주지 못했다.

### Coolify
- `WARNING: Cannot connect to real-time service`
- `Create a new Application`
- `For example application deployments, checkout Coolify Examples.`
- UI 경고만 보였고 새 관심 신호로 보긴 어려웠다.

## Filtering / triage notes
- Threads / YouTube / Google / Claude 전반에서 새로 보인 행은 있었지만, 의미상 이미 알고 있던 Claude Code / agent / infra / Proxmox / OpenClaw 축을 반복했다.
- GitHub stars는 이번 run에서 타임아웃되어 새 delta를 확보하지 못했다.
- 따라서 이번 19:00 패스는 raw evidence 로 남기고, durable concept update 는 하지 않았다.

## Why this raw exists
This file preserves the afternoon refinement pass as evidence for later triage and for comparison against the 08:00 / 11:00 same-day runs.
