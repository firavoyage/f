# shell fn args syntax

In POSIX-compliant shells (like sh, bash, and zsh), **you do not declare arguments inside the function parentheses**. Instead, you leave the parentheses empty and pass arguments by separating them with spaces when calling the function. Inside the function, you access these values using positional parameters like `$1`, `$2`, and `$3`. [link](https://stackoverflow.com/questions/6212219/passing-parameters-to-a-bash-function)

### 1. Function Syntax

You can define a function using one of two common syntaxes:

bash

```
# Standard POSIX syntax (Recommended for maximum compatibility)
my_function() {
    # commands here
}

# Bash-specific syntax
function my_function {
    # commands here
}
```

Use code with caution.

### 2. Passing and Reading Arguments

To call the function with arguments, place them **after the function name, separated by spaces**. [link](https://www.youtube.com/watch?v=Oor0ft3Z-84\&t=221)

bash

```
#!/bin/dash

# 1. Define the function
greet_user() {
    # Access arguments by their position
    echo "Hello, $1!"
    echo "Your role is $2."
}

# 2. Call the function (Do not use parentheses here)
greet_user "Alice" "Administrator"
```

Use code with caution.

### 3. Special Argument Variables

Inside your function, you can use several built-in variables to manage the passed parameters: [link](https://www.youtube.com/watch?v=bw71dbHyl2k\&t=185)

- **`$1`, `$2`, `$3`...**: The individual arguments by their order.
- **`${10}`, `${11}`...**: Braces are required to reference the 10th argument and beyond.
- **`$#`**: The total number of arguments passed to the function.
- **`$@`**: All arguments as individual, quoted elements (`"$1"` `"$2"` ...). **This is the preferred way to loop or forward arguments**.
- **`$*`**: All arguments combined into a single string separated by spaces (`"$1 $2"`).
- **`$0`**: The name of the _parent script_ itself, not the function. (In Bash, use `${FUNCNAME[0]}` to get the function's name). [link](https://stackoverflow.com/questions/6212219/passing-parameters-to-a-bash-function)

### 4. Code Example

Here is a complete script demonstrating how to use and loop through function arguments safely:

bash

```
#!/bin/bash

analyze_items() {
    echo "Function received $# arguments."

    # Safely looping through all arguments using "$@"
    for item in "$@"; do
        echo "Processing: $item"
    done
}

# Call with arguments containing spaces by using double quotes
analyze_items "First Item" "Second Item" "Third"
```

Use code with caution.

### Important Practices

- **Quote your variables**: Always wrap your argument variables in double quotes (e.g., `"$1"`) to prevent the shell from breaking values with spaces into multiple arguments. [link](https://askubuntu.com/questions/1114817/how-to-assign-a-function-with-arguments-to-a-variable-then-pass-the-variable-to)
- **Script vs Function scopes**: A function creates its own scope for `$1`, `$2`, etc. If you want to use the script's command-line arguments inside a function, you must explicitly pass them when calling it: `my_function "$@"`. [link](https://stackoverflow.com/questions/2740906/how-to-access-command-line-arguments-of-the-caller-inside-a-function)

Would you like help setting up a **specific argument loop**, or do you need to handle **named/flagged arguments** (like `-f filename`) inside your function?

- [link](https://stackoverflow.com/questions/6212219/passing-parameters-to-a-bash-function)\
  Passing parameters to a Bash function - Stack Overflow\
  Jun 2, 2011 — 8 Answers. ... There are two typical ways of declaring a function. I prefer the second approach. ... The function refers to passed...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=Oor0ft3Z-84\&t=221)\
  How To Use Functions Within A Shell Scripts In Linux\
  Mar 21, 2023 — we need to talk about like uh parameterize function and returning value okay so what is a parameterized function let me first disc...\
  4m\
  YouTube·ProgrammingKnowledge
- [link](https://www.youtube.com/watch?v=xWjgdDE%5Fdz8\&t=98)\
  How to Pass and Reference Arguments in Functions\
  Feb 21, 2023 — so just for now let's just use the shebang. but what we're going to do in this video is we're going to make a. function. so let's ...\
  18m\
  YouTube·Daily Dose of Dev

Show all

## stdin stdout

In shell scripting, **STDIN (Standard Input)**, **STDOUT (Standard Output)**, and **STDERR (Standard Error)** are the three default data streams used by programs to receive input and send output.

Every stream is assigned a numeric file descriptor (FD): `0` for input, `1` for normal output, and `2` for error messages.

### 1. The Three Standard Streams

| Stream     | Name            | File Descriptor | Default Device  | Purpose                            |
| ---------- | --------------- | --------------- | --------------- | ---------------------------------- |
| **STDIN**  | Standard Input  | `0`             | Keyboard        | Reads data into the program        |
| **STDOUT** | Standard Output | `1`             | Terminal Screen | Displays normal program output     |
| **STDERR** | Standard Error  | `2`             | Terminal Screen | Displays error messages separately |

***

### 2. Redirecting STDOUT (Output)

You can redirect the normal output of a command away from the screen and into a file using the `>` and `>>` operators.

- **`>` (Overwrite):** Sends STDOUT to a file, replacing its contents.\
  bash

<!---->

```
echo "Hello World" > output.txt
```

Use code with caution.

- **`>>` (Append):** Sends STDOUT to a file, adding it to the end of the existing content.\
  bash

<!---->

```
echo "More text" >> output.txt
```

Use code with caution.

***

### 3. Redirecting STDIN (Input)

You can feed data into a command from a source other than your keyboard.

- **`<` (File Input):** Passes the contents of a file into a command's STDIN.\
  bash

<!---->

```
grep "error" < logfile.txt
```

Use code with caution.

- **`<<` (Here-Doc):** Passes a multi-line block of text directly into a command within the script.\
  bash

<!---->

```
cat << EOF
Line 1 of input
Line 2 of input
EOF
```

Use code with caution.

***

### 4. Combining Streams and Pipelines

The pipe operator (`|`) connects the **STDOUT** of the left command directly to the **STDIN** of the right command.

bash

```
# STDOUT of 'cat' becomes the STDIN of 'grep'
cat names.txt | grep "Alice"
```

Use code with caution.

#### Handling Errors (STDERR)

Because STDOUT and STDERR both print to the screen by default, you must explicitly use file descriptors to separate them.

bash

```
# Redirect only errors (2) to a separate file
ls non_existent_folder 2> errors.log

# Redirect normal output (1) and errors (2) to different files
command > success.log 2> errors.log

# Combine both STDOUT and STDERR into a single file (Modern syntax)
command > all_output.log 2>&1
```

Use code with caution.

***

### 5. Using Streams in Functions

You can read STDIN inside a shell function using loops or commands like `read` or `cat`. This allows your custom functions to accept piped data.

bash

```
#!/bin/sh

# This function processes data sent via STDIN
process_stream() {
    echo "--- Starting Stream Processing ---"
    # 'cat' without arguments reads directly from STDIN
    cat | tr 'a-z' 'A-Z'
}

# Example 1: Passing a file via STDIN
process_stream < input.txt

# Example 2: Piping data into the function
echo "hello from the pipe" | process_stream
```

Use code with caution.

Would you like to see how to write a function that handles **both** positional arguments and piped STDIN, or do you need to suppress output entirely using `/dev/null`?

- [link](https://python.plainenglish.io/stdin-stdout-and-stderr-for-mortals-3b2d0f3b8f42)\
  stdin, stdout, and stderr For Mortals | by Rahul Beniwal\
  Jul 23, 2024 — stdin, stdout , and stderr Overview In Unix-like operating systems, including Linux and macOS, stdin ( Standard input ) , stdout (\
  \
  \
  Python in Plain English
- [link](https://subscription.packtpub.com/book/programming/9781789951288/2/ch02lvl1sec13/redirecting-stdin-stdout-and-stderr)\
  Chapter 2: Making Your Programs Easy to Script | Linux System Programming Techniques\
  Getting ready It's best if we use the Bash shell for this recipe for compatibility purposes. How it works… Standard output, or std...\
  \
  Packt
- [link](https://labex.io/tutorials/linux-how-to-leverage-linux-standard-streams-421529)\
  How to Leverage Linux Standard Streams\
  Understanding Linux Standard Streams In the Linux operating system, every process has three standard streams that are automaticall...\
  \
  LabEx

Show all

## shell fn stdin stdout stderr

To handle **STDIN, STDOUT, and STDERR** inside a shell function, you treat the function exactly like a standalone mini-program. A function can read from piped input, return output via text streams rather than exit codes, and isolate errors to the error stream.

### 1. Reading STDIN Inside a Function

A function can accept data piped into it or redirected from a file. You capture STDIN using commands like `cat`, `read`, or `while` loops inside the function body.

bash

```
# Process input line-by-line from STDIN
process_lines() {
    while IFS= read -r line; do
        echo "Line: $line"
    done
}

# Usage:
echo -e "Apple\nBanana" | process_lines
```

Use code with caution.

***

### 2. Capturing STDOUT vs. Return Codes

Shell functions **cannot return data using the `return` keyword**. The `return` statement only sends back an exit status code (0 for success, 1-255 for failure). To return actual data (STDOUT), write it to the stream and capture it using **command substitution `$(...)`**.

bash

```
get_date() {
    # This goes to STDOUT
    echo "$(date +%Y-%m-%d)"
    # This indicates success
    return 0
}

# Capture the STDOUT stream of the function into a variable
current_date=$(get_date)
```

Use code with caution.

***

### 3. Writing to STDERR from a Function

To print error messages that won't pollute your normal data output, redirect the function's internal output to file descriptor `2` (`>&2`).

bash

```
log_error() {
    echo "[ERROR] Something went wrong!" >&2
}

# Usage:
# The error message still displays on the screen, but...
log_error

# ...if you capture STDOUT, the error stream bypasses the variable!
result=$(log_error)
```

Use code with caution.

***

### 4. Complete Architecture Example

This robust script demonstrates a function that processes **STDIN**, returns results via **STDOUT**, logs issues to **STDERR**, and sets a proper **Exit Code**.

bash

```
#!/bin/bash

# Function filters numbers from an input stream
filter_even_numbers() {
    local count=0

    # Check if STDIN is empty (is a terminal instead of a pipe/file)
    if [ -t 0 ]; then
        echo "[WARN] No data piped into function. Expecting STDIN." >&2
        return 1
    fi

    # Read from STDIN line by line
    while read -r number; do
        # Validate that input is actually an integer
        if [[ ! "$number" =~ ^[0-9]+$ ]]; then
            echo "[ERROR] '$number' is not a valid integer." >&2
            continue
        fi

        # Process data and write valid results to STDOUT
        if [ $((number % 2)) -eq 0 ]; then
            echo "$number"
            count=$((count + 1))
        fi
    done

    # Return success if we processed items, otherwise failure
    [ "$count" -gt 0 ] && return 0 || return 2
}

# --- Execution ---

# 1. Feed data through STDIN, capture STDOUT, separate STDERR
echo -e "12\n35\nInvalidText\n44" | filter_even_numbers > success.log 2> error.log

# 2. Check the function's return code status
exit_status=$?
echo "Function exited with status: $exit_status"
```

Use code with caution.

### Stream Behavior Wrap-up

- **`cat` inside a function** reads the function's entire inherited STDIN stream.
- **`echo ... >&2`** ensures debugging messages hit the terminal even if the user redirects the function's main output to a file.
- **`return $?`** passes the status code of the last executed command within the function out to the main script.

Would you like to explore **how to parse optional flags** (like `-v` for verbose output) alongside streams, or do you need to look at **silencing specific streams** inside your function?

- [link](https://www.physics.udel.edu/~bnikolic/teaching/phys660/RUTE/rute/node11.html)\
  8\. Streams and sed -- the Stream Editor

8.1 Introduction The commands grep, echo, df and so on print some output to the screen. In fact, what is happening on a lower leve...\
\
University of Delaware

- [link](https://code.haxe.org/category/beginner/stdin-stdout-stderr.html)\
  stdin, stdout, stderr - Beginner - Haxe programming language cookbook\
  Aug 16, 2019 — Reading from stdin and writing to stdout and stderr. stdin, stdout, stderr Reading from stdin and writing to stdout and stderr. st...\
  \
  Haxe Code Cookbook
- [link](https://www.lenovo.com/au/en/glossary/stdout/?srsltid=AfmBOoqnSMRDP%5FP%5FRiz4KPr98V6M3Xa1WH2rvqbATeMW4z9Ll4JTcMdF)\
  Understanding How Stdout Works & What it is Used For\
  Is there a way to differentiate between regular output and error messages? Yes, programs can send regular output to the stdout str...\
  \
  \
  Lenovo

Show all

# (?) all shell fn args return stdin stdout stderr syntax

In Bash and POSIX-compliant shells, **functions behave exactly like mini-scripts**, meaning they do not use standard programming return syntax to output data. Instead, they interact entirely through positional arguments, standard I/O streams (`stdin`, `stdout`, `stderr`), and numerical exit codes. [link](https://www.boot.dev/blog/devops/stdin-stdout-stderr)

Here is the complete syntax cheat sheet for mastering shell function data flow.

***

### 1. Function Definition & Arguments Syntax

Functions do not declare named parameters in their signature. All arguments passed to a function are caught inside it using numerical positional variables. [link](https://unix.stackexchange.com/questions/94224/how-to-use-filename-arguments-or-default-to-stdin-stdout-brief)

bash

```
# Syntax Profile
my_function() {
    echo "First argument: $1"    # First parameter
    echo "Second argument: $2"   # Second parameter
    echo "All args as list: $@"   # All arguments preserved as distinct words
    echo "All args as string: $*" # All arguments flattened into one string
    echo "Total count: $#"        # Total number of arguments passed
}

# Invocation (Do NOT use parentheses when calling)
my_function "Hello" "World"
```

Use code with caution.

### 2. Return / Exit Status Syntax

The `return` keyword in a shell function **only outputs a numerical exit status** (0 to 255) to indicate success or failure. It cannot return strings, arrays, or objects. [link](https://stackoverflow.com/questions/29530447/about-stdin-stdout-stderr-and-return-value)

bash

```
check_status() {
    if [ "$1" = "good" ]; then
        return 0  # 0 indicates Success/True
    else
        return 1  # 1-255 indicates Failure/False
    fi
}

# Invocation & Evaluation
check_status "bad"
exit_code=$?  # $? captures the return status of the last executed command
echo "Function exited with: $exit_code"
```

Use code with caution.

### 3. Output Streams: STDOUT and STDERR Syntax

To output actual data (like text or strings) from a function, you must write it to **Standard Output (STDOUT)**. To output diagnostic errors or logging, write to **Standard Error (STDERR)** by using the stream redirection operator `>&2`. [link](https://stackoverflow.com/questions/15456755/confused-about-stdin-stdout-stderr)

- **File Descriptor 1:** STDOUT (Default for `echo`, `printf`)
- **File Descriptor 2:** STDERR (Must be manually targeted using `>&2`) [link](https://stackoverflow.com/questions/3385201/confused-about-stdin-stdout-and-stderr)

bash

```
generate_output() {
    echo "This goes to STDOUT (normal data)"
    echo "ERROR: Something went wrong!" >&2  # Redirects this specific line to STDERR
}

# Capturing STDOUT while letting STDERR pass through to the screen
captured_data=$(generate_output)
```

Use code with caution.

### 4. Input Stream: STDIN Syntax

Functions can natively process data fed through **Standard Input (STDIN)** via pipes (`|`) or redirection operators (`<`). Inside the function, commands like `cat`, `read`, or `awk` will automatically consume this stream. [link](https://stackoverflow.com/questions/11904907/redirect-stdout-and-stderr-to-function)

bash

```
process_input() {
    # 'cat' without arguments reads everything from STDIN
    cat | tr 'a-z' 'A-Z'
}

# Passing data via Pipe
echo "hello world" | process_input

# Passing data via File Redirection
process_input < input.txt
```

Use code with caution.

***

### Complete Multi-Stream Cheat Sheet

This terminal matrix shows how to dynamically route `stdout`, `stderr`, and `return` codes during invocation:

| Objective                          | Syntax Example                             |
| ---------------------------------- | ------------------------------------------ | --------------- |
| **Capture STDOUT to variable**     | `result=$(my_function "arg1")`             |
| **Capture STDOUT, silence STDERR** | `result=$(my_function "arg1" 2>/dev/null)` |
| **Capture BOTH STDOUT & STDERR**   | `combined=$(my_function "arg1" 2>&1)`      |
| **Redirect STDERR to a log file**  | `my_function "arg1" 2> error.log`          |
| **Pipe STDOUT to next command**    | `my_function "arg1"                        | grep "pattern"` |
| **Pass Inline String to STDIN**    | `my_function <<< "This is stdin data"`     |

### Unified "All-in-One" Syntax Example

Here is a robust example putting all of these elements together into a single, cohesive workflow:

bash

```
# Define the utility function
compute_data() {
    local label="$1"  # Read positional argument 1

    # 1. Consume STDIN data if available
    while read -r line; do
        if [ -z "$line" ]; then
            # 2. Write to STDERR if an anomaly is found
            echo "Warning: Empty line found in $label processing" >&2
        else
            # 3. Write to STDOUT for valid output data
            echo "Processed [$label]: $line"
        fi
    done

    # 4. Return an exit status
    return 0
}

# Execute using standard pipelines and stream separation
echo -e "Line A\n\nLine B" | compute_data "Batch_1" > output.log 2> errors.log

echo "Execution Status: $?"
```

Use code with caution.

If you would like, tell me **what task your function needs to accomplish** or **which shell flavor** (like Bash, Zsh, or sh) you are actively targeting. I can generate a production-ready snippet tailored to your codebase.

- [link](https://www.boot.dev/blog/devops/stdin-stdout-stderr)\
  Stdin, Stdout, and Stderr: Linux I/O Streams Explained | Boot.dev\
  Jul 6, 2026 — Frequently Asked Questions \* What are the file descriptor numbers for stdin, stdout, and stderr? \* How do I redirect stderr to std...\
  Boot.dev
- [link](https://www.youtube.com/watch?v=9FuWfNdOnsY)\
  Linux Standard Streams Explained: stdin, stdout, & stderr ...\
  Apr 6, 2025 — let's explore standard streams in Linux. in this video we'll understand standard input standard output and standard error. standar...\
  5:47\
  YouTube·CodeLucky
- [link](https://en.wikipedia.org/wiki/Standard%5Fstreams)\
  Standard streams - Wikipedia\
  In computer programming, standard streams are preconnected input and output communication channels between a computer program and ...\
  Wikipedia

Show all

# all shell fn syntax args variables input output return

In shell scripting (like Bash), functions act like mini-scripts with their own execution environments but share the same process memory.

Here is the complete reference for shell function syntax, arguments, variables, input/output, and return behavior.

***

### 1. Syntax

You can define a shell function in two ways:

- **Standard POSIX Syntax** (Highly recommended for portability):\
  bash

<!---->

```
my_function() {
    # commands go here
}
```

Use code with caution.

- **Keyword Syntax** (Specific to Bash/Zsh):\
  bash

<!---->

```
function my_function {
    # commands go here
}
```

Use code with caution.\
[link](https://stackoverflow.com/questions/3811345/how-to-pass-all-arguments-passed-to-my-bash-script-to-a-function-of-mine)

**Invoking a function:**\
Call it like a regular command. **Never** use parentheses when calling a function. [link](https://stackoverflow.com/questions/59388262/how-can-i-assign-the-output-of-a-function-with-parameters-to-a-variable-using)

bash

```
my_function arg1 arg2
```

Use code with caution.

***

### 2. Arguments (Positional Parameters)

Functions do not explicitly name their parameters in the definition signature. Instead, arguments passed during invocation are captured inside the function using **positional parameters**: [link](https://www.linuxteck.com/bash-function-arguments-and-return-values/)

- `$1`, `$2`, ... `$9`: The first, second, through ninth arguments.
- `${10}`, `${11}`...: Braces are **mandatory** for the 10th argument and beyond.
- `$#`: The total number of arguments passed to the function.
- `$@` or `$*`: Represents all arguments passed. **Always prefer `"$@"`** enclosed in double quotes to preserve arguments containing spaces.
- `$0`: **Warning!** `$0` does not change to the function name; it remains the name of the main invoking shell script. [link](https://www.linuxteck.com/bash-function-arguments-and-return-values/)

***

### 3. Variables & Scope

By default, all variables created inside a shell function are **global** and will modify or leak into the rest of your script. [link](https://www.oreilly.com/library/view/bash-cookbook/0596526784/ch10s05.html)

- **Local Variables**: Use the `local` keyword inside the function body to isolate variables.\
  bash

<!---->

```
calculate() {
    local result=$1  # Private to this function
    global_var="accessible anywhere"
}
```

Use code with caution.\
[link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-functions-and-its-types/)

***

### 4. Input & Output (Data Passing)

Because shell functions function like micro-programs, standard streams are used to process text data:

- **Passing Input**: You can pass data via explicit arguments, or stream text into the function using standard input (`STDIN`) via a pipe or a redirect:\
  bash

<!---->

```
process_data() {
    grep "error"   # Reads from standard input automatically
}
cat log.txt | process_data
```

Use code with caution.

- **Capturing Output**: Functions send text out via `STDOUT` (using `echo` or `printf`). You capture this stream using **Command Substitution** `$(...)`:\
  bash

<!---->

```
get_name() {
    echo "John Doe"
}
my_name=$(get_name)  # Assigns "John Doe" to my_name
```

Use code with caution.\
[link](https://askubuntu.com/questions/824856/how-do-i-set-the-output-of-a-function-as-a-variable-value-in-a-bash-script)

***

### 5. Return Codes vs. Return Values

A common beginner mistake is trying to return text data or strings using the `return` keyword. [link](https://stackoverflow.com/questions/8742783/returning-value-from-called-function-in-a-shell-script)

- **The `return` command**: Only returns an **exit status integer between 0 and 255**.
  - `0` indicates success.
  - Any number from `1` to `255` indicates an error or custom status code. [link](https://stackoverflow.com/questions/52647994/how-to-return-passed-arguments-in-function-in-shell-script)
- **Capturing the return status**: The status code of the last run command (or explicit `return`) is automatically stored in the special shell variable `$?`. [link](https://icl-rcs-user-guide.readthedocs.io/en/latest/support/using-linux/shell-scripting/)

bash

```
check_file() {
    if [ -f "$1" ]; then
        return 0  # Success
    else
        return 1  # Failure
    fi
}

check_file "notes.txt"
status=$?  # Captures the return integer
```

Use code with caution.

***

### Summary Cheat-Sheet Example

bash

```
#!/bin/bash

# Definition
math_power() {
    local base=$1       # Argument 1
    local exponent=$2   # Argument 2

    if [ -z "$base" ] || [ -z "$exponent" ]; then
        return 1        # Return exit code 1 (Error: missing arguments)
    fi

    # Send actual calculation answer to STDOUT
    echo $(( base ** exponent ))
    return 0            # Return exit code 0 (Success)
}

# Invocation & Capturing Output Stream
result=$(math_power 2 3)
exit_code=$?

echo "Output Result: $result"    # Output Result: 8
echo "Exit Status: $exit_code"  # Exit Status: 0
```

Use code with caution.

If you need help building a specific function, let me know **what task you are trying to automate** or **what data you need to process**, and I can generate the exact script block for you.

- [link](https://stackoverflow.com/questions/4824590/propagate-all-arguments-in-a-bash-shell-script)\
  Propagate all arguments in a Bash shell script - Stack Overflow\
  Jan 28, 2011 — Loading when this answer was accepted… Show activity on this post. Use "$@" instead of plain $@ if you actually wish your paramete...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/3811345/how-to-pass-all-arguments-passed-to-my-bash-script-to-a-function-of-mine)\
  How to pass all arguments passed to my Bash script to a function of ...\
  Sep 28, 2010 — Passing some arguments: If you want to pass all but the first arguments, you can first use shift to "consume" the first argument a...\
  Stack Overflow
- [link](https://www.linuxteck.com/bash-function-arguments-and-return-values/)\
  Bash Function Arguments and Return Values Explained (With ...\
  May 30, 2026 — How Arguments Actually Get Into a Function. You do not declare parameters inside the parentheses. The () after the name stays empt...\
  LinuxTeck

Show all

## save to variables

To save function outputs directly into variables, you have three distinct methods depending on your needs: <mark><strong>Command Substitution</strong><span> </span>(most common),<span> </span><strong>Indirect Variable Assignment</strong><span> </span>(fastest), or using<span> </span><strong>Global/Environment Variables</strong></mark>.

***

### 1. Command Substitution (Standard Method)

This method captures whatever the function prints to standard output (`echo` or `printf`).

bash

```
# Define function
get_user_info() {
    local username="admin"
    echo "$username" # This is what gets captured
}

# Execute and save output to a variable
current_user=$(get_user_info)

echo "$current_user" # Outputs: admin
```

Use code with caution.

- **Pros**: Clean, portable, highly readable.
- **Cons**: Spawns a subshell, which can slightly slow down high-performance loops.

***

### 2. Variable Name Pass-by-Reference (Advanced / Faster)

Instead of capturing printed text, you pass the _name_ of the variable into the function as an argument. The function then modifies that variable directly using `printf -v` or `local -n` (namerefs in Bash 4.3+).

#### Option A: Using `printf -v` (Highly Compatible)

bash

```
calculate_square() {
    local input=$1
    local var_target=$2 # The string name of the destination variable

    local result=$(( input * input ))

    # Assigns the value of $result directly to the variable named in $var_target
    printf -v "$var_target" "%s" "$result"
}

# Pass "my_output" as the target variable name
calculate_square 5 my_output

echo "$my_output" # Outputs: 25
```

Use code with caution.

#### Option B: Using `local -n` (Bash 4.3+)

bash

```
fetch_status() {
    local -n target_var=$1 # Creates a reference link to the variable passed in
    target_var="Successfully Connected"
}

# Call function with the bare variable name
fetch_status network_result

echo "$network_result" # Outputs: Successfully Connected
```

Use code with caution.

- **Pros**: Extremely fast because it does not create a subshell.
- **Cons**: Bash-specific (won't work in basic POSIX `sh`).

***

### 3. Global Variable Modification (Simplest)

Since shell variables are global by default, functions can directly modify any variable declared outside of them, provided you do not use the `local` keyword.

bash

```
# Declare global variable
APP_STATUS="Unknown"

update_status() {
    # No "local" keyword used here
    APP_STATUS="Running"
}

# Call function
update_status

echo "$APP_STATUS" # Outputs: Running
```

Use code with caution.

- **Pros**: Very simple to write.
- **Cons**: Bad programming practice for large scripts, as functions can accidentally overwrite each other's data.

***

If you have a specific script you are working on, tell me **what data you are trying to capture** or **share your current code block**, and I can show you exactly how to hook up the variables.

- [link](https://labex.io/tutorials/shell-how-to-assign-and-reassign-variables-in-bash-392817)\
  How to Assign and Reassign Variables in Bash\
  Using Variables with Command Substitution Command substitution allows you to capture the output of a command and store it in a var...\
  \
  LabEx
- [link](https://medium.com/jl-codes/global-variable-basics-586a80c4fb8f)\
  Global Variable Basics. While working on an expanding project… | by John Long | JL Codes\
  Nov 26, 2017 — Some of you capable developers out there might laugh at this puzzle. Or lack there-of. You see, when using a function to perform a...\
  \
  \
  Medium
- [link](https://community.tulip.co/t/easier-method-to-clear-a-large-number-of-variables-in-one-action/7117)\
  Easier method to clear a large number of variables in one action\
  Dec 15, 2022 — I have a button that clears the variables so operator can have a clean start to input values into variables in a step. For the but...\
  \
  \
  Tulip Community

Show all

## save input to variables

To save user text input into variables inside or outside a function, you use the built-in **`read`** command.

Here is how to capture input into variables using different methods.

***

### 1. Basic User Input (`read`)

The simplest way to pause execution, wait for user input, and save it to a variable.

bash

```
# -p adds a prompt message
read -p "Enter your username: " user_input

echo "Saved value: $user_input"
```

Use code with caution.

***

### 2. Inside a Function (Prompting the User)

You can wrap the `read` command inside a function and combine it with local variables or command substitution.

bash

```
ask_user_details() {
    # Read directly into a local variable
    read -p "Enter your age: " local_age

    # Send the value out to the main script
    echo "$local_age"
}

# Capture the function's input into a main variable
user_age=$(ask_user_details)

echo "The user is $user_age years old."
```

Use code with caution.

***

### 3. Splitting Multiple Inputs Automatically

If a user types multiple words separated by spaces, `read` can instantly split them into separate variables.

bash

```
echo "Enter your first name, last name, and city:"
# If user inputs: John Doe Houston
read first last city

echo "First: $first" # John
echo "Last: $last"   # Doe
echo "City: $city"   # Houston
```

Use code with caution.

***

### 4. Reading Hidden Input (Passwords)

Use the `-s` flag to hide the characters as the user types them into the variable.

bash

```
get_password() {
    # -s prevents characters from showing on screen
    read -s -p "Enter password: " secure_pass
    echo "$secure_pass"
}

my_password=$(get_password)
```

Use code with caution.

***

### 5. Saving Pipe (`STDIN`) Input into a Variable

If you are passing data into a function via a pipe (`|`) instead of asking a human to type it, use `read` inside a loop or directly.

bash

```
process_stream() {
    # Reads the incoming piped stream line by line into a variable
    while read -r line; do
        local saved_line="$line"
        echo "Processed: $saved_line"
    done
}

# Pipe data into the function
echo -e "Line1\nLine2" | process_stream
```

Use code with caution.

***

If you are building an interactive script, let me know **what specific type of input** you are asking for (e.g., a menu choice, a confirmation y/n, or a file path) so I can give you the exact validation logic.

- [link](https://aoyilmaz.medium.com/bash-scripting-for-beginners-part-3-input-and-arithmetic-operations-c04b8cf4aaff)\
  Medium\
  Apr 11, 2022 — Input If we would like to ask the user for input then we use read command. This command takes the input and will save it into a va...\
  \
  \
  Medium
- [link](https://medium.com/@wealthiscertain/making-your-bash-scripts-interactive-using-user-input-with-read-bb761eb490cc)\
  Making your Bash Scripts Interactive: Using User Input with read\
  Nov 8, 2024 — Basic Usage of read The read command captures user input and stores it in a specified variable. Here's how it works: The read comm...\
  \
  \
  Medium
- [link](https://smallbasic-publicwebsite.azurewebsites.net/tutorials/chapter3)\
  Small Basic\
  Analysis of the program Read() looks just like WriteLine(), but with no inputs. It is an operation and basically it tells the comp...\
  \
  \
  Small Basic

Show all

## can i cat to a variable in a shell fn

Yes, you can `cat` directly into a variable inside a shell function.

Depending on whether you want to save a **file's contents**, a multi-line **block of text** (Here-doc), or standard **piped input**, choose one of the following methods.

***

### 1. Saving a File's Contents to a Variable

If your function takes a file name as an argument, use **Command Substitution** `$(cat ...)` to store the contents.

bash

```
read_file_to_var() {
    local file_path=$1

    # Captures entire file text into a local variable
    local file_content=$(cat "$file_path")

    echo "Length of file: ${#file_content} characters."
}
```

Use code with caution.

💡 _Performance Tip (Bash only):_ You can skip calling the external `cat` program entirely by using `$(< "file.txt")`. It is much faster:

bash

```
local file_content=$(< "$file_path")
```

Use code with caution.

***

### 2. Saving a Multi-line Text Block (Here-Doc)

If you want to define a large, multi-line block of text inside your function and save it straight to a variable, pair `cat` with a **Here-Document** (`<<EOF`):

bash

```
generate_config() {
    local db_host=$1
    local db_user=$2

    # Feeds the text block into cat, which gets caught by $(...)
    local config_data=$(cat <<EOF
[database]
host = $db_host
user = $db_user
status = active
EOF
)

    echo "$config_data"
}

# Run the function
generate_config "localhost" "admin"
```

Use code with caution.

***

### 3. Saving Piped Stream Input (`STDIN`)

If you want your function to accept data from a pipe (e.g., `echo "hello" | my_fn`) and save that entire incoming stream into a variable using `cat`, omit the file name argument.

When `cat` has no file argument, it reads standard input until it hits an End-of-File (EOF).

bash

```
capture_pipeline() {
    # cat reads the incoming pipe stream completely
    local stream_data=$(cat)

    echo "--- Captured Stream ---"
    echo "$stream_data"
}

# Test it by piping data into the function
echo -e "Line one\nLine two\nLine three" | capture_pipeline
```

Use code with caution.

***

### ⚠️ Crucial Warning on Trailing Newlines

By design, shell command substitution `$(...)` **automatically strips off all trailing newlines (`\n`)** from the end of the text block.

If preserving trailing blank lines at the very end of your file or stream is critical, append a dummy character inside the assignment and strip it off afterward:

bash

```
# Preserves exact whitespace and trailing newlines
local exact_content=$(cat "$file_path"; echo "X")
exact_content="${exact_content%X}" # Removes the trailing X
```

Use code with caution.

Let me know if you are dealing with **binary files, extremely large text logs**, or if you want to see how to process this text line-by-line!

- [link](https://www.linuxjournal.com/article/3645)\
  Shell Functions and Path Variables, Part 1\
  Mar 1, 2000 — The next part of options performs some initializations. The first six executable lines declare variables. Since code in a function...\
  \
  Linux Journal
- [link](https://www.baeldung.com/linux/values-into-variable-from-pipe)\
  Read Values Into a Shell Variable From a Pipe\
  Mar 18, 2024 — 7. Which One to Use? There's almost always a use case for the above methods. For files, we can use a while loop and read the file'\
  \
  \
  Baeldung
- [link](https://stackoverflow.com/questions/14840178/using-a-bash-variable-in-place-of-a-file-as-input-for-an-executable)\
  using a Bash variable in place of a file as input for an executable\
  Feb 12, 2013 — Comments <<<${variable} redirects STDIN to come from ${variable} <<<${variable} is equivalent to (but faster than) cat <<<${variab...\
  \
  Stack Overflow

Show all

# (d) shell syntax dollar symbol

The dollar sign (`$`) in shell syntax is <mark>primarily used for<span> </span><strong>variable expansion</strong>,<span> </span><strong>command substitution</strong>, and<span> </span><strong>arithmetic evaluation</strong></mark>.

Here is the functional symbol for you to copy, followed by a breakdown of its common uses:

$

### Common Uses in Shell Scripting

- **Variable Expansion (`$VAR` or `${VAR}`)**: Retrieves the value stored in a variable. Using curly braces `${}` protects the variable name from adjacent text.
  - Example: `NAME="Alice"; echo $NAME` or `echo "${NAME}_file"`
- **Command Substitution (`$(command)`)**: Runs a command and replaces the syntax with the command's standard output.
  - Example: `CURRENT_DIR=$(pwd)`
- **Arithmetic Evaluation (`$((expression))`)**: Evaluates a mathematical expression and returns the result.
  - Example: `RESULT=$((3 + 5))`
- **Special Parameters**:
  - `$?`: Returns the exit status of the last executed command (0 means success).
  - `$$`: Returns the Process ID (PID) of the current shell shell.
  - `$1`, `$2`, etc.: Represents positional arguments passed to a script.

To narrow this down, are you debugging a **specific error** in a script, or would you like to see how to use the dollar sign for a **particular task** like string manipulation?

- [link](https://www.ibm.com/docs/en/aix/7.2.0?topic=shell-quotation-characters-in-korn-posix)\
  Quotation of characters in the Korn shell or POSIX shell\
  The dollar sign retains its special meaning introducing parameter expansion, a form of command substitution, and arithmetic expans...\
  \
  IBM
- [link](https://www.youtube.com/watch?v=kr3WP%5F-bu8A)\
  Shell Scripting Tutorial for Beginners 10 - Perform arithmetic operations - YouTube\
  Mar 16, 2017 — Shell Scripting Tutorial for Beginners 10 - Perform arithmetic operations and then I want to perform uh some basic arithmetic on t...\
  \
  \
  YouTube
- [link](https://labex.io/tutorials/shell-how-to-escape-special-characters-when-referencing-shell-variables-414794)\
  How to escape special characters when referencing shell variables\
  Variable Expansion: The $ character is used to reference shell variables.\
  \
  LabEx

Show all

# all shell syntax dollar symbol

The dollar sign (`$`) in shell scripting is <mark>primarily used for<span> </span><strong>expansion</strong><span> </span>and<span> </span><strong>substitution</strong></mark>, telling the shell to evaluate what follows it rather than treating it as literal text.

Here is a comprehensive breakdown of every way the dollar symbol is used in shell syntax (such as Bash, Shard, and Zsh).

### Variable Expansion

- **`$VAR`**: Substitutes the value of the variable `VAR`.
- **`${VAR}`**: Same as `$VAR`, but clarifies variable boundaries (e.g., `${VAR}text` prevents looking for a variable named `VARtext`).
- **`${1}`, `${2}`...**: Expands positional arguments passed to a script or function (braces are mandatory for numbers 10 and above).

### Parameter Transformations & Defaults

- **`${VAR:-default}`**: Uses `default` if `VAR` is unset or empty.
- **`${VAR:=default}`**: Sets `VAR` to `default` if it is unset or empty, then expands it.
- **`${VAR:+alternative}`**: Uses `alternative` if `VAR` is set and not empty; otherwise, expands to nothing.
- **`${VAR:?error_msg}`**: Prints `error_msg` and exits the script if `VAR` is unset or empty.
- **`${#VAR}`**: Expands to the character length of the value stored in `VAR`.
- **`${VAR:offset:length}`**: Extracts a substring from `VAR` starting at `offset` for `length` characters.
- **`${VAR#pattern}`**: Removes the shortest matching prefix `pattern` from the front of `VAR`.
- **`${VAR##pattern}`**: Removes the longest matching prefix `pattern` from the front of `VAR`.
- **`${VAR%pattern}`**: Removes the shortest matching suffix `pattern` from the end of `VAR`.
- **`${VAR%%pattern}`**: Removes the longest matching suffix `pattern` from the end of `VAR`.
- **`${VAR/pattern/string}`**: Replaces the first occurrence of `pattern` in `VAR` with `string`.
- **`${VAR//pattern/string}`**: Replaces all occurrences of `pattern` in `VAR` with `string`.

### Special and Process Variables

- **`$?`**: Expands to the exit status of the most recently executed foreground command (0 means success).
- **`$$`**: Expands to the Process ID (PID) of the current shell.
- **`$!`**: Expands to the Process ID (PID) of the most recently executed background command.
- **`$0`**: Expands to the name of the shell script or the shell itself.
- **`$-`**: Expands to the current flags/options set in the shell (e.g., `himBH`).

### Script Arguments Expansion

- **`$#`**: Expands to the total number of positional arguments passed to the script or function.
- **`$*`**: Expands to all positional arguments as a single word (separated by the first character of `IFS`, usually a space).
- **`$@`**: Expands to all positional arguments as separate, individual words. Always use double quotes (`"$@"`) to preserve spaces in arguments.

### Operations and Evaluations

- **`$(command)`**: **Command Substitution**. Runs `command` in a subshell and replaces the syntax with its standard output. Replaces the older backtick \`command\` syntax.
- **`$((expression))`**: **Arithmetic Expansion**. Evaluates the mathematical `expression` inside the double parentheses and returns the result (e.g., `$((2 + 2))` returns `4`).

### Quoting and Localization

- **`$'string'`**: **ANSI-C Quoting**. Allows backslash-escaped characters (like `\n` for newline, `\t` for tab) to be replaced with their literal equivalent characters.
- **`$"string"`**: Translates the string into the current locale language if a translation is available; otherwise, it behaves as a normal double-quoted string.

***

To help me tailor this information, let me know:

- Are you trying to **debug a specific error** in a script?

- Do you need an **example of a specific expansion** (like string manipulation or math)?

- Which **shell** (Bash, Zsh, Sh, Fish) are you writing code for?

- [link](https://www.remitly.com/blog/en-gb/currency/dollar-symbol/)\
  Discover the Dollar Symbol: Origins and Usage Explained\
  May 31, 2025 — Programming languages like JavaScript use the $ as a prefix for text expressions. UNIX shells use the symbol to run commands. You ...\
  \
  \
  Remitly

- [link](https://www.youtube.com/watch?v=94gVY1ZXcek)\
  Shell Expansions. - YouTube\
  Feb 17, 2025 — Shell Expansions. the result of 12 into 5 is I said And again dollar twice 12 into 5 twice close and close it the result of 12 int...\
  \
  \
  YouTube

- [link](https://forum.pdpatchrepo.info/topic/5724/dollar-signs-in-objects-and-messages)\
  Dollar signs in objects and messages\
  Jul 30, 2011 — dollar signs generally stand for a SUBSTITUTION. It is generally accepted that where there is a dollar sign, that dollar sign will...\
  \
  \
  PURE DATA forum

Show all

# shell pass variable to stdin

The most efficient and modern way to pass a shell variable to a command's standard input (stdin) in Bash is using a **Here-String** (`<<<`). [link](https://www.youtube.com/watch?v=Xf%5F82stIbB8\&t=10)

bash

```
your_command <<< "$your_variable"
```

Use code with caution.

### 3 Ways to Pass a Variable to Stdin

- **Here-Strings (Recommended for Bash/Zsh)**: This passes the variable directly without spawning an extra process. Always wrap your variable in double quotes to prevent word splitting and preserve spacing.\
  bash

<!---->

```
cat <<< "$my_var"
```

Use code with caution.\
[link](https://www.youtube.com/watch?v=Xf%5F82stIbB8\&t=10)

- **Piping with `printf` (Best for `sh` / POSIX compliance)**: Standard POSIX shells do not support here-strings. Use `printf` instead of `echo` because `echo` can accidentally mangle strings containing backslashes or flags.\
  bash

<!---->

```
printf '%s\n' "$my_var" | your_command
```

Use code with caution.\
[link](https://unix.stackexchange.com/questions/505828/how-to-pass-a-string-to-a-command-that-expects-a-file)

- **Here-Docs (Best for multi-line variables)**: Useful if your variable spans multiple lines and you need strict formatting.\
  bash

<!---->

```
your_command <<EOF
$my_var
EOF
```

Use code with caution.\
[link](https://stackoverflow.com/questions/48738522/pass-shell-parameters-as-stdin-to-invoked-program)

### Quick Comparison

| Method          | Syntax              | Shell Compatibility | Spawns Subprocess? |
| --------------- | ------------------- | ------------------- | ------------------ | ------- |
| **Here-String** | `cmd <<< "$var"`    | Bash, Zsh           | No                 |
| **Printf Pipe** | `printf '%s' "$var" | cmd`                | All (POSIX)        | Yes (\` |
| **Here-Doc**    | `cmd <<EOF...EOF`   | All (POSIX)         | No                 |

If you'd like, let me know:

- What **specific command** you are trying to feed the variable to
- If your variable contains **sensitive data** like passwords or tokens
- Whether you are writing a script for **Bash** or a stricter environment like **sh/Dash** [link](https://unix.stackexchange.com/questions/624812/bash-securely-pipe-environment-variable-to-stdin)

I can tailor the exact snippet you need!

- [link](https://unix.stackexchange.com/questions/624812/bash-securely-pipe-environment-variable-to-stdin)\
  bash securely pipe environment variable to stdin\
  Dec 16, 2020 — If bash has set -x enabled, then piping an environment variable to stdin through echo $passwd may leak the password. However, you ...\
  Unix & Linux Stack Exchange
- [link](https://stackoverflow.com/questions/48738522/pass-shell-parameters-as-stdin-to-invoked-program)\
  Pass shell parameters as stdin to invoked program - Stack Overflow\
  Feb 12, 2018 — \* 1 Answer. Sorted by: To feed your program's stdin a newline-separated list of the command-line arguments with which your script ...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=Xf%5F82stIbB8\&t=10)\
  bash: passing string as stdin (beginner\
  Oct 21, 2020 — um one of my interns actually showed me this little trick um and hopefully it will help you write. some you know better scripts in...\
  2m\
  YouTube·anthonywritescode

Show all

# all shell heredoc here string syntax

In Linux shell scripting (such as Bash, Zsh, and Ksh), **Heredocs (`<<`) and Here Strings (`<<<`)** are input redirection mechanisms used to pass blocks of text or single strings into commands without using external files.

***

### 1. Here Document (Heredoc) Syntax

A **Heredoc** redirects a multi-line block of text into the standard input (`stdin`) of a command. [link](https://www.youtube.com/watch?v=-a1VAole01s)

#### Standard Heredoc (With Variable Expansion)

By default, the shell will evaluate any variables or command substitutions inside the text block. [link](https://sysxplore.com/heredocs-in-bash/)

bash

```
command << DELIMITER
line 1
line 2 with $VARIABLE or $(command)
DELIMITER
```

Use code with caution.

- **Note:** `DELIMITER` can be any unique word (like `EOF`, `END`, or `TEXT`), but the trailing delimiter must be on its own line with no leading or trailing whitespace. [link](https://stackoverflow.com/questions/38043344/input-syntax-for-heredoc-in-bash)

#### Quoted Heredoc (Literal Text / No Expansion)

If you wrap the starting delimiter in **single or double quotes**, or prefix it with a backslash (`\EOF`), all internal text is treated as a strict literal string. Variables and commands will not be evaluated. [link](https://joshuatz.com/posts/2023/shell-heredocs-productive-fun-bash-and-beyond/)

bash

```
command << 'DELIMITER'
This $VARIABLE will print literally and not expand.
DELIMITER
```

Use code with caution.

#### Tab-Suppressed Heredoc (`<<-`)

Adding a minus sign (`-`) allows you to **indent your text block and closing delimiter with physical tab characters**. The shell strips out these leading tabs before processing. [link](https://linuxize.com/post/bash-heredoc/)

bash

```
if true; then
    command <<- DELIMITER
	[Tab]This text can be cleanly indented inside code blocks.
	DELIMITER
fi
```

Use code with caution.

- **Warning:** This only removes true tab characters (`\t`), not spaces. [link](https://oneuptime.com/blog/post/2026-03-02-how-to-use-heredocs-in-bash-scripts-on-ubuntu/view)

***

### 2. Here String Syntax

A **Here String** is a stripped-down, single-line equivalent of a heredoc. It expands the text or variable on the right and feeds it directly into a command. It does not require a closing delimiter. [link](https://www.geeksforgeeks.org/linux-unix/shell-scripting-here-strings/)

bash

```
command <<< "single line string or $variable"
```

Use code with caution.

#### Common Use Cases

- **Passing a variable to a text-processing utility:**\
  bash

<!---->

```
grep "pattern" <<< "$my_variable"
```

Use code with caution.

- **Parsing strings directly into arrays:**\
  bash

<!---->

```
read -r -a array_name <<< "one two three"
```

Use code with caution.

***

### Quick Comparison Reference

| Syntax      | Type                 | Best Used For                              | Variable/Cmd Expansion? | Indentation Rule                                       |
| ----------- | -------------------- | ------------------------------------------ | ----------------------- | ------------------------------------------------------ |
| `<< EOF`    | Standard Heredoc     | Multi-line templates, files, configs       | **Yes**                 | No leading whitespace allowed on closing `EOF`.        |
| `<< 'EOF'`  | Quoted Heredoc       | Multi-line script generators, code blocks  | **No** (Literal)        | No leading whitespace allowed on closing `EOF`.        |
| `<<- EOF`   | Tab-Stripped Heredoc | Deeply indented conditional or loop blocks | **Yes** (unless quoted) | Leading **tabs** are automatically removed from lines. |
| `<<< "str"` | Here String          | Fast single-line variables or small inputs | **Yes**                 | Text sits entirely on the same command line.           |

***

### Practical Advanced Examples

#### Saving a Heredoc directly to a file

bash

```
cat << 'EOF' > config.json
{
  "status": "active",
  "port": 8080
}
EOF
```

Use code with caution.

#### Assigning a Heredoc block to a variable

bash

```
MY_VAR=$(cat << 'EOF'
Line 1
Line 2
EOF
)
```

Use code with caution.

#### Multiline commands over SSH

bash

```
ssh user@remotehost << 'EOF'
  echo "Running updates..."
  sudo apt-get update
  uname -a
EOF
```

Use code with caution.

If you need a specific example, let me know **what target command** you are piping into or **what type of text content** you are trying to parse.

- [link](https://www.reddit.com/r/bash/comments/1rxvbpc/how%5Fdo%5Fyou%5Fprint%5Fhere%5Fdocument%5For%5Fhere%5Fstrings/)\
  How do you print "Here document" or "Here Strings" directly?\
  Mar 19, 2026 — Here documents and here strings exist to turn "strings" in your shell code into "files" that can be handled by tools built for fil...\
  Reddit·r/bash
- [link](https://stackoverflow.com/questions/38043344/input-syntax-for-heredoc-in-bash)\
  Input syntax for heredoc in Bash - unix - Stack Overflow\
  Jun 26, 2016 — This isn't cat syntax per se; it's one of the redirection operators supported by your shell: https://www.gnu.org/software/bash/man...\
  Stack Overflow
- [link](https://www.youtube.com/watch?v=-a1VAole01s)\
  Heredocs in Bash! Understanding how they work and a few ...\
  Sep 21, 2025 — yo what's up everyone my name's Dave. and you suck at programming. today we are going to demystify. here docs specifically in bash...\
  6:52\
  YouTube·You Suck at Programming

Show all

# shell get stdin

To get standard input (**stdin**) in a shell script, you primarily use the built-in **`read`** command. [link](https://superuser.com/questions/618926/using-a-file-input-as-stdin-for-a-shell-script-does-not-work)

Here is how to handle `stdin` depending on how you want to process the data:

### 1. Read Line-by-Line (Most Common)

To process streamed or piped input safely line-by-line, use a `while read` loop. Always include the `-r` flag to prevent backslash characters from being mangled. [link](https://www.youtube.com/watch?v=ITXVrYO0jVo\&t=2)

bash

```
while read -r line; do
    echo "Processing: $line"
done
```

Use code with caution.

**How to use it:**

bash

```
echo -e "Line 1\nLine 2" | ./script.sh
```

Use code with caution.

### 2. Read Everything into a Single Variable

If you want to dump the entire `stdin` stream directly into a single variable at once, use **`cat`** within a command substitution: [link](https://stackoverflow.com/questions/32363887/in-a-bash-function-how-do-i-get-stdin-into-a-variable)

bash

```
# Store all stdin into a variable
my_input=$(cat)

echo "Here is the full text:"
echo "$my_input"
```

Use code with caution.

_(Alternatively, in modern Bash, you can use `my_input=$(</dev/stdin)` for a faster, fork-free method)._ [link](https://dev.to/jeremyckahn/til-reading-stdin-to-a-bash-variable-1kln)

### 3. Read an Interactive Single Line

If you want to prompt a user running the script to type a single piece of info (like a name or choice):

bash

```
echo "Enter your username: "
read -r username
echo "Hello, $username!"
```

Use code with caution.

### 4. Check if Data is Actually Being Piped

If you want your script to check if data is being fed into its `stdin` (via a pipe or file redirect) versus just running empty in the terminal, use the **`[ -t 0 ]`** test: [link](https://stackoverflow.com/questions/2456750/how-to-check-if-stdin-is-from-the-terminal-or-a-pipe-in-a-shell-script)

bash

```
if [ -t 0 ]; then
    echo "No stdin detected. Running interactively..."
else
    echo "Data detected in stdin!"
    my_input=$(cat)
fi
```

Use code with caution.

If you are trying to do something specific with your pipeline, tell me:

- Are you processing **multiline** files or single string inputs?
- Do you need to assign it to **one variable** or parse **arguments**? [link](https://dev.to/jeremyckahn/til-reading-stdin-to-a-bash-variable-1kln)

I can write the exact code wrapper you need.

- [link](https://stackoverflow.com/questions/6980090/how-to-read-from-a-file-or-standard-input-in-bash)\
  How to read from a file or standard input in Bash\
  Aug 8, 2011 — Copy link. Sebastian. Sebastian Over a year ago. where is the "or from file" part in this answer? 2017-08-02T19:13:06.3Z+00:00. 6.\
  Stack Overflow
- [link](https://dev.to/jeremyckahn/til-reading-stdin-to-a-bash-variable-1kln)\
  TIL: Reading stdin to a BASH variable - DEV Community\
  Dec 13, 2020 — TIL: Reading stdin to a BASH variable. #bash #todayilearned #stdin #scripting. Today I wanted to read stdin to a BASH script varia...\
  DEV Community
- [link](https://stackoverflow.com/questions/32363887/in-a-bash-function-how-do-i-get-stdin-into-a-variable)\
  In a bash function, how do I get stdin into a variable\
  Sep 2, 2015 — Here are some ways to get stdin into a variable in a Bash function: \* \*\*Use \`input=$(cat)\`\*\* This captures standard input. However...\
  Stack Overflow

Show all

# shell string processing

<mark><strong><span>Shell string processing can be achieved natively through parameter expansion</span></strong><span> </span>or by piping data into external command-line utilities</mark>. Natively handling operations within the shell is significantly faster because it avoids launching external processes. [link](https://stackoverflow.com/questions/428109/extract-substring-in-bash)

### Native Bash Parameter Expansion

Natively manipulation functions rely on modifying variables using specific syntax inside brackets `${variable}`. Below are the most common operations: [link](https://oneuptime.com/blog/post/2026-01-24-bash-string-manipulation/view)

#### Length & Case Modification

- **String Length**: `${#text}` returns the total character count.
- **Uppercase**: `${text^^}` converts all characters to uppercase.
- **Lowercase**: `${text,,}` converts all characters to lowercase. [link](https://aty.sdsu.edu/bibliog/latex/debian/bash.html)

#### Substring Extraction & Slicing

- **Position-based Slicing**: `${text:offset:length}` extracts text based on zero-indexed position and character count.
- **Strip Front Shortest**: `${text#pattern}` deletes the shortest match from the beginning of the string.
- **Strip Front Longest**: `${text##pattern}` deletes the longest match from the beginning of the string.
- **Strip Back Shortest**: `${text%pattern}` deletes the shortest match from the end of the string.
- **Strip Back Longest**: `${text%%pattern}` deletes the longest match from the end of the string. [link](https://stackoverflow.com/questions/428109/extract-substring-in-bash)

#### Search & Replace

- **Replace First**: `${text/pattern/replacement}` replaces the first match found in the variable.
- **Replace All**: `${text//pattern/replacement}` replaces every occurrence of the pattern.
- **Replace Prefix**: `${text/#pattern/replacement}` matches and replaces only at the absolute start.
- **Replace Suffix**: `${text/%pattern/replacement}` matches and replaces only at the absolute end. [link](https://www.youtube.com/watch?v=x-gQW4s0AZg)

bash

```
# Example Script
filepath="/var/log/nginx/access.log"

echo "${filepath##*/}"       # Returns "access.log" (Simulates basename)
echo "${filepath%/*}"        # Returns "/var/log/nginx" (Simulates dirname)
echo "${filepath//log/data}"  # Returns "/var/data/nginx/access.data"
```

Use code with caution.

***

### External Processing Tools

When strings become highly complex or require multiline parsing, the shell easily chains to dedicated Unix utilities. [link](https://www.linux.com/news/patterns-and-string-processing-shell-scripts/)

- **`cut`**: Best for splitting columns by predictable single-character delimiters.
- **`sed`**: Ideal for stream editing, global regex replacements, and line filtering.
- **`awk`**: Fully fledged programming language built specifically for column processing and text reporting.
- **`tr`**: Useful for basic character translation, deletion, and squashing duplicate spacing. [link](https://stackoverflow.com/questions/11458741/shell-script-and-string-operations)

bash

```
# Splitting comma-separated values using cut
echo "apple,banana,orange" | cut -d',' -f2
# Output: banana

# Regex substitution using sed
echo "User ID: 1042" | sed 's/[0-9]*/XXXX/'
# Output: User ID: XXXX
```

Use code with caution.

***

### Reference Cheat Sheet

| Task              | Pure Bash Syntax  | External Command Alternative |
| ----------------- | ----------------- | ---------------------------- | --------------------------- |
| **Get Length**    | `${#var}`         | `echo -n "$var"              | wc -m`                      |
| **Substring**     | `${var:3:5}`      | `echo "$var"                 | cut -c4-8`                  |
| **To Uppercase**  | `${var^^}`        | `echo "$var"                 | tr '[:lower:]' '[:upper:]'` |
| **Remove Prefix** | `${var##*/}`      | `basename "$var"`            |
| **Find/Replace**  | `${var//foo/bar}` | `echo "$var"                 | sed 's/foo/bar/g'`          |

To proceed, let me know **what specific text transformation task** you are trying to automate or **which shell flavor** (e.g., Bash, Zsh, POSIX `sh`) you need to target.

- [link](https://tldp.org/LDP/abs/html/string-manipulation.html)

10.1. Manipulating Strings\
Manipulating Strings. Bash supports a surprising number of string manipulation operations. Unfortunately, these tools lack a unifi...\
The Linux Documentation Project

- [link](https://stackoverflow.com/questions/428109/extract-substring-in-bash)\
  Extract substring in Bash - Stack Overflow\
  Jan 9, 2009 — You can use Parameter Expansion to do this. If a is constant, the following parameter expansion performs substring extraction: b=$\
  Stack Overflow
- [link](https://aty.sdsu.edu/bibliog/latex/debian/bash.html)\
  Bash string processing\
  Bash String Processing \* Introduction. Over the years, the bash shell has acquired lots of new bells and whistles. Some of these a...\
  San Diego State University

Show all

