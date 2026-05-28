---
source: live Chrome CDP + Threads API + browser-visible surfaces
date: 2026-05-28
run: "19:00"
captured_at: 2026-05-28 19:00 KST
route_hint: raw_only
route_confidence: 0.84
route_reason: Afternoon social/browser surfaces added fresher YouTube rotations around Codex-vs-Claude-Code, Claude Code, HBM/AI semiconductors, AI security, Hermes/Agent OS, and Antigravity, plus Threads activity/reply/API evidence; however all materially reinforce the existing AI-agent / infra / operator / investing lanes already captured in the same-day 08:00 and 11:00 runs.
routing:
  route: raw_only
  confidence: 0.84
  reasons:
    - Same-day 08:00 social run already captured Anthropic Korea, AgentOps, MCP/OpenClaw/LangSmith, private-cloud/on-demand, and ChatGPT/Claude infra recents.
    - Same-day 11:00 new-target run already absorbed the strongest durable control-plane deltas into existing managed-agent / AI-infra pages.
    - The 19:00 pass mostly adds rotated examples, lower-signal social/activity rows, and repeated baseline rows; no new durable branch crossed the promotion threshold.
  signal_tags:
    - threads
    - threads-api
    - youtube
    - github-stars
    - google
    - chatgpt
    - claude
    - codex
    - claude-code
    - ai-infra
    - semiconductors
    - raw-only
---

# Raw Transcript — Interest Signal Collection 19:00 2026-05-28

Source: live Chrome CDP / Threads API / browser-visible surfaces  
Date: 2026-05-28  
Account: `ethan13917` where visible

## Live session notes
- Read the top-level wiki `README.md` first and followed the raw → Honcho triage → durable-promotion workflow.
- Idempotency check found same-day `08:00` and `11:00` raw transcripts, but no `interest-signal-collection-19-00-2026-05-28.md`, so this was treated as the first afternoon social run for today.
- Live Chrome CDP at `http://127.0.0.1:9222` was reachable. Fresh page targets were opened per surface and read with `Runtime.evaluate`.
- Threads used both browser/CDP surfaces (`liked`, `activity`, `reposts`, `replies`, `profile`) and the official Threads API for own threads/replies/mentions/keyword snapshots. The token was refreshed successfully before API collection.
- Baselines compared: `raw/transcripts/interest-signal-collection-08-00-2026-05-28.md`, `raw/transcripts/interest-signal-collection-11-00-2026-05-28.md`, and same-day `log.md` entries.
- Routing decision: `raw_only`; this pass preserves evidence but does not create or update a durable concept page beyond the Honcho audit/log entry.
- Disposable capture caches:
  - `wiki/.cache/interest-signal-collection-19-00-2026-05-28.json`
  - `wiki/.cache/threads-api-collection-19-00-2026-05-28.json`

## 1) GitHub Stars — copied text
Page title:
- `Your stars`

Visible text:
> Skip to content
> ckethan0429
> Type / to search
> User navigation
> Overview
> Repositories
> 45
> (45)
> Projects
> Packages
> Stars
> 18
> (18)
> Your Stars
> Browse your starred repositories and topics
> All stars
> All repositories
> 0
> Your repositories
> Others’ repositories
> Topics
> Filter by languages
> 1
> JavaScript
> 6
> Python
> 7
> TypeScript
> HTML
> Zig
> Jump to a friend
> Sort: Recently starred
> STARRED REPOSITORIES
> tech-leads-club / agent-skills
> Starred
> The secure, validated skill registry for professional AI coding agents. Extend Antigravity, Claude Code, Cursor, Copilot and more with absolute confidence.
> TypeScript  4,465  386
> smithersai / claude-p
> Drop-in replacement for `claude -p` that drives the interactive Claude Code TUI inside an in-process zmux PTY session.
> Zig  328  27
> kelseyhightower / kubernetes-the-hard-way
> Bootstrap Kubernetes the hard way. No scripts.
> 48,419  15,672
> blader / humanizer
> Claude Code skill that removes signs of AI-generated writing from text
> 21,300  2,015
> code-yeongyu / not-claude-code-emulator
> Sponsor
> ULTRA DANGEROUS CLAUDE CODE EMULATOR; MAKING THE API REQUEST IDENTICAL TO CLAUDE CODE
> TypeScript  410  93
> AtomicBot-ai / atomic-hermes
> The agent that grows with you
> Python  154  28,606
> NousResearch / hermes-agent
> Python  170,901  28,606

Filtering notes:
- Visible starred repo set still matches the 08:00 same-day baseline: `agent-skills`, `claude-p`, `kubernetes-the-hard-way`, `humanizer`, `not-claude-code-emulator`, `atomic-hermes`, `hermes-agent`, `OmniVoice`, `memory-bank`, and `oh-my-agent`.
- No new starred repo was surfaced in this pass.

## 2) Threads — CDP likes / activity / reposts / replies / profile
Page titles:
- Likes: `좋아요 • Threads`
- Activity: `활동 • Threads`
- Reposts: `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`
- Replies: `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`
- Profile: `씨케이님(@ethan13917) • Threads, 자유로운 소통 공간`

