---
title: Interest signal collection — 08:00 social run (2026-09-16)
type: raw
created: 2026-09-16
captured_at: 2026-09-16T08:01 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:01 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-16 raw existed before this run. Baseline =
  most-recent-by-mtime completed social transcript = 2026-09-15 19:00 (reinforcement-only). Live
  Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5184000), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page
  tabs. RESULT: near cross-day no-new-signal. (1) Threads: own /threads gained ONE new 2026-09-15
  row since the 19:00 baseline — `17946461313280547` (2026-09-15T10:48:56Z / 19:48 KST, TEXT_POST,
  "육아용품 딴거 몰라도 오래쓰는건 좋은거 써라...") = off-axis personal/parenting advice, single-surface own post
  → own-posts-only-reinforcement / discard axis. /replies top `18153734854518735` unchanged vs
  19:00. /mentions empty. keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts →
  reinforcement. (2) GitHub stars 94, len 2807 byte-identical vs 19:00 → 변화 없음. (3) Google My
  Activity len 5822 byte-identical vs 19:00 → 변화 없음. (4) YouTube subs len 9487 byte-identical vs
  19:00 → 변화 없음. NONE opens a new durable branch. Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-16 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-16
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0916.py`). Raw JSON cached `~/wiki/.cache/cdp_0916_0800.json`. GitHub/Google/YouTube full-body lens byte-identical to the 09-15 19:00 baseline: GitHub 2807, Google 5822, YouTube 9487.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0916.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0916_0800.json`.
- **Baseline** = most-recent-by-mtime completed social transcript = `interest-signal-collection-19-00-2026-09-15.md` (reinforcement-only; Threads moved but net reinforcement, GitHub/Google/YouTube static). No `interest-signal-collection-08-00-2026-09-16` raw existed before this run → idempotency guard clear.

## Novelty summary
**Near cross-day no-new-signal.** Threads own `/threads` gained exactly ONE new row since the 19:00 baseline: `17946461313280547` (09-15 19:48 KST, off-axis personal/parenting advice) — a single-surface own post outside CK's durable AI/agent/infra axis → own-posts-only-reinforcement (`raw_only`). `/replies` top unchanged. GitHub stars 94 / Google My Activity / YouTube subs all byte-identical vs 19:00 (len 2807 / 5822 / 9487) → 변화 없음. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — one new own row, off-axis
### /threads — 1 new own row since 19:00 baseline
- **NEW (off-axis, personal)** `17946461313280547` (2026-09-15T10:48:56 UTC / 19:48 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdTiIXJk-5T — "육아용품 딴거 몰라도 오래쓰는건 좋은거 써라. 괜히 알아보고 가격비교하면서 시간 뺐기지 마시고 당근으로 사더라도 좋은거써라." → personal/parenting advice. Off durable AI/agent/infra axis → `discard` axis; single-surface own post → own-posts-only-reinforcement.
- Carry (unchanged from 19:00): `18064330907521001` (agent-adoption-vs-reality, on-axis own post, already reinforced 09-15 19:00); `18111305732518146` 법무부장관 청문회 civic; `18111540608596140` "야름답다" personal; `18084391358315488` REPOST_FACADE @alexwjang (empty text); `18177935422381992` 한동훈/국무의원 civic; `18130629235679697` iPhone-UX opinion.

### /replies — unchanged vs 19:00
- Top row `18153734854518735` ("갑자기 즙짜네") byte-identical to 19:00 baseline. No new reply since 19:00.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (Managed Agents / Claude Code thread series). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 19:00 baseline). Top rows: simonw/llm (12,480★), miuuyy/codex-chatgpt-web (5,834★), snflkd/fluent-korean. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to 19:00 baseline). Visible rows still the prior searches (VM웨어/가상화 디지털데일리 르포, 상포 테크놀로지, 펜시브 기업정보 THE VC, Nutanix agentic/enterprise AI, LG 노원 서비스센터) — no new 09-16 row surfaced yet.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to 19:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 헬스/soccer/politics/crypto/live/Shorts rows.

## Filtering notes
- Threads `/threads` gained 1 new own row (`17946461313280547`, parenting advice), off-axis personal → own-posts-only-reinforcement → `raw_only`. `/replies` top unchanged.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-16 08:00 social pass. Near cross-day no-new-signal: the one new own Threads post is off-axis personal, GitHub/Google/YouTube byte-identical to the 09-15 19:00 baseline. None opens a new durable branch. Route `raw_only`; no durable page or index change.
