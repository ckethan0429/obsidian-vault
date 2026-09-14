---
title: Interest signal collection — 19:00 social run (2026-09-14)
type: raw
created: 2026-09-14
captured_at: 2026-09-14T19:01 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:01 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-14 raw existed before this run. Baseline = same-day
  08:00 social transcript (all-static no-new-signal). Live Chrome CDP UP (Chrome/147.0.7727.55).
  Threads via official Graph API (configured path); token refresh OK (expires_in 5184000),
  /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My Activity + YouTube subs
  read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: reinforcement-only, one genuinely-new own /replies row (route raw_only, whole run).
  (1) Threads: own /threads top row UNCHANGED vs 08:00 baseline (still `18084391358315488`
  REPOST_FACADE @alexwjang, 2026-09-11 04:09 UTC, empty text). /replies top row MOVED — one new
  own reply `17958741777215286` (2026-09-14 02:33 UTC / 11:33 KST, TEXT_POST: "ㅋㅋㅋㅋㅋ어그로 능력은
  좋은데.... 말이 안되는 건 알고있져? 하드웨어와 소프트웨어 결합이 젤 힘듭니다..."). Single-surface own reply reacting to a
  troll-bait HW/SW-integration claim — on the general tech axis but personal/single-surface, NOT a
  durable new signal → own-posts-only-reinforcement. /mentions empty. keyword_search agent/Claude
  Code/Codex all top-hit CK's OWN older posts (username ethan13917) → reinforcement. (2) GitHub
  stars 94, UNCHANGED (cdp body len 2807 byte-identical, top simonw/llm) → 변화 없음. (3) Google My
  Activity len 5822 IDENTICAL → 변화 없음. (4) YouTube subs len 9487 IDENTICAL → 변화 없음. NONE opens a
  new durable branch. Durable action = this raw transcript + Honcho routing audit + log.md entry
  only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-14 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-14
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0914.py`). Raw JSON cached `~/wiki/.cache/cdp_0914_1900.json`. Full-body lens byte-identical to the 09-14 08:00 baseline: GitHub 2807, YouTube 9487, Google 5822.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0914.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0914_1900.json`.
- **Baseline** = same-day 08:00 social transcript (all-static no-new-signal). No `interest-signal-collection-19-00-2026-09-14` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only, one genuinely-new own reply.** Own `/threads` top row unchanged vs the 08:00 baseline; `/replies` top row MOVED to a new own reply posted 11:33 KST (between the 08:00 and 19:00 passes) — CK reacting to a troll-bait "HW/SW integration is easy" claim, single-surface personal/tech reply, off CK's durable AI/agent/infra axis. GitHub stars 94 / Google My Activity / YouTube subs all byte-identical (len 2807 / 5822 / 9487). keyword_search = CK's own older posts (reinforcement). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)
### /threads — top row UNCHANGED since 08:00 → 변화 없음
- Top still `18084391358315488` (REPOST_FACADE, 2026-09-11 04:09 UTC / 13:09 KST) — https://www.threads.com/@ethan13917/post/DdIhOXwE1Or — empty `text` (recovered author `@alexwjang`, off CK's durable AI/agent/infra axis). No new own post since baseline.
- Carry: `18177935422381992` civic/political (한동훈/국무의원, 09-10 13:02 UTC); `18130629235679697` iPhone-UX opinion (09-10 01:10 UTC); the 조코딩 AI 엑셀방송 civic/social debate roots (`18279208189292714` / `17942765292339697` / `18112737395107287`).
### /replies — top row MOVED → one new own reply (raw_only)
- **NEW top `17958741777215286`** (2026-09-14T02:33:32 UTC / 11:33 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdQEpIWk0Z8 — "ㅋㅋㅋㅋㅋ어그로 능력은 좋은데.... 말이 안되는 건 알고있져? 하드웨어와 소프트웨어 결합이 젤 힘듭니다. 모든 기업이 그걸 하려고 노력하고 있어요". CK's own reply reacting to a troll-bait claim that HW/SW combination is trivial; single-surface personal/tech reply, on the general tech axis but NOT a durable AI/agent/infra branch → own-posts-only-reinforcement, route `raw_only`.
- Below (carry): `17956597608249422` (09-12 04:36 UTC, "Macos 밀어버리시고 설치하신건가요?"); `17965290324191703` (09-10 13:03 UTC) bare-YouTube-link reply; the 09-09 evening 조코딩 엑셀방송 personal-attack/civic debate batch.
### /mentions — empty
No mentions.
### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (every top row `username: ethan13917` — the 08-29~09-03 Managed Agents / Claude Code / Codex 설치·마케팅 thread series). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 09-14 08:00 baseline). Top row still `simonw/llm`. Recent-starred list + language breakdown unchanged.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to the 09-14 08:00 baseline). Visible rows still the prior-day 09-13 searches (VM웨어/가상화, 상포 테크놀로지, 펜시브, Nutanix agentic AI, LG 노원 서비스센터) — no new 09-14 row yet.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to the 09-14 08:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 헬스/soccer/politics/crypto rows.

## Filtering notes
- Threads `/threads` static vs baseline → 변화 없음; `/replies` moved by one new own reply (raw_only).
- GitHub unchanged (94) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-14 19:00 social pass. Reinforcement-only: own `/threads` top byte-identical to the 08:00 baseline; the only movement is one genuinely-new own `/replies` row (HW/SW-integration troll-bait reply, single-surface personal/tech, off durable axis); GitHub 94 / Google / YouTube byte-identical; keyword_search = own older posts. None opens a new durable branch. Route `raw_only`; no durable page or index change.
