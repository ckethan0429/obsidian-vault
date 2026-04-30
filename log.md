# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete
> When this file exceeds 500 entries, rotate: rename to log-YYYY.md, start fresh.

## [2026-04-14] create | Wiki initialized
- Domain: AI/LLM research
- Structure created with SCHEMA.md, index.md, log.md

## [2026-04-14] update | Schema expanded to multi-domain
- Updated `SCHEMA.md` to support multiple user interest domains in one wiki
- Active domains: AI/LLM research, AI agents & Hermes operations, quantitative investing & market research
- Added domain-handling rules and expanded tag taxonomy for cross-domain organization

## [2026-04-14] update | Startup domain added to schema
- Added `startup` as an active domain and taxonomy tag in `SCHEMA.md`
- Expanded domain description to include startup ecosystem and support programs

## [2026-04-14] ingest | Startup support sites list (user-submitted)
- Saved raw source: `raw/transcripts/startup-support-sites-korea-2026-04-14.md`
- Created `concepts/korean-startup-support-sites.md`
- Created `concepts/korean-public-support-programs.md`
- Created `concepts/regional-startup-ecosystem-korea.md`

## [2026-04-14] ingest | NomaDamas/k-skill
- Saved raw source: `raw/articles/nomadamas-k-skill-2026-04-14.md`
- Created `entities/k-skill.md`
- Created `concepts/korean-ai-agent-skills.md`
- Created `concepts/korean-digital-service-automation.md`

## [2026-04-14] ingest | garrytan/gstack
- Saved raw source: `raw/articles/garrytan-gstack-2026-04-14.md`
- Created `entities/gstack.md`
- Updated `index.md`

## [2026-04-14] ingest | Overseas marketing gurus list (user-submitted)
- Saved raw source: `raw/transcripts/marketing-gurus-list-korea-vs-overseas-2026-04-14.md`
- Created `concepts/overseas-marketing-gurus.md`
- Created `concepts/marketing-knowledge-transfer-gap.md`
- Updated `index.md`

## [2026-04-14] update | Schema expanded for infrastructure and personal knowledge
- Added `infrastructure`, `robotics`, and `personal-knowledge` domains to `SCHEMA.md`
- Expanded taxonomy for virtualization, storage, networking, backup/DR, CI/CD, monitoring, MLOps, language-learning, finance, parenting, travel, and interior-design

## [2026-04-14] ingest | CK interest maps (user-submitted)
- Saved raw source: `raw/transcripts/ck-interest-map-technology-engineering-2026-04-14.md`
- Saved raw source: `raw/transcripts/ck-interest-map-business-life-2026-04-14.md`
- Created `concepts/ck-technology-engineering-profile.md`
- Created `concepts/virton-career-and-business-profile.md`
- Created `concepts/ck-investing-and-life-profile.md`
- Created `entities/papalevel.md`
- Updated `index.md`

## [2026-04-14] update | Sales domain added to schema
- Added `sales` as an active domain in `SCHEMA.md`
- Expanded taxonomy with qualification, discovery, negotiation, objection-handling, closing, CRM, revenue-ops, and ROI tags

## [2026-04-14] ingest | B2B sales and negotiation strategy guide (user-submitted)
- Saved raw source: `raw/transcripts/b2b-sales-negotiation-strategy-guide-2026-04-14.md`
- Created `concepts/b2b-sales-and-negotiation-strategy.md`
- Created `concepts/sales-discovery-and-objection-handling.md`
- Created `concepts/proposal-and-closing-strategy.md`
- Updated `index.md`

## [2026-04-14] ingest | Site observation archive preference (user-submitted)
- Saved raw source: `raw/transcripts/site-observation-archive-preference-2026-04-14.md`
- Created `concepts/site-observation-archive.md`
- Updated `index.md`

## [2026-04-15] ingest | Interest signal sources preference (user-submitted)
- Saved raw source: `raw/transcripts/interest-signal-sources-preference-2026-04-15.md`
- Created `concepts/interest-signal-sources.md`
- Updated `index.md`

