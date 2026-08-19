---
title: 그래프 엔지니어링 기초 — 영업 문안 게이트
created: 2026-08-19
updated: 2026-08-19
type: concept
tags: [agents, workflow, orchestration, sales, safety]
sources: [internal]
---

# 그래프 엔지니어링 기초 — 영업 문안 게이트

[[agent-workflow-sales]]의 12단계 전체가 아니라 **문안 초안 → 금지 목록 검사 → 사람 발송 전 게이트**만 실행 가능한 그래프로 옮긴 첫 실습. 골격은 [[agent-workflow-governance]]의 Maker / Checker / Approver. 개발자 대응은 [[graph-engineering-developer-ci]].

> 에이전트에게 메시지를 맡기는 것이 아니라, 허용된 다음 칸만 연다.

## 그래프

```text
intake → draft → check → ready → END
                      ↘ blocked → END
```

| 노드 | 역할 | 하는 일 |
|---|---|---|
| `intake` | 접수 | 리드 ID, 채널 고정 |
| `draft` | Maker | 문안 작성 |
| `check` | Checker | 하드 게이트를 규칙으로 검사 |
| `afterCheck` | Approver 정책 | 통과만 `ready`, 아니면 `blocked` |
| `ready` | CD 직전 | 사람 발송 대기. 여기서 보내지 않음 |

하드 게이트는 프롬프트가 아니라 `check` 코드다. 무료 상세 진단, 레인지 가격, 회사명, 거짓 희소성.

## 실행 결과

나쁜 문안 `삼성SDS … 무료 상세 진단 … 300~500만 … 오늘만` → `intake → draft → check → blocked`. 네 게이트에 걸림.

정상 문안(지인 소개 요청만) → `check → ready`, 상태 `ready_for_human_send`.

## 실행기

LLM 없이 노드·엣지·상태를 보기 위한 최소 실행기다. 노드 함수는 나중에 LangGraph로 옮길 수 있다.

```js
const FORBIDDEN = [
  { id: "free_deep_diagnosis", re: /무료.{0,8}(상세\s*)?진단/, reason: "무료는 감별까지. 상세 진단은 유료" },
  { id: "range_price", re: /\d+\s*[~\-–]\s*\d+\s*만/, reason: "가격은 레인지가 아니라 고정가 또는 3옵션" },
  { id: "company_name", re: /(삼성|현대|LG|SK|네이버|카카오|SDS)/, reason: "회사명 미표기" },
  { id: "customer_realname", re: /(팀장|이사|대표)\s*[가-힣]{2,4}/, reason: "고객사 실명 금지" },
  { id: "fake_scarcity", re: /(오늘만|마감|선착순)/, reason: "거짓 희소성 금지" },
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
    leadId: state.leadId ?? "lead/demo",
    channel: state.channel ?? "intro",
    violations: [],
    status: "intaken",
  };
}

function draft(state) {
  const copy =
    state.seed === "bad"
      ? "안녕하세요, 삼성SDS 김민수 팀장님. 서버 무료 상세 진단 해드립니다. 비용은 300~500만 원이고 오늘만 가능합니다."
      : "안녕하세요. 예전에 같이 일했던 사람입니다. VMware 갱신 시점이면 이관 검토하시는 분 계실까요? 소개만 부탁드립니다.";
  return { copy, status: "drafted" };
}

function check(state) {
  const violations = FORBIDDEN.filter((rule) => rule.re.test(state.copy)).map((rule) => ({
    id: rule.id,
    reason: rule.reason,
  }));
  return { violations, checkPassed: violations.length === 0, status: "checked" };
}

const graph = compile({
  start: "intake",
  nodes: {
    intake,
    draft,
    check,
    ready: () => ({ status: "ready_for_human_send" }),
    blocked: () => ({ status: "blocked" }),
  },
  edges: {
    intake: "draft",
    draft: "check",
    check: (state) => (state.checkPassed ? "ready" : "blocked"),
    ready: "END",
    blocked: "END",
  },
});
```

다음으로 붙일 것: 검사 실패 시 `revise`(상한 2), `draft`만 모델로 교체, `ready`에서 사람 승인 후 재개.

## Related pages
- [[agent-workflow-governance]]
- [[agent-workflow-sales]]
- [[graph-engineering-developer-ci]]
- [[graphs]]

