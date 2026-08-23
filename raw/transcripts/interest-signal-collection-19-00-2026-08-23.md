---
title: Interest signal collection — 19:00 social run (2026-08-23)
type: raw
created: 2026-08-23
captured_at: 2026-08-23T19:06 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no interest-signal-collection-19-00-2026-08-23
  raw existed before this run. Baseline = same-day 08:00 social run (clean both-static no-new-signal) +
  same-day 11:00 new-target run (reinforcement-only) + 15:00 curation pass (curation-only, no durable change) +
  concepts/ai-infra-operating-economics.md + concepts/agent-runtime-vertical-integration.md + concepts/honcho.md.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path).
  Result: REINFORCEMENT-ONLY. The one genuinely-new piece of evidence is CK's OWN afternoon thread: a fresh
  9-part thread posted 2026-08-23 16:04-16:05 KST — root DcX6LRvk7EG (1/9 "같은 모델 좋다길래 받아서 돌렸는데 왜
  이렇게 멍청하지") + reply chain DcX6L-BE-Rr(2/9)..DcX6U7fk_VT(9/9) — a plain-Korean explainer on why the SAME
  open weights behave differently locally (GPU-generation numeric drift, attention-backend next-token
  divergence, vllm-nightly 730+ package stack, sampler temp/top-p mismatch, KLD quantization-card skepticism,
  error-snowball). The 9/9 reply cites 원문 https://forum.level1techs.com/t/why-your-local-llm-feels-dumber-than-it-is/253917
  — the EXACT same-day 11:00 new-target HN row AND the 15:00 curation-pass topic. This is the
  curation-draft→publish→social cycle: 11:00 new-target HN row → 15:00 curation → 16:04 CK publishes own thread →
  19:00 collection sees it. Genuinely-new own-post evidence but restates an ALREADY-durable open-weight /
  inference-quality lane (absorbed under ai-infra-operating-economics) → own-posts-only-reinforcement → raw_only,
  no concept-page change. /mentions 0; keyword_search (agent/Claude Code/Codex) all CK's OWN posts (reinforcement).
  All three CDP surfaces BYTE-IDENTICAL to the 08:00 baseline (verified via diff, not just length): GitHub stars
  90/len 2781, YouTube subscriptions len 9469, Google My Activity len 5301 → 변화 없음 on all three. Durable action =
  this raw transcript + Honcho routing audit + log.md entry only; index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-23 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-23
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0823.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0823.json`. All three byte-identical to the 08:00 baseline (`diff` against `.cache/cdp_read_0800_0823.json`).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097635); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0823.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0823_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-08-23.md` (clean both-static no-new-signal) + `interest-signal-collection-11-00-2026-08-23.md` (new-target, reinforcement-only) + the 15:00 curation pass (curation-only) + `concepts/ai-infra-operating-economics.md` + `concepts/agent-runtime-vertical-integration.md` + `concepts/honcho.md`. No `19-00-2026-08-23` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only.** The single genuinely-new item is CK's OWN afternoon thread (9 parts, 16:04-16:05 KST) explaining why identical open weights feel dumber run locally. Its 9/9 reply cites the Level1Techs "why your local LLM feels dumber than it is" post — the exact same-day 11:00 new-target HN row and the 15:00 curation topic → this is the curation-draft→publish→social cycle, restating an already-durable open-weight/inference-quality lane → own-posts-only-reinforcement → `raw_only`. All three CDP surfaces byte-identical to 08:00 → 변화 없음. Durable action = this raw transcript + Honcho audit + `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — NEW own thread (raw_only), else reinforcement

### `/threads` (own posts) — NEW top row (curation-draft→publish cycle)
> https://www.threads.com/@ethan13917/post/DcX6LRvk7EG  (id 18210978586358084)
> 2026-08-23T07:04:39 UTC (= 16:04 KST) TEXT_POST — root 1/9
> "같은 모델 좋다길래 받아서 돌렸는데 어 이거 왜 이렇게 멍청하지 싶었던 적 있을거야. 이게 기분 탓이 아니라는 걸 어떤 사람이 제대로 실험해서 정리해놨네. 같은 가중치를 써도 내 컴에서 돌리는 거랑 그 모델 만든 랩이 돌리는 거랑은 애초에 다른 물건이 되는 거였음. 1/9"

Prior top (`DcS8W0yE6LG`, 08-21 cross-vendor agent-OAuth thread) now #2 — unchanged carry-over. REPOST_FACADE `DcRvrMwE5s2` (@flota_kr 08-20) + `DcQJuFPk6HL` (OpenRouter→Stripe 08-20) + `DcQF5nQkxmp` (어사이드-브라우저 grok/gpt luna 08-20) + `DcNqaTyE63E` (Grok/Cloudflare execution-env 08-19) all unchanged carry-over.

### `/replies` (own replies) — NEW 8-part reply chain (2/9..9/9, all 2026-08-23 07:05 UTC = 16:05 KST)
> 2/9 https://www.threads.com/@ethan13917/post/DcX6L-BE-Rr — "그니까 LLM 돌리는 하드웨어랑 소프트웨어 조합이 사람마다 조금씩... 그래픽카드 세대가 다르면 안에서 다음 토큰 계산하는 수학 자체가 미묘하게 다르게 굴러가. 같은 weight를 올려도 결과가 갈리는 이유가 여기서 시작되는 거고."
> 3/9 https://www.threads.com/@ethan13917/post/DcX6NU6k-JZ — "모델 벤치마크 점수를 찍은 랩은 자기들 하드웨어랑 자기들 소프트웨어로 돌린 숫자를 올리는 거야. 근데 그 환경이 내 환경이랑 완전 딴판이거든..."
> 4/9 https://www.threads.com/@ethan13917/post/DcX6Oc1k8li — "샘플러 세팅도 크더라. 모델카드에 temp 얼마, top-p 얼마... temp를 너무 낮게 주면 qwen 같은 애가 생각 루프에 갇혀서 혼자 계속 뱅뱅 도는 것도 이 세팅 문제인 거고."
> 5/9 https://www.threads.com/@ethan13917/post/DcX6Ppzk8Mm — "제일 무서운 건 이게 눈덩이라는 거야. 다음 토큰 확률이 아주 조금만 어긋나도 단어 하나가 바뀌고, 그 단어가 다음 문장 전체를 다른 방향으로 끌고 가..."
> 6/9 https://www.threads.com/@ethan13917/post/DcX6QtBk2ta — "소프트웨어 스택도 상상 이상으로 두껍다. 실험한 사람이 까본 vllm 나이틀리 컨테이너 하나에 패키지가 칠백삼십개 넘게 들어있었대..."
> 7/9 https://www.threads.com/@ethan13917/post/DcX6RyYEwh4 — "실제로 테스트를 해봤는데, 똑같은 Qwen 가중치에서 어텐션 백엔드만 바꿨더니 모델이 고르는 다음 토큰이 달라졌어..."
> 8/9 https://www.threads.com/@ethan13917/post/DcX6To0k_fX — "그래서 양자화 모델카드에 KLD 숫자 말도 안되게 낮게 적어놓은 거 보면 그냥 믿지 말라고 하더라. 어떤 기준이랑 비교했는지, 무슨 데이터로 쟀는지 다 안 밝히면 그 숫자는 해석 자체가 안 되는 거니까..."
> 9/9 https://www.threads.com/@ethan13917/post/DcX6U7fk_VT — "원문: https://forum.level1techs.com/t/why-your-local-llm-feels-dumber-than-it-is/253917"

**Interpretation:** This is CK's own single-surface synthesis of the same-day 11:00 new-target HN row "Why your local LLM feels dumber than it is" (routed `raw_only` at 11:00) and the 15:00 curation pass, now published as a Korean explainer thread. Reinforces the already-durable open-weight/inference-quality lane (GPU-gen numeric drift, attention-backend divergence, thick sw-stack, sampler mismatch, KLD skepticism, error-snowball) — NOT a new branch → own-posts-only-reinforcement → `raw_only`.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08:00, len 9469)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469). `diff` against 08:00 cache = IDENTICAL. No feed movement since morning.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, byte-identical to 08:00)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical). No new star row.

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 08:00, len 5301)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301). `diff` against 08:00 cache = IDENTICAL. No new search activity.

## Filtering notes
- The only surface that moved is Threads own-posts, and that movement is CK's own curation-cycle thread reinforcing an already-durable lane → `raw_only`.
- YouTube/GitHub/Google all byte-identical to the morning baseline (verified via content `diff`, not just length) → explicitly `변화 없음`, no feed rotation this pass.

## Why this raw exists
Evidence store for the 2026-08-23 19:00 afternoon social pass. Reinforcement-only: CK's own 9-part local-LLM-quality thread (curation-draft→publish→social cycle over the same-day 11:00 HN row + 15:00 curation) is genuinely-new own-post evidence but restates the already-durable open-weight/inference lane → `raw_only`; all three CDP surfaces byte-identical to 08:00. Durable layer (index.md, concept pages) unchanged.
