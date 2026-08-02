---
title: Interest signal collection — 19:00 social run (2026-08-02)
created: 2026-08-02
type: raw-transcript
captured_at: 2026-08-02T23:52:00+09:00
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, threads, social, api, reinforcement]
route_hint: raw_only
route_confidence: high
route_reason: >
  Afternoon (19:00) social run, executed very late (wall clock 2026-08-02 23:52 KST) because
  the collection pipeline had been failing since mid-July — the two injected preceding jobs
  (07-15 19:00 discord, 07-16 08:00 discord) both FAILED and the most recent successful raw
  transcript is 2026-07-15 11:00. No 2026-08-02 raw exists, so the idempotency guard passes;
  this is a legitimately delayed run, not a duplicate. Live Chrome CDP is DOWN (no 9222
  listener, no chrome process) so YouTube / GitHub Stars / Google My Activity / ChatGPT /
  Claude browser-authenticated surfaces are UNAVAILABLE (access facts, not `변화 없음`).
  Threads collected via the official Graph API (configured path); long-lived token refreshed
  OK, `/me` confirmed `ethan13917`. Because the baseline is the 07-15 08:00 social run, many
  Threads rows are chronologically "new" since then — but every on-axis one is CK's OWN post
  or reply reinforcing an existing durable axis (harness/tooling engineering, managed agents,
  investing-automation), and the rest is off-axis personal/commercial/repost rotation. No new
  durable branch → reinforcement-only. Durable action = this raw transcript + Honcho/log audit
  only; index.md and all non-Honcho concept pages unchanged.
