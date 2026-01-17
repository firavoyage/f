how could i run it

```
fira@Fira ~/opencode % ls
AGENTS.md        flake.nix  logs          README.md        SECURITY.md    STYLE_GUIDE.md
bunfig.toml      github     nix           README.zh-CN.md  specs          themes
bun.lock         infra      package.json  README.zh-TW.md  sst.config.ts  tsconfig.json
CONTRIBUTING.md  install    packages      script           sst-env.d.ts   turbo.json
flake.lock       LICENSE    patches       sdks             STATS.md
```

seems not fully open. whether readme or docs, it does not seem to be willing to build it myself using an unofficial way.

````

<p align="center">
  <a href="https://opencode.ai">
    <picture>
      <source srcset="packages/console/app/src/asset/logo-ornate-dark.svg" media="(prefers-color-scheme: dark)">
      <source srcset="packages/console/app/src/asset/logo-ornate-light.svg" media="(prefers-color-scheme: light)">
      <img src="packages/console/app/src/asset/logo-ornate-light.svg" alt="OpenCode logo">
    </picture>
  </a>
</p>
<p align="center">The open source AI coding agent.</p>
<p align="center">
  <a href="https://opencode.ai/discord"><img alt="Discord" src="https://img.shields.io/discord/1391832426048651334?style=flat-square&label=discord" /></a>
  <a href="https://www.npmjs.com/package/opencode-ai"><img alt="npm" src="https://img.shields.io/npm/v/opencode-ai?style=flat-square" /></a>
  <a href="https://github.com/anomalyco/opencode/actions/workflows/publish.yml"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/anomalyco/opencode/publish.yml?style=flat-square&branch=dev" /></a>
</p>

