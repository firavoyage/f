extract a 7z file with password on ubuntu

To extract a password-protected `.7z` file on Ubuntu, you must use **`p7zip-full`** via the terminal, as the default Ubuntu File Manager (`Nautilus`) often hangs or fails on encrypted `.7z` archives. \[[1](https://superuser.com/questions/1198021/file-roller-cant-uncompress-an-encrypted-7z-file)]

1\. Install the Required Package \[[1](https://www.simplified.guide/linux/extract-7z-file)]

Open your terminal (`Ctrl` + `Alt` + `T`) and update your packages to install the full 7-Zip engine: \[[1](https://superuser.com/questions/1198021/file-roller-cant-uncompress-an-encrypted-7z-file)]

bash

```
sudo apt update && sudo apt install p7zip-full -y
```

Use code with caution.

2\. Extract with an Interactive Prompt (Recommended)

Run the `7z x` command followed by your filename. The `x` flag ensures that the original folder structure inside the archive is preserved: \[[1](https://askubuntu.com/questions/13474/how-do-i-extract-a-password-protected-7z-file), [2](https://askubuntu.com/questions/711777/how-to-extract-file-from-a-7z-archive), [3](https://www.simplified.guide/linux/extract-7z-file), [4](https://askubuntu.com/questions/219392/how-can-i-uncompress-a-7z-file)]

bash

```
7z x filename.7z
```

Use code with caution.

- The terminal will print `Enter password (will not be echoed):`.
- Type your password and press **Enter** (the characters will not show on the screen as you type). \[[1](https://gist.github.com/ekreutz/8890bd7a815c77c69d823eca50182bd6), [2](https://www.youtube.com/watch?v=nq3VcUA9BY0), [3](https://askubuntu.com/questions/13474/how-do-i-extract-a-password-protected-7z-file)]

3\. Extract by Specifying the Password Directly \[[1](https://helpdesk.concord.edu/kb/article/222-using-7-zip-to-encrypt-sensitive-files/)]

If you want to pass the password directly inside the command line (useful for scripting), append the `-p` switch directly to your password **without any spaces**: \[[1](https://stackoverflow.com/questions/28160254/7-zip-command-to-create-and-extract-a-password-protected-zip-file-on-windows), [2](https://superuser.com/questions/1095406/7z-how-to-pass-password-and-avoid-prompt), [3](https://medium.com/@awaleedpk/how-to-unzip-7z-files-on-mac-using-terminal-complete-guide-b7840c557559)]

bash

```
7z x filename.7z -ppassword123
```

Use code with caution.

4\. Extract to a Specific Output Directory \[[1](https://contabo.com/blog/linux-unzip-command-guide/)]

To dump the extracted files into a clean folder instead of your current directory, use the `-o` switch (also **without any spaces** after the flag): \[[1](https://askubuntu.com/questions/219392/how-can-i-uncompress-a-7z-file), [2](https://www.simplified.guide/linux/extract-7z-file)]

bash

```
7z x filename.7z -o/path/to/destination/folder
```

Use code with caution.

If you encounter issues or have an extremely large archive, let me know:

- Is it a **split multi-part archive** (e.g., `.7z.001`, `.7z.002`)?

- What specific **error message** is the terminal outputting?

- Do you prefer a graphical interface (**GUI**) method? \[[1](https://techcommunity.microsoft.com/discussions/windowsinsiderprogram/how-can-i-open-7-zip-file-on-macos/4402722/replies/4402788), [2](https://peazip.github.io/7zip-files-utility.html)]

- [link](https://askubuntu.com/questions/13474/how-do-i-extract-a-password-protected-7z-file)\
  How do I extract a password protected .7z file? - Ask Ubuntu\
  Nov 16, 2010 — Sorted by: 100. This answer is not useful. Loading when this answer was accepted… Install p7zip-full on the server first and then ...\
  Ask Ubuntu

- [link](https://stackoverflow.com/questions/28160254/7-zip-command-to-create-and-extract-a-password-protected-zip-file-on-windows)\
  7-Zip command to create and extract a password-protected ...\
  Jan 26, 2015 — What I've done to Solve the problem was to download an older 7zip version(4.?) and to use this for extracting through cmd. This is...\
  Stack Overflow

- [link](https://askubuntu.com/questions/219392/how-can-i-uncompress-a-7z-file)\
  How can I uncompress a \*.7z file? - Ask Ubuntu\
  Nov 19, 2012 — Or search through the ubuntu software center as 7zip and unrar and install the packages. ... Notice that there is no space between...\
  Ask Ubuntu

Show all

i get part1 2 3 rar after that

To extract multi-part (split) `.rar` files (e.g., `part1.rar`, `part2.rar`, `part3.rar`) on Ubuntu, you need the native `unrar` package.

1\. Install the RAR Package

Open your terminal and install the official unrar utility:

bash

```
sudo apt update && sudo apt install unrar -y
```

Use code with caution.

2\. Extract the Multi-Part Archive

You only need to run the command on the **first part** (`part1.rar`). The utility automatically locates, joins, and extracts the subsequent parts in the sequence.

Run the extraction command with the `e` flag (extract to current directory) or `x` flag (extract with full path structure):

bash

```
unrar x part1.rar
```

Use code with caution.

- The terminal will prompt you: `Enter password (will not be echoed):`.
- Type the password and hit **Enter**.

3\. Extract to a Specific Folder

To extract the contents into a specific target directory, append the destination path to the end of the command:

bash

```
unrar x part1.rar /path/to/destination/
```

Use code with caution.

Troubleshooting Tips

- **Missing Parts:** Ensure all parts (`part1`, `part2`, `part3`) are saved in the **exact same folder**.
- **Naming Consistency:** Ensure the file names match perfectly except for the part numbers (e.g., `archive.part1.rar`, `archive.part2.rar`).

If the extraction fails, let me know:

- What exact **error message** does the terminal show?
- Are the files named with **`.rar`** or **`.001, .002`** extensions?