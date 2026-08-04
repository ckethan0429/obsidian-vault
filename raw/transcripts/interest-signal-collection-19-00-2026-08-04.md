---
title: Interest signal collection — 19:00 social run (2026-08-04)
created: 2026-08-04
type: raw-transcript
captured_at: 2026-08-04T19:02:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, threads-api, cdp-down, social, reinforcement, own-post, operating-economics]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 social run for 2026-08-04. Idempotency clear: no interest-signal-collection-19-00-2026-08-04.md
  existed. Baseline = same-day 08:00 social run (two new empty REPOST_FACADEs @david.crcl/@voice.of.freeeedom,
  both off-axis) plus the 11:00 new-target run and the 08-04 11:00 curation draft entry. Live Chrome CDP on
  127.0.0.1:9222 is STILL DOWN (curl /json/version exit 7, no chrome process) → YouTube, GitHub /stars,
  Google My Activity, ChatGPT, Claude, X all UNAVAILABLE (access facts, not 변화 없음). Threads via official
  Graph API (configured path); long-lived token refreshed OK (expires_in 5144417), /me confirmed ethan13917
  (user_id 27173231028946699). GENUINELY-NEW vs the 08:00 baseline: CK PUBLISHED his own cost/원가-frontier
  thread — "AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다" — TWICE on own /threads: root at 08-04 08:22:26 UTC
  (DbnH-ScE7Hs) and again at 08-04 09:09:16 UTC (DbnNVXGE6cn), each with a 1/5..5/5 reply chain visible on
  /replies (Meta GEM 2x training efficiency, GPT-5.6 1M-token on Bedrock, SageMaker serverless full
  fine-tuning of open weights, Cloudflare per-agent computer, 원가표 not 벤치마크표 synthesis). This IS the
  08-04 11:00 curation draft, now live. It is CK's OWN single-surface synthesis of the operating-economics /
  model-serving axis that was ALREADY absorbed 08-03 22:00 and reinforced 08-04 11:00 into
  ai-infra-operating-economics.md → own-posts-only-reinforcement rule → raw_only. The two 08-03 REPOST_FACADEs
  (DblTFNfE_Tr/DblG8smExWc) are now unchanged carry-over from the 08:00 baseline (no longer new). /mentions
  empty. keyword_search (agent 10 / Codex 4 / Claude Code 1 / Hermes 0) = 100% CK's own posts — reinforcement.
  Net: reinforcement-only at the durable layer; durable action = this raw transcript + Honcho/log audit only;
  index.md and all concept pages unchanged.
