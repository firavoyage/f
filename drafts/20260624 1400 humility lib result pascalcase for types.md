<!-- inspiration: gemini sees my input "result" as "Result" -->

<!-- here is the rationale for migrating to Result.

p

r, re -> return

res -> result

c

r -> return

R -> Result<>

(also, i would add Map, Set, Record, etc. as vscode does not auto close `>` for `<` sometimes. maybe it thinks it can be an op.)

that's the single only reason. -->

# what about using lowercase for types in typescript

Using lowercase for types in TypeScript can mean two completely different things depending on context: <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">naming your primitive types</strong> or <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">naming your custom types/interfaces</strong></mark>.

Here is the breakdown of how casing works and what you should do.

### 1. Primitive Types (Always Use Lowercase) \[[1](https://stackoverflow.com/questions/65943330/confussion-on-case-in-types-in-typescript)]

You must **always use lowercase** for basic JavaScript primitives like `string`, `number`, `boolean`, `symbol`, and `object`. \[[1](https://betterprogramming.pub/how-to-use-lowercase-types-for-primitives-and-objects-in-typescript-ddd00273849a)]

- **The Right Way**: `let name: string = "Alice";`
- **The Wrong Way**: `let name: String = "Alice";` \[[1](https://www.linode.com/docs/guides/typescript-types-get-started/), [2](https://betterprogramming.pub/how-to-use-lowercase-types-for-primitives-and-objects-in-typescript-ddd00273849a), [3](https://stackoverflow.com/questions/70261855/lower-case-object-values-in-typescript)]

### Why it matters:

Capitalized names like `String`, `Number`, or `Boolean` refer to special JavaScript **wrapper objects** rather than the literal primitives. Using capitalized types can lead to frustrating type mismatches. For example, TypeScript will complain if you try to assign a primitive `string` to a wrapper `String` object. \[[1](https://www.linode.com/docs/guides/typescript-types-get-started/), [2](https://dev.to/josiasaurel/the-difference-between-string-and-string-in-typescript-4mf2)]

Additionally, use the lowercase `object` type to represent any non-primitive value, and avoid the uppercase `Object` type, which is overly permissive and includes almost everything except `null` and `undefined`. \[[1](https://javascript.plainenglish.io/typescripts-object-and-object-types-why-you-should-use-object-8de9f2e7ea80)]

***

### 2. Custom Types and Interfaces (Avoid Lowercase)

When creating your own types, interfaces, or classes, you should **strictly avoid lowercase naming**. Standard conventions in the TypeScript ecosystem dictate using **PascalCase** (capitalizing the first letter of every word). \[[1](https://www.reddit.com/r/node/comments/1l13seq/how%5Fdo%5Fyou%5Fname%5Finterfacestypes%5Fin%5Ftypescript/), [2](https://stackoverflow.com/questions/68963491/define-a-typescript-type-that-takes-a-lowercase-word), [3](https://www.koderhq.com/tutorial/typescript/syntax/)]

- **Standard Practice**:\
  typescript

<!---->

```
interface UserProfile {
  id: number;
}
type Status = "pending" | "approved";
```

Use code with caution.

- **Discouraged Practice**:\
  typescript

<!---->

```
interface userProfile {
  id: number;
}
type status = "pending" | "approved";
```

Use code with caution.\
\[[1](https://mimo.org/glossary/typescript/type-alias)]

### Why it matters:

- **Visual Clarity**: PascalCase instantly tells anyone reading your code that a word is a data type rather than a variable, function, or constant.
- **Naming Collisions**: If your type is named `user`, you cannot cleanly name your variable `user` in the same scope without creating confusing, unreadable code.
- **Tooling & Linters**: Standard rulesets like typescript-eslint flag lowercase custom types as errors by default. \[[1](https://www.reddit.com/r/node/comments/1l13seq/how%5Fdo%5Fyou%5Fname%5Finterfacestypes%5Fin%5Ftypescript/)]

***

### 3. Bonus: The `Lowercase` Utility Type

If you are asking about forcing a string's _value_ to be lowercase, TypeScript provides a built-in intrinsic type called . You can use it to manipulate string literal types: \[[1](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html), [2](https://www.geeksforgeeks.org/typescript/typescript-lowercase-stringtype-utility-type/), [3](https://dev.to/43081j/string-manipulation-types-in-typescript-4-x-556e), [4](https://www.geeksforgeeks.org/typescript/typescript-lowercasestringtype-template-literal-type/)]

typescript

```
type LoudGreeting = "HELLO";
type QuietGreeting = Lowercase<LoudGreeting>; // Resolves to the type "hello"
```

Use code with caution.

Are you looking to enforce **linting rules** to catch casing mistakes, or are you trying to use **template literal types** to validate lowercase values?

- [link](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)\
  TypeScript: Documentation - Template Literal Types\
  Jun 22, 2026 — Lowercase Converts each character in the string to the lowercase equivalent.\
  TypeScript
- [link](https://www.reddit.com/r/node/comments/1l13seq/how%5Fdo%5Fyou%5Fname%5Finterfacestypes%5Fin%5Ftypescript/)\
  How do you name Interfaces/Types in Typescript? : r/node\
  Jun 2, 2025 — Comments Section. samuelcole. • 1y ago. This is a (now ancient) article on Hungarian notation which I've always found useful: http...\
  Reddit·r/node
- [link](https://betterprogramming.pub/how-to-use-lowercase-types-for-primitives-and-objects-in-typescript-ddd00273849a)\
  How To Use Lowercase Types for Primitives and Objects in ...\
  Nov 16, 2021 — Don't ever use the types Number , String , Boolean , Symbol , or Object . Do use the types of number , string , boolean , and symb...\
  Better Programming

Show all

## You said: what about using lowercase (or snake case when it's multi word) anyway

You can technically use lowercase or snake\_case for your custom types, but it goes against deep-rooted TypeScript ecosystem standards. TypeScript will compile it perfectly fine, but it introduces several friction points for you and your team. \[[1](https://learncodingfast.com/2-ways-to-convert-a-string-to-lowercase-in-python/), [2](https://www.reddit.com/r/cpp%5Fquestions/comments/1fycfc3/do%5Fyou%5Fprefer%5Fto%5Fuse%5Fcamelcase%5For%5Fsnake%5Fcase%5Fin/)]

Here is what happens if you choose to use lowercase or snake\_case anyway.

### 1. The Variable Name Collision Problem

TypeScript allows a type and a variable to share the exact same name, but doing so makes your code incredibly confusing to read and maintain.

- **The Problem:**\
  typescript

<!---->

```
// Type and variable have identical casing
type user_profile = { id: string };
const user_profile: user_profile = { id: "123" };
```

Use code with caution.

- **Why it hurts:** When you see `user_profile` later in a massive file, you cannot instantly tell if the code is referencing the static type definition or the runtime data object.

### 2. Auto-Import and Tooling Friction

Modern IDEs (like VS Code) and AI assistants are trained on standard TypeScript conventions.

- **Wasted Time:** Auto-import tools might suggest variable names when you actually want the type, or vice versa.
- **Fighting the Linter:** Standard tools like `typescript-eslint` will flag your code with warnings. You will have to manually write custom override rules in your configuration files to silence them.

### 3. Mental Model Disconnect

JavaScript uses lowercase/camelCase for **values** that exist at runtime. TypeScript uses PascalCase for **types** that evaporate during compilation.

- Breaking this rule blurs the line between what code actually runs in the browser and what code only exists for the compiler.
- It increases the cognitive load for any external developer or future hire reading your repository.

***

### When Snake Case _Is_ Acceptable

There is one major exception where lowercase snake\_case belongs in TypeScript types: **API Request/Response payloads**.

If you are typing data that comes directly from a PostgreSQL database or a Python backend, your interface properties should match those exact keys:

typescript

```
// Good use of snake_case for properties, while keeping PascalCase for the type
interface DatabaseUser {
  user_id: number;
  email_address: string;
}
```

Use code with caution.

Are you looking for the specific **ESLint configuration rules** to allow lowercase type names, or are you trying to map TypeScript types to a **snake\_case database schema**?

- [link](https://learncodingfast.com/2-ways-to-convert-a-string-to-lowercase-in-python/)\
  2 ways to convert a string to lowercase in Python\
  Sep 4, 2020 — Besides using the built-in lower() function to convert a string to lowercase, we can also use Unicode ( the Unicode standard ) to ...\
  \
  \
  Learn Coding Fast
- [link](https://www.reddit.com/r/cpp%5Fquestions/comments/1fycfc3/do%5Fyou%5Fprefer%5Fto%5Fuse%5Fcamelcase%5For%5Fsnake%5Fcase%5Fin/)\
  Do you prefer to use camelCase or snake\_case in your pojects? : r/cpp\_questions\
  Oct 8, 2024 — My personal preference is snake\_case because it's the style used by the standard library so you don't get an awkward mismatch of s...\
  \
  Reddit

## You said: can it be wise if my team love lowercase

Yes, it can be wise, but **only if** you define "wise" as prioritizing team happiness over standard industry conventions. If your entire team strongly prefers lowercase or snake\_case, you can make it work smoothly.

However, you must actively configure your environment to prevent the downsides.

### How to Make It Wise (The Checklist)

If you commit to this style, you must do three things immediately:

1. **Change Your Linter**: You must modify your `typescript-eslint` rules. Otherwise, your text editors will be full of red warning lines.
2. **Enforce Strict Variable Prefixing**: To avoid the naming collision problem, create a rule where variables must use a different casing than types (e.g., types are `user_profile`, variables are `userProfile`).
3. **Document It**: Put this decision in your `README.md` so new hires understand it instantly.

***

### The Custom ESLint Configuration You Need

To stop TypeScript from yelling at your team, add these overrides to your ESLint configuration file (usually `.eslintrc.json` or `eslint.config.js`):

json

```
{
  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "typeLike",
      "format": ["snake_case", "lowercase"]
    }
  ]
}
```

Use code with caution.

***

### The Long-Term Trade-offs

Before making the final decision, ensure your team is okay with these three permanent costs:

- **Onboarding Friction**: Every new developer you hire will have to unlearn years of muscle memory.
- **Third-Party Mess**: Your code will look like a mixture of two styles. Your internal types will be `user_profile`, but types imported from `node_modules` (like React, Express, or Prisma) will still be `React.Component` or `PrismaClient`.
- **AI Tool Confusion**: AI coding assistants (like Copilot) might frequently generate incorrect PascalCase types for your codebase because they are trained on public data.

Would you like help writing a **formal team style guide** for this choice, or do you want to see how to configure **VS Code auto-generation** to support your custom casing?

## You said: we do not use any linting stuff for rapid dev and only care if it works

If your only goal is speed and making sure the code compiles, then yes, using lowercase or snake\_case is perfectly fine. TypeScript does not care about casing at all; it compiles types based on structural matching, not their names.

If you are skipping linters for maximum velocity, here is exactly how to make lowercase types work without slowing you down.

### The 1-Second Rules for Casing

To prevent naming bugs from breaking your build, follow these two quick mental rules:

1. **Vary the Casing slightly**: Do not name a type and a variable the exact same thing.

- _Bad (breaks easily)_: `type user = { id: int }; const user: user = { id: 1 };`
- _Good_: `type user_t = { id: int }; const user: user_t = { id: 1 };` (Adding `_t` or `_type` takes one millisecond and stops errors).

2. **Beware JavaScript Keywords**: Never name a type a reserved JS keyword like `let`, `class`, `const`, `function`, or `return`. TypeScript will throw a hard compiler error.

### When To Expect a Broken Build

Since you are not using a linter, the TypeScript compiler (`tsc`) will only stop you if you cause a **syntax clash**.

This will fail to compile:

typescript

```
// TS Error: 'user' refers to a value, but is being used as a type here.
const user = { id: 1 };
const active_user: user = { id: 2 };
```

Use code with caution.

This will compile perfectly:

typescript

```
// Totally valid TypeScript
type user_data = {
  user_id: number;
  user_name: string;
}

const current_user: user_data = {
  user_id: 99,
  user_name: "dev_speed",
}
```

Use code with caution.

If it works for your workflow and keeps your team moving fast, just ship it.

Are you currently hitting any **specific compiler errors** with your lowercase types, or do you want to see a fast pattern for auto-typing **raw SQL query outputs**?

## You said: no. we prefer the readability of lowercase. and it's a strategic choice to make the type exactly as the variable

If you are deliberately matching type names exactly to variable names for readability, TypeScript fully supports this via its **dual-namespace system**. The compiler naturally keeps types and values in separate tracks, so they will not clash at runtime.

However, since you have no linter to protect you during rapid development, you need to know exactly where this strategy works flawlessly and the two specific scenarios where it will break your build.

### Where This Strategy Works Perfectly

You can use the exact same name for a type and a variable when declaring objects, arguments, or function returns. The compiler uses context to figure out which one you mean:

typescript

```
// 1. Objects
type user = { id: number };
const user: user = { id: 101 }; // Perfect matching

// 2. Function Arguments
function save(user: user) {
  return user.id;
}

// 3. Destructuring
const { id }: user = user;
```

Use code with caution.

***

### The 2 Edge Cases That Will Break Your Build

Because you are intentionally shadowing names, the TypeScript compiler will throw a hard error in these two specific scenarios. Memorize these to keep your development fast:

### 1. The `typeof` Extraction Trap

If you try to extract a type from a variable that shares its name, TypeScript gets confused about which namespace you are pointing to.

typescript

```
const customer = { id: 5, name: "Alice" };
type customer = typeof customer; // ❌ ERROR: 'customer' refers to a type, but is being used as a value here.
```

Use code with caution.

- **The Quick Fix:** For rapid dev, just use the `any` escape hatch or manually duplicate the shape instead of using `typeof`.

### 2. Class Instantiation Clashes

Classes in TypeScript inherently occupy **both** the type namespace and the value namespace simultaneously. You cannot declare a custom type with the same name as a class in the same scope.

typescript

```
class product { price: number = 0; }
type product = { discount: boolean }; // ❌ ERROR: Duplicate identifier 'product'.
```

Use code with caution.

- **The Quick Fix:** Stick to `type` or `interface` for your lowercase declarations, and avoid using `class` for data modeling.

***

Since your team values visual uniformity, are you using **anonymous inline types** for quick shapes, or are you creating **global type files** to share these lowercase types across your project?

## You said: pros and cons

Here is the honest, bottom-line assessment of making the strategic choice to have your types lowercase and exactly match your variable names.

### The Pros (Why it works for your workflow)

- **Maximum Readability**: It creates a clean, uniform visual flow. The type declaration mimics the variable name perfectly, removing visual noise (`const user: user`).
- **Instant Shape Mapping**: It removes the cognitive friction of inventing a new name for your type. If the variable is `order_item`, the type is `order_item`.
- **Zero Runtime Overhead**: TypeScript completely strips away types during compilation, meaning this strategy has absolutely zero impact on your production bundle size or speed.
- **Frictionless Prototyping**: Without linters barking at you or formatting rules forcing you to hit Shift for PascalCase, your team can write code as fast as they can type.

***

### The Cons (The risks you must accept)

- **The `typeof` and Class Blockers**: As mentioned, you lose the ability to use `typeof variable` for easy type extraction, and you cannot mix this strategy with the `class` keyword without causing compiler errors.
- **Loss of Copy-Paste Speed**: If you copy snippets from StackOverflow, GitHub, or AI tools, you will have to manually rewrite the types to match your lowercase convention, slowing down rapid integration.
- **Context Confusion in Large Files**: In a 500-line file, seeing just the word `user` makes it impossible to know at a glance if you are looking at a type definition or a live data object.
- **Refactoring Nightmares**: If you use a tool to rename a variable, your IDE might accidentally rename the type as well (or miss it entirely), leading to broken builds that you have to hunt down manually.

***

Since you are prioritizing speed, would you like to see the fastest way to **export these matching types globally** so you don't have to redefine them in every file?

# 

