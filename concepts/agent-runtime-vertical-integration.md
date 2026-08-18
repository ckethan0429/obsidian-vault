---
title: 에이전트 런타임 수직 통합 (Grok Bot vs Cloudflare computer)
created: 2026-08-18
updated: 2026-08-18
type: concept
tags: [agents, infrastructure, ai, orchestration, comparison, prediction]
sources: [https://x.ai/news/introducing-grok-bot, https://blog.cloudflare.com/cloudflare-computer/, https://blog.cloudflare.com/sandbox-ga/, https://www.infoworld.com/article/4149869/cloudflare-launches-dynamic-workers-for-ai-agent-execution.html, https://blog.cloudflare.com/ai-search-easier/]
---

# 에이전트 런타임 수직 통합 (Grok Bot vs Cloudflare computer)

2026-08 기준, 에이전트 제품의 스택이 "게이트웨이 + 메신저 연동" 조합에서
**게이트웨이 + 에이전트 + 전용 컴퓨트를 한 제품으로 묶는 수직 통합**으로 이동 중이다.
같은 시기에 Cloudflare는 그 컴퓨트 층을 부품으로 파는 반대 포지션을 잡았다.

## 트리거가 된 두 발표 (2026-08)

### xAI Grok Bot (2026-08-11, early beta)
- "always-on AI teammates" — 봇마다 클라우드에 **자기 전용 컴퓨터**를 가짐
- 앱/웹사이트에 직접 로그인해서 작업. **API/MCP 없는 플랫폼도 사람처럼 조작**
- 워크플로 빌더 없음: 동료에게 메시지 보내듯 일을 맡기고, 한 번 시연하면 루틴으로 저장
- 봇끼리 그룹챗에서 업무 할당/조율 (chief-of-staff 봇 + 레인별 전문 봇 패턴)
- 대상: SuperGrok Heavy / Cursor Ultra / Cursor Teams Premium 구독자

### Cloudflare 에이전트 컴퓨트 스택 (2026-03~08 연타)
- **Dynamic Workers** (03월): V8 isolate로 LLM 생성 코드를 ms 단위 실행.
  컨테이너 대비 시작 ~100배 빠름, 메모리 10~100배 효율
- **Sandboxes GA** (04월): PTY 터미널 + 파일시스템 이벤트 + 프리뷰 URL + 스냅샷 웜스타트.
  과금은 활성 CPU에만 (LLM 응답 대기 중 idle은 무과금)
- **@cloudflare/computer** (08월 Agents Week, early preview): isolate / 컨테이너 샌드박스 /
  브라우저 중 뭘 쓸지 플랫폼이 자동 라우팅. 목표는 "컨테이너가 필요한 작업 10% 미만"
- **AI Search** (08월 Agents Week): 크롤링→임베딩→하이브리드 검색→/search·/mcp
  엔드포인트를 명령어 한 줄로 제공. 기존엔 Workers AI/AI Gateway/Vectorize/R2/
  Browser Run 5개 부품을 고객이 직접 조립하던 것을 제품이 흡수
- 논거: 에이전트마다 컨테이너를 주면 전 세계 컴퓨트로도 수십억 동시 에이전트를 감당 불가

## 세대 구분: 게이트웨이 → 풀스택

| | 1세대: 게이트웨이 | 2세대: 수직 통합 |
|---|---|---|
| 대표 | Hermes Agent, 클로드봇류 | Grok Bot |
| 본질 | 메신저 어댑터 + 세션 관리 | 에이전트 + UX + 전용 컴퓨트 |
| 컴퓨트 | 사용자 책임 (자기 서버 설치) | 벤더 제공 (클라우드 전용 머신) |
| 동작 모드 | 메시지가 오면 깨어나는 반응형 | 상시 구동, 봇이 먼저 팔로업 |
| 신원 | 사용자 계정을 빌려 씀 | 봇이 자기 세션/로그인 상태 유지 |
| 코딩 작업 | 외부 하네스에 skill로 위임 | 자체 하네스로 직접 수행 |

수직 통합이 일어나는 이유:
1. **게이트웨이만으로는 moat이 없음** — 메신저 커넥터는 커모디티. 차별화는
   "일을 끝내는가"인데, 그건 런타임(브라우저·터미널·로그인 상태)을 쥐어야 가능
2. **always-on이 기본 기대치가 됨** — 봇이 먼저 팔로업하고 루틴을 돌리려면
   durable runtime이 필수. 사용자 로컬 머신에 맡길 수 없어 전용 서버로 감
3. **신원의 이동** — 통합 모델에서 봇은 자기 컴퓨터에서 자기 세션으로 로그인
   상태를 유지하는, 사실상 독립된 디지털 워커에 가까워짐

## durable runtime 정의

**프로세스가 죽거나 재시작돼도 에이전트의 작업 상태가 유지되는 실행 환경.**
상태(진행 중 작업, 컨텍스트, 스케줄, 중간 산출물)를 실행 프로세스와 분리해
영속화하고, 트리거가 오면 같은 컨텍스트로 복원해 중단 지점부터 재개한다.

- 일반(ephemeral) 런타임: 요청→응답→소멸. 재부팅하면 진행 중 작업 증발
- durable 런타임: "30일 뒤 팔로업" 가능 — 상태를 저장하고 잠들었다가 깨어남
- 구현 스펙트럼:
  - **Cloudflare Durable Objects**: 에이전트당 SQLite + WebSocket + 스케줄러가 붙은
    마이크로 서버. 요청 없으면 잠들고 같은 상태로 깨어남
  - **Temporal류 워크플로 엔진**: 스텝별 이벤트 로그 → 크래시 시 리플레이로 재개
  - **Grok Bot 전용 컴퓨터**: VM을 상시 유지해 로그인 세션·파일·브라우저 상태까지
    통째로 보존 (무식하지만 확실)
- "봇이 먼저 팔로업"은 (1) 과거 기억 (2) 미래 시점 자가 기동 (3) 컨텍스트 복원의
  조합이므로, 정의상 durable runtime 그 자체다

[[managed-agents-architecture]]의 session(append-only 이벤트 로그) / harness / sandbox
분리가 정확히 이 durable 패턴의 레퍼런스 구현이고,
[[agent-client-protocol-and-acpx]]에서 정리한 "ACP 세션은 in-memory라 durable state
층이 따로 필요하다"는 결론과 같은 축이다.

## 상태 보존 전략: 무식함 vs 효율

| | Grok Bot (수직 통합) | Cloudflare (수평 인프라) |
|---|---|---|
| 답하는 질문 | 봇 하나가 얼마나 유능한가 | 봇 10억 개를 어떻게 돌리나 |
| 상태 전략 | 최대 보존 (VM 통째) | 최소 유지 (isolate + 선택적 컨테이너) |
| 고객 | 프리미엄 최종 사용자 | 에이전트 제품을 만드는 회사 |
| 강점 | API 없는 사이트도 조작, 세션 연속성 | 밀도/비용, ms 단위 스핀업 |
| 약점 | 봇당 비용, 스케일 한계 | 풀 OS/브라우저 필요 작업은 제약 |
| 경제성 | 고가 구독으로 VM 마진 흡수 | isolate 밀도로 가격 경쟁 |

- 각자의 포지션에서 합리적 선택: Grok은 소수 고가 사용자 x 진짜 컴퓨터,
  Cloudflare는 인프라 장사라 밀도 싸움에서 이겨야 함
- Proxmox 운영 감각으로는 VM 밀도를 위한 오버커밋 + ballooning + suspend와
  같은 문제를 에이전트 스케일에서 다시 푸는 것

## 수렴 예측

- 수렴 지점은 **"평소엔 isolate, 필요할 때만 컴퓨터"** 하이브리드
- Grok Bot도 스케일이 커지면 유휴 봇 VM을 스냅샷 suspend/resume으로 재울 것
- Cloudflare Sandboxes는 이미 스냅샷 웜스타트 + 활성 CPU 과금으로 그 방향 선행
- 1세대 오픈소스 게이트웨이(Hermes 등)의 남은 포지션은 셀프호스팅 + 모델 중립 +
  프라이버시. 다만 인프라 부품이 싸지면 개인이 2세대급을 조립하는 것도 가능해짐

## 모델 게이트웨이 층: 오픈웨이트 GPU + 프론티어 결합

수직 통합 스택의 마지막 퍼즐. 하네스/컴퓨트 아래에서 자체 GPU의 오픈웨이트
서빙과 프론티어 API를 **하나의 엔드포인트**로 묶는 층이다.

```
하네스 + durable runtime
  → 컴퓨트 (isolate/샌드박스/브라우저)
    → 모델 게이트웨이
       ├─ 자체 GPU: 오픈웨이트 (vLLM/SGLang)
       └─ API: 프론티어 모델
```

- 기존 플레이어: Cloudflare는 여기서도 두 조각을 이미 보유 — Workers AI(자기 GPU
  오픈웨이트 서빙) + AI Gateway(프론티어 라우팅/캐싱/폴백). 중립 호스티드는
  OpenRouter, 셀프호스팅은 LiteLLM류 프록시
- 라우팅 정책의 5개 축:
  1. **능력**: 계획·복잡한 추론은 프론티어로, 요약·분류·추출·툴콜 포맷팅 같은
     대량 반복 작업은 오픈웨이트로 (에이전트 토큰의 대부분은 후자)
  2. **프라이버시**: 사내 문서·고객 데이터·크리덴셜 근처 작업은 로컬 GPU 밖으로
     안 내보냄 — B2B에서는 기능이 아니라 계약 조건
  3. **비용/스루풋**: 백그라운드 루틴·배치는 자체 GPU (always-on일수록 유휴 토큰이
     많아 절감 폭이 큼)
  4. **가용성 폴백**: 프로바이더 overload 시 오픈웨이트로 자동 강등
  5. **캐스케이드**: 싼 모델 먼저 시도 → 자신 없으면 프론티어 에스컬레이션,
     또는 오픈웨이트 초안 + 프론티어 검증

### 핵심 설계 원칙: smooth AI infra experience
- 고객 관점의 성공 기준은 라우팅의 정교함이 아니라 **매끄러움**이다. 어떤 모델/
  GPU가 일했는지 몰라도 되고, 폴백·강등·에스컬레이션이 고객 눈에 보이면 안 됨
- 단일 엔드포인트, 무중단 폴백, 일관된 응답 품질 — 게이트웨이는 복잡성을
  **흡수하는 층**이지 노출하는 층이 아니다
- Grok Bot이 "워크플로 빌더 없음"으로 이긴 것과 같은 원리: 인프라 선택지를
  고객에게 떠넘기지 않는 쪽이 이긴다

## 데이터/검색 층: 에이전트의 자기 데이터 검색 엔진

모델 게이트웨이 아래(또는 옆)에 층이 하나 더 있다: **에이전트가 자기 소유
데이터를 검색하는 층**. Cloudflare AI Search(2026-08-06)가 이 층의 매니지드 구현.

```
컴퓨트   @cloudflare/computer (isolate/샌드박스/브라우저)
모델     Workers AI + AI Gateway (오픈웨이트 + 프론티어)
데이터   AI Search (크롤링→임베딩→하이브리드 검색→/mcp)
```

- 에이전트 루프에서의 위치: **지각**(자기 데이터에서 근거 찾기)과 **정리**(쌓은
  지식을 검색 가능하게 만들기) 단계의 인프라
- 검색을 **MCP 툴로 배달**: /mcp 엔드포인트를 에이전트에 물리면 "웹서치 후 전체
  페이지 fetch"(느리고 토큰 과다, 낡은 소스 위험)를 한 번의 툴콜로 대체.
  Cloudflare Dev Stack MCP가 자체 사례 (코딩 에이전트에 최신 문서 공급)
- smooth 원칙의 실물 증거: "부품 5개 직접 조립 → 명령어 한 줄" + 기본 모델 사용
  시 임베딩·리랭킹 무료(토큰 수 예측 걱정 제거). 복잡성을 흡수하는 층의 전형
- 크롤러가 고유 봇 아이덴티티(Cloudflare-AI-Search)로 robots.txt 준수 — 에이전트
  identity 논의와 연결. 커스텀 도메인 + Access로 사설 검색 인스턴스 가능
- 단, **입구는 닫혀 있고 출구만 열려 있다**: 인덱싱 대상은 현재 자기 Cloudflare
  계정의 zone이어야 하고, 내부 부품(Vectorize/R2/Browser Run)과 무료 임베딩
  (Workers AI 한정)도 자사 전용. 소비 측(/search HTTP, /mcp 표준)만 개방 —
  인터페이스는 표준으로 열고 인프라는 닫는 하이퍼스케일러 고전 전략(S3 API 패턴)
- smooth의 뒷면: "명령어 한 줄"의 매끄러움은 **락인과의 교환**. 데이터가 들어가는
  순간 중력이 생긴다. 데이터 레지던시·규제 고객은 이 트레이드를 살 수 없으므로,
  "Cloudflare급 매끄러움을 고객 인프라 안에서"(Firecrawl + 오픈웨이트 임베딩 +
  Qdrant/pgvector + FastMCP 조립)가 셀프호스팅 진영의 가치 제안이 된다
- CK 매핑: obsidian-vault 수집→honcho 라우팅→위키 저장 파이프라인이 이 층의
  셀프호스팅 수동 버전. 없는 조각은 위키 위의 /search 엔드포인트뿐 — MVP의
  "직원 1명"에게 로컬 GPU 임베딩(오픈웨이트라 무료)으로 자기 위키 검색을 물려주면
  같은 구조가 됨. 임베딩·리랭킹을 무료로 푼 것 자체가 이 층이 커모디티라는 방증

## CK 시사점

- 홈랩 Proxmox + VirtOn 조합은 **셀프호스팅판 에이전트 컴퓨트 층**의 재료
  (VM 프로비저닝 API를 이미 쥐고 있음) — [[virton-career-and-business-profile]]
- VirtOn 관점 트레이드오프: 에이전트당 VM/컨테이너(무식·확실) vs 경량 프리미티브
  (밀도·효율). Cloudflare의 10% 목표는 셀프호스팅 설계에도 그대로 적용 가능
- [[ai-infra-operating-economics]]의 harness routing / operator-margin 축에서 보면,
  이 발표들은 "누가 런타임을 쥐고 마진을 가져가는가" 경쟁의 가시화
- 모델 게이트웨이는 VirtOn의 자연스러운 확장: GPU VM 프로비저닝(VirtOn) + vLLM +
  LiteLLM 게이트웨이 = 셀프호스팅판 Workers AI + AI Gateway.
  [[GPU_브로커리지_PLG_전략_단계별_설계_2026-03-05]]의 공급 사이드와 직결 —
  매니지드 인퍼런스/게이트웨이가 브로커리지의 업셀 경로

## Related pages
- [[agent-process-lifecycle]]
- [[managed-agents-architecture]]
- [[managed-agents-practical-summary]]
- [[agent-client-protocol-and-acpx]]
- [[ai-infra-operating-economics]]
- [[hermes-workspace]]
- [[virton-career-and-business-profile]]
- [[GPU_브로커리지_PLG_전략_단계별_설계_2026-03-05]]

