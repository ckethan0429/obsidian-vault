---
title: Interest signal collection — 22:00 new-target run (2026-08-14)
created: 2026-08-14
type: raw-transcript
captured_at: 2026-08-14T22:07:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-14
  raw existed before this run. Baseline = same-day 11:00 new-target transcript
  (raw/transcripts/interest-signal-collection-11-00-2026-08-14.md, reinforcement-only) plus the prior
  22:00 new-target run (raw/transcripts/interest-signal-collection-22-00-2026-08-13.md),
  concepts/honcho.md, and concepts/ai-infra-operating-economics.md. Result: REINFORCEMENT-ONLY. A
  handful of genuinely-new rows appeared since the 11:00 baseline, all single-surface and reinforcing
  an already-durable lane (open-weight/coding-model lifecycle, inference/operating-economics,
  coding-agent/harness, agent-skills, agent-memory, agentic-security) with no new cross-surface durable
  branch. Strongest new items: (1) HN frontpage "GLM-5.3: Frontier coding with emergent cyber
  capabilities" (08-14 05:19, https://z.ai/blog/glm-5.3 — Zhipu ships a new open-weight coding model,
  reinforces the open-weight/coding-model lifecycle lane, single-surface → raw_only); (2) HN "DeepSeek
  peak/off-peak pricing update" (08-14 09:55, https://api-docs.deepseek.com/news/news260813/ —
  inference operating-economics/pricing, reinforces the ai-infra-operating-economics lane → raw_only);
  (3) Cloudflare "Secure all your internal vibe-coded applications — in one click" (08-14 13:00,
  https://blog.cloudflare.com/workers-protected-by-access/ — agentic/vibe-coding security, reinforces
  the agentic-security lane → raw_only); (4) GitHub Trending new-to-record repos citrolabs/ego-lite
  ("fastest browser for AI agents ... share your logged-in browser state with Codex or Claude Code"),
  volcengine/OpenViking ("Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge
  RAG and Skills"), K-Dense-AI/scientific-agent-skills, github/awesome-copilot, cursor/plugins,
  github/spec-kit, exo-explore/exo — all reinforce the coding-agent/skills/agent-memory/GPU-infra lane,
  single-surface trending rotation → raw_only; (5) HN "Why does Opus 5 feel worse to work with?" (08-14
  10:12, coding-agent UX essay → raw_only mild). Discard: HN "Ruby 4.0 Universal RCE Deserialization
  Gadget Chain" (generic security), off-axis HN retro/misc; Simon Willison own-pkg (sqlite-utils 4.2.1,
  llm-gemini 0.33, alchemy-utils 0.1a1); AWS Billing Managed Dashboards + region/admin housekeeping;
  GitHub license/block-comments housekeeping; off-axis trending repos. Everything else UNCHANGED vs
  11:00 (OpenAI GPT-5.6 guide/Ultrafast, GitHub changelog Gemini 3.7 Flash Copilot + Agent Plugins,
  Vercel Grok-Build/Exa/GLM 5.2, HF Strands/LeRobot + ICML, Meta Eng WhatsApp Scam-Alert, Google blog
  Gemini 3.7 Flash + Pixel 11, Google Research parametric-factuality). Anthropic RSS 404 (availability
  fact, consistent with 08-02..08-14). Durable action = this raw transcript + a Honcho routing audit +
  a log.md entry only; index.md and all concept pages (incl. ai-infra-operating-economics.md) left
  unchanged.