### Likes surface — copied text
> gymcoding
> ClaudeCode
> 속보 🚨
> Claude 만든 Anthropic이
> 서울에 옵니다.
> 아시아 3번째 거점, 한국.
> 대표는 최기영 (전 Snowflake 한국 GM).
> 본사 임원진, 수주 내 방한.
> 이유 하나.
> "한국인은 클로드를 3.5배 더 쓴다"
> 남 얘기 아니에요.
> ---
> AgentOps
> 21시간
> 개인적으로
> 에이전틱 엔지니어링 = 소프트웨어 엔지니어링
> 이라고 생각하는데요,
> 이 분야의 명저를 들고와봤습니다.
> 바이브코딩을 더 잘하고싶은 분이라면 누구나 읽어볼만한 책입니다.
> ""프로그래밍과 소프트웨어 엔지니어링의 가장 큰 차이는 시간, 확장, 실전에서의 트레이드오프, 이렇게 세 가지라고 생각합니다. 소프트웨어 엔지니어링 프로젝트에서 엔지니어는 시간의 흐름과 언젠가 변경될 가능성에 더 신경 써야 합니다.""
> 76
> 3
> 4

### Activity surface — copied text
> 님 외 14명
> 3일
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> noongom_sydney
> 받아들이고 인정요?
> zerohch0
> 오 네스트도 추가되었네요
> ㅋㅋ 근데 출간이 너무 늦었네요 ㅠㅠ 다른 일 하다가
> coldred11
> danny_gwangsick
> 님 외 5명
> 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다.
> 아 저렇게 스레드해야하는건데
> scientist_kekim
> 싸이렌ㅋㅋㅋㅋㅋㅋ
> choisungh
> 전방 Gop 수색보다 육아가 힘듭니다. 한명기준으로
> eduitit_teacher
> 5일
> 국가가 외교를 잘해서 반도체 실크로드를 깔아줘? 엔지니어를 국가주도 육성을해? 기업이 투자활성화 자사주소각 등의 자본주의가 활성화에 도움되면 세금 감면 정책을 펴? 반도체 컨소시움을 주도해? 낫띵
> aje.travel
> 꼭 봐야하는 Andrej Karpathy의 포스팅입니다.
> 최근 아주 흥미로운 제안을 했습니다. AI에게 마지막에 "답변을 HTML로 구조화해줘"라는 문구를 붙여보라는 것입니다.
> 보통 우리는 AI가 주는 텍스트를 채팅창 안에서 읽습니다. 하지만 HTML로 답변을 받으면 그 내용을 복사해서 브라우저로 볼 수 있습니다. 이렇게 하면 단순한 글자 뭉치가 아니라, 깔끔한 레이아웃, 표, 심지어 클릭이 가능한 요소들이 포함된 ‘웹페이지’ 형태의 결과물을 얻게 됩니다. 슬라이드 쇼 형태로 결과를 보여달라고 요청하는 것도 비슷한 맥락에서 매우 성공적이었다고 밝히고 있죠.
> 이 방법의 핵심은 ‘읽는 에너지’를 줄이는 것입니다. 채팅창의 긴 텍스트는 눈이 쉽게 피로해지지만, 잘 짜인 HTML 문서는 우리가 평소 웹 서핑을 하듯 정보를 훑어보기 훨씬 편하기 때문입니다.
> 회원님의 스레드 조회수가 100회가 넘었습니다.
> 마누스 진짜 웃긴다 환불은 해주고 밴은 안풀어주네.
> 자꾸 시간이랑 히스토리묻는데 그냥 어제 마쫀쿠 대란에 결제한거 밖에 없다고!
> @manus_kr
> ulysses31_forever
> 마누스 불매운동!!!
> babodlhunter
> 과연 그럴까? 내가 너무 맞는말을 해서 맥락얘기는 이제 안하나보군
> ㅇㅇ 훌륭해
> 다행입니다 !! 한번 2년동안 잘써보시죠 ㅎㅎ 참고사항도 적어주셔서 감사해요
> godo_ri85
> 아주좋은 아이디어입니다. 온나라니 나이스니 다 연동해서 음성메모로 남겨야합니다
> g.d.m_dumpling
> 3주
> 설문 결과가 준비되었습니다
> 142
> 13
> agent.choi
> api나 자동화가 압도적입니다.
> _temp07
> 님 외 2명
> 의미있는 바이브코딩을 하려면 하면서 개발지식을 쌓는것이 좋을 것 같습니다. 아무래도 ‘Node.js 교과서’ 정도가 좋겠죠?🥳
> 한국에서 총신이 되려하는 사람의 기대값이 점점 나빠지고 다른 선택지도 많으니까
> cornholio83
> 바이브 코딩으로 시작한 사람이라면 안볼껍니다. 책한권 완독하고 잘쓰는 단계까지 갈려면 이게 1~2개월에 끝낼수 있는 분량이 아니죠
> organic___english
> 부탁드려요~
> borel.chu
> korean.thiel

