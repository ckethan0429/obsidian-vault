---
title: Interest signal collection — 08:00 social run (2026-08-17)
created: 2026-08-17
type: raw-transcript
captured_at: 2026-08-17T08:05:00+09:00
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social pass, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-08-17 raw existed before this run.
  Baseline = most-recent completed social transcript by mtime = same-day-prior
  08-16 19:00 social (interest-signal-collection-19-00-2026-08-16.md, both-static/
  reinforcement) plus the 08-16 23:00 whole-day refinement and concepts/honcho.md.
  Live Chrome CDP 127.0.0.1:9222 UP (Chrome/147.0.7727.55). Threads via official
  Graph API (configured path): token refresh OK (expires_in 5097621), /v1.0/me OK
  (id 27173231028946699, ethan13917). RESULT: CROSS-DAY BOTH-STATIC / no-new-signal
  across all surfaces. Threads BOTH-STATIC — own /threads top (18148967395523856 =
  DcDVFzFkwm5, "오픈웨이트가 프론티어를 따라잡은 여름") and /replies top (17874998763543193 =
  DcDVLOYk0Cm, "4/4 결론") byte-identical to the 08-16 19:00 baseline (CK posted
  nothing between passes); /mentions empty; keyword_search "Claude Code"/"agent"/
  "Codex" = CK's own old posts only → reinforcement. YouTube subscriptions (len 9469)
  = same feed as baseline, same two weak AI rows (CSS-2026 dev-mental-health, Piyush
  DevOps live) + off-axis 반도체/축구협회-성접대/폭염/정치/힙합 noise. GitHub stars still 90
  (no new star since the 08-16 08:00 89→90 CKA-2024 bump), top repo unchanged
  piyushsachdeva/CKA-2024. Google My Activity "오늘" tab stale = still shows 08-16 rows
  (오픈AI 6:48pm, Outlook 12:17), no genuinely-new 08-17 search surfaced. Durable action
  = this raw transcript + a Honcho routing audit + a log.md entry only; index.md and
  all concept pages left unchanged.
routing: raw_only
sources_baseline:
  - raw/transcripts/interest-signal-collection-19-00-2026-08-16.md
  - concepts/honcho.md
---

