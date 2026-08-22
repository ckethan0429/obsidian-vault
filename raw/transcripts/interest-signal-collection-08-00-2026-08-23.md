---
title: Interest signal collection — 08:00 social run (2026-08-23)
type: raw
created: 2026-08-23
captured_at: 2026-08-23T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no interest-signal-collection-08-00-2026-08-23
  raw existed before this run. Baseline = prior social run interest-signal-collection-19-00-2026-08-22.md
  (a clean both-static no-new-signal run) + the same-day 22:00 new-target run
  interest-signal-collection-22-00-2026-08-22.md (reinforcement-only) + concepts/ai-infra-operating-economics.md
  + concepts/agent-runtime-vertical-integration.md + concepts/honcho.md. Live Chrome CDP UP (Chrome/147).
  Result: REINFORCEMENT-ONLY / essentially no-new-signal morning run. Threads via official Graph API
  (configured path): own /threads TOP row unchanged (DcS8W0yE6LG 08-21 08:47 KST cross-vendor agent-OAuth
  thread) AND /replies TOP row unchanged (DcS8eCskwWb 08-21 08:48 the 원문-링크 reply of that thread) —
  both tops byte-identical to the 19:00 baseline → CK made NO new posts between the 08-22 evening pass and
  this morning run. The 08-20 REPOST_FACADE (DcRvrMwE5s2 @flota_kr) unchanged carry-over. /mentions 0;
  keyword_search (agent/Claude Code/Codex) all CK's OWN posts (reinforcement). GitHub stars byte-identical
  to 08-22 baseline (90 stars, len 2781) → 변화 없음. YouTube subscriptions (len 9469) same length; diff =
  feed rotation (sports/politics/entertainment noise + one mild GitHub 'Stacked PRs' upcoming livestream)
  → raw_only, no durable signal. Google My Activity (len 5301) same length; diff = scroll-position variance
  in the innerText slice revealing OLD July-dated backfill rows (opencompute 07-31, CocoIndex 07-30, claude
  code permission 07-21), NOT new same-day activity → raw_only. Durable action = this raw transcript +
  Honcho routing audit + log.md entry only; index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-23 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-23
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0823.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0823.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137232); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0823.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0823_0800.json`.
- **Baseline** = prior social run `interest-signal-collection-19-00-2026-08-22.md` (clean both-static no-new-signal) + same-day-prior `interest-signal-collection-22-00-2026-08-22.md` (new-target, reinforcement-only) + `concepts/ai-infra-operating-economics.md` + `concepts/agent-runtime-vertical-integration.md` + `concepts/honcho.md`. No `08-00-2026-08-23` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only / essentially no-new-signal morning run.** Own `/threads` TOP AND `/replies` TOP both byte-identical to the 19:00 baseline (CK posted nothing overnight). GitHub stars byte-identical (90 stars). YouTube same length; diff = feed rotation (noise + one mild GitHub upcoming stream). Google same length; diff = scroll-variance revealing OLD July backfill rows, not new activity. Durable action = this raw transcript + Honcho audit + `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 변화 없음 (both `/threads` and `/replies` tops unchanged since 08-22 19:00)

### `/threads` (own posts) — TOP row unchanged
> https://www.threads.com/@ethan13917/post/DcS8W0yE6LG  (id 17963997614965373)
> 2026-08-21T08:47:31 UTC (= 08-21 08:47 KST) TEXT_POST — cross-vendor agent-OAuth / credential-scoping synthesis (클라우드플레어/AWS/버셀 동시 발표)
> Unchanged since the 19:00 baseline → no new own post overnight → raw_only.

Carry-over (unchanged): `DcRvrMwE5s2` (REPOST_FACADE @flota_kr, 08-20T21:37), `DcQJuFPk6HL` (OpenRouter→Stripe M&A 08-20), `DcQF5nQkxmp` (어사이드-브라우저 grok 4.6/gpt luna usage 08-20), `DcNqaTyE63E` (Grok/Cloudflare execution-env 08-19), `DcNon1Lk7R9` (칼퇴/회식 off-axis personal 08-19).

### `/replies` (own replies) — TOP row unchanged
> https://www.threads.com/@ethan13917/post/DcS8eCskwWb — 08-21T08:48 (원문 링크 reply of the cross-vendor agent-OAuth thread)
> Unchanged since the 19:00 baseline → raw_only.
Carry-over reply chain (`DcS8c3DE9JV`/`DcS8biIE9xM`/`DcS8aOuE0Hl`/`DcS8XfTk-gT`) + off-axis personal (`DcSvrLVE3A6` 인크레더블-아빠) — all unchanged.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — raw_only (len 9469, feed rotation only, no durable AI signal)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469). Same length as 08-22 baseline; content diff = feed rotation. Newly visible rows are noise: 블라세 힙합플레이야 페스티벌, 에셋플러스 China 리치투게더펀드(investing, off-core), 손흥민 LAFC 리그스컵, 이정후 현지해설, TSMC 일본공장, 김민석 VS 정청래(정치), KBS 인간극장, 쿠팡플레이. **Only mildly on-axis:** `Rubber Duck Thursday - A closer look at Stacked PRs! / GitHub / 예정일: 26.8.6 19:30` — a GitHub dev livestream (Stacked PRs), upcoming/예정 placeholder, dev-tooling mild → raw_only. No new AI/agent/infra durable row.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, byte-identical to 08-22 baseline)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical content). No new star row.

## 4) Google My Activity (CDP) — raw_only (len 5301, scroll-variance backfill, not new activity)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301). Same length; the top "오늘/어제" rows (오픈AI, Outlook, CUDA) are carry-over from the baseline. The lines that differ vs the 08-22 snapshot are OLD July-dated backfill rows scrolled into the innerText window (not new searches): `opencompute` / Open Compute Project Wikipedia (07-31 오후 8:04), `CocoIndex — incremental data framework for AI agents` / cocoindex (07-30 오전 8:48), `claude code no permission` / Choose-a-permission-mode Claude Code Docs (07-21 오전 7:10). These are historical, on-axis but already-past activity surfacing via scroll position → raw_only, not a new signal.

## Filtering notes
- YouTube 반도체/축구/폭염/정치/힙합 noise is feed rotation, kept in raw but not reported as signal.
- Google differing lines are July backfill via scroll-position variance, not fresh same-day activity — explicitly NOT treated as new.

## Why this raw exists
Evidence store for the 2026-08-23 08:00 morning social pass. Reinforcement-only / essentially no-new-signal run: Threads both-static since 08-22 19:00, GitHub stars byte-identical (90), YouTube feed-rotation only (one mild GitHub Stacked-PRs upcoming stream), Google scroll-variance July backfill only. Durable layer (index.md, concept pages) unchanged.
