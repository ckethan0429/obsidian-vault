# Source URLs
https://youtu.be/IAEV_fUAdWk?si=8x7-nz2hzY-ZFwdq
https://www.youtube.com/watch?v=IAEV_fUAdWk

# Retrieved
2026-04-15

# Managed Agents explainer video — Raw transcript notes

Source: YouTube
Channel: `코드팩토리`
Title: `앤트로픽이 말하는 가장 효율적인 Harnessing. Managed Agents! 앙`
Duration: `18:29`

## Live session notes
- Transcript fetched with the `youtube-content` workflow via `uv run --with youtube-transcript-api ...`
- Available transcript was Korean auto-generated captions, so wording is occasionally noisy
- The video is a practical walkthrough plus interpretation of Anthropic's Managed Agents release and pricing

## Relevant copied excerpts
> Anthropic이 생각하는 인프라스트럭처 관점에서의 하네싱 기법, 그리고 왜 Managed Agents를 이런 방식으로 만들었는지 보자.

> Managed Agents에서는 에이전트, 세션, 인바이런먼트, 볼트 같은 레이어를 조합해서 하네싱한다.

> 그냥 Claude Code를 로컬에서 돌리면 되는 것 아니냐는 반응이 있을 수 있는데, 실제 AI 서비스를 굴리면 API 사용, 에이전트 체이닝, 트래픽에 따른 스케일링이 필요해서 로컬 사용 관점만으로 설명할 수 없다.

> 에이전트는 우리가 일반적으로 생각하는 agent이고, 세션은 실제 작업 로그, 인바이런먼트는 실행 환경, 볼트는 credential 관리 레이어다.

> 볼트 안에서 연결한 Notion 같은 OAuth 상태가 기억되기 때문에, 어떤 에이전트/세션/환경과도 조합해서 쓸 수 있다.

> 개발자라면 이걸 보고 인터페이스로 레이어를 나눴다는 감이 올 것이다. 정확히 그게 맞다.

> 에이전트 구성 요소인 세션, 하네스, 샌드박스를 가상화했고, 이를 통해 각 구성 요소 구현을 다른 구성 요소에 영향을 주지 않고 교체할 수 있다.

> 예전에는 모든 에이전트 구성 요소를 단일 컨테이너에 두었는데, 컨테이너에 문제가 생기면 세션이 끊어지고 직접 복구해야 했다.

> 하네스 버그, 이벤트 스트림 패킷 손실, 컨테이너 오프라인 상태 등 서로 다른 원인이 같은 오류처럼 보이는 것이 실제 인프라 디버깅의 어려움이다.

> 그래서 Anthropic은 뇌와 손을 분리했다. 하네스가 컨테이너 밖으로 나가고, 컨테이너는 대체 가능한 요소가 된다.

> 환경이 날아가도 세션 로그와 에이전트 정의, 볼트의 credential이 남아 있으면 새 환경을 만들고 마지막 세션부터 다시 시작할 수 있다.

> Managed Agents는 미래의 특정 하네스에 편향되지 않은 메타 하네스다. 다양한 하네스를 지원하는 범용 인터페이스 시스템으로 이해하면 된다.

> 가격은 모델 토큰 비용과 별도로 session runtime 비용이 있고, 실행 중인 시간에 대해서만 시간당 0.08달러를 지불한다.

## Video-specific observations
- The video makes Anthropic's abstractions more concrete by mapping them to product UI surfaces: **Agent / Session / Environment / Vault**.
- It emphasizes that this is for **operating agentic services**, not merely a convenience wrapper for local coding.
- It frames the pricing model as closer to **serverless runtime billing** than always-on infra billing.
- The Airbnb-style support example shows why a vault-backed, environment-separated agent can be composed with tools like Notion and Slack.

## Why this raw exists
This file preserves the practical interpretation layer from the Korean video so the managed-agents concept note can include both Anthropic’s architecture claims and an operator-facing explanation.