## [2026-04-15] update | Obsidian vault path set to ~/wiki
- Created `.obsidian/` in `/home/ck/wiki`
- Set `OBSIDIAN_VAULT_PATH=/home/ck/wiki` in `~/.hermes/.env`

## [2026-04-28] update | Wiki README written
- Created/updated `/home/ck/wiki/README.md`
- Described the canonical wiki layout, workflow, and Honcho triage layer
- Updated `index.md` README summary to match the new root README

## [2026-04-28] update | Collection run references README
- Updated `/home/ck/wiki/README.md` with a collection-run operating guide
- Updated the `interest-signal-wiki-ingest` skill to read the top-level README before collection runs
- Made collection runs explicitly follow README for collection, triage, and storage

## [2026-04-15] ingest | Chrome CDP login status preference (user-submitted)
- Saved raw source: `raw/transcripts/chrome-cdp-login-status-2026-04-15.md`
- Created `concepts/chrome-cdp-login-status.md`
- Updated `index.md`
- Merged the earlier Obsidian note into the canonical `~/wiki` vault

## [2026-04-15] update | Obsidian vaults merged
- Merged `~/clawd/obsidian` into `~/wiki` so the wiki is now the single canonical vault
- Added `concepts/obsidian-vault-integration.md`
- Updated `index.md` to point at the integration note

## [2026-04-15] ingest | Claude Code best-practice repo
- Saved raw source: `raw/articles/claude-code-best-practice-2026-04-15.md`
- Saved raw source: `raw/transcripts/github-star-tracking-preference-2026-04-15.md`
- Created `entities/claude-code-best-practice.md`
- Updated `concepts/interest-signal-sources.md` to include GitHub stars
- Updated `index.md`

## [2026-04-15] ingest | ACP and ACPX notes from external docs
- Saved raw source: `raw/articles/acp-and-acpx-2026-04-15.md`
- Created `concepts/agent-client-protocol-and-acpx.md`
- Updated `index.md`

## [2026-04-15] update | Morning interest-signal test run
- Changed the morning cron to 08:00 KST
- Ran a live Chrome CDP test against X likes, Threads activity/reposts, and YouTube subscriptions
- Confirmed the logged-in Threads session is reachable in Chrome CDP (`@ethan13917`)
- Created `raw/transcripts/interest-signal-threads-test-run-2026-04-15.md` with copied excerpts from the live Threads session
- Updated `concepts/interest-signal-update-test-run.md`
- Updated `index.md` to include the test-run summary

## [2026-04-15] ingest | Anthropic Managed Agents architecture
- Saved raw source: `raw/articles/anthropic-managed-agents-2026-04-15.md`
- Created `concepts/managed-agents-architecture.md`
- Updated `index.md`

## [2026-04-15] update | Managed Agents note enriched with supporting sources
- Saved raw source: `raw/transcripts/managed-agents-codefactory-video-2026-04-15.md`
- Saved raw source: `raw/articles/effective-harnesses-for-long-running-agents-2026-04-15.md`
- Updated `concepts/managed-agents-architecture.md` with long-running harness patterns, incremental-progress scaffolding, UI/operator interpretation, and pricing notes
- Updated `index.md`

## [2026-04-15] ingest | Managed Agents practical summary
- Created `concepts/managed-agents-practical-summary.md`
- Updated `concepts/managed-agents-architecture.md` related pages
- Updated `index.md`

## [2026-04-17] update | llm-wiki priority cleanup phase 1
- Backfilled `index.md` with 19 previously missing content pages and added a `Summaries` section
- Expanded `SCHEMA.md` tag taxonomy to cover tags already used in the vault
- Updated the index header to reflect the current page count

## [2026-04-17] update | llm-wiki priority cleanup phase 2
- Added frontmatter to legacy markdown pages that were missing it
- Normalized frontmatter fields to `created`, `updated`, `type`, `tags`, and `sources`
- Added reciprocal related-page links so indexed pages form a connected graph

## [2026-04-17] update | llm-wiki priority cleanup phase 3
- Split the long Claude Code overview into four focused subpages
- Rewrote the parent page into a short index/summary page under the 200-line threshold
- Updated `index.md` to include the new subpages