routing:
  - {surface: threads-api-threads, route: raw_only, note: "Own /threads gained genuinely-new dated rows since the 07-15 baseline, all single-surface: 07-31 삼성 Galaxy Z Fold/Flip 사전구매 홍보 (Dbc78KPk5Ve, personal/commercial), empty REPOST_FACADEs 07-31/07-28/07-27/07-21/07-20/07-19; on-axis OWN posts 07-22 라오어무한매수법+AI-agent-투자자동화 (DbFW_MMk2OM), 07-22 AI시대 오픈웨이트/효율적시장 (DbFCPitE5gw), 07-21 국산 하네스 옹호/컨텍스트·하네스 엔지니어링 (DbC4jRwk5GN). All reinforce existing managed-agents / ai-infra / investing-automation lanes."}
  - {surface: threads-api-replies, route: raw_only, note: "Own /replies newest 08-02 07:19 을지로 (Dbh3LZykysz, personal). On-axis: 07-20 '순정 plan + 깃 워크트리 + 구간별 테스트 툴만있으면 충분' (DbAzEYDkw4v, coding-agent tooling minimalism) — reinforcement. Rest personal/civic/entertainment noise."}
  - {surface: threads-api-repost-facade-recovery, route: raw_only, note: "Best-effort public-HTML og recovery on the two newest empty facades: 07-28 DbUlDcSk_tL → reposted @unclejobs.ai ('AI 시대, 돈이 되는 정보 전달'), 07-27 DbT86Mkk5pH → reposted @choi.openai. Both og:description JS-rendered/empty (text unrecoverable without CDP). AI-adjacent handles but single-surface off-axis reposts."}
  - {surface: threads-api-keyword-search, route: raw_only, note: "keyword_search agent/Codex/Claude Code returned ONLY CK's own April–May Managed Agents thread + 07-21 harness post + 07-22 investing post + 07-10 'codex는 없나요?' reply — reinforcement of managed-agents-practical-summary axis, not fresh external discovery. Hermes = 0 results."}
  - {surface: threads-api-mentions, route: discard, note: "/mentions empty dataset."}
  - {surface: youtube, route: raw_only, note: "UNAVAILABLE — CDP down (no 9222 listener, no chrome). Access fact, not 변화 없음."}
  - {surface: github, route: raw_only, note: "UNAVAILABLE — CDP down. Stars/trending not collected this run (new-target track owns trending anyway). Access fact."}
  - {surface: google, route: raw_only, note: "UNAVAILABLE — CDP down. My Activity not readable. Access fact."}
  - {surface: chatgpt-claude-x, route: raw_only, note: "UNAVAILABLE — CDP down. Access facts."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-08-00-2026-07-15.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-15.md
  - concepts/managed-agents-practical-summary.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 19:00 Social Collection (2026-08-02, delayed)

Source: Threads official Graph API (`graph.threads.net/v1.0`). Browser/CDP surfaces (YouTube, GitHub, Google, ChatGPT, Claude) unavailable — CDP down.
Date: 2026-08-02 (captured 23:52 KST; scheduled slot 19:00)
Account: `ethan13917` (씨케이)

## Live session notes
- **Pipeline gap:** the collection jobs have been failing since mid-July. The two injected preceding cron outputs (`gogunbuntu-collect-1900-discord` 2026-07-15 19:00, `gogunbuntu-collect-0800-discord` 2026-07-16 08:00) both report **FAILED**, and the newest successful raw transcript on disk is `interest-signal-collection-11-00-2026-07-15.md`. No 2026-08-02 raw exists → idempotency clear → collect.
- **CDP DOWN:** `curl http://127.0.0.1:9222/json/version` returned empty, no `9222` listener, no `chrome` process. All browser-authenticated surfaces unavailable → recorded as access facts, not negative evidence.
- **Threads via official API** (configured path). Standalone stdlib collector `/tmp/th_collect_0802_1900.py` (urllib, no `requests`, cron-safe — no `-c`/heredoc/pipe). Long-lived token refreshed OK (`refresh_access_token`, expires_in ~5.18M s); `/me` confirmed `ethan13917` / 씨케이. Raw JSON cached to `~/wiki/.cache/threads-2026-08-02-1900/` (disposable).
- Baseline = the last completed social run `interest-signal-collection-08-00-2026-07-15.md` (top `/threads` = `DayEcnUk9ZZ` 07-14). Rows newer than that are chronologically new, judged for durability below.

## Novelty summary
**Reinforcement-only at the durable layer.** Threads API surfaced genuinely-new dated rows since 07-15, but every on-axis one is CK's OWN post/reply reinforcing an existing durable lane (harness/tooling engineering, managed agents, investing-automation). The rest is off-axis personal/commercial/repost rotation. No cross-surface convergence, no new branch. All other surfaces unavailable (CDP down).

## 1) Threads — own `/threads` (API) — new dated rows since baseline
Source URL: `https://graph.threads.net/v1.0/27173231028946699/threads`

On-axis OWN posts (reinforcement):
> `[2026-07-21 06:34 UTC]` 국산 하네스 까지마라. … 초기에 프롬프팅, 컨텍스트 엔지니어링, 하네스 엔지니어링 … codex cc 를 더 잘쓰기 위해서 나온 툴들 … 덕분에 네이티브에 upstreamed되어 반영 …
- https://www.threads.com/@ethan13917/post/DbC4jRwk5GN  (harness/tooling engineering — reinforces managed-agents axis)

> `[2026-07-22 05:39 UTC]` 라오어 무한매수법 … 세븐 스플릿 … 일관성이 떨어지는 부분을 ai agent들이 해결할수있다 … 간단한 툴콜링 … 투자원칙을 스킬로 구성하고 툴을 연동해서 매일 메신저로 상황 보고 …
- https://www.threads.com/@ethan13917/post/DbFW_MMk2OM  (investing-automation via agents/skills/tool-calling)

> `[2026-07-22 02:38 UTC]` ai시대가 오니 … 효율적인 시장(나스닥같은)도 혼란 … 중국 ai가 오픈웨이트를 채택한 이유중의 하나가 그만큼 돌릴 인프라 여력이 없어서 …
- https://www.threads.com/@ethan13917/post/DbFCPitE5gw  (AI-market / open-weight infra economics)

Off-axis / commercial OWN post:
> `[2026-07-31 09:24 UTC]` 대한민국 기술산업의 자존심 … 삼성 … 갤럭시 z fold / flip 사전구매 혜택 … (IMAGE, personal/commercial)
- https://www.threads.com/@ethan13917/post/Dbc78KPk5Ve

Empty REPOST_FACADE rows (no text; single-surface repost evidence):
- 07-31 https://www.threads.com/@ethan13917/post/Dbc3mYgE4qT
- 07-28 https://www.threads.com/@ethan13917/post/DbUlDcSk_tL → reposts `@unclejobs.ai` ("AI 시대, 돈이 되는 정보 전달") [og:title recovered; og:description empty]
- 07-27 https://www.threads.com/@ethan13917/post/DbT86Mkk5pH → reposts `@choi.openai` [og:title recovered; og:description empty]
- 07-21 https://www.threads.com/@ethan13917/post/DbDeGBYkw4I
- 07-20 https://www.threads.com/@ethan13917/post/DbBrFcdk0vM
- 07-19 https://www.threads.com/@ethan13917/post/Da_kXpREw57

## 2) Threads — own `/replies` (API)
Source URL: `https://graph.threads.net/v1.0/27173231028946699/replies`
- Newest: `[2026-08-02 07:19 UTC]` "담부터는 당당하게 을지로도 가보시죠!ㅋㅋ" — personal — https://www.threads.com/@ethan13917/post/Dbh3LZykysz
- On-axis: `[2026-07-20 11:08 UTC]` "솔직히 순정 plan + 깃 워크트리 + 구간별 테스트 툴만있으면 충분하다봅니다" — coding-agent tooling minimalism (reinforcement) — https://www.threads.com/@ethan13917/post/DbAzEYDkw4v
- `[2026-07-18 07:31 UTC]` "Ai 아님?" — https://www.threads.com/@ethan13917/post/Da7QneZE1_3
- Remainder: 화장품/육아/파리지앵/coupang-affiliate/soccer/civic personal replies — noise.

## 3) Threads — keyword_search (API)
- `agent` (9), `Codex` (4), `Claude Code` (1), `Hermes` (0). **Every hit is CK's own post**: the April–May Managed Agents thread (session/harness/sandbox/vault runtime series), the 07-21 harness post, the 07-22 investing post, and the 07-10 "codex는 없나요?" reply. Reinforcement of the `managed-agents-practical-summary` axis, not fresh external discovery.
- `/mentions`: empty dataset → discard.

## 4) Unavailable surfaces (CDP down — access facts, not 변화 없음)
- **YouTube** (subscriptions / liked / Watch Later): unavailable — no live Chrome/CDP.
- **GitHub** (stars): unavailable — no CDP.
- **Google** (My Activity / search history): unavailable — no CDP.
- **ChatGPT / Claude / X**: unavailable — no CDP.

## Filtering notes
- Reported on-axis only; excluded 화장품/육아/coupang/soccer/civic personal Threads noise from the summary (kept above as raw evidence).
- REPOST_FACADE og:description unrecoverable without CDP; recovered author handles preserved as the only grounded content.

## Why this raw exists
Evidence store for the 2026-08-02 delayed 19:00 social pass. Threads API was the only grounded surface (CDP down). All genuinely-new on-axis rows are CK's own posts/replies reinforcing existing durable lanes → reinforcement-only. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all non-Honcho concept pages left unchanged.
