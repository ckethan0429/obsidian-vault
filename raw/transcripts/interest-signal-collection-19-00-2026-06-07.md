---
title: Raw Transcript — Interest Signal Collection 19:00 2026-06-07
created: 2026-06-07
captured_at: 2026-06-07T19:00:23+09:00
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
run_tag: interest-signal-collection-19-00
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, civic-signal, ai-agents, developer-workflow]
route_hint: raw_only
route_confidence: 0.76
route_reason: Afternoon CDP/API pass found only rotated or repeated evidence after comparison with the 2026-06-07 08:00 social run, 11:00 new-target run, and 2026-06-06 19:00/23:00 baselines. Threads added two API-visible repost facades that resolve to civic/political posts; YouTube liked added political/lifestyle top rows while Watch Later repeated prior AI rows; ChatGPT/Claude recents shifted within existing Virton/career/AI-learning lanes. No new durable concept-page append was justified.
routing:
  route: raw_only
  confidence: 0.76
  reasons:
    - Compared against same-day 08:00 social/browser raw transcript, same-day 11:00 new-target raw transcript, the 2026-06-06 19:00 social run, recent Honcho/log context, and cached CDP/API evidence before judging novelty.
    - Threads API surfaced two new 2026-06-07 repost facades, but direct CDP recovery showed they are civic/political rows continuing the previous-day and same-day morning political/civic rotation.
    - Threads liked repeated the 2026-06-06 AI/agent rows around Codex role plugins, Hermes skill-bloat, LazyCodex, Meta AI account recovery, Codex Python SDK, context bloat, and AI-native organizations.
    - YouTube Watch Later repeated the 2026-06-06 19:00 AI-agent/MCP/KV-cache/data-center rows; YouTube liked added low-durability politics/sports/music rows above already-known AI rows.
    - GitHub Stars, Google My Activity, Threads activity/replies, and X did not add a new durable signal; ChatGPT/Claude recents are useful side evidence but remain single-surface reinforcement.
  signal_tags: [threads-api, threads-liked, youtube-liked, youtube-watch-later, github-stars, google-activity, chatgpt, claude, raw-only, reinforcement]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/reposts
  - https://www.threads.com/@ethan13917/replies
  - https://graph.threads.net/v1.0/
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/CKAhn7/likes
---
# Raw Transcript — Interest Signal Collection 19:00 2026-06-07

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-07  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `raw/transcripts/interest-signal-collection-19-00-2026-06-07.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface extraction was used and targets were filtered to `type == "page"`.
- Disposable evidence caches were saved under:
  - `wiki/.cache/interest-signals/2026-06-07-1900/cdp_results.json`
  - `wiki/.cache/interest-signals/2026-06-07-1900/threads_api_raw.json`
  - `wiki/.cache/interest-signals/2026-06-07-1900/threads_new_repost_posts.json`
- Threads API token refresh and `/v1.0/me` succeeded; tokens are omitted from this raw note and the credential file remained mode `0600`.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-07.md`, `raw/transcripts/interest-signal-collection-11-00-2026-06-07.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-06.md`, `concepts/honcho.md`, and `log.md` before judging novelty.

## Source availability matrix

| Surface | Status | Notes |
|---|---|---|
| Threads API `/me`, `/threads`, `/replies`, `/mentions`, `keyword_search` | Available | `/me` OK; `/threads` returned 12 rows including two new 2026-06-07 `REPOST_FACADE` rows; `/replies` repeated older rows; `/mentions` returned 0 rows; keyword searches returned older/empty rows. |
| Threads liked via CDP | Available | Best hydrated target length 4265; rows are mostly the 2026-06-06 AI/agent rotation. |
| Threads activity/replies/reposts via CDP | Available / partial | Activity/replies repeated existing own replies and activity; CDP reposts page lagged behind the new API repost facades, so direct post recovery was used for the two new facades. |
| YouTube Watch Later / Liked | Available | Watch Later hydrated with the same AI/MCP/KV-cache/data-center rows as 2026-06-06 19:00; Liked playlist added politics/sports/music rows above repeated AI rows. |
| YouTube subscriptions/downloads | Weak | Subscriptions and downloads showed mostly shell/navigation text. |
| GitHub Stars | Available | `https://github.com/stars`; no material star-list change relative to recent baselines. |
| Google My Activity | Available | Search-history summary repeated today/yesterday rows seen earlier. |
| ChatGPT | Partial | Sidebar/recent-title surface visible; conversation bodies not extracted. |
| Claude | Partial | Recent sidebar visible from `https://claude.ai/new`; conversation bodies not extracted. |
| X likes | Unusable | `https://x.com/CKAhn7/likes` exposed `This account doesn’t exist`; not treated as negative evidence. |

