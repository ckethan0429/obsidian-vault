---
title: Interest signal collection — 19:00 social run (2026-08-21)
type: raw
created: 2026-08-21
captured_at: 2026-08-21T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no
  interest-signal-collection-19-00-2026-08-21 raw existed before this run.
  Baseline = same-day 08:00 social transcript (reinforcement-only) + same-day
  11:00 new-target run + prior-day 08-20 19:00 (same job). Live Chrome CDP UP
  (Chrome/147). GitHub stars (90, len 2781), YouTube subscriptions (len 9469),
  Google My Activity (len 5301) ALL byte-identical to the 08:00 baseline →
  변화 없음 on all three CDP surfaces. Threads via official Graph API
  (configured path): CK POSTED a genuinely-NEW own 1/6→6/6 thread between the
  08:00 and 19:00 passes (root 17963997614965373 / DcS8W0yE6LG at 08:47 KST +
  a 5-part reply chain 08:47–08:48) on CROSS-VENDOR AGENT-OAUTH / CREDENTIAL-
  SCOPING: Cloudflare "전부 아니면 전무 → 작업 단위" OAuth consent + AWS Partner
  Central agents MCP Server OAuth via AWS Sign-In + Vercel v0 Snowflake OAuth-
  token isolation. This is CK's OWN synthesis of the EXACT cross-vendor agent-
  OAuth cluster the same-day 11:00 new-target run captured (Cloudflare task-
  based-oauth-consent + AWS Partner Central MCP + Vercel v0-Snowflake), a facet
  of the already-durable agent-security / "securable" lane in
  ai-infra-operating-economics.md → own-posts-only-reinforcement rule →
  raw_only. The 08-20 REPOST_FACADE (DcRvrMwE5s2, @flota_kr) is now unchanged
  carry-over. One off-axis personal reply (인크레더블 아빠같아요! 06:56). /mentions 0;
  keyword_search (agent/Claude Code/Codex) all CK's OWN posts (reinforcement).
  Net reinforcement-only / no new durable signal. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only; index.md and all
  concept pages (incl. ai-infra-operating-economics.md) unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-21 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-21
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0821.py`). GitHub `/stars` (len 2781), YouTube `feed/subscriptions` (len 9469), Google My Activity (len 5301) all read from existing hydrated tabs. Raw JSON cached `~/wiki/.cache/cdp_read_1900_0821.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5179539); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0821.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0821_1900.json`.
- **Baseline** = same-day 08:00 social transcript (`interest-signal-collection-08-00-2026-08-21.md`) + same-day 11:00 new-target run (`interest-signal-collection-11-00-2026-08-21.md`) + prior-day 08-20 19:00 (same job). No `19-00-2026-08-21` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Reinforcement-only / no new durable signal.** CK posted a genuinely-new own 1/6→6/6 Threads thread (root `DcS8W0yE6LG` 08:47 KST + 5-part reply chain 08:47–08:48) on cross-vendor agent-OAuth / credential-scoping — CK's own synthesis of the SAME cluster the same-day 11:00 new-target run captured (Cloudflare task-based OAuth consent + AWS Partner Central MCP OAuth + Vercel v0 Snowflake OAuth-token isolation), restating the already-durable agent-security / "securable" lane → own-posts-only-reinforcement → `raw_only`. All three live CDP surfaces byte-identical to the 08:00 baseline → 변화 없음. Durable action = this raw transcript + Honcho routing audit + `log.md` entry only; `index.md` and all concept pages unchanged.

## 1) Threads (Graph API) — 1 NEW own thread (root + 5-part reply chain), raw_only reinforcement

### `/threads` (own posts) — top row is NEW (posted 08:47 KST, after the 08:00 pass)
**NEW — own TEXT_POST root (cross-vendor agent-OAuth / credential-scoping synthesis)**
> https://www.threads.com/@ethan13917/post/DcS8W0yE6LG  (id 17963997614965373)
> 2026-08-21T08:47:31 UTC+0 (= 08:47 KST) TEXT_POST
> "이번주에 클라우드플레어, AWS, 버셀이 거의 동시에 같은 걸 내놨네. 에이전트한테 내 계정 권한을 통째로 넘기지 말고, 그 작업에 필요한 만큼만 쥐여주자는 거야. 서로 약속한 것도 아닌데 비슷한 시기에 같은 방향을 내놓은 게 좀 눈에 띄더라고."
> → CK's OWN synthesis of the same-day 11:00 new-target cross-vendor agent-OAuth cluster; restates the agent-security/"securable" lane already durable in ai-infra-operating-economics.md → own-posts-only-reinforcement → `raw_only`.

Carry-over (unchanged since the 08:00 baseline):
> `18089635355388247` (REPOST_FACADE @flota_kr, DcRvrMwE5s2, 08-20T21:37 UTC) — now unchanged carry-over, off-axis
> `18113497747993517` (OpenRouter→Stripe M&A thread 08-20T06:46, DcQJuFPk6HL) — raw_only reinforcement
> `18117277813854345` (어사이드-브라우저 usage note 08-20T06:13, DcQF5nQkxmp) — raw_only reinforcement
> `18371607988224792` (Grok/Cloudflare execution-environment 08-19T07:34), `17942564835312167` (칼퇴/회식 off-axis 08-19)

### `/replies` (own replies) — 5 NEW rows = the reply chain (2/6→6/6) of the NEW thread, + 1 off-axis personal
> `18140154724585864` — 08-21T08:48 (6/6) "원문: https://blog.cloudflare.com/task-based-oauth-consent/ https://aws.amazon.com/about-aws/whats-new/2026/8/aws-partner-central-mcp/ https://vercel.com/blog/how-v0-authenticates-to-snowflake-without-exposing-the-users-oauth-token"  (DcS8eCskwWb)
> `17957539056210353` — 08-21T08:48 (5/6) "그니까 세 곳 다 방향이 똑같아. 에이전트한테 권한을 통째로 위임하던 걸, 작업 범위로 잘라 주거나 토큰 자체를 안 보여주는 쪽으로 옮긴 거야. 에이전트가 사람 대신 로그인하고 결제까지 하는 시대다보니까, 자격증명을 어떻게 쥐여줄지가 실제 문제로 올라온 거임."  (DcS8c3DE9JV)
> `18120762487895229` — 08-21T08:48 (4/6) "그니까 버셀은 v0가 스노우플레이크에 접속할 때 사용자 OAuth 토큰을 아예 노출 안 시키는 방식을 공개했어. 에이전트한테 원본 토큰을 안 주고 격리된 경로로 인증을 처리하는 거지. 토큰이 새도 계정이 통째로 털리진 않게 해둔 거고."  (DcS8biIE9xM)
> `17946286203290236` — 08-21T08:47 (3/6) "그니까 AWS는 파트너 센터 에이전트 MCP 서버에 AWS 로그인 기반 OAuth를 붙였어. 에이전트가 MCP로 뭔가 할 때 사람이 로그인하듯 정식 인증을 거치게 만든 거고, 키를 미리 심어두는 방식에서 벗어난 거임."  (DcS8aOuE0Hl)
> `18101292056199594` — 08-21T08:47 (2/6) "그니까 클라우드플레어는 '전부 아니면 전무' 식 OAuth 동의를 작업 단위로 쪼갰어. 지금까진 앱 하나 연결하면 계정 전체 권한을 내주는 식이었는데, 이제 이 작업엔 딱 이만큼만 동의하는 식으로 바꾼 거지."  (DcS8XfTk-gT)
> `18159764323493729` — 08-21T06:56 "인크레더블 아빠같아요!" (off-axis personal, DcSvrLVE3A6)
> → 5 new rows are the reply chain of the NEW cross-vendor agent-OAuth thread (own-post reinforcement); 1 off-axis personal. All `raw_only`.

### `/mentions` — 0 rows (empty, as prior runs)
### keyword_search — all CK's OWN posts (reinforcement, not discovery)
- `agent` → 12 rows all `ethan13917`; `Claude Code` → 1 row own; `Codex` → 4 rows own.

## 2) YouTube subscriptions (CDP) — 변화 없음 (len 9469 byte-identical to 08:00 baseline)
Page title: `구독 - YouTube` (https://www.youtube.com/feed/subscriptions, len 9469 — byte-identical). Same 반도체/축구/폭염/정치 noise + weak CSS/DevOps carry-over rows. No new AI/agent/infra row.

## 3) GitHub stars (CDP) — 변화 없음 (still 90, no new star)
Page title: `Your stars` (https://github.com/stars, `ckchain91`, **90 stars**, len 2781 — byte-identical). Sort "Recently starred"; top `piyushsachdeva/CKA-2024` unchanged, then `pbakaus/impeccable`, `lyogavin/airllm`, `zhaoxuya520/reverse-skill` carry-over. No new star row.

## 4) Google My Activity (CDP) — 변화 없음 (len 5301 byte-identical to baseline)
Page title: `Google - 내 활동` (https://myactivity.google.com/search-services/history/search, len 5301 — byte-identical). Same 오픈AI / Outlook / CUDA / hermes / durable-agent-runtime / 양도소득세 / 법원경매 history rows.

## Filtering notes
- Excluded from report: YouTube 반도체/축구/폭염/정치 noise (baseline carry-over); the one off-axis personal reply (인크레더블 아빠같아요!) kept as raw evidence, not reported as durable signal.
- The new own thread + reply chain are genuinely-new own-surface evidence but restate the already-durable cross-vendor agent-OAuth/credential-scoping (agent-security "securable") axis → reported as reinforcement, not new durable signal.

## Why this raw exists
Evidence store for the 2026-08-21 19:00 afternoon social pass. Reinforcement-only: CK posted a new own 1/6→6/6 thread on cross-vendor agent-OAuth/credential-scoping (Cloudflare task-based OAuth consent + AWS Partner Central MCP OAuth + Vercel v0 Snowflake token isolation) — same cluster as the same-day 11:00 new-target run, restating the durable agent-security lane → own-posts-only-reinforcement → raw_only. All three CDP surfaces (YouTube 9469, GitHub stars 90/2781, Google 5301) byte-identical to the 08:00 baseline. /mentions empty; keyword_search = own posts only. Durable layer (index.md, concept pages) unchanged.
