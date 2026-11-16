# what exact styles does tailwind typography apply on semantic tags inside prose

## what exact styles does tailwind typography apply on semantic tags inside prose

`@tailwindcss/typography` styles **descendants of `.prose`**; it doesn’t style every semantic tag globally. The default `prose` rules are mostly low-specificity selectors such as `.prose :where(h1)`, so your own classes can override them. Here’s the gist of the default styles:

| Element | Default treatment |
|---|---|
| `.prose` | Body text color via `--tw-prose-body`; `max-width: 65ch` |
| `p` | `margin-block: 1.25em` |
| `h1` | 2.25em, weight 800, line-height 1.11; no top margin, `.889em` bottom margin |
| `h2` | 1.5em, weight 700, line-height 1.33; `2em` top and `1em` bottom margin |
| `h3` | 1.25em, weight 600, line-height 1.6; `1.6em` top and `.6em` bottom margin |
| `h4` | Weight 600, line-height 1.5; `1.5em` top and `.5em` bottom margin |
| `a` | Underlined, weight 500; link color via `--tw-prose-links` |
| `strong`, `b` | Weight 600; bold color via `--tw-prose-bold` |
| `em`, `i` | Italic |
| `ol`, `ul` | Decimal or disc markers; `1.625em` left padding |
| `li` | `.5em` vertical margin; marker color via `--tw-prose-bullets` or `--tw-prose-counters` |
| `blockquote` | Italic, weight 500; left border `.25rem`; `1em` left padding; quote and border colors via prose variables |
| `code` | Monospace, `.875em`, weight 600; inline code gets backtick pseudo-content |
| `pre` | Scrollable, padded code block; `.875em` text, `1.714` line-height; background and text colors via prose variables |
| `hr` | `1px` top border; `3em` vertical margin |
| `img`, `video`, `figure` | Block-style media with vertical spacing; figures have `2em` vertical margin |
| `table` | Full width, fixed layout; cells have padding and bottom borders |
| `th` | Weight 600, left-aligned; top/bottom borders |
| `td` | Bottom border |

Colors come from CSS variables such as `--tw-prose-headings`, `--tw-prose-links`, and `--tw-prose-quote-borders`; `.prose-invert` changes those variables. Size modifiers like `prose-sm` or `prose-lg` change some measurements, and `not-prose` opts a subtree out.

For the **exact generated CSS**, the Tailwind and typography-plugin versions matter. You can inspect the output CSS your build produces, or share your versions and I can give you the matching rules.

## what are the equivalent util classes for each

For the default `prose` size, you can replace its styles by applying utilities directly to the elements. These classes use **em values** where the plugin does, so they scale with the parent text size.

Set the prose container’s base styles first:

```html
<article class="max-w-prose text-base leading-7 text-gray-700">
```

Then use these on the semantic elements:

| Element | Equivalent utilities |
|---|---|
| `p` | `my-[1.25em]` |
| `h1` | `mt-0 mb-[.889em] text-[2.25em] font-extrabold leading-[1.11] text-gray-900` |
| `h2` | `mt-[2em] mb-[1em] text-[1.5em] font-bold leading-[1.33] text-gray-900` |
| `h3` | `mt-[1.6em] mb-[.6em] text-[1.25em] font-semibold leading-[1.6] text-gray-900` |
| `h4` | `mt-[1.5em] mb-[.5em] font-semibold leading-[1.5] text-gray-900` |
| `a` | `font-medium text-blue-700 underline` |
| `strong`, `b` | `font-semibold text-gray-900` |
| `em`, `i` | `italic` |
| `ol` | `my-[1.25em] list-decimal pl-[1.625em] marker:text-gray-500` |
| `ul` | `my-[1.25em] list-disc pl-[1.625em] marker:text-gray-300` |
| `li` | `my-[.5em] pl-[.375em]` |
| `blockquote` | `my-[1.6em] border-l-4 border-gray-200 pl-4 font-medium italic text-gray-900` |
| `code` | `font-mono text-[.875em] font-semibold text-gray-900` |
| `pre` | `my-[1.714em] overflow-x-auto rounded-md bg-gray-800 px-[1.142em] py-[.857em] font-mono text-[.875em] leading-[1.714] text-gray-200` |
| `hr` | `my-[3em] border-t border-gray-200` |
| `img`, `video` | `my-[2em] block` |
| `figure` | `my-[2em]` |
| `figcaption` | `mt-[.857em] text-[.875em] leading-[1.43] text-gray-500` |
| `table` | `my-[2em] w-full table-auto text-left text-[.875em] leading-[1.714]` |
| `th` | `border-b border-gray-300 px-[.571em] py-[.571em] text-left font-semibold align-bottom` |
| `td` | `border-b border-gray-200 px-[.571em] py-[.571em] align-top` |

