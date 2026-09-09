---
title: Interest signal collection — 19:00 social run (2026-09-09)
type: raw
created: 2026-09-09
captured_at: 2026-09-09T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:05 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-09-09 raw existed before this run (same-day 08:00 social +
  11:00 new-target present). Baseline = same-day 08:00 social transcript
  interest-signal-collection-08-00-2026-09-09.md + 11:00 new-target transcript. Live Chrome CDP UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5097615), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars + Google My
  Activity + YouTube subs read via stdlib raw-socket WS CDP client; GitHub stars via fresh PUT target.
  RESULT: REINFORCEMENT-ONLY at the durable layer (route raw_only, whole run). (1) Threads MOVED vs the
  08:00 both-static baseline: CK posted a new own TEXT_POST 18124066465845729 (09-09 16:56 KST, 조코딩 AI
  엑셀방송 논란 opinion) + a new empty REPOST_FACADE 18102024221624249 (14:10 KST), plus a batch of new
  09-09 replies — ALL civic/social debate (엑셀방송/여캠/'좌파 영포티'), OFF CK's durable AI/agent/infra/operator
  axis → raw_only (own-posts-only; single-surface social). (2) GitHub stars 94, UNCHANGED from 08:00
  baseline (top still simonw/llm) → 변화 없음. (3) Google My Activity: genuinely-new afternoon rows —
  디지털데일리 'VM웨어 횡포에서 벗어날 수 있다' virtualization/backup 기사 (오후 1:46, mild infra-adjacent / Proxmox-escape
  axis), 펜시브 / THE VC 기업정보(투자·매출·기업가치) startup-investing lookup (오후 12:29), 상포 테크놀로지 검색, passive
  news 알림 (오후 4:48 오픈AI/Google 기능 업데이트) — all single-surface/mild → raw_only. Nutanix/LG U+ rows carry
  from 08:00 baseline. (4) YouTube subs rotated (len 9469): IBM Technology 'Why won't AI agents just
  follow the rules?' (agent), 'How To Start A YouTube Channel With Claude AI' (Claude), 테크몽 AI 안경 통역
  — mild on-axis reinforcement mixed with soccer/politics/crypto noise → raw_only. NONE opens a new durable
  branch. Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md and all
  concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-09 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-09
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0909.py`). GitHub stars tab returned null on the pre-existing targets; recovered via a fresh `PUT /json/new?https://github.com/stars` target (`/tmp/gh_stars_1900.py`). Raw JSON cached under `~/wiki/.cache/`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097615); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0909.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0909_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-09-09.md` + 11:00 new-target transcript. No `interest-signal-collection-19-00-2026-09-09` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only at the durable layer.** Threads MOVED since the 08:00 both-static baseline (CK posted a new own TEXT_POST + a new empty repost + a batch of new replies), but all the new content is civic/social debate around the 조코딩 AI 엑셀방송 controversy — off CK's durable AI/agent/infra axis (own-posts-only reinforcement, single-surface social). GitHub stars unchanged (94). Google surfaced new afternoon rows (a VMware-탈출/가상화 기사, a 펜시브/THE VC startup-investing lookup) that are mild and single-surface. YouTube rotated in an IBM agent video + a Claude-AI channel video. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — MOVED vs 08:00 baseline, but all new rows are civic/social → raw_only
### /threads — two genuinely-new rows on top
- **NEW** `18124066465845729` (TEXT_POST, 2026-09-09 07:56 UTC / 16:56 KST) — https://www.threads.com/@ethan13917/post/DdDxpzbk5Cd — `"지금 조코딩 논란되는 ai 엑셀방송을 문제제기하는 사람들은 뭐에 긁혀서 그렇게 물고 뜯는지 궁금하다. 엑셀방송이 문제라면..? 레거시 방송에서 했던 방송포맷들 무…"` — CK's own opinion on the 조코딩 AI 엑셀방송 controversy; civic/social commentary, OFF the AI/agent/infra operator axis.
- **NEW** `18102024221624249` (REPOST_FACADE, 2026-09-09 05:10 UTC / 14:10 KST, empty text) — https://www.threads.com/@ethan13917/post/DdDemvEE0AR — content not recoverable without CDP/public fetch; single-surface repost.
- Carry below (unchanged from baseline): `18141811084577394` @aprilran repost (DdBPjr5k06w); `18437084800131008` 마케터 카피 root 09-03; `18076240841372243` 영업 목록 자동화; `18186615706405937` opinion; 사무직 파일 PART rows; agent-vs-chatbot (Dcn-LjGE5Wa); 조회수 실험 rows; 08-29 REPOST_FACADEs.

