---
title: Interest signal collection — 22:00 new-target run (2026-07-14, live)
created: 2026-07-14
type: raw-transcript
captured_at: 2026-07-14T22:20:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass (genuine on-time run). Saved as `-live` because the file
  interest-signal-collection-22-00-2026-07-14.md (mtime 00:11) is the DELAYED 07-13 22:00
  capture — it carries today's datestamp because it fired just after midnight, and the
  07-14 11:00 run already used it as its prior-baseline-by-mtime. This live run baselines
  against the 2026-07-14 11:00 new-target run plus concepts/ai-infra-operating-economics.md.
  Genuinely-new dated rows since the 07-14 11:00 snapshot: (1) Docker "AI Engineer World's
  Fair 2026: The Runtime Is Where Agent Trust Is Won" (07-14) — single-surface conference
  recap reinforcing the existing agent-runtime/isolation lane ("Why AI Agents Need
  Isolation" 07-01 + "Data for Agents"); on-axis but no new durable branch → raw_only.
  (2) OpenAI academy Codex-for-work guides "how data science teams / sales teams use Codex"
  (07-14) — academy/marketing content, low durability → raw_only. (3) Google Gemini-in-
  Chrome UK expansion / Pelé lost-goal / Gemini SE Asia (07-14) — product/PR noise. GitHub
  Trending rotated in more skills-lane repos (mattpocock/skills, google/skills,
  kangarooking/cangjie-skill, PrimeIntellect-ai/verifiers, cactus-compute/needle,
  chenyme/grok2api) — reinforces agent/skills/AI-investing lanes, single-surface rotation.
  Every other feed (github-changelog, aws, hf, meta, vercel, cloudflare, simonwillison)
  newest unchanged from the 07-14 11:00 baseline. Net: reinforcement-only. Durable action =
  this raw transcript + Honcho/log audit; index.md and concept pages left unchanged.
  Anthropic RSS 404 (availability fact).
routing:
  - {surface: docker-blog, route: raw_only, note: "NEW 07-14 'AI Engineer World's Fair 2026: The Runtime Is Where Agent Trust Is Won' — single-surface conference recap reinforcing the agent-runtime/isolation lane (Why AI Agents Need Isolation 07-01, Data for Agents); on-axis but no new durable branch"}
  - {surface: openai-news, route: raw_only, note: "NEW 07-14 academy Codex-for-work guides (how data science teams / sales teams use Codex) — academy/marketing, low durability; index 07-10 Deutsche Telekom still newest non-academy row"}
  - {surface: google, route: raw_only, note: "NEW 07-14 Gemini-in-Chrome UK expansion / Pelé lost-goal reconstruction / Gemini SE Asia report — product/PR noise, no on-axis durable row"}
  - {surface: github-trending, route: raw_only, note: "Rotated in skills-lane repos (mattpocock/skills, google/skills, kangarooking/cangjie-skill), PrimeIntellect-ai/verifiers (RL/agent training), cactus-compute/needle, chenyme/grok2api — reinforces agent/skills/AI-investing lanes, single-surface rotation, no new durable branch"}
  - {surface: github-changelog, route: raw_only, note: "Newest still 07-13 Code Quality license estimate / SSO-Orgs split (absorbed 11:00) — no new row"}
  - {surface: aws-whatsnew, route: raw_only, note: "Newest still 07-13 GPT-5.6 GA on Bedrock / DocumentDB Agent Toolkit skill / SageMaker JumpStart adds (absorbed 11:00) — no new row"}
  - {surface: vercel, route: raw_only, note: "Newest still 07-14 Chat SDK X adapter + 07-13 AI Gateway Production Index (append_existing already applied 11:00) — no new row"}
  - {surface: hf-blog, route: raw_only, note: "Newest still 07-10 Profiling in PyTorch Pt3 — no new row"}
  - {surface: meta-eng, route: raw_only, note: "Newest still 07-13 Meta Ads kernel-scheduler (captured 11:00) — no new row"}
  - {surface: cloudflare, route: raw_only, note: "Newest still 07-13 Introducing Precursor (captured 07-14 delayed-22:00, raw_only) — no new row"}
  - {surface: simonwillison, route: raw_only, note: "Newest still 07-14 uvx-in-Actions / 07-13 DOOMQL / datasette code-frequency (captured 11:00) — no new row"}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (availability fact); no product/eng launch surfaced via feed"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-07-14.md
  - raw/transcripts/interest-signal-collection-22-00-2026-07-14.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-07-14, live)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-07-14 (captured 22:20 KST)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python script `/tmp/newtarget_fetch_2200_0714_live.py` writing to `.cache/newtarget-2026-07-14-2200-live/`, then parsed). Live Chrome CDP not used for this track (CDP was down 07-11..07-14; not needed for RSS/HTTP).
