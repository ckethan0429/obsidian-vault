# Raw Transcript — Interest Signal Collection (08:00 run)

Source: official Threads API + browser/CDP fallback checks
Date: 2026-04-28
Run time: 08:00 KST
Threads token store: `~/.config/threads-api/credentials.json`
Threads account: `@ethan13917` (`user_id=27173231028946699`)
Saved API dump: `/tmp/threads_collection_2026-04-28.json`

## Live session notes
- Threads API primary path succeeded: `GET /v1.0/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`, and post insights all returned.
- Threads liked-page fallback was **unavailable** in the browser session because `https://www.threads.com/liked` redirected to the login page.
- YouTube, X, GitHub, and Google My Activity were also logged out in this browser session.
- ChatGPT and Claude showed Cloudflare security / verification interstitials.

## 1) Threads API — `/v1.0/me` raw JSON excerpt

```json
{
  "id": "27173231028946699",
  "username": "ethan13917",
  "name": "씨케이",
  "threads_profile_picture_url": "https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/430222516_8042971535718144_6268404829974212197_n.jpg?...",
  "threads_biography": "ai/비트코인/크립토/it 관심있고 투자합니다.",
  "is_verified": false
}
```

Interpretation: token is valid; the app-scoped account is confirmed and unchanged.

## 2) Threads API — `/27173231028946699/threads` raw excerpts

### Stronger own text posts

