---
title: Interest signal collection — 22:00 new-target run (2026-08-15)
created: 2026-08-15
type: raw-transcript
captured_at: 2026-08-15T22:05:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-15
  raw existed before this run. Baseline = same-day 11:00 new-target transcript
  (raw/transcripts/interest-signal-collection-11-00-2026-08-15.md, reinforcement-only) plus the prior
  22:00 new-target run (raw/transcripts/interest-signal-collection-22-00-2026-08-14.md),
  concepts/honcho.md, and concepts/ai-infra-operating-economics.md. Result: REINFORCEMENT-ONLY. The
  strongest 08-14 items (Qwen 3.8 27B, HF State of Open Models Summer 2026, Cloudflare MCP-traffic
  security, Grok 4.6 in Copilot, Google homomorphic-encryption private AI, Vercel ECH, deepseek-ai/
  awesome-deepseek-agent) were ALL already captured at the same-day 11:00 run. Only a handful of
  genuinely-new-since-11:00 rows appeared, all single-surface and reinforcing an already-durable lane
  (coding-agent/codex, agent-memory/context, inference-serving, agent-skills) with no new cross-surface
  durable branch. Strongest new items: (1) HN frontpage "Auto-research with codex: How I achieved a
  232x Faster Kernel" (08-15 11:00, https://sankalp.bearblog.dev/autoresearch/ — codex-driven agentic
  research/kernel-opt, coding-agent lane → raw_only); (2) HN "Show HN: ThoughtDAG — An editable context
  graph for LLM conversations" (08-15 04:42, https://chenxiachan.github.io/thoughtdag/ — LLM context/
  memory graph, on CK's memory-routing axis → raw_only mild); (3) GitHub Trending new-to-record repos
  HKUDS/CLI-Anything ("Making ALL Software Agent-Native"), MakazhanAlpamys/Soup (fine-tune 8B on 4GB
  laptop GPU from one YAML), sgl-project/sglang-omni (SGLang high-perf serving for TTS/ASR/omni),
  ashishpatel26/500-AI-Agents-Projects (agent use-case list), whiteguo233/OpenBiliClaw (self-evolving
  cross-platform content-discovery agent, deepseek harness plugin) — all same-lane single-surface
  trending rotation → raw_only. Discard: Simon Willison "Northern Gannet" photo + own-pkg; off-axis HN
  (Sean Byrne, GCC nested functions, Indonesia earthquake, Going-Dark, RustDesk Wayland, Firefox-uBlock,
  Egypt missile scientist, WCAG ePub, hyperbezier, eigendrum, Color-of-White-Light); off-axis trending
  (public-apis, holehe, spiderfoot, ToolJet, MoneyPrinterTurbo, FluidVoice, colleague-skill). Everything
  else UNCHANGED vs 11:00 (OpenAI GPT-5.6 guide/Ultrafast, GitHub changelog Grok-4.6/Gemini-3.7-Flash/
  Agent-Plugins, Vercel Grok-Build/Exa/GLM/ECH, HF State-of-Open-Models/Strands/ICML, Cloudflare
  MCP-security/vibe-coded-apps, Docker ESP32/VMM, Meta Eng WhatsApp Scam-Alert, Google blog Gemini-3.7-
  Flash/Pixel-11, Google Research parametric-factuality). Anthropic RSS 404 (availability fact,
  consistent 08-02..08-15). Durable action = this raw transcript + a Honcho routing audit + a log.md
  entry only; index.md and all concept pages (incl. ai-infra-operating-economics.md) left unchanged.