### Replies surface — copied text
> 답글
> 미디어
> 리포스트
> chu_marketer
> 1일
> 그러면 나 군대 왜갔음?
> 694
> 170
> 24
> 16
> 8시간
> 조중동맹????
> zerohch0
> 저작권 침해
> 3일
> 오늘 감사하게도 한 분이 책 epub 파일이 불법 공유되고 있다는 소식을 알려주셨다. 완전 모르고 있었는데... 일단 저작권 침해 신청 넣고 출판사에도 알리긴 했는데, 이미 다운로드 수 1200회... 1년에 5천권도 팔리지 않는 책이라 씁쓸하긴 하다. 그나마 다행인 건 다음 주에 내 새 개정판이 또 나온다는 거!
> 1
> /
> 2
> 29
> 10
> 오 네스트도 추가되었네요
> ma.chi.n.e
> 4일
> 짬에서 나오는 바이브코딩입니다. 제가 구축한 건 클라우드가 아니라 온프레미스가 맞습니다. 우선 제 언행이나 태도에 불편함을 느끼신 분들께 먼저 사과드립니다.
> 그리고 아래는 지난 시간 생각을 적어보았는데요. 불편하시다면 제 사과만 받아주시기 바랍니다.
> 101
> 70
> 4
> 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.
> 저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다
> 15
> 이런 반응 나올 줄 알았다 ㅋㅋ 연매출 6억이든 몇억이든 틀린 말이 맞는 말로 변하지 않음.
> 그리고 자꾸 뭐 대단한 거 개발한 것마냥 구조 공개를 안 하는데 지피티한테 물어봐서 답변나온 서버 구조는 웬만한 서버 개발자들은 들으면 그냥 다 금방 따라 구현할 수 있다. P2P든 온프렘이든 클라우드든.
> 그냥 자신이 용어 정의를 잘못 이해해서 잘못 적었으면 인정하고 넘어가면 끝인데, 끝까지 우기려고 하니까 말이 점점 길어지고 꼬이고 이상해지는 것임.
> @ma.chi.n.e님에게 남긴 답글
> 5. 내 발언이 불편하면 너도 뭔갈 이루고 와라.
> 참고로 나는 내가 만든 툴로 연 매출 6억을 찍었다. 25년 과세표준이 전부인 신설 회사다. 큰 회사냐 물으면 그건 아니지만 작년 바이브코딩으로 시작해서 수익화까지 만든 회사임.
> 난 내가 직접 개발하고 호스팅하고 자원도 내가 설계한다. 운영도 기획도 내가 직접 한다. 그리고 수익도 낸다. 회사에 10년 이상 고연차 개발자도 있고 지시가 아니라 협업을 함. 나도 할 줄 아니까.
> 그러니 최소한 나와 유치한 용어싸움 할거면 이룬 걸 들고 와라. 난 내 인프라에서 결과를 내고 스스로 증명하고 만든 개념들을 그냥 스레드에 올리는 것일 뿐이다.
> 5
> 6
> 126
> 63
> 아 저렇게 스레드해야하는건데

### Profile surface — copied text
> 답글
> 미디어
> 리포스트
> 새로운 소식이 있나요?
> 게시
> 5일
> 다른 건 내려두고 월드컵이니까 응원해달라
> 다른 건 제쳐두고 경제부터 먼저 살리자
> 다른 건 고려하지말고 건물부터 올리자
> 다른 건 상관 없으니 애 대학부터 보내자
> 우리나라는 과정과 토대를 항상 무시해 옴.
> 지금 한국에서 보여지는 문제점들은 대부분 이 원인에 기초한다고 봄. 성과만 우선시하고 짚고 넘어가야할 과정들은 무시하는 행태들.
> bythepulse
> ✅ “다 축구인의 잘못입니다”… 눈물로 호소한 차범근의 부탁
> 차범근 전 대표팀 감독이 인터뷰 도중 눈물을 보이며 대표팀을 향한 응원을 부탁했다.
> 최근 대표팀은 평가전 결과와 경기력, 그외 외부적 잡음을 두고 팬들의 비판을 받고 있는 상황이다.
> 차범근 감독은 현재 대표팀 전력에 대해 “8강까지 충분히 갈 수 있는 실력을 가지고 있다”고 평가하면서도, 이야기 도중 감정을 숨기지 못했다.
> 그는 눈물을 보이며 국민들에게 직접 말을 전했다.
> “국민 여러분 죄송합니다. 다 우리의 잘못입니다. 축구인들의 잘못입니다.”
> “대회가 얼마 남지 않았으니까 다른 건 조금 내려놓고 우리 대표팀을 응원해 주시면 감사하겠습니다. 지금 이 시점에 꼭 필요한 부분입니다”라고 말했다.
> 1972년 대표팀 데뷔, 선수의 눈부신 활약과
> 직접 감독으로서 지휘했던 한국 축구의 전설이자 역사 차범근
> 일흔을 넘긴 그의 대표팀을 향한 걱정과 책임감이, 결국 눈물의 호소로 이어졌다.
> • JTBC 인터뷰 발췌
> 108
> 40
> 3
> 1
> 6일
> 스타벅스 사람 ㅈㄴ많았다.
> 불매운동은 커녕 그 앞에서 선거운동하고 있더라.
> 진짜 이게 먹힐거라고 생각하나?
> 그렇게 바보로 아는건가??ㅎㅎㅎ
> 10
> 7
> 5.18도 다시.
> 5.18 역사적인 비극이야.
> 광주 시민, 억지로 끌려온 군인들이 안타깝게 희생된 사건이고 그 가족들은 아직도 고통스러워하지. 책임을 져야할 정치인들은 정작 책임도 안지고. 나는 그렇기에 피해자들은 더욱이 목소리를 내고 진상 조사를 해야한다고 봐. 왜? 그들의 죽음이 헛되이지 않기 위해서.
> 지금 과거 그 당시 외신, 정부기관들의 자료들에 대해 조금이라도 관심을 가지면 얼마나 선동당하고 있는지 알게 된다.
> 요새 사회 행태는 다양한 생각 절대 못하게 만들어 놓는 구조임. 다른 의견 (틀린 의견 아님) 나오면 거의 매장시키는 분위기.
> 나락이 너무 많고 당연하게 여겨지는 분위기.
> 그걸 무서워서 점점 닫는 입과 행동
> 진짜 공산주의
> 6
> 신세계가 잘못했지.
> 근데 정부까지 나서서 불매운동 하나?
> 이제 뭐하나라도 정부 마음에 안들면 이슈 하나 생길때마다 나락 보내려고 하는거 같아.
> 이거 멸공때문이지?
> 9
> 2026-05-12
> 마누스 진짜 웃긴다 환불은 해주고 밴은 안풀어주네.
> 자꾸 시간이랑 히스토리묻는데 그냥 어제 마쫀쿠 대란에 결제한거 밖에 없다고!
> @manus_kr
> 2

