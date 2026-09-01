---
title: Interest signal collection — 19:00 social run (2026-09-01)
type: raw
created: 2026-09-01
captured_at: 2026-09-01T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-01 raw existed before this run. Baseline = same-day
  08:00 social (own-posts-only reinforcement) + the 08-31 08:00/11:00/19:00/22:00 passes + 08-31
  23:00 refinement + the 09-01 15:00 curation pass. Live Chrome CDP UP (Chrome/147). Threads via
  official Graph API (configured path); token refresh OK (expires_in 5144398), /v1.0/me OK
  (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY (own-posts-only). The only genuinely-new evidence since the same-day
  08:00 baseline is one new OWN Threads post 18186615706405937 (09-01 02:44 UTC / 11:44 KST) — a
  personal opinion about closed-minded developers and the primacy of communication across
  business/sales/marketing. Off-axis, single-surface own post -> raw_only, no durable branch.
  /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's own posts
  (reinforcement). GitHub stars 93, top unchanged (miuuyy/codex-chatgpt-web) -> 변화 없음. Google My
  Activity byte-identical (len 5301, stale tab) -> 변화 없음. YouTube subscriptions blank nav shell
  (len 17) -> unavailable (access fact). Durable action = this raw transcript + Honcho routing
  audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-01 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-01
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0901.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0901.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144398); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0901.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0901_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-09-01.md` (own-posts-only reinforcement: series PART 3 root + reply chain + investing reply) + the 08-31 08:00/11:00/19:00/22:00 passes + 08-31 23:00 whole-day refinement + the 09-01 15:00 curation pass. No `19-00-2026-09-01` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only (own-posts-only).** The only genuinely-new evidence since the same-day 08:00 baseline is ONE new OWN Threads post (`18186615706405937` @ 09-01 11:44 KST) — a personal opinion about closed-minded developers and the primacy of communication across business/sales/marketing. Off-axis (not on CK's AI/agent/infra/investing durable map), single-surface own post → `raw_only`, no durable branch. The 08:00 baseline's series PART 3 chain and investing reply are now unchanged carry. GitHub stars top unchanged (93); Google My Activity byte-identical (stale tab); YouTube blank shell. Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — one new OWN post → own-posts reinforcement
### /threads — NEW top row (personal opinion, off-axis)
- **`18186615706405937`** (2026-09-01 02:44:10 UTC / 11:44 KST) — https://www.threads.com/@ethan13917/post/DcunhiPE1EH — personal opinion post.
  > 일반화의 오류아님. 거의 대부분 갇혀있다.
  > 꼰대짓하고 잡도리하고.
  > 그 기술이 나올때는 한정된 리소스에서 최대한의 효율을 내려할때인데, 앞뒤가 바뀌어서 좀 많이 안다고 으스대는 지식속에 갇혀있는 개발자.
  > 하지만 분명한건 소수의 트여있는 개발자가 세상을 바꾸고 성공하지.
  > 사업, 영업, 마케팅 모든 사람들이랑 의사소통하는게 제일 중요함.
- Interpretation: opinion/self-narrative row about mindset (closed-minded developers vs open ones) and communication being the most important skill. Not on CK's durable AI/agent/infra/investing axis; single-surface own post → own-posts-only reinforcement, no durable branch.
- Carry (unchanged below new top): 08-31 series PART 3 root `18120302675316701` (Dcs-73nE2Iq, 사무직 파일 자동화); 08-30 PART 2 root `18117970942932395`; 08-29 series intro `18104744447622673` + `17902817622557812`; older 08-29 view-count-experiment + REPOST_FACADEs; 08-28..08-26 carry.

### /replies — 변화 없음 (all carry from 08:00 baseline)
Top rows byte-identical to the 08:00 baseline: investing reply `18458364325141792` (08-31 15:31 UTC / 09-01 00:31 KST, 라오어/레버리지/자산배분), the PART 3 file-automation reply chain (`18149661217539669`, `18192652693380202`, `17989225052848733`, `18121693426844024`, `18352212220217327`, `18092009345136118`, `18124510810873908`), and the 08-30 install-doc chain. No new reply since 08:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — his own managed-agents/series content. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 08-31 19:00 and 09-01 08:00), len 2921. Top row (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), then `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (7,390★). No new star since the 08:00 pass.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 오후 10:38), Hermes/한컴독스. No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Only genuinely-new evidence = one new OWN Threads post (personal opinion, off-axis). Own single-surface → `raw_only`, no durable page change.
- 08:00 baseline's PART 3 series chain + investing reply now unchanged carry.
- keyword_search hits all CK's own posts → reinforcement, not discovery.
- GitHub stars top unchanged (93); Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-09-01 19:00 social pass. Own-posts-only reinforcement afternoon run: CK posted one new off-axis opinion post (developers/communication) since the same-day 08:00 baseline; GitHub stars / Google unchanged; YouTube unavailable. Route `raw_only`; no durable page or index change.
