# what do ppl do to setup vim

October 21, 2026

When people set up **Vim** (or its modern, highly popular fork, **Neovim**), they generally follow a multi-step progression to transform it from a bare-bones text editor into a powerful, IDE-like development environment. [](https://www.jakewiesler.com/blog/getting-started-with-vim)

Here is exactly what people do to set up Vim, broken down by the standard workflow.

---

### 1\. Create a Configuration File

Everything in Vim starts with a configuration file. This file tells Vim exactly how to behave every time it opens. [](https://www.youtube.com/watch?v=zE0hno3vV9M&t=20)

* **For Vanilla Vim:** People create a hidden file named `.vimrc` in their user home directory (`~/.vimrc`).
* **For Neovim:** People use Lua or Vimscript to create an `init.lua` or `init.vim` file inside `~/.config/nvim/`. [](https://www.youtube.com/watch?v=6-YelMGJpok&t=1)

### 2\. Add Essential Quality-of-Life Settings

Out of the box, Vim can feel restrictive. The very first lines people add to their configuration file usually tweak the UI and basic behavior: [](https://www.youtube.com/watch?v=zE0hno3vV9M&t=20)

* **Line Numbers:** `set number` and `set relativenumber` (highly popular for jumping to lines quickly using relative jumps).
* **Tabs & Indentation:** `set tabstop=4`, `set shiftwidth=4`, and `set expandtab` to convert tabs into consistent spaces.
* **Searching:** `set hlsearch` (highlights search matches) and `set incsearch` (searches as you type).
* **The Clipboard:** `set clipboard=unnamedplus` so that text yanked in Vim can be pasted into other apps (like a web browser) and vice versa. [](https://medium.com/@edominguez.se/vim-101-a-comprehensive-guide-to-using-vim-like-an-ide-1-3-vimrc-d484cc41fc2)

### 3\. Install a Plugin Manager

To add advanced features, people install a package manager to easily download and update third-party plugins. The most common ones are: [](https://www.reddit.com/r/vim/comments/viunvt/setting%5Fup%5Fgood%5Fvim%5Fworkflow%5Fas%5Fa%5Fbeginner/)

* vim-plug: A classic, minimal, and incredibly fast plugin manager.
* **lazy.nvim:** The modern gold standard for Neovim users who prefer configuring their setup using Lua. [](https://github.com/rstacruz/vim-from-scratch)

### 4\. Install "Must-Have" Plugins

Once the plugin manager is ready, developers install tools to match the features of modern editors like VS Code: [](https://dev.to/dsitdikov/how-to-transform-vim-to-a-complete-ide-2m6f)

* **Fuzzy Finding:** fzf.vim or **Telescope** (for Neovim) allows users to search and open files instantly by typing fractured parts of the file name.
* **File Trees:** **NerdTree** or **Neo-tree** adds a visual sidebar folder structure.
* **Coding Intelligence (LSP):** **coc.nvim** or native Neovim **LSP** provides autocompletion, go-to-definition, and error linting.
* **Git Integration:** vim-fugitive to run Git commands directly inside the editor without leaving.
* **Aesthetics:** Themes like **Gruvbox**, **Tokyonight**, or **Catppuccin** to make the code look visually striking. [](https://dev.to/aviavinav/vim-a-beginners-guide-from-a-beginner-b11)

### 5\. Custom Key Remappings

Vim thrives on keyboard efficiency. People often remap long commands or awkward keys to faster keystrokes: [](https://www.youtube.com/watch?v=j6uqOvTRq6I)

* **The Leader Key:** People assign a "Leader" key (usually the `Spacebar` or `,`) which acts as a custom prefix for all their favorite shortcuts.
* **Escaping Insert Mode:** Pressing the `Esc` key is far away, so a very common trick is remapping `jk` or `jj` to exit insert mode. [](https://medium.com/@devsjc/from-jetbrains-to-vim-a-modern-vim-configuration-and-plugin-set-d58472a7d53d)

### 6\. The Modern Shortcut: Pre-made "Distributions"

Because setting all of this up from scratch can take hours, many beginners and busy developers skip steps 1–5 entirely. Instead, they download pre-configured Vim distributions that work out of the box with gorgeous UIs and full IDE capabilities: [](https://www.youtube.com/watch?v=Mtgo-nP%5Fr8Y)

* NVChad: Lightning-fast, minimalist Neovim distribution.
* LazyVim: Highly popular, modular, and easy to customize.
* LunarVim: A fully-featured IDE layer built on top of Neovim. [](https://www.youtube.com/watch?v=Mtgo-nP%5Fr8Y)

Are you setting up **classic Vim** or **Neovim**? Also, let me know what **programming languages** you plan to code in so I can recommend the exact settings or plugins you'll need.

* [](https://medium.com/@edominguez.se/vim-101-a-comprehensive-guide-to-using-vim-like-an-ide-1-3-vimrc-d484cc41fc2)  
Medium  
How to set up Vim in 2021? (1/3). A comprehensive guide to setting up Vim… | by Enrique Domínguez | Medium  
Clipboard: ignorecase, smartcase, clipboard=unnamed syncs system and vim clipboards. File Management: noswapfile, nobackup, undofi...
* [](https://www.jakewiesler.com/blog/getting-started-with-vim)  
Jake Wiesler  
Getting Started With Vim - A Practical Guide  
Vim uses a .vimrc file. It uses an init.vim file located at the. In this file, you can define general settings, plugins, color sch...
* [](https://dev.to/dsitdikov/how-to-transform-vim-to-a-complete-ide-2m6f)  
DEV Community  
How to Transform Vim to a Complete IDE? - DEV Community  
If you want to become thoroughly familiar with the commands of Vim and remember them forever, there is a browser game that can hel...

Show all

# ## why do ppl often talk about vim and emacs

People talk about **Vim** and **Emacs** because they are two of the oldest, most powerful text editors in computer history, and they represent a legendary tech rivalry known as the **"Editor War"**. [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)

Dating back to the 1970s and 1980s, these two tools approach coding and text editing from entirely opposite philosophies. Understanding why they dominate tech culture comes down to a few key reasons: [](https://www.youtube.com/watch?v=a0ihgoOMQ20)

### 1\. Completely Opposite Philosophies

* **Vim (Do one thing well):** Vim is a lightweight, ultra-fast **"modal" editor**. Instead of using a mouse, you switch between "modes" (like Normal mode for navigating and Insert mode for typing). It treats editing like a language—combining "verbs" and "nouns" (e.g., typing `d w` deletes a word) so you never have to lift your hands from the home row of your keyboard. [](https://www.reddit.com/r/vim/comments/1535x5g/why%5Fis%5Fvim%5Fmore%5Fpopular%5Fthan%5Femacs%5Fis%5Fit%5Factually/)
* **Emacs (The everything app):** Emacs treats the editor as an entire ecosystem. Built on a dialect of the Lisp programming language, it is so deeply extensible that fans jokingly call it an operating system. People don't just use GNU Emacs to code; they use it to manage calendars, check email, play games, and organize notes via Org Mode. [](https://www.youtube.com/watch?v=scBBjZcy6fc&t=11)

### 2\. Longevity and Ubiquity

Most modern software tools disappear after a decade, but Vim (evolved from `vi`) and Emacs have thrived for **over 40 years**. Because `vi`/Vim is bundled into almost every Linux and Unix server by default, nearly every system administrator or backend developer learns it out of sheer necessity to edit files remotely. [](https://unix.stackexchange.com/questions/986/what-are-the-pros-and-cons-of-vim-and-emacs)

### 3\. Infinite Customizability

Unlike modern environments like Microsoft VS Code or JetBrains IDEs that work out of the box, Vim and Emacs are blank slates. Developers spend years carefully crafting their configuration files (`.vimrc` or `init.el`). This massive time investment creates intense user loyalty—and plenty of friendly "flexing" within the community. [](https://news.ycombinator.com/item?id=25036036)

### 4\. Cultural Memes and Legacy

The decades-long debate has generated endless internet culture and memes. Programmers joke about Vim's steep learning curve (specifically, the universal struggle of beginners trying to figure out how to exit Vim) and Emacs' heavy keyboard shortcuts (mockingly called "Escape Meta Alternate Control Shift"). [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)

Today, the war is mostly a peaceful coexistence. In fact, many developers use modern hybrids like Neovim or run Emacs with "Evil Mode"—a plugin that lets you use Vim's fast keyboard navigation inside Emacs' flexible environment. [](https://www.youtube.com/watch?v=mDW3cAVIU6Q&t=90)

Are you **trying to choose** between learning Vim or Emacs, or are you just curious about the **history of tech culture**? I can give you a breakdown of how to get started with either one!

* [](https://www.reddit.com/r/vim/comments/1535x5g/why%5Fis%5Fvim%5Fmore%5Fpopular%5Fthan%5Femacs%5Fis%5Fit%5Factually/)  
Reddit·r/vim  
Why is Vim more popular than Emacs? Is it actually ... - Reddit  
Emacs is largely written in elisp, its own form of the Lisp programming language. The core of emacs is an elisp interpreter and ex...
* [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)  
The Stack Overflow Blog  
Modern IDEs are magic. Why are so many coders still using ...  
Vi and Emacs were the primary tools used for coding. offers an arrow-controlled universe of keyboard shortcuts. Both are used in c...
* [](https://www.youtube.com/watch?v=scBBjZcy6fc&t=11)  
YouTube·DistroTube  
Why No One Can Answer The "Vim Versus Emacs" Question  
Feb 17, 2024 — Emacs is not merely a text editor; it is more akin to a complete operating system, a window manager, or even a terminal emulator.  
12m

Show all

# ## how popular is vim or emacs

**Vim is significantly more popular than Emacs**, though both heavily lag behind modern Integrated Development Environments (IDEs) like Visual Studio Code.

According to major developer surveys, **Vim sees roughly three times the adoption of Emacs**. However, the landscape has shifted into a battle of ecosystems: **Neovim vs. Emacs**. [](https://www.quora.com/Are-there-more-Emacs-or-Vim-users)

### The Data Breakdown

Data from modern developer tracking (such as the Stack Overflow Developer Survey) highlights the following ecosystem usage:

| Editor / Ecosystem      | Approximate Share among Developers | Key Trajectory & Status                                          |
| ----------------------- | ---------------------------------- | ---------------------------------------------------------------- |
| **Vim**                 | \~24.3%                            | Stable, lightweight, standard on almost all Linux servers.       |
| **Neovim**              | \~14.0%                            | Rapidly growing; captured massive developer admiration (83%+).   |
| **Emacs**               | \~8.0%                             | Low single digits; highly specialized, fiercely loyal community. |
| _VS Code (For Context)_ | _\~75.9%_                          | The dominant industry leader for primary development.            |

### Why Vim Outpaces Emacs in Popularity

1. **Ubiquity:** A version of `vi` or `vim` comes pre-installed on virtually every Linux, Unix, and macOS system in existence. System administrators and DevOps engineers frequently use it to edit configuration files on remote servers, inflating its overall usage. [](https://news.ycombinator.com/item?id=16574475)
2. **The "Vim Keybinding" Diaspora:** Vim's core innovation—**modal editing** (switching between normal, insert, and visual modes)—is incredibly popular. Even developers who don't use Vim as their primary editor often install Vim emulation layers in VS Code, IntelliJ, or even Emacs itself via "Evil Mode". [](https://www.redhat.com/en/blog/3-text-editors-compared)
3. **The Rise of Neovim:** A modernized fork of Vim called Neovim has surged in popularity. Built with Lua configuration and native Language Server Protocol (LSP) support, it has drawn younger developers looking for a fast, keyboard-centric alternative to heavy IDEs. [](https://tech-insider.org/emacs-vs-vim-2026/)

### Where Emacs Still Holds Strong

While Emacs sits in the single digits for market share, it is famously more than just a text editor. Written in Lisp, it operates closer to a fully extensible computing environment. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)

* **Killer Features:** Tools like Org Mode (for task tracking and note-taking) and Magit (arguably the best Git interface ever built) keep its user base tightly locked in. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)
* **Pre-Configured Frameworks:** Modern frameworks like Doom Emacs have lowered the learning curve by packaging Emacs with optimized Vim keybindings out of the box, preserving its relevance. [](https://www.youtube.com/watch?v=HnL77t4IsBY)

Are you trying to decide **which one to learn**, or are you looking to customize your current setup with **modal editing keybindings**? Let me know your primary programming languages and I can recommend a starting point.

* [](https://news.ycombinator.com/item?id=16574475)  
Hacker News  
With all the talk of Vim vs. Emacs, it surprises ... - Hacker News  
Emacs is in the low single digits, while Vim is 25% of all respondents. it is 40% (and #1) amongst sysadmin/devops practitioners.
* [](https://www.youtube.com/watch?v=HnL77t4IsBY)  
YouTube·bashbunni  
Doom Emacs: Why I Chose It Over Vim and Never Looked Back  
Jun 28, 2026 — Doom Emacs offers open-source support for packages, transfers Vim keybinds, and provides a keyboard-centric workflow that extends ...  
27:03
* [](https://www.redhat.com/en/blog/3-text-editors-compared)  
Red Hat  
Vim vs. Nano vs. Emacs: Three sysadmins weigh in - Red Hat  
Jun 22, 2021 — Vim keybindings are so popular that other editors like Emacs and even many IDE's provide a way to enable/emulate them.

Show all

# ## why is it called vim or emacs

The names **Vim** and **Emacs** are both acronyms rooted in the history of the early Unix and computing eras. [](https://www.youtube.com/watch?v=VaBdlcYaZLQ&t=57)

Here is exactly how both text editors got their names:

### The Story Behind Vim

**Vim** stands for **"Vi IMproved"**. [](https://www.loginradius.com/blog/engineering/vim-getting-started)

When developer Bram Moolenaar originally released the software in 1991, it was an enhanced clone of an even older text editor called **vi** (which was created by Bill Joy in 1976). [](https://www.youtube.com/watch?v=VaBdlcYaZLQ&t=57)

* _Note:_ The original name **vi** comes from the command `vi`, which stood for **visual mode**. It allowed users to see text on a visual computer display terminal rather than editing it line-by-line using older command-line editors. [](https://pikuma.com/blog/origins-of-vim-text-editor)
* When Moolenaar first built it for the Amiga computer, the acronym actually stood for _"Vi IMitation."_ As it grew more advanced and added features far beyond the original editor, he updated the name to _"Vi IMproved."_ [](https://www.diffen.com/difference/Emacs%5Fvs%5FVim)

### The Story Behind Emacs

**Emacs** stands for **"Editor Macros"**. [](https://www.youtube.com/watch?v=VaBdlcYaZLQ&t=57)

Created in 1976 by Richard Stallman and Guy L. Steele Jr., Emacs began as a collection of custom macros (automated command shortcuts) written for an early MIT text editor named TECO (Text Editor and Corrector). Users would write these "editor macros" to make editing faster and more powerful. Eventually, the collection of macros grew so comprehensive that it became its own standalone, highly programmable editing environment. [](https://prajwollamichhane11.medium.com/vim-vs-emacs-the-editor-war-b63ecb12ea92)

If you are deciding between the two, would you like to explore **how their editing philosophies differ** (like modal editing vs. modifier keys) or get a recommendation based on **your current workflow**?

* [](https://www.youtube.com/watch?v=VaBdlcYaZLQ&t=57)  
YouTube·DistroTube  
Vim Versus Emacs. Which Is Better?  
Feb 7, 2020 — Emacs also originated in the mid-1970s, around 1976, and its name stands for editor macros. The most well-known version is GNU Ema...  
2m
* [](https://www.diffen.com/difference/Emacs%5Fvs%5FVim)  
Diffen  
Emacs vs Vim - Difference and Comparison  
Vim is a text editor first released by Bram Moolenaar in 1991 for the Amiga computer. The name "Vim" is an acronym for "Vi IMprove...
* [](https://prajwollamichhane11.medium.com/vim-vs-emacs-the-editor-war-b63ecb12ea92)  
Medium·Prajwol Lamichhane  
Vim vs Emacs: The Editor war - Prajwol Lamichhane  
Emacs has over 1,000 editing commands. It also allows the user to combine these commands into macros to automate work. It was deve...

Show all

# why is vim more popular than emacs

11:07 PM

**Vim is significantly more popular than Emacs primarily because it comes pre-installed by default on almost every Unix-like operating system, runs instantly with a tiny footprint, and features a highly efficient "modal editing" language.** [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)

While the historic "Editor Wars" framed Vim and Emacs as direct rivals, they actually serve different purposes. Vim is a lightweight, hyper-focused text editor, whereas Emacs is an extensible computing environment often jokingly called "an operating system that lacks a good text editor." [](https://www.youtube.com/watch?v=scBBjZcy6fc&t=11)

The major reasons for Vim’s dominance in popularity include:

### 1\. Ubiquity and Server Presence

* **Pre-installed everywhere:** `vi` (and often `vim`) is built into the base installation of nearly every Linux distribution, macOS, and BSD server.
* **The SysAdmin standard:** System administrators, DevOps engineers, and developers can SSH into practically any remote server in the world and immediately use Vim without installing anything. Emacs, by contrast, must almost always be manually installed. [](https://www.reddit.com/r/emacs/comments/1535zct/why%5Fis%5Fvim%5Fmore%5Fpopular%5Fthan%5Femacs%5Fis%5Fit%5Factually/)

### 2\. Speed and Lightweight Footprint

* **Instant startup:** Vim opens in milliseconds, making it ideal for quick configuration file edits.
* **Minimal resource usage:** Emacs historically earned the joke acronym _"Eight Megabytes And Constantly Swapping"_ because it required massive amounts of memory for its time. Even today, Vim is noticeably lighter and rarely fails to run, even on a crashing system running out of resources. [](https://www.reddit.com/r/emacs/comments/1535zct/why%5Fis%5Fvim%5Fmore%5Fpopular%5Fthan%5Femacs%5Fis%5Fit%5Factually/)

### 3\. The Power of Modal Editing

* **Composable grammar:** Vim treats editing like a language. You combine verbs like `d` (delete) or `c` (change) with nouns like `w` (word) or `p` (paragraph) to execute complex actions in a few keystrokes (e.g., `diw` to "delete inside word"). [](https://www.youtube.com/watch?v=a0ihgoOMQ20)
* **Ergonomics (The Home Row):** Vim’s modal design allows you to navigate, edit, and manipulate text entirely from the keyboard's home row without stretching your fingers or using a mouse. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)

### 4\. Avoiding "Emacs Pinky"

* **Simpler key combinations:** Standard Emacs relies heavily on holding down modifier keys simultaneously (like `Ctrl` \+ `Alt` \+ `X`), which can cause physical strain—often called "Emacs Pinky". [](https://news.ycombinator.com/item?id=16574475)
* **Vim as a standard plugin:** Vim's core idea is so widely praised that almost every modern IDE and text editor (including VS Code, IntelliJ, and ironically, Emacs via Evil Mode) has a dedicated Vim keybinding emulation plugin. [](https://www.redhat.com/en/blog/3-text-editors-compared)

### 5\. Modern Revitalization via Neovim

* **The ecosystem boom:** The popularity gap widened even further with the rise of Neovim, a modernized fork of Vim that introduced fast asynchronous plugins, a built-in LSP (Language Server Protocol) for IDE-like intelligence, and Lua for straightforward configuration. This captured a massive demographic of younger web developers. [](https://www.youtube.com/watch?v=mDW3cAVIU6Q&t=90)

---

### Direct Comparison Overview

| Feature                    | Vim / Neovim                                           | GNU Emacs                                                   |
| -------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| **Primary Philosophy**     | Do one thing (edit text) incredibly well.              | Be an extensible, unified computing platform.               |
| **Availability**           | Installed by default on almost all Unix/Linux systems. | Requires manual installation on most systems.               |
| **Editing Style**          | **Modal** (Normal, Insert, Visual modes).              | **Modeless** (Relies heavily on Ctrl and Alt chords).       |
| **Configuration Language** | Vimscript or Lua (Neovim).                             | Emacs Lisp (Elisp).                                         |
| **Built-in Ecosystem**     | Focused strictly on file and code editing.             | Includes an email client, games, web browser, and Org-mode. |

If you are looking to learn one of these, tell me:

* What is your **primary goal**? (e.g., editing server configs, full-time coding, note-taking/organization)
* What **operating system** do you use most?
* Do you prefer a **lightweight terminal tool** or a highly customizable **all-in-one workspace**?

I can recommend which one to start with and point you toward the best beginner resources!

* [](https://www.reddit.com/r/emacs/comments/1535zct/why%5Fis%5Fvim%5Fmore%5Fpopular%5Fthan%5Femacs%5Fis%5Fit%5Factually/)  
Reddit  
Why is Vim more popular than Emacs? Is it actually ... - Reddit  
Maybe we need to bring Eight Megabytes And Constantly Swapping back somehow, but the modern crown for that truly belongs to chromi...
* [](https://news.ycombinator.com/item?id=16574475)  
Hacker News  
With all the talk of Vim vs. Emacs, it surprises ... - Hacker News  
Vim is 25% of all respondents. it is 40% (and #1) amongst sysadmin/devops practitioners. composable single-key commands - is a gem...
* [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)  
The Stack Overflow Blog  
Modern IDEs are magic. Why are so many coders still using Vim and Emacs? - Stack Overflow  
Vim and Emacs offer universal availability across Unix-like systems, small footprints, low latency, fast startup, and high keyboar...

Show all

# history of vim and emacs

10:57 PM

The histories of **Vim** and **Emacs** are deeply intertwined with the evolution of Unix, the hacker culture of the 1970s and 80s, and the rise of the open-source software movement. Their radically different design philosophies sparked the legendary **"Editor Wars,"** a friendly yet passionate rivalry that continues to this day. [](https://en.wikipedia.org/wiki/Editor%5Fwar)

Here is how these two legendary text editors came to be.

---

### 🧭 The Lineage of Vim: From Line Editors to Modal Mastery

Vim's history is a story of gradual evolution over 50 years, moving from rigid, line-by-line terminal commands to a highly efficient visual interface. 

* **1969 – ed (The Ancestor):** Ken Thompson created `ed` for the early Unix operating system at AT&T Bell Labs. Because computer terminals back then were often teletype machines (printing on actual paper rather than screens), `ed` was a "line editor"—you could only see and modify one line of text at a time using abstract commands. [](https://www.youtube.com/watch?v=c6vjFQBlxvY&t=35)
* **1976 – ex & vi (The Visual Breakthrough):** Bill Joy, then a graduate student at UC Berkeley, took an improved version of `ed` and created `ex`. In October 1977, he introduced a "visual mode" to `ex` that allowed users to see a full screen of text. This separate mode became its own executable: **vi** (short for _visual_). Joy introduced the famous `hjkl` navigation keys because his terminal didn't have dedicated arrow keys. [](https://pikuma.com/blog/origins-of-vim-text-editor)
* **1991 – Vim (Vi Improved):** In the late 1980s, software engineer Bram Moolenaar wanted to use `vi` on his new Amiga computer, but found the available clones buggy. Building on a clone called _Stevie_, Moolenaar created **Vim**. When it launched in 1991, Vim stood for **"Vi IMitation"**. By late 1993, as it surpassed the original `vi` in capability (adding multi-level undo, syntax highlighting, and windows), the acronym was officially changed to **"Vi IMproved"**. [](https://www.youtube.com/watch?v=%5F2y6vZna6fU)

_Note: Bram Moolenaar maintained Vim as open-source "charityware" (urging users to donate to kids in Uganda) for over 30 years until his passing in 2023._ [](https://www.diffen.com/difference/Emacs%5Fvs%5FVim)

---

### 🌌 The Lineage of Emacs: The Extensible Operating System

Emacs was born from a culture that believed a text editor shouldn't just format words—it should be an entire ecosystem that the user can reshape at will. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)

* **1976 – The MIT AI Lab Macros:** Emacs originated at the MIT Artificial Intelligence Laboratory. Hackers there were using an editor called TECO (Text Editor and Corrector), which was powerful but incredibly hard to use. David A. Moon, Guy L. Steele Jr., and Richard Stallman began capturing complex strings of TECO commands into automated macros. They bundled these together into a system called **EMACS**, standing for **Editor MACroS**. [](https://en.wikipedia.org/wiki/GNU%5FEmacs)
* **1985 – GNU Emacs:** In the early 1980s, proprietary versions of Emacs began hitting the market, locking down the code. In response, Richard Stallman founded the GNU Project and the Free Software Foundation. In 1985, he released **GNU Emacs**, built from the ground up on a core of **Emacs Lisp (elisp)**. [](https://dev.to/george%5Fudonte/emacs-and-vim-an-overview-for-beginners-2e65)
* **The Living Environment:** Because of Lisp, GNU Emacs was no longer just a text editor. It became an environment where users could write code _while the editor was running_ to alter its behavior. It famously expanded to include an email client, newsreaders, games, a file manager, and later, the revolutionary productivity system Org Mode. [](https://tech-insider.org/emacs-vs-vim-2026/)

---

### ⚔️ The "Editor Wars"

By the mid-1985s, the software landscape was dominated by these two giants, giving rise to one of the internet's oldest "holy wars" on Usenet groups. The friction came entirely down to competing philosophies: [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)

| Feature / Philosophy  | Vim (vi)                                                                                                                                      | Emacs                                                                                                                                  |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Core Concept**      | **Modal Editing**: Separate modes for navigating (Normal) and writing (Insert). It treats editing like a language of quick keyboard commands. | **Modeless & Extensible**: Always ready to type. Heavy reliance on holding modifier keys (Ctrl, Meta/Alt) for commands.                |
| **The "Unix Way"**    | Follows the Unix philosophy: Do one thing (edit text) and do it incredibly well.                                                              | Rejects the Unix philosophy: Act as a self-contained operating system for all text tasks.                                              |
| **Footprint & Speed** | Tiny memory footprint, near-instantaneous startup. Ubiquitous across almost all servers.                                                      | Traditionally heavy resource hog (jokingly referred to as _"Eight Megabytes and Constantly Swapping"_ back when 8MB was a lot of RAM). |

### The Modern Era

Today, the fierce animosity of the old Usenet days has matured into peaceful coexistence. The lines have blurred significantly: [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)

* **The Fusion:** Many modern developers use **Evil Mode**, an Emacs extension that maps Vim’s lightning-fast modal keybindings directly inside the Emacs ecosystem.
* **Modern Successors:** Both communities have birthed ultra-modern iterations. Vim paved the way for Neovim (a highly extensible fork using the Lua programming language), while Emacs users frequently use customized frameworks like Doom Emacs. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)

Would you like to know more about the **technical differences** between how they work, or are you looking for a **recommendation** on which one to try out first?

* [](https://twobithistory.org/2018/08/05/where-vim-came-from.html)  
Two-Bit History  
Where Vim Came From  
Vim added multi-level undo, split windows, syntax highlighting, and Vimscript, becoming the most popular text-mode developer edito...
* [](https://www.reddit.com/r/emacs/comments/17nh84z/history%5Funderstanding%5Fthe%5Forigins%5Fand%5Fthe/)  
Reddit  
\[history\] Understanding the origins and the evolution of Vi and ...  
\[history\] Understanding the origins and the evolution of Vi and Vim. r/emacs - \[history\] Understanding the origins and the evoluti...
* [](https://pikuma.com/blog/origins-of-vim-text-editor)  
Pikuma  
Understanding the Origins and the Evolution of Vi & Vim - Pikuma  
In the summer of 1976, when George Coulouris visited UC Berkeley, he brought a DECtape containing em and showed it to various peop...

Show all

# why is it holy war

### why is it holy war

The rivalry between Vim and Emacs is called a **"holy war"** because the debate quickly moved past objective software engineering and became deeply tied to **personal identity, dogmatic belief systems, and almost religious devotion**.

In early internet and hacker culture, your choice of text editor wasn't just a technical preference—it was a declaration of your core philosophy on how humans should interact with technology.

Here is why the rivalry took on such a religious tone:

#### 1\. Fundamentalism vs. Evangelism (The Core Philosophies)

The two sides represented entirely different, irreconcilable worldviews:

* **The Cult of vi (Vim):** Believers practiced strict **minimalism and asceticism**. They adhered strictly to the "Unix Philosophy": _write programs that do one thing and do it well._ To them, an editor should be lightweight, blazing fast, and universal. Adding anything extra (like an email client) was viewed as bloatware and heresy.
* **The Church of Emacs:** Believers practiced **maximalism and total freedom**. They viewed the editor as an all-encompassing environment that should be molded completely to the user's will. To them, switching to another program just to check email or look at a file system was an unnecessary disruption of their digital consciousness.

#### 2\. Literal Religious Parodies

The community leaned heavily into the religious metaphor, creating elaborate parodies that became a core part of hacker folklore:

* **The Church of Emacs:** Richard Stallman (the creator of GNU Emacs) created an alter-ego called **Saint IGNUcius** of the Church of Emacs. He would literally wear a computer hard drive platter as a halo on stage and "bless" computer networks. The Church claimed that using proprietary operating systems was a sin, but using Emacs was an act of righteousness.
* **The Cult of vi:** In response, vi users formed their own "cult." They pointed out that Emacs required holding down multiple modifier keys at once (like `Ctrl+Meta+X`), jokingly calling it the "Emacs Claw." They argued that `vi`'s modal system—where you navigate with standard keys like `hjkl`—was the "pure and natural" way to edit text, requiring fewer physical contortions.

#### 3\. You Had to Pick a Side

In the 1980s and 90s, computer mice were rare in software development, and modern Graphical User Interfaces (GUIs) didn't exist. Developers spent **10 to 12 hours a day entirely inside a text terminal**.

Because the keyboard shortcuts for Vim and Emacs utilize completely different muscle memories, it was incredibly difficult to be proficient in both. Developers had to commit hundreds of hours to mastering one or the other. Once a person invested years of muscle memory into a tool, any suggestion that the _other_ tool was better felt like an attack on their life choices and daily livelihood.

#### 4\. Usenet "Flamewars"

Before modern social media, early tech pioneers gathered on **Usenet newsgroups** (like `comp.os.unix`). Without the nuance of face-to-face communication, discussions about features quickly devolved into passionate, multi-page arguments called "flamewars." Because neither side could ever "prove" their philosophy was objectively better, the arguments became endless, cyclical, and deeply dogmatic—just like theological debates.

Are you interested in learning about some of the **famous historical pranks** the two sides pulled on each other, or would you like to see **how these communities interact today**?

# what do ppl say on vim modals or emacs shortcuts

The debate between **Vim's modal editing** and **Emacs' modifier-heavy shortcuts** is one of the oldest and most passionate "holy wars" in software engineering. [](https://llazarek.github.io/blog/2018/07/modal-editing-in-emacs.html)

Here is what the programming community generally says about how these two systems compare, broken down by core philosophies, ergonomics, and spatial design.

---

### 1\. Text Editing as a Language vs. "Chording"

The fundamental difference lies in how you physically interact with the keyboard to manipulate text. [](https://stackoverflow.com/questions/1430164/differences-between-emacs-and-vim)

* **Vim's Modal Language:** Users love Vim because its keybindings function like a language with **verbs and nouns**. For example, `d` (delete) combined with `w` (word) becomes `dw` to delete a word. Because you switch between _Normal Mode_ (for moving and manipulating) and _Insert Mode_ (for typing text), you rarely have to stretch your fingers to press multiple keys at once. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)
* **Emacs' Modifiers ("Chording"):** Vanilla Emacs relies on pressing multiple keys simultaneously using modifiers like `Ctrl` (C) and `Meta/Alt` (M). Proponents of this style point out that it is **modeless**; you can instantly type text and execute commands without constantly hitting `Esc` to toggle back and forth between navigation and insertion. [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)

---

### 2\. Ergonomics and Health (The "Emacs Pinky")

Physical comfort is a massive talking point, especially regarding Repetitive Strain Injury (RSI). [](https://www.reddit.com/r/vim/comments/wat955/is%5Fmy%5Funderstanding%5Fof%5Fvim%5Fand%5Femacs%5Fcorrect/)

* **Vim for Home-Row Efficiency:** Vim users highly praise the ability to do everything from the **home row** without reaching for arrow keys or holding down modifiers. The community generally agrees that Vim’s sequential keypresses (`d`, then `w`) are significantly more relaxed on the wrists. [](https://news.ycombinator.com/item?id=38953257)
* **The Emacs Pinky Myth/Reality:** Critics frequently target Emacs for causing "Emacs Pinky"—strain from constantly reaching for the `Ctrl` key with the smallest finger. However, dedicated Emacs users argue this is easily solved by **remapping the Caps Lock key to Ctrl** or using specialized keyboard layouts where modifiers are pressed with the thumbs. [](https://www.reddit.com/r/emacs/comments/x2tu7i/deciding%5Fon%5Femacs%5Fbindings%5Fvs%5Fmodal%5Fediting%5Fmeow/)

---

### 3\. Spatial Metaphors vs. Abstract Memory

How your brain maps commands differs heavily between the two systems. 

* **Vim's Directional Intuition:** Vimmers boast that Vim provides a coherent **spatial language**. Using `h/j/k/l` for left/down/up/right extends beautifully into window management (e.g., `Ctrl-w + h` to jump to the left window). It relies on spatial intuition rather than memorizing arbitrary strings.
* **Emacs' Distributed Mnemonics:** Critics argue that vanilla Emacs shortcuts can feel disconnected (e.g., `C-x 2` to split horizontally vs. `C-x 3` to split vertically). However, Emacs defenders note that its system is deeply consistent once you learn the major "namespaces" (like `C-x` for global commands or `C-c` for mode-specific ones).

---

### 4\. The Plot Twist: Modality is Ubiquitous

A common revelation among advanced users is that **the line between them is blurry**. [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)

* **Emacs is Secretly Modal:** Experienced Emacs users point out that vanilla Emacs actually features plenty of modality. Features like incremental search (`isearch`), macro recording, and modern transient menus are all inherently modal environments wrapped inside a modeless editor.
* **The Ultimate Solution (Evil Mode):** The modern consensus is that you don't actually have to choose. A massive portion of the Emacs community uses Evil Mode (Extensible VI Layer) or pre-configured distributions like Doom Emacs. This gives developers the best of both worlds: **Vim's highly efficient modal keybindings paired with Emacs' infinitely extensible operating environment**. [](https://www.reddit.com/r/emacs/comments/uc9mly/just%5Fdiscovered%5Femacs%5Fas%5Fa%5Flong%5Fterm%5Fvim%5Fuser%5Fand/)

Are you **trying to choose** between learning one of these systems, or are you looking to **configure your current text editor** (like VS Code or Neovim) with custom shortcuts?

* [](https://www.reddit.com/r/vim/comments/wat955/is%5Fmy%5Funderstanding%5Fof%5Fvim%5Fand%5Femacs%5Fcorrect/)  
Reddit  
Is my understanding of Vim and Emacs correct?  
Jul 29, 2022 — Emacs pinky is a myth. While composing commands with modal editing feels fast/cool, on the "Vim speed" is highly subjective. Emacs...
* [](https://www.reddit.com/r/emacs/comments/uc9mly/just%5Fdiscovered%5Femacs%5Fas%5Fa%5Flong%5Fterm%5Fvim%5Fuser%5Fand/)  
Reddit  
Just discovered emacs as a long term vim user and it's incredible  
Apr 26, 2022 — Just discovered emacs as a long term vim user and it's incredible I have been avoiding looking into emacs since a long time becaus...
* [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)  
Mastering Emacs  
Switching from Vim to Emacs  
In Vi and friends, you switch explicitly between modes in order to do different things. From insert back to normal

Show all

# ## why do modern geeks prefer vim

**Modern geeks prefer Vim (and its successor, Neovim) because it turns text editing into a fluid, keyboard-only language that keeps developers in a high-productivity "flow state"** **.** While modern graphical IDEs like VS Code dominate the overall market, a passionate community of programmers, sysadmins, and DevOps engineers continue to choose Vim. [](https://www.youtube.com/watch?v=GhxfXs0Ucfk&t=13)

The primary reasons for its enduring popularity can be grouped into efficiency, accessibility, and personalization:

### ⚡ Unmatched Speed and Ergonomics

* **The "No Mouse" Philosophy:** Vim is designed so you never have to take your hands off the keyboard's home row. This drastically reduces physical strain and speeds up editing. [](https://www.facebook.com/groups/2204685680/posts/10156853306465681/)
* **Editing as a Language:** Vim relies on "motions" that combine verbs (like `d` for delete or `c` for change) with nouns/modifiers (like `w` for word or `i"` for "inside quotes"). Typing `ci"` instantly deletes everything inside a set of quotation marks and puts you in typing mode. [](https://www.youtube.com/watch?v=0KpWEuhw6kQ)
* **The Power of the Dot (`.`):** Vim remembers your last abstract action. Hitting the period key repeats that exact action wherever your cursor is currently resting, making repetitive editing incredibly fast. [](https://www.reddit.com/r/linuxquestions/comments/om32ao/why%5Fis%5Fvim%5Fso%5Fpopular%5Famong%5Fprogrammers/)

### ☁️ Universal Availability and Low Overhead

* **Lightweight Performance:** Unlike massive IDEs that consume gigabytes of RAM, Vim launches instantly and runs on roughly 12 megabytes of memory. It remains perfectly responsive even when opening massive files. [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)
* **Ubiquity on Servers:** Vim comes pre-installed on almost every Linux/Unix system and server in the world. For geeks managing cloud infrastructure, being able to SSH into a remote machine or container and immediately use a powerful editor without a GUI is essential. [](https://www.quora.com/Why-is-Vim-so-popular-among-programmers)

### 🛠️ Extreme Customization (The IKEA Effect)

* **Tailored Environments:** Developers take immense pride in configuring their `.vimrc` or Neovim Lua files. They can install custom package managers, themes, and plugins to transform Vim into a fully customized IDE with auto-completion, git integration, and syntax highlighting.
* **The Vim Hybrid:** The preference for Vim's navigation is so strong that nearly every major modern text editor (including VS Code and the JetBrains suite) offers a popular "Vim Mode" extension. This allows developers to use Vim keybindings while keeping the native features of modern IDEs. [](https://www.facebook.com/groups/linux.fans.group/posts/24647986268149823/)

Are you considering **learning Vim** yourself, or are you looking to **optimize an existing configuration** using plugins like Neovim? Let me know, and I can point you toward the best **learning resources** or **starter frameworks**.

* [](https://www.reddit.com/r/linuxquestions/comments/om32ao/why%5Fis%5Fvim%5Fso%5Fpopular%5Famong%5Fprogrammers/)  
Reddit·r/linuxquestions  
Why is VIM so popular among programmers? - Reddit  
"repeat the last action here" is bound to . (the period key) by default. It is extremely powerful because "actions" in vim are abs...
* [](https://stackoverflow.blog/2020/11/09/modern-ide-vs-vim-emacs/)  
The Stack Overflow Blog  
Modern IDEs are magic. Why are so many coders still using Vim and Emacs? - Stack Overflow  
Vim and Emacs offer universal availability across Unix-like systems, small footprints, low latency, fast startup, and high keyboar...
* [](https://www.youtube.com/watch?v=GhxfXs0Ucfk&t=13)  
YouTube·DevOps Austin  
Vim in the Modern Era: Leveraging a Small Editor for Big Results  
May 10, 2025 — Vim doesn't rely on JavaScript, HTTP, or websockets, making it ideal for remote and headless systems, including containers.  
12m

Show all

# principles of unix philosophy

11:28 PM

The **Unix philosophy** is a set of cultural norms and software engineering principles centered around **minimalism, modularity, and simplicity**. Originated by early pioneers of the Unix operating system like Ken Thompson, Dennis Ritchie, and Doug McIlroy at Bell Labs, it favors building small, single-purpose components that seamlessly work together rather than complex, monolithic software. [](https://en.wikipedia.org/wiki/Unix%5Fphilosophy)

---

### 💡 The Core Rules (Doug McIlroy)

The foundational philosophy was famously summarized by Doug McIlroy in three core tenets: [](https://www.youtube.com/watch?v=wFdN7FCrjN4&t=112)

* **Do one thing and do it well.** Programs should be small and tightly focused on a single task. If a new task arises, build a fresh tool instead of bloating an existing program with "features". [](https://www.reddit.com/r/unix/comments/11wgy5k/what%5Fis%5Fthe%5Funix%5Fphilosophy/)
* **Write programs to work together.** Expect the output of every program to become the input to another, yet unknown, program. [](https://principles.design/examples/unix-philosophy)
* **Handle text streams.** Plain text is the universal interface. By using text streams, completely different programs can easily communicate via **pipes (`|`)**. [](https://www.eficode.com/insights/blog/unix-principles-guiding-agentic-ai-eternal-wisdom-for-new-innovations)

---

### 📜 The 17 Rules of Unix (Eric S. Raymond)

In his book _The Art of Unix Programming_, developer Eric S. Raymond expanded the philosophy into 17 specific design rules: [](https://www.facebook.com/groups/retrocomputers/posts/24779261828343698/)

#### Structure & Design

* **Modularity:** Write simple parts connected by clean interfaces.
* **Composition:** Design programs to easily connect with other programs.
* **Separation:** Separate policy from mechanism; keep the engine separate from the user interface.
* **Representation:** Fold complex knowledge into data structures so the program logic can be simple and robust. [](https://www.facebook.com/groups/retrocomputers/posts/24779261828343698/)

#### Simplicity & Clarity

* **Simplicity:** Actively resist software bloat; add complexity only where you absolutely must.
* **Clarity:** Prioritize readability and maintainability over clever, confusing code.
* **Parsimony:** Only write a massive program when it is clearly demonstrated that nothing else will work.
* **Economy:** Programmer time is expensive. Conserve human time over computer processing power. [](https://cscie2x.dce.harvard.edu/hw/ch01s06.html)

#### Transparency & Output

* **Transparency:** Design for visibility so that inspection, testing, and debugging are easy.
* **Silence:** When a program has nothing unexpected or surprising to say, it should say nothing at all.
* **Repair:** When a program must fail, make it fail noisily and as soon as possible to make debugging easier.
* **Least Surprise:** In user interface or command design, always do the easiest, least confusing thing based on shared conventions. [](http://www.catb.org/esr/writings/taoup/html/ch01s06.html)

#### Development Process

* **Robustness:** Remember that robustness is born from transparency and simplicity.
* **Generation:** Avoid manual detail work; write programs that write programs (automation) whenever you can.
* **Optimization:** Prototype your software before polishing it. Get it working before you try to make it fast.
* **Diversity:** Distrust the idea of a single "true way" to solve a problem.
* **Extensibility:** Design software with the future in mind, expecting that it will need to grow later. [](https://cscie2x.dce.harvard.edu/hw/ch01s06.html)

---

### 🚀 Modern Applications

Though born in the 1970s, the Unix philosophy heavily guides modern tech ecosystems: [](https://www.youtube.com/watch?v=Rl6Rv-1teW4&t=22)

* **Microservices:** Breaking down heavy web backends into isolated, single-purpose API components.
* **DevOps Pipelines:** Chaining specialized code tools together inside CI/CD processes.
* **AI & Machine Learning:** Designing modular AI agent workflows and data pipelines rather than creating massive, unmanageable monoliths. [](https://www.scribd.com/document/887082755/053f6302-e88e-4b86-8f54-9983e6cfb1a7-Unix-Philosophy)

Are you looking to apply these principles to a **specific programming project**, or are you exploring the history of **operating system design**?

* [](https://en.wikipedia.org/wiki/Unix%5Fphilosophy)  
Wikipedia  
Unix philosophy  
The Unix philosophy, originated by Ken Thompson, is a set of cultural norms and philosophical approaches to minimalist, modular so...
* [](https://www.reddit.com/r/unix/comments/11wgy5k/what%5Fis%5Fthe%5Funix%5Fphilosophy/)  
Reddit  
what is the "unix philosophy"?  
Write programs to handle text streams, because that is a universal interface. Programs should be designed to work with text input ...
* [](https://principles.design/examples/unix-philosophy)  
principles.design  
UNIX philosophy - Design Principles  
Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous i...

Show all

# what do ppl say on vim normal and insert mode

In the developer community, people often joke about **Vim's** dual nature, describing it as having **"two modes: one that beeps at you, and one that destroys your document."** [](https://superuser.com/questions/384161/how-to-explain-vims-modes-to-people)

More practically, developers use the analogy that **Insert mode is for writing**, while **Normal mode is for editing**.

### 💡 The Mindset Shift

The most common piece of advice from experienced Vim users is: **"Your default state should always be Normal mode."**

In a standard text editor, you spend 100% of your time in "insert mode" because you are constantly typing. In Vim, users say you should only enter Insert mode to dump text out of your head, and then immediately hit `Esc` to return to Normal mode. [](https://www.youtube.com/watch?v=9aRCm5%5FKbwM&t=13)

### ⚔️ Normal Mode vs. Insert Mode

| Mode            | What People Say It's For            | What You Actually Do                                                                                                                                                          |
| --------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Normal Mode** | **"The Navigation & Editing Deck"** | Moving around using h, j, k, l, deleting words with dw, copy/pasting, and running macros. Your keyboard acts like a control panel rather than a typewriter.                   |
| **Insert Mode** | **"The Standard Typewriter"**       | Standard typing. You type characters, use backspace, and write code. Users generally advise _against_ using arrow keys here; if you need to move, switch back to Normal mode. |

### 🛠️ Common Catchphrases & Tips

* **"How do I exit this thing?"** – The ultimate Vim meme. Beginners often get trapped in Insert mode and panic. The community's universal answer is: _Hit `Esc` (or `Ctrl + [`) to go to Normal mode, then type `:wq` to save and quit._ [](https://www.youtube.com/watch?v=fw5U551BZWs&t=11)
* **"Don't live in Insert mode."** – If you are using the arrow keys to navigate while in Insert mode, the community will tell you that you are "breaking the philosophy of Vim" and should just use a standard IDE instead. [](https://www.reddit.com/r/vim/comments/1qe9be6/is%5Fthere%5Fa%5Flist%5Fof%5Fall%5Finsertcommands%5Fthat%5Fi%5Fcan/)
* **"Use `Ctrl + o` for a quick fix."** – If you are typing in Insert mode and just need to run _one_ single Normal mode command (like centering the screen or jumping to the end of a line), people will tell you to use `Ctrl + o` to temporarily bridge the gap without fully switching modes. [](https://dev.to/iggredible/vim-do-you-know-that-you-can-execute-normal-mode-command-while-in-insert-mode-1ipb)

Are you **learning Vim for the first time**, or are you looking to optimize your **current workflow and keybindings**?

* [](https://www.youtube.com/watch?v=9aRCm5%5FKbwM&t=13)  
YouTube·Acosta E.T.F  
Mastering Vim: Essential Commands and Modes | Lesson 2  
Apr 28, 2024 — Insert mode allows you to insert text into the file. To enter Insert mode from Normal mode, you typically press keys like \`i\`. Whi...  
11m
* [](https://www.reddit.com/r/vim/comments/1qe9be6/is%5Fthere%5Fa%5Flist%5Fof%5Fall%5Finsertcommands%5Fthat%5Fi%5Fcan/)  
Reddit·r/vim  
Is there a list of all \*insert-commands\* that I can do ... - Reddit  
Now you want to edit and move inside of insert mode. Edits and moves are designed to be done from normal mode. They generally invo...
* [](https://dev.to/iggredible/vim-do-you-know-that-you-can-execute-normal-mode-command-while-in-insert-mode-1ipb)  
DEV Community  
Do you know Vim can execute normal mode command while ...  
Aug 12, 2019 — It is a mode in insert mode where you can execute normal mode commands. All you need to do is to press C-o while in insert mode. y...

Show all

# what do ppl say on the design of vim normal and insert mode

The design of Vim’s **Normal Mode** and **Insert Mode** is a fundamental shift from traditional text editors, eliciting a wide range of perspectives from developers. In the programming community, discussion surrounding this design typically centers on a few core concepts:

### 1\. "Reading and Editing vs. Writing" Philosophy

The most common defense of Vim's modal design is that **programmers spend far more time navigating, reading, and modifying code than blindly writing new text**. [](https://web.stanford.edu/class/cs107/resources/vim)

* **The "Home Row" Advantage:** In Normal Mode, every letter on the keyboard becomes a powerful command. Users love that they can delete a paragraph (`da{`), change text inside quotes (`ci"`), or jump to the end of a file (`G`) without ever lifting their hands from the home row or reaching for a mouse. [](https://www.danielmsullivan.com/pages/tutorial%5Fvim.html)
* **The "Default" State:** New users often ask why a text editor defaults to a mode where you can't type text. Experienced users argue that keeping Normal Mode as the "resting state" makes complete sense because code maintenance requires precise, rapid movements, not continuous typing. [](https://opensource.com/resources/what-vim)

### 2\. The Learning Curve: "The Cliff" vs. "The Dance"

The separation of modes is the primary reason Vim has a notoriously steep learning curve, which is a frequent topic of memes and community discussion. [](https://opensource.com/resources/what-vim)

* **The Initial Friction:** Beginners frequently complain about the frustration of accidentally typing commands into their text while in Insert Mode, or conversely, attempting to type text while still in Normal Mode (often resulting in accidentally deleting lines or scrambling code). [](https://superuser.com/questions/384161/how-to-explain-vims-modes-to-people)
* **The Fluid Dance:** Users who stick with it often describe how the constant switching between Normal and Insert modes eventually transitions from a conscious mental burden to automatic muscle memory. It becomes a fluid "dance" where you drop into Insert Mode to type a quick phrase and immediately hit `Esc` to return to the safety of Normal Mode. [](https://medium.com/better-programming/50-vim-mode-tips-for-ide-users-f7b525a794b3)

### 3\. Language-Like Ergonomics (Composability)

Power users heavily praise the design because Normal Mode operates like a grammar system.

* Keys are treated as **Verbs** (e.g., `d` for delete, `c` for change, `y` for yank/copy) and **Nouns/Motions** (e.g., `w` for word, `p` for paragraph, `t` for "till").
* Combining them (like `d2w` for "delete two words") feels like speaking a language to your editor. This composability means you don't need to memorize thousands of individual shortcuts; you just learn the vocabulary.

### Summary Comparison of Perspectives

| Aspect              | The Critic's View ❌                                                                                   | The Enthusiast's View                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Cognitive Load**  | Constantly tracking which mode you are in causes mental fatigue and typing mistakes.                  | It reduces physical strain by replacing awkward Ctrl / Alt modifier combos with single keystrokes.         |
| **Discoverability** | Invisible interfaces are hostile; there are no menus to show what Normal Mode keys do.                | The "Vim grammar" makes the editor highly predictable and deeply customizable once the basics are learned. |
| **Efficiency**      | Modern IDEs with mouse support and standard hotkeys are fast enough without the steep learning curve. | True modal editing is unmatched for text manipulation speed and keeps you in "the flow" longer.            |

Are you **struggling to get used to the modal workflow**, or are you looking to **optimize your configuration** (like remapping the `Esc` key to make switching modes faster)?

* [](https://superuser.com/questions/384161/how-to-explain-vims-modes-to-people)  
Super User  
How to explain VIM's modes to people?  
typing / insert mode: Here, you "normally" type into the file. You are in INSERT mode when you add ("insert") text. You are in NOR...
* [](https://opensource.com/resources/what-vim)  
Opensource.com  
What is Vim? | Opensource.com  
Using Vim is a constant dance between insert and normal modes, but once you're used to it, it becomes so fluid that you don't thin...
* [](https://www.danielmsullivan.com/pages/tutorial%5Fvim.html)  
www.danielmsullivan.com  
The (very) basics of Vim -  
In Normal mode, each key on your keyboard is mapped to a different command. Some keys move the cursor, some delete words, etc. The...

Show all

# how do ppl use vim the emacs way

Using Vim "the Emacs way" typically refers to two different things: changing Vim's core editing behaviors to match **Emacs keybindings**, or transforming Vim from a lightweight, single-file text editor into a massive **all-in-one operating environment**.

Here is exactly how people pull it off.

---

### 1\. The Keybindings: Modeless Editing & Chords

Vanilla Vim is famous for _modal editing_ (switching between Normal, Insert, and Visual modes). Vanilla Emacs is _modeless_—you just type to enter text, and you use complex modifier combinations (called "key chords") to navigate and run commands. [](https://www.reddit.com/r/emacs/comments/1264nov/how%5Fdo%5Fyou%5Fsuggest%5Fme%5Fapproaching%5Femacs%5Fcoming/)

To get Emacs-style movement and editing directly inside Vim, developers map Emacs' standard `Control` (`C-`) and `Meta/Alt` (`M-`) commands into Vim's **Insert mode** and **Command-line mode**. [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)

#### The Core Keymaps

You can add these configurations to your `.vimrc` or `init.lua` (if using Neovim):

* **Navigation:** Emacs relies on `C-p` (previous line), `C-n` (next line), `C-b` (backward character), and `C-f` (forward character).
* **Line Boundaries:** `C-a` jumps to the beginning of a line; `C-e` jumps to the end.
* **Deletion:** `C-k` kills text from the cursor to the end of the line. [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)

Many Vim users use plugins like tpope/vim-rsi to automatically inject these Emacs Readline keybindings into Insert and Command modes without breaking Vim's native Normal mode.

---

### 2\. The Ecosystem: The "Operating System" Workflow

A common joke in tech is that _"Emacs is a great operating system, it just lacks a good text editor."_ Emacs users rarely close their editor; they run their terminal, read email, check Git, and manage tasks entirely within Emacs. [](https://www.youtube.com/watch?v=scBBjZcy6fc)

To live in Vim the "Emacs way," users lean heavily on **Neovim** and turn it into a full IDE/OS environment:

* **Task Management (Org-mode):** Emacs is legendary for Org Mode. Vim users duplicate this workflow using the nvim-orgmode/orgmode plugin, allowing them to manage diaries, notes, and tasks natively in Vim. [](https://www.youtube.com/watch?v=a0ihgoOMQ20)
* **Git Integration:** Instead of dropping back to the command line, users install plugins like tpope/vim-fugitive or Neogit (a direct clone of Emacs' famous Magit plugin). [](https://www.youtube.com/watch?v=a0ihgoOMQ20)
* **Embedded Terminals:** Using Neovim's `:terminal` or window managers like Toggleterm.nvim, users run shell processes inside Vim splits rather than switching to an external terminal multiplexer like `tmux`.

---

### Comparison: Vim vs. Vim the "Emacs Way"

| Feature             | Standard Vim Way                                | The Emacs Way in Vim                                 |
| ------------------- | ----------------------------------------------- | ---------------------------------------------------- |
| **Editing Style**   | Modal (Normal/Insert switching)                 | Continuous typing using Ctrl chords                  |
| **Lifespan**        | Open a file, edit, close, drop back to terminal | Launch it once, split windows, keep it open for days |
| **File Navigation** | hjkl arrows, 0 and $ for line ends              | C-p, C-n, C-a, C-e                                   |
| **Scope**           | A focused text utility                          | A centralized dashboard for text, shells, and tasks  |

Are you trying to **rebind your current Vim config** to use Emacs shortcuts, or are you looking to build a **fully unified, all-in-one IDE environment** out of Neovim? Let me know, and I can provide the exact code blocks or plugin recommendations.

* [](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)  
Mastering Emacs  
Switching from Vim to Emacs - Mastering Emacs  
Emacs movement uses mnemonic keys (C-f forward, C-b backward, C-n next line) and modifiers for word/file jumps, comparable in effi...
* [](https://www.reddit.com/r/emacs/comments/1264nov/how%5Fdo%5Fyou%5Fsuggest%5Fme%5Fapproaching%5Femacs%5Fcoming/)  
Reddit·r/emacs  
How do you suggest me approaching Emacs coming from VIM?  
Vim reduces the use of modifier keys to bare minimum via its modes as opposed to the vanilla Emacs where you'll find yourself usin...
* [](https://www.youtube.com/watch?v=scBBjZcy6fc)  
YouTube·DistroTube  
Why No One Can Answer The "Vim Versus Emacs" Question  
Feb 17, 2024 — Emacs is more of a replacement for a terminal than a replacement for VM or whatever text editor you're using is because you know t...  
13:44

Show all

# how do ppl use vim the modeless way

People use Vim in a "modeless" way—making it behave like a conventional, everyday text editor such as Notepad or VS Code—primarily by leveraging built-in configurations like **Evim ("Easy Vim")** or using **custom `.vimrc` configurations**. [](https://github.com/SebastianMuskalla/ModelessVim)

While Vim is famous for its steep learning curve and modal structure (switching between Normal and Insert modes), modeless usage locks the editor into a permanent typing state and introduces standard modern graphical user interface shortcuts. [](https://vonheikemen.github.io/devlog/tools/vim-easy-mode/)

---

### 1\. Using Built-in Evim (Easy Vim)

Vim actually comes packaged with a native modeless framework called **Evim**. It can be launched directly from the terminal by running: [](https://vonheikemen.github.io/devlog/tools/vim-easy-mode/)

bash

```
evim filename.txt

```



Alternatively, if you are already inside a standard Vim session, you can load the underlying configuration script manually with:

vim

```
:source $VIMRUNTIME/evim.vim

```



**How Evim Alters Behavior:**

* **Continuous Insert Mode:** The editor starts directly in Insert mode. You can begin typing immediately without pressing `i` or `a`.
* **Familiar Keybindings:** Evim maps standard Windows/GUI shortcuts to replace standard Vim commands.
* **Visual Selection:** The mouse and arrow keys select text seamlessly, and typing immediately overwrites the highlighted text (similar to Vim's Select Mode). [](https://tim-kleyersburg.de/articles/you-should-learn-vim)

| Action         | Standard Vim       | Modeless / Evim |
| -------------- | ------------------ | --------------- |
| **Save File**  | Esc → :w           | Ctrl + S        |
| **Undo**       | u (in Normal mode) | Ctrl + Z        |
| **Redo**       | Ctrl + R           | Ctrl + Y        |
| **Copy**       | y (in Visual mode) | Ctrl + C        |
| **Cut**        | d or x             | Ctrl + X        |
| **Paste**      | p or P             | Ctrl + V        |
| **Select All** | ggVG               | Ctrl + A        |

---

### 2\. Custom `.vimrc` Modeless Architectures

Developers who want to retain powerful Vim features—like custom syntax highlighting, terminal lightweight speed, and extensive plugin ecosystems—but hate modal editing, will hardcode a modeless environment. [](https://github.com/SebastianMuskalla/ModelessVim)

They do this by adding configurations to their `~/.vimrc` file:

* **Forcing Insert Mode on Launch:** `au BufEnter * startinsert` forces Vim to stay in Insert mode whenever a file is loaded.
* **Remapping Navigation:** Arrow keys are kept active, while keys like `PageUp` and `PageDown` handle large movements.
* **Creating Custom `Imap` Shortcuts:** Scripts like [SebastianMuskalla's ModelessVim GitHub Repository](https://github.com/SebastianMuskalla/ModelessVim) offer turnkey scripts that bind text-editor operations globally without forcing users to exit Insert mode. [](https://github.com/SebastianMuskalla/ModelessVim)

---

### Why do people do this?

* **Accidental Drops:** Sysadmins or engineers who occasionally hop onto a remote Linux server via SSH and just need a quick, no-nonsense text editor without remembering complex key structures. [](https://github.com/SebastianMuskalla/ModelessVim)
* **Feature Preservation:** Traditional modeless terminal editors like Nano often lack advanced modular capabilities. Using Vim modelessly grants access to powerful language engines, file parsing, and styling while retaining a standard user interface loop. [](https://github.com/SebastianMuskalla/ModelessVim)

Are you trying to **configure a server environment** to be easier for non-Vim users, or are you looking for a **lightweight terminal editor** that is naturally modeless (like **Nano** or **Micro**)?

* [](https://vonheikemen.github.io/devlog/tools/vim-easy-mode/)  
GitHub  
vim's easy mode: making vim behave like a 'conventional' text ...  
In this mode vim is suppose to behave like a conventional text editor, we can insert and edit text in a more conventional way. Ctr...
* [](https://github.com/SebastianMuskalla/ModelessVim)  
GitHub  
Configuration files to turn vim into a modeless editor. · GitHub  
The configuration files in this repository turn vim into a modeless editor, while preserving its amazing features! \* Open, Save, Q...
* [](https://tim-kleyersburg.de/articles/you-should-learn-vim)  
Tim Kleyersburg  
You should learn Vim!  
If you start typing, unexpected things will happen because your keys have completely different meanings in normal mode. You can us...

Show all


