---
title: Interest signal collection — 08:00 social run (2026-08-20)
type: raw
created: 2026-08-20
captured_at: 2026-08-20T08:02 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-20 raw existed before this run.
  Baseline = most-recent completed social transcript by mtime =
  interest-signal-collection-19-00-2026-08-19.md (08-19 19:00 social).
  Clean cross-day BOTH-STATIC no-new-signal run: own /threads top
  (18371607988224792, Grok execution-environment thread 08-19T07:34) AND
  /replies top (18173142250435192, "ㅈㄴ싸질러놓네" 08-19T09:14) are BOTH
  byte-identical to the 19:00 baseline — CK made no new posts between passes.
  /mentions 0; keyword_search (agent/Claude Code/Codex) = all CK's OWN posts
  (reinforcement, not discovery). Live Chrome CDP UP (Chrome/147): GitHub stars
  (90, len 2781), YouTube subscriptions (len 9469), Google My Activity
  (len 5301) ALL byte-identical to the 19:00 baseline → 변화 없음.
  Genuine no-new-signal. Durable action = this raw transcript + Honcho routing
  audit + log.md entry only; index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-20 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-20
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0820.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_0800_0820.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0820.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0820_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-19.md` (08-19 19:00 social). No `08-00-2026-08-20` transcript existed before this run → idempotency guard clear, collection proceeded.

## Novelty summary
**Clean cross-day BOTH-STATIC no-new-signal morning run.** Own `/threads` newest row AND `/replies` newest row are both byte-identical to the 19:00 baseline (CK made no posts between passes). All three live CDP surfaces (GitHub stars, YouTube subscriptions, Google My Activity) byte-identical to the 19:00 baseline. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 변화 없음 (both surfaces static since 08-19 19:00)
### `/threads` (own posts) — top row unchanged
> https://www.threads.com/@ethan13917/post/DcNqaTyE63E  (id 18371607988224792)
> 2026-08-19T07:34 UTC TEXT_POST —
> "이번달 grok 봇마다 클라우드 컴퓨터 하나씩 붙여줬고, 클라우드플레어는 그 컴퓨터를 쪼개서 팔기 시작했네. 모델 성능 자랑은 이제 좀 끝난거같고, 누가 실행환경을 먹냐의 싸움인 듯."

Below carry-over identical to the 19:00 baseline: `18335069719286024` (08-18 AI-agent-security thread), `18148967395523856` (오픈웨이트가 프론티어를 따라잡은 여름, 08-15), `18329220475275183` (미중 AI 모델 전쟁, 08-12), `18099596678203517` ([5일 30만원 챌린지 Day 2], 08-12).

### `/replies` (own replies) — top row unchanged
> id 18173142250435192 — 2026-08-19T09:14 — "ㅈㄴ싸질러놓네" (off-axis personal, carry-over)
Below carry-over identical to baseline: the 08-19T07:34 6-part Grok/Cloudflare reply chain (`18079245794356703` 원문 링크, `18069265538494593`, `18031670738836246`, `18083737178255815`, …) + personal reply noise `18024582842885045` ("하 ... 진짜...").

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows, all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 19:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical to the 08-19 19:00 baseline). Same 반도체(삼전닉스/코스피)/축구협회 성접대/폭염/정치 noise + weak CSS-2026 (개발자 정신건강) / Piyush "Stop telling freshers AI can't do DevOps" carry-over rows.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical to baseline). Sort "Recently starred"; top `piyushsachdeva/CKA-2024` unchanged, then carry-over `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill` (all previously-starred, no new star row).

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical to baseline). Tab has not refreshed since the earlier capture; same 오픈AI / Outlook / CUDA / hermes / durable-agent-runtime / 양도소득세 / 법원경매 history rows.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회/폭염/정치 noise (baseline carry-over); off-axis personal Threads replies (kept as raw evidence, not reported as signal).
- No genuinely-new on-axis item on any surface this pass.

## Why this raw exists
Evidence store for the 2026-08-20 08:00 morning social pass. **Clean cross-day both-static no-new-signal run:** own `/threads` top + `/replies` top both byte-identical to the 08-19 19:00 baseline (no posts made between passes), and all three CDP surfaces (YouTube 9469, GitHub stars 90, Google 5301) byte-identical. `/mentions` empty; keyword_search = own posts only. Durable layer (index.md, concept pages) unchanged.
