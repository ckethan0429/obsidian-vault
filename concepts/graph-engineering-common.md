---
title: 그래프 엔지니어링 기초 — 공통 골격
created: 2026-08-19
updated: 2026-08-19
type: concept
tags: [agents, workflow, orchestration, safety]
sources: [internal]
---

# 그래프 엔지니어링 기초 — 공통 골격

직군이 달라도 그래프는 하나다. [[agent-workflow-governance]]의 Maker / Checker / Approver를 실행 가능한 최소 그래프로 고정한 페이지. 영업은 [[graph-engineering-sales-copy]], 개발은 [[graph-engineering-developer-ci]]가 이 골격을 특수화한 것이다.

> 노드 이름은 직군 용어가 아니라 일 단위다. 도메인은 `check` 규칙만 바꾼다.

## 공통 그래프

```text
intake → make → check → ready → END
                     ↘ blocked → END
```

| 노드 | 역할 | 모든 직군에서 하는 일 |
|---|---|---|
| `intake` | 접수 | 완료 조건, 위험도, 대상만 고정 |
| `make` | Maker | 산출물을 만든다. 밖으로 보내지 않는다 |
| `check` | Checker | Maker와 다른 주체가 증거와 정책을 검사한다 |
| `afterCheck` | Approver 정책 | 통과만 `ready`. 아니면 `blocked` |
| `ready` | 적용 직전 | 사람 또는 다음 시스템이 적용한다. 그래프는 적용하지 않는다 |

공통 게이트도 네 개면 충분하다.

1. 완료 조건이 없으면 시작하지 않는다
2. “완료했다”는 증거가 아니다
3. 높음/치명적은 승인 없이 다음 칸으로 가지 않는다
4. 밖으로 나가는 일은 되돌리는 방법이 있어야 한다

직군별 `check`는 이 네 칸의 특수화다.

| 공통 | 개발 | 영업 | 마케팅 |
|---|---|---|---|
| 완료 조건 | Acceptance Criteria | 오퍼·채널·수용량 | 브리프·예산 |
| 증거 | 테스트 출력, CI | 금지 목록 diff | 클레임·트래킹 검사 |
| 높음/치명적 | 프로덕션 병합 | 유료 진단, 본계약 | 본 집행·지출 |
| 되돌리기 | revert, 롤백 | 정정·철회 | 게시 내리기 |

## 실행 결과

나쁜 일: 완료 조건 없음 + “다 했습니다” + 위험 높음 + 외부 전송 + 롤백 없음 → `check → blocked`. 네 게이트 전부 걸림.

정상 일: 완료 조건과 검사 로그가 있고, 아직 밖으로 나가지 않음 → `check → ready`, 상태 `ready_for_apply`.

## 실행기

```js
const GATES = [
  { id: "missing_done_when", test: (w) => !w.doneWhen, reason: "완료 조건이 없으면 시작하지 않는다" },
  { id: "claimed_without_evidence", test: (w) => /완료|다 했|테스트했다/.test(w.claim) && !w.evidence, reason: "완료 주장이 아니라 증거가 필요하다" },
  { id: "high_risk_no_approval", test: (w) => (w.risk === "high" || w.risk === "critical") && !w.approved, reason: "높음/치명적은 승인 없이 다음 칸으로 가지 않는다" },
  { id: "irreversible_no_rollback", test: (w) => w.external && !w.rollback, reason: "밖으로 나가는 일은 되돌리는 방법이 있어야 한다" },
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
  return { workId: state.workId ?? "work/demo", violations: [], status: "intaken" };
}

function make(state) {
  if (state.seed === "bad") {
    return {
      artifact: "초안을 검토 없이 바로 보냄",
      claim: "다 했습니다",
      evidence: "",
      doneWhen: "",
      risk: "high",
      approved: false,
      external: true,
      rollback: "",
      status: "made",
    };
  }
  return {
    artifact: "초안 한 건",
    claim: "초안 작성",
    evidence: "공통 게이트 검사 통과 로그",
    doneWhen: "초안이 검사를 통과하고 적용 직전 상태",
    risk: "medium",
    approved: false,
    external: false,
    rollback: "적용하지 않으면 됨",
    status: "made",
  };
}

function check(state) {
  const work = {
    doneWhen: state.doneWhen,
    claim: state.claim,
    evidence: state.evidence,
    risk: state.risk,
    approved: state.approved,
    external: state.external,
    rollback: state.rollback,
  };
  const violations = GATES.filter((rule) => rule.test(work)).map((rule) => ({
    id: rule.id,
    reason: rule.reason,
  }));
  return { violations, checkPassed: violations.length === 0, status: "checked" };
}

const graph = compile({
  start: "intake",
  nodes: {
    intake,
    make,
    check,
    ready: () => ({ status: "ready_for_apply" }),
    blocked: () => ({ status: "blocked" }),
  },
  edges: {
    intake: "make",
    make: "check",
    check: (state) => (state.checkPassed ? "ready" : "blocked"),
    ready: "END",
    blocked: "END",
  },
});
```

새 직군을 붙일 때는 노드를 늘리지 말고 `check` 규칙만 추가한다. 루프가 필요하면 그다음이 `revise`(상한 2)다.

## Related pages
- [[agent-workflow-governance]]
- [[graph-engineering-sales-copy]]
- [[graph-engineering-developer-ci]]
- [[graphs]]

