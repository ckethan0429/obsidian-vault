---
title: Interest signal collection — 08:00 social run (2026-09-12)
type: raw
created: 2026-09-12
captured_at: 2026-09-12T08:01 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:01 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-12 raw existed before this run. Prior social baseline =
  2026-09-11 19:00 social (interest-signal-collection-19-00-2026-09-11.md); same-day-prior context =
  09-11 22:00 new-target + 09-11 23:00 refinement (whole-day reinforcement-only; the only durable
  delta, OpenAI first-party Agents API, already absorbed at the 11:00 ingest into
  concepts/managed-agents-practical-summary.md). Live Chrome CDP UP (Chrome/147.0.7727.55). Threads
  via official Graph API (configured path); token refresh OK (expires_in 5097647), /v1.0/me OK
  (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: CLEAN BOTH-STATIC NO-NEW-SIGNAL / reinforcement-only (route raw_only, whole run).
  (1) Threads: own /threads top row AND /replies top row BOTH byte-identical to the 19:00 baseline —
  /threads top still `18084391358315488` (REPOST_FACADE @alexwjang, 2026-09-11 04:09 UTC) and
  /replies top still `17965290324191703` (bare-YouTube-link reply, 2026-09-10 13:03 UTC). CK posted
  nothing between the 19:00 pass and now → genuinely unchanged, not a transport artifact.
  /mentions empty. keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts
  (username ethan13917 across all top rows) → reinforcement. (2) GitHub stars 94, UNCHANGED (len 2807
  byte-identical, top still simonw/llm) → 변화 없음. (3) Google My Activity len 5822 IDENTICAL to the
  baseline → 변화 없음. (4) YouTube subs len 9487 IDENTICAL to the baseline → 변화 없음. NONE opens a new
  durable branch. Durable action = this raw transcript + Honcho routing audit + log.md entry only.
  index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-12 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-12
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0912.py`). Raw JSON cached `~/wiki/.cache/cdp_0912_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097647); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0912.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0912_0800.json`.
- **Prior social baseline** = 2026-09-11 19:00 social (`interest-signal-collection-19-00-2026-09-11.md`); same-day-prior context = 09-11 22:00 new-target + 09-11 23:00 refinement (whole-day reinforcement-only; OpenAI Agents API already absorbed at 11:00). No `interest-signal-collection-08-00-2026-09-12` raw existed before this run → idempotency guard clear.

## Novelty summary
**Clean both-static no-new-signal / reinforcement-only.** Own `/threads` newest row AND `/replies` newest row are both byte-identical to the 09-11 19:00 baseline — CK posted nothing between passes. GitHub stars 94 byte-identical, Google My Activity byte-identical, YouTube subs byte-identical. keyword_search = CK's own older posts. No surface moved. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both surfaces static vs the 19:00 baseline → no new signal
### /threads — top row UNCHANGED since 19:00 → 변화 없음
- Top still `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text` (recovered author `@alexwjang` at the 19:00 pass, off CK's durable AI/agent/infra axis). No new own post since 19:00.
- Carry: `18177935422381992` civic/political rant (09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); `18279208189292714` / `17942765292339697` / `18112737395107287` / `18124066465845729` (조코딩 AI 엑셀방송 civic/social debate roots).
### /replies — top row UNCHANGED since 19:00 → 변화 없음
- Top still `17965290324191703` (09-10 13:03 UTC) bare-YouTube-link reply (https://youtu.be/TSdHFcNIvRw). Below: `17956685139218148` (09-09 15:54) + the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch already captured earlier. No new dated reply row.
### /mentions — empty
No mentions.
### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (every top row `username: ethan13917`): managed-agents 원문, agent-skill-languages, Snowflake red-agent, AI-agent 해킹공격 note, agent-security thread. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 19:00 baseline). Top row still `simonw/llm` (12,480★). Recent-starred list + language breakdown (24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell) unchanged.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the baseline). Top "오늘/오늘 이전" rows unchanged: 오후 4:48 검색 알림, 오후 1:46 디지털데일리 VMware-탈출 기사 + 상포 테크놀로지 검색, 오후 12:29 펜시브 / THE VC 기업정보 lookup. No new 09-11 evening / 09-12 row.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the baseline). AI/agent rows carry-over: IBM Technology `Why won't AI agents just follow the rules?`, 테크몽 `AI 안경`, Shane Hummus `How To Start A YouTube Channel With Claude AI in 2026`. No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: soccer/politics/crypto/health rows (흑우스토리, 마인드씨피알, 달수네라이브·새벽의축구, 훈수두는이코치/언더스탠딩/박병찬/머니인사이드, 불장단타왕).

## Filtering notes
- Threads both surfaces static vs 19:00 → no new own-post evidence.
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-12 08:00 social pass. Clean both-static no-new-signal / reinforcement-only: own `/threads` top and `/replies` top both byte-identical to the 09-11 19:00 baseline (CK posted nothing between passes); GitHub 94 unchanged; Google byte-identical; YouTube byte-identical; keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
