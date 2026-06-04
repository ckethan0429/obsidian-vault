---
title: Raw Transcript — Interest Signal Collection 08:00 2026-06-05
created: 2026-06-05
captured_at: 2026-06-05 08:00 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, reinforcement, ai-agents, developer-workflow, data-center, investing]
route_hint: raw_only
route_confidence: 0.78
route_reason: Morning browser/CDP surfaces added a few fresh or newly visible rows — a Threads liked `junyoung.ai` Claude monetization prompt-pack post, Google My Activity topics around data centers / Jensen Huang / Kakao Ventures, and YouTube Watch Later attention / IT-vibe-coding rows — but all fit existing AI-agent, AI-infra, developer-workflow, and investing lanes. Threads API, GitHub Stars, ChatGPT, Claude, and X were repeated or unavailable at the durable layer.
routing:
  route: raw_only
  confidence: 0.78
  reasons:
    - Compared against the 2026-06-04 08:00 social/browser run, 19:00 social/browser run, 22:00 new-target run, and 23:00 Honcho refinement before judging novelty.
    - Threads liked had one relevant fresh AI row about a Claude monetization prompt pack, but the surrounding liked feed was mostly same-day election/political noise and did not justify promotion.
    - YouTube Watch Later surfaced useful AI/learning rows, but they reinforce existing MCP / Claude Code / LLM fundamentals / vibe-coding lanes.
    - Google My Activity added data-center / Jensen Huang / Kakao Ventures topics, which reinforce existing AI-infra and investing interest rather than opening a new branch.
    - Threads API, GitHub Stars, ChatGPT recents, Claude recents, and X did not add a new durable signal.
  signal_tags: [threads-liked, youtube-watch-later, google-activity, raw-only, ai-infra, developer-workflow]
