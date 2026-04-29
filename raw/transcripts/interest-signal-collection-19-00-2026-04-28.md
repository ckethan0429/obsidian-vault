# Raw Transcript — Interest Signal Collection (19:00 run)

Source: official Threads API + browser/CDP fallback checks
Date: 2026-04-28
Run time: 19:00 KST
Threads token store: `~/.config/threads-api/credentials.json`
Threads account: `@ethan13917` (`user_id=27173231028946699`)
Saved API dump: `/tmp/threads_collection_2026-04-28_19-00.json`

## Live session notes
- Threads API primary path succeeded: `GET /v1.0/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, and post insights all returned.
- Threads liked-page fallback was **unavailable** in the browser session because `https://www.threads.com/liked` redirected to the login page.
- YouTube, X, GitHub, and Google My Activity were also logged out in this browser session.
- ChatGPT and Claude showed Cloudflare / security verification interstitials.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_profile_picture_url": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/430222516_8042971535718144_6268404829974212197_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=111&ccb=7-5&_nc_sid=30ff31&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy44MDYuQzMifQ%3D%3D&_nc_ohc=_He4uLKs4LcQ7kNvwEwOMLN&_nc_oc=AdqyTtPvEiUfd4tw94zfug2SqWjogYpqQAxZA5Fgf9dtCXIA6AXDVlTQ-W7bzPsEdew&_nc_zt=24&_nc_ht=scontent-gmp1-1.cdninstagram.com&edm=AP4hL3IEAAAA&_nc_tpa=Q5bMBQE3kJoNT5k1222AOljli9g83ci9VCEpLX-HPMYys6uP19QzDDvCjgeIAIUQd2hvLIJoXWGPiHAp5w&oh=00_Af3HZGd7R4UB1zNCVNR0wH2mPfzU9iPbtj1DQifc6O4CEA&oe=69F5DCA5",
  "threads_biography": "ai/비트코인/크립토/it 관심있고 투자합니다.",
  "is_verified": false
}
```

Interpretation: token is valid; the app-scoped account is confirmed and unchanged.

## 2) Threads API — `/threads` raw excerpts

### Stronger own text posts

```json
{
  "id": "18021615854650509",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:24:04+0000",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "17927998704090443",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-22T07:43:14+0000",
  "text": "AI 인프라의 진짜 승부처\n\n프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ0LAk7UW",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18021764978827681",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-23T09:14:38+0000",
  "text": "요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다. 노가다라고 했으면 귀엽게 봐주려나? 사실 목적성에 맞게 쓰기 위해서는 난 오히려 강력한 모델을 써야하는게 맞다고 본다. 오푸스나 gpt5.4같은\n\n예를들어 간단한 llm 위키 큐레이션을 크론 자동화를 하고있는데 최고 프론티어모델 쓰더라도 라우팅이며 트리아지며 노가다로 깎고 깎아야 하거늘…. \n\n다만 미래를 위해서라도(가격을 계속 올리는) 멀티 모델에 테스트는 해야겠지. 프론티어든 온프레 오픈소스든 근데 이것자체도 하네스인걸?\n\n모델이랑 씨름 노가다 하는게 하네스인데 왜 그말들을 싫어할까?ㅎㅎ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXeAE2qE-n1",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18085930580599773",
  "media_type": "TEXT_POST",
  "timestamp": "2026-04-21T03:23:30+0000",
  "text": "스레드에서 놀고있는 개발자,디자이너 마케터는 망하진 않을듯ㅋㅋㅋㅋㅋ\n이렇게 ai 자료가 넘쳐나는데?",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOTPFkycL",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

### Repost facades seen in the feed

```json
{
  "id": "18040847894780735",
  "media_type": "REPOST_FACADE",
  "timestamp": "2026-04-24T04:06:09+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXgBkUUk6SM",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18088932683191895",
  "media_type": "REPOST_FACADE",
  "timestamp": "2026-04-23T00:04:14+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXdBFjlk6cx",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18163085524434927",
  "media_type": "REPOST_FACADE",
  "timestamp": "2026-04-22T00:30:48+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXafVQ6k75r",
  "username": "ethan13917",
  "owner": {
    "id": "27173231028946699"
  },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

Interpretation: the strongest own-post axis remains AI infra / harness / agent operations / parallelism / storage / GPU ROI.

Filtering note: the freshest top-timestamp post in the feed was low-signal and excluded from summary (`2026-04-27T00:24:16+0000` — haircut / appearance chatter).

## 3) Threads API — `/replies` raw excerpts

```json
{
  "id": "18082007696435883",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요\n솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도\n\n클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "timestamp": "2026-04-22T14:30:07+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true
}
```

```json
{
  "id": "18130419103567598",
  "text": "머리좋은놈을 알잘딱깔센으로 24시간동안 굴린다 = 오푸스 4.7 토큰을 태운다 아주많이 ㅎㅎㅎ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_AOHk83V",
  "timestamp": "2026-04-22T14:26:47+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false
}
```

```json
{
  "id": "18043338536768394",
  "text": "7/7 참고한 출처들\n\nSource: https://www.threads.com/@mine_asset/post/DXYfl5KE7ax\nhttps://www.threads.com/@keke_appa/post/DXYxERVko1V",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ_kOk3rR",
  "timestamp": "2026-04-22T07:44:48+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false,
  "root_post": {
    "id": "17927998704090443"
  }
}
```

Interpretation: replies continue to reinforce GPU ROI / Ceph / Proxmox / operational stack thinking.

## 4) Threads API — `/mentions` / `keyword_search` raw excerpts

`/mentions` returned an empty dataset:

```json
{
  "data": []
}
```

### Keyword search hits

`Claude Code` — 1 hit(s), representative excerpt:

```json
{
  "id": "18075885890193333",
  "text": "4/7 앱개발의 새 기본값\n\nClaude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "timestamp": "2026-04-22T07:44:02+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`agent` — 5 hit(s), representative excerpt:

```json
{
  "id": "18021615854650509",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "timestamp": "2026-04-21T03:24:04+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`memory` — 3 hit(s), representative excerpt:

```json
{
  "id": "18021615854650509",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "timestamp": "2026-04-21T03:24:04+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`GPU` — 3 hit(s), representative excerpt:

```json
{
  "id": "18082007696435883",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요\n솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도\n\n클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "timestamp": "2026-04-22T14:30:07+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`Proxmox` — 1 hit(s), representative excerpt:

```json
{
  "id": "17874234324597256",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "timestamp": "2026-04-22T07:44:39+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`Ceph` — 2 hit(s), representative excerpt:

```json
{
  "id": "17874234324597256",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "timestamp": "2026-04-22T07:44:39+0000",
  "username": "ethan13917",
  "media_type": "TEXT_POST"
}
```

`MCP` — no hits in this run.

`vLLM` — no hits in this run.

`ZFS` — no hits in this run.

Interpretation: keyword traffic stays concentrated on Claude Code / agent / memory / GPU / Proxmox / Ceph; the more experimental infra terms remained empty.

## 5) Threads API — post insights

- `17997369674764566`: views=535, likes=0, replies=0, reposts=0, quotes=0

- `18021764978827681`: views=256, likes=0, replies=0, reposts=0, quotes=0

- `17927998704090443`: views=842, likes=1, replies=7, reposts=1, quotes=0

- `18021615854650509`: views=3207, likes=13, replies=7, reposts=2, quotes=1

- `18085930580599773`: views=126, likes=1, replies=0, reposts=0, quotes=0

Interpretation: the strongest engagement remains on `에이전트 생산성의 진실` and `AI 인프라의 진짜 승부처`; the newest feed items did not outgrow those older AI/ops posts.

## 6) Threads liked page (CDP/browser)

Browser state: login page only.

```text
Threads • 로그인
Instagram 계정으로 로그인
사용자 이름, 전화번호 또는 이메일 주소
비밀번호
로그인
```

## 7) YouTube subscriptions

```text
구독 - YouTube
새로운 동영상을 놓치지 마세요.
즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.
```

## 8) X

```text
X. 무슨 일이 일어나고 있나요? / X
지금 일어나고 있는 일
지금 가입하세요.
로그인
```

## 9) GitHub stars

```text
Sign in to GitHub · GitHub
Sign in to GitHub
Username or email address
Password
Sign in
```

## 10) Google My Activity

```text
내 활동에 오신 것을 환영합니다
로그인
```

## 11) ChatGPT

```text
잠시만 기다리십시오…
Cloudflare security challenge
```

## 12) Claude

```text
잠시만 기다리십시오…
보안 확인 수행 중
Cloudflare security challenge
```


## Filtering notes
- I kept the Threads feed focused on AI tooling / agent workflows / infrastructure and excluded the haircut / general social chatter from the summary.
- Browser-derived likes/reposts/search-history signals were unavailable because the relevant pages were logged out or blocked by Cloudflare/security checks.
- This run reads as reinforcement of the existing AI infra / agent / harness axis rather than a new durable topic.

## Why this raw exists
This file is the evidence store for later summary/curation.
