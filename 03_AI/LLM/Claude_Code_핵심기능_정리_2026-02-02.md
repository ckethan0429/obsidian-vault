---
title: Claude Code 핵심기능 정리 (Subagents / Skills / Hooks / Plugins)
created: 2026-02-02
updated: 2026-04-17
type: summary
tags: [ai, claude, claude-code, workflow, obsidian]
sources: [https://code.claude.com/docs/en/sub-agents, https://code.claude.com/docs/en/skills, https://code.claude.com/docs/en/hooks, https://code.claude.com/docs/en/plugins]
---

# Claude Code 핵심기능들 한 번에 잡기

Claude Code의 핵심은 네 가지입니다. 각각의 자세한 설명은 분리된 하위 페이지로 옮겼습니다.

- [[claude-code-subagents]] — 역할/제약이 분리된 전용 에이전트
- [[claude-code-skills]] — 반복 작업을 저장하는 실행 레시피
- [[claude-code-hooks]] — 특정 이벤트에서 자동화/강제하는 규칙
- [[claude-code-plugins]] — 재사용 가능한 기능 묶음과 배포 단위

## 한 장 요약

Claude Code를 잘 쓰는 방법은 결국 네 축입니다.
- **Subagents**: 탐색/리서치/수정 작업을 별도 컨텍스트로 분리
- **Skills**: 자주 하는 일을 일관된 방식으로 재사용
- **Hooks**: 위험한 실수나 반복 작업을 자동으로 통제
- **Plugins**: 위의 구성요소를 패키지로 묶어 팀/프로젝트 단위로 공유

## 추천 작업 순서
1. 반복되는 작업을 `Skills`로 먼저 고정
2. 안전장치가 필요하면 `Hooks`를 추가
3. 컨텍스트 분리가 필요할 때 `Subagents`를 도입
4. 여러 기능을 재사용해야 하면 `Plugins`로 묶기

## 스킬을 만들 때 기준
- 자주 반복된다
- 사람마다 품질 차이가 크다
- 체크리스트로 설명할 수 있다
- 실패 비용이 크다
- 다른 프로젝트에서도 재사용할 수 있다

## 참고 링크
- [[claude-code-best-practice]]
- [[agent-client-protocol-and-acpx]]

## Related pages
- [[claude-code-subagents]]
- [[claude-code-skills]]
- [[claude-code-hooks]]
- [[claude-code-plugins]]
