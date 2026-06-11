<!-- on 3 am i feel im sweating whatever... wo ac. and i should not use ac to mitigate it. -->

# what features does zed lack compared w vscode

Compared to Microsoft's **VS Code**, the Rust-based **Zed editor** intentionally trades a massive feature catalog for blazing-fast speed and minimalism. While Zed has evolved rapidly, it still lacks <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">several core functionalities, mature ecosystems, and advanced workflows</mark> that keep many developers anchored to VS Code. \[[1](https://www.reddit.com/r/vscode/comments/1thib4i/i%5Fstill%5Fdont%5Funderstand%5Fthe%5Fhype%5Faround%5Fzed%5Fover/), [2](https://zed.dev/compare/vscode), [3](https://www.alexhyett.com/newsletter/switching-to-zed-for-coding/), [4](https://giselles.ai/blog/how-claude-code-makes-zed-even-better), [5](https://en.linuxadictos.com/Zed-vs-Visual-Studio-Code%3A-AI-Performance-and-Collaboration.html)]

Here is a breakdown of the major features and capabilities Zed lacks compared to VS Code:

### 🌐 1. A Massive Extension Ecosystem \[[1](https://blog.openreplay.com/exploring-zed-open-source-editor-modern-devs/)]

- **WASM Sandboxing Bottleneck**: Zed utilizes a WebAssembly (WASM) sandboxing model for extensions. While this prevents extension-induced editor crashes, it means **VS Code extensions cannot be directly ported over**. Extension creators must rewrite them entirely for Zed.
- **Missing Specialized Tools**: VS Code acts like an entire operating system for developers, offering extensions to manage Kubernetes clusters, browse databases, interact with AWS, or run Docker containers directly in the sidebar. Zed lacks these peripheral, non-text integrations.
- **Niche Language Support**: While Zed supports major languages (Rust, Python, TS, Go) exceptionally well out of the box, less popular or legacy languages often lack fully refined language servers or custom configuration options. \[[1](https://tech-insider.org/zed-vs-vscode-2026/), [2](https://www.reddit.com/r/linuxquestions/comments/1irms4u/what%5Fis%5Fyour%5Fopinion%5Fon%5Fzed%5Fvs%5Fvscodium%5Fif%5Fyou/), [3](https://afzalimdad9.medium.com/why-i-chose-zed-over-visual-studio-code-cc54f8f20487), [4](https://www.reddit.com/r/vscode/comments/1thib4i/i%5Fstill%5Fdont%5Funderstand%5Fthe%5Fhype%5Faround%5Fzed%5Fover/), [5](https://dirkstrauss.com/10-best-visual-studio-code-extensions-for-increased-productivity/)]

### 🐜 2. Advanced Debugging and Testing UI

- **Rudimentary Debugging**: VS Code features a mature, highly visual debugger with conditional breakpoints, call stack tracking, variable watch windows, and deep multi-language support. Zed's debugging support is much more limited and less visual.
- **Lack of Visual Test Runners**: VS Code has a dedicated Test Explorer UI that displays test suites natively, allowing you to run individual tests via a single click. In Zed, you generally still have to run and parse test suites via the command line or custom JSON tasks. \[[1](https://en.linuxadictos.com/Zed-vs-Visual-Studio-Code%3A-AI-Performance-and-Collaboration.html), [2](https://www.alexhyett.com/newsletter/switching-to-zed-for-coding/), [3](https://pieces.app/blog/sublime-text-vs-vs-code-which-code-editor-best-suits-your-project), [4](https://blog.openreplay.com/boost-your-coding-effiency/), [5](https://medium.com/@minuraashensamaramanna/vs-code-deep-dive-how-the-worlds-most-popular-editor-is-built-a66a9d451e66)]

### 🌿 3. Advanced Git Management

- **No Side-by-Side Diff Panels**: Zed features built-in Git gutters and basic inline blame tools, but it lacks a powerful, dedicated side-by-side graphical diff viewer.
- **Limited Git Control Panel**: VS Code allows for comprehensive repository orchestration (staging specific lines, writing multi-line commit messages with linting rules, resolving merge conflicts visually) entirely through the UI. Zed users often have to jump back to the terminal or an external tool for advanced Git staging and commits. \[[1](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/), [2](https://en.linuxadictos.com/Zed-vs-Visual-Studio-Code%3A-AI-Performance-and-Collaboration.html), [3](https://www.reddit.com/r/ZedEditor/comments/1p7aw3c/goodbye%5Fvs%5Fcode%5Fhello%5Fzed/), [4](https://www.xda-developers.com/if-programmer-like-vs-code/)]

### 🤖 4. Mature AI Integration and Polish \[[1](https://tech-insider.org/zed-vs-vscode-2026/)]

- **Rough AI UX**: Even though Zed supports popular LLMs (like Claude Code, Gemini, and GitHub Copilot), its "Assistant Panel" UI lacks the deep, seamless polish found in VS Code or specialized forks like Cursor.
- **Limited Agent Features**: Slash commands, custom AI agent tool completions, and automated workflows are still relatively constrained and rough around the edges in Zed compared to the deeply integrated GitHub Copilot ecosystem. \[[1](https://www.reddit.com/r/ZedEditor/comments/1tgcahd/how%5Fdecent%5Fis%5Fzed%5Fas%5Fa%5Fvscode%5Freplacement/), [2](https://www.instagram.com/reel/DVv32gsiX00/), [3](https://www.reddit.com/r/ZedEditor/comments/1skq2n9/switching%5Ffrom%5Fvs%5Fcode%5Fcopilot%5Fto%5Fzed/)]

### 💻 5. Deep Customization & General Polish

- **Strictly Code-Focused**: VS Code can be customized heavily with visual assets, custom file tree folder icons, custom status bars, and complex window layouts. Zed focuses entirely on a hyper-minimal text editor grid.
- **Task Automation**: VS Code uses robust `tasks.json` and launch configurations that dynamic variables automatically hook into. Zed's custom tasks are growing but can still occasionally fail to properly update environment variables (like `$ZED_FILENAME`) when you switch active tabs. \[[1](https://www.reddit.com/r/vscode/comments/1thib4i/i%5Fstill%5Fdont%5Funderstand%5Fthe%5Fhype%5Faround%5Fzed%5Fover/), [2](https://github.com/zed-industries/zed/discussions/6575), [3](https://medium.com/@daniele.dandreti/why-i-switched-from-vs-code-to-zed-c59affd8ea87), [4](https://en.linuxadictos.com/Zed-vs-Visual-Studio-Code%3A-AI-Performance-and-Collaboration.html), [5](https://www.linkedin.com/posts/khuzama98%5Fvs-code-vs-zed-ide-a-developers-perspective-activity-7348337942219608066-F0Fg)]

To dive deeper into Zed's current development status, you can review the latest updates on the [Zed Comparison Hub](https://zed.dev/compare/vscode) or track their missing features directly via the community [Zed GitHub Discussion Board](https://github.com/zed-industries/zed/discussions/6575). \[[1](https://zed.dev/compare/vscode), [2](https://github.com/zed-industries/zed/discussions/6575)]

Are there **specific languages** or **workflows** (such as remote SSH or web development) that you rely on? I can let you know if Zed is ready to handle them yet.

- [link](https://www.reddit.com/r/ZedEditor/comments/1tgcahd/how%5Fdecent%5Fis%5Fzed%5Fas%5Fa%5Fvscode%5Freplacement/)\
  How decent is Zed as a VSCode replacement? : r/ZedEditor - Reddit\
  May 18, 2026 — Comments Section \* codehz. • 23d ago. zed's 3rd agent ui (aka ACP ) is not even close to vscode... it looks greet until you actual...\
  Reddit·r/ZedEditor
- [link](https://www.reddit.com/r/ZedEditor/comments/1skq2n9/switching%5Ffrom%5Fvs%5Fcode%5Fcopilot%5Fto%5Fzed/)\
  Switching from VS Code (Copilot) to Zed : r/ZedEditor - Reddit\
  Apr 14, 2026 — It works better than vscode. Clean and fast. I use it with copilot as my main editor like many here. ... Really? Which way you are...\
  Reddit·r/ZedEditor
- [link](https://tenthousandmeters.com/blog/i-switched-from-vscode-to-zed/)\
  I switched from VSCode to Zed\
  Jan 3, 2026 — Zed is now my go-to IDE for Python and Go and my first choice as a general-purpose editor. It's fast, stable, familiar, feature-ri...\
  TenThousandMeters.com

Show all

## You said: all requested features

While the comparison highlights specific gaps between the two editors, tracking community feature requests provides a concrete look at what Zed users are actively asking for. Based on the [Zed GitHub Issues Tracker](https://github.com/zed-industries/zed/issues), official roadmap items, and community discussions, here is the comprehensive list of the most highly requested features for Zed: \[[1](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/), [2](https://zed.dev/roadmap), [3](https://github.com/zed-industries/zed/discussions/categories/feature-requests)]

### 🛠️ 1. Core Editor Parity & Utilities

- **Jupyter Notebook Support (`.ipynb`)**: Native rendering, execution, and cell management for data science workflows.
- **Full Remote Development (SSH parity)**: Robust remote architecture mirroring VS Code's seamlessly synced server environments.
- **Devcontainers Support**: Seamless development inside Docker containers with forwarded SSH and GPG keys.
- **GUI Settings Editor**: A visual user interface to toggle configurations instead of hunting through raw `settings.json` files.
- **Settings Sync**: A built-in cloud solution to automatically sync settings, themes, and keymaps across multiple machines.
- **Local History / File Timelines**: Automatic local file snapshots to recover unsaved changes without relying strictly on Git commits. \[[1](https://github.com/zed-industries/zed/issues/5393), [2](https://dev.to/numbpill3d/why-zed-is-replacing-vs-code-in-my-ai-augmented-workflow-2m9), [3](https://zed.dev/roadmap), [4](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [5](https://github.com/zed-industries/extensions/pulls)]

### 🎨 2. UI Polish & Theme Flexibility

- **Rainbow Brackets**: Visual bracket-pair colorization to make nested code blocks easily scannable (historically one of the all-time most upvoted cosmetic items).
- **Configurable UI Padding**: Options to tightly compress structural padding, list heights, and icon spacings across the editor grid.
- **Custom File Icons**: Fully custom, multi-colored file/folder icon themes matching setups like `vscode-icons`.
- **Flexible Panel Layouts**: Freedom to stack sidebars vertically (e.g., placing the Project Panel directly above the Outline View).
- **RTL (Right-to-Left) Text Support**: Correct native rendering and cursor behaviors for languages like Arabic and Hebrew. \[[1](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/), [3](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [4](https://github.com/zed-industries/extensions/pulls), [5](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [6](https://github.com/zed-industries/zed/issues/5393)]

### 🤖 3. AI & Agent Evolution

- **Plan Mode for AI Agents**: Allowing the Zed Agent to outline complex architectural blueprints and review strategies _before_ outputting raw file modifications. \[[1](https://zed.dev/roadmap)]
- **Saved Prompts & Repositories**: A dedicated internal template database to store, tweak, and quickly run frequent prompts. \[[1](https://github.com/zed-industries/zed/discussions/56153)]
- **Enhanced ACP (Agent Client Protocol) Utilities**: Deeper command completions, explicit permission screens for command-line executions, and expansion tools like `/compact` or `/simplify`. \[[1](https://www.reddit.com/r/ZedEditor/comments/1tgcahd/how%5Fdecent%5Fis%5Fzed%5Fas%5Fa%5Fvscode%5Freplacement/), [2](https://medium.com/@vignarajj/why-zed-ide-outshines-vs-code-cursor-and-others-a-developers-guide-7af334fa4392), [3](https://github.com/zed-industries/zed/discussions/10375), [4](https://dev.to/yash37158/why-i-shifted-from-vs-code-to-zed-on-mac-a-developers-story-38jp), [5](https://news.ycombinator.com/item?id=45116688)]

### 🐛 4. Git & Code Verification

- **Side-by-Side Merge Conflict UI**: A specialized 3-way visual resolution view for dealing with complex merge splits.
- **Graphical Test Explorers**: Visual trees to trigger, watch, and debug specific unit testing parameters inside the workspace.
- **Persistent Vim/Helix State**: Keeping Vim registers, macro caches, and session markers intact on disk between application restarts. \[[1](https://github.com/zed-industries/zed/issues), [2](https://www.alexhyett.com/newsletter/switching-to-zed-for-coding/), [3](https://zed.dev/blog/vim-2025)]

You can track live progression or upvote these requests directly on the official [Zed Interactive Roadmap Hub](https://zed.dev/roadmap).

If you want, let me know **which of these features** is a dealbreaker for your setup, and I can tell you if there are active workarounds or experimental flags available to enable them right now!

- [link](https://www.reddit.com/r/ZedEditor/comments/1tgcahd/how%5Fdecent%5Fis%5Fzed%5Fas%5Fa%5Fvscode%5Freplacement/)\
  How decent is Zed as a VSCode replacement? : r/ZedEditor - Reddit\
  May 18, 2026 — Comments Section \* codehz. • 23d ago. zed's 3rd agent ui (aka ACP ) is not even close to vscode... it looks greet until you actual...\
  Reddit·r/ZedEditor
- [link](https://www.alexhyett.com/newsletter/switching-to-zed-for-coding/)\
  Switching to Zed for coding | Alex Hyett\
  May 25, 2025 — Bad points # The main point against Zed is it hasn't got the extensive plugin collection that VS Code has. I installed all the ext...\
  Alex Hyett
- [link](https://dev.to/numbpill3d/why-zed-is-replacing-vs-code-in-my-ai-augmented-workflow-2m9)\
  Why Zed Is Replacing VS Code in My AI-Augmented Workflow\
  May 23, 2026 — This is the obvious one. If you need remote SSH development with full IntelliSense, VS Code's Remote Development extension suite h...\
  DEV Community

Show all

## You said: all highly requested features like vscode timeline

The **VS Code Timeline view** tracks two critical things: a complete **Git Commit History** for the active file, and a **Local File History** (an automatic time-capsule tracking every file save independently of Git). \[[1](https://www.youtube.com/watch?v=68mvuBXTsQ0), [2](https://www.youtube.com/watch?v=xNPb0CL%5Fuig\&t=3), [3](https://www.youtube.com/watch?v=WalC2j0INDQ)]

If you are looking for this exact functionality in Zed, the community has heavily requested identical feature parity. Here is the breakdown of what exists, what is missing, and what users are demanding: \[[1](https://github.com/zed-industries/zed/discussions/54484), [2](https://github.com/zed-industries/zed/issues/15045)]

### 🐙 What Zed Has Now: "View File History" (Git Only) \[[1](https://www.youtube.com/watch?v=68mvuBXTsQ0), [2](https://www.youtube.com/watch?v=WalC2j0INDQ)]

Zed does have a built-in feature to replicate the _Git part_ of VS Code's timeline. \[[1](https://zed.dev/docs/git), [2](https://www.youtube.com/watch?v=WalC2j0INDQ)]

- **How it works:** You can right-click a file tab or use the command palette to select [View File History](https://zed.dev/docs/git).
- **The UI:** It brings up a list of previous Git commits, complete with timestamps, author names, and messages. Selecting an entry opens a side-by-side diff view of that commit.
- **The Gap:** It _only_ tracks code that you have actively committed to Git. \[[1](https://zed.dev/docs/git), [2](https://github.com/zed-industries/zed/discussions/54484)]

### ⏳ The Massive Gap: No Local File History / Persistent Undo

The most requested, non-Git "Timeline" features center around recovering lost work or tracking changes between saves. The community has highly active tracker requests for these exact issues: \[[1](https://www.reddit.com/r/ZedEditor/comments/1fm23og/how%5Fdo%5Fyou%5Fhandle%5Fthe%5Fabsence%5Fof%5Fpersistent/), [2](https://github.com/zed-industries/zed/discussions/54484)]

- **[Local History for Files (Issue #15045)](https://github.com/zed-industries/zed/issues/15045)**: This is the exact equivalent of VS Code's local timeline. Users want Zed to automatically cache local snapshots of a file every time it is modified or saved, allowing you to diff and restore code if you accidentally overwrite a file, mess up a merge, or run a destructive terminal command before committing. \[[1](https://www.youtube.com/watch?v=68mvuBXTsQ0), [2](https://github.com/zed-industries/zed/issues/15045), [3](https://github.com/zed-industries/zed/discussions/54484)]
- **Persistent Change/Undo History ([Reddit Discussions](https://www.reddit.com/r/ZedEditor/comments/1fm23og/how%5Fdo%5Fyou%5Fhandle%5Fthe%5Fabsence%5Fof%5Fpersistent/))**: Currently in Zed, if you close a tab or restart the editor, your undo tree (`Cmd + Z`) is wiped clean. Developers are heavily requesting that Zed serialize the change tree to disk so undo/redo history survives app restarts or tab closures. \[, [2](https://www.reddit.com/r/ZedEditor/comments/1fm23og/how%5Fdo%5Fyou%5Fhandle%5Fthe%5Fabsence%5Fof%5Fpersistent/)]

### 📈 Other "Time-Travel" & UI Features Highly Requested Alongside It

If you look at the top-voted tracking items adjacent to timeline/history data on the [Zed GitHub Feature Requests Category](https://github.com/zed-industries/zed/discussions/categories/feature-requests), the community is heavily demanding: \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests)]

- **Visual Test Timeline/Explorer**: A graphical interface to see historical test run outcomes natively in the editor sidebar, instead of reading past terminal logs.
- **Local Workspace History**: An overall timeline tracking file deletions and folder renames, allowing you to right-click a directory to undelete an accidentally removed file (like IntelliJ's Local History). \[[1](https://github.com/zed-industries/zed/discussions/24004), [2](https://github.com/Py-mon/Bulk-Vscode-Restore)]
- **Local History Settings Exclusion**: The ability to ignore specific heavy files or directories (like vendor or node\_modules packages) from local tracking logs to keep the editor hyper-fast. \[[1](https://marketplace.visualstudio.com/items?itemName=xpo.local-history)]

Are you hoping to use a timeline view primarily to **recover lost code blocks** after a crash/restart, or do you use it as a visual way to **browse historical Git blame diffs**? I can give you alternative workarounds depending on your goal! \[[1](https://www.gocodeo.com/post/debugging-made-easy-vscode-extensions-built-for-real-time-web-issue-diagnosis)]

- [link](https://github.com/zed-industries/zed/discussions/24004)\
  Local History for Files #24004 - zed-industries zed - GitHub\
  Dec 26, 2025 — Describe the feature. I would like to suggest an enhancement that I'm sure could benefit many users: the addition of a local histo...\
  GitHub
- [link](https://www.youtube.com/watch?v=68mvuBXTsQ0)\
  VS Code tips — Local history\
  May 6, 2022 — local history in VS Code lets you see all of the changes that have been made to a file now the nice thing about this is that it do...\
  2:08\
  YouTube·Code 2020
- [link](https://github.com/zed-industries/zed/discussions/54484)\
  Add support for local file history for modified files, not just Git history\
  Summary. Zed currently lets users inspect Git-tracked changes, which is very useful. However, I could not find a way to view the l...\
  GitHub

Show all

## You said: all highly requested features

Based on the active [Zed GitHub Feature Requests Tracker](https://github.com/zed-industries/zed/discussions/categories/feature-requests), official development roadmaps, and developer consensus, here is the complete, compiled list of the most highly requested features for the Zed editor. \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [2](https://zed.dev/roadmap)]

### 🌐 1. High-Priority Infrastructure & Portability

- **Settings Sync (Discussion #312)**: Cloud synchronization to share themes, configurations, and keymaps natively across multiple machines.
- **GUI Settings Editor**: A visual user interface to toggle config settings instead of strictly formatting raw `settings.json` files.
- **Deep Remote Development (SSH Server)**: Fully sandboxed remote architecture matching VS Code's seamlessly synchronized server environments.
- **Full Devcontainers Support**: Smooth orchestration inside Docker containers with forwarded keys and terminal permissions.
- **Zed on the Web**: The ability to access workspaces and codebases entirely from a web browser on any device. \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [2](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [3](https://www.reddit.com/r/ZedEditor/comments/1qo31l2/confused%5Fby%5Fthe%5Froadmap%5Fversus%5Freleases/), [5](https://zed.dev/roadmap)]

### ⏳ 2. File Time-Capsule & Local History

- **[Local History / Timeline (Issue #15045)](https://github.com/zed-industries/zed/issues/15045)**: Periodic local automated file snapshots allowing developers to track and restore changes independently of Git commits.
- **Persistent Undo/Redo States**: Serializing the undo tree to the hard drive so your `Cmd + Z` cache survives an editor restart or a closed tab. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/)]
- **Local Workspace History**: An overall timeline tracking file deletions and directory renames to easily restore an accidentally deleted folder. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/)]

### 📊 3. Advanced Language Environments & Workflow Tools

- **Native Jupyter Notebooks (`.ipynb`) (Discussion #233)**: Complete data science rendering, visual graph plots, and interactive Python cells inside the main grid.
- **Graphical Test Explorers**: Dedicated sidebars to visually group, play, pause, and debug individual unit test trees.
- **TODO / Bookmark Managers**: Visual annotation trackers to scrape the project directory for `// TODO` or `// FIXME` tags. \[[1](https://zed.dev/roadmap), [3](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [4](https://www.reddit.com/r/ZedEditor/new/)]

### 🐙 4. Expanded Git Operations

- **Side-by-Side Merge Conflict Resolution (Discussion #41)**: A robust 3-way layout to split and selectively stitch incoming, current, and final code merges. \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests)]
- **Pull Request Review Panel**: A dedicated workflow layer to review, write comments on, and merge PRs directly inside the editor layout. \[[1](https://github.com/zed-industries/zed/discussions/34759)]
- **Full Code-Diff Comparisons**: A built-in utility allowing users to select two unrelated local files and highlight their exact differences side-by-side. \[[1](https://github.com/zed-industries/zed/discussions/15586)]

### 🤖 5. AI Evolution & Next-Gen Agents

- **Plan Mode**: Forcing the [Zed AI Agent](https://zed.dev/roadmap) to write a text outline explaining its logic and architectural adjustments before touching production files.
- **Custom Models for Claude Agent**: The option to run localized or fine-tuned system configurations under the automated agent umbrella.
- **Saved / Templated Prompt Repositories**: A database to save and quickly fire custom, recurring system prompts or code-review guidelines. \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [3](https://zed.dev/roadmap), [4](https://medium.com/@adnanmasood/agentic-software-development-the-complete-playbook-bounded-tasks-clean-context-and-ruthless-4d8c4cf9ab37)]

### 🎨 6. UI Customization & Polish

- **[Rainbow Brackets](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/)**: Contextual color matching for deep nested code brackets to drastically improve scannability.
- **Flexible Sidebar Layouts**: Structural freedom to place side panels above or below one another instead of locking them to one simple column layout.
- **Colorful File Icons**: Upgraded aesthetic file trees to map iconic glyphs alongside folders to ease visual identification. \[[1](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/), [2](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [3](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/)]

You can actively follow or upvote these tasks on the Zed Live Product Roadmap or review their release cadence in the [Zed Stable Releases Forum](https://zed.dev/releases/stable). \[[1](https://zed.dev/roadmap), [2](https://zed.dev/releases/stable)]

If you are thinking about shifting your stack, let me know **which language or development ecosystem** (e.g., Python, Next.js, C++) you use most. I can tell you exactly which highly requested features might impact your day-to-day workflow!

- [link](https://zed.dev/roadmap)\
  Zed — Roadmap\
  Zed — Roadmap. Roadmap. Keep up with what the Zed team is building next. Contribute to Zed Join Us. Currently Working On6. Instant...\
  Zed
- [link](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/)\
  What Zed's Most-Voted Feature Says About Developer Priorities\
  Nov 20, 2025 — \* ZedEditor features like rainbow brackets. \* Top features of Zed for developers. \* Best plugins to enhance Zed functionality. \* T...\
  Reddit·r/ZedEditor
- [link](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/)\
  What are your most anticipated Zed features? : r/ZedEditor - Reddit\
  Oct 1, 2024 — Fix error/warning underlines which is interrupted and blurry on lower resolutions. Refined UI. I don't think everything should cha...\
  Reddit·r/ZedEditor

Show all

# does zed have vscode timeline feature

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, the Zed editor does not have a dedicated local file timeline feature</span></strong></mark> like Visual Studio Code. \[[1](https://github.com/zed-industries/zed/discussions/54484), [2](https://github.com/zed-industries/zed/discussions/24673)]

### How Git History Differs

Zed provides basic **Git history tracking**. You can view committed file histories by right-clicking a file or tab and selecting **View File History**. However, it completely lacks VS Code's local timeline capabilities: \[[1](https://zed.dev/docs/git), [2](https://github.com/zed-industries/zed/issues/15045), [3](https://github.com/zed-industries/zed/discussions/54484), [4](https://www.reddit.com/r/ZedEditor/comments/1reti5l/are%5Fthey%5Fprioritising%5Fonly%5Fai%5Ffeatures/)]

- It **cannot track uncommitted changes** or local saves outside of Git.
- It **does not persist a local undo/history buffer** once an editor tab is closed. \[[1](https://github.com/zed-industries/zed/discussions/16485), [2](https://www.tiktok.com/@vscode/video/7514397542457642271), [3](https://github.com/zed-industries/zed/discussions/54484), [4](https://github.com/zed-industries/zed/issues/15045)]

### Feature Status

This remains a highly requested feature by developers migrating from VS Code. Multiple active community discussions and feature requests, such as [Zed GitHub Issue #15045](https://github.com/zed-industries/zed/issues/15045) and [Discussion #24004](https://github.com/zed-industries/zed/discussions/24004), are tracking the implementation of a true "Local History" or "Timeline" alternative. Until it is officially added, your only fallback in Zed is to make frequent Git commits to protect your code state. \[[1](https://github.com/zed-industries/zed/discussions/26770), [2](https://github.com/zed-industries/zed/issues/15045), [3](https://github.com/zed-industries/zed/discussions/24004), [4](https://github.com/zed-industries/zed/discussions/54484), [5](https://github.com/zed-industries/zed/discussions/23793)]

If you are thinking about moving to Zed, I can help you check for other specific features:

- Are you looking for specific **Git integration** behaviors?

- Do you rely on certain **VS Code extensions**?

- Is **multi-user collaboration** important for your workflow?

- [link](https://github.com/zed-industries/zed/discussions/26770)\
  Side-by-side Git View · zed-industries zed · Discussion #26770\
  Jun 12, 2025 — on Apr 30, 2025. ... This feature would be a great addition. Coming from VSCode, this is something that I miss a lot... Beta Was t...\
  GitHub

- [link](https://github.com/zed-industries/zed/discussions/24004)\
  Local History for Files #24004 - zed-industries zed - GitHub\
  Dec 26, 2025 — on Jul 28, 2024. ... I would say lack of local history is the last reason why I cannot fully change my IDEA to Zed. I could reconc...\
  GitHub

- [link](https://github.com/zed-industries/zed/discussions/23793)\
  Intellij like "Compare with Git Branch/Revision and local history" ...\
  Dec 9, 2025 — on Dec 9, 2025. ... The git history/diff features in Zed are pretty limited. I have been trying it out recently - I use VSCode and...\
  GitHub

Show all

## You said: what are the highly requested features

As Zed actively scales its ecosystem, its community tracking channels on the [Zed GitHub Issues Page](https://github.com/zed-industries/zed/issues/5393) and the [Official Zed Roadmap](https://zed.dev/roadmap) highlight several highly requested features: \[[1](https://github.com/zed-industries/zed/issues/5393), [2](https://zed.dev/roadmap), [3](https://www.reddit.com/r/ZedEditor/comments/1qo31l2/confused%5Fby%5Fthe%5Froadmap%5Fversus%5Freleases/)]

### 1. Quality of Life & Visual Parity

- **Rainbow Brackets**: Surprisingly, this cosmetic request for colorful matching brackets historically tracking as the **highest-voted feature request** by a wide margin.
- **Full Settings UI**: A graphical interface for preferences, as users still heavily rely on editing a raw `settings.json` file.
- **Settings Sync**: Built-in cloud or profile synchronization across multiple machines. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [2](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/), [3](https://zed.dev/blog/settings-ui)]

### 2. Workspace & Window Management

- **Multi-Window Support**: Full capability to copy, paste, and seamlessly manage project workspace states across multiple detached windows.
- **Advanced Code Folding**: Better syntax tree folding, particularly for markdown headings and expansive code blocks.
- **Layout Freedom**: The ability to stack sidebar elements vertically or rearrange secondary panels freely. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [2](https://github.com/zed-industries/zed/issues/5393), [3](https://andrewlock.net/trying-out-the-zed-editor-on-windows-for-dotnet-and-markdown/), [4](https://github.com/zed-industries/zed/discussions/6605), [5](https://phoenixnap.com/kb/vim-keybindings)]

### 3. Extended Language & Framework Support

- **First-Class Vue & Flutter Support**: Robust, optimized ecosystem tooling to match the speed of standard languages like Rust and TypeScript.
- **SCSS & Tailored Web Ecosystems**: Enhanced, native stylesheet extensions that eliminate reliance on unstable third-party LSP plugins. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [2](https://github.com/vuejs/core/discussions/9186)]

### 4. Git & Workflow Enhancements

- **3-Way Merge & Side-by-Side Conflicts**: Visual UI tools to resolve complex Git merge conflicts side-by-side.
- **Local History / Timeline**: The local backup history tracking feature (similar to VS Code) to recover uncommitted code changes. \[[1](https://github.com/zed-industries/zed/issues/5393), [2](https://github.com/zed-industries/zed/issues), [3](https://github.com/zed-industries/zed/discussions/54484)]

### What's Currently in the Pipeline?

According to the Zed Roadmap, the core engineering team is actively prioritizing **Instant Collaboration Links**, **Asynchronous Branch Work**, **Plan Mode** (for AI agents), and a lightweight browser variant called **Zed on the Web**. \[[1](https://zed.dev/roadmap)]

Would you like to know how to track or **upvote** any of these specific features on GitHub? Or are you looking for a **plugin workaround** for one of them today? \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [2](https://github.com/vuejs/core/discussions/9186)]

- [link](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/)\
  What are your most anticipated Zed features? : r/ZedEditor - Reddit\
  Sep 30, 2024 — Oh boy, there's a lot: \* Better git integration: repository recognition in subfolders, diff view, graph... \* Debugger. \* Better fo...\
  Reddit·r/ZedEditor
- [link](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/)\
  What Zed's Most-Voted Feature Says About Developer Priorities\
  Nov 20, 2025 — I recently got a notification asking whether a Zed issue I had commented on is still valid (https://github.com/zed-industries/zed/\
  Reddit·r/ZedEditor
- [link](https://andrewlock.net/trying-out-the-zed-editor-on-windows-for-dotnet-and-markdown/)\
  Trying out the Zed editor on Windows for .NET and Markdown\
  Dec 9, 2025 — Shortcuts like Ctrl + B to bold the current word. This has been requested for Zed, but doesn't currently exist. "Code folding" for...\
  Andrew Lock

Show all

## You said: all highly requested features

Here is the comprehensive list of the most upvoted and highly requested features tracking on the [Zed GitHub Issues Tracker](https://github.com/zed-industries/zed/issues/5393) and community [Feature Request Discussions](https://github.com/zed-industries/zed/discussions/categories/feature-requests):

### 🔍 Editor Search & Navigation

- **Telescope-Style Search Box**: A highly flexible, fuzzy-finding search layout similar to Neovim's popular Telescope plugin.
- **Flash.nvim / EasyMotion style search**: Fast, visual jump-to-char navigation within an active document using keyboard shortcuts.
- **Enhanced Highlight Keywords**: Built-in visual identifiers and dedicated tracking panels for `TODO`, `FIXME`, and `BUG` keywords in comments. \[[1](https://github.com/zed-industries/zed/issues/5393), [2](https://github.com/zed-industries/zed/discussions/40088), [3](https://aborg.dev/blog/zed-is-future/), [4](https://aborg.dev/blog/2025/zed-navigation/), [5](https://github.com/zed-industries/zed/issues/14602)]

### 💻 Workspace & Window Management

- **Multi-Monitor Windows**: Full support for spawning detached secondary editor windows on multiple monitors. \[[1](https://github.com/zed-industries/zed/issues/5393)]
- **VS Code-style Activity Bar**: A structured, dedicated icon bar on the far edge to quickly toggle panels like extensions, search, and version control. \[[1](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [2](https://www.meje.dev/blog/tried-zed-on-linux), [3](https://github.com/zed-industries/zed/discussions/47593)]
- **Full UI Customization**: Granular settings to completely hide or adjust padding on toolbar icons, single-file tab bars, and pane splitters. \[[1](https://github.com/zed-industries/zed/issues/14602)]
- **Tab-Drags to New Windows**: The ability to click and drag an open file tab outside the main application window to instantly spin up a new window instance. \[[1](https://github.com/zed-industries/zed/issues/5393)]

### 🛠️ Core IDE & Execution Capabilities

- **Integrated Test Runner**: A native testing panel and UI indicators to view and execute unit tests inline.
- **Native Graphical Settings UI**: A visual preferences menu to adjust options without manually editing the raw JSON file.
- **Sandboxed Dev Containers**: Full, official support and stabilization for running isolated developmental container configurations. \[[1](https://www.reddit.com/r/ZedEditor/comments/1ft5x37/what%5Fare%5Fyour%5Fmost%5Fanticipated%5Fzed%5Ffeatures/), [2](https://github.com/zed-industries/zed/issues/5393), [3](https://github.com/zed-industries/zed/discussions/categories/feature-requests), [4](https://www.reddit.com/r/ZedEditor/comments/1qo31l2/confused%5Fby%5Fthe%5Froadmap%5Fversus%5Freleases/)]

### 📊 Git & Conflict Resolution

- **Side-by-Side Git Merge UI**: A visual layout for resolving code conflicts across baseline, incoming, and current file states.
- **Staged vs. Unstaged Diffs**: Granular staging control UI inside the primary version control interface.
- **Local File Timeline / History**: A persistent local file backup history buffer to catch uncommitted saves outside of Git tracking. \[[1](https://github.com/zed-industries/zed/issues), [2](https://github.com/zed-industries/zed/issues/5393)]

### 🎨 Visuals & UI Polish

- **Rainbow Brackets**: Native, multi-colored bracket matching to visually parse heavily nested code blocks.
- **Smooth & Animated Cursor**: Fluid, game-engine-style animated cursor movements across lines.
- **Code Completion Icons**: Clear visual type icons (e.g., functions, variables, classes) next to code dropdown suggestions. \[[1](https://www.reddit.com/r/ZedEditor/comments/1p20560/what%5Fzeds%5Fmostvoted%5Ffeature%5Fsays%5Fabout%5Fdeveloper/), [2](https://github.com/zed-industries/zed/issues/5393), [3](https://zed.dev/docs/extensions/languages), [4](https://www.tabnine.com/blog/top-vim-plugins/)]

### 🌐 Extensions & Ecosystem

- **Webview API via Extensions**: The ability for plugins to render interactive markdown previews, custom dashboards, and mini web targets.
- **Custom Inline Completion Providers**: API support allowing users to plug third-party open-source AI autocomplete tools right into the active line view. \[[1](https://github.com/zed-industries/zed/issues/5393)]

Are there any particular features from this list you would like to look up instructions for, or would you like to see what the [Official Zed Roadmap](https://zed.dev/roadmap) has planned to release next?

- [link](https://github.com/zed-industries/zed/discussions/categories/feature-requests)\
  zed-industries zed Feature Requests · Discussions - GitHub\
  Aug 13, 2025 — Discussions \* 💡 Can the bottom deck be vertical on the left side? ... \* 💡 Buttons on the bottom bar are too small and often diff...\
  GitHub
- [link](https://github.com/zed-industries/zed/issues/14602)\
  Feature Request: Make UI more customizable #14602 - GitHub\
  Jul 16, 2024 — Hide forward/back toolbar icons. Hide tab bar completely (when single file opened) Hide "new" toolbar button. Hide "split pane" to...\
  GitHub
- [link](https://github.com/zed-industries/zed/issues)\
  Issues · zed-industries/zed - GitHub\
  Zed agent ignores 'tools' bool in custom openai-api compatible model server config. state:needs triage. Status: Open. Bug. #58988 ...\
  GitHub

Show all