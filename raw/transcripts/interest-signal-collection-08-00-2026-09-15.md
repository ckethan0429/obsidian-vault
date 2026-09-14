---
title: Interest signal collection — 08:00 social run (2026-09-15)
type: raw
created: 2026-09-15
captured_at: 2026-09-15T08:01 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:01 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-15 raw existed before this run. Baseline = most-recent
  completed social transcript by mtime = 2026-09-14 19:00 (reinforcement-only). Live Chrome CDP UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5137146), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: clean cross-day BOTH-STATIC no-new-signal. (1) Threads: own /threads top row UNCHANGED
  vs 09-14 19:00 baseline (still `18084391358315488` REPOST_FACADE @alexwjang, 2026-09-11 04:09
  UTC, empty text). /replies top row ALSO UNCHANGED (still `17958741777215286`, 2026-09-14 02:33
  UTC HW/SW-integration troll-bait reply). CK made no posts between the 19:00 and 08:00 passes →
  genuinely unchanged, not a transport artifact. /mentions empty. keyword_search agent/Claude
  Code/Codex all top-hit CK's OWN older posts (username ethan13917) → reinforcement. (2) GitHub
  stars 94, UNCHANGED (cdp body len 2807 byte-identical, top ckchain91/94 stars) → 변화 없음.
  (3) Google My Activity len 5822 IDENTICAL (still the 09-13 rows) → 변화 없음. (4) YouTube subs
  len 9487 IDENTICAL → 변화 없음. NONE opens a new durable branch. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-15 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-15
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0915.py` + `/tmp/cdp_retry_0800_0915.py`). Raw JSON cached `~/wiki/.cache/cdp_0915_0800.json` + `cdp_0915_0800_retry.json`. The first fresh GitHub target timed out and a fresh YouTube target was a blank shell (len 17); fell back to already-hydrated stars/subs tabs. Full-body lens byte-identical to the 09-14 19:00 baseline: GitHub 2807, YouTube 9487, Google 5822.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137146); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0915.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0915_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript = 2026-09-14 19:00 (reinforcement-only). No `interest-signal-collection-08-00-2026-09-15` raw existed before this run → idempotency guard clear.

## Novelty summary
**Clean cross-day BOTH-STATIC no-new-signal.** Own `/threads` top row AND `/replies` top row are BOTH byte-identical to the 09-14 19:00 baseline; CK made no posts between passes. GitHub stars 94 / Google My Activity / YouTube subs all byte-identical (len 2807 / 5822 / 9487). keyword_search = CK's own older posts (reinforcement). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)
### /threads — top row UNCHANGED since 09-14 19:00 → 변화 없음
- Top still `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text` (recovered author `@alexwjang`, off CK's durable AI/agent/infra axis). No new own post since baseline.
- Carry: `18177935422381992` civic/political (한동훈/국무의원, 09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); the 조코딩 AI 엑셀방송 civic/social debate roots (`18279208189292714` / `17942765292339697` / `18112737395107287`).
### /replies — top row UNCHANGED since 09-14 19:00 → 변화 없음
- Top still `17958741777215286` (2026-09-14T02:33:32 UTC / 11:33 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdQEpIWk0Z8 — "ㅋㅋㅋㅋㅋ어그로 능력은 좋은데.... 하드웨어와 소프트웨어 결합이 젤 힘듭니다...". Already captured at the 19:00 baseline; no new reply between passes.
- Below (carry): `17956597608249422` (09-12 04:36 UTC, "Macos 밀어버리시고 설치하신건가요?"); `17965290324191703` (09-10 13:03 UTC) bare-YouTube-link reply; the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch.
### /mentions — empty
No mentions.
### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (every top row `username: ethan13917` — the 08-18~09-03 Managed Agents / Claude Code / Codex 설치·마케팅 thread series, e.g. anthropic.com/engineering/managed-agents, plicara.ai agent-skill-lang, code.claude.com). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `ckchain91`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 09-14 19:00 baseline). All stars 94 / Others' repositories 94. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the 09-14 19:00 baseline). Visible rows still the prior 09-13 searches (VM웨어/가상화 디지털데일리 르포, 상포 테크놀로지, 펜시브 기업정보, Nutanix agentic AI, LG 노원 서비스센터) — no new 09-14/09-15 row yet.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the 09-14 19:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 헬스/soccer/politics/crypto rows.

## Filtering notes
- Threads `/threads` AND `/replies` both static vs baseline → 변화 없음 (both-static case).
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-15 08:00 social pass. Clean cross-day both-static no-new-signal: own `/threads` top AND `/replies` top both byte-identical to the 09-14 19:00 baseline (CK posted nothing between passes); GitHub 94 / Google / YouTube byte-identical; keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
