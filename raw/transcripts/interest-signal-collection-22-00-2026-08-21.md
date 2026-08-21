---
title: Interest signal collection — 22:00 new-target run (2026-08-21)
created: 2026-08-21
type: raw-transcript
captured_at: 2026-08-21T22:12:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  22:00 new-target pass, on time. Idempotency clear: no interest-signal-collection-22-00-2026-08-21
  raw existed before this run. Baseline for the new-target track = the same-day 11:00 new-target run
  interest-signal-collection-11-00-2026-08-21.md (~11h ago) + concepts/ai-infra-operating-economics.md
  (skills/plugins-ecosystem lane + agent-security "securable" leg already durably captured) +
  concepts/agent-runtime-vertical-integration.md (execution-environment axis, created 08-18) +
  concepts/honcho.md. Result: REINFORCEMENT-ONLY at the durable layer. Only ~11h of feed movement since
  the 11:00 run, so most surfaces are UNCHANGED. Genuinely-new rows since 11:00, all raw_only: (1) Docker
  "Running AI agents in GitHub Actions with Docker Sandboxes" (2026-08-21 13:00 GMT — https://www.docker.com/blog/running-ai-agents-in-github-actions-with-docker-sandboxes/
  — strongest new row; agent execution inside CI sandboxes, reinforces the agent-sandbox / execution-environment
  lane in agent-runtime-vertical-integration.md + the agentic-security "securable" leg); (2) Vercel
  "Always-on tracing for production and preview traffic" (2026-08-21 00:00 — https://vercel.com/changelog/always-on-tracing-for-production-and-preview-traffic
  — observability primitive, mild); (3) HN "DeepSeek-v4-flash-vision-exp" (2026-08-21 10:33 — https://api-docs.deepseek.com/guides/vision/
  — new open-weight/vision model release, reinforces the open-weight/inference lane, mild-moderate); (4) HN
  "We Rebuilt the Linux MicroVM Stack on Apple Silicon" (2026-08-21 06:59 — https://encore.dev/blog/firecracker-apple-silicon
  — Firecracker microVM on Apple Silicon, sandbox/isolation infra adjacent to the agent-sandbox lane, mild);
  (5) HN "TigerBeetle Core System Architecture" (2026-08-21 11:43 — https://ixuvo.com/blog/tigerbeetle-core-system-architecture-performance-engineering
  — database/performance-engineering deep-dive, mild). GitHub Trending had NO genuinely-new repos vs the
  11:00 list (modular/modular, cursor/plugins, akitaonrails/ai-memory, agent-substrate/substrate,
  Tencent/AI-Infra-Guard, microsoft/agent-framework, Osmantic/ODS, JuliusBrussee/caveman, docling,
  claude-code, strix, browser-use, mattpocock/skills, obra/superpowers all carry-over). All other feeds
  UNCHANGED vs 11:00: OpenAI (AI Futures / Stampli top), GitHub changelog (Pinning-views + Code Quality GA
  cluster top), AWS What's New (Local Zone Las Vegas / EC2 P6-B300 / Partner Central MCP OAuth top — all
  already seen 11:00), HuggingFace (LFM2.5-DSpark top), Cloudflare (task-based OAuth consent top), Simon
  Willison (ChatGPT site: operator top), Google blog (Gemma 1B / national-parks / personalize-Search top),
  Meta Eng + Google Research unchanged. Anthropic RSS 404 (availability fact, consistent 08-02..08-21).
  Durable action = this raw transcript + a Honcho routing audit + a log.md entry only; index.md and all
  concept pages (incl. ai-infra-operating-economics.md and agent-runtime-vertical-integration.md) left unchanged.
