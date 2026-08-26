---
title: Interest signal collection — 08:00 social run (2026-08-27)
type: raw
created: 2026-08-27
captured_at: 2026-08-27T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time. Idempotency clear: no interest-signal-collection-08-00-2026-08-27
  raw existed before this run. Baseline = the most-recent completed social transcript = same-day-prior
  08-26 19:00 social run (interest-signal-collection-19-00-2026-08-26.md). Live Chrome CDP UP (Chrome/147);
  hydrated GitHub stars / Google My Activity / YouTube subscriptions tabs read via stdlib raw-socket WS CDP
  client. Threads via official Graph API (configured path); token refreshed OK (expires_in 5135386).
  Result: reinforcement-only at the durable layer with ONE genuinely-new own-post cluster. CK POSTED
  between the 08-26 19:00 and this 08:00 pass, so /threads and /replies tops MOVED: two new roots
  (DcgMwPKEytO 21:20 KST + DcgNKQuk0IY 21:24 KST) and three new replies (DcgM4obEygu 21:22, DcgNBgdk9RT
  21:23, DcgNSjYkzw3 21:25) — all a CONTINUATION of the same content-strategy self-reflection thread from
  the 19:00 run, now explicitly testing the "space each post ~1 min apart to look human / win algorithm
  reach" hypothesis. Genuinely-new own-post evidence but OFF the durable AI/agent/infra axis (meta-commentary
  on his own posting cadence, not an external signal) -> own-posts-only-reinforcement rule -> raw_only.
  GitHub stars byte-identical to the 08-26 cache (len 2839) -> 변화 없음. YouTube subscriptions tab stale
  (len 9469, same as 08-26; not reloaded) -> 변화 없음. Google My Activity only low-signal generic rows
  (Outlook, an 오픈AI search at 18:48 already before the 19:00 baseline) -> effectively 변화 없음. /mentions
  empty; keyword_search 'agent' all CK's own posts. Durable action = this raw transcript + Honcho routing
  audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-27 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-27
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0827.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` (`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9469). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0827.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5135386); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0827.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0827_0800.json`.
- **Baseline** = the most-recent completed social transcript = the prior-day 08-26 19:00 social run `interest-signal-collection-19-00-2026-08-26.md`. No `08-00-2026-08-27` transcript existed before this run -> idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only at the durable layer, with ONE genuinely-new own-post cluster.** Between the 08-26 19:00 pass and this 08:00 pass CK posted a fresh 2-root + 3-reply cluster (~21:20–21:25 KST on 08-26), so `/threads` and `/replies` tops MOVED. It is a **direct continuation of the 19:00 content-strategy self-reflection thread** — now explicitly running the experiment of spacing each post ~1 minute apart to look human and (hypothetically) win algorithm reach. Off the durable AI/agent/infra axis -> `raw_only` (own-posts-only-reinforcement). GitHub stars byte-identical to the 08-26 cache -> `변화 없음`. YouTube subscriptions tab stale/unchanged (len 9469) -> `변화 없음`. Google My Activity only low-signal generic rows -> effectively `변화 없음`. `/mentions` empty; keyword_search all CK's own posts. Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — NEW own-post cluster (raw_only), rest reinforcement

### /threads — MOVED: two new roots at top (own posts, content-cadence experiment)
New top rows (posted between the 08-26 19:00 and this 08:00 pass):
- `DcgNKQuk0IY` (2026-08-26 21:24:29 KST) — https://www.threads.com/@ethan13917/post/DcgNKQuk0IY
  > 한 번에 쏟아낸 거랑 천천히 나눠 올린 거랑 조회수가 다르게 나오면, 내 가설이 맞는 거고. 다음부터는 계속 이렇게 텀 두고 올릴라고.
- `DcgMwPKEytO` (2026-08-26 21:20:56 KST) — https://www.threads.com/@ethan13917/post/DcgMwPKEytO
  > 어제 그 조회수 폭망한 스레드, 오늘 곰곰이 생각해보니까 내용 문제만은 아닌 거 같아. 내가 하위 답글까지 한 번에 다다다 올려버려서 알고리즘이 봇으로 봤을 수도 있겠더라고.

Below them, all carry-over from the 08-26 19:00 baseline (unchanged): `Dcf7GdFk_tu` (content-strategy reflection root, 08-26 18:46), `DcdHfulk0nd` (A/B fluent-korean-tone test, 08-25), `DcdEmLmk-DL` (agent-skill-languages, 08-25), `DcayfBaE9An` (Fable-5 model-cost, 08-24), `DcX6LRvk7EG` (08-23), `DcS8W0yE6LG` (Cloudflare/AWS/Vercel agent-permission, 08-21).

### /replies — MOVED: three new replies under the new roots (own, cadence experiment)
New dated reply rows (2026-08-26 21:22–21:25 KST), all own, all continuation of the content-cadence experiment:
- `DcgNSjYkzw3` (21:25:37 KST) — https://www.threads.com/@ethan13917/post/DcgNSjYkzw3
  > 사실 이게 맞으면 좀 웃긴 게, 알고리즘한테 잘 보이려고 일부러 사람인 척 천천히 올리는 셈이잖아. 뭐 어쩌겠어, 규칙이 그렇다는데.
- `DcgNBgdk9RT` (21:23:17 KST) — https://www.threads.com/@ethan13917/post/DcgNBgdk9RT
  > 그래서 이번엔 실험을 해보려고. 이 스레드부터 각 글 사이에 1분씩 텀을 두고 올리는 중이야. 지금 네가 이걸 읽고 있으면 딜레이가 먹힌 거고.
- `DcgM4obEygu` (21:22:05 KST) — https://www.threads.com/@ethan13917/post/DcgM4obEygu
  > 그니까 사람이 글 쓰면 메인 올리고, 생각하고, 답글 달고 이렇게 시간이 걸리잖아. 근데 나는 5개든 7개든 몇 초 만에 쫙 올려버리니까.

Below: the 08-26 18:46–18:47 KST content-strategy chain (`Dcf7HNjk1D-`..`Dcf7KlZE_NE`, carry-over), `DcfXU5vkwA1` (ㅋㅋㅋㅋㅋㅋ — soccer/BJJ noise reply, carry-over).

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search `agent` — 13 rows, all `ethan13917`'s OWN posts (plicara agent-skill-lang link, wiz.io red-agent-snowflake, agent-security, Managed Agents 1/7..7/7 chain, investing 라오어/세븐스플릿, AWS AgentCore, Google Agents CLI). Reinforcement, not discovery.

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 08-26 cache, len 2839)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 08-26 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) YouTube subscriptions (CDP) — 변화 없음 (stale tab, len 9469)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Tab still shows the older (8/6-dated) hydrated feed, not reloaded since the prior social run; length 9469 unchanged. Visible rows are the usual mix of KR stock/반도체 (장르만 여의도, T3chfeed), soccer-association scandal (정몽규/이임생), and generic entertainment — no new AI/agent/infra row worth reporting. Kept in raw, excluded from the report.

## 4) Google My Activity (CDP) — effectively 변화 없음 (only low-signal generic rows)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). "오늘/어제" rows are low-signal generic: an `오픈AI`-topic search at 오후 6:48 (18:48, before the 08-26 19:00 baseline), `Outlook` visits/searches at 12:16–12:17, `한컴독스`/`한글 웹`, `Hermes Agent 한국어 문서`/`hermes` (already prior). No new durable search cluster.

## Filtering notes
- The one mover this run is CK's OWN new content-cadence experiment cluster — genuinely new but meta-commentary on his own Threads posting habits (directly testing the ~1-min inter-post delay to look human), not an external AI/agent/infra signal. Kept as `raw_only` chronology/self-reflection evidence; it operationally mirrors the `--delay 60` hypothesis in the threads-api-publishing workflow.
- GitHub stars byte-identical; YouTube tab stale; Google My Activity only generic low-signal rows.
- Soccer/BJJ/entertainment noise (YouTube feed, `DcfXU5vkwA1`) preserved in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-08-27 08:00 morning social pass. Reinforcement-only at the durable layer: CK's new own-post cluster is an off-axis content-cadence experiment (continuation of the 08-26 19:00 self-reflection thread), and all three CDP surfaces are unchanged. Durable layer (index.md, concept pages) unchanged.
