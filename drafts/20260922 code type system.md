# how to design the type system of a programming language

1:31 AM

Designing a type system for a programming language requires <mark>balancing<span> </span><strong>mathematical soundness, compiler performance, and developer experience</strong></mark>. A type system is simply a set of rules that assigns a "type" to program constructs (like expressions, variables, and functions) to prevent illegal or erroneous behaviors. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1c3m7im/designing%5Ftype%5Fsystem/)

The fundamental process of designing a type system can be broken down into five major phases.

***

### 1. Define Your High-Level Philosophy

Before writing code or formalizing rules, establish the fundamental mechanics of your language: [link](https://courses.grainger.illinois.edu/cs421/fa2018/CS421A/resources/cardelli.pdf)

- **Static vs. Dynamic:** Will types be checked at compile-time (**Static**, like Rust/Go) to catch bugs early and optimize performance, or at runtime (**Dynamic**, like Python/JavaScript) for faster prototyping and flexibility? [link](https://en.wikipedia.org/wiki/Type%5Fsystem)
- **Explicit vs. Implicit (Inference):** Will developers have to write out every type (`int x = 5`), or will your compiler figure it out automatically via type inference (`x := 5`), similar to Haskell or TypeScript? [link](https://web.eecs.umich.edu/~weimerw/2006-615/reading/Cardelli%5FTypeSystems.pdf)
- **Nominal vs. Structural:** Is type compatibility determined by its explicit name (Nominal, like Java classes) or strictly by its shape/structure (Structural, like TypeScript interfaces or Go structural typing)? [link](https://www.cnpp.dev/blog/practical-type-system/01-what-why-how/index.html)

***

### 2. Design the Type Vocabulary (The AST Representation)

In your compiler, types are represented as data structures—usually integrated into or alongside your Abstract Syntax Tree (AST). You need to design the data representation for: [link](https://www.reddit.com/r/ProgrammingLanguages/comments/v5zwlw/resources%5Ffor%5Fbuilding%5Fa%5Ftypechecker/)

- **Primitives:** Fixed-size atomic types like `Bool`, `Int32`, `Float64`, and `String`. [link](https://mortoray.com/modelling-type-systems-the-basics/)
- **Type Constructors:** Structural forms that take other types as arguments. Examples include:
  - _Functions:_ `(Type) -> ReturnType`
  - _Compound Data:_ Records/Structs or Algebraic Data Types (Tuples, Enums)
  - _Pointers/References:_ `Pointer(T)` [link](https://sdiehl.github.io/typechecker-zoo/foundations/type-systems.html)
- **Generics / Type Variables:** Placeholders (like `T` in `List<T>`) that allow code reuse. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1c3m7im/designing%5Ftype%5Fsystem/)

***

### 3. Establish the Typing Rules (Judgments & Inference)

A type system is formalized as a series of logic rules, typically written as **typing judgments**. A typical rule asserts: _"In a given context (called Γ or Gamma), an expression e has type T"_. [link](https://www.youtube.com/watch?v=IbjoA5xVUq0\&t=24)

You must write down rules for every expression in your syntax tree: [link](https://sdiehl.github.io/typechecker-zoo/foundations/type-systems.html)

- **Literal Rules:** An integer token automatically gets the type `Int`.
- **Operator Rules:** If `a` is `Int` and `b` is `Int`, then `a + b` is `Int`. What happens if `a` is `Int` and `b` is `Float`? You must explicitly design whether this causes a type error or triggers a mathematical coercion.
- **Function Application:** If a function has the type `A -> B` and you pass it an argument of type `A`, the resulting expression evaluates to type `B`. [link](https://softwareengineering.stackexchange.com/questions/333643/what-is-a-type-system)

***

### 4. Choose Your Relationship Model

How do different types interact with one another?

- **Type Safety & Coercion:** If someone tries to add a string and an integer, does your language throw an error (strong safety) or implicitly force the integer into a string (weak/coercive)? [link](https://softwareengineering.stackexchange.com/questions/333643/what-is-a-type-system)
- **Subtyping vs. Traits/Typeclasses:** Decide how you will handle polymorphism. Will you allow object-oriented subtyping hierarchies (`Dog` is a subtype of `Animal`), or will you use an interface/trait model where behaviors are decoupled from data structures, like Rust Traits or Haskell Typeclasses? [link](https://www.youtube.com/watch?v=xv-WApd-pSY)

***

### 5. Implement the Type Checker

The type checker is a dedicated pass in your compiler pipeline that runs after parsing but before code generation. [link](https://www.youtube.com/watch?v=n9zVTtG%5FAag\&t=46)

```
[Source Code] ──> [Parser] ──> [Untyped AST] ──> [Type Checker] ──> [Typed AST / IR]
```

- **The Environment (Symbol Table):** Maintain a scoped dictionary map (`Gamma`) that keeps track of what variables and functions are currently declared and what their types are.
- **Bidirectional Typing:** For an easy implementation of static typing, consider a bidirectional type checker. It alternates between two modes: **inferring** the type of an expression from its sub-expressions, and **checking** an expression against an expected type propagated from its surrounding context.
- **Unification (For Inference):** If you support full type inference without annotations, look into implementing the **Hindley-Milner (HM) algorithm** (specifically Algorithm W), which uses standard graph unification to resolve unknown type variables. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1c3m7im/designing%5Ftype%5Fsystem/)

For deep reference material on formalizing these logic steps, the academic gold standard is the textbook _Types and Programming Languages_ (TAPL) by Benjamin C. Pierce. [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1c3m7im/designing%5Ftype%5Fsystem/)

To help narrow down the implementation architecture, tell me:

- Will your language be **statically** or **dynamically** typed?

- What are some of the **unique features** or core goals of your language (e.g., performance, ease of use, mathematical purity)?

- Are you planning to implement features like **generics**, **subtyping**, or **type inference**?

- [link](https://www.reddit.com/r/ProgrammingLanguages/comments/1c3m7im/designing%5Ftype%5Fsystem/)\
  Reddit\
  Designing type system : r/ProgrammingLanguages - Reddit\
  For example, if you have a raw type List and you have a linked list (Int -> S :: S -> T :: List), with the last node being List (t...

- [link](https://en.wikipedia.org/wiki/Type%5Fsystem)\
  Wikipedia\
  Type system - Wikipedia\
  A type system can detect and prevent some of these mismatches. When a type mismatch is detected, it is called a type error. The ty...

- [link](https://www.youtube.com/watch?v=Dbntndu2ip0\&t=32)\
  YouTube·Chris Hawkes\
  What Is A Type System In Programming? Strong vs. Weak\
  What Is A Type System In Programming? Strong vs. Weak so we're going to look at really what do those type systems mean and and um ...\
  9m

Show all

