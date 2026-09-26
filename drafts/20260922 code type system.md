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


# all haskell data syntax

In Haskell, you define custom data types using the **`data`** keyword. Haskell relies heavily on Algebraic Data Types (ADTs), which allow you to create types by combining other types via **sums** (alternatives) and **products** (combinations). [link](https://www.haskell.org/haskellwiki/type)

Here is the complete syntax breakdown for declaring data in Haskell, ranging from standard Haskell 98 to modern extensions like GADTs. [link](https://downloads.haskell.org/~ghc/7.2.1/docs/html/users%5Fguide/data-type-extensions.html)

***

### 1. Basic Data Declarations

Every type and constructor name in a data declaration **must begin with a capital letter**. [link](https://medium.com/@james%5F32022/haskell-data-types-in-5-steps-a9ebde8e0581)

#### Sum Types (Enumerations)

A sum type represents an "OR" choice between different constructors separated by a vertical bar (`|`). [link](https://medium.com/@james%5F32022/haskell-data-types-in-5-steps-a9ebde8e0581)

haskell

```
data Color = Red | Green | Blue
```

Use code with caution.

#### Product Types

A product type represents an "AND" combination, grouping multiple fields together under a single constructor. [link](https://www.youtube.com/watch?v=C-pFHoYsDhs\&t=116)

haskell

```
-- Constructor name can match the type name
data Point = Point Float Float
```

Use code with caution.

#### Sum-of-Products

You can combine both rules to create complex types with multiple structural variations. [link](https://www.cse.chalmers.se/edu/course.2014/TDA452/haskell-syntax.html)

haskell

```
data Shape = Circle Float
           | Rectangle Float Float
           | PointOnly Point
```

Use code with caution.

***

### 2. Parametric (Polymorphic) Types

You can make data types generic by adding type variables (written in lowercase) after the type name. [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

haskell

```
-- Custom definition similar to the standard library 'Maybe'
data Optional a = Empty | Present a

-- Custom recursive linked list
data List a = Nil | Cons a (List a)
```

Use code with caution.

***

### 3. Record Syntax

When a data type has many fields, using positional arguments becomes confusing. **Record syntax** names the fields, which automatically creates getter functions for you. [link](https://hackage.haskell.org/package/CheatSheet-1.11/src/CheatSheet.pdf)

haskell

```
data User = User
  { userId    :: Int
  , userName  :: String
  , userEmail :: String
  } deriving (Show)
```

Use code with caution.

- **Creating a record:** `val = User { userId = 1, userName = "Alice", userEmail = "a@ex.com" }`
- **Accessing a field:** `userName val` (returns `"Alice"`)
- **Updating a record:** `newVal = val { userName = "Bob" }` [link](https://mmhaskell.com/haskell-data/basics)

***

### 4. Automatic Class Deriving

You can tell the compiler to automatically generate boilerplate behavior (like string formatting or equality checks) using the `deriving` clause. [link](https://www.haskell.org/haskellwiki/type)

haskell

```
data Status = Pending | Active | Inactive
  deriving (Eq, Ord, Show, Read, Enum, Bounded)
```

Use code with caution.

***

### 5. Advanced & Extension Syntax (GHC)

Modern Haskell (`GHC`) expands on `data` declarations with powerful type extensions. [link](https://downloads.haskell.org/~ghc/8.0.2/docs/html/users%5Fguide/glasgow%5Fexts.html)

#### GADTs (Generalized Algebraic Data Types)

Activated via `{-# LANGUAGE GADTs #-}`, this allows you to explicitly provide the type signatures for constructors, making it possible to restrict return types. [link](https://downloads.haskell.org/~ghc/7.2.1/docs/html/users%5Fguide/data-type-extensions.html)

haskell

```
data Expr a where
    LitInt  :: Int  -> Expr Int
    LitBool :: Bool -> Expr Bool
    Add     :: Expr Int -> Expr Int -> Expr Int
```

Use code with caution.

#### Strictness Flags (`!`)

By default, Haskell data fields are evaluated lazily. You can force a field to evaluate immediately upon data creation by prefixing the type with an exclamation point (`!`). [link](https://www.haskell.org/haskellwiki/Maintaining%5Flaziness)

haskell

```
-- Forces the Int and Float to be evaluated eagerly
data StrictPoint = StrictPoint !Int !Float
```

Use code with caution.

#### Type Data (`{-# LANGUAGE TypeData #-}`)

Introduced in modern GHC versions, `type data` allows you to declare data types that exist **only at the type level** (for advanced type-driven design), saving runtime overhead. [link](https://ghc.gitlab.haskell.org/ghc/doc/users%5Fguide/exts/type%5Fdata.html)

haskell

```
type data StatusKind = Open | Closed
```

Use code with caution.

***

### Alternative Type Keywords Comparison

Haskell has two other keywords related to type definition that are frequently confused with `data`: [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

| Keyword       | Purpose                                                                          | Overhead           | Example                        |
| ------------- | -------------------------------------------------------------------------------- | ------------------ | ------------------------------ | --- |
| **`data`**    | Creates a brand new structural algebraic type.                                   | Small runtime box. | `data Flag = Yes               | No` |
| **`newtype`** | Renames an _existing single type_ for safety; exactly 1 constructor and 1 field. | Zero runtime cost. | `newtype Email = Email String` |
| **`type`**    | Creates a simple alias (shortcut) for an existing type.                          | Zero runtime cost. | `type Phone = String`          |

Would you like to see how to **pattern match** against these data definitions in a function, or are you looking to implement a specific data structure like a **Binary Tree**? [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

- [link](https://www.haskell.org/haskellwiki/type)\
  Haskell Language\
  Type - HaskellWiki - Haskell.org\
  Aug 22, 2026 — One introduces, or declares, a type in Haskell via the data statement. In general a data declaration looks like: data \[context =>]
- [link](https://medium.com/@james%5F32022/haskell-data-types-in-5-steps-a9ebde8e0581)\
  Medium\
  Haskell Data Types in 5 Steps - Medium\
  People often speak of a dichotomy between “object oriented” programming and “functional” programming. Haskell falls into the latte...
- [link](https://www.youtube.com/watch?v=C-pFHoYsDhs\&t=116)\
  YouTube·James Hobson\
  Haskell - Tutorial 3 - Data Types\
  Oct 5, 2020 — The next way to define types, which is more interesting, involves building types from scratch using the \`data\` keyword in Haskell.\
  4m

Show all

# all haskell data syntax examples

In Haskell, custom data types are declared using the **`data`** keyword. Haskell relies on **Algebraic Data Types (ADTs)**, which let you create data structures ranging from simple enumerations to complex recursive structures. [link](https://www.haskell.org/haskellwiki/type)

Here is a comprehensive breakdown of all the core `data` syntax variations in Haskell.

***

### 1. Enumerations (Sum Types)

An enumeration represents a type that can be exactly one of several distinct values. Each constructor takes no arguments. [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

haskell

```
-- | A simple type with three distinct value constructors
data Direction = North | East | South | West
    deriving (Show, Eq) -- Deriving automatically implements standard behaviors
```

Use code with caution.

### 2. Product Types (Constructors with Arguments)

A product type bundles multiple values together into a single structure. The constructor is followed by a space-separated sequence of the field types. [link](https://www.youtube.com/watch?v=C-pFHoYsDhs\&t=116)

haskell

```
-- | Point takes two Double values (X and Y coordinates)
data Point = Point Double Double
    deriving (Show, Eq)
```

Use code with caution.

_Note: The type name (`Point`) and the constructor name (`Point`) can be identical without conflict._

### 3. Record Syntax (Named Fields)

When a type has many fields, positional arguments become confusing. Record syntax assigns names to each field, which Haskell automatically transforms into getter functions. [link](https://mmhaskell.com/haskell-data/basics)

haskell

```
-- | A Person type with named fields
data Person = Person
  { personName :: String
  , personAge  :: Int
  , personCity :: String
  } deriving (Show, Eq)

-- Example usage:
-- let user = Person { personName = "Alice", personAge = 30, personCity = "Boston" }
-- personName user -> returns "Alice"
```

Use code with caution.

### 4. Parameterized / Polymorphic Types

You can add lowercase type variables to a data declaration to make it work with any type (similar to Generics in other languages). [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

haskell

```
-- | A custom variant of Haskell's built-in Maybe type
data Optional a = Empty | Full a
    deriving (Show, Eq)
```

Use code with caution.

### 5. Recursive Types

A data declaration can refer to itself within its own constructor definitions. This is how structures like lists and trees are created. [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

haskell

```
-- | A classic binary tree structure
data Tree a = EmptyNode | TreeNode (Tree a) a (Tree a)
    deriving (Show, Eq)
```

Use code with caution.

### 6. Infix Constructors

If a constructor name starts with a colon (`:`), it can be used inline as an operator. [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)

haskell

```
-- | A custom linked list using an infix operator constructor
data List a = Nil | a :+ (List a)
    deriving (Show, Eq)

-- Example usage:
-- let myInfixList = 1 :+ 2 :+ 3 :+ Nil
```

Use code with caution.

### 7. GADT Syntax (Generalized Algebraic Data Types)

Using the GHC extension `GADTs`, you can explicitly write out the type signatures of the value constructors using a `where` block. This provides maximum clarity and unlocks advanced type safety features. [link](https://ghc.gitlab.haskell.org/ghc/doc/users%5Fguide/exts/gadt%5Fsyntax.html)

haskell

```
{-# LANGUAGE GADTs #-}

-- | The same Tree structure rewritten using explicit GADT syntax
data GadtTree a where
    GadtEmpty :: GadtTree a
    GadtNode  :: GadtTree a -> a -> GadtTree a -> GadtTree a
```

Use code with caution.

***

### Key Rules to Remember

- **Capitalization:** Type names and value constructors **must** start with an uppercase letter. Type variables must start with a lowercase letter.
- **`deriving`:** Appending `deriving (Show, Eq, Ord)` instructs GHC to automatically generate formatting, equality testing, and sorting boilerplate. [link](https://www.haskell.org/onlinereport/basic.html)

Would you like to see how to **pattern match** against one of these specific types, or do you want an explanation on how `data` differs from **`newtype`** and **`type`**?

- [link](https://www.youtube.com/watch?v=sjrNXcpbagg\&t=1)\
  YouTube·Well-Typed\
  02-14 data, newtype, type (Introduction to Haskell)\
  Jun 8, 2024 — In this video, the speaker aims to summarize the different Haskell language constructs for working with types, namely \`data\`, \`new...\
  10m
- [link](https://www.youtube.com/watch?v=C-pFHoYsDhs\&t=116)\
  YouTube·James Hobson\
  Haskell - Tutorial 3 - Data Types\
  Oct 5, 2020 — The next way to define types, which is more interesting, involves building types from scratch using the \`data\` keyword in Haskell.\
  4m
- [link](https://www.haskell.org/haskellwiki/type)\
  Haskell Language\
  Type - HaskellWiki\
  Aug 22, 2026 — Data declarations One introduces, or declares, a type in Haskell via the data statement. In general a data declaration looks like:

Show all

