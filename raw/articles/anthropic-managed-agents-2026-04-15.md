# Source URLs
https://www.anthropic.com/engineering/managed-agents
https://platform.claude.com/docs/en/managed-agents/overview

# Retrieved
2026-04-15

# Anthropic Managed Agents — Raw Source Notes

## Source 1 — Anthropic Engineering
Title: `Scaling Managed Agents: Decoupling the brain from the hands`
URL: `https://www.anthropic.com/engineering/managed-agents`

### Copied excerpts
> Harnesses encode assumptions that go stale as models improve.

> We expect harnesses to continue evolving. So we built Managed Agents: a hosted service in the Claude Platform that runs long-horizon agents on your behalf through a small set of interfaces meant to outlast any particular implementation—including the ones we run today.

> Managed Agents follow the same pattern. We virtualized the components of an agent: a session (the append-only log of everything that happened), a harness (the loop that calls Claude and routes Claude’s tool calls to the relevant infrastructure), and a sandbox (an execution environment where Claude can run code and edit files).

> By coupling everything into one container, we ran into an old infrastructure problem: we’d adopted a pet.

> Decoupling the brain from the hands meant the harness no longer lived inside the container. It called the container the way it called any other tool: `execute(name, input) → string`.

> Because the session log sits outside the harness, nothing in the harness needs to survive a crash. When one fails, a new one can be rebooted with `wake(sessionId)`, use `getSession(id)` to get back the event log, and resume from the last event.

> The structural fix was to make sure the tokens are never reachable from the sandbox where Claude’s generated code runs.

> The interface, `getEvents()`, allows the brain to interrogate context by selecting positional slices of the event stream.

> Decoupling the brain from the hands means that containers are provisioned by the brain via a tool call (`execute(name, input) → string`) only if they are needed.

> Using this architecture, our p50 TTFT dropped roughly 60% and p95 dropped over 90%.

> Decoupling the brain from the hands makes each hand a tool, `execute(name, input) → string`: a name and input go in, and a string is returned. That interface supports any custom tool, any MCP server, and our own tools.

> Managed Agents can accommodate any of these, matching Claude’s intelligence over time.

## Raw structural notes
- Main problem framing: harness logic hard-codes assumptions about current model weaknesses, but those assumptions expire as models improve.
- Anthropic treats Managed Agents as a **meta-harness** rather than one fixed harness.
- Core abstractions are deliberately stable: `session`, `harness`, `sandbox`.
- The article repeatedly argues for interface stability over implementation stability.
- The migration path was from a single-container, tightly coupled architecture toward independently replaceable components.

## Key implementation ideas mentioned
- Externalized event log for durability and resume
- Stateless/restartable harness workers
- Sandboxes/tools treated as interchangeable “hands”
- Secure credential handling via resource-bound auth and vault-backed MCP proxying
- Context outside the model context window via session log + `getEvents()`
- Lazy provisioning of sandboxes only when needed
- One brain can use many hands; many brains can be scaled independently

## Why this raw exists
This file preserves the article’s architecture claims and key copied excerpts for later concept extraction into the wiki.