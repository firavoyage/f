<!-- seems voice.hydev is down (https 530) -->

# . ffmpeg poc

```sh
to_mp3() {
    if [ -z "$1" ]; then
        echo "convert anything to ."
        echo "Usage: to_mp3 filename.ext"
        return 1
    fi

    ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
}
```

# . to_mp3 0.0

```sh
to_mp3(){
  local reset=$(tput sgr0)
  
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)

  local black=$(tput setaf 0)
  local red=$(tput setaf 1)
  local green=$(tput setaf 2)
  local yellow=$(tput setaf 3)
  local blue=$(tput setaf 4)
  local magenta=$(tput setaf 5)
  local cyan=$(tput setaf 6)
  local white=$(tput setaf 7)
  
  local bright_black=$(tput setaf 8)
  local bright_red=$(tput setaf 9)
  local bright_green=$(tput setaf 10)
  local bright_yellow=$(tput setaf 11)
  local bright_blue=$(tput setaf 12)
  local bright_magenta=$(tput setaf 13)
  local bright_cyan=$(tput setaf 14)
  local bright_white=$(tput setaf 15)

  local heading="$bold$bright_green"
  local cmd="$bold$bright_cyan" # command or flag/option
  local arg="$cyan" # argument

  local version="to_mp3 0.0 (2026.07.15)"
  local help=$(cat <<- EOF | sed 's/^  //'
  Convert something to mp3

  ${heading}Usage:${reset} ${cmd}to_mp3${reset} ${arg}<file>${reset}

  ${heading}Options:${reset}
    ${cmd}-v${reset}, ${cmd}--version${reset}    Print version
    ${cmd}-h${reset}, ${cmd}--help${reset}       Print help
	EOF
	)

  if test $# -eq 1; then
    if test $1 = "--help" -o $1 = "-h"; then
      echo $help
    elif test $1 = "--version" -o $1 = "-v"; then
      echo $version
    else
      ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
    fi
  else
    echo $help
  fi
}
```

# . test colors

```sh
 ~ % cargo -v
Rust's package manager

Usage: cargo [+toolchain] [OPTIONS] [COMMAND]
       cargo [+toolchain] [OPTIONS] -Zscript <MANIFEST_RS> [ARGS]...

Options:
  -V, --version                  Print version info and exit
      --list                     List installed commands
      --explain <CODE>           Provide a detailed explanation of a rustc error message
  -v, --verbose...               Use verbose output (-vv very verbose/build.rs output)
  -q, --quiet                    Do not print cargo log messages
      --color <WHEN>             Coloring [possible values: auto, always, never]
  -C <DIRECTORY>                 Change to DIRECTORY before doing anything (nightly-only)
      --locked                   Assert that `Cargo.lock` will remain unchanged
      --offline                  Run without accessing the network
      --frozen                   Equivalent to specifying both --locked and --offline
      --config <KEY=VALUE|PATH>  Override a configuration value
  -Z <FLAG>                      Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details
  -h, --help                     Print help

Commands:
    build, b    Compile the current package
    check, c    Analyze the current package and report errors, but don't build object files
    clean       Remove the target directory
    doc, d      Build this package's and its dependencies' documentation
    new         Create a new cargo package
    init        Create a new cargo package in an existing directory
    add         Add dependencies to a manifest file
    remove      Remove dependencies from a manifest file
    run, r      Run a binary or example of the local package
    test, t     Run the tests
    bench       Run the benchmarks
    update      Update dependencies listed in Cargo.lock
    search      Search registry for crates
    publish     Package and upload this package to the registry
    install     Install a Rust binary
    uninstall   Uninstall a Rust binary
    ...         See all commands with --list

See 'cargo help <command>' for more information on a specific command.
 ~ % cargo --version
cargo 1.96.0 (30a34c682 2026-05-25)
```

