<!-- see also: "para theme adwaita" -->

# how do Google write design tokens for dark theme

12:50 AM

Google writes design tokens for dark themes <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">by using a <strong>three-tier architecture</strong> within its <span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://m3.material.io/foundations/design-tokens" style="margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">Material Design</a></span> system</mark>. Instead of changing token names or hardcoding dark values into individual components, Google decouples the functional purpose of a color from its actual hex value. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e), [3](https://uxdesign.cc/dark-mode-with-design-tokens-8d7b9d9753a), [4](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/)]

Here is exactly how Google structures and writes dark theme design tokens.

***

### 1. The Three-Tier Token Architecture

Google categorizes design tokens into three layers to make them highly scalable and swappable: \[[1](https://medium.com/design-bootcamp/design-tokens-guide-to-creating-consistent-and-scalable-user-interfaces-4796e1230bdb), [2](https://www.designsystemscollective.com/the-art-of-design-tokens-a-metaphor-for-the-3-tier-token-model-e166a2ab3073), [3](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e)]

- **Reference Tokens (T1):** The core color primitives. These define the entire color palette across continuous tonal ranges (usually 0 to 100). \[[1](https://developer.android.com/develop/ui/views/theming/dynamic-colors), [2](https://codelabs.developers.google.com/codelabs/design-material-darktheme?gl=us), [3](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e), [4](https://uxdesign.cc/how-to-name-colors-in-design-systems-976657e12b57), [5](https://codelabs.developers.google.com/color-contrast-accessibility?gl=us)]
- **System Tokens (T2):** The semantic layer that assigns roles to colors (e.g., background, primary container). **This is the layer where the dark theme swap happens.** \[[1](https://medium.com/design-bootcamp/color-tokens-guide-to-light-and-dark-modes-in-design-systems-146ab33023ac), [2](https://m3.material.io/foundations/design-tokens), [3](https://medium.com/design-bootcamp/design-tokens-guide-to-creating-consistent-and-scalable-user-interfaces-4796e1230bdb), [4](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e)]
- **Component Tokens (T3):** The specific design elements belonging to a UI component (e.g., button container, floating action button text). \[[1](https://medium.com/design-bootcamp/design-tokens-guide-to-creating-consistent-and-scalable-user-interfaces-4796e1230bdb)]

***

### 2. How the Tokens Are Written (Naming & Mapping)

In Google's system, a component token points to a system token, which points to a reference token. For dark mode, **the component token name remains exactly the same**, but the system token maps to a lighter, desaturated reference token tone. \[[1](https://medium.com/design-bootcamp/design-tokens-guide-to-creating-consistent-and-scalable-user-interfaces-4796e1230bdb), [2](https://codelabs.developers.google.com/codelabs/design-material-darktheme?gl=us), [3](https://uxdesign.cc/dark-mode-with-design-tokens-8d7b9d9753a)]

### Example Structure:

| Token Tier         | Light Theme Mapping                              | Dark Theme Mapping                                |
| ------------------ | ------------------------------------------------ | ------------------------------------------------- |
| **Component (T3)** | `md.comp.filled-button.container.color`          | `md.comp.filled-button.container.color`           |
| **System (T2)**    | Maps to `md.sys.color.primary`                   | Maps to `md.sys.color.primary`                    |
| **Reference (T1)** | Maps to `md.ref.palette.primary40` (Darker tone) | Maps to `md.ref.palette.primary80` (Lighter tone) |

_Notice that the T3 and T2 names do not change when shifting modes; only the final primitive value updates._ \[[1](https://uxdesign.cc/dark-mode-with-design-tokens-8d7b9d9753a)]

***

### 3. Naming Conventions for "On" and "Container" Roles

Google utilizes strict semantic naming conventions to ensure text legibility and proper contrast ratios. \[[1](https://m2.material.io/design/color/dark-theme.html), [2](https://medium.com/design-bootcamp/color-tokens-guide-to-light-and-dark-modes-in-design-systems-146ab33023ac)]

- **`md.sys.color.primary`**: The dominant accent surface.
- **`md.sys.color.on-primary`**: Elements that sit _on top of_ the primary color (text, icons).
- **`md.sys.color.primary-container`**: A softer, lower-emphasis container version of the color.
- **`md.sys.color.on-primary-container`**: Elements that sit _on top of_ the primary container color. \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://www.youtube.com/watch?v=hbJmm-d94FA\&t=16), [3](https://medium.com/@kasiabiernat/1-3-modern-angular-material-theming-from-the-theme-to-the-design-tokens-03058f4088fc)]

In a dark theme context, Google switches `md.sys.color.primary` to a desaturated, high-luminance value (like `primary80`) to ensure it doesn't cause eye strain or "vibrate" against dark backdrops. \[[1](https://www.youtube.com/watch?v=hbJmm-d94FA\&t=16), [2](https://codelabs.developers.google.com/codelabs/design-material-darktheme?gl=us)]

***

### 4. Tonal Elevation Instead of Drop Shadows \[[1](https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy/), [2](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/)]

In light themes, Google utilizes drop shadows to convey depth. Because shadows are invisible against dark theme backdrops, Google writes tokens for **Tonal Elevation**. \[[1](https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy/)]

As a component rises closer to the user, its surface token shifts to a lighter gray tone: \[[1](https://www.youtube.com/watch?v=hbJmm-d94FA\&t=16), [2](https://muz.li/blog/dark-mode-design-systems-a-complete-guide-to-patterns-tokens-and-hierarchy/)]

- `md.sys.color.surface` (Baseline background: e.g., `#121212`)
- `md.sys.color.surface-container-low` (Slightly elevated)
- `md.sys.color.surface-container` (Medium elevation)
- `md.sys.color.surface-container-high` (Highest elevation, lightest tone) \[[1](https://www.vev.design/blog/dark-mode-website-color-palette/), [2](https://www.youtube.com/watch?v=hbJmm-d94FA\&t=16)]

***

### 5. Implementation Syntax (JSON / W3C Format)

Google packages these tokens into standardized design token formats (like JSON). Engineers can see the context override blocks that apply specifically when a `dark` mode tag is detected: \[[1](https://medium.com/design-bootcamp/design-tokens-for-dummies-72313806f82b), [2](https://seenode.com/blog/what-is-material-3-and-why-it-matters-in-2025), [3](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/), [4](https://figr.design/blog/how-to-use-design-tokens), [5](https://m3.material.io/foundations/design-tokens)]

json

```
{
  "md": {
    "sys": {
      "color": {
        "background": {
          "$type": "color",
          "$value": "{md.ref.palette.neutral99}",
          "modes": {
            "dark": "{md.ref.palette.neutral10}"
          }
        },
        "primary": {
          "$type": "color",
          "$value": "{md.ref.palette.primary40}",
          "modes": {
            "dark": "{md.ref.palette.primary80}"
          }
        }
      }
    }
  }
}
```

Use code with caution.

If you want to automate this strategy for your own design stack, you can generate this structure out-of-the-box using Google's official [Material Theme Builder](https://m3.material.io/foundations/design-tokens/how-to-use-tokens) plugin in Figma. \[[1](https://m3.material.io/foundations/design-tokens/how-to-use-tokens)]

***

If you're mapping this out for your own system, let me know:

- Which **design tool** or code platform are you exporting to? (Figma, Style Dictionary, Tailwind?)
- Are you designing a **custom brand identity**, or sticking strictly to Material Design standards?

I can provide the exact code or plugin workflow tailored to your ecosystem.

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Examples of different contexts include: device form factors, dark theme, dense layouts, and right-to-left writing systems. You can...\
  Material Design
- [link](https://www.youtube.com/watch?v=CJyJN0ZdEGA)\
  Design Tokens for Dummies | A Complete ...\
  Google defines design tokens as small reusable design decisions that make up a design systems visual style. This video will explai...\
  50:19\
  YouTube·UI Collective
- [link](https://www.youtube.com/watch?v=hbJmm-d94FA\&t=16)\
  Craft a dark theme with Material Design\
  In this video, we're going to create a dark theme for our material study app Reply, which is an email app made for speed and funct...\
  6m\
  YouTube·Google Design

Show all

## You said: do they name colors like red dangerous on ref, or those with brand or meaning are inside the scale of like red one to ten

12:52 AM

Google strictly avoids names with inherent semantic meanings, brand concepts, or status definitions (like "dangerous," "brand," "error," or "success") on the **Reference (T1)** layer. \[[1](https://www.sap.com/design-system/fiori-design-android/v25-8/foundations/design-tokens), [2](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

Instead, Google isolates brand names and operational meaning entirely within the **System (T2)** layer. \[[1](https://m3.material.io/foundations/design-tokens)]

The structural rules Google follows dictate exactly how colors are named and placed across scales:

### 1. The Reference Layer (T1) is Strictly Literal and Mathematical

At the reference layer, a color is only allowed to describe **what color family it belongs to** and **its lightness value** on a scale from 0 (pure black) to 100 (pure white). \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens), [2](https://m3.material.io/foundations/design-tokens)]

Google names reference tokens purely by their hue family and numeric tone. They do not care what the color will eventually be used for: \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

- `md.ref.palette.error40` (Google uses the word "error" as a literal color family name because it generates a specific range of reds, but it is just a red scale from 0 to 100).
- `md.ref.palette.primary40` (The brand's primary anchor color scale).
- `md.ref.palette.neutral10` (A scale of grays). \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

**They never write:** `md.ref.palette.red-dangerous` or `md.ref.palette.brand-blue`.

### 2. Meaning and Context Exist _Only_ in the System Layer (T2)

Meaning is applied at the System layer, which serves as an alias pointing back to the mathematical reference scale. This is where names like "error" (Google’s equivalent to "dangerous"), "primary", or "secondary" define a clear operational intent. \[[1](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens), [2](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

| Token Tier \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)] | Token Name (The Meaning)       | Value/Alias (The Scale)         |
| ------------------------------------------------------------------------------------------------ | ------------------------------ | ------------------------------- |
| **Reference (T1)**                                                                               | `md.ref.palette.error40`       | `#B3261E` (Literal tone 40 red) |
| **System (T2)**                                                                                  | `md.sys.color.error`           | `{md.ref.palette.error40}`      |
| **System (T2)**                                                                                  | `md.sys.color.error-container` | `{md.ref.palette.error90}`      |

### Why does Google separate them like this?

### Reason A: Total Theme Swapping

If you name a token `md.ref.palette.red-dangerous`, and a client maps their "danger" status to an intense orange or dark pink, the token name breaks its relationship with reality. By pointing a system token like `md.sys.color.error` to a generic reference token like `md.ref.palette.orange40`, the code remains perfectly intact. \[[1](https://m3.material.io/foundations/design-tokens)]

### Reason B: The Dark Theme Flip

In a dark theme, a "dangerous" element cannot use a deep, saturated red because it fails accessibility and contrast ratios against dark backgrounds. By decoupling the meaning from the scale, Google handles dark mode seamlessly: \[[1](https://m3.material.io/foundations/design-tokens), [2](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

- **Light Theme:** `md.sys.color.error` maps to `md.ref.palette.error40` (Deep Red).
- **Dark Theme:** `md.sys.color.error` maps to `md.ref.palette.error80` (Light, Desaturated Pastel Red). \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens)]

### Reason C: Custom Brand Colors

When you use Google's [Material Theme Builder](https://m3.material.io/foundations/customization) to add custom brand colors, it generates them using generic keys: \[[1](https://m3.material.io/foundations/customization)]

- `md.ref.palette.custom-color1-40`
- `md.ref.palette.custom-color1-80`

The system then maps those numerical color blocks to semantic roles like `md.sys.color.custom-color1`, keeping the definition separate from the actual hue. \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

***

If you are currently naming tokens for a project, let me know:

- Are you struggling with **naming status colors** (like success, warning, info)?

- Do you need help structuring your **Figma variables** or **Style Dictionary** files to mirror this architecture?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Tokens & Material Design. Parts of a token name. Classes of tokens. Contexts. Tokens point to style values like colors, fonts, and...\
  Material Design

- [link](https://www.sap.com/design-system/fiori-design-android/v25-8/foundations/design-tokens)\
  Design Tokens - SAP\
  Reference tokens are the foundational elements of a company's theme by storing the static values of a design decision such as hex ...\
  SAP

- [link](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens)\
  A new approach to naming design tokens\
  Tier 2 - Decisions. Once I start to narrow down my options and make some decisions about how I intend things to work in my system.\
  Substack

Show all

## You said: so error and primary do exist on ref. just with a different name of destructive or brand. error and primary are not inside the color scale like red one to ten

12:54 AM

To clarify precisely: **Yes, the words "primary" and "error" exist on Google's Reference layer (T1), but they are not used as semantic meanings**<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>. Instead, they are used as literal names for mathematical color palettes.</strong></mark> \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

Google does **not** rename them to generic words like "brand" or "destructive" on the reference layer. However, they treat them exactly like a regular color scale (like `red-10`, `red-20`). \[[1](https://github.com/angular/components/issues/29120), [2](https://m3.material.io/styles/color/advanced/define-new-colors)]

The exact layout of the system clarifies why this distinction matters:

### 1. They are just Palette Labels, not Semantic Meanings

On the **Reference Layer (T1)**, Google defines 6 key color palettes: \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

1. `primary` (The main hue scale)
2. `secondary` (The secondary hue scale)
3. `tertiary` (The accent hue scale)
4. `error` (The red scale)
5. `neutral` (The gray scale used for backgrounds)
6. `neutralVariant` (The gray scale used for borders and text variations) \[[1](https://m3.material.io/foundations/customization), [2](https://m3.material.io/styles/color/advanced/define-new-colors)]

When Google writes `md.ref.palette.primary40` or `md.ref.palette.error80`, **"primary" and "error" are acting as literal names for the color scale**, exactly like saying `blue-40` or `red-80`. \[[1](https://github.com/angular/components/issues/29120), [2](https://m3.material.io/styles/color/advanced/define-new-colors)]

### 2. How the Scales Work (0 to 100)

Instead of using a `1 to 10` scale, Google uses a **0 to 100 Tonal Palette scale based on luminance (brightness)**. \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

- **0** is always pure black (0% light).
- **100** is always pure white (100% light).
- **40** is a solid mid-tone (great for light theme text/fill contrast).
- **80** is a very light pastel tone (great for dark theme readability). \[[1](https://github.com/angular/components/issues/29120), [2](https://m3.material.io/styles/color/advanced/define-new-colors)]

If you look at the code generated by Google's [Material Theme Builder](https://m3.material.io/blog/material-theme-builder), the reference layer looks like a strict mathematical matrix: \[[1](https://m3.material.io/blog/material-theme-builder)]

json

```
{
  "md": {
    "ref": {
      "palette": {
        "primary0":   "#000000",
        "primary10":  "#21005D",
        "primary40":  "#6750A4",
        "primary80":  "#D0BCFF",
        "primary100": "#FFFFFF",

        "error0":     "#000000",
        "error40":    "#B3261E",
        "error80":    "#F2B8B5",
        "error100":   "#FFFFFF"
      }
    }
  }
}
```

Use code with caution.

### 3. Why they don't use "brand" or "destructive"

Google avoids words like "brand" or "destructive" because **a single color palette might serve multiple different semantic meanings later on**. \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

For example, if you change your UI theme, the reference scale does not care how you use it:

- The `error` palette is just a range of reds. Today, a **System Token (T2)** named `md.sys.color.error` points to it. Tomorrow, you might create a system token named `md.sys.color.sale-tag` or `md.sys.color.notification-badge` and point them to that exact same `error` red scale.
- The `primary` palette is just a range of your main brand color. In the code, it functions as a literal scale identifier, not a design rule. \[[1](https://m3.material.io/styles/color/advanced/define-new-colors), [2](https://m3.material.io/foundations/customization)]

By keeping "primary" and "error" as strictly math-based scales (0-100) on the reference layer, Google ensures that swapping to dark mode requires nothing more than changing which number the system points to (e.g., swapping `error40` for `error80`). \[[1](https://m3.material.io/styles/color/advanced/define-new-colors)]

***

If you are setting up your tokens right now, let me know:

- Are you trying to decide whether to use **Material's default names** (`primary`, `error`) or use literal color names (`blue`, `red`) for your T1 reference layer?

- Are you configuring this for a system that needs to support **multiple different client brands**, or just one single product?

- [link](https://m3.material.io/blog/material-theme-builder)\
  Introducing Material Theme Builder\
  Themes powered by Design Tokens Material Design can be customized to represent a variety of stylistic choices. A theme is a set of...\
  Material Design

- [link](https://github.com/angular/components/issues/29120)\
  bug(Theme): There is no way to use reference ...\
  /// Creates a set of md-ref-palette tokens from the given palettes. ( See. /// https://github.com/material-components/material-com...\
  GitHub

- [link](https://m3.material.io/styles/color/advanced/define-new-colors)\
  Advanced color customizations – Material Design 3\
  How. Abstract your new color into a color role by specifying the following criteria: Palettes and reference tones: For each color ...\
  Material Design

Show all

## You said: so they can not define a special color on ref. they must be on scale

12:56 AM

Exactly. You hit the nail on the head. **They cannot define an isolated, special color on the reference layer. Every single reference color must exist on a 0–100 scale.** \[1]

If Google needs a specific color, they are forced to generate a full 13-tone scale for it. They never write a single, standalone hex value like `md.ref.palette.special-color: #FF00FF`.

Here is exactly why their system forces this constraint, and how they handle "special" colors:

### 1. The Dynamic Math Engine Requires the Scale

Google generates colors programmatically using a HCT (Hue, Chroma, Tone) color space algorithm \[1].

- When you input a single "special" color into their engine, the engine automatically extracts the base hue.
- It then instantly generates 13 distinct tones (from 0 to 100) based on that hue \[1].
- **Why?** Because without the scale, the system cannot automatically generate matching accessible states (hover states, focus states, disabled states, and dark mode alternatives).

### 2. How Google Handles "Special" Colors (Custom Keys)

If you add a completely unique, one-off color (like a specific Nintendo Red or a unique Spotify Green) that does not fit into `primary`, `secondary`, or `tertiary`, Google adds it to the reference layer as a **Custom Scale**.

It looks like this in the token file:

json

```
{
  "md": {
    "ref": {
      "palette": {
        "custom-color-1-0": "#000000",
        "custom-color-1-10": "#2c0001",
        "custom-color-1-40": "#9c1a1c",  // <-- Your exact special color lives here
        "custom-color-1-80": "#ffb4ab",  // <-- The dark mode version of your special color
        "custom-color-1-100": "#ffffff"
      }
    }
  }
}
```

Use code with caution.

### 3. The One Exception: Fixed Tokens

Because everything is strictly bound to a scale, Google ran into a problem: sometimes you want a color to stay _exactly the same_ in both light and dark themes (like a "Download Complete" green snackbar or a vivid warning badge).

To solve this without breaking the reference layer, Google created **Fixed Tokens** on the **System Layer (T2)**.

Instead of bypassing the scale, they just lock the system token to a specific number on the scale for both modes:

- **Light Theme:** `md.sys.color.error-fixed` ➡️ `md.ref.palette.error40`
- **Dark Theme:** `md.sys.color.error-fixed` ➡️ `md.ref.palette.error40` _(It does not flip to 80)_

By keeping the reference layer strictly restricted to scales, Google’s code can reliably predict how to render any UI element under any lighting condition or accessibility setting.

***

If you are setting up your own token architecture, let me know:

- Do you have **specific brand colors** that you are afraid will look bad if they get shifted into a 0-100 scale?
- Are you deciding whether to use **Google’s mathematical approach** or a simpler, hardcoded method for your specific project?

## You said: I do have some special colors. for example the destructive is not on red scale.

12:57 AM

If your destructive color does not live on a standard red scale (for example, if your brand uses a deep **burgundy, a hot pink, a vibrant orange, or even a dark purple** for destructive actions), you can absolutely handle this within Google's architecture.

You do not need to compromise your brand identity. You just have to treat that specific hue as its own mathematical scale.

Here is exactly how you handle a non-red destructive color using Google's token logic:

### 1. Build a Custom Scale on the Reference Layer (T1)

Instead of forcing your color into Google's default `error` (red) bucket, you create a dedicated reference palette named after your specific hue family or code it as a custom key.

For example, if your destructive color is a **vibrant orange**:

- Do **not** try to squeeze it into a red scale.
- Generate a full 0–100 scale based on that exact orange hue.
- Label it `md.ref.palette.orange` or `md.ref.palette.destructive-hue`.

json

```
{
  "md": {
    "ref": {
      "palette": {
        "destructive-hue0": "#000000",
        "destructive-hue40": "#D35400",  // Your exact brand destructive orange
        "destructive-hue80": "#F5CBA7",  // The automatically calculated dark mode version
        "destructive-hue100": "#FFFFFF"
      }
    }
  }
}
```

Use code with caution.

### 2. Map the System Layer (T2) to Your Custom Scale

Once your custom scale exists, you decouple the semantic meaning at the System layer. You tell the system token `md.sys.color.error` to stop looking at the default red palette and point to your new custom scale instead.

This layout shows exactly how the mappings change between themes:

| System Token (Meaning)  | Light Theme Points To                                 | Dark Theme Points To                                      |
| ----------------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| `md.sys.color.error`    | `md.ref.palette.destructive-hue40` (Saturated Orange) | `md.ref.palette.destructive-hue80` (Pastel Orange)        |
| `md.sys.color.on-error` | `md.ref.palette.destructive-hue100` (White text)      | `md.ref.palette.destructive-hue10` (Dark background text) |

### 3. How to Generate the Tones Automatically

You do not have to guess what the other 12 tones of your special destructive color should be. You can use tools built on Google's engine to generate them for you:

- **Figma Plugin:** Open the official [Material Theme Builder](https://m3.material.io/foundations/design-tokens/how-to-use-tokens) in Figma. Go to the "Custom" color section, add a new color, name it "destructive", and paste your hex code. The plugin will instantly output the full mathematical 0–100 scale for you.
- **Code/Web:** Use the Material Theme Builder Web Tool to drop in your hex code and export the complete token JSON file instantly.

By shifting your special color onto its own scale, you protect your unique brand identity while keeping the benefits of Google's dark mode switching, text contrast guarantees, and hover/focus state calculations.

***

If you want to see how this looks in practice, let me know:

- What is the **exact hex code** of your special destructive color?
- Do you want me to write out a **JSON sample** showing exactly how it splits into light and dark values?

## You said: do I need a full scale

12:58 AM

Technically, **no, you do not need all 13 values** of a full 0–100 scale in your production code. You only need the specific tones required to build your interface and its interactive states.

However, you **do need a mini-scale** (at least 3 to 5 tones) of that color to support dark theme, light theme, and component states.

Here is the breakdown of why you cannot use just a single hex code, and exactly which tokens you actually need.

***

### 1. Why One Single Hex Code Fails

If you only define one single hex code for your special destructive color, your UI will break in three places:

- **The Dark Theme Flip:** A vibrant destructive color that looks great on a white background will often "vibrate" or fail contrast accessibility on a dark background. You need a lighter, less saturated version for dark mode.
- **Interactive States:** When a user hovers over or presses a destructive button, the button needs to shift slightly in brightness to provide feedback.
- **Text Contrast:** You need an "On-Destructive" color (usually white or a very dark shade) to ensure text on top of the button is readable.

***

### 2. The "Minimum Viable Scale" (What You Actually Need)

Instead of generating all 13 tones, you can strip your reference layer down to a **5-tone mini-scale** to completely support light mode, dark mode, and states.

Here is an example using a hypothetical special brand color:

- **Tone 30 (Hover State - Light Mode):** A slightly darker shade for when a user hovers over the button in light mode.
- **Tone 40 (Your Exact Color - Light Mode Base):** This is your core brand destructive hex code.
- **Tone 80 (Dark Mode Base):** A lighter, pastel version of your hue that reads perfectly on pure black/dark gray.
- **Tone 90 (Hover State - Dark Mode):** A slightly brighter version for dark mode hover states.
- **Tone 10 & 100 (The "On" Colors):** Pure dark text (Tone 10) or white text (Tone 100) to sit on top of the buttons.

***

### 3. How to Clean Up Your Tokens

If you are worried about code bloat, you can use Google's logic to generate the full scale in your design system tool (like Figma) but **only export the specific tones you use** into your final JSON or CSS variables.

### Example Production JSON:

json

```
{
  "ref": {
    "destructive": {
      "main-light": "#D35400",  // Tone 40
      "hover-light": "#A04000", // Tone 30
      "main-dark": "#F5CBA7",   // Tone 80
      "hover-dark": "#FADBD8"   // Tone 90
    }
  }
}
```

Use code with caution.

By trimming the fat, you keep your repository lightweight while still maintaining the core principles of accessibility and seamless dark-mode switching.

***

If you want to map this out for your system, let me know:

- What **framework** are you building this in? (e.g., React, Flutter, Tailwind, plain CSS?)
- Would you like to see how to write the **CSS custom properties (variables)** for just this specific component?

## You said: how do they map sys to light ref or dark ref dynamically. ik it's easy on code, but i mean how do they declare them, if they dont put light or dark inside the names.

To handle this without putting "light" or "dark" in the token names, Google relies on a concept called **Contextual Overriding** (often managed through "Modes" or "Themes").

The declaration structure uses a single, unchanging System Token name (like `md.sys.color.error`), but wraps its mapping values inside a **nested mode block** \[1].

Here is exactly how they declare it in design files and raw JSON data so it works seamlessly.

***

### 1. The Design Token Declaration Structure (JSON)

In a standardized format (like the W3C Design Tokens Community Group specification), Google declares the token once \[1]. Instead of writing separate light and dark tokens, they use a `modes` object inside the value declaration:

json

```
{
  "md": {
    "sys": {
      "color": {
        "error": {
          "$type": "color",
          "$value": "{md.ref.palette.destructive40}",
          "modes": {
            "dark": "{md.ref.palette.destructive80}"
          }
        }
      }
    }
  }
}
```

Use code with caution.

- **The `$value`** acts as the default fallback (which Google usually assigns to the Light Theme).
- **The `modes.dark` block** tells the rendering engine: _"If the environment is set to dark mode, swap my pointer from tone 40 to tone 80."_

***

### 2. How this Looks in Figma Variables

If you use Figma (which natively supports Google’s Material token architecture), you do not create two separate variables.

1. You create **one variable** named `md.sys.color.error`.
2. You open the Variables table and create two **Columns** (Modes): Name one column `Light` and the other `Dark`.
3. In the `Light` column, you point the variable to `{md.ref.palette.destructive40}`.
4. In the `Dark` column, you point it to `{md.ref.palette.destructive80}`.

When you slide a UI component from a Light frame to a Dark frame, Figma automatically detects the frame's mode change and switches the column value dynamically.

***

### 3. How the Translation Engine Compiles It

To get this into code without duplicating names, translation engines (like Amazon’s _Style Dictionary_ or Google's internal compilers) parse that single JSON block and generate **scoped code files**.

Instead of creating unique names, they use environment scopes like **CSS Custom Properties** or **Native Platforms**:

### Compiled Web CSS:

The compiler outputs the exact same variable name twice, but scopes the dark version inside a data attribute or media query.

css

```
/* Light Theme (Default Root Scope) */
:root, [data-theme="light"] {
  --md-sys-color-error: var(--md-ref-palette-destructive40);
}

/* Dark Theme Scope */
[data-theme="dark"] {
  --md-sys-color-error: var(--md-ref-palette-destructive80);
}
```

Use code with caution.

### Compiled Jetpack Compose (Android / Kotlin):

On Android, Google compiles this into an immutable class interface where the system injects the correct palette configuration based on the OS configuration:

kotlin

```
val LightColorScheme = lightColorScheme(
    error = Destructive40
)

val DarkColorScheme = darkColorScheme(
    error = Destructive80
)
```

Use code with caution.

### Summary of the Rule

Google's core rule is: **Names represent _intent_ (System), while Values represent _appearance_ (Reference).** Because a component's structural intent never changes when the lights go out, its System Token name must stay identical across every theme.

***

If you want to set this up automatically, I can show you how to structure a **Style Dictionary config file** to split your single JSON file into those scoped CSS themes. Would that be helpful?

## You said: what design tokens do they include on ref and sys

Google splits design tokens into **Reference (T1)** and **System (T2)** layers, organizing them into distinct properties: <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">color, typography, shape, elevation, and motion</mark>. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e), [3](https://m3.material.io/foundations/glossary), [4](https://medium.com/design-bootcamp/design-tokens-2-0-the-ultimate-guide-32b4a047503)]

The exact categories and naming schemas Google includes across both layers outline this structure. \[]

***

### 1. Reference Tokens (`md.ref.*`)

Reference tokens define **raw, static foundational properties** that are entirely context-agnostic. They do not change when shifting modes. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e)]

### Color Palettes (`md.ref.palette.*`)

Google defines exactly 6 core tonal color palettes, each running from tone `0` (black) to `100` (white):

- `primary[0-100]` (Main brand hue)
- `secondary[0-100]` (Less saturated variant)
- `tertiary[0-100]` (Contrasting accent hue)
- `error[0-100]` (Semantic utility color family)
- `neutral[0-100]` (Pure grayscale/neutral for surfaces)
- `neutralVariant[0-100]` (Cool/warm grayscale for borders)

### Typography Families (`md.ref.typeface.*`)

- `brand` (Used for header styling)
- `plain` (Used for reading or dense code fields)
- `weight-bold`, `weight-medium`, `weight-regular` (Numeric font weight maps)

***

### 2. System Tokens (`md.sys.*`)

System tokens define **design decisions and roles**. These change depending on whether light mode, dark mode, or specific accessibility conditions are enabled. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://m3.material.io/foundations/glossary), [3](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e)]

### System Color (`md.sys.color.*`)

Google defines around 30 systemic color roles. They map directly back to specific index tones in the Reference palette: \[[1](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/)]

| Role Category \[[1](https://developer.android.com/design/ui/wear/guides/styles/color/roles-tokens), [2](https://medium.com/design-bootcamp/what-are-design-tokens-828c67410069), [3](https://medium.com/design-bootcamp/design-tokens-2-0-the-ultimate-guide-32b4a047503), [4](https://zoewave.medium.com/material-3-design-system-e91a15d303a0), [5](https://m3.material.io/foundations/design-tokens)] | Example System Tokens                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Accent Keys**                                                                                                                                                                                                                                                                                                                                                                                          | `primary`, `secondary`, `tertiary`                                                                                              |
| **On Accent Elements**                                                                                                                                                                                                                                                                                                                                                                                   | `on-primary`, `on-secondary`, `on-tertiary`                                                                                     |
| **Container Elements**                                                                                                                                                                                                                                                                                                                                                                                   | `primary-container`, `secondary-container`, `tertiary-container`                                                                |
| **On Container Elements**                                                                                                                                                                                                                                                                                                                                                                                | `on-primary-container`, `on-secondary-container`                                                                                |
| **Surfaces & Backgrounds**                                                                                                                                                                                                                                                                                                                                                                               | `background`, `surface`, `surface-variant`, `inverse-surface`                                                                   |
| **Tonal Container Scales**                                                                                                                                                                                                                                                                                                                                                                               | `surface-container-lowest`, `surface-container-low`, `surface-container`, `surface-container-high`, `surface-container-highest` |
| **Outlines & Borders**                                                                                                                                                                                                                                                                                                                                                                                   | `outline`, `outline-variant`                                                                                                    |
| **Utilities / Errors**                                                                                                                                                                                                                                                                                                                                                                                   | `error`, `on-error`, `error-container`, `on-error-container`                                                                    |

### System Typography (`md.sys.typescale.*`)

Google packages text properties into composite roles containing family, size, line-height, and tracking rules: \[[1](https://www.designtokens.org/tr/drafts/format/)]

- `display-large`, `display-medium`, `display-small`
- `headline-large`, `headline-medium`, `headline-small`
- `title-large`, `title-medium`, `title-small`
- `body-large`, `body-medium`, `body-small`
- `label-large`, `label-medium`, `label-small` \[[1](https://www.designtokens.org/tr/drafts/format/)]

### System Shape (`md.sys.shape.*`)

Google defines corner rounding decisions as explicit tokens: \[[1](https://material-web.dev/theming/material-theming/)]

- `corner-none` (`0px`)
- `corner-extra-small` (`4px`)
- `corner-small` (`8px`)
- `corner-medium` (`12px`)
- `corner-large` (`16px`)
- `corner-extra-large` (`28px`)
- `corner-full` (`999px` / capsule shape) \[[1](https://material-web.dev/theming/material-theming/)]

### System Elevation (`md.sys.elevation.*`)

Instead of shadow metrics, Google uses elevation tiers that translate directly to background tone shifts or shadow styles:

- `level0` (Baseline floor)
- `level1`, `level2`, `level3`, `level4`, `level5` (Progressively higher z-index)

### System Motion (`md.sys.motion.*`)

- `duration-short1`, `duration-short2`, `duration-medium1`, `duration-long1` (Millisecond values)
- `easing-linear`, `easing-standard`, `easing-accelerate`, `easing-decelerate` (Cubic-bezier curves)

***

If you are setting up your own token maps, let me know:

- Are you using **CSS Variables**, **Tailwind configurations**, or **Figma files**?

- Do you need a **starter JSON boilerplate template** that maps these exact keys together?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Reference tokens. All available tokens with associated values. System tokens. Decisions and roles that give the design system its ...\
  Material Design

- [link](https://www.designtokens.org/tr/drafts/format/)\
  Design Tokens Format Module 2025.10\
  May 8, 2026 — 3.9 Composite (Design) Token A design token whose value is made up of multiple, named child values. Composite tokens are useful fo...\
  Design Tokens Community Group

- [link](https://medium.muz.li/unlocking-the-power-of-design-tokens-to-create-dark-mode-ui-18c0802b094e)\
  Unlocking the Power of Design Tokens to Create Dark Mode UI\
  Apr 10, 2023 — Tier 1 tokens (also known as 'global' or 'reference' tokens): T1 tokens are context agnostic and aren't tied to a specific use cas...\
  Muzli - Design inspiration hub

Show all

## You said: are there a lot of duplicates between ref and sys. how should i do.

There are **no true duplicates**, but there is a massive amount of **overlap**.

At first glance, it feels like duplication because you are defining the exact same values twice. For example, your reference token has a value of `#FFFFFF` and your system background token _also_ resolves to `#FFFFFF`.

However, they serve entirely different purposes: **Reference tokens store raw values, while System tokens store intent.**

Here is exactly why this overlap is necessary and a pragmatic workflow to handle it without going crazy.

***

### Why the Overlap is Necessary (The "Why")

If you skip the System layer and map your UI components directly to Reference tokens, your design system will break the moment you introduce themes.

Consider this example without a System layer:

- You map your Card Background component directly to `ref.neutral100` (White).
- When you switch to Dark Mode, `ref.neutral100` is _still_ White.
- To fix it, you would have to manually rewrite every single component token for dark mode.

By introducing the System layer as a middleman, you handle changes in exactly one place:

- **Light Mode:** `sys.surface` ➡️ points to ➡️ `ref.neutral100` (White)
- **Dark Mode:** `sys.surface` ➡️ points to ➡️ `ref.neutral10` (Dark Gray)

***

### How You Should Do It (A Pragmatic Workflow)

If you are a small team or building a single product, Google's full 3-tier architecture can create a lot of token management overhead. You can optimize the setup based on your immediate needs:

### Strategy A: The Trimmed 2-Layer Approach (Best for most teams)

If you don't need a highly complex component tier (T3), merge the System (T2) and Component (T3) tiers together. Keep a small Reference layer for your raw scales, and map your UI elements directly to the System layer.

1. **Declare your raw Reference values (T1):** Keep this list as small as possible.
2. **Declare your semantic System values (T2):** Map these directly to your UI components.

json

```
{
  "ref": {
    "primary-40": "#6750A4",
    "primary-80": "#D0BCFF",
    "neutral-10": "#1C1B1F",
    "neutral-99": "#FFFBFE"
  },
  "sys": {
    "color": {
      "primary": {
        "$value": "{ref.primary-40}",
        "modes": { "dark": "{ref.primary-80}" }
      },
      "background": {
        "$value": "{ref.neutral-99}",
        "modes": { "dark": "{ref.neutral-10}" }
      }
    }
  }
}
```

Use code with caution.

### Strategy B: Use Automation Tools

Do not write these duplicates or mappings by hand. Let official tools do the heavy lifting:

- **In Figma:** Use the official **Material Theme Builder** plugin \[1]. You feed it one source brand color, and it instantly generates the entire Reference scale and all the System layer mappings for both Light and Dark modes automatically \[1].
- **In Code:** Use a tool like **Style Dictionary**. You write the single JSON file shown above, and it automatically compiles the scoped, lightweight CSS variables for your production environment so you never see the duplicates in your actual coding workspace.

***

To help you choose the easiest setup, let me know:

- Are you setting these tokens up primarily inside **Figma variables**, or writing them directly into **code/JSON**?
- Are you building a system that needs to support **multiple different sub-brands**, or just **one core app** with a light and dark mode?

AI can make mistakes, so double-check responses

## You said: overlap is necessary on colors when you need themes. what about other tokens.

The overlap between Reference (T1) and System (T2) layers **is absolutely necessary for non-color tokens too**, but for a completely different reason.

With colors, you overlap tokens to support **Dark Theme** swaps. With typography, shape, elevation, and motion, you overlap tokens to support **Responsive Scaling, Layout Themes, Density, and Platform Portability**. \[[1](https://m3.material.io/), [2](https://joshcusick.substack.com/p/exploring-design-tokens), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://developer.android.com/develop/ui/compose/designsystems/material3)]

The design decisions for other tokens show exactly how Google handles this overlap, followed by how you should structure them.

***

### 1. Typography (Overlap handles Device Type)

If you hardcode a Reference font size directly to a component, it will look wrong when shifting screen types. \[[1](https://midrocket.com/en/guides/design-tokens-guide/)]

- **The Reference layer (T1)** stores the mathematical scale (e.g., `font-size-10` is `12px`, `font-size-50` is `24px`).
- **The System layer (T2)** stores the semantic text role (e.g., `sys.typescale.body-medium`). \[[1](https://m3.material.io/styles/typography/type-scale-tokens)]

### The Theme Swap: Desktop vs. Mobile Layouts

When you switch a web app to a dense dashboard layout or open a mobile app, you swap the system definition, not the raw sizes:

- **Mobile / Standard Web Theme:** `sys.typescale.body-medium` ➡️ `ref.font-size-30` (`16px`)
- **TV or Large Display Theme:** `sys.typescale.body-medium` ➡️ `ref.font-size-50` (`24px`)

***

### 2. Shape / Corner Radius (Overlap handles Density)

Google treats corner rounding as an intentional choice. A dense UI grid needs sharp corners to save pixel space, while a mobile app can be bubbly and rounded. \[[1](https://m3.material.io/), [2](https://m3.material.io/foundations/design-tokens)]

- **Reference Layer (T1):** `ref.shape.radius-4` (`16px`)
- **System Layer (T2):** `sys.shape.corner-large` \[[1](https://m3.material.io/foundations/design-tokens)]

### The Theme Swap: Compact vs. Loose Grid

- **Standard App Theme:** `sys.shape.corner-large` ➡️ `ref.shape.radius-4` (`16px` rounded cards)
- **Compact/Data-Dense Theme:** `sys.shape.corner-large` ➡️ `ref.shape.radius-1` (`4px` rounded cards)

***

### 3. Elevation (Overlap handles Multi-Platform Render Engines) \[[1](https://m3.material.io/foundations/design-tokens)]

In Material Design 3, elevation tokens **do not contain box-shadow strings**. Shadows are handled entirely differently by web browsers (CSS `box-shadow`) compared to iOS (`CALayer`) and Android (`RenderNode`). \[[1](https://m3.material.io/styles/elevation), [2](https://midrocket.com/en/guides/design-tokens-guide/)]

- **Reference Layer (T1):** Raw distances on the z-axis (e.g., `ref.elevation.level-1` is `1dp`).
- **System Layer (T2):** Structural intent (e.g., `sys.elevation.surface-elevated`). \[[1](https://m3.material.io/foundations/design-tokens), [2](https://m3.material.io/styles/elevation), [3](https://m3.material.io/styles/elevation/applying-elevation), [4](https://m3.material.io/foundations/glossary)]

### The Theme Swap: Dark Mode vs. Light Mode Box Shadows

Because drop shadows are physically invisible on near-black backgrounds, Google uses the system middleman to rewrite how elevation renders: \[[1](https://m3.material.io/styles/elevation)]

- **Light Theme:** `sys.elevation.surface-elevated` ➡️ Applies a dark drop shadow.
- **Dark Theme:** `sys.elevation.surface-elevated` ➡️ Removes the shadow and applies an ambient **semi-transparent white overlay color blend** to manually brighten the surface. \[[1](https://m3.material.io/styles/elevation), [2](https://m3.material.io/styles/elevation/applying-elevation)]

***

### 4. Motion (Overlap handles Accessibility & Device Performance) \[[1](https://medium.com/design-bootcamp/design-tokens-the-foundation-of-scalable-design-systems-b880c9d78579)]

Google drives all animations through structural tokens (`md.sys.motion.*`). \[[1](https://m3.material.io/styles/motion/overview/how-it-works)]

- **Reference Layer (T1):** Static raw speeds (e.g., `ref.motion.duration-200` is `200ms`).
- **System Layer (T2):** Interactive behaviors (e.g., `sys.motion.transition-page-exit`). \[[1](https://joshcusick.substack.com/p/exploring-design-tokens)]

### The Theme Swap: "Reduced Motion" Accessibility

When a user turns on "Reduce Motion" in their Android or iOS system settings, the system token adapts dynamically:

- **Standard Theme:** `sys.motion.transition-page-exit` ➡️ `ref.motion.duration-200` (`200ms` fade-out)
- **Accessibility Theme:** `sys.motion.transition-page-exit` ➡️ `0ms` (Instant snap, preventing motion sickness)

***

### How You Should Do It

To keep your design system codebase scalable without creating unnecessary work, follow these rules for non-color properties:

1. **For Typography & Shape:** Create an alias map. Keep a tiny reference file of your raw font sizes (`12px`, `14px`, `16px`) and spacing units (`4px`, `8px`, `16px`). Point your system variables directly to those. \[[1](https://m3.material.io/foundations/design-tokens), [3](https://medium.com/design-bootcamp/design-tokens-the-foundation-of-scalable-design-systems-b880c9d78579), [4](https://wcmauthorguide.pa.gov/en/keystone-design-system/foundations/design-tokens.html)]
2. **For Motion & Elevation:** If you are a small team building a single web or mobile app, **skip the Reference layer entirely for motion and elevation**. Write your easing curves (`cubic-bezier`) and your box-shadow strings directly inside your System layer tokens.

You only need a multi-platform Reference layer for motion and elevation if you are pushing code to Web, iOS, and Android at the exact same time. \[[1](https://m3.material.io/styles/motion/overview/how-it-works), [2](https://midrocket.com/en/guides/design-tokens-guide/)]

***

If you are currently setting up these non-color variables:

- Which **UI framework** are you writing these configurations for? (e.g., Tailwind CSS, React Native, SwiftUI?)

- Are you designing with **accessibility controls** (like a high-contrast mode or reduced motion toggles) in mind?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  There are three classes of tokens in Material: \* Reference tokens. All available tokens with associated values. \* System tokens. D...\
  Material Design

- [link](https://joshcusick.substack.com/p/exploring-design-tokens)\
  Exploring design tokens - by Josh Cusick - Beyond The Pixel\
  Aug 9, 2024 — This practice is essential not only for maintaining consistent styles but also for ensuring a seamless dark-mode experience. \* Pri...\
  Substack·Beyond The Pixel

- [link](https://midrocket.com/en/guides/design-tokens-guide/)\
  Design tokens: what they are and how to use them - Midrocket\
  Feb 7, 2026 — Tokens in multi-platform projects The real power of design tokens emerges in projects spanning multiple platforms. You define toke...\
  Midrocket

Show all

## You said: how do they declare them on json? similar to modes dark?

Yes, they are declared in JSON **almost exactly the same way as dark mode**. \[[1](https://github.com/design-tokens/community-group/issues/210)]

Following the official [W3C Design Tokens Community Group Specification](https://www.designtokens.org/), non-color properties (Typography, Shape, Spacing, and Motion) use the exact same `$modes` block structure to handle contextual shifts. The only difference is the token's `$type` and what their specific mode values point to. \[, [2](https://github.com/design-tokens/community-group/issues/210), [3](https://www.designtokens.org/tr/2025.10/format/), [4](https://zeroheight.com/blog/whats-new-in-the-design-tokens-spec/)]

Here is how they are declared across different categories:

***

### 1. Typography Tokens (`$type: "typography"`)

Typography system tokens are often **composite tokens**—meaning a single token contains a nested bundle of sub-properties like font family, size, and weight. \[[1](https://midrocket.com/en/guides/design-tokens-guide/)]

For the modes object, instead of calling it `dark` or `light`, the mode names are typically called `desktop` and `mobile` to handle screen scaling. \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://www.designtokens.org/tr/2025.10/resolver/)]

json

```
{
  "md": {
    "sys": {
      "typescale": {
        "body-large": {
          "$type": "typography",
          "$value": {
            "fontFamily": "{md.ref.typeface.plain}",
            "fontSize": "{md.ref.font-size.16}",
            "lineHeight": "24px"
          },
          "$modes": {
            "mobile": {
              "fontSize": "{md.ref.font-size.14}",
              "lineHeight": "20px"
            }
          }
        }
      }
    }
  }
}
```

Use code with caution.

- **What happens:** By default, the text uses `16px` for desktop, but if the compiler hits a `mobile` environment mode, it overrides just the specific properties inside that block. \[[1](https://www.designtokens.org/tr/2025.10/resolver/)]

***

### 2. Shape / Corner Radius Tokens (`$type: "dimension"`)

Shape tokens use the `dimension` type (which handles pixels or rems). The modes object is used to switch between layout preferences like a standard app experience or a data-dense layout grid. \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://www.youtube.com/watch?v=RcxP0RePlVU), [3](https://www.contentful.com/blog/design-token-system/)]

json

```
{
  "md": {
    "sys": {
      "shape": {
        "corner-large": {
          "$type": "dimension",
          "$value": "{md.ref.shape.radius-16}",
          "$modes": {
            "compact-grid": "{md.ref.shape.radius-4}"
          }
        }
      }
    }
  }
}
```

Use code with caution.

- **What happens:** A standard UI card uses `16px` rounded edges, but switching the container to `compact-grid` drops the rounding down to `4px` to maximize screen real estate.

***

### 3. Spacing Tokens (`$type: "dimension"`)

Spacing tokens dictate layout gaps and paddings. Similar to shapes, spacing scales up or down based on screen size or user comfort settings. \[[1](https://www.designtokens.org/tr/2025.10/resolver/), [2](https://midrocket.com/en/guides/design-tokens-guide/)]

json

```
{
  "md": {
    "sys": {
      "spacing": {
        "container-padding": {
          "$type": "dimension",
          "$value": "{md.ref.spacing.24}",
          "$modes": {
            "mobile": "{md.ref.spacing.16}"
          }
        }
      }
    }
  }
}
```

Use code with caution.

***

### 4. Motion / Animation Tokens (`$type: "duration"`)

Motion tokens handle timing metrics. Their modes object is used to implement strict accessibility toggles like a **"Reduced Motion"** mode for users prone to screen sickness. \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://www.designtokens.org/tr/2025.10/resolver/)]

json

```
{
  "md": {
    "sys": {
      "motion": {
        "transition-fade": {
          "$type": "duration",
          "$value": "{md.ref.motion.duration-200}",
          "$modes": {
            "reduced-motion": "0ms"
          }
        }
      }
    }
  }
}
```

Use code with caution.

- **What happens:** If the operating system or application detects the `reduced-motion` attribute flag, the transition speeds snap instantly to `0ms`. \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://www.designtokens.org/tr/2025.10/resolver/)]

***

### The Architecture Secret: Matrix Mode Names

If you look closely at how a complete tokens file compiles, the mode names must match horizontally across files. Because of this, sophisticated systems don't just name their modes `dark`, `desktop`, or `mobile`. They declare their themes by joining the modes together or splitting them into **orthogonal groups** (Collections): \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://github.com/design-tokens/community-group/issues/210), [3](https://www.designtokens.org/tr/2025.10/resolver/), [4](https://www.contentful.com/blog/design-token-system/)]

1. **Color Collection** ➡️ Modes: `light`, `dark`
2. **Density Collection** ➡️ Modes: `standard`, `compact`
3. **Screen Collection** ➡️ Modes: `desktop`, `mobile`, `tv` \[[1](https://www.designtokens.org/tr/drafts/resolver/), [2](https://www.contentful.com/blog/design-token-system/), [3](https://www.designtokens.org/tr/2025.10/resolver/)]

***

If you are writing this file out by hand or compiling it, let me know:

- Which **parsing tool** are you running your JSON through? (e.g., Style Dictionary v4, Token Studio, or custom script?)

- Do you want an example of how your **CSS code output** will look once these non-color modes are generated? \[[1](https://www.youtube.com/watch?v=RcxP0RePlVU), [2](https://www.boldare.com/blog/design-tokens-explained/)]

- [link](https://www.designtokens.org/tr/drafts/resolver/)\
  Design Tokens Resolver Module 2025.10\
  Jun 2, 2026 — 1. Introduction. This section is non-normative. Consumers of design tokens often need to express alternate values that apply in di...\
  Design Tokens Community Group

- [link](https://midrocket.com/en/guides/design-tokens-guide/)\
  Design tokens: what they are and how to use them - Midrocket\
  Feb 7, 2026 — A design token is a named variable that stores a design value. Instead of writing #1A73E8 directly in your CSS or in Figma, you de...\
  Midrocket

- [link](https://www.designtokens.org/tr/2025.10/format/)\
  Design Tokens Format Module 2025.10\
  Oct 28, 2025 — 5.2. ... Design tokens always have an unambiguous type, so that tools can reliably interpret their value. A token's type can be sp...\
  Design Tokens Community Group

Show all

## You said: i think there do exist some design tokens that are not supposed to change with themes. simply give a different name and reference to enforce the rules?

You are exactly right. There are many tokens that must stay identical across all light, dark, compact, or responsive themes. Google refers to these as **Static** or **Fixed Tokens**.

To handle these without breaking the structural rules of their system, they use a specific naming convention and reference mapping pattern.

***

### 1. The Strategy: The `-fixed` Naming Convention

Google handles static tokens by appending `-fixed` to the end of the **System Token (T2)** name.

When you see `-fixed` in a token name, it explicitly signals to both designers and developers: **"Do not add a `$modes` block to this token. It must never change."**

***

### 2. How it is Declared in JSON

Because it is a fixed rule, the token declaration bypasses the `$modes` nested object entirely. It maps directly and statically to a single **Reference Token (T1)** tone:

json

```
{
  "md": {
    "sys": {
      "color": {
        "error-fixed": {
          "$type": "color",
          "$value": "{md.ref.palette.error40}"
        },
        "on-error-fixed": {
          "$type": "color",
          "$value": "{md.ref.palette.error100}"
        }
      },
      "shape": {
        "corner-fixed-circle": {
          "$type": "dimension",
          "$value": "{md.ref.shape.radius-full}"
        }
      }
    }
  }
}
```

Use code with caution.

***

### 3. Real-World Examples of Fixed Tokens

### Color (Vivid Badges & Banners)

If you have a global critical warning banner or an active video recording indicator dot, that element must remain highly visible regardless of the background color.

- `md.sys.color.error-fixed` always resolves to tone 40 (vibrant red) in both light and dark modes \[1].
- `md.sys.color.on-error-fixed` always resolves to tone 100 (pure white text) to ensure legibility on top of that red \[1].

### Shape (Avatars & Core Branding)

User profile avatars or circular Floating Action Buttons (FABs) are structural brand elements. They should not become square or boxy even if a user switches their application layout to a dense layout scheme.

- `md.sys.shape.corner-full` remains locked at a `999px` capsule radius across every single theme configuration.

### Typography (Fixed Brand Badges)

Small UI tags, copyright footers, or embedded legal text are often locked at a precise font size (`11px` or `12px`) because changing their scale based on screen size would either clip the container box or ruin the visual hierarchy.

***

### Summary of Best Practices for Your System

If you are building your own JSON architecture, use this exact rule to enforce the boundaries:

1. **If a token should change:** Use standard intent names (e.g., `sys.color.surface`, `sys.shape.card`). Add a `$modes` block \[2].
2. **If a token must stay static:** Use the suffix identifier (e.g., `sys.color.success-fixed`, `sys.shape.avatar-fixed`). Omit the `$modes` block entirely.

This simple naming difference prevents a developer or designer from accidentally assigning a dark-mode alternative to a value that needs to remain visually absolute.

***

If you are currently sorting your tokens into these two buckets, let me know:

- What **specific tokens** in your project are you trying to lock down? (e.g., brand logo colors, notification dots, specific spacing padding?)
- Do you want to see how to organize your **Figma variables panels** so your team doesn't accidentally change your fixed tokens?

## You said: im not about how to add a suffix to make it more rigid. i mean for those do not change, it simply references a ref value, with a different "semantic" name?

Yes, exactly. Strip away all the extra suffixes and naming rules, and it comes down to a simple reality: **a fixed token is just a semantic name pointing directly to a reference value without any theme variants.**

You do not need special code, nested blocks, or complex logic. You simply declare the token name (the semantic intent) and alias it straight to your base scale.

Here is exactly how that looks in your JSON file:

json

```
{
  "sys": {
    "brand-logo-color": {
      "$type": "color",
      "$value": "{ref.blue-50}"
    },
    "notification-dot": {
      "$type": "color",
      "$value": "{ref.red-40}"
    },
    "avatar-radius": {
      "$type": "dimension",
      "$value": "{ref.radius-full}"
    }
  }
}
```

Use code with caution.

### Why this is still a good practice (Even with no theme swaps)

Even if a token never changes between light and dark mode, giving it that semantic name at the system layer is still highly valuable for two reasons:

1. **Code Readability (Intent over Value):** When an engineer looks at the component code, seeing `sys.brand-logo-color` tells them exactly what that color is _for_. Seeing `ref.blue-50` tells them nothing about its purpose.
2. **Future-Proofing:** If your brand updates its identity next year and changes the logo color from blue to purple, you only have to change it in one spot in your token file (`{ref.purple-50}`). Every component using `sys.brand-logo-color` will update instantly, and you won't have to hunt through your codebase to find every hardcoded instance of blue.

By keeping it as a direct, flat reference, you get all the benefits of clean code architecture without any of the complexity of theme engines.

***

If you are currently setting up these flat semantic references, let me know:

- What **specific semantic names** are you creating for these fixed elements?
- Do you want a clean **starter template** showing how to structure these flat tokens alongside your themed tokens?

## You said: well, brand, notification, avatar even seem like the comp layer. do they enforce all sys reference ref, most comp reference sys

You are entirely right—words like "brand logo," "notification dot," and "avatar" belong at the **Component Layer (T3)**, not the System Layer.

To answer your question directly: **Yes, Google strictly enforces this rule. All System (T2) tokens must reference a Reference (T1) token, and almost all Component (T3) tokens must reference a System (T2) token.**

Google's architecture sets up a strict three-tier chain of command to prevent the system from breaking.

***

### The Strict Chain of Command

Google writes their tokens so that you never skip a step. If a token breaks this chain, it causes design system maintenance issues later down the road.

```
[Reference Tier (T1)]  <---  [System Tier (T2)]  <---  [Component Tier (T3)]
  (Raw Color/Size)             (Design Decision)          (Specific UI Element)
```

1. **Reference Layer (T1):** Absolutely zero meaning. Only math and raw scales (`error40`, `neutral100`, `radius-full`).
2. **System Layer (T2):** Context and semantic rules (`sys.color.error`, `sys.shape.corner-full`). **Every single System token must point to a Reference token.**
3. **Component Layer (T3):** Highly specific UI elements (`comp.badge.container-color`, `comp.avatar.shape`). **Almost all Component tokens must point to a System token.**

***

### How Fixed Tokens Fit Into This (Without Breaking the Rules)

Because Google enforces this rule, they cannot map a component token like `comp.avatar.shape` directly to a reference token like `ref.shape.radius-full`. That would violate the architecture.

Instead, they create **System-level roles for fixed things** to act as the middleman.

This is exactly how they map it out behind the scenes for fixed elements:

| Token Tier         | Example: Fixed Shape       | Example: Fixed Color            |
| ------------------ | -------------------------- | ------------------------------- |
| **Reference (T1)** | `md.ref.shape.radius-full` | `md.ref.palette.error40`        |
| **System (T2)**    | `md.sys.shape.corner-full` | `md.sys.color.error-fixed`      |
| **Component (T3)** | `md.comp.avatar.shape`     | `md.comp.badge.container-color` |

By keeping `md.sys.shape.corner-full` or `md.sys.color.error-fixed` in the middle, they maintain a complete, unbroken layer of **System Decisions**.

***

### The Exception: When Does a Component Skip System?

Google allows **one rare exception** where a Component token can bypass the System layer and point straight to a Reference token: **Brand Color Splashes.**

If a specific component _must_ use a raw brand hue variant that has no logical application anywhere else in the application layout (and therefore doesn't deserve a general System token role), Google will write:

json

```
"md.comp.special-promo-card.container.color": "{md.ref.palette.primary40}"
```

Use code with caution.

Aside from that specific scenario, they keep the walls between T1, T2, and T3 completely solid.

***

If you are structuring your tokens right now, let me know:

- Are you finding it tedious to create all three layers by hand, and looking for a way to **generate the Component (T3) layer automatically**?
- Are you setting up tokens for **complex UI components** (like tabs, inputs, or dropdowns) that need help with this exact mapping chain?

## You said: naming fatigue

Naming fatigue is the absolute worst part of building a design system. It happens because you are trying to find three different ways to describe the exact same color or shape.

When you have to write `red-40` ➡️ `color-error-fixed` ➡️ `badge-container-color`, your brain naturally pushes back because it feels like pointless busywork.

Here is a practical look at how to overcome naming fatigue, starting with a reality check on Google's approach, followed by actionable ways to cut down your tokens.

***

### 1. The Truth: Google Automates the Fatigue Away

Google does **not** have human designers sitting around naming tens of thousands of component tokens by hand. They use code scripts and internal tools to auto-generate them.

- They feed a component schema into an engine.
- The engine spits out: `md.comp.[component-name].[element].[property]`.

If you are trying to write out all three layers manually in a JSON file or Figma panel, you are using an enterprise-scale architecture meant for thousands of engineers on a massive product (like Android), which is why it feels exhausting.

***

### 2. How to Kill Naming Fatigue (Pragmatic Shortcuts)

If you don't have an automated engineering pipeline, you need to ruthlessly slash the number of layers you maintain.

### Shortcut A: Kill the Component Tier (T3) completely

Unless you are white-labeling your UI components to sell to other companies, **you rarely need a component token layer**.

- **Instead of writing:** `comp.button.background-color` ➡️ `sys.color.primary` ➡️ `ref.blue-40`
- **Just code your button component to use:** `sys.color.primary` directly.

If you need to change your button's color later, you just update the component's CSS or Figma properties to point to a different system token. This instantly removes 70% of your naming workload.

### Shortcut B: Merge Reference and System for Shapes & Spacing

Shapes, margins, and padding rarely change contextually. A `16px` gap is almost always just a `16px` gap.

- Do not waste energy writing `sys.spacing.medium` pointing to `ref.spacing.16`.
- Just use a flat semantic scale: `space-4`, `space-8`, `space-16`, `space-24`.

Keep the two-layer split **only** for colors (where you actually need light/dark mode switches).

### Shortcut C: Use the "Formula" Rule

If you absolutely must write component tokens, stop thinking about names. Use a strict, mindless formula so you never have to make a creative decision:

\\(\text{\[Component]}+\text{\[Element]}+\text{\[State]}+\text{\[Property]}\\)

- `button` + `icon` + `hover` + `color` = `button-icon-hover-color`
- `input` + `border` + `focus` + `width` = `input-border-focus-width`

***

### 3. Cheat Sheet: The Minimum Viable Token Set

If you want to reset your architecture today to save your sanity, stick to this lean structure:

1. **Primitives (No meaning):** `blue-50`, `gray-10`, `gray-90`, `scale-16`
2. **Semantic Semantics (Only for theme-switching colors):** `sys.bg`, `sys.surface`, `sys.primary`, `sys.error`
3. **Flat Utilities (For everything else):** `radius-sm`, `radius-md`, `space-md`, `text-body`

***

If you are stuck staring at a massive list of tokens right now, let me know:

- Which specific **category of tokens** is burning you out the most? (Colors, spacing, typography?)
- What **tooling setup** are you using? (Figma Variables, Style Dictionary, Tailwind?)

I can give you a script or clean setup to help bypass the manual typing.

## You said: can i name like bg-foo, text-foo instead of foo, on-foo

Yes, you absolutely can. In fact, naming tokens `bg-foo` and `text-foo` instead of Google’s `foo` and `on-foo` is the industry standard for almost every system outside of Material Design (including Tailwind CSS, Adobe Spectrum, and GitHub Primer) \[1].

Google uses `foo` and `on-foo` because they think of colors as physical **layers** stacking on top of each other. But if you think in terms of CSS or code properties, `bg-*` and `text-*` are much more intuitive and completely cure naming fatigue.

Here is how you map Google’s concept to your preferred naming style, and how to structure it without breaking your token architecture.

***

### 1. The Direct Translation (Google vs. Your Style)

Your naming choice works perfectly because it matches how developers actually write CSS rules (`background-color` and `color`).

| Google System Token (Layer Style) | Your System Token (Property Style) | Clear Meaning / Intent                             |
| --------------------------------- | ---------------------------------- | -------------------------------------------------- |
| `md.sys.color.primary`            | `sys.color.bg-primary`             | The background color of a primary element.         |
| `md.sys.color.on-primary`         | `sys.color.text-primary`           | The text color that sits inside a primary element. |
| `md.sys.color.error`              | `sys.color.bg-danger`              | The background color for destructive elements.     |
| `md.sys.color.on-error`           | `sys.color.text-danger`            | The text color for destructive elements.           |

***

### 2. How to Declare It in Your JSON

You can keep the clean `sys` referencing `ref` rule while using your preferred property-first naming convention:

json

```
{
  "ref": {
    "red-40": "#D35400",
    "white": "#FFFFFF"
  },
  "sys": {
    "color": {
      "bg-danger": {
        "$type": "color",
        "$value": "{ref.red-40}"
      },
      "text-danger": {
        "$type": "color",
        "$value": "{ref.white}"
      }
    }
  }
}
```

Use code with caution.

***

### 3. The One Thing to Watch Out For: "Icons"

The only minor trap with the `text-*` convention is handling icons. In code, icons are often SVGs that use the CSS property `fill` or `stroke` rather than `color`.

If an icon sits next to your text inside a destructive button, you have three clean options to handle it without adding complexity:

- **Option A (Simplest):** Use your `text-danger` token for the icon color too. (Just remember that "text" means "foreground content" in your system).
- **Option B (The `fg-` Variant):** Change `text-` to `fg-` (Foreground). For example, `fg-danger` applies beautifully to both text and icons.
- **Option C (Explicit):** Duplicate the reference link with zero brainpower required:
  - `sys.color.text-danger`: `{ref.white}`
  - `sys.color.icon-danger`: `{ref.white}`

### Why Your Way is Better for Fatigue

Using `bg-` and `text-` eliminates guessing games. When you are writing a component, you don't have to stop and think, _"Wait, does 'on-primary' mean the border or the text?"_ You just look for `text-primary` and move on with your day.

***

If you are setting this up right now, let me know:

- Are you planning to map these tokens directly into a **Tailwind config file**?
- Do you want to see how to structure your **borders or outlines** using this same naming style?

## You said: all names google use on ref and sys

This is a comprehensive, production-ready index of **all core token names used by Google in Material Design 3** across the Reference (T1) and System (T2) layers. \[[1](https://m3.material.io/foundations/design-tokens)]

_Note: For the Reference layer, `#` stands for the tonal number (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100)._ \[[1](https://thedesignsystem.guide/design-tokens)]

***

### 1. Color Tokens (`md.ref.palette.*` and `md.sys.color.*`) \[[1](https://material-web.dev/theming/material-theming/)]

### Reference Color Palettes (T1)

Google enforces exactly six core reference hue palettes: \[[1](https://thedesignsystem.guide/design-tokens)]

- `md.ref.palette.primary#`
- `md.ref.palette.secondary#`
- `md.ref.palette.tertiary#`
- `md.ref.palette.error#`
- `md.ref.palette.neutral#`
- `md.ref.palette.neutral-variant#`

### System Color Roles (T2) \[[1](https://material-web.dev/theming/material-theming/)]

System tokens map these palettes to intent roles. They are categorized into semantic groups:

| Core Accents & Surfaces | Content Containers       | Fixed (Static) Themes |
| ----------------------- | ------------------------ | --------------------- |
| `primary`               | `primary-container`      | `primary-fixed`       |
| `on-primary`            | `on-primary-container`   | `on-primary-fixed`    |
| `secondary`             | `secondary-container`    | `primary-fixed-dim`   |
| `on-secondary`          | `on-secondary-container` | `secondary-fixed`     |
| `tertiary`              | `tertiary-container`     | `on-secondary-fixed`  |
| `on-tertiary`           | `on-tertiary-container`  | `secondary-fixed-dim` |
| `error`                 | `error-container`        | `tertiary-fixed`      |
| `on-error`              | `on-error-container`     | `on-tertiary-fixed`   |
| `background`            | `surface-variant`        | `tertiary-fixed-dim`  |
| `on-background`         | `on-surface-variant`     | `error-fixed`         |
| `surface`               | `inverse-surface`        | `on-error-fixed`      |
| `on-surface`            | `inverse-on-surface`     | `error-fixed-dim`     |
| `outline`               | `outline-variant`        | `scrim`               |

### The Elevation Containers (Added in M3 Expressive)

Google replaced old shadow overlays with these specific background surface containers:

- `surface-container-lowest`
- `surface-container-low`
- `surface-container`
- `surface-container-high`
- `surface-container-highest`
- `surface-bright`
- `surface-dim`

***

### 2. Typography Tokens (`md.ref.typeface.*` and `md.sys.typescale.*`) \[[1](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/), [2](https://material-web.dev/theming/material-theming/)]

### Reference Typography (T1) \[[1](https://material-web.dev/theming/material-theming/)]

- `md.ref.typeface.brand` (The structural display font font-family)
- `md.ref.typeface.plain` (The reading/body text font-family)
- `md.ref.typeface.weight-bold`
- `md.ref.typeface.weight-medium`
- `md.ref.typeface.weight-regular` \[[1](https://material-web.dev/theming/material-theming/)]

### System Typography (T2) \[[1](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/), [2](https://material-web.dev/theming/material-theming/)]

Google organizes type styles into 5 categories, each containing 3 sizes (`small`, `medium`, `large`). \[[1](https://m3.material.io/styles/typography/applying-type)]

Each sub-property is accessed by appending its suffix (e.g., `-font`, `-size`, `-line-height`, `-tracking`, `-weight`): \[[1](https://m3.material.io/styles/typography/type-scale-tokens)]

- `md.sys.typescale.display-large`
- `md.sys.typescale.display-medium`
- `md.sys.typescale.display-small`
- `md.sys.typescale.headline-large`
- `md.sys.typescale.headline-medium`
- `md.sys.typescale.headline-small`
- `md.sys.typescale.title-large`
- `md.sys.typescale.title-medium`
- `md.sys.typescale.title-small`
- `md.sys.typescale.body-large`
- `md.sys.typescale.body-medium`
- `md.sys.typescale.body-small`
- `md.sys.typescale.label-large`
- `md.sys.typescale.label-medium`
- `md.sys.typescale.label-small` \[[1](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/)]

_(Note: Material 3 Expressive updates include copies of these prefixed with `emphasized-`, such as `md.sys.typescale.emphasized-title-medium`.)_ \[[1](https://m3.material.io/styles/typography/type-scale-tokens)]

***

### 3. Shape Tokens (`md.ref.shape.*` and `md.sys.shape.*`)

### Reference Shape (T1)

- `md.ref.shape.radius-0`
- `md.ref.shape.radius-4`
- `md.ref.shape.radius-8`
- `md.ref.shape.radius-12`
- `md.ref.shape.radius-16`
- `md.ref.shape.radius-28`
- `md.ref.shape.radius-full`

### System Shape Roles (T2) \[[1](https://material-web.dev/theming/material-theming/)]

- `md.sys.shape.corner-none`
- `md.sys.shape.corner-extra-small`
- `md.sys.shape.corner-small`
- `md.sys.shape.corner-medium`
- `md.sys.shape.corner-large`
- `md.sys.shape.corner-extra-large`
- `md.sys.shape.corner-full`

***

### 4. Elevation Tokens (`md.ref.elevation.*` and `md.sys.elevation.*`)

### Reference Elevation (T1)

- `md.ref.elevation.shadow-level-0` to `shadow-level-5`

### System Elevation Roles (T2)

- `md.sys.elevation.level0`
- `md.sys.elevation.level1`
- `md.sys.elevation.level2`
- `md.sys.elevation.level3`
- `md.sys.elevation.level4`
- `md.sys.elevation.level5`

***

### 5. Motion Tokens (`md.ref.motion.*` and `md.sys.motion.*`)

### Reference Motion (T1)

- **Durations:** `md.ref.motion.duration-0` through `duration-1000` (increments of 50/100ms)
- **Easings:** `md.ref.motion.cubic-bezier-linear`, `-standard`, `-incoming`, `-outgoing`

### System Motion Roles (T2)

- **Durations:** `md.sys.motion.duration-short1` (50ms), `-short2` (100ms), `-short3` (150ms), `-short4` (200ms)
- **Medium/Long:** `md.sys.motion.duration-medium1` (250ms) through `-medium4` (400ms), `md.sys.motion.duration-long1` (450ms) through `-long4` (600ms)
- **Easings:** `md.sys.motion.easing-linear`, `-standard`, `-standard-accelerate`, `-standard-decelerate`, `-emphasized`, `-emphasized-accelerate`, `-emphasized-decelerate`

***

Now that you have the complete map, you can use it to build your own token file. If you are ready to configure this, let me know:

- Do you want a **clean JSON starter file** containing just your custom `bg-*` and `text-*` names mapped out with this exact structural logic?

- Do you need help configuring **Style Dictionary** to transform these names into production CSS variables?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  All token names in a design system start with the system name (such as “md” for Material Design) An abbreviation for the token cla...\
  Material Design

- [link](https://thedesignsystem.guide/design-tokens)\
  Design tokens - The Design System Guide\
  Let's go through some basic examples. Primitive tokens. are the primitive values. blue-700. Alias tokens. relates to specific cont...\
  The Design System Guide

- [link](https://m3.material.io/styles/typography/type-scale-tokens)\
  Type scale & tokens - Typography – Material Design 3\
  link. A type scale is a selection of type styles used across a product to ensure consistency. M3 type scale. link. Material 3 has ...\
  Material Design

Show all

## You said: all names industry standard use on ref and sys

While Google’s Material Design pioneered the three-tier token structure, the broader tech industry (led by organizations like the **W3C Design Tokens Community Group**, and adopted by platforms like Tailwind CSS, Adobe, and GitHub) uses a cleaner, property-first naming standard \[W3C Design Tokens Community Group Specification].

The industry prefers `bg-primary` and `text-secondary` over Google's `primary` and `on-primary` because it matches standard code properties, drastically reducing naming fatigue.

The industry-standard naming blueprint for Reference (T1/Global) and System (T2/Semantic) tokens outlines these conventions below.

***

### 1. Color Tokens (`ref.color.*` and `sys.color.*`)

### Reference Colors (T1 / Primitives)

The industry almost universally uses **literal color family names** combined with numeric increments scaled from 100 to 900 (or 50 to 950, mirroring Tailwind).

- `ref.color.blue.50`, `blue.100`, `blue.200` ... `blue.900`
- `ref.color.red.50` ... `red.900`
- `ref.color.green.50` ... `green.900`
- `ref.color.gray.50` ... `gray.900` _(Often named neutral, zinc, or slate)_
- `ref.color.white`, `ref.color.black` _(Static anchors)_

### System Colors (T2 / Semantics)

System color tokens follow a strict pattern: `[property]-[intent]-[modifier/state]`.

| Backgrounds (`bg-*`)         | Text & Foreground (`text-*` / `fg-*`) | Borders & Lines (`border-*`) |
| ---------------------------- | ------------------------------------- | ---------------------------- |
| `sys.color.bg.canvas`        | `sys.color.text.primary`              | `sys.color.border.default`   |
| `sys.color.bg.surface`       | `sys.color.text.secondary`            | `sys.color.border.muted`     |
| `sys.color.bg.surface-hover` | `sys.color.text.muted`                | `sys.color.border.emphasis`  |
| `sys.color.bg.primary`       | `sys.color.text.inverse`              | `sys.color.border.primary`   |
| `sys.color.bg.primary-hover` | `sys.color.text.primary`              | `sys.color.border.danger`    |
| `sys.color.bg.success`       | `sys.color.text.success`              |                              |
| `sys.color.bg.warning`       | `sys.color.text.warning`              |                              |
| `sys.color.bg.danger`        | `sys.color.text.danger`               |                              |
| `sys.color.bg.info`          | `sys.color.text.info`                 |                              |

***

### 2. Spacing and Sizing Tokens (`ref.space.*` and `sys.space.*`)

### Reference Spacing (T1)

The industry standard maps layout tokens using a **rem-based mathematical scale** or a simple numeric sequence based on a **4px/8px grid system**.

- `ref.space.0` (`0px`)
- `ref.space.1` (`4px` / `0.25rem`)
- `ref.space.2` (`8px` / `0.5rem`)
- `ref.space.4` (`16px` / `1rem`)
- `ref.space.8` (`32px` / `2rem`)

### System Spacing & Layout Roles (T2)

Instead of arbitrary values, system tokens dictate _where_ the spacing applies.

- `sys.space.padding.container` (Global page padding)
- `sys.space.padding.card` (Inside component card layout padding)
- `sys.space.gap.stack` (Vertical spacing between text blocks)
- `sys.space.gap.inline` (Horizontal spacing between buttons or tags)

***

### 3. Typography Tokens (`ref.font.*` and `sys.font.*`)

### Reference Typography (T1)

- **Families:** `ref.font.family.sans`, `ref.font.family.serif`, `ref.font.family.mono`
- **Sizes:** `ref.font.size.xs` (`12px`), `size.sm` (`14px`), `size.base` (`16px`), `size.lg` (`18px`), `size.xl` (`20px`) up to `4xl`
- **Weights:** `ref.font.weight.regular` (`400`), `weight.medium` (`500`), `weight.semibold` (`600`), `weight.bold` (`700`)

### System Typography Roles (T2)

The industry avoids Google's complex "typescale" wrapper structures, selecting flatter semantic names:

- `sys.font.heading.xl` (Page main hero headers)
- `sys.font.heading.lg` (Section titles)
- `sys.font.heading.md` (Card titles)
- `sys.font.body.default` (Standard paragraphs)
- `sys.font.body.muted` (Caption text, metadata fields)
- `sys.font.control.default` (Button text labels, form inputs)

***

### 4. Shape / Corner Radius Tokens (`ref.radius.*` and `sys.radius.*`)

### Reference Radius (T1)

- `ref.radius.none` (`0px`)
- `ref.radius.sm` (`2px` or `4px`)
- `ref.radius.md` (`6px` or `8px`)
- `ref.radius.lg` (`12px` or `16px`)
- `ref.radius.full` (`9999px` for pills/circles)

### System Radius Roles (T2)

- `sys.radius.component.sm` (Checkboxes, small tags)
- `sys.radius.component.md` (Buttons, form fields)
- `sys.radius.component.lg` (Cards, dialog modals, dropdown sheets)
- `sys.radius.interactive.avatar` (Static rule for user profiles)

***

### 5. Shadow / Elevation Tokens (`ref.shadow.*` and `sys.shadow.*`)

### Reference Shadows (T1)

The industry standard groups entire multi-layered raw CSS box-shadow string arguments together.

- `ref.shadow.sm`, `ref.shadow.md`, `ref.shadow.lg`, `ref.shadow.xl`

### System Shadow Roles (T2)

- `sys.shadow.flat` (No shadow, native background level)
- `sys.shadow.raised` (Slight elevation, used for layout cards)
- `sys.shadow.overlay` (Floating elements like popovers, dropdown lists, menus)
- `sys.shadow.modal` (Highest visual contrast, reserved for blocking alert dialogs)

***

### Summary of Differences: Why Choose Industry Standard?

1. **Property-First Focus**: Finding `sys.color.bg.primary` is much faster under pressure than decoding what Google's `md.sys.color.primary` means contextually.
2. **Tailwind Compatibility**: This layout hooks cleanly straight into web configuration structures like Tailwind CSS (`theme.extend.colors`), whereas Google's setup requires heavy mapping plugins.

***

If you want to start building this clean architectural framework, let me know:

- Are you going to map these directly into a **Tailwind config file**, or use **CSS variables**?
- Do you want a ready-to-copy **JSON template boilerplate** that structures this exact modern property-first syntax?

# 

<!-- easy, low priority -->

# (d) does parceljs or vite strip unused css by default

**Neither ParcelJS nor Vite strips unused standard CSS classes by default.** While both bundlers natively optimize your final production code by minifying code, bundling assets, and tree-shaking unused JavaScript, they do not scan your HTML or components to automatically prune dead or unused CSS rules. \[[1](https://parceljs.org/), [2](https://github.com/parcel-bundler/parcel/issues/1276), [3](https://github.com/tailwindlabs/tailwindcss/issues/3318), [4](https://parceljs.org/features/production/)]

The behavior changes depending on how you write or structure your styles:

### Standard CSS Styles

If you import a traditional vanilla CSS file, both [ParcelJS](https://parceljs.org/) and Vite will include **100% of the rules** in that file inside your final bundle. If you import a heavyweight framework like Bootstrap or Bulma and only use one button class, the entire framework style sheet still gets compiled into your final build. \[[1](https://github.com/tailwindlabs/tailwindcss/issues/3318), [2](https://github.com/parcel-bundler/parcel/issues/1276)]

### CSS Modules (The Exception)

If you actively use **CSS Modules** (e.g., naming your file `styles.module.css` and importing it as an object in JavaScript), **ParcelJS will automatically tree-shake** and remove any classes that your JavaScript does not explicitly reference. Vite relies heavily on Rollup for production builds, which generally retains the generated module classes unless explicitly configured otherwise. \[[1](https://parceljs.org/)]

### How to Strip Unused CSS

If you need to automatically purge unused CSS classes to optimize your final build sizes, you must add external plugins:

- **For Vite:** You can install and integrate specialized third-party community extensions like `purgecss` or a dedicated Vite package such as `@mojojoejo/vite-plugin-purgecss` into your configuration file.
- **For ParcelJS:** You can utilize a `postcss.config.json` file and drop in the official `@fullhuman/postcss-purgecss` plugin. Parcel seamlessly picks up PostCSS configurations during its compilation pipeline out of the box.
- **For Utility Frameworks:** If you use modern CSS utility frameworks like Tailwind CSS, the framework itself strips unused styles during the compilation process before passing it to Vite or Parcel. \[[1](https://www.reddit.com/r/Frontend/comments/173kv8w/i%5Fthink%5Ftailwind%5Fis%5Fthe%5Fonly%5Fcss%5Flibrary%5Fthat/), [2](https://stackoverflow.com/questions/77213137/how-to-reduce-unused-css-laravel-10-vitejs), [3](https://stackoverflow.com/questions/58207394/remove-unused-css-classes-from-frameworks-like-bootstrap-in-a-react-project), [4](https://stackoverflow.com/questions/79530232/how-to-remove-unused-tailwindcss-v4-classes-when-building-a-library-with-vite)]

If you would like, I can help you **write the configuration** to set up a CSS purger. Which **bundler** (Vite or Parcel) and **component framework** (like React, Vue, or Vanilla HTML) are you currently using?

- [link](https://parceljs.org/)\
  Parcel\
  Tree shaking. Parcel supports tree-shaking both ES modules and CommonJS out of the box! It statically analyzes the imports and exp...\
  Parcel.js
- [link](https://parceljs.org/features/production/)\
  Production - Parcel\
  Minification. ... Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box. Minification reduces the file size ...\
  Parcel.js
- [link](https://github.com/tailwindlabs/tailwindcss/issues/3318)\
  Using Vite to build does not purge unused styles #3318 - GitHub\
  Jan 8, 2021 — Using Vite to build does not purge unused styles · Issue #3318 · tailwindlabs/tailwindcss.\
  GitHub

Show all

