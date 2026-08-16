---
title: Interest signal collection — 19:00 social run (2026-08-16)
created: 2026-08-16
type: raw-transcript
captured_at: 2026-08-16T19:05:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social pass, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-16 raw existed before this run.
  Baseline = same-day 08:00 social (interest-signal-collection-08-00-2026-08-16.md)
  + 11:00 new-target (interest-signal-collection-11-00-2026-08-16.md), plus 08-15
  23:00 whole-day refinement and concepts/honcho.md. Live Chrome CDP
  `127.0.0.1:9222` UP (Chrome/147.0.7727.55). Threads via official Graph API
  (configured path): token refresh OK (expires_in 5144423), `/v1.0/me` OK (id
  27173231028946699, ethan13917). RESULT: REINFORCEMENT-ONLY / no-new-signal
  across all surfaces. Threads BOTH-STATIC — own `/threads` top (`DcDVFzFkwm5`,
  오픈웨이트가 프론티어를 따라잡은 여름) and `/replies` top (`DcDVLOYk0Cm`, 4/4 결론)
  byte-identical to the same-day 08:00 baseline (CK posted nothing between passes);
  `/mentions` empty; keyword_search "Claude Code"/"agent" = CK's own old posts
  (04-22, 08-03, 05-01) → reinforcement. YouTube subscriptions (len 9463 vs 9469)
  = feed rotation only, same two weak AI rows + off-axis politics/soccer/semiconductor
  noise. GitHub stars still 90 (no new star since the 08:00 89→90 CKA-2024 bump),
  same top repo `piyushsachdeva/CKA-2024`. Google My Activity "오늘" rows unchanged
  from 08:00 (오픈AI 6:48pm, Outlook 12:17). Durable action = this raw transcript +
  a Honcho routing audit + a log.md entry only; index.md and all concept pages
  left unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-16.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-16.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 19:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-16 (captured ~19:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-16.md` existed → collection proceeded on time (~19:05 KST).
- Baseline: same-day 08:00 social + 11:00 new-target transcripts (both today), plus the 08-15 23:00 whole-day refinement and `concepts/honcho.md`.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_*_1900.py`). YouTube `feed/subscriptions` (len 9463), Google My Activity (len 5301), GitHub `/stars` (target `7A188DC1…`, len 2781) all read from existing hydrated tabs. The second GitHub-stars target (`99976168…`) returned no body (transitional/blank) → used the responsive `7A188DC1…` tab instead.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_1900_0816.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0816_1900.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — BOTH-STATIC, no new posts
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — top row UNCHANGED vs same-day 08:00 baseline
Top row still `DcDVFzFkwm5` (2026-08-15T07:15:48Z = 16:15 KST) "오픈웨이트가 프론티어를 따라잡은 여름". No new root since the 08:00 pass (CK posted nothing between passes).
> https://www.threads.com/@ethan13917/post/DcDVFzFkwm5

Carry-over identical below: `Db7jAcME5yK` (미중 AI 모델 전쟁), `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료), `Db5ElOtkzM3` (Day 1), `Db486QDE2qq` (윤자동 30만원 도전).

### `/replies` — top row UNCHANGED vs baseline
Top reply still `DcDVLOYk0Cm` (4/4 결론, 2026-08-15T07:16:32Z). The 1/4..4/4 open-weight-self-host chain (`DcDVGm6E4EO`/`DcDVIMSE4hg`/`DcDVJkOE8n0`/`DcDVLOYk0Cm`) is all carry-over. No new reply between the 08:00 and 19:00 passes.

### `/mentions`
> 0 rows (empty dataset).

### keyword_search — own-post reinforcement only
- "Claude Code" → 1 row = CK's OWN old post `18075885890193333` (2026-04-22, "4/7 앱개발의 새 기본값 — Claude Code + Aurora DSQL").
- "agent" → all rows are CK's OWN old posts (`Dbkp6TPk-Pt` 08-03 agent-security 6/6, `DXyVR0ek1Rk`/`DXyU1IFE7l5` 05-01 AgentCore/managed-agents). Own already-durable content → reinforcement, NOT new discovery.

## 2) YouTube subscriptions (CDP) — 변화 없음 (feed rotation only)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9463 vs 08:00 baseline 9469)

Same two weak rotational AI rows as the 08:00 baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Minor rotated tails (raw_only mild, single-surface, not durable): "NEW Agent OS just got 10x better..." (Julian Goldie SEO, 208회); "관리자·서비스·AI 아이덴티티, 어떻게 보호할까?" (토크아이티, 4회); "스마트폰 대체할 AI 폼팩터... 안경회사에 주목" (티타임즈TV, 77회).

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락, 대한축구협회 정몽규 성접대 스캔들 라이브 다수, 폭염 19명 사망(안될과학), 뻑가/김선태 Shorts, 김혜경/이준석 정치, HIPHOPPLAYA, 아반떼 풀체인지, SCHD 커버드콜, 일라이릴리 vs 노보노디스크 비만약.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star since 08:00)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781)
Star count still **90** (08:00 pass moved 89→90 with `piyushsachdeva/CKA-2024`; no further star this afternoon). Top starred repo unchanged:
> `piyushsachdeva / CKA-2024` — "This repository contains the notes and code snippets of the CKA 2025 YouTube Playlist ... hands-on demos, assignments, and exam-based scenarios ... from the basics to the advanced level." (Dockerfile · 1,144★ · 1,932 forks)
> https://github.com/piyushsachdeva/CKA-2024

Carry-over stars below top (unchanged): `pbakaus/impeccable`, `lyogavin/airllm` (AirLLM 70B on 4GB GPU), `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`.

## 4) Google My Activity (CDP) — 변화 없음 ("오늘" rows unchanged from 08:00)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)
"오늘" (08-16) still shows only: 오픈AI 알림 오후 6:48 · Outlook 오후 12:17 · outlook 오후 12:16 — identical to the 08:00 baseline. No genuinely-new 08-16 search surfaced on the hydrated tab between passes. Recorded as reinforcement, not negative evidence.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/정치/비만약 noise.
- No genuinely-new signal on any surface this pass. Strongest item all day remains the 08:00 GitHub star `piyushsachdeva/CKA-2024` (already captured in the 08:00 raw, held `raw_only`).

## Why this raw exists
Evidence store for the 2026-08-16 19:00 afternoon social pass. All surfaces are reinforcement/static vs the same-day 08:00 baseline: Threads both-static (no posts between passes), YouTube feed rotation only, GitHub stars unchanged at 90, Google "오늘" unchanged. No genuinely-new signal → `raw_only`. Durable layer (index.md, concept pages) unchanged.
