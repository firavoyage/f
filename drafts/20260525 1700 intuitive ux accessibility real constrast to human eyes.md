<!-- https://addyosmani.com/bio/ -->

#

ive seen lightblue on white w 2.5 to 3 contrast and black on blue of 7 constrat. the latter is much harder to see. it would be much better if it's white on blue instead of black on blue for the highlighted current nav item, though it would be only 2.5.

It sounds like you are experiencing the real-world difference between mathematical color contrast and actual human visual perception. You are completely right to trust your eyes here; text readability is about more than just a single calculated ratio.

Why the 7:1 Ratio Feels Harder to Read

- **High-Contrast Vibrancy:** Black text on a saturated blue background often causes visual vibration, making the letters appear fuzzy or shaky.
- **Pure Black Weight:** Solid black ink (#000000) lacks a shared color profile with the underlying blue, creating an unnatural optical barrier.
- **Eye Strain:** Your eyes must work harder to separate the hard edges of dark letters from a deep, vibrant background color.

Why White on Blue Feels Better

- **Natural Luminescence:** White text radiates light outward, making it naturally pop off a darker background.
- **Consistent Polarity:** Keeping light text on a dark background (or dark on light) maintains a consistent reading pattern for the user's brain.
- **Perceived Contrast:** Even with a lower mathematical score of 2.5:1, the human eye inherently tracks light elements against dark fields with high efficiency. \[[1](https://pressbooks.library.torontomu.ca/a11ygame/chapter/text-contrasts-well-over-any-background-colours-or-images/)]

Best Practices for Your Navigation Bar

If you want to use the white-on-blue scheme while maintaining excellent readability, try these adjustments:

- **Bold the Font:** Thicker stroke weights instantly increase readability for low-contrast text.
- **Increase Font Size:** Larger text requires less strict mathematical contrast to remain legible.
- **Lighten the Text slightly:** Use a very light gray or pale blue instead of pure white to soften the glow.
- **Darken the Blue:** Dropping the background blue shade slightly can easily bump your 2.5:1 ratio up to a globally compliant 4.5:1 ratio without losing the aesthetic. \[[1](https://www.kittl.com/blogs/check-your-color-contrast-asp/), [2](https://medium.com/design-bootcamp/color-contrast-and-reading-on-the-web-what-nobody-told-you-3b070b15c33d), [3](https://www.paperstreet.com/blog/choose-accessible-colors/)]

To help fine-tune your navigation menu, could you share:

- The exact **Hex color codes** you are currently using?
- The **font size** and **font weight** of your navigation text?
- The **overall theme** of your website (e.g., light mode, dark mode, corporate, creative)?

I can calculate the exact color adjustments needed to make it look great and pass accessibility standards.

- [link](https://pressbooks.library.torontomu.ca/a11ygame/chapter/text-contrasts-well-over-any-background-colours-or-images/)\
  Text contrasts well over any background colours or images – What You Can Do to Remove Barriers on the Web\
  This is due to the eye's reaction to the dark background that is reflecting less light, and white text that is reflecting more lig...\
  \
  \
  Toronto Metropolitan University Pressbooks
- [link](https://www.kittl.com/blogs/check-your-color-contrast-asp/)\
  Color Contrast for Better Accessibility & Design Clarity\
  Feb 8, 2026 — And don't forget, your text style matters too. Pairing fonts with clear contrast in weight and style (like a bold header with a li...\
  \
  \
  Kittl
- [link](https://medium.com/design-bootcamp/color-contrast-and-reading-on-the-web-what-nobody-told-you-3b070b15c33d)\
  Color, contrast and reading on the web: what nobody told you.\
  Nov 22, 2025 — Small, thin text needs much more contrast to be legible than a large bold heading, even if they use exactly the same colors.\
  \
  \
  Medium

Show all

You said: why does accessibility standard fail sometimes

Accessibility standards fail sometimes because **they rely on rigid mathematical formulas that do not match how the human eye and brain actually perceive light and color.**

1\. Math vs. Human Biology

Current WCAG 2 standards use a formula based on **relative luminance** \[1]. This formula treats colors as flat values. It ignores how your eyes physically process light.

- **Halation effect:** Bright text on a dark background bleeds outward \[1]. This makes text look bolder and easier to see, even at a lower mathematical contrast.
- **Vibration effect:** High-contrast pairings (like pure black on pure blue) create a harsh boundary. This causes text to appear to "vibrate" or blur, hurting legibility despite a high score.

2\. The Context Blindspot

The standard color contrast formula calculates values in total isolation \[1]. It does not account for critical design context:

- **Font thickness:** A very thin font at a 7:1 ratio is harder to read than a thick, bold font at a 3:1 ratio \[1].
- **Text size:** Larger text is naturally easier to read at lower contrast levels than tiny text.
- **Screen environment:** The standard assumes a perfect screen. It does not account for screen glare, cheap phone displays, or ambient room lighting.

3\. Spatial Frequency

The human brain identifies letters by their shapes and edges. Current standards look only at color values, completely ignoring **spatial frequency** (the distance between lines and pixels) \[1]. When dark text sits on a dark background, the edges blur together for the human eye, even if the math says the contrast difference is wide enough.

4\. The Fix: APCA (WCAG 3)

Because the current standard fails in scenarios like yours, the upcoming WCAG 3 guidelines are switching to a new system called the **Accessible Perceptual Contrast Algorithm (APCA)** \[1].

- It models actual human vision \[1].
- It factors in font size and weight \[1].
- It recognizes that light text on dark backgrounds acts differently than dark text on light backgrounds \[1].

***

If you want to see how your specific colors score under the new human-centric algorithm, let me know:

- The **Hex code** for your blue background
- The **Hex code** for your text colors (black and white)
- Your current **font size**

I can run them through the **APCA tool** to show you the real-world readability score.

AI responses may include mistakes. For legal advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode\&gl=us)

You said: how could it become ideal. what's the real constrast for humans.

To make contrast ideal, digital design must move away from the static ratios of the past and adopt a model that mimics the human visual cortex. \[[1](https://flowpoint.ai/blog/apca)]

The **real contrast for humans** is calculated using the **Accessible Perceptual Contrast Algorithm (APCA)**. This algorithm generates a **Lightness Contrast (Lc)** score from `Lc 0` to `Lc 106`, mapping precisely to human visual acuity, text size, and background polarity. \[[1](https://git.apcacontrast.com/documentation/APCAeasyIntro.html), [2](https://git.apcacontrast.com/documentation/APCA%5Fin%5Fa%5FNutshell.html), [3](https://flowpoint.ai/blog/apca)]

How Contrast Becomes Ideal

To achieve ideal readability, contrast must be treated as a **three-way relationship** between **Background Color, Text Color, and Font Geometry** (size and thickness). \[[1](https://www.readtech.org/ARC/tests/visual-readability-contrast/)]

```
   [ Background Color ] ◄─── Perceptual Bridge ───► [ Text Color ]
                                    │
                         [ Font Size & Weight ]
```

- **Factor in Reading Polarity:** The human brain reads light text on a dark background (dark mode) differently than dark text on a light background. Ideal systems scale contrast targets dynamically based on which color is dominant.
- **Link Contrast to Font Size:** Thin or tiny text requires vastly higher contrast scores to remain legible. As text grows larger and bolder, the required contrast score should safely drop.
- **Eliminate Pure Black on Saturated Colors:** High-saturation backgrounds emit intense light waves. Ideal systems swap harsh, pure black (#000000) for deep, tinted neutrals to prevent the letters from blurring or vibrating. \[[1](https://git.apcacontrast.com/documentation/APCAeasyIntro.html), [2](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16), [3](https://flowpoint.ai/blog/apca), [4](https://www.readtech.org/ARC/tests/visual-readability-contrast/), [5](https://www.buffalo.edu/access/digital/content/fundamentals/color-contrast.html)]

***

The Real Human Contrast Targets (APCA) \[[1](https://web.dev/articles/color-and-contrast-accessibility), [2](https://git.apcacontrast.com/documentation/APCA%5Fin%5Fa%5FNutshell.html)]

The APCA lookup table identifies exactly what a human eye needs depending on the text's purpose: \[[1](https://git.apcacontrast.com/documentation/APCAeasyIntro.html)]

| APCA Target \[[1](https://apcacontrast.com/), [2](https://digitalaccessibility.unc.edu/color-contrast/), [3](https://git.apcacontrast.com/documentation/APCAeasyIntro.html)] | Real Human Use Case      | Typographic Requirements                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **Lc 90**                                                                                                                                                                    | **Preferred Body Text**  | Best for long paragraphs. Requires a minimum of **14px bold** or **18px regular** text.                       |
| **Lc 75**                                                                                                                                                                    | **Minimum Body Text**    | The absolute baseline for fluid reading. Requires **16px medium (500 weight)** or **14px bold (700 weight)**. |
| **Lc 60**                                                                                                                                                                    | **Content Components**   | Ideal for navigation bars, buttons, and tabs. Requires **16px bold** or **24px regular** text.                |
| **Lc 45**                                                                                                                                                                    | **Large Headlines / UI** | Only for non-body text or large headers. Requires a minimum of **24px bold** or **36px regular** text.        |

***

Fixing Your Specific Layout

In your specific layout, white text on a blue background is highly effective because **light text naturally expands (halates) on a dark screen**, filling out the letterforms and making them highly visible to the eye. \[[1](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/color-contrast/)]

If you'd like to test your exact navigation menu, tell me:

- The **Hex codes** for your white text and blue background
- The **font size (px/rem)** and **weight (regular, medium, bold)** of your navigation text

I can calculate the exact human-perceived **Lc score** and tell you if it hits the ideal target!

- [link](https://www.chhs.colostate.edu/accessibility/best-practices-how-tos/color-contrast/)\
  Color Contrast - Accessibility by Design\
  Best Practices. Use a contrast checking tool. Visit the color contrast tools page for more information. Choose a color scheme that...\
  Colorado State University
- [link](https://www.buffalo.edu/access/digital/content/fundamentals/color-contrast.html)\
  Color Contrast - Accessibility at UB\
  What level of color contrast is required? The Web Content Accessibility Guidelines (WCAG) define minimum color contrast ratios for...\
  University at Buffalo
- [link](https://digitalaccessibility.unc.edu/color-contrast/)\
  Color contrast - Digital Accessibility Office\
  What is color contrast? Color contrast refers to the difference in brightness between foreground and background colors. For access...\
  The University of North Carolina at Chapel Hill

Show all

You said: i want to use the real one now. give me somewhere to calculate, like some github pages. org sites.

You can use several excellent live GitHub Pages, official organization sites, and browser tools to calculate real, human-perceived color contrast using the APCA method: \[[1](https://github.com/mgifford/contrast-plus)]

1\. Official Reference Sites

- **[The Official APCA Contrast Calculator](https://apcacontrast.com/)**: Created directly by the creator of the APCA algorithm. This is the most accurate reference implementation. It lets you swap colors, type font sizes, and view real-time text previews.
- **[Myndex Official Git Portal](http://git.myndex.com/)**: The core code repository and documentation hub hosting all the research, libraries, and discussions related to the perceptual contrast algorithm. \[[1](https://apcacontrast.com/), [2](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/), [3](http://git.myndex.com/), [4](https://www.color-contrast.dev/)]

2\. GitHub Pages Tools

- **[Contrast-Plus Calculator](https://mgifford.github.io/contrast-plus/)**: A web UI hosted entirely on GitHub Pages. It allows you to enter colors in modern CSS formats and visually compares the mathematical WCAG 2 ratio directly alongside your real APCA score.
- **APCA Introduction Tool**: A clean interactive demo tool built on GitHub Pages designed to help you quickly input background and text layers to visualize how the human eye registers them. \[[1](https://github.com/mgifford/contrast-plus), [2](https://github.com/xi/apca-introduction)]

3\. Dedicated Organizations & Web Tools

- **[AChecks APCA Accessibility Checker](https://www.achecks.org/apca-accessible-colour-contrast-checker/)**: A dedicated accessibility platform tool that evaluates color configurations utilizing the updated perceptual matrix.
- **[Color-Contrast Dev Tool](https://www.color-contrast.dev/)**: A developer-focused web utility built specifically to preview spatial frequency, letting you see exactly how color performance alters when your text scale shifts. \[[1](https://www.achecks.org/apca-accessible-colour-contrast-checker/), [2](https://www.color-contrast.dev/)]

4\. Browser Extensions

- **[WCAG & APCA Contrast Checker Chrome Extension](https://chromewebstore.google.com/detail/wcag-contrast-checker-col/ckodjebjkmjlnjlhmnhcmimgkkmkcipk?gl=us)**: If you prefer evaluating your design live on your actual browser development server, this tool injects an automated APCA checker directly into your inspector environment. \[[1](https://chromewebstore.google.com/detail/wcag-contrast-checker-col/ckodjebjkmjlnjlhmnhcmimgkkmkcipk?gl=us)]

***

Once you pick a tool, plug in your layout colors. If you want, you can also share your results here:

- What **APCA Lc score** did your white-on-blue text receive?
- Is the layout rendering an **Lc 60 or higher** score for your active nav item? \[[1](https://www.color-contrast.dev/?txtColor=magenta\&bgColor=color%28srgb%200.765%200.89%200.556%29)]

I can help you adjust the palette if the current font dimensions cause a penalty!

- [link](http://git.myndex.com/)\
  Myndex: Accurate ContrastUsing the APCA\
  Related Repositories \* APCA Documentation Repository The docs repo and forum for APCA and SACAM. \* APCA W3 Repository The W3 versi...\
  Myndex
- [link](https://github.com/mgifford/contrast-plus)\
  mgifford/contrast-plus: A color contrast checker that ... - GitHub\
  Apr 2, 2026 — This project includes a web UI (GitHub Pages) titled “APCA + WCAG 2 Contrast Checker” that lets you enter colors in modern CSS for...\
  GitHub
- [link](https://github.com/xi/apca-introduction)\
  The missing introduction to APCA - GitHub\
  What is APCA? The Accessible Perceptual Contrast Algorithm (APCA) is a new algorithm to estimate the visual contrast between two c...\
  GitHub

Show all

You said: im using the official one. it shows a number but does not explain.

The official APCA calculator outputs a single number known as the **Lc (Lightness Contrast)** score, which can be positive or negative \[1].

Here is exactly how to read and interpret your result:

1\. Understand the Sign (+ or -)

- **Positive Number (+ Lc):** You have dark text on a light background (e.g., black text on a white screen) \[1].
- **Negative Number (- Lc):** You have light text on a dark background (e.g., your white text on a blue navigation background) \[1].
- _Note: The absolute value of the number determines the contrast strength. A score of `-60` has the exact same contrast strength as `+60` \[1]._

2\. Match Your Number to the Target Scale

Look at your raw number (ignoring the minus sign) and match it to these standard human-reading thresholds:

- **90 or higher:** **Ideal for fluent body text.** Essential for long paragraphs, tiny fine print, or critical legal text.
- **75 or higher:** **Minimum for small text.** The absolute baseline required if your navigation text is standard, thin, or small (under 16px).
- **60 or higher:** **The "Sweet Spot" for Navigation.** This is your primary target. It is perfectly optimized for headers, buttons, navigation menus, and interface tabs.
- **45 or higher:** **Large Text Only.** Only acceptable if your active navigation item is very large (over 24px) or heavily bolded.
- **Below 45:** **Fail for text.** Too low for readable text. Only usable for decorative borders, disabled buttons, or large icons.

3\. Check the Typography Matrix

APCA does not give a simple "Pass/Fail" because contrast depends entirely on your font size. Look at your score below to see your required font settings:

| If your Lc score is... | Your text must be at least this size: |
| ---------------------- | ------------------------------------- |
| **Lc 75**              | **16px Regular** OR **12px Bold**     |
| **Lc 60**              | **24px Regular** OR **16px Bold**     |
| **Lc 45**              | **36px Regular** OR **24px Bold**     |

***

What is the **exact number** (including the minus sign) showing on your screen right now? If you share that number alongside your current **font size**, I can tell you instantly if your navigation design passes or exactly how to tweak it.

You said: seems it's way different than the wcag 2 on devtools, which is really expected

That difference is completely expected because WCAG 2 uses simple math from 1998, while APCA models how human eyes actually work on modern screens \[1, 2].

Here is why your DevTools score looks so drastically different from your official APCA number:

1\. The Math Formula is Flipped

- **WCAG 2 (DevTools):** Uses a flat ratio (like `4.5:1`). It uses the exact same math whether you have dark text on a light background or light text on a dark background.
- **APCA:** Understands **polarity**. It knows that light text on a dark background expands in your eye (halation), making it easier to read at lower mathematical contrast levels \[2, 3].

2\. DevTools is Font-Blind

- **WCAG 2:** Gives you the exact same pass/fail score whether your font is a super thin 10px or a massive 48px bold header.
- **APCA:** Scales with your typography. It will give a color combination a passing score for a bold navigation item, but warn you if you try to use that same color for tiny paragraph text \[4].

3\. Screen vs. Paper

- **WCAG 2:** Was designed based on how ink looks on printed paper. It over-penalizes colors like orange, blue, and light gray on screens.
- **APCA:** Was built specifically for modern emitting displays (LED, OLED, LCD screens) and accounts for how screen pixels bleed light into each other \[1].

***

Now that you can see the real numbers, what **Lc score** did your white-on-blue combination get? If you let me know that number and your **font size**, we can make sure it perfectly fits the APCA requirements.

#

which wcag standard does chromium devtools currently use

Chromium DevTools natively uses the <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>WCAG 2.1</strong></mark> standard as its primary baseline for core accessibility features. \[[1](https://medium.com/@mariekie/exploring-accessibility-tools-for-developers-e0b440c4ffee), [2](https://www.boia.org/blog/googles-lighthouse-accessibility-tests-are-helpful-but-not-perfect), [3](https://www.browserstack.com/guide/accessibility-automation-tools)]

Key Standards Followed

- **WCAG 2.1 AA**: Native tools like the CSS Styles panel color picker, the Issues panel, and the Lighthouse integration flag errors and calculate text color contrast ratios against **Level AA (4.5:1 ratio)**.
- **WCAG 2.1 AAA**: DevTools also provides contrast suggestions and reference lines for the enhanced **Level AAA (7:1 ratio)** standard within the color picker interface. \[[1](https://dev.to/josefine/accessibility-testing-with-chrome-devtools-2bl4), [2](https://webdevstudios.com/2017/03/06/accessibility-chrome-devtools/), [3](https://www.smashingmagazine.com/2020/08/accessibility-chrome-devtools/), [4](https://www.boia.org/blog/googles-lighthouse-accessibility-tests-are-helpful-but-not-perfect), [5](https://www.allaccessible.org/blog/joomla-accessibility-compliance-wcag-guide)]

Core Tools Utilizing the Standard \[[1](https://www.uwyo.edu/web/accessibility/accessibility-testing-guide.html)]

- **Color Picker**: Displays clear pass/fail status markers specifically labeled for **WCAG AA** and **AAA** compliance.
- **Lighthouse Panel**: Leverages the popular **axe-core** engine to audit entire pages, mapping results directly to WCAG 2.1 rules.
- **Device Toolbar**: Simulates viewport scaling and layouts to test the **WCAG Reflow** (Success Criterion 1.4.10) requirement. \[[1](https://developer.chrome.com/docs/devtools/accessibility/reference), [2](https://webdevstudios.com/2017/03/06/accessibility-chrome-devtools/), [3](https://www.smashingmagazine.com/2020/08/accessibility-chrome-devtools/), [4](https://medium.com/@mariekie/exploring-accessibility-tools-for-developers-e0b440c4ffee), [5](https://www.boia.org/blog/googles-lighthouse-accessibility-tests-are-helpful-but-not-perfect)]

Are you hoping to audit your site for **specific new WCAG 2.2 rules**, or are you trying to configure **automated testing pipelines** using Chromium?

- [link](https://developer.chrome.com/docs/devtools/accessibility/reference)\
  Accessibility features reference | Chrome DevTools\
  Jun 9, 2022 — Test content reflow with the Device Toolbar. The Web Content Accessibility Guidelines (WCAG) reflow criterion recommends that web ...\
  Chrome for Developers
- [link](https://dev.to/josefine/accessibility-testing-with-chrome-devtools-2bl4)\
  Accessibility Testing with Chrome DevTools - DEV Community\
  Nov 14, 2023 — You can inspect the color contrast of a text element against the background within the DevTools. When you select the element and c...\
  DEV Community
- [link](https://webdevstudios.com/2017/03/06/accessibility-chrome-devtools/)\
  Accessibility in Chrome DevTools - WebDevStudios\
  Mar 6, 2017 — Debugging Existing accessibility: \* Focus and Visibility. This will list what is happening with tabindex and visibility . This is ...\
  WebDevStudios

Show all

You said: i mean it's outdated. it should be better that fits natural human better.

You are completely right that the color contrast formula used in WCAG 2.1 has major flaws. It relies on a mathematical formula (relative luminance) that does not match how the human eye actually perceives contrast, often forcing bad design choices like making text _too_ bold or incorrectly flagging white text on orange backgrounds as a failure.

The good news is that a much better, human-centric system exists and is already partially integrated into Chromium DevTools.

The Solution: APCA (Advanced Perceptual Contrast Algorithm)

Chromium DevTools includes an experimental toggle for **APCA**, which is the contrast algorithm designed for the upcoming **WCAG 3** standard.

Unlike the old formula, APCA is modeled on **natural human vision** and takes into account:

- **Font weight and size**: Thinner text needs more contrast than thick text to be readable.
- **Context**: Light text on a dark background is perceived differently than dark text on a light background.
- **Ambient light**: It mimics how the human brain actually processes spatial frequency.

How to Turn It On in DevTools

You can enable this modern, human-centric model right now by following these steps:

1. Open **DevTools** (F12 or Right-click -> Inspect).
2. Click the **Settings cog icon** (top-right corner of DevTools) or press `F1`.
3. Select the **Experiments** tab on the left menu.
4. Search for **"Enable Advanced Perceptual Contrast Algorithm (APCA)"** and check the box.
5. Close the settings panel (no restart required).

Once enabled, your color picker will replace the old AA/AAA lines with a single **APCA contrast score** (Lc) and tell you exactly what font size and weight are safe to use with that color combination.

Would you like help understanding **how to read the new APCA scores**, or do you want to see how to **integrate APCA into your design tools** like Figma?

You said: when is it released into devtools

There is currently **no official release date** to make the Advanced Perceptual Contrast Algorithm (APCA) the default standard in Chromium DevTools, and it actually faces a risk of being removed. \[[1](https://issues.chromium.org/u/1/issues/341439947)]

While Google added APCA as an experimental toggle in **Chrome 89 back in March 2021**, its path to a stable, out-of-the-box release has stalled due to political and technical shifts in how the web accessibility standard is being written. \[[1](https://developer.chrome.com/blog/new-in-devtools-89), [2](https://issues.chromium.org/u/1/issues/341439947)]

Why APCA is "Stuck" in Experiments

- **Removed from the WCAG 3 Drafts**: APCA was originally the core contrast proposal for WCAG 3.0. However, the W3C Accessibility Guidelines Working Group removed APCA from the active WCAG 3 working drafts. As of recent [W3C updates](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html), the official contrast algorithm for WCAG 3 is listed as "yet to be determined".
- **Chromium's Hesitation**: Chromium developers are highly reluctant to promote a feature to "Stable" status if it doesn't align with an official, finalized W3C standard. In fact, standard compliance advocates have filed bugs in the [Chromium Issue Tracker](https://issues.chromium.org/u/1/issues/341439947) requesting that APCA be _removed entirely_ from DevTools to prevent developers from optimizing for a standard that may never legally exist.
- **WCAG 3.0 Timeline**: The full WCAG 3.0 specification itself is an incredibly slow-moving project. The W3C is not expected to reach a final "Recommendation" status for WCAG 3.0 until **2028 to 2030**. \[[1](https://issues.chromium.org/u/1/issues/341439947), [3](https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html), [4](https://www.deque.com/blog/w3c-unveils-174-new-outcomes-for-wcag-3-0/), [5](https://abilitynet.org.uk/resources/digital-accessibility/what-expect-wcag-30-web-content-accessibility-guidelines), [6](https://accessibe.com/blog/knowledgebase/wcag-3-point-0)]

What This Means For You

If you love the human-centric approach of APCA, you can safely continue using the toggle in your personal DevTools environment for better design. However, because it lacks an official release timeline and legal backing, you must still test your production sites against **WCAG 2.1/2.2 AA** to ensure you pass legal accessibility audits. \[, [2](https://www.vervali.com/blog/wcag-3-0-accessibility-testing-compliance-2026-standards-timeline-tools-and-how-to-prepare-your-stack/), [3](https://accessibe.com/blog/knowledgebase/wcag-3-point-0)]

Would you like to explore **third-party browser extensions or design plugins** that let you use APCA workflows without relying on the experimental DevTools toggle?

- [link](https://developer.chrome.com/blog/new-in-devtools-89)\
  What's New In DevTools (Chrome 89) | Blog\
  Jan 19, 2021 — \* Automate browser testing with Puppeteer Recorder. \* Font editor in the Styles pane. \* CSS flexbox debugging tools. \* New CSP Vio...\
  Chrome for Developers
- [link](https://issues.chromium.org/u/1/issues/341439947)\
  Remove APCA contrast calc from dev tools \[341439947]\
  Problem Description. The APCA contrast calculation was added to Chrome Dev Tools 89 in March 2021 as an experimental feature (wher...\
  Chromium
- [link](https://www.deque.com/blog/w3c-unveils-174-new-outcomes-for-wcag-3-0/)\
  W3C unveils 174 new outcomes for WCAG 3.0 - Deque\
  May 16, 2024 — The W3C currently does not have a timeline for when WCAG 3.0 will be released as a “recommendation” (the point at which the docume...\
  Deque Systems

Show all

You said: great. but it shows a percentage. i remember it was a number like lc elsewhere.

Your memory is 100% correct—the official APCA unit is a raw number called **Lc (Lightness Contrast)**, which typically ranges from `Lc 0` to `Lc 106`. \[[1](https://apcacontrast.com/)]

The **percentage (%)** you see in Chromium DevTools is a simplified UI choice made by the Google Chrome engineering team, not the APCA standard itself. \[[1](https://www.datawrapper.de/blog/color-contrast-check-data-vis-wcag-apca)]

The Difference Explained

- **The Official APCA Tool**: Gives you a value like **`Lc 75`**. This scale represents the actual perceived mathematical difference in lightness contrast.
- **Chromium DevTools**: Translates that raw math into a **`0% to 100%` scale**. For example, instead of displaying `Lc 60`, DevTools maps no contrast to `0%` and the absolute maximum contrast to `100%` to make it friendlier for everyday developers who aren't familiar with the APCA specification. \[[1](https://www.datawrapper.de/blog/color-contrast-check-data-vis-wcag-apca), [2](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)]

Why This Discrepancy Matters

Because Chromium maps the scale to a basic percentage, it strips away some of the core utility built by APCA creator Andrew Somers. \[[1](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16)]

The official **Lc values correspond directly to a lookup matrix for typography**. If you use a tool that outputs standard Lc numbers, the rules are highly specific: \[[1](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)]

- **Lc 90**: Minimum contrast recommended for very small text or thin fonts (e.g., 12px).
- **Lc 75**: The minimum baseline recommended for general body text.
- **Lc 60**: The minimum baseline for large, bold text like headers (e.g., 24px bold). \[[1](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16), [2](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)]

Because Chrome's percentage scale doesn't align one-to-one with these lookup tables, most design systems prefer using official third-party calculators.

Where to Find the Raw "Lc" Numbers

If you want to use the genuine `Lc` numbers instead of Chrome's percentage approximation, you can test your colors using these tools:

1. **The Official Calculator**: The official [APCA Contrast Calculator](https://apcacontrast.com/) provides deep typography matrices.
2. **Design Plugins**: Figma plugins like _Stark_ or _APCA Contrast Checker_ display the raw Lc math natively in your design files.
3. **Datawrapper**: The online Datawrapper Contrast Checker cleanly maps out APCA scores explicitly as Lc values alongside standard WCAG scores. \[[1](https://apcacontrast.com/)]

Would you like a copy of the **official APCA font-size-to-Lc matrix** to see exactly how text size alters the required contrast value? \[[1](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16), [2](https://www.accessibilitychecker.org/blog/apca-advanced-perceptual-contrast-algorithm/)]

- [link](https://medium.com/@colleengratzer/how-apca-changes-accessible-contrast-with-andrew-somers-3d47627a5e16)\
  How APCA Changes Accessible Contrast — With Andrew ...\
  Dec 8, 2023 — Find out from APCA creator Andrew Somers the problem with WCAG contrast ratios, why APCA is more accurate and how you can make you...\
  Medium·Colleen Gratzer
- [link](https://apcacontrast.com/)\
  APCA Contrast Calculator\
  Relative to Font Size and Weight. APCA reports lightness contrast as an Lc value from Lc 0 to Lc 106 for dark text on a light back...\
  APCA Contrast Calculator
- [link](https://www.datawrapper.de/blog/color-contrast-check-data-vis-wcag-apca)\
  It's time for a more sophisticated color contrast check for data ...\
  Jan 12, 2022 — Inserting a text and background color will give you a number, the 4 "APCA contrast." It doesn't matter if the contrast is positive...\
  Datawrapper

Show all
