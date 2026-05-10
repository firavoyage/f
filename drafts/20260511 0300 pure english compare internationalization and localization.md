#

compare internationalization and localization

Internationalization and localization are two distinct but complementary stages of preparing a product for a global audience. While <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>internationalization</strong> provides the flexible foundation and architecture, <strong>localization</strong> is the actual customization of that product for a specific target market</mark>. \[[1](https://www.getblend.com/blog/product-internationalization-vs-localization/), [2](https://modilingua.com/l10n-and-t9n/guides/basics/localization-vs-internationalization/), [3](https://simplelocalize.io/blog/posts/localization-vs-internationalization-vs-translation/), [4](https://lokalise.com/blog/internationalization-vs-localization/), [5](https://www.getblend.com/blog/localization-vs-internationalization/)]

Key Differences

| Feature \[[1](https://lokalise.com/blog/internationalization-vs-localization/), [2](https://en.wikipedia.org/wiki/Internationalization%5Fand%5Flocalization), [3](https://poeditor.com/blog/localization-vs-internationalization/), [4](https://www.lionbridge.com/blog/translation-localization/localization-globalization-internationalization-whats-the-difference/), [5](https://www.acclaro.com/blog/localization-vs-internationalization-different-processes-that-fuel-global-growth/), [6](https://hygraph.com/blog/localization-vs-internationalization), [7](https://localizely.com/blog/internationalization-vs-localization/), [8](https://www.smartling.com/blog/localization-101), [9](https://medium.com/@roja.j/internationalization-vs-934a6b993f10), [10](https://www.localizedirect.com/posts/translation-vs-localization-vs-internationalization-whats-the-difference), [11](https://www.frontitude.com/glossary-posts/whats-the-difference-between-internationalization-and-localization), [12](https://www.gmrtranscription.com/blog/localization-and-internationalization), [13](https://www.daytranslations.com/blog/i18n-vs-l10n/), [14](https://simplelocalize.io/blog/posts/localization-vs-internationalization-vs-translation/)] | Internationalization (i18n)                                                                             | Localization (l10n)                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **Primary Goal**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Designing a product to be **adaptable** to any language or culture without further engineering changes. | **Tailoring** the product to feel native and relatable to a specific target market. |
| **Focus**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Infrastructure, system design, and engineering.                                                         | Content, user experience, and cultural nuance.                                      |
| **Timeline**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Typically occurs during the initial **design and development** phase.                                   | Occurs **after** internationalization, once a specific target market is identified. |
| **Frequency**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ideally performed **once**.                                                                             | Performed **multiple times**—once for every new locale supported.                   |

Core Components

- **Internationalization (i18n)**:
  - **Unicode Support**: Enabling the system to handle different character encodings and scripts.
  - **Externalizing Strings**: Moving all translatable text out of the code and into resource files.
  - **Flexible UI**: Designing layouts that can handle variable-length text (e.g., German words are often longer than English).
  - **Support for RTL**: Building the capability to display layouts right-to-left for languages like Arabic or Hebrew.
- **Localization (l10n)**:
  - **Translation**: Converting text into the local language, including regional dialects.
  - **Formatting**: Adapting date/time formats, currencies, and units of measurement.
  - **Cultural Content**: Swapping icons, colors, or images to avoid cultural taboos and improve resonance.
  - **Legal/Regulatory**: Ensuring compliance with local laws and business practices. \[[1](https://www.w3.org/International/questions/qa-i18n), [2](https://www.youtube.com/watch?v=CIwNjfTlmgA), [3](https://i18nexus.com/posts/internationalization-vs-localization), [4](https://www.onesky.ai/blog/localization-vs-internationalization), [5](https://www.youtube.com/shorts/Zo1f8PKFFW8), [6](https://www.gmrtranscription.com/blog/localization-and-internationalization), [7](https://simplelocalize.io/blog/posts/localization-vs-internationalization-vs-translation/), [8](https://www.frontitude.com/glossary-posts/whats-the-difference-between-internationalization-and-localization), [9](https://www.lionbridge.com/blog/translation-localization/localization-globalization-internationalization-whats-the-difference/), [10](https://poeditor.com/blog/localization-vs-internationalization/), [11](https://modilingua.com/l10n-and-t9n/guides/basics/localization-vs-internationalization/)]

A Real-World Example

**Netflix** is a primary example of successful **internationalization** because its platform was built from the start to support many different languages, time zones, and regional formats without needing to rewrite the code for every new country. Its **localization** efforts are seen when you browse: the specific movie titles, descriptions, and even the "top 10" lists are tailored specifically to the country you are in. \[[1](https://localizejs.com/articles/what-is-internationalization-an-essential-guide), [2](https://www.lionbridge.com/blog/translation-localization/localization-globalization-internationalization-whats-the-difference/)]

Would you like to see a **checklist** for internationalizing a software project or a list of common **localization pitfalls** to avoid?

- [link](https://lokalise.com/blog/internationalization-vs-localization/)\
  Internationalization vs. localization (i18n vs l10n) - Lokalise\
  Sep 23, 2024 — While Internationalization and localization are often used interchangeably, they actually refer to two different processes. Intern...\
  Lokalise
- [link](https://www.lionbridge.com/blog/translation-localization/localization-globalization-internationalization-whats-the-difference/)\
  Localization, Globalization, Internationalization: What's the ...\
  May 1, 2021 — What is Localization? Localization is the process of adapting a product to a specific target market. This usually happens after in...\
  Lionbridge
- [link](https://en.wikipedia.org/wiki/Internationalization%5Fand%5Flocalization)\
  Internationalization and localization - Wikipedia\
  Internationalization is the process of designing a software application so that it can be adapted to various languages and regions...\
  Wikipedia

Show all

example

Think of it like a **car manufacturer** designing a vehicle for the global market:

1\. Internationalization (The Engineering)

The engineers design the car with a flexible dashboard that can easily be swapped from the left side to the right side. They ensure the odometer can display both miles and kilometers, and that the engine can handle different types of fuel found worldwide.

- **Result:** One car design that _can_ go anywhere.

2\. Localization (The Customization)

When the car is actually sold in **Japan**, the company installs the steering wheel on the right, sets the GPS to Japanese, and updates the emission sensors to meet local Tokyo regulations. They might even change the name of the car if the original name sounds like a swear word in Japanese.

- **Result:** A car that feels like it was made specifically _for_ Japan.

***

Software Example: A "Sign Up" Button

- **Internationalization:** The developer writes code so the button's width is "auto-scaling" and the text is pulled from a separate file rather than being hard-coded as "Sign Up."
- **Localization:** A translator provides the word **"S'inscrire"** for French users. Because the button was internationalized, it automatically stretches to fit the longer French word without breaking the layout.

Are you looking for an example in a specific field, like **software development**, **marketing**, or **e-commerce**?

#

how to support rtl in internationalization

11:53 AM

Supporting right-to-left (RTL) languages like Arabic, Hebrew, and Urdu requires a "mirrored" approach where the entire layout—not just the text—is flipped horizontally. \[[1](https://www.youtube.com/watch?v=RfNZVn8j5ng\&t=37), [2](https://www.languageintelligence.com/post/mastering-rtl-localization-essential-factors-for-seamless-language-adaptation)]

1\. Global Page Configuration

The foundation for RTL support is telling the browser or app environment how to handle the content direction: \[[1](https://dev.to/%5Festheradebayo/how-to-enable-right-to-left-rtl-support-using-chakra-ui-2apj), [2](https://wpml.org/documentation/theme-compatibility/build-rtl-wordpress-themes/), [3](https://simplelocalize.io/blog/posts/rtl-design-guide-developers/)]

- **HTML Attribute**: Use `dir="rtl"` on the or tag. This automatically flips the default browser behavior for text flow and block placement.
- **Language Code**: Always include the `lang` attribute (e.g., ) to help browsers and screen readers apply correct typography and voice processing. \[[1](https://www.patternfly.org/developer-resources/right-to-left-handbook), [2](https://medium.com/@krishnakiran1992/right-to-left-styling-for-web-apps-b4573d8979db), [3](https://www.onesky.ai/blog/right-to-left-rtl-localization-what-you-need-to-know)]

2\. CSS Logical Properties

Avoid hardcoding physical directions like "left" and "right." Use **CSS logical properties** that adapt automatically based on the reading direction: \[[1](https://simplelocalize.io/blog/posts/rtl-design-guide-developers/), [2](https://forum.exercism.org/t/dealing-with-rtl-languages/18337), [3](https://itnext.io/the-definitive-guide-on-localization-and-internationalization-in-outsystems-including-arabic-rtl-77ab6e59a954), [4](https://lokalise.com/blog/react-i18n-intl/), [5](https://medium.com/trendyol-tech/implementing-rtl-support-in-baklava-a-deep-dive-23a2d4d95674)]

- **Margins/Padding**: Replace `margin-left` with `margin-inline-start` and `padding-right` with `padding-inline-end`.
- **Alignment**: Use `text-align: start` instead of `left` so it anchors to the right in RTL and the left in LTR.
- **Flexbox/Grid**: These layouts natively support directionality; `justify-content: flex-start` will align items to the right in an RTL container. \[[1](https://medium.com/@danielsternlicht/adding-localization-i18n-g11n-to-a-react-native-project-with-rtl-support-223f39a8e6f2), [2](https://medium.com/@vikashwebb/react-native-apps-support-rtl-right-to-left-7a9602783542), [3](https://www.smartling.com/blog/translate-rtl-languages), [4](https://forum.exercism.org/t/dealing-with-rtl-languages/18337), [5](https://exadel.com/news/localization-testing-tips-and-tricks-for-rtl-language-websites-and-apps)]

3\. Visual Element Mirroring

Most of your interface should be a mirror image of the LTR version, but some elements should remain unchanged: \[[1](https://www.onesky.ai/blog/right-to-left-rtl-localization-what-you-need-to-know), [2](https://www.youtube.com/watch?v=UL7liLVjp3Y)]

- **Flip these**: Back/forward arrows, progress bars (loading right-to-left), and icons that indicate motion or direction (like a bicycle or plane icon).
- **Don't flip these**: Media controls (play, pause, stop), clocks, and universally recognized icons like a checkmark or a gear for settings.
- **Charts and Graphs**: The Y-axis should typically move to the right side, and the X-axis should progress from right to left. \[[1](https://www.youtube.com/watch?v=RfNZVn8j5ng\&t=37), [2](https://www.youtube.com/watch?v=UL7liLVjp3Y), [3](https://www.onesky.ai/blog/right-to-left-rtl-localization-what-you-need-to-know)]

4\. Handling Bidirectional (BiDi) Text

RTL languages often contain LTR fragments, such as phone numbers, Latin brand names, or English email addresses. \[[1](https://help.smartling.com/hc/en-us/articles/1260802028830-Right-to-left-RTL-Languages), [2](https://m2.material.io/design/usability/bidirectionality.html), [3](https://poeditor.com/blog/rtl-localization/), [4](https://ubertesters.com/blog/best-localization-testing-practices-for-right-to-left-rtl-languages/), [5](https://exadel.com/news/localization-testing-tips-and-tricks-for-rtl-language-websites-and-apps)]

- **Numbers**: Standard digits (1, 2, 3) and phone numbers should almost always remain LTR to be readable.
- **Unicode Isolation**: Use the tag or Unicode control characters (like `U+2066` for LRI) to isolate LTR snippets within RTL paragraphs, preventing punctuation from jumping to the wrong side. \[[1](https://react-aria.adobe.com/blog/rtl-date-time), [2](https://exadel.com/news/localization-testing-tips-and-tricks-for-rtl-language-websites-and-apps), [3](https://www.youtube.com/watch?v=RfNZVn8j5ng\&t=37), [4](https://www.onesky.ai/blog/right-to-left-rtl-localization-what-you-need-to-know)]

5\. Typography and Form Fields

- **Fonts**: Choose fonts that explicitly support RTL scripts to avoid "tofu" (missing characters) or distorted rendering.
- **Input Fields**: Ensure the cursor starts on the right side of input fields by default. However, for fields like passwords or phone numbers, you may need to force them back to LTR for better usability. \[[1](https://www.languageintelligence.com/post/mastering-rtl-localization-essential-factors-for-seamless-language-adaptation), [2](https://www.youtube.com/watch?v=UL7liLVjp3Y), [3](https://www.smartling.com/blog/translate-rtl-languages)]

Would you like to see a **code example** for implementing these logical properties in a specific framework like React or Tailwind?

- [link](https://medium.com/@danielsternlicht/adding-localization-i18n-g11n-to-a-react-native-project-with-rtl-support-223f39a8e6f2)\
  How to add localization (i18n, g11n) and RTL support to a React ...\
  RTL (right-to-left) support If you want to add RTL support as well, here are few things to keep in mind while developing a React N...\
  Medium
- [link](https://medium.com/@vikashwebb/react-native-apps-support-rtl-right-to-left-7a9602783542)\
  React Native Apps support RTL (right to left). | by Vikash Kumar\
  Use Bidirectional Styles React Native components like View , Text , and ScrollView natively support RTL. However, custom styles of...\
  Medium
- [link](https://www.patternfly.org/developer-resources/right-to-left-handbook)\
  PatternFly right-to-left handbook\
  To allow for internationalization of your product's content, it is important to implement bidirectional language support by develo...\
  PatternFly

Show all

seems a lot. rather no support it.

11:55 AM

It’s a common reaction! Many teams feel that way because it looks like you have to rebuild everything twice. However, if you're building for the web today, you can actually get about **90% of the way there** with almost zero extra effort by using one simple rule:

The "Logical" Shortcut

Instead of thinking about "RTL support," just stop using the words "left" and "right" in your code. Modern CSS handles the heavy lifting for you:

- **Old way (Hard):** `padding-left: 20px;` (Stays on the left, breaks in RTL).
- **New way (Automatic):** `padding-inline-start: 20px;` (Moves to the right automatically when you toggle `dir="rtl"`).

Why it might be worth it (The "Low Effort" Path)

If you aren't ready for a full rollout, you can do "Passive Support":

1. **Set the Direction:** Just adding lets the browser try to guess the direction based on the first character.
2. **Use a Framework:** If you use **Tailwind CSS** or **Bootstrap 5**, they have RTL support baked in. You just change a class, and the layout flips itself.
3. **The "No-Go" Zones:** You can ignore mirroring icons or complex charts and just focus on making sure the text isn't cut off and the scrollbars are on the correct side.

The Risk of Skipping

If you skip it entirely, your app will be **unusable** for over 300 million people. Text will overlap icons, punctuation will end up at the start of sentences, and buttons might be impossible to click.

Are you using a specific **CSS framework** or **library**? I can tell you if it already has an "Easy Mode" for RTL so you don't have to do it manually.

#

how does wikipedia support rtl

[Wikipedia](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia%5FSignpost/2011-05-02/Technology%5Freport) supports **Right-to-Left (RTL)** languages, such as Arabic, Hebrew, and Persian, primarily <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">through the underlying <span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://www.mediawiki.org/wiki/Directionality_support" style="margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">MediaWiki software</a></span></mark>. This support ensures that both the interface and the content are properly oriented for users of these languages. \[[1](https://www.mediawiki.org/wiki/Directionality%5Fsupport), [2](https://www.mediawiki.org/wiki/Extension:RevisionSlider/Developing%5Fa%5FRTL-accessible%5Ffeature%5Fin%5FMediaWiki%5F-%5Fwhat%5Fwe%27ve%5Flearned%5Fwhile%5Fcreating%5Fthe%5FRevisionSlider), [3](https://addons.mozilla.org/en-GB/firefox/addon/rtl-support-for-wiki-jira/), [4](https://www.youtube.com/watch?v=qmLdHuFRGgM)]

Core Support Mechanisms

- **Automatic Interface Flipping**: MediaWiki uses CSSJanus to automatically "flip" the entire user interface when an RTL language is selected. This mirrors the layout, moving elements like the sidebar from the left to the right side of the screen.
- **Bidirectional (BiDi) Text**: Wikipedia handles "mixed" text (e.g., an Arabic sentence containing an English name) using Unicode bidirectional algorithms. This allows LTR and RTL scripts to coexist on the same page while maintaining their respective reading orders.
- **Directionality Parameters**: Editors can use specific HTML/CSS tags like or to manually force text direction for specific sections or citations.
- **User Preferences**: If a user sets their global language preference to an RTL language in their [account settings](https://www.reddit.com/r/selfhosted/comments/1abqlqo/knowledge%5Fbase%5Fsoftware%5Fwith%5Frtl%5Fsupport%5Fand/), the editor defaults to RTL mode, providing specific direction controls for easier typing. \[[1](https://en.wikipedia.org/wiki/Bidirectional%5Ftext), [2](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia%5FSignpost/2011-05-02/Technology%5Freport), [3](https://meta.wikimedia.org/wiki/Requests%5Ffor%5Fcomment/Displaying%5FLTR%5Fcitations%5Fon%5FRTL%5Fwikis), [4](https://stackoverflow.com/questions/35113972/gitlab-how-to-write-rtl-in-gitlabs-wiki), [5](https://www.reddit.com/r/selfhosted/comments/1abqlqo/knowledge%5Fbase%5Fsoftware%5Fwith%5Frtl%5Fsupport%5Fand/), [6](https://www.mediawiki.org/wiki/Directionality%5Fsupport), [7](https://www.mediawiki.org/wiki/Extension:RevisionSlider/Developing%5Fa%5FRTL-accessible%5Ffeature%5Fin%5FMediaWiki%5F-%5Fwhat%5Fwe%27ve%5Flearned%5Fwhile%5Fcreating%5Fthe%5FRevisionSlider)]

Active RTL Projects

There are currently at least **16 dedicated RTL Wikipedias**. Some of the most active include: \[[1](https://www.youtube.com/watch?v=qmLdHuFRGgM)]

- [Arabic Wikipedia](https://en.wikipedia.org/wiki/RTL)
- Persian Wikipedia
- Hebrew Wikipedia
- Urdu Wikipedia \[[1](https://www.mediawiki.org/wiki/Extension:RevisionSlider/Developing%5Fa%5FRTL-accessible%5Ffeature%5Fin%5FMediaWiki%5F-%5Fwhat%5Fwe%27ve%5Flearned%5Fwhile%5Fcreating%5Fthe%5FRevisionSlider)]

The [Wikimedia Foundation](https://wikimediafoundation.org/news/2025/11/26/how-is-wikipedia-funded/) actively seeks RTL developers to help identify and fix "glitches" that may not be apparent to those working primarily in LTR environments. \[[1](https://gramps.discourse.group/t/rtl-and-the-wiki/4122), [2](https://en.wikipedia.org/wiki/Wikipedia:Wikipedia%5FSignpost/2011-05-02/Technology%5Freport)]

Would you like to know how to **manually change** your Wikipedia interface to an RTL language?

- [link](https://en.wikipedia.org/wiki/Bidirectional%5Ftext)\
  Bidirectional text - Wikipedia\
  Early computer installations were designed only to support a single writing system, typically for left-to-right scripts based on t...\
  Wikipedia
- [link](https://www.mediawiki.org/wiki/Directionality%5Fsupport)\
  Directionality support - MediaWiki\
  Mar 21, 2026 — Thanks to ResourceLoader including CSSJanus, CSS is automatically flipped to right-to-left when the user language is RTL. This is ...\
  MediaWiki
- [link](https://stackoverflow.com/questions/35113972/gitlab-how-to-write-rtl-in-gitlabs-wiki)\
  How to write RTL in gitlab's wiki - Stack Overflow\
  Jan 31, 2016 — You can use p , div or span tag with dir=rtl , that does not make it to appear rtl but fixes mixed rtl/ltr text issue. ( e.g

متن...\
Stack Overflow

Show all

i mean as swe how to learn from

For a software engineer, Wikipedia's (MediaWiki's) RTL implementation is a masterclass in **designing for global-scale localization**. You can learn from their architecture by examining how they automate layout flipping, handle bidirectional text, and maintain a single source of truth for their styles. \[[1](https://medium.com/@nderdweik/from-left-to-right-to-right-to-left-frontend-best-practices-1a21aa2ce1d0)]

1\. Automated Layout Flipping (CSSJanus) \[[1](https://www.mediawiki.org/wiki/Directionality%5Fsupport)]

MediaWiki avoids writing two separate CSS files for LTR and RTL. Instead, they use a tool called [CSSJanus](https://www.mediawiki.org/wiki/CSSJanus). \[[1](https://www.mediawiki.org/wiki/Directionality%5Fsupport), [2](https://www.mediawiki.org/wiki/CSSJanus), [3](https://medium.com/@nderdweik/from-left-to-right-to-right-to-left-frontend-best-practices-1a21aa2ce1d0)]

- **The Concept**: It automatically transforms "left" to "right," mirrors margins, and flips background positions.
- **SWE Lesson**: Use **Logical Properties** (e.g., `margin-inline-start` instead of `margin-left`) or automated build tools to handle directionality. This reduces maintenance overhead and prevents "directionality bugs" when features are updated. \[[1](https://www.mediawiki.org/wiki/Design%5Fbest%5Fpractices), [2](https://gitlab-replica-b.wikimedia.org/dancy/mediawiki-core/-/blob/1.23.8/maintenance/cssjanus/README), [3](https://medium.com/@nderdweik/from-left-to-right-to-right-to-left-frontend-best-practices-1a21aa2ce1d0), [4](https://www.mediawiki.org/wiki/Directionality%5Fsupport), [5](https://www.mediawiki.org/wiki/Extension:RevisionSlider/Developing%5Fa%5FRTL-accessible%5Ffeature%5Fin%5FMediaWiki%5F-%5Fwhat%5Fwe%27ve%5Flearned%5Fwhile%5Fcreating%5Fthe%5FRevisionSlider)]

2\. The "ResourceLoader" Architecture

MediaWiki’s ResourceLoader is the delivery system for all CSS and JS assets.

- **How it Works**: It detects the user's language preference and dynamically serves the flipped CSS.
- **SWE Lesson**: Infrastructure should handle localization at the **delivery layer**. By the time the browser receives the CSS, it is already "direction-aware," which prevents the "flash of unmirrored content" (FOUMC). \[[1](https://www.mediawiki.org/wiki/Manual:How%5Fto%5Fmake%5Fa%5FMediaWiki%5Fskin), [2](https://www.mediawiki.org/wiki/Directionality%5Fsupport)]

3\. Handling Mixed Directionality (BiDi)

In an RTL Wikipedia article, you'll often see LTR elements (like a URL or an English book title) embedded in Arabic text. \[[1](https://opensource.com/life/16/3/twisted-road-right-left-language-support), [2](https://medium.com/@ananyaad1707/designing-for-the-right-to-left-rtl-world-f755e0bd90ed)]

- **Implementation**: MediaWiki uses [Unicode Bidirectional algorithms](https://www.mediawiki.org/wiki/Directionality%5Fsupport) and specific HTML attributes like `dir="auto"` or `dir="rtl"` on containers.
- **SWE Lesson**: Never assume a page is 100% one direction. Build your components to be **direction-agnostic** containers that can host nested content of either orientation without breaking layout. \[[1](https://www.mediawiki.org/wiki/Manual:How%5Fto%5Fmake%5Fa%5FMediaWiki%5Fskin), [2](https://stackoverflow.com/questions/35113972/gitlab-how-to-write-rtl-in-gitlabs-wiki), [3](https://medium.com/@nderdweik/from-left-to-right-to-right-to-left-frontend-best-practices-1a21aa2ce1d0), [4](https://www.mediawiki.org/wiki/Best%5Fpractices%5Ffor%5Fextensions)]

4\. Iconography and Visual Assets

Not every image should be flipped. For example, a "Search" icon (magnifying glass) stays the same, but a "Back" arrow must point the other way in RTL. \[[1](https://www.mediawiki.org/wiki/Manual:How%5Fto%5Fmake%5Fa%5FMediaWiki%5Fskin), [2](https://exadel.com/news/localization-testing-tips-and-tricks-for-rtl-language-websites-and-apps)]

- **Mechanism**: Use `/* @noflip */` CSS comments to signal to build tools that a specific rule should not be mirrored.
- **SWE Lesson**: Establish a **metadata strategy** for your assets. Categorize icons as "directional" or "static" early in your design system to avoid manual overrides later. \[[1](https://www.mediawiki.org/wiki/Design%5Fbest%5Fpractices)]

5\. Developer Workflow Best Practices

MediaWiki's development guides emphasize specific habits for RTL support:

- **Testing**: Engineers can append `?uselang=ar` (Arabic) or `?uselang=he` (Hebrew) to any URL to instantly see the flipped UI for debugging.
- **Localization Functions**: Developers MUST use standard functions (like `wfMessage()`) rather than hardcoding strings, ensuring that even UI labels are ready for RTL contexts. \[[1](https://www.mediawiki.org/wiki/Design%5Fbest%5Fpractices), [2](https://www.mediawiki.org/wiki/Best%5Fpractices%5Ffor%5Fextensions)]

To see this in action, you can explore the MediaWiki core repository on GitHub or check out the MediaWiki Directionality Support documentation for a deeper technical dive.

Would you like to explore a specific **code example** of how CSSJanus handles complex CSS rules?

- [link](https://opensource.com/life/16/3/twisted-road-right-left-language-support)\
  The twisted road through right-to-left language support\
  Mar 9, 2016 — The issues come up when we have to mix languages and directions, or use RTL language inside a block that is meant for LTR. This ha...\
  Opensource.com
- [link](https://stackoverflow.com/questions/35113972/gitlab-how-to-write-rtl-in-gitlabs-wiki)\
  How to write RTL in gitlab's wiki - Stack Overflow\
  Jan 31, 2016 — You can use p , div or span tag with dir=rtl , that does not make it to appear rtl but fixes mixed rtl/ltr text issue. ( e.g

متن...\
Stack Overflow

- [link](https://medium.com/@nderdweik/from-left-to-right-to-right-to-left-frontend-best-practices-1a21aa2ce1d0)\
  From Left-to-Right to Right-to-Left: Frontend Best Practices\
  Sep 24, 2025 — Why Logical Properties Win. The beauty of logical properties lies in their simplicity and maintainability. Instead of writing sepa...\
  Medium·Nader Dweik

Show all