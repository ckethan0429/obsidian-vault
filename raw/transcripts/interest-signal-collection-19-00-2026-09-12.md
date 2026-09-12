---
title: Interest signal collection — 19:00 social run (2026-09-12)
type: raw
created: 2026-09-12
captured_at: 2026-09-12T19:02 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:02 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-12 raw existed before this run. Same-day baselines =
  09-12 08:00 social (interest-signal-collection-08-00-2026-09-12.md, clean both-static no-new-signal)
  + 09-12 11:00 new-target (interest-signal-collection-11-00-2026-09-12.md, reinforcement-only, no new
  durable delta). Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured
  path); token refresh OK (expires_in 5171349), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub
  stars + Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated
  type==page tabs.
  RESULT: REINFORCEMENT-ONLY / off-axis (route raw_only, whole run).
  (1) Threads: own /threads top row UNCHANGED vs 08:00 baseline (still `18084391358315488`
  REPOST_FACADE @alexwjang, 2026-09-11 04:09 UTC). /replies gained ONE new dated row —
  `17956597608249422` (2026-09-12T04:36:29 UTC / 13:36 KST, TEXT_POST) "Macos 밀어버리시고 설치하신건가요?" —
  a personal/tech-support reply, single-surface, OFF CK's durable AI/agent/infra axis. /mentions empty.
  keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts (username ethan13917) →
  reinforcement. (2) GitHub stars 94, UNCHANGED (cdp cache byte-identical to 08:00, top simonw/llm) →
  변화 없음. (3) Google My Activity len 5822 IDENTICAL → 변화 없음. (4) YouTube subs len 9487 IDENTICAL →
  변화 없음. NONE opens a new durable branch. Durable action = this raw transcript + Honcho routing audit
  + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-12 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-12
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0912.py`). Raw JSON cached `~/wiki/.cache/cdp_0912_1900.json` (byte-identical to `cdp_0912_0800.json` via `cmp`).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5171349); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0912.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0912_1900.json`.
- **Same-day baselines** = 09-12 08:00 social (clean both-static no-new-signal) + 09-12 11:00 new-target (reinforcement-only). No `interest-signal-collection-19-00-2026-09-12` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only / off-axis.** Own `/threads` top row unchanged vs 08:00. `/replies` added ONE new dated row (personal/tech-support "Macos 밀어버리시고 설치하신건가요?"), single-surface off CK's durable AI/agent/infra axis. GitHub stars 94 byte-identical, Google My Activity byte-identical, YouTube subs byte-identical. keyword_search = CK's own older posts. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)
### /threads — top row UNCHANGED since 08:00 → 변화 없음
- Top still `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text` (recovered author `@alexwjang`, off CK's durable AI/agent/infra axis). No new own post since 08:00.
- Carry: `18177935422381992` civic/political rant (09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); the 조코딩 AI 엑셀방송 civic/social debate roots (`18279208189292714` / `17942765292339697` / `18112737395107287`).
### /replies — ONE new dated row → off-axis raw_only
- **NEW top `17956597608249422`** (2026-09-12T04:36:29 UTC / 13:36 KST, TEXT_POST): "Macos 밀어버리시고 설치하신건가요?" — a personal/tech-support reply about someone reinstalling macOS. Single-surface, off CK's durable AI/agent/infra axis. `raw_only`.
- Below (carry): `17965290324191703` (09-10 13:03 UTC) bare-YouTube-link reply (https://youtu.be/TSdHFcNIvRw); `17956685139218148` (09-09 15:54) + the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch already captured earlier.
### /mentions — empty
No mentions.
### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (every top row `username: ethan13917`): managed-agents 원문 (anthropic.com/engineering/managed-agents), agent-skill-languages, Snowflake red-agent, AI-agent 해킹공격 note, the agent-security 6/6 thread, the Claude Code/Codex 설치 튜토리얼 series. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, cdp cache byte-identical to the 08:00 baseline via `cmp`). Top row still `simonw/llm`. Recent-starred list + language breakdown unchanged.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the baseline). No new 09-12 evening row.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: soccer/politics/crypto/health rows.

## Filtering notes
- Threads `/threads` static vs 08:00; `/replies` +1 personal/tech-support row (off-axis).
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-12 19:00 social pass. Reinforcement-only / off-axis: own `/threads` top unchanged vs the 08:00 baseline; `/replies` gained one single-surface personal/tech-support reply off CK's durable axis; GitHub 94 / Google / YouTube byte-identical; keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
