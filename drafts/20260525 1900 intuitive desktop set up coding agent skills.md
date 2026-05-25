<!-- i would put some flexible markdown files inside .knowledge. rather paste them directly when i know i need than messing up w nested fs and symlinks. -->

<!-- i guess i have to be more imperative than declarative for agents. step 1 2 3. -->

#

how to define skills for coding agents

To define skills for AI coding agents, you <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">package domain knowledge and executable scripts into a portable, <strong>standardized directory structure centered around a <code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">SKILL.md</code> file</strong></mark>. This open standard allows major tools like [Claude Code](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf), [VS Code Copilot](https://code.visualstudio.com/docs/copilot/customization/agent-skills), and [OpenAI Codex](https://developers.openai.com/codex/skills) to dynamically discover, load, and execute specialized workflows on demand without bloating the agent's active context window. \[[1](https://www.youtube.com/watch?v=S%5FoN3vlzpMw), [2](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [3](https://agentskills.io/home), [4](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf), [5](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [6](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), [7](https://developers.openai.com/codex/skills), [8](https://dev.to/nfrankel/writing-an-agent-skill-3li2)]

The Core Skill Directory Structure

A production-grade agent skill is not just a floating prompt; it is a version-controlled folder. The [Agent Skills standard format specification](https://github.com/addyosmani/agent-skills) relies on the following directory structure: \[[1](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9), [2](https://github.com/addyosmani/agent-skills), [3](https://agentskills.io/home), [4](https://dev.to/nfrankel/writing-an-agent-skill-3li2), [5](https://docs.replit.com/core-concepts/agent/skills)]

text

```
my-custom-skill/
├── SKILL.md          # REQUIRED: Contains YAML metadata and procedural markdown instructions
├── scripts/          # OPTIONAL: Executable automation code (Python, Bash, Node)
├── references/       # OPTIONAL: Team guidelines, architecture principles, or API specs
└── assets/           # OPTIONAL: Code templates, boilerplate structures, or visual schemas
```

Use code with caution.

***

Step-by-Step Guide to Defining a Skill \[[1](https://www.youtube.com/watch?v=TZ-ilGRnN1w)]

1\. Formulate the Directory and Mandatory Metadata \[[1](https://brightdata.com/blog/ai/claude-skills-with-web-mcp)]

Create a localized or global directory named after the action using lowercase letters, numbers, and hyphens. Inside, create the mandatory `SKILL.md` file. The file **must** lead with a YAML frontmatter block containing a `name` and a `description`: \[[1](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices), [2](https://vercel.com/blog/agent-skills-explained-an-faq), [3](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [4](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [5](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills)]

markdown

```
---
name: generating-api-routes
description: Use this skill when the user asks to create a new REST API endpoint or controller within the Express/Node.js backend.
---
```

Use code with caution.

- **The Power of the Description**: Coding agents use **progressive disclosure**. They pre-load _only_ the `name` and `description` fields into memory. If your instruction matches the current user request, the agent implicitly triggers the skill and parses the rest of the file. \[[1](https://www.youtube.com/watch?v=S%5FoN3vlzpMw), [2](https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills), [3](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [4](https://developers.openai.com/codex/skills)]

2\. Write Actionable, Step-by-Step Instructions

Beneath the frontmatter, write the core instructions using highly descriptive, imperative Markdown. Define explicit success and exit criteria so the agent knows exactly when the task is done. \[[1](https://www.youtube.com/watch?v=fabAI1OKKww\&t=83), [2](https://code.visualstudio.com/docs/copilot/customization/agent-skills), [3](https://github.com/addyosmani/agent-skills), [4](https://www.zenml.io/llmops-database/parallel-asynchronous-ai-coding-agents-for-development-workflows)]

markdown

```
# Instructions
1. Inspect the existing routes in `/src/routes/` to preserve structural naming patterns.
2. Draft the route using the controller pattern located in `references/controller-template.md`.
3. Always include data validation middleware (`Joi` or `Zod`) for incoming requests.
4. Execute `npm run test` to verify the new route works without regressions.

## Safety Rails
- NEVER expose database entity IDs directly in the API response layout.
- If the endpoint requires authentication, verify the `isAuth` middleware is injected.
```

Use code with caution.

3\. Anchor Complexity to Deterministic Scripts

If a task requires rigid, exact execution—such as running a specific regex parser or triggering a compilation sequence—do not rely on the agent's LLM to generate it. Write a deterministic script inside the `scripts/` folder and instruct the agent to run it. \[[1](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [2](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9), [3](https://engineering.block.xyz/blog/3-principles-for-designing-agent-skills), [4](https://shibuiyusuke.medium.com/10-practical-techniques-for-mastering-agent-skills-in-ai-coding-agents-6070e4038cf1), [5](https://www.linkedin.com/pulse/mastering-claude-code-skills-9-principles-from-analyzing-weber-6qvcc)]

- **Example Script Reference in SKILL.md**:\
  markdown

<!---->

```
## Execution Step
Run the compliance script via terminal command: `python3 scripts/validate_schema.py`. Read the JSON error log output if it fails.
```

Use code with caution.

***

Engineering Best Practices for Agent Skills

- **Adopt Gerund Naming Conventions**: Name your skill directories and YAML tags using the `verb + -ing` form (e.g., `testing-code`, `refactoring-components`) to make tracking and tool calls intuitive.
- **Extract from Real Successes**: Do not guess what an agent needs. Walk through a coding task with an agent step-by-step. Once it succeeds, command the agent to export its winning workflow context directly into a new `SKILL.md` file.
- **Isolate Skills from Prompts and Runtime OS Protocols**: Remember that a skill provides the procedural workflow knowledge, while underlying frameworks like the [Model Context Protocol (MCP)](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9) provide the secure runner/connection to your environment. Keep them modular so they can be ported to different AI operating systems easily. \[[1](https://www.youtube.com/watch?v=S%5FoN3vlzpMw), [2](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices), [3](https://resources.anthropic.com/hubfs/The-Complete-Guide-to-Building-Skill-for-Claude.pdf), [4](https://dev.to/loc%5Fcarrre%5F0d798813c662/agent-skills-explained-what-they-are-what-they-arent-and-how-to-use-them-bf9), [5](https://agentskills.io/home)]

To help you get started on your first custom file, what **specific workflow or language ecosystem** are you trying to automate for your coding agent? Turn this into a practical layout format right now.

- [link](https://www.youtube.com/watch?v=S%5FoN3vlzpMw)\
  How AI agents & Claude skills work (Clearly Explained) - YouTube\
  Apr 8, 2026 — How AI agents & Claude skills work (Clearly Explained) - YouTube. This content isn't available. ... The models (Opus 4.6, GPT 5.4)\
  YouTube·Greg Isenberg
- [link](https://code.visualstudio.com/docs/copilot/customization/agent-skills)\
  Use Agent Skills in VS Code\
  In the Chat view, select Configure Chat (gear icon) to open the Agent Customizations editor and then select the Skills tab. Select...\
  Visual Studio Code
- [link](https://www.youtube.com/watch?v=RHAd%5F6TUUIE)\
  What are Agent Skills? How I use skills with my AI Coding ...\
  Mar 6, 2026 — today I wanted to share how I use skills with my AI coding agents like cloud code or GitHub copilot. so if you are not aware about...\
  10:30\
  YouTube·Rishab in Cloud

Show all

You said: where to put skills in a repo

To configure agent skills for a repository, you should save them in <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the <strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">.agents/skills/</code> directory at the absolute root of your repository</strong></mark>. \[[1](https://developers.openai.com/codex/skills), [2](https://github.com/microsoft/apm/blob/main/CHANGELOG.md)]

Major ecosystems—including GitHub Copilot, OpenAI Codex, Cursor, Google Gemini CLI, and OpenCode—have standardized around `.agents/skills/` for universal skill discovery. Placing files here prevents redundant duplication across toolkits. \[[1](https://opencode.ai/docs/skills/), [2](https://github.com/microsoft/apm/blob/main/CHANGELOG.md)]

The Standard Repository Layout

Your repository layout should store the code in standard project directories and contain the agent workflows inside hidden dot-directories at the repository root:

text

```
my-project-repo/
├── .agents/                      # Universal agent target folder
│   └── skills/
│       ├── testing-endpoints/    # Skill folder matching frontmatter name
│       │   ├── SKILL.md          # MANDATORY skill workflow
│       │   └── scripts/          # Specific automation scripts for this skill
│       └── refactoring-ui/
│           └── SKILL.md
├── .claude/                      # Tool-Specific Exception (Claude Code)
│   └── skills/
│       └── optimizing-db/
│           └── SKILL.md
├── src/                          # Your standard project source code
├── tests/
└── package.json / requirements.txt
```

Use code with caution.

***

Alternative Options Based on Your AI Stack

While the unified standard is heavily favored, check your specific toolkit integration to ensure correct path auto-discovery: \[[1](https://opencode.ai/docs/skills/), [2](https://github.com/microsoft/apm/blob/main/CHANGELOG.md)]

| Target AI Tool \[[1](https://github.com/microsoft/apm/blob/main/CHANGELOG.md), [2](https://developers.openai.com/codex/skills), [3](https://opencode.ai/docs/skills/), [4](https://developer.android.com/tools/agents/android-skills), [5](https://code.visualstudio.com/docs/copilot/customization/agent-skills)] | Native Project Location          | Notes                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------- |
| **Unified Standard** (Cursor, Copilot, Codex, OpenCode, Gemini)                                                                                                                                                                                                                                                    | **`$REPO_ROOT/.agents/skills/`** | **Highly Recommended**. Eliminates up to 4 redundant copies of skills.  |
| **Claude Code**                                                                                                                                                                                                                                                                                                    | **`$REPO_ROOT/.claude/skills/`** | Retains native client routing separate from the `.agents/` convergence. |
| **Android Studio Agents**                                                                                                                                                                                                                                                                                          | **`$REPO_ROOT/.skills/`**        | Supports nesting by scopes (e.g., `.skills/ui-flows/`).                 |
| **Legacy Configuration**                                                                                                                                                                                                                                                                                           | **`$REPO_ROOT/.github/skills/`** | Used by older versions of VS Code/GitHub Copilot.                       |

***

How to Organize Skills in a Monorepo

If you are managing a massive codebase or monorepo, do not dump every skill into the root directory. You can distribute skills close to the domains they manage: \[[1](https://developers.openai.com/codex/skills)]

1. **Global Base Skills**: Place high-level skills (like `git-releases` or `security-audits`) directly at `$REPO_ROOT/.agents/skills/` so they are accessible globally across all sub-folders.
2. **Service-Specific Skills**: Place tailored instructions inside the sub-project directory (e.g., `services/billing-api/.agents/skills/`). The agent will walk up from its current working directory, locate the localized skill, and prioritize it over the root version.
3. **Global Conventions File**: Complement your isolated skill directories with a root-level `AGENTS.md` file. This is an industry-standard practice pioneered by open projects like [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) to establish broad repository-wide styling rules and behavior baselines. \[[1](https://developers.openai.com/codex/skills), [2](https://opencode.ai/docs/skills/), [3](https://addyosmani.com/agents/15-agents-md/), [4](https://www.instagram.com/p/DYdKolVOiKz/)]

What **AI tool or coding assistant** (e.g., Cursor, Claude Code, Copilot) does your development team use most frequently? I can give you the exact initialization command or config flag needed to map it smoothly. \[, [2](https://opencode.ai/docs/skills/)]

- [link](https://code.visualstudio.com/docs/copilot/customization/agent-skills)\
  Use Agent Skills in VS Code\
  To use a shared skill: \* Browse the available skills in the repository. \* Copy the skill directory to your .github/skills/ folder.\
  Visual Studio Code
- [link](https://developers.openai.com/codex/skills)\
  Agent Skills – Codex | OpenAI Developers\
  Table\_title: Where to save skills Table\_content: | Skill Scope | Location | Suggested use | | --- | --- | --- | | REPO | $CWD/.age...\
  OpenAI Developers
- [link](https://opencode.ai/docs/skills/)\
  Agent Skills | OpenCode\
  May 23, 2026 — Skills are loaded on-demand via the native skill tool—agents see available skills and can load the full content when needed. \* Pla...\
  OpenCode

Show all

You said: when is it standardized

The standard layout and behavior for agent skills became widely standardized across the industry in **early 2026**. \[[1](https://medium.com/google-cloud/confused-about-where-to-put-your-agent-skills-ea778f3c64f3), [2](https://www.builder.io/blog/agent-skills-rules-commands)]

The shift happened when major AI lab tools (like Anthropic's Claude Code) and editor ecosystems converged around the Agent Skills Open Standard, a lightweight specification designed to make agent playbooks portable across different developer toolsets. \[[1](https://agentskills.io/home), [2](https://www.agensi.io/learn/agent-skills-open-standard), [3](https://agentskills.io/home)]

The Core Standardization Milestones

- **The Format Standard (Early 2026)**: Platforms like [Builder.io](https://www.builder.io/blog/agent-skills-rules-commands), Vercel, and major IDEs standardized the physical structure: a directory containing a mandatory, case-sensitive `SKILL.md` file with strict YAML frontmatter (`name` and `description`).
- **The .agents/ Convergence**: To prevent developers from having to maintain a `.claude/skills/` folder, a `.copilot/skills/` folder, and a `.cursor/rules/` folder all at once, platforms standardized auto-discovery around the **`$REPO_ROOT/.agents/skills/`** and **`.skills/`** paths.
- **Production-Grade Libraries (May 2026)**: Prominent open-source registries like Addy Osmani’s public [agent-skills repository](https://github.com/addyosmani/agent-skills) launched, providing production-ready templates mapped across the entire Software Development Life Cycle (SDLC). This effectively cemented `SKILL.md` as the "universal container" for AI instructions. \[[1](https://github.com/addyosmani/agent-skills), [2](https://www.builder.io/blog/agent-skills-rules-commands), [3](https://vercel.com/blog/agent-skills-explained-an-faq), [4](https://www.agensi.io/learn/agent-skills-open-standard), [5](https://developer.android.com/tools/agents/android-skills), [6](https://addyosmani.com/blog/agent-skills/), [7](https://www.agensi.io/learn/addy-osmani-agent-skills-production-grade)]

***

Why Standardization Was Necessary

Before this convergence, developers faced two critical issues that forced the creation of the standard:

1. **Prompt Bloat**: Developers were stuffing hundreds of lines of repository guidelines into system prompts or `.cursorrules` files. This quickly choked the LLM's active context window, raised API costs, and degraded the agent's reasoning.
2. **Vendor Lock-in**: Custom agent instructions written for one editor wouldn't port over to a CLI agent or an automated CI/CD pipeline agent.

How the Standard Resolves This (Progressive Disclosure)

The standard solved prompt bloat by enforcing **progressive disclosure**. When an agent initializes in your workspace, it scans your `.agents/skills/` registry and reads **only** the `name` and `description` from the YAML frontmatter of your files. \[[1](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [2](https://www.agensi.io/learn/agent-skills-open-standard)]

The heavy step-by-step instructions and script assets are kept out of memory. The agent only loads the full, context-heavy `SKILL.md` file into memory _on demand_, the exact moment your user prompt triggers that specific skill description. \[[1](https://agentskills.io/specification), [2](https://www.youtube.com/watch?v=RHAd%5F6TUUIE), [3](https://www.agensi.io/learn/agent-skills-open-standard)]

If you are setting up your workspace, I can show you how to structure a **Global vs. Project-Local** skill layout, or map out an **`AGENTS.md` system baseline**. Which approach fits your repo best? \[[1](https://www.harness.io/blog/the-agent-native-repo-why-agents-md-is-the-new-standard), [2](https://www.agensi.io/learn/agent-skills-open-standard)]

- [link](https://medium.com/google-cloud/confused-about-where-to-put-your-agent-skills-ea778f3c64f3)\
  Confused About Where to Put Your Agent Skills? - Medium\
  Mar 9, 2026 — What Do They Look Like? An agent skill is always packaged in a folder that contains a SKILL.md file. Many skills are nothing more ...\
  Medium·Dazbo (Darren Lester)
- [link](https://agentskills.io/home)\
  Agent Skills Overview - Agent Skills\
  Open development. The Agent Skills format was originally developed by Anthropic, released as an open standard, and has been adopte...\
  Agent Skills
- [link](https://www.builder.io/blog/agent-skills-rules-commands)\
  Agent Skills vs. Rules vs. Commands - Builder.io\
  Jan 21, 2026 — What agent skills (Claude skills) are. In Builder (and an increasing number of providers), skills use the Agent Skills standard. T...\
  Builder.io

Show all

You said: who creates the standard

The Agent Skills open standard was **originally developed and launched by Anthropic**. \[[1](https://agentskills.io/home)]

To prevent ecosystem fragmentation and vendor lock-in, Anthropic released it as an independent, fully open standard governed by a public community specification. \[[1](https://agentskills.io/home), [2](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard), [3](https://www.bishoylabib.com/posts/claude-skills-comprehensive-guide), [4](https://arxiv.org/html/2602.12430v3)]

The creation, management, and adoption of the standard involve several key players:

1\. The Core Creator: Anthropic

Anthropic first rolled out the concept of "Agent Skills" to its users to extend Claude's capabilities. They quickly realized that forcing developers to rewrite specialized prompts for every single AI tool was highly inefficient. \[[1](https://towardsdatascience.com/what-is-agent-skills-beyond-claude/), [2](https://arxiv.org/html/2602.12430v3)]

Anthropic officially published the open-source specification and reference Python SDK at [agentskills.io](https://agentskills.io/home). This shifted the technology from a proprietary "Claude feature" into a portable blueprint that any AI lab or tool can use. \[[1](https://agentskills.io/home), [2](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard), [3](https://support.claude.com/en/articles/12512176-what-are-skills)]

2\. Big Tech & IDE Ecosystem Adopters

A standard is only as good as its adoption. Major platforms quickly integrated the spec directly into their own systems: \[[1](https://arxiv.org/html/2602.12430v3)]

- **Microsoft:** Embedded support for the Agent Skills layout within **VS Code and GitHub Copilot**.
- **Coding AI Pioneers:** Platforms like **Cursor, Windsurf, OpenCode, and Goose** natively adopted the schema.
- **Competitor Labs:** **OpenAI** and **Google DeepMind** independently standardized their own developer tooling pathways around the exact same file format, ensuring that a single `SKILL.md` can effectively drive multiple different models. \[[1](https://www.mindstudio.ai/blog/agent-skills-open-standard-claude-openai-google), [2](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard), [3](https://www.youtube.com/watch?v=zrbGCYGQr18\&t=4)]

3\. Open-Source Ecosystem Leaders

Prominent open-source developers play a heavy role in proving the standard's utility in the real world. A prime example is **Addy Osmani** (Engineering Lead at Google Chrome), who open-sourced a highly influential [agent-skills GitHub repository](https://github.com/addyosmani/agent-skills). \[[1](https://www.reddit.com/r/claude/comments/1sraslu/a%5Fgoogle%5Fengineer%5Fopensourced%5F19%5Fagent%5Fskillswhy/), [2](https://jimmysong.io/ai/addyosmani-agent-skills/)]

Instead of treating skills like abstract prompts, these open-source frameworks treat them like an executable software lifecycle (specifying, planning, writing code in slices, test-driven validation, and shipping). This community push solidified the practice of using strict markdown constraints to stop agents from writing sloppy, untested code. \[[1](https://www.youtube.com/watch?v=zrbGCYGQr18\&t=4), [2](https://www.reddit.com/r/claude/comments/1sraslu/a%5Fgoogle%5Fengineer%5Fopensourced%5F19%5Fagent%5Fskillswhy/)]

4\. Enterprise Curators

To build real-world momentum, major enterprise SaaS providers—including **[Atlassian](https://www.atlassian.com/), [Figma](https://www.figma.com/), [Canva](https://www.canva.com/), [Stripe](https://stripe.com/), [Notion](https://www.notion.com/), and [Zapier](https://zapier.com/)**—collaborated directly on the launch to publish pre-built, production-grade enterprise skills. This allowed developers to import trusted, platform-verified instructions into their repositories right out of the gate. \[[1](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard), [2](https://thenewstack.io/agent-skills-anthropics-next-bid-to-define-ai-standards/)]

Are you preparing to write **custom inner-loop software engineering skills** for your company, or are you looking to plug in **pre-built third-party platform skills** (like Stripe or Jira)? I can show you how to write the correct execution rules for either setup.

- [link](https://agentskills.io/home)\
  Agent Skills Overview - Agent Skills\
  Open development. The Agent Skills format was originally developed by Anthropic, released as an open standard, and has been adopte...\
  Agent Skills
- [link](https://www.mindstudio.ai/blog/agent-skills-open-standard-claude-openai-google)\
  What Is Agent Skills as an Open Standard? How Claude ...\
  Mar 29, 2026 — What Is Agent Skills as an Open Standard? How Claude, OpenAI, and Google Adopted the Same Format | MindStudio. Blog / What Is Agen...\
  MindStudio
- [link](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard)\
  Anthropic launches enterprise ‘Agent Skills’ and opens the standard, ...\
  Dec 18, 2025 — Anthropic launches enterprise 'Agent Skills' and opens the standard, challenging OpenAI in workplace AI. ... Anthropic said on Wed...\
  VentureBeat

Show all

# (?? d)

how to write the content of a skill for coding agents

To write the content of a skill for a coding agent, you must <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">create a modular, self-contained Python function accompanied by clear documentation</mark>. Coding agents rely on this documentation to understand when and how to execute the tool. \[[1](https://medium.com/@ericwang%5F66031/how-to-build-a-lightweight-python-ai-agent-with-skills-memory-knowledge-persona-f961c955c76a), [2](https://pub.towardsai.net/writing-tools-for-your-agents-a-complete-guide-cbfccbaf097d), [3](https://codelabs.developers.google.com/devsite/codelabs/build-agents-with-adk-empowering-with-tools?gl=us)]

Core Structure of a Skill

A well-defined skill consists of three critical components: \[[1](https://www.mindstudio.ai/blog/how-to-build-agentic-operating-system-9-components), [2](https://huggingface.co/blog/zhongshsh/agent-skills-analysis)]

1. **Type Hints**: Explicitly define input and output data types.
2. **Docstring**: Describe the purpose, arguments, and return values.
3. **Executable Code**: Write clean, error-handled logic. \[[1](https://www.mindstudio.ai/blog/build-web-scraping-skill-ai-agents-token-reduction), [2](https://christianmendieta.ca/build-ai-agents-with-langchain/), [3](https://www.udemy.com/course/agentic-ai-internals/), [4](https://medium.com/credera-engineering/how-proper-docstrings-and-annotations-can-save-engineers-hours-of-work-5068251dd050), [5](https://inventorsoft.co/blog/agent%5Fskills%5Fhow%5Fto%5Fteach%5Fai%5Fagent%5Fto%5Fwork%5Fby%5Fyour%5Fstandards/)]

Standard Template

python

```
def calculate_percentage_change(old_value: float, new_value: float) -> float:
    """
    Calculates the percentage increase or decrease between two numbers.
    Use this tool when you need to compare historical data trends.

    Args:
        old_value (float): The original or baseline number. Must not be zero.
        new_value (float): The updated or current number to compare.

    Returns:
        float: The percentage change. Positive means growth, negative means decline.
    """
    if old_value == 0:
        raise ValueError("The old_value cannot be zero.")

    change = ((new_value - old_value) / old_value) * 100
    return round(change, 2)
```

Use code with caution.

Best Practices for Writing Content

Formulate Precise Docstrings

- **State the intent**: Start with a clear action verb explaining what the skill does.
- **Define boundaries**: Explicitly state what the tool cannot do.
- **Specify triggers**: Tell the agent exactly _when_ to choose this skill. \[[1](https://openoregon.pressbooks.pub/technicalwriting/chapter/12-3-resume-sections-and-guidelines/), [2](https://itecsonline.com/post/codex-cli-agent-skills-guide-install-usage-cross-platform-resources-2026), [3](https://www.linkedin.com/pulse/creating-workflow-skills-claude-code-matthew-a-mattson-esq--3zokc), [4](https://www.philschmid.de/agent-skills-tips), [5](https://itecsonline.com/post/codex-cli-agent-skills-guide-install-usage-cross-platform-resources-2026)]

Enforce Input Validation \[[1](https://pub.towardsai.net/writing-tools-for-your-agents-a-complete-guide-cbfccbaf097d)]

- **Sanitize variables**: Check for empty strings, null values, or division by zero.
- **Return meaningful errors**: Provide descriptive error messages so the agent can self-correct.

Keep It Atomic \[[1](https://github.com/pnp/copilot-prompts/blob/main/SKILL-SCHEMA.md)]

- **Single responsibility**: One skill should perform exactly one task.
- **Limit side effects**: Avoid modifying global states or unrelated files. \[[1](https://www.analyticsvidhya.com/blog/2026/03/claude-skills-custom-skills-on-claude-code/)]

To help adapt this to your project, could you tell me more about **what task** you want your agent to perform? Alternatively, I can provide a specific example if you share **which framework** (like LangChain, AutoGen, or CrewAI) you are using.

- [link](https://medium.com/@ericwang%5F66031/how-to-build-a-lightweight-python-ai-agent-with-skills-memory-knowledge-persona-f961c955c76a)\
  How to build a Lightweight Python AI Agent with Skills/Memory/Knowledge/Persona？\
  Jan 15, 2026 — Skills are the actions your agent can perform. Instead of hardcoding Python functions into the agent core, we define them in modul...\
  \
  \
  Medium
- [link](https://pub.towardsai.net/writing-tools-for-your-agents-a-complete-guide-cbfccbaf097d)\
  Writing Tools for Your Agents: A Complete Guide\
  Jan 18, 2026 — A tool is a well-defined function, documented with clear descriptions and examples, enabling an agent to understand when and how t...\
  \
  \
  Towards AI
- [link](https://codelabs.developers.google.com/devsite/codelabs/build-agents-with-adk-empowering-with-tools?gl=us)\
  Building AI Agents with ADK: Empowering with Tools\
  Apr 22, 2026 — The agent's underlying LLM reads the function name and this docstring to understand what the tool does, what its arguments ( base ...\
  \
  \
  Google Codelabs

Show all

#

how to write the content of a skill for coding agents

To write effective content for a coding agent's skill, you must <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">treat the instruction set like a precise software contract</mark>. Coding agents require explicit boundaries, structured input/output formats, and clear error-handling protocols to operate autonomously without breaking your codebase. \[[1](https://www.marketcalls.in/machine-learning/how-to-build-ai-agents-lessons-from-anthropic.html)]

Core Framework

```
[Intent & Purpose] -> [System Constraints] -> [Input Validation] -> [Execution Steps] -> [Output Format]
```

Essential Content Components

- **Explicit Purpose**: Define exactly what the skill does in one sentence.
- **Scope Boundaries**: State what the skill is _not_ allowed to do.
- **Input Schema**: List required variables and their strict data types.
- **Step-by-Step Logic**: Use imperative, linear instructions for execution.
- **Error Handling**: Define fallback actions for failed dependencies or API timeouts.
- **Output Schema**: Specify the exact JSON, string, or boolean format required. \[[1](https://autohand.ai/docs/working-with-autohand-code/agent-skills), [2](https://itecsonline.com/post/codex-cli-agent-skills-guide-install-usage-cross-platform-resources-2026), [3](https://www.salesforce.com/agentforce/legacy-guide/), [4](https://improveandrepeat.com/2026/04/why-requirements-matter-so-much-for-ai-coding-agents/), [5](https://medium.com/superdatascience/how-llms-use-tools-a-step-by-step-guide-to-controlled-ai-agents-dbc44ac4b785)]

Best Practices for Writing

- **Use Imperative Verbs**: Start instruction lines with action words like _Verify_, _Extract_, _Modify_, or _Format_.
- **Avoid Ambiguity**: Replace subjective words like "efficiently" or "appropriate" with concrete metrics or conditions.
- **Enforce Idempotency**: Ensure running the skill multiple times with the same input yields the same result without side effects.
- **Isolate Variables**: Use distinct placeholders (e.g., `{{source_code}}`) to separate data from system prompts. \[[1](https://github.com/ComposioHQ/awesome-claude-skills/blob/master/skill-creator/SKILL.md), [2](https://vertu.com/lifestyle/mastering-google-antigravity-skills-the-ultimate-guide-to-extending-agentic-ai-in-2026), [3](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-best-practices), [4](https://www.mindstudio.ai/blog/codex-skill-systems-chained-scheduled-automations), [5](https://github.com/junminhong/awesome-agent-skills)]

Example: A Code-Refactoring Skill

markdown

```
# Skill: Convert JavaScript ES5 Functions to ES6 Arrow Functions

## Purpose
Automate the conversion of standard ES5 function declarations to ES6 arrow syntax within a provided code snippet.

## Constraints
- Do NOT modify functions that utilize the `this` keyword.
- Do NOT alter functions that use the `arguments` object.
- Leave asynchronous functions (`async function`) unchanged.

## Inputs
- `{{source_code}}`: String (Required. Valid JavaScript code block).

## Execution Steps
1. Parse the `{{source_code}}` to identify all standard function declarations.
2. Check each function body for occurrences of the string `this` or `arguments`.
3. If either token is found, skip the function.
4. Convert eligible functions to `const functionName = (params) => { body };` format.
5. Maintain original variable naming and indentation.

## Outputs
Return a JSON object:
{
  "status": "success" | "no_change_needed" | "error",
  "modified_code": "string",
  "changes_made": integer,
  "error_message": "string or null"
}
```

Use code with caution.

To help tailor this template, could you tell me:

- What **specific task** or **programming language** is your coding agent targeting?
- What **agent framework** are you using (e.g., LangChain, AutoGen, CrewAI, or a custom build)?
- How will the agent **trigger** this specific skill? \[[1](https://algochan0310.medium.com/decoding-knowledge-graphs-llms-and-agents-a-simple-guide-part-1-838ceb8d88a4), [2](https://medium.com/@AIbatros/microsoft-agent-framework-designing-your-first-ai-agent-8453b749b55d)]

I can draft a ready-to-use markdown configuration file based on your setup.

- [link](https://www.marketcalls.in/machine-learning/how-to-build-ai-agents-lessons-from-anthropic.html)\
  How to Build AI Agents: Lessons from Anthropic\
  Feb 14, 2025 — AI agents need to operate autonomously but within controlled limits. They should be capable of executing multiple steps dynamicall...\
  \
  \
  Marketcalls
- [link](https://autohand.ai/docs/working-with-autohand-code/agent-skills)\
  Agent Skills - Autohand Docs\
  Creating world-class Skills 1. Clear purpose State exactly what the skill does and when to use it: 2. Concrete examples Show exact...\
  \
  \
  Autohand AI
- [link](https://itecsonline.com/post/codex-cli-agent-skills-guide-install-usage-cross-platform-resources-2026)\
  Codex CLI Agent Skills | 2026 Install and Usage Guide\
  Feb 13, 2026 — It ( The description field ) controls when the agent decides to invoke the skill. Write descriptions with clear scope and explicit...\
  \
  \
  ITECS

Show all
