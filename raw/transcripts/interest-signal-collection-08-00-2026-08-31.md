---
title: Interest signal collection — 08:00 social run (2026-08-31)
type: raw
created: 2026-08-31
captured_at: 2026-08-31T08:00 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:00 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-08-31 raw existed before this run. Baseline =
  most-recent completed social transcript by mtime = same-day-prior 08-30 19:00 social
  (interest-signal-collection-19-00-2026-08-30.md). Live Chrome CDP UP (Chrome/147).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5184000),
  /v1.0/me OK (ethan13917). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client.
  Result: CLEAN NO-NEW-SIGNAL (both-static). Threads /threads top (Dcp54Vjk2L7 @ 06:48 UTC)
  AND /replies top (Dcp6_EBk6Sq @ 06:58 UTC) both byte-identical to the 08-30 19:00 baseline —
  CK made no new posts overnight. /mentions empty; keyword_search agent/Claude Code/Codex all
  top-hit CK's own posts (reinforcement). GitHub stars byte-identical (len 2839, 92 stars) →
  변화 없음. Google My Activity byte-identical (len 5301, stale tab) → 변화 없음. YouTube
  subscriptions blank nav-only shell (len 17) → unavailable (access fact).
  Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md and
  all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-31 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-31
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0831.py`, `/tmp/cdp_github_0800_0831.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars — first stars target timed out, second hydrated), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0831.json` + `~/wiki/.cache/cdp_github_0800_0831.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0831.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0831_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-30.md` (08-30 19:00 social). No `08-00-2026-08-31` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Clean no-new-signal (both-static).** Threads `/threads` newest row AND `/replies` newest row are BOTH byte-identical to the 08-30 19:00 baseline — CK posted nothing overnight, so both surfaces are unchanged. `/mentions` empty; keyword_search all own posts (reinforcement). GitHub stars, Google My Activity byte-identical; YouTube blank shell (unavailable). Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both surfaces static → 변화 없음
### /threads — top row unchanged vs 08-30 19:00 baseline
- `Dcp54Vjk2L7` (2026-08-30 06:48:24 UTC / 15:48 KST) — https://www.threads.com/@ethan13917/post/Dcp54Vjk2L7 — series PART 2 root (설치편). SAME as baseline top → no new post.
  > ChatGPT나 Claude 앱을 써도 대부분의 궁금증은 풀립니다. 그런데 앱은 방법을 설명해줄 뿐, 내 컴퓨터의 파일을 대신…
- Carry (unchanged): 08-29 series intro DcoFQtPE6iI (22:49 KST) + Dcn-LjGE5Wa (21:47 KST); 08-29 view-count-experiment-conclusion DcnVlR9Exxe + DcnTKuXk4XA; 08-29 REPOST_FACADEs DcnTHbJExNu + DcmwNuJkws9; 08-28 DckugrYkwd3.

### /replies — top row unchanged vs 08-30 19:00 baseline
- `Dcp6_EBk6Sq` (2026-08-30 06:58:04 UTC / 15:58 KST) — https://www.threads.com/@ethan13917/post/Dcp6_EBk6Sq — series PART 2 install-chain tail (공식 설치 문서 원문). SAME as baseline top → no new reply.
- Carry (unchanged): the full 08-30 15:49–15:58 KST PART 2 installment reply chain (Dcp62ifE3Ft, Dcp6uEUEw-E, Dcp6lg3E5LU, Dcp6b-8E2U9, Dcp6TdfE-8y, Dcp6K3iE9CK, Dcp6CO2k0v8).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — 'agent' 14 rows, 'Claude Code' 5 rows, 'Codex' 8 rows, all his own series/managed-agents content. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08-30 19:00 / 08:00 cache. Recently-starred order unchanged: `snflkd/fluent-korean` (709★, Claude Code 한국어 output-style), `anthropics/defending-code-reference-harness` (7,351★, threat-modeling/scanning skills + autonomous harness), `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, `nathankim0/clean-architecture-skills`, `lidge-jun/opencodex` (Codex/Claude Code universal provider proxy), `jung-wan-kim/teamclaude` (multi-account Claude proxy). No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08-30 19:00 / 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes/한컴독스 (어제). No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Both Threads own-surfaces static vs the 08-30 19:00 baseline (CK made no overnight posts) → no new own-post evidence; genuine no-new-signal, not a transport artifact.
- keyword_search hits are all CK's own posts → reinforcement, not new discovery.
- GitHub stars / Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-08-31 08:00 social pass. Clean both-static no-new-signal morning run: Threads `/threads`+`/replies` tops identical to the 08-30 19:00 baseline, every CDP surface unchanged or unavailable. Route `raw_only`; no durable page or index change.
