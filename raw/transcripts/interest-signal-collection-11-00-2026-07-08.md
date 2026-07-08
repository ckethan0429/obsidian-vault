---
title: Interest signal collection — 11:00 new-target run (2026-07-08)
created: 2026-07-08
type: raw-transcript
captured_at: 2026-07-08T11:05:00+09:00
run_tag: interest-signal-collection-11-00
track: new-target
tags: [raw-notes, browser, new-target, blogs, changelogs, releases, github-trending]
route_hint: append_existing
route_confidence: medium
route_reason: >
  One day after the dense 2026-07-07 22:00 new-target baseline. Genuinely-new July
  items exist but the strongest ones (AWS EKS/ECS GPU management-fee -60%, HF zero-egress
  storage, sqlite-utils 4.0 GA) reinforce the same agent/infra operating-economics axis the
  07-07 run already appended. Vercel→Better Auth acquisition is new but single-surface.
  Net: minimal reinforcement append; remaining rows raw_only.
routing:
  - {surface: aws-eks-ecs-gpu-fee, route: append_existing, note: "EKS Auto Mode / ECS Managed Instances cut GPU management fees up to 60%"}
  - {surface: huggingface-zero-egress, route: append_existing, note: "zero-egress storage on HF with SkyPilot"}
  - {surface: simonwillison-sqliteutils-4, route: raw_only, note: "sqlite-utils 4.0 GA (baseline had rc2) + sqlite-migrate 0.2"}
  - {surface: vercel-better-auth, route: manual_review, note: "Vercel acquires Better Auth (open-source auth) — single-surface M&A"}
  - {surface: vercel-chat-sdk, route: raw_only, note: "Chat SDK adapters eve/Connect/Photon/Dial; Sandbox observability"}
  - {surface: github-copilot-app-ga, route: raw_only, note: "Copilot app GA to all; Kimi K2.7 in Copilot; per-user cost-center budgets"}
  - {surface: openai-enterprise, route: raw_only, note: "MUFG AI-native; Australian Payments Plus + Codex"}
  - {surface: github-trending, route: raw_only, note: "Meetily / RuView / extracted-system-prompts / claude-video / pocket-tts"}
sources_baseline:
  - raw/transcripts/interest-signal-collection-22-00-2026-07-07.md
  - concepts/ai-infra-operating-economics.md
  - concepts/managed-agents-practical-summary.md
  - concepts/honcho.md
---

# Raw — 11:00 New-Target Collection (2026-07-08)

Source: big-tech/infra blogs, engineering newsletters, official changelogs/release notes, GitHub Trending
Date: 2026-07-08 (captured 11:05 KST)
Track: new-target (11:00/22:00). Social surfaces (Threads/YouTube/likes/reposts) intentionally excluded — covered by 08:00/19:00 jobs.

## Live session notes
- Collection via authenticated public RSS/Atom + HTML fetch over HTTPS (curl); live Chrome CDP not used for this track.
- Most recent prior new-target baseline: 2026-07-07 22:00 (~13h ago). Novelty judged against that transcript.
- Feeds fetched OK (HTTP 200): github.blog changelog, AWS What's New, OpenAI, Simon Willison, Hugging Face, Meta Eng, Vercel, Docker, Cloudflare, GitHub Trending. Meta Eng and Docker had 0 items past the 2026-07-05 cutoff (nothing new since 07-07 baseline).

