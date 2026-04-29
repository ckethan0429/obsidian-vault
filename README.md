---
title: Wiki README
created: 2026-04-28
updated: 2026-04-28
type: summary
tags: [personal-knowledge, workflow, obsidian, agents, hermes]
sources: [SCHEMA.md, index.md, log.md]
---

# Wiki README

This folder is CK’s canonical wiki workspace.

## What lives here

- `raw/` — immutable source captures
- `entities/` — notable people, orgs, products, projects
- `concepts/` — durable ideas and recurring themes
- `comparisons/` — side-by-side analyses
- `queries/` — filed answers worth keeping
- `index.md` — navigation catalog
- `log.md` — append-only activity log
- `SCHEMA.md` — conventions, scope, and tag taxonomy

## Workflow

1. **Read this README first** when starting a collection or curation run.
2. **Collect** from live sources or grounded inputs.
3. **Save raw evidence first** under `raw/`.
4. **Triage with Honcho**: decide whether the signal is `raw_only`, `append_existing`, `promote_to_wiki`, `manual_review`, or `discard`.
5. **Write or update wiki pages** only for durable content.
6. **Update `index.md` and `log.md`** so the wiki stays navigable and auditable.
7. **Check git safety** before committing or pushing.

## Collection run operating guide

When a cron or manual collection run starts, use this README as the operating reference.

- Follow the workflow above in order.
- Do not describe the run as separate "API-only" or "CDP-only" modes unless the user explicitly asks for that framing.
- Collect every available surface for each source, and note any missing surface explicitly.
- Treat Honcho as the refinement layer between raw capture and durable wiki promotion.
- Keep raw evidence, triage notes, and durable pages distinct.
- If a source is missing, partial, or redirected, record that fact instead of guessing.

## Core rules

- Raw captures are evidence; do not rewrite them.
- Keep summaries short and concrete.
- Prefer existing pages over creating duplicates.
- Link related pages with `[[wikilinks]]`.
- Keep pages scannable; split oversized pages.
- Treat Honcho as the refinement layer between raw capture and durable wiki promotion.

## Practical note

If a source is missing or partially available, record that fact explicitly instead of guessing.
The wiki should reflect what was actually observed, not what was expected.
