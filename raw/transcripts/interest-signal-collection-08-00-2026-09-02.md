---
title: Interest signal collection — 08:00 social run (2026-09-02)
type: raw
created: 2026-09-02
captured_at: 2026-09-02T08:00 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:00 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-02 raw existed before this run. Baseline = most-recent
  completed social transcript by mtime = interest-signal-collection-19-00-2026-09-01.md
  (own-posts-only reinforcement) + the 09-01 08:00 social + 09-01 22:00 new-target + 09-01 23:00
  whole-day refinement. Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured
  path); token refresh OK (expires_in 5097611), /v1.0/me OK (ethan13917, id 27173231028946699).
  GitHub stars + Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client.
  Result: BOTH-STATIC NO-NEW-SIGNAL. Own /threads top (18186615706405937, 09-01 11:44 KST personal
  opinion) AND /replies top (18458364325141792, investing reply) are BOTH byte-identical to the
  09-01 19:00 social baseline — CK made no new posts between passes. /mentions empty;
  keyword_search agent/Claude Code/Codex all top-hit CK's own posts (reinforcement). GitHub stars
  93, top unchanged (miuuyy/codex-chatgpt-web) -> 변화 없음. Google My Activity byte-identical
  (len 5301, stale tab) -> 변화 없음. YouTube subscriptions blank nav shell (len 17) -> unavailable
  (access fact). Durable action = this raw transcript + Honcho routing audit + log.md entry only.
  index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-02 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-02
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0902.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0902.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097611); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0902.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0902_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-09-01.md` (own-posts-only reinforcement: one new off-axis opinion post + static carry) + the 09-01 08:00 social (series PART 3 + investing reply) + 09-01 22:00 new-target + 09-01 23:00 whole-day refinement. No `08-00-2026-09-02` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Both-static no-new-signal.** Own `/threads` top row (`18186615706405937`, 09-01 11:44 KST personal-opinion post) AND `/replies` top row (`18458364325141792`, investing reply) are BOTH byte-identical to the 09-01 19:00 social baseline — CK posted nothing between passes. GitHub stars 93 top unchanged; Google My Activity byte-identical (stale tab); YouTube blank shell. Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both-static → no new signal
### /threads — top unchanged vs 09-01 19:00 baseline
- Top row still **`18186615706405937`** (2026-09-01 02:44:10 UTC / 11:44 KST) — https://www.threads.com/@ethan13917/post/DcunhiPE1EH — personal opinion post (closed-minded developers / communication primacy). Same as the 19:00 baseline.
- Carry below (unchanged): 08-31 series PART 3 root `18120302675316701` (Dcs-73nE2Iq, 사무직 파일 자동화); 08-30 PART 2 root `18117970942932395`; 08-29 series intro `18104744447622673` + `17902817622557812`; older 08-29 view-count-experiment posts + REPOST_FACADE `17990609628010840`.

### /replies — top unchanged vs 09-01 19:00 baseline
- Top row still **`18458364325141792`** (2026-08-31 15:31:15 UTC / 09-01 00:31 KST) — investing reply (라오어/레버리지/자산배분). Below it the 08-31 PART 3 file-automation reply chain (`18149661217539669`, `18192652693380202`, `17989225052848733`, `18121693426844024`, `18352212220217327`, `18092009345136118`, `18124510810873908`). All byte-identical to the baseline. No new reply since 19:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — his own managed-agents/series/installation content (Anthropic managed-agents 원문, Claude Code/Codex 설치 문서, 6/6 agent-security, 라오어 무한매수법, etc.). No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-01 08:00/19:00), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (Python 7,390★), then piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, zhaoxuya520/reverse-skill, virattt/ai-hedge-fund, nathankim0/clean-architecture-skills, lidge-jun/opencodex. No new star since the 09-01 passes.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 09-01 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오늘 오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 오후 10:38), Hermes/한컴독스. No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- No genuinely-new evidence on any surface. Both Threads tops static vs the 19:00 baseline (CK posted nothing overnight); GitHub stars top unchanged (93); Google My Activity byte-identical; YouTube blank shell.
- keyword_search hits all CK's own posts → reinforcement, not discovery.

## Why this raw exists
Evidence store for the 2026-09-02 08:00 social pass. Clean both-static no-new-signal morning run: own `/threads` AND `/replies` tops both identical to the 09-01 19:00 baseline, all browser surfaces static/unavailable. Route `raw_only`; no durable page or index change.
