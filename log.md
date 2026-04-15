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
