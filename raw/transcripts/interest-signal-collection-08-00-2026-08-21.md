---
title: Interest signal collection — 08:00 social run (2026-08-21)
type: raw
created: 2026-08-21
captured_at: 2026-08-21T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-21 raw existed before this run;
  latest transcript by mtime was 08-20 19:00 social run → that is the baseline.
  Live Chrome CDP UP (Chrome/147). GitHub stars (90, len 2781), YouTube
  subscriptions (len 9469), Google My Activity (len 5301) ALL byte-identical
  to the 08-20 19:00 baseline → 변화 없음 on all three CDP surfaces. Threads via
  official Graph API (configured path): one NEW empty REPOST_FACADE
  (DcRvrMwE5s2, posted 08-21T06:37 KST) whose og:title recovered the reposted
  author @flota_kr (플로타) while og:description stayed empty — single-surface
  off-axis feed rotation, text not recoverable → raw_only. Three NEW /replies
  rows (군대 관련, 탈락 농담, 찍어주세요) all off-axis personal chatter → raw_only.
  Own /threads TEXT_POST rows unchanged since the 19:00 baseline (OpenRouter→
  Stripe M&A thread + 어사이드-브라우저 usage note both carry-over). /mentions 0;
  keyword_search (agent/Claude Code/Codex) all CK's OWN posts (reinforcement).
  Net reinforcement-only / no new durable signal. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only; index.md and all
  concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-21 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-21
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0821.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_0800_0821.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097633); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0821.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0821_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript = `interest-signal-collection-19-00-2026-08-20.md` (08-20 19:00). No `08-00-2026-08-21` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only / no new durable signal.** Threads surfaced one NEW empty `REPOST_FACADE` (author @flota_kr recovered via og:title, text unrecoverable, off-axis) and three NEW off-axis personal `/replies`. All three live CDP surfaces byte-identical to the 08-20 19:00 baseline → 변화 없음. Own `/threads` TEXT_POST rows unchanged since baseline. Durable action = this raw transcript + Honcho routing audit + `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 1 NEW repost facade + 3 NEW off-axis replies (all raw_only)

### `/threads` (own posts) — top row is NEW (empty REPOST_FACADE), rest carry-over
**NEW — empty REPOST_FACADE (single-surface, off-axis, text unrecoverable)**
> https://www.threads.com/@ethan13917/post/DcRvrMwE5s2  (id 18089635355388247)
> 2026-08-20T21:37 UTC (= 2026-08-21 06:37 KST) REPOST_FACADE — text: (empty)
> Public og:title recovery → reposted author `플로타 (@flota_kr)`; og:description empty (post text not recoverable without CDP).
> → Single-surface off-axis feed rotation; handle recovered but off CK's AI/agent/infra axis. `raw_only`.

Carry-over (unchanged since the 19:00 baseline):
> `18113497747993517` (OpenRouter→Stripe M&A thread 08-20T06:46, DcQJUFPk6HL) — already raw_only reinforcement
> `18117277813854345` (어사이드-브라우저 usage note 08-20T06:13, DcQF5nQkxmp) — already raw_only reinforcement
> `18371607988224792` (Grok/Cloudflare execution-environment 08-19T07:34), `17942564835312167` (칼퇴/회식 off-axis 08-19), `18335069719286024` (AI-agent-security 08-18)

### `/replies` (own replies) — 3 NEW rows, all off-axis personal chatter
> `18112868668950263` — 2026-08-20T14:37 "군대에서 쓴게아닐까요" (off-axis)
> `18007356587984540` — 2026-08-20T14:32 "너무 타당하고 논리적이세요. 탈락!" (off-axis, joke)
> `18105760631182853` — 2026-08-20T11:13 "찍어주세요!" (off-axis)
> Below: OpenRouter 원문/추론-비용 reply-chain rows (carry-over from the 19:00 baseline).
> → All three new replies off-axis personal → `raw_only`.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 08-20 19:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical). Same 반도체/축구/폭염/정치 noise + weak CSS/DevOps carry-over rows. No new AI/agent/infra row.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical). Sort "Recently starred"; top `piyushsachdeva/CKA-2024` unchanged, then `pbakaus/impeccable`, `lyogavin/airllm` carry-over. No new star row.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical). Same 오픈AI / Outlook / CUDA / hermes / durable-agent-runtime / 양도소득세 / 법원경매 history rows.

## Filtering notes
- Excluded from report: YouTube 반도체/축구/폭염/정치 noise (baseline carry-over); off-axis personal Threads replies/repost (kept as raw evidence, not reported as durable signal).
- The one new REPOST_FACADE and three new replies are genuinely-new own-surface evidence but off CK's durable AI/agent/infra axis → reported as reinforcement, not new durable signal.

## Why this raw exists
Evidence store for the 2026-08-21 08:00 morning social pass. Reinforcement-only: one new empty REPOST_FACADE (@flota_kr recovered via og:title, off-axis) + three new off-axis personal replies; all three CDP surfaces (YouTube 9469, GitHub stars 90/2781, Google 5301) byte-identical to the 08-20 19:00 baseline. /mentions empty; keyword_search = own posts only. Durable layer (index.md, concept pages) unchanged.
