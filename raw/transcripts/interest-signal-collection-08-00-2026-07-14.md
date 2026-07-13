---
title: Interest signal collection — 08:00 social/browser run (2026-07-14)
created: 2026-07-14
type: raw-transcript
captured_at: 2026-07-14T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable, reinforcement, no-new-signal]
route_hint: raw_only
route_confidence: high
route_reason: >
  Morning social run. Baseline = prior social run (2026-07-14 19:00, which itself
  baselined on 07-13 08:00). Live Chrome CDP on 127.0.0.1:9222 again unavailable
  (/json/version connection-refused, exit 7) — CDP down since 07-11 — so all
  browser-authenticated surfaces (Threads liked, YouTube subs/liked/Watch Later,
  GitHub Stars, Google My Activity, ChatGPT, Claude, X) could not be collected;
  recorded as access facts, not negative evidence. Threads API was the only grounded
  authenticated source. This is a clean BOTH-STATIC no-new-signal run: own /threads
  newest row (DapQbi9k_Vk, 07-11 07:43 UTC) AND /replies newest row (Dato11Qk5Z4,
  2026-07-13 00:33 UTC soccer reply) are BOTH identical to the 07-14 19:00 social
  baseline. mentions empty. keyword_search (agent / Claude Code / Codex) again returned
  only CK's own April–May managed-agents posts + the 07-10 "codex는 없나요?" reply
  (reinforcement of an already-durable axis). Net = reinforcement-only / no-new-signal;
  no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "UNCHANGED vs 07-14 19:00 baseline — newest still DapQbi9k_Vk (07-11 07:43 UTC, empty REPOST_FACADE). No new own posts/reposts."}
  - {surface: threads-api-replies, route: raw_only, note: "UNCHANGED vs 07-14 19:00 baseline — newest still Dato11Qk5Z4 (2026-07-13 00:33 UTC) soccer opinion reply. Both surfaces static → clean no-new-signal."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts (+ 07-10 'codex는 없나요?' reply) — reinforcement of an already-durable axis, not new discovery."}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused (/json/version, exit 7); recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-07-14.md
  - raw/transcripts/interest-signal-collection-08-00-2026-07-13.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 08:00 Social/Browser Collection (2026-07-14)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-14 (captured 08:05 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was again **unavailable** (`/json/version` connection-refused, exit 7) — CDP still down for social surfaces (down since 07-11). Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 08:00 raw transcript existed before this run → proceeded with collection. Baseline = prior social run (2026-07-14 19:00, captured just after midnight).
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token, expires_in ~5.16M s); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-08-00-2026-07-14.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_0800_0714.py` run via `python3 <path>` using stdlib `urllib` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).

## 1) Threads API — own `/threads` (copied) — NO NEW ROWS since 07-14 19:00 baseline
Source URL: https://www.threads.com/@ethan13917
Newest row is identical to the 07-14 19:00 baseline; no own posts/reposts since then.
> `[2026-07-11T07:43:22Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DapQbi9k_Vk (empty; reposts @_joojinwoo civic/political; baseline)
> `[2026-07-11T01:47:20Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daonr3ekwwK (empty; reposts @sooneun1777 personal; baseline)
> `[2026-07-10T18:13:25Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanzvRIE-WT (empty; reposts @choi.openai; baseline)
> `[2026-07-10T11:57:53Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanIwyBE6Du (empty; reposts @wakeupmoon.ai; baseline)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px (축구/감독놀이; noise; baseline)
> (older 07-09 → 07-04 REPOST_FACADE rows all unchanged from baselines: DalhLj5E7Xd, DakUpdgE2cy, Daj1jPakxXo, DaiHwK9E-oR, DaedgJDk8Kx, DaeAEVik9gO, DaXLBO-EzG-)

## 2) Threads API — own `/replies` (copied) — NO NEW ROWS since 07-14 19:00 baseline
Source URL: https://www.threads.com/@ethan13917/replies
Newest reply is identical to the 07-14 19:00 baseline (topped at Dato11Qk5Z4, 07-13 00:33). Both surfaces static → clean no-new-signal.
> `[2026-07-13T00:33:38Z]` https://www.threads.com/@ethan13917/post/Dato11Qk5Z4 "축구가 무슨 자아니 에고니 따지면서하냐? …" (soccer opinion; off-axis noise; baseline)
> `[2026-07-11T08:04:38Z]` https://www.threads.com/@ethan13917/post/DapS3RAE4dA "ㅋㅋㅋ말이되냐 … 경찰에서 수사를 …" (civic/police-commentary — noise; baseline)
> `[2026-07-10T08:04:19Z]` https://www.threads.com/@ethan13917/post/DamuCFrE8fG "codex는 없나요?" (mildly on-axis; already captured 07-10 19:00 — reinforcement)
> (all other 07-10/07-07/07-06/07-05 replies — military(7사단 GOP)/soccer(홍명보,이강인,김민재)/personal/entertainment — unchanged from baselines; noise)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all CK's own posts 2026-04-20 ~ 2026-05-01** (Managed Agents / session·harness·sandbox·vault runtime + "묶인 순간 에이전트는 사업이 된다").
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
- Excluded from the report as noise: all soccer/홍명보/이강인/김민재 posts and replies, military(7사단 GOP), civic/police rows, entertainment/personal replies.
- No genuinely new row on any grounded surface this run — both own `/threads` and `/replies` tops are identical to the 07-14 19:00 baseline.
- keyword-search rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-14 08:00 social pass. Supports a clean no-new-signal /
reinforcement-only outcome: CDP-authenticated surfaces were unavailable, and the only
grounded source (Threads API) showed both own `/threads` and `/replies` unchanged since
the 07-14 19:00 baseline, with keyword-search returning only CK's own durable
managed-agents posts. Durable action = raw transcript + Honcho audit + log entry;
`index.md` and non-Honcho concept pages left unchanged.
