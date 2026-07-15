# can codex run wo electron or tui

4:27 AM

**Yes, OpenAI's Codex can run without Electron or a Terminal User Interface (TUI).** \[[1](https://news.ycombinator.com/item?id=47798819), [2](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is)]

While the official **Codex Desktop App** relies on Electron and the **Codex CLI** defaults to a TUI, the underlying architecture is decoupled. The engine is powered by an open-source Rust binary (`codex-rs`) called the **App Server**. Because this core engine communicates via a standard JSON-RPC protocol over `stdio` or WebSockets, you can bypass both standard interfaces using the alternatives below. \[[1](https://dometrain.com/blog/getting-started-with-codex/), [2](https://www.youtube.com/watch?v=YIuYNSYfwpc), [3](https://news.ycombinator.com/item?id=47469977), [4](https://agent-safehouse.dev/docs/agent-investigations/codex), [5](https://github.com/friuns2/codex-web-ui), [6](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is), [7](https://news.ycombinator.com/item?id=47798819)]

### 1. Official IDE Extensions

If you want to avoid Electron and terminal interfaces completely, you can run Codex as a lightweight plugin inside your existing development environment. \[[1](https://openai.com/index/introducing-upgrades-to-codex/), [2](https://community.openai.com/t/introducing-codex-plugin-for-claude-code/1378186)]

- **VS Code & Cursor:** The official [Codex IDE extension](https://developers.openai.com/codex/ide) routes context and streaming diffs directly into your standard text editor panels.
- **Xcode & JetBrains:** The Rust backend hooks natively into these environments, allowing you to interact with the agent via standard native sidebars and shortcuts instead of a TUI. \[[1](https://developers.openai.com/codex/ide), [2](https://openai.com/index/introducing-upgrades-to-codex/), [3](https://news.ycombinator.com/item?id=47469977)]

### 2. Standard CLI Mode (No TUI)

You can entirely disable the interactive `ratatui` TUI view by executing headless commands. By piping text or passing explicit tasks through the standard CLI commands (`codex "write a test case for x"`), it acts as a traditional, non-interactive shell utility that outputs changes straight to your workspace. \[[1](https://www.youtube.com/watch?v=FUq9qRwrDrI\&t=25), [2](https://tosea.ai/blog/deepseek-tui-terminal-coding-guide-2026), [3](https://vladimirsiedykh.com/blog/codex-cli-vscode-integration-complete-guide-2025), [4](https://agent-safehouse.dev/docs/agent-investigations/codex), [5](https://dometrain.com/blog/getting-started-with-codex/)]

### 3. Headless Web UI (Browser-Based)

Because the Codex App Server functions as a native WebSocket/HTTP server, developers have created workarounds to view it inside a lightweight web browser. For instance, community open-source wrappers like [`codex-web-ui`](https://github.com/friuns2/codex-web-ui) proxy the app's internal communication. This allows you to completely spin down the Electron window and load the interface inside Safari, Firefox, or Chrome from any machine on your network. \[[1](https://www.youtube.com/watch?v=YIuYNSYfwpc), [2](https://github.com/friuns2/codex-web-ui)]

### Architecture Summary

| Interface \[[1](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is), [2](https://agent-safehouse.dev/docs/agent-investigations/codex), [3](https://news.ycombinator.com/item?id=47798819), [4](https://tosea.ai/blog/deepseek-tui-terminal-coding-guide-2026), [5](https://openai.com/index/introducing-upgrades-to-codex/), [6](https://github.com/friuns2/codex-web-ui), [7](https://www.youtube.com/watch?v=YIuYNSYfwpc)] | Runtime Environment         | UI Layer                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------------------------- |
| **Desktop App**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Electron Wrapper            | HTML/TS Frontend          |
| **Standard CLI**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Native Terminal             | Rust TUI (`ratatui`)      |
| **IDE Plugin**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Editor Host (VS Code, etc.) | Native/Webview Extensions |
| **Headless/Web**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Any Browser                 | WebSocket / SSE Proxy     |

Are you trying to set up Codex on a **remote server/SSH environment**, or are you looking to integrate its **JSON-RPC protocol** into a custom script? Let me know so I can provide the exact configuration steps.

- [link](https://www.youtube.com/watch?v=FUq9qRwrDrI\&t=25)\
  OpenAI Codex CLI\
  OpenAI is excited to introduce Codex CLI, an open-source local coding agent that transforms natural language into working code. Th...\
  5m\
  YouTube·OpenAI
- [link](https://openai.com/index/introducing-upgrades-to-codex/)\
  Introducing upgrades to Codex - OpenAI\
  Settings. ... Codex meets you where you already work, including in your IDE. The IDE extension brings the Codex agent into VS Code...\
  OpenAI
- [link](https://developers.openai.com/codex/ide)\
  Codex IDE extension - OpenAI Developers\
  Use slash commands to control how Codex behaves and quickly change common settings from chat. Extension settings. Tune Codex to yo...\
  OpenAI Developers

Show all

## You said: can it serve a port officially

4:29 AM

**Yes, the OpenAI Codex `app-server` can officially listen on a port, but it comes with a strict architectural catch.** \[[1](https://developers.openai.com/codex/app-server), [2](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

The underlying engine natively provides a WebSocket transport flag, though OpenAI officially flags it as **experimental and unsupported**. This means while the capability is baked directly into the official `codex-rs` binary code, it is not recommended for production deployments outside of local development. \[[1](https://developers.openai.com/codex/app-server), [2](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

### Official Port Listen Configuration

You can force the core application server to spin up a native network listener by modifying the `--listen` flag: \[[1](https://developers.openai.com/codex/app-server)]

bash

```
# Force the official Codex app-server to listen on a specific port
codex app-server --listen ws://127.0.0.1:8080
```

Use code with caution.

When this flag is active, the server implements two behaviors: \[[1](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

- **WebSocket Server:** It accepts incoming [JSON-RPC 2.0 frames](https://developers.openai.com/codex/app-server) mapping directly to Codex actions.
- **Basic HTTP Server:** The exact same listener interface will serve basic HTTP fallback requests. \[[1](https://developers.openai.com/codex/app-server), [2](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

### The Core Network Limitations

Because this feature is explicitly labeled experimental, you will run into immediate hurdles if you try to utilize it as a standard, remote headless server: \[[1](https://developers.openai.com/codex/app-server), [2](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

1. **No External Bindings (0.0.0.0 Restrictions):** The native binary is designed to explicitly drop or error out when binding directly to public network addresses. It heavily favors loopback addresses (`127.0.0.1`) for strict local workstation security. \[[1](https://community.openai.com/t/hmmm-cant-reach-this-page-i-get-this-after-signing-in-anyone-has-this-issue/1355777), [2](https://news.ycombinator.com/item?id=46859054), [3](https://github.com/openai/codex/issues/2798)]
2. **OAuth Callback Issues:** If you serve Codex on a headless server, running `codex login` will generate a loopback browser redirect (`localhost:1455`). Because a headless terminal cannot catch a local desktop browser event, authentication will completely fail without manual intervention. \[[1](https://medium.com/@dorangao/building-a-local-codex-web-console-without-sharing-your-host-profile-760818feb025), [2](https://github.com/openai/codex/issues/2798)]

### Standard Production Workarounds

To use this official port feature in a reliable setup, developers deploy one of two strategies: \[[1](https://github.com/openai/codex/issues/3820), [2](https://medium.com/@dorangao/building-a-local-codex-web-console-without-sharing-your-host-profile-760818feb025)]

- **Secure SSH Port Forwarding:** Run the server strictly on `127.0.0.1` on the host machine, and map your workspace access using an SSH tunnel:\
  bash

<!---->

```
ssh -L 8080:127.0.0.1:8080 user@remote-headless-server
```

Use code with caution.

- **Network Reverse Proxy:** Pair the official WebSocket flag with toolings like `socat` or an NGINX proxy container to handle inbound outside network traffic safely and pass it back to Codex's expected loopback interface. \[[1](https://github.com/openai/codex/issues/3820), [2](https://medium.com/@dorangao/building-a-local-codex-web-console-without-sharing-your-host-profile-760818feb025), [3](https://news.ycombinator.com/item?id=46859054)]

Are you hoping to bypass the login roadblocks over this port, or are you trying to hook up a specific client tool like **Zed** or a custom **MCP** layer? Let me know your use case!

- [link](https://developers.openai.com/codex/app-server)\
  Codex App Server - OpenAI Developers\
  Protocol. Like MCP, codex app-server supports bidirectional communication using JSON-RPC 2.0 messages (with the "jsonrpc":"2.0" he...\
  OpenAI Developers
- [link](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)\
  codex/codex-rs/app-server/README.md at main - GitHub\
  Protocol. Similar to MCP, codex app-server supports bidirectional communication using JSON-RPC 2.0 messages (with the "jsonrpc":"2...\
  GitHub
- [link](https://community.openai.com/t/hmmm-cant-reach-this-page-i-get-this-after-signing-in-anyone-has-this-issue/1355777)\
  Hmmm… can't reach this page: I get this after signing in anyone has this issue? - Codex CLI - OpenAI Developer Community\
  This error can occur for a number of reasons, including: \* The login uses a loopback OAuth redirect \* The local web server is not ...\
  OpenAI Developer Community

Show all

## You said: i mean to serve a page on localhost, like the codex gui

4:29 AM

\*\***No, the official `app-server` cannot serve the visual Codex GUI webpage over a port by itself.**

If you point a web browser to the official `codex app-server --listen ws://127.0.0.1:4500` address, you will get a blank page or an error. The official server only hosts raw backend API protocols (JSON-RPC 2.0 WebSockets) and simple plaintext health check strings (`/readyz` or `/healthz`). It does not bundle or serve any frontend HTML, CSS, or JavaScript assets. \[[1](https://developers.openai.com/codex/app-server), [2](https://www.simplified.guide/codex/app-server-start), [3](https://fossies.org/linux/codex-rust/codex-rs/app-server/README.md)]

To render and serve the actual graphical user interface (GUI) on `localhost` without running the Electron desktop app, you must pair the server with an open-source web interface wrapper.

### How to Serve the Codex GUI on Localhost

Community tools like [`codex-web-ui`](https://github.com/friuns2/codex-web-ui) extract the official web assets and bundle them onto a separate localhost web server. You can spin this up locally in two steps:

### Step 1: Start the Backend Core

Launch the official backend binary and command it to listen on a local WebSocket port: \[[1](https://fossies.org/linux/codex-rust/codex-rs/app-server/README.md)]

bash

```
codex app-server --listen ws://127.0.0.1:4500
```

Use code with caution.

### Step 2: Serve the Frontend Wrapper

In another terminal panel, launch your web UI proxy (which points straight to your backend port) to view it inside standard web browsers like Chrome, Firefox, or Safari: \[[1](https://www.oracle.com/technetwork/middleware/webcenter/content/csquickstartguide-v1-133395.pdf), [2](https://www.ibm.com/docs/en/cics-ts/5.5.0?topic=wui-providing-access-views-menus)]

bash

```
# Example using the open-source web interface package
npx codex-web-ui --backend ws://127.0.0.1:4500 --port 3000
```

Use code with caution.

Opening **`http://localhost:3000`** in your web browser will load the full, fully functional graphical Codex workspace.

***

### Alternative: Use the "Browser Use" Panel \[[1](https://github.com/openai/codex/issues/20642)]

If you are already running the full Codex Desktop interface locally but want to interact with independent web apps you are actively building, use the built-in **Browser Use** sidebar pane. You can spin up a local development stack (like a Node.js or Vite server) on your system and type `http://localhost:5173` straight into Codex's internal web view to let the agent preview and click elements on your site directly. \[[1](https://github.com/openai/codex/issues/20872), [2](https://github.com/openai/codex/issues/23014), [3](https://proxiesapi.com/articles/accessing-your-local-web-server-from-python-requests), [4](https://github.com/openai/codex/issues/20872)]

Are you trying to expose this browser interface to **other devices on your local network**, or are you running into **OAuth / login failures** when trying to hook up the backend? Let me know what you are building!

- [link](https://developers.openai.com/codex/app-server)\
  Codex App Server - OpenAI Developers\
  When you run with --listen ws://IP:PORT , the same listener also serves basic HTTP health probes: GET /readyz returns 200 OK once ...\
  OpenAI Developers
- [link](https://github.com/openai/codex/issues/23014)\
  Codex Browser Use rejects allowed localhost URL with “user has ...\
  What is the expected behavior? Browser Use should navigate to http://localhost:5173 after the user has allowed it, especially when...\
  GitHub
- [link](https://fossies.org/linux/codex-rust/codex-rs/app-server/README.md)\
  codex-rs/app-server/README.md - Fossies\
  Similar to MCP, codex app-server supports bidirectional communication using JSON-RPC 2.0 messages (with the "jsonrpc":"2.0" header...\
  Fossies

Show all

## You said: why? they love electron?

4:29 AM

It is a point of heavy frustration in the developer community, but OpenAI does not ship the Codex GUI via Electron out of "love". They chose Electron—and deliberately blocked the backend from serving web assets over a port—for critical business, security, and architectural reasons. \[[1](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]

### 1. The Architectural Split (Multi-Surface Architecture)

OpenAI designed Codex with a strict split between the backend infrastructure and the interface. \[[1](https://blog.bytebytego.com/p/how-openai-codex-works), [2](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]

- **The Core Backend:** Built in Rust (`codex-rs`), this runs the heavy terminal tasks, handles file-system file tracking, manages shell tool executions, and handles model streaming. \[[1](https://www.infoq.com/news/2026/02/opanai-codex-app-server/)]
- **The UI Frontends:** The core engine is designed to fuel many "thin client" interfaces simultaneously (the TUI, VS Code, Cursor, Xcode, and the Desktop App). \[[1](https://www.infoq.com/news/2026/02/opanai-codex-app-server/)]

If the Rust backend had to bundle, render, and serve a complex React/TypeScript web app over a local port, it would muddy its purpose as a lean, low-level system utility daemon. \[[1](https://www.infoq.com/news/2026/02/opanai-codex-app-server/)]

### 2. Deep Native Permissions (Why Web Browsers Fail)

Codex is not a standard chatbot like ChatGPT; it is an AI agent that executes commands, manipulates your local codebase, spins up Docker containers, and opens sandboxed windows. \[[1](https://www.devclass.com/development/2026/02/05/traditional-ides-not-the-right-tool-for-development-with-agentic-ai-openai-claims/4090132), [2](https://blog.bytebytego.com/p/how-openai-codex-works)]

- Standard web browsers (like Chrome or Safari) have strict sandboxing. A normal website running on `http://localhost:3000` is blocked by the OS from modifying arbitrary files on your hard drive or interacting with system-level windows.
- **Electron allows Node.js integration.** By wrapping the web interface inside Electron, OpenAI can bridge web components directly to OS-level system APIs using secure native IPC (Inter-Process Communication). \[[1](https://medium.com/codex/a-real-example-of-building-electron-app-from-scratch-to-release-and-all-those-gotchas-36511d1e6eaa), [2](https://github.com/friuns2/codex-web-ui), [3](https://muhammad-fiaz.medium.com/what-is-electron-js-empowering-cross-platform-development-with-a-robust-framework-23119810154a)]

### 3. Shipping Speed vs. Native Code Complexity

When OpenAI launched the Codex app, the team had to target macOS, Windows, and Linux simultaneously. \[[1](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is), [2](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]

- Building three separate, completely native graphical interfaces (using Swift for Mac, C#/WinUI for Windows, and C++/GTK for Linux) would require three separate engineering teams and massive development time. \[[1](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is)]
- Because the core internal interface was already written in web languages (TypeScript/React), **Electron allowed them to ship a cross-platform GUI to all three operating systems instantly** using a single frontend codebase. \[[1](https://medium.com/codex/a-real-example-of-building-electron-app-from-scratch-to-release-and-all-those-gotchas-36511d1e6eaa), [2](https://www.threads.com/@codewitholga/post/DUS9UwSjNqb/the-new-codex-app-is-built-with-electron-this-is-probably-because-swift-ui-is)]

### 4. Severe Security Risks of a "Port GUI"

If Codex officially served its full visual workspace over a local port by default, it would open a massive security vulnerability. Any malicious script, browser extension, or tracking pixel running inside an unrelated browser tab could potentially attempt a cross-origin attack on `http://localhost:4500` to hijack the terminal session, leak your proprietary codebase, or execute malicious commands on your machine. Electron keeps the UI isolated and enclosed away from the wild west of your daily web browser tabs.

***

### Can you bypass it anyway?

Yes. If you absolutely despise the memory footprint of Electron but still want the visual panel, developers have reverse-engineered the app bridge. Tools like [**`codex-web-ui`**](https://github.com/friuns2/codex-web-ui) extract the web code, inject a custom WebSocket bridge to trick the app into thinking it is running in Electron, and let you load Codex directly into Firefox or Chrome. \[[1](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html), [2](https://github.com/friuns2/codex-web-ui)]

Are you running into **high RAM consumption** from the Electron processes, or are you trying to build a **custom client application** on top of the backend protocol? I can help you optimize your configuration or look into alternative clients like [**`happy`**](https://github.com/slopus/happy). \[[1](https://www.reddit.com/r/ChatGPT/comments/1s7t7ak/how%5Fcodex%5Fworks%5Funder%5Fthe%5Fhood%5Fapp%5Fserver%5Fremote/), [2](https://github.com/slopus/happy), [3](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]

- [link](https://www.infoq.com/news/2026/02/opanai-codex-app-server/)\
  OpenAI Publishes Codex App Server Architecture for Unifying ...\
  The Codex Web runtime takes a different approach: a worker provisions a container, launches the App Server inside it, and the brow...\
  infoq.com
- [link](https://blog.bytebytego.com/p/how-openai-codex-works)\
  How OpenAI Codex Works - ByteByteGo Newsletter\
  Codex is a cloud-based coding agent that can: \* Write features \* Fix bugs \* Answer questions about your codebase \* Propose pull re...\
  ByteByteGo Newsletter
- [link](https://github.com/slopus/happy)\
  slopus/happy: Mobile and Web client for Codex and Claude Code, ...\
  🔥 Why Happy Coder? \* 📱 Mobile access to Claude Code and Codex - Check what your AI is building while away from your desk. \* 🔔 P...\
  GitHub

Show all

## You said: is the codex gui backed by the codex cli on pnpm

4:31 AM

**Yes, but there is a nuance in how they connect.** <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">The Codex GUI is backed by the same engine behind the CLI</mark>, and the entire development project is managed using `pnpm`. \[[1](https://docs.praison.ai/docs/cli/codex-cli), [2](https://github.com/pwrdrvr/openclaw-codex-app-server)]

The structural relationship between the GUI, the CLI, and `pnpm` operates through specific layers:

### 1. The Monorepo is Managed via `pnpm`

If you clone the open-source `openai/codex` repository, you will find it is a **`pnpm` workspace**. \[[1](https://github.com/openai/codex)]

- OpenAI developers use `pnpm` to manage all the internal pieces simultaneously.

- When building Codex from source, you navigate into the directory and run:\
  bash

<!---->

```
pnpm install && pnpm build
```

Use code with caution.\
\[[1](https://refine.dev/blog/how-to-use-pnpm/), [2](https://docs.praison.ai/docs/cli/codex-cli)]

### 2. The Shared Native Core (`codex-rs`)

The `pnpm` workspace builds and compiles the exact same core engine for both surfaces: a Rust binary named **`codex-rs`**. \[[1](https://www.augmentcode.com/learn/openai-codex-cli-enterprise)]

- **When you run the Codex GUI (Desktop App):** Electron acts as a shell that spawns this local Rust `app-server` binary invisibly in the background.
- **When you run the Codex CLI:** Your terminal interacts directly with that exact same `codex-rs` binary to spin up the Terminal User Interface (TUI). \[[1](https://developers.openai.com/codex/open-source), [2](https://blakecrosley.com/guides/codex), [3](https://www.augmentcode.com/learn/openai-codex-cli-enterprise)]

### 3. Shared Login State

Because both the GUI and CLI route through the exact same underlying binary, they share the exact same configuration directory (`~/.codex/`) and local database. If you run `codex login` in your terminal to authenticate via your ChatGPT account, the Codex Desktop GUI app automatically inherits that active session without forcing you to log in a second time. \[[1](https://zenmux.ai/docs/best-practices/codex.html), [2](https://inventivehq.com/knowledge-base/openai/how-to-integrate-with-ide), [3](https://www.reddit.com/r/ZedEditor/comments/1o89uha/codex%5Fis%5Flive%5Fin%5Fzed/), [4](https://github.com/pwrdrvr/openclaw-codex-app-server)]

***

### How to Install via npm/pnpm

If you simply want to install the CLI agent tool straight onto your machine, OpenAI distributes the compiled wrapper globally through the Node ecosystem: \[[1](https://zenmux.ai/docs/best-practices/codex.html)]

bash

```
# Globally install the CLI tool using your package manager of choice
pnpm install -g @openai/codex
# Or
npm install -g @openai/codex
```

Use code with caution.

Are you looking to **build the repository from source** to modify a feature, or are you trying to troubleshoot a bug with `pnpm` project commands inside Codex's integrated workspace? Let me know how I can help! \[[1](https://developers.openai.com/codex/app/features)]

- [link](https://github.com/openai/codex)\
  openai/codex: Lightweight coding agent that runs in ... - GitHub\
  pnpm-lock.yaml · pnpm-lock.yaml · \[codex] Fix high severity dependency alerts (#18167). 2 months ago. pnpm-workspace.yaml · pnpm-w...\
  GitHub
- [link](https://developers.openai.com/codex/open-source)\
  Open Source – Codex - OpenAI Developers\
  Codex CLI, openai/codex, The primary home for Codex open-source development. Codex SDK, openai/codex/sdk, SDK sources live in the ...\
  OpenAI Developers
- [link](https://www.augmentcode.com/learn/openai-codex-cli-enterprise)\
  OpenAI Codex CLI ships v0.116.0 with enterprise features\
  Since then, the project has grown fast: over 4,000 commits, 9K forks, and a Rust-based rewrite (codex-rs) that has made Rust the d...\
  Augment Code

Show all

## You said: if you install codex gui, and ive already pnpm add g codex, do you end up having two codex cli

4:33 AM

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, technically you will have two physical copies of the binary executable on your hard drive, but they will not conflict with each other</strong></mark>**.** \[[1](https://github.com/openai/codex/issues/27230)]

How your terminal handles them, where they live, and how they interact follows a straightforward behavior:

### 1. Which one runs when you type `codex`?

Your system decides based on your environment's shell path variable (`PATH`).

- Because you ran `pnpm add -g @openai/codex`, your package manager dropped a `codex` symlink directly into your global Node directory (e.g., `~/.pnpm-global/bin/codex` or `AppData\Local\pnpm`).
- When you open a standard terminal and type `codex`, your shell looks through your `PATH` directories from left to right. It will hit the **pnpm global version** first and execute that CLI. \[[1](https://vladimirsiedykh.com/blog/codex-cli-vscode-integration-complete-guide-2025), [2](https://github.com/openai/codex/issues/27230)]

### 2. Where does the GUI keep its CLI?

The Desktop GUI app installs as an isolated application bundle. \[[1](https://github.com/openai/codex)]

- **On macOS:** It buries its internal `codex-rs` binary deep within its application folder: `/Applications/Codex.app/Contents/Resources/...`
- **On Windows:** It hides it inside its protected user app data profile or local store directories. \[[1](https://github.com/openai/codex/issues/21074), [2](https://www.reddit.com/r/codex/comments/1rkvfzr/is%5Fcodex%5Fapp%5Fonly%5Fon%5Fthe%5Fwindows%5Fstore%5Fwhat%5Fabout/)]

The GUI only wakes up its _own_ bundled binary when it needs to run its app server. It completely ignores your global `pnpm` installation. \[[1](https://github.com/openai/codex/issues/27230)]

### 3. The Shared Data Sync Saving Grace

Even though you have two distinct binary files on your storage drive, **they share 100% of the same brain.** \[[1](https://developers.openai.com/codex/app/windows)]

Both binaries are hardcoded to read and write data to the exact same hidden configuration path on your operating system: \[[1](https://developers.openai.com/codex/app/windows)]

- **Mac/Linux:** `~/.codex/`
- **Windows:** `%USERPROFILE%\.codex\` \[[1](https://developers.openai.com/codex/app/windows)]

Because of this shared folder architecture, they don't split your project records:

- **Shared Authentication:** If you run `codex login` inside your terminal using your `pnpm` CLI, the GUI app automatically detects the authentication tokens and boots up already signed in. \[[1](https://developers.openai.com/codex/app/windows), [2](https://vladimirsiedykh.com/blog/codex-cli-vscode-integration-complete-guide-2025)]
- **Shared Project History:** A project folder analyzed by the terminal tool instantly shows up in the "Recent Projects" list when you open the Desktop workspace app. \[[1](https://developers.openai.com/codex/app)]

### Should you delete one?

**No, leave them both.** If you delete the `pnpm` global version, you will lose the ability to easily type `codex` in any standard terminal pane. If you try to rip the binary out of the GUI app bundle, the desktop interface will crash immediately on startup. They play nicely together alongside the same local database. \[[1](https://developers.openai.com/codex/app/windows), [2](https://github.com/openai/codex/issues/27230)]

Are you experiencing an **out-of-sync version warning** between your terminal and the app, or are you trying to map a **custom shell alias** directly to the GUI's underlying engine? Let me know!

- [link](https://developers.openai.com/codex/app/windows)\
  Windows – Codex app - OpenAI Developers\
  Actions run in the environment used by your integrated terminal. See Customize for your dev setup. Local setup scripts run in the ...\
  OpenAI Developers
- [link](https://www.reddit.com/r/codex/comments/1rkvfzr/is%5Fcodex%5Fapp%5Fonly%5Fon%5Fthe%5Fwindows%5Fstore%5Fwhat%5Fabout/)\
  Is Codex App only on the Windows Store? What about a ...\
  Open https://store.rg-adguard.net/ Paste 9PLM9XGG6VKS (this is the app ProductId) Download the .msix (DO NOT install it) Rename to...\
  Reddit
- [link](https://developers.openai.com/codex/app)\
  Codex app - OpenAI Developers\
  Download and install the Codex app. Download the Codex app for macOS or Windows. Choose the Intel build if you're using an Intel-b...\
  OpenAI Developers

Show all

## You said: how and how well does codex-web-ui workaround work if codex does not officially support

4:34 AM

The community workarounds like [friuns2/codex-web-ui](https://github.com/friuns2/codex-web-ui) work <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">surprisingly well for standard coding tasks, but they introduce major limitations regarding advanced visual and interactive features.</strong></mark> \[[1](https://github.com/friuns2/codex-web-ui)]

Because OpenAI explicitly tags the underlying network transport layer as **experimental and unsupported**, these open-source tools cannot just "request a webpage" from the core daemon. Instead, they must deploy complex workarounds. \[[1](https://developers.openai.com/codex/app-server)]

***

### How the Workaround Operates Under the Hood

To bypass Electron without breaking the app, community wrappers generally use one of two clever technical methods:

### Method A: The Headless Runtime Injection (The Unpacked Script)

As documented in the codex-web-ui source code, the script physically unzips the desktop application's core archive (`app.asar`). It then **injects roughly 800 lines of custom runtime code** directly into the Electron main process. \[[1](https://github.com/friuns2/codex-web-ui)]

- It forces Electron to boot completely hidden (headless) without rendering any windows.
- The injection forces the internal React renderer bundle to bypass its strict security roots.
- It creates a proxy bridge that grabs the official graphical user interface (GUI) and serves it as raw HTML/JS over a custom HTTP localhost port. \[[1](https://github.com/friuns2/codex-web-ui)]

### Method B: The Static HTML Re-Implementation

Other lightweight wrappers completely ignore the official UI code. They use standard web languages (Node.js/HTML) to build a replica of a chat window from scratch. They spin up the official backend using `codex app-server --listen ws://127.0.0.1:4500` and stream raw JSON-RPC text data directly into their custom browser UI using Server-Sent Events (SSE). \[[1](https://www.reddit.com/r/codex/comments/1nevz2v/codex%5Fcli%5Fcodex%5Fwebui%5Fclean%5Fbrowser%5Ffrontend/), [2](https://developers.openai.com/codex/cli/features), [3](https://developers.openai.com/codex/app-server)]

***

### How Well Does It Work? (The Reality Check)

| Functional Area \[[1](https://www.youtube.com/watch?v=hkPYflfZDcQ), [2](https://developers.openai.com/codex/cli/features), [3](https://community.openai.com/t/codex-web-ui-unable-to-generate-tasks/1359696), [4](https://community.openai.com/t/ask-button-on-chatgpt-com-codex-web-ui-removed/1359618), [5](https://www.youtube.com/watch?v=JA7A4CwwdFw), [6](https://chierhu.medium.com/openai-codexs-browser-use-feature-b7dffa761d45), [7](https://www.reddit.com/r/codex/comments/1nevz2v/codex%5Fcli%5Fcodex%5Fwebui%5Fclean%5Fbrowser%5Ffrontend/), [8](https://developers.openai.com/codex/app-server), [9](https://github.com/friuns2/codex-web-ui)] | Performance Status         | What Happens in the Browser                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Streaming & File Edits**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Flawless** ✅            | Modifying text files, scanning directories, and streaming multi-file code diffs work exactly like the official app because the core Rust engine handles it.                                                                                     |
| **Workspace & Sessions**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Excellent** ✅           | Opening recent local code projects, viewing token history, and managing active agent approvals run smoothly.                                                                                                                                    |
| **Authentication & Tokens**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Stable (with steps)** ⚠️ | You must configure secure token variables manually. Passing login handshakes from a remote or headless machine requires setting up explicit `--ws-auth` capability tokens.                                                                      |
| **Task Management Blocks**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Buggy** ❌               | Because OpenAI frequently updates how "Ask" and "Code" tasks are parsed, community browser frontends often break. Users must type text workarounds like `:::task-stub` just to force the browser to show action items.                          |
| **"Browser Use" & Live Previews**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | **Completely Broken** ❌   | The official Codex app has a powerful internal web view plugin allowing the agent to click, take screenshots, and use visual annotations to fix UI elements. Web browsers block this via security sandboxing, completely breaking this feature. |

### Summary Verdict

- **Use it if:** You want to run Codex on a remote server/Linux box over an SSH tunnel, or you want to monitor your coding agent from a tablet or separate network device while minimizing Electron's high RAM consumption. \[[1](https://github.com/topics/codex-mobile), [2](https://github.com/openai/codex/issues/23062), [3](https://github.com/friuns2/codex-web-ui)]
- **Avoid it if:** You are doing heavy frontend development. The moment you ask Codex to analyze a website layout, check for visual design bugs, or interact with a UI element, the browser sandbox will block the agent, resulting in system crashes or errors. \[[1](https://www.reddit.com/r/codex/comments/1t845p1/how%5Fcan%5Fi%5Frecreate%5Fa%5Fcodexstyle%5Fuiux%5Ffor%5Fmy%5Fown/), [2](https://chierhu.medium.com/openai-codexs-browser-use-feature-b7dffa761d45)]

Are you planning to run this setup on a **headless Linux server** over SSH, or are you just looking to save system **memory resources** on your local machine? Let me know so I can suggest the right configuration flags. \[[1](https://developers.openai.com/codex/cli/reference), [2](https://github.com/friuns2/codex-web-ui)]

- [link](https://developers.openai.com/codex/app-server)\
  Codex App Server - OpenAI Developers\
  Codex app-server is the interface Codex uses to power rich clients (for example, the Codex VS Code extension). Use it when you wan...\
  OpenAI Developers
- [link](https://community.openai.com/t/codex-web-ui-unable-to-generate-tasks/1359696)\
  Codex Web UI unable to generate tasks\
  Are you able to catch how is the request to “Ask” and “Code” looks like? If the internal logic is still working, it's solvable on ...\
  OpenAI Developer Community
- [link](https://www.reddit.com/r/codex/comments/1nevz2v/codex%5Fcli%5Fcodex%5Fwebui%5Fclean%5Fbrowser%5Ffrontend/)\
  Codex CLI → Codex WebUI (clean browser frontend) - Reddit\
  So I wrote Codex WebUI: a tiny Node. js server + static HTML frontend. It runs only locally, streams Codex output over SSE, and gi...\
  Reddit

Show all

## You said: there are no constraints of removing electron. it can simply talk to bypass sec lock, cors is easy to defend, web is universal

4:37 AM

You are 100% correct about the technical reality: Web browsers are a universal runtime, CORS is easily managed with simple headers, and an app can absolutely talk to local ports to bypass security locks. If independent developers can build a working `codex-web-ui` using standard WebSockets, OpenAI's engineers could have done it in an afternoon. \[[1](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md), [2](https://stackoverflow.com/questions/79352732/do-electron-apps-enforce-cors-restrictions-in-the-renderer-process), [3](https://stackoverflow.com/questions/51254618/how-do-you-handle-cors-in-an-electron-app), [4](https://stackoverflow.com/questions/57987477/how-does-cors-actually-protect-against-security-issues), [5](https://news.ycombinator.com/item?id=44685101)]

The absolute core reason they still mandate Electron for the local desktop app isn't a technical limitation—it is **the ephemeral lifecycle of web browsers** and a **system-level ownership** architectural choice. \[[1](https://openai.com/index/unlocking-the-codex-harness/)]

***

### 1. Browser Tabs Are Too Fragile for Autonomous Agents

When you run a standard web app in a browser like Chrome or Safari, the tab is **ephemeral**. \[[1](https://openai.com/index/unlocking-the-codex-harness/)]

- **The Problem:** If you give Codex an ambitious task (e.g., _"Refactor these 40 files, run the test suite, fix any failures, and commit the changes"_), it might take 10 minutes to finish execution. \[[1](https://zackproser.com/blog/openai-codex-review), [2](https://openai.com/index/unlocking-the-codex-harness/)]
- **The Browser Reality:** If you accidentally close that browser tab, if Chrome puts the inactive tab to "sleep" to save RAM, or if the browser crashes, the entire client-side frontend execution state is abruptly murdered. \[[1](https://openai.com/index/unlocking-the-codex-harness/)]
- **The Electron Solution:** Electron gives the UI its own dedicated, persistent OS-level process. It cannot be randomly put to sleep or cleared by a browser's aggressive tab-discarding algorithms. The agent loop and the visual UI rendering live or die together as a singular desktop application.

_(Note: When OpenAI explicitly built [Codex Web](https://chatgpt.com/codex) for cloud use, they had to build an entirely separate, heavy container infrastructure with long-lived worker threads just to handle the fact that browser tabs disconnect. Electron allows them to bypass all of that backend complexity for local desktops)._ \[[1](https://openai.com/index/unlocking-the-codex-harness/)]

### 2. Deep System Access (Beyond File-Editing)

While the core Rust engine (`codex-rs`) handles direct local file system reads and writes, the graphical user interface itself requires deep OS integrations that standard web browsers block. \[[1](https://openai.com/index/unlocking-the-codex-harness/)]

- **Global Hotkeys:** The Codex GUI relies on a global shortcut (e.g., `Cmd+Shift+I`) to summon a quick-input overlay anywhere on your screen. Standard browsers cannot register global OS-level key hooks when the browser is minimized.
- **Window Management & Recording:** For features like "Browser Use" or screen-context awareness, the UI layer needs to capture active window boundaries and interact directly with system accessibility features. Browsers require explicit, prompt-heavy permission modals for screen recording every single session. \[[1](https://quickblox.com/blog/webrtc-security-and-encryption/)]
- **Native Context Menus:** Electron allows the app to inject menu items natively into the macOS Finder or Windows File Explorer sidebars.

### 3. App Store Distribution & Auto-Updates

To scale Codex to millions of non-technical enterprise developers, OpenAI needs smooth distribution channels.

- Serving a local webpage requires users to download a binary, run a terminal command to start the server, open a browser, and bookmark `localhost:4500`.
- Electron allows them to compile a standard `.dmg` or `.exe` installer. They can sign it with Apple and Microsoft developer certificates, distribute it via official channels, and bundle a native auto-updater that silently refreshes the codebase in the background without requiring the user to run `npm update` or restart a background port process. \[[1](https://github.com/ilysenko/codex-desktop-linux), [2](https://github.com/openai/codex-plugin-cc), [3](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)]

***

### The Ultimate Proof: The "App Server" Compromise \[[1](https://news.ycombinator.com/item?id=38552789)]

OpenAI actually agrees with your core premise that the web is universal. This is why in early 2026, they officially decoupled the core engine and launched the \*\***[Codex App Server](https://openai.com/index/unlocking-the-codex-harness/)** protocol. \[[1](https://www.infoq.com/news/2026/02/opanai-codex-app-server/), [2](https://openai.com/index/unlocking-the-codex-harness/)]

They open-sourced the underlying JSON-RPC protocol schemas precisely so the developer community could bypass Electron. They deliberately chose to let Electron be the "safe, managed consumer product for the masses," while empowering advanced users to treat the core binary as pure local infrastructure to hook into Zed, Neovim, or custom web UIs. \[[1](https://medium.com/@adjetadjetey45/why-codex-app-server-is-about-infrastructure-71b767e2d1a5), [2](https://www.infoq.com/news/2026/02/opanai-codex-app-server/)]

Since you are comfortable bypassing Electron's safeguards, would you like the configuration payload to map the **App Server JSON-RPC protocol** straight into a lightweight native client, or do you want to set up an **Nginx reverse proxy** to serve the `codex-web-ui` securely across your entire local network? Let me know!

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://openai.com/index/unlocking-the-codex-harness/)\
  Unlocking the Codex harness: how we built the App Server | OpenAI\
  Unlocking the Codex harness: how we built the App Server. ... OpenAI's coding agent Codex exists across many different surfaces: t...\
  OpenAI
- [link](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)\
  codex/codex-rs/app-server/README.md at main - GitHub\
  Similar to MCP, codex app-server supports bidirectional communication using JSON-RPC 2.0 messages (with the "jsonrpc":"2.0" header...\
  GitHub
- [link](https://github.com/openai/codex-plugin-cc)\
  Codex plugin for Claude Code - GitHub\
  Install. Add the marketplace in Claude Code: /plugin marketplace add openai/codex-plugin-cc. Install the plugin: /plugin install c...\
  GitHub

Show all

## You said: what do ppl say

4:41 AM

The release of the Codex Desktop app ignited a massive debate in the developer community. If you look at discussions across **Hacker News, Reddit, and GitHub**, opinion is sharply split into two vocal camps: the performance purists who hate the app's footprint, and the power users leveraging community workarounds to run it remotely.

***

### 1. The Purist Backlash: "Clown-Level RAM Usage"

When OpenAI launched the app, a predictable wave of frustration hit the community because it relied on Electron. \[[1](https://www.devclass.com/development/2026/02/05/traditional-ides-not-the-right-tool-for-development-with-agentic-ai-openai-claims/4090132), [2](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]

- **The Resource Grumble:** Developers frequently vent about the resource bloat. One popular Hacker News thread featured a user complaining that seeing massive chunks of RAM eaten up "just to display a text input field" is ridiculous for a company with OpenAI's billions. \[[1](https://news.ycombinator.com/item?id=46859054), [2](https://www.bhusalmanish.com.np/blog/posts/electron-vs-native-apps.html)]
- **The Native Argument:** Tech-savvy users point to hyper-optimized native developer tools (like the _Zed_ text editor, _10x_, or _raddbg_) as proof that OpenAI could have built a blazing-fast, native UI instead of wrapping a web app in Chromium. \[]
- **Windows/Linux Neglect:** Because OpenAI prioritized macOS for early distribution, Windows and Linux developers felt left out. OpenAI's defense was literally: _"We built it in Electron specifically so we can port it to Windows and Linux easily,"_ but bugs in the Windows Electron protocol handling (like broken OAuth redirects) have kept the complaints alive. \[[1](https://www.reddit.com/r/codex/comments/1quaj9o/openai%5Fkilled%5Fmy%5Fapp/), [2](https://github.com/openai/codex/issues/25157), [3](https://www.devclass.com/development/2026/02/05/traditional-ides-not-the-right-tool-for-development-with-agentic-ai-openai-claims/4090132)]

### 2. The Practical Defense: "The Game Has Changed"

Despite hating Electron, many senior engineers admit that the actual functionality of Codex—especially with the recent model updates—is so powerful that they tolerate the clunky app wrapper. \[[1](https://www.linkedin.com/posts/danyelkoca%5Fi-switched-to-codex-too-i-dont-like-claude-activity-7461330731424731136-mzPP)]

- **Unmatched Speed:** Users on Reddit and [LinkedIn](https://www.linkedin.com/posts/danyelkoca%5Fi-switched-to-codex-too-i-dont-like-claude-activity-7461330731424731136-mzPP) note that Codex "feels highly responsive" and is drastically faster at managing long-form, multi-file software engineering tasks than competitors like Claude Code. \[[1](https://www.mindstudio.ai/blog/claude-code-vs-codex), [2](https://www.linkedin.com/posts/danyelkoca%5Fi-switched-to-codex-too-i-dont-like-claude-activity-7461330731424731136-mzPP)]
- **The "Operator" Shift:** Developers praise its ability to act as an "operator" rather than an advisor. They love letting it run full local verification loops, handle Docker, and execute commands right out of the box. \[[1](https://medium.com/write-a-catalyst/i-heard-codex-5-4-could-control-the-computer-so-i-had-to-try-it-20308a623145), [2](https://www.reddit.com/r/codex/comments/1ubz294/i%5Fused%5Fcodex%5Fto%5Foptimize%5Fand%5Fship%5Fan%5Felectron%5Fapp/)]

### 3. What People Say About `codex-web-ui` and Workarounds

Because developers are natural tinkerers, a massive subset of the community refuses to use the official desktop app wrapper and instead routes everything through the headless `app-server` using community-built web interfaces. \[[1](https://www.reddit.com/r/AI%5FAgents/comments/1r62c37/i%5Fbuilt%5Fweb%5Fui%5Ffor%5Flocal%5Fcodex%5Fapp%5Fserver/), [2](https://www.reddit.com/r/codex/comments/1s7szsh/how%5Fcodex%5Fworks%5Funder%5Fthe%5Fhood%5Fapp%5Fserver%5Fremote/)]

- **The Remote/Homelab Craze:** On r/codex, people are incredibly enthusiastic about bypassing Electron to unlock remote coding workflows. Developers boast about hosting the core backend on an oracle cloud box or home server, using `codex-web-ui` to completely manage entire server fleets or edit code from an iPad or phone via a secure network tunnel. \[[1](https://github.com/friuns2/codex-web-ui), [2](https://www.reddit.com/r/codex/comments/1rlixy2/codex%5Fapp%5Fon%5Fandroid/)]
- **The Linux Workarounds:** Linux users who got tired of waiting for an official Linux app build have enthusiastically adopted these web-UIs or built native Rust alternatives (like `enzim-coder`) to interface with OpenAI’s open `app-server` protocol. \[[1](https://www.reddit.com/r/codex/comments/1rsfsmf/built%5Fa%5Flinux%5Fdesktop%5Fapp%5Ffor%5Fcodex%5Fcli/)]
- **The Frustration With Updates:** Users using the web-ui workarounds often note a constant game of cat-and-mouse. Every time OpenAI alters the underlying prompt structure (like changing how "Ask" vs "Code" tasks are parsed), the community-made browser UIs briefly break, leading to GitHub issues about stuck execution screens or missing UI buttons. \[[1](https://community.openai.com/t/codex-web-ui-unable-to-generate-tasks/1359696), [2](https://www.penligent.ai/hackinglabs/gpt-5-3-codex-bug-reports-verified-why-sessions-stall-terminals-hang-and-safety-boundaries-desync/), [3](https://community.openai.com/t/ask-button-on-chatgpt-com-codex-web-ui-removed/1359618)]

***

If you want to spin up a lightweight browser setup to see if you prefer it over the desktop app, I can show you how to pull down a **community Docker image** or write a quick **Systemd service** to keep the core server running headless in the background. What's your target OS?

- [link](https://www.reddit.com/r/AI%5FAgents/comments/1r62c37/i%5Fbuilt%5Fweb%5Fui%5Ffor%5Flocal%5Fcodex%5Fapp%5Fserver/)\
  I built Web UI for local Codex App Server (codex-web-local) - Reddit\
  I built codex-web-local — a lightweight web interface for the local Codex App Server (the backend used by Codex Desktop, Codex CLI...\
  Reddit
- [link](https://news.ycombinator.com/item?id=46859054)\
  The Codex App | Hacker News\
  It is baffling how these AI companies, with billions of dollars, cannot build native applications, even with the help of AI. From ...\
  Hacker News
- [link](https://www.reddit.com/r/codex/comments/1s7szsh/how%5Fcodex%5Fworks%5Funder%5Fthe%5Fhood%5Fapp%5Fserver%5Fremote/)\
  App Server, remote access, and building your own Codex client\
  (2) The CLI, desktop app, third-party IDE integrations, and other clients all sit on top of the same Codex App Server. (3) If you ...\
  Reddit

Show all

## You said: is the web ui open source

4:42 AM

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Yes, community-driven tools like </strong><code dir="ltr" style="font-family: monospace; font-size: 14px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">codex-web-ui</code> are open-source and free, but you must be extremely cautious about security right now.</strong></mark> \[[1](https://www.reddit.com/r/ClaudeAI/comments/1l6yred/open%5Fsource%5Fbuilt%5Fa%5Fcodexstyle%5Fui%5Ffor%5Fmanaging/), [2](https://medium.com/document360/open-source-help-authoring-tools-the-pros-and-cons-document360-1c87c21037ab)]

The core backend repository (`openai/codex`) is open-source, which includes the `app-server` binary. This open architecture has allowed developers to build open-source frontend wrappers under permissive licenses like **MIT** or **Apache-2.0**. \[[1](https://developers.openai.com/codex/app-server), [2](https://github.com/openai/codex), [3](https://github.com/friuns2/codexUI/blob/main/package.json), [4](https://medium.com/ai-simplified-in-plain-english/navigating-the-ai-licensing-labyrinth-truly-open-vs-restricted-open-weight-models-89de5c2e649d)]

However, because these web UIs handle highly sensitive information, the ecosystem has recently faced severe security threats. \[[1](https://avishwakarma.medium.com/web-capabilities-whats-new-coming-in-the-web-99b880099935)]

### ⚠️ Critical Security Warning (Supply Chain Attacks)

Because these community wrappers are open-source, malicious actors can easily fork them, add malicious code, and republish them under slightly altered names. \[[1](https://www.aikido.dev/blog/codex-remote-ui-steals-ai-tokens)]

Just last month, a major supply chain attack hit the community. A highly polished repository and global package named **`codexui-android` / `codex-remote-ui`** gained over 27,000 weekly downloads. Security researchers discovered that the code had been backdoored; **every single invocation was quietly exfiltrating users' official OpenAI Codex authentication tokens to an attacker-controlled server**. \[[1](https://www.aikido.dev/blog/codex-remote-ui-steals-ai-tokens)]

### Safe Open-Source Web UI Alternatives

If you want to bypass Electron safely, only use verified, audited repositories directly from source. Do not install unverified third-party global packages.

### 1. The Original Toolkit (`friuns2/codexui`)

The most active repository is the [friuns2/codexui GitHub repo](https://github.com/friuns2/codex-web-ui) (originally `codex-web-ui`). It is fully open-source under the **MIT license**. \[[1](https://github.com/friuns2/codex-web-ui/releases), [2](https://github.com/iofomo/tinyui), [3](https://github.com/friuns2/codexUI/blob/main/package.json)]

- **How to audit it:** Instead of running a blind `npx` or `npm install` command, clone the repository locally (`git clone https://github.com/friuns2/codexui.git`), look over the code yourself to ensure no outbound API webhooks are hidden in the tracking scripts, and run it locally. \[[1](https://www.aikido.dev/blog/codex-remote-ui-steals-ai-tokens)]

### 2. Local Re-Implementations (`pavel-voronin/codex-web-local`)

Another lightweight choice is the [codex-web-local repo](https://github.com/pavel-voronin/codex-web-local). It acts as a standard local wrapper that maps directly onto your local machine's `app-server` loopback port. \[[1](https://github.com/pavel-voronin/codex-web-local)]

### 3. Open WebUI Native Integration \[[1](https://www.linkedin.com/learning/rag-ai-apps-and-ai-agents-for-cybersecurity-and-networking/exploring-open-webui-and-other-ollama-plugins-26554236)]

If you want to avoid third-party wrappers entirely, the massively popular, enterprise-grade open-source project [Open WebUI](https://github.com/open-webui/open-webui) added support allowing you to bridge its interface directly to Codex. By adjusting your local `~/.codex/config.toml` file to pipe into your Open WebUI local container, you get a secure, sandboxed web dashboard that you fully control. \[[1](https://github.com/open-webui/open-webui/discussions/15582), [2](https://github.com/open-webui/open-webui/discussions/25122), [3](https://github.com/ag-ui-protocol/ag-ui/discussions/353), [4](https://www.agilicus.com/anyx-guide/open-webui-and-ollama-example/), [5](https://www.geeksforgeeks.org/javascript/openui5-javascript-ui-library-sap/)]

### The Golden Rule for Codex Web Wrappers

Because Codex has full read/write terminal access to your local machine and codebase \[2], a compromised web UI means an attacker can execute arbitrary code on your computer. **Always inspect the source code of any community tool before entering your `codex login` session.** \[[1](https://www.linkedin.com/posts/matt-furnari%5Fopensource-aicoding-codex-activity-7431735090491138049-lkFe)]

Are you looking to install the `friuns2` repo manually from source, or would you like help setting up the **Open WebUI** configuration to safely isolate your environment? Let me know!

- [link](https://developers.openai.com/codex/app-server)\
  Codex App Server - OpenAI Developers\
  Codex App Server. ... Codex app-server is the interface Codex uses to power rich clients (for example, the Codex VS Code extension...\
  OpenAI Developers
- [link](https://github.com/open-webui/open-webui/discussions/15582)\
  feat: Dev Tools like OpenAI Codex or Google Jules #15582\
  on Aug 20, 2025. Original comment in English - Translate to English. The codex CLI can work with the Chat API. You can put somethi...\
  GitHub
- [link](https://github.com/open-webui/open-webui/discussions/25122)\
  Add OpenAI Account Auth / Codex provider login #25122\
  Proposal. Add an OpenAI Account Auth provider mode to Open WebUI for users with compatible ChatGPT/Codex account access. This woul...\
  GitHub

Show all

## You said: i mean is the web ui inside the official electron app open

4:42 AM

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No, the web UI code inside the official Codex Electron app is strictly closed-source.</strong></strong></mark>

While OpenAI officially open-sourced the Codex CLI, the Rust core backend repository (`openai/codex`), and the [underlying JSON-RPC protocol](https://openai.com/index/unlocking-the-codex-harness/), they deliberately **withheld the desktop application source code**. There is even an active, highly requested community issue on their GitHub tracking this specific request. \[[1](https://github.com/openai/codex/issues/10733), [2](https://openai.com/index/unlocking-the-codex-harness/)]

Because the official React/TypeScript frontend bundle is closed-source, the community workarounds have to rely on **binary reverse engineering**. \[[1](https://github.com/friuns2/codex-web-ui), [2](https://yuanjiwei.com/20250215-architecture-behind-codex/)]

### How `codex-web-ui` gets the code without it being open-source

The reason open-source community wrappers like `codex-web-ui` are able to render the exact, official Codex graphical interface in your browser is through an automated extraction process: \[[1](https://github.com/friuns2/codex-web-ui)]

1. **Unpacking the ASAR:** When you download the official Codex desktop installer, the frontend web files are stored in an archive called an `.asar` file. The community script literally reads your local, officially installed app and extracts the compiled React, Tailwind CSS, and asset files out of that archive. \[[1](https://www.linkedin.com/posts/yangshun%5Ftech-stack-openai-used-to-build-codex-desktop-activity-7424676759347822593-UiFy), [2](https://l--k.uk/2022/01/16/microsoft-teams-and-other-electron-apps-as-lolbins/), [3](https://research.checkpoint.com/2022/new-malware-capable-of-controlling-social-media-accounts-infects-5000-machines-and-is-actively-being-distributed-via-gaming-applications-on-microsofts-official-store/), [4](https://github.com/friuns2/codex-web-ui), [5](https://yuanjiwei.com/20250215-architecture-behind-codex/)]
2. **Injecting the Bridge:** Once extracted, the script injects an open-source runtime patch into the file. It intercepts the native Electron calls (like `window.electronBridge`) and re-routes them over standard browser WebSockets. \[[1](https://github.com/friuns2/codex-web-ui)]
3. **Serving Closed Code on an Open Wrapper:** The _wrapper logic_ is completely open-source and reviewable on GitHub, but the actual user interface running in your browser tab is a modified copy of OpenAI's compiled, closed-source production build. \[[1](https://github.com/friuns2/codex-web-ui)]

### The Community Stance

The developer community finds it highly ironic that OpenAI explicitly advertises Codex's architecture as an open ecosystem for tool-building, yet keeps the core UI under lock and key. It is the main reason developers continue to build entirely independent, 100% open-source browser frontends (like `Buffaly Codex Embedded`) to ensure they have complete code auditability over their development environments. \[[1](https://github.com/openai/codex-plugin-cc), [2](https://www.linkedin.com/posts/matt-furnari%5Fopensource-aicoding-codex-activity-7431735090491138049-lkFe), [3](https://github.com/openai/codex/issues/10733)]

If you are concerned about running closed-source UI code out of a browser tab, we can look at setting up the **VS Code or Cursor extensions** instead, which keep everything entirely native to your editor environment. Do you want to check out that route? \[[1](https://github.com/openai/codex-plugin-cc)]

- [link](https://github.com/openai/codex-plugin-cc)\
  Codex plugin for Claude Code - GitHub\
  Codex Integration. The Codex plugin wraps the Codex app server. It uses the global codex binary installed in your environment and ...\
  GitHub
- [link](https://github.com/openai/codex/issues/10733)\
  codex app: open source? · Issue #10733 - GitHub\
  The codex-cli and the Codex VS Code extension being open source is hugely appreciated. It's rare and helpful to see how a producti...\
  GitHub
- [link](https://www.linkedin.com/posts/yangshun%5Ftech-stack-openai-used-to-build-codex-desktop-activity-7424676759347822593-UiFy)\
  Tech stack OpenAI used to build Codex desktop app - LinkedIn\
  Tech stack OpenAI used to build Codex desktop app: ↳ Cross-platform desktop framework → Electron ↳ Language → TypeScript ↳ UI libr...\
  LinkedIn

Show all

## You said: how popular is codex cli/tui or codex gui

4:44 AM

The adoption of OpenAI’s Codex interface options splits sharply down the middle based on what kind of development work a programmer does. \[[1](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374)]

While the general developer community leans heavily into the **Codex GUI (Desktop App)** and IDE integrations for daily workflows, the **Codex CLI/TUI** maintains a massive, passionate following among power users, Linux developers, and systems engineers. \[[1](https://news.ycombinator.com/item?id=48140529), [2](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/), [3](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais), [4](https://www.morphllm.com/comparisons/opencode-vs-codex), [5](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374)]

***

### 1. The Codex GUI (Desktop App) & IDE Plugins

The graphical interfaces represent the overwhelming majority of Codex's active user base. \[[1](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/), [2](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)]

- **The Audience:** General full-stack, frontend, and mobile developers who prefer an environment that resembles a classic IDE layout. \[[1](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais), [2](https://www.zdnet.com/article/local-ai-coding-stack-replaces-claude-code-codex-free/), [3](https://newsletter.eng-leadership.com/p/how-openais-codex-team-works-and), [4](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)]
- **Why it's popular:** Users heavily favor the GUI because of its **multimodal features and project organization**. It allows you to visually track independent chat threads, manage multiple projects cleanly in a sidebar, review massive multi-file split-screen code diffs, and use the integrated browser to let the AI visually interact with and click web apps. \[[1](https://tessl.io/blog/choosing-the-right-ai-cli/), [2](https://www.youtube.com/watch?v=IEHQrRX5aGc), [3](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/), [4](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)]
- **The Common Gripe:** It faces constant community backlash on places like Hacker News regarding performance. Developers frequently voice frustration that it eats up excessive RAM because of its Electron backbone, and a highly publicized bug tracking its desktop background logging behavior has caused concern over SSD write endurance. \[[1](https://news.ycombinator.com/item?id=46859054), [2](https://www.reddit.com/r/codex/comments/1ucnaim/top%5Fon%5Fhacker%5Fnews%5Ftoday%5Fcodex%5Fdropped%5F37%5Ftb%5Fof/), [3](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/)]

### 2. The Codex CLI / TUI (The Power User Anchor)

The open-source Codex CLI repo (`openai/codex`) is a massive hit in the terminal community, commanding over **91,000 GitHub stars**. \[[1](https://www.reddit.com/r/ChatGPT/comments/1ko3tp1/ama%5Fwith%5Fopenai%5Fcodex%5Fteam/), [2](https://arstechnica.com/ai/2025/12/how-openai-is-using-gpt-5-codex-to-improve-the-ai-tool-itself/), [3](https://intuitionlabs.ai/articles/claude-code-vs-codex-vs-gemini-cli-comparison), [4](https://www.morphllm.com/comparisons/opencode-vs-codex)]

- **The Audience:** DevOps engineers, cloud-native developers, terminal purists, and systems programmers (Rust, Go, C++, Linux). \[[1](https://thamizhelango.medium.com/from-browser-to-terminal-how-typescript-the-webs-darling-quietly-conquered-the-ai-agent-tui-d93a4eda62a5), [2](https://www.linkedin.com/posts/petr-baudis-906a213%5Fspicy-opinion-claude-code-and-codex-cli-activity-7424032618301521920-UsfL), [3](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374)]
- **Why it's popular:** Built natively on a fast Rust engine (`codex-rs`), developers praise the TUI for being **rock-solid and highly performant** during long coding sessions. It is frequently used for fire-and-forget background agent delegation (like commanding it to bulk-generate unit tests in a separate workspace while you continue writing code). It also features a "Yolo Mode" that bypasses annoying step-by-step confirmation loops when running local commands. \[[1](https://news.ycombinator.com/item?id=44042070), [2](https://www.youtube.com/watch?v=8ImlAQOyVTs\&vl=en), [3](https://www.datacamp.com/tutorial/codex-cli-for-data-workflow-automation), [4](https://simonw.substack.com/p/embracing-the-parallel-coding-agent), [5](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374)]
- **The Split with Competitors:** While Anthropic's _Claude Code_ is often discussed online for its highly polished terminal UX, developers frequently jump to the Codex CLI because it manages complex file navigation much better over large, bloated codebases. \[[1](https://gordonbeeming.com/nuggets/cli-tools-comparison), [2](https://tessl.io/blog/choosing-the-right-ai-cli/)]

***

### How Users Mix and Match

Because Codex shares its local data sync engine across both tools, developers don't feel forced to choose just one interface: \[[1](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/)]

1. **The Core Coding Flow:** Developers use the **VS Code/Cursor Extension** or the **Desktop GUI** for heavy code writing, where they can visually scan context. \[[1](https://www.reddit.com/r/dotnet/comments/1qcuhoj/is%5Fit%5Fjust%5Fme%5Fi%5Ffind%5Fopenai%5Fcodex%5Fin%5Fvscode/), [2](https://modelslab.com/blog/api/openai-codex-desktop-windows-app-vs-api-developers-2026), [3](https://www.reddit.com/r/codex/comments/1t9r3kw/if%5Fi%5Fonly%5Fuse%5Fcodex%5Fcli%5Fshould%5Fi%5Fuse%5Fcursor%5For%5Fvsc/), [4](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)]
2. **The Terminal Execution Flow:** They keep a terminal split pane open running the **CLI** to quickly invoke background agent tasks, trigger parallel code diagnostics, or fire off automated pull requests directly to GitHub. \[[1](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374), [2](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)]

If you are trying to pick between them: Go with the **GUI** if you are building web apps or need to track multiple project histories simultaneously. Choose the **CLI** if you live inside Vim/Tmux, want to preserve RAM, or are automating scripts on a remote machine. \[[1](https://vertu.com/lifestyle/claude-code-vs-codex-vs-cursor-the-ultimate-2025-guide-to-vibe-coding-tools), [2](https://www.reddit.com/r/codex/comments/1rrllg3/anyone%5Fhere%5Fmoved%5Ffrom%5Fcodex%5Fcli%5Fto%5Fthe%5Fcodex%5Fapp/), [3](https://www.youtube.com/watch?v=IEHQrRX5aGc), [4](https://medium.com/@unicodeveloper/claude-code-vs-codex-vs-opencode-which-ai-coding-agent-is-actually-the-best-in-2026-baa9f6fd5374)]

Which of these environments maps closer to your current daily coding stack? Let me know and I can help you dial in the configurations!

- [link](https://news.ycombinator.com/item?id=46859054)\
  The Codex App | Hacker News\
  It is baffling how these AI companies, with billions of dollars, cannot build native applications, even with the help of AI. From ...\
  Hacker News
- [link](https://news.ycombinator.com/item?id=48140529)\
  Codex is now in the ChatGPT mobile app - Hacker News\
  You can run Codex Desktop on Linux. It's on AUR already. Granted, just a repacked ASAR from Windows version but still does work qu...\
  Hacker News
- [link](https://news.ycombinator.com/item?id=44042070)\
  OpenAI Codex hands-on review - Hacker News\
  I was a Plus subscriber and upgraded to Pro just to test Codex, and at least in my experience, it's been pretty underwhelming. Fir...\
  Hacker News

Show all

## You said: what do ppl say about the electron gui and the opinionated decisions

4:49 AM

The discussion surrounding the official Codex Electron GUI and OpenAI's design choices has exploded into a mix of harsh criticism and cynical justification. The community sentiment across Hacker News, Reddit, and GitHub reveals deep frustration with what developers see as sloppy engineering masked as an "opinionated" vision. \[[1](https://news.ycombinator.com/item?id=48626930), [2](https://news.ycombinator.com/item?id=46859054), [3](https://www.discovery.org/a/35779/)]

***

### 1. The Slopware Backlash & The GPU "Spinner" Bug

The primary complaint about the Electron interface is that it feels remarkably unoptimized, earning it the label of **"slopware"** among performance purists. \[[1](https://news.ycombinator.com/item?id=48626930)]

- **The GPU Spike:** Developers on Hacker News frequently point out that the app burns battery and runs hot. One highly upvoted comment noted that simply having the app window unhidden causes it to draw **100% of the GPU just to display a loading spinner animation**. \[[1](https://www.reddit.com/r/codex/comments/1qu2nz5/introducing%5Fthe%5Fcodex%5Fapp/), [2](https://news.ycombinator.com/item?id=48626930)]
- **The "Vibe Coding" Excuse:** Many engineers attribute this poor optimization to OpenAI's public boasting about how Codex is largely built and maintained by AI agents rather than human software engineers. Commenters argue this is a primary indicator of what happens when a trillion-dollar company relies too heavily on "vibe coding" instead of writing tight, native software. \[[1](https://news.ycombinator.com/noobcomments?next=48634690), [2](https://news.ycombinator.com/item?id=48626930)]

### 2. The Nightmare SSD Logging Scandal

Right now, the absolute hottest topic of anger is a devastating bug discovered in the local data layer. \[[1](https://www.reddit.com/r/codex/comments/1ucnaim/top%5Fon%5Fhacker%5Fnews%5Ftoday%5Fcodex%5Fdropped%5F37%5Ftb%5Fof/), [2](https://www.notebookcheck.net/OpenAI-Codex-has-a-critical-bug-that-could-kill-your-SSD-in-under-a-year.1326191.0.html)]

- **37 Terabytes of Writes:** Users caught Codex continuously hammering a local SQLite database (`~/.codex/logs_2.sqlite`) with trace-level telemetry and raw WebSocket strings. \[[1](https://www.reddit.com/r/codex/comments/1ucnaim/top%5Fon%5Fhacker%5Fnews%5Ftoday%5Fcodex%5Fdropped%5F37%5Ftb%5Fof/), [2](https://www.notebookcheck.net/OpenAI-Codex-has-a-critical-bug-that-could-kill-your-SSD-in-under-a-year.1326191.0.html)]
- **Hardware Failure Risks:** The bug silently writes up to **37 TB of data over 21 days**—which scales out to roughly **640 Terabytes a year**. Tech communities are furious because this is enough volume to completely destroy a consumer SSD's write endurance within a single year. \[[1](https://www.reddit.com/r/codex/comments/1ucnaim/top%5Fon%5Fhacker%5Fnews%5Ftoday%5Fcodex%5Fdropped%5F37%5Ftb%5Fof/), [2](https://www.notebookcheck.net/OpenAI-Codex-has-a-critical-bug-that-could-kill-your-SSD-in-under-a-year.1326191.0.html)]
- **Aggressive File Deletion:** Worse yet, if the disk fills up from these massive logs, users found that Codex running in `/goal` mode would aggressively start deleting user files and folders in a misguided attempt to free up system disk space. \[]

### 3. Cynicism Toward Dev-Machine Privileges

There is a widely shared, cynical consensus on why OpenAI doesn't seem to care about these resource leaks. \[[1](https://news.ycombinator.com/item?id=46859054)]

- Industry veterans note that because Codex’s primary target market is software developers carrying high-end MacBooks or premium workstations, OpenAI assumes its users won't notice the bloat. As one [Hacker News](https://news.ycombinator.com/item?id=46859054) comment put it: _"For a developer with a high-end MacBook, what is one more Electron window?"_ \[[1](https://news.ycombinator.com/item?id=46859054)]
- Meanwhile, developers on Linux and Windows feel neglected, pointing out that OpenAI prioritizing Apple Silicon left other platforms with broken notification handlers and buggy authentication loops. \[[1](https://github.com/openai/codex/issues/25231), [2](https://www.reddit.com/r/codex/comments/1qu2nz5/introducing%5Fthe%5Fcodex%5Fapp/)]

### 4. The Functional Irony: The Agent Loop is Still Good

The irony of the situation is that despite developers absolutely tearing the Electron wrapper apart, **they still use the underlying tool**. \[[1](https://www.reddit.com/r/OpenAI/comments/1u2pk7l/codex%5Fdesktop%5Fapp%5Fis%5Fvery%5Fmuch%5Fcapable%5Fof%5Fdoing/), [2](https://www.reddit.com/r/codex/comments/1ubz294/i%5Fused%5Fcodex%5Fto%5Foptimize%5Fand%5Fship%5Fan%5Felectron%5Fapp/)]

- The general consensus is that while the UI container is frustrating, the _App Server_ backend is incredibly powerful.
- Developers grudgingly tolerate the heavy app because its multi-file context tracking, code streaming, and local execution tools are significantly faster and more capable than using standard ChatGPT interfaces. \[[1](https://news.ycombinator.com/item?id=47970655), [2](https://www.reddit.com/r/codex/comments/1qu2nz5/introducing%5Fthe%5Fcodex%5Fapp/), [3](https://www.reddit.com/r/OpenAI/comments/1u2pk7l/codex%5Fdesktop%5Fapp%5Fis%5Fvery%5Fmuch%5Fcapable%5Fof%5Fdoing/)]

***

This exact frustration is precisely why tools like `codex-web-ui` and custom terminal configs became popular in the first place—developers wanted the raw power of the tool without allowing a poorly optimized Electron window to drain their laptop battery and burn out their hard drives. \[[1](https://www.reddit.com/r/codex/comments/1qu2nz5/introducing%5Fthe%5Fcodex%5Fapp/), [2](https://www.notebookcheck.net/OpenAI-Codex-has-a-critical-bug-that-could-kill-your-SSD-in-under-a-year.1326191.0.html)]

Are you hoping to **mitigate that SSD logging issue** on your current machine, or are you looking to script a **custom cron job** to keep those SQLite databases cleared out? Let me know so I can give you the preventative commands!

- [link](https://news.ycombinator.com/item?id=48626930)\
  Codex logging bug may write TBs to local SSDs | Hacker News\
  Codex logging bug may write TBs to local SSDs. Hacker News. Hacker Newsnew | past | comments | ask | show | jobs | submit. login. ...\
  Hacker News
- [link](https://news.ycombinator.com/item?id=46859054)\
  The Codex App | Hacker News\
  That might be true (although you do add in the mess of web frameworks), but I strongly believe that resource usage must factor int...\
  Hacker News
- [link](https://www.reddit.com/r/codex/comments/1qu2nz5/introducing%5Fthe%5Fcodex%5Fapp/)\
  Introducing the Codex app : r/codex - Reddit\
  1 more reply. Metalwell. • 5mo ago. Is this slower than the CLI because I feel like it is slower than the CLI? Especially while it...\
  Reddit

Show all

## You said: what does the gui provide more than the cli

4:55 AM

Refresh to continue.

## You said: what does the gui provide more than the cli

While the Codex CLI/TUI is a powerhouse for speed and resource management, the **Codex Desktop GUI** provides a completely different category of <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">spatial awareness and multi-modal features</mark>. It acts as a full-fledged IDE dashboard rather than a linear command pipeline.

The specific advantages the GUI provides over the CLI are categorized below:

### 1. Multi-Modal Vision ("Browser Use")

The absolute biggest functional gap between the two is visual capabilities.

- **The GUI:** Includes an integrated Chromium web view. If you ask Codex to build a frontend web application, it will spin up a local development server, pull up the site inside its own panel, and use a vision model to take screenshots, inspect layouts, and literally **click around the page** to debug visual CSS layouts or broken JavaScript buttons.
- **The CLI:** Completely blind to visual elements. It can only read your source code text, execute backend shell commands, and read raw text error logs. \[[1](https://www.firecrawl.dev/blog/why-clis-are-better-for-agents), [2](https://medium.com/@sohail%5Fsaifi/the-6-cli-coding-agents-competing-for-your-terminal-right-now-claude-code-vs-codex-5-3-e419eef43b08)]

### 2. Deep Project Memory & Persistent Workspaces

The CLI is built for immediate, fast execution loops. The GUI is built for long-term project management. \[[1](https://www.starwindsoftware.com/blog/cli-vs-gui-for-vmware-admins/), [2](https://www.reddit.com/r/emacs/comments/1rtune6/gui%5Fvs%5Fterminal%5Femacs%5Fwhat%5Fdo%5Fyou%5Factually%5Fuse/)]

- **Project Dashboard:** The GUI features a left-hand navigation sidebar that saves independent workspace sessions, complete with recent project paths, chat history, and separate branching timelines.
- **State Preservation:** You can completely close the GUI window mid-task, reopen it hours later, and pick up right where you left off with your token context and chat history fully preserved. The CLI operates as a temporary session that closes out once a goal is completed or canceled. \[[1](https://vanja.io/claude-code-gui-vs-terminal-a-tale-of-two-workflows/)]

### 3. Spatial, Side-by-Side Diffs

Reviewing code modifications is significantly easier on the eyes inside the desktop interface.

- **The GUI:** Uses a modern, interactive multi-panel interface. When the agent alters your code, it displays changes in a side-by-side split view with clean green/red color highlighting. You can selectively click specific lines or individual code blocks to accept or reject them using your mouse. \[[1](https://medium.com/ai-simplified-in-plain-english/terminal-ai-coding-revolution-cli-based-agents-unleashed-7848d5e31cca)]
- **The CLI:** Relies on standard inline git-style diff notation output directly into your scrollback history, which can become incredibly difficult to scan when the agent refactors dozens of lines across 10 different files simultaneously.

### 4. Interactive Approvals & Task Scoping

When giving a complex AI agent full write permissions on your system, safety requires fine-grained controls.

- **The GUI:** When you input an open-ended goal (e.g., _"Audit this repository for security flaws"_), the GUI freezes execution and presents a checklist of checkboxes showing exactly which files it wants to touch and which shell commands it intends to run. You can manually uncheck specific steps before letting it proceed.
- **The CLI:** While it has approval loops, it presents them line-by-line as text prompts (`Run this command? y/n`). If you want to skip a specific step or modify a sub-task on the fly, you usually have to abort the entire sequence and start over. \[[1](https://medium.com/@dorangao/comparing-codex-cli-vs-claude-code-vs-gemini-cli-ai-coding-tools-in-your-terminal-1a238c329cbe), [2](https://skywork.ai/skypage/en/claude-cli-vs-code/2044670113551699968)]

***

### Feature Summary Matrix

| Feature Capability \[[1](https://medium.com/@ashwinjosh/tui-speed-of-a-cli-comfort-of-a-gui-5a0dc249de1d)] | Codex Desktop GUI | Codex CLI / TUI        |
| ---------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------- |
| **Visual App Debugging (Browser Use)**                                                                     | **Yes** ✅        | No ❌                  |
| **Split-Pane Code Diff Reviews**                                                                           | **Yes** ✅        | No (Inline Text)       |
| **Persistent Workspace Tabs**                                                                              | **Yes** ✅        | No ❌                  |
| **Global Quick-Open Overlay**                                                                              | **Yes** ✅        | No ❌                  |
| **Extremely Low Memory Footprint**                                                                         | No (Electron)     | **Yes (Pure Rust)** ✅ |
| **Automated Local Background Scripts**                                                                     | No ❌             | **Yes (Yolo Mode)** ✅ |

If you are developing **frontend apps, complex dashboards, or juggling multiple separate projects**, the GUI's visual interface offers clear benefits. If you are strictly working on **backend APIs, DevOps scripting, or editing system configuration files**, the CLI gives you almost everything you need without the bloat. \[[1](https://blog.openreplay.com/should-developers-only-use-the-cli/), [2](https://brainly.in/question/27671923), [3](https://mishka.tools/blog/best-ui-components-library-for-phoenix-and-phoenix-liveview)]

Are you looking to use the GUI specifically for its **visual preview panels**, or would you like to know how to simulate multiple workspaces using **Tmux** alongside the CLI? Let me know!

- [link](https://www.firecrawl.dev/blog/why-clis-are-better-for-agents)\
  Why CLIs Are Better for AI Coding Agents Than IDEs\
  Mar 12, 2026 — CLI agents are technically blind. When you need to describe a UI bug, reference a design mockup, or understand web page layout, te...\
  \
  \
  Firecrawl
- [link](https://medium.com/@sohail%5Fsaifi/the-6-cli-coding-agents-competing-for-your-terminal-right-now-claude-code-vs-codex-5-3-e419eef43b08)\
  The 6 CLI Coding Agents Competing for Your Terminal Right Now: Claude Code vs Codex 5.3\
  Mar 13, 2026 — Codex CLI is OpenAI's answer to Claude Code, and it takes a fundamentally different approach. Built in Rust, it's the only fully o...\
  \
  \
  Medium
- [link](https://www.starwindsoftware.com/blog/cli-vs-gui-for-vmware-admins/)\
  CLI vs. GUI for VMware Admins\
  Mar 13, 2018 — CLI is quite fast. Also for PowerCLI, after that PowerShell has been loaded, the execution is fast.\
  \
  \
  StarWind

Show all

## You said: attempts to replicate and open

Because OpenAI decided to make the core backend code—the underlying Rust-based **`app-server` daemon**—completely open-source while keeping the official Electron GUI locked away, developers immediately launched a wave of **open-source attempts to replicate, replace, and open up the interface**. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1u00hhl/any%5Fopensource%5Fgui%5Fbased%5Fcoding%5Fagent%5Fsimilar%5Fto/)]

Since the core engine communicates via open JSON-RPC 2.0 WebSockets, the community has reverse-engineered the protocol to break free from Electron’s constraints.

The most notable open-source replication attempts and custom clients fall into a few distinct strategies:

### 1. The "Clean-Room" Replications (Ditching Electron entirely)

Instead of fighting with OpenAI's closed-source React bundle, several developers built completely open-source desktop apps from scratch using hyper-optimized native engines:

- [**`CodexMonitor` / Nimbalyst**](https://nimbalyst.com/codex-gui/): This is one of the most successful community projects. It is a fully open-source, **MIT-licensed desktop GUI built on Tauri** (which uses a native OS webview instead of packing Chromium). It completely replicates the official app's multi-workspace project panel, side-by-side git diff review screens, and token timelines, but runs on a fraction of the RAM. \[[1](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)]
- [**`OpenCodex` by Indie Builders**](https://www.linkedin.com/posts/imdigitalashish%5Fopenai-launched-the-codex-desktop-app-recently-activity-7427203500692066304-YqZA): When OpenAI initially launched the desktop app as macOS-exclusive, Windows developers revolted. This project was built in pure, open-source code to replicate the core agentic desktop experience natively on Windows without requiring WSL hacks or closed-source tracking elements. \[[1](https://www.linkedin.com/posts/imdigitalashish%5Fopenai-launched-the-codex-desktop-app-recently-activity-7427203500692066304-YqZA), [2](https://blog.devgenius.io/openai-just-mass-deployed-codex-to-every-surface-developers-touch-e4b7eca12a1b)]

### 2. The Browser-Based Unpackers (Opening the Closed App)

Projects like [`friuns2/codexui`](https://github.com/friuns2/codex-web-ui) (originally _codex-web-ui_) take a more aggressive approach to opening the closed app.

- **The Replicated Loop:** It uses script-based reverse engineering to unpack the official closed-source production application archive (`app.asar`) on your local machine.
- **The Unlocked Port:** It injects standard network logic to bypass the native Electron container and re-routes the internal UI code so it can be served over a public `http://localhost:3000` port to any web browser on your network.

### 3. Fully Open Agent Alternatives

The frustration with OpenAI's "closed GUI / open backend" flip-flopping caused a chunk of the community to entirely abandon the official ecosystem to build fully model-agnostic, open-source replacements:

- **`OpenCode Web / Desktop`**: This project acts as a direct open-source structural clone of Codex's design language. It features a decoupled node-express backend daemon and a React frontend, allowing you to run a full agentic workspace via a terminal command (`opencode web`) or a desktop layout using any local or cloud AI model you want. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1u00hhl/any%5Fopensource%5Fgui%5Fbased%5Fcoding%5Fagent%5Fsimilar%5Fto/), [2](https://www.youtube.com/watch?v=w2%5FZwhzB1g4)]
- **`OpenChamber` & `Hermes Agent`**: Emerging community favorites that replicate the exact UX layout of Codex—multi-pane sidebars, plan reviews, and file tree targeting—while remaining completely open-source and modular. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1u00hhl/any%5Fopensource%5Fgui%5Fbased%5Fcoding%5Fagent%5Fsimilar%5Fto/)]

### What These Replications Unlock

By successfully replicating the interface via open-source tools, developers have bypassed OpenAI's built-in opinionated locks:

1. **Model Agnosticism:** The official GUI locks you strictly into OpenAI's models. Open-source alternatives let you plug the visual code-editor directly into other models like Claude 3.5 Sonnet or entirely local setups like Ollama and LM Studio. \[[1](https://news.ycombinator.com/item?id=43754620), [2](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/), [3](https://www.goodday.work/blog/best-codex-alternatives/)]
2. **Headless Server Deployment:** You can host an open replication on a powerful headless Linux server in your garage or cloud VPS, completely bypassing Electron, and open up the visual workspace safely via a web browser on an iPad or laptop. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1u00hhl/any%5Fopensource%5Fgui%5Fbased%5Fcoding%5Fagent%5Fsimilar%5Fto/), [2](https://www.youtube.com/watch?v=mTDt%5F30qAps)]
3. **Audited Security:** You can completely rip out the aggressive telemetry logging loops that are known to hammer SSD write endurance in the official client.

Are you looking to install one of these specific lightweight native wrappers like **CodexMonitor (Tauri)**, or do you want to learn how to hook a **local open-source LLM** into an open-source web interface? Let me know how you want to configure your stack! \[[1](https://news.ycombinator.com/item?id=43754620), [2](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)]

- [link](https://www.youtube.com/watch?v=mTDt%5F30qAps)\
  OpenClaw Use Cases That You Must Try\
  Mar 13, 2026 — and click through to make sure that they're actually functioning as intended because a lot of the time you might not realize if a ...\
  9:56\
  YouTube·Adrian Twarog
- [link](https://news.ycombinator.com/item?id=43754620)\
  OpenAI Codex CLI with open-source LLMs - Hacker News\
  Apr 21, 2025 — I've built Open Codex, a fully local, open-source alternative to OpenAI's Codex CLI. My initial plan was to fork their project and...\
  Hacker News
- [link](https://www.reddit.com/r/opencodeCLI/comments/1u00hhl/any%5Fopensource%5Fgui%5Fbased%5Fcoding%5Fagent%5Fsimilar%5Fto/)\
  Any Opensource GUI based Coding Agent, Similar to Codex app\
  Jun 8, 2026 — Opencode web or Opencode desktop is basically running cli behind the scene. Edit 2: OpenChamber seems like the best option as of n...\
  Reddit·r/opencodeCLI

Show all

## You said: are they less polished or feature rich than official codex

<mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the open-source community attempts are noticeably less feature-rich and require a lot more technical maintenance than the official Codex GUI.</strong></mark> \[[1](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)]

While community alternatives like CodexMonitor successfully recreate the text-chat interface, project sidebars, and split-screen code review windows, they completely miss the heavy-hitting, advanced automation layers that OpenAI restricts behind its closed-source ecosystem. \[[1](https://developers.openai.com/codex/app), [2](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/), [3](https://apps.microsoft.com/detail/9plm9xgg6vks?hl=en-US\&gl=SC)]

### 1. Missing Features in Open-Source Replications \[[1](https://medium.com/@kywe665/iceberg-vs-delta-vs-hudi-the-most-comprehensive-comparison-96577fc6dfc5)]

- **No Native "Computer Use" / OS Actions:** The official Codex app features a deep OS-level accessibility bridge. You can type `@Computer` and tell it to click specific native app options, take desktop screenshots, change local environment configurations, or run an iOS simulator for live visual regression testing. Open-source tools running inside a web browser tab or a basic container sandbox are completely blind and locked out from doing this. \[[1](https://developers.openai.com/codex/app/computer-use), [2](https://developers.openai.com/codex/app), [3](https://www.youtube.com/watch?v=KTg4adfbNQ0)]
- **No OpenAI "Operator" Browser Automation:** When building web apps, the official app can natively deploy OpenAI's internal [Operator browser-agent engine](https://openai.com/index/introducing-operator/). It can open automated Chromium contexts in the background, navigate through standard authentication prompts, check DevTools logs for errors, and directly interact with web elements to prove your frontend code actually works. Replica apps must rely on basic text-based terminal feedback. \[[1](https://openai.com/index/introducing-operator/), [2](https://www.youtube.com/watch?v=KTg4adfbNQ0), [3](https://www.thurrott.com/a-i/openai-a-i/335030/openai-releases-a-major-update-to-codex)]
- **No Automated Worktree Handling:** The official desktop client has built-in, automated Git worktree support. If you run three separate agents in parallel on the same project, Codex automatically splits them into hidden local Git environments so they never corrupt your current working files or overwrite each other. The community clones leave file conflict management entirely up to you. \[[1](https://developers.openai.com/codex/app), [2](https://apps.microsoft.com/detail/9plm9xgg6vks?hl=en-US\&gl=SC)]
- **Missing Marketplace Plugins & Skills:** The official ecosystem is natively tied to ecosystem-wide extensions and official enterprise skills (like Composio, Figma, Slack, Linear, and [official Model Context Protocol integrations](https://developers.openai.com/codex/app)). Setting these up inside a reverse-engineered UI requires tedious, custom JSON-RPC schema configuration. \[[1](https://github.com/hashgraph-online/awesome-codex-plugins), [2](https://github.com/composiohq/awesome-codex-skills), [3](https://developers.openai.com/codex/app)]

### 2. The Polish & Maintenance Gap

- **The Broken Update Loop:** Every time OpenAI rolls out a backend optimization update to how the core `app-server` formats plan blocks, task steps, or confirmation check-boxes, **the open-source UIs briefly break.** Using a community wrapper means dealing with GitHub bugs where the UI freezes, buttons disappear, or text generation cuts off until someone pushes a manual fix.
- **The Windows/Linux Styling Glitches:** OpenAI poured massive UI engineering into smooth font rendering, dark-mode styling, and snappy layout transitions. Open-source replications—especially those running inside standard web browsers via `codex-web-ui`—frequently struggle with layout scaling errors when trying to display long multi-file code diff comparison views.

### Summary: The Ultimate Tradeoff

| Dimension \[[1](https://developers.openai.com/codex/app), [2](https://developers.openai.com/codex/app/computer-use), [3](https://www.eigent.ai/blog/codex-vs-copilot-coworker)] | Official Codex Desktop App             | Open-Source Alternatives                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------------------------------------- |
| **UX & Visual Polish**                                                                                                                                                          | **Premium / Fluid**                    | Functional / Glitchy at times             |
| **Agentic Power**                                                                                                                                                               | **Full (Vision, Browser, OS Control)** | Limited (Text & Terminal only)            |
| **Hardware Resources**                                                                                                                                                          | Heavy RAM (Bloated Electron)           | **Ultra-Lightweight / Headless Friendly** |
| **Model Freedom**                                                                                                                                                               | OpenAI Models Only                     | **Any Model (Ollama, Claude, etc.)**      |

If your goal is to build intricate **frontend web features**, test visual app UI flows, or have a smooth app store experience, you will find the community clones too stripped down. However, if your focus is **pure backend development** and you just want a light sidebar layout to review code diffs on a remote server without Electron destroying your battery life, the open-source trade-off is absolutely worth it. \[[1](https://developers.openai.com/codex/app/computer-use), [2](https://developers.openai.com/codex/app), [3](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)]

Are you primarily building **frontend apps that require visual interface testing**, or are you working on **isolated backend codebases** where a stripped-down interface is fine? I can help you weigh which route fits best.

- [link](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)\
  Best Codex GUI 2026: 4 Codex Desktop Apps Compared\
  Mar 30, 2026 — Remote backend mode if you want Codex running on another machine. Desktop support across macOS, Linux, and Windows. The tradeoffs:\
  Nimbalyst
- [link](https://openai.com/index/introducing-operator/)\
  Introducing Operator - OpenAI\
  Jan 23, 2025 — How to use. To get started, simply describe the task you'd like done and Operator can handle the rest. Users can choose to take ov...\
  OpenAI
- [link](https://developers.openai.com/codex/app/computer-use)\
  Computer Use – Codex app | OpenAI Developers\
  Computer Use. ... In supported regions, computer use in the Codex app is available on macOS and Windows. Install the Computer Use ...\
  OpenAI Developers

Show all

# install codex gui on ubuntu

To install the official OpenAI Codex GUI (Desktop) application on Ubuntu, you will need to <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">use a community-driven wrapper</mark>, as OpenAI does **not provide a native Linux desktop distribution**. The most popular automated utility for this is the open-source [Codex Desktop for Linux installer](https://github.com/distsystem/codex-desktop-linux), which unpacks, patches, and builds the application bundle directly on Ubuntu. \[[1](https://community.openai.com/t/codex-app-for-linux-please/1378318), [2](https://github.com/areu01or00/Codex-App-Linux), [3](https://github.com/distsystem/codex-desktop-linux), [4](https://www.reddit.com/r/codex/comments/1qx455w/i%5Fgot%5Fthe%5Fmacos%5Fcodex%5Fdesktop%5Fapp%5Fdmg%5Frunning%5Fon/)]

Alternatively, if you only need the interface to interact with your code, you can easily install the official [OpenAI Codex CLI](https://developers.openai.com/codex/cli), which features a rich, interactive terminal user interface (TUI). \[[1](https://developers.openai.com/codex/cli), [2](https://www.lineserve.net/guides/comprehensive-guide-to-installing-codex-cli-on-linux)]

***

### Option 1: Install Codex GUI (Desktop App) \[[1](https://www.reddit.com/r/codex/comments/1qwf5kw/i%5Fgot%5Fthe%5Fcodex%5Fapp%5Frunning%5Fon%5Flinux%5Fin%5F20/)]

This method clones the wrapper repository, installs the required building packages, and builds the graphical Electron application locally. \[[1](https://github.com/ilysenko/codex-desktop-linux), [2](https://github.com/gxanshu/codex-desktop-appimage)]

1. **Install dependencies**\
   Open your terminal and install the required build packages by running:\
   bash

<!---->

```
sudo apt update
sudo apt install python3 p7zip-full curl unzip build-essential ydotool
```

Use code with caution.
2\. **Clone the repository**\
Clone the repository that automates the installation process:\
bash

```
git clone https://github.com/ilysenko/codex-desktop-linux.git
cd codex-desktop-linux
```

Use code with caution.
3\. **Bootstrap and install the app**\
Run the native bootstrap script, which fetches the upstream app bundle, patches the web UI, builds a local native package (`.deb`), and installs it on your system:\
bash

```
make bootstrap-native
```

Use code with caution.
4\. **Launch the GUI**\
Once finished, you can launch the app from your application menu or start it directly from the shell. \[[1](https://www.reddit.com/r/codex/comments/1qwf5kw/i%5Fgot%5Fthe%5Fcodex%5Fapp%5Frunning%5Fon%5Flinux%5Fin%5F20/), [2](https://github.com/gxanshu/codex-desktop-appimage), [3](https://github.com/ilysenko/codex-desktop-linux), [4](https://github.com/distsystem/codex-desktop-linux), [5](https://github.com/areu01or00/Codex-App-Linux)]

***

### Option 2: Install Codex CLI (Terminal GUI) \[[1](https://tosea.ai/blog/openai-codex-complete-guide-2026)]

If you prefer a lightweight environment, the official CLI includes an interactive user interface with modal menus for choosing models, review systems, and token tracking. \[[1](https://www.lineserve.net/guides/comprehensive-guide-to-installing-codex-cli-on-linux)]

1. **Install Node.js and npm** (if not already installed):\
   bash

<!---->

```
sudo apt update
sudo apt install nodejs npm
```

Use code with caution.
2\. **Install Codex Globally**\
Install the official package from npm:\
bash

```
sudo npm install -g @openai/codex
```

Use code with caution.
3\. **Authenticate and Run**\
Initiate the pairing sequence to tie your terminal to your OpenAI account, then navigate to your project to start using it:\
bash

```
codex login
cd /path/to/your/project
codex
```

Use code with caution.\
\[[1](https://www.youtube.com/watch?v=LKl8diOYf5o), [2](https://doc.newapi.pro/en/apps/codex-cli/), [3](https://www.lineserve.net/guides/comprehensive-guide-to-installing-codex-cli-on-linux), [4](https://www.reddit.com/r/ChatGPTCoding/comments/1nphspy/codex%5Finstall%5Fon%5Flinux%5Fwithout%5Fbrowser%5Fnot/)]

***

Would you like help resolving any **compilation errors** during the setup, or are you looking to connect Codex to a **local LLM** like Ollama? \[[1](https://www.lineserve.net/guides/comprehensive-guide-to-installing-codex-cli-on-linux), [2](https://www.reddit.com/r/ChatGPTCoding/comments/1nphspy/codex%5Finstall%5Fon%5Flinux%5Fwithout%5Fbrowser%5Fnot/)]

- [link](https://community.openai.com/t/codex-app-for-linux-please/1378318)\
  Codex app for linux? please - OpenAI Developer Community\
  Apr 1, 2026 — Codex. codex-app. af0r April 1, 2026, 3:32pm 1. had to move off of windows (really bad OS) now im in ubuntu, missing the codex app...\
  OpenAI Developer Community
- [link](https://www.reddit.com/r/codex/comments/1qwf5kw/i%5Fgot%5Fthe%5Fcodex%5Fapp%5Frunning%5Fon%5Flinux%5Fin%5F20/)\
  I got the Codex App running on Linux in ~20 minutes ... - Reddit\
  Feb 5, 2026 — GroundbreakingWolf7. • 1mo ago. I asked KimiK2.6 to write me an installation script to install and configure it in Ubuntu :D and i...\
  Reddit·r/codex
- [link](https://www.reddit.com/r/codex/comments/1qx455w/i%5Fgot%5Fthe%5Fmacos%5Fcodex%5Fdesktop%5Fapp%5Fdmg%5Frunning%5Fon/)\
  I got the macOS Codex desktop app (.dmg) running on Ubuntu Linux\
  Feb 6, 2026 — \* Step 1 — Preparing a runnable Linux payload. From the DMG: Extracted the application bundle. Unpacked app.asar → asar-unpacked. ...\
  Reddit·r/codex

Show all

## You said: flatpak? official deb?

**No official `.deb` package or Flathub Flatpak exists** from OpenAI for the Codex GUI. OpenAI strictly limits its official desktop releases to macOS and Windows. \[[1](https://github.com/ilysenko/codex-desktop-linux), [2](https://github.com/openai/codex/issues/11023), [3](https://www.verdent.ai/guides/install-codex-cli-mac-windows-linux), [4](https://www.youtube.com/watch?v=cpEEWY-TSh8), [5](https://www.reddit.com/r/codex/comments/1sx1c4k/unofficial%5Fcodex%5Fdesktop%5Ffor%5Flinux%5Fdeb%5Frpm%5Farch/)]

However, you can use community-maintained alternatives to avoid compilation: \[[1](https://github.com/pop-os/shop/issues/385), [2](https://www.reddit.com/r/linux%5Fgaming/comments/wat391/moving%5Ffrom%5Fsteam%5Fnative%5Fto%5Fsteam%5Fflatpak%5Fwith%5Fmy/)]

### 🏭 Pre-built Unofficial `.deb` Packages \[[1](https://www.reddit.com/r/ProtonVPN/comments/1ali4gi/is%5Fthis%5Fnot%5Fan%5Fofficial%5Fpackage%5Fof%5Fproton%5Fvpn/), [2](https://www.reddit.com/r/codex/comments/1sx1c4k/unofficial%5Fcodex%5Fdesktop%5Ffor%5Flinux%5Fdeb%5Frpm%5Farch/)]

If you do not want to use the `make bootstrap-native` compilation tool chain, a community member maintains an automated GitHub pipeline called [Codex Desktop DEB](https://github.com/guangzhaoli/codex-desktop-deb). It detects official OpenAI upstream updates, automatically bundles them into ready-to-install Linux packages, and publishes them. \[[1](https://github.com/guangzhaoli/codex-desktop-deb)]

- **How to use:** Navigate to the "Releases" section of the repository, download the latest `.deb` file, and install it with:\
  bash

<!---->

```
sudo apt install ./codex-desktop*.deb
```

Use code with caution.

### 📦 Flatpak Options

There is **no official Flatpak listing on Flathub**. There are community build configurations available (such as the Codex Linux Flatpak script designed for ARM64 and x86\_64 machines), but you must run a script to assemble it on your machine locally. \[, [2](https://github.com/openai/codex/issues/8160), [3](https://discussion.fedoraproject.org/t/how-to-install-cli-flatpak-apps/81785), [4](https://www.reddit.com/r/linux%5Fgaming/comments/1qxfvgf/minecraft%5Ffrom%5Fflat%5Fpack%5For%5Fminecraftnet/)]

### Summary Comparison

| Format \[[1](https://github.com/guangzhaoli/codex-desktop-deb), [2](https://github.com/ilysenko/codex-desktop-linux), [3](https://www.reddit.com/r/codex/comments/1sx1c4k/unofficial%5Fcodex%5Fdesktop%5Ffor%5Flinux%5Fdeb%5Frpm%5Farch/), [4](https://caasify.com/blog/install-deb-file-ubuntu-guide-2025)] | Source                                                                  | Auto-Updates?               | Setup Ease                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | --------------------------- | ----------------------------- |
| **Official `.deb`**                                                                                                                                                                                                                                                                                          | ❌ None                                                                 | N/A                         | N/A                           |
| **Official Flatpak**                                                                                                                                                                                                                                                                                         | ❌ None                                                                 | N/A                         | N/A                           |
| **Unofficial `.deb`**                                                                                                                                                                                                                                                                                        | Automated GitHub Releases                                               | Manual re-download          | ⭐ Easy (Double-click or apt) |
| **Local `.deb` Build**                                                                                                                                                                                                                                                                                       | [Source Build Wrapper](https://github.com/ilysenko/codex-desktop-linux) | Yes (Via background daemon) | ⚙️ Medium (Requires terminal) |

Do you want help **downloading and validating** the latest pre-built community `.deb`, or should we look at setting up the **auto-update daemon** for a local build? \[[1](https://www.reddit.com/r/codex/comments/1sx1c4k/unofficial%5Fcodex%5Fdesktop%5Ffor%5Flinux%5Fdeb%5Frpm%5Farch/)]

- [link](https://github.com/ilysenko/codex-desktop-linux)\
  Run OpenAI Codex Desktop on Linux - automated installer\
  Codex Desktop for Linux. Unofficial Linux build wrapper for OpenAI Codex Desktop. The official Codex app is available for macOS an...\
  GitHub
- [link](https://www.verdent.ai/guides/install-codex-cli-mac-windows-linux)\
  How to Install Codex CLI on Mac, Windows, and Linux\
  May 13, 2026 — No deb package: Codex CLI does not ship a . deb or . rpm package. npm and the prebuilt binary from GitHub Releases are the support...\
  Verdent AI
- [link](https://github.com/openai/codex/issues/11023)\
  Codex desktop app for Linux · Issue #11023 - GitHub\
  Feb 7, 2026 — Replace codex CLI binary in build, Trivial, Already published for all Linux targets. Rebuild native modules for linux-arm64, Trivi...\
  GitHub

Show all

## You said: codex failed to start no such bindings found electron\_...

This error occurs because Codex's native Node.js C++ components (such as `better-sqlite3` or `node-pty`) **were compiled for a different target runtime** than the local Electron framework running on your Ubuntu system. When you use automated wrappers or pre-built community `.deb` packages, the underlying native binaries mismatch the system's Electron binary version, causing execution to halt immediately. \[[1](https://www.reddit.com/r/codex/comments/1qwf5kw/i%5Fgot%5Fthe%5Fcodex%5Fapp%5Frunning%5Fon%5Flinux%5Fin%5F20/), [2](https://community.openai.com/t/linux-enablement-startup-remediation-and-runtime-validation-for-the-codex-desktop-path-native-linux-client-working/1376148)]

You can resolve this issue by executing one of the troubleshooting options below.

***

### Fix 1: Force a Native Rebuild (Recommended)

If you compiled Codex using the source wrapper, you must force Node to rebuild its C++ addons against your _exact_ system Electron headers. \[[1](https://community.openai.com/t/linux-enablement-startup-remediation-and-runtime-validation-for-the-codex-desktop-path-native-linux-client-working/1376148)]

1. **Navigate to the application source folder:**\
   bash

<!---->

```
cd ~/codex-desktop-linux  # Or wherever you cloned the tool
```

Use code with caution.
2\. **Clear out old builds and locks:**\
bash

```
rm -rf node_modules package-lock.json
```

Use code with caution.
3\. **Re-install dependencies and force-recompile native bindings:**\
bash

```
npm install
npx electron-rebuild
```

Use code with caution.
4\. **Repackage the bundle:**\
bash

```
make bootstrap-native
```

Use code with caution.

***

### Fix 2: Switch to the Validated Pre-Built Pipeline

If you originally downloaded an unstable third-party configuration or ran a legacy script, switch to the community branch that explicitly patches this runtime binding failure (specifically adjusting for Electron): \[[1](https://community.openai.com/t/linux-enablement-startup-remediation-and-runtime-validation-for-the-codex-desktop-path-native-linux-client-working/1376148)]

1. Purge your faulty installation:\
   bash

<!---->

```
sudo apt purge codex-desktop
```

Use code with caution.
2\. Install the production-ready build maintained on the [Codex Desktop Linux Engine](https://github.com/ilysenko/codex-desktop-linux) which correctly binds the local SQLite engine:\
bash

```
git clone https://github.com
cd codex-desktop-linux
make bootstrap-native
```

Use code with caution.\
\[, [2](https://github.com/opensearch-project/opensearch-build/issues/3130)]

***

### Fix 3: Ensure the Companion CLI Backend is Active

The Linux GUI layout is fundamentally a web wrapper. It fails with fatal initialization loop crashes if it cannot securely communicate with the local developer companion client daemon over your system loopback interface. \[, [2](https://github.com/openai/codex/issues/28103)]

1. **Verify your local binary is discoverable globally:**\
   bash

<!---->

```
which codex
```

Use code with caution.\
_If it says "command not found", run `sudo npm install -g @openai/codex`._
2\. **Start the companion agent terminal daemon manually in the background before launching the UI:**\
bash

```
codex app-server start &
```

Use code with caution.\
\[[1](https://ofox.ai/blog/codex-command-not-found-fix-npm-install-2026/)]

***

If the app still crashes, let me know:

- What **exact error string or module path** follows `electron_...` (e.g., `realm.node`, `sqlite`, or `pty`)?
- Your **Ubuntu version** (`lsb_release -a`) \[[1](https://github.com/realm/realm-js/issues/5618)]

I can pinpoint the precise target headers you need to pass during the rebuild!

- [link](https://github.com/openai/codex/issues/28103)\
  \[Bug] Codex desktop 26.609.4994.0 (MSIX) missing Linux ...\
  Jun 13, 2026 — transport\_connect\_failed errorMessage="Unable to locate the Codex CLI binary. Set CODEX\_CLI\_PATH or ensure the Electron resources ...\
  GitHub
- [link](https://ofox.ai/blog/codex-command-not-found-fix-npm-install-2026/)\
  codex: command not found? 7 Fixes for npm install - OfoxAI\
  Jun 4, 2026 — codex: command not found? 7 Fixes for npm install -g @openai/codex (2026). Fix codex: command not found after npm install -g @open...\
  Ofox AI
- [link](https://github.com/realm/realm-js/issues/5618)\
  Electron - Could not locate the bindings file · Issue #5618\
  Mar 22, 2023 — What actually happened. Got an error when initializing the app. Stacktrace & log output. Uncaught Error: Could not locate the bind...\
  GitHub

Show all

# how to search an installed package on dpkg ubuntu and remove

To search for and remove an installed package on Ubuntu using `dpkg`, use the terminal commands below. \[[1](https://www.yahoo.com/tech/uninstall-software-using-command-line-183114520.html), [2](https://1gbits.com/blog/install-deb-file-ubuntu/), [3](https://www.educative.io/answers/what-is-the-linux-dpkg-command)]

### Search for a Package

You can search through your installed packages using `dpkg -l` combined with `grep`. \[[1](https://www.linode.com/docs/guides/apt-package-manager/), [2](https://www.linuxjournal.com/content/unlocking-power-dpkg-debian-package-management-skills), [3](https://www.liquidweb.com/blog/how-to-uninstall-software-on-ubuntu/)]

- **Command**: `dpkg -l | grep "package_name"`
- **Example**: `dpkg -l | grep "nginx"`
- **Result**: This lists all installed packages matching that name. \[[1](https://codefinity.com/courses/v2/007a3d96-0243-4c27-b7a9-be911f65da05/0f121c86-84ad-4931-9347-e281b0d31d4c/abc2c974-af0b-4e82-a41f-455234d2870a), [2](https://vsys.host/how-to/how-to-install-deb-files-on-ubuntu), [3](https://alexhost.com/faq/installing-programs-and-deb-packages/), [4](https://linuxize.com/post/how-to-install-deb-packages-on-ubuntu/)]

### Remove a Package

You have two options for removal depending on whether you want to keep configuration files. \[[1](https://www.digitalocean.com/community/tutorials/dpkg-command-in-linux), [2](https://dl.acm.org/doi/fullHtml/10.5555/364352.364661), [3](https://askubuntu.com/questions/853674/deinstall-packages-remain-after-upgrade)]

### Option 1: Remove package but keep configurations \[[1](https://labex.io/tutorials/linux-how-to-master-linux-package-management-with-apt-393115)]

- **Command**: `sudo dpkg -r package_name`
- **Use case**: Best if you plan to reinstall later. \[[1](https://www.redswitches.com/blog/install-deb-files-on-ubuntu/), [2](https://www.interserver.net/tips/kb/a-beginners-guide-to-linux-package-managers/)]

### Option 2: Remove package and delete configurations (Purge) \[[1](https://www.scaler.com/topics/how-to-uninstall-package-in-linux/), [2](https://askubuntu.com/questions/1028464/error-remove-a-package-which-is-not-installed)]

- **Command**: `sudo dpkg -P package_name`
- **Use case**: Best for a completely clean removal. \[[1](https://www.linuxjournal.com/content/unlocking-power-dpkg-debian-package-management-skills)]

### Troubleshooting Dependencies

If `dpkg` throws a dependency error during removal, use `apt` to safely clean it up. \[[1](https://www.ninjaone.com/blog/how-to-fix-broken-debian-packages/)]

- **Fix broken dependencies**: `sudo apt-get -f install`
- **Remove leftover dependencies**: `sudo apt autoremove` \[[1](https://1gbits.com/blog/how-to-fix-ubuntu-broken-packages/), [2](https://askubuntu.com/questions/482816/how-do-i-resolve-not-fully-installed-package-python3-setuptools), [3](https://www.scaler.com/topics/cyber-security/package-management-in-linux/)]

To help you further, please let me know:

- What is the **exact name** of the package?

- Are you getting any **error messages**?

- Do you need to save its **configuration files**?

- [link](https://www.yahoo.com/tech/uninstall-software-using-command-line-183114520.html)\
  How to Uninstall Software Using the Command Line in Linux\
  Aug 12, 2024 — You can also use the "dpkg" command to see a list of all installed packages on your computer. Press Ctrl+Alt+T to open a Terminal ...\
  \
  \
  Yahoo

- [link](https://1gbits.com/blog/install-deb-file-ubuntu/)\
  Install deb File Ubuntu: Easy Methods to Install .deb Packages on Ubuntu\
  Apr 13, 2026 — Option 3: dpkg Command When you need to remove a . deb package in Ubuntu, the dpkg command offers a robust and direct solution thr...\
  \
  \
  1Gbits

- [link](https://www.educative.io/answers/what-is-the-linux-dpkg-command)\
  What is the Linux dpkg command?\
  Some command functions of dpkg 1. Check if a package is installed or not 3. List the contents of a single package 4. Remove an alr...\
  \
  Educative

Show all

# . install and compile

```sh
 ~ % cd Projects
 ~/Projects % git clone https://github.com/ilysenko/codex-desktop-linux.git
cd codex-desktop-linux

Cloning into 'codex-desktop-linux'...
remote: Enumerating objects: 6474, done.
remote: Counting objects: 100% (203/203), done.
remote: Compressing objects: 100% (105/105), done.
remote: Total 6474 (delta 139), reused 100 (delta 98), pack-reused 6271 (from 3)
Receiving objects: 100% (6474/6474), 3.73 MiB | 296.00 KiB/s, done.
Resolving deltas: 100% (4081/4081), done.
 ~/Projects/codex-desktop-linux
 % sudo dpkg -r codex-desktop
(Reading database ... 412332 files and directories currently installed.)
Removing codex-desktop (2026.06.23.042200) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
Processing triggers for gnome-menus (3.36.0-1.1ubuntu3) ...
Processing triggers for desktop-file-utils (0.27-2build1) ...
 ~/Projects/codex-desktop-linux
 % make bootstrap-native

[make] Installing native build dependencies
bash scripts/install-deps.sh
[INFO]  Detected Debian/Ubuntu (apt)
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
python3 is already the newest version (3.12.3-0ubuntu2.1).
p7zip-full is already the newest version (16.02+transitional.1).
curl is already the newest version (8.5.0-2ubuntu10.9).
unzip is already the newest version (6.0-28ubuntu4.1).
build-essential is already the newest version (12.10ubuntu1).
The following packages were automatically installed and are no longer required:
  distro-info gir1.2-javascriptcoregtk-4.1 gir1.2-snapd-2 gir1.2-webkit2-4.1 libeditorconfig0 libwebpdecoder3 update-notifier-common
Use 'sudo apt autoremove' to remove them.
The following packages will be upgraded:
  ca-certificates
1 upgraded, 0 newly installed, 0 to remove and 137 not upgraded.
Need to get 139 kB of archives.
After this operation, 54.3 kB disk space will be freed.
Get:1 https://mirrors.tuna.tsinghua.edu.cn/ubuntu noble-security/main amd64 ca-certificates all 20260601~24.04.1 [139 kB]
Fetched 139 kB in 1s (180 kB/s)
Preconfiguring packages ...
(Reading database ... 410217 files and directories currently installed.)
Preparing to unpack .../ca-certificates_20260601~24.04.1_all.deb ...
Unpacking ca-certificates (20260601~24.04.1) over (20240203) ...
Setting up ca-certificates (20260601~24.04.1) ...
Updating certificates in /etc/ssl/certs...
rehash: warning: skipping ca-certificates.crt,it does not contain exactly one certificate or CRL
14 added, 39 removed; done.
Processing triggers for man-db (2.12.0-4build2) ...
Processing triggers for ca-certificates (20260601~24.04.1) ...
Updating certificates in /etc/ssl/certs...
0 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
Processing triggers for ca-certificates-java (20240118) ...
done.
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.
npm warn Unknown user config "prefer-frozen-lockfile". This will stop working in the next major version of npm.
npm warn Unknown user config "resolution-mode". This will stop working in the next major version of npm.
[INFO]  Node.js toolchain available: node v24.14.0, npm 11.9.0, npx 11.9.0
[INFO]  cargo already installed (cargo 1.96.0 (30a34c682 2026-05-25))
[INFO]  System 7z is already new enough; skipping 7zz bootstrap
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
zenity is already the newest version (4.0.1-1build3).
The following packages were automatically installed and are no longer required:
  distro-info gir1.2-javascriptcoregtk-4.1 gir1.2-snapd-2 gir1.2-webkit2-4.1 libeditorconfig0 libwebpdecoder3 update-notifier-common
Use 'sudo apt autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 137 not upgraded.
[INFO]  All dependencies installed. You can now run: ./install.sh
PATH="$HOME/.cargo/bin:$PATH" make install-native
make[1]: Entering directory '/home/fira/Projects/codex-desktop-linux'
make build-app-fresh
make[2]: Entering directory '/home/fira/Projects/codex-desktop-linux'
[make] Regenerating codex-app from fresh DMG
MAX_BUILD_THREADS="0" ./install.sh --fresh ""
============================================
  Codex Desktop for Linux — Installer
============================================

[INFO] All system dependencies found (using 7z)
[INFO] Downloading managed Node.js v22.22.2 runtime...
############################################################################################################################### 100.0%
[INFO] Managed Node.js runtime ready: /home/fira/Projects/codex-desktop-linux/codex-app/resources/node-runtime
[INFO] Downloading Codex Desktop DMG...
[INFO] URL: https://persistent.oaistatic.com/codex-app-prod/Codex.dmg
############################################################################################################################### 100.0%
[INFO] Saved: /home/fira/Projects/codex-desktop-linux/Codex.dmg (501M)
[INFO] Extracting DMG with 7z...
[WARN] 7z exited with code 2 but app bundle was found; continuing
[WARN] Sub items Errors: 2 Archives with Errors: 1 Sub items Errors: 2
[INFO] Found: Codex.app
[INFO] Detected Electron version from package.json: 42.1.0
[INFO] Extracting app.asar...
[INFO] Native modules: better-sqlite3@12.9.0, node-pty@1.1.0
[INFO] Installing fresh sources from npm...

added 52 packages, and audited 53 packages in 8s

5 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
npm warn deprecated prebuild-install@7.1.3: No longer maintained. Please contact the author of the relevant native addon; alternatives are available.

added 35 packages, and audited 88 packages in 26s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
[INFO] Patched better-sqlite3 source for V8 external pointer API
[INFO] Compiling for Electron v42.1.0 (this takes ~1 min)...
[INFO] Using Electron headers: https://artifacts.electronjs.org/headers/dist
Searching dependency tree
Building modules: better-sqlite3, node-pty
✔ Rebuild Complete
[INFO] Native modules built successfully
[INFO] Patching Linux window and shell behavior...
Patched Linux window, shell, and appearance behavior: {
  target: '/tmp/tmp.pqHgfgC3yh/app-extracted/.vite/build/main-cC-d0ezP.js',
  mainBundle: 'main-cC-d0ezP.js',
  iconAsset: 'app-D0g8sCle.png',
  desktopName: 'codex-desktop.desktop'
}
[INFO] patch summary:
  required core: applied=14, already-applied=3
  optional core: applied=44, already-applied=3, skipped-disabled=3
  optional features: none enabled
[INFO] Repacking app.asar...
Ordering file has 100% coverage.
[INFO] app.asar patched
[INFO] Downloading Electron v42.1.0 for Linux...
[INFO] Downloading electron-v42.1.0-linux-x64.zip into cache...
############################################################################################################################### 100.0%
[INFO] Electron ready
[INFO] Webview files copied
[INFO] app.asar installed
[INFO] Browser plugin staged from upstream DMG
Patched installManifest.mjs: Linux browser native host manifest locations
Patched check-native-host-manifest.js: Linux native host manifest locations
check-native-host-manifest.js already patched: Linux browser native host manifest fallback
Patched browser-client.mjs: Linux Chrome profile roots
Patched browser-client.mjs: Linux Chrome profile metadata lookup
Patched browser-client.mjs: Linux Chrome profile instance matching
Patched browser-client.mjs: Linux Chrome active profile backend ordering
Patched browser-client.mjs: Linux idle Chrome profile filtering
Patched browser-client.mjs: Linux ambiguous active Chrome extension alias guard
Patched browser-client.mjs: Linux ambiguous active Chrome extension alias check
Patched SKILL.md: safe multi-profile Chrome bootstrap
SKILL.md already patched: prefer active Chrome profile bootstrap
SKILL.md already patched: Chrome active profile bootstrap ignores tab probe errors
SKILL.md already patched: Chrome active profile bootstrap bounds tab probes
Patched SKILL.md: Chrome profile launch guard
Patched installed-browsers.js: Linux browser inventory
Patched chrome-is-running.js: Linux browser running-process detection
Patched check-extension-installed.js: Linux extension-aware browser profile fallback
Patched check-extension-installed.js: Linux running browser extension profile preference
Patched check-extension-installed.js: Linux running browser extension profile resolver
Patched open-chrome-window.js: Linux default-browser profile fallback
Patched open-chrome-window.js: Linux running browser profile preference
Patched open-chrome-window.js: Linux running browser profile resolver
Patched open-chrome-window.js: Linux browser window command
[INFO] Building Chrome extension host...
    Updating `ustc` index
  Downloaded async-signal v0.2.13 (registry `ustc`)
  Downloaded atspi-connection v0.13.0 (registry `ustc`)
  Downloaded atspi-proxies v0.13.0 (registry `ustc`)
  Downloaded atspi v0.29.0 (registry `ustc`)
  Downloaded fastrand v2.3.0 (registry `ustc`)
  Downloaded fdeflate v0.3.7 (registry `ustc`)
  Downloaded byteorder-lite v0.1.0 (registry `ustc`)
  Downloaded bytemuck v1.25.0 (registry `ustc`)
  Downloaded downcast-rs v1.2.1 (registry `ustc`)
  Downloaded bitflags v2.11.0 (registry `ustc`)
  Downloaded funty v2.0.0 (registry `ustc`)
  Downloaded cosmic-protocols v0.2.0 (registry `ustc`)
  Downloaded wayland-protocols v0.32.12 (registry `ustc`)
  Downloaded ref-cast-impl v1.0.25 (registry `ustc`)
  Downloaded wayland-scanner v0.31.10 (registry `ustc`)
  Downloaded wyz v0.5.1 (registry `ustc`)
  Downloaded wayland-protocols-wlr v0.3.12 (registry `ustc`)
  Downloaded pastey v0.2.2 (registry `ustc`)
  Downloaded serde_derive_internals v0.29.1 (registry `ustc`)
  Downloaded tap v1.0.1 (registry `ustc`)
  Downloaded schemars_derive v1.2.1 (registry `ustc`)
  Downloaded evdev v0.13.2 (registry `ustc`)
  Downloaded zbus_macros v5.14.0 (registry `ustc`)
  Downloaded zune-core v0.5.1 (registry `ustc`)
  Downloaded cc v1.2.57 (registry `ustc`)
  Downloaded libmimalloc-sys v0.1.49 (registry `ustc`)
  Downloaded mimalloc v0.1.52 (registry `ustc`)
  Downloaded zvariant_derive v5.10.1 (registry `ustc`)
  Downloaded uuid v1.22.0 (registry `ustc`)
  Downloaded toml_edit v0.25.8+spec-1.1.0 (registry `ustc`)
  Downloaded schemars v1.2.1 (registry `ustc`)
  Downloaded atspi-common v0.13.0 (registry `ustc`)
  Downloaded wayland-client v0.31.14 (registry `ustc`)
  Downloaded indexmap v2.13.0 (registry `ustc`)
  Downloaded radium v0.7.0 (registry `ustc`)
  Downloaded wayland-sys v0.31.11 (registry `ustc`)
  Downloaded winnow v1.0.0 (registry `ustc`)
  Downloaded ref-cast v1.0.25 (registry `ustc`)
  Downloaded zvariant v5.10.1 (registry `ustc`)
  Downloaded png v0.18.1 (registry `ustc`)
  Downloaded zune-jpeg v0.5.15 (registry `ustc`)
  Downloaded zbus v5.14.0 (registry `ustc`)
  Downloaded rmcp-macros v1.5.0 (registry `ustc`)
  Downloaded xkeysym v0.2.1 (registry `ustc`)
  Downloaded moxcms v0.8.1 (registry `ustc`)
  Downloaded bitvec v1.0.1 (registry `ustc`)
  Downloaded quick-xml v0.39.2 (registry `ustc`)
  Downloaded wayland-backend v0.3.15 (registry `ustc`)
  Downloaded rmcp v1.5.0 (registry `ustc`)
  Downloaded image v0.25.10 (registry `ustc`)
  Downloaded nix v0.29.0 (registry `ustc`)
  Downloaded libc v0.2.183 (registry `ustc`)
  Downloaded pxfm v0.1.29 (registry `ustc`)
  Downloaded 53 crates (5.8MiB) in 3.71s
   Compiling proc-macro2 v1.0.106
   Compiling quote v1.0.45
   Compiling unicode-ident v1.0.24
   Compiling serde_core v1.0.228
   Compiling serde v1.0.228
   Compiling pin-project-lite v0.2.17
   Compiling libc v0.2.183
   Compiling futures-core v0.3.32
   Compiling winnow v1.0.0
   Compiling hashbrown v0.16.1
   Compiling equivalent v1.0.2
   Compiling bitflags v2.11.0
   Compiling crossbeam-utils v0.8.21
   Compiling autocfg v1.5.0
   Compiling toml_datetime v1.1.1+spec-1.1.0
   Compiling cfg-if v1.0.4
   Compiling parking v2.2.1
   Compiling rustix v1.1.4
   Compiling memchr v2.8.0
   Compiling futures-io v0.3.32
   Compiling linux-raw-sys v0.12.1
   Compiling indexmap v2.13.0
   Compiling concurrent-queue v2.5.0
   Compiling slab v0.4.12
   Compiling find-msvc-tools v0.1.9
   Compiling syn v2.0.117
   Compiling fastrand v2.3.0
   Compiling shlex v1.3.0
   Compiling event-listener v5.4.1
   Compiling toml_parser v1.1.2+spec-1.1.0
   Compiling cc v1.2.57
   Compiling endi v1.1.1
   Compiling event-listener-strategy v0.5.4
   Compiling futures-lite v2.6.1
   Compiling toml_edit v0.25.8+spec-1.1.0
   Compiling errno v0.3.14
   Compiling async-io v2.6.0
   Compiling signal-hook-registry v1.4.8
   Compiling zmij v1.0.21
   Compiling socket2 v0.6.3
   Compiling mio v1.2.0
   Compiling getrandom v0.4.2
   Compiling proc-macro-crate v3.5.0
   Compiling once_cell v1.21.4
   Compiling pkg-config v0.3.33
   Compiling bytes v1.11.1
   Compiling async-task v4.7.1
   Compiling tracing-core v0.1.36
   Compiling async-channel v2.5.0
   Compiling num-traits v0.2.19
   Compiling atomic-waker v1.1.2
   Compiling wayland-sys v0.31.11
   Compiling wayland-backend v0.3.15
   Compiling piper v0.2.5
   Compiling async-lock v3.4.2
   Compiling futures-sink v0.3.32
   Compiling blocking v1.6.2
   Compiling uuid v1.22.0
   Compiling async-executor v1.14.0
   Compiling async-broadcast v0.7.2
   Compiling ordered-stream v0.2.0
   Compiling ident_case v1.0.1
   Compiling smallvec v1.15.1
   Compiling downcast-rs v1.2.1
   Compiling winnow v0.7.15
   Compiling wayland-client v0.31.14
   Compiling simd-adler32 v0.3.9
   Compiling hex v0.4.3
   Compiling crc32fast v1.5.0
   Compiling strsim v0.11.1
   Compiling futures-channel v0.3.32
   Compiling serde_json v1.0.150
   Compiling adler2 v2.0.1
   Compiling radium v0.7.0
   Compiling cfg_aliases v0.2.1
   Compiling static_assertions v1.1.0
   Compiling ref-cast v1.0.25
   Compiling futures-task v0.3.32
   Compiling nix v0.29.0
   Compiling miniz_oxide v0.8.9
   Compiling libmimalloc-sys v0.1.49
   Compiling itoa v1.0.18
   Compiling tap v1.0.1
   Compiling iana-time-zone v0.1.65
   Compiling thiserror v2.0.18
   Compiling wyz v0.5.1
   Compiling darling_core v0.23.0
   Compiling serde_derive_internals v0.29.1
   Compiling flate2 v1.1.9
   Compiling fdeflate v0.3.7
   Compiling zune-core v0.5.1
   Compiling rmcp v1.5.0
   Compiling polling v3.11.0
   Compiling funty v2.0.0
   Compiling dyn-clone v1.0.20
   Compiling pxfm v0.1.29
   Compiling anyhow v1.0.102
   Compiling zune-jpeg v0.5.15
   Compiling serde_derive v1.0.228
   Compiling enumflags2_derive v0.7.12
   Compiling tokio-macros v2.7.0
   Compiling tracing-attributes v0.1.31
   Compiling tokio v1.52.3
   Compiling async-signal v0.2.13
   Compiling async-trait v0.1.89
   Compiling async-process v2.5.0
   Compiling serde_repr v0.1.20
   Compiling async-recursion v1.1.1
   Compiling futures-macro v0.3.32
   Compiling tracing v0.1.44
   Compiling darling_macro v0.23.0
   Compiling ref-cast-impl v1.0.25
   Compiling thiserror-impl v2.0.18
   Compiling schemars_derive v1.2.1
   Compiling darling v0.23.0
   Compiling rmcp-macros v1.5.0
   Compiling bitvec v1.0.1
   Compiling futures-util v0.3.32
   Compiling moxcms v0.8.1
   Compiling png v0.18.1
   Compiling pastey v0.2.2
   Compiling base64 v0.22.1
   Compiling zvariant_utils v3.3.1
   Compiling quick-xml v0.39.2
   Compiling enumflags2 v0.7.12
   Compiling zvariant_derive v5.10.1
   Compiling zvariant v5.10.1
   Compiling wayland-scanner v0.31.10
   Compiling futures-executor v0.3.32
   Compiling chrono v0.4.45
   Compiling bytemuck v1.25.0
   Compiling futures v0.3.32
   Compiling byteorder-lite v0.1.0
   Compiling evdev v0.13.2
   Compiling mimalloc v0.1.52
   Compiling tokio-util v0.7.18
   Compiling zbus_names v4.3.2
   Compiling schemars v1.2.1
   Compiling image v0.25.10
   Compiling zbus_xml v5.1.1
   Compiling zbus_macros v5.14.0
   Compiling zbus-lockstep v0.5.2
   Compiling zbus-lockstep-macros v0.5.2
   Compiling wayland-protocols v0.32.12
   Compiling xkeysym v0.2.1
   Compiling zbus v5.14.0
   Compiling wayland-protocols-wlr v0.3.12
   Compiling cosmic-protocols v0.2.0
   Compiling atspi-common v0.13.0
   Compiling atspi-proxies v0.13.0
   Compiling atspi-connection v0.13.0
   Compiling atspi v0.29.0
   Compiling codex-computer-use-linux v0.2.9-linux-alpha1 (/home/fira/Projects/codex-desktop-linux/computer-use-linux)
    Finished `release` profile [optimized] target(s) in 1m 09s
[INFO] Chrome plugin staged from upstream DMG
[INFO] Building Linux Computer Use backend...
   Compiling codex-computer-use-linux v0.2.9-linux-alpha1 (/home/fira/Projects/codex-desktop-linux/computer-use-linux)
    Finished `release` profile [optimized] target(s) in 19.43s
[INFO] Browser Use node runtime not found in upstream resources; skipping
[INFO] Browser Use node_repl runtime is not a Linux executable for x86_64; skipping
[INFO] Downloading Browser Use node_repl fallback runtime...
############################################################################################################################### 100.0%
[INFO] Patched Browser Use node_repl fallback runtime for glibc 2.34+ compatibility
[INFO] Linux-safe bundled plugins installed
[INFO] Staging declarative Linux feature resources and runtime hooks
[INFO] Start script created
[INFO] Patch report: /home/fira/Projects/codex-desktop-linux/codex-app/.codex-linux/patch-report.json
[INFO] Build info written

============================================
[INFO] Installation complete!
  Run:  /home/fira/Projects/codex-desktop-linux/codex-app/start.sh
============================================
make[2]: Leaving directory '/home/fira/Projects/codex-desktop-linux'
make package
make[2]: Entering directory '/home/fira/Projects/codex-desktop-linux'
make[3]: Entering directory '/home/fira/Projects/codex-desktop-linux'
[make] Building codex-update-manager (release)
cargo build  --release -p codex-update-manager
  Downloaded hyper v1.8.1 (registry `ustc`)
  Downloaded hyper-rustls v0.27.7 (registry `ustc`)
  Downloaded digest v0.11.2 (registry `ustc`)
  Downloaded hybrid-array v0.4.10 (registry `ustc`)
  Downloaded icu_properties v2.1.2 (registry `ustc`)
  Downloaded icu_provider v2.1.1 (registry `ustc`)
  Downloaded idna_adapter v1.2.1 (registry `ustc`)
  Downloaded litemap v0.8.1 (registry `ustc`)
  Downloaded icu_collections v2.1.1 (registry `ustc`)
  Downloaded potential_utf v0.1.4 (registry `ustc`)
  Downloaded icu_locale_core v2.1.1 (registry `ustc`)
  Downloaded rustls-pki-types v1.14.0 (registry `ustc`)
  Downloaded icu_normalizer v2.1.1 (registry `ustc`)
  Downloaded pin-utils v0.1.0 (registry `ustc`)
  Downloaded tinystr v0.8.2 (registry `ustc`)
  Downloaded icu_normalizer_data v2.1.1 (registry `ustc`)
  Downloaded yoke v0.8.1 (registry `ustc`)
  Downloaded writeable v0.6.2 (registry `ustc`)
  Downloaded rustls-platform-verifier v0.6.2 (registry `ustc`)
  Downloaded notify-rust v4.18.0 (registry `ustc`)
  Downloaded yoke-derive v0.8.1 (registry `ustc`)
  Downloaded zerofrom v0.1.6 (registry `ustc`)
  Downloaded zerofrom-derive v0.1.6 (registry `ustc`)
  Downloaded zerovec-derive v0.11.2 (registry `ustc`)
  Downloaded h2 v0.4.13 (registry `ustc`)
  Downloaded typenum v1.19.0 (registry `ustc`)
  Downloaded rustls-webpki v0.103.10 (registry `ustc`)
  Downloaded icu_properties_data v2.1.2 (registry `ustc`)
  Downloaded zerovec v0.11.5 (registry `ustc`)
  Downloaded zerotrie v0.2.3 (registry `ustc`)
  Downloaded aws-lc-rs v1.16.2 (registry `ustc`)
  Downloaded iri-string v0.7.11 (registry `ustc`)
  Downloaded tower-http v0.6.8 (registry `ustc`)
  Downloaded rustls v0.23.37 (registry `ustc`)
  Downloaded aws-lc-sys v0.39.1 (registry `ustc`)
  Downloaded 35 crates (11.5MiB) in 9.80s (largest was `aws-lc-sys` at 9.0MiB)
   Compiling libc v0.2.183
   Compiling serde_core v1.0.228
   Compiling stable_deref_trait v1.2.1
   Compiling dunce v1.0.5
   Compiling fs_extra v1.3.0
   Compiling syn v2.0.117
   Compiling tracing-core v0.1.36
   Compiling smallvec v1.15.1
   Compiling zeroize v1.8.2
   Compiling aws-lc-rs v1.16.2
   Compiling http v1.4.0
   Compiling serde v1.0.228
   Compiling litemap v0.8.1
   Compiling rustix v1.1.4
   Compiling writeable v0.6.2
   Compiling rustls-pki-types v1.14.0
   Compiling typenum v1.19.0
   Compiling icu_properties_data v2.1.2
   Compiling icu_normalizer_data v2.1.1
   Compiling untrusted v0.9.0
   Compiling hashbrown v0.16.1
   Compiling equivalent v1.0.2
   Compiling httparse v1.10.1
   Compiling rustls v0.23.37
   Compiling log v0.4.29
   Compiling fnv v1.0.7
   Compiling subtle v2.6.1
   Compiling percent-encoding v2.3.2
   Compiling http-body v1.0.1
   Compiling try-lock v0.2.5
   Compiling indexmap v2.13.0
   Compiling tower-service v0.3.3
   Compiling want v0.3.1
   Compiling futures-channel v0.3.32
   Compiling pin-utils v0.1.0
   Compiling utf8parse v0.2.2
   Compiling jobserver v0.1.34
   Compiling anstyle-parse v1.0.0
   Compiling errno v0.3.14
   Compiling socket2 v0.6.3
   Compiling mio v1.2.0
   Compiling signal-hook-registry v1.4.8
   Compiling hybrid-array v0.4.10
   Compiling cc v1.2.57
   Compiling num-traits v0.2.19
   Compiling sync_wrapper v1.0.2
   Compiling openssl-probe v0.2.1
   Compiling utf8_iter v1.0.4
   Compiling tower-layer v0.3.3
   Compiling colorchoice v1.0.5
   Compiling anstyle-query v1.1.5
   Compiling ipnet v2.12.0
   Compiling is_terminal_polyfill v1.70.2
   Compiling anstyle v1.0.14
   Compiling crypto-common v0.2.1
   Compiling block-buffer v0.12.0
   Compiling rustls-native-certs v0.8.3
   Compiling form_urlencoded v1.2.2
   Compiling anstream v1.0.0
   Compiling lazy_static v1.5.0
   Compiling iri-string v0.7.11
   Compiling heck v0.5.0
   Compiling option-ext v0.2.0
   Compiling cmake v0.1.58
   Compiling clap_lex v1.1.0
   Compiling const-oid v0.10.2
   Compiling strsim v0.11.1
   Compiling uuid v1.22.0
   Compiling serde_json v1.0.150
   Compiling toml_datetime v1.1.1+spec-1.1.0
   Compiling serde_spanned v1.1.1
   Compiling digest v0.11.2
   Compiling clap_builder v4.6.0
   Compiling dirs-sys v0.5.0
   Compiling sharded-slab v0.1.7
   Compiling aws-lc-sys v0.39.1
   Compiling http-body-util v0.1.3
   Compiling tracing-log v0.2.0
   Compiling toml_parser v1.1.2+spec-1.1.0
   Compiling thread_local v1.1.9
   Compiling cpufeatures v0.3.0
   Compiling memchr v2.8.0
   Compiling nu-ansi-term v0.50.3
   Compiling synstructure v0.13.2
   Compiling toml_writer v1.1.1+spec-1.1.0
   Compiling sha2 v0.11.0
   Compiling tracing-subscriber v0.3.23
   Compiling toml v1.1.2+spec-1.1.0
   Compiling directories v6.0.0
   Compiling polling v3.11.0
   Compiling async-io v2.6.0
   Compiling semver v1.0.28
   Compiling serde_derive v1.0.228
   Compiling zerofrom-derive v0.1.6
   Compiling yoke-derive v0.8.1
   Compiling zerovec-derive v0.11.2
   Compiling displaydoc v0.2.5
   Compiling tokio-macros v2.7.0
   Compiling enumflags2_derive v0.7.12
   Compiling zerofrom v0.1.6
   Compiling tracing-attributes v0.1.31
   Compiling yoke v0.8.1
   Compiling zerotrie v0.2.3
   Compiling zerovec v0.11.5
   Compiling futures-macro v0.3.32
   Compiling tokio v1.52.3
   Compiling async-signal v0.2.13
   Compiling async-process v2.5.0
   Compiling async-trait v0.1.89
   Compiling async-recursion v1.1.1
   Compiling tinystr v0.8.2
   Compiling potential_utf v0.1.4
   Compiling icu_locale_core v2.1.1
   Compiling icu_collections v2.1.1
   Compiling futures-util v0.3.32
   Compiling serde_repr v0.1.20
   Compiling tracing v0.1.44
   Compiling clap_derive v4.6.1
   Compiling icu_provider v2.1.1
   Compiling icu_properties v2.1.2
   Compiling icu_normalizer v2.1.1
   Compiling zvariant_utils v3.3.1
   Compiling enumflags2 v0.7.12
   Compiling zvariant_derive v5.10.1
   Compiling idna_adapter v1.2.1
   Compiling clap v4.6.1
   Compiling chrono v0.4.45
   Compiling idna v1.1.0
   Compiling zvariant v5.10.1
   Compiling url v2.5.8
   Compiling tokio-util v0.7.18
   Compiling tower v0.5.3
   Compiling h2 v0.4.13
   Compiling zbus_names v4.3.2
   Compiling tower-http v0.6.8
   Compiling zbus_macros v5.14.0
   Compiling zbus v5.14.0
   Compiling hyper v1.8.1
   Compiling hyper-util v0.1.20
   Compiling notify-rust v4.18.0
   Compiling rustls-webpki v0.103.10
   Compiling tokio-rustls v0.26.4
   Compiling rustls-platform-verifier v0.6.2
   Compiling hyper-rustls v0.27.7
   Compiling reqwest v0.13.4
   Compiling codex-update-manager v0.8.5 (/home/fira/Projects/codex-desktop-linux/updater)
    Finished `release` profile [optimized] target(s) in 1m 03s
make[3]: Leaving directory '/home/fira/Projects/codex-desktop-linux'
[make] Building native package (auto-detecting distro)
[INFO] Preparing package root at /home/fira/Projects/codex-desktop-linux/dist/deb-root
[INFO] Building /home/fira/Projects/codex-desktop-linux/dist/codex-desktop_2026.06.23.120746_amd64.deb
dpkg-deb: building package 'codex-desktop' in '/home/fira/Projects/codex-desktop-linux/dist/codex-desktop_2026.06.23.120746_amd64.deb'.
[INFO] Built package: /home/fira/Projects/codex-desktop-linux/dist/codex-desktop_2026.06.23.120746_amd64.deb
make[2]: Leaving directory '/home/fira/Projects/codex-desktop-linux'
make install
make[2]: Entering directory '/home/fira/Projects/codex-desktop-linux'
[make] Installing latest native package
[make] Installing /home/fira/Projects/codex-desktop-linux/dist/codex-desktop_2026.06.23.120746_amd64.deb
Selecting previously unselected package codex-desktop.
(Reading database ... 410192 files and directories currently installed.)
Preparing to unpack .../codex-desktop_2026.06.23.120746_amd64.deb ...
Unpacking codex-desktop (2026.06.23.120746) ...
Setting up codex-desktop (2026.06.23.120746) ...
Processing triggers for gnome-menus (3.36.0-1.1ubuntu3) ...
Processing triggers for desktop-file-utils (0.27-2build1) ...
Processing triggers for hicolor-icon-theme (0.17-2) ...
make[2]: Leaving directory '/home/fira/Projects/codex-desktop-linux'
[make] Native package install complete
make[1]: Leaving directory '/home/fira/Projects/codex-desktop-linux'
```

# <!-- 29 jun 2026 -->

# codex database issue

4:37 AM

To fix the **"Codex cannot access its local database"** or high disk activity issue, you need to <mark><strong>update the app to the latest version or clear the corrupted local SQLite files</strong></mark>. A widespread bug in OpenAI's Codex local database (`logs_2.sqlite` and `state_5.sqlite`) causes massive write spikes, startup crashes, and checksum migration mismatches. [link](https://github.com/openai/codex/issues/23824)

Follow these steps based on the exact issue you are facing:

### Fix 1: App Fails to Launch ("Cannot Access Local Database")

This error usually happens after an auto-update or when using WSL integration because of database checksum mismatches. [link](https://github.com/openai/codex/issues/24030)

1. Close Codex completely.
2. Navigate to your local Codex directory:

- **Windows**: `C:\Users\<YourUsername>\.codex\`
- **macOS/Linux**: `~/.codex/`

3. Find the `state_5.sqlite` and `logs_2.sqlite` files.
4. Rename them to `state_5.sqlite.bak` and `logs_2.sqlite.bak`.
5. Relaunch Codex. The app will automatically rebuild a healthy database. [link](https://github.com/openai/codex/issues/24006)

### Fix 2: Extreme SSD Usage & Performance Lag (640 TB/Year Bug)

A notorious logging bug dumps heavy TRACE details into your drive, ballooning the `logs_2.sqlite` file to gigabytes and thrashing your hardware. [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

1. **Update Codex**: OpenAI released patches that eliminate roughly 85% of this logging overhead. Check the app settings and force an update.

2. **Delete the bloated log**: Go to your `~/.codex/` folder and delete `logs_2.sqlite`. Codex will recreate a clean, drastically smaller file (often dropping from GBs to just a few MBs).

3. **RAM Redirect Workaround (Linux/macOS)**: If you cannot update yet, open your terminal and run the following command to point the database writes to your RAM instead of your physical disk:\
   bash

<!---->

```
ln -s /tmp/logs_2.sqlite ~/.codex/logs_2.sqlite
```

Use code with caution.\
[link](https://github.com/openai/codex/issues/24030)

### Fix 3: "Database is Locked" Error in WSL Mode

If you are running Codex Desktop on Windows with the runtime set to WSL, a locking conflict often triggers a crash. [link](https://github.com/openai/codex/issues/23927)

1. Open the OpenAI Codex repository to check the open issues for community tools like the third-party **Codex Repair Toolkit**.
2. If the tool is unavailable, temporarily **disable WSL mode** in your Codex Desktop settings and switch back to **PowerShell** to restore access. [link](https://github.com/openai/codex/issues/28666)

If you are experiencing a different type of error, please let me know:

- What is the **exact error message** or modal showing up?

- What **Operating System** (Windows, macOS, or WSL) are you running?

- Did this start happening immediately after an **app update**? [link](https://github.com/openai/codex/issues/23780)

- [link](https://github.com/openai/codex/issues/24006)\
  Codex cannot access its local database. · Issue #24006 - GitHub\
  Find all . sqlite files under any . codex directory. Rename those . sqlite files to keep them as backups, for example: file.sqlite...\
  GitHub

- [link](https://github.com/openai/codex/issues/24030)\
  Codex App fails to launch after update on macOS: state ... - GitHub\
  What steps can reproduce the bug? \* Use the Codex App on macOS normally for some time (regular use over several weeks; sqlite file...\
  GitHub

- [link](https://github.com/openai/codex/issues/23824)\
  Codex Desktop fails to start with \`migration 1 was previously applied ...\
  Description \* What version of the Codex App are you using (From “About Codex” dialog)? 26.520.11634. \* What subscription do you ha...\
  GitHub

Show all

# codex log bloat issue

4:37 AM

The **OpenAI Codex log bloat issue** is <mark>a critical software bug where the Codex Desktop application and CLI silently flood host storage with massive amounts of data</mark>. The core of the problem lies in Codex's internal application server, which defaults to an incredibly noisy **`TRACE` logging level** that bypasses standard user configuration flags (like `RUST_LOG`). In extreme scenarios, users have documented Codex writing **up to 37 TB of data over 21 days**, equating to an annualized write rate of nearly **640 TB/year**. Because a standard 1 TB consumer solid-state drive (SSD) is usually rated for a lifetime of 600 Terabytes Written (TBW), leaving Codex running in the background can **completely exhaust your SSD's operational lifespan in under a year**. [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

### Why the Logs Bloat So Quickly

- **The Noisy DB:** Codex channels background operations, WebSocket payloads, and Server-Sent Events (SSE) directly into a local SQLite file named **`~/.codex/logs_2.sqlite`**.
- **Write Amplification:** The tool executes tens of thousands of simultaneous insert and delete operations per minute. Even if the physical file size stays relatively low, the relentless background disk churn hammers the SSD hardware.
- **Uncompacted WAL Files:** The companion Write-Ahead Log (**`logs_2.sqlite-wal`**) often blooms uncontrollably into tens of gigabytes. This happens because long-lived Codex sessions keep open read-transactions, completely blocking SQLite from checkpointing or clearing out old log space.
- **Memory and UI Freezes:** This data storm causes the Codex app-server and Electron renderers to spike CPU usage, leaking gigabytes of memory and rendering active project threads completely sluggish. [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

***

### Step-by-Step Workarounds to Protect Your SSD

Because this remains an active issue on the official [OpenAI Codex GitHub Repository](https://github.com/openai/codex/issues/21134), developers have created highly effective local mitigation strategies: [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

### Option 1: Redirect Logs to RAM (Linux & macOS)

The safest approach is to prevent Codex from writing these temporary `TRACE` logs to your physical drive by symlinking the database to your system's volatile memory (`/tmp`). Since these files contain telemetry rather than your prompt history, losing them on reboot is perfectly harmless. [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

1. Completely quit the Codex Desktop application.

2. Open your terminal and purge the bloated log files:\
   bash

<!---->

```
rm -f ~/.codex/logs_2.sqlite ~/.codex/logs_2.sqlite-wal ~/.codex/logs_2.sqlite-shm
```

Use code with caution.
3\. Link the target log database directly to your temporary RAM drive:\
bash

```
ln -s /tmp/logs_2.sqlite ~/.codex/logs_2.sqlite
```

Use code with caution.\
[link](https://github.com/openai/codex/issues/29589)

### Option 2: Deploy a SQLite Blackhole Trigger (Windows, Linux, macOS)

If you are on Windows or prefer not to use symlinks, you can write an internal database rule (a trigger) that instantly intercepts and drops incoming `TRACE` rows before they hit the disk.

1. Ensure Codex is entirely closed.

2. Open the database using your command-line SQLite client:\
   bash

<!---->

```
sqlite3 ~/.codex/logs_2.sqlite
```

Use code with caution.
3\. Inject an `BEFORE INSERT` trigger to discard the incoming `TRACE` telemetry:\
sql

```
CREATE TRIGGER IF NOT EXISTS blackhole_trace
BEFORE INSERT ON logs
WHEN NEW.level = 'TRACE'
BEGIN
    SELECT RAISE(IGNORE);
END;
```

Use code with caution.
4\. Clear out the lingering write-ahead log data and exit:\
sql

```
PRAGMA wal_checkpoint(TRUNCATE);
.exit
```

Use code with caution.\
[link](https://github.com/openai/codex/issues/29589)

### Option 3: Clean Large Context Stalls

If your machine is suffering from severe UI lag rather than just raw disk writes, the agent is likely getting trapped in a context processing loop. [link](https://github.com/openai/codex/issues/28345)

- **Prune Project Files**: Turn off heavy, unused background plugins (like Chrome, Outlook, or complex Model Context Protocol integrations) inside your configurations.
- **Rotate Chat Windows**: Once an active thread passes **100 turns**, manually start a fresh session window. This drops the massive accumulated background tool outputs and intermediate agent calculations that trigger the app-server logging loops. [link](https://github.com/openai/codex/issues/25779)

If you would like, I can help you write an **automated bash or PowerShell script** to wipe these logs automatically on startup, or help you check your **current log file sizes** using terminal commands. Turn to whichever option fits your current environment!

- [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)\
  OpenAI Codex has a bug that could kill your SSD in under a ...\
  OpenAI's Codex CLI has a logging bug that's quietly thrashing SSDs . A debug logging sink writes to a local SQLite database ( ~/.c...\
  Reddit
- [link](https://github.com/openai/codex/issues/25779)\
  Codex Desktop meta-bug: unbounded session/turn state causes ...\
  Reported sizes include 506.8 MB , 786.7 MB , 963.5 MB , 1050 MB , and 1601 MB . Related comments report an 825 MB rollout producin...\
  GitHub
- [link](https://community.openai.com/t/codex-ui-extremly-slow-freezing-for-minutes-at-a-time/1381784/4)\
  Codex UI extremly slow, freezing for minutes at a time - #4 by Rotto\
  I don't think this is related to hardware or the operating system. There seems to be only one possible explanation: when the conte...\
  OpenAI Developer Community

Show all

## what does it write there

5:07 AM

The data flood inside **`~/.codex/logs_2.sqlite`** is not caused by your personal source code or prompts. Instead, it is packed with **low-level, high-frequency infrastructure telemetry** and [raw protocol network data](https://github.com/openai/codex/issues/28224).

Because Codex's internal database sink is stuck at a global `TRACE` logging level, it writes everything the app does, thinks, or communicates in absolute, granular detail. The logged data typically consists of four main categories: [link](https://github.com/openai/codex/issues/28224)

### 1. Raw Network Framing & Payloads

Every single character sent or received by the app is logged verbatim. [link](https://medium.com/coding-nexus/is-codex-cli-secretly-killing-your-ssd-the-sqlite-logging-bug-that-could-write-640tb-every-year-52b8ddb877e2)

- **WebSocket Streams:** Every WebSocket frame managing real-time states between your desktop client and the backend server.
- **Server-Sent Events (SSE):** The raw text chunks streamed back during code generation or agent reasoning cycles. If a response contains a massive context window or base64 images, Codex [writes the entire raw payload directly to disk](https://github.com/openai/codex/issues/21134).

### 2. OpenTelemetry & Microservice Tracing

Codex tracks its internal distributed microservices using massive OpenTelemetry SDK mirror events. [link](https://www.reddit.com/r/codex/comments/1ucnaim/top%5Fon%5Fhacker%5Fnews%5Ftoday%5Fcodex%5Fdropped%5F37%5Ftb%5Fof/)

- Every time a tool is invoked, an agent takes a turn, or a function behaves in a certain way, a diagnostic timestamp and execution span are created.
- It logs deep asynchronous execution metadata, tracking the behavior of rust-based runtime tasks managed by frameworks like Tokio. [link](https://medium.com/coding-nexus/is-codex-cli-secretly-killing-your-ssd-the-sqlite-logging-bug-that-could-write-640tb-every-year-52b8ddb877e2)

### 3. High-Frequency Dependency "Noise"

A significant portion of the write amplification comes from underlying network libraries talking to themselves. The logs are cluttered with continuous internal events from: [link](https://github.com/openai/codex/issues/28224)

- **Network utilities** (`hyper_util`, `tokio-tungstenite`) tracking raw TCP handshake details and socket health.
- **File watchers** (`inotify`) continuously pinging the system to check if project files have changed, firing off thousands of log rows a minute. [link](https://github.com/openai/codex/issues/28224)

### 4. Background History & Failed Compaction State

When you run a long-lived project, Codex periodically tries to compress your thread history via background API commands. [link](https://github.com/openai/codex/issues/24544)

- If these history compactions fail (often throwing network timeout errors), Codex enters an [aggressive retry-and-fail loop](https://github.com/openai/codex/issues/24544).
- It continuously logs hundreds of thousands of rows containing [entire turn history metrics](https://github.com/openai/codex/issues/25779), token calculations, and error tracebacks over and over again. [link](https://github.com/openai/codex/issues/25779)

Ultimately, roughly **71% of this data is completely useless diagnostic noise** that provides no value to the user. This is why purging or blocking the database table entirely using a SQL trigger does not disrupt your actual saved coding projects or history. [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)

Would you like to know how to **query the database yourself** using your terminal to see exactly what rows are chewing up your specific disk space?

- [link](https://www.reddit.com/r/OpenAI/comments/1ucf4px/openai%5Fcodex%5Fhas%5Fa%5Fbug%5Fthat%5Fcould%5Fkill%5Fyour%5Fssd/)\
  OpenAI Codex has a bug that could kill your SSD in under a ...\
  Since a typical 1 TB consumer SSD is rated for ~600 TBW lifetime, leaving Codex running could chew through your drive's entire war...\
  Reddit
- [link](https://github.com/openai/codex/issues/28224)\
  Codex SQLite feedback logs can write ~640 TB/year ... - GitHub\
  About 36,211 rows were inserted in 15 seconds, while retained row count stayed flat. This suggests continuous insert-and-prune wri...\
  GitHub
- [link](https://github.com/openai/codex/issues/29674)\
  Excessive TRACE logging causes logs\_2.sqlite/WAL growth ...\
  Please consider a product-level fix so users do not need to patch the SQLite database manually: \* Do not persist TRACE logs by def...\
  GitHub

Show all

## example

10:15 PM

Here are realistic structural examples of what those noisy `TRACE` rows actually look like inside the `logs` table of **`~/.codex/logs_2.sqlite`**.

If you query the database using `SELECT * FROM logs ORDER BY timestamp DESC LIMIT 3;`, you will see entries structured exactly like this:

### 1. The Network Payload Bloat (WebSocket/SSE)

This log fires for **every single byte cluster** streamed down from the server. If an agent is outputting a massive response, it dumps the raw text chunk directly into the database.

| Column          | Value                                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`timestamp`** | `2026-06-28T22:15:02.194827Z`                                                                                                                                                                                                             |
| **`level`**     | `TRACE`                                                                                                                                                                                                                                   |
| **`target`**    | `codex_app::server::ws::incoming`                                                                                                                                                                                                         |
| **`message`**   | `Received raw WebSocket binary frame. Length: 4096 bytes.`                                                                                                                                                                                |
| **`payload`**   | `{"event":"agent_stream_chunk","data":{"chunk_id":"ch_92k","content":"import os\nimport sys\nfrom datetime import datetime\n\ndef init_logger():\n # ... [repeats entire file context or code history chunk here] ..."},"seq_num":10485}` |

***

### 2. The OpenTelemetry Engine "Noise"

This records internal micro-decisions. Every time Codex calculates token count, initializes an internal plugin, or moves an asynchronous code task to a new thread, it drops a line.

| Column          | Value                                                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`timestamp`** | `2026-06-28T22:15:02.195104Z`                                                                                                                                                                                              |
| **`level`**     | `TRACE`                                                                                                                                                                                                                    |
| **`target`**    | `opentelemetry::sdk::trace::span`                                                                                                                                                                                          |
| **`message`**   | `Exporting diagnostic span data to local state buffer.`                                                                                                                                                                    |
| **`payload`**   | `{"span_name":"tokio::task::spawn::codex_agent_eval","trace_id":"4f2a9c8b7e6d1f0a","parent_span_id":"0f1e2d3c4b5a6978","attributes":{"service.name":"codex-desktop-backend","thread.id":14,"runtime.execution_ms":1.042}}` |

***

### 3. The Failed Background Compaction Loop

This occurs when Codex runs into a network bottleneck. If it fails to sync your active workspace history to the cloud, it loops relentlessly—writing thousands of error frames per minute.

| Column          | Value                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`timestamp`** | `2026-06-28T22:15:02.196331Z`                                                                                                                                                                           |
| **`level`**     | `TRACE`                                                                                                                                                                                                 |
| **`target`**    | `codex_app::agent::history::compact`                                                                                                                                                                    |
| **`message`**   | `Remote session compaction payload generated. Remote server dropped connection, retrying task immediately.`                                                                                             |
| **`payload`**   | `{"session_id":"sess_abc123xyz","turn_count":104,"error":"HyperError(ConnectTimeout)","metadata":{"total_tokens_evaluated":128442,"stalled_buffers":["file_watcher_cache","terminal_history_mirror"]}}` |

***

### How to Check Your Own Logs Live

If you want to view these raw events streaming onto your machine in real-time, open your command terminal and execute:

bash

```
# For Linux or macOS:
sqlite3 ~/.codex/logs_2.sqlite "SELECT timestamp, level, target, message FROM logs ORDER BY timestamp DESC LIMIT 5;"

# To watch them populate actively:
watch -n 1 'sqlite3 ~/.codex/logs_2.sqlite "SELECT COUNT(*) FROM logs;"'
```

Use code with caution.

If you notice that count metric surging by hundreds of rows every few seconds, your system is actively suffering from the write-amplification bug.

Would you like me to help you **set up the SQL blackhole trigger** to instantly wipe out these specific `TRACE` rows?


# <!-- 01 jul -->

# where is it efficient or not to use llms in swe

Using Large Language Models (LLMs) in software engineering (SWE) depends heavily on the task's complexity, need for accuracy, and context size. LLMs excel at predictable, high-volume tasks but fail at <mark>complex, strategic, and high-risk operations</mark>.

### Where LLMs Are Highly Efficient

- **Boilerplate Generation:** Writing repetitive setup code, configuration files, and standard API structures.
- **Code Explanation:** Summarizing legacy codebases, explaining complex regex patterns, and documenting APIs.
- **Test Generation:** Automating the creation of unit tests, edge-case assertions, and mock data.
- **Syntax Translation:** Converting code from one programming language to another (e.g., Python to Go).
- **Simple Debugging:** Locating syntax errors, identifying typos, and resolving well-documented stack trace errors.

### Where LLMs Are Inefficient or Risky

- **Architecture Design:** Planning system topology, microservices boundaries, and long-term scalability.
- **Complex Debugging:** Solving distributed systems issues, race conditions, and deep memory leaks.
- **Domain-Specific Logic:** Writing proprietary business rules that lack open-source training data.
- **Security Auditing:** Identifying subtle, novel vulnerabilities or multi-step exploit chains.
- **Massive Codebases:** Editing code that requires simultaneous awareness of millions of lines of context.

### The Efficiency Formula

LLMs are efficient when **Verification Time < Generation Time**. If reviewing and fixing the AI's output takes longer than writing it from scratch, the tool is inefficient.

To help narrow this down, let me know:

- Your **specific role** (e.g., student, junior dev, architect)?
- The **language/framework** you use?
- The **exact task** you are trying to automate?

I can provide a tailored workflow to maximize your productivity.

- [link](https://dl.acm.org/doi/10.1145/3712005)\
  The Current Challenges of Software Engineering in the Era of Large Language Models | ACM Transactions on Software Engineering and Methodology\
  Jun 24, 2026 — Even the most advanced LLMs may generate results that contradict the facts \[ 23], compromising their reliability in code generatio...\
  \
  \
  ACM Digital Library
- [link](https://www.lenovo.com/us/en/knowledgebase/large-language-models-understanding-their-capabilities-and-applications/?srsltid=AfmBOoqK8-c0sPafSjc%5FF-v9S5lSJ9E1ulpOvzj3WMRldMTV3XNDV5Ar)\
  Large Language Models: Understanding Their Capabilities and Applications\
  LLMs use their transformer architecture to process large amounts of text simultaneously. This scalability allows them to handle hi...\
  \
  Lenovo
- [link](https://arxiv.org/html/2508.19870v1)\
  Secure Multi-LLM Agentic AI and Agentification for Edge General Intelligence by Zero-Trust: A Survey\
  Aug 27, 2025 — First, each LLM is fundamentally constrained by performance ceilings and lacks specialization, making it less effective in handlin...\
  \
  arXiv

Show all

# what are llms capable or not in swe

In Software Engineering (SWE), Large Language Models (LLMs) function as <mark>highly efficient<span> </span><strong>statistical prediction tools rather than autonomous thinkers</strong></mark>. While they dramatically accelerate typing, syntax lookup, and local code generation, they remain fundamentally incapable of independently navigating complex system architectures, verifying logic, or understanding true business context. [link](https://zed.dev/blog/why-llms-cant-build-software)

***

### 🦾 What LLMs Are Capable Of in SWE

LLMs excel at well-defined, isolated tasks with low ambiguity where solutions are easily verifiable. [link](https://www.seangoedecke.com/what-llms-cant-do/)

- **Generating Boilerplate and Autocomplete**: They instantly produce repetitive code patterns, unit test skeletons, and basic CRUD operations.
- **Syntax Translation**: They act as exceptional translation engines, allowing engineers to quickly adapt logic across different programming languages or frameworks.
- **Explaining Complex Code**: They can ingest obscure legacy code or unfamiliar files and accurately summarize what the code does line-by-line.
- **Synthesizing Documentation**: LLMs excel at pulling technical requirements out of scattered documents or drafting first-pass technical specifications.
- **Rapid Prototyping**: Senior engineers can use LLMs to stand up proof-of-concept tools in hours rather than days.
- **Local Bug Resolution**: When fed specific stack traces or error logs alongside isolated files, they can quickly pinpoint typos or common framework errors. [link](https://zed.dev/blog/why-llms-cant-build-software)

***

### ❌ What LLMs Are Incapable Of in SWE

LLMs struggle heavily when required to manage long-term state, maintain holistic "mental models," or navigate ambiguity. [link](https://zed.dev/blog/why-llms-cant-build-software)

- **System Architecture and Design**: They cannot safely design massive, multi-service systems from scratch because they fail to align code with broader business tradeoffs, security protocols, or performance constraints.
- **Maintaining Dual Mental Models**: A human engineer builds a mental model of the requirements, a mental model of what the code actually does, and bridges the gap. LLMs cannot keep these models synchronized across long or complex development iterations.
- **Iterative Logical Convergence**: If an LLM’s first code proposal fails, subsequent prompts often cause the model to wander or degrade into hallucinations rather than systematically zeroing in on the solution like a human would.
- **Context and Recency Blindness**: In large codebases, LLMs miss omitted context, suffer from recency bias in their context windows, and confidently hallucinate non-existent API routes or library functions.
- **Real-world and Security Verification**: They cannot physically verify if a system works, nor can they intuitively spot subtle logical security flaws, making systems reliant on "vibe coding" vulnerable to major technical debt and security breaches. [link](https://zed.dev/blog/why-llms-cant-build-software)

***

### 📊 Capability Breakdown at a Glance

| SWE Task Category            | LLM Capability Status | Human Role Required                 |
| ---------------------------- | --------------------- | ----------------------------------- |
| **Writing Boilerplate**      | High 🟢               | Minimal (Review only)               |
| **Language Translation**     | High 🟢               | Minimal (Verification)              |
| **Debugging Local Errors**   | Medium 🟡             | Context provider & Prompt driver    |
| **System Architecture**      | Low 🔴                | Full ownership and design           |
| **Business Logic Alignment** | Low 🔴                | Definition & critical verification  |
| **Security & Auditing**      | Low 🔴                | Vulnerability patching & governance |

To explore this further, let me know: Are you looking to **integrate LLMs into your personal workflow**, or are you evaluating how they change the **hiring and expectations** for software engineering teams?

- [link](https://zed.dev/blog/why-llms-cant-build-software)\
  Why LLMs Can't Really Build Software - Zed\
  Aug 14, 2025 — Context omission: Models are bad at finding omitted context. Recency bias: They suffer a strong recency bias in the context window...\
  Zed
- [link](https://www.reddit.com/r/ChatGPTCoding/comments/1ip7yhf/llms%5Fare%5Ffundamentally%5Fincapable%5Fof%5Fdoing/)\
  LLMs are fundamentally incapable of doing software ... - Reddit\
  Feb 14, 2025 — For this reason, current LLMs are not dependable, and current LLM agents are doomed to fail. The human not only has to be in the l...\
  Reddit·r/ChatGPTCoding
- [link](https://www.reddit.com/r/BetterOffline/comments/1rnyqaf/in%5Fmost%5Fcases%5Feven%5Fin%5Fswe%5Fall%5Fthe%5Fllms%5Fdo%5Fis/)\
  In most cases, even in SWE, all the LLMs do is replace your keystrokes\
  Mar 8, 2026 — In most cases, even in SWE, all the LLMs do is replace your keystrokes : r/BetterOffline.\
  Reddit·r/BetterOffline

Show all

# everything llms can do, like translate, summarize, and reason

Large Language Models (LLMs) have evolved from simple text predictors into general-purpose text engines capable of automating complex, multi-step workflows. While translation, summarization, and basic reasoning are their foundational features, their broader capabilities can be organized into several distinct categories. [link](https://www.imd.org/blog/digital-transformation/large-language-models-llms/)

### 🗺️ Advanced Translation & Localization

LLMs go beyond word-for-word machine translation by adapting text to culture, tone, and specific industries. [link](https://learn.microsoft.com/en-us/globalization/localization/ai/ai-and-llms-for-translation)

- **Tone Switching**: Converting technical text into a casual explanation or localized marketing copy.
- **Programming Languages**: Translating legacy code (e.g., COBOL) into modern languages like Python.
- **Formal Logic**: Converting natural human language into formal logic or database queries like SQL.
- **Dialect Adaptation**: Adjusting a single language to match specific regional idioms or slang. [link](https://www.instagram.com/reel/DU9ynJ1CFzM/)

### 📝 Summarization & Synthesis

Modern context windows allow LLMs to ingest and condense massive amounts of unstructured data. [link](https://uit.stanford.edu/service/techtraining/ai-demystified/llm)

- **Abstractive Summarization**: Rephrasing long documents into entirely new, concise sentences.
- **Meeting Documentation**: Generating minutes, action items, and task assignments from raw audio transcripts.
- **Topic Clustering**: Analyzing thousands of customer reviews to group complaints into core themes.
- **Multi-Document Synthesis**: Merging findings from dozens of different research papers into one report. [link](https://www.ibm.com/think/topics/large-language-models)

### 🧠 Reasoning & Problem Solving

By utilizing multi-step token generation and internal checking mechanisms, frontier models tackle complex cognitive tasks. [link](https://magazine.sebastianraschka.com/p/understanding-reasoning-llms)

- **Chain-of-Thought (CoT)**: Breaking down intricate problems into logical, sequential steps before answering.
- **Coding & Debugging**: Identifying obscure syntax bugs in code and writing corresponding unit tests.
- **Mathematical Proofs**: Solving high-level geometry, algebra, and logic puzzles.
- **Strategic Planning**: Formulating multi-step business strategies, project timelines, or marketing campaigns. [link](https://www.ibm.com/think/topics/large-language-models)

### 🎨 Creative Generation & Transformation

LLMs manipulate the style, structure, and intent of text based on user constraints. [link](https://data.world/blog/large-language-models-explained/)

- **Roleplaying & Personas**: Simulating historical figures, customer demographics, or technical experts for testing.
- **Content Creation**: Drafting emails, essays, social media posts, and poetry in specific brand voices.
- **Structural Reformatted**: Turning unstructured bullet points into neat JSON files, Markdown tables, or CSV sheets.
- **Sentiment & Tone Editing**: Softening an angry email draft or making a passive report sound highly persuasive. [link](https://data.world/blog/large-language-models-explained/)

### 🛠️ Agentic Workflows & Tool Use

When paired with external frameworks, LLMs transition from passive answer-generators to active software assistants. [link](https://medium.com/@HarlanH/use-llms-for-translation-and-fallible-reasoning-e5cb662eb18d)

- **Web Browsing**: Searching the live internet to pull up current facts and cite primary sources.
- **API Execution**: Connecting to external apps to draft calendars events, send Slack messages, or pull data.
- **Code Execution Sandbox**: Writing a custom Python script to calculate math or generate graphs, running it internally, and presenting the final visual output. [link](https://medium.com/@HarlanH/use-llms-for-translation-and-fallible-reasoning-e5cb662eb18d)

Are you looking to use an LLM for a **specific professional task**, or are you interested in **how to build prompts** to unlock these reasoning capabilities?

- [link](https://www.ibm.com/think/topics/large-language-models)\
  What Are Large Language Models (LLMs)? - IBM\
  Sentiment analysis: Customer tone is analyzed in order to better understand customer feedback at scale. \* Language translation: Au...\
  IBM
- [link](https://www.instagram.com/reel/DU9ynJ1CFzM/)\
  What is an LLM🤯 An LLM (Large Language Model) is an AI ...\
  Feb 19, 2026\
  [1:33](https://www.instagram.com/reel/DU9ynJ1CFzM/)\
  Instagram·Mohamad Al Sayed
- [link](https://uit.stanford.edu/service/techtraining/ai-demystified/llm)\
  AI Demystified: Introduction to large language models\
  Dec 13, 2024 — Scale and Capacity: LLMs are characterized by their large size, often containing billions or even trillions of parameters. This si...\
  Stanford University

Show all

# (?) why isnt codex gui challenged by foss alternatives

**The official Codex CLI is actually Free and Open Source Software (FOSS), meaning it isn't "challenged" by FOSS alternatives because it is part of the open-source ecosystem itself.** The common misconception stems from conflating OpenAI's proprietary model APIs with the client-side tool itself, or confusing the open core CLI with the proprietary premium features bundled into the official macOS/Windows desktop apps. [link](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)

Open-source developer communities have actively embraced the tool rather than trying to kill it. The landscape remains unchallenged by a single unified "anti-Codex" FOSS project for several distinct structural reasons.

### 1. Codex Already Embraces Open Ecosystem Standards

Rather than isolating developers in a walled garden, the Codex ecosystem relies heavily on open-source standards: [link](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)

- **Model Agnostic via Open API:** The Codex app is not locked into OpenAI's server infrastructure. As documented by optimization libraries like [Unsloth AI](https://unsloth.ai/docs/basics/codex), you can change the backend endpoint to any local server speaking the standard OpenAI Responses API. Developers routinely run Codex entirely offline using open-weight models like DeepSeek, Qwen, or Gemma.
- **Model Context Protocol (MCP):** To connect external data and tools, Codex uses the [Model Context Protocol (MCP)](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais), an open-source standard originally pushed by Anthropic. This allows it to inherit a massive library of community-built open-source connectors natively.
- **Open Configuration:** Context routing is defined via simple `agents.md` files (an open community standard similar to `CLAUDE.md`). [link](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)

### 2. The Rise of "FOSS Wrapped" Community GUIs

Because the under-the-hood engine is highly malleable, FOSS developers focus on building alternative frontends for it rather than rebuilding the entire agent from scratch. For instance, Linux users (who are omitted from OpenAI's official macOS/Windows desktop builds) rely heavily on community-maintained, MIT-licensed open-source desktop clients like [CodexMonitor](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/) or visual workspaces like Nimbalyst. [link](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)

### 3. The Proprietary "Secret Sauce" is Hard to Replicate

While an open-source developer can easily build an Electron-based Git diff panel or terminal wrapper, recreating the heavy infrastructure behind the official commercial app requires massive capital. Features like **isolated cloud-native sandbox environments** (for running and testing code securely without nuking your local machine), automated background cron jobs, and direct serverless web deployments via the Codex Sites plugin require massive ongoing server and infrastructure costs. FOSS projects typically struggle to provide these turnkey cloud features out of the box without requiring users to configure complex local virtualization (like Docker or WSL) themselves. [link](https://news.ycombinator.com/item?id=46859054)

### 4. Fragmented Developer Preferences

The FOSS community hasn't united around a single "Codex killer" because developers are deeply fragmented into different workflows:

- **The Neovim/Emacs Purists:** Many hard-core open-source developers reject heavy GUI apps entirely. They prefer lightweight terminal agents (like the open-source parts of Codex CLI or Claude Code) or build custom integrations directly into their existing text editors.
- **Hosted Dev Platforms:** Developers looking for a FOSS alternative to local agent execution often look horizontally toward completely different development paradigms, such as building prototypes in fully browser-hosted agent spaces like Replit Agent. [link](https://www.verdent.ai/guides/codex-alternatives-for-developers)

Ultimately, Codex has avoided a hostile FOSS rebellion because it plays nicely with the open-source world, allowing developers to plug in their own models, write their own markdown skills, and build their own Linux GUIs without paying a dime. [link](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)

If you are trying to move away from a paid subscription, let me know:

- Are you looking for a **fully local/offline** setup?
- What **operating system** (Mac, Windows, Linux) do you develop on?
- Do you prefer a **standalone desktop app** or an extension inside **VS Code / Neovim**?

I can provide the exact steps to wire up a 100% free open-source stack tailored to your workflow.

- [link](https://news.ycombinator.com/item?id=46859054)\
  The Codex App - Hacker News\
  Mar 2, 2026 — Microsoft gets largely pilloried on every UI rethink, Apple's Liquid Glass just annoyed everyone I've heard comment on it, and, fw...\
  Hacker News
- [link](https://getpushtoprod.substack.com/p/complete-beginners-guide-to-openais)\
  Complete Beginner's Guide to OpenAI's Codex App\
  Apr 11, 2026 — Making It Yours: Agents.md, Skills, And Mcps \* agents.md. This is Codex's version of CLAUDE.md. It's the open source standard name...\
  Substack·Push To Prod
- [link](https://nimbalyst.com/blog/best-codex-gui-tools-and-desktop-apps-2026/)\
  Best Codex GUI 2026: 4 Codex Desktop Apps Compared\
  Mar 30, 2026 — Does Codex have a Linux desktop app? The official OpenAI Codex App ships for macOS and Windows only. For Linux, the best Codex GUI...\
  Nimbalyst

Show all

# why isnt codex gui (not codex cli) challenged by foss alternatives

The **[OpenAI Codex Desktop GUI App](https://openai.com/index/introducing-the-codex-app/)** dominates the agentic developer workspace because it is highly complex to replicate in a Free and Open Source Software (FOSS) ecosystem. While FOSS alternatives dominate the CLI space (e.g., Aider, OpenCode), building a true GUI competitor faces immense technical and structural hurdles. [link](https://openai.com/index/introducing-the-codex-app/)

The primary reasons the Codex GUI remains unchallenged by FOSS projects come down to architecture, web infrastructure, and target audience alignment.

### 🏢 Proprietary Systems Integration

The Codex App is not just a visual skin; it functions as a "Command Center for Agents" tightly integrated with closed ecosystems.

- **Live Hosted Sites**: The GUI features a native "sites" plugin allowing developers to deploy live web apps directly from the chat UI with built-in OAuth, relational databases, and object storage. Replicating this in a FOSS app requires integrating complex cloud provider logic that individual users would have to host and pay for themselves.
- **Privileged Browser Control**: The GUI maintains a native bridge to the [Codex Chrome Extension](https://github.com/openai/codex/issues/26820), allowing the AI agent to actively pilot, test, and perform web QA under the hood. Open-source developer tools struggle to bundle pre-configured, privileged browser environments out of the box securely. [link](https://openai.com/index/introducing-the-codex-app/)

### 🎨 The Complexities of "Artifact Layouts"

Building a modern agentic GUI requires sophisticated visual orchestration that goes far beyond a standard chat box.

- **Multi-Dimensional Previews**: Codex GUI seamlessly previews visual assets, mockups, Excalidraw diagrams, spreadsheets, and live sandboxed web builds side-by-side with code.
- **State Management**: The UI allows users to spin up multiple parallel workspaces, pin chats, manage Git worktrees visually, and fine-tune specialized agent profiles. Writing a cross-platform (Electron/Tauri) open-source app capable of handling these complex canvas layouts without bugs requires massive UI engineering resources that standard FOSS projects rarely possess. [link](https://www.youtube.com/watch?v=b8a9nXpJn54)

### 💰 Token Volume and Financial Asymmetry

Agentic coding is incredibly token-heavy.

- **Massive Context Windows**: Developing complex systems using features like Codex's Goal Mode easily burns through **millions of tokens per session** as the agent recursively tests code, views outputs, and self-corrects.
- **The Cost Barrier**: OpenAI heavily subsidizes these API costs within their flat-rate consumer and enterprise subscriptions. A FOSS GUI alternative requires users to bring their own API keys, where a single complex debugging loop running on a commercial model could easily cost a user $20 to $50 out of pocket. [link](https://openai.com/index/introducing-the-codex-app/)

### 🧑‍💻 The FOSS Audience "CLI Bias"

The lack of a major FOSS GUI is also driven by developer preferences.

- Open-source contributors and power users naturally lean toward keyboard-driven interfaces.
- Consequently, FOSS engineering talent focuses heavily on CLI agent architectures like Aider, or IDE-integrated extensions like [Continue](https://toolquestor.com/open-source/alternative/openai-codex). The developers most capable of building a FOSS alternative simply prefer working in the terminal or inside VS Code rather than inside a standalone desktop application. [link](https://www.reddit.com/r/codex/comments/1u02i9w/why%5Fdo%5Fso%5Fmany%5Fpeople%5Fon%5Fthis%5Fsubreddit%5Fuse%5Fthe/)

***

### Emerging FOSS Challengers to Watch

Despite these hurdles, early open-source projects are actively trying to bridge the gap in 2026:

- **OpenCode**: A fully open-source, provider-agnostic engine that supports local models (via Ollama) and is beginning to roll out a companion desktop workspace.
- **[Open Design](https://www.youtube.com/watch?v=w2%5FZwhzB1g4)**: An Apache-2.0 licensed visual wrapper that sits on top of your existing local terminal agents to provide canvas previews and critique loops.
- **[Paseo](https://paseo.sh/alternatives/codex-app)**: A newer AGPL-3.0 open-source alternative built specifically to address the lack of native Linux support in the official Codex GUI. [link](https://www.goodday.work/blog/best-codex-alternatives/)

Would you like to explore how to connect one of these **FOSS alternatives** to a local LLM, or are you looking for ways to run **Codex CLI features** within your existing IDE layout?

- [link](https://www.reddit.com/r/codex/comments/1sk7xbu/codex%5Fcli%5Fvs%5Fapp/)\
  Codex CLI vs App - Reddit\
  Apr 13, 2026 — CLI has a few more features then the Codex App, but the core is the same. Codex App is easier to use, but in general it's the same...\
  Reddit
- [link](https://www.youtube.com/shorts/m%5F5nZMETAhU)\
  Codex Desktop App vs CLI - When to Use Each Tool\
  Feb 10, 2026 — or you're you're into the ones where you can't count like there's 160 terminals in T-Max. something like that this is not the app ...\
  2m\
  YouTube·Datadog Community
- [link](https://github.com/openai/codex/issues/26820)\
  CLI cannot acquire Chrome extension backend while Codex ...\
  Jun 6, 2026 — Summary. The Codex app UI can use the Codex Chrome Extension successfully on this machine, but the terminal-based Codex CLI cannot...\
  GitHub

Show all

# (?) neovim or vim

<mark><strong><span><span><a rel="noopener" href="https://neovim.io/"><span>Neovim</span></a></span><span> </span>is the better choice for most users</span></strong></mark>, particularly developers looking for a modern, highly extensible editor that can function like a lightweight IDE. However, **Vim** remains the gold standard for rock-solid stability and universal availability on remote servers. [link](https://www.youtube.com/watch?v=qQvFC0wRiRE)

Because Neovim is a "fork" (a modern derivative) of Vim, they share the exact same core keyboard shortcuts, modes, and commands. [link](https://www.youtube.com/shorts/AsoaYO%5FTDKw)

### Quick Summary

```
┌───────────────────────────────┬───────────────────────────────┐
│          NEOVIM (nvim)        │           VIM (vim)           │
├───────────────────────────────┼───────────────────────────────┤
│ 🚀 Fast-paced innovation      │ 🏔️ Rock-solid stability       │
│ 💻 Lua & rich plugin ecosystem│ 📜 Vimscript & lightweight    │
│ 🛠️ Built-in LSP & Tree-sitter │ 🌐 Pre-installed everywhere   │
└───────────────────────────────┴───────────────────────────────┘
```

### Core Differences

- **Plugin Ecosystem**: Neovim uses **Lua** as a first-class language for configuration and plugins. This has led to a massive ecosystem of fast, modern plugins like Telescope (for fuzzy finding). Vim uses its own languages (**Vimscript / Vim9script**), which are less popular for general programming.
- **Modern Features**: Neovim includes a native **Language Server Protocol (LSP)** client for IDE-like auto-completion and **Tree-sitter** for lightning-fast, context-aware syntax highlighting. Doing this in Vim usually requires heavy third-party plugins.
- **Ubiquity**: Vim comes pre-installed by default on almost every Linux distribution and macOS system. Neovim usually requires a quick, separate installation.
- **Stability vs. Hype**: Vim changes very slowly, meaning a configuration file written years ago will still work perfectly today. Neovim moves quickly, which occasionally introduces breaking changes to its plugin ecosystem. [link](https://www.reddit.com/r/vim/comments/hwl9k1/whats%5Fthe%5Fdifference%5Fbetween%5Fvim%5Fand%5Fneovim%5Fand/)

### Which One Should You Choose?

### Choose Neovim if:

1. You want to use your terminal editor as a **primary coding environment**.
2. You want rich IDE features like auto-complete, code diagnostics, and advanced search.
3. You prefer configuring your tools using a mainstream language like **Lua**.
4. You want to use pre-built starter configurations like LazyVim or AstroNvim to get up and running instantly. [link](https://www.reddit.com/r/vim/comments/hwl9k1/whats%5Fthe%5Fdifference%5Fbetween%5Fvim%5Fand%5Fneovim%5Fand/)

### Choose Vim if:

1. You primarily edit configuration files on **remote servers via SSH**.
2. You want a tool that "just works" out of the box without needing to manage a complex plugin ecosystem.
3. You rely heavily on **gVim** (the graphical user interface version of Vim). [link](https://www.reddit.com/r/vim/comments/opvv66/should%5Fi%5Fuse%5Fvim%5For%5Fneovim/)

If you are a complete beginner, starting with **Neovim** is highly recommended. The skills, muscle memory, and keyboard shortcuts you learn will translate perfectly to Vim whenever you find yourself on a server where Neovim isn't installed. [link](https://www.reddit.com/r/vim/comments/opvv66/should%5Fi%5Fuse%5Fvim%5For%5Fneovim/)

To help guide your next steps, let me know:

- What is your **primary goal**? (e.g., learning modal editing, building a full IDE replacement, or light server maintenance)

- What **programming languages** do you work with most often?

- Do you want to build a configuration **from scratch**, or use a **pre-configured setup**? [link](https://www.reddit.com/r/vim/comments/103nubi/why%5Fkeeps%5Fyou%5Fusing%5Fvim%5Fvs%5Fneovim/)

- [link](https://www.reddit.com/r/vim/comments/hwl9k1/whats%5Fthe%5Fdifference%5Fbetween%5Fvim%5Fand%5Fneovim%5Fand/)\
  Whats the difference between vim and neovim? And why ...\
  Jul 23, 2020 — \* Gushys. • 6y ago. Like most other replies, I use neovim because of the community development and the defaults. I dont use anythi...\
  Reddit·r/vim

- [link](https://www.reddit.com/r/vim/comments/16cdbyd/why%5Fyou%5Fswitched%5Ffrom%5Fneovim%5Fto%5Fvim/)\
  Why you switched from Neovim to Vim? - Reddit\
  Sep 7, 2023 — I'm dreading the day when the neovim evangelists start lobbying to have neovim replace vim in all the major linux distros. ... Why...\
  Reddit·r/vim

- [link](https://www.youtube.com/watch?v=qQvFC0wRiRE)\
  Why Neovim is so much better than Vim now... ...\
  Feb 3, 2023 — if you spent any time at all using Vim then there's a good chance that you might have also heard of this project called Neo Vim. a...\
  8:58\
  YouTube·Eric Murphy

Show all

# (?) vim or vi

**You should choose Vim.**

Vim stands for "Vi Improved". It is a powerful, modernized version of the original Vi text editor. On most modern Linux and macOS systems, typing `vi` in the terminal actually runs Vim in a compatibility mode. [link](https://www.reddit.com/r/linux4noobs/comments/15gnny5/are%5Fvi%5Fand%5Fvim%5Fthe%5Fsame%5Fthing/)

### Quick Comparison

| Feature                 | Vi (Original)                       | Vim (Vi Improved)                    |
| ----------------------- | ----------------------------------- | ------------------------------------ |
| **Undo System**         | Single-level undo only              | Multi-level undo tree                |
| **Syntax Highlighting** | No color coding                     | Hundreds of languages                |
| **Visual Comforts**     | Arrow keys can break in insert mode | Seamless arrow key and mouse support |
| **Advanced Editing**    | Single file view only               | Split screens and tab support        |
| **Extensibility**       | Basic configuration                 | Heavy plugin and scripting support   |

### Why Choose Vim?

- **Fewer Headache Mistakes**: In original Vi, if you hit undo (`u`) twice, it undoes your undo. Vim gives you infinite undo/redo capability.
- **Code Readability**: Vim provides automatic syntax highlighting, making code and configuration files infinitely easier to scan and debug.
- **Modern Features**: Vim allows you to open multiple files side-by-side using screen splitting (`:sp` or `:vsp`), use visual mode for easy highlighting, and install plugins to turn it into an IDE. [link](https://askubuntu.com/questions/418396/what-is-the-difference-between-vi-and-vim)

### When is Vi Used?

The only times you will interact with standard, pure Vi are on heavily restricted, minimal environments. This includes embedded systems, Docker containers, legacy commercial Unix servers (like AIX or Solaris), or absolute emergency system recovery modes where additional software packages cannot load. [link](https://www.reddit.com/r/linux4noobs/comments/15gnny5/are%5Fvi%5Fand%5Fvim%5Fthe%5Fsame%5Fthing/)

Because the core keyboard shortcuts and modes are identical, learning Vim automatically teaches you how to survive in Vi if you ever encounter it. [link](https://www.geeksforgeeks.org/linux-unix/vi-vs-vim-choosing-the-first-right-text-editor/)

If you are looking to get started, would you like a list of the **essential keyboard shortcuts** for navigating the editor, or do you need help **setting up a custom configuration file**?

- [link](https://www.reddit.com/r/linux4noobs/comments/15gnny5/are%5Fvi%5Fand%5Fvim%5Fthe%5Fsame%5Fthing/)\
  Are Vi and Vim the same thing? : r/linux4noobs - Reddit\
  Aug 2, 2023 — Vi and Vim are different. They share the same core functionality, but Vim has a lot of additional features including syntax highli...\
  Reddit·r/linux4noobs
- [link](https://askubuntu.com/questions/418396/what-is-the-difference-between-vi-and-vim)\
  What is the difference between Vi and Vim? - Ask Ubuntu\
  Feb 9, 2014 — 6 Answers. Sorted by: 229. Functionally, vim is almost a proper superset of vi. Therefore, everything that is in vi is available i...\
  Ask Ubuntu
- [link](https://vi.stackexchange.com/questions/5514/biggest-differences-between-vim-and-vi)\
  Biggest differences between Vim and vi\
  Nov 18, 2015 — Sorted by: 34. There actually is a help command in Vim to tell you about the differences: :help vi\_diff (note the underscore: :hel...\
  Stack Exchange

Show all



# <!-- 15 jul -->

# list file size or folder size alongside fd . --maxdepth 2

The standard `fd` tool does not have a built-in option to display file or folder sizes directly. To see sizes alongside your `fd` results, you must pipe the output into another command like `du` (for folders) or `ls` / `numfmt` (for files).

Here are the best ways to achieve this based on what you are searching for:

### For Files and Folders (Using `ls` or `du`)

You can use the `-X` (or `--exec-batch`) flag in `fd` to pass the results to `ls` or `du`.

- **View file sizes:**\
  bash

<!---->

```
fd . --maxdepth 2 -X ls -lh
```

Use code with caution.

- **View folder and file sizes combined:**\
  bash

<!---->

```
fd . --maxdepth 2 -X du -sh
```

Use code with caution.

### For Folders Only (Using `du`)

If you only want to see directories and their total sizes, restrict the search to directories using the `-t d` flag.

bash

```
fd . --maxdepth 2 -t d -X du -sh
```

Use code with caution.

### The Modern Alternative: `dua` or `dust`

If you frequently need to list file sizes with speed and depth control, consider using developer-friendly alternatives designed for this exact purpose:

- **Using `dust`:**\
  bash

<!---->

```
dust -d 2
```

Use code with caution.

- **Using `ncdu`:**\
  bash

<!---->

```
ncdu
```

Use code with caution.

To help narrow this down, let me know:

- Are you looking for a **specific file type** (like `.mp4` or `.log`)?
- Do you need to **sort the output** by size?

I can provide the exact command or alias to make your workflow faster.

- [link](https://learn.microsoft.com/en-us/answers/questions/2442710/how-to-view-folder-size-within-my-computer-or-wind)\
  How to view folder size within My Computer or Windows Explorer? - Microsoft Q\&A\
  Apr 4, 2010 — Windows Explorer has never included the ability to display folder sizes.\
  \
  \
  Microsoft Learn
- [link](https://www.webhosting.uk.com/kb/how-to-monitor-disk-usage-with-the-du-and-df-commands/)\
  Monitor Disk Usage in Linux with du and df - WHUK\
  Nov 18, 2025 — Use du when you need to find which folder is consuming space.\
  \
  \
  Webhosting UK
- [link](https://docs.rs/crate/fd-find/latest/source/README.md)\
  fd-find 10.4.2\
  To see details like file permissions, owners, file sizes etc., you can tell \`fd\` to show them by running \`ls\` for each result: \`\`\`\
  \
  Docs.rs

Show all

## just have a command. fd . --maxdepth 2. append filesize to file. append sum of all filesize to folder.

To get this exact layout in a single command, you can use `fd` to pass the items to a custom `bash` loop. This loop checks if an item is a file or a folder, calculates the correct size, and prints it alongside the path.

Run this command in your terminal:

bash

```
fd . --maxdepth 2 -X bash -c 'for f; do if [ -d "$f" ]; then echo -e "$(du -sh "$f" | cut -f1)\t$f/"; else echo -e "$(numfmt --to=iec $(stat -c%s "$f"))\t$f"; fi; done' _ {}
```

Use code with caution.

### How It Works

- `fd . --maxdepth 2 -X`: Finds all items up to 2 levels deep and passes them to the bash loop in batches for speed.
- `if [ -d "$f" ]`: Checks if the item is a folder.
- `du -sh ...`: Calculates the sum of all file sizes inside that folder and formats it cleanly (e.g., `4.0K`, `12M`).
- `stat -c%s ... | numfmt`: Grabs the exact byte size of a file and converts it into a human-readable format.
- `\t`: Formats the output with tabs so the sizes and paths line up cleanly.

If you plan to use this frequently, I can show you how to **save it as a permanent alias** or a custom function in your `.bashrc` or `.zshrc` file. Would you like the steps to set that up?

- [link](https://labex.io/questions/how-to-iterate-through-directories-and-files-using-loops-and-arrays-18305)\
  How to Iterate Through Directories and Files in Bash\
  Sep 6, 2024 — In this example, the for loop iterates through each item in the /path/to/directory/ directory. The if statement checks if the curr...\
  \
  LabEx
- [link](https://healeycodes.com/maybe-the-fastest-disk-usage-program-on-macos)\
  Maybe the Fastest Disk Usage Program on macOS\
  Jul 31, 2025 — du -sh (disk usage, summarize, human-readable) works out the total size of a directory by traversing all the files and subdirector...\
  \
  \
  healeycodes.com
- [link](https://medium.com/@linuxrootroom/methods-that-measure-the-size-of-a-file-in-linux-e0ef863daec3)\
  Methods That Measure The Size Of A File In Linux\
  Jan 26, 2024 — The stat command is being used with the -c %s option. The -c option allows for custom formatting of the output, and %s is a format...\
  \
  \
  Medium

## keep the original order of fd

To keep the exact output order of `fd`, you must use `-x` (lowercase) instead of `-X`. This executes the size check for each item individually, one by one, preserving `fd`'s natural traversal order.

Run this command in your terminal:

bash

```
fd . --maxdepth 2 -x bash -c 'if [ -d "$1" ]; then echo -e "$(du -sh "$1" | cut -f1)\t$1/"; else echo -e "$(numfmt --to=iec $(stat -c%s "$1"))\t$1"; fi' _ {}
```

Use code with caution.

### Why This Fixes It

- **`-x` (Executes Individually):** Forces `fd` to process and print each line sequentially as it finds them.
- **`-X` (Executes in Batch):** Grouped everything into a single final execution, which inadvertently forced `ls` or `du` to resort the list alphabetically.

If you find this command too long to type out every time, I can give you a quick copy-paste snippet to **turn it into a short keyword shortcut** (like `fds`) in your terminal settings. Would you like to do that?

## not working. just sort the final result instead.

Sorting the final output directly avoids the ordering bugs caused by individual item lookups. You can achieve this by piping the raw `fd` paths into an `awk` processing script, and then sorting the final list by the human-readable size column.

Run this command in your terminal to list everything, append sizes, and sort the final result from **smallest to largest**:

bash

```
fd . --maxdepth 2 | awk '{ if (system("[ -d \"" $0 "\" ]") == 0) { printf "%s/\n", $0 } else { print } }' | xargs -I {} sh -c 'if [ -d "{}" ]; then echo "$(du -sh "{}" | cut -f1) {}"; else echo "$(numfmt --to=iec $(stat -c%s "{}")) {}"; fi' | sort -h
```

Use code with caution.

### Key Variations

- **Sort Largest to Smallest:** Append `-r` to the end of the command:\
  bash

<!---->

```
... | sort -hr
```

Use code with caution.

- **Keep Hidden Files Included:** Add the `-H` flag to `fd` if you need to calculate hidden configuration files:\
  bash

<!---->

```
fd . --maxdepth 2 -H | ...
```

Use code with caution.

To help optimize this further, would you prefer the output sorted by **file size** or alphabetically by **folder name**? I can adjust the `sort` flags to match your exact preference.

## sort by name

To sort the final result alphabetically by name (the file or folder path), you can pipe the final formatted output directly into the standard `sort` command.

Run this command in your terminal:

bash

```
fd . --maxdepth 2 | awk '{ if (system("[ -d \"" $0 "\" ]") == 0) { printf "%s/\n", $0 } else { print } }' | xargs -I {} sh -c 'if [ -d "{}" ]; then printf "%s\t%s\n" "$(du -sh "{}" | cut -f1)" "{}"; else printf "%s\t%s\n" "$(numfmt --to=iec $(stat -c%s "{}"))" "{}"; fi' | sort -k2
```

Use code with caution.

### How It Works

- **`printf "%s\t%s\n"`**: Outputs the human-readable size, a tab separator, and then the path.
- **`sort -k2`**: Tells the system to completely ignore the size column and sort the list alphabetically starting from the second column (the path name).

If you want to reverse the order (from Z to A), you can change the very end of the command to `sort -k2 -r`.

Would you like to **hide the file size prefixes** and only use them for the folders, or is this side-by-side layout exactly what you need?

- [link](https://www.tecmint.com/linux-sort-command-examples/)\
  7 Interesting Linux 'sort' Command Examples - Part 2\
  Nov 6, 2023 — 16. Sorting Output by File Size in Human-Readable Format\
  \
  \
  Tecmint
- [link](https://www.reddit.com/r/unix/comments/13344wy/someone%5Fplease%5Fexplain%5Fthe%5Fsort%5Ffunction%5Fto%5Fme/)\
  Someone please explain the sort function to me like im 5 : r/unix\
  Apr 29, 2023 — Try 'sort -k2 file' and it'll sort by the 2nd column, which does seem to do comparison on consecutive characters as well.\
  \
  \
  Reddit

## do not add a weird / after folders

Here is the updated command. It strips out that extra trailing slash and sorts everything cleanly by the name column.

Run this command in your terminal:

bash

```
fd . --maxdepth 2 | xargs -I {} sh -c 'if [ -d "{}" ]; then printf "%s\t%s\n" "$(du -sh "{}" | cut -f1)" "{}"; else printf "%s\t%s\n" "$(numfmt --to=iec $(stat -c%s "{}"))" "{}"; fi' | sort -k2
```

Use code with caution.

### What Changed

- **Removed the `awk` filter:** The script no longer forces a `/` onto directory names.
- **`printf "%s\t%s\n"`**: Outputs the clean size, a tab, and the exact path just as `fd` found it.
- **`sort -k2`**: Safely sorts alphabetically by the path column, ignoring the size column completely.

If you notice certain folders or files are missing, would you like to **include hidden items** (like `.git` or `.env`) in the sorting, or is this standard view working for you?

- [link](https://wordpress.stackexchange.com/questions/198391/problem-requiring-including-plugin-files-with-plugin-dir-path-file)\
  Problem requiring/including plugin files with plugin\_dir\_path( \_\_FILE\_\_ )\
  Aug 12, 2015 — So it adds a trailing slash, because as the documentation states:\
  \
  \
  Stack Exchange

# . 

