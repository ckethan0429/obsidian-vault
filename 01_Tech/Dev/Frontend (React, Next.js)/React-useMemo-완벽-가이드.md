# React useMemo 완벽 가이드

**`useMemo`**는 React에서 **비용이 큰 계산 결과를 메모이제이션(캐싱)**해서, 불필요한 재계산을 막는 Hook입니다.

---

## 기본 문법

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

- **첫 번째 인자**: 계산 함수 (값을 반환해야 함)
- **두 번째 인자**: 의존성 배열 — 배열 내 값이 변경될 때만 함수가 다시 실행됨

---

## 왜 쓰는가?

컴포넌트가 리렌더링될 때마다 낶 코드는 **처음부터 끝까지 다시 실행**됩니다.

```jsx
function MyComponent({ items, filter }) {
  // items가 10,000개라면? 매 렌더링마다 전체를 필터링하면 느림
  const filtered = items.filter(item => item.type === filter); // ← 비용 큼

  return <List data={filtered} />;
}
```

`useMemo`로 감싸면 `items`나 `filter`가 바뀔 때만 필터링 연산을 다시 합니다.

```jsx
const filtered = useMemo(
  () => items.filter(item => item.type === filter),
  [items, filter]
);
```

---

## 주의할 점

| 사용하면 좋은 경우 | 쓰지 말아야 할 경우 |
|---|---|
| 대량 데이터 필터링/정렬/매핑 | 간단한 문자열 연산 (`first + ' ' + last`) |
| 객체/배열 참조 비교가 필요할 때 (`useEffect` 의존성으로 넘기는 값) | 매번 새로 만들어도 성능에 무의미한 가벼운 연산 |
| 복잡한 차트 데이터 가공 | 리렌더링 자체를 줄여야 할 때 (→ `React.memo` 고려) |

> **중요**: `useMemo`는 렌더링 중에 실행되므로 사이드 이펙트(데이터 fetch, DOM 조작 등)를 넣으면 안 됩니다. 사이드 이펙트는 `useEffect`로 처리하세요.

---

## useMemo vs useCallback

둘 다 메모이제이션하지만 **캐싱 대상이 다릅니다**:

- **`useMemo`**: **값**을 캐싱
- **`useCallback`**: **함수**를 캐싱 (사실 낶적으로 `useMemo`로 구현됨)

```jsx
const memoizedValue = useMemo(() => compute(a, b), [a, b]);   // 값
const memoizedFn = useCallback(() => doSomething(a, b), [a, b]); // 함수
```

---

## 한 줄 요약

> **`useMemo`는 "이 계산 비싸니까 의존성 안 바뀌면 이전 결과 재사용하자"**입니다.
> **모든 연산에 달지 말고**, 프로파일링 후 병목이 확인된 비용 큰 연산에만 선택적으로 사용하세요.

---

## 관련 개념

- [[React-useCallback-완벽-가이드|useCallback]]
- [[React-memo-완벽-가이드|React.memo]]
- [[React-렌더링-최적화|렌더링 최적화 전략]]
