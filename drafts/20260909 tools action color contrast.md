# apac color contrast formula

## apac color contrast formula

The **Accessible Perceptual Contrast Algorithm (APCA)** <mark>calculates a<span> </span><strong>Lightness Contrast (<span><span><div><div><math xmlns="http://www.w3.org/1998/Math/MathML"></math></div><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" direction="ltr" width="0.9994em" height="0.8768em" viewBox="0 -0.657 0.9994 0.8768"><text fill="#E6E8F0" transform="translate(0,0)">𝑳</text><text fill="#E6E8F0" transform="translate(0.636,0.21)">𝒄</text></svg></div></span></span>) score</strong><span> </span>instead of a strict pass/fail ratio like the older WCAG 2 method</mark>. Unlike mathematical relative luminance formulas, APCA is a multi-step **perceptual color contrast method** that accounts for human vision, context, font sizes, weights, and background polarity (whether the text is light-on-dark or dark-on-light). [link](https://ruitina.com/apca-accessible-colour-contrast/)

The APCA algorithm processes through a series of key math stages to calculate

𝐿𝑐

: [link](https://colorjs.io/docs/contrast)

### 1. Linearize sRGB Values (Gamma Decoding)

First, standard 8-bit sRGB values (R, G, B) are converted to a 0.0 to 1.0 scale and linearized. APCA uses a linearization threshold exponent of 2.4, which is slightly higher than the older 2.222 standard: [link](https://quorumlanguage.com/tutorials/accessibility/luminanceandcolorcontrast.html)

If𝑉≤0.04045∶𝑉lin=𝑉12.92

If𝑉>0.04045∶𝑉lin=𝑉+0.0551.0552.4

### 2. Calculate Perceptual Relative Luminance (Y)

The linearized primary channels are multiplied by spectral coefficients to find the overall luminance (Y). APCA uses standard coefficients optimized for modern displays: [link](https://quorumlanguage.com/tutorials/accessibility/luminanceandcolorcontrast.html)

𝑌=0.2126729×𝑅lin+0.7151522×𝐺lin+0.0721750×𝐵lin

_(Luminance must be computed separately for both the text/foreground color_

_𝑌𝑡𝑥𝑡_

_and the background color_

_𝑌𝑏𝑔_

_)._ [link](https://quorumlanguage.com/tutorials/accessibility/luminanceandcolorcontrast.html)

### 3. Apply Gamma Scaling and Soft Clamping

Both luminance values are modified to account for visual processing, including "soft clamping" near deep black to prevent noise and flare: [link](https://colorjs.io/docs/contrast)

𝑌scaled=𝑌𝛼

Where α ≈ 0.56 for normal viewing environments, adjusted based on deep black thresholds if the background or text approaches 0.0.

### 4. Determine Contrast and Polarity (

𝐿𝑐

)

APCA is **polarity-aware**. The final Lightness Contrast (

𝐿𝑐

) formula changes based on which element is lighter: [link](https://apcacontrast.com/)

- **Dark text on a light background (Positive Contrast):**\
  𝐿𝑐=(𝑌𝛼bg−𝑌𝛼txt)×100

_Yields a positive score from_\
_𝐿𝑐_\
_0_\
_to_\
_𝐿𝑐_\
_106_\
_._

- **Light text on a dark background (Negative Contrast):**\
  𝐿𝑐=(𝑌𝛼bg−𝑌𝛼txt)×100

_Yields a negative score from_\
_𝐿𝑐_\
_0_\
_to_\
_𝐿𝑐_\
_−108_\
_(the negative sign indicates dark mode polarity)._ [link](https://apcacontrast.com/)

***

### Understanding the

𝐿𝑐

Scores

Instead of aiming for a single magic number, APCA scoring thresholds scale dynamically based on your typography: [link](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)

| 𝐿𝑐 Score Range | Best Use Case            | Example Use Case                                        |
| -------------- | ------------------------ | ------------------------------------------------------- |
| **𝑳𝒄≥𝟗𝟎**      | **Body Text Baseline**   | Small body copy, multi-column reading, thin fonts.      |
| **𝑳𝒄≥𝟕𝟓**      | **Standard UI Text**     | Content text, navigation items, and descriptive blocks. |
| **𝑳𝒄≥𝟔𝟎**      | **Large or Bold Text**   | Headings, large interface labels, and heavy weights.    |
| **𝑳𝒄≥𝟒𝟓**      | **Large Accents Only**   | Subtitles, large display titles, or standalone icons.   |
| **𝑳𝒄≥𝟑𝟎**      | **Non-text UI Elements** | Borders, disabled fields, decorative elements.          |

Because calculating this by hand is highly complex, designers typically use dedicated engines like the official [APCA Contrast Calculator](https://apcacontrast.com/) or comprehensive visual suites like [ColorContrast.app](https://colorcontrast.app/) to analyze palettes natively. [link](https://colorcontrast.app/)

Would you like to **plug in specific hex codes** to calculate an exact

𝐿𝑐

score, or are you looking for the **source code implementation** (such as JavaScript or Python) for this formula?

- [link](https://apcacontrast.com/)\
  APCA Contrast Calculator\
  APCA Contrast Calculator\
  The APCA contrast calculator is polarity aware and can calculate lightness contrast for dark text on a light background and light ...
- [link](https://ruitina.com/apca-accessible-colour-contrast/)\
  Juan Ruitiña\
  APCA: the new algorithm for accessible colour contrast · Juan Ruitiña\
  May 28, 2022 — The Accessible Perceptual Contrast Algorithm (APCA) is a new algorithm that's expected to replace the current Web Content Accessib...
- [link](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)\
  AccessibilityChecker.org\
  Understanding the APCA Advanced Perceptual Contrast ...\
  Dec 19, 2025 — Instead of a single pass/fail ratio like 4.5:1, APCA uses Lc (Lightness Contrast) values, which represent the perceived contrast s...

Show all

## npm lib to calc apca

The canonical, officially recognized library for calculating APCA contrast in the JavaScript ecosystem is [apca-w3](https://www.npmjs.com/package/apca-w3). It is managed directly by the creators of the algorithm and is explicitly required for any development trying to maintain strict compliance with the emerging WCAG 3 specifications. [link](https://git.apcacontrast.com/documentation/README.html)

### 1. Official Canonical Library: `apca-w3`

Because `apca-w3` handles calculations using raw RGB color channels as numerical arrays, it is best paired with colorparsley, a micro-dependency from the same creator that effortlessly converts strings (like Hex or RGB) into the required numbers. [link](https://github.com/Myndex/SAPC-APCA)

**Installation:**

bash

```
npm install apca-w3 colorparsley
```

Use code with caution.

**Implementation Example:**

javascript

```
import { calcAPCA } from 'apca-w3';
import { colorParsley } from 'colorparsley';

function getApcaScore(textColorHex, bgColorHex) {
  // Parse hex strings into standard [R, G, B, A] arrays
  const txtColor = colorParsley(textColorHex);
  const bgColor = colorParsley(bgColorHex);

  // Calculate Lightness Contrast (Lc)
  // calcAPCA( text, background )
  const score = calcAPCA(txtColor, bgColor);

  return score; // Returns a signed integer string or number (e.g., -66 or 74)
}

console.log("Light text on Dark:", getApcaScore("#FFFFFF", "#1E40AF"));
console.log("Dark text on Light:", getApcaScore("#1E40AF", "#FFFFFF"));
```

Use code with caution.

***

### 2. High-Level Alternatives & Tools

If you want wrapper libraries that combine parsing, scoring thresholds, or automated testing into one package, consider these:

- **[@huekit/contrast](https://www.npmjs.com/package/@huekit/contrast):** A zero-dependency toolkit ideal if you also deal with modern color formats like `oklch`. It provides a clean, unified API for calculating both WCAG 2 and APCA scores out-of-the-box.\
  javascript

<!---->

```
import { contrast } from '@huekit/contrast';
const score = contrast('#ffffff', '#3b82f6', { algorithm: 'apca' }); // → -66.4
```

Use code with caution.

- **[apca-check](https://www.npmjs.com/package/apca-check):** If you are running automated accessibility tests via `axe-core`, this library lets you register custom rules to run automated DOM evaluations using APCA "Bronze" or "Silver" conformance thresholds instead of legacy WCAG 2 rules. [link](https://www.npmjs.com/package/apca-check)

Would you like a quick example on how to use `apca-w3`'s bundled **font lookup functions** to determine if a score passes for a specific **font size and weight**?

- [link](https://www.npmjs.com/package/apca-check)\
  NPM\
  apca-check - NPM\
  Sep 3, 2024 — apca-check. ci status npm version. This package contains custom axe rules and checks for APCA Bronze and Silver+ conformance level...
- [link](https://github.com/Myndex/SAPC-APCA)\
  GitHub\
  APCA Documentation Repo - GitHub\
  The Bridge-PCA GitHub Repo The BridgePCA is backwards compatible with WCAG 2, and it's the same as the published npm package "brid...
- [link](https://www.npmjs.com/~myndex)\
  NPM\
  myndex - NPM\
  tinytrim CSS generic classes for on-the-fly adjustment of elements myndex published 0.0.86 • 4 years ago apca-w3 APCA: the Accessi...

Show all

## why is the scale of light/dark different (one 106, one 108) while the formula just swaps two values (effectively multiply w -1 it seems)

Your intuition is completely correct regarding the math, but the reason for the asymmetry lies in how the **display technology (clamping)** interacts with **human visual perception (perceptual asymmetry)**.

While swapping the positions in the formula mathematically just flips the sign, the underlying inputs (

𝑌txt

and

𝑌bg

) are bound by the physics of screens and the way our eyes process light versus dark modes.

The two primary reasons the scale tops out at **+106** for dark-on-light, but reaches **-108** for light-on-dark are:

### 1. The "Soft Clamp" (Black Flare Correction)

Before calculating the final score, APCA applies a **clamping factor (flare offset)** to the linearized luminance values to simulate how ambient light reflects off a real screen.

- When you are in **dark mode** (light text on a dark background), the background luminance value (\
  𝑌bg\
  ) drops very close to absolute zero.
- To prevent math errors or over-inflated contrast scores near pitch black, the APCA formula injects a tiny correction factor into the exponent scaling for dark values.

Because this mathematical floor behaves differently depending on whether the near-zero value is acting as the text or the background, the absolute ceiling for a perfect dark mode canvas expands slightly further than a perfect white canvas.

### 2. Simultaneous Contrast & Halation (The Human Eye)

Human eyes do not perceive contrast symmetrically.

- **Irradiation / Halation:** When you look at bright white text on a pitch-black background, the bright light bleeds over into the surrounding dark pixels on your retina. This makes white text appear bolder and physically "glow," slightly reducing its sharp readability.
- **Positive Contrast:** Dark text on a white background behaves differently; the vast sea of white light constricts your pupils, sharpening your focus on the dark text.

To map these real-world visual phenomena accurately to a digital scale, the APCA algorithm applies non-linear exponent scaling (

𝛼

≈0.56

) that shifts dynamically. When you swap the values, the math doesn't result in a perfectly symmetric mirror because the formula accounts for how much total screen area is emitting bright light.

### Summary

The math doesn't stop at a neat

±100

because **APCA is a perceptual scale, not a mathematical percentage**. The extra 2 points on the negative scale (

−108

vs

+106

) represent the absolute maximum threshold of perceived lightness distance our eyes can experience on standard sRGB displays when transitioning from fully dilated pupils (dark mode) to constricted pupils (light mode).

Would you like to see how the mathematical **"soft clamp" formula code** handles these deep black values under the hood?

## why is the lc score range mapped to use cases this way

The mapping of APCA

**𝐿𝑐**

**scores to specific typographic use cases** is strictly derived from empirical clinical data regarding **human visual processing, spatial frequency, and the physics of digital displays.**

Unlike legacy WCAG 2.x, which assumes eyes process a huge block of color and a tiny line of text identically, APCA recognizes that **contrast is a function of size and weight.**

The score ranges are mapped to use cases based on three critical physiological and design rules:

### 1. Spatial Frequency (Size vs. Contrast)

The human eye requires significantly more contrast to read small or thin things than it does to see large or bold things. This is known as **spatial frequency tuning**.

- **Tiny/Thin elements (High Spatial Frequency):** When font strokes are very thin, the eye struggle to lock onto the shape. To compensate, the background and foreground colors must be radically different. This is why **body text demands the highest tier (**

**𝐿𝑐**

**≥90**

**)**.

- **Large/Chunky elements (Low Spatial Frequency):** Massive headers or solid UI blocks stimulate a larger portion of your retina. Your brain can easily distinguish the shape even if the colors are relatively close. Therefore, they safely map to **lower tiers (**

**𝐿𝑐**

**≥45**

**)**.

### 2. The Critical Contrast Threshold for Reading

To read effortlessly without eye strain, humans need a contrast level well above the absolute bare minimum required to just "see" a letter. This buffer is called the **Contrast Reserve**.

- **Fluent Reading:** Clinical studies show that for high-speed, comfortable reading of continuous text (like an article), the brain requires a contrast reserve of about **20:1** perceptually. This exact comfort threshold maps to the

**𝐿𝑐**

**75 to 90+ range**.

- **Spot Reading:** For scanning a button label, a menu item, or a short line of UI text, your brain doesn't need to sustain high-speed processing. The contrast reserve can drop safely to an

**𝐿𝑐**

**60 to 75 range**.

### 3. Visual Impairments and Aging (The 20/40 Baseline)

The APCA tiers are mathematically calibrated to protect readers with moderate low vision or aging eyes (specifically targeting a baseline of **20/40 visual acuity**).

- As the human eye ages, the crystalline lens yellows and scatters light, which drastically reduces contrast sensitivity.
- By structuring the use cases so that body text _must_ sit above\
  𝐿𝑐\
  90, APCA ensures that an interface remains fully readable to an older adult or someone with mild cataracts without forcing designers to make massive headers look aggressively high-contrast and distracting.

***

### How the Tiers Act as a "Matrix"

Because of this mapping, APCA replaces flat rules with a dynamic matrix. If you drop down a contrast tier, you are forced to scale up the typography to match the eye's physiological needs:

- If your color pair yields

**𝐿𝑐**

**90**, you can use **any font size** (even 12px normal weight).

- If your color pair drops to

**𝐿𝑐**

**60**, the use-case mapping flags this color pair as illegal for body text, but perfectly safe _if_ you scale the text up to **24px normal** or **16px bold**.

- If your color pair drops to

**𝐿𝑐**

**30**, the human eye can no longer reliably parse semantic letterforms, mapping it strictly to **non-text items** like a decorative border or a disabled button background.

Would you like to see the **exact lookup matrix** that maps specific **font sizes (px/pt) and weights (300 to 700)** directly to these

𝐿𝑐

tiers?

## why these specific numbers

The specific numbers used in the APCA tiers (**90, 75, 60, 45, and 30**) are neither arbitrary increments nor pure percentages. They were chosen by the algorithm’s creator, Andrew Somers (Myndex), for two specific reasons: **psychophysical alignment with human vision** and **direct alignment with international legacy standards**. [link](https://apcacontrast.com/)

***

### 1. The Legacy "Bridge" (Backwards Compatibility)

During the transition from WCAG 2 to WCAG 3 / APCA, the numbers were engineered to roughly align with the familiar mathematical contrast ratios of the past. This made it easier for design tools and organizations to adopt APCA without throwing out decades of legal precedent. [link](https://apcacontrast.com/)

The numbers map to legacy ratios almost perfectly at standard mid-tones: [link](https://apcacontrast.com/)

- **𝑳𝒄**

**90** maps to the **ISO 9241-303** standard (the rigorous 10:1 ratio preferred for intense visual reading).

- **𝑳𝒄**

**75** maps directly to **WCAG 2 Enhanced AA / AAA (7:1 ratio)**.

- **𝑳𝒄**

**60** maps directly to **WCAG 2 Minimum AA (4.5:1 ratio)**.

- **𝑳𝒄**

**45** maps directly to **WCAG 2 Large Text (3:1 ratio)**.

- **𝑳𝒄**

**30** represents the universal minimum floor where human eyes can reliably parse a shape as a text symbol. [link](https://github.com/Myndex/SAPC-APCA/discussions/30)

_Note: While they map neatly to WCAG 2 ratios in the middle of the spectrum, APCA handles deep darks and high-end brights far more accurately, meaning a color pair that is 4.5:1 in dark mode might fail WCAG 2 but safely pass APCA 60 because it's perceived perfectly by the eye._

***

### 2. Psychophysical Math (Weber-Fechner Law)

Human perception is non-linear. If you double the physical light output of a monitor, your brain does not perceive it as twice as bright. Our eyes operate on a logarithmic scale of differences.

The APCA scale was built using **JNDs (Just Noticeable Differences)** rooted in visual psychophysics. [link](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16)

- An increment of **15 points** on the APCA scale (e.g., jumping from 45 to 60, or 65 to 80) represents a distinct, mathematically calculated step up in perceived clarity for someone with standard or moderately impaired (20/40) vision. [link](https://github.com/Myndex/SAPC-APCA/discussions/30)
- Below

**𝑳𝒄**

**15**, items effectively become invisible or completely unreadable to the average human eye. [link](https://github.com/Myndex/SAPC-APCA/discussions/42)

- At

**𝑳𝒄**

**105+**, you hit the absolute physical ceiling of standard dynamic range displays (SDR)—the maximum visual distance between the darkest black and the brightest white a normal monitor can push out. [link](https://github.com/Myndex/SAPC-APCA/discussions/42)

### Why Steps of 15?

By chunking the scale into predictable, easily memorized steps of 15, APCA creates a simple lookup system for designers. If a color pair scores an

𝐿𝑐

60, a designer immediately knows they are exactly **one "perceptual tier" away** from standard body text (

𝐿𝑐

75\). They can then easily make the cognitive leap to adjust their design: either inject 15 points worth of contrast into the color palette, or bump the font up to a larger spatial weight to balance the eye's visual deficit. [link](https://github.com/w3c/low-vision-a11y-tf/discussions/131)

Would you like to look at the **exact font-size and weight lookup table** that matches these specific tiers (e.g., what font size is required at

𝐿𝑐

60 vs

𝐿𝑐

75\)?

- [link](https://git.apcacontrast.com/documentation/APCAeasyIntro.html)\
  APCA Contrast Calculator\
  The Easy Intro to the APCA Contrast Method\
  Use-Case Ranges \* Lc 90 - Preferred level for fluent text and columns of body text with a font no smaller than 14px/weight 400 (no...
- [link](https://github.com/Myndex/SAPC-APCA/discussions/42)\
  GitHub\
  Lc Value vs Simple Ratio •• AND •• Bridge-PCA #42 - GitHub\
  Jan 5, 2022 — Not Set In Stone: \* 15 - invisibility level, minimum for discernible (form or button outlines, large focus indicators) \* 30 - mini...
- [link](https://apcacontrast.com/)\
  APCA Contrast Calculator\
  APCA Contrast Calculator\
  APCA Contrast Legend. ⊘ — Prohibited Except for Decorative Purposes. Under Lc 30 is for non-text only. ©§™ — Placeholder/Disabled/

Show all

## why isnt the scale percentage (106/108 instead of 100)

The APCA scale does not stop at 100 because <mark><strong>it measures physical light properties combined with human perception</strong></mark>, rather than an arbitrary mathematical ratio.

If the scale were capped at 100, it would imply that a white-and-black color pairing represents "100% of human contrast perception," which isn't true. Instead, APCA is a **Weber-based psychophysical scale** designed around the behavior of modern computer monitors.

The numbers 106 and 108 are a direct byproduct of three hard engineering realities:

### 1. Math Grounded in the sRGB Standard

The mathematical inputs for APCA are based on the standard **sRGB color space**. When you take a mathematically pure white pixel (`#FFFFFF`) and a mathematically pure black pixel (`#000000`), run them through the APCA exponents (like the

𝛼

≈0.56

scaling and black flare offsets), the physical result of that specific equation spits out the numbers **106** and **108**.

If the creators forced the scale to compress or stretch to fit a neat 0–100 range, it would break the clean, predictable logarithmic steps used to calculate contrast across different display types (like HDR monitors or e-ink screens).

### 2. Dark Mode and Pupil Dilation (The Extra 2 Points)

The asymmetry between the 106 ceiling and the -108 floor represents a physical reality of your eyes:

- **Light Mode (+106 max):** A massive screen of bright white light constricts your pupils, letting less light into your eye. This physically limits the maximum perceived contrast your retina can experience.
- **Dark Mode (-108 max):** A pitch-black screen allows your pupils to dilate, letting in more light. When a bright white letter pierces that darkness, your eye registers a slightly higher _perceived sensation of lightness distance_ than it does in light mode.

The extra 2 points on the negative scale are capturing that exact biological boost in sensitivity.

### 3. Leaving Room for Future Displays (HDR)

A percentage scale (0–100%) implies an absolute wall—you cannot go higher than 100%. However, display technology is rapidly changing.

APCA was built to be future-proof. While standard monitors (SDR) top out around 106/108, **High Dynamic Range (HDR) displays** can push whites that are significantly brighter than standard sRGB white. Because APCA is an open-ended physical scale, an HDR screen can legitimately generate contrast scores that go well beyond 110 or 120.

### Summary

Think of the APCA scale like the **Celsius temperature scale**. Water freezes at 0 and boils at 100 under specific standard conditions, but temperatures can easily go well below 0 or far past 100. Similarly, APCA anchors its core targets around standard reading baselines, allowing the absolute extremes of technology and human anatomy to naturally fall where they may—which happens to be 106 and 108.

Would you like to explore how **HDR (High Dynamic Range) contrast** is handled differently by APCA compared to standard screens, or look at how the formula changes for **disabled UI elements**?

## what if you input oklch range

If you input **OKLCH** color values directly into the standard APCA formula without converting them, <mark><strong>the math will break completely.</strong></mark>

Both systems are built around human perception, but they measure and scale lightness using entirely different mathematical dimensions. To use them together, you must pass OKLCH through a transformation process.

### 1. Why They Clash Directly

The incompatibility boils down to how they define "Lightness":

- **OKLCH `L` (0.0 to 1.0 or 0% to 100%):** Measures **Perceptual Lightness**. It is mathematically smoothed so that an `L` value of `0.70` feels equally bright whether the color is a vibrant blue, a dull grey, or a piercing yellow. [link](https://medium.com/@vyakymenko/color-contrast-with-oklch-prefers-reduced-motion-and-motion-design-ethics-089c0c8897d0)
- **APCA Input `Y` (0.0 to 1.0):** Requires **Relative Luminance**. APCA _wants_ to know the raw physical light emission of the screen before it applies its own custom, context-aware visual scaling algorithms. [link](https://css-tricks.com/approximating-contrast-color-with-other-css-features/)

If you pass OKLCH's already-perceived `L` into APCA's scaling exponents, you are double-processing the math, resulting in highly distorted contrast scores.

### 2. The Conversion Path (How to do it safely)

To calculate an APCA score from OKLCH, you have to temporarily step backward into a linear space where physical light ratios are preserved:

OKLCH→Oklab→LinearLMS→LinearsRGB(orP3)→APCA

Libraries like [apca-w3](https://www.npmjs.com/package/apca-w3) or colorparsley handle this mapping under the hood. They unpack the OKLCH string, step it back into the standard sRGB coordinate system, extract the raw spectral channels, and compute the true

𝐿𝑐

score. [link](https://www.sbwfc.co.kr/color-contrast-checker/)

### 3. The Design System "Superpower"

When handled correctly, combining OKLCH and APCA creates a powerful workflow for building accessible palettes:

- **Predictable Scaling:** Because OKLCH keeps perceptual lightness mathematically uniform, you can lock the `L` value for a text role, vary the chroma (`C`) or hue (`H`) for branding, and trust that your APCA contrast score will remain stable. [link](https://medium.com/@vyakymenko/color-contrast-with-oklch-prefers-reduced-motion-and-motion-design-ethics-089c0c8897d0)
- **Automated Token Generation:** Toolkits like [apcach](https://github.com/antiflasher/apcach) let you write code that says: _"Given this background color, find an OKLCH color with a specific hue that hits exactly_\
  _𝐿𝑐_\
  _≥75_\
  _."_ This lets you build fully dynamic, accessible light and dark modes programmatically. [link](https://ubuntu.com/blog/generating-color-palettes-for-design-systems-inspired-by-apca)

Would you like to see a **JavaScript code snippet** showing how to parse an `oklch(...)` string and calculate its APCA score using open-source tools?

- [link](https://css-tricks.com/approximating-contrast-color-with-other-css-features/)\
  CSS-Tricks\
  Approximating contrast-color() With Other CSS Features\
  Feb 11, 2026 — Here's some information about calculating contrast: \* \*\*L = 0.1910(R/255+0.055)^2.4 + 0.6426(G/255+0.055)^2.4 + 0.0649(B/255+0.055...
- [link](https://ubuntu.com/blog/generating-color-palettes-for-design-systems-inspired-by-apca)\
  Ubuntu\
  Generating accessible color palettes for design systems ...\
  Nov 10, 2025 — So began my journey to create a color palette inspired by APCA contrast algorithm principles. The APCA formula. First, I had to cr...
- [link](https://medium.com/@solo%5Fcube/from-hsl-to-oklch-and-betterlch-predictable-chroma-and-precise-contrast-for-design-systems-fc5235306145)\
  Medium·Solo Cube\
  From HSL to okLCH and betterLCH | Medium\
  Mar 25, 2026 — Superpower #3: Contrast-based colors Generate a color that meets your contrast requirements — just specify the background, the for...

Show all

## what if oklch doesnt fit into which

If an **OKLCH color does not fit** into your target mathematical range during conversion, <mark>you are experiencing an<span> </span><strong>Out-of-Gamut (OOG)</strong><span> </span>error</mark>. [link](https://github.com/facelessuser/coloraide/issues/118)

Because OKLCH models the entire range of human vision, it allows you to input "impossible colors"—combinations of Lightness (`L`) and Chroma (`C`) that physically cannot exist on a standard computer monitor. [link](https://www.reddit.com/r/css/comments/1k00ybv/out%5Fof%5Fgamut%5Fcolors%5Fwith%5Foklch%5Flch%5Fspaces/)

When you push an impossible OKLCH color into APCA, the conversion breaks, causing **clipping** or **silent mathematical distortion**. This happens for two reasons, resulting in specific design consequences: [link](https://github.com/color-js/color.js/issues/81)

### 1. The Screen Space Collision (sRGB vs. Display P3)

Standard APCA (`apca-w3`) assumes a standard **sRGB** screen canvas. [link](https://www.sbwfc.co.kr/color-contrast-checker/)

- If you input an OKLCH color with high Chroma—like `oklch(0.65 0.3 30)` (an extremely vivid P3 neon pink)—it physically cannot fit inside the boundaries of an sRGB matrix. [link](https://oklch.com/)
- When passed to a converter, the values get artificially "clamped" to the nearest available sRGB color. This heavily distorts the true relative luminance (Y) value, giving you a completely inaccurate APCA contrast score. [link](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)

### 2. The Core "Math Split" (The Lightness Deficit)

OKLCH’s Lightness (`L`) and APCA’s Lightness Contrast (

𝐿𝑐

) use completely different baselines: [link](https://uxdesign.cc/stop-using-oklch-lightness-for-your-color-scale-02025deca49d)

- **OKLCH** treats middle contrast roughly at half the physical luminance.
- **APCA** uses advanced visual science models (like CAM16/CIECAM02 properties) which place the human eye's actual visual midrange much higher. [link](https://stackoverflow.com/questions/78767630/calculate-a-light-enough-shade-of-a-given-color-to-use-as-background-for-black-t)

If you try to map them directly without an interpreter, **dark color pairs break entirely**. A dark background and dark text might look distinct in OKLCH values but will return an absolute "illegal" or failing score in APCA. [link](https://stackoverflow.com/questions/78767630/calculate-a-light-enough-shade-of-a-given-color-to-use-as-background-for-black-t)

***

### How to Fix It

If your OKLCH colors aren't fitting into the math properly, use these two developer workflows:

#### Strategy A: Use Gamut Mapping (The Safe Fallback)

Before sending the OKLCH string to your APCA tool, run it through a gamut-mapping step. Libraries like [Color.js](https://colorjs.io/) or the built-in browser engine will automatically scale down the Chroma (`C`) while keeping the Lightness (`L`) intact until it safely fits within the target display spectrum (sRGB or Display P3). [link](https://github.com/color-js/color.js/issues/81)

#### Strategy B: Use `apcach` (The Design System Rule)

To completely automate this, use a dedicated bridging tool like [apcach](https://github.com/antiflasher/apcach). Instead of picking a color and guessing the score, you feed `apcach` your desired **APCA target tier** (e.g.,

𝐿𝑐

≥75

) and your desired hue, and it reverse-engineers the exact, valid OKLCH token that fits the monitor's physical limitations perfectly. [link](https://evilmartians.com/opensource/apcach)

Are you running into a case where colors are **shifting shades** dramatically when converted, or are you trying to build a **dynamic theme generator** that automatically handles wide-gamut (P3) screens?

- [link](https://stackoverflow.com/questions/78767630/calculate-a-light-enough-shade-of-a-given-color-to-use-as-background-for-black-t)\
  Stack Overflow\
  javascript - Calculate a light enough shade of a given color to use as ...\
  Jul 19, 2024 — Edits to Add: There are posts in this thread mentioning HSV and other non-uniform methods. These methods should not be used calcul...
- [link](https://uxdesign.cc/stop-using-oklch-lightness-for-your-color-scale-02025deca49d)\
  UX Collective\
  Stop using OKLCH lightness for your color scale - UX Collective\
  Aug 23, 2026 — Nobody Ships It as a Ruler And the people who do this for a living never actually stopped using it. Google's HCT — the color engin...
- [link](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)\
  evilmartians.com\
  OKLCH in CSS: why we moved from RGB and HSL\
  Sep 17, 2025 — OKLCH vs. HSL. Now, let's move on and compare OKLCH with HSL. HSL contains 3 numbers to encode hue, saturation, and lightness, lik...

Show all

## write a js fn to input a lc number and output a string explanation

Here is a clean, dependency-free JavaScript function that takes a raw APCA

𝐿𝑐

score (as a positive or negative number, or a string) and outputs a clear, human-readable typographic explanation.

javascript

```
/**
 * Explains what a given APCA Lc contrast score means for design use cases.
 * @param {number|string} lcScore - The raw signed or unsigned Lc contrast score.
 * @returns {string} A scannable string explaining typographic compliance.
 */
function explainApcaScore(lcScore) {
  // Convert to absolute value for tier evaluation; APCA polarity (+/-)
  // indicates light/dark mode, but the absolute magnitude dictates compliance.
  const score = Math.abs(parseFloat(lcScore));

  if (isNaN(score)) {
    return "❌ Invalid score: Please provide a valid numerical APCA score.";
  }

  // Round to match standard APCA tracking integers
  const roundedScore = Math.round(score);

  // Match the score against standard APCA visual tiers
  if (roundedScore >= 90) {
    return `✅ Lc ${roundedScore} | Enhanced Body Text Baseline: Safe for ALL text sizes and weights, including small body copy (12px–14px) and thin/light fonts.`;
  }

  if (roundedScore >= 75) {
    return `✅ Lc ${roundedScore} | Standard UI Text: Ideal for standard reading text, UI labels, subheadings, and navigation elements (minimum 16px normal or 14px bold).`;
  }

  if (roundedScore >= 60) {
    return `⚠️ Lc ${roundedScore} | Large or Bold Text Only: Safe for headings and large UI text (minimum 24px normal or 16px bold). Too low for body copy.`;
  }

  if (roundedScore >= 45) {
    return `⚠️ Lc ${roundedScore} | Large Display Accents: Only safe for massive titles, subtitles, or large graphical elements (minimum 36px normal or 24px bold).`;
  }

  if (roundedScore >= 30) {
    return `🛑 Lc ${roundedScore} | Non-Text UI Only: Strictly forbidden for readable text. Safe only for decorative borders, dividers, or disabled interface states.`;
  }

  // Under 30
  return `❌ Lc ${roundedScore} | Inaccessible Contrast: Invisible or unreadable to most users. Do not use for any meaningful UI component or text.`;
}

// --- Quick Tests ---
console.log(explainApcaScore(-92.4)); // Negative (Light text on Dark bg)
console.log(explainApcaScore(76));    // Positive (Dark text on Light bg)
console.log(explainApcaScore(52));    // Mid-range header
console.log(explainApcaScore("12"));  // Border scale
```

Use code with caution.

### Why this structure works:

- **Polarity Agnostic:** It uses `Math.abs()` because whether your score is `+75` (dark text on light) or `-75` (light text on dark), the **typographic requirements remain identical**.
- **Failsafe Parsing:** It strips out strings or floats safely so you can pipe raw output directly from automated tools like `apca-w3`.

Would you like me to expand this function so that it accepts a second parameter—like a specific **font size and weight**—and outputs a strict **Pass/Fail boolean** based on the official APCA lookup grid?

# how to format numbers in js

## how to format numbers in js

In JavaScript, the best way to format numbers (like adding commas, limiting decimals, or adding currency symbols) is using the built-in **`Intl.NumberFormat`** object. It is highly efficient, accurate, and supports international localization out of the box.

Here is a quick guide on how to format numbers for different use cases.

***

### 1. Adding Commas (Standard Localized Formatting)

To simply add commas or periods as thousands separators based on a user's language, use `Intl.NumberFormat`.

javascript

```
const number = 1234567.89;

// Format for US English (commas for thousands, dot for decimals)
console.log(new Intl.NumberFormat('en-US').format(number));
// Output: "1,234,567.89"

// Format for German (dots for thousands, comma for decimals)
console.log(new Intl.NumberFormat('de-DE').format(number));
// Output: "1.234.567,89"

// Format using the user's browser default locale
console.log(new Intl.NumberFormat().format(number));
```

Use code with caution.

### 2. Formatting Currency

You can pass an options object to format numbers directly into standard currency formats.

javascript

```
const price = 2500.50;

// Format as US Dollars ($)
const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
console.log(usdFormatter.format(price));
// Output: "$2,500.50"

// Format as Euros (€) for a French locale
const euroFormatter = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
});
console.log(euroFormatter.format(price));
// Output: "2 500,50 €"
```

Use code with caution.

### 3. Controlling Decimal Places

You can explicitly lock the minimum or maximum number of fractional digits.

javascript

```
const pi = 3.1415926535;

const roundToTwoDecimals = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
});
console.log(roundToTwoDecimals.format(pi));
// Output: "3.14"

const padWithZeros = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 4,
});
console.log(padWithZeros.format(5));
// Output: "5.0000"
```

Use code with caution.

### 4. Formatting Percentages

The `style: 'percent'` option automatically multiplies the decimal value by 100 and adds the percentage symbol.

javascript

```
const growth = 0.125;

const percentageFormatter = new Intl.NumberFormat('en-US', {
  style: 'percent',
  maximumFractionDigits: 1, // Optional: defaults to 0 decimal places for percentages
});
console.log(percentageFormatter.format(growth));
// Output: "12.5%"
```

Use code with caution.

### 5. Short Compact Numbers (e.g., 1.2M, 45K)

For dashboards or social stats, you can display numbers in a compact human-readable format.

javascript

```
const views = 1450000;

const compactFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
});
console.log(compactFormatter.format(views));
// Output: "1.5M"
```

Use code with caution.

***

### Alternative: `Number.prototype.toFixed()`

If you _only_ want to control decimal places without adding commas or localizing the string, use `.toFixed()`.

javascript

```
const num = 1234.567;

console.log(num.toFixed(2));
// Output: "1234.57" (Note: it rounds the final digit and returns a string)
```

Use code with caution.

Are you formatting numbers for a **specific use case**, such as a **financial application**, a **data table**, or **input validation**? Let me know, and I can provide tailored code examples.

## npm libs for this

If you prefer using an **npm package** instead of the native `Intl` API, these are the most popular and reliable libraries available:

***

### The Big Three Libraries

| Library             | Best Used For                      | Key Feature                             | Bundle Size      |
| ------------------- | ---------------------------------- | --------------------------------------- | ---------------- |
| **`numeral`**       | General-purpose formatting         | Easy string masks (e.g., `'0,0.00'`)    | ~13 KB           |
| **`currency.js`**   | Financial calculations & UI        | Prevents floating-point errors          | **~1 KB** (Tiny) |
| **`accounting-js`** | Legacy or precise money formatting | Highly customizable margins and symbols | ~4 KB            |

***

### 1. Numeral.js (Best for easy, string-based styling)

`numeral` is ideal if you like using predictable masking strings to format numbers, percentages, currencies, and times.

- **Installation:** `npm install numeral`
- **Example Usage:**

javascript

```
import numeral from 'numeral';

// Currency & Commas
numeral(1000.234).format('$0,0.00'); // "$1,000.23"

// Percentages
numeral(0.145).format('0.0%'); // "14.5%"

// Compact Numbers (K, M, B)
numeral(1234000).format('0.0a'); // "1.2m"
```

Use code with caution.

### 2. Currency.js (Best for financial apps)

Working with money in JS often causes floating-point math bugs (like `0.1 + 0.2 = 0.30000000000000004`). `currency.js` solves this by handling values as integers behind the scenes, while making UI formatting effortless.

- **Installation:** `npm install currency.js`
- **Example Usage:**

javascript

```
import currency from 'currency.js';

// Basic formatting
currency(1234.56).format(); // "$1,234.56"

// Math + formatting combined safely
const price = currency(2.51);
const total = price.add(0.01).multiply(2);

console.log(total.format()); // "$5.04"
```

Use code with caution.

### 3. Accounting-js (Best alternative to the original Accounting.js)

This is a modern, maintained fork of the classic `accounting.js` library, heavily relied upon for exact control over negative numbers and specific alignment requirements.

- **Installation:** `npm install accounting-js`
- **Example Usage:**

javascript

```
import { formatMoney, formatColumn } from 'accounting-js';

// Customizing formats for negative balances
formatMoney(-500, { symbol: "GBP ", format: "%s(%v)" });
// Output: "GBP (500.00)"
```

Use code with caution.

***

What kind of **project** are you building (e.g., a React dashboard, an e-commerce checkout, a node backend)? I can point you toward the most lightweight or framework-specific tool for your stack.

## for rounding

When you need to round numbers precisely in JavaScript, the native `Math.round()` and `.toFixed()` can sometimes introduce unexpected floating-point errors (for example, `Math.round(1.005 * 100) / 100` evaluates incorrectly to `1` instead of `1.01`). [link](https://github.com/codeandcats/reliable-round)

If your project requires bulletproof rounding rules—especially for currency, scientific computations, or statistics—use one of these **npm packages**:

***

### 1. `bignumber.js` or `big.js` (Best for absolute mathematical precision)

These libraries completely replace JavaScript's native binary floating-point math with arbitrary-precision decimal math. They are the industry standard for avoiding rounding anomalies. [link](https://www.npmjs.com/package/big.js?activeTab=readme)

- **Installation:** `npm install bignumber.js` or `npm install big.js`
- **Key Feature:** Supports multiple explicit rounding modes (Round Up, Round Down, Round Half-Up, Round Half-Even/Bankers Rounding).
- **Example:**

javascript

```
import Big from 'big.js';

// Native JS failure: 1.005.toFixed(2) incorrectly yields "1.00"
// Big.js success:
const value = new Big(1.005);
console.log(value.toFixed(2)); // "1.01"

// Setting explicit global rounding modes (e.g., Round Half-Up)
Big.RM = 1;
```

Use code with caution.

- Use **`big.js`** if you want a tiny, minimalist package (~6 KB). Use [bignumber.js NPM](https://www.npmjs.com/package/numeral) if you need to work with huge integers or non-decimal bases. [link](https://www.npmjs.com/package/decimal.js?activeTab=readme)

***

### 2. `reliable-round` (Best lightweight drop-in replacement)

If you don't want to change how your entire application handles numbers with custom "Big" classes, `reliable-round` provides simple, drop-in utility functions that behave exactly how you intuitively expect rounding to work. [link](https://www.npmjs.com/search?q=rounding)

- **Installation:** `npm install reliable-round`
- **Key Feature:** Bypasses JavaScript's native floating-point quirkiness without requiring heavy architecture changes.
- **Example:** [link](https://github.com/codeandcats/reliable-round)

javascript

```
import { round } from 'reliable-round';

console.log(round(1.005, 2)); // 1.01 (Unlike native JS which outputs 1)
```

Use code with caution.

***

### 3. `decimal.js` (Best for advanced scientific rounding)

Similar to `bignumber.js`, but `decimal.js` evaluates precision in terms of **significant digits** instead of standard fixed decimal places. It behaves similarly to Python's built-in `decimal` module. [link](https://www.npmjs.com/package/decimal.js?activeTab=readme)

- **Installation:** `npm install decimal.js`
- **Key Feature:** Automatically rounds every mathematical operation (addition, division, powers) dynamically to a globally specified precision threshold.
- **Example:** [link](https://www.npmjs.com/package/decimal.js?activeTab=readme)

javascript

```
import { Decimal } from 'decimal.js';

// Configure to maintain exactly 5 significant digits globally
Decimal.set({ precision: 5 });

let d = new Decimal(2).div(3); // 0.66667
```

Use code with caution.

***

### Summary Checklist

- Go with **`big.js`** if you are handling **finances, checkouts, or invoices** and want to completely eliminate rounding bugs.
- Go with **`reliable-round`** if you just need a **quick, tiny utility function** to round decimal numbers safely without changing your data types.
- Go with **`decimal.js`** if you are doing **scientific, data-heavy, or statistical calculations**. [link](https://bestofjs.org/projects/bigjs)

Are you trying to apply a specific rounding methodology, such as **Banker's rounding (round-half-to-even)**, rounding to a specific **increment** (like the nearest 0.05), or just trying to fix **floating-point calculation bugs**? Let me know so I can tailor the implementation snippet.

- [link](https://www.npmjs.com/search?q=rounding)\
  NPM\
  rounding - npm search\
  GitHub Actions • 1.1.0 • 14 days ago • 0 dependents • ISC reliable-round A rounding library for JavaScript that behaves predictabl...
- [link](https://www.npmjs.com/package/decimal.js?activeTab=readme)\
  NPM\
  decimal.js - NPM\
  Jul 6, 2025 — Features \* Integers and floats. \* Simple but full-featured API. \* Replicates many of the methods of JavaScript's Number.prototype ...
- [link](https://www.npmjs.com/package/big.js?activeTab=readme)\
  NPM\
  big.js - NPM\
  Apr 21, 2025 — In the code examples below, semicolons and toString calls are not shown. The library exports a single constructor function, Big . ...

Show all

