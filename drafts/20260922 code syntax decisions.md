# how to design the syntax of a programming language

Designing the syntax of a programming language is <mark>the art of deciding<span> </span><strong>what your code looks like</strong><span> </span>and how humans will interact with it</mark>. While syntax is just the wrapper for the underlying logic (semantics), a well-designed syntax makes a language readable, expressive, and easy to parse. [link](https://medium.com/codex/how-to-design-your-own-programming-language-sea-0-d68e240b6155)

***

### 1. Define the High-Level Aesthetic & Philosophy

Before writing rules, you need to establish a consistent theme. Most languages fall into a few primary syntactic camps:

- **Algol/C-Style:** Uses curly braces `{}` for code blocks and semicolons `;` for statement terminators (e.g., C++, Java, JavaScript).
- **Off-side Rule (Indentation-based):** Uses whitespaces and newlines to define structure (e.g., Python, Nim).
- **Expression-heavy / Functional:** Relies heavily on parentheses and prefix notation (e.g., Lisp S-expressions).
- **Minimalist / Stack-based:** Postfix notation with virtually no punctuation (e.g., Forth, Factor). [link](https://www.reddit.com/r/ProgrammingLanguages/comments/tt7kq9/what%5Fsyntax%5Fdesign%5Fchoices%5Fdo%5Fyou%5Flove%5Fand%5Fwhat/)

**Action Item:** Write mock snippets of your dream language on a blank page. Sketch how a variable is declared, how a loop runs, and how a function is called. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/17g6ny1/syntax%5Fdesign%5Fchecklist/)

***

### 2. Map Out the Core Syntactic Building Blocks

Create a checklist of the components your grammar must support: [link](https://www.reddit.com/r/ProgrammingLanguages/comments/17g6ny1/syntax%5Fdesign%5Fchecklist/)

| Syntactic Element | Key Considerations & Choices                        | Examples                                                       |
| ----------------- | --------------------------------------------------- | -------------------------------------------------------------- |
| **Keywords**      | Reserved words for core logic. Keep them punchy.    | `if`, `else`, `fn`, `let`, `while`                             |
| **Identifiers**   | Rules for naming variables/functions.               | Case-sensitive? Allowed symbols? (`_`, `$`)                    |
| **Literals**      | How basic data types are written raw in text.       | Strings (`"hello"`), Numbers (`42`, `3.14`), Booleans (`true`) |
| **Operators**     | Symbols for math or logic. Define their precedence. | `+`, `-`, `*`, `/`, `==`, `&&`                                 |
| **Delimiters**    | Structural punctuation.                             | Parentheses `()`, Brackets `[]`, Braces `{}`                   |
| **Comments**      | Ignored by the engine but crucial for humans.       | Inline (`//` or `#`) vs. Block (`/* ... */`)                   |

***

### 3. Formalize the Grammar using EBNF

Computers cannot parse vague instructions. You must translate your visual sketches into formal rules. The industry standard tool for this is **Extended Backus-Naur Form (EBNF)**. EBNF allows you to break your language down mathematically into "production rules". [link](https://demo.gae.org/gae-news/designing-a-programming-language-a-step-by-step-guide-pdp4xd)

For example, a simple math expression grammar looks like this in EBNF: [link](https://demo.gae.org/gae-news/designing-a-programming-language-a-step-by-step-guide-pdp4xd)

ebnf

```
Expression ::= Term ( ( "+" | "-" ) Term )*
Term       ::= Factor ( ( "*" | "/" ) Factor )*
Factor     ::= NUMBER | "(" Expression ")"
```

Use code with caution.

_Writing your rules this way inherently decides operator precedence (e.g., multiplication binds tighter than addition)._ [link](https://demo.gae.org/gae-news/designing-a-programming-language-a-step-by-step-guide-pdp4xd)

***

### 4. Separate Lexical Syntax from Phrase Syntax

When designing rules, split your logic into two conceptual layers: [link](https://cs.lmu.edu/~ray/notes/syntax/)

- **Lexical Grammar (The Lexer / Tokenizer):** Defines how individual characters group into discrete "words" called tokens. For example, the characters `w`, `h`, `i`, `l`, `e` become a single `WHILE` token. This layer also determines if whitespace is skipped or preserved.
- **Phrase Grammar (The Parser):** Defines how those tokens stack together to form valid mathematical logic, statements, and complete files. [link](https://langdev.stackexchange.com/questions/4641/how-can-i-design-a-simple-programming-language-from-scratch)

***

### 5. Practical Design Tips & Pitfalls to Avoid

- **Avoid Ambiguity:** Ensure that a sequence of tokens can only be parsed in _one_ exact way. A classic trap is the "dangling else" problem (deciding which `if` an `else` belongs to when nesting without explicit bounds). [link](https://towardsdatascience.com/a-step-by-step-guide-to-building-a-programming-language-5f5b84246991/)
- **Syntactic Sugar vs. Salt:** Add "sugar" (nicer ways to write complex things) to help developers, but minimize "salt" (unnecessary hoops like forcing a semicolon _and_ a closing keyword). [link](https://medium.com/codex/how-to-design-your-own-programming-language-sea-0-d68e240b6155)
- **Think About the Tooling:** Can an IDE easily highlight your syntax? If your syntax requires the parser to look too far ahead to figure out what a line means, it will drastically slow down compilation and editor tooling. [link](https://gist.github.com/hawkw/9213690)

To give you more tailored advice on building your grammar, tell me:

- What is the **primary goal or paradigm** of your language (e.g., functional, object-oriented, scripting)?

- Do you prefer a **clean, minimalistic look** (like Python/Go) or a **highly structured look** (like Rust/C++)?

- Do you plan to build the compiler pipeline **by hand** or use a **parser generator** like ANTLR or Bison?

- [link](https://medium.com/codex/how-to-design-your-own-programming-language-sea-0-d68e240b6155)\
  Medium·David MacDonald\
  How to Design Your Own Programming Language | Sea #0 - Medium\
  Jul 24, 2021 — That is my dream language. However, I thought that would be too large a task to tackle as my first language. So, I began to think ...

- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/tt7kq9/what%5Fsyntax%5Fdesign%5Fchoices%5Fdo%5Fyou%5Flove%5Fand%5Fwhat/)\
  Reddit·r/ProgrammingLanguages\
  What syntax design choices do you love, and what do you hate?\
  Mar 31, 2022 — For example: \* Mandatory prefixing of variables a la PHP's $ \* Excessive use of Java/Python-style annotations. \* The extreme exces...

- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/aab27a/minimal%5Fprogramming%5Flanguage%5Fsyntax/)\
  Reddit·r/ProgrammingLanguages\
  Minimal programming language syntax? : r/ProgrammingLanguages\
  Dec 28, 2018 — BTW: I'm ignoring parsing for long. I will see at my "syntax" just to remember what implement. I add a internal DSL and operate on...

Show all

# all decisions in programming language design

Designing a programming language requires balancing hardware constraints, human psychology, and computer science theory. Language designers must answer fundamental questions across several core pillars, adjusting trade-offs to determine the language's identity, target audience, and performance characteristics. [link](https://www.youtube.com/watch?v=-c-MY57rYuQ)

***

### 1. Paradigm & Core Philosophy

The highest-level decision defines **how the programmer thinks** about solving problems. [link](https://daedtech.com/decision-points-in-programming/)

- **Programming Paradigm:** Will the language be **Imperative** (C, Go), **Object-Oriented** (Java, C++), **Functional** (Haskell, OCaml), or **Logic-based** (Prolog)? Alternatively, will it be a multi-paradigm language like Rust or Python? [link](https://colinsblog.net/2024-06-17-little-big-ideas/)
- **Purity:** If functional, is it pure (no side effects, like Haskell) or impure (allowing side effects, like Clojure)? If object-oriented, is everything strictly an object (Smalltalk, Ruby) or are there primitive types (Java)? [link](https://www.ni.com/en/support/documentation/supplemental/06/labview-object-oriented-programming--the-decisions-behind-the-de.html)
- **Primary Optimization Target:** Is the language designed for **maximum execution speed** (C/C++), **developer productivity** (Python), **memory safety** (Rust), or **mass concurrency** (Go, Erlang)? [link](https://www.reddit.com/r/ProgrammingLanguages/comments/a4z68q/what%5Fprinciples%5Fhave%5Fyou%5Fadopted%5Ffor%5Fyour/)

### 2. The Type System

The type system dictates **how data is categorized** and validated by the language. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/uhtxqi/worst%5Fdesign%5Fdecisions%5Fyouve%5Fever%5Fseen/)

- **Static vs. Dynamic Typing:** Are types checked at compile-time (Java, C++) or runtime (Python, JavaScript)?
- **Strong vs. Weak Typing:** Does the language prevent implicit type conversions (Python prevents `4 + "4"`) or allow them freely (JavaScript allows `"5" - 3` to equal `2`)?
- **Type Inference:** Must the programmer explicitly write out every type annotation, or can the compiler deduce them automatically (like Swift, Kotlin, or Rust's local variables)?
- **Advanced Features:** Will it support **Generics / Parametric Polymorphism**? Will it feature structural typing (Go), nominal typing (Java), or duck typing (Python)? [link](https://www.reddit.com/r/ProgrammingLanguages/comments/tt7kq9/what%5Fsyntax%5Fdesign%5Fchoices%5Fdo%5Fyou%5Flove%5Fand%5Fwhat/)

### 3. Syntax & Style (Surface Design)

Syntax determines the **visual look** and readable feel of the source code. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/tt7kq9/what%5Fsyntax%5Fdesign%5Fchoices%5Fdo%5Fyou%5Flove%5Fand%5Fwhat/)

- **Visual Anchors:** Will blocks be scoped by **curly braces `{}`** (C-style), **indentation whitespace** (Python), or **keywords** like `begin/end` (Ruby, Pascal)? [link](https://www.geeksforgeeks.org/c/decision-making-in-c/)
- **Expressions vs. Statements:** Is everything an expression that returns a value (like Rust, where `if` yields a value), or are there distinct computational statements that return nothing (like C)? [link](https://en.wikipedia.org/wiki/Conditional%5F%28computer%5Fprogramming%29)
- **Verbosity:** Will the syntax be terse and symbolic (APL, Perl) or explicit and descriptive (COBOL, SQL)? Will it require semicolons `;` as statement terminators? [link](https://www.reddit.com/r/ProgrammingLanguages/comments/tt7kq9/what%5Fsyntax%5Fdesign%5Fchoices%5Fdo%5Fyou%5Flove%5Fand%5Fwhat/)

### 4. Memory Management

How the language handles the allocation and freeing of **hardware memory** strongly impacts performance and reliability. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/a4z68q/what%5Fprinciples%5Fhave%5Fyou%5Fadopted%5Ffor%5Fyour/)

- **Manual Management:** Does the developer allocate and free memory explicitly (C's `malloc` and `free`), presenting high performance but risks like memory leaks?
- **Garbage Collection (GC):** Does a runtime system periodically track and sweep away unused memory automatically (Go, Java, Python), trading a minor performance cost for developer safety?
- **Compile-time Ownership:** Does the language enforce strict ownership and lifetime rules at compile time to achieve memory safety without a garbage collector (Rust)?
- **Reference Counting:** Are objects tracked via real-time reference counts, deleting themselves immediately when the count hits zero (Swift, RC pointers)? [link](https://colinsblog.net/2024-06-17-little-big-ideas/)

### 5. Control Flow & Execution Mechanics

Control flow dictates how the program transitions between lines of code. [link](https://www.geeksforgeeks.org/computer-science-fundamentals/control-flow-statements-in-programming/)

- **Conditional Branching:** Standard decisions use structures like `if/else`, `switch/match`, or ternary operators. Designers must choose whether to support advanced **pattern matching** over complex structures.
- **Iteration:** Will loops rely on raw indexing (`for i=0; i<10`), collections iterators (`foreach`), or will the language lean heavily on recursion (Haskell)?
- **Error Handling:** Should errors trigger **Exceptions** that bubble up the stack (Java, Python), or should errors be treated as **ordinary return values** (Go, Rust)?
- **Concurrency Model:** How does the language handle multiple operations simultaneously? Options include OS threads, green threads / coroutines (Go's goroutines), or an asynchronous event loop (JavaScript). [link](https://colinsblog.net/2024-06-17-little-big-ideas/)

### 6. Compilation & Runtime Target

This defines how the code written by humans interacts with physical microchips. [link](https://www.youtube.com/watch?v=-c-MY57rYuQ)

- **Execution Architecture:** Is the code directly compiled to **native machine code** (C, Rust), run line-by-line via an **Interpreter** (Python, Ruby), or compiled to bytecode targeted at a **Virtual Machine** (Java's JVM, C#'s CLR)?
- **Extensibility & Metaprogramming:** Does the language allow code to write code? Options range from textual macros (C preprocessor) to syntactic macros (Rust) and runtime reflection/introspection. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/c3wb01/programming%5Flanguage%5Fphilosophies/)

***

Are you asking out of curiosity about **programming history**, or are you currently planning to **design your own programming language**? If the latter, let me know your **primary goal** (e.g., building a fast systems language, a web scripting language, or an educational tool) so we can map out the ideal decisions for it.

- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/uhtxqi/worst%5Fdesign%5Fdecisions%5Fyouve%5Fever%5Fseen/)\
  Reddit\
  Worst Design Decisions You've Ever Seen - Reddit\
  May 4, 2022 — Since the language was designed for running from source like a scripting language, it didn't do any real type inference. That mean...
- [link](https://colinsblog.net/2024-06-17-little-big-ideas/)\
  colinsblog.net\
  Little 'Big Ideas' in Programming Language Design\
  Jun 17, 2024 — It's “big idea” was to make the simplest language that was practical to develop in. Even for the time it eschewed nearly all moder...
- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/a4z68q/what%5Fprinciples%5Fhave%5Fyou%5Fadopted%5Ffor%5Fyour/)\
  Reddit·r/ProgrammingLanguages\
  What principles have you adopted for your programming language's ...\
  Dec 10, 2018 — Things to improve: \* Use a modern C++ API that's both simple to use and nearly impossible to misuse. \* Rid the language of unneces...

Show all


# all decisions in programming language syntax design

7:46 PM

Designing the syntax of a programming language is a complex architectural process. It requires making critical choices about how software is structured, read, and parsed. Language designers must balance human ergonomics against compiler complexity. [link](https://afeinman.medium.com/design-principles-2a-1874c14975ab)

The fundamental **syntax design decisions** are categorized into structural, operational, and aesthetic dimensions below:

***

### 1. Structural Layout & Code Blocks

How a language groups instructions into logical blocks defines its entire visual signature.

- **Block Delimiters:** Designers must choose how to wrap blocks of code.
  - _Braces:_ The Algol/C family uses `{}` (e.g., C++, Java, Rust).
  - _Keywords:_ Ruby and Lua use `do ... end` or `then ... end`.
  - _Indentation:_ Python and Nim use meaningful whitespace (off-side rule) to eliminate visual noise. [link](https://www.youtube.com/watch?v=8vLrgs1lJwo\&t=12)
- **Statement Termination:** Deciding how a line or instruction ends.
  - Explicit semicolons `;` (C, C++, Java).
  - Newlines as implicit terminators, with optional semicolons (JavaScript, Go, Swift, Kotlin). [link](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)
- **Comments:** Deciding on the syntax for human notes, which must not conflict with operators. Common pairs include `//` and `/* */`, `#`, or `--`.

### 2. Variables & Type Annotations

How variables are declared dictates whether a language feels lightweight or rigidly structured.

- **Declaration Keywords:** Explicit introducers (`let`, `var`, `const`, `auto`) vs. implicit assignment (Python simply uses `x = 1`).
- **Type Placement:** For statically typed languages, the choice between:
  - _Prefix notation:_ `int count = 5;` (C/Java style).
  - _Postfix notation:_ `count: int = 5;` (Rust, Go, TypeScript style).
- **Mutability Signaling:** Baking mutability directly into the variable syntax (e.g., `let` vs `let mut` in Rust, or `val` vs `var` in Kotlin).

### 3. Function & Procedure Anatomy

Functions are the primary building blocks of logic, meaning their syntax is used heavily.

- **Signaling Functions:** Keywords like `func`, `fn`, `def`, `function`, or declaring them purely by return type (C-style).
- **Parameter List Syntax:** Position-based tuple wrapping `(a, b)` vs. smalltalk-style keyword arguments `(width: 10, height: 20)`.
- **Arrow Syntax vs. Keywords:** Using standard blocks vs. lightweight inline notations (`=>` or `->`) for lambdas and return type mappings.

### 4. Expression & Operator Notation

Mathematical and logical processing requires rules to determine parsing precedence.

- **Fixity:**
  - _Infix:_ `x + y` (Intuitive, standard math notation).
  - _Prefix / Polish:_ `(+ x y)` (Simplifies parser design; common in Lisp/Scheme).
  - _Postfix:_ `x y +` (Stack-oriented languages like Forth). [link](https://jcsites.juniata.edu/faculty/rhodes/lt/plcriteria.htm)
- **Keyword vs. Symbolic Operators:** Using words like `and`, `or`, `not` (Python, SQL) vs. symbols like `&&`, `||`, `!` (C, Java). [link](https://www.youtube.com/watch?v=8vLrgs1lJwo\&t=12)

### 5. Control Flow Structures

Deciding how loops and branches read determines the linguistic "flow" of the language.

- **Condition Parentheses:** Forcing parentheses around if-conditions like `if (x > y)` vs. omitting them like `if x > y`.
- **Multi-way Branching:** Standard sequential blocks (`if / else if / else`) vs. explicit structural mechanisms like `switch/case` or pattern-matching `match` blocks. [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Conditionals)

### 6. Memory & Safety Semantics

Advanced modern languages bake safety guarantees natively into their syntax layout.

- **Nullability Signifiers:** Explicit syntax to handle the absence of a value, such as appending a `?` to optional types (`String?` in Swift/Kotlin).
- **Pointer Mechanics:** Explicit operators for address references (`*`, `&` in C/C++) vs. abstracting references entirely behind uniform object syntax (Java, Python).

***

If you are designing your own programming language or evaluating one, let me know:

- What **programming paradigm** are you targeting? (e.g., Functional, Object-Oriented, Imperative)
- Is your priority **human readability** or **fast compiler parsing**?

I can provide specific pros, cons, and historical case studies for any of these decisions.

- [link](https://www.gingerbill.org/article/2026/02/19/choosing-a-language-based-on-syntax/)\
  gingerBill\
  Choosing a Language Based on its Syntax? - gingerBill\
  However making semicolons optional in a language can come with a few compromises. One option is to design the grammar such that th...
- [link](https://www.youtube.com/watch?v=8vLrgs1lJwo\&t=12)\
  YouTube·Christian Hur

3.0 - Decision structure and flow control statements\
three is um a a complete chapter covering the decisions. so the decision in this case is that diamond shape we have been looking a...\
54m

- [link](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Scripting/Conditionals)\
  MDN Web Docs\
  Making decisions in your code — conditionals - MDN Web Docs\
  The keyword if followed by some parentheses. A condition to test, placed inside the parentheses (typically "is this value bigger t...

Show all

# compare braces keywords and indentation in pl design

7:46 PM

In programming language (PL) design, controlling block scope and syntax structure is one of the most foundational choices an architect makes. The three primary paradigms for defining code blocks are <mark><strong>curly braces (<code dir="ltr">{}</code>), explicit keywords (<code dir="ltr">begin</code>/<code dir="ltr">end</code>), and meaningful indentation (the off-side rule)</strong></mark>. [link](https://xigoi.neocities.org/language-criticism/braces-semicolons)

Here is a direct comparison of how these three approaches shape language parsing, developer productivity, and overall code design.

### Structural Comparison

| Feature                     | Curly Braces `{}`                                                               | Keywords (`begin` / `end`)                                              | Meaningful Indentation                                                                 |
| --------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Parsing Complexity**      | Low. Easy for tokenizers to count and match brackets.                           | Low. Relies on straightforward reserved word parsing.                   | High. Requires tracking layout state via stack-based `INDENT` and `DEDENT` tokens.     |
| **Code Layout Flexibility** | Extremely High. White space is entirely ignored; code can sit on a single line. | High. White space is mostly ignored, allowing flexible spacing layouts. | Low. Strict spatial structure determines the actual logic.                             |
| **Visual Clutter**          | Moderate. Adds extra noise but acts as a clear visual punctuation mark.         | High. Verbose text tags can obscure core logic in dense programs.       | Minimal. Maximizes vertical code compactness and strips syntax down to its essentials. |
| **Typical Languages**       | C, C++, Java, Rust, JavaScript                                                  | Pascal, Ruby, Lua, Ada, Algol                                           | Python, Haskell, F#, Nim                                                               |

***

### Key Design Trade-Offs

#### 1. Curly Braces `{}`

Derived heavily from BCPL and B to save typing time, braces are the dominant choice in modern systems-level and application programming. [link](https://www.reddit.com/r/learnpython/comments/18hi757/why%5Findentation%5Finstead%5Fof%5Fbrackets/)

- **Pros:** Highly resilient to copy-pasting across different platforms, editors, or version control tools. They play nice with automatic formatters like Prettier or `gofmt`. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/uo0nq7/end%5Fkeywords%5Fvs%5Fpythonstyle%5Fblocks%5Ffor%5Fbeginners/)
- **Cons:** They frequently allow developers to write mismatched human layouts, where the physical indentation contradicts the actual block boundaries evaluated by the compiler. [link](https://www.quora.com/What-are-the-downsides-to-whitespace-indentation-rather-than-requiring-curly-braces)

#### 2. Keywords (`begin` / `end`)

Popularized by the Algol and Pascal families, this style replaces punctuation marks with explicit English words to act as delimiters. [link](https://langdev.stackexchange.com/questions/3252/studies-on-learnability-of-braces-vs-indentation-for-code-blocks-for-beginners)

- **Pros:** Highly readable for beginners or in domain-specific scripting contexts because it mimics natural human sentences.
- **Cons:** Highly verbose. Repeatedly nesting control clauses results in a "waterfall of ends" that inflates lines of code and reduces the density of actual functional programming statements on a screen. [link](https://www.reddit.com/r/learnpython/comments/18hi757/why%5Findentation%5Finstead%5Fof%5Fbrackets/)

#### 3. Meaningful Indentation

Often called the **off-side rule**, this paradigm treats invisible whitespace as a first-class citizen. [Guido van Rossum popularized it in Python](https://www.youtube.com/watch?v=GQf25%5F9NOts) because developers in braced languages naturally indent their code for readability anyway—so the language design simply enforces it semantically. [link](https://www.quora.com/Why-does-Python-use-indentation-for-blocks-instead-of-braces-like-most-other-programming-languages-do)

- **Pros:** Forces universal styling across a language ecosystem. It eliminates structural text noise and completely aligns what the human reads visually with what the interpreter executes logically. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/q5mt62/thoughts%5Fon%5Fdeliminating%5Fstatementsblocks%5Fof%5Fcode/)
- **Cons:** It introduces subtle pitfalls during git merges or when copying code snippets, where accidental spacing modifications completely alter program execution without triggering a visible syntax mismatch. It also creates a strict dependency on strong IDE configurations to handle tabs vs. spaces consistently. [link](https://contributors.scala-lang.org/t/on-braces-and-indentation-based-syntax/5716)

If you are designing your own programming language or evaluating syntax, let me know:

- Will your language focus on **readability for beginners** or **flexibility for advanced developers**?
- Are you leaning toward a **compiled language** or an **interpreted/scripting language**?

I can provide syntax examples or compiler tokenizing strategies tailored to your exact architectural goals.

- [link](https://langdev.stackexchange.com/questions/3252/studies-on-learnability-of-braces-vs-indentation-for-code-blocks-for-beginners)\
  Stack Exchange\
  Studies on learnability of braces vs. indentation for code ...\
  These studies looked at Pascal (keyword blocks, but all begin - end ) programs with different indentation levels. The findings wer...
- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1eb6rlz/a%5Fprogramming%5Flanguage%5Fthat%5Fsupports%5Fboth%5Findent/)\
  Reddit\
  A programming language that supports both indent based and/or braces/keywords for defining scope and blocks\
  Some programming languages support both indentation and braces/keywords for defining scope and blocks: \* \*\*Inform 7\*\* Supports pyt...
- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/uo0nq7/end%5Fkeywords%5Fvs%5Fpythonstyle%5Fblocks%5Ffor%5Fbeginners/)\
  Reddit\
  "end" keywords v.s. Python-style blocks for beginners.\
  Comments Section complyue • 4y ago Manual indentation (i.e. Python style) is definitely going out-dated, after an uncompromising c...

Show all

# 


