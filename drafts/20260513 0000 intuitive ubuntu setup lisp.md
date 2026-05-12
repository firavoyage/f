#

install lisp on ubuntu

To install Lisp on Ubuntu, you generally choose between two popular implementations: <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>SBCL</strong> (highly performant and widely used) or <strong>CLISP</strong> (noted for its simplicity)</mark>. For a professional-grade setup, it is recommended to install SBCL along with **[Quicklisp](https://www.quicklisp.org/)**, the standard package manager for Common Lisp. \[[1](https://medium.com/data-science/how-to-set-up-common-lisp-ide-in-2021-5be70d88975b), [2](https://medium.com/data-science/how-to-set-up-common-lisp-ide-in-2021-5be70d88975b), [3](https://www.youtube.com/watch?v=VnWVu8VVDbI)]

1\. Install a Lisp Implementation

The easiest way to get started is using the Ubuntu package manager (`apt`). \[[1](https://interlisp.org/software/install-and-run/linux/), [2](https://stackoverflow.com/questions/6546834/install-lisp-on-my-linux-machine)]

- **For SBCL (Recommended):** Run the following command in your terminal:\
  bash

<!---->

```
sudo apt update
sudo apt install sbcl
```

Use code with caution.\
SBCL is the modern standard for many developers due to its active maintenance and speed.

- **For CLISP:** If you prefer a simpler interpreter-focused version:\
  bash

<!---->

```
sudo apt update
sudo apt install clisp
```

Use code with caution.\
This is often used by beginners because it provides clear error messages. \[[1](https://lisp-lang.org/learn/getting-started/), [2](https://raspberrypi.stackexchange.com/questions/9173/how-to-install-a-lisp-compiler), [3](https://stackoverflow.com/questions/6546834/install-lisp-on-my-linux-machine), [4](https://portacle.github.io/), [5](https://lisperator.net/sytes/tutorial/)]

2\. Install Quicklisp (Package Manager) \[[1](https://lisp-lang.org/learn/getting-started/)]

Quicklisp allows you to easily install over 1,500 Lisp libraries. To install it: \[[1](https://www.quicklisp.org/), [2](https://lisp-lang.org/learn/getting-started/)]

1. **Download the installer:**\
   bash

<!---->

```
curl -O https://beta.quicklisp.org/quicklisp.lisp
```

Use code with caution.
2\. **Load it into SBCL:**\
bash

```
sbcl --load quicklisp.lisp
```

Use code with caution.
3\. **Run the installation commands** within the Lisp prompt:\
lisp

```
(quicklisp-quickstart:install)
(ql:add-to-init-file)
(quit)
```

Use code with caution.\
Answering "yes" when prompted to add it to your init file ensures Quicklisp loads automatically every time you start Lisp. \[[1](https://www.reddit.com/r/lisp/comments/mly1e3/what%5Ftools%5Fdo%5Fcommon%5Flisp%5Fprogrammers%5Fuse%5Fin%5F2021/), [2](https://www.reddit.com/r/lisp/comments/mly1e3/what%5Ftools%5Fdo%5Fcommon%5Flisp%5Fprogrammers%5Fuse%5Fin%5F2021/), [3](https://www.jonathanfischer.net/modern-common-lisp-on-osx/), [4](https://github.com/quil-lang/qvm/blob/master/doc/lisp-setup.md), [5](https://lisp-lang.org/learn/getting-started/)]

3\. Recommended Development Environment

Most Lisp developers use **Emacs** with the **SLIME** (Superior Lisp Interaction Mode for Emacs) extension for a powerful, interactive coding experience. \[[1](https://askubuntu.com/questions/670304/what-is-the-install-routine-for-common-lisp-slime-sbcl-quicklisp-on-ubuntu), [2](https://www.youtube.com/watch?v=VnWVu8VVDbI), [3](https://www.reddit.com/r/lisp/comments/o50hak/best%5For%5Fcommonly%5Fused%5Fideeditor%5Fin%5F2021/), [4](https://www.youtube.com/watch?v=T61IN5FHr8g\&t=160), [5](https://lispcookbook.github.io/cl-cookbook/emacs-ide.html)]

- **Install Emacs:** `sudo apt install emacs`.
- **Install SLIME via Quicklisp:**\
  Open SBCL and run: `(ql:quickload "quicklisp-slime-helper")`.
- **One-Click Alternative:** For a pre-configured environment that includes SBCL, Emacs, and Quicklisp in one package, you can use [Portacle](https://portacle.github.io/), which is a portable, easy-to-use distribution for Linux. \[[1](https://stackoverflow.com/questions/26449495/common-lisp-and-emacs), [2](https://portacle.github.io/), [3](https://lisp-machine.org/getting-started-with-lisp/), [4](https://askubuntu.com/questions/670304/what-is-the-install-routine-for-common-lisp-slime-sbcl-quicklisp-on-ubuntu)]

4\. Running Your First Script

You can verify your installation by creating a file named `hello.lisp` with the following content: \[[1](https://stackoverflow.com/questions/32416135/lisp-run-program-in-ubuntu)]

lisp

```
(write-line "Hello, World!")
```

Use code with caution.

Run it from the terminal using: \[[1](https://www.ridvanbaluyos.com/how-to-install-common-lisp-on-ubuntu/)]

bash

```
sbcl --script hello.lisp
```

Use code with caution.

Or, if you installed CLISP: `clisp hello.lisp`. \[[1](https://stackoverflow.com/questions/66167158/running-lisp-code-via-clisp-on-linux-ubuntu-wsl), [2](https://www.geeksforgeeks.org/how-to-install-lisp-on-linux/), [3](https://stackoverflow.com/questions/32416135/lisp-run-program-in-ubuntu), [4](https://raspberrypi.stackexchange.com/questions/9173/how-to-install-a-lisp-compiler)]

Would you like to explore **how to use Quicklisp** to install specific libraries, or do you need help **configuring Emacs** for Lisp development?

- [link](https://askubuntu.com/questions/670304/what-is-the-install-routine-for-common-lisp-slime-sbcl-quicklisp-on-ubuntu)\
  What is the install routine for Common Lisp/ SLIME/SBCL ...\
  Sep 4, 2015 — Sorted by: 12. This answer is not useful. Loading when this answer was accepted… As I went through the process, I'll sumarize the ...\
  Ask Ubuntu
- [link](https://lisp-lang.org/learn/getting-started/)\
  Getting Started | Common Lisp\
  Ubuntu/Debian. To install SBCL on either, just run: $ sudo apt-get install sbcl. Arch Linux. Since SBCL is available from the offi...\
  Common Lisp
- [link](https://www.reddit.com/r/lisp/comments/mly1e3/what%5Ftools%5Fdo%5Fcommon%5Flisp%5Fprogrammers%5Fuse%5Fin%5F2021/)\
  What tools do \[Common] Lisp programmers use in 2021? (on ...\
  Apr 7, 2021 — I use Emacs mainly with Sly and SBCL on both Linux (Ubuntu) and on MacOS. In Emacs install the "company" package. I use Quicklisp ...\
  Reddit·r/lisp

Show all

example

Common Lisp uses **prefix notation**, where the function or operator comes before its arguments. Below are several examples ranging from basic math to creating functions and using libraries with **Quicklisp**. \[[1](https://www2.cs.sfu.ca/CourseCentral/310/pwfong/Lisp/1/tutorial1.html), [2](https://lisp-docs.github.io/docs/tutorial/informal-introduction-to-lisp), [3](https://lisp-journey.gitlab.io/blog/libraries-dependencies-management/)]

1\. Basic Arithmetic and Syntax

Lisp treats everything inside parentheses as a list to be evaluated. \[[1](https://www.youtube.com/watch?v=INUHCQST7CU)]

- **Simple Addition:** `(+ 2 2)` evaluates to `4`.

- **Complex Expressions:** `(* 2 (cos 0) (+ 4 6))` evaluates to `20.0`.

- **Variables:** Use `defvar` or `defparameter` to create global variables.\
  lisp

<!---->

```
(defparameter *width* 20)
(defparameter *height* 10)
(* *width* *height*) ; Returns 200
```

Use code with caution.\
\[[1](https://www2.cs.sfu.ca/CourseCentral/310/pwfong/Lisp/1/tutorial1.html), [2](https://lisp-docs.github.io/docs/tutorial/informal-introduction-to-lisp)]

2\. Defining Functions

Functions are defined using the `defun` macro. \[[1](https://www.geeksforgeeks.org/lisp/functions-in-lisp/), [2](https://www.tutorialspoint.com/lisp/lisp%5Ffunctions.htm)]

- **Calculate an Average:**\
  lisp

<!---->

```
(defun average (a b c d)
  (/ (+ a b c d) 4))

(average 10 20 30 40) ; Returns 25
```

Use code with caution.

- **Square a Number:**\
  lisp

<!---->

```
(defun square (x)
  (* x x))

(square 5) ; Returns 25
```

Use code with caution.\
\[[1](https://www2.cs.sfu.ca/CourseCentral/310/pwfong/Lisp/1/tutorial1.html)]

3\. Working with Lists

Lists are the core data structure in Lisp. \[[1](https://raw.githubusercontent.com/ashok-khanna/common-lisp-by-example/main/Common%20Lisp%20by%20Example.pdf), [2](https://www.youtube.com/watch?v=INUHCQST7CU)]

- **Create a List:** `(list 1 2 3)` or quoted `'(1 2 3)`.
- **Access Elements:**
  - `car`: Gets the first element.
  - `cdr`: Gets the rest of the list.
  - `nth`: Gets the element at a specific index, e.g., `(nth 2 '(a b c d))` returns `C`.
- **Join Lists:** `(append '(1 2) '(3 4))` returns `(1 2 3 4)`. \[[1](https://lisp-docs.github.io/docs/tutorial/informal-introduction-to-lisp), [3](https://ccrma.stanford.edu/CCRMA/Courses/AlgoComp/cm/doc/contrib/lispintro.html), [4](https://lisp-journey.gitlab.io/blog/common-lisp-macros-by-example-tutorial/)]

4\. Using Quicklisp to Load Libraries

Once installed, you can use **[Quicklisp](https://www.quicklisp.org/)** to instantly download and load external libraries. \[[1](https://www.quicklisp.org/), [2](https://www.youtube.com/watch?v=VnWVu8VVDbI)]

- **Search for a library:** `(ql:system-apropos "dexador")`.

- **Install and load:** To install a library like **Dexador** (for HTTP requests):\
  lisp

<!---->

```
(ql:quickload "dexador")
```

Use code with caution.

- **Example Usage (HTTP Get):**\
  lisp

<!---->

```
(dexador:get "https://google.com")
```

Use code with caution.\
\[[1](https://stackoverflow.com/questions/40571533/how-to-install-a-package-with-quicklisp), [2](https://lisp-journey.gitlab.io/blog/libraries-dependencies-management/)]

5\. Writing a "Hello World" Script

You can print to the terminal using `format` or `print`. \[[1](https://www.youtube.com/watch?v=oAzqQh%5FVMH0\&t=13), [2](https://lisp-lang.org/learn/first-steps), [3](https://www.youtube.com/watch?v=fJgCOUt2fic\&t=2)]

lisp

```
(format t "Hello, world!~%") ; ~% is a newline
```

Use code with caution.

Would you like to see an example of a **recursive function**, like calculating Factorials, or should we look at how to **build a standalone executable**?

- [link](https://stackoverflow.com/questions/40571533/how-to-install-a-package-with-quicklisp)\
  How to install a package with quicklisp - Stack Overflow\
  Nov 13, 2016 — Sorted by: 2. The first thing to do about installing a lisp library using quicklisp, is see if it is available via quicklisp: (Not...\
  Stack Overflow
- [link](https://www.quicklisp.org/)\
  Quicklisp beta\
  Jan 1, 2026 — Basic Commands. ... Quicklisp will automatically download any supporting software it needs to load the system. Please note that so...\
  Quicklisp
- [link](https://www.youtube.com/watch?v=VnWVu8VVDbI)\
  Installing Common Lisp, Emacs, Slime & Quicklisp\
  Jul 22, 2013 — hey folks this is a slightly different video from me um as I've been wanting to do some basic tutorials on Cobin list for a while ...\
  14:48\
  YouTube·Baggers

Show all

cli command to install quicklisp non interactively

To install **Quicklisp** non-interactively on Ubuntu using SBCL, you can chain the installation commands into a single CLI execution using `--eval` and `--quit` flags. \[[1](https://stackoverflow.com/questions/72693701/how-to-make-quicklisp-available-to-a-script-that-runs-from-a-shebang), [2](https://lisp-lang.org/learn/getting-started/)]

One-Line Installation Command \[[1](https://lisp-journey.gitlab.io/blog/getting-started/)]

First, download the installer: \[[1](https://lisp-journey.gitlab.io/blog/getting-started/), [2](http://www.jonathanfischer.net/modern-common-lisp-on-linux/)]

bash

```
curl -O https://beta.quicklisp.org/quicklisp.lisp
```

Use code with caution.

Then, run the following command to install it silently and add it to your SBCL initialization file:

bash

```
sbcl --no-sysinit --no-userinit --load quicklisp.lisp \
     --eval '(quicklisp-quickstart:install)' \
     --eval '(ql-util:without-prompting (ql:add-to-init-file))' \
     --quit
```

Use code with caution.

Breakdown of the Command

- `--no-sysinit --no-userinit`: Ensures a clean environment by ignoring existing config files.
- `--load quicklisp.lisp`: Loads the installer you just downloaded.
- `--eval '(quicklisp-quickstart:install)'`: Triggers the core installation into the default `~/quicklisp` directory.
- `--eval '(ql-util:without-prompting (ql:add-to-init-file))'`: This is the **critical part for non-interactive use**; it bypasses the confirmation prompt usually required to add Quicklisp to your `~/.sbclrc` file.
- `--quit`: Exits the SBCL session immediately after completion. \[[1](https://gitlab.common-lisp.net/rgoldman/sbcl/-/blob/b8ee308c886fa8d8993c0e6623229107495376f6/install-quicklisp), [2](https://lisp-lang.org/learn/getting-started/), [3](https://github.com/quil-lang/qvm/blob/master/doc/lisp-setup.md), [4](https://lisp-journey.gitlab.io/blog/getting-started/)]

Alternative: Debian Package

If you prefer managing it through Ubuntu's package manager, you can install the pre-packaged version: \[[1](https://lispcookbook.github.io/cl-cookbook/getting-started.html), [2](http://www.jonathanfischer.net/modern-common-lisp-on-linux/)]

bash

```
sudo apt update && sudo apt install cl-quicklisp -y
```

Use code with caution.

Note that after installing via `apt`, you still need to load it in your REPL with `(load "/usr/share/common-lisp/source/quicklisp/quicklisp.lisp")` to initialize your local user environment. \[[1](https://lispcookbook.github.io/cl-cookbook/getting-started.html)]

Do you need a similar command for **automating library installations** once Quicklisp is set up?

- [link](https://lispcookbook.github.io/cl-cookbook/getting-started.html)\
  Getting started with Common Lisp - GitHub Pages\
  A Common Lisp library or project typically consists of one or several ASDF systems (and is distributed as one Quicklisp project). ...\
  GitHub Pages documentation
- [link](https://gitlab.common-lisp.net/rgoldman/sbcl/-/blob/b8ee308c886fa8d8993c0e6623229107495376f6/install-quicklisp)\
  install-quicklisp - Robert Goldman / sbcl - GitLab\
  Jan 25, 2021 — #!/bin/sh if \[ -z "$QUICKLISP\_DIST\_VERSION" ] || \[ "$QUICKLISP\_DIST\_VERSION" = "latest" ]; then QUICKLISP\_DIST\_VERSION=nil else QU...\
  Common-Lisp.net!
- [link](https://github.com/quil-lang/qvm/blob/master/doc/lisp-setup.md)\
  Lisp Setup Instructions - quil-lang/qvm - GitHub\
  Manual Instructions \* Download quicklisp. lisp . \* Run sbcl and (load "quicklisp. lisp") . \* Run (quicklisp-quickstart:install) . ...\
  GitHub

Show all

how to use quicklisp

Quicklisp is primarily used within the Common Lisp REPL to manage libraries, similar to `pip` for Python or `npm` for JavaScript. Most commands use the `ql:` nickname. \[[1](https://medium.com/code-is-data-data-is-code/common-lisp-trick-4-use-quicklisp-to-install-packages-a034b6236837), [2](https://common-lisp-libraries.readthedocs.io/quicklisp/)]

1\. Basic Library Management

The most common tasks are searching for and installing libraries.

- **Search for a library:** Use `system-apropos` to find libraries by name or keyword.\
  lisp

<!---->

```
(ql:system-apropos "dexador")
```

Use code with caution.

- **Install and load a library:** Use `quickload` to download a library and all its dependencies, then load them into your current session.\
  lisp

<!---->

```
(ql:quickload "dexador")
```

Use code with caution.

- **Uninstall a library:** While Quicklisp doesn't have a direct "uninstall" command for single systems, you can remove its files from `~/quicklisp/dists/quicklisp/software/`. \[[1](https://stackoverflow.com/questions/40571533/how-to-install-a-package-with-quicklisp), [2](https://xach.livejournal.com/278047.html)]

2\. Updating Quicklisp and Libraries

Quicklisp maintains its own distribution of libraries, which is typically updated once a month. \[[1](https://stackoverflow.com/questions/44869827/how-to-update-a-dependency-with-quicklisp), [2](https://lisp-journey.gitlab.io/blog/libraries-dependencies-management/)]

- **Update the Quicklisp client:**\
  lisp

<!---->

```
(ql:update-client)
```

Use code with caution.

- **Update all installed libraries:**\
  lisp

<!---->

```
(ql:update-dist "quicklisp")
```

Use code with caution.

3\. Managing Local Projects

If you are developing your own project and want it to be "loadable" via [Quicklisp](https://www.quicklisp.org/index.html), you can use the **local-projects** feature. \[, [2](https://gwangjinkim.medium.com/a-modern-guide-to-common-lisp-package-management-381454eee11f)]

- **Automatic Loading:** Any folder placed in `~/quicklisp/local-projects/` will be automatically indexed.

- **Usage:** Once your project (containing a `.asd` file) is in that directory, you can load it from anywhere using:\
  lisp

<!---->

```
(ql:quickload "my-local-project")
```

Use code with caution.\
\[[1](https://xach.livejournal.com/278047.html)]

4\. Useful Helper Commands

- **List all installed systems:**\
  lisp

<!---->

```
(ql:list-installed-systems)
```

Use code with caution.

- **Check for available updates:**\
  lisp

<!---->

```
(ql:available-dist-versions "quicklisp")
```

Use code with caution.\
\[[1](https://www.reddit.com/r/Common%5FLisp/comments/x9o94s/updating%5Fquicklisp%5Fpackages/)]

Would you like to know how to **integrate Quicklisp with ASDF** for more advanced project management, or see an example of **creating a new project template**?

- [link](https://stackoverflow.com/questions/40571533/how-to-install-a-package-with-quicklisp)\
  How to install a package with quicklisp - Stack Overflow\
  Nov 13, 2016 — Sorted by: 2. The first thing to do about installing a lisp library using quicklisp, is see if it is available via quicklisp: (Not...\
  Stack Overflow
- [link](https://medium.com/code-is-data-data-is-code/common-lisp-trick-4-use-quicklisp-to-install-packages-a034b6236837)\
  Common Lisp Trick #4: Use Quicklisp to Install Packages\
  Sep 10, 2024 — How to Setup Quicklisp for Installing Packages in Common Lisp. Gwang-Jin. 3 min read. Sep 10, 2024. 84. 1. Press enter or click to...\
  Medium·Gwang-Jin
- [link](https://lisp-journey.gitlab.io/blog/libraries-dependencies-management/)\
  Installing libraries, dependencies management - Lisp journey\
  Oct 27, 2017 — Install Quicklisp. Quicklisp is more than a package manager, it is also a central repository (a dist) that ensures that all librar...\
  about.gitlab.com

Show all

is there a cli for quicklisp, like quicklisp directly in terminal?

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Standard Quicklisp does not have its own standalone terminal command</span></mark> (like `apt` or `pip`). Instead, it is designed to be used inside a Lisp REPL. \[[1](https://www.quicklisp.org/), [2](https://github.com/LispCookbook/cl-cookbook/blob/master/getting-started.md), [3](https://lispcookbook.github.io/cl-cookbook/getting-started.html), [4](https://dev.to/vindarel/common-lisp-a-command-line-interactive-terminal-application-in-2-lines-2gnb)]

However, you can use **Roswell** or **Qlot** if you want a dedicated CLI experience outside the REPL.

1\. Roswell (Best for CLI)

Roswell is a full-featured CLI tool that acts as a Lisp implementation manager, script runner, and Quicklisp wrapper. \[[1](https://news.ycombinator.com/item?id=41609491), [2](https://lispcookbook.github.io/cl-cookbook/getting-started.html)]

- **Install:** `sudo apt install roswell` (or follow [Roswell's GitHub instructions](https://github.com/roswell/ros-qlot)).
- **Key Commands:**
  - — Downloads and installs a library using Quicklisp.
  - `ros run` — Starts a Lisp REPL with Quicklisp pre-loaded.
  - `ros use sbcl` — Switches between different Lisp implementations. \[[1](https://lispcookbook.github.io/cl-cookbook/getting-started.html), [2](https://lispcookbook.github.io/cl-cookbook/getting-started.html)]

2\. Qlot (Best for Project Management) \[[1](https://www.reddit.com/r/lisp/comments/6u3zd5/project%5Fmanagement%5Ftool%5Fquicklisp%5Froswell/)]

Qlot is similar to Ruby's Bundler or Node's `npm`. It allows you to pin library versions for specific projects using a `qlfile`. \[[1](https://www.reddit.com/r/lisp/comments/6u3zd5/project%5Fmanagement%5Ftool%5Fquicklisp%5Froswell/), [2](https://fukamachi.hashnode.dev/qlot-tutorial-with-docker)]

- **Usage:** You run `qlot install` in your terminal to install all dependencies listed in your project file. \[[1](https://github.com/svetlyak40wt/qlot-without-roswell)]

3\. Bash Aliases (The DIY Way)

If you don't want to install extra tools, you can create a bash alias that executes Quicklisp commands directly from your terminal by passing them to SBCL: \[[1](https://github.com/LispCookbook/cl-cookbook/issues/293)]

bash

```
# Add this to your ~/.bashrc
alias ql-install='sbcl --eval "(ql:quickload \"$1\")" --quit'
```

Use code with caution.

- **Usage:** `ql-install dexador` would then download the library without you ever manually opening the REPL.

Would you like to see how to **set up a qlfile** for a project using Qlot, or more details on **Roswell's implementation management**?

- [link](https://www.quicklisp.org/)\
  Quicklisp beta\
  Jan 1, 2026 — Basic Commands ... Quicklisp will automatically download any supporting software it needs to load the system. Please note that som...\
  Quicklisp
- [link](https://lispcookbook.github.io/cl-cookbook/getting-started.html)\
  Getting started with Common Lisp - GitHub Pages\
  Roswell is a Common Lisp tool that is: \* an implementation manager: it makes it easy to install a Common Lisp implementation ( ros...\
  GitHub Pages documentation
- [link](https://github.com/LispCookbook/cl-cookbook/blob/master/getting-started.md)\
  cl-cookbook/getting-started.md at master - GitHub\
  Install libraries ... and voilà. You can use it right away: (str:title-case "HELLO LISP!") SEE MORE: To understand the package:a-s...\
  GitHub

Show all

roswell not found even after apt update

Roswell is not available in the official Ubuntu `apt` repositories. To install it, you must either download the `.deb` package directly from their GitHub or build it from source. \[[1](https://roswell.github.io/Installation.html), [2](https://roswell.github.io/Installation.html)]

Option 1: Direct `.deb` Installation (Easiest)

You can download and install the latest pre-built Debian package using `dpkg`:

1. **Download the package:**\
   bash

<!---->

```
curl -sOL `curl -s https://api.github.com/repos/roswell/roswell/releases/latest | jq -r '.assets | .[] | select(.name|test("\\.deb$")) | .browser_download_url'`
```

Use code with caution.\
_Note: You may need to install `jq` first (`sudo apt install jq`) for this automatic command to work._
2\. **Install the package:**\
bash

```
sudo dpkg -i roswell_*.deb
sudo apt install -f  # Fixes any missing dependencies
```

Use code with caution.
3\. **Run setup:**\
bash

```
ros setup
```

Use code with caution.\
\[[1](https://medium.com/data-science/how-to-set-up-common-lisp-ide-in-2021-5be70d88975b)]

Option 2: Build from Source

If the pre-built package doesn't work for your specific Ubuntu version, building from source is highly reliable: \[, [2](https://roswell.github.io/Installation.html)]

1. **Install dependencies:**\
   bash

<!---->

```
sudo apt install git build-essential automake libcurl4-openssl-dev zlib1g-dev
```

Use code with caution.
2\. **Clone and build:**\
bash

```
git clone -b release https://github.com/roswell/roswell.git
cd roswell
sh bootstrap
./configure
make
sudo make install
```

Use code with caution.
3\. **Initialize:**\
bash

```
ros setup
```

Use code with caution.\
\[[1](https://roswell.github.io/Installation.html)]

Option 3: Using Homebrew

If you have Homebrew for Linux installed, you can use it just like on a Mac: \[[1](https://github.com/roswell/roswell/wiki/Installation), [2](https://roswell.github.io/Installation.html)]

bash

```
brew install roswell
ros setup
```

Use code with caution.

Once installed, you can use the `ros` command to manage implementations (e.g., `ros install sbcl`) or install Lisp-based CLI tools like `qlot`. \[[1](https://github.com/roswell/roswell/)]

Would you like to see how to use Roswell to **install specific versions of SBCL** or create **portable Lisp scripts**?

- [link](https://medium.com/data-science/how-to-set-up-common-lisp-ide-in-2021-5be70d88975b)\
  How to Set Up a Common Lisp IDE in 2021 - Medium\
  Aug 29, 2021 — Install Roswell in Ubuntu 20.04 LTS (and older Ubuntu versions) # Following instructions in github of roswell:# system-wide instal...\
  Medium·Gwang-Jin
- [link](https://github.com/roswell/roswell/)\
  Roswell - Common Lisp environment setup Utility. - GitHub\
  Managing/Installing Several Lisp Installations. $ ros install # displays a list of all installable implementations $ ros install s...\
  GitHub
- [link](https://github.com/roswell/roswell/wiki/Installation)\
  Installation · roswell/roswell Wiki - GitHub\
  Linux \* On Alpine, Roswell is available in edge: $ apk add --repository=http://dl-cdn.alpinelinux.org/alpine/edge/testing roswell.\
  GitHub

Show all

compare sbcl and clisp

SBCL and CLISP are both open-source Common Lisp implementations, but they are built for very different priorities. **SBCL** is the industry standard for performance, while **CLISP** is often preferred for lightweight scripting or teaching. \[[1](https://softwareengineering.stackexchange.com/questions/184182/which-common-lisp-implementation-to-use), [2](https://stackoverflow.com/questions/25092317/what-are-the-main-differences-between-clisp-ecl-and-sbcl), [3](https://common-lisp.net/implementations)]

Key Differences at a Glance

| Feature \[[1](https://lisp-lang.org/wiki/article/implementations), [2](https://softwareengineering.stackexchange.com/questions/184182/which-common-lisp-implementation-to-use), [3](https://common-lisp.net/implementations), [4](https://www.reddit.com/r/lisp/comments/v8emk2/implementation%5Fcomparison/), [5](https://techfindings.net/archives/2803), [6](https://www.youtube.com/watch?v=QFQY4UnolnQ), [7](https://stackoverflow.com/questions/574279/how-do-the-various-ansi-cl-implementations-differ), [8](https://www.n16f.net/blog/common-lisp-implementations-in-2023/), [9](https://wiki.archlinux.org/title/Common%5FLisp), [10](https://www.reddit.com/r/lisp/comments/t70d1k/is%5Fclisp%5Fstill%5Frecommended%5Fto%5Fuse/), [12](https://news.ycombinator.com/item?id=25583506)] | SBCL (Steel Bank Common Lisp)                                                                                   | CLISP                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Execution**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **Native Code Compiler.** Compiles Lisp directly to machine code.                                               | **Bytecode Interpreter.** Uses a virtual machine, similar to older Java or Python.   |
| **Performance**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Very High.** One of the fastest dynamic language implementations, comparable to C or Java in many benchmarks. | **Moderate to Low.** Slower for heavy computation because it uses bytecode.          |
| **Maintenance**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | **Highly Active.** Monthly releases with frequent bug fixes and performance updates.                            | **Low Activity.** Development has slowed significantly; official releases are rare.  |
| **Platform Support**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Excellent on Linux and macOS; experimental/limited on Windows.                                                  | Highly portable; runs almost anywhere with a C compiler (excellent Windows support). |
| **Use Case**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Production web apps, AI, heavy data processing, and general development.                                        | Quick scripting, educational demos, and low-memory environments.                     |

Deep Dive: Performance vs. Usability

- **Compiler vs. Interpreter:** SBCL focuses on "compile-time" performance. It has an advanced type inference engine that helps it generate highly optimized machine code. CLISP, by contrast, is a smaller, "Lisp-calculator" style implementation that is quick to get running but doesn't optimize for raw speed.
- **Error Reporting:** While SBCL provides extremely detailed compiler diagnostics, they can be intimidating for beginners. CLISP is often cited as having a more intuitive debugger for those just learning the language.
- **Memory and Startup:** CLISP typically has a much smaller installation footprint and can be more memory-efficient for very simple scripts. SBCL's memory management is more robust for large-scale applications with massive stack requirements.
- **Threading:** SBCL includes strong support for native threading and concurrency primitives. CLISP historically lacks native threading, which limits it for modern multi-core web servers. \[, [2](https://softwareengineering.stackexchange.com/questions/184182/which-common-lisp-implementation-to-use), [3](https://lisp-lang.org/wiki/article/implementations), [4](https://www.reddit.com/r/lisp/comments/v8emk2/implementation%5Fcomparison/), [5](https://news.ycombinator.com/item?id=25583506), [6](https://stackoverflow.com/questions/1865820/sbcl-standard-library-documentation), [7](https://www.reddit.com/r/lisp/comments/7g4zfk/clisp%5Fpreferred%5Ffor%5Fscripting/), [8](https://techfindings.net/archives/2803)]

**Summary:** If you are building a real application or doing anything performance-heavy, use **SBCL**. If you want a small tool for quick logic scripts or are on a very resource-constrained system (like an old Windows machine), **CLISP** is a viable lightweight alternative. \[[1](https://softwareengineering.stackexchange.com/questions/184182/which-common-lisp-implementation-to-use)]

Would you like to see how to **configure SBCL with specific optimization flags** for maximum performance, or are you interested in **porting a script from CLISP to SBCL**?

- [link](https://www.reddit.com/r/lisp/comments/v8emk2/implementation%5Fcomparison/)\
  Implementation comparison : r/lisp - Reddit\
  Jun 9, 2022 — The code was not optimized (i.e. it was a pure CLOS code on Common Lisp, hashmaps on Clojure, objects/classes in Java and structs ...\
  Reddit·r/lisp
- [link](https://techfindings.net/archives/2803)\
  Playing with LISP and LISP vs C - TechFindings\
  Sep 24, 2017 — Choosing a (Common) Lisp implementation. There are quite many Common Lisp implementations out there. The one Hackerrank uses is SB...\
  techfindings.net
- [link](https://common-lisp.net/implementations)\
  implementations.html - Common-Lisp.net!\
  Open source \* SBCL. Steel Bank Common Lisp (SBCL) is a high performance Common Lisp compiler. It is open source / free software, w...\
  Common-Lisp.net!

Show all

# (d)

install homebrew on ubuntu

To install Homebrew on Ubuntu, you must run the official installation script and then add the Brew binary to your system's PATH. \[[1](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-homebrew-on-linux), [2](https://www.youtube.com/watch?v=q3t0JvfOC-4\&t=7), [3](https://linuxconfig.org/installing-homebrew-on-ubuntu-debian-a-step-by-step-guide)]

1\. Install Necessary Dependencies \[[1](https://itsfoss.com/homebrew-linux/)]

Before starting, ensure your system is updated and has the required build tools. \[[1](https://dikabrenda.medium.com/how-to-install-brew-on-ubuntu-20-04-lts-linux-714c73379dd4), [2](https://itsfoss.com/homebrew-linux/), [3](https://linuxconfig.org/how-to-install-brew-on-linux)]

- Update your package list: `sudo apt update`
- Install core dependencies: `sudo apt install build-essential curl git procps file`. \[[1](https://linuxconfig.org/how-to-install-brew-on-linux), [2](https://itsfoss.com/homebrew-linux/)]

2\. Run the Homebrew Installation Script

Copy and paste this command into your terminal to download and execute the official [Homebrew installer](https://brew.sh/): \[[1](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-homebrew-on-linux), [2](https://mac.install.guide/homebrew/3), [3](https://www.youtube.com/watch?v=fQpcJc-kyVI)]

bash

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Use code with caution.

During the process, you may be prompted to enter your password and press **Enter** to continue. \[[1](https://www.youtube.com/watch?v=pRsHimqix24\&t=1), [2](https://www.howtogeek.com/i-tried-homebrew-on-linux/)]

3\. Add Homebrew to Your PATH \[[1](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-homebrew-on-linux)]

Once the installation finishes, you need to add Homebrew to your shell configuration (like `.bashrc` or `.zshrc`) so you can use the `brew` command globally. \[[1](https://linuxconfig.org/installing-homebrew-on-ubuntu-debian-a-step-by-step-guide), [2](https://stackoverflow.com/questions/64680855/how-to-install-homebrew-on-windows-wsl-ubuntu-and-fix-zsh-brew-command-not-fo), [3](https://dikabrenda.medium.com/how-to-install-brew-on-ubuntu-20-04-lts-linux-714c73379dd4)]

- **Run these three commands** to update your current session and configuration:\
  bash

<!---->

```
echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> ~/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"
```

Use code with caution.

4\. Verify the Installation

Run the following to check if everything is set up correctly:

- `brew --version`: Confirms the installed version.
- `brew doctor`: Performs a diagnostic check to find potential issues. \[[1](https://dikabrenda.medium.com/how-to-install-brew-on-ubuntu-20-04-lts-linux-714c73379dd4), [2](https://linuxconfig.org/installing-homebrew-on-ubuntu-debian-a-step-by-step-guide), [3](https://itsfoss.com/homebrew-linux/)]

Why use Homebrew on Ubuntu?

While `apt` is the primary package manager for Ubuntu, Homebrew (formerly known as Linuxbrew) allows you to install newer versions of software directly into your home directory without needing root access. This is particularly useful for developers who need the latest versions of tools like Python, Ruby, or Go. \[[1](https://docs.brew.sh/Homebrew-on-Linux), [2](https://www.youtube.com/watch?v=eaq%5FrG4vAFE), [3](https://www.xda-developers.com/homebrew-good-linux-mac/)]

**Need help installing a specific tool** through Homebrew now that it's set up?

- [link](https://docs.brew.sh/Homebrew-on-Linux)\
  Homebrew on Linux\
  Install. Instructions for the best, supported install of Homebrew on Linux are on the homepage. The installation script installs H...\
  Homebrew Documentation
- [link](https://dikabrenda.medium.com/how-to-install-brew-on-ubuntu-20-04-lts-linux-714c73379dd4)\
  How to install Brew on Ubuntu 20.04 LTS Linux\
  Aug 21, 2022 — HomeBrew installation on Ubuntu 20.04 Linux. 1. Open a command terminal. Run terminal and then first, issue an update command- sud...\
  Medium·Dika Brenda Angkasa
- [link](https://stackoverflow.com/questions/64680855/how-to-install-homebrew-on-windows-wsl-ubuntu-and-fix-zsh-brew-command-not-fo)\
  How to Install Homebrew on Windows WSL Ubuntu, and fix "zsh\
  Nov 4, 2020 — \* 2 Answers. Sorted by: This answer is not useful. Loading when this answer was accepted… In a wsl environment, brew is installed ...\
  Stack Overflow

Show all