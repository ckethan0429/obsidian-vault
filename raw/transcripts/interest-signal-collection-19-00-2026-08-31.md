---
title: Interest signal collection — 19:00 social run (2026-08-31)
type: raw
created: 2026-08-31
captured_at: 2026-08-31T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-08-31 raw existed before this run. Baseline =
  same-day 08:00 social (interest-signal-collection-08-00-2026-08-31.md, clean both-static
  no-new-signal) + 11:00 new-target (reinforcement-only). Live Chrome CDP UP (Chrome/147).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5144387),
  /v1.0/me OK (ethan13917). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY. One genuinely-new item = a single new GitHub star,
  miuuyy/codex-chatgpt-web (93 stars vs 92 at 08:00; TypeScript 2,979★ — "Use ChatGPT Web
  (incl. Pro) as a native model in the Codex app"). Single-surface on the already-tracked
  Codex/Claude-Code universal-provider-proxy lane (CK already stars lidge-jun/opencodex +
  jung-wan-kim/teamclaude) -> raw_only, no durable branch. Threads both-static: /threads top
  (18117970942932395 @ 08-30 06:48 UTC) AND /replies top (18113537921076628 @ 08-30 06:58 UTC)
  byte-identical to the same-day 08:00 baseline -> CK made no posts since -> 변화 없음.
  /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's own posts
  (reinforcement). Google My Activity byte-identical (len 5301, stale tab) -> 변화 없음.
  YouTube subscriptions blank nav shell (len 17) -> unavailable (access fact).
  Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md and
  all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-31 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-31
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client. GitHub `/stars` first attempts on stale tabs returned no value → created a **fresh `PUT /json/new?https://github.com/stars` target** (`CEE9A6DB…`, hydrated, `Your stars`, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_stars_1900_0831.json` + `~/wiki/.cache/cdp_read_1900_0831.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144387); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0831.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0831_1900.json`.
- **Baseline** = same-day 08:00 social (`interest-signal-collection-08-00-2026-08-31.md`, clean both-static no-new-signal) + 11:00 new-target (reinforcement-only). No `19-00-2026-08-31` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only.** The only genuinely-new item is **one new GitHub star** — `miuuyy/codex-chatgpt-web` (93 stars, was 92 at 08:00) — a Codex model-bridge tool on the already-tracked Codex/Claude-Code universal-provider-proxy lane → single-surface `raw_only`. Threads both surfaces static vs the 08:00 baseline (CK posted nothing since); `/mentions` empty; keyword_search all own posts. Google My Activity byte-identical; YouTube blank shell. Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) GitHub stars (CDP) — ONE new star (raw_only, existing Codex/provider-proxy lane)
Page title `Your stars`, https://github.com/stars, **93 stars** (was 92 at 08:00), len 2921. New top row (Sort: Recently starred):
- **`miuuyy/codex-chatgpt-web`** — https://github.com/miuuyy/codex-chatgpt-web — TypeScript, 2,979★ / 282 forks.
  > Use ChatGPT Web (including Pro) as a native model in the Codex app — with context, tools, streaming and images beyond Codex usage limits.
  - Interpretation: a provider-bridge that routes ChatGPT Web into the Codex app as a native model (bypass usage limits). Same lane CK already stars: `lidge-jun/opencodex` (universal provider proxy for Codex & Claude Code) and `jung-wan-kim/teamclaude` (multi-account Claude proxy). Single-surface reinforcement of the "use-any-model-through-Codex/Claude-Code" proxy axis → `raw_only`, not a new durable branch.
- Carry (unchanged order below the new top): `snflkd/fluent-korean` (1,023★, Claude Code 한국어 output-style), `anthropics/defending-code-reference-harness` (7,390★, threat-modeling/scanning skills + autonomous harness), `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, `nathankim0/clean-architecture-skills`, `lidge-jun/opencodex`.

## 2) Threads (Graph API) — both surfaces static → 변화 없음
### /threads — top row unchanged vs same-day 08:00 baseline
- `18117970942932395` (2026-08-30 06:48:24 UTC / 15:48 KST) — https://www.threads.com/@ethan13917/post/Dcp54Vjk2L7 — series PART 2 root (설치편). SAME as 08:00 top → no new post.
  > ChatGPT나 Claude 앱을 써도 대부분의 궁금증은 풀립니다. 그런데 앱은 방법을 설명해줄 뿐, 내 컴퓨터의 파일을 대신…
- Carry (unchanged): 08-29 series intro `18104744447622673` (22:49 KST) + `17902817622557812` (21:47 KST); 08-29 view-count-experiment-conclusion `18113614858988319` + `18132499333726979`; 08-29 REPOST_FACADEs `17990609628010840` + `17938296684347324`; 08-28 `18334131481261806`.

### /replies — top row unchanged vs same-day 08:00 baseline
- `18113537921076628` (2026-08-30 06:58:04 UTC / 15:58 KST) — https://www.threads.com/@ethan13917/post/Dcp6_EBk6Sq — series PART 2 install-chain tail (공식 설치 문서 원문). SAME as 08:00 top → no new reply.
- Carry (unchanged): the full 08-30 15:49–15:58 KST PART 2 installment reply chain (`18019575365879459`, `17956952580217837`, `17879295261527391`, `17878552104652612`, `18388729084204969`, `17957708061196829`, `17866958892646667`); older 08-29 job-role reply chain carry.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — his own series/managed-agents/investing content. No fresh external discovery.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes/한컴독스 (어제). No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Only genuinely-new item = one GitHub star (`miuuyy/codex-chatgpt-web`), single-surface on an already-tracked lane → `raw_only`, no durable page change.
- Threads both own-surfaces static vs the 08:00 baseline (CK made no posts since) → genuine no-new-signal, not a transport artifact.
- keyword_search hits all CK's own posts → reinforcement, not discovery.
- Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-08-31 19:00 social pass. Reinforcement-only afternoon run: one new GitHub star on the already-tracked Codex/provider-proxy lane; Threads `/threads`+`/replies` tops identical to the same-day 08:00 baseline; Google/YouTube unchanged/unavailable. Route `raw_only`; no durable page or index change.