## 1) Threads API — new repost facades recovered via direct CDP

API surface: `https://graph.threads.net/v1.0/...`  
Public permalink URLs are listed per row.

### `/me` and collection status

> `/v1.0/me` returned app-scoped user `ethan13917` / `씨케이`.
> `/threads` returned 12 rows.
> `/replies` returned 12 rows.
> `/mentions` returned 0 rows.
> Keyword searches for `agent`, `Claude Code`, `Codex`, `Hermes`, `MCP`, `GPU`, and `Ceph` returned older/empty rows already represented in prior baselines.

### Newly API-visible repost facades

- API URL/permalink: https://www.threads.com/@ethan13917/post/DZRHPdgE2KE  
  Direct recovered URL: https://www.threads.com/@1215_jw/post/DZP2mCcD4EQ
> 1215_jw
> 19시간
> 조만간 시위진압 한댄다
> 다들 조심해요!
> ido.economy
> 5.5천
> 1천
> 554
> 107

- API URL/permalink: https://www.threads.com/@ethan13917/post/DZRHAb0k_CJ  
  Direct recovered URL: https://www.threads.com/@dongwook0113/post/DZP4SMVmtDU
> dongwook0113
> 19시간
> 20-30 밀어버리자는
> 최욱 ㅋㅋㅋㅋㅋㅋㅋㅋ
> judith.talk
> 2.6천
> 311
> 266
> 127

Routing note: these two rows are newly visible via the 19:00 Threads API snapshot, but they continue the political/civic rotation already captured in the 2026-06-06 19:00 and 2026-06-07 08:00 runs. They remain `raw_only` for the current AI/operator wiki.

## 2) Threads liked — repeated AI / agent / social-feed rows

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Copied excerpts

- URL: https://www.threads.com/@choi.openai/post/DZGeZZ_gXut
> choi.openai
> 4일
> 이제는 챗GPT 말고 Codex 쓰셔야합니다.
> 오픈AI가 Codex를 업무용 AI 에이전트 플랫폼으로 확장하고 있습니다.
> 이번에 공개된 역할별 플러그인은 데이터 분석, 영업, 제품 디자인, 크리에이티브 제작, 투자 분석 등 직무별 업무 흐름을 한 번에 설치할 수 있도록 설계됐는데요.
> 지금까지는 "무엇이든 할 수 있는 범용 AI"를 만드는 경쟁이었다면, 이제는 특정 직무를 얼마나 잘 수행할 수 있는지로 경쟁 축이 이동하고 있습니다.

- URL: https://www.threads.com/@vlab_juhyun/post/DZFD10Uk2Ew
> vlab_juhyun
> AI Native
> 5일
> AI Native 회사를 너무 거창하게 생각하지 않기로 했음

- URL: https://www.threads.com/@happymagon/post/DZFUYbZEpIp
> happymagon
> 크립토활용법
> 4일
> [김프 활용하기] 김치프리미엄 -3.6%대로 역대 최저 기록중
> 김프는 환율과 스테이블코인간의 가격 괴리를 뜻하는 용어로
> 코인에서 탈출하여 주식으로 도달한 유동성은
> 주식 맛을 보면 절대 돌아오지 않음. (코숏주롱)

- URL: https://www.threads.com/@zerohch0/post/DZFN7dwGk3K
> zerohch0
> 4일
> 음성이 타자보다 4배 더 빠르다는 걸 앎？？ 한손에 우산이나 짐 들고있을 때도 음성으로 타이핑하면 엄청 편하고 빠름.
> 근데 아이폰 갤럭시 내장 키보드랑 뭐가 다르냐고？ Ai 탑재이지롱.

