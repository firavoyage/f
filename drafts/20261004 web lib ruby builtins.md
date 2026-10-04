all ruby builtin methods

In Ruby, **everything is an object**, meaning there are no truly "global functions". Instead, what developers traditionally call "built-in functions" are actually <mark>instance methods defined in the<span> </span><strong><code dir="ltr">Kernel</code><span> </span>module</strong></mark>. Because `Kernel` is automatically mixed into the `Object` class (the parent of almost all Ruby classes), these methods can be called globally from anywhere without an explicit receiver. [link](https://stackoverflow.com/questions/19151296/how-does-one-know-what-built-in-methods-exist-in-ruby)

Below is a comprehensive list of the core global methods (from `Kernel`) grouped by utility, followed by the most commonly used built-in class methods.

***

### 1. Core Built-In Functions (`Kernel` Module)

These are available everywhere in your Ruby script. [link](https://rubyreferences.github.io/rubyref/builtin.html)

#### Data Output & Debugging

- `puts` – Outputs text to standard output, adding a newline if missing.
- `print` – Outputs text exactly as provided, without adding a newline.
- `p` – Inspects and outputs an object (calls `.inspect`), showing data structures cleanly.
- `printf` – Outputs formatted strings similar to C language formatting.
- `sprintf` / `format` – Returns a formatted string without printing it. [link](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html)

#### Data Input & Type Conversions

- `gets` – Reads a line of user input from the standard input.
- `readline` / `readlines` – Reads a line or all lines from input, throwing an error at EOF.
- `Array(obj)` – Safely forces/converts an object into an `Array`.
- `Float(obj)` – Converts an object into a `Float` number.
- `Integer(obj)` – Converts an object into an `Integer`.
- `String(obj)` – Converts an object into a `String`. [link](https://www.freecodecamp.org/news/ruby-string-methods-explained-length-empty-and-other-built-in-methods/)

#### Flow Control, Blocks, & Execution

- `loop` – Spawns an infinite loop block that handles `StopIteration` cleanly.
- `block_given?` / `iterator?` – Returns `true` if a code block was passed to the current method.
- `proc` / `lambda` – Creates a reusable block of code (`Proc` object).
- `catch` / `throw` – Provides a lightweight mechanism for breaking out of deeply nested code blocks.
- `tap` – Yields the receiver to a block and returns the receiver itself (great for chaining/debugging). [link](https://betterprogramming.pub/4-ruby-methods-you-didnt-know-you-needed-1b223ec1963c)

#### System Administration & Processes

- `cmd` (backticks) / `system` – Runs a command in a subshell.
- `exec` – Replaces the current Ruby process by running a system command.
- `fork` – Duplicates the current Ruby process (not supported natively on Windows).
- `sleep` – Pauses execution for a specified number of seconds.
- `exit` / `exit!` – Terminates the running script immediately.
- `abort` – Terminates the script and prints an error message if an exception is raised.
- `at_exit` – Registers a block of code to run right before the program fully terminates. [link](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html)

#### Error Handling & Introspection

- `raise` / `fail` – Raises a runtime error or a custom exception.
- `binding` – Captures and returns the current variable and method context.
- `caller` – Returns the current execution stack/backtrace as an array of strings.
- `eval` – Evaluates a string containing Ruby code dynamically. [link](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html)

***

### 2. Built-In Methods for Core Classes

Because Ruby is object-oriented, you will spend most of your time calling built-in methods directly on data types. [link](https://essenceofchaos.gitbooks.io/learn-ruby-first/content/methods.html)

| Data Type      | Common Built-In Methods                                                                    |
| -------------- | ------------------------------------------------------------------------------------------ |
| **String**     | `.length`, `.upcase`, `.downcase`, `.strip`, `.gsub`, `.split`, `.include?`, `.chomp`      |
| **Array**      | `.push` (`<<`), `.pop`, `.shift`, `.unshift`, `.join`, `.flatten`, `.uniq`, `.compact`     |
| **Hash**       | `.keys`, `.values`, `.merge`, `.dig`, `.has_key?`, `.transform_values`                     |
| **Numeric**    | `.abs`, `.round`, `.ceil`, `.floor`, `.times`, `.upto`, `.downto`, `.step`                 |
| **Enumerable** | `.each`, `.map`, `.select` (`.filter`), `.reject`, `.reduce` (`.inject`), `.any?`, `.all?` |

### How to inspect methods live in Ruby

If you want to view every single built-in method available on any object at any time, you can ask Ruby directly using **reflection methods** in your IRB interactive console: [link](http://ruby-for-beginners.rubymonstas.org/objects/listing.html)

ruby

```
# List all global built-in methods via Kernel
Kernel.methods.sort

# List all available methods on a String object
"hello".methods.sort

# Find out exactly where a method is defined
method(:puts).source_location
```

Use code with caution.

Are you looking to use a **specific type of method** (like array transformations or string manipulation), or do you want help understanding how a specific method from this list works?

- [link](https://stackoverflow.com/questions/19151296/how-does-one-know-what-built-in-methods-exist-in-ruby)\
  Stack Overflow\
  How does one know what built-in methods exist in ruby?\
  In Ruby, everything is an object. Everything. There are no "global" methods that don't come from some object. In an empty file, ru...
- [link](https://dev.to/mikedavissoftware/beginners-guide-to-ruby-methods-6h7)\
  DEV Community\
  Beginner's Guide to Ruby Methods - DEV Community\
  Ruby Methods: Custom methods target Class Methods (affecting all instances via \`self.\`) or Instance Methods (affecting single inst...
- [link](https://ruby-doc.org/docs/ruby-doc-bundle/Manual/man-1.4/function.html)\
  Ruby-Doc.org\
  Built-in functions - Ruby-Doc.org\
  Built-in functions. Some methods defined in the Kernel module can be called from everywhere, and are to be called like functions. ...

Show all

