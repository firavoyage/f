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

