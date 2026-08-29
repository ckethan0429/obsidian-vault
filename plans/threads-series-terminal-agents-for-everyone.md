---
title: Threads 연재 — 코딩 없이 터미널 에이전트 활용하기
created: 2026-08-29
updated: 2026-08-29
type: plan
tags: [threads, series, tutorial, non-developer, agents, curation]
sources: [concepts/agent-process-lifecycle.md, concepts/agent-workflow-marketer.md, concepts/agent-workflow-sales.md, concepts/agent-workflow-developer.md, concepts/agent-workflow-governance.md]
---

# Threads 연재 — 코딩 없이 터미널 에이전트 활용하기

@ethan13917 계정의 1530 자동 게시(cron `gogunbuntu-curate-1530-discord`, 796b3fc8caa9)가 이 목차 순서대로 하루 한 편씩 올린다. 비개발자를 위한 실전 활용 튜토리얼 시리즈.

## 핵심 각도
- ChatGPT/Claude **앱**으로도 자동화는 되지만, **터미널 에이전트(Claude Code/Codex)**만의 강점 = **내 컴퓨터의 로컬 파일을 직접 읽고 고치고 만든다.**
- 즉 "답을 주는 도구"가 아니라 "결과물을 만드는 도구". 이 차별점을 매 편에서 직군별 실전으로 보여준다.
- 뜬구름 금지: 각 편은 "무엇을 / 어떻게 시키고 / 결과가 어떻게 나오는지" 구체적으로. 가능하면 실제 따라 할 수 있는 예시 문구 포함.

## 목차 (게시 순서)

| 편 | 제목 | 핵심 내용 | 상태 |
|---|---|---|---|
| **0** | 왜 터미널 에이전트인가 (소개/예고편) | 앱 vs 터미널 차이(로컬 파일 직접 조작), 직군별 미리보기, 다음 편 목차 예고 | 게시 완료 2026-08-29 |
| **1** | 설치하고 첫 명령 내리기 | Claude Code/Codex 설치, "무엇을 언제 어떤 형식으로" 지시법, 첫 실행 | 예정 |
| **2** | 사무직 — 파일 정리 자동화 | 파일명 통일, 날짜별 분류, 엑셀 여러 개 병합, 회의록에서 할 일 추출 | 예정 |
| **3** | 영업 — 고객 관리와 제안서 | 고객 목록 정리, 팔로업 추리기, 회사별 맞춤 제안서, 반대의견 대응 정리 | 예정 |
| **4** | 마케터 — 카피와 소재 대량 생산 | 채널별 카피 여러 벌, 이미지 규격 변환, UTM 일괄 생성, 성과 카피 패턴 추출 | 예정 |
| **5** | 디자이너 — 바이브코딩 입문 | 시안→작동 웹페이지, 색·폰트 규칙을 코드로, 컴포넌트 자동 생성 | 예정 |
| **6** | GitHub 개발 말고도 활용하기 | 문서 버전 관리, 자료 백업, 팀 협업, 간단한 홈페이지 무료 배포(GitHub Pages) | 예정 |
| **7** | 매일 자동으로 돌리기 | 크론으로 반복 작업 무인화, "조용한 실패" 관리법 | 예정(선택) |
| **8** | 안전하게 맡기기 | 권한·승인·검증, 믿고 손 떼는 순서 | 예정(선택) |

## 편별 위키 근거
- 2편(사무직): `agent-process-lifecycle.md` 자동화형(프로세스형) 섹션
- 3편(영업): `agent-workflow-sales.md`, `sales-discovery-and-objection-handling.md`
- 4편(마케터): `agent-workflow-marketer.md`
- 5편(디자이너): 바이브코딩(외부, 실사용 검증 필요)
- 6편(GitHub): `agent-workflow-developer.md`의 CI/버전관리 개념을 비개발자용으로 환원
- 7·8편: `agent-process-lifecycle.md`, `agent-workflow-governance.md`

## 형식 규칙 (ck-threads-draft-format + fluent-korean)
- fluent-korean 명료체 `~습니다` (구어체 아님, 정보글이므로)
- 어려운 영어 용어는 한국식으로 풀어씀 (샌드박스 → 런타임/서버 등)
- 2번째 포스트 = 번호 붙인 요약
- 하단 N/N 번호 없음, 각 300자 이내, 총 10개 이하
- **연재이므로 매 편 마지막 포스트에 "지난 편 / 다음 편" 맥락을 한 줄 넣어 시리즈임을 알린다**
- 게시는 `--delay 60`
- AI라는 자기고백 금지, 정보를 아는 사람이 정리해주는 톤
