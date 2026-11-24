# how does pi agent extension archi work

 \[Highlight start\] **Pi’s extension architecture works by loading in-process TypeScript modules directly into the agent runtime via `jiti`, exposing a central `ExtensionAPI` object that hooks into the agent loop, tools, sessions, and terminal UI** \[Highlight end\] **.** Instead of baking features like plan mode, permission gates, or sub-agents into the core, Pi keeps its harness minimal and treats extensions as code-level plugins that shape runtime behavior without a compilation step. [](https://docs.pi.dev/latest/extensions)

### Core Architectural Layers

Pi separates concerns across distinct packages so extensions can modify behavior at clean boundaries: [](https://edward40.com/p/pi-agent-internal/)

* **Provider Layer (`pi-ai`).** Normalizes model streaming and APIs across LLM providers, allowing extensions to dynamically register new custom providers or models at startup. [](https://agentic-ai.readthedocs.io/en/latest/AgentHarness/pi-dev/)
* **Agent Core (`pi-agent-core`).** Runs the stateful, event-driven agent loop, emitting fine-grained lifecycle events that extensions can observe, intercept, or alter. [](https://agentic-ai.readthedocs.io/en/latest/AgentHarness/pi-dev/)
* **Coding Agent Harness (`pi-coding-agent`).** Provides the four base tools (`read`, `write`, `edit`, `bash`), session tree storage, and the extension loader and runner. [](https://github.com/can1357/oh-my-pi/blob/main/docs/hooks.md)
* **Terminal UI (`pi-tui`).** Handles differential terminal rendering independently from the core loop, letting extensions draw status bars, widgets, overlays, and custom editors. [](https://pi.dev/)

### Discovery, Loading, and Execution

* **Auto-Discovery and Hot Reload.** Pi automatically discovers `.ts` modules placed in `~/.pi/agent/extensions/` (global) or `.pi/extensions/` (project-local), or via `package.json` manifests in installed [Pi Packages](https://pi.dev/packages). You can also test a standalone file with `pi -e ./path.ts` or hot-reload changes mid-session using `/reload`.
* **Zero-Build Runtime Loading.** Using `jiti`, Pi imports TypeScript files directly without requiring a separate `tsc` build step.
* **Factory Initialization.** Each extension exports a default synchronous or asynchronous factory function (`export default function (pi: ExtensionAPI)`). If the factory returns a `Promise`, Pi awaits it before finishing startup so async setup (like fetching model lists) completes first.
* **In-Process Trust Model.** Extensions execute inside the main Pi process with full operating-system permissions, giving them direct access to files, credentials, prompts, and session state. [](https://docs.pi.dev/latest/extensions)

### Capabilities via `ExtensionAPI`

When initialized, the `pi` object passed into the factory function exposes methods to extend every part of the harness: [](https://docs.pi.dev/latest/extensions)

* **Lifecycle Event Hooks (`pi.on`).** Extensions subscribe to granular runtime events across the session and turn lifecycle. Key hooks include `session_start`, `before_agent_start`, `tool_call` (which can inspect arguments and return `{ block: true, reason }` to gate dangerous commands), `user_bash`, `agent_end`, and `agent_settled`.
* **Custom & Overridden Tools (`pi.registerTool`).** Extensions define new LLM-callable tools using TypeBox parameter schemas and an `execute` handler. Registering a tool with the same name as a built-in tool (such as `bash` or `edit`) replaces the default implementation.
* **Context & Compaction Control.** Extensions can inject custom messages (`pi.sendMessage`), modify system prompts, and customize how long conversation trees are compacted when approaching context limits.
* **CLI & Interactive Commands.** Extensions register custom `/slash` commands (`pi.registerCommand`), keyboard shortcuts (`pi.registerShortcut`), and CLI flags (`pi.registerFlag`).
* **UI Primitives (`ctx.ui`).** Inside event and command handlers, the context object provides UI methods to prompt users (`confirm`, `select`, `input`), trigger notifications (`notify`), update footer status lines (`setStatus`), and render custom TUI widgets (`setWidget`). [](https://docs.pi.dev/latest/extensions)

If you are looking to build or debug an extension, let me know:

* **What behavior** you want to add (e.g., a custom tool, a `tool_call` permission guard, or a TUI widget)
* Whether you are **packaging it for npm/git** or running it locally in `.pi/extensions/`

I can write a working TypeScript skeleton tailored to that use case.

* [](https://edward40.com/p/pi-agent-internal/)  
edward40.com  
Inside Pi Agent - Shilin's Blog  
Jul 21, 2026 — Pi's architecture works because each responsibility has a visible boundary: the provider layer normalizes model streams;; coordina...
* [](https://github.com/sysid/pi-extensions/blob/main/HowTo.md)  
GitHub  
pi-extensions/HowTo.md at main - GitHub  
Extension Discovery Each package has a package.json with a pi section that tells pi where to find the extension entry point: { "pi...
* [](https://agentarchitectures.com/framework/pi-dev)  
agentarchitectures.com  
pi (pi.dev) - AI Agent Architectures  
pi is an opinionated, minimalist coding agent framework built by Mario Zechner (badlogic) as a personal alternative to Claude Code...

Show all

# how does deepseek harness extension archi work

**DeepSeek Harness (DSH)** uses an **"everything is a plugin" architecture** built on the **Cordis** runtime substrate. Instead of relying on a monolithic core,  \[Highlight start\] DSH treats every component—including the agent loop, model adapters, tool registry, and session logs—as an interchangeable plugin \[Highlight end\] . [](https://www.deepseek.com/en/harness/)

### Core Runtime & Capability Seams

* **No Monolithic Core.** DSH eliminates hardcoded central glue by running on the Cordis microkernel. Plugins communicate through typed events and scoped contexts rather than direct internal modifications. [](https://renatomignone.github.io/inside-deepseek-harness/)
* **Capability Seams (`ctx.*`).** Extensions interact with stable context contracts such as `ctx.tools`, `ctx.fs`, and `ctx.llm`. Consumer plugins depend only on these abstract contracts, while provider plugins implement the underlying functionality. [](https://renatomignone.github.io/inside-deepseek-harness/)
* **Reversible Effects & Hot Reloading.** Registrations and side effects automatically unwind when a plugin unloads. This guarantees safe hot-reloading, live A/B testing, and component removal without leaving residual state or broken dependencies. [](https://x.com/zhengyaojiang/status/2088362370213216260)

### Layered Boot & Configuration Tree

When DSH starts, it assembles an ordered tree of plugins using layered configuration overrides: [](https://www.mindstudio.ai/blog/deepseek-harness-plugin-architecture)

1. **Base Bundles.** Packaged sets of plugins and default settings form the base runtime.
2. **Profiles (`cordis.yml` / `cordis.patch`).** Profile layers add product surfaces—such as `web-app` or `headless`—by patching the base configuration.
3. **User & CLI Patches.** Local home-level patch files and command-line flags override specific plugin rows by ID or insert new plugins. Running `dsh --dump-config` prints the complete active tree so every row can be inspected or replaced. [](https://www.mindstudio.ai/blog/deepseek-harness-plugin-architecture)

### Preset Modes & Self-Extensibility

Because features are decoupled into plugin bundles, DSH ships with four preset modes on the same underlying skeleton: [](https://rakiabensassi.substack.com/p/deepseek-harness-explained)

* **Standard Mode.** Loads a full coding agent suite with file editing, shell access, web search, planning, and sub-agent dispatch.
* **PTC (Programmatic Tool Call) Mode.** Replaces sequential tool execution with a plugin that lets the model write and run TypeScript scripts to parallelize multiple tool calls in one turn.
* **Minimal Mode.** Strips the runtime down to just shell and file-editing plugins for clean benchmark evaluation.
* **Creator Mode.** Exposes runtime inspection and plugin-management tools directly to the agent. Users can describe a new capability in chat, and the agent writes, installs, and verifies the plugin live during the session. [](https://www.youtube.com/watch?v=Hpw4fAHlHDw&t=281)

For deeper technical details on package layering and custom plugin schemas, refer to the DeepSeek Harness Architecture Overview or the [Inside DeepSeek Harness technical breakdown](https://renatomignone.github.io/inside-deepseek-harness/).

Would you like to see a concrete code example of how to write and register a **custom plugin** using `ctx.*` seams, or how to configure **YAML patch overrides**?

* [](https://www.deepseek.com/en/harness/)  
DeepSeek  
DeepSeek Harness | Explore the limits of intelligence  
Open-source agent harness built on Cordis's "everything is a plugin" architecture, available worldwide in public preview as a desk...
* [](https://renatomignone.github.io/inside-deepseek-harness/)  
GitHub  
Inside DeepSeek Harness  
A profile selects bundle layers; base supplies the shared runtime, while web-app and headless add different product surfaces.
* [](https://www.mindstudio.ai/blog/deepseek-harness-plugin-architecture)  
MindStudio  
DeepSeek Harness Explained: The Plugin Architecture ...  
November 4, 2026 — Creator mode is the clearest expression of the plugin philosophy: you can describe a new plugin in chat, and the agent will write ...

Show all

# why does pi agent choose tui primarily and deepseek harness web ui, what do ppl say

**Pi Agent** chooses a terminal user interface (TUI)  \[Highlight start\] to prioritize lightweight, low-overhead coding workflows inside a developer's local workspace \[Highlight end\] . Conversely, **DeepSeek Harness (DSH)** defaults to a Web UI to support heavy observability, session replay, and multi-agent infrastructure. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)

### Why Pi Agent Chooses a TUI

Pi is designed as a minimal, terminal-first harness built for individual developers who want the tool to stay out of their way. [](https://agentspulse.github.io/tutorials/deepseek-harness-vs-pi-agent/)

* **Minimalist footprint.** Pi keeps its core tiny with just four built-in tools (`read`, `write`, `edit`, `bash`) and uses under 1,000 tokens for its default system prompt. [](https://thinhcorner.com/writing/pi-agent)
* **Local workspace ergonomics.** Running natively in the terminal keeps the agent directly alongside the developer's local files, shell environment, and build caches. Its custom `pi-tui` package provides smooth differential terminal rendering. [](https://www.linkedin.com/posts/kefalu%5Fthe-ai-agent-landscape-is-splitting-into-activity-7494400007958245376-3P%5FY)
* **Modular decoupling.** Pi separates its core into distinct primitives (`pi-agent-core`, `pi-ai`, and `pi-tui`) so the interface remains lightweight and optional. Community packages like [pi-webui](https://pi.dev/packages/@hyperdreamer/pi-webui) still allow users to add a browser view if desired. [](https://pi.dev/packages/@hyperdreamer/pi-webui)

### Why DeepSeek Harness Chooses a Web UI

DeepSeek Harness is built on an Inversion-of-Control microkernel architecture (Cordis) geared toward scalable agent infrastructure and deep inspection. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)

* **Rich trace inspection and replay.** DSH records every model-visible event in an append-only session log. A browser interface makes it much easier to visually inspect complex trajectories, debug multi-agent graphs, and fork or replay past sessions. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)
* **Infrastructure and remote management.** Rather than targeting a single local coding session, DSH is built to manage background subagents, schedules, and headless workflows across large numbers of runs. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)
* **Plugin-driven interfaces.** In DSH, "everything is a plugin," meaning the UI is treated as a swappable surface attached to the core runtime. [](https://agentspulse.github.io/tutorials/deepseek-harness-vs-pi-agent/)

### What the Community Says

Developers generally view the two designs as targeting different stages of work rather than directly competing. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)

* **Daily coding vs. infrastructure.** Reviewers on [Composio](https://composio.dev/content/deepseek-harness-vd-pi-agent) note that Pi is preferred for fast, everyday personal coding, whereas DSH shines when building infrastructure that runs and audits thousands of agent sessions.
* **Missing TUI in DSH.** Because DSH launched without an official terminal interface, third-party developers quickly built community TUI plugins to add streaming reasoning and rollback support directly in the terminal.
* **Architectural convergence.** A point of consensus among users on [Reddit](https://www.reddit.com/r/PiCodingAgent/comments/1vnzn48/deepseek%5Fharness%5Fvs%5Fpi%5Fagent%5Fare%5Fthey%5Fconverging/) is that both harnesses share a small-core, extensible philosophy, though DSH enforces plugins more strictly while Pi sometimes requires direct code edits for deep behavioral changes.
* **Ecosystem overlap.** The two projects actively cross-pollinate, as DSH uses Pi's `pi-ai` layer for third-party model support and community adapters like [pi2dsh](https://github.com/deepseek-ai/deepseek-harness/discussions/2261) allow Pi plugins to run inside DeepSeek Harness. [](https://www.reddit.com/r/PiCodingAgent/comments/1vnzn48/deepseek%5Fharness%5Fvs%5Fpi%5Fagent%5Fare%5Fthey%5Fconverging/)

Are you trying to pick a harness for **personal daily coding** or **building automated agent infrastructure**? Let me know your use case and I can compare their **setup steps** and **plugin ecosystems** for you.

* [](https://composio.dev/content/deepseek-harness-vd-pi-agent)  
Composio  
DeepSeek Harness (DSH) vs Pi Agent: Everything You Need ...  
Sep 8, 2026 — For normal coding, I would pick Pi today. It is smaller, easier to understand, and works with basically anything. For agent infras...
* [](https://www.linkedin.com/posts/kefalu%5Fthe-ai-agent-landscape-is-splitting-into-activity-7494400007958245376-3P%5FY)  
LinkedIn·Kevin Lu  
Pi Agent vs DeepSeek Harness: Two AI Agent Architectures ...  
August 15, 2026 — DeepSeek Harness (dsh) Everything is a plugin: Planners, memory, tools, the CLI, and the Web UI are all managed by a central Inver...
* [](https://agentspulse.github.io/tutorials/deepseek-harness-vs-pi-agent/)  
GitHub  
DeepSeek Harness vs Pi Agent | AgentsPulse  
August 15, 2026 — DeepSeek Harness (DSH): MIT, developer preview, Cordis plugin runtime; DSH shifts tracing into composition graph, Pi shifts isolat...

Show all

# what do ppl say on lody ai agent

**Lody** is an open-source, shared team workspace designed for running and collaborating on existing AI coding agents across desktop and mobile devices. Because it is a relatively new project released in 2026, broad public review volume is still growing, with most discussion coming from developer communities, AI tool directories, and open-source contributors. [](https://github.com/lodyai/lody)

### What Lody Actually Is

Developers and tech directories like [AI/TLDR](https://ai-tldr.dev/tools/lody/) frequently clarify a common misconception: **Lody is not a standalone AI model or new coding agent**. Instead, it acts as a multiplayer control plane and orchestration wrapper. [](https://ai-tldr.dev/tools/lody/)

* **Bring Your Own Agent.** You connect your existing machines (laptops, servers, cloud VMs) via a local daemon and run agents that support the Agent Client Protocol (ACP), such as Claude Code, Codex, Kimi, or OpenCode.
* **Existing Subscriptions.** It uses the API keys, logins, and permission modes you already have configured on your own hardware. [](https://github.com/lodyai/lody)

### Key Highlights and Community Reception

Early adopters, open-source contributors on [GitHub](https://github.com/lodyai/lody), and the project's official updates on [X (@lody\_ai)](https://x.com/lody%5Fai) highlight several standout features that drive interest:

* **Mobile-First "Vibe Coding".** Users appreciate being able to monitor agent progress, view real-time file diffs, and approve code changes directly from native iOS and Android apps. In November 2026, Lody officially adopted a community-built iOS client (`lody-ios`) via TestFlight after developers praised its native UI and Cloud Runtime API architecture. [](https://x.com/lody%5Fai)
* **Multiplayer Agent Sessions.** Teams use Lody to share live agent conversations, transcripts, and code changes in one place without having to copy-paste terminal logs or screenshots back and forth. [](https://github.com/lodyai/lody)
* **Parallel Worktree Isolation.** Developers highlight Lody's automatic Git worktree management, which lets multiple agents tackle different bug fixes or features simultaneously on the same repo without file collisions. [](https://lody.ai/blog/introducing-lody/)
* **Agent-to-Agent Coordination.** Power users utilize its CLI and cross-session tools to have a "coordinator" agent delegate sub-tasks (like testing or investigation) to separate parallel agent conversations. [](https://github.com/lodyai/lody)
* **Privacy & Open Source.** Because it is licensed under Apache-2.0 and uses end-to-end encrypted machine sharing, privacy-conscious developers like that machines stay private until explicitly shared with a workspace. [](https://github.com/lodyai/lody)

### Potential Confusion to Watch For

* **Name Mix-ups.** When searching for reviews, people often confuse **Lody** (the open-source coding agent workspace) with **Lindy** (Lindy.ai, a popular no-code business automation platform for emails, calendars, and meetings).
* **Early-Stage Development.** As noted in the Lody GitHub repository, its native mobile clients and certain ACP extensions are under active, rapid development, meaning features and workflows are still evolving quickly. [](https://www.youtube.com/watch?v=W1OkbW9ekME&vl=en)

Are you looking to use **Lody** for a **solo coding workflow** or to coordinate **agents across a team**? Let me know, and I can walk through how to set it up with your current tools.

* [](https://ai-tldr.dev/tools/lody/)  
ai-tldr.dev  
Lody: Shared Team Workspace for Coding Agents | AI/TLDR  
October 8, 2026 — Lody is an Apache-2.0 TypeScript project that describes itself as a shared workspace for the coding agents a team already uses. Ki...
* [](https://x.com/lody%5Fai)  
X·lody\_ai  
lody (@lody\_ai) / X  
We have officially adopted the community iOS client created by @\_\_oQuery ! from architecting the Cloud Runtime APIs to crafting a ...
* [](https://lody.ai/blog/introducing-lody/)  
lody.ai  
Introducing Lody  
January 8, 2026 — Every task gets its own isolated git worktree. This means you can run multiple agents in parallel — each working on a different fe...

Show all

# how to use pi agent on web ui

Because Pi is designed as a modular, minimal terminal harness rather than a single monolithic app, there are a few different ways to run it in a browser. Depending on whether you want a quick local dashboard, remote mobile access, or integration into an existing AI interface, you can choose one of the setups below. [](https://www.youtube.com/watch?v=O5bIzpu94jQ&t=38)

### 1\. Quick Local Browser UI (`@agegr/pi-web`)

If you already have Pi installed and want to view your local sessions, inspect project files, and run agent turns from a browser, `@agegr/pi-web` is the fastest drop-in option. It shares your existing `~/.pi/agent` configuration, credentials, and session history. [](https://github.com/agegr/pi-web)

* **Verify Node.js version.** Make sure you are running Node.js 22.19.0 or newer (`node --version`).
* **Launch the server.** Run `npx @agegr/pi-web@latest` in your terminal.
* **Open the interface.** Your browser should open automatically to `http://127.0.0.1:30141`.
* **Configure models.** If you haven't logged into a provider in the Pi CLI yet, open the **Models** panel in the web UI to sign in or paste an API key. [](https://github.com/agegr/pi-web)

_(Note: For a standalone package ecosystem alternative, [@firstpick/pi-package-webui](https://pi.dev/packages/@firstpick/pi-package-webui) offers multi-session tabs, Git workflows, and a built-in skills manager that runs alongside Pi on localhost.)_ [](https://pi.dev/packages/@firstpick/pi-package-webui)

### 2\. Remote-First Workspace (`PI WEB`)

If you want to run agents on a home server, workstation, or cloud VM and direct them from a phone or tablet, use [PI WEB](https://pi-web.dev/). Because sessions run in a background daemon on your host machine, closing your browser tab or losing connection will not interrupt active agent tasks. [](https://pi-web.dev/)

* **Install on your host.** On Linux, macOS, or Windows (via WSL), run the installer script:  
bash  
```  
curl -fsSL https://raw.githubusercontent.com/jmfederico/pi-web/main/install.sh | sh  
```  

* **Access from any device.** Open the hosted URL from your laptop, tablet, or phone (ideally over a private VPN like Tailscale) to send instructions, review diffs, and manage parallel Git worktrees. [](https://www.reddit.com/r/PiCodingAgent/comments/1t8bnqz/web%5Fui%5Ffor%5Fpi%5Fcoding%5Fagent%5Frecommendation/)

### 3\. Inside Open WebUI

If you already use **Open WebUI** as your primary chat frontend, you can connect Pi directly to it via Open Terminal. [](https://docs.openwebui.com/getting-started/quick-start/connect-an-agent/)

* **Connect via RPC.** Open Terminal supports Pi natively using Pi's JSON-RPC mode.
* **Follow the setup guide.** Configure the agent connection by following the [Open WebUI Agent Connection Docs](https://docs.openwebui.com/getting-started/quick-start/connect-an-agent/) so Open Terminal can launch and manage your local Pi CLI when needed. [](https://docs.openwebui.com/getting-started/quick-start/connect-an-agent/)

### Key Tips for Using Pi on the Web

* **Shared State:** Any model logins, API keys, or `AGENTS.md` / `APPEND_SYSTEM.md` files you configure in your terminal carry over automatically to the web interfaces.
* **Security for Remote Access:** By default, local web UIs bind only to `127.0.0.1`. If you expose a Pi web UI over a network (e.g., `--hostname 0.0.0.0`), always set a strong password and route traffic through HTTPS or a private VPN, as the agent has shell and filesystem execution privileges. [](https://github.com/agegr/pi-web)

If you'd like help getting set up, let me know:

* Your **operating system** (macOS, Linux, or Windows)
* Whether you want **local-only browser access** or **remote access from other devices**

I can walk you through the exact commands and security configuration for your setup.

* [](https://www.reddit.com/r/PiCodingAgent/comments/1t8bnqz/web%5Fui%5Ffor%5Fpi%5Fcoding%5Fagent%5Frecommendation/)  
Reddit·r/PiCodingAgent  
Web UI for pi coding agent recommendation ? : r/PiCodingAgent  
May 9, 2026 — offers conversation cloning and forking, customizable themes and fonts, built-in annotations and artifacts, multi-language support...
* [](https://github.com/agegr/pi-web)  
GitHub  
GitHub - agegr/pi-web: Web UI for the pi coding agent · GitHub  
Pi Web listens only on 127.0.0.1 by default. Remote Access Binding to a non-loopback address exposes an agent that can execute hig...
* [](https://pi-web.dev/)  
PI WEB  
PI WEB — A remote-first workspace for AI agents  
Keep agents, files, and tools on a computer or server you control. For Linux, macOS, and Windows through WSL. Just open PI WEB in ...

Show all

# how to use pi agent on web ui instead of tui in the most popular way

The most popular way to run the Pi coding agent in a browser instead of the terminal is  \[Highlight start\] using **agegr/pi-web** \[Highlight end\] , a local web interface with over 8,400 GitHub stars that shares your existing Pi configuration and session files. Users on [Reddit](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/) agree that it provides a convenient graphical wrapper for managing repositories, past conversations, and settings without increasing token consumption. [](https://github.com/agegr/pi-web)

### Option 1: agegr/pi-web (Most Popular Local UI)

This option runs locally on your machine, connects directly to your `~/.pi/agent` directory, and lets you inspect Git diffs, manage worktrees, and configure API keys in the browser. [](https://github.com/agegr/pi-web)

* **Verify Node.js version.** Ensure you have Node.js `22.19.0` or newer installed by running `node --version` in your terminal.
* **Run instantly via npx.** Launch the server without a permanent install using the command `npx @agegr/pi-web@latest`.
* **Install globally (optional).** To run it anytime with the `pi-web` command, install it globally via `npm install -g @agegr/pi-web@latest`.
* **Open the interface.** Your browser should open automatically, or you can navigate to `http://127.0.0.1:30141`. [](https://github.com/agegr/pi-web)

### Option 2: jmfederico/pi-web (Best for Background & Remote Sessions)

If you want your agent sessions to stay alive in the background after closing your browser—or if you want to supervise agents running on a remote server from your phone or laptop—use **[PI WEB](https://pi-web.dev/)** (`@jmfederico/pi-web`). [](https://github.com/jmfederico/pi-web)

* **Install the package.** Run `npm install -g @jmfederico/pi-web --allow-scripts=node-pty` to install the CLI and build its terminal dependencies.
* **Set up the background service.** Run `pi-web install` followed by `pi-web doctor` to register the daemon and verify your environment.
* **Access the dashboard.** Open `http://127.0.0.1:8504` in your browser, add a project folder, and start a session. [](https://pi-web.dev/install)

### Quick Comparison

| Feature                 | agegr/pi-web                                | jmfederico/pi-web                                          |
| ----------------------- | ------------------------------------------- | ---------------------------------------------------------- |
| **Primary Use Case**    | Fast, local browser replacement for the TUI | Persistent background daemon and remote server access      |
| **Quick Launch**        | npx @agegr/pi-web@latest                    | npm install -g @jmfederico/pi-web --allow-scripts=node-pty |
| **Default URL**         | http://127.0.0.1:30141                      | http://127.0.0.1:8504                                      |
| **Session Persistence** | Shares standard \~/.pi/agent JSONL files    | Keeps active tasks running even if you disconnect          |

Are you planning to run Pi **locally on your main machine** or **remotely on a server/VPS**? Let me know so I can share the safest networking setup (like SSH tunneling or reverse proxy steps) if needed.

* [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)  
Reddit·r/PiCodingAgent  
Best Web UI for Pi? : r/PiCodingAgent - Reddit  
November 5, 2026 — delivers a convenient graphical wrapper displaying recent conversations, repositories, and UI-based settings without increasing to...
* [](https://github.com/agegr/pi-web)  
GitHub  
GitHub - agegr/pi-web: Web UI for the pi coding agent · GitHub  
Web requires Node.js 22.19.0 or newer. Check your version with node --version , then run: npx @agegr/pi-web@latest The CLI opens a...
* [](https://github.com/agegr)  
GitHub  
Alex Yang (agegr) - GitHub  
Web UI for the pi coding agent. TypeScript 8.4k 1.3k. Forked from fishjar/kiss-translator.

Show all

# what do ppl say on agegr/pi-web

Users generally praise **agegr/pi-web** as a fast, lightweight browser wrapper for the Pi coding agent, though some find it cluttered or restrictive with custom extensions. Community feedback across Reddit highlights a mix of strong approval for its visual session management and specific trade-offs compared to terminal workflows or rival UIs. [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)

### What Users Like

* **Low overhead and speed.** One point of agreement among users on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/) is that `pi-web` provides a graphical interface for recent conversations, repositories, and settings without increasing token consumption. A user on [r/hermesagent](https://www.reddit.com/r/hermesagent/comments/1xc88rd/ive%5Fbeen%5Fusing%5Fpidev%5Ffor%5Fthe%5Flast%5F5%5Fdays%5Fand%5Fim%5Fa/) also noted that it feels lighter and more responsive than competing agent interfaces like `hermes-webui`. [](https://www.reddit.com/r/hermesagent/comments/1xc88rd/ive%5Fbeen%5Fusing%5Fpidev%5Ffor%5Fthe%5Flast%5F5%5Fdays%5Fand%5Fim%5Fa/)
* **Remote and mobile access.** Users on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1vxlwrv/pi%5Fdev%5Fas%5Fa%5Fgeneral%5Fagent/) agree that web wrappers like `pi-web` make it practical to interact with Pi remotely from mobile devices or through a Tailscale setup away from a desktop terminal. [](https://www.reddit.com/r/PiCodingAgent/comments/1vxlwrv/pi%5Fdev%5Fas%5Fa%5Fgeneral%5Fagent/)
* **Visual session and file tools.** Reviewers and developers highlight its ability to read local Pi session files directly, making it easier to manage Git worktrees, branch conversations, inspect diffs, and configure models without leaving the browser. [](https://github.com/agegr/pi-web)

### Common Criticisms & Limitations

* **Extension compatibility.** On [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1whrhm5/pichamber%5Fsame%5Fpi%5Fsession%5Fon%5Fdesktop%5Fbrowser%5Fand/), some users criticize how `pi-web` handles Pi's ecosystem, noting that standard CLI extensions do not always work seamlessly out of the box and subagents often require manual configuration tweaks. [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)
* **Interface density.** While some appreciate its feature set, users discussing alternatives on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1wgy56q/piui%5Fa%5Fmonth%5Flater%5Fharder%5Fbetter%5Ffaster%5Fstronger/) describe `pi-web` as feeling overly complex or visually "busy" compared to minimalist alternatives like `pi-ui` or `Herdr`. [](https://www.reddit.com/r/PiCodingAgent/comments/1vi770n/best%5Fpi%5Fui%5Fapp%5Foptions/)
* **Missing project views.** A commenter on [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1x9ofcn/is%5Fthere%5Fa%5Fweb%5Fui%5Flike%5Fthis%5Fbut%5Ffor%5Fpi/) pointed out that it still lacks a high-level dashboard or Kanban board for tracking tasks across projects. Active feature requests on the [agegr/pi-web GitHub Issues](https://github.com/agegr/pi-web/issues) page echo this, with users asking for cross-project activity views and better prompt queueing. [](https://www.reddit.com/r/PiCodingAgent/comments/1x9ofcn/is%5Fthere%5Fa%5Fweb%5Fui%5Flike%5Fthis%5Fbut%5Ffor%5Fpi/)

If you are evaluating **agegr/pi-web** for your own setup, let me know:

* Your **operating system** or hosting environment (local machine, Docker, remote server)
* Whether you rely heavily on **custom Pi extensions** or **subagents**

I can help you compare it against lighter alternatives like **pi-ui** or **PiChamber** for your specific workflow.

* [](https://github.com/agegr/pi-web)  
GitHub  
agegr/pi-web: Web UI for the pi coding agent - GitHub  
Pi Web uses the same local configuration and session files as pi, so you can browse and resume conversations, run agent turns, con...
* [](https://www.reddit.com/r/hermesagent/comments/1xc88rd/ive%5Fbeen%5Fusing%5Fpidev%5Ffor%5Fthe%5Flast%5F5%5Fdays%5Fand%5Fim%5Fa/)  
Reddit·r/hermesagent  
I've been using pi.dev for the last 5 days and I'm a little sad at ...  
October 22, 2026 — dev is how fast, responsive and not bloaty it is. pi has been debloating and cleaning up all of the mess … try out pi if you want ...
* [](https://www.instagram.com/reel/DbGW1dusZWS/)  
Instagram·Sekademi Cybersecurity  
agegr/pi-web 🇬🇧 A full-featured visual workspace for your ...  
July 22, 2026 — Reads local pi session files to render a complete browser interface. Features built-in file preview, real-time SSE chat, git workt...  
[0:10](https://www.instagram.com/reel/DbGW1dusZWS/)

Show all

# what do ppl say on agegr/pi-web ux

Developers and users generally view **agegr/pi-web** as  \[Highlight start\] a convenient, zero-overhead graphical wrapper that brings visual navigation and spatial awareness to the minimalist Pi coding agent \[Highlight end\] . It bridges the terminal-based engine with a local browser interface without altering the underlying lightweight philosophy or adding extra token costs. [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)

### User Consensus & Praised UX Features

* **Zero token overhead.** One point of agreement among users on [Reddit](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/) is that `pi-web` provides a clean graphical interface without increasing token consumption. It acts strictly as a local presentation layer over existing session files. [](https://github.com/agegr/pi-web)
* **Spatial awareness and navigation.** Reviewers note that moving from a pure terminal to the Next.js-based browser UI makes it much easier to manage complex codebases. Users can visually browse Git worktrees, inspect project files, and navigate nonlinear conversation histories via a dedicated sidebar. [](https://www.youtube.com/watch?v=Zneg7Gm105g)
* **Streamlined visual controls.** Tech breakdowns on [PyShine](https://pyshine.com/Pi-Web-Local-UI-For-Pi-Coding-Agent/) highlight its single-page React layout, which includes an SSE minimap for long message lists and accessible modals for configuring models, thinking modes, and skills.
* **Seamless local setup.** Users appreciate that it uses the exact same local configuration and session files as the terminal CLI. Because it ships pre-built, developers can launch it directly via `npx` without needing to run build steps. [](https://github.com/agegr/pi-web)

### Limitations & Caveats

* **Subagent configuration quirks.** Users on Reddit point out that while basic functionality works smoothly out of the box, subagents often require manual configuration tweaks to work properly alongside custom extensions. [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)
* **DIY ecosystem dependency.** Because Pi itself is an unopinionated, "do-it-yourself" harness, the web UI's richness still depends on how much a user has customized their underlying extensions, permissions, and tools. [](https://daily.dev/posts/pi-coding-agent-is-now-my-absolute-favorite--yxzsptoyy)

Would you like to compare **agegr/pi-web** against other Pi interfaces, or look into **configuration tips** for getting subagents and custom extensions working smoothly in the browser?

* [](https://www.reddit.com/r/PiCodingAgent/comments/1xo6u8d/best%5Fweb%5Fui%5Ffor%5Fpi/)  
Reddit·r/PiCodingAgent  
Best Web UI for Pi? : r/PiCodingAgent - Reddit  
November 5, 2026 — users note that subagents may require configuration tweaks to work alongside custom extensions.
* [](https://www.youtube.com/watch?v=Zneg7Gm105g)  
YouTube·Alex Hitt  
Hot-Reload-Safe pi Sessions and Visual Git Worktrees  
July 25, 2026 — spatial awareness required to manage a complex codebase. stabilizing a browserbased next. js interface over a stateful terminal. t...  
6:19
* [](https://github.com/agegr/pi-web)  
GitHub  
agegr/pi-web: Web UI for the pi coding agent - GitHub  
Pi Web uses the same local configuration and session files as pi, so you can browse and resume conversations, run agent turns, con...

Show all



# pros cons of nextjs or vite spa, what do ppl say

The choice between **Next.js** and a **Vite Single-Page Application (SPA)** comes down to whether you need **server-side rendering and SEO** or a **fast, lightweight client-side app**. Developers generally agree on [Reddit](https://www.reddit.com/r/nextjs/comments/1mvl9py/why%5Fdo%5Fpeople%5Fstill%5Fuses%5Fvite%5Finstead%5Fof%5Fnextjs/) that Next.js is best for full-featured, public-facing apps, while Vite excels for smaller or purely client-side projects. [](https://www.reddit.com/r/nextjs/comments/1mvl9py/why%5Fdo%5Fpeople%5Fstill%5Fuses%5Fvite%5Finstead%5Fof%5Fnextjs/)

### Quick Comparison

| Feature              | Vite (SPA)                                        | Next.js                                              |
| -------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| **Core Role**        | Build tool and dev server                         | Full-stack React framework                           |
| **Rendering**        | Client-Side Rendering (CSR)                       | SSR, SSG, ISR, and CSR                               |
| **SEO Performance**  | Limited (sends empty HTML shell initially)        | Strong (sends pre-rendered HTML)                     |
| **Routing**          | Manual (e.g., React Router, TanStack Router)      | Built-in file-based App Router                       |
| **Dev Server Speed** | Near-instant startup and HMR (\~50ms)             | Fast with Turbopack, though slightly slower startup  |
| **Hosting**          | Simple static hosting (S3, Netlify, GitHub Pages) | Requires Node.js server, serverless, or edge hosting |

---

### Vite (SPA): Pros & Cons

**Pros**

* **Blazing-Fast Development.** Vite starts almost instantly and updates changes in milliseconds using native ES modules. [](https://dev.to/shadcndeck%5Fdev/nextjs-vs-vite-choosing-the-right-tool-in-2026-38hp)
* **Simplicity and Control.** It is unopinionated, letting you pick your own router, state manager, and folder structure without framework lock-in. [](https://prismic.io/blog/vite-vs-nextjs)
* **Cheap, Easy Deployment.** Because it compiles down to static HTML, CSS, and JavaScript files, you can host it anywhere for free or pennies on a CDN. [](https://strapi.io/blog/vite-vs-nextjs-2025-developer-framework-comparison)
* **Smaller Learning Curve.** You only write standard client-side React without worrying about server-client boundaries. [](https://www.youtube.com/watch?v=MC0PkrQNtnY&t=176)

**Cons**

* **Weak Out-of-the-Box SEO.** Search engine crawlers initially see a blank page until JavaScript executes, which hurts organic search rankings.
* **Slower Initial Page Load.** Users must download and parse the JavaScript bundle before seeing content, especially on slower devices.
* **No Built-in Backend.** You need a separate server or third-party service to handle APIs, database queries, and authentication. [](https://www.youtube.com/watch?v=PLesX9ZJLNk&t=46)

---

### Next.js: Pros & Cons

**Pros**

* **Top-Tier SEO and Initial Load.** Server-Side Rendering (SSR) and Static Site Generation (SSG) deliver ready-to-read HTML immediately.
* **All-in-One Features.** Routing, API endpoints, image optimization, and code-splitting work right out of the box.
* **Full-Stack Capabilities.** React Server Components allow you to query databases directly inside your components without exposing secrets to the browser. [](https://hygraph.com/blog/vite-vs-nextjs)

**Cons**

* **Higher Complexity.** Managing Server Components, caching rules, and `"use client"` directives introduces a steeper learning curve.
* **Heavier Hosting Requirements.** Dynamic features require a Node.js server or serverless infrastructure like Vercel, increasing costs at scale.
* **Overkill for Simple Apps.** Using Next.js for a project that does not need SEO adds unnecessary build friction and architectural overhead. [](https://www.youtube.com/shorts/JWrHkvmYi%5FQ)

---

### What Developers Are Saying

Developer discussions across blogs and forums highlight clear patterns in how teams choose between the two:

* **Don't use Next.js for behind-login apps.** Developers on [Meritshot](https://www.meritshot.com/blog/bde-nextjs-vs-vite-2026) and [Zero To Shipped](https://www.zerotoshipped.com/blog/nextjs-vs-vite) point out that using Next.js for internal dashboards, admin panels, or SaaS apps gated behind a login creates "2–3x development friction" for zero SEO benefit.
* **Server Components can frustrate interactive UIs.** Some developers note that Next.js's server-first default can feel clunky when building heavily interactive, stateful apps where almost every component needs `"use client"` anyway.
* **Use Next.js when traffic and content matter.** For e-commerce stores, marketing websites, blogs, and public SaaS landing pages, developers overwhelmingly favor Next.js because migrating a Vite SPA to SSR later requires significant rework.
* **Hybrid setups are common.** Many teams build their public marketing site in Next.js for SEO, while running their core logged-in web application as a separate Vite SPA on a subdomain. [](https://www.meritshot.com/blog/bde-nextjs-vs-vite-2026)

If you'd like help deciding for your project, let me know:

* **What type of app** you are building (e.g., dashboard, e-commerce, SaaS, portfolio)
* Whether **public SEO** or **backend API routes** are required

I can recommend the best setup and starter libraries for your use case.

* [](https://www.reddit.com/r/nextjs/comments/1mvl9py/why%5Fdo%5Fpeople%5Fstill%5Fuses%5Fvite%5Finstead%5Fof%5Fnextjs/)  
Reddit·r/nextjs  
Why do people still uses Vite instead of Next.js or ... - Reddit  
August 20, 2025 — Vite functions as a build tool that compiles React code into a static JavaScript bundle for single-page applications (SPAs), enabl...
* [](https://dev.to/shadcndeck%5Fdev/nextjs-vs-vite-choosing-the-right-tool-in-2026-38hp)  
DEV Community  
Next.js vs Vite: Choosing the Right Tool in 2026  
Feb 3, 2026 — JavaScript must run before content appears. With Next.js SSR/SSG, search engines see fully rendered HTML immediately.
* [](https://strapi.io/blog/vite-vs-nextjs-2025-developer-framework-comparison)  
Strapi  
Vite vs Next.js 2025: Complete Developer Framework Guide  
September 3, 2025 — Deployment Static files to any CDN Platform-optimized (Vercel), frontend code for unified deployment. Vite's rapid development,

Show all

# pros cons of git

**Git** is the industry-standard **distributed version control system**, offering unmatched speed, offline capabilities, and lightweight branching, though it comes with a steep learning curve and poor native handling of large binary files. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

### Pros of Git

* **Distributed architecture and offline work.** Every developer has a full local copy of the repository and its history. You can commit changes, browse logs, and switch branches completely offline without relying on a central server. [](https://secture.com/en/pros-and-cons-of-git-developers-guide/)
* **Fast local performance.** Because nearly all operations happen directly on your local disk rather than over a network, tasks like viewing history, committing, and comparing changes execute almost instantaneously. [](https://www.youtube.com/watch?v=8DYCrI7Pg54&t=17)
* **Cheap, lightweight branching.** Creating, switching, and merging branches is fast and easy. This encourages developers to isolate features and bug fixes without risking the stability of the main codebase. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)
* **Strong data integrity.** Git uses cryptographic checksums (SHA-1) to track every file and commit. It is virtually impossible for file contents to be corrupted or altered without Git detecting the change. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)
* **Massive ecosystem and adoption.** As the standard across software development, Git integrates seamlessly with major platforms like GitHub, GitLab, and Bitbucket. Finding tutorials, third-party GUI tools, and CI/CD integrations is straightforward. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

### Cons of Git

* **Steep learning curve.** Git has an extensive command set and abstract concepts like the staging area, rebasing, and detached HEAD states. One point of agreement among developers on [Stack Overflow](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it) is that while Git is much faster and easier to branch than older systems, its flexible and unopinionated model makes it harder for beginners to learn.
* **Inefficient with large binary files.** Git is built for tracking line-by-line text changes. Storing large media, game assets, or compiled binaries bloats repository size and slows down cloning unless you configure extensions like Git LFS.
* **Risk of history loss or messy merges.** Powerful commands like `git push --force` or improper rebasing can overwrite shared commit history and cause data loss. Additionally, without strict team conventions, long-lived branches can lead to complex merge conflicts.
* **Inconsistent CLI usability.** Many Git commands have overlapping functions or unintuitive flags, which can confuse users working strictly in the terminal.
* **Lack of granular file locking.** Because developers work independently on local copies, two people can edit the same unmergeable file (like a binary asset or 3D model) at the same time without knowing until they try to merge. [](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it)

Are you evaluating Git for a specific **project type** (such as game development, hardware design, or standard software) or comparing it against another tool like **SVN** or **Perforce**? Let me know, and I can tailor a workflow recommendation or comparison for you.

* [](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it)  
Stack Overflow  
What are your pros and cons of git after having used it? \[closed\]  
December 5, 2008 — Git offers significant advantages … it presents a steeper learning curve for beginners due to its extensive command set and flexib...
* [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)  
GeeksforGeeks  
The Pros and Cons of Using Git for Your Projects - GeeksforGeeks  
October 10, 2024 — Cons: Steep learning curve; complex for beginners; inefficient with large binary files (requiring Git LFS); distributed nature can...
* [](https://learn.allspice.io/docs/why-use-git-pros-cons)  
AllSpice.io  
Why use Git pros and cons  
Limitations & drawbacks: complex learning curve; hard ECAD file merging; vanilla git lacks schematic/layout visual diffs; does not...

Show all

# pros cons of using git or not

**Using Git is the industry standard for tracking code changes and collaborating safely, though skipping it can make sense for tiny, one-off scripts or non-text projects.** While Git acts as a reliable safety net and history log for software development, its steep learning curve and poor handling of large binary files can add unnecessary overhead to simple workflows. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

### Pros of Using Git

* **Complete change history.** Git records every edit line by line, letting you see who changed what and revert back to a working state if something breaks. [](https://www.devlune.in/blogs/tech-glossary/devops/git)
* **Safe experimentation with branches.** You can create isolated branches to test new features or fix bugs without risking your main working code. [](https://www.devlune.in/blogs/tech-glossary/devops/git)
* **Offline work and speed.** Because Git is distributed, your computer holds the entire project history. You can commit changes, view logs, and switch branches instantly without an internet connection. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)
* **Seamless team collaboration.** Paired with platforms like GitHub or GitLab, Git lets multiple developers work on the same files simultaneously and merge their work cleanly. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)
* **Built-in backups.** Every clone of a repository acts as a full backup, preventing a single server crash from wiping out your project. [](https://www.devlune.in/blogs/tech-glossary/devops/git)

### Cons of Using Git

* **Steep learning curve.** Commands, concepts like staging and rebasing, and complex merge conflicts can feel overwhelming for beginners.
* **Poor handling of large binary files.** Git is built for plain text. Tracking large videos, audio files, 3D assets, or compiled binaries bloats the repository and slows it down unless you configure add-ons like Git LFS.
* **Risk of accidental data loss.** Advanced commands like force-pushing or rewriting history can permanently erase work if used carelessly.
* **Maintenance overhead.** Long-running projects require occasional cleanup of old branches and repository optimization to keep performance fast. [](https://secture.com/en/pros-and-cons-of-git-developers-guide/)

### Pros and Cons of Not Using Git

* **Zero setup and friction.** Skipping Git lets you start writing code or creating files immediately without learning terminal commands or managing repositories.
* **Simpler for non-code assets.** For projects heavy in design files, video editing, or word processing, cloud drives like Google Drive or Dropbox handle file syncing and basic version history with far less hassle.
* **High risk of losing work.** Without proper version control, you rely on manual backups or messy folder copies like `project_final_v2`, making it hard to undo subtle bugs.
* **Painful collaboration.** Sharing code via zip files or shared folders leads to overwritten changes and confusion over who has the latest version. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

### Summary: When to Choose Which

| Scenario                          | Best Choice  | Why                                                                                                 |
| --------------------------------- | ------------ | --------------------------------------------------------------------------------------------------- |
| **Software or web development**   | **Use Git**  | Essential for tracking text-based code, debugging, and working with modern deployment tools.        |
| **Team coding projects**          | **Use Git**  | Prevents teammates from overwriting each other's work and supports structured code reviews.         |
| **Quick, disposable scripts**     | **Skip Git** | A 20-line script you will run once does not need version history overhead.                          |
| **Video, audio, or heavy design** | **Skip Git** | Standard cloud storage or specialized digital asset managers handle large binary files much better. |

If you're deciding whether to use Git for a specific project, let me know:

* What **type of files** you are working with (code, documents, media, etc.)
* Whether you are working **solo or on a team**
* Your current **comfort level with the command line**

I can recommend the simplest setup or an easier alternative for your workflow.

* [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)  
GeeksforGeeks  
The Pros and Cons of Using Git for Your Projects - GeeksforGeeks  
October 10, 2024 — Pros: Distributed architecture enabling offline work; cheap, fast branching and merging; Cons: Steep learning curve; complex for b...
* [](https://www.youtube.com/watch?v=-Xfch1DV9Vk&t=22)  
YouTube·The Knowledge Academy  
Git vs. GitHub: What's the Difference?  
May 30, 2025 — Git is a version control system  
3m
* [](https://www.youtube.com/shorts/GzszSg0AuJU)  
YouTube·𝗦𝘁𝗮𝗿𝗖𝗼𝗱𝗲 𝗞𝗵  
Git Explained: Never Lose Your Code Again  
Nov 10, 2026 — When issues arise, such as a broken login, \`git revert\` can fix the problem and maintain history integrity without data loss.  
2:31

Show all

# pros cons of not using git

Skipping **Git**  \[Highlight start\] removes a steep learning curve and complex workflow overhead, making quick solo prototyping easier \[Highlight end\] . However, it exposes your work to permanent data loss and makes team collaboration nearly impossible. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

### Pros of Not Using Git

* **Zero learning curve.** You avoid the notoriously confusing terminology, complex state management, and command-line syntax that frustrate beginners. On [Reddit](https://www.reddit.com/r/git/comments/18cz8cu/novice%5Fhere%5Fhelp%5Fme%5Funderstand%5Fif%5Fi%5Fshould%5Fbe/), opinions are mixed on whether the upfront time investment is necessary for purely solo work, as skipping it lets you focus immediately on writing code. [](https://www.reddit.com/r/git/comments/18cz8cu/novice%5Fhere%5Fhelp%5Fme%5Funderstand%5Fif%5Fi%5Fshould%5Fbe/)
* **Better handling of large binary files.** Standard Git struggles to track massive media, 3D assets, or compiled binaries without bogging down your local drive. Using cloud storage or centralized tools like Perforce avoids needing extra add-ons like Git LFS. [](https://www.quora.com/What-are-some-negatives-to-using-Git)
* **Native file locking.** Distributed tools do not easily stop two people from editing the exact same file at the same time. Alternative systems with native file locking prevent unmergeable conflicts in non-text files like game assets or CAD designs.
* **No accidental history destruction.** Beginners frequently lose uncommitted work or break shared repositories through confusing commands like force-pushing or deleting branches. Simple file backups do not carry the risk of wiping out your work with a single mistyped command. [](https://ikriv.com/blog/?p=1905)

### Cons of Not Using Git

* **High risk of permanent data loss.** Without a local commit history, a single hard drive crash, accidental file deletion, or bad save can erase days of progress. You lose the ability to treat your codebase like a time machine to instantly roll back broken experiments.
* **Painful team collaboration.** Manually zipping folders, emailing files, or relying on basic cloud sync drives creates severe version conflicts. A point of consensus on [Stack Overflow](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it) is that Git makes branching and merging changes across multiple people vastly easier than older alternatives.
* **No structured experimentation.** Without lightweight branching, testing a risky new feature means duplicating entire project folders or breaking your working code. Managing multiple versions manually quickly leads to disorganized folders full of confusingly named copies.
* **Limited career and ecosystem access.** Nearly all modern software teams and open-source communities rely on Git and platforms like GitHub for code reviews and automated deployments. Avoiding Git locks you out of standard industry workflows and deployment pipelines. [](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it)

### When Skipping Git Makes Sense

* **One-off scripts and throwaway prototypes.** If you are writing a 20-line automation script or testing an idea you plan to delete tomorrow, setting up a repository adds unnecessary friction.
* **Non-code creative projects.** Video editors, 3D artists, and graphic designers dealing mostly with massive binary files often get better results from specialized asset managers or simple cloud backups. [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)

If you are deciding what workflow to use, let me know:

* The **type of project** you are building (code, game assets, writing, etc.)
* Whether you are working **solo** or with a **team**

I can recommend the simplest version control setup or alternative tool for your specific needs.

* [](https://stackoverflow.com/questions/343675/what-are-your-pros-and-cons-of-git-after-having-used-it)  
Stack Overflow  
What are your pros and cons of git after having used it? \[closed\]  
December 5, 2008 — Git vs. SVN: Git offers significant advantages over centralized version control systems like SVN, including faster operations, eas...
* [](https://www.geeksforgeeks.org/git/the-pros-and-cons-of-using-git-for-your-projects/)  
GeeksforGeeks  
The Pros and Cons of Using Git for Your Projects - GeeksforGeeks  
October 10, 2024 — Distributed architecture enabling offline work; cheap, fast branching and merging; Cons: Steep learning curve; complex for beginne...
* [](https://www.youtube.com/watch?v=TSLkZep03PE)  
YouTube·The Code Guy  
Stop Using Git Like a Noob — Do This Instead (It's Safer & Faster)  
August 10, 2025 — avoidable the command line can be intimidating. only need a handful of commands to do 90% of what you'll ever need in Git. tracks ...  
6:48

Show all

# pros cons of using git and github as file sync wo commit messages

Using **Git and GitHub as a file sync tool without meaningful commit messages** works well for quick, personal backups across devices, though it trades away easy history tracking and smooth binary file handling. [](https://www.reddit.com/r/git/comments/e9pmlb/should%5Fi%5Fuse%5Fgit%5Fto%5Fsync%5Fprojects%5Fbetween%5Fdevice/)

While Git does not allow completely blank commit messages without a flag (`--allow-empty-message`), many users bypass writing them by using automated scripts or generic placeholders like `"sync"` or `"wip"`.

### Pros of Using Git and GitHub for File Sync

* **Free and reliable cloud storage.** GitHub offers free private repositories with high uptime, giving you an off-site backup for text, notes, and code. [](https://www.youtube.com/watch?v=-Xfch1DV9Vk&t=22)
* **Full offline access.** Every synced device holds a complete local copy of your files, allowing you to view and edit everything without an internet connection. [](https://ikriv.com/blog/?p=1905)
* **Granular recovery.** Even with generic messages like `"sync"`, Git still records timestamps and exact line-by-line diffs. You can inspect or restore previous file states anytime. [](https://www.youtube.com/shorts/vivKJeXX9bQ?vl=en)
* **Zero-friction workflow.** Skipping descriptive messages lets you automate syncing via cron jobs or simple scripts, making it feel closer to traditional cloud drives. [](https://www.reddit.com/r/git/comments/e9pmlb/should%5Fi%5Fuse%5Fgit%5Fto%5Fsync%5Fprojects%5Fbetween%5Fdevice/)
* **Easy cross-device portability.** Moving your workspace to a new computer only requires running a single `git clone` command. [](https://tildes.net/~tech/1o79/is%5Fthere%5Fa%5Fsane%5Fway%5Fto%5Fuse%5Fgit%5Fas%5Fa%5Fglorified%5Fsync%5Ftool)

### Cons of Using Git and GitHub for File Sync

* **Unreadable project history.** When every entry says `"update"` or `"sync"`, finding a specific past version requires manually opening and checking diffs by date.
* **Poor handling of large and binary files.** Git is built for plain text. Frequently changing images, videos, or databases will bloat your repository size and slow down transfers unless you configure Git LFS.
* **Manual conflict resolution.** Unlike Google Drive or Dropbox, Git does not auto-resolve simultaneous edits in the background. If you forget to pull before editing on a second device, you will face merge conflicts.
* **No real-time background sync.** Changes only reach the cloud when you explicitly commit and push them. Forgetting to push before shutting down a laptop leaves your other devices out of date.
* **Repository size limits.** GitHub enforces strict file size limits (100 MB per file) and recommends keeping repositories small, making it unsuitable for general media or full-system backups. [](https://learn.allspice.io/docs/why-use-git-pros-cons)

### Community Perspective and Best Practices

On [Reddit](https://www.reddit.com/r/git/comments/e9pmlb/should%5Fi%5Fuse%5Fgit%5Fto%5Fsync%5Fprojects%5Fbetween%5Fdevice/), opinions are mixed on using frequent, low-effort commits to sync work between devices. Some developers note that messy commits clutter the log, while others point out it is completely fine for personal branches—especially if you clean up the history later using an interactive rebase. [](https://www.reddit.com/r/git/comments/e9pmlb/should%5Fi%5Fuse%5Fgit%5Fto%5Fsync%5Fprojects%5Fbetween%5Fdevice/)

If you primarily want to sync **plain-text notes** (like Markdown or Obsidian vaults), automated Git syncing is a popular and effective setup. If you are syncing **mixed media, PDFs, or large folders**, dedicated tools like Syncthing or standard cloud drives will save you significant hassle.

What **types of files** are you planning to sync (e.g., code, Markdown notes, or large media), and are you syncing **only for yourself** or **with a team**? Knowing this can help me recommend the best automation setup or alternative tool.

* [](https://www.reddit.com/r/git/comments/e9pmlb/should%5Fi%5Fuse%5Fgit%5Fto%5Fsync%5Fprojects%5Fbetween%5Fdevice/)  
Reddit·r/git  
Should I use Git to sync projects between device ... - Reddit  
December 12, 2019 — Committing early and often on a personal feature branch to sync work between devices is a common practice.
* [](https://learn.allspice.io/docs/why-use-git-pros-cons)  
AllSpice.io  
Why use Git pros and cons  
Git for hardware revision control: enables iterative, atomic, asynchronous changes to source files; speeds up reviews and revision...
* [](https://learn.modernagecoders.com/blog/git-vs-github-difference)  
Modern Age Coders  
Git vs GitHub: The Difference, With a Real Session  
September 28, 2026 — GitHub Desktop is an app that runs Git commands for you with buttons. git clone gives you the files and the entire history, connec...

Show all

# pros cons of using git wo meaningful commit messages

Using Git without meaningful commit messages (such as writing `"wip"`, `"fix"`, or using empty messages)  \[Highlight start\] **trades immediate coding speed for long-term maintenance friction** \[Highlight end\] . While skipping detailed messages can work for solo prototypes or workflows that squash pull requests, it severely degrades debugging, team collaboration, and project history on shared codebases. [](https://medium.com/nntech/why-git-commit-messages-matter-693aea080272)

### Pros of Skipping Meaningful Commit Messages

* **Faster short-term iteration.** Developers can treat commits like quick "save points" without breaking their flow to summarize small, experimental changes. [](https://trunk.io/blog/git-commit-messages-are-useless)
* **Reduced friction in squash-merge workflows.** In trunk-based development where pull requests are squash-merged into the main branch, individual branch commits are discarded anyway. Only the final pull request title and description matter for the permanent history. [](https://trunk.io/blog/git-commit-messages-are-useless)
* **Zero overhead for solo or throwaway projects.** When working alone on a temporary script, personal experiment, or hackathon project, nobody else needs to read the history. [](https://medium.com/nntech/why-git-commit-messages-matter-693aea080272)
* **Code remains the single source of truth.** As noted by engineering platform [Trunk.io](https://trunk.io/blog/git-commit-messages-are-useless), relying solely on the code and inline comments avoids maintaining text descriptions that can become outdated. [](https://trunk.io/blog/git-commit-messages-are-useless)

### Cons of Skipping Meaningful Commit Messages

* **Painful debugging and bug hunting.** When running `git blame` or `git bisect` months later, messages like `"updates"` or `"fixed stuff"` force developers to manually read every line of code to understand why a change was made.
* **Loss of the "why" behind decisions.** Code diffs show _what_ changed, but only commit messages explain _why_ a workaround was chosen or what business requirement drove the edit. One point of agreement among users on [Stack Overflow](https://stackoverflow.com/questions/68785493/why-is-it-necessary-to-enter-commit-messages) is that even minor commit messages provide crucial context in `git log --oneline` to distinguish between different types of quick edits.
* **Slower code reviews and onboarding.** Reviewers waste time deciphering the intent of a pull request without clear commit summaries. New team members also lose a valuable historical narrative for learning how the codebase evolved.
* **Broken release automation.** Skipping structured formats like [Conventional Commits](https://thoughtbot.com/blog/the-art-of-writing-meaningful-git-commit-messages) prevents tools from automatically generating changelogs or calculating semantic version bumps. However, on [Reddit](https://www.reddit.com/r/ExperiencedDevs/comments/1fitu38/advantages%5Fof%5Fstandardized%5Fcommit%5Fmessages/), opinions are mixed, with some developers arguing that manual changelogs work just as well since automated semantic versioning still requires human review.
* **Riskier rollbacks.** Vague messages often go hand-in-hand with messy, non-atomic commits, making it difficult to safely revert a single broken feature without undoing unrelated work. [](https://www.reddit.com/r/ExperiencedDevs/comments/1fitu38/advantages%5Fof%5Fstandardized%5Fcommit%5Fmessages/)

### Summary Comparison

| Factor                    | Without Meaningful Messages                          | With Meaningful Messages                             |
| ------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| **Daily Coding Speed**    | Slightly faster during rapid prototyping             | Takes \~1–2 extra minutes per day                    |
| **Debugging (git blame)** | Slow; requires reading raw diffs                     | Fast; immediately reveals intent and context         |
| **Team Collaboration**    | Higher friction during code reviews                  | Easier reviews and faster onboarding                 |
| **Best Use Case**         | Solo prototypes, local WIP branches before squashing | Shared repositories, long-lived production codebases |

**Best-of-both-worlds approach:** Use quick, messy commits locally while working, then clean them up with an interactive rebase (`git rebase -i`) or squash-merge them into one well-described commit before merging into a shared branch. [](https://www.donnywals.com/why-you-should-keep-your-git-commits-small-and-meaningful/)

If you're setting up guidelines for a project, let me know:

* **Team size** (solo or collaborative?)
* Your **merging workflow** (squash merges, rebase, or merge commits?)

I can help you pick a lightweight commit strategy that fits how you work.

* [](https://www.reddit.com/r/ExperiencedDevs/comments/1fitu38/advantages%5Fof%5Fstandardized%5Fcommit%5Fmessages/)  
Reddit·r/ExperiencedDevs  
Advantages of standardized commit messages? - Reddit  
September 17, 2024 — Automation and Conventional Commits: Standardized commit messages, such as Conventional Commits, are highly valued for enabling au...
* [](https://medium.com/nntech/why-git-commit-messages-matter-693aea080272)  
Medium·R.E.M.  
Why git commit messages matter - Medium  
April 1, 2022 — writing meaningful commit messages might actually help productivity. Making commit messages read like an outline
* [](https://medium.com/bricksnbrackets/git-commit-messages-are-useless-think-again-5d066825f086)  
Medium·Attila Vágó  
Git Commit Messages Are Useless? Think again. | by Attila Vágó | Bricks n’ Brackets | Medium  
November 1, 2022 — Readable history (traceable evolution of pull requests, Peer reviews (speeds up review process, exposes glaring issues); Debugging...

Show all

# how do coding agents make git coauthor default

11:25 PM

### how do coding agents make git coauthor default

Coding agents make Git co-authorship the default primarily through **system prompt injection** or **IDE extension settings** that append a `Co-authored-by` trailer to commit messages. Depending on whether the tool is a terminal agent or an editor integration, the underlying mechanism works in one of three ways. [](https://www.developersdigest.tech/blog/vscode-copilot-ai-coauthor-attribution)

#### 1\. System Prompt Injection (CLI & Autonomous Agents)

Terminal-based agents like Claude Code, Aider, or Codex execute Git commands directly inside a bash shell. [](https://explainx.ai/blog/claude-code-commit-co-author-attribution-disable-guide-2026)

* **Built-in instructions.** The agent's hidden system prompt explicitly instructs the model to append a `Co-Authored-By:` line whenever it runs `git commit`. [](https://www.facebook.com/ZazenAlex/posts/claude-code-adds-claude-as-a-co-author-on-every-commit-and-i-dont-want-thati-wan/122118894321447358/)
* **Standard trailer format.** When generating the command, the agent formats the string using a standard Git trailer like `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` so platforms like GitHub automatically link the commit to the AI's profile. [](https://fabiorehm.com/blog/2026/03/02/our-coding-agent-commits-deserve-better-than-co-authored-by/)
* **Configuration overrides.** Tools like Claude Code allow users to override this prompt behavior by setting empty attribution strings in `~/.claude/settings.json` or adding counter-instructions in a `CLAUDE.md` file. [](https://explainx.ai/blog/claude-code-commit-co-author-attribution-disable-guide-2026)

#### 2\. Editor Extension Settings (IDE-Integrated Agents)

Editor-based tools like GitHub Copilot in VS Code intercept the source control workflow at the application level rather than relying solely on a prompt. [](https://github.com/orgs/community/discussions/194075)

* **Session tracking.** As outlined in the [Developers Digest breakdown of VS Code Copilot](https://www.developersdigest.tech/blog/vscode-copilot-ai-coauthor-attribution), the editor tracks whether chat or agent workflows modified files in your workspace. [](https://www.developersdigest.tech/blog/vscode-copilot-ai-coauthor-attribution)
* **Automatic message injection.** When you commit through the IDE's source control panel, the extension automatically appends `Co-authored-by: Copilot` to the commit text. Users on [GitHub Community](https://github.com/orgs/community/discussions/194075) noted that this insertion can happen silently even after manually editing a commit message. [](https://www.reddit.com/r/vscode/comments/1t1i8p5/copilot%5Fis%5Fa%5Fcoauthor%5Fso%5Fthis%5Fcode%5Fbelongs%5Fto/)
* **Toggleable settings.** VS Code controls this via the `git.addAICoAuthor` setting, which supports modes like `off`, `chatAndAgent`, and `all`. [](https://www.developersdigest.tech/blog/vscode-copilot-ai-coauthor-attribution)

#### 3\. Custom Repo Rules and Git Hooks

For coding agents that do not enforce co-authorship out of the box, teams often make it the default at the repository level.

* **Agent rule files.** As noted in the [SSW Rules guide on AI commit attribution](https://www.ssw.com.au/rules/attribute-ai-assisted-commits-with-co-authors), developers add markdown instructions to `.cursorrules`, `.github/copilot-instructions.md`, or `AGENTS.md` commanding the agent to always include a co-author trailer.
* **Git hooks.** Teams also enforce attribution deterministically using a `prepare-commit-msg` hook inside `.git/hooks/`. As detailed in the [Crash Override guide on attributing AI commits](https://crashoverride.com/resources/knowledge-base/code-ownership/attributing-ai-commits-git), a shell script inspects the commit author or environment variables and automatically injects or requires a `Co-authored-by:` or `Signed-off-by:` line before the commit finalizes. [](https://www.ssw.com.au/rules/attribute-ai-assisted-commits-with-co-authors)

If you are looking to configure or disable this behavior, let me know:

* Which **coding agent or IDE** you are using (e.g., Claude Code, VS Code Copilot, Cursor)
* Whether you want to **enable, customize, or disable** the co-author tag

I can give you the exact configuration snippet or Git hook to set it up.

+5

* [](https://github.com/orgs/community/discussions/194075)  
GitHub  
GitHub Copilot silently inserts itself as a co-author after I ...  
GitHub Copilot silently inserts … this behavior can be disabled by changing the \`Git: Add AI Co Author\` setting to \`off\` in VS Cod...
* [](https://fabiorehm.com/blog/2026/03/02/our-coding-agent-commits-deserve-better-than-co-authored-by/)  
fabiorehm.com  
Our coding agent commits deserve better than Co-Authored-By · fabiorehm.com  
Claude Code default commits use \`Co-Authored-By: which misuses a human-oriented trailer and breaks formatting. Author prefers sepa...
* [](https://www.reddit.com/r/vscode/comments/1t1i8p5/copilot%5Fis%5Fa%5Fcoauthor%5Fso%5Fthis%5Fcode%5Fbelongs%5Fto/)  
Reddit·r/vscode  
Copilot is a co-author, so this code belongs to Copilot. - Reddit  
Copilot feature automatically adds a 'Co-authored-by: Copilot' trailer to Git commit messages, which some users found unexpected a...

Show all

## what do ppl say

what do ppl say

11:26 PM

### what do ppl say

The developer community largely pushes back against making AI Git co-authorship the default, viewing it as a mix of **sneaky marketing, messy Git hygiene, and misplaced accountability**. While a smaller group of engineers and enterprise teams appreciate the transparency, the broader consensus favors opt-in tracking rather than silent, default trailers.

#### The Backlash Against Defaults

* **Growth hacking and free advertising.** Many developers on Hacker News and Reddit argue that `Co-authored-by: Claude` or `Copilot` trailers act as viral marketing baked directly into public repositories. As noted in a [LucidShark analysis of the Copilot controversy](https://lucidshark.com/blog/copilot-co-author-git-attribution-ai-code-quality-2026), developers view automatic attribution as "corporate growth-hacking dressed up as feature development" that puts vendor avatars in project contributor lists.
* **Accountability without responsibility.** Engineers frequently point out that a coding agent is a tool, not a peer. As developer Fabio Rehm wrote in his critique on [why coding agent commits deserve better](https://fabiorehm.com/blog/2026/03/02/our-coding-agent-commits-deserve-better-than-co-authored-by/), an AI cannot be paged when production breaks, so the human engineer reviewing and committing the code bears 100% of the responsibility.
* **Silent insertion and workplace risk.** In May 2026, Microsoft faced intense backlash after a VS Code update flipped `git.addAICoAuthor` to `all` by default—even injecting Copilot tags when AI features were disabled. According to [TechRadar's coverage of the VS Code reversal](https://www.techradar.com/pro/that-is-unacceptable-in-a-professional-development-workflow-microsoft-acts-after-vs-code-gives-copilot-credit-for-work-a-human-developer-did), developers worried that silent tags could make it look like they were using unapproved AI tools at strict companies, forcing Microsoft to issue an apology and revert the setting.
* **Copyright and licensing confusion.** Legal analysts and open-source maintainers point out that listing an AI as a co-author creates murky intellectual property signals. As explored in [Javier Aguilar's breakdown of the Claude co-author debate](https://www.javieraguilar.ai/en/blog/claude-coauthor-legal-debate/), implying joint authorship with a non-human entity complicates copyright claims and can trigger automated license-compliance scanners on enterprise repos.

#### Why Some Developers Support It

* **Audit trails and code review.** On Hacker News, some maintainers argue that explicit AI trailers help reviewers spot low-effort "vibe coded" pull requests that require closer scrutiny for subtle logic bugs or security flaws.
* **Enterprise compliance.** Engineering managers at regulated companies often want clear provenance tracking to measure AI adoption, debug agent-introduced regressions, and satisfy internal governance rules.
* **Workarounds over defaults.** Even among developers who dislike default co-author trailers, many on [r/ClaudeWorkflows](https://www.reddit.com/r/ClaudeWorkflows/comments/1wg9iph/workflow%5Fprevent%5Fai%5Fagents%5Ffrom%5Fadding/) and r/ClaudeAI note that teams prefer deterministic controls—like `settings.json` overrides, custom `Signed-off-by` trailers, or pre-commit hooks—rather than letting the vendor decide how Git history is formatted.

If you are deciding how to handle this on your own projects, let me know:

* Whether you are managing a **personal repo or a team/enterprise codebase**
* Which **agent or editor** your workflow relies on

I can share the most common team policies or exact configs to enforce your preferred standard.

# pros cons of using git wo meaningful commit messages and keep all these on like changes.md

Using vague Git commits alongside a separate `CHANGES.md` file is a **viable workflow for solo developers, though it breaks down quickly in team environments or complex debugging**. While it separates high-level release notes from messy work-in-progress snapshots, it sacrifices Git's built-in tracking tools.

Here is a breakdown of the trade-offs of this approach.

### Pros

* **Faster development flow:** You do not have to stop and think about phrasing every time you save a checkpoint. You can commit rapidly with messages like "wip" or "fix" and stay focused on coding.
* **Cleaner user-facing history:** A curated `CHANGES.md` (or `CHANGELOG.md`) hides noisy internal refactors and typos. Users and stakeholders get a clean, readable summary of actual features and fixes.
* **Centralized release notes:** Having a single markdown file makes it easy to copy and paste updates into GitHub Releases, emails, or documentation without filtering through dozens of technical commits.

### Cons

* **Broken `git blame` and history:** When you inspect a specific line of code months later to see why it was written, `git blame` will point to a useless message like "update" instead of explaining the business logic behind the change.
* **Painful debugging with `git bisect`:** Finding which commit introduced a bug becomes much harder when commit messages do not describe what each snapshot actually changed.
* **Merge conflicts on `CHANGES.md`:** In a team setting, having every developer edit the same markdown file on every branch causes constant merge conflicts.
* **Disconnected context:** You lose the direct link between the _why_ (the description in `CHANGES.md`) and the _what_ (the exact code diff in the Git commit).

### A Middle-Ground Alternative

If you want the speed of messy commits without losing a clean Git history, consider **interactive rebasing or squash merging**.

* **Commit freely locally:** Make as many quick, unpolished commits on your feature branch as you want while working.
* **Squash before merging:** When the feature is done, squash those messy commits into one clean commit with a proper message before merging into your main branch.
* **Automate your changelog:** If you follow a simple prefix format on those final squashed commits (like `feat:` or `fix:`), tools like `standard-version` or `release-please` can automatically generate your `CHANGES.md` file for you.

If you'd like, let me know:

* Whether you are **working solo or on a team**
* How you **deploy or release** your code

I can help you set up a lightweight Git workflow or an automated changelog tool that fits your habits.

# does pi agent support acp

11:53 PM

### does pi agent support acp

 \[Highlight start\] **Yes, the Pi coding agent supports the Agent Client Protocol (ACP) through official registry adapters and community extensions** \[Highlight end\] **.** While Pi's core binary natively uses its own headless JSONL RPC mode (`--mode rpc`), there is an active ecosystem that bridges Pi to ACP in both directions. [](https://zed.dev/acp/agent/pi)

#### Running Pi Inside ACP-Compatible Editors

If you want to use Pi as your coding agent inside an IDE like Zed or JetBrains, you can use an ACP adapter. [](https://github.com/svkozak/pi-acp)

* **Official ACP Registry Adapter.** The [pi-acp adapter](https://github.com/svkozak/pi-acp) translates ACP JSON-RPC 2.0 over stdio into Pi's native `--mode rpc` dialect. You can install it directly from the [Zed ACP Registry](https://zed.dev/acp/agent/pi) or run it manually via `npx pi-acp`. [](https://github.com/svkozak/pi-acp)
* **Supported Features.** The adapter supports session persistence, slash commands, Pi skills, context usage tracking, and structured diffs. [](https://github.com/svkozak/pi-acp)
* **Current Limitations.** According to ongoing [Pi GitHub discussions](https://github.com/earendil-works/pi/discussions/4444), because `pi-acp` acts as a translation bridge rather than a native transport, it does not support client filesystem/terminal delegation for remote SSH/WSL environments or MCP passthrough. [](https://github.com/earendil-works/pi/discussions/4444)

#### Using ACP Agents Inside Pi

If you are running Pi in your terminal and want it to control or delegate tasks to other ACP-compatible agents (such as Gemini CLI, Claude, or Codex), you can install Pi packages: [](https://pi.dev/packages/pi-acp-agents)

* **Multi-Agent Orchestration.** Installing the [pi-acp-agents package](https://pi.dev/packages/pi-acp-agents) (`pi install npm:pi-acp-agents`) turns Pi into an ACP client. It adds tools like `acp_prompt` and `acp_compare` so Pi can spawn and coordinate external ACP agents. [](https://pi.dev/packages/pi-acp-agents)
* **ACP Provider Mode.** Installing the [pi-acp-provider package](https://pi.dev/packages/pi-acp-provider?page=32) (`pi install npm:pi-acp-provider`) bypasses Pi's own tool loop and delegates all planning, file edits, and command execution directly to an underlying ACP agent. [](https://pi.dev/packages/pi-acp-provider?page=32)

_(Note: Another Pi extension called [Agentic Control Plane](https://agenticcontrolplane.com/blog/pi-acp-extension) also uses the acronym `acp`, which handles workspace security policies rather than the Agent Client Protocol.)_ [](https://agenticcontrolplane.com/blog/pi-acp-extension)

Are you looking to **run Pi inside an editor** like Zed, or **connect Pi to other ACP agents** from your terminal? Let me know your setup and I can share the exact configuration steps.

+4

* [](https://github.com/svkozak/pi-acp)  
GitHub  
GitHub - svkozak/pi-acp: ACP adapter for pi coding agent · GitHub  
Session persistence pi stores its own sessions \* Slash commands Loads file-based slash commands compatible with pi's. Supports ski...
* [](https://zed.dev/acp/agent/pi)  
Zed  
Pi - ACP Agent - Zed  
Use an ACP-compatible editor with registry support to install Pi from the ACP Registry. \* Run manually if needed Start Pi with: np...
* [](https://github.com/earendil-works/pi/discussions/4444)  
GitHub  
Supporting the Agent Client Protocol (ACP) · earendil-works pi  
It has some limitations (no filesystem or terminal delegation, no MCP passthrough). the bridge has structural limits: no client FS...

Show all

## what are the agents that support acp

what are the agents that support acp

11:53 PM

### what are the agents that support acp

Over **50 coding and general-purpose agents** support the Agent Client Protocol (ACP), either natively out of the box or via an official or community adapter. [](https://agentclientprotocol.com/get-started/agents)

You can browse the full, continuously updated directory in the [ACP Registry](https://agentclientprotocol.com/get-started/agents) or install them directly inside clients like [Zed](https://zed.dev/docs/ai/external-agents) and JetBrains IDEs. [](https://www.jetbrains.com/acp/)

#### Major & Popular ACP Agents

| Agent                  | Integration Type                                | Command / Registry ID     |
| ---------------------- | ----------------------------------------------- | ------------------------- |
| **Claude Code**        | Adapter (@agentclientprotocol/claude-agent-acp) | claude-acp                |
| **Codex CLI**          | Adapter (@agentclientprotocol/codex-acp)        | codex-acp                 |
| **Cursor**             | Native (CLI)                                    | cursor-agent acp          |
| **Gemini CLI**         | Native                                          | gemini --acp              |
| **GitHub Copilot CLI** | Native                                          | npx @github/copilot --acp |
| **Google Antigravity** | Native                                          | agy\_acp\_server.par      |
| **Junie** (JetBrains)  | Native                                          | junie --acp=true          |
| **OpenCode**           | Native                                          | opencode acp              |
| **Pi Coding Agent**    | Community Adapter (pi-acp)                      | npx pi-acp                |

#### Other Notable Supported Agents

Beyond the flagship tools listed in the [AgentRQ ACP overview](https://agentrq.com/blog/which-coding-agents-support-acp-agent-client-protocol), the ecosystem includes several specialized and open-source CLI agents: [](https://agentrq.com/blog/which-coding-agents-support-acp-agent-client-protocol)

* **Open-Source & Terminal Coding Agents.** Cline (`npx cline --acp`), goose (`goose acp`), Kilo (`npx @kilocode/cli acp`), OpenHands, Aider/Amp (via `amp-acp`), Autohand Code, and VT Code.
* **Model-Specific Coding CLIs.** Qwen Code (`npx @qwen-code/qwen-code --acp`), Kimi CLI (`kimi acp`), Mistral Vibe, DeepSeek / GLM / Groq (via `acp-llm-adapter`), MiniMax Code, and Grok Build.
* **Enterprise & Specialized Agents.** Devin, Factory Droid, Poolside, Kiro CLI, Auggie CLI, Qoder CLI, and Cortex Code. [](https://agentclientprotocol.com/get-started/registry)

#### ACP Clients (Where You Can Run Them)

Because ACP decouples the agent from the interface, any of the agents above can run inside ACP-compatible clients, including **Zed**, **JetBrains IDEs** (IntelliJ, PyCharm, WebStorm, etc.), **Neovim**, **Emacs**, **Obsidian**, **Marimo**, and orchestrators like **Pi** (via `pi-acp-agents`) or **OpenHands**. [](https://agentclientprotocol.com/get-started/introduction)

Are you looking to connect a **specific agent** to an editor, or trying to **compare options** for a particular workflow (like local models, terminal orchestration, or IDE integration)? Let me know and I can help you narrow down the best setup.

+6

* [](https://agentclientprotocol.com/get-started/introduction)  
Agent Client Protocol  
Introduction - Agent Client Protocol  
Agent Client Protocol (ACP): Standardizes communication between code editors/IDEs and coding agents … decouples editors and agents...
* [](https://agentclientprotocol.com/get-started/agents)  
Agent Client Protocol  
Agents - Agent Client Protocol  
The following agents can be used with an ACP Client: OpenCode \* OpenHands \* Pi (via pi-acp adapter)
* [](https://www.jetbrains.com/acp/)  
JetBrains  
Agent Client Protocol (ACP): Use Any Coding Agent in Any IDE  
Open-source, shared IDE-agent interoperability protocol developed by JetBrains and Zed to prevent vendor lock-in across local, rem...

Show all

## acp creator background

acp creator background

11:55 PM

### acp creator background

The  \[Highlight start\] **Agent Client Protocol (ACP) was created by Zed Industries** \[Highlight end\]  (the team behind the Rust-based Zed code editor) in **August 2025**, with Google providing the initial reference integration via Gemini CLI. It was quickly joined by **JetBrains** as a co-developer and is now openly governed under an Apache 2.0 license. [](https://zed.dev/acp)

#### Who Is Behind Zed Industries?

* **Founding Pedigree.** Zed Industries was co-founded by **Nathan Sobo** (CEO) along with Max Brunsfeld and Antonio Scandurra—the core engineering team that originally created **Atom** (GitHub's open-source text editor) and **Tree-sitter** (the incremental parsing library used across modern editors).
* **Editor-First Philosophy.** Having spent over a decade building developer environments, Sobo and the Zed team viewed the editor as the primary interface between humans, source code, and collaborators. [](https://tessl.io/blog/zed-debuts-agent-client-protocol-to-connect-ai-coding-agents-to-any-editor)

#### Why Zed Created ACP

* **Solving the M×N Integration Problem.** As CLI-based coding agents (like Claude Code, Gemini CLI, and Goose) exploded in popularity in 2025, each agent required bespoke plugins or custom glue code to work inside different editors. Rather than building one-off integrations for every single agent, Zed designed a universal JSON-RPC 2.0 standard over `stdio`.
* **The "LSP Moment" for AI Agents.** Zed explicitly modeled ACP after Microsoft's **Language Server Protocol (LSP)**. Just as LSP separated language intelligence (linters, autocomplete) from the editor UI, ACP separates agentic reasoning and tool loops from the editor's user interface.
* **Preventing Vendor Lock-In.** By open-sourcing the specification and inviting direct competitors like [JetBrains](https://blog.jetbrains.com/ai/2025/10/jetbrains-zed-open-interoperability-for-ai-coding-agents-in-your-ide/) to co-develop the standard and launch a shared ACP Registry in early 2026, Zed aimed to keep editors neutral hubs where developers can freely swap models and agents without switching their workspace. [](https://www.youtube.com/watch?v=n11pDnBXPgk&t=167)

_(Note: IBM Research also developed an open-source protocol with the same acronym—**Agent Communication Protocol (ACP)**—for agent-to-agent orchestration, which is distinct from Zed's editor-to-agent Agent Client Protocol.)_ [](https://www.morphllm.com/agent-client-protocol)

Would you like to explore how **ACP compares to Anthropic's MCP** (Model Context Protocol), or see how to **build or wrap your own agent** using the ACP SDK?

+4

* [](https://agentclientprotocol.com/get-started/introduction)  
Agent Client Protocol  
Agent Client Protocol: Introduction  
Introduction. Copy pageCopy page. Get started with the Agent Client Protocol. Copy pageCopy page. The Agent Client Protocol (ACP) ...
* [](https://www.youtube.com/watch?v=n11pDnBXPgk&t=167)  
YouTube·JetBrains  
What Is the Agent Client Protocol – and Why JetBrains and Zed ...  
The core problem ACP aims to solve is the fragmentation and friction developers face with the increasing number of coding agents a...  
1m
* [](https://zed.dev/acp)  
Zed  
Zed — Agent Client Protocol  
Created by Zed as an open standard under the Apache license for agent interoperability across editors; provides multi-file editing...

Show all

# model context protocol creator background

11:55 PM

### model context protocol creator background

The **Model Context Protocol (MCP)** was co-created by  \[Highlight start\] **David Soria Parra** and **Justin Spahr-Summers** \[Highlight end\]  while working as engineers at [Anthropic](https://www.anthropic.com/news/model-context-protocol) in mid-2024\. Both engineers brought extensive backgrounds in open-source software, developer tooling, and infrastructure prior to developing the standard. [](https://latent.space/p/mcp/)

#### David Soria Parra

David Soria Parra is a London-based Member of Technical Staff at Anthropic who serves as co-creator, lead maintainer, and technical committee chair for the MCP ecosystem. [](https://uk.linkedin.com/in/david-soria-parra-4a78b3a)

* **Open-Source Leadership.** Early in his career, Soria Parra worked as a core developer for the PHP programming language and served as the release manager for PHP 5.4 and 5.5\. He also made major contributions to distributed version control systems, including Git and Mercurial. [](https://experimentalworks.net/about/)
* **Meta & Developer Tooling.** Before joining Anthropic in April 2024, Soria Parra spent roughly a decade at Facebook (later Meta). He worked on developer infrastructure and eventually managed engineering organizations focused on static analysis, simulation-based testing, and tooling for VR, AR, and custom silicon. [](https://uk.linkedin.com/in/david-soria-parra-4a78b3a)
* **Venture & Advisory.** Between his tenure at Meta and Anthropic, he worked as an Entrepreneur in Residence at Sutter Hill Ventures in London. He also serves as a scout for Sequoia. [](https://uk.linkedin.com/in/david-soria-parra-4a78b3a)

#### Justin Spahr-Summers

Justin Spahr-Summers co-invented MCP and helped design its core host, client, and server architecture. He is recognized in the project's governance as a co-inventor and lead maintainer emeritus. 

* **iOS & macOS Open-Source Ecosystem.** Spahr-Summers is well known in the Apple developer community for creating and maintaining foundational open-source libraries. His notable projects include ReactiveCocoa (reactive programming in Swift and Objective-C), Carthage (a decentralized dependency manager), Mantle, and Squirrel. [](https://jspahrsummers.com/)
* **Engineering Career.** Prior to joining Anthropic, Spahr-Summers held software engineering roles at major tech companies, including GitHub and Meta, alongside periods of independent software consulting. [](https://jspahrsummers.com/)
* **Post-Anthropic Work.** After leaving Anthropic in September 2025, Spahr-Summers shifted to full-time independent game development in the United Kingdom as the director of [Fern Forest Games](https://jspahrsummers.com/), focusing on emergent AI experiences in games. [](https://uk.linkedin.com/in/jspahrsummers)

#### How They Created MCP

The protocol grew out of a practical internal bottleneck rather than a top-down corporate directive. [](https://www.youtube.com/watch?v=m2VqaNKstGc&t=128)

* **The M×N Integration Problem.** In July and August 2024, Soria Parra and Spahr-Summers grew frustrated with having to manually copy files between Claude Desktop and local code editors. Drawing inspiration from the Language Server Protocol (LSP), they envisioned a universal standard—initially nicknamed "Claude Connect"—to prevent developers from building custom integrations for every individual app and data source.
* **Rapid Prototyping & Open Release.** Spahr-Summers built the initial integration for Claude Desktop while Soria Parra built a proof-of-concept for the Zed code editor. Following an internal Anthropic hackathon where employees used the protocol to control hardware like a 3D printer, Anthropic officially released MCP as an open-source standard on November 25, 2024, before later donating it to the Linux Foundation. [](https://www.anthropic.com/news/model-context-protocol)

Would you like to explore how **MCP's technical architecture** works, or see how its **governance under the Linux Foundation** is structured today?

+10

* [](https://latent.space/p/mcp/)  
Latent Space  
The Creators of Model Context Protocol — Latent Space  
Model Context Protocol (MCP) is an open-source, bidirectional communication protocol created by Anthropic engineers David and Just...
* [](https://www.anthropic.com/news/model-context-protocol)  
Anthropic  
Introducing the Model Context Protocol - Anthropic  
MCP was created at Anthropic by David Soria Parra and Justin Spahr-Summers. We're committed to building MCP as a collaborative, op...
* [](https://uk.linkedin.com/in/david-soria-parra-4a78b3a)  
LinkedIn·David Soria Parra  
David Soria Parra - Member of Technical Staff at Anthropic | Sequoia Scout | ex-Facebook | LinkedIn  
David Soria Parra: Member of Technical Staff at Anthropic, Sequoia Scout, ex-Facebook senior manager, and co-creator of the Model ...

Show all

## what do ppl say on mcp

what do ppl say on mcp

11:55 PM

### what do ppl say on mcp

Public and developer sentiment around the **Model Context Protocol (MCP)** is sharply divided between enthusiasm for its role as a universal standard and skepticism over its complexity, token costs, and security vulnerabilities. [](https://news.ycombinator.com/item?id=49779329)

Developers frequently compare it to **"USB-C for AI,"** praising how it eliminates repetitive integration work while criticizing it as overengineered for simpler tasks. [](https://repost.aws/articles/ARK3Jah0ZyS8GkPTsOJSnZkA/model-context-protocol-mcp-why-it-matters)

#### What Proponents Praise

* **Write Once, Connect Anywhere.** Supporters highlight that MCP solves the fragmented integration problem by giving AI models a shared language. Instead of writing custom glue code for every combination of AI client and data source, developers can build one MCP server and connect it across multiple platforms like Claude, Cursor, and enterprise agents. [](https://www.youtube.com/watch?v=cGuyrANVi4A)
* **Simplicity Over Heavy Frameworks.** One point of agreement among users on [r/mcp](https://www.reddit.com/r/mcp/comments/1jhu0ad/mcp%5Fis%5Fgetting%5Foverhyped%5Fis%5Fit%5Fthe%5Fnext%5Fbig%5Fthing/) is that MCP succeeds because it is a lightweight set of guidelines rather than a bloated software framework. [](https://www.reddit.com/r/mcp/comments/1jhu0ad/mcp%5Fis%5Fgetting%5Foverhyped%5Fis%5Fit%5Fthe%5Fnext%5Fbig%5Fthing/)
* **Enterprise Governance & Credential Hiding.** In discussions on [Hacker News](https://news.ycombinator.com/item?id=49779329), advocates emphasize that MCP is valuable in enterprise and non-CLI environments because it centralizes audit logging, enforces access controls, and keeps sensitive API keys hidden inside the server rather than exposing them directly to the model.

#### Common Criticisms & Pushback

* **Context Bloat & Token Burn.** A frequent complaint is that connecting too many MCP servers floods the AI's context window with massive tool definitions. Critics point out that this drives up token costs and actually degrades the model's reasoning and tool-selection accuracy. [](https://www.reddit.com/r/mcp/comments/1jl10ne/is%5Fmcp%5Freally%5Fthat%5Fgood/)
* **Reinventing the Wheel.** Skeptics argue that for straightforward workflows, wrapping standard REST APIs or command-line tools in an MCP server introduces unnecessary architectural overhead. As covered in analyses by Vellum and [Medium](https://julsimon.medium.com/the-truth-about-mcp-pros-cons-real-world-use-cases-2e51bbec7219), many developers prefer simple function calling or existing OpenAPI standards over maintaining a separate protocol layer. [](https://julsimon.medium.com/the-truth-about-mcp-pros-cons-real-world-use-cases-2e51bbec7219)
* **Statefulness & Scaling Friction.** Because MCP relies on long-lived, stateful connections, infrastructure engineers note that it clashes with modern serverless architectures (like AWS Lambda or Azure Functions), making scaling and deployment more cumbersome. [](https://medium.com/@nayan.j.paul/personal-and-honest-review-of-mcp-so-far-from-a-practical-point-of-view-7e8112c8b1b5)

#### Security Concerns

Security researchers and cybersecurity communities have raised significant alarms regarding the rapid, unchecked adoption of third-party MCP servers: [](https://www.reddit.com/r/programming/comments/1ldignq/mcp%5Fsecurity%5Fflaws%5Fwhat%5Fdevelopers%5Fneed%5Fto%5Fknow/)

* **Supply Chain & Malicious Servers.** Commenters on [r/programming](https://www.reddit.com/r/programming/comments/1ldignq/mcp%5Fsecurity%5Fflaws%5Fwhat%5Fdevelopers%5Fneed%5Fto%5Fknow/) agree that the ecosystem is vulnerable to supply chain attacks—such as "rug pull" updates where a trusted server turns malicious—and strongly recommend auditing code rather than blindly installing community servers.
* **Prompt Injection & Tool Poisoning.** Security experts warn about indirect prompt injections (where hidden instructions inside a GitHub issue or support ticket hijack an MCP-connected agent) and "tool poisoning," where deceptive tool descriptions trick an AI into exfiltrating sensitive local data.
* **Inadequate Auditing Tools.** Users on [r/cybersecurity](https://www.reddit.com/r/cybersecurity/comments/1s5vvhy/mcp%5Fmodel%5Fcontext%5Fprotocol%5Fis%5Fmoving%5Ffast%5Fand%5Fso/) note that traditional HTTP security scanners often miss protocol-level exploits like capability escalation, leaving organizations exposed if they deploy servers without strict sandboxing and human-in-the-loop approvals. [](https://www.reddit.com/r/cybersecurity/comments/1s5vvhy/mcp%5Fmodel%5Fcontext%5Fprotocol%5Fis%5Fmoving%5Ffast%5Fand%5Fso/)

Are you evaluating **MCP for a specific project**, or would you like to compare it against **alternatives like standard tool calling or CLIs**?

+17

* [](https://digiday.com/media/wtf-is-model-context-protocol-mcp-and-why-should-publishers-care/)  
Digiday  
WTF is Model Context Protocol, and why should publishers ...  
Model Context Protocol (MCP) is a buzzword gaining more traction, especially as publishers think about how to prepare for the agen...
* [](https://www.youtube.com/watch?v=cGuyrANVi4A)  
YouTube·Google Cloud Tech  
How Model Context Protocol (MCP) actually works  
actually is why it exists. and how it's changing the way models interact with the world we'll walk through the core ideas step by ...  
7:58
* [](https://news.ycombinator.com/item?id=49779329)  
Hacker News  
MCP was always a bad idea? | Hacker News  
MCP (Model Context Protocol) debate: proponents value access control, credential hiding, audit logging, standardized discovery, bl...

Show all

## what do ppl say on mcp v cli

what do ppl say on mcp v cli

11:57 PM

### what do ppl say on mcp v cli

The debate over **MCP vs. CLI** comes down to a core trade-off: **token efficiency and composability (CLI) versus standardized security and cross-platform reach (MCP)**. [](https://www.neteye-blog.com/blog/2026/09/29/mcp-or-cli-pros-cons-and-the-real-limits-with-local-models/)

In developer communities, the consensus has shifted away from declaring a single winner toward matching the tool to the environment. One point of agreement among users on [r/ClaudeCode](https://www.reddit.com/r/ClaudeCode/comments/1sems01/mcp%5Fvs%5Fcli%5Fis%5Flike%5Fdebating%5Fcash%5Fvs%5Fcard%5Fdepends/) is a simple rule of thumb: if an AI agent already has shell access, CLI is leaner and more capable; if it lacks terminal access (such as in a web chat interface or a sandboxed enterprise app), MCP is the necessary choice. [](https://circleci.com/blog/mcp-vs-cli/)

#### Quick Comparison

| Dimension             | CLI (Command-Line Interface)                                                                  | MCP (Model Context Protocol)                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Token Cost**        | **Low (On-Demand):** Zero upfront context cost; tokens are only spent when a command runs.    | **High (Upfront):** Injects full JSON tool schemas into the system prompt on every turn.         |
| **Composability**     | **High:** Agents can pipe commands together (grep, jq, awk) to filter data before reading it. | **Low:** Tools run as isolated calls that often return bulky, unfiltered payloads.               |
| **Model Familiarity** | **Native:** LLMs are heavily pre-trained on common CLIs (git, gh, aws, kubectl).              | **Schema-Dependent:** Relies entirely on how well the server author wrote the tool descriptions. |
| **Security & Auth**   | **Ambient:** Inherits the local user's full permissions and environment credentials.          | **Scoped:** Supports per-user OAuth, tenant isolation, and centralized audit trails.             |
| **Best Environment**  | Local coding agents (Claude Code, Cursor, Codex) and rapid inner-loop debugging.              | Remote web/desktop apps, non-technical users, and multi-tenant production systems.               |

#### Why Many Developers Prefer CLIs

* **Avoiding the "Token Tax."** A major criticism of MCP is context bloat. Connecting a complex MCP server—like GitHub's—can dump tens of thousands of tokens of tool definitions into the context window before the agent does any work. With a CLI, the agent uses zero context until it invokes a tool. [](https://news.ycombinator.com/item?id=47208398)
* **Unix Composability & Filtering.** As noted in discussions on [Hacker News](https://news.ycombinator.com/item?id=47208398), developers love CLIs because agents can chain commands together. Instead of pulling an entire 500-line JSON payload into context via an MCP call, an agent can run a CLI command piped into `jq` or `grep` to extract only the exact line it needs. [](https://www.youtube.com/watch?v=g9JIUM0MHgQ&t=155)
* **Leveraging Training Data.** Modern LLMs have seen millions of examples of standard terminal commands during training. For mature tools like `git` or `docker`, agents rarely need a protocol wrapper to understand how to use them.

#### Where MCP Still Wins

* **Enterprise Security & Multi-Tenancy.** While CLI's ambient authentication is fast for a solo developer on a laptop, engineers point out that giving an autonomous agent raw shell access is a non-starter for customer-facing products. On [r/startups](https://www.reddit.com/r/startups/comments/1rv8tcx/mcp%5Fvs%5Fcli%5Fwhats%5Fyour%5Ftake%5Fon%5Fthe%5Fdiscussion%5Fin/), opinions are mixed on whether internal dev tools are safe from CLI risks, but users agree that MCP is much better suited for complex workflows requiring per-user OAuth delegation, strict permission boundaries, and audit logs. [](https://www.reddit.com/r/startups/comments/1rv8tcx/mcp%5Fvs%5Fcli%5Fwhats%5Fyour%5Ftake%5Fon%5Fthe%5Fdiscussion%5Fin/)
* **Non-Terminal Environments.** Most end users do not live in a terminal. MCP provides a zero-install, plug-and-play way for desktop chat apps, web interfaces, and non-technical users to connect to external SaaS platforms without configuring local binaries or managing API keys. [](https://manveerc.substack.com/p/mcp-vs-cli-ai-agents)
* **Bridging the Gap with "Skills."** Many developers are adopting a hybrid approach using lightweight **Markdown skill files** alongside CLIs. Instead of loading massive MCP schemas, a skill file gives the agent a 30-to-50-token summary of a custom CLI tool and instructs it to run `--help` only if it decides to use that tool—capturing MCP's discoverability without paying its token penalty. [](https://www.youtube.com/watch?v=TuIZoFyBKIM&vl=en&t=55)

For deeper technical breakdowns, developer blogs from [Medium](https://medium.com/@girmish/cli-agent-vs-mcp-a-practical-comparison-for-students-startups-and-developers-2026-b9fe30a96559) and [NetEye](https://www.neteye-blog.com/blog/2026/09/29/mcp-or-cli-pros-cons-and-the-real-limits-with-local-models/) also highlight how local models with smaller context windows suffer heavily from MCP schema overhead compared to lean CLI execution. [](https://medium.com/@girmish/cli-agent-vs-mcp-a-practical-comparison-for-students-startups-and-developers-2026-b9fe30a96559)

[MCP vs API vs CLI: How Should AI Agents Connect to Your App?18 days ago · 10+ commentsr/LLMDevsReddit](https://www.reddit.com/r/LLMDevs/comments/1xp9b3j/mcp%5Fvs%5Fapi%5Fvs%5Fcli%5Fhow%5Fshould%5Fai%5Fagents%5Fconnect%5Fto/)

[Skill + CLI or MCPPopular comment · There is some kind of paper that quotes 26x more tokens for MCP. I use command line- it has everything, discovery, autoload usage, lots of training, the works.2 months ago · 30+ commentsr/AI\_AgentsReddit](https://www.reddit.com/r/AI%5FAgents/comments/1wh0ckp/skill%5Fcli%5For%5Fmcp/)

[MCP vs API vs CLI: I built all 3 for agents. Here's my take...Popular comment · The client side you credit to MCP is already there for a CLI. CC's client for every CLI is the shell. In about 70,000 tool calls over 6 weeks, CC made fewer than 80 to MCP servers. It runs small command-line tools instead: a Clojure REPL client, a backup command, a browser driver. None of those needed an MCP.19 days ago · 10+ commentsr/ClaudeCodeReddit](https://www.reddit.com/r/ClaudeCode/comments/1xofjpe/mcp%5Fvs%5Fapi%5Fvs%5Fcli%5Fi%5Fbuilt%5Fall%5F3%5Ffor%5Fagents%5Fheres/)

If you are deciding between the two for your own setup, let me know:

* **Where the agent runs** (local terminal, cloud backend, or web UI)
* **Who uses it** (just you, an internal team, or external customers)

I can recommend the cleanest architecture for your use case.

+12

* [](https://circleci.com/blog/mcp-vs-cli/)  
CircleCI  
MCP vs. CLI for AI-native development - CircleCI  
AI has put a new kind of scrutiny on developer tooling. When a developer works alongside an AI coding assistant, the tools that as...
* [](https://www.youtube.com/watch?v=g9JIUM0MHgQ&t=155)  
YouTube·IBM Technology  
CLI vs MCP: How AI Agents Choose the Right Tool for the Job  
CLI and MCP are two methods for AI agents to interact with the external environment. CLI involves an agent using command-line inte...  
31s
* [](https://www.youtube.com/watch?v=CnAxiSFQ9GY)  
YouTube·Chrome for Developers  
How to choose between DevTools CLI and MCP for coding ...  
The main hidden trade-off between DevTools CLI and MCP is the upfront context window tax. When an MCP server is registered with ov...  
5:45

Show all

## what do ppl say on mcp v custom instructions and tools per intergration

what do ppl say on mcp v custom instructions and tools per intergration

11:58 PM

### what do ppl say on mcp v custom instructions and tools per intergration

The debate over **MCP vs. custom instructions and per-integration tools** (often referred to as native function calling or bespoke API wrappers) centers on a core engineering trade-off:  \[Highlight start\] **cross-platform portability (MCP) versus tight, deterministic control (custom integrations)** \[Highlight end\] . [](https://www.prefect.io/resources/mcp-vs-function-calling)

In developer communities, people generally view these not as mutually exclusive technologies—since MCP uses function calling under the hood—but as competing architectural patterns for how much control you want to hand over to a standard protocol versus keeping inside your own application code. [](https://scalar.com/learn/mcp/mcp-vs-function-calling)

#### Quick Comparison

| Dimension              | Custom Instructions & Tools (Per Integration)                                                           | MCP (Model Context Protocol)                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Maintenance**        | **High (M × N):** Requires rewriting tool schemas, glue code, and auth per app or LLM provider.         | **Low (M + N):** Build one MCP server and connect it to any MCP-compatible client or model.                  |
| **Precision & Tuning** | **High:** You tailor system prompts, filter outputs, and pre-fill parameters specifically for your app. | **Generic:** Relies on third-party or standardized tool descriptions that may not fit your exact workflow.   |
| **Latency & Overhead** | **Minimal:** Runs in-process with direct API calls and zero protocol translation overhead.              | **Higher:** Adds a client-server boundary (JSON-RPC over stdio/HTTP) and runtime discovery.                  |
| **Control & Testing**  | **Deterministic:** Easier to validate parameters, handle errors, and unit-test end-to-end.              | **Dynamic:** Client discovers tools at runtime; updates to external servers can unexpectedly shift behavior. |

#### Why Many Teams Stick With Custom Tools & Instructions

* **Fine-Grained Control Over Context & Outputs.** On [r/mcp](https://www.reddit.com/r/mcp/comments/1nshviw/mcp%5Fvs%5Ftool%5Fcalls/), opinions are mixed on which approach is better for production, with several developers noting that custom tool calls are often more effective because you keep full control over parameter validation, error handling, pre-filling sensitive IDs, and trimming bulky API responses before they bloat the LLM's context window. [](https://www.reddit.com/r/mcp/comments/1nshviw/mcp%5Fvs%5Ftool%5Fcalls/)
* **Tailored Prompt Engineering.** When building a single, dedicated AI product, engineers point out that writing custom instructions paired with bespoke tool schemas lets you optimize the exact wording and few-shot examples for a specific model—something generic, one-size-fits-all MCP servers rarely get right out of the box. [](https://thinkia.com/ai-decisions/mcp-vs-custom-api-integrations/)
* **Simpler Architecture & Lower Latency.** As highlighted in engineering guides from [Thinkia](https://thinkia.com/ai-decisions/mcp-vs-custom-api-integrations/) and [Goran Stimac](https://goranstimac.com/blog/tool-use-patterns-ai-agents-2026-function-calling-vs-mcp-vs-custom-integrations/), spinning up separate server processes and managing stateful connections is overkill if you only have one application talking to three or four internal APIs. [](https://medium.com/data-science-collective/mcp-vs-function-calling-how-should-your-agent-communicate-with-the-outside-world-8a5e15ec89ac)

#### Why Teams Choose MCP Instead

* **Eliminating Duplicate Glue Code.** One point of agreement among users on [r/mcp](https://www.reddit.com/r/mcp/comments/1jphxuu/difference%5Fbetween%5Fmcp%5Fand%5Ftraditional%5Ftoolcall/) is that MCP's biggest win is decoupling the tool supplier from the tool consumer. If your organization uses Claude Desktop, Cursor, an internal Slack bot, and a custom web agent, writing custom instructions and tool wrappers for each client quickly becomes unmaintainable. [](https://www.reddit.com/r/mcp/comments/1jphxuu/difference%5Fbetween%5Fmcp%5Fand%5Ftraditional%5Ftoolcall/)
* **Future-Proofing & Ecosystem Reach.** In a discussion on [Hacker News](https://news.ycombinator.com/item?id=44370905), developers point out that exposing capabilities as an MCP server lets you use those tools in your own app while simultaneously making your software plug-and-play for the broader ecosystem of AI clients without extra integration work. [](https://news.ycombinator.com/item?id=44370905)
* **Centralized Governance at Scale.** When managing dozens of integrations across multiple teams, contributors on r/mcp recommend pairing MCP with an API gateway so security, rate limiting, and multi-tenant authentication are enforced in one place rather than scattered across individual prompt templates and custom scripts.

#### The Emerging Middle Ground

Many production teams now split the difference. According to [First AI Movers](https://radar.firstaimovers.com/mcp-vs-custom-api-integrations-2026), a common pattern is using **custom tools and tailored system prompts** for core, latency-sensitive, or complex workflows inside a primary product, while using **MCP** for long-tail integrations (like connecting a user's Google Drive, Notion, or Jira) and internal developer tooling. [](https://www.youtube.com/watch?v=goU9VIXA8II&t=147)

Are you building a **single dedicated AI product** or supporting **multiple AI clients and internal tools**? Knowing your setup can help narrow down which pattern fits best.

+10

* [](https://www.reddit.com/r/ClaudeAI/comments/1h0w1z6/model%5Fcontext%5Fprotocol%5Fvs%5Ffunction%5Fcalling%5Fwhats/)  
Reddit·r/ClaudeAI  
Model Context Protocol vs Function Calling: What's the Big ...  
Function Calling vs. MCP: Function calling is typically seen as a simple request-response system for LLMs to interact with externa...
* [](https://www.reddit.com/r/mcp/comments/1nshviw/mcp%5Fvs%5Ftool%5Fcalls/)  
Reddit·r/mcp  
MCP vs Tool Calls - Reddit  
Tool Calls vs. MCP: Some users find that custom tool calls are more effective for production agents due to greater control over pa...
* [](https://www.prefect.io/resources/mcp-vs-function-calling)  
Prefect  
MCP vs Function Calling: When to Use Which  
MCP (Model Context Protocol): Separate server exposes tools via standardized protocol; clients discover tools at runtime; server h...

Show all

# what can you do w agent client protocol

12:02 AM

With the **Agent Client Protocol (ACP)**, you can  \[Highlight start\] connect any compatible AI coding agent to any supporting code editor or client application using a single open standard \[Highlight end\] . It acts like the Language Server Protocol (LSP) for AI agents, eliminating vendor lock-in and bespoke plugin development. [](https://agentclientprotocol.com/get-started/introduction)

### Core Capabilities

* **Mix and Match Editors and Agents.** You can run different coding agents—such as Claude Code, Gemini CLI, Codex, Cursor, or OpenCode—inside your preferred IDE like Zed, JetBrains IDEs, VS Code, or Neovim. You can even run multiple agents side-by-side in the same app for different tasks. [](https://www.jetbrains.com/acp/)
* **Stream Live Reasoning and Plans.** Agents send real-time progress updates to your editor's UI. This includes execution plans, thought chunks, streamed text responses, and tool call statuses. [](https://www.philschmid.de/acp-overview)
* **Manage Files and Terminals Safely.** Agents can read files (including unsaved editor buffers), propose code diffs, and run shell commands inside your workspace. For sensitive actions like deleting files or executing risky commands, the protocol pauses and asks for your explicit permission first. [](https://www.instagram.com/reel/De48CTVsT7o/?hl=en)
* **Preserve Settings and MCP Tools.** Your editor passes its existing workspace context and Model Context Protocol (MCP) servers directly to the agent when a session starts. Your tool connections and provider logins follow you seamlessly regardless of which agent you switch to. [](https://www.calummurray.ca/blog/intro-to-acp)
* **Run Local or Remote Agents.** You can launch local agents as background subprocesses over standard I/O (`stdio`), or connect to remote, cloud-hosted agents over HTTP and WebSockets. [](https://www.youtube.com/watch?v=YkNulwcc5jk&t=94)
* **Build and Distribute Custom Agents.** Using official SDKs or frameworks like [LangChain Deep Agents](https://docs.langchain.com/oss/python/deepagents/acp), you can wrap your own custom AI agent in ACP. Once built, it automatically works in every ACP-compatible editor without needing custom extensions. [](https://docs.langchain.com/oss/python/deepagents/acp)

### ACP vs. MCP

While they work together, they handle opposite sides of an AI agent: [](https://memu.pro/blog/agent-client-protocol-cross-platform-memory)

| Feature         | Agent Client Protocol (ACP)                                            | Model Context Protocol (MCP)                                          |
| --------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------- |
| **Connects**    | Code editors / UIs to AI agents                                        | AI agents to external tools and data                                  |
| **Primary Job** | Manages chat sessions, code diffs, terminal output, and user approvals | Gives agents access to databases, APIs, GitHub, and file utilities    |
| **Direction**   | The editor sends user prompts and receives streamed UI updates         | The agent calls external server tools to fetch context or take action |

Are you looking to **set up an existing agent** in your editor or **build your own custom ACP agent**? Let me know which IDE or framework you use, and I can walk you through the setup.

* [](https://agentclientprotocol.com/get-started/introduction)  
Agent Client Protocol  
Agent Client Protocol: Introduction  
The Agent Client Protocol (ACP) standardizes communication between code editors/IDEs and coding agents and is suitable for both lo...
* [](https://www.jetbrains.com/acp/)  
JetBrains  
Agent Client Protocol (ACP): Use Any Coding Agent in Any IDE  
ACP provides a shared communication protocol so editors and agents can interoperate without bespoke plugins, reducing overhead and...
* [](https://www.youtube.com/watch?v=YkNulwcc5jk&t=94)  
YouTube·AI Engineer  
ACP: The Universal Remote Control for AI Agents  
The Agent Client Protocol (ACP) addresses the problem of custom and bespoke interfaces to AI agent harnesses, which currently limi...  
7m

Show all

# what can you do w an agent that supports agent client protocol

12:04 AM

### what can you do w an agent that supports agent client protocol

With an agent that supports the **Agent Client Protocol (ACP)**, you can  \[Highlight start\] **plug and play the agent directly into any ACP-compatible code editor or IDE** without needing custom plugins or vendor lock-in \[Highlight end\] . Think of ACP as the Language Server Protocol (LSP) for AI coding assistants. [](https://agentclientprotocol.com/get-started/introduction)

#### Core Capabilities

* **Run in any compatible editor.** You can connect a single ACP agent—such as Claude Code, Gemini CLI, Codex CLI, or Junie—to editors like Zed, [JetBrains IDEs](https://www.jetbrains.com/acp/), Neovim, Emacs, or Obsidian. [](https://docs.devin.ai/desktop/acp)
* **Read and edit local files interactively.** Rather than switching back and forth to a standalone terminal, the agent operates inside your workspace. On [Reddit](https://www.reddit.com/r/neovim/comments/1n1txun/support%5Ffor%5Fagent%5Fclient%5Fprotocol%5Fin/), users agree that this setup enables tight editor integration for sharing context and reviewing, approving, or rejecting code edits directly in your interface. [](https://www.youtube.com/watch?v=wXJl4IhIYVg&t=61)
* **Execute terminal commands with permission controls.** An ACP agent can request access to run shell commands and tools within your working directory. The client editor intercepts these actions to show real-time progress updates and ask for your approval before sensitive operations run. [](https://www.calummurray.ca/blog/intro-to-acp)
* **Share MCP servers and tools.** When starting a session, your editor automatically passes its working directory and any configured Model Context Protocol (MCP) servers to the agent. This lets the agent immediately use your existing external data sources and tools. [](https://ai-sdk.dev/providers/community-providers/acp)
* **Manage concurrent or persistent sessions.** You can run multiple independent agent sessions at the same time or pause and resume previous tasks using session IDs. [](https://www.calummurray.ca/blog/intro-to-acp)
* **Embed agents into custom apps.** Using tools like the [Vercel AI SDK ACP Provider](https://ai-sdk.dev/providers/community-providers/acp), developers can spawn and manage ACP agents programmatically inside web applications or Node.js services. [](https://ai-sdk.dev/providers/community-providers/acp)
* **Connect locally or remotely.** Most ACP agents run as local subprocesses communicating over standard input/output (stdio), while cloud-hosted remote connections over HTTP or WebSockets are also supported as the standard evolves. [](https://www.youtube.com/watch?v=CfLVtHC3WmE)

If you are looking to set this up or build with it, let me know:

* Which **code editor or IDE** you use
* Whether you are **configuring an existing agent** or **building a custom one**

I can walk you through the exact setup steps or code examples.

+8

* [](https://agentclientprotocol.com/get-started/introduction)  
Agent Client Protocol  
Agent Client Protocol: Introduction  
The Agent Client Protocol (ACP) standardizes communication between code editors/IDEs and coding agents and is suitable for both lo...
* [](https://www.youtube.com/watch?v=wXJl4IhIYVg&t=61)  
YouTube·Chris Hay  
Host your own agents in Zed with Agent Client Protocol  
Agent Client Protocol (ACP) facilitates communication with external AI agents, allowing them to operate outside the editor's execu...  
9m
* [](https://docs.devin.ai/desktop/acp)  
Devin Docs  
Agent Client Protocol  
Some popular ACP-compatible agents you can plug in include: \* Codex CLI — OpenAI's coding agent \* Claude Agent — Anthropic's codin...

Show all

## example

example

12:05 AM

### example

Here is a practical example of how **Agent Client Protocol (ACP)** works in action, using the **Zed** editor connected to the **Gemini CLI** agent.

#### Step 1: Configure the Agent in Your Editor

Because both Zed and Gemini CLI speak ACP, you don't need to install a proprietary extension. You simply register the agent's CLI command in your editor's `settings.json` file:

json

```
{
  "agent_servers": {
    "Gemini CLI": {
      "command": "gemini",
      "args": ["--experimental-acp"]
    }
  }
}

```



#### Step 2: Run an Interactive Task

Suppose you open a project in Zed and ask the agent: _"Add input validation to `auth.py` and run the test suite."_

Here is what happens over the ACP connection behind the scenes:

1. **Context Handshake:** Zed launches `gemini --experimental-acp` as a background subprocess and passes it your current workspace path and any active Model Context Protocol (MCP) tools.
2. **Code Inspection:** The agent sends an ACP request (`fs/read_text_file`) to read `auth.py` directly from your editor's workspace.
3. **Interactive Diff Review:** The agent proposes changes using `fs/write_text_file`. Instead of blindly overwriting your file in the background, Zed intercepts the ACP message and renders a native inline diff in your editor so you can accept or reject the edits.
4. **Controlled Terminal Execution:** To run the tests, the agent sends a `terminal/create` request for `pytest`. Zed pops up a permission prompt asking you to approve the command, then streams the live test output back to both you and the agent.

#### Why This Matters

If you decide tomorrow that you want to switch from Gemini CLI to **Claude Code**, or switch your editor from Zed to **Neovim** or **JetBrains**, the workflow stays identical—you just point the editor to the new agent's `--acp` command.

If you'd like to try a specific setup, let me know:

* Your **preferred editor** (Zed, Neovim, JetBrains, etc.)
* The **agent you want to connect** (Claude Code, Gemini CLI, Codex, or a custom script)

I can share the exact configuration snippet or SDK starter code for that pairing.

## example of what's sent

example of what's sent

12:19 AM

### example of what's sent

Under the hood, Agent Client Protocol (ACP) communicates using **JSON-RPC 2.0 messages** over standard input/output (`stdio`), very similar to the Language Server Protocol (LSP).

Here is an example of the actual JSON payloads sent back and forth between the **Client (Editor)** and the **Agent** during a typical task.

#### 1\. Initialization Handshake

When the editor spawns the agent, it sends an `initialize` request to negotiate protocol versions and declare what features the editor supports (such as file system access or terminal execution).

**Client → Agent:**

json

```
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": 1,
    "clientCapabilities": {
      "fs": {
        "readTextFile": true,
        "writeTextFile": true
      },
      "terminal": true
    },
    "clientInfo": {
      "name": "zed",
      "version": "0.180.0"
    }
  }
}

```



#### 2\. Sending a Prompt

Once a session is created, the editor forwards the user's message along with any attached context (like open files or highlighted code) via `session/prompt`.

**Client → Agent:**

json

```
{
  "jsonrpc": "2.0",
  "id": 2,
  "method": "session/prompt",
  "params": {
    "sessionId": "sess_abc123",
    "prompt": [
      {
        "type": "text",
        "text": "Fix the bug in auth.py"
      }
    ]
  }
}

```



#### 3\. Streaming Updates & Tool Calls

As the agent thinks and works, it streams notifications (`session/update`) back to the editor so the UI can display live progress without waiting for a response.

**Agent → Client:**

json

```
{
  "jsonrpc": "2.0",
  "method": "session/update",
  "params": {
    "sessionId": "sess_abc123",
    "update": {
      "sessionUpdate": "agent_message_chunk",
      "content": {
        "type": "text",
        "text": "Let me inspect auth.py first..."
      }
    }
  }
}

```



#### 4\. Requesting Permission & Editing Files

Instead of touching the disk directly, the agent asks the editor to perform file operations or request user approval. Here, the agent asks the editor to read `auth.py`:

**Agent → Client:**

json

```
{
  "jsonrpc": "2.0",
  "id": 10,
  "method": "fs/read_text_file",
  "params": {
    "sessionId": "sess_abc123",
    "path": "/Users/dev/project/auth.py"
  }
}

```



**Client → Agent (Response):**

json

```
{
  "jsonrpc": "2.0",
  "id": 10,
  "result": {
    "content": "def login(user):\n    return True\n"
  }
}

```



When the agent is ready to apply a fix, it sends a `fs/write_text_file` request (or `session/request_permission` first), allowing the editor to intercept the new content and show you an interactive diff before saving.

If you are building an ACP integration or debugging traffic, let me know:

* Which **programming language** you're working in (TypeScript, Python, Rust, etc.)
* Whether you are building a **client** or an **agent**

I can share a minimal working code snippet using the official ACP SDK.

## can the acp provider do things directly wo playing nice

can the acp provider do things directly wo playing nice

12:20 AM

### can the acp provider do things directly wo playing nice

 \[Highlight start\] **Yes, a local ACP agent runs as an OS subprocess with your user account's permissions, meaning it technically can bypass ACP's polite JSON-RPC requests and access your files or shell directly.** \[Highlight end\]  ACP is a **communication contract, not a security sandbox**.

#### Why It Can Bypass the Protocol

* **Inherited OS privileges:** When an editor spawns a local agent over `stdio`, the agent runs as a standard process on your machine with full access to everything your user account can read, modify, or execute.
* **Protocol vs. enforcement:** Sending `fs/write_text_file` or `session/request_permission` over ACP is simply the cooperative way for the agent to give your editor UI visibility and ask for approval. Nothing at the protocol layer stops a malicious or poorly coded agent from calling Python's `open()` or Node's `fs.writeFileSync()` directly behind the scenes.

#### How to Sandbox an ACP Agent

If you are running untrusted agents or want strict isolation, you have to enforce boundaries outside of ACP itself:

* **Containers & VMs:** Run the agent inside a Docker container, devcontainer, or lightweight microVM with only your specific project folder mounted.
* **OS-level sandboxing:** Wrap the agent's launch command in an OS sandbox tool (such as `sandbox-exec` on macOS, `bubblewrap` / `firejail` on Linux, or Windows Sandbox) to restrict network and filesystem access.
* **Remote execution:** Connect to a cloud-hosted ACP agent over HTTP/WebSockets so the agent process never runs on your local machine—forcing it to interact with your workspace exclusively through the client's ACP methods.

If you want to lock down an ACP setup, let me know:

* Your **operating system** (macOS, Linux, or Windows)
* Which **editor or client** you are using

I can show you how to wrap the agent's launch command in a lightweight sandbox.

## what cant you do via acp as a client

what cant you do via acp as a client

12:21 AM

### what cant you do via acp as a client

As an **ACP client** (such as a code editor or custom UI),  \[Highlight start\] **you cannot reach inside the agent to inspect or control its internal reasoning, tool executions, or model selection** \[Highlight end\] —you only drive the conversation session and respond to the requests the agent chooses to send you.

Because the [Agent Client Protocol](https://agentclientprotocol.com/protocol/v1/overview) treats the agent as an opaque "black box" process, a client has several hard boundaries:

#### 1\. Security & Enforcement Limits

* **Enforce permissions on direct actions.** As noted in the [ACP Security Considerations](https://agentclientprotocol.com/protocol/v2/security), permission handling is cooperative. A client can reject a `session/request_permission` prompt, but it cannot stop a local agent process from using its own built-in tools or OS permissions to read files, run shell commands, or make network calls behind the protocol's back.
* **Verify agent identity or trustworthiness.** The `clientInfo` and `agentInfo` fields exchanged during `initialize` are self-reported strings, so a client cannot cryptographically verify what code or LLM is running behind the subprocess over ACP alone.

#### 2\. Model & Prompt Control Limits

* **Pick or swap the underlying LLM.** ACP has no standard method for a client to select which AI model (e.g., Claude vs. Gemini vs. a local model) the agent uses, or adjust parameters like temperature and token limits—unless the agent explicitly exposes them via generic `session/set_config_option` or `session/set_mode` hooks.
* **Intercept or edit the agent's internal system prompt.** The client sends user prompts (`session/prompt`) and working directory context, while the agent completely owns its system instructions, context window management, and prompt engineering.
* **Inject custom client-side tools directly.** Unlike the OpenAI or Vercel AI SDKs where a client passes a list of executable functions to an LLM, ACP does not let a client register arbitrary callback tools for the agent to call. External tools must be packaged as standalone Model Context Protocol (MCP) servers and passed as server configs when creating a session.

#### 3\. Execution & Architecture Limits

* **Step into or pause the agent's internal loop.** Once you send `session/prompt`, the agent runs autonomously until it finishes or asks for permission. A client can stream progress updates (`session/update`) or abort the entire turn (`session/cancel`), but it cannot step through tool calls one by one or rewind the agent's internal state mid-turn.
* **Orchestrate multi-agent workflows natively.** ACP is strictly a one-to-one interactive session between one client and one agent subprocess. A client cannot use ACP to coordinate peer-to-peer delegation between multiple independent agents (which is what protocols like Agent2Agent / A2A are built for).
* **Control the agent's internal memory or storage.** While a client can ask an agent to `session/load` or `session/delete` a session ID (if the agent supports those capabilities), the client cannot read, export, or modify how the agent stores its conversation history or embeddings on disk.

If you are evaluating ACP for a project, let me know:

* What **kind of client** you are building (an editor plugin, a web UI, or an automated harness)
* Which **missing capability** is most critical for your use case

I can suggest workarounds—such as combining ACP with MCP or custom session config options.

## can you do things you would take for granted for any agents of you own via general acp, like model agnostic, edit, branch, system prompt, special tools instructions extensions etc.

can you do things you would take for granted for any agents of you own via general acp, like model agnostic, edit, branch, system prompt, special tools instructions extensions etc.

12:23 AM

### can you do things you would take for granted for any agents of you own via general acp, like model agnostic, edit, branch, system prompt, special tools instructions extensions etc.

 \[Highlight start\] **No—you cannot do those things out of the box via general ACP.** \[Highlight end\]  Because ACP abstracts away the agent's inner loop to make different agents interchangeable in an editor, you give up fine-grained control over the LLM harness.

Here is how those specific features break down in standard ACP:

| Capability You Take for Granted       | Supported in General ACP? | How It Actually Works (or Workaround)                                                                                                                                                                                           |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Model-agnostic swapping**           | **No**                    | ACP has no standard setModel method. You can switch _agents_ (e.g., Gemini CLI to Claude Code), or an agent can optionally expose a model dropdown via generic session/set\_config\_option keys.                                |
| **System prompt / instructions**      | **No**                    | The agent completely owns its system prompt. Your only workaround is prepending instructions to your first user message (session/prompt) or relying on project files like AGENTS.md / CLAUDE.md that the agent happens to read. |
| **Editing past messages**             | **No**                    | There is no session/edit or message-history mutation API. You cannot rewrite an earlier turn in the agent's context window.                                                                                                     |
| **Branching / forking conversations** | **Partial / Unstable**    | Standard ACP only supports linear session/new and session/load. Forking (session/fork) has been proposed as an unstable extension, meaning most agents do not support it and you cannot reliably duplicate state mid-thread.    |
| **Special tools & extensions**        | **Only via MCP**          | You cannot pass inline function callbacks or custom agent hooks over ACP. Any custom tools must be packaged as standalone **Model Context Protocol (MCP)** servers and passed in session/new.                                   |

#### The Core Trade-off

* **Build your own harness (e.g., Vercel AI SDK, LangGraph, raw LLM APIs):** You own the message array, system prompt, model routing, conversation branching, and custom tools—but you have to build and maintain the entire coding agent loop yourself.
* **Use ACP:** You get battle-tested, turnkey agents (like Claude Code or Gemini CLI) with zero maintenance, at the cost of treating them like opaque black boxes.

If you want the best of both worlds, let me know:

* Whether you are **building an IDE/UI** or **orchestrating agents in a backend**
* Which **specific feature** (branching, custom system prompts, or model switching) is a hard requirement

I can show you how to wrap a custom agent harness in ACP or combine ACP with MCP to cover the gaps.

## is it leaky abstraction

is it leaky abstraction

12:24 AM

### is it leaky abstraction

 \[Highlight start\] **Yes, ACP is a leaky abstraction—by design.** \[Highlight end\]  Because it wraps complex, opinionated CLI agents as opaque black boxes rather than standardizing the underlying LLM harness, the quirks of each specific agent inevitably bleed through to the user experience.

#### Where the Abstraction Leaks

* **Config files and prompt conventions:** Because ACP has no standard system prompt or rule injection API, you still have to maintain agent-specific files in your repository (`CLAUDE.md`, `GEMINI.md`, `.cursorrules`, or `AGENTS.md`) for each agent to behave properly.
* **Authentication and billing:** ACP does not handle API keys or logins. You still have to authenticate each CLI tool separately in your terminal (`claude login`, `gemini` OAuth, environment variables) before your editor can talk to it.
* **Inconsistent capability support:** Many features—like `session/load`, `session/set_mode`, or `session/set_config_option` (used for model pickers or thinking budgets)—are optional. Switching from one ACP agent to another often means UI buttons vanish or behave differently.
* **Hidden tool loops and context limits:** Each agent manages context compaction, sub-agents, and built-in tools differently. One agent might use the editor's `fs/read_text_file` (giving you clean UI diffs), while another shells out to `sed` or `python` via `terminal/create` (bypassing your editor's diff viewer entirely).
* **Custom `_meta` escape hatches:** Because the base spec is minimal, agents and editors rely on vendor-specific `_meta` fields in JSON-RPC payloads to pass custom UI metadata or features, reintroducing tight coupling between specific editors and agents.

#### Why It's Still Useful

Like the **Language Server Protocol (LSP)** before it, ACP trades deep control for ecosystem reach. LSP doesn't standardize how TypeScript and Rust compilers work internally—and you still need a `tsconfig.json` alongside a `Cargo.toml`—but it spares editors from writing bespoke UI integrations for every single language. ACP makes that exact same compromise for AI coding agents.

If you are deciding whether to adopt ACP or build your own layer, let me know:

* Whether you are **integrating agents into a product** or **choosing a personal workflow**
* Which **specific agents** you need to support

I can help you weigh whether ACP fits or if a unified SDK (like OpenRouter + Vercel AI SDK) makes more sense.

## does it leak too much unlike lsp where pl are conceptually similar and you just need a few genernal ide tools

does it leak too much unlike lsp where pl are conceptually similar and you just need a few genernal ide tools

12:26 AM

### does it leak too much unlike lsp where pl are conceptually similar and you just need a few genernal ide tools

**That is the central criticism of ACP—and a valid one.** Unlike programming languages, which converged over decades around deterministic compiler primitives (ASTs, symbols, diagnostics), AI agents are opinionated, non-deterministic workflows where the product's actual value lives _inside_ the loop that ACP hides.

#### Why ACP Leaks More Than LSP

| Dimension                 | Language Server Protocol (LSP)                                                                                                            | Agent Client Protocol (ACP)                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Underlying Domain**     | **Convergent & deterministic.** Go to definition, hover types, and diagnostics mean the exact same thing in Rust, Python, and TypeScript. | **Divergent & opinionated.** Agents compete on proprietary harnesses—how they compact context, plan, spawn sub-agents, and edit files.         |
| **Where the Value Lives** | **In the shared primitives.** The editor UI rendering squiggly lines and autocomplete popups _is_ the user experience.                    | **Inside the black box.** Prompt engineering, memory, and tool-use loops are the secret sauce, and ACP locks the client out of them.           |
| **Protocol vs. Reality**  | **1-to-1 fit.** A language server has no reason to bypass LSP to draw text on your screen.                                                | **Friction & bypasses.** Agents already have built-in bash/file tools and routinely bypass editor fs/\* hooks via shell commands.              |
| **Evolution Speed**       | **Slow & stable.** Compiler features change over years.                                                                                   | **Moving target.** Thinking tokens, background sub-agents, artifacts, and computer use emerge every few months, forcing constant \_meta hacks. |

#### When It Leaks "Too Much" vs. When It Works

* **It leaks too much if you are building an AI-native product.** If your product's differentiator is custom UX—like conversation branching, time-travel checkpoints, custom system prompts, or multi-model routing—ACP will constantly fight you. You end up building custom bridges anyway, at which point owning the agent loop (via an SDK or raw LLM APIs) is cleaner.
* **It works well enough as a "BYO-Agent" compatibility layer.** For traditional IDEs (Zed, JetBrains, Neovim) whose core product is text editing rather than AI orchestration, ACP solves an M × N integration problem. Users who already pay for Claude Code or Gemini CLI get a decent native UI panel without the editor team having to maintain 10 separate proprietary extensions.

In short, LSP succeeded because compilers wanted to be commodities; ACP struggles because **coding agents are still competing to be the platform themselves.**

If you are architecting an editor, UI, or agent platform right now, let me know:

* Your **core product goal** (e.g., building a custom AI coding UX vs. adding plugin support to an existing tool)
* Which **models or agents** you plan to target

I can suggest cleaner architectural patterns—such as MCP-first designs or headless SDKs—that avoid ACP's bottlenecks.

# what do ppl say on acp agent client protocol or ag ui

12:07 AM

### what do ppl say on acp agent client protocol or ag ui

Developers view both protocols as crucial infrastructure for standardizing how AI agents connect to user interfaces, though they are built for entirely different environments. The consensus is that  \[Highlight start\] **Agent Client Protocol (ACP)** is the "LSP for coding agents" inside local code editors, while **AG-UI (Agent–User Interaction Protocol)** is the standard for streaming rich, interactive agent experiences to web and mobile apps \[Highlight end\] . [](https://agentclientprotocol.com/get-started/introduction)

#### What Developers Say About ACP (Agent Client Protocol)

Created by Zed Industries and quickly backed by JetBrains, [ACP](https://agentclientprotocol.com/get-started/introduction) is widely praised for ending the "browser war" of fragmented, custom IDE plugins. [](https://www.youtube.com/watch?v=n11pDnBXPgk)

* **The "LSP for AI".** Developers frequently compare ACP to the Language Server Protocol. Just as LSP let any language server work in any editor, ACP decouples coding agents (like Gemini CLI, Goose, and Grok Build) from editors (like Zed, JetBrains, and Neovim). [](https://www.youtube.com/watch?v=Hvu5KDTb6JE&t=161)
* **Local-first and Editor-centric.** People highlight that ACP treats the editor as "home" and runs the agent as a local child process over `stdio` using JSON-RPC. This allows native IDE features like live code diffs, multi-buffer reviews, and terminal permission prompts to work out of the box without context switching. [](https://www.youtube.com/watch?v=Tn1Rl-qBOr4&vl=en)
* **Protocol Fatigue & Naming Confusion.** A common complaint in developer forums is confusion over acronyms. People often mix up Zed's _Agent Client Protocol_ with IBM/Linux Foundation's _Agent Communication Protocol_ (which also uses the acronym ACP and focuses on HTTP agent-to-agent messaging). Some also note that major players like Claude Code and Codex still rely heavily on their own programmatic or headless paths alongside ACP. [](https://www.linkedin.com/posts/nikkisiapno%5Fmcp-vs-a2a-vs-acp-vs-anp-vs-ag-ui-vs-ap2-activity-7467826250397417472-fwSS)

#### What Developers Say About AG-UI (Agent–User Interaction Protocol)

Backed by CopilotKit and integrated into frameworks like Microsoft's Agent Framework, AG-UI is seen as the missing frontend link for general-purpose AI applications. [](https://learn.microsoft.com/en-us/agent-framework/integrations/by-component/ui/ag-ui/)

* **Solves the "Chatbox Limitation".** Builders point out that traditional request-response APIs fail when agents need to show progress, stream partial state, or render interactive widgets. AG-UI standardizes real-time, bi-directional event streaming between a backend agent and a user-facing web or mobile frontend. [](https://safeguard.sh/resources/blog/agent-client-protocol-explained-how-editors-talk-to-coding-agents-and-how-to-secure-it)
* **Rich State Synchronization.** Developers appreciate how AG-UI handles messy, multi-step workflows. Instead of just dumping text, it synchronizes shared state so the UI can dynamically render forms, approval buttons, and live execution steps. [](https://www.appther.com/blogs/ai-agent-protocols-mcp-a2a-acp-anp)

#### ACP vs. AG-UI at a Glance

| Feature                 | Agent Client Protocol (ACP)                                               | Agent–User Interaction Protocol (AG-UI)                                         |
| ----------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Primary Environment** | Local code editors and IDEs (Zed, JetBrains, Neovim)                      | Web applications, mobile apps, and custom frontends                             |
| **Architecture**        | Editor spawns agent as a local subprocess (stdio / JSON-RPC)              | Server-side agent streams events to a client UI (HTTP / SSE / WebSockets)       |
| **Core Strengths**      | Native file diffs, terminal access, and local permission prompts          | Real-time state sync, generative UI components, and interactive web widgets     |
| **Relationship to MCP** | Complementary (MCP connects agent to tools; ACP connects agent to editor) | Complementary (MCP connects agent to tools; AG-UI connects agent to the app UI) |

#### The Overall Consensus

Developers generally view **MCP, A2A, ACP, and AG-UI** as a cohesive, layered stack rather than competing standards: [](https://blog.marcnuri.com/agent-client-protocol-acp-introduction)

* **MCP** connects agents to data and tools.
* **A2A** connects agents to other agents.
* **ACP** connects coding agents to local IDEs.
* **AG-UI** connects backend agents to end-user web applications. [](https://www.youtube.com/watch?v=Hvu5KDTb6JE&t=161)

Are you looking to **integrate** one of these into a project, or just trying to keep up with the **AI protocol landscape**? Let me know what you're building and I can point you to the right SDKs or starter templates.

+9

* [](https://www.youtube.com/watch?v=n11pDnBXPgk)  
YouTube·JetBrains  
What Is the Agent Client Protocol – and Why JetBrains and Zed ...  
was an effort by Zed and Jet Brains. ACP stands for agent client protocol. ACP is all about allowing agents to talk to some form o...  
24:49
* [](https://www.youtube.com/watch?v=Hvu5KDTb6JE&t=161)  
YouTube·goose OSS  
Intro to Agent Client Protocol (ACP) | Vibe Code with goose  
Developed by Zed Industries, ACP allows any editor that supports it to communicate with any agent that also supports it, regardles...  
10m
* [](https://agentclientprotocol.com/get-started/introduction)  
Agent Client Protocol  
Introduction - Agent Client Protocol  
Standardizes communication between code editors/IDEs and coding agents in local and remote scenarios, similar to Language Server P...

Show all

## agui creator background

agui creator background

12:07 AM

### agui creator background

The **AG-UI (Agent–User Interaction) Protocol** was created by  \[Highlight start\] **[CopilotKit](https://www.copilotkit.ai/ag-ui)**, a developer infrastructure company co-founded in late 2023 by brothers **Atai Barkai (CEO)** and **Uli Barkai** \[Highlight end\] . [](https://www.copilotkit.ai/ag-ui)

#### Origin of the Protocol

* **Born from internal necessity.** CopilotKit originally built the protocol internally as a standardized plumbing layer so its React and frontend UI components could talk cleanly to different backend agent frameworks (like LangGraph, CrewAI, and Pydantic AI). [](https://docs.copilotkit.ai/agentic-protocols/ag-ui)
* **Open-sourced for ecosystem adoption.** Recognizing that developers were writing fragile, bespoke WebSockets and custom JSON parsers for every agent framework, CopilotKit open-sourced the specification as AG-UI. It quickly gained widespread adoption across the industry, including official integrations from Microsoft (Agent Framework), Google (Agent Development Kit), Oracle, and Anthropic. [](https://www.copilotkit.ai/blog/ag-ui-protocol-explained-in-60-seconds)
* **Company momentum.** Based in the Seattle/Bellevue area, CopilotKit raised a **$27 million Series A** (co-led by Glilot Capital, NFX, and SignalFire) to expand its open-source agentic frontend stack and enterprise cloud offerings. [](https://www.linkedin.com/in/atai-barkai)

#### Founder Background: Atai Barkai

[Atai Barkai](https://www.linkedin.com/in/atai-barkai) has a background centered on developer SDKs, mobile infrastructure, and underlying software layers rather than pure consumer apps: 

* **Education.** He earned both a Bachelor's and a Master's degree in Physics from the University of Pennsylvania, where he researched quantum mechanics foundations and worked with the High Energy Physics Group.
* **Big Tech & Infrastructure.** Prior to CopilotKit, he led a cross-team effort at **Meta** building a core media SDK used across Facebook and Instagram. Before Meta, he was a Senior iOS Engineer at **Doximity**, where he led internal SDKs and the company's Dialer app.
* **The Pivot to CopilotKit.** In 2021, Barkai founded **tawkitAI** and built _PodcastGPT_, an AI podcast assistant and LLM media database. While building the interactive UI for that product, he realized that connecting LLMs to real-time application interfaces was a massive, unsolved infrastructure problem—prompting the pivot into CopilotKit in October 2023. [](https://www.youtube.com/watch?v=jjcTNKQSnLs)

Are you interested in exploring how **AG-UI compares to MCP**, or looking into **how to implement AG-UI** with a specific backend framework like LangGraph or Microsoft Agent Framework? Let me know and I can walk you through the architecture.

+11

* [](https://docs.copilotkit.ai/agentic-protocols/ag-ui)  
CopilotKit Docs  
AG-UI  
AG-UI: Open event protocol, open standard developed by CopilotKit team and agent framework partners; connects agents from framewor...
* [](https://www.copilotkit.ai/blog/ag-ui-protocol-explained-in-60-seconds)  
CopilotKit  
AG-UI Protocol Explained in 60 seconds | Blog - CopilotKit  
AG-UI (Agent-User Interaction Protocol) standardizes how agents communicate with user-facing applications. Put simply, it's a fram...
* [](https://learn.microsoft.com/en-us/agent-framework/integrations/by-component/ui/ag-ui/)  
Microsoft Learn  
AG-UI Integration with Agent Framework - Microsoft Learn  
Build agent UIs with CopilotKit. CopilotKit provides rich UI components for building agent user interfaces based on the standard A...

Show all

## popularity of mcp acp a2a agui

popularity of mcp acp a2a agui

12:08 AM

### popularity of mcp acp a2a agui

 \[Highlight start\] **MCP is by far the most dominant and widely adopted protocol**, followed by **A2A** for enterprise multi-agent orchestration, while **AG-UI** and **ACP** hold strong, specialized adoption in frontend apps and code editors respectively \[Highlight end\] .

Because these four protocols solve different parts of the stack, their popularity reflects how broadly each layer is needed across the AI industry.

#### 1\. Model Context Protocol (MCP) — Universal Standard

* **Adoption Level:** Dominant / De facto industry standard. [](https://dev.to/alex%5Faslam/a2a-vs-mcp-vs-acp-the-protocol-war-thats-costing-your-team-months-of-rework-38ga)
* **Scale & Metrics:** MCP has seen explosive growth, reaching **97 million monthly SDK downloads** by early 2026, with its official reference servers repository surpassing **92,000 GitHub stars** and thousands of community-built connectors. [](https://github.com/modelcontextprotocol)
* **Why it leads:** Almost every AI agent needs access to external data, APIs, or local files. Backed by Anthropic and adopted across OpenAI, Google, Microsoft, and major developer tools, MCP is treated as the baseline plumbing for any agentic system. [](https://medium.com/@martia%5Fes/the-rise-of-agent-ecosystems-mcp-a2a-and-ag-ui-05c9614a151b)

#### 2\. Agent2Agent Protocol (A2A) — Enterprise Standard

* **Adoption Level:** High in enterprise & multi-agent systems. [](https://www.mindstudio.ai/blog/mcp-vs-a2a-vs-agui-agent-protocols-compared)
* **Scale & Metrics:** Originally introduced by Google and later moved under the Linux Foundation's Agentic AI Foundation alongside MCP, A2A reached its stable **v1.0 release in 2026** with support from over **150 enterprise organizations** (including Microsoft, AWS, and Salesforce) and **26,000+ GitHub stars** on its core specification. [](https://www.getmaxim.ai/articles/agent-communication-protocols/)
* **Ecosystem Consolidation:** Notably, IBM's competing _Agent Communication Protocol_ (the _other_ ACP) merged into A2A in August 2025, cementing A2A as the clear winner for cross-vendor agent-to-agent delegation.

#### 3\. AG-UI (Agent–User Interaction Protocol) — Fast-Growing Frontend Standard

* **Adoption Level:** Rapidly growing in full-stack AI app development.
* **Scale & Metrics:** While newer and smaller in raw download volume than MCP, AG-UI has become the primary standard for streaming agent state to web and mobile UIs. It has secured native integrations across major orchestration frameworks—including **Microsoft Agent Framework**, **Google ADK**, **LangGraph**, **CrewAI**, and **Pydantic AI**.
* **Why it's growing:** Developers building user-facing products (beyond basic terminal scripts) run into the limits of plain text chat and adopt AG-UI to handle generative UI widgets and human-in-the-loop approvals.

#### 4\. Agent Client Protocol (ACP) — Niche / IDE-Specific Standard

* **Adoption Level:** High within AI code editors, niche elsewhere.
* **Scale & Metrics:** Created by Zed and backed by JetBrains, Zed's ACP is the standard specifically for local IDE-to-agent communication (used by tools like Gemini CLI, Goose, and Neovim plugins).
* **Why it stays focused:** Because ACP relies on local child processes (`stdio`) designed for code diffs and terminal permissions, its popularity is tightly bound to developer environments rather than general web apps or cloud backends.

#### Summary Comparison

| Protocol  | Primary Layer          | Maturity & Adoption                                | Key Backers / Ecosystem                                |
| --------- | ---------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| **MCP**   | Agent ↔↔⁠ Tools & Data | **Massive** (90k+ stars, \~100M monthly downloads) | Anthropic, OpenAI, Google, Microsoft, Linux Foundation |
| **A2A**   | Agent ↔↔⁠ Agent        | **High / Enterprise** (26k+ stars, 150+ orgs)      | Google, Microsoft, AWS, IBM, Linux Foundation          |
| **AG-UI** | Agent ↔↔⁠ Web/App UI   | **Growing** (Leading frontend event spec)          | CopilotKit, Microsoft, Google ADK, LangGraph           |
| **ACP**   | Coding Agent ↔↔⁠ IDE   | **Focused** (Standard for local editors)           | Zed Industries, JetBrains, Neovim ecosystem            |

Are you trying to decide **which protocols to adopt for a new architecture**, or looking for **specific SDKs and starter repos** for one of these? Let me know your stack and I can map out how they fit together.

+5

* [](https://dev.to/alex%5Faslam/a2a-vs-mcp-vs-acp-the-protocol-war-thats-costing-your-team-months-of-rework-38ga)  
DEV Community  
A2A vs. MCP vs. ACP: the protocol war that's costing your ...  
Model Context Protocol (MCP) is the vertical integration layer. It standardizes how a single agent reaches down into the world: ca...
* [](https://www.getmaxim.ai/articles/agent-communication-protocols/)  
Bifrost by Maxim AI  
Agent Communication Protocols Compared: A2A, MCP and ACP  
IBM's Agent Communication Protocol (ACP) merged into A2A under the Linux Foundation in August 2025, so new agent-to-agent work sho...
* [](https://www.mindstudio.ai/blog/mcp-vs-a2a-vs-agui-agent-protocols-compared)  
MindStudio  
MCP vs A2A vs AGUI: The Three Core Agent Protocols ...  
MCP is the most mature, with broad adoption across major AI tools and a large ecosystem of community servers. A2A was released mor...

Show all

## a2a creator background

a2a creator background

12:09 AM

### a2a creator background

The **Agent2Agent (A2A) Protocol** was created by  \[Highlight start\] **Google Cloud** \[Highlight end\]  and introduced in **April 2025** alongside more than 50 enterprise technology partners. [](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)

Unlike protocols that originated from single startups or editor teams, A2A was built as a large-scale enterprise infrastructure standard. [](https://www.zscaler.com/zpedia/agent2agent-protocol-a2a)

#### Origin & Engineering Background

* **Born from Enterprise Scale.** Google designed A2A based on its internal experience scaling multi-agent systems and addressing bottlenecks faced by large enterprise customers. As companies deployed specialized agents across different departments (HR, IT, sales, procurement), they ran into an O(N²) custom integration problem where agents built on different vendor platforms couldn't coordinate without brittle glue code. [](https://discuss.google.dev/t/understanding-a2a-the-protocol-for-agent-collaboration/189103?gl=us)
* **Executive & Technical Leadership.** The initiative was championed on the Google Cloud side by **Rao Surapaneni** (VP & GM of Business Application Platform at Google Cloud), alongside Google's AI engineering and Developer Relations teams (with key specification and ecosystem contributions from engineers such as Ivan Nardini and Lakshmi Harikumar). [](https://www.youtube.com/watch?v=Fbr%5FSolax1w&vl=en)
* **Designed for "Opacity".** Drawing from Google's background in cloud microservices and distributed networking, the creators intentionally modeled A2A on familiar web standards (**HTTP, JSON-RPC 2.0, and Server-Sent Events**). A core design philosophy from its authors was _agent opacity_—allowing two agents to discover each other's skills via an "Agent Card" and delegate tasks without exposing their proprietary prompts, internal memory, or underlying tools. [](https://a2a-protocol.org/latest/specification/)

#### Ecosystem Evolution & Governance

* **Launch Coalition.** Rather than releasing A2A as a proprietary Google feature, Google co-launched it with over 50 major enterprise software and consulting partners—including **Salesforce, SAP, ServiceNow, Workday, Atlassian, LangChain, Accenture, and Deloitte**—to ensure cross-vendor buy-in from day one. [](https://community.sap.com/t5/technology-blog-posts-by-members/beyond-the-chat-box-how-agent-to-agent-protocol-a2a-rewires-enterprise-ai/ba-p/14462346)
* **Move to the Linux Foundation.** To guarantee vendor neutrality, Google donated A2A to the **Linux Foundation** (under the Agentic AI Foundation, which also governs Anthropic's MCP). Shortly after, IBM merged its competing _Agent Communication Protocol_ into A2A, consolidating the industry around Google's original specification. [](https://mastra.ai/blog/what-is-agent-to-agent-protocol)

Would you like to look into the **creators behind MCP or Zed's ACP** next, or explore **how A2A's Agent Cards and task lifecycle work** under the hood?

+6

* [](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/)  
Google for Developers Blog  
Announcing the Agent2Agent Protocol (A2A)  
A2A is an open protocol … we designed the A2A protocol to address the challenges we identified in deploying large-scale, multi-age...
* [](https://www.youtube.com/watch?v=Fbr%5FSolax1w&vl=en)  
YouTube·Google Cloud Tech  
Introduction to Agent2Agent (A2A) Protocol  
A2A protocol created by Google special thanks to Ivan Nardini and Lashmi Harikumar for their contributions in putting this.  
8:00
* [](https://a2a-protocol.org/latest/specification/)  
A2A Protocol  
Agent2Agent (A2A) Protocol Specification  
The Agent2Agent (A2A) Protocol is an open standard designed to facilitate communication and interoperability between independent, ...

Show all


