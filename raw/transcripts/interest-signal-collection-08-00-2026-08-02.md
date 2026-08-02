---
title: Interest signal collection — 08:00 social/browser run (2026-08-02)
created: 2026-08-02
type: raw-transcript
captured_at: 2026-08-02T23:55:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, cdp-down, social, reinforcement]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 social run for 2026-08-02 (delayed cron delivery; actual capture ~23:55 KST).
  Idempotency clear: no interest-signal-collection-08-00-2026-08-02.md existed, and no
  August transcript existed at all. Last successful baseline = 2026-07-15 08:00 social
  transcript (the 07-16 08:00 run FAILED and collected nothing) — an ~18-day gap, so many
  Threads rows have rotated. Live Chrome CDP on 127.0.0.1:9222 is DOWN (/json/version and
  /json/list both fail), so YouTube subscriptions, GitHub /stars, Google My Activity,
  ChatGPT, Claude, and X are all unavailable this run (access facts, not 변화 없음). Threads
  collected via the official Graph API (configured path); long-lived token refreshed OK
  (expires_in 5183974), /me confirmed ethan13917 (user_id 27173231028946699). Against the
  07-15 baseline, own /threads gained several new rows — the genuinely on-axis ones are all
  CK's OWN posts: DbC4jRwk5GN (07-21, "국산 하네스 까지마라 … 프롬프팅/컨텍스트 엔지니어링/하네스" —
  a defense of Korean AI coding-agent harnesses, reinforcing the managed-agents /
  coding-agent-harness axis) and DbFCPitE5gw (07-22, "ai시대 … 나스닥 같은 효율적 시장도 혼란 …
  중국 ai 오픈웨이트" — AI+open-weight+market-economics opinion, reinforcing the
  ai-infra-operating-economics open-weight axis). DbFW_MMk2OM (07-22) is an investing post
  (무한매수법/세븐스플릿) — CK's secondary investing axis. Three new REPOST_FACADE rows had
  empty text but recovered authors via og:title: @choi.openai (CHOI, AI-axis handle),
  @unclejobs.ai (엉클잡스, "Ai 시대, 돈이 되는 정보" AI-monetization creator), @jangfolk (장청일,
  civic/political). The 07-31 own IMAGE post Dbc78KPk5Ve is Samsung Galaxy Z Fold consumer
  cheerleading (off durable axis). All new /replies rows are personal/noise (을지로, 오타쿠
  개발자, 쿠팡 파트너스 link, 중3엄마 화장, 결혼·육아, 파리지앵). mentions empty. keyword_search
  (agent / Claude Code / Codex) returned only CK's own posts (the 07-21 harness post, the
  07-22 investing post, the April–May managed-agents thread, the 07-10 "codex는 없나요?"
  reply) — reinforcement of already-durable axes, no external discovery. Net: genuinely-new
  content exists vs the stale baseline, but every on-axis item is CK's own single-surface
  Threads post reinforcing an existing axis (harness/managed-agents, ai-infra open-weight,
  investing) — reinforcement-only at the durable layer. Durable action = raw transcript +
  Honcho/log audit only; index.md and concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "New rows vs 07-15 baseline top DayEcnUk9ZZ. On-axis new = CK's OWN posts DbC4jRwk5GN (07-21 harness/context-engineering defense) + DbFCPitE5gw (07-22 AI+open-weight+market). Single-surface own-posts reinforcing existing axes."}
  - {surface: threads-api-reposts, route: raw_only, note: "3 new REPOST_FACADE, text empty, authors recovered via og:title: DbT86Mkk5pH=@choi.openai (AI-axis), DbUlDcSk_tL=@unclejobs.ai (AI-monetization creator), Dbc3mYgE4qT=@jangfolk (civic/political). Content unrecoverable without CDP; single-surface repost rotation."}
  - {surface: threads-api-own-investing, route: raw_only, note: "DbFW_MMk2OM (07-22, 무한매수법/세븐스플릿 investing strategy) — CK's secondary investing axis, single-surface own post."}
  - {surface: threads-api-own-consumer, route: discard, note: "Dbc78KPk5Ve (07-31 Samsung Galaxy Z Fold IMAGE, consumer-tech cheerleading) off durable AI/agent/infra axis."}
  - {surface: threads-api-replies, route: discard, note: "All new /replies rows personal/noise (을지로/오타쿠/쿠팡파트너스/중3엄마/육아/파리지앵); off durable axis."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own posts (07-21 harness, 07-22 investing, April–May managed-agents thread, 07-10 codex reply) — reinforcement of already-durable axes."}
  - {surface: cdp-youtube-subscriptions, route: discard, note: "CDP down (/json/version fails) — unavailable this run (access fact, not 변화 없음)."}
  - {surface: cdp-github-stars, route: discard, note: "CDP down — unavailable this run (access fact)."}
  - {surface: cdp-google-myactivity, route: discard, note: "CDP down — unavailable this run (access fact)."}
  - {surface: cdp-chatgpt-claude-x, route: discard, note: "CDP down — no hydrated tabs reachable; unavailable this run (access fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-15.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-15.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - concepts/ai-infra-operating-economics.md
  - log.md
---

# Raw — 08:00 Social/Browser Collection (2026-08-02)

## Live session notes
- 08:00 social run for 2026-08-02, delivered late by cron; actual capture ~23:55 KST.
- Idempotency: no `interest-signal-collection-08-00-2026-08-02.md` existed (and no August
  transcript at all) → collection proceeded. Last successful baseline = the 07-15 08:00
  social transcript; the 07-16 08:00 run FAILED and captured nothing (~18-day gap).
- Live Chrome CDP `127.0.0.1:9222` is **DOWN** (`/json/version` and `/json/list` both fail).
  YouTube / GitHub / Google / ChatGPT / Claude / X are all unavailable this run (access facts).
- Threads collected via the official Graph API (`graph.threads.net/v1.0`), account
  `@ethan13917` (user_id 27173231028946699). Long-lived token refreshed OK (expires_in
  5183974). Raw JSON cached to `.cache/threads_0800_0802.json` (disposable). Stdlib urllib
  collector `/tmp/th_collect_0800_0802.py`.

## 1) Threads — API (`/threads`, own posts + reposts)
Newest rows (timestamp | media_type | permalink | text-excerpt):
> 2026-07-31T09:24:50+0000 | IMAGE | https://www.threads.com/@ethan13917/post/Dbc78KPk5Ve | "대한민국 기술산업의 자존심 / 삼성이 주인공이네 … 갤럭시 z fold …"  ← NEW (consumer-tech, off-axis)
> 2026-07-31T08:46:55+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/Dbc3mYgE4qT | (empty; og:title → @jangfolk 장청일, civic/political)  ← NEW
> 2026-07-28T03:30:56+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DbUlDcSk_tL | (empty; og:title → @unclejobs.ai 엉클잡스, "Ai 시대, 돈이 되는 정보 전달")  ← NEW
> 2026-07-27T21:40:08+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DbT86Mkk5pH | (empty; og:title → @choi.openai CHOI, AI-axis handle)  ← NEW
> 2026-07-22T05:39:24+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DbFW_MMk2OM | "라오어 무한매수법, 박성현 작가의 세븐 스플릿 투자전략이 비슷하다 …"  ← NEW (investing axis)
> 2026-07-22T02:38:08+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DbFCPitE5gw | "ai시대가 오니 … 효율적인 시장(나스닥같은)도 혼란스러워하는 듯 … 중국 ai가 오픈웨이트를 채 …"  ← NEW (AI+market)
> 2026-07-21T12:03:01+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DbDeGBYkw4I | (empty)  ← NEW
> 2026-07-21T06:34:58+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DbC4jRwk5GN | "국산 하네스 까지마라. … 딸깍세계 한획을 그은 프로젝트 들이다. 초기에 프롬프팅, 컨텍스트 엔지니어링, 하네스 …"  ← NEW (AI-agent/harness axis)

### REPOST_FACADE author recovery (public og:title; descriptions empty / JS-rendered)
- `DbT86Mkk5pH` → `og:title` = "CHOI (@choi.openai) on Threads" — AI-axis handle; post text unrecoverable without CDP.
- `DbUlDcSk_tL` → `og:title` = "엉클잡스 | Ai 시대, 돈이 되는 정보 전달 (@unclejobs.ai) on Threads" — AI-monetization content creator; text unrecoverable.
- `Dbc3mYgE4qT` → `og:title` = "장청일 (@jangfolk) on Threads" — civic/political author; text unrecoverable.

## 2) Threads — API (`/replies`)
Newest rows (all personal / off-axis noise):
> 2026-08-02T07:19:26+0000 | https://www.threads.com/@ethan13917/post/Dbh3LZykysz | "담부터는 당당하게 을지로도 가보시죠!ㅋㅋ"
> 2026-07-31T16:41:44+0000 | https://www.threads.com/@ethan13917/post/Dbdt8HxE62I | "개발은 그렇다치고 저 사람 왜 말투부터 오타쿠 냄새나냐 …"
> 2026-07-31T09:25:58+0000 | https://www.threads.com/@ethan13917/post/Dbc8EbekzPB | 쿠팡 파트너스 link (coupang.com/a/…)
> 2026-07-31T03:05:18+0000 | https://www.threads.com/@ethan13917/post/DbcQgUZkxpq | "되겠냐 딴거해라"
> 2026-07-27T14:00:52+0000 | https://www.threads.com/@ethan13917/post/DbTIWahE1-H | "중3엄마면 40대중반정도 … 요샌 화장도 기술이고 …"
> 2026-07-26T21:46:57+0000 | https://www.threads.com/@ethan13917/post/DbRY5QZE5OX | "난 왜 뭘 더하고싶지…? 진짜 결혼 육아를 해서 …"
> 2026-07-23T08:27:06+0000 | https://www.threads.com/@ethan13917/post/DbIO-TRk3xG | "오랜만…"

## 3) Threads — API (`/mentions`)
> {"data": []}  — empty.

## 4) Threads — API (keyword_search: agent / Claude Code / Codex)
- `agent` (9 hits) — all `@ethan13917`'s own posts: the 07-22 investing post `DbFW_MMk2OM`,
  the April–May 2026 managed-agents thread (`DXyVR0ek1Rk` "배포·인증·저장·GPU·관측을 묶는 순간
  에이전트는 사업이 된다", `DXyU1IFE7l5` AWS AgentCore / OBO token, `DXyUz8tk4BJ` Google Agents
  CLI / TPU / Gemini Embedding 2), etc.
- `Claude Code` (1 hit) — `DXbQ6HPE_Ww` (04-22 "Claude Code + Aurora DSQL 앱개발 새 기본값").
- `Codex` (4 hits) — the 07-21 harness post `DbC4jRwk5GN`, the 07-10 "codex는 없나요?" reply
  `DamuCFrE8fG`, the managed-agents thread, a 2025-09 "AI를 OS로" post.
- All hits are CK's own already-durable content → reinforcement, no fresh external discovery.

## 5) YouTube subscriptions / Watch Later — CDP
- Unavailable this run: Chrome CDP `127.0.0.1:9222` down (`/json/version` fails). Access fact.

## 6) GitHub /stars, trending — CDP
- Unavailable this run: CDP down. Access fact.

## 7) Google My Activity (search) — CDP
- Unavailable this run: CDP down. Access fact.

## 8) ChatGPT / Claude / X — CDP
- Unavailable this run: CDP down; no hydrated tabs reachable. Access fact.

## Filtering notes
- Excluded from durable interpretation: Samsung consumer-electronics cheerleading, civic/political
  repost (@jangfolk), and all personal `/replies` (을지로/오타쿠/쿠팡/중3엄마/육아/파리지앵).
- Strongest (still non-durable) signal types this run: CK's own 07-21 harness/context-engineering
  defense post (reinforces managed-agents axis) and 07-22 AI+open-weight+market post (reinforces
  ai-infra open-weight axis) — both single-surface own posts; two AI-adjacent recovered repost
  authors (@choi.openai, @unclejobs.ai) with unrecoverable text.

## Why this raw exists
Evidence store for the 08-02 08:00 social run after an ~18-day baseline gap (07-16 run failed).
CDP down → Threads API only. Genuinely-new rows exist, but every on-axis item is CK's own
single-surface post reinforcing an existing axis. Net reinforcement-only; no durable page change.
