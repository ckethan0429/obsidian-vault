---
title: NVIDIA Vera Rubin (차세대 GPU 아키텍처)
created: 2026-09-08
type: concept
tags: [nvidia, gpu, vera-rubin, ai-infrastructure, hardware]
sources:
  - https://nvidianews.nvidia.com/news/nvidia-unveils-rubin-cpx-a-new-class-of-gpu-designed-for-massive-context-inference
  - https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date
  - https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/
  - https://www.nvidia.com/en-us/data-center/technologies/rubin/
---

# NVIDIA Vera Rubin

> 조사 기준일: 2026-09-08. NVIDIA 공식 발표(2025-09-09 Rubin CPX 공개)와
> Tom's Hardware 심층 분석(Anton Shilov, 2025-11-17)을 1차 소스로 정리.
> **확정 발표 사실**과 **로드맵/추정치**를 명확히 구분해서 표기했다.

## 개요

**Vera Rubin**은 NVIDIA가 Blackwell / Blackwell Ultra 다음 세대로 내놓는
차세대 랙스케일 AI·HPC 플랫폼이다. 이름은 두 축으로 나뉜다.

- **Vera** — Grace를 잇는 커스텀 Arm CPU
- **Rubin** — GB200/GB300의 Blackwell GPU를 잇는 차세대 GPU (암흑물질 관측으로 유명한 천문학자 Vera Rubin에서 명명)