Filtering notes:
- Likes repeated the same Anthropic Korea / AgentOps rows already captured at 08:00.
- Activity/replies added more visible context around private infra semantics, HTML-formatted AI answers, Manus support/friction, school-system automation, and API/automation, but these are reinforcement or low-signal social rows rather than a new durable branch.

## 3) Threads API — copied JSON-derived rows
Refresh/profile:
> refresh_ok=True status=200
> me_ok=True username=ethan13917

### `/threads`
> 2026-05-24T14:26:03+0000 | ethan13917 |  | https://www.threads.com/@ethan13917/post/DYuYW2Sk5iN
> 2026-05-22T19:13:39+0000 | ethan13917 | 다른 건 내려두고 월드컵이니까 응원해달라 다른 건 제쳐두고 경제부터 먼저 살리자 다른 건 고려하지말고 건물부터 올리자 다른 건 상관 없으니 애 대학부터 보내자   우리나라는 과정과 토대를 항상 무시해 옴. 지금 한국에서 보여지는 문제점들은 대부분 이 원인에 기초한다고 봄. 성과만 우선시하고 짚고 넘어가야할 과정들은 무시하는 행태들. | https://www.threads.com/@ethan13917/post/DYpvrjLk5gS
> 2026-05-22T05:35:08+0000 | ethan13917 | 스타벅스 사람 ㅈㄴ많았다. 불매운동은 커녕 그 앞에서 선거운동하고 있더라. 진짜 이게 먹힐거라고 생각하나? 그렇게 바보로 아는건가??ㅎㅎㅎ | https://www.threads.com/@ethan13917/post/DYoSAgKE2yN
> 2026-05-21T13:54:35+0000 | ethan13917 | 5.18도 다시. 5.18 역사적인 비극이야. 광주 시민, 억지로 끌려온 군인들이 안타깝게 희생된 사건이고 그 가족들은 아직도 고통스러워하지. 책임을 져야할 정치인들은 정작 책임도 안지고. 나는 그렇기에 피해자들은 더욱이 목소리를 내고 진상 조사를 해야한다고 봐. 왜? 그들의 죽음이 헛되이지 않기 위해서.  지금 과거 그 당시 외신, 정부기관들의 자료들에 대해 조금이라도 관심을 가지면 얼마나 선동당하고 있는지 알게 된다. | https://www.threads.com/@ethan13917/post/DYmmXwwE5wC
> 2026-05-21T13:34:40+0000 | ethan13917 | 요새 사회 행태는 다양한 생각 절대 못하게 만들어 놓는 구조임. 다른 의견 (틀린 의견 아님) 나오면 거의 매장시키는 분위기.   나락이 너무 많고 당연하게 여겨지는 분위기. 그걸 무서워서 점점 닫는 입과 행동 진짜 공산주의 | https://www.threads.com/@ethan13917/post/DYmkF3VE68Q
> 2026-05-21T13:31:33+0000 | ethan13917 | 신세계가 잘못했지. 근데 정부까지 나서서 불매운동 하나? 이제 뭐하나라도 정부 마음에 안들면 이슈 하나 생길때마다 나락 보내려고 하는거 같아. 이거 멸공때문이지? | https://www.threads.com/@ethan13917/post/DYmjvAqEzl0
> 2026-05-17T13:45:27+0000 | ethan13917 |  | https://www.threads.com/@ethan13917/post/DYcSJWSk9nX
> 2026-05-13T04:12:10+0000 | ethan13917 |  | https://www.threads.com/@ethan13917/post/DYQ9W8cE5aZ
> 2026-05-12T03:55:49+0000 | ethan13917 |  | https://www.threads.com/@ethan13917/post/DYOWsXiE9Lj
> 2026-05-12T03:23:45+0000 | ethan13917 | 마누스 진짜 웃긴다 환불은 해주고 밴은 안풀어주네. 자꾸 시간이랑 히스토리묻는데 그냥 어제 마쫀쿠 대란에 결제한거 밖에 없다고! @manus_kr | https://www.threads.com/@ethan13917/post/DYOTBdbE4ux

