---
title: Interest signal collection — 11:00 new-target run (2026-08-07)
created: 2026-08-07
type: raw-transcript
captured_at: 2026-08-07T11:20:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: append_existing
route_confidence: high
route_reason: >
  11:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-11-00-2026-08-07
  raw existed before this run. Baseline = most-recent same-track completed transcript =
  2026-08-06 22:00 (which absorbed Cloudflare "Agents Week" Day 3 [08-05] into an append_existing
  on ai-infra-operating-economics.md) + concepts/ai-infra-operating-economics.md. Novelty judged
  against them. Result: ONE genuinely-new durable delta — Cloudflare shipped "Agents Week" Day 4
  on 08-06 (a six-post "agentic internet" batch dated 2026-08-06 13:00 GMT, NOT present at the
  08-06 22:00 fetch, whose cloudflare surface still showed only Day-3 [08-05] rows + the SASE/SSE
  PR): "Building an open Agentic Internet: readable, discoverable, callable, and payable" +
  "The next generation of MCP" (MCP v2, stateless rewritten core on Workers) + "Give any website a
  WebMCP interface" (developer preview) + "Introducing Kitesurf: the agent-first browser that runs
  in V8 isolates on Cloudflare Workers" + "Cloudflare AI Search: give your agents a search engine
  for your data" + "From ranking to recommended" (AEO / Agent Readiness). Same vendor / same launch
  week / same agent-runtime-operating-layer axis as Days 1-3 → append_existing (one small dated
  subsection, NOT a new page), extending the arc from runtime (Day 1) → lifecycle/payments/governance
  (Day 2) → identity/access/security + agent OS (Day 3) → the agent-facing WEB layer: how agents
  discover, browse, call, and pay for the open internet (Day 4). Everything else = single-surface
  raw_only reinforcement of already-tracked lanes: Vercel "Agent Plugins" 1.0.0 + Marketplace
  provider-skills install + Ling 3.0 Tiny; AWS Bedrock AgentCore runtime instances GA + ECS
  fractional-GPU (G6f) + Lambda console-to-IDE for Kiro/Cursor + Security Agent email-MFA; GitHub
  Copilot Kimi K3; HF "Baseten on HF Inference Providers"; HN "Inside vLLM" deep-dive + AMD-acquires-
  Taalas (inference-in-silicon); Simon Willison datasette 1.0a38/0.65.3; OpenAI GPT-5.6 Sol/Luna
  product PR + "how the world is putting ChatGPT to work"; Google WeatherNext 2 / Gemini consumer PR;
  GitHub Trending skills/agent rotation (cloudflare/computer still trending). Meta Eng / Docker /
  github-changelog scanning rows unchanged since 08-05/08-06. Anthropic RSS 404 (availability fact,
  consistent with 08-02..08-06).
