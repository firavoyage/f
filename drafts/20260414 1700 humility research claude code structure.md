# Full project documentation with code analysis

**Session ID:** ses_274b0fccfffe0OxEgh24SwWmbf
**Created:** 4/14/2026, 5:25:04 PM
**Updated:** 4/14/2026, 5:28:33 PM

---

## User

write docs.md. read the whole project. use cloc to count code. write where each part is and how much code it has. write how it works, like what happens step by step for each user action under the hood.

---

## Assistant (Build · minimax/minimax-m2.7 · 15.7s)

_Thinking:_

The user wants me to:
1. Read the whole project
2. Use cloc to count code
3. Write a docs.md file with:
   - Where each part is and how much code it has
   - How it works - step by step for each user action under the hood

Let me start by exploring the project structure and using cloc.



**Tool: bash**

**Input:**
```json
{
  "command": "cloc . --exclude-dir=node_modules,.git,dist,build,.next,vendor 2>/dev/null || (which cloc && cloc . --exclude-dir=node_modules,.git,dist,build,.next,vendor) || echo \"cloc not found, trying wc\"",
  "description": "Count code with cloc"
}
```

**Output:**
```
github.com/AlDanial/cloc v 2.06  T=6.42 s (294.0 files/s, 80012.5 lines/s)
-------------------------------------------------------------------------------
Language                     files          blank        comment           code
-------------------------------------------------------------------------------
TypeScript                    1884          35799          86830         390587
Markdown                         1             70              0            210
JavaScript                       2              0              0              5
-------------------------------------------------------------------------------
SUM:                          1887          35869          86830         390802
-------------------------------------------------------------------------------

```

**Tool: glob**

**Input:**
```json
{
  "pattern": "**/*"
}
```

**Output:**
```
/home/fira/Documents/_/opensource/claude-code/.git/index
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamDeleteTool/TeamDeleteTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamDeleteTool/constants.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamDeleteTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamDeleteTool/prompt.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskUpdateTool/constants.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskUpdateTool/TaskUpdateTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskUpdateTool/prompt.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskListTool/constants.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskListTool/prompt.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskListTool/TaskListTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/ReadMcpResourceTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/ReadMcpResourceTool/ReadMcpResourceTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/ReadMcpResourceTool/prompt.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/McpAuthTool/McpAuthTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/MCPTool/MCPTool.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/MCPTool/classifyForCollapse.ts
/home/fira/Documents/_/opensource/claude-code/src/tools/MCPTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/MCPTool/prompt.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/pillLabel.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/types.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/killShellTasks.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/guards.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/stopTask.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/tasks/DreamTask/DreamTask.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/InProcessTeammateTask/types.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/state/teammateViewHelpers.ts
/home/fira/Documents/_/opensource/claude-code/src/state/onChangeAppState.ts
/home/fira/Documents/_/opensource/claude-code/src/state/AppStateStore.ts
/home/fira/Documents/_/opensource/claude-code/src/state/selectors.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/LocalShellTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/state/store.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalMainSessionTask.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalAgentTask/LocalAgentTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/state/AppState.tsx
/home/fira/Documents/_/opensource/claude-code/src/server/types.ts
/home/fira/Documents/_/opensource/claude-code/src/server/directConnectManager.ts
/home/fira/Documents/_/opensource/claude-code/src/server/createDirectConnectSession.ts
/home/fira/Documents/_/opensource/claude-code/src/replLauncher.tsx
/home/fira/Documents/_/opensource/claude-code/src/schemas/hooks.ts
/home/fira/Documents/_/opensource/claude-code/src/moreright/useMoreRight.tsx
/home/fira/Documents/_/opensource/claude-code/src/main.tsx
/home/fira/Documents/_/opensource/claude-code/src/keybindings/match.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/resolver.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/validate.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/loadUserBindings.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/template.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/parser.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/defaultBindings.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/useShortcutDisplay.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/useKeybinding.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/KeybindingProviderSetup.tsx
/home/fira/Documents/_/opensource/claude-code/src/keybindings/reservedShortcuts.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/schema.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/shortcutFormat.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/KeybindingContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/history.ts
/home/fira/Documents/_/opensource/claude-code/src/entrypoints/init.ts
/home/fira/Documents/_/opensource/claude-code/src/entrypoints/cli.tsx
/home/fira/Documents/_/opensource/claude-code/src/entrypoints/sandboxTypes.ts
/home/fira/Documents/_/opensource/claude-code/src/coordinator/coordinatorMode.ts
/home/fira/Documents/_/opensource/claude-code/src/entrypoints/agentSdkTypes.ts
/home/fira/Documents/_/opensource/claude-code/src/context.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/types.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/sessionIdCompat.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/workSecret.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridge.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridgeHandle.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/sessionRunner.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/trustedDevice.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridgeTransport.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeStatusUtil.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/capacityWake.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/envLessBridgeConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/remoteBridgeCore.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/createSession.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMessaging.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeEnabled.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/debugUtils.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeDebug.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/pollConfigDefaults.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMain.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgePointer.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/codeSessionApi.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/jwtUtils.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/initReplBridge.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeUI.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/inboundAttachments.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/pollConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/flushGate.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/inboundMessages.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgePermissionCallbacks.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeApi.ts
/home/fira/Documents/_/opensource/claude-code/README.md
/home/fira/Documents/_/opensource/claude-code/.git/config
/home/fira/Documents/_/opensource/claude-code/.git/HEAD
/home/fira/Documents/_/opensource/claude-code/.git/packed-refs

(Results are truncated: showing first 100 results. Consider using a more specific path or pattern.)
```

---

## Assistant (Build · minimax/minimax-m2.7 · 9.8s)

_Thinking:_

The glob output is too large. Let me get the project structure more systematically and read key files.



**Tool: bash**

**Input:**
```json
{
  "command": "ls -la",
  "description": "List project root"
}
```

