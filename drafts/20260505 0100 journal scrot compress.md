how to get the filename scrot written

9:53 AM

To get the filename of a screenshot written when using the command-line utility **scrot**, you can either specify a name manually or use special internal variables to capture the automatically generated name. \[[1](https://forums.raspberrypi.com/viewtopic.php?t=234359)]

1\. Manually Specify a Filename \[[1](https://bikulov.org/blog/2013/01/23/universal-screen-capturing-with-scrot-imagemagick-and-ffmpeg/)]

The simplest way to control the filename is to provide it as an argument when running the command.

- **Basic usage:** `scrot my_screenshot.png`
- **With a path:** `scrot /path/to/folder/my_screenshot.png` \[[1](https://forums.raspberrypi.com/viewtopic.php?t=333172), [2](https://www.mankier.com/1/scrot), [3](https://bikulov.org/blog/2013/01/23/universal-screen-capturing-with-scrot-imagemagick-and-ffmpeg/)]

2\. Capture the Automatically Generated Filename \[[1](https://nimblenerds.com.au/how-to-screenshot-on-windows/)]

If you don't provide a name, **scrot** generates one based on the current date and time (e.g., `2024-05-04-123456_1920x1080_scrot.png`). To "get" this name immediately for use in a script or command, use the `-e` (execute) flag with the internal variable **$f**.

The **$f** variable represents the full path of the image just saved. You can use it to print the name or pipe it to other tools: \[[1](https://forums.raspberrypi.com/viewtopic.php?t=321113), [2](https://www.raspberrypi-spy.co.uk/2013/10/how-to-take-screenshots-on-the-raspberry-pi/)]

- **Print the filename to the terminal:**\
  bash

<!---->

```
scrot -e 'echo $f'
```

Use code with caution.

- **Copy the filename to your clipboard** (requires `xclip`):\
  bash

<!---->

```
scrot -e 'echo $f | xclip -selection clipboard'
```

Use code with caution.\
This is highly effective for workflows where you need the filename immediately for another document or script. \[[1](https://askubuntu.com/questions/1322780/take-a-screenshot-save-it-a-specified-place-with-a-timestamp-based-name-and-co), [2](https://unix.stackexchange.com/questions/612596/how-can-i-get-just-the-file-name-without-absolute-path-in-shell-script)]

3\. Using Timestamp Formatting

You can also "write" the filename using standard `strftime` date/time format strings to ensure a predictable naming convention: \[[1](https://www.raspberrypi-spy.co.uk/2013/10/how-to-take-screenshots-on-the-raspberry-pi/)]

- **Example:** `scrot '%Y-%m-%d_%H%M%S.png'`\
  This will create a file named something like `2024-05-04_095315.png`. \[[1](https://askubuntu.com/questions/1322780/take-a-screenshot-save-it-a-specified-place-with-a-timestamp-based-name-and-co)]

**Would you like a bash script** that automatically renames and moves these screenshots to a specific folder after they are written?

- [link](https://forums.raspberrypi.com/viewtopic.php?t=333172)\
  How do you change the Default directory SCROT outputs to?\
  Re: How do you change the Default directory SCROT outputs to? ... I would normally just put the file name inc. path as the paramet...\
  Raspberry Pi Forums
- [link](https://askubuntu.com/questions/1322780/take-a-screenshot-save-it-a-specified-place-with-a-timestamp-based-name-and-co)\
  Take a Screenshot, save it a specified place, with a timestamp based ...\
  \* 1 Answer. Sorted by: 1. @vanadium suggested me this fine command line tool called scrot and rest was easy to figure out. ( Thank...\
  Ask Ubuntu
- [link](https://bikulov.org/blog/2013/01/23/universal-screen-capturing-with-scrot-imagemagick-and-ffmpeg/)\
  Universal screen capturing with scrot, imagemagick and ffmpeg\
  2013-01-23. #ffmpeg #bash #scrot. You can record your screen using only command line in Linux. Workflow will look like: Create a b...\
  bikulov.org

Show all

can you pair the timestamp formatting with e flag

9:54 AM

Yes, you can combine **timestamp formatting** with the `-e` (execute) flag to create and immediately process a custom-named screenshot. \[[1](https://manpages.ubuntu.com/manpages/jammy/man1/scrot.1.html), [2](https://i.iinfo.cz/files/root/650/scrot-help-1.txt)]

When you use both, **scrot** first generates the file using your timestamp format and then passes that specific path to your command via the `$f` variable. \[[1](https://manpages.ubuntu.com/manpages/jammy/man1/scrot.1.html), [2](https://man.voidlinux.org/scrot)]

Basic Pairing Syntax

To save a screenshot with a custom timestamp and then print its location to your terminal:

bash

```
scrot '%Y-%m-%d_%H%M%S.png' -e 'echo "Saved as: $f"'
```

Use code with caution.

Advanced Examples

- **Move to a specific folder:** Create a timestamped file and immediately move it to your `~/Pictures` folder:\
  bash

<!---->

```
scrot '%Y-%m-%d_screenshot.png' -e 'mv $f ~/Pictures/'
```

Use code with caution.

- **Optimize and Notify:** Capture a timestamped image, optimize it (using `optipng`), and send a desktop notification:\
  bash

<!---->

```
scrot '%Y-%m-%d_$wx$h.png' -e 'optipng $f && notify-send "Screenshot Captured" "$f"'
```

Use code with caution.

- **Copy Custom Filename to Clipboard:** If you want the exact custom filename you just "wrote" on your clipboard:\
  bash

<!---->

```
scrot '%Y-%m-%d_%H%M%S.png' -e 'echo $f | xclip -selection clipboard'
```

Use code with caution.\
\[[1](https://askubuntu.com/questions/1322780/take-a-screenshot-save-it-a-specified-place-with-a-timestamp-based-name-and-co), [2](https://i.iinfo.cz/files/root/650/scrot-help-1.txt), [3](https://manpages.ubuntu.com/manpages/jammy/man1/scrot.1.html)]

How it Works

1. **Timestamp (`%`)**: Characters preceded by `%` are interpreted using standard `strftime` formats (like `%Y` for year) to define the initial filename.
2. **Internal Variables (`$`)**: Scrot provides internal variables for the `-e` flag:

- **`$f`**: The full path of the image (e.g., `/home/user/2024-05-04.png`).
- **`$n`**: Just the filename (basename) without the directory path.
- **`$w` / `$h`**: The image width and height. \[[1](https://www.howtoforge.com/tutorial/how-to-take-screenshots-in-linux-with-scrot/), [2](https://manpages.ubuntu.com/manpages/jammy/man1/scrot.1.html), [3](https://man.voidlinux.org/scrot), [4](https://i.iinfo.cz/files/root/650/scrot-help-1.txt)]

Do you need help **binding this specific command to a key** in your desktop environment?

- [link](https://askubuntu.com/questions/1322780/take-a-screenshot-save-it-a-specified-place-with-a-timestamp-based-name-and-co)\
  Take a Screenshot, save it a specified place, with a timestamp ...\
  1 Answer. Sorted by: 1. @vanadium suggested me this fine command line tool called scrot and rest was easy to figure out. ( Thanks ...\
  Ask Ubuntu
- [link](https://manpages.ubuntu.com/manpages/jammy/man1/scrot.1.html)\
  scrot - command line screen capture utility - Ubuntu Manpages\
  Example: $ scrot '%Y-%m-%d\_$wx$h.png' -e 'optipng $f' This would create a PNG file with a name similar to 2000-10-30\_2560x1024. pn...\
  Ubuntu Manpages
- [link](https://man.voidlinux.org/scrot)\
  scrot(1) - Void Linux manpages\
  SPECIAL STRINGS -e, -F and FILE parameters can take format specifiers that are expanded by scrot when encountered. There are two t...\
  Void Linux

Show all