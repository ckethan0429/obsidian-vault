---
title: Interest Signal Collection — 2026-05-17 22:00 KST
created: 2026-05-17
updated: 2026-05-17
type: raw
tags: [interest-signals, blogs, rss, changelog, release-notes, trending, agents, control-plane, inference, append_existing]
sources:
  - https://developers.googleblog.com/feeds/posts/default?alt=rss
  - https://openai.com/news/rss.xml
  - https://aws.amazon.com/about-aws/whats-new/recent/feed/
  - https://blog.cloudflare.com/rss/
  - https://www.docker.com/blog/feed/
  - https://devblogs.microsoft.com/feed/
  - https://github.blog/changelog/feed/
  - https://kubernetes.io/feed.xml
  - https://huggingface.co/blog/feed.xml
  - https://github.com/trending?since=daily
route_hint: append_existing
route_confidence: 0.90
route_reason: The 22:00 new-target pass surfaced fresh official-blog / changelog / trending deltas, but they still cluster inside the existing AI infra / managed-agent / control-plane / inference-economics thesis. The strongest new pieces were Google Genkit Middleware + Agent Platform deployment tooling, Cloudflare’s ClickHouse billing bottleneck, Docker’s MCP catalog/profile packaging and coding-agent sandboxes, GitHub Copilot app / memory / token-control updates, Kubernetes scheduling / proxy / DRA telemetry changes, Hugging Face embedding / batching work, and a new GitHub Trending rotation toward agent tooling repos. Nothing crossed the bar for a new durable concept page.
routing:
  route: append_existing
  confidence: 0.90
  reasons:
    - The highest-signal items are still about deployable AI infra: routing, policy, control planes, runtime packaging, inference, and agent tooling.
    - Google, Cloudflare, Docker, GitHub Changelog, Kubernetes, Hugging Face, and GitHub Trending all produced new concrete primitives rather than a new thematic branch.
    - OpenAI, AWS, and Microsoft were checked but were mostly reinforcement-heavy or lower-signal relative to the main axis.
    - The new GitHub Trending rows were agent/tooling repos, but they rotated within the same cluster rather than creating a new durable repo family.
  signal_tags:
    - agent-runtimes
    - control-plane
    - sandboxing
    - inference-economics
    - workflow-packaging
    - mcp
    - embeddings
    - scheduling
    - trend-rotation
---

# Interest Signal Collection — 2026-05-17 22:00 KST

## Live session notes
- New-target pass only: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs/release notes, and GitHub Trending.
- Compared against the 2026-05-17 11:00 new-target raw baseline plus earlier same-cluster evidence.
- I kept only the strongest deltas below; OpenAI / AWS / Microsoft were present but mostly reinforcement or lower-signal for this pass.

## 1) Google Developers Blog RSS — Genkit middleware, on-device AI, Colossus, LiteRT, Agents CLI

Feed source: `https://developers.googleblog.com/feeds/posts/default?alt=rss`

> Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps
>
> Genkit is an open-source framework designed to help developers build production-ready, agentic AI applications using TypeScript, Go, Dart, and Python. The framework utilizes a powerful middleware system that intercepts generation calls to inject custom behaviors like retries, model fallbacks, and human-in-the-loop controls.

> Speeding Up AI: Bringing Google Colossus to PyTorch via GCSFS and Rapid Bucket
>
> Google Cloud has introduced a high-performance integration that connects Rapid Storage directly to PyTorch via the fsspec interface to eliminate AI training bottlenecks. By utilizing Google’s Colossus architecture and bucket plumbing, the post is explicitly about removing storage-path friction.

> Building real-world on-device AI with LiteRT and NPU
>
> LiteRT is a production-ready framework designed to help mobile developers unlock the power of Neural Processing Units (NPUs), overcoming the performance and battery limitations of traditional CPU or GPU processing.

> Agents CLI in Agent Platform: create to production in one CLI
>
> Google Cloud has introduced the Agents CLI, a specialized tool designed to bridge the gap between local development and production-grade AI agent deployment.

## 2) Cloudflare Blog RSS — ClickHouse billing bottleneck