### `/replies`
> 2026-05-28T01:20:33+0000 | ethan13917 | 조중동맹???? | https://www.threads.com/@ethan13917/post/DY3RpNLkxyH
> 2026-05-24T14:24:50+0000 | ethan13917 | 오 네스트도 추가되었네요 | https://www.threads.com/@ethan13917/post/DYuYN60k1CJ
> 2026-05-24T04:11:53+0000 | ethan13917 | 받아들이고 인정하는 모습이 보기 좋습니다. 개발자보다 인프라 엔지니어가 사실 더 보수적이고 개념 충돌에 대해서 예민합니다.  저도 클라우드와 가상화방식의 차이에 대해서 많이 고민했던 사람으로서 가장 큰 차이는 온디맨드(on-demand)인 것 같습니다. 사용자는 컴퓨팅 리소스에 대해서 고민할필요없이 내가 필요한 리소스만 필요할때 쓰고 반납하는 개념인데 이 개념으로 접근하면 오해살일은 없으실 듯 합니다 | https://www.threads.com/@ethan13917/post/DYtSEi9k5rf
> 2026-05-23T13:39:31+0000 | ethan13917 | 아 저렇게 스레드해야하는건데 | https://www.threads.com/@ethan13917/post/DYruPHaEybZ
> 2026-05-23T13:12:55+0000 | ethan13917 | 싸이렌ㅋㅋㅋㅋㅋㅋ | https://www.threads.com/@ethan13917/post/DYrrMSJk4i0
> 2026-05-23T12:26:59+0000 | ethan13917 | 전방 Gop 수색보다 육아가 힘듭니다. 한명기준으로 | https://www.threads.com/@ethan13917/post/DYrl74RExpK
> 2026-05-23T07:34:34+0000 | ethan13917 | 클라우드를 개발했단건 스케일 아웃이 가능한 서버와 스토리지를 모두 갖췄다고 한건데 맞을까요? 그에 따른 멀티테넌트와 과금체계는 당연히 포함되고 가용성도 확보되어야 하구요. 단순히 가상화 서버만 둔게 클라우드가 아닙니다. | https://www.threads.com/@ethan13917/post/DYrEeIGk3FL
> 2026-05-22T12:09:30+0000 | ethan13917 | 니들이 누구야? 너어딘데 난 개인이오 | https://www.threads.com/@ethan13917/post/DYo_I6Xk_Qs
> 2026-05-22T12:07:51+0000 | ethan13917 | ㅋㅋㅋㅋ선동을 왜해.. 합성사진 올려서 선동되면 상대가치도 없다 | https://www.threads.com/@ethan13917/post/DYo-81dkx7p
> 2026-05-22T10:37:24+0000 | ethan13917 | 대통령도 비공식이지만 매스컴이 있는자리에서 조장하는 말함 | https://www.threads.com/@ethan13917/post/DYo0mXvE67-

### `/mentions`
> mentions: []

### `keyword_search` snapshots
`agent`:
> 2026-05-01T06:44:43+0000 | ethan13917 | 4/4 지금 봐야 할 것:  배포, 인증, 저장, GPU, 관측을 묶는가. 묶인 순간 에이전트는 기능이 아니라 사업이 된다.  참고: https://blog.cloudflare.com/agents-stripe-projects/ | https://openai.com/index/openai-on-aws/ | https://developers.googleblog.com/agents-cli-in-agent-platform-create-to-production-in-one-cli/ | https://www.threads.com/@ethan13917/post/DXyVR0ek1Rk
> 2026-05-01T06:40:51+0000 | ethan13917 | 3/4 보안과 비용  AWS는 AgentCore, OBO token exchange, managed agents를 밀고 있다. OpenAI도 Codex와 managed agents를 AWS에 얹는다. 결국 승부는 모델 성능이 아니라 runtime, security, billing을 누가 잡느냐로 간다. | https://www.threads.com/@ethan13917/post/DXyU1IFE7l5
> 2026-05-01T06:40:42+0000 | ethan13917 | 2/4 생산성의 본체  Google은 Agents CLI, TPU, Gemini Embedding 2, 에이전트 코스를 한 줄로 묶었다. 메시지는 분명하다. 로컬 개발→프로덕션 전환을 빠르게 만드는 도구가 곧 플랫폼이다. | https://www.threads.com/@ethan13917/post/DXyUz8tk4BJ
> 2026-04-21T03:24:04+0000 | ethan13917 | 에이전트 생산성의 진실  memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다. | https://www.threads.com/@ethan13917/post/DXYOXEPk5SM
> 2026-04-20T17:47:45+0000 | ethan13917 | 4/4 What's next  다음 병목은 프롬프트가 아니다. 라우팅, 복구, 역할 분리, 도구 오케스트레이션이다. 에이전트를 잘 만드는 팀은 이제 모델보다 운영체계를 먼저 설계한다. 원문: https://www.anthropic.com/engineering/managed-agents | https://www.threads.com/@ethan13917/post/DXXMWQ2ExXi

