---
title: Interest signal collection — 19:00 social run (2026-09-02)
type: raw
created: 2026-09-02
captured_at: 2026-09-02T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-02 raw existed before this run. Baselines = same-day
  08:00 social (both-static no-new-signal) + same-day 11:00 new-target (reinforcement-only) +
  the 09-01 23:00 whole-day refinement. Live Chrome CDP UP (Chrome/147). Threads via official
  Graph API (configured path); token refresh OK (expires_in 5156132), /v1.0/me OK (ethan13917,
  id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via stdlib
  raw-socket WS CDP client. Result: OWN-POSTS-ONLY REINFORCEMENT. Between the 08:00 pass and
  this one CK POSTED a fresh series installment — own /threads top moved from 18186615706405937
  (09-01 personal opinion) to 18076240841372243 (09-02 11:22 KST — https://www.threads.com/@ethan13917/post/DcxJ4bokzrY
  — "영업 목록은 시간이 지나면 표기가 제각각이 됩니다…" sales-list automation) plus a fresh 7-part
  reply chain (11:24–11:30 KST) continuing the "터미널 에이전트 활용하기" series (this episode =
  영업 직군: 고객목록 정리 / 연락 대상 추리기 / 제안서 자동 생성 / 반대의견 대응카드; next episode
  teased = 마케터). Genuinely-new own-post evidence, but single-surface reinforcement of the
  already-durable 직군별 파일-자동화 content-series axis (사무직 PART 3 → 영업) → own-posts-only
  reinforcement rule → raw_only, no new durable branch. /mentions empty; keyword_search
  agent/Claude Code/Codex all top-hit CK's own posts (reinforcement). GitHub stars 93, top
  unchanged (miuuyy/codex-chatgpt-web) → 변화 없음. Google My Activity byte-identical to 08:00
  (len 5301, stale tab, today section unchanged) → 변화 없음. YouTube subscriptions blank nav
  shell (len 17) → unavailable (access fact). Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-02 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-02
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0902.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0902.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5156132); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0902.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0902_1900.json`.
- **Baselines** = same-day 08:00 social (`interest-signal-collection-08-00-2026-09-02.md`, both-static no-new-signal) + same-day 11:00 new-target (`interest-signal-collection-11-00-2026-09-02.md`, reinforcement-only) + the 09-01 23:00 whole-day refinement. No `19-00-2026-09-02` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Own-posts-only reinforcement.** Between the 08:00 pass and this one, CK POSTED a fresh installment of his "터미널 에이전트 활용하기" series. Own `/threads` top moved to **`18076240841372243`** (2026-09-02 02:22:54 UTC / 11:22 KST — https://www.threads.com/@ethan13917/post/DcxJ4bokzrY — 영업 목록 자동화 root) plus a **7-part reply chain** (11:24–11:30 KST) walking the 영업 직군 use-cases and teasing 마케터 as the next episode. Genuinely-new own-post evidence, but single-surface reinforcement of the already-durable 직군별 파일-자동화 content-series axis (사무직 PART 3 → 영업) → own-posts-only reinforcement rule → `raw_only`. GitHub stars 93 top unchanged; Google My Activity byte-identical (stale tab); YouTube blank shell. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — own new series installment → own-posts-only reinforcement
### /threads — NEW top (moved since 08:00)
- **NEW top `18076240841372243`** (2026-09-02 02:22:54 UTC / 11:22 KST) — https://www.threads.com/@ethan13917/post/DcxJ4bokzrY — TEXT_POST, series-continuation root:
  > 영업 목록은 시간이 지나면 표기가 제각각이 됩니다. 날짜 형식이 섞이고, 상태 칸은 비어 있고, 같은 거래처가 중복으로 쌓입니다. ChatGPT…
- Carry below (unchanged vs 08:00): `18186615706405937` (09-01 11:44 KST 개발자 opinion, DcunhiPE1EH); 08-31 series PART 3 root `18120302675316701` (사무직 파일 자동화); PART 2 `18117970942932395`; series intro `18104744447622673` + `17902817622557812`; older 08-29 view-count-experiment posts.

### /replies — NEW top (fresh 7-part 영업 reply chain, 11:24–11:30 KST)
- **`17987633220027373`** (2026-09-02 02:30:59 UTC / 11:30 KST) — https://www.threads.com/@ethan13917/post/DcxKzoKk9tC — chain closer, teases next episode:
  > 지난 편은 사무직의 파일 정리 자동화였고, 이번 편은 영업의 고객 관리와 제안서였습니다. 다음 편은 마케터입니다. 채널별 카피와 소재를 코딩 없…
- Chain (all 09-02 02:24–02:30 UTC, in reverse-chron as returned):
  > `17969990037151850` — 세 가지만 지키면 안전합니다. 첫째, 원본을 덮어쓰지 말고 항상 새 파일로 저장… 둘째, 없는 정보는 지어내지…
  > `18015340607934286` — 같은 반대 의견이 여러 고객에게서 반복됩니다… 다음 상담에 바로 쓰는 대응 카드…
  > `18021084833875942` — 표준 제안서를 매번 손으로 고칠 필요는 없습니다. 양식에 빈칸([회사명]·[상황]·[가격])을 두고 시킵니다…
  > `18012377018950444` — 목록이 정리되면 '누구에게 언제 연락할지'… 지난 연락일이 14일 이상 지났고…
  > `17905423290514961` — 먼저 자료를 폴더 하나에 모아 둡니다… 고객목록.xlsx를…
  > `18026720045850729` — 영업 담당자가 코딩 없이 시켜 볼 수 있는 네 가지입니다. 1. 뒤죽박죽 고객 목록 엑셀 정리 2. 이번 주에 연락…
- Carry below: investing reply `18458364325141792` (08-31 라오어/레버리지/자산배분) + 08-31 PART 3 file-automation reply chain — all unchanged.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — managed-agents 원문, agent-skill-languages, Claude Code/Codex 설치 문서, 6/6 agent-security, 라오어 무한매수법, 국산 하네스, etc. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-01/09-02 08:00), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (Python 7,390★), then piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, zhaoxuya520/reverse-skill, virattt/ai-hedge-fund. No new star.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08:00 cache (stale tab, today section unchanged). Today = 오픈AI (오후 6:48), Outlook (오후 12:16/12:17). The 법원경매/등기부/홈택스 양도세/쏘서·보행기 rows are all under 어제(09-01), already captured. No new search since 08:00.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Only genuinely-new evidence = CK's own new 영업-automation series root + 7-part reply chain (single-surface, reinforces the 직군별 파일-자동화 series axis). GitHub stars / Google My Activity static; YouTube blank shell.
- keyword_search hits all CK's own posts → reinforcement, not discovery.

## Why this raw exists
Evidence store for the 2026-09-02 19:00 social pass. Own-posts-only reinforcement afternoon run: CK published a fresh series installment (영업 직군 자동화) between 08:00 and 19:00, but it is single-surface reinforcement of an already-durable content-series axis. Route `raw_only`; no durable page or index change.
