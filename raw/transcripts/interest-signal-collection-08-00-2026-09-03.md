---
title: Interest signal collection — 08:00 social run (2026-09-03)
type: raw
created: 2026-09-03
captured_at: 2026-09-03T08:00 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:01 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-03 raw existed before this run. Baseline = most-recent
  completed social transcript by mtime = interest-signal-collection-19-00-2026-09-02.md
  (own-posts-only reinforcement: fresh 영업-automation series installment) + the 09-02 08:00 social
  (both-static) + 09-02 11:00/22:00 new-target + 09-02 23:00 whole-day refinement. Live Chrome CDP
  UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5109308), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client. Result: CROSS-DAY BOTH-STATIC
  NO-NEW-SIGNAL. Own /threads top (18076240841372243, 09-02 11:22 KST 영업 목록 자동화 root) AND
  /replies top (17987633220027373, 09-02 11:30 KST series-closer) are BOTH byte-identical to the
  09-02 19:00 social baseline — CK made no new posts between passes. /mentions empty;
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

# Raw Transcript — 2026-09-03 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-03
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0903.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_0800_0903.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5109308); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0903.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0903_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-09-02.md` (own-posts-only reinforcement: fresh 영업 직군 자동화 series installment + 7-part reply chain) + the 09-02 08:00 social (both-static) + 09-02 11:00/22:00 new-target + 09-02 23:00 whole-day refinement. No `08-00-2026-09-03` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Cross-day both-static no-new-signal.** Own `/threads` top row (`18076240841372243`, 09-02 11:22 KST 영업 목록 자동화 series root) AND `/replies` top row (`17987633220027373`, 09-02 11:30 KST series-closer teasing 마케터) are BOTH byte-identical to the 09-02 19:00 social baseline — CK posted nothing between passes. GitHub stars 93 top unchanged; Google My Activity byte-identical (stale tab); YouTube blank shell. Route the whole run `raw_only`. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both-static → no new signal
### /threads — top unchanged vs 09-02 19:00 baseline
- Top row still **`18076240841372243`** (2026-09-02 02:22:54 UTC / 11:22 KST) — https://www.threads.com/@ethan13917/post/DcxJ4bokzrY — TEXT_POST, 영업 목록 자동화 series root. Same as the 19:00 baseline.
- Carry below (unchanged): `18186615706405937` (09-01 11:44 KST personal opinion, DcunhiPE1EH); 08-31 series PART 3 root `18120302675316701` (사무직 파일 자동화); 08-30 PART 2 `18117970942932395`; 08-29 series intro `18104744447622673` + `17902817622557812`; older 08-29 view-count-experiment posts (`18113614858988319`, `18132499333726979`).

### /replies — top unchanged vs 09-02 19:00 baseline
- Top row still **`17987633220027373`** (2026-09-02 02:30:59 UTC / 11:30 KST) — https://www.threads.com/@ethan13917/post/DcxKzoKk9tC — series-closer ("지난 편은 사무직의 파일 정리 자동화였고, 이번 편은 영업의 고객 관리와 제안서였습니다. 다음 편은 마케터입니다."). Below it the same 09-02 6-part 영업 reply chain (`17969990037151850`, `18015340607934286`, `18021084833875942`, `18012377018950444`, `17905423290514961`, `18026720045850729`) then investing reply `18458364325141792`. All byte-identical to the baseline. No new reply since 19:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — managed-agents 원문, agent-skill-languages, Claude Code/Codex 설치 문서, 6/6 agent-security, 라오어 무한매수법, 국산 하네스, `codex는 없나요?`, etc. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-02 08:00/19:00), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (Python 7,390★), then piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, zhaoxuya520/reverse-skill, virattt/ai-hedge-fund, nathankim0/clean-architecture-skills, lidge-jun/opencodex. No new star since the 09-02 passes.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 09-02 cache (stale tab, not reloaded). Today = 오픈AI (오후 6:48), Outlook (오후 12:16/12:17); 어제 = CUDA·날씨, Google 검색, 한컴독스/한글 웹, Hermes. No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- No genuinely-new evidence on any surface. Both Threads tops static vs the 09-02 19:00 baseline (CK posted nothing overnight); GitHub stars top unchanged (93); Google My Activity byte-identical; YouTube blank shell.
- keyword_search hits all CK's own posts → reinforcement, not discovery.

## Why this raw exists
Evidence store for the 2026-09-03 08:00 social pass. Clean cross-day both-static no-new-signal morning run: own `/threads` AND `/replies` tops both identical to the 09-02 19:00 baseline, all browser surfaces static/unavailable. Route `raw_only`; no durable page or index change.
