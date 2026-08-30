---
title: Interest signal collection — 19:00 social run (2026-08-30)
type: raw
created: 2026-08-30
captured_at: 2026-08-30T19:00 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time (~19:00 KST). Idempotency clear: no
  interest-signal-collection-19-00-2026-08-30 raw existed before this run (same-day 08:00 social +
  11:00 new-target present). Baseline = same-day 08:00 social transcript
  (interest-signal-collection-08-00-2026-08-30.md) + 11:00 new-target + prior 08-29 19:00 social.
  Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token refresh OK
  (expires_in 5107549), /v1.0/me OK (ethan13917). GitHub stars + Google My Activity + YouTube subs read
  via stdlib raw-socket WS CDP client.
  Result: REINFORCEMENT-ONLY. Threads /threads AND /replies tops both moved because CK POSTED between
  08:00 and 19:00 — but the new content is CK publishing PART 2 (설치편: "설치하고 첫 명령 내리기") of his
  planned "터미널 에이전트 활용하기" info-post series (root 18117970942932395 @ 15:48 KST + 8-post reply chain
  15:49–15:58 KST). Same series he launched at 08-29 night (intro + job-role chain) and continues per his
  "정보글로 복귀" plan. Own-posts-only-reinforcement of the already-durable terminal/managed-agents axis → raw_only.
  /mentions empty; keyword_search 'agent'/'Claude Code'/'Codex' all top-hit CK's own posts (reinforcement).
  GitHub stars byte-identical (len 2839, 92 stars) → 변화 없음. Google My Activity byte-identical (len 5301,
  stale tab) → 변화 없음. YouTube subscriptions blank nav-only shell (len 17) → unavailable (access fact).
  Durable action = this raw transcript + Honcho routing audit + log.md entry only. index.md and all concept
  pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-30 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-08-30
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0830.py`, `/tmp/cdp_github_1900_0830.py`). GitHub `/stars` (`Your stars`, https://github.com/stars, len 2839, 92 stars — first two `/stars` targets timed out, third hydrated), Google My Activity (`Google - 내 활동`, https://myactivity.google.com/search-services/history/search, len 5301), YouTube `feed/subscriptions` → blank nav-only shell (`구독 - YouTube`, len 17). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0830.json` + `~/wiki/.cache/cdp_github_1900_0830.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5107549); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0830.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0830_1900.json`.
- **Baseline** = same-day 08:00 social transcript (`interest-signal-collection-08-00-2026-08-30.md`) + 11:00 new-target + prior-day 08-29 19:00 social. No `19-00-2026-08-30` transcript existed before this run → idempotency guard clear.

## Novelty summary
**Reinforcement-only.** Threads `/threads` AND `/replies` tops both moved vs the 08:00 baseline because CK POSTED between 08:00 and 19:00 — but the new content is CK publishing **PART 2 (설치편: "1편 — 설치하고 첫 명령 내리기")** of his planned **"터미널 에이전트 활용하기"** info-post series (root post @ 15:48 KST + an 8-post installment reply chain 15:49–15:58 KST). This is the same series he launched on 08-29 night (intro + job-role reply chain) and continues per the "정보글로 복귀" plan — own-posts-only-reinforcement of the already-durable terminal/managed-agents axis → route `raw_only`. All CDP surfaces unchanged or unavailable. Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both surfaces moved, but own-posts-only reinforcement

### /threads — NEW own post: 터미널 에이전트 series PART 2 (설치편)
- `18117970942932395` (2026-08-30 06:48:24 UTC / **15:48 KST**) — https://www.threads.com/@ethan13917/post/Dcp54Vjk2L7
  > ChatGPT나 Claude 앱을 써도 대부분의 궁금증은 풀립니다. 그런데 앱은 방법을 설명해줄 뿐, 내 컴퓨터의 파일을 대신…
- Carry (unchanged below): 08-29 series intro `18104744447622673` (22:49 KST — DcoFQtPE6iI) + `17902817622557812` (21:47 KST — Dcn-LjGE5Wa); 08-29 experiment-conclusion `18113614858988319` (DcnVlR9Exxe) + `18132499333726979` (DcnTKuXk4XA); 08-29 REPOST_FACADEs `17990609628010840` (DcnTHbJExNu) + `17938296684347324` (DcmwNuJkws9); older 08-24..08-28 posts.

