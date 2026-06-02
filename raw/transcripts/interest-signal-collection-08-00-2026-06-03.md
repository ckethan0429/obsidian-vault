---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-03
created: 2026-06-03
captured_at: 2026-06-03 08:00 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, ai-agents, developer-workflow, git-worktree, harness, crypto]
route_hint: raw_only
route_confidence: 0.82
route_reason: Morning browser/CDP surfaces were mostly unchanged from the 2026-06-02 19:00 and 23:00 baselines. The only newly visible high-signal rows were ChatGPT recents around git worktrees and accountable harness wording, plus a mixed YouTube playlist refresh; these reinforce existing developer-workflow, managed-agent, and personal-finance/operator lanes without justifying a new durable page.
routing:
  route: raw_only
  confidence: 0.82
  reasons:
    - Compared against the 2026-06-02 08:00, 19:00, 22:00 raw transcripts, the 2026-06-02 23:00 Honcho refinement, and current log context before judging novelty.
    - Threads liked/reposts/activity and Threads API mostly repeated the 2026-06-02 Hermes/Codex/LazyCodex/security-agent cluster.
    - GitHub Stars, Google My Activity, Claude recents, YouTube Watch Later/liked AI rows, and X did not open a new durable branch.
    - ChatGPT added small operator-intent rows around git worktrees and accountable harness interpretation, which are useful raw evidence but fit existing agent/developer workflow lanes.
  signal_tags: [chatgpt-recents, git-worktree, accountable-harness, threads-liked, youtube-playlists, github-stars, raw-only]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://www.youtube.com/feed/downloads
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
  - https://x.com/ckethan0429/likes
---
# Raw Transcript — Interest Signal Collection 08:00 2026-06-03
Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-03  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `interest-signal-collection-08-00-2026-06-03.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface page targets were inspected; fresh targets were opened where useful and existing hydrated targets were used as fallback.
- Disposable raw evidence caches were saved under `wiki/.cache/interest-signals/cdp-2026-06-03-0800.json` and `wiki/.cache/interest-signals/threads-api-2026-06-03-0800.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens were not logged. The API has no verified liked-post edge, so Threads liked evidence came from CDP.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-02.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-02.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-02.md`, `concepts/honcho.md`, and `log.md` before judging novelty.

## 1) Threads liked / reposts — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Repeated high-signal rows from the 2026-06-02 19:00 baseline

- URL: https://www.threads.com/@roach_log/post/DZEFS4FAW7T
> roach_log
> AI Threads
> 22시간
> (헤르메스 쓰시면 꼭 읽어보세요)
> 최근 X 에서는 헤르메스 스킬 셋이 너무 장황하다는 말이 나오고 있습니다.
> “왜 모든 유저가 polymarket, pocketmon, minecraft 스킬을 가져야 하나?“
> 그리고 오늘 또 Nvidia 관련 스킬이 들어옵니다.

- URL: https://www.threads.com/@yeon.gyu.kim/post/DZE0cy-Es_4
> yeon.gyu.kim
> LazyCodex
> 15시간
> LazyCodex 후기
> “걍 이거 안돼 딸깍 ulw 하니까 다 고쳐놓네요”
> “컴퓨터 유즈 되는게 개사기네요”
> 토큰 비쌉니다
> 그런데 여러분의 삶과 지능이 더 비쌉니다

- URL: https://www.threads.com/@choi.openai/post/DZEq0ZBDMBH
> choi.openai
> 16시간
> 메타에서 심각한 보안사고 문제가 터졌었습니다.
> 계정 복구 AI 기능을 A/B 테스트하는 과정에서 인공지능 상담원에게 ... 진짜로 계정 권한을 넘겨주는 초유의 보안사고가 터졌었습니다.
> 백엔드 시스템 권한을 쥔 AI 에이전트가 보안과 정체성 검증이라는 가장 기초적인 규칙을 무시할 때 어떤 재앙이 발생하는지 보여주는 완벽한 실패 사례입니다.

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 15시간
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.
> 오픈AI가 직접 제품을 만드는 것보다 다른 개발자들이 오픈AI 위에서 제품을 만들도록 생태계를 구축하는 방향으로 가고 있는 것으로 보입니다.

- URL: https://www.threads.com/@dy1.mag/post/DZD893NAVl2
> dy1.mag
> 23시간
> AI-native 조직들이 한국에도 생겨나고 있습니다.
> 회사의 모든 맥락을 AI가 읽을 수 있게 쌓아두고, 매일 자가 개선 루프를 돌리고, 필요한 사내 도구는 직접 만들어 쓴다고 합니다.

Routing note: these rows are still useful evidence for Hermes/Codex/LazyCodex/security-agent interest, but they repeat the prior 19:00 cluster and remain `raw_only`.

## 2) Threads activity / replies / API — copied text

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
Reposts URL: https://www.threads.com/@ethan13917/reposts  
API base: https://graph.threads.net/v1.0/

### Activity / replies

- URL: https://www.threads.com/@choisungh/post/DZBo6bwGe_h
> choisungh
> 1일
> 성과급 싸움은 사실 성과급이 문제가 아님. 진짜 문제는 직원이 회사 성장에 같이 올라탈 방법이 없다는 거지.
> 미국은 엔비디아, 애플, 구글 이런 데는 보상에서 RSU나 스톡옵션이 큰 비중인데 회사 잘돼서 주가 오르면 직원도 같이 부자 되는 구조.

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 1일
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- URL unavailable: Threads activity row is visible in activity feed but no canonical item permalink was exposed in the extracted row; surface URL retained above.
> god800913
> 4일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다.

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned 10 rows; latest row was a `REPOST_FACADE` already visible in CDP/reposts.

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> ethan13917
> 2026-06-02T08:30:08+0000
> media_type: REPOST_FACADE

- `/replies` returned 10 rows; latest own reply remained:

- URL: https://www.threads.com/@ethan13917/post/DZBs-HXk9V9
> ethan13917
> 2026-06-01T02:31:45+0000
> 지분협상과정 중인데 비슷한 입장이다 보니 공감 많이됩니다.

- `/mentions` returned HTTP 200 with 0 rows.
- `keyword_search` `agent`: HTTP 200, 8 rows; latest visible result was older CK-authored post `https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk`.
- `keyword_search` `Claude Code`: HTTP 200, 1 rows; latest visible result was older CK-authored post `https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww`.
- `keyword_search` `Hermes`: HTTP 200, 0 rows.
- `keyword_search` `MCP`: HTTP 200, 0 rows.
- `keyword_search` `Codex`: HTTP 200, 2 rows; latest visible result was older CK-authored post `https://www.threads.com/@ethan13917/post/DXyU1IFE7l5`.
- `keyword_search` `OpenAI`: HTTP 200, 3 rows; latest visible result was older CK-authored post `https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk`.
- `keyword_search` `AI infra`: HTTP 200, 0 rows.
- `keyword_search` `LazyCodex`: HTTP 200, 0 rows.
- `keyword_search` `oh-my-pi`: HTTP 200, 0 rows.

