---
title: Interest signal collection — 22:00 new-target run (2026-08-02)
created: 2026-08-02
type: raw-transcript
captured_at: 2026-08-02T23:55:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: append_existing
route_confidence: high
route_reason: >
  22:00 new-target pass. Idempotency clear: no same-day new-target raw existed. Novelty judged
  against the most recent same-track baseline (2026-07-15 11:00, an ~18-day gap — the prior
  new-target runs paused) plus concepts/ai-infra-operating-economics.md and
  concepts/managed-agents-practical-summary.md. Strongest durable delta this run is a genuine
  MULTI-SURFACE INTENSIFICATION of the existing "securable / agent-trust operating layer" thread
  the 07-15 append already opened — but now driven by real INCIDENT post-mortems and a dedicated
  vendor series, not just product launches: Docker shipped a whole agent-safety arc ("Runtime
  Enforcement, Not Runtime Advice" 07-22, "Agentic AI Needs Guardrails, Not Guesswork" 07-24,
  "Coding Agent Horror Stories: The Agent That Deleted Production" 07-20 + "The 29 Million Secret
  Problem" 07-28, "AI Agents Explained: How to Build with Them Safely" 07-16) and joined Nvidia's
  Open Secure AI Alliance (07-30); Hugging Face published "Anatomy of a Frontier Lab Agent
  Intrusion: A Technical Timeline of the July 2026 Incident" (07-27) + a "Security incident
  disclosure — July 2026" (07-16); GitHub made "Copilot code review: Agent skills and MCP now
  generally available" (07-29); Simon Willison covered "Investigating three real-world incidents
  in our cybersecurity evaluations" (07-30). Multi-surface, incident-grounded reinforcement of an
  existing axis (not a new branch) → append_existing to ai-infra-operating-economics.md. Secondary
  on-axis rows kept raw_only: OpenAI GPT-5.6 price-performance frontier (07-30) + AWS Bedrock up to
  80% lower GPT-5.6 prices (07-30) + Vercel AI Gateway GPT-5.6 pricing/speed (07-30) — price/token
  compression, already-tracked lane; MCP 2026-07-28 spec adoption wave (Vercel MCP + mcp-handler
  07-30/31, Simon Willison stateless-MCP + llm-mcp-client + datasette-mcp 07-31); Vercel AI Gateway
  spend budgets/logs page (07-31) + "Run multiple isolated agents in a single Sandbox" (07-30);
  Google "Gemini API Managed Agents: 3.6 Flash, hooks" (07-28, managed-agents lane); Meta "AI
  Storage Blueprint at Scale" (07-01). GitHub Trending rotation, Google/consumer PR, AWS
  region/instance rows raw_only/discard. Anthropic RSS 404 (availability fact).
routing:
  - {surface: docker-blog, route: append_existing, note: "NEW dedicated agent-safety series since 07-15: 'Runtime Enforcement, Not Runtime Advice' (07-22), 'Agentic AI Needs Guardrails, Not Guesswork' (07-24), 'Coding Agent Horror Stories: The Agent That Deleted Production' (07-20) + 'The 29 Million Secret Problem' (07-28), 'AI Agents Explained: How to Build with Them Safely' (07-16), and 'Docker Joins Nvidia's Open Secure AI Alliance' (07-30). Runtime/guardrail boundary now framed as the primary agent-trust surface — core contributor to the append."}
  - {surface: hf-blog, route: append_existing, note: "NEW 'Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident' (07-27) + 'Security incident disclosure — July 2026' (07-16) — real agent-intrusion post-mortems, the incident-grounded evidence that sharpens the securable-operating-layer thread from launches into lived operations. Contributes to the append. Also raw_only: 'GPU Management: Why Idle GPUs Are the New Grounded Aircraft' (07-30, GPU-idle economics, on-axis)."}
  - {surface: github-changelog, route: append_existing, note: "NEW 'Copilot code review: Agent skills and MCP now generally available' (07-29) — agent-security/review tooling GA in the PR workflow; extends the 07-14 'AI security detections on PRs' append. Contributes. Also raw_only: 'Stacked pull requests public preview' (07-30), 'GitHub Models is now retired' (07-30), 'Restricting npm bypass-2FA granular access tokens' (07-31), 'Enterprise teams model policy targeting' (07-31), Copilot VS/VS Code July updates (07-30)."}
  - {surface: simonwillison, route: append_existing, note: "NEW 'Investigating three real-world incidents in our cybersecurity evaluations' (07-30) — reinforces the incident-driven security framing. Also raw_only: MCP wave 'Stateless MCP has recaptured my interest' + llm-mcp-client 0.1a0 + datasette-mcp (07-31), llm 0.32rc1/rc2 (07-30), smevals eval suite (07-31), Open Weight Revolution podcast (07-31)."}
  - {surface: openai-news, route: raw_only, note: "NEW 'Advancing the price-performance frontier with GPT-5.6' (07-30, price/token compression — existing operating-economics lane), 'How GPT-5.6 fuses frontier intelligence with frontier efficiency' (07-29), 'Scientific computing in the age of agentic AI' (07-28), 'How avatarin built a 24/7 retail agent with GPT-Realtime' (07-30, agent case study), 'Ten advances in mathematics' (08-01), 'Disrupting a Criminal Scam Operation' (07-31, misuse report). On-axis but single-surface / advisory."}
  - {surface: aws-whatsnew, route: raw_only, note: "NEW 'Amazon Bedrock announces up to 80% lower prices for OpenAI GPT-5.6 models' (07-30, price compression — reinforces the OpenAI/Vercel same-week price move), 'CloudWatch announces managed Prometheus collectors' (07-31, observability), 'IAM Policy Simulator moves to console' (07-30), Grok 4.3 / Gemma 4 on Bedrock GovCloud (07-30). Region/instance/RDS/Redshift/Direct-Connect/MSK rows off-axis."}
  - {surface: vercel, route: raw_only, note: "NEW 'Vercel MCP now supports the 2026-07-28 MCP specification' (07-31) + 'Latest MCP spec now supported in mcp-handler' (07-30), 'AI Gateway now supports team and project spend budgets' (07-31) + 'AI Gateway logs now have a dedicated page' (07-31) [cost/observability controls], 'Run multiple isolated agents in a single Sandbox' (07-30) [agent-runtime isolation], 'AI Gateway: GPT-5.6 pricing and speed updates' (07-30), 'Vercel Passport GA' (07-31), DeepSeek V4 Flash / MiniMax H3 / Inkling Small model adds. Agent-tooling/gateway rows, single-surface reinforcement."}
  - {surface: google, route: raw_only, note: "NEW 'Gemini API Managed Agents: 3.6 Flash, hooks, and more' (07-28, managed-agents lane — on-axis but single-surface), 'Gemini Spark now integrates with Chrome' (07-30), 'Introducing Gemini Robotics ER 2' (07-30), 'Gemini Drop July 2026' (07-31), Lyria 3.5 / Nano Banana / Flow Sessions consumer PR (discard), 'Google and KDDI back Japanese startups' (07-28, ecosystem)."}
  - {surface: cloudflare, route: raw_only, note: "NEW 'An API for MoQ' (07-31), 'Dogfooding at scale: migrating cdnjs to Developer Platform' (07-30), 'Post-quantum authentication to origins' (07-29), 'We're open-sourcing our privacy proxy CLI' (07-27), 'Cloudflare Internal DNS GA' (07-20), 'Introducing Cache Response Rules' (07-23). Infra/security rows off the agent axis."}
  - {surface: meta-eng, route: raw_only, note: "NEW since 07-15: 'Exploring Hierarchical Interest Representation for Meta Ads Deep Funnel Optimization' (07-15), 'Meta's AI Storage Blueprint at Scale' (07-01, AI storage economics — on-axis but single-surface, ML-infra internals). No new agent-axis durable branch."}
  - {surface: github-trending, route: raw_only, note: "On-axis rows: NousResearch/hermes-agent, PanniAntong/Agent-Reach, TencentCloud/TencentDB-Agent-Memory, mvanhorn/last30days-skill, NomaDamas/k-skill, zhaoxuya520/reverse-skill, bytedance/deer-flow, atilaahmettaner/tradingview-mcp, lyogavin/airllm. Skills/agent/MCP lane rotation, single-surface, no new durable branch. Off-axis excluded."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (`/rss.xml` and `/engineering/rss.xml`); no product/eng launch surfaced via feed (availability fact)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-07-15.md
  - raw/transcripts/interest-signal-collection-22-00-2026-07-14-live.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-02)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-02 (captured 23:55 KST)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python script `/tmp/nt_fetch_2200_0802.py` writing to `.cache/newtarget-2026-08-02-2200/`, then parsed with `/tmp/nt_parse_2200_0802.py` + `/tmp/nt_trending2_0802.py`). Live Chrome CDP `/json/version` did not respond (CDP down) — not needed for this RSS/HTML new-target track.
