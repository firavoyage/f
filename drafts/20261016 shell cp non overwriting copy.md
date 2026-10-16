# how to copy file but fail when dest existing on ubuntu

To safely copy a file on Ubuntu without overwriting an existing one, you cannot rely entirely on `cp -n` because it exits with a successful `0` status even if it skips the copy. [link](https://unix.stackexchange.com/questions/496734/move-or-copy-without-overwrite-and-check-success)

To ensure the command **fails and throws an error (or a non-zero exit status)** when the destination exists, choose one of the following methods depending on your exact workflow:

### Method 1: The Safe Shell Logic (Recommended)

The cleanest, most reliable way is to explicitly check if the destination file exists using a short `if` statement before attempting the copy.

bash

```
if [ -e "destination.txt" ]; then echo "Error: Destination exists!" >&2; false; else cp "source.txt" "destination.txt"; fi
```

Use code with caution.

**How it works:**

- `[ -e "destination.txt" ]` checks if the file exists.
- If it **does** exist, it prints an error message and triggers `false` (which forces a non-zero failure exit code).
- If it **does not** exist, the `cp` command safely executes.

### Method 2: Using `rsync` with `--ignore-existing`

If you are writing a script and want a single command that fails the overall operation if files already exist, you can use rsync. By adding the `--no-overwrite` flag (or combining `--ignore-existing` with custom error logic), you can control the outcome: [link](https://serverfault.com/questions/153875/how-to-let-cp-command-dont-fire-an-error-when-source-file-does-not-exist)

bash

```
rsync --ignore-existing --error-on-missing-args source.txt destination.txt
```

Use code with caution.

### Method 3: The Interactive Prompt Hack

If you want the `cp` command itself to fail due to input restrictions, you can use the `-i` (interactive) flag combined with nohup. `nohup` cuts off standard input. When `cp` asks _"Do you want to overwrite?"_, it receives an empty response and fails. [link](https://unix.stackexchange.com/questions/128617/copy-directory-but-fail-if-file-already-exists-at-destination)

bash

```
nohup cp -i source.txt destination.txt
```

Use code with caution.

- **Result:** If `destination.txt` exists, the command will instantly fail with an error like `cp: overwrite 'destination.txt'?` followed by a termination state. [link](https://unix.stackexchange.com/questions/128617/copy-directory-but-fail-if-file-already-exists-at-destination)

### Summary Comparison

| Method                       | Throws Non-Zero Exit Code? | Good for Scripts?                             |
| ---------------------------- | -------------------------- | --------------------------------------------- |
| **`if` Check (Method 1)**    | Yes                        | **Best choice**                               |
| **`rsync` (Method 2)**       | Depends on setup           | Great for whole directories                   |
| **`nohup cp -i` (Method 3)** | Yes                        | Good quick hack, but leaves a `nohup.out` log |
| _`cp -n` (Standard)_         | **No** (returns 0)         | Bad if your script relies on failure tracking |

Are you writing this into a **Bash script**, or just running a quick **one-off command** in the terminal? If it's for a script, I can help you structure the exact error-handling block you need.

- [link](https://unix.stackexchange.com/questions/128617/copy-directory-but-fail-if-file-already-exists-at-destination)\
  Unix & Linux Stack Exchange\
  Copy directory, but fail if file already exists at destination\
  May 9, 2014 — It's possible to fail if a file exists on Linux, via a slight hack with GNU nohup . cat will clean up on success or output the err...
- [link](https://serverfault.com/questions/153875/how-to-let-cp-command-dont-fire-an-error-when-source-file-does-not-exist)\
  Server Fault\
  How to let 'cp' command don't fire an error when source file ...\
  This has the advantage over --ignore-errors that the only errors ignored are those related to source files not existing. With --ig...
- [link](https://unix.stackexchange.com/questions/496734/move-or-copy-without-overwrite-and-check-success)\
  Unix & Linux Stack Exchange\
  cp\
  Jan 25, 2019 — I'm looking for a way to rename or copy a file without overwriting the destination file, if it exists, and then check the success ...

Show all

# cp: warning: behavior of -n is non-portable and may change in future; use --update=none instead

**The warning message means that the `-n` (no-clobber) flag in your `cp` command is deprecated in GNU Coreutils and should be replaced with `--update=none`.**

This warning was introduced in **GNU Coreutils 9.5** to standardize how file-overwriting behaves across different systems. The `-n` flag tells the `cp` command not to overwrite an existing file, but its behavior historically varied between operating systems (like GNU/Linux vs. BSD/macOS).

### How to Fix It

To clear the warning, simply update your script or command by swapping the flag:

- **Old Command:**\
  bash

<!---->

```
cp -n source.txt destination.txt
```

Use code with caution.

- **New Command:**\
  bash

<!---->

```
cp --update=none source.txt destination.txt
```

Use code with caution.

### Direct Comparison of Options

If you frequently manage file overwrites, the GNU version of `cp` now uses the `--update` parameter to explicitly control what happens when a destination file already exists:

| Flag     | New Equivalent      | Action                                                               |
| -------- | ------------------- | -------------------------------------------------------------------- |
| **`-n`** | **`--update=none`** | **Never overwrite** an existing destination file.                    |
| **`-u`** | **`--update=all`**  | **Overwrite only** if the source file is newer than the destination. |

_Note: If your workflows require compatibility with older Linux environments or macOS systems that use BSD-based tools, you may need to stick with `-n` and ignore the warning, as older systems do not recognize the `--update=none` syntax._

If you are troubleshooting this, let me know:

- Are you running this in an **automated shell script** or just manually in the terminal?
- Do you need this command to be **cross-compatible with macOS/BSD**, or is it strictly for modern Linux?

I can help you adjust the logic so it safely avoids overwriting across different environments.

