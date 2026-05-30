---
title: Raw Transcript — Interest Signal Collection 08:00 2026-05-31
created: 2026-05-31
captured_at: 2026-05-31 08:00 KST
source: live Chrome CDP + Threads API + browser-visible surfaces
type: raw
tags: [interest-signals, threads, youtube, github, google, chatgpt, claude, cdp, honcho, raw-only, ai-agents, claude-code]
route_hint: raw_only
route_confidence: 0.78
route_reason: Morning browser/CDP surfaces added fresh feed examples around Claude Opus 4.8 long-running tasks, agent observability, enterprise-agent failure modes, one-person AI business workflows, Lazy Codex / OmO ulw-loop, and GitHub Project Pods, but these land inside existing Claude Code / managed-agent / AI-infra / operator-control lanes rather than opening a new durable concept branch.
routing:
  route: raw_only
  confidence: 0.78
  reasons:
    - Compared against 2026-05-30 social/new-target/refinement baselines and current prior-run output.
    - YouTube and Threads added fresh examples, but the durable axis is unchanged: Claude Code/Opus, agent observability, operator control planes, and AI-infra economics.
    - GitHub Stars, Watch Later, Liked videos, Claude, ChatGPT, Threads API keyword hits, and most Google history were unchanged or reinforcement-only.
    - X likes/profile remained unusable from the live target and no X signal was inferred.
  signal_tags: [youtube, threads, threads-api, github-stars, google, claude-code, agent-observability, ai-infra]
sources:
  - https://www.youtube.com/feed/subscriptions
  - https://www.youtube.com/playlist?list=LL
  - https://www.youtube.com/playlist?list=WL
  - https://www.threads.com/liked
  - https://www.threads.com/activity
  - https://www.threads.com/@ethan13917
  - https://www.threads.com/@ethan13917/replies
  - https://www.threads.com/@ethan13917/reposts
  - https://github.com/stars
  - https://myactivity.google.com/search-services/history/search
  - https://chatgpt.com/
  - https://claude.ai/new
---

# Raw Transcript — Interest Signal Collection 08:00 2026-05-31

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Source URL: multiple; see per-section URLs below  
Date: 2026-05-31  
Account: `ethan13917` on Threads; `ckethan0429` GitHub/X where visible

## Live session notes

- Read top-level wiki `README.md` first and performed the same-day idempotency check. No `interest-signal-collection-08-00-2026-05-31.md` existed before this run.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Per-surface page targets were inspected and the hydrated target with the longest useful `document.body.innerText` was used.
- Threads used both live CDP surfaces (`liked`, `activity`, `reposts`, `replies`, `profile`) and the official Threads API for own threads/replies/mentions/keyword snapshots. The token refresh and `/v1.0/me` succeeded; tokens were not logged.
- Raw CDP/API caches were saved under `wiki/.cache/interest-signals-2026-05-31-0800-cdp.json` and `wiki/.cache/interest-signals-2026-05-31-0800-threads-api.json`; these are disposable evidence caches, not durable wiki notes.
- Compared against the 2026-05-30 08:00 / 19:00 social runs, the 11:00 / 22:00 new-target runs, and the 23:00 Honcho refinement summary before judging novelty.

## 1) YouTube subscriptions — copied text

Surface URL: https://www.youtube.com/feed/subscriptions  
Page title: `(42) 구독 - YouTube`

### Newly visible high-signal rows

- URL: https://www.youtube.com/watch?v=5HVPeux24WU
> Embrace long-running tasks with Opus 4.8 and Claude Code
> Claude
> 조회수 5만회 / 6시간 전

- URL: https://www.youtube.com/watch?v=XBaznoTRDFI
> How agent o11y differs from traditional o11y — Phil Hetzel, Braintrust
> AI Engineer
> Premieres / live row

- URL: https://www.youtube.com/watch?v=DX4HERWHCbA
> Vibe Coding With Claude Opus 4.8
> BridgeMind
> 조회수 2.4만회 / 스트리밍 시간: 2시간 전

- URL: https://www.youtube.com/watch?v=AGkzpxMdPn8
> Most Enterprise Agentic Projects Are Doomed, Here's Why — Jess Grogan-Avignon & Jack Wang, Accenture
> AI Engineer
> 조회수 768회 / 2시간 전