A few details aren’t captured by those shorthand classes: the plugin adjusts table-cell padding for first columns, removes the last table-row border, and adds backtick pseudo-content around inline `code`. Also, the color utilities above match the plugin’s usual default palette; customized typography themes may use different colors. Applying `prose-sm`, `prose-lg`, or other typography size variants changes some of these measurements.

## why these specific numbers

They come from the **typography plugin’s default CSS**. The utility classes just reproduce those values; they aren’t numbers chosen by Tailwind’s spacing scale.

Most are in `em`, so they scale with the element’s font size. For example, an `h1` is `2.25em` and has a bottom margin of `.889em`. That margin is relative to the heading’s font size, so its actual size is about `2.25 × .889 ≈ 2em` of the surrounding text. This lets spacing track the heading as its size changes.

Some values are chosen to create a consistent reading rhythm. For example, paragraphs use `1.25em` vertical margins, while headings get different margins above and below to distinguish sections. Values such as `1.714em` are ratios that preserve the intended line spacing when an element’s font size differs from the body text.

The bracket syntax—such as `mb-[.889em]`—is Tailwind’s way of expressing a value that may not exist in its standard spacing scale. It’s a direct translation of the plugin’s CSS.

One correction to my previous table: for a closer match, `blockquote` uses `pl-[1em]`, not `pl-4`; and `h4` also has `text-[1em]`. Some colors I listed were only examples—the plugin uses theme variables, so exact colors depend on your theme. Exact defaults can also vary by typography-plugin version.

## what are the equivalent util classes for each in rem

Assuming default `prose` uses `1rem` body text, these are the rem-based equivalents. The plugin expresses many values in `em`; I’ve converted them using each element’s font size—for example, `h2` is `1.5rem`, so its `2em` top margin becomes `3rem`.

```html
<article class="max-w-[65ch] text-base leading-7">
```

| Element | Rem-based utilities |
|---|---|
| `p` | `my-[1.25rem]` |
| `h1` | `mt-0 mb-[2rem] text-[2.25rem] font-extrabold leading-[1.111111]` |
| `h2` | `mt-[3rem] mb-[1.5rem] text-[1.5rem] font-bold leading-[1.333333]` |
| `h3` | `mt-[2rem] mb-[.75rem] text-[1.25rem] font-semibold leading-[1.6]` |
| `h4` | `mt-[1.6875rem] mb-[.5625rem] text-[1.125rem] font-semibold leading-[1.5]` |
| `a` | `font-medium underline` |
| `strong`, `b` | `font-semibold` |
| `em`, `i` | `italic` |
| `ol` | `my-[1.25rem] list-decimal pl-[1.625rem]` |
| `ul` | `my-[1.25rem] list-disc pl-[1.625rem]` |
| `li` | `my-[.5rem]` |
| `blockquote` | `my-[2rem] border-l-4 pl-[1.25rem] text-[1.25rem] font-medium italic leading-[1.6]` |
| Inline `code` | `font-mono text-[.875rem] font-semibold` |
| `pre` | `my-[1.5rem] overflow-x-auto px-[1rem] py-[.75rem] font-mono text-[.875rem] leading-[1.714286]` |
| `hr` | `my-[3rem] border-t` |
| `img`, `video` | `my-[2rem] block` |
| `figure` | `my-[2rem]` |
| `figcaption` | `mt-[.75rem] text-[.875rem] leading-[1.428571]` |
| `table` | `my-[1.75rem] w-full table-auto text-left text-[.875rem] leading-[1.714286]` |
| `th`, `td` | `border-b px-[.5rem] py-[.5rem]` |
| `th` additionally | `text-left font-semibold align-bottom` |
| `td` additionally | `align-top` |

The plugin’s colors come from theme variables, so utilities like `text-gray-900` are approximations, not universal equivalents. You can reference the variables directly—for example, `text-[var(--tw-prose-headings)]` or `border-[var(--tw-prose-hr)]`.

These rem values match the default prose sizing, but they won’t automatically scale like the plugin’s `em` values if you change the prose size or place an element inside differently sized text. Also, correction to my earlier table: default `h4` is `1.125em`, and list items don’t get the `pl-[.375em]` utility I previously suggested.