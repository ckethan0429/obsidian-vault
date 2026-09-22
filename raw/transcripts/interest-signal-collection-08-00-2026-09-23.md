---
title: Interest-Signal Collection — 08:00 (2026-09-23, social)
type: raw-transcript
captured_at: 2026-09-23T08:00 KST
source_run: interest-signal-collection-08-00
route_hint: raw_only
route_confidence: high
route_reason: >
  Clean cross-day no-new-signal. Baseline = most-recent completed social
  transcript by mtime, interest-signal-collection-19-00-2026-09-22.md.
  Threads BOTH-STATIC: /threads top byte-identical to 19:00 baseline (CK
  posted nothing overnight) and /replies top byte-identical too (the two
  09-22 rows — spurs EN soccer reply + "ㅈㄹ ㅋㅋㅋㅋㅋ" noise — were already
  captured at 19:00-09-22, no newer rows). /mentions empty. keyword_search
  agent/Claude Code/Codex = all CK's own older posts (existing lanes) →
  reinforcement. GitHub stars len 2807, Google My Activity len 5822,
  YouTube subs len 9487 — ALL byte-length-identical to yesterday's baseline
  → 변화 없음. Durable action = this raw transcript + Honcho routing audit +
  log.md entry ONLY; index.md and all concept pages left unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — Interest-Signal Collection 08:00 (2026-09-23, social)

Source: Threads Graph API + live Chrome CDP (GitHub stars / Google My Activity / YouTube subscriptions)
Date: 2026-09-23
Account: `ethan13917` (씨케이, id 27173231028946699)

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0923.py`). Raw JSON cached `~/wiki/.cache/cdp_0923_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097626); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0923.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0923_0800.json`.
- **Baseline** = the most-recent completed social transcript by mtime, `interest-signal-collection-19-00-2026-09-22.md` (last night's afternoon social pass).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.

## Novelty summary
**Clean cross-day NO-NEW-SIGNAL / reinforcement-only.** Threads `/threads` AND `/replies` tops are both byte-identical to the 19:00-09-22 baseline (CK posted nothing overnight; the two 09-22 reply rows were already captured at 19:00). All three CDP surfaces byte-length-identical to the baseline → `변화 없음`. `/mentions` empty; keyword_search = CK's own older posts. Nothing durable emerged.

## 1) Threads (Graph API) — both-static, no new rows
### /threads — top UNCHANGED vs 19:00 baseline
- `18147575302481036` (2026-09-21T09:53:43 UTC / 18:53 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddi4lOPk576 — carry (author/content not recoverable without CDP).
- `17946827016320642` (2026-09-21T09:53:36 UTC / 18:53 KST, **TEXT_POST**) — https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — text `너 이제 어떡할거냐??` — carry, off-axis personal.
- Carry (unchanged): `18115198486994703` REPOST_FACADE (09-19) ; `17946461313280547` 육아용품 parenting (09-15) ; `18064330907521001` 그록봇/muse 챗봇 에이전트 vs 비즈니스 프로세스 (on-axis own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic (09-15).

### /replies — top UNCHANGED vs 19:00 baseline
- Top row `17902811490580209` (2026-09-22T06:49:40 UTC / 15:49 KST) — text `Why are you thinking he want to go to spurs? Everyone doesnt think like that` — EN soccer/Spurs reply, off-axis. Already captured at 19:00-09-22 → carry.
- `18366664894208788` (2026-09-22T00:19:33 UTC / 09:19 KST) — text `ㅈㄹ ㅋㅋㅋㅋㅋ` — noise. Already captured at 19:00-09-22 → carry.
- Carry (unchanged): `18153734854518735` "와... 갑자기 즙짜네..." (09-15) ; youtube shorts (09-15) ; "어그로 능력은 좋은데" (09-14) ; Macos reinstall Q (09-12).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every top hit is CK's own older posts (`username: ethan13917` on all rows — 그록봇/엑셀방송/청문회/iphone/soccer/육아 etc.). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (identical to 19:00 baseline). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to baseline). No new search row.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (identical to baseline). No feed rotation; no fresh AI/agent/infra row.

## Filtering notes
- Threads both-static: neither `/threads` nor `/replies` moved since the 19:00 baseline; CK made no posts overnight; the two 09-22 reply rows were already captured at 19:00.
- All CDP surface lengths byte-identical to the baseline → `변화 없음`.
- keyword_search = CK's own older posts (existing lanes) → reinforcement.

## Why this raw exists
Evidence store for the 2026-09-23 08:00 social pass. Clean cross-day no-new-signal: Threads both-static, all CDP surfaces byte-length-identical to the 19:00-09-22 baseline. Routed `raw_only`; `index.md` and all concept pages left unchanged.