routing:
  - {surface: docker, route: raw_only, note: "STRONGEST genuinely-new row this pass — 'Running AI agents in GitHub Actions with Docker Sandboxes' (2026-08-21 13:00 GMT — https://www.docker.com/blog/running-ai-agents-in-github-actions-with-docker-sandboxes/ — running agents inside Docker Sandboxes in CI; agent execution-environment isolation, reinforces the agent-sandbox / execution-environment lane in agent-runtime-vertical-integration.md AND the agentic-security 'securable' leg already durably absorbed → strong raw_only, NOT a re-application). Below carry-over: 08-20 Verified-Publisher self-serve, 08-18 17,600 Actions: Agent Security Is a Systems Problem + Coding Agent Horror Stories, 08-17 Make zero CVEs default."}
  - {surface: vercel, route: raw_only, note: "ONE genuinely-new top row since 11:00: 'Always-on tracing for production and preview traffic' (2026-08-21 00:00 — https://vercel.com/changelog/always-on-tracing-for-production-and-preview-traffic — observability/tracing primitive, mild). Carry-over: 08-20 v0-Snowflake-OAuth-isolation (part of the cross-vendor agent-OAuth cluster captured 11:00), Vercel Agent in Slack code channels, Bun 1.4 in Functions, Custom metrics, Toolbar-comments-from-CLI."}
  - {surface: hackernews, route: raw_only, note: "Genuinely-new on-axis frontpage rows since 11:00 (fast-rotating surface; all single-surface → raw_only): (1) 'DeepSeek-v4-flash-vision-exp' (08-21 10:33 — https://api-docs.deepseek.com/guides/vision/ — new open-weight/vision experimental model, reinforces open-weight/inference lane, strongest HN row); (2) 'We Rebuilt the Linux MicroVM Stack on Apple Silicon' (08-21 06:59 — https://encore.dev/blog/firecracker-apple-silicon — Firecracker microVM on Apple Silicon, sandbox/isolation infra adjacent to agent-sandbox lane); (3) 'TigerBeetle Core System Architecture: Deconstructing Performance Engineering' (08-21 11:43 — https://ixuvo.com/blog/tigerbeetle-core-system-architecture-performance-engineering — DB/perf-engineering deep-dive, mild). Off-axis discard: Anna's Archive 'AI companies destroy physical books' (legal/advocacy), Sid Meier's Pirates lost-treasure, htmlcat native-web-tricks, Kino Ractor Ruby web server, Flat Chair, Dark Oxygen, Felony-charges-border-phone-data, 'I like 'em thick' essay. Carry-over: 08-20 GitHub Aug-17 outage postmortem."}
  - {surface: github-trending, route: raw_only, note: "NO genuinely-new repos vs the 11:00 list. All carry-over: modular/modular, mattpocock/skills, obra/superpowers, cursor/plugins (cross-vendor plugin-spec WATCH), santifer/career-ops, akitaonrails/ai-memory (agent-memory Honcho-adjacent WATCH), agent-substrate/substrate, chaitanyagiri/munder-difflin, PostHog/posthog, volcengine/OpenViking, JuliusBrussee/caveman, Tencent/AI-Infra-Guard (AI red-teaming), RyanCodrai/turbovec; python: Osmantic/ODS, microsoft/agent-framework, docling-project/docling, anthropics/claude-code, jundot/omlx, browser-use/browser-use, mukul975/Anthropic-Cybersecurity-Skills, usestrix/strix, HKUDS/LightRAG, pipecat-ai/pipecat. Off-axis excluded: AprilNEA/OpenLogi, harry0703/MoneyPrinterTurbo, mahlernim/google-timeline-visualizer, makeplane/plane, ATH-MaaS/Pixelle-Video, yt-dlp/yt-dlp, goauthentik/authentik, marceloprates/prettymaps. Full reinforcement."}
  - {surface: openai-news, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 'Introducing AI Futures' (policy/governance, off-core → discard) + 08-20 'Stampli cuts launch hours 68% with ChatGPT Work' (enterprise case study) + 08-19 Zero-Data-Retention + Replit GPT-5.6 Luna. Reinforcement."}
  - {surface: github-changelog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 'Pinning saved views to repository issues sidebar GA' (housekeeping) + Windows 11 arm64 VS2026 image GA + Code scanning mitigated-alert dismissal + GitHub Code Quality GA cluster (separate Actions path + audit-log). Reinforcement."}
  - {surface: aws-whatsnew, route: raw_only, note: "UNCHANGED vs 11:00 (all top rows already seen): Local Zone Las Vegas GA (housekeeping), EC2 P6-B300 Seoul (Blackwell Ultra GPU), Partner Central agents MCP Server OAuth (part of the cross-vendor agent-OAuth cluster captured 11:00), SageMaker GenAI Inference Recommendation, + housekeeping (Timestream CMK, EKS CA rotation, CloudFront OAC MRAP, ARC RDS block, Direct Connect prefix controls, Redshift S3-Tables retention, Marketplace category notifications). Reinforcement."}
  - {surface: huggingface, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 'Up to 3.2x Faster Inference with LFM2.5-DSpark' (LiquidAI, inference-speedup) + 08-18 'How Much Memory Does Your Agent Actually Need?' (IBM Research) + Multi-Vector embeddings. Reinforcement."}
  - {surface: cloudflare, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 'From all-or-nothing to task-based OAuth consent' (https://blog.cloudflare.com/task-based-oauth-consent/ — anchor of the cross-vendor agent-OAuth cluster captured 11:00) + 08-19 Spectre-on-Workers + 08-18 BGP RFC-9234. Reinforcement."}
  - {surface: simonwillison, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 'ChatGPT search now uses the site: operator at scale' + 'shot-scraper-style JSON API on Bun.WebView' + 08-19 smolmachines/smolvm untrusted-sandbox. Reinforcement."}
  - {surface: google-blog, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-20 national-parks + personalize-Search/Discover/News + 'Gemma 1 billion downloads' (open-weight milestone, captured 11:00) + AI-Max-ads. Rest consumer/education → discard. Reinforcement."}
  - {surface: meta-eng, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-12 WhatsApp Scam-Alert E2E/verifiability + 08-05 ads-ranking + 08-03 GEM. Reinforcement."}
  - {surface: google-research, route: raw_only, note: "UNCHANGED vs 11:00. Top still 08-17 'Seeing beyond BMI' (health, off-axis) + 08-12 parametric-factuality recall + 08-11 AMIE. Reinforcement."}
  - {surface: anthropic-news, route: raw_only, note: "RSS 404 (/rss.xml and /engineering/rss.xml both 404); availability fact, consistent with 08-02..08-21."}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-08-21.md
  - concepts/ai-infra-operating-economics.md
  - concepts/agent-runtime-vertical-integration.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-08-21)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-08-21 (captured ~22:12 KST; on-time 22:00 cron)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via public RSS/Atom + HTML fetch over HTTPS (standalone stdlib Python `/tmp/nt_fetch_2200_0821.py` → `.cache/newtarget-2026-08-21-2200/`, parsed with `/tmp/nt_parse_2200_0821.py` + GitHub Trending extraction `/tmp/nt_trend_2200_0821.py`). No live Chrome CDP needed for this RSS/HTML track.
- Feeds HTTP 200: OpenAI, github.blog changelog, AWS What's New, Hugging Face, Meta Engineering, Vercel, Cloudflare, Docker, Simon Willison, Google (blog + research), GitHub Trending (daily + python), Hacker News frontpage. **Anthropic RSS 404** (`/rss.xml` and `/engineering/rss.xml`) — availability fact, not negative evidence (consistent 08-02..08-21).
- Baseline: the same-day **11:00 new-target run (08-21)** (~11h old) + `concepts/ai-infra-operating-economics.md` (skills/plugins-ecosystem lane + agent-security "securable" leg already durably captured) + `concepts/agent-runtime-vertical-integration.md` (execution-environment axis, created 08-18) + `concepts/honcho.md`. Novelty judged against these.

## Novelty summary
**Reinforcement-only at the durable layer.** Only ~11h of feed movement since the same-day 11:00 run, so most surfaces are unchanged. The strongest genuinely-new row is **Docker "Running AI agents in GitHub Actions with Docker Sandboxes"** (08-21 13:00 GMT) — running agents inside Docker Sandboxes in CI, an agent execution-environment isolation primitive that reinforces the agent-sandbox / execution-environment lane in `agent-runtime-vertical-integration.md` and the agentic-security "securable" leg already durably absorbed. Other genuinely-new rows are all single-surface `raw_only`: **Vercel "Always-on tracing"** (observability, mild), **HN "DeepSeek-v4-flash-vision-exp"** (new open-weight/vision model release, reinforces open-weight/inference lane), **HN "We Rebuilt the Linux MicroVM Stack on Apple Silicon"** (Firecracker microVM on Apple Silicon, sandbox/isolation infra adjacent to agent-sandbox lane), **HN "TigerBeetle Core System Architecture"** (DB/perf engineering, mild). **GitHub Trending had no genuinely-new repos** vs the 11:00 list. All other feeds unchanged. **No durable page change** — every new row reinforces an already-absorbed lane.

## 1) Genuinely-new-since-08-21-11:00 rows (all raw_only)

### Docker — running agents in CI sandboxes (raw_only, strongest new row — reinforces agent-sandbox / execution-environment lane)
Source URL: https://www.docker.com/blog/feed/
- `[2026-08-21 13:00 GMT] Running AI agents in GitHub Actions with Docker Sandboxes` — https://www.docker.com/blog/running-ai-agents-in-github-actions-with-docker-sandboxes/ (running agents inside Docker Sandboxes in CI; agent execution-environment isolation; reinforces the agent-sandbox / execution-environment lane in `agent-runtime-vertical-integration.md` AND the agentic-security "securable" leg already durably absorbed → strong raw_only, no re-application)
- Carry-over: `[2026-08-20 17:00] Docker Verified Publisher Applications Are Now Self-Serve`, `[2026-08-18] 17,600 Actions: Agent Security Is a Systems Problem`, `Coding Agent Horror Stories`, `[2026-08-17] Make zero CVEs your new default`.

### Vercel — observability (raw_only mild)
Source URL: https://vercel.com/atom
- `[2026-08-21 00:00] Always-on tracing for production and preview traffic` — https://vercel.com/changelog/always-on-tracing-for-production-and-preview-traffic (observability/tracing primitive, mild)
- Carry-over: 08-20 v0-Snowflake-OAuth-isolation (part of the cross-vendor agent-OAuth cluster captured 11:00), Vercel Agent in Slack code channels, Bun 1.4 in Functions, Custom metrics, Toolbar-comments-from-CLI.

### Hacker News — DeepSeek v4 vision + microVM + DB perf (raw_only)
Source URL: https://news.ycombinator.com/rss
- `[2026-08-21 10:33] DeepSeek-v4-flash-vision-exp` — https://api-docs.deepseek.com/guides/vision/ (new open-weight/vision experimental model; reinforces open-weight/inference lane, strongest HN row)
- `[2026-08-21 06:59] We Rebuilt the Linux MicroVM Stack on Apple Silicon` — https://encore.dev/blog/firecracker-apple-silicon (Firecracker microVM on Apple Silicon; sandbox/isolation infra adjacent to agent-sandbox lane)
- `[2026-08-21 11:43] TigerBeetle Core System Architecture: Deconstructing Performance Engineering` — https://ixuvo.com/blog/tigerbeetle-core-system-architecture-performance-engineering (DB/perf-engineering deep-dive, mild)

## 2) Reinforcement — no genuinely-new rows vs the 08-21 11:00 baseline (raw_only)
- **GitHub Trending**: NO new repos. All carry-over (modular/modular, mattpocock/skills, obra/superpowers, cursor/plugins [cross-vendor plugin-spec WATCH], akitaonrails/ai-memory [agent-memory Honcho-adjacent WATCH], agent-substrate/substrate, Tencent/AI-Infra-Guard [AI red-teaming], JuliusBrussee/caveman, RyanCodrai/turbovec; python: Osmantic/ODS, microsoft/agent-framework, docling, claude-code, omlx, browser-use, Anthropic-Cybersecurity-Skills, strix, LightRAG, pipecat). Off-axis excluded: OpenLogi, MoneyPrinterTurbo, google-timeline-visualizer, plane, Pixelle-Video, yt-dlp, authentik, prettymaps. Full reinforcement.
- **OpenAI**: top still 08-20 AI Futures (policy, off-core) + Stampli ChatGPT Work + 08-19 ZDR + Replit GPT-5.6 Luna. Unchanged.
- **GitHub changelog**: top still 08-20 Pinning-views GA + Windows 11 arm64 VS2026 + Code-scanning mitigated-dismissal + Code Quality GA cluster. Unchanged.
- **AWS What's New**: top still 08-20 Local Zone Las Vegas GA + EC2 P6-B300 Seoul + Partner Central MCP OAuth + SageMaker inference recommendation (all seen 11:00). Unchanged.
- **Hugging Face**: top still 08-20 LFM2.5-DSpark 3.2x + 08-18 agent-memory sizing. Unchanged.
- **Cloudflare**: top still 08-20 task-based OAuth consent + 08-19 Spectre-on-Workers. Unchanged.
- **Simon Willison**: top still 08-20 ChatGPT site: operator + Bun.WebView JSON API. Unchanged.
- **Google blog**: top still 08-20 national-parks + personalize-Search + Gemma 1B downloads + AI-Max ads. Unchanged.
- **Meta Eng**: top still 08-12 WhatsApp Scam-Alert E2E + 08-05 ads-ranking + 08-03 GEM. Unchanged.
- **Google Research**: top still 08-17 "Seeing beyond BMI" (health, off-axis) + 08-12 parametric-factuality + 08-11 AMIE. Unchanged.
- **Anthropic**: RSS 404 (availability fact, consistent 08-02..08-21).

## Filtering notes
- Excluded as noise/off-axis: HN Anna's-Archive book-destruction (legal/advocacy), Sid-Meier's-Pirates, htmlcat, Kino-Ractor-Ruby, Flat-Chair, Dark-Oxygen, Felony-charges-border, "I like 'em thick" essay; Google blog national-parks/personalize-Search/AI-Max-ads + consumer/education carry-over; off-axis trending repos (OpenLogi, MoneyPrinterTurbo, google-timeline-visualizer, Pixelle-Video, plane, authentik, yt-dlp, prettymaps).
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-08-21 22:00 new-target pass. **Reinforcement-only at the durable layer:** only ~11h since the same-day 11:00 run, so most surfaces are unchanged. The strongest genuinely-new row (Docker "Running AI agents in GitHub Actions with Docker Sandboxes") reinforces the agent-sandbox / execution-environment lane in `agent-runtime-vertical-integration.md` and the agentic-security "securable" leg in `ai-infra-operating-economics.md`, so it stays strong `raw_only`. The remaining new rows (Vercel Always-on tracing, HN DeepSeek-v4-flash-vision-exp + Firecracker-on-Apple-Silicon + TigerBeetle architecture) are single-surface reinforcement of the open-weight/inference and sandbox-infra lanes. GitHub Trending had no new repos; all other feeds unchanged. Anthropic RSS 404 (availability fact). Durable action = this raw transcript + a Honcho routing audit + a `log.md` entry only; `index.md` and all concept pages (incl. `ai-infra-operating-economics.md` and `agent-runtime-vertical-integration.md`) left unchanged.
