---
title: Interest Signal Collection — 2026-05-16 11:00 KST
created: 2026-05-16
updated: 2026-05-16
type: raw
tags: [interest-signals, blogs, rss, changelog, release-notes, trending, agents, mcp, sandboxing, control-plane, append-existing]
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
route_confidence: 0.94
route_reason: The new-target pass surfaced fresh items around long-running agents, subagents, agent CLI packaging, MCP control planes, sandboxing, cloud-agent task APIs, durable workflows, workload-aware scheduling, and inference / embedding packaging. The macro-axis stayed on deployable AI infra and managed-agent operations rather than opening a new durable branch.
routing:
  route: append_existing
  confidence: 0.94
  reasons:
    - Google, OpenAI, AWS, Cloudflare, Docker, Microsoft, GitHub Changelog, Kubernetes, Hugging Face, and GitHub Trending all moved deeper into agent runtimes, sandboxes, control planes, and packaging surfaces.
    - The strongest deltas were specific and operational: long-running agents, isolated subagents, MCP catalogs/profiles, Copilot Memory, cloud-agent task APIs, durable workflows, and workload-aware scheduling.
    - GitHub Trending added a few new MCP / skills / agent-tooling repos, but the overall repo cluster still sat inside the same agent/workflow axis.
    - No item crossed the bar for a new durable concept page.
---

# Interest Signal Collection — 2026-05-16 11:00 KST

## Live session notes
- New-target pass only: big-tech / infrastructure blogs, engineering RSS/Atom feeds, official docs, changelogs, release notes, and GitHub Trending.
- Compared against the 2026-05-15 11:00 new-target baseline plus prior new-target evidence.
- The strongest fresh deltas were long-running Google agents / Gemini CLI subagents, OpenAI Codex sandboxing, AWS Transform agents / OCI interconnect, Cloudflare Dynamic Workflows, Docker MCP catalogs / governance, GitHub Copilot Memory / cloud-agent tasks, Kubernetes workload-aware scheduling, and Hugging Face inference-provider / multimodal-agent packaging.
- GitHub Trending still repeated the earlier agent/tooling cluster, but it added a few new repos with direct MCP / skills / agent-workflow relevance.
- Lower-signal carry-over rows were omitted from the note.

## 1) Google Developers Blog RSS — long-running agents, agent CLI, subagents

Feed source: `https://developers.googleblog.com/feeds/posts/default?alt=rss`

```text
Build Long-running AI agents that pause, resume, and never lose context with ADK
How to transition from stateless chatbots to production-grade agents capable of managing long-running enterprise workflows, such as HR onboarding, that span days or weeks.
```

```text
Agents CLI in Agent Platform: create to production in one CLI
Google Cloud has introduced the Agents CLI, a specialized tool designed to bridge the gap between local development and production-grade AI agent deployment.
```

```text
Subagents have arrived in Gemini CLI
Gemini CLI has introduced subagents, specialized expert agents that handle complex or high-volume tasks in isolated context windows to keep the primary session fast and focused.
```

## 2) OpenAI News RSS — enterprise agent workflows and Codex sandboxing

Feed source: `https://openai.com/news/rss.xml`

```text
Databricks brings GPT-5.5 to enterprise agent workflows
Databricks uses GPT-5.5 for enterprise agent workflows after the model set a new state of the art on the OfficeQA Pro benchmark.
```

```text
Building a safe, effective sandbox to enable Codex on Windows
Learn how OpenAI built a secure sandbox for Codex on Windows, enabling safe, efficient coding agents with controlled file access and network restrictions.
```

```text
Sea's View on the Future of Agentic Software Development with Codex
A partner-side view of Codex as agentic software-development infrastructure rather than a standalone demo.
```

## 3) AWS What's New — Transform agents and multicloud interconnect

Feed source: `https://aws.amazon.com/about-aws/whats-new/recent/feed/`

```text
AWS Transform agents now available in Kiro, Claude, Cursor, and Codex
Today, AWS announces that the AWS Transform agents — built on decades of AWS migration and modernization experience — are now accessible through a Kiro power, agent plugins, and via the AWS Transform MCP server.
```

```text
AWS announces AWS Interconnect - multicloud connectivity with Oracle Cloud Infrastructure in preview
AWS announces the public preview of AWS Interconnect — multicloud with Oracle Cloud Infrastructure (OCI). Customers have been adopting multicloud strategies while migrating more applications to the cloud.
```

```text
Amazon CloudWatch Logs announces increased query result limits
CloudWatch Logs now supports higher query result limits.
```

## 4) Cloudflare Blog RSS — browser runtime packaging and durable workflows

Feed source: `https://blog.cloudflare.com/rss/`

```text
Browser Run: now running on Cloudflare Containers, it’s faster and more scalable
We’ve enabled higher usage limits, faster performance, better reliability, and increased shipping velocity for our Browser Run product by rebuilding on top of Cloudflare’s Containers.
```

```text
Introducing Dynamic Workflows: durable execution that follows the tenant
Dynamic Workflows is a library that lets you route durable execution to tenant-provided code on the fly. Built on Dynamic Workers, it enables platforms to serve millions of unique workflows at near-zero idle cost.
```

```text
Agents can now create Cloudflare accounts, buy domains, and deploy
Starting today, agents can now be Cloudflare customers. They can create a Cloudflare account, start a paid subscription, register a domain, and get back an API token to deploy code right away.
```

