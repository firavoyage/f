# how to export thread of pi agent on debian

To export a conversation thread in the **Pi coding agent** on Debian, run the built-in **`/export`** slash command inside an active session or use the **`pi --export`** flag from your terminal. Pi works identically on Debian and other Linux distributions, saving your thread as a self-contained HTML or JSONL file. [](https://www.vincentbruijn.nl/articles/session-export/)

### Method 1: Export From an Active Session

If you are already inside the Pi terminal interface, you can save or upload your current thread directly. [](https://pi.dev/docs/latest/usage)

* **Save locally as HTML or JSONL.** Type `/export` in the Pi prompt to write the current session to disk. This creates a single portable file containing your prompts, responses, and tool calls. [](https://pi.dev/docs/latest/sessions)
* **Upload and get a shareable link.** Type `/share` to upload the session and generate a private viewer link. By default, Pi uploads to a private GitHub gist or a Radius artifact depending on your authentication setup. [](https://pi.dev/docs/latest/sessions)

### Method 2: Export via the Debian Command Line

You can convert any previously saved session file to HTML directly from your bash or zsh shell without opening the interactive UI. [](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/cli.md)

1. **Locate your session file.** Pi automatically stores all past threads as `.jsonl` files under `~/.pi/agent/sessions/<encoded-cwd>/`. You can list your recent sessions on Debian with:  
bash  
```  
ls -lt ~/.pi/agent/sessions/*/*.jsonl  
```  

2. **Run the CLI export command.** Pass the `.jsonl` path to `pi --export`:  
bash  
```  
pi --export ~/.pi/agent/sessions/--path--/timestamp_uuid.jsonl output.html  
```  
  
If you omit `output.html`, Pi automatically derives the output filename in your current directory and exits. [](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/session-format.md)

### Method 3: Export as Clean Markdown (Optional Package)

If you prefer a clean Markdown transcript without bulky tool call logs, install the official [pi-md-export](https://pi.dev/packages/pi-md-export?page=33) extension: [](https://pi.dev/packages/pi-md-export?page=33)

* **Install the package.** Run `pi install npm:pi-md-export` in your terminal.
* **Export the current branch.** Type `/md` inside a session to export just your active `/tree` branch to Markdown.
* **Export the full thread.** Type `/md all` to export the entire session file, or `/md tc` if you want to include tool calls. [](https://pi.dev/packages/pi-md-export?page=33)

_Note: Always review exported files before sharing them publicly, as they can include local file contents, shell command outputs, and environment details._ [](https://pi.dev/docs/latest/sessions)

Are you trying to **share this thread** with someone else, or **back up** your Pi sessions and configuration to another machine? I can walk you through the quickest setup for your goal.

* [](https://pi.dev/packages/pi-md-export?page=33)  
Pi.dev  
pi-md-export · Packages  
September 9, 2026 — Install pi-md-export from npm and Pi will load the resources declared by the package manifest. Pi packages can execute code and in...
* [](https://github.com/adobe/pi-session-search)  
GitHub  
GitHub - adobe/pi-session-search: A pi-coding-agent extension that lets ...  
pi stores every session as a JSONL file under \~/. pi/agent/sessions//\_.
* [](https://pi.dev/docs/latest/usage)  
Pi.dev  
Use Pi in the terminal · Documentation  
Pi saves sessions automatically unless session persistence is disabled. /new starts a new session. /resume opens another saved ses...

Show all

# what does pi md export output look like

The `pi-md-export` extension for the Pi coding agent generates a **clean, conversation-focused Markdown transcript** of your session. By default, it captures only the user prompts and final assistant responses from your active `/tree` branch. [](https://pi.dev/packages/pi-md-export?page=33)

### Default Output Structure

When you run `/md` without extra flags, the extension strips away background noise like internal reasoning and file reads. It produces a readable document structured into clear conversational turns: [](https://pi.dev/packages/pi-md-export?page=33)

* **Turn-by-Turn Dialogue.** Each turn pairs your user message with the assistant's text response.
* **Filtered Scope.** Only the active branch in your session tree is included.
* **Delivery Destination.** You can copy the output directly to your clipboard or save it as a `.md` file under `~/.pi/agent/pi-sessions-extracted/`. [](https://pi.dev/packages/pi-md-export?page=33)

### Optional Details You Can Include

You can customize what appears in the Markdown file by passing flags to the `/md` command: [](https://pi.dev/packages/pi-md-export?page=33)

* **Thinking Blocks (`/md t`).** Adds the model's internal reasoning steps before its final answers.
* **Tool Calls (`/md tc`).** Includes both tool invocations and their returned results. You can filter specific tools using `-<toolname>` to exclude them or `+<toolname>` to whitelist only what you want.
* **Full Session History (`/md all`).** Exports the entire session file rather than just the current branch.
* **Turn Limits (`/md <N>`).** Restricts the output to only the last `N` user-assistant turns. [](https://pi.dev/packages/pi-md-export?page=33)

### Example Layout

With default settings (`/md`), the exported Markdown follows a simple, readable format:

markdown

```
## User
How do I export my current session to Markdown?

## Assistant
You can install the `pi-md-export` package and run `/md` in your session. By default, it exports a clean transcript of your current branch without tool calls or thinking blocks.

```



If you run `/md tc t`, the output expands to show collapsible or sectioned blocks for the agent's thinking process and the exact bash commands or file edits executed during each turn. _(Note: Pi's built-in `/export` command outputs a styled HTML file rather than raw Markdown, which is why the [pi-md-export](https://pi.dev/packages/pi-md-export?page=33) package is used for plain Markdown transcripts.)_ [](https://github.com/earendil-works/pi/issues/5136)

Would you like to see the exact **command combinations** for filtering specific tools, or are you looking for a different Pi export extension like **pi-session-exporter**?

* [](https://pi.dev/packages/pi-md-export?page=33)  
Pi.dev  
pi-md-export · Packages · Pi  
September 9, 2026 — Export your current Pi session to a readable Markdown transcript. The command can export either the current /tree branch it can li...
* [](https://github.com/earendil-works/pi/issues/5136)  
GitHub  
export help and error messages claim .md support but it's not ...  
May 28, 2026 — pi's behavior differs from hand on .md export. Silently exports HTML content into a .md file without any warning: The correct fix ...

# what do ppl say on pi agent

Developers widely praise the **Pi coding agent** (often compared to Neovim for its "build-your-own" philosophy) for its speed, minimalism, and extreme extensibility. However, its barebones defaults and lack of out-of-the-box safety prompts draw mixed reactions depending on a developer's workflow. [](https://daily.dev/posts/pi-coding-agent-is-now-my-absolute-favorite--yxzsptoyy)

### What People Love

* **Extreme minimalism and low token bloat.** Pi ships with only four core tools (`read`, `write`, `edit`, and `bash`) and a system prompt under 1,000 tokens. Users on [Hacker News](https://news.ycombinator.com/item?id=48847407) note that keeping the context clean reduces token costs and improves LLM reasoning. [](https://news.ycombinator.com/item?id=48847407)
* **Self-extending architecture.** Because Pi is built in TypeScript and exposes its plain-text system prompts, developers love that they can ask Pi to write its own custom tools, slash commands, or workflow rules and load them immediately with `/reload`. [](https://medium.com/@theDrewDag/you-should-start-using-pi-agent-now-8964d19a6237)
* **Transparent control.** Reviewers on blogs like [birkey.co](https://www.birkey.co/2026-04-19-why-i-love-pi.html) highlight that Pi has no hidden system prompts or rigid settings files, allowing teams to treat agent behavior like software they own. [](https://www.youtube.com/watch?v=8PJepXx0Jd0)
* **Broad model flexibility.** Users appreciate that Pi is not tied to a single vendor subscription, letting them switch between API keys or existing plans for Claude, ChatGPT/Codex, Gemini, GitHub Copilot, and local models. [](https://www.youtube.com/watch?v=wVe3XOnio7M)

### Common Criticisms & Trade-offs

* **Zero safety prompts by default.** Out of the box, Pi runs with your full user account permissions and executes shell commands without asking for confirmation. Reviewers at [eesel.ai](https://www.eesel.ai/blog/pi-coding-agent) and [daily.dev](https://daily.dev/posts/pi-coding-agent-is-now-my-absolute-favorite--yxzsptoyy) warn that users must manually run it inside a container or install a separate permission extension to prevent accidental damage.
* **Requires setup for standard features.** Unlike heavier competitors such as Claude Code or OpenCode, vanilla Pi omits built-in plan modes, to-do lists, and sub-agents. Some developers find setting up packages tedious, leading to the rise of pre-configured "distros" like Oh My Pi (`oh-my-pi`) and LazyPi (`lazypi.org`).
* **Debate over instruction following.** On [r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1vgfn4a/pi%5Fagent%5Fis%5Fso%5Fexact%5Flook%5Fwhat%5Fi%5Fasked%5Fit%5Fand%5Fits/), some users praise Pi for its exact adherence to strict formatting rules, while others argue this precision comes from the underlying frontier models rather than Pi's harness itself.
* **Evolving MCP stance.** Pi originally gained fame for rejecting the Model Context Protocol (MCP) to avoid context clutter, though the October 2026 release of **Pi 1.0** introduced sandboxed MCP support via a scripting tool called Codemode. [](https://www.reddit.com/r/PiCodingAgent/comments/1vgfn4a/pi%5Fagent%5Fis%5Fso%5Fexact%5Flook%5Fwhat%5Fi%5Fasked%5Fit%5Fand%5Fits/)

If you're considering trying it out, I can compare **Pi** directly against **Claude Code** or **OpenCode**, or walk you through popular **starter extensions** like `oh-my-pi`. Which would be more helpful?

* [](https://www.youtube.com/watch?v=wVe3XOnio7M)  
YouTube·Maximilian Schwarzmüller  
The "PI" (coding) agent is so much more than just another ...  
Mar 12, 2026 — There are many AI (coding) agents. Claude Code, Codex ... and many more. They're all great. And they all can actually do more than...  
15:25
* [](https://news.ycombinator.com/item?id=48847407)  
Hacker News  
Opinionated and easy Pi.dev configuration | Hacker News  
July 7, 2026 — OpenCode offers an alternative out-of-the-box solution, though some users note high memory usage or TUI preferences.
* [](https://daily.dev/posts/pi-coding-agent-is-now-my-absolute-favorite--yxzsptoyy)  
daily.dev·NeuralNine  
Pi Coding Agent is now my absolute favorite...  
July 20, 2026 — Pi is a minimal, unopinionated agent harness with no built-in features beyond a basic chat interface that edits files, requiring e...  
[13:20](https://daily.dev/posts/pi-coding-agent-is-now-my-absolute-favorite--yxzsptoyy)

Show all

# what do ppl say on deepseek harness

Developers and AI enthusiasts generally view **DeepSeek Harness (DSH)** as a major breakthrough in open-source agent design, praising its extreme customizability and low cost while noting its early-stage roughness. Released by [DeepSeek](https://www.deepseek.com/en/harness/) in August 2026 under an MIT license, the framework quickly gained massive traction on GitHub for breaking away from rigid agent structures. [](https://www.youtube.com/watch?v=NPO2CwHnfmI)

### What People Love

* **The "Everything is a Plugin" Architecture.** Reviewers on [Substack](https://rakiabensassi.substack.com/p/deepseek-harness-explained) and [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions/1023) highlight that unlike traditional frameworks with a fixed core, DSH treats the model, tools, memory, UI, and even the agent loop itself as swappable plugins built on the Cordis system. [](https://www.youtube.com/watch?v=9F9x3MufdMQ)
* **Self-Updating "Creator Mode."** Tech creators on [YouTube](https://www.youtube.com/watch?v=yvRLyJk%5FVTU) are heavily impressed by Creator Mode, which lets users describe a new tool in plain text so the agent can write, install, and verify the plugin on the fly without restarting or recompiling. [](https://www.youtube.com/watch?v=Hpw4fAHlHDw&t=281)
* **High Cost-Efficiency and Speed.** Benchmark breakdowns shared on [YouTube](https://www.youtube.com/watch?v=OrcsMi2-IcM) show DSH matching Claude Code's task pass rate (\~63.3%) at a fraction of the cost ($3.28 vs. $18.34 per task), aided by aggressive context caching that hits up to 99%–100% cache rates. [](https://www.youtube.com/watch?v=q%5FGku%5FLIe3A&t=113)
* **Multi-Agent Orchestration.** Analysts at [MindStudio](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding) note that DSH acts as a meta-framework capable of calling competing coding agents like Claude Code or OpenAI Codex as sub-agents within a single workflow. [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)
* **Broad Model Support.** Users on [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/comments/1xhq8bb/deepseek%5Fharness/) appreciate that it is not locked to DeepSeek models, allowing developers to plug in OpenRouter, Mistral, Hugging Face, or local models. [](https://www.reddit.com/r/LocalLLaMA/comments/1xhq8bb/deepseek%5Fharness/)

### Common Criticisms & Warnings

* **Developer Preview Rough Edges.** Because the software is still in public developer preview, reviewers warn of frequent breaking changes, unstable APIs, and bugs as core plugins evolve.
* **Security and Isolation Risks.** Guides on [DEV Community](https://dev.to/aditi%5Fgupta%5F8d81622a592aa/deepseek-harness-explained-what-it-is-when-to-use-it-and-when-not-to-3la3) caution that letting an AI write and execute its own plugins with terminal, network, and file access requires strict sandboxing and manual approval prompts.
* **Overkill for Simple Tasks.** Developers point out that DSH is best suited for complex, experimental agent workflows rather than simple scripts where a standard API call is faster and more stable. [](https://www.youtube.com/watch?v=yvRLyJk%5FVTU&t=47)

If you're thinking about trying it out, let me know:

* **Your primary use case** (coding, research, or custom automation)
* Whether you plan to run **cloud APIs** or **local models**

I can walk you through the **setup options** or recommend **plugins to start with**.

* [](https://www.youtube.com/watch?v=q%5FGku%5FLIe3A&t=113)  
YouTube·Mehul Mohan  
NEW DeepSeek Harness Is FUN!  
Oct 6, 2026 — NEW DeepSeek Harness Is FUN! because that's like an important. thing other thing is that this font size also is not accepting like...  
11m
* [](https://www.youtube.com/watch?v=9F9x3MufdMQ)  
YouTube·Hugging Face  
DeepSeek Harness (DSH) EXPLAINED | Everything Is a Plugin  
Nov 9, 2026 — DeepSeek Harness (DSH) EXPLAINED | Everything Is a Plugin good morning everyone how's it going today uh today we're going to be ta...  
35:39
* [](https://www.youtube.com/watch?v=Hpw4fAHlHDw&t=281)  
YouTube·Stephen G. Pope  
NEW Deepseek Agent Harness EXPLAINED (deep dive)  
Aug 20, 2026 — NEW Deepseek Agent Harness EXPLAINED (deep dive) basically if you're enjoying this video make sure to like and subscribe it tells ...  
7m

Show all

# is deepseek harness opinionated

**No, DeepSeek Harness (DSH) is deliberately unopinionated by design**, functioning as a modular, "everything-is-a-plugin" runtime rather than a rigid coding workflow. Unlike closed or vendor-fixed agents such as Claude Code or Codex, DSH allows you to swap out models, tools, and even the underlying agent loop itself. [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)

### Why It Is Considered Unopinionated

* **Decomposable Plugin Architecture.** Built on the Cordis framework, almost every part of DSH—including model adapters, session logs, memory, and the user interface—is an interchangeable plugin. [](https://www.instagram.com/reel/DccZW7mIq3T/)
* **Model Agnostic.** While made by DeepSeek, the runtime uses a standardized adapter contract that lets you plug in any underlying LLM provider or open-weight model. [](https://deepinfra.com/blog/deepseek-harness-review)
* **Sub-Agent Orchestration.** Instead of forcing you to abandon other coding tools, DSH supports calling rival agents like Claude Code and Codex as sub-agents, and even includes hook bridges to read existing Claude Code `hooks.json` files. [](https://deepinfra.com/blog/deepseek-harness-review)
* **Conservative Base Defaults.** The upstream repository ships with a minimal, conservative reference composition, leaving workflow enforcement to external distributions. [](https://github.com/deepseek-ai/deepseek-harness/discussions/3113)

### Where Opinions Are Introduced

While the core harness stays out of your way, you will encounter opinionated layers depending on how you deploy it:

* **Architectural Philosophy.** DSH takes a strong structural stance on _how_ plugins interact, requiring components to follow Cordis lifecycle management and standardized streaming/provenance contracts.
* **Community Distributions.** Because the core framework is so barebones, opinionated wrappers have emerged on top of it—most notably **[oh-my-dsh (OMD)](https://github.com/deepseek-ai/deepseek-harness/discussions/3113)**, a curated bundle that adds pre-configured workflows and governance while still letting you override defaults via YAML patches.
* **SuperAgent Architecture.** When using DeepSeek's SuperAgent setup, the system enforces a specific two-layer "router and workers" design driven by event triggers rather than simple single-session prompts. [](https://www.youtube.com/watch?v=ZIcvDE0HoWE&t=37)

If you are deciding between **DeepSeek Harness** and a more pre-configured agent like **Claude Code** or **oh-my-dsh**, let me know your preferred **workflow** or **model setup** and I can help you compare them.

* [](https://www.instagram.com/reel/DccZW7mIq3T/)  
Instagram·Dianasaur 🦖 | Startups, Tech, and AI  
Everyone is watching which coding agent wins. But DeepSeek ...  
Aug 24, 2026 — DeepSeek Harness is an open-source agent runtime where every capability, such as tools, session logs, memory, and the agent loop, ...  
[1:55](https://www.instagram.com/reel/DccZW7mIq3T/)
* [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)  
MindStudio  
What Is DeepSeek Harness? The Plug  
August 14, 2026 — Claude Code and Codex are both opinionated, largely closed coding agents: you pick the model, you pick the workflow, and the harne...
* [](https://www.youtube.com/watch?v=ZIcvDE0HoWE&t=37)  
YouTube·AICodeKing  
I Tried Deepseek's New SuperAgent Harness... Is IT ANY GOOD?  
Nov 2, 2026 — The Deepseek SuperAgent Harness design addresses the challenge of managing multiple AI agent sessions by introducing a two-layer a...  
6m

Show all

# is deepseek harness opinionated at its core

**No, DeepSeek Harness (DSH) is deliberately unopinionated about workflows and models, though it is strongly opinionated about its plugin-based architecture** **.** [](https://www.reddit.com/r/LocalLLaMA/comments/1vw10m3/deepseek%5Fharness%5Fis%5Finsanely%5Fgood/)

Instead of locking you into a single fixed agent loop like Claude Code or Codex, DSH acts as a blank-slate runtime built on the Cordis plugin framework. Every part of the system is treated as a swappable component rather than a hardcoded behavior. [](https://www.youtube.com/watch?v=9F9x3MufdMQ)

### Where DeepSeek Harness Is Unopinionated

* **No Privileged Core.** The model adapter, tool registry, session log, storage, and even the main agent loop are all standalone plugins. You can swap out any piece via configuration files without forking the codebase. [](https://zentor.ai/blog/what-is-deepseek-harness)
* **Model and Agent Agnostic.** Despite the name, DSH is not tied to DeepSeek models. It supports external providers like Mistral and Hugging Face, and can even orchestrate Claude Code or Codex as sub-agents. [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)
* **Conservative Reference Defaults.** Upstream DSH ships with a neutral, minimal baseline. Community projects like [oh-my-dsh](https://github.com/deepseek-ai/deepseek-harness/discussions/3113) exist specifically to add an "opinionated" layer of curated defaults on top of it. [](https://github.com/deepseek-ai/deepseek-harness/discussions/3113)

### Where DeepSeek Harness Is Opinionated

* **"Everything Is a Plugin" Architecture.** You cannot bypass its modular structure. Adopting DSH means buying into the Cordis dependency-injection model, profiles, and YAML patch configurations. [](https://genaiassembling.substack.com/p/deepseek-harness-the-product-that)
* **Local-First Web & Headless Runtime.** Rather than shipping an interactive terminal CLI like many competing coding agents, DSH defaults to a locally hosted Web UI (on port 3080) or a one-shot headless runner. [](https://zentor.ai/blog/what-is-deepseek-harness)
* **Self-Modifying Capabilities.** Through its "Creator Mode," the framework is explicitly designed around the idea that an agent should write, install, and verify its own plugins on the fly. [](https://www.reddit.com/r/AISEOInsider/comments/1xmv52g/deepseek%5Fharness%5Fcreator%5Fmode%5Fis%5Factually%5Finsane/)

Are you evaluating **DeepSeek Harness** for a specific use case (such as **custom agent orchestration**, **local coding workflows**, or **enterprise deployment**)? Let me know and I can break down how its **plugin setup** and **security sandboxing** fit your needs.

* [](https://www.youtube.com/watch?v=9F9x3MufdMQ)  
YouTube·Hugging Face  
DeepSeek Harness (DSH) EXPLAINED | Everything Is a Plugin  
Nov 9, 2026 — The DeepSeek Harness (DSH) is a general agent harness primarily designed for coding agents, LLM providers can be added or switched...  
35:39
* [](https://zentor.ai/blog/what-is-deepseek-harness)  
zentor.ai  
What Is DeepSeek Harness (DSH)? | Zentor Blog  
Aug 14, 2026 — Architecturally, less than the name implies. packages/llm holds a documented adapter contract that every adapter must implement, t...
* [](https://www.mindstudio.ai/blog/deepseek-harness-agentic-coding)  
MindStudio  
What Is DeepSeek Harness? The Plug  
August 14, 2026 — Claude Code and Codex are both opinionated, largely closed coding agents: you pick the model, you pick the workflow, and the harne...

Show all

# what is not plugin in deepseek harness

In DeepSeek Harness (DSH), the core design philosophy is that **"everything is a plugin,"** meaning there is **no privileged or locked agent core**. Components that are hardcoded in traditional AI frameworks—such as the agent loop, model adapters, tool registry, system prompts, and session logs—are all implemented as swappable plugins. [](https://www.youtube.com/watch?v=9F9x3MufdMQ&t=661)

However, to make this modular system work, a few foundational layers sit beneath the plugins and are **not plugins themselves**:

* **The Cordis Runtime & Framework.** DSH is built on top of Cordis, a composability framework developed with researchers at Beijing University. Cordis acts as the underlying engine that manages plugin lifecycles, dependency resolution (spatial composability), and clean loading/unloading without leaving leftover state (temporal composability). [](https://www.youtube.com/watch?v=OrcsMi2-IcM&t=344)
* **Configuration & Patch Layers.** The system uses external declarative files—such as `cordis.patch` YAML profiles, bundles, home-level patches, and CLI flags—to define the plugin tree. These config layers dictate which plugins are active, override default settings, and bind components together. [](https://medium.com/@chewloongnian/deepseek-harness-ships-4-modes-that-share-exactly-1-plugin-d46493e2f841)
* **The Host Environment & CLI Entrypoint.** The underlying Node.js/Python runtime environment, native OS binaries, and the base `dsh` command-line loader bootstrap the Cordis kernel before any UI, terminal, or web workspace plugin can run. [](https://github.com/deepseek-ai/deepseek-harness)
* **Skills (Slash Commands).** Within the user workflow, **skills** are distinct from plugins. Plugins are architectural modules that add capabilities or services, whereas skills are step-by-step prompt workflows (triggered with `/` in the chat box) that plugins can register or expose. [](https://www.youtube.com/watch?v=Szq0P5vEoAs&t=564)

Are you looking to **build a custom plugin**, **swap out a core component** like the agent loop, or **configure a `cordis.patch` file**? Let me know what you're working on and I can share the exact setup or config structure.

* [](https://www.youtube.com/watch?v=9F9x3MufdMQ&t=661)  
YouTube·Hugging Face  
DeepSeek Harness (DSH) EXPLAINED | Everything Is a Plugin  
Nov 9, 2026 — The Cordis architecture makes every component a plugin, including the agent loop, allowing users to swap it with their own custom ...  
2m
* [](https://www.youtube.com/watch?v=OrcsMi2-IcM&t=344)  
YouTube·Sam Witteveen  
NEW DeepSeek Harness - Super Agent!  
Nov 3, 2026 — Running DSH involves a tree of plugins composed from layers: profiles (patching a \`cordis.patch\` YAML file), home-level patches, a...  
4m
* [](https://www.youtube.com/watch?v=9h07pk0CjoU)  
YouTube·Julian Goldie SEO  
DeepSeek Harness Just Hit 35000 AI Plugins?!  
Nov 11, 2026 — everything is a plugin. and they mean everything most AI tools have a fixed core. you can add a few extras on top but the main eng...  
9:53

Show all

# when will deepseek harness be officially stable

DeepSeek has **not announced an official target date** for a stable `v1.0` release of [DeepSeek Harness (DSH)](https://www.deepseek.com/en/harness/). The project remains in active public preview, with rapid, frequent updates still introducing breaking changes to plugin contracts and configurations. [](https://github.com/deepseek-ai/deepseek-harness/releases)

### Current Release Status

* **Active Preview Phase.** DeepSeek first launched the open-source framework as a `v0.1` Developer Preview on August 13, 2026.
* **Latest Version.** As of November 2026, development has reached the `0.2.x` branch, with **`dsh-v0.2.2-rc.3`** published on November 13, 2026.
* **Ongoing Breaking Changes.** Release notes on the [DeepSeek Harness GitHub Releases](https://github.com/deepseek-ai/deepseek-harness/releases) page show that minor updates still require custom plugins and SDK integrations to migrate when internal APIs, error codes, or default tools change. [](https://github.com/deepseek-ai/deepseek-harness/releases)

### What to Keep in Mind Before Using It

* **Pin Your Versions.** Because release candidates and minor versions change plugin interfaces quickly, developers should lock specific version tags rather than auto-updating production workflows. [](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/)
* **Security Precautions.** DeepSeek notes that the preview lacks a formal third-party security audit. Running the harness inside a disposable virtual machine or container is recommended when testing untrusted plugins. [](https://www.youtube.com/watch?v=6dTwJmAfy4Y&t=12)

Are you looking to **build custom plugins** on DeepSeek Harness or **deploy it for a specific coding workflow**? Let me know your setup, and I can share tips on stabilizing your configuration against breaking updates.

* [](https://github.com/deepseek-ai/deepseek-harness/releases)  
GitHub  
Releases · deepseek-ai/deepseek-harness  
November 13, 2026 — Fix an issue that could cause Windows desktop in-app updates to fail and prevent the app from reopening automatically.
* [](https://deepseek-code.com/)  
deepseek-code.com  
DeepSeek Harness  
Harness is now an official open-source agent framework. Released as a developer preview, it provides a plugin-first runtime for mo...
* [](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/)  
Ofox AI  
DeepSeek Harness (dsh): Version, Updates, Stability (2026)  
August 17, 2026 — DeepSeek Harness (dsh): Version, Updates, Stability (2026) Development restarted 2026-08-24 and GitHub now tags releases npm has n...

Show all

# when is deepseek harness expected to be officially stable

**DeepSeek has not announced an official release date for a stable version of DeepSeek Harness (** **`dsh`).** The framework remains in active **Developer Preview** and ships exclusively as pre-releases. 

### Current Release Status

* **Latest Version.** As of November 2026, the latest tagged release on the [DeepSeek Harness GitHub Releases](https://github.com/deepseek-ai/deepseek-harness/releases) page is `dsh-v0.2.2-rc.3` (published November 13, 2026). [](https://github.com/deepseek-ai/deepseek-harness/releases)
* **Development Pace.** Since debuting as `v0.1` on August 13, 2026, the team has shipped frequent `0.1.x` and `0.2.x` release candidates (`rc`) and `alpha` builds rather than cutting a `1.0` milestone. [](https://x.com/deepseek%5Fai/status/2087887408440164663)
* **Update Channels.** Recent desktop builds introduced a setting allowing users to toggle between "stable" and "development" update channels, though the overall project itself is still labeled a preview on the [DeepSeek Harness Official Page](https://www.deepseek.com/en/harness/).

### What to Expect Before General Availability

* **API and Plugin Changes.** The project documentation and [Ofox AI Stability Analysis](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/) note that plugin contracts, sandbox extensions, and internal APIs continue to undergo compatibility-breaking changes between release candidates. [](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/)
* **Pinning Versions.** If you are building custom plugins or running automated workflows on `dsh`, developers recommend pinning specific version tags rather than tracking the latest branch automatically. [](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/)

Would you like to check the **breaking changes** in the latest `v0.2.2` release candidates, or see how to **pin a specific version** for local development?

* [](https://www.eesel.ai/blog/deepseek-harness)  
eesel AI  
DeepSeek Harness explained: what dsh is, how it works, and ...  
October 6, 2026 — The README labels it a developer preview and warns, in capital letters, that there will be compatibility-breaking changes. Every r...
* [](https://ofox.ai/blog/deepseek-harness-dsh-version-updates-stability-production-2026/)  
Ofox AI  
DeepSeek Harness (dsh): Version, Updates, Stability (2026)  
August 17, 2026 — DeepSeek Harness (dsh): Version, Updates, Stability (2026) Harness (dsh) is on 0.1\. Development restarted 2026-08-24\. Pin before y...
* [](https://kie.ai/blog/what-is-deepseek-harness)  
Kie.ai  
What Is DeepSeek Harness? V4 Agent Framework - Kie.ai  
August 13, 2026 — Official release | August 13, 2026, as v0.1 Developer Preview | | Architecture | Cordis-based, with replaceable plugins

Show all

# when do ppl predict deepseek harness to be officially stable

2:33 AM

### when do ppl predict deepseek harness to be officially stable

**There is no official release date or widespread consensus timeline for when DeepSeek Harness (** **`dsh`) will reach a stable v1.0 release.** DeepSeek AI has not published a public roadmap with target dates, and the project remains in active developer preview with frequent breaking changes. [](https://github.com/deepseek-ai/deepseek-harness/releases)

#### Current Development Status

* **Active Pre-Release Cycle.** DeepSeek Harness launched in developer preview on August 13, 2026, and expanded to a worldwide public preview with an installable desktop app on October 2, 2026. [](https://flowtivity.ai/blog/deepseek-harness-open-source-agent-explained/)
* **Recent Version Progression.** Development is moving through incremental `0.2.x` release candidates, with `dsh-v0.2.2-rc.3` released on November 13, 2026, on the [DeepSeek Harness GitHub Releases](https://github.com/deepseek-ai/deepseek-harness/releases) page. [](https://github.com/deepseek-ai/deepseek-harness/releases)
* **Stability Warnings.** Both the official [DeepSeek Harness GitHub Repository](https://github.com/deepseek-ai/deepseek-harness) and enterprise reviews from [Wavect](https://wavect.io/blog/deepseek-harness-enterprise-review/) emphasize that compatibility-breaking changes occur regularly and the software is not yet production-ready. [](https://wavect.io/blog/deepseek-harness-enterprise-review/)

#### Community Expectations & Signals

* **Focus on Core Architecture.** Rather than rushing toward a `v1.0` label, recent updates prioritize stabilizing the plugin substrate, state recovery, and security sandboxing. [](https://medium.com/coding-nexus/deepseek-harness-reality-check-0851d7a545e1)
* **No Security Audit Yet.** According to the repository's SAFETY.md Documentation, the runtime has not undergone a formal security audit, which developers view as a major prerequisite before an official stable release. [](https://github.com/deepseek-ai/deepseek-harness/blob/master/SAFETY.md)
* **Tied to Model Cadence.** Some community discussions on [Reddit](https://www.reddit.com/r/ArtificialInteligence/comments/1xk47za/i%5Fasked%5Fdeepseek%5Fand%5Fhy%5Fto%5Fpredict%5Fthe%5Fnext/) speculate that major DeepSeek platform milestones could align with their next-generation model timeline in **Q1–Q2 2027**, though no official link to `dsh` stability has been confirmed.

If you are planning to use DeepSeek Harness for a project, I can help you **pin a specific release version** or **compare it with stable alternatives** like Claude Code and OpenAI Codex. Would either of those be helpful?

* [](https://github.com/deepseek-ai/deepseek-harness/releases)  
GitHub  
Releases · deepseek-ai/deepseek-harness  
Fix an issue that could cause Windows desktop in-app updates to fail and prevent the app from reopening automatically. Git Worktre...
* [](https://www.reddit.com/r/ArtificialInteligence/comments/1xk47za/i%5Fasked%5Fdeepseek%5Fand%5Fhy%5Fto%5Fpredict%5Fthe%5Fnext/)  
Reddit·r/ArtificialInteligence  
I asked DeepSeek and Hy to predict the next versions of their ...  
For V5, it predicted more unified multimodal capabilities, adaptive thinking, and persistent memory across sessions. Its guess was...
* [](https://wavect.io/blog/deepseek-harness-enterprise-review/)  
wavect.io  
DeepSeek Harness Review: Production Readiness  
DeepSeek Harness, also called dsh , is an MIT-licensed agent harness from DeepSeek AI that runs a coding agent through configurabl...

Show all

## likely when

likely when

2:33 AM

### likely when

Based on DeepSeek’s release velocity over the past three months, **the most realistic window for a stable `v1.0` release is between Q1 and Q2 2027**, though an official **plugin marketplace** is likely coming much sooner.

Because DeepSeek has not published a formal roadmap, developers are projecting the timeline using three main signals:

#### 1\. Current Release Pace (`0.1` to `0.2.2`)

* **Six-Week Minor Cycles.** DeepSeek Harness launched at `v0.1` on August 13, 2026, and jumped to `v0.2` alongside its desktop apps roughly six weeks later on September 29–October 1. [](https://www.reddit.com/r/LocalLLaMA/comments/1wutkgt/deepseek%5Fharness%5F02%5Foptional%5Fbundle%5Farchitecture/)
* **High Breaking-Change Volume.** The November 13, 2026 release (`dsh-v0.2.2-rc.3`) still introduces major architectural shifts—such as reworking `AgentTeam` sub-agents, changing tool error codes, and altering sandbox directory permissions—that require custom plugins to migrate. At this pace of minor increments (`0.2.1`, `0.2.2`, etc.), stabilizing the core APIs will likely take several more months. [](https://github.com/deepseek-ai/deepseek-harness/releases)

#### 2\. Upcoming Ecosystem Milestones

* **Official Plugin Marketplace First.** On November 5, 2026, the Harness team announced that its immediate next priority is launching an **official plugin marketplace and author program** to support its 1.54 million daily active users and 35,000+ community plugins. [](https://pandaily.com/deepseek-harness-1-54-million-daily-active-users-official-plugin-marketplace)
* **Locking the Plugin Contract.** A `v1.0` designation typically signifies that plugin authors no longer have to rewrite extensions every few weeks. Expect `v1.0` only after the official marketplace launches and plugin APIs stop breaking between release candidates.

#### 3\. Alignment with DeepSeek V5

* **Model-Driven Launches.** DeepSeek historically ties major tooling milestones to flagship model drops—`dsh v0.1` launched alongside DeepSeek V4-Pro, and `v0.2` aligned closely with the October V4.1-Flash update.
* **Early 2027 Target.** Community trackers and model forecasts on [Reddit](https://www.reddit.com/r/ArtificialInteligence/comments/1xk47za/i%5Fasked%5Fdeepseek%5Fand%5Fhy%5Fto%5Fpredict%5Fthe%5Fnext/) point to **Q1–Q2 2027** for DeepSeek's next major generation (V5), making that window the strongest candidate for `dsh` to graduate out of public preview. [](https://flowtivity.ai/blog/deepseek-harness-open-source-agent-explained/)

* [](https://www.reddit.com/r/ArtificialInteligence/comments/1xk47za/i%5Fasked%5Fdeepseek%5Fand%5Fhy%5Fto%5Fpredict%5Fthe%5Fnext/)  
Reddit·r/ArtificialInteligence  
I asked DeepSeek and Hy to predict the next versions of their ...  
For V5, it predicted more unified multimodal capabilities, adaptive thinking, and persistent memory across sessions. Its guess was...
* [](https://github.com/deepseek-ai/deepseek-harness/releases)  
GitHub  
Releases · deepseek-ai/deepseek-harness  
DeepSeek chat import plugin. Fix an issue that could cause Windows desktop in-app updates to fail and prevent the app from reopeni...
* [](https://pandaily.com/deepseek-harness-1-54-million-daily-active-users-official-plugin-marketplace)  
Pandaily  
DeepSeek Harness Reaches 1.54 Million Daily Users and ...  
DeepSeek Harness hit 1.54 million daily users and about 92 trillion tokens a day, with some 35,000 third-party plugins; an officia...

Show all

# what do ppl say when comparing pi and dsh

When developers and AI researchers compare **Pi (Pi Agent)** and **DSH (DeepSeek Harness)**, the general consensus is that **they perform nearly identically on coding benchmarks, so the choice comes down to architecture and workflow preference**. Both are free, open-source (MIT-licensed) AI agent harnesses designed to wrap around language models. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)

### Core Design Philosophy

* **Pi is the "Vim of coding agents."** It starts with a tiny core consisting of just four built-in tools (read, bash, edit, and write) and a short system prompt. Users are expected to keep it lightweight or build their own custom workflows around it using extensions. [](https://agiflow.io/blog/deepseek-harness-vs-pi-coding-agent)
* **DSH is a plugin-first runtime.** Released by DeepSeek in August 2026, it treats everything—even the agent loop itself—as a pluggable component. Out of the box, it exposes around 19 to 26 tools to the model, positioning it as a heavier, full-featured agent runtime for teams and specialists. [](https://www.reddit.com/r/DeepSeek/comments/1vnzosz/deepseek%5Fharness%5Fvs%5Fpi%5Fagent%5Fare%5Fthey%5Fconverging/)
* **Shared DNA under the hood.** People frequently note that DSH actually uses Pi’s model layer to communicate with non-DeepSeek models. Furthermore, DeepSeek’s own project lead publicly stated that Pi is a favorite daily driver for many developers at DeepSeek. [](https://www.youtube.com/watch?v=gGqi-wcyHc4)

### Performance & Benchmarks

* **Dead-even task completion.** Across multiple community and independent tests, the two are virtually tied in raw problem-solving ability. For example, in one 30-task evaluation, Pi passed 21 tasks to DSH's 20, and in a larger 89-task terminal test, Pi solved 66 while DSH solved 65. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)
* **Token overhead and speed.** Because DSH sends significantly more tool schemas on every request (around 19–26 compared to Pi’s 4), benchmarkers on [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions/4283) noted a "schema tax" when running local models. In those tests, DSH used about 12% more input tokens and had slower time-to-first-token than Pi. [](https://github.com/deepseek-ai/deepseek-harness/discussions/4283)

### Security & Sandboxing

* **Pi relies on external isolation.** Pi deliberately ships with zero built-in permission prompts or sandboxing. According to an architectural breakdown by [AgentsPulse](https://agentspulse.github.io/tutorials/deepseek-harness-vs-pi-agent/), Pi expects users to enforce security at the OS or container level using tools like Docker, Gondolin, or OpenShell.
* **DSH includes a built-in approval system.** DSH ships with a native, fail-closed approval and sandboxing subsystem focused on filesystem effects. However, reviewers point out that DSH's built-in sandbox doesn't cover network or process isolation, meaning both tools still require careful setup depending on your security needs. [](https://agentspulse.github.io/tutorials/deepseek-harness-vs-pi-agent/)

### Summary Comparison

| Feature            | Pi (Pi Agent)                                                     | DSH (DeepSeek Harness)                                     |
| ------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| **Default Setup**  | Minimalist (4 core tools, short prompt)                           | Batteries-included (19–26 tools by default)                |
| **Extensibility**  | Lightweight extensions around a fixed core                        | Fully pluggable runtime (including the loop)               |
| **Security Model** | None built-in; relies on external containers                      | Built-in filesystem approval/sandbox subsystem             |
| **Token Overhead** | Lower per-request token footprint                                 | Higher token usage due to larger tool schemas              |
| **Best For**       | Individual developers wanting a fast, understandable daily driver | Teams and researchers building multi-variant agent systems |

### Community Consensus

One point of agreement among users on [Reddit](https://www.reddit.com/r/DeepSeek/comments/1vnzosz/deepseek%5Fharness%5Fvs%5Fpi%5Fagent%5Fare%5Fthey%5Fconverging/) is that both tools share the goal of keeping the core agent detached from extra bloat, though they cater to different audiences. Developers generally recommend **Pi** if you want a coding agent you can install, read through, modify, and use every day on your local machine. They recommend **DSH** if you are building complex, multi-agent architectures that require centralized policy enforcement, session replay, and heavy plugin orchestration. Developers are even building bridges—such as the experimental Rutis bridge shared on [Reddit's r/PiCodingAgent](https://www.reddit.com/r/PiCodingAgent/comments/1x3xsfs/would%5Fyou%5Fuse%5Fpi%5Fextensions%5Foutside%5Fpi%5Fi/)—to run Pi extensions and DSH plugins side-by-side. [](https://composio.dev/content/deepseek-harness-vd-pi-agent)

Are you choosing between **Pi** and **DSH** for a specific **coding workflow** or **model setup** (like local LLMs vs. cloud APIs)? Let me know your setup, and I can help you figure out which one fits better or share tips on configuring it.

* [](https://composio.dev/content/deepseek-harness-vd-pi-agent)  
Composio  
DeepSeek Harness (DSH) vs Pi Agent: Everything You Need ...  
September 8, 2026 — Pi is the better choice if you want a coding agent you can install, understand, modify, and use every day.
* [](https://www.youtube.com/watch?v=gGqi-wcyHc4)  
YouTube·Devsplainers  
DeepSeek Harness vs Pi: Which Free Coding Agent Wins  
October 6, 2026 — PI solved 66 of 89 terminal tasks and Deepseek Harness solved 65\. they're even closer under the hood when Deepseek's harness talks...  
9:28
* [](https://www.aib.vote/en/news/deepseek-harness-pi-agent-comparison)  
www.aib.vote  
DeepSeek Harness Ties Pi Agent | AIB  
September 11, 2026 — Pi is better for installing, understanding, modifying, and using every day, while DSH gives more control for building a full agent...

Show all