## [2026-04-17] ingest | Site observation archive CDP hook flow
- Saved raw source: `raw/transcripts/site-observation-archive-cdp-hook-decision-2026-04-17.md`
- Created `concepts/site-observation-archive-cdp-hook.md`
- Updated `concepts/site-observation-archive.md`
- Updated `index.md`

## [2026-04-18] create | Honcho memory-routing layer
- Created `concepts/honcho.md` as a working interpretation of Honcho in CK's agent stack
- Updated `concepts/interest-signal-sources.md`, `concepts/site-observation-archive.md`, and `concepts/managed-agents-architecture.md` to link to Honcho
- Updated `index.md` to include the new concept page

## [2026-04-19] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-19.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-19.md`
- Collected live Chrome/CDP evidence from YouTube, X, Threads, GitHub stars, Google search history, ChatGPT, and Claude
- Verified Discord target channel opened as `discord.com/login`, so direct browser delivery could not be completed

## [2026-04-19] ingest | Daily Push TTS + MBTI Todo List
- Saved raw source: `raw/transcripts/daily-push-tts-mbti-todo-list-2026-04-19.md`
- Created `concepts/daily-push-tts-mbti-todo-list.md`
- Updated `index.md`
- Used the live Discord conversation as a one-shot end-to-end wiki validation source

## [2026-04-20] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-20.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-20.md`
- Collected live Chrome/CDP evidence from YouTube, X, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT, and Claude
- Verified Discord target channel opened as `discord.com/login`, so direct browser delivery could not be completed
- Filtered out sports/운동/엔터테인먼트 noise from the short note while preserving mixed raw evidence

## [2026-04-20] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-20.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-20.md`
- Collected live Chrome/CDP evidence from YouTube, X, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT, and Claude
- Relative fresh signal vs earlier runs: Claude `Twenty CRM` as CRM/leadgen/ops layer and YouTube `The Routing Loop` / AI commerce / AI brand items; most other surfaces reinforced existing agent/infra themes
- Verified Discord target channel opened as `discord.com/login`, so direct browser delivery could not be completed
- Filtered out sports/운동/엔터테인먼트 noise from the short note while preserving mixed raw evidence

## [2026-04-20] ingest | Virton B2B release strategy
- Saved raw source: `raw/transcripts/virton-release-strategy-2026-04-20.md`
- Created `02_Business/Strategy/virton-release-strategy.md`
- Updated `concepts/virton-career-and-business-profile.md`, `concepts/b2b-sales-and-negotiation-strategy.md`, and `concepts/proposal-and-closing-strategy.md`
- Updated `index.md`

## [2026-04-20] query | Threads curation draft — harness/runtime positioning
- Read `SCHEMA.md`, `index.md`, and recent `log.md` for orientation
- Reviewed recent raw sources: `raw/articles/anthropic-managed-agents-2026-04-15.md`, `raw/articles/effective-harnesses-for-long-running-agents-2026-04-15.md`, `raw/transcripts/interest-signal-note-19-00-2026-04-20.md`, `raw/transcripts/interest-signal-collection-19-00-2026-04-20.md`, and `raw/transcripts/virton-release-strategy-2026-04-20.md`
- Read relevant concept pages: `concepts/managed-agents-architecture.md`, `concepts/managed-agents-practical-summary.md`, and `concepts/agent-client-protocol-and-acpx.md`
- Filed today's curation output externally as a CK review draft (not stored as a wiki page)

## [2026-04-20] update | Daily Push TTS + MBTI Todo List
- Updated `concepts/daily-push-tts-mbti-todo-list.md` with a reusable MBTI-aware TTS template and first-step implementation shape

## [2026-04-20] update | Managed Agents practical summary reinforced from 19:00 signals
- Updated `concepts/managed-agents-practical-summary.md`
- Added live-signal reinforcement from `raw/transcripts/interest-signal-collection-19-00-2026-04-20.md`
- Captured the cross-source pattern that routing, runtime orchestration, and operations backends are converging into one agent-ops layer

