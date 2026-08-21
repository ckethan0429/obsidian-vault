---
title: Interest signal collection — 11:00 new-target run (2026-08-21)
created: 2026-08-21
type: raw-transcript
captured_at: 2026-08-21T11:12:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  11:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-11-00-2026-08-21
  raw existed before this run. Baseline for the new-target track = the most-recent new-target transcript
  interest-signal-collection-11-00-2026-08-20.md (~24h ago; there was NO 22:00 new-target run on 08-20)
  + concepts/ai-infra-operating-economics.md (skills/plugins-ecosystem lane + agent-security "securable"
  leg already durably captured) + concepts/agent-runtime-vertical-integration.md (execution-environment
  axis, created 08-18) + concepts/honcho.md. Result: REINFORCEMENT-ONLY at the durable layer. The most
  coherent genuinely-new angle this pass is a CROSS-VENDOR AGENT OAUTH / CREDENTIAL-SCOPING mini-cluster
  spanning three surfaces — Cloudflare "From all-or-nothing to task-based OAuth consent" + AWS "Partner
  Central agents MCP Server now supports OAuth with AWS Sign-In" + Vercel "How v0 authenticates to
  Snowflake without exposing the user's OAuth token" — a facet of the already-captured agentic-security /
  securable lane, so strong raw_only (3-surface convergence, macro-axis unchanged), NOT a re-application.
  Second: cross-vendor PLUGIN-SPEC standardization — cursor/plugins ("Cursor plugin specification and
  official plugins") trending alongside the already-captured OFFICIAL anthropics/claude-plugins-official,
  reinforcing the skills/plugins-ecosystem lane. Third: agent frameworks/security repos trending
  (microsoft/agent-framework, Tencent/AI-Infra-Guard AI red-teaming, agent-substrate/substrate,
  akitaonrails/ai-memory) — managed-agents + securable lanes. Fourth: open-weight/inference reinforcement
  — Google "Gemmaverse: 1 billion Gemma downloads", HF LiquidAI "LFM2.5-DSpark 3.2x faster inference"
  (reinforces 08-19 LiquidAI QAD), modular/modular trending (Mojo open-sourced 08-18). Other new rows all
  single-surface raw_only/discard: OpenAI "Introducing AI Futures" (policy/governance blog, off-core) +
  Stampli ChatGPT Work case study; GitHub changelog GitHub Code Quality GA cluster (separate Actions path
  + audit-log + mitigated-alert dismissal) reinforcing 08-19 code-quality lane; AWS EC2 P6-B300 (Blackwell
  Ultra) in Seoul + SageMaker GenAI Inference Recommendation; HN GitHub Aug-17 outage postmortem + malicious
  Rust crate Arrayref build-time payload (supply-chain security) + OpenRouter stealth model ox-alpha; Vercel
  Agent in Slack code channels + Bun 1.4 in Functions; Simon Willison ChatGPT site:-operator + Bun.WebView
  JSON API. Meta Eng + Google Research UNCHANGED vs baseline. Docker top = new Verified-Publisher-self-serve
  (marketplace housekeeping). Anthropic RSS 404 (availability fact, consistent 08-02..08-21). Durable action
  = this raw transcript + a Honcho routing audit + a log.md entry only; index.md and all concept pages
  (incl. ai-infra-operating-economics.md and agent-runtime-vertical-integration.md) left unchanged.
routing:
  - {surface: github-trending, route: raw_only, note: "Genuinely-NEW repos vs 08-20 11:00, all reinforcing already-captured lanes → strong raw_only: cursor/plugins ('Cursor plugin specification and official plugins' — cross-vendor plugin-spec standardization following OFFICIAL anthropics/claude-plugins-official captured 08-20; strongest trending row, skills/plugins-ecosystem lane); microsoft/agent-framework ('framework for building, orchestrating, deploying AI agents and multi-agent workflows, Python/.NET' — managed-agents lane); Tencent/AI-Infra-Guard ('full-stack AI Red Teaming platform ... Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation' — agentic-security/securable lane); modular/modular ('Modular Platform incl. MAX & Mojo' — Mojo open-sourced 08-18, now trending; inference/GPU lane); akitaonrails/ai-memory ('long term memory for agent coding CLIs + handoff between agent vendors' — agent-memory, Honcho-adjacent); agent-substrate/substrate ('Agent Substrate: the core system' — agent-infra); Osmantic/ODS ('turn your PC/Mac/Linux into an AI server: LLM inference, chat UI, voice, agents, workflows, RAG, image gen' — local-inference); JuliusBrussee/caveman ('Claude Code skill that cuts 65% of tokens by talking like caveman' — token-optimization skill); RyanCodrai/turbovec (vector index on TurboQuant, Rust); docling-project/docling (doc parsing for gen AI), HKUDS/LightRAG, pipecat-ai/pipecat (voice agents). Carry-over same lanes: mattpocock/skills, obra/superpowers, PostHog/posthog, volcengine/OpenViking, chaitanyagiri/munder-difflin, anthropics/claude-code, jundot/omlx, mukul975/Anthropic-Cybersecurity-Skills, usestrix/strix, browser-use/browser-use, santifer/career-ops. Off-axis excluded: AprilNEA/OpenLogi, harry0703/MoneyPrinterTurbo, mahlernim/google-timeline-visualizer, ATH-MaaS/Pixelle-Video, makeplane/plane, goauthentik/authentik, yt-dlp/yt-dlp, marceloprates/prettymaps."}
  - {surface: cloudflare, route: raw_only, note: "ONE genuinely-new top row since 08-20 11:00: 'From all-or-nothing to task-based OAuth consent' (08-20 17:03 — https://blog.cloudflare.com/task-based-oauth-consent/ — scoped/task-based OAuth consent, a credential-minimization primitive for agents; anchors the cross-vendor agent-OAuth mini-cluster with AWS Partner Central agents MCP OAuth + Vercel v0 Snowflake-OAuth → strong raw_only, agent-security/securable facet). Carry-over: 08-19 Spectre-on-Workers, 08-18 BGP RFC-9234, 08-14 MCP-traffic detection + secure-internal-vibe-coded-apps, 08-10 Agents Week review."}
  - {surface: aws-whatsnew, route: raw_only, note: "Genuinely-new since 08-20 11:00: (1) 'AWS Partner Central agents MCP Server now supports OAuth with AWS Sign-In' (08-20 18:02 — https://aws.amazon.com/about-aws/whats-new/2026/8/aws-partner-central-mcp/ — MCP-server agent-auth OAuth primitive, part of the cross-vendor agent-OAuth cluster → raw_only, agent-infra); (2) 'Amazon EC2 P6-B300 instances now available in Asia Pacific (Seoul)' (08-20 18:31 — https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-p6-b300/ — Blackwell-Ultra GPU capacity in Seoul, mild GPU-infra); (3) 'Generative AI Inference Recommendation for Amazon SageMaker now in SageMaker AI Studio' (08-20 17:25 — https://aws.amazon.com/about-aws/whats-new/2026/08/generative-ai-inference-recommendation-for-amazon-sagemaker-now-available-in-the-sagemaker-ai-studio — model-serving/inference-sizing, mild). Housekeeping/discard: Local Zone Las Vegas GA, Timestream InfluxDB CMK, EKS CA rotation, CloudFront OAC for S3 MRAP, ARC Region-switch RDS block, Direct Connect prefix controls, Redshift S3-Tables retention, Marketplace category notifications. Carry-over: 08-19 Bedrock External Web Access + AgentCore web-search."}
  - {surface: vercel, route: raw_only, note: "Genuinely-new since 08-20 11:00 (mild → raw_only/discard): (1) 'How v0 authenticates to Snowflake without exposing the user OAuth token' (08-20 04:00 — https://vercel.com/blog/how-v0-authenticates-to-snowflake-without-exposing-the-users-oauth-token — agent OAuth-token isolation engineering, part of the cross-vendor agent-OAuth cluster → raw_only); (2) 'Vercel Agent is now available in Slack code channels' (08-20 00:00 — https://vercel.com/changelog/vercel-agent-is-now-available-in-slack-code-channels — agent ChatOps); (3) 'Bun 1.4 is now available in Vercel Functions' (08-20 — runtime, mild); (4) 'Custom metrics in Vercel Observability' (08-20 17:00 — mild). Housekeeping/discard: Toolbar comments from CLI, Container Registry via CLI. Carry-over: 08-19 Algolia-marketplace, Vercel-for-Slack, Fish-Audio-on-AI-Gateway."}
  - {surface: github-changelog, route: raw_only, note: "Genuinely-new since 08-19 21:09 (GitHub Code Quality GA cluster, reinforces 08-19 org-code-quality lane → raw_only mild): (1) 'Separate GitHub Actions path for GitHub Code Quality' (08-20 14:29 — https://github.blog/changelog/2026-08-20-separate-github-actions-path-for-github-code-quality); (2) 'Track GitHub Code Quality enablement changes in the audit log' (08-20 14:28 — https://github.blog/changelog/2026-08-20-track-github-code-quality-enablement-changes-in-the-audit-log); (3) 'Code scanning adds a mitigated alert dismissal reason' (08-20 15:14 — https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason — code-scanning/security, mild); (4) 'Pinning saved views to the repository issues sidebar is GA' (08-20 23:29 — housekeeping); (5) 'Windows 11 arm64 VS2026 image GA' (08-20 17:52 — CI images, mild). Carry-over: 08-19 CodeQL 2.26.3 + org code-quality trends."}
  - {surface: huggingface, route: raw_only, note: "ONE genuinely-new top row since 08-20 11:00: 'Up to 3.2x Faster Inference with LFM2.5-DSpark' (08-20 16:52, LiquidAI — https://huggingface.co/blog/LiquidAI/lfm25-dspark — inference-speedup / edge open-weight serving; reinforces the 08-19 LiquidAI LFM2.5 QAD row on the GPU/inference axis, single-surface → raw_only). Below carry-over: 08-18 'How Much Memory Does Your Agent Actually Need?' (IBM Research) + Multi-Vector embeddings; 08-17 GPU-utilization pt2; 08-14 State of Open Models."}
  - {surface: google-blog, route: raw_only, note: "ONE on-axis genuinely-new row since 08-20 11:00: 'Inside the Gemmaverse: Celebrating one billion Gemma downloads' (08-20 15:30 — https://blog.google/innovation-and-ai/technology/developers-tools/gemma-one-billion-downloads/ — open-weight adoption milestone, reinforces the open-weight-ecosystem lane, single-surface → raw_only). Rest off-core → discard: 'Personalize content on Search/Discover/News', 'Interactive journey national parks', 'Make AI Max work for your business' (ads), plus 08-19 carry-over education/consumer (Back-to-School, Gemini student offer, Waymo-Ojai, Google Flow)."}
  - {surface: hackernews, route: raw_only, note: "Genuinely-new on-axis frontpage rows since 08-20 11:00 (all single-surface → raw_only): (1) 'The August 17 outage, and the work ahead' (08-20 19:22 — https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/ — GitHub infra postmortem, ops); (2) 'Malicious Rust crate Arrayref runs a build-time payload' (08-20 13:23 — https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/ — supply-chain/build-time security, adjacent to agentic-security lane); (3) 'Stealth Model — openrouter.ai/stealth/ox-alpha' (08-20 23:56 — https://openrouter.ai/stealth/ox-alpha — new stealth LLM on OpenRouter, mild); (4) 'There is no such thing as a small software team anymore' (08-21 00:28 — https://jacob.gold/posts/theres-no-such-thing-as-a-small-software-team/ — agent-productivity essay, mild). Off-axis discard: EU AI-copyright + Amazon fair-use/rare-books (legal), AliExpress WebAudio fingerprinting, Consumer Rights Wiki, Aaron-Swartz/Meta-scraping, HTML-Can-Do-That, biology essay."}
  - {surface: openai-news, route: discard, note: "Genuinely-new since 08-20 11:00 (off-core → discard/mild): (1) 'Introducing AI Futures' (08-20 07:00 — https://openai.com/index/introducing-ai-futures — a new OpenAI blog on how transformative AI reshapes power/governance/economy/individual-freedom; policy/thought-leadership, off CK's AI-agent/infra/ops axis → discard); (2) 'Stampli cuts launch hours by 68% using ChatGPT Work' (08-20 — enterprise case study, mild). Carry-over: 08-19 Zero-Data-Retention + Replit GPT-5.6 Luna, 08-18 ChatGPT-Ads-Europe/CodeAI/cyber-capabilities/ChatGPT-for-Teens."}
  - {surface: simonwillison, route: raw_only, note: "Genuinely-new since 08-20 11:00 (mild → raw_only): (1) 'ChatGPT search now uses the site: operator at scale' (08-20 23:57 — https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/ — LLM search behavior); (2) 'A shot-scraper-style JSON API on Bun 1.4 new Bun.WebView' (08-20 15:37 — https://simonwillison.net/2026/Aug/20/bun-webview-json-api/ — tooling). Carry-over: 08-19 smolmachines/smolvm untrusted-sandbox + Jeremy Morrell + conceptual-integrity, 08-18 Mojo open source, 08-17 Qwen 3.8 27B index-52."}
  - {surface: docker, route: raw_only, note: "ONE genuinely-new top row: 'Docker Verified Publisher Applications Are Now Self-Serve' (08-20 17:00 — https://www.docker.com/blog/docker-verified-publisher-applications-are-now-self-serve/ — marketplace/publisher housekeeping, mild). Carry-over below: 08-18 '17,600 Actions: Agent Security Is a Systems Problem' + Coding Agent Horror Stories (agentic-security, absorbed 08-18 11:00) + 08-17 Make zero CVEs default."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 08-20 11:00. Top still 08-12 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 08-20 11:00. Top still 08-17 'Seeing beyond BMI' (health, off-axis) + 08-12 parametric-factuality recall + 08-11 AMIE. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-21."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-20.md
  - concepts/ai-infra-operating-economics.md
  - concepts/agent-runtime-vertical-integration.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-08-21)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-21 (captured ~11:12 KST; on-time 11:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_1100_0821.py` → `.cache/newtarget-2026-08-21-1100/`, parsed with `/tmp/nt_parse_1100_0821.py` + GitHub Trending extraction `/tmp/nt_trend_1100_0821.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-21).
- Baseline: the prior **11:00 new-target run (08-20)** (~24h old; there was NO 22:00 new-target run on 08-20) + `concepts/ai-infra-operating-economics.md` (skills/plugins-ecosystem lane + agent-security "securable" leg already durably captured) + `concepts/agent-runtime-vertical-integration.md` (execution-environment axis, created 08-18) + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer.** The most coherent genuinely-new angle this pass is a **cross-vendor agent OAuth / credential-scoping mini-cluster** spanning three surfaces — Cloudflare **"From all-or-nothing to task-based OAuth consent"** + AWS **"Partner Central agents MCP Server now supports OAuth with AWS Sign-In"** + Vercel **"How v0 authenticates to Snowflake without exposing the user's OAuth token"** — a facet of the already-captured agentic-security / securable lane, so it stays strong `raw_only` (3-surface convergence, macro-axis unchanged). Second: **cross-vendor plugin-spec standardization** — `cursor/plugins` ("Cursor plugin specification and official plugins") trending alongside the already-captured OFFICIAL `anthropics/claude-plugins-official`, reinforcing the skills/plugins-ecosystem lane. Third: agent frameworks / security repos trending (`microsoft/agent-framework`, `Tencent/AI-Infra-Guard` AI red-teaming, `agent-substrate/substrate`, `akitaonrails/ai-memory`). Fourth: open-weight/inference reinforcement — Google **"Gemmaverse: 1 billion Gemma downloads"**, HF **"LFM2.5-DSpark 3.2x faster inference"** (reinforces 08-19 LiquidAI QAD), `modular/modular` trending (Mojo open-sourced 08-18). **No durable page change** — every cluster reinforces an already-absorbed lane.

## 1) Genuinely-new-since-08-20-11:00 rows (all raw_only)

### Cross-vendor agent OAuth / credential-scoping cluster (raw_only, strongest coherent new angle — reinforces securable lane)
- Cloudflare — `[2026-08-20 17:03] From all-or-nothing to task-based OAuth consent` — https://blog.cloudflare.com/task-based-oauth-consent/ (scoped/task-based OAuth consent — credential minimization for agents; anchor of the cluster)
- AWS — `[2026-08-20 18:02] AWS Partner Central agents MCP Server now supports OAuth with AWS Sign-In` — https://aws.amazon.com/about-aws/whats-new/2026/8/aws-partner-central-mcp/ (MCP-server agent-auth OAuth primitive)
- Vercel — `[2026-08-20 04:00] How v0 authenticates to Snowflake without exposing the user's OAuth token` — https://vercel.com/blog/how-v0-authenticates-to-snowflake-without-exposing-the-users-oauth-token (agent OAuth-token isolation engineering)

### GitHub Trending — plugin-spec + agent-framework + agent-security wave (raw_only, reinforces already-captured lanes)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- `cursor/plugins` — "Cursor plugin specification and official plugins" — https://github.com/cursor/plugins (**NEW**, cross-vendor plugin-spec standardization following OFFICIAL `anthropics/claude-plugins-official` captured 08-20; strongest trending row)
- `microsoft/agent-framework` — "A framework for building, orchestrating and deploying AI agents and multi-agent workflows with support for Python and .NET." — https://github.com/microsoft/agent-framework (**NEW** to trending, managed-agents lane)
- `Tencent/AI-Infra-Guard` — "A full-stack AI Red Teaming platform securing AI ecosystems via Agent Scan, Skills Scan, MCP scan, AI Infra scan and LLM jailbreak evaluation." — https://github.com/Tencent/AI-Infra-Guard (**NEW**, agentic-security/securable lane)
- `modular/modular` — "The Modular Platform (includes MAX & Mojo)" — https://github.com/modular/modular (**NEW** to trending; Mojo open-sourced 08-18; inference/GPU lane)
- `akitaonrails/ai-memory` — "Solution for long term memory for agent coding CLIs and to facilitate handoff between different agent vendors" — https://github.com/akitaonrails/ai-memory (**NEW**, agent-memory, Honcho-adjacent)
- `agent-substrate/substrate` — "Agent Substrate: the core system" — https://github.com/agent-substrate/substrate (**NEW**, agent-infra)
- `Osmantic/ODS` — "Turn your PC, Mac, or Linux box into an AI server. LLM inference, chat UI, voice, agents, workflows, RAG, and image generation." — https://github.com/Osmantic/ODS (**NEW**, local-inference)
- `JuliusBrussee/caveman` — "Claude Code skill that cuts 65% of tokens by talking like caveman" — https://github.com/JuliusBrussee/caveman (**NEW**, token-optimization skill)
- `RyanCodrai/turbovec` — "A vector index built on TurboQuant, written in Rust with Python bindings" — https://github.com/RyanCodrai/turbovec (**NEW**, mild)
- `docling-project/docling` — "Get your documents ready for gen AI" — https://github.com/docling-project/docling (doc parsing, on-axis)
- `HKUDS/LightRAG` — RAG — https://github.com/HKUDS/LightRAG ; `pipecat-ai/pipecat` — voice agents — https://github.com/pipecat-ai/pipecat (mild)
- Carry-over same lanes: `mattpocock/skills`, `obra/superpowers`, `PostHog/posthog`, `volcengine/OpenViking`, `chaitanyagiri/munder-difflin`, `anthropics/claude-code`, `jundot/omlx`, `mukul975/Anthropic-Cybersecurity-Skills`, `usestrix/strix`, `browser-use/browser-use`, `santifer/career-ops`.
- Off-axis excluded: `AprilNEA/OpenLogi`, `harry0703/MoneyPrinterTurbo`, `mahlernim/google-timeline-visualizer`, `ATH-MaaS/Pixelle-Video`, `makeplane/plane`, `goauthentik/authentik`, `yt-dlp/yt-dlp`, `marceloprates/prettymaps`.

### Open-weight / inference reinforcement (raw_only)
- Google blog — `[2026-08-20 15:30] Inside the Gemmaverse: Celebrating one billion Gemma downloads` — https://blog.google/innovation-and-ai/technology/developers-tools/gemma-one-billion-downloads/ (open-weight adoption milestone)
- Hugging Face — `[2026-08-20 16:52] Up to 3.2x Faster Inference with LFM2.5-DSpark` — https://huggingface.co/blog/LiquidAI/lfm25-dspark (LiquidAI; reinforces 08-19 LFM2.5 QAD on GPU/inference axis)

### AWS What's New — GPU + inference (raw_only mild)
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/feed/
- `[2026-08-20 18:31] Amazon EC2 P6-B300 instances are now available in Asia Pacific (Seoul)` — https://aws.amazon.com/about-aws/whats-new/2026/08/amazon-ec2-p6-b300/ (Blackwell-Ultra GPU capacity in Seoul)
- `[2026-08-20 17:25] Generative AI Inference Recommendation for Amazon SageMaker now available in SageMaker AI Studio` — https://aws.amazon.com/about-aws/whats-new/2026/08/generative-ai-inference-recommendation-for-amazon-sagemaker-now-available-in-the-sagemaker-ai-studio (model-serving/inference-sizing)
- Housekeeping/discard: Local Zone Las Vegas GA, Timestream InfluxDB CMK, EKS CA rotation, CloudFront OAC for S3 MRAP, ARC Region-switch RDS block, Direct Connect prefix controls, Redshift S3-Tables retention, Marketplace category notifications.

### GitHub changelog — GitHub Code Quality GA cluster (raw_only mild)
Source URL: https://github.blog/changelog/feed/
- `[2026-08-20 14:29] Separate GitHub Actions path for GitHub Code Quality` — https://github.blog/changelog/2026-08-20-separate-github-actions-path-for-github-code-quality
- `[2026-08-20 14:28] Track GitHub Code Quality enablement changes in the audit log` — https://github.blog/changelog/2026-08-20-track-github-code-quality-enablement-changes-in-the-audit-log
- `[2026-08-20 15:14] Code scanning adds a mitigated alert dismissal reason` — https://github.blog/changelog/2026-08-20-code-scanning-adds-a-mitigated-alert-dismissal-reason (code-scanning/security)
- `[2026-08-20 23:29] Pinning saved views to the repository issues sidebar is GA` (housekeeping); `[2026-08-20 17:52] Windows 11 arm64 VS2026 image GA` (CI images)

### Hacker News — ops + supply-chain security + LLM gateway (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-20 19:22] The August 17 outage, and the work ahead` — https://github.blog/news-insights/company-news/the-august-17-outage-and-the-work-ahead/ (GitHub infra postmortem, ops)
- `[2026-08-20 13:23] Malicious Rust crate Arrayref runs a build-time payload` — https://safedep.io/arrayref-proc-macro1-rust-build-time-malware/ (supply-chain/build-time security)
- `[2026-08-20 23:56] Stealth Model (openrouter.ai/stealth/ox-alpha)` — https://openrouter.ai/stealth/ox-alpha (new stealth LLM on OpenRouter, mild)
- `[2026-08-21 00:28] There's no such thing as a small software team anymore` — https://jacob.gold/posts/theres-no-such-thing-as-a-small-software-team/ (agent-productivity essay, mild)

### Vercel — agent ChatOps + runtime (raw_only mild)
Source URL: https://vercel.com/atom
- `[2026-08-20 00:00] Vercel Agent is now available in Slack code channels` — https://vercel.com/changelog/vercel-agent-is-now-available-in-slack-code-channels (agent ChatOps)
- `[2026-08-20] Bun 1.4 is now available in Vercel Functions` — https://vercel.com/changelog/bun-1-4-is-now-available-in-vercel-functions (runtime); `[2026-08-20 17:00] Custom metrics in Vercel Observability` — https://vercel.com/changelog/custom-metrics-are-now-supported-in-vercel-observability (mild)
- Housekeeping: Toolbar comments from CLI, Container Registry via CLI.

### Simon Willison — LLM search + tooling (raw_only mild)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-20 23:57] ChatGPT search now uses the site: operator at scale` — https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/
- `[2026-08-20 15:37] A shot-scraper-style JSON API on Bun 1.4's new Bun.WebView` — https://simonwillison.net/2026/Aug/20/bun-webview-json-api/

### Docker — marketplace housekeeping (raw_only mild)
Source URL: https://www.docker.com/blog/feed/
- `[2026-08-20 17:00] Docker Verified Publisher Applications Are Now Self-Serve` — https://www.docker.com/blog/docker-verified-publisher-applications-are-now-self-serve/

### OpenAI — policy/enterprise (discard / mild)
Source URL: https://openai.com/news/rss.xml
- `[2026-08-20 07:00] Introducing AI Futures` — https://openai.com/index/introducing-ai-futures ("a new OpenAI blog exploring how transformative AI could reshape power, governance, the economy, and individual freedom" — policy/thought-leadership, off-core → discard)
- `[2026-08-20 00:00] Stampli cuts launch hours by 68% using ChatGPT Work` — https://openai.com/index/stampli (enterprise case study, mild)

## 2) Reinforcement — no genuinely-new rows vs the 08-20 11:00 baseline (raw_only)
- **Meta Eng**: top still 08-12 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Google Research**: top still 08-17 "Seeing beyond BMI" (health/imaging, off-axis) + 08-12 parametric-factuality + 08-11 AMIE. Unchanged.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-21).

