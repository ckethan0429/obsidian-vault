---
title: Interest Signal Update Test Run
created: 2026-04-15
updated: 2026-04-15
type: summary
tags: [personal-knowledge, automation, workflow]
sources: [raw/transcripts/interest-signal-sources-preference-2026-04-15.md, raw/transcripts/interest-signal-threads-test-run-2026-04-15.md]
---

# Interest Signal Update Test Run

This page records a live test of the morning interest-signal workflow through Chrome CDP.

## Scope tested
- X likes
- Threads profile / reposts / activity feed
- YouTube subscriptions
- Sports / entertainment content filtered out

## What surfaced
### X likes
- `hoeem` — article about extending Claude sessions / bypassing usage limits
- `lucas` — Korean thread on hidden Claude Code features, quoting Boris Cherny

### Threads
Live Chrome CDP access worked on the logged-in Threads session (`@ethan13917`). Useful surfaces:
- `@ethan13917/reposts` for reposted items
- `activity` for recent activity / notifications context

Relevant non-sports / non-entertainment items that surfaced in the test:
- `softdaddy_o` — yfinance / stock-data tooling note
- `dayum_gud` — Hermes write-up and prompt template sharing
- `ddg.kang` — AI coding setup combining Hermes + Codex + OmX

### YouTube subscriptions
Relevant non-sports items included:
- OpenAI / agent tooling commentary
- Claude Code desktop app / parallel agents
- Claude Opus / Claude Code ecosystem commentary
- Qwen + OpenCode / AI coding-tool workflow content
- AI tools / model usage summaries

## What was intentionally filtered out
- Football / UCL highlight videos
- Sports live streams and match replays
- General entertainment shorts that were not interest-domain relevant

## Missing sources for this test
Not yet wired into this test run:
- Threads likes / reposts
- Google search history
- ChatGPT answers
- Claude answers

## Next step
Once the remaining sources are available through the same live CDP/session path, fold them into the same morning update and keep the result concise.

## Related pages
- [[interest-signal-sources]]
- [[chrome-cdp-login-status]]
- [[obsidian-vault-integration]]
