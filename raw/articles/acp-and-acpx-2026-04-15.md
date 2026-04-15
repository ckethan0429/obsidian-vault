# Source URLs
https://casys.ai/blog/acpx-multi-agent-orchestration
https://docs.openclaw.ai/ko/tools/acp-agents

# Retrieved
2026-04-15

# ACP and ACPX — Raw Source Notes

## Source 1 — CASYS blog
Title: `ACPX Inside Claude Code: Practical Multi-Agent Orchestration`
Date: `March 23, 2026`

### Copied excerpts
> When Claude Code needs to invoke another coding agent — Codex CLI, Gemini CLI, or any other tool — the default mechanism is PTY scraping. The orchestrator spawns a child process, attaches to its pseudo-terminal, and reads the raw character stream.

> What gets lost:
> - Structured metadata: tool call names, parameters, return types — flattened into text
> - Thinking steps: the agent’s reasoning chain, gone
> - Diffs and file changes: embedded in a stream of ANSI codes
> - Error semantics: a crash and a formatted error message look the same

> The Agent Client Protocol (ACP) was created by Zed Industries.

> ACP solves the same problem that LSP solved for language tooling: the M×N integration problem. Without LSP, every editor needed a custom integration for every language. Without ACP, every orchestrator needs a custom adapter for every agent.

> ACP is JSON-RPC 2 over stdio (HTTP transport is in development).

> The key insight: ACP does not replace MCP. MCP connects agents to tools and data sources. ACP connects clients to agents.

> ACPX (openclaw/acpx, MIT) is a headless, scriptable CLI client for ACP. Think of it as curl for agent sessions — no UI, no editor, just structured protocol communication.

> What ACPX gives you
> - Persistent sessions scoped to repository + agent + optional name.
> - Prompt queueing.
> - Crash reconnect.
> - Fire-and-forget mode (--no-wait).
> - Structured output.

> Claude Code has three native orchestration mechanisms. Each solves a different problem.
> - Subagents (.claude/agents/): specialized tasks within one Claude session
> - Agent Teams: parallel Claude Code instances on one repo
> - ACPX: invoking non-Claude agents (Codex, Gemini, etc.)

> The practical difference: when a subagent returns a result, you get a text blob. When an ACPX session returns a result, you get structured events — which tool was called, what files were modified, what the agent’s reasoning was.

