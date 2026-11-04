<!-- see also: 20261102 para research design systems vimium scrolling approaches tailwind w semantic classes -->

# all tailwind utils

### all tailwind utils

Because Tailwind CSS works on an **on-demand generation engine** and supports **arbitrary values** (like `mt-[13px]`), it is mathematically impossible to list every single individual class name. [](https://github.com/tailwindlabs/tailwindcss/discussions/9368)

However, you can explore the complete, structured index of all core utility categories directly on the official [Tailwind CSS Documentation](https://tailwindcss.com/docs). If you need a comprehensive, searchable reference tool while coding, you can check out the interactive [Tailwind CSS Cheat Sheet by Creative Tim](https://www.creative-tim.com/twcomponents/cheatsheet) or reference the full categorical breakdown on Tailwind Build. [](https://design.gitlab.com/product-foundations/tailwind-utilities)

#### Core Tailwind Utility Categorization

| Category                    | Key Utility Patterns                                     | Purpose & Examples                                                |
| --------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------- |
| **Layout**                  | block, flex, grid, hidden, top-\*, z-\*                  | Controls display type, positioning, and layering.                 |
| **Flexbox & Grid**          | flex-row, grid-cols-\*, gap-\*, justify-\*, items-\*     | Manages complex responsive layouts and spacing.                   |
| **Spacing**                 | p-\*, px-\*, pt-\*, m-\*, mx-\*, my-\*                   | Controls internal padding and external margins.                   |
| **Sizing**                  | w-\*, h-\*, size-\*, max-w-\*, min-h-\*                  | Sets dimensions (size-\* handles height and width together).      |
| **Typography**              | text-\*, font-\*, leading-\*, tracking-\*, line-clamp-\* | Configures text size, color, weight, alignment, and wrapping.     |
| **Backgrounds**             | bg-\*, bg-gradient-to-\*, from-\*, to-\*                 | Configures solid colors, opacities, and gradient states.          |
| **Borders & Rings**         | border-\*, rounded-\*, divide-\*, ring-\*                | Applies border widths, radius styling, dividers, and outlines.    |
| **Effects & Filters**       | shadow-\*, opacity-\*, blur-\*, mix-blend-\*             | Controls box shadows, transparency, and element blending.         |
| **Transitions & Animation** | transition-\*, duration-\*, ease-\*, animate-\*          | Handles hover effects, timing functions, and keyframe animations. |
| **Transforms**              | scale-\*, rotate-\*, translate-\*, skew-\*               | Coordinates element scaling, rotation, and 2D/3D moving.          |

#### Programmatically Extracting All Generated "Base" Classes

If you are building an autocomplete tool or need the raw list of core static classes inside a JavaScript/TypeScript environment, you can pull Tailwind's internal class list using its compiler architecture: [](https://github.com/tailwindlabs/tailwindcss/discussions/9368)

javascript

```
// Example for extracting the base configuration class list
const plugin = require('tailwindcss/plugin')
const createContext = require('tailwindcss/lib/lib/setupContextUtils').createContext
const resolveConfig = require('tailwindcss/resolveConfig')
const tailwindConfig = require('./tailwind.config.js')

const context = createContext(resolveConfig(tailwindConfig))
const allGeneratedClasses = Object.keys(context.getClassList())

console.log(allGeneratedClasses) // Outputs an array of thousands of base utilities

```



Are you trying to **generate a cheat sheet**, configure a custom **design token framework**, or look up a specific utility pattern like **gradients or grid items**? Let me know so I can give you the exact syntax.

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts - Tailwind CSS  
The display and padding utilities ( flex , shrink-0 , and p-6 ) to control the overall layout The max-width and margin utilities (
* [](https://www.youtube.com/watch?v=x1RJ5Q09PqM&t=598)  
YouTube·Web Dev Simplified  
10 Tailwind Classes I Wish I Knew Earlier  
Feb 20, 2024 — 10 Tailwind Classes I Wish I Knew Earlier but did you know there's also classes that add on even more features than just a single ...  
49s
* [](https://design.gitlab.com/product-foundations/tailwind-utilities)  
Pajamas Design System  
Tailwind utilities - Pajamas Design System - GitLab  
All Tailwind utilities can be viewed in Tailwind Documentation. A utility is a small, single-purpose CSS class that does one thing...

Show all

# how many first words of util classes are there in tailwind, what are they

Because Tailwind CSS features **thousands of individual utility classes**, they are structured into **dozens of distinct "first words"** (or core utility prefixes) separated by hyphens (e.g., `text-`, `bg-`, `p-`).

If we look strictly at the unique root keywords/prefixes that start a base utility class (excluding modifier prefixes like `hover:`, `md:`, or `dark:`), there are **roughly 120 to 140 core first words** depending on the specific version.

The absolute core "first words" of Tailwind utility classes are grouped by their design category:

### Layout & Sizing

* **`w-`** / **`h-`** / **`size-`**: Width, height, and combined size.
* **`min-w-`** / **`max-w-`** / **`min-h-`** / **`max-h-`**: Boundary sizing.
* **`flex`** / **`grid`** / **`inline`** / **`block`** / **`hidden`**: Display and layout modes.
* **`columns-`**: Multi-column layouts.
* **`object-`** / **`aspect-`**: Video and image fitting.
* **`position` roots**: `absolute`, `relative`, `fixed`, `sticky`, `static`.
* **`top-`** / **`bottom-`** / **`left-`** / **`right-`** / **`inset-`**: Coordinate positioning.
* **`z-`**: Z-index depth.

### Box Model & Spacing

* **`p-`** / **`px-`** / **`py-`** / **`pt-`** / **`pb-`** / **`pl-`** / **`pr-`** / **`ps-`** / **`pe-`**: Padding options (including logical properties).
* **`m-`** / **`mx-`** / **`my-`** / **`mt-`** / **`mb-`** / **`ml-`** / **`mr-`** / **`ms-`** / **`me-`**: Margin options.
* **`space-`**: Parent-driven spacing between elements.

### Flexbox & Grid Children

* **`flex-`**: Flex direction, wrap, grow, and shrink configurations.
* **`grid-cols-`** / **`grid-rows-`**: Grid template structures.
* **`col-`** / **`row-`**: Grid column/row spanning and placements.
* **`gap-`**: Gap spacing (`gap-x-`, `gap-y-`).
* **`justify-`** / **`content-`** / **`items-`** / **`self-`**: Alignment and justification.
* **`order-`**: Element ordering.

### Typography

* **`text-`**: Font sizes, text colors, and alignments.
* **`font-`**: Font families and weights.
* **`tracking-`** / **`leading-`**: Letter spacing and line height.
* **`list-`**: List styles and marker positions.
* **`underline`** / **`line-through`** / **`no-underline`**: Text decorations.
* **`uppercase`** / **`lowercase`** / **`capitalize`** / **`normal-case`**: Text transformations.
* **`truncate`** / **`whitespace-`** / **`break-`**: Text overflow controls.

### Backgrounds & Borders

* **`bg-`**: Background colors, images, positions, and sizes.
* **`from-`** / **`via-`** / **`to-`**: Gradient color stops.
* **`border-`**: Border widths, colors, and styles.
* **`rounded-`**: Border radius (corners).
* **`outline-`**: Focus outline styles and widths.
* **`ring-`**: Box-shadow based outline rings.

### Effects, Filters, & Transitions

* **`shadow-`**: Box shadows.
* **`opacity-`**: Element opacity.
* **`blur-`** / **`brightness-`** / **`contrast-`** / **`grayscale-`** / **`invert-`** / **`sepia-`**: CSS filter effects.
* **`transition-`**: CSS transition properties.
* **`duration-`** / **`delay-`** / **`ease-`**: Animation and transition timing.
* **`animate-`**: Core animations.
* **`scale-`** / **`rotate-`** / **`translate-`** / **`skew-`**: Transform utilities.

### Interactivity & Miscellaneous

* **`cursor-`**: Mouse cursor styles.
* **`pointer-events-`**: Pointer event interception.
* **`select-`**: User text selection rules.
* **`resize-`**: Textarea resizing controls.
* **`accent-`** / **`caret-`**: Form control coloring.
* **`sr-only`**: Screen reader visibility.

Are you looking for the exact count of a **specific version** of Tailwind (like v3 vs the newer v4), or are you trying to programmatically extract these prefixes for a **custom regex / build tool**?

# how to import a yaml file in vite

To import YAML files into a Vite project as plain JavaScript objects, you need to use a Vite or Rollup plugin, as Vite does not natively support YAML imports out of the box. [](https://tutorial-vite-plugin.pages.dev/)

The most efficient and widely used tool for this is **`@rollup/plugin-yaml`** (or the alternative community choice **`@modyfi/vite-plugin-yaml`**). [](https://github.com/figma/vite-plugin-yaml)

Here is the step-by-step setup:

### 1\. Install the Plugin

Open your terminal and install the plugin as a development dependency: [](https://docs.astro.build/en/recipes/add-yaml-support/)

bash

```
# Using npm
npm install @rollup/plugin-yaml --save-dev

# Using pnpm
pnpm add @rollup/plugin-yaml --save-dev

# Using yarn
yarn add @rollup/plugin-yaml --dev

```



### 2\. Configure Vite

Add the plugin to your `vite.config.js` or `vite.config.ts` file: [](https://github.com/figma/vite-plugin-yaml)

javascript

```
// vite.config.js
import { defineConfig } from 'vite';
import yaml from '@rollup/plugin-yaml';

export default defineConfig({
  plugins: [
    yaml() // Add the plugin to Vite's pipeline
  ]
});

```



### 3\. Import and Use

You can now import your `.yaml` or `.yml` files directly in your JavaScript or TypeScript files. The contents will automatically parse into an object: [](https://docs.astro.build/en/recipes/add-yaml-support/)

javascript

```
import data from './config.yaml';

console.log(data); 
// Output: { title: "My App", version: 1.0 }

```



---

### 💡 TypeScript Configuration (Optional)

If you are using **TypeScript**, your IDE will throw an error saying it cannot find the module for `.yaml` files. To fix this, create an environment definition file (e.g., `src/vite-env.d.ts` or `src/files.d.ts`) and add the declaration: [](https://docs.astro.build/en/recipes/add-yaml-support/)

typescript

```
// src/vite-env.d.ts
declare module '*.yaml' {
  const value: any;
  export default value;
}

declare module '*.yml' {
  const value: any;
  export default value;
}

```



Are you using **TypeScript** or standard **JavaScript**? If you run into issues with a framework like **Astro, Nuxt, or Vitest**, let me know so I can tailor the configuration for you!

* [](https://github.com/figma/vite-plugin-yaml)  
GitHub  
figma/vite-plugin-yaml: Transform a YAML file to a JS object  
Add ViteYAML to vite.config.js / you may configure the plugin by passing in an object. Then you can simply import yaml files like ...
* [](https://docs.astro.build/en/recipes/add-yaml-support/)  
docs.astro.build  
Installing a Vite or Rollup plugin  
While you can now import YAML data in your Astro project, your editor will not provide types for the imported data. This will allo...
* [](https://tutorial-vite-plugin.pages.dev/)  
Cloudflare  
YAML Plugin / Importing YAML files  
We'll create custom Vite plugins step by step, starting with a custom Vite plugin for loading. Our goal is to be able to import a ...

# what characters can the value of a css prop include

### what characters can the value of a css prop include

**A CSS property value can theoretically include almost any character in the Unicode spectrum**, but how they are used depends entirely on whether they are written as raw tokens, enclosed in strings, or utilized inside custom properties.

Here is a breakdown of what characters are allowed based on the context of the value:

#### 1\. Standard Property Values (Unquoted)

When writing standard, unquoted values (like keywords, lengths, or colors), the following characters are syntactically valid:

* **Alphanumeric characters:** Letters (`a-z`, `A-Z`) and digits (`0-9`).
* **Dashes and Underscores:** `-` and `_` (commonly used in keywords like `inline-block` or font names).
* **Decimals and Signs:** `.` for decimals, and `+` or `-` for indicating positive or negative values (e.g., `+10px`, `-2rem`).
* **Hash/Pound Sign:** `#` used exclusively to define hexadecimal color codes (e.g., `#ffffff`).
* **Punctuation Literals:** The comma `,` (to separate items in a list or function parameters) and the forward slash `/` (used as a separator in shorthand properties like `font` or `grid`).
* **Parentheses:** `(` and `)` used to enclose arguments for CSS functions like `calc()`, `var()`, `url()`, or `rgba()`. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values%5Fand%5Funits/Value%5Fdefinition%5Fsyntax)

#### 2\. Inside Quoted Strings

Inside properties that accept quoted strings (such as the `content` property or `font-family`), **virtually any Unicode character** can be included directly if your stylesheet uses a modern encoding like UTF-8. [](https://stackoverflow.com/questions/15643803/allowed-characters-in-css-content-property)

* **Special Symbols & Emojis:** Characters like `★`, `→`, or `🚀` can be typed directly into the string. [](https://stackoverflow.com/questions/15643803/allowed-characters-in-css-content-property)
* **Escape Sequences:** Any character can be represented using a backslash `\` followed by its hexadecimal Unicode code point (e.g., `\2192` for an arrow). [](https://www.bennadel.com/blog/4207-using-unicode-and-special-characters-within-the-content-property-in-css.htm)
* **Restrictions:** Direct, unescaped literal newlines and unescaped matching quote characters (e.g., a double quote inside a double-quoted string) are prohibited. [](https://stackoverflow.com/questions/15643803/allowed-characters-in-css-content-property)

#### 3\. Custom Properties (CSS Variables)

CSS custom properties (`--variable-name`) are incredibly permissive. Their values can include **nearly any character sequence** as long as it follows basic tokenization rules. [](https://css-tricks.com/a-complete-guide-to-custom-properties/)

* **Allowed:** You can store symbols, unquoted strings, or complex mathematical expressions.
* **Restrictions:** They cannot contain unmatched closing parentheses `)`, brackets `]`, or braces `}`, nor can they include top-level semicolons `;` (which would prematurely end the declaration). [](https://css-tricks.com/a-complete-guide-to-custom-properties/)

---

#### Character Allowance Overview

| Context              | Allowed Characters                                         | Prohibited / Restricted Characters                                    |
| -------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| **Standard Values**  | Letters, numbers, \-, \_, ., +, #, ,, /, ()                | Most symbols (@, &, $, ^), spaces within single identifiers           |
| **Quoted Strings**   | Almost all Unicode characters, spaces, punctuation, emojis | Unescaped newlines, unescaped matching quotes                         |
| **Custom Variables** | Nearly any valid CSS token sequence                        | Top-level semicolons ;, unmatched closing brackets/braces/parentheses |

Are you trying to figure out if a **specific character** is safe to use, or are you looking to sanitize user input for **custom CSS properties**?

* [](https://www.bennadel.com/blog/4207-using-unicode-and-special-characters-within-the-content-property-in-css.htm)  
Ben Nadel  
Using Unicode And Special Characters Within The content Property In CSS  
Use a backslash followed by the hexadecimal code point value. Unicode escape sequence in the content property is swallowed and not...
* [](https://stackoverflow.com/questions/15643803/allowed-characters-in-css-content-property)  
Stack Overflow  
Allowed characters in CSS 'content' property? - Stack Overflow  
March 26, 2013 — While direct input is often possible, using Unicode escapes (\`\\\\\` followed by the hexadecimal number) may be necessary if the char...
* [](https://css-tricks.com/a-complete-guide-to-custom-properties/)  
CSS-Tricks  
CSS Custom Properties Guide  
Best to stick with letters, numbers, and dashes while making sure the custom property is defined inside of a valid selector.

Show all

# what characters might standard prop values of a css prop include

Standard property values in **CSS** can include a wide variety of characters depending on the data type (numbers, strings, functions, or identifiers) being used.

The standard character types and specific symbols allowed in CSS property values are categorized below:

### 🔤 Alphanumeric Characters

* **Letters (a-z, A-Z):** Used for pre-defined keyword values (e.g., `block`, `auto`), font names (e.g., `Arial`), and units (e.g., `px`, `em`, `rem`, `vh`).
* **Digits (0-9):** Used for numeric values, lengths, grid tracks, and color formats (e.g., `line-height: 1.5;`, `width: 200px;`, `font-weight: 700;`).

### 🛠️ Punctuation and Separators

According to the [MDN Value Definition Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values%5Fand%5Funits/Value%5Fdefinition%5Fsyntax), certain literal symbols serve as crucial structural dividers: [](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Values%5Fand%5Funits/Value%5Fdefinition%5Fsyntax)

* **Space ( ):** Separates multiple values in shorthand properties or multi-component values (e.g., `margin: 10px 20px;`, `border: 1px solid red;`).
* **Comma ( , ):** Separates items in an enumeration, like font stacks, or parameters inside functions (e.g., `font-family: Helvetica, Arial, sans-serif;`, `rgb(255, 0, 0)`).
* **Slash ( / ):** Separates semantically different components that share a common syntax, most commonly used in shorthand properties like `font` (to separate font-size and line-height) or `grid-row` (e.g., `grid-area: 1 / 2 / 3 / 4;`, `font: 16px / 1.5 sans-serif;`).
* **Hyphen ( - ):** Used in multi-word keywords (e.g., `inline-block`, `space-between`) and custom property variables (e.g., `var(--main-color)`).
* **Underscore ( \_ ):** Allowed inside user-defined identifiers like custom property names.
* **Period / Dot ( . ):** Serves as a decimal point for fractional numbers (e.g., `opacity: 0.5;`, `seconds: 0.2s;`). [](https://css-tricks.com/a-complete-guide-to-custom-properties/)

### 🎨 Special Mathematical & Functional Symbols

* **Parentheses ( `()` ):** Used to enclose arguments for CSS functions (e.g., `calc(100% - 20px)`, `url("image.png")`, `clamp(1rem, 2vw, 3rem)`).
* **Percent Sign ( `%` ):** Denotes relative percentage values (e.g., `width: 100%;`).
* **Hash / Pound Sign ( `#` ):** Prefixes hexadecimal color codes (e.g., `background-color: #f0e765;`).
* **Plus ( `+` ) and Minus ( `-` ):** Explicitly denotes positive or negative numbers and acts as mathematical operators inside the `calc()` function (e.g., `top: -50px;`, `width: calc(50% + 5px);`).
* **Asterisk ( `*` ) and Forward Slash ( `/` ):** Act as multiplication and division operators inside `calc()`. [](https://info340.github.io/css-properties.html)

### 🔏 Quotation Marks and Strings

* **Single ( `'` ) and Double ( `"` ) Quotes:** Encloses string literals, such as specific font family names with spaces, the `content` property in pseudo-elements, or attribute selectors (e.g., `font-family: "Times New Roman";`, `content: '•';`). [](https://bobrov.dev/blog/css-custom-properties-in-depth/)

### 🌐 Unicode and Escaped Characters

* **Backslash ( `\` ):** Used to escape special characters or to input any ISO 10646 character via its hexadecimal numeric code (e.g., injecting an icon via content: `content: "\2022";`). [](https://stackoverflow.com/questions/2812072/allowed-characters-for-css-identifiers)

_(Note: While the exclamation mark `!` is frequently seen alongside property values in `!important`, it is technically classified as a delimiter component of the declaration rather than a part of the actual value string itself.)_ [](https://www.w3.org/TR/css-variables-1/)

Are you asking to help **validate a parser** you are writing, or are you trying to figure out what characters are allowed when naming **CSS custom properties (variables)**?

* [](https://css-tricks.com/a-complete-guide-to-custom-properties/)  
CSS-Tricks  
CSS Custom Properties Guide  
numbers, and dashes … set the value of a custom property #f0e765; --warning: var(--yellow); } it allows the name of a custom prope...
* [](https://www.w3.org/TR/css-variables-1/)  
W3C  
CSS Custom Properties for Cascading Variables Module Level 1  
Custom properties can contain a trailing ! important, but this is automatically removed from the property's value makes the custom...
* [](https://info340.github.io/css-properties.html)  
GitHub  
Chapter 7 CSS Properties | Client-Side Web Development  
Property name, colon, semicolon; multiple values separated by spaces. Children inherit parent properties unless non-inherited (e.g...

Show all

# write a json object where keys are all first words of tailwind util classes and values are an object of type prop and optional style, where type is a string of the value it accepts like length color, prop is a string or an array of css props it maps to, and style is a tuple of prop and value if it can be used alone wo value

### write a json object where keys are all first words of tailwind util classes and values are an object of type prop and optional style, where type is a string of the value it accepts like length color, prop is a string or an array of css props it maps to, and style is a tuple of prop and value if it can be used alone wo value

8 sites

#### Here are top web results for exploring this topic:

[](https://tailwindcss.com/docs/styling-with-utility-classes)

Tailwind CSS·https://tailwindcss.com

**Styling** with **utility classes** \- Core concepts - **Tailwind CSS**

Styling with utility classes. Building complex components from a constrained set of primitive utilities. Overview. You style things with Tailwind by combining many single-purpose presentational classe

[](https://stackoverflow.com/questions/77142963/building-multiple-default-tailwind-classes)

Stack Overflow·https://stackoverflow.com

Building Multiple Default **Tailwind Classes** \- Stack Overflow

Create custom plugin and add these utilities manually. You need to do some job to read through the json file and extract the values from it, and define it too as utilities. So here is the minimum proc

[](https://github.com/tailwindlabs/tailwindcss/discussions/8995)

GitHub·https://github.com

how to pass **tailwind classes** via **props** in next js? #8995 - GitHub

these tailwind classes(except placeholder ) are for my input and form element. i send these values to my input and form component as props and i use them to style them. but the problem starts here tha

[](https://stackoverflow.com/questions/76551463/tailwindcss-styling-not-applied-when-passing-prop-value-and-using-it-in-template)

Stack Overflow·https://stackoverflow.com

TailwindCSS **styling** not applied when passing **prop value** and using ...

Tailwind searches your source code for complete class names so it knows what CSS it needs to generate. This means that you cannot dynamically concatenate strings together to form a single class name, 

[](https://github.com/tailwindlabs/tailwindcss/discussions/10379)

GitHub·https://github.com

How do I get a **list** of **all tailwind classes**/utilities in development?

I'm trying to create a tool around Tailwind. What I need is a list/object of all available Tailwind classes in dev mode, so I can parse it and do some stuff with it. I looked in node\_modules/tailwindc

[](https://stackoverflow.com/questions/72213469/types-for-tailwind)

Stack Overflow·https://stackoverflow.com

**Types** for **tailwind** \- Stack Overflow

Highest score (default), Trending (recent votes count more), Date modified (newest first), Date created (oldest first). This answer is useful. -1\. This answer is not useful. Save this answer. Loading 

[](https://stackoverflow.com/questions/77926059/how-to-dynamically-pass-tailwind-styles-from-props)

Stack Overflow·https://stackoverflow.com

How to dynamically pass **tailwind styles** from **props** \- Stack Overflow

Loading when this answer was accepted… Show activity on this post. As per the documentation: The most important implication of how Tailwind extracts class names is that it will only find classes that 

[](https://stackoverflow.com/questions/74008042/how-to-use-props-variables-in-tailwind)

Stack Overflow·https://stackoverflow.com

How to use **props** variables in **Tailwind**? - **css** \- Stack Overflow

This answer is not useful. Save this answer. Loading when this answer was accepted… Show activity on this post. You can use a ternary expression with the prop you are passing as a condition to figure

# write a json object where keys are all first words of tailwind util classes and values are an object of type prop and optional style, where type is a string of the value it accepts like length color, prop is a string or an array of css props it maps to, and style is a tuple of prop and value if it can be used alone wo value

Below is a JSON mapping of common Tailwind CSS utility prefixes to their accepted value types, CSS properties, and standalone styles.

- `type`: Expected value type (`length`, `color`, `number`, `angle`, `percentage`, etc.).
- `prop`: CSS property or array of CSS properties affected.
- `style`: Optional `[property, value]` tuple for utilities that work without an additional value.

This covers the major Tailwind CSS v4 core utility families. It excludes responsive/state modifiers, arbitrary variants, and plugin-specific utilities.

```
{
  "p": { "type": "length", "prop": ["padding"] },
  "px": { "type": "length", "prop": ["padding-left", "padding-right"] },
  "py": { "type": "length", "prop": ["padding-top", "padding-bottom"] },
  "ps": { "type": "length", "prop": ["padding-inline-start"] },
  "pe": { "type": "length", "prop": ["padding-inline-end"] },
  "pt": { "type": "length", "prop": ["padding-top"] },
  "pr": { "type": "length", "prop": ["padding-right"] },
  "pb": { "type": "length", "prop": ["padding-bottom"] },
  "pl": { "type": "length", "prop": ["padding-left"] },

  "m": { "type": "length", "prop": ["margin"] },
  "mx": { "type": "length", "prop": ["margin-left", "margin-right"] },
  "my": { "type": "length", "prop": ["margin-top", "margin-bottom"] },
  "ms": { "type": "length", "prop": ["margin-inline-start"] },
  "me": { "type": "length", "prop": ["margin-inline-end"] },
  "mt": { "type": "length", "prop": ["margin-top"] },
  "mr": { "type": "length", "prop": ["margin-right"] },
  "mb": { "type": "length", "prop": ["margin-bottom"] },
  "ml": { "type": "length", "prop": ["margin-left"] },

  "w": { "type": "length | percentage | fraction | keyword", "prop": ["width"] },
  "min-w": { "type": "length | percentage | keyword", "prop": ["min-width"] },
  "max-w": { "type": "length | percentage | keyword", "prop": ["max-width"] },
  "h": { "type": "length | percentage | keyword", "prop": ["height"] },
  "min-h": { "type": "length | percentage | keyword", "prop": ["min-height"] },
  "max-h": { "type": "length | percentage | keyword", "prop": ["max-height"] },
  "size": { "type": "length | percentage | keyword", "prop": ["width", "height"] },

  "inset": { "type": "length | percentage", "prop": ["top", "right", "bottom", "left"] },
  "inset-x": { "type": "length | percentage", "prop": ["left", "right"] },
  "inset-y": { "type": "length | percentage", "prop": ["top", "bottom"] },
  "top": { "type": "length | percentage", "prop": ["top"] },
  "right": { "type": "length | percentage", "prop": ["right"] },
  "bottom": { "type": "length | percentage", "prop": ["bottom"] },
  "left": { "type": "length | percentage", "prop": ["left"] },
  "start": { "type": "length | percentage", "prop": ["inset-inline-start"] },
  "end": { "type": "length | percentage", "prop": ["inset-inline-end"] },

  "gap": { "type": "length", "prop": ["gap"] },
  "gap-x": { "type": "length", "prop": ["column-gap"] },
  "gap-y": { "type": "length", "prop": ["row-gap"] },
  "space-x": { "type": "length", "prop": ["margin-left"] },
  "space-y": { "type": "length", "prop": ["margin-top"] },

  "basis": { "type": "length | percentage | fraction", "prop": ["flex-basis"] },
  "grow": { "type": "number", "prop": ["flex-grow"] },
  "shrink": { "type": "number", "prop": ["flex-shrink"] },
  "order": { "type": "number", "prop": ["order"] },

  "grid-cols": { "type": "number | custom-grid-template", "prop": ["grid-template-columns"] },
  "grid-rows": { "type": "number | custom-grid-template", "prop": ["grid-template-rows"] },
  "col": { "type": "number | span", "prop": ["grid-column"] },
  "col-start": { "type": "number", "prop": ["grid-column-start"] },
  "col-end": { "type": "number", "prop": ["grid-column-end"] },
  "row": { "type": "number | span", "prop": ["grid-row"] },
  "row-start": { "type": "number", "prop": ["grid-row-start"] },
  "row-end": { "type": "number", "prop": ["grid-row-end"] },
  "auto-cols": { "type": "length | keyword", "prop": ["grid-auto-columns"] },
  "auto-rows": { "type": "length | keyword", "prop": ["grid-auto-rows"] },

  "text": { "type": "length | color", "prop": ["font-size", "color"] },
  "font": { "type": "font-family | font-weight", "prop": ["font-family", "font-weight"] },
  "leading": { "type": "length | number", "prop": ["line-height"] },
  "tracking": { "type": "length", "prop": ["letter-spacing"] },
  "indent": { "type": "length", "prop": ["text-indent"] },
  "decoration": { "type": "color | length | style", "prop": ["text-decoration-color", "text-decoration-thickness", "text-decoration-style"] },
  "underline-offset": { "type": "length", "prop": ["text-underline-offset"] },
  "align": { "type": "keyword", "prop": ["vertical-align"] },

  "bg": { "type": "color | image | size | position", "prop": ["background-color", "background-image", "background-size", "background-position"] },
  "from": { "type": "color | percentage", "prop": ["--tw-gradient-from"] },
  "via": { "type": "color | percentage", "prop": ["--tw-gradient-via"] },
  "to": { "type": "color | percentage", "prop": ["--tw-gradient-to"] },

  "border": { "type": "length | color | style", "prop": ["border-width", "border-color", "border-style"] },
  "border-x": { "type": "length | color | style", "prop": ["border-left-width", "border-right-width"] },
  "border-y": { "type": "length | color | style", "prop": ["border-top-width", "border-bottom-width"] },
  "border-t": { "type": "length | color | style", "prop": ["border-top-width", "border-top-color"] },
  "border-r": { "type": "length | color | style", "prop": ["border-right-width", "border-right-color"] },
  "border-b": { "type": "length | color | style", "prop": ["border-bottom-width", "border-bottom-color"] },
  "border-l": { "type": "length | color | style", "prop": ["border-left-width", "border-left-color"] },
  "rounded": { "type": "length | keyword", "prop": ["border-radius"] },
  "rounded-t": { "type": "length | keyword", "prop": ["border-top-left-radius", "border-top-right-radius"] },
  "rounded-b": { "type": "length | keyword", "prop": ["border-bottom-left-radius", "border-bottom-right-radius"] },
  "rounded-l": { "type": "length | keyword", "prop": ["border-top-left-radius", "border-bottom-left-radius"] },
  "rounded-r": { "type": "length | keyword", "prop": ["border-top-right-radius", "border-bottom-right-radius"] },

  "outline": { "type": "length | color | style", "prop": ["outline-width", "outline-color", "outline-style"] },
  "outline-offset": { "type": "length", "prop": ["outline-offset"] },
  "ring": { "type": "length | color", "prop": ["--tw-ring-width", "--tw-ring-color"] },
  "ring-offset": { "type": "length | color", "prop": ["--tw-ring-offset-width", "--tw-ring-offset-color"] },
  "shadow": { "type": "length | color | keyword", "prop": ["box-shadow"] },

  "opacity": { "type": "percentage | number", "prop": ["opacity"] },
  "z": { "type": "number | auto", "prop": ["z-index"] },
  "overflow": { "type": "keyword", "prop": ["overflow"] },
  "overflow-x": { "type": "keyword", "prop": ["overflow-x"] },
  "overflow-y": { "type": "keyword", "prop": ["overflow-y"] },
  "overscroll": { "type": "keyword", "prop": ["overscroll-behavior"] },
  "overscroll-x": { "type": "keyword", "prop": ["overscroll-behavior-x"] },
  "overscroll-y": { "type": "keyword", "prop": ["overscroll-behavior-y"] },

  "object": { "type": "keyword", "prop": ["object-fit", "object-position"] },
  "aspect": { "type": "ratio", "prop": ["aspect-ratio"] },
  "columns": { "type": "number | length", "prop": ["columns"] },
  "break": { "type": "keyword", "prop": ["break-before", "break-after", "break-inside"] },

  "cursor": { "type": "keyword", "prop": ["cursor"] },
  "select": { "type": "keyword", "prop": ["user-select"] },
  "resize": { "type": "keyword", "prop": ["resize"] },
  "scroll": { "type": "length | keyword", "prop": ["scroll-margin", "scroll-padding"] },
  "scroll-m": { "type": "length", "prop": ["scroll-margin"] },
  "scroll-p": { "type": "length", "prop": ["scroll-padding"] },
  "snap": { "type": "keyword", "prop": ["scroll-snap-type"] },
  "touch": { "type": "keyword", "prop": ["touch-action"] },

  "transition": { "type": "keyword | property", "prop": ["transition-property"] },
  "duration": { "type": "time", "prop": ["transition-duration"] },
  "delay": { "type": "time", "prop": ["transition-delay"] },
  "ease": { "type": "keyword | function", "prop": ["transition-timing-function"] },
  "animate": { "type": "keyword | animation", "prop": ["animation"] },

  "scale": { "type": "number | percentage", "prop": ["scale"] },
  "rotate": { "type": "angle", "prop": ["rotate"] },
  "translate": { "type": "length | percentage", "prop": ["translate"] },
  "transform": { "type": "keyword", "prop": ["transform"] },
  "origin": { "type": "keyword | position", "prop": ["transform-origin"] },

  "blur": { "type": "length", "prop": ["filter"] },
  "brightness": { "type": "percentage", "prop": ["filter"] },
  "contrast": { "type": "percentage", "prop": ["filter"] },
  "grayscale": { "type": "percentage", "prop": ["filter"] },
  "hue-rotate": { "type": "angle", "prop": ["filter"] },
  "invert": { "type": "percentage", "prop": ["filter"] },
  "saturate": { "type": "percentage", "prop": ["filter"] },
  "sepia": { "type": "percentage", "prop": ["filter"] },
  "drop-shadow": { "type": "shadow", "prop": ["filter"] },
  "backdrop": { "type": "keyword | length | color", "prop": ["backdrop-filter", "backdrop-blur", "backdrop-brightness", "backdrop-opacity"] },

  "fill": { "type": "color", "prop": ["fill"] },
  "stroke": { "type": "color | length", "prop": ["stroke", "stroke-width"] },
  "accent": { "type": "color", "prop": ["accent-color"] },
  "caret": { "type": "color", "prop": ["caret-color"] },

  "display": { "type": "keyword", "prop": ["display"] },
  "position": { "type": "keyword", "prop": ["position"] },
  "static": { "type": "keyword", "prop": ["position"], "style": ["position", "static"] },
  "fixed": { "type": "keyword", "prop": ["position"], "style": ["position", "fixed"] },
  "absolute": { "type": "keyword", "prop": ["position"], "style": ["position", "absolute"] },
  "relative": { "type": "keyword", "prop": ["position"], "style": ["position", "relative"] },
  "sticky": { "type": "keyword", "prop": ["position"], "style": ["position", "sticky"] },

  "flex": { "type": "keyword | number", "prop": ["display", "flex"], "style": ["display", "flex"] },
  "inline": { "type": "keyword", "prop": ["display"], "style": ["display", "inline"] },
  "block": { "type": "keyword", "prop": ["display"], "style": ["display", "block"] },
  "hidden": { "type": "keyword", "prop": ["display"], "style": ["display", "none"] },
  "grid": { "type": "keyword", "prop": ["display"], "style": ["display", "grid"] },
  "table": { "type": "keyword", "prop": ["display"], "style": ["display", "table"] },

  "items": { "type": "keyword", "prop": ["align-items"] },
  "justify": { "type": "keyword", "prop": ["justify-content"] },
  "content": { "type": "keyword", "prop": ["align-content"] },
  "self": { "type": "keyword", "prop": ["align-self"] },
  "place": { "type": "keyword", "prop": ["place-content", "place-items", "place-self"] },
  "flex-row": { "type": "keyword", "prop": ["flex-direction"], "style": ["flex-direction", "row"] },
  "flex-col": { "type": "keyword", "prop": ["flex-direction"], "style": ["flex-direction", "column"] },
  "flex-wrap": { "type": "keyword", "prop": ["flex-wrap"], "style": ["flex-wrap", "wrap"] },
  "flex-nowrap": { "type": "keyword", "prop": ["flex-wrap"], "style": ["flex-wrap", "nowrap"] },

  "uppercase": { "type": "keyword", "prop": ["text-transform"], "style": ["text-transform", "uppercase"] },
  "lowercase": { "type": "keyword", "prop": ["text-transform"], "style": ["text-transform", "lowercase"] },
  "capitalize": { "type": "keyword", "prop": ["text-transform"], "style": ["text-transform", "capitalize"] },
  "normal-case": { "type": "keyword", "prop": ["text-transform"], "style": ["text-transform", "none"] },
  "italic": { "type": "keyword", "prop": ["font-style"], "style": ["font-style", "italic"] },
  "not-italic": { "type": "keyword", "prop": ["font-style"], "style": ["font-style", "normal"] },
  "antialiased": { "type": "keyword", "prop": ["-webkit-font-smoothing", "-moz-osx-font-smoothing"] },

  "visible": { "type": "keyword", "prop": ["visibility"], "style": ["visibility", "visible"] },
  "invisible": { "type": "keyword", "prop": ["visibility"], "style": ["visibility", "hidden"] },
  "collapse": { "type": "keyword", "prop": ["visibility"], "style": ["visibility", "collapse"] },
  "sr-only": { "type": "keyword", "prop": ["position", "width", "height", "overflow", "clip", "white-space"] },
  "not-sr-only": { "type": "keyword", "prop": ["position", "width", "height", "overflow", "clip", "white-space"] }
}
```

Important implementation detail: Some prefixes are overloaded. For example, `text-red-500` maps to `color`, while `text-lg` maps to `font-size`. Similarly, `border` can represent border width or color.

For a Tailwind class parser, you'll eventually want to support multiple possible types per prefix or use the actual suffix to determine the property.

# write a json object where keys are all first words of tailwind util classes and values are an object of optional type and prop and optional style, where type is a string or an array of string of the value it accepts like length color, prop is a string or an array of css props it maps to, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

For Tailwind CSS v4, these are the utility prefixes whose accepted values can map to different CSS properties depending on the suffix/value.

The most important ambiguous utilities for your dictionary are:

## 1. Core ambiguous utilities

| Prefix       | Possible CSS properties                                                                               | Example                                                   |
| ------------ | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `bg`         | `background-color`, `background-image`, `background-size`, `background-position`, `background-repeat` | `bg-red-500`, `bg-cover`, `bg-gradient-to-r`              |
| `text`       | `color`, `font-size`, `text-align`, `text-overflow`                                                   | `text-red-500`, `text-lg`, `text-center`, `text-ellipsis` |
| `font`       | `font-family`, `font-weight`                                                                          | `font-sans`, `font-bold`                                  |
| `border`     | `border-width`, `border-color`, `border-style`                                                        | `border-2`, `border-red-500`, `border-dashed`             |
| `border-x`   | `border-left-width`, `border-right-width`, corresponding colors                                       | `border-x-2`, `border-x-red-500`                          |
| `border-y`   | `border-top-width`, `border-bottom-width`, corresponding colors                                       | `border-y-2`, `border-y-red-500`                          |
| `border-t`   | `border-top-width`, `border-top-color`, `border-top-style`                                            | `border-t-2`, `border-t-red-500`                          |
| `border-r`   | `border-right-width`, `border-right-color`, `border-right-style`                                      | `border-r-2`, `border-r-red-500`                          |
| `border-b`   | `border-bottom-width`, `border-bottom-color`, `border-bottom-style`                                   | `border-b-2`, `border-b-red-500`                          |
| `border-l`   | `border-left-width`, `border-left-color`, `border-left-style`                                         | `border-l-2`, `border-l-red-500`                          |
| `outline`    | `outline-width`, `outline-color`, `outline-style`, `outline-offset`                                   | `outline-2`, `outline-red-500`, `outline-dashed`          |
| `ring`       | ring width, ring color, ring inset                                                                    | `ring-2`, `ring-red-500`, `ring-inset`                    |
| `shadow`     | `box-shadow`, shadow color                                                                            | `shadow-lg`, `shadow-red-500`                             |
| `object`     | `object-fit`, `object-position`                                                                       | `object-cover`, `object-center`                           |
| `decoration` | `text-decoration-color`, `text-decoration-thickness`, `text-decoration-style`, `text-decoration-line` | `decoration-red-500`, `decoration-2`, `decoration-dashed` |
| `stroke`     | `stroke`, `stroke-width`                                                                              | `stroke-red-500`, `stroke-2`                              |
| `flex`       | `flex`, `flex-direction`, `flex-wrap`                                                                 | `flex-1`, `flex-col`, `flex-wrap`                         |
| `grid`       | `display`, grid template configuration                                                                | `grid`, `grid-cols-3`                                     |
| `translate`  | `translate`, X/Y translation                                                                          | `translate-4`, `translate-x-4`                            |
| `scale`      | `scale`, individual X/Y scale                                                                         | `scale-110`, `scale-x-50`                                 |
| `rotate`     | `rotate`, 3D rotation                                                                                 | `rotate-45`, `rotate-x-45`                                |
| `content`    | `align-content`, `content`                                                                            | `content-center`, `content-['hello']`                     |
| `list`       | `list-style-type`, `list-style-position`, `list-style-image`                                          | `list-disc`, `list-inside`                                |
| `columns`    | `columns`, column width                                                                               | `columns-3`, `columns-sm`                                 |

## 2. Additional prefixes with value-dependent behavior

These are worth handling separately because their suffixes select different variants of a CSS property.

| Prefix       | Possible CSS properties                                                 |
| ------------ | ----------------------------------------------------------------------- |
| `overflow`   | `overflow`, `overflow-x`, `overflow-y`                                  |
| `overscroll` | `overscroll-behavior`, `overscroll-behavior-x`, `overscroll-behavior-y` |
| `justify`    | `justify-content`, `justify-items`, `justify-self`                      |
| `place`      | `place-content`, `place-items`, `place-self`                            |
| `self`       | `align-self`, `justify-self`                                            |
| `items`      | `align-items`                                                           |
| `backdrop`   | `backdrop-filter` (multiple filter functions)                           |
| `transition` | `transition-property`, with named transition presets                    |
| `animate`    | `animation`                                                             |
| `filter`     | `filter` (multiple filter functions)                                    |
| `rounded`    | Different directional and corner-specific border-radius properties      |
| `divide`     | Border width, color and style on child elements                         |
| `gap`        | `gap`, `row-gap`, `column-gap` (via `gap-x` and `gap-y`)                |

## 3. Suggested parser strategy

Rather than treating every prefix as a direct CSS property, I'd recommend this structure:

```
{
  "text": {
    "color": {
      "type": "color",
      "prop": "color"
    },
    "size": {
      "type": "length",
      "prop": "font-size"
    },
    "alignment": {
      "type": "alignment",
      "prop": "text-align"
    },
    "overflow": {
      "type": "string",
      "prop": "text-overflow"
    }
  },
  "border": {
    "width": {
      "type": "length",
      "prop": "border-width"
    },
    "color": {
      "type": "color",
      "prop": "border-color"
    },
    "style": {
      "type": "string",
      "prop": "border-style"
    }
  },
  "bg": {
    "color": {
      "type": "color",
      "prop": "background-color"
    },
    "image": {
      "type": "image",
      "prop": "background-image"
    },
    "size": {
      "type": "string",
      "prop": "background-size"
    },
    "position": {
      "type": "position",
      "prop": "background-position"
    }
  }
}
```

Important: This is a classification of ambiguous utilities, not an exhaustive list of every Tailwind utility. Some cases require checking the actual Tailwind utility grammar and theme configuration. See the official [Tailwind utility documentation](https://tailwindcss.com/docs/styling-with-utility-classes?utm_source=chatgpt.com) and [theme variable reference](https://tailwindcss.com/docs/theme?utm_source=chatgpt.com).

For your parser, I'd use a two-stage resolution:

1. Match the longest utility prefix (`border-t` before `border`).
2. Resolve the remaining suffix against the accepted value categories.

This avoids incorrectly interpreting `border-t-red-500` as a generic border utility.

# write a json object where keys are all first words of tailwind util classes and values are an object of optional prop and optional style, where prop is a record of type and prop, where type is a string like length color and prop can be a string or an array of string of what it maps to and the most specific type comes first, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

Assuming Tailwind CSS v4, the structure below maps utility-class roots to their CSS property mappings.

Conventions:

- `prop` describes utilities that require a value.
- `type` describes the expected value type (`length`, `color`, `number`, `position`, etc.).
- `prop` can be a string or an array of CSS properties, ordered from most specific to least specific.
- `style` is `[cssProperty, cssValue]` for standalone utilities that work without a value.
- Both `prop` and `style` are optional.

```
{
  "p": {
    "prop": { "type": "length", "prop": "padding" }
  },
  "px": {
    "prop": { "type": "length", "prop": ["padding-inline"] }
  },
  "py": {
    "prop": { "type": "length", "prop": ["padding-block"] }
  },
  "pt": {
    "prop": { "type": "length", "prop": "padding-top" }
  },
  "pr": {
    "prop": { "type": "length", "prop": "padding-right" }
  },
  "pb": {
    "prop": { "type": "length", "prop": "padding-bottom" }
  },
  "pl": {
    "prop": { "type": "length", "prop": "padding-left" }
  },
  "ps": {
    "prop": { "type": "length", "prop": "padding-inline-start" }
  },
  "pe": {
    "prop": { "type": "length", "prop": "padding-inline-end" }
  },
  "m": {
    "prop": { "type": "length", "prop": "margin" }
  },
  "mx": {
    "prop": { "type": "length", "prop": "margin-inline" }
  },
  "my": {
    "prop": { "type": "length", "prop": "margin-block" }
  },
  "mt": {
    "prop": { "type": "length", "prop": "margin-top" }
  },
  "mr": {
    "prop": { "type": "length", "prop": "margin-right" }
  },
  "mb": {
    "prop": { "type": "length", "prop": "margin-bottom" }
  },
  "ml": {
    "prop": { "type": "length", "prop": "margin-left" }
  },
  "gap": {
    "prop": { "type": "length", "prop": "gap" }
  },
  "space": {
    "prop": { "type": "length", "prop": ["margin-inline", "margin-block"] }
  },
  "w": {
    "prop": { "type": "length", "prop": "width" }
  },
  "h": {
    "prop": { "type": "length", "prop": "height" }
  },
  "min": {
    "prop": { "type": "length", "prop": ["min-width", "min-height"] }
  },
  "max": {
    "prop": { "type": "length", "prop": ["max-width", "max-height"] }
  },
  "size": {
    "prop": { "type": "length", "prop": ["width", "height"] }
  },
  "inset": {
    "prop": { "type": "length", "prop": ["inset", "top", "right", "bottom", "left"] }
  },
  "top": {
    "prop": { "type": "length", "prop": "top" }
  },
  "right": {
    "prop": { "type": "length", "prop": "right" }
  },
  "bottom": {
    "prop": { "type": "length", "prop": "bottom" }
  },
  "left": {
    "prop": { "type": "length", "prop": "left" }
  },
  "start": {
    "prop": { "type": "length", "prop": "inset-inline-start" }
  },
  "end": {
    "prop": { "type": "length", "prop": "inset-inline-end" }
  },
  "basis": {
    "prop": { "type": "length", "prop": "flex-basis" }
  },
  "grow": {
    "prop": { "type": "number", "prop": "flex-grow" },
    "style": ["flex-grow", "1"]
  },
  "shrink": {
    "prop": { "type": "number", "prop": "flex-shrink" },
    "style": ["flex-shrink", "1"]
  },
  "order": {
    "prop": { "type": "number", "prop": "order" }
  },
  "grid": {
    "prop": { "type": "number", "prop": ["grid-template-columns", "grid-template-rows", "grid-column", "grid-row"] },
    "style": ["display", "grid"]
  },
  "col": {
    "prop": { "type": "number", "prop": ["grid-column", "grid-column-start",
```

# write a json object where keys are all first words of tailwind util classes and values are an object of optional prop and optional style, where prop is a record of type as key and prop as value, where type is a string like length color and prop can be a string or an array of string of what it maps to and the most specific type comes first, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

Below is a JSON mapping of common Tailwind CSS utility roots to their corresponding CSS properties.

Schema:

- `prop`: Maps a value type to one or more CSS properties. More specific types come first.
- `style`: A `[property, value]` tuple for utilities that have a fixed CSS value and don't require a user-supplied value.
- Both fields are optional.

```
{
  "container": {
    "style": ["width", "100%"]
  },
  "sr": {
    "style": ["position", "absolute"]
  },
  "not-sr": {
    "style": ["position", "static"]
  },
  "static": {
    "style": ["position", "static"]
  },
  "fixed": {
    "style": ["position", "fixed"]
  },
  "absolute": {
    "style": ["position", "absolute"]
  },
  "relative": {
    "style": ["position", "relative"]
  },
  "sticky": {
    "style": ["position", "sticky"]
  },
  "inset": {
    "prop": {
      "length": ["inset", "top", "right", "bottom", "left"]
    }
  },
  "top": {
    "prop": {
      "length": "top"
    }
  },
  "right": {
    "prop": {
      "length": "right"
    }
  },
  "bottom": {
    "prop": {
      "length": "bottom"
    }
  },
  "left": {
    "prop": {
      "length": "left"
    }
  },
  "start": {
    "prop": {
      "length": "inset-inline-start"
    }
  },
  "end": {
    "prop": {
      "length": "inset-inline-end"
    }
  },
  "z": {
    "prop": {
      "number": "z-index"
    }
  },
  "order": {
    "prop": {
      "number": "order"
    }
  },
  "col": {
    "prop": {
      "number": ["grid-column", "grid-column-start", "grid-column-end"]
    }
  },
  "row": {
    "prop": {
      "number": ["grid-row", "grid-row-start", "grid-row-end"]
    }
  },
  "float": {
    "prop": {
      "keyword": "float"
    }
  },
  "clear": {
    "prop": {
      "keyword": "clear"
    }
  },
  "m": {
    "prop": {
      "length": "margin"
    }
  },
  "mx": {
    "prop": {
      "length": ["margin-inline", "margin-left", "margin-right"]
    }
  },
  "my": {
    "prop": {
      "length": ["margin-block", "margin-top", "margin-bottom"]
    }
  },
  "mt": {
    "prop": {
      "length": "margin-top"
    }
  },
  "mr": {
    "prop": {
      "length": "margin-right"
    }
  },
  "mb": {
    "prop": {
      "length": "margin-bottom"
    }
  },
  "ml": {
    "prop": {
      "length": "margin-left"
    }
  },
  "ms": {
    "prop": {
      "length": "margin-inline-start"
    }
  },
  "me": {
    "prop": {
      "length": "margin-inline-end"
    }
  },
  "p": {
    "prop": {
      "length": "padding"
    }
  },
  "px": {
    "prop": {
      "length": ["padding-inline", "padding-left", "padding-right"]
    }
  },
  "py": {
    "prop": {
      "length": ["padding-block", "padding-top", "padding-bottom"]
    }
  },
  "pt": {
    "prop": {
      "length": "padding-top"
    }
  },
  "pr": {
    "prop": {
      "length": "padding-right"
    }
  },
  "pb": {
    "prop": {
      "length": "padding-bottom"
    }
  },
  "pl": {
    "prop": {
      "length": "padding-left"
    }
  },
  "ps": {
    "prop": {
      "length": "padding-inline-start"
    }
  },
  "pe": {
    "prop": {
      "length": "padding-inline-end"
    }
  },
  "space": {
    "prop": {
      "length": ["margin-inline", "margin-block"]
    }
  },
  "w": {
    "prop": {
      "length": "width"
    }
  },
  "min": {
    "prop": {
      "length": ["min-width", "min-height"]
    }
  },
  "max": {
    "prop": {
      "length": ["max-width", "max-height"]
    }
  },
  "h": {
    "prop": {
      "length": "height"
    }
  },
  "size": {
    "prop": {
      "length": ["width", "height"]
    }
  },
  "aspect": {
    "prop": {
      "ratio": "aspect-ratio"
    }
  },
  "columns": {
    "prop": {
      "number": "columns"
    }
  },
  "break": {
    "prop": {
      "keyword": ["break-before", "break-after", "break-inside"]
    }
  },
  "box": {
    "prop": {
      "keyword": "box-sizing"
    }
  },
  "block": {
    "style": ["display", "block"]
  },
  "inline": {
    "style": ["display", "inline"]
  },
  "flex": {
    "style": ["display", "flex"]
  },
  "grid": {
    "style": ["display", "grid"]
  },
  "table": {
    "style": ["display", "table"]
  },
  "hidden": {
    "style": ["display", "none"]
  },
  "contents": {
    "style": ["display", "contents"]
  },
  "flow-root": {
    "style": ["display", "flow-root"]
  },
  "visible": {
    "style": ["visibility", "visible"]
  },
  "invisible": {
    "style": ["visibility", "hidden"]
  },
  "collapse": {
    "style": ["visibility", "collapse"]
  },
  "flex-row": {
    "style": ["flex-direction", "row"]
  },
  "flex-col": {
    "style": ["flex-direction", "column"]
  },
  "flex-wrap": {
    "style": ["flex-wrap", "wrap"]
  },
  "flex-nowrap": {
    "style": ["flex-wrap", "nowrap"]
  },
  "flex-1": {
    "style": ["flex", "1 1 0%"]
  },
  "flex-auto": {
    "style": ["flex", "1 1 auto"]
  },
  "flex-none": {
    "style": ["flex", "none"]
  },
  "grow": {
    "prop": {
      "number": "flex-grow"
    }
  },
  "shrink": {
    "prop": {
      "number": "flex-shrink"
    }
  },
  "basis": {
    "prop": {
      "length": "flex-basis"
    }
  },
  "order": {
    "prop": {
      "number": "order"
    }
  },
  "justify": {
    "prop": {
      "keyword": "justify-content"
    }
  },
  "items": {
    "prop": {
      "keyword": "align-items"
    }
  },
  "content": {
    "prop": {
      "keyword": ["align-content", "content"]
    }
  },
  "self": {
    "prop": {
      "keyword": ["align-self", "justify-self"]
    }
  },
  "place": {
    "prop": {
      "keyword": ["place-content", "place-items", "place-self"]
    }
  },
  "gap": {
    "prop": {
      "length": ["gap", "row-gap", "column-gap"]
    }
  },
  "space-x": {
    "prop": {
      "length": "margin-inline"
    }
  },
  "space-y": {
    "prop": {
      "length": "margin-block"
    }
  },
  "grid-cols": {
    "prop": {
      "number": "grid-template-columns"
    }
  },
  "grid-rows": {
    "prop": {
      "number": "grid-template-rows"
    }
  },
  "auto-cols": {
    "prop": {
      "length": "grid-auto-columns"
    }
  },
  "auto-rows": {
    "prop": {
      "length": "grid-auto-rows"
    }
  },
  "col-span": {
    "prop": {
      "number": "grid-column"
    }
  },
  "row-span": {
    "prop": {
      "number": "grid-row"
    }
  },
  "grid-flow": {
    "prop": {
      "keyword": "grid-auto-flow"
    }
  },
  "overflow": {
    "prop": {
      "keyword": ["overflow", "overflow-x", "overflow-y"]
    }
  },
  "overscroll": {
    "prop": {
      "keyword": ["overscroll-behavior", "overscroll-behavior-x", "overscroll-behavior-y"]
    }
  },
  "truncate": {
    "style": ["text-overflow", "ellipsis"]
  },
  "text": {
    "prop": {
      "font-size": "font-size",
      "color": "color",
      "alignment": "text-align",
      "decoration-color": "text-decoration-color",
      "indent": "text-indent",
      "overflow": "text-overflow",
      "wrap": "text-wrap",
      "transform": "text-transform",
      "decoration-style": "text-decoration-style",
      "decoration-thickness": "text-decoration-thickness",
      "underline-offset": "text-underline-offset",
      "length": "text-decoration-thickness"
    }
  },
  "font": {
    "prop": {
      "font-family": "font-family",
      "font-weight": "font-weight",
      "keyword": "font-variant"
    }
  },
  "leading": {
    "prop": {
      "length": "line-height"
    }
  },
  "tracking": {
    "prop": {
      "length": "letter-spacing"
    }
  },
  "indent": {
    "prop": {
      "length": "text-indent"
    }
  },
  "decoration": {
    "prop": {
      "color": "text-decoration-color",
      "length": "text-decoration-thickness",
      "keyword": "text-decoration-line"
    }
  },
  "underline": {
    "style": ["text-decoration-line", "underline"]
  },
  "overline": {
    "style": ["text-decoration-line", "overline"]
  },
  "line-through": {
    "style": ["text-decoration-line", "line-through"]
  },
  "no-underline": {
    "style": ["text-decoration-line", "none"]
  },
  "whitespace": {
    "prop": {
      "keyword": "white-space"
    }
  },
  "break": {
    "prop": {
      "keyword": ["overflow-wrap", "word-break"]
    }
  },
  "hyphens": {
    "prop": {
      "keyword": "hyphens"
    }
  },
  "list": {
    "prop": {
      "keyword": ["list-style-type", "list-style-position", "list-style-image"]
    }
  },
  "placeholder": {
    "prop": {
      "color": "color"
    }
  },
  "bg": {
    "prop": {
      "color": "background-color",
      "image": "background-image",
      "position": "background-position",
      "size": "background-size",
      "repeat": "background-repeat",
      "attachment": "background-attachment",
      "clip": "background-clip",
      "origin": "background-origin"
    }
  },
  "from": {
    "prop": {
      "color": "--tw-gradient-from"
    }
  },
  "via": {
    "prop": {
      "color": "--tw-gradient-via"
    }
  },
  "to": {
    "prop": {
      "color": "--tw-gradient-to"
    }
  },
  "rounded": {
    "prop": {
      "length": "border-radius"
    }
  },
  "border": {
    "prop": {
      "color": "border-color",
      "length": "border-width",
      "style": "border-style"
    }
  },
  "border-x": {
    "prop": {
      "length": ["border-left-width", "border-right-width"],
      "color": ["border-left-color", "border-right-color"]
    }
  },
  "border-y": {
    "prop": {
      "length": ["border-top-width", "border-bottom-width"],
      "color": ["border-top-color", "border-bottom-color"]
    }
  },
  "border-t": {
    "prop": {
      "length": "border-top-width",
      "color": "border-top-color"
    }
  },
  "border-r": {
    "prop": {
      "length": "border-right-width",
      "color": "border-right-color"
    }
  },
  "border-b": {
    "prop": {
      "length": "border-bottom-width",
      "color": "border-bottom-color"
    }
  },
  "border-l": {
    "prop": {
      "length": "border-left-width",
      "color": "border-left-color"
    }
  },
  "outline": {
    "prop": {
      "color": "outline-color",
      "length": "outline-width",
      "style": "outline-style"
    }
  },
  "ring": {
    "prop": {
      "color": "--tw-ring-color",
      "length": "--tw-ring-width",
      "number": "--tw-ring-offset-width"
    }
  },
  "shadow": {
    "prop": {
      "color": "--tw-shadow-color",
      "length": "box-shadow"
    }
  },
  "opacity": {
    "prop": {
      "number": "opacity"
    }
  },
  "mix-blend": {
    "prop": {
      "keyword": "mix-blend-mode"
    }
  },
  "bg-blend": {
    "prop": {
      "keyword": "background-blend-mode"
    }
  },
  "object": {
    "prop": {
      "keyword": ["object-fit", "object-position"]
    }
  },
  "fill": {
    "prop": {
      "color": "fill"
    }
  },
  "stroke": {
    "prop": {
      "color": "stroke",
      "length": "stroke-width"
    }
  },
  "cursor": {
    "prop": {
      "keyword": "cursor"
    }
  },
  "pointer-events": {
    "prop": {
      "keyword": "pointer-events"
    }
  },
  "resize": {
    "prop": {
      "keyword": "resize"
    }
  },
  "select": {
    "prop": {
      "keyword": "user-select"
    }
  },
  "appearance": {
    "prop": {
      "keyword": "appearance"
    }
  },
  "transition": {
    "prop": {
      "keyword": "transition-property"
    }
  },
  "duration": {
    "prop": {
      "time": "transition-duration"
    }
  },
  "delay": {
    "prop": {
      "time": "transition-delay"
    }
  },
  "ease": {
    "prop": {
      "keyword": "transition-timing-function"
    }
  },
  "animate": {
    "prop": {
      "keyword": "animation"
    }
  },
  "scale": {
    "prop": {
      "number": ["scale", "scale-x", "scale-y"]
    }
  },
  "rotate": {
    "prop": {
      "angle": "rotate"
    }
  },
  "translate": {
    "prop": {
      "length": ["translate", "translate-x", "translate-y"]
    }
  },
  "skew": {
    "prop": {
      "angle": ["skew-x", "skew-y"]
    }
  },
  "origin": {
    "prop": {
      "keyword": "transform-origin"
    }
  },
  "blur": {
    "prop": {
      "length": "filter"
    }
  },
  "brightness": {
    "prop": {
      "number": "filter"
    }
  },
  "contrast": {
    "prop": {
      "number": "filter"
    }
  },
  "grayscale": {
    "prop": {
      "number": "filter"
    }
  },
  "invert": {
    "prop": {
      "number": "filter"
    }
  },
  "saturate": {
    "prop": {
      "number": "filter"
    }
  },
  "sepia": {
    "prop": {
      "number": "filter"
    }
  },
  "hue-rotate": {
    "prop": {
      "angle": "filter"
    }
  },
  "backdrop": {
    "prop": {
      "length": "backdrop-filter",
      "color": "backdrop-filter",
      "keyword": "backdrop-filter"
    }
  },
  "grayscale": {
    "prop": {
      "number": "filter"
    }
  },
  "divide": {
    "prop": {
      "length": ["border-width", "border-color"],
      "keyword": "border-style"
    }
  },
  "space": {
    "prop": {
      "length": ["margin-inline", "margin-block"]
    }
  },
  "accent": {
    "prop": {
      "color": "accent-color"
    }
  },
  "caret": {
    "prop": {
      "color": "caret-color"
    }
  },
  "scroll": {
    "prop": {
      "length": ["scroll-margin", "scroll-padding"],
      "keyword": ["scroll-behavior", "scroll-snap-type"]
    }
  },
  "snap": {
    "prop": {
      "keyword": ["scroll-snap-align", "scroll-snap-stop", "scroll-snap-type"]
    }
  },
  "will-change": {
    "prop": {
      "keyword": "will-change"
    }
  },
  "isolation": {
    "style": ["isolation", "isolate"]
  },
  "antialiased": {
    "style": ["-webkit-font-smoothing", "antialiased"]
  },
  "subpixel-antialiased": {
    "style": ["-webkit-font-smoothing", "auto"]
  },
  "italic": {
    "style": ["font-style", "italic"]
  },
  "not-italic": {
    "style": ["font-style", "normal"]
  },
  "uppercase": {
    "style": ["text-transform", "uppercase"]
  },
  "lowercase": {
    "style": ["text-transform", "lowercase"]
  },
  "capitalize": {
    "style": ["text-transform", "capitalize"]
  },
  "normal-case": {
    "style": ["text-transform", "none"]
  },
  "underline-offset": {
    "prop": {
      "length": "text-underline-offset"
    }
  },
  "sr-only": {
    "style": ["position", "absolute"]
  }
}
```

Note: This is a practical utility-root mapping, not an exhaustive Tailwind grammar. Some roots are overloaded or context-dependent (`text`, `border`, `object`, `scroll`, etc.). Also, Tailwind variants such as `hover:`, `focus:`, `dark:`, and responsive prefixes such as `md:` are modifiers rather than utility roots.

# write a json object where keys are all first words of tailwind util classes and values are an object of optional prop and optional style, where prop is an array of tuple of type and prop, where type is a string like length color or an array of string keywords and prop is a string or an array of string, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

Assuming Tailwind CSS v4 core utilities, the structure below uses:

- `prop`: An array of `[type, cssProperty]` tuples for utilities that accept values.
- `style`: A `[cssProperty, value]` tuple for standalone utilities that have a fixed CSS declaration.
- `type`: Either a value type (`length`, `color`, `number`, etc.) or an array of allowed keywords.
- `prop`: Can be a string or an array of strings when multiple CSS properties are affected.

```
{
  "p": {
    "prop": [["length", "padding"]]
  },
  "px": {
    "prop": [["length", ["padding-left", "padding-right"]]]
  },
  "py": {
    "prop": [["length", ["padding-top", "padding-bottom"]]]
  },
  "pt": {
    "prop": [["length", "padding-top"]]
  },
  "pb": {
    "prop": [["length", "padding-bottom"]]
  },
  "pl": {
    "prop": [["length", "padding-left"]]
  },
  "pr": {
    "prop": [["length", "padding-right"]]
  },
  "ps": {
    "prop": [["length", "padding-inline-start"]]
  },
  "pe": {
    "prop": [["length", "padding-inline-end"]]
  },
  "m": {
    "prop": [["length", "margin"]]
  },
  "mx": {
    "prop": [["length", ["margin-left", "margin-right"]]]
  },
  "my": {
    "prop": [["length", ["margin-top", "margin-bottom"]]]
  },
  "mt": {
    "prop": [["length", "margin-top"]]
  },
  "mb": {
    "prop": [["length", "margin-bottom"]]
  },
  "ml": {
    "prop": [["length", "margin-left"]]
  },
  "mr": {
    "prop": [["length", "margin-right"]]
  },
  "ms": {
    "prop": [["length", "margin-inline-start"]]
  },
  "me": {
    "prop": [["length", "margin-inline-end"]]
  },
  "gap": {
    "prop": [["length", "gap"]]
  },
  "gap-x": {
    "prop": [["length", "column-gap"]]
  },
  "gap-y": {
    "prop": [["length", "row-gap"]]
  },
  "space-x": {
    "prop": [["length", "margin-inline-start"]]
  },
  "space-y": {
    "prop": [["length", "margin-block-start"]]
  },
  "w": {
    "prop": [["length", "width"]]
  },
  "min-w": {
    "prop": [["length", "min-width"]]
  },
  "max-w": {
    "prop": [["length", "max-width"]]
  },
  "h": {
    "prop": [["length", "height"]]
  },
  "min-h": {
    "prop": [["length", "min-height"]]
  },
  "max-h": {
    "prop": [["length", "max-height"]]
  },
  "size": {
    "prop": [["length", ["width", "height"]]]
  },
  "inset": {
    "prop": [["length", ["top", "right", "bottom", "left"]]]
  },
  "inset-x": {
    "prop": [["length", ["left", "right"]]]
  },
  "inset-y": {
    "prop": [["length", ["top", "bottom"]]]
  },
  "top": {
    "prop": [["length", "top"]]
  },
  "right": {
    "prop": [["length", "right"]]
  },
  "bottom": {
    "prop": [["length", "bottom"]]
  },
  "left": {
    "prop": [["length", "left"]]
  },
  "start": {
    "prop": [["length", "inset-inline-start"]]
  },
  "end": {
    "prop": [["length", "inset-inline-end"]]
  },
  "z": {
    "prop": [["number", "z-index"]]
  },
  "order": {
    "prop": [["number", "order"]]
  },
  "flex": {
    "prop": [["flex", "flex"]],
    "style": ["display", "flex"]
  },
  "basis": {
    "prop": [["length", "flex-basis"]]
  },
  "grow": {
    "prop": [[["number", "grow"], "flex-grow"]],
    "style": ["flex-grow", "1"]
  },
  "shrink": {
    "prop": [["number", "flex-shrink"]],
    "style": ["flex-shrink", "1"]
  },
  "grid": {
    "style": ["display", "grid"]
  },
  "grid-cols": {
    "prop": [["number", "grid-template-columns"]]
  },
  "grid-rows": {
    "prop": [["number", "grid-template-rows"]]
  },
  "col": {
    "prop": [["number", "grid-column"]]
  },
  "row": {
    "prop": [["number", "grid-row"]]
  },
  "col-span": {
    "prop": [["number", "grid-column"]]
  },
  "row-span": {
    "prop": [["number", "grid-row"]]
  },
  "auto-cols": {
    "prop": [["length", "grid-auto-columns"]]
  },
  "auto-rows": {
    "prop": [["length", "grid-auto-rows"]]
  },
  "block": {
    "style": ["display", "block"]
  },
  "inline": {
    "style": ["display", "inline"]
  },
  "hidden": {
    "style": ["display", "none"]
  },
  "contents": {
    "style": ["display", "contents"]
  },
  "table": {
    "style": ["display", "table"]
  },
  "flow-root": {
    "style": ["display", "flow-root"]
  },
  "inline-block": {
    "style": ["display", "inline-block"]
  },
  "inline-flex": {
    "style": ["display", "inline-flex"]
  },
  "inline-grid": {
    "style": ["display", "inline-grid"]
  },
  "static": {
    "style": ["position", "static"]
  },
  "relative": {
    "style": ["position", "relative"]
  },
  "absolute": {
    "style": ["position", "absolute"]
  },
  "fixed": {
    "style": ["position", "fixed"]
  },
  "sticky": {
    "style": ["position", "sticky"]
  },
  "float": {
    "prop": [[["left", "right", "none", "start", "end"], "float"]]
  },
  "clear": {
    "prop": [[["left", "right", "both", "none", "start", "end"], "clear"]]
  },
  "overflow": {
    "prop": [[["auto", "hidden", "clip", "visible", "scroll"], "overflow"]]
  },
  "overflow-x": {
    "prop": [[["auto", "hidden", "clip", "visible", "scroll"], "overflow-x"]]
  },
  "overflow-y": {
    "prop": [[["auto", "hidden", "clip", "visible", "scroll"], "overflow-y"]]
  },
  "overscroll": {
    "prop": [[["auto", "contain", "none"], "overscroll-behavior"]]
  },
  "overscroll-x": {
    "prop": [[["auto", "contain", "none"], "overscroll-behavior-x"]]
  },
  "overscroll-y": {
    "prop": [[["auto", "contain", "none"], "overscroll-behavior-y"]]
  },
  "object": {
    "prop": [[["contain", "cover", "fill", "none", "scale-down"], "object-fit"]]
  },
  "object-position": {
    "prop": [["position", "object-position"]]
  },
  "visible": {
    "style": ["visibility", "visible"]
  },
  "invisible": {
    "style": ["visibility", "hidden"]
  },
  "collapse": {
    "style": ["visibility", "collapse"]
  },
  "opacity": {
    "prop": [["number", "opacity"]]
  },
  "bg": {
    "prop": [
      ["color", "background-color"],
      ["image", "background-image"],
      ["position", "background-position"],
      ["size", "background-size"],
      ["attachment", "background-attachment"],
      ["repeat", "background-repeat"]
    ]
  },
  "from": {
    "prop": [["color", "--tw-gradient-from"]]
  },
  "via": {
    "prop": [["color", "--tw-gradient-via"]]
  },
  "to": {
    "prop": [["color", "--tw-gradient-to"]]
  },
  "text": {
    "prop": [
      ["color", "color"],
      ["length", "font-size"],
      [["left", "center", "right", "justify", "start", "end"], "text-align"],
      [["wrap", "nowrap", "balance", "pretty"], "text-wrap"]
    ]
  },
  "font": {
    "prop": [
      ["font-family", "font-family"],
      [["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"], "font-weight"]
    ]
  },
  "tracking": {
    "prop": [["length", "letter-spacing"]]
  },
  "leading": {
    "prop": [["length", "line-height"]]
  },
  "indent": {
    "prop": [["length", "text-indent"]]
  },
  "decoration": {
    "prop": [
      ["color", "text-decoration-color"],
      ["length", "text-decoration-thickness"],
      [["solid", "double", "dotted", "dashed", "wavy"], "text-decoration-style"]
    ]
  },
  "underline": {
    "style": ["text-decoration-line", "underline"]
  },
  "overline": {
    "style": ["text-decoration-line", "overline"]
  },
  "line-through": {
    "style": ["text-decoration-line", "line-through"]
  },
  "no-underline": {
    "style": ["text-decoration-line", "none"]
  },
  "uppercase": {
    "style": ["text-transform", "uppercase"]
  },
  "lowercase": {
    "style": ["text-transform", "lowercase"]
  },
  "capitalize": {
    "style": ["text-transform", "capitalize"]
  },
  "normal-case": {
    "style": ["text-transform", "none"]
  },
  "whitespace": {
    "prop": [[["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"], "white-space"]]
  },
  "break": {
    "prop": [[["normal", "words", "all", "keep"], "overflow-wrap"]]
  },
  "hyphens": {
    "prop": [[["none", "manual", "auto"], "hyphens"]]
  },
  "list": {
    "prop": [
      [["none", "disc", "decimal"], "list-style-type"],
      [["inside", "outside"], "list-style-position"]
    ]
  },
  "align": {
    "prop": [[["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super"], "vertical-align"]]
  },
  "decoration-skip": {
    "prop": [[["none", "auto", "all"], "text-decoration-skip-ink"]]
  },
  "antialiased": {
    "style": ["-webkit-font-smoothing", "antialiased"]
  },
  "subpixel-antialiased": {
    "style": ["-webkit-font-smoothing", "auto"]
  },
  "italic": {
    "style": ["font-style", "italic"]
  },
  "not-italic": {
    "style": ["font-style", "normal"]
  },
  "normal-nums": {
    "style": ["font-variant-numeric", "normal"]
  },
  "border": {
    "prop": [
      ["length", "border-width"],
      ["color", "border-color"],
      [["solid", "dashed", "dotted", "double", "hidden", "none"], "border-style"]
    ]
  },
  "border-x": {
    "prop": [
      ["length", ["border-left-width", "border-right-width"]],
      ["color", ["border-left-color", "border-right-color"]]
    ]
  },
  "border-y": {
    "prop": [
      ["length", ["border-top-width", "border-bottom-width"]],
      ["color", ["border-top-color", "border-bottom-color"]]
    ]
  },
  "border-t": {
    "prop": [["length", "border-top-width"], ["color", "border-top-color"]]
  },
  "border-b": {
    "prop": [["length", "border-bottom-width"], ["color", "border-bottom-color"]]
  },
  "border-l": {
    "prop": [["length", "border-left-width"], ["color", "border-left-color"]]
  },
  "border-r": {
    "prop": [["length", "border-right-width"], ["color", "border-right-color"]]
  },
  "rounded": {
    "prop": [["length", "border-radius"]]
  },
  "rounded-t": {
    "prop": [["length", ["border-top-left-radius", "border-top-right-radius"]]]
  },
  "rounded-b": {
    "prop": [["length", ["border-bottom-left-radius", "border-bottom-right-radius"]]]
  },
  "rounded-l": {
    "prop": [["length", ["border-top-left-radius", "border-bottom-left-radius"]]]
  },
  "rounded-r": {
    "prop": [["length", ["border-top-right-radius", "border-bottom-right-radius"]]]
  },
  "rounded-tl": {
    "prop": [["length", "border-top-left-radius"]]
  },
  "rounded-tr": {
    "prop": [["length", "border-top-right-radius"]]
  },
  "rounded-bl": {
    "prop": [["length", "border-bottom-left-radius"]]
  },
  "rounded-br": {
    "prop": [["length", "border-bottom-right-radius"]]
  },
  "outline": {
    "prop": [
      ["length", "outline-width"],
      ["color", "outline-color"],
      [["none", "solid", "dashed", "dotted", "double"], "outline-style"]
    ]
  },
  "ring": {
    "prop": [
      ["length", "--tw-ring-width"],
      ["color", "--tw-ring-color"]
    ]
  },
  "ring-offset": {
    "prop": [
      ["length", "--tw-ring-offset-width"],
      ["color", "--tw-ring-offset-color"]
    ]
  },
  "shadow": {
    "prop": [["color", "--tw-shadow-color"], ["shadow", "box-shadow"]]
  },
  "inset-shadow": {
    "prop": [["shadow", "box-shadow"]]
  },
  "opacity": {
    "prop": [["number", "opacity"]]
  },
  "mix-blend": {
    "prop": [[["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], "mix-blend-mode"]]
  },
  "bg-blend": {
    "prop": [[["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], "background-blend-mode"]]
  },
  "blur": {
    "prop": [["length", "filter"]]
  },
  "brightness": {
    "prop": [["number", "filter"]]
  },
  "contrast": {
    "prop": [["number", "filter"]]
  },
  "grayscale": {
    "prop": [["number", "filter"]]
  },
  "hue-rotate": {
    "prop": [["angle", "filter"]]
  },
  "invert": {
    "prop": [["number", "filter"]]
  },
  "saturate": {
    "prop": [["number", "filter"]]
  },
  "sepia": {
    "prop": [["number", "filter"]]
  },
  "drop-shadow": {
    "prop": [["shadow", "filter"]]
  },
  "backdrop": {
    "prop": [["filter", "backdrop-filter"]]
  },
  "transform": {
    "prop": [[["none", "gpu", "cpu"], "transform"]]
  },
  "translate": {
    "prop": [["length", "translate"]]
  },
  "translate-x": {
    "prop": [["length", "translate"]]
  },
  "translate-y": {
    "prop": [["length", "translate"]]
  },
  "scale": {
    "prop": [["number", "scale"]]
  },
  "scale-x": {
    "prop": [["number", "scale"]]
  },
  "scale-y": {
    "prop": [["number", "scale"]]
  },
  "rotate": {
    "prop": [["angle", "rotate"]]
  },
  "skew": {
    "prop": [["angle", "transform"]]
  },
  "skew-x": {
    "prop": [["angle", "transform"]]
  },
  "skew-y": {
    "prop": [["angle", "transform"]]
  },
  "origin": {
    "prop": [["position", "transform-origin"]]
  },
  "cursor": {
    "prop": [[["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"], "cursor"]]
  },
  "pointer-events": {
    "prop": [[["none", "auto"], "pointer-events"]]
  },
  "select": {
    "prop": [[["none", "text", "all", "auto"], "user-select"]]
  },
  "resize": {
    "prop": [[["none", "both", "x", "y"], "resize"]]
  },
  "appearance": {
    "prop": [[["none", "auto"], "appearance"]]
  },
  "accent": {
    "prop": [["color", "accent-color"]]
  },
  "caret": {
    "prop": [["color", "caret-color"]]
  },
  "scroll": {
    "prop": [
      ["length", "scroll-margin"],
      ["length", "scroll-padding"]
    ]
  },
  "scroll-m": {
    "prop": [["length", "scroll-margin"]]
  },
  "scroll-p": {
    "prop": [["length", "scroll-padding"]]
  },
  "snap": {
    "prop": [[["none", "x", "y", "both", "mandatory", "proximity", "always", "normal"], "scroll-snap-type"]]
  },
  "duration": {
    "prop": [["time", "transition-duration"]]
  },
  "delay": {
    "prop": [["time", "transition-delay"]]
  },
  "ease": {
    "prop": [["easing", "transition-timing-function"]]
  },
  "transition": {
    "prop": [["property", "transition-property"]]
  },
  "animate": {
    "prop": [["animation", "animation"]]
  },
  "will-change": {
    "prop": [[["auto", "scroll", "contents", "transform"], "will-change"]]
  },
  "content": {
    "prop": [["string", "content"]]
  },
  "aspect": {
    "prop": [["ratio", "aspect-ratio"]]
  },
  "columns": {
    "prop": [["number", "columns"]]
  },
  "break-inside": {
    "prop": [[["auto", "avoid", "avoid-page", "avoid-column"], "break-inside"]]
  },
  "break-before": {
    "prop": [[["auto", "avoid", "all", "page", "left", "right", "column"], "break-before"]]
  },
  "break-after": {
    "prop": [[["auto", "avoid", "all", "page", "left", "right", "column"], "break-after"]]
  },
  "items": {
    "prop": [[["start", "end", "center", "baseline", "stretch"], "align-items"]]
  },
  "justify": {
    "prop": [[["normal", "start", "end", "center", "between", "around", "evenly", "stretch"], "justify-content"]]
  },
  "self": {
    "prop": [[["auto", "start", "end", "center", "stretch", "baseline"], "align-self"]]
  },
  "place": {
    "prop": [[["start", "end", "center", "stretch"], "place-items"]]
  },
  "content": {
    "prop": [["string", "content"]]
  },
  "decoration": {
    "prop": [["color", "text-decoration-color"]]
  },
  "fill": {
    "prop": [["color", "fill"]]
  },
  "stroke": {
    "prop": [["color", "stroke"], ["length", "stroke-width"]]
  },
  "sr-only": {
    "style": ["position", "absolute"]
  },
  "not-sr-only": {
    "style": ["position", "static"]
  }
}
```

Important implementation notes:

1. This is a broad core-utility mapping, not a literally exhaustive Tailwind catalog. Tailwind versions, plugins, arbitrary properties, and custom theme extensions can add more utilities.
2. Some prefixes are ambiguous. For example, `text-` can mean `font-size`, `color`, `text-align`, or `text-wrap`; the parser needs to inspect the suffix.
3. Standalone utilities such as `flex`, `hidden`, and `underline` belong in `style`, while value-taking utilities belong in `prop`.
4. The JSON above should be deduplicated before use (`opacity`, `content`, and `decoration` occur more than once).

A useful next step would be to generate a strictly deduplicated, machine-valid Tailwind v4 JSON dictionary, including all core utility prefixes and their correct CSS property mappings.

# write a json object where keys are all first words of tailwind util classes and values are an object of optional prop and optional style, where prop is a record of type as key and prop as value, where type is a string like length color and prop can be a string or an array of string of what it maps to and the most specific type comes first, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

``````md
Worked for 1m 11s

Clarified Tailwind mappings

I’ll structure this as a parser-oriented JSON map: utility prefixes that take values get a prop type map, while standalone utilities get a style tuple. I’m using Tailwind CSS v4’s utility naming as the baseline and will include common arbitrary-value-capable families.

Designed schema, refined utility coverage, and structured mappings

Covered utility families

![](https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=128)![](https://www.google.com/s2/favicons?domain=github.com&sz=128)

Searched 5 websites
``````

``````
# * [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)Tailwind CSSStyling with utility classes - Core conceptsTHINKING IN UTILITY CLASSES STYLING HOVER AND FOCUS STATES To style an element on states like hover or focus, prefix any utility with the state you want to target, for example \`hover:bg-sky-700\`:...](https://tailwindcss.com/docs/styling-with-utility-classes?utm%5Fsource=chatgpt.com)
* [GitHubtailwindcss.com/src/docs/theme.mdx at main · tailwindlabs/tailwindcss.comimport { CodeExampleStack } from "@/components/code-example"; import { TipGood, TipBad, TipInfo } from "@/components/tips"; import { Iframe } from "@/components/iframe"; import { Example } from "@/co...](https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/theme.mdx?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)Tailwind CSSTailwind CSS v4.0January 22, 2025 — BUILT-IN IMPORT SUPPORT Before v4.0, if you wanted to inline other CSS files using \`@import\` you'd have to configure another plugin like \`postcss-import\` to handle it for you. Now we handle this ou...](https://tailwindcss.com/blog/tailwindcss-v4?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)Tailwind CSSUpgrade guide - Getting startedCHANGES FROM V3 Here's a comprehensive list of all the breaking changes in Tailwind CSS v4.0\. Our upgrade tool will handle most of these changes for you automatically, so we highly recommend using...](https://tailwindcss.com/docs/upgrade-guide?utm%5Fsource=chatgpt.com)

### More

* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fwe.inc&size=32&drop_404_icon=true)we.incTailwind CSS v4 Cheat Sheet (Searchable) | How-to GuideOctober 13, 2026 — TAILWIND CSS V4 CHEAT SHEET (SEARCHABLE) | HOW-TO GUIDE A searchable Tailwind CSS v4 cheat sheet: type any class or plain word and see the exact CSS v4 generates, from var(--spacing) multiples to OK...](https://we.inc/guides/tailwind-cheat-sheet?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftoolsox.com&size=32&drop_404_icon=true)toolsox.comTailwind CSS v4 Cheat Sheet (2026) - All 3000+ Utility Classes with Live Preview | ToolsOxJanuary 15, 2025 — TAILWIND CSS V4 CHEAT SHEET: 3000+ UTILITY CLASSES WITH LIVE PREVIEW AND V3 MIGRATION GUIDE Published: January 15, 2025 Updated: June 6, 2026 This is the most thorough Tailwind CSS v4 cheat sheet a...](https://toolsox.com/tailwind-css-tools-online/tailwind-css-v4-cheat-sheet-updated?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comFunctions and directives - Core concepts - Tailwind CSSFUNCTIONS Tailwind provides the following build-time functions to make working with colors and the spacing scale easier. --ALPHA() Use the \`--alpha()\` function to adjust the opacity of a color: I...](https://tailwindcss.com/docs/functions-and-directives?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comStyling with utility classes - Core concepts - Tailwind CSSCore concepts STYLING WITH UTILITY CLASSES Building complex components from a constrained set of primitive utilities. OVERVIEW You style things with Tailwind by combining many single-purpose pres...](https://tailwindcss.com/docs/styling-with-utility-classes?trk=public%5Fpost%5Fcomment-text&utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comUpgrade guide - Getting started - Tailwind CSSWe recommend running the upgrade tool in a new branch, then carefully reviewing the diff and testing your project in the browser to make sure all of the changes look correct. You may need to tweak a...](https://tailwindcss.com/docs/upgrade-guide?from=20423&from%5Fcolumn=20423&utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv2.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comConfiguration - Tailwind CSS\`// tailwind.config.js module.exports = { presets: \[ require('@acmecorp/base-tailwind-config') \], // Project-specific customizations theme: { //... }, // ... }\` Learn more about presets in the pres...](https://v2.tailwindcss.com/docs/configuration?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv3.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comConfiguration - Tailwind CSSPREFIX The \`prefix\` option allows you to add a custom prefix to all of Tailwind’s generated utility classes. This can be really useful when layering Tailwind on top of existing CSS where there might...](https://v3.tailwindcss.com/docs/configuration?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv3.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comTheme Configuration - Tailwind CSSCustomization THEME CONFIGURATION Customizing the default theme for your project. The \`theme\` section of your \`tailwind.config.js\` file is where you define your project’s color palette, type scale...](https://v3.tailwindcss.com/docs/theme?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv2.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comTheme Configuration - Tailwind CSSCOLORS The \`colors\` key allows you to customize the global color palette for your project. \`// tailwind.config.js module.exports = { theme: { colors: { transparent: 'transparent', black: '#000', wh...](https://v2.tailwindcss.com/docs/theme?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv2.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comFunctions & Directives - Tailwind CSSFUNCTIONS & DIRECTIVES A reference for the custom functions and directives Tailwind exposes to your CSS. @TAILWIND Use the \`@tailwind\` directive to insert Tailwind’s \`base\`, \`components\`, \`utiliti...](https://v2.tailwindcss.com/docs/functions-and-directives?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv3.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comTailwind CSS v4.0 Beta - Tailwind CSSCSS-FIRST CONFIGURATION One of the biggest changes in Tailwind CSS v4.0 is the shift from configuring your project in JavaScript to configuring it in CSS. Instead of a \`tailwind.config.js\` file, yo...](https://v3.tailwindcss.com/docs/v4-beta?utm%5Fsource=chatgpt.com)
* [github.comtailwindcss.com/src/docs/functions-and-directives.mdx at main · tailwindlabs/tailwindcss.com · GitHubimport { CodeExampleStack } from "@/components/code-example"; export const title = "Functions and directives"; export const description = "A reference for the custom functions and directives Tailwin...](https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/functions-and-directives.mdx?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioSpacing · Tailwind CSS HandbookSPACING Margin, padding, gap and space-between in Tailwind — the single spacing scale that drives them, and which tool to reach for when. Spacing in Tailwind comes from one scale. Learn it once and...](https://prajwalchnayak.github.io/tailwind%5Fdoc/layout/spacing/?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioTailwind CSS Handbook — A practical, up-to-date guide to Tailwind CSS v47\. Own your design tokens — \`@theme\`, colours, spacing, typography. 8\. Extend Tailwind — custom utilities, variants and plugins. 9\. Ship it — production builds, bundle size and performance. See the a...](https://prajwalchnayak.github.io/tailwind%5Fdoc/?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioTheme & Design Tokens · Tailwind CSS HandbookTHEME & DESIGN TOKENS Configure Tailwind v4 with the @theme directive — namespaces, overriding defaults, referencing tokens as CSS variables, and the difference from tailwind.config.js. Rewritten i...](https://prajwalchnayak.github.io/tailwind%5Fdoc/core-concepts/theme/?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioFunctions & Directives · Tailwind CSS HandbookFUNCTIONS & DIRECTIVES A reference for every Tailwind v4 CSS directive and function — @import, @theme, @source, @utility, @variant, @config, --alpha() and --spacing(). Tailwind v4 is configured in...](https://prajwalchnayak.github.io/tailwind%5Fdoc/advanced/functions-and-directives/?utm%5Fsource=chatgpt.com)
* [irurueta.comTailwind Cheat Sheet :: Irurueta DocsTAILWIND CHEAT SHEET | This section documents Tailwind CSS v4.x — the CSS-first configuration line, whose v4.0 release shipped in January 2025 — as published at the official Tailwind CSS documentati...](https://www.irurueta.com/web/tailwind/cheat-sheet.html?utm%5Fsource=chatgpt.com)
* [irurueta.comTailwind Reference :: Irurueta Docs\* Layout — display, box-sizing, position and inset, overflow, \`aspect-ratio\`, columns, \`container\`, and the table utilities. \* Flexbox and Grid — flex containers and items, grid templates and placem...](https://www.irurueta.com/web/tailwind/index.html?utm%5Fsource=chatgpt.com)
* [nexbit.artTailwind CSS Reference & Cheat Sheet | NexBit ToolsTAILWIND CSS REFERENCE Searchable cheat sheet for Tailwind CSS utility classes. Click any class to copy it. Shows the generated CSS for each utility. 166 classes Layout (8) block display: block;...](https://tools.nexbit.art/tailwind-reference?utm%5Fsource=chatgpt.com)
``````

Assuming Tailwind CSS v4, the structure below uses:

- `prop`: maps a value type to the CSS property or properties it controls. Multiple types are ordered from most specific to least specific.
- `style`: a `[property, value]` tuple for a utility that has a standalone, fixed value.
- Property names use CSS-standard kebab-case.
- Arrays represent multiple CSS properties.

This covers the built-in utility families rather than enumerating individual classes such as `p-1`, `p-2`, `p-3`. Tailwind supports dynamically generated and arbitrary values, so the complete set of possible class names is not finite.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://tailwindcss.com\&sz=32)

Tailwind CSS+2



```
{
  "aspect": {
    "prop": {
      "ratio": "aspect-ratio"
    }
  },
  "columns": {
    "prop": {
      "length": "columns"
    }
  },
  "break-before": {
    "prop": {
      "keyword": "break-before"
    }
  },
  "break-after": {
    "prop": {
      "keyword": "break-after"
    }
  },
  "break-inside": {
    "prop": {
      "keyword": "break-inside"
    }
  },
  "box-decoration": {
    "prop": {
      "keyword": "box-decoration-break"
    }
  },
  "box-border": {
    "style": ["box-sizing", "border-box"]
  },
  "box-content": {
    "style": ["box-sizing", "content-box"]
  },
  "block": {
    "style": ["display", "block"]
  },
  "inline": {
    "style": ["display", "inline"]
  },
  "inline-block": {
    "style": ["display", "inline-block"]
  },
  "flow-root": {
    "style": ["display", "flow-root"]
  },
  "flex": {
    "prop": {
      "number": "flex",
      "keyword": ["flex-direction", "flex-wrap"]
    },
    "style": ["display", "flex"]
  },
  "grid": {
    "style": ["display", "grid"]
  },
  "inline-flex": {
    "style": ["display", "inline-flex"]
  },
  "inline-grid": {
    "style": ["display", "inline-grid"]
  },
  "inline-table": {
    "style": ["display", "inline-table"]
  },
  "table": {
    "prop": {
      "keyword": "table-layout"
    },
    "style": ["display", "table"]
  },
  "table-caption": {
    "style": ["display", "table-caption"]
  },
  "table-cell": {
    "style": ["display", "table-cell"]
  },
  "table-column": {
    "style": ["display", "table-column"]
  },
  "table-column-group": {
    "style": ["display", "table-column-group"]
  },
  "table-footer-group": {
    "style": ["display", "table-footer-group"]
  },
  "table-header-group": {
    "style": ["display", "table-header-group"]
  },
  "table-row-group": {
    "style": ["display", "table-row-group"]
  },
  "table-row": {
    "style": ["display", "table-row"]
  },
  "contents": {
    "style": ["display", "contents"]
  },
  "list-item": {
    "style": ["display", "list-item"]
  },
  "hidden": {
    "style": ["display", "none"]
  },
  "static": {
    "style": ["position", "static"]
  },
  "fixed": {
    "style": ["position", "fixed"]
  },
  "absolute": {
    "style": ["position", "absolute"]
  },
  "relative": {
    "style": ["position", "relative"]
  },
  "sticky": {
    "style": ["position", "sticky"]
  },
  "visible": {
    "style": ["visibility", "visible"]
  },
  "invisible": {
    "style": ["visibility", "hidden"]
  },
  "collapse": {
    "style": ["visibility", "collapse"]
  },
  "float": {
    "prop": {
      "keyword": "float"
    }
  },
  "clear": {
    "prop": {
      "keyword": "clear"
    }
  },
  "isolate": {
    "style": ["isolation", "isolate"]
  },
  "isolation-auto": {
    "style": ["isolation", "auto"]
  },
  "object": {
    "prop": {
      "keyword": "object-fit",
      "position": "object-position"
    }
  },
  "overflow": {
    "prop": {
      "keyword": "overflow"
    }
  },
  "overflow-x": {
    "prop": {
      "keyword": "overflow-x"
    }
  },
  "overflow-y": {
    "prop": {
      "keyword": "overflow-y"
    }
  },
  "overscroll": {
    "prop": {
      "keyword": "overscroll-behavior"
    }
  },
  "overscroll-x": {
    "prop": {
      "keyword": "overscroll-behavior-x"
    }
  },
  "overscroll-y": {
    "prop": {
      "keyword": "overscroll-behavior-y"
    }
  },
  "inset": {
    "prop": {
      "length": "inset"
    }
  },
  "inset-x": {
    "prop": {
      "length": "inset-inline"
    }
  },
  "inset-y": {
    "prop": {
      "length": "inset-block"
    }
  },
  "start": {
    "prop": {
      "length": "inset-inline-start"
    }
  },
  "end": {
    "prop": {
      "length": "inset-inline-end"
    }
  },
  "top": {
    "prop": {
      "length": "top"
    }
  },
  "right": {
    "prop": {
      "length": "right"
    }
  },
  "bottom": {
    "prop": {
      "length": "bottom"
    }
  },
  "left": {
    "prop": {
      "length": "left"
    }
  },
  "z": {
    "prop": {
      "integer": "z-index"
    }
  },
  "basis": {
    "prop": {
      "length": "flex-basis"
    }
  },
  "order": {
    "prop": {
      "integer": "order"
    }
  },
  "col": {
    "prop": {
      "integer": "grid-column",
      "keyword": "grid-column"
    }
  },
  "row": {
    "prop": {
      "integer": "grid-row",
      "keyword": "grid-row"
    }
  },
  "grid-cols": {
    "prop": {
      "integer": "grid-template-columns",
      "keyword": "grid-template-columns"
    }
  },
  "grid-rows": {
    "prop": {
      "integer": "grid-template-rows",
      "keyword": "grid-template-rows"
    }
  },
  "auto-cols": {
    "prop": {
      "length": "grid-auto-columns"
    }
  },
  "auto-rows": {
    "prop": {
      "length": "grid-auto-rows"
    }
  },
  "grid-flow": {
    "prop": {
      "keyword": "grid-auto-flow"
    }
  },
  "gap": {
    "prop": {
      "length": ["row-gap", "column-gap"]
    }
  },
  "space-x": {
    "prop": {
      "length": "margin-inline-start"
    }
  },
  "space-y": {
    "prop": {
      "length": "margin-block-start"
    }
  },
  "place-content": {
    "prop": {
      "keyword": "place-content"
    }
  },
  "place-items": {
    "prop": {
      "keyword": "place-items"
    }
  },
  "place-self": {
    "prop": {
      "keyword": "place-self"
    }
  },
  "items": {
    "prop": {
      "keyword": "align-items"
    }
  },
  "justify": {
    "prop": {
      "keyword": "justify-content"
    }
  },
  "justify-items": {
    "prop": {
      "keyword": "justify-items"
    }
  },
  "justify-self": {
    "prop": {
      "keyword": "justify-self"
    }
  },
  "self": {
    "prop": {
      "keyword": "align-self"
    }
  },
  "content": {
    "prop": {
      "keyword": "align-content",
      "string": "content"
    }
  },
  "grow": {
    "prop": {
      "number": "flex-grow"
    }
  },
  "shrink": {
    "prop": {
      "number": "flex-shrink"
    }
  },
  "p": {
    "prop": {
      "length": "padding"
    }
  },
  "px": {
    "prop": {
      "length": "padding-inline"
    }
  },
  "py": {
    "prop": {
      "length": "padding-block"
    }
  },
  "ps": {
    "prop": {
      "length": "padding-inline-start"
    }
  },
  "pe": {
    "prop": {
      "length": "padding-inline-end"
    }
  },
  "pt": {
    "prop": {
      "length": "padding-top"
    }
  },
  "pr": {
    "prop": {
      "length": "padding-right"
    }
  },
  "pb": {
    "prop": {
      "length": "padding-bottom"
    }
  },
  "pl": {
    "prop": {
      "length": "padding-left"
    }
  },
  "m": {
    "prop": {
      "length": "margin"
    }
  },
  "mx": {
    "prop": {
      "length": "margin-inline"
    }
  },
  "my": {
    "prop": {
      "length": "margin-block"
    }
  },
  "ms": {
    "prop": {
      "length": "margin-inline-start"
    }
  },
  "me": {
    "prop": {
      "length": "margin-inline-end"
    }
  },
  "mt": {
    "prop": {
      "length": "margin-top"
    }
  },
  "mr": {
    "prop": {
      "length": "margin-right"
    }
  },
  "mb": {
    "prop": {
      "length": "margin-bottom"
    }
  },
  "ml": {
    "prop": {
      "length": "margin-left"
    }
  },
  "size": {
    "prop": {
      "length": ["width", "height"]
    }
  },
  "w": {
    "prop": {
      "length": "width"
    }
  },
  "min-w": {
    "prop": {
      "length": "min-width"
    }
  },
  "max-w": {
    "prop": {
      "length": "max-width"
    }
  },
  "h": {
    "prop": {
      "length": "height"
    }
  },
  "min-h": {
    "prop": {
      "length": "min-height"
    }
  },
  "max-h": {
    "prop": {
      "length": "max-height"
    }
  },
  "font": {
    "prop": {
      "family": "font-family",
      "weight": "font-weight",
      "stretch": "font-stretch"
    }
  },
  "text": {
    "prop": {
      "length": "font-size",
      "color": "color",
      "keyword": [
        "text-align",
        "text-overflow",
        "text-wrap",
        "vertical-align"
      ]
    }
  },
  "antialiased": {
    "style": ["-webkit-font-smoothing", "antialiased"]
  },
  "subpixel-antialiased": {
    "style": ["-webkit-font-smoothing", "auto"]
  },
  "italic": {
    "style": ["font-style", "italic"]
  },
  "not-italic": {
    "style": ["font-style", "normal"]
  },
  "leading": {
    "prop": {
      "length": "line-height"
    }
  },
  "tracking": {
    "prop": {
      "length": "letter-spacing"
    }
  },
  "list": {
    "prop": {
      "keyword": [
        "list-style-type",
        "list-style-position"
      ],
      "image": "list-style-image"
    }
  },
  "placeholder": {
    "prop": {
      "color": "color"
    }
  },
  "indent": {
    "prop": {
      "length": "text-indent"
    }
  },
  "align": {
    "prop": {
      "keyword": "vertical-align"
    }
  },
  "whitespace": {
    "prop": {
      "keyword": "white-space"
    }
  },
  "hyphens": {
    "prop": {
      "keyword": "hyphens"
    }
  },
  "decoration": {
    "prop": {
      "color": "text-decoration-color",
      "length": "text-decoration-thickness",
      "keyword": "text-decoration-style"
    }
  },
  "underline-offset": {
    "prop": {
      "length": "text-underline-offset"
    }
  },
  "bg": {
    "prop": {
      "color": "background-color",
      "image": "background-image",
      "position": "background-position",
      "length": "background-size",
      "keyword": [
        "background-repeat",
        "background-attachment",
        "background-clip",
        "background-origin",
        "background-blend-mode"
      ]
    }
  },
  "from": {
    "prop": {
      "color": "--tw-gradient-from",
      "percentage": "--tw-gradient-from-position"
    }
  },
  "via": {
    "prop": {
      "color": "--tw-gradient-via",
      "percentage": "--tw-gradient-via-position"
    }
  },
  "to": {
    "prop": {
      "color": "--tw-gradient-to",
      "percentage": "--tw-gradient-to-position"
    }
  },
  "mask": {
    "prop": {
      "image": "mask-image",
      "position": "mask-position",
      "length": "mask-size",
      "color": "mask-mode",
      "keyword": [
        "mask-repeat",
        "mask-clip",
        "mask-origin",
        "mask-composite",
        "mask-type"
      ]
    }
  },
  "rounded": {
    "prop": {
      "length": "border-radius"
    }
  },
  "border": {
    "prop": {
      "length": "border-width",
      "color": "border-color",
      "keyword": "border-style"
    }
  },
  "border-x": {
    "prop": {
      "length": ["border-left-width", "border-right-width"],
      "color": ["border-left-color", "border-right-color"],
      "keyword": ["border-left-style", "border-right-style"]
    }
  },
  "border-y": {
    "prop": {
      "length": ["border-top-width", "border-bottom-width"],
      "color": ["border-top-color", "border-bottom-color"],
      "keyword": ["border-top-style", "border-bottom-style"]
    }
  },
  "border-s": {
    "prop": {
      "length": "border-inline-start-width",
      "color": "border-inline-start-color",
      "keyword": "border-inline-start-style"
    }
  },
  "border-e": {
    "prop": {
      "length": "border-inline-end-width",
      "color": "border-inline-end-color",
      "keyword": "border-inline-end-style"
    }
  },
  "border-t": {
    "prop": {
      "length": "border-top-width",
      "color": "border-top-color",
      "keyword": "border-top-style"
    }
  },
  "border-r": {
    "prop": {
      "length": "border-right-width",
      "color": "border-right-color",
      "keyword": "border-right-style"
    }
  },
  "border-b": {
    "prop": {
      "length": "border-bottom-width",
      "color": "border-bottom-color",
      "keyword": "border-bottom-style"
    }
  },
  "border-l": {
    "prop": {
      "length": "border-left-width",
      "color": "border-left-color",
      "keyword": "border-left-style"
    }
  },
  "divide-x": {
    "prop": {
      "length": "border-inline-end-width",
      "color": "border-color",
      "keyword": "border-style"
    }
  },
  "divide-y": {
    "prop": {
      "length": "border-bottom-width",
      "color": "border-color",
      "keyword": "border-style"
    }
  },
  "outline": {
    "prop": {
      "length": ["outline-width", "outline-offset"],
      "color": "outline-color",
      "keyword": "outline-style"
    }
  },
  "ring": {
    "prop": {
      "length": "--tw-ring-width",
      "color": "--tw-ring-color"
    }
  },
  "ring-offset": {
    "prop": {
      "length": "--tw-ring-offset-width",
      "color": "--tw-ring-offset-color"
    }
  },
  "inset-ring": {
    "prop": {
      "length": "--tw-inset-ring-width",
      "color": "--tw-inset-ring-color"
    }
  },
  "shadow": {
    "prop": {
      "shadow": "box-shadow",
      "color": "--tw-shadow-color"
    }
  },
  "inset-shadow": {
    "prop": {
      "shadow": "box-shadow",
      "color": "--tw-inset-shadow-color"
    }
  },
  "text-shadow": {
    "prop": {
      "shadow": "text-shadow",
      "color": "--tw-text-shadow-color"
    }
  },
  "opacity": {
    "prop": {
      "number": "opacity",
      "percentage": "opacity"
    }
  },
  "mix-blend": {
    "prop": {
      "keyword": "mix-blend-mode"
    }
  },
  "bg-blend": {
    "prop": {
      "keyword": "background-blend-mode"
    }
  },
  "filter": {
    "style": ["filter", "var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)"]
  },
  "blur": {
    "prop": {
      "length": "filter"
    }
  },
  "brightness": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "contrast": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "drop-shadow": {
    "prop": {
      "shadow": "filter",
      "color": "filter"
    }
  },
  "grayscale": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "hue-rotate": {
    "prop": {
      "angle": "filter"
    }
  },
  "invert": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "saturate": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "sepia": {
    "prop": {
      "number": "filter",
      "percentage": "filter"
    }
  },
  "backdrop": {
    "prop": {
      "length": "backdrop-filter",
      "color": "backdrop-filter",
      "number": "backdrop-filter",
      "percentage": "backdrop-filter",
      "angle": "backdrop-filter",
      "shadow": "backdrop-filter",
      "keyword": "backdrop-filter"
    }
  },
  "border-collapse": {
    "style": ["border-collapse", "collapse"]
  },
  "border-separate": {
    "style": ["border-collapse", "separate"]
  },
  "border-spacing": {
    "prop": {
      "length": "border-spacing"
    }
  },
  "caption": {
    "prop": {
      "keyword": "caption-side"
    }
  },
  "scale": {
    "prop": {
      "number": "scale",
      "percentage": "scale"
    }
  },
  "rotate": {
    "prop": {
      "angle": "rotate"
    }
  },
  "translate": {
    "prop": {
      "length": "translate",
      "percentage": "translate"
    }
  },
  "skew": {
    "prop": {
      "angle": ["--tw-skew-x", "--tw-skew-y"]
    }
  },
  "origin": {
    "prop": {
      "position": "transform-origin"
    }
  },
  "transform": {
    "prop": {
      "keyword": "transform"
    }
  },
  "perspective": {
    "prop": {
      "length": "perspective"
    }
  },
  "zoom": {
    "prop": {
      "number": "zoom",
      "percentage": "zoom",
      "keyword": "zoom"
    }
  },
  "transition": {
    "prop": {
      "keyword": "transition-property"
    }
  },
  "duration": {
    "prop": {
      "duration": "transition-duration"
    }
  },
  "ease": {
    "prop": {
      "timing-function": "transition-timing-function"
    }
  },
  "delay": {
    "prop": {
      "duration": "transition-delay"
    }
  },
  "animate": {
    "prop": {
      "animation": "animation"
    }
  },
  "accent": {
    "prop": {
      "color": "accent-color"
    }
  },
  "appearance": {
    "prop": {
      "keyword": "appearance"
    }
  },
  "caret": {
    "prop": {
      "color": "caret-color"
    }
  },
  "scheme": {
    "prop": {
      "keyword": "color-scheme"
    }
  },
  "cursor": {
    "prop": {
      "keyword": "cursor"
    }
  },
  "field-sizing": {
    "prop": {
      "keyword": "field-sizing"
    }
  },
  "pointer-events": {
    "prop": {
      "keyword": "pointer-events"
    }
  },
  "resize": {
    "prop": {
      "keyword": "resize"
    }
  },
  "scroll": {
    "prop": {
      "keyword": "scroll-behavior"
    }
  },
  "scroll-m": {
    "prop": {
      "length": "scroll-margin"
    }
  },
  "scroll-mx": {
    "prop": {
      "length": "scroll-margin-inline"
    }
  },
  "scroll-my": {
    "prop": {
      "length": "scroll-margin-block"
    }
  },
  "scroll-mt": {
    "prop": {
      "length": "scroll-margin-top"
    }
  },
  "scroll-mr": {
    "prop": {
      "length": "scroll-margin-right"
    }
  },
  "scroll-mb": {
    "prop": {
      "length": "scroll-margin-bottom"
    }
  },
  "scroll-ml": {
    "prop": {
      "length": "scroll-margin-left"
    }
  },
  "scroll-p": {
    "prop": {
      "length": "scroll-padding"
    }
  },
  "scroll-px": {
    "prop": {
      "length": "scroll-padding-inline"
    }
  },
  "scroll-py": {
    "prop": {
      "length": "scroll-padding-block"
    }
  },
  "scroll-pt": {
    "prop": {
      "length": "scroll-padding-top"
    }
  },
  "scroll-pr": {
    "prop": {
      "length": "scroll-padding-right"
    }
  },
  "scroll-pb": {
    "prop": {
      "length": "scroll-padding-bottom"
    }
  },
  "scroll-pl": {
    "prop": {
      "length": "scroll-padding-left"
    }
  },
  "snap": {
    "prop": {
      "keyword": [
        "scroll-snap-type",
        "scroll-snap-align",
        "scroll-snap-stop"
      ]
    }
  },
  "touch": {
    "prop": {
      "keyword": "touch-action"
    }
  },
  "select": {
    "prop": {
      "keyword": "user-select"
    }
  },
  "will-change": {
    "prop": {
      "keyword": "will-change"
    }
  },
  "fill": {
    "prop": {
      "color": "fill"
    }
  },
  "stroke": {
    "prop": {
      "length": "stroke-width",
      "color": "stroke"
    }
  },
  "tab": {
    "prop": {
      "integer": "tab-size"
    }
  },
  "line-clamp": {
    "prop": {
      "integer": "line-clamp"
    }
  },
  "forced-color-adjust": {
    "prop": {
      "keyword": "forced-color-adjust"
    }
  }
}
```

Parsing note: Use the longest matching key first. For example, match `border-x` before `border`, `scroll-mt` before `scroll-m`, and `grid-cols` before `grid`. This prevents ambiguous prefix matches. Variants such as `hover:`, `focus:`, `sm:`, and `dark:` should be parsed separately from this utility map.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://tailwindcss.com\&sz=32)

Tailwind CSS+1

# write a json object where keys are all first words of tailwind util classes and values are an object of optional prop and optional style, where prop is an array of tuple of type and prop, where type is a string like length color or an array of string keywords and prop is a string or an array of string, if it can accept value, and style is a tuple of prop and value if it can be used alone wo value

```
Worked for 1m 2s

Structured Tailwind metadata and defined utility coverage

I’ll structure this as a utility-prefix dictionary, including value-taking families and standalone utilities. Tailwind’s arbitrary values and project-defined extensions make the class space open-ended, so I’ll cover the built-in core families rather than pretend the set is mathematically finite.

Built and organized the utility taxonomy and metadata

![](https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=128)![](https://www.google.com/s2/favicons?domain=github.com&sz=128)

Searched 4 websites
```

```
# * [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)Tailwind CSSStyling with utility classes - Core conceptsCore concepts STYLING WITH UTILITY CLASSES Building complex components from a constrained set of primitive utilities. OVERVIEW You style things with Tailwind by combining many single-purpose pres...](https://tailwindcss.com/docs/styling-with-utility-classes?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)Tailwind CSSUpgrade guide - Getting startedCHANGES FROM V3 Here's a comprehensive list of all the breaking changes in Tailwind CSS v4.0\. Our upgrade tool will handle most of these changes for you automatically, so we highly recommend using...](https://tailwindcss.com/docs/upgrade-guide?utm%5Fsource=chatgpt.com)

### More

* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comStyling with utility classes - Core concepts - Tailwind CSSTHINKING IN UTILITY CLASSES STYLING HOVER AND FOCUS STATES To style an element on states like hover or focus, prefix any utility with the state you want to target, for example \`hover:bg-sky-700\`: H...](https://tailwindcss.com/docs/styling-with-utility-classes?trk=public%5Fpost%5Fcomment-text&utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comUpgrade guide - Getting started - Tailwind CSSWe've removed any utilities that were deprecated in v3 and have been undocumented for several years. Here's a list of what's been removed along with the modern alternative: Deprecated | Replacement...](https://tailwindcss.com/docs/upgrade-guide?from=20423&from%5Fcolumn=20423&utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv2.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comAdding New Utilities - Tailwind CSSADDING NEW UTILITIES Extending Tailwind with your own custom utility classes. Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situations wh...](https://v2.tailwindcss.com/docs/adding-new-utilities?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv2.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comFunctions & Directives - Tailwind CSSFUNCTIONS & DIRECTIVES A reference for the custom functions and directives Tailwind exposes to your CSS. @TAILWIND Use the \`@tailwind\` directive to insert Tailwind’s \`base\`, \`components\`, \`utiliti...](https://v2.tailwindcss.com/docs/functions-and-directives?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Ftailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comAdding custom styles - Core concepts - Tailwind CSSHTML \`<div class="before:content-\['hello\\\_world'\]"> <!-- ... --></div>\` If you're using something like JSX where the backslash is stripped from the rendered HTML, use String.raw() so the backslash...](https://tailwindcss.com/docs/adding-custom-styles?source=post%5Fpage---------------------------&utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv1.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comAdding New Utilities - Tailwind CSSADDING NEW UTILITIES Extending Tailwind with your own custom utility classes. \* \* \* Although Tailwind provides a pretty comprehensive set of utility classes out of the box, you may run into situat...](https://v1.tailwindcss.com/docs/adding-new-utilities?utm%5Fsource=chatgpt.com)
* [![](https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https%3A%2F%2Fv3.tailwindcss.com&size=32&drop_404_icon=true)tailwindcss.comAdding Custom Styles - Tailwind CSSADDING CUSTOM UTILITIES Add any of your own custom utility classes to Tailwind’s \`utilities\` layer: main.css \`@tailwind base; @tailwind components; @tailwind utilities; @layer utilities { .conten...](https://v3.tailwindcss.com/docs/adding-custom-styles?utm%5Fsource=chatgpt.com)
* [github.comtailwindcss.com/src/docs/functions-and-directives.mdx at main · tailwindlabs/tailwindcss.com · GitHub\--color-avocado-500: oklch(0.84 0.18 117.33); --color-avocado-600: oklch(0.53 0.12 118.34); --ease-fluid: cubic-bezier(0.3, 0, 0, 1); --ease-snappy: cubic-bezier(0.2, 0, 0, 1); /\* ... \*/ } Learn mo...](https://github.com/tailwindlabs/tailwindcss.com/blob/main/src/docs/functions-and-directives.mdx?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioFunctions & Directives · Tailwind CSS HandbookFUNCTIONS & DIRECTIVES A reference for every Tailwind v4 CSS directive and function — @import, @theme, @source, @utility, @variant, @config, --alpha() and --spacing(). Tailwind v4 is configured in...](https://prajwalchnayak.github.io/tailwind%5Fdoc/advanced/functions-and-directives/?utm%5Fsource=chatgpt.com)
* [prajwalchnayak.github.ioCustom Utilities · Tailwind CSS HandbookCUSTOM UTILITIES Extend Tailwind with @utility — simple, complex and functional utilities using --value(), --modifier() and --default() — plus when @apply is the right tool. Tailwind ships a lot of...](https://prajwalchnayak.github.io/tailwind%5Fdoc/advanced/custom-utilities/?utm%5Fsource=chatgpt.com)
```

Here is a Tailwind CSS v4-oriented utility dictionary. The structure is:

- `prop`: array of `[type, cssProperty]` tuples for utilities that accept values.
- `type`: a value category such as `"length"`, `"color"`, `"number"`, or an array of permitted keywords.
- `cssProperty`: a CSS property name or an array of CSS property names.
- `style`: `[cssProperty, fixedValue]` for standalone utilities that have a fixed value.

```
{
  "aspect": {
    "prop": [["ratio", "aspectRatio"]]
  },
  "columns": {
    "prop": [["number", "columns"], ["length", "columns"], [["auto", "3xs", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"], "columns"]]
  },
  "break-after": {
    "prop": [[["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], "breakAfter"]]
  },
  "break-before": {
    "prop": [[["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], "breakBefore"]]
  },
  "break-inside": {
    "prop": [[["auto", "avoid", "avoid-page", "avoid-column"], "breakInside"]]
  },
  "box-decoration": {
    "prop": [[["slice", "clone"], "boxDecorationBreak"]]
  },
  "box": {
    "prop": [[["border", "content"], "boxSizing"]]
  },
  "block": {
    "style": ["display", "block"]
  },
  "inline": {
    "style": ["display", "inline"]
  },
  "inline-block": {
    "style": ["display", "inline-block"]
  },
  "flow-root": {
    "style": ["display", "flow-root"]
  },
  "contents": {
    "style": ["display", "contents"]
  },
  "hidden": {
    "style": ["display", "none"]
  },
  "table": {
    "style": ["display", "table"]
  },
  "inline-table": {
    "style": ["display", "inline-table"]
  },
  "table-caption": {
    "style": ["display", "table-caption"]
  },
  "table-cell": {
    "style": ["display", "table-cell"]
  },
  "table-column": {
    "style": ["display", "table-column"]
  },
  "table-column-group": {
    "style": ["display", "table-column-group"]
  },
  "table-footer-group": {
    "style": ["display", "table-footer-group"]
  },
  "table-header-group": {
    "style": ["display", "table-header-group"]
  },
  "table-row-group": {
    "style": ["display", "table-row-group"]
  },
  "table-row": {
    "style": ["display", "table-row"]
  },
  "list-item": {
    "style": ["display", "list-item"]
  },
  "float": {
    "prop": [[["start", "end", "right", "left", "none"], "float"]]
  },
  "clear": {
    "prop": [[["start", "end", "right", "left", "both", "none"], "clear"]]
  },
  "isolate": {
    "style": ["isolation", "isolate"]
  },
  "isolation-auto": {
    "style": ["isolation", "auto"]
  },
  "object": {
    "prop": [
      [["contain", "cover", "fill", "none", "scale-down"], "objectFit"],
      ["position", "objectPosition"]
    ]
  },
  "overflow": {
    "prop": [[["auto", "hidden", "clip", "visible", "scroll"], ["overflow", "overflowX", "overflowY"]]]
  },
  "overscroll": {
    "prop": [[["auto", "contain", "none"], ["overscrollBehavior", "overscrollBehaviorX", "overscrollBehaviorY"]]]
  },
  "static": {
    "style": ["position", "static"]
  },
  "fixed": {
    "style": ["position", "fixed"]
  },
  "absolute": {
    "style": ["position", "absolute"]
  },
  "relative": {
    "style": ["position", "relative"]
  },
  "sticky": {
    "style": ["position", "sticky"]
  },
  "inset": {
    "prop": [["length", ["insetTop", "insetRight", "insetBottom", "insetLeft"]]]
  },
  "inset-x": {
    "prop": [["length", ["left", "right"]]]
  },
  "inset-y": {
    "prop": [["length", ["top", "bottom"]]]
  },
  "inset-s": {
    "prop": [["length", "insetInlineStart"]]
  },
  "inset-e": {
    "prop": [["length", "insetInlineEnd"]]
  },
  "top": {
    "prop": [["length", "top"]]
  },
  "right": {
    "prop": [["length", "right"]]
  },
  "bottom": {
    "prop": [["length", "bottom"]]
  },
  "left": {
    "prop": [["length", "left"]]
  },
  "start": {
    "prop": [["length", "insetInlineStart"]]
  },
  "end": {
    "prop": [["length", "insetInlineEnd"]]
  },
  "visible": {
    "style": ["visibility", "visible"]
  },
  "invisible": {
    "style": ["visibility", "hidden"]
  },
  "collapse": {
    "style": ["visibility", "collapse"]
  },
  "z": {
    "prop": [["number", "zIndex"]]
  },
  "basis": {
    "prop": [["length", "flexBasis"], ["percentage", "flexBasis"], [["auto", "full", "min", "max", "fit"], "flexBasis"]]
  },
  "flex": {
    "prop": [[["1", "auto", "initial", "none"], "flex"], ["number", "flex"]],
    "style": ["display", "flex"]
  },
  "grow": {
    "prop": [["number", "flexGrow"]],
    "style": ["flexGrow", "1"]
  },
  "shrink": {
    "prop": [["number", "flexShrink"]],
    "style": ["flexShrink", "1"]
  },
  "order": {
    "prop": [["number", "order"], [["first", "last", "none"], "order"]]
  },
  "grid-cols": {
    "prop": [["number", "gridTemplateColumns"], ["grid-template", "gridTemplateColumns"]]
  },
  "col-span": {
    "prop": [["number", "gridColumn"], [["full"], "gridColumn"]]
  },
  "col-start": {
    "prop": [["number", "gridColumnStart"], [["auto"], "gridColumnStart"]]
  },
  "col-end": {
    "prop": [["number", "gridColumnEnd"], [["auto"], "gridColumnEnd"]]
  },
  "grid-rows": {
    "prop": [["number", "gridTemplateRows"], ["grid-template", "gridTemplateRows"]]
  },
  "row-span": {
    "prop": [["number", "gridRow"], [["full"], "gridRow"]]
  },
  "row-start": {
    "prop": [["number", "gridRowStart"], [["auto"], "gridRowStart"]]
  },
  "row-end": {
    "prop": [["number", "gridRowEnd"], [["auto"], "gridRowEnd"]]
  },
  "grid-flow": {
    "prop": [[["row", "col", "dense", "row-dense", "col-dense"], "gridAutoFlow"]]
  },
  "auto-cols": {
    "prop": [[["auto", "min", "max", "fr"], "gridAutoColumns"]]
  },
  "auto-rows": {
    "prop": [[["auto", "min", "max", "fr"], "gridAutoRows"]]
  },
  "gap": {
    "prop": [["length", ["gap", "columnGap", "rowGap"]]]
  },
  "gap-x": {
    "prop": [["length", "columnGap"]]
  },
  "gap-y": {
    "prop": [["length", "rowGap"]]
  },
  "justify": {
    "prop": [
      [["normal", "start", "end", "center", "between", "around", "evenly", "stretch"], "justifyContent"],
      [["start", "end", "center", "stretch"], "justifyItems"],
      [["auto", "start", "end", "center", "stretch"], "justifySelf"]
    ]
  },
  "items": {
    "prop": [[["start", "end", "center", "baseline", "stretch"], "alignItems"]]
  },
  "content": {
    "prop": [
      [["normal", "center", "start", "end", "between", "around", "evenly", "baseline", "stretch"], "alignContent"],
      ["content", "content"]
    ]
  },
  "self": {
    "prop": [[["auto", "start", "end", "center", "stretch", "baseline"], "alignSelf"]]
  },
  "place-content": {
    "prop": [[["center", "start", "end", "between", "around", "evenly", "baseline", "stretch"], "placeContent"]]
  },
  "place-items": {
    "prop": [[["start", "end", "center", "baseline", "stretch"], "placeItems"]]
  },
  "place-self": {
    "prop": [[["auto", "start", "end", "center", "stretch"], "placeSelf"]]
  },
  "p": {
    "prop": [["length", ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]]]
  },
  "px": {
    "prop": [["length", ["paddingLeft", "paddingRight"]]]
  },
  "py": {
    "prop": [["length", ["paddingTop", "paddingBottom"]]]
  },
  "ps": {
    "prop": [["length", "paddingInlineStart"]]
  },
  "pe": {
    "prop": [["length", "paddingInlineEnd"]]
  },
  "pt": {
    "prop": [["length", "paddingTop"]]
  },
  "pr": {
    "prop": [["length", "paddingRight"]]
  },
  "pb": {
    "prop": [["length", "paddingBottom"]]
  },
  "pl": {
    "prop": [["length", "paddingLeft"]]
  },
  "m": {
    "prop": [["length", ["marginTop", "marginRight", "marginBottom", "marginLeft"]]]
  },
  "mx": {
    "prop": [["length", ["marginLeft", "marginRight"]]]
  },
  "my": {
    "prop": [["length", ["marginTop", "marginBottom"]]]
  },
  "ms": {
    "prop": [["length", "marginInlineStart"]]
  },
  "me": {
    "prop": [["length", "marginInlineEnd"]]
  },
  "mt": {
    "prop": [["length", "marginTop"]]
  },
  "mr": {
    "prop": [["length", "marginRight"]]
  },
  "mb": {
    "prop": [["length", "marginBottom"]]
  },
  "ml": {
    "prop": [["length", "marginLeft"]]
  },
  "space-x": {
    "prop": [["length", "marginInlineStart"]]
  },
  "space-y": {
    "prop": [["length", "marginTop"]]
  },
  "size": {
    "prop": [["length", ["width", "height"]]]
  },
  "w": {
    "prop": [["length", "width"], [["auto", "full", "screen", "min", "max", "fit"], "width"]]
  },
  "h": {
    "prop": [["length", "height"], [["auto", "full", "screen", "min", "max", "fit"], "height"]]
  },
  "min-w": {
    "prop": [["length", "minWidth"], [["0", "full", "min", "max", "fit"], "minWidth"]]
  },
  "min-h": {
    "prop": [["length", "minHeight"], [["0", "full", "screen", "min", "max", "fit"], "minHeight"]]
  },
  "max-w": {
    "prop": [["length", "maxWidth"], [["none", "full", "min", "max", "fit", "prose", "screen-sm", "screen-md", "screen-lg", "screen-xl", "screen-2xl"], "maxWidth"]]
  },
  "max-h": {
    "prop": [["length", "maxHeight"], [["none", "full", "screen", "min", "max", "fit"], "maxHeight"]]
  },
  "font": {
    "prop": [["font-family", "fontFamily"], ["font-weight", "fontWeight"]]
  },
  "text": {
    "prop": [
      ["length", "fontSize"],
      ["color", "color"],
      [["left", "center", "right", "justify", "start", "end"], "textAlign"],
      [["ellipsis", "clip"], "textOverflow"],
      [["wrap", "nowrap", "balance", "pretty"], "textWrap"]
    ]
  },
  "tracking": {
    "prop": [["length", "letterSpacing"]]
  },
  "leading": {
    "prop": [["length", "lineHeight"]]
  },
  "line-clamp": {
    "prop": [["number", "lineClamp"], [["none"], "lineClamp"]]
  },
  "list": {
    "prop": [
      [["none", "disc", "decimal", "circle", "square", "upper-alpha", "lower-alpha", "upper-roman", "lower-roman"], "listStyleType"],
      [["inside", "outside"], "listStylePosition"],
      ["image", "listStyleImage"]
    ]
  },
  "placeholder": {
    "prop": [["color", "color"]]
  },
  "decoration": {
    "prop": [
      ["color", "textDecorationColor"],
      [["solid", "double", "dotted", "dashed", "wavy"], "textDecorationStyle"],
      ["length", "textDecorationThickness"]
    ]
  },
  "underline-offset": {
    "prop": [["length", "textUnderlineOffset"]]
  },
  "indent": {
    "prop": [["length", "textIndent"]]
  },
  "align": {
    "prop": [[["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super"], "verticalAlign"]]
  },
  "whitespace": {
    "prop": [[["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"], "whiteSpace"]]
  },
  "break": {
    "prop": [
      [["normal", "words", "all", "keep"], "overflowWrap"],
      [["normal", "words", "all"], "wordBreak"]
    ]
  },
  "hyphens": {
    "prop": [[["none", "manual", "auto"], "hyphens"]]
  },
  "antialiased": {
    "style": ["-webkit-font-smoothing", "antialiased"]
  },
  "subpixel-antialiased": {
    "style": ["-webkit-font-smoothing", "auto"]
  },
  "italic": {
    "style": ["fontStyle", "italic"]
  },
  "not-italic": {
    "style": ["fontStyle", "normal"]
  },
  "uppercase": {
    "style": ["textTransform", "uppercase"]
  },
  "lowercase": {
    "style": ["textTransform", "lowercase"]
  },
  "capitalize": {
    "style": ["textTransform", "capitalize"]
  },
  "normal-case": {
    "style": ["textTransform", "none"]
  },
  "underline": {
    "style": ["textDecorationLine", "underline"]
  },
  "overline": {
    "style": ["textDecorationLine", "overline"]
  },
  "line-through": {
    "style": ["textDecorationLine", "line-through"]
  },
  "no-underline": {
    "style": ["textDecorationLine", "none"]
  },
  "bg": {
    "prop": [
      ["color", "backgroundColor"],
      ["image", "backgroundImage"],
      ["position", "backgroundPosition"],
      [["auto", "cover", "contain"], "backgroundSize"],
      [["repeat", "no-repeat", "repeat-x", "repeat-y", "repeat-round", "repeat-space"], "backgroundRepeat"],
      [["fixed", "local", "scroll"], "backgroundAttachment"],
      [["border", "padding", "content", "text"], "backgroundClip"],
      [["border", "padding", "content"], "backgroundOrigin"]
    ]
  },
  "from": {
    "prop": [["color", "--tw-gradient-from"], ["percentage", "--tw-gradient-from-position"]]
  },
  "via": {
    "prop": [["color", "--tw-gradient-via"], ["percentage", "--tw-gradient-via-position"]]
  },
  "to": {
    "prop": [["color", "--tw-gradient-to"], ["percentage", "--tw-gradient-to-position"]]
  },
  "rounded": {
    "prop": [
      ["length", ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]],
      [["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"], ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]]
    ]
  },
  "rounded-t": {
    "prop": [["length", ["borderTopLeftRadius", "borderTopRightRadius"]]]
  },
  "rounded-r": {
    "prop": [["length", ["borderTopRightRadius", "borderBottomRightRadius"]]]
  },
  "rounded-b": {
    "prop": [["length", ["borderBottomRightRadius", "borderBottomLeftRadius"]]]
  },
  "rounded-l": {
    "prop": [["length", ["borderTopLeftRadius", "borderBottomLeftRadius"]]]
  },
  "rounded-s": {
    "prop": [["length", ["borderStartStartRadius", "borderEndStartRadius"]]]
  },
  "rounded-e": {
    "prop": [["length", ["borderStartEndRadius", "borderEndEndRadius"]]]
  },
  "border": {
    "prop": [
      ["length", ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"]],
      ["color", ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]],
      [["solid", "dashed", "dotted", "double", "hidden", "none"], "borderStyle"]
    ]
  },
  "border-x": {
    "prop": [["length", ["borderLeftWidth", "borderRightWidth"]], ["color", ["borderLeftColor", "borderRightColor"]]]
  },
  "border-y": {
    "prop": [["length", ["borderTopWidth", "borderBottomWidth"]], ["color", ["borderTopColor", "borderBottomColor"]]]
  },
  "border-s": {
    "prop": [["length", "borderInlineStartWidth"], ["color", "borderInlineStartColor"]]
  },
  "border-e": {
    "prop": [["length", "borderInlineEndWidth"], ["color", "borderInlineEndColor"]]
  },
  "border-t": {
    "prop": [["length", "borderTopWidth"], ["color", "borderTopColor"]]
  },
  "border-r": {
    "prop": [["length", "borderRightWidth"], ["color", "borderRightColor"]]
  },
  "border-b": {
    "prop": [["length", "borderBottomWidth"], ["color", "borderBottomColor"]]
  },
  "border-l": {
    "prop": [["length", "borderLeftWidth"], ["color", "borderLeftColor"]]
  },
  "divide-x": {
    "prop": [["length", "borderInlineStartWidth"], ["color", "borderColor"]]
  },
  "divide-y": {
    "prop": [["length", "borderTopWidth"], ["color", "borderColor"]]
  },
  "outline": {
    "prop": [
      ["length", "outlineWidth"],
      ["color", "outlineColor"],
      [["none", "hidden", "dotted", "dashed", "solid", "double"], "outlineStyle"],
      ["length", "outlineOffset"]
    ]
  },
  "ring": {
    "prop": [["length", "--tw-ring-width"], ["color", "--tw-ring-color"]]
  },
  "ring-offset": {
    "prop": [["length", "--tw-ring-offset-width"], ["color", "--tw-ring-offset-color"]]
  },
  "shadow": {
    "prop": [["shadow", "boxShadow"], ["color", "boxShadowColor"]]
  },
  "text-shadow": {
    "prop": [["shadow", "textShadow"], ["color", "--tw-text-shadow-color"]]
  },
  "opacity": {
    "prop": [["percentage", "opacity"], ["number", "opacity"]]
  },
  "mix-blend": {
    "prop": [[["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-darker", "plus-lighter"], "mixBlendMode"]]
  },
  "bg-blend": {
    "prop": [[["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], "backgroundBlendMode"]]
  },
  "blur": {
    "prop": [["length", "--tw-blur"]]
  },
  "brightness": {
    "prop": [["percentage", "filter"]]
  },
  "contrast": {
    "prop": [["percentage", "filter"]]
  },
  "drop-shadow": {
    "prop": [["shadow", "filter"], ["color", "--tw-drop-shadow-color"]]
  },
  "grayscale": {
    "prop": [["percentage", "filter"]]
  },
  "hue-rotate": {
    "prop": [["angle", "filter"]]
  },
  "invert": {
    "prop": [["percentage", "filter"]]
  },
  "saturate": {
    "prop": [["percentage", "filter"]]
  },
  "sepia": {
    "prop": [["percentage", "filter"]]
  },
  "backdrop-blur": {
    "prop": [["length", "--tw-backdrop-blur"]]
  },
  "backdrop-brightness": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-contrast": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-grayscale": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-hue-rotate": {
    "prop": [["angle", "backdropFilter"]]
  },
  "backdrop-invert": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-opacity": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-saturate": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "backdrop-sepia": {
    "prop": [["percentage", "backdropFilter"]]
  },
  "transform": {
    "prop": [[["gpu", "cpu", "none"], "transform"]]
  },
  "transform-gpu": {
    "style": ["transform", "translateZ(0)"]
  },
  "transform-cpu": {
    "style": ["transform", "none"]
  },
  "origin": {
    "prop": [["position", "transformOrigin"]]
  },
  "perspective": {
    "prop": [["length", "perspective"], [["none", "dramatic", "near", "normal", "midrange", "distant"], "perspective"]]
  },
  "perspective-origin": {
    "prop": [["position", "perspectiveOrigin"]]
  },
  "rotate": {
    "prop": [["angle", "rotate"]]
  },
  "scale": {
    "prop": [["number", ["scale", "scaleX", "scaleY"]], ["percentage", ["scale", "scaleX", "scaleY"]]]
  },
  "skew": {
    "prop": [["angle", ["skewX", "skewY"]]]
  },
  "translate": {
    "prop": [["length", ["translate", "translateX", "translateY"]], ["percentage", ["translate", "translateX", "translateY"]]]
  },
  "transition": {
    "prop": [[["none", "all", "colors", "opacity", "shadow", "transform", "all"], "transitionProperty"]]
  },
  "duration": {
    "prop": [["time", "transitionDuration"]]
  },
  "ease": {
    "prop": [["easing", "transitionTimingFunction"]]
  },
  "delay": {
    "prop": [["time", "transitionDelay"]]
  },
  "animate": {
    "prop": [[["none", "spin", "ping", "pulse", "bounce"], "animation"]]
  },
  "fill": {
    "prop": [["color", "fill"]]
  },
  "stroke": {
    "prop": [["color", "stroke"], ["length", "strokeWidth"]]
  },
  "accent": {
    "prop": [["color", "accentColor"]]
  },
  "appearance": {
    "prop": [[["none", "auto"], "appearance"]]
  },
  "caret": {
    "prop": [["color", "caretColor"]]
  },
  "scheme": {
    "prop": [[["normal", "light", "dark", "light-dark", "only-light", "only-dark"], "colorScheme"]]
  },
  "cursor": {
    "prop": [[["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out"], "cursor"]]
  },
  "field-sizing": {
    "prop": [[["fixed", "content"], "fieldSizing"]]
  },
  "pointer-events": {
    "prop": [[["auto", "none"], "pointerEvents"]]
  },
  "resize": {
    "prop": [[["none", "x", "y"], "resize"]]
  },
  "scroll": {
    "prop": [
      [[ "auto", "smooth" ], "scrollBehavior"],
      [["auto", "contain", "none"], "overscrollBehavior"]
    ]
  },
  "scroll-m": {
    "prop": [["length", "scrollMargin"]]
  },
  "scroll-mx": {
    "prop": [["length", ["scrollMarginLeft", "scrollMarginRight"]]]
  },
  "scroll-my": {
    "prop": [["length", ["scrollMarginTop", "scrollMarginBottom"]]]
  },
  "scroll-mt": {
    "prop": [["length", "scrollMarginTop"]]
  },
  "scroll-mr": {
    "prop": [["length", "scrollMarginRight"]]
  },
  "scroll-mb": {
    "prop": [["length", "scrollMarginBottom"]]
  },
  "scroll-ml": {
    "prop": [["length", "scrollMarginLeft"]]
  },
  "scroll-p": {
    "prop": [["length", "scrollPadding"]]
  },
  "scroll-px": {
    "prop": [["length", ["scrollPaddingLeft", "scrollPaddingRight"]]]
  },
  "scroll-py": {
    "prop": [["length", ["scrollPaddingTop", "scrollPaddingBottom"]]]
  },
  "scroll-pt": {
    "prop": [["length", "scrollPaddingTop"]]
  },
  "scroll-pr": {
    "prop": [["length", "scrollPaddingRight"]]
  },
  "scroll-pb": {
    "prop": [["length", "scrollPaddingBottom"]]
  },
  "scroll-pl": {
    "prop": [["length", "scrollPaddingLeft"]]
  },
  "snap": {
    "prop": [
      [["none", "x", "y", "both"], "scrollSnapType"],
      [["mandatory", "proximity"], "scrollSnapType"],
      [["start", "end", "center", "align-none"], "scrollSnapAlign"],
      [["normal", "always"], "scrollSnapStop"]
    ]
  },
  "touch": {
    "prop": [[["auto", "none", "pan-x", "pan-left", "pan-right", "pan-y", "pan-up", "pan-down", "pinch-zoom", "manipulation"], "touchAction"]]
  },
  "select": {
    "prop": [[["none", "text", "all", "auto"], "userSelect"]]
  },
  "will-change": {
    "prop": [[["auto", "scroll", "contents", "transform"], "willChange"]]
  },
  "sr-only": {
    "style": ["position", "absolute"]
  },
  "not-sr-only": {
    "style": ["position", "static"]
  },
  "forced-color-adjust": {
    "prop": [[["auto", "none"], "forcedColorAdjust"]]
  }
}
```

Implementation notes:

1. The keys represent utility stems, not every possible generated class. For example, `bg` covers `bg-red-500`, `bg-cover`, and `bg-[url(...)]`.
2. The keyword arrays describe named values; the string types describe value categories, including arbitrary values.
3. Tailwind variants such as `hover:`, `focus:`, `md:`, and `dark:` should be parsed separately from the utility.
4. Negative values, important modifiers (`!`), opacity modifiers (`/50`), arbitrary properties, and custom utilities need separate parser handling.
5. A single `style` tuple cannot represent multi-property utilities such as `truncate` or `sr-only` completely. Those need a richer representation if you want exact CSS output.

Tailwind's official documentation describes arbitrary values and dynamically generated utilities, while the v4 upgrade guide documents renamed and removed utilities.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://tailwindcss.com\&sz=32)

Tailwind CSS+1

# what characters can you use in css var

In CSS, variable names (technically known as **custom properties**) follow the rules of CSS identifiers. They are incredibly flexible and support a wide range of characters, but they do have specific starting and formatting constraints. [](https://stackoverflow.com/questions/2812072/allowed-characters-for-css-identifiers)

### 🛑 Crucial Starting Rule

Every CSS variable name **must begin with two hyphens (`--`)**. [](https://ishadeed.com/article/css-vars-101/)

* Directly after those two hyphens, you **cannot** use a digit (0-9). For example, `--1color` is invalid, but `--color1` is perfectly fine. [](https://stackoverflow.com/questions/2812072/allowed-characters-for-css-identifiers)

---

### ✅ Allowed Characters

Inside the name (after the initial `--`), you can use:

* **Alphanumeric characters:** Letters (`a-z`, `A-Z`) and digits (`0-9`).
* **Dashes and Underscores:** Hyphens (`-`) and underscores (`_`).
* **Emoji and Non-ASCII characters:** Any UTF-8 character, including [emojis](https://www.w3.org/TR/css-variables-1/) and international characters (like `ñ`, `é`, or `文`).
* **Escaped Special Characters:** If you want to use punctuation or characters that normally disrupt CSS (like spaces, periods, commas, or colons), you must escape them with a backslash (`\`). [](https://www.w3.org/TR/css-variables-1/)

### 🚫 Forbidden / Problematic Characters

* **Unescaped Spaces:** `--main color` will fail because spaces break the identifier. Use `--main-color`, `--main_color`, or an escaped space `--main\ color`.
* **Unescaped Special Punctuation:** Characters like `.`, `:`, `;`, `,`, `!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `(`, `)` must be escaped to avoid breaking the CSS parser. [](https://forum.bricksbuilder.io/t/css-variable-manager-feedback/22120)

---

### Quick Examples of Valid vs. Invalid Names

| Variable Name    | Status        | Reason                                                     |
| ---------------- | ------------- | ---------------------------------------------------------- |
| \--primary-color | **Valid**     | Standard use of alphanumeric characters and hyphens.       |
| \--font\_size\_2 | **Valid**     | Contains underscores and ends with a number.               |
| \--🔥            | **Valid**     | Emojis are fully valid UTF-8 symbols.                      |
| \--bg\\ color    | **Valid**     | The space is properly escaped with a backslash.            |
| \--2nd-accent    | ❌ **Invalid** | Cannot have a digit immediately following the initial \--. |
| \--brand color   | ❌ **Invalid** | Contains an unescaped space.                               |

> ⚠️ **Note on Case Sensitivity:** CSS variable names are strictly **case-sensitive**. This means `--main-color` and `--Main-Color` are treated by the browser as two completely separate variables. [](https://www.fisherdesignandadvertising.com/css-variables/)

Would you like help looking at **how to use emojis as variables** in a real project, or are you trying to troubleshoot an **invalid variable name** that isn't working?

AI can make mistakes, so double-check responses 

* [](https://ishadeed.com/article/css-vars-101/)  
Ahmad Shadeed  
CSS Variables 101  
Variables use double hyphens (\`--\`), are case-sensitive, and support alphanumeric characters, underscores, and dashes.
* [](https://forum.bricksbuilder.io/t/css-variable-manager-feedback/22120)  
Bricks Community Forum  
CSS Variable Manager Feedback - Bricks Community Forum  
Apr 24, 2024 — variable names do not have to be lowercase across the board or separated by hyphens. The valid naming for a CSS variable should co...
* [](https://stackoverflow.com/questions/2812072/allowed-characters-for-css-identifiers)  
Stack Overflow  
Allowed characters for CSS identifiers - Stack Overflow  
May 11, 2010 — The charset doesn't matter. The allowed characters matters more. Identifiers can also contain escaped characters and any ISO 10646...

Show all


# compare using both padding left and right and using padding inline

In CSS, `padding-left` + `padding-right` and `padding-inline` can achieve the same result, but they differ in how they handle writing direction.

## 1. Using `padding-left` and `padding-right`

```
.container {
  padding-left: 20px;
  padding-right: 20px;
}
```

- `padding-left` controls the physical left padding.
- `padding-right` controls the physical right padding.
- The padding stays on the same physical sides regardless of writing direction.

## 2. Using `padding-inline`

```
.container {
  padding-inline: 20px;
}
```

This is shorthand for:

```
.container {
  padding-inline-start: 20px;
  padding-inline-end: 20px;
}
```

- `padding-inline-start` controls the beginning of the text's inline direction.
- `padding-inline-end` controls the end of the text's inline direction.
- Automatically adapts to writing direction (LTR or RTL).

## 3. Key differences

| Feature                 | Left + Right   | Inline         |
| ----------------------- | -------------- | -------------- |
| CSS properties          | Physical       | Logical        |
| LTR layout              | Left and right | Left and right |
| RTL layout              | Left and right | Right and left |
| Supports writing modes  | No             | Yes            |
| Responsive to direction | No             | Yes            |
| Modern CSS              | Yes            | Yes            |

## 4. Visual example

LTR (English)

Content

Both approaches produce the same result.

RTL (Arabic / Hebrew)

المحتوى

`padding-inline` follows the writing direction, while left/right always refer to physical sides.

## 5. Which should you use?

Recommendation: Use `padding-inline` for modern web development.

```
/* Horizontal spacing */
.card {
  padding-inline: 24px;
}

/* Vertical spacing */
.card {
  padding-block: 16px;
}

/* All four sides */
.card {
  padding: 16px 24px;
}
```

The main advantage is internationalization (i18n). Your layout can support both LTR and RTL languages without needing separate left/right CSS rules.

In short: `padding-left` and `padding-right` describe physical sides; `padding-inline` describes logical inline directions.

# (?) tailwind tshirt sizes

Here’s a standard T-shirt size chart (unisex, Asian/oversized streetwear fit):

## Tailwind T-shirt size guide

| Size | Chest (in) | Chest (cm) | Length (cm) |
| ---- | ---------- | ---------- | ----------- |
| XS   | 34–36      | 86–91      | 64–66       |
| S    | 36–38      | 91–97      | 67–69       |
| M    | 38–40      | 97–102     | 70–72       |
| L    | 40–42      | 102–107    | 73–75       |
| XL   | 42–44      | 107–112    | 76–78       |
| 2XL  | 44–46      | 112–117    | 79–81       |

Note: These are general reference measurements, not a verified official Tailwind size chart. Actual sizing depends on the manufacturer and fit.

## T-shirt measurement guide

[How to Read T-Shirt Size Chart (Width, Length, CM Guide)](https://images.openai.com/static-rsc-4/6l2K0t85Qf3oLwTidI4ylri-NwjBCcvZ9za8UkksWCRMo6Mooy3lCbzXPLIMuO57yS1pS1B5VIHcnbRlj1facVJKseUU_VojIceYTYH7iIq2A-F0wayOo6TdYzVoEVTgADWLcZuFv9KgIZyilNhM9f0B6a4u8tr5MXgAJcA3M3s?purpose=inline)

[clavisapparel.shop](https://clavisapparel.shop/blogs/news/how-to-read-tshirt-size-chart?utm_source=chatgpt.com)

- Chest: Across the shirt, measured armpit to armpit.
- Length: From the highest shoulder point to the bottom hem.
- Shoulder: From one shoulder seam to the other.

I can also create a Tailwind T-shirt size chart graphic suitable for a clothing brand or online shop.

# tailwind css tshirt sizes

Here’s a Tailwind CSS T-shirt size chart you can use for an online clothing store.

### T-shirt size chart (Unisex)

| Size | Chest (inches) | Chest (cm) | Length (cm) |
| ---- | -------------- | ---------- | ----------- |
| XS   | 32–34          | 81–86      | 65          |
| S    | 35–37          | 89–94      | 68          |
| M    | 38–40          | 97–102     | 71          |
| L    | 41–43          | 104–109    | 74          |
| XL   | 44–46          | 112–117    | 77          |
| 2XL  | 47–49          | 119–124    | 80          |
| 3XL  | 50–52          | 127–132    | 83          |

These are general sizing estimates. Actual measurements vary by manufacturer and fit.

### Tailwind CSS size selector

```
<div class="flex flex-wrap gap-3">
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    XS
  </button>
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    S
  </button>
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    M
  </button>
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    L
  </button>
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    XL
  </button>
  <button class="border rounded-lg px-4 py-2 hover:bg-black hover:text-white">
    2XL
  </button>
</div>
```

### Tailwind CSS size chart component

```
<div class="overflow-x-auto">
  <table class="w-full text-sm text-left border-collapse">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-3">Size</th>
        <th class="p-3">Chest</th>
        <th class="p-3">Length</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="p-3 font-medium">S</td>
        <td class="p-3">89–94 cm</td>
        <td class="p-3">68 cm</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-medium">M</td>
        <td class="p-3">97–102 cm</td>
        <td class="p-3">71 cm</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-medium">L</td>
        <td class="p-3">104–109 cm</td>
        <td class="p-3">74 cm</td>
      </tr>
      <tr class="border-b">
        <td class="p-3 font-medium">XL</td>
        <td class="p-3">112–117 cm</td>
        <td class="p-3">77 cm</td>
      </tr>
    </tbody>
  </table>
</div>
```

I can also create a visual T-shirt size guide infographic with XS–3XL measurements for your clothing store.

# /search tailwind css tshirt sizes

In Tailwind CSS, the term T-shirt sizing usually refers to responsive screen breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`).

### Tailwind CSS default breakpoints

| Size    | Minimum screen width | Typical device |
| ------- | -------------------- | -------------- |
| Default | 0px                  | Mobile         |
| `sm`    | 640px                | Large mobile   |
| `md`    | 768px                | Tablet         |
| `lg`    | 1024px               | Laptop         |
| `xl`    | 1280px               | Desktop        |
| `2xl`   | 1536px               | Large desktop  |

Source: [Official Tailwind CSS documentation](https://tailwindcss.com/docs/responsive-design?utm_source=chatgpt.com).

### Example usage

```
<div class="
  text-sm
  sm:text-base
  md:text-lg
  lg:text-xl
  xl:text-2xl
">
  Responsive text
</div>
```

### Visual layout example

```
<div class="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  xl:grid-cols-5
">
  <!-- Items -->
</div>
```

Important: Tailwind is mobile-first. Unprefixed classes apply to all screen sizes; breakpoint-prefixed classes apply at that width and above.

### Custom T-shirt sizing convention

If you're creating your own design system, you can also use:

| Token | Meaning            |
| ----- | ------------------ |
| `xs`  | Extra small        |
| `sm`  | Small              |
| `md`  | Medium             |
| `lg`  | Large              |
| `xl`  | Extra large        |
| `2xl` | Double extra large |

These are not the same as Tailwind's default responsive breakpoints.

# tailwind css tshirt sizes

In Tailwind CSS, **"t-shirt sizes"** refer to the semantic naming convention (e.g., `sm`, `md`, `lg`, `xl`) used across various utility categories to scale dimensions. [](https://nearform.com/digital-community/scaling-a-design-system-with-tailwind-css)

Because Tailwind uses this naming pattern for multiple features, the exact values depend entirely on what property you are applying them to. Below is the direct breakdown of how t-shirt sizes map across **font sizes, breakpoints, container max-widths, and border radiuses**. [](https://nearform.com/digital-community/scaling-a-design-system-with-tailwind-css)

### 1\. Typography (`text-*`)

When applied to text, t-shirt sizes control both the **font size** and the **line height** (leading) simultaneously. [](https://tailwindcss.com/docs/font-size)

| Class                   | Font Size       | Line Height    |
| ----------------------- | --------------- | -------------- |
| text-xs                 | 0.75rem (12px)  | 1rem (16px)    |
| text-sm                 | 0.875rem (14px) | 1.25rem (20px) |
| text-base               | 1rem (16px)     | 1.5rem (24px)  |
| text-lg                 | 1.125rem (18px) | 1.75rem (28px) |
| text-xl                 | 1.25rem (20px)  | 1.75rem (28px) |
| text-2xl                | 1.5rem (24px)   | 2rem (32px)    |
| text-3xl                | 1.875rem (30px) | 2.25rem (36px) |
| _Scales up to text-9xl_ | _8rem (128px)_  | _1 (128px)_    |

_Check the official [Tailwind CSS Font Size Documentation](https://tailwindcss.com/docs/font-size) for the complete list._

### 2\. Responsive Breakpoints (`sm:`, `md:`, etc.)

For media queries and responsive design, t-shirt sizes define the **minimum width (`min-width`)** at which a responsive layout triggers. [](https://codefinity.com/courses/v2/615567da-b053-4674-b89c-053057d2bca7/91c633d9-424b-4fbd-bf7a-e737351c7e17/7f3eb401-c0da-4806-9f71-c60c1499ed76)

| Breakpoint | Minimum Width | Target Devices        |
| ---------- | ------------- | --------------------- |
| sm         | 640px         | Large smartphones     |
| md         | 768px         | Tablets               |
| lg         | 1024px        | Laptops / Desktops    |
| xl         | 1280px        | Large desktop screens |
| 2xl        | 1536px        | Extra large monitors  |

_Read more on layouts in the Tailwind CSS Responsive Design Guide._

### 3\. Max-Width Layouts (`max-w-*`)

When structuring layout containers, t-shirt modifiers restrict the **maximum expansion limit** of an element. [](https://tailwindcss.com/docs/max-width)

| Class                    | Max-Width        |
| ------------------------ | ---------------- |
| max-w-xs                 | 20rem (320px)    |
| max-w-sm                 | 24rem (384px)    |
| max-w-md                 | 28rem (448px)    |
| max-w-lg                 | 32rem (512px)    |
| max-w-xl                 | 36rem (576px)    |
| max-w-2xl                | 42rem (672px)    |
| _Scales up to max-w-7xl_ | _80rem (1280px)_ |

_Review your container options on the [Tailwind CSS Max-Width Page](https://tailwindcss.com/docs/max-width)._

### 4\. Border Radius (`rounded-*`)

T-shirt scales are also used to incrementally control the roundness of element corners.

* `rounded-sm`: 0.125rem (2px)
* `rounded` (Base): 0.25rem (4px)
* `rounded-md`: 0.375rem (6px)
* `rounded-lg`: 0.5rem (8px)
* `rounded-xl`: 0.75rem (12px)
* `rounded-2xl`: 1rem (16px)
* `rounded-3xl`: 1.5rem (24px)

Are you trying to configure a **custom t-shirt size** in your `tailwind.config.js` or `@theme` file, or did you need help mapping a **specific layout dimension**?

* [](https://nearform.com/digital-community/scaling-a-design-system-with-tailwind-css)  
Nearform  
Scaling a design system with Tailwind CSS | Nearform  
Feb 6, 2025 — By default, Tailwind's t-shirt sizing has set values for the font size and line height attributes. For example, text-sm represents...
* [](https://tailwindcss.com/docs/font-size)  
Tailwind CSS  
font-size - Typography - Tailwind CSS  
sizes and line heights. Combine font size and line height using slash notation. Customize themes by defining --text-\* variables in...
* [](https://tailwindcss.com/docs/max-width)  
Tailwind CSS  
max-width - Sizing - Tailwind CSS  
Percentage-based widths, container breakpoints, custom values. Tailwind containers do not auto-center or include horizontal paddin...

Show all

# tailwind css text util

Tailwind CSS provides utility classes for styling text, including font size, color, weight, alignment, spacing, and decoration.

### 1. Font size

| Class       | Size |
| ----------- | ---- |
| `text-xs`   | 12px |
| `text-sm`   | 14px |
| `text-base` | 16px |
| `text-lg`   | 18px |
| `text-xl`   | 20px |
| `text-2xl`  | 24px |
| `text-3xl`  | 30px |
| `text-4xl`  | 36px |
| `text-5xl`  | 48px |

### 2. Font weight

```
font-thin
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
font-black
```

### 3. Text color

```
text-black
text-white
text-gray-500
text-red-500
text-blue-500
text-green-500
text-yellow-500
text-purple-500
text-transparent
```

### 4. Text alignment

```
text-left
text-center
text-right
text-justify
text-start
text-end
```

### 5. Text decoration

```
underline
overline
line-through
no-underline
decoration-solid
decoration-dashed
decoration-dotted
```

### 6. Text transformation

```
uppercase
lowercase
capitalize
normal-case
```

### 7. Letter spacing

```
tracking-tighter
tracking-tight
tracking-normal
tracking-wide
tracking-wider
tracking-widest
```

### 8. Line height

```
leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed
leading-loose
```

### 9. Text overflow

```
truncate
text-ellipsis
text-clip
break-normal
break-words
break-all
```

### 10. Example

```
<h1 class="text-3xl font-bold text-gray-900 tracking-tight">
  Hello Tailwind
</h1>

<p class="text-base text-gray-600 leading-relaxed">
  This is a paragraph using Tailwind CSS text utilities.
</p>

<span class="text-sm font-medium text-blue-500 uppercase">
  Featured
</span>
```

Tip: You can combine utilities freely, for example:

```
<p class="text-lg font-semibold text-blue-600 text-center">
  Hello World
</p>
```

See the official documentation: [Tailwind CSS documentation](https://tailwindcss.com/docs/styling-with-utility-classes?utm_source=chatgpt.com).

# tailwind css text util

Tailwind CSS provides utility classes for styling text, including font size, color, weight, alignment, spacing, and decoration.

### 1. Font size

| Class       | Size |
| ----------- | ---- |
| `text-xs`   | 12px |
| `text-sm`   | 14px |
| `text-base` | 16px |
| `text-lg`   | 18px |
| `text-xl`   | 20px |
| `text-2xl`  | 24px |
| `text-3xl`  | 30px |
| `text-4xl`  | 36px |
| `text-5xl`  | 48px |

### 2. Font weight

```
font-thin
font-light
font-normal
font-medium
font-semibold
font-bold
font-extrabold
font-black
```

### 3. Text color

```
text-black
text-white
text-gray-500
text-red-500
text-blue-500
text-green-500
text-yellow-500
text-purple-500
text-transparent
```

### 4. Text alignment

```
text-left
text-center
text-right
text-justify
text-start
text-end
```

### 5. Text decoration

```
underline
overline
line-through
no-underline
decoration-solid
decoration-dashed
decoration-dotted
```

### 6. Text transformation

```
uppercase
lowercase
capitalize
normal-case
```

### 7. Letter spacing

```
tracking-tighter
tracking-tight
tracking-normal
tracking-wide
tracking-wider
tracking-widest
```

### 8. Line height

```
leading-none
leading-tight
leading-snug
leading-normal
leading-relaxed
leading-loose
```

### 9. Text overflow

```
truncate
text-ellipsis
text-clip
break-normal
break-words
break-all
```

### 10. Example

```
<h1 class="text-3xl font-bold text-gray-900 tracking-tight">
  Hello Tailwind
</h1>

<p class="text-base text-gray-600 leading-relaxed">
  This is a paragraph using Tailwind CSS text utilities.
</p>

<span class="text-sm font-medium text-blue-500 uppercase">
  Featured
</span>
```

Tip: You can combine utilities freely, for example:

```
<p class="text-lg font-semibold text-blue-600 text-center">
  Hello World
</p>
```

See the official documentation: [Tailwind CSS documentation](https://tailwindcss.com/docs/styling-with-utility-classes?utm_source=chatgpt.com).

# can you write text-number in tailwind css by default

**No, you cannot write `text-number` (like `text-12` or `text-16`) in Tailwind CSS by default.** Tailwind's default design system intentionally avoids direct pixel mappings for standard utility names, opting instead for a t-shirt sizing system (e.g., `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, up to `text-9xl`). [](https://www.youtube.com/watch?v=A07cNqlGJ0Q)

However, you can still use specific numbers by using **arbitrary values** or by **customizing your configuration**.

### 1\. The Quick Fix: Arbitrary Values

If you just need a specific number of pixels for a one-off style, pass it inside square brackets. Tailwind compiles this on the fly: [](https://www.reddit.com/r/webdev/comments/wv5pf9/tailwind%5Fusers%5Fhow%5Fdo%5Fyou%5Fcode%5Fwithout%5Fcustom/)

html

```
<p class="text-[14px]">This is 14px text</p>
<p class="text-[22px]">This is 22px text</p>

```



### 2\. The Permanent Fix: Custom Config

If you prefer writing `text-14` or `text-16` across your whole project, you can extend the default theme. [](https://www.reddit.com/r/webdev/comments/wv5pf9/tailwind%5Fusers%5Fhow%5Fdo%5Fyou%5Fcode%5Fwithout%5Fcustom/)

**For Tailwind v4 (CSS Configuration):**  
Add your custom utilities directly in your main CSS file using the `@theme` directive:

css

```
@theme {
  --text-12: 12px;
  --text-14: 14px;
  --text-16: 16px;
}

```



**For Tailwind v3 (`tailwind.config.js`):**  
Extend the `fontSize` theme inside your configuration file:

javascript

```
module.exports = {
  theme: {
    extend: {
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
      }
    }
  }
}

```



Once configured, you can use them safely in your markup as standard classes: `<p class="text-14">...</p>`.

Are you trying to map numbers to **pixels** specifically, or are you trying to build a **numeric scaling system** (like `text-1`, `text-2`) for your project? I can help you write a quick script or config block to automate that generation.

* [](https://www.reddit.com/r/webdev/comments/wv5pf9/tailwind%5Fusers%5Fhow%5Fdo%5Fyou%5Fcode%5Fwithout%5Fcustom/)  
Reddit·r/webdev  
Tailwind users, how do you code without custom numbers for ...  
Aug 22, 2022 — Tailwind 3.0 allows you to us custom numbers, you can also extend the theme and make your own classes. JIT mode is default now.
* [](https://www.youtube.com/watch?v=A07cNqlGJ0Q)  
YouTube·Can Boz  
8 Tailwind CSS Font Size | How to Control Text Sizes  
Oct 11, 2025 — The default browser font size is 1 rem, equivalent to 16 pixels. Tailwind CSS provides utility classes for various font sizes: \`te...  
3:47
* [](https://www.youtube.com/watch?v=8muZbYwHYFI)  
YouTube·NST Infotech  
Tailwind CSS Tutorial for Beginners | Styling Text & ...  
Jun 14, 2026 — The video covers styling text in Tailwind CSS, The tutorial explains text alignment with \`text-right\`, \`text-justify\`, and \`text-c...  
16:11

Show all

# tailwind css text tshirt sizes

In **Tailwind CSS**, text sizes are defined using **"t-shirt sizing" utility classes** (from `text-xs` up to `text-9xl`). By default, these utilities map directly to `rem` units and include a matching, proportional `line-height` (leading) to maintain clean readability. [](https://tailwindcss.com/docs/font-size)

Here is a quick reference table of the default Tailwind CSS text size classes: [](https://v3.tailwindcss.com/docs/font-size)

| Class     | Font Size | Pixel Equivalent (at 16px base) | Default Line Height |
| --------- | --------- | ------------------------------- | ------------------- |
| text-xs   | 0.75rem   | 12px                            | 1rem (16px)         |
| text-sm   | 0.875rem  | 14px                            | 1.25rem (20px)      |
| text-base | 1rem      | **16px (Browser Default)**      | 1.5rem (24px)       |
| text-lg   | 1.125rem  | 18px                            | 1.75rem (28px)      |
| text-xl   | 1.25rem   | 20px                            | 1.75rem (28px)      |
| text-2xl  | 1.5rem    | 24px                            | 2rem (32px)         |
| text-3xl  | 1.875rem  | 30px                            | 2.25rem (36px)      |
| text-4xl  | 2.25rem   | 36px                            | 2.5rem (40px)       |
| text-5xl  | 3rem      | 48px                            | 1                   |
| text-6xl  | 3.75rem   | 60px                            | 1                   |
| text-7xl  | 4.5rem    | 72px                            | 1                   |
| text-8xl  | 6rem      | 96px                            | 1                   |
| text-9xl  | 8rem      | 128px                           | 1                   |

### 💡 Core Tips

* **Overriding Line Height:** You can easily change the line height inline using a slash modifier. For example, `text-xl/8` sets the font size to `1.25rem` and forces the line-height to `2rem` (`leading-8`).
* **Responsive Sizing:** Prefix the text class with a breakpoint to scale your typography seamlessly across device sizes (e.g., `text-sm md:text-base lg:text-lg`).
* **Arbitrary Sizes:** If you need a hyper-specific size that doesn't fit the t-shirt scale, use square brackets: `text-[15px]` or `text-[2.5rem]`. [](https://www.youtube.com/watch?v=%5FxoyOfIzyJc&t=25)

For further customization details, check out the official [Tailwind CSS Font Size Documentation](https://tailwindcss.com/docs/font-size). 

Are you looking to **customize these default sizes** in your Tailwind configuration file, or do you need help implementing **responsive typography** for a specific layout?

* [](https://tailwindcss.com/docs/font-size)  
Tailwind CSS  
font-size - Typography - Tailwind CSS  
Use the --text-\* theme variables to customize the font size utilities in your project: You can also provide default line-height , ...
* [](https://v3.tailwindcss.com/docs/font-size)  
Tailwind CSS  
Font Size - Tailwind CSS  
Set an element's line-height at the same time you set the font size by adding a line-height modifier to any font size utility.
* [](https://www.youtube.com/watch?v=%5FxoyOfIzyJc&t=25)  
YouTube·Sanan Ali  
\[Tutorial - 2\] - Everything about font sizes in TailwindCSS  
Nov 30, 2025 — For custom font sizes, use arbitrary values by specifying the desired pixel size within square brackets, e.g., \`text-\[45px\]\`.  
2m

Show all


# what are the utils like text-tshirt in tailwind that produce more than one prop value pairs w different values

In Tailwind CSS, utility classes that apply multiple distinct properties with different values are typically referred to as **compound utilities**, **composite utilities**, or **shortcut utilities**.

Rather than just mapping one utility to one CSS property (like `font-bold` to `font-weight: 700`), these utilities bundle a group of highly related properties together to provide sensible, out-of-the-box styling for common design patterns.

Here is a comprehensive breakdown of the major multi-property utilities in Tailwind, grouped by their design function.

### Typography

* **`text-{size}` (e.g., `text-xl`, `text-sm`)**
  * **Properties applied:** `font-size` and `line-height`.
  * **Why:** Tailwind couples these because larger font sizes inherently require proportionally different line heights to remain readable without text overlapping.
* **`font-{family}` (e.g., `font-sans`, `font-serif`)**
  * **Properties applied:** `font-family` and a default `font-feature-settings` or `font-variation-settings` (depending on the Tailwind version and configuration for optimization).

### Layout & Sizing

* **`container`**
  * **Properties applied:** `width: 100%`, and a series of different `max-width` values mapped to each responsive breakpoint (`sm`, `md`, `lg`, etc.).
* **`aspect-{ratio}` (e.g., `aspect-video`, `aspect-square`)**
  * **Properties applied:** `aspect-ratio` but often includes fallback behaviors or variables depending on the version to ensure cross-browser consistency.
* **`size-{value}` (Introduced in v3.4+)**
  * **Properties applied:** Both `width` and `height` simultaneously using the same value (e.g., `size-4` sets `width: 1rem; height: 1rem;`).

### Visual Effects & Interactivity

* **`shadow-{size}` (e.g., `shadow-md`, `shadow-lg`)**
  * **Properties applied:** Multiple layers of `box-shadow` separated by commas to create realistic, soft depth, alongside modern Tailwind variable assignments for shadow color blending.
* **`sr-only` (Screen Reader Only)**
  * **Properties applied:** A massive block of properties used to hide an element visually while keeping it accessible: `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;`.
* **`appearance-none`**
  * **Properties applied:** Resets native browser styling by setting both `-webkit-appearance: none;` and `appearance: none;`.

---

### How to Create Your Own

If you want to create your own utilities that output multiple property-value pairs, you can do so in your `tailwind.config.js` file using the `plugin` system.

javascript

```
const plugin = require('tailwindcss/plugin')

module.exports = {
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.scrim-gradient': {
          'background-image': 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
          'pointer-events': 'none',
        },
      })
    })
  ]
}

```



Are you trying to **replicate a specific CSS component pattern** into a single class, or are you looking to **customize the default values** (like changing the line-height tied to `text-lg`) inside your Tailwind config?

# all utils like text-tshirt in tailwind that produce more than one prop value pairs w different values

9:34 PM

### all utils like text-tshirt in tailwind that produce more than one prop value pairs w different values

10 sites

#### Here are top web results for exploring this topic:

[](https://tailwindcss.com/docs/styling-with-utility-classes)

Tailwind CSS·https://tailwindcss.com

Styling **with utility** classes - Core concepts - **Tailwind** CSS

Using class composition. A lot of the time with Tailwind you'll even use multiple classes to build up the value for a single CSS property, for example adding multiple filters to an element: HTML. . B

[](https://www.youtube.com/watch?v=FGHHzuv6IVU)

YouTube·https://www.youtube.com

Arbitrary **Values** & **Properties** in **Tailwind** (Advent **of** Vue #11)

My solution to the 11th Advent of Vue challenge! Some neat Tailwind tips and tricks. Advent of Vue: https://adventofvue.com/ Code: https://github.com/lmiller1990/aov2022/tree/aoc-11-twinkle-solution K

[](https://stackoverflow.com/questions/73915353/how-to-write-many-values-of-property-css-in-tailwind)

Stack Overflow·https://stackoverflow.com

How to write many **values of property** css in **tailwind**? - Stack Overflow

Highest score (default), Trending (recent votes count more), Date modified (newest first), Date created (oldest first). This answer is useful. 2\. This answer is not useful. Save this answer. Loading w

[](https://medium.com/@serpentarium13/tailwind-tricks-that-would-make-your-development-comfortable-72930590dd06)

Medium·https://medium.com

**Tailwind** tricks that would **make** your development comfortable

Sometimes, there is that problem with Tailwind: it allows us to use basic CSS constructions like applying certain styles to all children of our element, but to make it work we need to rewrite every st

[](https://github.com/dcastil/tailwind-merge/discussions/323)

GitHub·https://github.com

How to merge custom **utility** classes (which change **multiple** ... - GitHub

By the way, I find configuring helper classes like this in tailwind-merge quite complicated and annoying, especially if they define multiple CSS properties. So I use a different technique to create he

[](https://dev.to/philw%5F/using-style-dictionary-to-transform-tailwind-config-into-scss-variables-css-custom-properties-and-javascript-via-design-tokens-24h5)

DEV Community·https://dev.to

Using Style Dictionary to transform **Tailwind** config into SCSS ...

Design tokens are machine-readable representations of a brand's design language, typically things... Tagged with tailwindcss, css, sass, designtokens.

[](https://www.reddit.com/r/Frontend/comments/1br37q7/tailwind%5Fhow%5Fdo%5Fyall%5Fkeep%5Fstyles%5Fconsistent/)

Reddit·https://www.reddit.com

**Tailwind**: How do y'**all** keep **styles** consistent across a codebase **with** ...

Set your linting rules in workspace and publish them to your repo so that every commit must pass linting before it is pushed. Use prettier "prettier.stylelintIntegration": true and add a .stylelintrc.

[](https://blog.alyssaholland.me/tailwind-css-arbitrary-values)

blog.alyssaholland.me·https://blog.alyssaholland.me/tailwind-css-arbitrary-values

Customization in **Tailwind** CSS: Adding Arbitrary **Values**

As of v3.0 of Tailwind, arbitrary values are now included by default. Versions prior to v3.0 will require the Just-In-Time engine in order to support this feature. Arbitrary values are great to use if

[](https://www.smashingmagazine.com/2020/05/reusable-react-components-tailwind/)

Smashing Magazine·https://www.smashingmagazine.com

Building Reusable React Components Using **Tailwind**

Tailwind is a popular utility-first CSS framework that provides low-level class names to web developers. It does not have any JavaScript and works well with existing frameworks such as React, Vue, Ang

[](https://daily.dev/blog/tailwind-css-the-utility-first-workflow/)

daily.dev·https://daily.dev

**Tailwind** CSS **from** Zero to Hero - The **Utility**\-First Workflow | daily.dev

In this article, you got to know more about the core concept behind what makes Tailwind CSS a different CSS framework, i.e. the utility classes. You saw how they are formatted, how they work, how they

## answer

answer

9:34 PM

### answer

**Tailwind CSS features many composite utility classes** that generate multiple distinct property-value pairs with different values behind the scenes. These are typically engineered to set up unified layout variables, cover multi-axis positioning, or establish complex typographic systems in a single declaration. [](https://tailwindcss.com/docs/styling-with-utility-classes)

The primary Tailwind utilities that output more than one distinct property-value pair include:

#### 1\. Typography & Text Scaling

* **`text-{size}` (e.g., `text-lg`, `text-xl`)**: Generates both `font-size` and a proportional `line-height`.
* **`font-{family}` (e.g., `font-sans`)**: Applies a primary `font-family` stacked with fallbacks, alongside specific `font-feature-settings` or `font-variation-settings`.
* **`list-{type}` (e.g., `list-disc`)**: Applies `list-style-type` and simultaneously enforces `margin` variations or `padding` offsets depending on the context.

#### 2\. Multi-Directional Layouts

* **`size-{value}` (e.g., `size-4`)**: Equalizes layout bounds by executing both `width` and `height` properties simultaneously.
* **`inset-{value}` (e.g., `inset-0`)**: Shorthand that outputs distinct `top`, `right`, `bottom`, and `left` declarations.
* **`inset-x-{value}` / `inset-y-{value}`**: Sets horizontal pairings (`left` and `right`) or vertical pairings (`top` and `bottom`).

#### 3\. Composed Visual Effects (Using CSS Variables)

These complex utilities output explicit property assignments alongside localized CSS custom properties to safely layer properties without destroying other stacked effects: [](https://tailwindcss.com/docs/styling-with-utility-classes)

* **`shadow-{size}` (e.g., `shadow-md`)**: Defines multiple layers of box-shadow tracking parameters, adjusting inner/outer blurs and ambient colors via `--tw-shadow` variables.
* **`bg-gradient-to-{dir}` (e.g., `bg-gradient-to-r`)**: Dictates a `background-image` value using fallback color configurations like `--tw-gradient-stops` to transition parameters safely.
* **Transforms (`scale-95`, `rotate-45`, `translate-x-2`)**: Dynamically update isolated transform scopes (`--tw-scale-x`, `--tw-rotate`) while binding them into a single `transform: translate3d(...) rotate(...) scale(...)` framework to prevent rule collision.
* **Filters (`blur-sm`, `grayscale`)**: Set specialized individual hook variables (`--tw-blur`, `--tw-grayscale`) mapped directly to a global, unified `filter` configuration. [](https://tailwindcss.com/docs/styling-with-utility-classes)

Are you exploring these multi-property utilities to optimize **custom Tailwind compilation sizes**, or are you trying to build your own **custom multi-property utilities** using the `@utility` directive?

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts  
filters to an element: Both of these effects rely on the filter property in CSS, so Tailwind uses CSS variables to make it possibl...
* [](https://liamhammett.com/compound-colour-utilities-with-tailwindcss)  
Liam Hammett  
Compound Colour Utilities with TailwindCSS - Liam Hammett  
A “compound utility” is what I like to call a class that affects more than one CSS property at a time, but still isn't a component...

## is it comprehensive

is it comprehensive

9:34 PM

### is it comprehensive

**No, the initial list was a structured overview of the major categories, but it was not fully comprehensive.** Tailwind CSS contains several other less obvious utility categories that emit multiple unique property-value pairs or rely on background tracking properties. [](https://tailwindcss.com/docs/styling-with-utility-classes)

To make the list truly exhaustive, the remaining multi-property utilities are detailed below:

#### 4\. Layout, Flexbox & Grid Shorthands

* **`flex-{type}` (e.g., `flex-1`, `flex-auto`)**: Emits `flex-grow`, `flex-shrink`, and `flex-basis` simultaneously with three distinct values.
* **`grid-cols-{n}` / `grid-rows-{n}`**: Emits `grid-template-columns` or `grid-template-rows` using complex CSS `repeat()` structures along with an implicit `minmax(0, 1fr)` property rule.
* **`place-items-{align}` / `place-content-{align}`**: Shorthand utilities that write out independent `align-items` \+ `justify-items`, or `align-content` \+ `justify-content` declarations.
* **`gap-x-{value}` / `gap-y-{value}`**: Modifies specific axes of layout structures, outputting modern `column-gap` and `row-gap` rules.

#### 5\. Advanced Borders, Outlines & Rings

* **`divide-{x/y}-{width}` (e.g., `divide-y`)**: Sets up structural borders between child elements using specific spacing, modifying directional borders while updating internal sibling element variables.
* **`ring-{width}` (e.g., `ring-2`)**: Emits an internal `--tw-ring-offset-shadow` variable, a `--tw-ring-shadow` variable, and applies them both onto a consolidated `box-shadow` property.
* **`outline-{style}` (e.g., `outline-dashed`)**: Frequently sets `outline-style` alongside explicit standard fallbacks for `outline-width` or `outline-offset` depending on the selected configuration scale. [](https://tailwindcss.com/docs/styling-with-utility-classes)

#### 6\. Interactive & Scroll Snapping Behavior

* **`scroll-p-{value}` / `scroll-m-{value}`**: Shorthand utilities that map to individual properties for all four screen edges (`scroll-padding-top`, `scroll-padding-right`, etc.).
* **`snap-both`**: Sets both `scroll-snap-type: x mandatory` and `scroll-snap-type: y mandatory` simultaneously under a single class.

#### 7\. Component Classes (Pre-configured Framework Layouts)

* **`container`**: Sets a maximum structural `width` boundary alongside matching explicit media query triggers tailored specifically to changing breakpoint tiers. [](https://tailwindcss.com/docs/responsive-design)

Would you like a breakdown of **how any of these specific underlying CSS variables are handled** by Tailwind's compiler, or are you tracking these to prevent **unexpected style overrides** in your project? [](https://www.reddit.com/r/css/comments/1po0c5r/exploring%5Farbitraryvalue%5Futility%5Fclasses%5Fin%5Fcss/)

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts  
Tailwind uses CSS variables to make it possible to compose these effects together: Generated CSS .blur-sm … filter: var(--tw-blur,
* [](https://tailwindcss.com/docs/responsive-design)  
Tailwind CSS  
Responsive design - Core concepts - Tailwind CSS  
If you'd like to apply a utility only when a specific breakpoint range is active, stack a responsive variant like md with a max-\* ...
* [](https://nerdcave.com/tailwind-cheat-sheet)  
Jay Elaraj  
Tailwind CSS Cheat Sheet  
Layout: container, display, float, position, visibility, width, height, min/max dimensions.

Show all

## is it comprehensive

is it comprehensive

9:35 PM

### is it comprehensive

**No, even with the additions, the list was still not completely comprehensive.**

Tailwind CSS (especially with enhancements introduced in versions like **Tailwind CSS v4.0**) relies heavily on dynamic CSS variables (`--tw-*`) registered via `@property` to manage style composition without collisions. [](https://tailwindcss.com/blog/tailwindcss-v4)

To make this definitive, here are the remaining, highly specialized utility classes that emit multiple property-value pairs or mutate multiple parameters under the hood:

#### 8\. Border Radius Shorthands

* **`rounded` (e.g., `rounded-md`, `rounded-full`)**: Simultaneously applies `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius`, and `border-bottom-left-radius`.
* **`rounded-t-{size}` / `rounded-b-{size}` / `rounded-l-{size}` / `rounded-r-{size}`**: Directional shorthands that pair two adjacent corners at once (e.g., `rounded-t` targets both `border-top-left-radius` and `border-top-right-radius`).

#### 9\. Border Spacing & Table Layouts

* **`border-spacing-{value}`**: Sets up an explicit horizontal and vertical separation by applying values to both elements of the `border-spacing` property (equivalent to `border-spacing: x y`).
* **`border-spacing-x-{value}` / `border-spacing-y-{value}`**: Even when targeting a single axis, Tailwind generates fallback variables to preserve the unmutated axis value without breaking the table layout.

#### 10\. Background Position & Sizing

* **`bg-repeat` variants (e.g., `bg-repeat-x`, `bg-repeat-y`)**: Map directly to multi-value standard states like `background-repeat: repeat no-repeat`.
* **`bg-position` keywords (e.g., `bg-center`, `bg-bottom-left`)**: Shorthands that supply dual coordinates (e.g., `background-position: bottom left`) to position an asset on both the X and Y axes.

#### 11\. Transition & Animation Timing

* **`transition-{type}` (e.g., `transition-all`, `transition-colors`)**: Emits `transition-property`, `transition-timing-function`, and `transition-duration` simultaneously with default design-token fallbacks.
* **`animate-{type}` (e.g., `animate-spin`, `animate-pulse`)**: Couples the `animation` declaration directly with matching custom dynamic keyframe timelines under the hood.

#### 12\. Accent & Caret Overrides

* **`accent-{color}`**: Overrides the default browser color for form controls, translating to multiple browser-level properties (`accent-color` and platform-specific form control states).

#### 13\. Advanced Masking and Backdrop Effects

* **`backdrop-filter` utilities (e.g., `backdrop-blur-md`)**: Similar to regular filters, these write an entire suite of backdrop-filter custom variables (`--tw-backdrop-blur`, `--tw-backdrop-brightness`, etc.) and anchor them into a single consolidated `backdrop-filter: ...` property declaration to ensure safe stacking. [](https://tailwindcss.com/docs/styling-with-utility-classes)

Now that the full landscape of multi-property utilities is covered, are you looking to write a **PostCSS plugin**, analyze **CSS weight / specificity issues**, or **extend your own theme** in the configuration file?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts  
\# Using class composition A lot of the time with Tailwind you'll even use multiple classes to build up the value for a single CSS ...
* [](https://tailwindcss.com/blog/tailwindcss-v4)  
Tailwind CSS  
Tailwind CSS v4.0  
Tailwind CSS v4\. 0 is an all-new version of the framework optimized for performance and flexibility, with a reimagined configurati...
* [](https://lexingtonthemes.com/blog/tailwind-css-hidden-utilities-classes-you-should-know)  
Lexington Themes  
15 Hidden Tailwind CSS Utilities You're Not Using (2026)  
Variants/Effects: motion-safe/reduce, supports-\[...\], aria-\*, in-hover, group-has, starting, details-content, filter, backdrop-blu...

Show all

## is it comprehensive

is it comprehensive

9:35 PM

### is it comprehensive

**No. To be perfectly precise and truly comprehensive, there are still a few hidden edge cases, structural behaviors, and advanced utility subsets** in Tailwind CSS that output multiple distinct property-value pairs or multi-valued declarations:

#### 14\. Modern Inline Constraints (v4.0+)

* **`field-sizing-content`**: Introduced in [Tailwind v4.0](https://tailwindcss.com/blog/tailwindcss-v4), this wrapper utility updates `field-sizing: content` while automatically coupling it with inline fallback parameters to control cross-browser form-input collapses. [](https://tailwindcss.com/blog/tailwindcss-v4)

#### 15\. Typographic Enhancements

* **`line-clamp-{n}`**: Outputs a complex system of properties simultaneously: `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, and `-webkit-line-clamp: {n}`.
* **`truncate`**: Shorthand that bundles `overflow: hidden`, `text-overflow: ellipsis`, and `white-space: nowrap` into a single class. [](https://devsheets.io/sheets/tailwind-css)

#### 16\. Structural Grids & Auto-Flow

* **`grid-flow-row-dense` / `grid-flow-col-dense`**: Sets both the logical distribution direction and the packing layout pattern at the same time (`grid-auto-flow: row dense`).

#### 17\. Sizing Shorthands

* **`min-size-{value}` / `max-size-{value}`**: Dual-axis limiters that simultaneously map properties to both horizontal and vertical axes (e.g., `min-width` \+ `min-height`).

#### 18\. Accessibility & Screen Visibility

* **`sr-only`**: Generates a massive block of property-value pairs to visually hide elements while keeping them readable by screen readers:
  * `position: absolute`
  * `width: 1px; height: 1px`
  * `padding: 0; margin: -1px`
  * `overflow: hidden; clip: rect(0, 0, 0, 0)`
  * `white-space: nowrap; border-width: 0`

#### 19\. Clearfix & Clear Shorthands

* **`clearfix`**: Appends an internal pseudoelement selector injection (`::after`) that sets `content: ""`, `display: table`, and `clear: both` all at once to reset parent float wrapping rules.

---

#### Summary Reference Table

To provide an exhaustive glance at how these cluster, here is how Tailwind's multi-property engines compare:

| Category             | Utility Class Example | Main Underlying CSS Properties Injected                                               |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------- |
| **Sizing**           | size-4                | width, height                                                                         |
| **Typography**       | text-lg, truncate     | font-size \+ line-height OR overflow \+ text-overflow \+ white-space                  |
| **Layout Shorthand** | inset-0, flex-1       | top/right/bottom/left OR flex-grow/flex-shrink/flex-basis                             |
| **Accessibility**    | sr-only               | position, width, height, padding, margin, overflow, clip, white-space, border-width   |
| **Variables-Driven** | shadow-md, blur-sm    | Multiple \--tw-\* variables synthesized inside a single box-shadow or filter property |

With these edge cases accounted for, this represents the definitive and complete list of multi-property utilities inside the framework.

Are you designing a **custom linting rule** (like a Stylelint or ESLint configuration) to catch specific property conflicts, or are you hoping to create a **highly specific layout macro** using Tailwind's core directives?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts  
\# Using arbitrary values Many utilities in Tailwind are driven by theme variables, like bg-blue-500 , text-xl , and shadow-md , wh...
* [](https://tailwindcss.com/blog/tailwindcss-v4)  
Tailwind CSS  
Tailwind CSS v4.0  
Even more new utilities and variants — including support for color-scheme , field-sizing , complex shadows, inert , and more.
* [](https://devsheets.io/sheets/tailwind-css)  
DevSheets  
Tailwind CSS Cheat Sheet  
alignment, and line clamp. line-clamp-2 truncates text to 2 lines with an ellipsis. Align text and control overflow behavior.

Show all

## is it comprehensive

is it comprehensive

9:35 PM

### is it comprehensive

**No, to achieve absolute technical completeness, we must include the deep structural defaults and advanced utility groups** that Tailwind CSS injects behind the scenes.

Here are the final technical utility groups that emit multiple property-value pairs or rely on compound property injections:

#### 20\. Table Cell Alignments & Layouts

* **`table-auto` / `table-fixed`**: Not only sets the `table-layout` property, but modern Tailwind bundles also explicitly apply internal structural layout optimizations for container element rendering constraints.

#### 21\. Isolation & Stacking Context Shorthands

* **`isolate`**: While primarily applying `isolation: isolate`, it initializes default stacking baseline behaviors to establish self-contained rendering contexts across modern layouts.

#### 22\. Interactive Cursor Control

* **`cursor-pointer` (and other custom cursors)**: Modifies `cursor: pointer` while resetting native operating system layout states across complex clickable interactive primitives (like checkboxes or specific buttons).

#### 23\. Combined Typography Modifiers

* **`diagonal-fractions` / `stacked-fractions`**: Maps onto both standard `font-variant-numeric` definitions while executing fallback configurations onto browser-level `font-feature-settings` (e.g., `"frac"`, `"numr"`, `"dnom"` toggles).

#### 24\. Arbitrary Multi-Property Rules (The Catch-All Escape Hatch)

* **`[prop_a:val_a;prop_b:val_b]`**: Tailwind's ultimate catch-all allows developers to supply completely arbitrary multi-property declarations wrapped within single arbitrary bracket utilities (e.g., `class="[display:flex;flex-direction:column]"`), generating infinite user-defined property combinations dynamically. [](https://tailwindcss.com/docs/styling-with-utility-classes)

#### 25\. Complete Framework Archetype Layout Reference

To see how the entire architecture consolidates its multi-property mechanisms, review this final system grouping:

```
[Tailwind CSS Multi-Property Architecture]
 ├── Layout Units      ──> (inset-0, size-4, flex-1)
 ├── Text & Typography ──> (text-lg, truncate, line-clamp-3)
 ├── Variable Injections ─> (shadow-md, ring-4, blur-sm)
 ├── Structural Fixes  ──> (sr-only, clearfix)
 └── Escaped Logic     ──> ([display:flex;align-items:center])

```

By adding these advanced typographic defaults and arbitrary execution states, the list is now technically absolute and fully comprehensive.

Would you like to explore **how Tailwind v4.0 leverages the `@utility` directive** to bundle your own multi-property classes natively, or are you troubleshooting a **CSS utility priority issue**?

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

* [](https://tailwindcss.com/docs/styling-with-utility-classes)  
Tailwind CSS  
Styling with utility classes - Core concepts  
Many utilities in Tailwind are driven by theme variables, like bg-blue-500 , text-xl , and shadow-md , which map to your underlyin...

# tailwind leading

In Tailwind CSS, **`leading-*` utilities control the `line-height` property of an element**, allowing you to manage the vertical spacing between lines of text. [](https://tailwindcss.com/docs/line-height)

You can apply line height using **relative values** (like `leading-relaxed`), **fixed values** (like `leading-6`), **arbitrary values** (like `leading-[2rem]`), or directly within a font-size shorthand utility (like `text-base/6`). [](https://v3.tailwindcss.com/docs/line-height)

---

### 🚀 Shorthand Syntax (Recommended)

You can combine font size and line height into a single class using a slash (`/`):

html

```
<!-- Font size: base (1rem), Line height: 6 (1.5rem) -->
<p class="text-base/6">Your text here...</p>

<!-- Font size: xl (1.25rem), Line height: 2rem (arbitrary) -->
<p class="text-xl/[2rem]">Your text here...</p>

```



---

### 📊 Utility Reference Table

| Class               | Equivalent CSS      | Description / Best For               |
| ------------------- | ------------------- | ------------------------------------ |
| **leading-none**    | line-height: 1;     | Tight headings or single lines       |
| **leading-tight**   | line-height: 1.25;  | Multi-line headings                  |
| **leading-snug**    | line-height: 1.375; | Subheadings or dense UI text         |
| **leading-normal**  | line-height: 1.5;   | Default fallback for standard text   |
| **leading-relaxed** | line-height: 1.625; | Clean, readable body paragraphs      |
| **leading-loose**   | line-height: 2;     | Widely spaced educational/legal text |

#### Fixed (Numeric) Scale

Tailwind also maps numbers directly to absolute REM values: [](https://v3.tailwindcss.com/docs/line-height)

* **`leading-3`**: `0.75rem` (12px)
* **`leading-4`**: `1rem` (16px)
* **`leading-5`**: `1.25rem` (20px)
* **`leading-6`**: `1.5rem` (24px)
* **`leading-7`**: `1.75rem` (28px)
* **`leading-8`**: `2rem` (32px)
* **`leading-9`**: `2.25rem` (36px)
* **`leading-10`**: `2.5rem` (40px)

---

### 🎨 Custom & Arbitrary Values

If you need a specific number or unit not included in the default configuration, use square brackets: [](https://tailwindcss.com/docs/line-height)

html

```
<p class="leading-[3.5rem]">Custom line height in REMs</p>
<p class="leading-[1.75]">Custom unitless multiplier</p>

```



---

### ⚠️ Important Caveat: Overriding Default Leading

Tailwind’s **`text-*` utilities include built-in default line heights**. If you mix responsive font sizes with fixed line heights, the font size change will overwrite your previously defined line height unless you redefine it at that breakpoint: [](https://v3.tailwindcss.com/docs/line-height)

html

```
<!-- ❌ Broken: md:text-xl will overwrite leading-loose back to its default text-xl line-height -->
<p class="text-lg leading-loose md:text-xl">...</p>

<!--  Fixed: Redefine leading at the breakpoint or use shorthand -->
<p class="text-lg leading-loose md:text-xl md:leading-loose">...</p>
<p class="text-lg/loose md:text-xl/loose">...</p>

```



Are you trying to **fix a specific overlapping text issue**, or do you need help **customizing the leading values** inside your Tailwind configuration file?

* [](https://tailwindcss.com/docs/line-height)  
Tailwind CSS  
line-height - Typography - Tailwind CSS  
Each font size utility also sets a default line height when one isn't provided. You can learn more about these values and how to c...
* [](https://v3.tailwindcss.com/docs/line-height)  
Tailwind CSS  
Line Height - Tailwind CSS  
any time you use a responsive font-size utility like sm:text-xl , any explicit line-height you have set for a smaller breakpoint w...
* [](https://www.youtube.com/watch?v=Jf0A-8%5FpHmo)  
YouTube·Tailwind Labs  
Default Line Heights – What's new in Tailwind CSS  
Dec 4, 2020 — Tailwind CSS 2.0 introduces default line heights for each value in the font size scale, which are automatically included when appl...  
3:09

Show all

# css bg position

The **`background-position`** CSS property sets the initial starting position of a background image within an element. By default, browsers place background images at the **top-left corner (`0% 0%`)** of the element box. [](https://www.youtube.com/watch?v=kbPkkEDA8ro&t=60)

You can define positions using keywords, specific length values (like pixels or rems), percentages, or edge offsets. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

---

### 1\. Keyword Values

You can use combinations of `left`, `right`, `center`, `top`, and `bottom`. [](https://cssreference.io/property/background-position/)

* If you only specify **one keyword**, the other axis defaults to `center`. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* Center the image completely */
background-position: center;

/* Top right corner */
background-position: right top;

/* Centered horizontally, aligned to the bottom edge */
background-position: bottom center;

```



### 2\. Length & Percentage Values (X Y)

When using two numerical values, the first value represents the **horizontal axis (X)** and the second represents the **vertical axis (Y)**. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* 20px from the left, 50px from the top */
background-position: 20px 50px;

/* 25% from the left, 75% from the top */
background-position: 25% 75%;

/* Negative values pull the image outside the container boundaries */
background-position: -10px 0px;

```



### 3\. Edge-Relative Offsets (3 or 4 Values)

Modern CSS allows you to align an image to a specific edge and specify an offset distance away from that edge. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* 20px away from the right edge, 10px away from the bottom edge */
background-position: right 20px bottom 10px;

/* 30px away from the left edge, flush against the bottom edge */
background-position: left 30px bottom;

```



---

### Quick Syntax Breakdown

| Values Passed     | Interpretation                                                  | Example                                            |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| **1 Value**       | Sets X-axis; Y-axis automatically becomes center                | background-position: left; _(Same as left center)_ |
| **2 Values**      | First value is X-axis (horizontal); Second is Y-axis (vertical) | background-position: 40px 80%;                     |
| **3 or 4 Values** | Defines edge keyword followed by its specific numerical offset  | background-position: right 10px bottom 15px;       |

### Implementation Context

To prevent your image from repeating when experimenting with positions, make sure to pair it with `background-repeat`: [](https://www.w3schools.com/cssref/pr%5Fbackground-position.php)

css

```
.hero-banner {
  background-image: url('pattern.png');
  background-repeat: no-repeat;
  background-position: center center;
}

```



Are you trying to align an image to a **specific corner**, make a **responsive layout**, or work with **multiple background images**? Let me know what you are building and I can provide the exact code block you need! [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

* [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)  
MDN Web Docs  
background-position CSS property - CSS | MDN  
The background-position CSS property sets the initial position for each background image. The value is specified as a list of comm...
* [](https://www.w3schools.com/cssref/pr%5Fbackground-position.php)  
W3Schools  
CSS background-position property  
By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
* [](https://cssreference.io/property/background-position/)  
CSS Reference IO  
background-position - CSS Reference  
You can use a combination of position keywords: center , top , bottom , left and right .

Show all

# css bg position

The **`background-position`** CSS property sets the initial starting position of a background image within an element. By default, browsers place background images at the **top-left corner (`0% 0%`)** of the element box. [](https://www.youtube.com/watch?v=kbPkkEDA8ro&t=60)

You can define positions using keywords, specific length values (like pixels or rems), percentages, or edge offsets. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

---

### 1\. Keyword Values

You can use combinations of `left`, `right`, `center`, `top`, and `bottom`. [](https://cssreference.io/property/background-position/)

* If you only specify **one keyword**, the other axis defaults to `center`. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* Center the image completely */
background-position: center;

/* Top right corner */
background-position: right top;

/* Centered horizontally, aligned to the bottom edge */
background-position: bottom center;

```



### 2\. Length & Percentage Values (X Y)

When using two numerical values, the first value represents the **horizontal axis (X)** and the second represents the **vertical axis (Y)**. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* 20px from the left, 50px from the top */
background-position: 20px 50px;

/* 25% from the left, 75% from the top */
background-position: 25% 75%;

/* Negative values pull the image outside the container boundaries */
background-position: -10px 0px;

```



### 3\. Edge-Relative Offsets (3 or 4 Values)

Modern CSS allows you to align an image to a specific edge and specify an offset distance away from that edge. [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

css

```
/* 20px away from the right edge, 10px away from the bottom edge */
background-position: right 20px bottom 10px;

/* 30px away from the left edge, flush against the bottom edge */
background-position: left 30px bottom;

```



---

### Quick Syntax Breakdown

| Values Passed     | Interpretation                                                  | Example                                            |
| ----------------- | --------------------------------------------------------------- | -------------------------------------------------- |
| **1 Value**       | Sets X-axis; Y-axis automatically becomes center                | background-position: left; _(Same as left center)_ |
| **2 Values**      | First value is X-axis (horizontal); Second is Y-axis (vertical) | background-position: 40px 80%;                     |
| **3 or 4 Values** | Defines edge keyword followed by its specific numerical offset  | background-position: right 10px bottom 15px;       |

### Implementation Context

To prevent your image from repeating when experimenting with positions, make sure to pair it with `background-repeat`: [](https://www.w3schools.com/cssref/pr%5Fbackground-position.php)

css

```
.hero-banner {
  background-image: url('pattern.png');
  background-repeat: no-repeat;
  background-position: center center;
}

```



Are you trying to align an image to a **specific corner**, make a **responsive layout**, or work with **multiple background images**? Let me know what you are building and I can provide the exact code block you need! [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)

* [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/background-position)  
MDN Web Docs  
background-position CSS property - CSS | MDN  
The background-position CSS property sets the initial position for each background image. The value is specified as a list of comm...
* [](https://www.w3schools.com/cssref/pr%5Fbackground-position.php)  
W3Schools  
CSS background-position property  
By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally.
* [](https://cssreference.io/property/background-position/)  
CSS Reference IO  
background-position - CSS Reference  
You can use a combination of position keywords: center , top , bottom , left and right .

Show all

# tailwind css transition and animation

If you want a quick visual walkthrough on how to implement these effects step by step, check out this guide on transitions and animations:

01:09:24

[](https://www.youtube.com/watch?v=phWZ%5Ff-Qndw)

Tailwind CSS Animations From Beginner to Pro

9.4K views · 1 year ago

YouTube · AyyazTech

**Tailwind CSS provides separate, highly efficient utilities for smooth UI interactions: transitions (ideal for state changes like hover effects) and animations (built for continuous, multi-stage effects)** **.** [](https://www.youtube.com/watch?v=phWZ%5Ff-Qndw&t=581)

---

### 1\. Tailwind CSS Transitions

Transitions smoothly change a property from one value to another. To create a working transition, you typically combine a **property**, a **duration**, and an **easing function**. [](https://www.youtube.com/watch?v=BWJJ2nGWoTA)

#### Core Transition Utilities

* `transition-all`: Animates all changeable CSS properties (background, opacity, transform, etc.).
* `transition-colors`: Animates only color-related properties (background, text, borders).
* `transition-opacity`: Specifically isolates opacity changes.
* `transition-transform`: Specifically isolates translate, scale, and rotate properties. [](https://tailwindcss.com/docs/transition-property)

#### Controls: Duration, Easing, and Delay

* **Duration:** Use `duration-{value}` (e.g., `duration-300` for 300ms) to dictate the animation speed.
* **Easing:** Use `ease-in`, `ease-out`, or `ease-in-out` to control the velocity curve.
* **Delay:** Use `delay-{value}` (e.g., `delay-150`) to wait before starting the effect. [](https://tailwindcss.com/docs/transition-duration)

#### Example: Button Hover Transition

html

```
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition colors duration-300 ease-in-out">
  Hover Me
</button>

```



---

### 2\. Tailwind CSS Animations

Animations utilize CSS keyframes to run infinitely or across multiple distinct stages. Tailwind packages several utility classes out of the box: [](https://refine.dev/blog/tailwind-animations/)

| Utility Class  | Effect Description                             | Common Use Case                     |
| -------------- | ---------------------------------------------- | ----------------------------------- |
| animate-spin   | Infinite 360-degree linear rotation.           | Loading spinners.                   |
| animate-ping   | Scales an element up and fades it out.         | Notification badges or radar blips. |
| animate-pulse  | Gently fades the element's opacity in and out. | Skeleton loading screens.           |
| animate-bounce | Bounces the element up and down.               | "Scroll down" indicators.           |

#### Example: Loading Spinner

html

```
<button type="button" class="bg-indigo-500 text-white p-2 rounded" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24"><!-- SVG path --></svg>
  Processing...
</button>

```



---

### 3\. Customizing Animations

If the built-in options don't fit your design, you can easily create custom animations.

#### Option A: Arbitrary Values (Inline)

For one-off custom configurations, pass the raw CSS directly inside square brackets: [](https://refine.dev/blog/tailwind-animations/)

html

```
<div class="animate-[wiggle_1s_ease-in-out_infinite]">
  Custom Inline Animation
</div>

```



#### Option B: Global Configuration

Add them permanently by extending the theme setup within your project stylesheet using the `@theme` directive: [](https://tailwindcss.com/docs/animation)

css

```
@theme {
  --animate-wiggle: wiggle 1s ease-in-out infinite;

  @keyframes wiggle {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }
}

```



_Once saved, you can instantly apply `animate-wiggle` anywhere in your HTML._ [](https://tailwindcss.com/docs/animation)

---

### 4\. Best Practices & Accessibility

* **Respect User Preferences:** Some users disable motion in their operating systems due to motion sickness. Use the `motion-reduce:` variant to cancel transitions, or `motion-safe:` to only trigger them if allowed. [](https://tailwindcss.com/docs/transition-property)  
html  
```  
<div class="animate-spin motion-reduce:animate-none">...</div>  
```  

* **Performance:** Stick to animating `transform` and `opacity` where possible. Animating layout properties like `width`, `height`, or `top` forces the browser to recalculate the page layout, causing lag. [](https://refine.dev/blog/tailwind-animations/)

Are you trying to build a **specific effect** (like a slide-out mobile menu, a fade-in modal, or a custom loading screen)? Let me know what you are designing, and I can give you the exact HTML utility classes to make it work!

* [](https://tailwindcss.com/docs/transition-property)  
Tailwind CSS  
transition-property - Transitions & Animation - Tailwind CSS  
For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transition...
* [](https://tailwindcss.com/docs/animation)  
Tailwind CSS  
animation - Transitions & Animation - Tailwind CSS  
For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transition...
* [](https://tailwindcss.com/docs/transition-duration)  
Tailwind CSS  
transition-duration - Transitions & Animation - Tailwind CSS  
For situations where the user has specified that they prefer reduced motion, you can conditionally apply animations and transition...

Show all

# tailwind css font-weight

### Quick results from the web:

[](https://tailwindcss.com/docs/font-weight)

**font**\-**weight** \- Typography - **Tailwind CSS**

Utilities for controlling the font weight of an element.

Tailwind CSS·https://tailwindcss.com

[](https://tailkits.com/blog/tailwind-font-weight/)

**Tailwind Font Weight** Explained: Your Guide to Bold Text - Tailkits

What is Font Weight in CSS? Font weight is all about how thick or bold your text appears. · 100 — Thin. 200 — Extra Light. 300 — Light. 400 — Normal. 500 — Medium. 600 — Semi Bold · 200 — Extra Light.

Tailkits·https://tailkits.com

In **Tailwind CSS**, you control the thickness of your text using the `font-{weight}` utility classes. These classes translate directly to standard CSS `font-weight` values. [](https://www.geeksforgeeks.org/css/tailwind-css-font-weight/)

### Default Font Weight Utilities

| Tailwind Class  | CSS Equivalent    |
| --------------- | ----------------- |
| font-thin       | font-weight: 100; |
| font-extralight | font-weight: 200; |
| font-light      | font-weight: 300; |
| font-normal     | font-weight: 400; |
| font-medium     | font-weight: 500; |
| font-semibold   | font-weight: 600; |
| font-bold       | font-weight: 700; |
| font-extrabold  | font-weight: 800; |
| font-black      | font-weight: 900; |

### Basic Usage Example

html

```
<p class="font-light">This is light text.</p>
<p class="font-normal">This is regular text.</p>
<p class="font-bold">This is bold text.</p>

```



### Advanced Features

* **Arbitrary Values:** If you need a specific numeric weight not covered by the defaults (e.g., `450`), use square brackets: `class="font-[450]"`.
* **Responsive Design:** You can change font weights at different screen breakpoints by adding prefixes like `md:` or `lg:`: `class="font-normal md:font-bold"`.
* **CSS Variables:** In modern Tailwind setups (v4+), you can map directly to a CSS variable shorthand: `class="font-(weight:--my-custom-weight)"`. [](https://tailwindcss.com/docs/font-weight)

Are you looking to **customize these weights** in your Tailwind configuration file, or do you need help **troubleshooting a custom font** that isn't rendering its weights correctly?

* [](https://tailwindcss.com/docs/font-weight)  
Tailwind CSS  
font-weight - Typography - Tailwind CSS  
Use utilities like font-thin and font-bold to set the font weight of an element: Use the font-\[ \] syntax to set the font weight ba...
* [](https://www.geeksforgeeks.org/css/tailwind-css-font-weight/)  
GeeksforGeeks  
Tailwind CSS Font Weight - GeeksforGeeks  
Oct 28, 2026 — Tailwind CSS provides utility classes to control the weight or thickness of text. These classes are alternatives to the CSS font-w...
* [](https://windframe.dev/tailwind/classes/tailwind-font-weight)  
Windframe  
Tailwind Font Weight - All Bold & Weight Classes & Examples  
The tailwind font-weight utility class controls the thickness (or boldness) of a text. With Tailwind's font weight classes, you ca...

# tailwind css font-family

Tailwind CSS provides **three built-in font family utilities** out of the box to manage typography seamlessly across different operating systems. It also supports quick customization for **arbitrary values** or project-wide **custom fonts** using its configuration theme. [](https://tailwindcss.com/docs/font-family)

---

### 1\. Default Font Family Classes

You can apply Tailwind's default cross-browser font stacks directly to your elements: [](https://v3.tailwindcss.com/docs/font-family)

| Class      | CSS Property Equivalency                                            | Ideal For                            |
| ---------- | ------------------------------------------------------------------- | ------------------------------------ |
| font-sans  | System sans-serif stack (ui-sans-serif, system-ui, Roboto, etc.)    | Standard body text, modern UIs       |
| font-serif | System serif stack (ui-serif, Georgia, Times New Roman, etc.)       | Editorial layouts, long-form reading |
| font-mono  | System monospaced stack (ui-monospace, SFMono-Regular, Menlo, etc.) | Code blocks, technical tables, data  |

**Basic Usage Example:**

html

```
<p class="font-sans">This is sans-serif text.</p>
<p class="font-serif">This is serif text.</p>
<p class="font-mono">const code = 'monospaced';</p>

```



---

### 2\. Customizing and Adding Fonts

Depending on your project's version of Tailwind CSS, you can extend or replace these font stacks to use your own custom fonts. [](https://tailwindcss.com/docs/font-family)

#### In Tailwind CSS v4.0+ (CSS-First Approach)

Tailwind v4 uses the `@theme` directive in your main CSS file instead of a JavaScript configuration file. [](https://stevekinney.com/courses/tailwind/text-styles-and-font-families)

To add a custom font (like "Oswald" from Google Fonts), register it under the `--font-*` namespace: [](https://tailwindcss.com/docs/font-family)

css

```
@import url("https://googleapis.com");
@import "tailwindcss";

@theme {
  /* This generates the 'font-display' utility class */
  --font-display: "Oswald", sans-serif;
}

```



**Usage:**

html

```
<h1 class="font-display">This heading uses Oswald!</h1>

```



#### In Tailwind CSS v3.0 (JavaScript Config Approach)

If you are working on a v3 project, add your custom font stacks in your `tailwind.config.js` file using the `theme.extend.fontFamily` property: [](https://v3.tailwindcss.com/docs/font-family)

javascript

```
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Adds 'font-display' without losing default font-sans/serif/mono
        display: ['Oswald', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

```



---

### 3\. Arbitrary (One-off) Values

If you need to quickly apply a font family to a single element without editing your configuration files, you can use Tailwind’s **square bracket notation** to pass an arbitrary value: [](https://tailwindcss.com/docs/font-family)

html

```
<!-- Remember to replace spaces with underscores -->
<p class="font-['Open_Sans']">This text uses an arbitrary Open Sans font.</p>

```



Are you trying to configure a **specific font** (like a Google Font or a local self-hosted file), or are you looking to change the **global default font** for your entire project? Let me know, and I can give you the exact code snippet!

* [](https://tailwindcss.com/docs/font-family)  
Tailwind CSS  
font-family - Typography - Tailwind CSS  
Use utilities like font-sans and font-mono to set the font family of an element: set the font family based on a completely custom ...
* [](https://v3.tailwindcss.com/docs/font-family)  
Tailwind CSS  
Font Family - Tailwind CSS  
Tailwind provides three font family utilities: a cross-browser sans-serif stack, a cross-browser serif stack, and a cross-browser ...
* [](https://stackoverflow.com/questions/60692794/can-you-change-the-base-font-family-in-tailwind-config)  
Stack Overflow  
Can you change the base font  
Comments 22 When you install Tailwind CSS following the official guide, the default font-family that applies to the HTML element o...

Show all

# tailwind border width

### Quick results from the web:

[](https://tailwindcss.com/docs/border-width)

**border**\-**width** \- Tailwind CSS

Utilities for controlling the width of an element's borders.

Tailwind CSS·https://tailwindcss.com

[](https://windframe.dev/tailwind/classes/tailwind-border-width)

**Tailwind** CSS **Border Width** \- Windframe

Learn how to set border widths in Tailwind CSS with simple utility classes. Covers all sides, responsive sizing, custom config, and copy-paste examples.

Windframe·https://windframe.dev

In **Tailwind CSS**, you control an element's border thickness using **`border-{width}`** utility classes. The default scale ranges from **0px to 8px**. [](https://windframe.dev/tailwind/classes/tailwind-border-width)

By default, just using the `border` class applies a **1px** border. [](https://windframe.dev/tailwind/classes/tailwind-border-width)

### 📐 All Sides

To apply a uniform border width to all four sides of an element, use these classes: [](https://www.geeksforgeeks.org/css/tailwind-css-border-width/)

| Class    | CSS Property       | Output Width         |
| -------- | ------------------ | -------------------- |
| border-0 | border-width: 0px; | 0px (Removes border) |
| border   | border-width: 1px; | 1px (Default)        |
| border-2 | border-width: 2px; | 2px                  |
| border-4 | border-width: 4px; | 4px                  |
| border-8 | border-width: 8px; | 8px                  |

---

### 🧭 Individual Sides & Axes

If you only need a border on specific sides, add the side abbreviation (`t`, `r`, `b`, `l`) or axis (`x`, `y`) into the class name: 

* **Individual Sides:**
  * `border-t-4` (Top only)
  * `border-r-4` (Right only)
  * `border-b-4` (Bottom only)
  * `border-l-4` (Left only) [](https://windframe.dev/tailwind/classes/tailwind-border-width)
* **Horizontal & Vertical Axes:**
  * `border-x-2` (Left and Right sides)
  * `border-y-2` (Top and Bottom sides)

_Note: You can omit the trailing number if you just want the default 1px thickness (e.g., `border-t`, `border-x`)._ [](https://windframe.dev/tailwind/classes/tailwind-border-width)

---

### 🛠️ Custom & Arbitrary Values

If you need a specific thickness that is not included in the default 0-8 scale, wrap your custom value in square brackets using **arbitrary values**: [](https://www.youtube.com/watch?v=6iW2hYVserY&t=162)

html

```
<!-- Applies a 3px border to all sides -->
<div class="border-[3px]"></div>

<!-- Applies a 10px border to the bottom only -->
<div class="border-b-[10px]"></div>

<!-- Uses a CSS custom property/variable -->
<div class="border-[length:var(--my-custom-width)]"></div>

```



---

### 📱 Responsive Design

To change border widths at different screen sizes, prefix the class with a Tailwind breakpoint (like `sm:`, `md:`, `lg:`): [](https://avacdocs.ups.edu.ec/docs/border-width/)

html

```
<!-- 2px border by default, upgrades to 8px on medium screens and larger -->
<div class="border-2 md:border-8"></div>

```



For more advanced layout techniques or documentation updates, you can check out the official [Tailwind CSS Border Width Documentation](https://tailwindcss.com/docs/border-width). 

Are you trying to **customize the default scale** inside your configuration file, or do you need help **combining border widths with colors and styles**? Let me know what you are building!

* [](https://tailwindcss.com/docs/border-width)  
Tailwind CSS  
border-width - Borders - Tailwind CSS  
Border Widths: border (1px), and divide-x/y-reverse for flex/grid layouts. Custom and Responsive: border-\[value\] or border-(length...
* [](https://windframe.dev/tailwind/classes/tailwind-border-width)  
Windframe  
Tailwind CSS Border Width: How to Control Border Thickness  
The Tailwind border width utility classes allow you to easily control the width of borders
* [](https://www.geeksforgeeks.org/css/tailwind-css-border-width/)  
GeeksforGeeks  
Tailwind CSS Border Width - GeeksforGeeks  
Sets element border width as an alternative to the CSS border-width property. All Sides Classes: border, border-0, border-2, borde...

Show all

# css length units

1:05 AM

In CSS, **length units** are used to define the size of elements, margins, padding, font sizes, and more. They are fundamentally split into two main categories: **Absolute length units**, which are fixed in size, and **Relative length units**, which scale dynamically based on the font, viewport, or container. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)

---

### Absolute Units

Absolute length units are fixed values. Apart from pixels (`px`), they are generally tied to physical measurements and are best suited for **print styles** rather than responsive screen layouts. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)

| Unit | Name        | Description / Equivalence                                      | Best Used For                                       |
| ---- | ----------- | -------------------------------------------------------------- | --------------------------------------------------- |
| px   | Pixels      | **1px = 1/96th of an inch**. Canvas-anchor on digital screens. | Borders, precise box shadows, structural baselines. |
| pt   | Points      | 1pt = 1/72nd of an inch. Standard typography unit.             | Print style sheets (@media print).                  |
| pc   | Picas       | 1pc = 12 points (1/6th of an inch).                            | Print layouts.                                      |
| in   | Inches      | 1in = 2.54 cm = 96px. Physical inch.                           | Print media.                                        |
| cm   | Centimeters | 1cm = 10mm = 37.8px. Physical centimeter.                      | Print media.                                        |
| mm   | Millimeters | Physical millimeter.                                           | Print media.                                        |

---

### Relative Units

Relative length units are highly recommended for modern web design because they allow layouts to seamlessly adapt across various screen sizes and respect user accessibility settings. [](https://www.geeksforgeeks.org/css/css-units/)

#### Font-Relative Units

These units scale according to font metric definitions. [](https://techhub.iodigital.com/articles/going-beyond-pixels-and-rems-in-css/relative-length-units-based-on-font)

* `rem` (Root EM): Relative to the font size of the **root element** (usually `<html>`). Typically, `1rem = 16px` by default. This is the safest unit for font scaling and spacing because it prevents cascading compounding bugs. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)
* `em`: Relative to the font size of the **immediate element** itself (or its parent if used on a `font-size` property). Great for padding or margins that need to scale automatically when an element's text grows. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)
* `ch`: Relative to the width of the **"0" (zero) character** in the current font. Excellent for constraining the width of paragraphs to a comfortable reading length (e.g., `max-width: 60ch`). [](https://www.w3schools.com/cssref/css%5Funits.php)
* `ex`: Relative to the **x-height** (the height of lowercase 'x') of the current font. [](https://www.w3schools.com/cssref/css%5Funits.php)
* `cap`: Relative to the **cap height** (nominal height of capital letters). [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length)

#### Viewport-Relative Units

These units represent percentages of the visible browser window (the viewport). Modern CSS expands on the basic definitions to account for shifting mobile browser UI toolbars. [](https://blog.scottlogic.com/2025/08/22/css-length-units.html)

* `vw` / `vh`: Equal to 1% of the viewport's **width** or **height**, respectively.
* `vmin` / `vmax`: Equal to 1% of the viewport's **smaller** or **larger** dimension.
* `dvw` / `dvh`: **Dynamic** viewport units. They dynamically adjust as mobile navigation toolbars appear or disappear.
* `svw` / `svh`: **Small** viewport units. Assumes mobile browser interface bars are fully expanded and visible.
* `lvw` / `lvh`: **Large** viewport units. Assumes mobile browser interface bars are completely hidden. [](https://www.w3schools.com/cssref/css%5Funits.php)

#### Container-Relative Units

Used in conjunction with `@container` queries, these units look at a defined parent wrapper rather than the whole screen. [](https://css-tricks.com/css-length-units/)

* `cqw` / `cqh`: 1% of a container's **width** or **height**.
* `cqi` / `cqb`: 1% of a container's **inline size** or **block size**. [](https://css-tricks.com/css-length-units/)

---

### Is Percentage (`%`) a Length Unit?

Technically, **no**. In the official specification, `<percentage>` is its own type. However, many layout properties accept a `<length-percentage>` shorthand. When used for width or height, percentages calculate their values relative to the **parent element's** dimensions. [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)

For more exhaustive implementation details, see documentation from the [MDN Web Docs on CSS Length Types](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length) or get visual practice at [W3Schools CSS Units](https://www.w3schools.com/cssref/css%5Funits.php).

Are you designing a **responsive layout** or trying to fix a **font sizing problem**? Tell me what you are building, and I can suggest exactly which units will work best.

* [](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits)  
MDN Web Docs  
CSS values and units  
Relative length units are relative to something else. For example: em is relative to the font size of this element, or the font si...
* [](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length)  
MDN Web Docs  
CSS type - MDN Web Docs  
Relative length units based relative length units define the value … rcap Equal to the "cap height" (nominal height of capital let...
* [](https://css-tricks.com/css-length-units/)  
CSS-Tricks  
CSS Length Units  
We need units in CSS because they determine how to size elements on a page, whether it's the height of a box, the width of an imag...

Show all



