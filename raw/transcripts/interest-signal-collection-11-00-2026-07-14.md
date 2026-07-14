---
title: Interest signal collection — 11:00 new-target run (2026-07-14)
created: 2026-07-14
type: raw-transcript
captured_at: 2026-07-14T11:05:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: append_existing
route_confidence: high
route_reason: >
  11:00 new-target pass. Novelty judged against the most recent same-track baseline
  (2026-07-14 22:00, captured just after midnight — the true prior new-target baseline by
  mtime — plus 2026-07-13 11:00) and concepts/ai-infra-operating-economics.md. Several
  genuinely-new 07-13/07-14 dated rows surfaced that were NOT in the 22:00 snapshot (whose
  feed data only reached ~07-13 morning). Strongest durable delta: Vercel AI Gateway
  Production Index — July 2026 (07-13): open-weight models surge to 29% of volume and
  price-per-token flattens — a concrete recurring token-economics data point that directly
  strengthens the AI infra operating-economics thesis → append_existing. Secondary on-axis
  rows kept raw_only: AWS "Amazon DocumentDB now available as a skill in the Agent Toolkit
  for AWS" (07-13, agent-tool-access/skills lane) and "OpenAI GPT-5.6 Sol/Terra/Luna GA on
  Amazon Bedrock" (07-13, model-platform propagation). Simon Willison uvx-in-Actions/DOOMQL/
  datasette code-frequency (07-13/07-14 own-tool + quips, low durability), GitHub Code
  Quality license-estimate preview, Meta ads kernel-scheduler, Vercel Chat-SDK-X-adapter/
  subagent-activity/Deployment-Policies, and GitHub Trending rotation all raw_only. Net:
  one small append_existing + raw_only reinforcement. Anthropic RSS 404 (availability fact).
routing:
  - {surface: vercel, route: append_existing, note: "NEW 07-13 'Open-weight models surge to 29% of volume, price per token flattens' (AI Gateway Production Index — July 2026) — concrete recurring token-economics data point (open-weight adoption share + price/token trend across tens of trillions of routed tokens); directly strengthens AI infra operating-economics. Also NEW raw_only: Chat SDK adds X adapter (07-14), Agent Runs show subagent activity on eve (07-13), Deployment Policies / CLI flag targeting / cost-efficient Web Analytics (07-13)"}
  - {surface: aws-whatsnew, route: raw_only, note: "NEW 07-13 'Amazon DocumentDB now available as a skill in the Agent Toolkit for AWS' (agent-tool-access/skills lane) + 'OpenAI GPT-5.6 Sol/Terra/Luna GA on Amazon Bedrock' (model-platform propagation) + SageMaker JumpStart adds Gemma-4-E2B/Qwen3 embed-rerank/Voxtral-Mini-Realtime/OpenAI privacy-filter. On-axis but single-surface reinforcement of existing lanes; region/instance rows off-axis"}
  - {surface: github-changelog, route: raw_only, note: "NEW 07-13 'GitHub Code Quality license estimate in public preview' + 'Separate SSO and Organizations pages in Settings' — minor platform/admin rows, no new durable branch. CodeQL AI prompt-injection (07-10) already absorbed 07-11 11:00"}
  - {surface: simonwillison, route: raw_only, note: "NEW 07-14 'Using uvx in GitHub Actions in a cache-friendly way' + 07-13 'DOOMQL' / 'datasette code-frequency chart on GitHub' — own-tool notes + quips, low durability; reinforces existing own-tool-release lane"}
  - {surface: meta-eng, route: raw_only, note: "NEW 07-13 'Modernizing the Meta Ads Service With an Open-Source Kernel Scheduler' — infra/OSS but ads-service-specific, single-surface, no new durable branch"}
  - {surface: cloudflare, route: raw_only, note: "Newest still 07-13 'Introducing Precursor' (captured 07-14 22:00, raw_only); Meerkat/Worker-cache/Monetization-Gateway earlier — no new row past the 22:00 snapshot"}
  - {surface: openai-news, route: raw_only, note: "Newest still 07-10 Deutsche Telekom (baselined); GPT-5.6 family / M365 / Bio Bug Bounty 07-09 baselined — no new OpenAI-news row (GPT-5.6 GA now propagating via AWS Bedrock + GitHub Copilot instead)"}
  - {surface: hf-blog, route: raw_only, note: "Newest still 07-10 Profiling in PyTorch Pt3 (baselined); Data for Agents / native vLLM backend 07-08 baselined — no new row"}
  - {surface: docker-blog, route: raw_only, note: "Newest still 07-08 laptop-is-new-production (baselined); Why AI Agents Need Isolation 07-01 baselined — no new row"}
  - {surface: google, route: raw_only, note: "NEW 07-13 'video campaign groups' (ads, noise) + Waze-Gemini 07-13 (noise); no new on-axis row"}
  - {surface: github-trending, route: raw_only, note: "OpenCut-app/OpenCut, HKUDS/Vibe-Trading, moeru-ai/airi, awesome-llm-apps, github/spec-kit, OpenManus, ai-hedge-fund, TradingAgents, p-e-w/heretic, Vexa-ai/vexa — reinforces agent-framework/AI-investing/claude-skills lanes, single-surface rotation, no new durable branch"}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (availability fact); no product/eng launch surfaced via feed"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-07-14.md
  - raw/transcripts/interest-signal-collection-11-00-2026-07-13.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-07-14)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-07-14 (captured 11:05 KST)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python script `/tmp/newtarget_fetch_1100_0714.py` writing to `.cache/newtarget-2026-07-14-1100/`, then parsed with `/tmp/newtarget_parse_1100_0714.py`). Live Chrome CDP not used for this track (and CDP has been down since 07-11).