routing:
  - {surface: hackernews, route: raw_only, note: "New on-axis frontpage rows since 11:00: 'GLM-5.3: Frontier coding with emergent cyber capabilities' (08-14 05:19, https://z.ai/blog/glm-5.3 — Zhipu new open-weight coding model, model-lifecycle lane → raw_only); 'DeepSeek peak/off-peak pricing update' (08-14 09:55, https://api-docs.deepseek.com/news/news260813/ — inference operating-economics/pricing → raw_only); 'Why does Opus 5 feel worse to work with?' (08-14 10:12, https://mun-logadan.github.io/why-does-opus-5-feel-worse/ — coding-agent UX essay → raw_only mild). Repeat/absorbed (already 11:00): Gemini 3.7 Flash, Accelerating GPT-5.6 Sol Ultrafast (Cerebras), DeepSeek Harness dev preview. Discard: 'Ruby 4.0 Universal RCE Deserialization Gadget Chain' (08-14 06:09, generic security); off-axis (Don't classify hallucinate, Differential Heuristics, Hello me it's been a while, ArcadeMaker C# engine, Spaghettifying DRAM)."}
  - {surface: cloudflare, route: raw_only, note: "ONE genuinely-new 08-14 row: 'Secure all your internal vibe-coded applications — in one click' (08-14 13:00, https://blog.cloudflare.com/workers-protected-by-access/ — Workers-behind-Access for vibe-coded apps, agentic-security lane → raw_only). Below unchanged vs 11:00: Total-eclipse traffic report (08-13), Certificate Transparency Monitoring GA (08-13), DDoS Threat Report H1 2026 (08-11), Agents Week roundup (08-10)."}
  - {surface: github-trending, route: raw_only, note: "New-to-record repos vs 08-13/08-14-11:00 lists, all same lane / single-surface trending rotation → raw_only: citrolabs/ego-lite ('fastest browser for AI agents ... share your logged-in browser state with Codex or Claude Code' — browser-CDP-for-agents axis, on CK's own theme), volcengine/OpenViking ('Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills' — agent-memory/context-DB axis, on CK's Honcho/memory-routing theme), K-Dense-AI/scientific-agent-skills ('#1 Agent Skills library for science, 170k+ scientists, 158 skills' — agent-skills axis), github/awesome-copilot ('community instructions, agents, skills for GitHub Copilot' — agent-skills axis), cursor/plugins (Cursor plugin spec — coding-agent axis), github/spec-kit (Spec-Driven Development toolkit — coding-agent axis), exo-explore/exo ('Run frontier AI locally' — local-inference/GPU-infra axis), newton-physics/newton (GPU physics sim on NVIDIA Warp — robotics/GPU). Carry-over: cathrynlavery/diagram-design, cactus-compute/needle, macro-inc/macro, holaboss-ai/holaOS, semantica-agi/semantica, infiniflow/ragflow, hugohe3/ppt-master, NVIDIA-NeMo/Automodel. Off-axis excluded: megadose/holehe, smicallef/spiderfoot, rustdesk/rustdesk, OpenCut-app/OpenCut, unslothai/unsloth, ToolJet/ToolJet, Lightricks/LTX-2, harry0703/MoneyPrinterTurbo. No new cross-surface durable branch → raw_only."}
  - {surface: docker, route: raw_only, note: "ONE genuinely-new 08-14 row: 'Reproducible ESP32 Firmware Development with Docker and Docker Sandboxes' (08-14 13:00, https://www.docker.com/blog/reproducible-esp32-firmware-development-with-docker-and-docker-sandboxes/ — Docker Sandboxes reinforcement → raw_only mild). Below unchanged vs 11:00: Docker VMM Public Beta (08-12) + 'A new security baseline for enterprise agentic adoption' (08-12)."}
  - {surface: aws-whatsnew, route: raw_only, note: "ONE genuinely-new 08-14 row: 'AWS Billing and Cost Management introduces Managed Dashboards' (08-14 02:00, https://aws.amazon.com/about-aws/whats-new/2026/08/aws-billing-and-cost-management-managed-dashboards/ — FinOps/cost dashboards → raw_only mild). Below unchanged vs 11:00: Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock, Client VPN CLI, Quick M365 extensions (all 08-13). Discard housekeeping: Spot Placement Local Zones, ACM email→DNS, S3 access-denied detail, Clean Rooms thresholds."}
  - {surface: simonwillison, route: discard, note: "New rows all own-package / low-signal: 'sqlite-utils 4.2.1' (08-13 23:53), 'llm-gemini 0.33' (08-13 19:37, own-pkg tracking Gemini 3.7 Flash → discard/raw_only mild), 'alchemy-utils 0.1a1' (08-13 03:03). Top on-axis unchanged: DeepSeek V4 Pro 0813 (08-12, absorbed)."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 GPT-5.6 builder's guide + GPT-5.6 Sol Ultrafast 14× preview (both raw_only 11:00). Discard: Dali Rajic CRO appointment, enterprise/RingCentral PR. Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 License data quality + Block-users-from-comments (housekeeping discard) + Gemini 3.7 Flash in Copilot (raw_only 11:00) + Agent Plugins 1.0 (08-12). Reinforcement."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 Grok-Build harness adapter + Exa Agent Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off (all raw_only 11:00) + intern-culture post (discard). Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction (both raw_only 11:00) + OlmoEarth/LFM2.5-VL-3B (08-12). Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: google-blog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-13 Gemini 3.7 Flash launch (raw_only 11:00) + Sheets canvas + Omni roundtable (mild) + Pixel 11 launch (discard). Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-14."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-14.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-13.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-14)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-14 (captured ~22:07 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0814.py` → `.cache/newtarget-2026-08-14-2200/`, parsed with `/tmp/nt_parse_2200_0814.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0814.py` + `/tmp/nt_desc_2200_0814.py` for trending descriptions). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent with 08-02..08-14).
- Baseline: same-day **11:00 new-target transcript** (reinforcement-only) + the prior **22:00 new-target run (08-13)** + `concepts/honcho.md` + `concepts/ai-infra-operating-economics.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only.** A handful of genuinely-new rows appeared since the 11:00 baseline, all single-surface and reinforcing an already-durable lane (open-weight/coding-model lifecycle, inference/operating-economics, coding-agent/harness, agent-skills, agent-memory, agentic-security) with no new cross-surface durable branch. Strongest/most-relevant new items: **GLM-5.3** (Zhipu new open-weight coding model, HN frontpage); **DeepSeek peak/off-peak pricing update** (inference operating-economics); **Cloudflare "secure internal vibe-coded apps in one click"** (agentic-security); **GitHub Trending new-to-record** `citrolabs/ego-lite` (browser for AI agents / share logged-in state with Codex or Claude Code), `volcengine/OpenViking` (self-evolving context DB — agent memory + RAG + skills), `K-Dense-AI/scientific-agent-skills`, `github/awesome-copilot`, `cursor/plugins`, `github/spec-kit`, `exo-explore/exo`. **No durable page change** — every new row reinforces an existing lane; the recurring durable series (Vercel AI Gateway Production Index) had no new edition; no new cross-surface durable branch.

## 1) Genuinely-new-since-11:00 rows (all raw_only / discard)

### Hacker News — GLM-5.3 + DeepSeek pricing + Opus 5 UX essay (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-14 05:19] GLM-5.3: Frontier coding with emergent cyber capabilities` — https://z.ai/blog/glm-5.3 (Zhipu new open-weight coding model; open-weight/coding-model lifecycle lane, single-surface → raw_only)
- `[2026-08-14 09:55] DeepSeek peak/off-peak pricing update` — https://api-docs.deepseek.com/news/news260813/ (inference operating-economics/pricing; reinforces ai-infra-operating-economics lane → raw_only)
- `[2026-08-14 10:12] Why does Opus 5 feel worse to work with?` — https://mun-logadan.github.io/why-does-opus-5-feel-worse/ (coding-agent UX essay → raw_only mild)
- Discard: `[2026-08-14 06:09] Ruby 4.0 Universal RCE Deserialization Gadget Chain` — https://www.elttam.com/blog/ruby-4-0-universal-rce-deserialization-gadget-chain (generic security); off-axis (Don't classify hallucinate, Differential Heuristics, "Hello me it's been a while", ArcadeMaker C# engine, Spaghettifying DRAM).
- Repeat/absorbed (already 11:00): Gemini 3.7 Flash, Accelerating GPT-5.6 Sol Ultrafast (Cerebras), DeepSeek Harness developer preview.

### Cloudflare — secure internal vibe-coded apps (raw_only)
Source URL: https://blog.cloudflare.com/rss/
- `[2026-08-14 13:00] Secure all your internal vibe-coded applications — in one click` — https://blog.cloudflare.com/workers-protected-by-access/ (Workers-behind-Access for vibe-coded apps; agentic-security lane, single-surface → raw_only)
- Below unchanged vs 11:00: Total-eclipse traffic report (08-13), Certificate Transparency Monitoring GA (08-13), DDoS Threat Report H1 2026 (08-11), Agents Week roundup (08-10).

### GitHub Trending (daily + python) — new-to-record repos, same lane (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- New-to-record vs 08-13 / 08-14-11:00 lists, all same lane / single-surface trending rotation:
  - `citrolabs/ego-lite` — "The fastest browser for AI agents to run browser automation ... share your logged-in browser state with your AI agents, like Codex or Claude Code" (browser-CDP-for-agents axis, on CK's own theme)
  - `volcengine/OpenViking` — "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills" (agent-memory/context-DB axis, on CK's Honcho/memory-routing theme)
  - `K-Dense-AI/scientific-agent-skills` — "#1 Agent Skills library for science, used by 170,000+ scientists, 158 skills + 100+ scientific databases" (agent-skills axis)
  - `github/awesome-copilot` — "Community-contributed instructions, agents, skills, and configurations for GitHub Copilot" (agent-skills axis)
  - `cursor/plugins` — Cursor plugin specification and official plugins (coding-agent axis)
  - `github/spec-kit` — Spec-Driven Development toolkit (coding-agent axis)
  - `exo-explore/exo` — "Run frontier AI locally" (local-inference / GPU-infra axis)
  - `newton-physics/newton` — GPU-accelerated physics simulation on NVIDIA Warp (robotics/GPU)
- Carry-over (same lane): `cathrynlavery/diagram-design`, `cactus-compute/needle`, `macro-inc/macro`, `holaboss-ai/holaOS`, `semantica-agi/semantica`, `infiniflow/ragflow`, `hugohe3/ppt-master`, `NVIDIA-NeMo/Automodel`.
- Off-axis excluded: `megadose/holehe`, `smicallef/spiderfoot`, `rustdesk/rustdesk`, `OpenCut-app/OpenCut`, `unslothai/unsloth`, `ToolJet/ToolJet`, `Lightricks/LTX-2`, `harry0703/MoneyPrinterTurbo`.
- All reinforce the existing coding-agent/skills/agent-memory/GPU-infra lane; no new cross-surface durable branch → raw_only.

### Docker — ESP32 firmware w/ Docker Sandboxes (raw_only mild)
Source URL: https://www.docker.com/blog/feed/
- `[2026-08-14 13:00] Reproducible ESP32 Firmware Development with Docker and Docker Sandboxes` — https://www.docker.com/blog/reproducible-esp32-firmware-development-with-docker-and-docker-sandboxes/ (Docker Sandboxes reinforcement → raw_only mild)
- Below unchanged vs 11:00: Docker VMM Public Beta (08-12) + "A new security baseline for enterprise agentic adoption" (08-12).

### AWS What's New — Billing Managed Dashboards (raw_only mild)
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/feed/
- `[2026-08-14 02:00] AWS Billing and Cost Management introduces Managed Dashboards` — https://aws.amazon.com/about-aws/whats-new/2026/08/aws-billing-and-cost-management-managed-dashboards/ (FinOps/cost dashboards → raw_only mild)
- Below unchanged vs 11:00: Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock, Client VPN CLI, Quick M365 extensions (all 08-13).
- Discard housekeeping: Spot Placement Local Zones, ACM email→DNS, S3 access-denied detail, Clean Rooms aggregation thresholds.

### Simon Willison — own-package releases (discard)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-13 23:53] sqlite-utils 4.2.1`, `[2026-08-13 19:37] llm-gemini 0.33` (own-pkg tracking Gemini 3.7 Flash support → discard/raw_only mild), `[2026-08-13 03:03] alchemy-utils 0.1a1` — own-package releases → discard. Top on-axis unchanged: DeepSeek V4 Pro 0813 (08-12, absorbed).

## 2) Reinforcement — unchanged vs the 11:00 baseline (raw_only)
- **OpenAI**: top still 08-13 GPT-5.6 builder's guide + GPT-5.6 Sol Ultrafast 14× preview (both raw_only 11:00); Dali Rajic CRO + enterprise/RingCentral PR (discard). Unchanged.
- **GitHub changelog**: top still 08-13 License data quality + Block-users-from-comments (housekeeping discard) + Gemini 3.7 Flash in Copilot (raw_only 11:00) + Agent Plugins 1.0 (08-12). Unchanged.
- **Vercel**: top still 08-13 Grok-Build harness adapter + Exa Agent Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off (all raw_only 11:00). Unchanged.
- **Hugging Face**: top still 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction (both raw_only 11:00). Unchanged.
- **Meta Eng**: top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Google blog**: top still 08-13 Gemini 3.7 Flash launch (raw_only 11:00) + Sheets canvas + Omni roundtable (mild) + Pixel 11 launch (discard). Unchanged.
- **Google Research**: top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Unchanged.

## Filtering notes
- Excluded as noise/off-axis: HN generic security (Ruby 4.0 RCE) + retro/misc (Don't classify hallucinate, Differential Heuristics, "Hello me", ArcadeMaker, Spaghettifying DRAM); Simon Willison own-package releases; AWS region/admin/console housekeeping; GitHub license/block-comments housekeeping; Google Pixel 11 consumer-HW launch; off-axis trending repos (holehe, spiderfoot, rustdesk, OpenCut, unsloth, ToolJet, LTX-2, MoneyPrinterTurbo).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-14 22:00 new-target pass. **Reinforcement-only:** a handful of genuinely-new rows appeared since the 11:00 baseline (GLM-5.3 open-weight coding model, DeepSeek peak/off-peak pricing, Cloudflare vibe-coded-app security, GitHub Trending new-to-record repos incl. ego-lite + OpenViking + scientific-agent-skills + awesome-copilot + cursor/plugins + spec-kit + exo, Docker ESP32 Sandboxes, AWS Billing Managed Dashboards, HN Opus-5 UX essay) but each only reinforces an already-durable lane (open-weight/coding-model lifecycle, inference/operating-economics, coding-agent/harness, agent-skills, agent-memory, agentic-security) with no new cross-surface durable branch. The only recurring durable series (Vercel AI Gateway Production Index) had no new edition today. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages (incl. `ai-infra-operating-economics.md`) left unchanged.
