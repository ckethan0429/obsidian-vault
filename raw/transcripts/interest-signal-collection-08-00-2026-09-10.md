---
title: Interest signal collection — 08:00 social run (2026-09-10)
type: raw
created: 2026-09-10
captured_at: 2026-09-10T08:05 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:05 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-10 raw existed before this run. Baseline = most-recent
  completed social transcript = interest-signal-collection-19-00-2026-09-09.md (mtime 09-09 19:07).
  Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token
  refresh OK (expires_in 5184000), /v1.0/me OK (ethan13917, id 27173231028946699). GitHub stars +
  Google My Activity + YouTube subs read via stdlib raw-socket WS CDP client on hydrated type==page tabs.
  RESULT: REINFORCEMENT-ONLY at the durable layer (route raw_only, whole run). (1) Threads MOVED vs the
  09-09 19:00 baseline — CK posted 3 more own posts (11:23/11:37/15:20 UTC = 09-09 evening→09-10 00:20 KST)
  + a batch of new replies, but ALL are the SAME 조코딩 AI 엑셀방송 civic/social debate (엑셀방송/여캠/성상품화
  프레임/personal attacks) — OFF CK's durable AI/agent/infra/operator axis → own-posts-only, single-surface
  → raw_only. (2) GitHub stars 94, UNCHANGED from baseline (top still simonw/llm) → 변화 없음. (3) Google My
  Activity: NO new rows since the 19:00 baseline (top still 오후 4:48 알림 / 1:46 VMware-탈출 기사 / 12:29 펜시브
  THE VC) → 변화 없음/reinforcement. (4) YouTube subs rotated but NO new AI/agent row vs the 19:00 baseline
  (IBM 'Why won't AI agents follow the rules?' + 테크몽 AI 안경 already captured 19:00; rest soccer/politics/
  crypto/health noise) → 변화 없음. NONE opens a new durable branch. Durable action = this raw transcript +
  Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-10 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-10
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0910.py`). Raw JSON cached `~/wiki/.cache/cdp_0910_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5184000); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0910.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0910_0800.json`.
- **Baseline** = most-recent completed social transcript `interest-signal-collection-19-00-2026-09-09.md` (mtime 09-09 19:07). No `interest-signal-collection-08-00-2026-09-10` raw existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only at the durable layer.** Threads MOVED since the 19:00 baseline (CK posted 3 more own posts + a batch of new replies), but every new row is the SAME 조코딩 AI 엑셀방송 civic/social debate — off CK's durable AI/agent/infra axis (own-posts-only reinforcement, single-surface social). GitHub stars unchanged (94). Google My Activity has NO new rows since the 19:00 baseline. YouTube rotated but surfaced no new AI/agent row vs the baseline. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — MOVED vs 19:00 baseline, but all new rows are civic/social → raw_only
### /threads — new rows on top since the 19:00 baseline (07:56 UTC was baseline top)
- **NEW** `DdEkbp4k2z0` (TEXT_POST, 2026-09-09 15:20 UTC / 09-10 00:20 KST) — https://www.threads.com/@ethan13917/post/DdEkbp4k2z0 — `"엑셀을 뭐길래 / 엑셀을 보던 말던 / 후원을 하건 말건 / 나는 엑셀이나 여캠 보는 놈들 찐따라고 생각하지만 후원하고싶다는데 지 자유지"` — 조코딩 엑셀방송 opinion, civic/social.
- **NEW** `DdEK9PXk29m` (IMAGE, 09-09 11:37 UTC / 20:37 KST) — https://www.threads.com/@ethan13917/post/DdEK9PXk29m — `"이사람 뭔데 왜이리 못알아듣지…? 조코딩이 엑셀포맷을 빌렸고 성상품화하지 않았다고 했는데…"` — same debate.
- **NEW** `DdEJW6ak24I` (TEXT_POST, 09-09 11:23 UTC / 20:23 KST) — https://www.threads.com/@ethan13917/post/DdEJW6ak24I — `"지금 조코딩 엑셀방송에 빼액 하는 사람은 엑셀방송=성상품화 방송이라는 프레임에 갇혀있다고 봄…"` — same debate.
- Carry (unchanged from baseline): `DdDxpzbk5Cd` 07:56 조코딩 엑셀방송 opinion; `DdDemvEE0AR` empty REPOST_FACADE; `DdBPjr5k06w` @aprilran repost; 마케터 카피 / 영업 목록 / 사무직 파일 automation roots; agent-vs-chatbot `Dcn-LjGE5Wa`; 조회수 실험 rows.

### /replies — new batch of 09-09 evening rows (all civic/social 엑셀방송 personal-attack debate)
- **NEW** `DdEoS98k88x` (09-09 15:54 UTC) — https://www.threads.com/@ethan13917/post/DdEoS98k88x — `"왜 그렇게 오만한 생각을 하는지 모르겠어…"`
- **NEW** `DdElyb-kwKA` (15:32) — https://www.threads.com/@ethan13917/post/DdElyb-kwKA — `"너 나한테 븅신이라고 하지않았냐?"`
- **NEW** `DdEk0Guk2i3` (15:23) — https://www.threads.com/@ethan13917/post/DdEk0Guk2i3 — `"내 글 연구하니 고맙네… 내 타겟대상은 그런 사람들이었고…"`
- **NEW** `DdEgYxckwGl` (14:45) — https://www.threads.com/@ethan13917/post/DdEgYxckwGl — `"내가 타겟했던 대상은 왜곡된 내용으로 후원사에게 태그하고, 명확한 증거도없이 bm베꼈냐고…"`
- **NEW** `DdEdCZTEzlP` / `DdEct0Rk3rL` / `DdEcecRE_L2` / `DdEZrZNE7op` / `DdEPhbrE2Km` (14:1x–12:17) — 키워드/컨텐츠 일치·성관념 debate, all same 엑셀방송 argument.
- Interpretation: CK spent 09-09 evening actively arguing the 조코딩 엑셀방송 controversy (civic/social/culture-war flavored, some personal-attack), not an AI-operator signal. Off durable axis → `raw_only`.

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (anthropic engineering), agent-skill-languages (plicara), Snowflake red-agent (wiz.io), agent-security 6/6, 마케터/영업/사무직 automation roots, Claude Code/Codex 공식 설치 문서. No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 94, UNCHANGED → 변화 없음
Page title `Your stars`, https://github.com/stars, **94 stars** (was 94 at the 19:00 baseline). No new star. Top row still `simonw/llm` (12,480★). Recent-starred list below it unchanged (miuuyy/codex-chatgpt-web, snflkd/fluent-korean, anthropics/defending-code-reference-harness, piyushsachdeva/CKA-2024, pbakaus/impeccable, lyogavin/airllm, …). Language breakdown 24 Python / 15 JS / 12 TS / 7 Rust / 5 Shell unchanged.

## 3) Google My Activity (CDP) — NO new rows since 19:00 baseline → 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5822 (identical to 19:00 baseline). Top rows unchanged: 오후 4:48 검색 알림 4개 (Google 기능 업데이트 / 오픈AI), 오후 1:46 디지털데일리 `'VM웨어 횡포'에서 벗어날 수 있다` 가상화/백업 기사 (https://www.ddaily.co.kr/page/view/2026090808190822440) + 상포 테크놀로지 검색, 오후 12:29 펜시브 / THE VC 기업정보 lookup. No new 09-10 morning row visible yet → reinforcement of the 19:00 baseline, no fresh signal.

## 4) YouTube subscriptions (CDP) — feed rotation, NO new AI row vs baseline → 변화 없음
Hydrated (`구독 - YouTube`, len 9487). AI/agent rows are all carry-over from the 19:00 baseline: IBM Technology `Why won't AI agents just follow the rules?`, 테크몽 `AI 안경 끼고 외국인과 대화`. No new AI/agent/infra title surfaced this pass.
- Off-axis noise kept in raw, excluded from report: 흑우스토리 유튜브 조회수 뻥튀기, 마인드씨피알/링거/어썸블리스 health, 달수네라이브·새벽의축구·6시내축구 이강인/리버풀 soccer 라이브, 훈수두는이코치/언더스탠딩/박병찬 politics·투자 라이브, 불장단타왕 알트코인, 테이스터션 가품시계, Discovery Korea body-cam, 존이냐박이냐.

## Filtering notes
- Threads moved but all new own posts/replies are civic/social (조코딩 엑셀방송 debate) → off-axis `raw_only`.
- GitHub unchanged (94) → `변화 없음`.
- Google no new rows vs 19:00 baseline → `변화 없음`.
- YouTube rotation surfaced no new AI/agent row vs baseline → `변화 없음`.
- Soccer/politics/crypto/health YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-10 08:00 social pass. Reinforcement-only at the durable layer: Threads moved (new own posts + replies, but civic/social 엑셀방송 debate off-axis); GitHub 94 unchanged; Google no new rows since baseline; YouTube feed rotation no new AI row. All reinforce existing lanes or sit off-axis; none opens a new durable branch. Route `raw_only`; no durable page or index change.
