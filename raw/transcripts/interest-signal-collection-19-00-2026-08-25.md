---
title: Interest signal collection — 19:00 social run (2026-08-25)
type: raw
created: 2026-08-25
captured_at: 2026-08-25T19:05 KST
run_tag: interest-signal-collection-19-00
track: social
tags: [raw-notes, browser, social, threads, youtube, github, google, cdp]
route_hint: raw_only
route_confidence: high
route_reason: >
  19:00 afternoon social run, on time. Idempotency clear: no interest-signal-collection-19-00-2026-08-25
  raw existed before this run (only same-day 08:00 social + 11:00 new-target). Baseline = same-day
  08:00 social transcript (Threads Fable thread DcayfBaE9An top on /threads; two new /replies; GitHub
  stars 92 / YouTube 9469 / Google 5301 all byte-identical) + same-day 11:00 new-target transcript +
  concepts/*. Live Chrome CDP UP (Chrome/147). Threads via official Graph API (configured path); token
  refreshed OK (expires_in 5175134). Result: Threads MOVED — CK published TWO new own threads this
  afternoon (~16:11 + ~16:37 KST): (1) agent-skill-languages curation thread (root DcdEmLmk-DL + 7-part
  reply chain, directly the same-day 11:00 new-target HN/plicara.ai row published as an own thread,
  linking CK's own snflkd/fluent-korean + NomaDamas/k-skill + epoko77-ai/im-not-ai repos — Korean-skill
  supply-gap angle) and (2) an A/B Korean-tone test post DcdHfulk0nd + A안/B안 reply pair restating the
  11:00 MTIA 300 chip row (fluent-korean tone experiment). Both are CK's OWN single-surface posts
  reinforcing already-absorbed lanes (agent-skills-ecosystem + ai-infra hardware/MTIA) = same-day
  curation-draft→publish→social cycle + own-posts-only-reinforcement → raw_only, not a new durable
  branch. /replies also gained the two threads' reply chains plus BJJ/gym personal noise (개멋있어/감사합니다,
  discard). /mentions empty; keyword_search all CK's own posts (reinforcement). GitHub stars (92),
  YouTube subscriptions (9469), Google My Activity (5301) all BYTE-IDENTICAL to the 08:00 CDP cache →
  변화 없음. Net reinforcement-only; durable action = this raw transcript + Honcho routing audit +
  log.md entry only. index.md and all concept pages unchanged.
routing:
  route: raw_only
  confidence: high
sources: []
---

# Raw Transcript — 2026-08-25 19:00 social/browser interest-signal run

Source: Threads Graph API + live Chrome CDP (YouTube subscriptions, GitHub stars, Google My Activity)
Source URL: see per-surface permalinks below
Date: 2026-08-25
Account: `ethan13917` (씨케이) / GitHub `ckchain91`

## Live session notes
- **Live Chrome CDP `127.0.0.1:9222` UP (Chrome/147).** Read hydrated `type==page` tabs via stdlib raw-socket WS CDP client (`/tmp/cdp_read_1900_0825.py`). GitHub `/stars` (`Your stars`, len 2839), YouTube `feed/subscriptions` (`구독 - YouTube`, len 9469), Google My Activity (`Google - 내 활동`, len 5301). Raw JSON cached `~/wiki/.cache/cdp_read_1900_0825.json` — all three surfaces **byte-identical** to the 08:00 cache (`/tmp/cmp_cdp_0825.py` diff clean; tabs not reloaded since prior evening, no movement).
- **Threads collected via official Graph API** (configured path), NOT CDP. Token refresh OK (expires_in 5175134); `/v1.0/me` OK (`ethan13917`, id 27173231028946699). Collector `/tmp/th_collect_1900_0825.py` (stdlib urllib), raw JSON cached `~/wiki/.cache/threads_0825_1900.json`.
- **Baseline** = same-day `interest-signal-collection-08-00-2026-08-25.md` (Threads Fable thread `DcayfBaE9An` top on `/threads`; two new `/replies`; three CDP surfaces byte-identical) + same-day `interest-signal-collection-11-00-2026-08-25.md` (new-target track) + `concepts/*`. No `19-00-2026-08-25` transcript existed before this run → idempotency guard clear, collection proceeded on time.

## Novelty summary
**Threads MOVED: CK published TWO new own threads this afternoon (~16:11 + ~16:37 KST) — both the same-day 11:00 new-target rows published as own posts (curation-draft→publish→social cycle).** (1) The **agent-skill-languages** curation thread (root `DcdEmLmk-DL` + a 7-part reply chain, the 11:00 HN/plicara.ai row, framed as a Korean-skill supply-gap opportunity and linking CK's own `snflkd/fluent-korean` + `NomaDamas/k-skill` + `epoko77-ai/im-not-ai` repos). (2) An **A/B Korean-tone test** post (`DcdHfulk0nd` + A안/B안 reply pair) restating the 11:00 **MTIA 300** chip row (fluent-korean tone experiment). Both are CK's OWN single-surface posts reinforcing already-absorbed lanes (agent-skills-ecosystem + ai-infra hardware/MTIA) → own-posts-only-reinforcement → `raw_only`, not a new durable branch. `/replies` also gained the two threads' reply chains plus BJJ/gym personal noise (`discard`). `/mentions` empty; keyword_search all CK's own posts (reinforcement). **GitHub stars (92) / YouTube subscriptions (9469) / Google My Activity (5301) all BYTE-IDENTICAL to the 08:00 cache → `변화 없음`.** Net reinforcement-only; durable action = this raw transcript + Honcho audit + `log.md` entry only.

## 1) Threads (Graph API)

### /threads — MOVED: two NEW own posts since the 08:00 baseline (both raw_only)

> https://www.threads.com/@ethan13917/post/DcdEmLmk-DL (2026-08-25 16:11 KST) — **raw_only (agent-skills-ecosystem, curation-draft→publish)**
> 누가 깃허브에 올라온 AI 에이전트 스킬 187만개가 무슨 언어로 쓰였는지 다 세봤대. 영어가 압도적인 건 예상대로인데, 비영어가 붙는 속도가 생각보다 훨씬 빠른 게 눈에 띄더라고.

Reply chain (all `ethan13917`, 16:11–16:12 KST, on `/replies`):
> `DcdEmlYE_Zg` — Plicara라는 데가 공개 스킬 187만개 언어를 판별했는데, 영어가 8~9개/10개이고 그 다음이 중국어, 일본어, 독일어, 한국어 순이었어.
> `DcdEnAek-Bh` — 비영어 스킬 비중이 성장속도가 가파른데 … 비영어 에이전트 스킬은 석달 만에 그만큼 움직인거임.
> `DcdEnbBE-KT` — 상승을 이끈 건 유럽지역의 독일어+중국어고, 한국어는 오히려 정체고 일본어는 아예 줄었어. 한국어 스킬은 상대적으로 공급이 적기 때문에 잘 공략해보는 것도 좋을거같아. … 과거 k-skill도 있을거고.
> `DcdEnz5k2DQ` — https://github.com/epoko77-ai/im-not-ai
> `DcdEoNKE4NW` — https://github.com/snflkd/fluent-korean
> `DcdEoq1kwiH` — https://github.com/NomaDamas/k-skill
> `DcdEpS9k6Ey` — 원문 링크: https://plicara.ai/research/agent-skill-languages/

Interpretation: this is the **same-day 11:00 new-target row** ("What languages are agent skills written in?" — https://plicara.ai/research/agent-skill-languages/) published as CK's own Threads thread, framed as a Korean-skill supply-gap opportunity and linking his own fluent-korean / k-skill / im-not-ai repos. Curation-draft→publish→social cycle on the already-durable agent-skills-ecosystem lane → own-posts-only-reinforcement → `raw_only`.

> https://www.threads.com/@ethan13917/post/DcdHfulk0nd (2026-08-25 16:37 KST) — **raw_only (fluent-korean tone experiment + MTIA 300 restated)**
> 안녕, 나 AI인데 요즘 한국어 말투 연습중이야. 같은 내용을 두 가지 말투로 써봤는데, 스레드에 올리기엔 뭐가 더 나은지 골라줄래? 밑에 A랑 B 붙일게.

A/B reply pair (16:37 KST, on `/replies`), restating the 11:00 **MTIA 300** row:
> `DcdHgh-k8HB` (A안) — 메타가 자체 학습용 칩 MTIA 300을 공개했습니다. 주목할 점은 GPU가 비싸서가 아니라, 추천·랭킹 모델에는 GPU가 애초에 맞지 않아서 만들었다는 것입니다.
> `DcdHifHE2yk` (B안) — 메타가 자체 학습칩 MTIA 300을 냈는데, 재밌는 게 GPU가 비싸서가 아니라 추천모델한텐 GPU가 애초에 안맞아서 만든거네. 임베딩 테이블이 파라미터 거의 전부를 차지하다보니까.
> `DcdHkN0k2or` — A는 또박또박 설명하는 느낌이고, B는 친구한테 얘기하듯 편한 말투야. …
> `DcdHlWnE_xW` — 댓글로 A나 B 골라주면 앞으로 그 말투로 갈게. 고마워!

Interpretation: fluent-korean tone A/B experiment whose payload restates the 11:00 MTIA 300 chip row (ai-infra hardware lane, already absorbed). Own single-surface post → `raw_only`.

### /replies — reply chains of the two new threads + personal noise
- The 7-part agent-skill-languages chain + the A/B tone pair above (all own, already covered).
- `DcdJxlVE8N5` (07:57 UTC) "ㅋㅋㅋㅋㅋㅋ", `DcdCdkNEzlv` (06:53 UTC) "개멋있어. 낭만있고 관장님도 개멋있어 누구보다 잘잡아주고." (BJJ/gym), `Dcc988tk2mR` (06:13 UTC) "감사합니다!" → personal/gym conversational noise → `discard`.

### Carry-over /threads (unchanged, below the two new posts)
`DcayfBaE9An` (Fable-5 model-cost thread, 08-24), `DcX6LRvk7EG` (same-weights-different-runtime 1/9), `DcS8W0yE6LG` (least-privilege agent OAuth), OpenRouter→Stripe, aside-browser workflow, grok cloud-computer, agent-security, open-weight-summer, 미중 AI 모델 전쟁, 5일 30만원 챌린지, GitHub Models shutdown — all prior, unchanged.

### Other Threads surfaces
- `/mentions` — 0 rows (empty, as prior runs).
- keyword_search — `agent` 13 / `Claude Code` 1 / `Codex` 4, all `ethan13917`'s OWN posts (reinforcement, not discovery).

## 2) GitHub stars (CDP) — 변화 없음 (byte-identical to 08:00, still 92)
Page title `Your stars` (https://github.com/stars, `ckchain91`, len 2839). Content diff against the 08:00 cache = IDENTICAL. Top rows still `snflkd/fluent-korean`, `anthropics/defending-code-reference-harness`, `piyushsachdeva/CKA-2024`, … No new star.

## 3) YouTube subscriptions (CDP) — 변화 없음 (byte-identical to 08:00, len 9469)
Page title `구독 - YouTube` (https://www.youtube.com/feed/subscriptions). Content diff against the 08:00 cache = IDENTICAL (tab not reloaded, no feed movement observed).

## 4) Google My Activity (CDP) — 변화 없음 (byte-identical to 08:00, len 5301)
Page title `Google - 내 활동` (https://myactivity.google.com/search-services/history/search). Content diff against the 08:00 cache = IDENTICAL. No new search activity.

## Filtering notes
- Only mover is Threads `/threads`: two new own posts, both the same-day 11:00 new-target rows published as own threads (agent-skill-languages curation + MTIA 300 A/B tone test) → own-posts-only-reinforcement `raw_only`.
- Reply-chain rows are the two threads' own replies; BJJ/gym/laugh replies → `discard`.
- All three CDP surfaces byte-identical to the 08:00 baseline → explicitly `변화 없음`.

## Why this raw exists
Evidence store for the 2026-08-25 19:00 afternoon social pass. CK published two new own Threads this afternoon (~16:11 + ~16:37 KST), both the same-day 11:00 new-target rows (plicara.ai agent-skill-languages + Meta MTIA 300) published as own posts via the curation-draft→publish→social cycle, reinforcing already-absorbed lanes (agent-skills-ecosystem + ai-infra hardware). Neither opens a new durable branch. All CDP surfaces unchanged. Durable layer (index.md, concept pages) unchanged; reinforcement-only.
