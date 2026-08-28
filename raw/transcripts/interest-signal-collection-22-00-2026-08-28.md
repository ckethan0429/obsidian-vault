---
title: Interest signal collection — 22:00 new-target run (2026-08-28)
created: 2026-08-28
type: raw-transcript
captured_at: 2026-08-28T22:05:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time (~22:05 KST). Idempotency clear: no interest-signal-collection-22-00-2026-08-28
  raw existed before this run. Baseline for the new-target track = the same-day 11:00 new-target transcript
  interest-signal-collection-11-00-2026-08-28.md (~11h ago) + concepts/ai-infra-operating-economics.md +
  concepts/managed-agents-practical-summary.md + concepts/honcho.md. Collection via public RSS/Atom + HTML fetch
  (stdlib Python /tmp/nt_fetch_2200_0828.py -> .cache/newtarget-2026-08-28-2200/, parsed with
  /tmp/nt_parse_2200_0828.py + GitHub Trending /tmp/nt_trend_2200_0828.py). All feeds HTTP 200 except Anthropic
  RSS 404 (availability fact, consistent 08-02..08-28). Result: REINFORCEMENT-ONLY at the durable layer — no new
  durable delta. The genuinely-new-since-11:00 rows all slot into already-tracked lanes and are single-surface
  raw_only: (1) Cloudflare NEW top (2026-08-28 12:59) "BotBase for Operators: A clearer path to joining
  Cloudflare's directory of bots and agents" (https://blog.cloudflare.com/botbase-for-operators/ — extends the
  Cloudflare bot/agent-management + Bot Preference Sync lane tracked 08-21; strongest new item but single-surface
  -> raw_only); (2) GitHub changelog NEW top (2026-08-28 11:37) "Upcoming changes to GitHub Copilot policies and
  billing" (https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing —
  mild coding-agent billing/policy -> raw_only); (3) HN new rows — "Pentagon's blacklisting of Anthropic was
  unlawful, US judge rules" (2026-08-28 11:25 — https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/
  — AI-vendor/gov policy, mildly on-axis, single-surface -> raw_only) + "OpenAI: Migrating to HTTPX2"
  (2026-08-28 11:51 — https://github.com/openai/openai-python/blob/main/httpx2.md — mild dev/library -> raw_only);
  (4) GitHub Trending on-axis rotation vs 11:00 — cursor/plugins (Cursor plugin ecosystem, harness/plugin lane),
  ChromeDevTools/chrome-devtools-mcp (MCP + browser CDP, on CK's browser/CDP/MCP axis), livekit/agents,
  rohitg00/ai-engineering-from-scratch, HKUDS/AI-Trader + HKUDS/Vibe-Trading (investing+agents),
  mvanhorn/last30days-skill (claude skill) — single-surface trending rotation -> raw_only. UNCHANGED vs 11:00:
  Vercel (top still 08-28 "Run Claude Managed Agents with Chat SDK"), HuggingFace (multi-vector embeddings top),
  Meta Eng (MTIA 300 + MetaRoCE top), Docker (Minimus->Hardened-Images top), Simon Willison (Breaking Claude Code
  Opus 5 Auto Mode top). discard/off-axis new: OpenAI "Supporting Thailand's next generation of AI startups" (geo),
  Google blog (Expert Intelligence / 250-years-America / travel-in-Search / Demand Gen), Google Research (Earth AI,
  unchanged), HN off-axis (fast volume computation, SubSmith, Warhammer 40k galaxy map, Luanti DMCA, Flatpak/STA,
  antidepressants). Durable action = this raw transcript + a Honcho routing audit + a log.md entry only; index.md
  and all concept pages left unchanged.
routing:
  - {surface: cloudflare, route: raw_only, note: "STRONGEST genuinely-new item. NEW top (2026-08-28 12:59:44 -> raw_only): 'BotBase for Operators: A clearer path to joining Cloudflare's directory of bots and agents' (https://blog.cloudflare.com/botbase-for-operators/ — operator-facing bot/agent directory; extends the Cloudflare bot-management / Bot Preference Sync lane tracked 08-21 + MCP-security 08-14; single-surface -> raw_only). Carry: 08-27 DNS-cache 100TB memory opt (was 11:00's new top, now #2), 08-24 EmDash, 08-21 Bot Preference Sync, 08-20 task-based OAuth consent."}
  - {surface: github-changelog, route: raw_only, note: "NEW top (2026-08-28 11:37:19 -> raw_only, mild): 'Upcoming changes to GitHub Copilot policies and billing' (https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing — coding-agent billing/policy). Carry: 08-27 Copilot code review resolution reasons (11:00's new row), Better label management GA, Actions retention, plugin-marketplace autoUpdate."}
  - {surface: hackernews, route: raw_only, note: "NEW on-axis-ish rows since 11:00, single-surface -> raw_only: 'Pentagon's blacklisting of Anthropic was unlawful, US judge rules' (2026-08-28 11:25 — https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/ — AI-vendor/gov policy), 'OpenAI: Migrating to HTTPX2' (2026-08-28 11:51 — https://github.com/openai/openai-python/blob/main/httpx2.md — mild dev/library migration). Carry from 11:00: Cloudflare DNS-cache (#5), 'Small Models Have Arrived' (https://calv.info/small-models-have-arrived). discard/off-axis: 'Hilariously Fast Volume Computation with the Divergence Theorem', 'Show HN: SubSmith', 'Interactive Warhammer 40k Galaxy Map', 'Luanti removed from Google Play (baseless AI copyright notice)', 'Sovereign Tech Agency invests EUR500k in Flatpak', '507 Mechanical Movements', antidepressant-withdrawal."}
  - {surface: github-trending, route: raw_only, note: "On-axis rotation vs 11:00, single-surface -> raw_only. NEW on-axis repos vs 11:00 list: cursor/plugins (Cursor plugin ecosystem — harness/plugin lane), ChromeDevTools/chrome-devtools-mcp (MCP + browser CDP — directly on CK's browser/CDP/MCP axis), livekit/agents (agents framework), rohitg00/ai-engineering-from-scratch, HKUDS/AI-Trader + HKUDS/Vibe-Trading (investing+agents), mvanhorn/last30days-skill (claude skill), tashfeenahmed/freellmapi. On-axis carry: anthropics/claude-plugins-official, K-Dense-AI/scientific-agent-skills, marin-community/marin, ComposioHQ/awesome-claude-skills, tt-a1i/archify, huggingface/transformers, fla-org/flash-linear-attention, goldmansachs/gs-quant (investing). Off-axis excluded: bilawalsidhu/gods-eye-view, abhigyanpatwari/GitNexus, JetBrains/go-modern-guidelines, calesthio/OpenMontage, abi/screenshot-to-code, freestylefly/awesome-gpt-image-2, tailscale/tailcat, NationalSecurityAgency/ghidra, google/googletest, DietrichGebert/ponytail, music-assistant/server, MakazhanAlpamys/Soup, Graphify-Labs/graphify, microsoft/hve-core."}
  - {surface: vercel, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-28 'Run Claude Managed Agents with Chat SDK' + 08-27 'Cursor in the AI SDK harness layer' + workflow-as-code blog + 'Ling 3.0 Flash Fin' gateway add + 08-26 AI Gateway batch (Muse Image / Gemini 3.5 Transcribe / Qwen 3.8 Flash / GLM 5.3 Flash) + Security Dashboard GA. Reinforcement."}
  - {surface: simonwillison, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-27 'Breaking Claude Code Opus 5 Auto Mode' (https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/) + 08-26 Qwen3.8-Flash-Next, Quoting Paul Dix, 08-24 llm-anthropic 0.27. Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00 top (Cosmos3-Edge/Nano/Super + Muse-Glimmer-30B/Qwen-3.8-27B on SageMaker JumpStart 08-27; Redshift Agent Toolkit; Bedrock AgentCore two new regions). No genuinely-new on-axis row since 11:00 -> raw_only. Routine-infra still discard (Redshift KDS 10MiB, EC2 X8i regions, Elastic DR, FSx/ONTAP backup, EVS metal, Connect analytics)."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-26 multi-vector embeddings (https://huggingface.co/blog/train-multi-vector-encoder) + 08-25 Granite 4.2 + Quantization-Aware Healing + Gradio Workflows. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-24 MTIA 300 + MetaRoCE. Reinforcement."}
  - {surface: docker, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-25 Moving-from-Minimus-to-Hardened-Images + 08-24 MinIO-EOL + 08-21 Running-AI-agents-in-GHA-Sandboxes. Reinforcement."}
  - {surface: openai-news, route: discard, note: "NEW top geo/off-axis -> discard: 'Supporting Thailand's next generation of AI startups' (2026-08-28 02:00 — https://openai.com/index/supporting-next-generation-ai-startups-thailand). Carry: 08-27 edu/Brazil, 08-26 ChatGPT-for-Teachers, HF-incident, loveholidays-Codex. No new on-axis row above the bar."}
  - {surface: google-blog, route: discard, note: "NEW rows consumer/off-axis -> discard: 'Expert Intelligence' (Gemini notebook, 08-27 19:30), '250 years of America', '3 new ways to plan and book travel in Search', Demand Gen Drop. Mild dev carry: 'Gemini Omni 1.1 Flash lets you build with more control' (already noted 11:00)."}
  - {surface: google-research, route: discard, note: "UNCHANGED vs 11:00. Top still 08-27 'Planetary prediction engine / Earth AI' (off-axis) + GlucoFM (health). Reinforcement/discard."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml 404); availability fact, consistent with 08-02..08-28."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-28.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-28)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-28 (captured ~22:05 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0828.py` → `.cache/newtarget-2026-08-28-2200/`, parsed with `/tmp/nt_parse_2200_0828.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0828.py`). No live Chrome CDP needed for this RSS/HTML track (CDP was UP but not required here).
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-28).
- Baseline: the same-day **11:00 new-target transcript** (~11h old) + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer — no new durable delta.** The genuinely-new-since-11:00 rows all slot into already-tracked lanes and are single-surface `raw_only`. Strongest new item = **Cloudflare "BotBase for Operators"** (operator-facing bot/agent directory — extends the Cloudflare bot-management / Bot Preference Sync lane). Also `raw_only`: GitHub "Copilot policies and billing" changes; HN "Pentagon's blacklisting of Anthropic ruled unlawful" + "OpenAI: Migrating to HTTPX2"; GitHub Trending on-axis rotation (cursor/plugins, ChromeDevTools/chrome-devtools-mcp, livekit/agents, HKUDS/AI-Trader). Vercel / Simon Willison / HuggingFace / Meta-Eng / Docker / AWS tops all **unchanged vs 11:00**. **No durable page change.**

## 1) Genuinely-new-since-11:00 rows (all raw_only)

### Cloudflare — BotBase for Operators (raw_only, strongest new item)
Source URL: https://blog.cloudflare.com/rss/
- `[2026-08-28 12:59:44] BotBase for Operators: A clearer path to joining Cloudflare's directory of bots and agents` — https://blog.cloudflare.com/botbase-for-operators/ (operator-facing bot/agent directory; extends the Cloudflare bot-management / Bot Preference Sync 08-21 + MCP-security 08-14 lane, single-surface)

### GitHub changelog — Copilot policies and billing (raw_only, mild)
Source URL: https://github.blog/changelog/feed/
- `[2026-08-28 11:37:19] Upcoming changes to GitHub Copilot policies and billing` — https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing (coding-agent billing/policy)

### Hacker News — Anthropic legal ruling + OpenAI library migration (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-28 11:25:30] Pentagon's blacklisting of Anthropic was unlawful, US judge rules` — https://www.reuters.com/legal/government/us-judge-blocks-pentagons-anthropic-blacklisting-2026-08-28/ (AI-vendor/gov policy, mildly on-axis, single-surface)
- `[2026-08-28 11:51:20] OpenAI: Migrating to HTTPX2` — https://github.com/openai/openai-python/blob/main/httpx2.md (mild dev/library migration)

### GitHub Trending — on-axis rotation vs 11:00 (raw_only)
Source URL: https://github.com/trending?since=daily (+ /python)
- `cursor/plugins` — Cursor plugin ecosystem (harness/plugin lane)
- `ChromeDevTools/chrome-devtools-mcp` — MCP + browser CDP (directly on CK's browser/CDP/MCP axis)
- `livekit/agents` — agents framework
- `rohitg00/ai-engineering-from-scratch` — AI-engineering learning repo
- `HKUDS/AI-Trader` + `HKUDS/Vibe-Trading` — investing + agents
- `mvanhorn/last30days-skill` — claude skill
- `tashfeenahmed/freellmapi` — free LLM API aggregator

## 2) Reinforcement — no genuinely-new on-axis rows vs the 11:00 baseline (raw_only)
- **Vercel**: top still 08-28 `Run Claude Managed Agents with Chat SDK` + 08-27 `Cursor in the AI SDK harness layer` + workflow-as-code blog + `Ling 3.0 Flash Fin` gateway add + 08-26 AI Gateway batch. Unchanged.
- **Simon Willison**: top still 08-27 `Breaking Claude Code Opus 5 Auto Mode` + 08-26 Qwen3.8-Flash-Next, Quoting Paul Dix. Unchanged.
- **AWS What's New**: top still 08-27 SageMaker JumpStart adds (Cosmos3 + Muse-Glimmer-30B/Qwen-3.8-27B) + Redshift Agent Toolkit + Bedrock AgentCore regions. Unchanged.
- **Hugging Face**: top still 08-26 multi-vector embeddings + 08-25 Granite 4.2 + Quantization-Aware Healing. Unchanged.
- **Meta Engineering**: top still 08-24 MTIA 300 + MetaRoCE. Unchanged.
- **Docker**: top still 08-25 Moving-from-Minimus-to-Hardened-Images + 08-24 MinIO-EOL. Unchanged.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-28).

## 3) discard — off-axis new rows
- **OpenAI**: NEW top `Supporting Thailand's next generation of AI startups` (https://openai.com/index/supporting-next-generation-ai-startups-thailand — geo, off-axis).
- **Google blog**: NEW `Expert Intelligence` (Gemini notebook), `Celebrating 250 years of America`, `3 new ways to plan and book travel in Search`, `Demand Gen Drop` — consumer/off-axis.
- **Google Research**: top still `Planetary prediction engine / Earth AI` (off-axis) + GlucoFM (health). Unchanged.
- **HN off-axis**: `Hilariously Fast Volume Computation with the Divergence Theorem`, `Show HN: SubSmith`, `Interactive Warhammer 40k Galaxy Map`, `Luanti removed from Google Play (baseless AI copyright notice)`, `Sovereign Tech Agency invests €500k in Flatpak`, `507 Mechanical Movements`, antidepressant-withdrawal.

## Filtering notes
- Excluded as noise/off-axis: AWS routine-infra batch (Redshift KDS 10MiB, EC2 X8i regions, Elastic DR, FSx/ONTAP backup, EVS metal, Connect analytics); Google blog/Research consumer+earth-AI rows; OpenAI geo; HN off-axis; off-axis trending repos (gods-eye-view, GitNexus, go-modern-guidelines, OpenMontage, screenshot-to-code, awesome-gpt-image-2, tailcat, ghidra, googletest, ponytail, music-assistant, Soup, graphify, hve-core).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-28 22:00 new-target pass. **Reinforcement-only at the durable layer.** The genuinely-new-since-11:00 rows (Cloudflare BotBase for Operators; GitHub Copilot policies/billing; HN Pentagon/Anthropic ruling + OpenAI HTTPX2 migration; GitHub Trending on-axis rotation incl. cursor/plugins + ChromeDevTools/chrome-devtools-mcp + livekit/agents + HKUDS/AI-Trader) all slot into already-tracked lanes → single-surface `raw_only`. Vercel/Simon-Willison/HuggingFace/Meta-Eng/Docker/AWS tops unchanged vs 11:00. Off-axis new rows (OpenAI Thailand, Google consumer, HN misc) → `discard`. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.
