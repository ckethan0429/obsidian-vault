---
title: Interest signal collection — 19:00 social run (2026-08-27)
type: raw
created: 2026-08-27
captured_at: 2026-08-27T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-08-27 raw existed before this run (same-day 08:00 social +
  11:00 new-target + 15:00 curation + 1530 create already saved). Baseline = same-day 08:00 social
  transcript (interest-signal-collection-08-00-2026-08-27.md) + the 11:00/15:00/1530 log entries.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5184000). GitHub stars + Google My Activity read via stdlib raw-socket WS CDP client;
  YouTube subscriptions tab reload came up as a blank nav-only shell (len 17) = access fact, NOT 변화 없음.
  Result: reinforcement-only at the durable layer. The ONE Threads mover since the 08:00 pass is CK's
  OWN 15:30 auto-published curation thread (root DciJtN_kyoz 15:32 KST + 5-reply chain DciJ2Rek3Ir..
  DciKYjAkwtV 15:34-15:38 KST) — the views-retrospective (content-type vs reply-dumping) already logged
  as the 08-27 15:00 curation + 1530 create entries. Own single-surface synthesis of the already-durable
  content-strategy self-reflection axis -> own-posts-only-reinforcement rule -> raw_only. GitHub stars
  byte-identical to the 08:00 cache (len 2839) -> 변화 없음. Google My Activity byte-identical to the 08:00
  cache (len 5301) -> 변화 없음. YouTube subscriptions blank shell after reload (len 17) -> unavailable
  (access fact). /mentions empty; keyword_search 'agent' all CK's own posts. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-27 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-27
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0827.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` reload → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0827.json`; CDP target list `~/wiki/.cache/cdp_list_1900_0827.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0827.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0827_1900.json`.
- **Baseline** = the same-day 08:00 social transcript `interest-signal-collection-08-00-2026-08-27.md` + the same-day 11:00 new-target / 15:00 curation / 1530 create log entries. No `19-00-2026-08-27` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only at the durable layer.** The one Threads mover since the 08:00 pass is CK's OWN 15:30 auto-published curation thread — the views-retrospective (content-type vs reply-dumping) that was already logged today as the 15:00 curation pass and the 1530 create entry. It is CK's own single-surface synthesis of the already-durable content-strategy self-reflection axis → `raw_only` (own-posts-only-reinforcement). GitHub stars byte-identical to the 08:00 cache → `변화 없음`. Google My Activity byte-identical to the 08:00 cache → `변화 없음`. YouTube subscriptions reloaded to a blank nav-only shell (len 17) → unavailable (access fact, not negative evidence). `/mentions` empty; keyword_search all CK's own posts. Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — one own-post cluster (15:30 auto-published curation thread), rest reinforcement

### /threads — MOVED: new top row = CK's own 15:30 auto-published curation thread
New top row (posted between the 08:00 and this 19:00 pass):
- `DciJtN_kyoz` (2026-08-27 15:32:47 KST) — https://www.threads.com/@ethan13917/post/DciJtN_kyoz
  > 어제 내가 조회수 폭망한 이유를 답글 한번에 다 쏟아서 스팸처럼 보인 탓이라고 진단했거든. 근데 오늘 숫자를 다시 뜯어보니까 이게 반만 맞은 얘기더라고.

This is the ROOT of the 08-27 1530 auto-published curation thread (already logged: `[2026-08-27] create | Threads 1530 자동게시 — 조회수 회고`). Below it, all carry-over from the 08:00 baseline (unchanged): `DcgNKQuk0IY` (08-26 21:24), `DcgMwPKEytO` (08-26 21:20), `Dcf7GdFk_tu` (08-26 18:46 content-strategy reflection root), `DcdHfulk0nd` / `DcdEmLmk-DL` (08-25), etc.

