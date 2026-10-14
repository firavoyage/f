what do pl designers say on python scoping

In programming language (PL) design circles, Python’s approach to variable scoping is highly idiosyncratic. While Python is widely praised for its high-level readability, PL designers and language theorists often criticize its scoping architecture as <mark>a<span> </span><strong>"wild outlier"</strong><span> </span>or a design footgun</mark> compared to languages like Lua, JavaScript, or Rust. [link](https://www.reddit.com/r/Python/comments/1ajvgli/python%5Fis%5Fweakly%5Fscoped/)

PL designers generally critique and explain Python's scoping mechanics across several core themes:

### 1. Conflation of Declaration and Assignment

In languages with explicit block scoping (like Rust, C, or Java), you must explicitly declare a variable (e.g., using `let`, `var`, or a type designation) before assigning it.

- **The Design Critique:** Python defaults to **implicit variable declaration via assignment**. The interpreter determines a variable's scope statically by looking at where the assignment happens. [link](https://stackoverflow.com/questions/64801735/why-does-writing-to-a-variable-change-its-scope)
- **The Consequence:** Because declaration and assignment are conflated, simply writing to a variable can completely change its intended scope. If you assign a value to a variable name inside a function, Python automatically assumes it is a local variable, silently hiding (shadowing) an outer variable of the same name. This introduces bugs where developers accidentally shadow data or trigger an `UnboundLocalError`. [link](https://www.pythonlikeyoumeanit.com/Module2%5FEssentialsOfPython/Scope.html)

### 2. The Absence of Block Scope

For developers transitioning from block-structured languages, Python’s behavior within control-flow statements is a frequent "principle of least surprise" violation. [link](https://www.reddit.com/r/Python/comments/1ajvgli/python%5Fis%5Fweakly%5Fscoped/)

- **The Design Critique:** In Python, loops (`for`, `while`) and conditionals (`if`, `else`) **do not open a new lexical scope**.
- **The Consequence:** Variables initialized inside a `for` loop leak or "hoist" into the surrounding function scope. A loop counter variable remains accessible and mutable even after the loop concludes, which PL designers consider messy as it increases the risk of naming collisions and state mutation. [link](https://binhbar.com/posts/2022/11/unusual-effects-of-python-scoping/)

### 3. The Need for "Escape Hatches" (`global` and `nonlocal`)

Because Python's scoping boundaries are exclusively drawn around functions, classes, and modules, the language forces specific design workarounds when dealing with mutations. [link](https://realpython.com/python-scope-legb-rule/)

- **The Design Critique:** In standard lexical scoping, an inner function can easily read and write to an outer function's variable. In Python, an inner scope can _read_ an outer scope's variables, but it **cannot mutate them** by default. [link](https://www.quora.com/What-are-the-biggest-faults-with-Python-as-a-programming-language)
- **The Consequence:** To circumvent this limitation, Python introduces the `global` and `nonlocal` modifiers. PL critics view these keywords as syntactical patches necessary only because Python lacked structured variable declaration markers from the beginning. [link](https://discuss.python.org/t/simplistic-block-scope-a-syntactic-sugar/82952)

### 4. Late Binding in Closures (The Lambda Trap)

Another behavior frequently scrutinized by PL theorists is **late binding** (also known as lexical closure capture behavior).

- **The Design Critique:** Python resolves variable names in closures when the inner function is _called_, not when it is _defined_.
- **The Consequence:** If you generate a list of lambdas inside a loop (e.g., `[lambda: i for i in range(3)]`), all of those functions will look up `i` at invocation time and return the final value of the loop (`2`). Forcing developers to pass variables as default arguments (e.g., `lambda i=i: i`) to freeze the value is widely viewed as an unintuitive quirk of the language's execution model.

### 5. Why Python Was Designed This Way

Despite the academic and architectural criticism, Python's designers (including creator Guido van Rossum) made these choices to uphold alternative principles:

- **"Explicit is Better Than Implicit":** By forcing developers to write `global` or `nonlocal`, the code explicitly self-documents when a function is intentionally causing side effects in an outer namespace.
- **Syntax Minimalism:** Avoiding keywords like `let` or `var` keeps Python’s syntax lean and accessible for beginners and scientists who treat the language as an interactive scripting tool rather than a complex systems language. [link](https://www.youtube.com/watch?v=KDnP%5Fzbp-9Q\&vl=en-US\&t=8)

Would you like to see a **code comparison** illustrating exactly how Python leaks loop variables compared to block-scoped languages, or would you prefer a look at the **LEGB resolution order** in detail?

- [link](https://realpython.com/python-scope-legb-rule/)\
  Real Python\
  Python Scope and the LEGB Rule: Resolving Names in Your Code – Real Python\
  Comprehensions and \`except\` blocks have local variables; only functions, classes, and modules create new scopes.
- [link](https://www.youtube.com/watch?v=tGaSzFexiDg)\
  YouTube·Real Python\
  Introduction to Scope in Python: Python Basics\
  Nov 3, 2022 — Scope in Python determines where a name (like a variable) is visible in a program. Python uses the location of a name assignment t...\
  11:17
- [link](https://www.pythonlikeyoumeanit.com/Module2%5FEssentialsOfPython/Scope.html)\
  Python Like You Mean It\
  Scope — Python Like You Mean It\
  Variables defined in the main file are accessible throughout the file and inside functions. Python gives precedence to the variabl...

Show all

