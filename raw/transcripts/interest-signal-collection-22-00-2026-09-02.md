---
title: Interest signal collection — 22:00 new-target run (2026-09-02)
created: 2026-09-02
type: raw-transcript
captured_at: 2026-09-02T22:10:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time (~22:10 KST). Idempotency clear: no interest-signal-collection-22-00-2026-09-02
  raw existed before this run (same-day 08:00 social + 11:00 new-target + 15:00 curation + 19:00 social present).
  Baseline for the new-target track = the most-recent new-target transcript
  interest-signal-collection-11-00-2026-09-02.md (~11h ago, captured ~11:10 KST) + concepts/ai-infra-operating-economics.md
  + concepts/managed-agents-practical-summary.md + concepts/honcho.md. Collection via public RSS/Atom + HTML fetch
  (stdlib Python /tmp/nt_fetch_2200_0902.py -> .cache/newtarget-2026-09-02-2200/, parsed with /tmp/nt_parse_2200_0902.py
  + GitHub Trending grep). All feeds HTTP 200 except Anthropic RSS 404 (availability fact, consistent 08-02..09-02).
  Result: REINFORCEMENT-ONLY at the durable layer — no new durable delta. The genuinely-new rows since 11:00 all slot
  into already-tracked lanes and are single-surface raw_only:
  (1) STRONGEST — Docker NEW top "Below the Harness: Governing a Multi-Model, Multi-Harness World" (2026-09-02 13:00 —
  https://www.docker.com/blog/below-the-harness-governing-a-multi-model-multi-harness-world/ — confused-deputy trust
  model for AI agents; multi-model/multi-harness governance; reinforces the Docker agent-security series
  (Secure-by-default 08-31, 17600-Actions 08-18, coding-agent horror stories 08-18) + managed-agents lane).
  Single-surface -> raw_only. (2) Vercel NEW "Qwen 3.8 Max 0902 now available on AI Gateway"
  (https://vercel.com/changelog/qwen-3-8-max-0902-now-available-on-ai-gateway — model-serving/AI-Gateway add) -> raw_only.
  (3) Simon Willison NEW "Quoting Rick Brewster" (09-02 05:50 — https://simonwillison.net/2026/Sep/2/rick-brewster/ —
  Paint.NET clean-room Direct2D-on-WINE rewrite "vibe coded" by Claude; agent-coding anecdote) + "datasette-mcp 0.2"
  (09-01 15:30 — https://simonwillison.net/2026/Sep/1/datasette-mcp/ — MCP plugin release) -> raw_only.
  (4) HN rotated: "Quasar 438B: Europe's Leading AI Model" (https://multiversecomputing.com/resources/introducing-quasar-438b-europe-s-leading-ai-model
  — new EU model, mild) + "The Emergent Symbolic Structure of Artificial Neural Networks" (arxiv research, mild) -> raw_only,
  rest off-axis discard. (5) Google blog NEW "Our new partnership brings long-duration energy storage to West Virginia"
  (09-02 12:00 — https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/west-virginia-long-duration-energy-storage/
  — datacenter/grid energy infra, mild) -> raw_only; MrBeast+Gemini consumer -> discard. (6) GitHub Trending continues the
  SAME skills/MCP/agent-tooling cluster with new-but-same-axis rows: ChromeDevTools/chrome-devtools-mcp (MCP/CDP tooling —
  on CK's browser-CDP/MCP theme), NousResearch/hermes-agent (Hermes itself), mattpocock/skills (skills) -> raw_only.
  UNCHANGED vs 11:00: OpenAI (AI-native-workflows/Path-to-Astra top carry), AWS (Amazon Quick custom-apps top; Claude Fable 5.1
  carry), Cloudflare (cache-transcoding carry), HuggingFace (BenchMIRT + WebGPU kernels carry), Meta-Eng (MTIA300/MetaRoCE).
  discard/off-axis: Google MrBeast/Gemini + Android Drop + Google Pics + methane Earth-AI; AWS routine-infra batch; HN
  Commodore-64/telescope/C++-move/text-editor/FBI-licenses/battery/Sweden-cable. Anthropic RSS 404 (availability fact).
  Durable action = this raw transcript + a Honcho routing audit + a log.md entry only; index.md and all concept pages left unchanged.
routing:
  - {surface: docker, route: raw_only, note: "STRONGEST genuinely-new. NEW top (09-02 13:00 -> raw_only): 'Below the Harness: Governing a Multi-Model, Multi-Harness World' (https://www.docker.com/blog/below-the-harness-governing-a-multi-model-multi-harness-world/) — frames every AI agent as Norm Hardy's 1988 'confused deputy' (acts with its permissions instead of yours) and argues a multi-model/multi-harness world needs a new trust model. Reinforces the Docker agent-security series (Secure-by-default 08-31, 17,600 Actions / Agent Security Is a Systems Problem 08-18, Coding Agent Horror Stories 08-18) + the managed-agents/harness-governance lane. Single-surface, substantive but a continuation of an already-tracked axis -> raw_only (flagged strongest; day stays reinforcement-only). Prior top 'Secure by default is your only way forward' (08-31) now carry."}
  - {surface: vercel, route: raw_only, note: "NEW since 11:00 fluid-compute top: 'Qwen 3.8 Max 0902 now available on AI Gateway' (09-02 00:00 — https://vercel.com/changelog/qwen-3-8-max-0902-now-available-on-ai-gateway — model-serving/AI-Gateway add) -> raw_only. 'Compute that takes any shape' fluid compute + 'Claude Fable 5.1 on AI Gateway' + 'AWS PrivateLink' now carry from 11:00."}
  - {surface: simonwillison, route: raw_only, note: "NEW tops since 11:00: 'Quoting Rick Brewster' (09-02 05:50 — https://simonwillison.net/2026/Sep/2/rick-brewster/ — Paint.NET now ships a from-scratch clean-room reverse-engineered Direct2D-on-WINE rewrite 'vibe coded' with Claude; agent-coding capability anecdote) + 'datasette-mcp 0.2' (09-01 15:30 — https://simonwillison.net/2026/Sep/1/datasette-mcp/ — MCP plugin release, rows-as-objects for weaker models, depends on mcp>=2.1.1). Both single-surface -> raw_only. Prior 'Claude Fable 5.1 pelican' / 'Codex bundles LibreOffice' / 'Python 3.15 rc2' now carry."}
  - {surface: hackernews, route: raw_only, note: "Frontpage ROTATED. On-axis raw_only: (1) 'Quasar 438B: Europe's Leading AI Model' (09-02 10:02 — https://multiversecomputing.com/resources/introducing-quasar-438b-europe-s-leading-ai-model — new EU frontier model claim, single-surface, mild); (2) 'The Emergent Symbolic Structure of Artificial Neural Networks' (09-02 04:15 — https://arxiv.org/abs/2608.29530 — interpretability research, mild); 'How accurate have Ed Zitron's AI skeptic predictions been?' (https://danluu.com/zitron/) now carry from 11:00. discard/off-axis: 'Commodore 64 released September 1, 1982', 'A Small Telescope That Surprised Me', 'Move in C++ without a std:move', 'Fine, I'll build my own text editor', 'FBI Probes Service Selling 153M+ Drivers Licenses', 'Open Battery Information', 'Sweden pauses Denmark power cable', 'You Know Who Hates AI? Insurance Claims Adjusters'."}
  - {surface: google-blog, route: raw_only, note: "NEW (09-02) mild-on-axis: 'Our new partnership brings long-duration energy storage to West Virginia' (09-02 12:00 — https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/west-virginia-long-duration-energy-storage/ — Google + MN8/Eos long-duration storage on the PJM grid; datacenter/grid energy infra, mild) -> raw_only. discard consumer/off-axis: 'MrBeast partners with Gemini' (09-02 13:00), 'The latest AI news we announced in August 2026' (roundup), 'September Android Drop', 'Try Google Pics'. Prior 'agentic video understanding with Gemini' (09-01) now carry."}
  - {surface: github-trending, route: raw_only, note: "Same skills/MCP/agent-tooling cluster continues; new-but-same-axis rows vs 11:00 -> raw_only: ChromeDevTools/chrome-devtools-mcp (MCP server for Chrome DevTools — on CK's browser-CDP/MCP theme), NousResearch/hermes-agent (Hermes agent itself), mattpocock/skills (agent skills). On-axis carry: Gitlawb/openclaude, Imbad0202/academic-research-skills, firecrawl/pdf-inspector, google-research/timesfm. No genuinely-new DURABLE on-axis branch (skills/MCP/agent-tooling axis already tracked). Off-axis excluded: DietrichGebert/ponytail, JuliusBrussee/caveman, affaan-m/ECC, blader/humanizer, fmtlib/fmt, pacifio/atlas, protocolbuffers/protobuf, sngyai/Sequoia-X, superlinked/sie, vercel-labs/portless, zyronon/TypeWords."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top four still 09-01: 'How AI-native companies turn workflows into operating capability' (https://openai.com/index/ai-native-company-workflows), 'Path to Astra' (https://openai.com/index/path-to-astra), EHR-to-ChatGPT, Gilbert+Tobin. No new post since 11:00. Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED on-axis vs 11:00. Top 'Amazon Quick now lets you build custom apps with natural language' (09-01 21:37 — https://aws.amazon.com/about-aws/whats-new/2026/09/amazon-quick-custom-apps-natural-language/) + 'Claude Fable 5.1 now available on AWS' both carry. No new on-axis row since 11:00. Routine-infra discard: Deadline Cloud job bundles, CloudWatch DB Insights self-managed PostgreSQL, Kinesis dry run, Backup >1000 S3, Connect compact dashboards, MWAA 3.3.1, alarm warm-up, RDS Custom, DocumentDB 8.0."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED on-axis vs 11:00. New top 'Enterprise Live Migrations GHES->ghe.com GA' (09-01 22:24 — routine). 'Copilot code review can now approve pull requests' (https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests) + 'Set expiration date for user budgets' + 'Claude Fable 5.1 GA in Copilot' all carry. Copilot-lane reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 09-01 12:59 'How we could save petabytes of cache storage with Zstandard and Pingora' (https://blog.cloudflare.com/cache-transcoding/) + Adaptive Intelligence 08-31. No new post since. Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 09-01 'BenchMIRT' + 'Introducing @huggingface/kernels: 200+ WebGPU Kernels for Local AI' (https://huggingface.co/blog/webgpu-kernels). No new post since. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-24 MetaRoCE + MTIA 300. No new post since. Reinforcement."}
  - {surface: google-research, route: discard, note: "UNCHANGED vs 11:00. Top still 09-01 'Mapping global methane emissions from space with deep learning' (Earth-AI/climate, off-axis). Prior TimesFM-3 (08-31) carry."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml 404); availability fact, consistent with 08-02..09-02."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-09-02.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-09-02)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-09-02 (captured ~22:10 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0902.py` → `.cache/newtarget-2026-09-02-2200/`, parsed with `/tmp/nt_parse_2200_0902.py` + GitHub Trending grep). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml`) — availability fact, not negative evidence (consistent 08-02..09-02).
- Baseline: the most-recent **new-target transcript 09-02 11:00** (~11h old, captured ~11:10 KST) + `concepts/ai-infra-operating-economics.md` + `concepts/managed-agents-practical-summary.md` + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer — no new durable delta.** The strongest genuinely-new item since 11:00 is **Docker's new top post `Below the Harness: Governing a Multi-Model, Multi-Harness World`** (2026-09-02) — a confused-deputy trust-model argument for AI agents in a multi-model/multi-harness world; substantive but single-surface, and it continues the already-tracked Docker agent-security series + managed-agents/harness-governance lane → `raw_only` (day stays reinforcement-only). Other genuinely-new rows all single-surface `raw_only` in existing lanes: **Vercel** `Qwen 3.8 Max 0902 on AI Gateway` (model-serving); **Simon Willison** `Quoting Rick Brewster` (Paint.NET Direct2D-on-WINE clean-room rewrite vibe-coded with Claude) + `datasette-mcp 0.2`; **HN** `Quasar 438B: Europe's Leading AI Model` + `Emergent Symbolic Structure of ANNs` (arxiv); **Google** `long-duration energy storage in West Virginia` (DC/grid energy, mild); **GitHub Trending** new-but-same-axis rows `ChromeDevTools/chrome-devtools-mcp`, `NousResearch/hermes-agent`, `mattpocock/skills`. **OpenAI / AWS / Cloudflare / HuggingFace / Meta-Eng tops unchanged vs 11:00.** **No durable page change.**

## 1) Genuinely-new-since-09-02-11:00 rows

### Docker — Below the Harness (raw_only, STRONGEST new item)
Source URL: https://www.docker.com/blog/feed/
- `[2026-09-02 13:00] Below the Harness: Governing a Multi-Model, Multi-Harness World` — https://www.docker.com/blog/below-the-harness-governing-a-multi-model-multi-harness-world/ — frames every AI agent as Norm Hardy's 1988 "confused deputy" (a program that acts with *its* permissions instead of *yours*) and argues a multi-model/multi-harness future needs a new trust model. Reinforces the Docker agent-security series (Secure-by-default 08-31, "17,600 Actions: Agent Security Is a Systems Problem" 08-18, "Coding Agent Horror Stories" 08-18) + the managed-agents/harness-governance lane. Single-surface → `raw_only`.

### Vercel — Qwen 3.8 Max on AI Gateway (raw_only)
Source URL: https://vercel.com/atom
- `[2026-09-02 00:00] Qwen 3.8 Max 0902 now available on AI Gateway` — https://vercel.com/changelog/qwen-3-8-max-0902-now-available-on-ai-gateway (model-serving / AI-Gateway add).

### Simon Willison — Claude-assisted Direct2D rewrite + datasette-mcp (raw_only)
Source URL: https://simonwillison.net/atom/everything/
- `[2026-09-02 05:50] Quoting Rick Brewster` — https://simonwillison.net/2026/Sep/2/rick-brewster/ (Paint.NET now ships a from-scratch clean-room reverse-engineered Direct2D-on-WINE rewrite, "vibe coded" with Claude; agent-coding capability anecdote).
- `[2026-09-01 15:30] datasette-mcp 0.2` — https://simonwillison.net/2026/Sep/1/datasette-mcp/ (MCP plugin release; `execute_sql` rows now array-of-objects to help weaker models; depends on `mcp>=2.1.1`).

### Hacker News — Quasar 438B + ANN interpretability (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-09-02 10:02] Quasar 438B: Europe's Leading AI Model` — https://multiversecomputing.com/resources/introducing-quasar-438b-europe-s-leading-ai-model (new EU frontier-model claim, single-surface, mild).
- `[2026-09-02 04:15] The Emergent Symbolic Structure of Artificial Neural Networks` — https://arxiv.org/abs/2608.29530 (interpretability research, mild).

### Google blog — long-duration energy storage (raw_only, mild infra)
Source URL: https://blog.google/rss/
- `[2026-09-02 12:00] Our new partnership brings long-duration energy storage to West Virginia` — https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/west-virginia-long-duration-energy-storage/ (Google + MN8 Energy / Eos on the PJM grid; datacenter/grid energy infra, mild on-axis).

### GitHub Trending — same skills/MCP/agent-tooling cluster; new-but-same-axis rows (raw_only)
Source URL: https://github.com/trending?since=daily + https://github.com/trending/python?since=daily
- `ChromeDevTools/chrome-devtools-mcp` (MCP server for Chrome DevTools — on CK's browser-CDP/MCP theme; NEW row)
- `NousResearch/hermes-agent` (the Hermes agent itself; NEW row)
- `mattpocock/skills` (agent skills; NEW row, reinforces skills cluster)
- On-axis carry: Gitlawb/openclaude, Imbad0202/academic-research-skills, firecrawl/pdf-inspector, google-research/timesfm. **No genuinely-new DURABLE on-axis branch** → `raw_only`.

## 2) Reinforcement — no genuinely-new on-axis rows vs the 09-02 11:00 baseline (raw_only)
- **OpenAI**: top four unchanged (09-01 `AI-native company workflows`, `Path to Astra`, EHR-to-ChatGPT, Gilbert+Tobin). No new post since 11:00.
- **AWS**: top on-axis `Amazon Quick custom apps with natural language` (09-01 21:37) + `Claude Fable 5.1 on AWS` both carry. No new on-axis row since 11:00.
- **Cloudflare**: top still 09-01 12:59 `cache storage with Zstandard and Pingora` (https://blog.cloudflare.com/cache-transcoding/). No new post since.
- **Hugging Face**: top still 09-01 `BenchMIRT` + `@huggingface/kernels` WebGPU (https://huggingface.co/blog/webgpu-kernels). No new post since.
- **Meta Engineering**: top still 08-24 MetaRoCE + MTIA 300. No new post since.
- **GitHub changelog**: new top `Enterprise Live Migrations GHES→ghe.com GA` (09-01 22:24, routine); Copilot-approves-PRs / user-budgets / Claude-Fable-5.1-GA all carry. Copilot-lane reinforcement.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..09-02).

## 3) discard — off-axis new rows
- **Google blog**: `MrBeast partners with Gemini` (09-02, consumer), `The latest AI news we announced in August 2026` (roundup), `September Android Drop` (consumer), `Try Google Pics` (consumer).
- **Google Research**: top still `Mapping global methane emissions from space with deep learning` (Earth-AI/climate, off-axis).
- **AWS routine-infra**: Deadline Cloud job bundles, CloudWatch DB Insights self-managed PostgreSQL, Kinesis dry run, Backup >1000 S3 buckets, Connect compact dashboards, MWAA Airflow 3.3.1, alarm warm-up, RDS Custom CU/GDR, DocumentDB 8.0.
- **HN off-axis**: `Commodore 64 released September 1, 1982`, `A Small Telescope That Surprised Me`, `Move in C++ without a std:move`, `Fine, I'll build my own text editor`, `FBI Probes Service Selling 153M+ Drivers Licenses`, `Open Battery Information`, `Sweden pauses Denmark power cable`, `You Know Who Hates AI? Insurance Claims Adjusters`.
- **GitHub Trending off-axis**: DietrichGebert/ponytail, JuliusBrussee/caveman, affaan-m/ECC, blader/humanizer, fmtlib/fmt, pacifio/atlas, protocolbuffers/protobuf, sngyai/Sequoia-X, superlinked/sie, vercel-labs/portless, zyronon/TypeWords.

## Filtering notes
- Excluded as noise/off-axis: Google blog consumer (MrBeast/Gemini, Android Drop, Google Pics, AI-news roundup); Google Research methane/Earth-AI; AWS routine-infra batch; HN off-axis (Commodore-64, telescope, C++ move, text editor, FBI licenses, battery, Sweden cable, insurance-adjusters); off-axis trending repos (ponytail, caveman, ECC, humanizer, fmt, atlas, protobuf, Sequoia-X, sie, portless, TypeWords).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-09-02 22:00 new-target pass. **Reinforcement-only at the durable layer.** The strongest genuinely-new item is **Docker `Below the Harness: Governing a Multi-Model, Multi-Harness World`** — a confused-deputy trust-model argument on the Docker agent-security series + managed-agents/harness-governance lane, single-surface → `raw_only`. All other genuinely-new rows (Vercel Qwen 3.8 Max on AI Gateway; Simon Willison Rick-Brewster Direct2D-rewrite + datasette-mcp 0.2; HN Quasar 438B + ANN interpretability; Google long-duration energy storage; GitHub Trending chrome-devtools-mcp / hermes-agent / mattpocock-skills) slot into already-tracked lanes → single-surface `raw_only`. OpenAI / AWS / Cloudflare / HuggingFace / Meta-Eng tops unchanged vs 11:00. Off-axis new rows → `discard`. Anthropic RSS 404 = availability fact. Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages left unchanged.
