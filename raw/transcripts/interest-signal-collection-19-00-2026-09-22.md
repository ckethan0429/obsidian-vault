---
title: Interest signal collection — 19:00 social run (2026-09-22)
type: raw
created: 2026-09-22
captured_at: 2026-09-22T19:03 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp, reinforcement, no-new-signal]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:03 KST), Tuesday. Idempotency clear: no
  interest-signal-collection-19-00-2026-09-22 raw existed before this run. Baselines = same-day
  08:00 social (interest-signal-collection-08-00-2026-09-22.md, clean cross-day no-new-signal) +
  11:00 new-target (interest-signal-collection-11-00-2026-09-22.md, reinforcement-only). Live Chrome
  CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5144486), /v1.0/me OK (ethan13917, id 27173231028946699).
  RESULT: REINFORCEMENT-ONLY / no durable signal. Threads /threads top TWO rows byte-identical to the
  08:00 baseline (18147575302481036 REPOST_FACADE + 17946827016320642 TEXT_POST "너 이제 어떡할거냐??",
  both 2026-09-21 ~18:53 KST). /replies gained TWO genuinely-new 09-22 rows since the 08:00 baseline —
  17902811490580209 ("Why are you thinking he want to go to spurs? ...", 09-22T06:49 UTC, EN soccer/Spurs
  reply, off-axis) + 18366664894208788 ("ㅈㄹ ㅋㅋㅋㅋㅋ", 09-22T00:19 UTC, pure noise) — both single-surface
  off-axis social chatter, not on CK's AI/agent/infra axis. /mentions empty. keyword_search agent/Claude
  Code/Codex = all CK's own older posts (existing lanes) -> reinforcement. GitHub stars len 2807, Google
  My Activity len 5822, YouTube subs len 9487 -- ALL byte-length-identical to the 08:00 baseline -> 변화 없음.
  Durable action = this raw transcript + Honcho routing audit + log.md entry ONLY; index.md and all
  concept pages left unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-22 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-22
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via `/tmp/cdp_read_1900_0922.py`. Raw JSON cached `~/wiki/.cache/cdp_0922_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144486); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0922.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0922_1900.json`.
- **Baselines** = same-day 08:00 social (`interest-signal-collection-08-00-2026-09-22.md`, clean cross-day no-new-signal) + 11:00 new-target (`interest-signal-collection-11-00-2026-09-22.md`, reinforcement-only).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts.

## Novelty summary
**REINFORCEMENT-ONLY / no durable signal.** Threads `/threads` top byte-identical to the 08:00 baseline (CK posted nothing new). `/replies` moved with two genuinely-new 09-22 rows, but both are off-axis social chatter (EN soccer/Spurs reply + a noise line). All three CDP surfaces are byte-length-identical to the 08:00 baseline → `변화 없음`. Nothing durable emerged.

## 1) Threads (Graph API)
### /threads — top UNCHANGED vs 08:00 baseline
- `18147575302481036` (2026-09-21T09:53:43 UTC / 18:53 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddi4lOPk576 — carry (author/content not recoverable without CDP).
- `17946827016320642` (2026-09-21T09:53:36 UTC / 18:53 KST, **TEXT_POST**) — https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — text `너 이제 어떡할거냐??` — carry, off-axis personal.
- Carry (unchanged): `18115198486994703` REPOST_FACADE (09-19) ; `17946461313280547` 육아용품 parenting (09-15) ; `18064330907521001` 그록봇/muse 챗봇 에이전트 vs 비즈니스 프로세스 (on-axis own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic (09-15).

### /replies — TWO NEW 09-22 rows since 08:00 (both off-axis)
- **NEW** `17902811490580209` (2026-09-22T06:49:40 UTC / 15:49 KST) — text `Why are you thinking he want to go to spurs? Every...` — EN soccer/Spurs reply, off CK's AI/agent/infra axis → `raw_only` off-axis social chatter.
- **NEW** `18366664894208788` (2026-09-22T00:19:33 UTC / 09:19 KST) — text `ㅈㄹ ㅋㅋㅋㅋㅋ` — pure noise → `raw_only`.
- Carry (unchanged): `18153734854518735` ("와... 갑자기 즙짜네...", 09-15) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv ; youtube shorts 09-15 ; older rows.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every top hit is CK's own older posts (Anthropic managed-agents 원문, agent-skill research, red-agent, marketer-workflow Claude Code/Codex posts). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (identical to 08:00 baseline). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to baseline). No new search row.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (identical to baseline). No feed rotation; no fresh AI/agent/infra row.

## Filtering notes
- Threads `/threads` static; `/replies` moved but only with off-axis social chatter (soccer + noise).
- All CDP surface lengths byte-identical to 08:00 → `변화 없음`.
- keyword_search = CK's own older posts (existing lanes) → reinforcement.

## Why this raw exists
Evidence store for the 2026-09-22 19:00 social pass. Reinforcement-only: `/threads` static, two new but off-axis `/replies` rows, all CDP surfaces byte-length-identical to the 08:00 baseline. Routed `raw_only`; `index.md` and all concept pages left unchanged.
