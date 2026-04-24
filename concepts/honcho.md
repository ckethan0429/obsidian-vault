---
title: Honcho
created: 2026-04-18
updated: 2026-04-18
type: concept
tags: [agents, hermes, automation, assistant, workflows, protocols]
sources: [raw/transcripts/interest-signal-collection-19-00-2026-04-17.md, raw/transcripts/interest-signal-note-19-00-2026-04-17.md]
---

# Honcho

Honcho is currently best treated as a **working name for the user-understanding / memory-routing layer** in CK's agent stack.

It appeared in CK's recent signal set as a search term, alongside other long-running agent and browser-control topics. Based on the surrounding context, the most useful interpretation is:

- not the raw archive itself
- not the wiki itself
- not the model itself
- but the layer that decides **what should be remembered, promoted, or ignored**

## Working definition

A Honcho-like layer sits between raw signals and durable memory.

It should:
- collect raw inputs from [[interest-signal-sources]] and browser/session traces
- rank what is strategically important
- decide whether something becomes raw evidence, a wiki page, or a transient note
- keep the active agent session aligned with CK's stable preferences and recurring projects

## What Honcho is not

- Not a substitute for [[site-observation-archive]]
- Not a substitute for [[obsidian-vault-integration]]
- Not a substitute for long-term knowledge compilation in the wiki
- Not just a vector database or search index

## Optimal place in the architecture

The cleanest architecture is:

1. **Capture** — browser history, CDP sessions, transcripts, chat titles, and search queries
2. **Classify** — Honcho scores signals by novelty, repetition, and strategic value
3. **Promote** — only durable items become wiki pages or memory entries
4. **Retrieve** — the active agent pulls the right profile/context at the right time
5. **Audit** — stale or low-value memory gets demoted instead of accumulating forever

In other words, Honcho should be the **policy/routing layer** above raw capture and below durable storage.

## Recommended architecture for CK

For CK's stack, the most practical split is:

- **Raw capture**: [[site-observation-archive]], browser history, transcript dumps, SingleFile/ArchiveBox
- **Routing and prioritization**: Honcho
- **Durable synthesis**: wiki pages, especially [[obsidian-vault-integration]]
- **Runtime orchestration**: [[managed-agents-architecture]] and [[agent-client-protocol-and-acpx]]

That keeps the system from turning into a giant unstructured memory blob.

## Why this matters

CK's interest signals are already multi-source and multi-domain. Without a routing layer, everything tends to collapse into either:
- too much raw data, or
- too much over-summarization

A Honcho layer helps preserve the distinction between:
- **evidence**
- **signal**
- **memory**
- **wiki knowledge**

## Related pages

- [[interest-signal-sources]]
- [[site-observation-archive]]
- [[managed-agents-architecture]]
- [[agent-client-protocol-and-acpx]]
- [[obsidian-vault-integration]]
