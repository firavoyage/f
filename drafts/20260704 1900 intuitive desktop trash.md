## trash cli on ubuntu

To manage your trash folder safely from the Ubuntu terminal, use the **`trash-cli`** tool, which serves as a secure alternative to the destructive `rm` command. It integrates directly with the standard system recycle bin used by GNOME, XFCE, and KDE. [link](https://github.com/andreafrancia/trash-cli)

### 🛠️ Installation

Install the utility directly from the official [Ubuntu Package Repository](https://packages.ubuntu.com/search?keywords=trash-cli) by running:

bash

```
sudo apt update && sudo apt install trash-cli
```

Use code with caution.

### 📋 Core Commands

The package provides five distinct utilities to manipulate your recycle bin: [link](https://www.youtube.com/watch?v=KK9sFMLd23E)

- **Send items to trash**:\
  bash

<!---->

```
trash-put filename.txt
```

Use code with caution.

- **List trashed items**: Shows the original file paths, deletion dates, and permissions.\
  bash

<!---->

```
trash-list
```

Use code with caution.

- **Restore a file**: Displays an interactive numbered list allowing you to choose which file to recover.\
  bash

<!---->

```
trash-restore
```

Use code with caution.

- **Remove a specific item permanently**:\
  bash

<!---->

```
trash-rm filename.txt
```

Use code with caution.

- **Empty the entire trash bin**:\
  bash

<!---->

```
trash-empty
```

Use code with caution.\
_(Optional)_ You can also empty files older than a specific number of days. For example, to purge items older than 7 days: `trash-empty 7` [link](https://github.com/andreafrancia/trash-cli)

### 💡 Safety Recommendation

To prevent accidental data loss from muscle memory, you can alias the `rm` command to use `trash-put` instead. Open your configuration file (e.g., `nano ~/.bashrc` or `nano ~/.zshrc`) and add this line to the bottom: [link](https://askubuntu.com/questions/213533/command-to-move-a-file-to-trash-via-terminal)

bash

```
alias rm='trash-put'
```

Use code with caution.

Run `source ~/.bashrc` to apply changes instantly. If you ever genuinely need the original permanent deletion behavior, bypass the alias by typing `\rm` or using `command rm`.

Would you like help setting up an **automated cron job** to clear your old trash weekly, or are you looking to integrate this tool with a **terminal file manager**?

- [link](https://github.com/andreafrancia/trash-cli)\
  trash-cli - Command Line Interface to FreeDesktop.org Trash.\
  简体中文 trash-cli trashes files recording the original path, deletion date, and permissions. It uses the same trashcan used by KDE, G...\
  GitHub
- [link](https://www.youtube.com/watch?v=YeO5qKZK4i8)\
  Trash Management on Linux from the Command Line! ...\
  Jul 11, 2022 — all right let's talk about taking out the trash on Linux. so if you're using a graphical. program say this graphical file manager ...\
  7:11\
  YouTube·Eric Murphy
- [link](https://askubuntu.com/questions/213533/command-to-move-a-file-to-trash-via-terminal)\
  Command to move a file to Trash via Terminal - Ask Ubuntu\
  Nov 6, 2012 — The best solution is to use gio trash as gvfs-trash is deprecated. \* Open the terminal and type the below command: gedit ~/.bashrc...\
  Ask Ubuntu

Show all

## usage: trash-put \[OPTION]... FILE...

Put files in trash

positional arguments:\
files

options:\
-h, --help show this help message and exit\
\--print-completion {bash,zsh,tcsh}\
print shell completion script\
-d, --directory ignored (for GNU rm compatibility)\
-f, --force silently ignore nonexistent files\
-i, --interactive prompt before every removal\
-r, -R, --recursive ignored (for GNU rm compatibility)\
\--trash-dir TRASHDIR use TRASHDIR as trash folder\
-v, --verbose explain what is being done\
\--version show program's version number and exit

To remove a file whose name starts with a '-', for example '-foo',\
use one of these commands:

trash -- -foo

trash ./-foo

The syntax output you shared shows that `trash-put` is fully compatible with standard `rm` flags like `-r` (recursive) and `-f` (force), making it an easy drop-in replacement.

Here is how to use those specific options and handle tricky filenames:

### ⚙️ Practical Option Examples

- **Ignore missing files (`-f` / `--force`)**\
  Silently ignores files that do not exist without throwing an error message:\
  bash

<!---->

```
trash-put -f missing_file.txt
```

Use code with caution.

- **Interactive prompt (`-i` / `--interactive`)**\
  Asks for your explicit confirmation before moving each individual file to the trash:\
  bash

<!---->

```
trash-put -i sensitive_document.pdf
```

Use code with caution.

- **Recursive & Directory flags (`-r`, `-R`, `-d`)**\
  These options are completely **ignored** by the program because `trash-put` safely moves both files and folders by default without needing a recursive flag. They only exist so your existing automated scripts or `rm` muscle-memory aliases do not break.

### ⚠️ Handling Files Starting with Dashes

If a filename starts with a hyphen (like `-important_file.txt`), the terminal will mistake the filename for a command option and throw an error.

To safely bypass this, use a double dash (`--`) to signal the end of command options, or use a relative path (`./`):

bash

```
trash-put -- -important_file.txt
```

Use code with caution.

bash

```
trash-put ./-important_file.txt
```

Use code with caution.

Would you like to see how to create a **custom bash function** to safely handle override flags, or do you need help troubleshooting an **error** with a specific file?

- [link](https://github.com/ali-rantakari/trash)\
  ali-rantakari/trash: Small command-line program for OS X that moves files or folders to the trash. · GitHub\
  By default, trash uses the low-level system API to move the specified files/folders to the trash. If you want trash to ask Finder ...\
  \
  \
  GitHub
- [link](https://www.linuxteck.com/rm-command-in-linux/)\
  Rm Command In Linux: 12 Practical Examples And Complete Guide\
  May 27, 2026 — VIII. Delete a File With a Hyphen in the Name (--) Files starting with - confuse the shell because it interprets the dash as a fla...\
  \
  \
  LinuxTeck

## what is trash-rm

**`trash-rm`** is <mark>the specific command-line utility used to<span> </span><strong>permanently delete</strong><span> </span>individual files or folders that are already inside your trash bin, without emptying the entire recycle bin</mark>.

While `trash-empty` wipes out everything, `trash-rm` acts like a surgical laser to remove only what you specify.

### 📋 Common Usage Examples

- **Permanently delete a specific file:**\
  bash

<!---->

```
trash-rm secret-file.txt
```

Use code with caution.

- **Permanently delete all files matching a pattern:**\
  bash

<!---->

```
trash-rm "*.log"
```

Use code with caution.

- **Permanently delete everything that originally came from a specific directory:**\
  bash

<!---->

```
trash-rm /home/user/Downloads/
```

Use code with caution.

### ⚙️ How it works under the hood

When you run `trash-list`, you see a list of files along with their original paths. `trash-rm` scans those original paths or filenames. Once it finds a match, it completely purges the file from your local storage disk, making it unrecoverable through standard means.

If you are trying to free up space, I can show you how to **filter `trash-list`** to find your largest trashed files first, or help you **empty the trash entirely**. Which would you prefer?

- [link](https://medium.com/milon/never-use-rm-instead-use-trash-7eec586458a3)\
  Never use rm, instead use trash | by Nuruzzaman Milon | milon\
  Mar 19, 2016 — Never use rm, instead use trash Those who use command line heavily, they use a command called rm almost everyday. I myself use com...\
  \
  \
  Medium
- [link](https://opensource.com/article/21/8/remove-files-linux-terminal)\
  Remove files and folders in the Linux terminal\
  Aug 7, 2021 — When you're ready to remove a file or folder from your system permanently, you can use the rm command to erase all of the data in ...\
  \
  \
  Opensource.com
- [link](https://www.howtogeek.com/how-i-use-the-linux-terminal-without-destroying-my-os/)\
  How I Use the Linux Terminal Without Destroying My OS\
  Jul 3, 2025 — The command you should be most careful with is rm, the command that deletes files in the terminal. As I mentioned earlier, when yo...\
  \
  \
  How-To Geek

Show all