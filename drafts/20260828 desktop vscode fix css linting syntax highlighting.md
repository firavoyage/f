## how to disable vscode css warning "empty block"

To disable the **"Do not use empty rulesets"** warning in Visual Studio Code, you must change the built-in linting setting from `warning` to `ignore`. [link](https://stackoverflow.com/questions/61508974/do-not-use-empty-rulesetscssemptyrules)

### Method 1: Using the `settings.json` file (Fastest)

1. Open the **Command Palette** by pressing `Ctrl + Shift + P` (Windows/Linux) or `Cmd + Shift + P` (Mac).
2. Type **Preferences: Open User Settings (JSON)** and select it.
3. Add the following lines inside the main curly braces `{}`: [link](https://stackoverflow.com/questions/61508974/do-not-use-empty-rulesetscssemptyrules)

json

```
"css.lint.emptyRules": "ignore",
"scss.lint.emptyRules": "ignore",
"less.lint.emptyRules": "ignore"
```

Use code with caution.

_Note: Make sure to separate your settings with a comma if you are adding this below an existing setting._ [link](https://stackoverflow.com/questions/68988682/vscode-settings-problems)

### Method 2: Using the Visual Settings UI

1. Open settings using `Ctrl + ,` (Windows/Linux) or `Cmd + ,` (Mac).
2. Type **`emptyRules`** into the top search bar.
3. Locate the **Css > Lint: Empty Rules** section.
4. Change the dropdown menu from **`warning`** to **`ignore`**.
5. Repeat for **Scss** or **Less** if you use those formats.

If you are using an external extension like **Stylelint**, let me know so I can give you the exact `.stylelintrc` configuration instead.

4 sites

- [link](https://stackoverflow.com/questions/61508974/do-not-use-empty-rulesetscssemptyrules)\
  Do not use empty rulesetscss(emptyRules) \[duplicate]\
  Apr 29, 2020 — To prevent Visual Studio Code (VSCode) from showing warnings for empty rules in CSS files, you can do the following: 1. Open the c...\
  Stack Overflow
- [link](https://stackoverflow.com/questions/68988682/vscode-settings-problems)\
  Vscode settings problems - Stack Overflow\
  Aug 30, 2021 — \* 1 Answer. Sorted by: You are missing a comma after the "gitlens.advanced.messages" object and before "css.lint.emptyRules": "ign...\
  Stack Overflow
- [link](https://bobbyhadz.com/blog/vscode-do-not-use-empty-rulesets-css)\
  VS Code: Do not use empty rulesets CSS error \[Solved]\
  Apr 6, 2024 — Disable the "Do not use empty rulesets" linting rule for the current project. If you only want to disable the "Do not use empty ru...\
  bobbyhadz

Show all

## what are the builtin css lint rules

Visual Studio Code includes a built-in linter for **CSS, SCSS, and Less**. Every rule can be configured to **`"ignore"`**, **`"warning"`**, or **`"error"`**. [link](https://www.youtube.com/watch?v=GdltaU-ujho\&t=23)

The complete reference list of built-in lint rules is broken down by category below. [link](https://vscode-docs.readthedocs.io/en/latest/languages/css/)

### 1. Code Cleanliness & Structure

- `emptyRules`: Flags rulesets that do not contain any property declarations (e.g., `.class {}`). _Default: `warning`_
- `duplicateProperties`: Flags duplicate property declarations within the same ruleset (e.g., typing `color: red;` twice). _Default: `ignore`_
- `hexColorLength`: Flags hexadecimal color codes that are not exactly 3, 4, 6, or 8 characters long. _Default: `error`_
- `invalidAtRules`: Flags unknown or unrecognized CSS `@` directives. _Default: `ignore`_
- `invalidProperties`: Flags unrecognized or typo-ridden CSS property names. _Default: `ignore`_
- `unknownProperties`: Flags properties that are not part of any official CSS specification. _Default: `warning`_ [link](https://www.youtube.com/watch?v=GdltaU-ujho\&t=23)

### 2. Performance Risks

- `importStatement`: Flags the use of `@import` statements, which force browsers to load stylesheets sequentially and degrade page loading speeds. _Default: `ignore`_
- `universalSelector`: Flags the use of the universal selector (`*`), which can slow down browser rendering performance on massive HTML trees. _Default: `ignore`_ [link](https://vscode-docs.readthedocs.io/en/latest/languages/css/)

### 3. Maintainability & Best Practices

- `argumentsInColorFunction`: Flags missing or incorrect arguments within color functions like `rgb()`, `rgba()`, `hsl()`, or `hsla()`. _Default: `error`_
- `important`: Flags the use of the `!important` visibility override flag, which complicates specificity debugging. _Default: `ignore`_
- `idSelector`: Flags using ID selectors (`#id`) instead of class selectors, which makes styles hard to reuse. _Default: `ignore`_
- `zeroWithUnit`: Flags standard numerical zero values that explicitly include units (e.g., `0px` or `0em` instead of just `0`). _Default: `ignore`_ [link](https://www.youtube.com/watch?v=GdltaU-ujho\&t=23)

### 4. Layout Mechanics

- `boxModel`: Flags potential sizing conflicts, such as declaring an explicit `width` or `height` alongside a `padding` or `border` value on the same element. _Default: `ignore`_
- `float`: Flags the use of the `float` property, steering developers toward modern Flexbox or CSS Grid layouts. _Default: `ignore`_ [link](https://vscode-docs.readthedocs.io/en/latest/languages/css/)

***

### How to customize any of these rules

To change any rule configuration, open your `settings.json` file and prefix the rule with `css.lint.`, `scss.lint.`, or `less.lint.`. [link](https://www.youtube.com/watch?v=GdltaU-ujho\&t=23)

json

```
{
  "css.lint.important": "warning",
  "css.lint.hexColorLength": "error",
  "css.lint.unknownProperties": "ignore"
}
```

Use code with caution.

If you need a more powerful ruleset—such as enforcing naming conventions or strict sorting—I can show you how to swap this out for **Stylelint**. Would you like to set that up? [link](https://www.youtube.com/watch?v=XbMxA70ZA6o\&t=124)

- [link](https://www.youtube.com/watch?v=GdltaU-ujho\&t=23)\
  YouTube·Code 2020\
  VS Code tips — The built-in CSS linter\
  Sep 26, 2020 — vs Code's built-in CSS support includes linting functionality that can help alert you to potential problems in your stylesheets. a...\
  49s
- [link](https://stackoverflow.com/questions/44523355/how-do-i-exclude-files-from-css-lint-in-vscode)\
  Stack Overflow\
  How do I exclude files from css lint in vscode - Stack Overflow\
  Jun 13, 2017 — Comments. Add a comment. This answer is useful. 2. This answer is not useful. Save this answer. Loading when this answer was accep...
- [link](https://code.visualstudio.com/docs/languages/css)\
  Visual Studio Code\
  CSS, SCSS and Less\
  Visual Studio Code (VS Code) has built-in support for editing CSS, SCSS, Less, and more: \* \*\*IntelliSense\*\* Supports selectors, pr...

Show all

## how to fix syntax highlighting of nested css

Because the native **CSS Nesting Module** is newer than VS Code's core built-in CSS TextMate grammar grammar rules, standard `.css` files frequently break, miscolor, or lose syntax highlighting on nested blocks. [link](https://github.com/catppuccin/vscode/issues/397)

The problem can be fixed using one of three methods:

### Method 1: Install the "CSS Nesting Syntax Highlighting" Extension (Recommended)

The most lightweight, seamless solution is installing an extension dedicated specifically to injecting the missing TextMate nesting scopes into vanilla `.css` files. [link](https://mathspp.com/blog/til/vscode-extension-for-custom-syntax-highlighting)

1. Go to the **Extensions** tab (`Ctrl + Shift + X` or `Cmd + Shift + X`).
2. Search for [CSS Nesting Syntax Highlighting](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting) by Jacob Cassidy.
3. Click **Install**.
4. Your color themes will immediately recognize nested rulesets (like `& .child` or `&:hover`) correctly. [link](https://github.com/catppuccin/vscode/issues/397)

### Method 2: Remap `.css` files to use the `SCSS` Engine

Because SCSS has supported nesting syntax for years, telling VS Code to parse your regular `.css` files using the SCSS tokenizer fixes color issues instantly without installing external packages. [link](https://github.com/catppuccin/vscode/issues/397)

1. Open your global `settings.json` via the Command Palette (`Ctrl/Cmd + Shift + P` -> **Preferences: Open User Settings (JSON)**).
2. Add or modify the `files.associations` block: [link](https://ryanfiller.com/blog/tips/svelte-postcss-syntax-highlighting)

json

```
"files.associations": {
  "*.css": "scss"
}
```

Use code with caution.

_Note: This switches syntax highlighting to SCSS, but means you may also want to change `"css.validate": false` if lint errors trigger on raw CSS variables or modern pseudo-classes._ [link](https://code.visualstudio.com/docs/languages/css)

### Method 3: Use the PostCSS Language Support Extension

If your workspace leverages a build pipeline (like Vite, Tailwind, or Webpack) that processes modern CSS nesting or PostCSS plugins, using the official PostCSS tooling maps the file tokens accurately. [link](https://stackoverflow.com/questions/73645545/vscode-cant-regonize-css-nested-syntax-after-using-react-css-module-with-postcs)

1. Open the Extensions marketplace.
2. Install the official [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) extension by CSSTools.
3. Map your files to use this language ID inside your `settings.json`: [link](https://stackoverflow.com/questions/73645545/vscode-cant-regonize-css-nested-syntax-after-using-react-css-module-with-postcs)

json

```
"files.associations": {
  "*.css": "postcss"
}
```

Use code with caution.

***

Which approach works best depends on your build tools. Let me know if you are using a specific framework like **Svelte**, **React**, or **Vue**, as they sometimes require tweaking localized `<style>` block tags instead. [link](https://stackoverflow.com/questions/73645545/vscode-cant-regonize-css-nested-syntax-after-using-react-css-module-with-postcs)

- [link](https://github.com/catppuccin/vscode/issues/397)\
  GitHub\
  Nested CSS sometimes doesn't highlight as expected #397\
  Jun 2, 2024 — Activity \* uncenter commented. uncenter. on Jun 2, 2024. Last edited by uncenter. Member. That's an issue with nested CSS in VS Co...
- [link](https://ryanfiller.com/blog/tips/svelte-postcss-syntax-highlighting)\
  ryanfiller.com\
  PostCSS Syntax Highlighting with Svelte in VS Code\
  Nov 21, 2021 — It might seem counterintuative, but the first step to fixing syntax highlighting is actually to shut off CSS checking in the Svelt...
- [link](https://www.youtube.com/watch?v=vR2y4VoCZg4)\
  YouTube·That Voxel Game\
  How To Disable Red Wavy Underline in Visual Studio ...\
  Sep 24, 2022 — hey guys sometimes you just get these annoying red wavy underlines all over your code and yes they can be useful for tracing error...\
  2:16

Show all

## is scss generally a superset of css on syntax highlighting

<mark><span>Yes,<span> </span></span><strong>SCSS is mathematically and practically a strict structural superset of CSS</strong></mark>. Because it shares the exact same block structure (`{}`) and declaration endings (`;`), **99% of all standard CSS highlights flawlessly** when treated as SCSS. [link](https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss)

However, when mapping `.css` files directly to the SCSS highlighting engine, there are a few subtle discrepancies to keep in mind.

***

### 🔎 Where SCSS Highlighting Excels as a Superset

- **CSS Nesting Support:** SCSS natively parses parent references (`&`) and nested brackets without marking them as invalid properties.
- **Modern Pseudo-classes:** Complex pseudo-selectors like `:is()`, `:where()`, and `:has()` highlight perfectly.
- **Custom Properties:** Native CSS variables (e.g., `--primary-color: #fff;`) conform to standard declaration styling and tokenize perfectly in SCSS mode. [link](https://sass-lang.com/documentation/syntax/)

***

### ⚠️ The Few Exceptions (Where Highlighting Can Desync)

While they look identical to a tokenizer, a few raw CSS edge-cases are parsed differently under the hood by SCSS grammars:

#### 1. Native `@import` url strings vs. SCSS Imports

- **CSS:** Supports unquoted strings or specific variants in `@import url(style.css);`.
- **SCSS:** Expects imports to behave like modular files. If you have advanced, modern native cascade layer imports (`@import "theme.css" layer(utilities);`), an SCSS tokenizer might flag the trailing `layer()` block as a syntax error because it tries to parse it as an SCSS mixin or argument list. [link](https://sourcefuse-16737.medium.com/sass-scss-new-age-version-of-css-a-beginners-guide-3c2579cc7850)

#### 2. Division (`/`) vs. Modern CSS Ratios

- **CSS:** Uses the forward slash as a separator in modern properties (e.g., `grid-area: 1 / 3;` or `font: 16px / 1.5 sans-serif;`).
- **SCSS:** Historically treats `/` as a mathematical division operator in specific contexts. While modern SCSS formatters have fixed most of this behavior to match vanilla CSS, some older syntax highlighters may incorrectly style numbers around a `/` as a math operation rather than a layout separator.

#### 3. Custom Media Queries

- **CSS:** Allows custom media queries using `@custom-media --viewport-max (max-width: 30em);`.
- **SCSS:** Uses `@` rules specifically for preprocessor control (like `@mixin`, `@include`). An unexpected native `@custom-media` prefix might fail color tokenization or look completely desaturated. [link](https://sass-lang.com/documentation/syntax/)

***

### 💡 The Verdict

For day-to-day writing—including variables, flexbox, grid, and nesting—using the SCSS highlighter for `.css` files is **entirely safe and highly efficient**. You will rarely run into any broken coloring unless you are writing experimental, bleeding-edge native CSS at-rules.

- [link](https://sass-lang.com/documentation/syntax/)\
  Sass: Syntactically Awesome Style Sheets\
  Syntax - Sass\
  SCSSSCSS permalink. The SCSS syntax uses the file extension .scss . With a few small exceptions, it's a superset of CSS, which mea...
- [link](https://sass-lang.com/guide/)\
  Sass: Syntactically Awesome Style Sheets\
  Sass Basics\
  The SCSS syntax ( .scss ) is used most commonly. It's a superset of CSS, which means all valid CSS is also valid SCSS. The indente...
- [link](https://stackoverflow.com/questions/46400443/what-is-the-difference-between-css-and-scss)\
  Stack Overflow\
  What is the difference between CSS and SCSS?\
  Sep 25, 2017 — "about Sass. How is SCSS different from CSS" : scss is well formed CSS3 syntax. uses sass preprocessor to create that. and if I us...

Show all

## why is it called textmate grammar

It is called a **TextMate grammar** <mark>because the entire system was originally invented for<span> </span><strong>TextMate</strong></mark>, a highly influential macOS-only text editor launched in 2004. [link](https://www.jetbrains.com/help/idea/textmate.html)

Even though many developers today use modern editors like VS Code, Sublime Text, or IntelliJ, the fundamental engine under the hood still relies on the standardized format TextMate created over two decades ago. [link](https://github.com/eclipse-theia/theia/issues/2689)

The naming structure and widespread adoption came about due to several key factors:

### 1. The Prolific Open-Source Ecosystem

When TextMate was at its peak, its community created massive, highly accurate "language bundles" (`.tmLanguage` files) for nearly every programming language in existence. Instead of reinventing the wheel and writing syntax code from scratch, subsequent editors—such as **Sublime Text, GitHub's Atom, and eventually Microsoft's VS Code**—simply adopted the TextMate grammar engine so they could instantly inherit thousands of existing language definitions. [link](https://macromates.com/blog/2005/language-grammars/)

### 2. How the Engine Works

A TextMate grammar works as a **hierarchical tokenization engine**. It breaks text down line-by-line using two concepts: [link](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)

- **The Oniguruma Regex Engine:** TextMate used a specific C-based regular expression engine called **Oniguruma**. It is incredibly fast and allows expressions to look backward or forward across text. VS Code still uses a WebAssembly compiled version of this exact same regex engine today to parse code. [link](https://stackoverflow.com/questions/56254150/how-do-textmate-grammars-and-themes-work-with-vscode)
- **Nested Scopes:** Instead of just saying "make this word blue," a TextMate grammar assigns a dot-separated classification chain called a **scope**. For instance, a variable inside a JavaScript function might be tagged with `variable.other.readwrite.js`. [link](https://gist.github.com/JaimeStill/0497f283e09779da15c00be159175972)

### 3. Separation of Grammar and Theme

Before TextMate, many editors tightly coupled the syntax highlighter to a specific color theme. TextMate revolutionized this by separating them entirely: [link](https://code.visualstudio.com/blogs/2017/02/08/syntax-highlighting-optimizations)

1. The **Grammar** file purely tags words with scopes (e.g., "This token is a keyword").
2. The **Theme** file assigns colors to those scopes (e.g., "Make all keywords purple"). [link](https://macromates.com/manual/en/language%5Fgrammars)

Because of this brilliant design, a single theme file (like Monokai or One Dark) can flawlessly colorize JavaScript, Python, HTML, and C++ without needing unique code written for every single language.

### Modern Evolution

While VS Code still uses **TextMate grammars** as its baseline foundation, it layers a newer technology called **Semantic Highlighting** on top of it. TextMate grammars can only scan line-by-line using regex patterns (meaning it cannot easily tell if a variable name was declared as a function, a class, or a module elsewhere in the file). VS Code uses TextMate grammars to color code _instantly_ as you type, and then lets a [Language Server (LSP)](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide) step in a millisecond later to fix any semantic nuances. [link](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide)

If you are interested, I can show you how to use VS Code's **Scope Inspector tool** to see exactly which TextMate scopes are actively coloring your current code file. Would you like to try that?

- [link](https://dev.to/borama/building-a-syntax-highlighting-extension-for-vs-code-594)\
  DEV Community\
  Building a syntax highlighting extension for VS Code\
  Feb 29, 2024 — VS Code syntax highlighting works with TextMate editor grammar files,; they are written in an old but well-thought-out specificati...
- [link](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide)\
  Visual Studio Code\
  Syntax Highlight Guide | Visual Studio Code Extension API\
  Theming rules are specified in color themes. Users can customize the theming rules in their user settings. Here's some more inform...
- [link](https://stackoverflow.com/questions/56254150/how-do-textmate-grammars-and-themes-work-with-vscode)\
  Stack Overflow\
  How do TextMate grammars and themes work with VSCode?\
  May 22, 2019 — 1 Answer. ... TextMate grammars depend on a particular regex implementation / library called Oniguruma, which is implemented in C.

Show all

## why native css nesting still isnt supported on vscode

The lack of native, out-of-the-box support for the modern **CSS Nesting Module** in Visual Studio Code stems from <mark>open-source fragmentation, regression risks, and historical engine architectural debt</mark>.

The primary reasons behind this delay include:

### 1. The Upstream Grammar Repository is Dead

VS Code does not maintain its own custom CSS TextMate tokens completely from scratch. It historically inherited its CSS tokenizer configuration directly from an open-source text grammar project [originally built for GitHub's Atom editor](https://github.com/microsoft/vscode/issues/266686). When GitHub officially sunset Atom, that foundational text grammar was archived. This left the VS Code development team with the massive chore of manually rewriting and decoupling the core CSS tokenization patterns themselves. [link](https://github.com/microsoft/vscode/issues/266686)

### 2. High Risk of Regressions

The [official GitHub tracking issue for VS Code Nesting Support](https://github.com/microsoft/vscode-css/issues/9) highlights that rewriting the CSS parser to accept nesting introduces extreme regression risks. [link](https://github.com/microsoft/vscode-css/issues/9)

- **The Problem:** In vanilla CSS, standard block rulesets (like `.parent { ... }`) expect _only_ property-value pairs inside them (like `color: blue;`).
- **The Conflict:** Modifying the regex rules to accept deep child selectors (like `& .child` or raw tag symbols like `div`) inside an active block easily breaks standard CSS error tracking, variables parsing, and color code rendering for standard, non-nested legacy stylesheets. [link](https://github.com/microsoft/vscode-css/issues/9)

### 3. Lack of a Standardized Test Suite

Because the parser changes are so fundamental, the VS Code engineering team stated they cannot safely merge native nesting support into stable builds without building an airtight automated test suite to ensure thousands of legacy CSS configurations do not suddenly look broken. [link](https://github.com/microsoft/vscode-css/issues/9)

### 4. Overlapping Complexity of "Relaxed Parsing"

The browser specification for CSS Nesting changed multiple times during development. Originally, browsers required you to _always_ start a nested rule with a tracking symbol like `&`. Later on, the CSS Working Group shifted to a **"relaxed parsing grammar"** where you could drop normal HTML tags directly inside a block (e.g., nesting a raw `button { ... }` or `p { ... }` inside a class). Keeping up with these shifting parsing engine specifications made it difficult to hardcode stable regex tokens immediately. [link](https://www.youtube.com/watch?v=ljDIcBp-9sQ\&t=35)

***

### What is the current status?

Community contributors are actively working on resolving this upstream via open pull requests, and the engine is progressively evolving. [link](https://github.com/catppuccin/vscode/issues/397)

Until the native engine is fully overhauled in stable VS Code updates, using the third-party [CSS Nesting Syntax Highlighting extension](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting) or mapping your environment to the **SCSS** language identifier remain the absolute best ways to bridge the gap. [link](https://marketplace.visualstudio.com/items?itemName=jacobcassidy.css-nesting-syntax-highlighting)

Would you like help creating a project-specific workflow file that automatically forces nesting syntax formatting for your whole development team?

- [link](https://x.com/wesbos/status/1991221082410610850)\
  X·wesbos\
  VS Code still doesn't have support for CSS Nesting. Syntax ...\
  Nov 19, 2025 — VS Code still doesn't have support for CSS Nesting. Syntax Donated $400, Tailwind Donated $500, quite a bit of work has been done,
- [link](https://www.youtube.com/watch?v=ljDIcBp-9sQ\&t=35)\
  YouTube·Kevin Powell\
  The differences between CSS and Sass Nesting\
  Jul 20, 2023 — and on the other side we're going to see you know what the the equivalent would be in regular CSS nesting uh because we can't actu...\
  1m
- [link](https://github.com/microsoft/vscode-css/issues/9)\
  GitHub\
  Add support for nested CSS · Issue #9 · microsoft/vscode-css\
  May 29, 2023 — Nested CSS is not supported in Visual Studio Code (VSCode) because at rule and selector patterns aren't included in rules. There a...

Show all

## what does regression mean

In software development, a **regression** means that <mark>a feature that used to work perfectly suddenly breaks after a new update, code change, or bug fix</mark>.

Essentially, it means the software has "regressed" (moved backward) into a worse or broken state.

### A Real-World Example

Imagine an app developer updates their checkout system to add a new "Pay with Apple Pay" button.

- **The Success:** The new Apple Pay button works flawlessly.
- **The Regression:** The code change accidentally breaks the existing "Pay with Credit Card" button, which had been working for years.

That broken credit card button is a **regression**.

### Why "Regressions" Matter to VS Code Engineers

When the VS Code team says changing the CSS tokenizer creates a **"high risk of regressions,"** they mean:

- If they update the code to support modern **nested CSS**, they might accidentally break how standard, **legacy CSS** displays.
- A developer could open an old project and suddenly find that their standard color codes or autocompletion features are completely broken because of the new update.

### How Developers Prevent Regressions

To stop this from happening, engineers use a practice called **Regression Testing**. Every time they write new code, they run a massive library of automated tests against the _old_ features to ensure nothing was accidentally damaged in the process.

AI can make mistakes, so double-check responses

