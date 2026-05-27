how to start tmux from cwd

To start a new `tmux` session directly from your **Current Working Directory (CWD)**, simply run the base command from your terminal: \[[1](https://medium.com/@lanycrost/every-hacker-should-have-a-great-terminal-tmux-part-1-introduction-82b8f4fa5e79)]

bash

```
tmux
```

Use code with caution.

By default, **`tmux` inherits the CWD** of the shell that spawns it. Any initial window or pane will automatically open in that exact folder. \[[1](https://askubuntu.com/questions/501591/open-terminal-in-current-directory-with-tmux), [2](https://superuser.com/questions/302187/can-i-get-tmux-split-screen-to-retain-the-pwd)]

Managing CWD for Future Windows and Panes

If you are already inside `tmux` and want to ensure new windows or splits open in your current path, or if you need to switch the directory of an existing session, follow these steps:

- **Open a new window in the CWD**:
  - Press your prefix (`Ctrl + b` by default) followed by `:new-window -c "#{pane_current_path}"`.
- **Split the pane in the CWD**:
  - Horizontal split: Press `Ctrl + b` then `:split-window -h -c "#{pane_current_path}"`.
  - Vertical split: Press `Ctrl + b` then `:split-window -v -c "#{pane_current_path}"`.
- **Change the default path of an active session**:
  - If you have changed directories inside a pane and want all _future_ windows to open there, press `Ctrl + b` then `:` to open the command prompt.
  - Type `attach-session -c /absolute/path/to/directory` and press `Enter`. \[[1](https://unix.stackexchange.com/questions/619133/how-to-change-the-tmux-working-directory-with-a-shell-command), [2](https://opensource.com/article/20/7/tmux-cheat-sheet), [3](https://www.reddit.com/r/devops/comments/p60qyt/a%5Fgentle%5Fguide%5Fto%5Ftmux/), [4](https://clubmate.fi/tmux), [5](https://unix.stackexchange.com/questions/12032/how-to-create-a-new-window-on-the-current-directory-in-tmux)]

Make CWD the Default Behavior \[[1](https://towardsdatascience.com/a-beginners-guide-to-tmux-a-multitasking-superpower-for-your-terminal/)]

To avoid typing the path flags every time, you can bind keys in your configuration file. Add the following lines to your `~/.tmux.conf` file to make new windows and panes automatically inherit the current pane's directory: \[[1](https://unix.stackexchange.com/questions/101949/new-tmux-panes-go-to-the-same-directory-as-the-current-pane-new-tmux-windows-go), [2](https://www.youtube.com/watch?v=OGiRb7LeIIM\&t=213)]

tmux

```
# Open new windows in the current directory
bind c new-window -c "#{pane_current_path}"

# Open new splits in the current directory
bind '"' split-window -c "#{pane_current_path}"
bind % split-window -h -c "#{pane_current_path}"
```

Use code with caution.

After updating the file, reload your configuration within `tmux` by pressing `Ctrl + b` then `:source-file ~/.tmux.conf`. \[[1](https://www.youtube.com/watch?v=OGiRb7LeIIM\&t=213), [2](https://towardsdatascience.com/a-beginners-guide-to-tmux-a-multitasking-superpower-for-your-terminal/)]

If you would like, I can show you how to write a **shell alias** to automatically attach to an existing session or create a new one in your CWD with a single command. Would you find that helpful? \[[1](https://unix.stackexchange.com/questions/52873/tmux-set-default-session-for-attach)]

- [link](https://askubuntu.com/questions/501591/open-terminal-in-current-directory-with-tmux)\
  Open terminal in current directory with tmux - Ask Ubuntu\
  Jul 23, 2014 — 1 Answer. Sorted by: 1. Tmux always opens with your present working directory. Like, if you are in /home/user/Desktop/, tmux sessi...\
  Ask Ubuntu
- [link](https://unix.stackexchange.com/questions/101949/new-tmux-panes-go-to-the-same-directory-as-the-current-pane-new-tmux-windows-go)\
  New Tmux Panes go to the same directory as the current pane\
  Nov 20, 2013 — Related \* Split tmux window with same initial command in new tmux pane. \* tmux new pane has home directory as default instead of p...\
  Unix & Linux Stack Exchange
- [link](https://unix.stackexchange.com/questions/619133/how-to-change-the-tmux-working-directory-with-a-shell-command)\
  pwd - How to change the tmux working directory with a shell command\
  Nov 11, 2020 — \[3] For using tmux command prompt manually, just type the escape keybind (default to C-b ) and then type :attach -c /new/working/d...\
  Unix & Linux Stack Exchange

Show all

You said: does not work in vscode

If running `tmux` inside the Visual Studio Code integrated terminal still opens your home directory instead of your project folder, it is usually because VS Code is passing a default starting directory to your shell.

Here is how to fix it:

1\. Fix the VS Code Terminal Settings

VS Code has a specific setting that controls the starting directory for new terminal instances.

1. Open settings using `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (macOS).
2. Search for `terminal.integrated.cwd` in the settings search bar.
3. Ensure this field is completely **empty**. If it has a path or a hardcoded directory, delete it. Leaving it blank forces VS Code to use your workspace root folder.

2\. Check for Shell Configuration Overrides

Sometimes, your shell configuration file (`~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`) contains a command that forcefully changes your directory whenever a new interactive shell or login shell is started.

1. Open your shell config file (e.g., `nano ~/.zshrc`).
2. Search for any lines containing `cd ~/` or `cd /some/path`.
3. If you find a hardcoded `cd` command, remove or comment it out, as it will override both VS Code and `tmux`.

3\. Force tmux to Use the Parent Shell's Path

If VS Code is correctly positioned in your project folder but `tmux` still drops you into the home directory, you can explicitly force `tmux` to use the terminal's current path when launching:

bash

```
tmux new-session -c "$PWD"
```

Use code with caution.

4\. Create a Permanent Shortcut

If the command above fixes your issue, you can create a permanent alias so you only have to type `tmux`.

1. Open your shell configuration file (`~/.zshrc` or `~/.bashrc`).

2. Add this line at the bottom:\
   bash

<!---->

```
alias tmux='tmux new-session -c "$PWD"'
```

Use code with caution.
3\. Save the file and restart your VS Code terminal.

If you want, I can help you set up a **workspace-specific automation script** or check your specific **shell configuration file** to find exactly what is resetting your path. Which shell (like `bash` or `zsh`) are you using?

You said: seems i have cd ~ in zshrc. but when i remove it, it always inherits the prev cwd when i open a new terminal

That happens because **VS Code is designed to remember your previous folder** when opening new terminals. When you removed `cd ~`, you allowed VS Code's native session-restoration behavior to take over, which defaults to inheriting the active directory of your last opened terminal pane.

If you want every **new VS Code terminal** to start fresh at your main project workspace folder (instead of inheriting the previous terminal's path), you need to change one specific setting in VS Code:

The Fix: Force VS Code to Use the Workspace Root

1. Open your VS Code Settings (`Ctrl + ,` on Windows/Linux or `Cmd + ,` on macOS).
2. Type **`terminal.integrated.cwd`** into the top search bar.
3. Look for the dropdown menu under **Terminal > Integrated: Cwd**.
4. Change the setting from its default/empty state to **`${workspaceFolder}`**.

Why this works:

- **Old Behavior (`cd ~`)**: Forced your shell to jump to your home directory every time, breaking `tmux` launches.
- **Current Behavior (Empty/Blank)**: VS Code automatically copies the exact path of the last active terminal you used.
- **New Behavior (`${workspaceFolder}`)**: Forces every single new terminal tab to open precisely at the root directory of whatever project folder you currently have open in VS Code. This gives `tmux` the correct context every time you launch it.

If you are using **VS Code Workspaces** with multiple root folders, I can show you how to target a **specific subfolder** automatically. Would that help with your project setup?

You said: i mean on ghostty

Because you removed `cd ~` from your `.zshrc`, Ghostty is now able to track your shell's Current Working Directory (CWD). By default, **Ghostty implements native OSC 7 shell integration to make new tabs or windows inherit the exact active path of your previous pane**. [link](https://q2a.vifm.info/1965/splitting-ghostty-terminal-doesnt-current-working-directory)

If you prefer Ghostty tabs to start fresh at the exact project or directory where you originally launched the main window—rather than copying the changing paths of your active terminal panes—you can adjust this behavior using your configurations:

Method 1: Change Ghostty's Global Tab Behavior

You can configure Ghostty to strictly use the home folder or an inherited initial working directory for all newly opened instances instead of copying the previous tab's active folder.

1. Open your Ghostty configuration file (usually found at `~/.config/ghostty/config`).

2. Append or modify the following line:\
   text

<!---->

```
# Force new tabs/windows to use home or a specific base directory
window-inherit-working-directory = false
```

Use code with caution.

Method 2: Create a Dedicated tmux Shell Binding

If you want Ghostty to maintain its default path-inheritance feature for general terminal tasks, but you explicitly want `tmux` to open cleanly without dragging along old, nested directory history, use a Zsh alias setup.

Add an explicit launch alias to the bottom of your `~/.zshrc` file:

bash

```
alias tmux='tmux new-session -c "$PWD"'
```

Use code with caution.

This forces `tmux` to snap directly to the exact folder you are physically looking at in your active prompt when you type the command, overriding any internal terminal tracking variables.

Method 3: Verify Ghostty's Shell Integration

If your new tabs still behave erratically, ensure Ghostty's automatic shell environment hook is running correctly without conflicting plugins in your Zsh setup. You can explicitly force it in your `~/.config/ghostty/config`:

text

```
shell-integration = zsh
```

Use code with caution.

Would you like help mapping a **custom Ghostty keybinding** to instantly open a new tab directly in your original starting path?

- [link](https://mansoorbarri.com/tmux-ghostty/)\
  Tmux & Ghostty - Mansoor Barri\
  Feb 12, 2025 — While using Ghostty, I wanted a Tmux session to start automatically as soon as I launched the terminal. Ghostty didn't offer a dir...\
  mansoorbarri.com
- [link](https://ghostty.org/docs/features/shell-integration)\
  Shell Integration - Features - Ghostty\
  Ghostty detects your shell using a simple string match on the basename of the command to execute. If you are using a supported she...\
  Ghostty
- [link](https://q2a.vifm.info/1965/splitting-ghostty-terminal-doesnt-current-working-directory)\
  Splitting pane in Ghostty terminal doesn't use the ... - Vifm Q\&A\
  Jan 6, 2025 — 1 Answer. 0 votes. answered Jan 6, 2025 by xaizek. Hello. Looks like Ghostty relies exclusively on OSC 7 of which I've never heard...\
  q2a.vifm.info

You said: window-inherit-working-directory = false does not work

The configuration variable `window-inherit-working-directory = false` only dictates what happens when you open a **completely new OS window**. If you are opening **new tabs or splits** within the same window, Ghostty ignores that setting and uses a completely separate configuration variable. [link](https://github.com/ghostty-org/ghostty/issues/3312)

Additionally, if you are on Linux, Ghostty's single-instance desktop mode will sometimes forcefully override this setting. [link](https://github.com/ghostty-org/ghostty/discussions/9372)

To completely stop Ghostty from inheriting the changing CWD of your previous tabs, apply the configurations detailed below.

1\. Update the Tab Inheritance Setting

Ghostty splits directory inheritance into separate variables for windows, tabs, and base directories. If you want your tabs to also stop copying your active terminal path and instead default to your primary folder, update your config file: [link](https://x.com/sleepy%5Fkeita/status/2031171816937710055)

1. Open your Ghostty configuration file (`~/.config/ghostty/config`).

2. Add or update these lines:\
   text

<!---->

```
# Stop windows from copying previous window locations
window-inherit-working-directory = false

# Stop tabs from copying previous tab locations
tab-inherit-working-directory = false

# Force all new tabs/windows to start clean at your home directory
working-directory = home
```

Use code with caution.\
[link](https://x.com/sleepy%5Fkeita/status/2031171816937710055)

2\. Fix the Linux Single-Instance Glitch (If on Linux)

If you are running Ghostty on a Linux desktop environment (like GNOME, KDE, or Hyprland), Ghostty defaults to a performance feature called single-instance mode. This mode caches your very first terminal's directory, causing all subsequent windows to completely ignore your configuration settings. [link](https://github.com/ghostty-org/ghostty/discussions/9372)

To disable this behavior:

1. Open your `~/.config/ghostty/config` file.

2. Add this flag to ensure settings are parsed correctly per window:\
   text

<!---->

```
gtk-single-instance = false
```

Use code with caution.\
[link](https://github.com/ghostty-org/ghostty/discussions/4123)

3\. Quick Test Without Configs

To verify if your shell environment is passing a bad parameter to Ghostty, you can bypass the config entirely by starting a fresh window from your terminal using an explicit flag: [link](https://github.com/ghostty-org/ghostty/discussions/9372)

bash

```
ghostty --working-directory=home
```

Use code with caution.

Are you primarily attempting to make **new tabs/splits** default to your project folder, or do you want them to always drop you back at the **home (`~`) directory**? Let me know, and I can provide the exact path syntax for your layout!

- [link](https://x.com/sleepy%5Fkeita/status/2031171816937710055)\
  Add this to your Ghostty config: window-inherit-working ...\
  Mar 10, 2026 — Add this to your Ghostty config: window-inherit-working-directory = false tab-inherit-working-directory = true New windows will st...\
  X·sleepy\_keita
- [link](https://github.com/ghostty-org/ghostty/discussions/9372)\
  window-inherit-working-directory does not do anything #9372\
  Oct 27, 2025 — ghostty /tmp does not seem supported, but ghostty --working-directory=/tmp does work, which is a fairly standard option (gnome-ter...\
  GitHub
- [link](https://github.com/manaflow-ai/cmux/issues/177)\
  ghostty window-inherit-working-directory config ignored #177\
  Feb 20, 2026 — I have this. window-inherit-working-directory=false working-directory=/Users/foo. in my ghostty confg (and the setting appears whe...\
  GitHub

Show all