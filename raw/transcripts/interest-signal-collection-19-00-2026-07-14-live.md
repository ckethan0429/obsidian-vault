---
title: Interest signal collection — 19:00 social/browser run (2026-07-14, live/on-time)
created: 2026-07-14
type: raw-transcript
captured_at: 2026-07-14T19:10:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, cdp, google-myactivity, social, reinforcement]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon/evening social run (genuine on-time 07-14 19:00). NOTE: the file
  interest-signal-collection-19-00-2026-07-14.md (mtime 00:09) is the DELAYED
  prior-evening cron run (job 3ad3260dae66 fired 2026-07-14 00:10:44, CDP-down,
  baselined on 07-13 08:00) mislabeled with today's date; this run is the real
  07-14 evening collection, saved under a -live suffix to avoid clobbering the
  baseline the 07-14 08:00 run referenced. Baseline for novelty = 07-14 08:00
  social run (both-static no-new-signal). Live Chrome CDP on 127.0.0.1:9222 is
  BACK UP today (Chrome 147; CDP had been down since 07-11) — fresh targets were
  created for YouTube/GitHub/Google. Threads collected via official API (configured
  path). Against the 07-14 08:00 baseline, BOTH Threads surfaces moved: own /threads
  gained a NEW top row Dawp1bgkzKo (07-14 04:40 UTC, empty REPOST_FACADE, public-HTML
  recovery found no og: metas → unrecoverable), and /replies gained a NEW top row
  DaxAh7CE5kv (07-14 07:58 UTC, "Are you still in Korea? I hope you're doing well." —
  personal English reply, off CK's durable AI/agent/infra axis). Both new rows are
  single-surface and off-axis → raw_only. mentions empty. keyword_search (agent /
  Claude Code / Codex) returned only CK's own April–May managed-agents posts + the
  07-10 "codex는 없나요?" reply (reinforcement). YouTube subscriptions target opened as
  a blank nav shell (len=17, logged out/unhydrated) → unavailable; GitHub /stars
  redirected to login → logged out/unavailable; Google My Activity hydrated and shows
  today only telegram/github + a "youabout:blank" noise search (no new AI row; AI
  topics like 앤트로픽/클로드/오픈AI 코덱스 are all prior-day reinforcement). Claude target was
  only the "Claude in Chrome" extension install page; no ChatGPT/X hydrated tab. Net =
  reinforcement-only / no durable new signal; durable action = raw transcript +
  Honcho/log audit only. index.md and concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "NEW top row Dawp1bgkzKo (07-14 04:40 UTC, empty REPOST_FACADE) vs 08:00 baseline top DapQbi9k_Vk; public-HTML recovery found no og:title/og:description → content unrecoverable without CDP; single-surface off-axis repost rotation."}
  - {surface: threads-api-replies, route: raw_only, note: "NEW top row DaxAh7CE5kv (07-14 07:58 UTC, personal English 'still in Korea' reply) vs 08:00 baseline top Dato11Qk5Z4; off durable AI/agent/infra axis."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts + 07-10 'codex는 없나요?' reply — reinforcement of an already-durable axis."}
  - {surface: cdp-youtube-subscriptions, route: raw_only, note: "target hydrated as blank nav shell (len=17), logged out/unhydrated; no fallback hydrated tab → unavailable this run (access fact, not 변화 없음)."}
  - {surface: cdp-github-stars, route: raw_only, note: "https://github.com/stars redirected to /login → logged out/unavailable (access fact)."}
  - {surface: cdp-google-myactivity, route: raw_only, note: "hydrated; today = telegram/github search (17:48) + youabout:blank noise (11:18); no new AI row; prior-day AI topics are reinforcement."}
  - {surface: cdp-claude, route: discard, note: "only 'Claude in Chrome' extension install page; no conversation content."}
  - {surface: chatgpt-x, route: raw_only, note: "no hydrated tab present; not collected this run (access fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-14.md
  - raw/transcripts/interest-signal-collection-19-00-2026-07-14.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-14.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 19:00 Social/Browser Collection (2026-07-14, live/on-time)

## Live session notes
- Genuine on-time 07-14 19:00 run (wall clock 19:00 KST).
- Live Chrome CDP `127.0.0.1:9222` is BACK UP (Chrome/147.0.7727.55); CDP had been
  down since 07-11. Fresh CDP targets created via `PUT /json/new?<url>` for YouTube
  subscriptions, GitHub /stars, Google My Activity.
- Threads collected via official Graph API (`graph.threads.net/v1.0`), account
  `@ethan13917` (user_id 27173231028946699). Long-lived token refreshed OK
  (expires_in≈5115953).
- Idempotency note: `interest-signal-collection-19-00-2026-07-14.md` already existed
  (mtime 00:09) but is the DELAYED prior-evening run (CDP-down, 07-13 baseline),
  not today's evening collection. This live run saved under `-live` suffix.

## 1) Threads — API (`/threads`, own posts + reposts)
Newest rows (fields id | timestamp | media_type | permalink):
> 18160589341463106 | 2026-07-14T04:40:03+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/Dawp1bgkzKo   ← NEW vs 08:00 baseline (empty text)
> 18089712287098456 | 2026-07-11T07:43:22+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DapQbi9k_Vk   (prior baseline top)
> 17973577974096409 | 2026-07-11T01:47:20+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/Daonr3ekwwK
> 18106051718043081 | 2026-07-10T18:13:25+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DanzvRIE-WT
> 18334181902266189 | 2026-07-10T11:57:53+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DanIwyBE6Du
> 18107880572319891 | 2026-07-09T20:52:47+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DalhLj5E7Xd

### New-row recovery attempt
- `Dawp1bgkzKo` public-HTML fetch (`curl -L`, 259KB) — grep for `og:title` / `og:description`
  returned NO matches (fully JS-rendered shell). Reposted-author handle NOT recoverable
  without CDP. Recorded as URL-only `raw_only` evidence: repost facade, content unrecoverable.

## 2) Threads — API (`/replies`)
> 18091749545290035 | 2026-07-14T07:58:22+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DaxAh7CE5kv   ← NEW vs 08:00 baseline
>   text: "Are you still in Korea? I hope you're doing well."
> 18605769214065220 | 2026-07-13T00:33:38+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/Dato11Qk5Z4   (prior baseline top: 축구 opinion)
> 18109405849964922 | 2026-07-11T08:04:38+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DapS3RAE4dA  (경찰 수사 civic reply)
> 18446468902186624 | 2026-07-10T08:04:19+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DamuCFrE8fG  ("codex는 없나요?")

Note: new reply `DaxAh7CE5kv` is a personal English well-wish — off CK's durable AI/agent/infra axis.

## 3) Threads — API (`/mentions`)
> {"data": []}  — empty.

## 4) Threads — API (keyword_search: agent / Claude Code / Codex)
- All non-trivial hits are `@ethan13917`'s own April–May 2026 managed-agents thread
  (AWS AgentCore / OBO token / Google Agents CLI / TPU / Gemini Embedding 2 / memory-bank /
  oh-my-agent) plus the 07-10 "codex는 없나요?" reply.
- Reinforcement of an already-durable axis; no fresh external discovery.

## 5) YouTube subscriptions — CDP (fresh target)
Page title: `구독 - YouTube` | href `https://www.youtube.com/feed/subscriptions`
> body innerText (len=17): "홈 | Shorts | 구독 | 내 페이지"
- Blank nav shell only — logged out / not hydrated; no already-open subscriptions tab to
  fall back to. Unavailable this run (access fact, not negative evidence).

## 6) GitHub /stars — CDP (fresh target)
> title: "Sign in to GitHub · GitHub" | href: https://github.com/login?return_to=...%2Fstars
> body: "Sign in to GitHub | Username or email address | Password | ..."
- Logged out (login redirect). Unavailable this run.

## 7) Google My Activity (search) — CDP (fresh target)
Page title: `Google - 내 활동` | href `https://myactivity.google.com/search-services/history/search`
Today (07-14):
> 검색 · 포함된 주제: 텔레그램, 깃허브 — 오후 5:48
> 검색 · "youabout:blank" — 오전 11:18
Recent AI-adjacent daily topic bundles (all prior-day, reinforcement):
> 07-12: 오픈AI / 미사일 ; 07-11: 앤트로픽 ; 07-10: 대형 언어 모델 ; 07-09: 앤트로픽 / Grok ;
> 07-08: 오픈AI ; 07-07: 클로드 / 쿠버네티스 ; 07-03: 데이터 센터 / 인공지능 / 챗GPT / 오픈AI 코덱스
- No new AI/agent/infra search today; telegram/github + "youabout:blank" is noise.

## 8) Claude / ChatGPT / X
- Claude target = only "Claude in Chrome" extension install page (`claude.ai/chrome/installed`);
  no conversation content.
- No hydrated ChatGPT or X tab present. Not collected this run (access fact).

## Filtering notes
- Excluded: soccer/축구, military/부대, civic/political replies, personal well-wishes,
  뜨개/취미, sports-team noise from Google topics.
- Strongest (still non-durable) signal types this run: two new Threads rows, both
  single-surface and off-axis; keyword_search reinforcement of the managed-agents axis.

## Why this raw exists
Evidence store for the genuine on-time 07-14 19:00 social run. CDP recovered today but
YouTube/GitHub were logged out; Threads API surfaced two new but off-axis rows. Net
reinforcement-only; no durable page change.
