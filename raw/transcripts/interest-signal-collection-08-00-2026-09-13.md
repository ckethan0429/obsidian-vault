---
title: Interest signal collection — 08:00 social run (2026-09-13)
type: raw
created: 2026-09-13
captured_at: 2026-09-13T08:03 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:03 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-13 raw existed before this run. Baseline = most-recent
  completed social transcript by mtime = 09-12 19:00 (interest-signal-collection-19-00-2026-09-12.md,
  reinforcement-only/off-axis). Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph
  API (configured path); token refresh OK (expires_in 5124524), /v1.0/me OK (ethan13917,
  id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via stdlib raw-socket
  WS CDP client on hydrated type==page tabs.
  RESULT: BOTH-STATIC NO-NEW-SIGNAL (route raw_only, whole run).
  (1) Threads: own /threads top row UNCHANGED vs the 19:00 baseline (still `18084391358315488`
  REPOST_FACADE @alexwjang, 2026-09-11 04:09 UTC, empty text). /replies top row ALSO UNCHANGED
  (still `17956597608249422`, 2026-09-12 04:36 UTC "Macos 밀어버리시고 설치하신건가요?"). /mentions empty.
  keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts (username ethan13917) →
  reinforcement. (2) GitHub stars 94, UNCHANGED (cdp body byte-identical to 19:00, top simonw/llm) →
  변화 없음. (3) Google My Activity len 5822 IDENTICAL → 변화 없음. (4) YouTube subs len 9487 IDENTICAL →
  변화 없음. NONE opens a new durable branch. Durable action = this raw transcript + Honcho routing
  audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-13 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-13
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0913.py`). Raw JSON cached `~/wiki/.cache/cdp_0913_0800.json`. Full-body lens byte-identical to the 19:00 baseline (`cdp_0912_1900.json`): GitHub 2807, YouTube 9487, Google 5822.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5124524); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0913.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0913_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript = 09-12 19:00 (reinforcement-only/off-axis). No `interest-signal-collection-08-00-2026-09-13` raw existed before this run → idempotency guard clear.

## Novelty summary
**Both-static no-new-signal.** Own `/threads` top row AND `/replies` top row both byte-identical to the 09-12 19:00 baseline (CK made no posts between passes). GitHub stars 94 / Google My Activity / YouTube subs all byte-identical. keyword_search = CK's own older posts (reinforcement). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)
### /threads — top row UNCHANGED since 19:00 → 변화 없음
- Top still `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text` (recovered author `@alexwjang`, off CK's durable AI/agent/infra axis). No new own post since 19:00.
- Carry: `18177935422381992` civic/political rant (09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); the 조코딩 AI 엑셀방송 civic/social debate roots (`18279208189292714` / `17942765292339697` / `18112737395107287` / `18124066465845729`); `18102024221624249` REPOST_FACADE (09-09 05:10 UTC).
### /replies — top row UNCHANGED since 19:00 → 변화 없음
- Top still `17956597608249422` (2026-09-12T04:36:29 UTC / 13:36 KST, TEXT_POST): "Macos 밀어버리시고 설치하신건가요?" — personal/tech-support reply, already captured at 19:00. No new dated reply since.
- Below (carry): `17965290324191703` (09-10 13:03 UTC) bare-YouTube-link reply; the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch.
### /mentions — empty
No mentions.
### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (every top row `username: ethan13917`): managed-agents 원문 (anthropic.com/engineering/managed-agents), agent-skill-languages (plicara.ai), red-agent Snowflake (wiz.io), the marketer copy/영업목록 automation posts, the Claude Code/Codex 공식 설치 튜토리얼. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 19:00 baseline). Top row still `simonw/llm` (12,480★). Next `miuuyy/codex-chatgpt-web`, `snflkd/fluent-korean`. Recent-starred list + language breakdown unchanged.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the 19:00 baseline). Newest visible rows still the 09-08 VMware-탈출/가상화 백업 ddaily 기사 방문 lines. No new 09-13 morning row.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the 19:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 헬스/soccer/politics/crypto rows (유튜브 조회수 뻥튀기, 갤럭시 Z 폴드8, 공공기관 지방 이전, FBI hacking tool Short 등).

## Filtering notes
- Threads `/threads` static vs 19:00; `/replies` static vs 19:00 (both tops identical) → genuine no-new-signal.
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-13 08:00 social pass. Both-static no-new-signal: own `/threads` top AND `/replies` top both byte-identical to the 09-12 19:00 baseline (CK posted nothing between passes); GitHub 94 / Google / YouTube byte-identical; keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