## [2026-04-21] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-21.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-21.md`
- Collected live Chrome/CDP evidence from YouTube, X, Threads activity/reposts/profile, GitHub stars, Google search history, ChatGPT, and Claude
- Relative fresh signals vs 2026-04-20 runs: GitHub stars expanded from 6 to 10 repos (`memory-bank`, `oh-my-agent`, `web-agent`, `pyturboquant`), Google history showed overnight `threads api` / Meta / `ngrok` activity, and YouTube/X reinforced agent runtime + local workspace + autoresearch patterns
- Verified Discord target channel opened as `discord.com/login`, so direct browser delivery could not be completed
- Filtered out politics/군대/스포츠/엔터테인먼트 noise from the short note while preserving mixed raw evidence

## [2026-04-21] update | Interest signal collection 08:00 rerun (Threads API-only)
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-21-threads-api-rerun.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-21-threads-api-rerun.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json` and confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`)
- Collected Threads via the official API only (`/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`) and kept non-Threads sources on live Chrome/CDP
- Observed that Threads `mentions` and `keyword_search` were blocked by app access-tier permissions, and that likes are still not exposed as a direct API surface for this run
- Verified Discord target channel still opened as `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead


## [2026-04-21] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-21.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-21.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json`, confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`), and kept token-store permissions at `0600`
- Collected Threads via the official API only (`/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`) while keeping YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP
- Relative fresh signals vs 2026-04-20 19:00 and 2026-04-21 08:00 runs: Threads own posts/replies shifted from generic Managed Agents framing into Boris-style parallel execution / worktree isolation / event-based notifications / CLAUDE.md rule accumulation / self-verification, while YouTube made subagents+skills+MCP and deep-research-agent workshops more explicit; X, GitHub, and Google mostly reinforced existing agent-runtime themes
- Verified Discord target channel still opened as `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead

## [2026-04-22] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-22.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-22.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json`, confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`), and kept token-store permissions at `0600`
- Collected Threads via the official API only (`/me`, `/threads`, `/replies`, `/mentions`, `keyword_search`) while keeping YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP
- Relative fresh signals vs 2026-04-21 19:00 and 2026-04-21 08:00 rerun: GitHub stars expanded from 10 to 11 with `k2-fsa/OmniVoice`, X likes pivoted toward DAG/orchestrator structure + LLM wiki critique + repo-based AI engineering + caching/token-efficiency, and YouTube surfaced Kimi K2.6 + Hermes/Gemma + Ceph + Claude Code/Aurora DSQL infra signals; Threads mostly reinforced the prior Boris-style parallel/worktree/verification pattern
- Verified Discord target channel still opened as `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead

## [2026-04-21] ingest | freeCodeCamp beginner graph guide
- Saved raw source: `raw/articles/freecodecamp-beginners-guide-to-graphs-2026-04-21.md`
- Created `concepts/graphs.md`
- Updated `SCHEMA.md` taxonomy with `algorithms`, `graph-theory`, and `traversal` tags
- Updated `index.md`

## [2026-04-21] ingest | Artem XTech LLM wiki vs NotebookLM article
- Saved raw source: `raw/articles/artemxtech-llm-wiki-vs-notebooklm-2026-04-21.md`
- Created `comparisons/llm-wiki-vs-notebooklm.md`
- Updated `index.md`

## [2026-04-22] update | Interest signal collection 08:00 rerun (Threads liked page)
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-22-threads-liked-rerun.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-22-threads-liked-rerun.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json`, confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`), and kept token-store permissions at `0600`
- Collected Threads via the official API plus a CDP-only check of `https://www.threads.com/liked`; the liked page opened successfully and showed fresh Anthropic/AWS/Claude and Kimi K2.6/A100/Hugging Face signals
- Observed that Threads `mentions` returned an empty dataset rather than the earlier access-tier error, and `keyword_search(agent)` returned real hits while other selected queries remained empty
- Re-collected YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP for grounded rerun evidence
- Verified Discord target channel still redirected to `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead

## [2026-04-22] update | Threads curation draft approved and published
- Approved source draft: Hermes cron output `gogunbuntu-curate-1530-discord` from `2026-04-22 15:34:13`
- Published via Threads API using `/home/ck/threads/threads_api_uploader.py`
- Refreshed token and reconfirmed `/v1.0/me` before publish (`user_id=27173231028946699`, `@ethan13917`)
- Published post IDs: `17927998704090443`, `17881095474410119`, `17885069016507474`, `18434803993186078`, `18075885890193333`, `18034838102796039`, `17874234324597256`, `18043338536768394`
- Observed that the publish-limit preflight returned only `data[0].quota_usage`, so `--check-limit` failed closed and the approved manual publish proceeded without quota preflight

## [2026-04-22] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-22.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-22.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json`, confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`), and kept token-store permissions at `0600`
- Collected Threads via the official API plus a CDP-only check of `https://www.threads.com/liked`; the liked page opened successfully and showed fresh Kubernetes-as-AI-OS, Gemini Mac speed, Anthropic/AWS megadeal, and Codex-usage-reset signals
- Observed that Threads `mentions` remained empty, while `keyword_search` returned real hits for `Claude Code`, `GPU`, `Proxmox`, `Ceph`, `agent`, and `memory`
- Re-collected YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP; the strongest new cross-source pattern shifted from generic agent/runtime interest into AI infra operating economics (GPU count, storage, cache, deployability, and distribution)
- Created `concepts/ai-infra-operating-economics.md`
- Updated `index.md`
- Verified Discord target channel still redirected to `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead

## [2026-04-22] update | 23:00 interest-signal refinement
- Reviewed same-day raw sources only: `raw/transcripts/interest-signal-collection-08-00-2026-04-22.md`, `raw/transcripts/interest-signal-note-08-00-2026-04-22.md`, `raw/transcripts/interest-signal-collection-08-00-2026-04-22-threads-liked-rerun.md`, `raw/transcripts/interest-signal-note-08-00-2026-04-22-threads-liked-rerun.md`, `raw/transcripts/interest-signal-collection-19-00-2026-04-22.md`, `raw/transcripts/interest-signal-note-19-00-2026-04-22.md`
- Kept raw evidence untouched and ran Honcho-style triage over repeated vs incidental signals
- Appended durable same-day refinements to `concepts/managed-agents-practical-summary.md`, `concepts/agent-client-protocol-and-acpx.md`, `concepts/ai-infra-operating-economics.md`, and `concepts/virton-career-and-business-profile.md`
- Updated `index.md` summaries for the refined concept pages
- No new concept page was created during the 23:00 refinement; the day’s strongest signals reinforced and sharpened existing themes rather than producing a separate durable topic

## [2026-04-23] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-23.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-23.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json`, confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`), and kept token-store permissions at `0600`
- Observed that the stored `access_token` field failed `/v1.0/me` with `Failed to decode`; used `long_lived_access_token` for refresh and rewrote the refreshed long-lived token back into the store
- Collected Threads via the official API plus a CDP-only check of `https://www.threads.com/liked`; `mentions` stayed empty and `keyword_search` returned real hits for `Claude Code`, `agent`, `memory`, `GPU`, `Proxmox`, and `Ceph`
- Re-collected YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP; the relative fresh shifts vs 2026-04-22 19:00 were YouTube `Space Agent` / `AWS Lambda durable functions` / `Opus 4.7 vs GPT-5.4 vs Kimi K2.6`, X likes adding `freeCodeCamp graphs` above the DAG/orchestrator cluster, and Google activity surfacing `스마트스토어 판매자센터`, `천유닷컴`, `proxlb`, and `엠피씨플러스` business/vendor lookups
- Verified Discord target channel still redirected to `discord.com/login`, so direct browser delivery could not be completed and the short note was saved locally instead

## [2026-04-23] update | AI infra operating economics reinforced from 08:00 signals
- Updated `concepts/ai-infra-operating-economics.md`
- Appended a 2026-04-23 morning reinforcement section covering Kubernetes-as-AI-OS liked evidence, Space Agent/serverless/runtime YouTube signals, X graph/DAG/caching reinforcement, and Google business/vendor scouting
- Updated `index.md` last-updated header