# Raw Transcript — Interest-signal collection 08:00 (social)

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: multiple (per surface below)
Date: 2026-08-17 (captured ~08:05 KST)
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- Idempotency: no `interest-signal-collection-08-00-2026-08-17.md` existed → collection proceeded on time (~08:05 KST).
- Baseline (by mtime, most recent completed social transcript): same-day-prior **08-16 19:00 social** (both-static / no-new-signal), plus the 08-16 23:00 whole-day refinement and `concepts/honcho.md`.
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0817.py`). YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301), GitHub `/stars` (target `7A188DC1…`, len 2781) all read from existing hydrated tabs.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097621); `/v1.0/me` OK. Collector `/tmp/th_collect_0800_0817.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0817_0800.json`.

## 1) Threads (Graph API) — own posts / replies / mentions — BOTH-STATIC, no new posts
Account: `ethan13917` (id 27173231028946699)

### `/threads` (own posts) — top row UNCHANGED vs baseline
Top row still `18148967395523856` (= `DcDVFzFkwm5`, 2026-08-15T07:15:48Z = 16:15 KST) "오픈웨이트가 프론티어를 따라잡은 여름". No new root since the 08-16 19:00 pass (CK posted nothing between passes).
> https://www.threads.com/@ethan13917/post/DcDVFzFkwm5

Carry-over identical below: `Db7jAcME5yK` (미중 AI 모델 전쟁), `Db7Z2SfEyHX` (30만원 챌린지 Day 2), `Db5MqsgE0pa` (무료 AI 토큰 시대의 종료), `Db5ElOtkzM3` (Day 1), `Db486QDE2qq` (윤자동 30만원 도전).

### `/replies` — top row UNCHANGED vs baseline
Top reply still `17874998763543193` (= `DcDVLOYk0Cm`, "4/4 결론", 2026-08-15T07:16:32Z). The 1/4..4/4 open-weight-self-host chain is all carry-over. No new reply between the 08-16 19:00 and this pass.

### `/mentions`
> 0 rows (empty dataset).

### keyword_search — own-post reinforcement only
- "Claude Code" → 1 row = CK's OWN post (`ethan13917`).
- "agent" → 8 rows, ALL `ethan13917` (CK's own old posts).
- "Codex" → 4 rows, ALL `ethan13917` (CK's own old posts).
Own already-durable content → reinforcement, NOT new discovery.

## 2) YouTube subscriptions (CDP) — 변화 없음 (feed rotation only)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469; baseline 08-16 was 9463/9469)

Same two weak rotational AI rows as the 08-16 baseline (same lane, single-surface):
> "2026년 CSS는 어떻게 바뀌었을까... 근데 개발자 40%가 정신적 문제를...?" (조회수 5.1천회)
> "Stop telling freshers AI can't do DevOps. It can. Learn it anyways…" (Tech Tutorials with Piyush, 라이브)

Dominant noise (kept in raw, excluded from report): 삼전닉스/코스피 반도체 급락(장르만 여의도 3.1만회), 뻑가 PPKKa "앞으로 보지마세요", 김선태 "안녕하세요", 정몽규 대한축구협회 X접대/성접대 라이브 다수(달수네라이브 1.7만·새벽의 축구 전문가 2천), 김혜경/김부선 정치(훈수두는 이코치), 19명 사망 극한 폭염(안될과학), HIPHOPPLAYA 페스티벌, Ghost House 흉가 서바이벌, 음식물 처리기 요리.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star since 08-16 08:00)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781)
Star count still **90** (08-16 08:00 pass moved 89→90 with `piyushsachdeva/CKA-2024`; no further star since). Top starred repo unchanged:
> `piyushsachdeva / CKA-2024` — "This repository contains the notes and code snippets of the CKA 2025 YouTube Playlist ... hands-on demos, assignments, and exam-based scenarios ... from the basics to the advanced level." (Dockerfile · 1,144★ · 1,932 forks)
> https://github.com/piyushsachdeva/CKA-2024

Carry-over stars below top (all pre-existing, not new): `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill`, `virattt/ai-hedge-fund`, `nathankim0/clean-architecture-skills`, `lidge-jun/opencodex`, `jung-wan-kim/teamclaude`.

## 4) Google My Activity (CDP) — 변화 없음 (stale "오늘" tab still shows 08-16 rows)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301)
The hydrated tab "오늘" section still shows only the 08-16 rows (오픈AI 알림 오후 6:48 · Outlook 오후 12:17 · outlook 오후 12:16) — identical to the 08-16 19:00 baseline; the tab has not refreshed to 08-17. "어제"(08-16) shows CUDA/날씨 알림, 한컴독스/한글웹, Hermes Agent 한국어 문서. No genuinely-new 08-17 search surfaced on the hydrated tab. Recorded as reinforcement/stale, not negative evidence.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회-성접대 라이브/폭염/힙합/정치 noise.
- No genuinely-new signal on any surface this pass. Strongest item in the recent window remains the 08-16 GitHub star `piyushsachdeva/CKA-2024` (already captured 08-16, held `raw_only`).

## Why this raw exists
Evidence store for the 2026-08-17 08:00 morning social pass. Cross-day both-static: baseline (most recent completed social transcript by mtime) is the 08-16 19:00 run, and every surface is reinforcement/static vs it — Threads both-static (no posts between passes), YouTube feed rotation only, GitHub stars unchanged at 90, Google "오늘" stale/unchanged. No genuinely-new signal → `raw_only`. Durable layer (index.md, concept pages) unchanged.
