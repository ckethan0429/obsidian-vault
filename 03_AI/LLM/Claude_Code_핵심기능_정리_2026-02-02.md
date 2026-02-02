---
title: Claude Code 핵심기능 정리 (Subagents / Skills / Hooks / Plugins)
date: 2026-02-02
tags:
  - ai
  - claude
  - claude-code
  - workflow
  - obsidian
source:
  - https://code.claude.com/docs/en/sub-agents
  - https://code.claude.com/docs/en/skills
  - https://code.claude.com/docs/en/hooks
  - https://code.claude.com/docs/en/plugins
---

# Claude Code 핵심기능들 한 번에 잡기

Claude Code를 “잘 쓴다”는 건 결국 **반복되는 작업을 구조화**하고(=skills/commands), **안전장치와 자동화를 걸고**(=hooks), **맥락을 분리/병렬화**하고(=subagents), **재사용 가능한 묶음으로 배포**하는 것(=plugins)이다.

아래는 실전에서 자주 부딪히는 질문(언제 쓰나/어디에 두나/무엇이 다른가)을 기준으로 정리.

---

## 1) Subagents (서브에이전트)

### 한 줄 정의
**특정 역할/제약을 가진 “전용 Claude”를 별도 컨텍스트 창에서 돌리는 기능.**

### 왜 중요한가
- **컨텍스트 보존:** 탐색/리서치/대량 로그를 메인 대화에 덜 섞음
- **제약 강제:** 예) Read-only 탐색 에이전트, Bash만 허용하는 에이전트
- **비용/속도 최적화:** 특정 작업은 Haiku 같은 빠른 모델로 라우팅

### 기본 내장 subagents (문서 기준)
- **Explore**: 빠른 read-only 탐색(Write/Edit 금지), 모델: Haiku
- **Plan**: plan mode에서 리서치 담당(read-only)
- **General-purpose**: 복합 작업(탐색+수정 포함)

### 커스텀 subagent 만들기 (파일 기반)
Subagent는 **Markdown + YAML frontmatter**로 정의.

예시:
```md
---
name: code-reviewer
description: 코드 품질/보안 리뷰 담당. 변경 후 자동으로 사용.
tools: Read, Glob, Grep
model: sonnet
permissionMode: default
---

너는 시니어 코드 리뷰어다. 변경점을 읽고
구체적이고 실행 가능한 피드백을 제공해라.
```

### 위치/스코프(우선순위)
- 세션 한정: `claude --agents '{...}'` (가장 높은 우선순위)
- 프로젝트: `.claude/agents/`
- 개인 공통: `~/.claude/agents/`
- 플러그인: `plugin/agents/` (가장 낮은 우선순위)

### 중요한 포인트 (실수 방지)
- **Subagent는 부모 대화의 skills를 상속하지 않음.**
  - 필요하면 subagent frontmatter에 `skills:`로 명시해 **시작 시점에 주입**해야 함.
- Subagent의 tool/permission 설정으로 “가능한 행동”을 설계할 수 있음.

---

## 2) Skills (스킬)

### 한 줄 정의
**Claude에게 “작업 방법/규칙/지식”을 주입하는 재사용 가능한 모듈.** 필요 시 `/skill-name`으로 직접 실행하거나, 설정에 따라 Claude가 자동으로 불러 쓰기도 함.

### 스킬의 핵심 가치
- 팀/프로젝트의 **규칙(컨벤션)과 워크플로우(배포/커밋/리뷰)**를 코드처럼 관리
- “대화로 매번 설명” 대신 **표준화된 프롬프트/절차**를 재사용

### 스킬 구조
스킬은 디렉토리 단위:
```
my-skill/
├── SKILL.md          # 필수
├── template.md       # (옵션) 채워 넣을 템플릿
├── examples/...
└── scripts/...
```

### 어디에 두나(스코프/우선순위)
- 엔터프라이즈(조직 정책)
- 개인: `~/.claude/skills/<name>/SKILL.md`
- 프로젝트: `.claude/skills/<name>/SKILL.md`
- 플러그인: `<plugin>/skills/<name>/SKILL.md`

이름 충돌 시 우선순위: **enterprise > personal > project**.
(플러그인 스킬은 `plugin-name:skill-name` 네임스페이스라 충돌 방지)