routing:
  - {surface: threads-api-own-threads, route: raw_only, note: "TWO NEW own TEXT_POST roots since 08:00 baseline — CK's cost/원가-frontier thread published twice: 08-04 08:22:26 UTC DbnH-ScE7Hs + 08-04 09:09:16 UTC DbnNVXGE6cn ('AI 경쟁은 이미 성능이 아니라 단가 싸움이다'). This is the 08-04 11:00 curation draft now live. CK's own single-surface synthesis of the operating-economics axis already absorbed 08-03 22:00 + reinforced 08-04 11:00 → own-posts-only-reinforcement → raw_only. Prior rows (DblTFNfE_Tr/DblG8smExWc 08-03 reposts, DbkpxynEyy9 agent-security thread) now unchanged carry-over."}
  - {surface: threads-api-replies, route: raw_only, note: "NEW 1/5..5/5 reply chains of the cost thread published at 08:22 and 09:09 (Meta GEM 2x, GPT-5.6 1M-token Bedrock, SageMaker serverless full FT, Cloudflare per-agent computer, 원가표 synthesis). Reinforces the same operating-economics axis. Reinforcement."}
  - {surface: threads-api-mentions, route: discard, note: "empty dataset ({\"data\": []})."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "agent(10)/Codex(4)/Claude Code(1) all @ethan13917's own posts; Hermes=0 — reinforcement, no external discovery."}
  - {surface: cdp-youtube, route: discard, note: "CDP down (exit 7, no chrome process) — unavailable (access fact, not 변화 없음)."}
  - {surface: cdp-github-stars, route: discard, note: "CDP down — unavailable (access fact)."}
  - {surface: cdp-google-myactivity, route: discard, note: "CDP down — unavailable (access fact)."}
  - {surface: cdp-chatgpt-claude-x, route: discard, note: "CDP down — no hydrated tabs reachable; unavailable (access fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-08-04.md
  - raw/transcripts/interest-signal-collection-11-00-2026-08-04.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
  - log.md
---

# Raw — 19:00 Social Collection (2026-08-04)

Source: Threads official Graph API (`graph.threads.net/v1.0`). Browser/CDP surfaces (YouTube, GitHub, Google, ChatGPT, Claude, X) unavailable — CDP down.
Date: 2026-08-04 (captured ~19:02 KST)
Account: `ethan13917` (씨케이)

## Live session notes
- Idempotency: no `interest-signal-collection-19-00-2026-08-04.md` existed → collection proceeded.
- Baseline = same-day `interest-signal-collection-08-00-2026-08-04.md` (two new off-axis REPOST_FACADEs) + `interest-signal-collection-11-00-2026-08-04.md` (operating-economics reinforcement) + the 08-04 11:00 curation-draft log entry.
- Live Chrome CDP `127.0.0.1:9222` is **STILL DOWN** (`curl /json/version` exit 7, no chrome process). YouTube / GitHub / Google / ChatGPT / Claude / X unavailable this run (access facts).
- Threads via official Graph API. Standalone stdlib collector `/tmp/th_collect_1900_0804.py` (urllib, no `requests`, cron-safe — no `-c`/heredoc/pipe). Long-lived token refreshed OK (`refresh_access_token`, expires_in 5144417); `/me` confirmed `ethan13917`. Raw JSON cached to `~/wiki/.cache/threads-2026-08-04-1900/` (disposable).

## Novelty summary
**CK published his own cost/원가-frontier thread — the 08-04 11:00 curation draft, now live.** Between the 08:00 baseline and this 19:00 pass, own `/threads` gained TWO new TEXT_POST roots: the same thread posted at 08-04 08:22 (`DbnH-ScE7Hs`) and again at 09:09 (`DbnNVXGE6cn`), each with a full 1/5..5/5 reply chain. This diffs the tops (own-post evidence exists — CDP being down does not freeze the API). But it is CK's OWN single-surface synthesis of the operating-economics / model-serving axis already absorbed 08-03 22:00 and reinforced 08-04 11:00 into `ai-infra-operating-economics.md` → own-posts-only-reinforcement rule → `raw_only`. The two 08-03 REPOST_FACADEs are now unchanged carry-over. All browser surfaces unavailable (CDP down). Durable action = this raw transcript + Honcho/log audit only.

## 1) Threads — own `/threads` (API) — TWO NEW own-post roots
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`
- **NEW (top):** `[2026-08-04 09:09:16 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnNVXGE6cn
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다  지난 하루 빅테크 발표를 한 줄로 줄이면 이렇다. 더 똑똑한 모델 자랑…
- **NEW (2nd):** `[2026-08-04 08:22:26 UTC]` TEXT_POST — https://www.threads.com/@ethan13917/post/DbnH-ScE7Hs
  > AI 경쟁은 이미 '성능'이 아니라 '단가' 싸움이다  지난 하루 빅테크 발표를 한 줄로 줄이면 이렇다. 더 똑똑한 모델 자랑…
- (These two roots are the same cost/원가 thread — the 08-04 11:00 curation draft — published twice, ~47min apart.)
- Following rows unchanged carry-over vs 08:00 baseline: `[08-03 15:20]` REPOST_FACADE `DblTFNfE_Tr` (@voice.of.freeeedom, civic/political); `[08-03 13:34]` REPOST_FACADE `DblG8smExWc` (@david.crcl); `[08-03 09:20]` agent-security thread head `DbkpxynEyy9`; `[07-31]` Samsung Galaxy IMAGE `Dbc78KPk5Ve`; older reposts + 07-22 investing. Reinforcement.

## 2) Threads — own `/replies` (API) — NEW reply chains of the cost thread
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- NEW dated rows are the 1/5..5/5 reply chain of the cost/원가 thread, published at both 08:22 and 09:09:
  > 5/5 정리하면, 지금 봐야 할 건 벤치마크 점수표가 아니라 원가표다  훈련·컨텍스트·파인튜닝·런타임 네 축이 동시에 '싸지는'…
  > 4/5 클라우드플레어는 '에이전트마다 컴퓨터 한 대'를 인프라로 팔기 시작했다  가벼운 아이솔레이트와 풀 리눅스 컨테이너를…
  > 3/5 오픈웨이트 '풀 파인튜닝'이 서버리스로 내려왔다  세이지메이커가 gpt-oss, Gemma 등 25개 넘는 오픈 모델의…
  > 2/5 100만 토큰 컨텍스트가 이제 '특별 기능'이 아니라 기본 옵션이다  베드락에서 GPT-5.6 계열이 100만 토큰…
  > 1/5 메타는 광고 추천 파운데이션 모델을 LLM 규모로 훈련하며 효율을 2배로 끌어올렸다  핵심은 '더 큰 모델'이 아니라…
  > 출처 · Meta GEM (학습 효율 2배) engineering.fb.com/2026/08/03/ml-application…
- These reinforce the operating-economics / model-serving axis (Meta GEM, GPT-5.6 1M-token Bedrock, SageMaker serverless FT, Cloudflare per-agent computer) already absorbed 08-03 22:00 + reinforced 08-04 11:00. Reinforcement.

## 3) Threads — `/mentions` (API)
- `{"data": []}` — empty.

## 4) Threads — keyword_search (API)
- `agent` (10), `Codex` (4), `Claude Code` (1), `Hermes` (0). Every hit is `@ethan13917`'s own post. Reinforcement, no external discovery.

## 5) Unavailable surfaces (CDP down — access facts, not 변화 없음)
- **YouTube** (subscriptions / liked / Watch Later): unavailable — no live Chrome/CDP.
- **GitHub** (stars / trending): unavailable — no CDP.
- **Google** (My Activity / search history): unavailable — no CDP.
- **ChatGPT / Claude / X**: unavailable — no CDP.

## Filtering notes
- The genuinely-new rows are CK's OWN posts (the cost/원가 thread + its reply chain), not external discovery. Own-posts-only-reinforcement: CK's own single-surface restatement of an already-durable axis → `raw_only`, not a new durable page.
- CDP being down does not freeze the Threads API for the day — CK posted between the 08:00 and 19:00 passes, so the tops legitimately moved; diffed against the same-day 08:00 transcript before classifying.
- Browser-authenticated surfaces recorded as access facts (CDP down), not negative evidence.

## Why this raw exists
Evidence store for the 2026-08-04 19:00 social pass. Threads API was the only grounded surface (CDP down). CK published his own cost/원가-frontier thread (the 11:00 curation draft) twice — genuinely-new own-post evidence but reinforcement of an already-durable axis → reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged.
