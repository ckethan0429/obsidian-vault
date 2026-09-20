---
title: Interest signal collection — 08:00 social run (2026-09-21)
type: raw
created: 2026-09-21
captured_at: 2026-09-21T08:10 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp, monetization, kmong, gumroad, coupang]
route_hint: append_existing
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:10 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-21 raw existed before this run. Baseline (most-recent
  completed social transcript by mtime) = interest-signal-collection-19-00-2026-09-20.md
  (09-20 19:00 social, clean same-day both-static no-new-signal). Live Chrome CDP UP
  (Chrome/147.0.7727.55). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5137294), /v1.0/me OK (ethan13917, id 27173231028946699).
  RESULT: standard surfaces all reinforcement/no-new-signal — Threads /threads top
  18115198486994703 REPOST_FACADE (2026-09-19T02:29:14Z) + /replies top 18153734854518735
  ("갑자기 즙짜네", 09-15) BOTH byte-identical to the 09-20 baseline (CK posted nothing since).
  /mentions empty. keyword_search agent/Claude Code/Codex = CK's own older posts (existing lanes).
  GitHub stars len 2807, Google My Activity len 5822, YouTube subs len 9487 ALL length-identical
  to baseline -> 변화 없음. NEW SURFACE observed for the first time on the collection surface:
  CK's own productized monetization pipeline is now visible in live tabs — kmong (크몽) 8 gigs
  submitted (승인 전), gumroad "GPU Server Build Guide" English PDF, coupang partners affiliate.
  This concretely instantiates the Track B / productized-consulting / English-blog goals in
  virton-career-and-business-profile.md, so it is routed append_existing (not a new page).
