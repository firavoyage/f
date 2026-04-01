<!-- installed via pnpm -g. the warning is not related to openclaw. -->

```
 ~ % pnpm add -g openclaw@latest
 WARN  1 deprecated subdependencies found: node-domexception@1.0.0
Packages: +347 -1
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-
Downloading @napi-rs/canvas-linux-x64-gnu@0.1.97: 13.94 MB/13.94 MB, done
Progress: resolved 1122, reused 745, downloaded 227, added 347, done

/home/fira/.local/bin/global/5:
+ openclaw 2026.3.31

╭ Warning ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                                                   │
│   Ignored build scripts: @matrix-org/matrix-sdk-crypto-nodejs@0.4.0, @vscode/ripgrep@1.17.1, koffi@2.15.2, openclaw@2026.3.31,    │
│   protobufjs@7.5.4, sharp@0.34.5.                                                                                                 │
│   Run "pnpm approve-builds -g" to pick which dependencies should be allowed to run scripts.                                       │
│                                                                                                                                   │
╰───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
Done in 44.1s using pnpm v10.30.2
```

<!-- wait... it errs after a normal installation? no human in the loop (even not for devs, but no user feedback loop i mean)? -->

```
 ~ % openclaw
01:05:16+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js

🦞 OpenClaw 2026.3.31 (213a704) — Built by lobsters, for humans. Don't question the hierarchy.

Usage: openclaw [options] [command]

Options:
  --container <name>   Run the CLI inside a running Podman/Docker container named <name> (default: env OPENCLAW_CONTAINER)
  --dev                Dev profile: isolate state under ~/.openclaw-dev, default gateway port 19001, and shift derived ports
                       (browser/canvas)
  -h, --help           Display help for command
  --log-level <level>  Global log level override for file + console (silent|fatal|error|warn|info|debug|trace)
  --no-color           Disable ANSI colors
  --profile <name>     Use a named profile (isolates OPENCLAW_STATE_DIR/OPENCLAW_CONFIG_PATH under ~/.openclaw-<name>)
  -V, --version        output the version number

Commands:
  Hint: commands suffixed with * have subcommands. Run <command> --help for details.
  acp *                Agent Control Protocol tools
  agent                Run one agent turn via the Gateway
  agents *             Manage isolated agents (workspaces, auth, routing)
  approvals *          Manage exec approvals (gateway or node host)
  backup *             Create and verify local backup archives for OpenClaw state
  browser              Manage OpenClaw's dedicated browser (Chrome/Chromium)
  channels *           Manage connected chat channels (Telegram, Discord, etc.)
  clawbot *            Legacy clawbot command aliases
  completion           Generate shell completion script
  config *             Non-interactive config helpers (get/set/unset/file/validate). Default: starts guided setup.
  configure            Interactive configuration for credentials, channels, gateway, and agent defaults
  cron *               Manage cron jobs via the Gateway scheduler
  daemon *             Gateway service (legacy alias)
  dashboard            Open the Control UI with your current token
  devices *            Device pairing + token management
  directory *          Lookup contact and group IDs (self, peers, groups) for supported chat channels
  dns *                DNS helpers for wide-area discovery (Tailscale + CoreDNS)
  docs                 Search the live OpenClaw docs
  doctor               Health checks + quick fixes for the gateway and channels
  gateway *            Run, inspect, and query the WebSocket Gateway
  health               Fetch health from the running gateway
  help                 Display help for command
  hooks *              Manage internal agent hooks
  logs                 Tail gateway file logs via RPC
  mcp                  Manage OpenClaw MCP config and channel bridge
  memory               Search, inspect, and reindex memory files
  message *            Send, read, and manage messages
  models *             Discover, scan, and configure models
  node *               Run and manage the headless node host service
  nodes *              Manage gateway-owned node pairing and node commands
  onboard              Interactive onboarding for gateway, workspace, and skills
  pairing *            Secure DM pairing (approve inbound requests)
  plugins *            Manage OpenClaw plugins and extensions
  qr                   Generate iOS pairing QR/setup code
  reset                Reset local config/state (keeps the CLI installed)
  sandbox *            Manage sandbox containers for agent isolation
  secrets *            Secrets runtime reload controls
  security *           Security tools and local config audits
  sessions *           List stored conversation sessions
  setup                Initialize local config and agent workspace
  skills *             List and inspect available skills
  status               Show channel health and recent session recipients
  system *             System events, heartbeat, and presence
  tasks *              Inspect durable background task state
  tui                  Open a terminal UI connected to the Gateway
  uninstall            Uninstall the gateway service + local data (CLI remains)
  update *             Update OpenClaw and inspect update channel status
  webhooks *           Webhook helpers and integrations

Examples:
  openclaw models --help
    Show detailed help for the models command.
  openclaw channels login --verbose
    Link personal WhatsApp Web and show QR + connection logs.
  openclaw message send --target +15555550123 --message "Hi" --json
    Send via your web session and print JSON result.
  openclaw gateway --port 18789
    Run the WebSocket Gateway locally.
  openclaw --dev gateway
    Run a dev Gateway (isolated state/config) on ws://127.0.0.1:19001.
  openclaw gateway --force
    Kill anything bound to the default gateway port, then start it.
  openclaw gateway ...
    Gateway control via WebSocket.
  openclaw agent --to +15555550123 --message "Run summary" --deliver
    Talk directly to the agent using the Gateway; optionally send the WhatsApp reply.
  openclaw message send --channel telegram --target @mychat --message "Hi"
    Send via your Telegram bot.

Docs: docs.openclaw.ai/cli
```

<!-- what the hell? -->

```
 ~ % openclaw dashboard

🦞 OpenClaw 2026.3.31 (213a704) — Running on your hardware, reading your logs, judging nothing (mostly).

Dashboard URL: http://127.0.0.1:18789/
Copy to clipboard unavailable.
Opened in your browser. Keep that tab to control OpenClaw.
```

```
This site can’t be reached127.0.0.1 refused to connect.
Try:

Checking the connection
Checking the proxy and the firewall
ERR_CONNECTION_REFUSED
```

<!-- well, deprecated. -->

```
 ~ % openclaw tui

🦞 OpenClaw 2026.3.31 (213a704) — It's not "failing," it's "discovering new ways to configure the same thing wrong."

Error: Missing gateway auth token.
Fix: set OPENCLAW_GATEWAY_TOKEN/OPENCLAW_GATEWAY_PASSWORD, pass --token/--password,
or resolve the configured secret provider for this credential.
```

<!-- ik poor code quality, but... poor onboarding?! -->

<!-- i remember, maybe a month before when i do the same thing it works. -->

<!-- well, i have to onboard it seems. no guide. just error msgs. poor ux. -->

```
openclaw onboard --install-daemon
```

<!-- i could not search. custom provider is one of them?! -->

