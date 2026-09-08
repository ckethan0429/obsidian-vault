---
title: Interest signal collection — 08:00 social run (2026-09-09)
type: raw
created: 2026-09-09
captured_at: 2026-09-09T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-09 raw existed before this run. Baseline = prior social
  transcript interest-signal-collection-19-00-2026-09-08.md (most recent completed social run by mtime).
  Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5137244), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client.
  RESULT: REINFORCEMENT-ONLY / effectively no-new-signal. (1) Threads BOTH-STATIC vs 19:00 baseline:
  /threads top still 18141811084577394 (@aprilran repost, 09-08 17:20 KST), /replies top still
  18089642990663815 (2026-09-05) — no new own post/reply. /mentions empty; keyword_search agent/Claude
  Code all top-hit CK's OWN posts (reinforcement). (2) GitHub stars 94, UNCHANGED from 19:00 baseline
  (top still simonw/llm). (3) Google My Activity: Nutanix agentic/sovereign-AI + LG U+ 노원 rows already
  in the 19:00 baseline; only genuinely-new row is a passive news 알림 (디지털데일리 / Google 기능 업데이트,
  오전 5:48) — off-axis passive → 변화 없음. (4) YouTube subs feed rotated (len 9565): new AI/coding titles
  (GPT-6 Astra AI Frontier Korea 노정석, "I Found a FREE Way to Run Codex" Julian Goldie, GPT-6 팩트체크
  김단테, "5 Claude AI Second Incomes" Shane Hummus) mixed with soccer/politics/투자 noise — all reinforce
  existing AI-agent/coding lanes → raw_only. NONE opens a new durable branch. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-09 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-09
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0909.py` + `/tmp/cdp_read2_0800_0909.py`). Raw JSON cached under `~/wiki/.cache/`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137244); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0909.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0909_0800.json`.
- **Baseline** = prior completed social transcript `interest-signal-collection-19-00-2026-09-08.md` (most recent social run by mtime). No `interest-signal-collection-08-00-2026-09-09` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only / effectively no-new-signal.** Threads is BOTH-STATIC vs the 19:00 baseline (own `/threads` top AND `/replies` top byte-identical). GitHub stars unchanged (94). Google My Activity's on-axis rows (Nutanix, LG U+) are carry-over from the 19:00 baseline; only a passive news 알림 is genuinely new (off-axis). YouTube rotated in fresh AI/coding titles but all land in existing lanes. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — BOTH-STATIC vs 19:00 baseline → no new signal
### /threads — top row UNCHANGED
- Top row still **`18141811084577394`** (REPOST_FACADE, 2026-09-08 08:20 UTC / 17:20 KST) — https://www.threads.com/@ethan13917/post/DdBPjr5k06w — the `@aprilran` (란작가, Seoul travel photographer) off-axis repost captured at 19:00. No new own post since the baseline.
- Carry below (all unchanged): `18437084800131008` 마케터 카피 root 09-03 (Dc0jyutEyVE); `18076240841372243` 영업 목록 자동화 (DcxJ4bokzrY); `18186615706405937` opinion (DcunhiPE1EH); 사무직 파일 PART3/PART2/series-intro; agent-vs-chatbot (Dcn-LjGE5Wa); 조회수 실험 rows (DcnVlR9Exxe / DcnTKuXk4XA); two 08-29 REPOST_FACADE (DcnTHbJExNu, DcmwNuJkws9).

### /replies — top row UNCHANGED (byte-identical)
- Top row still **`18089642990663815`** (2026-09-05 13:51 UTC) — https://www.threads.com/@ethan13917/post/Dc6HCTvk-Su — `"아니 왜이렇게 오늘 좋은 글이 뜨지"`. No new reply since the baseline. Same carry chain below (ㅋㅋㅋㅋㅋ용형??? / 과천에 있는 회사 / 헉스 IMAGE / 감사함당 / 09-03 마케터 thread reply chain / 탈모 정복 가즈아).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' — reinforcement (own posts)
Both queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (anthropic managed-agents), agent-skill-languages (plicara), Snowflake Copilot 해킹 (wiz.io), agent-security 6/6, 마케터/영업/사무직 automation roots, Claude Code/Codex 공식 설치 문서. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED from 19:00 baseline → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (was 94 at the 19:00 baseline). No new star. Top row still `simonw/llm` (Simon Willison's LLM CLI). Language breakdown unchanged (24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell / ...).

## 3) Google My Activity (CDP) — on-axis rows carry-over; only passive news 알림 is new → 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5747 (was 5729). 
- **오늘(09-09) 새 행**: `검색 알림 2개 — 포함된 주제: Google 기능 업데이트 / 디지털데일리` (오전 5:48) — passive Discover/news 알림, **off-axis** → not a search signal.
- Carry (unchanged from 19:00 baseline): `유플러스 노원서비스센터`/`유플러스 합동점검센터` (어제 오후 5:10, LG U+ 노원 telecom, personal off-axis); Nutanix agentic/sovereign/enterprise AI cluster (`nutanix sovereign ai` / `nutanix ai solution` / Digital Sovereignty / 엔터프라이즈 AI 여정, 09-08 오후 2:0x); 09-07 Codex SDK / GPT SDK / ChatGPT docs / OpenAI Plugins rows.
- Interpretation: no genuinely-new on-axis search this pass; the Nutanix ai-infra research was already captured at 19:00 → `변화 없음`.

## 4) YouTube subscriptions (CDP) — feed rotation, mild on-axis reinforcement → raw_only
Hydrated (`구독 - YouTube`, len 9565). Newly visible AI/agent/dev rows since the 19:00 baseline:
- `EP 113. GPT-6 Astra 이후, AI의 생각을 어디까지 볼 수 있을까` — AI Frontier Korea (노정석) (589회, 1시간 전)
- `I Found a FREE Way to Run Codex` — Julian Goldie SEO (3회, 1분 전)
- `GPT-6 전지전능? 허접? 팩트체크` — 내일은 투자왕 김단테 (24만회, 10시간 전)
- `5 Claude AI "Second Incomes" That Can Replace Your Full Time Job` — Shane Hummus (451회)
- `VDI가 느린 진짜 원인` — 토크아이티 (infra-adjacent)
- Interpretation: fresh titles but all reinforce existing AI-agent/coding/AI-monetization lanes; no new durable branch → `raw_only`.
- Off-axis noise kept in raw, excluded from report: 흑우스토리 조회수 뻥튀기 (carry), 손흥민 MLS/삼촌은 그저/달수네라이브 나이키/모트라인 자동차, 박성태 뉴스쇼/뉴스연구소 politics 라이브, 표영호tv 폐업대출, 흑자헬스 용혜인, 손에잡히는경제 건보료/엔화, 부산영어방송 영어뉴스.

## Filtering notes
- Threads both-static (`/threads` + `/replies` tops identical to baseline) → no new own-post/reply signal.
- GitHub unchanged; Google only passive news 알림 new (off-axis) → both effectively `변화 없음`.
- YouTube feed rotation is the only genuinely-new evidence, all within existing lanes → `raw_only`.
- Sports/politics/자동차/영어/건보료 YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-09 08:00 social pass. Reinforcement-only / effectively no-new-signal: Threads both-static; GitHub 94 unchanged; Google on-axis rows carry-over (only passive news 알림 new); YouTube feed rotation (mild on-axis). All reinforce existing lanes; none opens a new durable branch. Route `raw_only`; no durable page or index change.
