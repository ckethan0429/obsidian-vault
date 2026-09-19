---
title: Interest signal collection — 19:00 social run (2026-09-19)
type: raw
created: 2026-09-19
captured_at: 2026-09-19T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-19 raw existed before this run (same-day 08:00 social +
  11:00 new-target present). Baseline = same-day 08:00 social transcript
  (interest-signal-collection-08-00-2026-09-19.md, clean cross-day both-static no-new-signal) plus the
  11:00 new-target pass (reinforcement-only, no new durable delta). Live Chrome CDP UP (Chrome/147.0.7727.55).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5184000), /v1.0/me OK
  (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via stdlib
  raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: reinforcement-only. ONE genuinely-new row since the 08:00 baseline: own /threads top
  `18115198486994703` REPOST_FACADE (2026-09-19T02:29:14Z / 11:29 KST, permalink
  https://www.threads.com/@ethan13917/post/Ddc8H8-E-sI) — empty text; public-HTML recovery returned a JS
  shell with empty og:title/og:description, so the reposted author/content is NOT recoverable without CDP.
  Single-surface off-axis repost with no recoverable content -> raw_only (URL + timestamp preserved as
  chronology evidence). /replies top `18153734854518735` ("갑자기 즙짜네", 09-15) UNCHANGED vs 08:00.
  /mentions empty. keyword_search agent/Claude Code/Codex = existing lanes (all CK's own older posts) ->
  reinforcement. GitHub stars 94 (len 2807), Google My Activity (len 5822), YouTube subs (len 9487) all
  length-identical to the 08:00/baseline snapshot -> 변화 없음 on every CDP surface. Durable action = this
  raw transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-19 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-19
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0919.py`). Raw JSON cached `~/wiki/.cache/cdp_0919_1900.json`. GitHub len 2807 / Google len 5822 / YouTube len 9487 — all three length-identical to the 08:00/baseline snapshot.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0919.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0919_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-09-19.md` (clean cross-day both-static no-new-signal) + `interest-signal-collection-11-00-2026-09-19.md` (new-target, reinforcement-only).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.

## Novelty summary
**Reinforcement-only.** One genuinely-new Threads row since the 08:00 baseline — a REPOST_FACADE with empty text that CK reposted at 09-19 11:29 KST. Public-HTML recovery returned only a JS shell (empty `og:title`/`og:description`), so the reposted author/content cannot be recovered without CDP; preserved as URL + timestamp chronology evidence, routed `raw_only`. Every other surface unchanged: `/replies` top unchanged since 08:00, `/mentions` empty, keyword_search = CK's own older posts (existing lanes), and all three CDP surfaces (GitHub/Google/YouTube) length-identical to the 08:00/baseline snapshot → 변화 없음. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)
### /threads — ONE new row (REPOST_FACADE, unrecoverable) since 08:00
- **NEW** top row `18115198486994703` (2026-09-19T02:29:14 UTC / 11:29 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddc8H8-E-sI — public-HTML recovery = JS shell, `og:title`/`og:description` both empty → reposted author/content **not recoverable without CDP**. Single-surface off-axis repost → `raw_only` chronology evidence.
- Carry (unchanged vs 08:00): `17946461313280547` (육아용품, parenting, 09-15) ; `18064330907521001` (그록봇/muse 챗봇 에이전트 vs 비즈니스는 아직 메일 의사결정 — on-axis agent-adoption-vs-reality own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic ; `18111540608596140` "야름답다" personal ; `18084391358315488` REPOST_FACADE (empty, 09-11).

### /replies — top unchanged vs 08:00 baseline
- Top row `18153734854518735` ("와... 갑자기 즙짜네...", 2026-09-15T02:10:19 UTC) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — byte-identical to baseline. No new reply since the 08:00 pass. Carry rows: youtube shorts reply (09-15), "하드웨어와 소프트웨어 결합이 젤 힘듭니다" (09-14 on-axis), Macos reinstall Q (09-12), 조코딩 논쟁 reply cluster (09-09).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every TOP hit is CK's own older posts (Anthropic managed-agents 원문, plicara.ai agent-skill research, wiz.io red-agent, marketer-workflow Claude Code/Codex posts, official Claude Code/Codex install docs). No fresh external discovery that opens a new durable branch → reinforcement.

## 2) GitHub stars (CDP) — 94, len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, length-identical to the 08:00/baseline snapshot). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (length-identical to baseline). No new search row surfaced.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (length-identical to baseline). No fresh AI/agent/infra row; no feed rotation.

## Filtering notes
- Threads `/threads` gained one new REPOST_FACADE (empty, unrecoverable) → `raw_only`; `/replies` unchanged → reinforcement.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical (no rotation) → `변화 없음`.
- keyword_search = CK's own older posts (existing agent/Claude Code/Codex lanes) → reinforcement.

## Why this raw exists
Evidence store for the 2026-09-19 19:00 social pass. Reinforcement-only: the sole new signal is a single empty REPOST_FACADE (content unrecoverable without CDP), and every other Threads and CDP surface is unchanged/length-identical vs the same-day 08:00 baseline. None opens a new durable branch. Route `raw_only`; no durable page or index change.