```
◆  Model/auth provider
│  ○ Anthropic
│  ○ BytePlus
│  ○ Chutes
│  ○ Cloudflare AI Gateway
│  ○ Copilot
│  ● Custom Provider (Any OpenAI or Anthropic compatible endpoint)
│  ○ DeepSeek
│  ○ Google
│  ○ Hugging Face
│  ○ Kilo Gateway
│  ○ LiteLLM
│  ○ Microsoft Foundry
│  ○ MiniMax
│  ○ Mistral AI
│  ○ Moonshot AI (Kimi K2.5)
│  ○ Ollama
│  ○ OpenAI
│  ○ OpenCode
│  ○ OpenRouter
│  ○ Qianfan
│  ○ Qwen (Alibaba Cloud Model Studio)
│  ○ SGLang
│  ○ Synthetic
│  ○ Together AI
│  ○ Venice AI
│  ○ Vercel AI Gateway
│  ○ vLLM
│  ○ Volcano Engine
│  ...
```

<!-- btw, "Security warning — please read". if i were the devs, i wont show that. but there is nothing wrong with it. -->

<!-- what the hell, amzn bedrock. noisy! yagni! -->

<!-- btw, seems every of the messaging apps are builtin? -->

```
◇  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue?
│  Yes
01:15:03+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
│
◇  Setup mode
│  QuickStart
│
◇  QuickStart ─────────────────────────╮
│                                      │
│  Gateway port: 18789                 │
│  Gateway bind: Loopback (127.0.0.1)  │
│  Gateway auth: Token (default)       │
│  Tailscale exposure: Off             │
│  Direct to chat channels.            │
│                                      │
├──────────────────────────────────────╯
01:15:04+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:15:04+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
│
◇  Model/auth provider
│  Custom Provider
│
◇  API Base URL
│  https://api.novita.ai/openai
│
◇  How do you want to provide this API key?
│  Use external secret provider
│
◇  Where is this API key stored?
│  Environment variable
│
◇  Environment variable name
│  OPENCODE_OPENAI_API_KEY
│
◇  Reference validated ──────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Validated environment variable OPENCODE_OPENAI_API_KEY. OpenClaw will store a reference,  │
│  not the key value.                                                                        │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Endpoint compatibility
│  OpenAI-compatible
│
◇  Model ID
│  minimax/minimax-m2.7
│
◇  Verification successful.
│
◇  Endpoint ID
│  f
│
◇  Model alias (optional)
│
Configured custom provider: f/minimax/minimax-m2.7
01:16:08+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:09+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:10+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:10+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:10+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:11+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:12+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:12+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
│
◇  Model check ──────────────────────────────────────────────────────────────────────────╮
│                                                                                        │
│  No auth configured for provider "f". The agent may fail until credentials are added.  │
│  `openclaw configure` or set an API key env var.                                       │
│                                                                                        │
├────────────────────────────────────────────────────────────────────────────────────────╯
01:16:14+08:00 [channels] failed to load bundled channel discord from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/discord/index.js: Error: Cannot find module '@buape/carbon'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/ui-DKBKDxGo.js
01:16:14+08:00 [channels] failed to load bundled channel feishu from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/feishu/index.js: Error: Cannot find module '@larksuiteoapi/node-sdk'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/probe-DwklNppo.js
01:16:15+08:00 [channels] failed to load bundled channel qqbot from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/qqbot/index.js: Error: Cannot find module 'silk-wasm'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/outbound-B0NP_zJE.js
01:16:15+08:00 [channels] failed to load bundled channel slack from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/slack/index.js: Error: Cannot find module '@slack/web-api'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/runtime-api-DARHIvKf.js
01:16:16+08:00 [channels] failed to load bundled channel telegram from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/telegram/index.js: Error: Cannot find module 'grammy'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/sticker-cache-1Tf7t-45.js
01:16:17+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:18+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:18+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
01:16:19+08:00 [plugins] amazon-bedrock failed to load from /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/extensions/amazon-bedrock/index.js: Error: Cannot find module '@aws-sdk/client-bedrock'
Require stack:
- /home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/discovery-Bwev8dJL.js
│
◇  Channel status ────────────────────────────────╮
│                                                 │
│  WhatsApp: not linked                           │
│  IRC: needs host + nick                         │
│  Signal: needs setup                            │
│  signal-cli: missing (signal-cli)               │
│  iMessage: needs setup                          │
│  imsg: missing (imsg)                           │
│  LINE: needs token + secret                     │
│  Accounts: 0                                    │
│  Google Chat: needs service account             │
│  MS Teams: needs app credentials                │
│  Mattermost: needs token + url                  │
│  Nextcloud Talk: needs setup                    │
│  BlueBubbles: needs setup                       │
│  Zalo: needs token                              │
│  Zalo Personal: needs QR login                  │
│  Synology Chat: needs token + incoming webhook  │
│  Accounts: 0                                    │
│  Tlon: needs setup                              │
│  Nostr: needs private key                       │
│  Relays: 2                                      │
│  Telegram: not configured                       │
│  Discord: not configured                        │
│  Slack: not configured                          │
│  Feishu: installed                              │
│  Discord: installed                             │
│  QQ Bot: installed                              │
│  Slack: installed                               │
│  Telegram: installed                            │
│  Twitch: installed                              │
│                                                 │
├─────────────────────────────────────────────────╯
│
◇  How channels work ─────────────────────────────────────────────────────────────────────╮
│                                                                                         │
│  DM security: default is pairing; unknown DMs get a pairing code.                       │
│  Approve with: openclaw pairing approve <channel> <code>                                │
│  Public DMs require dmPolicy="open" + allowFrom=["*"].                                  │
│  Multi-user DMs: run: openclaw config set session.dmScope "per-channel-peer" (or        │
│  "per-account-channel-peer" for multi-account channels) to isolate sessions.            │
│  Docs: channels/pairing            │
│                                                                                         │
│  Telegram: simplest way to get started — register a bot with @BotFather and get going.  │
│  WhatsApp: works with your own number; recommend a separate phone + eSIM.               │
│  Discord: very well supported right now.                                                │
│  IRC: classic IRC networks with DM/channel routing and pairing controls.                │
│  Google Chat: Google Workspace Chat app with HTTP webhook.                              │
│  Slack: supported (Socket Mode).                                                        │
│  Signal: signal-cli linked device; more setup (David Reagans: "Hop on Discord.").       │
│  iMessage: this is still a work in progress.                                            │
│  LINE: LINE Messaging API webhook bot.                                                  │
│  Microsoft Teams: Teams SDK; enterprise support.                                        │
│  Mattermost: self-hosted Slack-style chat; install the plugin to enable.                │
│  Nextcloud Talk: Self-hosted chat via Nextcloud Talk webhook bots.                      │
│  Matrix: open protocol; configure a homeserver + access token.                          │
│  BlueBubbles: iMessage via the BlueBubbles mac app + REST API.                          │
│  Zalo: Vietnam-focused messaging platform with Bot API.                                 │
│  Zalo Personal: Zalo personal account via QR code login.                                │
│  Synology Chat: Connect your Synology NAS Chat to OpenClaw                              │
│  Tlon: Decentralized messaging on Urbit                                                 │
│  Nostr: Decentralized DMs via Nostr relays (NIP-04)                                     │
│  Feishu: 飞书/Lark enterprise messaging with doc/wiki/drive tools.                      │
│  QQ Bot: connect to QQ via official QQ Bot API with group chat and direct message       │
│  support.                                                                               │
│  Twitch: Twitch chat integration                                                        │
│                                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Select channel (QuickStart)
│  Skip for now
Updated ~/.openclaw/openclaw.json
Workspace OK: ~/.openclaw/workspace
Sessions OK: ~/.openclaw/agents/main/sessions
│
◇  Web search ─────────────────────────────────────────────────────────────────╮
│                                                                              │
│  Web search lets your agent look things up online.                           │
│  Choose a provider. Some providers need an API key, and some work key-free.  │
│  Docs: https://docs.openclaw.ai/tools/web                                    │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────╯
│
◇  Search provider
│  DuckDuckGo Search (experimental)
│
◇  Web search ──────────────────────────────────────────────────────────────╮
│                                                                           │
│  DuckDuckGo Search (experimental) works without an API key.               │
│  OpenClaw will enable the plugin and use it as your web_search provider.  │
│  Docs: https://docs.openclaw.ai/tools/web                                 │
│                                                                           │
├───────────────────────────────────────────────────────────────────────────╯
│
◇  Skills status ─────────────╮
│                             │
│  Eligible: 10               │
│  Missing requirements: 35   │
│  Unsupported on this OS: 7  │
│  Blocked by allowlist: 0    │
│                             │
├─────────────────────────────╯
│
◇  Configure skills now? (recommended)
│  No
│
◇  Hooks ──────────────────────────────────────────────────────────────────╮
│                                                                          │
│  Hooks let you automate actions when agent commands are issued.          │
│  Example: Save session context to memory when you issue /new or /reset.  │
│                                                                          │
│  Learn more: https://docs.openclaw.ai/automation/hooks                   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
```

