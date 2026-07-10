---
title: Interest signal collection — 08:00 social/browser run (2026-07-11)
created: 2026-07-11
type: raw-transcript
captured_at: 2026-07-11T08:10:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable]
route_hint: raw_only
route_confidence: high
route_reason: >
  Morning social run. Live Chrome CDP on 127.0.0.1:9222 was again unavailable
  (connection refused, curl exit 7) — the seventh-plus consecutive social run with CDP
  down — so all browser-authenticated surfaces (Threads liked, YouTube subscriptions/
  liked/Watch Later, GitHub Stars, Google My Activity, ChatGPT, Claude, X) could not be
  collected; recorded as access facts, not negative evidence. Threads API was the only
  grounded authenticated source. Against the same-day-prior 07-10 19:00 social baseline
  own /threads gained TWO genuinely-new empty REPOST_FACADE rows: DanzvRIE-WT (07-10
  18:13 UTC, public og:title recovers reposted author @choi.openai — OpenAI-adjacent,
  mildly on the AI axis) and DanIwyBE6Du (07-10 11:57 UTC, og:title recovers author
  @wakeupmoon.ai — "WUM | AI 엔지니어", on the AI-engineering axis). Both have empty
  og:description so the post text is not recoverable without CDP; single-surface, low
  durability, reinforcing CK's existing AI/agent axis rather than opening a new branch.
  /replies rows (incl. the thin "codex는 없나요?" line) were all already captured at
  19:00. keyword_search (agent / Claude Code / Codex) again returned only CK's OWN
  April–May managed-agents posts (reinforcement of an already-durable axis). mentions
  empty. Net: raw_only / reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "Two new empty REPOST_FACADE rows since the 19:00 baseline — DanzvRIE-WT (07-10 18:13 UTC, reposts @choi.openai per og:title) and DanIwyBE6Du (07-10 11:57 UTC, reposts @wakeupmoon.ai 'WUM | AI 엔지니어' per og:title); og:description empty for both, text not recoverable without CDP. Both single-surface, low durability, on/near the AI axis. All other rows repeat prior baselines."}
  - {surface: threads-api-replies, route: raw_only, note: "No new rows since the 19:00 baseline; newest still the 07-10 08:41 entertainment reply. The thin on-axis 'codex는 없나요?' (DamuCFrE8fG, 07-10 08:04 UTC) was already captured at 19:00 — reinforcement. Remainder are soccer/military/entertainment/personal noise."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts (+ the 07-10 'codex는 없나요?' reply) — reinforcement of an already-durable axis, not new discovery."}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused (curl exit 7); recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-07-10.md
  - raw/transcripts/interest-signal-collection-08-00-2026-07-10.md
  - raw/transcripts/interest-signal-collection-22-00-2026-07-10.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 08:00 Social/Browser Collection (2026-07-11)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-11 (captured 08:10 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was again **unavailable** (`/json/version` connection-refused, curl exit 7) — CDP still down for social surfaces. Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 08:00 raw transcript existed before this run → proceeded with collection.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-08-00-2026-07-11.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_0800_0711.py` run via `python3 <path>` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).

## 1) Threads API — own `/threads` (copied) — TWO NEW ROWS since 19:00
Source URL: https://www.threads.com/@ethan13917
Two genuinely-new rows since the 07-10 19:00 baseline (which had newest at DalhLj5E7Xd, 07-09 20:52):
> `[2026-07-10T18:13:25Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanzvRIE-WT (text empty; public HTML og:title = "CHOI (@choi.openai) on Threads" → reposts `@choi.openai` (OpenAI-adjacent, mildly on AI axis); og:description empty, content not recoverable without CDP) **(new since 19:00 baseline)**
> `[2026-07-10T11:57:53Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DanIwyBE6Du (text empty; public HTML og:title = "WUM | AI 엔지니어 (@wakeupmoon.ai) on Threads" → reposts `@wakeupmoon.ai` (AI-engineering handle, on AI axis); og:description empty, content not recoverable without CDP) **(new since 19:00 baseline)**
> `[2026-07-09T20:52:47Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DalhLj5E7Xd (empty; reposts @choi.openai; baseline)
> `[2026-07-09T09:44:01Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DakUpdgE2cy (empty; baseline)
> `[2026-07-08T13:12:52Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaiHwK9E-oR (empty; baseline)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px "한국 선수들이 역대급이 아니란건 동의! … 축구는 확실히 감독놀이는 맞음. …" (soccer; baseline)
> `[2026-07-01T02:49:21Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaO-1ShE7lv "오늘부터 비트코인 하루에 5만원씩 모으겠습니다. …" (personal investing intent; baseline)
> (older soccer/홍명보/태극기/repost rows unchanged from baselines)

## 2) Threads API — own `/replies` (copied)
Source URL: https://www.threads.com/@ethan13917/replies
No new rows since the 19:00 baseline. Newest still the 07-10 08:41 entertainment reply already captured at 19:00:
> `[2026-07-10T08:41:11Z]` https://www.threads.com/@ethan13917/post/DamyQC5E1Vm "전 호주노예 때랑 지금이요 … 조튜브 …" (entertainment — noise; baseline)
> `[2026-07-10T08:04:19Z]` https://www.threads.com/@ethan13917/post/DamuCFrE8fG "codex는 없나요?" (mildly on-axis coding-agent mention; **already captured at 19:00** — reinforcement)
> (all other 07-10/07-07/07-05 replies — military(7사단 GOP)/soccer(홍명보/한국축구)/personal — unchanged from the 19:00 baseline; noise)

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
- Excluded from the report as noise: all 홍명보/한국축구/태극기 soccer-civic posts and replies, military(7사단 GOP) and entertainment/personal replies.
- The two new REPOST_FACADE rows recover their reposted authors via og:title (@choi.openai, @wakeupmoon.ai — both AI-adjacent), but the actual post text is JS-rendered/empty so it is not recoverable without CDP. Kept as raw evidence; single-surface, low durability, reinforcing the existing AI/agent interest axis.
- keyword-search "AI" rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-11 08:00 social pass. Supports a `raw_only` /
reinforcement-only outcome: CDP-authenticated surfaces were still unavailable, and the
only grounded source (Threads API) surfaced two new empty repost facades whose reposted
authors (@choi.openai, @wakeupmoon.ai) are both AI-adjacent — but the post text is not
recoverable without CDP — plus civic-sports/personal noise and reinforcement of CK's
already-durable managed-agents axis. Durable action = raw transcript + Honcho audit + log
entry; `index.md` and non-Honcho concept pages left unchanged.