## [2026-04-26] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-26.md`
- Threads API returned a fresh `REPOST_FACADE` on 2026-04-24 and a new 2026-04-23 harness post; own-post insights still centered on AI infra / agent / harness economics
- Threads liked page CDP fallback stayed logged in and surfaced fresh high-signal likes for Kubernetes as AI OS, Gemini Mac speed, Anthropic/AWS compute scale, and Codex usage reset
- YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude all stayed on the same runtime / memory / harness / GPU / Proxmox / distribution axis
- `mentions` stayed empty; `keyword_search` hit Claude Code, agent, memory, GPU, Proxmox, and Ceph, while MCP / vLLM / Threads API returned empty
- Updated `concepts/ai-infra-operating-economics.md` and `index.md`
- Discord target still redirected to login, so direct browser delivery could not be completed

## [2026-04-26] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-26.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-26.md`
- Verified the live Chrome CDP session through `http://127.0.0.1:9222/json/list`; YouTube, X likes, GitHub stars, Google search history, Threads liked, ChatGPT, and Claude were all reachable as logged-in tabs even though the browser snapshot on YouTube looked logged out
- Refreshed/validated the Threads long-lived token from `~/.config/threads-api/credentials.json` and confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`)
- Threads API stayed on the same AI infra / agent / harness / GPU / Proxmox axis; `mentions` remained empty and `keyword_search` continued to hit Claude Code, agent, memory, GPU, Proxmox, and Ceph while MCP / vLLM / Threads API stayed empty
- Threads liked page CDP fallback surfaced fresh Kubernetes-as-AI-OS, Gemini Mac speed, Anthropic/AWS megadeal, and Codex usage-reset likes
- YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude all reinforced the same runtime / memory / harness / GPU / distribution pattern
- Discord target still redirected to login, so direct browser delivery could not be completed and the short note was saved locally

## [2026-04-26] update | Interest signal refinement triage
- No new durable topic emerged from the 08:00 + 19:00 runs; the day was reinforcement-heavy rather than expansionary
- Updated `concepts/honcho.md` with an explicit raw_only / append_existing / promote_to_wiki / manual_review / discard routing policy
- Updated `concepts/managed-agents-practical-summary.md` to make the harness-as-router reading explicit
- Updated `concepts/ai-infra-operating-economics.md` sources to include the evening run and kept the thesis focused on AI infra operating economics
- Left raw evidence untouched; low-signal YouTube sports/entertainment items remained raw_only / discard in the refinement reading

## [2026-04-27] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-27.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-27.md`
- Validated the Threads app-scoped profile with `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`) and kept the long-lived token path working from `~/.config/threads-api/credentials.json`
- Threads API own-posts / replies / keyword search stayed on the same AI infra / harness / routing / GPU ROI / Ceph / Proxmox axis; `mentions` remained empty and `MCP` / `vLLM` / `Threads API` keyword queries were empty
- Threads liked page CDP fallback stayed live and again surfaced Kubernetes-as-AI-OS, Gemini Mac, Anthropic/AWS compute scale, and Codex usage-reset signals
- Re-collected YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP; the same runtime / memory / graphs / ACP / AI infra distribution / education-led SaaS pattern persisted
- Updated `concepts/ai-infra-operating-economics.md` and `index.md`; the run read as reinforcement rather than a new durable topic

## [2026-04-27] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-27.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-27.md`
- Refreshed the Threads long-lived token from `~/.config/threads-api/credentials.json` and confirmed `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`)
- Collected Threads via the official API plus a CDP-only check of `https://www.threads.com/liked`; `mentions` remained empty and `keyword_search` returned real hits for `Claude Code`, `agent`, `GPU`, `Proxmox`, `Ceph`, `memory`, while `MCP` stayed empty
- Re-collected YouTube, X, GitHub stars, Google search history, ChatGPT, and Claude on live Chrome/CDP; the same runtime / memory / graphs / ACP / AI infra distribution / education-led SaaS pattern persisted
- Highest Threads post engagement remained on the `에이전트 생산성의 진실` post (`3195 views / 13 likes / 7 replies / 2 reposts / 1 quote`)
- No new durable topic emerged; the run read as reinforcement rather than expansion