- URL: https://www.youtube.com/watch?v=VsSvHd1bO04
> I Helped My 50-Year-Old Brother Build a One Person AI Business In 1 Month ($214/Day With Claude)
> Shane Hummus
> visible subscriptions row

- URL: https://www.youtube.com/watch?v=BFH9D05UFvM
> Fine-Tuning, Clearly Explained (it's easier than you think)
> David Ondrej
> 조회수 868회

- URL: https://www.youtube.com/shorts/u3OHHIuAnJI
> NPM 대신 APM부터 세팅하는 시대?? AI를 위한 패키지 매니저. #ai #llm #chatgpt #claude #openai #agent #gemini #openclaw
> YouTube Shorts
> subscriptions shorts row

- URL: https://www.youtube.com/watch?v=Aj1YByoVPBs
> Maintainer Month Special: Introducing Project Pods
> GitHub
> scheduled row

### Noise retained in raw context

The same viewport also included sports, entertainment, politics, generic finance, and lifestyle rows. Those were preserved in the CDP cache but excluded from the durable interpretation unless they changed the signal.

## 2) YouTube liked videos / Watch Later — copied text

Liked surface URL: https://www.youtube.com/playlist?list=LL  
Watch Later surface URL: https://www.youtube.com/playlist?list=WL

### Liked videos — stable baseline excerpts

> 결혼식 축가 도중 모두가 빵터진 순간
> 케이팝있쥬?
> •
> 조회수 569만회 • 2주 전
> 2
> 4:11
> 지금 재생 중
> aruarian dance
> Nujabes
> •
> 조회수 2083만회 • 2년 전
> 3
> 3:12
> 지금 재생 중
> Older
> Sasha Alex Sloan
> •
> 조회수 6221만회 • 7년 전
> 4
> 3:07
> 지금 재생 중
> Emotional
> Eddie Benjamin
> •
> 조회수 17만회 • 5년 전
> 5
> 29:49
> 지금 재생 중
> Andrej Karpathy: From Vibe Coding to Agentic Engineering
> Sequoia Capital
> •
> 조회수 116만회 • 4주 전
> 6
> Stop Wasting Money on AI APIs: Use Cloudflare Queues
> Cloudflare Developers
> •
> 조회수 2.1만회 • 1개월 전
> 7
> 미토스 AI는 왜 전 세계 금융권을 긴급 소집하게 만들었나 / 오그랲 / 비디오머그
> 비디오머그 - VIDEOMUG
> •
> 조회수 44만회 • 1개월 전
> 8
> 3:48
> 지금 재생 중
> Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny)
> 개발자방16
> •
> 조회수 4.3천회 • 1개월 전
> 9

### Watch Later — stable baseline excerpts

> 14:06
> 지금 재생 중
> CLI vs MCP: How AI Agents Choose the Right Tool for the Job
> IBM Technology
> •
> 조회수 8.6만회 • 3주 전
> 25:49
> 지금 재생 중
> 그 이름도 유명한 어텐션, 이 영상만 보면 이해 완료! - DL6
> 3Blue1Brown 한국어
> •
> 조회수 7.9만회 • 9개월 전
> 6:31
> 지금 재생 중
> KV Cache: The Invisible Trick Behind Every LLM
> Adam Rosler
> •
> 조회수 2.8만회 • 3주 전
> 7:54
> 지금 재생 중
> AI시대 이렇게 연봉 2배 올리세요.
> 동기부여학과
> •
> 조회수 3.4천회 • 3주 전
> 12:45
> 지금 재생 중
> 최소 비용 최대 효과, 데스크 셋업은 이렇게 하세요
> 민이 아빠
> •
> 조회수 44만회 • 1개월 전
> State of the Claw — Peter Steinberger
> AI Engineer
> •
> 조회수 14만회 • 1개월 전
> 바이브코딩 디자인 풀코스 | 10분만에 AI 티 완전히 없애기
> Jay Choi | 인디해커 라이프
> •
> 조회수 1.7만회 • 1개월 전
> 이건 꼭 해보셔야 합니다! 애플 공식 통합된 클로드 코드, 나만의 아이폰 앱 10분만에 만들기
> 방구석 리뷰룸
> •
> 조회수 19만회 • 1개월 전
> IT 기술 지식 20분만에 시원하게 뻥 뚫어 드립니다. | 바이브코딩 하는 분 꼭 끝까지 들어보세요.
> 기술노트with 알렉
> •
> 조회수 13만회 • 1개월 전
> 메타 개발자가 육아하면서 부업 4개 돌리는 유일한 방법
> 커리어해커 알렉스
> •
> 조회수 3.4만회 • 1개월 전
> 데스크테리어 100개 본 유튜버가 알려주는 입문템 (2026ver.)
> 에이트 ATE
> •
> 조회수 9.3만회 • 2개월 전
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills)
> Grace Leung
> •
> 조회수 26만회 • 2개월 전
> 8:23
> 지금 재생 중
> 5 Primal Movements That Fix 95% of Your Problems
> Oscar Moves