- Feeds fetched OK (HTTP 200): OpenAI (news/rss.xml), github.blog changelog, AWS What's New (RSS), Hugging Face, Meta Engineering (RSS), Vercel (atom), Cloudflare (RSS), Docker (RSS), Simon Willison (Atom), Google (RSS), GitHub Trending (daily + python). Anthropic RSS returned 404 (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence.
- Most recent prior new-target baseline: same-track **2026-07-15 11:00**. This is an ~18-day gap (the 11:00/22:00 new-target runs paused between 07-15 and today), so a larger-than-usual accumulation is expected; novelty judged against that baseline + the durable concept pages, treating already-tracked axes as reinforcement.

## Novelty summary
**One durable delta: the agent-security / agent-trust operating layer intensifies from product launches into incident-grounded practice.** The 07-15 append opened a "securable / control-plane operating layer" thread from AWS/GitHub/Docker product launches. Since then, four independent surfaces have pushed the same axis further — and now with **real incident post-mortems and a dedicated vendor arc**, not just feature announcements: Docker's agent-safety series (Runtime Enforcement / Guardrails-Not-Guesswork / Coding-Agent-Horror-Stories) + Open Secure AI Alliance membership, Hugging Face's frontier-lab agent-intrusion technical timeline + security-incident disclosure, GitHub's Copilot code-review Agent-skills/MCP GA, and Simon Willison's three-real-world-cybersecurity-incidents write-up. Multi-surface, incident-grounded reinforcement of an existing axis → `append_existing` to `ai-infra-operating-economics.md`. Everything else is `raw_only` reinforcement.