- Feeds fetched OK (HTTP 200): OpenAI (news/rss.xml), github.blog changelog, AWS What's New (RSS), Hugging Face, Meta Engineering (RSS), Vercel (atom), Cloudflare (RSS), Docker (RSS), Simon Willison (Atom), Google (RSS), GitHub Trending (daily + python). Anthropic RSS returned 404 (`/rss.xml`) — availability fact, not negative evidence.
- Most recent prior new-target baseline: same-track **2026-07-14 22:00** (captured just after midnight, mtime `00:11` — the true prior baseline by mtime), and 07-13 11:00. Novelty judged primarily against those. Note: the 22:00 snapshot's feed data only reached ~07-13 morning, so several 07-13 afternoon / 07-14 rows are genuinely new here.

## Novelty summary
**One small durable delta: the Vercel AI Gateway Production Index — July 2026 (07-13)** — "Open-weight models surge to 29% of volume, price per token flattens" — a concrete recurring token-economics report that strengthens the AI infra operating-economics thesis → `append_existing`. Secondary genuinely-new on-axis rows stay `raw_only`: AWS DocumentDB as an Agent Toolkit skill + OpenAI GPT-5.6 GA on Bedrock (07-13). Simon Willison own-tool posts, GitHub/Meta/Google minor rows, and GitHub Trending rotation all reinforce existing lanes.

## 1) New dated rows since the 07-14 22:00 baseline

### Strongest — durable (append_existing)
- **Vercel** — `[2026-07-13] Open-weight models surge to 29% of volume, price per token flattens` (AI Gateway Production Index — July 2026) — https://vercel.com/blog/ai-gateway-production-index-july-2026
  - Verbatim: "AI Gateway Production Index — July 2026. Every month, AI Gateway routes tens of trillions of tokens between production applications and AI labs, giving us a view of what AI usage actually looks like in today's enterprise."
  - Why it matters: concrete, recurring, production-grounded token-economics data (open-weight adoption share climbing to ~29% of routed volume + price-per-token flattening). This is exactly the "what it costs to operate / where the margin is" axis of `ai-infra-operating-economics.md` — a fresh data point, not a new branch → `append_existing`.