routing:
  - {surface: cloudflare, route: append_existing, note: "DURABLE DELTA — Agents Week Day 4 (08-06), six new 2026-08-06 13:00 GMT posts NOT present at the 08-06 22:00 baseline: 'Building an open Agentic Internet: readable, discoverable, callable, and payable' (https://blog.cloudflare.com/the-agentic-internet/ — 'Agents are a new kind of visitor... Block them and you block your customer. We're building the open tools and protocols so publishers and agents can cooperate and not collide'); 'The next generation of MCP' / MCP v2 (https://blog.cloudflare.com/mcp-v2/ — 'rewritten, stateless core that just works on Workers', new feature lifecycle + SDK migration path); 'Give any website a WebMCP interface' (https://blog.cloudflare.com/webmcp/ — dev preview, 'With one switch, any site becomes usable by browser AI agents — no new APIs, no origin changes'); 'Introducing Kitesurf: The agent-first browser that runs in V8 isolates on Cloudflare Workers' (https://blog.cloudflare.com/kitesurf/ — 'stateless, highly scalable, cost-effective web browser that runs entirely on Workers, designed for the Agentic Cloud'); 'Cloudflare AI Search: give your agents a search engine for your data' (https://blog.cloudflare.com/ai-search-easier/); 'From ranking to recommended: get your site ready to thrive in the age of AI agents' (https://blog.cloudflare.com/aeo/ — Agent Readiness + Answer Engine Optimization, 'More than half of requests now come from machines'). Same vendor/launch-week/axis as Days 1-3 → append_existing (Day 4 = the agent-facing web/discovery/browser/protocol layer)."}
  - {surface: vercel, route: raw_only, note: "Genuinely-new 08-06 rows on the already-tracked agent-plugins/skills-distribution lane: 'Introducing Agent Plugins' (https://vercel.com/blog/introducing-agent-plugins) + 'Introducing Agent Plugins 1.0.0' (https://vercel.com/changelog/introducing-agent-plugins-1-0-0) + 'Marketplace integrations now install provider skills' (https://vercel.com/changelog/vercel-marketplace-agent-skills) — agent-skills/plugins distribution, reinforces the GitHub-Trending claude-skills / skills.sh lane already tracked; 'Ling 3.0 Tiny is now available on AI Gateway' (https://vercel.com/changelog/ling-3-0-tiny-is-now-available-on-ai-gateway — model-serving). All single-surface changelog rows → raw_only. (Chat SDK durable approvals / Drains traces / v0 API / AI-Gateway-on-AWS-Marketplace already captured 08-06 22:00.)"}
  - {surface: aws-whatsnew, route: raw_only, note: "Genuinely-new on-axis 08-06 rows: 'AgentCore runtime instances are now generally available' (https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/ — Bedrock AgentCore agent-runtime serving GA, agent-runtime/operating lane); 'Amazon ECS now supports fractional GPU scheduling with EC2 G6f instances' (https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-fractional-gpu/ — GPU-utilization/serving economics); 'AWS Lambda console extends console-to-IDE integration to Kiro and Cursor' (https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-ide-kiro-cursor/ — agent-coding-IDE integration); 'AWS Security Agent now supports email-based MFA for penetration testing' (https://aws.amazon.com/about-aws/whats-new/2026/08/aws-security-agent-mfa/ — security-agent). All single-surface vendor rows on already-tracked serving/agent lanes → raw_only. Rest (EC2 G7 Spain region, ElastiCache Graviton4, Glue Schema Registry regions, Transform migrations, RDS storage-init visibility, WorkSpaces observability, Marketplace net-payment-terms) = region/availability/admin noise → discard."}
  - {surface: github-changelog, route: raw_only, note: "ONE genuinely-new 08-06 row: 'Kimi K3 is now available in GitHub Copilot' (https://github.blog/changelog/2026-08-06-kimi-k3-is-now-available-in-github-copilot — model addition to Copilot, mildly on-axis). Rest unchanged 08-04/08-03 batch (code-scanning-at-scale, Copilot Billing Preview retirement, Spark deprecation, CodeQL 2.26.2, Dependabot branch names, Copilot cloud-agent reasoning-level). Enterprise devtools/admin, off core axis → raw_only."}
  - {surface: hackernews, route: raw_only, note: "Genuinely-new on-axis frontpage rows (08-06): 'Inside vLLM: Anatomy of a High-Throughput LLM Inference System (2025)' (https://www.aleksagordic.com/blog/vllm — vLLM internals deep-dive, CK core inference-infra interest but single-surface repost); 'AMD acquires Taalas to boost inference performance by etching models in silicon' (https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344 — inference-chip infra M&A); 'Herdr is joining Y Combinator. The runtime stays open' (https://herdr.dev/blog/herdr-is-joining-y-combinator/ — open runtime); OpenAI GPT-5.6 Sol/Luna (cross-ref). All single-surface → raw_only. Rest off-axis (Kelvin-Helmholtz on the Sun, Mario Meets Pareto, HIBP Nepal, USB-C cable testing, Taste Is All That's Left, HPV chewing gum, steak, ProvenMetal YC) → discard."}
  - {surface: hf-blog, route: raw_only, note: "ONE genuinely-new top row (08-06): 'Baseten on Hugging Face Inference Providers' (https://huggingface.co/blog/baseten — inference-provider integration, model-serving lane). Single-surface → raw_only. Older rows (08-04 LFM2.5-2.6B local agents, 07-30 idle-GPU economics, 07-28 OlmoEarth, 07-27 Cosmos-H-Dreams / agent-intrusion timeline) unchanged."}
  - {surface: openai-news, route: raw_only, note: "Genuinely-new 08-06 rows: 'Improving GPT-5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users' (https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt — model/product update); 'From asking to doing: How the world is putting ChatGPT to work' (https://openai.com/index/how-the-world-is-putting-chatgpt-to-work — usage PR); 'Working with the American Psychological Association on youth mental health and AI' (https://openai.com/index/openai-and-apa-partner-to-advance-responsible-ai — policy PR). Low-durability product/PR, single-surface → raw_only. 08-04 cyber-evals / Codex-education already captured."}
  - {surface: simonwillison, route: raw_only, note: "Genuinely-new 08-06 own-tool release cadence: 'datasette 1.0a38' (https://simonwillison.net/2026/Aug/6/datasette/), 'datasette 0.65.3' (https://simonwillison.net/2026/Aug/6/datasette-2/), 'Simon Willison on Technical Blogging' (https://simonwillison.net/2026/Aug/6/simon-willison-on-technical-blogging/). LLM-tooling release/quote cadence, no durable delta → raw_only. 08-05/08-06 agent-security incident cluster (Meta model hacked / unsanctioned agent behaviour) already captured 08-06 22:00."}
  - {surface: google, route: raw_only, note: "Genuinely-new 08-06 rows: 'Our WeatherNext 2 AI model demonstrated a massive leap forward in predicting cyclones' (https://blog.google/innovation-and-ai/models-and-research/google-deepmind/weathernext-2-cyclones/ — DeepMind weather model, on-axis-ish but consumer-science PR); 'How Gemini plans such detailed vacation itineraries' (consumer). Single-surface PR → raw_only. Rest (Wallet kids money, tango Arts&Culture, Ask Maps food ordering) → discard. 08-05 DeepMind leadership change already captured 08-06 22:00."}
  - {surface: meta-eng, route: raw_only, note: "No new rows vs 08-06 22:00. Top still 08-05 'From User Sequences to Scaling Laws: Multi-Stage Architecture for Meta's Ads Ranking' + 08-03 GEM (both already captured). Reinforcement."}
  - {surface: docker-blog, route: raw_only, note: "No new rows vs 08-06 22:00. Top still 08-05 'Governance Is a Developer Experience Problem' + 08-04 supply-chain-siege (both already captured). Reinforcement."}
  - {surface: github-trending, route: raw_only, note: "Daily+python same skills/agent lane rotation: cloudflare/computer still trending (mild cross-surface confirmation of the Cloudflare agent-runtime axis), TencentCloud/TencentDB-Agent-Memory (agent-memory, Honcho-adjacent), addyosmani/agent-skills, mattpocock/skills, huangruiteng/loopx, obra/superpowers, firecrawl/pdf-inspector, esengine/DeepSeek-Reasonix, tirth8205/code-review-graph, usestrix/strix (security agent), unclecode/crawl4ai, ComposioHQ/awesome-claude-skills, aws/agent-toolkit-for-aws, langchain-ai/open-swe, browser-use/video-use, livekit/agents, K-Dense-AI/scientific-agent-skills, Unclecheng-li/VulnClaw, NousResearch/hermes-agent (CK's own stack repeat). Same lane, no new durable branch → raw_only. Off-axis: goauthentik/authentik, google/guava, TapXWorld/ChinaTextbook, Significant-Gravitas/AutoGPT, uber/ADR, SimplifyJobs/Summer2027-Internships, frappe/hrms, Comfy-Org/workflow_templates, donnemartin/system-design-primer."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); no product/eng launch surfaced via feed (availability fact, consistent with 08-02..08-06)."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-08-06.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-08-07)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-07 (captured ~11:20 KST; on-time 11:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_1100_0807.py` → `.cache/newtarget-2026-08-07-1100/`, parsed with `/tmp/nt_parse_1100_0807.py` + `/tmp/nt_cf_desc_0807.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google, GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent with 08-02..08-06).