Filtering note: both lists continued to show the already-known Karpathy / agentic engineering / Cloudflare Queues / Claude Code / managed agents / AI stack baseline. No newly promoted durable signal was inferred from these playlist surfaces.

## 3) Threads CDP — liked / activity / reposts / replies / profile

Surface URLs:
- https://www.threads.com/liked
- https://www.threads.com/activity
- https://www.threads.com/@ethan13917/reposts
- https://www.threads.com/@ethan13917/replies
- https://www.threads.com/@ethan13917

### Likes surface — copied text

Post URL: https://www.threads.com/@scientist_kekim/post/DY1oMbwCX-E
> scientist_kekim
> 3일
> K-문샷 AI과학자 PD 아스테로모프 이민형 의혹
> 1. 16세에 서울대 의과대학 연구원 입사?
> : 서울대 시스템면역의학연구소(홍천)임
> 2. 의대 과정 생략 후 의과학자 진학?
> : 연구원은 누구나 계약 가능
> 3. 공고 보고 연락했더니 면접을 봤다?
> : 유튜브에서는 질문이 있어서 연락했더니 채용
> 4. 면접 중에 IQ 테스트를 봤고 부학장님이 채용
> 5. '예비연구인턴'으로 문제적 남자 방송 출연
> 6. 경력증명서 '자체직원'을
> Research Scientist, Research Associate로 표기
> 7. 아스테로모프는 2025년 2월 창업. 3월에 50억 투자 받음
> news.nate.com/view…
> 1
> /
> 2
> news.nate.com
> '문제적 남자' 이민형, 만 17세에 서울대 의학연구소 연구원 합격 [TV캡처] : 네이트 연예
> 70
> 29

Post URL: https://www.threads.com/@yeon.gyu.kim/post/DY6KhE_kn2x
> yeon.gyu.kim
> 1일
> opus 4.8 이 나왔습니다.
> claude code 에는 ultracode 라는 기능이 나왔습니다.
> 네 작년 12월에, 저 혼자서는 작년 9월에 만들어서 쓰던 기능입니다 ㅇㅇ
> ultrawork + atlas 라는 이름으로 OmO 에 있습니다
> 작년 9월말에 시작한
> OmO 의 전신 프로젝트인
> '시지푸스' 라는 프로젝트의 컨셉이기도 했습니다
> github.com/code…
> 오늘 스타 60K 찍었네요
> 앤트로픽이 저 때문에 오픈코드 밴 시키고
> 이제 이름까지 비슷하게 가져가서 공식인증 받았네요
> 제가 그 호들갑 떤다고 싫어하시는 분들 계시던데
> 당신이 저였어도 호들갑 떨었을겁니다
> 기분 개좋음.
> 저는 옳은 길을 가고 있고,
> 여러분들은 써주시면 누리실 수 있습니다.
> 반년 먼저.
> 오늘 레이지 코덱스 출시하려고요.
> 이 워크플로우도 그대로 들어가있어요. ulw-loop 라는 기능으로요.
> 1
> /
> 2
> 74
> 9
> 5