### /replies — new batch of 09-09 rows (all civic/social 엑셀방송 debate)
- **NEW** `18103743229959106` (09-09 08:32 UTC) — https://www.threads.com/@ethan13917/post/DdD1tv3Ez5Q — `"Ai 로 생성된 페이크영상 성인물에 이렇게까지 목소리 냈는지 궁금하네여"`
- **NEW** `18027827693687176` (09-09 08:31 UTC) — https://www.threads.com/@ethan13917/post/DdD1nTyE-G2 — `"여기서 나와 토론해볼 @스윗영포티 개새끼들 나오세요"`
- **NEW** `18129240764497698` (09-09 08:04 UTC) — https://www.threads.com/@ethan13917/post/DdDyhCNk_9R — `"진짜 앞뒤 다른 좌파 영포티일거 같음..."`
- **NEW** `18584758870066131` (09-09 08:02 UTC) — https://www.threads.com/@ethan13917/post/DdDyTqWk7KH — `"엑셀과 여캠이 뭐가 선정적이란거임? m365 excel에 자극이 막 오시나? 여캠에도??ㅎㅎㅎㅎ"`
- **NEW** `18068833451578395` (09-09 07:58 UTC) — https://www.threads.com/@ethan13917/post/DdDx2i7E6JU — `"그걸 후원사에 일러바치고, bm 베꼈다고 태그하고 ㅋㅋㅋㅋ …키워드('엑셀방송')보고 너무 선정적이야…"`
- Carry below (unchanged): `18089642990663815` 2026-09-05 `"아니 왜이렇게 오늘 좋은 글이 뜨지"`; ㅋㅋㅋㅋㅋ용형??? / 과천에 있는 회사 / 헉스 IMAGE / 감사함당 / 09-03 마케터 thread reply chain.
- Interpretation: CK is actively arguing the 조코딩 엑셀방송 controversy (civic/social/culture-war flavored), not an AI-operator signal. Off durable axis → `raw_only`.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' — reinforcement (own posts)
Both queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문, agent-skill-languages (plicara), Snowflake Copilot 해킹 (wiz.io), agent-security 6/6, 마케터/영업/사무직 automation roots, Claude Code/Codex 공식 설치 문서, 라오어 무한매수법/세븐 스플릿 투자 글. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP fresh target) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (was 94 at 08:00). No new star. Top row still `simonw/llm` (Simon Willison's LLM CLI). Recent-starred list below it unchanged (miuuyy/codex-chatgpt-web, snflkd/fluent-korean, anthropics/defending-code-reference-harness, piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, virattt/ai-hedge-fund, …). Language breakdown 24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell unchanged.

## 3) Google My Activity (CDP) — new afternoon rows, mild/single-surface → raw_only
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5822 (was 5747 at 08:00). Genuinely-new rows since 08:00:
- **오후 4:48** `검색 알림 4개 — 포함된 주제: Google 기능 업데이트 / 오픈AI / 기타 1개` — passive news/Discover 알림 (off-axis).
- **오후 1:46** `[르포] 'VM웨어 횡포'에서 벗어날 수 있다는 기대↑…가상화에서 백업·운영까지 — 디지털데일리` 방문 (https://www.ddaily.co.kr/page/view/2026090808190822440) + `상포 테크놀로지` 검색 — **mild infra-adjacent** (VMware-탈출 / 가상화·백업 = Proxmox/virtualization CK interest), but single passive article read.
- **오후 12:29** `펜시브 - 기업정보 | 투자, 매출, 기업가치 - THE VC` 방문 + `펜시브` / `펜시브의` 검색 — startup/VC company-info lookup (business/investing, single-surface).
- Carry (unchanged from 08:00 baseline): LG U+ 노원 telecom rows (어제 오후 5:10), Nutanix agentic/sovereign/enterprise AI cluster (09-08 오후 2:0x), 09-07 Codex SDK / GPT SDK / ChatGPT docs rows.
- Interpretation: the VMware-탈출 기사 touches CK's virtualization axis and the 펜시브/THE VC lookup touches the startup-investing axis, but both are single passive reads this pass → `raw_only`, no durable branch.

## 4) YouTube subscriptions (CDP) — feed rotation, mild on-axis → raw_only
Hydrated (`구독 - YouTube`, len 9469). Newly visible AI/agent/dev rows since 08:00:
- `Why won't AI agents just follow the rules?` — IBM Technology (7회, 2분 전) — **on-axis agent** content.
- `How To Start A YouTube Channel With Claude AI in 2…` (Claude AI, title truncated) — Claude-AI applied.
- `이제 외국어 안 배워도 될까? AI 안경 끼고 외국인과 대화해봄` — 테크몽 Techmong (1회, 1분 전) — AI hardware/translation.
- Interpretation: fresh titles but reinforce existing AI-agent/coding lanes; no new durable branch → `raw_only`.
- Off-axis noise kept in raw, excluded from report: 흑우스토리 유튜브 조회수 뻥튀기 (carry), 마인드씨피알/링거/어썸블리스 건강, 달수네라이브·새벽의축구·6시내축구 이강인/리버풀 soccer 라이브, 훈수두는이코치/언더스탠딩/박병찬 politics·투자 라이브, 불장단타왕 알트코인, 테이스터션 가품시계, Discovery Korea body-cam.

## Filtering notes
- Threads moved but all new own post/replies are civic/social (조코딩 엑셀방송 debate) → off-axis `raw_only`; the one new repost is an empty facade.
- GitHub unchanged (94) → `변화 없음`.
- Google new rows mild/single-surface (VMware-탈출 기사, 펜시브 VC lookup) → `raw_only`.
- YouTube rotation is mild on-axis reinforcement → `raw_only`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-09 19:00 social pass. Reinforcement-only at the durable layer: Threads moved (new own post + replies, but civic/social off-axis) ; GitHub 94 unchanged; Google new afternoon rows mild/single-surface; YouTube feed rotation mild on-axis. All reinforce existing lanes or sit off-axis; none opens a new durable branch. Route `raw_only`; no durable page or index change.