- URL: https://www.threads.com/@roach_log/post/DZEFS4FAW7T
> roach_log
> AI Threads
> 5일
> (헤르메스 쓰시면 꼭 읽어보세요)
> 최근 X 에서는 헤르메스 스킬 셋이 너무 장황하다는 말이 나오고 있습니다.
> 헤르메스에는 설치만해도 활성화 되어 있는 스킬이 사실 엄청나게 많습니다.
> “왜 모든 유저가 polymarket, pocketmon, minecraft 스킬을 가져야 하나?“

- URL: https://www.threads.com/@yeon.gyu.kim/post/DZE0cy-Es_4
> yeon.gyu.kim
> LazyCodex
> 5일
> LazyCodex 후기
> “걍 이거 안돼 딸깍 ulw 하니까 다 고쳐놓네요”
> “컴퓨터 유즈 되는게 개사기네요” (지혼자 화면보고 키보드 마우스 조작해서 QA 해서 고치면서 일함)
> “Pro 20 하나 더 결제하고 올게요”

- URL: https://www.threads.com/@choi.openai/post/DZEq0ZBDMBH
> choi.openai
> 5일
> 메타에서 심각한 보안사고 문제가 터졌었습니다.
> 메타가 인스타그램 유저 일부를 대상으로 계정 복구 AI 기능을 A/B 테스트하는 과정에서 인공지능 상담원에게 "이메일 주소 바꿨으니 비밀번호 초기화 링크 좀 보내줘"라고 정중하게 부탁했더니 진짜로 계정 권한을 넘겨주는 초유의 보안사고가 터졌었습니다.
> 백엔드 시스템 권한을 쥔 AI 에이전트가 보안과 정체성 검증이라는 가장 기초적인 규칙을 무시할 때 어떤 재앙이 발생하는지 보여주는 완벽한 실패 사례입니다.

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 5일
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.

- URL: https://www.threads.com/@opryu92/post/DZEiYKyka_E
> opryu92
> 5일
> @jayeeyeonee님에게 남긴 답글
> context lot보다는 context bloat도 같이 언급해주셔야 할거같아요

- URL: https://www.threads.com/@dy1.mag/post/DZD893NAVl2
> dy1.mag
> 5일
> AI-native 조직들이 한국에도 생겨나고 있습니다.
> 회사의 모든 맥락을 AI가 읽을 수 있게 쌓아두고, 매일 자가 개선 루프를 돌리고, 필요한 사내 도구는 직접 만들어 쓴다고 합니다.
> 미래는 이미 다가왔습니다. 시간이 걸릴 뿐입니다.

Routing note: these are useful but repeated relative to the 2026-06-06 08:00/19:00 baselines. Keep as evidence; do not promote again.

## 3) Threads activity / replies / reposts — repeated or partial

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
Reposts URL: https://www.threads.com/@ethan13917/reposts

### Activity / replies visible via CDP

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> choisungh
> 6일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL: https://www.threads.com/@ethan13917/post/DZBrvY2E3_7
> choisungh
> 6일
> 와...

- URL: https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> god800913
> 1주
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다.

- URL: https://www.threads.com/@ethan13917/post/DY8wQ2rk0dA
> choisungh
> 1주
> 사실 sns가 인민재판의 현장이죠
> 더군다나 그 대상들이 팔로워를 가지고 있다면 더더욱
> 솔직히 앞뒤선후관계 다 안다고해서 한번 여론몰아졌으면 쉽게 바뀌지않고...

### Reposts page visible via CDP

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 5일
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.

- URL: https://www.threads.com/@claudebum/post/DYcBIZYE6Z9
> claudebum
> AI Threads
> 2026-05-17
> codex 맥앱에는 ssh 기능이 있는데
> SSH 자동 감지하고 연결이 가능하다고...?

Routing note: activity/replies/reposts mostly repeated older own replies and Codex/Claude Code rows. The only newly API-visible reposts were recovered separately in section 1.

## 4) YouTube — liked / watch-later rows

Subscriptions URL: https://www.youtube.com/feed/subscriptions  
Liked videos URL: https://www.youtube.com/playlist?list=LL  
Watch Later URL: https://www.youtube.com/playlist?list=WL  
Downloads URL: https://www.youtube.com/feed/downloads

### Availability

> Subscriptions page title: `구독 - YouTube`
> Visible text: 홈 / Shorts / 구독 / 내 페이지

> Downloads page title: `YouTube`
> Visible text: 홈 / Shorts / 구독 / 내 페이지

