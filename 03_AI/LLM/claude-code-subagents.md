---
title: Claude Code Subagents
created: 2026-04-17
updated: 2026-04-17
type: concept
tags: [claude-code, workflow, best-practice, ai]
sources: [https://code.claude.com/docs/en/sub-agents, https://code.claude.com/docs/en/skills, https://code.claude.com/docs/en/hooks, https://code.claude.com/docs/en/plugins]
---

# Claude Code Subagents

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

    ## Related pages
    - [[Claude_Code_핵심기능_정리_2026-02-02]]
    - [[claude-code-skills]]

## Related pages
- [[Claude_Code_핵심기능_정리_2026-02-02]]
- [[claude-code-skills]]
