---
title: Interest signal collection — 19:00 social run (2026-09-21)
type: raw
created: 2026-09-21
captured_at: 2026-09-21T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp, repost-facade]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST), Monday. Idempotency clear: no
  interest-signal-collection-19-00-2026-09-21 raw existed before this run (only same-day 08:00 social +
  11:00 new-target present). Baselines: interest-signal-collection-08-00-2026-09-21.md (this morning,
  reinforcement + first capture of CK's own monetization pipeline) and interest-signal-collection-11-00-2026-09-21.md
  (new-target reinforcement-only). Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API
  (configured path); token refresh OK (expires_in 5097713), /v1.0/me OK (ethan13917, id 27173231028946699).
  RESULT: reinforcement-only at the durable layer. The ONLY movement vs the 08:00 baseline is Threads /threads:
  CK posted TWO new own rows today ~18:53 KST between the 08:00 and 19:00 passes — (1) 18147575302481036
  REPOST_FACADE (empty text, 2026-09-21T09:53:43Z, https://www.threads.com/@ethan13917/post/Ddi4lOPk576;
  public-HTML og:title/og:description recovery returned only JS shell — author NOT recoverable without CDP);
  (2) 17946827016320642 TEXT_POST "너 이제 어떡할거냐??" (2026-09-21T09:53:36Z,
  https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — short personal/argument post, off CK's AI/agent/infra axis).
  Both new rows are single-surface off-axis personal/social → raw_only. /replies top UNCHANGED vs 08:00
  (18153734854518735 "갑자기 즙짜네", 09-15). /mentions empty. keyword_search agent/Claude Code/Codex = CK's own
  older posts (existing lanes). GitHub stars len 2807, Google My Activity len 5822, YouTube subs len 9487 ALL
  byte-length-identical to the 08:00 baseline -> 변화 없음. kmong/gumroad/coupang own seller tabs also unchanged
  (already captured 08:00). Durable action = this raw transcript + Honcho routing audit + log.md entry ONLY;
  index.md and all concept pages left unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-21 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions, kmong/gumroad/coupang own seller tabs)
Source URL: see per-surface permalinks below
Date: 2026-09-21
Account: `ethan13917` (씨케이) / GitHub `ckchain91` / kmong `보송보송한첫눈5940` / gumroad `ethanverse784`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0921.py`). Raw JSON cached `~/wiki/.cache/cdp_0921_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097713); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0921.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0921_1900.json`.
- **Baselines** = same-day 08:00 social (`interest-signal-collection-08-00-2026-09-21.md`) + 11:00 new-target (`interest-signal-collection-11-00-2026-09-21.md`).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.

## Novelty summary
Reinforcement-only. The **only** movement since the 08:00 baseline is that CK posted two new own Threads rows (~18:53 KST): an **empty REPOST_FACADE** (author unrecoverable — public HTML is JS shell) and a **personal TEXT_POST "너 이제 어떡할거냐??"**. Both are single-surface, off CK's AI/agent/infra axis → `raw_only`. All CDP surfaces byte-length-identical to the morning baseline → `변화 없음`.

## 1) Threads (Graph API) — TWO new own rows, both off-axis
### /threads — top MOVED vs 08:00 baseline (CK posted between passes)
- **NEW** `18147575302481036` (2026-09-21T09:53:43 UTC / 18:53 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddi4lOPk576 — public-HTML og:title/og:description recovery returned only JS shell (~275KB, empty metas); **author/content not recoverable without CDP**. Single-surface repost → `raw_only`.
- **NEW** `17946827016320642` (2026-09-21T09:53:36 UTC / 18:53 KST, **TEXT_POST**) — https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — text: `너 이제 어떡할거냐??` — short personal/argument post, off-axis → `raw_only`.
- Carry (unchanged since 08:00 / 09-19): `18115198486994703` REPOST_FACADE (09-19) ; `17946461313280547` 육아용품 parenting (09-15) ; `18064330907521001` 그록봇/muse 챗봇 에이전트 vs 비즈니스 의사결정 (on-axis own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic ; `18111540608596140` "야름답다" personal ; `18084391358315488` REPOST_FACADE (empty, 09-11).

### /replies — top UNCHANGED vs 08:00 baseline
- Top row `18153734854518735` ("와... 갑자기 즙짜네...", 2026-09-15T02:10:19 UTC) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — byte-identical to the 08:00 baseline. No new reply since. Carry rows unchanged (youtube shorts 09-15, "어그로 능력은 좋은데" 09-14, Macos reinstall Q 09-12, 09-09 argument cluster).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every top hit is CK's own older posts (Anthropic managed-agents 원문, plicara.ai agent-skill research, wiz.io red-agent, marketer-workflow Claude Code/Codex posts, official install docs). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (identical to 08:00 baseline). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to baseline). No new search row.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (identical to baseline). No feed rotation; no fresh AI/agent/infra row.

## 5) CK's own seller surfaces (CDP) — unchanged since 08:00
kmong my-gigs (len 3316, 8 gigs 승인 전), gumroad GPU Server Build Guide PDF (len 2357), coupang partners (len 444, 실적 0). All already captured at 08:00; no change → `변화 없음`.

## Filtering notes
- Threads `/threads` moved because CK posted two new own rows between passes; both off-axis personal/social → `raw_only`, not a durable delta.
- REPOST_FACADE public-HTML recovery attempted once; og metas empty → recorded URL-only, content not recoverable without CDP.
- All CDP surface lengths byte-identical to 08:00 → `변화 없음`.
- keyword_search = CK's own older posts (existing lanes) → reinforcement.

## Why this raw exists
Evidence store for the 2026-09-21 19:00 social pass. Reinforcement-only; the only movement is two new off-axis own Threads posts. Routed `raw_only`; `index.md` and all concept pages left unchanged.
