---
title: Managed Agents architecture
created: 2026-04-15
updated: 2026-04-18
type: concept
tags: [agents, orchestration, infrastructure, devtools, anthropic]
sources: [raw/articles/anthropic-managed-agents-2026-04-15.md, raw/articles/effective-harnesses-for-long-running-agents-2026-04-15.md, raw/transcripts/managed-agents-codefactory-video-2026-04-15.md]
---

# Managed Agents architecture

Anthropic’s Managed Agents design is a useful pattern for long-running agent systems: **separate the brain, the hands, and the memory of what happened**. Concretely, this means decoupling the model+harness from execution environments and from the durable session log.

## Core idea
The article’s central argument is that agent harnesses encode assumptions about current model limitations, and those assumptions go stale as models improve. Because of that, the platform should not freeze one harness design into the product. Instead, it should expose stable interfaces around the harness so the implementation can evolve.

Anthropic expresses this through three virtualized components:
- **Session** — append-only durable event log
- **Harness** — the control loop that calls Claude and routes tool calls
- **Sandbox** — execution environment where code runs and files are edited

## Why the old design broke down
The earlier architecture put the session, harness, and sandbox into one container. That made the system simple at first, but created three infrastructure problems:
- the container became a fragile "pet" instead of replaceable cattle
- debugging was poor because many failures looked identical from the outside
- the harness assumed Claude’s working resources always lived next to it in the same environment

This mattered both for reliability and customer deployment flexibility, especially when customers wanted Claude to work against resources in their own VPC.

## The durable pattern
The durable pattern is to **decouple the brain from the hands**.

### 1. Harness outside the container
Once the harness is outside the sandbox/container, it can treat sandboxes and external tools through a common interface like `execute(name, input) -> string`.

Practical effect:
- failed sandboxes are just failed tool calls
- new sandboxes can be reprovisioned with a standard recipe
- the orchestration layer no longer depends on one special machine staying alive

### 2. Session outside the harness
If the session log lives outside the harness, the harness becomes restartable cattle too.

Practical effect:
- a crashed harness can be restarted
- the new harness reads the event log and resumes
- long-horizon work is no longer tied to one process lifetime

### 3. Security boundary outside generated code
Anthropic’s structural fix for prompt-injection risk is not just narrower permissions; it is keeping credentials unreachable from the sandbox where Claude-generated code runs.

Patterns mentioned in the article:
- repo auth can be bound to the resource during sandbox initialization
- MCP/OAuth credentials can be retrieved by a secure proxy or vault outside the sandbox
- the harness itself does not need direct access to user credentials

## Context engineering implication
A useful idea here is that **the session is not the same thing as the context window**.

Instead of treating the LLM context window as the full source of truth, Anthropic treats the session log as durable context outside the model window. The harness can then retrieve slices of the event history with `getEvents()` and transform them before feeding them back into Claude.

This separates two concerns:
- **durable storage of recoverable history**
- **temporary context engineering for the current model run**

That is a strong design pattern for any system doing long-running agent work.

## Operational payoff
The article claims two important benefits from the decoupled architecture:
- better fault tolerance and resumability
- much lower time-to-first-token because containers are provisioned only when needed

Anthropic reports that with this architecture, p50 TTFT dropped roughly 60% and p95 dropped over 90%.

## Supplemental lessons from Anthropic's harness article
The related Anthropic article on effective harnesses fills in the **behavioral layer** that the Managed Agents architecture article leaves implicit.

### 1. Compaction alone is not enough
Anthropic explicitly says compaction isn’t sufficient for long-running coding work. The hard part is not only fitting within one context window, but making sure the next session can reliably understand the project state without guessing.

### 2. Split the work into initializer and coding phases
A practical harness pattern is to use:
- an **initializer agent** once, to scaffold the environment
- a **coding agent** repeatedly, to make incremental progress

The initializer prepares durable scaffolding such as:
- `init.sh`
- `claude-progress.txt`
- a structured feature list
- an initial git commit

This is useful because it makes later sessions cheaper and more predictable.

### 3. Force incremental progress
Anthropic found that agents often fail in two symmetric ways:
- they try to one-shot too much
- or they see partial progress and prematurely declare victory

The countermeasure is to make each session pick **one high-priority feature** and leave the environment in a clean mergeable state before ending.

### 4. Treat git and progress files as memory prosthetics
The important continuity mechanism is not magical persistent memory; it is explicit artifacts.

Anthropic's pattern is:
- read recent git history
- read a progress log
- read a structured feature list
- restart the app with `init.sh`
- run a baseline verification before starting new work

This is a strong practical recipe for any multi-session coding agent.

### 5. End-to-end testing must be first-class
Anthropic notes that coding agents tend to mark work done too early unless explicitly asked to test like a human user. Browser automation tools therefore become part of the harness, not just auxiliary tools.

## Supplemental lessons from the Korean explainer video
The Code Factory video adds a more operator-facing explanation that is useful for product and infra planning.

### 1. Product surfaces make the abstraction concrete
The video frames Managed Agents through four visible product layers:
- **Agent** — what the agent does
- **Session** — the log/history of a specific run
- **Environment** — where the agent executes
- **Vault** — where credentials and OAuth state live

That mapping helps translate Anthropic's abstract architecture into something closer to a deployable service design.

### 2. This is for running agentic services, not only local coding
A key point in the video is that "why not just run Claude Code locally?" is the wrong frame for service operators. Once traffic, API orchestration, tool composition, and environment lifecycle matter, you need a service shape that is more structured than a local CLI loop.

### 3. Pricing is runtime-shaped
The video highlights that the pricing model combines token billing with session runtime billing, and interprets that runtime charge more like **serverless execution** than always-on infrastructure. That is useful when comparing hosted agent services against self-managed infra.

## Why this matters for CK
This is especially relevant if CK is thinking about AI infra, coding-agent platforms, or orchestration layers.

### 1. It is an infra pattern, not just an AI pattern
The article is really about a classic platform-engineering move: expose stable interfaces and keep replaceable implementations behind them. That makes it directly relatable to VM/container/storage/network abstractions in infrastructure work.

### 2. It supports multi-agent and multi-environment thinking
Once the brain is decoupled from the hands, a brain can use many hands, and many brains can scale independently. That is useful for orchestrators that may need to target multiple sandboxes, tools, MCP servers, or remote environments.

### 3. It makes harness evolution cheaper
This matches the earlier ACP/ACPX discussion: in both cases, the value comes from reducing hard coupling. Managed Agents reduces coupling inside the agent runtime; ACP reduces coupling between clients and agents.

## One-sentence takeaway
**Managed Agents is a meta-harness architecture: keep session, harness, and sandbox as separable interfaces so long-running agents become more durable, secure, and adaptable as models improve.**

## Related pages
- [[agent-client-protocol-and-acpx]]
- [[claude-code-best-practice]]
- [[honcho]]
- [[gstack]]
- [[managed-agents-practical-summary]]
