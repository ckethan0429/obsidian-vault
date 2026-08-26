---
title: Interest signal collection — 11:00 new-target run (2026-08-26)
created: 2026-08-26
type: raw-transcript
captured_at: 2026-08-26T11:10:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: append_existing
route_confidence: high
route_reason: >
  11:00 new-target pass, on time (~11:10 KST). Idempotency clear: no interest-signal-collection-11-00-2026-08-26
  raw existed before this run (only the same-day 08:00 social run). Baseline for the new-target track =
  the most-recent new-target transcript interest-signal-collection-22-00-2026-08-25.md (~13h ago) + the
  08-25 23:00 whole-day refinement + concepts/ai-infra-operating-economics.md (operating-economics/cost +
  hardware/silicon + agent-security "securable" + open-weight/inference lanes) +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md. Result: ONE small append_existing at the
  durable layer — the CUSTOM-AI-SILICON lane crosses surfaces. Yesterday's Meta MTIA 300 custom training chip
  (08-24, single-surface, raw_only) is now cross-confirmed by OpenAI's own INFERENCE chip "Jalapeño" landing on
  TWO independent surfaces the same window: OpenAI official "Jalapeño's first results show industry-leading
  speed and efficiency in AI inference" (2026-08-25 07:00 — https://openai.com/index/jalapeno-first-results)
  + "The full stack behind abundant intelligence" (2026-08-25 07:05 — https://openai.com/index/the-full-stack-behind-abundant-intelligence),
  plus SemiAnalysis "OpenAI Jalapeño: Better than Nvidia Blackwell" on the HN frontpage
  (https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia). Two frontier labs (Meta, OpenAI)
  shipping custom AI silicon in one week, OpenAI's cross-surface and explicitly framed as beating Nvidia on
  inference = a genuine strengthening of the GPU-alternative / vertical-hardware-integration / inference-cost
  angle of the operating-economics thesis (matches the 08-18 agentic-security single-surface->cross-surface
  precedent) -> append_existing to ai-infra-operating-economics.md, deliberately small. Everything else is
  single-surface raw_only or discard. Genuinely-new raw_only rows: (1) Vercel agent-security batch — "Introducing
  Run SDK: secure eval for your agents" (https://vercel.com/blog/introducing-run) + "The end of credential
  sprawl for agents" (https://vercel.com/blog/the-end-of-credential-sprawl-for-agents), single-surface securable
  lane; (2) HuggingFace "Granite 4.2 LLMs: How They're Built" (IBM open-weight —
  https://huggingface.co/blog/ibm-granite/granite-4-2); (3) OpenAI "Introducing the Admin plugin for ChatGPT
  Work and Codex" (https://openai.com/index/introducing-admin-plugin); (4) Docker "Moving from Minimus to Docker
  Hardened Images" (https://www.docker.com/blog/moving-from-minimus-to-docker-hardened-images/); (5) Vercel
  Connect GA + Speed Insights free tier + MiniMax M3/M2.7 + Wan 3.0 on AI Gateway; (6) Apple M6/M5 Ultra + Mac
  Studio/mini hardware refresh (HN); (7) GitHub changelog Rule-insights-dashboard GA + Copilot-Customize-tab GA;
  (8) GitHub Trending same managed-agents/skills/investing cluster + NEW asciimoo/hister. UNCHANGED vs 22:00:
  Meta Engineering (MTIA/MetaRoCE top, now cross-confirmed), Cloudflare (EmDash top), Simon Willison
  (llm-anthropic 0.27 top; new EVE-Online-Python-3 curio), Google Research (biomarkers/mobility top; new
  AgentHands-XR mild). Anthropic RSS 404 (availability fact, consistent 08-02..08-26). Durable action = this raw
  transcript + one small append_existing on ai-infra-operating-economics.md + a Honcho routing audit + a log.md
  entry; index.md left unchanged.
routing:
  - {surface: openai-news, route: append_existing, note: "STRONGEST new row this run + the durable delta. OpenAI's OWN custom INFERENCE silicon 'Jalapeño' lands cross-surface: 'Jalapeño's first results show industry-leading speed and efficiency in AI inference' (2026-08-25 07:00 — https://openai.com/index/jalapeno-first-results) + 'The full stack behind abundant intelligence' (2026-08-25 07:05 — https://openai.com/index/the-full-stack-behind-abundant-intelligence), cross-confirmed on the HN frontpage by SemiAnalysis 'OpenAI Jalapeño: Better than Nvidia Blackwell' (https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia). Combined with yesterday's Meta MTIA 300 (custom training chip), this is TWO frontier labs shipping custom AI silicon in one week — cross-surface strengthening of the GPU-alternative/vertical-hardware/inference-cost angle of the operating-economics thesis -> append_existing to ai-infra-operating-economics.md, deliberately small. Also new raw_only: 'Introducing the Admin plugin for ChatGPT Work and Codex' (https://openai.com/index/introducing-admin-plugin — admin/governance surface). discard: 'Disrupting a new covert influence campaign from Russia' (threat-intel/policy). Carry-over: GPT-5.6-in-Kiro, AI Futures (policy)."}
  - {surface: hackernews, route: append_existing, note: "Cross-surface leg for the custom-silicon delta: 'OpenAI Jalapeño: Better than Nvidia Blackwell' (SemiAnalysis — https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia) is the independent second surface confirming OpenAI's inference chip. Also new hardware rows (raw_only): 'Apple introduces M6 and M5 Ultra' (https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/), 'New Mac Studio with M5 Max and M5 Ultra', 'New Mac mini, featuring M6 and M5 Pro' (consumer-AI-compute hardware). Security/tooling raw_only: 'When str.lower() is a security vulnerability in Python' (Seth Larson — https://sethmlarson.dev/when-str-lower-is-a-security-vulnerability), 'Maiao: Gerrit-style code review workflow' (https://github.com/runetes/maiao), 'C2PA Cameras Do Not Survive Contact with Reality' (provenance — https://www.da.vidbuchanan.co.uk/blog/android-c2pa.html). discard: FDA ketone wearable, black-hole-singularity arxiv, TeXbrain WASM LaTeX."}
  - {surface: vercel, route: raw_only, note: "NEW agent-security batch (single-surface securable lane -> raw_only): 'Introducing Run SDK: secure eval for your agents' (2026-08-25 04:00 — https://vercel.com/blog/introducing-run) + 'The end of credential sprawl for agents' (2026-08-25 04:00 — https://vercel.com/blog/the-end-of-credential-sprawl-for-agents). Reinforces the 'securable' leg already tracked (agent runtime + credential isolation), single-surface -> raw_only. Also NEW: 'Vercel Connect is now generally available' (https://vercel.com/changelog/vercel-connect-ga — was preview in the 08-25 batch), 'Speed Insights now has a free tier' (https://vercel.com/changelog/speed-insights-free-tier), 'MiniMax M3 and M2.7 are free on AI Gateway' (https://vercel.com/changelog/minimax-m3-and-m2-7-are-free-on-ai-gateway — open-weight/gateway), 'Wan 3.0 now available on AI Gateway', 'AI Gateway now supports asynchronous video generation', 'Chat SDK now supports Slack Enterprise Grid', 'Vercel Connect now supports Linq', 'Vercel applications are protected from Next.js August 2026 security vulnerabilities' (https://vercel.com/changelog/nextjs-august-2026-security-release). All mild platform incrementals -> raw_only."}
  - {surface: huggingface, route: raw_only, note: "NEW 08-25 rows (single-surface -> raw_only): 'Granite 4.2 LLMs: How They're Built' (IBM — https://huggingface.co/blog/ibm-granite/granite-4-2 — open-weight/model-lifecycle lane), 'Quantization-Aware Healing: a compressed, 4-bit model that outperforms its full-precision original' (https://huggingface.co/blog/MultiverseComputingCAI/quantization-aware-healing — already captured in the 22:00 baseline, carry-over), 'Wire It, Run It, Deploy It: AI Workflows in Gradio' (https://huggingface.co/blog/gradio-workflow-guide — carry). Granite 4.2 reinforces open-weight lane; single-surface -> raw_only."}
  - {surface: docker, route: raw_only, note: "NEW top since 22:00 (single-surface security/hardened-images -> raw_only): 'Moving from Minimus to Docker Hardened Images' (2026-08-25 22:27 — https://www.docker.com/blog/moving-from-minimus-to-docker-hardened-images/ — supply-chain/hardened-image lane, adjacent to the zero-CVE/agent-security thread Docker has been running). Carry-over: MinIO-EOL/ELS, Running-AI-agents-in-GHA-Sandboxes, 17,600-Actions agent-security."}
  - {surface: github-changelog, route: raw_only, note: "NEW 08-25 rows (routine platform -> raw_only): 'Rule insights dashboard generally available' (https://github.blog/changelog/2026-08-25-rule-insights-dashboard-generally-available), 'GitHub Copilot app Customize tab is generally available' (https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available — Copilot/agent-config, mild), 'Block users directly from security advisories', 'Push rules in rulesets now support path exceptions'. Carry-over: 08-21 blocked-users + Copilot-Slack/Teams."}
  - {surface: google-research, route: raw_only, note: "NEW top (mild/off-axis -> raw_only): 'AgentHands: Generating interactive hand gestures for spatially grounded agent conversations in XR' (2026-08-25 19:10 — https://research.google/blog/agenthands-generating-interactive-hand-gestures-for-spatially-grounded-agent-conversations-in-xr/ — agent-embodiment/XR, tangential to CK's operating-economics/agent-runtime axis). Carry-over: wearable-biomarker (health, off-axis), mobility-LLM (geospatial)."}
  - {surface: simonwillison, route: raw_only, note: "NEW top (curio -> raw_only): 'EVE Online: The Move to Python 3 Begins!' (2026-08-25 22:59 — https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/ — Python-migration curio). Carry-over: llm-anthropic 0.27, Your-executable-is-a-SQLite-database, Anthropic-model-struggles-to-attract-users."}
  - {surface: google-blog, route: discard, note: "All NEW rows consumer/off-axis -> discard: 'You can officially buy the Pixel 11 phones and Pixel Watch 5', '5 ways to upgrade your home decor with Google Search', 'intelligent dictation in Gemini for macOS' (mild consumer AI), 'Google Play's biggest Gamescom showcase', 'free AI and career training with State of Delaware' (education). Carry-over on-axis: 'What does full-stack AI actually mean?' + Gemma-4-for-good."}
  - {surface: aws-whatsnew, route: discard, note: "08-25 batch all routine infra -> discard from report: AWS IoT Core InfluxDB routing, AWS Batch on ECS Managed Instances, Capacity Reservation Resource Groups + EC2 Capacity Blocks, Lambda MicroVMs PrivateLink, Lambda managed runtimes Node.js 26/Python 3.15 preview (https://aws.amazon.com/about-aws/whats-new/2026/08/aws-lambda-node-js-python-public-preview/ — mild), Connect flexible profiles, RDS PostgreSQL 18.6/17.11/... minor versions, IAM Roles Anywhere Java plugin, RDS SQL Server CU, RDS Oracle July RU. No on-axis AI-infra row above the routine bar this batch -> raw_only/discard."}
  - {surface: github-trending, route: raw_only, note: "Same managed-agents/skills/investing/agent-coding cluster; NEW repos reinforce already-durable lanes -> raw_only. Daily: NEW 'asciimoo/hister' + carry TauricResearch/TradingAgents (investing+agents), MadsLorentzen/ai-job-search, anthropics/claude-plugins-community+official, apache/maka, AgriciDaniel/claude-obsidian, rohitg00/ai-engineering-from-scratch, multica-ai/andrej-karpathy-skills, openai/codex, marin-community/marin, DietrichGebert/ponytail, Shubhamsaboo/awesome-llm-apps. Python: Alishahryar1/free-claude-code, NousResearch/hermes-agent (CK's own stack), langchain-ai/deepagents, NVIDIA/Megatron-LM, MemPalace/mempalace (agent-memory WATCH), pipecat-ai/pipecat (voice-agents), shy3130/tick-stock-panel (investing), virgiliojr94/book-to-skill (skills). Off-axis excluded: freestylefly/awesome-gpt-image-2, tinyhumansai/openhuman, basecamp/omarchy."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 22:00. Top still 08-24 EmDash agent-authored-blog + 08-21 Bot Preference Sync + 08-20 task-based OAuth consent + 08-19 Spectre-on-Workers. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED top vs 22:00 (MTIA 300 + MetaRoCE still top, 08-24) — but now CROSS-CONFIRMED by OpenAI Jalapeño on the openai-news + hackernews surfaces this run, which is what elevates the custom-silicon lane to append_existing. Meta's own row is carry-over reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /news/rss.xml both 404); availability fact, consistent with 08-02..08-26."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-08-25.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-08-26)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-26 (captured ~11:10 KST; on-time 11:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_1100_0826.py` → `.cache/newtarget-2026-08-26-1100/`, parsed with `/tmp/nt_parse_1100_0826.py` + GitHub Trending extraction). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/news/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-26).
- Baseline: the most-recent **new-target transcript 08-25 22:00** (~13h old) + the 08-25 23:00 whole-day refinement + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**One small `append_existing` at the durable layer — the custom-AI-silicon lane crosses surfaces.** Yesterday's Meta MTIA 300 (custom training chip, 08-24, single-surface `raw_only`) is now cross-confirmed by **OpenAI's own INFERENCE chip "Jalapeño"** landing on TWO independent surfaces this window: OpenAI official (**"Jalapeño's first results show industry-leading speed and efficiency in AI inference"** + **"The full stack behind abundant intelligence"**) + SemiAnalysis on the HN frontpage (**"OpenAI Jalapeño: Better than Nvidia Blackwell"**). Two frontier labs shipping custom AI silicon in one week — OpenAI's cross-surface and explicitly framed as beating Nvidia on inference — is a genuine strengthening of the GPU-alternative / vertical-hardware-integration / inference-cost angle of the operating-economics thesis (matches the 08-18 agentic-security single-surface→cross-surface precedent) → `append_existing` to `ai-infra-operating-economics.md`, deliberately small. Everything else is single-surface `raw_only` or `discard`.

## 1) Durable delta — custom-AI-silicon lane crosses surfaces (append_existing)

### OpenAI — Jalapeño custom inference silicon (append_existing, STRONGEST + the durable delta)
Source URL: https://openai.com/news/rss.xml
- `[2026-08-25 07:00] Jalapeño's first results show industry-leading speed and efficiency in AI inference` — https://openai.com/index/jalapeno-first-results (OpenAI's own custom inference chip — GPU-alternative / inference-cost efficiency, ai-infra hardware/silicon lane)
- `[2026-08-25 07:05] The full stack behind abundant intelligence` — https://openai.com/index/the-full-stack-behind-abundant-intelligence (vertical hardware+model+serving integration narrative)

### Hacker News — cross-surface confirmation (append_existing leg)
Source URL: https://news.ycombinator.com/rss
- `OpenAI Jalapeño: Better than Nvidia Blackwell` — https://newsletter.semianalysis.com/p/openai-jalapeno-better-than-nvidia (SemiAnalysis independent analysis — the second surface confirming OpenAI's inference chip beats Nvidia Blackwell on inference)

Cross-surface (OpenAI official ×2 + SemiAnalysis/HN) + Meta MTIA 300 carry-over = the custom-silicon axis now clears the single-surface bar → small `append_existing` on `ai-infra-operating-economics.md`.

## 2) Genuinely-new-since-08-25-22:00 rows (all raw_only)

### Vercel — agent-security / secure-eval batch (raw_only, securable lane, single-surface)
Source URL: https://vercel.com/atom
- `[2026-08-25 04:00] Introducing Run SDK: secure eval for your agents` — https://vercel.com/blog/introducing-run (secure code-eval sandbox for agents — "securable" leg, single-surface)
- `[2026-08-25 04:00] The end of credential sprawl for agents` — https://vercel.com/blog/the-end-of-credential-sprawl-for-agents (agent credential isolation)
- `[2026-08-25 16:39] Vercel applications are protected from Next.js August 2026 security vulnerabilities` — https://vercel.com/changelog/nextjs-august-2026-security-release
- `[2026-08-25 16:00] Speed Insights now has a free tier` — https://vercel.com/changelog/speed-insights-free-tier
- `[2026-08-25] Vercel Connect is now generally available` — https://vercel.com/changelog/vercel-connect-ga (was preview in the 08-24/08-25 batch)
- `[2026-08-25] MiniMax M3 and M2.7 are free on AI Gateway` — https://vercel.com/changelog/minimax-m3-and-m2-7-are-free-on-ai-gateway (open-weight/gateway)
- `[2026-08-25] Wan 3.0 now available on AI Gateway` + `AI Gateway now supports asynchronous video generation` + `Chat SDK now supports Slack Enterprise Grid` + `Vercel Connect now supports Linq` (mild platform)

### Hugging Face — Granite 4.2 open-weight (raw_only, single-surface)
Source URL: https://huggingface.co/blog/feed.xml
- `[2026-08-25 15:14] Granite 4.2 LLMs: How They're Built` — https://huggingface.co/blog/ibm-granite/granite-4-2 (IBM open-weight model release — reinforces open-weight/model-lifecycle lane)
- Carry-over: `Quantization-Aware Healing` (4-bit beats full-precision, captured 22:00), `Wire It, Run It, Deploy It: AI Workflows in Gradio`.

### OpenAI — Admin plugin (raw_only)
- `[2026-08-25 00:00] Introducing the Admin plugin for ChatGPT Work and Codex` — https://openai.com/index/introducing-admin-plugin (admin/governance surface for ChatGPT Work + Codex)

### Docker — hardened images (raw_only)
Source URL: https://www.docker.com/blog/feed/
- `[2026-08-25 22:27] Moving from Minimus to Docker Hardened Images` — https://www.docker.com/blog/moving-from-minimus-to-docker-hardened-images/ (supply-chain/hardened-image lane, adjacent to Docker's zero-CVE/agent-security thread)

### Apple silicon refresh (raw_only, HN)
- `Apple introduces M6 and M5 Ultra` — https://www.apple.com/newsroom/2026/08/apple-introduces-m6-and-m5-ultra-for-a-big-leap-in-performance-and-ai-compute/
- `New Mac Studio with M5 Max and M5 Ultra` — https://www.apple.com/newsroom/2026/08/apple-introduces-new-mac-studio-with-m5-max-and-m5-ultra/
- `New Mac mini, featuring M6 and M5 Pro` — https://www.apple.com/newsroom/2026/08/apple-unveils-a-more-powerful-mac-mini-featuring-the-all-new-m6-and-m5-pro/ (consumer AI-compute hardware, adjacent to the custom-silicon theme but consumer-tier)

### GitHub changelog — routine platform (raw_only)
Source URL: https://github.blog/changelog/feed/
- `[2026-08-25] Rule insights dashboard generally available` — https://github.blog/changelog/2026-08-25-rule-insights-dashboard-generally-available
- `[2026-08-25] GitHub Copilot app Customize tab is generally available` — https://github.blog/changelog/2026-08-25-github-copilot-app-customize-tab-is-generally-available (Copilot/agent-config, mild)
- `[2026-08-25] Block users directly from security advisories` + `Push rules in rulesets now support path exceptions`

### Google Research — AgentHands XR (raw_only, mild)
Source URL: https://research.google/blog/rss/
- `[2026-08-25 19:10] AgentHands: Generating interactive hand gestures for spatially grounded agent conversations in XR` — https://research.google/blog/agenthands-generating-interactive-hand-gestures-for-spatially-grounded-agent-conversations-in-xr/ (agent-embodiment/XR, tangential)

### Simon Willison — EVE Online Python 3 (raw_only, curio)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-25 22:59] EVE Online: The Move to Python 3 Begins!` — https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/ (Python-migration curio)

### Hacker News — security/tooling rows (raw_only)
- `When str.lower() is a security vulnerability in Python – Seth Larson` — https://sethmlarson.dev/when-str-lower-is-a-security-vulnerability (Python security)
- `Maiao: Gerrit-style code review workflow for GitHub, GitLab, Gitea` — https://github.com/runetes/maiao (dev-tooling)
- `C2PA Cameras Do Not Survive Contact with Reality` — https://www.da.vidbuchanan.co.uk/blog/android-c2pa.html (content-provenance)

### GitHub Trending — same cluster + NEW reinforcement repos (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- NEW: `asciimoo/hister` (daily)
- Carry on-axis: `TauricResearch/TradingAgents` (investing+agents), `MadsLorentzen/ai-job-search`, `anthropics/claude-plugins-community`+`claude-plugins-official`, `apache/maka`, `AgriciDaniel/claude-obsidian`, `rohitg00/ai-engineering-from-scratch`, `multica-ai/andrej-karpathy-skills`, `openai/codex`, `marin-community/marin`, `DietrichGebert/ponytail`, `Shubhamsaboo/awesome-llm-apps`; python: `Alishahryar1/free-claude-code`, `NousResearch/hermes-agent` (CK's own stack), `langchain-ai/deepagents`, `NVIDIA/Megatron-LM`, `MemPalace/mempalace` (agent-memory WATCH), `pipecat-ai/pipecat` (voice-agents), `shy3130/tick-stock-panel` (investing), `virgiliojr94/book-to-skill` (skills).
- Off-axis excluded: `freestylefly/awesome-gpt-image-2`, `tinyhumansai/openhuman`, `basecamp/omarchy`.

## 3) Reinforcement / discard — no genuinely-new on-axis rows vs the 08-25 22:00 baseline
- **Cloudflare**: top still 08-24 EmDash agent-authored-blog + 08-21 Bot Preference Sync + 08-20 task-based OAuth consent. Unchanged (`raw_only`).
- **Meta Engineering**: MTIA 300 + MetaRoCE still top (carry-over) — but now cross-confirmed by OpenAI Jalapeño → feeds the append.
- **AWS What's New** (`discard`): 08-25 batch all routine infra — IoT Core InfluxDB, Batch on ECS Managed Instances, Capacity Reservation Resource Groups, Lambda MicroVMs PrivateLink, Lambda managed runtimes Node.js 26/Python 3.15 preview, Connect flexible profiles, RDS PostgreSQL minor versions, IAM Roles Anywhere Java plugin, RDS SQL Server CU, RDS Oracle July RU.
- **Google blog** (`discard`): all-new consumer/off-axis — Pixel 11, home decor, Gemini macOS dictation, Play Gamescom, Delaware free-AI-training.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-26).

## Filtering notes
- Excluded as noise/off-axis: AWS routine infra batch; Google blog consumer/education rows; HN off-axis (FDA ketone wearable, black-hole-singularity arxiv, TeXbrain WASM); off-axis trending repos (awesome-gpt-image-2, openhuman, omarchy).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-26 11:00 new-target pass. **One small `append_existing`** — the custom-AI-silicon lane crossed surfaces (OpenAI Jalapeño inference chip on OpenAI official ×2 + SemiAnalysis/HN, cross-confirming yesterday's Meta MTIA 300 training chip). Everything else (Vercel agent-security/secure-eval batch, HF Granite 4.2, OpenAI Admin plugin, Docker hardened images, Apple M6 refresh, GitHub changelog, AgentHands XR, EVE-Python-3, HN security rows, GitHub Trending) is single-surface `raw_only` or `discard`. Durable action = this raw transcript + one small `append_existing` on `ai-infra-operating-economics.md` + a Honcho routing audit + a `log.md` entry; `index.md` left unchanged.
