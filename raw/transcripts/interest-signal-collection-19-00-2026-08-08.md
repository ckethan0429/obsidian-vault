# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube)
Source URL: multiple (per surface below)
Date: 2026-08-08 (captured ~19:05 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 social pass. Idempotency clear: no interest-signal-collection-19-00-2026-08-08 raw existed
  before this run. Baseline = same-day 08:00 social transcript (both-static no-new-signal) + 11:00
  new-target transcript. Threads own `/threads` top STATIC vs 08:00; `/replies` gained ONE new own
  reply since the 08:00 baseline: `Dbw8oWGE-2_` (2026-08-08 03:55 UTC = 12:55 KST) — on-axis
  ("그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다"), but a single-surface CK
  own reply reinforcing the existing agent/tool-use lane → own-posts-only-reinforcement → raw_only.
  `/mentions` empty; keyword_search 100% own posts. Google My Activity: NO new 08-08 rows (freshest
  still the 08-07 오픈AI topic-alert + Outlook already in the 08:00 baseline) → 변화 없음. YouTube
  subscriptions blank nav-only shell (len 17, logged out); GitHub `/stars` login redirect
  (logged out) — access facts, not 변화 없음. Reinforcement-only.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-08.md` existed → collection proceeded.
- Baselines: same-day `interest-signal-collection-08-00-2026-08-08.md` (social, both-static no-new-signal) + `interest-signal-collection-11-00-2026-08-08.md` (new-target, one append_existing already absorbed).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: YouTube `feed/subscriptions` (title "구독 - YouTube" but body a blank nav-only shell, len 17 → logged out), Google My Activity (hydrated, logged in), GitHub `/stars` (login redirect, logged out).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_1900_0808.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5097632); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-08-1900/` (disposable). CDP reads via `/tmp/cdp_read_1900_0808.py` (stdlib raw-socket WebSocket), cached to `~/wiki/.cache/cdp-2026-08-08-1900/`.

## Novelty summary
**Reinforcement-only.** One genuinely-new item: CK's own `/replies` top `Dbw8oWGE-2_` (08-08 12:55 KST), on-axis about tool-calling loops / applying agents to real life — single-surface own post → `raw_only`. Threads own `/threads` static. `/mentions` empty. keyword_search all own posts. Google My Activity no new 08-08 rows (변화 없음). YouTube + GitHub logged-out shells (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — STATIC vs 08:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다 …
- Carry-over unchanged: `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — ONE new own reply since 08:00
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **NEW top:** `[2026-08-08 03:55:41 UTC = 12:55 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Dbw8oWGE-2_
  > 그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다
  - On CK's durable agent/tool-use axis (툴 콜링 루프, 실생활 접목). But a single-surface own reply, not new external signal → `raw_only` (own-posts-only-reinforcement).
- Then carry-over (unchanged vs 08:00): `DbsEtzrE39y` (08-06 06:30), `DbpAXVuk_D_` (08-05 01:54), `Dbo9V23E01v` (08-05 01:27), then the 08-04 원가/단가 reply chain (`DbnNcN9E0fH` 출처 … `DbnNYoik1Yw` 3/5). Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1). Every hit is `@ethan13917`'s own post (managed-agents, agent-security, 원가/단가, investing). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new 08-08 rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Freshest section still **오늘 = 08-07**, identical to the 08:00 baseline: `[08-07 18:48]` 오픈AI topic-alert notification; `[08-07 12:16-12:17]` outlook 검색 → Outlook 방문.
- **어제 (08-06)** unchanged: 22:38 CUDA/날씨 topic alert, 21:12 Google 검색, 11:26 한컴독스/한글 웹, 10:25 hermes → Hermes Agent 한국어 문서.
- **08-05** unchanged: 23:14 NASDAQ:TSLA/클로드/쿠버네티스/날씨 alert, 15:38-39 durable 뜻 / Durable Agent Runtime, 13:11 양도소득세/홈택스.
- No 08-08 rows yet. **변화 없음** vs the 08:00 baseline. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): target hydrated with correct title ("구독 - YouTube") but body a blank nav-only shell (`innerText` len 17: 홈/Shorts/구독/내 페이지), logged out.
- **GitHub** (`/stars`): target redirected to `github.com/login?return_to=/stars`, logged out.
- **ChatGPT / Claude / X**: not collected this run (no hydrated logged-in tab).

## Filtering notes
- Threads own `/threads` static vs 08:00; `/replies` gained exactly one new own reply (`Dbw8oWGE-2_`) since 08:00 — on-axis but single-surface own post, kept as `raw_only` chronology evidence.
- Google My Activity had no new 08-08 rows since the 08:00 baseline.
- YouTube/GitHub logged-out shells recorded as access facts, not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-08 19:00 social pass. Threads API (own `/threads` static, one new own `/replies` row, `/mentions` empty, keyword_search all own posts) + partial CDP (Google My Activity logged in with no new 08-08 rows; YouTube/GitHub logged out). Reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