## 1) AWS What's New — copied (infra / GPU-cost rows)
Source URL: https://aws.amazon.com/about-aws/whats-new/recent/
- `[2026-07-07] Amazon EKS Auto Mode reduces GPU management fees by up to 60%` — https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-eks-auto-mode-gpu-price
- `[2026-07-07] Amazon ECS Managed Instances reduces GPU management fees by up to 60%` — https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-ecs-managed-instances-gpu-price/
- `[2026-07-07] AWS Security Hub extends unified security management to Microsoft Azure` — https://aws.amazon.com/about-aws/whats-new/2026/06/aws-security-hub-supports-monitoring-microsoft-azure/
- `[2026-07-07] Amazon SageMaker now supports data lineage in IAM-based domains` — https://aws.amazon.com/about-aws/whats-new/2026/07/amazon-sagemaker-data-lineage-iam-domain
- `[2026-07-07] Amazon S3 Vectors now available in AWS GovCloud (US)` — https://aws.amazon.com/about-aws/whats-new/2026/07/s3-vectors-available-aws-govcloud-regions/
- `[2026-07-06] AWS Security Hub adds impact analysis for exposure findings` — https://aws.amazon.com/about-aws/whats-new/2026/07/impact-analysis-aws-security-hub/
- (07-06 SageMaker Studio↔HF one-click, HyperPod disaggregated prefill/decode, CloudWatch Application Signals — already in 07-07 baseline)

## 2) Hugging Face blog — copied
Source URL: https://huggingface.co/blog
- `[2026-07-07] Run AI workloads on any cloud, store on Hugging Face: zero-egress storage with SkyPilot` — https://huggingface.co/blog/skypilot-hf-storage
- `[2026-07-07] Hugging Face Models on Foundry Managed Compute` — https://huggingface.co/blog/microsoft/foundry-managed-compute
- `[2026-07-07] From Hugging Face to Amazon SageMaker Studio in one click` — https://huggingface.co/blog/amazon/one-click-to-sagemaker-studio
- `[2026-07-06] PRX Part 4: Our Data Strategy` — https://huggingface.co/blog/Photoroom/prx-part4-data
- (LeRobot v0.6.0, Kernels major updates — already in 07-07 baseline)

## 3) Vercel — changelog/atom + blog
Source URL: https://vercel.com/changelog , https://vercel.com/blog
- `[2026-07-07] Vercel acquires Better Auth to accelerate open source auth` — https://vercel.com/blog/vercel-acquires-better-auth
- `[2026-07-07] More granular observability for Vercel Sandbox` — https://vercel.com/changelog/more-granular-observability-for-vercel-sandbox
- `[2026-07-07] You can now view the Activity Log at a project-level` — https://vercel.com/changelog/you-can-now-view-the-activity-log-at-a-project-level
- `[2026-07-07] Give your eve agent GitHub tools` — https://vercel.com/changelog/github-tools-eve
- `[2026-07-08] Chat SDK now supports Vercel Connect` — https://vercel.com/changelog/chat-sdk-vercel-connect
- `[2026-07-08] Chat SDK adds Photon support` — https://vercel.com/changelog/chat-sdk-adds-photon-support
- `[2026-07-08] Chat SDK adds Dial support` — https://vercel.com/changelog/chat-sdk-adds-dial-support
- `[2026-07-08] Use any Chat SDK adapter with eve` — https://vercel.com/changelog/eve-chat-sdk-channel

## 4) GitHub changelog — copied
Source URL: https://github.blog/changelog/
- `[2026-07-07] GitHub Copilot app available to all` — https://github.blog/changelog/2026-07-07-github-copilot-app-available-to-all
- `[2026-07-07] Kimi K2.7 now available for Copilot Business and Enterprise` — https://github.blog/changelog/2026-07-07-kimi-k2-7-now-available-for-copilot-business-and-enterprise
- `[2026-07-07] Per-user budgets for cost centers in the billing UI` — https://github.blog/changelog/2026-07-07-per-user-budgets-for-cost-centers-in-the-billing-ui
- `[2026-07-07] Secret scanning extended metadata and multipart validation` — https://github.blog/changelog/2026-07-07-secret-scanning-extended-metadata-and-multipart-validation
- `[2026-07-07] Restrict who can dismiss reviews in rulesets` — https://github.blog/changelog/2026-07-07-restrict-who-can-dismiss-reviews-in-rulesets
- `[2026-07-07] Copilot Billing Preview app will be retired on August 3` — https://github.blog/changelog/2026-07-07-copilot-billing-preview-app-will-be-retired-on-august-3

