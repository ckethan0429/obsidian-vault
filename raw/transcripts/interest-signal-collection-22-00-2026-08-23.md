---
title: Interest signal collection — 22:00 new-target run (2026-08-23)
created: 2026-08-23
type: raw-transcript
captured_at: 2026-08-23T22:12:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-23
  raw existed before this run (same-day 08:00 + 19:00 social + 11:00 new-target + 15:00 curation only).
  Baseline for the new-target track = the same-day 11:00 new-target transcript
  interest-signal-collection-11-00-2026-08-23.md (~11h ago) + concepts/ai-infra-operating-economics.md
  (operating-economics/cost + agent-security "securable" + skills/plugins-ecosystem + open-weight/inference
  lanes) + concepts/agent-runtime-vertical-integration.md (execution-environment/agent-sandbox axis) +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md. Result: REINFORCEMENT-ONLY at the
  durable layer. Most surfaces UNCHANGED vs the 11:00 baseline. Genuinely-new rows since 11:00, all
  single-surface raw_only: (1) Hacker News fast-rotating frontpage — "I gave Qwen 3.8 27B a reverse-engineering
  job and it finished in 30 minutes" (2026-08-23 10:02 — https://www.xda-developers.com/qwen-3-8-27b-reverse-engineering-job-frontier-model/
  — open-weight/local-inference lane) + "JIT Compiling Code in 5us" (2026-08-23 06:04 —
  https://malisper.me/jit-compiling-code-in-5-us/ — compilers/perf, mild) + "Fast and Hard Code" (2026-08-23 05:39 —
  https://lucumr.pocoo.org/2026/8/22/fast-hard-code/ — Armin Ronacher coding essay, mild); (2) Vercel changelog top
  rotated in "Deployment Storage keeps your deployments rollback-ready" (https://vercel.com/changelog/deployment-storage-keeps-your-deployments-rollback-ready)
  + "Vercel CLI expands support for DNS, domains, and project commands" (https://vercel.com/changelog/vercel-cli-expands-support-for-dns-domains-and-project-commands)
  above the 11:00-top DeepSeek/GPT-5.6 rows — dev-infra/ops, mild; (3) GitHub Trending skills/agent-coding
  cluster refresh (all reinforce already-durable lanes): Alishahryar1/free-claude-code, VoltAgent/awesome-agent-skills,
  virgiliojr94/book-to-skill, davila7/claude-code-templates, davepoon/buildwithclaude, bytedance/deer-flow,
  unclecode/crawl4ai, ruvnet/ruflo, NVIDIA-NeMo/Speech, elder-plinius/OBLITERATUS. All other feeds UNCHANGED vs
  11:00: OpenAI (AI Futures top), GitHub changelog (blocked-users + Copilot-in-Slack/Teams top), AWS What's New
  (Bedrock GPT-5.6 Sol pricing top), Cloudflare (Bot Preference Sync top), Docker (Running-AI-agents-in-GHA-Sandboxes
  top), HuggingFace (ASR-benchmark top), Simon Willison (Linus-quote / llm 0.33 / More-than-just-code-review top —
  no new posts since 11:00), Google blog (Play-sweepstakes / full-stack-AI top), Google Research
  (biomarkers / mobility-LLM top), Meta Eng unchanged. Anthropic RSS 404 (availability fact, consistent
  08-02..08-23). Durable action = this raw transcript + a Honcho routing audit + a log.md entry only;
  index.md and all concept pages left unchanged.
routing:
  - {surface: hackernews, route: raw_only, note: "Fast-rotating surface. Genuinely-new on-axis frontpage rows since the same-day 11:00 baseline (all single-surface -> raw_only): (1) 'I gave Qwen 3.8 27B a reverse-engineering job and it finished in 30 minutes' (2026-08-23 10:02 — https://www.xda-developers.com/qwen-3-8-27b-reverse-engineering-job-frontier-model/ — open-weight/local-model capability, on-axis); (2) 'JIT Compiling Code in 5us' (2026-08-23 06:04 — https://malisper.me/jit-compiling-code-in-5-us/ — compilers/perf, mild); (3) 'Fast and Hard Code' (2026-08-23 05:39 — https://lucumr.pocoo.org/2026/8/22/fast-hard-code/ — Armin Ronacher coding essay, mild). Carry-over from 11:00: 'Why your local LLM feels dumber than it is' (still on frontpage, dropped lower). Off-axis discard: Sydney Marathon medal, becoming-a-better-writer, End-of-an-Athlon, Show HN skylens satellite/UFO tracker, MartyPC emulator, Art of Blade Runner, Sloppification of Peptides, Scrap-2006 (twitter/moxie)."}
  - {surface: vercel, route: raw_only, note: "Changelog top rotated since 11:00 (mild dev-infra/ops -> raw_only): NEW 'Deployment Storage keeps your deployments rollback-ready' (https://vercel.com/changelog/deployment-storage-keeps-your-deployments-rollback-ready) + 'Vercel CLI expands support for DNS, domains, and project commands' (https://vercel.com/changelog/vercel-cli-expands-support-for-dns-domains-and-project-commands) now above the 11:00-top rows. Carry-over unchanged below: How-Ora-benchmarks + DeepSeek V4 Flash Vision on AI Gateway + Connect v0 to Slack/Google + GPT-5.6 Sol 50% off + Always-on tracing. Reinforcement of the deploy/ops lane."}
  - {surface: github-trending, route: raw_only, note: "Skills/agent-coding cluster refresh vs 11:00 (all reinforce already-durable skills-ecosystem / agent-coding / managed-agents lanes -> raw_only): daily openai/codex (still top), NEW-since-11:00 Alishahryar1/free-claude-code (Claude Code helper), VoltAgent/awesome-agent-skills (agent skills list), virgiliojr94/book-to-skill (skills-ecosystem), block/buzz + apache/maka + tinyhumansai/openhuman + ruvnet/ruflo (agent workflow, mild); python NEW davila7/claude-code-templates (Claude Code templates), davepoon/buildwithclaude, unclecode/crawl4ai (AI crawler/data), bytedance/deer-flow (agent flow), NVIDIA-NeMo/Speech (speech models), elder-plinius/OBLITERATUS (jailbreak/prompt, AI-security-adjacent mild). Carry-over on-axis: mattpocock/skills, anthropics/claude-plugins-community, NousResearch/hermes-agent (CK's own stack), anthropics/claude-code, PostHog/posthog, debpalash/VoiceStudio, AutoGPT. Off-axis excluded: freestylefly/awesome-gpt-image-2, basecamp/omarchy, AprilNEA/OpenLogi, affaan-m/ECC, dani-garcia/vaultwarden, ripienaar/free-for-dev, Comfy-Org/ComfyUI, django/django, shy3130/tick-stock-panel, 666ghj/MiroFish."}
  - {surface: openai-news, route: discard, note: "UNCHANGED vs 11:00. Top still 08-20 'Introducing AI Futures' (policy, off-core) + Stampli ChatGPT Work + 08-19 ZDR + Replit GPT-5.6 Luna. Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 'Better tools for managing blocked users' + 'The new GitHub Copilot experience in Slack' + 'Shared agentic work with GitHub Copilot in Microsoft Teams' + 08-20 Pinning-views GA + Code Quality cluster. Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 'Amazon Bedrock announces reduced pricing for OpenAI GPT-5.6 Sol' + Connect Customer chat-with-data + Deadline Cloud + EKS Argo CD + AWS Glue 6.0. Deeper 08-20 rows now visible (SES tracking override, Timestream InfluxDB CMK, CloudFront OAC S3 MRAP, EKS CA rotation) are older items surfacing at greater feed depth, not new. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 'Say it once: introducing Bot Preference Sync' (https://blog.cloudflare.com/bot-preference-sync/) + 08-20 task-based OAuth consent + 08-19 Spectre-on-Workers. Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 'Running AI agents in GitHub Actions with Docker Sandboxes' + 08-20 Verified-Publisher self-serve + 08-18 17,600-Actions agent-security. Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 'Measuring benchmark optimization in speech recognition' + 08-20 LFM2.5-DSpark 3.2x + 08-18 agent-memory sizing. Reinforcement."}
  - {surface: simonwillison, route: raw_only, note: "UNCHANGED vs 11:00 — no new posts since. Top still 08-22 'Quoting Linus Torvalds' + 'llm 0.33' (https://simonwillison.net/2026/Aug/22/llm/) + 'More than just code review' (https://simonwillison.net/2026/Aug/22/more-than-just-code-review/). Reinforcement."}
  - {surface: google-blog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 Play-sweepstakes (consumer, discard) + 'What does full-stack AI actually mean?' + Pixel-11 sign-to-text + 08-20 Gemma 1B downloads. Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-21 wearable-biomarker (health, off-axis) + mobility-LLM (geospatial grounding) + 08-17 Seeing-beyond-BMI. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 WhatsApp Scam-Alert E2E + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-23."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-23.md
  - concepts/ai-infra-operating-economics.md
  - concepts/agent-runtime-vertical-integration.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-23)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-23 (captured ~22:12 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0823.py` → `.cache/newtarget-2026-08-23-2200/`, parsed with `/tmp/nt_parse_2200_0823.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0823.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-23).
- Baseline: the **same-day 11:00 new-target transcript** (~11h old) + `concepts/ai-infra-operating-economics.md` + `concepts/agent-runtime-vertical-integration.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer.** Most surfaces are UNCHANGED vs the same-day 11:00 baseline. Genuinely-new rows since 11:00 are all single-surface `raw_only`: **Hacker News "I gave Qwen 3.8 27B a reverse-engineering job and it finished in 30 minutes"** (open-weight/local-model capability) **+ "JIT Compiling Code in 5μs" + "Fast and Hard Code"** (compilers/perf/coding, mild); **Vercel changelog top rotated** in "Deployment Storage rollback-ready" + "Vercel CLI DNS/domains commands" (dev-infra/ops, mild); and a **GitHub Trending skills/agent-coding cluster refresh** (`Alishahryar1/free-claude-code` + `VoltAgent/awesome-agent-skills` + `virgiliojr94/book-to-skill` + `davila7/claude-code-templates` + `davepoon/buildwithclaude` + `bytedance/deer-flow` + `unclecode/crawl4ai` + `NVIDIA-NeMo/Speech`). Every cluster reinforces an already-absorbed lane (open-weight-inference / skills-ecosystem / agent-coding / managed-agents). **No durable page change.**

## 1) Genuinely-new-since-11:00 rows (all raw_only)

### Hacker News — open-weight/local-model + compilers/perf (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-23 10:02] I gave Qwen 3.8 27B a reverse-engineering job and it finished in 30 minutes` — https://www.xda-developers.com/qwen-3-8-27b-reverse-engineering-job-frontier-model/ (open-weight/local-model capability — open-weight/inference lane, on-axis)
- `[2026-08-23 06:04] JIT Compiling Code in 5μs` — https://malisper.me/jit-compiling-code-in-5-us/ (compilers/perf, mild)
- `[2026-08-23 05:39] Fast and Hard Code` — https://lucumr.pocoo.org/2026/8/22/fast-hard-code/ (Armin Ronacher coding essay, mild)
- Carry-over from 11:00 (still on frontpage, dropped lower): `Why your local LLM feels dumber than it is` — https://forum.level1techs.com/t/why-your-local-llm-feels-dumber-than-it-is/253917

### Vercel — deploy/ops changelog rotation (raw_only mild)
Source URL: https://vercel.com/atom
- `Deployment Storage keeps your deployments rollback-ready` — https://vercel.com/changelog/deployment-storage-keeps-your-deployments-rollback-ready (deploy/ops, NEW top since 11:00)
- `Vercel CLI expands support for DNS, domains, and project commands` — https://vercel.com/changelog/vercel-cli-expands-support-for-dns-domains-and-project-commands (dev-tooling/CLI, NEW top since 11:00)
- Carry-over below unchanged: How-Ora-benchmarks-every-major-AI-agent + DeepSeek V4 Flash Vision on AI Gateway + Connect v0 to Slack/Google + GPT-5.6 Sol 50% off + Always-on tracing.

### GitHub Trending — skills/agent-coding cluster refresh (raw_only, reinforces skills-ecosystem/agent-coding/managed-agents lanes)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- `openai/codex` — Codex CLI (agent-coding) — https://github.com/openai/codex (still top daily)
- `Alishahryar1/free-claude-code` — Claude Code helper — https://github.com/Alishahryar1/free-claude-code (**NEW-since-11:00**, agent-coding)
- `VoltAgent/awesome-agent-skills` — agent skills list — https://github.com/VoltAgent/awesome-agent-skills (**NEW-since-11:00**, skills-ecosystem)
- `virgiliojr94/book-to-skill` — skills-ecosystem — https://github.com/virgiliojr94/book-to-skill (**NEW-since-11:00**)
- `davila7/claude-code-templates` — Claude Code templates — https://github.com/davila7/claude-code-templates (**NEW-since-11:00** python, agent-coding)
- `davepoon/buildwithclaude` — Claude build resources — https://github.com/davepoon/buildwithclaude (**NEW-since-11:00** python)
- `bytedance/deer-flow` — agent flow framework — https://github.com/bytedance/deer-flow (**NEW-since-11:00** python, managed-agents/agent-runtime)
- `unclecode/crawl4ai` — AI crawler/data — https://github.com/unclecode/crawl4ai (**NEW-since-11:00** python, data/agent)
- `NVIDIA-NeMo/Speech` — speech models — https://github.com/NVIDIA-NeMo/Speech (**NEW-since-11:00** python, ML, mild)
- `elder-plinius/OBLITERATUS` — jailbreak/prompt collection — https://github.com/elder-plinius/OBLITERATUS (**NEW-since-11:00** python, AI-security-adjacent, mild)
- `ruvnet/ruflo` — agent workflow — https://github.com/ruvnet/ruflo (mild)
- Carry-over on-axis: `mattpocock/skills`, `anthropics/claude-plugins-community`, `NousResearch/hermes-agent` (CK's own stack), `anthropics/claude-code`, `PostHog/posthog`, `debpalash/VoiceStudio`.
- Off-axis excluded: `freestylefly/awesome-gpt-image-2`, `basecamp/omarchy`, `AprilNEA/OpenLogi`, `affaan-m/ECC`, `block/buzz`, `apache/maka`, `tinyhumansai/openhuman`, `dani-garcia/vaultwarden`, `ripienaar/free-for-dev`, `Comfy-Org/ComfyUI`, `django/django`, `Significant-Gravitas/AutoGPT` (old), `shy3130/tick-stock-panel`, `666ghj/MiroFish`.

## 2) Reinforcement — no genuinely-new rows vs the 11:00 baseline (raw_only)
- **OpenAI**: top still 08-20 "Introducing AI Futures" (policy, off-core) + Stampli ChatGPT Work. Unchanged.
- **GitHub changelog**: top still 08-21 "Better tools for managing blocked users" + "The new GitHub Copilot experience in Slack" + "Shared agentic work with GitHub Copilot in Microsoft Teams". Unchanged.
- **AWS What's New**: top still 08-21 "Amazon Bedrock announces reduced pricing for OpenAI GPT-5.6 Sol" + Connect Customer chat-with-data + Deadline Cloud + EKS Argo CD + AWS Glue 6.0. Deeper 08-20 rows now visible (SES tracking override, Timestream InfluxDB CMK, CloudFront OAC S3 MRAP, EKS CA rotation) are older items at greater feed depth, not new. Unchanged.
- **Cloudflare**: top still 08-21 "Say it once: introducing Bot Preference Sync" + 08-20 task-based OAuth consent. Unchanged.
- **Docker**: top still 08-21 "Running AI agents in GitHub Actions with Docker Sandboxes" + 08-20 Verified-Publisher self-serve. Unchanged.
- **Hugging Face**: top still 08-21 ASR-benchmark-optimization + 08-20 LFM2.5-DSpark 3.2x. Unchanged.
- **Simon Willison**: top still 08-22 "Quoting Linus Torvalds" + "llm 0.33" + "More than just code review" — no new posts since 11:00. Unchanged.
- **Google blog**: top still 08-21 Play-sweepstakes (consumer) + "What does full-stack AI actually mean?" + Pixel-11 sign-to-text + 08-20 Gemma 1B downloads. Unchanged.
- **Google Research**: top still 08-21 wearable-biomarker (health) + mobility-LLM (geospatial grounding). Unchanged.
- **Meta Eng**: top still 08-12 WhatsApp Scam-Alert E2E + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-23).

## Filtering notes
- Excluded as noise/off-axis: HN Sydney-Marathon-medal, becoming-a-better-writer, End-of-an-Athlon, Show-HN-skylens-satellite/UFO, MartyPC-emulator, Art-of-Blade-Runner, Sloppification-of-Peptides, Scrap-2006 (twitter/moxie); Google blog Play-sweepstakes / Pixel-sign-to-text / Google-Pay-Walmart / national-parks / personalize-Search / AI-Max-ads / back-to-school + Gemini-student-offer + Waymo-Gemini consumer rows; Google Research wearable-biomarker (health); off-axis trending repos (awesome-gpt-image-2, omarchy, OpenLogi, ECC, buzz, maka, openhuman, vaultwarden, free-for-dev, ComfyUI, django, AutoGPT, tick-stock-panel, MiroFish).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-23 22:00 new-target pass. **Reinforcement-only at the durable layer:** most surfaces are unchanged vs the ~11h-old same-day 11:00 baseline. Genuinely-new rows are all single-surface `raw_only` — HN Qwen 3.8 27B reverse-engineering (open-weight/local-model) + JIT-in-5μs + Fast-and-Hard-Code (compilers/perf/coding), Vercel deploy/ops changelog rotation (Deployment Storage rollback-ready + CLI DNS/domains), and a GitHub Trending skills/agent-coding cluster refresh (free-claude-code + awesome-agent-skills + book-to-skill + claude-code-templates + buildwithclaude + deer-flow + crawl4ai + NeMo-Speech). Every cluster reinforces an already-absorbed lane (open-weight-inference / skills-ecosystem / agent-coding / managed-agents). All other feeds unchanged; Anthropic RSS 404 (availability fact). Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.