`Claude Code`:
> 2026-04-22T07:44:02+0000 | ethan13917 | 4/7 앱개발의 새 기본값  Claude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다. | https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww

`MCP`:
> keyword_MCP: []

`Hermes`:
> keyword_Hermes: []

`Codex`:
> 2026-05-01T06:40:51+0000 | ethan13917 | 3/4 보안과 비용  AWS는 AgentCore, OBO token exchange, managed agents를 밀고 있다. OpenAI도 Codex와 managed agents를 AWS에 얹는다. 결국 승부는 모델 성능이 아니라 runtime, security, billing을 누가 잡느냐로 간다. | https://www.threads.com/@ethan13917/post/DXyU1IFE7l5
> 2025-09-09T04:59:21+0000 | ethan13917 | 'AI를 OS로 바라본다'는 좋은 관점이고 많이 하는 이야기들이지만, 그 위에 어플리케이션, 서비스를 만드는 행위는 과거 플랫폼이 못했다면 지금 거대모델의 회사는 '그것'조차 잘하고 수많은 스타트업을 망하게 하고 있다는 것이 팩트임. 구글의 notebooklm, 나노바나나, openai codex 등 그런것임. 하지만 글의 내용의 따라 개발자라면 도메인 지식, 비즈니스마인드, 아키텍처 디자인을 반드시 갖추어야 된다고 생각. | https://www.threads.com/@ethan13917/post/DOXnNUhkhE1

Filtering notes:
- API `/mentions` returned an empty dataset.
- API `/threads` and `/replies` mostly repeated older own-post/reply evidence; the freshest reply was `조중동맹????`, which is not a durable interest signal.
- Keyword hits for `agent`, `Claude Code`, and `Codex` were older CK-authored rows and reinforce the existing managed-agent/runtime/security/billing lane.

## 4) YouTube — subscriptions / Watch Later / likes
Page titles:
- Subscriptions: `구독 - YouTube`
- Watch Later: `{'__timeout__': 'document.title'}`
- Liked videos: `{'__timeout__': 'document.title'}`

### Subscriptions feed — copied item text
> 12:51 / 클코보다 코덱스가 더 좋아 보이는건 환각일까? / 코드팩토리 / 조회수 623회 / • / 1시간 전
> 1:27:58EP 98. AI가 실행하는 시대, 인간에게 남는 건 '의도' (Hashed 김서준 대표)노정석조회수 1.3만회 • 1일 전
> 11:02사업에서 AI 제대로 쓰는 법: 95%가 놓치는 ChatGPT 활용법 5가지동기부여학과조회수 3.8천회 • 11시간 전
> 라이브 / 라이브 / Live on 5/28 (목) 중국판 ASML 나오면반도체 판 뒤집힙니다 (권석준 교수 / 성균관대 화공과) / 언더스탠딩 : 세상의 모든 지식 / 242명 시청 중
> 5:57 / Claude Code FREE, here’s how… / Julian Goldie SEO / 조회수 5회 / • / 3분 전
> 25:10 / “HBM만 보면 끝납니다” AI 반도체 시장, 결국 '여기'서 갈릴겁니다 (강정수 박사 1부) / 머니인사이드 / 조회수 42회 / • / 3분 전
> 6:15:55 / Figma – Full Course 2026 / freeCodeCamp.org / 조회수 211회 / • / 3분 전
> 1:03:15 / What Maintainers need to know about Open Source Licensing, SBOMs and Security / GitHub / 조회수 426회 / • / 스트리밍 시간: 13시간 전
> 8:31 / AI 해킹 시대, 정부는 뭘 해야 하나? [강병탁의 진짜 보안이야기@토크아이티, 강병탁 대표 / AI스페라] #세미남866 / 토크아이티(Talk IT) / 조회수 4회 / • / 1시간 전
> 예정 / AWS Backups Optimization | The Keys to AWS Optimization | S17 E6 / AWS Events / 예정일: 26. 5. 29. 0:00 / 알림 받기
> 8:02 / NEW Minimax M3 Leaks are INSANE / Julian Goldie SEO / 조회수 240회 / • / 2시간 전
> 10:58 / Hermes + Agent OS Just Changed AI Agents Forever! / Julian Goldie SEO / 조회수 480회 / • / 3시간 전