### On-axis reinforcement (raw_only)
- **AWS** — `[2026-07-13] Amazon DocumentDB (with MongoDB compatibility) now available as a skill in the Agent Toolkit for AWS` — https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-documentdb-agent-skill (agent-tool-access / Agent Toolkit skills lane — same seam as the 07-10 AWS MCP Server OAuth + 07-11 DMS Schema Conversion MCP appends; single-surface reinforcement)
- **AWS** — `[2026-07-13] OpenAI GPT-5.6 Sol, Terra, and Luna now generally available on Amazon Bedrock` — https://aws.amazon.com/about-aws/whats-new/2026/07/openai-gpt-sol-terra/ (frontier-model platform propagation — GPT-5.6 family now on Bedrock; reinforces the "model as routing config across platforms" lane already tracked)
- **AWS SageMaker JumpStart** — `[2026-07-13]` adds `Gemma-4-E2B-it`, `Qwen3 embedding+reranking`, `Voxtral-Mini-4B-Realtime`, `OpenAI privacy-filter (PII detection/masking)` — https://aws.amazon.com/about-aws/whats-new/2026/07/gemma-4-e2b-on-sagemaker-jumpstart/ (model-catalog rotation, on-axis but low durability)
- **Vercel** — `[2026-07-14] Chat SDK adds X adapter support` — https://vercel.com/changelog/chat-sdk-adds-x-adapter-support ; `[2026-07-13] Agent Runs now show subagent activity on eve projects` — https://vercel.com/changelog/agent-runs-now-show-subagent-activity-on-eve-projects ; `[2026-07-13] Deployment Policies (which sources can create deployments)` — https://vercel.com/changelog/configure-which-sources-can-create-deployments-with-deployment-policies ; CLI flag targeting + cost-efficient Web Analytics/Speed Insights (07-13). Agent-runtime/deploy-control-plane rows, single-surface reinforcement.

### Minor / low-durability (raw_only)
- **GitHub changelog** — `[2026-07-13] GitHub Code Quality license estimate in public preview` — https://github.blog/changelog/2026-07-13-github-code-quality-license-estimate-in-public-preview ; `[2026-07-13] Separate SSO and Organizations pages in Settings` — https://github.blog/changelog/2026-07-13-separate-sso-and-organizations-pages-in-settings (admin/platform, minor)
- **Meta Engineering** — `[2026-07-13] Modernizing the Meta Ads Service With an Open-Source Kernel Scheduler` — https://engineering.fb.com/2026/07/13/ml-applications/modernizing-the-meta-ads-service-with-an-open-source-kernel-scheduler/ (infra/OSS but ads-service-specific, single-surface)
- **Simon Willison** — `[2026-07-14] Using uvx in GitHub Actions in a cache-friendly way` — https://simonwillison.net/2026/Jul/14/uvx-github-actions-cache/ ; `[2026-07-13] DOOMQL` — https://simonwillison.net/2026/Jul/13/doomql/ ; `[2026-07-13] datasette code-frequency chart on GitHub` — https://simonwillison.net/2026/Jul/13/datasette-code-frequency/ (own-tool notes + quips, low durability, reinforces own-tool-release lane)
- **Google blog** — `[2026-07-13] video campaign groups` (ads, noise) + `[2026-07-13] Waze rolls out new customization + Gemini updates` (product-UX noise). No new on-axis row.

