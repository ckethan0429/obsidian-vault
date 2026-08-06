---
title: Interest signal collection — 08:00 social run (2026-08-07)
created: 2026-08-07
type: raw-transcript
captured_at: 2026-08-07T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, cdp, google-myactivity, social, reinforcement, no-new-signal]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 social run for 2026-08-07. Idempotency clear: no interest-signal-collection-08-00-2026-08-07.md
  existed. Baseline = most-recent completed social transcript = the 08-06 19:00 social run
  (interest-signal-collection-19-00-2026-08-06.md). Live Chrome CDP on 127.0.0.1:9222 is UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); long-lived token refreshed
  OK (expires_in 5137158), /me confirmed ethan13917 (user_id 27173231028946699).
  Both-static no-new-signal morning run: own /threads top UNCHANGED (still the 08-04 cost/원가 thread
  DbnNVXGE6cn 09:09 — no new own posts) AND /replies top UNCHANGED (still DbsEtzrE39y 08-06 06:30 —
  no new replies since the 19:00 baseline). CK made no posts between passes. /mentions empty.
  keyword_search (agent 10 / Codex 4 / Claude Code 1 / Hermes 0) = 100% CK's own posts (reinforcement).
  Google My Activity fully hydrated / logged in, but after reload the top day is "어제" (08-06) — no
  08-07 rows yet; top row = 08-06 22:38 CUDA/날씨 topic alert (post-19:00 but same already-tracked CUDA
  topic) then 08-06 rows already captured at 19:00 (hermes → Hermes Agent 한국어 문서, 한컴독스/한글 웹).
  YouTube subscriptions = blank nav-only shell (innerText len 17, logged out → access fact); GitHub
  /stars = redirect to github.com/login (logged out → access fact). ChatGPT/Claude/X not collected
  (no hydrated logged-in tab).
  Net: genuine no-new-signal / reinforcement-only. Route the whole run raw_only; durable action = this
  raw transcript + Honcho/log audit only; index.md and all concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "UNCHANGED. Own /threads top still DbnNVXGE6cn (08-04 09:09 cost/원가 thread) then the same carry-over rows (DblTFNfE_Tr/DblG8smExWc 08-03 REPOST_FACADEs, DbkpxynEyy9 08-03 agent-security, Dbc78KPk5Ve 07-31 Samsung IMAGE, older reposts). No new own posts or reposts since the 08-06 19:00 baseline. Reinforcement."}
  - {surface: threads-api-replies, route: raw_only, note: "UNCHANGED. Top still DbsEtzrE39y (08-06 06:30 '저게 2900이라구요?...') then DbpAXVuk_D_ / Dbo9V23E01v (08-05) then the 08-04 cost/원가 reply chain. No new replies since the 19:00 baseline. Reinforcement."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent(10)/Codex(4)/Claude Code(1) all @ethan13917's own posts (managed-agents, agent-security, 국산 하네스, investing); Hermes=0. Reinforcement, no external discovery."}
  - {surface: cdp-google-myactivity, route: raw_only, note: "Fully hydrated / logged in (innerText 5369 after reload). No 08-07 rows yet — top day is 어제 (08-06). Top = 08-06 22:38 CUDA/날씨 topic alert (post-19:00 baseline, same already-tracked CUDA topic) + 08-06 rows already captured at 19:00 (hermes → Hermes Agent 한국어 문서, 한컴독스/한글 웹). No new on-axis branch. Reinforcement."}
  - {surface: cdp-youtube, route: discard, note: "CDP up but both the existing and a fresh feed/subscriptions target = blank nav-only shell (innerText len 17), logged out — access fact, not 변화 없음."}
  - {surface: cdp-github-stars, route: discard, note: "CDP up but both existing and a fresh /stars target redirected to github.com/login (title 'Sign in to GitHub'), logged out — access fact."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-08-06.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
  - log.md
---

# Raw — 08:00 Social Collection (2026-08-07)

Source: Threads official Graph API (`graph.threads.net/v1.0`) + live Chrome CDP (Google My Activity hydrated; YouTube/GitHub logged out).
Date: 2026-08-07 (captured ~08:05 KST)
Account: `ethan13917` (씨케이)

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-07.md` existed → collection proceeded.
- Baseline = most-recent completed social transcript = `interest-signal-collection-19-00-2026-08-06.md`.
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Existing targets: Google My Activity (hydrated), YouTube subscriptions (blank shell), GitHub `/stars` login redirect. Fresh `PUT /json/new` targets for YouTube + GitHub came up logged-out too.
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0807.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5137158); `/me` confirmed `ethan13917`. Raw JSON cached to `~/wiki/.cache/threads-2026-08-07-0800/` (disposable). CDP reads via `/tmp/cdp_read_0800_0807.py` + `/tmp/cdp_google_reload_0807.py` (stdlib raw-socket WebSocket).

## Novelty summary
**No-new-signal / reinforcement-only.** Own `/threads` AND `/replies` tops are BOTH byte-identical to the 08-06 19:00 baseline (CK posted nothing between passes). `/mentions` empty. keyword_search all own posts. Google My Activity is logged in but has no 08-07 rows yet — the freshest day is 08-06, whose on-axis rows (CUDA alert, hermes/own-stack docs, 한컴독스) were already captured at 19:00. YouTube + GitHub logged out (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — UNCHANGED vs 08-06 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다 …
- Carry-over rows unchanged: `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — UNCHANGED vs 08-06 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-06 06:30:08 UTC]` — https://www.threads.com/@ethan13917/post/DbsEtzrE39y
  > 저게 2900이라구요? 그것이 더 사기꾼 같은데요..
- Then `DbpAXVuk_D_` (08-05 01:54, 결국 살아남는자가 이기는 자), `Dbo9V23E01v` (08-05 01:27, 테슬라 방어운전), then the 08-04 cost/원가 reply chain (`DbnNcN9E0fH` 출처 … `DbnNXokE90P` 2/5). All carry-over. No new replies since the 19:00 baseline. Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post (managed-agents, agent-security, 국산 하네스, investing). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — no 08-07 rows yet
Source URL: `https://myactivity.google.com/search-services/history/search`
After a live reload, the freshest day shown is **어제 (08-06)** — no 08-07 activity yet. Top rows:
- `[08-06 22:38]` topic alert incl. **CUDA** / 날씨 (post-19:00-baseline alert, same already-tracked CUDA topic)
- `[08-06 21:12]` Google 검색 방문
- `[08-06 11:26]` 한컴독스 / 한글 웹 (already captured at 19:00)
- `[08-06 10:25]` searched **hermes** → visited "Hermes Agent 한국어 문서 — 설치, 데스크톱, 다국어 가이드" (own stack; already captured at 19:00)
- `[08-05]` "durable 뜻" → "Durable Agent Runtime"; 양도소득세/홈택스; LinkedIn (all carry-over)
No new on-axis branch. Reinforcement.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): both the existing and a fresh target hydrated as a blank nav-only shell (`innerText` len 17), logged out.
- **GitHub** (`/stars`): both the existing and a fresh target redirected to `github.com/login`, logged out.
- **ChatGPT / Claude / X**: not collected this run (no hydrated logged-in tab).

## Filtering notes
- Both-static no-new-signal morning run: checked own `/threads` AND `/replies` tops (the usual asymmetry) — both unchanged since the 19:00 baseline. CK made no posts between passes.
- Google My Activity is logged in but has no 08-07 rows; the 08-06 on-axis rows were already captured at 19:00.
- YouTube/GitHub logged-out shells recorded as access facts, not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-07 08:00 social pass. Threads API (own `/threads` + `/replies` both static, `/mentions` empty, keyword_search all own posts) + partial CDP (Google My Activity logged in but no new 08-07 rows; YouTube/GitHub logged out). Genuine no-new-signal / reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
