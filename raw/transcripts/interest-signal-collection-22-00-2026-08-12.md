---
title: Interest signal collection — 22:00 new-target run (2026-08-12)
created: 2026-08-12
type: raw-transcript
captured_at: 2026-08-12T22:07:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-12
  raw existed before this run. Baseline = same-day 11:00 new-target transcript
  (raw/transcripts/interest-signal-collection-11-00-2026-08-12.md — ONE durable delta this cycle, the
  Vercel AI Gateway Production Index — August 2026 append, already applied to
  concepts/ai-infra-operating-economics.md line 1367) + the prior 22:00 new-target run
  (raw/transcripts/interest-signal-collection-22-00-2026-08-11.md) + concepts/honcho.md. Result:
  REINFORCEMENT-ONLY. Only a handful of genuinely-new rows appeared since the 11:00 baseline, all
  minor / single-surface with no new cross-surface durable branch: Meta Engineering
  "How We're Building Scam Alert on WhatsApp With End-to-End Encryption and Verifiability Guarantees"
  (08-12 13:00, first genuinely-new Meta Eng post since 08-05 — E2E/verifiability engineering, but a
  consumer-safety feature, single-surface); AWS EC2 R8a Canada (08-11 22:03, region housekeeping →
  discard); HN frontpage rotation ("What sort of maths are LLMs good at?" gowers 08-12; "Show HN: Woxi
  open-source Wolfram Language reimplementation" 08-12; "Launch HN: Discovered Materials (YC P26) — AI
  agents to discover new materials" 08-12) — all single-surface; Simon Willison "datasette-upload-dbs
  0.5a0" (own package release → discard); GitHub Trending rotation with new-to-record repos
  (NVIDIA-NeMo/Switchyard cross-surface w/ the already-noted Nemotron lane, embabel/embabel-agent,
  omnigent-ai/omnigent, paradigmxyz/centaur, VectifyAI/OpenKB, macro-inc/macro, infiniflow/ragflow) —
  all reinforce the existing coding-agent/agent-framework/skills/quant lane, no new durable branch.
  Everything else (OpenAI ads/Daybreak, GitHub Copilot Ollama/MAI-Code/token-breakdown, AWS SageMaker
  open-weight drops + Bedrock IAM cost-allocation, HF IBM fewer-tokens, Vercel Connect/EMU/hackable,
  Cloudflare DDoS H1, Simon Willison lossless-transforms + stealing-traces, Google Gemini-1B-MAU + AMIE,
  Docker, Google Research) unchanged vs the 11:00 baseline → reinforcement. Anthropic RSS 404
  (availability fact, consistent with 08-02..08-12). Durable action = this raw transcript + Honcho audit
  + log entry only; index.md and all concept pages (incl. ai-infra-operating-economics.md) left unchanged.
routing:
  - {surface: meta-eng, route: raw_only, note: "ONE genuinely-new row since 11:00 (first Meta Eng post since 08-05): 'How We're Building Scam Alert on WhatsApp With End-to-End Encryption and Verifiability Guarantees' (08-12 13:00, https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert-whatsapp/ — E2E-encryption + verifiability-guarantees engineering, but a consumer messaging-safety feature, single-surface, off core agent/infra operator axis → raw_only). Below unchanged: 08-05 ads-ranking multi-stage + 08-03 GEM."}
  - {surface: github-trending, route: raw_only, note: "Same agent/coding/agent-framework/quant lane, rotated vs 11:00. New-to-record repos: NVIDIA-NeMo/Switchyard (cross-surface w/ the AWS/HN Nemotron-Switchyard lane already noted 08-11..08-12), embabel/embabel-agent (JVM agent framework), omnigent-ai/omnigent (agent), paradigmxyz/centaur, VectifyAI/OpenKB (agent knowledge base), macro-inc/macro, infiniflow/ragflow (RAG), cathrynlavery/diagram-design, hugohe3/ppt-master. Carry-over: semantica-agi/semantica, stablyai/orca, msitarzewski/agency-agents, shiyu-coder/Kronos, paperclipai/paperclip, cactus-compute/needle, anthropics/skills, anthropics/claude-code, HKUDS/DeepTutor, ZhuLinsen/daily_stock_analysis, calesthio/OpenMontage. All reinforce the existing lane; no new durable branch → raw_only. Off-axis excluded: NanmiCoder/MediaCrawler, 3b1b/manim, huggingface/transformers, unslothai/unsloth, sherlock-project/sherlock, smicallef/spiderfoot, localsend/localsend, Lightricks/LTX-2, ZuodaoTech/everyone-can-use-english, index-tts/index-tts, practical-tutorials/project-based-learning."}
  - {surface: hackernews, route: raw_only, note: "New frontpage rows since 11:00 (single-surface): 'What sort of maths are LLMs good at?' (08-12 10:04, https://gowers.wordpress.com/2026/08/12/what-sort-of-maths-are-llms-good-at/ — Timothy Gowers LLM-math-capability essay → raw_only); 'Show HN: Woxi — Open-source Mathematica/Wolfram Language reimplementation' (08-12 10:06, https://woxi.ad-si.com → raw_only, dev-tool); 'Launch HN: Discovered Materials (YC P26) — AI agents to discover new materials' (08-12 07:51, https://discoveredmaterials.com/research/ — AI-agents-for-science, single-surface → raw_only). Repeat/absorbed: 'Compression is prediction' (ngrok, already 11:00), 'WorldClaw Agentic 3D' (already 11:00). Discard: 2026 Eclipse Webcams, LinkedIn CringeBot 3000, Delphi 13 CE, Mars butte photo, Facebook ragebait/uBlock-ads, hardest-working-font, Worms, jellyfish lab, U-Michigan grades."}
  - {surface: aws-whatsnew, route: raw_only, note: "New 08-11 22:03 row: 'Amazon EC2 R8a instances now available in Canada (Central)' (region housekeeping → discard). Bedrock IAM cost-allocation bedrock-mantle (08-11 20:25) + SageMaker JumpStart open-weight drops (LocateAnything-3B/Qwen-AgentWorld/Qwen3.5-122B/Nemotron-3.5-Lightning) already 11:00 → reinforcement. Discard: Glue→SMUS, Secrets Manager Jenkins/SonarQube, Connect Cases dashboard, Clean Rooms log export, RDS MariaDB 12.3, EC2 High-Memory São Paulo."}
  - {surface: simonwillison, route: raw_only, note: "ONE new row since 11:00: 'datasette-upload-dbs 0.5a0' (08-11 20:35, https://simonwillison.net/2026/Aug/11/datasette-upload-dbs/ — own Datasette plugin alpha release → discard/raw_only, low-signal). Top unchanged: 08-11 23:48 lossless-transforms + 08-11 22:40 stealing-reasoning-traces (both 11:00)."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 10:00 'Testing ads in ChatGPT' + 'Daybreak models now on AWS' (both raw_only 11:00). Reinforcement. Discard: Model ML/GPT-5.6 Sol finance, AI-native finance function, Premium seats, Zapier, Virgin Atlantic PR."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 20:26 GHES 3.22 RC + 08-11 20:15 Copilot-memory+Ollama-JetBrains + MAI-Code-1.1-Flash + per-model token breakdown (all 11:00). Reinforcement. Discard: branch-protection→rulesets migration, India billing."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 13:37 IBM 'Thinking of ACE? Fewer Tokens' + 08-10 Magpie TTS / Knowledge-Distillation-cheap / Muse Glimmer. Reinforcement."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 22:00 Connect-observability + EMU GA (08-11 20:38) + 'Everything hackable will get hacked' (08-11 07:00) + Production Index (08-11 04:00, durable delta already applied). Reinforcement. Discard: LaunchDarkly Marketplace."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 13:00 DDoS Threat Report H1 2026 + 08-10 Agents Week roundup. Reinforcement. Discard: FedRAMP Class D."}
  - {surface: google-blog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 17:00 AMIE video-consultations + 08-11 16:00 Gemini 1B-MAU. Reinforcement. Discard: Google TV Freeplay, Health/Abbott, state-fair/ads/Venmo consumer PR."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-11 17:04 AMIE audio-visual + 07-30 Science One Framework. Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED (blog feed). Top still 08-05 'Governance Is a DX Problem' + 08-04 supply-chain-siege + 08-03 empty-sandboxes. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-12."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-12.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-11.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-12)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-12 (captured ~22:07 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0812.py` → `.cache/newtarget-2026-08-12-2200/`, parsed with `/tmp/nt_parse_2200_0812.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0812.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent with 08-02..08-12).
- Baseline: same-day **11:00 new-target transcript** (one durable delta this cycle = Vercel AI Gateway Production Index — August 2026, already appended to `concepts/ai-infra-operating-economics.md` line 1367) + the **prior 22:00 new-target run (08-11)** + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only.** Only a handful of genuinely-new rows appeared since the 11:00 baseline, all minor or single-surface with no new cross-surface durable branch. Strongest/most-relevant new items: **Meta Engineering "Scam Alert on WhatsApp with E2E Encryption + Verifiability Guarantees"** (08-12 13:00, first genuinely-new Meta Eng post since 08-05 — verifiability engineering but a consumer-safety feature); **HN** rotation (Gowers "What sort of maths are LLMs good at?", "Woxi" open-source Wolfram reimpl, "Launch HN: Discovered Materials — AI agents to discover new materials"); **GitHub Trending** rotated with new-to-record repos (`NVIDIA-NeMo/Switchyard` cross-surface w/ the Nemotron lane, `embabel/embabel-agent`, `omnigent-ai/omnigent`, `paradigmxyz/centaur`, `VectifyAI/OpenKB`, `infiniflow/ragflow`) but all reinforce the existing coding-agent/agent-framework/skills/quant lane. Everything else unchanged vs 11:00. **No durable page change.**

## 1) Genuinely-new-since-11:00 rows (all raw_only / discard)

### Meta Engineering — 1 new row (raw_only)
Source URL: https://engineering.fb.com/feed/
- `[2026-08-12 13:00] How We're Building Scam Alert on WhatsApp With End-to-End Encryption and Verifiability Guarantees` — https://engineering.fb.com/2026/08/12/security/how-were-building-scam-alert-whatsapp/ (E2E-encryption + verifiability-guarantees engineering; first new Meta Eng post since 08-05, but a consumer messaging-safety feature, single-surface, off core agent/infra operator axis → raw_only)

### Hacker News — new frontpage rows (single-surface, raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-12 10:04] What sort of maths are LLMs good at?` — https://gowers.wordpress.com/2026/08/12/what-sort-of-maths-are-llms-good-at/ (Timothy Gowers, LLM-math-capability essay → raw_only)
- `[2026-08-12 10:06] Show HN: Woxi — Open-source Mathematica/Wolfram Language reimplementation` — https://woxi.ad-si.com (dev tool → raw_only)
- `[2026-08-12 07:51] Launch HN: Discovered Materials (YC P26) — AI agents to discover new materials` — https://discoveredmaterials.com/research/ (AI-agents-for-science, single-surface → raw_only)
- Repeat/absorbed: `Compression is prediction` (ngrok, already 11:00), `WorldClaw Agentic 3D` (already 11:00).
- Off-axis discard: 2026 Eclipse Webcams, LinkedIn CringeBot 3000, Delphi 13 CE, Mars butte photo, Facebook ragebait/uBlock-ads, hardest-working-font, Worms, jellyfish lab, U-Michigan grades.

### GitHub Trending (daily + python) — same lane rotation, new-to-record repos (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- New-to-record since 11:00: `NVIDIA-NeMo/Switchyard` (cross-surface w/ the AWS/HN Nemotron-Switchyard lane noted 08-11..08-12), `embabel/embabel-agent` (JVM agent framework), `omnigent-ai/omnigent` (agent), `paradigmxyz/centaur`, `VectifyAI/OpenKB` (agent knowledge base), `macro-inc/macro`, `infiniflow/ragflow` (RAG), `cathrynlavery/diagram-design`, `hugohe3/ppt-master`.
- Carry-over (same lane): `semantica-agi/semantica`, `stablyai/orca`, `msitarzewski/agency-agents`, `shiyu-coder/Kronos`, `paperclipai/paperclip`, `cactus-compute/needle`, `anthropics/skills`, `anthropics/claude-code`, `HKUDS/DeepTutor`, `ZhuLinsen/daily_stock_analysis`, `calesthio/OpenMontage`.
- Off-axis excluded: `NanmiCoder/MediaCrawler`, `3b1b/manim`, `huggingface/transformers`, `unslothai/unsloth`, `sherlock-project/sherlock`, `smicallef/spiderfoot`, `localsend/localsend`, `Lightricks/LTX-2`, `ZuodaoTech/everyone-can-use-english`, `index-tts/index-tts`, `practical-tutorials/project-based-learning`.
- All reinforce the existing coding-agent/agent-framework/skills/quant lane; no new durable branch → raw_only.

### AWS What's New — 1 new row (discard) + reinforcement
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/feed/
- `[2026-08-11 22:03] Amazon EC2 R8a instances now available in Canada (Central) region` — region housekeeping → discard.
- Reinforcement (already 11:00): Bedrock IAM cost-allocation bedrock-mantle (08-11 20:25); SageMaker JumpStart open-weight drops (LocateAnything-3B, Qwen-AgentWorld-35B, Qwen3.5-122B, Nemotron-3.5-Lightning).
- Discard: Glue→SMUS one-click, Secrets Manager Jenkins/SonarQube, Connect Cases dashboard, Clean Rooms log export, RDS MariaDB 12.3, EC2 High-Memory U7i São Paulo.

### Simon Willison — 1 new low-signal row (discard/raw_only)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-11 20:35] datasette-upload-dbs 0.5a0` — https://simonwillison.net/2026/Aug/11/datasette-upload-dbs/ (own Datasette plugin alpha release, low-signal → discard). Top unchanged: lossless-transforms + stealing-reasoning-traces (both 11:00).

## 2) Reinforcement — unchanged vs the 11:00 baseline (raw_only)
- **OpenAI**: top still 08-11 10:00 `Testing ads in ChatGPT` + `Daybreak models now on AWS`. Unchanged.
- **GitHub changelog**: top still 08-11 20:26 GHES 3.22 RC + Copilot-memory+Ollama-JetBrains + MAI-Code-1.1-Flash + per-model token breakdown. Unchanged.
- **Hugging Face**: top still 08-11 13:37 IBM `Thinking of ACE? Fewer Tokens`. Unchanged.
- **Vercel**: top still 08-11 22:00 Connect-observability + EMU GA + `Everything hackable will get hacked` + Production Index (durable delta already applied). Unchanged.
- **Cloudflare**: top still 08-11 13:00 DDoS Threat Report H1 2026. Unchanged.
- **Google blog / research**: top still 08-11 17:00/17:04 AMIE + Gemini 1B-MAU. Unchanged.
- **Docker (blog)**: top still 08-05 "Governance Is a DX Problem" + 08-04 supply-chain-siege + 08-03 empty-sandboxes. Unchanged.

## Filtering notes
- Excluded as noise/off-axis: HN retro/hardware/civic/entertainment (Eclipse Webcams, CringeBot, Delphi, Mars, Facebook ragebait/ads, fonts, Worms, jellyfish, U-Michigan); AWS region/admin housekeeping; Google consumer/ads/health PR; off-axis trending repos (MediaCrawler, manim, transformers, unsloth, sherlock, spiderfoot, localsend, LTX-2, index-tts, project-based-learning).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-12 22:00 new-target pass. **Reinforcement-only:** a handful of genuinely-new rows appeared since the 11:00 baseline (Meta Eng WhatsApp Scam-Alert E2E/verifiability, HN Gowers-LLM-maths / Woxi / Discovered-Materials, GitHub Trending rotation with NVIDIA-NeMo/Switchyard / embabel-agent / omnigent / centaur / OpenKB / ragflow, AWS EC2 R8a Canada, Simon Willison datasette-upload-dbs) but each only reinforces an already-durable lane (coding-agent/agent-framework, open-weight/model-lifecycle, AI-safety/verifiability) or is single-surface/thin — no new cross-surface durable branch. The only durable delta this cycle (Vercel AI Gateway Production Index — August 2026) was already applied at 08-12 11:00. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages (including `ai-infra-operating-economics.md`) left unchanged.
