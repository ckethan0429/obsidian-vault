---
title: Interest signal collection — 08:00 social/browser run (2026-07-12)
created: 2026-07-12
type: raw-transcript
captured_at: 2026-07-12T08:02:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable, no-new-signal]
route_hint: raw_only
route_confidence: high
route_reason: >
  Morning social run. Baseline = prior social run (2026-07-11 19:00), per the
  "baseline against the prior social run, not the 22:00 new-target snapshot" rule.
  Live Chrome CDP on 127.0.0.1:9222 was again unavailable (/json/version and /json/list
  connection-refused) — CDP down since at least 07-11 all day — so all browser-authenticated
  surfaces (Threads liked, YouTube subscriptions/liked/Watch Later, GitHub Stars, Google My
  Activity, ChatGPT, Claude, X) could not be collected; recorded as access facts, not negative
  evidence. Threads API was the only grounded authenticated source. Against the 07-11 19:00
  baseline, own /threads is UNCHANGED (newest still DapQbi9k_Vk, 07-11 07:43 UTC) and /replies
  is UNCHANGED (newest still DapS3RAE4dA, 07-11 08:04 UTC) — no new own posts or replies since
  the baseline. mentions empty. keyword_search (agent / Claude Code / Codex) again returned only
  CK's own April–May managed-agents posts + the 07-10 "codex는 없나요?" reply (reinforcement of an
  already-durable axis). Net: no-new-signal / reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "UNCHANGED since 07-11 19:00 baseline — newest still DapQbi9k_Vk (07-11 07:43 UTC, empty REPOST_FACADE reposting @_joojinwoo, civic/political) and Daonr3ekwwK (07-11 01:47 UTC, reposts @sooneun1777 personal). No new rows. All rows repeat prior baselines."}
  - {surface: threads-api-replies, route: raw_only, note: "UNCHANGED since 07-11 19:00 baseline — newest still DapS3RAE4dA (07-11 08:04, civic/police-commentary noise). No new dated rows. The on-axis 'codex는 없나요?' (07-10) was already captured 07-10 19:00."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts (+ the 07-10 'codex는 없나요?' reply) — reinforcement of an already-durable axis, not new discovery."}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused (/json/version, /json/list); recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-07-11.md
  - raw/transcripts/interest-signal-collection-08-00-2026-07-11.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 08:00 Social/Browser Collection (2026-07-12)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-12 (captured 08:02 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was again **unavailable** (`/json/version` and `/json/list` connection-refused) — CDP still down for social surfaces. Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 08:00 raw transcript existed before this run → proceeded with collection.
- Baselined against the prior **social** run (07-11 19:00), not the 22:00 new-target snapshot.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token, expires_in ~5.1M s); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-08-00-2026-07-12.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_0800_0712.py` run via `python3 <path>` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).

## 1) Threads API — own `/threads` (copied) — NO NEW ROWS since 07-11 19:00
Source URL: https://www.threads.com/@ethan13917
Newest row is identical to the 07-11 19:00 baseline; no own posts/reposts since then.
> `[2026-07-11T07:43:22Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DapQbi9k_Vk (empty; reposts @_joojinwoo 주진우 civic/political; baseline)
> `[2026-07-11T01:47:20Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daonr3ekwwK (empty; reposts @sooneun1777 personal/lifestyle; baseline)
> `[2026-07-10T18:13:25Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanzvRIE-WT (empty; reposts @choi.openai; baseline)
> `[2026-07-10T11:57:53Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanIwyBE6Du (empty; reposts @wakeupmoon.ai; baseline)
> (older 07-09/07-08/07-07/07-06/07-05/07-04/07-03/07-02 repost + soccer rows all unchanged from baselines)

## 2) Threads API — own `/replies` (copied) — NO NEW ROWS since 07-11 19:00
Source URL: https://www.threads.com/@ethan13917/replies
Newest reply is identical to the 07-11 19:00 baseline; no new dated rows.
> `[2026-07-11T08:04:38Z]` https://www.threads.com/@ethan13917/post/DapS3RAE4dA "ㅋㅋㅋ말이되냐 … 경찰에서 수사를 잘못해서 보완하라고 …" (civic/police-commentary — noise; baseline)
> `[2026-07-10T08:04:19Z]` https://www.threads.com/@ethan13917/post/DamuCFrE8fG "codex는 없나요?" (mildly on-axis; already captured 07-10 19:00 — reinforcement)
> (all other 07-10/07-07/07-06 replies — military(7사단 GOP)/soccer(홍명보)/personal/entertainment — unchanged from baselines; noise)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all CK's own posts 2026-04-20 ~ 2026-05-01** (Managed Agents / session·harness·sandbox·vault runtime + "배포·인증·저장·GPU·관측을 묶는 순간 에이전트는 사업이 된다").
- `Claude Code` → 1 hit, CK's own 2026-04-22 post (Claude Code + Aurora DSQL). https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww
- `Codex` → 3 hits: CK's own 07-10 "codex는 없나요?" reply plus 2026-05-01 and 2025-09-09 posts.
- Interpretation: **not new external signals** — reinforcement of CK's already-durable managed-agents thesis (`concepts/managed-agents-practical-summary.md`).

## 4) Threads API — `/mentions`
Source URL: https://graph.threads.net/v1.0/{uid}/mentions — returned empty dataset (`{"data": []}`).

## 5) Browser-authenticated surfaces — unavailable
- YouTube (subscriptions / liked / Watch Later): `URL unavailable` — CDP down, cannot authenticate.
- GitHub Stars: `URL unavailable` — CDP down.
- Google My Activity: `URL unavailable` — CDP down.
- ChatGPT / Claude recents: `URL unavailable` — CDP down.
- X likes/reposts: `URL unavailable` — CDP down.
- Recorded as access facts only; not inferred as `변화 없음`.

## Filtering notes
- Excluded from the report as noise: all soccer/홍명보/한국축구 posts and replies, military(7사단 GOP), entertainment/personal replies, and the civic/police-commentary reply.
- No new own posts or replies appeared since the 07-11 19:00 baseline — both surfaces static.
- keyword-search rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-12 08:00 social pass. Supports a `raw_only` /
no-new-signal outcome: CDP-authenticated surfaces were unavailable, and the only
grounded source (Threads API) showed both own `/threads` and `/replies` unchanged since
the 07-11 19:00 baseline, with keyword-search returning only CK's own durable managed-agents
posts. Durable action = raw transcript + Honcho audit + log entry; `index.md` and non-Honcho
concept pages left unchanged.
