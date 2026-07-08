---
title: Interest signal collection — 22:00 new-target run (2026-07-08)
created: 2026-07-08
type: raw-transcript
captured_at: 2026-07-08T22:05:00+09:00
run_tag: interest-signal-collection-22-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: raw_only
route_confidence: high
route_reason: >
  Same-day 11:00 new-target run (~11h ago) already absorbed the durable July delta
  (AWS EKS/ECS GPU management-fee -60%, HF zero-egress storage) into
  ai-infra-operating-economics. Against that 11:00 baseline this 22:00 pass is
  overwhelmingly repetition. Genuinely-new-since-11:00 items are thin and
  single-surface (GitHub usage-API review-cycle metrics, Vercel Flags SDK 10x,
  GitHub Trending TencentDB-Agent-Memory / alibaba zvec / DesktopCommanderMCP /
  last30days-skill). None opens a new durable branch — all raw_only reinforcement.
routing:
  - {surface: github-usage-api-adoption, route: raw_only, note: "usage API adds review cycles + time-to-adoption phases (dev analytics)"}
  - {surface: vercel-flags-sdk-10x, route: raw_only, note: "Flags SDK now evaluates flags 10x faster (07-08)"}
  - {surface: github-trending-agent-memory, route: raw_only, note: "TencentCloud/TencentDB-Agent-Memory — agent memory DB; single-surface"}
  - {surface: github-trending-zvec, route: raw_only, note: "alibaba/zvec vector engine; single-surface"}
  - {surface: github-trending-mcp-skill, route: raw_only, note: "wonderwhy-er/DesktopCommanderMCP, mvanhorn/last30days-skill, obra/superpowers"}
  - {surface: aws-hf-openai-cloudflare-meta, route: raw_only, note: "no items past the 11:00 baseline; all repeats"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-11-00-2026-07-08.md
  - raw/transcripts/interest-signal-collection-22-00-2026-07-07.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 22:00 New-Target Collection (2026-07-08)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-07-08 (captured 22:05 KST)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via authenticated public RSS/Atom + HTML fetch over HTTPS (curl); live Chrome CDP not used for this track.
- Most recent prior new-target baseline: same-day 2026-07-08 11:00 (~11h ago). Novelty judged primarily against that transcript, plus the 2026-07-07 22:00 baseline.
- Feeds fetched OK (HTTP 200): github.blog changelog, AWS What's New, OpenAI, Simon Willison, Hugging Face, Meta Eng, Vercel, Cloudflare, GitHub Trending. Docker feed returned empty this run (0 bytes) — recorded as an availability fact, not negative evidence.

## 1) GitHub changelog — copied
Source URL: https://github.blog/changelog/
- `[2026-07-07] Add review cycles and time to adoption phases in the usage API` — https://github.blog/changelog/2026-07-07-add-review-cycles-and-time-to-adoption-phases-in-the-usage-api  **(new since 11:00; dev-analytics)**
- (Kimi K2.7 for Copilot, per-user cost-center budgets, secret scanning metadata, restrict dismiss reviews, Copilot app GA, billing-preview retirement, usage-metrics accuracy, Gemini deprecation, Copilot CLI no-PAT — all already in the 11:00 or 07-07 baseline)

## 2) Vercel — changelog/atom + blog
Source URL: https://vercel.com/changelog , https://vercel.com/blog
- `[2026-07-08] Flags SDK now evaluates flags 10x faster` — https://vercel.com/changelog/flags-sdk-now-evaluates-flags-10x-faster  **(new since 11:00; minor perf)**
- (Chat SDK eve/Connect/Photon/Dial adapters, Sandbox observability, project-level Activity Log, eve GitHub tools, Better Auth acquisition, FUSE Sandbox, Agent Runs in MCP/CLI — all already in 11:00 / 07-07 baseline)

## 3) AWS What's New — copied
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/
- No items past the 11:00 baseline. EKS Auto Mode / ECS Managed Instances GPU fee -60%, Security Hub Azure, SageMaker data lineage, S3 Vectors GovCloud, Security Hub impact analysis, HyperPod disaggregated prefill/decode, SageMaker Studio↔HF one-click all already captured. New rows this window are region-availability / noise (GameLift terminal access, EMR Serverless larger workers, EC2 C8ine Frankfurt, Redshift GovCloud, RDS Oracle 26ai, S3 Express Frankfurt, Systems Manager Azure VM, SageMaker MWAA import) — excluded.

## 4) Hugging Face blog — copied
Source URL: https://huggingface.co/blog
- No items past the 11:00 baseline (zero-egress SkyPilot, Foundry Managed Compute, one-click SageMaker Studio, PRX Part 4 all already captured).

## 5) Simon Willison — copied
Source URL: https://simonwillison.net/
- sqlite-utils 4.0 (final), 4.0rc4, 4.0rc3 all belong to the sqlite-utils 4.0 GA cluster already captured at 11:00. Reinforcement only.
- github-code Web Component, tencent/Hy3 already in 11:00 baseline.

## 6) OpenAI blog — copied
Source URL: https://openai.com/news/
- No items past the 11:00 baseline (MUFG, Australian Payments Plus + Codex already captured).

## 7) Cloudflare blog — copied
Source URL: https://blog.cloudflare.com/
- No items past the 11:00 baseline (UK Cyber Resilience Pledge already captured; Workers-cache 07-06 and x402 Monetization Gateway 07-01 in 07-07 baseline).

## 8) Meta Engineering — copied
Source URL: https://engineering.fb.com/
- No new items. AI Storage Blueprint at Scale (07-01) already in the 07-07 baseline.

## 9) GitHub Trending (daily) — copied top rows
Source URL: https://github.com/trending
- `TencentCloud/TencentDB-Agent-Memory :: agent memory database / persistence for AI agents.` **(new since 11:00)** — https://github.com/TencentCloud/TencentDB-Agent-Memory
- `alibaba/zvec :: vector engine.` **(new since 11:00)** — https://github.com/alibaba/zvec
- `wonderwhy-er/DesktopCommanderMCP :: desktop automation MCP server.` **(new since 11:00)** — https://github.com/wonderwhy-er/DesktopCommanderMCP
- `mvanhorn/last30days-skill :: agent skill.` **(new since 11:00)** — https://github.com/mvanhorn/last30days-skill
- `obra/superpowers :: agent skills toolkit.` (also seen 06-18 baseline) — https://github.com/obra/superpowers
- (repeats: MadsLorentzen/ai-job-search, addyosmani/agent-skills, TencentCloud/CubeSandbox, asgeirtj/system_prompts_leaks, bradautomates/claude-video, iOfficeAI/OfficeCLI, ruvnet/RuView; generic: prisma/prisma, argoproj/argo-cd, Diolinux/PhotoGIMP — excluded)

## Filtering notes
- Excluded as noise: AWS region-availability rows (GameLift, EMR Serverless workers, EC2 C8ine/X8i, Redshift/S3 Express regions, RDS Oracle 26ai, CodePipeline NZ, ACM ACME), generic non-AI trending repos.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-07-08 22:00 new-target pass. The same-day 11:00 run already
absorbed the durable July delta (GPU management-fee cuts + zero-egress storage) into
`concepts/ai-infra-operating-economics.md`. Against that baseline this pass is
reinforcement-only: a few genuinely-new but single-surface rows (GitHub usage-API adoption
metrics, Vercel Flags SDK perf, GitHub Trending agent-memory / zvec / MCP / skill repos)
stay `raw_only`. No concept-page or `index.md` change; durable action = this raw transcript
+ Honcho audit + log entry.