Post URL: https://www.threads.com/@unclejobs.ai/post/DY6Ji9dCRGa
> unclejobs.ai
> AI Threads
> 1일
> 한국 맥 유저를 괴롭히는 게 있습니다. HWP 문서죠. 지독하게 불편합니다.
> 그런데 여기, 웹에서 그냥 열리는 오픈소스 한글 뷰어가 있어요. rhwp입니다. 설치도, 한컴 프로그램도 필요 없습니다. 브라우저에 파일을 던지면 끝이에요.
> 여기까지 들으면 오 괜찮네, 할 겁니다.
> 그런데 진짜 눈길이 가는 건 따로 있어요. 이걸 만든 edwardkim이 ClaudeCode랑 일한 방식입니다. 혼자서 10만 줄 넘는 코드를 짰는데, 그 방법에 이름까지 붙였거든요.
> 1
> /
> 10
> 54
> 18
> 9

### Activity surface — copied text

Surface URL: https://www.threads.com/activity  
URL note: activity rows often expose account/activity context more reliably than stable item permalinks; individual post URLs are available in the CDP cache when anchors were present.

> 추천
> 새로운 스레드
> 검색
> 활동
> 프로필
> 인사이트
> 저장됨
> 피드
> 수정
> 팔로잉
> 유령 게시물
> Threads AI
> Running Threads
> 더 많이 보기
> 더 보기
> 활동
> 모두
> god800913
> 1일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> choisungh
> 2일
> 정체가 뭐죠?ㅋㅋ
> 자본주의죠 뭐
> choisungh
> 2일
> 정체가 뭐죠?ㅋㅋ
> blrkexxon
> 님 외 15명
> 6일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> noongom_sydney
> 6일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> 받아들이고 인정요?
> zerohch0
> 6일
> 오 네스트도 추가되었네요
> ㅋㅋ 근데 출간이 너무 늦었네요 ㅠㅠ 다른 일 하다가
> zerohch0
> 6일
> 오 네스트도 추가되었네요
> coldred11
> 6일
> 회원님의 게시물에서 팔로우했습니다
> 맞팔로우
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> danny_gwangsick
> 님 외 5명
> 6일
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
> zerohch0
> 1주
> 아 저렇게 스레드해야하는건데
> scientist_kekim
> 1주
> 싸이렌ㅋㅋㅋㅋㅋㅋ
> choisungh
> 1주
> 전방 Gop 수색보다 육아가 힘듭니다. 한명기준으로
> eduitit_teacher
> 1주
> 회원님의 게시물에서 팔로우했습니다
> 팔로잉
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
> ma.chi.n.e
> 1주
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
> 네 알고 있습니다. 서비스 월간 트래픽이 십만 단위로 넘어가다보니(뷰 수보다 인당 용량이 더 많이 드는 서버라) 자체 인프라를 만들었고, 과금을 거의 제로에 수렴시키는 과정에서 관련 구조를 직접 구축하게 됐습니다. 덧붙이지면 스케일 아웃 자체가 클라우드의 절대적 정의라고 보진 않습니다. 구축도 어렵진 않구요. 가장 이성적인 형태의 댓글 같아서 답글 남깁니다.
> hyuni.hwp
> 님 외 9명
> 1주
> 스타벅스 사람 ㅈㄴ많았다.
> 불매운동은 커녕 그 앞에서 선거운동하고 있더라.
> 진짜 이게 먹힐거라고 생각하나?
> 그렇게 바보로 아는건가??ㅎㅎㅎ
> lee.seokjoo
> 님 외 1명
> 1주
> 대통령도 비공식이지만 매스컴이 있는자리에서 조장하는 말함
> yangyaong1
> 1주
> 회원님의 게시물에서 팔로우했습니다
> 맞팔로우
> 다른 건 내려두고 월드컵이니까 응원해달라
> 다른 건 제쳐두고 경제부터 먼저 살리자
> 다른 건 고려하지말고 건물부터 올리자
> 다른 건 상관 없으니 애 대학부터 보내자
> 우리나라는 과정과 토대를 항상 무시해 옴.
> 지금 한국에서 보여지는 문제점들은 대부분 이 원인에 기초한다고 봄. 성과만 우선시하고 짚고 넘어가야할 과정들은 무시하는 행태들.
> yangyaong1

### Own replies/profile/API-overlap note

The CDP replies/profile surfaces and Threads API repeated CK's existing on-demand/cloud-vs-virtualization, political/social commentary, and older AI-infra posts. They were preserved in the cache/raw, but not promoted.

