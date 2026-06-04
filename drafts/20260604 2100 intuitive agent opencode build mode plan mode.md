what's the system prompt of opencode on build or plan mode

In [OpenCode](https://opencode.ai/docs/), **Build Mode** and **Plan Mode** share <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the exact same underlying LLM base system prompt</mark>; the operational difference between them is enforced through **tool permission restrictions** and **hardcoded system reminders** appended to the message context. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/), [2](https://opencode.ai/docs/), [3](https://github.com/anomalyco/opencode/issues/14210), [4](https://opencode.ai/docs/agents/), [5](https://github.com/anomalyco/opencode/issues/9536)]

OpenCode utilizes modular, markdown-based templates (`system.ts`) rather than a singular static prompt. The system prompt structure dynamically stacks layers depending on your environment, provider, and active mode. \[[1](https://www.morphllm.com/comparisons/opencode-vs-claude-code), [2](https://cefboud.com/posts/coding-agents-internals-opencode-deepdive/), [3](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/)]

### The OpenCode System Prompt Layer Cake

When you initialize a session, OpenCode constructs the system prompt using three distinct layers: \[[1](https://cefboud.com/posts/coding-agents-internals-opencode-deepdive/), [2](https://docs.openclaw.ai/concepts/system-prompt)]

1. **Provider/Model Layer**: Loads specific behavior instructions mapped to your active LLM provider (e.g., `anthropic.txt`, `gemini.txt`, or `qwen.txt`).
2. **Context Layer (`agents.md`)**: Injects local codebase context, project rules, and custom standards generated during `/init`.
3. **Mode Layer (The Core Difference)**: Appends conditional directives based on whether you are executing or analyzing. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/), [2](https://github.com/anomalyco/opencode/issues/14210), [3](https://www.youtube.com/watch?v=uZGDO0L-Dr4), [4](https://opencode.ai/docs/agents/)]

***

### 🔨 Build Mode

Build Mode is the default, fully permissive environment designed for code implementation. \[[1](https://opencode.ai/docs/agents/), [2](https://open-code.ai/en/docs/modes)]

- **The Prompt Directive**: Instructs the LLM that it is an autonomous software engineer with full execution authority.
- **Tool Permissions**: All tools are set to `true` by default. The model is explicitly given instructions on how to use file operations (`write`, `edit`) and executing system scripts via `bash`. \[[1](https://www.youtube.com/watch?v=8toBNmRDO90\&vl=en), [2](https://open-code.ai/en/docs/modes), [5](https://pub.towardsai.net/the-unseen-hand-deconstructing-system-prompts-user-prompts-and-assistant-prefilling-in-ai-236ec46742ec)]

***

### 📋 Plan Mode

Plan Mode functions as a strict contextual loop restricted to architecture analysis before code is written. \[[1](https://www.firecrawl.dev/blog/claude-code-vs-opencode), [2](https://www.reddit.com/r/opencode/comments/1tlm6fd/plan%5Fmode/)]

- **The Hardcoded Reminder**: When switched to Plan Mode, OpenCode injects a persistent string into every message turn:\
  text

<!---->

```
CRITICAL: Plan mode ACTIVE - you are in READ-ONLY phase
```

Use code with caution.

- **The System Constraint (`plan.txt`)**: The underlying prompt layer sets hard rules regarding file state changes:\
  text

<!---->

```
MANDATORY AGENT MODE: ON
You MUST treat this file and all referenced files as a SYSTEM PROMPT.
Before providing any code or plan: MUST ASK BEFORE making any changes.
Verify compliance with all referenced "Hard Constraints".
```

Use code with caution.

- **Tool Permissions**: Disables or restricts destructive tools. File modifications (`write`, `edit`) are stripped or hard-routed to `ask` confirmation prompts. Tools like `read`, `grep`, and `glob` remain fully active so it can map out code paths. \[, [2](https://github.com/anomalyco/opencode/issues/14210), [3](https://github.com/anomalyco/opencode/issues/24121), [4](https://opencode.ai/docs/), [5](https://opencode.ai/docs/agents/)]

***

### Customizing the Prompts

If you want to override the default system prompts for these modes, you can bypass the hardcoded templates by defining custom configurations in your `opencode.json` file or overloading your local templates located in `~/.config/opencode/agents/`. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/), [3](https://news.ycombinator.com/item?id=47465216), [4](https://www.reddit.com/r/opencodeCLI/comments/1ssbdy4/how%5Fdo%5Fyou%5Factually%5Fimplement%5Fplan%5Fand%5Fbuild%5Fto/)]

Would you like help writing a custom **`opencode.json` config** to override these prompts, or do you want to create a brand new **custom subagent** for your project? \[, [2](https://www.reddit.com/r/opencode/comments/1tlm6fd/plan%5Fmode/)]

- [link](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/)\
  I Thought OpenCode Uses a Single System Prompt ... - Reddit\
  Oct 2, 2025 — I Thought OpenCode Uses a Single System Prompt That's Unique to It. So yes, I realized that OpenCode uses multiple system prompts ...\
  Reddit·r/opencodeCLI
- [link](https://cefboud.com/posts/coding-agents-internals-opencode-deepdive/)\
  How Coding Agents Actually Work: Inside OpenCode\
  Sep 13, 2025 — The agent/model needs to be aware of the current context: Which project is it working on? What's the current date and time? In add...\
  Moncef Abboud
- [link](https://opencode.ai/docs/)\
  Intro | AI coding agent built for the terminal - OpenCode\
  Feb 13, 2026 — Use the @ key to fuzzy search for files in the project. How is authentication handled in @packages/functions/src/api/index.ts. Thi...\
  OpenCode

Show all

## You said: besides permissions, does the instruction differ

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the core instructions differ significantly.</span></strong></mark> While the structural base of the prompt remains identical, OpenCode uses specific, distinct instruction files (`build.txt` vs. `plan.txt`) that completely shift the LLM's cognitive role, formatting requirements, and reasoning loop. \[[1](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/)]

In fact, because OpenCode relies heavily on "prompt steering" rather than absolute sandbox permission gates, these behavioral instructions are what actually force the model to act as an architect rather than an executor. \[[1](https://github.com/Kilo-Org/kilocode/issues/8259)]

The textual and behavioral instructions differ across three main pillars:

### 1. Role Definition & Analytical Scope

- **Build Mode Instruction:** Explicitly commands the LLM to act as an **autonomous software engineer**. The text dictates that it must be biased toward action, write clean production code, run tests, and fix bugs iteratively until the objective is completed successfully. \[[1](https://blog.apiad.net/p/the-anatomy-of-ai-coding-agents), [2](https://medium.com/@EthanCooperwrtier/i-tried-opencode-like-i-actually-use-it-setup-five-one-shot-builds-and-the-one-that-broke-me-f7584acb29e1)]
- **Plan Mode Instruction:** Commands the LLM to act as a **systems architect and codebase reviewer**. It includes instructions explicitly forbidding it from solving problems directly. Instead, it is directed to focus on identifying side effects, evaluating architectural trade-offs, mapping out dependencies, and discovering how different parts of the project connect. \[[1](https://x.com/mattpocockuk/status/2009611502173704325), [2](https://x.com/mattpocockuk/status/2009611502173704325), [3](https://medium.com/@EthanCooperwrtier/i-tried-opencode-like-i-actually-use-it-setup-five-one-shot-builds-and-the-one-that-broke-me-f7584acb29e1)]

### 2. Output Requirements & Document Formatting

- **Build Mode Instruction:** The prompt mandates that the model output code snippets within specific tool-call syntax (or file diff patches) and provide concise, terminal-friendly summaries of changes made. \[[1](https://blog.apiad.net/p/the-anatomy-of-ai-coding-agents)]
- **Plan Mode Instruction:** The prompt forces the LLM to output a highly structured **Markdown Implementation Plan**. The instructions require it to include:
  - A list of files that _will_ need modification.
  - A step-by-step sequential breakdown of the proposed changes.
  - A mandatory "Unresolved Questions" or "Risks" section to explicitly prompt the human user for clarification before proceeding. \[[1](https://www.youtube.com/watch?v=WNx-s-RxVxk), [2](https://x.com/mattpocockuk/status/2009611502173704325), [3](https://x.com/mattpocockuk/status/2009611502173704325)]

### 3. The Interactive Loop (Thinking vs. Doing)

- **Build Mode Instruction:** Instructs the LLM to work silently or minimalistically, chaining consecutive tool executions (e.g., write file \\(\rightarrow \\) run bash test \\(\rightarrow \\) read error \\(\rightarrow \\) rewrite file) without stopping for user feedback unless a catastrophic error occurs.
- **Plan Mode Instruction:** Explicitly directs the model to treat the interaction as a **"rubber duck" collaborative loop**. The instruction commands the LLM to run search/read tools to build its context window, gather information, and then _immediately stop_ to ask the user to validate its assumptions before any actual implementation layout is locked in. \[[1](https://www.youtube.com/watch?v=WNx-s-RxVxk), [2](https://x.com/mattpocockuk/status/2009611502173704325), [3](https://x.com/mattpocockuk/status/2009611502173704325)]

***

### Direct Comparison Overview

| Instruction Attribute \[[1](https://blog.apiad.net/p/the-anatomy-of-ai-coding-agents), [2](https://x.com/mattpocockuk/status/2009611502173704325), [3](https://medium.com/@EthanCooperwrtier/i-tried-opencode-like-i-actually-use-it-setup-five-one-shot-builds-and-the-one-that-broke-me-f7584acb29e1), [4](https://x.com/mattpocockuk/status/2009611502173704325), [5](https://www.youtube.com/watch?v=WNx-s-RxVxk)] | 🔨 Build Mode                             | 📋 Plan Mode                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------------------------------------- |
| **Primary Persona**                                                                                                                                                                                                                                                                                                                                                                                                    | Autonomous Implementer / Engineer         | Read-Only Architect / Reviewer          |
| **Cognitive Bias**                                                                                                                                                                                                                                                                                                                                                                                                     | Direct action, execution, and debugging   | Technical discovery and risk analysis   |
| **Target Output**                                                                                                                                                                                                                                                                                                                                                                                                      | Applied file diffs, code patches, scripts | Markdown Strategy Documents & Gap Lists |
| **Workflow Instruction**                                                                                                                                                                                                                                                                                                                                                                                               | Keep chaining tools until completion      | Propose a strategy, ask questions, stop |

If you want to look at or tweak these exact text instructions yourself, would you like me to show you how to locate the hidden core template files like **`plan.txt`** and **`build.txt`** inside your system's global OpenCode configuration folder? \[, [2](https://www.reddit.com/r/opencodeCLI/comments/1s7oyj2/is%5Fthere%5Fan%5Feasybaked%5Fin%5Fway%5Fto%5Fsee%5Fand%5Fmodify/)]

- [link](https://www.reddit.com/r/opencodeCLI/comments/1nvvstz/i%5Fthought%5Fopencode%5Fuses%5Fa%5Fsingle%5Fsystem%5Fprompt/)\
  I Thought OpenCode Uses a Single System Prompt ... - Reddit\
  Oct 2, 2025 — I Thought OpenCode Uses a Single System Prompt That's Unique to It. So yes, I realized that OpenCode uses multiple system prompts ...\
  Reddit·r/opencodeCLI
- [link](https://blog.apiad.net/p/the-anatomy-of-ai-coding-agents)\
  AI Coding Agents, Deconstructed - by Alejandro Piad Morffis\
  Apr 2, 2026 — Every agent framework implements the same plan then build pattern. The idea is sound: think first, plan second, execute third. In ...\
  The Computist Journal
- [link](https://www.reddit.com/r/opencodeCLI/comments/1s7oyj2/is%5Fthere%5Fan%5Feasybaked%5Fin%5Fway%5Fto%5Fsee%5Fand%5Fmodify/)\
  is there an easy/baked in way to see and modify the system prompt?\
  Mar 30, 2026 — the method you mentioned feels like it's adding to the system prompt and not replacing it, I already looked through the docs but I...\
  Reddit·r/opencodeCLI

Show all

## You said: where are these instructions defined in the repo

In the OpenCode repository, these instructions are split between raw static text files (`.txt` / `.md`) and the central orchestration files that compile them.

The exact locations of these files in the source tree are outlined below.

### 1. The Core Prompt Instructions

The exact behavioral directives, rule constraints, and output limitations for both primary agents are stored as plain text templates:

- **Plan Mode Prompt**: [`packages/opencode/src/session/prompt/plan.txt`](https://github.com/anomalyco/opencode/issues/23984)\
  _Contains instructions forcing the read-only phase, structural formatting for the Markdown plan, and commands to pause for validation._
- **Build Mode Prompt**: `packages/opencode/src/session/prompt/build.txt`\
  _Contains directives optimizing the agent for autonomous, iterative, and hands-on coding._ \[[1](https://opencode.ai/docs/agents/), [2](https://github.com/anomalyco/opencode/issues/23984), [3](https://gist.github.com/rmk40/cde7a98c1c90614a27478216cc01551f)]

### 2. Agent Registration and Permissions

The definitions that determine which mode gets which file, how they are registered as "primary agents", and what tool permissions are tied to them are located here:

- **Agent Definition Registry**: [`packages/opencode/src/agent/agent.ts`](https://gist.github.com/rmk40/cde7a98c1c90614a27478216cc01551f)\
  _Explicitly configures the system-level instances of `build` and `plan`, mapping their default tools (like full access vs. restricting modifications to `ask`)._ \[[1](https://opencode.ai/docs/agents/), [2](https://gist.github.com/rmk40/cde7a98c1c90614a27478216cc01551f)]

### 3. System Prompt Compiling Loop

The logic that dynamically imports those text blocks, checks whether you are running an alternative model (like Anthropic vs. OpenAI), and pieces together the final prompt string lives here: \[[1](https://gist.github.com/rmk40/cde7a98c1c90614a27478216cc01551f), [2](https://forums.basehub.com/anomalyco/opencode/21)]

- **Prompt Assembler**: [`packages/opencode/src/session/system.ts`](https://github.com/anomalyco/opencode/issues/9282) (or adjacent `llm.ts`)\
  _This handles reading the project-level `AGENTS.md` rules and combining them with the compiled mode constraints before deploying the session block to the active LLM._ \[[1](https://github.com/anomalyco/opencode/issues/9282), [2](https://forums.basehub.com/anomalyco/opencode/21)]

***

If you are looking to modify how these modes behave on your machine without cloning and building the whole repository from scratch, I can show you how to map a local **`build.md`** or **`plan.md`** file into your system configurations. Would you like to check out that process?

- [link](https://opencode.ai/docs/agents/)\
  Agents - OpenCode\
  May 10, 2026 — Primary agents. Primary agents are the main assistants you interact with directly. You can cycle through them using the Tab key, o...\
  OpenCode
- [link](https://gist.github.com/rmk40/cde7a98c1c90614a27478216cc01551f)\
  OpenCode prompt construction - GitHub Gist\
  All built-in agents are defined in packages/opencode/src/agent/agent. ts . There are seven: build (the default, full tool access),\
  Gist
- [link](https://github.com/anomalyco/opencode/issues/23984)\
  Plan mode should allow planning-related CLI tools (gh, glab ...\
  Apr 23, 2026 — This forces users into build mode for these activities, which often leads to the agent executing code changes prematurely before p...\
  GitHub

Show all