## Filtering notes
- Excluded as noise/off-axis: Google blog national-parks/personalize-Search/AI-Max-ads + carry-over education/consumer (Back-to-School, Gemini student offer, Waymo-Ojai, Google Flow); HN off-axis (EU AI-copyright, Amazon fair-use/rare-books, AliExpress fingerprinting, Consumer Rights Wiki, Aaron-Swartz/Meta-scraping, HTML-Can-Do-That, biology essay); off-axis trending repos (OpenLogi, MoneyPrinterTurbo, google-timeline-visualizer, Pixelle-Video, plane, authentik, yt-dlp, prettymaps).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-21 11:00 new-target pass. **Reinforcement-only at the durable layer:** the most coherent genuinely-new angle (a cross-vendor agent OAuth / credential-scoping cluster — Cloudflare task-based OAuth consent + AWS Partner Central agents MCP OAuth + Vercel v0 Snowflake OAuth-isolation) is a facet of the already-captured agentic-security / securable lane in `ai-infra-operating-economics.md`, so it stays strong `raw_only`. Cross-vendor plugin-spec standardization (`cursor/plugins` alongside the OFFICIAL `anthropics/claude-plugins-official`) reinforces the skills/plugins-ecosystem lane; agent frameworks/security repos (`microsoft/agent-framework`, `Tencent/AI-Infra-Guard`, `agent-substrate/substrate`, `akitaonrails/ai-memory`) reinforce managed-agents + securable lanes; open-weight/inference (Google Gemma 1B downloads, HF LiquidAI LFM2.5-DSpark 3.2x, `modular/modular`) reinforces the open-weight/inference lane. All other new rows (AWS EC2 P6-B300 Seoul + SageMaker inference recommendation, GitHub Code Quality GA cluster, HN GitHub outage postmortem + Arrayref supply-chain malware + OpenRouter stealth model, Vercel Agent-in-Slack + Bun 1.4, Simon Willison ChatGPT site: + Bun.WebView, Docker Verified-Publisher self-serve, OpenAI AI Futures + Stampli) are single-surface reinforcement/discard. Meta Eng + Google Research unchanged. Anthropic RSS 404 (availability fact). Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages (incl. `ai-infra-operating-economics.md` and `agent-runtime-vertical-integration.md`) left unchanged.
