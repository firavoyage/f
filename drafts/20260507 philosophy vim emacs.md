#

how to use vim

4:33 AM

Vim is a "modal" text editor, meaning keys do different things depending on which "mode" you are in. Unlike standard editors where you type immediately, Vim starts in a navigation-focused mode. \[[1](https://www.reddit.com/r/linux/comments/icihiw/how%5Fto%5Fuse%5Fvim/), [2](https://www.youtube.com/watch?v=y9Aq0Sn84RU), [3](https://www.geeksforgeeks.org/linux-unix/getting-started-with-vim-editor-in-linux/), [4](https://www.youtube.com/watch?v=5Rck6JXe%5FTU)]

1\. Basic Modes

- **Normal Mode**: The default mode used for navigating and running commands. Press `Esc` at any time to return here.
- **Insert Mode**: Used for typing text. Enter this by pressing `i` while in Normal Mode.
- **Command-Line Mode**: Used for saving and quitting. Enter this by typing `:` while in Normal Mode. \[[1](https://opensource.com/article/19/3/getting-started-vim), [2](https://medium.com/@mikebolt/a-beginners-guide-to-vim-cb5375820c16), [3](https://linuxconfig.org/vim-tutorial), [4](https://sites.radford.edu/~mhtay/CPSC120/VIM%5FEditor%5FCommands.htm), [5](https://www.reddit.com/r/linux/comments/icihiw/how%5Fto%5Fuse%5Fvim/), [6](https://www.geeksforgeeks.org/linux-unix/getting-started-with-vim-editor-in-linux/)]

2\. Getting Started and Quitting

- **Open a file**: Type `vim filename.txt` in your terminal. If the file doesn't exist, Vim will create it.
- **Save and Exit**: Press `Esc`, then type `:wq` and hit `Enter`.
- **Exit without Saving**: Press `Esc`, then type `:q!` and hit `Enter`. \[[1](https://www.youtube.com/watch?v=Zub1xDlSzR0), [2](https://stackoverflow.com/questions/5764071/how-to-use-vim-in-the-terminal), [3](https://www.reddit.com/r/linux/comments/icihiw/how%5Fto%5Fuse%5Fvim/), [4](https://www.youtube.com/watch?v=y9Aq0Sn84RU), [5](https://www.youtube.com/watch?v=5Rck6JXe%5FTU), [6](https://linuxconfig.org/vim-tutorial), [7](https://www.geeksforgeeks.org/linux-unix/getting-started-with-vim-editor-in-linux/)]

3\. Essential Commands (Normal Mode)

| Action \[[1](https://vim.rtorr.com/), [2](https://www.freecodecamp.org/news/vim-beginners-guide/), [3](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim), [4](https://www.youtube.com/watch?v=y9Aq0Sn84RU), [5](https://linuxconfig.org/vim-tutorial), [6](https://www.reddit.com/r/linux/comments/icihiw/how%5Fto%5Fuse%5Fvim/), [7](https://www.youtube.com/watch?v=Zub1xDlSzR0), [8](https://www.geeksforgeeks.org/linux-unix/getting-started-with-vim-editor-in-linux/), [9](https://opensource.com/article/19/3/getting-started-vim)] | Command                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Move Cursor**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `h` (left), `j` (down), `k` (up), `l` (right)  |
| **Delete Line**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | `dd`                                           |
| **Copy Line**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | `yy` (yank)                                    |
| **Paste**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `p`                                            |
| **Undo**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `u`                                            |
| **Redo**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `Ctrl` + `r`                                   |
| **Search**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | `/keyword` (press `n` to go to the next match) |

4\. How to Learn Quickly

The best way to learn is using the built-in interactive tutorial. Type `vimtutor` into your terminal to start a 30-minute hands-on lesson. \[[1](https://www.redhat.com/en/blog/beginners-guide-vim), [2](https://www.youtube.com/shorts/SiMkVqi4o84), [3](https://cvw.cac.cornell.edu/linux/text-editors/vim), [4](https://www.youtube.com/watch?v=Zub1xDlSzR0)]

Would you like a list of **intermediate shortcuts** or help **configuring a .vimrc file** to customize your setup?

- [link](https://opensource.com/article/19/3/getting-started-vim)\
  Getting started with Vim: The basics | Opensource.com\
  Vim's search functionality can be very useful. Go into the Command Line mode by (1) pressing Esc key, then (2) pressing colon : ke...\
  Opensource.com
- [link](https://www.reddit.com/r/linux/comments/icihiw/how%5Fto%5Fuse%5Fvim/)\
  How to use vim : r/linux - Reddit\
  How to use vim \* vim starts in normal mode. Press i to enter insert mode, you can now freely type/edit. \* When done, press ESC to ...\
  Reddit
- [link](https://www.youtube.com/watch?v=Zub1xDlSzR0)\
  Vim Text Editor Basics - Using Vim on Linux / Mac / Unix ...\
  This guide demonstrates the basics of using the Vim text editor on Linux. The initial step involves opening a terminal. Navigating...\
  13:26\
  YouTube·SavvyNik

Show all

why not combine them. like you are always in insert mode and you can press ctrl hjkl to navigate.

4:44 AM

You can actually set up Vim to work this way, but most veteran users advise against it because it defeats the core purpose of why Vim is so powerful: **Modal Editing**. \[[1](https://vi.stackexchange.com/questions/10296/navigation-in-insert-mode), [2](https://www.reddit.com/r/neovim/comments/3th1aj/how%5Fdo%5Fi%5Fget%5Fhjkl%5Fmovement%5Fin%5Finsert%5Fmode%5Fto%5Fwork/)]

In a standard "non-modal" editor, you are effectively always in "Insert Mode" and must use modifier keys (like `Ctrl` or `Alt`) for every action other than typing. Vim separates these into modes so that your entire keyboard can become a control panel when you aren't typing. \[[1](https://onivim.github.io/docs/getting-started/modal-editing-101), [2](https://medium.com/@hasaci1784/vim-vs-modern-editors-the-tool-you-use-reflects-how-you-think-6273e6d476e4), [3](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/)]

Why the "Combine" Idea is Often Inefficient

- **Limited Movement:** Navigating with `hjkl` (or `Ctrl` + `hjkl`) only moves you one character or line at a time. In Normal Mode, you have far more powerful "motions" like `w` to jump words, `%` to find matching brackets, or `f` to jump to a specific character.
- **Loss of Composability:** Vim commands work like a language (e.g., `d` + `w` means "delete word"). If you stay in Insert Mode, you lose the ability to combine these "verbs" and "nouns" quickly.
- **The "Vim Way":** The philosophy is that you enter Insert Mode only to type a specific thought, then immediately return to Normal Mode to navigate or manipulate. \[[1](https://www.reddit.com/r/vim/comments/1qb9orr/how%5Fdo%5Fyou%5Fnavigate%5Fin%5Finsert%5Fmode/), [2](https://stackoverflow.com/questions/6454874/vim-ctrl-hjkl-for-movement-in-insert-mode), [3](https://alexgude.com/blog/i-still-love-hjkl/), [4](https://stackoverflow.com/questions/1737163/traversing-text-in-insert-mode), [5](https://www.youtube.com/watch?v=eY2N0DRmxso\&t=1), [6](https://medium.com/@hasaci1784/vim-vs-modern-editors-the-tool-you-use-reflects-how-you-think-6273e6d476e4)]

How to Do It Anyway (Mappings)

If you still want this behavior for small corrections, you can add these lines to your `.vimrc` configuration file: \[[1](https://vi.stackexchange.com/questions/10296/navigation-in-insert-mode)]

vim

```
" Move cursor with Ctrl + hjkl in Insert Mode
inoremap <C-h> <Left>
inoremap <C-j> <Down>
inoremap <C-k> <Up>
inoremap <C-l> <Right>
```

Use code with caution.

A Better Middle Ground: `Ctrl` + `o`

Instead of remapping everything, use the built-in `Ctrl` + `o` command while in Insert Mode. This lets you run **one** Normal Mode command (like `h`, `j`, `k`, `l`, or even a big jump like `G` to go to the end of the file) and then drops you right back into Insert Mode automatically. \[[1](https://www.reddit.com/r/neovim/comments/3th1aj/how%5Fdo%5Fi%5Fget%5Fhjkl%5Fmovement%5Fin%5Finsert%5Fmode%5Fto%5Fwork/), [2](https://vi.stackexchange.com/questions/10296/navigation-in-insert-mode), [3](https://stackoverflow.com/questions/1737163/traversing-text-in-insert-mode)]

Would you like help **setting up a basic .vimrc file** to include these or other helpful shortcuts?

- [link](https://vi.stackexchange.com/questions/10296/navigation-in-insert-mode)\
  Navigation in insert mode - Vi and Vim Stack Exchange\
  Here's the relevant bit of my .vimrc : " In insert or command mode, move normally by using Ctrl inoremap inoremap inoremap inorema...\
  Stack Exchange
- [link](https://www.reddit.com/r/vim/comments/1qb9orr/how%5Fdo%5Fyou%5Fnavigate%5Fin%5Finsert%5Fmode/)\
  How do you navigate in insert mode? : r/vim - Reddit\
  A good way to think about this is you enter Insert mode for typing a couple of words for a couple of seconds and then immediately ...\
  Reddit
- [link](https://www.reddit.com/r/neovim/comments/3th1aj/how%5Fdo%5Fi%5Fget%5Fhjkl%5Fmovement%5Fin%5Finsert%5Fmode%5Fto%5Fwork/)\
  How do I get HJKL movement in insert mode to work the same as in ...\
  There is however a small trick which can be helpful, i\_ctrl-o . If you press ctrl-o in insert mode, you will be put temporarily to...\
  Reddit

Show all

vim philosophy

4:48 AM

The core philosophy of Vim is that <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>most of your time is spent editing code, not writing it from scratch</strong></mark>. While traditional editors prioritize the act of "typing," Vim optimizes for the complex tasks of manipulating, moving, and reshaping existing text. \[[1](https://gist.github.com/lettertwo/813e765a9f68127b0807d1d6619c5ab0), [2](https://endler.dev/2018/ten-years-of-vim/), [3](https://missing.csail.mit.edu/2020/editors/)]

1\. Modal Editing: Specialization of Tasks

Vim assumes that your "default" state should be reading and navigating, not typing. By separating these into distinct **modes**, it transforms your entire keyboard into a command console. \[[1](https://www.peterdebelak.com/blog/ready-set-vim-pt-1/), [2](https://www.ssp.sh/blog/why-using-neovim-data-engineer-and-writer-2023/), [3](https://buttondown.com/hillelwayne/archive/modal-editing-is-a-weird-historical-contingency/)]

- **Normal Mode** is your home row dashboard for high-speed navigation.
- **Insert Mode** is a specialized tool used strictly for adding new characters. \[[1](https://www.reddit.com/r/vim/comments/1o06cyr/the%5Fphilosophy%5Fof%5Fvim/), [2](https://www.robertlavery.com/vim.html), [3](https://gist.github.com/lettertwo/813e765a9f68127b0807d1d6619c5ab0), [4](https://missing.csail.mit.edu/2020/editors/)]

2\. Composability: Language-Like Editing

Vim treats editing as a **formal language** with "verbs" and "nouns". \[[1](https://www.reddit.com/r/vim/comments/1py2xys/vim%5Fis%5Fcomposable/), [2](https://ferd.ca/vim-and-composability.html)]

- **Verbs (Operators):** `d` (delete), `c` (change), `y` (copy).
- **Nouns (Motions/Objects):** `w` (word), `s` (sentence), `p` (paragraph), `t)` (until the next parenthesis).\
  Because these are **composable**, learning one new verb immediately multiplies your power across every noun you already know (e.g., if you know how to delete a word with `dw`, learning the change verb `c` instantly gives you the ability to change a word with `cw`). \[[1](https://dev.to/iggredible/why-i-use-vim-2f40), [2](https://www.felix-kaestner.com/blog/vim), [3](https://ferd.ca/vim-and-composability.html), [4](https://missing.csail.mit.edu/2020/editors/)]

3\. Ergonomics and "Flow"

- **Minimize Hand Movement:** Every important command is reachable from the **home row**. Reaching for a mouse or even arrow keys is considered a "context switch" that breaks your concentration.
- **The Speed of Thought:** The ultimate goal is for the editor to become an extension of your mind. Instead of thinking "I need to highlight this and hit backspace," you think "delete word," and your fingers execute `dw` automatically. \[[1](https://portfolio-blog-starter.vercel.app/blog/vim), [2](https://nus-cs2030s.github.io/2425-s2/vim/philosophy.html), [3](https://medium.com/@sohail%5Fsaifi/why-vims-modal-editing-is-cognitively-superior-to-traditional-editors-4bff38d3b26e), [4](https://medium.com/codex/its-2023-why-do-i-still-use-vim-6d4e51587d4e), [5](https://www.reddit.com/r/vim/comments/1o06cyr/the%5Fphilosophy%5Fof%5Fvim/), [7](https://www.reddit.com/r/vim/comments/1py2xys/vim%5Fis%5Fcomposable/)]

4\. Unix Philosophy Integration

Vim is designed to be a "Good Unix Citizen". It does one thing well—editing text—and integrates seamlessly with other tools. You can pipe text through external programs (like `:!sort` to sort lines) directly from within the editor, leveraging the power of the entire operating system. \[[1](https://nus-cs1010.github.io/2324-s1/guides/vim-philosophy.html), [2](https://www.reddit.com/r/unix/comments/11wgy5k/what%5Fis%5Fthe%5Funix%5Fphilosophy/), [4](https://www.ssp.sh/blog/why-using-neovim-data-engineer-and-writer-2023/)]

Would you like to explore **Vim "motions"** to see how these verbs and nouns work in practice, or look into **plugins** that expand this philosophy?

- [link](https://www.reddit.com/r/vim/comments/1o06cyr/the%5Fphilosophy%5Fof%5Fvim/)\
  The Philosophy of Vim - Reddit\
  The topic seems evergreen (or at least perennial). ... I have read the stack overflow post many times and it's a great write-up. .\
  Reddit
- [link](https://gist.github.com/lettertwo/813e765a9f68127b0807d1d6619c5ab0)\
  Philosophy of VIM - GitHub Gist\
  most of programming time is spent editing, not writing. editing is a process of manipulating text in ways beyond just writing, suc...\
  Gist
- [link](https://endler.dev/2018/ten-years-of-vim/)\
  Ten Years of Vim - Matthias Endler\
  The Zen of Vim The philosophy behind Vim takes a while to sink in: While other editors focus on writing as the central part of wor...\
  Matthias Endler

Show all

how to use emacs

4:49 AM

If Vim is a specialized surgical tool, **Emacs is a complete laboratory.**

Unlike Vim's modal nature, Emacs is "modeless" by default. Any character you type is immediately inserted into the document, similar to a standard editor. To perform actions, you use "chorded" keybindings—combinations involving the **Control** (C) and **Meta/Alt** (M) keys. \[[1](https://stackoverflow.com/questions/1430164/differences-between-emacs-and-vim), [2](https://rdpextra.com/decoding-the-great-editor-debate-vim-vs-emacs/), [3](https://www.cs.colostate.edu/helpdocs/emacs.html), [4](https://www.youtube.com/watch?v=uR8h2gWN37I\&t=125)]

1\. The Basics: Getting Started

- **Open Emacs**: Type `emacs` in your terminal.
- **Open/Create a File**: `C-x C-f` (Find File). You’ll see a prompt at the bottom; type the filename and hit `Enter`.
- **Save**: `C-x C-s`.
- **Quit**: `C-x C-c`.
- **Panic Button**: `C-g` cancels any partially entered command or stuck process. \[[1](https://www.youtube.com/watch?v=jPkIaqSh3cA\&t=21), [2](https://zoo.cs.yale.edu/classes/cs210/help/emacs.html), [3](https://www.jesshamrick.com/post/2012-09-10-absolute-beginners-guide-to-emacs/), [4](https://www.redhat.com/en/blog/beginners-guide-emacs), [5](https://www.youtube.com/watch?v=uR8h2gWN37I\&t=125)]

2\. Navigation and Editing

Emacs movement keys are designed to keep your hands on the home row without needing modes. \[[1](https://www.youtube.com/watch?v=wT%5FjUtEGfeg\&t=23)]

| Action \[[1](https://www.masteringemacs.org/article/switching-from-vim-to-emacs), [2](http://ocean.stanford.edu/research/quick%5Femacs.html), [3](https://cs.wellesley.edu/~cs341/f20/docs/common/emacs/), [4](https://www.redhat.com/en/blog/beginners-guide-emacs), [5](https://www.jesshamrick.com/post/2012-09-10-absolute-beginners-guide-to-emacs/)] | Emacs Keybinding                                       | Vim Equivalent     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------ |
| **Move Cursor**                                                                                                                                                                                                                                                                                                                                            | `C-p` (up), `C-n` (down), `C-b` (left), `C-f` (right)  | `k`, `j`, `h`, `l` |
| **Move by Word**                                                                                                                                                                                                                                                                                                                                           | `M-b` (back), `M-f` (forward)                          | `b`, `w`           |
| **Start/End of Line**                                                                                                                                                                                                                                                                                                                                      | `C-a`, `C-e`                                           | `0`, `$`           |
| **Undo**                                                                                                                                                                                                                                                                                                                                                   | `C-/` (or `C-_`)                                       | `u`                |
| **Search**                                                                                                                                                                                                                                                                                                                                                 | `C-s` (forward), `C-r` (backward)                      | `/`, `?`           |
| **Cut/Copy/Paste**                                                                                                                                                                                                                                                                                                                                         | `C-w` (Kill), `M-w` (Save to Ring), `C-y` (Yank/Paste) | `d`, `y`, `p`      |

3\. The "Operating System" Philosophy

Emacs is often called a "computing environment" because it is an **Elisp interpreter**. You can run your entire workflow inside it: \[[1](https://www.reddit.com/r/emacs/comments/nxxoeo/what%5Fare%5Fthe%5Fbenefits%5Fof%5Femacs%5Fover%5Fvim/), [2](https://www.youtube.com/watch?v=QkoVwVDIooU), [3](https://lucidmanager.org/productivity/emacs-workflow/)]

- **M-x**: This is the "gateway" command. Press `Alt + x`, type a command name (like `tetris`, `calc`, or `calendar`), and hit `Enter`.
- **Buffers & Windows**: Emacs can manage hundreds of open files ("buffers") and split your screen into many "windows" (`C-x 2` for horizontal, `C-x 3` for vertical). \[[1](https://lucidmanager.org/productivity/getting-started-with-emacs/), [2](https://news.ycombinator.com/item?id=45783376), [3](https://www.masteringemacs.org/article/beginners-guide-to-emacs), [4](https://www.jesshamrick.com/post/2012-09-10-absolute-beginners-guide-to-emacs/), [5](https://www.cs.colostate.edu/helpdocs/emacs.html)]

4\. The "Vim User" Shortcut: Evil Mode \[[1](https://www.inmotionhosting.com/blog/doom-emacs-for-vim-users/), [2](https://www.reddit.com/r/vim/comments/l9hv5k/emacs%5Fusers%5Fbe%5Flike/)]

Since you already know Vim, you can use Evil Mode (Extensible Vi Layer). It gives you Vim’s modal navigation and `hjkl` keys inside the Emacs environment. Many people use **Doom Emacs** or **Spacemacs**, which come with this pre-configured. \[[1](https://www.youtube.com/watch?v=V27zOhfN8Ys\&t=1), [2](https://www.youtube.com/watch?v=1C9GbmIP1EA\&t=62), [3](https://opensource.com/article/20/8/vim-to-emacs), [4](https://www.inmotionhosting.com/blog/doom-emacs-for-vim-users/), [5](https://stackoverflow.com/questions/1430164/differences-between-emacs-and-vim)]

**The absolute best way to learn** is to open Emacs and press `C-h t` to start the built-in [Interactive Tutorial](https://www.gnu.org/software/emacs/tour/). \[[1](https://www.gnu.org/software/emacs/tour/)]

Since you're coming from Vim, would you like to know how to install **Evil Mode** or a pre-built "Vim-friendly" Emacs distribution like **Doom Emacs**?

- [link](https://www.masteringemacs.org/article/switching-from-vim-to-emacs)\
  Switching from Vim to Emacs\
  Table\_title: How Movement and Editing differs in Emacs and Vim Table\_content: header: | Emacs Key Binding | Vim Insert Key | Descr...\
  Mastering Emacs
- [link](https://www.youtube.com/watch?v=jPkIaqSh3cA\&t=21)\
  The Basics of Emacs as a Text Editor\
  Emacs can be launched by typing \`emacs\` in the terminal. To open a specific file, type \`emacs\` followed by a space and the documen...\
  33s\
  YouTube·DistroTube
- [link](https://stackoverflow.com/questions/1430164/differences-between-emacs-and-vim)\
  Differences between Emacs and Vim \[closed] - Stack Overflow\
  22 Comments. ... What systems do you work on, @Radu? I've never seen a real-life system in the 2010s that had real vi instead of v...\
  Stack Overflow

Show all

emacs philosophy

4:52 AM

The philosophy of Emacs is centered on the idea that an editor should be an **infinitely extensible computing environment** rather than just a tool for text. While Vim focuses on "doing one thing well," Emacs aims to be the center of your digital life by providing a consistent interface for everything from coding to email. \[[1](https://www.spacjer.com/blog/2015/04/23/emacs), [2](https://www.youtube.com/watch?v=QkoVwVDIooU), [3](https://www.youtube.com/watch?v=scBBjZcy6fc), [4](https://www.youtube.com/watch?v=1vMlGFELajQ), [5](https://blog.sourcerer.io/vim-emacs-and-their-forever-war-does-it-even-matter-any-more-697b1322d510)]

1\. Extensibility: "The Lisp Machine"

The core of Emacs is a **Lisp interpreter** written in C. Nearly everything you see—the text editor, the file manager, the email client—is actually a Lisp program running on that interpreter. \[[1](https://andreyor.st/posts/2023-06-12-the-key-point-of-emacs/), [2](https://www.gnu.org/gnu/rms-lisp.html), [3](https://www.reddit.com/r/vim/comments/ky7is9/what%5Fwould%5Fyou%5Fsay%5Fare%5Fthe%5Fpros%5Fand%5Fcons%5Fof%5Fvim/), [4](https://www.reddit.com/r/emacs/comments/1g2wze5/philosophical%5Fquestion%5Fis%5Felisp%5Fthe%5Fonly%5Flanguage/)]

- **Live Modification:** You can change how Emacs behaves while it's running. You don't just "configure" Emacs; you **reprogram it** to fit your exact workflow.
- **User as Developer:** There is no hard line between a user and a developer in Emacs. The same language used to build the editor (Emacs Lisp) is the one you use to customize it. \[[1](https://www.reddit.com/r/emacs/comments/pwv97t/the%5Fphilosophy%5Fof%5Femacs/), [2](https://dl.acm.org/doi/pdf/10.1145/800209.806466), [3](https://www.reddit.com/r/emacs/comments/1gw0m4n/how%5Fis%5Femacs%5Fso%5Fextensible/), [4](https://dl.acm.org/doi/pdf/10.1145/3386324), [5](https://andreyor.st/posts/2023-06-12-the-key-point-of-emacs/), [6](https://www.youtube.com/watch?v=1vMlGFELajQ)]

2\. Introspectability: "Self-Documenting"

Emacs is designed to be fully transparent. It is "self-documenting" because you can ask it about any part of itself at any time. \[[1](https://dspace.mit.edu/handle/1721.1/5736), [2](https://cscie2x.dce.harvard.edu/hw/ch01s06.html)]

- **Help System:** You can instantly look up the code or documentation for any keybinding or function (e.g., `C-h k` to see what a key does).
- **Discoverability:** The system encourages you to poke around and understand its inner workings so you can eventually modify them. \[[1](https://www.youtube.com/watch?v=O6tGvwp-Ayk\&t=1), [2](https://www.youtube.com/watch?v=1vMlGFELajQ), [3](https://www.youtube.com/watch?v=0i8Az2MHwGo), [4](https://www.youtube.com/watch?v=NocDm4zzToo)]

3\. The Buffer as a Universal Interface \[[1](https://www.reddit.com/r/emacs/comments/1fmdgmv/the%5Fargument%5Ffor%5Femacs%5Fin%5Fjust%5Fa%5Ffew%5Fminutes%5Fvlog/)]

In Emacs, **everything is a buffer**. \[[1](https://www.youtube.com/watch?v=0i8Az2MHwGo)]

- **Consistent Experience:** Whether you are looking at a file, a terminal, or a game of Tetris, it lives in a buffer. This means the same navigation and search commands you use for code work exactly the same way everywhere else.
- **Interconnectivity:** Because everything shares the same environment, different tools can talk to each other easily (e.g., clicking a link in your notes can open an email or a specific line in a source file). \[[1](https://www.reddit.com/r/emacs/comments/1fmdgmv/the%5Fargument%5Ffor%5Femacs%5Fin%5Fjust%5Fa%5Ffew%5Fminutes%5Fvlog/), [2](https://www.spacjer.com/blog/2015/04/23/emacs), [3](https://www.reddit.com/r/emacs/comments/9zli5y/why%5Fuse%5Femacs%5Ffor%5Feverything/), [4](https://www.youtube.com/watch?v=1vMlGFELajQ)]

4\. Convergence vs. Minimalism

While the [Unix Philosophy](https://cscie2x.dce.harvard.edu/hw/ch01s06.html) (Vim's home) emphasizes small, modular tools that do one thing, Emacs emphasizes a **unified environment**. The "one thing" Emacs does well is provide a platform for text-based interaction. \[[1](https://www.reddit.com/r/emacs/comments/1fmdgmv/the%5Fargument%5Ffor%5Femacs%5Fin%5Fjust%5Fa%5Ffew%5Fminutes%5Fvlog/), [2](https://www.quora.com/Does-Emacs-violate-the-UNIX-philosophy-of-doing-one-thing-very-well), [3](https://protesilaos.com/codelog/2021-09-22-live-stream-emacs-unix/), [4](https://blog.sourcerer.io/vim-emacs-and-their-forever-war-does-it-even-matter-any-more-697b1322d510), [5](https://emacsconf.org/2021/talks/unix/)]

Would you like to see how **Org Mode** demonstrates this philosophy by turning your editor into a complete productivity system?

- [link](https://www.reddit.com/r/emacs/comments/pwv97t/the%5Fphilosophy%5Fof%5Femacs/)\
  The Philosophy of Emacs - Reddit\
  In the end is boils down to homoiconicity. Everything is text, everything. And everything in emacs is made of of buffers of text. ...\
  Reddit
- [link](https://andreyor.st/posts/2023-06-12-the-key-point-of-emacs/)\
  The key point of Emacs - Andrey Listopadov\
  What does matter is that Emacs is a platform that allows its users not only to extend it with new features, but also change how it...\
  Andrey Listopadov
- [link](https://www.reddit.com/r/emacs/comments/1g2wze5/philosophical%5Fquestion%5Fis%5Felisp%5Fthe%5Fonly%5Flanguage/)\
  Is elisp the only language that could've made Emacs what it is ...\
  mina86ng. • 2y ago. It's mostly matter of timing. Lisp was a popular flavour in Emacs' early days and offered dynamic elements whi...\
  Reddit

Show all

#

compare emacs and mg

4:54 AM

While both **Emacs** and **mg** share the same core keybindings and user interface philosophy, they are designed for vastly different purposes. <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Emacs</strong> is a comprehensive, infinitely extensible "operating system" for text, while <strong>mg</strong> is a tiny, fast, no-frills clone intended for quick terminal edits</mark>. \[[1](https://news.ycombinator.com/item?id=9248751), [2](https://taingram.org/blog/lightweight-emacs-editors.html), [3](https://www.reddit.com/r/linux/comments/8l11zh/its%5Fusually%5Fvim%5Fvs%5Femacs%5Funder%5Foccasional/), [4](https://www.reddit.com/r/linux/comments/1ckm540/would%5Femacs%5Fbe%5Fhave%5Fbeen%5Fmore%5Fpopular%5Fcompared%5Fto/)]

Key Differences at a Glance

| Feature \[[1](https://www.youtube.com/watch?v=fu0cYRCtNqY), [2](https://www.reddit.com/r/emacs/comments/lwaf8k/anyone%5Fhere%5Fusetried%5Fmg/), [3](https://www.youtube.com/watch?v=vS6UqZvJbbU\&t=93), [4](https://www.youtube.com/watch?v=c-XU55ZIVak), [5](https://www.rollc.at/posts/2022-01-23-mg/), [6](https://www.reddit.com/r/emacs/comments/ezgtex/lightweight%5Femacs%5Fclone%5Fpreference%5Fmg%5Fvs%5Fzile/), [7](https://mjtsai.com/blog/2023/08/28/mg-text-editor/), [8](https://news.ycombinator.com/item?id=9248751), [9](https://taingram.org/blog/lightweight-emacs-editors.html)] | GNU Emacs                               | mg (Micro GNU Emacs)                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------ |
| **Extension Language**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Full **Emacs Lisp (Elisp)**             | **None** (Written in C only)               |
| **Footprint**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Large; often requires many dependencies | Extremely small (~160 KB)                  |
| **Interface**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | GUI or Terminal                         | **Terminal only**                          |
| **Customization**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Infinite (via `.emacs` or `init.el`)    | Limited; basic rebinding in `.mg`          |
| **Package System**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Massive (Org mode, Magit, etc.)         | None                                       |
| **Standard Presence**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Must be installed on most systems       | Pre-installed on **OpenBSD** and **macOS** |

Detailed Comparison

- **Extensibility**: The defining feature of Emacs is its built-in Lisp interpreter, which allows users to write entire applications like [Org mode](https://orgmode.org/) or [Magit](https://magit.vc/) inside the editor. **mg** lacks a scripting language entirely, meaning it cannot run these advanced plugins.
- **Performance and Size**: **mg** is intended for situations where running a full Emacs is impractical, such as on embedded routers, remote cloud instances, or over slow SSH connections. It starts instantly and uses negligible memory compared to modern GNU Emacs.
- **Editing Experience**: **mg** strives for "compatibility" with GNU Emacs so that users don't have to learn new keybindings. However, it lacks advanced modern features like **syntax highlighting** (except for basic C-mode indentation) or a "kill ring" (it only remembers the most recent kill).
- **Use Cases**:
  - **Emacs**: Your primary development environment, writing platform, and personal organizer.
  - **mg**: Quick configuration file edits on a fresh server or emergency fixes where only a terminal is available. \[[1](https://www.youtube.com/watch?v=7CzqIRJViaU), [2](https://www.reddit.com/r/emacs/comments/14l5ect/orgmode%5Fin%5Fmg/), [3](https://www.systutorials.com/docs/linux/man/1-mg/), [4](https://hackernoon.com/to-emacs-or-not-to-emacs), [5](https://enzuru.medium.com/emacs-in-a-few-dozen-keystrokes-and-why-some-of-you-should-just-use-vim-14b9af30be70), [6](https://www.reddit.com/r/emacs/comments/1ek1ic2/mg/), [7](https://www.reddit.com/r/emacs/comments/ezgtex/lightweight%5Femacs%5Fclone%5Fpreference%5Fmg%5Fvs%5Fzile/), [8](https://news.ycombinator.com/item?id=9248751), [9](https://www.youtube.com/watch?v=vS6UqZvJbbU\&t=93), [10](https://www.reddit.com/r/emacs/comments/lwaf8k/anyone%5Fhere%5Fusetried%5Fmg/), [11](https://taingram.org/blog/lightweight-emacs-editors.html)]

Would you like to know how to **configure basic keybindings** in `mg`, or are you looking for **lightweight alternatives** like Zile that include more features?

- [link](https://www.reddit.com/r/emacs/comments/ezgtex/lightweight%5Femacs%5Fclone%5Fpreference%5Fmg%5Fvs%5Fzile/)\
  Lightweight EMACS clone preference: MG vs Zile - Reddit\
  No frills, just basic edit and a little config. Zile's got a little more going on. Honestly though, these days plain emacs is righ...\
  Reddit
- [link](https://www.reddit.com/r/emacs/comments/lwaf8k/anyone%5Fhere%5Fusetried%5Fmg/)\
  Anyone here use/tried mg? : r/emacs - Reddit\
  \_\_david\_\_ • 5y ago. Yeah I love mg. I like to use it on small embedded routers and other small machines where emacs seems too big ...\
  Reddit
- [link](https://news.ycombinator.com/item?id=9248751)\
  Mg: an Emacs-like editor in 160 kb - Hacker News\
  \> Since it is written completely in C, there is currently \_no language in which extensions can be written\_; however, keys can be r...\
  Hacker News

Show all