---
title: Interest signal collection — 19:00 social run (2026-09-15)
type: raw
created: 2026-09-15
captured_at: 2026-09-15T19:02 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:02 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-15 raw existed before this run. Baseline = same-day
  08:00 social transcript (clean cross-day both-static no-new-signal). Live Chrome CDP UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5097630), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: Threads MOVED (CK posted between the 08:00 and 19:00 passes) but net reinforcement-only.
  (1) Threads: own /threads gained 3 new 2026-09-15 TEXT_POST roots — `18064330907521001`
  (11:05 KST, "요새 그록봇이니 muse니 챗봇 에이전트 많이 나오는데 아직까지도 비즈니스 프로세스는 메일로
  의사결정...") = on-axis agent-adoption-vs-reality, but CK's OWN single-surface post restating his
  existing agent axis → own-posts-only-reinforcement; the other two (`18111305732518146` 법무부장관
  청문회 civic, `18111540608596140` "야름답다" 신조어 personal) are off-axis. /replies gained 2 new rows
  (`18153734854518735` "갑자기 즙짜네" personal, `18206909467371000` YouTube-shorts-link) = noise.
  /mentions empty. keyword_search agent/Claude Code/Codex all top-hit CK's OWN older posts →
  reinforcement. (2) GitHub stars 94, len 2807 byte-identical vs 08:00 → 변화 없음. (3) Google My
  Activity len 5822 byte-identical vs 08:00 → 변화 없음. (4) YouTube subs len 9487 byte-identical vs
  08:00 → 변화 없음. NONE opens a new durable branch. Durable action = this raw transcript + Honcho
  routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-15 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-15
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0915.py`). Raw JSON cached `~/wiki/.cache/cdp_0915_1900.json`. GitHub/YouTube/Google full-body lens byte-identical to the 08:00 baseline: GitHub 2807, YouTube 9487, Google 5822.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097630); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0915.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0915_1900.json`.
- **Baseline** = same-day 08:00 social transcript (`interest-signal-collection-08-00-2026-09-15.md`, clean cross-day both-static no-new-signal). No `interest-signal-collection-19-00-2026-09-15` raw existed before this run → idempotency guard clear.

## Novelty summary
**Threads moved, but net reinforcement-only.** CK posted 3 new own `/threads` roots + 2 new `/replies` between the 08:00 and 19:00 passes. The only on-axis new post (`18064330907521001`, agent-adoption-vs-business-reality) is CK's OWN single-surface post restating his existing agent axis → own-posts-only-reinforcement (`raw_only`). GitHub stars 94 / Google My Activity / YouTube subs all byte-identical vs 08:00 (len 2807 / 5822 / 9487) → 변화 없음. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — MOVED (CK posted), net reinforcement-only
### /threads — 3 new own 2026-09-15 TEXT_POST roots since 08:00
- **NEW (on-axis, own post → reinforcement)** `18064330907521001` (2026-09-15T02:05:05 UTC / 11:05 KST, TEXT_POST) — https://www.threads.com/@ethan13917/post/DdSmLj4E9Km — "요새 그록봇이니 muse니 챗봇 에이전트 많이 나오는데 아직까지도 비즈니스 프로세스는 메일로 의사결정이 진행되는 경우가 많다." → agent/chatbot proliferation vs the reality that business decisions still run over email. This is CK's recurring agent-adoption-vs-reality theme (well within his durable AI/agent axis); single-surface own post → own-posts-only-reinforcement.
- **NEW (off-axis, civic)** `18111305732518146` (2026-09-15T01:57:16 UTC / 10:57 KST) — https://www.threads.com/@ethan13917/post/DdSlSUnkyBq — "진짜 법무부장관 인사청문회 코미디다.. 생중계 개재밌네 ㅋㅋㅋㅋ..." → civic/political commentary. `discard` axis.
- **NEW (off-axis, personal)** `18111540608596140` (2026-09-15T00:39:12 UTC / 09:39 KST) — https://www.threads.com/@ethan13917/post/DdScWlfE3YQ — "올해 최고의 신조어 : 야름답다" → personal/social. `discard` axis.
- Carry (unchanged from 08:00): `18084391358315488` REPOST_FACADE @alexwjang (empty text); `18177935422381992` 한동훈/국무의원 civic; `18130629235679697` iPhone-UX opinion.

### /replies — 2 new rows since 08:00 (noise)
- **NEW (noise)** `18153734854518735` (2026-09-15T02:10:19 UTC / 11:10 KST) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — "와... 갑자기 즙짜네..." → personal reaction. `discard`.
- **NEW (noise)** `18206909467371000` (2026-09-15T00:39:45 UTC / 09:39 KST) — https://www.threads.com/@ethan13917/post/DdScaick0ey — bare YouTube-shorts link. `discard`.
- Carry: `17958741777215286` (09-14 11:33 KST HW/SW-integration troll-bait reply, https://www.threads.com/@ethan13917/post/DdQEpIWk0Z8); `17956597608249422` "Macos 밀어버리시고..."; `17965290324191703` bare-YouTube-link reply.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (top rows `username: ethan13917` — the Managed Agents / Claude Code marketing thread series, e.g. anthropic.com/engineering/managed-agents). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (body len 2807, byte-identical to the 08:00 baseline). Top rows: simonw/llm (12,480★), miuuyy/codex-chatgpt-web (5,834★), snflkd/fluent-korean (1,204★), anthropics/defending-code-reference-harness (7,419★), piyushsachdeva/CKA-2024. Language breakdown unchanged (Python 24, JS 15, TS 12, Rust 7, Shell 5, ...). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 IDENTICAL → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (byte-identical to 08:00 baseline). Visible rows still the prior searches (VM웨어/가상화 디지털데일리 르포, 상포 테크놀로지, 펜시브 기업정보 THE VC, Nutanix agentic/sovereign AI, LG 노원 서비스센터) — no new 09-15 row surfaced yet.

## 4) YouTube subscriptions (CDP) — len 9487 IDENTICAL → 변화 없음
Hydrated (`구독 - YouTube`, len 9487, byte-identical to 08:00 baseline). No new AI/agent/infra title.
- Off-axis noise kept in raw, excluded from report: 헬스/soccer/politics/crypto/live rows.

## Filtering notes
- Threads `/threads` gained 3 new own roots + `/replies` 2 new rows; only `18064330907521001` is on-axis (agent), and it is a single-surface own post → own-posts-only-reinforcement → `raw_only`.
- GitHub unchanged (94, len 2807) → `변화 없음`.
- Google len 5822 identical → `변화 없음`.
- YouTube len 9487 identical → `변화 없음`.
- keyword_search = own older posts (reinforcement).

## Why this raw exists
Evidence store for the 2026-09-15 19:00 social pass. Threads moved (CK posted between passes) but net reinforcement-only: the one on-axis new own post restates his existing agent-adoption axis, the rest are civic/personal/noise; GitHub/Google/YouTube byte-identical to 08:00. None opens a new durable branch. Route `raw_only`; no durable page or index change.