## 1) Strongest — durable (append_existing): agent-security matures from launches to incident-grounded practice

### Docker — dedicated agent-safety / runtime-enforcement arc
- `[2026-07-30] The Future of Agentic AI Depends on Openness and Trust. That's Why Docker Is Joining Nvidia's Open Secure AI Alliance` — https://www.docker.com/blog/docker-joins-nvidia-open-secure-ai-alliance/
- `[2026-07-28] Coding Agent Horror Stories: The 29 Million Secret Problem` — https://www.docker.com/blog/coding-agent-horror-stories-the-29-million-secret-problem/
- `[2026-07-24] Agentic AI Needs Guardrails, Not Guesswork` — https://www.docker.com/blog/agentic-ai-needs-guardrails-not-guesswork/
- `[2026-07-22] Runtime Enforcement, Not Runtime Advice` — https://www.docker.com/blog/runtime-enforcement-not-runtime-advice/
- `[2026-07-20] Coding Agent Horror Stories: The Agent That Deleted Production` — https://www.docker.com/blog/coding-agent-horror-stories-the-agent-that-deleted-production/
- `[2026-07-16] AI Agents Explained: How to Build with Them Safely` — https://www.docker.com/blog/what-are-ai-agents/

### Hugging Face — real agent-intrusion post-mortems
- `[2026-07-27] Anatomy of a Frontier Lab Agent Intrusion: A Technical Timeline of the July 2026 Incident` — https://huggingface.co/blog/agent-intrusion-technical-timeline
- `[2026-07-16] Security incident disclosure — July 2026` — https://huggingface.co/blog/security-incident-july-2026

### GitHub — agent-security review GA
- `[2026-07-29] Copilot code review: Agent skills and MCP now generally available` — https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available

### Simon Willison — incident-driven security framing
- `[2026-07-30] Investigating three real-world incidents in our cybersecurity evaluations` — https://simonwillison.net/2026/Jul/30/three-real-world-incidents/

Why it matters: the 07-15 append captured cloud/host/container vendors *shipping* AI-security surfaces. In the ~18 days since, the same axis has hardened into **lived operations**: Docker devoted a named series to agent runtime enforcement + guardrails + real "the agent deleted production / leaked 29M secrets" failure modes and joined an industry secure-AI alliance; Hugging Face published a forensic timeline of an actual frontier-lab agent intrusion plus a security-incident disclosure; GitHub GA'd agent-skills/MCP inside Copilot code review; and Simon Willison wrote up three real cybersecurity-eval incidents. This is multi-surface, incident-grounded reinforcement of the exact "securable / control-plane operating layer" thread — a fresh, sharper data cluster on an existing axis, not a new branch → `append_existing`.

## 2) On-axis reinforcement (raw_only)

