what apps respect dot hidden file

3:56 AM

Most apps built for **Linux, macOS, Android, and Unix-based systems** respect the convention where any file or folder starting with a period (e.g., `.hidden_file`) is hidden from normal view. \[[1](https://www.reddit.com/r/YouShouldKnow/comments/41aqgr/ysk%5Fplacing%5Fa%5Fdot%5Fin%5Ffront%5Fof%5Fa%5Ffolder%5Fin%5Fandroid/), [2](https://en.wikipedia.org/wiki/Hidden%5Ffile%5Fand%5Fhidden%5Fdirectory), [3](https://www.interserver.net/tips/kb/find-manage-hidden-files-linux-guide/), [4](https://www.youtube.com/watch?v=RKtXIFpxvw8), [5](https://www.slideshare.net/slideshow/hiding-filespptx/251808267)]

Below is a breakdown of how different categories of applications handle these dotfiles.

### 🛡️ Desktop Operating Systems & File Managers

Standard desktop file managers hide dotfiles by default to protect system configurations and user data from accidental modification. \[[1](https://velvetshark.com/til/macos-keyboard-shortcut-show-hidden-files), [2](https://phoenixnap.com/kb/show-hidden-files-linux), [3](https://en.wikipedia.org/wiki/Hidden%5Ffile%5Fand%5Fhidden%5Fdirectory)]

- **macOS Finder**: Hides all dotfiles by default. You can toggle visibility instantly by pressing `Cmd + Shift + Period (.)`.
- **Linux File Managers (Nautilus, Dolphin, Thunar)**: Respect dotfile hiding entirely. You can show them by pressing `Ctrl + H`.
- **Windows Explorer**: Windows relies on its own "Hidden" attribute rather than the dotfile naming convention. However, third-party development tools running on Windows usually still respect dotfiles. \[[1](https://www.reddit.com/r/iOSProgramming/comments/orgzmd/viewing%5Fsystem%5Fdot%5Ffiles/), [2](https://apple.stackexchange.com/questions/439872/how-do-i-make-files-app-show-hidden-files-on-ios), [3](https://www.reddit.com/r/SteamDeck/comments/v73bj2/how%5Fto%5Fmake%5Fdot%5Ffolders%5Fvisible%5Fto%5Fother/), [4](https://www.youtube.com/watch?v=VcqtWsbSbgU), [5](https://support.microsoft.com/en-us/windows/file-explorer-in-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1)]

### 📱 Mobile Systems (Android & iOS)

Mobile platforms utilize dotfiles to hide system assets and application caches from user galleries. \[[1](https://play.google.com/store/apps/details?id=finecoder.utility.findclean.hiddenfoldersfiles\&gl=us), [2](https://www.reddit.com/r/YouShouldKnow/comments/41aqgr/ysk%5Fplacing%5Fa%5Fdot%5Fin%5Ffront%5Fof%5Fa%5Ffolder%5Fin%5Fandroid/)]

- **Stock Android File Managers**: Tools like Files by Google hide dotfiles out of the box. Most third-party file managers—such as Solid Explorer and Total Commander—likewise hide them until you manually enable "Show hidden files" in their settings menus.
- **Android Media Galleries**: Standard photo and video galleries completely ignore any media files contained within a dot-prefixed folder.
- **Apple iOS Files App**: Apple tightly restricts dotfile visibility. The built-in [iOS Files App](https://apple.stackexchange.com/questions/439872/how-do-i-make-files-app-show-hidden-files-on-ios) hides dotfiles entirely, and it lacks a toggle switch to reveal them. \[[1](https://play.google.com/store/apps/details?id=com.hiddenfiles.finder\&gl=us), [2](https://play.google.com/store/apps/details?id=com.alpha.filehider\&gl=us), [3](https://www.reddit.com/r/YouShouldKnow/comments/41aqgr/ysk%5Fplacing%5Fa%5Fdot%5Fin%5Ffront%5Fof%5Fa%5Ffolder%5Fin%5Fandroid/), [4](https://play.google.com/store/apps/details?id=finecoder.utility.findclean.hiddenfoldersfiles\&gl=us), [5](https://apple.stackexchange.com/questions/439872/how-do-i-make-files-app-show-hidden-files-on-ios)]

### 💻 Developer Tools & Code Editors

Since code configurations (like `.git`, `.env`, or `.vscode`) use dotfiles, development apps are built to handle them specifically. \[[1](https://css-tricks.com/using-dotfiles-for-managing-development-and-many-other-magical-things/), [2](https://medium.com/free-code-camp/these-tools-will-help-you-write-clean-code-da4b5401f68e), [3](https://nphausg.medium.com/visual-studio-code-show-hidden-folder-5fd0f01d3d5e)]

- **IDE & Text Editors (VS Code, IntelliJ, Sublime Text)**: These applications display dotfiles within your project directory tree so you can edit configuration files. However, they frequently hide specific system-level dotfiles (like `.DS_Store`) to keep your workspace clean.
- **Git & Version Control**: Git directly utilizes dotfiles (like `.gitignore`) to manage repository behaviors.
- **Command Line Utilities**: Standard terminal commands like `ls` hide dotfiles automatically. You must use the `ls -a` command to reveal them. \[[1](https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/), [2](https://maketecheasier.com/dotfile-management-with-gnu-stow/), [3](https://blog.stackademic.com/how-to-globally-ignore-ds-store-files-in-git-on-macos-b97f2d996fbf), [4](https://www.jakewiesler.com/blog/managing-dotfiles), [5](https://en.wikipedia.org/wiki/Hidden%5Ffile%5Fand%5Fhidden%5Fdirectory)]

Are you looking to hide specific **personal files** from your phone's gallery, or are you trying to manage **developer configuration files** on your computer?

- [link](https://www.reddit.com/r/iOSProgramming/comments/orgzmd/viewing%5Fsystem%5Fdot%5Ffiles/)\
  Viewing system / dot files : r/iOSProgramming - Reddit\
  Comments Section. chriswaco. • 5y ago. On macOS you can view hidden files by typing Command + Shift + . in the Finder. On iOS, I t...\
  Reddit
- [link](https://www.reddit.com/r/YouShouldKnow/comments/41aqgr/ysk%5Fplacing%5Fa%5Fdot%5Fin%5Ffront%5Fof%5Fa%5Ffolder%5Fin%5Fandroid/)\
  YSK placing a .(dot) in front of a folder in Android hides it completely ...\
  This marks the folder as "hidden". An alternative would be to place an empty file with the name ". nomedia" into the folder. ... T...\
  Reddit
- [link](https://www.youtube.com/watch?v=VcqtWsbSbgU)\
  Hide your files like a hacker (5 Ways)\
  To make a file disappear in Windows, right-click the file, go to properties, and enable the hidden option. After clicking apply, t...\
  19:17\
  YouTube·NetworkChuck

Show all

## You said: i mean the literal .hidden

3:56 AM

The literal `.hidden` file—a plain text file containing a list of specific filenames or folder names to hide within a directory—is a convention heavily supported by **Linux and UNIX-based desktop environments**. \[[1](https://www.youtube.com/watch?v=VOOfvVPJXCc)]

Instead of renaming a file to start with a dot, you simply add its name to a text file named `.hidden` in that directory, and supported apps will hide it. \[[1](https://www.youtube.com/watch?v=VOOfvVPJXCc)]

### 📂 File Managers That Respect `.hidden` \[[1](https://www.zdnet.com/article/how-to-create-and-manage-hidden-files-in-linux/)]

The `.hidden` file mechanism is native to the **Freedesktop.org standards**, meaning it works perfectly across most major Linux file managers: \[[1](https://www.zdnet.com/article/how-to-create-and-manage-hidden-files-in-linux/)]

- **Nautilus (GNOME Files)**: The default file manager for Ubuntu and Fedora. It fully respects the `.hidden` file.
- **Nemo (Cinnamon)**: The default file manager for Linux Mint.
- **Caja (MATE)**: Used by MATE-based desktop environments.
- **Thunar (XFCE)**: A lightweight file manager that respects the format.
- **PCManFM (LXDE/LXQt)**: Respects the list natively. \[[1](https://www.yahoo.com/tech/hidden-files-linux-home-directory-200012133.html)]

_(Note: **KDE's Dolphin** historically did not support this natively out of the box, as KDE handles hiding behaviors slightly differently, but modern versions do via shared desktop components)._

### 🖥️ Operating Systems That Ignore `.hidden`

Outside of the Linux desktop ecosystem, support for the literal `.hidden` text file is essentially non-existent:

- **macOS Finder**: Completely ignores the `.hidden` file. macOS uses its own `chflags hidden [filename]` command or the metadata file `.DS_Store` to manage visibility.
- **Windows Explorer**: Completely ignores it. Windows relies strictly on NTFS file attributes (the "Hidden" checkbox in file properties). \[[1](https://www.youtube.com/watch?v=VcqtWsbSbgU)]

### 🛠️ How to Create and Use a `.hidden` File

If you are on a compatible Linux environment, you can use it like this: \[[1](https://www.youtube.com/watch?v=VOOfvVPJXCc)]

1. Open a terminal or text editor inside the folder where you want to hide things.

2. Create a file named exactly `.hidden`.

3. Type the exact names of the files or folders you want to hide, **one per line**:\
   text

<!---->

```
private_document.pdf
Secret_Folder
my_photo.jpg
```

Use code with caution.
4\. Save the file and refresh your file manager (or press `Ctrl + R`). The listed items will instantly vanish from view. Just like standard dotfiles, pressing `Ctrl + H` will toggle them back into view. \[[1](https://www.zdnet.com/article/how-to-create-and-manage-hidden-files-in-linux/), [2](https://www.youtube.com/watch?v=VOOfvVPJXCc)]

Are you attempting to use a `.hidden` file to clean up visual clutter in a specific **Linux home directory**, or are you looking for an **automation script** to apply this across multiple folders?

- [link](https://www.youtube.com/watch?v=VcqtWsbSbgU)\
  Hide your files like a hacker (5 Ways)\
  To make a file disappear in Windows, right-click the file, go to properties, and enable the hidden option. After clicking apply, t...\
  19:17\
  YouTube·NetworkChuck
- [link](https://www.youtube.com/watch?v=VOOfvVPJXCc)\
  How to hide files from any file manager on the Linux desktop\
  An interesting method exists to conceal files and directories from Linux file managers. To hide specific directories and files lik...\
  1:29\
  YouTube·How To Make Tech Work from TechRepublic
- [link](https://www.yahoo.com/tech/hidden-files-linux-home-directory-200012133.html)\
  The Hidden Files in Your Linux Home Directory, Explained\
  Hidden files in Linux begin with a period and, by default, file managers do not show them. Many apps clutter your home directory w...\
  Yahoo

Show all

## You said: can i have comments inside

3:56 AM

No, the standard `.hidden` file format **does not support comments**.

If you add lines starting with `#` or any other comment symbol, file managers like Nautilus or Thunar will not recognize them as comments. Instead, they will literally look for a file named `# this is a comment` and try to hide it.

### The Workaround

Because the parser interprets every line as a strict filename, you can technically write whatever you want as long as **no file in that folder matches that text**.

If you want to leave notes for yourself, format them like this:

text

```
# --- SECTION: WORK FILES ---
project_alpha_draft.pdf
financial_spreadsheet.xlsx

# --- SECTION: PERSONAL ---
private_photo.jpg
```

Use code with caution.

### Why this works (with a warning)

- **How it works**: The file manager reads `# --- SECTION: WORK FILES ---`, checks the directory, realizes no file has that exact name, and simply moves to the next line.
- **The Risk**: If you ever accidentally create a file named `# --- SECTION: WORK FILES ---`, it will immediately be hidden from view.

Are you managing a **very large list** of hidden items that requires organization, or would you like to see how to use a **script** to generate this file automatically?

## You said: can i have comments on the right of a line

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, you cannot put comments on the right side of a line</span></mark>.

File managers read each line of a `.hidden` file as one single, exact filename, including any spaces and special characters. If you add text to the right, the system will look for a file that includes your comment in its name.

### ❌ What Happens If You Do It

If you try to add a comment like this:

text

```
secret_document.pdf # This is my private tax file
```

Use code with caution.

The file manager will look for a file literally named `secret_document.pdf # This is my private tax file`. Because that file does not exist, your actual file (`secret_document.pdf`) **will not be hidden**.

### 🛠️ The Only Working Workaround

If you need notes to remember why a file is hidden, you must place the note on **its own separate line directly above or below** the filename:

text

```
# This is my private tax file
secret_document.pdf
```

Use code with caution.

As long as you do not actually have a file named `# This is my private tax file`, the file manager will safely skip that line and correctly hide `secret_document.pdf`.

Are you trying to organize a **long list of files**, or do you need help **troubleshooting a `.hidden` file** that isn't working properly?

## You said: why is .hidden respected. is there a rfc or something.

There is no official **Internet RFC** or formal **Freedesktop.org XDG specification** that explicitly governs the `.hidden` text file.

Instead, `.hidden` is a **de facto community standard** that emerged from a practical necessity to solve a structural limitation in Linux and Unix-based file systems. \[[1](https://forum.xfce.org/viewtopic.php?id=16792)]

### 1. Why it exists: The problem with the "Dotfile" rule

In Unix-like systems, a file is hidden simply by putting a dot (`.`) at the start of its name. However, this presents two major problems for desktop users: \[[1](https://forum.xfce.org/viewtopic.php?id=16792)]

1. **It breaks file paths:** If you change `Documents/MyFolder` to `Documents/.MyFolder`, any application or script relying on the original file path will instantly break because the folder has literally been renamed.
2. **It forces renaming:** You cannot visually hide a file in a standard folder without fundamentally changing its actual filename on disk.

### 2. The Origin: GNOME's Solution

To fix this, the developers of **Nautilus** (the default file manager for the GNOME desktop environment) introduced the `.hidden` file mechanism in the early 2000s.

It allowed users to hide folders (like the messy `~/Public` or `~/Templates` folders in a home directory) from the graphical user interface **without renaming them** and breaking system path dependencies. \[[1](https://softwareengineering.stackexchange.com/questions/309405/whats-the-point-of-hidden-files)]

Because it was a brilliantly simple solution to a universal desktop clutter problem, other independent Linux desktop projects—such as **MATE (Caja)**, **Cinnamon (Nemo)**, and **XFCE (Thunar)**—voluntarily adopted the same behavior to remain compatible with one another. \[[1](https://forum.xfce.org/viewtopic.php?id=16792)]

### 3. Why isn't it an RFC?

- **RFCs are for Networks:** Request for Comments (RFCs) are managed by the Internet Engineering Task Force (IETF) and are strictly meant to define internet and network protocols (like HTTP, TCP/IP, or Email). Local file manager UI behaviors fall entirely outside their scope. \[[1](https://www.ietf.org/process/rfcs/)]
- **It bypasses XDG:** While [Freedesktop.org](https://specifications.freedesktop.org/basedir/) (XDG) handles official specifications for things like standard user folders (`~/Downloads`, `~/Music`) and desktop shortcuts, the `.hidden` file remains a widely respected "gentlemen's agreement" among desktop environment developers rather than a strictly codified law. \[[1](https://specifications.freedesktop.org/desktop-entry/latest-single), [2](https://www.youtube.com/watch?v=X%5FMDhNVN3e0)]

Would you like to know how to use alternative, official standard configurations (like `.desktop` files) to hide specific **applications from your main system menus**? \[[1](https://stackoverflow.com/questions/17799826/where-is-the-format-of-desktop-files-described-e-g-autostart)]

- [link](https://www.ietf.org/process/rfcs/)\
  About RFCs - IETF\
  The RFC series has two subseries, STDs and BCPs, with each numbered STD and BCP comprising one or more RFCs. STDs are 'Internet St...\
  IETF | Internet Engineering Task Force
- [link](https://specifications.freedesktop.org/desktop-entry/latest-single)\
  Desktop Entry Specification\
  Apr 27, 2020 — 2 File naming # Desktop entry files should have the . desktop extension, except for files of Type Directory which should have the ...\
  Freedesktop.org
- [link](https://stackoverflow.com/questions/17799826/where-is-the-format-of-desktop-files-described-e-g-autostart)\
  Where is the format of .desktop files described (e.g. autostart)?\
  Jul 23, 2013 — 1 Answer. Sorted by: 1. Here is the formal specification: http://standards.freedesktop.org/desktop-entry-spec/latest/ Hidden=true ...\
  Stack Overflow

Show all

## You said: what does xdg define

**XDG** (which stands for the Cross-Desktop Group, now formally known as [Freedesktop.org](https://www.freedesktop.org/)) defines <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a set of <strong>interoperability specifications</strong> for Linux and Unix-like operating systems</mark>. \[[1](https://en.wikipedia.org/wiki/Freedesktop.org), [2](https://superuser.com/questions/1559357/what-does-xdg-stand-for)]

Its core purpose is to ensure that different desktop environments (like GNOME, KDE Plasma, and XFCE) and applications handle files, shortcuts, menus, and user data in exactly the same way. \[[1](https://en.wikipedia.org/wiki/Freedesktop.org), [2](https://www.reddit.com/r/linuxmasterrace/comments/jiizsm/what%5Fdoes%5Fxdg%5Fmean/)]

The most critical and widely adopted specifications defined by XDG include:

### 📁 1. XDG Base Directory Specification \[[1](https://wiki.gentoo.org/wiki/XDG)]

This is the most famous XDG specification. It stops applications from scattering hidden folders directly inside your `$HOME` directory by defining standardized environment variables for specific data types: \[[1](https://waveywaves.medium.com/getting-acquainted-with-xdg-freedesktop-on-linux-18e63b5ed120), [2](https://www.reddit.com/r/linuxmasterrace/comments/jiizsm/what%5Fdoes%5Fxdg%5Fmean/), [3](https://alchemists.io/articles/xdg%5Fbase%5Fdirectory%5Fspecification), [4](https://wiki.gentoo.org/wiki/XDG)]

- **`$XDG_CONFIG_HOME`** _(Defaults to `~/.config`)_: Where applications must store user configuration settings.
- **`$XDG_DATA_HOME`** _(Defaults to `~/.local/share`)_: Where applications store persistent data files (like game saves, local mail database, or plugins).
- **`$XDG_CACHE_HOME`** _(Defaults to `~/.cache`)_: Where apps store temporary data like thumbnail caches or downloaded files.
- **`$XDG_STATE_HOME`** _(Defaults to `~/.local/state`)_: Where apps store log files, history files, or current session states. \[[1](https://specifications.freedesktop.org/basedir/), [2](https://waveywaves.medium.com/getting-acquainted-with-xdg-freedesktop-on-linux-18e63b5ed120), [3](https://www.reddit.com/r/linuxmasterrace/comments/jiizsm/what%5Fdoes%5Fxdg%5Fmean/), [4](https://forums.zotero.org/discussion/130089/feature-request-support-the-freedesktop-org-xdg-base-directory-specification), [5](https://alchemists.io/articles/xdg%5Fbase%5Fdirectory%5Fspecification)]

### 📄 2. Desktop Entry Specification

Defines the structure of **`.desktop` files**. These files function as application shortcuts. They contain the app's name, localized descriptions, the command required to run it, and the icon path. Because this is a standard, a single `.desktop` file can properly display an app launcher in GNOME's grid, KDE's menu, or an app dock. \[[1](https://www.freedesktop.org/wiki/Specifications/desktop-entry-spec/), [2](https://www.reddit.com/r/linuxmasterrace/comments/jiizsm/what%5Fdoes%5Fxdg%5Fmean/), [3](https://alchemists.io/articles/xdg%5Fbase%5Fdirectory%5Fspecification), [4](https://raysnotebook.info/computing/apps-freedesktop.html), [5](https://refspecs.linuxbase.org/LSB%5F4.0.0/LSB-TrialUse/LSB-TrialUse/xdgutils.html)]

### 📂 3. XDG User Directories Specification

Defines the location of "well-known" user-facing directories. It manages the standard user folders and translates their names based on the system locale (e.g., creating `~/Downloads`, `~/Documents`, `~/Music`, and `~/Pictures`). \[[1](https://www.freedesktop.org/wiki/Software/), [2](https://wiki.gentoo.org/wiki/XDG)]

### ⚙️ 4. Shared MIME-info & MIME Applications Specification \[[1](https://www.reddit.com/r/linuxquestions/comments/o6ztcv/what%5Fis%5Fxdg%5Fhow%5Fdo%5Fi%5Fset%5Fup%5Fpreferred/)]

Determines **how the system handles different file types**. \[[1](https://superuser.com/questions/1559357/what-does-xdg-stand-for)]

- It outlines how to identify a file type (by sniffing the file's magic bytes or checking its extension).
- It maps those file types to user preferences to determine which application opens them by default (e.g., ensuring a `.png` opens in your favorite image viewer when double-clicked). \[[1](https://www.reddit.com/r/linuxquestions/comments/o6ztcv/what%5Fis%5Fxdg%5Fhow%5Fdo%5Fi%5Fset%5Fup%5Fpreferred/), [2](https://superuser.com/questions/1559357/what-does-xdg-stand-for), [3](https://www.freedesktop.org/wiki/Software/), [4](https://www.freedesktop.org/), [5](https://specifications.freedesktop.org/basedir/0.8)]

### 🖼️ 5. Icon Theme & Icon Naming Specification

Standardizes how system themes name and store icons. This ensures that if an app requests an icon named `edit-copy` or `folder-open`, the operating system can seamlessly pull the matching asset from whichever icon theme the user has currently activated. \[[1](https://specifications.freedesktop.org/), [2](https://www.freedesktop.org/wiki/Software/xdg-utils/), [3](https://www.freedesktop.org/wiki/Software/)]

### 🗑️ 6. Desktop Trash Specification

Defines exactly how the system Trash bin operates. It specifies that when a file is deleted, the raw file is moved to a hidden `.Trash` folder, and a separate `.trashinfo` metadata file is generated alongside it to track the file’s original path and exact deletion date.

Would you like to know how to **manually modify** one of these environment variables on your system, or are you trying to troubleshoot an app that is storing files in the wrong folder? \[[1](https://forums.zotero.org/discussion/130089/feature-request-support-the-freedesktop-org-xdg-base-directory-specification)]

- [link](https://waveywaves.medium.com/getting-acquainted-with-xdg-freedesktop-on-linux-18e63b5ed120)\
  Getting acquainted with XDG(freedesktop) on Linux\
  Dec 25, 2020 — xdg-utils is the more well known name for the project and it is basically. a set of tools that allows applications to easily integ...\
  Medium·Vibhav Bobade
- [link](https://www.freedesktop.org/wiki/Software/)\
  Software - Freedesktop.org\
  Oct 31, 2021 — Desktop specifications and helpers These specifications and their accompanying helper utilities define cross-desktop standards for...\
  Freedesktop.org
- [link](https://www.reddit.com/r/linuxmasterrace/comments/jiizsm/what%5Fdoes%5Fxdg%5Fmean/)\
  What does xdg mean? : r/linuxmasterrace - Reddit\
  Oct 26, 2020 — Hadi\_Benotto. • 6y ago. Cross Desktop Group. XDG from freedesktop.org basically issues a set of specification (plus they hosts a b...\
  Reddit·r/linuxmasterrace

Show all

## You said: when is Projects on home folder defined

An official `~/Projects` folder was introduced with the release of **[xdg-user-dirs version 0.20](https://itsfoss.com/news/new-projects-directory-linux/) in April 2026**. \[[1](https://www.adamsdesk.com/posts/xdg-user-dir-linux-unix-new-default-directory/), [2](https://itsfoss.com/news/new-projects-directory-linux/)]

This update officially expanded the list of standard user directories—which traditionally only included folders like `~/Documents`, `~/Downloads`, and `~/Pictures`—by enabling `Projects` by default. \[[1](https://forum.endeavouros.com/t/projects-folder-in-home/79216), [2](https://github.com/endlessm/xdg-user-dirs/blob/eos5.1/user-dirs.defaults), [3](https://unix.stackexchange.com/questions/299256/is-there-a-specification-or-defined-purpose-of-xdg-user-directories-from-freedes), [4](https://www.adamsdesk.com/posts/xdg-user-dir-linux-unix-new-default-directory/)]

### Why Was It Added?

The `~/Projects` folder resolves a long-standing issue first requested by the Linux community over 11 years prior. \[[1](https://www.adamsdesk.com/posts/xdg-user-dir-linux-unix-new-default-directory/), [2](https://www.instagram.com/reel/DXuLytxgCBu/)]

- **The Clutter Problem**: Applications focused on software engineering, CAD design, 3D printing, and scientific research lacked a logical default storage path. Files were routinely dumped straight into the `$HOME` folder or stuffed into `~/Documents`. \[[1](https://forum.endeavouros.com/t/projects-folder-in-home/79216)]
- **Application Permissions**: Modern containerized application formats, like **Flatpak**, can now request isolated sandbox permissions specifically for the `~/Projects` directory. This avoids requiring broad, insecure access to a user's entire Home directory just to edit files. \[[1](https://forum.endeavouros.com/t/projects-folder-in-home/79216), [2](https://www.instagram.com/reel/DXuLytxgCBu/)]
- **AI Tooling Integration**: Standardizing a project directory makes it significantly easier for developer tools, IDEs, and local AI code agents to find and navigate active development workspaces automatically. \[[1](https://www.youtube.com/watch?v=n6muWgG2Jyw), [2](https://www.reddit.com/r/linuxsucks/comments/1t3ekxv/xdg%5Fknows%5Fbetter%5Fthen%5Fusers%5Fwhat%5Fdirs%5Fthey%5Fwant/)]

### How to Find or Disable It

The folder is generated automatically at system login by the `xdg-user-dirs-update` service. \[[1](https://wiki.archlinux.org/title/XDG%5Fuser%5Fdirectories)]

- **To see the environment variable**: You can check its definition by reading your local [XDG User Directories configuration file](https://wiki.archlinux.org/title/XDG%5Fuser%5Fdirectories) using a terminal:\
  bash

<!---->

```
cat ~/.config/user-dirs.dirs
```

Use code with caution.\
Inside, you will find the new variable defined alongside the others:\
text

```
XDG_PROJECTS_DIR="$HOME/Projects"
```

Use code with caution.\
\[, [3](https://www.reddit.com/r/NobaraProject/comments/1hyap75/xdg%5Fdirs%5Ftemplates%5Ffolder%5Falways%5Freappears/)]

- **To delete it permanently**: If you prefer keeping your code in `~/src`, `~/dev`, or `~/code` instead, you can safely delete the `~/Projects` folder. To prevent the system from re-creating it at your next login, open `~/.config/user-dirs.dirs` in a text editor and point the variable directly to your home directory:\
  text

<!---->

```
XDG_PROJECTS_DIR="$HOME"
```

Use code with caution.\
\[[1](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/), [2](https://itsfoss.com/news/new-projects-directory-linux/), [3](https://www.reddit.com/r/linuxsucks/comments/1t3ekxv/xdg%5Fknows%5Fbetter%5Fthen%5Fusers%5Fwhat%5Fdirs%5Fthey%5Fwant/)]

Are you looking to **point this new standard directory to an existing folder** you already use, or do you need help **configuring a Flatpak app** to use it?

- [link](https://wiki.archlinux.org/title/XDG%5Fuser%5Fdirectories)\
  XDG user directories - ArchWiki\
  May 31, 2026 — Installation. Install xdg-user-dirs. Note Some desktop environments might have it installed already, e.g. GNOME. Creating default ...\
  ArchWiki
- [link](https://www.freedesktop.org/wiki/Software/xdg-user-dirs/)\
  xdg-user-dirs - Freedesktop.org\
  Sep 22, 2025 — www/ Software/ xdg-user-dirs. xdg-user-dirs. xdg-user-dirs is a tool to help manage "well known" user directories like the desktop...\
  Freedesktop.org
- [link](https://www.reddit.com/r/linuxsucks/comments/1t3ekxv/xdg%5Fknows%5Fbetter%5Fthen%5Fusers%5Fwhat%5Fdirs%5Fthey%5Fwant/)\
  XDG knows better then users what dirs they want, and WILL mkdir ...\
  May 4, 2026 — XDG knows better then users what dirs they want, and WILL mkdir them. Then you MAY delete it. Freedom of Linux! Users on rolling r...\
  Reddit·r/linuxsucks

Show all