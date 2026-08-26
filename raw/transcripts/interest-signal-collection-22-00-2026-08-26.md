---
title: Interest signal collection — 22:00 new-target run (2026-08-26)
created: 2026-08-26
type: raw-transcript
captured_at: 2026-08-26T22:07:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time (~22:07 KST). Idempotency clear: no interest-signal-collection-22-00-2026-08-26
  raw existed before this run (same-day 08:00 social + 11:00 new-target + 19:00 social already saved).
  Baseline for the new-target track = the same-day 11:00 new-target transcript
  interest-signal-collection-11-00-2026-08-26.md (~11h ago) + concepts/ai-infra-operating-economics.md
  (operating-economics/cost + hardware/silicon + open-weight/inference-efficiency lanes) +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md. Result: REINFORCEMENT-ONLY at the
  durable layer. Genuinely-new rows since the 11:00 baseline, all single-surface raw_only:
  (1) STRONGEST — HN "Z.ai confirms Ox Alpha is a new GLM-series model and will release its weights"
  (https://www.bloomberg.com/news/articles/2026-08-26/china-s-z-ai-made-ox-alpha-stealth-model-that-rivals-deepseek
  — another frontier open-weight release, reinforces the open-weight lane already tracked; single-surface HN row).
  (2) OpenAI NEW top "How loveholidays is making everyone a builder with Codex"
  (https://openai.com/index/loveholidays — Codex enterprise-adoption customer story, mild, raw_only).
  (3) GitHub Trending NEW repos = an agent-skills surge (ConardLi/garden-skills, K-Dense-AI/scientific-agent-skills,
  VoltAgent/awesome-agent-skills) + topoteretes/cognee (agent-memory, joins mempalace/openhuman WATCH) +
  browser-use/browser-use (browser-automation agent) + github/spec-kit + ai-dynamo/aiperf (inference bench) —
  all reinforce already-durable agent-skills-ecosystem / agent-memory / managed-agents lanes. (4) Simon Willison
  NEW top "Quoting Paul Dix" (curio). (5) AWS NEW bottom "Secrets Manager Cisco/Netskope" (routine infra, discard).
  (6) Google blog NEW top "Google at the Global Forum on Intellectual Property" (policy/off-axis, discard).
  UNCHANGED vs 11:00: HuggingFace (Granite 4.2 top), Vercel (08-25 batch: Run SDK / credential-sprawl / Next.js
  security / Speed Insights free tier), Meta Engineering (MTIA 300 + MetaRoCE), GitHub changelog (Rule-insights /
  Copilot-Customize GA), Cloudflare (EmDash), Docker (Minimus->Hardened-Images), Google Research (AgentHands XR).
  Anthropic RSS 404 (availability fact, consistent 08-02..08-26). Durable action = this raw transcript + a Honcho
  routing audit + a log.md entry only; index.md and all concept pages left unchanged.
routing:
  - {surface: hackernews, route: raw_only, note: "STRONGEST genuinely-new on-axis row this run. 'Z.ai confirms Ox Alpha is a new GLM-series model and will release its weights' (2026-08-26 — https://www.bloomberg.com/news/articles/2026-08-26/china-s-z-ai-made-ox-alpha-stealth-model-that-rivals-deepseek — another frontier open-weight model release rivaling DeepSeek; reinforces the open-weight/model-lifecycle lane already durable in ai-infra-operating-economics.md). Single-surface HN row -> raw_only. Also new: 'RAG Is Simpler Than You Think' (https://www.lighthousenewsletter.com/p/rag-is-simpler-than-you-think — RAG tutorial, mild); 'Beyond Recall and the Illusion of Competence' (https://var0.xyz/posts/beyond-recall-and-the-illusion-of-competence.html). discard/off-axis: 'Omarchy is full of security holes', 'XCancel and Nitter receiving C&D from XCorp' + 'X sends in the lawyers to shut down open source project' (X/Nitter legal, off-axis), FDA ketone wearable (carry), OpenStreetMap charter, YC Proliferate hiring, Cliff Stoll video."}
  - {surface: openai-news, route: raw_only, note: "NEW top since 11:00: 'How loveholidays is making everyone a builder with Codex' (2026-08-26 00:00 — https://openai.com/index/loveholidays — Codex enterprise-adoption customer story, on CK's agent-coding/Codex lane but a single-surface case study -> raw_only). Carry-over: Jalapeno inference chip + 'The full stack behind abundant intelligence' (the 11:00 append delta), Russia-influence (discard), Admin plugin, GPT-5.6-in-Kiro, AI Futures."}
  - {surface: github-trending, route: raw_only, note: "Same managed-agents/skills/agent-coding cluster; NEW repos vs 11:00 all reinforce already-durable lanes -> raw_only. Agent-skills SURGE: ConardLi/garden-skills, K-Dense-AI/scientific-agent-skills, VoltAgent/awesome-agent-skills (three new agent-skills repos in one window, reinforces the agent-skills-ecosystem lane from the 08-25 agent-skill-languages thread). Agent-memory: topoteretes/cognee (joins MemPalace/mempalace + tinyhumansai/openhuman WATCH, still single-day cross-surface, not promoted). Other new: browser-use/browser-use (browser-automation agent), github/spec-kit (spec-driven dev), ai-dynamo/aiperf (inference benchmarking, ai-infra), HKUDS/CLI-Anything, aiming-lab/AutoResearchClaw, Panniantong/Agent-Reach, tt-a1i/archify. Carry-over on-axis: anthropics/claude-plugins-official+community, Alishahryar1/free-claude-code, MadsLorentzen/ai-job-search, AgriciDaniel/claude-obsidian, rohitg00/ai-engineering-from-scratch, marin-community/marin, TauricResearch/TradingAgents. Off-axis excluded: freestylefly/awesome-gpt-image-2, basecamp/omarchy, netbox-community/netbox."}
  - {surface: simonwillison, route: raw_only, note: "NEW top since 11:00 (curio -> raw_only): 'Quoting Paul Dix' (2026-08-26 08:07 — https://simonwillison.net/2026/Aug/26/paul-dix/ — quote post). Carry-over: EVE-Online-Python-3, llm-anthropic 0.27, Your-executable-is-a-SQLite-database, llm 0.33."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 Granite 4.2 (IBM open-weight) + Quantization-Aware Healing (4-bit) + Gradio AI Workflows. Reinforcement."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 batch: Next.js Aug-2026 security, Speed Insights free tier, Run SDK secure-eval, credential-sprawl, MiniMax M3/M2.7, Wan 3.0, Connect GA, Chat SDK Slack/Notion/XChat. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-24 MTIA 300 + MetaRoCE (the custom-silicon append delta). Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 Rule-insights-dashboard GA + Copilot-Customize-tab GA + Block-users-from-advisories + Push-rules-path-exceptions. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-24 EmDash agent-authored-blog + 08-21 Bot Preference Sync + 08-20 task-based OAuth consent. Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 Moving-from-Minimus-to-Docker-Hardened-Images + 08-24 MinIO-EOL/ELS + 08-21 Running-AI-agents-in-GHA-Sandboxes. Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 AgentHands XR (off-axis) + 08-21 biomarkers/mobility-LLM. Reinforcement."}
  - {surface: aws-whatsnew, route: discard, note: "Same 08-25 routine-infra batch as 11:00 (IoT InfluxDB / Batch-ECS / Capacity Reservations / Lambda MicroVMs PrivateLink / Lambda Node.js26+Python3.15 preview / RDS minor versions / IAM Roles Anywhere Java) + one NEW bottom row 'AWS Secrets Manager adds managed external secrets support for Cisco Security Platform and Netskope' (https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-cisco-netskope/ — routine infra). No on-axis AI-infra row above the routine bar -> discard from report."}
  - {surface: google-blog, route: discard, note: "NEW top since 11:00 (policy/off-axis -> discard): 'Google at the Global Forum on Intellectual Property' (2026-08-26 04:15 — https://blog.google/company-news/outreach-and-initiatives/public-policy/ai-intellectual-property-future-innovation/ — AI/IP policy). Carry-over consumer/off-axis: Pixel 11, home decor, Gemini macOS dictation, Play Gamescom, Delaware training."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml still 404); availability fact, consistent with 08-02..08-26."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-26.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-26)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-26 (captured ~22:07 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0826.py` → `.cache/newtarget-2026-08-26-2200/`, parsed with `/tmp/nt_parse_2200_0826.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0826.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-26).
- Baseline: the same-day **11:00 new-target transcript** (~11h old) + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer.** Genuinely-new rows since the ~11h-old 11:00 baseline are all single-surface `raw_only` and slot into already-absorbed lanes. **Strongest new row: HN "Z.ai confirms Ox Alpha is a new GLM-series model and will release its weights"** — another frontier open-weight model release (rivaling DeepSeek), reinforcing the open-weight/model-lifecycle lane already durable in `ai-infra-operating-economics.md`; single-surface HN row. Other new rows: **OpenAI "How loveholidays is making everyone a builder with Codex"** (Codex enterprise-adoption customer story), **GitHub Trending's agent-skills surge** (garden-skills / scientific-agent-skills / awesome-agent-skills) + `topoteretes/cognee` (agent-memory) + `browser-use/browser-use` + `github/spec-kit` + `ai-dynamo/aiperf`, **Simon Willison "Quoting Paul Dix"** (curio). Off-axis `discard`: AWS Secrets Manager Cisco/Netskope, Google Global Forum on IP. **No durable page change.**

## 1) Genuinely-new-since-11:00 rows (all raw_only)

### Hacker News — Z.ai Ox Alpha open-weight GLM (raw_only, STRONGEST new on-axis)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-26 10:04] Z.ai confirms Ox Alpha is a new GLM-series model and will release its weights` — https://www.bloomberg.com/news/articles/2026-08-26/china-s-z-ai-made-ox-alpha-stealth-model-that-rivals-deepseek (another frontier open-weight release rivaling DeepSeek — open-weight/model-lifecycle lane, single-surface)
- `[2026-08-26 08:39] RAG Is Simpler Than You Think` — https://www.lighthousenewsletter.com/p/rag-is-simpler-than-you-think (RAG tutorial, mild)
- `[2026-08-26 10:07] Beyond Recall and the Illusion of Competence` — https://var0.xyz/posts/beyond-recall-and-the-illusion-of-competence.html
- Off-axis discard: `Omarchy is full of security holes`, `XCancel and Nitter are receiving C&D letters from XCorp` (https://news.ycombinator.com/item?id=49446210) + `X sends in the lawyers to shut down open source project` (X/Nitter legal), FDA ketone wearable (carry), OpenStreetMap charter, YC Proliferate hiring, Cliff Stoll video.

### OpenAI — loveholidays Codex customer story (raw_only)
Source URL: https://openai.com/news/rss.xml
- `[2026-08-26 00:00] How loveholidays is making everyone a builder with Codex` — https://openai.com/index/loveholidays (Codex enterprise-adoption case study — agent-coding/Codex lane, single-surface)
- Carry-over: Jalapeño inference chip + "The full stack behind abundant intelligence" (the 11:00 append delta), Admin plugin, GPT-5.6-in-Kiro, AI Futures.

### GitHub Trending — agent-skills surge + agent-memory + browser-use (raw_only)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- **Agent-skills surge (NEW):** `ConardLi/garden-skills`, `K-Dense-AI/scientific-agent-skills`, `VoltAgent/awesome-agent-skills` — three new agent-skills repos in one window, reinforcing the agent-skills-ecosystem lane (08-25 agent-skill-languages thread)
- **Agent-memory (NEW, WATCH):** `topoteretes/cognee` — joins `MemPalace/mempalace` + `tinyhumansai/openhuman` WATCH; Honcho-adjacent, still single-day cross-surface, not promoted
- Other NEW: `browser-use/browser-use` (browser-automation agent), `github/spec-kit` (spec-driven dev), `ai-dynamo/aiperf` (inference benchmarking, ai-infra), `HKUDS/CLI-Anything`, `aiming-lab/AutoResearchClaw`, `Panniantong/Agent-Reach`, `tt-a1i/archify`
- Carry-over on-axis: `anthropics/claude-plugins-official`+`claude-plugins-community`, `Alishahryar1/free-claude-code`, `MadsLorentzen/ai-job-search`, `AgriciDaniel/claude-obsidian`, `rohitg00/ai-engineering-from-scratch`, `marin-community/marin`, `TauricResearch/TradingAgents`
- Off-axis excluded: `freestylefly/awesome-gpt-image-2`, `basecamp/omarchy`, `netbox-community/netbox`

### Simon Willison — Paul Dix quote (raw_only, curio)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-08-26 08:07] Quoting Paul Dix` — https://simonwillison.net/2026/Aug/26/paul-dix/ (quote post)

## 2) Reinforcement — no genuinely-new rows vs the 11:00 baseline (raw_only)
- **Hugging Face**: top still 08-25 Granite 4.2 (IBM open-weight) + Quantization-Aware Healing (4-bit) + Gradio AI Workflows. Unchanged.
- **Vercel**: top still 08-25 batch (Next.js security, Speed Insights free tier, Run SDK secure-eval, credential-sprawl, MiniMax, Wan 3.0, Connect GA, Chat SDK). Unchanged.
- **Meta Engineering**: top still 08-24 MTIA 300 + MetaRoCE (the custom-silicon append delta). Unchanged.
- **GitHub changelog**: top still 08-25 Rule-insights GA + Copilot-Customize GA + Block-users + Push-rules-path-exceptions. Unchanged.
- **Cloudflare**: top still 08-24 EmDash + 08-21 Bot Preference Sync + 08-20 task-based OAuth consent. Unchanged.
- **Docker**: top still 08-25 Moving-from-Minimus-to-Hardened-Images + 08-24 MinIO-EOL/ELS + 08-21 Running-AI-agents-in-GHA-Sandboxes. Unchanged.
- **Google Research**: top still 08-25 AgentHands XR (off-axis) + 08-21 biomarkers/mobility-LLM. Unchanged.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-26).

## 3) discard
- **AWS What's New**: same 08-25 routine-infra batch as 11:00 (IoT InfluxDB / Batch-ECS / Capacity Reservations / Lambda MicroVMs PrivateLink / Lambda Node.js26+Python3.15 preview / RDS minor versions / IAM Roles Anywhere Java) + one NEW bottom row `AWS Secrets Manager adds managed external secrets support for Cisco Security Platform and Netskope` (https://aws.amazon.com/about-aws/whats-new/2026/08/secrets-manager-cisco-netskope/). Routine infra.
- **Google blog**: NEW top `Google at the Global Forum on Intellectual Property` (https://blog.google/company-news/outreach-and-initiatives/public-policy/ai-intellectual-property-future-innovation/ — AI/IP policy, off-axis) + carry-over consumer rows (Pixel 11, home decor, Gemini macOS dictation, Play Gamescom, Delaware training).

## Filtering notes
- Excluded as noise/off-axis: AWS routine-infra batch; Google blog policy/consumer rows; HN off-axis (Omarchy security, X/Nitter legal, FDA ketone wearable, OpenStreetMap charter, YC hiring, Cliff Stoll video); off-axis trending repos (awesome-gpt-image-2, omarchy, netbox).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-26 22:00 new-target pass. **Reinforcement-only at the durable layer.** The strongest genuinely-new row is HN's "Z.ai Ox Alpha open-weight GLM" (another frontier open-weight release rivaling DeepSeek) — notable but single-surface, reinforcing the already-durable open-weight/model-lifecycle lane, not a new branch. All other new rows (OpenAI loveholidays Codex customer story, GitHub Trending's agent-skills surge + cognee agent-memory + browser-use + spec-kit + aiperf, Simon Willison Paul Dix quote) slot into already-absorbed lanes or are off-axis. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.
