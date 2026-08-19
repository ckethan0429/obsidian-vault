---
title: 그래프 엔지니어링 기초 — 개발자 CI 게이트
created: 2026-08-19
updated: 2026-08-19
type: concept
tags: [agents, workflow, orchestration, ci-cd, safety]
sources: [internal]
---

# 그래프 엔지니어링 기초 — 개발자 CI 게이트

[[agent-workflow-developer]]의 12단계 전체가 아니라 **구현 → 로컬/CI 검사 → PR 전 게이트**만 실행 가능한 그래프로 옮긴 실습. 골격은 [[agent-workflow-governance]]의 Maker / Checker / Approver. 영업 대응은 [[graph-engineering-sales-copy]].

> 에이전트에게 코드를 맡기는 것이 아니라, 증거가 있는 변경만 다음 칸으로 보낸다.

## 그래프

```text
intake → implement → check → ready → END
                          ↘ blocked → END
```

| 노드 | 역할 | 하는 일 |
|---|---|---|
| `intake` | 접수 | 브랜치, 대상 환경 고정 |
| `implement` | Maker | diff, 커밋 메시지, PR 본문, 테스트 증거 |
| `check` | Checker | 비밀정보·증거·우회·프로덕션 승인 검사 |
| `afterCheck` | Approver 정책 | 통과만 `ready`, 아니면 `blocked` |
| `ready` | CD 직전 | PR 대기. 여기서 병합하지 않음 |

하드 게이트는 [[agent-workflow-developer]]의 로컬 검증·CI·프로덕션 승인 규칙을 코드로 옮긴 것이다.

- 비밀정보가 diff에 있으면 차단
- “테스트했다”만 있고 실행 증거가 없으면 차단
- `[skip ci]` / 테스트 우회는 별도 승인
- 프로덕션은 사람 승인 없이 통과 불가

## 실행 결과

나쁜 변경: API 키 + `[skip ci]` + “테스트했다” + production, 사람 승인 없음 → `check → blocked`. 네 게이트에 걸림.

정상 변경: 테스트 출력 있음, 스테이징만, 롤백 방법 적음 → `check → ready`, 상태 `ready_for_pr`.

## 실행기

```js
const FORBIDDEN = [
  {
    id: "secret_in_diff",
    test: (c) => /API_KEY\s*=\s*['"]?[A-Za-z0-9_\-]{8,}/.test(c.diff),
    reason: "비밀정보가 diff에 있으면 안 된다",
  },
  {
    id: "claimed_without_evidence",
    test: (c) => /테스트했다/.test(c.prBody) && !c.testEvidence,
    reason: "테스트했다는 진술이 아니라 실행 증거가 필요하다",
  },
  {
    id: "skip_ci",
    test: (c) => /\[skip ci\]|테스트 우회/.test(c.commitMessage + c.prBody),
    reason: "테스트 우회는 별도 승인이 필요하다",
  },
  {
    id: "prod_without_human",
    test: (c) => c.target === "production" && !c.humanApproved,
    reason: "프로덕션은 사람의 명시적 승인이 필요하다",
  },
];

function compile({ nodes, edges, start }) {
  return {
    invoke(input) {
      let state = { ...input };
      let node = start;
      const trace = [];
      while (node && node !== "END") {
        const update = nodes[node](state) || {};
        state = { ...state, ...update };
        const next = typeof edges[node] === "function" ? edges[node](state) : edges[node];
        trace.push({ node, next, violations: state.violations ?? [] });
        node = next;
      }
      return { state, trace };
    },
  };
}

function intake(state) {
  return {
    branch: state.branch ?? "feat/demo",
    target: state.target ?? "staging",
    violations: [],
    status: "intaken",
  };
}

function implement(state) {
  if (state.seed === "bad") {
    return {
      diff: "const API_KEY = 'sk-live-abcdefghijklmnop';\nexport function ping() { return 1 }",
      commitMessage: "feat: add ping [skip ci]",
      prBody: "테스트했다. 바로 production 반영.",
      testEvidence: "",
      target: "production",
      humanApproved: false,
      status: "implemented",
    };
  }
  return {
    diff: "export function ping() { return 1 }\n",
    commitMessage: "feat: add ping helper",
    prBody: "스테이징만. 롤백: revert 이 커밋.",
    testEvidence: "$ npm test\n  3 passed",
    target: "staging",
    humanApproved: false,
    status: "implemented",
  };
}

function check(state) {
  const change = {
    diff: state.diff,
    commitMessage: state.commitMessage,
    prBody: state.prBody,
    testEvidence: state.testEvidence,
    target: state.target,
    humanApproved: state.humanApproved,
  };
  const violations = FORBIDDEN.filter((rule) => rule.test(change)).map((rule) => ({
    id: rule.id,
    reason: rule.reason,
  }));
  return { violations, checkPassed: violations.length === 0, status: "checked" };
}

const graph = compile({
  start: "intake",
  nodes: {
    intake,
    implement,
    check,
    ready: () => ({ status: "ready_for_pr" }),
    blocked: () => ({ status: "blocked" }),
  },
  edges: {
    intake: "implement",
    implement: "check",
    check: (state) => (state.checkPassed ? "ready" : "blocked"),
    ready: "END",
    blocked: "END",
  },
});
```

다음으로 붙일 것: 검사 실패 시 `revise`, 실제 테스트 명령 실행, 스테이징 배포 후 관찰 노드.

## Related pages
- [[agent-workflow-governance]]
- [[agent-workflow-developer]]
- [[graph-engineering-sales-copy]]
- [[graphs]]