### Liked Videos — newly surfaced top rows plus repeated AI rows

- URL: https://www.youtube.com/watch?v=04KmysZz-Lk&list=LL&index=1&t=10s&pp=iAQBsAgC
> 한 손엔 유모차, 한 손엔 태극기..2만 명 모였다 / SBS 8뉴스 / 2026 국민의 선택
> SBS 뉴스
> 조회수 74만회 • 11시간 전

- URL: https://www.youtube.com/watch?v=CkEhL7I2ffk&list=LL&index=2&pp=iAQBsAgC
> 김동현의 압도적인 기술
> 텟카이
> 조회수 310만회 • 3주 전

- URL: https://www.youtube.com/watch?v=88miz_8UktQ&list=LL&index=3&pp=iAQBsAgC
> 결혼식 축가 도중 모두가 빵터진 순간
> 케이팝있쥬?
> 조회수 663만회 • 3주 전

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=7&t=413s&pp=iAQBsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan
> Sequoia Capital

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=8&pp=iAQBsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=10&t=22s&pp=iAQBsAgC
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=11&t=17s&pp=iAQBsAgC
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer

### Watch Later — repeated AI / infra rows

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s&pp=iAQBsAgC
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4&pp=iAQBsAgC
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler

- URL: https://www.youtube.com/watch?v=zgNvts_2TUE&list=WL&index=7&t=65s&pp=iAQB0gcJCTgLAYcqIYzvsAgC
> State of the Claw — Peter Steinberger
> AI Engineer

- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=13&t=108s&pp=iAQBsAgC
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung

- URL: https://www.youtube.com/watch?v=_lpYx03VVBM&list=WL&index=15&t=85s&pp=iAQBsAgC
> LiteParse - The Local Document Parser
> Sam Witteveen

- URL: https://www.youtube.com/watch?v=GhIJs4zbH0o&list=WL&index=16&t=32s&pp=iAQBsAgC
> Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit
> Bloomberg Originals

- URL: https://www.youtube.com/watch?v=G121VNcu0dg&list=WL&index=17&t=222s&pp=iAQBsAgC
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI

Routing note: Watch Later repeats the previous 19:00 AI/MCP/KV-cache/data-center evidence. The new top liked-video row is civic/political and remains raw-only; sports/music/entertainment rows are preserved as raw but excluded from durable interpretation.

## 5) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`  
Account: `ckethan0429`

- URL: https://github.com/tech-leads-club/agent-skills
> tech-leads-club / agent-skills
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.

- URL: https://github.com/smithersai/claude-p
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.

- URL: https://github.com/kelseyhightower/kubernetes-the-hard-way
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.

- URL: https://github.com/blader/humanizer
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text

- URL: https://github.com/code-yeongyu/not-claude-code-emulator
> code-yeongyu / not-claude-code-emulator
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE

- URL: https://github.com/AtomicBot-ai/atomic-hermes
> AtomicBot-ai / atomic-hermes
> The agent that grows with you

- URL: https://github.com/NousResearch/hermes-agent
> NousResearch / hermes-agent
> The agent that grows with you

- URL: https://github.com/k2-fsa/OmniVoice
> k2-fsa / OmniVoice
> High-Quality Voice Cloning TTS for 600+ Languages

Routing note: the star list still sits inside the known agent-skills / Claude Code / Hermes / infra/tooling lane. No new repo/entity crossed the durable threshold in this run.

## 6) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

> 오늘
> 일부 활동은 아직 표시되지 않을 수 있습니다.
> 검색
> 알림 1개
> 포함된 주제:
> 스티브 승준 유
> 오전 7:48 • 세부정보

> 어제
> 검색
> 알림 5개
> 포함된 주제:
> 젠슨 황
> 주가
> 코스피
> C++
> 날씨
> 오후 10:48 • 세부정보

> 6월 5일
> 검색
> 알림 6개
> 포함된 주제:
> LG
> 바이브 코딩
> TVING
> 13형 MacBook Pro - Apple M1칩, 256GB - 스페이스 그레이 - Apple - MYD82/A
> 앤트로픽
> 날씨
> 오후 10:48 • 세부정보

Routing note: no new search-history signal appeared after the morning baseline; visible rows stay raw-only or side-context.

