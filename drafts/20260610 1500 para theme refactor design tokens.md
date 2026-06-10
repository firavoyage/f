# which css unit should i use for button size

For standard UI button sizing, you should combine **`em`** for internal padding and **`rem`** for font size. This specific formula ensures that your buttons scale proportionally if the text size changes, while maintaining accessiblity across different device sizes and user zoom preferences. \[[1](https://blog.damato.design/posts/button-size-styles/), [2](https://dev.to/tomasdevs/css-units-when-and-how-to-use-them-3nj7), [3](https://dev.to/markliu2013/my-css-units-best-practices-1mdc)]

### The Best Practice Unit Blueprint

To build a perfectly responsive and accessible button, use a mix of relative units optimized for how the browser treats different properties: \[[1](https://www.cantech.in/blog/how-to-increase-button-size-in-html-easily/), [2](https://dev.to/markliu2013/my-css-units-best-practices-1mdc), [3](https://dev.to/tomasdevs/css-units-when-and-how-to-use-them-3nj7)]

- **`rem` for `font-size`**: This keeps the text relative to the root browser font size (usually `16px`). If a user increases their system text size for accessibility, your button text scales cleanly.
- **`em` for `padding`**: Because `em` is relative to the element's _own_ font size, using it for padding means the button's overall box expands or shrinks beautifully alongside its text.
- **`px` for `border-width` and `border-radius`**: Small structural elements look best when they stay sharp and crisp, rather than stretching heavily on zoom. \[[1](https://www.reddit.com/r/webdev/comments/91ijaz/which%5Fcss%5Funit%5Fis%5Fbest%5Fpractice%5Fvw%5Fem%5Fpx/), [2](https://stackoverflow.com/questions/20849889/different-button-sizes-depending-on-which-unit-im-using-why), [3](https://blog.damato.design/posts/button-size-styles/), [4](https://dev.to/markliu2013/my-css-units-best-practices-1mdc), [5](https://dev.to/tomasdevs/css-units-when-and-how-to-use-them-3nj7)]

### Implementation Example

Avoid using hardcoded `width` or `height` values; instead, let the padding dictate the button container's size naturally: \[[1](https://ashleemboyer.com/blog/don-t-use-fixed-css-height-or-width-on-text-containers/), [2](https://stackoverflow.com/questions/71636745/how-to-style-button-using-relative-css-units), [3](https://www.geeksforgeeks.org/css/how-to-fix-the-size-of-a-button-in-css/), [4](https://blog.damato.design/posts/button-size-styles/)]

css

```
.btn {
  /* Font size scales with root browser defaults */
  font-size: 1rem;

  /* Padding scales proportionally relative to the text size */
  padding: 0.5em 1.2em;

  /* Borders look sharp and remain fixed */
  border: 2px solid #0056b3;
  border-radius: 4px;

  /* Ensures consistency if used with icon assets */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Modifiers automatically scale everything just by altering font-size */
.btn-large {
  font-size: 1.25rem;
  /* Padding automatically scales up because it uses em! */
}
```

Use code with caution.

### Pro-Tip: Safe Minimum Target Sizes

No matter which units you select, always guard mobile usability by ensuring your buttons hit accessible hit targets. According to Web Content Accessibility Guidelines (WCAG), buttons should maintain a minimum visual and interaction target of at least **`24px` by `24px`** (or preferably `44px` to `48px` on core mobile layouts). You can enforce this safely by applying a protective utility property: \[[1](https://blog.damato.design/posts/button-width-styles/), [2](https://moderncss.dev/css-button-styling-guide/), [3](https://www.levelaccess.com/blog/designer-tips-improving-button-accessibility/), [4](https://uxtbe.medium.com/button-design-guide-6baca78bfc38)]

css

```
.btn {
  min-height: 2.75rem; /* ~44px-48px target zone depending on base root size */
}
```

Use code with caution.

If you are working on a specific layout, let me know:

- Are these buttons placed inside a **fluid grid/flex wrapper**, or standing **alone**?
- Are you aiming for **uniform square icon buttons** or **variable text-width buttons**? \[[1](https://www.reddit.com/r/css/comments/1fnkfxb/responsive%5Fbuttons/), [2](https://stackoverflow.com/questions/79796317/how-to-make-by-buttons-all-be-uniform-size-and-centred), [3](https://blog.damato.design/posts/button-width-styles/)]

I can tailor the exact CSS property combinations for your layout. \[[1](https://dev.to/tomasdevs/css-units-when-and-how-to-use-them-3nj7)]

- [link](https://www.reddit.com/r/webdev/comments/91ijaz/which%5Fcss%5Funit%5Fis%5Fbest%5Fpractice%5Fvw%5Fem%5Fpx/)\
  Which css unit is best practice? vw, em, %, px - Reddit\
  Jul 24, 2018 — I use % for widths as others have said (and occassionally vw/vh for larger layout concerns). Then I use rems for almost everything...\
  Reddit·r/webdev
- [link](https://www.reddit.com/r/css/comments/1fnkfxb/responsive%5Fbuttons/)\
  Responsive Buttons : r/css - Reddit\
  Sep 23, 2024 — Create a wrapper like button group en let button group decide what buttons should do. \* gatwell702. • 2y ago. button { font-size: ...\
  Reddit·r/css
- [link](https://stackoverflow.com/questions/20849889/different-button-sizes-depending-on-which-unit-im-using-why)\
  Different button sizes depending on which unit I'm using. Why?\
  Dec 31, 2013 — To further address your question: the reason that the height matches when you change the element to a div instead of a button is b...\
  Stack Overflow

Show all

## You said: what about using px for button padding

Using **`px`** for button padding is acceptable, but it creates a rigid button that does not scale well. \[[1](https://nativewptheme.net/support/wpbakery/buttons), [2](https://www.greengeeks.com/blog/margin-vs-padding/), [3](https://dev.to/boringcoder53/i-used-px-for-years-until-i-discovered-common-sense-d2l)]

### The Problem with `px` Padding

When you use `px` for padding, the spacing around your text stays completely frozen. If a user increases their browser text size for accessibility, or if you change the button's `font-size` later, the text grows while the padding stays exactly the same. \[[1](https://www.w3.org/Style/LieBos3e/em), [2](https://www.scaler.com/topics/margin-and-padding-in-css/), [3](https://advancedbytez.com/font-sizing-for-web-accessibility-using-css-em-and-rem-units/)]

This causes two common visual bugs:

- **The "Suffocated" Look**: Large text cramped inside tiny, unyielding spacing.
- **The "Bloated" Look**: Small text swimming inside massive, disproportionate gaps.

### Visual Comparison

**Rigid Layout (`px` Padding)**

css

```
.btn-rigid {
  font-size: 1rem;     /* 16px */
  padding: 8px 16px;   /* Frozen spacing */
}

/* If you create a large variant: */
.btn-rigid-large {
  font-size: 1.5rem;   /* 24px text */
  padding: 8px 16px;   /* Spacing is now way too small for this text! */
}
```

Use code with caution.

**Fluid Layout (`em` Padding — Recommended)**

css

```
.btn-fluid {
  font-size: 1rem;     /* 16px */
  padding: 0.5em 1em;  /* Resolves to 8px and 16px */
}

/* If you create a large variant: */
.btn-fluid-large {
  font-size: 1.5rem;   /* 24px text */
  padding: 0.5em 1em;  /* Automatically scales up to 12px and 24px! */
}
```

Use code with caution.

### When is `px` Padding Okay?

You can safely use `px` padding only if:

1. **Fixed-size layout**: Your project has zero requirement for text resizing or accessibility scaling.
2. **Standalone elements**: The button text will never change size across different screen layouts. \[[1](https://www.risingtidecreatives.com/blog/make-buttons-same-width-squarespace)]

To help adapt this to your project, let me know:

- Are you using a **CSS framework** (like Tailwind or Bootstrap), or writing **vanilla CSS**?

- Do you need to support **large accessibility text options** for your users?

- [link](https://nativewptheme.net/support/wpbakery/buttons)\
  Buttons – native support\
  Dec 21, 2016 — Style Button paddings Left padding – set the left padding for the button in px. Default left padding is inherited from Theme optio...\
  \
  \
  nativewptheme.net

- [link](https://www.greengeeks.com/blog/margin-vs-padding/)\
  Margin vs Padding: Understanding CSS Spacing\
  Jun 18, 2025 — Using em or rem can make your design more flexible. px is more rigid.\
  \
  \
  GreenGeeks

- [link](https://dev.to/boringcoder53/i-used-px-for-years-until-i-discovered-common-sense-d2l)\
  Stop using px unit in CSS !!!\
  Mar 25, 2025 — The Problem with px At first, pixels seem like the best unit of measurement. Set a button to 50px, and it will always be 50px. But...\
  \
  \
  DEV Community

Show all

## You said: how does px or rem work

### The Core Difference

**`px` (Pixels)** is an **absolute** unit. It stays exactly the same size regardless of user settings. \[[1](https://uxdesign.cc/figma-now-supports-rem-units-understanding-the-use-and-benefits-5957fc1ecb78), [2](https://htmlandcssguidebook.com/css/size-units/), [3](https://uxdesign.cc/why-designers-should-move-from-px-to-rem-and-how-to-do-that-in-figma-c0ea23e07a15), [4](https://www.linkedin.com/pulse/px-em-rem-why-developers-moving-over-just-pixels-riyasree-ghosh), [5](https://www.elegantthemes.com/blog/design/the-difference-between-absolute-relative-css-units)]

**`rem` (Root EM)** is a **relative** unit. It calculates its size dynamically based on the font size of the root HTML element. \[[1](https://css-tricks.com/the-lengths-of-css/), [2](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/), [3](https://webdesign.tutsplus.com/comprehensive-guide-when-to-use-em-vs-rem--cms-23984t)]

***

### How Pixels (`px`) Work

A CSS pixel does not represent a single physical screen pixel anymore; instead, it is a fixed, standard measurement unit defined by the web browser. \[[1](https://dev.to/anuraggharat651/mastering-css-units-a-complete-guide-1ldm), [2](https://medium.com/@madhum86/css-font-sizing-pixels-vs-em-vs-rem-vs-percent-vs-viewport-units-b1485716afe7), [3](https://wpengine.com/blog/choose-css-unit-create-better-site-layouts-how-to/), [4](https://uxcel.com/lessons/css-length--units-053), [5](https://medium.com/@linkors/going-deeper-in-zoom-on-a-website-97544d04eb1d)]

- **Behavior**: If you set a property to `16px`, it will render at exactly 16 pixels high or wide.
- **The Catch**: It is completely rigid. If a visually impaired user goes into their browser settings and changes their default text size from "Medium" to "Very Large," elements styled in `px` will ignore that preference and stay small. \[[1](https://blog.hubspot.com/website/css-rem), [2](https://elementor.com/tools/rem-to-px-converter/), [3](https://uxdesign.cc/building-a-design-system-where-to-start-part-3-size-and-spacing-a6f6f623491a)]

***

### How Root EMs (`rem`) Work

The `rem` unit multiplies whatever value you give it by the root () font size of the page. \[[1](https://antondevtips.com/blog/building-responsive-design-using-em-and-rem-css-units)]

- **The Baseline**: By default, almost every modern web browser sets the root HTML font size to **`16px`**.
- **The Formula**: `Value in rem × Root Font Size = Final Pixel Output` \[[1](https://blog.hubspot.com/website/css-rem), [2](https://netforemost.com/how-to-perfectly-use-rem-em-or-px/), [3](https://uipencil.com/2022/09/09/css-font-size-a-complete-unit-measurement-guide-for-px-pt-pc-em-rem-vw-vh-vmin-vmax-cm-mm-in/), [4](https://elementor.com/tools/rem-to-px-converter/)]

### The Math in Action (Default Settings)

If the browser root is at the standard `16px`:

- `1rem` = `16px` (1 × 16)
- `1.5rem` = `24px` (1.5 × 16)
- `2rem` = `32px` (2 × 16)
- `0.5rem` = `8px` (0.5 × 16) \[[1](https://elementor.com/blog/rem-vs-em/), [2](https://www.craigabbott.co.uk/blog/2022/accessibility-and-font-sizes/), [3](https://netforemost.com/how-to-perfectly-use-rem-em-or-px/), [4](https://dev.to/topeogunleye/understanding-css-percentage-values-ain), [5](https://www.fhoke.com/em-vs-rem-vs-px/)]

### The Accessibility Advantage

If a user changes their default browser font size to **`20px`** for better readability, the math updates automatically: \[[1](https://adamwrightdesign.com/newsletter/getting-started-with-using-rem-instead-of-pixels/)]

- `1rem` becomes `20px` (1 × 20)
- `1.5rem` becomes `30px` (1.5 × 20)
- `2rem` becomes `40px` (2 × 20) \[[1](https://elementor.com/blog/rem-vs-em/), [2](https://medium.com/@msinha2801/responsive-web-design-db6d5aa3fdef), [3](https://antondevtips.com/blog/building-responsive-design-using-em-and-rem-css-units), [4](https://css-tricks.com/css-length-units/), [5](https://www.freecodecamp.org/news/absolute-and-relative-css-units/)]

Because you used `rem`, your entire layout scales up beautifully to match the user's needs without breaking. \[[1](https://dev.to/turneremma21/secrets-to-using-rem-in-css-css-tips-2gkh)]

***

### Comparison Summary

| Feature \[[1](https://dev.to/lazarocontato/when-to-use-rem-em-or-pixels-566h), [2](https://divimode.com/responsive-design-with-css/), [3](https://medium.com/codeelevation/why-are-major-tech-companies-abandoning-px-and-rem-across-the-board-ff795a8fc1e6), [4](https://www.designsystemscollective.com/rem-vs-em-striking-the-right-balance-in-design-systems-a4a24d7e49ed), [5](https://www.twilo.net/design-blog/switching-from-pixels-to-rem-learning-to-design-with-flexibility-in-mind/)] | `px`                                            | `rem`                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------------- |
| **Type**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Absolute                                        | Relative                                            |
| **Scales on Zoom?**                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Yes (via page pinch/zoom)                       | Yes (via page pinch/zoom)                           |
| **Scales on Font Preference?**                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ❌ No                                           | Yes                                                 |
| **Best Used For**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Thin borders, crisp shadows, fixed canvas sizes | Text sizes, margins, layout padding, button heights |

If you want to start using `rem`, let me know:

- Do you want to see a **quick math trick** to make `rem` conversion easier to calculate in your head?

- Are you trying to convert an **existing layout** from pixels to rems?

- [link](https://uxdesign.cc/figma-now-supports-rem-units-understanding-the-use-and-benefits-5957fc1ecb78)\
  Why designers should move from px to rem (and how to do that in Figma)- | by Christine Vallaure\
  Jul 18, 2023 — Pixels in design software (e.g. in Figma) are absolute units, meaning that they 1px correspond to a defined size ( later this will...\
  \
  \
  UX Collective

- [link](https://htmlandcssguidebook.com/css/size-units/)\
  Common Size Units\
  The px unit is an absolute measurement. It is analogous to Points or Picas in print design.\
  \
  HTML & CSS Guidebook

- [link](https://uxdesign.cc/why-designers-should-move-from-px-to-rem-and-how-to-do-that-in-figma-c0ea23e07a15)\
  Why designers should move from px to rem — and how to do that in Figma\
  Nov 5, 2021 — Pixel are absolute units, meaning, that 1px corresponds to a fixed physical size(depending on different screen resolutions).\
  \
  \
  UX Collective

Show all

## You said: what does 1px mean

In CSS, **`1px`** means one <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>"reference pixel."</strong></mark> \[1] \[[1](https://www.sitepoint.com/look-at-length-units-in-css/)]

It is a standardized unit of measurement used by browsers to keep web designs looking the same size across different screens, regardless of how high-resolution the display is. \[[1](https://www.educative.io/answers/em-vs-px-in-css), [2](https://www.testmuai.com/free-online-tools/rem-to-px-converter/)]

***

### It is Not a Physical Screen Pixel \[[1](https://css-tricks.com/the-lengths-of-css/)]

On modern devices, `1px` in your CSS code rarely equals exactly one physical pixel on your monitor or phone screen. \[[1](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Styling%5Fbasics/Values%5Fand%5Funits), [2](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7)]

- **The Problem**: High-resolution screens (like Apple Retina displays or 4K monitors) pack physical pixels incredibly tightly together. If `1px` meant one physical pixel, a 16px font would look microscopic on a phone screen.
- **The Solution**: Browsers use a scaling system called the **Device Pixel Ratio (DPR)**. \[[1](https://medium.com/le-collectionist/handling-responsive-images-in-html-6c447116fbe1), [2](https://www.b12.io/glossary-of-web-design-terms/pixel/), [3](https://html.com/attributes/img-srcset/), [4](https://imagekit.io/glossary/what-is-device-pixel-ratio/)]

### How Browsers Calculate `1px`

The browser bundles multiple physical device pixels together to create a single, consistent CSS pixel. \[[1](https://www.educative.io/answers/em-vs-px-in-css), [2](https://hacks.mozilla.org/2013/09/css-length-explained/), [3](https://joshcollinsworth.com/blog/never-use-px-for-font-size)]

- **Standard Monitor (DPR = 1)**: `1px` in CSS = **1 physical pixel** on the screen.
- **Modern Smartphone/Laptop (DPR = 2)**: `1px` in CSS = A **2x2 grid (4 total)** of physical pixels.
- **High-End Phone (DPR = 3)**: `1px` in CSS = A **3x3 grid (9 total)** of physical pixels. \[[1](https://www.educative.io/answers/em-vs-px-in-css), [2](https://tympanus.net/codrops/css%5Freference/length/), [3](https://docs.htmlcsstoimage.com/parameters/device%5Fscale/), [4](https://www.digitalocean.com/community/tutorials/how-to-use-common-units-in-css), [5](https://weibeld.net/webdesign/device-pixel-ratio.html)]

No matter how sharp the screen gets, the browser ensures that a `1px` line always looks exactly the same thickness to the human eye.

***

### When to Use `1px`

Because `1px` is the sharpest, thinnest standard line a browser can reliably draw, you should use it for structural UI details that should never grow or shrink: \[[1](https://www.linkedin.com/posts/virat-radadiya%5Fcss-frontenddevelopment-webdesign-activity-7451929870340608001-h91w), [2](https://www.linkedin.com/pulse/what-px-pt-dp-porag-gogoi)]

- Thin decorative dividers (`border-bottom: 1px solid #ccc;`)
- Crisp outline boxes around form inputs
- Subtle inset box shadows

If you are working on your styles, let me know:

- Are you trying to fix a **blurry border** or a alignment issue on high-resolution screens?

- Do you want to know how to target **sharp physical lines** using advanced CSS features?

- [link](https://www.sitepoint.com/look-at-length-units-in-css/)\
  A Look at Length Units in CSS — SitePoint\
  Jul 28, 2015 — In CSS, a pixel (px) is not a physical pixel on the screen, but a reference pixel, which is a physical unit of measure that takes ...\
  \
  SitePoint

- [link](https://www.educative.io/answers/em-vs-px-in-css)\
  em vs. px in CSS\
  What is the px unit in CSS? The px (pixels) unit is an absolute unit of measurement in CSS. It defines a fixed size, making it con...\
  \
  \
  Educative

- [link](https://www.testmuai.com/free-online-tools/rem-to-px-converter/)\
  REM to PX Online Converter\
  What is Px? In CSS, “px” stands for “pixels”. It's a unit of measurement that's commonly used to describe the sizes of elements on...\
  \
  \
  TestMu AI

Show all

## You said: does 1px look similar on most screens

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, </span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">1px</code> looks remarkably similar on most standard consumer screens</strong></mark> because the [W3C organization](https://www.w3.org/Style/Examples/007/units.en.html) [normatively defines](https://developer.mozilla.org/en-US/docs/Glossary/CSS%5Fpixel) a CSS pixel as a specific mathematical **"visual angle"** rather than a piece of hardware. \[[1](https://developer.mozilla.org/en-US/docs/Glossary/CSS%5Fpixel), [2](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7), [3](https://css-tricks.com/the-lengths-of-css/)]

The system relies on human biology and viewing distance to maintain visual consistency. \[[1](https://css-tricks.com/the-lengths-of-css/), [2](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7), [3](https://creativepro.com/rethinking-the-pixel-it-s-all-relative-now/), [4](https://www.photomacrography.net/forum/viewtopic.php?t=2439)]

### The Secret Formula: Visual Angle

The official CSS specification roots `1px` to the [visual angle of 0.0213°](http://xahlee.info/js/css%5Fpixel.html). This angle represents how large a standard hardware pixel looks to a human eye when viewing a 96 DPI monitor from a comfortable, **arm's-length distance (~28 inches)**. \[[1](https://css-tricks.com/the-lengths-of-css/), [2](http://xahlee.info/js/css%5Fpixel.html), [3](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7)]

To preserve this identical angular footprint when screens move closer or further away, hardware manufacturers alter how software pixels map to physical space. \[[1](https://css-tricks.com/the-lengths-of-css/)]

### How Devices Adjust the Scale

The browser scales `1px` seamlessly depending on the device category: \[[1](https://deviceatlas.com/blog/most-popular-viewport-size-statistics-2016)]

- **Smartphones**: Held much closer to the eyes than a laptop (~12 inches). Because they are close, the visual angle needs less physical room. Devices compress `1px` to look physically smaller on a ruler, but it looks exactly the same size to your eyes due to the proximity. \[[1](https://news.ycombinator.com/item?id=36142806), [2](https://creativepro.com/rethinking-the-pixel-it-s-all-relative-now/), [3](https://dev.to/ochukodotspace/the-battle-of-the-units-px-vs-rem-vs-em-3ka8)]
- **Computer Monitors**: Viewers sit about 28 inches away. `1px` measures exactly \\(\frac{1}{96}\\) of an inch. \[[1](https://css-tricks.com/the-lengths-of-css/), [2](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7), [3](https://hacks.mozilla.org/2013/09/css-length-explained/)]
- **Smart TVs**: Viewed from across a living room (~10 feet away). To occupy that same 0.0213° chunk of your vision, a single CSS `1px` must expand to become physically huge on the wall. \[[1](https://tomroth.dev/css-pixels/), [2](https://w3cplus.medium.com/illustrated-css-values-and-units-of-css-49136125b7fd)]

### The Exceptions (Where `1px` Looks Different)

While the system works beautifully across common smartphones, laptops, and TVs, it can drift on certain devices: \[[1](https://itnext.io/all-you-need-to-know-about-pixels-ee4b6b607b77), [2](https://dev.to/ochukodotspace/the-battle-of-the-units-px-vs-rem-vs-em-3ka8)]

1. **Cheaper, Low-End Monitors**: Budget desktop monitors with a poor native resolution stretch `1px` out slightly, making lines look thicker or blockier than they do on a crisp laptop. \[[1](https://support.sportsground.com/hc/en-us/articles/360045074311-Why-websites-may-appear-different-on-different-screens-devices)]
2. **Ultra-Dense Smartwatches**: Because smartwatches have tiny screens but are viewed very close up, text and small `1px` lines can occasionally appear smaller if the OS manufacturer favors screen real estate over the exact W3C scale factor.

If you are encountering sizing discrepancies, let me know:

- Is a specific element **looking too small on mobile** or **too large on a desktop monitor**?

- Are you checking the design across **displays with vastly different resolutions** (like a 1080p screen next to a 4K screen)?

- [link](https://tomroth.dev/css-pixels/)\
  How do CSS pixels work? - Tom Roth\
  Finally Link to heading We can finally say what 1px is. It's the number of physical device pixels, rounded to the nearest integer,\
  tomroth.dev

- [link](https://support.sportsground.com/hc/en-us/articles/360045074311-Why-websites-may-appear-different-on-different-screens-devices)\
  Why websites may appear different on different screens/devices\
  Because screens vary in resolution and aspect ratio, the same website can look different across devices. Higher-resolution screens...\
  Sportsground.com

- [link](https://dev.to/lebbe/a-px-is-not-a-pixel-long-live-the-px-26l7)\
  A px is not a pixel, long live the px! - DEV Community\
  Nov 27, 2023 — One of the lessons you need to have conquered, before becoming the ultimate CSS maestro, is embracing the fact that a css px is no...\
  DEV Community

Show all

# (d) does all google design tokens on ref layer end with a number

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, not all Google reference (</span><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">ref</code>) design tokens end with a number.</strong></mark> While color reference tokens use numbers to dictate tonal values, other foundational categories like typography, shape, and motion end with descriptive text strings. \[[1](https://m3.material.io/foundations/design-tokens)]

According to the official [Material Design 3 Token Guidelines](https://m3.material.io/foundations/design-tokens), reference tokens represent the raw building blocks of the design system. They end with descriptive words communicating the specific token's role. \[, [2](https://m3.material.io/foundations/design-tokens)]

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  All token names in a design system start with the system name (such as “md” for Material Design) An abbreviation for the token cla...\
  Material Design

## You said: list

**No, not all of Google's design tokens on the reference (`ref`) layer end with a number.**

While color palette reference tokens in [Material Design 3](https://m3.material.io/foundations/design-tokens) do end in numbers to indicate tonal weight, other types of design tokens on the reference layer rely purely on **descriptive text strings**.

### Naming Conventions on the `ref` Layer

According to the official Material Design 3 Naming Specifications, a reference token's structure flows from the most general to the most specific concept:\
`md.ref.[category].[modifier]`

The ending value (the modifier) varies depending on the specific design category:

- **Color Palettes (Do end in a number):** Color references always map to specific brightness percentages within a tonal scale.
  - _Examples:_ `md.ref.palette.primary40`, `md.ref.palette.secondary90`, `md.ref.palette.neutral10`
- **Typefaces (Do NOT end in a number):** Typography references rely on text modifiers to target specific type application types.
  - _Examples:_ `md.ref.typeface.brand`, `md.ref.typeface.plain`

If you are currently engineering a system or structuring tokens in Figma, would it help to see how these reference tokens map into **system (`sys`) layers**, or are you tracking down specific **typography and spacing values**?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  The parts of a token name are separated by periods and proceed from the most general information ("md") to the most specific ("on-\
  Material Design
- [link](https://silikhesilas.medium.com/material-design-tokens-8d78d738034)\
  Material Design Tokens - Silas Silikhe\
  Jul 20, 2023 — When working with tokens, it's important to be able to understand their names. Typically, token names consist of two parts: the ca...\
  Medium·Silas Silikhe
- [link](https://material-web.dev/theming/typography/)\
  Typography - Material Web\
  All tokens :root { --md-sys-typescale-body-medium-size: 1rem; --md-sys-typescale-body-medium-line-height: 1.5rem; /\* ... \*/ } star...\
  material-web.dev

Show all

## You said: all design token names on ref layer. there is a lot. group related ones.

In [Material Design 3](https://m3.material.io/foundations/design-tokens), the **reference (`ref`) layer** contains primitive values (such as raw hex codes, font families, or pixel dimensions). These primitives serve as the structural backbone for the system (`sys`) and component (`comp`) layers. \[[1](https://material-web.dev/theming/material-theming/), [2](https://m3.material.io/foundations/design-tokens)]

Google groups all `md.ref` design tokens into distinct visual categories. A comprehensive list of the core categories on the reference layer includes the following groups: \[[1](https://m3.material.io/foundations/design-tokens), [2](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)]

### 🎨 Color Palette Reference Tokens

The largest token set consists of **tonal palettes**. Each palette is generated from a key seed color and divided into 13 to 14 sequential numerical increments reflecting luminance (0 = pure black, 100 = pure white). \[[1](https://material-web.dev/theming/material-theming/), [2](https://m3.material.io/foundations/design-tokens)]

- **Primary Palette**: `md.ref.palette.primary0` up to `md.ref.palette.primary100`
- **Secondary Palette**: `md.ref.palette.secondary0` up to `md.ref.palette.secondary100`
- **Tertiary Palette**: `md.ref.palette.tertiary0` up to `md.ref.palette.tertiary100`
- **Error Palette**: `md.ref.palette.error0` up to `md.ref.palette.error100`
- **Neutral Palette**: `md.ref.palette.neutral0` up to `md.ref.palette.neutral100` (Used for surfaces)
- **Neutral Variant Palette**: `md.ref.palette.neutral-variant0` up to `md.ref.palette.neutral-variant100` (Used for text mediums and strokes) \[[1](https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/)]

### 🔤 Typography & Typeface Reference Tokens

These tokens define base structural font choices across the ecosystem. \[[1](https://material-web.dev/theming/material-theming/)]

- **Font Families**:
  - `md.ref.typeface.brand` (Typically references _Roboto_ or _Google Sans_)
  - `md.ref.typeface.plain` (System fallback copy font like _Arial_ or standard _Roboto_) \[[1](https://material-web.dev/theming/material-theming/)]
- **Font Weights**:
  - `md.ref.typeface.weight-bold`
  - `md.ref.typeface.weight-medium`
  - `md.ref.typeface.weight-regular`

### 📐 Layout & Spacing Reference Tokens

These act as primitive base scales for grid layouts, padding dimensions, and element sizing. \[[1](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676), [2](https://docs.tokens.studio/manage-tokens/token-names/)]

- **Spacing Multipliers**: `md.ref.spacing.0` through `md.ref.spacing.10` (Typically built on a 4dp or 8dp base grid coordinate system).

### 🧊 Shape, Border, & Elevation Reference Tokens

These tokens define the curvature of containers, border strokes, and relative layering depth. \[[1](https://material-web.dev/theming/material-theming/), [2](https://docs.tokens.studio/manage-tokens/token-names/), [3](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)]

- **Border Radius Corner Scale**:
  - `md.ref.shape.corner-none`
  - `md.ref.shape.corner-extra-small`
  - `md.ref.shape.corner-small`
  - `md.ref.shape.corner-medium`
  - `md.ref.shape.corner-large`
  - `md.ref.shape.corner-extra-large`
  - `md.ref.shape.corner-full`

### ⚡ Motion & Animation Reference Tokens

These control timing curves and duration intervals for user interaction states. \[[1](https://designstrategy.guide/design-tokens-101/)]

- **Duration Scale**: `md.ref.motion.duration-short-1` up to `md.ref.motion.duration-long-4`
- **Easing Paths**:
  - `md.ref.motion.easing-linear`
  - `md.ref.motion.easing-standard`
  - `md.ref.motion.easing-accelerated`
  - `md.ref.motion.easing-decelerated`

Are you setting up your **token architecture in JSON / Style Dictionary**, or do you need assistance **mapping these primitives over to semantic system (`sys`) themes**? \[[1](https://www.uxpin.com/studio/blog/design-in-code-technical-guide-for-developers/)]

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  All token names in a design system start with the system name (such as “md” for Material Design) An abbreviation for the token cla...\
  Material Design
- [link](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)\
  Naming Tokens in Design Systems - Medium\
  Oct 14, 2020 — Category. Tokens exist within a prototypical category like color , font , or space . ... Categories span visual style concerns and...\
  Medium·Nathan Curtis
- [link](https://docs.tokens.studio/manage-tokens/token-names/)\
  Token Names | Tokens Studio for Figma\
  Token Management \* Token Types. Asset. Boolean. Border - Composite. Box Shadow - Composite. Color. Modified Colors (pro) Gradient ...\
  Tokens Studio

Show all

# all google design token names on comp layer

In Google's Material Design 3 system, **component tokens (prefixed with `md.comp.`) are not a fixed monolithic list**; instead, they are dynamically generated for each discrete UI component based on an internal structural taxonomy. \[[1](https://m3.material.io/foundations/design-tokens)]

Rather than utilizing hardcoded global variables, Google automatically maps component properties to semantic system tokens (`md.sys.`). You can explore the implementation details on the official [Material Design 3 Token Guidelines](https://m3.material.io/foundations/design-tokens). \[[1](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md), [2](https://m3.material.io/foundations/design-tokens)]

### The Component Token Anatomy

Google constructs every token in the component layer using a strict, predictable syntax hierarchy:\
\\(\text{System}\rightarrow \text{Layer}\rightarrow \text{Component}\rightarrow \text{Property}\rightarrow \text{State/Variant}\\)

- **System Prefix**: Always `md` (Material Design).
- **Layer Class**: Always `comp` (Component tokens).
- **Component**: The UI element block (e.g., `switch`, `fab`, `filled-button`, `card`, `top-app-bar`).
- **Property/Role**: The specific styling hook (e.g., `background-color`, `text-label-text-style`, `container-shape`, `icon-size`).
- **State / Modifier**: The reactive context (e.g., `hover`, `focus`, `pressed`, `disabled`). \[[1](https://joshcusick.substack.com/p/exploring-design-tokens), [2](https://www.alwaystwisted.com/articles/design-token-naming-conventions), [3](https://m3.material.io/foundations/design-tokens), [4](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)]

***

### Component Layer Formulaic Breakdown

Because there are thousands of generated combinations, developers and designers map them by combining the component block with its respective UI attributes:

### 1. Color Properties (`-color`)

Maps an element's sub-parts to a specific semantic theme role:

- `md.comp.[component]-container-color` (e.g., `md.comp.fab.primary-container-color`)
- `md.comp.[component]-icon-color`
- `md.comp.[component]-label-text-color`
- `md.comp.[component]-outline-color` \[[1](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)]

### 2. Interaction State Modifiers (`-state`)

Appends reactive behaviors onto standard properties:

- `md.comp.[component]-container-color-hover`
- `md.comp.[component]-container-color-pressed`
- `md.comp.[component]-container-color-focus`
- `md.comp.[component]-container-opacity-disabled`

### 3. Shape & Elevation (`-shape` / `-elevation`)

Handles layout aesthetics and shadows:

- `md.comp.[component]-container-shape` (e.g., references rounded corner values)
- `md.comp.[component]-container-elevation`
- `md.comp.[component]-container-elevation-hover` \[[1](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)]

### 4. Typography (`-text-style`)

Maps text treatments to the structural font scale:

- `md.comp.[component]-label-text-text-style` (References font families, weights, and sizes) \[[1](https://silikhesilas.medium.com/material-design-tokens-8d78d738034), [2](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)]

***

### Verifying Mappings in Code

If you are developing for the web, Android, or Flutter, you can view the complete, compiled, component-by-component token maps directly inside Google's open-source repositories:

- **Web Components**: Check the source files inside the Material Web Components GitHub repository to see exactly how individual Lit elements ingest `md-comp-` tokens.
- **Android Compose**: Inspect the `androidx.compose.material3` library code to view the backing properties bound to the component layer. \[[1](https://www.youtube.com/watch?v=-RnVPesP6Sw\&t=3)]

If you are trying to customize a **specific component** (like an icon button or dialog box), let me know which one you are styling and I can provide its exact property map!

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Parts of a token name \* All token names in a design system start with the system name (such as “md” for Material Design) \* An abbr...\
  Material Design
- [link](https://joshcusick.substack.com/p/exploring-design-tokens)\
  Exploring design tokens - by Josh Cusick - Beyond The Pixel\
  Aug 9, 2024 — Left: a button using the —theme-color-background-primary token in light mode. Right: a button also using the —theme-color-backgrou...\
  Substack·Beyond The Pixel
- [link](https://www.youtube.com/watch?v=-RnVPesP6Sw\&t=3)\
  White-Labelling Your Compose and XML UI with Design ...\
  Nov 15, 2025 — right hi everyone um welcome to my talk white labeling your compose and XML UI with design tokens uh first of all you made it to t...\
  12m\
  YouTube·nextapp devCon

Show all

## You said: examples

To illustrate how Google maps properties to specific visual elements, here are concrete examples of **component layer tokens (`md.comp.`)** extracted directly from [Material Design 3's technical specifications](https://m3.material.io/foundations/design-tokens) and the Material Web Components open-source repository. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://github.com/material-components/material-web/blob/main/docs/components/button.md)]

### 1. Button Component (`md.comp.filled-button`)

A standard filled button manages dimensions, text roles, shapes, and micro-interactions by breaking individual pieces into dedicated tokens:

- `md.comp.filled-button.container-color` – Defines the primary resting background fill.
- `md.comp.filled-button.container-shape` – Maps the corner rounding value (e.g., fully rounded pill shape).
- `md.comp.filled-button.label-text-color` – Handles the typography color resting over the button fill.
- `md.comp.filled-button.label-text-text-style` – Binds the label to a standard typographic scale (e.g., `label-large`).
- `md.comp.filled-button.container-color-hover` – Dictates background shift during mouse-over.
- `md.comp.filled-button.disabled-container-color` – Absolute fill color forced when the button is inactive.
- `md.comp.filled-button.disabled-container-opacity` – Transparency level applied to a disabled background state.

***

### 2. Switch Component (`md.comp.switch`)

Switches rely heavily on complex multi-state component tokens to change states cleanly between "selected" (on) and "unselected" (off):

- `md.comp.switch.track-shape` – Tracks the outer container's structural corner radius.
- `md.comp.switch.selected-track-color` – The background track color when toggled "on".
- `md.comp.switch.unselected-track-color` – The background track color when toggled "off".
- `md.comp.switch.selected-handle-color` – The circular handle thumb color when active.
- `md.comp.switch.unselected-handle-color` – The circular handle thumb color when inactive.
- `md.comp.switch.handle-shape` – Controls the geometry of the inner toggle thumb (typically circular).
- `md.comp.switch.selected-icon-color` – Sets the color of the optional internal validation checkmark icon.
- `md.comp.switch.selected-handle-color-pressed` – Specifically sets handle coloring while a user holds a click or press. \[[1](https://material-web.dev/components/switch/)]

***

### 3. Floating Action Button (`md.comp.fab.primary`)

The Material FAB requires distinct token overrides because its elevation values dynamically separate it from layouts:

- `md.comp.fab.primary.container-color` – Sets the specific brand container accent background.
- `md.comp.fab.primary.icon-color` – Controls the main action icon color centered inside the container.
- `md.comp.fab.primary.container-elevation` – Establishes the standard drop shadow depth level (resting layer).
- `md.comp.fab.primary.container-elevation-hover` – Amplifies shadow properties when hovered to convey real-time lifting depth.

***

### Implementation Mapping (CSS Custom Properties)

When translated into web-ready environments, Google transforms these internal keys directly into CSS variables following the exact same format: \[[1](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens)]

css

```
/* Example real-world usage in Material Web styles */
.md-button {
  background-color: var(--md-filled-button-container-color);
  border-radius: var(--md-filled-button-container-shape);
  color: var(--md-filled-button-label-text-color);
}
```

Use code with caution.

Which **component** are you trying to implement or theme? I can pull the exact **token mapping block** for elements like text fields, dialog boxes, cards, or checkboxes!

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  All token names in a design system start with the system name (such as “md” for Material Design) An abbreviation for the token cla...\
  Material Design
- [link](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens)\
  A new approach to naming design tokens\
  May 5, 2024 — Token names are modified by engineers. Once our tokens are shared with engineers, they use a tool like Style Dictionary to transfo...\
  Substack·Confessions from a design team of one
- [link](https://github.com/material-components/material-web/blob/main/docs/components/button.md)\
  material-web/docs/components/button.md at main - GitHub\
  Elevated button. Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when ...\
  GitHub

Show all

## You said: what is the additional comp layer for

The primary purpose of the additional component token layer (`md.comp.`) is to create an **absolute separation of concerns between global system choices and individual component styling**. It serves as a structural buffer that prevents broad, global design themes from breaking the precise visual rules of specialized UI elements. \[[1](https://www.reddit.com/r/DesignSystems/comments/1it1erb/3tier%5Fdesign%5Ftoken%5Fsystem/), [2](https://medium.com/@NateBaldwin/component-level-design-tokens-are-they-worth-it-d1ae4c6b19d4), [3](https://honcho.agency/design-systems/glossary/component-tokens)]

Without a component layer, web components and applications would reference global, semantic variables (`md.sys.color.primary`) directly. By inserting a component layer, Google creates an abstraction architecture:\
`Global Value (Reference)` → `System Intent (Semantic)` → `Component Target (Component)` \[[1](https://www.youtube.com/watch?v=Uwgx4FH6DbY\&t=80), [2](https://honcho.agency/design-systems/glossary/component-tokens)]

***

### Key Operational Benefits

### 1. Preventing Unintended Collateral Damage

If you override a generic semantic token like `md.sys.color.primary` to update your application's navbar color, **every element relying directly on primary would instantly change**.

- **With Component Tokens**: A primary button uses `md.comp.filled-button.container-color`. Because it has its own dedicated layer, you can alter the background color of just the button without accidentally changing text links, progress bars, or active chip states that share the primary color palette. \[[1](https://honcho.agency/design-systems/glossary/component-tokens)]

### 2. Fine-Grained Theme Overrides & Exceptions

Some parts of a design system must purposefully break global semantic logic. Component layers allow you to write surgical overrides without introducing sloppy, hardcoded inline CSS hacks into code bases. \[[1](https://honcho.agency/design-systems/glossary/component-tokens), [2](https://www.youtube.com/watch?v=JyCmacSyDY4\&t=47)]

- _Example:_ A high-visibility marketing button variant can specifically map its `md.comp.filled-button.container-color` to a one-off campaign color while leaving all other native primary components untouched. \[[1](https://honcho.agency/design-systems/glossary/component-tokens)]

### 3. Granular State Tracking \[[1](https://outshift.cisco.com/blog/ai-ml/building-multi-framework-multi-agent-solutions)]

Semantic layers track intent (e.g., `md.sys.color.error`), but they cannot cleanly express human interactions unique to custom web components. The component layer bridges this gap by hosting distinct modifier attributes tailored entirely to that structure: \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://www.youtube.com/watch?v=Uwgx4FH6DbY\&t=80)]

- `md.comp.switch.selected-handle-color-pressed`
- `md.comp.filled-button.container-color-hover` \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA)]

### 4. Total Platform Independence (Engineering Handoff)

Engineers on different tech stacks look at components differently. An Android Jetpack Compose engineer, a Flutter engineer, and a Web Lit Component engineer all view UI structures differently. \[[1](https://m3.material.io/foundations/design-tokens)]

- By publishing a unified `md.comp.card.container-color` token map, Google ensures that **regardless of the frontend code framework used, the exact layout property updates synchronously across platforms** when the core design values change. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://www.youtube.com/watch?v=JyCmacSyDY4\&t=47)]

If you are exploring these layers for a design project, are you aiming to **build a custom design system** based on Material 3, or are you writing a **custom theme override** for an existing application code repository?

- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Tokens make it possible for a design system to have a single source of truth – a repository where style choices are recorded and c...\
  Material Design
- [link](https://www.reddit.com/r/DesignSystems/comments/1it1erb/3tier%5Fdesign%5Ftoken%5Fsystem/)\
  3-tier design token system : r/DesignSystems - Reddit\
  Feb 19, 2025 — Component tokens have their place when they reach that balance correctly, I feel - if they're clearly defined and inheriting the c...\
  Reddit·r/DesignSystems
- [link](https://www.youtube.com/watch?v=CJyJN0ZdEGA)\
  Design Tokens for Dummies | A Complete Guide\
  Feb 17, 2025 — so Google defines design tokens as small reusable design decisions that make up a design systems visual style. but what does that ...\
  50:19\
  YouTube·UI Collective

Show all

## You said: is it mainly for cross platform compatibility compared w ref, sys and comp.css no comp layer

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, cross-platform compatibility is not the main reason.</span></strong></mark> Cross-platform parity is a valuable byproduct, but the main reason for the component token layer (`md.comp.`) is **change management and targeting precision (blast radius control)**. \[[1](https://medium.com/@hereinthehive/component-tokens-first-hear-me-out-6258f54935a9), [2](https://www.alwaystwisted.com/articles/design-token-naming-conventions), [3](https://flatrocktech.com/blog/cross-platform-development)]

Even if your entire company only builds a single web application using pure CSS (no Android, no iOS, no cross-platform software at all), you would still want a component token layer over a direct **System → `component.css`** implementation. \[[1](https://www.alwaystwisted.com/articles/design-token-naming-conventions)]

***

### The Direct Comparison

To see why, compare a system **without** a component layer to a system **with** a component layer:

| Feature / Scenario \[[1](https://css-tricks.com/organizing-design-system-component-patterns-with-css-cascade-layers/), [2](https://medium.com/@hereinthehive/component-tokens-first-hear-me-out-6258f54935a9), [3](https://www.alwaystwisted.com/articles/design-token-naming-conventions), [4](https://push-based.io/article/mastering-the-design-to-code-flow-with-figma-storybook-and-angular-part-1), [5](https://www.reddit.com/r/DesignSystems/comments/1it1erb/3tier%5Fdesign%5Ftoken%5Fsystem/)] | System `sys` → `component.css` (No Component Layer)                                           | Reference (`ref`) → System (`sys`) → Component (`comp`)                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **How a button gets color**                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | `.md-button { background: var(--md-sys-color-primary); }`                                     | `.md-button { background: var(--md-comp-filled-button-container-color); }`          |
| **The "Blast Radius"**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | High. Changing primary color changes buttons, progress bars, links, and active chips at once. | Zero collateral damage. Changing a button's background affects **only** buttons.    |
| **Overriding a Single State**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Requires writing tight CSS overrides like `.md-button:hover { background: color-mix(...); }`. | Requires changing one clean token: `--md-comp-filled-button-container-color-hover`. |
| **Centralized Theme Control**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Fragmented. Visual rules are scattered deep within separate CSS component files.              | Unified. Every single design decision lives inside one JSON/Figma file.             |

***

### 3 Reasons why `component.css` is not enough

If you map system tokens (`--md-sys-color-primary`) directly inside a `button.css` file without the component token layer, you run into three breaking engineering limitations:

### 1. Inversion of Control (Design vs. Code)

If a designer wants to change the hover background opacity of a filled button from 8% to 12%, they cannot do it from Figma if you bypass the component layer. They have to ask a developer to go into `button.css`, find the `:hover` pseudo-selector, and rewrite the CSS file.

- With `md.comp.`, **the design system retains control**. The designer shifts the token mapping, and the change automatically compiles straight down to production code without refactoring a line of CSS layouts. \[[1](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens), [2](https://push-based.io/article/mastering-the-design-to-code-flow-with-figma-storybook-and-angular-part-1)]

### 2. The Component State Mapping Problem

System tokens (`md.sys.`) communicate general intent—they do not have individual concept fields for interaction patterns. CSS states require exact, static color calculations for states like `disabled`, `focus`, and `pressed`.

- A system token cannot cleanly house `--md-sys-color-primary-minus-8-percent-opacity-for-hover`.
- The component token acts as an explicit structural bucket: `md.comp.filled-button.container-color-hover` maps perfectly to what a browser needs to fetch on a mouse hover.

### 3. Sub-element Targeting (Multi-part Elements)

Complex elements like a Slider or a Search Bar have internal structural nodes (tracks, icons, active regions, handles).

- Writing native CSS declarations inside a file forces tightly bound class nesting selectors (`.slider .thumb .icon`).
- Component tokens completely abstract this by mapping them to explicitly flat variables like `md.comp.switch.selected-handle-color`. This decouples the visual styling from the specific DOM node structure. \[[1](https://m3.material.io/foundations/design-tokens)]

If you are setting up your own style pipeline, let me know if you are managing your tokens via **Figma Variables**, **Style Dictionary**, or writing **plain CSS variables** manually! I can show you exactly how to structure the design-to-code compilation.

- [link](https://css-tricks.com/organizing-design-system-component-patterns-with-css-cascade-layers/)\
  Organizing Design System Component Patterns With CSS ...\
  Feb 10, 2025 — Structuring styles. So far, we've established a . button class inside of a cascade layer that's designed to hold any type of compo...\
  CSS-Tricks
- [link](https://www.reddit.com/r/DesignSystems/comments/1it1erb/3tier%5Fdesign%5Ftoken%5Fsystem/)\
  3-tier design token system : r/DesignSystems - Reddit\
  Feb 19, 2025 — After doing a bit of research, I found out that the most mature approach would involve implementing a 3-tier token-based system. T...\
  Reddit·r/DesignSystems
- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  Reference tokens. All available tokens with associated values. System tokens. Decisions and roles that give the design system its ...\
  Material Design

Show all

## You said: i mean you merge sys and comp. you do not change sys primary color to blast.

Ah, understood! You mean a setup where you **cut out the middleman**—you don’t change the global `sys.primary` token, you just merge the layers so that `component.css` directly hardcodes the system tokens, like this: \[[1](https://www.youtube.com/watch?v=nkX6y2B3vNg)]

css

```
/* Merged Approach (No md.comp layer) */
.filled-button {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
```

Use code with caution.

If you do it this way and protect `sys.primary` from being blasted, you are correct: **cross-platform compatibility and tooling abstraction become the primary reasons Google keeps the separate `md.comp` layer.**

By avoiding the merged `component.css` shortcut, the explicit `md.comp` layer solves four major engineering and scaling problems:

### 1. The Multi-Brand "Dynamic Mapping" Problem

In standard apps, a button always maps to `sys.primary`. But in a complex system (like Google Workspace), components must dynamically change their system assignments depending on the context:

- **Gmail** buttons map to `sys.primary` (Red/Blue).
- **Google Docs** buttons map to `sys.secondary` (Blue).
- **Google Sheets** buttons map to `sys.tertiary` (Green).

If you merge the layers inside a static `button.css` file, you hardcode the button to `sys.primary`. To change it, you have to write CSS overrides like `.docs-theme .filled-button { background: var(--md-sys-color-secondary); }`.

With an explicit `md.comp` layer, the CSS file **never changes**. The component stays completely decoupled from the system theme, and you simply swap the token data package at runtime:

- **Gmail Context:** `--md-comp-filled-button-container-color: var(--md-sys-color-primary);`
- **Sheets Context:** `--md-comp-filled-button-container-color: var(--md-sys-color-tertiary);`

### 2. Design Engine Automation (Style Dictionary & W3C)

Google generates its design systems using automated pipelines (like Style Dictionary) that export layout data to Android (XML/Compose), iOS (SwiftUI), Web (CSS/Lit), and Figma.

Automated translation engines require data to be structured as a strict **graph/tree**.

- **Merged Layer:** A layout tool cannot easily look inside a platform-specific `button.css` file or an Android `Button.kt` file to see how a button is built.
- **Explicit Layer:** The entire component is mapped out in a universal, platform-agnostic JSON file (`md.comp.filled-button.container-color` points to `md.sys.color.primary`). The design pipeline reads this single source of truth and flawlessly spits out code for Web, iOS, and Android simultaneously.

### 3. State Math and Opacity Packing

System tokens represent solid colors. However, Material Design components use complex math for interaction states, often mixing solid system colors with specific system opacities (e.g., `sys.primary` at 8% opacity for hover, or 12% for focus).

If you merge this into `component.css`, you have to write heavy CSS runtime utilities to mix colors:

css

```
.filled-button:hover {
  background-color: color-mix(in srgb, var(--md-sys-color-primary) 8%, transparent);
}
```

Use code with caution.

If an iOS or Android engineer tries to replicate this, they have to write native Kotlin or Swift equivalents of `color-mix`. By using an explicit `md.comp.filled-button.container-color-hover` token, the design pipeline pre-calculates or explicitly defines this relationship so that all platforms interpret the state exactly the same way.

### 4. Overriding Single Elements Without Touch-Points

If you have 50 filled buttons on a screen, and a product manager asks you to make _just one_ specific "Delete Profile" button dark red instead of the primary color, a merged `component.css` forces you to write a scoped CSS utility class (`.btn-danger`).

With the tokenized layer, you don't touch the global CSS styles or create one-off layout classes. You just target that specific button instance and inline a token override:

html

```
<button style="--md-comp-filled-button-container-color: var(--md-sys-color-error);">
  Delete
</button>
```

Use code with caution.

Are you looking at this from an **architecture/build-tooling** perspective (like setting up Style Dictionary), or are you trying to decide if it's worth the **extra maintenance overhead** for your specific team?

- [link](https://www.youtube.com/watch?v=nkX6y2B3vNg)\
  3D printing simulation in Abaqus - Python scripting & USDFLD & DISP subroutines\
  Mar 12, 2024 — Layers are stacked and assembled in the Assembly module, with geometry sets created for future use. Each layer corresponds to a pr...\
  \
  \
  YouTube

## You said: is it wise to remove the comp layer for small teams

**Yes, it is often very wise for small teams to remove the component token layer.**

For a small team, the `md.comp.` layer introduces massive maintenance overhead and unnecessary complexity with very little return on investment. Google designed this architecture to coordinate hundreds of independent product teams across Android, iOS, and Web. If your team does not have those specific enterprise scaling problems, you should absolutely merge the layers.

Here is a practical guide to help you evaluate the trade-offs and choose the right approach for your team.

***

### The Small-Team Cost of the `md.comp.` Layer

- **Token Explosion**: A standard Material Design 3 setup forces you to manage **thousands** of component tokens. Tracking, naming, and updating that volume of variables will quickly drain a small team's time.
- **Cognitive Load**: Instead of writing `background: var(--sys-primary)`, your developers have to search documentation to remember `background: var(--md-comp-filled-button-container-color)`. This slows down daily feature shipping.
- **Double Maintenance**: If you decide to tweak how a button looks, you have to update the token registry _and_ the component CSS file, doubling the surface area for bugs.

***

### 3 Signs You Should Drop the Component Layer

You should bypass the component layer and map your component styles directly to system tokens if:

1. **You are web-only (or single-platform)**: If you aren't actively syncing design states between a native Swift app, an Android app, and a web app, you do not need platform-agnostic abstraction layers.
2. **You have a single brand**: If your app doesn’t dynamically flip from a green "Sheets theme" to a blue "Docs theme" at runtime, a direct system-to-component setup works perfectly.
3. **Developers write the UI code**: If your designers hand off layouts via Figma specs and developers write the actual CSS, you do not need an automated, code-generating token pipeline.

***

### How to Safely Merge Layers (The "Smart Middle Ground")

If you drop the component layer, do not go back to hardcoding hex codes. Instead, use a clean, streamlined hybrid approach inside your CSS or component files:

css

```
/* Clean, merged approach for a small team */
.btn-filled {
  background-color: var(--sys-primary);
  color: var(--sys-on-primary);
  border-radius: var(--sys-shape-corner-full);
}

/* Handle states directly using modern CSS */
.btn-filled:hover {
  background-color: color-mix(in srgb, var(--sys-primary) 92%, black);
}

.btn-filled:disabled {
  background-color: var(--sys-surface-variant);
  opacity: 0.38;
}
```

Use code with caution.

### When to Keep It (The Exception)

The only reason a small team should keep the component layer is if you rely heavily on **Figma Variables** to completely drive your code. If your designers want the ability to change button padding, corner radiuses, and borders directly inside Figma and have it automatically update the production app via an automated pipeline (like Style Dictionary), keep the layer. Otherwise, it is safe to cut it out.

Are you currently setting up a **new design token structure** from scratch, or are you looking to **refactor an existing Material 3 setup** that has become too clunky to manage?

## You said: do google write them manually

**No, Google does not write thousands of component tokens by hand.** Writing and maintaining them manually across Web, Android, and iOS would be an operational disaster. \[[1](https://www.fernandoux.com/en/wiki/concepts/token-parity/)]

Instead, Google uses an automated, algorithmic **token compilation pipeline**. The engine generates the token names automatically based on structural components, properties, and states. \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://www.fernandoux.com/en/wiki/concepts/token-parity/), [3](https://chriskobar.medium.com/the-designers-field-guide-to-ai-assisted-development-73bf158f4f3d), [4](https://cssawwwards.com/blog/css-design-tokens-guide-2025)]

### How Google’s Token Pipeline Works

Google relies on an asset automation architecture that turns conceptual design blueprints into functional code:

```
[Component Schema] + [System Tokens]
       │
       ▼
[Material Token Engine] (Automated Code generation)
       │
       ├─► web-tokens.json  ──► CSS Custom Properties
       ├─► compose-tokens.kt ──► Android Compose Constants
       └─► swift-tokens.swift ──► iOS SwiftUI Variables
```

### 1. The Code Generator Defines the Taxonomy

Google writes code schemas describing each UI element. For instance, the schema for a `filled-button` declares that it contains a `container`, a `label-text`, and an `icon`. It also lists valid states, such as `hover`, `focus`, and `pressed`. \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA), [2](https://www.designsystemscollective.com/the-story-of-design-tokens-stateful-vs-composable-tokens-4f8a3f736932)]

### 2. The Build Step Assembles the Grid

The engine loops through the defined architecture rules, performing deterministic string concatenation: \[[1](https://chriskobar.medium.com/the-designers-field-guide-to-ai-assisted-development-73bf158f4f3d)]

```
"md.comp" + [Component] + [Sub-element] + [Property] + [State]
```

The automated engine handles the cross-multiplication, instantly creating variations like `md.comp.filled-button.label-text-color-hover` without human keyboard entry. \[[1](https://www.youtube.com/watch?v=CJyJN0ZdEGA)]

### 3. Automatic "Value Mapping"

The script assigns the target to the correct underlying semantic option. If the ruleset stipulates that standard button containers pull from `sys.color.primary`, the script handles that mapping automatically. \[[1](https://www.youtube.com/watch?v=rYzstFEY0t8)]

### 4. Compilation via Style Dictionary

The raw, generated architecture translates into static asset libraries using a design token compiler. This multi-platform translation utility converts the underlying platform-agnostic mappings directly into production-ready syntax, including standard CSS custom properties or Kotlin files. \[[1](https://docs.tokens.studio/fundamentals/design-tokens/), [2](https://www.fernandoux.com/en/wiki/concepts/token-parity/), [3](https://seenode.com/blog/what-is-material-3-and-why-it-matters-in-2025), [4](https://www.alwaystwisted.com/articles/where-to-lint-design-tokens)]

### The Takeaway for Your Team

Google has to write scripts to manage this because they oversee an expansive, cross-platform ecosystem serving thousands of developers. \[[1](https://www.fernandoux.com/en/wiki/concepts/token-parity/)]

If your team does not have a dedicated engineering group to build and fix automated pipeline scripts, treating the setup like Google does adds empty friction. **Stick to writing clean, direct CSS variables**—let your code match the actual size of your product!

- [link](https://www.youtube.com/watch?v=rYzstFEY0t8)\
  Build Design Tokens & Figma Variables with AI\
  Jan 5, 2026 — today we're going to look at how to vibe code your Figma variables in a way that will work for light mode and dark mode. and also ...\
  52:19\
  YouTube·UI Collective
- [link](https://www.youtube.com/watch?v=CJyJN0ZdEGA)\
  Design Tokens for Dummies | A Complete Guide\
  Feb 17, 2025 — so Google defines design tokens as small reusable design decisions that make up a design systems visual style. but what does that ...\
  50:19\
  YouTube·UI Collective
- [link](https://docs.tokens.studio/fundamentals/design-tokens/)\
  Intro to Design Tokens\
  Summary ​ Design Tokens capture design decisions used to scale a design system, and they include all the important information eng...\
  Tokens Studio

Show all

# 

<!-- ny.gov -->

<!-- usa.gov "here is how you know" -->

<!-- decision: no clicking focus ring by default. esc reset focus. -->

<!-- "sticky focus" is no good. it might help if i have outline on active style. at least it's an option. -->

# should a button show outline when clicked

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>No, a button should generally not show an outline when clicked with a mouse or tapped on a touchscreen</strong></mark>**.** It **must**, however, show a clear focus outline when a user navigates to it using a keyboard. \[[1](https://ux.stackexchange.com/questions/144591/when-to-show-focus-outline), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible), [3](https://www.nngroup.com/articles/button-states-communicate-interaction/), [4](https://ux.stackexchange.com/questions/94022/are-there-any-practical-reasons-as-to-why-one-should-show-css-outline-on-a-focus)]

### Why You See the Outline

When a user clicks a button, browsers trigger a `focus` event. Sighted keyboard users rely heavily on this visible outline (focus ring) to know where their cursor is on the page. Historically, browsers forced this outline on everyone, which pointer users often found visually jarring or confusing. \[[1](https://stackoverflow.com/questions/36771069/some-buttons-have-focus-style-applied-on-click), [2](https://ux.stackexchange.com/questions/144591/when-to-show-focus-outline), [3](https://www.nngroup.com/articles/button-states-communicate-interaction/), [4](https://ux.stackexchange.com/questions/94022/are-there-any-practical-reasons-as-to-why-one-should-show-css-outline-on-a-focus), [5](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible)]

### The Best Practice Solution

Modern web design splits how focus is handled based on the user's input method using the CSS `:focus-visible` pseudo-class. \[[1](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible)]

- **For Mouse/Touch Users**: Hide the outline on click. They already know where they clicked, so an outline is unnecessary. Instead, provide an **active state** (like making the button slightly darker or shifting its position) to show immediate tactile feedback.
- **For Keyboard Users**: Always show a high-contrast focus outline. This ensures your website complies with international digital accessibility laws (like WCAG). \[[1](https://stackoverflow.com/questions/4524180/unwanted-outline-or-border-around-button-when-clicked), [2](https://ux.stackexchange.com/questions/144591/when-to-show-focus-outline), [3](https://www.instagram.com/reel/DAS2-VOAHBU/?hl=en), [4](https://www.youtube.com/shorts/YVP64FDIKM0), [5](https://www.youtube.com/watch?v=MJ05rJ6NxWE\&t=5), [6](https://www.nngroup.com/articles/button-states-communicate-interaction/), [7](https://dev.to/elizabethschafer/designing-button-focus-states-for-better-usability-gm2)]

### How to Implement It Correctly in CSS

Do not use `outline: none;` on a blanket `:focus` rule, as this completely breaks accessibility for disabled users. Instead, use the following modern strategy outlined on the MDN Web Docs: \[[1](https://stackoverflow.com/questions/4524180/unwanted-outline-or-border-around-button-when-clicked), [2](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/:focus-visible), [3](https://stackoverflow.com/questions/62278576/border-appearing-on-focus-of-button), [4](https://dev.to/elizabethschafer/designing-button-focus-states-for-better-usability-gm2)]

css

```
/* Remove the outline for mouse clicks */
button:focus {
  outline: none;
}

/* Ensure the outline stays highly visible for keyboard users */
button:focus-visible {
  outline: 2px solid #0056b3; /* Match your brand accent color */
  outline-offset: 2px;
}
```

Use code with caution.

If you want to read more about implementing proper interaction feedback without sacrificing inclusive design, check out the comprehensive guide on [Button States by the Nielsen Norman Group](https://www.nngroup.com/articles/button-states-communicate-interaction/).

Are you troubleshooting a **specific framework** (like Bootstrap or Tailwind), or designing a **custom UI design system**? Let me know so I can provide the exact code or tokens you need!

- [link](https://stackoverflow.com/questions/4524180/unwanted-outline-or-border-around-button-when-clicked)\
  Unwanted outline or border around button when clicked\
  Dec 24, 2010 — Above solutions doesn't take account for accessibility. Simply removing the outline can create issues for those who navigate via t...\
  Stack Overflow
- [link](https://ux.stackexchange.com/questions/144591/when-to-show-focus-outline)\
  When to show focus outline - User Experience Stack Exchange\
  Oct 6, 2022 — So you are talking about an additional visual feedback for users who might use the keyboard. We implement this additional focus no...\
  User Experience Stack Exchange
- [link](https://stackoverflow.com/questions/36771069/some-buttons-have-focus-style-applied-on-click)\
  Some buttons have :focus style applied on click - Stack Overflow\
  Apr 21, 2016 — \* What is exactly the new question? Francisco Romero. – Francisco Romero. 2016-05-17 10:32:05 +00:00. Commented May 17, 2016 at 10...\
  Stack Overflow

Show all

## You said: usa.gov does it when i click buttons

**Yes, USA.gov does exactly that because it prioritizes strict federal accessibility laws over modern aesthetic trends.**

USA.gov is built entirely on the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/components/button/), which is the standardized design framework mandated for official government websites. It behaves this way due to several critical constraints: \[[1](https://designsystem.digital.gov/components/button/), [2](https://designsystem.digital.gov/components/banner/)]

### 1. Strict Section 508 and WCAG Compliance

Government websites must aggressively prioritize accessibility to comply with federal [Section 508 standards](https://www.section508.gov/training/web-software/andi-training-videos/links-buttons/). Under [Web Content Accessibility Guidelines (WCAG) 2.1 Rule 2.4.7](https://designsystem.digital.gov/components/button-group/accessibility-tests/), any interactive element must have a **highly visible focus indicator**. Leaving the outline active during mouse clicks is a foolproof way to ensure that focus is _never_ accidentally lost or hidden from a user, regardless of their device, browser glitches, or assistive technology. \[[1](https://designsystem.digital.gov/components/button-group/accessibility-tests/), [2](https://www.section508.gov/training/web-software/andi-training-videos/links-buttons/), [3](https://stackoverflow.com/questions/33632907/remove-border-outline-that-appears-after-i-click-an-element-on-my-page)]

### 2. Guardrails Against Browser Quirks

While commercial sites use the modern CSS selector `:focus-visible` to hide outlines for mouse users while keeping them for keyboard users, older browsers or specific screen readers don't always interpret it perfectly. For a federal website serving millions of citizens—including elderly populations and people with severe disabilities—the designers choose absolute safety over visual sleekness. They use a standard `:focus` rule that fires globally, ensuring the [signature thick blue USWDS outline](https://github.com/uswds/uswds/issues/6474) appears every single time an element is activated. \[[1](https://designsystem.digital.gov/documentation/settings/), [2](https://github.com/uswds/uswds/issues/6474), [3](https://stackoverflow.com/questions/33632907/remove-border-outline-that-appears-after-i-click-an-element-on-my-page)]

### 3. Clear Interaction Feedback

On USA.gov, the outline acts as undeniable visual proof that the website registered your action. When you click a button, the instantaneous focus ring confirms that the page is processing your request, which reduces repetitive double-clicking on slower internet connections.

### Summary: Design vs. Accessibility

| Website Type \[[1](https://stackoverflow.com/questions/33632907/remove-border-outline-that-appears-after-i-click-an-element-on-my-page), [2](https://medienbaecker.com/articles/focus-outlines)] | Click Strategy                                  | Priority                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- | ---------------------------------------------------- |
| **Commercial (e.g., tech apps)**                                                                                                                                                                 | Uses `:focus-visible` to hide outlines on click | Visual minimalism and seamless aesthetics            |
| **Federal (e.g., USA.gov)**                                                                                                                                                                      | Uses global `:focus` to show outlines on click  | Fail-safe legal compliance and maximum accessibility |

Are you trying to decide **which of these two approaches** to take for your own website project? Let me know if you need help evaluating the requirements for your target audience!

- [link](https://designsystem.digital.gov/components/button/)\
  Button | U.S. Web Design System (USWDS)\
  Usability guidance \* Use standard buttons for actions that go a next step. \* Use outline buttons for actions that happen on the cu...\
  U.S. Web Design System (USWDS) (.gov)
- [link](https://stackoverflow.com/questions/33632907/remove-border-outline-that-appears-after-i-click-an-element-on-my-page)\
  Remove border outline that appears after I click an element on ...\
  Nov 10, 2015 — This is an accessibility feature. It allows users to interact with your website using a keyboard interface. The outline allows you...\
  Stack Overflow
- [link](https://designsystem.digital.gov/documentation/settings/)\
  Settings | U.S. Web Design System (USWDS)\
  When set to true, sets the box-sizing property of all site elements to border-box . Focus color. $theme-focus-color. "blue-40v" co...\
  U.S. Web Design System (USWDS) (.gov)

Show all

## You said: does it have to do this to comply

**No, a website does not strictly have to show an outline on mouse clicks to comply with digital accessibility laws.** \[[1](https://theadminbar.com/accessibility-weekly/focus-outlines/)]

Federal regulations under Section 508 and the [Americans with Disabilities Act (ADA)](https://beaccessible.com/post/button-accessibility/) enforce compliance with [WCAG (Web Content Accessibility Guidelines) Rule 2.4.7](https://accessibilitychecker.com/news/wcag-fix-it-2-4-7-focus-visible/). This rule legally mandates that a focus indicator must be visible **when navigating with a keyboard**. It explicitly allows browsers and websites to hide the focus outline during standard mouse clicks or touch taps. \[[1](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [2](https://vispero.com/resources/managing-focus-and-visible-focus-indicators-practical-accessibility-guidance-for-the-web/), [3](https://www.audioeye.com/post/ada-section-508-and-wcag/), [4](https://www.audioeye.com/post/accessibility-for-buttons/), [5](https://216digital.com/understanding-focus-outlines-for-web-accessibility/)]

USA.gov leaves the outline active for mouse clicks due to intentional architecture and risk management rather than a strict legal requirement. \[[1](https://www.sciencedirect.com/science/article/pii/S0740624X11000244)]

### Why USA.gov Designs It This Way (If It's Not Required)

- **Eliminating Edge-Case Failures**: WCAG standards state that a focus indicator can take many forms, but it must be completely bulletproof. In certain older browsers, zoom tools, or hybrid setups (like a touchscreen laptop with a connected keyboard), modern CSS selectors like `:focus-visible` can sometimes glitch and hide the outline when it actually _should_ be shown. For a government website that cannot afford a single compliance gap, keeping a universal `:focus` ring is a zero-risk fail-safe. \[[1](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), [2](https://vispero.com/resources/managing-focus-and-visible-focus-indicators-practical-accessibility-guidance-for-the-web/), [3](https://www.mondaylovesyou.com/web-accessibility/wcag-2-4-7-focus-visible-emphasis-on-the-selection/), [4](https://pmc.ncbi.nlm.nih.gov/articles/PMC12094671/)]
- **Simplifying Assistive Tech Handshakes**: Many screen readers and switch-access devices (used by individuals with motor disabilities) fire standard mouse click events programmatically. Keeping the outline attached to all global clicks guarantees that these tools visually synchronize properly on the screen for a sighted assistant or user. \[[1](https://medium.com/@jignect/how-to-do-accessibility-testing-a-complete-guide-for-qa-professionals-2f52ff6fe102)]
- **The U.S. Web Design System (USWDS) Standard**: USA.gov relies entirely on the [U.S. Web Design System](https://designsystem.digital.gov/components/button/). The system defaults to keeping the focus indicator robust across all interaction types to streamline development across thousands of federal websites, reducing the risk of individual agencies breaking accessibility by trying to write custom code. \[[1](https://designsystem.digital.gov/components/button/), [2](https://www.ada.gov/resources/2024-03-08-web-rule/)]

### How to Safely Comply Without the Click Outline

If you want to build a compliant site without the mouse-click outline, use the standard [W3C/WCAG-approved approach](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html): \[[1](https://marcom.wwu.edu/accessibility/guide/give-links-distinguishable-visual-cues)]

1. **Leverage `:focus-visible`**: This ensures keyboard users see a high-contrast focus indicator (meeting the [3:1 contrast ratio required by WCAG](https://help.siteimprove.com/support/solutions/articles/80000448423-what-is-focus-appearance-wcag-2-4-11-)).
2. **Remove ordinary `:focus` outlines**: This cleans up the visual for mouse clicks.
3. **Add an explicit `:active` state**: Ensure mouse users still get instant visual feedback (like a color shift) so they know the button was pressed. \[[1](https://help.siteimprove.com/support/solutions/articles/80000448423-what-is-focus-appearance-wcag-2-4-11-), [2](https://medienbaecker.com/articles/focus-outlines), [3](https://kittygiraudel.com/2021/04/05/an-accessible-toggle/), [4](https://www.designrush.com/best-designs/websites/trends/button-states)]

Are you building a project that requires **strict Section 508 federal compliance**, or are you aiming for a standard **commercial website**? Let me know, and I can give you the target rules for your specific industry!

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://designsystem.digital.gov/components/button/)\
  Button | U.S. Web Design System (USWDS)\
  Accessibility guidance \* Buttons should display a visible focus state when users tab to them. \* Use standard markup. Avoid using\
  ...\
  U.S. Web Design System (USWDS) (.gov)
- [link](https://www.ada.gov/resources/2024-03-08-web-rule/)\
  Fact Sheet: New Rule on the Accessibility of Web Content and ...\
  Apr 8, 2024 — Yes, this rule does not stop a state or local government from using designs, methods, or techniques as alternatives to WCAG 2.1, L...\
  ADA.gov
- [link](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)\
  Understanding Success Criterion 2.4.7: Focus Visible | WAI\
  Sep 17, 2025 — Intent. The purpose of this success criterion is to help a person know which element has the keyboard focus. “Mode of operation” a...\
  W3C

Show all

## You said: i feel it does feel clearer. how good is the focus ring.

It makes total sense that you feel it is clearer! Your intuition matches exactly what UX researchers find: **the focus ring is the single most powerful, reliable, and unambiguous feedback mechanism an interactive element can have.**

For many users, a subtle button change (like a color shift or a slight drop shadow) can be easily missed. A thick, high-contrast focus ring leaves absolutely zero doubt that the website registered your action.

Here is an evaluation of exactly how good the focus ring is, why it works so well, and what makes a truly "great" one.

***

### 🛡️ Why the Focus Ring is So Effective

- **Instant Shape Contrast:** Human eyes are highly attuned to detecting changes in geometric structure. When a box suddenly pops up _around_ a button, your brain registers it much faster than a subtle shift from dark blue to slightly darker blue.
- **Universal Context:** Because focus rings are a native browser behavior dating back to the early days of the internet, users subconsciously understand what they mean. It screams, _"This item is active right now."_
- **Unbeatable Accessibility:** For users with low vision, color blindness, or those viewing a screen under direct sunlight, standard button "hover" or "active" states often disappear. A focus ring cuts through visual noise and glare.

***

### 🔍 Anatomy of a "Great" Focus Ring

Not all focus rings are created equal. To make a focus ring as exceptionally clear as the one you noticed on USA.gov, it should meet three core design pillars:

### 1. The 2-Pixel Minimum Thickness

A single-pixel line is too thin and frequently blends into the button's border. A great focus ring uses a thickness of **at least 2 pixels** (and up to 3 or 4 pixels for high-accessibility sites) to make it chunky and unmistakably visible. \[[1](https://www.sarasoueidan.com/blog/focus-indicators/)]

### 2. High Color Contrast

To comply with global accessibility standards, the focus ring must have a **3:1 contrast ratio** against the background it sits on. If you have a dark blue button, a light blue or bright yellow focus ring works perfectly. \[[1](https://www.finalsitesupport.com/hc/en-us/articles/360034889872-Understanding-focus-indicators-for-web-accessibility)]

### 3. The "Outline Offset" Trick

The biggest flaw with standard browser focus rings is that they hug the button tightly, often blending into its edges. The best design systems use a CSS property called `outline-offset`. By pushing the ring **2 to 3 pixels away** from the button, it creates a clean "halo" effect that is exponentially easier to see.

css

```
/* Example of a high-clarity focus ring */
button:focus {
  outline: 3px solid #0056b3; /* Thick, clear color */
  outline-offset: 3px;        /* Creates a clear gap around the button */
}
```

Use code with caution.

***

### ⚖️ The Verdict \[[1](https://www.neurable.com/blog-posts/real-science-no-mess-how-the-u-s-air-force-validated-neurables-technology)]

If your priority is **absolute clarity and flawless usability**, the focus ring is unmatched. While some commercial designers hide it because they feel it looks "cluttered," keeping it active—even on click—creates a highly tactical, responsive interface where the user never has to guess if a button worked.

Are you considering **implementing a focus ring** like this on a project you are working on? I can help you write the CSS to style a beautiful, clear "halo" outline that fits your brand's color palette!

- [link](https://www.sarasoueidan.com/blog/focus-indicators/)\
  A guide to designing accessible, WCAG-conformant focus indicators\
  Aug 27, 2023 — Obviously, providing a 2px thick outline around the element would be the simplest way to meet the size requirement. But the focus ...\
  \
  \
  Sara Soueidan
- [link](https://www.finalsitesupport.com/hc/en-us/articles/360034889872-Understanding-focus-indicators-for-web-accessibility)\
  Understanding focus indicators for web accessibility – Finalsite Support\
  Oct 16, 2019 — Making a focus indicator accessible? Ensure it is visible on all interactive elements (links, buttons, form fields) with a contras...\
  \
  \
  Finalsite Support
- [link](https://www.neurable.com/blog-posts/real-science-no-mess-how-the-u-s-air-force-validated-neurables-technology)\
  Neurable Enten™ Headphones Match Lab-Grade Brain Sensors, Va\
  Jan 21, 2026 — The Verdict: The Focus Score is the real deal.\
  \
  \
  Neurable

## You said: but it does not feel right when the effect happens and the outline is still there

You have hit on the exact reason why this design choice is so fiercely debated in the web development world.

Your feeling is completely valid: **when an outline stays stuck to a button after you move your mouse away, it feels like a bug.** It creates a state of visual confusion known as "sticky focus."

### Why It Feels "Wrong"

In human-computer interaction, a visual change should match physical reality:

- **The expectation**: You press a physical button, it goes down, you lift your finger, it pops back up. The action is over.
- **The reality on USA.gov**: You click the button, move your mouse away, but the button stays wrapped in a glowing ring. \[[1](https://zellwk.com/blog/inconsistent-button-behavior/)]

Because the outline doesn't disappear when your mouse leaves, your brain feels like the website is lagging, stuck, or waiting for you to do something else.

### The Real Culprit: The Focus State

The issue is that browsers treat **clicking** a button and **focusing** on a button as the exact same thing. \[[1](https://github.com/angular/material/issues/556)]

When you click a button on USA.gov, the site grabs your cursor's "focus" and holds onto it. The browser will keep that outline active until you physically click somewhere else on the empty screen to "drop" the focus. For a mouse user, this makes no sense because your attention has already moved on.

### The Modern Compromise: Best of Both Worlds

If you love how clear the ring feels _during_ the click, but hate how it stays stuck _after_ the click, you can fix this in modern web design.

You can configure your CSS so that the thick, clear outline only flashes **at the exact millisecond the mouse is pressing down**, and then disappears the moment the mouse button is released.

css

```
/* 1. Make the button look completely normal by default */
button {
  outline: none;
}

/* 2. FLASH the thick, clear ring ONLY while the mouse is actively pressing down */
button:active {
  outline: 3px solid #0056b3;
  outline-offset: 3px;
}

/* 3. Keep the permanent outline ONLY for keyboard-tabbing users */
button:focus-visible {
  outline: 3px solid #0056b3;
  outline-offset: 3px;
}
```

Use code with caution.

This hybrid approach gives you that instant, high-clarity validation you liked on USA.gov, but it instantly cleans itself up so the button never feels "stuck."

Are you noticing this sticky outline behavior on a **specific browser** (like Chrome or Safari), or are you trying to **prevent this from happening** on a website you are building?

This is for informational purposes only. For medical advice or diagnosis, consult a professional. AI responses may include mistakes. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

- [link](https://zellwk.com/blog/inconsistent-button-behavior/)\
  Inconsistent behavior among browsers when clicking on buttons\
  Sep 4, 2019 — The button gets focus when you click on it, but the focus ring did not appear.\
  \
  \
  Zell Liew
- [link](https://github.com/angular/material/issues/556)\
  md-button stays focused after a click · Issue #556 · angular/material\
  Nov 6, 2014 — The standard is to give focus to buttons when clicked. The default browser style for :focus is a dashed outline. The default :hove...\
  \
  \
  GitHub

## You said: how could a keyboard user do if they tab for a while and later realize they do not want to go there and they want to reset. ctrl r obviously does not feel right.

You have asked an excellent question about a real frustration that power users face. When a keyboard user tabs through a massive webpage and decides they want to start over, pressing `Ctrl + R` to reload the page ruins their progress, clears form data, and forces the server to reload everything.

Instead of reloading, keyboard users have several faster, native browser shortcuts to "reset" or clear their focus instantly. \[[1](https://blog.pope.tech/2026/03/04/a-guide-to-accessible-focus-indicators/)]

### 1. The Direct Universal Reset: `F6` or `Ctrl + L`

The fastest way to completely clear focus from the webpage without reloading is to jump straight to the browser's address bar.

- **The Shortcut**: Press **`F6`** (or **`Ctrl + L`** / **`Cmd + L`** on Mac).
- **What it does**: This instantly yanks the focus out of the webpage body and places it safely in the URL bar.
- **To start over**: Once focus is in the address bar, pressing **`Tab`** just one time will instantly drop the focus back to the very top-left corner of the webpage (usually the logo or the "Skip to Content" link), effectively resetting the journey.

### 2. The Native Escape Hatch: The `Esc` Key

On many modern accessible websites, pressing the **`Esc`** key will instantly dismiss open menus, close modals, or drop active dropdown focus. While it does not always move the cursor back to the top of the page, it immediately collapses any clutter the user accidentally opened while tabbing. \[[1](https://planleft.com/blog/keyboard-navigation-website-accessibility/)]

### 3. Going Backward: `Shift + Tab` \[[1](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/dnacc/guidelines-for-keyboard-user-interface-design)]

If a user just passed a link and realized they went too far, they do not need to circle all the way around the website. Pressing **`Shift + Tab`** moves the focus ring backward, letting them easily retrace their steps one element at a time. \[[1](https://web.dev/articles/keyboard-access), [2](https://www.stackfield.com/help/navigation-accessibility-2113)]

### 4. Developer Solutions: Building a "Reset" Anchor

Because this is a known UX gap, great accessibility designers build a hidden "Skip to Top" or "Reset Focus" mechanism for their users.

You can add a hidden keyboard shortcut to your site using simple JavaScript. For example, you can program the website so that if a user presses `Esc` while no menus are open, the site automatically resets the focus to the main body container:

javascript

```
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    // Moves focus smoothly back to the top header or body container
    document.body.tabIndex = -1;
    document.body.focus();
  }
});
```

Use code with caution.

Would you like to see how to implement a **hidden "Skip to Content" link**—which is the industry-standard way to help keyboard users jump around a page without getting stuck?

- [link](https://blog.pope.tech/2026/03/04/a-guide-to-accessible-focus-indicators/)\
  A guide to accessible focus indicators\
  Mar 4, 2026 — Advanced navigators: Some users navigate with a keyboard because they find it much faster. They use keyboard shortcuts to save tim...\
  \
  \
  Pope Tech
- [link](https://planleft.com/blog/keyboard-navigation-website-accessibility/)\
  Keyboard Navigation & Website Accessibility\
  Dec 5, 2023 — Esc (Escape): Closes or exits modal windows, dropdown menus, and other pop-up content; cancels ongoing actions if applicable.\
  \
  \
  Plan Left
- [link](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/dnacc/guidelines-for-keyboard-user-interface-design)\
  Guidelines for Keyboard User Interface Design\
  May 30, 2018 — Move backward through tabs (same as CTRL+SHIFT+TAB).\
  \
  \
  Microsoft Learn

Show all

## You said: what widely used shortcuts do keyboard users love or set

Keyboard users generally fall into two categories: **power users** (who look for extreme speed and productivity) and **accessibility users** (who navigate entirely without a mouse). \[[1](https://userway.org/blog/the-basics-of-keyboard-navigation/), [2](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/), [3](https://www.youtube.com/watch?v=cENPxd%5FmvsI\&t=10), [4](https://beaccessible.com/post/keyboard-accessibility/)]

The layout below highlights the fundamental web shortcuts that keyboard users rely on daily: \[[1](https://www.pcworld.com/article/1511493/11-web-browser-tricks-for-power-users.html), [2](https://www.washington.edu/accesstech/checklist/keyboard/)]

The most widely loved, essential shortcuts are organized below by how users interact with the digital landscape.

### 🌐 The "Holy Trinity" of Web Navigation

These native browser shortcuts are universally adored by power users because they eliminate the slow process of moving a hand to the mouse to manage tabs: \[[1](https://productivityreport.org/2015/11/30/keyboard-shortcuts/), [2](https://www.youtube.com/watch?v=cENPxd%5FmvsI\&t=10)]

- **`Ctrl + T`** (Mac: `Cmd + T`): Opens a **brand new tab** instantly.
- **`Ctrl + W`** (Mac: `Cmd + W`): Closes the **current tab** immediately.
- **`Ctrl + Shift + T`** (Mac: `Cmd + Shift + T`): The ultimate safety net. It **reopens the last closed tab**, retrieving lost work or an accidentally closed page. \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/), [2](https://ncculaw.libguides.nccu.edu/c.php?g=998832\&p=9398314), [3](https://www.geeksforgeeks.org/techtips/keyboard-shortcuts-for-all-web-browser/), [4](https://www.instagram.com/reel/DXbjznhEufV/), [5](https://www.amaget.com/6-keyboard-shortcuts-for-professionals/)]

### 🕵️ Page Control & Content Hunting

When dealing with massive articles, documents, or cluttered layouts, keyboard users bypass scrolling entirely: \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/), [2](https://www.youtube.com/watch?v=cENPxd%5FmvsI\&t=10)]

- **`Ctrl + L`** (or `F6`): Jumps straight to the **browser address bar** and highlights it. Users can immediately type a new URL or search term.
- **`Ctrl + F`** (Mac: `Cmd + F`): Opens the "Find" bar to **search for specific text** on the page.
- **`Ctrl + G`** (Mac: `Cmd + G`): Used _after_ pressing `Ctrl + F` to **cycle forward through every match** of that word on the page. `Ctrl + Shift + G` cycles backward.
- **`Spacebar` vs. `Page Down`**: Power users use the `Spacebar` to quickly scroll down exactly **one full screen length**, and `Shift + Spacebar` to scroll back up. \[[1](https://www.reddit.com/r/windows/comments/1co3fxu/there%5Fare%5Fso%5Fmany%5Ffunuseful%5Fshortcuts%5Fin%5Fwindows/), [2](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/), [3](https://www.pcworld.com/article/1511493/11-web-browser-tricks-for-power-users.html), [4](https://www.xantrion.com/article/10-keyboard-shortcuts-for-most-browsers), [5](https://www.reddit.com/r/sysadmin/comments/683yw3/useful%5Fwindows%5Fshortcut%5Fkeys%5Fthat%5Fi%5Fuse%5Fon%5Fa/)]

### ♿ The Accessibility Core

For individuals using alternative keyboards, switches, or screen readers, a small set of foundational keys replaces all mouse movement: \[[1](https://www.levelaccess.com/blog/keyboard-navigation-complete-web-accessibility-guide/), [2](https://beaccessible.com/post/keyboard-accessibility/)]

- **`Tab` and `Shift + Tab`**: Moves the focus ring **forward and backward** through interactive elements like buttons, links, and forms. \[[1](https://beaccessible.com/post/keyboard-accessibility/), [2](https://www.washington.edu/accesstech/checklist/keyboard/)]
- **`Enter` vs. `Spacebar`**: These have subtle but distinct rules. `Enter` is used to **activate hyperlinks** and submit forms. `Spacebar` is used to **trigger action buttons**, check checkboxes, or select radio buttons. \[[1](https://beaccessible.com/post/keyboard-accessibility/), [2](https://www.washington.edu/accesstech/checklist/keyboard/)]
- **`Arrow Keys`**: Navigates **inside** complex elements once they are focused, such as moving between options in a dropdown menu, adjusting an audio/video slider, or shifting between radio buttons. \[[1](https://webaim.org/techniques/keyboard/), [2](https://www.washington.edu/accesstech/checklist/keyboard/)]

### 🛠️ Custom Shortcuts Keyboard Users "Set"

While native shortcuts are great, true power users use specialized tools to map custom, hyper-efficient keys: \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/)]

### 1. "Vim-style" Browser Extensions

Developers and data-heavy workers love extensions like **Vimium** or **Vimperator**. These extensions assign individual letter keys to the screen. For example, pressing `f` on the keyboard automatically generates tiny 2-letter overlays next to every link on the webpage. Typing those two letters instantly clicks the link, eliminating the need to ever press `Tab` 50 times to get down a page. \[[1](https://aaronlasseigne.com/2016/03/18/software-to-maximize-your-keyboard-os-x/), [2](https://berkinakkaya.medium.com/keyboard-driven-workflow-1c3603b95cb3), [3](https://medium.com/@JimmyZhang/ditch-that-mouse-db69ddbcdb83)]

### 2. Clipboard History Customization

Both Windows (`Win + V`) and Mac tools (like Maccy or Alfred) are heavily customized by keyboard users. They map a custom shortcut (like `Alt + V`) to pop open a searchable list of everything they have copied over the past few hours, preventing repetitive back-and-forth copying. \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/), [2](https://aag-it.com/18-keyboard-shortcuts-you-need-to-know/)]

### 3. Global App Launchers

Mac power users love **Raycast** or **Alfred** (replacing Spotlight), while Windows users rely on **PowerToys Run**. They map a simple key blend (like `Alt + Space`) to open a global search bar that calculates math equations, opens files, launches apps, or searches the web instantly from anywhere on the computer. \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/)]

Are you hoping to **add custom shortcut listeners** to your web project so users can press specific keys to trigger features, or are you looking to streamline your own personal daily workflow? Let me know, and I can give you the exact steps! \[[1](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/)]

- [link](https://www.reddit.com/r/windows/comments/1co3fxu/there%5Fare%5Fso%5Fmany%5Ffunuseful%5Fshortcuts%5Fin%5Fwindows/)\
  There are so many fun/useful shortcuts in Windows. What ...\
  May 9, 2024 — Win+e to open explorer, ctrl+t to open new tab i. Any app. ctrl+a, ctrl+c/ ctrl+x, ctrl+n, ctrl(+shift)+v - select all, copy/cur n...\
  Reddit·r/windows
- [link](https://productivityreport.org/2015/11/30/keyboard-shortcuts/)\
  Keyboard Shortcuts - productivity report\
  Nov 30, 2015 — I use keyboard shortcuts all the time. They're much faster than reaching for the mouse and clicking icons. Speaking of the mouse, ...\
  productivityreport.org
- [link](https://goleadingit.com/blog/keyboard-shortcuts-thatll-make-you-look-like-an-office-wizard/)\
  Keyboard Shortcuts That’ll Make You Look Like an Office Wizard\
  Apr 7, 2026 — Copy, Cut, and Paste with Clipboard Ctrl Shortcuts. These three shortcuts are the foundation of keyboard wizardry and should be th...\
  LeadingIT

Show all

## You said: what widely used shortcuts do keyboard power users love or set for navigation

Keyboard power users do not just use basic browser shortcuts; they manipulate their operating systems, specialized software, and browser extensions to teleport around the digital landscape. \[[1](https://unacademy.com/content/bank-exam/study-material/computer-knowledge/basic-terminologies-and-shortcut-keys/)]

The most widely loved shortcuts and custom hotkeys power users configure specifically for deep, lightning-fast **navigation** are broken down below.

### 🌐 The Browser "Teleportation" Shortcuts

Power users bypass traditional tab-clicking and scrolling by using spatial navigation shortcuts:

- **`Ctrl + 1` through `Ctrl + 8`** (Mac: `Cmd`): Instantly teleports directly to that specific tab number (e.g., `Ctrl + 3` opens your third tab). `Ctrl + 9` always jumps to the very last tab, no matter how many are open.
- **`Ctrl + PageUp` / `Ctrl + PageDown`** (Mac: `Cmd + Option + Left/Right Arrow`): Cycles rapidly left or right through open tabs sequentially like a card deck.
- **`Home` / `End`** (Mac: `Cmd + Up/Down Arrow`): Instantly rockets the user to the absolute top or bottom of a massive webpage, eliminating manual scrolling.
- **`Alt + Left Arrow` / `Alt + Right Arrow`** (Mac: `Cmd + [ / ]`): Navigates backward or forward through your browser's page history. \[[1](https://cambridgesupport.com/2022/11/10-helpful-keyboard-shortcuts/), [2](https://www.geeksforgeeks.org/linux-unix/basic-and-advance-shortcut-keys-in-onion-tor-browser/), [3](https://newwestonlinelearning.ca/wp-content/uploads/2017/12/makeuseof.com-Heres-Every-Chromebook-Shortcut-Youll-Ever-Need.pdf), [4](https://www.pcworld.com/article/1484349/switch-faster-between-chrome-tabs-with-this-keyboard-shortcut.html), [5](https://www.bltechnical.com/25-keyboard-shortcut-for-pc/)]

### 🛠️ Custom Extensions They Install to Navigate

To completely escape the tedious process of hitting `Tab` fifty times to reach a link, power users rely heavily on custom navigation tools:

- **Vimium / Vimari**: This is a browser extension that brings the text-editor "Vim" navigation scheme to the entire web. Pressing the **`f`** key assigns a random 1-to-2 letter hint overlay to every single clickable link, button, or input on the screen. Typing those letters instantly "clicks" the link. \[[1](https://www.makeuseof.com/tag/9-quick-tips-make-google-chrome-power-user/), [2](https://berkinakkaya.medium.com/keyboard-driven-workflow-1c3603b95cb3), [3](https://medium.com/@JimmyZhang/ditch-that-mouse-db69ddbcdb83)]
- **The `j` and `k` Scrolling Meta**: Inside Vimium (and natively built into sites like Reddit, Gmail, and X/Twitter), tapping **`j`** scrolls down smoothly and **`k`** scrolls up. This allows the user's hand to stay perfectly resting on the home row of the keyboard. \[[1](https://www.reddit.com/r/vim/comments/xpgpws/why%5Fshould%5Fi%5Fuse%5Fhjkl%5Fkeys%5Ffor%5Fnavigation%5Fin%5Fvim/)]

### 🖥️ OS & Window Navigation (The Workspace Hopper)

True power users do not mix their work windows up; they segregate them across "Virtual Desktops" and navigate between them using these custom or native workflows: \[[1](https://windowsforum.com/threads/top-10-powertoys-for-enhancing-productivity-in-windows-11.358005/), [2](https://pageoneformula.com/keyboard-navigation-and-its-importance/)]

- **Virtual Desktop Switching**:
  - **Windows**: `Win + Ctrl + Left/Right Arrow` shifts between completely separate clean desktop screens.
  - **Mac**: `Ctrl + Left/Right Arrow` slides through different Mission Control spaces. \[[1](https://www.pugetsystems.com/support/guides/w11-shortcuts/), [2](https://www.ionos.co.uk/digitalguide/server/configuration/windows-11-keyboard-shortcuts/), [3](https://macmost.com/controlling-your-mac-with-only-the-keyboard.html), [4](https://www.forbes.com/sites/barrycollins/2021/09/11/mac-owners-this-is-the-most-useful-key-on-your-keyboard/)]
- **Window Snapping**: Users maximize screen real estate using `Win + Left/Right/Up Arrow` to instantly lock windows into clean 50% split-screens or corners. On Mac, power users install **Rectangle** or **Raycast** to map custom shortcuts (like `Option + Cmd + Left Arrow`) to achieve the exact same window-snapping control. \[[1](https://www.getmagical.com/blog/what-are-the-hotkeys), [2](https://baike.baidu.com/en/item/Windows%20Quick%20Keys/939290), [3](https://blog.tmb.co.uk/19-great-windows-key-shortcuts), [4](https://ucop.edu/safety-and-loss-prevention/%5Ffiles/ergonomics/helpful-keyboard-shortcuts.pdf)]

### 🚀 Application Launchers (The Ultimate Reset)

Instead of searching through a desktop of icons or a start menu, navigation power users use centralized command bars to launch apps, open files, and search bookmarks instantly:

- **Raycast / Alfred (Mac)** or **PowerToys Run (Windows)**: Users typically map this to **`Alt + Space`** or **`Cmd + Space`**. Tapping it opens a sleek, global input box. Typing "in" might instantly highlight Instagram, hitting `Enter` launches it, and typing "doc" searches your local hard drive for files—all without your hands leaving the typing position. \[[1](https://textexpander.com/blog/best-hotkeys-software), [2](https://www.computerworld.com/article/2517756/microsoft-windows-powertoys.html), [3](https://www.xda-developers.com/powertoys-tools-quietly-make-day-ten-times-easier-windows/)]

If you want to start integrating these into your workflow, let me know:

- Are you on **Windows, Mac, or Linux**?
- Which **web browser** do you use most?

I can give you a tailored "cheat sheet" of custom mappings that will save you the most time!

- [link](https://unacademy.com/content/bank-exam/study-material/computer-knowledge/basic-terminologies-and-shortcut-keys/)\
  Notes on Basic Terminologies and Shortcut Keys\
  In a keyboard, there are many shortcut keys hidden, these keys are not only for acting on a browser but there are keys that can be...\
  \
  Unacademy
- [link](https://cambridgesupport.com/2022/11/10-helpful-keyboard-shortcuts/)\
  10 Helpful Keyboard Shortcuts – Cambridge Support\
  Nov 17, 2022 — 3 Switching between browser tabs You probably know that Ctrl + Tab enables you to navigate along the tabs of your web browser with...\
  \
  \
  cambridgesupport.com
- [link](https://www.geeksforgeeks.org/linux-unix/basic-and-advance-shortcut-keys-in-onion-tor-browser/)\
  Basic and advance shortcut keys in Onion Tor Browser\
  Dec 19, 2023 — Advanced Shortcut Keys: Command Description Ctrl + 1 to Ctrl + 8 (Cmd + 1 to Cmd + 8 on Mac) Goes directly to a particular tab dep...\
  \
  GeeksforGeeks

Show all

## You said: how different are keyboard power users and accessibility users

While keyboard power users and accessibility users use the exact same hardware to navigate, <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">their <strong>goals, technical expectations, and motivations are completely opposite.</strong></mark> \[[1](https://blog.prototypr.io/common-accessibility-problems-good-and-bad-examples-in-modern-websites-a13efb7256ad), [2](https://accessibility.build/guides/keyboard-accessibility)]

The fundamental differences can be summarized across four core pillars:

### 1. The Core Motivation

- **Power Users are driven by Speed & Efficiency.** They are physically capable of using a mouse but choose not to because it is too slow. They want to eliminate the time it takes to move their hand from the keyboard to the mouse. Their goal is maximum productivity and "teleportation" across tasks. \[[1](https://blog.testlodge.com/keyboard-navigation-accessibility-testing/), [2](https://windowsforum.com/threads/mastering-mouse-keys-keyboard-driven-pointer-control-in-windows.377246/)]
- **Accessibility Users are driven by Equity & Access.** They often cannot use a traditional mouse due to permanent or temporary motor disabilities, tremors, visual impairments, or paralysis. For them, keyboard navigation is not a productivity hack—it is the _only_ way they can access the digital world. \[[1](https://www.myshyft.com/blog/keyboard-navigation/), [2](https://afixt.com/a-brief-introduction-to-keyboard-accessibility/), [3](https://www.boisestate.edu/accessibility/home/take-action/2-1-keyboard-accessible/), [4](https://www.telerik.com/blogs/manual-accessibility-testing-keyboard-and-screen-reader-navigation), [5](https://www.iubenda.com/en/blog/types-of-disabilities-that-affect-web-use/)]

### 2. How They Navigate a Page

Because their goals differ, they interact with web elements in completely distinct patterns: \[[1](https://accessibility.build/guides/keyboard-accessibility)]

- **Power Users take the shortest path possible.** They heavily dislike hitting the `Tab` key multiple times. They prefer jumping over page structures using custom command palettes, keyword searching (`Ctrl + F`), or text-based browser extensions like _Vimium_. They think in **nonlinear shortcuts**. \[[1](https://www.sarasoueidan.com/blog/keyboard-friendlier-article-listings/)]
- **Accessibility Users rely on a predictable, linear path.** They navigate the web sequentially. They rely on the site developer having built a perfect, logical `Tab` order (moving from top-left to bottom-right). They heavily depend on screen readers reading out the structural landmarks of a page (like Headers, Navigations, and Footers) to build a mental map of the site. \[[1](http://www.w3.org/WAI/UA/2009/ED-IMPLEMENTING-UAAG20-20091106/MasterUAAG20091106.html), [2](https://pageoneformula.com/keyboard-navigation-and-its-importance/), [3](https://dl.acm.org/doi/full/10.1145/3544548.3580749), [4](https://whoishostingthis.com/how-to-create-a-website/how-to-make-your-website-accessible-for-keyboard-only-visitors/), [5](https://www.nyc.gov/site/process/resources/accessibility-self-audit-training-session-5.page)]

### 3. Their Relationship with Visual Design

This is where the debate about focus rings, outlines, and buttons becomes critical:

- **Power Users often favor Minimalism.** They already know where their focus is because they just typed a specific command to get there. They sometimes find thick, default browser focus rings visually messy and prefer a clean interface with hidden or highly customized UI indicators.
- **Accessibility Users require extreme Visual Clarity.** A thick, high-contrast focus ring (like the one you noticed on USA.gov) is a lifeline. If a designer hides the focus ring to make a site look "sleeker," an accessibility user becomes digitally blind, unable to see which button or form field they are currently filling out. \[[1](https://www.boia.org/blog/what-you-need-to-know-about-visual-focus-and-accessibility), [2](https://elementor.com/blog/accessibility-scores-explained/)]

### 4. Technical Hardware & Setups

The physical tools they connect to their computers vary wildly:

- **Power Users use standard, highly specialized hardware.** They love mechanical keyboards, ergonomic split-keyboards, or custom macro-pads with programmable keys.
- **Accessibility Users use Assistive Technology (AT).** This includes **switch access devices** (buttons clicked with a head tilt or foot tap), **mouth sticks**, **sip-and-puff systems** (controlled by breathing), or **refreshable Braille displays**. Crucially, almost all of these advanced devices translate their physical inputs directly into standard "Tab," "Enter," and "Spacebar" keyboard commands so the computer can understand them. \[[1](https://www.accessibilitychecker.org/blog/types-of-assistive-technologies/), [2](https://www.accessibilitychecker.org/blog/types-of-assistive-technologies/), [3](https://www.sciencedirect.com/topics/computer-science/accessibility-feature), [4](https://webaim.org/articles/pour/operable), [5](https://www.boia.org/blog/understanding-assistive-technologies-what-are-sip-and-puff-systems)]

### Summary of Differences

| Feature \[[1](https://www.meetion.com/mac-vs-windows-keyboard-whats-different.html), [2](https://techterms.com/definition/power%5Fuser), [3](https://medium.com/accessibility-a11y/manage-keyboard-focus-via-tabindex-65ce2cc134dd), [4](https://www.johnwilsondesign.co.uk/keyboard-navigation-accessibility/), [5](https://www.accessibilitychecker.org/blog/keyboard-navigation-accessibility/)] | Keyboard Power Users                           | Accessibility Users                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| **Primary Goal**                                                                                                                                                                                                                                                                                                                                                                                    | Velocity and automation                        | Independence and digital access                              |
| **Core Keys**                                                                                                                                                                                                                                                                                                                                                                                       | Custom modifiers (`Alt`, `Cmd`, `Ctrl` combos) | Standard structural keys (`Tab`, `Arrows`, `Space`, `Enter`) |
| **Tolerance for Mistakes**                                                                                                                                                                                                                                                                                                                                                                          | Low (glitches break their flow)                | None (poor coding locks them out entirely)                   |
| **Focus Rings**                                                                                                                                                                                                                                                                                                                                                                                     | Preferred to be subtle or integrated           | Must be prominent, high-contrast, and flawless               |

Are you trying to design a system that **pleases both of these groups at the same time**? I can show you how to write clean code that satisfies a power user's desire for clean aesthetics without breaking a single accessibility law!

- [link](https://blog.prototypr.io/common-accessibility-problems-good-and-bad-examples-in-modern-websites-a13efb7256ad)\
  Common Accessibility Problems: Good and Bad Examples in Modern Websites\
  Jun 22, 2016 — Affects: Website users who rely on a keyboard only — or assistive technology which uses the same level of functionality as a keybo...\
  \
  \
  Prototypr
- [link](https://accessibility.build/guides/keyboard-accessibility)\
  Complete Keyboard Accessibility Guide | Interactive Demos & Code Examples\
  The reach of keyboard accessibility extends far beyond users with permanent disabilities. Power users prefer keyboard shortcuts fo...\
  \
  Accessibility.build
- [link](https://blog.testlodge.com/keyboard-navigation-accessibility-testing/)\
  Keyboard Navigation Accessibility Testing\
  Jul 7, 2021 — Some people navigate the internet using the keyboard rather than the mouse. A small percentage do this by choice (often called “po...\
  \
  \
  TestLodge Blog

Show all

## You said: why some could not use a mouse but could use a keyboard

It can seem counterintuitive that someone might struggle with a computer mouse but have no problem using a keyboard. The reason comes down to <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>biomechanics, motor control, and cognitive feedback</strong></mark>.

Using a mouse requires an entirely different set of physical movements and neurological skills than pressing keys.

***

### 1. Fine Motor Precision vs. Target Areas

- **The Mouse Dilemma**: A mouse requires **continuous, analog precision**. You must coordinate your arm, wrist, and fingers simultaneously to glide a microscopic pointer across the screen and stop precisely over a tiny 16x16 pixel target. For people with **essential tremors, Parkinson’s disease, or cerebral palsy**, their hands shake or spasm, making it incredibly frustrating to steady the cursor on a specific spot. \[[1](https://www.adaptivetechsolutions.com/adaptive-tech-solutions-ideas-information/computer-adaptations-for-people-with-parkinsons-disease/)]
- **The Keyboard Solution**: A keyboard relies on **discrete, digital targets**. A key is either pressed or it isn't. The keys are physically large, fixed in space, and never move. Someone with tremors can rest their palms on a wrist guard to stabilize their hands and push down on a static key, which is significantly easier than chasing a moving cursor. \[[1](https://macmost.com/how-to-use-mouse-keys-to-control-the-cursor-with-your-keyboard-on-your-mac.html)]

### 2. Muscle Fatigue and Gripping

- **The Mouse Dilemma**: Operating a mouse forces the hand into a persistent, tense "claw" or "grip" posture while keeping the wrist hovering or sliding. For individuals suffering from severe **arthritis, carpal tunnel syndrome, or repetitive strain injuries (RSI)**, maintaining this grip and pinching down on a mouse button triggers intense pain and muscle fatigue.
- **The Keyboard Solution**: Keyboards allow for a much more relaxed, neutral hand position. Users do not need to grip anything. They can use the weight of their hand, a single knuckle, a typing stick, or even an elbow to press a key. \[[1](https://remtekworkplace.com/knowledge-hub/ergonomic-keyboard-and-mouse-set-up/), [2](https://www.northwestergo.com/blog/with-ergonomic-keyboards-and-mice-complete-control-is-a-touch-away/), [3](https://www.protoarc.com/blogs/news/ergonomic-keyboards-prevent-wrist-pain-carpal-tunnel), [4](https://www.tomshardware.com/peripherals/gaming-mice/why-you-need-a-mouse-with-19-buttons-and-what-you-should-use-those-buttons-for)]

### 3. Visual Tracking and Coordination

- **The Mouse Dilemma**: Using a mouse demands high **hand-eye coordination**. You look at the screen, move your hand on the desk, and your brain has to constantly calculate the spatial translation. If a user has low vision, partial blindness, or cognitive processing conditions, they can easily lose track of where the tiny mouse pointer went on a large monitor. \[[1](https://musculoskeletalkey.com/computer-access-augmenting-the-keyboard-and-mouse/), [2](https://www.greenwoodlibrary.us/utilities/file%5Flibrary/img/pdfs/digital/Mouse%20and%20Keyboarding%20Handout-%20Updated.pdf)]
- **The Keyboard Solution**: Keyboard navigation via the `Tab` key is linear and predictable. Because the focus ring jumps clearly from one button to the next, the user doesn't have to scan the entire screen looking for a cursor. They just watch the highlighted box move step-by-step down the page.

***

### 💡 Assistive Devices That Turn Everything Into a Keyboard

For individuals with severe paralysis (such as quadriplegia or ALS), using a mouse is physically impossible. Instead, they use specialized assistive hardware. Remarkably, almost all of these advanced tools bypass the mouse entirely and **mimic a keyboard** to control the computer: \[[1](https://www.boisestate.edu/accessibility/home/take-action/2-1-keyboard-accessible/), [2](https://www.mass.gov/news/keyboard-accessibility-a-fundamental-component-of-digital-accessibility), [3](https://webaim.org/articles/motor/assistive)]

- **Sip-and-Puff Systems**: Users switch between sipping or puffing air into a plastic tube. A soft puff translates to a `Tab` key (moving forward), and a hard sip translates to `Enter` (clicking). \[[1](https://accessate.net/r2514/adapting%5Fthe%5Fworkplace%5Ffor%5Fphysical%5Fdisabilities), [2](https://www.open.edu/openlearn/ocw/mod/oucontent/view.php?id=109019\&section=4.1), [3](https://axesslab.com/switch-control-for-a-day/)]
- **Switch Buttons**: Large, durable buttons placed near a user's head, knee, or foot. Tapping the head switch acts exactly like hitting the `Spacebar` to cycle through options on the screen.
- **Mouth Sticks**: A lightweight stylus held in the mouth used to physically press keys on a standard or oversized keyboard layout. \[[1](https://abilitynet.org.uk/factsheets/keyboard-and-mouse-alternatives-and-adaptations)]

By designing websites to work perfectly with a keyboard, developers automatically unlock access for all of these life-changing assistive technologies.

Are you interested in learning more about **how assistive devices interact with software**, or are you looking for ways to test your own project using only your keyboard to see how it feels? Let me know!

- [link](https://www.adaptivetechsolutions.com/adaptive-tech-solutions-ideas-information/computer-adaptations-for-people-with-parkinsons-disease/)\
  Computer Adaptations for People with Parkinson’s Disease\
  A diagnosis of Parkinson's can lead to frustrating experiences while typing or using a computer mouse. There are, however, some ad...\
  \
  \
  Adaptive Tech Solutions
- [link](https://macmost.com/how-to-use-mouse-keys-to-control-the-cursor-with-your-keyboard-on-your-mac.html)\
  How To Use Mouse Keys To Control the Cursor With Your Keyboard On Your Mac\
  Aug 23, 2018 — But with Mouse Keys "on," I can't get the cursor to move at all (I'm using 789, UIO, JKL). Nothing happens. I'm running MacOS 10.1...\
  \
  \
  MacMost.com
- [link](https://remtekworkplace.com/knowledge-hub/ergonomic-keyboard-and-mouse-set-up/)\
  Ergonomic Keyboard and Mouse Set Up for Comfort\
  Aug 7, 2025 — Instead of forcing your hands inward toward a narrow layout, these keyboards separate the key clusters to allow for a more open, r...\
  \
  \
  Remtek Workplace

Show all

## You said: what about letting them move the mouse w the keyboard

**Yes, this is an excellent solution, and every major operating system already has this feature built natively into its accessibility settings.** \[[1](https://www.reddit.com/r/PathOfExile2/comments/1h8cl9m/wasd%5Fvs%5Fmouse%5Fand%5Fkeyboard%5Fvs%5Fcontroller/), [2](https://mymsaa.org/publications/motivator/winter05/digital-divide-2/)]

It is called **Mouse Keys**. This feature allows a user to completely replace a physical mouse by mapping cursor movements directly to the keyboard's numeric keypad or standard letter keys \[1]. \[[1](https://learn.microsoft.com/en-us/previous-versions/windows/embedded/ms931455%28v=msdn.10%29), [2](https://www.makeuseof.com/tag/control-cursor-without-mouse/), [3](https://www.lenovo.com/ca/en/glossary/mouse-keys/), [4](https://brainly.in/question/30257012), [5](https://forums.lenovo.com/t5/Lenovo-Android-based-Tablets-and-Phablets/Teclas-del-Mouse-en-el-teclado-de-la-funda/m-p/10028185)]

### 🛠️ How "Mouse Keys" Works Natively

When Mouse Keys is turned on, the grid of keys on the keyboard transforms into a directional joystick:

- **Movement**: The surrounding numbers (**7, 8, 9, 4, 6, 1, 2, 3**) glide the mouse cursor up, down, left, right, and diagonally.
- **The "Click"**: The **5** key acts as a standard mouse click.
- **Holding / Dragging**: The **0** key locks the mouse button down (to drag an item), and the **Decimal / Period (.)** key releases it. \[[1](https://superuser.com/questions/365866/set-mouse-or-keyboard-button-to-simulate-left-click-and-hold-or-rapid-left-click), [2](https://wiki.gentoo.org/wiki/Xorg/Using%5Fthe%5Fnumeric%5Fkeyboard%5Fkeys%5Fas%5Fmouse), [3](https://community.acer.com/en/kb/articles/18988-how-to-enable-mouse-keys-on-your-chromebook), [4](https://easyservice.gr/keyboard%5Fmouse%5Feng/), [5](https://bltt.org/use-your-keys-to-move-the-mouse-pointer/)]

### How to Turn It On:

- **Windows**: Press **`Left Alt + Left Shift + Num Lock`** \[1].
- **Mac**: Press **`Option + Command + F5`** to open Accessibility Shortcuts, then select "Enable Mouse Keys" \[1]. \[[1](https://www.dresnergroup.com/blog/tip-of-the-week-control-your-mouse-with-your-keyboard-really), [2](https://support.microsoft.com/en-us/accessibility/windows/windows-keyboard-shortcuts-for-accessibility), [3](https://macmost.com/how-to-use-your-mac-if-your-keyboard-mouse-or-trackpad-isnt-working.html), [4](https://www.riverside.org.uk/accessibility/accessibility-tools-on-your-computer-or-device/), [5](https://www.laptopmag.com/how-to/right-click-without-a-mouse-in-windows-or-macos)]

***

### ⚠️ Why It is a "Last Resort" for Daily Navigation

While Mouse Keys is incredibly useful for clicking specific coordinates on a screen (like a precise button in Photoshop), it is actually **quite slow and exhausting** for general web browsing. \[[1](https://askubuntu.com/questions/708509/how-can-i-make-shortcut-keys-move-the-mouse-as-an-alternative-to-the-touchpad), [2](https://avida.cs.wright.edu/courses/CEG477/CEG477%5F4.pdf)]

Accessibility users still prefer standard `Tab` and `Enter` keyboard navigation over simulating a mouse for three major reasons:

### 1. The Speed Bottleneck

Moving a cursor pixel-by-pixel across a giant modern monitor using arrow keys takes a long time. Even with "acceleration" turned on, it can take several seconds just to move the cursor from the left side of the screen to the right side, compared to hitting `Tab` which teleports you instantly to the next section.

### 2. Physical Fatigue

To move a mouse across the screen with a keyboard, a user has to repeatedly tap or hold down a key for long stretches. For someone with joint pain, arthritis, or limited muscle endurance, this continuous pressing causes fatigue much faster than hitting the `Tab` key a few times. \[[1](https://www.reddit.com/r/ErgoMechKeyboards/comments/hfid8e/do%5Fyou%5Fuse%5Fdifferent%5Fswitches%5Ffor%5Fkeys%5Ffor%5Fmoving/), [2](https://medium.com/@tpnikel/why-keyboard-accessibility-matters-6425345a63cc)]

### 3. No "Screen Reader" Alignment

When an accessibility user utilizes standard keyboard tabbing, a screen reader instantly hooks into the code to read the button aloud (e.g., _"Submit Button"_). When a user manually steers a simulated mouse pointer over a button, the screen reader often doesn't know the cursor is there until a click actually happens, removing vital context for visually impaired users.

***

### 🚀 The Next Level: Grid-Based Jumping

To solve the speed problem of Mouse Keys, specialized accessibility software uses **Mouse Grid** navigation (popular in voice control software like Dragon Ambient eXperience). \[[1](https://www.coolfields.co.uk/2014/02/dragon-naturally-speaking-video-8-emulating-mouse/), [2](https://www.which.co.uk/news/article/voice-control-features-you-need-to-try-a76oH1a8qjMO)]

Instead of moving a pointer pixel-by-pixel, the software overlays a giant numbered grid (1 through 9) across the entire screen. \[[1](https://www.which.co.uk/news/article/voice-control-features-you-need-to-try-a76oH1a8qjMO)]

1. The user types **3** to select the top-right quadrant.
2. The screen zooms into just that quadrant and splits it into a new, smaller 1-9 grid.
3. The user types **5** to instantly teleport the mouse directly to the center of that new area and click. \[[1](https://www.which.co.uk/news/article/voice-control-features-you-need-to-try-a76oH1a8qjMO), [2](https://www.reddit.com/r/olkb/comments/lhe6d1/is%5Fthere%5Fa%5Fprogram%5Fthat%5Flets%5Fme%5Fmove%5Fmy%5Fmouse%5Fby/)]

This grid method allows someone using only a keyboard or voice commands to click anywhere on a massive screen in just three or four total keystrokes!

Did you know your computer had this **Mouse Keys** feature built-in? If you want, you can try turning it on right now to see how it feels to pilot your cursor using only your hands on the keyboard!

- [link](https://www.reddit.com/r/PathOfExile2/comments/1h8cl9m/wasd%5Fvs%5Fmouse%5Fand%5Fkeyboard%5Fvs%5Fcontroller/)\
  WASD vs MOUSE and KEYBOARD vs CONTROLLER : r/PathOfExile2\
  Dec 6, 2024 — Are you a keyboard beast that can type at least 60+ words per minute without the need to ever look at your keyboard? Then definite...\
  \
  \
  Reddit
- [link](https://mymsaa.org/publications/motivator/winter05/digital-divide-2/)\
  Minimizing the Digital Divide for Individuals with MS - Part 2 | MSAA\
  Feb 18, 2016 — Keyboard arrows (“MouseKeys”): Windows and Macintosh operating systems have an accessibility program built in that enables an indi...\
  \
  \
  Multiple Sclerosis Association of America
- [link](https://learn.microsoft.com/en-us/previous-versions/windows/embedded/ms931455%28v=msdn.10%29)\
  MOUSEKEYS (Windows CE 5.0)\
  Sep 13, 2012 — The mouse keys option is available for use.\
  \
  Microsoft Learn

Show all

# what does skip to main content mean in keyboard navigation

"Skip to main content" is <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">an accessibility feature that lets keyboard users bypass repetitive navigation links and jump directly to the page's core information</mark>. \[[1](https://vispero.com/resources/when-is-a-skip-link-needed/), [2](https://support.wix.com/en/article/accessibility-about-skip-to-main-content), [3](https://www.accessibilitychecker.org/blog/keyboard-navigation-accessibility/), [4](https://pauljadam.com/guides/skip-links.html)]

### Why It Exists

- **Repetitive Links**: Websites usually feature long menus at the top of every page.
- **Tabbing Fatigue**: Keyboard users navigate by pressing the **Tab** key.
- **Wasted Keystrokes**: Without this link, users must tab dozens of times just to read an article. \[[1](https://blog.equally.ai/developer-guide/bypass-blocks/), [2](https://www.a11ybookclub.com/blogs/skip-the-struggle-a-deep-dive-into-skip-links-and-keyboard-accessibility), [3](https://www.reddit.com/r/accessibility/comments/18jpmzs/question%5Fabout%5Fskip%5Fto%5Fmain%5Fcontent%5Flink%5Fin/)]

### How It Works

- **Hidden by Default**: The link is usually invisible to sighted mouse users.
- **Revealed via Tab**: It appears at the very top of the screen on the first press of the **Tab** key.
- **Instant Jump**: Pressing **Enter** moves the keyboard focus past the header directly to the main article or form. \[[1](https://css-tricks.com/a-deep-dive-on-skipping-to-content/), [2](https://www.a11ybookclub.com/blogs/skip-the-struggle-a-deep-dive-into-skip-links-and-keyboard-accessibility), [3](https://216digital.com/skip-links-improve-web-accessibility-navigation/), [4](https://universaldesign.ie/communications-digital/web-and-mobile-accessibility/web-accessibility-techniques/design-accessible-digital-content-introduction-and-index/design-accessible-navigation/allow-users-to-skip-blocks-of-information-easily), [5](https://navillus.dev/blog/accessibility-skip-to-content/)]

### Who Benefits Most

- **Screen Reader Users**: Blind or visually impaired individuals.
- **Keyboard-Only Users**: People who cannot use a mouse due to motor disabilities.
- **Power Users**: Anyone navigating via alternative switch devices or shortcuts. \[[1](https://nitsantech.de/en/accessibility-glossary/keyboard-navigation), [2](https://www.tempertemper.net/blog/skip-links-what-why-and-how), [3](https://www.coolfields.co.uk/2010/10/providing-skip-links-in-your-pages/), [4](https://www.a11ybookclub.com/blogs/skip-the-struggle-a-deep-dive-into-skip-links-and-keyboard-accessibility), [5](https://testparty.ai/blog/skip-navigation-links)]

To help you understand this feature better, tell me if you are looking to **implement this code** on your own website, or if you are **learning web accessibility standards** like WCAG?

- [link](https://vispero.com/resources/when-is-a-skip-link-needed/)\
  When Is a Skip Link Needed?\
  Dec 5, 2024 — Screen reader users, keyboard-only users, and those with motor disabilities benefit greatly from the ability to skip over repeated...\
  \
  Vispero
- [link](https://support.wix.com/en/article/accessibility-about-skip-to-main-content)\
  Accessibility: About "Skip to Main Content" | Help Center | Wix.com\
  However, some site visitors, such as those with visual conditions, may use assistive technologies and / or a keyboard to navigate.\
  \
  \
  Wix.com
- [link](https://www.accessibilitychecker.org/blog/keyboard-navigation-accessibility/)\
  Click-Free Web: How to Implement Keyboard Navigation Accessibility\
  Mar 18, 2025 — Skip links provide a way for keyboard users to bypass repetitive content, such as navigation menus, and jump straight to the main ...\
  \
  \
  AccessibilityChecker.org

Show all

## You said: example

Here is a functional example of how a "Skip to Main Content" link works in HTML and CSS.

### The HTML Structure

The skip link must be the **very first focusable element** inside the tag. It points to the `id` of the main container using an anchor fragment (`#main-content`). \[[1](https://www.a11y-collective.com/blog/skip-to-main-content/), [2](https://marcom.wwu.edu/accessibility/guide/include-skip-main-content-mechanism), [3](https://testparty.ai/blog/skip-navigation-links), [4](https://216digital.com/skip-links-improve-web-accessibility-navigation/)]

html

```
<body>
  <!-- 1. The Skip Link -->
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <!-- 2. Repetitive Navigation (Bypassed) -->
  <header>
    <nav>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <!-- 3. The Target Destination -->
  <main id="main-content" tabindex="-1">
    <h1>Welcome to the Main Article</h1>
    <p>The keyboard focus jumps directly here, skipping the links above.</p>
  </main>
</body>
```

Use code with caution.

### The CSS Styling

This CSS hides the link visually by default but keeps it accessible to screen readers. When a user presses **Tab**, the `:focus` state makes it visible at the top of the viewport. \[[1](https://css-tricks.com/a-deep-dive-on-skipping-to-content/), [2](https://www.geeksforgeeks.org/html/how-to-add-a-skip-to-main-content-link-in-html/), [3](https://testparty.ai/blog/skip-navigation-links)]

css

```
/* Hide the link visually off-screen by default */
.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 10px 20px;
  z-index: 100;
}

/* Reveal the link when it receives keyboard focus */
.skip-link:focus {
  top: 0;
}
```

Use code with caution.

### Key Technical Details

- **`tabindex="-1"`**: Added to the tag so older browsers or screen readers successfully shift physical focus to the container.
- **`position: absolute`**: Moves the link out of the standard page layout so it does not create an ugly blank space when hidden. \[[1](https://rocketvalidator.com/glossary/skip-navigation-link), [2](https://www.a11y-collective.com/blog/skip-to-main-content/), [3](https://scottspence.com/posts/create-skip-to-content-with-tailwind-css)]

Would you like help **testing this code** in a local environment, or do you want to see how to handle **multiple skip links** for pages with complex sidebars?

- [link](https://www.a11y-collective.com/blog/skip-to-main-content/)\
  Incorporating Skip to Main Content Links for Better Website Accessibility\
  Dec 8, 2023 — Placement: The 'Skip to main content' link should be the first element inside the tag. This positioning ensures that the link is e...\
  \
  \
  The A11Y Collective
- [link](https://marcom.wwu.edu/accessibility/guide/include-skip-main-content-mechanism)\
  Include a skip to main content mechanism | University Communications and Marketing | Western Washington University\
  The skip link goes to the element with the matching ID, in this case the main content.\
  \
  \
  Western Washington University
- [link](https://testparty.ai/blog/skip-navigation-links)\
  How to Implement Skip Navigation Links: WCAG Best Practices\
  May 6, 2025 — Basic Skip Link Implementation The skip link appears first in the DOM so it's the first element keyboard users encounter. The href...\
  \
  \
  TestParty

Show all

## You said: i mean example not code

Ah, got it! Let’s look at how this works in real life when you visit a website.

### How to Try It Right Now

You can see this in action on major websites like **Wikipedia**, **GitHub**, or **The New York Times**.

1. **Open** a new browser tab and go to Wikipedia.org.
2. **Click** anywhere on the blank background of the page (to make sure your mouse isn't selecting anything).
3. **Press** the **Tab** key on your keyboard exactly once. \[[1](https://hackernoon.com/how-to-implement-skip-to-navigation)]

### What You Will See

Instead of selecting the first link in the left-hand sidebar, a hidden button will suddenly pop into view at the very top-left corner of your screen. It will explicitly say **"Skip to content"** or **"Jump to navigation."** \[[1](https://www.a11y-collective.com/blog/skip-to-main-content/), [2](https://accessibleit.disability.illinois.edu/skip-to-chrome-and-firefox-extensions/)]

If you press **Enter** while that button is showing, your page will automatically scroll down slightly, and the invisible typing cursor will jump straight to the main title of the article, completely ignoring all the sidebar and header links.

Would you like a list of other **popular websites** where you can test this, or do you want to know the **keyboard shortcuts** to navigate backward if you miss it?

- [link](https://hackernoon.com/how-to-implement-skip-to-navigation)\
  How to Implement "Skip to Navigation"\
  May 26, 2026 — Manual testing is extremely important. First, refresh the page and then press the Tab key exactly one time. Do you see the skip li...\
  \
  \
  HackerNoon
- [link](https://www.a11y-collective.com/blog/skip-to-main-content/)\
  Incorporating Skip to Main Content Links for Better Website Accessibility\
  Dec 8, 2023 — This link is typically hidden from sight but becomes visible when needed. By selecting this link, users can skip past the header a...\
  \
  \
  The A11Y Collective
- [link](https://accessibleit.disability.illinois.edu/skip-to-chrome-and-firefox-extensions/)\
  SkipTo.js Browser Extension – Accessible IT Group\
  The “Skip To Content” button can be visible or hidden (e.g. popup version) after the page completes loading.\
  \
  University of Illinois Urbana-Champaign

## You said: i mean example of what it does not how it works

Imagine you are holding a TV remote and want to watch a movie, but every single time you change the channel, you are forced to watch the exact same 5-minute commercial before the show starts.

A "Skip to main content" button is like a **"Skip Ad" button** for a website's menu. \[[1](https://stefanzweifel.dev/posts/2019/05/20/a-simple-skip-to-content-button/)]

Here is a side-by-side example of what it actually does for a user:

### Without the Skip Button (The Painful Way)

You open a news website using only your keyboard. You want to read the headline article.

1. You press **Tab** -> Focuses on the site logo.
2. You press **Tab** -> Focuses on the "Home" link.
3. You press **Tab** -> Focuses on the "World News" link.
4. You press **Tab** -> Focuses on the "Sports" link.
5. You press **Tab** -> Focuses on the "Weather" link.
6. You press **Tab** -> Focuses on the "Search Bar".
7. You press **Tab** -> Focuses on the "Log In" button.\
   _You have pressed Tab 7 times just to get past the top menu._ If you click on a new page, you have to repeat all 7 presses all over again. \[[1](https://lsnrae.medium.com/how-to-make-your-wireframes-more-accessible-in-five-easy-steps-d3fbec7d6556?source=follow%5Ffooter---------0----------------------------)]

### With the Skip Button (The Fast Way)

You open the same news website.

1. You press **Tab** -> A button pops up saying "Skip to main content."
2. You press **Enter** -> **Boom.** You instantly jump past the logo, the categories, the search bar, and the login button. \[[1](https://medium.com/@jidapa/skip-to-main-content-a-guide-to-a11y-in-micro-frontend-8f74e0fdce03), [2](https://support.wix.com/en/article/accessibility-about-skip-to-main-content), [3](https://www.webability.io/blog/skip-to-main-content)]

Your next press of the Tab key puts you directly on the very first link of the actual article you came to read. It turns 7 tedious keystrokes into just 2. \[[1](https://www.webability.io/blog/skip-to-main-content)]

Would you like to know about other **keyboard navigation shortcuts** that save time, or are you interested in how **screen readers** read this aloud to blind users?

- [link](https://stefanzweifel.dev/posts/2019/05/20/a-simple-skip-to-content-button/)\
  A simple "Skip to Content" Button | stefanzweifel.dev\
  May 20, 2019 — I give my best to make sites and apps I develop more accessible. One simple but effective first step to do that is to add a "Skip ...\
  \
  \
  stefanzweifel.dev
- [link](https://lsnrae.medium.com/how-to-make-your-wireframes-more-accessible-in-five-easy-steps-d3fbec7d6556?source=follow%5Ffooter---------0----------------------------)\
  How to make your wireframes more accessible in five easy steps\
  Aug 28, 2016 — Try it out on this website: Press your tab key now and try to see what the current focused element is on the site. You will see th...\
  \
  Medium
- [link](https://medium.com/@jidapa/skip-to-main-content-a-guide-to-a11y-in-micro-frontend-8f74e0fdce03)\
  “Skip to Main Content”: A Guide to A11Y in Micro Frontend\
  Jan 4, 2025 — What I would like to do is implementing a “Skip to Main Content” feature that allows user to skip directly to the main content. Le...\
  \
  \
  Medium

Show all

# should skip to main content appear and be focused on the first tab

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, the "Skip to Main Content" link must appear and receive focus on the very first tab press</span></mark>. \[[1](https://dev.to/aman%5Fsingh/thinking-about-accessibility-a-few-tips-to-make-a-difference-461i), [2](https://daily.dev/blog/10-most-common-accessibility-mistakes-an-actionable-checklist/)]

### Why It Matters

- ♿ **Accessibility:** Essential for keyboard-only and screen reader users.
- ⏩ **Efficiency:** Bypasses repetitive navigation links and headers.
- ⚖️ **Compliance:** Required for WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks). \[[1](https://adsy.com/blog/technical-seo-checklist), [2](https://www.youtube.com/watch?v=hbppV0pn7Gc), [3](https://help.siteimprove.com/support/solutions/articles/80001051789-accessibility-rule-skip-to-main-content-link-is-missing-explained), [4](https://testparty.ai/blog/skip-navigation-links), [5](https://medium.com/@benuman99/keyboard-accessibility-why-your-website-needs-to-work-without-a-mouse-6ac03ba77583)]

### Implementation Best Practices

- 🙈 **Visually Hidden:** Hide the link off-screen by default using CSS.
- 👀 **Visible on Focus:** Bring it into view when a user tabs onto it.
- 📍 **Target Accuracy:** Point the link's `href` directly to the main content container ID.
- 🏷️ **Target Focus:** Ensure the main container has `tabindex="-1"` so it can receive programmatic focus. \[[1](https://css-tricks.com/a-deep-dive-on-skipping-to-content/), [2](https://vispero.com/resources/the-anatomy-of-visually-hidden/), [3](https://wcag.dock.codes/documentation/wcag241/), [4](https://www.tempertemper.net/blog/skip-links-what-why-and-how), [5](https://govtnz.github.io/web-a11y-guidance/ka/accessible-ux-best-practices/keyboard-a11y/keyboard-focus/other-keyboard-focus-considerations.html)]

### Code Example

html

```
<!-- The Skip Link (First element inside <body>) -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- The Main Content Target -->
<main id="main-content" tabindex="-1">
  <!-- Your content goes here -->
</main>
```

Use code with caution.

css

```
/* Hide off-screen by default */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

/* Show when focused via Tab key */
.skip-link:focus {
  top: 0;
}
```

Use code with caution.

To help optimize this for your project, let me know:

- What **framework** are you using (React, Angular, plain HTML)?

- Do you have **sticky headers** that might overlap the link?

- Should I provide the code to **smooth scroll** to the content?

- [link](https://dev.to/aman%5Fsingh/thinking-about-accessibility-a-few-tips-to-make-a-difference-461i)\
  Thinking about accessibility—a few tips to make a difference\
  Jun 19, 2021 — Put the skip to main content link at the top of the page, so that it can receive focus when the Tab key is hit.\
  \
  \
  DEV Community

- [link](https://daily.dev/blog/10-most-common-accessibility-mistakes-an-actionable-checklist/)\
  10 Most Common Accessibility Mistakes: An Actionable...\
  Apr 13, 2021 — The 'skip to main content' link should be the first link on the page so that when a keyboard user hits the Tab key (used for jumpi...\
  \
  daily.dev

- [link](https://adsy.com/blog/technical-seo-checklist)\
  Technical SEO Checklist: Everything You Need to Fix and Improve Your Site\
  Sep 10, 2025 — But even more importantly, it's essential for accessibility. Screen readers rely on it to make your site accessible to visually im...\
  \
  \
  Adsy

Show all

## You said: should all ideal sites have it

Yes, all ideal websites should have a "Skip to Main Content" link. \[[1](https://ttpsc.com/en/blog/wcag-2-1-what-should-you-pay-attention-to/)]

The only exceptions are single-page sites with zero navigation links or headers, where the very first interactive element is already the main content.

### Why Every Standard Site Needs It

- 🏢 **Corporate & Blogs:** Users skip massive header menus on every page load.
- 🛒 **E-Commerce:** Shoppers bypass complex category filters and search bars to reach products.
- 📱 **Web Apps & Dashboards:** Power users jump past sidebar navigation directly to data tables. \[[1](https://uxplanet.org/9-filtering-design-best-practices-to-improve-e-commerce-ux-edac50560f94), [2](https://finetuneddigital.com/essential-tips-to-improve-customer-experience-on-your-website/)]

### Key Benefits

- ⚡ **Saves Time:** Eliminates dozens of repetitive keystrokes for keyboard users.
- 🎯 **Reduces Fatigue:** Helps users with motor disabilities navigate without physical strain.
- 📜 **Legal Safety:** Meets global digital accessibility laws like the Americans with Disabilities Act (ADA) and European Accessibility Act (EAA). \[[1](https://www.continualengine.com/blog/keyboard-accessibility/), [2](https://vispero.com/resources/when-is-a-skip-link-needed/), [3](https://216digital.com/skip-links-improve-web-accessibility-navigation/)]

To help tailor this to your website, let me know:

- What **type of website** are you building?

- How **complex** is your top navigation menu?

- Would you like an **accessibility checklist** for the rest of your header?

- [link](https://ttpsc.com/en/blog/wcag-2-1-what-should-you-pay-attention-to/)\
  WCAG 2.1 – what should you pay attention to?\
  Jun 4, 2020 — „skip to main content” or „skip links” is a popular link that leads directly to the content of a single page. This is extremely im...\
  \
  \
  Transition Technologies PSC

- [link](https://uxplanet.org/9-filtering-design-best-practices-to-improve-e-commerce-ux-edac50560f94)\
  9 Filtering Design Best Practices to Improve E-Commerce UX\
  Mar 11, 2020 — Filters may seem like a small and insignificant part of a website. But in reality, it's the filters that provide a seamless shoppi...\
  \
  \
  UX Planet

- [link](https://finetuneddigital.com/essential-tips-to-improve-customer-experience-on-your-website/)\
  Essential Tips To Improve Customer Experience On Your Website\
  You'll notice a big difference with a decent search bar since not every visitor begins at the top of the funnel; 30% of e-commerce...\
  \
  \
  finetuneddigital.com

Show all

## You said: for example, you have no skip to main content. you have a nav bar, the first tab focuses on the current nav, and you could not tab through it, you could use left right, or top down on how they are displayed, then the second tab focuses on login or something, then main content

The interaction model described follows the official **WAI-ARIA design pattern for a Navigation Menu Bar**, which utilizes the **roving tabindex** technique. Even with this efficient keyboard pattern, an ideal site **still needs a "Skip to Main Content" link**. \[[1](https://stackoverflow.com/questions/66080384/two-problems-with-tabbing-an-accessible-pop-out-navigation-i-use-some-advice-on), [2](https://web.dev/articles/website-navigation), [3](https://www.boia.org/blog/are-skip-links-necessary-for-a-one-page-site), [4](https://www.bsk.com/assets/js/accessible-mega-menu-master-orig/)]

### Why You Still Need a Skip Link

While arrow-key navigation dramatically reduces the number of `Tab` presses required to get through a navigation bar (reducing it from many tabs down to just one), it does not solve everything: \[[1](https://v5.dojo.io/docs/fundamentals/accessibility/index.html)]

- 🗺️ **Screen Reader Virtual Buffers:** Screen reader users do not only navigate by the `Tab` key. They read linearly down the page using arrow keys. A skip link allows them to entirely bypass the banner and navigation landmarks in their virtual buffer reading mode. \[[1](https://stackoverflow.com/questions/41566883/only-show-focus-states-once-tab-navigation-has-been-used), [2](https://docs.oracle.com/cd/E92519%5F02/pt856pbr3/eng/pt/atpb/concept%5FUnderstandingPeopleSoftOnlineHelpAccessibility.html?pli=ul%5Fd17e24%5Fatpb), [3](https://community.articulate.com/discussions/discuss/nvda-issues-in-storyline-360/1207028), [4](https://www.accessibility-developer-guide.com/knowledge/screen-readers/desktop/browse-focus-modes/), [5](https://stackoverflow.com/questions/66080384/two-problems-with-tabbing-an-accessible-pop-out-navigation-i-use-some-advice-on)]
- 🔀 **Bypassing Other Header Elements:** As noted in the example, after the navigation bar, the user still has to tab through "Login or something" before hitting the main content. If a header contains search bars, utility links, language switchers, and shopping carts, a skip link is still required to bypass those secondary elements. \[[1](https://www.inclusiveweb.co/accessibility-resources/skip-to-main-content-links-a-simple-step-toward-better-accessibility), [2](https://web.dev/learn/html/navigation), [3](https://dequeuniversity.com/tips/add-skip-navigation-link), [4](https://www.boia.org/blog/are-skip-links-necessary-for-a-one-page-site)]
- ⚖️ **WCAG Compliance:** Under WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks), the requirement is to provide a mechanism to bypass repeated content blocks. While an ARIA menu bar optimizes navigation, a dedicated skip link remains the safest and most universally understood way to meet this criterion. \[[1](https://wcag.dock.codes/documentation/wcag241/), [2](https://www.freecodecamp.org/news/how-to-add-skip-to-main-content-links-to-a-website/), [3](https://flowpoint.ai/blog/aria), [4](https://www.boia.org/blog/are-skip-links-necessary-for-a-one-page-site), [5](https://web.dev/learn/html/navigation)]

### How the Tab Sequence Should Look

With an optimized navigation bar and a skip link implemented, the ideal keyboard navigation sequence will flow like this:

1. **Tab 1:** Focuses on **"Skip to Main Content"** (which becomes visually visible).
2. **Tab 2:** Focuses on the **Active/First Nav Item**. (Pressing `Left`/`Right` arrow keys moves between the rest of the navigation items).
3. **Tab 3:** Focuses on the **Login** button.
4. **Tab 4:** Focuses on the **First interactive element in the Main Content** area. \[[1](https://stackoverflow.com/questions/14322564/can-you-tab-through-all-radio-buttons), [2](https://vispero.com/resources/when-is-a-skip-link-needed/), [3](https://design.cms.gov/components/skip-nav/), [4](https://www.simplethread.com/ironing-out-steam-s-a11y-wrinkles/), [5](https://www.browserstack.com/docs/accessibility/rules/a11y-engine/1.0/bypass-blocks-skip-links)]

If you choose to use this pattern, ensure that your custom arrow-key navigation handles both vertical and horizontal layouts seamlessly. Let me know:

- Is your menu layout **horizontal** or a **vertical** sidebar?

- Are you handling the arrow-key mapping using **vanilla JavaScript** or a specific library?

- Do you need help managing the `aria-expanded` attributes for any **submenus** inside that navigation bar?

- [link](https://stackoverflow.com/questions/41566883/only-show-focus-states-once-tab-navigation-has-been-used)\
  Only show focus states once tab navigation has been used\
  Jan 10, 2017 — Remember that sometimes focus is placed on elements without using a keyboard, such as via script or third-party tools (like screen...\
  Stack Overflow

- [link](https://stackoverflow.com/questions/14322564/can-you-tab-through-all-radio-buttons)\
  Can you tab through all radio buttons? - Stack Overflow\
  Jan 14, 2013 — The Tab key moves focus between radio button groups and other widgets. When focus is on the group and when no radio button is sele...\
  Stack Overflow

- [link](https://vispero.com/resources/when-is-a-skip-link-needed/)\
  When Is a Skip Link Needed? - Vispero\
  Dec 5, 2024 — Position the Link as the First Focusable Element. The Skip Navigation link should be the very first focusable element on the page.\
  Vispero

Show all




# would i use space or spacing on design tokens

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">You can use </span><strong>either "space" or "spacing"</strong>, as both are widely accepted industry standards, but your choice depends on whether you prefer naming your tokens after the <strong>property</strong> or the <strong>concept</strong></mark>. Large scale design systems are split evenly between the two. \[[1](https://www.reddit.com/r/FigmaDesign/comments/1ioe3v5/how%5Fdo%5Fyou%5Fdeal%5Fwith%5Fspacing%5Ftokens%5Fin%5Fyour/), [2](https://designsystem.digital.gov/design-tokens/), [3](https://medium.com/@bettercallbabavalia/semantic-token-naming-in-design-system-3c6843f9dbe7)]

### Use "Space" for Noun-Based Scales

Choosing **"space"** treats the token as a physical asset or container. It is concise, maps beautifully to modern layout tools, and works well if you want shorter token names. \[[1](https://atlassian.design/foundations/spacing), [2](https://sandunf.medium.com/spacing-tokenization-in-figma-a01f3e26c837)]

- **Pros**: Shorter code strings; aligns with the concept of "white space" or "negative space".
- **Examples**:
  - `space-100` (Used by the [Atlassian Design System](https://atlassian.design/foundations/spacing))
  - `sys.space.md`
  - `--space-sm` \[[1](https://carbondesignsystem.com/elements/spacing/overview/), [2](https://atlassian.design/foundations/spacing), [3](https://webdesign.tutsplus.com/invisible-forces-in-design-spacing-and-shape--cms-26956a), [4](https://wcmauthorguide.pa.gov/en/keystone-design-system/foundations/design-tokens.html)]

### Use "Spacing" for Action/Property Scales

Choosing **"spacing"** describes the relationship or action happening between elements. It explicitly links to CSS properties like `letter-spacing` or layout rules like "component spacing". \[[1](https://midrocket.com/en/guides/design-tokens-guide/), [2](https://uxplanet.org/principles-of-spacing-in-ui-design-a-beginners-guide-to-the-4-point-spacing-system-6e88233b527a), [3](https://designsystem.qualtrics.com/design-tokens/spacing-tokens/), [4](https://www.telerik.com/design-system/docs/foundation/spacing/usage/), [5](https://aeldata.com/how-to-test-text-spacing-accessibility/)]

- **Pros**: Highly descriptive; immediately clear to developers who are looking to fill gaps, padding, or margins.
- **Examples**:
  - `spacing-4` (Used by the [Carbon Design System](https://carbondesignsystem.com/elements/spacing/overview/))
  - `sys.spacing.md`
  - `--spacing-lg` \[[1](https://designsystem.qualtrics.com/design-tokens/spacing-tokens/), [2](https://design.va.gov/storybook/?path=/docs/va-mobile%5Fdesign-tokens-spacing--docs), [3](https://carbondesignsystem.com/elements/spacing/overview/)]

### Comparison Overview

| Metric \[[1](https://en.wikipedia.org/wiki/Sentence%5Fspacing), [2](https://blog.prototypr.io/common-pitfalls-in-design-systems-overcoming-grid-challenges-semantic-naming-accessibility-ba37f93f9940)] | Space                         | Spacing                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------------------- |
| **Token Length**                                                                                                                                                                                        | Short (5 letters)             | Long (7 letters)                    |
| **Grammar Type**                                                                                                                                                                                        | Noun (The object)             | Gerund/Noun (The attribute)         |
| **Best For**                                                                                                                                                                                            | Clean global/primitive scales | Highly explicit semantic structures |

### 💡 Recommendation

If you are building your token structure from scratch, **use `space` for your primitive/global values** (e.g., `space.4` = `16px`) to keep your utility classes short. If you are creating semantic tokens, **use `spacing` for the context** (e.g., `component.card.spacing.padding`) so the intent is completely unambiguous to an engineering team. Whichever option you pick, enforce it strictly across both Figma variables and your codebase. \[[1](https://uxdesign.cc/how-to-manage-space-in-figma-using-tokens-8d0ebd99ee1b), [2](https://www.youtube.com/watch?v=gEvq%5F6oFk4g), [3](https://midrocket.com/en/guides/design-tokens-guide/), [4](https://medium.com/front-end-weekly/a-guide-to-design-tokens-in-design-systems-5ee283254197)]

If you are setting up your system right now, let me know:

- Are you naming them using **T-shirt sizes (sm, md, lg)** or a **numeric scale (100, 200, 300 / 4, 8, 12)**?
- Do you plan to separate tokens for **padding, margins, and gaps**, or use one unified system? \[[1](https://www.reddit.com/r/FigmaDesign/comments/1ioe3v5/how%5Fdo%5Fyou%5Fdeal%5Fwith%5Fspacing%5Ftokens%5Fin%5Fyour/), [2](https://atlassian.design/foundations/spacing)]

I can give you a clean JSON or CSS structure tailored to your approach!

- [link](https://www.reddit.com/r/FigmaDesign/comments/1ioe3v5/how%5Fdo%5Fyou%5Fdeal%5Fwith%5Fspacing%5Ftokens%5Fin%5Fyour/)\
  How do you deal with spacing tokens in your design system?\
  Feb 13, 2025 — and in the Alias section they set it like so: sm = 050. md = 100. lg = 200. and then this skip the Mapped section. What do you thi...\
  Reddit·r/FigmaDesign
- [link](https://uxdesign.cc/how-to-manage-space-in-figma-using-tokens-8d0ebd99ee1b)\
  How to manage space in Figma using tokens - UX Collective\
  Dec 13, 2021 — Space, or in other words, empty space is one of the core elements in design that is often overlooked. Design elements next to each...\
  UX Collective
- [link](https://carbondesignsystem.com/elements/spacing/overview/)\
  Spacing - Carbon Design System\
  May 14, 2026 — Therefore, if you have an element or content of high importance on the page, consider giving it extra surrounding space to help it...\
  Carbon Design System

Show all

## You said: would i use spacing-number or spacing-size

You should use **`spacing-size` (like T-shirt sizes or semantic names) for your semantic and component-level tokens**, and **`spacing-number` (like a 4px or 8px scale) for your primitive or global tokens**. \[[1](https://blog.designary.com/p/spacing-systems-and-scales-ui-design), [2](https://hds.hel.fi/foundation/design-tokens/spacing/), [3](https://uxplanet.org/principles-of-spacing-in-ui-design-a-beginners-guide-to-the-4-point-spacing-system-6e88233b527a), [4](https://www.conceptfusion.co.uk/post/web-design-spacing-and-sizing-best-practices), [5](https://blog.prototypr.io/common-pitfalls-in-design-systems-overcoming-grid-challenges-semantic-naming-accessibility-ba37f93f9940)]

Mixing both in a tiered structure creates a scalable, future-proof design system. \[[1](https://www.designsystemscollective.com/design-tokens-that-scale-mastering-multi-tier-architecture-for-modern-design-systems-96429b2fcee7)]

### Option 1: Use `spacing-size` (T-shirt or Semantic Scales) \[[1](https://blog.prototypr.io/design-systems-token-configuration-breakdown-6eca6e5b8a3f), [2](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)]

Use scales like `spacing-sm` or `spacing-card-padding` for the tokens that designers and developers actually apply to components.

- **Pros:** Highly intuitive; easy for humans to memorize; can adapt if your underlying values change (e.g., `spacing-md` can shift from `16px` to `24px` on mobile screens).
- **Best used for:** **Semantic tokens** (context-aware values) and **Component-level tokens**.
- **Examples:** `spacing-sm`, `spacing-md`, `spacing-lg`. \[[1](https://medium.com/@shivamdapkekar25/breaking-words-into-bytes-the-role-of-byte-pair-encoding-in-gpt-models-0567abc9bad6), [2](https://uxcel.com/lessons/spacing-sizing-803), [3](https://medium.com/@ethersystem/generating-design-system-spacing-aa69714160bc), [4](https://medium.com/front-end-weekly/a-guide-to-design-tokens-in-design-systems-5ee283254197), [5](https://goodpractices.design/articles/design-tokens)]

### Option 2: Use `spacing-number` (Numeric Scales) \[[1](https://blog.damato.design/posts/spacing-solved/)]

Use scales like `spacing-4` or `spacing-100` to define your absolute, unchanging physical values (usually based on a 4px or 8px grid). \[[1](https://www.conceptfusion.co.uk/post/web-design-spacing-and-sizing-best-practices)]

- **Pros:** Maps cleanly to mathematical formulas; easily expanded if you need to add a micro-value later (like a `2` between `0` and `4`).
- **Best used for:** **Primitive/Global tokens** (the raw constants hidden under the hood).
- **Examples:** `spacing-4` (16px), `spacing-8` (32px). \[[1](https://netherlands3d.eu/docs/developers/ui/spacing/), [2](https://www.linkedin.com/pulse/what-8point-grid-system-stephen-paul-jbtkf)]

### 🏆 The Industry Standard Approach (Tiered Structure)

Most modern design systems map **numbers to sizes**, and then **sizes to components**. This gives you the best of both worlds. \[[1](https://www.linkedin.com/pulse/what-8point-grid-system-stephen-paul-jbtkf)]

json

```
{
  "primitive": {
    "space-4": { "value": "16px" }
  },
  "semantic": {
    "space-md": { "value": "{primitive.space-4}" },
    "layout-container-padding": { "value": "{semantic.space-md}" }
  }
}
```

Use code with caution.

To help map out your exact system, let me know:

- Do you use an **8px grid system** or something else?
- Are you writing this for **Figma Variables**, **CSS variables**, or a **specific codebase tool** (like Style Dictionary)?

I can generate the exact token structure for you based on your stack.

- [link](https://blog.designary.com/p/spacing-systems-and-scales-ui-design)\
  Basics: Spacing systems & scales in UI design\
  Nov 1, 2022 — Size (also known as T-shirt sizes): Each token is given a size e.g. xxs, xs, s, m, l, xl, xxl. We prefer to avoid t-shirt sizing f...\
  \
  \
  Designary
- [link](https://hds.hel.fi/foundation/design-tokens/spacing/)\
  Spacing tokens - Usage\
  Spacing tokens are used for component-level spacing, and allow a more detailed fine tuning.\
  \
  Helsinki Design System
- [link](https://uxplanet.org/principles-of-spacing-in-ui-design-a-beginners-guide-to-the-4-point-spacing-system-6e88233b527a)\
  Principles of Spacing in UI Design: A Beginner’s Guide to the 4-Point Spacing System\
  Jul 17, 2024 — Step 1: Define Your Base Unit The base unit in the 4-point spacing system is 4 pixels (px). All spacing values will be multiples o...\
  \
  \
  UX Planet

Show all

## You said: doesnt spacing feel more intuitive than space

You are completely right—**"spacing" feels much more natural** to most people because it acts as an action word (a gerund). It describes the active process of creating room between elements, which is exactly what a designer or developer is doing. \[[1](https://uxdesign.cc/building-better-products-with-the-design-token-pipeline-faa86aa068e8), [2](https://medium.com/@mike-at-redspace/cracking-the-code-of-ux-visual-order-exploring-user-behaviour-27a2927f31b4)]

If it feels more intuitive to you and your team, **you should absolutely use it**. In design systems, team alignment and intuition always trump rigid, abstract rules. \[[1](https://medium.com/@cookieredding/white-space-isnt-wasted-space-why-designers-obsess-over-empty-areas-889ae64dde8c)]

### Why "Spacing" Feels Better

- **It matches your mental model**: When you look at a layout, you think, _"The spacing around this card looks tight,"_ not _"The space around this card looks tight."_
- **It aligns with CSS**: Developers already use code properties like `letter-spacing` and `word-spacing`. Using `spacing` keeps that linguistic pattern consistent. \[[1](https://medium.com/design-bootcamp/design-that-breathes-choosing-between-4pt-8pt-and-geometric-spacing-30c84766f1a3), [2](https://attentioninsight.com/the-gestalt-principle-of-closure-in-design/), [3](https://www.greengeeks.com/blog/margin-vs-padding/), [4](https://vanseodesign.com/web-design/svg-text-spacing-properties/)]

### The Only Reason Systems Use "Space"

The only reason some systems (like Atlassian or Adobe Spectrum) use "space" is purely for **code brevity** and **noun consistency**. They like pairing nouns together (e.g., `color`, `size`, `space`) rather than mixing nouns with action words (`color`, `size`, `spacing`). \[[1](https://softwareengineering.stackexchange.com/questions/441871/why-are-vertical-and-horizontal-spacing-heavily-used-in-coding-styles)]

### How to use "Spacing" beautifully

Since "spacing" feels right to you, here is how you can apply it cleanly to the `spacing-size` structure we discussed:

- **Global Primitive**: `spacing-16` or `spacing-4` (The raw value)
- **Semantic Meaning**: `spacing-md` or `spacing-lg` (The human-friendly size)
- **Component Specific**: `card-spacing-padding` (The exact layout intent) \[[1](https://medium.com/design-bootcamp/design-smarter-with-design-tokens-in-figma-aa415c23d3d6), [2](https://www.reddit.com/r/FigmaDesign/comments/1ioe3v5/how%5Fdo%5Fyou%5Fdeal%5Fwith%5Fspacing%5Ftokens%5Fin%5Fyour/)]

Would you like a quick **CSS/SASS snippet** or a **JSON object** showing exactly how to structure your design tokens using the word **"spacing"**?

- [link](https://uxdesign.cc/building-better-products-with-the-design-token-pipeline-faa86aa068e8)\
  Building better products with a design token pipeline\
  Feb 4, 2021 — Design tokens live in a technology agnostic file (like json or yaml ), stored in a central location accessible by all teams. This ...\
  \
  \
  UX Collective
- [link](https://medium.com/@mike-at-redspace/cracking-the-code-of-ux-visual-order-exploring-user-behaviour-27a2927f31b4)\
  Mastering UX Visual Order: Gestalt, Reading Patterns & Hierarchy | by Mike Vardy\
  Aug 27, 2023 — Spacing: Spacing is the amount of empty space between and around elements in a design. Spacing can be used to create breathing roo...\
  \
  \
  Medium
- [link](https://medium.com/@cookieredding/white-space-isnt-wasted-space-why-designers-obsess-over-empty-areas-889ae64dde8c)\
  White Space Isn’t Wasted Space: Why Designers Obsess Over Empty Areas\
  Apr 25, 2025 — In web design, this becomes even more obvious. If everything is too close together, too tight, too busy, people won't stick around...\
  \
  \
  Medium

Show all

## You said: where are spacing or space adopted. who.

The choice between "space" and "spacing" splits top-tier tech companies almost right down the middle.

Companies that prioritize **noun consistency and short code** adopt **"Space"**, while companies that prioritize **human intent and developer intuition** adopt **"Spacing"**. A third faction sidesteps both words entirely, choosing **"Spacer"**. \[[1](https://nexudus.com/blog/space-management-guide/)]

The industry landscape breaks down by exactly who uses what:

### 🚀 Who Adopts "Space"?

These companies treat spatial dimensions as rigid architectural blocks or nouns. They use it to keep token naming short and group it logically alongside other nouns like `color`, `font`, and `size`. \[[1](https://design-system.canada.ca/en/styles/spacing/)]

- **Atlassian**: Uses a strict noun format. Their tokens look like Atlassian Space Tokens (`space.100`, `space.200`, `space.300`).
- **Shopify (Polaris)**: Prefers numerical multiplier formats under a noun structure, utilizing variants like `space-2` and `space-3`.
- **Adobe (Spectrum)**: Integrates layout dimensions into a single `space` category.
- **New York State (NY.gov)**: Their digital standards utilize variables like `--nys-space-100` and `--nys-space-200`. \[[1](https://atlassian.design/foundations/spacing), [2](https://chienchwu.medium.com/design-token-scales-88286ebb6a30), [3](https://designsystem.ny.gov/tokens/other/), [4](https://www.linkedin.com/pulse/8px-spacing-system-consistency-scalability-efficiency-ayush-kandoi-r1ofc)]

### 📐 Who Adopts "Spacing"?

These teams favor user intuition. They want the token name to represent the _action_ of separating content, making it highly clear to frontend developers.

- **IBM (Carbon)**: Heavily favors the descriptive approach. Their documentation specifies code formats like `$spacing-03` and `$spacing-05`.
- **Salesforce (Lightning)**: Standardizes layout around the concept of spacing attributes.
- **Telerik & Kendo UI**: Built completely on a 24-step scale exposed via the prefix `--kendo-spacing-{step}`.
- **Qualtrics**: Standardizes the layout structure with explicit [Qualtrics Spacing Tokens](https://designsystem.qualtrics.com/design-tokens/spacing-tokens/). \[[1](https://carbondesignsystem.com/elements/spacing/overview/), [2](https://www.telerik.com/design-system/docs/foundation/spacing/), [3](https://designsystem.qualtrics.com/design-tokens/spacing-tokens/), [4](https://claritee.io/blog/design-system-naming-conventions-establishing-clarity/), [5](https://www.lightningdesignsystem.com/2e1ef8501/p/03d6b0)]

### 🧱 The Alternative: Who Adopts "Spacer"?

A highly vocal group of design systems rejects both words and uses **"Spacer"**. This shifts the mental model away from an abstract concept and turns it into a physical tool (like a spacer block used in carpentry). \[[1](https://ux.redhat.com/foundations/spacing/)]

- **GitHub (Primer)**: Uses spacer utility classes (`sp-1`, `sp-2`).
- **US Government (USWDS)**: References their layout properties through settings like `$theme-site-margins` or general spacer variables.
- **CMS (Medicare & Medicaid)**: Uses utility constants structured as `--spacer-1` and `--spacer-2`. \[[1](https://designsystem.digital.gov/design-tokens/), [2](https://design.cms.gov/foundation/spacing/)]

### 💡 Summary Rule of Thumb

- If your engineering culture loves **brevity and object-oriented architectures**, copy **Atlassian** and use **`space`**.
- If your team relies heavily on **clear intent and literal translation of layouts**, copy **IBM Carbon** and use **`spacing`**. \[[1](https://carbondesignsystem.com/elements/spacing/overview/), [2](https://atlassian.design/foundations/spacing)]

Are you leaning toward formatting these as **CSS custom properties** (like `--spacing-md`) or are you preparing them as **nested objects in a JSON file** for a translation tool like Style Dictionary? \[[1](https://www.telerik.com/design-system/docs/foundation/spacing/), [2](https://medium.com/design-bootcamp/design-systems-vs-design-tokens-clearing-up-the-confusion-0ffd939f6ee2)]

- [link](https://www.telerik.com/design-system/docs/foundation/spacing/)\
  Overview of Spacing | Design System Kit - Telerik.com\
  Spacing in design systems is crucial for creating visually appealing and user-friendly interfaces. It involves using consistent ma...\
  Telerik.com
- [link](https://ux.redhat.com/foundations/spacing/)\
  Spacing - Red Hat design system\
  Overview. ... Spacers are visual cues used to define fixed amounts of space between elements. They make it easy for designers to m...\
  Red Hat design system
- [link](https://design.cms.gov/foundation/spacing/)\
  Spacing - CMS Design System\
  Spacing between components. Existing design components in Figma have built-in spacing, including margins and padding. If you need ...\
  Centers for Medicare & Medicaid Services | CMS (.gov)

Show all

# would i name design tokens like color.bg.primary or color.primary.bg

You should choose **`color.bg.primary`** because it follows a standard, predictable hierarchy that scales much better as your design system grows. \[[1](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/)]

Organizing design tokens is all about structure. Leading with the property (`bg`) and ending with the modifier (`primary`) groups your tokens logically. \[[1](https://www.belkadigital.com/blog/should-you-really-switch-to-design-tokens-in-figma)]

### Direct Comparison

| Naming Structure \[[1](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/)] | Grouping Style                                    | Code Navigation & Autocomplete                                                                 | Scalability                                                                                                          |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **`color.bg.primary`** _(Recommended)_                                                                        | **Property-first** (Category → Type → Item)       | Excellent. All backgrounds stay neatly clustered in the same folder or autocomplete dropdown.  | High. It is easy to add `color.bg.secondary`, `color.bg.brand`, etc.                                                 |
| **`color.primary.bg`**                                                                                        | **Concept-first** (Category → Concept → Property) | Poor. Separates backgrounds into different conceptual folders (`primary`, `success`, `error`). | Low. It gets confusing when a "primary" concept contains conflicting properties like text, borders, and backgrounds. |

### Why `color.bg.primary` Wins

- **Better Code Structure:** Most engineering tools and token plugins (like Tokens Studio for Figma) parse dots into nested JSON objects. Using `color.bg.primary` keeps all background colors grouped into a single tidy bucket (`color: { bg: { ... } }`).
- **Consistent Semantic Roles:** In a UI, elements generally share four core roles: backgrounds, text, icons, and borders. Keeping the role in the middle means a developer looking to style a container can type `color.bg.` and instantly see every available option.
- **Avoids Intent Confusion:** If you use `color.primary.bg`, you run into logical loops. For instance, a "primary" app background is usually white or light gray, but a "primary" button background is often a vivid brand color. Shifting `primary` to the very end as a modifier clears up this confusion by contextualizing it exactly to the background property. \[[1](https://www.fourzerothree.in/p/crafting-a-semantic-colour-system), [2](https://uxdesign.cc/how-to-define-color-usage-through-semantic-sets-for-design-systems-99445804233d), [3](https://medium.com/design-bootcamp/my-way-for-naming-design-tokens-and-components-ce10cfa55e22), [4](https://imperavi.com/blog/designing-semantic-colors-for-your-system/), [5](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)]

If you are setting up your tokens right now, it can be highly beneficial to outline your **entire taxonomy** ahead of time. I can help you map out the rest of your categories if you tell me:

- Will your system need to support a **dark mode** switch?

- Are you designing for **multiple brands** or just one standalone app?

- Do you plan to build **component-specific tokens** later on (like `button.primary.bg`)? \[[1](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens), [2](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676), [3](https://www.reshaped.so/docs/tokens/color), [4](https://www.alwaystwisted.com/articles/design-token-naming-conventions), [5](https://designstrategy.guide/design-tokens-101/), [6](https://thedesignsystem.guide/what-are-design-tokens)]

- [link](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens)\
  A new approach to naming design tokens\
  May 5, 2024 — Tier 1 - Options. When working on a project, these are the options I have to choose from. These tokens represent the primitive dec...\
  Substack·Confessions from a design team of one

- [link](https://www.alwaystwisted.com/articles/design-token-naming-conventions)\
  Design Token Naming Conventions: A Practical Guide\
  Apr 23, 2026 — If you have ever stared at a long token list and wondered whether a name should be button-primary-bg , primary-button-background ,\
  Always Twisted

- [link](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)\
  Naming Tokens in Design Systems - Medium\
  Oct 14, 2020 — Mode (Usually, for “Light” and “Dark”) \* Mode (Usually, for “Light” and “Dark”) Tokens can employ a mode modifier to distinguish v...\
  Medium·Nathan Curtis

Show all

# would i name design tokens like color.bg.button or color.button.bg

You should name your design token **`color.button.bg`** rather than `color.bg.button` if you want to follow industry best practices. \[[1](https://penpot.app/blog/design-tokens-for-designers/)]

While both technical patterns work, the standard design token taxonomy structures names from the **most general category down to the most specific modifier**. \[[1](https://smart-interface-design-patterns.com/articles/naming-design-tokens/), [2](https://nordhealth.design/naming/)]

### Why `color.button.bg` is the Better Choice

- **Object-Oriented Hierarchy**: It groups items by the UI element first (`button`) and then by its specific property (`bg` or background). This keeps all button-related tokens alphabetized and nested together in code autocomplete dropdowns and tool panels like Tokens Studio for Figma.
- **Scalability**: If your system grows, `color.button.bg` naturally expands to include variants or states (e.g., `color.button.primary.bg.hover`).
- **Industry Alignment**: Leading design systems, including Salesforce Lightning and [Material Design 3](https://m3.material.io/foundations/design-tokens), use a Category → Component → Property → State sequence. \[[1](https://m3.material.io/foundations/design-tokens), [2](https://medium.com/design-bootcamp/my-way-for-naming-design-tokens-and-components-ce10cfa55e22), [3](https://medium.com/@branda.bg/the-art-of-naming-and-organizing-design-tokens-cdf7632ccda9), [4](https://penpot.app/blog/design-tokens-for-designers/)]

### A Comparison of the Two Approaches

| Feature \[[1](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens), [2](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/), [3](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/), [4](https://www.alwaystwisted.com/articles/design-token-naming-conventions)] | `color.button.bg` (Recommended)                  | `color.bg.button` (Alternative)                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| **Taxonomy Structure**                                                                                                                                                                                                                                                                                                                                         | `Category.Component.Property`                    | `Category.Property.Component`                       |
| **Autocomplete Experience**                                                                                                                                                                                                                                                                                                                                    | Groups by component (all button states together) | Groups by property (all background tokens together) |
| **Code Readability**                                                                                                                                                                                                                                                                                                                                           | High; isolates the UI entity first               | Fragmented; breaks up component architecture        |

### The Standard Component Token Formula

When naming component-specific tokens, aim for this structure:\
\\(\text{\[Category]}\rightarrow \text{\[Component]}\rightarrow \text{\[Variant]}\rightarrow \text{\[Property]}\rightarrow \text{\[State]}\\)

Following this formula, a fully realized button token looks like this:\
`color.button.primary.bg.hover` \[[1](https://penpot.app/blog/design-tokens-for-designers/), [2](https://medium.com/@branda.bg/the-art-of-naming-and-organizing-design-tokens-cdf7632ccda9)]

If you would like to map out the rest of your system, tell me if you are building **global/semantic tokens** (like `color.bg.surface`) or strictly **component-level tokens** so we can define the perfect taxonomy. \[[1](https://medium.com/design-bootcamp/design-tokens-for-better-design-systems-ab6d833e8d2f), [2](https://uxdesign.cc/how-to-name-colors-in-design-systems-976657e12b57), [3](https://www.designsystemscollective.com/how-colour-strategy-shapes-scalable-design-systems-from-vision-to-tokens-6ef516661f1c)]

- [link](https://samiamdesigns.substack.com/p/a-new-approach-to-naming-design-tokens)\
  A new approach to naming design tokens\
  May 5, 2024 — Tier 3 - Components \* Once I build components styled with tokens from the decisions I've made, I can create component specific tok...\
  Substack·Confessions from a design team of one
- [link](https://m3.material.io/foundations/design-tokens)\
  Design tokens – Material Design 3\
  \* Tokens point to style values like colors, fonts, and measurements. \* Use design tokens instead of hardcoded values. \* Each token...\
  Material Design
- [link](https://penpot.app/blog/design-tokens-for-designers/)\
  Design tokens for designers: A practical guide - Penpot\
  Dec 22, 2025 — What are design tokens (and why should designers care)? Design tokens are a fundamental part of a design system, with each token s...\
  Penpot

Show all

## You said: but color.bg.primary is prefered over color.primary.bg

You are exactly right, and your intuition is spot-on. There is a very specific reason why `color.bg.primary` is preferred for system-wide tokens, even though `color.button.bg` is preferred for component tokens.

The difference comes down to the **tier** of the design token you are creating. Design systems use two different structural logics depending on whether a token is **semantic** (system-wide) or **component-specific**. \[[1](https://www.designsystemscollective.com/design-tokens-in-practice-from-figma-variables-to-production-code-fd40aeccd6f5)]

### The Two Token Tiers Explained

### 1. Semantic Tokens (e.g., `color.bg.primary`) \[[1](https://nulab.com/learn/design-and-ux/design-tokens/), [2](https://medium.muz.li/color-systems-for-the-web-in-ai-guide-to-palettes-tokens-and-perceptual-consistency-2da8940f2bc3), [3](https://www.reddit.com/r/Angular2/comments/1f9kw7e/primeng%5Fv18beta1%5Fis%5Fout%5Fnow%5Fwith%5Fthe%5Fallnew/)]

These are system-wide tokens used across many different UI elements. \[[1](https://medium.com/design-at-exxonmobil/design-tokens-unified-approach-to-design-system-implementation-d5013027c655), [2](https://www.designsystemscollective.com/when-semantic-tokens-are-no-longer-semantic-d65ef16fadd7)]

- **The Logic**: `Category → Property → Concept`
- **Why it works**: At this level, **`bg` (background)** is the primary functional category, not an element modifier. You want all background choices grouped together in your autocomplete menu so a developer can see every available background option (`color.bg.primary`, `color.bg.secondary`, `color.bg.surface`) in one list. \[[1](https://www.reddit.com/r/Angular2/comments/1f9kw7e/primeng%5Fv18beta1%5Fis%5Fout%5Fnow%5Fwith%5Fthe%5Fallnew/), [2](https://www.fourzerothree.in/p/semantic-colour-tokens-in-action), [3](https://vega.globalpayments.com/design/color), [4](https://www.rimidesigns.com.au/how-many-colours-should-i-use-for-my-branding/)]
- **The Problem with `color.primary.bg`**: "Primary" is an abstract concept, not an object. If you used `color.primary.bg`, your autocomplete would group a primary background next to a primary border and primary text color, which is rarely how developers write CSS or style components.

### 2. Component Tokens (e.g., `color.button.bg`)

These are scoped strictly to a single UI element like a button, input, or card. \[[1](https://medium.com/@wilafar28/the-lego-effect-using-designtokens-to-build-consistent-ui-5b76069c894a), [2](https://figr.design/blog/how-to-use-design-tokens)]

- **The Logic**: `Category → Component → Property → State`
- **Why it works**: Once you enter component territory, the **Component (`button`)** becomes the main organizational anchor. You want every single token related to a button grouped together in code (`color.button.bg`, `color.button.text`, `color.button.border`).

### The Golden Rule of Token Structure

- Use **`Property` first** when the token is a **global/semantic utility** used everywhere.
- Use **`Component` first** when the token belongs strictly to a **specific UI element**. \[[1](https://medium.com/@wilafar28/the-lego-effect-using-designtokens-to-build-consistent-ui-5b76069c894a)]

### How They Link Together in Code

In a mature design system, your component token will actually point directly to your semantic token as an alias:

json

```
"color.button.primary.bg": {
  "value": "{color.bg.primary}"
}
```

Use code with caution.

To help you map this out cleanly, what **other UI elements or properties** (like borders, text, or states) are you currently naming?

- [link](https://www.designsystemscollective.com/design-tokens-in-practice-from-figma-variables-to-production-code-fd40aeccd6f5)\
  Design Tokens in Practice: From Figma Variables to Production Code\
  Nov 10, 2025 — Design Tokens in Practice: From Figma Variables to Production Code Tier 1: Primitive (Core) Tokens These are your raw values, the ...\
  \
  \
  Design Systems Collective
- [link](https://nulab.com/learn/design-and-ux/design-tokens/)\
  Everything you need to know about design tokens\
  Nov 25, 2025 — What are design tokens? Primitive tokens: these tokens contain raw foundational values. E.g., blue-500, 16px, radius-2. Semantic t...\
  \
  \
  Nulab
- [link](https://medium.muz.li/color-systems-for-the-web-in-ai-guide-to-palettes-tokens-and-perceptual-consistency-2da8940f2bc3)\
  Color systems for the Web in AI: Guide to palettes, tokens, and perceptual consistency\
  May 20, 2026 — Define semantic tokens that swap between modes (e.g., \` — color-bg-primary\`), not raw color values.\
  \
  \
  Muzli - Design inspiration hub

Show all

## You said: i have no comp layer

That simplifies your workflow significantly. Without a component layer, you are working entirely with **Semantic Tokens**.

When you do not have component tokens, your naming structure must focus entirely on **intent and usage** across your entire interface. \[[1](https://www.alwaystwisted.com/articles/design-token-naming-conventions)]

### The Recommended Structure

Because you are staying at the semantic level, you should stick to the **`Category.Property.Concept/Intent.Modifier`** formula.

- **`color.bg.primary`**: Best choice. It tells the engineer, _"This is a color, for a background, intended for primary use cases."_ \[1]
- **`color.text.primary`**: Follows the same pattern for typography.
- **`color.border.primary`**: Follows the same pattern for outlines.

### How to Style a Button Without Component Tokens

Since you do not have a dedicated `color.button.bg` token, you will assign your global semantic tokens directly to your elements in your CSS or styling files:

css

```
/* Your button styles apply global semantic tokens directly */
.button-primary {
  background-color: var(--color-bg-primary);
  color: var(--color-text-on-primary);
  border: 1px solid var(--color-border-primary);
}

.button-secondary {
  background-color: var(--color-bg-secondary);
  color: var(--color-text-secondary);
}
```

Use code with caution.

### 3 Tips for a Component-Less Token System

1. **Create an "On" category for text/icons**: When text sits on top of a background, use an `on` modifier. For example, `color.text.on-primary` makes it clear that this text color is specifically designed to contrast against `color.bg.primary`.
2. **Name by priority, not location**: Use terms like `primary`, `secondary`, `tertiary`, and `surface` rather than `button` or `sidebar`. This keeps the tokens flexible enough to be reused anywhere. \[[1](https://medium.com/from-chaos-to-clarity/tokenization-the-invisible-backbone-of-scalable-design-systems-d844b2d111ac), [2](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles), [3](https://uxplanet.org/design-tokens-102-8ac8ede85cfe)]
3. **Incorporate States Globally**: Add state modifiers to the very end of your semantic tokens, such as `color.bg.primary-hover` or `color.bg.primary-active`.

If you are setting these up now, let me know if you are using a tool like **Figma Variables** or **Style Dictionary**, or if you need help naming your **neutral surface and background** variants.

- [link](https://www.alwaystwisted.com/articles/design-token-naming-conventions)\
  Design Token Naming Conventions: A Practical Guide\
  Apr 23, 2026 — Here, the naming pattern changes depending on the tier. Primitives hold values, semantic tokens hold intent, and component tokens ...\
  \
  \
  Always Twisted
- [link](https://medium.com/from-chaos-to-clarity/tokenization-the-invisible-backbone-of-scalable-design-systems-d844b2d111ac)\
  Tokenization: The Invisible Backbone of Scalable Design Systems\
  Jul 22, 2025 — In a semantic token structure, tokens describe the purpose or meaning of a value, not where it's applied. For example: background-\
  \
  \
  Medium
- [link](https://help.figma.com/hc/en-us/articles/18490793776023-Update-1-Tokens-variables-and-styles)\
  Update 1: Tokens, variables, and styles – Figma Learn - Help Center\
  From there, they ( The team ) established tokens within each category and gave them names that communicate “how” or “where” the co...\
  \
  \
  Figma

Show all

## You said: would i name design tokens like sys.color.bg.button or sys.color.button.bg if i want to give buttons some special colors one day

If you want to future-proof your system for unique button colors, you should name the token **`sys.color.button.bg`**.

Even though you do not currently have a dedicated component layer, introducing the word `button` into the name creates a **scoped token** dedicated to that element. Putting the component name _before_ the property is the only way to ensure your system can scale smoothly.

### Why `sys.color.button.bg` is the Correct Choice

- **It creates a safe container**: By using `button.bg`, you isolate the button. If you decide tomorrow that buttons should be hot pink while the rest of your "primary backgrounds" stay blue, you can change `sys.color.button.bg` without breaking anything else.
- **The structural flaw of `sys.color.bg.button`**: If you use `bg.button`, you are treating the button as a modifier of a background. If you later need to add button text, button borders, or button hover states, your tokens will become scattered and disorganized:
  - `sys.color.bg.button` (Background)
  - `sys.color.text.button` (Text)
  - `sys.color.border.button` (Border) \[[1](https://www.abeautifulsite.net/posts/better-buttons-with-color-mix-and-custom-properties/), [2](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/)]\
    With `sys.color.button.bg`, all button tokens naturally group together in code and design tools.

### How Your System Evolves Over Time

You can start by pointing your new button token directly to your global semantic background. This keeps your system perfectly unified today, while leaving the door wide open for "special colors" later.

### Phase 1: Today (Unified Colors)

Your button simply aliases your general primary background token. \[[1](https://medium.com/@sandeepsalmon/designing-a-scalable-design-token-system-in-figma-f7aed90084fa)]

json

```
"sys.color.button.bg": { "value": "{sys.color.bg.primary}" }
```

Use code with caution.

### Phase 2: The Future (Special Button Colors)

When you want to give buttons a unique color, you just change the value of that single token. You do not have to rename the token or rewrite any developer code. \[[1](https://medium.com/cva-design/what-design-tokens-in-figma-really-are-and-why-they-matter-e3a59ed4ac4b)]

json

```
"sys.color.button.bg": { "value": "#FF007F" }  /* Unique brand color */
```

Use code with caution.

### The Universal Rule for Your Naming System

To keep your system clean, use this simple formula to decide where the word goes:

1. **Is it a general utility used by many elements?** Put the property first:\
   `sys.color.bg.primary` / `sys.color.bg.surface`
2. **Is it reserved for a specific element (even a future one)?** Put the element first:\
   `sys.color.button.bg` / `sys.color.input.bg`

Are you planning to introduce **different button variants** (like primary, secondary, or outline) or **interactive states** (like hover and focus) when you build these out?

- [link](https://www.abeautifulsite.net/posts/better-buttons-with-color-mix-and-custom-properties/)\
  Better Buttons with color-mix() and Custom Properties\
  Aug 23, 2023 — We're using a custom property called --button-bg that sets the button's background. Using a custom property allows us to pass it i...\
  \
  \
  A Beautiful Site
- [link](https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/)\
  Accessible Color Tokens for Enterprise Design Systems\
  May 21, 2025 — Think of color tokens as the DNA of your design system. Instead of hardcoding #4285F4 in Figma or CSS, you use meaningful names li...\
  \
  \
  Aufait UX
- [link](https://medium.com/@sandeepsalmon/designing-a-scalable-design-token-system-in-figma-f7aed90084fa)\
  Designing a Scalable Design Token System in Figma\
  Feb 27, 2025 — Having a token name that literally says button-primary-background makes it easy to see how your button is styled—and you can still...\
  \
  \
  Medium

Show all

# 