## 2) RSS/Atom feeds re-checked — no new rows past the 07-14 22:00 baseline
- **Cloudflare** — newest still `[2026-07-13] Introducing Precursor: detecting agentic behavior with continuous client-side signals` — https://blog.cloudflare.com/introducing-precursor/ (captured 07-14 22:00, raw_only). Meerkat / Worker-cache / Monetization-Gateway / agentic-internet-bot-report earlier, all baselined. No new row.
- **OpenAI news** — newest still `[2026-07-10] How Deutsche Telekom is rewiring telecommunications with AI` — https://openai.com/index/deutsche-telekom (baselined). GPT-5.6 family / M365 Copilot / Bio Bug Bounty (07-09) baselined. No new OpenAI-news row (GPT-5.6 GA now propagating via AWS Bedrock + GitHub Copilot instead).
- **Hugging Face** — newest still `[2026-07-10] Profiling in PyTorch (Part 3)` — https://huggingface.co/blog/torch-attention-profile (baselined); Data for Agents / native vLLM backend 07-08 baselined. No new row.
- **Docker blog** — newest still `[2026-07-08] Your Laptop Is the New Production Environment` — https://www.docker.com/blog/your-laptop-is-the-new-production-environment/ (baselined); Why AI Agents Need Isolation (07-01) baselined. No new row.
- **Anthropic** — RSS 404 (`/rss.xml`) — availability fact, no feed-surfaced launch.

## 3) GitHub Trending (daily + python) — copied top rows
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- Visible daily rows: `OpenCut-app/OpenCut`, `HKUDS/Vibe-Trading`, `moeru-ai/airi`, `Shubhamsaboo/awesome-llm-apps`, `Nutlope/hallmark`, `Raphire/Win11Debloat`, `Graphify-Labs/graphify`, `hasaneyldrm/exercises-dataset`, `github/spec-kit`, `coreyhaines31/marketingskills`.
- Visible python rows: `HKUDS/Vibe-Trading`, `Shubhamsaboo/awesome-llm-apps`, `Graphify-Labs/graphify`, `github/spec-kit`, `PrefectHQ/prefect`, `FoundationAgents/OpenManus`, `virattt/ai-hedge-fund`, `smicallef/spiderfoot`, `TauricResearch/TradingAgents`, `p-e-w/heretic`, `3b1b/manim`, `make-all/tuya-local`, `Vexa-ai/vexa`, `simonlin1212/TradingAgents-astock`.
- On-axis rows repeating prior baselines: `Vibe-Trading` / `ai-hedge-fund` / `TradingAgents` / `TradingAgents-astock` (AI-investing lane), `awesome-llm-apps` / `OpenManus` (agent frameworks), `moeru-ai/airi` (AI companion/agent), `github/spec-kit` (spec-driven dev tooling), `p-e-w/heretic` (LLM tooling), `Vexa-ai/vexa` (meeting-agent). All reinforce lanes the wiki already tracks — single-surface Trending rotation, no new durable branch.
- Off-axis / generic rows excluded: `OpenCut-app/OpenCut`, `Raphire/Win11Debloat`, `Graphify-Labs/graphify`, `coreyhaines31/marketingskills`, `hasaneyldrm/exercises-dataset`, `PrefectHQ/prefect`, `smicallef/spiderfoot`, `3b1b/manim`, `make-all/tuya-local`, `Nutlope/hallmark`, `public-apis/public-apis`.

## Filtering notes
- Excluded as noise: OpenAI/Google enterprise-customer & health/sports/ads/product-UX PR, AWS region/instance-availability rows, off-axis / generic trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-07-14 11:00 new-target pass. **One small durable delta:** the Vercel AI Gateway Production Index — July 2026 (07-13) — "Open-weight models surge to 29% of volume, price per token flattens" — a concrete recurring token-economics report that strengthens `ai-infra-operating-economics.md` → `append_existing`. Secondary genuinely-new on-axis rows (AWS DocumentDB Agent Toolkit skill, OpenAI GPT-5.6 GA on Bedrock, SageMaker JumpStart model adds, Vercel deploy/agent-runtime changelog rows) stay `raw_only` as single-surface reinforcement of existing lanes. Simon Willison own-tool posts, GitHub/Meta/Google minor rows, and GitHub Trending rotation are `raw_only`. Durable action = this raw transcript + the concept-page append + a Honcho routing audit + a `log.md` entry; `index.md` left unchanged. Anthropic RSS 404 (availability fact).