routing:
  - {surface: hackernews, route: raw_only, note: "New on-axis frontpage rows since 11:00: 'Auto-research with codex: How I achieved a 232x Faster Kernel' (08-15 11:00, https://sankalp.bearblog.dev/autoresearch/ — codex-driven agentic research / kernel optimization, coding-agent lane → raw_only); 'Show HN: ThoughtDAG — An editable context graph for LLM conversations' (08-15 04:42, https://chenxiachan.github.io/thoughtdag/ — LLM context/memory graph, on CK's memory-routing axis → raw_only mild). Repeat/absorbed (already 11:00): Qwen 3.8 27B, Google homomorphic-encryption private AI. Off-axis discard: 'The other Sean Byrne doesnt exist', 'GCCs Nested Functions with Wide Pointers', 'The Color of White Light', Egypt missile scientist 1962, WCAG 2.2 ePub/PDF, hyperbezier curves, eigendrum, Going-Dark law-enforcement, RustDesk Wayland, Firefox-uBlock, Indonesia M7.7 earthquake."}
  - {surface: github-trending, route: raw_only, note: "New-to-record repos vs same-day 11:00 list, all same-lane / single-surface trending rotation → raw_only: HKUDS/CLI-Anything ('CLI-Anything: Making ALL Software Agent-Native' — agent-native CLI, coding-agent axis), MakazhanAlpamys/Soup ('Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU' — local fine-tune / GPU-infra axis), sgl-project/sglang-omni ('SGLang-Omni high-performance serving for TTS, ASR, speech and omni models' — inference-serving axis, on CK's vLLM/serving theme), ashishpatel26/500-AI-Agents-Projects ('curated collection of AI agent use cases' — agent-skills axis), whiteguo233/OpenBiliClaw ('local-first open-source cross-platform AI content discovery Agent ... supports deepseek harness plugin' — agent axis mild), cordiverse/cordis ('Meta-Framework of Spatiotemporal Composability' — mild). Carry-over: cathrynlavery/diagram-design, cursor/plugins, cactus-compute/needle, unslothai/unsloth, github/spec-kit, citrolabs/ego-lite, semantica-agi/semantica. Off-axis excluded: public-apis/public-apis, megadose/holehe, smicallef/spiderfoot, ToolJet/ToolJet, harry0703/MoneyPrinterTurbo, altic-dev/FluidVoice, titanwings/colleague-skill, sgl-project not off-axis. No new cross-surface durable branch → raw_only."}
  - {surface: simonwillison, route: discard, note: "ONE genuinely-new row since 11:00: 'Northern Gannet' (08-15 03:22, https://simonwillison.net/2026/Aug/15/sighting-391300422/ — bird-sighting photo, off-axis → discard). Top on-axis unchanged vs 11:00: 'Dont classify. Hallucinate!' (08-14 21:54, raw_only mild, already 11:00). Discard own-pkg: sqlite-utils 4.2/4.2.1, llm-gemini 0.33, alchemy-utils, datasette-upload-dbs."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 GPT-5.6 builder's guide + GPT-5.6 Sol Ultrafast 14x preview. Discard: Dali Rajic CRO, enterprise/RingCentral PR, testing-ads-in-ChatGPT. Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 Grok 4.6 in Copilot (raw_only 11:00) + OAuth-redirect-URIs housekeeping (discard) + Copilot weekly-releases-Aug-10; Gemini 3.7 Flash in Copilot (08-13), Agent Plugins 1.0 (08-12). Reinforcement."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 ECH on CDN (raw_only mild 11:00) + 08-13 Grok-Build harness adapter + ACP-compatible harnesses + Exa Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off. Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 State of Open Models Summer 2026 (raw_only 11:00) + 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 MCP-traffic detection/security (raw_only 11:00) + secure-internal-vibe-coded-apps (08-14) + Total-eclipse traffic + Cert Transparency Monitoring GA (08-13). Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 Reproducible ESP32 Firmware w/ Docker Sandboxes + 08-12 Docker VMM Public Beta + security-baseline-for-agentic-adoption. Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 RDS-Oracle-APEX + SES-deeplinking (discard housekeeping) + Billing Managed Dashboards (08-14, absorbed); Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock (08-13). Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: google-blog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 Gemini 3.7 Flash launch + Sheets canvas + Omni roundtable (mild) + Pixel 11 launch (discard). Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-15."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-15.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-14.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-15)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-15 (captured ~22:05 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0815.py` → `.cache/newtarget-2026-08-15-2200/`, parsed with `/tmp/nt_parse_2200_0815.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0815.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent with 08-02..08-15).
- Baseline: same-day **11:00 new-target transcript** (reinforcement-only) + the prior **22:00 new-target run (08-14)** + `concepts/honcho.md` + `concepts/ai-infra-operating-economics.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only.** The strongest 08-14 items (Qwen 3.8 27B, HF State of Open Models Summer 2026, Cloudflare MCP-traffic security, Grok 4.6 in Copilot, Google homomorphic-encryption private AI, Vercel ECH, `deepseek-ai/awesome-deepseek-agent`) were **all already captured at the same-day 11:00 run**. Only a handful of genuinely-new-since-11:00 rows appeared, all single-surface and reinforcing an already-durable lane (coding-agent/codex, agent-memory/context, inference-serving, agent-skills) with no new cross-surface durable branch. Strongest/most-relevant new items: **HN "Auto-research with codex: 232x Faster Kernel"** (codex-driven agentic research); **HN "ThoughtDAG — editable context graph for LLM conversations"** (LLM context/memory graph — on CK's memory-routing axis); **GitHub Trending new-to-record** `HKUDS/CLI-Anything` (agent-native CLI), `MakazhanAlpamys/Soup` (local 8B fine-tune on 4GB laptop GPU), `sgl-project/sglang-omni` (SGLang omni serving), `ashishpatel26/500-AI-Agents-Projects`, `whiteguo233/OpenBiliClaw`. **No durable page change** — every new row reinforces an existing lane; the recurring durable series (Vercel AI Gateway Production Index) had no new edition today.

## 1) Genuinely-new-since-11:00 rows (all raw_only / discard)

### Hacker News — codex auto-research + ThoughtDAG context graph (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-15 11:00] Auto-research with codex: How I achieved a 232x Faster Kernel` — https://sankalp.bearblog.dev/autoresearch/ (codex-driven agentic research / kernel optimization; coding-agent lane, single-surface → raw_only)
- `[2026-08-15 04:42] Show HN: ThoughtDAG — An editable context graph for LLM conversations` — https://chenxiachan.github.io/thoughtdag/ (LLM context/memory graph; on CK's memory-routing axis, single-surface → raw_only mild)
- Repeat/absorbed (already 11:00): `Qwen 3.8 27B` (08-14 15:00), `Google is making private AI practical with homomorphic encryption` (08-14 15:43).
- Off-axis discard: "The other Sean Byrne doesn't exist", "Using GCC's Nested Functions with Wide Pointers and No Trampolines II", "The Color of White Light", "In 1962, Egypt's Missile Program Lost Its Key Scientist", "Understanding WCAG 2.2 as ePub and PDF", "The mathematical beauty of hyperbezier curves", eigendrum, "Going Dark, and the era of law enforcement hacking", RustDesk Wayland unattended access, "Firefox is now the last major browser that still supports uBlock Origin", Indonesia M7.7 earthquake.

### GitHub Trending — new-to-record repos, same lane (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- New-to-record vs same-day 11:00 list, all same-lane / single-surface trending rotation:
  - `HKUDS/CLI-Anything` — "CLI-Anything: Making ALL Software Agent-Native" (agent-native CLI, coding-agent axis)
  - `MakazhanAlpamys/Soup` — "Fine-tune LLMs from one YAML. Layer streaming trains an 8B model on a 4 GB laptop GPU" (local fine-tune / GPU-infra axis)
  - `sgl-project/sglang-omni` — "SGLang-Omni empowers high-performance serving for TTS, ASR, speech and omni models" (inference-serving axis, on CK's vLLM/serving theme)
  - `ashishpatel26/500-AI-Agents-Projects` — "curated collection of AI agent use cases across various industries" (agent-skills axis)
  - `whiteguo233/OpenBiliClaw` — "local-first open-source cross-platform AI content discovery Agent ... supports deepseek harness plugin" (agent axis, mild)
  - `cordiverse/cordis` — "Meta-Framework of Spatiotemporal Composability" (framework, mild)
- Carry-over (same lane): `cathrynlavery/diagram-design`, `cursor/plugins`, `cactus-compute/needle`, `unslothai/unsloth`, `github/spec-kit`, `citrolabs/ego-lite`, `semantica-agi/semantica`.
- Off-axis excluded: `public-apis/public-apis`, `megadose/holehe`, `smicallef/spiderfoot`, `ToolJet/ToolJet`, `harry0703/MoneyPrinterTurbo`, `altic-dev/FluidVoice`, `titanwings/colleague-skill`.
- All reinforce the existing coding-agent/skills/agent-memory/inference-serving/GPU-infra lane; no new cross-surface durable branch → raw_only.

### Simon Willison — Northern Gannet photo (discard)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-15 03:22] Northern Gannet` — https://simonwillison.net/2026/Aug/15/sighting-391300422/ (bird-sighting photo, off-axis → discard)
- Top on-axis unchanged vs 11:00: "Don't classify. Hallucinate!" (08-14 21:54, raw_only mild, already 11:00). Discard own-pkg: sqlite-utils 4.2/4.2.1, llm-gemini 0.33, alchemy-utils, datasette-upload-dbs.

## 2) Reinforcement — unchanged vs the 11:00 baseline (raw_only)
- **OpenAI**: top still 08-13 GPT-5.6 builder's guide + GPT-5.6 Sol Ultrafast 14× preview. Discard: Dali Rajic CRO, enterprise/RingCentral PR, testing-ads-in-ChatGPT. Unchanged.
- **GitHub changelog**: top still 08-14 Grok 4.6 in Copilot (raw_only 11:00) + OAuth-redirect-URIs housekeeping (discard) + Gemini 3.7 Flash in Copilot (08-13) + Agent Plugins 1.0 (08-12). Unchanged.
- **Vercel**: top still 08-14 ECH on CDN (raw_only mild 11:00) + 08-13 Grok-Build harness adapter + Exa Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off. Unchanged.
- **Hugging Face**: top still 08-14 State of Open Models Summer 2026 (raw_only 11:00) + 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction. Unchanged.
- **Cloudflare**: top still 08-14 MCP-traffic detection/security (raw_only 11:00) + secure-internal-vibe-coded-apps + Total-eclipse traffic + Cert Transparency Monitoring GA (08-13). Unchanged.
- **Docker**: top still 08-14 Reproducible ESP32 Firmware w/ Docker Sandboxes + 08-12 Docker VMM Public Beta + security-baseline-for-agentic-adoption. Unchanged.
- **AWS What's New**: top still 08-14 RDS-Oracle-APEX + SES-deeplinking (discard housekeeping) + Billing Managed Dashboards; Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock (08-13). Unchanged.
- **Meta Eng**: top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Google blog**: top still 08-13 Gemini 3.7 Flash + Sheets canvas + Omni roundtable + Pixel 11 launch. Unchanged.
- **Google Research**: top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Unchanged.

## Filtering notes
- Excluded as noise/off-axis: HN retro/civic/hardware (Sean Byrne, GCC nested functions, Color-of-White-Light, Egypt missile scientist, WCAG ePub, hyperbezier, eigendrum, Going-Dark, RustDesk Wayland, Firefox-uBlock, Indonesia earthquake); Simon Willison Northern Gannet photo + own-package releases; off-axis trending repos (public-apis, holehe, spiderfoot, ToolJet, MoneyPrinterTurbo, FluidVoice, colleague-skill).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-15 22:00 new-target pass. **Reinforcement-only:** the strongest 08-14 items were all already captured at the same-day 11:00 run; only a handful of genuinely-new-since-11:00 rows appeared (HN codex auto-research 232x kernel, HN ThoughtDAG context graph, GitHub Trending new-to-record CLI-Anything / Soup / sglang-omni / 500-AI-Agents-Projects / OpenBiliClaw) and each only reinforces an already-durable lane (coding-agent/codex, agent-memory/context, inference-serving, agent-skills) with no new cross-surface durable branch. The recurring durable series (Vercel AI Gateway Production Index) had no new edition today. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages (incl. `ai-infra-operating-economics.md`) left unchanged.
