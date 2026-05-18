---
title: Interest Signal Collection — 2026-05-18 11:00 KST
created: 2026-05-18
updated: 2026-05-18
type: raw
tags: [interest-signals, blogs, rss, changelog, release-notes, trending, agents, control-plane, mcp, embeddings, scheduling, append-existing]
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
route_confidence: 0.92
route_reason: Fresh official posts and trending repos deepened the same deployable AI infra / managed-agent / control-plane axis. Strongest new rows were Google Genkit Middleware and Gemini Embedding 2, Docker MCP catalog/profile packaging, AWS agent/workspace updates, Kubernetes Mixed Version Proxy / PSI GA, Hugging Face embedding and batching posts, and GitHub Trending agent tooling repos. No item opened a new durable branch.
routing:
  route: append_existing
  confidence: 0.92
  reasons:
    - Google, AWS, Docker, Kubernetes, Hugging Face, and GitHub Changelog all pushed further into agent packaging, control surfaces, scheduling, and inference substrate.
    - GitHub Trending rotated to new agent/tooling repos, but they still sat inside the same skills / workflow / agent-native lane.
    - OpenAI and Cloudflare were mostly consumer-facing or repetition-heavy today, so they were not durable deltas.
  signal_tags:
    - agent-packaging
    - control-plane
    - mcp
    - embeddings
    - scheduling
    - workflow-tooling
---

# Raw Transcript — Interest Signal Collection 11:00 KST 2026-05-18

Source: official blogs / RSS / release feeds / GitHub Trending
Date: 2026-05-18

## Live session notes
- New-target pass only: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs/changelogs, release notes, and GitHub Trending.
- Compared against `raw/transcripts/interest-signal-collection-11-00-2026-05-17.md` and earlier new-target repeats.
- Cloudflare and OpenAI were mostly repetition-heavy or consumer-facing today, so they were kept out of the durable summary.
- The strongest fresh rows came from Google, AWS, Docker, Kubernetes, Hugging Face, and GitHub Trending.

## 1) Google Developers Blog RSS — agent middleware, embeddings, and on-device AI
Feed source: `https://developers.googleblog.com/feeds/posts/default?alt=rss`

```text
Announcing Genkit Middleware: Intercept, extend, and harden your agentic apps
Genkit is an open-source framework designed to help developers build production-ready, agentic AI applications using TypeScript, Go, Dart, and Python.
```

```text
Building with Gemini Embedding 2: Agentic multimodal RAG and beyond
Google has announced the general availability of Gemini Embedding 2, a unified model that maps text, images, video, audio, and documents into a single semantic space.
```

```text
Speeding Up AI: Bringing Google Colossus to PyTorch via GCSFS and Rapid Bucket
Google Cloud has introduced a high-performance integration that connects Rapid Storage directly to PyTorch via the fsspec interface to eliminate AI training bottlenecks.
```

```text
Building real-world on-device AI with LiteRT and NPU
LiteRT is a production-ready framework designed to help mobile developers unlock the power of Neural Processing Units (NPUs), overcoming the performance and battery limitations of traditional mobile CPUs and GPUs.
```

## 2) OpenAI News RSS — consumer-facing launches, not a durable delta
Feed source: `https://openai.com/news/rss.xml`

```text
OpenAI and Malta partner to bring ChatGPT Plus to all citizens
OpenAI and Malta partner to expand AI access, offering ChatGPT Plus and training to help citizens build practical AI skills and use AI responsibly.
```

```text
A new personal finance experience in ChatGPT
Preview a new personal finance experience in ChatGPT for Pro users in the U.S. Securely connect your financial accounts and get AI-powered insights and guidance grounded in your financial context, goals, and priorities.
```

## 3) AWS What's New — agent/workspace surfaces
Feed source: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`

```text
AWS Partner Central agents now accelerates opportunity creation
Today, AWS announces that the AWS Partner Central agents now accelerate opportunity creation through natural language conversation.
```

```text
Amazon Connect Cases now lets you edit related items and delete cases from the agent workspace
Amazon Connect Cases now supports editing and deleting related items, and deleting cases directly from the agent workspace without administrator help.
```

## 4) Cloudflare Blog RSS — no new durable item beyond the earlier baseline
Feed source: `https://blog.cloudflare.com/rss/`

```text
Our billing pipeline was suddenly slow. The culprit was a hidden bottleneck in ClickHouse
```

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
```

## 5) Docker Blog RSS — MCP packaging and sandboxing
Feed source: `https://www.docker.com/blog/feed/`

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers.
```

```text
Comparing Different Approaches to Sandboxing
Whether you are a software engineer, a product manager, or a designer, this quote should fundamentally change how we approach our daily routine.
```

## 6) Microsoft DevBlogs RSS — courseware, not a durable delta
Feed source: `https://devblogs.microsoft.com/feed/`

```text
LangChain.js for Beginners: A Free Course to Build Agentic AI Apps with JavaScript
Want to build AI agents with JavaScript that go beyond basic chat completions? Agents that reason, call tools, and pull from knowledge bases on their own?
```

## 7) GitHub Changelog — token / platform plumbing
Feed source: `https://github.blog/changelog/feed/`

```text
GitHub App installation tokens: Per-request override header
As announced in April 2026, GitHub is rolling out a new token format for GitHub App installation tokens.
```

```text
Copilot Memory supports user preferences for Pro, Pro+ users
```

```text
Team-level Copilot usage metrics now available via API
```

## 8) Kubernetes Blog — release maturity and control-plane signals
Feed source: `https://kubernetes.io/feed.xml`

```text
Kubernetes v1.36: Mixed Version Proxy Graduates to Beta
Back in Kubernetes 1.28, we introduced the Mixed Version Proxy (MVP) as an Alpha feature.
```

```text
Kubernetes v1.36: PSI Metrics for Kubernetes Graduates to GA
Since its original implementation in the Linux kernel in 2018, Pressure Stall Information (PSI) has provided users with the high-fidelity signals needed to identify resource saturation before it becomes an outage.
```

## 9) Hugging Face Blog — embeddings and batching
Feed source: `https://huggingface.co/blog/feed.xml`

```text
Granite Embedding Multilingual R2: Open Apache 2.0 Multilingual Embeddings with 32K Context — Best Sub-100M Retrieval Quality
```

```text
Unlocking asynchronicity in continuous batching
```

## 10) GitHub Trending — new agent/tooling repos within the same lane
Page source: `https://github.com/trending?since=daily`

```text
HKUDS/CLI-Anything
"CLI-Anything: Making ALL Software Agent-Native"
```

```text
calcom/cal.diy
Scheduling infrastructure for absolutely everyone.
```

```text
tech-leads-club/agent-skills
The secure, validated skill registry for professional AI coding agents.
```

```text
dograh-hq/dograh
Open Source Voice Agent Platform
```

```text
NirDiamant/agents-towards-production
End-to-end, code-first tutorials for building production-grade GenAI agents.
```

## Filtering notes
- Repeated Cloudflare rows and the older OpenAI/Microsoft/Copilot items were not promoted because they stayed in the earlier baseline lane or skewed consumer / courseware heavy.
- GitHub Trending still repeated `openhuman` and `scientific-agent-skills`, so I kept only the newer repo names that looked materially distinct.
- The raw evidence still points at the same macro-axis: agent packaging, control planes, MCP governance, embedding / batching, and runtime maturity.

## Why this raw exists
This file is the evidence store for the 2026-05-18 11:00 new-target collection pass, separate from the social-signal runs and from earlier same-day or prior-day baselines.
