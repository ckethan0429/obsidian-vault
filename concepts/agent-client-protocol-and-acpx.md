---
title: Agent Client Protocol and ACPX
created: 2026-04-15
updated: 2026-04-15
type: concept
tags: [agents, orchestration, protocols, devtools, automation]
sources: [raw/articles/acp-and-acpx-2026-04-15.md]
---

# Agent Client Protocol and ACPX

ACP(Agent Client Protocol)는 **클라이언트가 코딩 에이전트를 표준 방식으로 제어하기 위한 프로토콜**이고, ACPX는 그 프로토콜을 실제 CLI 운영에 쓰기 쉽게 만든 **헤드리스 클라이언트/런타임 계층**이다.

이 조합은 CK가 관심 가질 만한 세 가지 축을 한 번에 건드린다:
- 멀티 에이전트 오케스트레이션
- 벤더 혼합 운용(Claude / Codex / Gemini 등)
- 실제 운영에서의 세션/권한/바인딩 관리

## 핵심 개념

### 1. ACP는 PTY 스크래핑 대체재다
기존에는 한 에이전트가 다른 CLI 에이전트를 호출할 때 pseudo-terminal 출력 텍스트를 긁어오는 방식이 흔했다. 이 방식은 다음 문제가 있다:
- 구조화된 메타데이터 손실
- 툴 호출 / diff / 에러 의미 손실
- 긴 블로킹 상태에서 오케스트레이터 전체가 멈추기 쉬움

ACP는 이 구간을 **JSON-RPC 2 over stdio**로 바꿔서, 세션/이벤트/툴 호출/취소/권한 요청을 구조적으로 다룬다.

### 2. ACP는 MCP 대체재가 아니다
- **ACP**: client ↔ agent
- **MCP**: agent ↔ tools/data

즉 ACP는 “에이전트를 부르는 표준”, MCP는 “에이전트가 도구를 쓰는 표준”이다. 둘은 경쟁 관계가 아니라 조합 관계다.

### 3. ACP는 LSP와 비슷한 역할을 한다
문서에서 반복해서 나오는 요지는 이것이다:
- 표준이 없으면 M orchestrators × N agents = M×N adapter
- ACP가 있으면 M + N 구조로 단순화됨

이 관점은 CK가 인프라/플랫폼 관점에서 이해하기 좋다. ACP는 AI coding agent용 **LSP 같은 인터페이스 계층**으로 보면 된다.

## ACPX가 중요한 이유

ACPX는 ACP를 실무에서 다루기 위한 **headless, scriptable CLI**다. 개념적으로는 “agent session용 curl”에 가깝다.

문서상 강점:
- persistent session
- prompt queueing
- crash reconnect
- fire-and-forget 실행
- structured output
- 다수의 harness 별칭 지원

즉 ACPX는 단순 프로토콜 구현이 아니라, **멀티 에이전트 작업 큐 + 세션 허브 + 재연결 계층**에 가깝다.

## 서브에이전트와 ACPX 차이

같아 보이지만 실제로는 용도가 다르다.

### 서브에이전트
- 한 Claude 생태계 내부에서 역할을 나누는 방식
- 결과는 주로 텍스트 blob으로 돌아오기 쉬움
- Claude 중심 위임에는 간단하고 편함

### ACPX
- Claude 밖의 다른 agent(Codex, Gemini 등)까지 호출 가능
- structured event를 유지함
- cross-vendor orchestration에 적합함

따라서 **Claude 내부 역할 분리는 subagent**, **외부 agent까지 섞는 운영은 ACP/ACPX**로 보는 게 실용적이다.

## OpenClaw에서의 의미

OpenClaw 문서는 ACP를 단순 이론이 아니라 **운영 표면**으로 설명한다.

핵심 포인트:
- 자연어로 “이걸 Codex에서 실행해” 같은 요청을 ACP 런타임으로 라우팅 가능
- `/acp spawn`으로 명시적 제어 가능
- 현재 대화에 그대로 바인딩(`--bind here`) 가능
- 새 스레드/토픽 바인딩(`--thread auto|here`) 가능
- 백그라운드 작업처럼 세션을 추적 가능

