---
title: Interest signal collection — 22:00 new-target run (2026-08-17)
created: 2026-08-17
type: raw-transcript
captured_at: 2026-08-17T22:10:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-17
  raw existed before this run. Baseline = same-day 11:00 new-target transcript
  (raw/transcripts/interest-signal-collection-11-00-2026-08-17.md, reinforcement-only) plus the prior
  22:00 new-target run (raw/transcripts/interest-signal-collection-22-00-2026-08-16.md),
  concepts/honcho.md, and concepts/ai-infra-operating-economics.md. Result: MORE MOVEMENT than the 11:00
  pass but still REINFORCEMENT-ONLY at the durable layer. Most RSS/changelog blog surfaces (GitHub
  changelog, AWS, HF, Vercel, Cloudflare, Meta Eng, Google research) unchanged vs 11:00. Genuinely-new
  since 11:00 (all single-surface → raw_only): (A) GitHub Trending rotated to a NEW agentic-security +
  agent-skills cluster: mukul975/Anthropic-Cybersecurity-Skills (817 structured cybersecurity skills for
  AI agents mapped to MITRE ATT&CK/NIST/ATLAS/D3FEND), anthropics/defending-code-reference-harness
  (official Anthropic — skills for threat modeling/scanning/triage/patching + autonomous scanning
  harness), 0x4m4/hexstrike-ai (HexStrike AI MCP server letting Claude/GPT/Copilot run 150+ cybersec
  tools), mvanhorn/last30days-skill (AI agent skill researching topics across Reddit/X/YT/HN/Polymarket);
  plus volcengine/OpenViking (self-evolving Context Database for AI Agents — unify agent memory + RAG +
  skills, on CK's Honcho/memory-routing theme); plus investing repos nautechsystems/nautilus_trader
  (Rust-native trading engine) and microsoft/qlib (AI quant platform); plus AlexsJones/llmfit
  (one-command model-to-hardware fit). This agentic-security/skills cluster is the strongest new signal
  and is flagged as a WATCH/manual_review candidate, but it is single-surface (GitHub Trending only) and
  reinforces the already-durable agentic-security + Claude/agent-skills axis → raw_only, no new
  cross-surface durable branch. (B) OpenAI "New policy ideas for the Intelligence Age" (08-17, policy,
  mild). (C) Docker "Make zero CVEs your new default" (08-17, supply-chain/CVE security, mild). (D) HN:
  "GPT 5.6 Sol is the best vision model OpenAI ever released" (roboflow, model eval mild), Dario Amodei
  "On A.I. regulation and messaging" (policy mild), daringfireball "Anthropic's 'watermark' text
  adulteration in Claude is a perversion of writing" (Claude critique mild). Anthropic RSS 404
  (availability fact, consistent 08-02..08-17). Durable action = this raw transcript + a Honcho routing
  audit + a log.md entry only; index.md and all concept pages (incl. ai-infra-operating-economics.md)
  left unchanged.
routing:
  - {surface: github-trending, route: raw_only, note: "STRONGEST new signal this pass — a NEW-to-record agentic-security + agent-skills cluster (all single-surface GitHub Trending rotation, flagged WATCH/manual_review but kept raw_only): mukul975/Anthropic-Cybersecurity-Skills ('817 structured cybersecurity skills for AI agents · Mapped to MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF' — agentic-security + skills axis); anthropics/defending-code-reference-harness ('Skills for threat modeling, scanning, triage, patching, plus an autonomous scanning harness you can /customize' — OFFICIAL Anthropic, agentic-security + harness + skills axis); 0x4m4/hexstrike-ai ('HexStrike AI MCP Agents ... lets AI agents (Claude, GPT, Copilot) autonomously run 150+ cybersecurity tools' — agentic-security + MCP axis); mvanhorn/last30days-skill ('AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket' — agent-skills axis); volcengine/OpenViking ('Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills' — agent-memory/Honcho theme + skills); nautechsystems/nautilus_trader ('Production-grade Rust-native trading engine' — investing axis); microsoft/qlib ('AI-oriented Quant investment platform' — investing axis); AlexsJones/llmfit ('One command to find what runs on your hardware' — model-serving/hardware axis). Carry-over same lane: usestrix/strix (AI pentest, 08-16), jundot/omlx, cordiverse/cordis, unslothai/unsloth, cactus-compute/needle, HKUDS/CLI-Anything, MakazhanAlpamys/Soup. Off-axis excluded: harry0703/MoneyPrinterTurbo, public-apis/public-apis, yt-dlp/yt-dlp, immich-app/immich (photo mgmt), agalwood/Motrix (download mgr), santifer/career-ops (AI job search), D4Vinci/Scrapling (web scraping), titanwings/colleague-skill (novelty), Blaizzy/mlx-audio (TTS mild). All single-surface → raw_only; no new cross-surface durable branch."}
  - {surface: openai-news, route: raw_only, note: "ONE genuinely-new row since 11:00: 'New policy ideas for the Intelligence Age' (2026-08-17 03:15 GMT, https://openai.com/index/new-policy-ideas-for-the-intelligence-age — AI policy/regulation, mild, off CK's core axis → raw_only). Below unchanged: 08-13 GPT-5.6 builder's guide + GPT-5.6 Sol Ultrafast 14x preview. Discard: Dali Rajic CRO, enterprise/RingCentral PR, testing-ads-in-ChatGPT."}
  - {surface: docker, route: raw_only, note: "ONE genuinely-new row since 11:00: 'Make zero CVEs your new default' (2026-08-17 13:00 GMT, https://www.docker.com/blog/make-zero-cves-your-new-default/ — container supply-chain/CVE security, mild → raw_only). Below unchanged: 08-14 Reproducible ESP32 Firmware w/ Docker Sandboxes + 08-12 Docker VMM Public Beta + security-baseline-for-agentic-adoption."}
  - {surface: hackernews, route: raw_only, note: "Genuinely-new on-axis frontpage rows since 11:00 (all single-surface → raw_only): (1) 'GPT 5.6 Sol is the best vision model OpenAI ever released' (08-17, https://blog.roboflow.com/openai-gpt-5-6/ — GPT-5.6 Sol vision eval, model-eval mild); (2) 'On A.I. regulation and messaging' (08-17, https://twitter.com/DarioAmodei/status/2088758816376807762 — Dario Amodei AI-regulation, policy mild); (3) \"Anthropic's 'watermark' text adulteration in Claude is a perversion of writing\" (08-16 21:53, https://daringfireball.net/2026/08/anthropics_watermark_text_adulteration_in_claude_is_a_perversion_of_writing — Claude watermarking critique, Claude axis mild). Already captured 11:00: 'Qwen 3.8 27B...' + 'Claude: System Prompts'. Off-axis discard: Deflock HOA cameras, Go sync.noCopy, Desktopcolors museum, Mexico coastal crackdown, endurance-athletes syndrome; RISC-V embedded + Reticulum mesh (repeats)."}
  - {surface: openai-policy-note, route: raw_only, note: "policy/regulation cluster forming across surfaces this pass (OpenAI 'New policy ideas for the Intelligence Age' + HN Dario Amodei 'On A.I. regulation and messaging') but it is off CK's core AI-agent/infra/investing axis and each row is single-surface → raw_only, not promoted."}
  - {surface: simonwillison, route: raw_only, note: "UNCHANGED vs 11:00. Newest rows still 08-16 'Markdown SVG upgrades' / 'Qwen 3.8 27B' / 'Quoting Dario Amodei' (all captured 11:00). 'Don't classify. Hallucinate!' (08-14) is older, below baseline. Discard own-pkg: sqlite-utils 4.2/4.2.1, llm-gemini 0.33, alchemy-utils, DeepSeek V4 Pro note. Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 OAuth-redirect-URIs (discard) + Grok 4.6 in Copilot + Copilot weekly-releases-Aug-10; Gemini 3.7 Flash in Copilot (08-13), Agent Plugins 1.0 (08-12). Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 RDS-Oracle-APEX + SES-deeplinking (discard housekeeping) + Billing Managed Dashboards; Client VPN CLI, Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock (08-13). All housekeeping/discard. Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 State of Open Models Summer 2026 + 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction + OlmoEarth/LFM2.5-VL-3B (08-12). Reinforcement."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 ECH on CDN + 08-13 Grok-Build harness adapter + ACP-compatible harnesses + Exa Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off. AI Gateway Production Index had NO new edition. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-14 MCP-traffic detection/security + secure-internal-vibe-coded-apps + Total-eclipse traffic + Cert Transparency Monitoring GA (08-13). Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: google-blog, route: raw_only, note: "ONE new row since 11:00: 'Get closer to the game with Gemini and Pixel' (08-17 08:00, sports/consumer partnership → discard). Below unchanged: 08-13 Gemini 3.7 Flash launch + Sheets canvas + Omni roundtable + Pixel 11 launch. Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-17."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-17.md
  - raw/transcripts/interest-signal-collection-22-00-2026-08-16.md
  - concepts/ai-infra-operating-economics.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-17)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-17 (captured ~22:10 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0817.py` -> `.cache/newtarget-2026-08-17-2200/`, parsed with `/tmp/nt_parse_2200_0817.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0817.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-17).
- Baseline: same-day **11:00 new-target transcript** (reinforcement-only) + the prior **22:00 new-target run (08-16)** + `concepts/honcho.md` + `concepts/ai-infra-operating-economics.md`. Novelty judged against these.

## Novelty summary
**More movement than the 11:00 pass, but still reinforcement-only at the durable layer.** Most RSS/changelog blog surfaces (GitHub changelog, AWS, HF, Vercel, Cloudflare, Meta Eng, Google research) are unchanged vs the same-day 11:00 baseline. The real movement is on **GitHub Trending**, which rotated into a genuinely-new **agentic-security + agent-skills cluster** (Anthropic-Cybersecurity-Skills, official anthropics/defending-code-reference-harness, hexstrike-ai MCP, last30days-skill, plus OpenViking agent-context-DB), plus two investing repos (nautilus_trader, qlib) and a model-hardware-fit tool (llmfit). This cluster is the **strongest new signal** and is flagged as a WATCH / manual_review candidate — but it is **single-surface (GitHub Trending only)** and reinforces the already-durable agentic-security + Claude/agent-skills axis, so it stays `raw_only` with **no new cross-surface durable branch**. Smaller new rows: OpenAI "New policy ideas for the Intelligence Age" (policy, mild), Docker "Make zero CVEs your new default" (supply-chain security, mild), HN GPT-5.6 Sol vision eval + Dario Amodei AI-regulation tweet + daringfireball Claude-watermark critique (all mild). **No durable page change** — no cross-surface durable branch emerged; each new row reinforces an existing lane.

## 1) Genuinely-new-since-11:00 rows (all raw_only)

### GitHub Trending — NEW agentic-security + agent-skills cluster (raw_only, WATCH candidate)
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- `mukul975/Anthropic-Cybersecurity-Skills` — "817 structured cybersecurity skills for AI agents · Mapped to 6 frameworks: MITRE ATT&CK, NIST CSF 2.0, MITRE ATLAS, D3FEND, NIST AI RMF & MITRE F3" — https://github.com/mukul975/Anthropic-Cybersecurity-Skills (agentic-security + agent-skills axis)
- `anthropics/defending-code-reference-harness` — "Skills for threat modeling, scanning, triage, patching, plus an autonomous scanning harness you can /customize" — https://github.com/anthropics/defending-code-reference-harness (**OFFICIAL Anthropic**; agentic-security + harness + skills axis)
- `0x4m4/hexstrike-ai` — "HexStrike AI MCP Agents is an advanced MCP server that lets AI agents (Claude, GPT, Copilot, etc.) autonomously run 150+ cybersecurity tools for automation" — https://github.com/0x4m4/hexstrike-ai (agentic-security + MCP axis)
- `mvanhorn/last30days-skill` — "AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary" — https://github.com/mvanhorn/last30days-skill (agent-skills axis)
- `volcengine/OpenViking` — "Self-evolving Context Database for AI Agents. Unify Agent Memory, Knowledge RAG and Skills." — https://github.com/volcengine/OpenViking (agent-memory / Honcho memory-routing theme + skills)
- `nautechsystems/nautilus_trader` — "Production-grade Rust-native trading engine with deterministic event-driven architecture" — https://github.com/nautechsystems/nautilus_trader (investing/automation axis)
- `microsoft/qlib` — "AI-oriented Quant investment platform ... from exploring ideas to implementing productions" — https://github.com/microsoft/qlib (investing/data axis)
- `AlexsJones/llmfit` — "Hundreds of models & providers. One command to find what runs on your hardware." — https://github.com/AlexsJones/llmfit (model-serving / hardware-fit axis)
- Carry-over (same lane, already recorded): `usestrix/strix` (AI pentest, 08-16), `jundot/omlx`, `cordiverse/cordis`, `unslothai/unsloth`, `cactus-compute/needle`, `HKUDS/CLI-Anything`, `MakazhanAlpamys/Soup`.
- Off-axis excluded: `harry0703/MoneyPrinterTurbo`, `public-apis/public-apis`, `yt-dlp/yt-dlp`, `immich-app/immich` (photo mgmt), `agalwood/Motrix` (download mgr), `santifer/career-ops` (AI job search), `D4Vinci/Scrapling` (web scraping), `titanwings/colleague-skill` (novelty), `Blaizzy/mlx-audio` (TTS mild).
- All single-surface (GitHub Trending only) → raw_only; the agentic-security/skills cluster is the strongest new candidate but does not (yet) land cross-surface, so no new durable branch.

### OpenAI — new policy post (raw_only mild)
Source URL: https://openai.com/news/rss.xml
- `[2026-08-17 03:15 GMT] New policy ideas for the Intelligence Age` — https://openai.com/index/new-policy-ideas-for-the-intelligence-age (AI policy/regulation; off CK's core AI-agent/infra/investing axis → raw_only mild)

### Docker — supply-chain/CVE security post (raw_only mild)
Source URL: https://www.docker.com/blog/feed/
- `[2026-08-17 13:00 GMT] Make zero CVEs your new default` — https://www.docker.com/blog/make-zero-cves-your-new-default/ (container supply-chain/CVE security → raw_only mild)

### Hacker News — model eval + policy + Claude critique (raw_only mild)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-17 12:09] GPT 5.6 Sol is the best "vision" model OpenAI ever released` — https://blog.roboflow.com/openai-gpt-5-6/ (GPT-5.6 Sol vision eval; model-eval mild → raw_only)
- `[2026-08-17 01:59] On A.I. regulation and messaging` — https://twitter.com/DarioAmodei/status/2088758816376807762 (Dario Amodei AI-regulation; policy mild → raw_only)
- `[2026-08-16 21:53] Anthropic's 'watermark' text adulteration in Claude is a perversion of writing` — https://daringfireball.net/2026/08/anthropics_watermark_text_adulteration_in_claude_is_a_perversion_of_writing (Claude watermarking critique; Claude axis mild → raw_only)
- Already captured 11:00: `Qwen 3.8 27B...`, `Claude: System Prompts`.
- Off-axis discard: `Buyer cancels showing after Deflock shows two cameras utilized by the HOA`, `How Go detects struct copies with sync.noCopy`, `Show HN: Desktopcolors.com`, `Mexico Crackdown on Coastal Development`, `The Mysterious Syndrome Destroying Endurance Athletes`; `RISC-V ... should have known better` + `Reticulum – Decentralized Mesh Network` (repeats).

## 2) Reinforcement — unchanged vs the 11:00 baseline (raw_only)
- **GitHub changelog**: top still 08-14 OAuth-redirect-URIs (discard) + Grok 4.6 in Copilot + Copilot weekly-releases-Aug-10; Gemini 3.7 Flash in Copilot (08-13), Agent Plugins 1.0 (08-12). Unchanged.
- **AWS What's New**: top still 08-14 RDS-Oracle-APEX + SES-deeplinking (discard housekeeping) + Billing Managed Dashboards; Client VPN CLI, Claude Opus 5 GovCloud, OpenAI Daybreak on Bedrock (08-13). Unchanged.
- **Hugging Face**: top still 08-14 State of Open Models Summer 2026 + 08-13 Strands Agents/LeRobot/Storage Buckets + ICML 2,200-paper reproduction. Unchanged.
- **Vercel**: top still 08-14 ECH on CDN + 08-13 Grok-Build harness adapter + Exa Marketplace + GLM 5.2 + Gemini 3.7 Flash 50%-off. AI Gateway Production Index — no new edition. Unchanged.
- **Cloudflare**: top still 08-14 MCP-traffic detection/security + secure-internal-vibe-coded-apps + Total-eclipse traffic + Cert Transparency Monitoring GA (08-13). Unchanged.
- **Meta Eng**: top still 08-12 13:00 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Google Research**: top still 08-12 09:51 parametric-factuality recall + 08-11 AMIE audio-visual. Unchanged.
- **Google blog**: only new row is the 08-17 Gemini+Pixel football partnership (sports/consumer → discard); AI rows unchanged (08-13 Gemini 3.7 Flash). Reinforcement.
- **Simon Willison**: newest rows still 08-16 (Markdown SVG upgrades / Qwen 3.8 27B / Quoting Dario Amodei), all captured 11:00. No new row since. Unchanged.

## Filtering notes
- Excluded as noise/off-axis: HN civic/retro/hardware (Deflock HOA cameras, Go sync.noCopy, Desktopcolors, Mexico coastal, endurance-athletes, RISC-V embedded repeat, Reticulum mesh repeat); Google Gemini+Pixel football (sports/consumer); off-axis trending repos (MoneyPrinterTurbo, public-apis, yt-dlp, immich, Motrix, career-ops, Scrapling, colleague-skill, mlx-audio).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-17 22:00 new-target pass. **More movement than the 11:00 pass but still reinforcement-only at the durable layer:** GitHub Trending rotated into a genuinely-new agentic-security + agent-skills cluster (Anthropic-Cybersecurity-Skills, official anthropics/defending-code-reference-harness, hexstrike-ai MCP, last30days-skill, OpenViking agent-context-DB) plus investing repos (nautilus_trader, qlib) and llmfit — the strongest new signal, flagged WATCH/manual_review, but single-surface (GitHub Trending only) so it stays `raw_only` reinforcing the existing agentic-security + Claude/agent-skills axis with no new cross-surface durable branch. Smaller new rows (OpenAI policy post, Docker zero-CVE, HN GPT-5.6 Sol vision eval + Dario Amodei AI-regulation + daringfireball Claude-watermark critique) each reinforce an existing lane. The recurring durable series (Vercel AI Gateway Production Index) had no new edition today. Anthropic RSS 404 (availability fact). Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages (incl. `ai-infra-operating-economics.md`) left unchanged.