- Baseline: most-recent same-track completed transcript **2026-08-06 22:00** (absorbed Cloudflare "Agents Week" Day 3 [08-05] into one `append_existing` on `ai-infra-operating-economics.md`) + `concepts/ai-infra-operating-economics.md`. Novelty judged against them.

## Novelty summary
**One durable delta + otherwise reinforcement.** Cloudflare shipped **"Agents Week" Day 4 on 08-06** — a six-post "agentic internet" batch (dated 2026-08-06 13:00 GMT) not present at the 08-06 22:00 fetch — continuing the exact arc already on `ai-infra-operating-economics.md` (Day 1 runtime primitives → Day 2 lifecycle/payments/governance → Day 3 identity/access/security + agent OS → **Day 4 = the agent-facing WEB layer: how agents discover, browse, call, and pay for the open internet**). Same vendor / same launch week / same operating-layer axis → `append_existing` (one small dated subsection, not a new page). Every other genuinely-new row across surfaces is a single-surface item reinforcing an already-tracked lane → `raw_only`.

## 1) DURABLE DELTA — Cloudflare "Agents Week" Day 4 (08-06, append_existing)
Source URL: https://blog.cloudflare.com/rss/
- `[2026-08-06] Building an open Agentic Internet: readable, discoverable, callable, and payable` — https://blog.cloudflare.com/the-agentic-internet/
  - Verbatim: "Agents are a new kind of visitor. They don't render CSS or click ads, but they have a paying human on the other end. Block them and you block your customer. We're building the open tools and protocols so publishers and agents can cooperate and not collide."
