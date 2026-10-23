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


