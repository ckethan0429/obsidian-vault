---
title: Interest-Signal Collection — 19:00 (2026-09-23, social)
type: raw-transcript
captured_at: 2026-09-23T19:01 KST
source_run: interest-signal-collection-19-00
route_hint: raw_only
route_confidence: high
route_reason: >
  Reinforcement-only / no durable signal. Baselines = same-day 08:00 social
  (clean cross-day no-new-signal) + 11:00 new-target (one append_existing:
  dual-lab price war, already absorbed at ingest). Threads /threads top
  byte-identical to the 08:00 baseline (CK posted nothing since). /replies
  moved with ONE genuinely-new 09-23 row (`ㅉ?`, 10:39 KST) — single-char
  off-axis noise. /mentions empty. keyword_search agent/Claude Code/Codex =
  all CK's own older posts (existing lanes) → reinforcement. GitHub stars
  len 2807, Google My Activity len 5822, YouTube subs len 9487 — ALL
  byte-length-identical to the 08:00 baseline → 변화 없음. Durable action =
  this raw transcript + Honcho routing audit + log.md entry ONLY; index.md
  and all concept pages left unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — Interest-Signal Collection 19:00 (2026-09-23, social)

Source: Threads Graph API + live Chrome CDP (GitHub stars / Google My Activity / YouTube subscriptions)
Date: 2026-09-23
Account: `ethan13917` (씨케이, id 27173231028946699)

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0923.py`). Raw JSON cached `~/wiki/.cache/cdp_0923_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5171355); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0923.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0923_1900.json`.
- **Baselines** = same-day 08:00 social (`interest-signal-collection-08-00-2026-09-23.md`, clean cross-day no-new-signal) + 11:00 new-target (`interest-signal-collection-11-00-2026-09-23.md`, one append_existing = dual-lab price war, absorbed at ingest).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.

## Novelty summary
**Reinforcement-only / no durable signal.** Threads `/threads` top byte-identical to the 08:00 baseline (CK posted nothing new since morning). `/replies` moved with ONE genuinely-new 09-23 row (`ㅉ?`, single-char off-axis noise). All three CDP surfaces byte-length-identical to the 08:00 baseline → `변화 없음`. `/mentions` empty; keyword_search = CK's own older posts. Nothing durable emerged.

## 1) Threads (Graph API)
### /threads — top UNCHANGED vs 08:00 baseline
- `18147575302481036` (2026-09-21T09:53:43 UTC / 18:53 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddi4lOPk576 — carry (author/content not recoverable without CDP).
- `17946827016320642` (2026-09-21T09:53:36 UTC / 18:53 KST, **TEXT_POST**) — https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — text `너 이제 어떡할거냐??` — carry, off-axis personal.
- Carry (unchanged): `18115198486994703` REPOST_FACADE (09-19) ; `17946461313280547` 육아용품 parenting (09-15) ; `18064330907521001` 그록봇/muse 챗봇 에이전트 vs 비즈니스 프로세스 (on-axis own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic (09-15).

### /replies — ONE new row (off-axis noise)
- **NEW** `18135183697723523` (2026-09-23T01:39:59 UTC / 10:39 KST) — text `ㅉ?` — single-char noise, off-axis. Not present at 08:00.
- Carry (unchanged): `17902811490580209` (09-22, EN soccer/Spurs reply) ; `18366664894208788` (09-22, `ㅈㄹ ㅋㅋㅋㅋㅋ` noise) ; `18153734854518735` "와... 갑자기 즙짜네..." (09-15).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every hit is CK's own older posts (all 46 rows in the cached JSON carry `username: ethan13917`). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (identical to 08:00 baseline). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to baseline). No new search row.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (identical to baseline). No feed rotation; no fresh AI/agent/infra row.

## Filtering notes
- Threads `/threads` static since 08:00; `/replies` gained one single-char noise row (`ㅉ?`), off-axis → `raw_only`.
- All CDP surface lengths byte-identical to the 08:00 baseline → `변화 없음`.
- keyword_search = CK's own older posts (existing lanes) → reinforcement.

## Why this raw exists
Evidence store for the 2026-09-23 19:00 social pass. Reinforcement-only: Threads `/threads` static, one off-axis noise reply, all CDP surfaces byte-length-identical to the 08:00 baseline. Routed `raw_only`; `index.md` and all concept pages left unchanged.
