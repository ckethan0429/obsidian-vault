---
title: Site Observation Archive CDP Hook Flow
created: 2026-04-17
updated: 2026-04-17
type: concept
tags: [personal-knowledge, automation, workflow, agents, browser-automation, chrome-cdp, obsidian]
sources: [raw/transcripts/site-observation-archive-cdp-hook-decision-2026-04-17.md, raw/transcripts/site-observation-archive-preference-2026-04-14.md]
---

# Site Observation Archive CDP Hook Flow

This page is the concrete implementation path for [[site-observation-archive]]: when a Chrome CDP-connected browser session hits an important page, capture the rendered body, store the raw artifact, and only promote durable takeaways into the wiki.

## Trigger rules

Capture when the page is likely to matter later:
- login-dependent pages
- repeat research targets
- pages that affect a decision
- high-signal sources like Threads, X, ChatGPT, Claude, Instagram, or YouTube
- pages that are hard to reconstruct from memory later

Skip when it is just noise:
- low-signal feed scrolling
- one-off clicks
- transient search-result pages
- pages already covered well elsewhere

## Capture flow

1. A browser/CDP hook fires after navigation settles.
2. Extract the main body from the DOM.
3. Normalize whitespace and redact obvious secrets.
4. Save the raw capture under `raw/articles/` or `raw/transcripts/`.
5. If the page is durable, update or create the wiki note.
6. Link the result back to [[site-observation-archive]], [[chrome-cdp-login-status]], [[claude-code-hooks]], and [[obsidian-vault-integration]].

## Preferred extraction order

1. `article`, `main`, or `[role=main]`
2. `document.body.innerText`
3. full-page HTML capture only when body text is insufficient

## Storage rule

The hook should preserve the page body first, then decide whether the page deserves a durable wiki page.
It is an intake valve, not a blanket history logger.

## Related pages
- [[site-observation-archive]]
- [[chrome-cdp-login-status]]
- [[claude-code-hooks]]
- [[obsidian-vault-integration]]