```sh
foo(){
  local reset=$(tput sgr0)
  
  local bold=$(tput bold)
  local italic=$(tput sitm)
  local underline=$(tput smul)

  local black=$(tput setaf 0)
  local red=$(tput setaf 1)
  local green=$(tput setaf 2)
  local yellow=$(tput setaf 3)
  local blue=$(tput setaf 4)
  local magenta=$(tput setaf 5)
  local cyan=$(tput setaf 6)
  local white=$(tput setaf 7)
  
  local bright_black=$(tput setaf 8)
  local bright_red=$(tput setaf 9)
  local bright_green=$(tput setaf 10)
  local bright_yellow=$(tput setaf 11)
  local bright_blue=$(tput setaf 12)
  local bright_magenta=$(tput setaf 13)
  local bright_cyan=$(tput setaf 14)
  local bright_white=$(tput setaf 15)

  local heading="$bold$bright_green"
  local cmd="$bold$bright_cyan" # command or flag/option
  local arg="$cyan" # argument

  local version="normalize 0.0 (2026.07.15)"
  # no need to explain options or give examples i guess
  local help=$(cat <<- EOF | sed 's/^  //'
  Convert something to mp3

  ${heading}Usage:${reset} ${cmd}to_mp3${reset} ${arg}<file>${reset}
	EOF
	)

  echo $help
}
```

# convert to mp3 ffmpeg

