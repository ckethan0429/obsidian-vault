# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube)
Source URL: multiple (per surface below)
Date: 2026-08-08 (captured ~08:05 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: No-new-signal morning run. Threads own `/threads` AND `/replies` tops both byte-identical to the 2026-08-07 19:00 social baseline (CK posted nothing between passes). `/mentions` empty, keyword_search 100% own posts. Google My Activity has no new 08-08 rows — freshest are still the 08-07 OpenAI topic-alert + Outlook rows already captured in the baseline. YouTube/GitHub logged-out shells (access facts). Reinforcement-only.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-08.md` existed → collection proceeded.
- Baseline = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-07.md` (also cross-checked 08-07 08:00 social + 23:00 refinement).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: GitHub `/stars` ×2 (login redirect), YouTube subscriptions ×2 (blank shell, len 17), Google My Activity (hydrated, logged in).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0808.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5137233); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-08-0800/` (disposable). CDP reads via `/tmp/cdp_read_0800_0808.py` (stdlib raw-socket WebSocket).

## Novelty summary
**No-new-signal / reinforcement-only.** Threads own `/threads` top (`DbnNVXGE6cn`, 08-04) AND `/replies` top (`DbsEtzrE39y`, 08-06) BOTH byte-identical to the 08-07 baseline. `/mentions` empty. keyword_search all own posts. Google My Activity logged in but no new 08-08 rows — the freshest day is still 08-07 (오픈AI topic-alert + Outlook), already in the baseline. YouTube + GitHub logged out. Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — STATIC vs baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다 …
- Carry-over unchanged: `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-06 06:30:08 UTC]` — https://www.threads.com/@ethan13917/post/DbsEtzrE39y
  > 저게 2900이라구요? 그것이 더 사기꾼 같은데요..
- Then `DbpAXVuk_D_` (08-05 01:54), `Dbo9V23E01v` (08-05 01:27), then the 08-04 cost/원가 reply chain (`DbnNcN9E0fH` 출처 … `DbnNXokE90P` 2/5). All carry-over. No new replies since baseline. Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post (managed-agents, agent-security, 원가/단가, investing). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new 08-08 rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Freshest section is still **오늘 = 08-07**, identical to the baseline: `[08-07 18:48]` 오픈AI topic-alert notification; `[08-07 12:16-12:17]` outlook 검색 → Outlook 방문.
- **어제 (08-06)** rows unchanged: 22:38 CUDA/날씨 topic alert, 21:12 Google 검색, 11:26 한컴독스/한글 웹, 10:25 hermes → Hermes Agent 한국어 문서.
- No 08-08 rows yet. **변화 없음** vs the 08-07 baseline. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): both targets hydrated as a blank nav-only shell (`innerText` len 17), logged out.
- **GitHub** (`/stars`): both targets redirected to `github.com/login`, logged out.
- **ChatGPT / Claude / X**: not collected this run (no hydrated logged-in tab).

## Filtering notes
- Threads fully static vs baseline: checked own `/threads` AND `/replies` tops — both unchanged. CK made no posts between passes.
- Google My Activity had no new rows since the 08-07 baseline (freshest still the 08-07 OpenAI topic-alert + Outlook rows already captured).
- YouTube/GitHub logged-out shells recorded as access facts, not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-08 08:00 social pass. Threads API (own `/threads` + `/replies` both static, `/mentions` empty, keyword_search all own posts) + partial CDP (Google My Activity logged in with no new 08-08 rows; YouTube/GitHub logged out). No-new-signal / reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