<!-- ux. inconsistency. i could not enter again to skip! -->

```
▲  Enable hooks?
│  ◻ Skip for now
│  ◻ 🚀 boot-md
│  ◻ 📎 bootstrap-extra-files
│  ◻ 📝 command-logger
│  ◻ 💾 session-memory
└  Please select at least one option.
   Press  space  to select,  enter  to submit
```

<!-- systemd? why no prompt this time? you think systemd is good? fuck damn. -->

```
◇  Enable hooks?
│  Skip for now
Config overwrite: /home/fira/.openclaw/openclaw.json (sha256 19e1a63f7842959555475875ce7a236171c2483ccbdd33a60e2595e462c7aa16 -> 3dc5b66c6462b4a6111d6e11258d36d4dffb8fca278379edc7cee495b4f8bd8b, backup=/home/fira/.openclaw/openclaw.json.bak)
│
◇  Systemd ────────────────────────────────────────────────────────────────────────────────╮
│                                                                                          │
│  Linux installs use a systemd user service by default. Without lingering, systemd stops  │
│  the user session on logout/idle and kills the Gateway.                                  │
│  Enabling lingering now (may require sudo; writes /var/lib/systemd/linger).              │
│                                                                                          │
├──────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Systemd ─────────────────────────────╮
│                                       │
│  Enabled systemd lingering for fira.  │
│                                       │
├───────────────────────────────────────╯
│
◇  Gateway service runtime ────────────────────────────────────────────╮
│                                                                      │
│  QuickStart uses Node for the Gateway service (stable + supported).  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────╯
│
◒  Installing Gateway service….
Installed systemd service: /home/fira/.config/systemd/user/openclaw-gateway.service
◇  Gateway service installed.
Health check failed: gateway closed (1006 abnormal closure (no close frame)): no close reason
│
◇  Health check help ────────────────────────────────╮
│                                                    │
│  Docs:                                             │
│  https://docs.openclaw.ai/gateway/health           │
│  https://docs.openclaw.ai/gateway/troubleshooting  │
│                                                    │
├────────────────────────────────────────────────────╯
│
◇  Optional apps ────────────────────────╮
│                                        │
│  Add nodes for extra features:         │
│  - macOS app (system + notifications)  │
│  - iOS app (camera/canvas)             │
│  - Android app (camera/canvas)         │
│                                        │
├────────────────────────────────────────╯
│
◇  Control UI ───────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Web UI: http://127.0.0.1:18789/                                                           │
│  Web UI (with token):                                                                      │
│  http://127.0.0.1:18789/#token=9f2a065e924c528b9074b976c5b98590afbab85ea9af2425            │
│  Gateway WS: ws://127.0.0.1:18789                                                          │
│  Gateway: not detected (gateway closed (1006 abnormal closure (no close frame)): no close  │
│  reason)                                                                                   │
│  Docs: https://docs.openclaw.ai/web/control-ui                                             │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Workspace backup ────────────────────────────────────────╮
│                                                           │
│  Back up your agent workspace.                            │
│  Docs: https://docs.openclaw.ai/concepts/agent-workspace  │
│                                                           │
├───────────────────────────────────────────────────────────╯
│
◇  Security ──────────────────────────────────────────────────────╮
│                                                                 │
│  Running agents on your computer is risky — harden your setup:  │
│  https://docs.openclaw.ai/security                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────╯
│
◇  Shell completion ───────────────────────────────────────────────────────╮
│                                                                          │
│  Shell completion installed. Restart your shell or run: source ~/.zshrc  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
◇  Web search ──────────────────────────────────────────────────────────────────────╮
│                                                                                   │
│  Provider DuckDuckGo Search (experimental) is selected but no API key was found.  │
│  web_search will not work until a key is added.                                   │
│    openclaw configure --section web                                               │
│                                                                                   │
│  Get your key at: https://duckduckgo.com/                                         │
│  Docs: https://docs.openclaw.ai/tools/web                                         │
│                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────╯
│
◇  What now ─────────────────────────────────────────────────────────────╮
│                                                                        │
│  What now: https://openclaw.ai/showcase ("What People Are Building").  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────╯
│
└  Onboarding complete. Use the dashboard link above to control OpenClaw.
```

<!-- ? -->

