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
- **균형 관점(CK 추가 2026-08-29, 0편 라이브 스레드에 직접 반영):** 앱을 깎아내리지 않는다. 이제 ChatGPT 앱만 받아도 웬만한 건 다 되고, 비개발자·초보자에게는 앱이 오히려 훨씬 수월하다. 연재의 톤은 "앱 아니면 터미널"의 대립이 아니라 "앱으로 시작해서, 앱으로 안 되는 벽(내 파일 직접 조작·대량 처리)에 부딪히면 터미널로 넘어간다"는 자연스러운 사다리다. 매 편에서 이 균형을 유지한다.
- 뜬구름 금지: 각 편은 "무엇을 / 어떻게 시키고 / 결과가 어떻게 나오는지" 구체적으로. 가능하면 실제 따라 할 수 있는 예시 문구 포함.

## 목차 (게시 순서)

| 편 | 제목 | 핵심 내용 | 상태 |
|---|---|---|---|
| **0** | 왜 터미널 에이전트인가 (소개/예고편) | 앱 vs 터미널 차이(로컬 파일 직접 조작), 직군별 미리보기, 다음 편 목차 예고 | 게시 완료 2026-08-29 https://www.threads.com/@ethan13917/post/DcoFQtPE6iI |
| **1** | 설치하고 첫 명령 내리기 | Claude Code/Codex 설치, "무엇을 언제 어떤 형식으로" 지시법, 첫 실행 | 게시 완료 2026-08-30 https://www.threads.com/@ethan13917/post/Dcp54Vjk2L7 |
| **2** | 사무직 — 파일 정리 자동화 | 파일명 통일, 날짜별 분류, 엑셀 여러 개 병합, 회의록에서 할 일 추출 | 게시 완료 2026-08-31 https://www.threads.com/@ethan13917/post/Dcs-73nE2Iq |
| **3** | 영업 — 고객 관리와 제안서 | 고객 목록 정리, 팔로업 추리기, 회사별 맞춤 제안서, 반대의견 대응 정리 | 게시 완료 2026-09-02 https://www.threads.com/@ethan13917/post/DcxJ4bokzrY |
| **4** | 마케터 — 카피와 소재 대량 생산 | 채널별 카피 여러 벌, 이미지 규격 변환, UTM 일괄 생성, 성과 카피 패턴 추출 | 게시 완료 2026-09-03 https://www.threads.com/@ethan13917/post/Dc0jyutEyVE |
| **5** | 디자이너 — 바이브코딩 입문 | 시안→작동 웹페이지, 색·폰트 규칙을 코드로, 컴포넌트 자동 생성 | 예정 |
| **6** | GitHub 개발 말고도 활용하기 | 문서 버전 관리, 자료 백업, 팀 협업, 간단한 홈페이지 무료 배포(GitHub Pages) | 예정 |
| **7** | 매일 자동으로 돌리기 | 크론으로 반복 작업 무인화, "조용한 실패" 관리법 | 예정(선택) |
| **8** | 안전하게 맡기기 | 권한·승인·검증, 믿고 손 떼는 순서 | 예정(선택) |

## 편별 상세 가이드 (게시 근거 — 여기서 내용을 뽑아 300자 드래프트로 압축)
각 편을 쓸 때 아래 상세 가이드를 읽고, "복붙용 지시문 + 결과 예시 + 주의점"을 근거로 삼아 Threads 300자 포스트로 압축한다. 가이드 자체는 장문 명료체이고, 게시본은 그것을 스레드 형식으로 변환한 것이다.

- 1편(설치·첫 명령): [[series-1-getting-started]] — `guides/series-1-getting-started.md`
- 2편(사무직): [[series-2-office-worker]] — `guides/series-2-office-worker.md`
- 3편(영업): [[series-3-sales]] — `guides/series-3-sales.md`
- 4편(마케터): [[series-4-marketer]] — `guides/series-4-marketer.md`
- 5편(디자이너): [[series-5-designer]] — `guides/series-5-designer.md`
- 6편(GitHub): [[series-6-github-beyond-dev]] — `guides/series-6-github-beyond-dev.md`
- 7·8편(자동화·안전): `agent-process-lifecycle.md`, `agent-workflow-governance.md` (가이드 미작성, 필요 시 추가)

## 편별 위키 개념 근거 (배경)
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
