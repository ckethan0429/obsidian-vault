---
title: Interest signal collection — 19:00 social/browser run (2026-07-10)
created: 2026-07-10
type: raw-transcript
captured_at: 2026-07-10T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon social run after the same-day 08:00 social (Threads-API-only) and 11:00
  new-target baselines. Live Chrome CDP on 127.0.0.1:9222 was again unavailable
  (connection refused, curl exit 7) — the sixth consecutive social run with CDP down —
  so all browser-authenticated surfaces (Threads liked, YouTube subscriptions/liked/
  Watch Later, GitHub Stars, Google My Activity, ChatGPT, Claude, X) could not be
  collected; recorded as access facts, not negative evidence. Threads API was the only
  grounded authenticated source. Against the same-day 08:00 baseline there are NO new
  own /threads rows (newest still DalhLj5E7Xd). /replies DID gain fresh 2026-07-10 rows
  since the morning (08:00 had newest at 07-07), but they are overwhelmingly personal/
  soccer/military/entertainment noise; the only mildly on-axis reply is one line —
  "codex는 없나요?" (DamuCFrE8fG, 07-10 08:04 UTC) — a single-surface coding-agent mention,
  low durability. /mentions empty. keyword_search (agent / Claude Code / Codex) again
  returned only CK's OWN April–May managed-agents posts (reinforcement of an
  already-durable axis). Net: raw_only / reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "No new rows since the 08:00 baseline; newest is still REPOST_FACADE DalhLj5E7Xd (07-09 20:52 UTC). All rows repeat prior baselines (soccer/bitcoin/태극기/civic reposts)."}
  - {surface: threads-api-replies, route: raw_only, note: "Fresh 2026-07-10 replies appeared since the 08:00 baseline (which had newest at 07-07). One mildly on-axis: '\''codex는 없나요?'\'' (DamuCFrE8fG, 07-10 08:04 UTC) — single-surface coding-agent mention, low durability. All other new replies are personal/soccer/military(7사단 GOP)/entertainment noise → discard."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts — reinforcement of an already-durable axis, not new discovery."}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused (curl exit 7, sixth consecutive social run); recorded as access fact, not 변화 없음"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-10.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-10.md
  - raw/transcripts/interest-signal-collection-19-00-2026-07-09.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 19:00 Social/Browser Collection (2026-07-10)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-10 (captured 19:05 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was again **unavailable** (`/json/version` connection-refused, curl exit 7) — the sixth consecutive social run with CDP down. Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected. Recorded as availability facts, not `변화 없음`.
- No same-day 19:00 raw transcript existed before this run → proceeded with collection.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token); `/v1.0/me` confirmed identity (`ethan13917`, `씨케이`). Raw JSON cached at `~/wiki/.cache/threads-api-collection-19-00-2026-07-10.json` (disposable).
- Cron-mode execution: standalone `/tmp/th_collect_1900_0710.py` run via `python3 <path>` (execute_code / heredoc / `-c` / pipe-to-interpreter blocked in cron).
- Baseline for novelty: the same-day 08:00 social transcript (Threads-API-only) plus the 11:00 new-target run and prior-day 19:00.

## 1) Threads API — own `/threads` (copied)
Source URL: https://www.threads.com/@ethan13917
No new rows since the 08:00 baseline. Newest is unchanged:
> `[2026-07-09T20:52:47Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DalhLj5E7Xd (text empty; already captured at 08:00 — reposts @choi.openai per og:title, content not recoverable without CDP)
> `[2026-07-09T09:44:01Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DakUpdgE2cy (empty; baseline)
> `[2026-07-09T05:12:18Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/Daj1jPakxXo (empty; baseline)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px "한국 선수들이 역대급이 아니란건 동의! … 축구는 확실히 감독놀이는 맞음. …" (soccer; baseline)
> `[2026-07-01T02:49:21Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaO-1ShE7lv "오늘부터 비트코인 하루에 5만원씩 모으겠습니다. …" (personal investing intent; baseline)
> (all older soccer/홍명보/태극기/repost rows unchanged from baselines)

## 2) Threads API — own `/replies` (copied) — FRESH ROWS since 08:00
Source URL: https://www.threads.com/@ethan13917/replies
The 08:00 baseline had newest replies at 07-07. New 2026-07-10 replies visible this run:
> `[2026-07-10T08:41:11Z]` https://www.threads.com/@ethan13917/post/DamyQC5E1Vm "전 호주노예 때랑 지금이요 ㅋㅋㅋ 조튜브 가족 친구로 구성된 유니버스가 재밌어서 …" (entertainment/유튜브 잡담 — noise)
> `[2026-07-10T08:04:19Z]` https://www.threads.com/@ethan13917/post/DamuCFrE8fG "codex는 없나요?" **(mildly on-axis — coding-agent/Codex mention; single-surface, low durability)**
> `[2026-07-10T07:13:26Z]` https://www.threads.com/@ethan13917/post/DamoNY5k2uN "단결 7사단 5gop 소대장 출신입니다. 같은부대여서 반가운 마음에 …" (military/personal — noise)
> `[2026-07-10T07:11:54Z]` https://www.threads.com/@ethan13917/post/DamoCHWkza- "단결 7사단 gop 소대장이었습니다. 공감합니다" (military/personal — noise)
> `[2026-07-10T05:53:30Z]` https://www.threads.com/@ethan13917/post/DamfD5BExOZ "푹자고 일어나서 아직 덜깬게 넘귀엽다" (personal — noise)
> `[2026-07-10T05:50:16Z]` https://www.threads.com/@ethan13917/post/DamesMVE4pA "king is back" (soccer/personal — noise)
> `[2026-07-10T05:49:15Z]` https://www.threads.com/@ethan13917/post/Damek14E59A "인정. 이강인,김민재 외에는 경쟁력 있다고 할만한 애가 없지" (soccer — noise)
> `[2026-07-10T05:47:48Z]` https://www.threads.com/@ethan13917/post/DameaH7k6it "대리만족중입니다 ㅋㅋㅋ" (personal — noise)
> `[2026-07-10T03:14:11Z]` https://www.threads.com/@ethan13917/post/DamM1ECEwCb "신생아때도 귀여워" (personal — noise)
> `[2026-07-10T02:51:34Z]` https://www.threads.com/@ethan13917/post/DamKPb4kzzd "이진욱은 오히려 좋을듯" (entertainment — noise)
> `[2026-07-10T02:50:56Z]` https://www.threads.com/@ethan13917/post/DamKKzcE5-L "별로라면 어쩔껀데?" (personal — noise)
> (older 07-07/07-05 홍명보/한국축구 전술 replies unchanged from baselines)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all CK's own posts 2026-04-20 ~ 2026-05-01** (Managed Agents / session·harness·sandbox·vault runtime + "배포·인증·저장·GPU·관측을 묶는 순간 에이전트는 사업이 된다"). e.g. https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk , https://www.threads.com/@ethan13917/post/DXVuhU9EzA7
- `Claude Code` → 1 hit, CK's own 2026-04-22 post (Claude Code + Aurora DSQL). https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww
- `Codex` → 3 hits, CK's own posts.
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
- Excluded from the report as noise: all soccer (이강인/김민재/홍명보/한국축구), military (7사단 GOP 소대장), entertainment (조튜브/이진욱), and personal/baby/cute replies.
- The one mildly on-axis new reply — "codex는 없나요?" (DamuCFrE8fG) — is a single-line coding-agent mention. Kept as raw evidence; too thin to promote and reinforces CK's existing Codex/coding-agent interest rather than opening a new branch.
- keyword-search "AI" rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-10 19:00 social pass. Supports a `raw_only` /
reinforcement-only outcome: CDP-authenticated surfaces were still unavailable, and the
only grounded source (Threads API) surfaced no new own posts, a batch of fresh but
personal/soccer/military/entertainment replies (one thin coding-agent line "codex는
없나요?"), empty mentions, and keyword-search reinforcement of CK's already-durable
managed-agents axis. Durable action = raw transcript + Honcho audit + log entry;
`index.md` and non-Honcho concept pages left unchanged.