## 4) Threads API — copied JSON-style excerpts

Official API transport: `graph.threads.net`  
Token handling: refreshed long-lived token first, confirmed `/v1.0/me`, no secrets logged.

### `/threads` — status 200, ok=True
- 2026-05-30T04:34:21+0000 — https://www.threads.com/@ethan13917/post/DY8xaS5E-vt
  > 상식이 통하는 당에 투표하고싶다.
  > 중도는 대부분 해당할듯
  > 근데 그치만 현존하는 당들은 해당사항이 없지.
  > 
  > 감성팔이에 취약한 울나라사람등한테 선택을 못받아 당선은 못될듯
- 2026-05-24T14:26:03+0000 — https://www.threads.com/@ethan13917/post/DYuYW2Sk5iN
  > media_type=REPOST_FACADE / text unavailable
- 2026-05-22T19:13:39+0000 — https://www.threads.com/@ethan13917/post/DYpvrjLk5gS
  > 다른 건 내려두고 월드컵이니까 응원해달라
  > 다른 건 제쳐두고 경제부터 먼저 살리자
  > 다른 건 고려하지말고 건물부터 올리자
  > 다른 건 상관 없으니 애 대학부터 보내자 
  > 
  > 우리나라는 과정과 토대를 항상 무시해 옴.
### `/replies` — status 200, ok=True
- 2026-05-30T14:49:41+0000 — https://www.threads.com/@ethan13917/post/DY931KKE8Ss
  > 솔직히 사귀고 싶다..
- 2026-05-30T04:24:19+0000 — https://www.threads.com/@ethan13917/post/DY8wQ2rk0dA
  > 사실 sns가 인민재판의 현장이죠 
  > 더군다나 그 대상들이 팔로워를 가지고 있다면 더더욱
  > 
  > 솔직히 앞뒤선후관계 다 안다고해서 한번 여론몰아졌으면 쉽게 바뀌지않고, 설사 판결이 났더라도 대중은 이미 냄비 식어서 관심도 없을듯
- 2026-05-29T02:27:44+0000 — https://www.threads.com/@ethan13917/post/DY5-IHtk8Vq
  > 현장에 답이 있다. 그렇지만 누구에게 답이 있는건 아니다. 끊임없이 질문하고 찾아가려는 사람에게 답이 주어진다. 엘리트코스를 가진 대표도 맞고 중요하지만 이게될까?라는 질문으로 현장에 나가서 검증하고 테스트하니 실마리가 나왔을것이다. 
  > 
  > 솔직히 로보틱스, ai 다 좋은데 아직 변화하지않은 레거시 환경이 대다수다. 이 회사처럼 실제로 도움이되는 제품이나 서비스 많이 나오면 좋겠다. 특히 우리나라에서
### `/mentions` — status 200, ok=True
- returned empty data list
### `/keyword_search?q=agent` — status 200, rows=5
- 2026-05-01T06:44:43+0000 — https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk — 4/4 지금 봐야 할 것: 
배포, 인증, 저장, GPU, 관측을 묶는가. 묶인 순간 에이전트는 기능이 아니라 사업이 된다.

참고: https://blog.cloudflare.com/agents-stripe-projects/ | https://openai.com/index/openai-on-aws/ | https://d
- 2026-05-01T06:40:51+0000 — https://www.threads.com/@ethan13917/post/DXyU1IFE7l5 — 3/4 보안과 비용

AWS는 AgentCore, OBO token exchange, managed agents를 밀고 있다. OpenAI도 Codex와 managed agents를 AWS에 얹는다. 결국 승부는 모델 성능이 아니라 runtime, security, billing을 누가 잡느냐로 간다.
### `/keyword_search?q=Claude Code` — status 200, rows=1
- 2026-04-22T07:44:02+0000 — https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww — 4/7 앱개발의 새 기본값

Claude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다.
### `/keyword_search?q=MCP` — status 200, rows=0
### `/keyword_search?q=Hermes` — status 200, rows=0
### `/keyword_search?q=Ceph` — status 200, rows=2
- 2026-04-22T07:44:39+0000 — https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx — 6/7 지금 잡아야 할 포지션

