---
title: Interest signal collection — 08:00 social/browser run (2026-07-15)
created: 2026-07-15
type: raw-transcript
captured_at: 2026-07-15T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, threads, threads-api, cdp, google-myactivity, social, reinforcement]
route_hint: raw_only
route_confidence: high
route_reason: >
  Morning 07-15 08:00 social run. Baseline for novelty = 07-14 19:00-live social
  transcript (the genuine on-time prior social run, mtime 19:06). Idempotency clear:
  no interest-signal-collection-08-00-2026-07-15.md existed. Live Chrome CDP on
  127.0.0.1:9222 is UP (Chrome/147). Threads collected via official Graph API
  (configured path); long-lived token refreshed OK (expires_in 5184000), /me
  confirmed ethan13917. Against the 07-14 19:00-live baseline, BOTH Threads surfaces
  moved: own /threads gained a NEW top row DayEcnUk9ZZ (07-14 17:51 UTC, empty
  REPOST_FACADE; public-HTML curl -L 259KB found no og:title/og:description →
  content unrecoverable without CDP), and /replies gained a NEW top row DaxZrdok_zV
  (07-14 11:38 UTC, "당연한걸 구구절절 설명해야하는 작금의 사태에 목소리 내주셔서 감사합니다" —
  civic/political thanks reply, off CK's durable AI/agent/infra axis). Both single-
  surface and off-axis → raw_only. mentions empty. keyword_search (agent / Claude
  Code / Codex) returned only CK's own April–May managed-agents posts + the 07-10
  "codex는 없나요?" reply (reinforcement). CDP surfaces read via stdlib raw-socket
  WebSocket client: YouTube subscriptions target still a blank nav shell (len=17,
  logged out/unhydrated) → unavailable; GitHub /stars redirected to /login → logged
  out/unavailable; Google My Activity hydrated but "오늘" = telegram/github search +
  youabout:blank noise (identical to the 07-14 baseline "today" block, stale/repeat),
  no new AI row (07-14 "어제" bundle adds RHEL/VMware/남아공축구/부모 noise — mild
  infra but prior-period low-signal). Claude target only the "Claude in Chrome"
  extension install page; no ChatGPT/X hydrated tab. Net = reinforcement-only / no
  durable new signal; durable action = raw transcript + Honcho/log audit only.
  index.md and concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "NEW top row DayEcnUk9ZZ (07-14 17:51 UTC, empty REPOST_FACADE) vs 19:00-live baseline top Dawp1bgkzKo; public-HTML recovery found no og:title/og:description → content unrecoverable without CDP; single-surface off-axis repost rotation."}
  - {surface: threads-api-replies, route: raw_only, note: "NEW top row DaxZrdok_zV (07-14 11:38 UTC, civic/political '목소리 내주셔서 감사합니다' thanks reply) vs 19:00-live baseline top DaxAh7CE5kv; off durable AI/agent/infra axis."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})"}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent/Claude Code/Codex hits are only CK's own April–May managed-agents posts + 07-10 'codex는 없나요?' reply — reinforcement of an already-durable axis."}
  - {surface: cdp-youtube-subscriptions, route: raw_only, note: "target hydrated as blank nav shell (len=17), logged out/unhydrated; no fallback hydrated tab → unavailable this run (access fact, not 변화 없음)."}
  - {surface: cdp-github-stars, route: raw_only, note: "https://github.com/stars redirected to /login → logged out/unavailable (access fact)."}
  - {surface: cdp-google-myactivity, route: raw_only, note: "hydrated; today = telegram/github search + youabout:blank noise (repeat of 07-14 baseline 'today'); no new AI row; 07-14 bundle adds RHEL/VMware noise (mild infra, prior-period)."}
  - {surface: cdp-claude, route: discard, note: "only 'Claude in Chrome' extension install page; no conversation content."}
  - {surface: chatgpt-x, route: raw_only, note: "no hydrated tab present; not collected this run (access fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-07-14-live.md
  - raw/transcripts/interest-signal-collection-08-00-2026-07-14.md
  - concepts/honcho.md
  - concepts/managed-agents-practical-summary.md
  - log.md
---

# Raw — 08:00 Social/Browser Collection (2026-07-15)

## Live session notes
- Morning 07-15 08:00 social run (wall clock ~08:05 KST).
- Idempotency: no `interest-signal-collection-08-00-2026-07-15.md` existed → collection proceeded.
- Baseline for novelty = `interest-signal-collection-19-00-2026-07-14-live.md` (the genuine
  on-time prior social run, mtime 19:06).
- Live Chrome CDP `127.0.0.1:9222` is UP (Chrome/147.0.7727.55). CDP surfaces read with a
  stdlib raw-socket WebSocket client (`/tmp/cdp_read_0715.py`).
- Threads collected via official Graph API (`graph.threads.net/v1.0`), account `@ethan13917`
  (user_id 27173231028946699). Long-lived token refreshed OK (expires_in 5184000). Raw JSON
  cached to `.cache/threads_0800_0715.json` (disposable). Stdlib urllib collector
  `/tmp/th_collect_0800_0715.py`.

## 1) Threads — API (`/threads`, own posts + reposts)
Newest rows (id-less view: timestamp | media_type | permalink):
> 2026-07-14T17:51:50+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DayEcnUk9ZZ   ← NEW vs 19:00-live baseline (empty text)
> 2026-07-14T04:40:03+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/Dawp1bgkzKo   (prior baseline top)
> 2026-07-11T07:43:22+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DapQbi9k_Vk
> 2026-07-11T01:47:20+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/Daonr3ekwwK
> 2026-07-10T18:13:25+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DanzvRIE-WT
> 2026-07-10T11:57:53+0000 | REPOST_FACADE | https://www.threads.com/@ethan13917/post/DanIwyBE6Du

### New-row recovery attempt
- `DayEcnUk9ZZ` public-HTML fetch (`curl -L`, 259KB) — grep for `og:title` / `og:description`
  returned NO matches (fully JS-rendered shell). Reposted-author handle NOT recoverable
  without CDP. Recorded as URL-only `raw_only` evidence: repost facade, content unrecoverable.

## 2) Threads — API (`/replies`)
> 2026-07-14T11:38:07+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DaxZrdok_zV   ← NEW vs 19:00-live baseline
>   text: "당연한걸 구구절절 설명해야하는 작금의 사태에 목소리 내주셔서 감사합니다"
> 2026-07-14T07:58:22+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DaxAh7CE5kv   (prior baseline top: "still in Korea" well-wish)
> 2026-07-13T00:33:38+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/Dato11Qk5Z4   (축구 opinion)
> 2026-07-11T08:04:38+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DapS3RAE4dA   (경찰 수사 civic reply)
> 2026-07-10T08:04:19+0000 | TEXT_POST | https://www.threads.com/@ethan13917/post/DamuCFrE8fG   ("codex는 없나요?")

Note: new reply `DaxZrdok_zV` is a civic/political "thanks for speaking up" reply — off CK's durable AI/agent/infra axis.

## 3) Threads — API (`/mentions`)
> {"data": []}  — empty.

## 4) Threads — API (keyword_search: agent / Claude Code / Codex)
- All non-trivial hits are `@ethan13917`'s own April–May 2026 managed-agents thread
  (AWS AgentCore / OBO token / Google Agents CLI / TPU / Gemini Embedding 2 / memory-bank /
  oh-my-agent / Claude Code + Aurora DSQL) plus the 07-10 "codex는 없나요?" reply.
- Reinforcement of an already-durable axis; no fresh external discovery.

## 5) YouTube subscriptions — CDP (existing target)
Page title: `구독 - YouTube` | href `https://www.youtube.com/feed/subscriptions`
> body innerText (len=17): "홈 | Shorts | 구독 | 내 페이지"
- Blank nav shell only — logged out / not hydrated; no already-open hydrated subscriptions tab
  to fall back to. Unavailable this run (access fact, not negative evidence).

## 6) GitHub /stars — CDP (existing target)
> title: "Sign in to GitHub · GitHub" | url: https://github.com/login?return_to=...%2Fstars
- Logged out (login redirect). Unavailable this run.

## 7) Google My Activity (search) — CDP (existing target)
Page title: `Google - 내 활동` | href `https://myactivity.google.com/search-services/history/search`
"오늘" (as rendered):
> 검색 · 포함된 주제: 텔레그램, 깃허브 — 오후 5:48
> 검색 · "youabout:blank" — 오전 11:18
"어제" (07-14):
> 검색 · 포함된 주제: 레드햇 엔터프라이즈 리눅스, 퀘이사존, 남아프리카 공화국 축구 국가대표팀, VM웨어, 부모 — 오후 10:48
Recent AI-adjacent daily topic bundles (all prior-day, reinforcement):
> 07-12: 오픈AI / 미사일 ; 07-11: 앤트로픽 ; 07-10: 대형 언어 모델 ; 07-09: 앤트로픽 / Grok ; 07-08: 오픈AI
- The "오늘" block is byte-identical to the 07-14 baseline's "today" (telegram/github 5:48 +
  youabout:blank 11:18) — stale/repeat, no new AI/agent/infra search. RHEL/VMware in the 07-14
  bundle are mildly infra-adjacent but bundled with sports/family noise and are prior-period.

## 8) Claude / ChatGPT / X
- Claude target = only "Claude in Chrome" extension install page (`claude.ai/chrome/installed`);
  no conversation content.
- No hydrated ChatGPT or X tab present. Not collected this run (access fact).

## Filtering notes
- Excluded: soccer/축구, military/부대, civic/political replies, personal well-wishes,
  sports-team noise from Google topics.
- Strongest (still non-durable) signal types this run: two new Threads rows, both
  single-surface and off-axis; keyword_search reinforcement of the managed-agents axis.

## Why this raw exists
Evidence store for the 07-15 08:00 social run. CDP up but YouTube/GitHub logged out; Threads API
surfaced two new but off-axis rows. Net reinforcement-only; no durable page change.
