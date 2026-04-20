---
title: Virton 릴리즈 전략
created: 2026-04-20
updated: 2026-04-20
type: concept
tags: [business, strategy, operations, workflow, product, sales, startup]
sources: [raw/transcripts/virton-release-strategy-2026-04-20.md]
---

# Virton 릴리즈 전략

7명 규모 / 10개 엔터프라이즈 고객 컨텍스트의 B2B 패키지 솔루션에서,
**개발 사이클**과 **고객 릴리즈 사이클**은 분리해야 한다.

## 핵심 개념
- `main` 머지 시 자동 빌드/패키징되는 파이프라인은 **내부 개발 배포**다.
- 고객에게 나가는 릴리즈는 **RC → GA**를 거치는 별도 트랙이어야 한다.
- 영업/CS가 설명할 수 있는 공식 릴리즈 주기가 필요하다.

```text
[개발 배포 (Internal)]  →  [릴리즈 후보 (RC)]  →  [고객 릴리즈 (GA)]
 main 머지 시마다         10-15일 주기 선별        분기/반기 주기
 자동 빌드                 QA 검증                  영업/CS 싱크
```

## 권장 릴리즈 모델
### Semantic Versioning 3-트랙
- **Major (`X.0.0`)**: 반기~연 1회
  - 아키텍처 변경
  - 호환성 깨지는 변경
- **Minor (`X.Y.0`)**: **분기 1회**
  - 신규 기능 추가
  - 영업이사에게 제시할 공식 고객 릴리즈 주기
- **Patch (`X.Y.Z`)**: **월 1회 또는 필요 시**
  - 버그 픽스
  - 보안 패치
- **Hotfix (`X.Y.Z`)**: 수시
  - 치명 장애/보안 이슈 즉시 대응

### Virton 운영안
- Minor 릴리즈: **분기 1회**
- Patch 릴리즈: **월 1회** 또는 이슈 발생 시
- Hotfix: **수시**

## 브랜치 전략
```text
feature/*     →  main (개발 통합, 내부 테스트/CI-CD)
                   ↓  (분기별 선별)
                 release/v2.3.x  (QA, RC 빌드, 고객 전달용 패키징)
                   ↓
                 tag: v2.3.0 (GA)
                   ↓
                 hotfix/* → release/v2.3.x → main (back-merge)
```

### 원칙
- `main`: 계속 열린 상태로 운영
- `release/*`: 선별된 커밋만 반영
- 고객 배포용 패키지: **반드시 release 브랜치 태그에서만 빌드**

## Release Train
분기 단위 릴리즈 트레인으로 운영한다.

| 주차 | 활동 |
|------|------|
| Week 1-8 | 기능 개발 (`main` 자유 머지) |
| Week 9 | **Feature Freeze** / `release/*` 브랜치 컷 |
| Week 10 | QA 집중 테스트 / RC1 |
| Week 11 | 버그 픽스 / RC2 / 일부 고객 파일럿 |
| Week 12 | GA 릴리즈 / Release Note 공개 / 영업·CS 교육 |

- **기차는 놓치면 다음 분기 이월**
- 특정 기능 때문에 전체 릴리즈 일정을 미루지 않는다
- 예외는 분기당 1건 이하로 제한한다

## Feature Freeze 이후 운영
Feature Freeze는 `release/*`에 새 기능을 넣지 않는다는 뜻이지, `main` 개발을 멈춘다는 뜻이 아니다.

```text
release/v2.3 : Frozen (버그픽스만)
main         : 계속 개발 (v2.4 기능 머지 가능)
```

### 버그픽스 양방향 반영
```text
QA 버그 발견
  ↓
fix 커밋 → release/v2.3
  ↓
cherry-pick 또는 back-merge → main
```

### Hotfix 흐름
```text
hotfix/v2.2.1 (from tag v2.2.0)
  ↓
픽스 후 태깅 → v2.2.1 GA
  ↓
back-merge → release/v2.3 + main
```

> GitHub Actions에 자동 back-merge PR 생성 워크플로우를 붙이면 운영 부담이 줄어든다.

## 고객 유형별 트랙
현재는 복잡도를 피하고 **단일 트랙(분기 Minor)** 으로 시작하는 것이 좋다.

추후 필요 시:
- **Stable Track**: 반기 1회
- **Current Track**: 분기 1회
- **LTS 지정**: 예: `v2.0` 24개월 지원

## 영업/CS 커뮤니케이션 문구 초안
> 개발 CI/CD와 고객 릴리즈는 별도 트랙으로 운영합니다.
>
> - 정기 릴리즈: 분기 1회, 신규 기능 포함 (`v2.3`, `v2.4`, ...)
> - 패치 릴리즈: 월 1회, 버그/보안 픽스 (`v2.3.1`, `v2.3.2`)
> - 핫픽스: 긴급 이슈 발생 시 즉시

### 활용 포인트
- 분기 릴리즈 2~3주 전 Release Note 초안 공유
- 기존 고객 업셀 자료로 활용
- 주요 기능은 베타 고객 1~2곳에서 검증 후 GA

## 실행 체크리스트
### 문서화
- [ ] 릴리즈 노트 템플릿 정리 (고객용 / 내부용 분리)
- [ ] SemVer 기준 버전 네이밍 규칙 문서화
- [ ] 업그레이드 가이드 문서화
- [ ] EOL 정책 문서화

### 역할/프로세스
- [ ] 릴리즈 매니저 지정 (CK 또는 시니어 개발자)
- [ ] QA 체크리스트 표준화
- [ ] 롤백 시나리오 정의

### GitHub Actions 분리
- [ ] `main` push → dev 환경 자동 배포
- [ ] `release/*` push → RC 패키지 빌드 + QA 환경 배포
- [ ] `tag v*` → GA 패키지 빌드 + 고객 배포용 아티팩트 서명
- [ ] Hotfix → `release/main` 자동 back-merge PR 생성

## 놓치기 쉬운 포인트
- **Upgrade Path 매트릭스**: `v2.1 → v2.3` 직행 가능한지, 중간 버전 경유가 필요한지 명시
- **EOL 정책**: 계약서 수준으로 공식화
- **Release Note를 영업 자산으로**: 고객 benefit 중심으로 작성

## Related pages
- [[virton-career-and-business-profile]]
- [[b2b-sales-and-negotiation-strategy]]
- [[proposal-and-closing-strategy]]
