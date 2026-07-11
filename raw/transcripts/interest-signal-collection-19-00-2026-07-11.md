---
title: Interest signal collection — 19:00 social/browser run (2026-07-11)
created: 2026-07-11
type: raw-transcript
captured_at: 2026-07-11T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon social run after same-day 08:00 social (raw_only) and 11:00 new-target
  (append_existing) baselines. Live Chrome CDP on 127.0.0.1:9222 was again unavailable
  (connection refused, curl exit 7) — CDP still down all day — so all browser-authenticated
  surfaces (Threads liked, YouTube subscriptions/liked/Watch Later, GitHub Stars, Google My
  Activity, ChatGPT, Claude, X) could not be collected; recorded as access facts, not negative
  evidence. Threads API was the only grounded authenticated source. Against the same-day 08:00
  baseline own /threads gained TWO genuinely-new empty REPOST_FACADE rows: DapQbi9k_Vk (07-11
  07:43 UTC, public og:title recovers reposted author @_joojinwoo — 주진우, Korean investigative
  journalist, civic/political axis, OFF the AI axis) and Daonr3ekwwK (07-11 01:47 UTC, og:title
  recovers author @sooneun1777 — personal/lifestyle). Both og:description empty, post text not
  recoverable without CDP; single-surface, low durability, civic/personal rotation NOT on CK's
  durable AI/agent/infra axis. /replies gained one new civic/police-commentary row (DapS3RAE4dA,
  07-11 08:04) — noise. keyword_search (agent / Claude Code / Codex) again returned only CK's OWN
  April–May managed-agents posts (reinforcement of an already-durable axis). mentions empty.
  Net: raw_only / reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "Two new empty REPOST_FACADE rows since the 08:00 baseline — DapQbi9k_Vk (07-11 07:43 UTC, reposts @_joojinwoo 주진우 investigative journalist per og:title, civic/political, OFF AI axis) and Daonr3ekwwK (07-11 01:47 UTC, reposts @sooneun1777 personal/lifestyle per og:title); og:description empty for both, text not recoverable without CDP. Both single-surface civic/personal rotation, low durability, off the durable AI/agent/infra axis. All other rows repeat prior baselines."}
  - {surface: threads-api-replies, route: raw_only, note: "One new civic/police-commentary reply since 08:00 (DapS3RAE4dA, 07-11 08:04 — '경찰 수사 보완' 사건 코멘트, noise). Older 07-10 codex reply + entertainment/soccer/military rows all baselined. The on-axis 'codex는 없나요?' was already captured 07-10 19:00."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts (+ the 07-10 'codex는 없나요?' reply) — reinforcement of an already-durable axis, not new discovery."}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused (curl exit 7); recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-11.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-11.md
  - raw/transcripts/interest-signal-collection-19-00-2026-07-10.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 19:00 Social/Browser Collection (2026-07-11)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-11 (captured 19:05 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was again **unavailable** (`/json/version` connection-refused, curl exit 7) — CDP still down for social surfaces all day. Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 19:00 raw transcript existed before this run → proceeded with collection.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-19-00-2026-07-11.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_1900_0711.py` run via `python3 <path>` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).

## 1) Threads API — own `/threads` (copied) — TWO NEW ROWS since 08:00
Source URL: https://www.threads.com/@ethan13917
Two genuinely-new rows since the 07-11 08:00 baseline (which had newest at DanzvRIE-WT, 07-10 18:13):
> `[2026-07-11T07:43:22Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DapQbi9k_Vk (text empty; public HTML og:title = "주진우 (@_joojinwoo) on Threads" → reposts `@_joojinwoo` (주진우, Korean investigative journalist — civic/political, OFF the AI axis); og:description empty, content not recoverable without CDP) **(new since 08:00 baseline)**
> `[2026-07-11T01:47:20Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daonr3ekwwK (text empty; public HTML og:title = "수앤은솔이 (@sooneun1777) on Threads" → reposts `@sooneun1777` (personal/lifestyle handle); og:description empty, content not recoverable without CDP) **(new since 08:00 baseline)**
> `[2026-07-10T18:13:25Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanzvRIE-WT (empty; reposts @choi.openai; 08:00 baseline)
> `[2026-07-10T11:57:53Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanIwyBE6Du (empty; reposts @wakeupmoon.ai; 08:00 baseline)
> `[2026-07-09T20:52:47Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DalhLj5E7Xd (empty; baseline)
> `[2026-07-09T09:44:01Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DakUpdgE2cy (empty; baseline)
> `[2026-07-09T05:12:18Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daj1jPakxXo (empty; baseline)
> `[2026-07-08T13:12:52Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaiHwK9E-oR (empty; baseline)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px "한국 선수들이 역대급이 아니란건 동의! … 축구는 확실히 감독놀이는 맞음. …" (soccer; baseline)
> (older soccer/홍명보/repost rows unchanged from baselines)

Note: both new rows recover only the reposted author via og:title; the reposted post text is JS-rendered/empty and not recoverable without CDP. @_joojinwoo (주진우) is civic/political; @sooneun1777 is personal/lifestyle. Neither is on CK's durable AI/agent/infra axis — single-surface civic/personal feed rotation.

## 2) Threads API — own `/replies` (copied) — ONE NEW ROW since 08:00
Source URL: https://www.threads.com/@ethan13917/replies
> `[2026-07-11T08:04:38Z]` https://www.threads.com/@ethan13917/post/DapS3RAE4dA "ㅋㅋㅋ말이되냐 … 사건이 일어난거고 경찰에서 수사를 잘못해서 보완하라고 하는건데 …" (civic/police-investigation commentary — noise) **(new since 08:00 baseline)**
> `[2026-07-10T08:41:11Z]` https://www.threads.com/@ethan13917/post/DamyQC5E1Vm "전 호주노예 때랑 지금이요 … 조튜브 …" (entertainment — noise; baseline)
> `[2026-07-10T08:04:19Z]` https://www.threads.com/@ethan13917/post/DamuCFrE8fG "codex는 없나요?" (mildly on-axis; already captured 07-10 19:00 — reinforcement)
> (all other 07-10/07-07/07-06 replies — military(7사단 GOP)/soccer(홍명보/한국축구)/personal — unchanged from baselines; noise)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all CK's own posts 2026-04-20 ~ 2026-05-01** (Managed Agents / session·harness·sandbox·vault runtime + "배포·인증·저장·GPU·관측을 묶는 순간 에이전트는 사업이 된다"). e.g. https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk , https://www.threads.com/@ethan13917/post/DXVuhU9EzA7
- `Claude Code` → 1 hit, CK's own 2026-04-22 post (Claude Code + Aurora DSQL). https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww
- `Codex` → 3 hits: CK's own 07-10 "codex는 없나요?" reply plus 2026-05-01 and 2025-09-09 posts.
- Interpretation: **not new external signals** — reinforcement of CK's already-durable managed-agents thesis (`concepts/managed-agents-practical-summary.md`).

## 4) Threads API — `/mentions`
Source URL: https://graph.threads.net/v1.0/{uid}/mentions — returned empty dataset (`{"data": []}`). No access-tier error this run.

## 5) Browser-authenticated surfaces — unavailable
- YouTube (subscriptions / liked / Watch Later): `URL unavailable` — CDP down, cannot authenticate.
- GitHub Stars: `URL unavailable` — CDP down.
- Google My Activity: `URL unavailable` — CDP down.
- ChatGPT / Claude recents: `URL unavailable` — CDP down.
- X likes/reposts: `URL unavailable` — CDP down.
- Recorded as access facts only; not inferred as `변화 없음`.

## Filtering notes
- Excluded from the report as noise: all soccer/홍명보/한국축구 posts and replies, military(7사단 GOP), entertainment/personal replies, and the new civic/police-commentary reply.
- The two new REPOST_FACADE rows recover their reposted authors via og:title (@_joojinwoo civic/political, @sooneun1777 personal), but the actual post text is JS-rendered/empty so it is not recoverable without CDP. Kept as raw evidence; single-surface, low durability, off the AI axis.
- keyword-search rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-11 19:00 social pass. Supports a `raw_only` /
reinforcement-only outcome: CDP-authenticated surfaces were still unavailable, and the
only grounded source (Threads API) surfaced two new empty repost facades whose reposted
authors (@_joojinwoo, @sooneun1777) are civic/political and personal — off the durable AI
axis — plus one new civic/police-commentary reply and reinforcement of CK's already-durable
managed-agents axis. Durable action = raw transcript + Honcho audit + log entry; `index.md`
and non-Honcho concept pages left unchanged.
