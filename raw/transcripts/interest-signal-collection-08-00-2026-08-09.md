# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube)
Source URL: multiple (per surface below)
Date: 2026-08-09 (captured ~08:02 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 social pass. Idempotency clear: no interest-signal-collection-08-00-2026-08-09 raw existed
  before this run. Baseline = prior social transcript by mtime = 08-08 19:00 (reinforcement-only).
  Threads own `/threads` gained ONE new row since baseline: `DbyCIZXk9ee` (2026-08-08 14:02 UTC =
  23:02 KST) REPOST_FACADE, empty text. Public og:title recovered the reposted author =
  `@kind_zino_tax` (손진호, "친(절)한 세무사" = tax accountant); og:description empty (text not
  recoverable). Off CK's AI/agent/infra axis → single-surface off-axis feed rotation → raw_only.
  `/replies` top STATIC vs baseline (`Dbw8oWGE-2_` still top). `/mentions` empty; keyword_search
  100% own posts. Google My Activity: freshest still 08-07 (오픈AI alert + Outlook), NO new
  08-08/08-09 rows → 변화 없음. YouTube subscriptions blank nav-only shell (len 17, logged out);
  GitHub `/stars` login redirect (logged out) — access facts, not 변화 없음. Reinforcement-only.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-09.md` existed → collection proceeded.
- Baseline: prior social transcript by mtime = `interest-signal-collection-19-00-2026-08-08.md` (reinforcement-only, both-static except one own reply).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: YouTube `feed/subscriptions` (title "구독 - YouTube" but blank nav-only shell body, len 17 → logged out), Google My Activity (hydrated, logged in), GitHub `/stars` (login redirect, logged out).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0809.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5184000); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-09-0800/` (disposable). CDP reads via `/tmp/cdp_read_0800_0809.py` (stdlib raw-socket WebSocket), cached to `~/wiki/.cache/cdp-2026-08-09-0800/`.

## Novelty summary
**Reinforcement-only.** One genuinely-new item: Threads own `/threads` top `DbyCIZXk9ee` (08-08 23:02 KST) REPOST_FACADE, reposted author `@kind_zino_tax` (tax accountant) — off-axis, single-surface → `raw_only`. `/replies` top static. `/mentions` empty. keyword_search all own posts. Google My Activity no new rows (변화 없음). YouTube + GitHub logged-out shells (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — ONE new REPOST_FACADE since baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **NEW top:** `[2026-08-08 14:02:59 UTC = 23:02 KST]` REPOST_FACADE — https://www.threads.com/@ethan13917/post/DbyCIZXk9ee
  > (empty text — repost facade)
  - Public og:title recovery: `친(절)한 세무사 | 손진호 (@kind_zino_tax) on Threads` → reposted author `@kind_zino_tax` (손진호, tax accountant). og:description empty (post text not recoverable without CDP). Off CK's AI/agent/infra axis → single-surface off-axis feed rotation → `raw_only`.
- Carry-over unchanged: `DbnNVXGE6cn` (08-04 원가/단가 TEXT_POST), `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-08 03:55:41 UTC = 12:55 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Dbw8oWGE-2_
  > 그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다
  - Already captured in the 19:00 baseline. Reinforcement.
- Carry-over unchanged: `DbsEtzrE39y` (08-06), `DbpAXVuk_D_` / `Dbo9V23E01v` (08-05), then the 08-04 원가/단가 reply chain (`DbnNcN9E0fH` 출처 / `DbnNab6ky63` 5/5 / `DbnNZknEyt9` 4/5 / `DbnNYoik1Yw` 3/5). Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1). Every hit is `@ethan13917`'s own post (managed-agents, agent-security, 원가/단가, investing). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Freshest section still **오늘 = 08-07**, identical to the 19:00 baseline: `[08-07 18:48]` 오픈AI topic-alert notification; `[08-07 12:16-12:17]` outlook 검색 → Outlook 방문.
- **어제 (08-06)** unchanged: 22:38 CUDA/날씨 alert, 21:12 Google 검색, 11:26 한컴독스/한글 웹, 10:25 hermes → Hermes Agent 한국어 문서.
- **08-05** unchanged: 23:14 NASDAQ:TSLA/클로드/쿠버네티스/날씨 alert, 15:38-39 durable 뜻 / Durable Agent Runtime, 13:11 양도소득세/홈택스, 10:09 linkedin.
- No 08-08/08-09 rows yet. **변화 없음** vs the 19:00 baseline. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): target hydrated with correct title ("구독 - YouTube") but body a blank nav-only shell (`innerText` len 17: 홈/Shorts/구독/내 페이지), logged out.
- **GitHub** (`/stars`): target redirected to `github.com/login?return_to=/stars`, logged out.

## Filtering notes
- Only the new REPOST_FACADE row is genuinely new; it is off-axis (tax accountant repost) → not durable.
- All other Threads rows, all keyword_search hits, and all Google My Activity rows are carry-over from prior runs.

## Why this raw exists
This file is the evidence store for the 2026-08-09 08:00 social collection pass. Reinforcement-only; durable action limited to Honcho/log audit.
