---
title: Interest signal collection — 08:00 social run (2026-08-04)
created: 2026-08-04
type: raw-transcript
captured_at: 2026-08-04T08:04:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, cdp-down, social, reinforcement, repost-facade]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 social run for 2026-08-04. Idempotency clear: no interest-signal-collection-08-00-2026-08-04.md
  existed. Baseline (by mtime, most-recent completed social transcript) = the same-account
  2026-08-03 19:00 social run (CK's 6-part agent-security thread head DbkpxynEyy9 + replies 1/6..6/6).
  Live Chrome CDP on 127.0.0.1:9222 is DOWN (curl /json/version exit non-zero, no chrome process) →
  YouTube, GitHub /stars, Google My Activity, ChatGPT, Claude, X all UNAVAILABLE (access facts, not
  변화 없음). Threads via official Graph API (configured path); long-lived token refreshed OK
  (expires_in 5184000), /me confirmed ethan13917 (user_id 27173231028946699). GENUINELY-NEW vs the
  08-03 19:00 baseline: TWO new empty REPOST_FACADE rows on own /threads at 08-03 13:34 UTC
  (DblG8smExWc) and 08-03 15:20 UTC (DblTFNfE_Tr). Public og:title recovery yielded the reposted
  author handles — DblG8smExWc = @david.crcl (DAVID; og:description empty, identity/axis unclear),
  DblTFNfE_Tr = @voice.of.freeeedom (자유의 목소리; civic/political). Both post texts unrecoverable
  (JS-rendered, no CDP) → single-surface off-axis feed rotation, kept as raw_only chronology evidence.
  Own /replies top UNCHANGED (still 6/6 DbkpxynEyy9 agent-security thread from 19:00 baseline) — no new
  replies. /mentions empty. keyword_search (agent 10 / Codex 4 / Claude Code 1 / Hermes 0) = 100%
  CK's own posts — reinforcement, no external discovery. Net: reinforcement-only at the durable layer;
  durable action = this raw transcript + Honcho/log audit only; index.md and all concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "TWO NEW empty REPOST_FACADEs since 19:00 baseline: DblG8smExWc (08-03 13:34 UTC, reposted @david.crcl, og:description empty/unrecoverable) + DblTFNfE_Tr (08-03 15:20 UTC, reposted @voice.of.freeeedom 자유의 목소리, civic/political). Post text not recoverable without CDP. Single-surface off-axis feed rotation. Rest of /threads (DbkpxynEyy9 09:20 agent-security thread → 07-22 investing) unchanged vs 19:00 baseline. Reinforcement."}
  - {surface: threads-api-replies, route: raw_only, note: "UNCHANGED vs 19:00 baseline — top still 6/6 Dbkp6TPk-Pt then 5/6..1/6 of the 08-03 09:20 agent-security thread; no new dated replies since. Reinforcement."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent(10)/Codex(4)/Claude Code(1) all @ethan13917's own posts; Hermes=0 — reinforcement of the managed-agents/agent-security axis, no external discovery."}
  - {surface: cdp-youtube, route: discard, note: "CDP down (no /json/version, no chrome process) — unavailable (access fact, not 변화 없음)."}
  - {surface: cdp-github-stars, route: discard, note: "CDP down — unavailable (access fact)."}
  - {surface: cdp-google-myactivity, route: discard, note: "CDP down — unavailable (access fact)."}
  - {surface: cdp-chatgpt-claude-x, route: discard, note: "CDP down — no hydrated tabs reachable; unavailable (access fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-08-03.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
  - log.md
---

# Raw — 08:00 Social Collection (2026-08-04)

Source: Threads official Graph API (`graph.threads.net/v1.0`). Browser/CDP surfaces (YouTube, GitHub, Google, ChatGPT, Claude, X) unavailable — CDP down.
Date: 2026-08-04 (captured ~08:04 KST)
Account: `ethan13917` (씨케이)

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-04.md` existed → collection proceeded.
- Baseline (by mtime, most-recent completed social transcript) = `interest-signal-collection-19-00-2026-08-03.md` (CK's 6-part agent-security thread).
- Live Chrome CDP `127.0.0.1:9222` is **DOWN** (`curl /json/version` failed, no chrome process). YouTube / GitHub / Google / ChatGPT / Claude / X unavailable this run (access facts).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_0800_0804.py` (urllib, no `requests`, cron-safe — no `-c`/heredoc/pipe). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5184000); `/me` confirmed `ethan13917`. Raw JSON cached to `~/wiki/.cache/threads-2026-08-04-0800/` (disposable).

## Novelty summary
**Two new empty REPOST_FACADE rows since the 08-03 19:00 baseline — both single-surface off-axis feed rotation.** CK reposted two posts on 08-03 afternoon (13:34 + 15:20 UTC). Public `og:title` recovery names the reposted authors (`@david.crcl`, `@voice.of.freeeedom`) but `og:description` is empty (JS-rendered, unrecoverable without CDP). One is civic/political (`자유의 목소리`), the other unclear identity — neither on CK's durable AI/agent/infra axis → `raw_only`. Own `/replies` unchanged (still the 6/6 agent-security thread). All browser surfaces unavailable (CDP down). Durable action = this raw transcript + Honcho/log audit only.

## 1) Threads — own `/threads` (API) — TWO NEW repost rows
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **NEW (top):** `[2026-08-03 15:20 UTC]` REPOST_FACADE (empty text) — https://www.threads.com/@ethan13917/post/DblTFNfE_Tr
  > Reposted author (og:title): **자유의 목소리 (@voice.of.freeeedom)** — civic/political. `og:description` empty; post text not recoverable without CDP.
- **NEW (2nd):** `[2026-08-03 13:34 UTC]` REPOST_FACADE (empty text) — https://www.threads.com/@ethan13917/post/DblG8smExWc
  > Reposted author (og:title): **DAVID (@david.crcl)** — identity/axis unclear. `og:description` empty; post text not recoverable without CDP.
- Following rows unchanged vs 19:00 baseline: `[08-03 09:20]` TEXT_POST agent-security thread head (`DbkpxynEyy9`); 07-31 Samsung Galaxy IMAGE (`Dbc78KPk5Ve`); empty REPOST_FACADEs (`Dbc3mYgE4qT`/07-31, `DbUlDcSk_tL`/07-28, `DbT86Mkk5pH`/07-27); 07-22 investing (`DbFW_MMk2OM` 라오어 무한매수법/세븐 스플릿); 07-22 AI/open-weight; 07-21 harness. Reinforcement.

## 2) Threads — own `/replies` (API) — UNCHANGED
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- Top still `[08-03 09:21:16]` **6/6** (`Dbkp6TPk-Pt`) → 5/6 → 4/6 → 3/6 → 2/6 → 1/6 of the 08-03 09:20 agent-security thread, then `[05:00]` self-PR quip (`DbkMHHJk0YA`) and `[04:44]` fullstack-dev definition (`DbkKRJyk8wn`). No new dated replies since the 19:00 baseline. Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post (agent-security thread + prior harness/managed-agents/investing posts). Reinforcement of the `managed-agents-practical-summary` / `ai-infra-operating-economics` axes, not fresh external discovery.

## 5) Unavailable surfaces (CDP down — access facts, not 변화 없음)
- **YouTube** (subscriptions / liked / Watch Later): unavailable — no live Chrome/CDP.
- **GitHub** (stars / trending): unavailable — no CDP.
- **Google** (My Activity / search history): unavailable — no CDP.
- **ChatGPT / Claude / X**: unavailable — no CDP.

## Filtering notes
- The two genuinely-new rows are empty REPOST_FACADEs; author handles recovered via public `og:title` but post text unrecoverable (JS-rendered, CDP down). Both off CK's durable AI/agent/infra axis (civic/political + unclear) → single-surface `raw_only` feed rotation.
- Recovering the handle does not make the row on-axis — the reposted author's identity decides, and both are off-axis.
- Browser-authenticated surfaces recorded as access facts (CDP down), not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-04 08:00 social pass. Threads API was the only grounded surface (CDP down). Two new empty REPOST_FACADEs since the 08-03 19:00 baseline, both single-surface off-axis feed rotation → reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
