---
title: Interest signal collection — 08:00 social run (2026-08-25)
type: raw
created: 2026-08-25
captured_at: 2026-08-25T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no interest-signal-collection-08-00-2026-08-25
  raw existed before this run. Baseline = most-recent-by-mtime completed social transcript
  interest-signal-collection-19-00-2026-08-24.md (Threads = CK's own Fable-5 model-cost thread,
  own-posts-only-reinforcement; GitHub/YouTube/Google byte-identical). Live Chrome CDP UP (Chrome/147).
  Threads via official Graph API (configured path); token refreshed OK (expires_in 5097919).
  Result: Threads /threads top row UNCHANGED (Fable thread DcayfBaE9An still top; no new own post).
  /replies MOVED — two rows newer than the 19:00 baseline: DcbGj1lk2j2 (2026-08-24 21:50 KST,
  investing/dip-buying-psychology reply, single-surface personal -> raw_only) and Dca9iPvEzq4
  (2026-08-24 20:31 KST, "말이되냐 ㅋㅋㅋ" -> discard noise). /mentions empty; keyword_search all
  CK's own posts (reinforcement). GitHub stars (92), YouTube subscriptions, Google My Activity all
  BYTE-IDENTICAL to the 19:00 cache -> 변화 없음. Net reinforcement-only; durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-25 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-25
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0825.py`). GitHub `/stars` target `DCC3E372969DF26821D01BB9EDE897FE` (`Your stars`, len 2839), YouTube `feed/subscriptions` `AD3496A1A0010E8431A3BD8B456F901E` (len 9469), Google My Activity `30ECB9F39FE6AD6E2CDCB89E0EE7E777` (len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0825.json` — `cmp` vs the 19:00 cache = **byte-identical**.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097919); `/v1.0/me` OK (`ethan13917`). Collector `/tmp/th_collect_0800_0825.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0825_0800.json`.
- **Baseline** = `interest-signal-collection-19-00-2026-08-24.md` (most recent completed social transcript by mtime). No `08-00-2026-08-25` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Threads `/replies` moved (two rows newer than the 19:00 baseline): one investing/dip-buying-psychology personal reply (single-surface → `raw_only`) and one noise reply (→ `discard`). Own `/threads` top row unchanged (no new own post). GitHub stars / YouTube subscriptions / Google My Activity all byte-identical to the 19:00 cache → `변화 없음`.** Net reinforcement-only; durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)

### /threads — 변화 없음 (top row unchanged)
Top row still `DcayfBaE9An` (2026-08-24 18:55 KST, Fable-5 model-cost/adoption 7-part thread), byte-identical to the 19:00 baseline. No new own post since 19:00.

### /replies — NEW rows since 19:00 baseline (raw_only + discard)
> https://www.threads.com/@ethan13917/post/DcbGj1lk2j2 (2026-08-24 21:50 KST) — **raw_only (investing)**
> 하지만 미래가치가 훼손되지 않았다는 전제하에도 저렇게 내려온경우는 해소되지못한 악재 또는 매크로 환경탓에 가격이 하락하는데 손이 나가긴 쉽지않네요… 그래서 투자가 어려운거죠🥲

Interpretation: reply on the psychology of buying a dip when price falls on unresolved bad news / macro — on CK's investing lane but a single-surface personal reply, low durability → `raw_only`.

> https://www.threads.com/@ethan13917/post/Dca9iPvEzq4 (2026-08-24 20:31 KST) — **discard (noise)**
> 말이되냐 ㅋㅋㅋ

Off-axis conversational noise → `discard`.

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search — `agent` 12 / `Claude Code` 1 / `Codex` 4, all `ethan13917`'s OWN posts (reinforcement, not discovery).

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 19:00, still 92)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 19:00 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 19:00, len 9469)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Content diff against the 19:00 cache = IDENTICAL. No feed movement.

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 19:00, len 5301)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Content diff against the 19:00 cache = IDENTICAL. No new search activity.

## Filtering notes
- Only mover is Threads `/replies`: one investing personal reply (`raw_only`) + one noise reply (`discard`).
- Own `/threads` and all three CDP surfaces byte-identical to the 19:00 baseline → explicitly `변화 없음`.

## Why this raw exists
Evidence store for the 2026-08-25 08:00 morning social pass. Two new `/replies` rows appeared since the 19:00 baseline (investing personal reply + noise); neither opens a new durable branch. All other surfaces unchanged. Durable layer (index.md, concept pages) unchanged; reinforcement-only.
