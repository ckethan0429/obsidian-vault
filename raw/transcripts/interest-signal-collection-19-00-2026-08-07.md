---
title: Interest signal collection — 19:00 social run (2026-08-07)
created: 2026-08-07
type: raw-transcript
captured_at: 2026-08-07T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, cdp, google-myactivity, social, reinforcement, no-new-signal]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 social run for 2026-08-07. Idempotency clear: no interest-signal-collection-19-00-2026-08-07.md
  existed. Baseline = same-day 08:00 social run (interest-signal-collection-08-00-2026-08-07.md) plus the
  11:00 new-target run (which absorbed Cloudflare Agents Week Day 4 [08-06] as an append_existing on
  ai-infra-operating-economics.md). Live Chrome CDP on 127.0.0.1:9222 is UP (Chrome/147.0.7727.55).
  Threads via official Graph API (configured path); long-lived token refreshed OK (expires_in 5184000),
  /me confirmed ethan13917 (user_id 27173231028946699).
  Net: reinforcement-only. Threads fully STATIC vs the 08:00 baseline — own /threads top UNCHANGED
  (still the 08-04 cost/원가 thread DbnNVXGE6cn 09:09), /replies top UNCHANGED (still DbsEtzrE39y 08-06
  06:30), /mentions empty, keyword_search (agent 10 / Codex 4 / Claude Code 1 / Hermes 0) = 100% CK's
  own posts (reinforcement). CK made no posts between the 08:00 and 19:00 passes. Google My Activity is
  logged in and now shows TWO fresh 08-07 (오늘) rows that were absent at 08:00: a 오후 6:48 topic alert
  incl. "오픈AI" (OpenAI — Google topic-alert notification, single-surface, low durability) + a 오후
  12:16-12:17 "outlook" search → Outlook visit (email/personal, off-axis). Both single-surface low-
  durability → raw_only, no durable delta. YouTube subscriptions = blank nav-only shell (innerText len 17,
  logged out → access fact); GitHub /stars = redirect to github.com/login (logged out → access fact).
  ChatGPT/Claude/X not collected (no hydrated logged-in tab). Route the whole run raw_only; durable action =
  this raw transcript + Honcho/log audit only; index.md and all concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "STATIC. Own /threads top still DbnNVXGE6cn (08-04 09:09 cost/원가 thread) then the same carry-over rows (DblTFNfE_Tr/DblG8smExWc 08-03 REPOST_FACADEs, DbkpxynEyy9 08-03 agent-security, Dbc78KPk5Ve 07-31 Samsung IMAGE, older reposts). No new own posts or reposts since the 08:00 baseline. Reinforcement."}
  - {surface: threads-api-replies, route: raw_only, note: "STATIC. Top still DbsEtzrE39y (08-06 06:30 '저게 2900이라구요?...') then DbpAXVuk_D_ / Dbo9V23E01v (08-05) then the 08-04 cost/원가 reply chain. No new replies since the 08:00 baseline. Reinforcement."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent(10)/Codex(4)/Claude Code(1) all @ethan13917's own posts (managed-agents, agent-security, 국산 하네스, investing); Hermes=0. Reinforcement, no external discovery."}
  - {surface: cdp-google-myactivity, route: raw_only, note: "Logged in / hydrated (innerText 5297 after reload). TWO fresh 08-07 (오늘) rows absent at 08:00: 오후 6:48 topic alert incl. '오픈AI' (OpenAI — Google topic-alert notification, single-surface, low durability); 오후 12:16-12:17 'outlook' 검색 → Outlook 방문 (email/personal, off-axis). Neither opens a new on-axis durable branch. Reinforcement / raw_only."}
  - {surface: cdp-youtube, route: discard, note: "CDP up but both existing subscriptions targets = blank nav-only shell (innerText len 17), logged out — access fact, not 변화 없음."}
  - {surface: cdp-github-stars, route: discard, note: "CDP up but both /stars targets redirected to github.com/login (title 'Sign in to GitHub'), logged out — access fact."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-07.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-07.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
  - log.md
---

# Raw — 19:00 Social Collection (2026-08-07)

Source: Threads official Graph API (`graph.threads.net/v1.0`) + live Chrome CDP (Google My Activity hydrated; YouTube/GitHub logged out).
Date: 2026-08-07 (captured ~19:05 KST)
Account: `ethan13917` (씨케이)

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-07.md` existed → collection proceeded.
- Baseline = same-day `interest-signal-collection-08-00-2026-08-07.md` (social) + `interest-signal-collection-11-00-2026-08-07.md` (new-target).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: Google My Activity (hydrated), YouTube subscriptions ×2 (blank shell), GitHub `/stars` ×2 (login redirect).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_1900_0807.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5184000); `/me` confirmed `ethan13917`. Raw JSON cached to `~/wiki/.cache/threads-2026-08-07-1900/` (disposable). CDP reads via `/tmp/cdp_read_1900_0807.py` + `/tmp/cdp_google_reload_1900_0807.py` (stdlib raw-socket WebSocket).

## Novelty summary
**Reinforcement-only.** Threads own `/threads` AND `/replies` tops are BOTH byte-identical to the 08:00 baseline (CK posted nothing between passes). `/mentions` empty. keyword_search all own posts. Google My Activity is logged in and now has TWO fresh 08-07 rows absent at 08:00 (오픈AI topic alert + Outlook search) — both single-surface / low-durability → `raw_only`. YouTube + GitHub logged out (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — STATIC vs 08:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다 …
- Carry-over rows unchanged: `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs 08:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-06 06:30:08 UTC]` — https://www.threads.com/@ethan13917/post/DbsEtzrE39y
  > 저게 2900이라구요? 그것이 더 사기꾼 같은데요..
- Then `DbpAXVuk_D_` (08-05 01:54), `Dbo9V23E01v` (08-05 01:27), then the 08-04 cost/원가 reply chain (`DbnNcN9E0fH` 출처 … `DbnNXokE90P` 2/5). All carry-over. No new replies since the 08:00 baseline. Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post (managed-agents, agent-security, 국산 하네스, investing). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — TWO fresh 08-07 rows
Source URL: `https://myactivity.google.com/search-services/history/search`
After a live reload, the freshest day is now **오늘 (08-07)**, with two rows absent at 08:00:
- `[08-07 18:48]` topic alert incl. **오픈AI (OpenAI)** — Google topic-alert notification (single-surface, low durability; OpenAI is an already-tracked entity, not a new branch)
- `[08-07 12:16-12:17]` searched **outlook** → visited **Outlook** (email/personal, off-axis)
- 어제 (08-06) rows unchanged from 08:00: 22:38 CUDA/날씨 topic alert, 21:12 Google 검색, 11:26 한컴독스/한글 웹, 10:25 hermes → Hermes Agent 한국어 문서 (all carry-over).
No new on-axis durable branch. Reinforcement / `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): both targets hydrated as a blank nav-only shell (`innerText` len 17), logged out.
- **GitHub** (`/stars`): both targets redirected to `github.com/login`, logged out.
- **ChatGPT / Claude / X**: not collected this run (no hydrated logged-in tab).

## Filtering notes
- Threads fully static vs the 08:00 baseline: checked own `/threads` AND `/replies` tops — both unchanged. CK made no posts between passes.
- Google My Activity had two fresh 08-07 rows (오픈AI topic alert + Outlook) — kept as raw evidence but both single-surface / low-durability, no durable delta.
- YouTube/GitHub logged-out shells recorded as access facts, not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-07 19:00 social pass. Threads API (own `/threads` + `/replies` both static, `/mentions` empty, keyword_search all own posts) + partial CDP (Google My Activity logged in with two fresh but low-durability 08-07 rows; YouTube/GitHub logged out). Reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
