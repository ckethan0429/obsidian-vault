---
title: Interest signal collection — 08:00 social run (2026-09-11)
type: raw
created: 2026-09-11
captured_at: 2026-09-11T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-11 raw existed before this run. Prior social baseline =
  2026-09-10 19:00 social (interest-signal-collection-19-00-2026-09-10.md), plus same-day-prior
  09-10 22:00 new-target + 09-10 23:00 refinement context. Live Chrome CDP UP (Chrome/147.0.7727.55).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5184000), /v1.0/me
  OK (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs read via
  stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: REINFORCEMENT-ONLY / off-axis at the durable layer (route raw_only, whole run).
  (1) Threads MOVED vs the 19:00 baseline — TWO new own rows since 19:00, both OFF CK's durable
  AI/agent/infra axis: new top /threads `18177935422381992` (2026-09-10 13:02 UTC / 22:02 KST,
  TEXT_POST) a civic/political rant (한동훈 국무의원 답변 / 안규백 영창), single-surface own post;
  and new /replies top `17965290324191703` (2026-09-10 13:03 UTC / 22:03 KST) a bare YouTube link
  reply (https://youtu.be/TSdHFcNIvRw) with no durable meaning. The 09-10 iPhone-UX own post
  (`18130629235679697`) was already captured at the 19:00 baseline (carry). (2) GitHub stars 94,
  UNCHANGED (top still simonw/llm) → 변화 없음. (3) Google My Activity len 5822 IDENTICAL to the 19:00
  baseline, no new "오늘" rows (top still 오후 4:48 알림 / 1:46 VMware-탈출 기사 / 12:29 펜시브 THE VC) → 변화 없음.
  (4) YouTube subs len 9487 IDENTICAL to the 19:00 baseline; AI rows carry-over (IBM 'Why won't AI
  agents follow the rules?' + 테크몽 AI 안경) → 변화 없음. keyword_search agent/Claude Code/Codex all
  top-hit CK's OWN older posts (reinforcement). NONE opens a new durable branch. Durable action =
  this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-11 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-11
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0911.py`). Raw JSON cached `~/wiki/.cache/cdp_0911_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0911.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0911_0800.json`.
- **Prior social baseline** = 2026-09-10 19:00 social (`interest-signal-collection-19-00-2026-09-10.md`); same-day-prior context = 09-10 22:00 new-target + 09-10 23:00 refinement. No `interest-signal-collection-08-00-2026-09-11` raw existed before this run → idempotency guard clear.
- A concurrent sibling cron job was active (shared-file write warning on `/tmp` scratch); handled by using run-unique filenames and scoped git staging.

## Novelty summary
**Reinforcement-only / off-axis at the durable layer.** Threads gained TWO new own rows since the 19:00 baseline — a civic/political rant (top /threads) and a bare YouTube-link reply (top /replies) — both single-surface and OFF CK's durable AI/agent/infra axis. GitHub stars 94 unchanged. Google My Activity byte-identical (no new rows). YouTube subs byte-identical (no new AI row). keyword_search = CK's own older posts. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — TWO new own rows since 19:00, both off-axis → raw_only
### /threads — new top row since the 19:00 baseline
- **NEW** `18177935422381992` (TEXT_POST, 2026-09-10 13:02 UTC / 22:02 KST) — https://www.threads.com/@ethan13917/post/18177935422381992 — `"한동훈에게 제대로 답변하는 정부 국무의원 하나도 없냐? 저정도도 답변못하고 우물쭈물하고 확인해본다하고 자기 선에서 알지 못한다하고..  안규백 영창 아직 확인안됨"` — civic/political rant, OFF CK's durable AI/agent/infra/operator axis. Single-surface own post → `raw_only`.
- Carry (already captured at 19:00): `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); `18279208189292714` / `17942765292339697` / `18112737395107287` / `18124066465845729` (조코딩 AI 엑셀방송 civic/social debate roots); `18102024221624249` / `18141811084577394` REPOST_FACADE (empty).

### /replies — new top row since the 19:00 baseline
- **NEW** `17965290324191703` (2026-09-10 13:03 UTC / 22:03 KST) — https://www.threads.com/@ethan13917/post/17965290324191703 — `"https://youtu.be/TSdHFcNIvRw?si=tMtsNay0LGzsDvCe"` — a bare YouTube link reply, no durable meaning / no on-axis context. Single-surface → `raw_only`.
- Carry (unchanged from 19:00): `17956685139218148` 15:54 + the entire 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch already captured earlier.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (anthropic engineering), agent-skill-languages (plicara), Snowflake red-agent (wiz.io), AI-agent 해킹공격 note, agent-security 6/6. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (was 94 at the 19:00 baseline). No new star. Top row still `simonw/llm` (12,480★). Recent-starred list below unchanged (miuuyy/codex-chatgpt-web 5,834★, snflkd/fluent-korean 1,204★, anthropics/defending-code-reference-harness 7,419★, piyushsachdeva/CKA-2024, …). Language breakdown unchanged (24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell).

## 3) Google My Activity (CDP) — len 5822 IDENTICAL to 19:00 → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to the 19:00 baseline). Top "오늘" rows unchanged: 오후 4:48 검색 알림 4개 (Google 기능 업데이트 / 오픈AI), 오후 1:46 디지털데일리 `'VM웨어 횡포'에서 벗어날 수 있다` 가상화/백업 기사 (https://www.ddaily.co.kr/page/view/2026090808190822440) + 상포 테크놀로지 검색, 오후 12:29 펜시브 / THE VC 기업정보 lookup. "어제"(09-09) rows (LG U+ 노원서비스센터, Nutanix/agentic-AI lookups) already present. No new 09-11 row → reinforcement.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL to 19:00 → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, identical to the 19:00 baseline). AI/agent rows all carry-over: IBM Technology `Why won't AI agents just follow the rules?`, 테크몽 `AI 안경 끼고 외국인과 대화`, Shane Hummus `How To Start A YouTube Channel With Claude AI in 2026`. No new AI/agent/infra title surfaced vs the 19:00 baseline.
- Off-axis noise kept in raw, excluded from report: 흑우스토리 조회수, 마인드씨피알/링거 health, 달수네라이브·새벽의축구 이강인/리버풀 soccer, 훈수두는이코치/언더스탠딩/박병찬/머니인사이드 politics·투자 라이브, 불장단타왕 알트코인.

## Filtering notes
- Threads gained two new own rows (civic/political post + YouTube-link reply) but both are off-axis / single-surface → `raw_only`.
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical, no new rows vs 19:00 → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-11 08:00 social pass. Reinforcement-only / off-axis at the durable layer: Threads gained two new own rows since the 19:00 baseline (civic/political post + bare YouTube-link reply), both single-surface and off CK's durable AI/agent/infra axis; GitHub 94 unchanged; Google byte-identical; YouTube byte-identical. keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