## [2026-04-27] refine | Interest signal triage after 08:00 + 19:00 runs
- Honcho-style triage outcome: `append_existing` for `concepts/ai-infra-operating-economics.md`; `raw_only` / `discard` for noisy surfaces; no new durable page was promoted
- Updated `concepts/ai-infra-operating-economics.md` to add the 19:00 reinforcement and keep the day classified as reinforcement-only
- Raw evidence under `raw/transcripts/` was left untouched

## [2026-04-28] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-28.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-28.md`
- Validated the Threads app-scoped profile with `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`) using the long-lived token from `~/.config/threads-api/credentials.json`
- Appended a 2026-04-28 morning reinforcement section to `concepts/ai-infra-operating-economics.md` and updated its source list
- Threads API own-posts, replies, keyword search, and insights stayed on the same AI infra / harness / routing / GPU / Ceph / Proxmox axis; `mentions` remained empty and `Claude Code`, `agent`, `memory`, `GPU`, `Proxmox`, and `Ceph` were the only keyword hits
- Threads liked page redirected to login in the browser session, and YouTube / X / GitHub / Google / ChatGPT / Claude were all unavailable or logged out in this session

## [2026-04-28] refine | Interest signal triage after 08:00 + 19:00 runs
- Reviewed same-day raw sources only: `raw/transcripts/interest-signal-collection-08-00-2026-04-28.md`, `raw/transcripts/interest-signal-note-08-00-2026-04-28.md`, `raw/transcripts/interest-signal-collection-19-00-2026-04-28.md`, `raw/transcripts/interest-signal-note-19-00-2026-04-28.md`
- Honcho-style triage outcome: `append_existing` for `concepts/ai-infra-operating-economics.md`; `raw_only` for browser/login-blocked surfaces; `discard` for noisy or non-durable surfaces
- Appended a 2026-04-28 evening reinforcement section to `concepts/ai-infra-operating-economics.md` and updated `index.md`
- No new durable concept page was promoted; the day remained reinforcement-heavy rather than expansionary

## [2026-04-29] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-29.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-29.md`
- Validated the Threads app-scoped profile with `/v1.0/me` (`user_id=27173231028946699`, `@ethan13917`) using the long-lived token from `~/.config/threads-api/credentials.json`
- Threads API stayed healthy: `mentions` was empty, but `keyword_search` returned real hits for `Claude Code`, `agent`, `memory`, `GPU`, `Ceph`, and `Proxmox`
- Threads liked page was readable via live CDP, and X / YouTube / GitHub stars / Google My Activity / ChatGPT / Claude all reinforced the same Claude Code / agent / memory / infra / education axis; GitHub stars required a fresh CDP target because the existing tab was blank
- Appended a 2026-04-29 morning reinforcement section to `concepts/ai-infra-operating-economics.md` and updated `index.md` and its source list

## [2026-04-29] ingest | Virton equity negotiation baseline
- Saved raw source: `raw/transcripts/virton-equity-negotiation-baseline-2026-04-29.md`
- Created `concepts/virton-equity-negotiation-baseline.md`
- Updated `concepts/virton-career-and-business-profile.md` to clarify that CK is not officially CTO, has 0% equity, and currently performs de facto CTO responsibilities for the Virton platform
- Updated `index.md`

## [2026-04-29] ingest | New-target blog/release baseline
- Saved raw source: `raw/transcripts/interest-signal-collection-11-00-2026-04-29.md`
- Appended `concepts/ai-infra-operating-economics.md` with a new-target baseline section covering Anthropic launch posts, Cloudflare's agentic cloud announcements, and GitHub Trending Claude Code / skills packaging
- Treated the run as append_existing / baseline-seeding rather than a new durable topic

## [2026-04-29] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-29.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-29.md`
- Live CDP exposed readable Threads activity/reposts, YouTube watch later/liked, GitHub stars, Google My Activity, ChatGPT, Claude, and X likes tabs even though the browser tool opened Threads login
- New-ish signals relative to the morning run: Threads activity/reposts added an explicit native-vs-parallel / OMX split plus Hermes Agent and Claude Design packaging; YouTube watch later/liked added Harness Engineering, GPU pricing, AI skills, and Supabase MCP items; X likes shifted toward free AI resources and Claude Code workflow education
- Appended `concepts/ai-infra-operating-economics.md` with an evening reinforcement section and updated `index.md` and source lists

