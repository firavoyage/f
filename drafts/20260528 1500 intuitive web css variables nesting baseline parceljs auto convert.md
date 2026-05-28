#

what is sass/scss

**Sass** (Syntactically Awesome Style Sheets) is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">a <strong>CSS preprocessor</strong>—a tool that extends the capabilities of standard CSS by adding advanced, programming-like features</mark>. Because web browsers can only read standard CSS, a compiler like [Dart Sass](https://sass-lang.com/documentation/syntax/) must first translate Sass/SCSS files into traditional `.css` files. \[[1](https://medium.com/@itsimranmd/sass-vs-scss-what-are-they-and-how-are-they-different-69e6bfa52304), [2](https://www.geeksforgeeks.org/css/what-is-the-difference-between-scss-and-sass/), [3](https://www.w3schools.com/sass/sass%5Fintro.asp), [4](https://tech-insider.org/sass-vs-css-2026/)]

The Core Difference: Sass vs. SCSS

Sass features two distinct syntaxes that accomplish the exact same thing but look different: \[[1](https://www.youtube.com/watch?v=oIU8pRHI1pg), [2](https://www.geeksforgeeks.org/css/what-is-the-difference-between-scss-and-sass/), [3](https://sass-lang.com/guide/), [4](https://www.technaureus.com/blog-detail/difference-between-sass-and-scss), [5](https://www.reddit.com/r/web%5Fdesign/comments/dr5zp5/confused%5Fscss%5Fvs%5Fsass/)]

- **SCSS (Sassy CSS)**: Uses the `.scss` file extension. It is a **superset of CSS**, meaning every valid CSS file is also a valid SCSS file. It uses standard curly braces `{}` and semicolons `;`. This is the most popular format in the industry.
- **Sass (Indented Syntax)**: Uses the `.sass` file extension. It uses strict indentation instead of curly braces and uses newlines instead of semicolons. \[[1](https://www.youtube.com/watch?v=TymGwiNMlh0\&t=39), [2](https://en.wikipedia.org/wiki/Sass%5F%28style%5Fsheet%5Flanguage%29), [3](https://sass-lang.com/guide/), [4](https://dev.to/mathlete/what-s-the-difference-between-css-sass-and-scss-g2b), [5](https://sass-lang.com/documentation/syntax/), [6](https://dev.to/rayechos/sass-vs-scss-whats-the-difference-and-which-one-should-you-use-4od4), [7](https://www.youtube.com/watch?v=oIU8pRHI1pg), [8](https://tech-insider.org/sass-vs-css-2026/)]

| Feature \[[1](https://www.youtube.com/watch?v=TymGwiNMlh0\&t=39), [2](https://dev.to/rayechos/sass-vs-scss-whats-the-difference-and-which-one-should-you-use-4od4), [3](https://www.reddit.com/r/webdev/comments/byg5rz/can%5Fsomeone%5Fexplain%5Fto%5Fme%5Fscss%5Fand%5Fsass/), [4](https://www.achillesinteractive.com/blog/what-is-the-difference-between-sass-scss-and-less), [5](https://dev.to/mathlete/what-s-the-difference-between-css-sass-and-scss-g2b), [6](https://www.youtube.com/watch?v=oIU8pRHI1pg), [7](https://www.geeksforgeeks.org/css/what-is-the-difference-between-scss-and-sass/), [8](https://www.reddit.com/r/web%5Fdesign/comments/dr5zp5/confused%5Fscss%5Fvs%5Fsass/), [9](https://www.interviewbit.com/blog/sass-vs-scss/), [10](https://tech-insider.org/sass-vs-css-2026/), [11](https://www.reddit.com/r/webdev/comments/5hqk6o/css%5Fscss%5Fsass/)] | SCSS (`.scss`)                                | Sass (`.sass`)                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | ------------------------------- |
| **Syntax Style**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Closely mirrors native CSS                    | Clean, whitespace-dependent     |
| **Separators**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Requires curly braces `{}` and semicolons `;` | Relies on indents and new lines |
| **CSS Compatibility**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Fully compatible; paste any CSS right in      | Native CSS must be reformatted  |
| **Popularity**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Industry standard, dominant syntax            | Less common, older legacy style |

Code Comparison

Here is how the exact same styling looks across standard CSS, SCSS, and Sass:

css

```
/* 1. Native CSS */
.nav-menu {
  background-color: #333;
}
.nav-menu ul {
  list-style: none;
}
```

Use code with caution.

scss

```
/* 2. SCSS Syntax */
$primary-color: #333; // Variable

.nav-menu {
  background-color: $primary-color;

  ul {                // Nesting
    list-style: none;
  }
}
```

Use code with caution.

sass

```
/* 3. Sass Syntax */
$primary-color: #333

.nav-menu
  background-color: $primary-color

  ul
    list-style: none
```

Use code with caution.

Powerful Features Added by Sass/SCSS \[[1](https://www.youtube.com/watch?v=TymGwiNMlh0\&t=39)]

- **Variables**: Save reusable values like colors, fonts, or sizes using the `$` symbol.
- **Nesting**: Place your child selectors inside parent selectors to match your HTML structure visually.
- **Mixins**: Create reusable blocks of CSS styles using `@mixin` and `@include` to prevent repeating yourself.
- **Partials and Modules**: Break stylesheets into smaller, manageable chunks and import them using `@use`.
- **Functions and Math**: Calculate sizes, mix colors, and manipulate values programmatically directly inside your styles. \[[1](https://www.reddit.com/r/web%5Fdesign/comments/dr5zp5/confused%5Fscss%5Fvs%5Fsass/), [2](https://www.geeksforgeeks.org/css/what-is-the-difference-between-scss-and-sass/), [3](https://dev.to/mathlete/what-s-the-difference-between-css-sass-and-scss-g2b), [4](https://medium.com/@itsimranmd/sass-vs-scss-what-are-they-and-how-are-they-different-69e6bfa52304), [5](https://forum.freecodecamp.org/t/what-is-scss-and-where-to-learn-it/455796), [6](https://elisabethashley.medium.com/scss-vs-css-why-scss-deserves-a-spot-in-your-toolkit-59e01898b8c0), [7](https://tech-insider.org/sass-vs-css-2026/), [8](https://www.youtube.com/watch?v=oIU8pRHI1pg), [9](https://sass-lang.com/documentation/)]

Would you like help **setting up a compiler** in your project, or would you like to see examples of **how to write mixins and functions**?

- [link](https://www.youtube.com/watch?v=TymGwiNMlh0\&t=39)\
  sass vs scss - what's the difference and which should you ...\
  Feb 1, 2019 — but this is the first one in the new year. so happy new year if it's the first video you're watching it's month late. but that's o...\
  6m\
  YouTube·Kevin Powell
- [link](https://sass-lang.com/guide/)\
  Sass Basics\
  💡 Fun fact: Sass has two syntaxes! The SCSS syntax ( . scss ) is used most commonly. It's a superset of CSS, which means all vali...\
  Sass
- [link](https://medium.com/@itsimranmd/sass-vs-scss-what-are-they-and-how-are-they-different-69e6bfa52304)\
  Sass vs Scss? What are they and how are they different?\
  Jun 24, 2020 — In simple words, Sass and Scss are both special stylesheet extensions that make writing CSS easier and efficient. They compile int...\
  Medium·Imran Md

Show all

You said: when is css variables supported

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">CSS Variables (Custom Properties) are fully supported across all modern web browsers</span></strong></mark> and achieve a global support rate of **over 95%**. According to MDN Web Docs, native CSS variables have achieved full baseline browser compatibility **since April 2017**. \[[1](https://caniuse.com/css-variables), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/--%2A)]

Minimum Supported Browser Versions

If you need to support users on legacy browser versions, standard CSS variables are available on the following minimum baselines: \[[1](https://www.testmuai.com/learning-hub/css-variables-browser-support/)]

- **Google Chrome**: Version 49+ (Released March 2016)
- **Mozilla Firefox**: Version 31+ (Released July 2014)
- **Apple Safari**: Version 9.1+ on macOS and Version 10+ on iOS (Released early 2016)
- **Microsoft Edge**: Version 16+ (Released October 2017)
- **Opera**: Version 36+ (Released March 2016) \[[1](https://www.testmuai.com/learning-hub/css-variables-browser-support/), [2](https://caniuse.com/#search=css%20variables)]

What Browsers Do Not Support It?

- **Internet Explorer**: Versions 5.5 through 11 **never** added native support for CSS variables.
- **Opera Mini**: All versions lack support because its server-side proxy rendering engine strips out dynamic `var()` functions. \[[1](https://www.testmuai.com/learning-hub/css-variables-browser-support/)]

Advanced "Next-Gen" CSS Variables (`@property`) \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property)]

While basic CSS variables have been standard for years, advanced **registered custom properties** (the `@property` rule, which allows you to give variables a specific data type, default values, and animation capabilities) became universally supported across all major engines more recently, in **July 2024**. \[[1](https://web.dev/blog/at-property-baseline), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@property)]

Best Practices for Backward Compatibility

If you must support old environments like Internet Explorer 11, you can safely write fallbacks right in your stylesheet:

css

```
.card {
  /* Fallback for old browsers (they ignore the next line) */
  background-color: #333333;

  /* Modern browsers overwrite the fallback with this variable */
  background-color: var(--brand-color);
}
```

Use code with caution.

You can also use a `@supports` feature query to target only the browsers that understand variables: \[[1](https://stackoverflow.com/questions/38012009/how-to-feature-detect-for-css-custom-properties)]

css

```
@supports (color: var(--test)) {
  /* Advanced styles requiring CSS variables go here */
}
```

Use code with caution.

Are you running into an **issue with a specific browser**, or are you looking to use CSS variables for something advanced like **dark mode toggles or animations**?

- [link](https://web.dev/blog/at-property-baseline)\
  @property: Next-gen CSS variables now with universal ...\
  Jul 12, 2024 — Get ready for a CSS power-up! The @property rule, part of the CSS Houdini umbrella of APIs, is now fully supported across all mode...\
  web.dev
- [link](https://www.testmuai.com/learning-hub/css-variables-browser-support/)\
  CSS Variables: Browser Support, Syntax, Fallbacks - TestMu AI\
  May 4, 2026 — CSS Variables: Browser Support, Syntax, Fallbacks. CSS Variables let you reuse CSS values via custom properties. Learn the syntax,\
  TestMu AI
- [link](https://caniuse.com/css-variables)\
  CSS Variables (Custom Properties) | Can I use... Support ...\
  Global. 95.69% Chrome. 4 - 47 supported. 48. See notes: 1. 49 - 147 Supported. 148 Supported. 149 - 151 Supported. Edge \* 12 - 14 ...\
  CanIUse

Show all

#

when is css nesting supported

Native CSS nesting is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>fully supported across all major browsers and achieves baseline availability as of December 2023</strong></mark>. \[[1](https://caniuse.com/css-nesting), [2](https://conradresearch.com/articles/css-nesting-is-now-baseline-supported)]

Because browser support reached parity across platforms, the feature is considered highly stable and safe for modern production projects. \[[1](https://makingspidersense.com/blog/css-nesting-2-years-later/), [2](https://conradresearch.com/articles/css-nesting-is-now-baseline-supported)]

Browser Support Matrix

The initial release required nested rules to start with a non-alphanumeric symbol (like `&`, `.`, or `#`). Later in 2023, browsers updated to the **relaxed syntax**, allowing you to nest elements directly (e.g., nesting a `div` or `p` tag without an `&` prefix). \[[1](https://blog.logrocket.com/native-css-nesting/), [2](https://www.testmuai.com/learning-hub/css-nesting-browser-support/), [3](https://caniuse.com/css-nesting), [4](https://github.com/sass/sass/issues/4014), [5](https://medium.com/codetodeploy/css-nesting-the-end-of-sass-not-quite-but-close-e5b0368914ca)]

| Browser \[[1](https://www.sitepoint.com/an-introduction-to-native-css-nesting/), [2](https://www.testmuai.com/learning-hub/css-nesting-browser-support/), [3](https://blog.logrocket.com/native-css-nesting/)] | Initial Support (With Symbols) | Relaxed Support (Direct Elements) |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | --------------------------------- |
| **Google Chrome**                                                                                                                                                                                              | Version 112 (April 2023)       | Version 120 (December 2023)       |
| **Microsoft Edge**                                                                                                                                                                                             | Version 112 (April 2023)       | Version 120 (December 2023)       |
| **Apple Safari**                                                                                                                                                                                               | Version 16.5 (May 2023)        | Version 17.2 (December 2023)      |
| **Mozilla Firefox**                                                                                                                                                                                            | Version 117 (August 2023)      | Version 117 (August 2023)         |
| **Opera**                                                                                                                                                                                                      | Version 98 (April 2023)        | Version 106 (December 2023)       |

Important Syntax Details

While the relaxed syntax removes structural limitations, there are key behaviors to remember compared to preprocessors like Sass: \[[1](https://medium.com/@canozcannn/a-guide-to-native-css-nesting-how-it-works-how-its-different-from-scss-and-when-to-use-each-one-16a00202e233), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting)]

- **No Concatenation**: You cannot string class names together (e.g., `.block { &__element {} }` is invalid in native CSS).
- **Element Ordering**: In compound selectors, type selectors must be written first (`p&` instead of `&p`). \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using), [2](https://web.dev/learn/css/nesting)]

You can track real-time global usage and implementation updates directly on the [Can I use CSS Nesting page](https://caniuse.com/css-nesting). \[[1](https://caniuse.com/css-nesting)]

Would you like to see **code examples** comparing native CSS nesting syntax to preprocessors like Sass, or do you need help setting up a **PostCSS fallback** for older browsers? \[[1](https://medium.com/@canozcannn/a-guide-to-native-css-nesting-how-it-works-how-its-different-from-scss-and-when-to-use-each-one-16a00202e233), [2](https://www.trevorlasn.com/blog/css-supports-nesting-now)]

- [link](https://caniuse.com/css-nesting)\
  CSS Nesting | Can I use... Support tables for HTML5, CSS3, etc

13.52 supported. KaiOS Browser. 2.5 supported. 3.1 supported. Notes Test on a real browser Known issues (0) Resources (6) Feedback...\
CanIUse

- [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Nesting/Using)\
  Using CSS nesting - MDN Web Docs\
  Nov 7, 2025 — Child selectors. You can use CSS nesting to create child selectors of a parent, which in turn can be used to target child elements...\
  MDN Web Docs
- [link](https://medium.com/@canozcannn/a-guide-to-native-css-nesting-how-it-works-how-its-different-from-scss-and-when-to-use-each-one-16a00202e233)\
  A guide to native CSS nesting: how it works, how it’s different from ...\
  Apr 24, 2025 — Modern CSS Nesting: Moving Beyond SCSS with Clean, Semantic Structures. Native CSS nesting is now supported in all major browsers,\
  Medium·Can Özcan

Show all

You said: what does baseline mean

**Baseline** is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">an official status in web development indicating that a feature is safe to use in production because it is supported across all major browser engines</mark>.

The standard was created by the WebDX Community Group (including Google, Mozilla, Apple, and Microsoft) to clear up confusion about which modern CSS, HTML, and JavaScript features are ready for general use.

The Two Baseline Categories

Features tracked by Baseline fall into one of two categories based on their age and support level:

- **Newly Available**: The feature has just gained support across the core browser engines (Chrome, Edge, Firefox, and Safari). It is ready for experimentation or projects that do not require deep backward compatibility.
- **Widely Available**: The feature has been supported by all major browsers for **at least 30 months**. At this point, most developers can use the feature without needing polyfills or fallbacks.

The Core Browsers Tracked

For a feature to achieve Baseline status, it must be supported by the current stable versions of:

- **Apple Safari** (WebKit engine)
- **Google Chrome** & **Microsoft Edge** (Chromium engine)
- **Mozilla Firefox** (Gecko engine)

You will often see the Baseline badge on documentation sites like MDN (Mozilla Developer Network) and Can I Use to give you an instant visual cue of a feature's stability.

If you are working on a project, tell me your **target audience** or **browser support requirements** (e.g., supporting older enterprise systems), and I can help you check if native nesting fits your tech stack.

You said: does parceljs or vite convert when building

Yes, **both ParcelJS and Vite will automatically convert (flatten) native CSS nesting** into standard un-nested CSS during production builds. \[[1](https://parceljs.org/languages/css/), [2](https://stackoverflow.com/questions/77778863/how-does-vite-handle-removal-of-css-nesting-in-built-css-files)]

They handle this internally through highly optimized modern tools rather than traditional PostCSS setups. \[[1](https://parceljs.org/), [2](https://github.com/vitejs/vite/discussions/5393)]

How Each Bundler Handles It

1\. Vite

- **The Mechanism:** Vite uses [Lightning CSS](https://vite.dev/config/build-options) (or `esbuild`) under the hood to process and minify your styles.
- **The Behavior:** When you run `vite build`, the compiler flattens your nested CSS rules into traditional top-level selectors. It targets modern browsers by default, but it safely un-nests styles to ensure broad compatibility. \[[1](https://vite.dev/config/build-options), [2](https://github.com/vitejs/vite/discussions/5393), [3](https://stackoverflow.com/questions/77778863/how-does-vite-handle-removal-of-css-nesting-in-built-css-files), [4](https://v2.vitejs.dev/guide/features), [5](https://v2.parceljs.cn/languages/css/)]

2\. ParcelJS

- **The Mechanism:** Parcel handles CSS through `@parcel/transformer-css`, which is also powered by [Lightning CSS](https://parceljs.org/features/production/) (a blazing-fast Rust compiler).
- **The Behavior:** Parcel uses your project's `browserslist` configuration inside `package.json`. If your target browsers include older versions that lack Baseline nesting support, Parcel will automatically transpile (syntax-lower) the nesting down into a standard format. If you target only modern browsers, it will leave the native nesting untouched to keep file sizes smaller. \[[1](https://parceljs.org/), [2](https://parceljs.org/features/production/), [4](https://parceljs.org/languages/css/), [5](https://v2.parceljs.cn/languages/css/)]

Why They Flatten It by Default

Even though modern browsers support native nesting, build tools default to flattening it to: \[[1](https://blog.logrocket.com/native-css-nesting/), [2](https://v2.parceljs.cn/languages/css/)]

1. Ensure your site **never breaks** for users on slightly outdated browser versions.
2. Optimize and compress the final code during the minification phase. \[, [2](https://parceljs.org/features/production/)]

If you would like, I can show you how to **configure your `package.json` browserslist** to control exactly how aggressively Parcel or Vite transpile your code, or show you how to inspect your production output.

- [link](https://parceljs.org/)\
  Parcel\
  Native performance. Parcel's JavaScript, CSS, HTML, and SVG compilers are written in Rust for maximum performance. These are 10-10...\
  Parcel.js
- [link](https://parceljs.org/languages/css/)\
  CSS - Parcel\
  Parcel includes support for transpiling modern CSS syntax to support older browsers out of the box, including vendor prefixing and...\
  Parcel.js
- [link](https://github.com/vitejs/vite/discussions/5393)\
  Why does vite allow nested CSS without PostCSS plugin #5393\
  Nov 3, 2024 — Maintainer. Original comment in English - Translate to English. It is not written in the docs separately as CSS nesting is an offi...\
  GitHub

Show all

You said: what do they convert by default besides nesting

Because both **Vite** and **ParcelJS** use [Lightning CSS](https://parceljs.org/features/production/) internally, they do much more than flatten nesting. By default, their compilers aggressively transpile modern CSS syntax down to older equivalents based on your target browser baseline. \[[1](https://vite.dev/config/build-options), [2](https://parceljs.org/features/production/), [3](https://vite.dev/config/build-options), [4](https://parceljs.org/)]

They automatically convert, polyfill, or optimize several major CSS features during a production build:

1\. Modern Color Spaces & Functions

- **What they do:** They convert high-gamut color formats like `oklch()`, `oklab()`, `lch()`, and `lab()` into standard `rgb()` or `hsl()` fallbacks.
- **The Benefit:** If a user’s device or browser doesn't support the vibrant, wide-gamut colors of `oklch()`, the compiler calculates the closest possible standard sRGB color so your layout doesn't break.
- **Color Mixing:** They pre-evaluate `color-mix()` functions when possible or provide appropriate fallbacks.

2\. Vendor Prefixes (Autoprefixing)

- **What they do:** They automatically inject necessary browser-specific prefixes (like `-webkit-`, `-moz-`, or `-ms-`) for layout features.
- **The Benefit:** You can write standard, clean CSS properties like `user-select: none;` or `backdrop-filter: blur(5px);`. The build tool automatically expands them to include properties like `-webkit-backdrop-filter` so they work across older versions of Safari and Chrome.

3\. Media Query Ranges (Level 4 Syntax)

- **What they do:** They transpile the responsive mathematical operator syntax back into traditional max/min terms.
- **Example:**
  - _You write:_ `@media (width <= 768px) {}`
  - _They convert to:_ `@media (max-width: 768px) {}`

4\. Custom Identifiers and Advanced Selectors

- **Pseudo-classes:** They transpiled advanced pseudo-classes like `:is()`, `:where()`, and `:has()` into comma-separated lists of plain selectors if your target browser configuration requires it.
- **Logical Properties:** Properties like `margin-inline-start` or `padding-block` are converted into directional rules (`margin-left` or `padding-top`) based on text-direction defaults for older browser engines.

5\. Standard Bundling Optimization (Non-Syntax Conversions)

Aside from translating syntax, Vite and Parcel modify your CSS structure to improve network performance:

- **`@import` Inlining:** They pull the content of files referenced with `@import` directly into a single combined file, reducing HTTP requests.
- **Asset URL Rebasing:** If your CSS links to images or fonts via `url('./image.png')`, the path is rewritten to match the final production layout (often appending content hashes for caching).
- **Minification:** They strip out all whitespace, comments, and rewrite long properties into shorthand equivalents (e.g., rewriting `margin: 10px 10px 10px 10px;` to `margin:10px;`). \[[1](https://vite.dev/guide/features), [2](https://parceljs.org/), [3](https://parceljs.org/features/production/), [4](https://v2.vitejs.dev/guide/features)]

Would you like to know how to specify a **custom browser target** in Vite or Parcel to prevent them from converting these modern features? \[[1](https://vite.dev/config/build-options), [2](https://parceljs.org/)]

- [link](https://vite.dev/guide/features)\
  Features | Vite\
  Environment API \* npm Dependency Resolving and Pre-Bundling. \* Hot Module Replacement. \* TypeScript. Transpile Only. TypeScript Co...\
  Vite
- [link](https://parceljs.org/)\
  Parcel\
  Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the...\
  Parcel.js
- [link](https://vite.dev/config/build-options)\
  Build Options - Vite\
  cssMinify ​ ... This option allows users to override CSS minification specifically instead of defaulting to build. minify , so you...\
  Vite

Show all

You said: besides css

Beyond CSS, **Vite** and **ParcelJS** automatically convert, strip, and optimize your **JavaScript, TypeScript, JSX, and static assets** to ensure they run efficiently in production. \[[1](https://parceljs.org/)]

By default, Vite compiles code to target a [Baseline Widely Available standard](https://vite.dev/config/build-options), while Parcel maps compilation strictly to your project’s `browserslist` settings. \[[1](https://vite.dev/config/build-options), [2](https://parceljs.org/), [3](https://parceljs.org/getting-started/webapp/)]

Here is what they convert by default during a production build:

1\. TypeScript and JSX / TSX

- **Syntax Stripping:** If you feed a `.ts`, `.jsx`, or `.tsx` file into Vite or Parcel, they instantly strip away the TypeScript type annotations and interface definitions.
- **React/Framework Compilation:** They automatically convert JSX element tags (like ) into native browser-executable JavaScript instructions (such as `React.createElement()` or standard `_jsx()` function calls) without requiring manual configuration. \[[1](https://vite.dev/guide/features), [2](https://parceljs.org/)]

2\. Modern JavaScript Syntax (Down-leveling)

If your target audience includes older browser engines, the bundlers transpile modern ECMAScript features into older, standard versions of JavaScript: \[[1](https://stackoverflow.com/questions/78181971/parcel-doesnt-transpile-the-code-without-babelrc-configuration-file), [2](https://parceljs.org/)]

- **Syntax Conversion:** They rewrite newer features—such as the nullish coalescing operator (`??`), optional chaining (`?.`), and object destructuring (`{...rest}`)—into older `if/else` logic or variable declarations.
- **Asynchronous Code:** They downlevel cutting-edge structures like Top-Level `await` if the target browser profile cannot support it natively. \[[1](https://github.com/vitejs/vite/issues/13556)]

3\. Environment Variables

- **Static Inlining:** They find occurrences of `process.env.VARIABLE_NAME` (Parcel) or `import.meta.env.VITE_VAR` (Vite) and hard-code their literal values directly into the final script file during compilation. \[[1](https://parceljs.org/)]

4\. Code Optimizations and Tree-Shaking

To keep your web pages loading as quickly as possible, they transform the structure of your JavaScript code:

- **Tree-Shaking:** They scan your entire codebase, detect any functions or modules imported from third-party libraries that you never actually called, and completely remove them from the production files.
- **Code Splitting:** If you utilize dynamic imports (`import('./lazyComponent.js')`), the build tool intercepts it. They carve that specific piece of code out into a separate chunk that is only downloaded by the user's browser when it is needed. \[[1](https://github.com/vitejs/vite/issues/13556), [2](https://vite.dev/guide/features), [3](https://blog.logrocket.com/vite-adoption-guide/)]

5\. Static Assets and Image Inlining

- **URL Rebasing:** If you import an image file inside a JavaScript file (`import logo from './logo.png'`), they replace that import statement with a plain string pointing to the final production path of the image.
- **Data URL Conversions (Inlining):** For tiny assets (typically under 4KB), they convert the actual file into a Base64 text string and paste it directly into your bundle, completely eliminating an extra HTTP network request.

Would you like to see how to adjust the **JavaScript target standard** (like changing it from ES2020 to ESNext) in your configuration file, or do you need help optimizing your **build file sizes**? \[[1](https://vite.dev/config/build-options)]

- [link](https://vite.dev/config/build-options)\
  Build Options - Vite\
  target ​ Type: string | string\[] Default: 'baseline-widely-available' Related: Browser Compatibility. Browser compatibility target...\
  Vite
- [link](https://vite.dev/guide/features)\
  Features | Vite\
  Environment API \* npm Dependency Resolving and Pre-Bundling. \* Hot Module Replacement. \* TypeScript. Transpile Only. TypeScript Co...\
  Vite
- [link](https://parceljs.org/)\
  Parcel\
  Parcel automatically includes content hashes in the names of all output files. This enables long-term browser caching, because the...\
  Parcel.js

Show all