## 5) Simon Willison — copied
Source URL: https://simonwillison.net/
- `[2026-07-07] sqlite-utils 4.0, now with database schema migrations` — https://simonwillison.net/2026/Jul/7/sqlite-utils-4/
- `[2026-07-07] sqlite-migrate 0.2` — https://simonwillison.net/2026/Jul/7/sqlite-migrate/
- `[2026-07-07] github-code Web Component` — https://simonwillison.net/2026/Jul/7/github-code-component/
- `[2026-07-06] tencent/Hy3` — https://simonwillison.net/2026/Jul/6/hy3/
- (sqlite-utils 4.0rc2 "mostly written by Claude Fable" was the 07-07 baseline row; now shipped as 4.0 GA)

## 6) OpenAI blog — copied
Source URL: https://openai.com/news/
- `[2026-07-07] MUFG aims to become AI-native with OpenAI` — https://openai.com/index/mufg
- `[2026-07-07] Australian Payments Plus moves faster with ChatGPT and Codex` — https://openai.com/index/australian-payments-plus

## 7) Cloudflare blog — copied
Source URL: https://blog.cloudflare.com/
- `[2026-07-07] Cloudflare proudly joins the UK government's Cyber Resilience Pledge` — https://blog.cloudflare.com/cloudflare-joins-uk-cyber-resilience-pledge/
- (Workers-cache 07-06, x402 Monetization Gateway 07-01 — already in 07-07 baseline)

## 8) GitHub Trending (daily) — copied top rows
Source URL: https://github.com/trending
- `MadsLorentzen/ai-job-search [TS] :: AI job-application framework built on Claude Code.` (repeat) — https://github.com/MadsLorentzen/ai-job-search
- `Zackriya-Solutions/meetily [Rust] :: Privacy-first local AI meeting assistant (Parakeet/Whisper + Ollama).` — https://github.com/Zackriya-Solutions/meetily
- `addyosmani/agent-skills [JS] :: Production-grade engineering skills for AI coding agents.` (repeat) — https://github.com/addyosmani/agent-skills
- `ruvnet/RuView [Rust] :: Turns commodity WiFi signals into real-time spatial intelligence / vital-sign monitoring.` — https://github.com/ruvnet/RuView
- `asgeirtj/system_prompts_leaks [JS] :: Extracted system prompts from Anthropic/OpenAI/Google/xAI (Claude Fable 5, Opus 4.8, ChatGPT 5.5, Codex...).` — https://github.com/asgeirtj/system_prompts_leaks
- `TencentCloud/CubeSandbox [Rust] :: Sandbox for AI Agents.` (repeat) — https://github.com/TencentCloud/CubeSandbox
- `steipete/... [Swift] :: usage stats for OpenAI Codex and Claude Code, no login.` (repeat) — https://github.com/steipete
- `dotnet/skills [C#] :: skills to assist AI coding agents with .NET/C#.` (repeat) — https://github.com/dotnet/skills
- `iOfficeAI/OfficeCLI [C#] :: Office suite purpose-built for AI agents.` (repeat) — https://github.com/iOfficeAI/OfficeCLI
- `bradautomates/claude-video [Python] :: Give Claude the ability to watch any video (download/frames/transcribe).` — https://github.com/bradautomates/claude-video
- `kyutai-labs/pocket-tts [Python] :: A TTS that fits in your CPU (and pocket).` — https://github.com/kyutai-labs/pocket-tts

## Filtering notes
- Excluded as noise: AWS region-availability rows (S3 Express Frankfurt, Redshift/EC2/EMR region rows, CodePipeline NZ, ACM ACME, RDS Oracle 26ai), Cloudflare UK cyber-pledge PR, GameLift Streams.
- Social-signal surfaces (Threads/YouTube/likes/reposts) deliberately not collected — other jobs own them.

## Why this raw exists
Evidence store for the 2026-07-08 11:00 new-target pass. Supports a single minimal
`append_existing` reinforcement (new July GPU-management-fee cuts + zero-egress storage as
operating-economics levers) on `concepts/ai-infra-operating-economics.md`; the 07-07 run
already absorbed the sandbox-isolation cluster, so everything else stays raw_only /
manual_review (Vercel→Better Auth acquisition).