- Feeds fetched OK (HTTP 200): OpenAI (news/rss.xml), github.blog changelog, AWS What's New (RSS), Hugging Face, Meta Engineering (RSS), Vercel (atom), Cloudflare (RSS), Docker (RSS), Simon Willison (Atom), Google (RSS), GitHub Trending (daily + python). Anthropic RSS returned 404 (`/rss.xml`) — availability fact, not negative evidence.
- **Filename provenance:** `interest-signal-collection-22-00-2026-07-14.md` (mtime 00:11) is the DELAYED 07-13 22:00 capture (fired just after midnight, stamped with today's date); the 07-14 11:00 run already baselined on it. This genuine on-time 22:00 run is therefore saved as `...-22-00-2026-07-14-live.md` to avoid clobbering that baseline.
- Most recent prior new-target baseline: same-track **2026-07-14 11:00** (mtime 11:04). Novelty judged primarily against that.

## Novelty summary
**Reinforcement-only.** Three genuinely-new dated rows appeared since the 07-14 11:00 snapshot, all single-surface reinforcement of existing lanes: (1) **Docker — "AI Engineer World's Fair 2026: The Runtime Is Where Agent Trust Is Won" (07-14)** — conference recap reinforcing the agent-runtime/isolation lane; (2) OpenAI academy Codex-for-work adoption guides (07-14, marketing/low durability); (3) Google Gemini-in-Chrome UK expansion + PR noise (07-14). GitHub Trending rotated in more skills-lane / agent-training repos. Every other feed's newest item is unchanged from the 11:00 baseline. No new durable branch → `raw_only` across the board; `index.md` and concept pages unchanged.

## 1) New dated rows since the 07-14 11:00 baseline (raw_only)

### Strongest — on-axis reinforcement
- **Docker** — `[2026-07-14] AI Engineer World's Fair 2026: The Runtime Is Where Agent Trust Is Won` — https://www.docker.com/blog/ai-engineer-worlds-fair-2026-the-runtime-is-where-agent-trust-is-won/
  - og:description (verbatim): "We spent the week at AI Engineer World's Fair in San Francisco, on stage and on the floor. Here's what we heard, and where we think it lands for anyone building with agents."
  - Why it matters: reinforces Docker's existing agent-runtime/isolation lane ("Why AI Agents Need Isolation" 07-01 + "Your Laptop Is the New Production Environment" 07-08) — the "runtime is where agent trust is won" framing is the same seam CK already tracks. Single-surface conference recap, not a new durable branch → `raw_only`.

### Lower durability
- **OpenAI academy** — `[2026-07-14] How data science teams use Codex` — https://openai.com/academy/codex-for-work/how-data-science-teams-use-codex ; `[2026-07-14] How sales teams use Codex` — https://openai.com/academy/codex-for-work/how-sales-teams-use-codex (Codex-for-work adoption guides; academy/marketing content, low durability). Index newest non-academy row still 07-10 Deutsche Telekom (baselined).
- **Google blog** — `[2026-07-14] We're expanding Gemini in Chrome to users in the U.K.` — https://blog.google/products-and-platforms/products/chrome/were-expanding-gemini-in-chrome-to-users-in-the-uk/ ; `[2026-07-14] Reconstructing Pelé's "lost" goal` (DeepMind) — https://blog.google/innovation-and-ai/models-and-research/google-deepmind/reconstructing-peles-lost-goal/ ; `[2026-07-14] How Gemini is speaking the language of Southeast Asia` — https://blog.google/innovation-and-ai/products/gemini-app/gemini-southeast-asia-report-2026/ (product/PR/regional expansion — noise, no on-axis durable row).

## 2) RSS/Atom feeds re-checked — no new rows past the 07-14 11:00 baseline
- **GitHub changelog** — newest still `[2026-07-13] GitHub Code Quality license estimate in public preview` + `Separate SSO and Organizations pages in Settings` (both captured 11:00). No new row.
- **AWS What's New** — newest still `[2026-07-13] OpenAI GPT-5.6 Sol/Terra/Luna GA on Amazon Bedrock` / `Amazon DocumentDB as a skill in the Agent Toolkit for AWS` / SageMaker JumpStart Gemma-4-E2B/Qwen3/privacy-filter (all captured 11:00). No new row.
- **Vercel** — newest still `[2026-07-14] Chat SDK adds X adapter support` + `[2026-07-13] AI Gateway Production Index — July 2026` (the latter's `append_existing` already applied at 11:00). No new row.
- **Hugging Face** — newest still `[2026-07-10] Profiling in PyTorch (Part 3)` — https://huggingface.co/blog/torch-attention-profile (baselined). No new row.
- **Meta Engineering** — newest still `[2026-07-13] Modernizing the Meta Ads Service With an Open-Source Kernel Scheduler` (captured 11:00). No new row.
- **Cloudflare** — newest still `[2026-07-13] Introducing Precursor` — https://blog.cloudflare.com/introducing-precursor/ (captured in the delayed 22:00 file, raw_only). No new row.
- **Simon Willison** — newest still `[2026-07-14] Using uvx in GitHub Actions in a cache-friendly way` / `[2026-07-13] DOOMQL` / `datasette code-frequency` (all captured 11:00). No new row.
- **Anthropic** — RSS 404 (`/rss.xml`) — availability fact, no feed-surfaced launch.

## 3) GitHub Trending (daily + python) — copied top rows
Source URL: https://github.com/trending , https://github.com/trending/python?since=daily
- Visible daily rows: `Shubhamsaboo/awesome-llm-apps`, `mattpocock/skills`, `Dicklesworthstone/destructive_command_guard`, `OpenCut-app/OpenCut`, `virattt/ai-hedge-fund`, `Nutlope/hallmark`, `HKUDS/Vibe-Trading`, `Raphire/Win11Debloat`, `penpot/penpot`, `AIEraDev/Clypra`, `chenyme/grok2api`, `Graphify-Labs/graphify`, `HenryNdubuaku/maths-cs-ai-compendium`.
- Visible python rows: `Shubhamsaboo/awesome-llm-apps`, `virattt/ai-hedge-fund`, `HKUDS/Vibe-Trading`, `cactus-compute/needle`, `github/spec-kit`, `PrimeIntellect-ai/verifiers`, `Arindam200/awesome-ai-apps`, `3b1b/manim`, `Vexa-ai/vexa`, `p-e-w/heretic`, `PrefectHQ/prefect`, `smicallef/spiderfoot`, `microsoft/markitdown`, `kangarooking/cangjie-skill`, `PostHog/posthog`, `google/skills`.
- Newly-visible-but-in-lane: `mattpocock/skills` / `google/skills` / `kangarooking/cangjie-skill` (claude-skills lane), `PrimeIntellect-ai/verifiers` (RL/agent-training), `cactus-compute/needle` (agent/LLM tooling), `chenyme/grok2api` (model API proxy), `microsoft/markitdown` (doc-to-markdown for LLMs), `Arindam200/awesome-ai-apps` (agent apps). All reinforce agent-framework / claude-skills / AI-investing lanes the wiki already tracks — single-surface Trending rotation, no new durable branch.
- Repeating prior-baseline on-axis rows: `awesome-llm-apps`, `ai-hedge-fund`, `Vibe-Trading` (AI-investing), `destructive_command_guard` (agent command-safety), `spec-kit` (spec-driven dev), `heretic` (LLM tooling), `Vexa-ai/vexa` (meeting-agent).
- Off-axis / generic rows excluded: `OpenCut-app/OpenCut`, `Nutlope/hallmark`, `Raphire/Win11Debloat`, `penpot/penpot`, `AIEraDev/Clypra`, `Graphify-Labs/graphify`, `HenryNdubuaku/maths-cs-ai-compendium`, `par274/sharpemu`, `3b1b/manim`, `smicallef/spiderfoot`, `PrefectHQ/prefect`, `PostHog/posthog`, `NVlabs/FoundationPose`, `EbookFoundation/free-programming-books`.

## Filtering notes
- Excluded as noise: OpenAI academy/marketing PR beyond title capture, Google product-UX/regional/DeepMind-sports PR, AWS region/instance-availability rows, off-axis / generic trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-07-14 22:00 new-target pass (genuine on-time run, saved `-live` because the same-datestamp `22-00` file is the delayed 07-13 capture). **Reinforcement-only:** three genuinely-new dated rows since the 07-14 11:00 baseline — Docker "AI Engineer World's Fair 2026: The Runtime Is Where Agent Trust Is Won" (07-14, agent-runtime/isolation lane reinforcement), OpenAI academy Codex-for-work adoption guides (07-14, marketing), and Google Gemini-in-Chrome UK expansion + PR noise (07-14) — all single-surface, no new durable branch → `raw_only`. GitHub Trending rotated in more skills-lane / agent-training repos, still single-surface rotation. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry; `index.md` and all concept pages left unchanged. Anthropic RSS 404 (availability fact).