그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.
- 2026-04-22T07:43:49+0000 — https://www.threads.com/@ethan13917/post/DXbQ4Q3EyzB — 3/7 스토리지가 다시 주인공

Ceph가 계속 눈에 밟히는 건 우연이 아니야. 에이전트가 길게 돌고 데이터가 쌓일수록 병목은 금방 모델에서 저장소로 내려온다. 벡터 검색, 로그, 체크포인트, 아카이브를 끝까지 버티는 팀이 결국 운영권과 마진을 같이 가져간다.
### `/keyword_search?q=vLLM` — status 200, rows=0

## 5) GitHub Stars — copied text

Surface URL: https://github.com/stars  
Page title: `Your stars`

> STARRED REPOSITORIES
> tech-leads-club / agent-skills
> Starred
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
> TypeScript  4,482  388
> Starred
> smithersai / claude-p
> Starred
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.
> Zig  337  29
> Starred
> kelseyhightower / kubernetes-the-hard-way
> Starred
> Bootstrap Kubernetes the hard way. No scripts.
> 48,459  15,690
> Starred
> blader / humanizer
> Starred
> Claude Code skill that removes signs of AI-generated writing from text
> 21,584  2,048
> Starred
> code-yeongyu / not-claude-code-emulator
> Sponsor
> Starred
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
> TypeScript  410  93
> Starred
> AtomicBot-ai / atomic-hermes
> Starred
> The agent that grows with you
> Python  156  29,249
> Starred
> NousResearch / hermes-agent
> Starred
> The agent that grows with you
> Python  173,208  29,249
> Starred
> k2-fsa / OmniVoice
> Starred
> High-Quality Voice Cloning TTS for 600+ Languages
> Python  6,733  1,018
> Starred
> jung-wan-kim / memory-bank
> Starred
> TypeScript  71  100
> Starred
> first-fluke / oh-my-agent
> Sponsor
> Starred
> Portable, vendor-agnostic agent harness for project-specific skills, workflows, and agent teams aligned with your codebase, conventions, and engineering standards.
> TypeScript  1,035  119
> Starred

Canonical repo URLs visible in anchors:
- `tech-leads-club / agent-skills` — https://github.com/tech-leads-club/agent-skills
- `smithersai / claude-p` — https://github.com/smithersai/claude-p
- `kelseyhightower / kubernetes-the-hard-way` — https://github.com/kelseyhightower/kubernetes-the-hard-way
- `blader / humanizer` — https://github.com/blader/humanizer
- `code-yeongyu / not-claude-code-emulator` — https://github.com/code-yeongyu/not-claude-code-emulator
- `AtomicBot-ai / atomic-hermes` — https://github.com/AtomicBot-ai/atomic-hermes
- `NousResearch / hermes-agent` — https://github.com/NousResearch/hermes-agent
- `k2-fsa / OmniVoice` — https://github.com/k2-fsa/OmniVoice
- `jung-wan-kim / memory-bank` — https://github.com/jung-wan-kim/memory-bank
- `first-fluke / oh-my-agent` — https://github.com/first-fluke/oh-my-agent

Filtering note: the star list was mostly unchanged/reinforcement versus prior captures; `OmniVoice` and `memory-bank` have also appeared in older baselines, so no new entity page was created.

## 6) Google My Activity — copied text

Surface URL: https://myactivity.google.com/search-services/history/search  
Page title: `Google - 내 활동`