Routing note: API/replies/activity were reinforcement-only; no new Threads durable branch.

## 3) YouTube — copied text

Subscriptions URL: https://www.youtube.com/feed/subscriptions  
Liked videos URL: https://www.youtube.com/playlist?list=LL  
Watch Later URL: https://www.youtube.com/playlist?list=WL  
Downloads URL: https://www.youtube.com/feed/downloads

### Subscriptions / downloads availability

> Subscriptions page title: 구독 - YouTube
> Visible text: 홈 / Shorts / 구독 / 내 페이지
> No video rows hydrated in the visible CDP target during this run.

> Downloads page title: empty
> Visible body length: 0
> Recorded as unavailable / blank shell rather than negative evidence.

### Liked videos — visible rows

- URL: https://www.youtube.com/watch?v=CkEhL7I2ffk&list=LL&index=1&pp=iAQBsAgC
> 김동현의 압도적인 기술
- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s&pp=iAQBsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering
- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7&pp=iAQBsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=9&t=22s&pp=iAQBsAgC
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=10&t=17s&pp=iAQBsAgC
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute

### Watch Later — visible rows

- URL: https://www.youtube.com/watch?v=sEWJ2OWFy04&list=WL&index=1&pp=iAQBsAgC
> [full] 모두가 자식의 폰과 싸우고 있다
- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s&pp=iAQBsAgC
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4&pp=iAQBsAgC
> KV Cache: The Invisible Trick Behind Every LLM
- URL: https://www.youtube.com/watch?v=zgNvts_2TUE&list=WL&index=7&t=65s&pp=iAQBsAgC
> State of the Claw — Peter Steinberger
- URL: https://www.youtube.com/watch?v=yLXLHnD4fco&list=WL&index=13&t=108s&pp=iAQBsAgC
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
- URL: https://www.youtube.com/watch?v=_lpYx03VVBM&list=WL&index=15&t=85s&pp=iAQBsAgC
> LiteParse - The Local Document Parser

