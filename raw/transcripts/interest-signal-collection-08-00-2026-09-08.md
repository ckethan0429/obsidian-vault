---
title: Interest signal collection — 08:00 social run (2026-09-08)
type: raw
created: 2026-09-08
captured_at: 2026-09-08T08:03 KST
run_tag: interest-signal-collection-08-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  08:00 morning social run, on time (~08:03 KST). Idempotency clear: no
  interest-signal-collection-08-00-2026-09-08 raw existed before this run. Baseline = most-recent
  SUCCESSFULLY-completed social transcript interest-signal-collection-19-00-2026-09-07.md (+ 22:00
  new-target + 23:00 refinement same day). First SUCCESSFUL 08:00 social run in days (09-05/06/07
  08:00 jobs all FAILED). Live Chrome CDP UP (Chrome/147.0.7727.55). Threads via official Graph API
  (configured path); token refresh OK (expires_in 5137180), /v1.0/me OK (ethan13917, id
  27173231028946699). GitHub stars + Google My Activity + YouTube subs read via stdlib raw-socket WS
  CDP client — this pass RELOADED Google + YouTube tabs (prior runs saw stale byte-identical tabs).
  RESULT: REINFORCEMENT-ONLY / no new durable signal. Threads /threads AND /replies both
  BYTE-IDENTICAL to the 09-07 baseline (top /threads still 18437084800131008 마케터 카피 root 09-03;
  top /replies still 아니 왜이렇게 오늘 좋은 글이 뜨지 Dc6HCTvk-Su 09-05 — CK made no new posts/replies
  since the baseline). /mentions empty; keyword_search agent/Claude Code/Codex all top-hit CK's OWN
  posts (reinforcement). GitHub stars 93, top unchanged → 변화 없음. Google My Activity RELOADED
  (len 5628, was stale len 5301) surfacing genuinely-new 09-07 own-research searches (gpt sdk /
  codex sdk / chatgpt docs / OpenAI Plugins / Codex SDK docs) — single-surface own research
  reinforcing the existing terminal-agent/coding-tooling lane → raw_only. YouTube subs RELOADED
  (len 9367, was stale 8812) surfacing GPT-6 Astra hands-on rows (직장인 대량 실직 GPT-6 Astra 체험 /
  Julian Goldie "Connect GPT-6 Astra to Hermes Agent" / QJC 지피티6 Astra vs 클로드 페이블 5.1) —
  reinforce the already-durable (09-04) GPT-6 Astra axis → raw_only. Durable action = this raw
  transcript + Honcho routing audit + log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-09-08 08:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (GitHub stars, Google My Activity, YouTube subscriptions)
Source URL: see per-surface permalinks below
Date: 2026-09-08
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147.0.7727.55).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_0800_0908.py`). This pass **RELOADED** the Google My Activity + YouTube subscriptions tabs (prior 19:00 run had seen stale byte-identical tabs) → fresh content. GitHub stars read from a hydrated tab. Raw JSON cached `~/wiki/.cache/cdp_read_0800_0908.json` + `~/wiki/.cache/cdp_ghstars_0800_0908.json`.
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5137180); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_0800_0908.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0908_0800.json`.
- **Baseline** = most-recent SUCCESSFULLY-completed social transcript `interest-signal-collection-19-00-2026-09-07.md` (+ 22:00 new-target + 23:00 refinement same day). This is the **first successful 08:00 social run in days** (the 09-05/06/07 08:00 jobs all FAILED). No `interest-signal-collection-08-00-2026-09-08` raw existed before this run → idempotency guard clear; collection proceeds.

## Novelty summary
**Reinforcement-only / no new durable signal.** Threads `/threads` AND `/replies` are both byte-identical to the 09-07 baseline (both-static: CK posted nothing new). `/mentions` empty; keyword_search = CK's own posts. GitHub stars 93, top unchanged → `변화 없음`. Google My Activity + YouTube subs **reloaded fresh** and surfaced genuinely-new rows — but all reinforce existing durable lanes (Google = CK's own Codex/GPT SDK research; YouTube = GPT-6 Astra hands-on content, already absorbed 09-04). Durable action = raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API) — both-static → 변화 없음 / reinforcement
### /threads — BYTE-IDENTICAL to the 09-07 baseline
- Top row still **`18437084800131008`** (2026-09-03 10:07 UTC / 09-03 19:07 KST) — https://www.threads.com/@ethan13917/post/Dc0jyutEyVE — 마케터 카피/채널 자동화 series root. No new own root posted since the baseline.
- Carry below (all unchanged): `18076240841372243` (영업 목록 자동화, DcxJ4bokzrY); `18186615706405937` (opinion, DcunhiPE1EH); 08-31 사무직 파일 PART3 `18120302675316701` (Dcs-73nE2Iq); 08-30 PART2 `18117970942932395` (Dcp54Vjk2L7); 08-29 series intro `18104744447622673` (DcoFQtPE6iI); agent-vs-chatbot `17902817622557812` (Dcn-LjGE5Wa); 조회수 실험 rows (DcnVlR9Exxe / DcnTKuXk4XA / DckugrYkwd3); two 08-29 REPOST_FACADE (DcnTHbJExNu, DcmwNuJkws9).

### /replies — BYTE-IDENTICAL to the 09-07 baseline
- Top row still **`18089642990663815`** (2026-09-05 13:51 UTC) — https://www.threads.com/@ethan13917/post/Dc6HCTvk-Su — `"아니 왜이렇게 오늘 좋은 글이 뜨지"`. No new reply since the baseline.
- Same carry below: `ㅋㅋㅋㅋㅋ용형???` (Dc40snPk_sp), `과천에 있는 회사 ㅋㅋㅋㅋ` (Dc3hpj9E6kg), `헉스` IMAGE (Dc3bpyBkwPG), `감사함당` (Dc2lQ0pE8Af), the 09-03 마케터 thread reply chain (Dc0knOCk5az…Dc0j7cHkzJt), `탈모 정복 가즈아` (DczroW4E2ee).