> Google 검색 서비스 기록
> Google 검색, 지도, 쇼핑, 항공편 검색, 호텔, 번역, 뉴스 전반에서 Google 검색 서비스 기록을 검토하고 관리하세요.
> 기록 저장
> 웹 및 앱 활동 사용
> 자동 삭제 옵션을 선택합니다.
> Google은 사용자의 개인 정보를 보호하고 보안을 유지합니다.
> 내 활동 인증 관리
> 전체
> Google 검색
> 지도
> Google 쇼핑
> 렌즈
> 뉴스
> 번역
> 삭제
> 오늘
> 일부 활동은 아직 표시되지 않을 수 있습니다.
> 검색
> 알림 1개
> 포함된 주제:
> 성과 관리
> 오전 7:48 • 세부정보
> 어제
> 검색
> 알림 5개
> 포함된 주제:
> 13형 MacBook Pro - 스페이스 그레이
> 신지
> 바이브 코딩
> 구글
> 날씨
> 오후 10:38 • 세부정보
> 5월 27일
> 검색
> 알림 6개
> 포함된 주제:
> 찌르기
> 구글 AI
> 아이폰
> GPT-5
> 안전
> 날씨
> 오후 10:48 • 세부정보
> 5월 26일
> 검색
> 알림 6개
> 포함된 주제:
> 샘 올트먼
> 주식
> 클로드
> 조지 호츠
> 날씨
> 오후 9:48 • 세부정보
> 검색
> draw io mcp 을(를) 검색했습니다.
> 오후 3:52 • 세부정보
> 검색
> draw.io 을(를) 검색했습니다.
> 오후 3:41 • 세부정보
> 검색
> 딥엑스 을(를) 검색했습니다.
> 오후 2:21 • 세부정보
> 검색
> deepx m1 을(를) 검색했습니다.
> 오후 2:20 • 세부정보
> 검색
> 한글 웹 을(를) 검색했습니다.
> 오전 11:42 • 세부정보
> 검색
> grok cursor 을(를) 검색했습니다.
> 오전 11:41 • 세부정보
> 검색
> what is oss 을(를) 검색했습니다.
> 오전 10:28 • 세부정보
> 검색
> esp32 디스플레이 을(를) 검색했습니다.
> 오전 10:27 • 세부정보
> 검색
> esp32 을(를) 검색했습니다.
> 오전 10:26 • 세부정보
> 5월 25일
> 검색
> 알림 5개
> 포함된 주제:
> 아마존 웹 서비스
> 앤트로픽
> 에픽게임즈
> 구글 AI
> 날씨
> 오후 10:26 • 세부정보
> 5월 24일
> 검색
> 알림 4개
> 포함된 주제:
> 오픈AI 코덱스
> 아이폰
> 러스트
> 오후 10:48 • 세부정보
> 5월 23일
> 검색
> 알림 6개
> 포함된 주제:
> 앤트로픽
> 챗GPT
> 퀘이사존
> 프로그래밍 언어
> 오픈AI
> 날씨
> 오후 11:02 • 세부정보
> 5월 22일
> 검색
> 알림 5개
> 포함된 주제:
> 컴퓨터 모니터
> 양컴
> 르노 SM6
> 챗GPT
> 날씨
> 오후 10:48 • 세부정보
> 검색
> proxmox vxlan 설정 을(를) 검색했습니다.
> 오후 5:10 • 세부정보
> 검색
> proxmox release notes 을(를) 검색했습니다.
> 오후 5:09 • 세부정보
> 5월 21일
> 검색
> claude 中转站 을(를) 검색했습니다.
> 오후 11:55 • 세부정보
> 검색
> use claude cheep in singapore node 을(를) 검색했습니다.
> 오후 11:55 • 세부정보
> 검색
> use claude in singapore node 을(를) 검색했습니다.
> 오후 11:54 • 세부정보
> 검색
> claude third party reverse in china to singapore 을(를) 검색했습니다.
> 오후 11:54 • 세부정보
> 검색
> Claude third party reverse in. china 을(를) 검색했습니다.
> 오후 11:53 • 세부정보
> 검색
> Claude third party reverse 을(를) 검색했습니다.
> 오후 11:53 • 세부정보
> 검색
> token monitoring dashboard 을(를) 검색했습니다.
> 오후 11:43 • 세부정보
> 검색
> token monitoring 을(를) 검색했습니다.
> 오후 11:42 • 세부정보

Filtering note: the only same-day visible topic was `성과 관리`; yesterday's visible topic bundle included MacBook Pro, 바이브 코딩, Google, and weather. Recent older rows around `draw io mcp`, `deepx m1`, `grok cursor`, and `esp32` were retained as raw context but not treated as new today.

## 7) Claude / ChatGPT recents — copied text

Claude URL: https://claude.ai/new  
ChatGPT URL: https://chatgpt.com/

### Claude recent-title surface

