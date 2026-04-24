# Source URLs
https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
https://github.com/anthropics/claude-quickstarts/tree/main/autonomous-coding

# Retrieved
2026-04-15

# Effective harnesses for long-running agents — Raw source notes

## Source 1 — Anthropic Engineering
Title: `Effective harnesses for long-running agents`
Published: `2025-11-26`
URL: `https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents`

### Copied excerpts
> We developed a two-fold solution to enable the Claude Agent SDK to work effectively across many context windows: an initializer agent that sets up the environment on the first run, and a coding agent that is tasked with making incremental progress in every session, while leaving clear artifacts for the next session.

> Compaction isn’t sufficient.

> Claude’s failures manifested in two patterns. First, the agent tended to try to do too much at once—essentially to attempt to one-shot the app.

> A second failure mode would often occur later in a project. After some features had already been built, a later agent instance would look around, see that progress had been made, and declare the job done.

> We need to set up an initial environment that lays the foundation for all the features that a given prompt requires.

> We should prompt each agent to make incremental progress towards its goal while also leaving the environment in a clean state at the end of a session.

> The very first agent session uses a specialized prompt that asks the model to set up the initial environment: an `init.sh` script, a `claude-progress.txt` file that keeps a log of what agents have done, and an initial git commit that shows what files were added.

> The key insight here was finding a way for agents to quickly understand the state of work when starting with a fresh context window, which is accomplished with the `claude-progress.txt` file alongside the git history.

> To address the problem of the agent one-shotting an app or prematurely considering the project complete, we prompted the initializer agent to write a comprehensive file of feature requirements expanding on the user’s initial prompt.

> We landed on using JSON for this, as the model is less likely to inappropriately change or overwrite JSON files compared to Markdown files.

> Given this initial environment scaffolding, the next iteration of the coding agent was then asked to work on only one feature at a time.

> The best way to elicit this behavior was to ask the model to commit its progress to git with descriptive commit messages and to write summaries of its progress in a progress file.

> Claude mostly did well at verifying features end-to-end once explicitly prompted to use browser automation tools and do all testing as a human user would.

> Read the git logs and progress files to get up to speed on what was recently worked on.

> Read the features list file and choose the highest-priority feature that’s not yet done to work on.

## Raw structural notes
- Anthropic frames long-running agents as a **multi-context-window continuity problem**.
- The solution is behavioral as much as infrastructural: not just better memory, but better session discipline.
- The harness distinguishes two roles via prompting: **initializer agent** and **coding agent**.
- The environment scaffolding is explicit: `init.sh`, `claude-progress.txt`, feature list JSON, git history.
- The feature list acts as a guardrail against premature completion and overly broad implementation jumps.
- Git commits are used as both rollback checkpoints and durable communication artifacts.
- Browser automation is treated as necessary for realistic end-to-end verification, not optional polish.

## Why this raw exists
This file preserves Anthropic’s concrete harness practices for multi-session coding so they can be merged into the broader managed-agents architecture note.