```
 ~ % openclaw dashboard

🦞 OpenClaw 2026.3.31 (213a704) — I've seen your commit messages. We'll work on that together.

Dashboard URL: http://127.0.0.1:18789/#token=9f2a065e924c528b9074b976c5b98590afbab85ea9af2425
Copy to clipboard unavailable.
Opened in your browser. Keep that tab to control OpenClaw.
 ~ % openclaw tui

🦞 OpenClaw 2026.3.31 (213a704) — Your AI assistant, now without the $3,499 headset.

 openclaw tui - ws://127.0.0.1:18789 - agent main - session main

 not connected to gateway — message not sent
 gateway disconnected: closed | idle
 agent main | session main | unknown | tokens ?
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

───────────────────────────────────────────────
```

<!-- ? -->

```
 ~ % openclaw devices list

🦞 OpenClaw 2026.3.31 (213a704) — You had me at 'openclaw gateway start.'

│
◇
[openclaw] Failed to start CLI: Error: gateway closed (1006 abnormal closure (no close frame)): no close reason
Gateway target: ws://127.0.0.1:18789
Source: local loopback
Config: /home/fira/.openclaw/openclaw.json
Bind: loopback
    at Object.onClose (file:///home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/call-h8FrADrE.js:575:10)
    at WebSocket.<anonymous> (file:///home/fira/.local/bin/global/5/.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw/dist/method-scopes-D3wXggJU.js:2062:23)
    at WebSocket.emit (node:events:508:28)
    at WebSocket.emitClose (/home/fira/.local/bin/global/5/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket.js:263:12)
    at emitErrorAndClose (/home/fira/.local/bin/global/5/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket.js:1047:13)
    at ClientRequest.<anonymous> (/home/fira/.local/bin/global/5/.pnpm/ws@8.20.0/node_modules/ws/lib/websocket.js:886:5)
    at ClientRequest.emit (node:events:508:28)
    at emitErrorEvent (node:_http_client:108:11)
    at Socket.socketErrorListener (node:_http_client:575:5)
    at Socket.emit (node:events:508:28)
```

<!-- turn of amzn bdrk -->

```
openclaw plugins disable amazon-bedrock
```

<!-- what the hell. i could not even start it. well, let's build with pnpm. btw, js/ts are interpretted... they dont need to be built explicitly! -->

<!-- wait... it's stuck! oh, it's done. but 1m 17s. fuck. what are you doing?! -->

```
 ~ % pnpm approve-builds -g
✔ Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection) · @matrix-org/matrix-sdk-crypto-nodejs, @vscode/ripgrep, koffi, openclaw, protobufjs, sharp

✔ The next packages will now be built: @matrix-org/matrix-sdk-crypto-nodejs, @vscode/ripgrep, koffi, openclaw, protobufjs, sharp.
Do you approve? (y/N) · false
 ~ % pnpm approve-builds -g
✔ Choose which packages to build (Press <space> to select, <a> to toggle all, <i> to invert selection) · @matrix-org/matrix-sdk-crypto-nodejs, @vscode/ripgrep, koffi, openclaw, protobufjs, sharp

✔ The next packages will now be built: @matrix-org/matrix-sdk-crypto-nodejs, @vscode/ripgrep, koffi, openclaw, protobufjs, sharp.
Do you approve? (y/N) · true
.pnpm/koffi@2.15.2/node_modules/koffi: Running install script, done in 120ms
.pnpm/protobufjs@7.5.4/node_modules/protobufjs: Running postinstall script, done in 47ms
.pnpm/@vscode+ripgrep@1.17.1/node_modules/@vscode/ripgrep: Running postinstall script, done in 3.2s
.pnpm/@matrix-org+matrix-sdk-crypto-nodejs@0.4.0/node_modules/@matrix-org/matrix-sdk-crypto-nodejs: Running postinstall script, done in 8.3ssharp@0.34.5/node_modules/sharp: Running install script, done in 113ms

.pnpm/openclaw@2026.3.31_@napi-rs+canvas@0.1.97/node_modules/openclaw: Running postinstall script, done in 1m 17s
```

<!-- check journalctl (recommended by doctor)... well i see. it's restarting forever. because it does not source .zshrc when running in a service, maybe. let me paste the key directly this time. -->

```
Apr 02 01:40:24 Fira node[3740367]: 2026-04-02T01:40:24.011+08:00 Gateway failed to start: Error: Startup failed: required secrets are unavailable. SecretRefResolutionError: Environment variable "OPENCODE_OPENAI_API_KEY" is missing or empty.
Apr 02 01:40:24 Fira systemd[1513]: openclaw-gateway.service: Main process exited, code=exited, status=1/FAILURE
Apr 02 01:40:24 Fira systemd[1513]: openclaw-gateway.service: Failed with result 'exit-code'.
Apr 02 01:40:24 Fira systemd[1513]: openclaw-gateway.service: Consumed 3.555s CPU time.
Apr 02 01:40:29 Fira systemd[1513]: openclaw-gateway.service: Scheduled restart job, restart counter is at 33.
Apr 02 01:40:29 Fira systemd[1513]: Started openclaw-gateway.service - OpenClaw Gateway (v2026.3.31).
Apr 02 01:40:31 Fira node[3740416]: 2026-04-02T01:40:31.666+08:00 [secrets] [SECRETS_RELOADER_DEGRADED] SecretRefResolutionError: Environment variable "OPENCODE_OPENAI_API_KEY" is missing or empty.
Apr 02 01:40:31 Fira node[3740416]: 2026-04-02T01:40:31.669+08:00 Gateway failed to start: Error: Startup failed: required secrets are unavailable. SecretRefResolutionError: Environment variable "OPENCODE_OPENAI_API_KEY" is missing or empty.
Apr 02 01:40:31 Fira systemd[1513]: openclaw-gateway.service: Main process exited, code=exited, status=1/FAILURE
Apr 02 01:40:31 Fira systemd[1513]: openclaw-gateway.service: Failed with result 'exit-code'.
Apr 02 01:40:31 Fira systemd[1513]: openclaw-gateway.service: Consumed 3.417s CPU time.
Apr 02 01:40:36 Fira systemd[1513]: openclaw-gateway.service: Scheduled restart job, restart counter is at 34.
Apr 02 01:40:36 Fira systemd[1513]: Started openclaw-gateway.service - OpenClaw Gateway (v2026.3.31).
Apr 02 01:40:39 Fira node[3740466]: 2026-04-02T01:40:39.227+08:00 [secrets] [SECRETS_RELOADER_DEGRADED] SecretRefResolutionError: Environment variable "OPENCODE_OPENAI_API_KEY" is missing or empty.
Apr 02 01:40:39 Fira node[3740466]: 2026-04-02T01:40:39.229+08:00 Gateway failed to start: Error: Startup failed: required secrets are unavailable. SecretRefResolutionError: Environment variable "OPENCODE_OPENAI_API_KEY" is missing or empty.
Apr 02 01:40:39 Fira systemd[1513]: openclaw-gateway.service: Main process exited, code=exited, status=1/FAILURE
Apr 02 01:40:39 Fira systemd[1513]: openclaw-gateway.service: Failed with result 'exit-code'.
Apr 02 01:40:39 Fira systemd[1513]: openclaw-gateway.service: Consumed 3.488s CPU time.
```