> 새 채팅
> 검색
> 채팅
> 프로젝트
> 아티팩트
> 사용자 지정
> 코드
> 디자인
> 최근 항목
> 
> 엔지니어 커리어 최대치 현실적 평가
> 엔지니어 커리어 최대치 현실적 평가
> 엔지니어 경력 발전 방향
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> 기술 비교 분석의 공정성 문제
> 아내가 음식을 권할 때 대처법
> 아내가 음식을 권할 때 대처법
> 아내의 정신 건강 걱정
> 아내의 정신 건강 걱정
> AI 인프라 및 AIOps 사업 방향 검토
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> k3s 3노드 클러스터 테스트 방법
> 버튼 지분 받는 일반적인 규모
> 버튼 지분 받는 일반적인 규모
> Virton과 AI agent의 인프라 자동화 시너지

### ChatGPT recent-title surface

> 콘텐츠로 건너뛰기
> 안
> 채팅 기록
> ChatGPT
> 새 채팅
> 채팅 검색
> 라이브러리
> 앱
> Codex
> 더 보기
> 프로젝트
> 새 프로젝트
> 사업
> virton
> ai learning
> ai 인프라
> 최근
> 치실 영어 번역
> 앵무새 영어 단어
> Claude Code 사용 제한
> Measuring Token Usage
> Nginx HTTPS와 OpenSSL
> 링크드인 임프레션 멤버 리치드
> SSH 공개키 인증 문제
> React forwardRef 타입오류
> CJS MJS 차이
> Ceph OSD 장애 분석
> 창업자 자질 보완 방법
> Semiconductor ETFs US
> Using Claude Plugins
> bcrypt 보안성과 심사
> CI 도커 파일 오류
> MCP 서버 만들기
> AI로 서버 구성도 그리기
> 공공 보안적합성 vs ISMS-P
> AI 하드웨어 비교 분석
> Proxmox 재부팅 로그 분석
> Proxmox SSH 비밀번호 없이 접속
> Proxmox VE 9.2 업데이트
> Proactive 정의 및 예시

Filtering note: both surfaces reinforced known work lanes — AI infra/AIOps, Renault/agent control, private cloud-native platforms, token monitoring, Claude Code limits/plugins, Ceph/Proxmox, MCP, and infra diagrams — without a new durable wiki branch.

## 8) X likes/profile — copied text

Surface URL: https://x.com/ckethan0429/likes  
Page title: `(21) Profile / X`

> To view keyboard shortcuts, press question mark
> View keyboard shortcuts
> 20+
> Profile
> See new posts
> This account doesn’t exist
> Try searching for another.
> Trending now
> What’s happening
> 미야오 내일 컴백 띠로리띠로리로리로
> 당신은 지금부터 띠로리만 생각나게 됩니다. 하나 둘 셋 띠로리~
> Promoted by MEOVV
> Trending in South Korea
> #영재야_생일빵은_볼찌빵
> Politics · Trending
> James Talarico
> Trending in South Korea
> 남자의 악마
> Show more
> Who to follow
> Just Jin
> @wayofjin
> Follow
> 상혁 Jaden Park
> @fkemgod
> Follow
> usay.eth
> @usay_eth
> Follow
> Show more
> Terms of Service
> |
> Privacy Policy
> |
> Cookie Policy
> |
> Accessibility
> |
> Ads info
> |
> More
> © 2026 X Corp.

Filtering note: X again produced an unusable `This account doesn’t exist` profile/likes page in the live target, so no X signal was inferred.

## Filtering notes

- Strongest fresh rows: YouTube Claude Opus 4.8 / long-running tasks, agent observability, enterprise-agent failure modes, one-person AI business with Claude, fine-tuning; Threads liked Lazy Codex / `ulw-loop` and ClaudeCode-assisted `rhwp`; Google `성과 관리` as weak same-day history; GitHub Project Pods as scheduled maintainer context.
- Repeated/reinforcement rows: GitHub Stars, Watch Later, Liked videos, Threads API keyword hits, Claude/ChatGPT recents, and most Google history.
- Excluded from interpretation: sports, entertainment, politics/social chatter, generic lifestyle rows, and unusable X target output.

## Why this raw exists

This file preserves the 2026-05-31 08:00 browser/API evidence for Honcho routing. The correct route for this pass is `raw_only`: save the evidence and report fresh feed rotations, but do not create a new durable wiki page or restamp the existing managed-agent / AI-infra thesis.
