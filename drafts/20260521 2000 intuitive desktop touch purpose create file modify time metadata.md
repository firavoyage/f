<!-- i mkdir, forget to cd, and then touch readme.md. lol. -->

what if you touch an existing file

If you run the `touch` command on an existing file, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>the file contents will not be changed or lost</strong></mark>. Instead, the system simply updates the file's **metadata timestamps to the current system time**. \[[1](https://linuxopsys.com/touch-command-in-linux), [2](https://unix.stackexchange.com/questions/427237/what-happens-if-we-use-touch-command-while-the-file-already-exists), [3](https://www.hostinger.com/tutorials/linux-touch-command)]

What Actually Changes

By default, running `touch filename` updates two specific timestamps stored in the file's inode: \[[1](https://www.youtube.com/shorts/zgFHUL65gq8), [2](https://www.youtube.com/watch?v=YUHICwB-t5w)]

- **Modification Time (mtime)**: The last time the content of the file was modified.
- **Access Time (atime)**: The last time the file was read or opened. \[[1](https://www.howtogeek.com/how-to-use-the-touch-command-on-linux/), [2](https://www.youtube.com/watch?v=YUHICwB-t5w), [3](https://data-flair.training/blogs/touch-command-in-linux/), [4](https://maketecheasier.com/use-touch-command-in-linux/)]

Why People Do This

While `touch` is heavily used as a shortcut to create empty files, modifying an existing file's timestamp is actually its primary, intended purpose. Developers and system administrators do this to: \[[1](https://www.howtogeek.com/how-to-use-the-touch-command-on-linux/), [2](https://unix.stackexchange.com/questions/427237/what-happens-if-we-use-touch-command-while-the-file-already-exists)]

- **Force Recompilation**: Automation tools like `make` decide what to compile based on file ages. "Touching" a source code file tricks the build system into thinking the file was updated, forcing a rebuild.
- **Trigger Backups**: Many incremental backup scripts look for recently modified files. A touch ensures the file is included in the next backup cycle.
- **Test Automation**: It helps developers simulate older or newer file states to test cleanup, archival, or logging scripts. \[[1](https://www.reddit.com/r/linux/comments/qf3z5p/touch%5Fcommand%5Fwhat%5Fsituations%5Frequire%5Fits%5Fuse/), [2](https://en.wikipedia.org/wiki/Touch%5F%28command%29), [3](https://www.unixtutorial.org/commands/touch/), [4](https://www.chicagovps.net/blog/mastering-the-touch-command-a-beginners-guide-to-creating-files-and-managing-timestamps-on-linux)]

Targeted Command Alternatives

You can modify how `touch` interacts with an existing file using flags: \[[1](https://cyberpanel.net/blog/linux-touch-command)]

- **`touch -a filename`**: Updates _only_ the access time.
- **`touch -m filename`**: Updates _only_ the modification time.
- **`touch -d "2 hours ago" filename`**: Changes the timestamp to a specific time in the past or future instead of right now. \[[1](https://www.reddit.com/r/linuxquestions/comments/1ponsul/question%5Fabout%5Fthe%5Ftouch%5Fcommand/), [2](https://www.hostinger.com/tutorials/linux-touch-command), [3](https://www.howtogeek.com/how-to-use-the-touch-command-on-linux/), [4](https://linuxopsys.com/touch-command-in-linux)]

Are you using `touch` as part of a **build script**, or are you looking to safely **empty a file's contents** without deleting it? \[[1](https://www.w3schools.com/bash/bash%5Ftouch.php)]

- [link](https://unix.stackexchange.com/questions/427237/what-happens-if-we-use-touch-command-while-the-file-already-exists)\
  What happens if we use touch command while the file already ...\
  Feb 28, 2018 — 1 Answer. Sorted by: 52. This answer is not useful. Loading when this answer was accepted… The contents of the file will not be lo...\
  Unix & Linux Stack Exchange
- [link](https://www.reddit.com/r/linuxquestions/comments/1ponsul/question%5Fabout%5Fthe%5Ftouch%5Fcommand/)\
  Question about the 'touch' command : r/linuxquestions - Reddit\
  Dec 17, 2025 — File formats aren't really a thing. A file is just a collection of bytes. Those same bytes can have drastically different meanings...\
  Reddit·r/linuxquestions
- [link](https://www.reddit.com/r/linux/comments/qf3z5p/touch%5Fcommand%5Fwhat%5Fsituations%5Frequire%5Fits%5Fuse/)\
  Touch Command - What Situations Require Its Use? : r/linux - Reddit\
  Oct 24, 2021 — if you touch a source file in a source software package you force recompiling it and all dependencies. This is sometimes needed, f...\
  Reddit·r/linux

Show all