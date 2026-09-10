---
title: Interest signal collection — 19:00 social run (2026-09-10)
type: raw
created: 2026-09-10
captured_at: 2026-09-10T19:10 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:10 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-10 raw existed before this run. Baselines = same-day
  08:00 social (interest-signal-collection-08-00-2026-09-10.md) + 11:00 new-target
  (interest-signal-collection-11-00-2026-09-10.md). Live Chrome CDP UP (Chrome/147.0.7727.55).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5144445), /v1.0/me
  OK (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: REINFORCEMENT-ONLY / near-no-new-signal at the durable layer (route raw_only, whole run).
  (1) Threads MOVED vs the 08:00 baseline — ONE new top /threads row `DdFn-G1E-i3` (2026-09-10 01:10 UTC
  = 10:10 KST, TEXT_POST) — an English iPhone-UX opinion ("The new iphone offers a very smooth user
  experience ... smoothly and naturally, these are two things Apple is pursuing now") — consumer/off-axis,
  single-surface own post → raw_only. /replies top UNCHANGED since 08:00 (`DdEoS98k88x` 15:54 still on top);
  no new replies this window. All other /threads rows carry from 08:00 (조코딩 엑셀방송 civic debate + automation
  roots + agent-vs-chatbot). (2) GitHub stars 94, UNCHANGED (top still simonw/llm) → 변화 없음. (3) Google My
  Activity len 5822 IDENTICAL to the 08:00 baseline, no new "오늘" rows since 08:00 (top still 오후 4:48 알림 /
  1:46 VMware-탈출 기사 / 12:29 펜시브 THE VC) → 변화 없음. (4) YouTube subs len 9487 IDENTICAL to the 08:00
  baseline; AI rows carry-over (IBM 'Why won't AI agents follow the rules?' + 테크몽 AI 안경) → 변화 없음. NONE
  opens a new durable branch. Durable action = this raw transcript + Honcho routing audit + log.md entry only.
  index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-10 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-10
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0910.py`). Raw JSON cached `~/wiki/.cache/cdp_0910_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144445); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0910.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0910_1900.json`.
- **Baselines** = same-day 08:00 social (`interest-signal-collection-08-00-2026-09-10.md`) + 11:00 new-target (`interest-signal-collection-11-00-2026-09-10.md`). No `interest-signal-collection-19-00-2026-09-10` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only / near-no-new-signal at the durable layer.** Threads gained ONE new own post since the 08:00 baseline — an English iPhone-UX opinion (consumer/off-axis, single-surface). `/replies` top unchanged; no new replies. GitHub stars 94 unchanged. Google My Activity byte-identical (no new rows since 08:00). YouTube subs byte-identical (no new AI row). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — ONE new own post since 08:00, off-axis → raw_only
### /threads — new top row since the 08:00 baseline (07:56 UTC 조코딩 was 08:00 top)
- **NEW** `DdFn-G1E-i3` (TEXT_POST, 2026-09-10 01:10 UTC / 10:10 KST) — https://www.threads.com/@ethan13917/post/DdFn-G1E-i3 — `"The new iphone offers a very smooth user exprerience. \n but when it comes to features, i don't think there are many new things in this release. \n Only two things, smoothly and naturely, these are two thing Apple is pursuing now."` — Apple/iPhone consumer UX opinion, off CK's durable AI/agent/infra/operator axis. Single-surface own post → `raw_only`.
- Carry (unchanged from 08:00): `DdEkbp4k2z0` / `DdEK9PXk29m` / `DdEJW6ak24I` / `DdDxpzbk5Cd` (조코딩 AI 엑셀방송 civic/social debate); `DdDemvEE0AR` empty REPOST_FACADE; `DdBPjr5k06w` @aprilran repost; 마케터 카피 / 영업 목록 / 사무직 파일 automation roots; ChatGPT/Claude 앱 vs 컴퓨터 automation; agent-vs-chatbot `Dcn-LjGE5Wa`; 조회수 실험 `DcnVlR9Exxe`.

### /replies — UNCHANGED since 08:00 (no new replies this window)
- Top still `DdEoS98k88x` (09-09 15:54 UTC) — https://www.threads.com/@ethan13917/post/DdEoS98k88x. Entire visible batch = the same 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate already captured at 08:00. No new dated row → reinforcement.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (anthropic engineering), agent-skill-languages (plicara), Snowflake red-agent (wiz.io), agent-security 6/6, 마케터/영업/사무직 automation roots, Claude Code/Codex 공식 설치 문서. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (was 94 at the 08:00 baseline). No new star. Top row still `simonw/llm` (12,480★). Recent-starred list below unchanged (miuuyy/codex-chatgpt-web 5,834★, snflkd/fluent-korean, …). Language breakdown unchanged (24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell).

## 3) Google My Activity (CDP) — len 5822 IDENTICAL to 08:00 → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to the 08:00 baseline). Top "오늘" rows unchanged: 오후 4:48 검색 알림 4개 (Google 기능 업데이트 / 오픈AI), 오후 1:46 디지털데일리 `'VM웨어 횡포'에서 벗어날 수 있다` 가상화/백업 기사 (https://www.ddaily.co.kr/page/view/2026090808190822440) + 상포 테크놀로지 검색, 오후 12:29 펜시브 / THE VC 기업정보 lookup. "어제"(09-09) rows (Nutanix sovereign-AI / agentic-AI solution lookups, LG U+ 노원서비스센터) already present at 08:00. No new 09-10 afternoon row → reinforcement of the 08:00 baseline.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL to 08:00 → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, identical to the 08:00 baseline). AI/agent rows all carry-over: IBM Technology `Why won't AI agents just follow the rules?`, 테크몽 `AI 안경 끼고 외국인과 대화`, Shane Hummus `How To Start A YouTube Channel With Claude AI in 2026`. No new AI/agent/infra title surfaced vs the 08:00 baseline.
- Off-axis noise kept in raw, excluded from report: 흑우스토리 조회수 뻥튀기, 마인드씨피알/링거/어썸블리스 health, 달수네라이브·새벽의축구 이강인/리버풀 soccer 라이브, 훈수두는이코치/언더스탠딩/박병찬/머니인사이드 politics·투자 라이브, 불장단타왕 알트코인, 테이스터션 가품시계, Discovery Korea body-cam, 존이냐박이냐.

## Filtering notes
- Threads gained one new own post but it is Apple/iPhone consumer UX (off-axis) → `raw_only`.
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical, no new rows vs 08:00 → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-10 19:00 social pass. Reinforcement-only / near-no-new-signal at the durable layer: Threads gained one off-axis iPhone-UX own post (single-surface); `/replies` unchanged; GitHub 94 unchanged; Google byte-identical; YouTube byte-identical. All reinforce existing lanes or sit off-axis; none opens a new durable branch. Route `raw_only`; no durable page or index change.
