# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube, GitHub)
Source URL: multiple (per surface below)
Date: 2026-08-09 (captured ~19:02 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 social pass, on time. Idempotency clear: no interest-signal-collection-19-00-2026-08-09
  raw existed before this run. Baselines = same-day 08:00 social transcript (reinforcement-only) +
  11:00 new-target transcript (reinforcement-only). Threads own `/threads` gained ONE new row since
  the 08:00 baseline: `DbzAP2CE_r7` (2026-08-08 23:05 UTC = 08-09 08:05 KST) REPOST_FACADE. Public
  og:title/og:description recovered the reposted author = `@bam.bam_2` (밤밤ㅣ커뮤니티 기획자, community
  planner) with a networking/self-improvement motivational post ("제발 새로운 사람을 주기적으로 만나세요"). Off
  CK's AI/agent/infra axis → single-surface off-axis feed rotation → raw_only. The 08:00 new row
  `DbyCIZXk9ee` (@kind_zino_tax, tax accountant) is now carry-over. `/replies` top STATIC vs 08:00
  (`Dbw8oWGE-2_` still top). `/mentions` empty; keyword_search 100% own posts. Google My Activity:
  freshest still 08-07 (오픈AI alert 6:48 + Outlook 12:16-17), NO new rows → 변화 없음. YouTube
  subscriptions blank nav-only shell (len 17, logged out); GitHub `/stars` login redirect (logged out)
  — access facts, not 변화 없음. Reinforcement-only.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-09.md` existed → collection proceeded.
- Baselines: same-day `interest-signal-collection-08-00-2026-08-09.md` (social, reinforcement-only) + `interest-signal-collection-11-00-2026-08-09.md` (new-target, reinforcement-only).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: YouTube `feed/subscriptions` (title "구독 - YouTube" but blank nav-only shell body, len 17 → logged out), Google My Activity (hydrated, logged in), GitHub `/stars` (login redirect, logged out) — same state as 08:00.
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_1900_0809.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5144365); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-09-1900/` (disposable). CDP reads via `/tmp/cdp_read_1900_0809.py` (stdlib raw-socket WebSocket), cached to `~/wiki/.cache/cdp-2026-08-09-1900/`.

## Novelty summary
**Reinforcement-only.** One genuinely-new item since the 08:00 baseline: Threads own `/threads` top `DbzAP2CE_r7` (08-09 08:05 KST) REPOST_FACADE, reposted author `@bam.bam_2` (community planner, networking/self-improvement post) — off-axis, single-surface → `raw_only`. The 08:00 new row `DbyCIZXk9ee` (@kind_zino_tax) now carry-over. `/replies` top static. `/mentions` empty. keyword_search all own posts. Google My Activity no new rows (변화 없음). YouTube + GitHub logged-out shells (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — ONE new REPOST_FACADE since 08:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **NEW top:** `[2026-08-08 23:05:46 UTC = 08-09 08:05 KST]` REPOST_FACADE — https://www.threads.com/@ethan13917/post/DbzAP2CE_r7
  > (empty text — repost facade)
  - Public og:title recovery: `밤밤ㅣ커뮤니티 기획자 (@bam.bam_2) on Threads` → reposted author `@bam.bam_2` (community planner). og:description recovered: `제발 새로운 사람을 주기적으로 만나세요. 본인 업계 사람 말고, 농부, 어부, 자영업자 … 다 만나보세요. 그래야 내 생각이 얼마나 고였는지 깨닫게 됩니다.` — networking / self-improvement motivational post. Off CK's AI/agent/infra axis → single-surface off-axis feed rotation → `raw_only`.
- Carry-over unchanged: `DbyCIZXk9ee` (08-08 23:02 KST REPOST_FACADE, @kind_zino_tax tax accountant — was the 08:00 new row, now carry-over), `DbnNVXGE6cn` (08-04 원가/단가 TEXT_POST), `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` (older repost). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs 08:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-08 03:55:41 UTC = 12:55 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Dbw8oWGE-2_
  > 그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다
  - Already captured in the 08:00 baseline. Reinforcement.
- Carry-over unchanged: `DbsEtzrE39y` (08-06), `DbpAXVuk_D_` / `Dbo9V23E01v` (08-05), then the 08-04 원가/단가 reply chain (`DbnNcN9E0fH` 출처 / `DbnNab6ky63` 5/5 / `DbnNZknEyt9` 4/5 / `DbnNYoik1Yw` 3/5). Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1). Every hit is `@ethan13917`'s own post. Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Freshest section still **오늘 = 08-07**, identical to the 08:00 baseline: `[08-07 18:48]` 오픈AI topic-alert notification; `[08-07 12:16-12:17]` outlook 검색 → Outlook 방문.
- **어제 (08-06)** unchanged: 22:38 CUDA/날씨 alert, 21:12 Google 검색, 11:26 한컴독스/한글 웹, 10:25 hermes → Hermes Agent 한국어 문서.
- **08-05** unchanged: NASDAQ:TSLA/클로드/쿠버네티스 alert, durable 뜻 / Durable Agent Runtime, 양도소득세/홈택스, linkedin.
- No 08-08/08-09 rows yet. **변화 없음** vs the 08:00 baseline. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): target hydrated with correct title ("구독 - YouTube") but body a blank nav-only shell (`innerText` len 17: 홈/Shorts/구독/내 페이지), logged out.
- **GitHub** (`/stars`): target redirected to `github.com/login?return_to=/stars`, logged out.

## Filtering notes
- Only the new REPOST_FACADE row (`DbzAP2CE_r7`) is genuinely new; it is off-axis (community-planner networking repost) → not durable.
- All other Threads rows, all keyword_search hits, and all Google My Activity rows are carry-over from prior runs.

## Why this raw exists
This file is the evidence store for the 2026-08-09 19:00 social collection pass. Reinforcement-only; durable action limited to Honcho/log audit.