- `[2026-08-06] The next generation of MCP` (MCP v2) — https://blog.cloudflare.com/mcp-v2/
  - Verbatim: "The next version of MCP has a rewritten, stateless core that just works on Workers. We cover upgrades to the protocol, the new feature lifecycle and SDK migration path, and hear from early adopters already running it in production."
- `[2026-08-06] Give any website a WebMCP interface` — https://blog.cloudflare.com/webmcp/
  - Verbatim: "we're launching a developer preview of WebMCP on Cloudflare. With one switch, any site becomes usable by browser AI agents — no new APIs, no origin changes — while the human stays in control and creators keep their traffic."
- `[2026-08-06] Introducing Kitesurf: The agent-first browser that runs in V8 isolates on Cloudflare Workers` — https://blog.cloudflare.com/kitesurf/
  - Verbatim: "Kitesurf is Cloudflare's new stateless, highly scalable, and cost-effective web browser that runs entirely on top of Workers and was designed specifically for the Agentic Cloud."
- `[2026-08-06] Cloudflare AI Search: give your agents a search engine for your data` — https://blog.cloudflare.com/ai-search-easier/
  - Verbatim: "AI Search makes search easier than ever, with no Cloudflare primitives to stitch together. Point it at your data to create a search for your own files and websites."
- `[2026-08-06] From ranking to recommended: get your site ready to thrive in the age of AI agents` — https://blog.cloudflare.com/aeo/
  - Verbatim: "More than half of requests now come from machines, not people. Agent Readiness shows how well agents can discover and read your site, while Answer Engine Optimization tracks how often AI assistants recommend you."

## 2) Genuinely-new single-surface rows (raw_only — reinforce already-tracked axes)