## 5) Docker Blog RSS — MCP packaging, agent governance, microVM isolation

Feed source: `https://www.docker.com/blog/feed/`

```text
Custom MCP Catalogs and Profiles: Advancing Enterprise MCP Adoption
We’re excited to announce the general availability of Custom Catalogs and Profiles for managing Model Context Protocol (MCP) servers. These two complementary capabilities fundamentally change how teams package, distribute, and manage AI tooling.
```

```text
Docker AI Governance: Unlock Agent Autonomy, Safely
Introducing Docker AI Governance: centralized control over how agents execute, what they can reach on the network, which credentials they can use, and which MCP tools they can call.
```

```text
Why MicroVMs: The Architecture Behind Docker Sandboxes
Last week, we launched Docker Sandboxes with a bold goal: to deliver the strongest agent isolation in the market.
```

## 6) Microsoft DevBlogs RSS — MCP control plane and agentic app scaffolding

Feed source: `https://devblogs.microsoft.com/feed/`

```text
Securing MCP: A Control Plane for Agent Tool Execution
The Model Context Protocol (MCP) is quickly becoming a common way for AI agents to discover and use tools. It provides a consistent interface to databases, APIs, file systems, and third-party services.
```

```text
Build a real-world example with Microsoft Agent Framework, Microsoft Foundry, MCP and Aspire
Deploying agents as part of a real application, with multiple services, persistent state, and production infrastructure, is where things get complicated.
```

```text
Awesome GitHub Copilot just got a website, and a learning hub, and plugins!
A community hub for custom instructions, prompts, and chat modes to customize GitHub Copilot responses.
```

## 7) GitHub Changelog — Copilot memory and cloud-agent task APIs

Feed source: `https://github.blog/changelog/feed/`

```text
Copilot Memory supports user preferences for Pro, Pro+ users
Copilot Memory now supports user-level preferences in early access for Copilot Pro and Copilot Pro+ users.
```

```text
Start Copilot cloud agent tasks via the REST API
Copilot Business and Copilot Enterprise users can programmatically start Copilot cloud agent tasks with the new Agent tasks REST API, available in public preview.
```

```text
New enterprise installation API now in public preview
We’re filling an API gap for GitHub App developers based on community feedback.
```

## 8) Kubernetes Blog — workload-aware scheduling and pod-level resource control

Feed source: `https://kubernetes.io/feed.xml`

```text
Kubernetes v1.36: Advancing Workload-Aware Scheduling
AI/ML and batch workloads introduce unique scheduling challenges that go beyond simple Pod-by-Pod scheduling.
```

```text
Kubernetes v1.36: Pod-Level Resource Managers (Alpha)
Kubernetes v1.36 introduces Pod-Level Resource Managers as an alpha feature, bringing a more flexible and powerful resource management model to performance-sensitive workloads.
```

```text
Kubernetes v1.36: Tiered Memory Protection with Memory QoS
Memory QoS uses the cgroup v2 memory controller to give the kernel better guidance on how to treat container memory.
```

## 9) Hugging Face Blog — embeddings, inference providers, multimodal agents

Feed source: `https://huggingface.co/blog/feed.xml`

```text
Granite 4.1 LLMs: How They’re Built
```

```text
DeepInfra on Hugging Face Inference Providers 🔥
```

```text
Introducing NVIDIA Nemotron 3 Nano Omni: Long-Context Multimodal Intelligence for Documents, Audio and Video Agents
```

## 10) GitHub Trending — new repos within the same agent/tooling cluster

Page source: `https://github.com/trending?since=daily`

```text
anthropics / skills
Public repository for Agent Skills
```

```text
czlonkowski / n8n-mcp
A MCP for Claude Desktop / Claude Code / Windsurf / Cursor to build n8n workflows for you
```

```text
NVIDIA-AI-Blueprints / video-search-and-summarization
Suite of reference architectures for building GPU-accelerated vision agents and AI-powered video analytics applications.
```

```text
over-sh / bun
Incredibly fast JavaScript runtime, bundler, test runner, and package manager – all in one
```

```text
mattpocock / skills
Skills for Real Engineers. Straight from my .claude directory.
```

```text
joeseesun / qiaomu-anything-to-notebooklm
Claude Skill: Multi-source content processor for NotebookLM. Supports WeChat articles, web pages, YouTube, PDF, Markdown, search queries → Podcast/PPT/MindMap/Quiz etc.
```

## Filtering notes
- Omitted repeated 2026-05-15 baseline rows such as Google Genkit / AI Edge, OpenAI consumer-finance / safety, AWS CloudWatch / EMR / RDS / Grafana rows, Cloudflare billing-analysis rows, Docker security rows, Microsoft Cosmos DB / PostgreSQL rows, and Kubernetes baseline carry-over.
- GitHub Trending still repeated the prior `openhuman` / `superpowers` / `scientific-agent-skills` cluster, so only the new MCP / skills / workflow repos were kept.
- The strongest durable signal remains the same managed-agent / control-plane axis: long-running agents, isolated subagents, MCP packaging, sandboxes, cloud-agent task APIs, durable workflows, and runtime scheduling.

## Why this raw exists
This file is the evidence store for the 2026-05-16 11:00 new-target collection pass, separate from the social-signal runs and from earlier same-day or prior-day baselines.
