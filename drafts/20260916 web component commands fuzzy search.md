# npm lib for fuzzy search

## npm lib for fuzzy search

The **most popular and reliable npm libraries for fuzzy search** depend entirely on your specific dataset size and performance needs.

Here is a breakdown of the top packages available on npm:

### 🌟 Most Popular All-Rounder

- **Fuse.js**:
  - **Best for**: Small to medium datasets where you need powerful features like weighted keys, nested data searching, and logical operators (and / or).
  - **Standout feature**: Zero dependencies, fully customizable threshold tuning, and client-side execution (~8.6 kB).
  - **Installation**: `npm install fuse.js` [link](https://www.fusejs.io/)

### ⚡ Best for Performance & Large Datasets

- **fuzzysort**:
  - **Best for**: Real-time "search-as-you-type" UI elements where speed is critical. It is significantly faster than [Fuse.js](https://www.fusejs.io/).
  - **Standout feature**: Designed after Sublime Text's file search. It features native support for multi-key highlighting and asynchronous Web Workers to keep your UI responsive.
  - **Installation**: `npm install fuzzysort` [link](https://www.reddit.com/r/nextjs/comments/10yxu92/what%5Fis%5Fyour%5Fgo%5Fto%5Fclientside%5Ffuzzy%5Fsearching/)
- **@leeoniya/ufuzzy**:
  - **Best for**: High-performance matching of short search phrases against massive arrays of strings (e.g., auto-complete dropdowns or filename lookups).
  - **Standout feature**: Ultra-low memory overhead with no massive index to build, processing hundreds of thousands of rows in mere milliseconds.
  - **Installation**: `npm install @leeoniya/ufuzzy` [link](https://npmjs.com/package/@leeoniya/ufuzzy)

### 📁 Best Full-Text Search with Fuzzy Support

- **minisearch**:
  - **Best for**: Documents where you want full-text search capabilities (like prefix matching and field boosting) combined with fuzzy tolerance.
  - **Standout feature**: A memory-efficient index that allows you to dynamically add or remove documents on the fly.
  - **Installation**: `npm install minisearch` [link](https://www.npmjs.com/package/minisearch)
- **flexsearch**:
  - **Best for**: Extreme client-side or server-side full-text search web workloads.
  - **Standout feature**: Offers unmatched, parallel execution speeds by using web workers and phonetic transformations.
  - **Installation**: `npm install flexsearch` [link](https://www.npmjs.com/package/flexsearch)

***

### Direct Comparison

| Library                                                            | Bundle Size (Minified) | Key Strength                           | Best Use Case                      |
| ------------------------------------------------------------------ | ---------------------- | -------------------------------------- | ---------------------------------- |
| **Fuse.js**                                                        | ~14 KB                 | Advanced queries, object nesting       | Dashboards, complex configurations |
| **[fuzzysort](https://www.npmjs.com/package/fuzzysort)**           | ~6 KB                  | Raw speed, HTML highlighting           | Suggest-as-you-type dropdowns      |
| **[@leeoniya/ufuzzy](https://npmjs.com/package/@leeoniya/ufuzzy)** | ~7.5 KB                | Massive data arrays, memory efficiency | Large file trees, command palettes |
| **[minisearch](https://www.npmjs.com/package/minisearch)**         | ~11 KB                 | Document indexation, auto-suggestions  | Blog posts, knowledge bases        |

To narrow this down, could you tell me a bit more about your project?

- What **kind of data** are you searching (simple string arrays, deeply nested JSON objects)?

- Roughly **how many items** are in your dataset?

- Are you running this on the **frontend (browser)** or **backend (Node.js)**?

- [link](https://www.reddit.com/r/nextjs/comments/10yxu92/what%5Fis%5Fyour%5Fgo%5Fto%5Fclientside%5Ffuzzy%5Fsearching/)\
  Reddit·r/nextjs\
  What is your go to client-side fuzzy searching library? - Reddit\
  Feb 10, 2023 — I move searching to backend if possible and always possible in my cases. Because it is faster and makes more sense to get the data...

- [link](https://www.fusejs.io/)\
  Fuse.js\
  Fuse.js — Lightweight Fuzzy-Search Library | Fuse.js\
  Extended search — operators for exact, prefix, suffix, inverse, and include matching Logical search — $and / $or expressions for s...

- [link](https://www.npmjs.com/package/minisearch)\
  NPM\
  minisearch - NPM\
  Sep 16, 2025 — Features \* Memory-efficient index, designed to support memory-constrained use cases like mobile browsers. \* Exact match, prefix se...

Show all

## examples

Here are implementation examples for the top libraries, ranging from a standard object array to complex full-text search.

### 🌟 1. Fuse.js Example (Best for Nesting & Custom Tuning)

Ideal for searching through **arrays of objects** with multiple searchable keys.

javascript

```
import Fuse from 'fuse.js';

// 1. Your dataset
const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "The Fellowship of the Ring", author: "J.R.R. Tolkien" },
  { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" }
];

// 2. Setup options
const options = {
  includeScore: true,
  // Search within both title and author fields
  keys: ['title', 'author'],
  // 0.0 = perfect match, 1.0 = matches anything. 0.3 is usually the sweet spot.
  threshold: 0.3
};

const fuse = new Fuse(books, options);

// 3. Execute search (handles typos like 'hobet')
const result = fuse.search('hobet');

console.log(result);
/* Output:
[
  {
    item: { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    refIndex: 0,
    score: 0.1414
  }
]
*/
```

Use code with caution.

### ⚡ 2. Fuzzysort Example (Best for Fast "Typeahead" & HTML Highlights)

Ideal for real-time search bars where you want to **highlight matching characters** for the user.

javascript

```
import fuzzysort from 'fuzzysort';

const targets = ['Dashboard', 'User Profile', 'System Settings', 'Security'];

// Search with typo 'sysem'
const results = fuzzysort.go('sysem', targets);

// Get the best match
const bestMatch = results[0];

console.log(bestMatch.target); // "System Settings"
console.log(bestMatch.score);  // Internal ranking score

// Highlight the matching characters for UI rendering
const highlightedHTML = fuzzysort.highlight(bestMatch, '<b>', '</b>');
console.log(highlightedHTML);
// Output: "<b>Sys</b>t<b>em</b> Settings"
```

Use code with caution.

### 📁 3. MiniSearch Example (Best for Document / Full-Text Search)

Ideal for searching structured documents or **blogs** where you want to index terms and allow dynamic updates.

javascript

```
import MiniSearch from 'minisearch';

// 1. Documents must have a unique identifier ('id')
const documents = [
  { id: 1, title: 'Getting Started with JS', text: 'JavaScript is a versatile language.' },
  { id: 2, title: 'Advanced React Guide', text: 'React relies heavily on JavaScript functions.' },
];

const miniSearch = new MiniSearch({
  fields: ['title', 'text'], // fields to index for searching
  storeFields: ['title']    // fields to return with search results
});

// 2. Index your documents
miniSearch.addAll(documents);

// 3. Search with fuzzy options
const results = miniSearch.search('javascrip', {
  fuzzy: 0.2, // accepts partial typos/prefixes
  prefix: true
});

console.log(results);
/* Output:
[
  { id: 1, score: 0.52, title: 'Getting Started with JS', terms: ['javascript'], match: { text: ['javascript'] } },
  { id: 2, score: 0.31, title: 'Advanced React Guide', terms: ['javascript'], match: { text: ['javascript'] } }
]
*/
```

Use code with caution.

Which style fits your stack best? If you have a specific UI framework in mind (like **React**, **Vue**, or **Vanilla JS**), I can show you how to tie these into an input field or hook component.


# how does vscode fuzzy search

## how does vscode fuzzy search

<mark><strong>Visual Studio Code handles fuzzy searching by checking that the characters you type appear in the exact order they are written, even if there are other letters interspersed between them</strong></mark>**.** It is a strict character-order matching system rather than a broad spell-check style search. [link](https://stackoverflow.com/questions/49138685/which-algorithm-is-used-to-implement-search-for-files-in-visual-studio-code-go)

The native engine is primarily used in **Quick Open** (`Ctrl+P` or `Cmd+P`) to find files, and it relies on a specific set of rules to rank your results: [link](https://levelup.gitconnected.com/fuzzy-searches-in-vs-code-tips-to-increase-developer-focus-and-productivity-6809c0f3ce9a)

### 1. The Core Matching Logic

- **Sequential Requirement:** If you search for `bld`, VS Code will match `**b**ui**ld**.js` because **b**, **l**, and **d** appear in that order. It will not match `blueprint.js` because there is no `d`.
- **Case-Insensitivity:** By default, it ignores letter casing during character collection but uses casing heavily for the scoring mechanism. [link](https://stackoverflow.com/questions/59752257/how-can-i-search-symbols-with-partial-words-in-vs-code-with-intellisense)

### 2. The Scoring & Ranking System

Once VS Code gathers all files matching your characters, a "fuzzy scorer" algorithm rates them from highest to lowest relevance: [link](https://stackoverflow.com/questions/49138685/which-algorithm-is-used-to-implement-search-for-files-in-visual-studio-code-go)

- **CamelCase Boundaries:** Matches on capital letters in `CamelCase` files score much higher. Typing `BC` will rank `**B**yte**C**ode.ts` at the very top.
- **Path and Boundary Separators:** Matches that happen right after a slash `/`, a dot `.`, or an underscore `_` receive major scoring bonuses. For example, searching `api` will prioritize `src/**api**/user.js` or `**api**.py`. [link](https://www.youtube.com/watch?v=r9OcvEJmYbY)
- **Proximity Matters:** Characters that sit closer together in the file name receive a higher score than characters scattered widely across a long file path.

### 3. How to Leverage It in Daily Work

You can use fuzzy searching across different contexts in VS Code natively:

- 📂 **File Search (`Ctrl+P` / `Cmd+P`):** The ultimate everyday shortcut. Instead of typing `components/modals/LoginModal.js`, you can simply type `comp mod log` or even `cml` to instantly pull it up.
- ⚙️ **Settings & Commands (`Ctrl+Shift+P` / `Cmd+Shift+P`):** Type fractured phrases like `conf font` to immediately find the "Configure Editor Font" command.
- 🔍 **Symbol Search (`Ctrl+T` / `Cmd+T`):** Searches globally across functions, classes, and variables in your workspace using the exact same fuzzy rules. [link](https://levelup.gitconnected.com/fuzzy-searches-in-vs-code-tips-to-increase-developer-focus-and-productivity-6809c0f3ce9a)

### 💡 Pro-Tip: Disabling Fuzzy Search on demand

If you are getting too many unrelated fuzzy matches and want an exact substring match, wrap your query in **double quotes** (e.g., `"login"`) inside the Quick Open bar. This forces VS Code to drop the fuzzy logic and match that exact sequence of letters. [link](https://www.youtube.com/watch?v=5J01Qsc9Bjg)

Are you trying to optimize your **search workflows**, or are you encountering issues with the **performance and accuracy** of your workspace searches? Let me know if you want to explore extensions like `fzf` integration or tweaking your `search.exclude` settings! [link](https://marketplace.visualstudio.com/items?itemName=rlivings39.fzf-quick-open)

- [link](https://levelup.gitconnected.com/fuzzy-searches-in-vs-code-tips-to-increase-developer-focus-and-productivity-6809c0f3ce9a)\
  Level Up Coding\
  Fuzzy Searches in VS Code: Tips to increase developer focus and productivity | by Thomaz Moura\
  Feb 19, 2020 — Fuzzy search in Visual Studio Code (VS Code) is a feature that allows you to search for files, symbols, functions, methods, classe...
- [link](https://www.youtube.com/watch?v=r9OcvEJmYbY)\
  YouTube\
  VS Code Shorts — Fuzzy matching in quick open - YouTube\
  Apr 5, 2024 — quick open is my preferred way to open files in VS Code. you open it with control P or command P then you can type in a file name ...
- [link](https://stackoverflow.com/questions/49138685/which-algorithm-is-used-to-implement-search-for-files-in-visual-studio-code-go)\
  Stack Overflow\
  Which algorithm is used to implement search for files in Visual Studio Code / Google Chrome Developer / Sublime (Ctrl+p or Cmd+p)?\
  Mar 6, 2018 — The search feature in Visual Studio Code, Google Chrome Developer, and Sublime uses a fuzzy search algorithm. The fuzzy search is ...

Show all

## what lib does it use

**VS Code does not use an external third-party library for its Quick Open fuzzy search; it uses its own custom-built algorithm.**

The native engine is written from scratch in TypeScript and lives directly inside the open-source VS Code core repository under [src/vs/base/common/fuzzyScorer.ts](https://github.com/microsoft/vscode/blob/main/src/vs/base/common/fuzzyScorer.ts).

### Why VS Code Built Its Own

Instead of pulling in popular Node.js fuzzy libraries (like `Fuse.js` or `fuzzaldrin`), Microsoft engineers custom-designed their logic to solve two very specific problems:

1. **Developer-Specific Contexts:** Text files have highly predictable boundaries. Traditional text-matching libraries don't understand that a capital letter (`CamelCase`), an underscore (`snake_case`), or a forward slash (folder paths) are high-value boundaries that indicate exactly what a developer is searching for.
2. **Extreme Speed Requirements:** The quick-open menu needs to filter tens of thousands of project workspace files in milliseconds, rendering results character-by-character as you type. Writing it natively in the core codebase allowed them to optimize bitwise logic and strictly cache scoring metrics.

### Distinguishing Native Search from File Content Search

While Quick Open uses internal TypeScript algorithms, VS Code **does** use a famous external binary for its global **text/content search** (`Ctrl+Shift+F` / `Cmd+Shift+F`):

- It embeds **[ripgrep (rg)](https://github.com/BurntSushi/ripgrep)**—a lightning-fast line search tool written in Rust—to aggressively crawl through file contents when you are looking for actual code text rather than file names.

Are you looking to **replicate this exact fuzzy behavior** in your own project, or are you trying to troubleshoot **slow search indexing** inside VS Code?

- [link](https://github.com/microsoft/vscode/blob/main/src/vs/base/common/fuzzyScorer.ts)\
  GitHub\
  vscode/src/vs/base/common/fuzzyScorer.ts at main - GitHub\
  See License.txt in the project root for license information. \*--------------------------------------------------------------------
