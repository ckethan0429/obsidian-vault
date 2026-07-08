---
title: Interest signal collection — 19:00 social/browser run (2026-07-08)
created: 2026-07-08
type: raw-transcript
captured_at: 2026-07-08T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, social, cdp-unavailable]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon social run. Live Chrome CDP on 127.0.0.1:9222 was unavailable (connection
  refused), so all browser-authenticated surfaces (Threads liked, YouTube subscriptions/
  liked/Watch Later, GitHub Stars, Google My Activity, ChatGPT, Claude, X) could not be
  collected. Threads API remained the only grounded authenticated source. Own posts/replies
  were dominated by soccer/홍명보/태극기 civic-sports rants plus a personal bitcoin-saving
  and Apple/맥북 FOMO note — single-surface, low-durability, outside CK's durable AI/agent/
  infra map. Keyword search (agent / Claude Code / Codex) returned only CK's OWN April–May
  managed-agents posts (already durable), i.e. reinforcement, not new signal. mentions empty.
  Net: raw_only / reinforcement-only; no durable page change.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "Newest are two REPOST_FACADE (07-06 22:48, 07-07 03:05 UTC) with empty text + soccer/bitcoin/Apple own posts; civic-sports/personal noise"}
  - {surface: threads-api-replies, route: discard, note: "All 홍명보/한국축구 debate replies — civic-sports noise"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts — reinforcement of an already-durable axis"}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset"}
  - {surface: cdp-browser-surfaces, route: raw_only, note: "unavailable — CDP connection refused; recorded as access fact, not negative evidence"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-06-18.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-08.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 19:00 Social/Browser Collection (2026-07-08)

Source: Threads API (official graph.threads.net); live Chrome CDP browser surfaces
Date: 2026-07-08 (captured 19:05 KST)
Account: `ethan13917` (씨케이, user_id 27173231028946699)
Track: social (08:00/19:00). Transport this run: **Threads API only** — CDP/browser unavailable.

## Live session notes
- Live Chrome CDP on `http://127.0.0.1:9222` was **unavailable** (`/json/version` and `/json/list` both connection-refused, curl exit 7). Therefore Threads liked, YouTube (subscriptions/liked/Watch Later), GitHub Stars, Google My Activity, ChatGPT, Claude, and X could not be collected this run. Recorded as an availability fact, not as `변화 없음`.
- Today's 08:00 social job **failed**, so there is no same-day 08:00 social baseline; the 11:00 run is the new-target track (different family). No same-day 19:00 raw existed before this run → proceeded with collection.
- Threads long-lived token refreshed OK (`/refresh_access_token` returned a fresh token); `/v1.0/me` confirmed identity. Raw JSON cached at `~/wiki/.cache/threads-api-collection-19-00-2026-07-08.json` (disposable).

## 1) Threads API — own `/threads` (copied)
Source URL: https://www.threads.com/@ethan13917
Newest rows (UTC timestamps):
> `[2026-07-07T03:05:57Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaedgJDk8Kx (text empty; public HTML is JS-rendered, content not recoverable without CDP)
> `[2026-07-06T22:48:45Z] REPOST_FACADE` — https://www.threads.com/@ethan13917/post/DaeAEVik9gO (text empty; content not recoverable without CDP)
> `[2026-07-05T12:34:53Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaaVBUmk8Px
>   "한국 선수들이 역대급이 아니란건 동의! … 근데 축구는 확실히 감독놀이는 맞음. …" (soccer)
> `[2026-07-01T02:49:21Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaO-1ShE7lv
>   "오늘부터 비트코인 하루에 5만원씩 모으겠습니다. 왜냐고요? 이제 시간이 된거 같아요." (personal investing intent)
> `[2026-06-29 …] TEXT_POST` — 홍명보/태극기 관련 축구 논쟁 다수 (DaLICr2k-hU, DaKf78lkzoU, DaKkQIqk1rA …)
> `[2026-06-25T16:46:01Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaBBz93k0v8 "애플제품이 겁나 인상되었네.. 맥북프로 FOMO …" (Apple pricing/FOMO)
> `[2026-06-25T15:30:02Z] TEXT_POST` — https://www.threads.com/@ethan13917/post/DaA5Hd-k3sB "조코딩 ax인재전쟁을 보고 … 대표입장 … 위임 … 직관 …" (AX 인재전쟁 논평; already >2wk old)

## 2) Threads API — own `/replies` (copied)
Source URL: https://www.threads.com/@ethan13917/replies
All newest replies (07-05 ~ 07-07) are 홍명보/한국축구 전술·데이터분석 논쟁:
> `[2026-07-07T03:11:23Z]` https://www.threads.com/@ethan13917/post/DaeeH7EE6DR "선수사이에 갈등 … 카리스마 … 홍명보 …"
> `[2026-07-05T15:34:46Z]` https://www.threads.com/@ethan13917/post/Daapm2mkzkg "전력분석관 … 영상자료 수집 … 유의미한 데이터 분석 …"
> `[2026-07-05T15:00:20Z]` https://www.threads.com/@ethan13917/post/DaalqnUE9lB "사람을 안믿고 시스템을 믿으면됨"
> (all civic-sports debate; no AI/agent/infra content)

## 3) Threads API — keyword search (copied)
Source URL: https://graph.threads.net/v1.0/keyword_search (q = agent / "Claude Code" / Codex, TOP)
- `agent` → 8 hits, **all are CK's own posts from 2026-04-20 ~ 2026-05-01** on Managed Agents / session·harness·sandbox·vault runtime and the "배포·인증·저장·GPU·관측을 묶는 순간 에이전트는 사업이 된다" thread. e.g. https://www.threads.com/@ethan13917/post/DXyU1IFE7l5 , https://www.threads.com/@ethan13917/post/DXVuhU9EzA7
- `Claude Code` → 1 hit, CK's own 2026-04-22 post (Claude Code + Aurora DSQL). https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww
- `Codex` → 2 hits, CK's own 2026-05-01 and 2025-09-09 posts.
- Interpretation: these are **not new external signals** — they are CK's own already-durable managed-agents thesis (fully captured in `concepts/managed-agents-practical-summary.md`). Pure reinforcement.

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
- Excluded from the report as noise: all 홍명보/한국축구/태극기 soccer-civic rants and replies.
- Bitcoin "하루 5만원씩 모으기" and Apple/맥북 FOMO are personal single-surface notes, low durability — kept as raw evidence only.
- The keyword-search "AI" rows are CK's own old posts, not fresh discovery — reinforcement.

## Why this raw exists
Evidence store for the 2026-07-08 19:00 social pass. Supports a `raw_only` /
reinforcement-only outcome: CDP-authenticated surfaces were unavailable, and the only
grounded source (Threads API) surfaced civic-sports/personal noise plus reinforcement of
CK's already-durable managed-agents axis. Durable action = raw transcript + Honcho audit +
log entry; `index.md` and non-Honcho concept pages left unchanged.
