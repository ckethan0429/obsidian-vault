---
title: Interest signal collection — 19:00 social run (2026-08-22)
type: raw
created: 2026-08-22
captured_at: 2026-08-22T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-22 raw existed before this run.
  Baseline = same-day 08:00 social run (interest-signal-collection-08-00-2026-08-22.md,
  itself a clean both-static no-new-signal run) + the 08-22 11:00 new-target run
  (reinforcement-only, agents-into-team-chat / shared-agent-memory cluster raw_only)
  + concepts/ai-infra-operating-economics.md + concepts/agent-runtime-vertical-integration.md
  + concepts/honcho.md. Live Chrome CDP UP (Chrome/147). Clean same-day BOTH-STATIC
  no-new-signal run: GitHub stars (len 2781, 90 stars), YouTube subscriptions (len 9469),
  Google My Activity (len 5301) ALL byte-identical (content, not just length) to the
  08:00 baseline → 변화 없음 on all three CDP surfaces. Threads via official Graph API
  (configured path): own /threads TOP row unchanged (DcS8W0yE6LG 08-21 08:47 KST
  cross-vendor agent-OAuth thread) AND /replies TOP row unchanged (DcS8eCskwWb 08-21
  08:48 the 6/6 of that thread) — both tops byte-identical to the 08:00 baseline → CK
  made NO new posts between the 08:00 morning pass and this afternoon run. The 08-20
  REPOST_FACADE (DcRvrMwE5s2 @flota_kr) unchanged carry-over. /mentions 0;
  keyword_search (agent/Claude Code/Codex) all CK's OWN posts (reinforcement). Net
  no-new-signal / reinforcement-only. Durable action = this raw transcript + Honcho
  routing audit + log.md entry only; index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-22 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-22
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0822.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated `type==page` tabs. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0822.json`. `diff` against `~/wiki/.cache/cdp_read_0800_0822.json` = IDENTICAL (content, not just length) on all three surfaces.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0822.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0822_1900.json`.
- **Baseline** = same-day **08:00 social run** (`interest-signal-collection-08-00-2026-08-22.md`, itself a clean both-static no-new-signal run) + the same-day **11:00 new-target run** (`interest-signal-collection-11-00-2026-08-22.md`, reinforcement-only agents-into-team-chat / shared-agent-memory cluster `raw_only`) + `concepts/ai-infra-operating-economics.md` + `concepts/agent-runtime-vertical-integration.md` + `concepts/honcho.md`. No `19-00-2026-08-22` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Clean same-day BOTH-STATIC no-new-signal afternoon run.** Own `/threads` TOP row AND `/replies` TOP row are both byte-identical to the 08:00 baseline (CK posted nothing between the morning and afternoon passes), and all three live CDP surfaces are byte-identical (content, not just length) to the 08:00 baseline. `/mentions` empty; keyword_search returns only CK's own posts. Nothing genuinely new on any surface. Durable action = this raw transcript + Honcho routing audit + `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 변화 없음 (both `/threads` and `/replies` tops unchanged since 08-22 08:00)

### `/threads` (own posts) — TOP row unchanged
> https://www.threads.com/@ethan13917/post/DcS8W0yE6LG  (id 17963997614965373)
> 2026-08-21T08:47:31 UTC (= 08-21 08:47 KST) TEXT_POST — cross-vendor agent-OAuth / credential-scoping synthesis
> Unchanged since the 08:00 baseline → no new own post this afternoon → raw_only.

Carry-over (unchanged): `DcRvrMwE5s2` (REPOST_FACADE @flota_kr, 08-20T21:37), `DcQJuFPk6HL` (OpenRouter→Stripe M&A 08-20), `DcQF5nQkxmp` (어사이드-브라우저 usage 08-20), `DcNqaTyE63E` (Grok/Cloudflare execution-env 08-19), `DcNon1Lk7R9` (칼퇴/회식 off-axis personal 08-19), `DcLEvAFk6xt` (AI-agent-driven attack surface / Snowflake+GitHub Copilot 08-18), `DcDVFzFkwm5` (open-weight-caught-frontier essay 08-15).

### `/replies` (own replies) — TOP row unchanged
> https://www.threads.com/@ethan13917/post/DcS8eCskwWb — 08-21T08:48 (6/6 of the cross-vendor agent-OAuth thread; 원문 링크 reply)
> Unchanged since the 08:00 baseline → raw_only.
Carry-over reply chain (2/6→5/6) `DcS8c3DE9JV`/`DcS8biIE9xM`/`DcS8aOuE0Hl`/`DcS8XfTk-gT` + off-axis personal (`DcSvrLVE3A6` 인크레더블-아빠, `DcSizcKkxKV` 알아들어먹어야지, `DcQ_q67k6bT` 군대에서-쓴게아닐까요) — all unchanged.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 08-22 08:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical content). Same 반도체/축구/폭염/정치 noise + weak CSS/DevOps carry-over rows. No new AI/agent/infra row.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical content). Sort "Recently starred"; top `piyushsachdeva/CKA-2024` unchanged. No new star row.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical content). Same 오픈AI / Outlook / CUDA / hermes / durable-agent-runtime / 양도소득세 / 법원경매 history rows.

## Filtering notes
- No new content on any surface — nothing to filter. YouTube 반도체/축구/폭염/정치 noise is baseline carry-over, not reported.

## Why this raw exists
Evidence store for the 2026-08-22 19:00 afternoon social pass. Clean same-day both-static no-new-signal run: own `/threads` + `/replies` tops both byte-identical to the same-day 08:00 baseline (no posts between passes), all three CDP surfaces (YouTube 9469 / GitHub stars 90/2781 / Google 5301) byte-identical in content, `/mentions` empty, keyword_search own-posts-only. Durable layer (index.md, concept pages) unchanged.
