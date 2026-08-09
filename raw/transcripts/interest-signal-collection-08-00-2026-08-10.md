# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube, GitHub)
Source URL: multiple (per surface below)
Date: 2026-08-10 (captured ~08:00 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 social pass, on time. Idempotency clear: no interest-signal-collection-08-00-2026-08-10
  raw existed before this run. Baseline = most-recent completed social transcript by mtime =
  `interest-signal-collection-19-00-2026-08-09.md` (08-09 19:03, reinforcement-only). Cross-day
  both-static no-new-signal: Threads own `/threads` top `DbzAP2CE_r7` (08-09 08:05 KST REPOST_FACADE,
  @bam.bam_2) AND `/replies` top `Dbw8oWGE-2_` (08-08 12:55 KST TEXT_POST) are BOTH byte-identical to
  the 19:00 baseline tops — CK made no posts between passes. `/mentions` empty; keyword_search 100%
  own posts. Google My Activity: newest actual rows unchanged (오픈AI alert 6:48 PM + Outlook 12:16-17
  cluster, then CUDA/날씨, Google, 한컴독스, hermes carry-over) — only My Activity's relative-date
  relabeling shifted; NO new 08-08/08-09/08-10 search rows → 변화 없음. YouTube subscriptions blank
  nav-only shell (len 17, logged out); GitHub `/stars` login redirect (logged out) — access facts,
  not 변화 없음. Whole run reinforcement-only / no-new-signal.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-10.md` existed → collection proceeded.
- Baseline: `interest-signal-collection-19-00-2026-08-09.md` (most-recent completed social transcript by mtime; reinforcement-only).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: YouTube `feed/subscriptions` (title "구독 - YouTube" but blank nav-only shell body, len 17 → logged out), Google My Activity (hydrated, logged in), GitHub `/stars` (login redirect → logged out) — same state as 08-09.
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0810.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5097633); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-10-0800/` (disposable). CDP reads via `/tmp/cdp_read_0800_0810.py` (stdlib raw-socket WebSocket), Google/YouTube/GitHub targets read directly.

## Novelty summary
**No new signal / reinforcement-only.** Both Threads surfaces static vs the 08-09 19:00 baseline: own `/threads` top `DbzAP2CE_r7` and `/replies` top `Dbw8oWGE-2_` byte-identical. `/mentions` empty. keyword_search all own posts. Google My Activity no new search rows (변화 없음). YouTube + GitHub logged-out shells (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — STATIC vs 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-08 23:05:46 UTC = 08-09 08:05 KST]` REPOST_FACADE — https://www.threads.com/@ethan13917/post/DbzAP2CE_r7
  > (empty text — repost facade; reposted author `@bam.bam_2` community planner, captured 08-09 19:00)
- Carry-over unchanged below: `DbyCIZXk9ee` (08-08 23:02 KST REPOST_FACADE, @kind_zino_tax tax accountant), `DbnNVXGE6cn` (08-04 AI 원가/단가 TEXT_POST), `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security 런타임 경계 thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts), `DbFW_MMk2OM` (07-22 라오어 무한매수법/세븐스플릿 + ai agent 투자 알림), `DbFCPitE5gw` (07-22 오픈웨이트/인프라). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-08 03:55:41 UTC = 12:55 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Dbw8oWGE-2_
  > 그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다
  - Byte-identical to the 08-09 19:00 baseline top. Reinforcement.
- Carry-over unchanged: `DbsEtzrE39y` (08-06), `DbpAXVuk_D_` / `Dbo9V23E01v` (08-05), then the 08-04 AI 원가/단가 reply chain (`DbnNcN9E0fH` 출처 Meta GEM/Cloudflare / `DbnNab6ky63` 5/5 원가표). Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1). Every hit is `@ethan13917`'s own post. Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Newest actual rows unchanged from the 19:00 baseline: 오픈AI topic-alert notification (오후 6:48), outlook 검색 → Outlook 방문 (오후 12:16-12:17); then CUDA/날씨 alert, Google 검색, 한컴독스/한글 웹, hermes → Hermes Agent 한국어 문서; then 8월 5일 NASDAQ:TSLA/클로드/쿠버네티스 alert, durable 뜻 / Durable Agent Runtime, 양도소득세/홈택스, linkedin; 8월 4일 법원경매/courtauction, 홈택스 양도세, 등기부등본, unicorn studio/WebGL.
- Only My Activity's relative-date labels shifted (오늘/어제 re-bucketing); NO new 08-08/08-09/08-10 search rows. **변화 없음** vs the 19:00 baseline. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): target hydrated with correct title ("구독 - YouTube") but body a blank nav-only shell (`innerText` len 17: 홈/Shorts/구독/내 페이지), logged out.
- **GitHub** (`/stars`): target redirected to `github.com/login?return_to=/stars`, logged out (body = GitHub sign-in form, len 214).

## Filtering notes
- No genuinely-new item on any surface. Both Threads tops static, Google no new rows, YouTube/GitHub logged-out shells.
- All Threads rows, all keyword_search hits, and all Google My Activity rows are carry-over from prior runs.

## Why this raw exists
This file is the evidence store for the 2026-08-10 08:00 social collection pass. No-new-signal / reinforcement-only; durable action limited to Honcho/log audit.
