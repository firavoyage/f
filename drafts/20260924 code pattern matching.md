# compare pattern matching paradigms in pl design

September 22, 2026

In programming language (PL) design, **pattern matching** has evolved from basic text manipulation to a core type-system mechanism. Different programming paradigms treat pattern matching differently, drastically altering how data is structured, destructured, and validated. [link](https://journal.stuffwithstuff.com/2011/01/16/pattern-matching-in-a-dynamic-oop-language/)

The three primary pattern matching paradigms in PL design are **Functional / Structural Destructuring**, **Logical Unification**, and **Imperative / Object-Oriented Extensible Matching**. [link](https://en.wikipedia.org/wiki/Pattern%5Fmatching)

***

### Paradigm Comparison Overview

| Paradigm Feature   | Functional (Structural)                                      | Logical (Unification)                             | Imperative / OOP (Extensible)                         |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------- | ----------------------------------------------------- |
| **Data Flow**      | **One-way** (reads data, binds local variables)              | **Two-way** (binds variables _or_ generates data) | **One-way** (type checking and property extraction)   |
| **Core Mechanism** | Structural destructuring against Algebraic Data Types (ADTs) | Bidirectional equations & backtracking            | Type patterns, active patterns, and extractor methods |
| **Safety**         | **Compile-time exhaustiveness** checking                     | Runtime resolution / proof search                 | Mix of static checking and runtime guards             |
| **Main Advantage** | High type safety, eliminates null/empty bugs                 | Extreme flexibility, declarative relational logic | Integrates encapsulation with open data analysis      |
| **Key Exemplars**  | Haskell, Rust, OCaml                                         | Prolog, Core.logic                                | Scala, C#, Modern Java                                |

***

### 1. Functional Paradigm: Structural Destructuring

In functional programming (FP), pattern matching is intrinsically tied to **Algebraic Data Types (ADTs)** (like Sum and Product types). Rather than just evaluating a condition, it unwraps data structures to expose their inner fields. [link](https://inria.hal.science/hal-03684334/document)

- **Directionality:** Strictly **one-way**. The value exists, and the pattern extracts information out of it. [link](https://paths.grasp.study/modules/82a364d7-cbff-4631-9b0f-cf1a102882c4/lessons/6acb1901-2a51-4b05-b50b-2b958c85f14f)
- **Exhaustiveness Checking:** The compiler validates that every possible shape of an ADT is handled. Missing a case triggers a compile-time error, dramatically increasing software reliability. [link](https://www.youtube.com/shorts/LZXLQv8bf4g)
- **Compilation Strategy:** Compiled into highly optimized **decision trees** at the byte-code or machine-code level, mapping memory layouts straight to execution branches. [link](https://inria.hal.science/hal-03684334/document)

rust

```
// Example in Rust
enum WebEvent {
    PageLoad,
    KeyPress(char),
}

match event {
    WebEvent::PageLoad => println!("Loaded"),
    WebEvent::KeyPress(c) => println!("Pressed {}", c), // Binds 'c'
}
```

Use code with caution.

### 2. Logic Paradigm: Unification

Prolog and its descendants treat pattern matching as **unification**, which is a quantum leap beyond simple text or type checks. Unification attempts to make two terms structurally identical by substituting values for free variables. [link](https://en.wikipedia.org/wiki/Pattern%5Fmatching)

- **Directionality:** **Bidirectional (Two-way)**. If a variable is passed, the engine binds data to it. If a literal value is passed, it acts as a filter. [link](https://dataladder.com/guide-to-pattern-matching-what-it-means-and-how-to-do-it/)
- **Relational execution:** A single function (or relation) can be used to decompose a structure _or_ construct one, depending on which arguments are instantiated at runtime.
- **Backtracking:** If a sub-pattern fails midway through an operation, the engine unwinds its state and tries the next logical branch. [link](https://www.youtube.com/watch?v=AQJkjQh76pE)

prolog

```
% Example in Prolog
% Can check if a parent relationship exists, OR find all children of 'bob'
parent(bob, charlie).
?- parent(bob, X).  % X binds to charlie
```

Use code with caution.

### 3. Imperative / Object-Oriented Paradigm: Extensible Matching

Historically, OOP relied on the Visitor Design Pattern to achieve double-dispatch and structural introspection. Modern multi-paradigm OOP languages have integrated native pattern matching, bending it to respect **encapsulation**. [link](https://blog.ploeh.dk/2012/05/25/Designpatternsacrossparadigms/)

- **Extensible Extractors:** OOP languages cannot always expose raw structural data because doing so breaks object encapsulation. Therefore, PL designers use **Extractors** (e.g., `unapply` in Scala or active patterns in F#) allowing objects to dictate _how_ they are destructured.
- **Type & Record Patterns:** Focuses heavily on safe downcasting (e.g., checking if an interface instance is a specific concrete class and binding it immediately).
- **Open vs. Closed Systems:** While functional matching expects a closed set of variants (ADTs), OOP pattern matching often coexists with open class hierarchies, using runtime type checks and guards to supplement the compiler. [link](https://medium.com/digitalfrontiers/a-case-for-pattern-matching-b43a5c9796b8)

csharp

```
// Example in C#
if (shape is Circle c) {
    Console.WriteLine($"Radius is {c.Radius}"); // Type pattern + binding
}
```

Use code with caution.

Would you like to explore the **compilation strategies** (like Maranget’s decision trees) used to make functional pattern matching fast, or look at how a specific language like **Python or Scala** bridges the gap between OOP and FP paradigms?

- [link](https://en.wikipedia.org/wiki/Pattern%5Fmatching)\
  Wikipedia\
  Pattern matching\
  History See also: Regular expression § History Early programming languages with pattern matching constructs include COMIT (1957), ...
- [link](https://paths.grasp.study/modules/82a364d7-cbff-4631-9b0f-cf1a102882c4/lessons/6acb1901-2a51-4b05-b50b-2b958c85f14f)\
  paths.grasp.study\
  Prolog's Legacy: Pattern Matching and Unification in Modern ...\
  Key Takeaways: \* Logic Programming (Prolog): A declarative paradigm where programs consist of facts and rules. Queries are answere...
- [link](https://journal.stuffwithstuff.com/2011/01/16/pattern-matching-in-a-dynamic-oop-language/)\
  stuffwithstuff\
  Pattern Matching in a Dynamic OOP Language - Bob Nystrom\
  A variable pattern has a name and an optional type annotation. The name can be \_ if you don't care to bind a variable. Here are so...

Show all

# compare haskell and ocaml

**Haskell and OCaml** are both highly respected, statically typed functional programming languages stemming from academic roots, but they prioritize completely different software engineering philosophies. <mark><strong>Haskell focuses on purity and mathematical elegance</strong>, whereas<span> </span><strong>OCaml emphasizes predictability and industrial pragmatism</strong></mark>. [link](https://markkarpov.com/post/haskell-vs-ocaml.html)

Here is a direct comparison of the two languages.

### Core Overview

| Feature                 | Haskell                                        | OCaml                                              |
| ----------------------- | ---------------------------------------------- | -------------------------------------------------- |
| **Evaluation Strategy** | Lazy (deferred until needed)                   | Strict / Eager (evaluated immediately)             |
| **Purity**              | Pure (side-effects strictly isolated via `IO`) | Impure (allows mutable state and raw side-effects) |
| **Polymorphism**        | Type Classes (ad-hoc polymorphism)             | Functors & Parameterized Modules                   |
| **Compilation Speed**   | Slower (complex optimizations)                 | Lightning fast                                     |
| **Concurrency**         | Highly advanced (Green threads, STM)           | Multicore support (via OCaml 5)                    |

***

### Key Technical Differences

#### 1. Evaluation & Side Effects

- **Haskell is pure and lazy by default**. Functions cannot modify global state or perform I/O unless explicitly wrapped in a Monad (like the `IO` type). Laziness allows for elegant abstractions like infinite data structures, but it makes memory usage and space leaks harder to debug. [link](https://www.reddit.com/r/haskell/comments/18sq4gp/8%5Fmonths%5Fof%5Focaml%5Fafter%5F8%5Fyears%5Fof%5Fhaskell%5Fin/)
- **OCaml is strict and impure**. It evaluates expressions immediately, making performance and memory consumption highly predictable. While it encourages functional programming, you can seamlessly use imperative features like `for` loops, mutable references, and arrays whenever a problem demands it. [link](https://news.ycombinator.com/item?id=19292263)

#### 2. Type System & Code Abstraction

- **Haskell utilizes Type Classes**. This creates a "common vocabulary" across libraries (e.g., if something implements `Monad` or `Functor`, you immediately know how to use it). It has an incredibly advanced type system with features like Higher-Kinded Types. [link](https://discuss.ocaml.org/t/my-thoughts-on-ocaml-vs-haskell-rust-in-2023/12027)
- **OCaml utilizes a powerful Module System**. Instead of type classes, OCaml uses parameterized modules (called Functors) to abstract code. OCaml also includes structural subtyping via object-oriented features and "polymorphic variants," which offer unparalleled flexibility for local error handling. [link](https://borretti.me/article/two-years-ocaml)

#### 3. Ecosystem & Tooling

- **Haskell's package repository is Hackage**, managed by tools like `cabal` or `stack`. The compiler (GHC) generates deeply optimized binaries but can be slow to compile.
- **OCaml's package manager is OPAM**. OCaml compiles almost instantly. It also has a stellar story for compilation to the browser via toolchains like Melange or ReScript, making it popular for frontend development. [link](https://www.reddit.com/r/functionalprogramming/comments/wwlpnn/should%5Fi%5Fpick%5Fup%5Focaml%5For%5Fhaskell/)

#### 4. Industry Adoption

- **Haskell** is heavily favored in blockchain platforms, backend microservices, cryptography, and financial technology companies that require mathematical correctness.
- **OCaml** is famously anchored by the quantitative trading giant Jane Street, which funds much of its modern development. It is also widely used in compiler development, formal verification (like the Coq theorem prover), and companies like Meta and Docker. [link](https://news.ycombinator.com/item?id=17533880)

### Summary: Which should you choose?

- **Choose Haskell** if you want to learn category theory, deeply enjoy advanced type-level programming, or want a rigorous environment that fundamentally changes how you think about writing code.
- **Choose OCaml** if you want a practical, blazing-fast functional language where you can easily escape to imperative code when needed, or if you are interested in compiler design or high-performance systems. [link](https://www.reddit.com/r/functionalprogramming/comments/1nnemu8/what%5Fshould%5Fi%5Fgo%5Ffor%5Fhaskell%5For%5Focaml/)

To help narrow this down, are you looking to use one of these languages for a **specific type of project** (like web development, a compiler, or data analysis) or simply evaluating them for **personal learning**?

- [link](https://discuss.ocaml.org/t/my-thoughts-on-ocaml-vs-haskell-rust-in-2023/12027)\
  OCaml\
  My Thoughts on OCaml vs Haskell/Rust in 2023 - Ecosystem - OCaml\
  A blog post by osa1 generated some discussion on Hacker News about OCaml. The post's author has some thoughts on OCaml compared to...
- [link](https://news.ycombinator.com/item?id=37535848)\
  Hacker News\
  Should I Haskell or OCaml? - Hacker News\
  Sep 16, 2023 — OCaml is not more flexible than Haskell. The primary differences are greedy vs. lazy evaluation. Haskell is used in production in ...
- [link](https://github.com/sidkshatriya/me/blob/master/007-My-Thoughts-on-OCaml-vs-Haskell-Rust-2023.md)\
  GitHub\
  007-My-Thoughts-on-OCaml-vs-Haskell-Rust-2023.md\
  Type classes promote interoperability, establish common standards/common vocabulary Once I see a Monad in Haskell, or a AsRef , or...

Show all

# history of haskell and ocaml

The histories of **Haskell** and **OCaml** are deeply intertwined, as <mark>both emerged from the academic push to refine functional programming in the 1970s and 1980s</mark>. However, they represent a fundamental philosophical split: **Haskell** was built by a global committee to explore the absolute limits of pure, lazy functional programming, while **OCaml** was developed primarily by a French research institute to create a pragmatic, strict, and highly modular system. [link](https://ocaml.org/about)

A direct look at their timelines and core evolutions outlines how these two landmarks of computer science came to be.

***

### The Shared Ancestry: Robin Milner's ML (1970s)

Before Haskell or OCaml existed, there was **ML (Meta Language)**. [link](https://cs3110.github.io/textbook/chapters/intro/past.html)

- **1972:** Robin Milner and his team at the University of Edinburgh created ML to write theorem provers for the LCF (Logic for Computable Functions) project. [link](https://ocaml.org/about)
- To ensure the theorem prover wouldn't generate false proofs, Milner invented the **Hindley-Milner type system**, featuring automatic type inference. [link](https://cacm.acm.org/practice/ocaml-for-the-masses/)
- In the early 1980s, the functional programming community fractured. The British and Americans focused on standardizing _Standard ML (SML)_, while French researchers began their own line of experimentation. [link](https://cs3110.github.io/textbook/chapters/intro/past.html)

***

### The History of OCaml: Pragmatism & Modules

OCaml’s evolution was driven steadily by **INRIA** (the French National Institute for Research in Digital Science and Technology). [link](https://en.wikipedia.org/wiki/OCaml)

- **The CAML Era (1987–1992):** Led by Gérard Huet, Ascánder Suárez, and others, INRIA developed **Caml** (Categorical Abstract Machine Language). It was strict (evaluating function arguments immediately) and focused heavily on performance and compilation efficiency.
- **Caml Light (1990):** Xavier Leroy rewritten the language into a lightweight bytecode interpreter that could run efficiently on small desktop computers.
- **The Birth of OCaml (1996):** Xavier Leroy, alongside Jérôme Vouillon, Damien Doligez, and Didier Rémy, added a powerful object-oriented layer and a world-class module system. This version was christened **Objective Caml**, later shortened to **OCaml**.
- **Industry & Multicore (2000s–Present):** OCaml gained a massive industrial patron when trading giant Jane Street adopted it for its entire infrastructure. In **2022**, OCaml 5.0 was released, completing a multi-year engineering feat to add native **Multicore support** and effects handlers without sacrificing sequential performance. [link](https://news.ycombinator.com/item?id=19292263)

***

### The History of Haskell: Purity & Laziness

While OCaml evolved sequentially within a single institute, Haskell was famously designed by a committee. [link](https://www.youtube.com/watch?v=OuFcEQJs34w)

- **The Catalyst (1987):** At the Functional Programming Languages and Computer Architecture (FPCA '87) conference, researchers grew frustrated that there were more than a dozen different lazy functional languages being used for research. The most prominent was David Turner’s _Miranda_, which was excellent but proprietary. [link](https://discourse.haskell.org/t/8-months-of-ocaml-after-8-years-of-haskell-in-production/8405?page=4)
- **The Committee Formed:** A committee including Simon Peyton Jones, Paul Hudak, and Philip Wadler set out to build an open, standardized, purely functional language. They named it after the logician **Haskell Brooks Curry**. [link](https://www.futurelearn.com/info/courses/functional-programming-haskell/0/steps/27218)
- **Haskell 1.0 to 98 (1990–1998):** The first official specification, **Haskell 1.0**, dropped in 1990. Over the decade, the language invented or popularized epochal concepts:
  - **Type Classes (1989):** Introduced by Wadler and Blott to handle overloading (like making `+` work for both ints and floats).
  - **Monads (1991):** Adopted to safely handle I/O and side-effects in a completely "pure" language. [link](https://discourse.haskell.org/t/8-months-of-ocaml-after-8-years-of-haskell-in-production/8405?page=3)
- **The Rise of GHC and Haskell 2010:** While many compilers existed early on, the **Glasgow Haskell Compiler (GHC)** became the definitive implementation. The language was updated in the **Haskell 2010** standard. [link](https://www.youtube.com/watch?v=OuFcEQJs34w)
- **Modern Era:** Today, Haskell is stewarded by the Haskell Foundation. GHC continues to push the boundaries of type system engineering with advanced extensions like Linear Types and Dependent Types. [link](https://wiki.haskell.org/Future%5Fof%5FHaskell)

***

### Historical & Philosophical Comparison

| Feature                 | Haskell                                              | OCaml                                                 |
| ----------------------- | ---------------------------------------------------- | ----------------------------------------------------- |
| **Origin Year**         | 1990                                                 | 1996                                                  |
| **Governance**          | International Academic Committee                     | INRIA (French Research Institute)                     |
| **Evaluation Strategy** | **Lazy** (Defers evaluation until needed)            | **Strict/Eager** (Evaluates arguments immediately)    |
| **Purity**              | **Pure** (Side effects explicitly tracked via types) | **Impure** (Allows inline mutability/imperative code) |
| **Polymorphism Style**  | **Type Classes** (Implicitly resolved by compiler)   | **Parameterized Modules** (Explicit functors)         |
| **Primary Compiler**    | GHC (Glasgow Haskell Compiler)                       | OCaml Compiler (`ocamlc`/`ocamlopt`)                  |

Would you like to dive deeper into how **monads** in Haskell differ historically from OCaml's **module system**, or explore how they both heavily influenced newer languages like **Rust** and **Scala**?

- [link](https://ocaml.org/about)\
  OCaml\
  Why OCaml?\
  A Brief History. OCaml was written in 1996 by Xavier Leroy, Jérôme Vouillon, Damien Doligez, and Didier Rémy at INRIA in France. I...
- [link](https://cs3110.github.io/textbook/chapters/intro/past.html)\
  GitHub Pages documentation

1.1. The Past of OCaml

1.1. The Past of OCaml Genealogically, OCaml comes from the line of programming languages whose grandfather is Lisp and includes o...

- [link](https://news.ycombinator.com/item?id=19292263)\
  Hacker News\
  What reasons are there for choosing OCaml over Haskell, either ...\
  Mar 3, 2019 — Table\_title: Hacker News Table\_content: | jonahx on March 3, 2019 | parent | context | favorite | on: Functional Programming in OC...

Show all

## why does each choose their philosophy

The diverging philosophies of **Haskell** and **OCaml** stem directly from their original design goals, the specific problems their creators were trying to solve, and the differing backgrounds of the people who built them.

***

### Why Haskell Chose Purity and Laziness

The Haskell committee did not choose **laziness** and **purity** just to be different; they saw them as the ultimate keys to unlocking a completely new way of modularizing code.

- **Laziness was the primary goal:** In the late 1980s, researchers like John Hughes argued that "lazy evaluation" (not computing a value until it is absolutely needed) allowed programmers to separate control flow from data. It made it incredibly easy to create infinite data structures and write elegant, modular algorithms.
- **Purity was forced by laziness:** In a lazy language, you cannot predict exactly _when_ or _if_ a specific line of code will run. If you allowed side effects (like printing to a console or mutating a global variable) inside a normal function, your program’s behavior would become chaotic and unpredictable. To make laziness viable, the language _had_ to be **mathematically pure** (functions always return the same output for the same input and do nothing else).
- **The Monad Breakthrough:** For the first few years, Haskell struggled with how to do basic things like read a file or take user input without violating purity. In 1991, Philip Wadler adapted **Monads** (a concept from category theory). This allowed Haskell to isolate side effects into a secure "container" (the `IO` monad), preserving absolute mathematical purity everywhere else.

***

### Why OCaml Chose Strictness and Modules

OCaml’s creators at INRIA were focused on creating a language for building complex, rock-solid system software—specifically **compilers and automated theorem provers** (like Coq).

- **Predictable performance requires strictness:** In a strict (eager) language, functions evaluate their arguments immediately. This makes memory usage and execution time highly predictable. INRIA wanted a language that could compile down to lightning-fast machine code that could rival C. Laziness introduces "thunks" (suspended computations) that add memory overhead and make performance tuning notoriously difficult.
- **Pragmatism over dogma:** OCaml's creators believed that while purity is elegant, real-world software occasionally needs to mutate a variable, log a debug message, or use a loop for performance. OCaml is **"functional-first"**—it encourages pure programming, but cleanly allows imperative (mutability) and object-oriented paradigms when they make sense.
- **Scale through the Module System:** Instead of using Haskell's approach of Type Classes to handle complex abstractions, OCaml doubled down on an incredibly advanced **module system (Functors)**. They believed that the best way to handle large-scale architecture was to allow programmers to write modules that take other modules as parameters, creating a strictly enforced, highly secure blueprint for massive codebases.

***

### Summary of Motivating Insights

```
[Haskell Committee]
"Let's see what happens if we refuse to compromise on mathematical purity.
Laziness will give us beautiful, unprecedented ways to compose software."
       │
       ▼
Result: Pure, Lazy, Type-Class-driven architecture.
```

<!---->

```
[INRIA / OCaml Creators]
"We need to build massive, highly reliable systems like compilers and theorem provers.
It must be blazing fast, predictable, and modular, but let us use mutations when needed."
       │
       ▼
Result: Strict, Impure, Module-driven architecture.
```

Would you like to see a **code comparison** of how both languages solve the exact same problem (such as handling optional data or printing to the console) to see these philosophies in action?

# rust match syntax examples

In Rust, the **`match` keyword** provides powerful, compiler-enforced pattern matching. Unlike a `switch` statement in other languages, `match` is **exhaustive** (meaning the compiler forces you to handle every possible value) and acts as an **expression** (meaning it can return a value). [link](https://doc.rust-lang.org/rust-by-example/flow%5Fcontrol/match.html)

Here are the most common syntax patterns and examples for using `match` in Rust:

### 1. Basic Matching & Wildcards (`_`)

The simplest form matches specific literal values. The underscore `_` acts as a catch-all (default case) for any unmatched patterns. [link](https://www.youtube.com/watch?v=pf8eQwWkTaY\&t=45)

rust

```
fn main() {
    let number = 3;

    match number {
        1 => println!("One"),
        2 => println!("Two"),
        3 => println!("Three"),
        _ => println!("Something else"), // Catch-all default case
    }
}
```

Use code with caution.

### 2. Match as an Expression

Because `match` returns a value, you can assign its result directly to a variable. **Note:** All arms must return the same data type. [link](https://oneuptime.com/blog/post/2026-01-25-rust-match-expressions/view)

rust

```
fn main() {
    let boolean = true;

    // The match expression evaluates and returns a u32
    let binary = match boolean {
        false => 0,
        true => 1,
    };

    println!("Value: {}", binary);
}
```

Use code with caution.

### 3. Multiple Patterns & Ranges

You can match multiple distinct values using the pipe symbol (`|`) or an inclusive range of values using `..=`. [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)

rust

```
fn main() {
    let car_speed = 75;

    match car_speed {
        0 => println!("Stationary"),
        1 | 2 | 3 => println!("Barely moving"), // Matches 1, 2, or 3
        4..=60 => println!("Safe speed"),       // Matches any number from 4 to 60 inclusive
        61..=100 => println!("Speeding!"),      // Matches any number from 61 to 100 inclusive
        _ => println!("Invalid or extreme speed"),
    }
}
```

Use code with caution.

### 4. Matching Enums & Destructuring

`match` is frequently used to unpack or extract values directly from `enum` variants. [link](https://doc.rust-lang.org/std/keyword.match.html)

rust

```
enum Command {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

fn main() {
    let cmd = Command::Move { x: 10, y: 20 };

    match cmd {
        Command::Quit => println!("Quitting..."),
        Command::Move { x, y } => println!("Move to x: {}, y: {}", x, y), // Destructuring struct fields
        Command::Write(text) => println!("Writing text: {}", text),       // Destructuring tuple data
    }
}
```

Use code with caution.

### 5. Unpacking `Option<T>` and `Result<T, E>`

Rust's built-in `Option` and `Result` types are enums, making them perfect candidates for `match`. [link](https://www.youtube.com/watch?v=xZUimOlCPdg\&t=50)

rust

```
fn plus_one(x: Option<i32>) -> Option<i32> {
    match x {
        None => None,                      // Must handle the absence of value
        Some(i) => Some(i + 1),            // Binds the inner value to 'i'
    }
}
```

Use code with caution.

### 6. Match Guards (`if` Conditions)

A match guard is an extra `if` condition added to a match arm. The pattern must match _and_ the conditional check must evaluate to true for that arm to execute. [link](https://rust-book.cs.brown.edu/ch19-03-pattern-syntax.html)

rust

```
fn main() {
    let pair = (2, -2);

    match pair {
        (x, y) if x == y => println!("They are equal"),
        (x, y) if x + y == 0 => println!("They cancel each other out!"),
        (x, _) if x % 2 == 0 => println!("The first number is even"),
        _ => println!("No special relationship"),
    }
}
```

Use code with caution.

### 7. Variable Binding (`@`)

If you want to test a value against a range or complex pattern, but _also_ want to save that value to a variable name for use inside the arm's block, use the `@` symbol. [link](https://medium.com/@gunnar.h.karlsson/a-rust-superpower-the-match-statement-5286b8aabfce)

rust

```
fn main() {
    let age = 15;

    match age {
        // Binds the matching value to the variable 'teen_age'
        teen_age @ 13..=19 => println!("A teenager of age: {}", teen_age),
        _ => println!("Not a teen"),
    }
}
```

Use code with caution.

Are you trying to match against a specific data type like **tuples**, **structs**, or **slices/arrays**? Let me know, and I can give you a tailored example!

- [link](https://doc.rust-lang.org/rust-by-example/flow%5Fcontrol/match.html)\
  Rust Documentation\
  match - Rust By Example\
  Rust uses the \`match\` keyword to provide pattern matching. The \`match\` keyword can be used like a C switch. The first matching arm...
- [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)\
  Rust Documentation\
  Pattern Syntax - The Rust Programming Language\
  Patterns can be used in match expressions, let statements, and function parameters. Here are some examples of patterns: \* \*\*Matchi...
- [link](https://www.youtube.com/watch?v=pf8eQwWkTaY\&t=45)\
  YouTube·Trevor Sullivan\
  Rust Match Expressions and Patterns 🦀\
  Aug 22, 2023 — In this video, we're going to explore the Rust "match" control flow expression and Rust "patterns", which work together as an alte...\
  34m

Show all

# what if rust didnt enforce exhaustiveness of match

If Rust did not enforce the exhaustiveness of `match` statements, <mark><strong>the language would lose one of its primary memory safety guarantees, shifting structural bugs from compile-time errors to silent runtime crashes or undefined behavior.</strong></mark> Enforcing that every possible pattern is handled is a foundational design choice that allows Rust to safely handle algebraic data types (enums) without null pointers or default fallbacks. [link](https://www.youtube.com/watch?v=sd1M%5FCLXl4I\&t=187)

If this rule were relaxed—similar to how `switch` statements behave in C, C++, or Java—the language mechanics, safety models, and developer workflows would change significantly.

***

### 1. The Immediate Technical Consequence: Unhandled Cases

If a `match` expression encountered an unhandled variant at runtime, Rust would be forced to choose between two undesirable behaviors:

- **Option A: Panic at Runtime (Implicit Fallback)**\
  If the compiler didn't force you to handle every case, it would have to insert an implicit catch-all branch (`_ => panic!("...")`). While this avoids memory corruption, it transforms deterministic compile-time errors into random runtime crashes, completely shifting Rust's design philosophy of "if it compiles, it works." [link](https://www.youtube.com/watch?v=V2oUdRr9m94)

- **Option B: Silent No-Op / Default Initialization**\
  If `match` behaved like a C `switch` and simply did nothing when a case wasn't met, it would break whenever `match` is used as an expression. For example:\
  rust

<!---->

```
// If this compiled without checking exhaustiveness, what happens if `msg` is `Message::Quit`?
let error_code = match msg {
    Message::Error(code) => code,
    Message::Warning(code) => code,
};
```

Use code with caution.\
The variable `error_code` would contain uninitialized memory, leading directly to **Undefined Behavior (UB)** and tearing down Rust's core promise of safe memory management. [link](https://www.youtube.com/watch?v=oKERwa28Teg)

### 2. Loss of "Compiler-Driven Refactoring"

One of the most beloved workflows in Rust is updating an `enum`. If a developer adds a new variant to a central enum, the compiler immediately flags every single `match` statement across the codebase that needs to be updated. [link](https://internals.rust-lang.org/t/shouldnt-it-be-possible-to-allow-non-exhaustive/14350)

Without exhaustiveness validation:

- You would add a variant, and the code would compile perfectly.
- Deployed production applications would eventually encounter the new variant in an unhandled `match` branch, leading to silent failures or crashes.
- Developers would have to rely heavily on extensive integration testing or manual code audits just to find missing edge cases. [link](https://medium.com/@w.xy020203/exhaustive-compile-time-matching-in-typescript-just-like-in-rust-0ba453f1f816)

### 3. The Collapse of `Option` and `Result` Safety

The ubiquity of the `Option` and `Result` types relies on exhaustiveness. Forcing developers to match both `Some` and `None` (or `Ok` and `Err`) ensures that errors and empty states are never ignored. [link](https://www.reddit.com/r/learnrust/comments/g965qp/confused%5Fabout%5Fwhat%5Fexhaustive%5Fmeans%5Ffor%5Fthe/)

If exhaustiveness were optional, developers could write:

rust

```
match total_balance {
    Some(val) => transfer(val),
    // Missing None? The compiler says nothing.
}
```

Use code with caution.

This would effectively reintroduce the hazards of the "billion-dollar mistake" (null pointer exceptions), as missing a `None` branch would mean bypassing critical fallback logic.

### 4. Bloated Codebases (The `_ =>` Defensive Anti-Pattern)

Paradoxically, removing the constraint would likely make code noisier. Because skipping a case would be so dangerous, coding standards and linters would quickly mandate that developers add an explicit catch-all to every single match anyway:

rust

```
match state {
    State::Active => { .. },
    _ => unreachable!(), // Added defensively everywhere out of fear
}
```

Use code with caution.

This defeats the elegance of pattern matching, replacing compiler assurances with boilerplate defensive code. [link](https://stackoverflow.com/questions/67855118/non-exhaustive-match-i32-even-if-it-is)

***

### How Other Languages Handle This

To see how this plays out in production, look at how other modern languages bridge this gap:

- **TypeScript** does not natively enforce exhaustiveness for switches, forcing developers to implement a manual `assertNever(x)` hack to throw compile errors on unhandled types. [link](https://medium.com/@w.xy020203/exhaustive-compile-time-matching-in-typescript-just-like-in-rust-0ba453f1f816)
- **Kotlin** and **Swift** enforce exhaustiveness checks on their equivalents (`when` and `switch`), recognizing that it is an essential safeguard for modern type systems.

Are you asking because you are encountering a **specific compile error** with an integer or string range that you believe _is_ logically exhaustive, or are you exploring how to design a language feature? I can show you how to work around **non-exhaustive errors** or explain how Rust's **`#[non_exhaustive]` attribute** works. [link](https://users.rust-lang.org/t/why-does-the-rust-compiler-think-this-match-is-non-exhaustive/10105)

- [link](https://medium.com/@w.xy020203/exhaustive-compile-time-matching-in-typescript-just-like-in-rust-0ba453f1f816)\
  Medium\
  Exhaustive Compile Time Matching in Typescript, Just Like in ...\
  If you try to compile this code, the Typescript compiler will not give you any error. This is because the Typescript compiler does...
- [link](https://internals.rust-lang.org/t/shouldnt-it-be-possible-to-allow-non-exhaustive/14350)\
  Rust Internals\
  Shouldn't it be possible to #!\[allow(non\_exhaustive)]\
  Mar 27, 2021 — Shouldn't it be possible to #!\[allow(non\_exhaustive)] One of my favorite features of Rust is that you can write code in a way that...
- [link](https://www.youtube.com/watch?v=sd1M%5FCLXl4I\&t=187)\
  YouTube·Francesco Ciulla\
  Mastering Rust's Match Control Flow - Full Crash Rust Tutorial ...\
  Apr 9, 2024 — Mastering Rust's Match Control Flow - Full Crash Rust Tutorial for Beginners it supports value binding and it allows to return val...\
  6m

Show all

# what if rust didnt enforce exhaustiveness of match when it's not used as an expression

If Rust did not enforce exhaustiveness for `match` statements (when used as statements, not expressions), <mark>it would significantly change the language's safety guarantees and developer workflows</mark>.

Here is a breakdown of what would happen, the potential bugs it would introduce, and how the language would have to adapt.

***

### 1. Silent Legal Drops (The "Missing Variant" Bug)

Currently, Rust forces you to handle every case so you don't accidentally forget new logic when an `enum` changes. If exhaustiveness weren't required for statements, code like this would compile perfectly:

rust

```
enum OrderStatus {
    Pending,
    Shipped,
    Cancelled, // Added later
}

// Used as a statement, so no return value is expected
match status {
    OrderStatus::Pending => println!("Processing..."),
    OrderStatus::Shipped => println!("Track package..."),
    // OrderStatus::Cancelled is missing!
}
```

Use code with caution.

- **The Problem:** If `status` is `Cancelled`, the application will silently skip the entire block and move to the next line of code.
- **The Impact:** This introduces classic bugs found in C++ or Java, where adding a new enum variant requires hunting down every `switch` statement in the codebase to ensure it was updated.

### 2. Shift Toward Explicit "Fall-Through" Defaults

To prevent those silent bugs, developers would have to change how they write code defensively. You would see a massive spike in the use of the wildcard pattern (`_`):

rust

```
match status {
    OrderStatus::Pending => println!("Processing..."),
    OrderStatus::Shipped => println!("Track package..."),
    _ => {} // Forced to write this to catch anything else, or risking silent failure
}
```

Use code with caution.

Ironically, overusing `_` defeats the purpose of Rust's helpful compiler alerts when you _want_ to be reminded to update your logic for new variants.

### 3. Redundancy with `if let`

Rust already has a built-in feature for when you only care about one or two specific variants and want to ignore the rest: **`if let` statements**.

If `match` didn't enforce exhaustiveness, `match` and `if let` would become structurally redundant. For example, these two would behave exactly the same way:

| Non-exhaustive `match` (Hypothetical)                                                 | Standard `if let` (Current Rust)                                                      |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `rust block<br>match status {<br> OrderStatus::Shipped => setup_tracking(),<br>}<br>` | `rust block<br>if let OrderStatus::Shipped = status {<br> setup_tracking();<br>}<br>` |

By keeping `match` strictly exhaustive, Rust maintains a clear semantic distinction: use `match` when you need to reason about _all_ possibilities, and `if let` when you only care about _some_.

### 4. Memory Safety Considerations (Move Semantics)

Rust `match` statements often destructure and **move** data out of enum variants. If a match is non-exhaustive, the compiler has to figure out whether a value was dropped or moved.

If a variant is skipped, Rust automatically drops the value at the end of the statement. While this wouldn't inherently break memory safety (the compiler would still track ownership accurately), it could lead to unexpected behavior where complex objects are dropped implicitly without the programmer realizing it.

***

Would you like to explore **how the `#[non_exhaustive]` attribute currently works** in Rust for library authors, or look into how **other languages like Swift or Scala** handle this design choice?

# rust if let examples

In Rust, **`if let` is a concise way to handle values that match a specific pattern while ignoring all others**. It works as a shorter alternative to a `match` expression when you only care about one specific variant of an enum (like `Option` or `Result`). [link](https://www.youtube.com/watch?v=DrCNi2Am304)

***

### 1. Basic `if let` with `Option`

Instead of writing a full `match` block with a boilerplate wildcard arm (`_ => {}`), `if let` lets you extract the inner value of a `Some` variant directly. [link](https://www.seventeencups.net/posts/why-if-let/)

rust

```
fn main() {
    let config_max: Option<u32> = Some(100);

    // Using if let to unpack and bind 'max'
    if let Some(max) = config_max {
        println!("The maximum is configured to be {max}.");
    }
}
```

Use code with caution.

### 2. Using `if let` with an `else` Block

You can attach an `else` block, which behaves exactly like the fallback/default arm (`_`) of a `match` expression. [link](https://doc.rust-lang.org/book/ch06-03-if-let.html)

rust

```
fn main() {
    let user_role: Option<&str> = None;

    if let Some(role) = user_role {
        println!("Welcome back, {role}!");
    } else {
        println!("Welcome, Guest!");
    }
}
```

Use code with caution.

### 3. Handling `Result` (Error Handling)

`if let` is highly practical when you want to execute code only if an operation succeeds (`Ok`), while skipping or universally handling any errors (`Err`). [link](https://www.dotnetperls.com/if-rust)

rust

```
fn main() {
    let total_cost: Result<i32, &str> = Ok(42);

    if let Ok(price) = total_cost {
        println!("Your total is ${price}.");
    }
}
```

Use code with caution.

### 4. Matching Custom Enums

You can use `if let` with any custom enum, including variants that contain data. [link](https://doc.rust-lang.org/rust-by-example/flow%5Fcontrol/if%5Flet.html)

rust

```
#[derive(Debug)]
enum WebEvent {
    PageLoad,
    KeyPress(char),
    Click { x: i64, y: i64 },
}

fn main() {
    let pressed_key = WebEvent::KeyPress('q');

    // Only match if a key was pressed
    if let WebEvent::KeyPress(key) = pressed_key {
        println!("User pressed the '{}' key.", key);
    }
}
```

Use code with caution.

### 5. Modern Rust: `if let` Chaining

If you are using a modern edition of Rust, you can chain multiple `if let` patterns together alongside standard boolean conditions using the `&&` operator. [link](https://doc.rust-lang.org/reference/expressions/if-expr.html)

rust

```
fn main() {
    let parsed_id: Option<u32> = Some(105);
    let is_admin = true;

    // Both the pattern match AND the boolean condition must pass
    if let Some(id) = parsed_id {
        if id > 100 && is_admin {
            println!("Admin access granted to ID: {id}");
        }
    }
}
```

Use code with caution.

***

### Direct Comparison: `match` vs. `if let`

Here is how the exact same logic looks using both strategies: [link](https://patshaughnessy.net/2018/1/18/learning-rust-if-let-vs--match)

| Feature          | Using `match`                                            | Using `if let`                                 |
| ---------------- | -------------------------------------------------------- | ---------------------------------------------- |
| **Code Example** | match config {Some(val) => println!("{val}"),None => {}} | if let Some(val) = config {println!("{val}");} |
| **When to Use**  | When managing multiple enum variants explicitly.         | When you only care about a single variant.     |
| **Verbosity**    | Requires accounting for all possibilities (exhaustive).  | Concise boilerplate; ignores other variants.   |

If you are trying to solve a specific problem, tell me:

- What **type of data** are you matching against (e.g., `Option`, `Result`, or a custom `enum`)?
- What **logic** needs to happen if the match succeeds or fails?

I can provide a refactored code sample tailored directly to your project.

- [link](https://doc.rust-lang.org/rust-by-example/flow%5Fcontrol/if%5Flet.html)\
  Rust Documentation\
  if let - Rust By Example\
  Here's an example of \`if let\` in use: \* \*\*if let Some(i) = number\*\* Evaluates the block and prints "Matched {:?}!", i \* \*\*if let S...
- [link](https://www.youtube.com/watch?v=DrCNi2Am304)\
  YouTube·Francesco Ciulla\
  The "if let" Construct in Rust: Full Tutorial and Examples\
  Apr 16, 2024 — In this lesson, we will talk about the \`if let\` construct in Rust. This is a simple construct that can simplify the code in some c...\
  8:39
- [link](https://doc.rust-lang.org/book/ch06-03-if-let.html)\
  Rust Documentation\
  Concise Control Flow with if let and let...else - The Rust Programming Language\
  \`If let\` syntax takes a pattern and an expression separated by an equal sign. The pattern is the first arm of the match, and the e...

Show all

# rust range examples

In **Rust**, ranges are shorthands used to generate sequences of numbers or characters. They are represented as standard library structs under `std::ops` or `std::range`. [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)

Here are the most common examples categorized by how you use them.

### 1. Fundamental Range Types

Rust provides multiple ways to specify ranges using the **`..`** and **`..=`** operators. [link](https://doc.rust-lang.org/reference/expressions/range-expr.html)

rust

```
fn main() {
    let exclusive = 1..5;          // std::ops::Range (1, 2, 3, 4)
    let inclusive = 1..=5;         // std::ops::RangeInclusive (1, 2, 3, 4, 5)
    let range_from = 2..;          // std::ops::RangeFrom (2, 3, 4, ... infinity)
    let range_to = ..3;            // std::ops::RangeTo (items up to index 3)
    let range_to_inclusive = ..=3; // std::ops::RangeToInclusive (up to and including index 3)
    let range_full = ..;           // std::ops::RangeFull (the entire collection)
}
```

Use code with caution.

***

### 2. Iteration (Using Ranges in `for` Loops)

Only ranges with an explicit start and end point (or unbounded `RangeFrom` if you manually break) can be iterated over. [link](https://doc.rust-lang.org/std/ops/struct.RangeTo.html)

rust

```
fn main() {
    // Exclusive range (ends at 4)
    for i in 1..5 {
        println!("Exclusive: {}", i); // Prints 1, 2, 3, 4
    }

    // Inclusive range (ends at 5)
    for i in 1..=5 {
        println!("Inclusive: {}", i); // Prints 1, 2, 3, 4, 5
    }
}
```

Use code with caution.

***

### 3. Slicing Collections

Ranges are heavily used to safely **slice arrays, vectors, or strings**. [link](https://www.dotnetperls.com/range-rust)

rust

```
fn main() {
    let array = [10, 20, 30, 40, 50];

    let slice1 = &array[1..4];   // [20, 30, 40]
    let slice2 = &array[..3];    // [10, 20, 30] (Starts at index 0)
    let slice3 = &array[2..];    // [30, 40, 50] (Goes to the end)
    let slice4 = &array[..];     // All elements
}
```

Use code with caution.

***

### 4. Pattern Matching

You can use **inclusive ranges (`..=`)** inside `match` statements to check if a value falls into a bucket. _Note: Exclusive ranges (`..`) are not allowed in pattern matching._ [link](https://doc.rust-lang.org/reference/patterns.html?highlight=range)

rust

```
fn main() {
    let score = 85;
    match score {
        90..=100 => println!("Grade: A"),
        80..=89  => println!("Grade: B"),
        70..=79  => println!("Grade: C"),
        _        => println!("Failed"),
    }

    // Works with characters too!
    let letter = 'c';
    if let 'a'..='z' = letter {
        println!("It is a lowercase letter.");
    }
}
```

Use code with caution.

***

### 5. Useful Built-in Methods

You can invoke methods directly on a range object, such as checking if a number resides within it. [link](https://web.mit.edu/rust-lang%5Fv1.25/arch/amd64%5Fubuntu1404/share/doc/rust/html/std/ops/struct.Range.html)

rust

```
fn main() {
    // Check if a range contains a value
    assert!((1..10).contains(&5)); // true
    assert!(!(1..10).contains(&10)); // true (since 10 is exclusive)

    // Sum all numbers in a range
    let sum: i32 = (1..=4).sum();
    println!("Sum: {}", sum); // 1 + 2 + 3 + 4 = 10
}
```

Use code with caution.

Would you like to see how to implement **custom step increments** for ranges (like stepping by 2), or are you trying to use ranges to solve a **specific problem** in your project?

- [link](https://doc.rust-lang.org/reference/expressions/range-expr.html)\
  Rust Documentation\
  Range expressions\
  Syntax Examples: #!\[allow(unused)] fn main() { 1.. 2; // std::ops::Range 3..; // std::ops::RangeFrom .. 4; // std::ops::RangeTo ..
- [link](https://www.dotnetperls.com/range-rust)\
  Dot Net Perls\
  Rust - Range Type Examples - Dot Net Perls\
  It is possible to create custom structs in Rust that store start and end indexes, but the Range struct can do this in a more stand...
- [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)\
  Rust Documentation\
  Pattern Syntax\
  Matching Ranges of Values with ..= Specifying a range is much shorter, especially if we want to match, say, any number between 1 a...

Show all

## why do they give the simpler one to exclusive range

In **computer science and language design**, giving the simpler operator (`..`) to the **exclusive range** comes down to three main reasons: <mark><strong>zero-based indexing</strong>,<span> </span><strong>looping over lengths</strong>, and<span> </span><strong>avoiding integer overflow</strong></mark>.

Here is why programming languages naturally favor the exclusive range as the default.

### 1. It Fits Zero-Based Indexing Perfectly

Most programming languages, including Rust, use **zero-based indexing** (where the first element of an array is at index `0`).

If you have an array with **5 elements**, its valid indexes are `0, 1, 2, 3, 4`.

- With an **exclusive range**, you can use the length directly: `0..array.len()` (generates `0, 1, 2, 3, 4`).
- With an **inclusive range**, you would always have to subtract one: `0..=array.len() - 1`.

Because slicing and looping over arrays happens constantly in systems programming, the syntax is optimized to make this as clean as possible.

### 2. Math and Concatenation Symmetry

Exclusive ranges make splitting and merging collections mathematically elegant.

If you want to split an array at index `3`:

- Left side: `0..3` (Elements `0, 1, 2`)
- Right side: `3..5` (Elements `3, 4`)

Notice how the **end** of the first range matches the **start** of the second range perfectly. If Rust defaults to inclusive ranges, you would have to write `0..=2` and `3..=4`, requiring mental math to verify that no elements were skipped.

### 3. Preventing Integer Overflow

This is a critical edge case for systems languages like Rust. Imagine you want to iterate through every possible value of an 8-bit unsigned integer (`u8`), which ranges from `0` to `255`.

If you try to write an inclusive loop using traditional logic behind the scenes:

rust

```
// Hypothetical loop logic
let mut i = 0;
while i <= 255 {
    // do something
    i += 1; // On the last iteration, 255 + 1 overflows to 0!
}
```

Use code with caution.

If `i` hits `255` and increments, it overflows back to `0`, creating an **infinite loop**.

By using an exclusive range like `0..256` (storing the upper bound in a larger integer type internally), or using exclusive bounds natively, the compiler can optimize the loop safely without risking out-of-bounds math or overflow panics.

Are you running into an issue where **exclusive bounds** are making your code harder to read, or are you working on a **pattern-matching case** where you need inclusive bounds?

## why must pattern matching use inclusive range

The restriction that forces you to use **inclusive ranges (`..=`)** in Rust pattern matching—and treats exclusive ranges (`..`) as a compiler error—comes down to <mark>a combination of<span> </span><strong>mathematical precision</strong><span> </span>and a tricky<span> </span><strong>syntax conflict</strong><span> </span>in Rust's grammar</mark>.

***

### 1. Exhaustiveness Checks (Exclusion is Hard to Prove)

Rust's compiler prides itself on ensuring that your `match` statements are **exhaustive** (covering every single possible value) and don't overlap redundantly. [link](https://dev.to/brunooliveira/learning-rust-understanding-pattern-matching-10b3)

With inclusive ranges (`1..=10`), the bounds are clear, finite, and concrete. The compiler can easily look at your arms and mathematically prove whether you accounted for every number.

If exclusive ranges (`1..10`) were allowed, checking completeness for floating-point numbers or abstract custom types would become a nightmare or impossible. For integers, it means `1..10` mathematically translates to `1..=9`. Forcing you to write `1..=9` explicitly makes it crystal clear to both you and the compiler exactly what numbers are captured.

### 2. The Slice Pattern Ambiguity (The Grammar Conflict)

The biggest blocker for the Rust compiler team is a deep syntax conflict with **slice patterns**.

In Rust, you can use `..` inside a slice or array pattern to say _"ignore everything else in the middle of this collection."_

rust

```
let numbers = [1, 2, 3, 4, 5];

match numbers {
    // This '..' means "match a slice starting with 1 and ending with 5,
    // ignoring the arbitrary number of elements in between"
    [1, .., 5] => println!("Matches!"),
    _ => {}
}
```

Use code with caution.

If Rust allowed exclusive range patterns, consider how the compiler would parse this snippet:

rust

```
match x {
    0..42 => { ... } // Is this an exclusive range from 0 to 42?
                     // Or is it a slice starting with 0, followed by a variable named 42?
}
```

Use code with caution.

While a number like `42` is obviously a literal, if you used a constant identifier like `0..MAX`, the compiler would have an incredibly difficult time determining whether `..` means _"exclusive range"_ or _"ignore the rest of this sub-slice pattern."_

By restricting range patterns to `..=`, Rust completely avoids this grammatical ambiguity.

### 3. Clear Intent in Code Reading

When reading a sequential flow of data, exclusive ranges make sense because you are often evaluating a moving pointer (like an array index).

However, when reading a **decision tree** (a `match` statement), humans naturally group things into discrete, inclusive "buckets" (e.g., _"If the score is between 90 and 100, give them an A"_). Forcing `..=` aligns the code with how human brains naturally classify individual points of data.

***

_Note: The Rust language team has an experimental tracking issue ([#37854](https://github.com/rust-lang/rust/issues/37854)) to eventually allow exclusive ranges in pattern matching once they resolve the syntax parsing ambiguities, but for now, `..=` remains the stable requirement._ [link](https://github.com/rust-lang/rust/issues/120047)

Would you like to see how to use **match guards (using `if`)** to bypass this restriction so you can check exclusive conditions inside a match statement?

- [link](https://dev.to/brunooliveira/learning-rust-understanding-pattern-matching-10b3)\
  DEV Community\
  Learning Rust - Understanding pattern matching\
  One way to ensure you've covered every possibility is to have a catchall pattern for the last arm: for example, a variable name ma...
- [link](https://github.com/rust-lang/rust/issues/120047)\
  GitHub\
  exclusive\_range\_pattern error is unhelpful #120047\
  exclusive range pattern syntax is experimental ・ note: see issue #37854 ・ help: use an inclusive range pattern,
- [link](https://alexanderobregon.substack.com/p/match-control-flow-in-rust-and-pattern)\
  Substack\
  Match Control Flow in Rust and Pattern Matching Mechanics\
  Match guards are conditional expressions attached to patterns using if . They give you a way to refine when a pattern should match...

# rust template string

In Rust, string template functionality <mark>depends on whether your template is defined at<span> </span><strong>compile time</strong><span> </span>(built-in macros) or<span> </span><strong>runtime</strong><span> </span>(third-party crates)</mark>. [link](https://users.rust-lang.org/t/declaring-compile-time-string-templates-and-rendering-them-at-runtime/102624)

### 1. Built-in Compile-Time "Templates" (Macro-Based)

Rust does not have JavaScript-like template strings natively, but its built-in formatting macros capture variables directly from the local scope. These must be literal strings hardcoded into the source code. [link](https://users.rust-lang.org/t/string-template-interpolation/32106)

rust

```
fn main() {
    let name = "Alice";
    let age = 30;

    // 1. format! macro (returns a new String)
    let message = format!("Hello, {name}! You are {age} years old.");
    println!("{}", message);

    // 2. Multi-line template using indoc (preserves neat alignment)
    // Needs `indoc = "2.0"` in Cargo.toml
    let multiline = indoc::formatdoc! {"
        User Profile:
          Name: {name}
          Age:  {age}
    "};
    println!("{}", multiline);
}
```

Use code with caution.

### 2. Runtime Custom Templates (Using Crates)

If your template comes from a file, user input, or an API call at runtime, built-in macros like `format!` **cannot** be used because they require strict compile-time validation. For runtime data extraction, use dedicated packages: [link](https://stackoverflow.com/questions/68789406/is-it-possible-to-create-a-string-with-a-format-argument-that-can-be-applied-at)

#### Option A: Simple Placeholder Swapping (`tinytemplate`)

The [tinytemplate crate](https://docs.rs/tinytemplate) is ultra-lightweight and perfect for basic parameter substitution without needing a massive engine footprint. [link](https://www.reddit.com/r/rust/comments/13p3nnn/library%5Ffor%5Fformatting%5Fuserprovided%5Fformat%5Fstrings/)

rust

```
use tinytemplate::TinyTemplate;
use serde::Serialize;

#[derive(Serialize)]
struct Context {
    name: String,
}

fn main() {
    let template_str = "Welcome back, {name}!";

    let mut tt = TinyTemplate::new();
    tt.add_template("welcome", template_str).unwrap();

    let context = Context { name: "Bob".to_string() };
    let rendered = tt.render("welcome", &context).unwrap();

    println!("{}", rendered); // Output: Welcome back, Bob!
}
```

Use code with caution.

#### Option B: Full-Featured Engines (`MiniJinja` or `Tera`)

If you require complex rendering conditions, logical operations, loops, or filters, full template processing engines are recommended. [link](https://www.reddit.com/r/rust/comments/1fc2mic/best%5Ftemplating%5Fengine%5Ffor%5Frust/)

- **MiniJinja**: A minimalist, low-dependency implementation of the Jinja2 engine.
- **Tera**: A powerful tool modeled directly after Jinja2/Django templates.

rust

```
// Example using MiniJinja (Cargo.toml: minijinja = "2.0")
use minijinja::{Environment, context};

fn main() {
    let mut env = Environment::new();
    let template = "Hello {{ name }}! {% if premium %}Thank you for subscribing!{% endif %}";

    env.add_template("hello", template).unwrap();

    let tmpl = env.get_template("hello").unwrap();
    let result = tmpl.render(context!(name => "Carol", premium => true)).unwrap();

    println!("{}", result);
}
```

Use code with caution.

To recommend the best tool, tell me:

- Will your template text be **hardcoded** in the app source code or **loaded dynamically** at runtime?

- Do you need conditional statements like **if/else loops**, or just basic key-value replacements?

- [link](https://www.reddit.com/r/rust/comments/13p3nnn/library%5Ffor%5Fformatting%5Fuserprovided%5Fformat%5Fstrings/)\
  Reddit\
  Library for formatting user-provided format strings?\
  May 22, 2023 — There are a few libraries that can format user-provided format strings: \* \*\*Leon\*\* Parses template strings into tokens and substit...

- [link](https://www.reddit.com/r/rust/comments/1fc2mic/best%5Ftemplating%5Fengine%5Ffor%5Frust/)\
  Reddit\
  Best templating engine for Rust\
  Sep 8, 2024 — Comments Section \* Engine Bay of a Toyota Supra r/pics • 4y ago Engine Bay of a Toyota Supra 7 upvotes · 2 comments \* cookie\_cutte...

- [link](https://users.rust-lang.org/t/declaring-compile-time-string-templates-and-rendering-them-at-runtime/102624)\
  The Rust Programming Language Forum\
  Declaring compile time string templates and rendering them at ...\
  Declaring compile time string templates and rendering them at runtime Insofar as I am aware, you can't. At least, not how it looks...

Show all

# why doesnt rust provide backtick as syntax sugar of format string

<mark><strong><span>Rust does not provide backticks (or any built-in f-string prefix) for string interpolation because formatting in Rust is intentionally handled by macros, not the core language grammar.</span></strong></mark> [link](https://users.rust-lang.org/t/why-doesnt-rust-expand-f-string-beyong-macros/76162)

The decision boils down to several fundamental language design trade-offs:

### 1. Separation of `core` and `alloc` (The Embedded Constraint)

The core Rust language (`core` crate) is entirely agnostic of an allocator and does not know what a heap-allocated `String` is. [link](https://news.ycombinator.com/item?id=29931884)

- If Rust introduced `let x = `hello {name}`;`, the compiler would have to know what that expression returns.
- Should it return a `String`? If so, it couldn't be used in `#[no_std]` (embedded) environments where memory allocation isn't available.
- By keeping string formatting inside macros like format! (which allocates a `String` in `alloc`) and format\_args! (which doesn't allocate and lives in `core`), Rust allows the ecosystem to decide how formatted text is processed without baking memory allocations into the compiler's syntax layer. [link](https://news.ycombinator.com/item?id=29931884)

### 2. Syntax Ambiguity and International Keyboards

Backticks are highly saturated in modern text editing and international computing:

- **Keyboard layouts:** On many European keyboards (like German or French layouts), the backtick is a "dead key" used for adding accents (e.g., `à`). Requiring it for core syntax forces a painful typing experience on non-US developers. [link](https://www.reddit.com/r/AskProgramming/comments/f1psd2/why%5Farent%5Fbackticks%5Faka%5Fused%5Finstead%5Fof%5For%5Fwhen/)
- **Markdown documentation:** Rust relies heavily on Markdown for documentation comments. Embedding code snippets that contain backticks inside documentation that _uses_ backticks for code blocks introduces significant parsing and escaping complexity. [link](https://github.com/rust-lang/rust/issues/9411)

### 3. Parsing Arbitrary Expressions is Risky

In JavaScript or Python, you can write complex code directly inside the interpolation brackets (e.g., `hello \${user.getName().toLowerCase()}`).\
For Rust to do this inside a literal string, the compiler would have to partially tokenize code, switch context to parse arbitrary Rust syntax mid-string, and then return to string parsing. This significantly complicates the lexer and compile times. [link](https://internals.rust-lang.org/t/how-to-allow-arbitrary-expressions-in-format-strings/15812)

Instead, Rust compromised in **Rust 1.58** with Implicit Argument Capturing. You can now write `format!("hello {name}")` as long as `name` is a valid identifier in the local scope. [link](https://internals.rust-lang.org/t/how-to-allow-arbitrary-expressions-in-format-strings/15812)

### 4. Custom Formatting Targets

A backtick syntax locks string formatting into a singular operation. Macros allow Rust to safely evaluate format strings at compile-time for completely different outputs. For example: [link](https://news.ycombinator.com/item?id=29931884)

- `println!("{x}")` directly formats to standard output without intermediate allocations.
- `write!(f, "{x}")` writes directly into a buffer stream.
- `log::info!("{x}")` handles logging structures. [link](https://www.reddit.com/r/rust/comments/1kmcxqh/why%5Fdoes%5Frust%5Fnot%5Fallow%5Fsyntax%5Flike%5Fformattext%5Fvar/)

If you really prefer an inline look, you can build or use declarative/procedural macros from the community that mimic f-string styles, but the standard library maintains macros to ensure strict compile-time verification and zero-cost abstraction for `no_std` environments. [link](https://news.ycombinator.com/item?id=29931884)

Would you like to explore how **implicit argument capturing** handles formatting specifiers (like padding or hex), or see how **macro parsing** handles strings under the hood?

- [link](https://news.ycombinator.com/item?id=29931884)\
  Hacker News\
  Format Strings in Rust 1.58\
  Jan 14, 2022 — Table\_title: Hacker News Table\_content: | Format Strings in Rust 1.58 (rustnote.com) 261 points by jackosdev on Jan 14, 2022 | hid...
- [link](https://users.rust-lang.org/t/why-doesnt-rust-expand-f-string-beyong-macros/76162)\
  The Rust Programming Language Forum\
  Why doesn't Rust expand f\
  May 27, 2022 — Why doesn't Rust expand f-string beyong macros? \* dclong May 27, 2022, 5:37pm 1 With the release of Rust 1.58, users can use f-str...
- [link](https://internals.rust-lang.org/t/how-to-allow-arbitrary-expressions-in-format-strings/15812)\
  Rust Internals\
  How to allow arbitrary expressions in format strings\
  How to allow arbitrary expressions in format strings language design Aloso December 18, 2021, 5:18pm 1 On nightly, format! and for...

Show all

## why doesnt it introduce like js or py

**Rust doesn't introduce f-strings like Python (`f"..."`) or template literals like JavaScript (**<mark><strong><code dir="ltr">`...`</code>) primarily because it requires compile-time validation, strict type safety, and zero-cost abstractions.</strong></mark>

While scripting languages handle formatting at runtime, Rust does all the heavy lifting at compile time.

The core reasons Rust avoids the JS/Python approach include:

### 1. Zero-Cost Formatting (No Implicit Allocations)

In JavaScript and Python, a template literal or f-string **always** evaluates to a new string object in memory.

python

```
# Python implicitly allocates memory for a new string object here
message = f"Hello {name}"
```

Use code with caution.

Rust is a systems language used for embedded systems, kernels, and high-performance game engines where heap allocations must be explicitly controlled.

- If you write `println!("Hello {name}");` in Rust, **zero heap strings are allocated**. The macro directly passes the pieces to the stdout stream writer.
- If Rust used a Python-style prefix like `f"Hello {name}"`, that expression would have to evaluate to a value. If it evaluates to a `String`, it forces a hidden heap allocation, which breaks Rust’s promise of explicit, zero-cost abstractions.

### 2. Compile-Time Type and Syntax Checking

In Python and JavaScript, if you make a typo or pass a variable that can't be turned into a string, you won't find out until that specific line of code executes at runtime.

Rust checks **everything** at compile time. The compiler must parse the format string to ensure:

1. The variables exist.
2. The variables implement the `Display` or `Debug` traits (traits required for printing).
3. Any formatting modifiers (like `{:02x}` for hex padding) are valid for that specific data type.

Because Rust's core language parser handles syntax, delegating this complex layout checking to macros (like `format!`, `print!`, `write!`) keeps the core compiler clean and allows formatting errors to be caught before your program ever runs.

### 3. The "Destination" Ambiguity

In Python and JS, a formatted string is just data. In Rust, format strings are used for many different operations. If you had a native syntax like `let text = f"Hello {name}";`, it becomes ambiguous or inefficient when you want to do anything other than make a string:

| Goal                 | Rust Macro Approach (No Overhead)                                                | What a Python/JS Prefix Would Force                                                  |
| -------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Print to Console** | `println!("Hi {name}");`_(Writes bytes directly to stdout)_                      | `println(f"Hi {name}");`_(Allocates a temporary string, prints it, then deletes it)_ |
| **Write to a File**  | `write!(file, "Hi {name}");`_(Streams directly to disk buffer)_                  | `file.write(f"Hi {name}");`_(Allocates a temporary string in memory first)_          |
| **Logging**          | `log::info!("Hi {name}");`_(Can skip formatting entirely if log level is muted)_ | `log.info(f"Hi {name}");`_(Allocates the string even if the log level is disabled)_  |

### How close can you get?

If you want something that feels exactly like Python or JS, you can use third-party crates like `fstrings`. It uses Rust's procedural macro system to give you that exact syntax while preserving Rust's efficiency under the hood:

rust

```
use fstrings::f;

let name = "World";
// Looks like Python, but safely expands to format!("Hello {}", name) at compile time
let case = f!("Hello {name}");
```

Use code with caution.

Would you like to see how to use **formatting specifiers** (like padding, alignment, or rounding decimals) using Rust's native `format!` macro syntax? Or are you curious about how **procedural macros** allow third-party crates to alter Rust's syntax?

# does rust enforce match branches must be orthogonal

<mark><strong><span>No, Rust does not enforce that match branches must be orthogonal (mutually exclusive)</span></strong></mark>. Instead, Rust evaluates match arms from **top to bottom**, executing the _first_ arm that matches the value. [link](https://www.reddit.com/r/rust/comments/pqnufj/rust%5Fmatch%5Farm%5Fpriority/)

If you have overlapping or redundant arms, Rust handles them using strict ordering and compiler warnings: [link](https://internals.rust-lang.org/t/is-match-arm-order-always-defined-behaviour/16848)

### 1. Overlapping Arms are Allowed (First Match Wins)

You can write patterns where one branch overlaps with another. The compiler will always choose the higher one in the list. [link](https://www.reddit.com/r/rust/comments/pqnufj/rust%5Fmatch%5Farm%5Fpriority/)

rust

```
let number = 5;

match number {
    1..=10 => println!("Between 1 and 10"), // This executes!
    5 => println!("This is five"),           // This is unreachable, but compiles
    _ => println!("Something else"),
}
```

Use code with caution.

### 2. Redundant Patterns Trigger Warnings

While the compiler allows overlapping arms, it will trigger an **`unreachable_pattern` warning** if a lower match arm can _never_ be reached because a previous arm covers it entirely. [link](https://alexanderobregon.substack.com/p/match-control-flow-in-rust-and-pattern)

For example, compiling the code above will produce:

text

```
warning: unreachable pattern
 --> src/main.rs:6:5
  |
5 |     1..=10 => println!("Between 1 and 10"),
  |     ------ matches any value from 1 to 10
6 |     5 => println!("This is five"),
  |     ^ unreachable pattern
```

Use code with caution.

### 3. Match Guards Bypass Exhaustiveness Checks

If you use match guards (an extra `if` condition on the arm), the compiler cannot statically prove whether the branches are mutually exclusive. In this scenario, top-to-bottom evaluation order is strictly relied upon. [link](https://www.reddit.com/r/rust/comments/pqnufj/rust%5Fmatch%5Farm%5Fpriority/)

rust

```
let x = Some(5);

match x {
    Some(n) if n > 2 => println!("Greater than two"), // First check
    Some(n) if n == 5 => println!("Five"),            // Overlapping, but allowed
    Some(_) => println!("Any other number"),
    None => println!("Nothing"),
}
```

Use code with caution.

### What Rust _Does_ Enforce

Instead of forcing orthogonality, Rust enforces **exhaustiveness**. The compiler requires that your match arms account for _every possible value_ of the type being matched, which is why a catch-all block (`_`) is often used. [link](https://users.rust-lang.org/t/how-to-keep-pattern-match-branch-order/66363)

Are you trying to resolve an **unreachable pattern** warning in your code, or are you looking to optimize the **execution performance** of a large match block?

- [link](https://www.reddit.com/r/rust/comments/pqnufj/rust%5Fmatch%5Farm%5Fpriority/)\
  Reddit\
  Rust match arm priority\
  According to a Reddit user, Rust match expressions normally have mutually exclusive arms. The order of evaluation isn't guaranteed...
- [link](https://internals.rust-lang.org/t/is-match-arm-order-always-defined-behaviour/16848)\
  Rust Internals\
  Is match arm order always defined behaviour?\
  Jun 19, 2022 — Is match arm order always defined behaviour? \* gilescope June 19, 2022, 5:10pm 1 Given that reddit isn't that authoritative I thou...
- [link](https://alexanderobregon.substack.com/p/match-control-flow-in-rust-and-pattern)\
  Substack\
  Match Control Flow in Rust and Pattern Matching Mechanics\
  How Rust decides which branch runs and why others don't \* The match expression in Rust is a tightly controlled branching construct...

Show all

# all rust match syntax examples

In Rust, the `match` control flow construct is an exhaustive pattern-matching tool. It is frequently described as a "type-safe switch statement on steroids." [link](https://notes.kodekloud.com/docs/Rust-Programming/Rust-Basics/Control-Flow-Pattern-matching-with-match/page)

Below is a comprehensive guide to **every major pattern-matching syntax option** in Rust. [link](https://notes.kodekloud.com/docs/Rust-Programming/Rust-Basics/Control-Flow-Pattern-matching-with-match/page)

***

### 1. Core Basics

#### Literal Matching & Catch-All (`_`)

Matches precise scalar values. Because `match` must be **exhaustive**, the underscore `_` acts as a mandatory fallback for any unhandled variants. [link](https://rust-book.cs.brown.edu/ch06-02-match.html)

rust

```
let number = 3;
match number {
    1 => println!("One"),
    2 => println!("Two"),
    _ => println!("Anything else"), // Catch-all wildcard
}
```

Use code with caution.

#### Multiple Patterns (Or `|`)

Executes an arm if the value matches _any_ of the pipe-separated alternatives. [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)

rust

```
let x = 2;
match x {
    1 | 2 => println!("One or two"),
    3 | 4 | 5 => println!("Three, four, or five"),
    _ => println!("Something else"),
}
```

Use code with caution.

#### Ranges (`..=`)

Matches any value falling inside an inclusive range. Works primarily with integers and `char` types. [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)

rust

```
let test_score = 85;
match test_score {
    90..=100 => println!("Grade: A"),
    80..=89 => println!("Grade: B"),
    0..=79 => println!("Grade: C or below"),
    _ => println!("Invalid score"),
}
```

Use code with caution.

***

### 2. Standard Types (Option & Result)

#### Unwrapping `Option<T>`

Extracts the inner item from an option. [link](https://www.youtube.com/watch?v=QQ3crUFCn%5Fs)

rust

```
let some_value: Option<i32> = Some(42);
match some_value {
    Some(valid_num) => println!("Got an integer: {valid_num}"),
    None => println!("Found nothing"),
}
```

Use code with caution.

#### Unwrapping `Result<T, E>`

Branches natively on success or error types. [link](https://www.youtube.com/watch?v=QQ3crUFCn%5Fs)

rust

```
let response: Result<String, &'static str> = Ok(String::from("Success"));
match response {
    Ok(message) => println!("Server said: {message}"),
    Err(err_msg) => println!("Error occurred: {err_msg}"),
}
```

Use code with caution.

***

### 3. Destructuring Complex Structures

#### Tuples

Destructures positional items from a tuple. You can ignore parts using `_` or `..`. [link](https://doc.rust-lang.org/book/ch19-01-all-the-places-for-patterns.html)

rust

```
let coordinates = (10, -5, 20);
match coordinates {
    (0, y, z) => println!("On the X-origin! Y: {y}, Z: {z}"),
    (x, _, 20) => println!("Z is exactly 20. X is {x}"),
    (x, y, z) => println!("X: {x}, Y: {y}, Z: {z}"),
}
```

Use code with caution.

#### Structs

Destructures named fields. Field variables can be shorthand (matching the field name) or reassigned. [link](https://www.youtube.com/watch?v=x3VMLh3R0UM)

rust

```
struct Point { x: i32, y: i32 }
let origin = Point { x: 0, y: 15 };

match origin {
    Point { x, y: 0 } => println!("On the X axis at {x}"),
    Point { x: 0, y } => println!("On the Y axis at {y}"), // Shorthand rebinds to `y`
    Point { x, y }    => println!("Somewhere else at ({x}, {y})"),
}
```

Use code with caution.

#### Enums (With Associated Data)

Rust's most robust use case. Extracts explicit internal payloads from custom enum variants. [link](https://doc.rust-lang.org/std/keyword.match.html)

rust

```
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}

let msg = Message::Move { x: 5, y: 10 };
match msg {
    Message::Quit => println!("Quitting"),
    Message::Move { x, y } => println!("Moving to x:{x}, y:{y}"),
    Message::Write(text) => println!("Text payload: {text}"),
}
```

Use code with caution.

#### Arrays and Slices

Matches against elements within an array or slice structure. Uses `..` to indicate variable-length inner chunks. [link](https://www.youtube.com/watch?v=NNg9JR9%5Fs0Y)

rust

```
let sequence = [1, 2, 3, 4, 5];
match sequence {
    [1, 2, ..] => println!("Starts with 1 and 2"),
    [_, middle @ .., 5] => println!("Ends with 5. Sub-slice is {:?}", middle),
    _ => println!("Unmatched list shape"),
}
```

Use code with caution.

***

### 4. Advanced Matching Conditions

#### Match Guards (`if` Conditions)

Adds a runtime arbitrary conditional block to an arm. The arm matches _only_ if the guard expression returns `true`. [link](https://doc.rust-lang.org/reference/expressions/match-expr.html)

rust

```
let pair = (5, 5);
match pair {
    (x, y) if x == y => println!("They are twin numbers!"),
    (x, y) if x + y == 10 => println!("They sum to 10!"),
    (x, y) => println!("Just an ordinary pair: ({x}, {y})"),
}
```

Use code with caution.

#### Variable Bindings (`@` Operator)

Captures a value inside a variable while checking if it satisfies another condition (like a range or variant). [link](https://www.youtube.com/watch?v=xZUimOlCPdg)

rust

```
let age = 16;
match age {
    age_var @ 13..=19 => println!("Teenager detected of age: {age_var}"),
    _ => println!("Not a teenager"),
}
```

Use code with caution.

***

### 5. Returning Values (Match as an Expression)

Because `match` is an expression in Rust, you can assign its evaluated evaluation directly to a variable. [link](https://doc.rust-lang.org/rust-by-example/flow%5Fcontrol/match.html)

rust

```
let is_sunny = true;
let weather_status = match is_sunny {
    true => "Grab your sunglasses!",
    false => "Take an umbrella.",
};
```

Use code with caution.

Are you trying to resolve a specific compiler error like **"non-exhaustive patterns"**, or would you like to explore alternative shorthand macros like **`matches!`** or **`if let`** constructs?

- [link](https://doc.rust-lang.org/book/ch19-03-pattern-syntax.html)\
  Rust Documentation\
  Pattern Syntax - The Rust Programming Language\
  Patterns can be used in match expressions, let statements, and function parameters. Here are some examples of patterns: \* \*\*Matchi...
- [link](https://www.youtube.com/watch?v=x3VMLh3R0UM)\
  YouTube·Stephen Blum\
  Rust By Example: Match Destructuring Enums and Structs\
  Mar 20, 2024 — Rust By Example: Match Destructuring Enums and Structs i have found my most beloved pattern. and all of rust. in terms of his abil...\
  10:29
- [link](https://www.youtube.com/watch?v=QQ3crUFCn%5Fs)\
  YouTube·Stephen Blum\
  Rust By Example: If Let\
  Mar 27, 2024 — everything all together. so it's a nice syntax that Rust offers us. so taking a look here. we've got uh at our our first line of c...\
  11:35

Show all

# haskell pattern matching syntax examples

**Pattern matching in Haskell** allows you to deconstruct data and match specific values or shapes directly within function definitions, `case` statements, `let` bindings, or lambdas. Haskell evaluates patterns sequentially from **top to bottom**, executing the first code block that matches. [link](https://www.reddit.com/r/haskell/comments/16frkjj/can%5Fsomeone%5Fexplain%5Fpattern%5Fmatching%5Fto%5Fme/)

Below is a comprehensive guide to Haskell pattern matching syntax with common examples.

***

### 1. Basic Value Matching & Wildcards

You can match literal constants directly. The underscore `_` acts as a **wildcard pattern**, matching absolutely anything without binding it to a variable name. [link](https://stackoverflow.com/questions/2225774/haskell-pattern-matching-what-is-it)

haskell

```
-- Matching exact numeric literals
isLucky :: Int -> String
isLucky 7 = "LUCKY NUMBER SEVEN!"
isLucky 13 = "Unlucky..."
isLucky _  = "Just a regular number."  -- Catch-all wildcard
```

Use code with caution.

### 2. Tuple Patterns

Tuples are matched by mirroring their comma-separated structure within parentheses. [link](https://www.youtube.com/watch?v=e4%5F3uZXvoak)

haskell

```
-- Extracting data from a 3-tuple (similar to the built-in `fst` for pairs)
firstOfThree :: (a, b, c) -> a
firstOfThree (x, _, _) = x  -- Binds 'x' to the first element, ignores the rest
```

Use code with caution.

### 3. List Patterns

Lists can be matched by structural sugar (like `[]` or `[x, y]`) or via the cons constructor (`:`) to separate the **head** (first element) from the **tail** (the rest of the list). [link](https://en.wikibooks.org/wiki/Haskell/Pattern%5Fmatching)

haskell

```
describeList :: [a] -> String
describeList []       = "The list is empty."
describeList [x]      = "The list has exactly one element."
describeList (x:y:[]) = "The list has exactly two elements."
describeList (x:xs)   = "The list is long. The first element is bound to x."
```

Use code with caution.

### 4. Custom Data Types (Algebraic Data Types)

You pattern match custom types by specifying their data constructors and providing variable bindings for their internal values. [link](https://www.haskell.org/tutorial/patterns.html)

haskell

```
data Shape = Circle Double | Rectangle Double Double

area :: Shape -> Double
area (Circle r)        = pi * r * r
area (Rectangle w h)   = w * h
```

Use code with caution.

### 5. "As" Patterns (`@`)

An **as-pattern** allows you to break an item apart into its structure while still retaining a reference name for the _entire_ original object. [link](https://www.youtube.com/watch?v=c-l5VBTmLFM)

haskell

```
-- 'allStr' points to the entire string, while 'firstChar' extracts just the head
getFirstAndWhole :: String -> String
getFirstAndWhole [] = "Empty string!"
getFirstAndWhole allStr@(firstChar:_) = "The first char of " ++ allStr ++ " is " ++ [firstChar]
```

Use code with caution.

### 6. Case Expressions

Pattern matching doesn't have to happen at the function boundary. You can use a `case ... of` block anywhere inside a expression. [link](https://academy.fpblock.com/blog/pattern-matching/)

haskell

```
describeNumber :: Int -> String
describeNumber n = "The number is " ++ case n of
    0 -> "zero"
    1 -> "one"
    _ -> "something else"
```

Use code with caution.

***

### 💡 Quick Rules to Remember

- **Order Matters:** Always put your most specific patterns at the top and your catch-all (wildcard or generic variable) at the bottom. If you swap them, the specific cases will become dead code.
- **No Duplicate Variables:** You cannot match `equalPairs (x, x) = True`. Patterns must be linear. Use guards instead (`equalPairs (x, y) | x == y = True`). [link](https://www.reddit.com/r/haskell/comments/16frkjj/can%5Fsomeone%5Fexplain%5Fpattern%5Fmatching%5Fto%5Fme/)

Would you like to see how to combine these patterns with **guards**, or do you need an example utilizing a specific type of data structure like **Record syntax**?

- [link](https://www.reddit.com/r/haskell/comments/16frkjj/can%5Fsomeone%5Fexplain%5Fpattern%5Fmatching%5Fto%5Fme/)\
  Reddit\
  Can someone explain Pattern Matching to me? : r/haskell\
  sacheie • 3y ago • Edited 3y ago Pattern matching is like the "switch" keyword from most languages, except instead of comparing ag...
- [link](https://stackoverflow.com/questions/2225774/haskell-pattern-matching-what-is-it)\
  Stack Overflow\
  Haskell pattern matching - what is it?\
  Here are some examples of pattern matching in Haskell: \* \*\*Direct value matching\*\* Matching against literal values directly. For e...
- [link](https://www.haskell.org/tutorial/patterns.html)\
  Haskell Language\
  4 Case Expressions and Pattern Matching - Haskell.org\
  Patterns are not "first-class;" there is only a fixed set of different kinds of patterns. We have already seen several examples of...

Show all

# haskell polymorphism examples

In Haskell, polymorphism falls primarily into two distinct categories: **parametric polymorphism** and **ad-hoc polymorphism**. [link](https://www.haskell.org/haskellwiki/Polymorphism)

Here is a breakdown of how they work with practical examples.

***

### 1. Parametric Polymorphism

Parametric polymorphism occurs when a function or data type is defined using **unconstrained type variables**. The function executes the exact same uniform logic regardless of the concrete type substituted into the variable. This is the equivalent of "generics" or "templates" in other languages. [link](https://eli.thegreenplace.net/2018/return-type-polymorphism-in-haskell/)

#### Example: The Identity Function

The simplest example is the standard library's `id` function, which merely returns whatever value it receives. [link](https://haskellforall.com/2015/10/polymorphism-for-dummies)

haskell

```
-- 'a' is a type variable representing any type
id :: a -> a
id x = x
```

Use code with caution.

Because `a` has no constraints, you can pass any type to it:

haskell

```
id 4          -- Works for Int, returns 4
id "Haskell"  -- Works for String, returns "Haskell"
```

Use code with caution.

#### Example: Mapping Over Lists

Functions that manipulate structural shapes (like lists) without evaluating the data inside them are also parametrically polymorphic. [link](https://eli.thegreenplace.net/2018/return-type-polymorphism-in-haskell/)

haskell

```
map :: (a -> b) -> [a] -> [b]
map _ []     = []
map f (x:xs) = f x : map f xs
```

Use code with caution.

***

### 2. Ad-hoc Polymorphism (Overloading)

Ad-hoc polymorphism allows a single function name to have **different implementations for different types**. Haskell achieves this through **typeclasses**, which act like interfaces. If a type variable is bounded by a typeclass, it appears to the left of the `=>` symbol in a type signature. [link](https://www.cs.toronto.edu/~lczhang/324/lab/lab09.pdf)

#### Example: Implementing a Custom Typeclass

Let's create a custom `Describable` typeclass that behaves differently depending on whether it's dealing with a person's profile or a store item.

haskell

```
-- 1. Define the typeclass interface
class Describable a where
    describe :: a -> String

-- 2. Define custom data types
data User = User String Int         -- Name, Age
data Product = Product String Double -- Item name, Price

-- 3. Provide ad-hoc implementations (Instances)
instance Describable User where
    describe (User name age) = name ++ " is " ++ show age ++ " years old."

instance Describable Product where
    describe (Product item price) = item ++ " costs $" ++ show price
```

Use code with caution.

When you call `describe`, Haskell evaluates the type of the argument at compile time and dispatches it to the correct implementation:

haskell

```
describe (User "Alice" 30)     -- Returns: "Alice is 30 years old."
describe (Product "Laptop" 999.0) -- Returns: "Laptop costs $999.0"
```

Use code with caution.

***

### Comparison Summary

| Feature            | Parametric Polymorphism       | Ad-hoc Polymorphism                 |
| ------------------ | ----------------------------- | ----------------------------------- |
| **Mechanism**      | Type variables (`a`, `b`)     | Typeclasses (`Eq`, `Show`, custom)  |
| **Behavior**       | Identical logic for all types | Completely different logic per type |
| **OOP Analogy**    | Generics / Templates          | Interfaces / Overloading            |
| **Type Signature** | `head :: [a] -> a`            | `(==) :: Eq a => a -> a -> Bool`    |

Would you like to see how to implement more advanced variations, such as **multi-parameter typeclasses** or **higher-kinded types**? Let me know what you are building or trying to model!

- [link](https://www.haskell.org/haskellwiki/Polymorphism)\
  Haskell Language\
  Polymorphism - HaskellWiki - Haskell.org\
  Jan 21, 2015 — Most polymorphism in Haskell falls into one of two broad categories: parametric polymorphism and ad-hoc polymorphism. Parametric p...
- [link](https://eli.thegreenplace.net/2018/return-type-polymorphism-in-haskell/)\
  Eli Bendersky's website\
  Return type polymorphism in Haskell - Eli Bendersky's website\
  Jan 30, 2018 — Parametric vs. ad-hoc polymophism. It's worth beginning with a quick discussion of the two most common kinds of compile-time polym...
- [link](https://haskellforall.com/2015/10/polymorphism-for-dummies)\
  Haskell for all\
  Polymorphism for dummies - Haskell for all\
  Oct 2, 2015 — This tutorial explains how polymorphism is implemented under the hood in Haskell using the least technical terms possible. The sim...

Show all

# haskell monad examples

In Haskell, a **monad** is a design pattern used to chain computations together while automatically managing underlying side effects or contexts (like failure, state, or I/O). [link](https://www.haskell.org/haskellwiki/Monad)

At its core, a Monad is defined by two primary operations:

- `return` (or `pure`): Takes a raw value and wraps it into the monadic context.
- `>>=` (pronounced **"bind"**): Takes a wrapped value, unwraps it, and passes it to a function that generates a new wrapped value. [link](https://www.haskell.org/haskellwiki/All%5FAbout%5FMonads)

Here are the four most common, practical examples of Monads in Haskell, ranging from simple to advanced.

***

### 1. The `Maybe` Monad (Handling Potential Failure)

The [Maybe Monad](https://www.haskell.org/haskellwiki/Simple%5Fmonad%5Fexamples) is used for sequential operations where any step might return `Nothing`. If any step fails, the entire chain cleanly evaluates to `Nothing` without crashing. [link](https://www.youtube.com/watch?v=%5FGk%5FlwhJMzk\&t=18)

Imagine looking up a user, getting their profile, and then fetching their specific preference:

haskell

```
-- Dummy lookup functions
findUser :: Int -> Maybe String
findUser 1 = Just "Alice"
findUser _ = Nothing

getProfile :: String -> Maybe String
getProfile "Alice" = Just "Alice's Profile"
getProfile _       = Nothing

getPreference :: String -> Maybe String
getPreference "Alice's Profile" = Just "Dark Mode"
getPreference _                 = Nothing
```

Use code with caution.

#### Explicitly Chaining with Bind (`>>=`)

haskell

```
-- If any lookup returns Nothing, the whole chain returns Nothing
getUserPreference :: Int -> Maybe String
getUserPreference userId =
    findUser userId >>= getProfile >>= getPreference
```

Use code with caution.

#### Cleaned up using `do`-notation

Haskell provides `do`-notation as syntactic sugar to make monadic code look sequential and imperative: [link](https://learnyouahaskell.github.io/a-fistful-of-monads.html)

haskell

```
getUserPreferenceDo :: Int -> Maybe String
getUserPreferenceDo userId = do
    user       <- findUser userId      -- If Nothing, stops here and returns Nothing
    profile    <- getProfile user
    preference <- getPreference profile
    return preference
```

Use code with caution.

***

### 2. The List Monad (Non-Deterministic Computation)

The list monad represents computations that can return **multiple possible results**. When you chain operations on a list, Haskell applies the next step to _every single item_ in the list, effectively exploring all paths (like a nested loop). [link](https://stackoverflow.com/questions/15726733/simple-examples-to-illustrate-category-monoid-and-monad)

haskell

```
-- Generates pairs of numbers where the second number is larger than the first
generatePairs :: [Int] -> [(Int, Int)]
generatePairs xs = do
    x <- xs          -- Extract each element from the list
    y <- [x..5]      -- Generate a new list based on x
    return (x, y)

-- Example invocation:
-- generatePairs [1, 2]
-- Output: [(1,1),(1,2),(1,3),(1,4),(1,5),(2,2),(2,3),(2,4),(2,5)]
```

Use code with caution.

***

### 3. The `IO` Monad (Interacting with the Outside World)

Because Haskell is a pure functional language, functions cannot have hidden side-effects (like modifying terminal text or reading files). The [IO Monad](https://mmhaskell.com/monads/tutorial) isolates these side-effects so the rest of your program can stay purely functional. [link](https://www.youtube.com/watch?v=ti3mrLm3Sv4)

haskell

```
main :: IO ()
main = do
    putStrLn "What is your name?"
    name <- getLine                   -- Extracts the String value out of the IO context
    putStrLn ("Hello, " ++ name ++ "!")
```

Use code with caution.

***

### 4. The `State` Monad (Simulating Mutable State)

Haskell variables are completely immutable. When you want to pass a changing piece of "state" through multiple functions, doing it manually gets messy. The [State Monad](https://brandon.si/code/the-state-monad-a-tutorial-for-the-confused/) passes a background state state implicitly behind the scenes. [link](https://www.reddit.com/r/haskell/comments/10jw67n/please%5Fexplain%5Fmonads%5Fto%5Fme%5Flike%5Fim%5F12/)

You can manage state using `get` (to read the state) and `put` (to overwrite it) from `Control.Monad.State`:

haskell

```
import Control.Monad.State

-- A simple game state transition using an Int counter
manageCounter :: State Int String
manageCounter = do
    currentCount <- get               -- Fetch current state
    if currentCount > 2
        then do
            put (currentCount + 1)    -- Update state
            return "Counter incremented!"
        else do
            put 0                     -- Reset state
            return "Counter reset!"

-- To run it with an initial state of 3:
-- runState manageCounter 3
-- Output: ("Counter incremented!", 4)
```

Use code with caution.

***

### Summary of Differences

| Monad           | What the Context Represents                  | What `>>=` Automatically Handles                     |
| --------------- | -------------------------------------------- | ---------------------------------------------------- |
| **`Maybe`**     | Potential failure (`Just a` or `Nothing`)    | Aborts the chain early if a `Nothing` occurs         |
| **`[]` (List)** | Multiple possible outcomes (non-determinism) | Loops and flattens nested lists                      |
| **`IO`**        | Interaction with the system environment      | Guarantees strict sequential execution order         |
| **`State`**     | A hidden, threadable piece of data           | Passes the state parameter from function to function |

Would you like to dive deeper into one of these specific monads, or see how to implement **your own custom Monad** by writing an `instance Monad` declaration? [link](https://www.reddit.com/r/haskell/comments/10jw67n/please%5Fexplain%5Fmonads%5Fto%5Fme%5Flike%5Fim%5F12/)

- [link](https://www.reddit.com/r/haskell/comments/10jw67n/please%5Fexplain%5Fmonads%5Fto%5Fme%5Flike%5Fim%5F12/)\
  Reddit\
  Please explain monads to me like I'm 12. : r/haskell - Reddit\
  Being good programmers, we notice some patterns and abstract them. For example, all the functions have SomeState -> (a, SomeState)
- [link](https://www.haskell.org/haskellwiki/All%5FAbout%5FMonads)\
  Haskell Language\
  All About Monads - HaskellWiki\
  May 27, 2024 — That is the subject of the next chapter. \* The Monad class In Haskell, there is a standard Monad class that defines the names and ...
- [link](https://brandon.si/code/the-state-monad-a-tutorial-for-the-confused/)\
  brandon.si\
  The State Monad: a tutorial for the confused?\
  Feb 16, 2012 — The Data Declaration: Yikes! Let's try to get our head on straight and figure this out: First of all the State monad is just an ab...

Show all

# haskell io monad examples

In Haskell, **the `IO` monad is the gateway to side effects**. Because Haskell is a pure functional programming language, you cannot read from files, print to the console, or fetch data from networks without wrapping those actions in an `IO` type. [link](https://www.haskell.org/haskellwiki/Introduction%5Fto%5FIO)

An execution blueprint of type `IO a` does not perform actions immediately; instead, it acts as a set of instructions that the Haskell runtime executes sequentially when assigned to `main`. [link](https://www.reddit.com/r/haskell/comments/44vecd/can%5Fsomeone%5Fexplain%5Fthe%5Fbasics%5Fof%5Fio%5Fand%5Fto%5Fme/)

Here are key examples of using the `IO` monad, ranging from basic terminal interaction to file handling and mixing pure code with input/output.

***

### 1. Basic Console I/O (`do` notation)

The most common way to sequence `IO` actions is using `do` notation, which allows you to write sequential instructions that mimic imperative code. [link](https://www.haskell.org/tutorial/io.html)

haskell

```
-- main has the type IO (), which means it executes side effects and returns no useful value.
main :: IO ()
main = do
    putStrLn "What is your name?"  -- Prints a line to the console
    name <- getLine                -- Extracts the String value out of IO String
    putStrLn ("Hello, " ++ name ++ "!")
```

Use code with caution.

### 2. Under the Hood: The Desugared Version (`>>=` and `>>`)

`do` notation is just syntactic sugar. Underneath, Haskell chains actions together using the monadic bind operators: [link](https://www.youtube.com/watch?v=fCoQb-zqYDI)

- `>>=` (bind) passes the result of the left action to a function returning a new action.
- `>>` sequences two actions when you don't care about the intermediate return value. [link](https://www.haskell.org/haskellwiki/Monad)

Here is exactly how the compiler reads the `main` loop from the previous example:

haskell

```
mainExplicit :: IO ()
mainExplicit =
    putStrLn "What is your name?" >>
    getLine >>= \name ->
    putStrLn ("Hello, " ++ name ++ "!")
```

Use code with caution.

### 3. Injecting Pure Functions with `return`

In Haskell, `return` does not exit a function. Instead, it **lifts a pure value into a monadic context**. This is useful when you perform some calculation and need to wrap it back into `IO`. [link](https://priyankamondal-11139.medium.com/haskell-io-monad-b4a825b59269)

haskell

```
-- A pure function that reverses text (No side effects)
reverseString :: String -> String
reverseString str = reverse str

-- Combining pure code inside an IO environment
getAndReverse :: IO ()
getAndReverse = do
    putStrLn "Type something to reverse:"
    input <- getLine

    -- We pass input to a pure function
    let processed = reverseString input

    -- return wraps our pure String into an IO String context
    finalValue <- return ("Reversed result: " ++ processed)

    putStrLn finalValue
```

Use code with caution.

### 4. Reading and Writing Files

The `IO` monad also handles interactions with your operating system's filesystem. [link](https://mmhaskell.com/monads/tutorial)

haskell

```
import System.IO

fileExample :: IO ()
fileExample = do
    -- Writing to a file
    writeFile "example.txt" "Line 1: Learning Haskell\nLine 2: The IO Monad."

    -- Reading from a file
    contents <- readFile "example.txt"

    putStrLn "--- File Contents ---"
    putStr contents
```

Use code with caution.

***

### Directly Comparing Key `IO` Primitives

| Function   | Type Signature          | Purpose                                                               |
| ---------- | ----------------------- | --------------------------------------------------------------------- |
| `putStrLn` | `String -> IO ()`       | Takes a String and prints it to the terminal with a trailing newline. |
| `getLine`  | `IO String`             | Reads a single line of user text from standard input.                 |
| `readFile` | `FilePath -> IO String` | Takes a path to a file and returns its complete contents.             |
| `return`   | `a -> IO a`             | Wraps a completely pure value inside an `IO` action.                  |

Would you like to see how to handle errors and **exceptions** inside the `IO` monad, or would you prefer an example of using `IO` alongside other monads via **monad transformers** (like `StateT`)? [link](https://cstml.github.io/2021/07/22/State-Monad.html)

- [link](https://www.haskell.org/tutorial/io.html)\
  Haskell Language\
  A Gentle Introduction to Haskell: IO\
  I/O actions can be sequenced using the do notation. The do notation introduces a sequence of statements which are executed in orde...
- [link](https://www.reddit.com/r/haskell/comments/44vecd/can%5Fsomeone%5Fexplain%5Fthe%5Fbasics%5Fof%5Fio%5Fand%5Fto%5Fme/)\
  Reddit·r/haskell\
  Can someone explain the basics of IO and >> to me? : r/haskell\
  Feb 9, 2016 — First thing to understand, is that a monad is not a box. It doesn't contain anything. It is just a description of a computation. "
- [link](https://www.haskell.org/haskellwiki/Introduction%5Fto%5FIO)\
  Haskell Language\
  Introduction to IO - HaskellWiki\
  Introduction to IO (This page is intended as a quick introduction to how IO is treated in Haskell. It doesn't describe everything ...

Show all


# 