<!-- secure: i rm the key myself. it shows the api key directly by default. well, traditional clis usually not only hide the key, but also show nothing when you type/paste it (i remember arch setup login password is kind of like that.). -->

<!-- wait. one catch: it says duckduckgo does not need api key in the list. but now it needs. -->

<!-- btw, it picks ddg by default (it's not even the first in the list. it's the second. and it's experimental.). -->

```
 ~ % openclaw onboard --install-daemon


🦞 OpenClaw 2026.3.31 (213a704) — I'm the reason your shell history looks like a hacker-movie montage.

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
██░▄▄▄░██░▄▄░██░▄▄▄██░▀██░██░▄▄▀██░████░▄▄▀██░███░██
██░███░██░▀▀░██░▄▄▄██░█░█░██░█████░████░▀▀░██░█░█░██
██░▀▀▀░██░█████░▀▀▀██░██▄░██░▀▀▄██░▀▀░█░██░██▄▀▄▀▄██
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
                  🦞 OPENCLAW 🦞

┌  OpenClaw setup
│
◇  Security ─────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Security warning — please read.                                                           │
│                                                                                            │
│  OpenClaw is a hobby project and still in beta. Expect sharp edges.                        │
│  By default, OpenClaw is a personal agent: one trusted operator boundary.                  │
│  This bot can read files and run actions if tools are enabled.                             │
│  A bad prompt can trick it into doing unsafe things.                                       │
│                                                                                            │
│  OpenClaw is not a hostile multi-tenant boundary by default.                               │
│  If multiple users can message one tool-enabled agent, they share that delegated tool      │
│  authority.                                                                                │
│                                                                                            │
│  If you’re not comfortable with security hardening and access control, don’t run           │
│  OpenClaw.                                                                                 │
│  Ask someone experienced to help before enabling tools or exposing it to the internet.     │
│                                                                                            │
│  Recommended baseline:                                                                     │
│  - Pairing/allowlists + mention gating.                                                    │
│  - Multi-user/shared inbox: split trust boundaries (separate gateway/credentials, ideally  │
│    separate OS users/hosts).                                                               │
│  - Sandbox + least-privilege tools.                                                        │
│  - Shared inboxes: isolate DM sessions (`session.dmScope: per-channel-peer`) and keep      │
│    tool access minimal.                                                                    │
│  - Keep secrets out of the agent’s reachable filesystem.                                   │
│  - Use the strongest available model for any bot with tools or untrusted inboxes.          │
│                                                                                            │
│  Run regularly:                                                                            │
│  openclaw security audit --deep                                                            │
│  openclaw security audit --fix                                                             │
│                                                                                            │
│  Must read: https://docs.openclaw.ai/gateway/security                                      │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  I understand this is personal-by-default and shared/multi-user use requires lock-down. Continue?
│  Yes
│
◇  Setup mode
│  QuickStart
│
◇  Existing config detected ─────────╮
│                                    │
│  workspace: ~/.openclaw/workspace  │
│  model: f/minimax/minimax-m2.7     │
│  gateway.mode: local               │
│  gateway.port: 18789               │
│  gateway.bind: loopback            │
│                                    │
├────────────────────────────────────╯
│
◇  Config handling
│  Use existing values
│
◇  QuickStart ─────────────────────────────╮
│                                          │
│  Keeping your current gateway settings:  │
│  Gateway port: 18789                     │
│  Gateway bind: Loopback (127.0.0.1)      │
│  Gateway auth: Token (default)           │
│  Tailscale exposure: Off                 │
│  Direct to chat channels.                │
│                                          │
├──────────────────────────────────────────╯
│
◇  Model/auth provider
│  Custom Provider
│
◇  API Base URL
│  https://api.novita.ai/openai
│
◇  How do you want to provide this API key?
│  Paste API key now
│
◇  API Key (leave blank if not required)
│  sk_...
│
◇  Endpoint compatibility
│  OpenAI-compatible
│
◇  Model ID
│  minimax/minimax-m2.7
│
◇  Verification successful.
│
◇  Endpoint ID
│  custom-api-novita-ai
│
◇  Model alias (optional)
│
Configured custom provider: custom-api-novita-ai/minimax/minimax-m2.7

│
◇  Channel status ────────────────────────────────╮
│                                                 │
│  Telegram: needs token                          │
│  WhatsApp: not linked                           │
│  Discord: needs token                           │
│  IRC: needs host + nick                         │
│  Slack: needs tokens                            │
│  Signal: needs setup                            │
│  signal-cli: missing (signal-cli)               │
│  iMessage: needs setup                          │
│  imsg: missing (imsg)                           │
│  LINE: needs token + secret                     │
│  Accounts: 0                                    │
│  QQ Bot: needs AppID + AppSecret                │
│  Google Chat: needs service account             │
│  MS Teams: needs app credentials                │
│  Mattermost: needs token + url                  │
│  Nextcloud Talk: needs setup                    │
│  Feishu: needs app credentials                  │
│  BlueBubbles: needs setup                       │
│  Zalo: needs token                              │
│  Zalo Personal: needs QR login                  │
│  Synology Chat: needs token + incoming webhook  │
│  Accounts: 0                                    │
│  Tlon: needs setup                              │
│  Nostr: needs private key                       │
│  Relays: 2                                      │
│  Twitch: installed                              │
│                                                 │
├─────────────────────────────────────────────────╯
│
◇  How channels work ─────────────────────────────────────────────────────────────────────╮
│                                                                                         │
│  DM security: default is pairing; unknown DMs get a pairing code.                       │
│  Approve with: openclaw pairing approve <channel> <code>                                │
│  Public DMs require dmPolicy="open" + allowFrom=["*"].                                  │
│  Multi-user DMs: run: openclaw config set session.dmScope "per-channel-peer" (or        │
│  "per-account-channel-peer" for multi-account channels) to isolate sessions.            │
│  Docs: channels/pairing            │
│                                                                                         │
│  Telegram: simplest way to get started — register a bot with @BotFather and get going.  │
│  WhatsApp: works with your own number; recommend a separate phone + eSIM.               │
│  Discord: very well supported right now.                                                │
│  IRC: classic IRC networks with DM/channel routing and pairing controls.                │
│  Google Chat: Google Workspace Chat app with HTTP webhook.                              │
│  Slack: supported (Socket Mode).                                                        │
│  Signal: signal-cli linked device; more setup (David Reagans: "Hop on Discord.").       │
│  iMessage: this is still a work in progress.                                            │
│  LINE: LINE Messaging API webhook bot.                                                  │
│  QQ Bot: Connect to QQ via official QQ Bot API                                          │
│  Microsoft Teams: Teams SDK; enterprise support.                                        │
│  Mattermost: self-hosted Slack-style chat; install the plugin to enable.                │
│  Nextcloud Talk: Self-hosted chat via Nextcloud Talk webhook bots.                      │
│  Feishu: 飞书/Lark enterprise messaging.                                                │
│  Matrix: open protocol; configure a homeserver + access token.                          │
│  BlueBubbles: iMessage via the BlueBubbles mac app + REST API.                          │
│  Zalo: Vietnam-focused messaging platform with Bot API.                                 │
│  Zalo Personal: Zalo personal account via QR code login.                                │
│  Synology Chat: Connect your Synology NAS Chat to OpenClaw                              │
│  Tlon: Decentralized messaging on Urbit                                                 │
│  Nostr: Decentralized DMs via Nostr relays (NIP-04)                                     │
│  Twitch: Twitch chat integration                                                        │
│                                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Select channel (QuickStart)
│  Skip for now
Config overwrite: /home/fira/.openclaw/openclaw.json (sha256 1e4f2f5593db312b9112e1fc1674ae2aba795c2cf06a534eb44defc704c198c8 -> 676e62d77afd5411c08bb27ed7baad5ce0063d8d12340c8b181b876cb836b246, backup=/home/fira/.openclaw/openclaw.json.bak)
Updated ~/.openclaw/openclaw.json
Workspace OK: ~/.openclaw/workspace
Sessions OK: ~/.openclaw/agents/main/sessions
│
◇  Web search ─────────────────────────────────────────────────────────────────╮
│                                                                              │
│  Web search lets your agent look things up online.                           │
│  Choose a provider. Some providers need an API key, and some work key-free.  │
│  Docs: https://docs.openclaw.ai/tools/web                                    │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────╯
│
◇  Search provider
│  DuckDuckGo Search (experimental)
│
◇  Web search ──────────────────────────────────────────────────────────────╮
│                                                                           │
│  DuckDuckGo Search (experimental) works without an API key.               │
│  OpenClaw will enable the plugin and use it as your web_search provider.  │
│  Docs: https://docs.openclaw.ai/tools/web                                 │
│                                                                           │
├───────────────────────────────────────────────────────────────────────────╯
│
◇  Skills status ─────────────╮
│                             │
│  Eligible: 10               │
│  Missing requirements: 35   │
│  Unsupported on this OS: 7  │
│  Blocked by allowlist: 0    │
│                             │
├─────────────────────────────╯
│
◇  Configure skills now? (recommended)
│  No
│
◇  Hooks ──────────────────────────────────────────────────────────────────╮
│                                                                          │
│  Hooks let you automate actions when agent commands are issued.          │
│  Example: Save session context to memory when you issue /new or /reset.  │
│                                                                          │
│  Learn more: https://docs.openclaw.ai/automation/hooks                   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
◇  Enable hooks?
│  Skip for now
Config overwrite: /home/fira/.openclaw/openclaw.json (sha256 676e62d77afd5411c08bb27ed7baad5ce0063d8d12340c8b181b876cb836b246 -> a41c625bff5d1317d3577a71fe052b0e930a71177453ec1b06fc55d9cfdba8cc, backup=/home/fira/.openclaw/openclaw.json.bak)
│
◇  Gateway service runtime ────────────────────────────────────────────╮
│                                                                      │
│  QuickStart uses Node for the Gateway service (stable + supported).  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────╯
│
◇  Gateway service already installed
│  Restart
│
Restarted systemd service: openclaw-gateway.service
◇  Gateway service restarted.
Health check failed: gateway closed (1006 abnormal closure (no close frame)): no close reason
│
◇  Health check help ────────────────────────────────╮
│                                                    │
│  Docs:                                             │
│  https://docs.openclaw.ai/gateway/health           │
│  https://docs.openclaw.ai/gateway/troubleshooting  │
│                                                    │
├────────────────────────────────────────────────────╯
│
◇  Optional apps ────────────────────────╮
│                                        │
│  Add nodes for extra features:         │
│  - macOS app (system + notifications)  │
│  - iOS app (camera/canvas)             │
│  - Android app (camera/canvas)         │
│                                        │
├────────────────────────────────────────╯
│
◇  Control UI ───────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Web UI: http://127.0.0.1:18789/                                                           │
│  Web UI (with token):                                                                      │
│  http://127.0.0.1:18789/#token=9f2a065e924c528b9074b976c5b98590afbab85ea9af2425            │
│  Gateway WS: ws://127.0.0.1:18789                                                          │
│  Gateway: not detected (gateway closed (1006 abnormal closure (no close frame)): no close  │
│  reason)                                                                                   │
│  Docs: https://docs.openclaw.ai/web/control-ui                                             │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  Workspace backup ────────────────────────────────────────╮
│                                                           │
│  Back up your agent workspace.                            │
│  Docs: https://docs.openclaw.ai/concepts/agent-workspace  │
│                                                           │
├───────────────────────────────────────────────────────────╯
│
◇  Security ──────────────────────────────────────────────────────╮
│                                                                 │
│  Running agents on your computer is risky — harden your setup:  │
│  https://docs.openclaw.ai/security                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────╯
│
◇  Web search ──────────────────────────────────────────────────────────────────────╮
│                                                                                   │
│  Provider DuckDuckGo Search (experimental) is selected but no API key was found.  │
│  web_search will not work until a key is added.                                   │
│    openclaw configure --section web                                               │
│                                                                                   │
│  Get your key at: https://duckduckgo.com/                                         │
│  Docs: https://docs.openclaw.ai/tools/web                                         │
│                                                                                   │
├───────────────────────────────────────────────────────────────────────────────────╯
│
◇  What now ─────────────────────────────────────────────────────────────╮
│                                                                        │
│  What now: https://openclaw.ai/showcase ("What People Are Building").  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────╯
│
└  Onboarding complete. Use the dashboard link above to control OpenClaw.

 ~ %
```

<!-- well, it does not use the key i pasted, instead, forever restarting and trying to use the unaccessible env in zshrc (you must source zshrc, not parse it.) i rm the .openclaw folder. -->

<!-- wait?! it even put something inside my zshrc without telling me? -->

```
# OpenClaw Completion
source "/home/fira/.openclaw/completions/openclaw.zsh"
```

<!-- when i try to select exa, you did not tell me i have to have an api key. -->

<!-- ia. wrong progressive disclosure. i dont need to config key if i dont use this skill. -->

```
◇  Search provider
│  Exa Search
│
◇  Exa API key
│
│
◇  Web search ──────────────────────────────────────────────────────────────╮
│                                                                           │
│  No Exa API key stored — web_search won't work until a key is available.  │
│  Get your key at: https://exa.ai/                                         │
│  Docs: https://docs.openclaw.ai/tools/web                                 │
│                                                                           │
├───────────────────────────────────────────────────────────────────────────╯
│
◇  Skills status ─────────────╮
│                             │
│  Eligible: 10               │
│  Missing requirements: 35   │
│  Unsupported on this OS: 7  │
│  Blocked by allowlist: 0    │
│                             │
├─────────────────────────────╯
│
◇  Configure skills now? (recommended)
│  Yes
│
◇  Install missing skill dependencies
│  Skip for now
│
◇  Set GOOGLE_PLACES_API_KEY for goplaces?
│  No
│
◇  Set NOTION_API_KEY for notion?
│  No
│
◇  Set ELEVENLABS_API_KEY for sag?
│  No
```

<!-- what does hatch mean? -->

<!-- no. it's not opened until i manually dashboard. -->

```
◇  Set ELEVENLABS_API_KEY for sag?
│  No
│
◇  Hooks ──────────────────────────────────────────────────────────────────╮
│                                                                          │
│  Hooks let you automate actions when agent commands are issued.          │
│  Example: Save session context to memory when you issue /new or /reset.  │
│                                                                          │
│  Learn more: https://docs.openclaw.ai/automation/hooks                   │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
◇  Enable hooks?
│  Skip for now
Config overwrite: /home/fira/.openclaw/openclaw.json (sha256 e611988f607cd06d70e4039e47a11680d1601cf0c5712ad722ed478ed560641d -> 81e7269ade1093550f72eb4ca55633039894de6190cc760a3e65e32a760b0941, backup=/home/fira/.openclaw/openclaw.json.bak)
│
◇  Gateway service runtime ────────────────────────────────────────────╮
│                                                                      │
│  QuickStart uses Node for the Gateway service (stable + supported).  │
│                                                                      │
├──────────────────────────────────────────────────────────────────────╯
│
◇  Gateway service already installed
│  Restart
│
◒  Restarting Gateway service…Restarted systemd service: openclaw-gateway.service
◇  Gateway service restarted.
│
◇
Agents: main (default)
Heartbeat interval: 30m (main)
Session store (main): /home/fira/.openclaw/agents/main/sessions/sessions.json (0 entries)
│
◇  Optional apps ────────────────────────╮
│                                        │
│  Add nodes for extra features:         │
│  - macOS app (system + notifications)  │
│  - iOS app (camera/canvas)             │
│  - Android app (camera/canvas)         │
│                                        │
├────────────────────────────────────────╯
│
◇  Control UI ─────────────────────────────────────────────────────────────────────╮
│                                                                                  │
│  Web UI: http://127.0.0.1:18789/                                                 │
│  Web UI (with token):                                                            │
│  http://127.0.0.1:18789/#token=57b9c77418d5d41ed8183610e42566c1859704f6249269e9  │
│  Gateway WS: ws://127.0.0.1:18789                                                │
│  Gateway: reachable                                                              │
│  Docs: https://docs.openclaw.ai/web/control-ui                                   │
│                                                                                  │
├──────────────────────────────────────────────────────────────────────────────────╯
│
◇  Start TUI (best option!) ─────────────────────────────────╮
│                                                            │
│  This is the defining action that makes your agent you.    │
│  Please take your time.                                    │
│  The more you tell it, the better the experience will be.  │
│  We will send: "Wake up, my friend!"                       │
│                                                            │
├────────────────────────────────────────────────────────────╯
│
◇  Token ────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                            │
│  Gateway token: shared auth for the Gateway + Control UI.                                  │
│  Stored in: $OPENCLAW_CONFIG_PATH (default: ~/.openclaw/openclaw.json) under               │
│  gateway.auth.token, or in OPENCLAW_GATEWAY_TOKEN.                                         │
│  View token: openclaw config get gateway.auth.token                                        │
│  Generate token: openclaw doctor --generate-gateway-token                                  │
│  Web UI keeps dashboard URL tokens in memory for the current tab and strips them from the  │
│  URL after load.                                                                           │
│  Open the dashboard anytime: openclaw dashboard --no-open                                  │
│  If prompted: paste the token into Control UI settings (or use the tokenized dashboard     │
│  URL).                                                                                     │
│                                                                                            │
├────────────────────────────────────────────────────────────────────────────────────────────╯
│
◇  How do you want to hatch your bot?
│  Open the Web UI
│
◇  Dashboard ready ────────────────────────────────────────────────────────────────╮
│                                                                                  │
│  Dashboard link (with token):                                                    │
│  http://127.0.0.1:18789/#token=57b9c77418d5d41ed8183610e42566c1859704f6249269e9  │
│  Opened in your browser. Keep that tab to control OpenClaw.                      │
│                                                                                  │
├──────────────────────────────────────────────────────────────────────────────────╯
│
◇  Workspace backup ────────────────────────────────────────╮
│                                                           │
│  Back up your agent workspace.                            │
│  Docs: https://docs.openclaw.ai/concepts/agent-workspace  │
│                                                           │
├───────────────────────────────────────────────────────────╯
│
◇  Security ──────────────────────────────────────────────────────╮
│                                                                 │
│  Running agents on your computer is risky — harden your setup:  │
│  https://docs.openclaw.ai/security                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────╯
│
◇  Shell completion ───────────────────────────────────────────────────────╮
│                                                                          │
│  Shell completion installed. Restart your shell or run: source ~/.zshrc  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────╯
│
◇  Web search ────────────────────────────────────────────────╮
│                                                             │
│  Provider Exa Search is selected but no API key was found.  │
│  web_search will not work until a key is added.             │
│    openclaw configure --section web                         │
│                                                             │
│  Get your key at: https://exa.ai/                           │
│  Docs: https://docs.openclaw.ai/tools/web                   │
│                                                             │
├─────────────────────────────────────────────────────────────╯
│
◇  What now ─────────────────────────────────────────────────────────────╮
│                                                                        │
│  What now: https://openclaw.ai/showcase ("What People Are Building").  │
│                                                                        │
├────────────────────────────────────────────────────────────────────────╯
│
└  Onboarding complete. Dashboard opened; keep that tab to control OpenClaw.

 ~ % openclaw dashboard

🦞 OpenClaw 2026.3.31 (213a704) — You had me at 'openclaw gateway start.'

Dashboard URL: http://127.0.0.1:18789/#token=57b9c77418d5d41ed8183610e42566c1859704f6249269e9
Copy to clipboard unavailable.
Opened in your browser. Keep that tab to control OpenClaw.
 ~ %
```

<html><head></head><body><div style="box-sizing: border-box; align-items: flex-start; gap: 10px; margin-bottom: 14px; margin-left: 4px; margin-right: 16px; display: flex; flex-direction: row-reverse; justify-content: flex-start; color: rgb(212, 212, 216); font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, sans-serif; font-size: 14px; letter-spacing: -0.14px; white-space-collapse: collapse; background-color: rgb(14, 16, 21); margin-top: 0px !important;"><div style="box-sizing: border-box; flex-direction: column; flex: 1 1 auto; align-items: flex-end; gap: 2px; max-width: min(900px, 68%); display: flex;"><div style="box-sizing: border-box; border: 1px solid rgba(0, 0, 0, 0); background: var(--accent-subtle); border-radius: var(--radius-lg); box-shadow: none; transition: background var(--duration-fast) ease-out, border-color var(--duration-fast) ease-out; overflow-wrap: break-word; width: auto; max-width: 100%; padding: 10px 14px; position: relative; min-width: 0px; animation: 0.2s ease-out 0s 1 normal none running fade-in;"><div dir="ltr" style="box-sizing: border-box; overflow-wrap: anywhere; line-height: 1.5; word-break: break-word; color: var(--chat-text);"><p style="box-sizing: border-box; margin: 0px;">hi</p></div></div><div style="box-sizing: border-box; align-items: baseline; gap: 8px; margin-top: 6px; display: flex; justify-content: flex-end;"><span style="box-sizing: border-box; color: var(--muted); font-size: 12px;">openclaw-control-ui</span><span style="box-sizing: border-box; color: var(--muted); opacity: 0.7; font-size: 11px;">1:56 AM</span><span style="box-sizing: border-box; display: inline-flex; position: relative;"><svg viewBox="0 0 24 24"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg></span></div></div></div><div style="box-sizing: border-box; align-items: flex-start; gap: 10px; margin-bottom: 14px; margin-left: 4px; margin-right: 16px; display: flex; color: rgb(212, 212, 216); font-family: Inter, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, sans-serif; font-size: 14px; letter-spacing: -0.14px; white-space-collapse: collapse; background-color: rgb(14, 16, 21);"><div style="box-sizing: border-box; border-radius: var(--radius-md); background: var(--secondary); border: 1px solid var(--border); flex-shrink: 0; align-self: flex-end; place-items: center; width: 36px; height: 36px; margin-bottom: 4px; font-size: 13px; font-weight: 600; display: grid; color: var(--muted);"><svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16l-6.4 5.2L8 14 2 9.2h7.6z"></path></svg></div><div style="box-sizing: border-box; flex-direction: column; flex: 1 1 auto; align-items: flex-start; gap: 2px; max-width: min(900px, 68%); display: flex;"><div style="box-sizing: border-box; border: 1px solid rgba(0, 0, 0, 0); background: var(--card); border-radius: var(--radius-lg); box-shadow: none; transition: background var(--duration-fast) ease-out, border-color var(--duration-fast) ease-out; overflow-wrap: break-word; width: auto; max-width: 100%; padding: 10px 14px; position: relative; min-width: 0px; animation: 0.2s ease-out 0s 1 normal none running fade-in;"><div style="box-sizing: border-box; opacity: 0; pointer-events: none; gap: 4px; transition: opacity 0.12s ease-out 0s; display: flex; position: absolute; top: 6px; right: 8px;"><span style="box-sizing: border-box; width: 14px; height: 14px; display: inline-flex;"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M15 3v18" stroke-linecap="round"></path><path d="M10 10l-3 2 3 2" stroke-linecap="round" stroke-linejoin="round"></path></svg></span><span style="box-sizing: border-box; width: 14px; height: 14px; display: inline-flex; position: relative;"><span style="box-sizing: border-box; transition: opacity 0.15s ease 0s; position: absolute; top: 0px; left: 0px;"><svg viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></span><span style="box-sizing: border-box; transition: opacity 0.15s ease 0s; position: absolute; top: 0px; left: 0px; opacity: 0;"><svg viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg></span></span></div><div dir="ltr" style="box-sizing: border-box; overflow-wrap: anywhere; line-height: 1.5; word-break: break-word; color: var(--chat-text);"><p style="box-sizing: border-box; margin: 0px;">Hey! I just came online — looks like this is a fresh start for both of us.</p><p style="box-sizing: border-box; margin: 0.75em 0px 0px;">I'm still figuring out who I am here. BOOTSTRAP.md says I should introduce myself and we should figure that out together.</p><p style="box-sizing: border-box; margin: 0.75em 0px 0px;">So... who are you? And what should I call you?</p></div></div><div style="box-sizing: border-box; align-items: baseline; gap: 8px; margin-top: 6px; display: flex;"><span style="box-sizing: border-box; color: var(--muted); font-size: 12px;">Assistant</span><span style="box-sizing: border-box; color: var(--muted); opacity: 0.7; font-size: 11px;">1:56 AM</span><span style="box-sizing: border-box; color: var(--muted); flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 4px; font-size: 11px; line-height: 1; display: inline-flex;"><span style="box-sizing: border-box; text-wrap: nowrap; align-items: center; gap: 2px; display: inline-flex;">↑11.6k</span><span style="box-sizing: border-box; text-wrap: nowrap; align-items: center; gap: 2px; display: inline-flex;">↓324</span><span style="box-sizing: border-box; text-wrap: nowrap; align-items: center; gap: 2px; display: inline-flex;">72% ctx</span><span style="box-sizing: border-box; text-wrap: nowrap; align-items: center; gap: 2px; display: inline-flex; background: var(--bg-hover,#ffffff0f); border-radius: var(--radius-sm,4px); font-family: var(--font-mono,monospace); padding: 1px 6px;">minimax-m2.7</span></span></div></div></div></body></html>

great. finally done.

i suppose there is a massive system prompt to try to let it be frnd with me.

on claude code or codex, `hi` implies a short and simple answer.

check novita console. idk how much it burns (obviously less then 0.1 usd, but it's not clear since it's not started from s1. let me test hi again.)

```
Welcome Novita	2026/03/12 00:00:00	2027/03/12 23:59:59	$0.9127 / $1.0000	Model API	valid
```

<!-- i thought i could use opencode or something to summarize this research and point out how awful is openclaw. but... maybe i wont. i dont even to prove that. it's well known, like if you challenge the ml cn gov, you are always right, yet, they wont change, since the power is never controlled, in the long emperorship in the thousand years of history of this country. -->

<!-- damn. how can i start a new chat? i clicked "chat" again... and here is a fouc! (the content jumps lower for a few frames. maybe the scrolltop is... changed?) -->

<!-- the options (select the "main"?! and "model" is also unstyled. it uses the default browser picker. hard to imagine. is it hard to do in 2026?) yet the options are confusing. you have two "main"s. one is main. the other is also main. and the first one is disabled. for the models, you have three (default, model - provider, ), whilet they are effectively the same. -->