### /replies — NEW series PART 2 installment reply chain (15:49–15:58 KST 08-30)
- `18113537921076628` (06:58:04 UTC / **15:58 KST**) — https://www.threads.com/@ethan13917/post/Dcp6_EBk6Sq
  > 원문(공식 설치 문서): Claude Code https://code.claude.com/docs/en/quickstart C…
- `17866958892646667` (06:56:55 UTC / **15:56 KST**) — https://www.threads.com/@ethan13917/post/Dcp62ifE3Ft
  > 핵심 안전 수칙은 세 가지입니다. 새로 만들거나 읽기만 하는 작업부터 시작하고, 중요한 폴더는 미리 복사본을 하나 떠두고, 에…
- `17957708061196829` (06:55:44 UTC / **15:55 KST**) — https://www.threads.com/@ethan13917/post/Dcp6uEUEw-E
  > 첫날 해볼 안전한 작업 세 가지입니다. 원본을 건드리지 않아 부담이 없습니다. 1. 폴더 현황을 표로만 보여달라고 하기(읽기만…
- `18388729084204969` (06:54:35 UTC / **15:54 KST**) — https://www.threads.com/@ethan13917/post/Dcp6lg3E5LU
  > 같은 일도 문장에 따라 결과가 갈립니다. '파일 좀 정리해줘'는 나쁜 지시입니다. 무엇을, 어느 폴더를, 어떤 기준으로 정리할…
- `17878552104652612` (06:53:18 UTC / **15:53 KST**) — https://www.threads.com/@ethan13917/post/Dcp6b-8E2U9
  > 실행했으면 첫 명령은 '파악부터'가 안전합니다. 무엇을 바꾸기 전에 이 폴더에 뭐가 있는지부터 보게 시키는 것입니다. 아래 문…
- `17879295261527391` (06:52:07 UTC / **15:52 KST**) — Codex 설치 (ChatGPT 구독이 있다면 Codex가 편합니다. 맥·리눅스는 이렇게 설치합니다. curl -fsSL https://chat…)
- `17956952580217837` (06:50:57 UTC / **15:50 KST**) — 설치, 터미널 열기 (맥은 스팟라이트, 윈도우는 시작 메뉴 PowerShell)
- `18019575365879459` (06:49:45 UTC / **15:49 KST**) — 이번 편 요약 (1. 앱은 답을 알려주고, 터미널 에이전트는 결과물을 만듭니다. 2. 설치는 명령어 한 줄…)

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN posts (`username: ethan13917`) — 'agent' 14 rows, 'Claude Code' 5 rows, 'Codex' 8 rows, all his own series/managed-agents content. No fresh external discovery.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, 92 stars, len 2839. Byte-identical to the 08-30 08:00 cache. Top still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `virattt/ai-hedge-fund`, plus carry `nathankim0/clean-architecture-skills` (Claude Code skill), `lidge-jun/opencodex` (Codex/Claude Code provider proxy), `jung-wan-kim/teamclaude` (multi-account Claude proxy). No new starred repo.

## 3) Google My Activity (CDP) — 변화 없음
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5301. Byte-identical to the 08-30 08:00 cache (stale tab, not reloaded). Top rows unchanged: 오픈AI (오후 6:48), Outlook (오후 12:17/12:16), CUDA·날씨 (어제 10:38), Hermes/한컴독스 (어제). No new search captured since.

## 4) YouTube subscriptions (CDP) — unavailable (access fact)
`https://www.youtube.com/feed/subscriptions` came up as a blank nav-only shell (`구독 - YouTube`, innerText len 17). Not negative evidence — record as unavailable access fact, same as recent passes.

## Filtering notes
- Threads own-surfaces genuinely moved (CK posted part 2 of his terminal-agents series 15:48–15:58 KST) — but it is CK's own single-surface info-post series restating an already-durable axis → own-posts-only-reinforcement, not a new durable branch.
- keyword_search hits are all CK's own posts → reinforcement, not new discovery.
- GitHub stars / Google My Activity byte-identical; YouTube blank shell.

## Why this raw exists
Evidence store for the 2026-08-30 19:00 social pass. Reinforcement-only: CK published part 2 (설치편) of his planned terminal-agents info-post series (own single-surface content on an already-durable axis) plus carry rows; every CDP surface unchanged or unavailable. Route `raw_only`; no durable page or index change.