### Vercel — Agent Plugins / skills distribution (08-06)
Source URL: https://vercel.com/atom
- `[2026-08-06] Introducing Agent Plugins` — https://vercel.com/blog/introducing-agent-plugins ; `Introducing Agent Plugins 1.0.0` — https://vercel.com/changelog/introducing-agent-plugins-1-0-0
- `[2026-08-06] Marketplace integrations now install provider skills` — https://vercel.com/changelog/vercel-marketplace-agent-skills (agent-skills distribution, reinforces the skills.sh / claude-skills lane)
- `[2026-08-06] Ling 3.0 Tiny is now available on AI Gateway` — https://vercel.com/changelog/ling-3-0-tiny-is-now-available-on-ai-gateway (model-serving)

### AWS What's New — agent-runtime serving + GPU economics (08-06)
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/feed/
- `[2026-08-06] AgentCore runtime instances are now generally available` — https://aws.amazon.com/about-aws/whats-new/2026/08/aws-bedrock-agentcore-runtime-instances-generally-available/ (Bedrock AgentCore agent-runtime serving GA)
- `[2026-08-06] Amazon ECS now supports fractional GPU scheduling with Amazon EC2 G6f instances` — https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ecs-fractional-gpu/ (GPU-utilization/serving economics)
- `[2026-08-06] AWS Lambda console extends console-to-IDE integration to Kiro and Cursor` — https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-ide-kiro-cursor/ (agent-coding-IDE)
- `[2026-08-06] AWS Security Agent now supports email-based MFA for penetration testing` — https://aws.amazon.com/about-aws/whats-new/2026/08/aws-security-agent-mfa/ (security-agent)

### Hugging Face — inference provider (08-06)
Source URL: https://huggingface.co/blog/feed.xml
- `[2026-08-06] Baseten on Hugging Face Inference Providers` — https://huggingface.co/blog/baseten (model-serving/inference-provider lane)

### GitHub changelog — Copilot model addition (08-06)
Source URL: https://github.blog/changelog/feed/
- `[2026-08-06] Kimi K3 is now available in GitHub Copilot` — https://github.blog/changelog/2026-08-06-kimi-k3-is-now-available-in-github-copilot

### Hacker News — inference infra (08-06)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-06] Inside vLLM: Anatomy of a High-Throughput LLM Inference System (2025)` — https://www.aleksagordic.com/blog/vllm (vLLM internals deep-dive — CK core inference-infra interest, single-surface repost)
- `[2026-08-06] AMD acquires Taalas to boost inference performance by etching models in silicon` — https://www.theregister.com/systems/2026/08/06/amd-acquires-ai-chip-startup-taalas-to-boost-inference-performance-by-etching-models-into-silicon/5284344 (inference-chip infra M&A)
- `[2026-08-06] Herdr is joining Y Combinator. The runtime stays open` — https://herdr.dev/blog/herdr-is-joining-y-combinator/

### OpenAI — product/PR (08-06)
Source URL: https://openai.com/news/rss.xml
- `[2026-08-06] Improving GPT-5.6 Sol in ChatGPT—and expanding access to GPT-5.6 Luna for free users` — https://openai.com/index/improving-gpt-5-6-sol-in-chatgpt
- `[2026-08-06] From asking to doing: How the world is putting ChatGPT to work` — https://openai.com/index/how-the-world-is-putting-chatgpt-to-work

### Simon Willison — own-tool release cadence (08-06)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-06] datasette 1.0a38` — https://simonwillison.net/2026/Aug/6/datasette/ ; `datasette 0.65.3` — https://simonwillison.net/2026/Aug/6/datasette-2/ ; `Simon Willison on Technical Blogging` — https://simonwillison.net/2026/Aug/6/simon-willison-on-technical-blogging/

### Google — DeepMind weather model + consumer PR (08-06)
Source URL: https://blog.google/rss/
- `[2026-08-06] Our WeatherNext 2 AI model demonstrated a massive leap forward in predicting cyclones` — https://blog.google/innovation-and-ai/models-and-research/google-deepmind/weathernext-2-cyclones/ (DeepMind model, consumer-science PR)