[![OpenCode Terminal UI](packages/web/src/assets/lander/screenshot.png)](https://opencode.ai)

---

### Installation

```bash
# YOLO
curl -fsSL https://opencode.ai/install | bash

# Package managers
npm i -g opencode-ai@latest        # or bun/pnpm/yarn
scoop bucket add extras; scoop install extras/opencode  # Windows
choco install opencode             # Windows
brew install anomalyco/tap/opencode # macOS and Linux (recommended, always up to date)
brew install opencode              # macOS and Linux (official brew formula, updated less)
paru -S opencode-bin               # Arch Linux
mise use -g opencode               # Any OS
nix run nixpkgs#opencode           # or github:anomalyco/opencode for latest dev branch
```

> [!TIP]
> Remove versions older than 0.1.x before installing.

### Desktop App (BETA)

OpenCode is also available as a desktop application. Download directly from the [releases page](https://github.com/anomalyco/opencode/releases) or [opencode.ai/download](https://opencode.ai/download).

| Platform              | Download                              |
| --------------------- | ------------------------------------- |
| macOS (Apple Silicon) | `opencode-desktop-darwin-aarch64.dmg` |
| macOS (Intel)         | `opencode-desktop-darwin-x64.dmg`     |
| Windows               | `opencode-desktop-windows-x64.exe`    |
| Linux                 | `.deb`, `.rpm`, or AppImage           |

```bash
# macOS (Homebrew)
brew install --cask opencode-desktop
```

#### Installation Directory

The install script respects the following priority order for the installation path:

1. `$OPENCODE_INSTALL_DIR` - Custom installation directory
2. `$XDG_BIN_DIR` - XDG Base Directory Specification compliant path
3. `$HOME/bin` - Standard user binary directory (if exists or can be created)
4. `$HOME/.opencode/bin` - Default fallback

```bash
# Examples
OPENCODE_INSTALL_DIR=/usr/local/bin curl -fsSL https://opencode.ai/install | bash
XDG_BIN_DIR=$HOME/.local/bin curl -fsSL https://opencode.ai/install | bash
```

### Agents

OpenCode includes two built-in agents you can switch between with the `Tab` key.

- **build** - Default, full access agent for development work
- **plan** - Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also, included is a **general** subagent for complex searches and multistep tasks.
This is used internally and can be invoked using `@general` in messages.

Learn more about [agents](https://opencode.ai/docs/agents).

### Documentation

For more info on how to configure OpenCode [**head over to our docs**](https://opencode.ai/docs).

### Contributing

If you're interested in contributing to OpenCode, please read our [contributing docs](./CONTRIBUTING.md) before submitting a pull request.

### Building on OpenCode

If you are working on a project that's related to OpenCode and is using "opencode" as a part of its name; for example, "opencode-dashboard" or "opencode-mobile", please add a note to your README to clarify that it is not built by the OpenCode team and is not affiliated with us in any way.

### FAQ

#### How is this different from Claude Code?

It's very similar to Claude Code in terms of capability. Here are the key differences:

- 100% open source
- Not coupled to any provider. Although we recommend the models we provide through [OpenCode Zen](https://opencode.ai/zen); OpenCode can be used with Claude, OpenAI, Google or even local models. As models evolve the gaps between them will close and pricing will drop so being provider-agnostic is important.
- Out of the box LSP support
- A focus on TUI. OpenCode is built by neovim users and the creators of [terminal.shop](https://terminal.shop); we are going to push the limits of what's possible in the terminal.
- A client/server architecture. This for example can allow OpenCode to run on your computer, while you can drive it remotely from a mobile app. Meaning that the TUI frontend is just one of the possible clients.

---

**Join our community** [Discord](https://discord.gg/opencode) | [X.com](https://x.com/opencode)

````

i mean, idk whether i could produce the same binary. and i think it's likely to be not. because with the official one, i could do a lot of things using the official server without login. and idk how open it is. what could i get without any official help, just with this folder itself.

```
fira@Fira ~/opencode % tree -d

.
├── github
│   └── script
├── infra
├── logs
├── nix
│   └── scripts
├── packages
│   ├── app
│   │   ├── public
│   │   └── src
│   │       ├── addons
│   │       ├── components
│   │       │   └── session
│   │       ├── context
│   │       ├── hooks
│   │       ├── pages
│   │       └── utils
│   ├── console
│   │   ├── app
│   │   │   ├── public
│   │   │   │   └── email -> ../../mail/emails/templates/static
│   │   │   ├── script
│   │   │   └── src
│   │   │       ├── asset
│   │   │       │   ├── black
│   │   │       │   ├── brand
│   │   │       │   └── lander
│   │   │       ├── component
│   │   │       ├── context
│   │   │       ├── lib
│   │   │       ├── routes
│   │   │       │   ├── api
│   │   │       │   ├── auth
│   │   │       │   ├── bench
│   │   │       │   ├── black
│   │   │       │   │   └── subscribe
│   │   │       │   ├── brand
│   │   │       │   ├── changelog
│   │   │       │   ├── debug
│   │   │       │   ├── docs
│   │   │       │   ├── download
│   │   │       │   ├── enterprise
│   │   │       │   ├── legal
│   │   │       │   │   ├── privacy-policy
│   │   │       │   │   └── terms-of-service
│   │   │       │   ├── s
│   │   │       │   ├── stripe
│   │   │       │   ├── t
│   │   │       │   ├── workspace
│   │   │       │   │   └── [id]
│   │   │       │   │       ├── billing
│   │   │       │   │       ├── keys
│   │   │       │   │       ├── members
│   │   │       │   │       └── settings
│   │   │       │   └── zen
│   │   │       │       ├── util
│   │   │       │       │   └── provider
│   │   │       │       └── v1
│   │   │       │           ├── chat
│   │   │       │           └── models
│   │   │       └── style
│   │   │           ├── component
│   │   │           └── token
│   │   ├── core
│   │   │   ├── migrations
│   │   │   │   └── meta
│   │   │   ├── script
│   │   │   └── src
│   │   │       ├── drizzle
│   │   │       ├── schema
│   │   │       └── util
│   │   ├── function
│   │   │   └── src
│   │   ├── mail
│   │   │   └── emails
│   │   │       └── templates
│   │   │           └── static
│   │   └── resource
│   ├── desktop
│   │   ├── scripts
│   │   ├── src
│   │   └── src-tauri
│   │       ├── assets
│   │       ├── capabilities
│   │       ├── icons
│   │       │   ├── dev
│   │       │   │   ├── android
│   │       │   │   │   ├── mipmap-anydpi-v26
│   │       │   │   │   ├── mipmap-hdpi
│   │       │   │   │   ├── mipmap-mdpi
│   │       │   │   │   ├── mipmap-xhdpi
│   │       │   │   │   ├── mipmap-xxhdpi
│   │       │   │   │   ├── mipmap-xxxhdpi
│   │       │   │   │   └── values
│   │       │   │   └── ios
│   │       │   └── prod
│   │       │       ├── android
│   │       │       │   ├── mipmap-anydpi-v26
│   │       │       │   ├── mipmap-hdpi
│   │       │       │   ├── mipmap-mdpi
│   │       │       │   ├── mipmap-xhdpi
│   │       │       │   ├── mipmap-xxhdpi
│   │       │       │   ├── mipmap-xxxhdpi
│   │       │       │   └── values
│   │       │       └── ios
│   │       ├── release
│   │       └── src
│   ├── docs
│   │   ├── ai-tools
│   │   ├── essentials
│   │   ├── images
│   │   ├── logo
│   │   └── snippets
│   ├── enterprise
│   │   ├── public
│   │   ├── script
│   │   ├── src
│   │   │   ├── core
│   │   │   └── routes
│   │   │       ├── api
│   │   │       └── share
│   │   └── test
│   │       └── core
│   ├── extensions
│   │   └── zed
│   │       └── icons
│   ├── function
│   │   └── src
│   ├── identity
│   ├── opencode
│   │   ├── bin
│   │   ├── script
│   │   ├── src
│   │   │   ├── acp
│   │   │   ├── agent
│   │   │   │   └── prompt
│   │   │   ├── auth
│   │   │   ├── bun
│   │   │   ├── bus
│   │   │   ├── cli
│   │   │   │   └── cmd
│   │   │   │       ├── debug
│   │   │   │       └── tui
│   │   │   │           ├── component
│   │   │   │           │   └── prompt
│   │   │   │           ├── context
│   │   │   │           │   └── theme
│   │   │   │           ├── routes
│   │   │   │           │   └── session
│   │   │   │           ├── ui
│   │   │   │           └── util
│   │   │   ├── command
│   │   │   │   └── template
│   │   │   ├── config
│   │   │   ├── env
│   │   │   ├── file
│   │   │   ├── flag
│   │   │   ├── format
│   │   │   ├── global
│   │   │   ├── id
│   │   │   ├── ide
│   │   │   ├── installation
│   │   │   ├── lsp
│   │   │   ├── mcp
│   │   │   ├── patch
│   │   │   ├── permission
│   │   │   ├── plugin
│   │   │   ├── project
│   │   │   ├── provider
│   │   │   │   └── sdk
│   │   │   │       └── openai-compatible
│   │   │   │           └── src
│   │   │   │               └── responses
│   │   │   │                   └── tool
│   │   │   ├── pty
│   │   │   ├── question
│   │   │   ├── server
│   │   │   │   └── routes
│   │   │   ├── session
│   │   │   │   └── prompt
│   │   │   ├── share
│   │   │   ├── shell
│   │   │   ├── skill
│   │   │   ├── snapshot
│   │   │   ├── storage
│   │   │   ├── tool
│   │   │   ├── util
│   │   │   └── worktree
│   │   └── test
│   │       ├── agent
│   │       ├── cli
│   │       │   └── tui
│   │       ├── config
│   │       │   └── fixtures
│   │       ├── file
│   │       ├── fixture
│   │       │   └── lsp
│   │       ├── ide
│   │       ├── lsp
│   │       ├── mcp
│   │       ├── patch
│   │       ├── permission
│   │       ├── plugin
│   │       ├── project
│   │       ├── provider
│   │       ├── question
│   │       ├── server
│   │       ├── session
│   │       ├── skill
│   │       ├── snapshot
│   │       ├── tool
│   │       │   ├── fixtures
│   │       │   └── __snapshots__
│   │       └── util
│   ├── plugin
│   │   ├── script
│   │   └── src
│   ├── script
│   │   └── src
│   ├── sdk
│   │   └── js
│   │       ├── example
│   │       ├── script
│   │       └── src
│   │           ├── gen
│   │           │   ├── client
│   │           │   └── core
│   │           └── v2
│   │               └── gen
│   │                   ├── client
│   │                   └── core
│   ├── slack
│   │   └── src
│   ├── ui
│   │   ├── script
│   │   └── src
│   │       ├── assets
│   │       │   ├── audio
│   │       │   ├── favicon
│   │       │   ├── fonts
│   │       │   ├── icons
│   │       │   │   ├── file-types
│   │       │   │   └── provider
│   │       │   └── images
│   │       ├── components
│   │       │   ├── file-icons
│   │       │   └── provider-icons
│   │       ├── context
│   │       ├── hooks
│   │       ├── pierre
│   │       ├── styles
│   │       │   └── tailwind
│   │       └── theme
│   │           └── themes
│   ├── util
│   │   └── src
│   └── web
│       ├── public
│       └── src
│           ├── assets
│           │   ├── lander
│           │   └── web
│           ├── components
│           │   ├── icons
│           │   └── share
│           ├── content
│           │   └── docs
│           ├── pages
│           │   └── s
│           ├── styles
│           └── types
├── patches
├── script
├── sdks
│   └── vscode
│       ├── images
│       ├── script
│       └── src
├── specs
└── themes

281 directories
```

---

find some real projects built completely with claude code.

find some vids. see claude code in regular work. not presentation. not marketing. not teaching. just doing some tasks. dont show youtube video preview. (just give me the links)

---

I want to leverage llms a bit more, they are free and somewhat useful. About humility, I want it to be wise and graceful, which implies simplicity and effectiveness. I want it to feel me.

---

im gonna create an ai agent app called humility.

at its heart, it's about automation. user inputs, instead of outputing one answer, a planner would continuously figure out the next move and play it.

now let's test the feasiblity in a playground. no need to make it future proof or elegant. i just wanna see it works.

i want to use groqcloud. now tell me how to use its api first.

---

### The Feeling

- What bothered me
- What felt missing
- What kept returning to my thoughts

claude code is not opensource, which means you could not even fix or customize a small thing easily.

opencode is not polished. so many bugs and quirks.

### The Moment

- When I noticed it
- Where I was (context matters)
- What triggered the realization

### The Curiosity

- “What if this were easier?”
- “Why does this still feel unsolved?”
- “What would I try if I wasn’t afraid?”

### The Desire

- What I wish existed
- What I wish someone had built for me
- What kind of experience I want to create

### The Meaning

- Why this matters to me personally
- What value I care about protecting
- What feels worth spending time on

### The Direction (Very Soft)

- Who this might help
- What change I hope it creates
- What _kind_ of thing this wants to become
