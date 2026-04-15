# Wiki Schema

## Domain
This is a **multi-domain research wiki** for CK.

Primary domains currently in scope:
- **AI/ML and LLM research** — models, labs, techniques, benchmarks, tooling, training methods, inference systems, evaluation methods, and notable people/organizations in the modern AI ecosystem
- **AI agents and Hermes operations** — agent workflows, tool use, gateway behavior, provider/model configuration, MCP, automation patterns, debugging notes, and operational practices
- **Quantitative investing and market research** — backtesting systems, factor models, portfolio construction, execution assumptions, market structure, strategy evaluation, data pipelines, and research artifacts
- **Startup ecosystem and support programs** — accelerators, grants, public support portals, startup operations, fundraising support, export support, regional innovation centers, and ecosystem mapping
- **Infrastructure, cloud, and robotics** — virtualization, storage, networking, backup/DR, private cloud, DevOps, GPU infrastructure, homelab/IoT systems, and robotics trends
- **Personal knowledge, career, and lifestyle** — role history, business strategy, investing, language learning, self-development, travel, parenting, design interests, and recurring personal projects
- **Sales, negotiation, and revenue operations** — B2B sales process, qualification, objection handling, negotiation, proposal strategy, closing, CRM, and expansion motions

## Domain Handling Rules
- A single wiki can cover multiple domains as long as they are explicitly listed here
- Every page should have a clear primary domain reflected in its tags
- Cross-domain pages are allowed when they create real synthesis (for example, AI agents for research automation in quant workflows)
- Do not create pages outside these domains unless the user asks or this schema is updated first
- If a new recurring interest appears across multiple sessions, add it here before creating many pages in that area

## Conventions
- File names: lowercase, hyphens, no spaces (e.g., `transformer-architecture.md`)
- Every wiki page starts with YAML frontmatter
- Use `[[wikilinks]]` to link between pages (minimum 2 outbound links per page)
- When updating a page, always bump the `updated` date
- Every new page must be added to `index.md` under the correct section
- Every action must be appended to `log.md`
- Raw sources under `raw/` are immutable; corrections go in wiki pages, not the raw source files
- Keep pages concise and scannable; split pages that grow beyond ~200 lines
- Multi-domain pages should include at least one domain tag from the taxonomy (`ai-research`, `agents`, `hermes`, `quant`, `market-research`, `startup`, `infrastructure`, `robotics`, `personal-knowledge`, `sales`)
- If a page spans multiple domains, list the primary domain tag first in `tags:`

## Frontmatter
```yaml
---
title: Page Title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [from taxonomy below]
sources: [raw/articles/source-name.md]
---
```

## Tag Taxonomy
- Domain: ai-research, agents, hermes, quant, market-research, startup, infrastructure, robotics, personal-knowledge, sales
- Models: model, architecture, multimodal, open-weight, benchmark
- People/Orgs: person, company, lab, open-source
- Techniques: training, fine-tuning, inference, alignment, data, optimization, agent, tool-use, backtesting, factor-model, portfolio, virtualization, storage, networking, backup-dr, ci-cd, monitoring, mlops, automation, language-learning, qualification, discovery, negotiation, objection-handling, closing
- Systems: serving, evaluation, infrastructure, product, automation, workflow, dashboard, api, private-cloud, gpu, homelab, iot, crm, revenue-ops
- Meta: comparison, timeline, controversy, prediction, safety, career, parenting, travel, finance, interior-design, roi

Rule: every tag on a page must appear in this taxonomy. If a new tag is needed, add it here first, then use it.

## Page Thresholds
- **Create a page** when an entity/concept appears in 2+ sources OR is central to one source
- **Add to existing page** when a source mentions something already covered
- **DON'T create a page** for passing mentions, minor details, or things outside the domain
- **Split a page** when it exceeds ~200 lines — break into sub-topics with cross-links
- **Archive a page** when its content is fully superseded — move to `_archive/`, remove from index

## Entity Pages
One page per notable entity. Include:
- Overview / what it is
- Key facts and dates
- Relationships to other entities (`[[wikilinks]]`)
- Source references

## Concept Pages
One page per concept or topic. Include:
- Definition / explanation
- Current state of knowledge
- Open questions or debates
- Related concepts (`[[wikilinks]]`)

## Comparison Pages
Side-by-side analyses. Include:
- What is being compared and why
- Dimensions of comparison (table format preferred)
- Verdict or synthesis
- Sources

## Update Policy
When new information conflicts with existing content:
1. Check the dates — newer sources generally supersede older ones
2. If genuinely contradictory, note both positions with dates and sources
3. Mark the contradiction in frontmatter: `contradictions: [page-name]`
4. Flag for user review in the lint report
