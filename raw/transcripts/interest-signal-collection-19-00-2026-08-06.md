---
title: Interest signal collection — 19:00 social run (2026-08-06)
created: 2026-08-06
type: raw-transcript
captured_at: 2026-08-06T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, cdp-recovery, google-myactivity, social, reinforcement]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 social run for 2026-08-06. Idempotency clear: no interest-signal-collection-19-00-2026-08-06.md
  existed. Baseline = most-recent completed social transcript = the 08-05 08:00 social run
  (interest-signal-collection-08-00-2026-08-05.md); the 08-05 19:00 and 08-06 08:00 scheduled jobs
  both FAILED (no transcript), so the last successful social baseline is 08-05 08:00. Live Chrome CDP
  on 127.0.0.1:9222 is UP again this run (Chrome/147.0.7727.55) after being down for days, but only an
  about:blank target existed → created fresh targets with PUT /json/new. Hydration inconsistent
  (CDP-recovery run): YouTube feed/subscriptions = blank nav-only shell (innerText len 17, logged out
  → access fact); GitHub /stars = redirect to github.com/login (logged out → access fact); Google My
  Activity = FULLY HYDRATED / logged in (innerText 5391, real timestamped search history). Threads via
  official Graph API (configured path); long-lived token refreshed OK (expires_in 5184000), /me
  confirmed ethan13917 (user_id 27173231028946699).
  Threads: own /threads top UNCHANGED (still the 08-04 cost/원가 thread DbnNVXGE6cn 09:09 — no new own
  posts). /replies gained THREE genuinely-new rows since the 08-05 baseline (top = 08-06 06:30, plus two
  08-05 rows) but all are personal/off-axis noise (a sarcastic price reply, a motivational one-liner, a
  Tesla-blackbox defensive-driving reply). /mentions empty. keyword_search (agent 10 / Codex 4 /
  Claude Code 1 / Hermes 0) = 100% CK's own posts (reinforcement, no external discovery).
  Google My Activity is the freshest surface (unavailable for days while CDP was down): on-axis rows
  are CUDA (08-06 15:48 topic alert), hermes / Hermes Agent 한국어 문서 (08-06 10:25 — own stack),
  "Durable Agent Runtime" + "durable 뜻" (08-05 15:38-39 — agent-runtime axis), 토스 프론트엔드 스킬 /
  toss-frontend-fundamentals Skills (08-03 — agent-skills adjacent), k-skill / NomaDamas/k-skill (08-03).
  The rest is personal (real-estate 경매/양도소득세/등기부/홈택스, baby items 쏘서/보행기, hotels, Solana,
  WebGL/Unicorn Studio, LinkedIn). Every on-axis Google row is a single-surface search that reinforces
  an already-tracked axis (agent-runtime, CK's own Hermes stack, agent-skills, k-skill Korean skills,
  real-estate investing) — none opens a new durable branch or is cross-surface.
  Net: reinforcement-only at the durable layer. Route the whole run raw_only; durable action = this raw
  transcript + Honcho/log audit only; index.md and all concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "UNCHANGED. Own /threads top still DbnNVXGE6cn (08-04 09:09 cost/원가 thread) then the same carry-over rows (DblTFNfE_Tr/DblG8smExWc 08-03 REPOST_FACADEs, DbkpxynEyy9 agent-security, Dbc78KPk5Ve Samsung IMAGE, older reposts). No new own posts or reposts since the 08-05 baseline. Reinforcement."}
  - {surface: threads-api-replies, route: raw_only, note: "THREE genuinely-new rows since the 08-05 baseline (whose top was 출처 DbnNcN9E0fH 08-04), but all off-axis personal noise: DbsEtzrE39y (08-06 06:30, '저게 2900이라구요? 그것이 더 사기꾼 같은데요..'); DbpAXVuk_D_ (08-05 01:54, '결국 살아남는자가 이기는 자'); Dbo9V23E01v (08-05 01:27, 테슬라 블박/방어운전). Preserved as raw_only chronology evidence; none on CK's AI/agent/infra durable axis."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent(10)/Codex(4)/Claude Code(1) all @ethan13917's own posts (managed-agents, agent-security, 국산 하네스, investing 라오어/세븐스플릿); Hermes=0. Reinforcement, no external discovery."}
  - {surface: cdp-youtube, route: discard, note: "CDP up but fresh feed/subscriptions target = blank nav-only shell (innerText len 17, '홈/Shorts/구독/내 페이지'), logged out — access fact, not 변화 없음."}
  - {surface: cdp-github-stars, route: discard, note: "CDP up but fresh /stars target redirected to github.com/login (title 'Sign in to GitHub'), logged out — access fact."}
  - {surface: cdp-google-myactivity, route: raw_only, note: "FULLY HYDRATED / logged in (innerText 5391). Freshest surface (unavailable for days while CDP was down). On-axis single-surface searches reinforcing existing axes: CUDA (08-06 topic alert), hermes/Hermes Agent 한국어 문서 (own stack), 'Durable Agent Runtime'/'durable 뜻' (agent-runtime), 토스 프론트엔드 스킬 / toss-frontend Skills, k-skill/NomaDamas. Rest personal (경매/양도소득세/등기부/홈택스, baby items, hotels, Solana, WebGL). No new durable branch."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-05.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-05.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
  - log.md
---

# Raw — 19:00 Social Collection (2026-08-06)

Source: Threads official Graph API (`graph.threads.net/v1.0`) + live Chrome CDP (Google My Activity hydrated; YouTube/GitHub logged out).
Date: 2026-08-06 (captured ~19:05 KST)
Account: `ethan13917` (씨케이)

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-06.md` existed → collection proceeded.
- Baseline = most-recent completed social transcript = `interest-signal-collection-08-00-2026-08-05.md`. The **08-05 19:00 and 08-06 08:00 scheduled jobs both FAILED** (no transcript written), so the effective gap runs from the 08-05 08:00 baseline.
- **Live Chrome CDP `127.0.0.1:9222` is UP again** (Chrome/147.0.7727.55) after being down for days. Only an `about:blank` target existed → created fresh targets via `PUT /json/new`. **CDP-recovery run: hydration inconsistent** — YouTube subscriptions = blank nav shell (logged out), GitHub `/stars` = login redirect (logged out), **Google My Activity = fully hydrated / logged in**.
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_1900_0806.py` (urllib, no `requests`). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5184000); `/me` confirmed `ethan13917`. Raw JSON cached to `~/wiki/.cache/threads-2026-08-06-1900/` (disposable). CDP reads via `/tmp/cdp_read_1900_0806.py` + `/tmp/cdp_google_1900_0806.py` (stdlib + websockets).

## Novelty summary
**Reinforcement-only at the durable layer.** Own `/threads` is unchanged (no new own posts since the 08-04 cost/원가 thread). `/replies` gained three genuinely-new rows but all are off-axis personal noise. Google My Activity is the freshest surface (it hadn't been collectable for days), and its on-axis rows are single-surface searches reinforcing already-tracked axes (agent-runtime, CK's own Hermes stack, agent-skills, k-skill Korean skills, real-estate investing) — none opens a new durable branch. YouTube + GitHub logged out (access facts). Route the whole run `raw_only`.

## 1) Threads — own `/threads` (API) — UNCHANGED vs 08-05 baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **Top (unchanged):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다 …
- Carry-over rows unchanged: `DblTFNfE_Tr` / `DblG8smExWc` (08-03 REPOST_FACADEs), `DbkpxynEyy9` (08-03 agent-security thread), `Dbc78KPk5Ve` (07-31 Samsung IMAGE), `Dbc3mYgE4qT` / `DbUlDcSk_tL` / `DbT86Mkk5pH` (older reposts). No new own posts. Reinforcement.

## 2) Threads — own `/replies` (API) — THREE new rows (all off-axis personal)
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- `[2026-08-06 06:30:08 UTC]` — https://www.threads.com/@ethan13917/post/DbsEtzrE39y
  > 저게 2900이라구요? 그것이 더 사기꾼 같은데요..
- `[2026-08-05 01:54:23 UTC]` — https://www.threads.com/@ethan13917/post/DbpAXVuk_D_
  > 결국 살아남는자가 이기는 자
- `[2026-08-05 01:27:58 UTC]` — https://www.threads.com/@ethan13917/post/Dbo9V23E01v
  > 테슬라 잘못이지만 블박차는 앞차인 테슬라를 주시하고 간격 띄워서 방어운전으로 가야지ㅡㅡ 유도선 잘지킨다고 잘못없냐
- Then the 08-04 cost/원가 reply chain (출처 `DbnNcN9E0fH` … `DbnNXokE90P`), unchanged carry-over.
- All three new rows are personal/off-axis (price sarcasm, motivational one-liner, driving) → preserved as `raw_only` chronology evidence, not durable signal.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post (managed-agents session/harness/sandbox, agent-security 6/6, 국산 하네스, investing 라오어/세븐스플릿, "codex는 없나요?"). Reinforcement, no external discovery.

## 5) Google — My Activity / search history (CDP, logged in) — freshest surface
Source URL: `https://myactivity.google.com/product/search`
On-axis rows (single-surface searches, `raw_only` reinforcement):
- `[08-06 15:48]` topic alert incl. **CUDA**
- `[08-06 10:25]` searched **hermes** → visited "Hermes Agent 한국어 문서 — 설치, 데스크톱, 다국어 가이드" (own stack)
- `[08-06 11:26]` 한컴독스 / 한글 웹
- `[08-05 15:38-39]` searched **"durable 뜻"** → **"Durable Agent Runtime"** (agent-runtime axis)
- `[08-03 16:32]` 토스 프론트엔드 스킬 → "toss-frontend-fundamentals | Skills · LobeHub" (agent-skills adjacent)
- `[08-03 09:18]` k skill → "GitHub - NomaDamas/k-skill: 한국인을 위한 스킬 모음집"
Personal / off-axis (kept in raw, excluded from report): real-estate 경매(courtauction/법원경매/타경11662)·양도소득세·등기부등본·홈택스·정비사업 정보몽땅, baby items 쏘서/보행기/점퍼루, 워커힐 hotels, Solana, WebGL/Unicorn Studio, LinkedIn, ISA 소급, Open Compute.

## 6) Unavailable surfaces (CDP up but logged out — access facts, not 변화 없음)
- **YouTube** (feed/subscriptions): fresh target hydrated as a blank nav-only shell (`innerText` len 17), logged out.
- **GitHub** (`/stars`): fresh target redirected to `github.com/login`, logged out.
- **ChatGPT / Claude / X**: not collected this run (no hydrated logged-in tab; would need fresh login).

## Filtering notes
- CDP-recovery run: a recovered CDP endpoint is an availability fact, not a login guarantee. YouTube/GitHub fresh targets came up logged-out shells → recorded as access facts, not negative evidence.
- Threads `/threads` static but `/replies` moved (the usual asymmetry) — checked both; the new replies are personal noise.
- Google on-axis rows are single-surface searches reinforcing existing axes; none cross-surface or new-branch.

## Why this raw exists
Evidence store for the 2026-08-06 19:00 social pass. Threads API + partial CDP (Google My Activity hydrated; YouTube/GitHub logged out). Own `/threads` unchanged, `/replies` three new personal rows, `/mentions` empty, keyword_search all own posts, Google on-axis searches reinforce existing axes → reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