### Model price/token compression (existing operating-economics lane)
- **OpenAI** — `[2026-07-30] Advancing the price-performance frontier with GPT-5.6` — https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6 ; `[2026-07-29] How GPT-5.6 fuses frontier intelligence with frontier efficiency` — https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency
- **AWS** — `[2026-07-30] Amazon Bedrock announces up to 80% lower prices for OpenAI GPT‑5.6 models` — https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-terra-luna-pricing-bedrock/
- **Vercel** — `[2026-07-30] AI Gateway: GPT-5.6 pricing and speed updates` — https://vercel.com/changelog/ai-gateway-gpt-5-6-pricing-speed-updates
  - Same-week price move across three surfaces; reinforces the 07-14 Production Index "price-per-token flattening" data point — kept `raw_only` as an existing-lane reinforcement, not folded into the security append.

### MCP 2026-07-28 spec adoption wave
- **Vercel** — `[2026-07-31] Vercel MCP now supports the 2026-07-28 MCP specification` — https://vercel.com/changelog/vercel-mcp-now-supports-the-2026-07-28-mcp-specification ; `[2026-07-30] Latest MCP spec now supported in mcp-handler` — https://vercel.com/changelog/latest-mcp-spec-now-supported-in-mcp-handler
- **Simon Willison** — `[2026-07-31] Stateless MCP has recaptured my interest (and inspired mcp-explorer and datasette-mcp)` — https://simonwillison.net/2026/Jul/31/stateless-mcp/ ; `[2026-07-31] llm-mcp-client 0.1a0` — https://simonwillison.net/2026/Jul/31/llm-mcp-client/

### Agent-runtime / gateway operating controls
- **Vercel** — `[2026-07-31] AI Gateway now supports team and project spend budgets` — https://vercel.com/changelog/ai-gateway-spend-budgets-and-alerts ; `[2026-07-31] AI Gateway logs now have a dedicated page` — https://vercel.com/changelog/ai-gateway-logs ; `[2026-07-30] Run multiple isolated agents in a single Sandbox` — https://vercel.com/changelog/run-multiple-isolated-agents-in-a-single-sandbox
- **AWS** — `[2026-07-31] Amazon CloudWatch announces managed Prometheus collectors` — https://aws.amazon.com/about-aws/whats-new/2026/07/cloudwatch-managed-collectors/
- **Hugging Face** — `[2026-07-30] GPU Management: Why Idle GPUs Are the New Grounded Aircraft` — https://huggingface.co/blog/Dharma-AI/gpu-management (GPU-idle economics)

### Managed-agents lane
- **Google** — `[2026-07-28] Gemini API Managed Agents: 3.6 Flash, hooks, and more` — https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/ (on-axis for `managed-agents-practical-summary.md` but single-surface — `raw_only`)
- **OpenAI** — `[2026-07-30] How avatarin built a 24/7 retail agent with GPT-Realtime` — https://openai.com/index/avatarin ; `[2026-07-28] Scientific computing in the age of agentic AI` — https://openai.com/index/scientific-computing-agentic-ai

## 3) Minor / infra / low-durability (raw_only)
- **GitHub changelog** — `[2026-07-30] Stacked pull requests are now in public preview` — https://github.blog/changelog/2026-07-30-stacked-pull-requests-are-now-in-public-preview ; `[2026-07-30] GitHub Models is now retired` — https://github.blog/changelog/2026-07-30-github-models-is-now-retired ; `[2026-07-31] Restricting npm bypass-2FA granular access tokens` — https://github.blog/changelog/2026-07-31-restricting-npm-bypass-2fa-granular-access-tokens ; `[2026-07-31] Enterprise teams model policy targeting in public preview` — https://github.blog/changelog/2026-07-31-enterprise-teams-model-policy-targeting-in-public-preview
- **Cloudflare** — `[2026-07-31] An API for MoQ: provision your own isolated relays` — https://blog.cloudflare.com/moq-relays/ ; `[2026-07-30] Dogfooding at scale: migrating cdnjs to Cloudflare's Developer Platform` — https://blog.cloudflare.com/cdnjs-dev-platform-migration/ ; `[2026-07-29] Post-quantum authentication to origins is now supported` — https://blog.cloudflare.com/post-quantum-authentication-to-origins/ ; `[2026-07-27] We're open-sourcing our privacy proxy CLI` — https://blog.cloudflare.com/open-sourcing-our-privacy-proxy-cli/
- **Meta Engineering** — `[2026-07-15] Exploring Hierarchical Interest Representation For Meta Ads Deep Funnel Optimization` — https://engineering.fb.com/2026/07/15/ai-research/exploring-hierarchical-interest-representation-for-meta-ads-deep-funnel-optimization/ ; `[2026-07-01] Meta's AI Storage Blueprint at Scale` — https://engineering.fb.com/2026/07/01/data-infrastructure/metas-ai-storage-blueprint-at-scale/
- **OpenAI** — `[2026-08-01] Ten advances in mathematics and theoretical computer science` — https://openai.com/index/ten-advances-in-mathematics ; `[2026-07-31] Disrupting a Criminal Scam Operation` — https://openai.com/index/disrupting-malicious-uses-of-ai-criminal-scam-operation

