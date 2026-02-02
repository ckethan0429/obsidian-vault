# EP01 (EN, B2) — Claude Code core features in 5 minutes

Hi everyone. Today, I want to explain four core features in Claude Code that really change how you work: **Subagents, Skills, Hooks, and Plugins**.
If you understand these, you can move from “writing better prompts” to **building a repeatable system** for your daily workflow.

Here’s the simplest way to think about it:
- **Skills** store *how you want work to be done*.
- **Hooks** *automate or enforce* rules at specific moments.
- **Subagents** let you *split work into separate contexts*, so your main chat stays clean.
- **Plugins** package everything so you can *share and reuse it* across projects or teams.

First, **Subagents**.
A subagent is like a specialized helper Claude, running in its own context.
For example, you can use a read-only exploration agent to search the codebase, find files, and summarize structure—without polluting your main conversation.
Claude Code even includes built-in agents like **Explore**, which is optimized for fast, read-only research.

Next, **Skills**.
Skills are reusable instructions saved as a `SKILL.md` file.
You can use them to encode team conventions—like API error formats, naming rules, or code review checklists—so you don’t have to explain the same things again and again.

A good rule: create a skill when the task is **repeated**, the output needs to be **consistent**, and mistakes are **costly**.

And if a workflow has side effects—like deployment—you usually want to prevent automatic execution.
So you can set something like `disable-model-invocation: true`, and run it only when you explicitly call it.

Third, **Hooks**.
Hooks are automated actions that run at specific points in Claude Code’s lifecycle.
For example, you can block risky commands like `rm -rf` before they run, or automatically run formatting and lint checks after file edits.
If skills are your “manual,” hooks are your “guardrails and automation.”

Finally, **Plugins**.
Project-level config in `.claude/` is great for quick experiments. But if you want to share your setup with a team, plugins are the better option.
Plugins bundle skills, agents, hooks, and more, with versioning and distribution.
The tradeoff is namespacing—commands become something like `/my-plugin:review`—but that also prevents conflicts.

A practical order to start is:
1) create local skills in `.claude/skills/`,
2) add hooks for safety and automation,
3) use subagents when context gets messy,
4) and package everything into a plugin once it’s stable.

Thanks for listening. If you want, next time we can take five real tasks from your workflow and decide whether each one should become a skill, a hook, a subagent, or a plugin.
