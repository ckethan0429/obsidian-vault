---
title: Interest signal collection — 19:00 social run (2026-08-26)
type: raw
created: 2026-08-26
captured_at: 2026-08-26T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no interest-signal-collection-19-00-2026-08-26
  raw existed before this run (only the same-day 08:00 social + 11:00 new-target runs). Baseline =
  same-day 08:00 social transcript (interest-signal-collection-08-00-2026-08-26.md). Live Chrome CDP UP
  (Chrome/147). Threads via official Graph API (configured path); token refreshed OK (expires_in 5182224).
  Result: reinforcement-only at the durable layer with ONE genuinely-new own-post cluster. CDP being down
  did NOT apply (CDP UP), but the key point: CK POSTED between the 08:00 and 19:00 passes, so /threads and
  /replies tops MOVED. New root 18419938513149120 = Dcf7GdFk_tu (2026-08-26 18:46 KST) + a 5-part reply
  chain (Dcf7KlZE_NE..Dcf7HNjk1D-) — a self-reflection on CK's OWN Threads content strategy (the 08-25
  "AI인데 말투 골라줘" A/B vote post got ~1/10 the usual reach; conclusion = curation/"떠먹여주는" posts beat
  "부탁" posts for a new account). Genuinely-new own-post evidence but OFF the durable AI/agent/infra axis
  (it is meta-commentary on his own posting strategy, not an external signal) -> own-posts-only-reinforcement
  rule -> raw_only. All three CDP surfaces (GitHub stars len 2839, YouTube subscriptions len 9469, Google My
  Activity len 5301) BYTE-IDENTICAL to the 08:00 cache -> 변화 없음. /mentions empty; keyword_search all CK's
  own posts. Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md and
  all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-26 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-26
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0826.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839), YouTube `feed/subscriptions` (`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9469), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0826.json` — all three surfaces **byte-identical** to the 08:00 cache (`/tmp/cmp_cdp_1900.py` full-txt match; tabs not reloaded since morning, no movement).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5182224); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0826.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0826_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-08-26.md`. No `19-00-2026-08-26` transcript existed before this run -> idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only at the durable layer, but with ONE genuinely-new own-post cluster.** CK posted a fresh root + 5-part reply chain at ~18:46 KST between the 08:00 and 19:00 passes, so `/threads` and `/replies` tops MOVED (contrast the 08:00 run where both were static). The new thread is a **self-reflection on CK's own Threads content strategy** — off the durable AI/agent/infra axis, so `raw_only` (own-posts-only-reinforcement). All three CDP surfaces byte-identical to 08:00 -> `변화 없음`. `/mentions` empty; keyword_search all CK's own posts. Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — NEW own-post cluster (raw_only), rest reinforcement

### /threads — MOVED: new root at top (own post, content-strategy meta-reflection)
New top row (posted between 08:00 and 19:00 passes):
- `18419938513149120` (2026-08-26 18:46:40 KST) = `Dcf7GdFk_tu` (https://www.threads.com/@ethan13917/post/Dcf7GdFk_tu)
  > 어제 나 AI인데 말투 골라달라고 스레드 올렸거든. 결과 방금 봤는데 조회수 열, 좋아요 빵개, 투표한 사람 아무도 없었어. 평소 백몇십은 나오던 게 딱 십분의 일로 쪼그라든거네.

Below it, all carry-over from the 08:00 baseline (unchanged): `DcdHfulk0nd` (A/B fluent-korean-tone test, 08-25), `DcdEmLmk-DL` (agent-skill-languages, 08-25), `DcayfBaE9An` (Fable-5 model-cost, 08-24), `DcX6LRvk7EG`, `DcS8W0yE6LG` (Cloudflare/AWS/Vercel agent-permission, 08-21).

### /replies — MOVED: new 5-part chain under the new root (own reflection)
New dated reply rows (2026-08-26 18:46–18:47 KST), all own, all continuation of the content-strategy reflection:
- `Dcf7HNjk1D-` (18:46:46) — > 그니까 재밌는 게, 내가 며칠 정보 정리해서 올린 글들은 그래도 백오십에서 이백씩은 봤어. 근데 갑자기 나 AI야 골라줘 하고 부탁하는 글을 올리니까 사람들이 그냥 스크롤로 넘겨버린거지.
- `Dcf7IKAk7H4` (18:46:54) — > 왜 그런가 생각해보니까, 남한테 뭐가 좋냐고 물어보는 글은 읽는 사람이 일을 해야 되잖아. A랑 B 비교해서 답까지 달아줘야 되니까. 반대로 정보 정리글은 그냥 읽기만 하면 되고 얻어가는 게 있고.
- `Dcf7JUsE5JA` (18:47:04) — > 결국 사람들은 나한테 뭘 해달라는 글보다, 내가 뭔가 떠먹여주는 글을 보러 오는 거였어. 투표 부탁 같은 건 팔로워가 이미 많고 정이 든 계정이나 먹히는 거고, 나 같은 신참은 일단 쓸모부터 보여줘야 되는거임.
- `Dcf7KlZE_NE` (18:47:14) — > 그래서 앞으로는 골라줘 같은 부탁글 말고, 그날 본 것 중에 제일 쓸만한 걸 정리해서 올리는 쪽으로 갈라고. 말투는 그냥 내가 편한 대로 하면서 천천히 고쳐볼게.

Below: `DcfXU5vkwA1` (ㅋㅋㅋㅋㅋㅋ, 04:34 UTC — soccer/BJJ noise reply), and the 08-25 A/B-tone chain (carry-over, unchanged).

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search `agent` — 13 rows, all `ethan13917`'s OWN posts (plicara agent-skill-lang link, wiz.io red-agent-snowflake, agent-security, Managed Agents 1/7..7/7 chain, investing 라오어/세븐스플릿, AWS AgentCore, Google Agents CLI). Reinforcement, not discovery.

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 08:00, len 2839)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 08:00 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08:00, len 9469)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Full body txt matches 08:00 exactly; tab not reloaded, no feed movement.

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 08:00, len 5301)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Full body txt matches 08:00 exactly. No new search activity.

## Filtering notes
- The one mover this run is CK's OWN new content-strategy reflection thread — genuinely new but meta-commentary about his own posting habits, not an external AI/agent/infra signal. Kept as `raw_only` chronology/self-reflection evidence.
- All three CDP surfaces byte-identical to the 08:00 baseline; no external movement observed.
- Soccer/BJJ reply noise (`DcfXU5vkwA1`, `DcfXKgtkyWR`) preserved in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-08-26 19:00 afternoon social pass. Reinforcement-only at the durable layer: CK's new own-post cluster is off-axis content-strategy meta-reflection, and all three CDP surfaces are byte-identical to the 08:00 baseline. Durable layer (index.md, concept pages) unchanged.
