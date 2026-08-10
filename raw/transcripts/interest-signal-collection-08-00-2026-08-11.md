# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (Google My Activity, YouTube, GitHub)
Source URL: multiple (per surface below)
Date: 2026-08-11 (captured ~08:00 KST)
Account: `ethan13917` (씨케이)

route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-11 raw existed before this run. Baseline =
  most-recent completed social transcript by mtime = same-day-prior 08-10 19:00 social
  (interest-signal-collection-19-00-2026-08-10.md, own-post-only reinforcement). Result:
  clean cross-day both-static no-new-signal run. Threads own `/threads` top
  `17889069084426720` (`Db12_2dE-e0`, 08-10 10:42 KST career-reflection TEXT_POST) is
  byte-identical to the 19:00 baseline top; `/replies` top `18016230941866284`
  (`Dbw8oWGE-2_`, 08-08 12:55 KST) also byte-identical. `/mentions` empty; keyword_search
  100% own posts. Google My Activity newest rows unchanged (오픈AI alert 오후 6:48 + Outlook
  12:16-17 cluster) — NO new search rows → 변화 없음. YouTube subscriptions blank nav-only
  shell (len 17, logged out); GitHub `/stars` login redirect (logged out) — access facts,
  not 변화 없음. Whole run no-new-signal / reinforcement-only.
routing: raw_only

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-11.md` existed → collection proceeded on time (~08:00 KST).
- Baseline: most-recent completed social transcript by mtime = 08-10 19:00 social (`-19-00-2026-08-10`, own-post-only reinforcement).
- **Live Chrome CDP `127.0.0.1:9222` is UP** (Chrome/147.0.7727.55). Page targets: YouTube `feed/subscriptions` (title "구독 - YouTube" but blank nav-only shell body, len 17 → logged out), Google My Activity (hydrated, logged in, len 5297), GitHub `/stars` (login redirect → logged out, len 214) — same state as the 19:00 baseline.
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0811.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5137185); `/me` confirmed `ethan13917` (27173231028946699). Raw JSON cached to `~/wiki/.cache/threads-2026-08-11-0800/` (disposable). CDP reads via `/tmp/cdp_read_0800_0811.py` (stdlib raw-socket WebSocket).

## Novelty summary
**No-new-signal / reinforcement-only (both-static).** Threads own `/threads` top AND `/replies` top are both byte-identical to the 08-10 19:00 social baseline; CK made no new posts between passes. `/mentions` empty, keyword_search all own posts. Google My Activity no new search rows (변화 없음). YouTube + GitHub logged-out shells (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — STATIC vs 08-10 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-10 01:42:40 UTC = 10:42 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Db12_2dE-e0
  > 오늘 회사에서 주간 업무회의하다가 충격적인걸 봤는데
  > 지금 하던 논의들이 작년 연말 회의록의 적혀있는 논의들과 똑같다.
  >
  > 이제 진짜 빠져야할 시기인듯.
  - Byte-identical to the 19:00 baseline top (same id `17889069084426720`). No new own post between passes. Reinforcement.
- Carry-over unchanged below: `18145884259527886` (08-08 REPOST_FACADE), `17996171441808341` (08-08 REPOST_FACADE), `18089312705392873` (08-04 AI 원가/단가 TEXT_POST), then 08-03 REPOST_FACADEs and the older repost/investing/open-weight carry-over. Reinforcement.

## 2) Threads — own `/replies` (API) — STATIC vs 08-10 19:00 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- **Top (unchanged):** `[2026-08-08 03:55:41 UTC = 12:55 KST]` TEXT_POST — https://www.threads.com/@ethan13917/post/Dbw8oWGE-2_
  > 그냥 챗봇으로 쓴다는거지. 툴 콜링 루프 많이 돌리면서 실생활에 접목하려는 노력을 해야한다
  - Byte-identical to the 19:00 baseline top (same id `18016230941866284`). Reinforcement.
- Carry-over unchanged: 08-06 (2900 사기꾼), 08-05 (살아남는자/테슬라 방어운전), then the 08-04 AI 원가/단가 reply chain (출처 Meta GEM/Cloudflare / 5/5 원가표). Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1). Every hit is `@ethan13917`'s own post. Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — NO new rows
Source URL: `https://myactivity.google.com/search-services/history/search`
- Newest actual rows unchanged from the 19:00 baseline: 오픈AI topic-alert notification (오후 6:48), Outlook 방문/검색 (오후 12:17 / 12:16); then 어제 CUDA/날씨 alert (오후 10:38), Google 검색 방문, 한컴독스/한글 웹, hermes → Hermes Agent 한국어 문서; then 8월 5일 NASDAQ:TSLA/클로드/쿠버네티스 alert, Durable Agent Runtime / durable 뜻, 양도소득세/홈택스, linkedin; 8월 4일 법원경매/courtauction, 쏘서/점퍼루, 홈택스 양도세, 등기부등본, unicorn studio/WebGL.
- Only My Activity's relative-date labels shifted; NO new 08-11 morning search rows vs the 19:00 baseline. **변화 없음**. `raw_only`.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): target hydrated with correct title ("구독 - YouTube") but body a blank nav-only shell (`innerText` len 17: 홈/Shorts/구독/내 페이지), logged out.
- **GitHub** (`/stars`): target redirected to `github.com/login?return_to=/stars`, logged out (body = GitHub sign-in form, len 214).

## Filtering notes
- No genuinely-new item on any surface. Threads both-static, Google no new rows, YouTube/GitHub logged-out shells.
- All Threads rows, all keyword_search hits, and all Google My Activity rows are carry-over from prior runs.

## Why this raw exists
This file is the evidence store for the 2026-08-11 08:00 social collection pass. No-new-signal / reinforcement-only; durable action limited to Honcho/log audit.
