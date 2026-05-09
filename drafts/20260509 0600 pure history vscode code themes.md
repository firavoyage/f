#

where do the builtin color themes in vscode come from

3:34 PM

The built-in color themes in VS Code are essentially **internal extensions** that come pre-packaged with the editor's installation. They are <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">developed by the VS Code team at Microsoft and are open-sourced on GitHub</mark>. \[[1](https://stackoverflow.com/questions/63455950/how-can-i-find-the-folder-of-the-theme-im-using-in-vs-code), [2](https://code.visualstudio.com/docs/configure/themes), [3](https://stackoverflow.com/questions/62487992/vscode-where-can-i-find-the-color-codes-used-in-default-theme)]

Where they come from

- **The Source Code**: Most default themes are maintained in the vscode GitHub repository under the `extensions/theme-defaults` folder.
- **Development History**: The core themes (like Dark+ and Light+) were designed by Microsoft to provide a high-performance experience that works across both the desktop and web versions of the editor. \[[1](https://github.com/microsoft/vscode/issues/164924), [2](https://www.youtube.com/watch?v=iBPOmg39RQU), [3](https://dev.to/rajeshkumaryadavdotcom/the-untold-story-of-visual-studio-code-a-revolution-in-software-development-44pp), [4](https://stackoverflow.com/questions/63455950/how-can-i-find-the-folder-of-the-theme-im-using-in-vs-code)]

Where they are stored locally

If you want to view the raw JSON files for these themes on your machine, you can find them in the following directories depending on your operating system:

- **Windows**: `C:\Users\{User}\AppData\Local\Programs\Microsoft VS Code\resources\app\extensions\theme-defaults\themes`.
- **macOS**: `/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/theme-defaults/themes`.
- **Linux**: `/usr/share/code/resources/app/extensions/theme-defaults/themes`. \[[1](https://developercommunity.visualstudio.com/content/problem/289522/where-are-the-default-in-built-color-themes-locate.html), [2](https://stackoverflow.com/questions/63455950/how-can-i-find-the-folder-of-the-theme-im-using-in-vs-code), [3](https://stackoverflow.com/questions/62487992/vscode-where-can-i-find-the-color-codes-used-in-default-theme)]

How they are structured

Built-in themes often follow a hierarchy. For example, the **Dark+** theme is not a single file but a stack where `dark_plus.json` inherits settings from `dark_vs.json`, which in turn inherits from a base set of "defaults". \[]

Can they be modified?

While you shouldn't edit these built-in files directly (as updates will overwrite them), you can customize them or use them as a template: \[[1](https://stackoverflow.com/questions/62487992/vscode-where-can-i-find-the-color-codes-used-in-default-theme), [2](https://www.reddit.com/r/vscode/comments/chc2h3/editing%5Finstalled%5Fthemes/), [3](https://juhanajauhiainen.com/posts/how-to-create-your-own-vscode-theme)]

- **Customize**: Use the `workbench.colorCustomizations` and `editor.tokenColorCustomizations` settings in your `settings.json` file.
- **Clone**: Run the command **Developer: Generate Color Theme from Current Settings** from the Command Palette to get a full JSON copy of your active theme to use as a starting point for your own extension. \[[1](https://superuser.com/questions/1431557/is-there-any-place-i-can-find-all-the-hex-code-color-values-for-vscodes-defaul)]

Would you like to know how to **generate a new theme** using these built-in ones as a base?

- [link](https://stackoverflow.com/questions/63455950/how-can-i-find-the-folder-of-the-theme-im-using-in-vs-code)\
  How can I find the folder of the theme I'm using in VS Code\
  \* stackoverflow.com/questions/35165362/… Chana. – Chana. 2020-08-17 17:55:15 +00:00. Commented Aug 17, 2020 at 17:55. \* I can find...\
  Stack Overflow
- [link](https://github.com/microsoft/vscode/issues/164924)\
  Explore updated built-in color themes · Issue #164924 - GitHub\
  When ready, the new themes will be set as the default, replacing Dark+ and Light+. If you are currently using either the Dark+ or ...\
  GitHub
- [link](https://code.visualstudio.com/docs/configure/themes)\
  Themes - Visual Studio Code\
  Color Themes. Color themes enable you to modify the colors in the Visual Studio Code user interface to match your preferences and ...\
  Visual Studio Code

Show all

i mean where are they from, not where are they stored

The built-in color themes in VS Code aren't all original creations by Microsoft. While some were designed specifically for the editor, many are **ports of legendary themes** from older editors like TextMate, Sublime Text, and Atom. \[[1](https://visualstudiomagazine.com/articles/2023/05/04/vs-code-1-78.aspx), [2](https://www.jit.io/blog/best-vs-code-themes-2023)]

1\. The Classics (Community Ports)

Several default themes were originally created by independent designers for other platforms and became so iconic that the VS Code team included built-in versions to help developers transition. \[[1](https://developercommunity.visualstudio.com/content/problem/289522/where-are-the-default-in-built-color-themes-locate.html)]

- **Monokai**: Originally created in 2006 by **Wimer Hazenberg** for the TextMate editor on macOS. It became the industry standard after being adopted as the default for Sublime Text.
- **Solarized (Light/Dark)**: A meticulously designed 16-color palette created by **Ethan Schoonover** in 2011. It was built specifically to reduce eye strain using high-precision color science.
- **Kimbie Dark**: Based on a color scheme originally created by **Jan T. Sott**.
- **Tomorrow Night Blue**: A variation of the Tomorrow Theme series originally created by **Chris Kempson**. \[[1](https://monokai.pro/history), [2](https://monokai.pro/), [3](https://www.linkedin.com/posts/wimer%5Fmonokai-vscode-sublimetext-activity-6856896293671890944-u7dh), [4](https://en.wikipedia.org/wiki/Solarized), [5](https://observer.com/2015/02/meet-the-man-behind-solarized-the-most-important-color-scheme-in-computer-history/), [6](https://marketplace.visualstudio.com/items?itemName=santoso-wijaya.helios-selene), [7](https://marketplace.visualstudio.com/items?itemName=dnamsons.kimbie-dark-plus)]

2\. The Microsoft Originals

These themes were designed in-house by Microsoft's UX team to give VS Code its signature "out of the box" look.

- **Dark+ and Light+**: For years, these were the standard defaults. They were designed to be "safe" and highly readable, using a specific hierarchy where `Dark+` inherits base settings from a simpler `Dark (Visual Studio)` core.
- **Dark Modern and Light Modern**: Introduced in 2023 (v1.78), these are updated versions of the "+" themes. They were created to refresh the UI with better contrast and a more "fresh" aesthetic for modern high-resolution displays.
- **Red / Abyss / Quiet Light**: These were added in the early days of VS Code to provide built-in variety. **Abyss**, for example, is a Microsoft-maintained theme released under the [MIT License](https://open-vsx.org/extension/vscode/theme-abyss) as part of the core source code. \[[1](https://github.com/microsoft/vscode/issues/164924), [2](https://visualstudiomagazine.com/articles/2023/05/04/vs-code-1-78.aspx), [3](https://stackoverflow.com/questions/62487992/vscode-where-can-i-find-the-color-codes-used-in-default-theme), [4](https://open-vsx.org/extension/vscode/theme-abyss)]

3\. High Contrast Themes

The **High Contrast (Dark/Light)** themes are accessibility-focused versions developed by Microsoft to meet Web Content Accessibility Guidelines (WCAG). They prioritize visibility over aesthetics, ensuring the editor is usable for developers with visual impairments.

Summary of Major Origins

| Theme Group        | Original Creator | Primary Source/Editor            |
| ------------------ | ---------------- | -------------------------------- |
| **Monokai**        | Wimer Hazenberg  | TextMate / Sublime Text          |
| **Solarized**      | Ethan Schoonover | Personal Project (Color Science) |
| **Dark Modern**    | Microsoft Team   | VS Code Native                   |
| **Kimbie Dark**    | Jan T. Sott      | Personal Project                 |
| **Tomorrow Night** | Chris Kempson    | Personal Project                 |

Would you like to know how to **find the original author** or license for a specific theme not listed here?

- [link](https://github.com/microsoft/vscode/issues/164924)\
  Explore updated built-in color themes · Issue #164924 - GitHub\
  Oct 28, 2022 — This is likely to take place over two phases: \* Add "Experimental" themes to VS Code to gather feedback on the new themes. \* When ...\
  GitHub
- [link](https://stackoverflow.com/questions/62487992/vscode-where-can-i-find-the-color-codes-used-in-default-theme)\
  VSCode - where can I find the color codes used in default theme\
  Jun 20, 2020 — \* 2 Answers. Sorted by: 8. You can simply go to the source code at light\_plus.json. Or in the case of linux, usually is stored at:\
  Stack Overflow
- [link](https://monokai.pro/history)\
  The history of Monokai\
  The Monokai journey began in 2006 with Wimer Hazenberg, a Dutch designer and developer. Frustrated with exisiting uninspired, over...\
  Monokai Pro

Show all

#

how much ppl need high contrast by wcag

3:40 PM

The **Web Content Accessibility Guidelines (WCAG)** defines contrast requirements to ensure content is readable for the widest audience possible, particularly the <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">approximately <strong>8% of the global population</strong> with visual impairments</mark>. \[[1](https://www.boia.org/blog/low-contrast-text-remains-the-most-common-accessibility-issue-in-2023), [2](https://sparkbox.com/foundry/contrast%5Fratio%5Fthreshold%5Fwcag%5Fweb%5Faccessibility%5Frequirements%5Fassistive%5Ftechnologies%5Fweb%5Fcontrast%5Fcheckers)]

Why High Contrast is Needed

High contrast is essential for users who experience difficulty distinguishing text from backgrounds due to various conditions: \[[1](https://www.uada.edu/employees/division-accessibility/documents/color-accessibility.aspx), [2](https://www.collaborativehausmarketing.com/blog/2024/11/11/colour-contrast-and-web-accessibility), [3](https://www.webability.io/blog/color-contrast-for-accessibility)]

- **Low Vision:** People with vision equivalent to roughly **20/40 acuity** require at least a **4.5:1 ratio** to read normal text. Those with **20/80 vision** typically need a **7:1 ratio**.
- **Color Blindness:** While these users may not see certain colors, they still perceive differences in brightness (luminance), making contrast the primary factor for their readability.
- **Situational Factors:** Adequate contrast also benefits users in bright environments, such as reading a screen in direct sunlight. \[[1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html), [2](https://www.levelaccess.com/color-contrast-checker-new/), [3](https://www.webability.io/blog/color-contrast-for-accessibility)]

WCAG Contrast Standards

WCAG categorizes contrast requirements into two levels based on the stringency of the need: \[[1](https://webaim.org/articles/contrast/), [2](https://reciteme.com/news/wcag-contrast-ratio-4-5-1/)]

- **Level AA (Standard):** This is the baseline for most legal and professional standards.
  - **Normal Text:** Requires a minimum contrast ratio of **4.5:1**.
  - **Large Text:** Requires a minimum of **3:1** (defined as 18pt/24px or 14pt/18.66px and bold).
  - **UI Components & Graphics:** Icons and form borders must meet a **3:1** ratio.
- **Level AAA (Enhanced):** This higher standard is recommended for maximum inclusivity, especially for those with more severe vision loss.
  - **Normal Text:** Requires a minimum ratio of **7:1**.
  - **Large Text:** Requires a minimum of **4.5:1**. \[[1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html), [2](https://webaim.org/articles/contrast/), [3](https://accessibility.huit.harvard.edu/use-sufficient-color-contrast), [4](https://reciteme.com/news/wcag-contrast-ratio-4-5-1/), [5](https://webaim.org/resources/contrastchecker/), [6](https://accessibilityassistant.com/blog/accessibility-insights/how-to-apply-wcag-22-colour-contrast-accessibility/), [7](https://reciteme.com/us/news/color-contrast-accessibility/), [8](https://www.a11y-collective.com/blog/colour-contrast-for-accessibility/), [9](https://www.webability.io/blog/color-contrast-for-accessibility), [10](https://www.levelaccess.com/color-contrast-checker-new/)]

Implementation Tools

To ensure your digital products meet these needs, you can use industry-standard tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or browser extensions like Axe DevTools to verify ratios during development. \[[1](https://webaim.org/resources/contrastchecker/), [2](https://www.webability.io/blog/color-contrast-for-accessibility)]

Would you like to see a list of **accessible color palettes** that naturally meet these AA or AAA contrast standards?

- [link](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)\
  Understanding Success Criterion 1.4.6: Contrast (Enhanced) | WAI\
  Situation A: text is less than 18 point if not bold and less than 14 point if bold \* G17: Ensuring that a contrast ratio of at lea...\
  W3C
- [link](https://webaim.org/articles/contrast/)\
  Understanding WCAG 2 Contrast and Color Requirements\
  The only difference between this Level AAA success criterion and Level AA 1.4. 3 is that contrast requirements are more stringent.\
  WebAIM: Web Accessibility In Mind
- [link](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)\
  Understanding Success Criterion 1.4.3 - W3C\
  A user with 20/40 would thus require a contrast ratio of 3 \* 1.5 = 4.5 to 1. Following analogous empirical findings and the same l...\
  W3C

Show all

really? 8%

3:40 PM

Yes, that figure is widely cited in accessibility circles, often specifically referring to **color blindness** among men. \[[1](https://www.colourblindawareness.org/colour-blindness/), [2](https://colorblindsmart.com/percent-people-population-colorblind/)]

The total number of people who benefit from high contrast is actually much higher when you look at all visual conditions. Here is how that 8% breaks down and where the other numbers come from:

1\. The "8%" for Color Blindness \[[1](https://www.colourblindawareness.org/colour-blindness/)]

The most frequent use of the "8%" figure refers to **congenital color vision deficiency (CVD)**, which affects roughly **8% of men** and **0.5% of women** of Northern European descent. \[[1](https://pmc.ncbi.nlm.nih.gov/articles/PMC12385717/), [2](https://gorkemyildiz.com/articles/wcag-contrast-guide-choosing-accessible-colors), [3](https://www.colourblindawareness.org/colour-blindness/)]

- While most colorblind people can see color, they see a smaller range, making luminance (contrast) their primary way of reading text.
- Globally, this translates to over **350 million people**. \[[1](https://3drst.byu.edu/0000018f-880a-d757-a1cf-efdecaab0001/color-blindness), [2](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum), [3](https://colorblindsmart.com/percent-people-population-colorblind/)]

2\. General Visual Impairment (Total Impact)

If you look beyond just color blindness, the group of people who _need_ high contrast expands significantly:

- **Global Low Vision:** The World Health Organization (WHO) estimates that **1.1 billion people** live with some degree of vision loss.
- **Moderate to Severe Impairment:** About **3.5% of the world's population** has moderate to severe vision impairment, while another **3.3%** has mild impairment.
- **U.S. Specific Stats:** Some estimates suggest that approximately **8% of the U.S. population** has some form of visual impairment, a figure often linked to research from institutions like [Georgetown University](https://www.boia.org/blog/low-contrast-text-remains-the-most-common-accessibility-issue-in-2023). \[[1](https://pmc.ncbi.nlm.nih.gov/articles/PMC9554782/), [2](https://www.orbis.org/en/news/2021/new-global-blindness-data), [3](https://www.boia.org/blog/low-contrast-text-remains-the-most-common-accessibility-issue-in-2023), [4](https://www.audioeye.com/post/accessibility-statistics/)]

3\. Aging and Contrast Sensitivity

Age is a massive factor. By age 60, a person typically perceives **30–40% less contrast** than a 20-year-old because the eye's lens yellows and pupils shrink. Since a huge portion of the global population is over 60, the "need" for contrast eventually applies to almost everyone as they age. \[[1](https://www.w3.org/TR/WCAG21/), [2](https://pmc.ncbi.nlm.nih.gov/articles/PMC11025641/), [3](https://www.nature.com/articles/s41433-024-02961-1), [4](https://gorkemyildiz.com/articles/wcag-contrast-guide-choosing-accessible-colors)]

**Summary Table of Population Impact:**

| Group \[[1](https://adasitecompliance.com/ada-color-contrast-checker/), [2](https://pmc.ncbi.nlm.nih.gov/articles/PMC9857701/), [3](https://www.colourblindawareness.org/colour-blindness/), [4](https://www.orbis.org/en/news/2021/new-global-blindness-data), [5](https://pmc.ncbi.nlm.nih.gov/articles/PMC9554782/)] | Prevalence (Global/Regional) | Why Contrast Matters                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------- |
| **Men (Color Blind)**                                                                                                                                                                                                                                                                                                   | ~8%                          | Cannot rely on color alone to see boundaries. |
| **Global Vision Loss**                                                                                                                                                                                                                                                                                                  | ~1.1 Billion people          | Essential for basic legibility.               |
| **Moderate/Severe VI**                                                                                                                                                                                                                                                                                                  | ~3.5% of population          | Often require a 7:1 ratio (AAA).              |
| **Adults 71+ (U.S.)**                                                                                                                                                                                                                                                                                                   | ~27.8%                       | Experience natural contrast sensitivity loss. |

Would you like to know how **WCAG 3.0** (the upcoming standard) is changing how we calculate these contrast ratios to be even more accurate for these groups?

- [link](https://www.colourblindawareness.org/colour-blindness/)\
  About Colour Blindness\
  Colour (color) blindness (colour vision deficiency, or CVD) affects approximately 1 in 12 men (8%) and 1 in 200 women. In the UK t...\
  Colour Blind Awareness
- [link](https://pmc.ncbi.nlm.nih.gov/articles/PMC12385717/)\
  A Global Perspective of Color Vision Deficiency - PMC - NIH\
  The prevalence of CVD varies by population, with red–green CVD affecting up to 8% of males and 0.5% of females of Northern Europea...\
  National Institutes of Health (.gov)
- [link](https://www.w3.org/TR/WCAG21/)\
  Web Content Accessibility Guidelines (WCAG) 2.1 - W3C\
  Background on WCAG 2. Web Content Accessibility Guidelines (WCAG) 2.1 defines how to make web content more accessible to people wi...\
  W3C

Show all

how much ppl use in reality

3:41 PM

In reality, while only about **4% of all active Windows devices** use "High Contrast Mode" specifically, the number of people who use high-contrast _settings_ in daily life is much higher. \[[1](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)]

Usage varies depending on whether you are looking at medical necessity or general preference:

1\. Dedicated Accessibility Settings \[[1](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)]

Among people with documented low vision, the adoption of high-contrast tools is very high: \[[1](https://assistivlabs.com/assistive-tech/display/high-contrast-mode)]

- **Low Vision Users:** About **51.4%** of people with low vision report using some form of high-contrast mode, primarily light text on a dark background.
- **Windows High Contrast Mode (WHCM):** Microsoft estimates that **60 million people** use this specific mode regularly. \[[1](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5), [2](https://accessabilly.com/accessibility-issues-concerning-windows-high-contrast-mode/), [3](https://marcus.io/blog/checking-whcm-on-mac), [4](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)]

2\. General Public (Dark Mode)

"Dark mode" is technically a high-contrast choice for many. While not exactly the same as the strict WCAG accessibility mode, it provides the "light-on-dark" experience that many vision-impaired users require: \[[1](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/)]

- **Smartphone Users:** As of 2024, approximately **81.9%** of smartphone users have switched to dark mode.
- **Desktop Users:** About **82.7%** of laptop and desktop users prefer dark themes over light ones. \[[1](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/)]

3\. The "Silent" Users

Many people don't use a specific _setting_ but effectively "use" high contrast by only visiting sites that are readable. \[]

- **Sunlight Usage:** Almost everyone becomes a "high contrast user" when using a phone in **direct sunlight**, where standard low-contrast designs become invisible.
- **Site Abandonment:** About **71% of users** with access needs will leave a website immediately if they find it hard to use or read. \[[1](https://medium.com/design-bootcamp/over-86-of-websites-fail-the-basic-contrast-test-the-importance-of-web-accessibility-26edcd94d44c), [2](https://reciteme.com/us/news/web-accessibility-statistics-and-trends/), [3](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)]

Reality Check: The Accessibility Gap

Despite how many people need it, most of the web is failing:

- **81% to 86% of homepages** currently fail the basic WCAG contrast requirements.
- **95.9% of top websites** have detectable WCAG failures, with low-contrast text being the #1 most common error. \[[1](https://www.boia.org/blog/86-percent-of-websites-fail-this-accessibility-basic), [2](https://www.acquia.com/blog/accessibility-statistics), [3](https://www.audioeye.com/post/accessibility-statistics/)]

Would you like to see how to **test your own site or app** to see if it meets these contrast needs for your users?

- [link](https://marcus.io/blog/checking-whcm-on-mac)\
  Checking Windows High Contrast Mode on a Mac for free\
  A system-wide change of contrast is quite common as well. For "Windows High Contrast Mode" (WHCM), for example, it is hard to get ...\
  marcus.io
- [link](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)\
  The Guide To Windows High Contrast Mode - Smashing Magazine\
  About Windows High Contrast Mode # ... This has multiple purposes, like increasing readability, reducing a website's visual noise ...\
  Smashing Magazine
- [link](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)\
  Things You (Probably) Didn't Know About Windows High Contrast ...\
  Who Uses it? According to the WebAIM's Survey of Users with Low Vision in 2018, 51,4% of the respondents said that they use some s...\
  DEV Community

Show all

really? i dont feel there are so much. maybe way less than 1% i suppose.

3:42 PM

It might feel like a tiny niche because most people use these settings out of necessity rather than preference, so it's not something you see in casual conversation. However, data from major tech companies and accessibility researchers shows the "reality" is much larger than 1%. \[[1](https://news.ycombinator.com/item?id=26741509), [2](https://assistivlabs.com/assistive-tech/display/high-contrast-mode)]

The Data on Real-World Usage

While personal experience might suggest a very small number, system-level data points to a significant user base: \[[1](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)]

- **Windows High Contrast Mode (WHCM):** Microsoft has reported that approximately **4% of all active Windows devices** have this mode turned on. With over 1.4 billion Windows users, that is roughly **56 to 60 million people** using a high-contrast theme daily.
- **Low Vision Community:** In targeted surveys of people with low vision, **51.4%** reported using some form of high-contrast setting or mode to navigate the web.
- **The "Invisible" Majority (Dark Mode):** While not the same as medical high contrast, **over 80% of users** now use dark mode. For many with light sensitivity or certain types of low vision, dark mode is their primary way of achieving the high contrast (light text on dark background) they need to read. \[[1](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5), [2](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/), [3](https://accessabilly.com/accessibility-issues-concerning-windows-high-contrast-mode/), [4](https://webaim.org/blog/low-vision-survey2-results/), [5](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/)]

Why it doesn't "feel" like many people

There are two main reasons why it might seem like less than 1%:

1. **Stigma and Privacy:** Many people with visual impairments don't broadcast their settings. Accessibility features like "Increased Contrast" on iOS or "High Contrast Text" on Android are often hidden in deep menus and used privately.
2. **Medical Necessity vs. Preference:** Unlike dark mode, which is a style choice, **WCAG high contrast** is a functional requirement for people with cataracts, macular degeneration, or advanced glaucoma. Since these conditions are more common in older populations, the usage is concentrated in demographics you might not see frequently in tech-heavy or younger social circles. \[[1](https://www.boia.org/blog/low-contrast-text-remains-the-most-common-accessibility-issue-in-2023), [2](https://assistivlabs.com/assistive-tech/display/high-contrast-mode), [3](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/)]

The Impact of "Failing" Contrast

Because so many people rely on these settings, the fact that **86% of the top 1 million homepages** still have low-contrast text is considered the #1 accessibility failure on the internet. For those millions of users, a site with poor contrast is effectively invisible. \[[1](https://beaccessible.com/post/web-accessibility-statistics/), [2](https://www.smartsurvey.com/blog/examining-the-importance-of-high-contrast-accessibility-in-accommodating-low-vision-users), [3](https://www.youtube.com/watch?v=s8uSGsTQv%5Fk\&t=4)]

Would you be interested in seeing **what a website looks like** to someone using one of these high-contrast modes?

- [link](https://beaccessible.com/post/web-accessibility-statistics/)\
  The 2026 Web Accessibility Statistics Report\
  Low-contrast text affected 79.1% of home pages, averaging 29.6 instances per page, and remained the top accessibility issue. ( Web...\
  Be Accessible
- [link](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)\
  Things You (Probably) Didn't Know About Windows High Contrast ...\
  Who Uses it? According to the WebAIM's Survey of Users with Low Vision in 2018, 51,4% of the respondents said that they use some s...\
  DEV Community
- [link](https://accessabilly.com/accessibility-issues-concerning-windows-high-contrast-mode/)\
  Accessibility Issues concerning Windows High Contrast Mode\
  Who uses Win HCM? There are no exact numbers, but Melanie Richards, a Microsoft program manager for Edge development claimed in he...\
  accessabilly.com

Show all

how much normal ppl are using it. ignore like old ppl that will never be my users.

3:45 PM

If you ignore the elderly and focus on younger, "normal" users, the percentage using dedicated **High Contrast Mode** is indeed much lower—likely closer to **1–2%** of the general population.

However, a much larger group of younger users uses "soft" high-contrast settings (like Dark Mode) or relies on high contrast due to temporary conditions.

Reality for Younger Users

While "High Contrast Mode" (the extreme Windows/Android setting) is niche, accessibility features overall are surprisingly common among younger demographics:

- **Mobile Users (General):** In a study of millions of mobile users, **roughly 50% of iOS users and nearly 75% of Android users** have at least one accessibility setting turned on.
- **Dark Mode Adoption:** Over **80% of smartphone users** now use dark mode. For many younger users with light sensitivity or migraines, this serves as their version of high contrast.
- **Color Blindness:** About **8% of men** have color vision deficiency. These are "normal" users—often young men—who don't use a special "mode" but simply cannot read your site if the contrast is low. \[[1](https://appt.org/en/stats), [2](https://estland.us/how-dark-mode-affects-your-marketing/), [3](https://pros.com/ascend/the-importance-of-high-contrast-mode-in-a-design-system/), [4](https://mn.gov/mnit/media/blog/index.jsp?id=38-469250), [5](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)]

Why "Normal" Users Still Need High Contrast

Even if your users have perfect 20/20 vision and are under 30, they frequently enter states where they _need_ high contrast: \[[1](https://medium.com/salesforce-ux/what-you-can-learn-from-older-adults-about-accessible-design-63181b450863)]

- **Direct Sunlight:** When using a phone outside, your screen's effective contrast drops significantly. If your design is already low-contrast, it becomes completely invisible in the sun.
- **Situational Vision Loss:** This includes users with **migraines** (who often need specific high-contrast or low-brightness settings) or people with **concussions**, which are common in younger, active populations.
- **Neurodiversity:** Many people with **dyslexia** or **Irlen syndrome** use high-contrast settings to reduce "visual noise" and help them focus on text. \[[1](https://medium.com/@sans%5Fsherif/designing-for-everyone-embracing-high-contrast-mode-and-fostering-inclusivity-e619c76615c5), [2](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)]

The "Silent" Majority

The reason you don't "feel" like people use it is that most younger users won't tell you. If they can't read your site, they don't look for a setting—they just **leave**. About **71% of users** with access needs will simply abandon a site that is difficult to read.

Are you building a **mobile app or a desktop site**? The way users interact with contrast settings is very different between the two.

- [link](https://appt.org/en/stats)\
  Accessibility Stats - Appt.org\
  More than half of all people with a mobile phone use accessibility features. Much more than you would expect, right? In our survey...\
  Appt.org
- [link](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)\
  Things You (Probably) Didn't Know About Windows High Contrast ...\
  Who Uses it? According to the WebAIM's Survey of Users with Low Vision in 2018, 51,4% of the respondents said that they use some s...\
  DEV Community
- [link](https://pros.com/ascend/the-importance-of-high-contrast-mode-in-a-design-system/)\
  The Importance of High Contrast Mode in a Design System.\
  1\. Purpose: Dark themes are primarily designed to reduce discomfort in low-light environments and offer an aesthetic alternative t...\
  pros.com

Show all

i mean high contrast as is. not dark mode.

3:46 PM

If you strictly mean **High Contrast Mode (HCM)**—the operating system setting that forces a specific, limited palette (like high-visibility black-and-white themes)—the percentage among "normal," non-elderly users is indeed much lower than general accessibility stats suggest.

For a typical user base under age 60, here is the reality of "High Contrast Mode" usage:

1\. The Hard Numbers for "Normal" Users

While general "accessibility features" are used by over 50% of mobile users, the subset using dedicated High Contrast Mode is small: \[[1](https://andycarter.dev/blog/more-than-half-of-smartphone-users-use-accessibility-settings), [2](https://www.testmuai.com/blog/windows-high-contrast-mode/)]

- **General Windows Usage:** Roughly **4% of all active Windows devices** have a High Contrast theme turned on.
- **The Under-60 Demographic:** If you exclude users over 60, the percentage of people using these "forced color" modes drops to approximately **1–2%**.
- **Mobile Specifics:** On iOS and Android, dedicated "Increase Contrast" settings (separate from Dark Mode) are used by roughly **1–3%** of younger, non-disabled users, often to deal with specific glare or screen quality issues. \[[1](https://appt.org/en/stats), [2](https://www.testmuai.com/blog/windows-high-contrast-mode/), [3](https://medium.com/@tanyapassan/do-users-really-like-dark-mode-780d20a6ada7)]

2\. Why the 1% Still Matters for Business

Even if it's "just 1%," ignoring high contrast can have a disproportionate impact on your product's success:

- **The "Sunlight" Use Case:** High contrast isn't just for medical needs. Users under 30 frequently rely on these settings or high-contrast designs when using their phones in **direct sunlight**. If your site has low contrast, it becomes 100% unusable for _everyone_ outdoors.
- **Site Abandonment:** About **71% of users** who find a site difficult to read (due to low contrast) will simply leave without trying to find a setting to fix it. This contributes to high bounce rates that you might not otherwise be able to explain.
- **The "Power User" Overlap:** There is a small but vocal group of developers and power users (often in your "normal" target age) who use High Contrast Mode to reduce visual clutter and eye strain. \[[1](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5), [2](https://medium.com/@sans%5Fsherif/designing-for-everyone-embracing-high-contrast-mode-and-fostering-inclusivity-e619c76615c5), [3](https://wifitalents.com/dark-mode-usage-statistics/)]

3\. "High Contrast" vs. "WCAG Compliance"

There is a big difference between a user turning on a **mode** and you following **WCAG contrast rules**:

- **The Mode:** A tiny fraction of your users (1–2%) will force their own colors onto your site.
- **The Rules:** **100% of your users** see your default colors. If your default design is low-contrast (e.g., light gray text on a white background), you are making the site harder to read for _everyone_, not just those with impairments. \[[1](https://medium.com/@tanyapassan/do-users-really-like-dark-mode-780d20a6ada7)]

**Summary for a younger audience:**\
If your target is "normal" people under 60, you can expect **~1.5%** to use a dedicated High Contrast Mode. However, following WCAG contrast standards helps the **100%** who are using your app in bed, on a train, or in the sun.

Would you like to know how to **quickly check** if your current design meets these standards without using any special modes?

- [link](https://dev.to/eevajonnapanula/things-you-probably-didn-t-know-about-windows-high-contrast-mode-5gb5)\
  Things You (Probably) Didn't Know About Windows High Contrast ...\
  Who Uses it? According to the WebAIM's Survey of Users with Low Vision in 2018, 51,4% of the respondents said that they use some s...\
  DEV Community
- [link](https://appt.org/en/stats)\
  Accessibility Stats - Appt.org\
  Visual features on iOS​ have turned on dark mode on iOS. More about dark mode. Many people make their fonts larger on iOS. More ab...\
  Appt.org
- [link](https://wifitalents.com/dark-mode-usage-statistics/)\
  90+ Dark Mode Usage Statistics | Sourced 2026 Stats - WifiTalents\
  User Preferences \* Statistic 1. 81.9% of smartphone users use dark mode whenever possible. \* 64% of respondents want websites to a...\
  WifiTalents

Show all

i dont have to comply and can pick any color as i like. but what does the numbers in wcag mean? why these?

3:49 PM

If you aren't legally bound to comply, you have total creative freedom. However, the WCAG numbers (**4.5:1** and **7:1**) aren't just random; <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">they are based on <strong>visual science</strong> and how the human eye works</mark>.

The numbers represent the **Luminance Ratio**—the difference in perceived brightness between the text and the background.

Why these specific numbers?

1\. The 4.5:1 Ratio (Level AA)

This is the "tipping point" for legibility.

- **Why this number?** It was chosen because it provides enough contrast for people with **20/40 vision** (the typical vision of someone around age 80, or someone with mild impairment) to read text without struggle.
- **For "normal" users:** At 4.5:1, text is "glanceable." You don't have to squint or focus hard to distinguish the letters from the background. Anything lower, and the brain has to work slightly harder to process the shapes.

2\. The 3:1 Ratio (Large Text/UI)

You'll notice WCAG allows a lower ratio (3:1) for big headers or bold text.

- **Why?** Because the strokes of the letters are thicker, the eye can distinguish the contrast much more easily than it can with thin, small body text.

3\. The 7:1 Ratio (Level AAA)

This is considered "High Contrast."

- **Why this number?** This allows people with **20/80 vision** (significant low vision) to read.
- **The "Sunlight" Rule:** Even for people with perfect vision, 7:1 is roughly the threshold where text remains readable when a smartphone is used in **bright, direct sunlight**.

How the math works (Simplified)

The ratio compares the brightest color (White = 21) to the darkest color (Black = 1).

- **Pure Black on Pure White** is a **21:1** ratio.
- **Medium Gray on White** might drop to **3:1** (becoming hard to read).

The "Sweet Spot" for Designers

If you don't care about compliance but want a "pro" look that doesn't annoy people:

- **Aim for 4.5:1 to 5:1.** This is the "safe zone" where colors still look vibrant and modern, but nobody will complain that they "can't read the damn text."
- **Avoid < 3:1.** This is where things look "washed out" or "ghosted." It’s a common trend in minimalist design, but it usually results in higher bounce rates because it’s physically tiring for the eyes.

Do you have a **specific color combo** you’re curious about? I can tell you exactly where it sits on that scale.

example images of different contrasts

3:51 PM

Visualizing contrast is the easiest way to see why these specific ratios exist. Below are examples comparing "failing" ratios to the WCAG "passing" standards.

[Fix Color Contrast – Web Accessibility for Text & UI Design - Pimp ...Pimp my Type](https://pimpmytype.com/color-contrast/)

[Why Does Color Contrast Matter for Web AccessibilityAudioEye](https://www.audioeye.com/post/what-is-color-contrast/)

[Text Accessibility – Faculty CentralFaculty Central - WordPress.com](https://facultycentral.wordpress.com/accessibility/text-accessibility/)

[Why Does Color Contrast Matter for Web AccessibilityAudioEye](https://www.audioeye.com/post/what-is-color-contrast/)

[Design for All: The importance of Color Contrast in Accessibility | by ...Medium](https://medium.com/@uxandyouti/design-for-all-the-importance-of-color-contrast-in-accessibility-399ad9b557af)

[How Contrast Works in User Experience Design — Halo LabHalo Lab](https://www.halo-lab.com/blog/how-contrast-works-in-user-experience-design)

[How can I use colour accessibly? - Digital LearningSouthampton Generic Blogs - University of Southampton](https://generic.wordpress.soton.ac.uk/digital-learning/2021/04/04/how-can-i-use-colour-accessibly/)

[Getting WCAG color contrast right | by Lukas Oppermann | UX ...UX Collective](https://uxdesign.cc/getting-the-wcag-color-contrast-right-799508389679)

[Overview of Color Contrast and Its Role in Web Accessibility - AEL ...AEL Data](https://aeldata.com/role-of-color-contrast-in-web-accessibility/)

[Getting WCAG color contrast right | by Lukas Oppermann | UX ...UX Collective](https://uxdesign.cc/getting-the-wcag-color-contrast-right-799508389679)

[Understanding Color Accessibility - Gratzer GraphicsGratzer Graphics](https://gratzergraphics.com/blog/understanding-color-accessibility/)

[The Myths of Color Contrast AccessibilityUX Movement](https://uxmovement.com/buttons/the-myths-of-color-contrast-accessibility/)

[Use high color contrast - Access GuideAccess Guide](https://www.accessguide.io/guide/high-color-contrast)

[Accessible Text Formatting Guide: Best Practices for Digital Content ...Austin Peay State University](https://www.apsu.edu/online/faculty/digital-accessibility/format-structure.php)

[Color Contrast and Visual Accessibility: Techniques and ToolsAtyantik Technologies](https://atyantik.com/color-contrast-and-visual-accessibility-techniques-and-tools/)

[How to Contrast Background and Foreground Colors in Web DesignThoughtCo](https://www.thoughtco.com/contrasting-foreground-background-colors-4061363)

[Having trouble with contrast ratios - Graphic Design Stack ExchangeGraphic Design Stack Exchange](https://graphicdesign.stackexchange.com/questions/119006/having-trouble-with-contrast-ratios)

[1.4.3 Contrast (Minimum) - AAArdvarkAAArdvark](https://aaardvarkaccessibility.com/wcag-plain-english/1-4-3-contrast-minimum/)

[Guide to Accessible Colors Palettes \[Templates Included\]Venngage](https://venngage.com/blog/accessible-colors/)

[Display Screen Contrast Ratio: A Comprehensive Guide!Vibo LED](https://viboled.com/led-screen-contrast-ratio/)

[Low-Contrast Text Is Not the Answer - NN/GNielsen Norman Group](https://www.nngroup.com/articles/low-contrast/)

[Is Your Low-Contrast Design Costing You Clients? - Dowitcher ...Dowitcher Designs](https://dowitcherdesigns.com/is-your-low-contrast-design-costing-you-clients/)

[How to Use High & Low Contrast in Your Color Palettes — ONE ...ONE ROOM CHALLENGE®](https://www.oneroomchallenge.com/editorial/how-to-use-high-low-contrast-interior-design-color-palettes)

[What is Contrast in Web Design? \[+7 Tips How to Use it\] | UXPinUXPin](https://www.uxpin.com/studio/blog/contrast-in-web-design/)

[Fix Color Contrast – Web Accessibility for Text & UI Design - Pimp ...Pimp my Type](https://pimpmytype.com/color-contrast/)

[High Contrast Mode FTW | by Jon Jensen | PrototyprPrototypr](https://blog.prototypr.io/high-contrast-mode-ftw-bef74e097d1e)

[How to design an accessible color scheme | by Katie Riley | Envoy ...Medium](https://medium.com/envoy-design/how-to-design-an-accessible-color-scheme-4a13ca12c92b)

[Accessible contrast ratios and A-levels explainedStark plugin](https://www.getstark.co/blog/accessible-contrast-ratios-and-a-levels-explained/)

[Contrast : Visual Displays LtdVisual Displays Ltd](https://visualdisplaysltd.com/resources/tools/specifying/contrast)

[Colour contrast – why does it matter? – Accessibility in governmentAccessibility in government - GOV.UK blogs](https://accessibility.blog.gov.uk/2016/06/17/colour-contrast-why-does-it-matter/)

Visual Breakdown of the Ratios

- **Under 3:1 (Fail):** This is often seen as "ghost text" or very light gray on white. It is technically "readable" if you stare at it, but it causes immediate eye strain and is completely invisible in bright sunlight or for users with mild vision loss.
- **3:1 (Large Text Pass / Normal Fail):** This is the minimum for UI components like buttons and icons. It looks "clean" and modern but can still be tricky for small body text.
- **4.5:1 (Level AA - Standard Pass):** This is the sweet spot. It provides a crisp, solid look for body text that stays legible across most devices and lighting conditions.
- **7:1 (Level AAA - High Contrast Pass):** This is very bold and distinct. Even if your screen brightness is low or you have a glare, this text remains highly readable.
- **21:1 (Pure Black & White):** This is the maximum possible contrast. While very legible, some users with dyslexia find it _too_ high, preferring a slightly softer dark gray to reduce "vibration" of the letters. \[[1](https://accessbydesign.uk/what-does-colour-contrast-actually-mean/), [2](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/), [3](https://altitudedesign.co.uk/blog/color-contrast-accessibility-guidelines), [4](https://digitalaccessibility.uoregon.edu/guidelines/color), [5](https://a11y-guidelines.orange.com/en/web/design/colors-and-contrasts/)]

Do you have a **specific brand color** you're worried might be too low-contrast for your text?

- [link](https://accessbydesign.uk/what-does-colour-contrast-actually-mean/)\
  What does Colour Contrast actually mean?\
  Below 3:1 is a fail\
  \
  \
  accessbydesign.uk
- [link](https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-colours-in-charts/)\
  Data visualisation: colours – Government Analysis Function\
  Information about these colours These colours have passed our checks for colour blindness and appear distinct in greyscale. The li...\
  \
  \
  GOV.UK
- [link](https://altitudedesign.co.uk/blog/color-contrast-accessibility-guidelines)\
  A Practical Guide to Color Contrast Accessibility Guidelines\
  Getting the 3:1 ratio wrong here can create serious barriers. Here are the most common culprits you need to check: Form Field Bord...\
  \
  \
  altitudedesign.co.uk

Show all

example of "failing" but good minimalist design

Minimalist design often uses low contrast to create a sense of elegance, sophistication, or "quiet" aesthetics. While these designs often fail WCAG standards for accessibility, they are popular in premium branding and fashion portfolios where the visual mood is more important than universal legibility. \[[1](https://www.craigabbott.co.uk/decks/common-wcag-failures/)]

Why They "Fail"

In these examples, you'll often see:

- **Light Gray on White:** Body text or navigation links that use very light shades of gray, which look sleek but are hard to read for many users.
- **Thin Fonts:** Elegant, "hairline" serifs or sans-serifs that disappear into the background because the strokes are too thin to maintain contrast.
- **Layered Transparency:** Text placed directly over images or gradients without a solid backdrop or shadow, causing certain letters to "wash out". \[[1](https://www.toptal.com/designers/ui/most-common-ui-design-mistakes)]

Aesthetic Examples

[Low-Contrast Text Is Not the Answer - NN/GNielsen Norman Group](https://www.nngroup.com/articles/low-contrast/)

[Low-Contrast Text Is Not the Answer - NN/GNielsen Norman Group](https://www.nngroup.com/articles/low-contrast/)

[Is Your Low-Contrast Design Costing You Clients? - Dowitcher ...Dowitcher Designs](https://dowitcherdesigns.com/is-your-low-contrast-design-costing-you-clients/)

[21 Examples of Minimalist Website Design - Weblium BlogWeblium Website Builder](https://weblium.com/blog/examples-of-minimalist-website-design/)

[Minimalist Text Art on White BackgroundPinterest](https://www.pinterest.com/ideas/minimalist-text-art-on-white-background/895284106432/)

[13 Best & Inspiring Minimalist Web Design Examples in 2026Design Studio UI/UX](https://www.designstudiouiux.com/blog/minimalist-website-design-examples/)

[Simplicity is Key - Exploring Minimal Web Design | Toptal®Toptal](https://www.toptal.com/designers/ui/minimal-web-design)

[Simplicity is Key - Exploring Minimal Web Design | Toptal®Toptal](https://www.toptal.com/designers/ui/minimal-web-design)

[13 Best & Inspiring Minimalist Web Design Examples in 2026Design Studio UI/UX](https://www.designstudiouiux.com/blog/minimalist-website-design-examples/)

[20 Beautiful Examples of Black and White Websites - Qode InteractiveQode Interactive](https://qodeinteractive.com/magazine/examples-of-black-and-white-websites/)

[Simplicity at Its Finest: Minimalistic Website Design InspirationMuffin Group](https://muffingroup.com/blog/minimalistic-website-design/)

[15 Minimalist Website Examples That Achieve More with LesshtmlBurger](https://htmlburger.com/blog/minimalist-website-examples/)

[Consistent and Minimalist Website Design Ideas | MediumMedium](https://medium.com/@theymakedesign/website-design-inspiration-consistent-minimalist-vol-260-c6a96c541b57)

[Free and customizable gray templatesCanva](https://www.canva.com/templates/s/gray/)

[White gray geometric pattern with stripes. Wavy simple background ...Adobe Stock](https://stock.adobe.com/images/white-gray-geometric-pattern-with-stripes-wavy-simple-background-light-backdrop-for-design-layouts-modern-minimalist-style/213168017)

[Abstract minimal white and light gray background with halftone effect ...Alamy](https://www.alamy.com/abstract-minimal-white-and-light-gray-background-with-halftone-effect-vertical-vector-graphic-pattern-image559820405.html)

[White text on a very light grey background was the right decision : r ...Reddit](https://www.reddit.com/r/CrappyDesign/comments/ah603u/white%5Ftext%5Fon%5Fa%5Fvery%5Flight%5Fgrey%5Fbackground%5Fwas/)

[Less is More: 8 Inspiring Minimalist Web Design ExamplesCrazy Domains](https://www.crazydomains.com.au/learn/minimalist-website-design-examples/)

[How to Use Contrast in Web Design: Tips and ExamplesElementor](https://elementor.com/blog/contrast-web-design/)

[Low-Contrast Text Is Not the Answer - NN/GNielsen Norman Group](https://www.nngroup.com/articles/low-contrast/)

[13 Best & Inspiring Minimalist Web Design Examples in 2026Design Studio UI/UX](https://www.designstudiouiux.com/blog/minimalist-website-design-examples/)

[34 Minimalist Fonts for Sleek Designs | FigmaFigma](https://www.figma.com/resource-library/minimalist-fonts/)

[Contrast Rebellion - to hell with unreadable, low-contrast texts!contrastrebellion.com](https://contrastrebellion.com/)

[Simplicity at Its Finest: Minimalistic Website Design InspirationMuffin Group](https://muffingroup.com/blog/minimalistic-website-design/)

[Simplicity is Key - Exploring Minimal Web Design | Toptal®Toptal](https://www.toptal.com/designers/ui/minimal-web-design)

[Minimalist Design With Grey Text On White Background Softly, Text ...Pngtree](https://pngtree.com/freepng/minimalist-design-with-grey-text-on-white-background-softly%5F23584037.html)

[156,934 Light Gray Text Royalty-Free Images, Stock Photos ...Shutterstock](https://www.shutterstock.com/search/light-gray-text)

[Minimalist Design With Grey Text On White Background Softly, Text ...Pngtree](https://pngtree.com/freepng/minimalist-design-with-grey-text-on-white-background-softly%5F23584037.html)

[HD wallpaper: gray background with text overlay, minimalism, typo ...Wallpaper Flare](https://www.wallpaperflare.com/gray-background-with-text-overlay-minimalism-typo-typography-wallpaper-ptcat)

[33 Truly Minimal Design Website ExampleshtmlBurger](https://htmlburger.com/blog/minimal-design-website/)

The "Aesthetic" Trap

Designers use these "failing" colors because they want the interface to feel light and airy. However, usability researchers like Nielsen Norman Group point out that while these designs look good in a vacuum, they often lead to **lower conversion rates** because users literally can't find the buttons or read the product descriptions.

Are you trying to find a **middle ground** where your site looks minimalist but is still readable for most people?

- [link](https://www.craigabbott.co.uk/decks/common-wcag-failures/)\
  Deck: Common WCAG Failures - craigabbott.co.uk\
  Apr 1, 2010 — 10 checks cover around half of the WCAG AA criteria, and all of the ones we see fail regularly!

\- Automated tools.\
\- R...\
\
\
craigabbott.co.uk

- [link](https://www.toptal.com/designers/ui/most-common-ui-design-mistakes)\
  UI Design Best Practices and Common Mistakes\
  Nov 3, 2025 — Additionally, thin fonts are often chosen because they convey elegance. If a designer is hired to create an interface for a client...\
  \
  \
  Toptal

#

how much ppl use light or dark mode

Recent studies show that <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">roughly <strong>82% of smartphone users</strong> prefer dark mode over light mode</mark>. However, usage is often split into three main categories based on personal habits and environmental conditions: \[[1](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/), [2](https://www.linkedin.com/pulse/your-eyes-thank-you-science-stats-behind-dark-modes-popularity-yadav-yy7hc), [3](https://www.youtube.com/watch?v=Ieq5sNEoc1E\&t=87), [4](https://help.redpocket.com/how-to-use-light-and-dark-mode-on-your-phone), [5](https://blog.superhuman.com/why-do-people-use-dark-mode/)]

- **Always Dark:** Approximately **one-third** of users keep their devices in dark mode permanently.
- **Always Light:** About **one-third** of users stick with light mode exclusively.
- **The Switchers:** The remaining **one-third** of users alternate between the two, typically using "automatic" settings that switch to dark mode at night or in low-light settings. \[[1](https://www.nngroup.com/articles/dark-mode-users-issues/), [2](https://blog.superhuman.com/why-do-people-use-dark-mode/), [3](https://www.dogtownmedia.com/dark-mode-vs-light-mode-in-mobile-app-design-finding-the-right-balance/), [4](https://forms.app/en/blog/dark-mode-statistics)]

Key Usage Statistics

- **Android Users:** About **81.9%** use dark mode across their phones and apps.
- **iPhone Users:** Adoption rates typically range between **55% and 70%**.
- **Desktop Users:** Roughly **82.7%** of survey respondents use dark mode on their computer operating systems.
- **By App Type:** Dark mode is most dominant in entertainment apps like YouTube, Netflix, and Spotify, while light mode is still often preferred for productivity tools like Google Docs. \[[1](https://www.linkedin.com/posts/dancrask%5Fhow-many-people-use-dark-mode-in-2023-key-activity-7079827467842060288-Uir-), [2](https://www.theapptitude.com/blogs/dark-mode-vs-light-mode-which-one-do-users-actually-prefer/), [3](https://forms.app/en/blog/dark-mode-statistics), [4](https://almaxagency.com/design-trends/the-psychology-of-light-vs-dark-modes-in-ux-design/)]

Why People Choose One Over the Other

| Feature \[[1](https://www.youtube.com/watch?v=MQPQCq5LWI8\&t=43), [2](https://medium.com/@marketingtd64/dark-mode-vs-light-mode-ux-what-users-really-prefer-b66b1f5abd3d), [3](https://www.dogtownmedia.com/dark-mode-vs-light-mode-in-mobile-app-design-finding-the-right-balance/), [4](https://www.radiant.digital/article/dark-mode-vs-light-mode-which-better), [5](https://www.youtube.com/watch?v=wo-esWvx4jc\&t=20), [6](https://mondaysys.com/dark-mode-vs-light-mode-insights-from-a-b-testing-user-preferences/), [7](https://www.nngroup.com/articles/dark-mode-users-issues/), [8](https://www.linkedin.com/pulse/your-eyes-thank-you-science-stats-behind-dark-modes-popularity-yadav-yy7hc), [9](https://www.reddit.com/r/GenZ/comments/1dhxzv8/controversial%5Fhow%5Fmany%5Fof%5Fguys%5Fuse%5Flight%5Fmode/)] | Light Mode                                         | Dark Mode                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------------------- |
| **Best Environment**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Well-lit rooms or outdoors in the sun.             | Dimly lit rooms or nighttime.                                   |
| **Main Benefit**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Better legibility and reading speed for long text. | Reduces eye strain and glare in the dark.                       |
| **Battery Life**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | No significant impact on battery.                  | Can save **39–63% battery** on OLED screens at high brightness. |
| **Accessibility**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Often better for those with astigmatism.           | Essential for those with photophobia or cataracts.              |

Are you trying to decide which mode to use for a **specific app** or **web project** you're working on?

- [link](https://www.nngroup.com/articles/dark-mode-users-issues/)\
  Dark Mode: How Users Think About It and Issues to Avoid\
  Aug 27, 2023 — Why People Say They Use Dark Mode \* In a recent survey of 115 mobile users asking what mode they generally have their mobile devic...\
  Nielsen Norman Group
- [link](https://www.reddit.com/r/GenZ/comments/1dhxzv8/controversial%5Fhow%5Fmany%5Fof%5Fguys%5Fuse%5Flight%5Fmode/)\
  Controversial: How many of guys use light mode? : r/GenZ - Reddit\
  Jun 18, 2024 — I think u stumped them. They are about to get a hang man! ... I too am one of the 12 people who prefer light mode. ... Me too :) I...\
  Reddit·r/GenZ
- [link](https://www.linkedin.com/posts/dancrask%5Fhow-many-people-use-dark-mode-in-2023-key-activity-7079827467842060288-Uir-)\
  How Many People Use Dark Mode in 2023? (Key Statistics)\
  Jun 28, 2023 — How Many People Use Dark Mode in 2023? (Key Statistics) - The Small Business Blog | Dan Crask. Dan Crask's Post. Dan Crask. Brand ...\
  LinkedIn·Dan Crask

Show all