### 자주 쓰는 frontmatter 옵션
- `description`: 언제 쓰는지(자동 선택에 중요)
- `disable-model-invocation: true`
  - Claude가 임의로 실행 못 하게(배포/커밋 같은 부작용 작업에 필수)
- `user-invocable: false`
  - 사용자가 /로 못 부르고 Claude만 배경지식으로 사용
- `allowed-tools`: 이 스킬 활성 동안 허용 툴 제한
- `context: fork` + `agent: ...`
  - 스킬을 **서브에이전트 컨텍스트에서** 실행

### 동적 컨텍스트 주입(Preprocessing)
스킬 안에서 `!\`command\`` 형태로 **Claude에게 보내기 전에** 쉘 커맨드를 실행해 출력값을 프롬프트에 삽입 가능.

예: PR 정보를 gh로 미리 끌어와서 요약시키기.

---

## 3) Hooks (훅)

### 한 줄 정의
Claude Code 라이프사이클의 특정 지점에 **자동으로 실행되는 규칙/자동화**.
(쉘 커맨드 실행, LLM 평가, 또는 subagent 실행으로 판단/차단 가능)

### 언제 쓰나(대표 시나리오)
- 위험한 명령 차단: `rm -rf`, `git push --force` 등
- 파일 변경 후 자동 포맷/린트
- 툴 사용 전후 로깅/감사
- 권한 프롬프트가 뜰 때 자동 정책 적용

### 주요 이벤트(문서 기준)
- SessionStart / SessionEnd
- UserPromptSubmit
- PreToolUse (툴 실행 전, **차단 가능**)
- PostToolUse / PostToolUseFailure
- PermissionRequest
- SubagentStart / SubagentStop
- Stop (Claude 응답 종료)
- PreCompact
- Notification

### 훅 설정 위치(스코프)
- 유저 전역: `~/.claude/settings.json`
- 프로젝트: `.claude/settings.json`
- 프로젝트 로컬(비공유): `.claude/settings.local.json`
- 플러그인: `hooks/hooks.json`
- 스킬/서브에이전트 frontmatter의 `hooks:` (컴포넌트 활성 동안만)

### 매처(matcher) 개념
이벤트에 따라 matcher가 필터링하는 대상이 다름.
- Tool 이벤트: tool name(Bash, Edit|Write, mcp__.* 등)
- SubagentStart/Stop: agent type
- 일부 이벤트(UserPromptSubmit, Stop)는 matcher 미지원

### 훅 핸들러 타입 3가지
- `command`: 쉘 커맨드 실행(표준입력으로 JSON 받음)
- `prompt`: 단발성 LLM 판정(yes/no JSON)
- `agent`: subagent를 띄워 더 정교한 검증 후 판정

### 실전 팁
- “개별 훅 비활성화”는 어렵고, 보통 **전체 disableAllHooks** 토글로 끄는 구조.
- `PreToolUse` + exit code 정책으로 “특정 조건에서는 차단” 같은 가드레일을 만들기 좋음.

---

## 4) Plugins (플러그인)

### 한 줄 정의
Skills/Agents/Hooks/MCP/LSP 등을 **한 번에 묶어서 배포/공유**하는 패키지 형태.

### 언제 플러그인을 쓰나 vs .claude/에 그냥 둘 때
- `.claude/`(프로젝트 로컬)
  - 개인/프로젝트 한정, 빠른 실험, 짧은 이름(`/review` 같은)
- **Plugins**
  - 팀/커뮤니티 공유, 버전관리/업데이트, 마켓플레이스 배포
  - 대신 네임스페이스 때문에 `/my-plugin:review`처럼 길어짐(충돌 방지)

### 기본 구조
플러그인 루트에 **`.claude-plugin/plugin.json`**(manifest) 가 필수.

예:
```
my-plugin/
├── .claude-plugin/
│  └── plugin.json
├── commands/         # 슬래시 커맨드(문서에서 quickstart에 등장)
├── agents/
├── skills/
├── hooks/
│  └── hooks.json
├── .mcp.json         # MCP 서버 구성
└── .lsp.json         # LSP 서버 구성
```

manifest 예시:
```json
{
  "name": "my-first-plugin",
  "description": "A greeting plugin to learn the basics",
  "version": "1.0.0",
  "author": { "name": "Your Name" }
}
```

