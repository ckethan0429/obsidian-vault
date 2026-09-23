---
title: Interest-Signal Collection — 08:00 (2026-09-24, social)
type: raw-transcript
captured_at: 2026-09-24T08:05 KST
source_run: interest-signal-collection-08-00
route_hint: raw_only
route_confidence: high
route_reason: >
  Clean cross-day NO-NEW-SIGNAL / reinforcement-only. No same-day
  interest-signal-collection-08-00-2026-09-24 raw existed before this run
  (idempotency clear). Baseline = the most-recent-by-mtime completed social
  transcript interest-signal-collection-22-00-2026-09-23.md (new-target,
  reinforcement-only) + the 09-23 19:00 + 08:00 social transcripts +
  concepts/ai-infra-operating-economics.md + concepts/nvidia-vera-rubin.md +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md.
  Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55); read hydrated
  type==page tabs via stdlib raw-socket WS CDP client (/tmp/cdp_read_0800_0924.py),
  raw JSON cached ~/wiki/.cache/cdp_0924_0800.json. Threads collected via
  official Graph API (configured path), NOT CDP: token refresh OK
  (expires_in 5124591), /v1.0/me OK (ethan13917, id 27173231028946699);
  collector /tmp/th_collect_0800_0924.py (stdlib urllib), raw JSON cached
  ~/wiki/.cache/threads_0924_0800.json.
  RESULT: Threads /threads top byte-identical to the baseline (REPOST_FACADE
  09-21 + `너 이제 어떡할거냐??` 09-21 TEXT_POST — CK posted nothing new); /replies
  top byte-identical (`ㅉ?` 09-23 10:39 KST, already captured at 09-23 19:00 —
  no new reply since); /mentions empty; keyword_search agent/Claude Code/Codex =
  all CK's OWN older posts (existing lanes, reinforcement). All three CDP
  surfaces byte-length-identical to the baseline: GitHub stars len 2807,
  Google My Activity len 5822, YouTube subs len 9487 -> 변화 없음.
  Durable action = this raw transcript + a Honcho routing audit + a log.md
  entry ONLY; index.md and all concept pages left unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — Interest-Signal Collection 08:00 (2026-09-24, social)

Source: Threads Graph API + live Chrome CDP (GitHub stars / Google My Activity / YouTube subscriptions)
Date: 2026-09-24
Account: `ethan13917` (씨케이, id 27173231028946699)

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0924.py`); multiple github/youtube tabs present, picked the longest useful body per surface. Raw JSON cached `~/wiki/.cache/cdp_0924_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5124591); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0924.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0924_0800.json`.
- **Baseline** = `interest-signal-collection-22-00-2026-09-23.md` (most-recent-by-mtime completed transcript; new-target, reinforcement-only) + `interest-signal-collection-19-00-2026-09-23.md` + `interest-signal-collection-08-00-2026-09-23.md` (social).
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.

## Novelty summary
**Clean cross-day NO-NEW-SIGNAL / reinforcement-only.** Threads `/threads` AND `/replies` tops are both byte-identical to the 09-23 baseline (CK posted nothing new overnight; the `ㅉ?` reply row was already captured at 09-23 19:00). All three CDP surfaces byte-length-identical to the baseline → `변화 없음`. `/mentions` empty; keyword_search = CK's own older posts. Nothing durable emerged.

## 1) Threads (Graph API)
### /threads — top UNCHANGED vs baseline
- `18147575302481036` (2026-09-21T09:53:43 UTC, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddi4lOPk576 — carry (author/content not recoverable without CDP).
- `17946827016320642` (2026-09-21T09:53:36 UTC, **TEXT_POST**) — text `너 이제 어떡할거냐??` — https://www.threads.com/@ethan13917/post/Ddi4kYnE50V — carry, off-axis personal.
- Carry (unchanged): `18115198486994703` REPOST_FACADE (09-19) ; `17946461313280547` 육아용품 parenting (09-15) ; `18064330907521001` 그록봇/muse 챗봇 에이전트 vs 비즈니스 프로세스 (on-axis own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic (09-15) ; `18111540608596140` 야름답다 신조어 (09-15) ; `18084391358315488` REPOST_FACADE (09-11).

### /replies — top UNCHANGED vs baseline
- `18135183697723523` (2026-09-23T01:39:59 UTC / 10:39 KST) — text `ㅉ?` — single-char noise, off-axis. Already captured at 09-23 19:00; no new reply since.
- Carry (unchanged): `17902811490580209` (09-22, EN soccer/Spurs reply) ; `18366664894208788` (09-22, `ㅈㄹ ㅋㅋㅋㅋㅋ` noise) ; `18153734854518735` "와... 갑자기 즙짜네..." (09-15) ; parenting/hardware/macos replies further down.

### /mentions — empty
- 0 rows.

### keyword_search — own older posts (reinforcement)
- `agent` / `Claude Code` / `Codex`: all hits are `@ethan13917`'s OWN older posts (Managed Agents 08-29, agent-skill-languages, red-agent-snowflake security 08-18, the 08-30 Claude Code/Codex install tutorial series, 09-02/09-03 marketing/sales automation). Existing lanes → reinforcement, not new discovery.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (identical to the 09-23 baseline). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to baseline). No new search row.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (identical to baseline). No feed rotation; no fresh AI/agent/infra row.

## Filtering notes
- Threads keyword hits are CK's own historical posts, not external signal — excluded from novelty per the keyword_search own-post caveat.
- No sports/entertainment noise beyond the already-carried reply rows.

## Why this raw exists
Evidence store for the 2026-09-24 08:00 social pass. Clean cross-day no-new-signal: Threads both-static, all CDP surfaces byte-length-identical to the 09-23 baseline. Routed `raw_only`; `index.md` and all concept pages left unchanged.
