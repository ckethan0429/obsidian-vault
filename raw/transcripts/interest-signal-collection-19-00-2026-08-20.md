---
title: Interest signal collection — 19:00 social run (2026-08-20)
type: raw
created: 2026-08-20
captured_at: 2026-08-20T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-20 raw existed before this run.
  Baseline = same-day 08:00 social transcript (both-static no-new-signal) +
  same-day 11:00 new-target run. CDP-down same-day-rerun != pure re-read:
  CK POSTED two genuinely-new own /threads roots between the 08:00 and 19:00
  passes (both ~15:xx KST). (1) OpenRouter->Stripe M&A 1/7->7/7 thread
  (root DcQJuFPk6HL, orig openrouter.ai/blog/announcements/openrouter-is-joining-stripe/)
  — CK's OWN synthesis of the same-day 11:00 new-target HN row (query->publish
  cycle, same reinforcement thread) restating the inference-cost / LLM-gateway-
  consolidation axis of ai-infra-operating-economics.md. (2) 어사이드-브라우저
  usage pattern (DcQF5nQkxmp) — grok 4.6 + gpt luna as token-efficient prompt
  refiners feeding frontier models, Discord(Hermes)/Claude Code browser-linked
  with fable/gpt-sol selection, restating the model-routing / execution-
  environment axis (agent-runtime-vertical-integration.md, created 08-18).
  Both genuinely-new own-post evidence but restate already-durable axes ->
  own-posts-only-reinforcement rule -> raw_only. /mentions 0; keyword_search
  (agent/Claude Code/Codex) all CK's OWN posts. Live Chrome CDP UP (Chrome/147):
  GitHub stars (90, len 2781), YouTube subscriptions (len 9469), Google My
  Activity (len 5301) ALL byte-identical to the 08:00 baseline -> 변화 없음.
  Durable action = this raw transcript + Honcho routing audit + log.md entry
  only; index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-20 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-20
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0820.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0820.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5144349); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0820.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0820_1900.json`.
- **Baseline** = same-day 08:00 social transcript (`interest-signal-collection-08-00-2026-08-20.md`, both-static no-new-signal) + same-day 11:00 new-target run. No `19-00-2026-08-20` transcript existed before this run → idempotency guard clear, collection proceeded.

## Novelty summary
**CDP-down-analogue "same-day-rerun ≠ pure re-read" case, but CDP is actually UP.** CK POSTED two genuinely-new own `/threads` roots between the 08:00 and 19:00 passes. Both restate already-durable axes (own-posts-only-reinforcement) → `raw_only`. All three live CDP surfaces byte-identical to the 08:00 baseline → 변화 없음. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 2 NEW own posts (both raw_only reinforcement)
### `/threads` (own posts) — top TWO rows are NEW (posted ~15:xx KST, after the 08:00 pass)

**NEW #1 — OpenRouter→Stripe M&A thread (root + 1/7→7/7 reply chain)**
> https://www.threads.com/@ethan13917/post/DcQJuFPk6HL  (id 18113497747993517)
> 2026-08-20T06:46 UTC TEXT_POST —
> "OpenRouter가 Stripe에 인수됐네. 여러 AI 모델을 하나로 묶어서 골라 붙여주던 라우팅 회사를, 결제로 유명한 회사가 통째로 사간거야. 모델 성능 경쟁 얘기가 아니라 결제회사가 이 레이어를 집었다는 게 좀 눈에 띄네.  1/7"

Reply chain (own, 06:46–06:47 UTC):
> 2/7 `Db.../DcQJvV8k1Q9` — (OpenRouter 2023년 초 '결국 멀티모델 세상이 온다' 믿음으로 시작)
> 3/7 `DcQJwlBk9qz` — "몇 년째 별명이 'LLM계의 Stripe'였다네. 복잡한 인프라랑 시장 판을 깔끔한 API 하나로 감싸버리는 게 둘이 똑같다는거야."
> 4/7 `DcQJxvsk_HJ` — "인수됐는데도 이름·제품·로드맵 다 그대로 간다고 해."
> 5/7 `DcQJyz-Ew4f` — "핵심은 이 문장인듯. 추론(inference)이 이제 모든 회사에서 가장 큰 지출 항목이 되어간다는거야."
> 6/7 `DcQJzwyk9_C` — "90명짜리 스타트업인데, 커지면서도 그 속도랑 밀도는 악착같이 지키겠다고 하네."
> 7/7 `DcQJ0zzk7xi` — "원문: https://openrouter.ai/blog/announcements/openrouter-is-joining-stripe/  7/7"

→ **Same-day query→publish cycle:** this is CK's OWN synthesis of the same-day 11:00 new-target HN row ("OpenRouter is joining Stripe"). One reinforcement thread — restates the inference-cost / LLM-gateway-consolidation axis already durable in `ai-infra-operating-economics.md`. `raw_only`.

**NEW #2 — 어사이드 브라우저 usage pattern (model-routing / execution-environment)**
> https://www.threads.com/@ethan13917/post/DcQF5nQkxmp  (id 18117277813854345)
> 2026-08-20T06:13 UTC TEXT_POST —
> "내가 요새 어사이드 브라우저를 사용하고 있는 방식. grok 4.6과 gpt luna를 이용하는 방식임. 상대적으로 토큰에 대한 여유가 있는 모델을 사용하는 거지. 이렇게 되면 내가 가볍게 작성한 프롬프트도 정제해서 프론티어 모델에 전달해줌. 특히 디스코드(헤르메스), 클코를 브라우저에 연동해놓고 모델을 fable, gpt-sol로 선택해놓으면 알짤딱깔센으로 처리해줌."

→ Personal usage note: cheaper/token-loose models (grok 4.6, gpt luna) as prompt refiners → frontier models; Discord(Hermes)/Claude Code browser-linked with fable/gpt-sol model selection. Restates the model-routing / execution-environment axis (`agent-runtime-vertical-integration.md`, created 08-18). `raw_only`.

Below carry-over identical to the 08:00 baseline: `18371607988224792` (Grok/Cloudflare execution-environment thread 08-19T07:34), `17942564835312167` (칼퇴/회식/책임감 off-axis personal 08-19), `18335069719286024` (08-18 AI-agent-security thread), `18148967395523856` (오픈웨이트 여름 08-15), etc.

### `/replies` (own replies) — top rows are the OpenRouter 1/7→7/7 reply chain (above), no other new dated rows
### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows, all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 08:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical to the 08-20 08:00 baseline). Same 반도체/축구협회/폭염/정치 noise + weak CSS-2026 / Piyush DevOps carry-over rows. No new AI/agent/infra row.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical to baseline). Sort "Recently starred"; top `piyushsachdeva/CKA-2024` unchanged, then carry-over `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill` (all previously-starred, no new star row).

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical to baseline). Tab not refreshed since the earlier capture; same 오픈AI / Outlook / CUDA / hermes / durable-agent-runtime / 양도소득세 / 법원경매 history rows.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회/폭염/정치 noise (baseline carry-over); off-axis personal Threads posts/replies (kept as raw evidence, not reported as signal).
- The two new own Threads posts are genuinely-new own-post evidence but restate already-durable axes → reported as reinforcement, not new durable signal.

## Why this raw exists
Evidence store for the 2026-08-20 19:00 afternoon social pass. **Same-day-rerun ≠ pure re-read:** CK posted two new own `/threads` roots (OpenRouter→Stripe M&A synthesis of the same-day 11:00 HN row; 어사이드-브라우저 model-routing usage note) between the 08:00 and 19:00 passes — both restate already-durable axes (own-posts-only-reinforcement) → `raw_only`. All three CDP surfaces (YouTube 9469, GitHub stars 90/2781, Google 5301) byte-identical to the 08:00 baseline. `/mentions` empty; keyword_search = own posts only. Durable layer (index.md, concept pages) unchanged.
