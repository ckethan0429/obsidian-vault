---
title: Interest signal collection — 22:00 new-target run (2026-08-13)
created: 2026-08-13
type: raw-transcript
captured_at: 2026-08-13T22:06:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-13
  raw existed before this run. Baseline = same-day 11:00 new-target transcript
  (raw/transcripts/interest-signal-collection-11-00-2026-08-13.md, reinforcement-only) plus the prior
  22:00 new-target run (raw/transcripts/interest-signal-collection-22-00-2026-08-12.md),
  concepts/honcho.md, and concepts/ai-infra-operating-economics.md. Result: REINFORCEMENT-ONLY. A
  handful of genuinely-new rows appeared since the 11:00 baseline, all single-surface and reinforcing
  an already-durable lane (coding-agent/harness/skills, GPU-infra, open-weight/model-lifecycle) with no
  new cross-surface durable branch. Strongest new items: (1) HN frontpage "ChatGPT Desktop (Codex
  Desktop) for Linux" (08-13 04:53, https://openai.com/codex/) — OpenAI ships a Linux desktop coding
  agent app, on CK's Codex/Claude-Code axis but single-surface → raw_only; (2) Vercel "Use
  ACP-compatible harnesses with the AI SDK harness layer" (08-13 00:00,
  https://vercel.com/changelog/use-acp-compatible-harnesses-with-the-ai-sdk-harness-layer) — Agent
  Client Protocol interop for the AI SDK harness layer, reinforces the coding-agent/harness lane →
  raw_only; (3) GitHub Trending new-to-record repos NousResearch/hermes-agent, kepano/obsidian-skills,
  skypilot-org/skypilot, NVIDIA-NeMo/Automodel, holaboss-ai/holaOS, altic-dev/FluidVoice,
  vllm-project/vllm — all reinforce the coding-agent/skills/GPU-infra lane, single-surface trending
  rotation → raw_only. Discard: Vercel "Inside the Vercel intern experience" (culture); Simon Willison
  "alchemy-utils 0.1a0" (own pkg alpha); HN Deutsche Bank yuan clearing + ATG (YC) hiring. Everything
  else unchanged vs 11:00 (GitHub changelog Agent Plugins 1.0, Docker VMM+security-baseline, HF
  OlmoEarth/LFM2.5-VL-3B, Meta Eng WhatsApp Scam-Alert, Cloudflare DDoS/Agents-Week, Google
  Pixel-11/parametric-factuality, AWS Quick/IAM/EKS, OpenAI enterprise PR). Anthropic RSS 404
  (availability fact, consistent with 08-02..08-13). Durable action = this raw transcript + a Honcho
  routing audit + a log.md entry only; index.md and all concept pages
  (incl. ai-infra-operating-economics.md) left unchanged.
