---
title: Interest signal collection — 08:00 social run (2026-09-01)
type: raw
created: 2026-09-01
captured_at: 2026-09-01T08:00 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:00 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-01 raw existed before this run. Baseline = most
  recent completed social transcript by mtime = interest-signal-collection-19-00-2026-08-31.md
  (reinforcement-only) plus the same-day 08:00/11:00/22:00 08-31 passes and the 23:00 refinement.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5184000), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY (own-posts-only). Genuinely-new evidence since the 08-31 19:00
  baseline is entirely CK's OWN single-surface Threads activity: (a) a new series PART 3 root
  "사무직이 매주 반복하는 손 아픈 일들이..." (18120302675316701 @ 08-31 11:30 UTC / 20:30 KST) plus its
  20:36-20:38 KST reply chain (파일 자동화 3원칙: 백업/계획/검수) — reinforces CK's own ongoing
  "터미널 에이전트 활용하기" series; (b) an investing reply 18458364325141792 (00:31 KST 09-01) on
  라오어/레버리지/자산배분 — existing investing axis. Both are own single-surface posts on already-tracked
  axes -> own-posts-only-reinforcement -> raw_only, no durable branch. /mentions empty;
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

# Raw Transcript — 2026-09-01 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-01
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0901.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0901.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0901.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0901_0800.json`.
- **Baseline** = most recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-08-31.md` (reinforcement-only: one new GitHub star `miuuyy/codex-chatgpt-web`), plus the 08-31 08:00/11:00/22:00 passes and the 08-31 23:00 whole-day refinement. No `08-00-2026-09-01` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only (own-posts-only).** The only genuinely-new evidence since the 08-31 19:00 baseline is CK's OWN single-surface Threads activity: a new series **PART 3** root (사무직 파일 자동화) + its reply chain, and one **investing reply** (라오어/레버리지/자산배분). Both reinforce already-tracked axes (CK's "터미널 에이전트 활용하기" series; investing) → own-posts-only-reinforcement → `raw_only`, no durable branch. GitHub stars top unchanged (93); Google My Activity byte-identical; YouTube blank shell. Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — new OWN posts only → own-posts reinforcement
### /threads — NEW top row (series PART 3 root)
- **`18120302675316701`** (2026-08-31 11:30:18 UTC / 20:30 KST) — https://www.threads.com/@ethan13917/post/Dcs-73nE2Iq — series PART 3 root (사무직 파일 자동화).
  > 사무직이 매주 반복하는 손 아픈 일들이 있습니다. 폴더에 쌓인 파일 이름 통일, 날짜별 분류, 엑셀 여러 개 합치기, 회의록에…
- Carry (unchanged below new top): 08-30 series PART 2 root `18117970942932395` (Dcp54Vjk2L7); 08-29 series intro `18104744447622673` (DcoFQtPE6iI) + `17902817622557812` (Dcn-LjGE5Wa); older 08-29 view-count-experiment + REPOST_FACADEs; 08-28 carry.

### /replies — NEW rows (PART 3 reply chain + investing reply)
- **`18458364325141792`** (2026-08-31 15:31:15 UTC / 2026-09-01 00:31 KST) — https://www.threads.com/@ethan13917/post/Dctag-EE1oU — investing reply (라오어/레버리지/자산배분).
  > 근데 큰돈이면 더 말이안되는게 자산배분을 해야지 라오어같은 사팔사팔을 한다? 더군다나 레버리지 상품에? …
- **`18149661217539669`** (2026-08-31 11:38:58 UTC / 20:38 KST) — https://www.threads.com/@ethan13917/post/Dcs_7YuE2Y- — PART 3 series-continuation reply (다음 편 영업 직군 예고).
  > 이번 편은 사무직 파일 정리였습니다. 다음 편에서는 영업 직군을 다룹니다. 고객 목록 정리, 이번 주 팔로업할 곳 추리기, 회…
- **`18192652693380202`** (2026-08-31 11:37:36 UTC / 20:37 KST) — https://www.threads.com/@ethan13917/post/Dcs_xPqk5oL — PART 3 safety-3-principles reply.
  > 안전하게 쓰는 3원칙만 기억하면 됩니다. 첫째 원본 백업, 둘째 계획 먼저 확인, 셋째 결과 검수. …
- **`17989225052848733`** (2026-08-31 11:36:24 UTC / 20:36 KST) — https://www.threads.com/@ethan13917/post/Dcs_ojOE_DV — PART 3 meeting-notes-to-tasks reply.
  > 넷째, 회의록에서 할 일 뽑기입니다. 두서없는 회의록에서 실행할 것만 추립니다. …
- Interpretation: the PART 3 chain is CK's own next installment of the ongoing "터미널 에이전트 활용하기" series (office-worker file automation); the investing reply is on his existing investing axis. Both single-surface own posts → own-posts-only-reinforcement, no durable branch.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — his own managed-agents/series/install-doc content (e.g. `Dcn_QHWE3Ws` managed-agents 원문, `Dcp6_EBk6Sq` 공식 설치 문서). No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 08-31 19:00), len 2921. Top row (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), then `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (7,390★), etc. No new star since the 08-31 19:00 baseline.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08-31 19:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes/한컴독스. No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Only genuinely-new evidence = CK's OWN Threads activity (series PART 3 root + reply chain + one investing reply). Own single-surface, already-tracked axes → `raw_only`, no durable page change.
- keyword_search hits all CK's own posts → reinforcement, not discovery.
- GitHub stars top unchanged (93); Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-09-01 08:00 social pass. Own-posts-only reinforcement morning run: CK posted a new series PART 3 installment (사무직 파일 자동화) + investing reply since the 08-31 19:00 baseline; GitHub stars / Google unchanged; YouTube unavailable. Route `raw_only`; no durable page or index change.
