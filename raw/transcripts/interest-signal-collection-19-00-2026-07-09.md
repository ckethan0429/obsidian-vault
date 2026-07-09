---
title: Interest signal collection — 19:00 social/browser run (2026-07-09)
created: 2026-07-09
type: raw-transcript
captured_at: 2026-07-09T19:06:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon social run, after the same-day 08:00 social (Threads API only, CDP down) and
  11:00 new-target (append_existing) passes. Live Chrome CDP on 127.0.0.1:9222 was still
  unavailable (connection refused, curl exit 7), so every browser-authenticated surface
  (Threads liked, YouTube subscriptions/liked/Watch Later, GitHub Stars, Google My Activity,
  ChatGPT, Claude, X) could not be collected — recorded as access facts, not 변화 없음. Threads
  API was the only grounded source. Against the 08:00 baseline the only genuinely-new own rows
  are two empty REPOST_FACADE reposts (DakUpdgE2cy 07-09 09:44 UTC, Daj1jPakxXo 07-09 05:12 UTC);
  both have empty text and public HTML is JS-rendered, so content is not recoverable without CDP.
  Single-surface, low durability. Replies are the same 홍명보/한국축구 civic-sports debate
  (discard). keyword_search (agent / Claude Code / Codex) again returned only CK's OWN April–May
  managed-agents posts (reinforcement of an already-durable axis). mentions empty. Net: raw_only /
  reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "Two new empty REPOST_FACADE reposts since the 08:00 baseline (DakUpdgE2cy 07-09 09:44 UTC, Daj1jPakxXo 07-09 05:12 UTC); public HTML JS-rendered, content not recoverable without CDP. All other rows repeat the 08:00/19:00 baselines (soccer/bitcoin/Apple FOMO)."}
  - {surface: threads-api-replies, route: discard, note: "All 홍명보/한국축구 전술·데이터분석 civic-sports debate — same cluster as 08:00 baseline; no AI/agent/infra content."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts — reinforcement of an already-durable axis, not new discovery."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset"}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused; recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-09.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-09.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 19:00 Social/Browser Collection (2026-07-09)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-09 (captured 19:06 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was still **unavailable** (`/json/version` and `/json/list` both connection-refused, curl exit 7), same as the 08:00 run. Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 19:00 raw transcript existed before this run → proceeded with collection.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-19-00-2026-07-09.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_1900.py` run via `python3 <path>` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).

## 1) Threads API — own `/threads` (copied)
Source URL: https://www.threads.com/@ethan13917
Newest rows (UTC timestamps):
> `[2026-07-09T09:44:01Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DakUpdgE2cy (text empty; public HTML JS-rendered, content not recoverable without CDP) **(new since 08:00 baseline)**
> `[2026-07-09T05:12:18Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daj1jPakxXo (text empty; public HTML JS-rendered, content not recoverable without CDP) **(new since 08:00 baseline)**
> `[2026-07-08T13:12:52Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaiHwK9E-oR (empty; already in 08:00 baseline)
> `[2026-07-07T03:05:57Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaedgJDk8Kx (empty; baseline)
> `[2026-07-06T22:48:45Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaeAEVik9gO (empty; baseline)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px "한국 선수들이 역대급이 아니란건 동의! … 축구는 확실히 감독놀이는 맞음. …" (soccer; baseline)
> `[2026-07-04 ~ 07-01] REPOST_FACADE ×8` — DaXLBO-EzG-, DaUrPU_E3MD, DaT4B85kwSZ, DaT1CAIk5l8, DaRslX6E38T, DaQQIW5E2sR, DaQI0ChE16M, DaO7XNpE9up (empty text; civic-sports/social reposts; baseline)
> `[2026-07-01T02:49:21Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaO-1ShE7lv "오늘부터 비트코인 하루에 5만원씩 모으겠습니다. …" (personal investing intent; baseline)
> (older soccer/홍명보/Apple FOMO rows unchanged from baselines)

## 2) Threads API — own `/replies` (copied)
Source URL: https://www.threads.com/@ethan13917/replies
Newest replies (07-05 ~ 07-07) are all 홍명보/한국축구 전술·데이터분석 논쟁 — same civic-sports cluster as the 08:00 baseline; no new rows since 08:00:
> `[2026-07-07T03:11:23Z]` https://www.threads.com/@ethan13917/post/DaeeH7EE6DR "선수사이에 갈등 … 강력한 카리스마 … 홍명보 …"
> `[2026-07-05T15:34:46Z]` https://www.threads.com/@ethan13917/post/Daapm2mkzkg "전력분석관 … 영상자료 수집 … 유의미한 데이터 분석 …"
> `[2026-07-05T15:00:20Z]` https://www.threads.com/@ethan13917/post/DaalqnUE9lB "사람을 안믿고 시스템을 믿으면됨"
> (all civic-sports debate; no AI/agent/infra content — discard)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all are CK's own posts from 2026-04-20 ~ 2026-05-01** on Managed Agents / session·harness·sandbox·vault runtime + the "배포·인증·저장·GPU·관측을 묶는 순간 에이전트는 사업이 된다" thread. e.g. https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk , https://www.threads.com/@ethan13917/post/DXVuhU9EzA7
- `Claude Code` → 1 hit, CK's own 2026-04-22 post (Claude Code + Aurora DSQL). https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww
- `Codex` → 2 hits, CK's own 2026-05-01 and 2025-09-09 posts.
- Interpretation: **not new external signals** — CK's own already-durable managed-agents thesis (captured in `concepts/managed-agents-practical-summary.md`). Pure reinforcement.

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
- Excluded from the report as noise: all 홍명보/한국축구/태극기 soccer-civic posts and replies.
- Bitcoin "하루 5만원씩 모으기" and Apple/맥북 FOMO are personal single-surface notes, low durability — raw evidence only.
- The keyword-search "AI" rows are CK's own old posts, not fresh discovery — reinforcement.
- The two new REPOST_FACADE reposts (`DakUpdgE2cy`, `Daj1jPakxXo`) have empty text and JS-rendered public HTML; content not recoverable without CDP.

## Why this raw exists
Evidence store for the 2026-07-09 19:00 social pass. Supports a `raw_only` /
reinforcement-only outcome: CDP-authenticated surfaces were still unavailable, and the only
grounded source (Threads API) surfaced two new empty repost facades plus civic-sports/personal
noise and reinforcement of CK's already-durable managed-agents axis. Durable action = raw
transcript + Honcho audit + log entry; `index.md` and non-Honcho concept pages left unchanged.