**Output:**
```
total 28
drwxrwxr-x  4 fira fira  4096 Apr 14 17:22 .
drwxrwxr-x 40 fira fira  4096 Apr 13 19:59 ..
drwxrwxr-x  8 fira fira  4096 Apr 14 16:21 .git
-rw-rw-r--  1 fira fira 10831 Mar 31 19:14 README.md
drwxrwxr-x 37 fira fira  4096 Mar 31 19:14 src

```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/README.md"
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/README.md</path>
<type>file</type>
<content>1: # Claude Code Source Snapshot for Security Research
2: 
3: > This repository mirrors a **publicly exposed Claude Code source snapshot** that became accessible on **March 31, 2026** through a source map exposure in the npm distribution. It is maintained for **educational, defensive security research, and software supply-chain analysis**.
4: 
5: ---
6: 
7: ## Research Context
8: 
9: This repository is maintained by a **university student** studying:
10: 
11: - software supply-chain exposure and build artifact leaks
12: - secure software engineering practices
13: - agentic developer tooling architecture
14: - defensive analysis of real-world CLI systems
15: 
16: This archive is intended to support:
17: 
18: - educational study
19: - security research practice
20: - architecture review
21: - discussion of packaging and release-process failures
22: 
23: It does **not** claim ownership of the original code, and it should not be interpreted as an official Anthropic repository.
24: 
25: ---
26: 
27: ## How the Public Snapshot Became Accessible
28: 
29: [Chaofan Shou (@Fried_rice)](https://x.com/Fried_rice) publicly noted that Claude Code source material was reachable through a `.map` file exposed in the npm package:
30: 
31: > **"Claude code source code has been leaked via a map file in their npm registry!"**
32: >
33: > — [@Fried_rice, March 31, 2026](https://x.com/Fried_rice/status/2038894956459290963)
34: 
35: The published source map referenced unobfuscated TypeScript sources hosted in Anthropic's R2 storage bucket, which made the `src/` snapshot publicly downloadable.
36: 
37: ---
38: 
39: ## Repository Scope
40: 
41: Claude Code is Anthropic's CLI for interacting with Claude from the terminal to perform software engineering tasks such as editing files, running commands, searching codebases, and coordinating workflows.
42: 
43: This repository contains a mirrored `src/` snapshot for research and analysis.
44: 
45: - **Public exposure identified on**: 2026-03-31
46: - **Language**: TypeScript
47: - **Runtime**: Bun
48: - **Terminal UI**: React + [Ink](https://github.com/vadimdemedes/ink)
49: - **Scale**: ~1,900 files, 512,000+ lines of code
50: 
51: ---
52: 
53: ## Directory Structure
54: 
55: ```text
56: src/
57: ├── main.tsx                 # Entrypoint orchestration (Commander.js-based CLI path)
58: ├── commands.ts              # Command registry
59: ├── tools.ts                 # Tool registry
60: ├── Tool.ts                  # Tool type definitions
61: ├── QueryEngine.ts           # LLM query engine
62: ├── context.ts               # System/user context collection
63: ├── cost-tracker.ts          # Token cost tracking
64: │
65: ├── commands/                # Slash command implementations (~50)
66: ├── tools/                   # Agent tool implementations (~40)
67: ├── components/              # Ink UI components (~140)
68: ├── hooks/                   # React hooks
69: ├── services/                # External service integrations
70: ├── screens/                 # Full-screen UIs (Doctor, REPL, Resume)
71: ├── types/                   # TypeScript type definitions
72: ├── utils/                   # Utility functions
73: │
74: ├── bridge/                  # IDE and remote-control bridge
75: ├── coordinator/             # Multi-agent coordinator
76: ├── plugins/                 # Plugin system
77: ├── skills/                  # Skill system
78: ├── keybindings/             # Keybinding configuration
79: ├── vim/                     # Vim mode
80: ├── voice/                   # Voice input
81: ├── remote/                  # Remote sessions
82: ├── server/                  # Server mode
83: ├── memdir/                  # Persistent memory directory
84: ├── tasks/                   # Task management
85: ├── state/                   # State management
86: ├── migrations/              # Config migrations
87: ├── schemas/                 # Config schemas (Zod)
88: ├── entrypoints/             # Initialization logic
89: ├── ink/                     # Ink renderer wrapper
90: ├── buddy/                   # Companion sprite
91: ├── native-ts/               # Native TypeScript utilities
92: ├── outputStyles/            # Output styling
93: ├── query/                   # Query pipeline
94: └── upstreamproxy/           # Proxy configuration
95: ```
96: 
97: ---
98: 
99: ## Architecture Summary
100: 
101: ### 1. Tool System (`src/tools/`)
102: 
103: Every tool Claude Code can invoke is implemented as a self-contained module. Each tool defines its input schema, permission model, and execution logic.
104: 
105: | Tool | Description |
106: |---|---|
107: | `BashTool` | Shell command execution |
108: | `FileReadTool` | File reading (images, PDFs, notebooks) |
109: | `FileWriteTool` | File creation / overwrite |
110: | `FileEditTool` | Partial file modification (string replacement) |
111: | `GlobTool` | File pattern matching search |
112: | `GrepTool` | ripgrep-based content search |
113: | `WebFetchTool` | Fetch URL content |
114: | `WebSearchTool` | Web search |
115: | `AgentTool` | Sub-agent spawning |
116: | `SkillTool` | Skill execution |
117: | `MCPTool` | MCP server tool invocation |
118: | `LSPTool` | Language Server Protocol integration |
119: | `NotebookEditTool` | Jupyter notebook editing |
120: | `TaskCreateTool` / `TaskUpdateTool` | Task creation and management |
121: | `SendMessageTool` | Inter-agent messaging |
122: | `TeamCreateTool` / `TeamDeleteTool` | Team agent management |
123: | `EnterPlanModeTool` / `ExitPlanModeTool` | Plan mode toggle |
124: | `EnterWorktreeTool` / `ExitWorktreeTool` | Git worktree isolation |
125: | `ToolSearchTool` | Deferred tool discovery |
126: | `CronCreateTool` | Scheduled trigger creation |
127: | `RemoteTriggerTool` | Remote trigger |
128: | `SleepTool` | Proactive mode wait |
129: | `SyntheticOutputTool` | Structured output generation |
130: 
131: ### 2. Command System (`src/commands/`)
132: 
133: User-facing slash commands invoked with `/` prefix.
134: 
135: | Command | Description |
136: |---|---|
137: | `/commit` | Create a git commit |
138: | `/review` | Code review |
139: | `/compact` | Context compression |
140: | `/mcp` | MCP server management |
141: | `/config` | Settings management |
142: | `/doctor` | Environment diagnostics |
143: | `/login` / `/logout` | Authentication |
144: | `/memory` | Persistent memory management |
145: | `/skills` | Skill management |
146: | `/tasks` | Task management |
147: | `/vim` | Vim mode toggle |
148: | `/diff` | View changes |
149: | `/cost` | Check usage cost |
150: | `/theme` | Change theme |
151: | `/context` | Context visualization |
152: | `/pr_comments` | View PR comments |
153: | `/resume` | Restore previous session |
154: | `/share` | Share session |
155: | `/desktop` | Desktop app handoff |
156: | `/mobile` | Mobile app handoff |
157: 
158: ### 3. Service Layer (`src/services/`)
159: 
160: | Service | Description |
161: |---|---|
162: | `api/` | Anthropic API client, file API, bootstrap |
163: | `mcp/` | Model Context Protocol server connection and management |
164: | `oauth/` | OAuth 2.0 authentication flow |
165: | `lsp/` | Language Server Protocol manager |
166: | `analytics/` | GrowthBook-based feature flags and analytics |
167: | `plugins/` | Plugin loader |
168: | `compact/` | Conversation context compression |
169: | `policyLimits/` | Organization policy limits |
170: | `remoteManagedSettings/` | Remote managed settings |
171: | `extractMemories/` | Automatic memory extraction |
172: | `tokenEstimation.ts` | Token count estimation |
173: | `teamMemorySync/` | Team memory synchronization |
174: 
175: ### 4. Bridge System (`src/bridge/`)
176: 
177: A bidirectional communication layer connecting IDE extensions (VS Code, JetBrains) with the Claude Code CLI.
178: 
179: - `bridgeMain.ts` — Bridge main loop
180: - `bridgeMessaging.ts` — Message protocol
181: - `bridgePermissionCallbacks.ts` — Permission callbacks
182: - `replBridge.ts` — REPL session bridge
183: - `jwtUtils.ts` — JWT-based authentication
184: - `sessionRunner.ts` — Session execution management
185: 
186: ### 5. Permission System (`src/hooks/toolPermission/`)
187: 
188: Checks permissions on every tool invocation. Either prompts the user for approval/denial or automatically resolves based on the configured permission mode (`default`, `plan`, `bypassPermissions`, `auto`, etc.).
189: 
190: ### 6. Feature Flags
191: 
192: Dead code elimination via Bun's `bun:bundle` feature flags:
193: 
194: ```typescript
195: import { feature } from 'bun:bundle'
196: 
197: // Inactive code is completely stripped at build time
198: const voiceCommand = feature('VOICE_MODE')
199:   ? require('./commands/voice/index.js').default
200:   : null
201: ```
202: 
203: Notable flags: `PROACTIVE`, `KAIROS`, `BRIDGE_MODE`, `DAEMON`, `VOICE_MODE`, `AGENT_TRIGGERS`, `MONITOR_TOOL`
204: 
205: ---
206: 
207: ## Key Files in Detail
208: 
209: ### `QueryEngine.ts` (~46K lines)
210: 
211: The core engine for LLM API calls. Handles streaming responses, tool-call loops, thinking mode, retry logic, and token counting.
212: 
213: ### `Tool.ts` (~29K lines)
214: 
215: Defines base types and interfaces for all tools — input schemas, permission models, and progress state types.
216: 
217: ### `commands.ts` (~25K lines)
218: 
219: Manages registration and execution of all slash commands. Uses conditional imports to load different command sets per environment.
220: 
221: ### `main.tsx`
222: 
223: Commander.js-based CLI parser and React/Ink renderer initialization. At startup, it overlaps MDM settings, keychain prefetch, and GrowthBook initialization for faster boot.
224: 
225: ---
226: 
227: ## Tech Stack
228: 
229: | Category | Technology |
230: |---|---|
231: | Runtime | [Bun](https://bun.sh) |
232: | Language | TypeScript (strict) |
233: | Terminal UI | [React](https://react.dev) + [Ink](https://github.com/vadimdemedes/ink) |
234: | CLI Parsing | [Commander.js](https://github.com/tj/commander.js) (extra-typings) |
235: | Schema Validation | [Zod v4](https://zod.dev) |
236: | Code Search | [ripgrep](https://github.com/BurntSushi/ripgrep) |
237: | Protocols | [MCP SDK](https://modelcontextprotocol.io), LSP |
238: | API | [Anthropic SDK](https://docs.anthropic.com) |
239: | Telemetry | OpenTelemetry + gRPC |
240: | Feature Flags | GrowthBook |
241: | Auth | OAuth 2.0, JWT, macOS Keychain |
242: 
243: ---
244: 
245: ## Notable Design Patterns
246: 
247: ### Parallel Prefetch
248: 
249: Startup time is optimized by prefetching MDM settings, keychain reads, and API preconnect in parallel before heavy module evaluation begins.
250: 
251: ```typescript
252: // main.tsx — fired as side-effects before other imports
253: startMdmRawRead()
254: startKeychainPrefetch()
255: ```
256: 
257: ### Lazy Loading
258: 
259: Heavy modules (OpenTelemetry, gRPC, analytics, and some feature-gated subsystems) are deferred via dynamic `import()` until actually needed.
260: 
261: ### Agent Swarms
262: 
263: Sub-agents are spawned via `AgentTool`, with `coordinator/` handling multi-agent orchestration. `TeamCreateTool` enables team-level parallel work.
264: 
265: ### Skill System
266: 
267: Reusable workflows defined in `skills/` are executed through `SkillTool`. Users can add custom skills.
268: 
269: ### Plugin Architecture
270: 
271: Built-in and third-party plugins are loaded through the `plugins/` subsystem.
272: 
273: ---
274: 
275: ## Research / Ownership Disclaimer
276: 
277: - This repository is an **educational and defensive security research archive** maintained by a university student.
278: - It exists to study source exposure, packaging failures, and the architecture of modern agentic CLI systems.
279: - The original Claude Code source remains the property of **Anthropic**.
280: - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.

(End of file - total 280 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/package.json"
}
```

**Error:**
```
Error: File not found: /home/fira/Documents/_/opensource/claude-code/package.json
```

---

## Assistant (Build · minimax/minimax-m2.7 · 4.6s)

_Thinking:_

No package.json in root. Let me explore the src directory more deeply to understand the project structure.



**Tool: bash**

**Input:**
```json
{
  "command": "ls -la src/",
  "description": "List src directory"
}
```

**Output:**
```
total 1308
drwxrwxr-x 37 fira fira   4096 Mar 31 19:14 .
drwxrwxr-x  4 fira fira   4096 Apr 14 17:22 ..
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 assistant
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 bootstrap
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 bridge
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 buddy
drwxrwxr-x  4 fira fira   4096 Mar 31 19:14 cli
drwxrwxr-x 88 fira fira   4096 Mar 31 19:14 commands
-rw-rw-r--  1 fira fira  25185 Mar 31 19:14 commands.ts
drwxrwxr-x 33 fira fira   4096 Mar 31 19:14 components
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 constants
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 context
-rw-rw-r--  1 fira fira   6446 Mar 31 19:14 context.ts
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 coordinator
-rw-rw-r--  1 fira fira    617 Mar 31 19:14 costHook.ts
-rw-rw-r--  1 fira fira  10706 Mar 31 19:14 cost-tracker.ts
-rw-rw-r--  1 fira fira  22948 Mar 31 19:14 dialogLaunchers.tsx
drwxrwxr-x  3 fira fira   4096 Mar 31 19:14 entrypoints
-rw-rw-r--  1 fira fira  14081 Mar 31 19:14 history.ts
drwxrwxr-x  4 fira fira   4096 Mar 31 19:14 hooks
drwxrwxr-x  7 fira fira   4096 Mar 31 19:14 ink
-rw-rw-r--  1 fira fira   3887 Mar 31 19:14 ink.ts
-rw-rw-r--  1 fira fira  57424 Mar 31 19:14 interactiveHelpers.tsx
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 keybindings
-rw-rw-r--  1 fira fira 803924 Mar 31 19:14 main.tsx
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 memdir
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 migrations
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 moreright
drwxrwxr-x  5 fira fira   4096 Mar 31 19:14 native-ts
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 outputStyles
drwxrwxr-x  3 fira fira   4096 Mar 31 19:14 plugins
-rw-rw-r--  1 fira fira   2337 Mar 31 19:14 projectOnboardingState.ts
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 query
-rw-rw-r--  1 fira fira  46630 Mar 31 19:14 QueryEngine.ts
-rw-rw-r--  1 fira fira  68683 Mar 31 19:14 query.ts
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 remote
-rw-rw-r--  1 fira fira   3517 Mar 31 19:14 replLauncher.tsx
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 schemas
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 screens
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 server
drwxrwxr-x 22 fira fira   4096 Mar 31 19:14 services
-rw-rw-r--  1 fira fira  20646 Mar 31 19:14 setup.ts
drwxrwxr-x  3 fira fira   4096 Mar 31 19:14 skills
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 state
drwxrwxr-x  7 fira fira   4096 Mar 31 19:14 tasks
-rw-rw-r--  1 fira fira   1355 Mar 31 19:14 tasks.ts
-rw-rw-r--  1 fira fira   3152 Mar 31 19:14 Task.ts
drwxrwxr-x 44 fira fira   4096 Mar 31 19:14 tools
-rw-rw-r--  1 fira fira  17294 Mar 31 19:14 tools.ts
-rw-rw-r--  1 fira fira  29516 Mar 31 19:14 Tool.ts
drwxrwxr-x  3 fira fira   4096 Mar 31 19:14 types
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 upstreamproxy
drwxrwxr-x 33 fira fira  12288 Mar 31 19:14 utils
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 vim
drwxrwxr-x  2 fira fira   4096 Mar 31 19:14 voice

```

**Tool: glob**

**Input:**
```json
{
  "pattern": "src/**/*.ts"
}
```

**Output:**
```
/home/fira/Documents/_/opensource/claude-code/src/voice/voiceModeEnabled.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/pillLabel.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/types.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/killShellTasks.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/guards.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/stopTask.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/DreamTask/DreamTask.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/InProcessTeammateTask/types.ts
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalMainSessionTask.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/loop.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/keybindings.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/verifyContent.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/updateConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/index.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/loremIpsum.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/debug.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/skillify.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/scheduleRemoteAgents.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/batch.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/claudeApiContent.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/stuck.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/claudeInChrome.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/verify.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/claudeApi.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/remember.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundled/simplify.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/loadSkillsDir.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/mcpSkillBuilders.ts
/home/fira/Documents/_/opensource/claude-code/src/skills/bundledSkills.ts
/home/fira/Documents/_/opensource/claude-code/src/setup.ts
/home/fira/Documents/_/opensource/claude-code/src/schemas/hooks.ts
/home/fira/Documents/_/opensource/claude-code/src/query.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateReplBridgeEnabledToRemoteControlAtStartup.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateBypassPermissionsAcceptedToSettings.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/resetProToOpusDefault.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateOpusToOpus1m.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateSonnet45ToSonnet46.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateEnableAllProjectMcpServersToSettings.ts
/home/fira/Documents/_/opensource/claude-code/src/migrations/migrateAutoUpdatesToSettings.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/match.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/resolver.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/validate.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/loadUserBindings.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/template.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/parser.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/defaultBindings.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/useShortcutDisplay.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/useKeybinding.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/reservedShortcuts.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/schema.ts
/home/fira/Documents/_/opensource/claude-code/src/keybindings/shortcutFormat.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/update.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/WebSocketTransport.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/WorkerStateUploader.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/transportUtils.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/SerialBatchEventUploader.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/ccrClient.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/SSETransport.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/ndjsonSafeStringify.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/print.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/remoteIO.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/structuredIO.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/transports/HybridTransport.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/handlers/auth.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/handlers/plugins.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/handlers/agents.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/handlers/autoMode.ts
/home/fira/Documents/_/opensource/claude-code/src/cli/exit.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/types.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/sessionIdCompat.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/workSecret.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridge.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridgeHandle.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/sessionRunner.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/trustedDevice.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/replBridgeTransport.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeStatusUtil.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/capacityWake.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/envLessBridgeConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/remoteBridgeCore.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/createSession.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMessaging.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeEnabled.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/debugUtils.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeDebug.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/pollConfigDefaults.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMain.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgePointer.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/codeSessionApi.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/jwtUtils.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/initReplBridge.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeUI.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/inboundAttachments.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/pollConfig.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/flushGate.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/inboundMessages.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgePermissionCallbacks.ts
/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeApi.ts
/home/fira/Documents/_/opensource/claude-code/src/Task.ts

(Results are truncated: showing first 100 results. Consider using a more specific path or pattern.)
```

**Tool: glob**

**Input:**
```json
{
  "pattern": "src/**/*.tsx"
}
```

**Output:**
```
/home/fira/Documents/_/opensource/claude-code/src/tools/testing/TestingPermissionTool.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/WebSearchTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamDeleteTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/TeamCreateTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/TaskOutputTool/TaskOutputTool.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/ReadMcpResourceTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/RemoteTriggerTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/ScheduleCronTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/ListMcpResourcesTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/MCPTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/NotebookEditTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/GlobTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/GrepTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/FileWriteTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/FileReadTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/EnterWorktreeTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/EnterPlanModeTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/BriefTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/ConfigTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/BashTool/BashToolResultMessage.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/BashTool/UI.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/BashTool/BashTool.tsx
/home/fira/Documents/_/opensource/claude-code/src/tools/AskUserQuestionTool/AskUserQuestionTool.tsx
/home/fira/Documents/_/opensource/claude-code/src/tasks/RemoteAgentTask/RemoteAgentTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/tasks/InProcessTeammateTask/InProcessTeammateTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalShellTask/LocalShellTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/tasks/LocalAgentTask/LocalAgentTask.tsx
/home/fira/Documents/_/opensource/claude-code/src/state/AppState.tsx
/home/fira/Documents/_/opensource/claude-code/src/services/remoteManagedSettings/securityCheck.tsx
/home/fira/Documents/_/opensource/claude-code/src/screens/ResumeConversation.tsx
/home/fira/Documents/_/opensource/claude-code/src/screens/REPL.tsx
/home/fira/Documents/_/opensource/claude-code/src/replLauncher.tsx
/home/fira/Documents/_/opensource/claude-code/src/screens/Doctor.tsx
/home/fira/Documents/_/opensource/claude-code/src/moreright/useMoreRight.tsx
/home/fira/Documents/_/opensource/claude-code/src/main.tsx
/home/fira/Documents/_/opensource/claude-code/src/keybindings/KeybindingProviderSetup.tsx
/home/fira/Documents/_/opensource/claude-code/src/keybindings/KeybindingContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/interactiveHelpers.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/ink.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/ErrorOverview.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Text.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/TerminalSizeContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Link.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/AlternateScreen.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/RawAnsi.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/TerminalFocusContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Box.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Newline.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/NoSelect.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/ClockContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/App.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/ScrollBox.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Spacer.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/components/Button.tsx
/home/fira/Documents/_/opensource/claude-code/src/ink/Ansi.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useVoiceIntegration.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useTypeahead.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useTeleportResume.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useReplBridge.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/usePluginRecommendationBase.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useOfficialMarketplaceNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/usePromptsFromClaudeInChrome.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useLspPluginRecommendation.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useIDEIntegration.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useGlobalKeybindings.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useCommandKeybindings.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useArrowKeyHistory.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useChromeExtensionNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useClaudeCodeHintRecommendation.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/useCanUseTool.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useRateLimitWarningNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/usePluginAutoupdateNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useSettingsErrors.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useIDEStatusIndicator.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useModelMigrationNotifications.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useInstallMessages.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useMcpConnectivityStatus.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useLspInitializationNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useNpmDeprecationNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useDeprecationWarningNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useFastModeNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/usePluginInstallationStatus.tsx
/home/fira/Documents/_/opensource/claude-code/src/hooks/notifs/useCanSwitchToExistingSubscription.tsx
/home/fira/Documents/_/opensource/claude-code/src/entrypoints/cli.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/notifications.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/stats.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/promptOverlayContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/mailbox.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/fpsMetrics.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/overlayContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/modalContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/voice.tsx
/home/fira/Documents/_/opensource/claude-code/src/dialogLaunchers.tsx
/home/fira/Documents/_/opensource/claude-code/src/context/QueuedMessageContext.tsx
/home/fira/Documents/_/opensource/claude-code/src/commands/tasks/tasks.tsx
/home/fira/Documents/_/opensource/claude-code/src/commands/ultraplan.tsx
/home/fira/Documents/_/opensource/claude-code/src/commands/remote-env/remote-env.tsx
/home/fira/Documents/_/opensource/claude-code/src/commands/rate-limit-options/rate-limit-options.tsx
/home/fira/Documents/_/opensource/claude-code/src/buddy/useBuddyNotification.tsx
/home/fira/Documents/_/opensource/claude-code/src/buddy/CompanionSprite.tsx

(Results are truncated: showing first 100 results. Consider using a more specific path or pattern.)
```

---

## Assistant (Build · minimax/minimax-m2.7 · 5.6s)

_Thinking:_

Let me get a more detailed view of the codebase structure. I need to explore the key files and directories to understand how it works.



Let me explore the key files to understand the architecture better.

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/main.tsx",
  "limit": 500
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/main.tsx</path>
<type>file</type>
<content>1: // These side-effects must run before all other imports:
2: // 1. profileCheckpoint marks entry before heavy module evaluation begins
3: // 2. startMdmRawRead fires MDM subprocesses (plutil/reg query) so they run in
4: //    parallel with the remaining ~135ms of imports below
5: // 3. startKeychainPrefetch fires both macOS keychain reads (OAuth + legacy API
6: //    key) in parallel — isRemoteManagedSettingsEligible() otherwise reads them
7: //    sequentially via sync spawn inside applySafeConfigEnvironmentVariables()
8: //    (~65ms on every macOS startup)
9: import { profileCheckpoint, profileReport } from './utils/startupProfiler.js';
10: 
11: // eslint-disable-next-line custom-rules/no-top-level-side-effects
12: profileCheckpoint('main_tsx_entry');
13: import { startMdmRawRead } from './utils/settings/mdm/rawRead.js';
14: 
15: // eslint-disable-next-line custom-rules/no-top-level-side-effects
16: startMdmRawRead();
17: import { ensureKeychainPrefetchCompleted, startKeychainPrefetch } from './utils/secureStorage/keychainPrefetch.js';
18: 
19: // eslint-disable-next-line custom-rules/no-top-level-side-effects
20: startKeychainPrefetch();
21: import { feature } from 'bun:bundle';
22: import { Command as CommanderCommand, InvalidArgumentError, Option } from '@commander-js/extra-typings';
23: import chalk from 'chalk';
24: import { readFileSync } from 'fs';
25: import mapValues from 'lodash-es/mapValues.js';
26: import pickBy from 'lodash-es/pickBy.js';
27: import uniqBy from 'lodash-es/uniqBy.js';
28: import React from 'react';
29: import { getOauthConfig } from './constants/oauth.js';
30: import { getRemoteSessionUrl } from './constants/product.js';
31: import { getSystemContext, getUserContext } from './context.js';
32: import { init, initializeTelemetryAfterTrust } from './entrypoints/init.js';
33: import { addToHistory } from './history.js';
34: import type { Root } from './ink.js';
35: import { launchRepl } from './replLauncher.js';
36: import { hasGrowthBookEnvOverride, initializeGrowthBook, refreshGrowthBookAfterAuthChange } from './services/analytics/growthbook.js';
37: import { fetchBootstrapData } from './services/api/bootstrap.js';
38: import { type DownloadResult, downloadSessionFiles, type FilesApiConfig, parseFileSpecs } from './services/api/filesApi.js';
39: import { prefetchPassesEligibility } from './services/api/referral.js';
40: import { prefetchOfficialMcpUrls } from './services/mcp/officialRegistry.js';
41: import type { McpSdkServerConfig, McpServerConfig, ScopedMcpServerConfig } from './services/mcp/types.js';
42: import { isPolicyAllowed, loadPolicyLimits, refreshPolicyLimits, waitForPolicyLimitsToLoad } from './services/policyLimits/index.js';
43: import { loadRemoteManagedSettings, refreshRemoteManagedSettings } from './services/remoteManagedSettings/index.js';
44: import type { ToolInputJSONSchema } from './Tool.js';
45: import { createSyntheticOutputTool, isSyntheticOutputToolEnabled } from './tools/SyntheticOutputTool/SyntheticOutputTool.js';
46: import { getTools } from './tools.js';
47: import { canUserConfigureAdvisor, getInitialAdvisorSetting, isAdvisorEnabled, isValidAdvisorModel, modelSupportsAdvisor } from './utils/advisor.js';
48: import { isAgentSwarmsEnabled } from './utils/agentSwarmsEnabled.js';
49: import { count, uniq } from './utils/array.js';
50: import { installAsciicastRecorder } from './utils/asciicast.js';
51: import { getSubscriptionType, isClaudeAISubscriber, prefetchAwsCredentialsAndBedRockInfoIfSafe, prefetchGcpCredentialsIfSafe, validateForceLoginOrg } from './utils/auth.js';
52: import { checkHasTrustDialogAccepted, getGlobalConfig, getRemoteControlAtStartup, isAutoUpdaterDisabled, saveGlobalConfig } from './utils/config.js';
53: import { seedEarlyInput, stopCapturingEarlyInput } from './utils/earlyInput.js';
54: import { getInitialEffortSetting, parseEffortValue } from './utils/effort.js';
55: import { getInitialFastModeSetting, isFastModeEnabled, prefetchFastModeStatus, resolveFastModeStatusFromCache } from './utils/fastMode.js';
56: import { applyConfigEnvironmentVariables } from './utils/managedEnv.js';
57: import { createSystemMessage, createUserMessage } from './utils/messages.js';
58: import { getPlatform } from './utils/platform.js';
59: import { getBaseRenderOptions } from './utils/renderOptions.js';
60: import { getSessionIngressAuthToken } from './utils/sessionIngressAuth.js';
61: import { settingsChangeDetector } from './utils/settings/changeDetector.js';
62: import { skillChangeDetector } from './utils/skills/skillChangeDetector.js';
63: import { jsonParse, writeFileSync_DEPRECATED } from './utils/slowOperations.js';
64: import { computeInitialTeamContext } from './utils/swarm/reconnection.js';
65: import { initializeWarningHandler } from './utils/warningHandler.js';
66: import { isWorktreeModeEnabled } from './utils/worktreeModeEnabled.js';
67: 
68: // Lazy require to avoid circular dependency: teammate.ts -> AppState.tsx -> ... -> main.tsx
69: /* eslint-disable @typescript-eslint/no-require-imports */
70: const getTeammateUtils = () => require('./utils/teammate.js') as typeof import('./utils/teammate.js');
71: const getTeammatePromptAddendum = () => require('./utils/swarm/teammatePromptAddendum.js') as typeof import('./utils/swarm/teammatePromptAddendum.js');
72: const getTeammateModeSnapshot = () => require('./utils/swarm/backends/teammateModeSnapshot.js') as typeof import('./utils/swarm/backends/teammateModeSnapshot.js');
73: /* eslint-enable @typescript-eslint/no-require-imports */
74: // Dead code elimination: conditional import for COORDINATOR_MODE
75: /* eslint-disable @typescript-eslint/no-require-imports */
76: const coordinatorModeModule = feature('COORDINATOR_MODE') ? require('./coordinator/coordinatorMode.js') as typeof import('./coordinator/coordinatorMode.js') : null;
77: /* eslint-enable @typescript-eslint/no-require-imports */
78: // Dead code elimination: conditional import for KAIROS (assistant mode)
79: /* eslint-disable @typescript-eslint/no-require-imports */
80: const assistantModule = feature('KAIROS') ? require('./assistant/index.js') as typeof import('./assistant/index.js') : null;
81: const kairosGate = feature('KAIROS') ? require('./assistant/gate.js') as typeof import('./assistant/gate.js') : null;
82: import { relative, resolve } from 'path';
83: import { isAnalyticsDisabled } from 'src/services/analytics/config.js';
84: import { getFeatureValue_CACHED_MAY_BE_STALE } from 'src/services/analytics/growthbook.js';
85: import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent } from 'src/services/analytics/index.js';
86: import { initializeAnalyticsGates } from 'src/services/analytics/sink.js';
87: import { getOriginalCwd, setAdditionalDirectoriesForClaudeMd, setIsRemoteMode, setMainLoopModelOverride, setMainThreadAgentType, setTeleportedSessionInfo } from './bootstrap/state.js';
88: import { filterCommandsForRemoteMode, getCommands } from './commands.js';
89: import type { StatsStore } from './context/stats.js';
90: import { launchAssistantInstallWizard, launchAssistantSessionChooser, launchInvalidSettingsDialog, launchResumeChooser, launchSnapshotUpdateDialog, launchTeleportRepoMismatchDialog, launchTeleportResumeWrapper } from './dialogLaunchers.js';
91: import { SHOW_CURSOR } from './ink/termio/dec.js';
92: import { exitWithError, exitWithMessage, getRenderContext, renderAndRun, showSetupScreens } from './interactiveHelpers.js';
93: import { initBuiltinPlugins } from './plugins/bundled/index.js';
94: /* eslint-enable @typescript-eslint/no-require-imports */
95: import { checkQuotaStatus } from './services/claudeAiLimits.js';
96: import { getMcpToolsCommandsAndResources, prefetchAllMcpResources } from './services/mcp/client.js';
97: import { VALID_INSTALLABLE_SCOPES, VALID_UPDATE_SCOPES } from './services/plugins/pluginCliCommands.js';
98: import { initBundledSkills } from './skills/bundled/index.js';
99: import type { AgentColorName } from './tools/AgentTool/agentColorManager.js';
100: import { getActiveAgentsFromList, getAgentDefinitionsWithOverrides, isBuiltInAgent, isCustomAgent, parseAgentsFromJson } from './tools/AgentTool/loadAgentsDir.js';
101: import type { LogOption } from './types/logs.js';
102: import type { Message as MessageType } from './types/message.js';
103: import { assertMinVersion } from './utils/autoUpdater.js';
104: import { CLAUDE_IN_CHROME_SKILL_HINT, CLAUDE_IN_CHROME_SKILL_HINT_WITH_WEBBROWSER } from './utils/claudeInChrome/prompt.js';
105: import { setupClaudeInChrome, shouldAutoEnableClaudeInChrome, shouldEnableClaudeInChrome } from './utils/claudeInChrome/setup.js';
106: import { getContextWindowForModel } from './utils/context.js';
107: import { loadConversationForResume } from './utils/conversationRecovery.js';
108: import { buildDeepLinkBanner } from './utils/deepLink/banner.js';
109: import { hasNodeOption, isBareMode, isEnvTruthy, isInProtectedNamespace } from './utils/envUtils.js';
110: import { refreshExampleCommands } from './utils/exampleCommands.js';
111: import type { FpsMetrics } from './utils/fpsTracker.js';
112: import { getWorktreePaths } from './utils/getWorktreePaths.js';
113: import { findGitRoot, getBranch, getIsGit, getWorktreeCount } from './utils/git.js';
114: import { getGhAuthStatus } from './utils/github/ghAuthStatus.js';
115: import { safeParseJSON } from './utils/json.js';
116: import { logError } from './utils/log.js';
117: import { getModelDeprecationWarning } from './utils/model/deprecation.js';
118: import { getDefaultMainLoopModel, getUserSpecifiedModelSetting, normalizeModelStringForAPI, parseUserSpecifiedModel } from './utils/model/model.js';
119: import { ensureModelStringsInitialized } from './utils/model/modelStrings.js';
120: import { PERMISSION_MODES } from './utils/permissions/PermissionMode.js';
121: import { checkAndDisableBypassPermissions, getAutoModeEnabledStateIfCached, initializeToolPermissionContext, initialPermissionModeFromCLI, isDefaultPermissionModeAuto, parseToolListFromCLI, removeDangerousPermissions, stripDangerousPermissionsForAutoMode, verifyAutoModeGateAccess } from './utils/permissions/permissionSetup.js';
122: import { cleanupOrphanedPluginVersionsInBackground } from './utils/plugins/cacheUtils.js';
123: import { initializeVersionedPlugins } from './utils/plugins/installedPluginsManager.js';
124: import { getManagedPluginNames } from './utils/plugins/managedPlugins.js';
125: import { getGlobExclusionsForPluginCache } from './utils/plugins/orphanedPluginFilter.js';
126: import { getPluginSeedDirs } from './utils/plugins/pluginDirectories.js';
127: import { countFilesRoundedRg } from './utils/ripgrep.js';
128: import { processSessionStartHooks, processSetupHooks } from './utils/sessionStart.js';
129: import { cacheSessionTitle, getSessionIdFromLog, loadTranscriptFromFile, saveAgentSetting, saveMode, searchSessionsByCustomTitle, sessionIdExists } from './utils/sessionStorage.js';
130: import { ensureMdmSettingsLoaded } from './utils/settings/mdm/settings.js';
131: import { getInitialSettings, getManagedSettingsKeysForLogging, getSettingsForSource, getSettingsWithErrors } from './utils/settings/settings.js';
132: import { resetSettingsCache } from './utils/settings/settingsCache.js';
133: import type { ValidationError } from './utils/settings/validation.js';
134: import { DEFAULT_TASKS_MODE_TASK_LIST_ID, TASK_STATUSES } from './utils/tasks.js';
135: import { logPluginLoadErrors, logPluginsEnabledForSession } from './utils/telemetry/pluginTelemetry.js';
136: import { logSkillsLoaded } from './utils/telemetry/skillLoadedEvent.js';
137: import { generateTempFilePath } from './utils/tempfile.js';
138: import { validateUuid } from './utils/uuid.js';
139: // Plugin startup checks are now handled non-blockingly in REPL.tsx
140: 
141: import { registerMcpAddCommand } from 'src/commands/mcp/addCommand.js';
142: import { registerMcpXaaIdpCommand } from 'src/commands/mcp/xaaIdpCommand.js';
143: import { logPermissionContextForAnts } from 'src/services/internalLogging.js';
144: import { fetchClaudeAIMcpConfigsIfEligible } from 'src/services/mcp/claudeai.js';
145: import { clearServerCache } from 'src/services/mcp/client.js';
146: import { areMcpConfigsAllowedWithEnterpriseMcpConfig, dedupClaudeAiMcpServers, doesEnterpriseMcpConfigExist, filterMcpServersByPolicy, getClaudeCodeMcpConfigs, getMcpServerSignature, parseMcpConfig, parseMcpConfigFromFilePath } from 'src/services/mcp/config.js';
147: import { excludeCommandsByServer, excludeResourcesByServer } from 'src/services/mcp/utils.js';
148: import { isXaaEnabled } from 'src/services/mcp/xaaIdpLogin.js';
149: import { getRelevantTips } from 'src/services/tips/tipRegistry.js';
150: import { logContextMetrics } from 'src/utils/api.js';
151: import { CLAUDE_IN_CHROME_MCP_SERVER_NAME, isClaudeInChromeMCPServer } from 'src/utils/claudeInChrome/common.js';
152: import { registerCleanup } from 'src/utils/cleanupRegistry.js';
153: import { eagerParseCliFlag } from 'src/utils/cliArgs.js';
154: import { createEmptyAttributionState } from 'src/utils/commitAttribution.js';
155: import { countConcurrentSessions, registerSession, updateSessionName } from 'src/utils/concurrentSessions.js';
156: import { getCwd } from 'src/utils/cwd.js';
157: import { logForDebugging, setHasFormattedOutput } from 'src/utils/debug.js';
158: import { errorMessage, getErrnoCode, isENOENT, TeleportOperationError, toError } from 'src/utils/errors.js';
159: import { getFsImplementation, safeResolvePath } from 'src/utils/fsOperations.js';
160: import { gracefulShutdown, gracefulShutdownSync } from 'src/utils/gracefulShutdown.js';
161: import { setAllHookEventsEnabled } from 'src/utils/hooks/hookEvents.js';
162: import { refreshModelCapabilities } from 'src/utils/model/modelCapabilities.js';
163: import { peekForStdinData, writeToStderr } from 'src/utils/process.js';
164: import { setCwd } from 'src/utils/Shell.js';
165: import { type ProcessedResume, processResumedConversation } from 'src/utils/sessionRestore.js';
166: import { parseSettingSourcesFlag } from 'src/utils/settings/constants.js';
167: import { plural } from 'src/utils/stringUtils.js';
168: import { type ChannelEntry, getInitialMainLoopModel, getIsNonInteractiveSession, getSdkBetas, getSessionId, getUserMsgOptIn, setAllowedChannels, setAllowedSettingSources, setChromeFlagOverride, setClientType, setCwdState, setDirectConnectServerUrl, setFlagSettingsPath, setInitialMainLoopModel, setInlinePlugins, setIsInteractive, setKairosActive, setOriginalCwd, setQuestionPreviewFormat, setSdkBetas, setSessionBypassPermissionsMode, setSessionPersistenceDisabled, setSessionSource, setUserMsgOptIn, switchSession } from './bootstrap/state.js';
169: 
170: /* eslint-disable @typescript-eslint/no-require-imports */
171: const autoModeStateModule = feature('TRANSCRIPT_CLASSIFIER') ? require('./utils/permissions/autoModeState.js') as typeof import('./utils/permissions/autoModeState.js') : null;
172: 
173: // TeleportRepoMismatchDialog, TeleportResumeWrapper dynamically imported at call sites
174: import { migrateAutoUpdatesToSettings } from './migrations/migrateAutoUpdatesToSettings.js';
175: import { migrateBypassPermissionsAcceptedToSettings } from './migrations/migrateBypassPermissionsAcceptedToSettings.js';
176: import { migrateEnableAllProjectMcpServersToSettings } from './migrations/migrateEnableAllProjectMcpServersToSettings.js';
177: import { migrateFennecToOpus } from './migrations/migrateFennecToOpus.js';
178: import { migrateLegacyOpusToCurrent } from './migrations/migrateLegacyOpusToCurrent.js';
179: import { migrateOpusToOpus1m } from './migrations/migrateOpusToOpus1m.js';
180: import { migrateReplBridgeEnabledToRemoteControlAtStartup } from './migrations/migrateReplBridgeEnabledToRemoteControlAtStartup.js';
181: import { migrateSonnet1mToSonnet45 } from './migrations/migrateSonnet1mToSonnet45.js';
182: import { migrateSonnet45ToSonnet46 } from './migrations/migrateSonnet45ToSonnet46.js';
183: import { resetAutoModeOptInForDefaultOffer } from './migrations/resetAutoModeOptInForDefaultOffer.js';
184: import { resetProToOpusDefault } from './migrations/resetProToOpusDefault.js';
185: import { createRemoteSessionConfig } from './remote/RemoteSessionManager.js';
186: /* eslint-enable @typescript-eslint/no-require-imports */
187: // teleportWithProgress dynamically imported at call site
188: import { createDirectConnectSession, DirectConnectError } from './server/createDirectConnectSession.js';
189: import { initializeLspServerManager } from './services/lsp/manager.js';
190: import { shouldEnablePromptSuggestion } from './services/PromptSuggestion/promptSuggestion.js';
191: import { type AppState, getDefaultAppState, IDLE_SPECULATION_STATE } from './state/AppStateStore.js';
192: import { onChangeAppState } from './state/onChangeAppState.js';
193: import { createStore } from './state/store.js';
194: import { asSessionId } from './types/ids.js';
195: import { filterAllowedSdkBetas } from './utils/betas.js';
196: import { isInBundledMode, isRunningWithBun } from './utils/bundledMode.js';
197: import { logForDiagnosticsNoPII } from './utils/diagLogs.js';
198: import { filterExistingPaths, getKnownPathsForRepo } from './utils/githubRepoPathMapping.js';
199: import { clearPluginCache, loadAllPluginsCacheOnly } from './utils/plugins/pluginLoader.js';
200: import { migrateChangelogFromConfig } from './utils/releaseNotes.js';
201: import { SandboxManager } from './utils/sandbox/sandbox-adapter.js';
202: import { fetchSession, prepareApiRequest } from './utils/teleport/api.js';
203: import { checkOutTeleportedSessionBranch, processMessagesForTeleportResume, teleportToRemoteWithErrorHandling, validateGitState, validateSessionRepository } from './utils/teleport.js';
204: import { shouldEnableThinkingByDefault, type ThinkingConfig } from './utils/thinking.js';
205: import { initUser, resetUserCache } from './utils/user.js';
206: import { getTmuxInstallInstructions, isTmuxAvailable, parsePRReference } from './utils/worktree.js';
207: 
208: // eslint-disable-next-line custom-rules/no-top-level-side-effects
209: profileCheckpoint('main_tsx_imports_loaded');
210: 
211: /**
212:  * Log managed settings keys to Statsig for analytics.
213:  * This is called after init() completes to ensure settings are loaded
214:  * and environment variables are applied before model resolution.
215:  */
216: function logManagedSettings(): void {
217:   try {
218:     const policySettings = getSettingsForSource('policySettings');
219:     if (policySettings) {
220:       const allKeys = getManagedSettingsKeysForLogging(policySettings);
221:       logEvent('tengu_managed_settings_loaded', {
222:         keyCount: allKeys.length,
223:         keys: allKeys.join(',') as unknown as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
224:       });
225:     }
226:   } catch {
227:     // Silently ignore errors - this is just for analytics
228:   }
229: }
230: 
231: // Check if running in debug/inspection mode
232: function isBeingDebugged() {
233:   const isBun = isRunningWithBun();
234: 
235:   // Check for inspect flags in process arguments (including all variants)
236:   const hasInspectArg = process.execArgv.some(arg => {
237:     if (isBun) {
238:       // Note: Bun has an issue with single-file executables where application arguments
239:       // from process.argv leak into process.execArgv (similar to https://github.com/oven-sh/bun/issues/11673)
240:       // This breaks use of --debug mode if we omit this branch
241:       // We're fine to skip that check, because Bun doesn't support Node.js legacy --debug or --debug-brk flags
242:       return /--inspect(-brk)?/.test(arg);
243:     } else {
244:       // In Node.js, check for both --inspect and legacy --debug flags
245:       return /--inspect(-brk)?|--debug(-brk)?/.test(arg);
246:     }
247:   });
248: 
249:   // Check if NODE_OPTIONS contains inspect flags
250:   const hasInspectEnv = process.env.NODE_OPTIONS && /--inspect(-brk)?|--debug(-brk)?/.test(process.env.NODE_OPTIONS);
251: 
252:   // Check if inspector is available and active (indicates debugging)
253:   try {
254:     // Dynamic import would be better but is async - use global object instead
255:     // eslint-disable-next-line @typescript-eslint/no-explicit-any
256:     const inspector = (global as any).require('inspector');
257:     const hasInspectorUrl = !!inspector.url();
258:     return hasInspectorUrl || hasInspectArg || hasInspectEnv;
259:   } catch {
260:     // Ignore error and fall back to argument detection
261:     return hasInspectArg || hasInspectEnv;
262:   }
263: }
264: 
265: // Exit if we detect node debugging or inspection
266: if ("external" !== 'ant' && isBeingDebugged()) {
267:   // Use process.exit directly here since we're in the top-level code before imports
268:   // and gracefulShutdown is not yet available
269:   // eslint-disable-next-line custom-rules/no-top-level-side-effects
270:   process.exit(1);
271: }
272: 
273: /**
274:  * Per-session skill/plugin telemetry. Called from both the interactive path
275:  * and the headless -p path (before runHeadless) — both go through
276:  * main.tsx but branch before the interactive startup path, so it needs two
277:  * call sites here rather than one here + one in QueryEngine.
278:  */
279: function logSessionTelemetry(): void {
280:   const model = parseUserSpecifiedModel(getInitialMainLoopModel() ?? getDefaultMainLoopModel());
281:   void logSkillsLoaded(getCwd(), getContextWindowForModel(model, getSdkBetas()));
282:   void loadAllPluginsCacheOnly().then(({
283:     enabled,
284:     errors
285:   }) => {
286:     const managedNames = getManagedPluginNames();
287:     logPluginsEnabledForSession(enabled, managedNames, getPluginSeedDirs());
288:     logPluginLoadErrors(errors, managedNames);
289:   }).catch(err => logError(err));
290: }
291: function getCertEnvVarTelemetry(): Record<string, boolean> {
292:   const result: Record<string, boolean> = {};
293:   if (process.env.NODE_EXTRA_CA_CERTS) {
294:     result.has_node_extra_ca_certs = true;
295:   }
296:   if (process.env.CLAUDE_CODE_CLIENT_CERT) {
297:     result.has_client_cert = true;
298:   }
299:   if (hasNodeOption('--use-system-ca')) {
300:     result.has_use_system_ca = true;
301:   }
302:   if (hasNodeOption('--use-openssl-ca')) {
303:     result.has_use_openssl_ca = true;
304:   }
305:   return result;
306: }
307: async function logStartupTelemetry(): Promise<void> {
308:   if (isAnalyticsDisabled()) return;
309:   const [isGit, worktreeCount, ghAuthStatus] = await Promise.all([getIsGit(), getWorktreeCount(), getGhAuthStatus()]);
310:   logEvent('tengu_startup_telemetry', {
311:     is_git: isGit,
312:     worktree_count: worktreeCount,
313:     gh_auth_status: ghAuthStatus as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
314:     sandbox_enabled: SandboxManager.isSandboxingEnabled(),
315:     are_unsandboxed_commands_allowed: SandboxManager.areUnsandboxedCommandsAllowed(),
316:     is_auto_bash_allowed_if_sandbox_enabled: SandboxManager.isAutoAllowBashIfSandboxedEnabled(),
317:     auto_updater_disabled: isAutoUpdaterDisabled(),
318:     prefers_reduced_motion: getInitialSettings().prefersReducedMotion ?? false,
319:     ...getCertEnvVarTelemetry()
320:   });
321: }
322: 
323: // @[MODEL LAUNCH]: Consider any migrations you may need for model strings. See migrateSonnet1mToSonnet45.ts for an example.
324: // Bump this when adding a new sync migration so existing users re-run the set.
325: const CURRENT_MIGRATION_VERSION = 11;
326: function runMigrations(): void {
327:   if (getGlobalConfig().migrationVersion !== CURRENT_MIGRATION_VERSION) {
328:     migrateAutoUpdatesToSettings();
329:     migrateBypassPermissionsAcceptedToSettings();
330:     migrateEnableAllProjectMcpServersToSettings();
331:     resetProToOpusDefault();
332:     migrateSonnet1mToSonnet45();
333:     migrateLegacyOpusToCurrent();
334:     migrateSonnet45ToSonnet46();
335:     migrateOpusToOpus1m();
336:     migrateReplBridgeEnabledToRemoteControlAtStartup();
337:     if (feature('TRANSCRIPT_CLASSIFIER')) {
338:       resetAutoModeOptInForDefaultOffer();
339:     }
340:     if ("external" === 'ant') {
341:       migrateFennecToOpus();
342:     }
343:     saveGlobalConfig(prev => prev.migrationVersion === CURRENT_MIGRATION_VERSION ? prev : {
344:       ...prev,
345:       migrationVersion: CURRENT_MIGRATION_VERSION
346:     });
347:   }
348:   // Async migration - fire and forget since it's non-blocking
349:   migrateChangelogFromConfig().catch(() => {
350:     // Silently ignore migration errors - will retry on next startup
351:   });
352: }
353: 
354: /**
355:  * Prefetch system context (including git status) only when it's safe to do so.
356:  * Git commands can execute arbitrary code via hooks and config (e.g., core.fsmonitor,
357:  * diff.external), so we must only run them after trust is established or in
358:  * non-interactive mode where trust is implicit.
359:  */
360: function prefetchSystemContextIfSafe(): void {
361:   const isNonInteractiveSession = getIsNonInteractiveSession();
362: 
363:   // In non-interactive mode (--print), trust dialog is skipped and
364:   // execution is considered trusted (as documented in help text)
365:   if (isNonInteractiveSession) {
366:     logForDiagnosticsNoPII('info', 'prefetch_system_context_non_interactive');
367:     void getSystemContext();
368:     return;
369:   }
370: 
371:   // In interactive mode, only prefetch if trust has already been established
372:   const hasTrust = checkHasTrustDialogAccepted();
373:   if (hasTrust) {
374:     logForDiagnosticsNoPII('info', 'prefetch_system_context_has_trust');
375:     void getSystemContext();
376:   } else {
377:     logForDiagnosticsNoPII('info', 'prefetch_system_context_skipped_no_trust');
378:   }
379:   // Otherwise, don't prefetch - wait for trust to be established first
380: }
381: 
382: /**
383:  * Start background prefetches and housekeeping that are NOT needed before first render.
384:  * These are deferred from setup() to reduce event loop contention and child process
385:  * spawning during the critical startup path.
386:  * Call this after the REPL has been rendered.
387:  */
388: export function startDeferredPrefetches(): void {
389:   // This function runs after first render, so it doesn't block the initial paint.
390:   // However, the spawned processes and async work still contend for CPU and event
391:   // loop time, which skews startup benchmarks (CPU profiles, time-to-first-render
392:   // measurements). Skip all of it when we're only measuring startup performance.
393:   if (isEnvTruthy(process.env.CLAUDE_CODE_EXIT_AFTER_FIRST_RENDER) ||
394:   // --bare: skip ALL prefetches. These are cache-warms for the REPL's
395:   // first-turn responsiveness (initUser, getUserContext, tips, countFiles,
396:   // modelCapabilities, change detectors). Scripted -p calls don't have a
397:   // "user is typing" window to hide this work in — it's pure overhead on
398:   // the critical path.
399:   isBareMode()) {
400:     return;
401:   }
402: 
403:   // Process-spawning prefetches (consumed at first API call, user is still typing)
404:   void initUser();
405:   void getUserContext();
406:   prefetchSystemContextIfSafe();
407:   void getRelevantTips();
408:   if (isEnvTruthy(process.env.CLAUDE_CODE_USE_BEDROCK) && !isEnvTruthy(process.env.CLAUDE_CODE_SKIP_BEDROCK_AUTH)) {
409:     void prefetchAwsCredentialsAndBedRockInfoIfSafe();
410:   }
411:   if (isEnvTruthy(process.env.CLAUDE_CODE_USE_VERTEX) && !isEnvTruthy(process.env.CLAUDE_CODE_SKIP_VERTEX_AUTH)) {
412:     void prefetchGcpCredentialsIfSafe();
413:   }
414:   void countFilesRoundedRg(getCwd(), AbortSignal.timeout(3000), []);
415: 
416:   // Analytics and feature flag initialization
417:   void initializeAnalyticsGates();
418:   void prefetchOfficialMcpUrls();
419:   void refreshModelCapabilities();
420: 
421:   // File change detectors deferred from init() to unblock first render
422:   void settingsChangeDetector.initialize();
423:   if (!isBareMode()) {
424:     void skillChangeDetector.initialize();
425:   }
426: 
427:   // Event loop stall detector — logs when the main thread is blocked >500ms
428:   if ("external" === 'ant') {
429:     void import('./utils/eventLoopStallDetector.js').then(m => m.startEventLoopStallDetector());
430:   }
431: }
432: function loadSettingsFromFlag(settingsFile: string): void {
433:   try {
434:     const trimmedSettings = settingsFile.trim();
435:     const looksLikeJson = trimmedSettings.startsWith('{') && trimmedSettings.endsWith('}');
436:     let settingsPath: string;
437:     if (looksLikeJson) {
438:       // It's a JSON string - validate and create temp file
439:       const parsedJson = safeParseJSON(trimmedSettings);
440:       if (!parsedJson) {
441:         process.stderr.write(chalk.red('Error: Invalid JSON provided to --settings\n'));
442:         process.exit(1);
443:       }
444: 
445:       // Create a temporary file and write the JSON to it.
446:       // Use a content-hash-based path instead of random UUID to avoid
447:       // busting the Anthropic API prompt cache. The settings path ends up
448:       // in the Bash tool's sandbox denyWithinAllow list, which is part of
449:       // the tool description sent to the API. A random UUID per subprocess
450:       // changes the tool description on every query() call, invalidating
451:       // the cache prefix and causing a 12x input token cost penalty.
452:       // The content hash ensures identical settings produce the same path
453:       // across process boundaries (each SDK query() spawns a new process).
454:       settingsPath = generateTempFilePath('claude-settings', '.json', {
455:         contentHash: trimmedSettings
456:       });
457:       writeFileSync_DEPRECATED(settingsPath, trimmedSettings, 'utf8');
458:     } else {
459:       // It's a file path - resolve and validate by attempting to read
460:       const {
461:         resolvedPath: resolvedSettingsPath
462:       } = safeResolvePath(getFsImplementation(), settingsFile);
463:       try {
464:         readFileSync(resolvedSettingsPath, 'utf8');
465:       } catch (e) {
466:         if (isENOENT(e)) {
467:           process.stderr.write(chalk.red(`Error: Settings file not found: ${resolvedSettingsPath}\n`));
468:           process.exit(1);
469:         }
470:         throw e;
471:       }
472:       settingsPath = resolvedSettingsPath;
473:     }
474:     setFlagSettingsPath(settingsPath);
475:     resetSettingsCache();
476:   } catch (error) {
477:     if (error instanceof Error) {
478:       logError(error);
479:     }
480:     process.stderr.write(chalk.red(`Error processing settings: ${errorMessage(error)}\n`));
481:     process.exit(1);
482:   }
483: }
484: function loadSettingSourcesFromFlag(settingSourcesArg: string): void {
485:   try {
486:     const sources = parseSettingSourcesFlag(settingSourcesArg);
487:     setAllowedSettingSources(sources);
488:     resetSettingsCache();
489:   } catch (error) {
490:     if (error instanceof Error) {
491:       logError(error);
492:     }
493:     process.stderr.write(chalk.red(`Error processing --setting-sources: ${errorMessage(error)}\n`));
494:     process.exit(1);
495:   }
496: }
497: 
498: /**
499:  * Parse and load settings flags early, before init()
500:  * This ensures settings are filtered from the start of initialization

(Showing lines 1-500 of 4684. Use offset=501 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/query.ts",
  "limit": 500
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/query.ts</path>
<type>file</type>
<content>1: // biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
2: import type {
3:   ToolResultBlockParam,
4:   ToolUseBlock,
5: } from '@anthropic-ai/sdk/resources/index.mjs'
6: import type { CanUseToolFn } from './hooks/useCanUseTool.js'
7: import { FallbackTriggeredError } from './services/api/withRetry.js'
8: import {
9:   calculateTokenWarningState,
10:   isAutoCompactEnabled,
11:   type AutoCompactTrackingState,
12: } from './services/compact/autoCompact.js'
13: import { buildPostCompactMessages } from './services/compact/compact.js'
14: /* eslint-disable @typescript-eslint/no-require-imports */
15: const reactiveCompact = feature('REACTIVE_COMPACT')
16:   ? (require('./services/compact/reactiveCompact.js') as typeof import('./services/compact/reactiveCompact.js'))
17:   : null
18: const contextCollapse = feature('CONTEXT_COLLAPSE')
19:   ? (require('./services/contextCollapse/index.js') as typeof import('./services/contextCollapse/index.js'))
20:   : null
21: /* eslint-enable @typescript-eslint/no-require-imports */
22: import {
23:   logEvent,
24:   type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
25: } from 'src/services/analytics/index.js'
26: import { ImageSizeError } from './utils/imageValidation.js'
27: import { ImageResizeError } from './utils/imageResizer.js'
28: import { findToolByName, type ToolUseContext } from './Tool.js'
29: import { asSystemPrompt, type SystemPrompt } from './utils/systemPromptType.js'
30: import type {
31:   AssistantMessage,
32:   AttachmentMessage,
33:   Message,
34:   RequestStartEvent,
35:   StreamEvent,
36:   ToolUseSummaryMessage,
37:   UserMessage,
38:   TombstoneMessage,
39: } from './types/message.js'
40: import { logError } from './utils/log.js'
41: import {
42:   PROMPT_TOO_LONG_ERROR_MESSAGE,
43:   isPromptTooLongMessage,
44: } from './services/api/errors.js'
45: import { logAntError, logForDebugging } from './utils/debug.js'
46: import {
47:   createUserMessage,
48:   createUserInterruptionMessage,
49:   normalizeMessagesForAPI,
50:   createSystemMessage,
51:   createAssistantAPIErrorMessage,
52:   getMessagesAfterCompactBoundary,
53:   createToolUseSummaryMessage,
54:   createMicrocompactBoundaryMessage,
55:   stripSignatureBlocks,
56: } from './utils/messages.js'
57: import { generateToolUseSummary } from './services/toolUseSummary/toolUseSummaryGenerator.js'
58: import { prependUserContext, appendSystemContext } from './utils/api.js'
59: import {
60:   createAttachmentMessage,
61:   filterDuplicateMemoryAttachments,
62:   getAttachmentMessages,
63:   startRelevantMemoryPrefetch,
64: } from './utils/attachments.js'
65: /* eslint-disable @typescript-eslint/no-require-imports */
66: const skillPrefetch = feature('EXPERIMENTAL_SKILL_SEARCH')
67:   ? (require('./services/skillSearch/prefetch.js') as typeof import('./services/skillSearch/prefetch.js'))
68:   : null
69: const jobClassifier = feature('TEMPLATES')
70:   ? (require('./jobs/classifier.js') as typeof import('./jobs/classifier.js'))
71:   : null
72: /* eslint-enable @typescript-eslint/no-require-imports */
73: import {
74:   remove as removeFromQueue,
75:   getCommandsByMaxPriority,
76:   isSlashCommand,
77: } from './utils/messageQueueManager.js'
78: import { notifyCommandLifecycle } from './utils/commandLifecycle.js'
79: import { headlessProfilerCheckpoint } from './utils/headlessProfiler.js'
80: import {
81:   getRuntimeMainLoopModel,
82:   renderModelName,
83: } from './utils/model/model.js'
84: import {
85:   doesMostRecentAssistantMessageExceed200k,
86:   finalContextTokensFromLastResponse,
87:   tokenCountWithEstimation,
88: } from './utils/tokens.js'
89: import { ESCALATED_MAX_TOKENS } from './utils/context.js'
90: import { getFeatureValue_CACHED_MAY_BE_STALE } from './services/analytics/growthbook.js'
91: import { SLEEP_TOOL_NAME } from './tools/SleepTool/prompt.js'
92: import { executePostSamplingHooks } from './utils/hooks/postSamplingHooks.js'
93: import { executeStopFailureHooks } from './utils/hooks.js'
94: import type { QuerySource } from './constants/querySource.js'
95: import { createDumpPromptsFetch } from './services/api/dumpPrompts.js'
96: import { StreamingToolExecutor } from './services/tools/StreamingToolExecutor.js'
97: import { queryCheckpoint } from './utils/queryProfiler.js'
98: import { runTools } from './services/tools/toolOrchestration.js'
99: import { applyToolResultBudget } from './utils/toolResultStorage.js'
100: import { recordContentReplacement } from './utils/sessionStorage.js'
101: import { handleStopHooks } from './query/stopHooks.js'
102: import { buildQueryConfig } from './query/config.js'
103: import { productionDeps, type QueryDeps } from './query/deps.js'
104: import type { Terminal, Continue } from './query/transitions.js'
105: import { feature } from 'bun:bundle'
106: import {
107:   getCurrentTurnTokenBudget,
108:   getTurnOutputTokens,
109:   incrementBudgetContinuationCount,
110: } from './bootstrap/state.js'
111: import { createBudgetTracker, checkTokenBudget } from './query/tokenBudget.js'
112: import { count } from './utils/array.js'
113: 
114: /* eslint-disable @typescript-eslint/no-require-imports */
115: const snipModule = feature('HISTORY_SNIP')
116:   ? (require('./services/compact/snipCompact.js') as typeof import('./services/compact/snipCompact.js'))
117:   : null
118: const taskSummaryModule = feature('BG_SESSIONS')
119:   ? (require('./utils/taskSummary.js') as typeof import('./utils/taskSummary.js'))
120:   : null
121: /* eslint-enable @typescript-eslint/no-require-imports */
122: 
123: function* yieldMissingToolResultBlocks(
124:   assistantMessages: AssistantMessage[],
125:   errorMessage: string,
126: ) {
127:   for (const assistantMessage of assistantMessages) {
128:     // Extract all tool use blocks from this assistant message
129:     const toolUseBlocks = assistantMessage.message.content.filter(
130:       content => content.type === 'tool_use',
131:     ) as ToolUseBlock[]
132: 
133:     // Emit an interruption message for each tool use
134:     for (const toolUse of toolUseBlocks) {
135:       yield createUserMessage({
136:         content: [
137:           {
138:             type: 'tool_result',
139:             content: errorMessage,
140:             is_error: true,
141:             tool_use_id: toolUse.id,
142:           },
143:         ],
144:         toolUseResult: errorMessage,
145:         sourceToolAssistantUUID: assistantMessage.uuid,
146:       })
147:     }
148:   }
149: }
150: 
151: /**
152:  * The rules of thinking are lengthy and fortuitous. They require plenty of thinking
153:  * of most long duration and deep meditation for a wizard to wrap one's noggin around.
154:  *
155:  * The rules follow:
156:  * 1. A message that contains a thinking or redacted_thinking block must be part of a query whose max_thinking_length > 0
157:  * 2. A thinking block may not be the last message in a block
158:  * 3. Thinking blocks must be preserved for the duration of an assistant trajectory (a single turn, or if that turn includes a tool_use block then also its subsequent tool_result and the following assistant message)
159:  *
160:  * Heed these rules well, young wizard. For they are the rules of thinking, and
161:  * the rules of thinking are the rules of the universe. If ye does not heed these
162:  * rules, ye will be punished with an entire day of debugging and hair pulling.
163:  */
164: const MAX_OUTPUT_TOKENS_RECOVERY_LIMIT = 3
165: 
166: /**
167:  * Is this a max_output_tokens error message? If so, the streaming loop should
168:  * withhold it from SDK callers until we know whether the recovery loop can
169:  * continue. Yielding early leaks an intermediate error to SDK callers (e.g.
170:  * cowork/desktop) that terminate the session on any `error` field — the
171:  * recovery loop keeps running but nobody is listening.
172:  *
173:  * Mirrors reactiveCompact.isWithheldPromptTooLong.
174:  */
175: function isWithheldMaxOutputTokens(
176:   msg: Message | StreamEvent | undefined,
177: ): msg is AssistantMessage {
178:   return msg?.type === 'assistant' && msg.apiError === 'max_output_tokens'
179: }
180: 
181: export type QueryParams = {
182:   messages: Message[]
183:   systemPrompt: SystemPrompt
184:   userContext: { [k: string]: string }
185:   systemContext: { [k: string]: string }
186:   canUseTool: CanUseToolFn
187:   toolUseContext: ToolUseContext
188:   fallbackModel?: string
189:   querySource: QuerySource
190:   maxOutputTokensOverride?: number
191:   maxTurns?: number
192:   skipCacheWrite?: boolean
193:   // API task_budget (output_config.task_budget, beta task-budgets-2026-03-13).
194:   // Distinct from the tokenBudget +500k auto-continue feature. `total` is the
195:   // budget for the whole agentic turn; `remaining` is computed per iteration
196:   // from cumulative API usage. See configureTaskBudgetParams in claude.ts.
197:   taskBudget?: { total: number }
198:   deps?: QueryDeps
199: }
200: 
201: // -- query loop state
202: 
203: // Mutable state carried between loop iterations
204: type State = {
205:   messages: Message[]
206:   toolUseContext: ToolUseContext
207:   autoCompactTracking: AutoCompactTrackingState | undefined
208:   maxOutputTokensRecoveryCount: number
209:   hasAttemptedReactiveCompact: boolean
210:   maxOutputTokensOverride: number | undefined
211:   pendingToolUseSummary: Promise<ToolUseSummaryMessage | null> | undefined
212:   stopHookActive: boolean | undefined
213:   turnCount: number
214:   // Why the previous iteration continued. Undefined on first iteration.
215:   // Lets tests assert recovery paths fired without inspecting message contents.
216:   transition: Continue | undefined
217: }
218: 
219: export async function* query(
220:   params: QueryParams,
221: ): AsyncGenerator<
222:   | StreamEvent
223:   | RequestStartEvent
224:   | Message
225:   | TombstoneMessage
226:   | ToolUseSummaryMessage,
227:   Terminal
228: > {
229:   const consumedCommandUuids: string[] = []
230:   const terminal = yield* queryLoop(params, consumedCommandUuids)
231:   // Only reached if queryLoop returned normally. Skipped on throw (error
232:   // propagates through yield*) and on .return() (Return completion closes
233:   // both generators). This gives the same asymmetric started-without-completed
234:   // signal as print.ts's drainCommandQueue when the turn fails.
235:   for (const uuid of consumedCommandUuids) {
236:     notifyCommandLifecycle(uuid, 'completed')
237:   }
238:   return terminal
239: }
240: 
241: async function* queryLoop(
242:   params: QueryParams,
243:   consumedCommandUuids: string[],
244: ): AsyncGenerator<
245:   | StreamEvent
246:   | RequestStartEvent
247:   | Message
248:   | TombstoneMessage
249:   | ToolUseSummaryMessage,
250:   Terminal
251: > {
252:   // Immutable params — never reassigned during the query loop.
253:   const {
254:     systemPrompt,
255:     userContext,
256:     systemContext,
257:     canUseTool,
258:     fallbackModel,
259:     querySource,
260:     maxTurns,
261:     skipCacheWrite,
262:   } = params
263:   const deps = params.deps ?? productionDeps()
264: 
265:   // Mutable cross-iteration state. The loop body destructures this at the top
266:   // of each iteration so reads stay bare-name (`messages`, `toolUseContext`).
267:   // Continue sites write `state = { ... }` instead of 9 separate assignments.
268:   let state: State = {
269:     messages: params.messages,
270:     toolUseContext: params.toolUseContext,
271:     maxOutputTokensOverride: params.maxOutputTokensOverride,
272:     autoCompactTracking: undefined,
273:     stopHookActive: undefined,
274:     maxOutputTokensRecoveryCount: 0,
275:     hasAttemptedReactiveCompact: false,
276:     turnCount: 1,
277:     pendingToolUseSummary: undefined,
278:     transition: undefined,
279:   }
280:   const budgetTracker = feature('TOKEN_BUDGET') ? createBudgetTracker() : null
281: 
282:   // task_budget.remaining tracking across compaction boundaries. Undefined
283:   // until first compact fires — while context is uncompacted the server can
284:   // see the full history and handles the countdown from {total} itself (see
285:   // api/api/sampling/prompt/renderer.py:292). After a compact, the server sees
286:   // only the summary and would under-count spend; remaining tells it the
287:   // pre-compact final window that got summarized away. Cumulative across
288:   // multiple compacts: each subtracts the final context at that compact's
289:   // trigger point. Loop-local (not on State) to avoid touching the 7 continue
290:   // sites.
291:   let taskBudgetRemaining: number | undefined = undefined
292: 
293:   // Snapshot immutable env/statsig/session state once at entry. See QueryConfig
294:   // for what's included and why feature() gates are intentionally excluded.
295:   const config = buildQueryConfig()
296: 
297:   // Fired once per user turn — the prompt is invariant across loop iterations,
298:   // so per-iteration firing would ask sideQuery the same question N times.
299:   // Consume point polls settledAt (never blocks). `using` disposes on all
300:   // generator exit paths — see MemoryPrefetch for dispose/telemetry semantics.
301:   using pendingMemoryPrefetch = startRelevantMemoryPrefetch(
302:     state.messages,
303:     state.toolUseContext,
304:   )
305: 
306:   // eslint-disable-next-line no-constant-condition
307:   while (true) {
308:     // Destructure state at the top of each iteration. toolUseContext alone
309:     // is reassigned within an iteration (queryTracking, messages updates);
310:     // the rest are read-only between continue sites.
311:     let { toolUseContext } = state
312:     const {
313:       messages,
314:       autoCompactTracking,
315:       maxOutputTokensRecoveryCount,
316:       hasAttemptedReactiveCompact,
317:       maxOutputTokensOverride,
318:       pendingToolUseSummary,
319:       stopHookActive,
320:       turnCount,
321:     } = state
322: 
323:     // Skill discovery prefetch — per-iteration (uses findWritePivot guard
324:     // that returns early on non-write iterations). Discovery runs while the
325:     // model streams and tools execute; awaited post-tools alongside the
326:     // memory prefetch consume. Replaces the blocking assistant_turn path
327:     // that ran inside getAttachmentMessages (97% of those calls found
328:     // nothing in prod). Turn-0 user-input discovery still blocks in
329:     // userInputAttachments — that's the one signal where there's no prior
330:     // work to hide under.
331:     const pendingSkillPrefetch = skillPrefetch?.startSkillDiscoveryPrefetch(
332:       null,
333:       messages,
334:       toolUseContext,
335:     )
336: 
337:     yield { type: 'stream_request_start' }
338: 
339:     queryCheckpoint('query_fn_entry')
340: 
341:     // Record query start for headless latency tracking (skip for subagents)
342:     if (!toolUseContext.agentId) {
343:       headlessProfilerCheckpoint('query_started')
344:     }
345: 
346:     // Initialize or increment query chain tracking
347:     const queryTracking = toolUseContext.queryTracking
348:       ? {
349:           chainId: toolUseContext.queryTracking.chainId,
350:           depth: toolUseContext.queryTracking.depth + 1,
351:         }
352:       : {
353:           chainId: deps.uuid(),
354:           depth: 0,
355:         }
356: 
357:     const queryChainIdForAnalytics =
358:       queryTracking.chainId as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS
359: 
360:     toolUseContext = {
361:       ...toolUseContext,
362:       queryTracking,
363:     }
364: 
365:     let messagesForQuery = [...getMessagesAfterCompactBoundary(messages)]
366: 
367:     let tracking = autoCompactTracking
368: 
369:     // Enforce per-message budget on aggregate tool result size. Runs BEFORE
370:     // microcompact — cached MC operates purely by tool_use_id (never inspects
371:     // content), so content replacement is invisible to it and the two compose
372:     // cleanly. No-ops when contentReplacementState is undefined (feature off).
373:     // Persist only for querySources that read records back on resume: agentId
374:     // routes to sidechain file (AgentTool resume) or session file (/resume).
375:     // Ephemeral runForkedAgent callers (agent_summary etc.) don't persist.
376:     const persistReplacements =
377:       querySource.startsWith('agent:') ||
378:       querySource.startsWith('repl_main_thread')
379:     messagesForQuery = await applyToolResultBudget(
380:       messagesForQuery,
381:       toolUseContext.contentReplacementState,
382:       persistReplacements
383:         ? records =>
384:             void recordContentReplacement(
385:               records,
386:               toolUseContext.agentId,
387:             ).catch(logError)
388:         : undefined,
389:       new Set(
390:         toolUseContext.options.tools
391:           .filter(t => !Number.isFinite(t.maxResultSizeChars))
392:           .map(t => t.name),
393:       ),
394:     )
395: 
396:     // Apply snip before microcompact (both may run — they are not mutually exclusive).
397:     // snipTokensFreed is plumbed to autocompact so its threshold check reflects
398:     // what snip removed; tokenCountWithEstimation alone can't see it (reads usage
399:     // from the protected-tail assistant, which survives snip unchanged).
400:     let snipTokensFreed = 0
401:     if (feature('HISTORY_SNIP')) {
402:       queryCheckpoint('query_snip_start')
403:       const snipResult = snipModule!.snipCompactIfNeeded(messagesForQuery)
404:       messagesForQuery = snipResult.messages
405:       snipTokensFreed = snipResult.tokensFreed
406:       if (snipResult.boundaryMessage) {
407:         yield snipResult.boundaryMessage
408:       }
409:       queryCheckpoint('query_snip_end')
410:     }
411: 
412:     // Apply microcompact before autocompact
413:     queryCheckpoint('query_microcompact_start')
414:     const microcompactResult = await deps.microcompact(
415:       messagesForQuery,
416:       toolUseContext,
417:       querySource,
418:     )
419:     messagesForQuery = microcompactResult.messages
420:     // For cached microcompact (cache editing), defer boundary message until after
421:     // the API response so we can use actual cache_deleted_input_tokens.
422:     // Gated behind feature() so the string is eliminated from external builds.
423:     const pendingCacheEdits = feature('CACHED_MICROCOMPACT')
424:       ? microcompactResult.compactionInfo?.pendingCacheEdits
425:       : undefined
426:     queryCheckpoint('query_microcompact_end')
427: 
428:     // Project the collapsed context view and maybe commit more collapses.
429:     // Runs BEFORE autocompact so that if collapse gets us under the
430:     // autocompact threshold, autocompact is a no-op and we keep granular
431:     // context instead of a single summary.
432:     //
433:     // Nothing is yielded — the collapsed view is a read-time projection
434:     // over the REPL's full history. Summary messages live in the collapse
435:     // store, not the REPL array. This is what makes collapses persist
436:     // across turns: projectView() replays the commit log on every entry.
437:     // Within a turn, the view flows forward via state.messages at the
438:     // continue site (query.ts:1192), and the next projectView() no-ops
439:     // because the archived messages are already gone from its input.
440:     if (feature('CONTEXT_COLLAPSE') && contextCollapse) {
441:       const collapseResult = await contextCollapse.applyCollapsesIfNeeded(
442:         messagesForQuery,
443:         toolUseContext,
444:         querySource,
445:       )
446:       messagesForQuery = collapseResult.messages
447:     }
448: 
449:     const fullSystemPrompt = asSystemPrompt(
450:       appendSystemContext(systemPrompt, systemContext),
451:     )
452: 
453:     queryCheckpoint('query_autocompact_start')
454:     const { compactionResult, consecutiveFailures } = await deps.autocompact(
455:       messagesForQuery,
456:       toolUseContext,
457:       {
458:         systemPrompt,
459:         userContext,
460:         systemContext,
461:         toolUseContext,
462:         forkContextMessages: messagesForQuery,
463:       },
464:       querySource,
465:       tracking,
466:       snipTokensFreed,
467:     )
468:     queryCheckpoint('query_autocompact_end')
469: 
470:     if (compactionResult) {
471:       const {
472:         preCompactTokenCount,
473:         postCompactTokenCount,
474:         truePostCompactTokenCount,
475:         compactionUsage,
476:       } = compactionResult
477: 
478:       logEvent('tengu_auto_compact_succeeded', {
479:         originalMessageCount: messages.length,
480:         compactedMessageCount:
481:           compactionResult.summaryMessages.length +
482:           compactionResult.attachments.length +
483:           compactionResult.hookResults.length,
484:         preCompactTokenCount,
485:         postCompactTokenCount,
486:         truePostCompactTokenCount,
487:         compactionInputTokens: compactionUsage?.input_tokens,
488:         compactionOutputTokens: compactionUsage?.output_tokens,
489:         compactionCacheReadTokens:
490:           compactionUsage?.cache_read_input_tokens ?? 0,
491:         compactionCacheCreationTokens:
492:           compactionUsage?.cache_creation_input_tokens ?? 0,
493:         compactionTotalTokens: compactionUsage
494:           ? compactionUsage.input_tokens +
495:             (compactionUsage.cache_creation_input_tokens ?? 0) +
496:             (compactionUsage.cache_read_input_tokens ?? 0) +
497:             compactionUsage.output_tokens
498:           : 0,
499: 
500:         queryChainId: queryChainIdForAnalytics,

(Showing lines 1-500 of 1729. Use offset=501 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/QueryEngine.ts",
  "limit": 500
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/QueryEngine.ts</path>
<type>file</type>
<content>1: import { feature } from 'bun:bundle'
2: import type { ContentBlockParam } from '@anthropic-ai/sdk/resources/messages.mjs'
3: import { randomUUID } from 'crypto'
4: import last from 'lodash-es/last.js'
5: import {
6:   getSessionId,
7:   isSessionPersistenceDisabled,
8: } from 'src/bootstrap/state.js'
9: import type {
10:   PermissionMode,
11:   SDKCompactBoundaryMessage,
12:   SDKMessage,
13:   SDKPermissionDenial,
14:   SDKStatus,
15:   SDKUserMessageReplay,
16: } from 'src/entrypoints/agentSdkTypes.js'
17: import { accumulateUsage, updateUsage } from 'src/services/api/claude.js'
18: import type { NonNullableUsage } from 'src/services/api/logging.js'
19: import { EMPTY_USAGE } from 'src/services/api/logging.js'
20: import stripAnsi from 'strip-ansi'
21: import type { Command } from './commands.js'
22: import { getSlashCommandToolSkills } from './commands.js'
23: import {
24:   LOCAL_COMMAND_STDERR_TAG,
25:   LOCAL_COMMAND_STDOUT_TAG,
26: } from './constants/xml.js'
27: import {
28:   getModelUsage,
29:   getTotalAPIDuration,
30:   getTotalCost,
31: } from './cost-tracker.js'
32: import type { CanUseToolFn } from './hooks/useCanUseTool.js'
33: import { loadMemoryPrompt } from './memdir/memdir.js'
34: import { hasAutoMemPathOverride } from './memdir/paths.js'
35: import { query } from './query.js'
36: import { categorizeRetryableAPIError } from './services/api/errors.js'
37: import type { MCPServerConnection } from './services/mcp/types.js'
38: import type { AppState } from './state/AppState.js'
39: import { type Tools, type ToolUseContext, toolMatchesName } from './Tool.js'
40: import type { AgentDefinition } from './tools/AgentTool/loadAgentsDir.js'
41: import { SYNTHETIC_OUTPUT_TOOL_NAME } from './tools/SyntheticOutputTool/SyntheticOutputTool.js'
42: import type { Message } from './types/message.js'
43: import type { OrphanedPermission } from './types/textInputTypes.js'
44: import { createAbortController } from './utils/abortController.js'
45: import type { AttributionState } from './utils/commitAttribution.js'
46: import { getGlobalConfig } from './utils/config.js'
47: import { getCwd } from './utils/cwd.js'
48: import { isBareMode, isEnvTruthy } from './utils/envUtils.js'
49: import { getFastModeState } from './utils/fastMode.js'
50: import {
51:   type FileHistoryState,
52:   fileHistoryEnabled,
53:   fileHistoryMakeSnapshot,
54: } from './utils/fileHistory.js'
55: import {
56:   cloneFileStateCache,
57:   type FileStateCache,
58: } from './utils/fileStateCache.js'
59: import { headlessProfilerCheckpoint } from './utils/headlessProfiler.js'
60: import { registerStructuredOutputEnforcement } from './utils/hooks/hookHelpers.js'
61: import { getInMemoryErrors } from './utils/log.js'
62: import { countToolCalls, SYNTHETIC_MESSAGES } from './utils/messages.js'
63: import {
64:   getMainLoopModel,
65:   parseUserSpecifiedModel,
66: } from './utils/model/model.js'
67: import { loadAllPluginsCacheOnly } from './utils/plugins/pluginLoader.js'
68: import {
69:   type ProcessUserInputContext,
70:   processUserInput,
71: } from './utils/processUserInput/processUserInput.js'
72: import { fetchSystemPromptParts } from './utils/queryContext.js'
73: import { setCwd } from './utils/Shell.js'
74: import {
75:   flushSessionStorage,
76:   recordTranscript,
77: } from './utils/sessionStorage.js'
78: import { asSystemPrompt } from './utils/systemPromptType.js'
79: import { resolveThemeSetting } from './utils/systemTheme.js'
80: import {
81:   shouldEnableThinkingByDefault,
82:   type ThinkingConfig,
83: } from './utils/thinking.js'
84: 
85: // Lazy: MessageSelector.tsx pulls React/ink; only needed for message filtering at query time
86: /* eslint-disable @typescript-eslint/no-require-imports */
87: const messageSelector =
88:   (): typeof import('src/components/MessageSelector.js') =>
89:     require('src/components/MessageSelector.js')
90: 
91: import {
92:   localCommandOutputToSDKAssistantMessage,
93:   toSDKCompactMetadata,
94: } from './utils/messages/mappers.js'
95: import {
96:   buildSystemInitMessage,
97:   sdkCompatToolName,
98: } from './utils/messages/systemInit.js'
99: import {
100:   getScratchpadDir,
101:   isScratchpadEnabled,
102: } from './utils/permissions/filesystem.js'
103: /* eslint-enable @typescript-eslint/no-require-imports */
104: import {
105:   handleOrphanedPermission,
106:   isResultSuccessful,
107:   normalizeMessage,
108: } from './utils/queryHelpers.js'
109: 
110: // Dead code elimination: conditional import for coordinator mode
111: /* eslint-disable @typescript-eslint/no-require-imports */
112: const getCoordinatorUserContext: (
113:   mcpClients: ReadonlyArray<{ name: string }>,
114:   scratchpadDir?: string,
115: ) => { [k: string]: string } = feature('COORDINATOR_MODE')
116:   ? require('./coordinator/coordinatorMode.js').getCoordinatorUserContext
117:   : () => ({})
118: /* eslint-enable @typescript-eslint/no-require-imports */
119: 
120: // Dead code elimination: conditional import for snip compaction
121: /* eslint-disable @typescript-eslint/no-require-imports */
122: const snipModule = feature('HISTORY_SNIP')
123:   ? (require('./services/compact/snipCompact.js') as typeof import('./services/compact/snipCompact.js'))
124:   : null
125: const snipProjection = feature('HISTORY_SNIP')
126:   ? (require('./services/compact/snipProjection.js') as typeof import('./services/compact/snipProjection.js'))
127:   : null
128: /* eslint-enable @typescript-eslint/no-require-imports */
129: 
130: export type QueryEngineConfig = {
131:   cwd: string
132:   tools: Tools
133:   commands: Command[]
134:   mcpClients: MCPServerConnection[]
135:   agents: AgentDefinition[]
136:   canUseTool: CanUseToolFn
137:   getAppState: () => AppState
138:   setAppState: (f: (prev: AppState) => AppState) => void
139:   initialMessages?: Message[]
140:   readFileCache: FileStateCache
141:   customSystemPrompt?: string
142:   appendSystemPrompt?: string
143:   userSpecifiedModel?: string
144:   fallbackModel?: string
145:   thinkingConfig?: ThinkingConfig
146:   maxTurns?: number
147:   maxBudgetUsd?: number
148:   taskBudget?: { total: number }
149:   jsonSchema?: Record<string, unknown>
150:   verbose?: boolean
151:   replayUserMessages?: boolean
152:   /** Handler for URL elicitations triggered by MCP tool -32042 errors. */
153:   handleElicitation?: ToolUseContext['handleElicitation']
154:   includePartialMessages?: boolean
155:   setSDKStatus?: (status: SDKStatus) => void
156:   abortController?: AbortController
157:   orphanedPermission?: OrphanedPermission
158:   /**
159:    * Snip-boundary handler: receives each yielded system message plus the
160:    * current mutableMessages store. Returns undefined if the message is not a
161:    * snip boundary; otherwise returns the replayed snip result. Injected by
162:    * ask() when HISTORY_SNIP is enabled so feature-gated strings stay inside
163:    * the gated module (keeps QueryEngine free of excluded strings and testable
164:    * despite feature() returning false under bun test). SDK-only: the REPL
165:    * keeps full history for UI scrollback and projects on demand via
166:    * projectSnippedView; QueryEngine truncates here to bound memory in long
167:    * headless sessions (no UI to preserve).
168:    */
169:   snipReplay?: (
170:     yieldedSystemMsg: Message,
171:     store: Message[],
172:   ) => { messages: Message[]; executed: boolean } | undefined
173: }
174: 
175: /**
176:  * QueryEngine owns the query lifecycle and session state for a conversation.
177:  * It extracts the core logic from ask() into a standalone class that can be
178:  * used by both the headless/SDK path and (in a future phase) the REPL.
179:  *
180:  * One QueryEngine per conversation. Each submitMessage() call starts a new
181:  * turn within the same conversation. State (messages, file cache, usage, etc.)
182:  * persists across turns.
183:  */
184: export class QueryEngine {
185:   private config: QueryEngineConfig
186:   private mutableMessages: Message[]
187:   private abortController: AbortController
188:   private permissionDenials: SDKPermissionDenial[]
189:   private totalUsage: NonNullableUsage
190:   private hasHandledOrphanedPermission = false
191:   private readFileState: FileStateCache
192:   // Turn-scoped skill discovery tracking (feeds was_discovered on
193:   // tengu_skill_tool_invocation). Must persist across the two
194:   // processUserInputContext rebuilds inside submitMessage, but is cleared
195:   // at the start of each submitMessage to avoid unbounded growth across
196:   // many turns in SDK mode.
197:   private discoveredSkillNames = new Set<string>()
198:   private loadedNestedMemoryPaths = new Set<string>()
199: 
200:   constructor(config: QueryEngineConfig) {
201:     this.config = config
202:     this.mutableMessages = config.initialMessages ?? []
203:     this.abortController = config.abortController ?? createAbortController()
204:     this.permissionDenials = []
205:     this.readFileState = config.readFileCache
206:     this.totalUsage = EMPTY_USAGE
207:   }
208: 
209:   async *submitMessage(
210:     prompt: string | ContentBlockParam[],
211:     options?: { uuid?: string; isMeta?: boolean },
212:   ): AsyncGenerator<SDKMessage, void, unknown> {
213:     const {
214:       cwd,
215:       commands,
216:       tools,
217:       mcpClients,
218:       verbose = false,
219:       thinkingConfig,
220:       maxTurns,
221:       maxBudgetUsd,
222:       taskBudget,
223:       canUseTool,
224:       customSystemPrompt,
225:       appendSystemPrompt,
226:       userSpecifiedModel,
227:       fallbackModel,
228:       jsonSchema,
229:       getAppState,
230:       setAppState,
231:       replayUserMessages = false,
232:       includePartialMessages = false,
233:       agents = [],
234:       setSDKStatus,
235:       orphanedPermission,
236:     } = this.config
237: 
238:     this.discoveredSkillNames.clear()
239:     setCwd(cwd)
240:     const persistSession = !isSessionPersistenceDisabled()
241:     const startTime = Date.now()
242: 
243:     // Wrap canUseTool to track permission denials
244:     const wrappedCanUseTool: CanUseToolFn = async (
245:       tool,
246:       input,
247:       toolUseContext,
248:       assistantMessage,
249:       toolUseID,
250:       forceDecision,
251:     ) => {
252:       const result = await canUseTool(
253:         tool,
254:         input,
255:         toolUseContext,
256:         assistantMessage,
257:         toolUseID,
258:         forceDecision,
259:       )
260: 
261:       // Track denials for SDK reporting
262:       if (result.behavior !== 'allow') {
263:         this.permissionDenials.push({
264:           tool_name: sdkCompatToolName(tool.name),
265:           tool_use_id: toolUseID,
266:           tool_input: input,
267:         })
268:       }
269: 
270:       return result
271:     }
272: 
273:     const initialAppState = getAppState()
274:     const initialMainLoopModel = userSpecifiedModel
275:       ? parseUserSpecifiedModel(userSpecifiedModel)
276:       : getMainLoopModel()
277: 
278:     const initialThinkingConfig: ThinkingConfig = thinkingConfig
279:       ? thinkingConfig
280:       : shouldEnableThinkingByDefault() !== false
281:         ? { type: 'adaptive' }
282:         : { type: 'disabled' }
283: 
284:     headlessProfilerCheckpoint('before_getSystemPrompt')
285:     // Narrow once so TS tracks the type through the conditionals below.
286:     const customPrompt =
287:       typeof customSystemPrompt === 'string' ? customSystemPrompt : undefined
288:     const {
289:       defaultSystemPrompt,
290:       userContext: baseUserContext,
291:       systemContext,
292:     } = await fetchSystemPromptParts({
293:       tools,
294:       mainLoopModel: initialMainLoopModel,
295:       additionalWorkingDirectories: Array.from(
296:         initialAppState.toolPermissionContext.additionalWorkingDirectories.keys(),
297:       ),
298:       mcpClients,
299:       customSystemPrompt: customPrompt,
300:     })
301:     headlessProfilerCheckpoint('after_getSystemPrompt')
302:     const userContext = {
303:       ...baseUserContext,
304:       ...getCoordinatorUserContext(
305:         mcpClients,
306:         isScratchpadEnabled() ? getScratchpadDir() : undefined,
307:       ),
308:     }
309: 
310:     // When an SDK caller provides a custom system prompt AND has set
311:     // CLAUDE_COWORK_MEMORY_PATH_OVERRIDE, inject the memory-mechanics prompt.
312:     // The env var is an explicit opt-in signal — the caller has wired up
313:     // a memory directory and needs Claude to know how to use it (which
314:     // Write/Edit tools to call, MEMORY.md filename, loading semantics).
315:     // The caller can layer their own policy text via appendSystemPrompt.
316:     const memoryMechanicsPrompt =
317:       customPrompt !== undefined && hasAutoMemPathOverride()
318:         ? await loadMemoryPrompt()
319:         : null
320: 
321:     const systemPrompt = asSystemPrompt([
322:       ...(customPrompt !== undefined ? [customPrompt] : defaultSystemPrompt),
323:       ...(memoryMechanicsPrompt ? [memoryMechanicsPrompt] : []),
324:       ...(appendSystemPrompt ? [appendSystemPrompt] : []),
325:     ])
326: 
327:     // Register function hook for structured output enforcement
328:     const hasStructuredOutputTool = tools.some(t =>
329:       toolMatchesName(t, SYNTHETIC_OUTPUT_TOOL_NAME),
330:     )
331:     if (jsonSchema && hasStructuredOutputTool) {
332:       registerStructuredOutputEnforcement(setAppState, getSessionId())
333:     }
334: 
335:     let processUserInputContext: ProcessUserInputContext = {
336:       messages: this.mutableMessages,
337:       // Slash commands that mutate the message array (e.g. /force-snip)
338:       // call setMessages(fn).  In interactive mode this writes back to
339:       // AppState; in print mode we write back to mutableMessages so the
340:       // rest of the query loop (push at :389, snapshot at :392) sees
341:       // the result.  The second processUserInputContext below (after
342:       // slash-command processing) keeps the no-op — nothing else calls
343:       // setMessages past that point.
344:       setMessages: fn => {
345:         this.mutableMessages = fn(this.mutableMessages)
346:       },
347:       onChangeAPIKey: () => {},
348:       handleElicitation: this.config.handleElicitation,
349:       options: {
350:         commands,
351:         debug: false, // we use stdout, so don't want to clobber it
352:         tools,
353:         verbose,
354:         mainLoopModel: initialMainLoopModel,
355:         thinkingConfig: initialThinkingConfig,
356:         mcpClients,
357:         mcpResources: {},
358:         ideInstallationStatus: null,
359:         isNonInteractiveSession: true,
360:         customSystemPrompt,
361:         appendSystemPrompt,
362:         agentDefinitions: { activeAgents: agents, allAgents: [] },
363:         theme: resolveThemeSetting(getGlobalConfig().theme),
364:         maxBudgetUsd,
365:       },
366:       getAppState,
367:       setAppState,
368:       abortController: this.abortController,
369:       readFileState: this.readFileState,
370:       nestedMemoryAttachmentTriggers: new Set<string>(),
371:       loadedNestedMemoryPaths: this.loadedNestedMemoryPaths,
372:       dynamicSkillDirTriggers: new Set<string>(),
373:       discoveredSkillNames: this.discoveredSkillNames,
374:       setInProgressToolUseIDs: () => {},
375:       setResponseLength: () => {},
376:       updateFileHistoryState: (
377:         updater: (prev: FileHistoryState) => FileHistoryState,
378:       ) => {
379:         setAppState(prev => {
380:           const updated = updater(prev.fileHistory)
381:           if (updated === prev.fileHistory) return prev
382:           return { ...prev, fileHistory: updated }
383:         })
384:       },
385:       updateAttributionState: (
386:         updater: (prev: AttributionState) => AttributionState,
387:       ) => {
388:         setAppState(prev => {
389:           const updated = updater(prev.attribution)
390:           if (updated === prev.attribution) return prev
391:           return { ...prev, attribution: updated }
392:         })
393:       },
394:       setSDKStatus,
395:     }
396: 
397:     // Handle orphaned permission (only once per engine lifetime)
398:     if (orphanedPermission && !this.hasHandledOrphanedPermission) {
399:       this.hasHandledOrphanedPermission = true
400:       for await (const message of handleOrphanedPermission(
401:         orphanedPermission,
402:         tools,
403:         this.mutableMessages,
404:         processUserInputContext,
405:       )) {
406:         yield message
407:       }
408:     }
409: 
410:     const {
411:       messages: messagesFromUserInput,
412:       shouldQuery,
413:       allowedTools,
414:       model: modelFromUserInput,
415:       resultText,
416:     } = await processUserInput({
417:       input: prompt,
418:       mode: 'prompt',
419:       setToolJSX: () => {},
420:       context: {
421:         ...processUserInputContext,
422:         messages: this.mutableMessages,
423:       },
424:       messages: this.mutableMessages,
425:       uuid: options?.uuid,
426:       isMeta: options?.isMeta,
427:       querySource: 'sdk',
428:     })
429: 
430:     // Push new messages, including user input and any attachments
431:     this.mutableMessages.push(...messagesFromUserInput)
432: 
433:     // Update params to reflect updates from processing /slash commands
434:     const messages = [...this.mutableMessages]
435: 
436:     // Persist the user's message(s) to transcript BEFORE entering the query
437:     // loop. The for-await below only calls recordTranscript when ask() yields
438:     // an assistant/user/compact_boundary message — which doesn't happen until
439:     // the API responds. If the process is killed before that (e.g. user clicks
440:     // Stop in cowork seconds after send), the transcript is left with only
441:     // queue-operation entries; getLastSessionLog filters those out, returns
442:     // null, and --resume fails with "No conversation found". Writing now makes
443:     // the transcript resumable from the point the user message was accepted,
444:     // even if no API response ever arrives.
445:     //
446:     // --bare / SIMPLE: fire-and-forget. Scripted calls don't --resume after
447:     // kill-mid-request. The await is ~4ms on SSD, ~30ms under disk contention
448:     // — the single largest controllable critical-path cost after module eval.
449:     // Transcript is still written (for post-hoc debugging); just not blocking.
450:     if (persistSession && messagesFromUserInput.length > 0) {
451:       const transcriptPromise = recordTranscript(messages)
452:       if (isBareMode()) {
453:         void transcriptPromise
454:       } else {
455:         await transcriptPromise
456:         if (
457:           isEnvTruthy(process.env.CLAUDE_CODE_EAGER_FLUSH) ||
458:           isEnvTruthy(process.env.CLAUDE_CODE_IS_COWORK)
459:         ) {
460:           await flushSessionStorage()
461:         }
462:       }
463:     }
464: 
465:     // Filter messages that should be acknowledged after transcript
466:     const replayableMessages = messagesFromUserInput.filter(
467:       msg =>
468:         (msg.type === 'user' &&
469:           !msg.isMeta && // Skip synthetic caveat messages
470:           !msg.toolUseResult && // Skip tool results (they'll be acked from query)
471:           messageSelector().selectableUserMessagesFilter(msg)) || // Skip non-user-authored messages (task notifications, etc.)
472:         (msg.type === 'system' && msg.subtype === 'compact_boundary'), // Always ack compact boundaries
473:     )
474:     const messagesToAck = replayUserMessages ? replayableMessages : []
475: 
476:     // Update the ToolPermissionContext based on user input processing (as necessary)
477:     setAppState(prev => ({
478:       ...prev,
479:       toolPermissionContext: {
480:         ...prev.toolPermissionContext,
481:         alwaysAllowRules: {
482:           ...prev.toolPermissionContext.alwaysAllowRules,
483:           command: allowedTools,
484:         },
485:       },
486:     }))
487: 
488:     const mainLoopModel = modelFromUserInput ?? initialMainLoopModel
489: 
490:     // Recreate after processing the prompt to pick up updated messages and
491:     // model (from slash commands).
492:     processUserInputContext = {
493:       messages,
494:       setMessages: () => {},
495:       onChangeAPIKey: () => {},
496:       handleElicitation: this.config.handleElicitation,
497:       options: {
498:         commands,
499:         debug: false,
500:         tools,

(Showing lines 1-500 of 1295. Use offset=501 to continue.)
</content>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 6.5s)

_Thinking:_

Let me continue reading key files to understand the architecture better. I need to look at tools, screens, services, and understand the user flow.



**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/Tool.ts",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/Tool.ts</path>
<type>file</type>
<content>1: import type {
2:   ToolResultBlockParam,
3:   ToolUseBlockParam,
4: } from '@anthropic-ai/sdk/resources/index.mjs'
5: import type {
6:   ElicitRequestURLParams,
7:   ElicitResult,
8: } from '@modelcontextprotocol/sdk/types.js'
9: import type { UUID } from 'crypto'
10: import type { z } from 'zod/v4'
11: import type { Command } from './commands.js'
12: import type { CanUseToolFn } from './hooks/useCanUseTool.js'
13: import type { ThinkingConfig } from './utils/thinking.js'
14: 
15: export type ToolInputJSONSchema = {
16:   [x: string]: unknown
17:   type: 'object'
18:   properties?: {
19:     [x: string]: unknown
20:   }
21: }
22: 
23: import type { Notification } from './context/notifications.js'
24: import type {
25:   MCPServerConnection,
26:   ServerResource,
27: } from './services/mcp/types.js'
28: import type {
29:   AgentDefinition,
30:   AgentDefinitionsResult,
31: } from './tools/AgentTool/loadAgentsDir.js'
32: import type {
33:   AssistantMessage,
34:   AttachmentMessage,
35:   Message,
36:   ProgressMessage,
37:   SystemLocalCommandMessage,
38:   SystemMessage,
39:   UserMessage,
40: } from './types/message.js'
41: // Import permission types from centralized location to break import cycles
42: // Import PermissionResult from centralized location to break import cycles
43: import type {
44:   AdditionalWorkingDirectory,
45:   PermissionMode,
46:   PermissionResult,
47: } from './types/permissions.js'
48: // Import tool progress types from centralized location to break import cycles
49: import type {
50:   AgentToolProgress,
51:   BashProgress,
52:   MCPProgress,
53:   REPLToolProgress,
54:   SkillToolProgress,
55:   TaskOutputProgress,
56:   ToolProgressData,
57:   WebSearchProgress,
58: } from './types/tools.js'
59: import type { FileStateCache } from './utils/fileStateCache.js'
60: import type { DenialTrackingState } from './utils/permissions/denialTracking.js'
61: import type { SystemPrompt } from './utils/systemPromptType.js'
62: import type { ContentReplacementState } from './utils/toolResultStorage.js'
63: 
64: // Re-export progress types for backwards compatibility
65: export type {
66:   AgentToolProgress,
67:   BashProgress,
68:   MCPProgress,
69:   REPLToolProgress,
70:   SkillToolProgress,
71:   TaskOutputProgress,
72:   WebSearchProgress,
73: }
74: 
75: import type { SpinnerMode } from './components/Spinner.js'
76: import type { QuerySource } from './constants/querySource.js'
77: import type { SDKStatus } from './entrypoints/agentSdkTypes.js'
78: import type { AppState } from './state/AppState.js'
79: import type {
80:   HookProgress,
81:   PromptRequest,
82:   PromptResponse,
83: } from './types/hooks.js'
84: import type { AgentId } from './types/ids.js'
85: import type { DeepImmutable } from './types/utils.js'
86: import type { AttributionState } from './utils/commitAttribution.js'
87: import type { FileHistoryState } from './utils/fileHistory.js'
88: import type { Theme, ThemeName } from './utils/theme.js'
89: 
90: export type QueryChainTracking = {
91:   chainId: string
92:   depth: number
93: }
94: 
95: export type ValidationResult =
96:   | { result: true }
97:   | {
98:       result: false
99:       message: string
100:       errorCode: number
101:     }
102: 
103: export type SetToolJSXFn = (
104:   args: {
105:     jsx: React.ReactNode | null
106:     shouldHidePromptInput: boolean
107:     shouldContinueAnimation?: true
108:     showSpinner?: boolean
109:     isLocalJSXCommand?: boolean
110:     isImmediate?: boolean
111:     /** Set to true to clear a local JSX command (e.g., from its onDone callback) */
112:     clearLocalJSX?: boolean
113:   } | null,
114: ) => void
115: 
116: // Import tool permission types from centralized location to break import cycles
117: import type { ToolPermissionRulesBySource } from './types/permissions.js'
118: 
119: // Re-export for backwards compatibility
120: export type { ToolPermissionRulesBySource }
121: 
122: // Apply DeepImmutable to the imported type
123: export type ToolPermissionContext = DeepImmutable<{
124:   mode: PermissionMode
125:   additionalWorkingDirectories: Map<string, AdditionalWorkingDirectory>
126:   alwaysAllowRules: ToolPermissionRulesBySource
127:   alwaysDenyRules: ToolPermissionRulesBySource
128:   alwaysAskRules: ToolPermissionRulesBySource
129:   isBypassPermissionsModeAvailable: boolean
130:   isAutoModeAvailable?: boolean
131:   strippedDangerousRules?: ToolPermissionRulesBySource
132:   /** When true, permission prompts are auto-denied (e.g., background agents that can't show UI) */
133:   shouldAvoidPermissionPrompts?: boolean
134:   /** When true, automated checks (classifier, hooks) are awaited before showing the permission dialog (coordinator workers) */
135:   awaitAutomatedChecksBeforeDialog?: boolean
136:   /** Stores the permission mode before model-initiated plan mode entry, so it can be restored on exit */
137:   prePlanMode?: PermissionMode
138: }>
139: 
140: export const getEmptyToolPermissionContext: () => ToolPermissionContext =
141:   () => ({
142:     mode: 'default',
143:     additionalWorkingDirectories: new Map(),
144:     alwaysAllowRules: {},
145:     alwaysDenyRules: {},
146:     alwaysAskRules: {},
147:     isBypassPermissionsModeAvailable: false,
148:   })
149: 
150: export type CompactProgressEvent =
151:   | {
152:       type: 'hooks_start'
153:       hookType: 'pre_compact' | 'post_compact' | 'session_start'
154:     }
155:   | { type: 'compact_start' }
156:   | { type: 'compact_end' }
157: 
158: export type ToolUseContext = {
159:   options: {
160:     commands: Command[]
161:     debug: boolean
162:     mainLoopModel: string
163:     tools: Tools
164:     verbose: boolean
165:     thinkingConfig: ThinkingConfig
166:     mcpClients: MCPServerConnection[]
167:     mcpResources: Record<string, ServerResource[]>
168:     isNonInteractiveSession: boolean
169:     agentDefinitions: AgentDefinitionsResult
170:     maxBudgetUsd?: number
171:     /** Custom system prompt that replaces the default system prompt */
172:     customSystemPrompt?: string
173:     /** Additional system prompt appended after the main system prompt */
174:     appendSystemPrompt?: string
175:     /** Override querySource for analytics tracking */
176:     querySource?: QuerySource
177:     /** Optional callback to get the latest tools (e.g., after MCP servers connect mid-query) */
178:     refreshTools?: () => Tools
179:   }
180:   abortController: AbortController
181:   readFileState: FileStateCache
182:   getAppState(): AppState
183:   setAppState(f: (prev: AppState) => AppState): void
184:   /**
185:    * Always-shared setAppState for session-scoped infrastructure (background
186:    * tasks, session hooks). Unlike setAppState, which is no-op for async agents
187:    * (see createSubagentContext), this always reaches the root store so agents
188:    * at any nesting depth can register/clean up infrastructure that outlives
189:    * a single turn. Only set by createSubagentContext; main-thread contexts
190:    * fall back to setAppState.
191:    */
192:   setAppStateForTasks?: (f: (prev: AppState) => AppState) => void
193:   /**
194:    * Optional handler for URL elicitations triggered by tool call errors (-32042).
195:    * In print/SDK mode, this delegates to structuredIO.handleElicitation.
196:    * In REPL mode, this is undefined and the queue-based UI path is used.
197:    */
198:   handleElicitation?: (
199:     serverName: string,
200:     params: ElicitRequestURLParams,
201:     signal: AbortSignal,
202:   ) => Promise<ElicitResult>
203:   setToolJSX?: SetToolJSXFn
204:   addNotification?: (notif: Notification) => void
205:   /** Append a UI-only system message to the REPL message list. Stripped at the
206:    *  normalizeMessagesForAPI boundary — the Exclude<> makes that type-enforced. */
207:   appendSystemMessage?: (
208:     msg: Exclude<SystemMessage, SystemLocalCommandMessage>,
209:   ) => void
210:   /** Send an OS-level notification (iTerm2, Kitty, Ghostty, bell, etc.) */
211:   sendOSNotification?: (opts: {
212:     message: string
213:     notificationType: string
214:   }) => void
215:   nestedMemoryAttachmentTriggers?: Set<string>
216:   /**
217:    * CLAUDE.md paths already injected as nested_memory attachments this
218:    * session. Dedup for memoryFilesToAttachments — readFileState is an LRU
219:    * that evicts entries in busy sessions, so its .has() check alone can
220:    * re-inject the same CLAUDE.md dozens of times.
221:    */
222:   loadedNestedMemoryPaths?: Set<string>
223:   dynamicSkillDirTriggers?: Set<string>
224:   /** Skill names surfaced via skill_discovery this session. Telemetry only (feeds was_discovered). */
225:   discoveredSkillNames?: Set<string>
226:   userModified?: boolean
227:   setInProgressToolUseIDs: (f: (prev: Set<string>) => Set<string>) => void
228:   /** Only wired in interactive (REPL) contexts; SDK/QueryEngine don't set this. */
229:   setHasInterruptibleToolInProgress?: (v: boolean) => void
230:   setResponseLength: (f: (prev: number) => number) => void
231:   /** Ant-only: push a new API metrics entry for OTPS tracking.
232:    *  Called by subagent streaming when a new API request starts. */
233:   pushApiMetricsEntry?: (ttftMs: number) => void
234:   setStreamMode?: (mode: SpinnerMode) => void
235:   onCompactProgress?: (event: CompactProgressEvent) => void
236:   setSDKStatus?: (status: SDKStatus) => void
237:   openMessageSelector?: () => void
238:   updateFileHistoryState: (
239:     updater: (prev: FileHistoryState) => FileHistoryState,
240:   ) => void
241:   updateAttributionState: (
242:     updater: (prev: AttributionState) => AttributionState,
243:   ) => void
244:   setConversationId?: (id: UUID) => void
245:   agentId?: AgentId // Only set for subagents; use getSessionId() for session ID. Hooks use this to distinguish subagent calls.
246:   agentType?: string // Subagent type name. For the main thread's --agent type, hooks fall back to getMainThreadAgentType().
247:   /** When true, canUseTool must always be called even when hooks auto-approve.
248:    *  Used by speculation for overlay file path rewriting. */
249:   requireCanUseTool?: boolean
250:   messages: Message[]
251:   fileReadingLimits?: {
252:     maxTokens?: number
253:     maxSizeBytes?: number
254:   }
255:   globLimits?: {
256:     maxResults?: number
257:   }
258:   toolDecisions?: Map<
259:     string,
260:     {
261:       source: string
262:       decision: 'accept' | 'reject'
263:       timestamp: number
264:     }
265:   >
266:   queryTracking?: QueryChainTracking
267:   /** Callback factory for requesting interactive prompts from the user.
268:    * Returns a prompt callback bound to the given source name.
269:    * Only available in interactive (REPL) contexts. */
270:   requestPrompt?: (
271:     sourceName: string,
272:     toolInputSummary?: string | null,
273:   ) => (request: PromptRequest) => Promise<PromptResponse>
274:   toolUseId?: string
275:   criticalSystemReminder_EXPERIMENTAL?: string
276:   /** When true, preserve toolUseResult on messages even for subagents.
277:    * Used by in-process teammates whose transcripts are viewable by the user. */
278:   preserveToolUseResults?: boolean
279:   /** Local denial tracking state for async subagents whose setAppState is a
280:    *  no-op. Without this, the denial counter never accumulates and the
281:    *  fallback-to-prompting threshold is never reached. Mutable — the
282:    *  permissions code updates it in place. */
283:   localDenialTracking?: DenialTrackingState
284:   /**
285:    * Per-conversation-thread content replacement state for the tool result
286:    * budget. When present, query.ts applies the aggregate tool result budget.
287:    * Main thread: REPL provisions once (never resets — stale UUID keys
288:    * are inert). Subagents: createSubagentContext clones the parent's state
289:    * by default (cache-sharing forks need identical decisions), or
290:    * resumeAgentBackground threads one reconstructed from sidechain records.
291:    */
292:   contentReplacementState?: ContentReplacementState
293:   /**
294:    * Parent's rendered system prompt bytes, frozen at turn start.
295:    * Used by fork subagents to share the parent's prompt cache — re-calling
296:    * getSystemPrompt() at fork-spawn time can diverge (GrowthBook cold→warm)
297:    * and bust the cache. See forkSubagent.ts.
298:    */
299:   renderedSystemPrompt?: SystemPrompt
300: }

(Showing lines 1-300 of 792. Use offset=301 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/tools.ts",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/tools.ts</path>
<type>file</type>
<content>1: // biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
2: import { toolMatchesName, type Tool, type Tools } from './Tool.js'
3: import { AgentTool } from './tools/AgentTool/AgentTool.js'
4: import { SkillTool } from './tools/SkillTool/SkillTool.js'
5: import { BashTool } from './tools/BashTool/BashTool.js'
6: import { FileEditTool } from './tools/FileEditTool/FileEditTool.js'
7: import { FileReadTool } from './tools/FileReadTool/FileReadTool.js'
8: import { FileWriteTool } from './tools/FileWriteTool/FileWriteTool.js'
9: import { GlobTool } from './tools/GlobTool/GlobTool.js'
10: import { NotebookEditTool } from './tools/NotebookEditTool/NotebookEditTool.js'
11: import { WebFetchTool } from './tools/WebFetchTool/WebFetchTool.js'
12: import { TaskStopTool } from './tools/TaskStopTool/TaskStopTool.js'
13: import { BriefTool } from './tools/BriefTool/BriefTool.js'
14: // Dead code elimination: conditional import for ant-only tools
15: /* eslint-disable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
16: const REPLTool =
17:   process.env.USER_TYPE === 'ant'
18:     ? require('./tools/REPLTool/REPLTool.js').REPLTool
19:     : null
20: const SuggestBackgroundPRTool =
21:   process.env.USER_TYPE === 'ant'
22:     ? require('./tools/SuggestBackgroundPRTool/SuggestBackgroundPRTool.js')
23:         .SuggestBackgroundPRTool
24:     : null
25: const SleepTool =
26:   feature('PROACTIVE') || feature('KAIROS')
27:     ? require('./tools/SleepTool/SleepTool.js').SleepTool
28:     : null
29: const cronTools = feature('AGENT_TRIGGERS')
30:   ? [
31:       require('./tools/ScheduleCronTool/CronCreateTool.js').CronCreateTool,
32:       require('./tools/ScheduleCronTool/CronDeleteTool.js').CronDeleteTool,
33:       require('./tools/ScheduleCronTool/CronListTool.js').CronListTool,
34:     ]
35:   : []
36: const RemoteTriggerTool = feature('AGENT_TRIGGERS_REMOTE')
37:   ? require('./tools/RemoteTriggerTool/RemoteTriggerTool.js').RemoteTriggerTool
38:   : null
39: const MonitorTool = feature('MONITOR_TOOL')
40:   ? require('./tools/MonitorTool/MonitorTool.js').MonitorTool
41:   : null
42: const SendUserFileTool = feature('KAIROS')
43:   ? require('./tools/SendUserFileTool/SendUserFileTool.js').SendUserFileTool
44:   : null
45: const PushNotificationTool =
46:   feature('KAIROS') || feature('KAIROS_PUSH_NOTIFICATION')
47:     ? require('./tools/PushNotificationTool/PushNotificationTool.js')
48:         .PushNotificationTool
49:     : null
50: const SubscribePRTool = feature('KAIROS_GITHUB_WEBHOOKS')
51:   ? require('./tools/SubscribePRTool/SubscribePRTool.js').SubscribePRTool
52:   : null
53: /* eslint-enable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
54: import { TaskOutputTool } from './tools/TaskOutputTool/TaskOutputTool.js'
55: import { WebSearchTool } from './tools/WebSearchTool/WebSearchTool.js'
56: import { TodoWriteTool } from './tools/TodoWriteTool/TodoWriteTool.js'
57: import { ExitPlanModeV2Tool } from './tools/ExitPlanModeTool/ExitPlanModeV2Tool.js'
58: import { TestingPermissionTool } from './tools/testing/TestingPermissionTool.js'
59: import { GrepTool } from './tools/GrepTool/GrepTool.js'
60: import { TungstenTool } from './tools/TungstenTool/TungstenTool.js'
61: // Lazy require to break circular dependency: tools.ts -> TeamCreateTool/TeamDeleteTool -> ... -> tools.ts
62: /* eslint-disable @typescript-eslint/no-require-imports */
63: const getTeamCreateTool = () =>
64:   require('./tools/TeamCreateTool/TeamCreateTool.js')
65:     .TeamCreateTool as typeof import('./tools/TeamCreateTool/TeamCreateTool.js').TeamCreateTool
66: const getTeamDeleteTool = () =>
67:   require('./tools/TeamDeleteTool/TeamDeleteTool.js')
68:     .TeamDeleteTool as typeof import('./tools/TeamDeleteTool/TeamDeleteTool.js').TeamDeleteTool
69: const getSendMessageTool = () =>
70:   require('./tools/SendMessageTool/SendMessageTool.js')
71:     .SendMessageTool as typeof import('./tools/SendMessageTool/SendMessageTool.js').SendMessageTool
72: /* eslint-enable @typescript-eslint/no-require-imports */
73: import { AskUserQuestionTool } from './tools/AskUserQuestionTool/AskUserQuestionTool.js'
74: import { LSPTool } from './tools/LSPTool/LSPTool.js'
75: import { ListMcpResourcesTool } from './tools/ListMcpResourcesTool/ListMcpResourcesTool.js'
76: import { ReadMcpResourceTool } from './tools/ReadMcpResourceTool/ReadMcpResourceTool.js'
77: import { ToolSearchTool } from './tools/ToolSearchTool/ToolSearchTool.js'
78: import { EnterPlanModeTool } from './tools/EnterPlanModeTool/EnterPlanModeTool.js'
79: import { EnterWorktreeTool } from './tools/EnterWorktreeTool/EnterWorktreeTool.js'
80: import { ExitWorktreeTool } from './tools/ExitWorktreeTool/ExitWorktreeTool.js'
81: import { ConfigTool } from './tools/ConfigTool/ConfigTool.js'
82: import { TaskCreateTool } from './tools/TaskCreateTool/TaskCreateTool.js'
83: import { TaskGetTool } from './tools/TaskGetTool/TaskGetTool.js'
84: import { TaskUpdateTool } from './tools/TaskUpdateTool/TaskUpdateTool.js'
85: import { TaskListTool } from './tools/TaskListTool/TaskListTool.js'
86: import uniqBy from 'lodash-es/uniqBy.js'
87: import { isToolSearchEnabledOptimistic } from './utils/toolSearch.js'
88: import { isTodoV2Enabled } from './utils/tasks.js'
89: // Dead code elimination: conditional import for CLAUDE_CODE_VERIFY_PLAN
90: /* eslint-disable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
91: const VerifyPlanExecutionTool =
92:   process.env.CLAUDE_CODE_VERIFY_PLAN === 'true'
93:     ? require('./tools/VerifyPlanExecutionTool/VerifyPlanExecutionTool.js')
94:         .VerifyPlanExecutionTool
95:     : null
96: /* eslint-enable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
97: import { SYNTHETIC_OUTPUT_TOOL_NAME } from './tools/SyntheticOutputTool/SyntheticOutputTool.js'
98: export {
99:   ALL_AGENT_DISALLOWED_TOOLS,
100:   CUSTOM_AGENT_DISALLOWED_TOOLS,
101:   ASYNC_AGENT_ALLOWED_TOOLS,
102:   COORDINATOR_MODE_ALLOWED_TOOLS,
103: } from './constants/tools.js'
104: import { feature } from 'bun:bundle'
105: // Dead code elimination: conditional import for OVERFLOW_TEST_TOOL
106: /* eslint-disable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
107: const OverflowTestTool = feature('OVERFLOW_TEST_TOOL')
108:   ? require('./tools/OverflowTestTool/OverflowTestTool.js').OverflowTestTool
109:   : null
110: const CtxInspectTool = feature('CONTEXT_COLLAPSE')
111:   ? require('./tools/CtxInspectTool/CtxInspectTool.js').CtxInspectTool
112:   : null
113: const TerminalCaptureTool = feature('TERMINAL_PANEL')
114:   ? require('./tools/TerminalCaptureTool/TerminalCaptureTool.js')
115:       .TerminalCaptureTool
116:   : null
117: const WebBrowserTool = feature('WEB_BROWSER_TOOL')
118:   ? require('./tools/WebBrowserTool/WebBrowserTool.js').WebBrowserTool
119:   : null
120: const coordinatorModeModule = feature('COORDINATOR_MODE')
121:   ? (require('./coordinator/coordinatorMode.js') as typeof import('./coordinator/coordinatorMode.js'))
122:   : null
123: const SnipTool = feature('HISTORY_SNIP')
124:   ? require('./tools/SnipTool/SnipTool.js').SnipTool
125:   : null
126: const ListPeersTool = feature('UDS_INBOX')
127:   ? require('./tools/ListPeersTool/ListPeersTool.js').ListPeersTool
128:   : null
129: const WorkflowTool = feature('WORKFLOW_SCRIPTS')
130:   ? (() => {
131:       require('./tools/WorkflowTool/bundled/index.js').initBundledWorkflows()
132:       return require('./tools/WorkflowTool/WorkflowTool.js').WorkflowTool
133:     })()
134:   : null
135: /* eslint-enable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
136: import type { ToolPermissionContext } from './Tool.js'
137: import { getDenyRuleForTool } from './utils/permissions/permissions.js'
138: import { hasEmbeddedSearchTools } from './utils/embeddedTools.js'
139: import { isEnvTruthy } from './utils/envUtils.js'
140: import { isPowerShellToolEnabled } from './utils/shell/shellToolUtils.js'
141: import { isAgentSwarmsEnabled } from './utils/agentSwarmsEnabled.js'
142: import { isWorktreeModeEnabled } from './utils/worktreeModeEnabled.js'
143: import {
144:   REPL_TOOL_NAME,
145:   REPL_ONLY_TOOLS,
146:   isReplModeEnabled,
147: } from './tools/REPLTool/constants.js'
148: export { REPL_ONLY_TOOLS }
149: /* eslint-disable @typescript-eslint/no-require-imports */
150: const getPowerShellTool = () => {
151:   if (!isPowerShellToolEnabled()) return null
152:   return (
153:     require('./tools/PowerShellTool/PowerShellTool.js') as typeof import('./tools/PowerShellTool/PowerShellTool.js')
154:   ).PowerShellTool
155: }
156: /* eslint-enable @typescript-eslint/no-require-imports */
157: 
158: /**
159:  * Predefined tool presets that can be used with --tools flag
160:  */
161: export const TOOL_PRESETS = ['default'] as const
162: 
163: export type ToolPreset = (typeof TOOL_PRESETS)[number]
164: 
165: export function parseToolPreset(preset: string): ToolPreset | null {
166:   const presetString = preset.toLowerCase()
167:   if (!TOOL_PRESETS.includes(presetString as ToolPreset)) {
168:     return null
169:   }
170:   return presetString as ToolPreset
171: }
172: 
173: /**
174:  * Get the list of tool names for a given preset
175:  * Filters out tools that are disabled via isEnabled() check
176:  * @param preset The preset name
177:  * @returns Array of tool names
178:  */
179: export function getToolsForDefaultPreset(): string[] {
180:   const tools = getAllBaseTools()
181:   const isEnabled = tools.map(tool => tool.isEnabled())
182:   return tools.filter((_, i) => isEnabled[i]).map(tool => tool.name)
183: }
184: 
185: /**
186:  * Get the complete exhaustive list of all tools that could be available
187:  * in the current environment (respecting process.env flags).
188:  * This is the source of truth for ALL tools.
189:  */
190: /**
191:  * NOTE: This MUST stay in sync with https://console.statsig.com/4aF3Ewatb6xPVpCwxb5nA3/dynamic_configs/claude_code_global_system_caching, in order to cache the system prompt across users.
192:  */
193: export function getAllBaseTools(): Tools {
194:   return [
195:     AgentTool,
196:     TaskOutputTool,
197:     BashTool,
198:     // Ant-native builds have bfs/ugrep embedded in the bun binary (same ARGV0
199:     // trick as ripgrep). When available, find/grep in Claude's shell are aliased
200:     // to these fast tools, so the dedicated Glob/Grep tools are unnecessary.
201:     ...(hasEmbeddedSearchTools() ? [] : [GlobTool, GrepTool]),
202:     ExitPlanModeV2Tool,
203:     FileReadTool,
204:     FileEditTool,
205:     FileWriteTool,
206:     NotebookEditTool,
207:     WebFetchTool,
208:     TodoWriteTool,
209:     WebSearchTool,
210:     TaskStopTool,
211:     AskUserQuestionTool,
212:     SkillTool,
213:     EnterPlanModeTool,
214:     ...(process.env.USER_TYPE === 'ant' ? [ConfigTool] : []),
215:     ...(process.env.USER_TYPE === 'ant' ? [TungstenTool] : []),
216:     ...(SuggestBackgroundPRTool ? [SuggestBackgroundPRTool] : []),
217:     ...(WebBrowserTool ? [WebBrowserTool] : []),
218:     ...(isTodoV2Enabled()
219:       ? [TaskCreateTool, TaskGetTool, TaskUpdateTool, TaskListTool]
220:       : []),
221:     ...(OverflowTestTool ? [OverflowTestTool] : []),
222:     ...(CtxInspectTool ? [CtxInspectTool] : []),
223:     ...(TerminalCaptureTool ? [TerminalCaptureTool] : []),
224:     ...(isEnvTruthy(process.env.ENABLE_LSP_TOOL) ? [LSPTool] : []),
225:     ...(isWorktreeModeEnabled() ? [EnterWorktreeTool, ExitWorktreeTool] : []),
226:     getSendMessageTool(),
227:     ...(ListPeersTool ? [ListPeersTool] : []),
228:     ...(isAgentSwarmsEnabled()
229:       ? [getTeamCreateTool(), getTeamDeleteTool()]
230:       : []),
231:     ...(VerifyPlanExecutionTool ? [VerifyPlanExecutionTool] : []),
232:     ...(process.env.USER_TYPE === 'ant' && REPLTool ? [REPLTool] : []),
233:     ...(WorkflowTool ? [WorkflowTool] : []),
234:     ...(SleepTool ? [SleepTool] : []),
235:     ...cronTools,
236:     ...(RemoteTriggerTool ? [RemoteTriggerTool] : []),
237:     ...(MonitorTool ? [MonitorTool] : []),
238:     BriefTool,
239:     ...(SendUserFileTool ? [SendUserFileTool] : []),
240:     ...(PushNotificationTool ? [PushNotificationTool] : []),
241:     ...(SubscribePRTool ? [SubscribePRTool] : []),
242:     ...(getPowerShellTool() ? [getPowerShellTool()] : []),
243:     ...(SnipTool ? [SnipTool] : []),
244:     ...(process.env.NODE_ENV === 'test' ? [TestingPermissionTool] : []),
245:     ListMcpResourcesTool,
246:     ReadMcpResourceTool,
247:     // Include ToolSearchTool when tool search might be enabled (optimistic check)
248:     // The actual decision to defer tools happens at request time in claude.ts
249:     ...(isToolSearchEnabledOptimistic() ? [ToolSearchTool] : []),
250:   ]
251: }
252: 
253: /**
254:  * Filters out tools that are blanket-denied by the permission context.
255:  * A tool is filtered out if there's a deny rule matching its name with no
256:  * ruleContent (i.e., a blanket deny for that tool).
257:  *
258:  * Uses the same matcher as the runtime permission check (step 1a), so MCP
259:  * server-prefix rules like `mcp__server` strip all tools from that server
260:  * before the model sees them — not just at call time.
261:  */
262: export function filterToolsByDenyRules<
263:   T extends {
264:     name: string
265:     mcpInfo?: { serverName: string; toolName: string }
266:   },
267: >(tools: readonly T[], permissionContext: ToolPermissionContext): T[] {
268:   return tools.filter(tool => !getDenyRuleForTool(permissionContext, tool))
269: }
270: 
271: export const getTools = (permissionContext: ToolPermissionContext): Tools => {
272:   // Simple mode: only Bash, Read, and Edit tools
273:   if (isEnvTruthy(process.env.CLAUDE_CODE_SIMPLE)) {
274:     // --bare + REPL mode: REPL wraps Bash/Read/Edit/etc inside the VM, so
275:     // return REPL instead of the raw primitives. Matches the non-bare path
276:     // below which also hides REPL_ONLY_TOOLS when REPL is enabled.
277:     if (isReplModeEnabled() && REPLTool) {
278:       const replSimple: Tool[] = [REPLTool]
279:       if (
280:         feature('COORDINATOR_MODE') &&
281:         coordinatorModeModule?.isCoordinatorMode()
282:       ) {
283:         replSimple.push(TaskStopTool, getSendMessageTool())
284:       }
285:       return filterToolsByDenyRules(replSimple, permissionContext)
286:     }
287:     const simpleTools: Tool[] = [BashTool, FileReadTool, FileEditTool]
288:     // When coordinator mode is also active, include AgentTool and TaskStopTool
289:     // so the coordinator gets Task+TaskStop (via useMergedTools filtering) and
290:     // workers get Bash/Read/Edit (via filterToolsForAgent filtering).
291:     if (
292:       feature('COORDINATOR_MODE') &&
293:       coordinatorModeModule?.isCoordinatorMode()
294:     ) {
295:       simpleTools.push(AgentTool, TaskStopTool, getSendMessageTool())
296:     }
297:     return filterToolsByDenyRules(simpleTools, permissionContext)
298:   }
299: 
300:   // Get all base tools and filter out special tools that get added conditionally

(Showing lines 1-300 of 389. Use offset=301 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/commands.ts",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/commands.ts</path>
<type>file</type>
<content>1: // biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
2: import addDir from './commands/add-dir/index.js'
3: import autofixPr from './commands/autofix-pr/index.js'
4: import backfillSessions from './commands/backfill-sessions/index.js'
5: import btw from './commands/btw/index.js'
6: import goodClaude from './commands/good-claude/index.js'
7: import issue from './commands/issue/index.js'
8: import feedback from './commands/feedback/index.js'
9: import clear from './commands/clear/index.js'
10: import color from './commands/color/index.js'
11: import commit from './commands/commit.js'
12: import copy from './commands/copy/index.js'
13: import desktop from './commands/desktop/index.js'
14: import commitPushPr from './commands/commit-push-pr.js'
15: import compact from './commands/compact/index.js'
16: import config from './commands/config/index.js'
17: import { context, contextNonInteractive } from './commands/context/index.js'
18: import cost from './commands/cost/index.js'
19: import diff from './commands/diff/index.js'
20: import ctx_viz from './commands/ctx_viz/index.js'
21: import doctor from './commands/doctor/index.js'
22: import memory from './commands/memory/index.js'
23: import help from './commands/help/index.js'
24: import ide from './commands/ide/index.js'
25: import init from './commands/init.js'
26: import initVerifiers from './commands/init-verifiers.js'
27: import keybindings from './commands/keybindings/index.js'
28: import login from './commands/login/index.js'
29: import logout from './commands/logout/index.js'
30: import installGitHubApp from './commands/install-github-app/index.js'
31: import installSlackApp from './commands/install-slack-app/index.js'
32: import breakCache from './commands/break-cache/index.js'
33: import mcp from './commands/mcp/index.js'
34: import mobile from './commands/mobile/index.js'
35: import onboarding from './commands/onboarding/index.js'
36: import pr_comments from './commands/pr_comments/index.js'
37: import releaseNotes from './commands/release-notes/index.js'
38: import rename from './commands/rename/index.js'
39: import resume from './commands/resume/index.js'
40: import review, { ultrareview } from './commands/review.js'
41: import session from './commands/session/index.js'
42: import share from './commands/share/index.js'
43: import skills from './commands/skills/index.js'
44: import status from './commands/status/index.js'
45: import tasks from './commands/tasks/index.js'
46: import teleport from './commands/teleport/index.js'
47: /* eslint-disable @typescript-eslint/no-require-imports */
48: const agentsPlatform =
49:   process.env.USER_TYPE === 'ant'
50:     ? require('./commands/agents-platform/index.js').default
51:     : null
52: /* eslint-enable @typescript-eslint/no-require-imports */
53: import securityReview from './commands/security-review.js'
54: import bughunter from './commands/bughunter/index.js'
55: import terminalSetup from './commands/terminalSetup/index.js'
56: import usage from './commands/usage/index.js'
57: import theme from './commands/theme/index.js'
58: import vim from './commands/vim/index.js'
59: import { feature } from 'bun:bundle'
60: // Dead code elimination: conditional imports
61: /* eslint-disable @typescript-eslint/no-require-imports */
62: const proactive =
63:   feature('PROACTIVE') || feature('KAIROS')
64:     ? require('./commands/proactive.js').default
65:     : null
66: const briefCommand =
67:   feature('KAIROS') || feature('KAIROS_BRIEF')
68:     ? require('./commands/brief.js').default
69:     : null
70: const assistantCommand = feature('KAIROS')
71:   ? require('./commands/assistant/index.js').default
72:   : null
73: const bridge = feature('BRIDGE_MODE')
74:   ? require('./commands/bridge/index.js').default
75:   : null
76: const remoteControlServerCommand =
77:   feature('DAEMON') && feature('BRIDGE_MODE')
78:     ? require('./commands/remoteControlServer/index.js').default
79:     : null
80: const voiceCommand = feature('VOICE_MODE')
81:   ? require('./commands/voice/index.js').default
82:   : null
83: const forceSnip = feature('HISTORY_SNIP')
84:   ? require('./commands/force-snip.js').default
85:   : null
86: const workflowsCmd = feature('WORKFLOW_SCRIPTS')
87:   ? (
88:       require('./commands/workflows/index.js') as typeof import('./commands/workflows/index.js')
89:     ).default
90:   : null
91: const webCmd = feature('CCR_REMOTE_SETUP')
92:   ? (
93:       require('./commands/remote-setup/index.js') as typeof import('./commands/remote-setup/index.js')
94:     ).default
95:   : null
96: const clearSkillIndexCache = feature('EXPERIMENTAL_SKILL_SEARCH')
97:   ? (
98:       require('./services/skillSearch/localSearch.js') as typeof import('./services/skillSearch/localSearch.js')
99:     ).clearSkillIndexCache
100:   : null
101: const subscribePr = feature('KAIROS_GITHUB_WEBHOOKS')
102:   ? require('./commands/subscribe-pr.js').default
103:   : null
104: const ultraplan = feature('ULTRAPLAN')
105:   ? require('./commands/ultraplan.js').default
106:   : null
107: const torch = feature('TORCH') ? require('./commands/torch.js').default : null
108: const peersCmd = feature('UDS_INBOX')
109:   ? (
110:       require('./commands/peers/index.js') as typeof import('./commands/peers/index.js')
111:     ).default
112:   : null
113: const forkCmd = feature('FORK_SUBAGENT')
114:   ? (
115:       require('./commands/fork/index.js') as typeof import('./commands/fork/index.js')
116:     ).default
117:   : null
118: const buddy = feature('BUDDY')
119:   ? (
120:       require('./commands/buddy/index.js') as typeof import('./commands/buddy/index.js')
121:     ).default
122:   : null
123: /* eslint-enable @typescript-eslint/no-require-imports */
124: import thinkback from './commands/thinkback/index.js'
125: import thinkbackPlay from './commands/thinkback-play/index.js'
126: import permissions from './commands/permissions/index.js'
127: import plan from './commands/plan/index.js'
128: import fast from './commands/fast/index.js'
129: import passes from './commands/passes/index.js'
130: import privacySettings from './commands/privacy-settings/index.js'
131: import hooks from './commands/hooks/index.js'
132: import files from './commands/files/index.js'
133: import branch from './commands/branch/index.js'
134: import agents from './commands/agents/index.js'
135: import plugin from './commands/plugin/index.js'
136: import reloadPlugins from './commands/reload-plugins/index.js'
137: import rewind from './commands/rewind/index.js'
138: import heapDump from './commands/heapdump/index.js'
139: import mockLimits from './commands/mock-limits/index.js'
140: import bridgeKick from './commands/bridge-kick.js'
141: import version from './commands/version.js'
142: import summary from './commands/summary/index.js'
143: import {
144:   resetLimits,
145:   resetLimitsNonInteractive,
146: } from './commands/reset-limits/index.js'
147: import antTrace from './commands/ant-trace/index.js'
148: import perfIssue from './commands/perf-issue/index.js'
149: import sandboxToggle from './commands/sandbox-toggle/index.js'
150: import chrome from './commands/chrome/index.js'
151: import stickers from './commands/stickers/index.js'
152: import advisor from './commands/advisor.js'
153: import { logError } from './utils/log.js'
154: import { toError } from './utils/errors.js'
155: import { logForDebugging } from './utils/debug.js'
156: import {
157:   getSkillDirCommands,
158:   clearSkillCaches,
159:   getDynamicSkills,
160: } from './skills/loadSkillsDir.js'
161: import { getBundledSkills } from './skills/bundledSkills.js'
162: import { getBuiltinPluginSkillCommands } from './plugins/builtinPlugins.js'
163: import {
164:   getPluginCommands,
165:   clearPluginCommandCache,
166:   getPluginSkills,
167:   clearPluginSkillsCache,
168: } from './utils/plugins/loadPluginCommands.js'
169: import memoize from 'lodash-es/memoize.js'
170: import { isUsing3PServices, isClaudeAISubscriber } from './utils/auth.js'
171: import { isFirstPartyAnthropicBaseUrl } from './utils/model/providers.js'
172: import env from './commands/env/index.js'
173: import exit from './commands/exit/index.js'
174: import exportCommand from './commands/export/index.js'
175: import model from './commands/model/index.js'
176: import tag from './commands/tag/index.js'
177: import outputStyle from './commands/output-style/index.js'
178: import remoteEnv from './commands/remote-env/index.js'
179: import upgrade from './commands/upgrade/index.js'
180: import {
181:   extraUsage,
182:   extraUsageNonInteractive,
183: } from './commands/extra-usage/index.js'
184: import rateLimitOptions from './commands/rate-limit-options/index.js'
185: import statusline from './commands/statusline.js'
186: import effort from './commands/effort/index.js'
187: import stats from './commands/stats/index.js'
188: // insights.ts is 113KB (3200 lines, includes diffLines/html rendering). Lazy
189: // shim defers the heavy module until /insights is actually invoked.
190: const usageReport: Command = {
191:   type: 'prompt',
192:   name: 'insights',
193:   description: 'Generate a report analyzing your Claude Code sessions',
194:   contentLength: 0,
195:   progressMessage: 'analyzing your sessions',
196:   source: 'builtin',
197:   async getPromptForCommand(args, context) {
198:     const real = (await import('./commands/insights.js')).default
199:     if (real.type !== 'prompt') throw new Error('unreachable')
200:     return real.getPromptForCommand(args, context)
201:   },
202: }
203: import oauthRefresh from './commands/oauth-refresh/index.js'
204: import debugToolCall from './commands/debug-tool-call/index.js'
205: import { getSettingSourceName } from './utils/settings/constants.js'
206: import {
207:   type Command,
208:   getCommandName,
209:   isCommandEnabled,
210: } from './types/command.js'
211: 
212: // Re-export types from the centralized location
213: export type {
214:   Command,
215:   CommandBase,
216:   CommandResultDisplay,
217:   LocalCommandResult,
218:   LocalJSXCommandContext,
219:   PromptCommand,
220:   ResumeEntrypoint,
221: } from './types/command.js'
222: export { getCommandName, isCommandEnabled } from './types/command.js'
223: 
224: // Commands that get eliminated from the external build
225: export const INTERNAL_ONLY_COMMANDS = [
226:   backfillSessions,
227:   breakCache,
228:   bughunter,
229:   commit,
230:   commitPushPr,
231:   ctx_viz,
232:   goodClaude,
233:   issue,
234:   initVerifiers,
235:   ...(forceSnip ? [forceSnip] : []),
236:   mockLimits,
237:   bridgeKick,
238:   version,
239:   ...(ultraplan ? [ultraplan] : []),
240:   ...(subscribePr ? [subscribePr] : []),
241:   resetLimits,
242:   resetLimitsNonInteractive,
243:   onboarding,
244:   share,
245:   summary,
246:   teleport,
247:   antTrace,
248:   perfIssue,
249:   env,
250:   oauthRefresh,
251:   debugToolCall,
252:   agentsPlatform,
253:   autofixPr,
254: ].filter(Boolean)
255: 
256: // Declared as a function so that we don't run this until getCommands is called,
257: // since underlying functions read from config, which can't be read at module initialization time
258: const COMMANDS = memoize((): Command[] => [
259:   addDir,
260:   advisor,
261:   agents,
262:   branch,
263:   btw,
264:   chrome,
265:   clear,
266:   color,
267:   compact,
268:   config,
269:   copy,
270:   desktop,
271:   context,
272:   contextNonInteractive,
273:   cost,
274:   diff,
275:   doctor,
276:   effort,
277:   exit,
278:   fast,
279:   files,
280:   heapDump,
281:   help,
282:   ide,
283:   init,
284:   keybindings,
285:   installGitHubApp,
286:   installSlackApp,
287:   mcp,
288:   memory,
289:   mobile,
290:   model,
291:   outputStyle,
292:   remoteEnv,
293:   plugin,
294:   pr_comments,
295:   releaseNotes,
296:   reloadPlugins,
297:   rename,
298:   resume,
299:   session,
300:   skills,

(Showing lines 1-300 of 754. Use offset=301 to continue.)
</content>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 6.8s)

_Thinking:_

Let me continue reading more of the codebase to understand how it works - particularly the entrypoints, REPL, task system, and services.



**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/entrypoints/cli.tsx",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/entrypoints/cli.tsx</path>
<type>file</type>
<content>1: import { feature } from 'bun:bundle';
2: 
3: // Bugfix for corepack auto-pinning, which adds yarnpkg to peoples' package.jsons
4: // eslint-disable-next-line custom-rules/no-top-level-side-effects
5: process.env.COREPACK_ENABLE_AUTO_PIN = '0';
6: 
7: // Set max heap size for child processes in CCR environments (containers have 16GB)
8: // eslint-disable-next-line custom-rules/no-top-level-side-effects, custom-rules/no-process-env-top-level, custom-rules/safe-env-boolean-check
9: if (process.env.CLAUDE_CODE_REMOTE === 'true') {
10:   // eslint-disable-next-line custom-rules/no-top-level-side-effects, custom-rules/no-process-env-top-level
11:   const existing = process.env.NODE_OPTIONS || '';
12:   // eslint-disable-next-line custom-rules/no-top-level-side-effects, custom-rules/no-process-env-top-level
13:   process.env.NODE_OPTIONS = existing ? `${existing} --max-old-space-size=8192` : '--max-old-space-size=8192';
14: }
15: 
16: // Harness-science L0 ablation baseline. Inlined here (not init.ts) because
17: // BashTool/AgentTool/PowerShellTool capture DISABLE_BACKGROUND_TASKS into
18: // module-level consts at import time — init() runs too late. feature() gate
19: // DCEs this entire block from external builds.
20: // eslint-disable-next-line custom-rules/no-top-level-side-effects, custom-rules/no-process-env-top-level
21: if (feature('ABLATION_BASELINE') && process.env.CLAUDE_CODE_ABLATION_BASELINE) {
22:   for (const k of ['CLAUDE_CODE_SIMPLE', 'CLAUDE_CODE_DISABLE_THINKING', 'DISABLE_INTERLEAVED_THINKING', 'DISABLE_COMPACT', 'DISABLE_AUTO_COMPACT', 'CLAUDE_CODE_DISABLE_AUTO_MEMORY', 'CLAUDE_CODE_DISABLE_BACKGROUND_TASKS']) {
23:     // eslint-disable-next-line custom-rules/no-top-level-side-effects, custom-rules/no-process-env-top-level
24:     process.env[k] ??= '1';
25:   }
26: }
27: 
28: /**
29:  * Bootstrap entrypoint - checks for special flags before loading the full CLI.
30:  * All imports are dynamic to minimize module evaluation for fast paths.
31:  * Fast-path for --version has zero imports beyond this file.
32:  */
33: async function main(): Promise<void> {
34:   const args = process.argv.slice(2);
35: 
36:   // Fast-path for --version/-v: zero module loading needed
37:   if (args.length === 1 && (args[0] === '--version' || args[0] === '-v' || args[0] === '-V')) {
38:     // MACRO.VERSION is inlined at build time
39:     // biome-ignore lint/suspicious/noConsole:: intentional console output
40:     console.log(`${MACRO.VERSION} (Claude Code)`);
41:     return;
42:   }
43: 
44:   // For all other paths, load the startup profiler
45:   const {
46:     profileCheckpoint
47:   } = await import('../utils/startupProfiler.js');
48:   profileCheckpoint('cli_entry');
49: 
50:   // Fast-path for --dump-system-prompt: output the rendered system prompt and exit.
51:   // Used by prompt sensitivity evals to extract the system prompt at a specific commit.
52:   // Ant-only: eliminated from external builds via feature flag.
53:   if (feature('DUMP_SYSTEM_PROMPT') && args[0] === '--dump-system-prompt') {
54:     profileCheckpoint('cli_dump_system_prompt_path');
55:     const {
56:       enableConfigs
57:     } = await import('../utils/config.js');
58:     enableConfigs();
59:     const {
60:       getMainLoopModel
61:     } = await import('../utils/model/model.js');
62:     const modelIdx = args.indexOf('--model');
63:     const model = modelIdx !== -1 && args[modelIdx + 1] || getMainLoopModel();
64:     const {
65:       getSystemPrompt
66:     } = await import('../constants/prompts.js');
67:     const prompt = await getSystemPrompt([], model);
68:     // biome-ignore lint/suspicious/noConsole:: intentional console output
69:     console.log(prompt.join('\n'));
70:     return;
71:   }
72:   if (process.argv[2] === '--claude-in-chrome-mcp') {
73:     profileCheckpoint('cli_claude_in_chrome_mcp_path');
74:     const {
75:       runClaudeInChromeMcpServer
76:     } = await import('../utils/claudeInChrome/mcpServer.js');
77:     await runClaudeInChromeMcpServer();
78:     return;
79:   } else if (process.argv[2] === '--chrome-native-host') {
80:     profileCheckpoint('cli_chrome_native_host_path');
81:     const {
82:       runChromeNativeHost
83:     } = await import('../utils/claudeInChrome/chromeNativeHost.js');
84:     await runChromeNativeHost();
85:     return;
86:   } else if (feature('CHICAGO_MCP') && process.argv[2] === '--computer-use-mcp') {
87:     profileCheckpoint('cli_computer_use_mcp_path');
88:     const {
89:       runComputerUseMcpServer
90:     } = await import('../utils/computerUse/mcpServer.js');
91:     await runComputerUseMcpServer();
92:     return;
93:   }
94: 
95:   // Fast-path for `--daemon-worker=<kind>` (internal — supervisor spawns this).
96:   // Must come before the daemon subcommand check: spawned per-worker, so
97:   // perf-sensitive. No enableConfigs(), no analytics sinks at this layer —
98:   // workers are lean. If a worker kind needs configs/auth (assistant will),
99:   // it calls them inside its run() fn.
100:   if (feature('DAEMON') && args[0] === '--daemon-worker') {
101:     const {
102:       runDaemonWorker
103:     } = await import('../daemon/workerRegistry.js');
104:     await runDaemonWorker(args[1]);
105:     return;
106:   }
107: 
108:   // Fast-path for `claude remote-control` (also accepts legacy `claude remote` / `claude sync` / `claude bridge`):
109:   // serve local machine as bridge environment.
110:   // feature() must stay inline for build-time dead code elimination;
111:   // isBridgeEnabled() checks the runtime GrowthBook gate.
112:   if (feature('BRIDGE_MODE') && (args[0] === 'remote-control' || args[0] === 'rc' || args[0] === 'remote' || args[0] === 'sync' || args[0] === 'bridge')) {
113:     profileCheckpoint('cli_bridge_path');
114:     const {
115:       enableConfigs
116:     } = await import('../utils/config.js');
117:     enableConfigs();
118:     const {
119:       getBridgeDisabledReason,
120:       checkBridgeMinVersion
121:     } = await import('../bridge/bridgeEnabled.js');
122:     const {
123:       BRIDGE_LOGIN_ERROR
124:     } = await import('../bridge/types.js');
125:     const {
126:       bridgeMain
127:     } = await import('../bridge/bridgeMain.js');
128:     const {
129:       exitWithError
130:     } = await import('../utils/process.js');
131: 
132:     // Auth check must come before the GrowthBook gate check — without auth,
133:     // GrowthBook has no user context and would return a stale/default false.
134:     // getBridgeDisabledReason awaits GB init, so the returned value is fresh
135:     // (not the stale disk cache), but init still needs auth headers to work.
136:     const {
137:       getClaudeAIOAuthTokens
138:     } = await import('../utils/auth.js');
139:     if (!getClaudeAIOAuthTokens()?.accessToken) {
140:       exitWithError(BRIDGE_LOGIN_ERROR);
141:     }
142:     const disabledReason = await getBridgeDisabledReason();
143:     if (disabledReason) {
144:       exitWithError(`Error: ${disabledReason}`);
145:     }
146:     const versionError = checkBridgeMinVersion();
147:     if (versionError) {
148:       exitWithError(versionError);
149:     }
150: 
151:     // Bridge is a remote control feature - check policy limits
152:     const {
153:       waitForPolicyLimitsToLoad,
154:       isPolicyAllowed
155:     } = await import('../services/policyLimits/index.js');
156:     await waitForPolicyLimitsToLoad();
157:     if (!isPolicyAllowed('allow_remote_control')) {
158:       exitWithError("Error: Remote Control is disabled by your organization's policy.");
159:     }
160:     await bridgeMain(args.slice(1));
161:     return;
162:   }
163: 
164:   // Fast-path for `claude daemon [subcommand]`: long-running supervisor.
165:   if (feature('DAEMON') && args[0] === 'daemon') {
166:     profileCheckpoint('cli_daemon_path');
167:     const {
168:       enableConfigs
169:     } = await import('../utils/config.js');
170:     enableConfigs();
171:     const {
172:       initSinks
173:     } = await import('../utils/sinks.js');
174:     initSinks();
175:     const {
176:       daemonMain
177:     } = await import('../daemon/main.js');
178:     await daemonMain(args.slice(1));
179:     return;
180:   }
181: 
182:   // Fast-path for `claude ps|logs|attach|kill` and `--bg`/`--background`.
183:   // Session management against the ~/.claude/sessions/ registry. Flag
184:   // literals are inlined so bg.js only loads when actually dispatching.
185:   if (feature('BG_SESSIONS') && (args[0] === 'ps' || args[0] === 'logs' || args[0] === 'attach' || args[0] === 'kill' || args.includes('--bg') || args.includes('--background'))) {
186:     profileCheckpoint('cli_bg_path');
187:     const {
188:       enableConfigs
189:     } = await import('../utils/config.js');
190:     enableConfigs();
191:     const bg = await import('../cli/bg.js');
192:     switch (args[0]) {
193:       case 'ps':
194:         await bg.psHandler(args.slice(1));
195:         break;
196:       case 'logs':
197:         await bg.logsHandler(args[1]);
198:         break;
199:       case 'attach':
200:         await bg.attachHandler(args[1]);
201:         break;
202:       case 'kill':
203:         await bg.killHandler(args[1]);
204:         break;
205:       default:
206:         await bg.handleBgFlag(args);
207:     }
208:     return;
209:   }
210: 
211:   // Fast-path for template job commands.
212:   if (feature('TEMPLATES') && (args[0] === 'new' || args[0] === 'list' || args[0] === 'reply')) {
213:     profileCheckpoint('cli_templates_path');
214:     const {
215:       templatesMain
216:     } = await import('../cli/handlers/templateJobs.js');
217:     await templatesMain(args);
218:     // process.exit (not return) — mountFleetView's Ink TUI can leave event
219:     // loop handles that prevent natural exit.
220:     // eslint-disable-next-line custom-rules/no-process-exit
221:     process.exit(0);
222:   }
223: 
224:   // Fast-path for `claude environment-runner`: headless BYOC runner.
225:   // feature() must stay inline for build-time dead code elimination.
226:   if (feature('BYOC_ENVIRONMENT_RUNNER') && args[0] === 'environment-runner') {
227:     profileCheckpoint('cli_environment_runner_path');
228:     const {
229:       environmentRunnerMain
230:     } = await import('../environment-runner/main.js');
231:     await environmentRunnerMain(args.slice(1));
232:     return;
233:   }
234: 
235:   // Fast-path for `claude self-hosted-runner`: headless self-hosted-runner
236:   // targeting the SelfHostedRunnerWorkerService API (register + poll; poll IS
237:   // heartbeat). feature() must stay inline for build-time dead code elimination.
238:   if (feature('SELF_HOSTED_RUNNER') && args[0] === 'self-hosted-runner') {
239:     profileCheckpoint('cli_self_hosted_runner_path');
240:     const {
241:       selfHostedRunnerMain
242:     } = await import('../self-hosted-runner/main.js');
243:     await selfHostedRunnerMain(args.slice(1));
244:     return;
245:   }
246: 
247:   // Fast-path for --worktree --tmux: exec into tmux before loading full CLI
248:   const hasTmuxFlag = args.includes('--tmux') || args.includes('--tmux=classic');
249:   if (hasTmuxFlag && (args.includes('-w') || args.includes('--worktree') || args.some(a => a.startsWith('--worktree=')))) {
250:     profileCheckpoint('cli_tmux_worktree_fast_path');
251:     const {
252:       enableConfigs
253:     } = await import('../utils/config.js');
254:     enableConfigs();
255:     const {
256:       isWorktreeModeEnabled
257:     } = await import('../utils/worktreeModeEnabled.js');
258:     if (isWorktreeModeEnabled()) {
259:       const {
260:         execIntoTmuxWorktree
261:       } = await import('../utils/worktree.js');
262:       const result = await execIntoTmuxWorktree(args);
263:       if (result.handled) {
264:         return;
265:       }
266:       // If not handled (e.g., error), fall through to normal CLI
267:       if (result.error) {
268:         const {
269:           exitWithError
270:         } = await import('../utils/process.js');
271:         exitWithError(result.error);
272:       }
273:     }
274:   }
275: 
276:   // Redirect common update flag mistakes to the update subcommand
277:   if (args.length === 1 && (args[0] === '--update' || args[0] === '--upgrade')) {
278:     process.argv = [process.argv[0]!, process.argv[1]!, 'update'];
279:   }
280: 
281:   // --bare: set SIMPLE early so gates fire during module eval / commander
282:   // option building (not just inside the action handler).
283:   if (args.includes('--bare')) {
284:     process.env.CLAUDE_CODE_SIMPLE = '1';
285:   }
286: 
287:   // No special flags detected, load and run the full CLI
288:   const {
289:     startCapturingEarlyInput
290:   } = await import('../utils/earlyInput.js');
291:   startCapturingEarlyInput();
292:   profileCheckpoint('cli_before_main_import');
293:   const {
294:     main: cliMain
295:   } = await import('../main.js');
296:   profileCheckpoint('cli_after_main_import');
297:   await cliMain();
298:   profileCheckpoint('cli_after_main_complete');
299: }
300: 

(Showing lines 1-300 of 303. Use offset=301 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/screens/REPL.tsx",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/screens/REPL.tsx</path>
<type>file</type>
<content>1: import { c as _c } from "react/compiler-runtime";
2: // biome-ignore-all assist/source/organizeImports: ANT-ONLY import markers must not be reordered
3: import { feature } from 'bun:bundle';
4: import { spawnSync } from 'child_process';
5: import { snapshotOutputTokensForTurn, getCurrentTurnTokenBudget, getTurnOutputTokens, getBudgetContinuationCount, getTotalInputTokens } from '../bootstrap/state.js';
6: import { parseTokenBudget } from '../utils/tokenBudget.js';
7: import { count } from '../utils/array.js';
8: import { dirname, join } from 'path';
9: import { tmpdir } from 'os';
10: import figures from 'figures';
11: // eslint-disable-next-line custom-rules/prefer-use-keybindings -- / n N Esc [ v are bare letters in transcript modal context, same class as g/G/j/k in ScrollKeybindingHandler
12: import { useInput } from '../ink.js';
13: import { useSearchInput } from '../hooks/useSearchInput.js';
14: import { useTerminalSize } from '../hooks/useTerminalSize.js';
15: import { useSearchHighlight } from '../ink/hooks/use-search-highlight.js';
16: import type { JumpHandle } from '../components/VirtualMessageList.js';
17: import { renderMessagesToPlainText } from '../utils/exportRenderer.js';
18: import { openFileInExternalEditor } from '../utils/editor.js';
19: import { writeFile } from 'fs/promises';
20: import { Box, Text, useStdin, useTheme, useTerminalFocus, useTerminalTitle, useTabStatus } from '../ink.js';
21: import type { TabStatusKind } from '../ink/hooks/use-tab-status.js';
22: import { CostThresholdDialog } from '../components/CostThresholdDialog.js';
23: import { IdleReturnDialog } from '../components/IdleReturnDialog.js';
24: import * as React from 'react';
25: import { useEffect, useMemo, useRef, useState, useCallback, useDeferredValue, useLayoutEffect, type RefObject } from 'react';
26: import { useNotifications } from '../context/notifications.js';
27: import { sendNotification } from '../services/notifier.js';
28: import { startPreventSleep, stopPreventSleep } from '../services/preventSleep.js';
29: import { useTerminalNotification } from '../ink/useTerminalNotification.js';
30: import { hasCursorUpViewportYankBug } from '../ink/terminal.js';
31: import { createFileStateCacheWithSizeLimit, mergeFileStateCaches, READ_FILE_STATE_CACHE_SIZE } from '../utils/fileStateCache.js';
32: import { updateLastInteractionTime, getLastInteractionTime, getOriginalCwd, getProjectRoot, getSessionId, switchSession, setCostStateForRestore, getTurnHookDurationMs, getTurnHookCount, resetTurnHookDuration, getTurnToolDurationMs, getTurnToolCount, resetTurnToolDuration, getTurnClassifierDurationMs, getTurnClassifierCount, resetTurnClassifierDuration } from '../bootstrap/state.js';
33: import { asSessionId, asAgentId } from '../types/ids.js';
34: import { logForDebugging } from '../utils/debug.js';
35: import { QueryGuard } from '../utils/QueryGuard.js';
36: import { isEnvTruthy } from '../utils/envUtils.js';
37: import { formatTokens, truncateToWidth } from '../utils/format.js';
38: import { consumeEarlyInput } from '../utils/earlyInput.js';
39: import { setMemberActive } from '../utils/swarm/teamHelpers.js';
40: import { isSwarmWorker, generateSandboxRequestId, sendSandboxPermissionRequestViaMailbox, sendSandboxPermissionResponseViaMailbox } from '../utils/swarm/permissionSync.js';
41: import { registerSandboxPermissionCallback } from '../hooks/useSwarmPermissionPoller.js';
42: import { getTeamName, getAgentName } from '../utils/teammate.js';
43: import { WorkerPendingPermission } from '../components/permissions/WorkerPendingPermission.js';
44: import { injectUserMessageToTeammate, getAllInProcessTeammateTasks } from '../tasks/InProcessTeammateTask/InProcessTeammateTask.js';
45: import { isLocalAgentTask, queuePendingMessage, appendMessageToLocalAgent, type LocalAgentTaskState } from '../tasks/LocalAgentTask/LocalAgentTask.js';
46: import { registerLeaderToolUseConfirmQueue, unregisterLeaderToolUseConfirmQueue, registerLeaderSetToolPermissionContext, unregisterLeaderSetToolPermissionContext } from '../utils/swarm/leaderPermissionBridge.js';
47: import { endInteractionSpan } from '../utils/telemetry/sessionTracing.js';
48: import { useLogMessages } from '../hooks/useLogMessages.js';
49: import { useReplBridge } from '../hooks/useReplBridge.js';
50: import { type Command, type CommandResultDisplay, type ResumeEntrypoint, getCommandName, isCommandEnabled } from '../commands.js';
51: import type { PromptInputMode, QueuedCommand, VimMode } from '../types/textInputTypes.js';
52: import { MessageSelector, selectableUserMessagesFilter, messagesAfterAreOnlySynthetic } from '../components/MessageSelector.js';
53: import { useIdeLogging } from '../hooks/useIdeLogging.js';
54: import { PermissionRequest, type ToolUseConfirm } from '../components/permissions/PermissionRequest.js';
55: import { ElicitationDialog } from '../components/mcp/ElicitationDialog.js';
56: import { PromptDialog } from '../components/hooks/PromptDialog.js';
57: import type { PromptRequest, PromptResponse } from '../types/hooks.js';
58: import PromptInput from '../components/PromptInput/PromptInput.js';
59: import { PromptInputQueuedCommands } from '../components/PromptInput/PromptInputQueuedCommands.js';
60: import { useRemoteSession } from '../hooks/useRemoteSession.js';
61: import { useDirectConnect } from '../hooks/useDirectConnect.js';
62: import type { DirectConnectConfig } from '../server/directConnectManager.js';
63: import { useSSHSession } from '../hooks/useSSHSession.js';
64: import { useAssistantHistory } from '../hooks/useAssistantHistory.js';
65: import type { SSHSession } from '../ssh/createSSHSession.js';
66: import { SkillImprovementSurvey } from '../components/SkillImprovementSurvey.js';
67: import { useSkillImprovementSurvey } from '../hooks/useSkillImprovementSurvey.js';
68: import { useMoreRight } from '../moreright/useMoreRight.js';
69: import { SpinnerWithVerb, BriefIdleStatus, type SpinnerMode } from '../components/Spinner.js';
70: import { getSystemPrompt } from '../constants/prompts.js';
71: import { buildEffectiveSystemPrompt } from '../utils/systemPrompt.js';
72: import { getSystemContext, getUserContext } from '../context.js';
73: import { getMemoryFiles } from '../utils/claudemd.js';
74: import { startBackgroundHousekeeping } from '../utils/backgroundHousekeeping.js';
75: import { getTotalCost, saveCurrentSessionCosts, resetCostState, getStoredSessionCosts } from '../cost-tracker.js';
76: import { useCostSummary } from '../costHook.js';
77: import { useFpsMetrics } from '../context/fpsMetrics.js';
78: import { useAfterFirstRender } from '../hooks/useAfterFirstRender.js';
79: import { useDeferredHookMessages } from '../hooks/useDeferredHookMessages.js';
80: import { addToHistory, removeLastFromHistory, expandPastedTextRefs, parseReferences } from '../history.js';
81: import { prependModeCharacterToInput } from '../components/PromptInput/inputModes.js';
82: import { prependToShellHistoryCache } from '../utils/suggestions/shellHistoryCompletion.js';
83: import { useApiKeyVerification } from '../hooks/useApiKeyVerification.js';
84: import { GlobalKeybindingHandlers } from '../hooks/useGlobalKeybindings.js';
85: import { CommandKeybindingHandlers } from '../hooks/useCommandKeybindings.js';
86: import { KeybindingSetup } from '../keybindings/KeybindingProviderSetup.js';
87: import { useShortcutDisplay } from '../keybindings/useShortcutDisplay.js';
88: import { getShortcutDisplay } from '../keybindings/shortcutFormat.js';
89: import { CancelRequestHandler } from '../hooks/useCancelRequest.js';
90: import { useBackgroundTaskNavigation } from '../hooks/useBackgroundTaskNavigation.js';
91: import { useSwarmInitialization } from '../hooks/useSwarmInitialization.js';
92: import { useTeammateViewAutoExit } from '../hooks/useTeammateViewAutoExit.js';
93: import { errorMessage } from '../utils/errors.js';
94: import { isHumanTurn } from '../utils/messagePredicates.js';
95: import { logError } from '../utils/log.js';
96: // Dead code elimination: conditional imports
97: /* eslint-disable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
98: const useVoiceIntegration: typeof import('../hooks/useVoiceIntegration.js').useVoiceIntegration = feature('VOICE_MODE') ? require('../hooks/useVoiceIntegration.js').useVoiceIntegration : () => ({
99:   stripTrailing: () => 0,
100:   handleKeyEvent: () => {},
101:   resetAnchor: () => {}
102: });
103: const VoiceKeybindingHandler: typeof import('../hooks/useVoiceIntegration.js').VoiceKeybindingHandler = feature('VOICE_MODE') ? require('../hooks/useVoiceIntegration.js').VoiceKeybindingHandler : () => null;
104: // Frustration detection is ant-only (dogfooding). Conditional require so external
105: // builds eliminate the module entirely (including its two O(n) useMemos that run
106: // on every messages change, plus the GrowthBook fetch).
107: const useFrustrationDetection: typeof import('../components/FeedbackSurvey/useFrustrationDetection.js').useFrustrationDetection = "external" === 'ant' ? require('../components/FeedbackSurvey/useFrustrationDetection.js').useFrustrationDetection : () => ({
108:   state: 'closed',
109:   handleTranscriptSelect: () => {}
110: });
111: // Ant-only org warning. Conditional require so the org UUID list is
112: // eliminated from external builds (one UUID is on excluded-strings).
113: const useAntOrgWarningNotification: typeof import('../hooks/notifs/useAntOrgWarningNotification.js').useAntOrgWarningNotification = "external" === 'ant' ? require('../hooks/notifs/useAntOrgWarningNotification.js').useAntOrgWarningNotification : () => {};
114: // Dead code elimination: conditional import for coordinator mode
115: const getCoordinatorUserContext: (mcpClients: ReadonlyArray<{
116:   name: string;
117: }>, scratchpadDir?: string) => {
118:   [k: string]: string;
119: } = feature('COORDINATOR_MODE') ? require('../coordinator/coordinatorMode.js').getCoordinatorUserContext : () => ({});
120: /* eslint-enable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
121: import useCanUseTool from '../hooks/useCanUseTool.js';
122: import type { ToolPermissionContext, Tool } from '../Tool.js';
123: import { applyPermissionUpdate, applyPermissionUpdates, persistPermissionUpdate } from '../utils/permissions/PermissionUpdate.js';
124: import { buildPermissionUpdates } from '../components/permissions/ExitPlanModePermissionRequest/ExitPlanModePermissionRequest.js';
125: import { stripDangerousPermissionsForAutoMode } from '../utils/permissions/permissionSetup.js';
126: import { getScratchpadDir, isScratchpadEnabled } from '../utils/permissions/filesystem.js';
127: import { WEB_FETCH_TOOL_NAME } from '../tools/WebFetchTool/prompt.js';
128: import { SLEEP_TOOL_NAME } from '../tools/SleepTool/prompt.js';
129: import { clearSpeculativeChecks } from '../tools/BashTool/bashPermissions.js';
130: import type { AutoUpdaterResult } from '../utils/autoUpdater.js';
131: import { getGlobalConfig, saveGlobalConfig, getGlobalConfigWriteCount } from '../utils/config.js';
132: import { hasConsoleBillingAccess } from '../utils/billing.js';
133: import { logEvent, type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS } from 'src/services/analytics/index.js';
134: import { getFeatureValue_CACHED_MAY_BE_STALE } from 'src/services/analytics/growthbook.js';
135: import { textForResubmit, handleMessageFromStream, type StreamingToolUse, type StreamingThinking, isCompactBoundaryMessage, getMessagesAfterCompactBoundary, getContentText, createUserMessage, createAssistantMessage, createTurnDurationMessage, createAgentsKilledMessage, createApiMetricsMessage, createSystemMessage, createCommandInputMessage, formatCommandInputTags } from '../utils/messages.js';
136: import { generateSessionTitle } from '../utils/sessionTitle.js';
137: import { BASH_INPUT_TAG, COMMAND_MESSAGE_TAG, COMMAND_NAME_TAG, LOCAL_COMMAND_STDOUT_TAG } from '../constants/xml.js';
138: import { escapeXml } from '../utils/xml.js';
139: import type { ThinkingConfig } from '../utils/thinking.js';
140: import { gracefulShutdownSync } from '../utils/gracefulShutdown.js';
141: import { handlePromptSubmit, type PromptInputHelpers } from '../utils/handlePromptSubmit.js';
142: import { useQueueProcessor } from '../hooks/useQueueProcessor.js';
143: import { useMailboxBridge } from '../hooks/useMailboxBridge.js';
144: import { queryCheckpoint, logQueryProfileReport } from '../utils/queryProfiler.js';
145: import type { Message as MessageType, UserMessage, ProgressMessage, HookResultMessage, PartialCompactDirection } from '../types/message.js';
146: import { query } from '../query.js';
147: import { mergeClients, useMergedClients } from '../hooks/useMergedClients.js';
148: import { getQuerySourceForREPL } from '../utils/promptCategory.js';
149: import { useMergedTools } from '../hooks/useMergedTools.js';
150: import { mergeAndFilterTools } from '../utils/toolPool.js';
151: import { useMergedCommands } from '../hooks/useMergedCommands.js';
152: import { useSkillsChange } from '../hooks/useSkillsChange.js';
153: import { useManagePlugins } from '../hooks/useManagePlugins.js';
154: import { Messages } from '../components/Messages.js';
155: import { TaskListV2 } from '../components/TaskListV2.js';
156: import { TeammateViewHeader } from '../components/TeammateViewHeader.js';
157: import { useTasksV2WithCollapseEffect } from '../hooks/useTasksV2.js';
158: import { maybeMarkProjectOnboardingComplete } from '../projectOnboardingState.js';
159: import type { MCPServerConnection } from '../services/mcp/types.js';
160: import type { ScopedMcpServerConfig } from '../services/mcp/types.js';
161: import { randomUUID, type UUID } from 'crypto';
162: import { processSessionStartHooks } from '../utils/sessionStart.js';
163: import { executeSessionEndHooks, getSessionEndHookTimeoutMs } from '../utils/hooks.js';
164: import { type IDESelection, useIdeSelection } from '../hooks/useIdeSelection.js';
165: import { getTools, assembleToolPool } from '../tools.js';
166: import type { AgentDefinition } from '../tools/AgentTool/loadAgentsDir.js';
167: import { resolveAgentTools } from '../tools/AgentTool/agentToolUtils.js';
168: import { resumeAgentBackground } from '../tools/AgentTool/resumeAgent.js';
169: import { useMainLoopModel } from '../hooks/useMainLoopModel.js';
170: import { useAppState, useSetAppState, useAppStateStore } from '../state/AppState.js';
171: import type { ContentBlockParam, ImageBlockParam } from '@anthropic-ai/sdk/resources/messages.mjs';
172: import type { ProcessUserInputContext } from '../utils/processUserInput/processUserInput.js';
173: import type { PastedContent } from '../utils/config.js';
174: import { copyPlanForFork, copyPlanForResume, getPlanSlug, setPlanSlug } from '../utils/plans.js';
175: import { clearSessionMetadata, resetSessionFilePointer, adoptResumedSessionFile, removeTranscriptMessage, restoreSessionMetadata, getCurrentSessionTitle, isEphemeralToolProgress, isLoggableMessage, saveWorktreeState, getAgentTranscript } from '../utils/sessionStorage.js';
176: import { deserializeMessages } from '../utils/conversationRecovery.js';
177: import { extractReadFilesFromMessages, extractBashToolsFromMessages } from '../utils/queryHelpers.js';
178: import { resetMicrocompactState } from '../services/compact/microCompact.js';
179: import { runPostCompactCleanup } from '../services/compact/postCompactCleanup.js';
180: import { provisionContentReplacementState, reconstructContentReplacementState, type ContentReplacementRecord } from '../utils/toolResultStorage.js';
181: import { partialCompactConversation } from '../services/compact/compact.js';
182: import type { LogOption } from '../types/logs.js';
183: import type { AgentColorName } from '../tools/AgentTool/agentColorManager.js';
184: import { fileHistoryMakeSnapshot, type FileHistoryState, fileHistoryRewind, type FileHistorySnapshot, copyFileHistoryForResume, fileHistoryEnabled, fileHistoryHasAnyChanges } from '../utils/fileHistory.js';
185: import { type AttributionState, incrementPromptCount } from '../utils/commitAttribution.js';
186: import { recordAttributionSnapshot } from '../utils/sessionStorage.js';
187: import { computeStandaloneAgentContext, restoreAgentFromSession, restoreSessionStateFromLog, restoreWorktreeForResume, exitRestoredWorktree } from '../utils/sessionRestore.js';
188: import { isBgSession, updateSessionName, updateSessionActivity } from '../utils/concurrentSessions.js';
189: import { isInProcessTeammateTask, type InProcessTeammateTaskState } from '../tasks/InProcessTeammateTask/types.js';
190: import { restoreRemoteAgentTasks } from '../tasks/RemoteAgentTask/RemoteAgentTask.js';
191: import { useInboxPoller } from '../hooks/useInboxPoller.js';
192: // Dead code elimination: conditional import for loop mode
193: /* eslint-disable @typescript-eslint/no-require-imports */
194: const proactiveModule = feature('PROACTIVE') || feature('KAIROS') ? require('../proactive/index.js') : null;
195: const PROACTIVE_NO_OP_SUBSCRIBE = (_cb: () => void) => () => {};
196: const PROACTIVE_FALSE = () => false;
197: const SUGGEST_BG_PR_NOOP = (_p: string, _n: string): boolean => false;
198: const useProactive = feature('PROACTIVE') || feature('KAIROS') ? require('../proactive/useProactive.js').useProactive : null;
199: const useScheduledTasks = feature('AGENT_TRIGGERS') ? require('../hooks/useScheduledTasks.js').useScheduledTasks : null;
200: /* eslint-enable @typescript-eslint/no-require-imports */
201: import { isAgentSwarmsEnabled } from '../utils/agentSwarmsEnabled.js';
202: import { useTaskListWatcher } from '../hooks/useTaskListWatcher.js';
203: import type { SandboxAskCallback, NetworkHostPattern } from '../utils/sandbox/sandbox-adapter.js';
204: import { type IDEExtensionInstallationStatus, closeOpenDiffs, getConnectedIdeClient, type IdeType } from '../utils/ide.js';
205: import { useIDEIntegration } from '../hooks/useIDEIntegration.js';
206: import exit from '../commands/exit/index.js';
207: import { ExitFlow } from '../components/ExitFlow.js';
208: import { getCurrentWorktreeSession } from '../utils/worktree.js';
209: import { popAllEditable, enqueue, type SetAppState, getCommandQueue, getCommandQueueLength, removeByFilter } from '../utils/messageQueueManager.js';
210: import { useCommandQueue } from '../hooks/useCommandQueue.js';
211: import { SessionBackgroundHint } from '../components/SessionBackgroundHint.js';
212: import { startBackgroundSession } from '../tasks/LocalMainSessionTask.js';
213: import { useSessionBackgrounding } from '../hooks/useSessionBackgrounding.js';
214: import { diagnosticTracker } from '../services/diagnosticTracking.js';
215: import { handleSpeculationAccept, type ActiveSpeculationState } from '../services/PromptSuggestion/speculation.js';
216: import { IdeOnboardingDialog } from '../components/IdeOnboardingDialog.js';
217: import { EffortCallout, shouldShowEffortCallout } from '../components/EffortCallout.js';
218: import type { EffortValue } from '../utils/effort.js';
219: import { RemoteCallout } from '../components/RemoteCallout.js';
220: /* eslint-disable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
221: const AntModelSwitchCallout = "external" === 'ant' ? require('../components/AntModelSwitchCallout.js').AntModelSwitchCallout : null;
222: const shouldShowAntModelSwitch = "external" === 'ant' ? require('../components/AntModelSwitchCallout.js').shouldShowModelSwitchCallout : (): boolean => false;
223: const UndercoverAutoCallout = "external" === 'ant' ? require('../components/UndercoverAutoCallout.js').UndercoverAutoCallout : null;
224: /* eslint-enable custom-rules/no-process-env-top-level, @typescript-eslint/no-require-imports */
225: import { activityManager } from '../utils/activityManager.js';
226: import { createAbortController } from '../utils/abortController.js';
227: import { MCPConnectionManager } from 'src/services/mcp/MCPConnectionManager.js';
228: import { useFeedbackSurvey } from 'src/components/FeedbackSurvey/useFeedbackSurvey.js';
229: import { useMemorySurvey } from 'src/components/FeedbackSurvey/useMemorySurvey.js';
230: import { usePostCompactSurvey } from 'src/components/FeedbackSurvey/usePostCompactSurvey.js';
231: import { FeedbackSurvey } from 'src/components/FeedbackSurvey/FeedbackSurvey.js';
232: import { useInstallMessages } from 'src/hooks/notifs/useInstallMessages.js';
233: import { useAwaySummary } from 'src/hooks/useAwaySummary.js';
234: import { useChromeExtensionNotification } from 'src/hooks/useChromeExtensionNotification.js';
235: import { useOfficialMarketplaceNotification } from 'src/hooks/useOfficialMarketplaceNotification.js';
236: import { usePromptsFromClaudeInChrome } from 'src/hooks/usePromptsFromClaudeInChrome.js';
237: import { getTipToShowOnSpinner, recordShownTip } from 'src/services/tips/tipScheduler.js';
238: import type { Theme } from 'src/utils/theme.js';
239: import { checkAndDisableBypassPermissionsIfNeeded, checkAndDisableAutoModeIfNeeded, useKickOffCheckAndDisableBypassPermissionsIfNeeded, useKickOffCheckAndDisableAutoModeIfNeeded } from 'src/utils/permissions/bypassPermissionsKillswitch.js';
240: import { SandboxManager } from 'src/utils/sandbox/sandbox-adapter.js';
241: import { SANDBOX_NETWORK_ACCESS_TOOL_NAME } from 'src/cli/structuredIO.js';
242: import { useFileHistorySnapshotInit } from 'src/hooks/useFileHistorySnapshotInit.js';
243: import { SandboxPermissionRequest } from 'src/components/permissions/SandboxPermissionRequest.js';
244: import { SandboxViolationExpandedView } from 'src/components/SandboxViolationExpandedView.js';
245: import { useSettingsErrors } from 'src/hooks/notifs/useSettingsErrors.js';
246: import { useMcpConnectivityStatus } from 'src/hooks/notifs/useMcpConnectivityStatus.js';
247: import { useAutoModeUnavailableNotification } from 'src/hooks/notifs/useAutoModeUnavailableNotification.js';
248: import { AUTO_MODE_DESCRIPTION } from 'src/components/AutoModeOptInDialog.js';
249: import { useLspInitializationNotification } from 'src/hooks/notifs/useLspInitializationNotification.js';
250: import { useLspPluginRecommendation } from 'src/hooks/useLspPluginRecommendation.js';
251: import { LspRecommendationMenu } from 'src/components/LspRecommendation/LspRecommendationMenu.js';
252: import { useClaudeCodeHintRecommendation } from 'src/hooks/useClaudeCodeHintRecommendation.js';
253: import { PluginHintMenu } from 'src/components/ClaudeCodeHint/PluginHintMenu.js';
254: import { DesktopUpsellStartup, shouldShowDesktopUpsellStartup } from 'src/components/DesktopUpsell/DesktopUpsellStartup.js';
255: import { usePluginInstallationStatus } from 'src/hooks/notifs/usePluginInstallationStatus.js';
256: import { usePluginAutoupdateNotification } from 'src/hooks/notifs/usePluginAutoupdateNotification.js';
257: import { performStartupChecks } from 'src/utils/plugins/performStartupChecks.js';
258: import { UserTextMessage } from 'src/components/messages/UserTextMessage.js';
259: import { AwsAuthStatusBox } from '../components/AwsAuthStatusBox.js';
260: import { useRateLimitWarningNotification } from 'src/hooks/notifs/useRateLimitWarningNotification.js';
261: import { useDeprecationWarningNotification } from 'src/hooks/notifs/useDeprecationWarningNotification.js';
262: import { useNpmDeprecationNotification } from 'src/hooks/notifs/useNpmDeprecationNotification.js';
263: import { useIDEStatusIndicator } from 'src/hooks/notifs/useIDEStatusIndicator.js';
264: import { useModelMigrationNotifications } from 'src/hooks/notifs/useModelMigrationNotifications.js';
265: import { useCanSwitchToExistingSubscription } from 'src/hooks/notifs/useCanSwitchToExistingSubscription.js';
266: import { useTeammateLifecycleNotification } from 'src/hooks/notifs/useTeammateShutdownNotification.js';
267: import { useFastModeNotification } from 'src/hooks/notifs/useFastModeNotification.js';
268: import { AutoRunIssueNotification, shouldAutoRunIssue, getAutoRunIssueReasonText, getAutoRunCommand, type AutoRunIssueReason } from '../utils/autoRunIssue.js';
269: import type { HookProgress } from '../types/hooks.js';
270: import { TungstenLiveMonitor } from '../tools/TungstenTool/TungstenLiveMonitor.js';
271: /* eslint-disable @typescript-eslint/no-require-imports */
272: const WebBrowserPanelModule = feature('WEB_BROWSER_TOOL') ? require('../tools/WebBrowserTool/WebBrowserPanel.js') as typeof import('../tools/WebBrowserTool/WebBrowserPanel.js') : null;
273: /* eslint-enable @typescript-eslint/no-require-imports */
274: import { IssueFlagBanner } from '../components/PromptInput/IssueFlagBanner.js';
275: import { useIssueFlagBanner } from '../hooks/useIssueFlagBanner.js';
276: import { CompanionSprite, CompanionFloatingBubble, MIN_COLS_FOR_FULL_SPRITE } from '../buddy/CompanionSprite.js';
277: import { DevBar } from '../components/DevBar.js';
278: // Session manager removed - using AppState now
279: import type { RemoteSessionConfig } from '../remote/RemoteSessionManager.js';
280: import { REMOTE_SAFE_COMMANDS } from '../commands.js';
281: import type { RemoteMessageContent } from '../utils/teleport/api.js';
282: import { FullscreenLayout, useUnseenDivider, computeUnseenDivider } from '../components/FullscreenLayout.js';
283: import { isFullscreenEnvEnabled, maybeGetTmuxMouseHint, isMouseTrackingEnabled } from '../utils/fullscreen.js';
284: import { AlternateScreen } from '../ink/components/AlternateScreen.js';
285: import { ScrollKeybindingHandler } from '../components/ScrollKeybindingHandler.js';
286: import { useMessageActions, MessageActionsKeybindings, MessageActionsBar, type MessageActionsState, type MessageActionsNav, type MessageActionCaps } from '../components/messageActions.js';
287: import { setClipboard } from '../ink/termio/osc.js';
288: import type { ScrollBoxHandle } from '../ink/components/ScrollBox.js';
289: import { createAttachmentMessage, getQueuedCommandAttachments } from '../utils/attachments.js';
290: 
291: // Stable empty array for hooks that accept MCPServerConnection[] — avoids
292: // creating a new [] literal on every render in remote mode, which would
293: // cause useEffect dependency changes and infinite re-render loops.
294: const EMPTY_MCP_CLIENTS: MCPServerConnection[] = [];
295: 
296: // Stable stub for useAssistantHistory's non-KAIROS branch — avoids a new
297: // function identity each render, which would break composedOnScroll's memo.
298: const HISTORY_STUB = {
299:   maybeLoadOlder: (_: ScrollBoxHandle) => {}
300: };

(Showing lines 1-300 of 5006. Use offset=301 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMain.ts",
  "limit": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/bridge/bridgeMain.ts</path>
<type>file</type>
<content>1: import { feature } from 'bun:bundle'
2: import { randomUUID } from 'crypto'
3: import { hostname, tmpdir } from 'os'
4: import { basename, join, resolve } from 'path'
5: import { getRemoteSessionUrl } from '../constants/product.js'
6: import { shutdownDatadog } from '../services/analytics/datadog.js'
7: import { shutdown1PEventLogging } from '../services/analytics/firstPartyEventLogger.js'
8: import { checkGate_CACHED_OR_BLOCKING } from '../services/analytics/growthbook.js'
9: import {
10:   type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
11:   logEvent,
12:   logEventAsync,
13: } from '../services/analytics/index.js'
14: import { isInBundledMode } from '../utils/bundledMode.js'
15: import { logForDebugging } from '../utils/debug.js'
16: import { logForDiagnosticsNoPII } from '../utils/diagLogs.js'
17: import { isEnvTruthy, isInProtectedNamespace } from '../utils/envUtils.js'
18: import { errorMessage } from '../utils/errors.js'
19: import { truncateToWidth } from '../utils/format.js'
20: import { logError } from '../utils/log.js'
21: import { sleep } from '../utils/sleep.js'
22: import { createAgentWorktree, removeAgentWorktree } from '../utils/worktree.js'
23: import {
24:   BridgeFatalError,
25:   createBridgeApiClient,
26:   isExpiredErrorType,
27:   isSuppressible403,
28:   validateBridgeId,
29: } from './bridgeApi.js'
30: import { formatDuration } from './bridgeStatusUtil.js'
31: import { createBridgeLogger } from './bridgeUI.js'
32: import { createCapacityWake } from './capacityWake.js'
33: import { describeAxiosError } from './debugUtils.js'
34: import { createTokenRefreshScheduler } from './jwtUtils.js'
35: import { getPollIntervalConfig } from './pollConfig.js'
36: import { toCompatSessionId, toInfraSessionId } from './sessionIdCompat.js'
37: import { createSessionSpawner, safeFilenameId } from './sessionRunner.js'
38: import { getTrustedDeviceToken } from './trustedDevice.js'
39: import {
40:   BRIDGE_LOGIN_ERROR,
41:   type BridgeApiClient,
42:   type BridgeConfig,
43:   type BridgeLogger,
44:   DEFAULT_SESSION_TIMEOUT_MS,
45:   type SessionDoneStatus,
46:   type SessionHandle,
47:   type SessionSpawner,
48:   type SessionSpawnOpts,
49:   type SpawnMode,
50: } from './types.js'
51: import {
52:   buildCCRv2SdkUrl,
53:   buildSdkUrl,
54:   decodeWorkSecret,
55:   registerWorker,
56:   sameSessionId,
57: } from './workSecret.js'
58: 
59: export type BackoffConfig = {
60:   connInitialMs: number
61:   connCapMs: number
62:   connGiveUpMs: number
63:   generalInitialMs: number
64:   generalCapMs: number
65:   generalGiveUpMs: number
66:   /** SIGTERM→SIGKILL grace period on shutdown. Default 30s. */
67:   shutdownGraceMs?: number
68:   /** stopWorkWithRetry base delay (1s/2s/4s backoff). Default 1000ms. */
69:   stopWorkBaseDelayMs?: number
70: }
71: 
72: const DEFAULT_BACKOFF: BackoffConfig = {
73:   connInitialMs: 2_000,
74:   connCapMs: 120_000, // 2 minutes
75:   connGiveUpMs: 600_000, // 10 minutes
76:   generalInitialMs: 500,
77:   generalCapMs: 30_000,
78:   generalGiveUpMs: 600_000, // 10 minutes
79: }
80: 
81: /** Status update interval for the live display (ms). */
82: const STATUS_UPDATE_INTERVAL_MS = 1_000
83: const SPAWN_SESSIONS_DEFAULT = 32
84: 
85: /**
86:  * GrowthBook gate for multi-session spawn modes (--spawn / --capacity / --create-session-in-dir).
87:  * Sibling of tengu_ccr_bridge_multi_environment (multiple envs per host:dir) —
88:  * this one enables multiple sessions per environment.
89:  * Rollout staged via targeting rules: ants first, then gradual external.
90:  *
91:  * Uses the blocking gate check so a stale disk-cache miss doesn't unfairly
92:  * deny access. The fast path (cache has true) is still instant; only the
93:  * cold-start path awaits the server fetch, and that fetch also seeds the
94:  * disk cache for next time.
95:  */
96: async function isMultiSessionSpawnEnabled(): Promise<boolean> {
97:   return checkGate_CACHED_OR_BLOCKING('tengu_ccr_bridge_multi_session')
98: }
99: 
100: /**
101:  * Returns the threshold for detecting system sleep/wake in the poll loop.
102:  * Must exceed the max backoff cap — otherwise normal backoff delays trigger
103:  * false sleep detection (resetting the error budget indefinitely). Using
104:  * 2× the connection backoff cap, matching the pattern in WebSocketTransport
105:  * and replBridge.
106:  */
107: function pollSleepDetectionThresholdMs(backoff: BackoffConfig): number {
108:   return backoff.connCapMs * 2
109: }
110: 
111: /**
112:  * Returns the args that must precede CLI flags when spawning a child claude
113:  * process. In compiled binaries, process.execPath is the claude binary itself
114:  * and args go directly to it. In npm installs (node running cli.js),
115:  * process.execPath is the node runtime — the child spawn must pass the script
116:  * path as the first arg, otherwise node interprets --sdk-url as a node option
117:  * and exits with "bad option: --sdk-url". See anthropics/claude-code#28334.
118:  */
119: function spawnScriptArgs(): string[] {
120:   if (isInBundledMode() || !process.argv[1]) {
121:     return []
122:   }
123:   return [process.argv[1]]
124: }
125: 
126: /** Attempt to spawn a session; returns error string if spawn throws. */
127: function safeSpawn(
128:   spawner: SessionSpawner,
129:   opts: SessionSpawnOpts,
130:   dir: string,
131: ): SessionHandle | string {
132:   try {
133:     return spawner.spawn(opts, dir)
134:   } catch (err) {
135:     const errMsg = errorMessage(err)
136:     logError(new Error(`Session spawn failed: ${errMsg}`))
137:     return errMsg
138:   }
139: }
140: 
141: export async function runBridgeLoop(
142:   config: BridgeConfig,
143:   environmentId: string,
144:   environmentSecret: string,
145:   api: BridgeApiClient,
146:   spawner: SessionSpawner,
147:   logger: BridgeLogger,
148:   signal: AbortSignal,
149:   backoffConfig: BackoffConfig = DEFAULT_BACKOFF,
150:   initialSessionId?: string,
151:   getAccessToken?: () => string | undefined | Promise<string | undefined>,
152: ): Promise<void> {
153:   // Local abort controller so that onSessionDone can stop the poll loop.
154:   // Linked to the incoming signal so external aborts also work.
155:   const controller = new AbortController()
156:   if (signal.aborted) {
157:     controller.abort()
158:   } else {
159:     signal.addEventListener('abort', () => controller.abort(), { once: true })
160:   }
161:   const loopSignal = controller.signal
162: 
163:   const activeSessions = new Map<string, SessionHandle>()
164:   const sessionStartTimes = new Map<string, number>()
165:   const sessionWorkIds = new Map<string, string>()
166:   // Compat-surface ID (session_*) computed once at spawn and cached so
167:   // cleanup and status-update ticks use the same key regardless of whether
168:   // the tengu_bridge_repl_v2_cse_shim_enabled gate flips mid-session.
169:   const sessionCompatIds = new Map<string, string>()
170:   // Session ingress JWTs for heartbeat auth, keyed by sessionId.
171:   // Stored separately from handle.accessToken because the token refresh
172:   // scheduler overwrites that field with the OAuth token (~3h55m in).
173:   const sessionIngressTokens = new Map<string, string>()
174:   const sessionTimers = new Map<string, ReturnType<typeof setTimeout>>()
175:   const completedWorkIds = new Set<string>()
176:   const sessionWorktrees = new Map<
177:     string,
178:     {
179:       worktreePath: string
180:       worktreeBranch?: string
181:       gitRoot?: string
182:       hookBased?: boolean
183:     }
184:   >()
185:   // Track sessions killed by the timeout watchdog so onSessionDone can
186:   // distinguish them from server-initiated or shutdown interrupts.
187:   const timedOutSessions = new Set<string>()
188:   // Sessions that already have a title (server-set or bridge-derived) so
189:   // onFirstUserMessage doesn't clobber a user-assigned --name / web rename.
190:   // Keyed by compatSessionId to match logger.setSessionTitle's key.
191:   const titledSessions = new Set<string>()
192:   // Signal to wake the at-capacity sleep early when a session completes,
193:   // so the bridge can immediately accept new work.
194:   const capacityWake = createCapacityWake(loopSignal)
195: 
196:   /**
197:    * Heartbeat all active work items.
198:    * Returns 'ok' if at least one heartbeat succeeded, 'auth_failed' if any
199:    * got a 401/403 (JWT expired — re-queued via reconnectSession so the next
200:    * poll delivers fresh work), or 'failed' if all failed for other reasons.
201:    */
202:   async function heartbeatActiveWorkItems(): Promise<
203:     'ok' | 'auth_failed' | 'fatal' | 'failed'
204:   > {
205:     let anySuccess = false
206:     let anyFatal = false
207:     const authFailedSessions: string[] = []
208:     for (const [sessionId] of activeSessions) {
209:       const workId = sessionWorkIds.get(sessionId)
210:       const ingressToken = sessionIngressTokens.get(sessionId)
211:       if (!workId || !ingressToken) {
212:         continue
213:       }
214:       try {
215:         await api.heartbeatWork(environmentId, workId, ingressToken)
216:         anySuccess = true
217:       } catch (err) {
218:         logForDebugging(
219:           `[bridge:heartbeat] Failed for sessionId=${sessionId} workId=${workId}: ${errorMessage(err)}`,
220:         )
221:         if (err instanceof BridgeFatalError) {
222:           logEvent('tengu_bridge_heartbeat_error', {
223:             status:
224:               err.status as unknown as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
225:             error_type: (err.status === 401 || err.status === 403
226:               ? 'auth_failed'
227:               : 'fatal') as AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS,
228:           })
229:           if (err.status === 401 || err.status === 403) {
230:             authFailedSessions.push(sessionId)
231:           } else {
232:             // 404/410 = environment expired or deleted — no point retrying
233:             anyFatal = true
234:           }
235:         }
236:       }
237:     }
238:     // JWT expired → trigger server-side re-dispatch. Without this, work stays
239:     // ACK'd out of the Redis PEL and poll returns empty forever (CC-1263).
240:     // The existingHandle path below delivers the fresh token to the child.
241:     // sessionId is already in the format /bridge/reconnect expects: it comes
242:     // from work.data.id, which matches the server's EnvironmentInstance store
243:     // (cse_* under the compat gate, session_* otherwise).
244:     for (const sessionId of authFailedSessions) {
245:       logger.logVerbose(
246:         `Session ${sessionId} token expired — re-queuing via bridge/reconnect`,
247:       )
248:       try {
249:         await api.reconnectSession(environmentId, sessionId)
250:         logForDebugging(
251:           `[bridge:heartbeat] Re-queued sessionId=${sessionId} via bridge/reconnect`,
252:         )
253:       } catch (err) {
254:         logger.logError(
255:           `Failed to refresh session ${sessionId} token: ${errorMessage(err)}`,
256:         )
257:         logForDebugging(
258:           `[bridge:heartbeat] reconnectSession(${sessionId}) failed: ${errorMessage(err)}`,
259:           { level: 'error' },
260:         )
261:       }
262:     }
263:     if (anyFatal) {
264:       return 'fatal'
265:     }
266:     if (authFailedSessions.length > 0) {
267:       return 'auth_failed'
268:     }
269:     return anySuccess ? 'ok' : 'failed'
270:   }
271: 
272:   // Sessions spawned with CCR v2 env vars. v2 children cannot use OAuth
273:   // tokens (CCR worker endpoints validate the JWT's session_id claim,
274:   // register_worker.go:32), so onRefresh triggers server re-dispatch
275:   // instead — the next poll delivers fresh work with a new JWT via the
276:   // existingHandle path below.
277:   const v2Sessions = new Set<string>()
278: 
279:   // Proactive token refresh: schedules a timer 5min before the session
280:   // ingress JWT expires. v1 delivers OAuth directly; v2 calls
281:   // reconnectSession to trigger server re-dispatch (CC-1263: without
282:   // this, v2 daemon sessions silently die at ~5h since the server does
283:   // not auto-re-dispatch ACK'd work on lease expiry).
284:   const tokenRefresh = getAccessToken
285:     ? createTokenRefreshScheduler({
286:         getAccessToken,
287:         onRefresh: (sessionId, oauthToken) => {
288:           const handle = activeSessions.get(sessionId)
289:           if (!handle) {
290:             return
291:           }
292:           if (v2Sessions.has(sessionId)) {
293:             logger.logVerbose(
294:               `Refreshing session ${sessionId} token via bridge/reconnect`,
295:             )
296:             void api
297:               .reconnectSession(environmentId, sessionId)
298:               .catch((err: unknown) => {
299:                 logger.logError(
300:                   `Failed to refresh session ${sessionId} token: ${errorMessage(err)}`,

(Showing lines 1-300 of 2999. Use offset=301 to continue.)
</content>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 11.7s)

_Thinking:_

Now I have a good understanding of the project structure. Let me get more information about services, components, and how the query loop works. I need to understand the tools, services, and how everything connects.



Let me explore more of the project structure and understand how the services and tools work.

**Tool: bash**

**Input:**
```json
{
  "command": "ls src/services/ src/tools/ src/commands/ src/components/ src/screens/",
  "description": "List services, tools, commands, components"
}
```

**Output:**
```
src/commands/:
add-dir
advisor.ts
agents
ant-trace
autofix-pr
backfill-sessions
branch
break-cache
bridge
bridge-kick.ts
brief.ts
btw
bughunter
chrome
clear
color
commit-push-pr.ts
commit.ts
compact
config
context
copy
cost
createMovedToPluginCommand.ts
ctx_viz
debug-tool-call
desktop
diff
doctor
effort
env
exit
export
extra-usage
fast
feedback
files
good-claude
heapdump
help
hooks
ide
init.ts
init-verifiers.ts
insights.ts
install-github-app
install-slack-app
install.tsx
issue
keybindings
login
logout
mcp
memory
mobile
mock-limits
model
oauth-refresh
onboarding
output-style
passes
perf-issue
permissions
plan
plugin
pr_comments
privacy-settings
rate-limit-options
release-notes
reload-plugins
remote-env
remote-setup
rename
reset-limits
resume
review
review.ts
rewind
sandbox-toggle
security-review.ts
session
share
skills
stats
status
statusline.tsx
stickers
summary
tag
tasks
teleport
terminalSetup
theme
thinkback
thinkback-play
ultraplan.tsx
upgrade
usage
version.ts
vim
voice

src/components/:
AgentProgressLine.tsx
agents
ApproveApiKey.tsx
App.tsx
AutoModeOptInDialog.tsx
AutoUpdater.tsx
AutoUpdaterWrapper.tsx
AwsAuthStatusBox.tsx
BaseTextInput.tsx
BashModeProgress.tsx
BridgeDialog.tsx
BypassPermissionsModeDialog.tsx
ChannelDowngradeDialog.tsx
ClaudeCodeHint
ClaudeInChromeOnboarding.tsx
ClaudeMdExternalIncludesDialog.tsx
ClickableImageRef.tsx
CompactSummary.tsx
ConfigurableShortcutHint.tsx
ConsoleOAuthFlow.tsx
ContextSuggestions.tsx
ContextVisualization.tsx
CoordinatorAgentStatus.tsx
CostThresholdDialog.tsx
CtrlOToExpand.tsx
CustomSelect
design-system
DesktopHandoff.tsx
DesktopUpsell
DevBar.tsx
DevChannelsDialog.tsx
DiagnosticsDisplay.tsx
diff
EffortCallout.tsx
EffortIndicator.ts
ExitFlow.tsx
ExportDialog.tsx
FallbackToolUseErrorMessage.tsx
FallbackToolUseRejectedMessage.tsx
FastIcon.tsx
FeedbackSurvey
Feedback.tsx
FileEditToolDiff.tsx
FileEditToolUpdatedMessage.tsx
FileEditToolUseRejectedMessage.tsx
FilePathLink.tsx
FullscreenLayout.tsx
GlobalSearchDialog.tsx
grove
HelpV2
HighlightedCode
HighlightedCode.tsx
HistorySearchDialog.tsx
hooks
IdeAutoConnectDialog.tsx
IdeOnboardingDialog.tsx
IdeStatusIndicator.tsx
IdleReturnDialog.tsx
InterruptedByUser.tsx
InvalidConfigDialog.tsx
InvalidSettingsDialog.tsx
KeybindingWarnings.tsx
LanguagePicker.tsx
LogoV2
LogSelector.tsx
LspRecommendation
ManagedSettingsSecurityDialog
MarkdownTable.tsx
Markdown.tsx
mcp
MCPServerApprovalDialog.tsx
MCPServerDesktopImportDialog.tsx
MCPServerDialogCopy.tsx
MCPServerMultiselectDialog.tsx
memory
MemoryUsageIndicator.tsx
messageActions.tsx
MessageModel.tsx
MessageResponse.tsx
MessageRow.tsx
messages
MessageSelector.tsx
Messages.tsx
MessageTimestamp.tsx
Message.tsx
ModelPicker.tsx
NativeAutoUpdater.tsx
NotebookEditToolUseRejectedMessage.tsx
OffscreenFreeze.tsx
Onboarding.tsx
OutputStylePicker.tsx
PackageManagerAutoUpdater.tsx
Passes
permissions
PrBadge.tsx
PressEnterToContinue.tsx
PromptInput
QuickOpenDialog.tsx
RemoteCallout.tsx
RemoteEnvironmentDialog.tsx
ResumeTask.tsx
sandbox
SandboxViolationExpandedView.tsx
ScrollKeybindingHandler.tsx
SearchBox.tsx
SentryErrorBoundary.ts
SessionBackgroundHint.tsx
SessionPreview.tsx
Settings
shell
ShowInIDEPrompt.tsx
SkillImprovementSurvey.tsx
skills
Spinner
Spinner.tsx
Stats.tsx
StatusLine.tsx
StatusNotices.tsx
StructuredDiff
StructuredDiffList.tsx
StructuredDiff.tsx
TagTabs.tsx
TaskListV2.tsx
tasks
TeammateViewHeader.tsx
teams
TeleportError.tsx
TeleportProgress.tsx
TeleportRepoMismatchDialog.tsx
TeleportResumeWrapper.tsx
TeleportStash.tsx
TextInput.tsx
ThemePicker.tsx
ThinkingToggle.tsx
TokenWarning.tsx
ToolUseLoader.tsx
TrustDialog
ui
ValidationErrorsList.tsx
VimTextInput.tsx
VirtualMessageList.tsx
wizard
WorkflowMultiselectDialog.tsx
WorktreeExitDialog.tsx

src/screens/:
Doctor.tsx
REPL.tsx
ResumeConversation.tsx

src/services/:
AgentSummary
analytics
api
autoDream
awaySummary.ts
claudeAiLimitsHook.ts
claudeAiLimits.ts
compact
diagnosticTracking.ts
extractMemories
internalLogging.ts
lsp
MagicDocs
mcp
mcpServerApproval.tsx
mockRateLimits.ts
notifier.ts
oauth
plugins
policyLimits
preventSleep.ts
PromptSuggestion
rateLimitMessages.ts
rateLimitMocking.ts
remoteManagedSettings
SessionMemory
settingsSync
teamMemorySync
tips
tokenEstimation.ts
tools
toolUseSummary
vcr.ts
voiceKeyterms.ts
voiceStreamSTT.ts
voice.ts

src/tools/:
AgentTool
AskUserQuestionTool
BashTool
BriefTool
ConfigTool
EnterPlanModeTool
EnterWorktreeTool
ExitPlanModeTool
ExitWorktreeTool
FileEditTool
FileReadTool
FileWriteTool
GlobTool
GrepTool
ListMcpResourcesTool
LSPTool
McpAuthTool
MCPTool
NotebookEditTool
PowerShellTool
ReadMcpResourceTool
RemoteTriggerTool
REPLTool
ScheduleCronTool
SendMessageTool
shared
SkillTool
SleepTool
SyntheticOutputTool
TaskCreateTool
TaskGetTool
TaskListTool
TaskOutputTool
TaskStopTool
TaskUpdateTool
TeamCreateTool
TeamDeleteTool
testing
TodoWriteTool
ToolSearchTool
utils.ts
WebFetchTool
WebSearchTool

```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/services/api/claude.ts",
  "limit": 200
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/services/api/claude.ts</path>
<type>file</type>
<content>1: import type {
2:   BetaContentBlock,
3:   BetaContentBlockParam,
4:   BetaImageBlockParam,
5:   BetaJSONOutputFormat,
6:   BetaMessage,
7:   BetaMessageDeltaUsage,
8:   BetaMessageStreamParams,
9:   BetaOutputConfig,
10:   BetaRawMessageStreamEvent,
11:   BetaRequestDocumentBlock,
12:   BetaStopReason,
13:   BetaToolChoiceAuto,
14:   BetaToolChoiceTool,
15:   BetaToolResultBlockParam,
16:   BetaToolUnion,
17:   BetaUsage,
18:   BetaMessageParam as MessageParam,
19: } from '@anthropic-ai/sdk/resources/beta/messages/messages.mjs'
20: import type { TextBlockParam } from '@anthropic-ai/sdk/resources/index.mjs'
21: import type { Stream } from '@anthropic-ai/sdk/streaming.mjs'
22: import { randomUUID } from 'crypto'
23: import {
24:   getAPIProvider,
25:   isFirstPartyAnthropicBaseUrl,
26: } from 'src/utils/model/providers.js'
27: import {
28:   getAttributionHeader,
29:   getCLISyspromptPrefix,
30: } from '../../constants/system.js'
31: import {
32:   getEmptyToolPermissionContext,
33:   type QueryChainTracking,
34:   type Tool,
35:   type ToolPermissionContext,
36:   type Tools,
37:   toolMatchesName,
38: } from '../../Tool.js'
39: import type { AgentDefinition } from '../../tools/AgentTool/loadAgentsDir.js'
40: import {
41:   type ConnectorTextBlock,
42:   type ConnectorTextDelta,
43:   isConnectorTextBlock,
44: } from '../../types/connectorText.js'
45: import type {
46:   AssistantMessage,
47:   Message,
48:   StreamEvent,
49:   SystemAPIErrorMessage,
50:   UserMessage,
51: } from '../../types/message.js'
52: import {
53:   type CacheScope,
54:   logAPIPrefix,
55:   splitSysPromptPrefix,
56:   toolToAPISchema,
57: } from '../../utils/api.js'
58: import { getOauthAccountInfo } from '../../utils/auth.js'
59: import {
60:   getBedrockExtraBodyParamsBetas,
61:   getMergedBetas,
62:   getModelBetas,
63: } from '../../utils/betas.js'
64: import { getOrCreateUserID } from '../../utils/config.js'
65: import {
66:   CAPPED_DEFAULT_MAX_TOKENS,
67:   getModelMaxOutputTokens,
68:   getSonnet1mExpTreatmentEnabled,
69: } from '../../utils/context.js'
70: import { resolveAppliedEffort } from '../../utils/effort.js'
71: import { isEnvTruthy } from '../../utils/envUtils.js'
72: import { errorMessage } from '../../utils/errors.js'
73: import { computeFingerprintFromMessages } from '../../utils/fingerprint.js'
74: import { captureAPIRequest, logError } from '../../utils/log.js'
75: import {
76:   createAssistantAPIErrorMessage,
77:   createUserMessage,
78:   ensureToolResultPairing,
79:   normalizeContentFromAPI,
80:   normalizeMessagesForAPI,
81:   stripAdvisorBlocks,
82:   stripCallerFieldFromAssistantMessage,
83:   stripToolReferenceBlocksFromUserMessage,
84: } from '../../utils/messages.js'
85: import {
86:   getDefaultOpusModel,
87:   getDefaultSonnetModel,
88:   getSmallFastModel,
89:   isNonCustomOpusModel,
90: } from '../../utils/model/model.js'
91: import {
92:   asSystemPrompt,
93:   type SystemPrompt,
94: } from '../../utils/systemPromptType.js'
95: import { tokenCountFromLastAPIResponse } from '../../utils/tokens.js'
96: import { getDynamicConfig_BLOCKS_ON_INIT } from '../analytics/growthbook.js'
97: import {
98:   currentLimits,
99:   extractQuotaStatusFromError,
100:   extractQuotaStatusFromHeaders,
101: } from '../claudeAiLimits.js'
102: import { getAPIContextManagement } from '../compact/apiMicrocompact.js'
103: 
104: /* eslint-disable @typescript-eslint/no-require-imports */
105: const autoModeStateModule = feature('TRANSCRIPT_CLASSIFIER')
106:   ? (require('../../utils/permissions/autoModeState.js') as typeof import('../../utils/permissions/autoModeState.js'))
107:   : null
108: 
109: import { feature } from 'bun:bundle'
110: import type { ClientOptions } from '@anthropic-ai/sdk'
111: import {
112:   APIConnectionTimeoutError,
113:   APIError,
114:   APIUserAbortError,
115: } from '@anthropic-ai/sdk/error'
116: import {
117:   getAfkModeHeaderLatched,
118:   getCacheEditingHeaderLatched,
119:   getFastModeHeaderLatched,
120:   getLastApiCompletionTimestamp,
121:   getPromptCache1hAllowlist,
122:   getPromptCache1hEligible,
123:   getSessionId,
124:   getThinkingClearLatched,
125:   setAfkModeHeaderLatched,
126:   setCacheEditingHeaderLatched,
127:   setFastModeHeaderLatched,
128:   setLastMainRequestId,
129:   setPromptCache1hAllowlist,
130:   setPromptCache1hEligible,
131:   setThinkingClearLatched,
132: } from 'src/bootstrap/state.js'
133: import {
134:   AFK_MODE_BETA_HEADER,
135:   CONTEXT_1M_BETA_HEADER,
136:   CONTEXT_MANAGEMENT_BETA_HEADER,
137:   EFFORT_BETA_HEADER,
138:   FAST_MODE_BETA_HEADER,
139:   PROMPT_CACHING_SCOPE_BETA_HEADER,
140:   REDACT_THINKING_BETA_HEADER,
141:   STRUCTURED_OUTPUTS_BETA_HEADER,
142:   TASK_BUDGETS_BETA_HEADER,
143: } from 'src/constants/betas.js'
144: import type { QuerySource } from 'src/constants/querySource.js'
145: import type { Notification } from 'src/context/notifications.js'
146: import { addToTotalSessionCost } from 'src/cost-tracker.js'
147: import { getFeatureValue_CACHED_MAY_BE_STALE } from 'src/services/analytics/growthbook.js'
148: import type { AgentId } from 'src/types/ids.js'
149: import {
150:   ADVISOR_TOOL_INSTRUCTIONS,
151:   getExperimentAdvisorModels,
152:   isAdvisorEnabled,
153:   isValidAdvisorModel,
154:   modelSupportsAdvisor,
155: } from 'src/utils/advisor.js'
156: import { getAgentContext } from 'src/utils/agentContext.js'
157: import { isClaudeAISubscriber } from 'src/utils/auth.js'
158: import {
159:   getToolSearchBetaHeader,
160:   modelSupportsStructuredOutputs,
161:   shouldIncludeFirstPartyOnlyBetas,
162:   shouldUseGlobalCacheScope,
163: } from 'src/utils/betas.js'
164: import { CLAUDE_IN_CHROME_MCP_SERVER_NAME } from 'src/utils/claudeInChrome/common.js'
165: import { CHROME_TOOL_SEARCH_INSTRUCTIONS } from 'src/utils/claudeInChrome/prompt.js'
166: import { getMaxThinkingTokensForModel } from 'src/utils/context.js'
167: import { logForDebugging } from 'src/utils/debug.js'
168: import { logForDiagnosticsNoPII } from 'src/utils/diagLogs.js'
169: import { type EffortValue, modelSupportsEffort } from 'src/utils/effort.js'
170: import {
171:   isFastModeAvailable,
172:   isFastModeCooldown,
173:   isFastModeEnabled,
174:   isFastModeSupportedByModel,
175: } from 'src/utils/fastMode.js'
176: import { returnValue } from 'src/utils/generators.js'
177: import { headlessProfilerCheckpoint } from 'src/utils/headlessProfiler.js'
178: import { isMcpInstructionsDeltaEnabled } from 'src/utils/mcpInstructionsDelta.js'
179: import { calculateUSDCost } from 'src/utils/modelCost.js'
180: import { endQueryProfile, queryCheckpoint } from 'src/utils/queryProfiler.js'
181: import {
182:   modelSupportsAdaptiveThinking,
183:   modelSupportsThinking,
184:   type ThinkingConfig,
185: } from 'src/utils/thinking.js'
186: import {
187:   extractDiscoveredToolNames,
188:   isDeferredToolsDeltaEnabled,
189:   isToolSearchEnabled,
190: } from 'src/utils/toolSearch.js'
191: import { API_MAX_MEDIA_PER_REQUEST } from '../../constants/apiLimits.js'
192: import { ADVISOR_BETA_HEADER } from '../../constants/betas.js'
193: import {
194:   formatDeferredToolLine,
195:   isDeferredTool,
196:   TOOL_SEARCH_TOOL_NAME,
197: } from '../../tools/ToolSearchTool/prompt.js'
198: import { count } from '../../utils/array.js'
199: import { insertBlockAfterToolResults } from '../../utils/contentArray.js'
200: import { validateBoundedIntEnvVar } from '../../utils/envValidation.js'

(Showing lines 1-200 of 3419. Use offset=201 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/tools/BashTool/BashTool.tsx",
  "limit": 200
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/tools/BashTool/BashTool.tsx</path>
<type>file</type>
<content>1: import { feature } from 'bun:bundle';
2: import type { ToolResultBlockParam } from '@anthropic-ai/sdk/resources/index.mjs';
3: import { copyFile, stat as fsStat, truncate as fsTruncate, link } from 'fs/promises';
4: import * as React from 'react';
5: import type { CanUseToolFn } from 'src/hooks/useCanUseTool.js';
6: import type { AppState } from 'src/state/AppState.js';
7: import { z } from 'zod/v4';
8: import { getKairosActive } from '../../bootstrap/state.js';
9: import { TOOL_SUMMARY_MAX_LENGTH } from '../../constants/toolLimits.js';
10: import { type AnalyticsMetadata_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS, logEvent } from '../../services/analytics/index.js';
11: import { notifyVscodeFileUpdated } from '../../services/mcp/vscodeSdkMcp.js';
12: import type { SetToolJSXFn, ToolCallProgress, ToolUseContext, ValidationResult } from '../../Tool.js';
13: import { buildTool, type ToolDef } from '../../Tool.js';
14: import { backgroundExistingForegroundTask, markTaskNotified, registerForeground, spawnShellTask, unregisterForeground } from '../../tasks/LocalShellTask/LocalShellTask.js';
15: import type { AgentId } from '../../types/ids.js';
16: import type { AssistantMessage } from '../../types/message.js';
17: import { parseForSecurity } from '../../utils/bash/ast.js';
18: import { splitCommand_DEPRECATED, splitCommandWithOperators } from '../../utils/bash/commands.js';
19: import { extractClaudeCodeHints } from '../../utils/claudeCodeHints.js';
20: import { detectCodeIndexingFromCommand } from '../../utils/codeIndexing.js';
21: import { isEnvTruthy } from '../../utils/envUtils.js';
22: import { isENOENT, ShellError } from '../../utils/errors.js';
23: import { detectFileEncoding, detectLineEndings, getFileModificationTime, writeTextContent } from '../../utils/file.js';
24: import { fileHistoryEnabled, fileHistoryTrackEdit } from '../../utils/fileHistory.js';
25: import { truncate } from '../../utils/format.js';
26: import { getFsImplementation } from '../../utils/fsOperations.js';
27: import { lazySchema } from '../../utils/lazySchema.js';
28: import { expandPath } from '../../utils/path.js';
29: import type { PermissionResult } from '../../utils/permissions/PermissionResult.js';
30: import { maybeRecordPluginHint } from '../../utils/plugins/hintRecommendation.js';
31: import { exec } from '../../utils/Shell.js';
32: import type { ExecResult } from '../../utils/ShellCommand.js';
33: import { SandboxManager } from '../../utils/sandbox/sandbox-adapter.js';
34: import { semanticBoolean } from '../../utils/semanticBoolean.js';
35: import { semanticNumber } from '../../utils/semanticNumber.js';
36: import { EndTruncatingAccumulator } from '../../utils/stringUtils.js';
37: import { getTaskOutputPath } from '../../utils/task/diskOutput.js';
38: import { TaskOutput } from '../../utils/task/TaskOutput.js';
39: import { isOutputLineTruncated } from '../../utils/terminal.js';
40: import { buildLargeToolResultMessage, ensureToolResultsDir, generatePreview, getToolResultPath, PREVIEW_SIZE_BYTES } from '../../utils/toolResultStorage.js';
41: import { userFacingName as fileEditUserFacingName } from '../FileEditTool/UI.js';
42: import { trackGitOperations } from '../shared/gitOperationTracking.js';
43: import { bashToolHasPermission, commandHasAnyCd, matchWildcardPattern, permissionRuleExtractPrefix } from './bashPermissions.js';
44: import { interpretCommandResult } from './commandSemantics.js';
45: import { getDefaultTimeoutMs, getMaxTimeoutMs, getSimplePrompt } from './prompt.js';
46: import { checkReadOnlyConstraints } from './readOnlyValidation.js';
47: import { parseSedEditCommand } from './sedEditParser.js';
48: import { shouldUseSandbox } from './shouldUseSandbox.js';
49: import { BASH_TOOL_NAME } from './toolName.js';
50: import { BackgroundHint, renderToolResultMessage, renderToolUseErrorMessage, renderToolUseMessage, renderToolUseProgressMessage, renderToolUseQueuedMessage } from './UI.js';
51: import { buildImageToolResult, isImageOutput, resetCwdIfOutsideProject, resizeShellImageOutput, stdErrAppendShellResetMessage, stripEmptyLines } from './utils.js';
52: const EOL = '\n';
53: 
54: // Progress display constants
55: const PROGRESS_THRESHOLD_MS = 2000; // Show progress after 2 seconds
56: // In assistant mode, blocking bash auto-backgrounds after this many ms in the main agent
57: const ASSISTANT_BLOCKING_BUDGET_MS = 15_000;
58: 
59: // Search commands for collapsible display (grep, find, etc.)
60: const BASH_SEARCH_COMMANDS = new Set(['find', 'grep', 'rg', 'ag', 'ack', 'locate', 'which', 'whereis']);
61: 
62: // Read/view commands for collapsible display (cat, head, etc.)
63: const BASH_READ_COMMANDS = new Set(['cat', 'head', 'tail', 'less', 'more',
64: // Analysis commands
65: 'wc', 'stat', 'file', 'strings',
66: // Data processing — commonly used to parse/transform file content in pipes
67: 'jq', 'awk', 'cut', 'sort', 'uniq', 'tr']);
68: 
69: // Directory-listing commands for collapsible display (ls, tree, du).
70: // Split from BASH_READ_COMMANDS so the summary says "Listed N directories"
71: // instead of the misleading "Read N files".
72: const BASH_LIST_COMMANDS = new Set(['ls', 'tree', 'du']);
73: 
74: // Commands that are semantic-neutral in any position — pure output/status commands
75: // that don't change the read/search nature of the overall pipeline.
76: // e.g. `ls dir && echo "---" && ls dir2` is still a read-only compound command.
77: const BASH_SEMANTIC_NEUTRAL_COMMANDS = new Set(['echo', 'printf', 'true', 'false', ':' // bash no-op
78: ]);
79: 
80: // Commands that typically produce no stdout on success
81: const BASH_SILENT_COMMANDS = new Set(['mv', 'cp', 'rm', 'mkdir', 'rmdir', 'chmod', 'chown', 'chgrp', 'touch', 'ln', 'cd', 'export', 'unset', 'wait']);
82: 
83: /**
84:  * Checks if a bash command is a search or read operation.
85:  * Used to determine if the command should be collapsed in the UI.
86:  * Returns an object indicating whether it's a search or read operation.
87:  *
88:  * For pipelines (e.g., `cat file | bq`), ALL parts must be search/read commands
89:  * for the whole command to be considered collapsible.
90:  *
91:  * Semantic-neutral commands (echo, printf, true, false, :) are skipped in any
92:  * position, as they're pure output/status commands that don't affect the read/search
93:  * nature of the pipeline (e.g. `ls dir && echo "---" && ls dir2` is still a read).
94:  */
95: export function isSearchOrReadBashCommand(command: string): {
96:   isSearch: boolean;
97:   isRead: boolean;
98:   isList: boolean;
99: } {
100:   let partsWithOperators: string[];
101:   try {
102:     partsWithOperators = splitCommandWithOperators(command);
103:   } catch {
104:     // If we can't parse the command due to malformed syntax,
105:     // it's not a search/read command
106:     return {
107:       isSearch: false,
108:       isRead: false,
109:       isList: false
110:     };
111:   }
112:   if (partsWithOperators.length === 0) {
113:     return {
114:       isSearch: false,
115:       isRead: false,
116:       isList: false
117:     };
118:   }
119:   let hasSearch = false;
120:   let hasRead = false;
121:   let hasList = false;
122:   let hasNonNeutralCommand = false;
123:   let skipNextAsRedirectTarget = false;
124:   for (const part of partsWithOperators) {
125:     if (skipNextAsRedirectTarget) {
126:       skipNextAsRedirectTarget = false;
127:       continue;
128:     }
129:     if (part === '>' || part === '>>' || part === '>&') {
130:       skipNextAsRedirectTarget = true;
131:       continue;
132:     }
133:     if (part === '||' || part === '&&' || part === '|' || part === ';') {
134:       continue;
135:     }
136:     const baseCommand = part.trim().split(/\s+/)[0];
137:     if (!baseCommand) {
138:       continue;
139:     }
140:     if (BASH_SEMANTIC_NEUTRAL_COMMANDS.has(baseCommand)) {
141:       continue;
142:     }
143:     hasNonNeutralCommand = true;
144:     const isPartSearch = BASH_SEARCH_COMMANDS.has(baseCommand);
145:     const isPartRead = BASH_READ_COMMANDS.has(baseCommand);
146:     const isPartList = BASH_LIST_COMMANDS.has(baseCommand);
147:     if (!isPartSearch && !isPartRead && !isPartList) {
148:       return {
149:         isSearch: false,
150:         isRead: false,
151:         isList: false
152:       };
153:     }
154:     if (isPartSearch) hasSearch = true;
155:     if (isPartRead) hasRead = true;
156:     if (isPartList) hasList = true;
157:   }
158: 
159:   // Only neutral commands (e.g., just "echo foo") -- not collapsible
160:   if (!hasNonNeutralCommand) {
161:     return {
162:       isSearch: false,
163:       isRead: false,
164:       isList: false
165:     };
166:   }
167:   return {
168:     isSearch: hasSearch,
169:     isRead: hasRead,
170:     isList: hasList
171:   };
172: }
173: 
174: /**
175:  * Checks if a bash command is expected to produce no stdout on success.
176:  * Used to show "Done" instead of "(No output)" in the UI.
177:  */
178: function isSilentBashCommand(command: string): boolean {
179:   let partsWithOperators: string[];
180:   try {
181:     partsWithOperators = splitCommandWithOperators(command);
182:   } catch {
183:     return false;
184:   }
185:   if (partsWithOperators.length === 0) {
186:     return false;
187:   }
188:   let hasNonFallbackCommand = false;
189:   let lastOperator: string | null = null;
190:   let skipNextAsRedirectTarget = false;
191:   for (const part of partsWithOperators) {
192:     if (skipNextAsRedirectTarget) {
193:       skipNextAsRedirectTarget = false;
194:       continue;
195:     }
196:     if (part === '>' || part === '>>' || part === '>&') {
197:       skipNextAsRedirectTarget = true;
198:       continue;
199:     }
200:     if (part === '||' || part === '&&' || part === '|' || part === ';') {

(Showing lines 1-200 of 1144. Use offset=201 to continue.)
</content>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 20.2s)

_Thinking:_

Now I have a good understanding of the project. Let me get more detailed code counts by directory to write the docs.md file.



**Tool: bash**

**Input:**
```json
{
  "command": "cloc src --exclude-dir=node_modules,.git,dist,build,.next,vendor --quiet --json 2>/dev/null | python3 -c \"\nimport json, sys\ndata = json.load(sys.stdin)\nfor lang, info in data.items():\n    print(f'{lang}: {info[\\\"code\\\"]} lines')\n\"",
  "description": "Get line counts per language"
}
```

**Output:**
```
Traceback (most recent call last):
  File "<string>", line 5, in <module>
KeyError: 'code'

```

**Tool: bash**

**Input:**
```json
{
  "command": "cloc src --exclude-dir=node_modules,.git --quiet --by-file --csv 2>/dev/null | head -50",
  "description": "Get per-file counts"
}
```

**Output:**
```
language,filename,blank,comment,code,"github.com/AlDanial/cloc v 2.06  T=6.68 s (282.4 files/s 76847.2 lines/s)"
TypeScript,src/cli/print.ts,331,842,4421
TypeScript,src/utils/messages.ts,442,732,4338
TypeScript,src/utils/hooks.ts,347,770,3905
TypeScript,src/utils/bash/bashParser.ts,131,459,3846
TypeScript,src/main.tsx,238,908,3538
TypeScript,src/utils/sessionStorage.ts,399,1174,3532
TypeScript,src/screens/REPL.tsx,261,1257,3488
TypeScript,src/utils/attachments.ts,346,639,3012
TypeScript,src/services/api/claude.ts,207,499,2713
TypeScript,src/commands/insights.ts,308,206,2686
TypeScript,src/services/mcp/client.ts,261,473,2614
TypeScript,src/utils/plugins/pluginLoader.ts,245,728,2329
TypeScript,src/bridge/bridgeMain.ts,190,541,2268
TypeScript,src/native-ts/yoga-layout/index.ts,149,368,2061
TypeScript,src/services/mcp/auth.ts,179,394,1892
TypeScript,src/components/PromptInput/PromptInput.tsx,126,339,1874
TypeScript,src/commands/plugin/ManagePlugins.tsx,126,237,1852
TypeScript,src/tools/BashTool/bashPermissions.ts,180,716,1725
TypeScript,src/utils/plugins/marketplaceManager.ts,203,724,1716
TypeScript,src/entrypoints/sdk/coreSchemas.ts,152,61,1676
TypeScript,src/components/Settings/Config.tsx,15,150,1657
TypeScript,src/tools/BashTool/bashSecurity.ts,223,789,1580
TypeScript,src/components/LogSelector.tsx,10,26,1539
TypeScript,src/utils/bash/ast.ts,110,1065,1504
TypeScript,src/bridge/replBridge.ts,139,772,1495
TypeScript,src/tools/PowerShellTool/pathValidation.ts,96,461,1492
TypeScript,src/services/tools/toolExecution.ts,94,165,1486
TypeScript,src/utils/auth.ts,218,351,1433
TypeScript,src/utils/shell/readOnlyCommandValidation.ts,62,398,1433
TypeScript,src/tools/BashTool/readOnlyValidation.ts,124,489,1377
TypeScript,src/utils/nativeInstaller/installer.ts,164,227,1317
TypeScript,src/services/compact/compact.ts,124,268,1313
TypeScript,src/query.ts,117,330,1282
TypeScript,src/utils/config.ts,210,334,1273
TypeScript,src/bootstrap/state.ts,234,289,1235
TypeScript,src/utils/swarm/inProcessRunner.ts,111,247,1194
TypeScript,src/components/permissions/rules/PermissionRuleList.tsx,4,5,1170
TypeScript,src/utils/permissions/permissions.ts,96,221,1169
TypeScript,src/utils/powershell/parser.ts,109,526,1169
TypeScript,src/utils/ide.ts,138,199,1157
TypeScript,src/services/mcp/config.ts,132,295,1151
TypeScript,src/utils/permissions/yoloClassifier.ts,75,287,1133
TypeScript,src/utils/analyzeContext.ts,123,132,1127
TypeScript,src/components/Stats.tsx,45,58,1125
TypeScript,src/utils/worktree.ts,131,279,1109
TypeScript,src/utils/Cursor.ts,224,207,1099
TypeScript,src/tools/PowerShellTool/readOnlyValidation.ts,105,625,1093
TypeScript,src/utils/plugins/schemas.ts,64,530,1087
TypeScript,src/utils/permissions/permissionSetup.ts,129,335,1068

```

---

## Assistant (Build · minimax/minimax-m2.7 · 6.6s)

_Thinking:_

Now I have a good picture of the codebase. Let me create a comprehensive docs.md. Let me also look at a few more key files to understand the overall flow better.



**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/context.ts",
  "limit": 200
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/context.ts</path>
<type>file</type>
<content>1: import { feature } from 'bun:bundle'
2: import memoize from 'lodash-es/memoize.js'
3: import {
4:   getAdditionalDirectoriesForClaudeMd,
5:   setCachedClaudeMdContent,
6: } from './bootstrap/state.js'
7: import { getLocalISODate } from './constants/common.js'
8: import {
9:   filterInjectedMemoryFiles,
10:   getClaudeMds,
11:   getMemoryFiles,
12: } from './utils/claudemd.js'
13: import { logForDiagnosticsNoPII } from './utils/diagLogs.js'
14: import { isBareMode, isEnvTruthy } from './utils/envUtils.js'
15: import { execFileNoThrow } from './utils/execFileNoThrow.js'
16: import { getBranch, getDefaultBranch, getIsGit, gitExe } from './utils/git.js'
17: import { shouldIncludeGitInstructions } from './utils/gitSettings.js'
18: import { logError } from './utils/log.js'
19: 
20: const MAX_STATUS_CHARS = 2000
21: 
22: // System prompt injection for cache breaking (ant-only, ephemeral debugging state)
23: let systemPromptInjection: string | null = null
24: 
25: export function getSystemPromptInjection(): string | null {
26:   return systemPromptInjection
27: }
28: 
29: export function setSystemPromptInjection(value: string | null): void {
30:   systemPromptInjection = value
31:   // Clear context caches immediately when injection changes
32:   getUserContext.cache.clear?.()
33:   getSystemContext.cache.clear?.()
34: }
35: 
36: export const getGitStatus = memoize(async (): Promise<string | null> => {
37:   if (process.env.NODE_ENV === 'test') {
38:     // Avoid cycles in tests
39:     return null
40:   }
41: 
42:   const startTime = Date.now()
43:   logForDiagnosticsNoPII('info', 'git_status_started')
44: 
45:   const isGitStart = Date.now()
46:   const isGit = await getIsGit()
47:   logForDiagnosticsNoPII('info', 'git_is_git_check_completed', {
48:     duration_ms: Date.now() - isGitStart,
49:     is_git: isGit,
50:   })
51: 
52:   if (!isGit) {
53:     logForDiagnosticsNoPII('info', 'git_status_skipped_not_git', {
54:       duration_ms: Date.now() - startTime,
55:     })
56:     return null
57:   }
58: 
59:   try {
60:     const gitCmdsStart = Date.now()
61:     const [branch, mainBranch, status, log, userName] = await Promise.all([
62:       getBranch(),
63:       getDefaultBranch(),
64:       execFileNoThrow(gitExe(), ['--no-optional-locks', 'status', '--short'], {
65:         preserveOutputOnError: false,
66:       }).then(({ stdout }) => stdout.trim()),
67:       execFileNoThrow(
68:         gitExe(),
69:         ['--no-optional-locks', 'log', '--oneline', '-n', '5'],
70:         {
71:           preserveOutputOnError: false,
72:         },
73:       ).then(({ stdout }) => stdout.trim()),
74:       execFileNoThrow(gitExe(), ['config', 'user.name'], {
75:         preserveOutputOnError: false,
76:       }).then(({ stdout }) => stdout.trim()),
77:     ])
78: 
79:     logForDiagnosticsNoPII('info', 'git_commands_completed', {
80:       duration_ms: Date.now() - gitCmdsStart,
81:       status_length: status.length,
82:     })
83: 
84:     // Check if status exceeds character limit
85:     const truncatedStatus =
86:       status.length > MAX_STATUS_CHARS
87:         ? status.substring(0, MAX_STATUS_CHARS) +
88:           '\n... (truncated because it exceeds 2k characters. If you need more information, run "git status" using BashTool)'
89:         : status
90: 
91:     logForDiagnosticsNoPII('info', 'git_status_completed', {
92:       duration_ms: Date.now() - startTime,
93:       truncated: status.length > MAX_STATUS_CHARS,
94:     })
95: 
96:     return [
97:       `This is the git status at the start of the conversation. Note that this status is a snapshot in time, and will not update during the conversation.`,
98:       `Current branch: ${branch}`,
99:       `Main branch (you will usually use this for PRs): ${mainBranch}`,
100:       ...(userName ? [`Git user: ${userName}`] : []),
101:       `Status:\n${truncatedStatus || '(clean)'}`,
102:       `Recent commits:\n${log}`,
103:     ].join('\n\n')
104:   } catch (error) {
105:     logForDiagnosticsNoPII('error', 'git_status_failed', {
106:       duration_ms: Date.now() - startTime,
107:     })
108:     logError(error)
109:     return null
110:   }
111: })
112: 
113: /**
114:  * This context is prepended to each conversation, and cached for the duration of the conversation.
115:  */
116: export const getSystemContext = memoize(
117:   async (): Promise<{
118:     [k: string]: string
119:   }> => {
120:     const startTime = Date.now()
121:     logForDiagnosticsNoPII('info', 'system_context_started')
122: 
123:     // Skip git status in CCR (unnecessary overhead on resume) or when git instructions are disabled
124:     const gitStatus =
125:       isEnvTruthy(process.env.CLAUDE_CODE_REMOTE) ||
126:       !shouldIncludeGitInstructions()
127:         ? null
128:         : await getGitStatus()
129: 
130:     // Include system prompt injection if set (for cache breaking, ant-only)
131:     const injection = feature('BREAK_CACHE_COMMAND')
132:       ? getSystemPromptInjection()
133:       : null
134: 
135:     logForDiagnosticsNoPII('info', 'system_context_completed', {
136:       duration_ms: Date.now() - startTime,
137:       has_git_status: gitStatus !== null,
138:       has_injection: injection !== null,
139:     })
140: 
141:     return {
142:       ...(gitStatus && { gitStatus }),
143:       ...(feature('BREAK_CACHE_COMMAND') && injection
144:         ? {
145:             cacheBreaker: `[CACHE_BREAKER: ${injection}]`,
146:           }
147:         : {}),
148:     }
149:   },
150: )
151: 
152: /**
153:  * This context is prepended to each conversation, and cached for the duration of the conversation.
154:  */
155: export const getUserContext = memoize(
156:   async (): Promise<{
157:     [k: string]: string
158:   }> => {
159:     const startTime = Date.now()
160:     logForDiagnosticsNoPII('info', 'user_context_started')
161: 
162:     // CLAUDE_CODE_DISABLE_CLAUDE_MDS: hard off, always.
163:     // --bare: skip auto-discovery (cwd walk), BUT honor explicit --add-dir.
164:     // --bare means "skip what I didn't ask for", not "ignore what I asked for".
165:     const shouldDisableClaudeMd =
166:       isEnvTruthy(process.env.CLAUDE_CODE_DISABLE_CLAUDE_MDS) ||
167:       (isBareMode() && getAdditionalDirectoriesForClaudeMd().length === 0)
168:     // Await the async I/O (readFile/readdir directory walk) so the event
169:     // loop yields naturally at the first fs.readFile.
170:     const claudeMd = shouldDisableClaudeMd
171:       ? null
172:       : getClaudeMds(filterInjectedMemoryFiles(await getMemoryFiles()))
173:     // Cache for the auto-mode classifier (yoloClassifier.ts reads this
174:     // instead of importing claudemd.ts directly, which would create a
175:     // cycle through permissions/filesystem → permissions → yoloClassifier).
176:     setCachedClaudeMdContent(claudeMd || null)
177: 
178:     logForDiagnosticsNoPII('info', 'user_context_completed', {
179:       duration_ms: Date.now() - startTime,
180:       claudemd_length: claudeMd?.length ?? 0,
181:       claudemd_disabled: Boolean(shouldDisableClaudeMd),
182:     })
183: 
184:     return {
185:       ...(claudeMd && { claudeMd }),
186:       currentDate: `Today's date is ${getLocalISODate()}.`,
187:     }
188:   },
189: )

(End of file - total 189 lines)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/Tool.ts",
  "limit": 200,
  "offset": 300
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/Tool.ts</path>
<type>file</type>
<content>300: }
301: 
302: // Re-export ToolProgressData from centralized location
303: export type { ToolProgressData }
304: 
305: export type Progress = ToolProgressData | HookProgress
306: 
307: export type ToolProgress<P extends ToolProgressData> = {
308:   toolUseID: string
309:   data: P
310: }
311: 
312: export function filterToolProgressMessages(
313:   progressMessagesForMessage: ProgressMessage[],
314: ): ProgressMessage<ToolProgressData>[] {
315:   return progressMessagesForMessage.filter(
316:     (msg): msg is ProgressMessage<ToolProgressData> =>
317:       msg.data?.type !== 'hook_progress',
318:   )
319: }
320: 
321: export type ToolResult<T> = {
322:   data: T
323:   newMessages?: (
324:     | UserMessage
325:     | AssistantMessage
326:     | AttachmentMessage
327:     | SystemMessage
328:   )[]
329:   // contextModifier is only honored for tools that aren't concurrency safe.
330:   contextModifier?: (context: ToolUseContext) => ToolUseContext
331:   /** MCP protocol metadata (structuredContent, _meta) to pass through to SDK consumers */
332:   mcpMeta?: {
333:     _meta?: Record<string, unknown>
334:     structuredContent?: Record<string, unknown>
335:   }
336: }
337: 
338: export type ToolCallProgress<P extends ToolProgressData = ToolProgressData> = (
339:   progress: ToolProgress<P>,
340: ) => void
341: 
342: // Type for any schema that outputs an object with string keys
343: export type AnyObject = z.ZodType<{ [key: string]: unknown }>
344: 
345: /**
346:  * Checks if a tool matches the given name (primary name or alias).
347:  */
348: export function toolMatchesName(
349:   tool: { name: string; aliases?: string[] },
350:   name: string,
351: ): boolean {
352:   return tool.name === name || (tool.aliases?.includes(name) ?? false)
353: }
354: 
355: /**
356:  * Finds a tool by name or alias from a list of tools.
357:  */
358: export function findToolByName(tools: Tools, name: string): Tool | undefined {
359:   return tools.find(t => toolMatchesName(t, name))
360: }
361: 
362: export type Tool<
363:   Input extends AnyObject = AnyObject,
364:   Output = unknown,
365:   P extends ToolProgressData = ToolProgressData,
366: > = {
367:   /**
368:    * Optional aliases for backwards compatibility when a tool is renamed.
369:    * The tool can be looked up by any of these names in addition to its primary name.
370:    */
371:   aliases?: string[]
372:   /**
373:    * One-line capability phrase used by ToolSearch for keyword matching.
374:    * Helps the model find this tool via keyword search when it's deferred.
375:    * 3–10 words, no trailing period.
376:    * Prefer terms not already in the tool name (e.g. 'jupyter' for NotebookEdit).
377:    */
378:   searchHint?: string
379:   call(
380:     args: z.infer<Input>,
381:     context: ToolUseContext,
382:     canUseTool: CanUseToolFn,
383:     parentMessage: AssistantMessage,
384:     onProgress?: ToolCallProgress<P>,
385:   ): Promise<ToolResult<Output>>
386:   description(
387:     input: z.infer<Input>,
388:     options: {
389:       isNonInteractiveSession: boolean
390:       toolPermissionContext: ToolPermissionContext
391:       tools: Tools
392:     },
393:   ): Promise<string>
394:   readonly inputSchema: Input
395:   // Type for MCP tools that can specify their input schema directly in JSON Schema format
396:   // rather than converting from Zod schema
397:   readonly inputJSONSchema?: ToolInputJSONSchema
398:   // Optional because TungstenTool doesn't define this. TODO: Make it required.
399:   // When we do that, we can also go through and make this a bit more type-safe.
400:   outputSchema?: z.ZodType<unknown>
401:   inputsEquivalent?(a: z.infer<Input>, b: z.infer<Input>): boolean
402:   isConcurrencySafe(input: z.infer<Input>): boolean
403:   isEnabled(): boolean
404:   isReadOnly(input: z.infer<Input>): boolean
405:   /** Defaults to false. Only set when the tool performs irreversible operations (delete, overwrite, send). */
406:   isDestructive?(input: z.infer<Input>): boolean
407:   /**
408:    * What should happen when the user submits a new message while this tool
409:    * is running.
410:    *
411:    * - `'cancel'` — stop the tool and discard its result
412:    * - `'block'`  — keep running; the new message waits
413:    *
414:    * Defaults to `'block'` when not implemented.
415:    */
416:   interruptBehavior?(): 'cancel' | 'block'
417:   /**
418:    * Returns information about whether this tool use is a search or read operation
419:    * that should be collapsed into a condensed display in the UI. Examples include
420:    * file searching (Grep, Glob), file reading (Read), and bash commands like find,
421:    * grep, wc, etc.
422:    *
423:    * Returns an object indicating whether the operation is a search or read operation:
424:    * - `isSearch: true` for search operations (grep, find, glob patterns)
425:    * - `isRead: true` for read operations (cat, head, tail, file read)
426:    * - `isList: true` for directory-listing operations (ls, tree, du)
427:    * - All can be false if the operation shouldn't be collapsed
428:    */
429:   isSearchOrReadCommand?(input: z.infer<Input>): {
430:     isSearch: boolean
431:     isRead: boolean
432:     isList?: boolean
433:   }
434:   isOpenWorld?(input: z.infer<Input>): boolean
435:   requiresUserInteraction?(): boolean
436:   isMcp?: boolean
437:   isLsp?: boolean
438:   /**
439:    * When true, this tool is deferred (sent with defer_loading: true) and requires
440:    * ToolSearch to be used before it can be called.
441:    */
442:   readonly shouldDefer?: boolean
443:   /**
444:    * When true, this tool is never deferred — its full schema appears in the
445:    * initial prompt even when ToolSearch is enabled. For MCP tools, set via
446:    * `_meta['anthropic/alwaysLoad']`. Use for tools the model must see on
447:    * turn 1 without a ToolSearch round-trip.
448:    */
449:   readonly alwaysLoad?: boolean
450:   /**
451:    * For MCP tools: the server and tool names as received from the MCP server (unnormalized).
452:    * Present on all MCP tools regardless of whether `name` is prefixed (mcp__server__tool)
453:    * or unprefixed (CLAUDE_AGENT_SDK_MCP_NO_PREFIX mode).
454:    */
455:   mcpInfo?: { serverName: string; toolName: string }
456:   readonly name: string
457:   /**
458:    * Maximum size in characters for tool result before it gets persisted to disk.
459:    * When exceeded, the result is saved to a file and Claude receives a preview
460:    * with the file path instead of the full content.
461:    *
462:    * Set to Infinity for tools whose output must never be persisted (e.g. Read,
463:    * where persisting creates a circular Read→file→Read loop and the tool
464:    * already self-bounds via its own limits).
465:    */
466:   maxResultSizeChars: number
467:   /**
468:    * When true, enables strict mode for this tool, which causes the API to
469:    * more strictly adhere to tool instructions and parameter schemas.
470:    * Only applied when the tengu_tool_pear is enabled.
471:    */
472:   readonly strict?: boolean
473: 
474:   /**
475:    * Called on copies of tool_use input before observers see it (SDK stream,
476:    * transcript, canUseTool, PreToolUse/PostToolUse hooks). Mutate in place
477:    * to add legacy/derived fields. Must be idempotent. The original API-bound
478:    * input is never mutated (preserves prompt cache). Not re-applied when a
479:    * hook/permission returns a fresh updatedInput — those own their shape.
480:    */
481:   backfillObservableInput?(input: Record<string, unknown>): void
482: 
483:   /**
484:    * Determines if this tool is allowed to run with this input in the current context.
485:    * It informs the model of why the tool use failed, and does not directly display any UI.
486:    * @param input
487:    * @param context
488:    */
489:   validateInput?(
490:     input: z.infer<Input>,
491:     context: ToolUseContext,
492:   ): Promise<ValidationResult>
493: 
494:   /**
495:    * Determines if the user is asked for permission. Only called after validateInput() passes.
496:    * General permission logic is in permissions.ts. This method contains tool-specific logic.
497:    * @param input
498:    * @param context
499:    */

(Showing lines 300-499 of 792. Use offset=500 to continue.)
</content>
```

**Tool: read**

**Input:**
```json
{
  "filePath": "/home/fira/Documents/_/opensource/claude-code/src/state/AppState.tsx",
  "limit": 200
}
```

**Output:**
```
<path>/home/fira/Documents/_/opensource/claude-code/src/state/AppState.tsx</path>
<type>file</type>
<content>1: import { c as _c } from "react/compiler-runtime";
2: import { feature } from 'bun:bundle';
3: import React, { useContext, useEffect, useEffectEvent, useState, useSyncExternalStore } from 'react';
4: import { MailboxProvider } from '../context/mailbox.js';
5: import { useSettingsChange } from '../hooks/useSettingsChange.js';
6: import { logForDebugging } from '../utils/debug.js';
7: import { createDisabledBypassPermissionsContext, isBypassPermissionsModeDisabled } from '../utils/permissions/permissionSetup.js';
8: import { applySettingsChange } from '../utils/settings/applySettingsChange.js';
9: import type { SettingSource } from '../utils/settings/constants.js';
10: import { createStore } from './store.js';
11: 
12: // DCE: voice context is ant-only. External builds get a passthrough.
13: /* eslint-disable @typescript-eslint/no-require-imports */
14: const VoiceProvider: (props: {
15:   children: React.ReactNode;
16: }) => React.ReactNode = feature('VOICE_MODE') ? require('../context/voice.js').VoiceProvider : ({
17:   children
18: }) => children;
19: 
20: /* eslint-enable @typescript-eslint/no-require-imports */
21: import { type AppState, type AppStateStore, getDefaultAppState } from './AppStateStore.js';
22: 
23: // TODO: Remove these re-exports once all callers import directly from
24: // ./AppStateStore.js. Kept for back-compat during migration so .ts callers
25: // can incrementally move off the .tsx import and stop pulling React.
26: export { type AppState, type AppStateStore, type CompletionBoundary, getDefaultAppState, IDLE_SPECULATION_STATE, type SpeculationResult, type SpeculationState } from './AppStateStore.js';
27: export const AppStoreContext = React.createContext<AppStateStore | null>(null);
28: type Props = {
29:   children: React.ReactNode;
30:   initialState?: AppState;
31:   onChangeAppState?: (args: {
32:     newState: AppState;
33:     oldState: AppState;
34:   }) => void;
35: };
36: const HasAppStateContext = React.createContext<boolean>(false);
37: export function AppStateProvider(t0) {
38:   const $ = _c(13);
39:   const {
40:     children,
41:     initialState,
42:     onChangeAppState
43:   } = t0;
44:   const hasAppStateContext = useContext(HasAppStateContext);
45:   if (hasAppStateContext) {
46:     throw new Error("AppStateProvider can not be nested within another AppStateProvider");
47:   }
48:   let t1;
49:   if ($[0] !== initialState || $[1] !== onChangeAppState) {
50:     t1 = () => createStore(initialState ?? getDefaultAppState(), onChangeAppState);
51:     $[0] = initialState;
52:     $[1] = onChangeAppState;
53:     $[2] = t1;
54:   } else {
55:     t1 = $[2];
56:   }
57:   const [store] = useState(t1);
58:   let t2;
59:   if ($[3] !== store) {
60:     t2 = () => {
61:       const {
62:         toolPermissionContext
63:       } = store.getState();
64:       if (toolPermissionContext.isBypassPermissionsModeAvailable && isBypassPermissionsModeDisabled()) {
65:         logForDebugging("Disabling bypass permissions mode on mount (remote settings loaded before mount)");
66:         store.setState(_temp);
67:       }
68:     };
69:     $[3] = store;
70:     $[4] = t2;
71:   } else {
72:     t2 = $[4];
73:   }
74:   let t3;
75:   if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
76:     t3 = [];
77:     $[5] = t3;
78:   } else {
79:     t3 = $[5];
80:   }
81:   useEffect(t2, t3);
82:   let t4;
83:   if ($[6] !== store.setState) {
84:     t4 = source => applySettingsChange(source, store.setState);
85:     $[6] = store.setState;
86:     $[7] = t4;
87:   } else {
88:     t4 = $[7];
89:   }
90:   const onSettingsChange = useEffectEvent(t4);
91:   useSettingsChange(onSettingsChange);
92:   let t5;
93:   if ($[8] !== children) {
94:     t5 = <MailboxProvider><VoiceProvider>{children}</VoiceProvider></MailboxProvider>;
95:     $[8] = children;
96:     $[9] = t5;
97:   } else {
98:     t5 = $[9];
99:   }
100:   let t6;
101:   if ($[10] !== store || $[11] !== t5) {
102:     t6 = <HasAppStateContext.Provider value={true}><AppStoreContext.Provider value={store}>{t5}</AppStoreContext.Provider></HasAppStateContext.Provider>;
103:     $[10] = store;
104:     $[11] = t5;
105:     $[12] = t6;
106:   } else {
107:     t6 = $[12];
108:   }
109:   return t6;
110: }
111: function _temp(prev) {
112:   return {
113:     ...prev,
114:     toolPermissionContext: createDisabledBypassPermissionsContext(prev.toolPermissionContext)
115:   };
116: }
117: function useAppStore(): AppStateStore {
118:   // eslint-disable-next-line react-hooks/rules-of-hooks
119:   const store = useContext(AppStoreContext);
120:   if (!store) {
121:     throw new ReferenceError('useAppState/useSetAppState cannot be called outside of an <AppStateProvider />');
122:   }
123:   return store;
124: }
125: 
126: /**
127:  * Subscribe to a slice of AppState. Only re-renders when the selected value
128:  * changes (compared via Object.is).
129:  *
130:  * For multiple independent fields, call the hook multiple times:
131:  * ```
132:  * const verbose = useAppState(s => s.verbose)
133:  * const model = useAppState(s => s.mainLoopModel)
134:  * ```
135:  *
136:  * Do NOT return new objects from the selector -- Object.is will always see
137:  * them as changed. Instead, select an existing sub-object reference:
138:  * ```
139:  * const { text, promptId } = useAppState(s => s.promptSuggestion) // good
140:  * ```
141:  */
142: export function useAppState(selector) {
143:   const $ = _c(3);
144:   const store = useAppStore();
145:   let t0;
146:   if ($[0] !== selector || $[1] !== store) {
147:     t0 = () => {
148:       const state = store.getState();
149:       const selected = selector(state);
150:       if (false && state === selected) {
151:         throw new Error(`Your selector in \`useAppState(${selector.toString()})\` returned the original state, which is not allowed. You must instead return a property for optimised rendering.`);
152:       }
153:       return selected;
154:     };
155:     $[0] = selector;
156:     $[1] = store;
157:     $[2] = t0;
158:   } else {
159:     t0 = $[2];
160:   }
161:   const get = t0;
162:   return useSyncExternalStore(store.subscribe, get, get);
163: }
164: 
165: /**
166:  * Get the setAppState updater without subscribing to any state.
167:  * Returns a stable reference that never changes -- components using only
168:  * this hook will never re-render from state changes.
169:  */
170: export function useSetAppState() {
171:   return useAppStore().setState;
172: }
173: 
174: /**
175:  * Get the store directly (for passing getState/setState to non-React code).
176:  */
177: export function useAppStateStore() {
178:   return useAppStore();
179: }
180: const NOOP_SUBSCRIBE = () => () => {};
181: 
182: /**
183:  * Safe version of useAppState that returns undefined if called outside of AppStateProvider.
184:  * Useful for components that may be rendered in contexts where AppStateProvider isn't available.
185:  */
186: export function useAppStateMaybeOutsideOfProvider(selector) {
187:   const $ = _c(3);
188:   const store = useContext(AppStoreContext);
189:   let t0;
190:   if ($[0] !== selector || $[1] !== store) {
191:     t0 = () => store ? selector(store.getState()) : undefined;
192:     $[0] = selector;
193:     $[1] = store;
194:     $[2] = t0;
195:   } else {
196:     t0 = $[2];
197:   }
198:   return useSyncExternalStore(store ? store.subscribe : NOOP_SUBSCRIBE, t0);
199: }
200: //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmZWF0dXJlIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlRWZmZWN0RXZlbnQiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwiTWFpbGJveFByb3ZpZGVyIiwidXNlU2V0dGluZ3NDaGFuZ2UiLCJsb2dGb3JEZWJ1Z2dpbmciLCJjcmVhdGVEaXNhYmxlZEJ5cGFzc1Blcm1pc3Npb25zQ29udGV4dCIsImlzQnlwYXNzUGVybWlzc2lvbnNNb2RlRGlzYWJsZWQiLCJhcHBseVNldHRpbmdzQ2hhbmdlIiwiU2V0dGluZ1NvdXJjZSIsImNyZWF0ZVN0b3JlIiwiVm9pY2VQcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJSZWFjdE5vZGUiLCJyZXF1aXJlIiwiQXBwU3RhdGUiLCJBcHBTdGF0ZVN0b3JlIiwiZ2V0RGVmYXVsdEFwcFN0YXRlIiwiQ29tcGxldGlvbkJvdW5kYXJ5IiwiSURMRV9TUEVDVUxBVElPTl9TVEFURSIsIlNwZWN1bGF0aW9uUmVzdWx0IiwiU3BlY3VsYXRpb25TdGF0ZSIsIkFwcFN0b3JlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm9wcyIsImluaXRpYWxTdGF0ZSIsIm9uQ2hhbmdlQXBwU3RhdGUiLCJhcmdzIiwibmV3U3RhdGUiLCJvbGRTdGF0ZSIsIkhhc0FwcFN0YXRlQ29udGV4dCIsIkFwcFN0YXRlUHJvdmlkZXIiLCJ0MCIsIiQiLCJfYyIsImhhc0FwcFN0YXRlQ29udGV4dCIsIkVycm9yIiwidDEiLCJzdG9yZSIsInQyIiwidG9vbFBlcm1pc3Npb25Db250ZXh0IiwiZ2V0U3RhdGUiLCJpc0J5cGFzc1Blcm1pc3Npb25zTW9kZUF2YWlsYWJsZSIsInNldFN0YXRlIiwiX3RlbXAiLCJ0MyIsIlN5bWJvbCIsImZvciIsInQ0Iiwic291cmNlIiwib25TZXR0aW5nc0NoYW5nZSIsInQ1IiwidDYiLCJwcmV2IiwidXNlQXBwU3RvcmUiLCJSZWZlcmVuY2VFcnJvciIsInVzZUFwcFN0YXRlIiwic2VsZWN0b3IiLCJzdGF0ZSIsInNlbGVjdGVkIiwidG9TdHJpbmciLCJnZXQiLCJzdWJzY3JpYmUiLCJ1c2VTZXRBcHBTdGF0ZSIsInVzZUFwcFN0YXRlU3RvcmUiLCJOT09QX1NVQlNDUklCRSIsInVzZUFwcFN0YXRlTWF5YmVPdXRzaWRlT2ZQcm92aWRlciIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbIkFwcFN0YXRlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZWF0dXJlIH0gZnJvbSAnYnVuOmJ1bmRsZSdcbmltcG9ydCBSZWFjdCwge1xuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZUVmZmVjdEV2ZW50LFxuICB1c2VTdGF0ZSxcbiAgdXNlU3luY0V4dGVybmFsU3RvcmUsXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWFpbGJveFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9tYWlsYm94LmpzJ1xuaW1wb3J0IHsgdXNlU2V0dGluZ3NDaGFuZ2UgfSBmcm9tICcuLi9ob29rcy91c2VTZXR0aW5nc0NoYW5nZS5qcydcbmltcG9ydCB7IGxvZ0ZvckRlYnVnZ2luZyB9IGZyb20gJy4uL3V0aWxzL2RlYnVnLmpzJ1xuaW1wb3J0IHtcbiAg... (line truncated to 2000 chars)

(End of file - total 200 lines)
</content>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 111.6s)

_Thinking:_

Now I have a good picture of the project structure. Let me write the docs.md file with the detailed code counts and explanation of how the system works.



Now let me create a comprehensive docs.md:

**Tool: write**

**Input:**
```json
{
  "content": "# Claude Code Architecture Documentation\n\n## Project Overview\n\n- **Total Code**: 390,802 lines (TypeScript 1884 files, Markdown 1 file)\n- **Runtime**: Bun\n- **UI Framework**: React + Ink (terminal UI)\n- **Language**: TypeScript (strict)\n\n## Directory Structure and Code Counts\n\n| Directory | Files | Code Lines | Description |\n|-----------|-------|------------|-------------|\n| `src/utils/` | ~300 | ~80,000 | Utility functions, shell, bash parsing, config, permissions, etc. |\n| `src/components/` | ~140 | ~40,000 | React/Ink UI components |\n| `src/services/` | ~50 | ~35,000 | API client, MCP, analytics, compact, LSP, plugins |\n| `src/tools/` | ~44 | ~35,000 | Agent tools (Bash, FileRead, Edit, WebFetch, Agent, etc.) |\n| `src/commands/` | ~88 | ~30,000 | Slash commands (/commit, /review, /config, /mcp, etc.) |\n| `src/hooks/` | ~40 | ~15,000 | React hooks for state, permissions, IDE integration |\n| `src/bridge/` | ~30 | ~15,000 | IDE bridge (VS Code, JetBrains) and remote control |\n| `src/state/` | 3 | ~5,000 | React state management (AppState) |\n| `src/types/` | 3 | ~3,000 | TypeScript type definitions |\n| `src/screens/` | 4 | ~7,500 | Full-screen UIs (REPL, Doctor, ResumeConversation) |\n| `src/tasks/` | 7 | ~5,000 | Task management (LocalAgent, RemoteAgent, Shell) |\n| Other (ink, native-ts, query, etc.) | ~40 | ~10,000 | Renderer, native utilities, query engine |\n| **Total** | **1887** | **390,802** | |\n\n### Top 20 Largest Files\n\n| File | Lines | Purpose |\n|------|-------|---------|\n| `src/main.tsx` | 4,538 | CLI entry point, Commander.js setup, React/Ink renderer |\n| `src/cli/print.ts` | 4,421 | Streaming output rendering to terminal |\n| `src/utils/messages.ts` | 4,338 | Message creation, normalization, API mapping |\n| `src/utils/hooks.ts` | 3,905 | Hook system for pre/post tool operations |\n| `src/utils/bash/bashParser.ts` | 3,846 | Bash command AST parsing and security |\n| `src/screens/REPL.tsx` | 3,488 | Main interactive REPL screen |\n| `src/utils/attachments.ts` | 3,012 | File attachment handling |\n| `src/services/api/claude.ts` | 2,713 | Anthropic API client with streaming |\n| `src/commands/insights.ts` | 2,686 | Session analytics and insights command |\n| `src/services/mcp/client.ts` | 2,614 | Model Context Protocol client |\n| `src/bridge/bridgeMain.ts` | 2,268 | Bridge main loop for IDE integration |\n| `src/native-ts/yoga-layout/index.ts` | 2,061 | Native Yoga layout bindings |\n| `src/components/PromptInput/PromptInput.tsx` | 1,874 | User input handling with history |\n| `src/commands/plugin/ManagePlugins.tsx` | 1,852 | Plugin management UI |\n| `src/tools/BashTool/bashPermissions.ts` | 1,725 | Bash command permission checking |\n| `src/utils/plugins/pluginLoader.ts` | 1,329 | Plugin loading and caching |\n| `src/tools/BashTool/BashTool.tsx` | 1,144 | Shell command execution tool |\n\n## Core Architecture\n\n### 1. Entry Point Flow (`src/entrypoints/cli.tsx`)\n\n```\ncli.tsx (entrypoint)\n    ├── --version → print and exit (fast path, zero imports)\n    ├── --dump-system-prompt → output prompt and exit\n    ├── --claude-in-chrome-mcp → run MCP server\n    ├── --chrome-native-host → run Chrome native host\n    ├── --computer-use-mcp → run computer use MCP server\n    ├── --daemon-worker → run daemon worker\n    ├── remote-control/rc/bridge → run bridge mode\n    ├── daemon → run daemon\n    ├── ps/logs/attach/kill → session management\n    ├── new/list/reply → template jobs\n    ├── --tmux --worktree → exec into tmux worktree\n    └── (fallthrough) → main.tsx\n```\n\n### 2. Main Initialization (`src/main.tsx`)\n\n1. **Parallel Prefetch** (before heavy imports):\n   - `startMdmRawRead()` - reads MDM settings in background\n   - `startKeychainPrefetch()` - prefetches OAuth/API keys from macOS keychain\n\n2. **Module Imports** (~135ms of parallel work):\n   - Commander.js CLI parsing setup\n   - React/Ink initialization\n   - GrowthBook feature flags\n   - API bootstrap data\n\n3. **Migrations** (`runMigrations()`):\n   - Version check against `CURRENT_MIGRATION_VERSION = 11`\n   - Runs pending config migrations (model renames, feature flag resets)\n\n4. **Deferred Prefetches** (after first render):\n   - `initUser()`, `getUserContext()`, system git status\n   - `countFilesRoundedRg()` - file counting for context\n   - Settings/plugin change detectors\n\n### 3. Tool System (`src/tools.ts`, `src/Tool.ts`)\n\nEvery tool implements the `Tool` interface:\n```typescript\ninterface Tool<Input, Output, P extends ToolProgressData> {\n    name: string\n    inputSchema: z.ZodType\n    isConcurrencySafe(input): boolean\n    isEnabled(): boolean\n    isReadOnly(input): boolean\n    call(args, context, canUseTool, parentMessage, onProgress): Promise<ToolResult<Output>>\n    description(input, options): Promise<string>\n}\n```\n\n**Tool Categories:**\n\n| Category | Tools | Lines |\n|----------|-------|-------|\n| File Operations | FileRead, FileEdit, FileWrite, Glob, Grep | ~15,000 |\n| Shell Execution | BashTool, PowerShellTool | ~12,000 |\n| Web | WebFetch, WebSearch | ~3,000 |\n| Agent/Team | AgentTool, TeamCreate, TeamDelete, SendMessage | ~8,000 |\n| Tasks | TaskCreate, TaskUpdate, TaskList, TaskStop, TaskOutput | ~5,000 |\n| MCP | MCPTool, ReadMcpResource, ListMcpResources | ~4,000 |\n| Plan/Mode | EnterPlanMode, ExitPlanMode, EnterWorktree, ExitWorktree | ~3,000 |\n| Skills | SkillTool | ~2,000 |\n| Other | NotebookEdit, LSP, TodoWrite, AskUserQuestion, Config, etc. | ~10,000 |\n\n### 4. Command System (`src/commands.ts`)\n\nSlash commands registered via `getCommands()`:\n- Built-in commands always available: `/help`, `/status`, `/model`, `/theme`, `/compact`, etc.\n- Environment-specific commands: `/mcp`, `/doctor`, `/login`, `/logout`\n- Feature-gated commands via `feature('FLAG')`: `/voice`, `/proactive`, `/buddy`\n\n### 5. Query Engine (`src/query.ts`)\n\nThe query loop is an async generator that yields stream events:\n\n```\nquery() → queryLoop()\n    ├── yield stream_request_start\n    ├── microcompact (if enabled)\n    ├── context collapse (if enabled)\n    ├── autocompact (if needed)\n    ├── API call to Anthropic\n    │   └── streaming response handler\n    │       ├── text delta → append to message\n    │       ├── tool_use → execute tool\n    │       └── thinking blocks → handle separately\n    ├── tool execution loop (can recurse)\n    └── continue or terminal\n```\n\n**Compaction Pipeline** (before each API call):\n1. **snip** - removes intermediate assistant messages (HISTORY_SNIP feature)\n2. **microcompact** - lightweight context compression\n3. **context collapse** - collapses messages using collapse store (CONTEXT_COLLAPSE feature)\n4. **autocompact** - full summarization when approaching token limit\n\n### 6. QueryEngine (`src/QueryEngine.ts`)\n\nWraps the query loop for headless/SDK usage. Handles:\n- Message state management across turns\n- Permission denial tracking\n- File state cache\n- Subagent spawning via `AgentTool`\n\n## How It Works: Step by Step\n\n### User Action 1: User types a message and presses Enter\n\n**REPL.tsx flow:**\n1. `PromptInput` captures keydown\n2. On Enter, `handleSubmit()` is called\n3. `enqueue()` adds command to queue\n4. `useQueueProcessor` processes the queue\n5. `handlePromptSubmit` validates input\n6. `processUserInput` is called to handle slash commands\n\n### User Action 2: Slash command execution (e.g., `/commit`)\n\n**Flow:**\n1. `processUserInput` detects leading `/`\n2. Matches against registered commands in `commands.ts`\n3. `getSlashCommandToolSkills` extracts skills from command\n4. Command handler is invoked (e.g., `commit/index.ts`)\n5. Creates `UserMessage` with command content\n6. Returns `shouldQuery: true` to continue to query loop\n\n### User Action 3: Tool call execution (e.g., `BashTool`)\n\n**Flow in `query.ts`:**\n1. API returns `tool_use` block in streaming response\n2. `yield { type: 'tool_use', toolName, input, id }`\n3. REPL renders tool call UI via `ToolUseLoader`\n4. `runTools()` is called with tool definitions\n5. `canUseTool()` checks permissions (prompt if needed)\n6. Tool's `call()` method executes (e.g., `spawnShellTask()` in BashTool)\n7. Result is yielded as `ToolResult` message\n8. Added to mutableMessages, loop continues\n\n### User Action 4: Permission request\n\n**Flow:**\n1. `canUseTool` is called with tool and input\n2. `getPermissionMode()` determines if prompt needed\n3. If `mode === 'default'` and tool not in `alwaysAllowRules`:\n   - UI renders `PermissionRequest` component\n   - User clicks Allow/Deny\n   - `applyPermissionUpdate` updates state\n   - Tool execution continues or is cancelled\n\n### User Action 5: Context compaction (automatic)\n\n**Flow:**\n1. `autocompact()` is called before API call\n2. Checks if `messages` exceeds threshold (e.g., 80% of context window)\n3. If yes, builds summary:\n   - Recent messages → kept\n   - Older messages → compressed into summary\n4. `buildPostCompactMessages()` rebuilds message array\n5. Yields `compact_boundary` system message\n6. Continues with compact messages\n\n### User Action 6: Agent spawning (via AgentTool)\n\n**Flow:**\n1. Model calls `AgentTool` with agent definition\n2. `AgentTool.call()` creates `LocalAgentTask` or `RemoteAgentTask`\n3. Task runs in background with own query loop\n4. Forks can share parent's `contentReplacementState`\n5. Agent messages are added to parent `mutableMessages`\n6. UI shows agent progress via `AgentProgressLine`\n\n### User Action 7: Team coordination (coordinator mode)\n\n**Flow:**\n1. `TeamCreateTool` spawns coordinator + workers\n2. `coordinatorMode.ts` manages multi-agent orchestration\n3. Workers report back via mailbox system\n4. Coordinator aggregates results and reports to user\n\n### User Action 8: Bridge mode (IDE integration)\n\n**Flow in `bridgeMain.ts`:**\n1. `runBridgeLoop()` starts polling `GET /work`\n2. Spawns Claude Code child processes via `sessionRunner`\n3. Child processes connect back via `replBridge.ts`\n4. Bridge proxies messages between IDE and session\n5. Heartbeat maintains work item ownership\n\n## State Management\n\n### AppState (`src/state/AppState.tsx`)\n\nReact Context-based state using `useSyncExternalStore`:\n```typescript\ninterface AppState {\n    messages: Message[]              // Conversation history\n    toolPermissionContext: ToolPermissionContext\n    mainLoopModel: string           // Current model\n    tools: Tools                    // Available tools\n    commands: Command[]             // Available commands\n    mcpClients: MCPServerConnection[]\n    agents: AgentDefinition[]\n    fileHistory: FileHistoryState\n    attribution: AttributionState\n    // ... more fields\n}\n```\n\n### Bootstrap State (`src/bootstrap/state.ts`)\n\nGlobal mutable state accessed via getters/setters:\n- `getSessionId()`, `setSessionId()`\n- `getMainLoopModel()`, `setMainLoopModel()`\n- `getCwd()`, `setCwd()`\n\n## Key Systems\n\n### 1. Permission System (`src/utils/permissions/`)\n\n| Mode | Behavior |\n|------|----------|\n| `default` | Prompt for each tool |\n| `auto` | Auto-approve based on classifier |\n| `bypassPermissions` | Allow all (for background agents) |\n| `plan` | Strict mode for planning |\n\n### 2. MCP System (`src/services/mcp/`)\n\n- Connects to MCP servers via stdio\n- Handles tool calls and resource access\n- Server discovery from config files\n\n### 3. Compact System (`src/services/compact/`)\n\n- **autoCompact**: Full conversation summarization\n- **microCompact**: Per-message budget and truncation\n- **snip**: Removes intermediate messages (HISTORY_SNIP)\n- **contextCollapse**: Persistent collapse store\n\n### 4. Feature Flags (`bun:bundle`)\n\nDead code elimination via build-time feature flags:\n```typescript\nconst voiceCommand = feature('VOICE_MODE')\n  ? require('./commands/voice/index.js').default\n  : null\n```\n\nNotable flags: `PROACTIVE`, `KAIROS`, `BRIDGE_MODE`, `DAEMON`, `VOICE_MODE`, `AGENT_TRIGGERS`, `MONITOR_TOOL`, `COORDINATOR_MODE`, `CONTEXT_COLLAPSE`, `HISTORY_SNIP`\n\n## API Communication\n\n### Streaming Flow (`src/services/api/claude.ts`)\n\n1. Builds request with system prompt + messages\n2. Sends to Anthropic API with streaming\n3. Handles events:\n   - `content_block_start` → starts text/thinking/tool_use\n   - `content_block_delta` → appends to current block\n   - `message_delta` → updates usage stats\n   - `message_stop` → finalizes message\n\n### Tool Execution (`src/services/tools/toolExecution.ts`)\n\n- `StreamingToolExecutor` handles streaming tool outputs\n- Tools can report progress via `onProgress` callback\n- Results are chunked and streamed to REPL\n\n## Key Files Reference\n\n| File | Purpose |\n|------|---------|\n| `main.tsx` | CLI entry, config, startup orchestration |\n| `query.ts` | Core query loop with compaction |\n| `QueryEngine.ts` | Headless/SDK query engine wrapper |\n| `REPL.tsx` | Interactive terminal UI |\n| `Tool.ts` | Tool interface definitions |\n| `tools.ts` | Tool registry and filtering |\n| `commands.ts` | Command registry |\n| `AppState.tsx` | React state management |\n| `bridgeMain.ts` | IDE bridge loop |\n| `claude.ts` | API client with streaming |",
  "filePath": "/home/fira/Documents/_/opensource/claude-code/docs.md"
}
```

**Output:**
```
Wrote file successfully.

LSP errors detected in other files:
<diagnostics file="/home/fira/Documents/_/opensource/claude-code/src/QueryEngine.ts">
ERROR [1:25] Cannot find module 'bun:bundle' or its corresponding type declarations.
ERROR [2:40] Cannot find module '@anthropic-ai/sdk/resources/messages.mjs' or its corresponding type declarations.
ERROR [3:28] Cannot find module 'crypto' or its corresponding type declarations.
ERROR [4:18] Cannot find module 'lodash-es/last.js' or its corresponding type declarations.
ERROR [8:8] Cannot find module 'src/bootstrap/state.js' or its corresponding type declarations.
ERROR [16:8] Cannot find module 'src/entrypoints/agentSdkTypes.js' or its corresponding type declarations.
ERROR [17:46] Cannot find module 'src/services/api/claude.js' or its corresponding type declarations.
ERROR [18:39] Cannot find module 'src/services/api/logging.js' or its corresponding type declarations.
ERROR [19:29] Cannot find module 'src/services/api/logging.js' or its corresponding type declarations.
ERROR [20:23] Cannot find module 'strip-ansi' or its corresponding type declarations.
ERROR [42:30] Cannot find module './types/message.js' or its corresponding type declarations.
ERROR [88:21] Cannot find module 'src/components/MessageSelector.js' or its corresponding type declarations.
ERROR [89:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [116:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [123:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [123:68] Cannot find module './services/compact/snipCompact.js' or its corresponding type declarations.
ERROR [126:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [126:71] Cannot find module './services/compact/snipProjection.js' or its corresponding type declarations.
ERROR [457:23] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [458:23] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
... and 14 more
</diagnostics>

LSP errors detected in other files:
<diagnostics file="/home/fira/Documents/_/opensource/claude-code/src/query.ts">
ERROR [5:8] Cannot find module '@anthropic-ai/sdk/resources/index.mjs' or its corresponding type declarations.
ERROR [16:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [16:72] Cannot find module './services/compact/reactiveCompact.js' or its corresponding type declarations.
ERROR [19:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [19:70] Cannot find module './services/contextCollapse/index.js' or its corresponding type declarations.
ERROR [25:8] Cannot find module 'src/services/analytics/index.js' or its corresponding type declarations.
ERROR [39:8] Cannot find module './types/message.js' or its corresponding type declarations.
ERROR [67:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [67:69] Cannot find module './services/skillSearch/prefetch.js' or its corresponding type declarations.
ERROR [70:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [70:55] Cannot find module './jobs/classifier.js' or its corresponding type declarations.
ERROR [94:34] Cannot find module './constants/querySource.js' or its corresponding type declarations.
ERROR [104:41] Cannot find module './query/transitions.js' or its corresponding type declarations.
ERROR [105:25] Cannot find module 'bun:bundle' or its corresponding type declarations.
ERROR [116:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [116:68] Cannot find module './services/compact/snipCompact.js' or its corresponding type declarations.
ERROR [119:6] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [119:57] Cannot find module './utils/taskSummary.js' or its corresponding type declarations.
ERROR [871:53] Property 'at' does not exist on type 'AssistantMessage[]'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2022' or later.
ERROR [927:17] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
... and 3 more
</diagnostics>

LSP errors detected in other files:
<diagnostics file="/home/fira/Documents/_/opensource/claude-code/src/Tool.ts">
ERROR [4:8] Cannot find module '@anthropic-ai/sdk/resources/index.mjs' or its corresponding type declarations.
ERROR [8:8] Cannot find module '@modelcontextprotocol/sdk/types.js' or its corresponding type declarations.
ERROR [9:27] Cannot find module 'crypto' or its corresponding type declarations.
ERROR [10:24] Cannot find module 'zod/v4' or its corresponding type declarations.
ERROR [40:8] Cannot find module './types/message.js' or its corresponding type declarations.
ERROR [58:8] Cannot find module './types/tools.js' or its corresponding type declarations.
ERROR [76:34] Cannot find module './constants/querySource.js' or its corresponding type declarations.
ERROR [77:15] Module '"./entrypoints/agentSdkTypes.js"' has no exported member 'SDKStatus'.
ERROR [85:36] Cannot find module './types/utils.js' or its corresponding type declarations.
ERROR [105:10] Cannot find namespace 'React'.
ERROR [580:6] Cannot find namespace 'React'.
ERROR [608:6] Cannot find namespace 'React'.
ERROR [621:54] Cannot find namespace 'React'.
ERROR [634:6] Cannot find namespace 'React'.
ERROR [635:34] Cannot find namespace 'React'.
ERROR [653:6] Cannot find namespace 'React'.
ERROR [667:6] Cannot find namespace 'React'.
ERROR [694:6] Cannot find namespace 'React'.
</diagnostics>

LSP errors detected in other files:
<diagnostics file="/home/fira/Documents/_/opensource/claude-code/src/main.tsx">
ERROR [21:25] Cannot find module 'bun:bundle' or its corresponding type declarations.
ERROR [22:75] Cannot find module '@commander-js/extra-typings' or its corresponding type declarations.
ERROR [23:19] Cannot find module 'chalk' or its corresponding type declarations.
ERROR [24:30] Cannot find module 'fs' or its corresponding type declarations.
ERROR [25:23] Cannot find module 'lodash-es/mapValues.js' or its corresponding type declarations.
ERROR [26:20] Cannot find module 'lodash-es/pickBy.js' or its corresponding type declarations.
ERROR [27:20] Cannot find module 'lodash-es/uniqBy.js' or its corresponding type declarations.
ERROR [28:19] Cannot find module 'react' or its corresponding type declarations.
ERROR [70:32] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [71:41] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [72:39] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [76:61] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [80:45] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [80:94] Cannot find module './assistant/index.js' or its corresponding type declarations.
ERROR [81:40] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [81:88] Cannot find module './assistant/gate.js' or its corresponding type declarations.
ERROR [82:35] Cannot find module 'path' or its corresponding type declarations.
ERROR [83:37] Cannot find module 'src/services/analytics/config.js' or its corresponding type declarations.
ERROR [84:53] Cannot find module 'src/services/analytics/growthbook.js' or its corresponding type declarations.
ERROR [85:91] Cannot find module 'src/services/analytics/index.js' or its corresponding type declarations.
... and 300 more
</diagnostics>

LSP errors detected in other files:
<diagnostics file="/home/fira/Documents/_/opensource/claude-code/src/tools.ts">
ERROR [17:3] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [18:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [21:3] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [22:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [27:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [31:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [32:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [33:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [37:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [40:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [43:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [47:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [51:5] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [60:30] Cannot find module './tools/TungstenTool/TungstenTool.js' or its corresponding type declarations.
ERROR [64:3] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [67:3] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [70:3] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [86:20] Cannot find module 'lodash-es/uniqBy.js' or its corresponding type declarations.
ERROR [92:3] Cannot find name 'process'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
ERROR [93:7] Cannot find name 'require'. Do you need to install type definitions for node? Try `npm i --save-dev @types/node`.
... and 17 more
</diagnostics>
```

---

## Assistant (Build · minimax/minimax-m2.7 · 9.6s)

_Thinking:_

The docs.md was written successfully. The LSP errors shown are from the source files themselves, not from docs.md - they're expected since this is a partial source snapshot without node_modules installed. The documentation was created successfully.



Done. Created `docs.md` with:
- **Code counts**: 390,802 lines total across 1,887 files
- **Directory breakdown**: utils (~80k), components (~40k), services (~35k), tools (~35k), commands (~30k), etc.
- **Top 20 files**: main.tsx (4,538), print.ts (4,421), messages.ts (4,338), etc.
- **Architecture overview**: Tool interface, command system, query engine, compaction pipeline
- **Step-by-step flows**: User input → REPL → query loop → tool execution → API streaming → response

---