### /mentions — empty
No mentions.

### keyword_search 'agent' / 'Claude Code' / 'Codex' — reinforcement (own posts)
All three queries top-hit CK's OWN older posts (`username: ethan13917`): managed-agents 원문 (Dcn_QHWE3Ws), agent-skill-languages (DcdEpS9k6Ey), Snowflake Copilot 해킹 (DcLEx6iE959 / DcLEvAFk6xt), agent-security 6/6 (Dbkp6TPk-Pt), 마케터/영업 automation roots, Claude Code/Codex 공식 설치 문서 (Dcp6_EBk6Sq / Dcp6K3iE9CK / Dcp6TdfE-8y / Dcp54Vjk2L7). No fresh external discovery → reinforcement.

## 2) GitHub stars (CDP) — 변화 없음
Page title `Your stars`, https://github.com/stars, **93 stars** (same as 09-04/09-07 baseline). Top row (Sort: Recently starred) still `miuuyy/codex-chatgpt-web` (TypeScript, now 5,489★ — repo's own popularity rising, not a new CK star), then `snflkd/fluent-korean` (1,180★), `anthropics/defending-code-reference-harness`. No new star since the baseline.

## 3) Google My Activity (CDP, RELOADED) — genuinely-new own-research searches → raw_only reinforcement
`Google 검색 서비스 기록`, https://myactivity.google.com/search-services/history/search, len 5628 (was stale len 5301 in the 09-07 run). Newly visible **어제(09-07)** rows (all CK's own research):
- `chatgpt docs` 검색 (오전 10:05) → `ChatGPT | ChatGPT Learn` 방문
- `codex sdk` 검색 (오전 10:06) → `Codex SDK | ChatGPT Learn` 방문
- `gpt sdk` 검색 (오전 10:06) → `Plugins | OpenAI Developers` 방문
- an OAuth challenge URL fragment `...ns%3Aclaude_code+user%3Amcp_servers+user%3Afile_upload&code_challenge=...` (오후 4:04) — Claude Code / MCP servers / file-upload scopes
- **09-05:** `toss` 알림 (오후 3:48)
- **09-04:** `보안적합성검증` 검색 → `개요 및 체계 < 보안적합성 검증 < 국가사이버안보센터` 방문 (오후 4:53)
- Interpretation: single-surface CK own-research into OpenAI Codex SDK / GPT SDK / ChatGPT docs / plugins + Claude Code MCP scopes — reinforces the existing durable **terminal-agent / coding-tooling** lane (Claude Code / Codex series). Not a new durable branch → `raw_only`.

## 4) YouTube subscriptions (CDP, RELOADED) — GPT-6 Astra hands-on rows → raw_only reinforcement
Hydrated (`구독 - YouTube`, len 9367, was stale 8812). Newly visible AI/agent rows:
- Shorts `직장인 대량 실직? GPT-6 Astra 24시간 체험기 #ai #fable #gpt6` (조회수 31만회)
- Julian Goldie SEO `NEW AntiGravity Integration is ABSURD! 🤯` (2분 전) + `GPT 6 Astra: How to Build ANYTHING!` (3.1천회) + **`How to Connect GPT-6 Astra to Hermes Agent`** (200회, 2시간 전)
- QJC 퀀텀점프클럽 `지피티6 Astra와 클로드 페이블 5.1, 완성 속도가 2배 차이 났습니다` (32분 전)
- 코딩애플 `크롬이 몰래 자동으로 설치하는 2GB짜리 파일` (5일 전, dev-general)
- 흑우스토리 `유튜브 조회수, 갑자기 대놓고 뻥튀기 된 이유` (4.5만회, creator-economy — carry)
- Interpretation: GPT-6 Astra hands-on/체험기 content — reinforces the already-durable (absorbed 09-04) **GPT-6 Astra** axis. Julian Goldie "Connect GPT-6 Astra to Hermes Agent" is mildly notable (Hermes Agent naming) but single-surface SEO-channel content → `raw_only`.
- Off-axis noise kept in raw, excluded from report: 부산영어방송 라이브, 박성태의 뉴스쇼/뉴스연구소 politics 라이브, 마인드씨피알 브라질 여사친, 김한용 MOCAR/모트라인 자동차, 달수네라이브/6시내축구, 매경 월가월부/리스펙 투자플랜, 김단테 솔로지옥, 파이어 새끼부자 shorts.

## Filtering notes
- Threads both-static (own `/threads` + `/replies` tops byte-identical to the 09-07 baseline) → genuine no-new-Threads-signal.
- The only genuinely-new evidence this pass is from the RELOADED Google + YouTube tabs, and both reinforce existing durable lanes (coding-agent tooling / GPT-6 Astra) → `raw_only`, no new concept page.
- GitHub stars unchanged; keyword_search = own posts.
- Sports/coin/politics/자동차 YouTube rows kept in raw but excluded from the report.

## Why this raw exists
Evidence store for the 2026-09-08 08:00 social pass (first successful 08:00 social run in days). Reinforcement-only: Threads both-static, GitHub unchanged, and the fresh Google/YouTube rows reinforce already-durable lanes (CK's Codex/GPT SDK research; GPT-6 Astra hands-on). Route `raw_only`; no durable page or index change.
