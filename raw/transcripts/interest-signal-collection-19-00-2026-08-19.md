---
title: Interest signal collection — 19:00 social run (2026-08-19)
type: raw
created: 2026-08-19
captured_at: 2026-08-19T19:10 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-19 raw existed before this run.
  Baseline = same-day 08:00 social transcript (cross-day both-static no-new-signal).
  CDP-UP same-day-rerun is NOT a pure re-read: CK POSTED between the 08:00 and
  19:00 passes. Own /threads gained a fresh 7-part thread (root DcNqaTyE63E
  2026-08-19T07:34 + 6-part reply chain DcNqauRk2Zs..DcNqc3Nk1wC) on the
  agent EXECUTION-ENVIRONMENT war — Grok per-bot dedicated computers (always-on,
  logs into API/MCP-less sites like a human, no workflow builder) vs Cloudflare
  sliced compute (isolate ms-execution, container only ~10%, session sleep/wake
  for 30-day resumability). Plus one off-axis personal /threads post DcNon1Lk7R9
  (칼퇴/회식/책임감 workplace-culture opinion) and personal reply noise
  (DcN123gk_Qo, DcNsfbbkyyH, DcM4rAek_ms). The agent-execution-environment axis
  is ALREADY durably captured in concepts/agent-runtime-vertical-integration.md
  (created 08-18, sources incl. x.ai/introducing-grok-bot +
  blog.cloudflare.com/cloudflare-computer). CK's thread is his single-surface
  synthesis of that already-durable axis → own-posts-only-reinforcement →
  raw_only, no concept-page change. Threads /mentions 0; keyword_search
  (agent/Claude Code/Codex) = all CK's OWN posts (reinforcement, not discovery).
  Live Chrome CDP UP (Chrome/147): GitHub stars (90, len 2781), YouTube
  subscriptions (len 9469), Google My Activity (len 5301) ALL byte-identical to
  the 08:00 baseline → 변화 없음. Durable layer (index.md, concept pages)
  unchanged; durable action = this raw transcript + Honcho routing audit
  + log.md entry only.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-19 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-19
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0819.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0819.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5097646); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0819.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0819_1900.json`.
- **Baseline** = same-day 08:00 social transcript `interest-signal-collection-08-00-2026-08-19.md` (cross-day both-static no-new-signal). No `19-00-2026-08-19` transcript existed before this run → idempotency guard clear, collection proceeded.

## Novelty summary
**CDP-up same-day-rerun — NOT a pure re-read.** CK POSTED between the 08:00 and 19:00 passes: own `/threads` gained a fresh 7-part thread on the agent execution-environment war (Grok per-bot computers vs Cloudflare sliced compute). This is genuinely-new own-post evidence, but it restates an axis ALREADY durably captured in `concepts/agent-runtime-vertical-integration.md` (created 08-18) → own-posts-only-reinforcement → whole run `raw_only`. All three live CDP surfaces (GitHub stars, YouTube subscriptions, Google My Activity) byte-identical to the 08:00 baseline. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — NEW own thread (agent execution-environment war), but on an already-durable axis
### `/threads` (own posts) — 2 new rows since 08:00

**NEW (on-axis, root of the fresh thread):**
> https://www.threads.com/@ethan13917/post/DcNqaTyE63E
> 2026-08-19T07:34 UTC TEXT_POST —
> "이번달 grok 봇마다 클라우드 컴퓨터 하나씩 붙여줬고, 클라우드플레어는 그 컴퓨터를 쪼개서 팔기 시작했네. 모델 성능 자랑은 이제 좀 끝난거같고, 누가 실행환경을 먹냐의 싸움인 듯."

**NEW (off-axis personal, workplace culture):**
> https://www.threads.com/@ethan13917/post/DcNon1Lk7R9
> 2026-08-19T07:18 UTC TEXT_POST —
> "이어폰 하루종일 꽂아도 대화할때 문제없음 되고. 칼퇴는 당연하고 회식은 굳이 해야돼? … 책임감은 맡겨진 과업을 충실히 해내는것. 또한 그에 맞는 보상이 있을때 극대화가 되는 것 … 잡디스크립션을 다시 확인해보세요." (off-axis, `raw_only`)

Below carry-over identical to the 08:00 baseline: `DcLEvAFk6xt` (08-18 agentic-security thread), `DcDVFzFkwm5` (오픈웨이트가 프론티어를 따라잡은 여름, 08-15), `Db7jAcME5yK` (미중 AI 모델 전쟁, 08-12), etc.

### `/replies` (own replies) — the 6-part reply chain of the new Grok/Cloudflare thread (all 08-19T07:34)
> https://www.threads.com/@ethan13917/post/DcNqauRk2Zs
> "그니까 에이전트가 얼마나 똑똑하냐보다, 로그인하고 파일만지고 30일 뒤에 다시 깨어나서 일 끝내는 쪽을 누가 쥐느냐가 중요해졌다는거임."
> https://www.threads.com/@ethan13917/post/DcNqbUIE-Xf
> "grok은 봇 하나에 컴퓨터를 그냥 붙여버림. api도 mcp도 없는 사이트에 사람처럼 로그인해서 조작하고, 한번 시연하면 루틴으로 저장함. always-on이라 봇이 먼저 팔로업함. 워크플로 빌더는 아예 없앴음."
> https://www.threads.com/@ethan13917/post/DcNqb0xEyrY
> "클라우드플레어는 정반대임. isolate로 llm이 짠 코드를 밀리초 단위로 실행하고, 컨테이너는 진짜 필요할 때만 씀. 주어진 일이 열개라면 컨테이너는 열개 중 한개로 줄이겠다는거임. … 봇 하나 유능함이 아니라 봇 몇백개가 빠르게 구동하는 선택을 한거지."
> https://www.threads.com/@ethan13917/post/DcNqcUkk1qU
> "30일 뒤에 동일한 작업을 이어나가려면 프로세스 죽어도 작업상태가 살아있어야 함. grok은 vm을 그냥 켜두는 무식한 방식, 클라우드플레어는 잠재웠다 깨우는 방식. 비싼 구독자면 컴퓨터 통째로 줘도 되고, 인프라 장사면 밀도에서 이겨야 사니까."
> https://www.threads.com/@ethan13917/post/DcNqc3Nk1wC
> "원문: https://x.ai/news/introducing-grok-bot  https://blog.cloudflare.com/cloudflare-computer/"

**Off-axis personal reply noise (raw_only):** `DcN123gk_Qo` ("ㅈㄴ싸질러놓네"), `DcNsfbbkyyH` ("하 ... 진짜..."), `DcM4rAek_ms` ("무적 맞을게!") — personal/social, not signal.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows, all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 08:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical to the 08-19 08:00 baseline). Same 반도체/축구협회/폭염/정치 noise + weak CSS-2026 / Piyush-DevOps carry-over rows.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical to baseline). Top `piyushsachdeva/CKA-2024` unchanged.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical to baseline). Tab has not refreshed since the 08:00 capture.

## Filtering notes
- Excluded from report: YouTube 반도체/축구협회/폭염/정치 noise (baseline carry-over); off-axis personal Threads post + reply noise (kept as raw evidence, not reported as signal).
- The one genuinely-new on-axis item — CK's Grok/Cloudflare execution-environment thread — restates the already-durable axis in `concepts/agent-runtime-vertical-integration.md`, so it stays `raw_only`.

## Why this raw exists
Evidence store for the 2026-08-19 19:00 afternoon social pass. **CDP-up same-day-rerun, not a pure re-read:** CK posted a fresh 7-part Grok-bot-vs-Cloudflare execution-environment thread between the 08:00 and 19:00 passes → genuinely-new own-post evidence. But it is CK's single-surface synthesis of an axis already durably captured in `concepts/agent-runtime-vertical-integration.md` (created 08-18) → own-posts-only-reinforcement → `raw_only`. All three CDP surfaces (YouTube 9469, GitHub stars 90, Google 5301) byte-identical to the 08:00 baseline → 변화 없음. Durable layer (index.md, concept pages) unchanged.