Feed source: `https://blog.cloudflare.com/rss/`

> Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
>
> When a partitioning change to our petabyte-scale ClickHouse cluster caused critical billing jobs to stall, standard metrics showed no obvious errors. This post explores how we identified severe lock contention in ClickHouse.

> Building for the future
>
> This afternoon, we sent the following email to our global team. One of our core values at Cloudflare is transparency...

## 3) Docker Blog RSS — MCP catalogs/profiles and coding-agent sandboxes

Feed source: `https://www.docker.com/blog/feed/`

> Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
>
> We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and govern MCP infrastructure.

> A Virtual Agent team at Docker: How the Coding Agent Sandboxes team uses a fleet of agents to ship faster
>
> The project provides secure, microVM-based isolation for running AI coding agents like Claude Code, Gemini, Codex, Docker Agent and Kiro. Agents get full autonomy in isolated sandboxes.

> Comparing Different Approaches to Sandboxing
>
> Docker continues to frame isolation / sandboxing as a productized primitive for AI-agent execution.

## 4) GitHub Changelog — Copilot app preview, cloud-agent selection, memory, tokens

Feed source: `https://github.blog/changelog/feed/`

> GitHub App installation tokens: Per-request override header
>
> GitHub is rolling out a new token format for GitHub App installation tokens. To help you validate your apps and workflows before the rollout reaches production...

> Copilot Memory supports user preferences for Pro, Pro+ users
>
> Copilot Memory now supports user-level preferences in early access for Copilot Pro and Copilot Pro+ users. Copilot can now store stated or inferred personal preferences about how you work.

> GitHub Copilot app is now available in technical preview
>
> It’s a GitHub-native desktop experience to start agentic development from the work in front of you, keep it isolated, steer it...

> Copilot cloud agent supports auto model selection
>
> When you select Auto in the model picker, Copilot intelligently selects the best available model based on system health and model performance.

## 5) Kubernetes Blog — scheduling, proxy, PSI, DRA maturity

Feed source: `https://kubernetes.io/feed.xml`

> Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
>
> Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature...

> Kubernetes v1.36: Advancing Workload-Aware Scheduling
>
> AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling.

> Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
>
> Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage.

> Kubernetes v1.36: More Drivers, New Features, and the Next Era of DRA
>
> Dynamic Resource Allocation (DRA) continues to mature, bringing a wave of hardware-accelerator and specialized-resource support.

## 6) Hugging Face Blog RSS — embeddings and batching

Feed source: `https://huggingface.co/blog/feed.xml`

> Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality

> Unlocking asynchronicity in continuous batching

> DeepInfra on Hugging Face Inference Providers 🔥
>
> Hugging Face continues to publish inference-provider / deployment-path items alongside embedding and batching improvements.

## 7) GitHub Trending — agent/tooling rotation

Page source: `https://github.com/trending?since=daily`

> HKUDS / CLI-Anything — "CLI-Anything: Making ALL Software Agent-Native"

> BigBodyCobain / Shadowbroker — Open-source intelligence for the global theater ... Hook an AI agent up to have it parse through data and find previously unseen correlations.

> tech-leads-club / agent-skills — The secure, validated skill registry for professional AI coding agents.

> NirDiamant / agents-towards-production — End-to-end, code-first tutorials for building production-grade GenAI agents.

> dograh-hq / dograh — Open Source Voice Agent Platform

> calcom / cal.diy — Scheduling infrastructure for absolutely everyone.

## Filtering notes
- OpenAI stayed mostly product/adoption oriented, so I did not promote it.
- AWS had fresh ops / platform items, but they were lower-signal than the Google / Docker / GitHub / Kubernetes cluster for this pass.
- Microsoft remained reinforcement-heavy relative to the earlier MCP / Copilot / agent-framework baseline.
- The strongest fresh delta is still the same durable axis: deployable AI infra, MCP/governance, agent runtimes, scheduling/control planes, and inference packaging.

## Why this raw exists
This file is the evidence store for the 2026-05-17 22:00 new-target collection pass, separate from the social-signal runs and from earlier same-day or prior-day baselines.
