---
title: Interest signal collection — 19:00 social run (2026-08-24)
type: raw
created: 2026-08-24
captured_at: 2026-08-24T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no interest-signal-collection-19-00-2026-08-24
  raw existed before this run (only same-day 08:00 social + 11:00 new-target). Baseline = same-day
  interest-signal-collection-08-00-2026-08-24.md (GitHub stars +2 on-axis, else reinforcement) +
  interest-signal-collection-11-00-2026-08-24.md (reinforcement-only) + concepts/ai-infra-operating-economics.md.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token refreshed OK
  (expires_in 5144765). Result: Threads MOVED — CK posted a genuinely-new 7-part own thread (root DcayfBaE9An,
  2026-08-24 18:55 KST) on Anthropic's "Fable 5" flagship being under-used per Ramp's card-spend index across
  70k companies (cheaper older models dominate); sourced from simonwillison.net 08-23. This is CK's OWN
  single-surface synthesis of the SAME operating-economics/model-cost article ALREADY absorbed at today's
  11:00 new-target run (ai-infra-operating-economics.md lane) -> own-posts-only-reinforcement -> raw_only,
  no concept-page change. Two 08:11-08:12 replies (미쳤다 / 여자 히틀러) = personal/political noise -> discard.
  GitHub stars UNCHANGED (top rows byte-identical to 08:00, still 92, snflkd/fluent-korean + anthropics/
  defending-code-reference-harness on top). YouTube subscriptions + Google My Activity BYTE-IDENTICAL to 08:00.
  Durable action = this raw transcript + Honcho routing audit + log.md entry only; index.md and all concept
  pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-24 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-24
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0824.py`). YouTube `feed/subscriptions` (len 9469) and Google My Activity (len 5301) from hydrated tabs; GitHub `/stars` from fresh target `DCC3E372969DF26821D01BB9EDE897FE` (`Your stars`, len 2839). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0824.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144765); `/v1.0/me` OK (`ethan13917`). Collector `/tmp/th_collect_1900_0824.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0824_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-08-24.md` + `interest-signal-collection-11-00-2026-08-24.md` + `concepts/ai-infra-operating-economics.md`. No `19-00-2026-08-24` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Threads moved: CK posted a genuinely-new 7-part own thread (~18:55 KST) on model-cost/adoption reality — but it is his own single-surface synthesis of the SAME Simon Willison/FT article already absorbed at today's 11:00 new-target run (operating-economics/cost lane) → own-posts-only-reinforcement → `raw_only`, no concept-page change.** GitHub stars unchanged (92, top rows byte-identical to 08:00); YouTube + Google byte-identical to 08:00. Durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — NEW own thread (raw_only, own-posts-only-reinforcement)

### NEW root — DcayfBaE9An (2026-08-24 18:55 KST, TEXT_POST 1/7)
> https://www.threads.com/@ethan13917/post/DcayfBaE9An
> 앤트로픽이 제일 좋다는 새 플래그십 fable 5 내놨는데, 7만개 회사 카드 결제 데이터로 실제로 뭘 쓰는지 봤더니 그 새 모델은 거의 안 쓰네. 다들 몇 세대 전 싼 모델을 제일 많이 쓰고 있는거야.

### NEW reply chain (2026-08-24 18:55–18:56 KST)
> https://www.threads.com/@ethan13917/post/Dcayfs9E5g_ (2/7)
> 그니까 램프라는 회사가 고객사 7만곳 청구 데이터로 어떤 모델에 돈을 쓰는지 지수를 만들었거든. 설문이 아니라 실제로 결제된 금액이라 체감이 훨씬 정확한 편임.

> https://www.threads.com/@ethan13917/post/DcayiFMk14V (3/7)
> 7월 앤트로픽 모델 지출을 보면 제일 많이 쓴 건 구형 Opus 4.8이고 혼자 거의 열개 중 셋을 먹었어. 새로 나온 Fable 5는 열개 중 한개도 안되고, 최신 Opus 5는 스무개 중 하나 수준이었고.

> https://www.threads.com/@ethan13917/post/Dcayj43E7Xr (4/7)
> Fable이 안 팔리는 이유는 단순한 듯. Api가격이 비싸다보니까 사람들이 굳이 최고 성능 안 찾고 싸고 무난한 모델로 몰린거지. Opus 5도 7월 24일에 막 나와서 아직 자리 못 잡은 것도 있고.

> https://www.threads.com/@ethan13917/post/Dcayk7Rk6x2 (5/7)
> 그래도 앤트로픽 매출 자체는 커졌어. 연환산 매출이 5월 470억 달러에서 7월 650억 달러로 뛰었고, 1년에 10만 달러 넘게 쓰는 고객사만 6천곳이라고 투자자한테 밝혔다네.

> https://www.threads.com/@ethan13917/post/Dcayl_pk5o8 (6/7)
> 오픈AI는 이번 분기 연환산 매출이 삼분의 일 넘게 늘어서 400억 달러를 넘겼고. 7월에 새 모델 내놓은 게 부진하던 초반을 끌어올린 걸로 보인듯

> https://www.threads.com/@ethan13917/post/Dcaynssk4vb (7/7)
> 원문: https://simonwillison.net/2026/Aug/23/anthropics-best-ai-model-struggles-to-attract-users-as-cheaper-t/

Interpretation: CK's own 7-part synthesis of the Simon Willison / FT piece "Anthropic's best AI model struggles to attract users as cheaper tools thrive" — the SAME article surfaced and absorbed at today's 11:00 new-target run into `concepts/ai-infra-operating-economics.md` (model-cost/adoption reality, competitive-pricing lane). Genuinely-new own-post evidence but single-surface synthesis of an already-durable axis → own-posts-only-reinforcement rule → `raw_only`.

### Discard — 08:11–08:12 replies (personal/political noise)
- `DcamwalE6b6` (08:12) "미쳤다" / `DcamoxKExar` (08:11) "여자 히틀러라고 했다고??? 진짜 막나가는구나" → off-axis civic/personal → `discard`.

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search — `agent` 12 / `Claude Code` 1 / `Codex` 4, all `ethan13917`'s OWN posts (reinforcement, not discovery).

## 2) GitHub stars (CDP fresh target) — 변화 없음 (top rows byte-identical to 08:00, still 92)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, 92 stars, len 2839). Top rows identical to the 08:00 baseline: `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, `pbakaus/impeccable`, `lyogavin/airllm`, … No new star since 08:00.

## 3) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08:00, len 9469)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Content diff against 08:00 cache = IDENTICAL. No feed movement.

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 08:00, len 5301)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Content diff against 08:00 cache = IDENTICAL. No new search activity.

## Filtering notes
- The only mover is Threads: CK's own new 7-part thread (model-cost/adoption reality) — single-surface synthesis of an already-durable operating-economics article → `raw_only`.
- Two 08:11–08:12 replies are personal/political noise → `discard`.
- GitHub/YouTube/Google all byte-identical to the 08:00 baseline → explicitly `변화 없음`.

## Why this raw exists
Evidence store for the 2026-08-24 19:00 afternoon social pass. CK's genuinely-new 7-part own thread synthesizes the Simon Willison/FT model-economics article that today's 11:00 new-target run already absorbed into `concepts/ai-infra-operating-economics.md`; own-posts-only-reinforcement → `raw_only`. All non-Threads surfaces byte-identical to the morning baseline. Durable layer (index.md, concept pages) unchanged.