> Anthropic closed the feature request for native ACP support in Claude Code (issue #6686) as NOT_PLANNED.

> ACPX itself includes a built-in Claude adapter that wraps Claude Code’s CLI interface into an ACP-compatible session.

> In extensions/acpx/src/config.ts, a constant is hardcoded:
> export const ACPX_PINNED_VERSION = "0.1.16";

> But extensions/acpx/package.json already declares "acpx": "0.3.0" as the bundled dependency.

> Workaround if you hit this before a fix lands:
> openclaw config set plugins.entries.acpx.config.expectedVersion any
> openclaw gateway restart

### Raw command examples copied from the article
```bash
npm install -g acpx@latest

acpx claude "refactor the auth middleware to use JWT"
acpx codex "fix the failing integration tests"

acpx claude -s backend "add rate limiting to the API"
acpx codex -s frontend "migrate the dashboard to React 19"
```

```bash
acpx codex -s tests "write integration tests for the new auth middleware"
acpx claude -s backend "add Redis caching to the query layer"
acpx codex -s frontend "migrate the dashboard components to the new design system"
acpx sessions list
```

## Source 2 — OpenClaw docs (Korean)
Title: `ACP Agents - OpenClaw`
URL: `https://docs.openclaw.ai/ko/tools/acp-agents`

### Copied excerpts
> Agent Client Protocol (ACP) 세션을 사용하면 OpenClaw가 ACP 백엔드 plugin을 통해 외부 코딩 harness(예: Pi, Claude Code, Codex, Cursor, Copilot, OpenClaw ACP, OpenCode, Gemini CLI 및 기타 지원되는 ACPX harness)를 실행할 수 있습니다.

> OpenClaw에 자연어로 “이걸 Codex에서 실행해” 또는 “이 스레드에서 Claude Code를 시작해”라고 요청하면, OpenClaw는 그 요청을 ACP 런타임으로 라우팅해야 합니다(네이티브 서브에이전트 런타임이 아님).

> Codex나 Claude Code가 기존 OpenClaw 채널 대화에 외부 MCP 클라이언트로 직접 연결되도록 하려면 ACP 대신 openclaw mcp serve를 사용하세요.

> 가까이에 있으면서 헷갈리기 쉬운 표면이 세 가지 있습니다:
> - 외부 harness 실행: ACP agents
> - OpenClaw Gateway 세션을 ACP 서버로 노출: openclaw acp
> - 로컬 AI CLI를 텍스트 전용 대체 모델로 재사용: CLI 백엔드

> 보통은 그렇습니다. 새 설치에는 이제 번들된 acpx 런타임 plugin이 기본적으로 활성화되어 제공됩니다.

> 빠른 준비 상태 확인이 필요하면 /acp doctor부터 시작하세요.

> /acp spawn codex --bind here
> /acp spawn codex --mode persistent --thread auto

> 외부 harness 런타임이 필요하면 ACP를 사용하세요. OpenClaw 네이티브 위임 실행이 필요하면 서브에이전트를 사용하세요.

> ACP가 Claude Code를 실행하는 방식
> - OpenClaw ACP 세션 제어 평면
> - 번들된 acpx 런타임 plugin
> - Claude ACP adapter
> - Claude 측 런타임/세션 메커니즘

> /acp spawn, 바인딩 가능한 세션, 런타임 제어 또는 지속적인 harness 작업이 필요하면 ACP 사용

> 현재 대화 바인딩
> 자식 스레드를 만들지 않고 현재 대화를 지속적인 ACP 워크스페이스로 만들고 싶다면 /acp spawn <harness> --bind here를 사용하세요.

> /acp close는 세션을 닫고 현재 대화 바인딩을 제거합니다.

> 현재 ACP 세션은 OpenClaw 샌드박스 내부가 아니라 호스트 런타임에서 실행됩니다.

> Sandboxed sessions cannot spawn ACP sessions because runtime="acp" runs on the host. Use runtime="subagent" from sandboxed sessions.

> 현재 acpx 내장 harness 별칭:
> claude, codex, copilot, cursor, droid, gemini, iflow, kilocode, kimi, kiro, openclaw, opencode, pi, qwen

> openclaw config set plugins.entries.acpx.config.pluginToolsMcpBridge true

> 기본적으로 ACPX 세션은 OpenClaw plugin이 등록한 도구를 ACP harness에 노출하지 않습니다.

> OpenClaw는 현재 기본값으로 permissionMode=approve-reads와 nonInteractivePermissions=fail을 사용합니다.

> non-interactive ACP 세션에서는 권한 프롬프트를 유발하는 모든 쓰기 또는 exec가 AcpRuntimeError: Permission prompt unavailable in non-interactive mode와 함께 실패할 수 있습니다.

### Raw command examples copied from the docs
```bash
/acp doctor
/acp spawn codex --bind here
/acp spawn codex --mode persistent --thread auto
/acp status
/acp model <provider/model>
/acp permissions <profile>
/acp timeout <seconds>
/acp steer tighten logging and continue
/acp cancel
/acp close
```

```bash
openclaw plugins install acpx
openclaw config set plugins.entries.acpx.enabled true
openclaw config set plugins.entries.acpx.config.pluginToolsMcpBridge true
openclaw config set plugins.entries.acpx.config.permissionMode approve-all
openclaw config set plugins.entries.acpx.config.nonInteractivePermissions fail
```

## Notes
- CASYS 글은 ACP를 프로토콜 관점, ACPX를 멀티 에이전트 오케스트레이션 관점에서 설명한다.
- OpenClaw 문서는 실제 운영자 관점에서 `/acp spawn`, 바인딩, 권한, 샌드박스 제한, plugin 설정까지 다룬다.
- 두 문서를 함께 보면 ACP = protocol, ACPX = practical runtime/client, OpenClaw ACP Agents = operational integration surface라는 구도가 명확하다.