### Watch Later — copied item text
> 14:06 / 지금 재생 중 / CLI vs MCP: How AI Agents Choose the Right Tool for the Job / IBM Technology / • / 조회수 8.5만회 • 3주 전
> 6:31 / 지금 재생 중 / KV Cache: The Invisible Trick Behind Every LLM / Adam Rosler / • / 조회수 2.7만회 • 3주 전
> State of the Claw — Peter Steinberger / AI Engineer / • / 조회수 14만회 • 1개월 전
> Claude Code: Build Your Full AI Marketing Team (Agents + Claude Skills) / Grace Leung / • / 조회수 25만회 • 1개월 전
> LiteParse - The Local Document Parser / Sam Witteveen / • / 조회수 7.5만회 • 2개월 전
> Inside OpenAI's Stargate Megafactory with Sam Altman | The Circuit / Bloomberg Originals / • / 조회수 634만회 • 1년 전
> Inside the Data Center Boom: Understanding the Massive Infrastructure That Supports AI / Steve Eisman / • / 조회수 9.7만회 • 7개월 전
> 랭체인 Ver.1 무료 강의 - 이 영상 하나면 당신도 AI Agent 개발자가 됩니다🚀 / Bloom AI / • / 조회수 3.8만회 • 5개월 전
> What Is an AI Stack? LLMs, RAG, & AI Hardware / IBM Technology / • / 조회수 30만회 • 6개월 전
> EP 70. 100x 엔지니어의 Claude Code 활용법 / 노정석 / • / 조회수 1.4만회 • 7개월 전
> AI Agent가 뭐길래?🤖 일 도와주는 5개 AI Agent 만들기! (+무료 템플릿) 왜 베트남에 있을까… / Lillian Chiu / • / 조회수 7.4만회 • 7개월 전
> 10 Insane AI Agent Use Cases in n8n! (steal these) / Jono Catliff / • / 조회수 30만회 • 1년 전

### Liked videos — copied item text
> 5 / Andrej Karpathy: From Vibe Coding to Agentic Engineering / Sequoia Capital / • / 조회수 114만회 • 4주 전
> 6 / Stop Wasting Money on AI APIs: Use Cloudflare Queues / Cloudflare Developers / • / 조회수 2.1만회 • 1개월 전
> 8 / Claude Code 제작자의 코딩 생산성 꿀팁 (Boris Cherny) / 개발자방16 / • / 조회수 4.3천회 • 1개월 전
> 9 / Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI / AI Engineer / • / 조회수 13만회 • 1개월 전
> 12 / 모르면 진짜 개손해... AI로 회사 운영 해주는 Paper Clip. 심지어 무료 오픈소스 / 코드팩토리 / • / 조회수 8.3만회 • 1개월 전
> 13 / 앤트로픽이 말하는 가장 효율적인 Harnessing. Managed Agents! 앙 / 코드팩토리 / • / 조회수 1.7만회 • 1개월 전
> 14 / Intel just CRUSHED Nvidia & AMD GPU pricing / Alex Ziskind / • / 조회수 39만회 • 1개월 전
> 19 / AI가 종교를 만들었네요 ㄷㄷㄷ (클로드봇) / 내일은 투자왕 - 김단테 / • / 조회수 8.5만회 • 3개월 전
> 21 / AI 때문에 직원 75% 해고하고 매출 80% 하락한 Tailwind / 코드팩토리 / • / 조회수 2만회 • 4개월 전

Filtering notes:
- Newly surfaced subscription rows versus the 08:00 social run: Codex-vs-Claude-Code comparison, `Claude Code FREE`, HBM/AI semiconductor videos, AI security, Hermes/Agent OS, Antigravity comparison, and Minimax M3.
- Watch Later and Liked videos remain mostly unchanged baseline repeats around MCP, KV cache, State of the Claw, Claude Code, LiteParse, AI data centers, Karpathy, Cloudflare Queues, Harness Engineering, Paper Clip, Managed Agents, and GPU pricing.
- Sports, entertainment, politics, and general lifestyle rows were preserved in the raw cache but omitted from this short excerpt unless they changed the interpretation.

## 5) Google My Activity — copied text
Page title:
- `Google - 내 활동`

Visible text:
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
> 알림 2개
> 포함된 주제:
> 13형 MacBook Pro - 스페이스 그레이
> 구글
> 오후 6:48 • 세부정보
> 어제
> 알림 6개
> 찌르기
> 구글 AI
> 아이폰
> GPT-5
> 안전
> 날씨
> 오후 10:48 • 세부정보
> 5월 26일
> 샘 올트먼
> 주식
> 클로드
> 조지 호츠
> 오후 9:48 • 세부정보
> draw io mcp 을(를) 검색했습니다.
> 오후 3:52 • 세부정보
> draw.io 을(를) 검색했습니다.
> 오후 3:41 • 세부정보
> 딥엑스 을(를) 검색했습니다.
> 오후 2:21 • 세부정보
> deepx m1 을(를) 검색했습니다.
> 오후 2:20 • 세부정보
> 한글 웹 을(를) 검색했습니다.
> 오전 11:42 • 세부정보
> grok cursor 을(를) 검색했습니다.
> 오전 11:41 • 세부정보
> what is oss 을(를) 검색했습니다.
> 오전 10:28 • 세부정보
> esp32 디스플레이 을(를) 검색했습니다.
> 오전 10:27 • 세부정보
> esp32 을(를) 검색했습니다.
> 오전 10:26 • 세부정보
> 5월 25일
> 알림 5개
> 아마존 웹 서비스
> 앤트로픽
> 에픽게임즈
> 오후 10:26 • 세부정보
> 5월 24일
> 알림 4개
> 오픈AI 코덱스
> 러스트
> 5월 23일
> 챗GPT
> 퀘이사존
> 프로그래밍 언어
> 오픈AI
> 오후 11:02 • 세부정보
> 5월 22일
> 컴퓨터 모니터
> 양컴
> 르노 SM6
> proxmox vxlan 설정 을(를) 검색했습니다.
> 오후 5:10 • 세부정보
> proxmox release notes 을(를) 검색했습니다.
> 오후 5:09 • 세부정보
> 5월 21일
> claude 中转站 을(를) 검색했습니다.
> 오후 11:55 • 세부정보
> use claude cheep in singapore node 을(를) 검색했습니다.
> use claude in singapore node 을(를) 검색했습니다.
> 오후 11:54 • 세부정보
> claude third party reverse in china to singapore 을(를) 검색했습니다.
> Claude third party reverse in. china 을(를) 검색했습니다.
> 오후 11:53 • 세부정보
> Claude third party reverse 을(를) 검색했습니다.
> token monitoring dashboard 을(를) 검색했습니다.
> 오후 11:43 • 세부정보
> token monitoring 을(를) 검색했습니다.
> 오후 11:42 • 세부정보
> 정용진 주적 을(를) 검색했습니다.

