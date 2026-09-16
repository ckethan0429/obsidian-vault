---
title: Interest signal collection — 19:00 social run (2026-09-16)
type: raw
created: 2026-09-16
captured_at: 2026-09-16T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-16 raw existed before this run (same-day 08:00 social +
  11:00 new-target present). Baseline = same-day 08:00 social transcript
  (interest-signal-collection-08-00-2026-09-16.md, near cross-day no-new-signal) + the 11:00
  new-target run (NVIDIA Vera Rubin AI Infra Summit append_existing already absorbed at ingest).
  Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5144354), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page
  tabs. RESULT: clean same-day no-new-signal / reinforcement-only. (1) Threads: own /threads top
  `17946461313280547` (parenting advice) AND /replies top `18153734854518735` ("갑자기 즙짜네")
  BOTH byte-identical to the 08:00 baseline — CK made no posts between the 08:00 and 19:00 passes, so
  the API surfaces are byte-for-byte the 08:00 sibling's rows. /mentions empty. keyword_search
  agent/Claude Code/Codex all top-hit CK's OWN older posts (Managed Agents thread + Claude Code/Codex
  tutorial series) → reinforcement. (2) GitHub stars 94, len 2807 byte-identical vs 08:00 → 변화 없음.
  (3) Google My Activity len 5822 byte-identical vs 08:00 → 변화 없음. (4) YouTube subs len 9487
  byte-identical vs 08:00 → 변화 없음. NONE opens a new durable branch. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-16 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-16
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0916.py`). Raw JSON cached `~/wiki/.cache/cdp_0916_1900.json`. GitHub/Google/YouTube full-body lens byte-identical to the 09-16 08:00 baseline: GitHub 2807, Google 5822, YouTube 9487.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144354); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0916.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0916_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-09-16.md` (near cross-day no-new-signal) + the 11:00 new-target run `interest-signal-collection-11-00-2026-09-16.md` (NVIDIA Vera Rubin AI Infra Summit `append_existing` already absorbed at ingest into `nvidia-vera-rubin.md`). No `interest-signal-collection-19-00-2026-09-16` raw existed before this run → idempotency guard clear.

## Novelty summary
**Clean same-day no-new-signal / reinforcement-only.** CK made no posts between the 08:00 and 19:00 passes, so both Threads surfaces are byte-for-byte the 08:00 sibling's rows: own `/threads` top `17946461313280547` (parenting advice, 09-15 19:48 KST) AND `/replies` top `18153734854518735` ("갑자기 즙짜네", 09-15) both unchanged. GitHub stars 94 / Google My Activity / YouTube subs all byte-identical vs 08:00 (len 2807 / 5822 / 9487) → 변화 없음. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both tops unchanged vs 08:00 → reinforcement
### /threads — top unchanged since 08:00 baseline
- Top row `17946461313280547` (2026-09-15T10:48:56 UTC / 19:48 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdTiIXJk-5T — "육아용품 딴거 몰라도 오래쓰는건 좋은거 써라..." (off-axis personal/parenting, carried from 08:00).
- Carry (unchanged): `18064330907521001` (agent-adoption-vs-reality on-axis own post, reinforced 09-15 19:00); `18111305732518146` 법무부장관 청문회 civic; `18111540608596140` "야름답다" personal; `18084391358315488` REPOST_FACADE (empty); `18177935422381992` 한동훈/국무의원 civic; `18130629235679697` iPhone-UX opinion; 조코딩 엑셀방송 논쟁 cluster (09-09 carry).

### /replies — top unchanged vs 08:00
- Top row `18153734854518735` ("갑자기 즙짜네", 2026-09-15T02:10:19 UTC) byte-identical to 08:00 baseline. No new reply since 08:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN content: the Managed Agents thread (agent) and the Claude Code / Codex terminal-agent tutorial series (Claude Code, Codex). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 08:00 baseline). Top rows: simonw/llm (12,480★), miuuyy/codex-chatgpt-web (5,834★), snflkd/fluent-korean (1,204★), anthropics/defending-code-reference-harness (7,419★), piyushsachdeva/CKA-2024. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to 08:00 baseline). Visible rows still the prior searches (VM웨어/가상화 디지털데일리 르포, 상포 테크놀로지, 펜시브 기업정보 THE VC, Nutanix agentic/enterprise AI, LG 노원 서비스센터) — no new 09-16 row surfaced yet.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to 08:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 유튜브 조회수 뻥튀기, 헬스/브라질 여사친, soccer/politics/crypto/live/Shorts rows.

## Filtering notes
- Threads `/threads` AND `/replies` tops both unchanged vs 08:00 (no posts between passes) → reinforcement → `raw_only`.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-16 19:00 social pass. Clean same-day no-new-signal: CK posted nothing between 08:00 and 19:00, so both Threads API surfaces are byte-for-byte the 08:00 rows, and GitHub/Google/YouTube are byte-identical to the 08:00 baseline. None opens a new durable branch. Route `raw_only`; no durable page or index change.