## 3) GitHub Trending (daily + python) — skills/agent rotation (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- **Cross-surface note:** `cloudflare/computer` (the Day-1 agent runtime) still trending = mild confirmation of the Cloudflare agent-runtime axis.
- On-axis rows (same lane, `raw_only`): `TencentCloud/TencentDB-Agent-Memory` (agent-memory, Honcho-adjacent), `addyosmani/agent-skills`, `mattpocock/skills`, `huangruiteng/loopx`, `obra/superpowers`, `firecrawl/pdf-inspector`, `esengine/DeepSeek-Reasonix`, `tirth8205/code-review-graph`, `usestrix/strix` (security agent), `unclecode/crawl4ai`, `ComposioHQ/awesome-claude-skills`, `aws/agent-toolkit-for-aws`, `langchain-ai/open-swe`, `browser-use/video-use`, `livekit/agents`, `K-Dense-AI/scientific-agent-skills`, `Unclecheng-li/VulnClaw`, `NousResearch/hermes-agent` (CK's own stack repeat).
- Off-axis excluded: `goauthentik/authentik`, `google/guava`, `TapXWorld/ChinaTextbook`, `Significant-Gravitas/AutoGPT`, `uber/ADR`, `SimplifyJobs/Summer2027-Internships`, `frappe/hrms`, `Comfy-Org/workflow_templates`, `donnemartin/system-design-primer`.

## 4) Reinforcement — unchanged vs the 08-06 22:00 baseline (raw_only)
- **Meta Eng**: top still 08-05 ads-ranking multi-stage architecture + 08-03 GEM (both already captured). Reinforcement.
- **Docker**: top still 08-05 "Governance Is a Developer Experience Problem" + 08-04 supply-chain-siege (both already captured). Reinforcement.
- **GitHub changelog**: rest of feed unchanged 08-04/08-03 batch (code-scanning-at-scale, Copilot Billing Preview retirement, Spark deprecation, CodeQL 2.26.2). Reinforcement.

## Filtering notes
- Excluded as noise: AWS EC2-G7-Spain-region / ElastiCache-Graviton4 / Glue-Schema-Registry-regions / Transform-migrations / RDS-storage-init / WorkSpaces-observability / Marketplace-net-payment-terms availability rows, Google Wallet-kids-money / tango-Arts&Culture / Ask-Maps-food-ordering consumer PR, GitHub code-scanning/Dependabot admin rows, HN off-axis (Kelvin-Helmholtz on the Sun, Mario Meets Pareto, HIBP Nepal, USB-C cable testing, Taste Is All That's Left, HPV chewing gum, steak, ProvenMetal YC), generic educational/framework trending repos, Cloudflare SASE/SSE Gartner Visionary PR.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-07 11:00 new-target pass. **One durable delta = Cloudflare "Agents Week" Day 4 (08-06)** — the "agentic internet" batch: an open Agentic Internet (readable/discoverable/callable/payable), MCP v2 (stateless rewritten core on Workers), WebMCP (any site → browser-agent usable in one switch), Kitesurf (agent-first browser in V8 isolates on Workers), AI Search (agent search over your data), AEO/Agent Readiness. Same vendor/launch-week/axis as Days 1-3 → `append_existing` (one small dated subsection on `ai-infra-operating-economics.md`, extending the arc to the agent-facing web/discovery/browser/protocol layer). Everything else single-surface `raw_only`: Vercel Agent Plugins 1.0.0 + Marketplace provider-skills + Ling 3.0 Tiny; AWS Bedrock AgentCore runtime GA + ECS fractional GPU + Lambda console-to-IDE Kiro/Cursor + Security-Agent MFA; GitHub Copilot Kimi K3; HF Baseten inference-provider; HN Inside-vLLM + AMD-Taalas inference-in-silicon; Simon Willison datasette releases; OpenAI GPT-5.6 Sol/Luna PR; Google WeatherNext 2; GitHub Trending skills/agent rotation. Anthropic RSS 404 (availability fact). Durable action = this raw transcript + one `append_existing` on `ai-infra-operating-economics.md` + a Honcho routing audit + a `log.md` entry; `index.md` left unchanged.