Filtering notes:
- No clearly new Google Search row appeared relative to the 08:00 same-day transcript; visible rows still center on `구글 AI`, `GPT-5`, `draw io mcp`, `DeepX M1`, `grok cursor`, `proxmox`, and older Claude third-party/reverse-token searches.

## 6) ChatGPT — recent chat surface
Page title:
- `ChatGPT`

Visible text:
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
> Link Shared
> IoT 공사 비용 절감
> 슬럽 원단 설명
> 인프라 경험과 패러다임
> 아이폰 앱 개발 변화
> 라우터OS 설명
> ISO 27001 vs 보안적합성
> 기술 선택과 비교
> 클라우드 온디맨드 개념
> ENTP 의사결정 패턴
> 엔지니어 경험 최대치
> 정치적 중립성 설명
> 안창균
> Pro
> 지금 무슨 생각을 하시나요?
> Thinking

Filtering notes:
- Newly visible top recent title versus the 08:00 same-day transcript: `React forwardRef 타입오류`.
- The rest remains the same CJS/MJS, Ceph OSD, Claude plugins, CI Docker, MCP server, security compliance, AI hardware, and Proxmox operations lane.

## 7) Claude — recent chat surface
Page title:
- `New chat - Claude`

Visible text:
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
> 엔지니어 경력 발전 방향
> 기술 비교 분석의 공정성 문제
> 아내가 음식을 권할 때 대처법
> 아내의 정신 건강 걱정
> AI 인프라 및 AIOps 사업 방향 검토
> 르노 그랑콜레오스 AI 에이전트 제어 방법
> SaaS 백엔드 필수 기능
> 여러 AI 모델을 안전하게 함께 사용하기
> Private Cloud-Native 개발 플랫폼 구축
> k3s 3노드 클러스터 테스트 방법
> 버튼 지분 받는 일반적인 규모
> Virton과 AI agent의 인프라 자동화 시너지
> 소프트웨어와 교육을 결합한 한국 B2B 비즈니스 모델
> MBTI 64유형이란
> K-pop 엔터테인먼트와 기술 사업 접목 기회
> 토큰 가격 상승의 구조적 필연성
> 어른용 장난감 네이버스토어 판매
> Meta 스레드 API 리다이렉트 URL 설정 오류
> AI 연동 가능한 영상편집 툴
> 관심 신호에서 패턴 찾기
> M365 Planner와 GitHub Project 연동
> 플랩풋볼 서비스 분석 및 개선방향
> B2B 솔루션 배포 사이클 전략
> YouTube video relatable moment
> 예방접종 후 아기 발열 시 아세트아미노펜 용량
> 효율적인 영어 노출 방법 찾기
> 소프트웨어 개발 기획 통합 관리 도구
> Obsidian vault 모바일 동기화 방법
> 프로젝트 관리를 위한 AI 도구 추천
> 모든 채팅
> CA
> Changkyun Ahn
> Pro 요금제
> 저녁 인사드려요, Changkyun님
> 오늘 어떤 도움을 드릴까요?
> Opus 4.7
> 작성하기
> 학습하기
> 일상생활
> Claude의 선택

Filtering notes:
- Claude recents remained essentially unchanged versus the 08:00 same-day transcript: AI infra/AIOps, car-agent control, SaaS backend, safe multi-model usage, Private Cloud-Native platform, k3s, Virton infra automation, B2B education/software, token economics, and Threads API redirect configuration.

## Honcho triage
- `GitHub Stars`: `raw_only` — no new star; unchanged visible repo set.
- `Threads CDP`: `raw_only` — likes are repeats; activity/replies/profile add context but not a new durable branch.
- `Threads API`: `raw_only` — token/profile worked, mentions empty, keyword/own-post rows repeat established managed-agent/runtime themes.
- `YouTube`: `raw_only` — fresh subscription rows are useful examples, but they reinforce Codex/Claude Code/AI-infra/semiconductor/operator lanes already captured today.
- `Google`: `raw_only` — no visible new search row relative to 08:00.
- `ChatGPT`: `raw_only` — `React forwardRef 타입오류` is new but tactical/debugging-level, not durable.
- `Claude`: `raw_only` — no material change relative to 08:00.

## Why this raw exists
This file preserves the 19:00 browser/API evidence for later Honcho review. The pass contains newly surfaced examples on YouTube and small tactical rotations on Threads/ChatGPT, but no concept-page or index change was justified.
