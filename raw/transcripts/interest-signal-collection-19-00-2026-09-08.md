---
title: Interest signal collection — 19:00 social run (2026-09-08)
type: raw
created: 2026-09-08
captured_at: 2026-09-08T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-08 raw existed before this run. Baseline = same-day
  08:00 social (interest-signal-collection-08-00-2026-09-08.md) + 11:00 new-target. Live Chrome CDP
  UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5184000), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client (RELOADED tabs).
  RESULT: REINFORCEMENT-ONLY / no new durable signal. Genuinely-new evidence this pass (vs 08:00
  baseline): (1) Threads /threads gained ONE new REPOST_FACADE 18141811084577394 (DdBPjr5k06w,
  2026-09-08 08:20 UTC / 17:20 KST) reposting @aprilran (란작가, Seoul travel photographer) — og:title
  recovered, og:description empty → single-surface OFF-AXIS travel/photo feed rotation, raw_only;
  /replies BYTE-IDENTICAL to the baseline (no new reply). (2) GitHub stars 93→94: new top star
  simonw/llm (Simon Willison's LLM CLI, 12,475★) — on-axis, reinforces the coding-agent/CLI-tooling
  lane already seeded by the 11:00 Simon Willison llm 0.35 row → raw_only. (3) Google My Activity
  RELOADED (len 5729, was 5628) surfacing genuinely-new 09-08 own-research rows: Nutanix
  agentic/sovereign/enterprise AI (nutanix ai solution / nutanix sovereign ai, 오후 2:0x) — single-surface
  CK own research reinforcing the ai-infra lane → raw_only; + LG U+ 노원 telecom (오후 5:10, personal off-axis).
  (4) YouTube subs feed rotated (len 8925) — mild on-axis reinforcement (Julian Goldie AntiGravity update,
  바이브마피아 디자인 하네스, 아산나눔 AI 공동창업, 월마트 AI 도입, 티타임즈) mixed with politics/soccer/투자 noise.
  /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's OWN posts (reinforcement).
  NONE opens a new durable branch. Durable action = this raw transcript + Honcho routing audit +
  log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-08 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-08
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0908.py`), RELOADED. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0908.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0908.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0908_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-09-08.md` + 11:00 new-target. No `interest-signal-collection-19-00-2026-09-08` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only / no new durable signal.** Four surfaces produced genuinely-new-since-08:00 rows, but all reinforce existing durable lanes or are off-axis: (1) Threads one new off-axis REPOST_FACADE (`@aprilran` travel photographer); (2) GitHub +1 star `simonw/llm` (on-axis CLI-tooling reinforcement); (3) Google Nutanix agentic/sovereign AI own-research (on-axis ai-infra reinforcement) + LG U+ telecom (personal); (4) YouTube feed rotation (mild on-axis). `/replies` byte-identical, `/mentions` empty, keyword_search = own posts. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — one new off-axis repost; /replies static → reinforcement
### /threads — ONE new REPOST_FACADE since the 08:00 baseline
- **NEW top row `18141811084577394`** (REPOST_FACADE, 2026-09-08 08:20 UTC / 17:20 KST) — https://www.threads.com/@ethan13917/post/DdBPjr5k06w
  - Public og:title recovered: `란작가 | 서울 여행 사진 영상 (@aprilran) on Threads`. og:description empty (JS-rendered, not recoverable without CDP). Reposted author `@aprilran` = a Seoul travel photographer → **single-surface OFF-AXIS** (travel/photography), not CK's AI/agent/infra axis → `raw_only`.
- Carry below (all unchanged vs baseline): `18437084800131008` 마케터 카피 root 09-03 (Dc0jyutEyVE); `18076240841372243` 영업 목록 자동화 (DcxJ4bokzrY); `18186615706405937` opinion (DcunhiPE1EH); 사무직 파일 PART3/PART2/series-intro; agent-vs-chatbot (Dcn-LjGE5Wa); 조회수 실험 rows (DcnVlR9Exxe / DcnTKuXk4XA); two 08-29 REPOST_FACADE (DcnTHbJExNu, DcmwNuJkws9).

### /replies — BYTE-IDENTICAL to the 08:00 baseline
- Top row still **`18089642990663815`** (2026-09-05 13:51 UTC) — https://www.threads.com/@ethan13917/post/Dc6HCTvk-Su — `"아니 왜이렇게 오늘 좋은 글이 뜨지"`. No new reply since the baseline. Same carry chain below (ㅋㅋㅋㅋㅋ용형??? / 과천에 있는 회사 / 헉스 IMAGE / 감사함당 / 09-03 마케터 thread reply chain / 탈모 정복 가즈아).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (Dcn_QHWE3Ws), agent-skill-languages (DcdEpS9k6Ey), Snowflake Copilot 해킹 (DcLEx6iE959 / DcLEvAFk6xt), agent-security 6/6 (Dbkp6TPk-Pt), 마케터/영업 automation roots, Claude Code/Codex 공식 설치 문서 (Dcp6_EBk6Sq / Dcp6K3iE9CK / Dcp6TdfE-8y / Dcp54Vjk2L7). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP, RELOADED) — 93→94, new top star simonw/llm → raw_only reinforcement
Page title `Your stars`, https://github.com/stars, **94 stars** (was 93 at the 08:00 baseline). NEW top row (Sort: Recently starred): **`simonw/llm`** (Python, 12,475★) — *"Access large language models from the command-line"* — Simon Willison's LLM CLI tool, freshly starred by CK. On-axis: reinforces the coding-agent/CLI-tooling lane and directly follows the 11:00 new-target `Simon Willison llm 0.35` release row (https://simonwillison.net/2026/Sep/7/llm/). Single-surface reinforcement of an existing lane, no new durable branch → `raw_only`.
- Below (unchanged carry): `miuuyy/codex-chatgpt-web` (5,627★), `snflkd/fluent-korean` (1,189★), `anthropics/defending-code-reference-harness` (7,415★), `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, `nathankim0/clean-architecture-skills`.

## 3) Google My Activity (CDP, RELOADED) — new Nutanix agentic/sovereign AI own-research → raw_only reinforcement
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5729 (was 5628). Newly visible **오늘(09-08)** rows (all CK's own research):
- `nutanix sovereign ai` 검색 (오후 2:03) → `Digital Sovereignty | Nutanix` 방문
- `nutanix ai solution` 검색 (오후 2:03) → `Nutanix 에이전틱 AI 솔루션: 엔터프라이즈를 위한 풀스택 AI 소프트웨어` 방문
- `엔터프라이즈 AI를 위한 검증된 LLM 및 API의 안전한 배포 및 운영` 방문 (오후 2:06)
- `엔터프라이즈 AI 여정 시작하기 | Nutanix` 방문 (오후 2:07)
- `유플러스 노원서비스센터` / `유플러스 합동점검센터` 검색 (오후 5:10) — LG U+ 노원 telecom, **personal off-axis**
- Interpretation: single-surface CK own-research into **Nutanix agentic/sovereign/enterprise AI** (full-stack AI software, sovereign-AI deployment) — a new *angle* but reinforces the existing durable **ai-infra / enterprise-AI-ops** lane. Not a new durable branch → `raw_only`. Yesterday's Codex/GPT SDK rows carry below (unchanged).

## 4) YouTube subscriptions (CDP, RELOADED) — feed rotation, mild on-axis reinforcement → raw_only
Hydrated (`구독 - YouTube`, len 8925). Newly visible AI/agent/dev rows:
- `New Antigravity Update Is SCARY GOOD!` — Julian Goldie SEO (102회) + `Why You Don't Need To Be a Developer for DevOps` — Tech Tutorials with Piyush (premieres)
- `현직 디자이너들이 만든 디자인 하네스 소개` — 바이브마피아 | AI Native 엔지니어 (예정 20:00)
- `코딩 못 하는 문과생이 AI 기업 공동창업자가 되기까지 | 2026 아산유스프러너 데모데이` — 아산나눔재단
- `AI 도입하고도 직원 수 유지하는 월마트의 비결은` — 티타임즈TV
- Interpretation: mild on-axis rows reinforcing existing AI-agent/coding/AI-adoption lanes; no new durable branch → `raw_only`.
- Off-axis noise kept in raw, excluded from report: 장르만 여의도/달란트투자/언더스탠딩 politics·투자 라이브, 흑우스토리 조회수 뻥튀기 (carry), 마인드씨피알 브라질 여사친, 달수네라이브/새벽의 축구 전문가/박주호 soccer, 블라인드 Car Story/안될과학 사이버캡, ETF읽어주는남자/김작가 TV 투자·부동산, 재테크읽어주는 파일럿 엔화, 옛드 육남매, 부산영어방송/Volka English 영어.

## Filtering notes
- Threads `/threads` gained one new REPOST_FACADE (off-axis travel `@aprilran`); `/replies` byte-identical → no new own-post/reply signal.
- GitHub +1 star (`simonw/llm`) and Google Nutanix research are the strongest genuinely-new items, but both reinforce existing durable lanes (CLI-tooling / ai-infra) → `raw_only`, no new concept page.
- Sports/coin/politics/자동차/영어 YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-08 19:00 social pass. Reinforcement-only: Threads one new off-axis repost + static `/replies`; GitHub +1 on-axis star (`simonw/llm`); Google Nutanix agentic/sovereign-AI own-research (on-axis, single-surface); YouTube feed rotation (mild on-axis). All reinforce existing lanes; none opens a new durable branch. Route `raw_only`; no durable page or index change.