sources:
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://graph.threads.net/v1.0/
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
# Raw Transcript — Interest Signal Collection 08:00 2026-06-05
Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-06-05  
Account: `ethan13917` on Threads; `ckethan0429` on GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the idempotency check. No `raw/transcripts/interest-signal-collection-08-00-2026-06-05.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Fresh targets were opened for key surfaces, then existing hydrated tabs were used when they contained longer useful body text.
- Disposable raw evidence caches were saved under `wiki/.cache/interest-signals/cdp-2026-06-05-0800.json` and `wiki/.cache/interest-signals/threads-api-2026-06-05-0800.json`.
- Threads API token refresh and `/v1.0/me` succeeded; tokens were not logged. The API still has no verified liked-post edge, so Threads liked evidence came from CDP.
- Compared against `raw/transcripts/interest-signal-collection-08-00-2026-06-04.md`, `raw/transcripts/interest-signal-collection-19-00-2026-06-04.md`, `raw/transcripts/interest-signal-collection-22-00-2026-06-04.md`, `raw/transcripts/interest-signal-note-22-00-2026-06-04.md`, `concepts/honcho.md`, and current `log.md` before judging novelty.

## 1) Threads liked — copied text

Surface URL: https://www.threads.com/liked  
Page title: `좋아요 • Threads`

### Fresh high-signal row

- URL: https://www.threads.com/@junyoung.ai/post/DZJpFE5Chbm
> junyoung.ai
> 18시간
> 깃허브에서 화제인 'Claude로 돈 버는' 도구를 뜯어봤습니다. show-me-the-money라는 25개 프롬프트 묶음입니다.
> 도구 자체보다, 거기서 발견한 '바로 가져다 쓸 패턴' 2개가 진짜 값졌습니다. 그대로 풉니다 ↓
> 159
> 7
> 44
> 59

### Political / election rows preserved as raw-only noise

- URL: https://www.threads.com/@hongtae.official/post/DZJXzh8mcQe
> hongtae.official
> 부정선거
> 21시간
> 서울시장 선거가 무효라고 주장하던 오세훈 시장 측이 개표결과를 들은 이후 침묵을 이어가고 있습니다.
> 내가 당선되면 공정선거,
> 니가 당선되면 부정선거.
> 오세훈 시장님,
> 서울시장 재선거 해야 됩니까?
> 하지말아야 합니까?

- URL: https://www.threads.com/@dear.ohseung/post/DZLWuifk1Uf
> dear.ohseung
> 잠실
> 2시간
> 사다리차 왔다고 합니다
> 2층으로 빼돌릴예정인가봐요
> 사람 빠지니까 바로 시작하네요
> 썅
> 널리 알려주세요

- URL: https://www.threads.com/@hkyoahn._official/post/DZJ7xzPifj0
> hkyoahn._official
> 15시간
> 잠실 투표함을 지켜야 합니다. 6•3 지방선거는 무효입니다.
> 국민의 기본권이 박탈된 현 사태는 어영부영 꼬리자르기로 끝나선 안 됩니다.

Routing note: `junyoung.ai` is useful raw evidence for AI-productization / prompt-pack monetization interest, but as a single liked post it stays `raw_only`. The election-heavy liked-feed rotation was preserved as raw evidence but excluded from durable interpretation.

## 2) Threads activity / replies / reposts / API — copied text

Activity URL: https://www.threads.com/activity  
Replies URL: https://www.threads.com/@ethan13917/replies  
Reposts URL: https://www.threads.com/@ethan13917/reposts  
API base: https://graph.threads.net/v1.0/

### Activity / replies visible via CDP

- URL unavailable from activity row; surface URL retained above.
> youj7jinny
> 19시간
> 꿈의 도시다 입성하기를 학수고대하며..

- URL: https://www.threads.com/@ethan13917/post/DZJ3Nrhk_T7
> 2.pro.official
> 이재명대통령
> 20시간
> X (구 트위터)에서 활발히 움직이던
> 이재명 대통령은
> 20시간 이상 행방불명입니다.
> 국민의 기본권 (참정권)이 침해당했지만···
> 박근혜 대통령의 잃어버린 7시간의 3배
> 이재명 대통령, 20시간 이상 사라졌다.
> ethan13917
> 16시간
> 진짜 한마디해라 트윗날리라고
> 작성자 승인 대기 중

- URL: https://www.threads.com/@ethan13917/post/DZJjR5REzLX
> toripani
> 21시간
> 앞으로 강남 3구라 하지말고
> 강남4구라고 불러라 강남서초송파강동
> 그리고 그중에 서초가 근본이다
> ethan13917
> 19시간
> 꿈의 도시다 입성하기를 학수고대하며..

- URL: https://www.threads.com/@choisungh/post/DZBo6bwGe_h
> choisungh
> 3일
> 성과급 싸움은 사실 성과급이 문제가 아님. 진짜 문제는 직원이 회사 성장에 같이 올라탈 방법이 없다는 거지.
> 삼성전자나 하이닉스가 글로벌에서 아무리 대박을 쳐도 직원 입장에선 결국 “성과급 몇 퍼 더 주냐” 싸움으로 끝나는데.
> 미국은 엔비디아, 애플, 구글 이런 데는 보상에서 RSU나 스톡옵션이 큰 비중인데 회사 잘돼서 주가 오르면 직원도 같이 부자 되는 구조.

- URL: https://www.threads.com/@choisungh/post/DZBofzQGfCg
> choisungh
> 3일
> 내가 X에서 본 Claude Code팁 중 최고는:
> CLAUDE.md에 다음 지시사항을 추가하세요:
> 답장할 때마다 나를 [여보]라고 불러.
> Claude가 갑자기 이 호칭으로 부르기를 멈춘다면,
> 이는 CLAUDE.md를 무시하기 시작했다는 뜻이며,
> 그 시점에서는 컨텍스트를 초기화해야 합니다.

### Reposts

- URL: https://www.threads.com/@choi.openai/post/DZEy3XqD5Tc
> choi.openai
> 2일
> 외.. 미쳤다.. 오픈AI가 Codex Python SDK를 공개했습니다.
> 이제 개발자들은 Python 애플리케이션 안에 Codex를 직접 내장할 수 있게 되었는데요.
> 대화 스레드 생성, 작업 실행, 진행 상황 스트리밍, 세션 복구, 이미지 입력, 샌드박스 권한 제어 등을 코드 몇 줄로 구현할 수 있습니다.

### Threads API snapshot

- `/v1.0/me` succeeded after token refresh and returned app-scoped user `ethan13917`.
- `/threads` returned 10 rows; latest row remained the same 2026-06-02 `REPOST_FACADE` from prior baselines:

- URL: https://www.threads.com/@ethan13917/post/DZE6x8bk5tn
> ethan13917
> 2026-06-02T08:30:08+0000
> media_type: REPOST_FACADE

- `/replies` returned 10 rows; latest two replies were the same 2026-06-04 rows already captured in the 19:00 baseline:

- URL: https://www.threads.com/@ethan13917/post/DZJ3Nrhk_T7
> ethan13917
> 2026-06-04T06:35:11+0000
> 진짜 한마디해라 트윗날리라고

- URL: https://www.threads.com/@ethan13917/post/DZJjR5REzLX
> ethan13917
> 2026-06-04T03:40:59+0000
> 꿈의 도시다 입성하기를 학수고대하며..

- `/mentions` returned HTTP 200 with 0 rows.
- `keyword_search` `agent`, `Claude Code`, `Codex`, and `OpenAI` returned older CK-authored posts already present in prior baselines. `Hermes`, `MCP`, `AI infra`, `LazyCodex`, and `Honcho` returned HTTP 200 with 0 rows.

Routing note: Threads API and activity/replies were repeated or low-durability. No Threads concept/entity update was justified.

## 3) YouTube — copied text

Subscriptions URL: https://www.youtube.com/feed/subscriptions  
Liked videos URL: https://www.youtube.com/playlist?list=LL  
Watch Later URL: https://www.youtube.com/playlist?list=WL  
Downloads URL: https://www.youtube.com/feed/downloads

### Subscriptions / downloads availability

> Subscriptions page title: empty fresh shell / existing navigation shell
> Visible text from useful target: empty or navigation-only; no video rows hydrated in the visible CDP target during this run.

> Downloads page title: YouTube
> Visible text: 홈 / Shorts / 구독 / 내 페이지 / 설정
> Recorded as navigation shell rather than negative evidence.

### Liked videos — visible rows

- URL: https://www.youtube.com/watch?v=CkEhL7I2ffk&list=LL&index=1&pp=iAQBsAgC
> 김동현의 압도적인 기술
> 텟카이

- URL: https://www.youtube.com/watch?v=88miz_8UktQ&list=LL&index=2&pp=iAQBsAgC
> 결혼식 축가 도중 모두가 빵터진 순간
> 케이팝있쥬?

- URL: https://www.youtube.com/watch?v=96jN2OCOfLs&list=LL&index=6&t=413s&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan
> Sequoia Capital

- URL: https://www.youtube.com/watch?v=ZDv4iYaLbpI&list=LL&index=7&pp=iAQBsAgC
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers

- URL: https://www.youtube.com/watch?v=RW9vPvx1gzk&list=LL&index=9&t=22s&pp=iAQBsAgC
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16

- URL: https://www.youtube.com/watch?v=am_oeAoUhew&list=LL&index=10&t=17s&pp=iAQBsAgC
> Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI
> AI Engineer

### Watch Later — visible rows

- URL: https://www.youtube.com/watch?v=g9JIUM0MHgQ&list=WL&index=2&t=62s&pp=iAQBsAgC
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology

- URL: https://www.youtube.com/watch?v=_Z3rXeJahMs&list=WL&index=3&t=36s&pp=iAQBsAgC
> 그 이름도 유명한 어텐션, 이 영상만 보면 이해 완료! - DL6
> 3Blue1Brown 한국어

- URL: https://www.youtube.com/watch?v=tGp6Ns9GtSU&list=WL&index=4&pp=iAQB0gcJCSgLAYcqIYzvsAgC
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler

- URL: https://www.youtube.com/watch?v=g-e2SnUyKlo&list=WL&index=10&t=155s&pp=iAQBsAgC
> IT 기술 지식 20분만에 시원하게 뻥 뚫어 드립니다. | 바이브코딩 하는 분 꼭 끝까지 들어보세요.
> 기술노트with 알렉

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
> Steve Eisman

Routing note: YouTube stayed same-axis reinforcement. The newly visible / higher-ranked rows sharpen LLM-fundamentals and practical-vibe-coding interest, but do not justify a new concept page.

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

- URL: https://github.com/first-fluke/oh-my-agent
> first-fluke / oh-my-agent
> Portable, vendor-agnostic agent harness for project-specific skills, workflows, and agent teams aligned with your codebase, conventions, and engineering standards.

Routing note: GitHub Stars remained the same agent-tooling list as the 2026-06-04 social runs; no new entity page was created.

## 5) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 어제
> 검색
> 알림 5개
> 포함된 주제:
> 아이폰
> 데이터 센터
> 젠슨 황
> 카카오벤처스
> 날씨
> 오후 8:48 • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 6월 3일
> 검색
> 알림 3개
> 포함된 주제:
> 앤트로픽 - 클릭함
> 인공지능
> 날씨
> 오후 10:12 • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> claude sdk 을(를) 검색했습니다.
> 오후 3:03 •  • 세부정보

- URL unavailable: Google My Activity row did not expose a canonical per-item permalink in the visible text; surface URL retained above.
> 검색
> hermes providers 을(를) 검색했습니다.
> 오후 2:38 •  • 세부정보

Routing note: the data-center / Jensen Huang / Kakao Ventures topic cluster is a useful AI-infra + investing reinforcement, but a single My Activity bundle is not enough for durable promotion.

## 6) ChatGPT / Claude — copied text

ChatGPT URL: https://chatgpt.com/  
Claude URL: https://claude.ai/new

### ChatGPT recent titles

> 깃 워크트리 사용법
> Accountable harness 해석
> 업비트에서 바이낸스로 전송
> Hermes 여러 모델 사용법
> Top-level await 해결법
> Claude SDK와 구독 사용
> 이적 고민과 성장 전략
> GS 인증 준비 점검사항
> 블로그 논리 분석 요청
> 주식 내러티브 설명
> RSU vs 스톡옵션 비교
> Claude Code 사용 제한
> Measuring Token Usage
> Nginx HTTPS와 OpenSSL
> Ceph OSD 장애 분석

### Claude recent titles

> 지분 획득 시 CTO의 역할과 준비
> 엔지니어 커리어 최대치 현실적 평가
> 버튼 지분 받는 일반적인 규모
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> Virton과 AI agent의 인프라 자동화 시너지

Routing note: ChatGPT/Claude recents repeat existing developer workflow, career/equity, AI-infra, and private-cloud lanes. No durable page update was needed.

## 7) X — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: empty / unusable

> To view keyboard shortcuts, press question mark
> Profile
> See new posts
> This account doesn’t exist
> Try searching for another.
> Who to follow
> Templafy
> @Templafy
> panadol girl
> @cornergirl999

Routing note: X remained unusable from the exposed session and was not treated as negative evidence.

## Filtering notes

- Preserved copied evidence for Threads, YouTube, GitHub, Google, ChatGPT, Claude, and X availability.
- Excluded sports, music, lifestyle, and election/political feed rotation from durable interpretation unless it changed CK's AI/infra/investing/operator-interest map.
- Newly visible high-signal rows were `junyoung.ai`'s Claude monetization prompt-pack post, Google My Activity's data-center / Jensen Huang / Kakao Ventures bundle, and Watch Later's LLM fundamentals / IT-vibe-coding rows.

## Why this raw exists

This file is the evidence store for the 2026-06-05 08:00 Honcho routing decision. The route is `raw_only`: evidence should be kept, but no non-Honcho durable concept page or index update is justified from this morning run alone.