Filtering note: liked/watch-later playlists mixed sports/music/parenting rows with repeated AI-agent and LLM-infra rows. The repeated AI rows were preserved as evidence, but no new durable YouTube signal was promoted.

## 4) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

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

- URL: https://github.com/jung-wan-kim/memory-bank
> jung-wan-kim / memory-bank
> memory-bank

- URL: https://github.com/first-fluke/oh-my-agent
> first-fluke / oh-my-agent
> Portable, vendor-agnostic agent harness for project-specific skills, workflows, and agent teams aligned with your codebase.

Routing note: the stars list is high-signal for CK but unchanged versus prior raw transcripts; no new repo/entity page was created.

## 5) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> claude sdk 을(를) 검색했습니다.
> 오후 3:03 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> hermes providers 을(를) 검색했습니다.
> 오후 2:38 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> open code claude subscription 을(를) 검색했습니다.
> 오후 1:53 • 세부정보

- URL unavailable: Google My Activity row does not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> lazy codex 을(를) 검색했습니다.
> 오전 10:14 • 세부정보

Routing note: these exact Google intent rows were already captured in the 2026-06-02 19:00 raw transcript.

## 6) ChatGPT / Claude — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new

### ChatGPT recent titles



Newly visible versus the 2026-06-02 raw baseline: `깃 워크트리 사용법`, `Accountable harness 해석`, and `업비트에서 바이낸스로 전송`. The first two reinforce developer workflow / agent harness interests; the Upbit/Binance row is personal finance / crypto operation context.

### Claude recent titles

- URL: https://claude.ai/chat/4b192f85-c217-48dd-918f-92220703b7ae
> 엔지니어 커리어 최대치 현실적 평가
- URL: https://claude.ai/chat/3e145c7c-c15c-4214-b12c-2069697bf793
> 버튼 지분 받는 일반적인 규모
- URL: https://claude.ai/chat/a7297b4b-01e8-4022-9554-d83484f85319
> 엔지니어 경력 발전 방향
- URL: https://claude.ai/chat/25c88aee-c94c-4086-b90e-e61919355983
> 기술 비교 분석의 공정성 문제
- URL: https://claude.ai/chat/17e46cab-f8fb-4b27-8023-113613a10366
> 아내가 음식을 권할 때 대처법
- URL: https://claude.ai/chat/5d3427db-925d-439b-921a-184859fded51
> 아내의 정신 건강 걱정
- URL: https://claude.ai/chat/418fc360-fd97-4c27-b6ac-655b2fa64604
> AI 인프라 및 AIOps 사업 방향 검토
- URL: https://claude.ai/chat/304af6b0-1f32-4818-a19f-4ef9463af6b0
> 르노 그랑콜레오스 AI 에이전트 제어 방법
- URL: https://claude.ai/chat/6c5fca62-7ded-4415-b091-28c22411f389
> SaaS 백엔드 필수 기능
- URL: https://claude.ai/chat/1d5f25dd-f153-4b85-8d38-2c4682914281
> 여러 AI 모델을 안전하게 함께 사용하기

Routing note: Claude recent titles were mostly repeated career / equity / AI-infra / B2B-product rows; ChatGPT added small new operator-intent evidence but not a durable new concept.

## 7) X / Twitter — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: empty

> To view keyboard shortcuts, press question mark
> This account doesn’t exist
> Try searching for another.

Routing note: X likes were unusable from the exposed session in this run; no inference was made.

## Filtering notes

- Strongest newly visible item: ChatGPT recents moved from provider/subscription setup toward `git worktree` and `accountable harness` vocabulary.
- Strongest repeated items: Threads Hermes/Codex/LazyCodex/security-agent rows, GitHub Stars agent tooling, Watch Later AI-agent/LLM-infra videos.
- Low-value/noisy rows intentionally not promoted: sports/music Shorts, generic entertainment, blank YouTube subscriptions/downloads shells, and X logged-out/nonexistent-account page.

## Why this raw exists

This file preserves the 2026-06-03 08:00 evidence store for later Honcho-style triage. The current route is `raw_only`: useful operator-intent evidence, but no new durable wiki page or index update is justified.
