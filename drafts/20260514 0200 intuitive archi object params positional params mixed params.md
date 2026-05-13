<!-- choose "always". simple one. though it's deprecated at last. -->

<!-- choose incomprehensible at last. (inspired the ambiguity of incomprehensive) -->

#

sometimes we write params like f({prop: foo, bar: 123}), sometimes we write add(a, b, c). what are they called.

1\. Object Parameters (Named Arguments)

The syntax `f({prop: foo, bar: 123})` passes a single object literal as an argument.

- **Primary Name:** Named Arguments (or Named Parameters).
- **JavaScript Pattern:** Object Destructuring in function signatures.
- **Core Benefit:** Argument order does not matter.
- **Best Use:** Functions with more than three optional configurations. \[[1](https://medium.com/@saradadeviyerubandi/understanding-named-parameters-in-c-9cca9682bc17), [2](https://www.php.net/manual/uk/functions.arguments.php), [3](https://docs.typo3.org/m/typo3/reference-coreapi/main/en-us/PhpArchitecture/NamedArguments.html), [4](https://www.hashbangcode.com/article/default-function-parameters-php)]

javascript

```
// Definition using destructuring
function f({ prop, bar }) {
  console.log(prop, bar);
}
```

Use code with caution.

2\. Positional Parameters

The syntax `add(a, b, c)` passes arguments separated by commas in a specific order.

- **Primary Name:** Positional Arguments (or Positional Parameters).
- **Alternative Name:** Ordered Arguments.
- **Core Benefit:** Maximum performance and concise syntax.
- **Best Use:** Short, simple functions with required inputs. \[[1](https://se.ifmo.ru/~ad/Documentation/Bash%5FShell/bash3-CHP-4-SECT-2.html), [2](https://medium.com/railsfactory/the-evolution-of-keyword-arguments-in-ruby-from-1-9-to-3-0-8bb4ee523a59), [3](https://blog.stackademic.com/understanding-named-arguments-in-c-6c4b446d302f), [4](https://www.vaia.com/en-us/textbooks/computer-science/starting-out-with-c-from-control-structures-through-objects-8-edition/chapter-6/problem-14-special-variables-that-hold-copies-of-function-ar/), [5](https://medium.com/design-bootcamp/arrow-functions-vs-regular-functions-in-javascript-29db7928d696)]

javascript

```
// Definition using positions
function add(a, b, c) {
  return a + b + c;
}
```

Use code with caution.

Key Differences

- **Readability:** Object parameters state exactly what each value represents at the call site.
- **Flexibility:** Object parameters allow skipping arguments without passing `undefined` placeholders.
- **Tooling:** Modern IDEs autocomplete object properties easily. \[[1](https://medium.com/@vishalthakur2463/a-smarter-way-to-handle-function-parameters-in-javascript-0b958c275997), [2](https://dev.to/wisdomudo/understanding-parameters-vs-arguments-in-javascript-with-examples-9an), [3](https://docs.gitlab.com/user/project/quick%5Factions/)]

If you are designing a new API, I can help you choose the best pattern. Please let me know:

- What **programming language** are you using?

- How many **total parameters** will your function accept?

- Are most of your parameters **required or optional**?

- [link](https://medium.com/@saradadeviyerubandi/understanding-named-parameters-in-c-9cca9682bc17)\
  Understanding Named Parameters in C# | by Sarada Devi Yerubandi\
  Sep 14, 2024 — Named parameters/Named Arguments in C# allow you to pass arguments to a method by explicitly specifying the name of the parameter,\
  \
  \
  Medium

- [link](https://www.php.net/manual/uk/functions.arguments.php)\
  Function parameters and arguments - Manual\
  The order in which the named arguments are passed does not matter.\
  \
  PHP

- [link](https://docs.typo3.org/m/typo3/reference-coreapi/main/en-us/PhpArchitecture/NamedArguments.html)\
  Named arguments — TYPO3 Explained main documentation\
  TYPO3 Core may leverage named arguments when calling PHP functions, provided it enhances readability and simplifies the invocation...\
  \
  TYPO3

Show all

f(action, flags). action is literal. flags are object. what is it called.

Mixed Parameter Pattern

The syntax `f(action, flags)` combines **positional** and **named** arguments into a single function signature.

- **Primary Name:** Mixed Parameters (or Combined Arguments).
- **Industry Pattern:** Configuration Object Pattern.
- **Core Rule:** The fixed, mandatory value goes first. The optional configuration object goes last.

Structure Breakdown

1. **`action` (Positional Argument):** A fixed, mandatory literal. It identifies the primary operation (e.g., `'fetch'`, `'delete'`).
2. **`flags` (Named/Object Argument):** A secondary, optional object. It modifies how the primary action behaves.

Real-World Examples

This exact pattern is standard in major modern JavaScript and Node.js APIs:

- **`fetch(url, options)`:** The URL string is positional. The headers and method are objects.
- **`fs.readFile(path, options)`:** The file path is positional. The encoding and flags are objects.
- **`addEventListener(type, listener, options)`:** The event name is positional. The behavior flags are objects.

javascript

```
// Example implementation
function f(action, flags = {}) {
  const { force, silent } = flags;
  // Execution logic here
}

// Call site
f('render', { force: true, silent: false });
```

Use code with caution.

Why Use It?

- **Expressive Call Sites:** The intent is clear right away.
- **Backward Compatibility:** You can add new flags later without breaking the function order.

If you are writing a function using this style, let me know:

- What **framework or runtime** are you targetting?
- Do you want to see how to write **TypeScript types** for this pattern?
- Should the `flags` object be **optional or required** by default?

when mixed

When to Use Mixed Parameters

Use the mixed parameter pattern `f(action, flags)` when your function requires a **primary identity** combined with **secondary options**.

1\. Clear Hierarchy

- Use it when one argument is **mandatory** and central to the operation.
- Use it when all other arguments are **modifiers** of that central action.
- **Example:** `deleteUser(userId, { softDelete: true })`

2\. Multi-Option Scaling

- Use it when the function has **more than two optional settings**.
- Avoids a long string of confusing positional arguments like `f(id, true, false, null, true)`.
- **Example:** `connect(databaseUrl, { timeout: 3000, retry: true, SSL: false })`

3\. Future-Proofing APIs

- Use it when you expect to **add more features** to the function later.
- New options can be added inside the object without breaking existing code.
- **Example:** Changing `f('login', { MFA: true })` to `f('login', { MFA: true, rememberMe: true })`

4\. Overloading Simplification

- Use it to replace complex function overloading.
- Instead of creating three different functions, use one function with flexible flags.
- **Example:** `renderPage('home', { layout: 'admin' })` vs `renderAdminHome('home')`

If you are currently refactoring code, let me know:

- What is the **exact function signature** you want to change?
- What **inputs** does it currently take?
- Are you trying to make it **cleaner to read** or **easier to extend**?

#

how to say "both now and in the future" in english

The phrase "both now and in the future" is grammatically correct and perfectly understood in English, but you can use several alternatives depending on your context.

Professional & Business

- **From now on** (Focuses on a permanent change starting immediately)
- **Going forward** (Standard corporate phrasing for future continuity)
- **Henceforth** (Very formal; implies a binding rule or decree)
- **Now and moving forward** (Emphasizes immediate and ongoing action)

Everyday Speech

- **From here on out** (Casual; emphasizes a continuous state from this moment)
- **Always** (Simple; covers past, present, and future)
- **Starting today** (Highlights the immediate launch of a permanent habit)

Literary & Formal

- **Now and forever** (Dramatic; implies eternity)
- **In perpetuity** (Legal or financial term meaning forever)

Examples in Context

- _Business:_ "We must improve security **going forward**."
- _Casual:_ "**From here on out**, let's meet on Tuesdays instead."
- _Legal:_ "The property shall be held **in perpetuity**."

If you want to refine this further, let me know:

- The **exact sentence** you are trying to write
- The **intended audience** (boss, friend, academic paper)
- The **desired tone** (formal, casual, dramatic)

I can help you select the absolute best fit for your text.

#

how to say something is hard to understand in english using adj

Everyday Adjectives

- **Unclear:** Lacks clarity.
- **Confusing:** Causes mental mix-ups.
- **Vague:** Lacks precise details.
- **Muddled:** Mixed up and disorganized.

Formal & Academic Adjectives

- **Obscure:** Hidden or not clearly expressed.
- **Ambiguous:** Has several possible meanings.
- **Incomprehensible:** Impossible to understand.
- **Impenetrable:** Impossible to get through or comprehend. \[[1](https://dictionaryblog.cambridge.org/2024/09/25/its-as-clear-as-mud-difficult-to-understand/), [2](https://www.vocabulary.com/dictionary/incomprehensible)]

Advanced & Technical Adjectives

- **Abstruse:** Highly intellectual and difficult to understand.
- **Recondite:** Deals with very obscure subject matter.
- **Cryptic:** Having a hidden, mysterious meaning.
- **Opaque:** Blocked from understanding; not transparent.
- **Esoteric:** Intended for only a tiny, specialized audience. \[[1](https://www.facebook.com/100067371692174/posts/english-vocabulary-abstruse-adj-difficult-to-understand-obscure-hard-to-grasp-be/1127350209520692/), [2](https://prepp.in/question/often-the-context-and-structure-of-an-ambiguous-st-69db92dead9f711fdf7b13b7)]

***

To help find the perfect word, could you share **what** is hard to understand (e.g., an accent, a book, a math problem) and the **tone** you want (casual, professional, or academic)?

- [link](https://dictionaryblog.cambridge.org/2024/09/25/its-as-clear-as-mud-difficult-to-understand/)\
  Words and expressions that mean difficult to understand - About Words\
  Sep 25, 2024 — Starting with single words, the adjectives incomprehensible, impenetrable, and obscure mean 'impossible or very difficult to under...\
  \
  \
  Cambridge Dictionary blog
- [link](https://www.vocabulary.com/dictionary/incomprehensible)\
  Incomprehensible - Definition, Meaning & Synonyms - Vocabulary.com\
  incomprehensible

\- unclear. not clear to the mind.\
\- dark, obscure. marked by difficulty of style or expression.\
-\
\
\
Vocabulary.com

- [link](https://www.facebook.com/100067371692174/posts/english-vocabulary-abstruse-adj-difficult-to-understand-obscure-hard-to-grasp-be/1127350209520692/)\
  English Vocabulary ABSTRUSE (adj.) Difficult to understand ...\
  Sep 24, 2025 — English Vocabulary 📖 ABSTRUSE (adj.) Difficult to understand because it is complex, abstract, or highly technical. Examples: The ...\
  \
  \
  Facebook

Show all