핵심 포인트는 Vera Rubin이 **단일 칩이 아니라 9종의 서로 다른 프로세서**로
구성된, NVIDIA 역사상 가장 복잡한 데이터센터 플랫폼이라는 점이다. GPU(Rubin),
CPU(Vera), 전용 추론 가속기(Rubin CPX), NVLink 6.0 스위치, BlueField-4 DPU,
Spectrum-6 / Quantum-CX9 광통신 NIC·스위치 실리콘까지 각 워크로드에 맞춰
분리·특화했다. *(출처: Tom's Hardware)*

> **왜 중요한가 (GPU 컨설팅 관점):** Rubin 세대의 진짜 메시지는 "더 빠른 GPU"가
> 아니라 **추론 워크로드의 물리적 분해(disaggregation)**다. 프리필(prefill,
> 긴 컨텍스트 인코딩)과 디코드(토큰 생성)를 서로 다른 하드웨어(CPX vs Rubin)에
> 나눠 실행해 토큰당 비용을 낮춘다. AI 인프라 경제성(달러/토큰)을 설계 단계에서
> 재정의하는 세대다.

---

## Rubin GPU (R200)

Vera Rubin 플랫폼의 심장. 보드당 GPU 다이가 2개 들어간다. *(출처: Tom's Hardware)*

| 항목 | 스펙 | 비고 |
|---|---|---|
| 공정 | TSMC 3nm급 | near-reticle 컴퓨트 타일 2개 + I/O 다이 2개 |
| 패키징 | CoWoS-L (추정) | |
| 메모리 | **288 GB HBM4** (8스택, 6.4 GT/s) | 약 13 TB/s 집계 대역폭 |
| FP4 성능 | **50 PFLOPS** (다이당) | Blackwell Ultra 대비 **3.3배** |
| FP8 성능 | **~16 PFLOPS** (다이당) | Blackwell Ultra 대비 **1.6배** |
| 전력 | **~1.8 kW** (GPU당) | Blackwell Ultra 대비 +0.4 kW |
| 랙 | Oberon (Blackwell NVL72와 동일 계열) | 소폭 냉각 개선으로 1.8 kW 대응 |

**GPU 카운팅 방식 변경(중요):** R200부터 NVIDIA는 **패키지가 아니라 다이 단위로
GPU를 센다.** 그래서 NVL144는 실제 72개 패키지지만 NVIDIA는 144 GPU로 표기한다.
스펙 비교 시 "패키지 기준인지 다이 기준인지" 반드시 확인해야 한다.
*(출처: Tom's Hardware)*

> **왜 중요한가:** 다이당 1.6~3.3배 성능 향상에 전력은 +0.4 kW뿐 → 성능/와트가
> 크게 개선. 다만 GPU당 1.8 kW라 랙 전력밀도·액냉 설계가 필수. 카운팅 방식
> 변경은 마케팅 수치 해석에 함정이 될 수 있으니 컨설팅 시 원문 기준을 명시할 것.

---

## Vera CPU

Grace를 잇는 커스텀 Arm CPU. Grace가 표준 Arm Neoverse V2 코어를 쓴 것과 달리,
Vera는 **NVIDIA 자체 설계 코어**를 처음 채택했다. *(출처: Tom's Hardware,
Hot Chips 2026 커버리지)*

| 항목 | 스펙 |
|---|---|
| 코어 | **88개** 독자 설계 Armv9.2 코어 (코드네임 **Olympus**) |
| 스레드 | 2-way SMT → 최대 **176 스레드** |
| 확장 | SVE2, crypto, FP8/BF16, tagging, RNG, LS64 등 |
| 성능 | Grace 대비 **약 2배** |
| 메모리 대역폭 | **1.2 TB/s** (Grace 대비 +20%) |
| 시스템 메모리 | LPDDR5X, **SOCAMM2** 모듈 (밀도 향상) |
| CPU↔GPU 링크 | NVLink-C2C, **~1.8 TB/s** per CPU (Grace 900 GB/s의 2배) |
| 패키지 | 멀티 칩렛 설계 (별도 I/O 칩렛 확인) |

**아직 미공개:** 클럭, 코어별 캐시 크기, L2/L3 토폴로지, TDP, NUMA/소켓 구성.
*(출처: Tom's Hardware — "공개 정보에 여전히 큰 공백이 있다")*

> **왜 중요한가:** 자체 코어 전환은 NVIDIA가 CPU 로드맵을 Arm IP에서 독립시키는
> 신호. 단일스레드 성능을 "agentic AI 이점"으로 마케팅(오케스트레이션·스케줄링이
> 무거운 에이전트 워크로드에서 CPU 역할 강조). SMT는 파이프라인 대부분에서
> 스레드당 처리량이 절반이 되므로 **워크로드별로 SMT on/off를 튜닝**해야 한다.

---

## 랙스케일 시스템 (NVL144 / NVL144 CPX / NVL576)

### Vera Rubin NVL144 (2026)
*(출처: Tom's Hardware)*

- **144 Rubin GPU** (= 72 패키지) + **36 Vera CPU**
- **최대 3.6 NVFP4 ExaFLOPS** (추론) / **최대 1.2 FP8 ExaFLOPS** (학습)
- HBM4 기반 대용량 메모리 풀
- Oberon 랙 계열 사용

### Vera Rubin NVL144 CPX (2026, 확정 발표)
NVIDIA가 2025-09-09 공식 공개한 통합 MGX 시스템. *(출처: NVIDIA 공식 보도자료)*

- **8 ExaFLOPS AI 컴퓨트** (단일 랙)
- **GB300 NVL72 대비 7.5배** AI 성능
- **100 TB 고속 메모리**, **1.7 PB/s 메모리 대역폭** (단일 랙)
- 기존 Vera Rubin NVL144에 **전용 Rubin CPX 컴퓨트 트레이**만 추가하는 옵션도 제공
- NVIDIA 표현: "**$1억 투자당 $50억 토큰 매출**" (long-context 수익화 강조)
- 스케일아웃: Quantum-X800 InfiniBand 또는 Spectrum-X Ethernet + Spectrum-XGS +
  ConnectX-9 SuperNIC

> Tom's Hardware 기준 NVL144 CPX의 추론 성능은 **약 8 NVFP4 ExaFLOPS**로,
> 일반 NVL144(3.6 ExaFLOPS)보다 컴퓨트 밀도가 훨씬 높다.

### Rubin Ultra NVL576 (2027, 로드맵)
*(출처: Tom's Hardware — 2027 타깃)*

- **Kyber 랙**(신규), **576 GPU** (= 144 패키지) → scale-up world size 대폭 확대
- Rubin Ultra GPU: 컴퓨트 칩렛 2→4개, 패키지당 **~100 FP4 PFLOPS**
- **1 TB HBM4E** (16스택), **~32 TB/s** 대역폭
- 패키지당 **3.6 kW** → 전용 신규 냉각 필요
- NVLink 7.0 / NVSwitch 7.0

---

## Rubin CPX (Context Processing / 장문맥 추론 특화)

**Rubin CPX는 "가속기를 위한 가속기"** — LLM 워크로드의 컨텍스트 무거운
프론트엔드(프리필/인코딩)를 전담하는 특화 추론 칩. 2025-09-09 공식 공개.
*(출처: NVIDIA 공식 보도자료 + Tom's Hardware)*

| 항목 | 스펙 |
|---|---|
| 성능 | **~30 NVFP4 PFLOPS** |
| 메모리 | **128 GB GDDR7** (HBM4 대신 — 저렴·저발열·고급 패키징 불필요) |
| 다이 | **모놀리식 단일 다이** (비용 효율) |
| 특화 기능 | 비디오 인코더/디코더 통합, long-context 추론 처리 |
| 어텐션 | GB300 NVL72 대비 **3배 빠른 attention** |
| 대상 | 100만 토큰급 코딩, 생성형 비디오(1시간 영상 ≈ 100만 토큰) |
| 출시 | **2026년 말** (확정 발표) |

**동작 방식:** NVL144 CPX 안에서 CPX가 일반 Rubin GPU·Vera CPU와 함께 돌면서,
**Dynamo 소프트웨어가 프리필/컨텍스트 워크로드를 메인 GPU에서 자동으로 CPX로
오프로드**한다. 비싼 HBM4 GPU는 디코드(토큰 생성)에 집중시키고, 긴 컨텍스트
인코딩은 값싼 GDDR7 CPX가 맡는 분업 구조. *(출처: Tom's Hardware)*

초기 관심 고객: **Cursor**(코드 생성), **Runway**(생성형 비디오),
**Magic**(1억 토큰 컨텍스트 코딩 에이전트). *(출처: NVIDIA 공식 보도자료)*

> **왜 중요한가 (인프라 경제성 핵심):** 이게 Rubin 세대의 가장 상업적으로
> 중요한 아이디어다. 프리필은 컴퓨트 바운드, 디코드는 메모리 대역폭 바운드로
> 성질이 다른데, 지금까지는 같은 비싼 HBM GPU에서 둘 다 처리했다. CPX는
> 프리필 전용 저가 칩을 붙여 **토큰당 비용을 구조적으로 낮춘다**. 장문맥
> 에이전트·코딩·비디오가 주력인 서비스라면 CPX 유무가 단가 경쟁력을 가른다.

### 보조 프로세서: BlueField-4 DPU
많은 NVL144 시스템에 포함. AI 연산이 아니라 **GPU 주변의 모든 것**(오케스트레이션,
네트워킹, 스토리지, 보안)을 가속. *(출처: Tom's Hardware)*

- **64코어 Grace 기반 CPU** + 800 Gb/s 네트워크 인터페이스 + 오프로드 엔진
- **통합 SSD로 KV 캐시 저장** (멀티턴 대화 컨텍스트 유지)
- DOCA 프레임워크 (보안·멀티테넌시·모니터링)

---

## 메모리 · NVLink · 스케일아웃

### 메모리 세대
- **Rubin GPU: HBM4** 288 GB (8스택, 6.4 GT/s, ~13 TB/s)
- **Rubin Ultra: HBM4e** 1 TB (16스택, ~32 TB/s) — *2027 로드맵*
- **Rubin CPX: GDDR7** 128 GB (HBM 대체, 비용 최적화)

### NVLink / 스케일업 *(출처: Tom's Hardware)*
- **NVLink 6.0** (Rubin, 2026): 링크당 총 **~3.6 TB/s** (양방향 각 1.8 TB/s) —
  NVLink 5 대비 2배
- **NVSwitch 6.0**: NVL144에서 GPU-GPU 집계 **~28.8 TB/s**
- **NVLink 7.0 / NVSwitch 7.0** (Rubin Ultra, 2027): 링크당 대역폭 유지,
  스위치당 포트 ~144개로 확대 → 144 패키지 풀 대역폭 연결

### 스케일아웃: 공동 패키징 광학(CPO) *(출처: Tom's Hardware)*
Rubin 세대부터 **co-packaged optics** 도입 (Spectrum-X Ethernet / Quantum-X InfiniBand).
- TSMC 1세대 **COUPE** 플랫폼 (65nm EIC + PIC), **포트당 1.6 Tb/s**
- **Quantum-X InfiniBand 스위치: 2026년 초** 출시, 115 Tb/s 패브릭
  (144레인 × 800 Gb/s), SHARP v4 인네트워크 연산(14.4 TFLOPS), 액냉
- **Spectrum-X Ethernet**: 128×800G ~ 512×800G, 100~400 Tb/s
- **ConnectX-9 SuperNIC**: 1.6 Tb/s, PCIe 6.0, GPUDirect Async·NIXL 제로카피

### 소프트웨어 스택 *(출처: Tom's Hardware, NVIDIA)*
- **Dynamo** (CUDA 13 기반) — 이종 GPU 간 추론 워크로드 분해·분산
- Smart Router / GPU Planner — MoE 복제본 간 prefill·decode 동적 밸런싱
- **NIXL** — GPU↔NIC 제로카피 (IBGDA)
- NVMe KV 캐시 오프로드 (50~60% 히트율)
- NCCL 2.24 — 소메시지 지연 4배 감소
- Nemotron 멀티모달 모델, NIM 마이크로서비스, AI Enterprise

---

## 로드맵 (2026~2027)

| 시점 | 제품 | 상태 |
|---|---|---|
| 2026 초 | Quantum-X InfiniBand 광 스위치 | 발표 기준 예상 |
| 2026 (하반기) | **Vera Rubin NVL144 / NVL144 CPX** (Rubin GPU + Vera CPU) | 플랫폼 발표됨 |
| **2026년 말** | **Rubin CPX** 가용 | **공식 발표 (확정)** |
| 2027 | **Rubin Ultra NVL576** (Kyber 랙, HBM4e, NVLink 7) | 로드맵 (예상) |

> 주의: NVIDIA의 공식 확정 발언은 "**Rubin CPX는 2026년 말 가용**"까지다.
> Vera Rubin 플랫폼 자체의 정확한 양산 시점, Rubin Ultra 2027 세부 스펙은
> 로드맵/추정 단계이며 GTC·Hot Chips에서 추가 공개가 이어질 예정.

---

## Blackwell 대비 개선점 요약

| 축 | Blackwell (Ultra) | Vera Rubin | 개선 |
|---|---|---|---|
| GPU FP4 (다이당) | 15 PFLOPS급 | **50 PFLOPS** | **~3.3배** |
| GPU FP8 (다이당) | — | **~16 PFLOPS** | **~1.6배** |
| GPU 메모리 | HBM3e | **HBM4 288 GB (~13 TB/s)** | 용량·대역폭↑ |
| CPU | Grace (Neoverse V2) | **Vera (자체 Olympus 코어), 2배 성능** | 아키텍처 전환 |
| CPU↔GPU (C2C) | 900 GB/s | **~1.8 TB/s** | 2배 |
| NVLink | 5세대 | **6.0 (~3.6 TB/s/링크)** | 2배 |
| 랙 시스템 | GB300 NVL72 | **NVL144 CPX (8 EF)** | **7.5배 AI 성능** |
| 추론 구조 | 단일 GPU에서 prefill+decode | **CPX로 prefill 분해(disaggregation)** | 토큰당 비용↓ |
| 스케일아웃 | 표준 광 트랜시버 | **CPO(공동 패키징 광학)** | 전력·지연↓ |

**한 줄 요약:** Rubin은 (1) 다이당 3배급 FP4 성능, (2) HBM4 288GB, (3) 자체 Vera
CPU, (4) **CPX 기반 추론 분해**, (5) CPO 광학으로 요약된다. 이 중 인프라
경제성에 가장 큰 영향을 주는 건 **CPX 분해 구조**와 **CPO**다.

---

## 조사 메모 · 신뢰도

- **1차(공식·확정):** NVIDIA 보도자료(2025-09-09) — CPX 30 PFLOPS/128GB GDDR7,
  NVL144 CPX 8 EF·100TB·1.7 PB/s·7.5배, "2026년 말 가용". 이 수치들은 확정.
- **2차(기술 매체 심층):** Tom's Hardware(Anton Shilov, 2025-11-17) — Vera CPU
  88코어/Olympus, R200 50 FP4 PFLOPS/288GB HBM4/1.8kW, NVLink 6.0, Rubin Ultra
  2027 등. NVIDIA 발표·Hot Chips 2026 커버리지 종합. 세부 수치는 발표 기반이며
  일부(클럭·TDP·캐시)는 여전히 미공개.
- **접근 실패:** nvidia.com/data-center/technologies/rubin/ 및 vera-rubin-nvl72/
  랜딩 페이지는 JS 렌더링이라 정적 추출로 텍스트를 얻지 못함. Google 검색은
  봇 차단(sorry 페이지) → DuckDuckGo HTML로 우회해 소스 확보.
- **미확정/추정 표기 원칙:** Rubin Ultra 스펙, NVLink 7.0 포트 수, Vera 상세
  마이크로아키텍처는 "발표 기준 예상/로드맵"으로 표기했다. 추측 수치는 기입하지 않음.

## 출처

1. NVIDIA 공식 보도자료 — "NVIDIA Unveils Rubin CPX: A New Class of GPU Designed for Massive-Context Inference" (2025-09-09)
   https://nvidianews.nvidia.com/news/nvidia-unveils-rubin-cpx-a-new-class-of-gpu-designed-for-massive-context-inference
2. Tom's Hardware — "Nvidia's Vera Rubin platform in depth" (Anton Shilov, 2025-11-17)
   https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date
3. NVIDIA Vera Rubin NVL72 제품 페이지 (JS 렌더링 — 참고용)
   https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/
4. NVIDIA Rubin 기술 페이지 (JS 렌더링 — 참고용)
   https://www.nvidia.com/en-us/data-center/technologies/rubin/
