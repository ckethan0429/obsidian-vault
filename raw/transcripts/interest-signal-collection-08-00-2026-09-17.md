---
title: Interest signal collection — 08:00 social run (2026-09-17)
type: raw
created: 2026-09-17
captured_at: 2026-09-17T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-17 raw existed before this run. Baseline (by mtime of the
  most recent completed social transcript) = the 2026-09-16 19:00 social transcript
  (interest-signal-collection-19-00-2026-09-16.md, itself a clean same-day no-new-signal). Live Chrome
  CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5184000), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: clean cross-day both-static no-new-signal / reinforcement-only. (1) Threads: own /threads
  top `17946461313280547` (parenting advice, 09-15) AND /replies top `18153734854518735`
  ("갑자기 즙짜네", 09-15) BOTH byte-identical to the 09-16 19:00 baseline — CK made no posts between the
  09-16 19:00 and 09-17 08:00 passes. /mentions empty. keyword_search agent/Claude Code/Codex =
  reinforcement (own older posts). (2) GitHub stars 94, len 2807 byte-identical vs baseline → 변화 없음.
  (3) Google My Activity len 5822 byte-identical vs baseline → 변화 없음. (4) YouTube subs feed
  rotated with fresh "1–2분 전" rows (incl. IBM Technology "Why won't AI agents just follow the rules?"
  on-axis but single-surface feed rotation) → raw_only. NONE opens a new durable branch. Durable
  action = this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept
  pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-17 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-17
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0917.py`). Raw JSON cached `~/wiki/.cache/cdp_0917_0800.json`. GitHub/Google full-body lens byte-identical to the 09-16 19:00 baseline: GitHub 2807, Google 5822. YouTube 9487→feed rotated (fresh minute-old rows).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0917.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0917_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript `interest-signal-collection-19-00-2026-09-16.md` (2026-09-16 19:00, itself a clean same-day no-new-signal). No `interest-signal-collection-08-00-2026-09-17` raw existed before this run → idempotency guard clear.
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file` (no execute_code / heredoc / `-c` / pipe-to-interpreter).

## Novelty summary
**Clean cross-day both-static no-new-signal / reinforcement-only.** CK made no Threads posts between the 09-16 19:00 baseline and this 08:00 pass, so both Threads API surfaces are byte-for-byte the baseline rows: own `/threads` top `17946461313280547` (parenting advice, 09-15 19:48 KST) AND `/replies` top `18153734854518735` ("갑자기 즙짜네", 09-15) both unchanged. GitHub stars 94 (len 2807) / Google My Activity (len 5822) byte-identical vs baseline → 변화 없음. YouTube subs feed rotated (fresh minute-old rows, incl. an on-axis IBM agent video) but single-surface feed rotation → `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both tops unchanged vs 09-16 19:00 → reinforcement
### /threads — top unchanged since baseline
- Top row `17946461313280547` (2026-09-15T10:48:56 UTC / 19:48 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdTiIXJk-5T — "육아용품 딴거 몰라도 오래쓰는건 좋은거 써라..." (off-axis personal/parenting, carried).
- Carry (unchanged): `18064330907521001` (그록봇/muse 챗봇 에이전트 vs 비즈니스 프로세스는 아직 메일 의사결정 — on-axis agent-adoption-vs-reality own post, 09-15); `18111305732518146` 법무부장관 청문회 civic; `18111540608596140` "야름답다" personal; `18084391358315488` REPOST_FACADE (empty); `18177935422381992` 한동훈/국무의원 civic; `18130629235679697` iPhone-UX opinion; 조코딩 엑셀방송 논쟁 cluster (09-09 carry); `18102024221624249` REPOST_FACADE (empty).

### /replies — top unchanged vs baseline
- Top row `18153734854518735` ("와... 갑자기 즙짜네...", 2026-09-15T02:10:19 UTC) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — byte-identical to the baseline. No new reply since the 09-16 19:00 pass. Carry rows: youtube shorts link reply (09-15), "하드웨어와 소프트웨어 결합이 젤 힘듭니다" (09-14 on-axis), Macos reinstall Q (09-12), 조코딩 논쟁 reply cluster (09-09).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries return rows top-hitting CK's OWN content (Managed Agents thread + Claude Code / Codex terminal-agent tutorial series). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the baseline). Top rows: simonw/llm (12,480★), miuuyy/codex-chatgpt-web (5,834★), snflkd/fluent-korean (1,204★), anthropics/defending-code-reference-harness (7,419★), piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to baseline). Visible rows still the prior searches (VM웨어/가상화 디지털데일리 르포, 상포 테크놀로지, 펜시브/THE VC 기업정보, Nutanix agentic/enterprise/sovereign AI, LG 노원 서비스센터, Codex SDK / gpt sdk / chatgpt docs 09-07) — no new 09-17 row surfaced yet.

## 4) YouTube subscriptions (CDP) — feed rotated → raw_only (single-surface)
Hydrated (`구독 - YouTube`, len 9487). Feed rotated with fresh minute-old rows since the baseline. On-axis row kept: **IBM Technology — "Why won't AI agents just follow the rules?"** (2분 전, agent-governance). Off-axis noise kept in raw, excluded from report: 유튜브 조회수 뻥튀기, 헬스/브라질 여사친, GTA body-cam, 알트코인 단타, 깊은 수면 치트키, soccer/politics/crypto/live/Shorts rows. Single-surface feed rotation → not a new durable branch.

## Filtering notes
- Threads `/threads` AND `/replies` tops both unchanged vs 09-16 19:00 (no posts between passes) → reinforcement → `raw_only`.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube feed rotated but single-surface (one on-axis IBM agent video amid noise) → `raw_only`, no durable branch.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-17 08:00 social pass. Clean cross-day both-static no-new-signal: CK posted nothing between the 09-16 19:00 baseline and this pass, so both Threads API surfaces are byte-for-byte the baseline rows, GitHub/Google byte-identical, and YouTube only feed-rotated. None opens a new durable branch. Route `raw_only`; no durable page or index change.