```json
{
  "id": "18021764978827681",
  "media_type": "TEXT_POST",
  "text": "요새 ‘하네스’란 말이 달갑지 않은 사람이 많나보다. 노가다라고 했으면 귀엽게 봐주려나? 사실 목적성에 맞게 쓰기 위해서는 난 오히려 강력한 모델을 써야하는게 맞다고 본다. 오푸스나 gpt5.4같은\n\n예를들어 간단한 llm 위키 큐레이션을 크론 자동화를 하고있는데 최고 프론티어모델 쓰더라도 라우팅이며 트리아지며 노가다로 깎고 깎아야 하거늘…. \n\n다만 미래를 위해서라도(가격을 계속 올리는) 멀티 모델에 테스트는 해야겠지. 프론티어든 온프레 오픈소스든 근데 이것자체도 하네스인걸?\n\n모델이랑 씨름 노가다 하는게 하네스인데 왜 그말들을 싫어할까?ㅎㅎ",
  "permalink": "https://www.threads.com/@ethan13917/post/DXeAE2qE-n1",
  "timestamp": "2026-04-23T09:14:38+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18217425820320232",
  "media_type": "IMAGE",
  "text": "요즘은 그냥 phase마다 나눠서 병렬 작업합니다. 그 판단도 ai에게 맡깁니다.\n\n작고 선형적인 건 native로 빨리 밀고, 상태,로그,mutation처럼 충돌 비용 큰 구간은 OMX로 병렬로 돌립니다. 병렬은 많이 하는 게 아니라, 어디서 나눌지 정하는 게 더 중요하더라고요.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbVXtqE2sj",
  "timestamp": "2026-04-22T08:23:00+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "17927998704090443",
  "media_type": "TEXT_POST",
  "text": "AI 인프라의 진짜 승부처\n\n프롬프트 잘 쓰는 사람 찾는 동안 판은 이미 넘어갔어. 이제 돈 버는 팀은 모델 성능표보다 A100 몇 장으로 돌리는지, 스토리지를 어떻게 붙이는지, 캐시·DB·서버리스를 어떻게 묶는지부터 계산한다. AI는 데모 경쟁이 아니라 운영경제성 전쟁이야.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ0LAk7UW",
  "timestamp": "2026-04-22T07:43:14+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18021615854650509",
  "media_type": "TEXT_POST",
  "text": "에이전트 생산성의 진실\n\nmemory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "timestamp": "2026-04-21T03:24:04+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18033386420799468",
  "media_type": "TEXT_POST",
  "text": "Managed Agents\n\n프롬프트 잘 쓰는 법만 붙들고 있으면 이미 한 박자 늦었다. Managed Agents는 에이전트를 '똑똑한 챗봇'이 아니라 세션·하네스·샌드박스를 분리한 운영 시스템으로 본다. LLM 성능보다 먼저 레이어를 나누는 순간, 비로소 서비스가 된다.",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMCrQk7nl",
  "timestamp": "2026-04-20T17:45:04+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": true,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

### Repost facades seen in the feed

```json
{
  "id": "18040847894780735",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXgBkUUk6SM",
  "timestamp": "2026-04-24T04:06:09+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18088932683191895",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXdBFjlk6cx",
  "timestamp": "2026-04-23T00:04:14+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

```json
{
  "id": "18163085524434927",
  "media_type": "REPOST_FACADE",
  "permalink": "https://www.threads.com/@ethan13917/post/DXafVQ6k75r",
  "timestamp": "2026-04-22T00:30:48+0000",
  "username": "ethan13917",
  "owner": { "id": "27173231028946699" },
  "has_replies": false,
  "media_product_type": "THREADS",
  "reply_audience": "EVERYONE"
}
```

Interpretation: the strongest own-post axis remains AI infra / harness / agent operations / parallelism / storage / GPU ROI.

## 3) Threads API — `/27173231028946699/replies` raw excerpts

```json
{
  "timestamp": "2026-04-27T00:21:05+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXnWMc1k_0k",
  "text": "저도부탁드려요~~",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false
}
```

```json
{
  "timestamp": "2026-04-24T04:06:06+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXgBj-ik78_",
  "text": "인사이트 많이 받고 갑니다!",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false
}
```

```json
{
  "timestamp": "2026-04-22T14:30:07+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요\n솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도\n\n클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true
}
```

```json
{
  "timestamp": "2026-04-22T14:26:47+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_AOHk83V",
  "text": "머리좋은놈을 알잘딱깔센으로 24시간동안 굴린다 = 오푸스 4.7 토큰을 태운다 아주많이 ㅎㅎㅎ",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": false
}
```

```json
{
  "timestamp": "2026-04-22T07:44:39+0000",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "6/7 지금 잡아야 할 포지션\n\n그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다.",
  "username": "ethan13917",
  "media_type": "TEXT_POST",
  "has_replies": true
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

`Claude Code` — 1 hit:

```json
{
  "query": "Claude Code",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ6HPE_Ww",
  "text": "4/7 앱개발의 새 기본값 / / Claude Code + Aurora DSQL 조합이 던지는 메시지도 명확해. 이제 앱 개발의 기준선은 ‘풀스택 직접 구축’이 아니라 ‘에이전트로 빨리 만들고 서버리스 DB로 바로 운영 붙이기’다. 프로토타입 속도와 프로덕션 진입 속도가 한 덩어리로 붙기 시작했다."
}
```

`agent` — 5 hits, representative excerpts:

```json
{
  "query": "agent",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실 / / memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지. Boris Cherny는 터미널 5개, 브라우저 10개 넘는 세션을 병렬로 굴리며 주 50~100 PR을 처리한다. 차이는 모델이 아니라 운용 습관이다."
}
```

```json
{
  "query": "agent",
  "permalink": "https://www.threads.com/@ethan13917/post/DXXMWQ2ExXi",
  "text": "What's next / / 다음 병목은 프롬프트가 아니다. 라우팅, 복구, 역할 분리, 도구 오케스트레이션이다. 에이전트를 잘 만드는 팀은 이제 모델보다 운영체계를 먼저 설계한다."
}
```

`memory` — 3 hits, representative excerpt:

```json
{
  "query": "memory",
  "permalink": "https://www.threads.com/@ethan13917/post/DXYOXEPk5SM",
  "text": "에이전트 생산성의 진실 / / memory-bank, oh-my-agent 같은 오케스트레이션 도구가 하입을 먹는 동안, 거장은 그냥 운영으로 결과를 뽑아낸다. 장인은 도구를 탓하지 않지."
}
```

`GPU` — 3 hits, representative excerpts:

```json
{
  "query": "GPU",
  "permalink": "https://www.threads.com/@ethan13917/post/DXb_YlEE-_6",
  "text": "지금 하는짓으로 봐선 계속 오를거같네요 / 솔직히 gpu roi로 봤을때 손해보는 장사를 하는거니 어찌보면 당연한 얘기일수도 / / 클코에서 프로를 뺐다 넣니 이런 잡음들은 다 그런것에 기초한다고 봅니다"
}
```

```json
{
  "query": "GPU",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "6/7 지금 잡아야 할 포지션 / / 그래서 지금 값어치가 커지는 사람은 모델 평론가가 아니라 운영자다. Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다."
}
```

`Proxmox` — 1 hit:

```json
{
  "query": "Proxmox",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다."
}
```

`Ceph` — 2 hits:

```json
{
  "query": "Ceph",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ-fgE6wx",
  "text": "Ceph·Proxmox·GPU 인프라 감각 있는 사람은 오픈모델, 스토리지, 오케스트레이션, 배포를 한 묶음으로 팔 수 있다. 다음 큰 돈은 ‘모델 설명’보다 ‘운영 가능한 스택’에서 나온다."
}
```

```json
{
  "query": "Ceph",
  "permalink": "https://www.threads.com/@ethan13917/post/DXbQ4Q3EyzB",
  "text": "3/7 스토리지가 다시 주인공 / / Ceph가 계속 눈에 밟히는 건 우연이 아니야. 에이전트가 길게 돌고 데이터가 쌓일수록 병목은 금방 모델에서 저장소로 내려온다. 벡터 검색, 로그, 체크포인트, 아카이브를 끝까지 버티는 팀이 결국 운영권과 마진을 같이 가져간다."
}
```

No hits in this run for: `Hermes`, `MCP`, `vLLM`, `ZFS`.

## 5) Threads API — own post insights

```json
{
  "id": "17997369674764566",
  "views": 535,
  "likes": 0,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "id": "18021764978827681",
  "views": 256,
  "likes": 0,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

```json
{
  "id": "17927998704090443",
  "views": 842,
  "likes": 1,
  "replies": 7,
  "reposts": 1,
  "quotes": 0
}
```

```json
{
  "id": "18021615854650509",
  "views": 3205,
  "likes": 13,
  "replies": 7,
  "reposts": 2,
  "quotes": 1
}
```

```json
{
  "id": "18085930580599773",
  "views": 126,
  "likes": 1,
  "replies": 0,
  "reposts": 0,
  "quotes": 0
}
```

Interpretation: the strongest engagement remains on the agent productivity / AI infra posts, especially `에이전트 생산성의 진실` and `AI 인프라의 진짜 승부처`.

## 6) Threads liked page fallback — unavailable

Browser navigation to `https://www.threads.com/liked` redirected to the login page and showed:

- `Threads • 로그인`
- `Instagram 계정으로 로그인`
- `사용자 이름, 전화번호 또는 이메일 주소`
- `비밀번호`
- `로그인`

Interpretation: liked-post evidence could not be collected in this browser session.

## 7) Other browser surfaces — unavailable / logged out

- YouTube subscriptions: `새로운 동영상을 놓치지 마세요. 즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.`
- X home: sign-up / login landing page.
- GitHub stars: GitHub sign-in page.
- Google My Activity: welcome/login page.
- ChatGPT: Cloudflare security challenge interstitial.
- Claude: Cloudflare security verification interstitial.

Interpretation: no authenticated live browser signals were available from these surfaces in this session.
