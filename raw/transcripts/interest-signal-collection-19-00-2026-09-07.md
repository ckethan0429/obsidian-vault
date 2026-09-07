---
title: Interest signal collection — 19:00 social run (2026-09-07)
type: raw
created: 2026-09-07
captured_at: 2026-09-07T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-07 raw existed before this run, and no 08-00-2026-09-07
  either (the 09-05/09-06/09-07 scheduled social+new-target jobs all FAILED — confirmed by the two
  injected FAILED context_from outputs 3ad3260dae66 09-06 19:00 + 5c7865a28931 09-07 08:00). Baseline
  by mtime = most-recent SUCCESSFULLY-completed transcript interest-signal-collection-11-00-2026-09-04.md,
  with the social baseline interest-signal-collection-08-00-2026-09-04.md — an ~3.3-day gap caused by
  failed prior runs (failed-prior-run gap-baseline rule; long gap != new durable signal). Live Chrome
  CDP UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5183999), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subscriptions read via stdlib raw-socket WS CDP client from hydrated tabs.
  RESULT: REINFORCEMENT-ONLY / no new durable signal. Threads /threads UNCHANGED across the whole gap
  (top still 18437084800131008, 마케터 카피 root, 2026-09-03 19:07 KST — CK made no new own posts).
  /replies gained a handful of genuinely-new but purely personal/off-axis rows (09-04/09-05: "감사함당",
  "과천에 있는 회사 ㅋㅋㅋㅋ", "헉스" IMAGE, "ㅋㅋㅋㅋㅋ용형???", "아니 왜이렇게 오늘 좋은 글이 뜨지"). /mentions empty;
  keyword_search agent/Claude Code/Codex all top-hit CK's OWN posts (reinforcement). All three CDP
  surfaces byte-identical to the 09-04 baseline (stale tabs not reloaded): GitHub stars 93 top
  unchanged, Google My Activity len 5301 identical, YouTube subs len 8812 identical. Durable action =
  this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept pages
  unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-07 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-07
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0907.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2921, **93 stars**). Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301). YouTube `feed/subscriptions` hydrated (`구독 - YouTube`, len 8812). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0907.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5183999); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0907.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0907_1900.json`.
- **Baseline** = most-recent SUCCESSFULLY-completed transcript `interest-signal-collection-11-00-2026-09-04.md` (new-target) + social baseline `interest-signal-collection-08-00-2026-09-04.md`. The 09-05 / 09-06 / 09-07 scheduled social + new-target jobs all FAILED (two injected FAILED `context_from` outputs confirm: `3ad3260dae66` gogunbuntu-collect-1900 09-06 FAILED, `5c7865a28931` gogunbuntu-collect-0800 09-07 FAILED) → effective baseline gap ~3.3 days (failed-prior-run gap-baseline rule). No `08-00-2026-09-07` and no `19-00-2026-09-07` raw existed before this run → idempotency guard clear; collection proceeds despite the late/gap context.

## Novelty summary
**Reinforcement-only / no new durable signal.** Across the ~3.3-day gap CK made **no new own Threads posts** (own `/threads` top is byte-identical to the 09-04 baseline — still the 09-03 마케터 카피 root). `/replies` gained a few genuinely-new rows but all are personal/off-axis chatter. `/mentions` empty; keyword_search = CK's own posts. All three CDP browser surfaces (GitHub stars, Google My Activity, YouTube subscriptions) are byte-identical to the 09-04 baseline (stale hydrated tabs, not reloaded). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — /threads unchanged, /replies personal noise only → raw_only
### /threads — UNCHANGED vs the 09-04 baseline
- Top row still **`18437084800131008`** (2026-09-03 10:07 UTC / 09-03 19:07 KST) — https://www.threads.com/@ethan13917/post/Dc0jyutEyVE — 마케터 카피/채널 자동화 series root. No new own root posted across the entire 09-04→09-07 gap.
- Carry below (all unchanged): `18076240841372243` (영업 목록 자동화 root, DcxJ4bokzrY); `18186615706405937` (personal opinion, DcunhiPE1EH); 08-31 series PART 3 `18120302675316701` (Dcs-73nE2Iq); 08-30 PART 2 `18117970942932395` (Dcp54Vjk2L7); 08-29 series intro `18104744447622673` (DcoFQtPE6iI); agent-vs-chatbot `17902817622557812` (Dcn-LjGE5Wa); 조회수 실험 rows; two 08-29 REPOST_FACADE (DcnTHbJExNu, DcmwNuJkws9).

### /replies — genuinely-new rows since 09-04, all personal/off-axis → raw_only noise
- **NEW** `18089642990663815` (2026-09-05 13:51 UTC) — https://www.threads.com/@ethan13917/post/Dc6HCTvk-Su — `"아니 왜이렇게 오늘 좋은 글이 뜨지"` (social chatter)
- **NEW** `17867801436641202` (2026-09-05 01:51 UTC) — https://www.threads.com/@ethan13917/post/Dc40snPk_sp — `"ㅋㅋㅋㅋㅋ용형???"` (personal)
- **NEW** `18108954775888501` (2026-09-04 13:46 UTC) — https://www.threads.com/@ethan13917/post/Dc3hpj9E6kg — `"과천에 있는 회사 ㅋㅋㅋㅋ"` (personal)
- **NEW** `18112912531800608` IMAGE (2026-09-04 12:53 UTC) — https://www.threads.com/@ethan13917/post/Dc3bpyBkwPG — `"헉스"` (personal)
- **NEW** `18069798965718950` (2026-09-04 04:58 UTC) — https://www.threads.com/@ethan13917/post/Dc2lQ0pE8Af — `"감사함당"` (personal)
- Below these: the 09-03 마케터 thread reply chain (Dc0knOCk5az/Dc0kdzGk4kH/Dc0kVR3kwc2/Dc0kMrTk-9S/Dc0kD8xE2Up/Dc0j7cHkzJt) — carry from the 09-04 baseline.
- All new rows are single-surface personal/social chatter off CK's durable AI/agent/infra/investing axis → `raw_only`.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (Dcn_QHWE3Ws), agent-skill-languages (DcdEpS9k6Ey), Snowflake Copilot 해킹 (DcLEx6iE959 / DcLEvAFk6xt), agent-security 6/6 (Dbkp6TPk-Pt), 마케터/영업/사무직 automation series roots, Claude Code/Codex 공식 설치 문서 (Dcp6_EBk6Sq / Dcp6TdfE-8y / Dcp6K3iE9CK / Dcp54Vjk2L7), managed-agents 4-part thread (DXyU1IFE7l5 / DXyUz8tk4BJ / DXXMCrQk7nl), `codex는 없나요?` (DamuCFrE8fG). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-04 baseline), len 2921. Top rows (Sort: Recently starred) unchanged: `miuuyy/codex-chatgpt-web` (TypeScript 2,979★), `snflkd/fluent-korean` (1,023★), `anthropics/defending-code-reference-harness` (Python 7,390★), `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`. No new star across the gap.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 09-04 cache (stale tab, not reloaded). 오늘 = 오픈AI (오후 6:48), Outlook (오후 12:16/12:17); 어제 = CUDA/날씨, 한컴독스/한글 웹, Hermes Agent 한국어 문서/hermes. No new search captured since the 09-04 evening snapshot.

## 4) YouTube subscriptions (CDP) — 변화 없음 (stale tab)
Hydrated (`구독 - YouTube`, len 8812) — byte-identical to the 09-04 baseline. Same rows: 코드팩토리 `드디어 모든 브라우저 자동화 고민을 해결해줄 구세주가 탄생했습니다` (조회수 1.3천회, `1시간 전` frozen), 마인드씨피알 파혼 후 브라질 (personal), 흑우스토리 유튜브 조회수 뻥튀기 (creator-economy), `[메타콘 2026] "한국 AI가 세계 3위? 착각입니다"` short — all carry. Below-fold `2분 전` rows (탈모 확인법, 어깨 재활, 김원효, `Julian Goldie SEO — This NEW Chinese AI Model`) are the same frozen tab contents as 09-04. No fresh load.
- Off-axis noise (excluded from report): 불주먹 shorts, 코스피/한화오션/이란, 비트/이더 코인, 고딩 여친, 블랙컴뱃 라이브, 축구 라이브 (달수네/새벽의축구전문가/이강인), 기업거버넌스 라이브, 배드민턴 하이라이트.

## Filtering notes
- The only genuinely-new evidence this pass is Threads `/replies` personal chatter (감사함당 / 과천 회사 / 헉스 / 용형 / 좋은 글) — all off CK's durable axis → `raw_only`.
- Own `/threads` unchanged across the whole gap (no new posts); keyword_search hits all CK's own posts → reinforcement, not discovery.
- All three CDP browser surfaces are stale hydrated tabs byte-identical to the 09-04 baseline → `변화 없음`.
- Sports/coin/politics YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-07 19:00 social pass after a ~3.3-day failed-run gap. Reinforcement-only: CK posted nothing new to Threads across the gap, all new `/replies` rows are personal noise, and every browser surface is a stale carry of the 09-04 baseline. Route `raw_only`; no durable page or index change.