routing:
  - {surface: hackernews, route: raw_only, note: "ONE genuinely-new on-axis frontpage row since 11:00: 'ChatGPT Desktop (Codex Desktop) for Linux' (08-13 04:53, https://openai.com/codex/ — OpenAI ships a Linux desktop coding-agent app, on CK's Codex/Claude-Code axis, single-surface → raw_only). Repeat/absorbed: DeepSeek V4 Pro 0813, Tailscale SQLite WAL-reset bug, Qwen3.8-2.4T, Zed Delta (all 11:00). Discard: Deutsche Bank yuan clearing bank, ATG (YC F25) hiring, Principia Mathematica, Antiqua-Fraktur, uBlock/Facebook ads, 2026 Eclipse Webcams, berries-meditation."}
  - {surface: vercel, route: raw_only, note: "TWO genuinely-new rows since 11:00: 'Use ACP-compatible harnesses with the AI SDK harness layer' (08-13 00:00, https://vercel.com/changelog/use-acp-compatible-harnesses-with-the-ai-sdk-harness-layer — Agent Client Protocol interop for the AI SDK harness layer, reinforces coding-agent/harness lane → raw_only); 'Inside the Vercel intern experience' (08-13 04:00, https://vercel.com/blog/inside-the-vercel-intern-experience — culture/recruiting → discard). Below unchanged vs 11:00: DeepSeek V4 Pro updated weights, coding-agents-one-command, software-factory, Grok 4.6, DB-migration, Connect/EMU/hackable, Production Index."}
  - {surface: github-trending, route: raw_only, note: "New-to-record repos vs the 11:00 list, all same lane / single-surface trending rotation → raw_only: NousResearch/hermes-agent (Hermes agent framework — on CK's own agent-runtime axis), kepano/obsidian-skills (Obsidian skills packs — wiki/skills axis), skypilot-org/skypilot (GPU/multi-cloud job orchestration — GPU-infra axis), NVIDIA-NeMo/Automodel, holaboss-ai/holaOS (agent OS), altic-dev/FluidVoice (voice), vllm-project/vllm (inference infra). Carry-over: cathrynlavery/diagram-design, semantica-agi/semantica, anthropics/skills, cactus-compute/needle, macro-inc/macro, NVIDIA-NeMo/Switchyard, msitarzewski/agency-agents, infiniflow/ragflow, shiyu-coder/Kronos, hugohe3/ppt-master, ZhuLinsen/daily_stock_analysis, HKUDS/DeepTutor. Off-axis excluded: unslothai/unsloth, megadose/holehe, smicallef/spiderfoot, 3b1b/manim, Lightricks/LTX-2, index-tts/index-tts, practical-tutorials/project-based-learning, soxoj/maigret, lightningpixel/modly. No new cross-surface durable branch → raw_only."}
  - {surface: simonwillison, route: discard, note: "ONE new low-signal row since 11:00: 'alchemy-utils 0.1a0' (08-12 19:51, https://simonwillison.net/2026/Aug/12/alchemy-utils/ — own package alpha release → discard). Top unchanged: DeepSeek V4 Pro 0813 (08-12 23:59, absorbed 11:00)."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 18:39 Agent Plugins 1.0 (VS Code/Copilot CLI/app) + Rule insights preview. Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 Docker VMM Public Beta + 'A new security baseline for enterprise agentic adoption'. Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 OlmoEarth embeddings + LFM2.5-VL-3B edge VLM. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 DDoS Threat Report H1 2026 + 08-10 Agents Week roundup + 08-07 agentic-behaviors. Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 IAM role-manager + EKS control-plane params + Quick GovCloud. New 08-12 22:00 'AWS Global View interactive map view' already discard-noted 11:00. Reinforcement/discard housekeeping."}
  - {surface: openai-news, route: discard, note: "UNCHANGED vs 11:00. Top still 08-12 enterprise/customer PR (how-enterprises-put-AI-to-work, RingCentral). Discard."}
  - {surface: google-blog, route: discard, note: "UNCHANGED vs 11:00. Still dominated by Made-by-Google 2026 / Pixel 11 launch consumer-HW PR. Discard; Gemini connectors row already raw_only 11:00."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-13."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-13.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-12.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-13)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-13 (captured ~22:06 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0813.py` → `.cache/newtarget-2026-08-13-2200/`, parsed with `/tmp/nt_parse_2200_0813.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0813.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent with 08-02..08-13).
- Baseline: same-day **11:00 new-target transcript** (reinforcement-only) + the prior **22:00 new-target run (08-12)** + `concepts/honcho.md` + `concepts/ai-infra-operating-economics.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only.** A handful of genuinely-new rows appeared since the 11:00 baseline, all single-surface and reinforcing an already-durable lane (coding-agent/harness/skills, GPU-infra, open-weight/model-lifecycle) with no new cross-surface durable branch. Strongest/most-relevant new items: **HN "ChatGPT Desktop (Codex Desktop) for Linux"** (OpenAI ships a Linux desktop coding-agent app — on CK's Codex/Claude-Code axis); **Vercel "Use ACP-compatible harnesses with the AI SDK harness layer"** (Agent Client Protocol interop); **GitHub Trending new-to-record repos** `NousResearch/hermes-agent`, `kepano/obsidian-skills`, `skypilot-org/skypilot`, `NVIDIA-NeMo/Automodel`, `holaboss-ai/holaOS`, `altic-dev/FluidVoice`, `vllm-project/vllm`. **No durable page change** — everything reinforces an existing lane; no new cross-surface durable branch.

## 1) Genuinely-new-since-11:00 rows (all raw_only / discard)

### Hacker News — Codex Desktop for Linux (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-13 04:53] ChatGPT Desktop (Codex Desktop) for Linux` — https://openai.com/codex/ (OpenAI ships a Linux desktop coding-agent app; on CK's Codex/Claude-Code axis, single-surface → raw_only)
- Discard: `Deutsche Bank becomes first foreign yuan clearing bank in Europe` (08-13 12:09, https://tradersunion.com/news/central-banks/show/2973571-deutsche-bank-becomes/ — finance news); `ATG (YC F25) Is Hiring Member of Technical Staff` (08-13 12:01, https://atg.science/careers — job); Principia Mathematica, Antiqua-Fraktur, uBlock/Facebook ads, 2026 Eclipse Webcams, berries-meditation (off-axis).
- Repeat/absorbed (already 11:00): DeepSeek V4 Pro 0813, Tailscale SQLite WAL-reset bug, Qwen3.8-2.4T, Zed Delta.

### Vercel — ACP harness layer (raw_only) + culture (discard)
Source URL: https://vercel.com/atom
- `[2026-08-13 00:00] Use ACP-compatible harnesses with the AI SDK harness layer` — https://vercel.com/changelog/use-acp-compatible-harnesses-with-the-ai-sdk-harness-layer (Agent Client Protocol interop for the AI SDK harness layer, coding-agent/harness → raw_only)
- `[2026-08-13 04:00] Inside the Vercel intern experience` — https://vercel.com/blog/inside-the-vercel-intern-experience (culture/recruiting → discard)
- Below unchanged vs 11:00: DeepSeek V4 Pro updated weights, `Set up coding agents in one command`, `Building a software factory for AI SDK`, Grok 4.6, DB-migration eng, Connect/EMU/hackable, Production Index.

### GitHub Trending (daily + python) — new-to-record repos, same lane (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- New-to-record vs 11:00 list, all same coding-agent/skills/GPU-infra lane / single-surface trending rotation:
  - `NousResearch/hermes-agent` — Hermes agent framework (on CK's own agent-runtime axis)
  - `kepano/obsidian-skills` — Obsidian skills packs (kepano/Obsidian; wiki + skills axis)
  - `skypilot-org/skypilot` — GPU / multi-cloud job orchestration (GPU-infra axis)
  - `NVIDIA-NeMo/Automodel` — NeMo automodel (cross-surface w/ the Switchyard NeMo lane)
  - `holaboss-ai/holaOS` — agent OS
  - `altic-dev/FluidVoice` — voice
  - `vllm-project/vllm` — inference infra
- Carry-over (same lane): `cathrynlavery/diagram-design`, `semantica-agi/semantica`, `anthropics/skills`, `cactus-compute/needle`, `macro-inc/macro`, `NVIDIA-NeMo/Switchyard`, `msitarzewski/agency-agents`, `infiniflow/ragflow`, `shiyu-coder/Kronos`, `hugohe3/ppt-master`, `ZhuLinsen/daily_stock_analysis`, `HKUDS/DeepTutor`.
- Off-axis excluded: `unslothai/unsloth`, `megadose/holehe`, `smicallef/spiderfoot`, `3b1b/manim`, `Lightricks/LTX-2`, `index-tts/index-tts`, `practical-tutorials/project-based-learning`, `soxoj/maigret`, `lightningpixel/modly`.
- All reinforce the existing lane; no new durable branch → raw_only.

### Simon Willison — 1 new low-signal row (discard)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-12 19:51] alchemy-utils 0.1a0` — https://simonwillison.net/2026/Aug/12/alchemy-utils/ (own package alpha release, low-signal → discard). Top unchanged: DeepSeek V4 Pro 0813 (absorbed 11:00).

## 2) Reinforcement — unchanged vs the 11:00 baseline (raw_only)
- **GitHub changelog**: top still 08-12 18:39 Agent Plugins 1.0 (VS Code/Copilot CLI/app) + Rule insights preview. Unchanged.
- **Docker**: top still 08-12 Docker VMM Public Beta + `A new security baseline for enterprise agentic adoption`. Unchanged.
- **Hugging Face**: top still 08-12 OlmoEarth embeddings + LFM2.5-VL-3B edge VLM. Unchanged.
- **Meta Eng**: top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Cloudflare**: top still 08-11 DDoS Threat Report H1 2026 + 08-10 Agents Week roundup + 08-07 agentic-behaviors. Unchanged.
- **AWS What's New**: top still 08-12 IAM role-manager + EKS control-plane params + Quick GovCloud; new 08-12 22:00 `AWS Global View interactive map view` already discard-noted 11:00. Unchanged/housekeeping.
- **OpenAI**: top still 08-12 enterprise/customer PR (how-enterprises-put-AI-to-work, RingCentral). Unchanged → discard.
- **Google blog / research**: still Made-by-Google 2026 / Pixel 11 launch PR (discard) + 08-12 parametric-factuality recall (raw_only). Unchanged.

## Filtering notes
- Excluded as noise/off-axis: HN finance/job/retro (Deutsche Bank yuan clearing, ATG hiring, Principia, Antiqua-Fraktur, uBlock/Facebook ads, Eclipse Webcams, berries); Vercel intern culture post; Simon Willison own-package alpha; Google Pixel 11 consumer-HW launch; AWS region/admin/console housekeeping; off-axis trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-13 22:00 new-target pass. **Reinforcement-only:** a handful of genuinely-new rows appeared since the 11:00 baseline (HN Codex Desktop for Linux, Vercel ACP harness layer, GitHub Trending new-to-record repos incl. NousResearch/hermes-agent + kepano/obsidian-skills + skypilot + vllm, Simon Willison alchemy-utils) but each only reinforces an already-durable lane (coding-agent/harness/skills, GPU-infra, open-weight/model-lifecycle) or is single-surface/thin — no new cross-surface durable branch. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages (including `ai-infra-operating-economics.md`) left unchanged.
