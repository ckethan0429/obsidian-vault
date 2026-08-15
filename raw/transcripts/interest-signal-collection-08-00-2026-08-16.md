---
title: Interest signal collection — 08:00 social run (2026-08-16)
created: 2026-08-16
type: raw-transcript
captured_at: 2026-08-16T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time. Idempotency clear: no
  interest-signal-collection-08-00-2026-08-16 raw existed before this run.
  Baseline = prior social run (08-15 19:00, cross-day) + 08-15 22:00 new-target.
  Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147). Threads via official Graph
  API (configured path): token refresh OK, `/v1.0/me` OK (id
  27173231028946699, ethan13917). RESULT: mostly reinforcement with ONE
  genuinely-new item — GitHub stars 89→90, new top star
  `piyushsachdeva/CKA-2024` (Certified Kubernetes Administrator notes).
  Same creator (Piyush Sachdeva / "Tech Tutorials with Piyush") whose DevOps
  live also appeared in the YouTube subscriptions feed → mild cross-surface
  DevOps/K8s learning reinforcement, but single durable lane (infra/devops
  learning) already on CK's map → raw_only, no concept-page change. Threads
  both-static: own `/threads` top (`DcDVFzFkwm5`) and `/replies` top
  (`DcDVLOYk0Cm`) byte-identical to the 08-15 19:00 baseline (CK posted
  nothing overnight). YouTube subscriptions (len 9469) byte-identical to
  08-15 baseline (same two weak AI rows + rotated politics/soccer/semiconductor
  noise). Google My Activity tab stale (len 5301, still shows 08-15 as "오늘").
  `/mentions` empty; keyword_search "Claude Code" = CK's own 04-22 post
  (reinforcement). Durable action = this raw transcript + Honcho audit + log
  entry only; index.md and all concept pages unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-08-15.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-15.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-16 (captured ~08:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-16.md` existed → collection proceeded on time (~08:05 KST).
- Baseline: prior social run 08-15 19:00 (cross-day) + 08-15 22:00 new-target.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Hydrated targets read via stdlib raw-socket WS CDP client. YouTube `feed/subscriptions` (len 9469) and Google My Activity (len 5301) read from existing hydrated tabs; GitHub `/stars` existing tab was unresponsive (WS read timed out twice) → read via a FRESH `PUT /json/new?https://github.com/stars` target instead (hydrated cleanly, len 2781).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK; `/v1.0/me` OK. Collector `/tmp/th_collect_0800_0816.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0816_0800.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — BOTH-STATIC, no new posts
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — top row UNCHANGED vs 08-15 19:00 baseline
Top row still `DcDVFzFkwm5` (2026-08-15T07:15:48Z = 16:15 KST) "오픈웨이트가 프론티어를 따라잡은 여름". No new root since the 19:00 baseline.
> https://www.threads.com/@ethan13917/post/DcDVFzFkwm5

Carry-over identical: `Db7jAcME5yK` (미중 AI 모델 전쟁), `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료), `Db5ElOtkzM3` (Day 1), `Db486QDE2qq` (윤자동 30만원 도전), etc.

### `/replies` — top row UNCHANGED vs baseline
Top reply still `DcDVLOYk0Cm` (4/4 결론, 2026-08-15T07:16:32Z). The 1/4..4/4 open-weight-self-host chain (`DcDVGm6E4EO`/`DcDVIMSE4hg`/`DcDVJkOE8n0`/`DcDVLOYk0Cm`) is all carry-over. No new reply overnight.

### `/mentions`
> 0 rows (empty dataset).

### keyword_search "Claude Code"
> 1 row = CK's OWN old post `18075885890193333` (2026-04-22, "4/7 앱개발의 새 기본값 — Claude Code + Aurora DSQL") → own already-durable content, reinforcement, NOT new discovery.

## 2) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08-15 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469)

Same two weak rotational AI rows as the 08-15 baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락, 대한축구협회 정몽규 성접대 스캔들 라이브 다수, 폭염 19명 사망(안될과학), 뻑가/김선태 Shorts, 김혜경 정치, 힙합플라야, 아반떼 풀체인지.

## 3) GitHub stars (CDP, fresh target) — ONE NEW STAR (89 → 90)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781)
Star count moved from 89 (08-15 baseline) → **90**. New top starred repo:
> `piyushsachdeva / CKA-2024` — "This repository contains the notes and code snippets of the CKA 2025 YouTube Playlist ... hands-on demos, assignments, and exam-based scenarios ... from the basics to the advanced level." (Dockerfile · 1,144★ · 1,932 forks)
> https://github.com/piyushsachdeva/CKA-2024

Note: same creator (Piyush Sachdeva / "Tech Tutorials with Piyush") whose "Stop telling freshers AI can't do DevOps" live appears in the YouTube subscriptions feed → mild cross-surface DevOps/Kubernetes-learning reinforcement.

Carry-over stars below top (unchanged): `pbakaus/impeccable`, `lyogavin/airllm` (AirLLM 70B on 4GB GPU), `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, etc.

## 4) Google My Activity (CDP) — stale tab / no genuinely-new search
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)
Tab is stale — still shows 08-15 as "오늘" (오픈AI 알림 오후 6:48 · Outlook 오후 12:17 · outlook 오후 12:16). No fresh 08-16 search surfaced on the hydrated tab. Recorded as reinforcement/stale, not negative evidence.

## Filtering notes
- Excluded from report: YouTube 반도체/축구 스캔들/폭염/힙합/정치 noise.
- Strongest signal this run: the ONE new GitHub star `piyushsachdeva/CKA-2024` (Kubernetes CKA cert study repo). Single-surface, reinforces CK's existing infra/DevOps-learning lane; mild cross-surface tie to the same creator's DevOps YouTube live.

## Why this raw exists
Evidence store for the 08:00 morning social pass. Threads both-static (no overnight posts), YouTube byte-identical, Google tab stale. The only genuinely-new item is GitHub stars 89→90 with `piyushsachdeva/CKA-2024`. Single-surface reinforcement of an existing durable lane → `raw_only`. Durable layer (index.md, concept pages) unchanged.
