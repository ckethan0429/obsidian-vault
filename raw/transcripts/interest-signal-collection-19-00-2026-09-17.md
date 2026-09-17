---
title: Interest signal collection — 19:00 social run (2026-09-17)
type: raw
created: 2026-09-17
captured_at: 2026-09-17T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-17 raw existed before this run. Baseline = the same-day
  08:00 social transcript (interest-signal-collection-08-00-2026-09-17.md, itself a clean cross-day
  both-static no-new-signal) plus the 11:00 new-target run (which absorbed the NVIDIA Vera Rubin
  MLPerf debut via append_existing to concepts/nvidia-vera-rubin.md — already landed at ingest).
  Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5144458), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: clean same-day both-static no-new-signal / reinforcement-only. (1) Threads: own /threads top
  `17946461313280547` (parenting, 09-15) AND /replies top `18153734854518735` ("갑자기 즙짜네", 09-15)
  BOTH byte-identical to the 08:00 baseline — CK made no posts between the 08:00 and 19:00 passes.
  /mentions empty. keyword_search agent/Claude Code/Codex = existing agent/Claude Code lanes
  (reinforcement, no new durable branch). (2) GitHub stars 94, len 2807 byte-identical vs 08:00 → 변화 없음.
  (3) Google My Activity len 5822 byte-identical vs 08:00 → 변화 없음. (4) YouTube subs len 9487
  byte-identical vs 08:00 → 변화 없음 (feed did not even rotate this pass). NONE opens a new durable
  branch. Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md
  and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-17 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-17
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0917.py`, reused from the 08:00 script). Raw JSON cached `~/wiki/.cache/cdp_0917_1900.json`. GitHub 2807 / Google 5822 / YouTube 9487 — all three byte-identical to the same-day 08:00 baseline.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144458); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0917.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0917_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-09-17.md` (08:00, clean cross-day no-new-signal) + `interest-signal-collection-11-00-2026-09-17.md` (11:00 new-target; the NVIDIA Vera Rubin MLPerf debut it surfaced was already absorbed into `concepts/nvidia-vera-rubin.md` at that ingest).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file` (no execute_code / heredoc / `-c` / pipe-to-interpreter).

## Novelty summary
**Clean same-day both-static no-new-signal / reinforcement-only.** CK made no Threads posts between the 08:00 and 19:00 passes, so both Threads API surfaces are byte-for-byte the 08:00 rows: own `/threads` top `17946461313280547` (parenting, 09-15 19:48 KST) AND `/replies` top `18153734854518735` ("갑자기 즙짜네", 09-15) both unchanged. GitHub stars 94 (len 2807), Google My Activity (len 5822), and YouTube subs (len 9487) all byte-identical to the 08:00 baseline → 변화 없음 on every CDP surface (YouTube did not even feed-rotate this pass). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both tops unchanged vs 08:00 → reinforcement
### /threads — top unchanged since baseline
- Top row `17946461313280547` (2026-09-15T10:48:56 UTC / 19:48 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdTiIXJk-5T — "육아용품 딴거 몰라도 오래쓰는건 좋은거 써라..." (off-axis personal/parenting, carried).
- Carry (unchanged): `18064330907521001` (그록봇/muse 챗봇 에이전트 vs 비즈니스는 아직 메일 의사결정 — on-axis agent-adoption-vs-reality own post, 09-15); `18111305732518146` 법무부장관 청문회 civic; `18111540608596140` "야름답다" personal; `18084391358315488` REPOST_FACADE (empty); `18177935422381992` 한동훈/국무의원 civic; `18130629235679697` iPhone-UX opinion; 조코딩 엑셀방송 논쟁 cluster (09-09 carry); `18102024221624249` REPOST_FACADE (empty).

### /replies — top unchanged vs baseline
- Top row `18153734854518735` ("와... 갑자기 즙짜네...", 2026-09-15T02:10:19 UTC) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — byte-identical to the baseline. No new reply since the 08:00 pass. Carry rows: youtube shorts link reply (09-15), "하드웨어와 소프트웨어 결합이 젤 힘듭니다" (09-14 on-axis), Macos reinstall Q (09-12), 조코딩 논쟁 reply cluster (09-09).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Returns public TOP rows mapping to CK's existing agent / Claude Code / Codex lanes (Anthropic engineering agent post, plicara.ai agent research, wiz.io red-agent, marketer-workflow Claude Code/Codex posts, official Claude Code install doc). No fresh cross-surface discovery that opens a new durable branch → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 08:00 baseline). Top rows: simonw/llm (12,480★), miuuyy/codex-chatgpt-web (5,834★), snflkd/fluent-korean, anthropics/defending-code-reference-harness, piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the 08:00 baseline). Visible rows still the prior searches (VM웨어/가상화 디지털데일리 르포 오후4:48, 상포 테크놀로지, 펜시브/THE VC 기업정보, LG 노원 서비스센터, Nutanix 엔터프라이즈 AI 여정). No new 09-17 row surfaced since 08:00.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the 08:00 baseline). Top rows unchanged: 유튜브 조회수 뻥튀기, 시골마을 헬스장 브라질 여사친, 30일 안에 가슴, GTA/hacking Shorts, soccer/politics/crypto live rows. No fresh AI/agent/infra row this pass; no feed rotation.

## Filtering notes
- Threads `/threads` AND `/replies` tops both unchanged vs the same-day 08:00 (no posts between passes) → reinforcement → `raw_only`.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical (no rotation) → `변화 없음`.
- keyword_search = existing agent/Claude Code/Codex lanes (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-17 19:00 social pass. Clean same-day both-static no-new-signal: CK posted nothing between the 08:00 and 19:00 passes, so both Threads API surfaces are byte-for-byte the baseline rows, and all three CDP surfaces (GitHub/Google/YouTube) are byte-identical to the 08:00 snapshot. None opens a new durable branch. Route `raw_only`; no durable page or index change.
