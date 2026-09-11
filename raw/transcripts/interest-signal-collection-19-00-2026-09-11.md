---
title: Interest signal collection — 19:00 social run (2026-09-11)
type: raw
created: 2026-09-11
captured_at: 2026-09-11T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-11 raw existed before this run. Same-day baselines =
  09-11 08:00 social (interest-signal-collection-08-00-2026-09-11.md) + 09-11 11:00 new-target
  (interest-signal-collection-11-00-2026-09-11.md, OpenAI Agents API durable delta already
  absorbed into concepts/managed-agents-practical-summary.md). Live Chrome CDP UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5144419), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: REINFORCEMENT-ONLY / off-axis at the durable layer (route raw_only, whole run).
  (1) Threads: ONE new own row since the 08:00 baseline — new top /threads
  `18084391358315488` (2026-09-11 04:09 UTC / 13:09 KST, REPOST_FACADE, empty text). Public
  permalink recovery (https://www.threads.com/@ethan13917/post/DdIhOXwE1Or) → og:title recovered
  the reposted author `Alex Jang (@alexwjang)`, og:description empty (text not recoverable). Single-
  surface repost, OFF CK's durable AI/agent/infra axis → raw_only. /replies UNCHANGED since 08:00
  (top still `17965290324191703` bare-YouTube-link reply). (2) GitHub stars 94, UNCHANGED (top still
  simonw/llm; body byte-identical to 08:00) → 변화 없음. (3) Google My Activity len 5822 IDENTICAL to
  the 08:00 baseline → 변화 없음. (4) YouTube subs len 9487 IDENTICAL to the 08:00 baseline → 변화 없음.
  keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts (reinforcement). NONE opens
  a new durable branch. Durable action = this raw transcript + Honcho routing audit + log.md entry
  only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-11 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-11
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0911.py`). Raw JSON cached `~/wiki/.cache/cdp_0911_1900.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144419); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0911.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0911_1900.json`.
- **Same-day baselines** = 09-11 08:00 social (`interest-signal-collection-08-00-2026-09-11.md`) + 09-11 11:00 new-target (`interest-signal-collection-11-00-2026-09-11.md`; OpenAI Agents API `append_existing` already absorbed). No `interest-signal-collection-19-00-2026-09-11` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only / off-axis at the durable layer.** Threads gained ONE new own row since the 08:00 baseline — a REPOST_FACADE (empty text) of `@alexwjang`, single-surface and off CK's durable AI/agent/infra axis. `/replies` unchanged since 08:00. GitHub stars 94 unchanged (body byte-identical). Google My Activity byte-identical. YouTube subs byte-identical. keyword_search = CK's own older posts. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — ONE new own row since 08:00, off-axis → raw_only
### /threads — new top row since the 08:00 baseline
- **NEW** `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text`. Public permalink recovery → `og:title` = `"Alex Jang (@alexwjang) on Threads"` (reposted author recovered), `og:description` empty (post text not recoverable without CDP). Single-surface repost, author off CK's durable AI/agent/infra/operator axis → `raw_only`.
- Carry (already captured at 08:00): `18177935422381992` civic/political rant (09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); `18279208189292714` / `17942765292339697` / `18112737395107287` / `18124066465845729` (조코딩 AI 엑셀방송 civic/social debate roots); `18102024221624249` / `18141811084577394` REPOST_FACADE (empty).

### /replies — UNCHANGED since 08:00 → 변화 없음
- Top still `17965290324191703` (09-10 13:03 UTC) bare YouTube-link reply (https://youtu.be/TSdHFcNIvRw). Below: `17956685139218148` 15:54 + the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch already captured earlier. No new dated reply row vs 08:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (anthropic engineering), agent-skill-languages (plicara), Snowflake red-agent (wiz.io), AI-agent 해킹공격 note, agent-security 6/6. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (byte-identical body to the 08:00 baseline, len 2807). Top row still `simonw/llm` (12,480★). Recent-starred list unchanged (miuuyy/codex-chatgpt-web, snflkd/fluent-korean, anthropics/defending-code-reference-harness, piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, …). Language breakdown unchanged (24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell).

## 3) Google My Activity (CDP) — len 5822 IDENTICAL to 08:00 → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the 08:00 baseline). Top "오늘" rows unchanged: 오후 4:48 검색 알림 4개, 오후 1:46 디지털데일리 `'VM웨어 횡포'에서 벗어날 수 있다` 기사 + 상포 테크놀로지 검색, 오후 12:29 펜시브 / THE VC 기업정보 lookup. No new 09-11 evening row → reinforcement.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL to 08:00 → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the 08:00 baseline). AI/agent rows carry-over: IBM Technology `Why won't AI agents just follow the rules?`, 테크몽 `AI 안경`, Shane Hummus `How To Start A YouTube Channel With Claude AI in 2026`. No new AI/agent/infra title surfaced vs 08:00.
- Off-axis noise kept in raw, excluded from report: soccer/politics/crypto/health rows (흑우스토리, 마인드씨피알, 달수네라이브·새벽의축구 이강인/리버풀, 훈수두는이코치/언더스탠딩/박병찬/머니인사이드, 불장단타왕 알트코인).

## Filtering notes
- Threads gained one new own row (REPOST_FACADE of @alexwjang) but it is off-axis / single-surface → `raw_only`.
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-11 19:00 social pass. Reinforcement-only / off-axis at the durable layer: Threads gained one new own row since the 08:00 baseline (a REPOST_FACADE of `@alexwjang`, empty text, single-surface, off CK's durable AI/agent/infra axis); GitHub 94 unchanged; Google byte-identical; YouTube byte-identical. keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