To convert any video or audio file to MP3 using FFmpeg, use the basic command **`ffmpeg -i input.wav output.mp3`**. FFmpeg automatically detects your input file type and uses its built-in MP3 encoder to generate the output. [link](https://stackoverflow.com/questions/3255674/convert-audio-files-to-mp3-using-ffmpeg)

### 🛠️ Common Conversion Commands

- **Standard Audio Conversion** (WAV, FLAC, M4A, OGG to MP3):\
  bash

<!---->

```
ffmpeg -i input.wav -c:a libmp3lame -b:a 192k output.mp3
```

Use code with caution.

- **Extract Audio from Video** (MP4, MKV, MOV to MP3 without video streams):\
  bash

<!---->

```
ffmpeg -i input.mp4 -vn -c:a libmp3lame -b:a 192k output.mp3
```

Use code with caution.

- **Highest Quality MP3** (320 kbps Constant Bitrate):\
  bash

<!---->

```
ffmpeg -i input.wav -c:a libmp3lame -b:a 320k output.mp3
```

Use code with caution.

- **High Quality Variable Bitrate (VBR)** (Saves space while maintaining transparency):\
  bash

<!---->

```
ffmpeg -i input.wav -c:a libmp3lame -q:a 2 output.mp3
```

Use code with caution.\
_(Note: `-q:a` values range from `0` to `9`. Lower values mean higher quality; `2` or `4` are recommended)._ [link](https://superuser.com/questions/704493/ffmpeg-convert-m4a-to-mp3-without-significant-loss)

### 📋 Command Flags Explained

- **`-i`**: Specifies the path to your source file.
- **`-vn`**: Disables the video stream to ensure you only extract audio.
- **`-c:a libmp3lame`**: Tells FFmpeg to use the LAME MP3 encoding library.
- **`-b:a 192k`**: Sets the audio bitrate to 192 kbps. [link](https://stackoverflow.com/questions/3255674/convert-audio-files-to-mp3-using-ffmpeg)

### 🔄 Batch Convert Multiple Files

If you have a folder full of files, you can automate the process using your terminal framework:

- **Linux / macOS (Bash Terminal):**\
  bash

<!---->

```
for f in *.wav; do ffmpeg -i "$f" -c:a libmp3lame -b:a 192k "${f%.wav}.mp3"; done
```

Use code with caution.

- **Windows (PowerShell):**\
  powershell

<!---->

```
Get-ChildItem *.wav | ForEach-Object { ffmpeg -i $_.Name -c:a libmp3lame -b:a 192k ($_.BaseName + ".mp3") }
```

Use code with caution.

If you run into an error or need a specialized conversion, let me know:

- What **original file format** are you converting from?

- Do you need to **trim the audio** or adjust the **volume** during conversion?

- [link](https://stackoverflow.com/questions/3255674/convert-audio-files-to-mp3-using-ffmpeg)\
  Convert audio files to mp3 using ffmpeg \[closed]\
  Jul 15, 2010 — To convert audio files to MP3 using ffmpeg, you can use the following commands: \* \*\*ffmpeg -i input.wav -vn -ar 44100 -ac 2 -b:a 1...\
  Stack Overflow

- [link](https://www.youtube.com/watch?v=D7m17pfC3sM)\
  FFMPEG Tutorial | Converting Mp4 to Mp3 On Command Line - YouTube\
  Nov 30, 2019 — and you will see that this is a command you can even provide bit rate here 192k let's suppose I provide it in my command. you have...\
  YouTube

- [link](https://superuser.com/questions/704493/ffmpeg-convert-m4a-to-mp3-without-significant-loss)\
  FFmpeg: Convert m4a to mp3 without significant loss - Super User\
  Jan 20, 2014 — Use Variable Bit Rate (VBR) ... From FFmpeg Wiki: MP3: Control quality with -q:a (or the alias -qscale:a ). Values are encoder spe...\
  Super User

Show all

## write a command. from anything. to output.mp3 in the same folder.

To convert any video or audio file to `output.mp3` in its current folder, run this universal command inside that directory:

bash

```
ffmpeg -i *.* -vn -c:a libmp3lame -b:a 192k output.mp3
```

Use code with caution.

### ⚠️ Important Usage Notes

- **Single File Limit**: This works reliably if there is only **one** media file in the folder. If multiple files match `*.*`, FFmpeg will only pick the first one it finds.

- **Exact Filename**: If you know the exact name of your input file (e.g., `song.wav` or `movie.mp4`), replace `*.*` with that name to prevent errors:\
  bash

<!---->

```
ffmpeg -i song.wav -vn -c:a libmp3lame -b:a 192k output.mp3
```

Use code with caution.

If you are trying to handle a more specific workflow, let me know:

- Do you want a script that automatically processes **multiple files at once** without overwriting each other?

- Are you running this on **Windows**, **macOS**, or **Linux**?

- [link](https://windowsforum.com/threads/convert-youtube-to-mp3-on-windows-11-with-yt-dlp-and-ffmpeg.388697/)\
  Convert YouTube to MP3 on Windows 11 with yt-dlp and FFmpeg\
  Nov 10, 2025 — The essential command: Convert a YouTube video to MP3 What those options do: Example: yt-dlp -x --audio-format mp3 --audio-quality...\
  \
  \
  Windows Forum

## write a shell function

Here is a versatile shell function you can add to your terminal configuration (`~/.bashrc` or `~/.zshrc`). It automatically handles spaces in filenames and converts any input file to an MP3 with the same name in the same folder.

bash

```
to_mp3() {
    if [ -z "$1" ]; then
        echo "Error: Please provide an input file."
        echo "Usage: to_mp3 filename.ext"
        return 1
    fi

    ffmpeg -i "$1" -vn -c:a libmp3lame -b:a 192k "${1%.*}.mp3"
}
```

Use code with caution.

### 🚀 How to Set It Up

1. Open your configuration file in your terminal (e.g., `nano ~/.zshrc` or `nano ~/.bashrc`).
2. Paste the code block above at the bottom of the file.
3. Save and exit (for nano, press `Ctrl+O`, `Enter`, then `Ctrl+X`).
4. Reload your terminal config by running: `source ~/.zshrc` (or `source ~/.bashrc`).

### 💻 How to Use It

Simply type the function name followed by your file. You can drag and drop the file directly into the terminal window to auto-fill the path:

bash

```
to_mp3 "my favorite song.wav"
to_mp3 video_clip.mp4
```

Use code with caution.

To customize this further, let me know:

- Do you want it to **delete the original file** automatically after a successful conversion?

- Would you prefer it to batch-convert **an entire folder** at once if you type the command?

- [link](https://yamlscript.org/blog/2025-07-21/calling-shell-commands-from-yaml/)\
  Calling Shell Commands from YAML - YS — YAML Done Wisely\
  Jul 21, 2025 — The shell function 🔗 When you just want to run a shell command and let its outputs print to the terminal, you can use the shell f...\
  \
  \
  YAMLScript

- [link](https://www.linux.com/training-tutorials/bash-201-intermediate-guide-bash/)\
  Bash 201: Intermediate Guide to Bash\
  Jan 18, 2010 — A quick reminder, the tilde (~) is shorthand for your home directory. So ~/. bashrc ( GNU Bash ) expands to /home/user/. bashrc ( ...\
  \
  Linux.com

- [link](https://dev.to/sinnoorc/boost-your-productivity-with-shell-aliases-a-simple-hack-for-flutter-developers-3mkp)\
  Boost Your Productivity with Shell Aliases: A Simple Hack for Flutter Developers\
  Oct 4, 2024 — For macOS/Linux: Open your terminal and type nano ~/. bashrc (or ~/. zshrc if using Zsh). Add your alias commands, like alias fcle...\
  \
  \
  DEV Community

Show all

# all tput colors

The `tput` command uses specific numerical codes to control text foreground (`setaf`) and background (`setab`) colors in your terminal. [link](https://rednafi.com/misc/terminal-text-formatting-with-tput/)

### The 8 Basic Colors (Standard ANSI)

The standard 8 colors are universally supported across almost all terminals: [link](https://linuxcommand.org/lc3%5Fadv%5Ftput.php)

| Code  | Color Name       | Example Command |
| ----- | ---------------- | --------------- |
| **0** | Black            | `tput setaf 0`  |
| **1** | Red              | `tput setaf 1`  |
| **2** | Green            | `tput setaf 2`  |
| **3** | Yellow           | `tput setaf 3`  |
| **4** | Blue             | `tput setaf 4`  |
| **5** | Magenta          | `tput setaf 5`  |
| **6** | Cyan             | `tput setaf 6`  |
| **7** | White            | `tput setaf 7`  |
| **9** | Reset to Default | `tput setaf 9`  |

### The 16-Color Extension (Bright Colors)

Codes **8 through 15** represent the high-intensity or "bright" variants of the basic 8 colors: [link](https://www.codequoi.com/en/coloring-terminal-text-tput-and-ansi-escape-sequences/)

- **8**: Bright Black (Dark Gray)
- **9**: Bright Red
- **10**: Bright Green
- **11**: Bright Yellow
- **12**: Bright Blue
- **13**: Bright Magenta
- **14**: Bright Cyan
- **15**: Bright White [link](https://gist.github.com/connorjan/2b02126868157c2b69f9aa0a052cdc86)

### The 256-Color Palette

If your terminal supports 256 colors (which you can check by running `tput colors`), the codes range from **0 to 255**: [link](https://unix.stackexchange.com/questions/269077/tput-setaf-color-table-how-to-determine-color-codes)

- **0–15**: The standard and bright colors listed above.
- **16–231**: A 6×6×6 RGB color cube matrix.
- **232–255**: A grayscale gradient going from dark gray to near-white. [link](https://stackoverflow.com/questions/30577923/how-to-show-all-colors-supported-by-bash)

### Script to Preview All 256 Colors

To see exactly how every color looks inside your specific terminal window, run this quick loop in your shell: [link](https://unix.stackexchange.com/questions/269077/tput-setaf-color-table-how-to-determine-color-codes)

bash

```
for c in {0..255}; do
    tput setaf $c
    printf "Color %-3d  " $c
done
tput sgr0; echo
```

Use code with caution.

### Essential Formatting Modifiers

Colors are typically paired with these core `tput` modifiers to structure terminal scripts: [link](https://stackoverflow.com/questions/2437976/get-color-output-in-bash)

- `tput setaf [code]` – Changes the text color (Foreground).
- `tput setab [code]` – Changes the text background block.
- `tput bold` – Applies a bold effect.
- `tput rev` – Reverses background and foreground colors.
- `tput sgr0` – **Crucial.** Resets all colors and styling back to normal so your terminal prompt doesn't stay colored. [link](https://stackoverflow.com/questions/2437976/get-color-output-in-bash)

Would you like help writing a **custom Bash script** utilizing these color variables, or are you trying to style a **specific tool** like your terminal prompt?

- [link](https://unix.stackexchange.com/questions/269077/tput-setaf-color-table-how-to-determine-color-codes)\
  tput setaf color table? How to determine color codes?\
  Mar 11, 2016 — Show 6 more comments. 42. The tput utility is using a 256-color lookup table to print 8-bit ANSI escape sequences (starting with E...\
  Unix & Linux Stack Exchange
- [link](https://linuxcommand.org/lc3%5Fadv%5Ftput.php)\
  Linux Command Line Adventure: tput - LinuxCommand.org\
  Table\_title: Text Color Table\_content: | Value | Color | | --- | --- | | 0 | Black | | 1 | Red | | 2 | Green | | 3 | Yellow | | 4 ...\
  Linux Command.org
- [link](https://rednafi.com/misc/terminal-text-formatting-with-tput/)\
  Simple terminal text formatting with tput | Redowan's Reflections\
  Apr 23, 2023 — The \`tput setaf\` command sets the foreground color to a specific color. For example, \`setaf 1\` sets the color to red, while \`setaf...\
  rednafi

Show all

## example

Here are concrete examples of how to use `tput` colors in scripts and one-liners.

### 1. Basic In-Line Echo Commands

You can change the color for a single string and reset it immediately.

bash

```
# Print a green success message
echo "$(tput setaf 2)SUCCESS: Connection established.$(tput sgr0)"

# Print a red error message
echo "$(tput setaf 1)ERROR: Action failed.$(tput sgr0)"

# Print yellow text on a blue background
echo "$(tput setaf 3)$(tput setab 4) Warning! $(tput sgr0)"
```

Use code with caution.

### 2. Best Practice Bash Script Template

The best way to use `tput` in a script is to map the codes to human-readable variables. This keeps your code clean and readable.

bash

```
#!/bin/bash

# Initialize tput variables
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
BLUE=$(tput setaf 4)
BOLD=$(tput bold)
RESET=$(tput sgr0)

# Example usage in a script
echo "${BLUE}${BOLD}--- System Diagnostic ---${RESET}"

echo -n "Checking network... "
# Simulated check
echo "${GREEN}[OK]${RESET}"

echo -n "Checking disk space... "
# Simulated warning
echo "${YELLOW}[WARNING: Low Space]${RESET}"

echo -n "Checking database... "
# Simulated failure
echo "${RED}[CRITICAL FAILURE]${RESET}"
```

Use code with caution.

### 3. Styled User Prompt (`read`)

You can use `tput` to make user input prompts stand out.

bash

```
read -p "$(tput setaf 6)$(tput bold)Enter your username: $(tput sgr0)" username
```

Use code with caution.

### 4. Colorizing a 256-Color Block

Here is a one-liner to print a high-visibility, bright purple notification banner using the 256-color palette (Color 135):

bash

```
echo "$(tput setab 135)$(tput setaf 15)$(tput bold)  DEPLOYMENT COMPLETE  $(tput sgr0)"
```

Use code with caution.

Are you looking to build a **menu interface** for your script, or do you want to inject these colors into your **system prompt (PS1)**?

## example of all colors

To visualize how all **256 colors** render in your specific terminal, you can copy and paste this one-liner directly into your command line:

bash

```
for i in {0..255}; do printf "\x1b[38;5;${i}mcolour${i}\t"; if [ $((($i + 1) % 8)) -eq 0 ]; then echo; fi; done
```

Use code with caution.

If you want a highly structured **Bash script** using `tput` to neatly catalog and display the standard, bright, and extended color grids, save and run this template:

bash

```
#!/bin/bash

# Ensure terminal resets styling on script exit
trap 'tput sgr0; echo' EXIT

echo -e "\n=== 8 STANDARD COLORS ==="
for c in {0..7}; do
    tput setaf $c
    printf "Color %-2d  " "$c"
done
echo

echo -e "\n=== 16 BRIGHT EXTENSION ==="
for c in {0..7}; do
    tput setaf $((c + 8))
    printf "Color %-2d  " "$((c + 8))"
done
echo
echo

echo "=== 256-COLOR EXTENDED MATRIX ==="
for c in {16..255}; do
    tput setaf $c
    printf "%-4d " "$c"

    # Break lines gracefully every 6 colors for the 6x6x6 cube alignment
    if [ $(( (c - 15) % 6 )) -eq 0 ] && [ $c -le 231 ]; then
        echo
    # Break lines every 12 colors for the grayscale ramp at the end
    elif [ $c -gt 231 ] && [ $(( (c - 231) % 12 )) -eq 0 ]; then
        echo
    fi
done
```

Use code with caution.

Would you like to see how to use these colors to build a **dynamic text-progress bar**, or do you want to create a **multicolor table matrix** for log parsing?

- [link](https://www.codeconquest.com/hex-color-codes/)\
  Understanding Hex Color Codes\
  There are 256 possible shades each of red, green and blue (0 through 255). If we wanted to produce white (the brightest levels of ...\
  \
  Code Conquest

## example of all named colors

The `tput` command does not natively accept text string names like "red" or "blue" directly in the command line (e.g., `tput setaf red` will fail). Instead, it uses **standardized integer codes** that map directly to the official `ncurses` and `terminfo` color definitions. [link](https://ss64.com/mac/tput.html)

The following codes map the official **named system colors** to their `tput` values: [link](https://gist.github.com/6208ced4db92db06eb0e699b62aaa5eb)

### The Official 8 Terminfo Named Colors

| `tput` Code | `ncurses` Constant Name | Visual Color       | Example Syntax |
| ----------- | ----------------------- | ------------------ | -------------- |
| **0**       | `COLOR_BLACK`           | Black              | `tput setaf 0` |
| **1**       | `COLOR_RED`             | Red                | `tput setaf 1` |
| **2**       | `COLOR_GREEN`           | Green              | `tput setaf 2` |
| **3**       | `COLOR_YELLOW`          | Yellow / Brown     | `tput setaf 3` |
| **4**       | `COLOR_BLUE`            | Blue               | `tput setaf 4` |
| **5**       | `COLOR_MAGENTA`         | Magenta / Purple   | `tput setaf 5` |
| **6**       | `COLOR_CYAN`            | Cyan / Light Blue  | `tput setaf 6` |
| **7**       | `COLOR_WHITE`           | White / Light Gray | `tput setaf 7` |

***

### Executable Bash Example Map

To use named strings in your bash scripts, create an associative array map. Copy and paste this script to see all the named mappings print in their respective colors:

bash

```
#!/bin/bash

# Define an associative array mapping names to tput codes
declare -A NamedColors

NamedColors[BLACK]=0
NamedColors[RED]=1
NamedColors[GREEN]=2
NamedColors[YELLOW]=3
NamedColors[BLUE]=4
NamedColors[MAGENTA]=5
NamedColors[CYAN]=6
NamedColors[WHITE]=7

# Loop through and display the named color mappings
echo "--- Named Terminfo Colors Map ---"
for color_name in BLACK RED GREEN YELLOW BLUE MAGENTA CYAN WHITE; do
    code=${NamedColors[$color_name]}

    # Apply foreground color and bold effect
    tput setaf $code
    tput bold

    printf "Variable: \$-%-7s (tput code %d)\n" "$color_name" "$code"
done

# Always reset terminal styling back to system default
tput sgr0
```

Use code with caution.

Would you like an example of how to combine these names to change the **background color**, or are you looking to map out the names for **bright/bold color variants**? [link](https://www.codequoi.com/en/coloring-terminal-text-tput-and-ansi-escape-sequences/)

- [link](https://www.codequoi.com/en/coloring-terminal-text-tput-and-ansi-escape-sequences/)\
  Coloring Terminal Text: tput and ANSI Escape Sequences\
  Aug 8, 2022 — Table\_title: Displaying a Text Background Color Table\_content: | ANSI Code | TermCap | Color | | --- | --- | --- | | 42 | setab 2 ...\
  codequoi
- [link](https://ss64.com/mac/tput.html)\
  TPUT Command: Set terminal size, colour and position ... - SS64\
  Color Codes. Black = 0. Red = 1. Green = 2. Yellow = 3. Blue = 4. Magenta = 5. Cyan = 6. White = 7. Reset to default color = 9. Co...\
  SS64 Command line reference
- [link](https://gist.github.com/6208ced4db92db06eb0e699b62aaa5eb)\
  tput terminfo basic color reference - GitHub Gist\
  The setaf/setab and setf/setb capabilities take a single numeric argument each. Argument values 0-7 of setaf/setab are portably de...\
  GitHub

## example of 8 and 16 colors, named

The standard **8-color** and **16-color** palettes use an extension of the traditional ANSI / Terminfo naming conventions. Codes **0–7** are the standard dark/dim variants, while codes **8–15** are the bright/high-intensity variants of those exact same colors.

Here is the complete named mapping for both sets, along with a complete Bash script template to implement them by name.

### Named Reference Table (8 & 16 Colors)

| Standard Code | Standard Color Name | Bright Code | Bright Color Name          |
| ------------- | ------------------- | ----------- | -------------------------- |
| **0**         | `BLACK`             | **8**       | `BRIGHT_BLACK` (Dark Gray) |
| **1**         | `RED`               | **9**       | `BRIGHT_RED`               |
| **2**         | `GREEN`             | **10**      | `BRIGHT_GREEN`             |
| **3**         | `YELLOW`            | **11**      | `BRIGHT_YELLOW`            |
| **4**         | `BLUE`              | **12**      | `BRIGHT_BLUE`              |
| **5**         | `MAGENTA`           | **13**      | `BRIGHT_MAGENTA`           |
| **6**         | `CYAN`              | **14**      | `BRIGHT_CYAN`              |
| **7**         | `WHITE`             | **15**      | `BRIGHT_WHITE`             |

***

### Executable Bash Script Template

Save this script as `named_colors.sh` to see both palettes print out side-by-side using semantic names:

bash

```
#!/bin/bash

# Reset terminal on exit
trap 'tput sgr0' EXIT

# --- 1. Map Names to tput Codes Using Bash Associative Arrays ---
declare -A COLOR

# 8 Standard Colors
COLOR[BLACK]=0
COLOR[RED]=1
COLOR[GREEN]=2
COLOR[YELLOW]=3
COLOR[BLUE]=4
COLOR[MAGENTA]=5
COLOR[CYAN]=6
COLOR[WHITE]=7

# 16 Bright Extensions
COLOR[BRIGHT_BLACK]=8
COLOR[BRIGHT_RED]=9
COLOR[BRIGHT_GREEN]=10
COLOR[BRIGHT_YELLOW]=11
COLOR[BRIGHT_BLUE]=12
COLOR[BRIGHT_MAGENTA]=13
COLOR[BRIGHT_CYAN]=14
COLOR[BRIGHT_WHITE]=15

# Helper function to print colors by name
print_color() {
    local name=$1
    local code=${COLOR[$name]}
    tput setaf "$code"
    printf "%-15s (Code %d)\n" "$name" "$code"
}

# --- 2. Display the Palettes ---
echo "=== 8 STANDARD COLORS ==="
print_color "BLACK"
print_color "RED"
print_color "GREEN"
print_color "YELLOW"
print_color "BLUE"
print_color "MAGENTA"
print_color "CYAN"
print_color "WHITE"

echo -e "\n=== 16 BRIGHT COLORS ==="
print_color "BRIGHT_BLACK"
print_color "BRIGHT_RED"
print_color "BRIGHT_GREEN"
print_color "BRIGHT_YELLOW"
print_color "BRIGHT_BLUE"
print_color "BRIGHT_MAGENTA"
print_color "BRIGHT_CYAN"
print_color "BRIGHT_WHITE"
```

Use code with caution.

Do you want to see how to wrap these names into a **custom logging function** (like `log_info`, `log_warn`, `log_error`), or do you need help using them for **background blocks** instead of text?

## complete local green=$(tput setaf 2)

local bright\_green=$(tput setaf 10)\
local cyan=$(tput setaf 6)\
local bright\_cyan=$(tput setaf 14)

Here is the completed declaration block covering all standard 8 and bright 16 terminal colors following your exact pattern:

bash

```
  local black=$(tput setaf 0)
  local red=$(tput setaf 1)
  local green=$(tput setaf 2)
  local yellow=$(tput setaf 3)
  local blue=$(tput setaf 4)
  local magenta=$(tput setaf 5)
  local cyan=$(tput setaf 6)
  local white=$(tput setaf 7)

  local bright_black=$(tput setaf 8)
  local bright_red=$(tput setaf 9)
  local bright_green=$(tput setaf 10)
  local bright_yellow=$(tput setaf 11)
  local bright_blue=$(tput setaf 12)
  local bright_magenta=$(tput setaf 13)
  local bright_cyan=$(tput setaf 14)
  local bright_white=$(tput setaf 15)

  local reset=$(tput sgr0)
```

Use code with caution.

Would you like to build a **log helper function** using these variables, or do you need a template to style your **interactive CLI menus**?

AI can make mistakes, so double-check responses