## 7) ChatGPT — copied text

Surface URL: https://chatgpt.com/  
Page title: `ChatGPT`

### Recent sidebar rows

- URL: https://chatgpt.com/c/6a252491-1378-83a9-acb2-4ecb4292e138
> CTO Virton 로드맵 설계

- URL: https://chatgpt.com/c/6a251daf-e40c-83a2-8095-ee9fa1406042
> 로보틱스 시작 방법

- URL: https://chatgpt.com/c/6a251bc9-0c1c-83aa-b006-9c1a6813a197
> LPDDR5 설명

- URL: https://chatgpt.com/c/6a250920-f1bc-83a5-a19e-539546167a0e
> 강화학습 현재 상황

- URL: https://chatgpt.com/c/6a24280d-65ec-83a2-bb46-4376936f84d1
> 샴푸 바디워시 구분 방법

- URL: https://chatgpt.com/c/6a220857-dfc0-83a5-b240-40a348952fb7
> 경제적 독립과 영향력

- URL: https://chatgpt.com/c/6a1f30f7-fbc0-83a5-b240-40a348952fb7
> 깃 워크트리 사용법

- URL: https://chatgpt.com/c/6a1f3098-3244-83a8-acd0-28c69b1481d9
> Accountable harness 해석

Routing note: ChatGPT recent titles newly foreground Virton/CTO roadmap, robotics, LPDDR5, and reinforcement-learning learning context. This reinforces existing CK career/product/hardware/AI-learning lanes but remains a sidebar-only raw signal.

## 8) Claude — copied text

Surface URL: https://claude.ai/new  
Page title: `New chat - Claude`

### Recent sidebar rows

- URL: https://claude.ai/chat/036a858a-e51e-479d-9ff6-2d7e260034d7
> 지분 획득 시 CTO의 역할과 준비

- URL: https://claude.ai/chat/4b192f85-c217-48dd-918f-92220703b7ae
> 엔지니어 커리어 최대치 현실적 평가

- URL: https://claude.ai/chat/3e145c7c-c15c-4214-b12c-2069697bf793
> 버튼 지분 받는 일반적인 규모

- URL: https://claude.ai/chat/a7297b4b-01e8-4022-9554-d83484f85319
> 엔지니어 경력 발전 방향

- URL: https://claude.ai/chat/25c88aee-c94c-4086-b90e-e61919355983
> 기술 비교 분석의 공정성 문제

- URL: https://claude.ai/chat/418fc360-fd97-4c27-b6ac-655b2fa64604
> AI 인프라 및 AIOps 사업 방향 검토

- URL: https://claude.ai/chat/304af6b0-1f32-4818-a19f-4ef9463af6b0
> 르노 그랑콜레오스 AI 에이전트 제어 방법

- URL: https://claude.ai/chat/6c5fca62-7ded-4415-b091-28c22411f389
> SaaS 백엔드 필수 기능

- URL: https://claude.ai/chat/aa4beaa4-fafd-4201-b810-700bca1203ef
> Private Cloud-Native 개발 플랫폼 구축

Routing note: Claude recents remain career/equity, AI-infra/AIOps, SaaS/backend, and private-cloud development reinforcement. No new durable page was justified.

## 9) X — availability note

Surface URL: https://x.com/CKAhn7/likes  
Page title: ``

> This account doesn’t exist
> Try searching for another.

Routing note: X remained an unusable shell from the exposed session and was not treated as negative evidence.

## Filtering notes

- Preserved raw evidence for the newly API-visible Threads repost facades, repeated Threads liked AI/agent rows, YouTube liked/watch-later rotations, GitHub Stars, Google Activity, ChatGPT, Claude, and availability failures.
- Strongest newly surfaced rows were on Threads API and YouTube liked, but they are civic/political or lifestyle/sports rows and stay `raw_only` after comparison with same-day and previous-day baselines.
- ChatGPT/Claude recents are useful as side evidence for Virton/CTO/career/hardware/AI-learning, but they are single-surface sidebars and should not be promoted from this run alone.
- No durable concept page or `index.md` change is justified from this 19:00 pass.

## Why this raw exists

This file is the evidence store for later Honcho-style routing review. The afternoon route is `raw_only`: preserve the evidence and update Honcho/log, but do not promote a new durable wiki page.