## 4) GitHub Trending (daily + python) — copied top rows
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- Visible daily rows: `microsoft/AI-For-Beginners`, `usekaneo/kaneo`, `lyogavin/airllm`, `iv-org/invidious`, `codecrafters-io/build-your-own-x`, `zhaoxuya520/reverse-skill`, `different-ai/openwork`, `microsoft/generative-ai-for-beginners`, `PanniAntong/Agent-Reach`, `TencentCloud/TencentDB-Agent-Memory`, `mvanhorn/last30days-skill`, `NomaDamas/k-skill`, `antirez/ds4`, `esengine/DeepSeek-Reasonix`.
- Visible python rows: `PanniAntong/Agent-Reach`, `mvanhorn/last30days-skill`, `abus-aikorea/voice-pro`, `NousResearch/hermes-agent`, `HuanShere/VideoLingo`, `bytedance/deer-flow`, `sherlock-project/sherlock`, `ccxt/ccxt`, `atilaahmettaner/tradingview-mcp`, `PrefectHQ/prefect`, `music-assistant/server`, `harry0703/MoneyPrinterTurbo`.
- On-axis rotation (raw_only): `NousResearch/hermes-agent` (Hermes agent runtime — CK's own tooling axis), `PanniAntong/Agent-Reach`, `TencentCloud/TencentDB-Agent-Memory` (agent memory), `mvanhorn/last30days-skill` / `NomaDamas/k-skill` / `zhaoxuya520/reverse-skill` (claude-skills lane), `bytedance/deer-flow` (agent framework), `atilaahmettaner/tradingview-mcp` (MCP + AI-investing), `lyogavin/airllm` (LLM serving on low VRAM). Single-surface Trending rotation, no new durable branch.
- Off-axis / generic excluded: `usekaneo/kaneo`, `iv-org/invidious`, `codecrafters-io/build-your-own-x`, `microsoft/*-for-beginners`, `antirez/ds4`, `sherlock-project/sherlock`, `ccxt/ccxt`, `music-assistant/server`, `harry0703/MoneyPrinterTurbo`, `abus-aikorea/voice-pro`, `HuanShere/VideoLingo`, `Z4nzu/hackingtool`, `yt-dlp/yt-dlp`.

## Filtering notes
- Excluded as noise: AWS region/instance/RDS/Redshift/Direct-Connect/MSK availability rows, Google consumer PR (Lyria/Nano-Banana/Flow-Sessions/Street-View/dinner-party/touch-grass), off-axis trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-02 22:00 new-target pass (first new-target run since 07-15; ~18-day gap). **One durable delta:** the agent-security / agent-trust operating layer has intensified from product launches (the 07-15 append) into incident-grounded practice — Docker's agent-safety series + Open Secure AI Alliance (07-16→07-30), Hugging Face's frontier-lab agent-intrusion technical timeline + security-incident disclosure (07-16/07-27), GitHub Copilot code-review Agent-skills/MCP GA (07-29), and Simon Willison's three-real-world-cybersecurity-incidents write-up (07-30) — which strengthens the "securable / control-plane operating layer" thread in `ai-infra-operating-economics.md` → `append_existing`. Secondary genuinely-new on-axis rows (OpenAI/AWS/Vercel GPT-5.6 price-performance + Bedrock 80% price cut, MCP 2026-07-28 spec adoption wave, Vercel AI Gateway spend budgets/logs + isolated-agents-in-a-Sandbox, Google Gemini API Managed Agents 3.6 Flash/hooks, HF idle-GPU economics, Meta AI Storage Blueprint) stay `raw_only` as single-surface / existing-lane reinforcement. GitHub Trending skills/agent/MCP rotation, Cloudflare infra/security, Google consumer PR, and OpenAI math/misuse rows are `raw_only`/`discard`. Durable action = this raw transcript + the concept-page append + a Honcho routing audit + a `log.md` entry; `index.md` left unchanged. Anthropic RSS 404 (availability fact).