즉 OpenClaw의 ACP Agents는 “ACP를 지원한다” 수준이 아니라, **채팅 표면과 외부 코딩 harness를 연결하는 운영 UX**까지 포함한다.

## CK에게 특히 중요한 부분

### 1. 대화 바인딩 모델
`/acp spawn codex --bind here`는 새 스레드를 만들지 않고 현재 채팅을 그대로 Codex 세션에 묶는다.

이건 Discord/Telegram 같은 채널 운영에서 중요하다. 즉:
- 채팅 표면은 그대로 유지
- 뒤에서 돌아가는 agent 세션 상태만 지속
- `/new`, `/reset`, `/acp close` 같은 운영 명령이 분리됨

이 구조는 CK가 관심 있는 **멀티 채널 운영형 AI agent UX**와 맞닿아 있다.

### 2. 샌드박스 경계
OpenClaw 문서는 ACP 세션이 **host runtime**에서 돌고, sandbox 내부가 아니라고 명시한다.

즉:
- sandboxed session에서는 ACP spawn 제한이 있음
- sandbox 강제가 필요하면 runtime="subagent"를 써야 함

이건 보안/격리/운영 정책을 다루는 CK 입장에서 중요한 설계 포인트다.

### 3. 비대화형 권한 처리
ACP 세션은 non-interactive이기 때문에, 쓰기/exec 권한 프롬프트가 뜨면 그대로 실패할 수 있다.

문서상 기본 경향:
- `permissionMode=approve-reads`
- `nonInteractivePermissions=fail`

즉 읽기는 대체로 허용해도, 쓰기/exec는 별도 전략 없으면 실패하기 쉽다. 운영 단계에서는 이걸 반드시 설계해야 한다.

## 실무적으로 어떻게 써야 하나

### ACP/ACPX를 쓰는 경우
- Claude + Codex + Gemini 같이 벤더 혼합 오케스트레이션이 필요할 때
- agent 결과를 structured event로 받고 싶을 때
- 세션 재개, 큐잉, 백그라운드식 추적이 필요할 때
- 채팅 표면과 외부 harness를 묶어 장기 워크스페이스처럼 운용할 때

### 서브에이전트가 더 나은 경우
- 같은 모델 생태계 내부에서 빠르게 역할만 나누면 될 때
- 샌드박스 강제가 중요할 때
- 복잡한 런타임 제어보다 구현 속도가 더 중요할 때

## 위험과 마찰

### 1. 생태계 성숙도 문제
CASYS 글은 ACPX pinned version drift 문제를 예로 든다. 즉 프로토콜 자체보다도, 실제 plugin/runtime 배선에서 버전 드리프트가 자주 생길 수 있다.

### 2. Claude 공식 지원 공백
Claude Code의 native ACP support는 공식적으로 닫힌 이슈가 있어, 일부는 adapter/bridge 형태로 우회된다. 따라서 “표준은 좋아 보이지만 vendor-native support는 uneven하다”는 현실을 감안해야 한다.

### 3. 권한/인증/네트워크 의존성
OpenClaw 문서도 첫 실행 시 adapter fetch, 벤더 인증, npm/network 상태가 영향을 준다고 말한다. 즉 운영 환경에서는 **준비 상태 점검(`/acp doctor`)** 이 중요하다.

## CK 관점의 한 줄 요약
ACP는 **AI coding agent를 위한 표준 제어 프로토콜**, ACPX는 **그 프로토콜을 멀티 에이전트 운영에 맞게 실제로 굴리는 런타임/CLI**, OpenClaw ACP Agents는 **그걸 채팅 기반 운영 UX까지 연결한 통합 표면**이다.

## Related pages
- [[gstack]]
- [[site-observation-archive]]
- [[obsidian-vault-integration]]