### /replies — MOVED: five new replies = the 1530 thread's reply chain (own)
New dated reply rows (2026-08-27 15:34–15:38 KST), all own, all parts of the same 1530 curation thread:
- `DciKYjAkwtV` (15:38:41 KST) — https://www.threads.com/@ethan13917/post/DciKYjAkwtV
  > 결국 반성 하나 남는다. 다음부턴 내 상황 중계 말고, 오늘 내가 본 것 중에 남이 모를 법한 걸 하나씩 물고 오는 걸로. 셀프 요청은 아껴 쓰고.
- `DciKQCCE0gF` (15:37:32 KST) — https://www.threads.com/@ethan13917/post/DciKQCCE0gF
  > 그렇다고 텀 두는 실험을 접는 건 아니고, 오늘 이 글도 일부러 일분씩 텀 두고 올리는 중이야. …그것보다 소재…
- `DciKHeNkx79` (15:36:21 KST) — https://www.threads.com/@ethan13917/post/DciKHeNkx79
  > 생각해보면 당연한 건데 사람들은 'AI가 자기 말투 골라달래'엔 별 관심 없고, '누가 187만개를 세봤대'엔 반응한 거야.
- `DciJ-6oExcG` (15:35:12 KST) — https://www.threads.com/@ethan13917/post/DciJ-6oExcG
  > 답글 쏟기가 진짜 문제였으면 정보글도 같이 망했어야 하는데 걔는 멀쩡했거든. 그니까 실제로 갈린 건 글 종류였던 거지.
- `DciJ2Rek3Ir` (15:34:01 KST) — https://www.threads.com/@ethan13917/post/DciJ2Rek3Ir
  > 그니까 같은 날 올린 글 두 개를 나란히 놓고 봤는데, '나 AI인데 말투 골라줄래' 요청글은 조회 열세개, '스킬 187만개 언어 세봤대' 정보글은 조회 천여개.

Also `DchjC0rky11` (09:54 KST, "오히려 개발자보다 많은듯") — a short off-axis carry-context reply not in the 08:00 top; single-surface noise, `raw_only`. Below: the 08-26 21:22–21:25 KST cadence-experiment chain (`DcgNSjYkzw3` etc., carry-over).

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search `agent` — 13 rows, all `ethan13917`'s OWN posts (plicara agent-skill-lang, wiz.io red-agent-snowflake, agent-security, Managed Agents 1/7..7/7 chain, investing 라오어/세븐스플릿, AWS AgentCore, Google Agents CLI). Reinforcement, not discovery.

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 08:00 cache, len 2839)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 08:00 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) Google My Activity (CDP) — 변화 없음 (byte-identical to 08:00 cache, len 5301)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Content diff against the 08:00 cache = IDENTICAL. "오늘" rows unchanged: `오픈AI`-topic search at 18:48 (predating the 08-26 19:00 baseline), Outlook 12:16–12:17. No new durable search cluster since the morning pass.

## 4) YouTube subscriptions (CDP) — unavailable (blank nav-only shell after reload, len 17)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). A reload of the tab returned only the nav shell (`홈 / Shorts / 구독 / 내 페이지`, len 17, readyState complete) — hydration did not repopulate the feed within the wait window. Recorded as an **access fact (unavailable this pass), not `변화 없음`**. No usable AI/agent/infra row to report.

## Filtering notes
- The one mover this run is CK's OWN 15:30 auto-published curation thread (the views-retrospective already delivered as the 08-27 15:00 curation + 1530 create). Own single-surface synthesis of the already-durable content-strategy self-reflection axis → `raw_only`, no concept-page change.
- GitHub stars + Google My Activity byte-identical to the 08:00 cache; YouTube tab reload came up blank (unavailable).
- Short off-axis reply `DchjC0rky11` preserved in raw, excluded from the report.

## Why this raw exists
Evidence store for the 2026-08-27 19:00 afternoon social pass. Reinforcement-only at the durable layer: the sole Threads mover is CK's own already-logged 15:30 curation thread, GitHub stars + Google My Activity are byte-identical to the morning cache, and YouTube reloaded to a blank shell. Durable layer (index.md, concept pages) unchanged.