routing:
  route: append_existing
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-21 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions, kmong my-gigs, gumroad products, coupang partners)
Source URL: see per-surface permalinks below
Date: 2026-09-21
Account: `ethan13917` (씨케이) / GitHub `ckchain91` / kmong `보송보송한첫눈5940` / gumroad `ethanverse784`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0921.py`). Raw JSON cached `~/wiki/.cache/cdp_0921_0800.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137294); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0921.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0921_0800.json`.
- **Baseline** = most-recent completed social transcript by mtime = `interest-signal-collection-19-00-2026-09-20.md` (09-20 19:00 social, clean same-day both-static no-new-signal). Novelty judged against it plus the 09-20 same-day chain.
- Cron-mode fallback used throughout: standalone `/tmp/*.py` scripts + `curl -o file`.
- **New tabs present in `/json/list` this run** (not seen in prior social runs): `kmong.com/my-gigs`, `gumroad.com/products` + `gumroad.com/products/grhian/edit`, `partners.coupang.com/#affiliate/ws`. These are CK's own seller/product surfaces.

## Novelty summary
Standard interest surfaces are **reinforcement / no-new-signal**. The genuinely-new observation is **CK's own productized monetization pipeline surfacing for the first time on the collection surface** (kmong gigs + gumroad GPU PDF + coupang partners) — a concrete grounding of the Track B / productized-consulting / English-technical-blog strategy already recorded in `virton-career-and-business-profile.md`. Routed `append_existing` to that page. All standard surfaces stay `raw_only`.

## 1) Threads (Graph API) — reinforcement, both-static
### /threads — top UNCHANGED vs 09-20 baseline
- Top row `18115198486994703` (2026-09-19T02:29:14 UTC / 11:29 KST, **REPOST_FACADE**, empty text) — https://www.threads.com/@ethan13917/post/Ddc8H8-E-sI — byte-identical to the 09-20 baseline top. No new own post since.
- Carry (unchanged): `17946461313280547` (육아용품, parenting, 09-15) ; `18064330907521001` (그록봇/muse 챗봇 에이전트 vs 비즈니스는 아직 메일 의사결정 — on-axis agent-adoption-vs-reality own post, 09-15) ; `18111305732518146` 법무부장관 청문회 civic ; `18111540608596140` "야름답다" personal ; `18084391358315488` REPOST_FACADE (empty, 09-11) ; `18177935422381992` 한동훈 국무의원 civic (09-10) ; `18130629235679697` new iphone (09-10).

### /replies — top UNCHANGED vs 09-20 baseline
- Top row `18153734854518735` ("와... 갑자기 즙짜네...", 2026-09-15T02:10:19 UTC) — https://www.threads.com/@ethan13917/post/DdSmx5WE4Hv — byte-identical to baseline. No new reply since. Carry rows: youtube shorts reply (09-15), "어그로 능력은 좋은데" (09-14), Macos reinstall Q (09-12), 조코딩 논쟁 reply cluster (09-09).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (existing lanes)
Every TOP hit is CK's own older posts (Anthropic managed-agents 원문, plicara.ai agent-skill research, wiz.io red-agent, marketer-workflow Claude Code/Codex posts, official Claude Code/Codex install docs). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — len 2807 length-identical → 변화 없음
Page title `Your stars`, https://github.com/stars, body len 2807 (length-identical to the 09-20 baseline snapshot). No new starred repo.

## 3) Google My Activity (CDP) — len 5822 identical → 변화 없음
`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5822 (length-identical to baseline). No new search row surfaced.

## 4) YouTube subscriptions (CDP) — len 9487 identical → 변화 없음
`구독 - YouTube`, https://www.youtube.com/feed/subscriptions, len 9487 (length-identical to baseline). No feed rotation; top rows remain entertainment/노이즈, no fresh AI/agent/infra row.

## 5) NEW SURFACE — CK's productized monetization pipeline (CDP, first capture)
### 5a) kmong (크몽) — my-gigs, 8 gigs submitted (승인 전 / 승인 대기 중, 영업일 7일 이내)
Page title `실력 있는 전문가 찾기, 크몽`, https://kmong.com/my-gigs — seller profile `보송보송한첫눈5940`, 프로필 60% 완성. All 8 gigs registered/modified **2026.08.11**, state `승인 전` (pending approval), 판매중 0.

Visible gig list (verbatim titles + price):
> #804966 전자책 · 투자·재테크 · 부동산 — **부동산 경매 실전 체크리스트 전자책을 드립니다** — 19,000원
> #804799 IT·프로그래밍 · 데브옵스·인프라 — **AI 인프라용 GPU 서버를 구축해 드립니다** — 600,000원~
> #804790 전자책 · IT개발·데이터·AI 직무 — **GPU 서버 구축 실전 가이드 전자책을 드립니다** — 19,000원
> #804780 전자책 · IT개발·데이터·AI 직무 — **VMware 탈출 실전 가이드 전자책을 드립니다** — 19,000원
> #804731 IT·프로그래밍 · 서버·클라우드 — **서버 모니터링 대시보드를 구축해 드립니다** — 300,000원~
> #804721 IT·프로그래밍 · 맞춤형 챗봇·GPT — **사내 문서 기반 AI 챗봇을 구축해 드립니다** — 500,000원~
> #804716 IT·프로그래밍 · 데브옵스·인프라 — **VMware에서 Proxmox로 이관해 드립니다** — 400,000원~
> #804701 IT·프로그래밍 · 크롤링·스크래핑 — **파이썬 크롤링/엑셀 자동화 스크립트를 제작해 드립니다** — 30,000원~

### 5b) gumroad — GPU Server Build Guide (English PDF)
Page title `The GPU Server Build Guide — Passthrough, vGPU/MIG, and an 8×H200 Case Study (PDF)`, https://gumroad.com/products/grhian/edit — seller `ethanverse784.gumroad.com`.

Verbatim product description excerpt:
> From hardware inspection to PCIe passthrough, vGPU/MIG, and licensing — a field guide to building GPU servers for AI workloads, written by an engineer who builds them for a living.
> The centerpiece: the full story of an 8×H200 server that would not boot — a large-BAR / MMIO / UEFI reset loop — turned into a general troubleshooting guide you will not find with a quick search.
> What's inside (14-page PDF, English): Hardware inspection checklist for GPU servers; PCIe passthrough setup + the large-BAR boot-loop fix step by step; vGPU vs MIG: which one you actually need + licensing landscape; Glossary.
> Who it's for: Engineers standing up on-prem GPU servers for AI workloads; Teams moving from cloud GPUs to owned hardware.

### 5c) coupang partners — affiliate account (no activity yet)
Page title `쿠팡 파트너스 공식 사이트 - Coupang Partners`, https://partners.coupang.com/#affiliate/ws — 쿠팡 인플루언서. 기간별 리포트 최근 업데이트 2026.08.11. 일별/이번 달 실적 모두 클릭 0 / 구매 0 / 수익 ₩0 / 전환율 0.00%.

## Filtering notes
- Threads `/threads` + `/replies` tops both unchanged since 09-20 baseline → both-static no-new-signal.
- GitHub len 2807 / Google len 5822 / YouTube len 9487 all identical → `변화 없음`.
- keyword_search = CK's own older posts (existing agent/Claude Code/Codex lanes) → reinforcement.
- The monetization tabs are CK's OWN seller surfaces, registered 2026-08-11 (~6 weeks ago), still pending approval; they are new to the *collection surface* (never captured before) but not created today. Recorded as concrete grounding of an existing durable strategy, not a brand-new external signal.

## Why this raw exists
Evidence store for the 2026-09-21 08:00 social pass. Standard surfaces reinforcement/변화 없음; the durable delta is the first capture of CK's live productized monetization pipeline (kmong 8 gigs + gumroad English GPU PDF + coupang partners), routed `append_existing` to `concepts/virton-career-and-business-profile.md`.