### 개발/테스트
- 로컬 테스트: `claude --plugin-dir ./my-plugin`
- 변경 후에는 재시작해야 반영되는 경우가 많음(문서 기준)

---

## 5) (한 장 요약) 무엇을 언제 쓰나

- **skills**: “항상 지켜야 하는 규칙/절차”를 텍스트 자산으로 만들기
  - 예) PR 리뷰 규칙, 커밋 메시지 규칙, 배포 체크리스트
- **hooks**: 그 규칙을 “자동 실행/강제”하기
  - 예) Edit/Write 후 린트, Bash 위험명령 차단
- **subagents**: 작업을 “컨텍스트 분리/제약/최적화”하기
  - 예) 탐색 전용(읽기만), 배포 전용(툴 제한)
- **plugins**: 위를 “묶어서 공유/배포/업데이트”하기

---

## 6) 추천 작업 순서(실전)

1. 프로젝트에 `.claude/skills/`로 먼저 **로컬 스킬**을 만든다(실험/개선).
2. 안전장치가 필요하면 `.claude/settings.json`에 **hooks**를 붙인다.
3. 컨텍스트가 자꾸 오염되면 **subagent**를 만든다(Explore/Plan 활용 포함).
4. 충분히 안정화되면 플러그인으로 **패키징**해서 팀에 배포한다.

---

## 7) 스킬을 만드는 기준(실전 체크리스트)

스킬로 만들지 말지는 결국 **반복 + 일관성 + 실수 비용**으로 판단하면 된다.

### 7.1 스킬로 만들기 좋은 경우 (만들 가치 있음)

- **반복되는 요청/작업이 3회 이상** 발생
  - 예) PR 요약, 코드리뷰 템플릿, 리팩터링 가이드 적용, 회의록 정리
- **결과물 포맷이 매번 같아야 함**(표준 산출물)
  - 예) ADR, 릴리즈 노트, 버그 리포트, 리서치 노트(Obsidian 템플릿)
- **팀/프로젝트 컨벤션을 지속적으로 지켜야 함**
  - 예) API 에러 포맷, 로깅 규칙, 폴더 구조, 테스트 작성 기준
- **사람이 자주 빠뜨리는 단계가 있고 실수 비용이 큼**
  - 예) 배포 전 점검, 보안 체크, 마이그레이션 순서
  - 이때 자동 실행이 위험하면 `disable-model-invocation: true`로 **수동 호출 전용**으로 만든다.

### 7.2 스킬보다 다른 기능이 더 적합한 경우

- **무조건 강제/차단**이 목적이면 → **Hooks**
  - 예) `rm -rf` 차단, Write/Edit 후 자동 린트/포맷
- 작업이 **무겁고 탐색 로그로 컨텍스트를 오염**시키면 → **Subagent**(+ 필요시 skills preload)
  - 예) 대규모 코드베이스 탐색/분석, 방대한 문서 리서치
- 프로젝트마다 규칙이 달라 **재사용성이 낮으면** → 일단 **프로젝트 스코프(.claude/skills)**에만 둔다
  - 여러 프로젝트에서 검증되면 개인/플러그인으로 승격

### 7.3 빠른 의사결정 체크리스트

아래 중 **2개 이상**이면 스킬로 만드는 쪽이 보통 이득:
- [ ] 비슷한 요청이 최근 3번 이상 있었다
- [ ] 품질 기준/포맷이 명확해서 체크리스트/템플릿으로 만들 수 있다
- [ ] 컨벤션/도메인지식을 반복해서 설명하고 있다
- [ ] 사람이 자주 빼먹는 단계가 있다
- [ ] 온보딩 시 반복 설명을 줄이고 싶다

### 7.4 설계 기준(잘 되게 만드는 법)

- **스킬 1개 = 목적 1개** (과적재 금지)
- “규칙/지식”이면 Reference 성격으로, “절차/실행”이면 Task 성격으로 구성
- 부작용이 있는 작업(배포/푸시/대량 변경)은
  - `disable-model-invocation: true`
  - `allowed-tools`로 도구 제한
  - 필요하면 `context: fork`로 subagent에서 실행

---

## 참고 링크
- Subagents: https://code.claude.com/docs/en/sub-agents
- Skills: https://code.claude.com/docs/en/skills
- Hooks: https://code.claude.com/docs/en/hooks
- Plugins: https://code.claude.com/docs/en/plugins