## [2026-04-29] ingest | New-target blog/release 22:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-22-00-2026-04-29.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-22-00-2026-04-29.md`
- Anthropic News and Cloudflare RSS repeated the 11:00 baseline; no new durable launch item stood out on those surfaces
- GitHub Trending shifted toward more agentic runtime/tooling repos (`warpdotdev/warp`, `1jehuang/jcode`, `obra/superpowers`, `lukilabs/craft-agents-oss`, `ZhuLinsen/daily_stock_analysis`)
- Updated `concepts/ai-infra-operating-economics.md` and `index.md` with an append_existing read

## [2026-04-29] update | Interest-signal 23:00 refinement
- Reviewed the same-day 08:00, 11:00, 19:00, and 22:00 raw transcripts plus their delivery notes
- Classified the day as reinforcement-only: the strongest repeated axis stayed Claude Code / agent workflows / harness routing / shared memory / AI infra economics / education-led packaging
- No new durable concept page was promoted; raw evidence remained untouched

## [2026-04-30] ingest | Interest signal collection 08:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-08-00-2026-04-30.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-08-00-2026-04-30.md`
- Threads / X / ChatGPT / Claude / Google / YouTube mostly reinforced the same Claude Code / agent / harness / OpenClaw / AI infra / education axis as the prior day
- GitHub stars added a new visible quant-research signal: `jorgebmann / pyturboquant`
- Updated `concepts/ck-investing-and-life-profile.md` with the quant-tooling signal

## [2026-04-30] ingest | New-target blog/release 11:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-11-00-2026-04-30.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-11-00-2026-04-30.md`
- Cloudflare RSS surfaced a fresh launch post about agents creating Cloudflare accounts, buying domains, and deploying; Anthropic newsroom added `Claude is a space to think`
- GitHub Trending shifted toward agentic dev environments and skills frameworks (`warp`, `jcode`, `VibeVoice`, `superpowers`, `craft-agents-oss`), while `skills` and `awesome-codex-skills` repeated as reinforcement
- Appended `concepts/ai-infra-operating-economics.md` and updated `index.md` for the append_existing read

## [2026-04-30] ingest | Interest signal collection 19:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-19-00-2026-04-30.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-19-00-2026-04-30.md`
- Threads liked/reposts added a new vibe-coding / language-choice nuance (`Dart/Flutter + Go`) and a local-AI VRAM-planning signal, while activity/profile/replies mostly reinforced the existing AI infra/operator axis
- YouTube watch later rotated in new builder/operator items around `State of the Claw`, desk setup, Apple-integrated Claude Code, and vibe-coding design workflows
- Google My Activity added a small market/business scouting pulse (`KRX:071050`, `Google 기능 업데이트`, `모두의 창업`); GitHub stars top slice was unchanged
- Appended `concepts/ai-infra-operating-economics.md` for the append_existing read

## [2026-04-30] ingest | New-target blog/release 22:00 run
- Saved raw source: `raw/transcripts/interest-signal-collection-22-00-2026-04-30.md`
- Saved delivery note: `raw/transcripts/interest-signal-note-22-00-2026-04-30.md`
- Cloudflare and Anthropic mostly repeated the 11:00 baseline; the stronger new evidence came from OpenAI RSS and GitHub release notes
- OpenAI surfaced `OpenAI models, Codex, and Managed Agents come to AWS` plus `An open-source spec for orchestration: Symphony`
- GitHub Changelog surfaced `Copilot cloud agent starts 20% faster with Actions custom images`, `GPT-5.5 is generally available for GitHub Copilot`, and `GitHub Copilot code review will start consuming GitHub Actions minutes`
- GitHub Trending added `browserbase/skills` and `TradingAgents`
- Appended `concepts/ai-infra-operating-economics.md` for the append_existing read
