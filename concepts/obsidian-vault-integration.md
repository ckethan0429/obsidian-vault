---
title: Obsidian Vault Integration
created: 2026-04-15
updated: 2026-04-15
type: summary
tags: [personal-knowledge, automation]
sources: [README.md, SCHEMA.md]
---

# Obsidian Vault Integration

`~/wiki` is now the single canonical vault.

## What changed
- Merged the GitHub-backed Obsidian vault from `~/clawd/obsidian` into `~/wiki`
- Preserved the existing wiki structure under `raw/`, `concepts/`, and `entities/`
- Brought the legacy topical folders into the same root vault
- Kept `.obsidian/` local and ignored by git

## Why this is better
- One place for capture, synthesis, and GitHub sync
- No split-brain between the newer wiki and the older Obsidian vault
- Future notes can live in one canonical path

## Related pages
- [[index]]
- [[log]]
- [[SCHEMA]]
