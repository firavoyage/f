# . kde opinionated choices

Yes, the KDE "Text and Labels" guide makes several **opinionated design choices** to enforce consistency across a highly fragmented, open-source ecosystem. Instead of leaving language up to individual developers, it takes strict stances on how text must look and function. [link](https://discuss.kde.org/t/does-kde-need-to-hire-professional-designers-ui-looks-outdated/39966)

### 1. Strict Capitalization Rules

Unlike systems that default entirely to sentence case, KDE explicitly splits its rules based on the UI element's location:

- **Title Case Only**: Mandatory for headers, menu items, action buttons, tabs, and menu titles (e.g., _Save File As_, _Network Settings_).
- **Sentence Case Only**: Mandatory for checkboxes, radio buttons, text fields, group box labels, tooltips, and long instructional blocks.

### 2. The Ellipsis (`...`) Means "More Input Needed"

KDE is highly specific about when to use trailing dots.

- **Allowed**: Only when an action requires the user to provide more data before completing (e.g., `Print...` because it opens a dialog box to choose a printer).
- **Forbidden**: When an action executes immediately (e.g., `Delete` should never have an ellipsis, even if it brings up a quick "Are you sure?" confirmation).

### 3. Absolute Ban on Technical Jargon

Because KDE apps are built by engineers, the guide strictly forbids the use of programming terms in the user interface. [link](https://discuss.kde.org/t/does-kde-need-to-hire-professional-designers-ui-looks-outdated/39966)

- It forces writers to translate technical processes into consumer-friendly language (e.g., choosing "Secure connection" instead of referencing specific cryptographic protocols or backend variables).

### 4. No Punctuation in Inline Labels

The guide strictly mandates removing colons (`:`) from the end of form field labels. The layout structure alone must imply the connection between a label and its input box, eliminating visual clutter.

### 5. Tone Is "Neutral and Invisible"

KDE rejects the modern trend of quirky, overly conversational AI or brand personas.

- The guide commands a completely **objective, matter-of-fact tone**.
- It forbids artificial friendliness (like "Oops! Something went wrong") and demands precise, non-blaming error descriptions instead.

# . content design format selection ux writing breakdown

## what does content design include

11:39 AM

<mark><strong>Content design includes using data and evidence to determine the most effective format and structure for information so users can complete tasks easily</strong></mark>**.** While it relies heavily on language, it is a holistic problem-solving discipline rather than just a writing role. It ensures that information is delivered to the user at the exact moment they need it, in a format that makes sense. [link](https://uxcontent.com/content-design/)

### Core Pillars of Content Design

- **User Research:** Analyzing user feedback, search analytics, and testing to understand vocabulary and behaviors.
- **Information Architecture:** Mapping out sitemaps, structural hierarchies, navigation flows, and labels across an application.
- **Format Selection:** Determining if text, a calculator, a chart, or video is best to solve a user problem.
- **Interface Text (UX Writing):** Crafting concise microcopy like button labels, onboarding screens, tooltips, and clear error messages.
- **Systems & Governance:** Building scalable style guides, terminology frameworks, content heuristics, and localized content systems. [link](https://uxcontent.com/content-design/)

### Content Design vs. Related Fields

| Discipline           | Primary Focus                                | Key Deliverables                                |
| -------------------- | -------------------------------------------- | ----------------------------------------------- |
| **Content Design**   | How information solves a user problem        | User journeys, wireframe logic, format strategy |
| **UX Writing**       | Microcopy inside the interface panels        | Button text, form field prompts, error states   |
| **Content Strategy** | High-level business governance and timelines | Audits, content calendars, channel taxonomies   |
| **Copywriting**      | Persuasion, conversion, and driving sales    | Ads, landing pages, marketing email campaigns   |

To look deeper into standard frameworks, you can review the foundation guides established by [Sarah Winters via Content Design London](https://contentdesign.london/blog/what-is-content-design) who originally pioneered the discipline. [link](https://contentdesign.london/blog/what-is-content-design)

## what does format selection include

<mark><strong><span>Format selection includes choosing the most effective asset type to present information based on data, user needs, and context.</span></strong></mark> Content designers evaluate how people process information to decide whether text, data visualization, or an interactive tool will best solve a user problem. It moves the focus away from "how do we write this?" to "what is the best medium for this?"

### Key Elements of Format Selection

- **User Intent Assessment:** Analyzing if a user needs to compare, calculate, learn, or decide.
- **Context Mapping:** Matching the format to the user's emotional state, device, and physical environment.
- **Accessibility Evaluation:** Ensuring the chosen format complies with WCAG guidelines for screen readers and assistive tech.
- **Cognitive Load Minimization:** Selecting formats that reduce mental effort, such as using a bulleted list instead of a heavy paragraph.
- **Asset Auditing:** Deciding between static formats like text and dynamic formats like interactive tools or audio.

### Common Formats and When to Use Them

- **Interactive Tools:** Calculators, wizards, and decision trees for complex, personalized calculations.
- **Data Visualizations:** Charts, graphs, and timelines for patterns, trends, or numerical comparisons.
- **Structured Text:** Bulleted lists, tables, and step-by-step guides for instructions or reference data.
- **Visual Media:** Videos, diagrams, and illustrations for spatial layouts or emotional storytelling.
- **Progressive Disclosure:** Accordions and tooltips to hide deep technical details until requested.

## what does ux writing include

<mark><strong><span>UX writing includes crafting the text users see and interact with inside a digital product's user interface.</span></strong></mark> Its primary goal is to guide users through an app, website, or software smoothly and intuitively. While content design looks at the broader strategy and format, UX writing focuses heavily on the specific language, microcopy, and tone used at every touchpoint of the user journey.

### Core Deliverables of UX Writing

- **Button Copy (CTAs):** Writing clear, action-oriented text for buttons like "Get Started" or "Save Draft."
- **Onboarding Flows:** Crafting welcome screens, quick tutorials, and setup guides for new users.
- **Error Messages:** Explaining exactly what went wrong, why it happened, and how to fix it without blame.
- **Form Labels & Placeholders:** Directing users on what information to enter in input fields and how to format it.
- **Tooltips & Helper Text:** Providing contextual clues and hints when a feature might confuse a user.
- **Success states:** Writing encouraging confirmation messages when a user finishes a task, like completing a purchase.
- **Empty States:** Guiding users on what step to take next when a screen has no data yet.

### Key Principles of Great UX Writing

- **Clarity First:** Prioritizing simple, unambiguous words over clever or jargon-filled language.
- **Conciseness:** Using the fewest words possible to deliver information without losing meaning.
- **Consistency:** Adhering strictly to established product glossaries, punctuation rules, and terms across screens.
- **Inclusivity:** Ensuring language is accessible, gender-neutral, and easily translated into other languages.
- **Tone Modulation:** Adjusting the emotional resonance (e.g., serious during a security breach, celebratory during a win).

# . background: wikipedia

wikipedia:

```
Color

Automatic

Light

Dark

Report an issue with dark mode
```

i guess it should be "system" instead of "automatic"

also, it feels... <!-- Report an issue with dark mode -->

idk.

that's how wikipedia works. i remember they did not change my username automatically. (for decades it even required letters to admins)

---

btw, apple shows "light dark auto (default)".

# what is it called for the work to write texts for an app

The work of writing text for an app is called <mark><strong>UX writing</strong><span> </span>(User Experience writing) or<span> </span><strong>product writing</strong></mark>.

### Key Terms to Know

- **UX Writing**: Designing the words users see when interacting with software.
- **Microcopy**: The small bits of text like buttons, error messages, and menu labels.
- **Content Design**: A broader term that includes UX writing, information architecture, and content strategy.
- **Product Copywriting**: Writing focused on guiding users through a digital product.

### Main Differences from Traditional Writing

- **UX Writing vs. Copywriting**: Copywriting attracts users to buy a product. UX writing helps users navigate the product after they open it.
- **UX Writing vs. Technical Writing**: Technical writing explains complex systems via manuals. UX writing prevents the need for manuals by making the app intuitive.

To help you explore this further, let me know if you want to know **how to become a UX writer**, what **tools** they use, or **examples of great microcopy**.

- [link](https://blog.hubspot.com/website/what-is-ux-writing)\
  What Is UX Writing?\
  May 11, 2025 — What is UX writing? UX ( user experience ) writing is the practice of creating customer-facing text and copy for user interfaces. ...\
  \
  \
  HubSpot Blog
- [link](https://baymard.com/learn/ux-writing)\
  What Is UX Writing, and What Do UX Writers Do? – Baymard\
  UX writing is the craft of creating the text that appears in digital products like websites, apps, and software. The goal of UX wr...\
  \
  \
  Baymard
- [link](https://baymard.com/learn/ux-writing)\
  What Is UX Writing, and What Do UX Writers Do? – Baymard\
  UX writing is the craft of creating the text that appears in digital products like websites, apps, and software. The goal of UX wr...\
  \
  \
  Baymard

Show all

# (?) what is it called for writing texts for an app

Writing text for an app is called <mark><strong>UX Writing</strong><span> </span>(User Experience Writing) or<span> </span><strong>Product Writing</strong></mark>.

### Key Roles and Terms

- **UX Writer**: The professional who crafts the text.
- **Microcopy**: The short words or phrases used in the interface.
- **Content Design**: The broader discipline combining text, structure, and visuals.

### Common Examples of App Text

- Buttons (e.g., "Sign Up", "Submit")
- Error messages
- Onboarding screens
- Menu labels
- Loading messages

Would you like to know how to **get started in this field**, or do you need help **writing copy for a specific app screen**?

- [link](https://blog.hubspot.com/website/what-is-ux-writing)\
  What Is UX Writing?\
  May 11, 2025 — What is UX writing? UX ( user experience ) writing is the practice of creating customer-facing text and copy for user interfaces. ...\
  \
  \
  HubSpot Blog
- [link](https://codeinstitute.net/se/blog/what-is-a-ux-writer/)\
  What is a UX Writer & What Do They Do?\
  Aug 4, 2022 — A UX ( User Experience ) designer is a professional who works on enhancing the UX ( User Experience ) of an application. The conte...\
  \
  \
  Code Institute
- [link](https://mindnow.io/en/blog/microcopy/)\
  Microcopy: Small text with a big effect\
  Sep 16, 2022 — What is microcopy? Microcopy are those texts on the user interface that are directly related to the user's actions. These texts us...\
  \
  \
  Mindnow

Show all

## terminology?

Here is the essential terminology used in UX writing and product design:

### Interface Text Elements

- **Microcopy**: Short, functional text like buttons, labels, and error messages.
- **CTA (Call to Action)**: Text instructing users to take a specific action (e.g., "Buy Now").
- **Onboarding**: Copy that guides new users through an app's features.
- **Empty State**: Text shown when a screen has no content yet (e.g., "No messages here").
- **Toast / Snackbar**: Brief, temporary pop-up messages confirming an action.
- **Tooltip**: Small text boxes appearing when hovering or tapping an item for help.

### Design and Strategy Terms

- **Content Design**: Designing end-to-end user experiences using words, space, and visuals.
- **Voice and Tone**: Voice is the permanent brand personality; tone adjusts based on user emotion.
- **Localization (L10n)**: Adapting copy for different languages, cultures, and regions.
- **Accessibility (A11y)**: Writing clear copy for screen readers and users with disabilities.
- **Information Architecture (IA)**: Organizing and structuring app content logically.

### UX Writing Mechanics

- **Scannability**: Formatting text so users can read it quickly without deep focus.
- **Cognitive Load**: The mental effort required by a user to understand an interface.
- **Progressive Disclosure**: Showing only necessary information upfront to avoid overwhelming users.

Are you looking to **create a voice chart** for an app, or do you need a **glossary for a specific project**?

## is it called terminology

<mark><span>Yes, it is called<span> </span></span><strong>terminology</strong></mark>.

More specifically, within the tech and design industry, it is usually referred to as **UX vocabulary**, **product copy nomenclature**, or **UX writing terms**.

If you are looking to build a dictionary of these words for your team, the professional deliverables are called:

- **Glossary**: A list of defined terms used within your specific app.
- **Style Guide**: Rules on how to write and use those terms.

Are you building a **glossary for your app development team**, or are you **studying for a UX role**?

- [link](https://www.star-ts.com/translation-faq/what-is-terminology/)\
  What is terminology? - STAR Translation\
  According to the Oxford Dictionary, terminology is 'the body of terms used with a particular technical application in a subject of...\
  \
  \
  STAR Translation Services

## is ux writing called terminology

<mark><span>No, UX writing is not called terminology</span></mark>.

**UX writing** is the actual _action_ or _profession_ of writing the words. **Terminology** is just the _system of words and terms_ used within that profession.

To help clarify the difference:

- **UX Writing** is the job (like "cooking").
- **UX Terminology** is the vocabulary used on the job (like "braising," "sautéing," or "julienne").

If you want to dive deeper, I can explain the **day-to-day tasks of a UX writer** or show you **examples of good vs. bad UX writing**. Which one would you prefer?

- [link](https://uxcel.com/glossary/ux-writing)\
  What is UX Writing?\
  UX Writing What is UX writing? UX writing is the practice of crafting the words users encounter inside a digital product. How does...\
  \
  \
  Uxcel
- [link](https://product.hubspot.com/blog/what-do-ux-writers-do-at-hubspot)\
  What do UX Writers do at HubSpot?\
  Apr 10, 2018 — What do UX Writers do at HubSpot ( HubSpot, Inc ) ? User Experience (UX) teams have existed at software companies for a long time.\
  \
  \
  HubSpot
- [link](https://www.hyundaimotorgroup.com/en/story/CONT0000000000177403)\
  The Art of UX Writing for Car Infotainment Systems\
  May 23, 2025 — Q. Please introduce us to the concept of UX writing. Dong-Hyun Lim, Senior Research Engineer | UX writing refers to the writing an...\
  \
  \
  Hyundai Motor Group

Show all

## what can ux writing be called

UX writing can be called <mark><strong>Product Writing</strong>,<span> </span><strong>Content Design</strong>, or<span> </span><strong>UX Content Strategy</strong></mark>.

The exact title changes depending on the tech company, country, and the scope of the job.

### Common Alternative Names

- **Content Design**: The most common modern title used by Meta, Shopify, and Amazon.
- **Product Writing**: Often used by companies to emphasize writing for digital products rather than marketing.
- **UX Content Strategy**: Focuses more on the high-level planning and governance of the app's text.
- **UI Writing (User Interface Writing)**: An older, less common term focusing strictly on user interface elements.
- **Digital Copywriting**: Sometimes used by smaller companies, though copywriting usually implies sales and marketing.

### Subtle Differences Between the Titles

- **UX Writer**: Focuses primarily on writing the interface copy (microcopy).
- **Content Designer**: Focuses on solving user problems using words, data layout, and information flow.
- **Content Strategist**: Focuses on systems, editorial guidelines, and content lifecycles.

Would you like to know which title is **best to use on a resume**, or are you looking to hire for a **specific type of role**?

- [link](https://uxplanet.org/23-essential-ux-writing-terms-for-2023-916bbc8083ee)\
  23+ essential UX writing terms for 2023 | by Pete Armitage\
  Jan 2, 2023 — Content Strategy Kristina Halvorson provides a watertight definition of content strategy: “Content strategy plans for the creation...\
  \
  \
  UX Planet
- [link](https://econsultancy.com/what-is-a-ux-writer-and-how-does-it-differ-from-a-content-designer/)\
  What is a UX writer and how does it differ from a content designer?\
  Aug 14, 2020 — Broadly speaking, 'content designer' and 'UX writer' are two different names for the same role. UX writing is sometimes thought to...\
  \
  \
  Econsultancy
- [link](https://www.domestika.org/en/blog/5377-what-is-a-ux-writer)\
  What Is a UX Writer?\
  Oct 23, 2020 — Role of the UX ( user experience ) writer This role's name is relatively new, but the work they do has been around for many years,\
  \
  \
  Domestika

Show all

## is it called "文案" in zhcn

Yes, it is often broadly called **文案** (Wén'àn) in Simplified Chinese (ZH-CN), but tech professionals usually use more specific terms to separate it from advertising copywriting. [link](https://thebuddypost.hkbu.edu.hk/tc/story/apr-2022-people-discovery/)

If you are speaking to a Chinese tech team, here is how the terms are used:

### 1. UX Writing / Product Writing

- **用户体验文案** (Yònghù tǐyàn wén'àn) — The literal and most accurate translation for "UX Writing". [link](https://thebuddypost.hkbu.edu.hk/tc/story/apr-2022-people-discovery/)
- **产品文案** (Chǎnpǐn wén'àn) — "Product Copy." Very common in daily tech office talk.
- **界面文案 / UI 文案** (Jièmiàn wén'àn) — "Interface Copy." Refers directly to the text on screens. [link](https://thebuddypost.hkbu.edu.hk/tc/story/apr-2022-people-discovery/)

### 2. Content Design

- **内容设计** (Nèiróng shèjì) — The direct translation for "Content Design".
- **内容设计师** (Nèiróng shèjìshī) — "Content Designer". Companies like Meta or Shopify use this title for their Chinese-speaking roles. [link](https://zhuanlan.zhihu.com/p/459427737)

### Why just saying "文案" can be confusing

In Chinese companies, **文案** (or **文案策划** - Wén'àn cèhuà) traditionally belongs to the **marketing and advertising** department (branding, social media ads, slogan writing).

Because marketing copy aims to sell things, and UX writing aims to help users navigate an app, tech teams use **UX 文案** or **产品文案** to make sure people know they are talking about product design, not advertising. [link](https://thebuddypost.hkbu.edu.hk/tc/story/apr-2022-people-discovery/)

Are you discussing this with a **product development team**, or are you looking for **Chinese UI style guidelines**?

- [link](https://thebuddypost.hkbu.edu.hk/tc/story/apr-2022-people-discovery/)\
  郭家樂校友分享有關用戶體驗文案(UX Writing) 及虛擬銀行的知識\
  User Experience (UX) writing is a form of copywriting that f...\
  Hong Kong Baptist University – HKBU
- [link](https://www.facebook.com/groups/538350227101829/posts/2013963952873775/)\
  Should design be simplified for real-world execution?\
  Feb 7, 2026 — 因為不必要的設計，會增加成本、產生不良、不好使用 。 每個設計都有其必要性及合理性，否則容易被(使用者 、客戶)打槍 不...\
  Facebook·Building Contractors
- [link](https://zhuanlan.zhihu.com/p/459427737)\
  什么是内容设计师？内容设计师是做什么的？ - 知乎专栏\
  Jan 19, 2022 — 那么，内容设计师（Content designer）是干嘛的呢？他们的职责就是要让网站与网络服务的文字写作，尽可能地清楚...\
  知乎专栏

Show all

## which is more commonly used, ux writing or content design

<mark><strong><span>Content Design</span></strong><span> </span>is more commonly used by major tech companies and industry leaders</mark>, while **UX Writing** remains highly recognizable globally and is often preferred by smaller companies or teams new to the discipline. [link](https://www.reddit.com/r/userexperience/comments/1gvbe46/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner%5Fexperience%5Fhas%5Fme/)

The industry underwent a massive shifting of titles where prominent organizations (like Meta, Google, Intuit, and Shopify) officially rebranded their "UX Writer" roles to "Content Designer". [link](https://www.reddit.com/r/userexperience/comments/1gvbe46/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner%5Fexperience%5Fhas%5Fme/)

The two terms are compared here by industry usage, scope, and organizational preferences:

### Industry Trends

- **Content Design (The Corporate Standard)**: Big Tech heavily favors this title. It positions the professional as a core designer who uses words as their design material, rather than just an assembly-line writer brought in at the end of a project. [link](https://www.reddit.com/r/userexperience/comments/1gvbe46/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner%5Fexperience%5Fhas%5Fme/)
- **UX Writing (The Global Baseline)**: This term is still widely used in job boards, bootcamps, and by hiring managers because the word "writing" makes it instantly clear what the person does day-to-day. [link](https://uxcontent.com/what-is-ux-writing/)

### Direct Comparison

| Feature                  | UX Writing                                                      | Content Design                                                       |
| ------------------------ | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Primary Focus**        | Crafting clear, concise text for user interfaces.               | Structuring data layouts, user journeys, and total information flow. |
| **Core Deliverable**     | Microcopy, button text, error messages, and onboarding screens. | Wireframes, information architecture, and conversational frameworks. |
| **Timeline Integration** | Often pulled in during mid-to-late UI design stages.            | Embedded early in product strategy and user research phases.         |

### Summary for Career or Hiring

- If you are **writing a resume** or **job description**, it is best to use both terms together (e.g., _"Content Designer / UX Writer"_) to ensure your text matches all search filters and human resource tools. [link](https://www.reddit.com/r/userexperience/comments/1gvbe46/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner%5Fexperience%5Fhas%5Fme/)
- If you are **building a design system**, "Content Design" is preferred because it treats text components as equal to visual design components. [link](https://uxwritinghub.com/ux-writing-vs-content-design/)

Are you planning to **update a job title on your LinkedIn profile**, or are you looking to **hire a specialist** for an upcoming project?

- [link](https://www.reddit.com/r/userexperience/comments/1gvbe46/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner%5Fexperience%5Fhas%5Fme/)\
  UX Writer vs Content Designer: Experience Has Me More ...\
  Nov 19, 2024 — Most “UX” degrees I can think of are still called HCI (Human Computer Interaction), and I don't personally know a single UXer who ...\
  Reddit·r/userexperience
- [link](https://medium.com/design-bootcamp/content-design-ux-writing-ux-content-strategy-whats-the-difference-9069989c9702)\
  Content Design, UX Writing, UX Content Strategy — what's the ...\
  Jun 23, 2022 — Content design is the guts of product design: it's where you decide how the words should be displayed to the user. The key to cont...\
  Medium·Amanda Bridge
- [link](https://uxdesign.cc/understanding-ux-writing-content-design-79839ce1df2a)\
  Understanding “UX writing” & “content design” | by Rhiannon Payne\
  Jul 23, 2019 — The role of UX copy content design is different from content marketing and copywriting. Content marketing and copywriting generate...\
  UX Collective

Show all

# . kde hig text and labels

````md
[Skip to main content](https://develop.kde.org/hig/text%5Fand%5Flabels/#content)

[Skip to content](https://develop.kde.org/hig/text%5Fand%5Flabels/#main)

[HomeDeveloper](https://develop.kde.org/)

- [Design](https://develop.kde.org/hig/)

- [Tutorials](https://develop.kde.org/docs/)

- [API](https://api.kde.org/)

- [Distribute](https://develop.kde.org/distribute/)

- - [What makes a KDE app a KDE app?](https://develop.kde.org/hig/kde%5Fapp%5Fdesign/)[Simple by default](https://develop.kde.org/hig/simple%5Fby%5Fdefault/)[Powerful when needed](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)[Layout and navigation](https://develop.kde.org/hig/layout%5Fand%5Fnav/)[Displaying content](https://develop.kde.org/hig/displaying%5Fcontent/)[Getting input](https://develop.kde.org/hig/getting%5Finput/)[Communicating status changes](https://develop.kde.org/hig/status%5Fchanges/)[Text and labels](https://develop.kde.org/hig/text%5Fand%5Flabels/)
    - [Icons](https://develop.kde.org/hig/icons/)\
      [Accessibility and inclusiveness](https://develop.kde.org/hig/accessibility/)

[Edit this page](https://invent.kde.org/documentation/develop-kde-org/-/edit/master/content/hig/text%5Fand%5Flabels.md)[See source code](https://invent.kde.org/documentation/develop-kde-org/-/blob/master/content/hig/text%5Fand%5Flabels.md)[Create documentation issue](https://invent.kde.org/documentation/develop-kde-org/-/issues/new?issue%5Btitle%5D=Text%20and%20labels)[Formatting guidelines](https://develop.kde.org/docs/contribute/formatting/)[Style guidelines](https://develop.kde.org/docs/contribute/style/)

- [Capitalization and punctuation](https://develop.kde.org/hig/text%5Fand%5Flabels/#capitalization-and-punctuation)
- [Mood and tone](https://develop.kde.org/hig/text%5Fand%5Flabels/#mood-and-tone)
- [Word ordering and length](https://develop.kde.org/hig/text%5Fand%5Flabels/#word-ordering-and-length)
- [Acronyms](https://develop.kde.org/hig/text%5Fand%5Flabels/#acronyms)
- [Ellipses](https://develop.kde.org/hig/text%5Fand%5Flabels/#ellipses)
- [Window titles](https://develop.kde.org/hig/text%5Fand%5Flabels/#window-titles)
- [Placeholders](https://develop.kde.org/hig/text%5Fand%5Flabels/#placeholders)
- [Translation](https://develop.kde.org/hig/text%5Fand%5Flabels/#translation)
- [Brand names](https://develop.kde.org/hig/text%5Fand%5Flabels/#brand-names)
- [Symbols](https://develop.kde.org/hig/text%5Fand%5Flabels/#symbols)
- [Units](https://develop.kde.org/hig/text%5Fand%5Flabels/#units)

1. [KDE Human Interface Guidelines](https://develop.kde.org/hig/)
2. [Text and labels](https://develop.kde.org/hig/text%5Fand%5Flabels/)

# Text and labels

Whenever writing text, start by following these guidelines:

- Make it as short as possible without losing meaning or precision.
- Keep it actionable.
- Front-load the most important information in longer text.
- Use plain language and minimize technical jargon. For example, prefer “folder” over “directory.”
- Adhere to common wording conventions.
- Use a neutral, informative tone: not informal, boring, exciting, or harsh.
- Use the word “Delete” for actions that remove files on disk.
- Don’t overuse bold text and pull the user’s attention in multiple directions at once.

And then keep in mind these implementation details:

- Use [QtQuick.Controls.Label](https://doc.qt.io/qt-6/qml-qtquick-controls2-label.html) for normal-sized text, and [Kirigami.Heading](https://api.kde.org/qml-org-kde-kirigami-heading.html) (with a `level` suitable for the context) for larger header text. See [more information here](https://develop.kde.org/docs/getting-started/kirigami/style-typography/).
- Don’t use [QtQuick.Text](https://doc.qt.io/qt-6/qml-qtquick-text.html) directly, as it doesn’t respect the system’s font settings.
- Manually assign [accelerator keys](https://doc.qt.io/qt-6.2/accelerators.html) only for text in buttons, radio buttons, checkboxes, and switches (in other places, they are auto-generated).
- Assign text for icons-only buttons anyway, so it can be read by screen readers. Hide the text by setting the [AbstractButton.display](https://doc.qt.io/qt-6/qml-qtquick-controls-abstractbutton.html#display-prop) property to `IconOnly` and then manually add a [Tooltip](https://doc.qt.io/Qt-6/qml-qtquick-controls-tooltip.html) for the benefit of mouse and touch users.
- For standard actions, use [KStandardActions](https://api.kde.org/kstandardactions.html) so that it gets standard text automatically.

## Capitalization and punctuation

All user interface text is written in either [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) or [title case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case). Use sentence case when:

- The text ends with a period or colon.
- The text is clearly a sentence.
- The text is a subtitle, tooltip, transient status message, or placeholder label.
- The text is used as a label for a radio button, checkbox, combobox item, or placed in front of a control — for example using [Kirigami.FormData.label](https://api.kde.org/qml-org-kde-kirigami-layouts-formdata.html#label-attached-prop).

Otherwise, use title case.

Also use title case for specialized proper nouns such as “the Internet” or “Plasma Widgets”.

Use a [serial comma](https://apastyle.apa.org/style-grammar-guidelines/punctuation/serial-comma) (also known as an “Oxford comma”) when mentioning three or more list items in a sentence.

Put spaces around [em-dashes](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use).

## Mood and tone

Use the imperative mood when providing instructions or suggestions to the user — especially in the labels for buttons, menu items, checkboxes, and switches.

This means beginning the label with an action verb, and phrasing it as a command:

**Bad:** Yes

**Good:** Apply

**Bad:** Info

**Good:** Show Info

**Bad:** Maximum Volume Raising

**Good:** Raise Maximum Volume

Use positive phrasing; describe what controls will do when enabled, not what they won’t do when disabled:

**Bad:** When disabled, prevent the system from going to sleep.

**Good:** Allow the system to go to sleep.

Phrase longer text impersonally. Avoid the word “you” in sentences that instruct the user to do something, as it sounds accusatory in English — particularly at the beginning of a sentence. This is less important for questions and descriptions, but try to minimize it anyway.

**Bad:** You are not authorized to access the file.

**Good**: Missing authorization to access the file.

**Bad**: Are you sure you want to permanently delete all items from the Trash?

**Good**: Permanently delete all items from the Trash?

## Word ordering and length

Front-load the most important words and minimize total length. Anything longer than “Configure Keyboard Shortcuts” in an interactive control is too long.

For multi-sentence text, try to limit line length to 85 characters or less, which improves readability. This generally works out to about 450px. However if this would cause excessive whitespace in wide windows, consider changing the layout to move elements to the right of the text area, or even move the long text into a [Kirigami.ContextualHelpButton](https://api.kde.org/qml-org-kde-kirigami-contextualhelpbutton.html) or [KWidgetsAddons::KContextualHelpButton](https://api.kde.org/kcontextualhelpbutton.html), which enforces this length internally.

A strategy for minimizing length is to omit the subject when the context makes it clear:

Nearby “Users” title provides context and makes it obvious what new thing will be added.

**Bad:** Re-Assign Key Binding to this Action

**Good:** Re-Assign Shortcut

Another strategy is to relocate the verb to the beginning of a shared intoductory label if if would lead to shorter labels, less repetition, or a more natural formulation:

Unique checkbox text, with the common part extracted into the introductory label

Leading text repeated

When shortening an interactive control’s label like this, always set `Accessible.name` to the full text including the verb and subject, since screen reader users won’t be able to see the context. Don’t do this for a static label.

## Acronyms

Avoid the use of acronyms, as many users will not know what they mean. Only use an acronym when you have to display the same term multiple times and can explain the acronym the first time it’s seen. Strive to use human-readable words instead of acronyms — even those you might assume are commonly understood, for example:

- PC → System, computer
- OS → Operating system
- URL → Link
- RAM → Memory

This guideline does not apply to common functionality only ever referred to via its acronym (e.g. “USB”), or in highly technical software where the user is expected to be familiar with common terminology. These are exceptions, not the rule.

When you do use an acronym, capitalize all the letters.

## Ellipses

End an action’s label with an ellipsis if it always requires additional user input before it completes. This is common for actions that open a dialog prompting the user to make a further choice.

**Bad:** Save As

**Good:** Save As…

Use the real “…” ellipsis character (`U+2026` in Unicode), not three periods. For labeled buttons that directly open a pop-up menu, use a downward-pointing arrow to indicate this instead of an ellipsis.

## Window titles

Give every window a distinctive title briefly describing its visible content. This text is shown in multiple places where space may be limited, so keep it as short as possible while retaining distinctiveness. Don’t include the app’s vendor or version number.

**Bad:** AppName 5.3.9 Professional Edition, by SquidSoft™

**Bad:** Main Window

**Good:** Inbox — `konqi@kde.org`

**Good:** Stairway To Heaven, by Led Zeppelin

Avoid showing file paths, which can be long and hard to parse. In a tab-based app that can have multiple files open, disambiguate identically-named files only by their parent folder names, like this:

```
CMakeLists.txt — library
CMakeLists.txt — app
```

For dialog titles, describe the action being performed starting with an imperative mood verb, just like button and menu item labels. If the dialog was opened from a button or menu item, echo its label in the dialog title.

**Bad:** Load… → Open File

**Bad:** About \[app name]→ Details

**Good:** Save… → Save File

**Good:** Properties → Properties for \[file name]

## Placeholders

Placeholder text is used in empty text fields and empty views. Both share a common purpose: to tell users how to get content into it.

For placeholder messages in empty views, use [Kirigami.PlaceholderMessage](https://api.kde.org/qml-org-kde-kirigami-placeholdermessage.html).

In empty text fields, use the following rules:

- If the text field has an explanatory label to the left of it, write the placeholder text as an example of the sort of text the user is expected to type into it. Placeholder text can be omitted if this is not relevant.
- Otherwise, write the placeholder text as a very short sentence starting with an imperative mood verb that describes what the user should do: “Search”, “Enter file name”, etc.
- Don’t end with an ellipsis character, as it would contradict the meaning of the character in the context of buttons and menu items.

For search fields, use [Kirigami.SearchField](https://api.kde.org/qml-org-kde-kirigami-searchfield.html) which includes standard placeholder text.

## Translation

Many or even most users won’t be using your software in English, so keep translatability in mind:

- Leave enough room for strings to become 50% longer or more when translated into languages with longer text than English.
- Respect system-wide locale settings for units, date and time formats, etc.
- Use the [ki18n guidelines](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md) to write localization-friendly English text.
- Use the [i18nc()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#writing-good-contexts) function to provide translation context to your strings, and use [semantic markup (KUIT)](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#semantic-markup) instead of HTML.
- Use the [i18ncp()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#general-messages) function for any text that refers to a number, as plurals are handled differently in different languages.
- Test your app in right-to-left mode by running it in Arabic with `LANGUAGE=ar_AR [app_executable]`. Even if you can’t read the words, make sure everything has reversed properly and there’s enough room for the text.
- Don’t use internet memes or culture-specific colloquialisms, expressions, and references.

## Brand names

Each app’s name is automatically a brand name; craft it carefully!

- Choose something catchy, easy to remember, and fun-sounding. Avoid negative language.
- Use only a single word, preferably one related to the app’s purpose — even just tangentially.
- Don’t simply add a “K” onto the beginning of an existing word. It’s acceptable to choose a brand name with a K inside it, or even replace a “C” with a “K” (e.g. Falkon, DigiKam), but don’t force it. Not all KDE brand names need to include a K (e.g. Dolphin, Plasma, NeoChat).
- Don’t use common words like “Files” or “Photos.” If your brand name is too generic, its identity will be diluted and users will have a hard time finding it in web searches or describing it to others. It will also be difficult to distinguish from GNOME apps also installed on the system that have similar generic names.

Describe Plasma features with user-friendly descriptive terminology, not their internal codenames.

**Bad:** Powerdevil

**Good:** Power Management

**Bad:** KWin Scripts

**Good:** Window Management Plug-Ins

## Symbols

Use appropriate Unicode symbols rather than handmade approximations. This makes the text of your app look nicer and more professional, easier to translate, and more comprehensible when read by a screen reader. For example:

- `…` (`U+2026`) instead of `...` anywhere ellipses are used
- `→` (`U+2192`) instead of `->`
- `÷` (`U+00F7`), `×` (`U+00D7`), and `−` (`U+2212`) instead of `/`, `x`, and `-` in mathematical expressions; e.g. `−1`, `2×`, `2×2`, `10÷5` etc. (applicable for other mathematical operators as well)
- `×` (`U+00D7`) instead of `x` for dimensions; e.g. `1920 × 1080`, instead of `1920x1080`
- `’` (`U+2019`) instead of `'` for apostrophes
- `‘` (`U+2018`) and `’` (`U+2019`) instead of `'` for single quotation marks
- `“` (`U+201C`) and `”` (`U+201D`) instead of `"` for double quotation marks
- `–` (`U+2013`) instead of `-` for [date ranges](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use); e.g. `2020–2024`
- `—` (`U+2014`) instead of `-`, `-`, or `--` for [interjections](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use)
- `‒` (`U+2012`) instead of `-` for [separating number values](https://en.wikipedia.org/wiki/Dash#Figure%5Fdash) like dates or telephone numbers
- `&` (`U+0026`) instead of the word “and” to join sets of exactly two items, e.g. “Input & Output”
- `©` (`U+00A9`) `™` (`U+2122`), and `®` (`U+00AE`); instead of `(C)`, `TM`, and `(R)`

KDE’s [KCharSelect](https://apps.kde.org/kcharselect) app can be used to find these and other symbols. If you suspect there might be a dedicated Unicode symbol for the expression you want to include (which there probably is), please look it up first!

## Units

Prefer whole words when writing out units, unless space is extremely limited (e.g. graph legends, table views). In this case, use internationally-accepted abbreviations.

**Bad**: 200msec

**Good**: 200 ms

**Better**: 200 milliseconds

See also the lists of accepted abbreviations for [SI units](https://en.wikipedia.org/wiki/International%5FSystem%5Fof%5FUnits) and [US customary](https://en.wikipedia.org/wiki/United%5FStates%5Fcustomary%5Funits) units.

[PreviousCommunicating status changes](https://develop.kde.org/hig/status%5Fchanges/)

[NextIcons](https://develop.kde.org/hig/icons/)

© 2026 The KDE Community CC-BY-SA-4.0
````

````md
1. [KDE Human Interface Guidelines](https://develop.kde.org/hig/)
2. [Text and labels](https://develop.kde.org/hig/text%5Fand%5Flabels/)

# Text and labels

Whenever writing text, start by following these guidelines:

- Make it as short as possible without losing meaning or precision.
- Keep it actionable.
- Front-load the most important information in longer text.
- Use plain language and minimize technical jargon. For example, prefer “folder” over “directory.”
- Adhere to common wording conventions.
- Use a neutral, informative tone: not informal, boring, exciting, or harsh.
- Use the word “Delete” for actions that remove files on disk.
- Don’t overuse bold text and pull the user’s attention in multiple directions at once.

And then keep in mind these implementation details:

- Use [QtQuick.Controls.Label](https://doc.qt.io/qt-6/qml-qtquick-controls2-label.html) for normal-sized text, and [Kirigami.Heading](https://api.kde.org/qml-org-kde-kirigami-heading.html) (with a `level` suitable for the context) for larger header text. See [more information here](https://develop.kde.org/docs/getting-started/kirigami/style-typography/).
- Don’t use [QtQuick.Text](https://doc.qt.io/qt-6/qml-qtquick-text.html) directly, as it doesn’t respect the system’s font settings.
- Manually assign [accelerator keys](https://doc.qt.io/qt-6.2/accelerators.html) only for text in buttons, radio buttons, checkboxes, and switches (in other places, they are auto-generated).
- Assign text for icons-only buttons anyway, so it can be read by screen readers. Hide the text by setting the [AbstractButton.display](https://doc.qt.io/qt-6/qml-qtquick-controls-abstractbutton.html#display-prop) property to `IconOnly` and then manually add a [Tooltip](https://doc.qt.io/Qt-6/qml-qtquick-controls-tooltip.html) for the benefit of mouse and touch users.
- For standard actions, use [KStandardActions](https://api.kde.org/kstandardactions.html) so that it gets standard text automatically.

## Capitalization and punctuation

All user interface text is written in either [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) or [title case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case). Use sentence case when:

- The text ends with a period or colon.
- The text is clearly a sentence.
- The text is a subtitle, tooltip, transient status message, or placeholder label.
- The text is used as a label for a radio button, checkbox, combobox item, or placed in front of a control — for example using [Kirigami.FormData.label](https://api.kde.org/qml-org-kde-kirigami-layouts-formdata.html#label-attached-prop).

Otherwise, use title case.

Also use title case for specialized proper nouns such as “the Internet” or “Plasma Widgets”.

Use a [serial comma](https://apastyle.apa.org/style-grammar-guidelines/punctuation/serial-comma) (also known as an “Oxford comma”) when mentioning three or more list items in a sentence.

Put spaces around [em-dashes](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use).

## Mood and tone

Use the imperative mood when providing instructions or suggestions to the user — especially in the labels for buttons, menu items, checkboxes, and switches.

This means beginning the label with an action verb, and phrasing it as a command:

**Bad:** Yes

**Good:** Apply

**Bad:** Info

**Good:** Show Info

**Bad:** Maximum Volume Raising

**Good:** Raise Maximum Volume

Use positive phrasing; describe what controls will do when enabled, not what they won’t do when disabled:

**Bad:** When disabled, prevent the system from going to sleep.

**Good:** Allow the system to go to sleep.

Phrase longer text impersonally. Avoid the word “you” in sentences that instruct the user to do something, as it sounds accusatory in English — particularly at the beginning of a sentence. This is less important for questions and descriptions, but try to minimize it anyway.

**Bad:** You are not authorized to access the file.

**Good**: Missing authorization to access the file.

**Bad**: Are you sure you want to permanently delete all items from the Trash?

**Good**: Permanently delete all items from the Trash?

## Word ordering and length

Front-load the most important words and minimize total length. Anything longer than “Configure Keyboard Shortcuts” in an interactive control is too long.

For multi-sentence text, try to limit line length to 85 characters or less, which improves readability. This generally works out to about 450px. However if this would cause excessive whitespace in wide windows, consider changing the layout to move elements to the right of the text area, or even move the long text into a [Kirigami.ContextualHelpButton](https://api.kde.org/qml-org-kde-kirigami-contextualhelpbutton.html) or [KWidgetsAddons::KContextualHelpButton](https://api.kde.org/kcontextualhelpbutton.html), which enforces this length internally.

A strategy for minimizing length is to omit the subject when the context makes it clear:

Nearby “Users” title provides context and makes it obvious what new thing will be added.

**Bad:** Re-Assign Key Binding to this Action

**Good:** Re-Assign Shortcut

Another strategy is to relocate the verb to the beginning of a shared intoductory label if if would lead to shorter labels, less repetition, or a more natural formulation:

Unique checkbox text, with the common part extracted into the introductory label

Leading text repeated

When shortening an interactive control’s label like this, always set `Accessible.name` to the full text including the verb and subject, since screen reader users won’t be able to see the context. Don’t do this for a static label.

## Acronyms

Avoid the use of acronyms, as many users will not know what they mean. Only use an acronym when you have to display the same term multiple times and can explain the acronym the first time it’s seen. Strive to use human-readable words instead of acronyms — even those you might assume are commonly understood, for example:

- PC → System, computer
- OS → Operating system
- URL → Link
- RAM → Memory

This guideline does not apply to common functionality only ever referred to via its acronym (e.g. “USB”), or in highly technical software where the user is expected to be familiar with common terminology. These are exceptions, not the rule.

When you do use an acronym, capitalize all the letters.

## Ellipses

End an action’s label with an ellipsis if it always requires additional user input before it completes. This is common for actions that open a dialog prompting the user to make a further choice.

**Bad:** Save As

**Good:** Save As…

Use the real “…” ellipsis character (`U+2026` in Unicode), not three periods. For labeled buttons that directly open a pop-up menu, use a downward-pointing arrow to indicate this instead of an ellipsis.

## Window titles

Give every window a distinctive title briefly describing its visible content. This text is shown in multiple places where space may be limited, so keep it as short as possible while retaining distinctiveness. Don’t include the app’s vendor or version number.

**Bad:** AppName 5.3.9 Professional Edition, by SquidSoft™

**Bad:** Main Window

**Good:** Inbox — `konqi@kde.org`

**Good:** Stairway To Heaven, by Led Zeppelin

Avoid showing file paths, which can be long and hard to parse. In a tab-based app that can have multiple files open, disambiguate identically-named files only by their parent folder names, like this:

```
CMakeLists.txt — library
CMakeLists.txt — app
```

For dialog titles, describe the action being performed starting with an imperative mood verb, just like button and menu item labels. If the dialog was opened from a button or menu item, echo its label in the dialog title.

**Bad:** Load… → Open File

**Bad:** About \[app name]→ Details

**Good:** Save… → Save File

**Good:** Properties → Properties for \[file name]

## Placeholders

Placeholder text is used in empty text fields and empty views. Both share a common purpose: to tell users how to get content into it.

For placeholder messages in empty views, use [Kirigami.PlaceholderMessage](https://api.kde.org/qml-org-kde-kirigami-placeholdermessage.html).

In empty text fields, use the following rules:

- If the text field has an explanatory label to the left of it, write the placeholder text as an example of the sort of text the user is expected to type into it. Placeholder text can be omitted if this is not relevant.
- Otherwise, write the placeholder text as a very short sentence starting with an imperative mood verb that describes what the user should do: “Search”, “Enter file name”, etc.
- Don’t end with an ellipsis character, as it would contradict the meaning of the character in the context of buttons and menu items.

For search fields, use [Kirigami.SearchField](https://api.kde.org/qml-org-kde-kirigami-searchfield.html) which includes standard placeholder text.

## Translation

Many or even most users won’t be using your software in English, so keep translatability in mind:

- Leave enough room for strings to become 50% longer or more when translated into languages with longer text than English.
- Respect system-wide locale settings for units, date and time formats, etc.
- Use the [ki18n guidelines](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md) to write localization-friendly English text.
- Use the [i18nc()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#writing-good-contexts) function to provide translation context to your strings, and use [semantic markup (KUIT)](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#semantic-markup) instead of HTML.
- Use the [i18ncp()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#general-messages) function for any text that refers to a number, as plurals are handled differently in different languages.
- Test your app in right-to-left mode by running it in Arabic with `LANGUAGE=ar_AR [app_executable]`. Even if you can’t read the words, make sure everything has reversed properly and there’s enough room for the text.
- Don’t use internet memes or culture-specific colloquialisms, expressions, and references.

## Brand names

Each app’s name is automatically a brand name; craft it carefully!

- Choose something catchy, easy to remember, and fun-sounding. Avoid negative language.
- Use only a single word, preferably one related to the app’s purpose — even just tangentially.
- Don’t simply add a “K” onto the beginning of an existing word. It’s acceptable to choose a brand name with a K inside it, or even replace a “C” with a “K” (e.g. Falkon, DigiKam), but don’t force it. Not all KDE brand names need to include a K (e.g. Dolphin, Plasma, NeoChat).
- Don’t use common words like “Files” or “Photos.” If your brand name is too generic, its identity will be diluted and users will have a hard time finding it in web searches or describing it to others. It will also be difficult to distinguish from GNOME apps also installed on the system that have similar generic names.

Describe Plasma features with user-friendly descriptive terminology, not their internal codenames.

**Bad:** Powerdevil

**Good:** Power Management

**Bad:** KWin Scripts

**Good:** Window Management Plug-Ins

## Symbols

Use appropriate Unicode symbols rather than handmade approximations. This makes the text of your app look nicer and more professional, easier to translate, and more comprehensible when read by a screen reader. For example:

- `…` (`U+2026`) instead of `...` anywhere ellipses are used
- `→` (`U+2192`) instead of `->`
- `÷` (`U+00F7`), `×` (`U+00D7`), and `−` (`U+2212`) instead of `/`, `x`, and `-` in mathematical expressions; e.g. `−1`, `2×`, `2×2`, `10÷5` etc. (applicable for other mathematical operators as well)
- `×` (`U+00D7`) instead of `x` for dimensions; e.g. `1920 × 1080`, instead of `1920x1080`
- `’` (`U+2019`) instead of `'` for apostrophes
- `‘` (`U+2018`) and `’` (`U+2019`) instead of `'` for single quotation marks
- `“` (`U+201C`) and `”` (`U+201D`) instead of `"` for double quotation marks
- `–` (`U+2013`) instead of `-` for [date ranges](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use); e.g. `2020–2024`
- `—` (`U+2014`) instead of `-`, `-`, or `--` for [interjections](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use)
- `‒` (`U+2012`) instead of `-` for [separating number values](https://en.wikipedia.org/wiki/Dash#Figure%5Fdash) like dates or telephone numbers
- `&` (`U+0026`) instead of the word “and” to join sets of exactly two items, e.g. “Input & Output”
- `©` (`U+00A9`) `™` (`U+2122`), and `®` (`U+00AE`); instead of `(C)`, `TM`, and `(R)`

KDE’s [KCharSelect](https://apps.kde.org/kcharselect) app can be used to find these and other symbols. If you suspect there might be a dedicated Unicode symbol for the expression you want to include (which there probably is), please look it up first!

## Units

Prefer whole words when writing out units, unless space is extremely limited (e.g. graph legends, table views). In this case, use internationally-accepted abbreviations.

**Bad**: 200msec

**Good**: 200 ms

**Better**: 200 milliseconds

See also the lists of accepted abbreviations for [SI units](https://en.wikipedia.org/wiki/International%5FSystem%5Fof%5FUnits) and [US customary](https://en.wikipedia.org/wiki/United%5FStates%5Fcustomary%5Funits) units.

[PreviousCommunicating status changes](https://develop.kde.org/hig/status%5Fchanges/)

[NextIcons ](https://develop.kde.org/hig/icons/)
````

````md
---
title: "Text and labels"
weight: 9
aliases:
  - /hig/style/writing/
  - /hig/style/typography/
---

<!-- TODO: Add anything relevant from https://developer.apple.com/design/human-interface-guidelines/typography -->

Whenever writing text, start by following these guidelines:

- Make it as short as possible without losing meaning or precision.
- Keep it actionable.
- Front-load the most important information in longer text.
- Use plain language and minimize technical jargon. For example, prefer “folder” over “directory.”
- Adhere to common wording conventions.
- Use a neutral, informative tone: not informal, boring, exciting, or harsh.
- Use the word “Delete” for actions that remove files on disk.
- Don't overuse bold text and pull the user's attention in multiple directions at once.

And then keep in mind these implementation details:

- Use [QtQuick.Controls.Label](https://doc.qt.io/qt-6/qml-qtquick-controls2-label.html) for normal-sized text, and [Kirigami.Heading](https://api.kde.org/qml-org-kde-kirigami-heading.html) (with a `level` suitable for the context) for larger header text. See [more information here](https://develop.kde.org/docs/getting-started/kirigami/style-typography/).
- Don't use [QtQuick.Text](https://doc.qt.io/qt-6/qml-qtquick-text.html) directly, as it doesn't respect the system's font settings.
- Manually assign [accelerator keys](https://doc.qt.io/qt-6.2/accelerators.html) only for text in buttons, radio buttons, checkboxes, and switches (in other places, they are auto-generated).
- Assign text for icons-only buttons anyway, so it can be read by screen readers. Hide the text by setting the [AbstractButton.display](https://doc.qt.io/qt-6/qml-qtquick-controls-abstractbutton.html#display-prop) property to `IconOnly` and then manually add a [Tooltip](https://doc.qt.io/Qt-6/qml-qtquick-controls-tooltip.html) for the benefit of mouse and touch users.
- For standard actions, use [KStandardActions](https://api.kde.org/kstandardactions.html) so that it gets standard text automatically.

## Capitalization and punctuation

All user interface text is written in either [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) or [title case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/title-case). Use sentence case when:

- The text ends with a period or colon.
- The text is clearly a sentence.
- The text is a subtitle, tooltip, transient status message, or placeholder label.
- The text is used as a label for a radio button, checkbox, combobox item, or placed in front of a control — for example using [Kirigami.FormData.label](https://api.kde.org/qml-org-kde-kirigami-layouts-formdata.html#label-attached-prop).

Otherwise, use title case.

Also use title case for specialized proper nouns such as “the Internet” or “Plasma Widgets”.

Use a [serial comma](https://apastyle.apa.org/style-grammar-guidelines/punctuation/serial-comma) (also known as an “Oxford comma”) when mentioning three or more list items in a sentence.

Put spaces around [em-dashes](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use).

## Mood and tone

Use the imperative mood when providing instructions or suggestions to the user — especially in the labels for buttons, menu items, checkboxes, and switches.

This means beginning the label with an action verb, and phrasing it as a command:

**Bad:** Yes

**Good:** Apply

**Bad:** Info

**Good:** Show Info

**Bad:** Maximum Volume Raising

**Good:** Raise Maximum Volume

Use positive phrasing; describe what controls will do when enabled, not what they won’t do when disabled:

**Bad:** When disabled, prevent the system from going to sleep.

**Good:** Allow the system to go to sleep.

Phrase longer text impersonally. Avoid the word “you” in sentences that instruct the user to do something, as it sounds accusatory in English — particularly at the beginning of a sentence. This is less important for questions and descriptions, but try to minimize it anyway.

**Bad:** You are not authorized to access the file.

**Good**: Missing authorization to access the file.

**Bad**: Are you sure you want to permanently delete all items from the Trash?

**Good**: Permanently delete all items from the Trash?

## Word ordering and length

Front-load the most important words and minimize total length. Anything longer than “Configure Keyboard Shortcuts” in an interactive control is too long.

For multi-sentence text, try to limit line length to 85 characters or less, which improves readability. This generally works out to about 450px. However if this would cause excessive whitespace in wide windows, consider changing the layout to move elements to the right of the text area, or even move the long text into a [Kirigami.ContextualHelpButton](https://api.kde.org/qml-org-kde-kirigami-contextualhelpbutton.html) or [KWidgetsAddons::KContextualHelpButton](https://api.kde.org/kcontextualhelpbutton.html), which enforces this length internally.

A strategy for minimizing length is to omit the subject when the context makes it clear:

{{< figure src="/hig/text-short-button-label-with-nearby-context.png" class="text-center" caption="Nearby “Users” title provides context and makes it obvious what new thing will be added." width="476px">}}

**Bad:** Re-Assign Key Binding to this Action

**Good:** Re-Assign Shortcut

Another strategy is to relocate the verb to the beginning of a shared intoductory label if if would lead to shorter labels, less repetition, or a more natural formulation:

{{< compare >}}
{{< do src="/hig/multiple-checkboxes-good.png" >}}
Unique checkbox text, with the common part extracted into the introductory label
{{< /do >}}
{{< dont src="/hig/multiple-checkboxes-bad.png" >}}
Leading text repeated
{{< /dont >}}
{{< /compare >}}

When shortening an interactive control’s label like this, always set `Accessible.name` to the full text including the verb and subject, since screen reader users won’t be able to see the context. Don’t do this for a static label.

## Acronyms

Avoid the use of acronyms, as many users will not know what they mean. Only use an acronym when you have to display the same term multiple times and can explain the acronym the first time it's seen. Strive to use human-readable words instead of acronyms — even those you might assume are commonly understood, for example:

- PC → System, computer
- OS → Operating system
- URL → Link
- RAM → Memory

This guideline does not apply to common functionality only ever referred to via its acronym (e.g. “USB”), or in highly technical software where the user is expected to be familiar with common terminology. These are exceptions, not the rule.

When you do use an acronym, capitalize all the letters.

## Ellipses

End an action’s label with an ellipsis if it always requires additional user input before it completes. This is common for actions that open a dialog prompting the user to make a further choice.

**Bad:** Save As

**Good:** Save As…

Use the real “…” ellipsis character (`U+2026` in Unicode), not three periods. For labeled buttons that directly open a pop-up menu, use a downward-pointing arrow to indicate this instead of an ellipsis.

## Window titles

Give every window a distinctive title briefly describing its visible content. This text is shown in multiple places where space may be limited, so keep it as short as possible while retaining distinctiveness. Don't include the app's vendor or version number.

**Bad:** AppName 5.3.9 Professional Edition, by SquidSoft™

**Bad:** Main Window

**Good:** Inbox — `konqi@kde.org`

**Good:** Stairway To Heaven, by Led Zeppelin

Avoid showing file paths, which can be long and hard to parse. In a tab-based app that can have multiple files open, disambiguate identically-named files only by their parent folder names, like this:

```
CMakeLists.txt — library
CMakeLists.txt — app
```

For dialog titles, describe the action being performed starting with an imperative mood verb, just like button and menu item labels. If the dialog was opened from a button or menu item, echo its label in the dialog title.

**Bad:** Load… → Open File

**Bad:** About \[app name\]→ Details

**Good:** Save… → Save File

**Good:** Properties → Properties for \[file name\]

## Placeholders

Placeholder text is used in empty text fields and empty views. Both share a common purpose: to tell users how to get content into it.

For placeholder messages in empty views, use [Kirigami.PlaceholderMessage](https://api.kde.org/qml-org-kde-kirigami-placeholdermessage.html).

In empty text fields, use the following rules:

- If the text field has an explanatory label to the left of it, write the placeholder text as an example of the sort of text the user is expected to type into it. Placeholder text can be omitted if this is not relevant.
- Otherwise, write the placeholder text as a very short sentence starting with an imperative mood verb that describes what the user should do: “Search”, “Enter file name”, etc.
- Don't end with an ellipsis character, as it would contradict the meaning of the character in the context of buttons and menu items.

For search fields, use [Kirigami.SearchField](https://api.kde.org/qml-org-kde-kirigami-searchfield.html) which includes standard placeholder text.

## Translation

Many or even most users won't be using your software in English, so keep translatability in mind:

- Leave enough room for strings to become 50% longer or more when translated into languages with longer text than English.
- Respect system-wide locale settings for units, date and time formats, etc.
- Use the [ki18n guidelines](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md) to write localization-friendly English text.
- Use the [i18nc()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#writing-good-contexts) function to provide translation context to your strings, and use [semantic markup (KUIT)](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#semantic-markup) instead of HTML.
- Use the [i18ncp()](https://invent.kde.org/frameworks/ki18n/-/blob/master/docs/programmers-guide.md#general-messages) function for any text that refers to a number, as plurals are handled differently in different languages.
- Test your app in right-to-left mode by running it in Arabic with `LANGUAGE=ar_AR [app_executable]`. Even if you can't read the words, make sure everything has reversed properly and there's enough room for the text.
- Don't use internet memes or culture-specific colloquialisms, expressions, and references.

## Brand names

Each app's name is automatically a brand name; craft it carefully!

- Choose something catchy, easy to remember, and fun-sounding. Avoid negative language.
- Use only a single word, preferably one related to the app's purpose — even just tangentially.
- Don't simply add a “K” onto the beginning of an existing word. It's acceptable to choose a brand name with a K inside it, or even replace a “C” with a “K” (e.g. Falkon, DigiKam), but don't force it. Not all KDE brand names need to include a K (e.g. Dolphin, Plasma, NeoChat).
- Don't use common words like “Files” or “Photos.” If your brand name is too generic, its identity will be diluted and users will have a hard time finding it in web searches or describing it to others. It will also be difficult to distinguish from GNOME apps also installed on the system that have similar generic names.

Describe Plasma features with user-friendly descriptive terminology, not their internal codenames.

**Bad:** Powerdevil

**Good:** Power Management

**Bad:** KWin Scripts

**Good:** Window Management Plug-Ins

## Symbols

Use appropriate Unicode symbols rather than handmade approximations. This makes the text of your app look nicer and more professional, easier to translate, and more comprehensible when read by a screen reader. For example:

- `…` (`U+2026`) instead of `...` anywhere ellipses are used
- `→` (`U+2192`) instead of `->`
- `÷` (`U+00F7`), `×` (`U+00D7`), and `−` (`U+2212`) instead of `/`, `x`, and `-` in mathematical expressions; e.g. `−1`, `2×`, `2×2`, `10÷5` etc. (applicable for other mathematical operators as well)
- `×` (`U+00D7`) instead of `x` for dimensions; e.g. `1920 × 1080`, instead of `1920x1080`
- `“` (`U+201C`) and `”` (`U+201D`) instead of `"` for quotations
- `’` (`U+2019`) instead of `'` for apostrophes
- `–` (`U+2013`) instead of `-` for [date ranges](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use); e.g. `2020–2024`
- `—` (`U+2014`) instead of `-`, `-`, or `--` for [interjections](https://www.merriam-webster.com/grammar/em-dash-en-dash-how-to-use)
- `‒` (`U+2012`) instead of `-` for [separating number values](https://en.wikipedia.org/wiki/Dash#Figure_dash) like dates or telephone numbers
- `&` (`U+0026`) instead of the word “and” to join sets of exactly two items, e.g. “Input & Output”
- `©` (`U+00A9`) `™` (`U+2122`), and `®` (`U+00AE`); instead of `(C)`, `TM`, and `(R)`

KDE’s [KCharSelect](https://apps.kde.org/kcharselect) app can be used to find these and other symbols. If you suspect there might be a dedicated Unicode symbol for the expression you want to include (which there probably is), please look it up first!

## Units

Prefer whole words when writing out units, unless space is extremely limited (e.g. graph legends, table views). In this case, use internationally-accepted abbreviations.

**Bad**: 200msec

**Good**: 200 ms

**Better**: 200 milliseconds

See also the lists of accepted abbreviations for [SI units](https://en.wikipedia.org/wiki/International_System_of_Units) and [US customary](https://en.wikipedia.org/wiki/United_States_customary_units) units.
````

# is it about ux writing https://develop.kde.org/hig/text\_and\_labels/

The provided URL serves as the UX writing style guide within the KDE Human Interface Guidelines, focusing on creating clear, concise, and actionable microcopy for software interfaces. It outlines specific standards for tone, plain language, and formatting, while providing technical implementation notes for the KDE framework. For the complete guidelines, visit [KDE Developer](https://develop.kde.org/hig/text%5Fand%5Flabels/).

- [link](https://develop.kde.org/hig/text%5Fand%5Flabels/)\
  Text and labels - KDE Developer\
  Text and labels. Whenever writing text, start by following these guidelines: Make it as short as possible without losing meaning o...\
  KDE
- [link](https://discuss.kde.org/t/kdes-hig-title-case-in-greek-localization/21216)\
  KDE's HIG: Title Case in Greek Localization - Development\
  Sep 12, 2024 — I'd like to discuss title case usage within the Greek localization of KDE. This topic might spark some friendly debate within the ...\
  KDE Discuss
- [link](https://develop.kde.org/hig/)\
  KDE Human Interface Guidelines | Developer\
  The guidelines are not instructions for implementing every specific component. Instead, they are more of a "what and a why," not a...\
  KDE

Show all

## is it about ux writing

Yes, it is entirely about UX writing.

The guide teaches you how to write text for user interfaces. It focuses on making software easy to understand and use.

### Core UX Writing Principles Covered

- **Be Concise**: Keep text short so users can scan it quickly.
- **Be Clear**: Avoid technical jargon and use simple language.
- **Be Consistent**: Use the same words for the same actions across the app.
- **Be Objective**: Avoid emotional or promotional language.

### Specific Interface Elements Addressed

- **Capitalization**: Rules for title case versus sentence case in menus and headers.
- **Punctuation**: Proper use of ellipses (`...`) for actions that need more input.
- **Labels**: Guidelines for naming buttons, checkboxes, and radio buttons.
- **Error Messages**: How to write helpful, non-blaming messages when things go wrong.

Would you like me to summarize the specific **capitalization rules** they recommend, or should we look at how they handle **error messages**?

- [link](https://www.uxdesigninstitute.com/blog/what-is-ux-writing/)\
  A beginner's guide to UX writing \[2025 edition]\
  Feb 28, 2025 — UX writing, also known as content design, is integral to the product design process. It can make or break the user experience — bu...\
  \
  \
  UX Design Institute
- [link](https://flyingbisons.com/blog/what-is-ux-writing)\
  What is UX writing? Rules of effective UX writing\
  Apr 10, 2023 — What is UX writing? We assure you that you have encountered UX ( user experience ) writing more times than you can count. Whenever...\
  \
  \
  Flying Bisons
- [link](https://www.sciencedirect.com/topics/computer-science/user-interface-text)\
  User Interface Text - an overview\
  Introduction Before you begin writing your text, it's a good idea to define the writing guidelines you will use and to come up wit...\
  \
  \
  ScienceDirect.com

Show all

## is it about content design

Yes, it is also about content design.

UX writing and content design are two sides of the same coin. While UX writing focuses on the specific words, content design focuses on the structure, hierarchy, and how that information helps a user navigate an interface.

The KDE guide covers several core content design concepts:

### Information Hierarchy

- **Scanning First**: Structuring text assuming users will scan, not read.
- **Layout Pairing**: Grouping labels correctly with UI elements like checkboxes or dropdowns.
- **Progressive Disclosure**: Using ellipses (`...`) to signal that more information or steps will follow.

### Component Design

- **Form Labels**: Designing clear, predictable fields for user input.
- **Action Buttons**: Ensuring the button text explicitly describes the outcome of the click.
- **Instructional Text**: Keeping helper text minimal and placing it exactly where the user needs it.

If you are working on a specific project, let me know:

- What **type of UI element** you are designing (e.g., a modal, a form, an onboarding flow)
- The **target audience** for your application

I can help you apply these exact guidelines to your layouts.

- [link](https://www.experro.com/blog/content-design/)\
  What is Content Design & Why Is It Important?\
  May 30, 2024 — Ever wondered what makes online content truly attractive and engaging? The secret lies in content design. This essential practice ...\
  \
  \
  Experro
- [link](https://www.uxdesigninstitute.com/blog/what-is-content-design/)\
  What is content design?\
  Sep 29, 2022 — How is content design different from UX writing? UX writing and content design are essentially the same. Both content designers an...\
  \
  \
  UX Design Institute
- [link](https://technicalwriterhq.com/content/content-design/)\
  What Content Design Is and How I Use It to Create Clear, User-Centered Experiences\
  Feb 9, 2026 — FAQs Here I answer the most frequently asked questions about content design. Is content design the same as UX writing? They overla...\
  \
  \
  Technical Writer HQ

Show all

## opinionated choices

Yes, the KDE "Text and Labels" guide makes several **opinionated design choices** to enforce consistency across a highly fragmented, open-source ecosystem. Instead of leaving language up to individual developers, it takes strict stances on how text must look and function. [link](https://discuss.kde.org/t/does-kde-need-to-hire-professional-designers-ui-looks-outdated/39966)

### 1. Strict Capitalization Rules

Unlike systems that default entirely to sentence case, KDE explicitly splits its rules based on the UI element's location:

- **Title Case Only**: Mandatory for headers, menu items, action buttons, tabs, and menu titles (e.g., _Save File As_, _Network Settings_).
- **Sentence Case Only**: Mandatory for checkboxes, radio buttons, text fields, group box labels, tooltips, and long instructional blocks.

### 2. The Ellipsis (`...`) Means "More Input Needed"

KDE is highly specific about when to use trailing dots.

- **Allowed**: Only when an action requires the user to provide more data before completing (e.g., `Print...` because it opens a dialog box to choose a printer).
- **Forbidden**: When an action executes immediately (e.g., `Delete` should never have an ellipsis, even if it brings up a quick "Are you sure?" confirmation).

### 3. Absolute Ban on Technical Jargon

Because KDE apps are built by engineers, the guide strictly forbids the use of programming terms in the user interface. [link](https://discuss.kde.org/t/does-kde-need-to-hire-professional-designers-ui-looks-outdated/39966)

- It forces writers to translate technical processes into consumer-friendly language (e.g., choosing "Secure connection" instead of referencing specific cryptographic protocols or backend variables).

### 4. No Punctuation in Inline Labels

The guide strictly mandates removing colons (`:`) from the end of form field labels. The layout structure alone must imply the connection between a label and its input box, eliminating visual clutter.

### 5. Tone Is "Neutral and Invisible"

KDE rejects the modern trend of quirky, overly conversational AI or brand personas.

- The guide commands a completely **objective, matter-of-fact tone**.
- It forbids artificial friendliness (like "Oops! Something went wrong") and demands precise, non-blaming error descriptions instead.

Are you trying to decide whether to **adopt KDE's specific choices** for your own design system, or are you looking to see how they **differ from Apple or Google's standards**?

- [link](https://uxcontent.com/how-to-give-helpful-content-design-feedback/)\
  How to give impactful content design feedback\
  Feb 1, 2022 — Giving feedback is your secret weapon as a content designer. Taylor Rohwedder shares how to give impactful content design feedback...\
  UX Content Collective

- [link](https://discuss.kde.org/t/does-kde-need-to-hire-professional-designers-ui-looks-outdated/39966)\
  Does KDE need to hire professional designers? UI looks ...\
  Sep 23, 2025 — Most likely because they have professional designers while KDE doesn't. It often gives the impression that KDE's UI was primarily ...\
  KDE Discuss

- [link](https://www.reddit.com/r/kde/comments/fji8no/how%5Fdoes%5Fkde%5Fwork%5Fwho%5Fmakes%5Fthe%5Fdecisions%5Ffor/)\
  How does KDE work? Who makes the decisions for design ...\
  We intentionally do not chase design trends in an effort to be the most trendy or modern. Rather, we aspire to what I like to thin...\
  Reddit

# . thinking: url auto correct

when you click such url `https://develop.kde.org/hig/text\_and\_labels/`, it doesnt work.

(sanitized by md converter)

you could use string distance to auto correct.

<!-- inspired, implement on tools. -->

# (?) does copywriting imply copying others

<mark><span>No, copywriting does not imply copying other people's work</span></mark>; it means writing **original text for marketing and advertising purposes**. The word "copy" in this context is a traditional media noun that refers to the written text or scripts used in print ads, websites, commercials, and brochures. [link](https://www.reddit.com/r/madmen/comments/we879b/what%5Fdoes%5Fit%5Fmean%5Fto%5Fwrite%5Fcopy/)

Stealing or replicating someone else's writing is called **plagiarism**, which is unethical, often illegal, and highly discouraged in the professional copywriting industry.

### Why Is It Called "Copy" Writing?

- **Historical printing**: The term stems from early journalism and printing. A writer produced the original draft (the text), which was then sent to a print shop to be duplicated or "copied" thousands of times for the public. [link](https://www.reddit.com/r/copywriting/comments/wx7mbp/why%5Fthe%5Fhell%5Fis%5Fit%5Fcalled%5Fcopy/)
- **Text vs. Design**: In advertising, "copy" is simply the industry term for the words on the page, distinguishing it from the visual layout, graphics, or video elements.

### Copywriting vs. Copyrighting vs. Plagiarism

Understanding the differences between these similar-sounding terms is crucial:

| Term             | What It Means                                                                                      |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| **Copywriting**  | Writing persuasive text to promote a business, product, or idea.                                   |
| **Copyrighting** | The legal process of securing exclusive rights to intellectual property so others cannot steal it. |
| **Plagiarism**   | Actively copying someone else's words or ideas and pretending they are yours.                      |

### The Exception: "Copywork" for Practice

There is one specific scenario where copywriters do copy others, but it is strictly for private practice, never for publication. Many aspiring writers use a technique called **copywork**, which involves writing out famous, successful advertisements word-for-word by hand. This is done as an exercise to build "muscle memory" for pacing, psychology, and structural flow—much like a painter replicating a masterpiece to learn technique. [link](https://marketcopywriterblog.com/want-to-dramatically-improve-your-content-copy-other-writers-shamelessly/)

If you are trying to understand the day-to-day work of a marketer, I can share **what a copywriter's daily routine looks like** or give you **examples of high-converting marketing copy**. Which would you prefer?

- [link](https://www.reddit.com/r/copywriting/comments/wx7mbp/why%5Fthe%5Fhell%5Fis%5Fit%5Fcalled%5Fcopy/)\
  Why the hell is it called “copy”? : r/copywriting - Reddit\
  Aug 25, 2022 — Comments Section \* • 4y ago. This year I've stumbled on two copywriter websites that are blatantly using content from my website. ...\
  Reddit·r/copywriting
- [link](https://www.reddit.com/r/madmen/comments/we879b/what%5Fdoes%5Fit%5Fmean%5Fto%5Fwrite%5Fcopy/)\
  What does it mean to write copy? : r/madmen - Reddit\
  Aug 2, 2022 — Comments Section \* orangevega. • 4y ago. copy is the text in the body of an ad. writing the text of the ad (the copy) is called co...\
  Reddit·r/madmen
- [link](https://www.reddit.com/r/writing/comments/rzle9z/is%5Fmy%5Ffriend%5Fcopywriting/)\
  Is my friend copywriting? : r/writing - Reddit\
  Jan 9, 2022 — Top 1% Commenter. Copywriting doesn't mean copy writing. It refers to the creation of content for marketing, to generate sales. Wh...\
  Reddit·r/writing

Show all

# (?) compare ux writing and content design

10:25 AM

<mark><strong>UX writing and content design are deeply related product design disciplines that are often used interchangeably, but content design has a broader, more strategic scope.</strong></mark> While a UX writer focuses primarily on crafting the specific microcopy within an interface, a content designer determines the best format, structure, and flow to present information across the entire user journey. [link](https://www.storytellercharles.com/post/ux-writing-vs-content-design-understanding-the-differences-and-overlap)

An easy way to distinguish them is by looking at their primary questions:

- **UX Writer:** "What words should go on this button?"
- **Content Designer:** "Should we use a button here, or would a video, a graphic, or a progress bar solve this user problem better?" [link](https://blog.logrocket.com/ux-design/what-is-content-design/)

---

### Core Comparison

The table below highlights how these roles differ in focus, scope, and execution when treated as separate specialties: [link](https://www.storytellercharles.com/post/ux-writing-vs-content-design-understanding-the-differences-and-overlap)

| Metric            | UX Writing                                                             | Content Design                                                       |
| ----------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Primary Focus** | Microcopy, interface text, and immediate interaction clarity.          | Information architecture, user flows, and overall content strategy.  |
| **Deliverables**  | Button labels, error messages, onboarding screens, tooltips.           | Journey maps, content frameworks, format selection, text copy.       |
| **Scope**         | Highly granular, focusing on interface touchpoints.                    | Holistic, mapping the entire structural layout of information.       |
| **Design Phase**  | Involved early, but heavily active during high-fidelity screen design. | Embedded at inception alongside Product Managers and UX Researchers. |

---

### Key Responsibilities

#### UX Writing: Designing with Words

UX writers act as the final bridge of communication between the software and the user. Their day-to-day responsibilities center around usability and tone: [link](https://uxwritinghub.com/ux-writer/)

- **Crafting Microcopy**: Writing clear, concise labels, error messages, and success states.
- **Maintaining Brand Voice**: Enforcing style guides so the product's tone stays uniform.
- **Reducing Friction**: Identifying confusing interface elements and clarifying them with intuitive text. [link](https://www.nngroup.com/articles/content-strategy-vs-ux-writing/)

#### Content Design: Structuring the Experience

Content designers look at data and user needs to build the scaffolding of the product journey. Their daily work involves structural planning: [link](https://www.reddit.com/r/uxwriting/comments/1dczgvk/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner/)

- **Selecting Mediums**: Deciding if information should be presented as text, a visual chart, an animation, or a tool tip.
- **Information Architecture**: Organizing and labeling content so it is logically grouped and easy to navigate.
- **End-to-End Mapping**: Determining the exact sequence in which information is disclosed to a user during a workflow. [link](https://www.reddit.com/r/uxwriting/comments/1dczgvk/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner/)

---

### Industry Reality: Semantics vs. Practice

In the actual job market, the distinction between these two roles is highly blurred. The operational difference is usually determined by the specific company rather than the job title itself: [link](https://www.reddit.com/r/uxwriting/comments/1dczgvk/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner/)

- **The Title Shift:** Many major tech organizations have phased out the title "UX Writer" in favor of "Content Designer". This change emphasizes that these professionals are not just filling in design mockups with words, but are actively co-designing the functional logic of the product. [link](https://www.reddit.com/r/uxwriting/comments/1dczgvk/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner/)
- **The Shared Skills:** In most mid-sized or smaller companies, a person hired under either title will do both jobs. They will conduct user research, map out the information flow, and write the final microcopy themselves. [link](https://uxwritinghub.com/ux-writing-vs-content-design/)

If you are evaluating these fields for a project or career change, you can explore specialized guides like the [Nielsen Norman Group Analysis](https://www.nngroup.com/articles/content-strategy-vs-ux-writing/) or community perspectives on platforms like the [UX Content Collective](https://uxcontent.com/what-is-ux-writing/) to see how different teams structure these workflows. [link](https://www.nngroup.com/articles/content-strategy-vs-ux-writing/)

---

If you are navigating this space, let me know:

- Are you looking to **hire a professional** or **apply for roles**?
- What is the **size of your current team** or organization?

I can provide tailored advice on which skill sets or hiring profiles will best fit your objectives.

- [link](https://www.reddit.com/r/uxwriting/comments/1dczgvk/ux%5Fwriter%5Fvs%5Fcontent%5Fdesigner/)\
  UX Writer vs. Content Designer?\
  According to a Reddit user, UX writing is more about technical aspects of content design, while content design is more about user ...\
  Reddit
- [link](https://www.reddit.com/r/UXDesign/comments/vsbsn6/can%5Fsomeone%5Fgive%5Fme%5Fa%5Freally%5Fsimple%5Fexplanation/)\
  r/UXDesign on Reddit: Can someone give me a really simple ...\
  Bless and reward whoever spreads this message at your org. I want to include them on my projects but don't really know when or to ...\
  Reddit
- [link](https://www.nngroup.com/articles/content-strategy-vs-ux-writing/)\
  Content Strategy vs. UX Writing - NN/G\
  Definitions of Content Strategy and UX Writing This article outlines how the roles of content strategist and UX writer differ, to ...\
  Nielsen Norman Group

Show all

# . apple hig typography <!-- mentioned on kde hig as a todo -->

Typography

Your typographic choices can help you display legible text, convey an information hierarchy, communicate important content, and express your brand or style.

## [Ensuring legibility](https://developer.apple.com/design/human-interface-guidelines/typography#Ensuring-legibility)

**Use font sizes that most people can read easily.** People need to be able to read your content at various viewing distances and under a variety of conditions. Follow the recommended default and minimum text sizes for each platform — for both custom and system fonts — to ensure your text is legible on all devices. Keep in mind that font weight can also impact how easy text is to read. If you use a custom font with a thin weight, aim for larger than the recommended sizes to increase legibility.

| Platform    | Default size | Minimum size |
| ----------- | ------------ | ------------ |
| iOS, iPadOS | 17 pt        | 11 pt        |
| macOS       | 13 pt        | 10 pt        |
| tvOS        | 29 pt        | 23 pt        |
| visionOS    | 17 pt        | 12 pt        |
| watchOS     | 16 pt        | 12 pt        |

**Test legibility in different contexts.** For example, you need to test game text for legibility on each platform on which your game runs. If testing shows that some of your text is difficult to read, consider using a larger type size, increasing contrast by modifying the text or background colors, or using typefaces designed for optimized legibility, like the system fonts.

Testing a game on a new platform can show where text is hard to read.

Increasing text size and adding visible background shapes can help make text easier to read.

**In general, avoid light font weights.** For example, if you’re using system-provided fonts, prefer Regular, Medium, Semibold, or Bold font weights, and avoid Ultralight, Thin, and Light font weights, which can be difficult to see, especially when text is small.

## [Conveying hierarchy](https://developer.apple.com/design/human-interface-guidelines/typography#Conveying-hierarchy)

**Adjust font weight, size, and color as needed to emphasize important information and help people visualize hierarchy.** Be sure to maintain the relative hierarchy and visual distinction of text elements when people adjust text sizes.

**Minimize the number of typefaces you use, even in a highly customized interface.** Mixing too many different typefaces can obscure your information hierarchy and hinder readability, in addition to making an interface feel internally inconsistent or poorly designed.

**Prioritize important content when responding to text-size changes.** Not all content is equally important. When someone chooses a larger text size, they typically want to make the content they care about easier to read; they don’t always want to increase the size of every word on the screen. For example, when people increase text size to read the content in a tabbed window, they don’t expect the tab titles to increase in size. Similarly, in a game, people are often more interested in a character’s dialog than in transient hit-damage values.

## [Using system fonts](https://developer.apple.com/design/human-interface-guidelines/typography#Using-system-fonts)

Apple provides two typeface families that support an extensive range of weights, sizes, styles, and languages.

**San Francisco (SF)** is a sans serif typeface family that includes the SF Pro, SF Compact, SF Arabic, SF Armenian, SF Georgian, SF Hebrew, and SF Mono variants.

The system also offers SF Pro, SF Compact, SF Arabic, SF Armenian, SF Georgian, and SF Hebrew in rounded variants you can use to coordinate text with the appearance of soft or rounded UI elements, or to provide an alternative typographic voice.

**New York (NY)** is a serif typeface family designed to work well by itself and alongside the SF fonts.

You can download the San Francisco and New York fonts [here](https://developer.apple.com/fonts/).

The system provides the SF and NY fonts in the _variable_ font format, which combines different font styles together in one file, and supports interpolation between styles to create intermediate ones.

Note

Variable fonts support _optical sizing_, which refers to the adjustment of different typographic designs to fit different sizes. On all platforms, the system fonts support _dynamic optical sizes_, which merge discrete optical sizes (like Text and Display) and weights into a single, continuous design, letting the system interpolate each glyph or letterform to produce a structure that’s precisely adapted to the point size. With dynamic optical sizes, you don’t need to use discrete optical sizes unless you’re working with a design tool that doesn’t support all the features of the variable font format.

To help you define visual hierarchies and create clear and legible designs in many different sizes and contexts, the system fonts are available in a variety of weights, ranging from Ultralight to Black, and — in the case of SF — several widths, including Condensed and Expanded. Because SF Symbols use equivalent weights, you can achieve precise weight matching between symbols and adjacent text, regardless of the size or style you choose.

Note

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols) provides a comprehensive library of symbols that integrate seamlessly with the San Francisco system font, automatically aligning with text in all weights and sizes. Consider using symbols when you need to convey a concept or depict an object, especially within text.

The system defines a set of typographic attributes — called text styles — that work with both typeface families. A _text style_ specifies a combination of font weight, point size, and leading values for each text size. For example, the _body_ text style uses values that support a comfortable reading experience over multiple lines of text, while the _headline_ style assigns a font size and weight that help distinguish a heading from surrounding content. Taken together, the text styles form a typographic hierarchy you can use to express the different levels of importance in your content. Text styles also allow text to scale proportionately when people change the system’s text size or make accessibility adjustments, like turning on Larger Text in Accessibility settings.

**Consider using the built-in text styles.** The system-defined text styles give you a convenient and consistent way to convey your information hierarchy through font size and weight. Using text styles with the system fonts also ensures support for Dynamic Type and larger accessibility type sizes (where available), which let people choose the text size that works for them. For guidance, see [Supporting Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type).

**Modify the built-in text styles if necessary.** System APIs define font adjustments — called _symbolic traits_ — that let you modify some aspects of a text style. For example, the bold trait adds weight to text, letting you create another level of hierarchy. You can also use symbolic traits to adjust leading if you need to improve readability or conserve space. For example, when you display text in wide columns or long passages, more space between lines (_loose leading_) can make it easier for people to keep their place while moving from one line to the next. Conversely, if you need to display multiple lines of text in an area where height is constrained — for example, in a list row — decreasing the space between lines (_tight leading_) can help the text fit well. If you need to display three or more lines of text, avoid tight leading even in areas where height is limited. For developer guidance, see [`leading(_:)`](https://developer.apple.com/documentation/SwiftUI/Font/leading%28%5F:%29).

Developer note

You can use the constants defined in [`Font.Design`](https://developer.apple.com/documentation/SwiftUI/Font/Design) to access all system fonts — don’t embed system fonts in your app or game. For example, use [`Font.Design.default`](https://developer.apple.com/documentation/SwiftUI/Font/Design/default) to get the system font on all platforms; use [`Font.Design.serif`](https://developer.apple.com/documentation/SwiftUI/Font/Design/serif) to get the New York font.

**If necessary, adjust tracking in interface mockups.** In a running app, the system font dynamically adjusts tracking at every point size. To produce an accurate interface mockup of an interface that uses the variable system fonts, you don’t have to choose a discrete optical size at certain point sizes, but you might need to adjust the tracking. For guidance, see [Tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#Tracking-values).

## [Using custom fonts](https://developer.apple.com/design/human-interface-guidelines/typography#Using-custom-fonts)

**Make sure custom fonts are legible.** People need to be able to read your custom font easily at various viewing distances and under a variety of conditions. While using a custom font, be guided by the recommended minimum font sizes for various styles and weights in [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications).

**Implement accessibility features for custom fonts.** System fonts automatically support Dynamic Type (where available) and respond when people turn on accessibility features, such as Bold Text. If you use a custom font, make sure it implements the same behaviors. For developer guidance, see [Applying custom fonts to text](https://developer.apple.com/documentation/SwiftUI/Applying-Custom-Fonts-to-Text). In a Unity-based game, you can use [Apple’s Unity plug-ins](https://github.com/apple/unityplugins) to support Dynamic Type. If the plug-in isn’t appropriate for your game, be sure to let players adjust text size in other ways.

## [Supporting Dynamic Type](https://developer.apple.com/design/human-interface-guidelines/typography#Supporting-Dynamic-Type)

Dynamic Type is a system-level feature in iOS, iPadOS, tvOS, visionOS, and watchOS that lets people adjust the size of visible text on their device to ensure readability and comfort. For related guidance, see [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility).

Mail content at the default text size

Mail content at the largest accessibility text size

For a list of available Dynamic Type sizes, see [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications). You can also download Dynamic Type size tables in the [Apple Design Resources](https://developer.apple.com/design/resources/) for each platform.

For developer guidance, see [Text input and output](https://developer.apple.com/documentation/SwiftUI/Text-input-and-output). To support Dynamic Type in Unity-based games, use [Apple’s Unity plug-ins](https://github.com/apple/unityplugins).

**Make sure your app’s layout adapts to all font sizes.** Verify that your design scales, and that text and glyphs are legible at all font sizes. On iPhone or iPad, turn on Larger Accessibility Text Sizes in Settings > Accessibility > Display & Text Size > Larger Text, and confirm that your app remains comfortably readable.

**Increase the size of meaningful interface icons as font size increases.** If you use interface icons to communicate important information, make sure they’re easy to view at larger font sizes too. When you use [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols), you get icons that scale automatically with Dynamic Type size changes.

**Keep text truncation to a minimum as font size increases.** In general, aim to display as much useful text at the largest accessibility font size as you do at the largest standard font size. Avoid truncating text in scrollable regions unless people can open a separate view to read the rest of the content. You can prevent text truncation in a label by configuring it to use as many lines as needed to display a useful amount of text. For developer guidance, see [`numberOfLines`](https://developer.apple.com/documentation/UIKit/UILabel/numberOfLines).

**Consider adjusting your layout at large font sizes.** When font size increases in a horizontally constrained context, inline items (like glyphs and timestamps) and container boundaries can crowd text and cause truncation or overlapping. To improve readability, consider using a stacked layout where text appears above secondary items. Multicolumn text can also be less readable at large sizes due to horizontal space constraints. Reduce the number of columns when the font size increases to avoid truncation and enhance readability. For developer guidance, see [`isAccessibilityCategory`](https://developer.apple.com/documentation/UIKit/UIContentSizeCategory/isAccessibilityCategory).

**Maintain a consistent information hierarchy regardless of the current font size.** For example, keep primary elements toward the top of a view even when the font size is very large, so that people don’t lose track of these elements.

## [Platform considerations](https://developer.apple.com/design/human-interface-guidelines/typography#Platform-considerations)

### [iOS, iPadOS](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS)

SF Pro is the system font in iOS and iPadOS. iOS and iPadOS apps can also use NY.

### [macOS](https://developer.apple.com/design/human-interface-guidelines/typography#macOS)

SF Pro is the system font in macOS. NY is available for Mac apps built with Mac Catalyst. macOS doesn’t support Dynamic Type.

**When necessary, use dynamic system font variants to match the text in standard controls.** Dynamic system font variants give your text the same look and feel of the text that appears in system-provided controls. Use the variants listed below to achieve a look that’s consistent with other apps on the platform.

| Dynamic font variant                        | API                                                                                                                      |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Control content                             | [`controlContentFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/controlContentFont%28ofSize:%29) |
| Label                                       | [`labelFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/labelFont%28ofSize:%29)                   |
| Menu                                        | [`menuFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/menuFont%28ofSize:%29)                     |
| Menu bar                                    | [`menuBarFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/menuBarFont%28ofSize:%29)               |
| Message                                     | [`messageFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/messageFont%28ofSize:%29)               |
| Palette                                     | [`paletteFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/paletteFont%28ofSize:%29)               |
| Title                                       | [`titleBarFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/titleBarFont%28ofSize:%29)             |
| Tool tips                                   | [`toolTipsFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/toolTipsFont%28ofSize:%29)             |
| Document text (user)                        | [`userFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/userFont%28ofSize:%29)                     |
| Monospaced document text (user fixed pitch) | [`userFixedPitchFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/userFixedPitchFont%28ofSize:%29) |
| Bold system font                            | [`boldSystemFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/boldSystemFont%28ofSize:%29)         |
| System font                                 | [`systemFont(ofSize:)`](https://developer.apple.com/documentation/AppKit/NSFont/systemFont%28ofSize:%29)                 |

### [tvOS](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS)

SF Pro is the system font in tvOS, and apps can also use NY.

### [visionOS](https://developer.apple.com/design/human-interface-guidelines/typography#visionOS)

SF Pro is the system font in visionOS. If you use NY, you need to specify the type styles you want.

visionOS uses bolder versions of the Dynamic Type body and title styles and it introduces Extra Large Title 1 and Extra Large Title 2 for wide, editorial-style layouts. For guidance using vibrancy to indicate hierarchy in text and symbols, see [Materials > visionOS](https://developer.apple.com/design/human-interface-guidelines/materials#visionOS).

**In general, prefer 2D text.** The more visual depth text characters have, the more difficult they can be to read. Although a small amount of 3D text can provide a fun visual element that draws people’s attention, if you’re going to display content that people need to read and understand, prefer using text that has little or no visual depth.

**Make sure text looks good and remains legible when people scale it.** Use a text style that makes the text look good at full scale, then test it for legibility at different scales.

**Maximize the contrast between text and the background of its container.** By default, the system displays text in white, because this color tends to provide a strong contrast with the default system background material, making text easier to read. If you want to use a different text color, be sure to test it in a variety of contexts.

**If you need to display text that’s not on a background, consider making it bold to improve legibility.** In this situation, you generally want to avoid adding shadows to increase text contrast. The current space might not include a visual surface on which to cast an accurate shadow, and you can’t predict the size and density of shadow that would work well with a person’s current Environment.

**Keep text facing people as much as possible.** If you display text that’s associated with a point in space, such as a label for a 3D object, you generally want to use _billboarding_ — that is, you want the text to face the wearer regardless of how they or the object move. If you don’t rotate text to remain facing the wearer, the text can become impossible to read because people may view it from the side or a highly oblique angle. For example, imagine a virtual lamp that appears to be on a physical desk with a label anchored directly above it. For the text to remain readable, the label needs to rotate around the y-axis as people move around the desk; in other words, the baseline of the text needs to remain perpendicular to the person’s line of sight.

### [watchOS](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS)

SF Compact is the system font in watchOS, and apps can also use NY. In complications, watchOS uses SF Compact Rounded.

## [Specifications](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications)

You can display emphasized variants of system text styles using symbolic traits. In SwiftUI, use the [`bold()`](https://developer.apple.com/documentation/SwiftUI/Text/bold%28%29) modifier; in UIKit, use [`traitBold`](https://developer.apple.com/documentation/UIKit/UIFontDescriptor/SymbolicTraits-swift.struct/traitBold) in the [`UIFontDescriptor`](https://developer.apple.com/documentation/UIKit/UIFontDescriptor) API. The emphasized weights can be medium, semibold, bold, or heavy. The following specifications include the emphasized weight for each text style.

### [iOS, iPadOS Dynamic Type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-Dynamic-Type-sizes)

- [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [Small](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [Medium](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [Large (default)](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xxLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xxxLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#xSmall)

| Style       | Weight   | Size (points) | Leading (points) | Emphasized weight |
| ----------- | -------- | ------------- | ---------------- | ----------------- |
| Large Title | Regular  | 31            | 38               | Bold              |
| Title 1     | Regular  | 25            | 31               | Bold              |
| Title 2     | Regular  | 19            | 24               | Bold              |
| Title 3     | Regular  | 17            | 22               | Semibold          |
| Headline    | Semibold | 14            | 19               | Semibold          |
| Body        | Regular  | 14            | 19               | Semibold          |
| Callout     | Regular  | 13            | 18               | Semibold          |
| Subhead     | Regular  | 12            | 16               | Semibold          |
| Footnote    | Regular  | 12            | 16               | Semibold          |
| Caption 1   | Regular  | 11            | 13               | Semibold          |
| Caption 2   | Regular  | 11            | 13               | Semibold          |

Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

### [iOS, iPadOS larger accessibility type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-larger-accessibility-type-sizes)

- [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX2](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX3](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX4](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX5](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#AX1)

| Style       | Weight   | Size (points) | Leading (points) | Emphasized weight |
| ----------- | -------- | ------------- | ---------------- | ----------------- |
| Large Title | Regular  | 44            | 52               | Bold              |
| Title 1     | Regular  | 38            | 46               | Bold              |
| Title 2     | Regular  | 34            | 41               | Bold              |
| Title 3     | Regular  | 31            | 38               | Semibold          |
| Headline    | Semibold | 28            | 34               | Semibold          |
| Body        | Regular  | 28            | 34               | Semibold          |
| Callout     | Regular  | 26            | 32               | Semibold          |
| Subhead     | Regular  | 25            | 31               | Semibold          |
| Footnote    | Regular  | 23            | 29               | Semibold          |
| Caption 1   | Regular  | 22            | 28               | Semibold          |
| Caption 2   | Regular  | 20            | 25               | Semibold          |

Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

### [macOS built-in text styles](https://developer.apple.com/design/human-interface-guidelines/typography#macOS-built-in-text-styles)

| Text style  | Weight  | Size (points) | Line height (points) | Emphasized weight |
| ----------- | ------- | ------------- | -------------------- | ----------------- |
| Large Title | Regular | 26            | 32                   | Bold              |
| Title 1     | Regular | 22            | 26                   | Bold              |
| Title 2     | Regular | 17            | 22                   | Bold              |
| Title 3     | Regular | 15            | 20                   | Semibold          |
| Headline    | Bold    | 13            | 16                   | Heavy             |
| Body        | Regular | 13            | 16                   | Semibold          |
| Callout     | Regular | 12            | 15                   | Semibold          |
| Subheadline | Regular | 11            | 14                   | Semibold          |
| Footnote    | Regular | 10            | 13                   | Semibold          |
| Caption 1   | Regular | 10            | 13                   | Medium            |
| Caption 2   | Medium  | 10            | 13                   | Semibold          |

Point size based on image resolution of 144 ppi for @2x designs.

### [tvOS built-in text styles](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS-built-in-text-styles)

| Text style | Weight  | Size (points) | Leading (points) | Emphasized weight |
| ---------- | ------- | ------------- | ---------------- | ----------------- |
| Title 1    | Medium  | 76            | 96               | Bold              |
| Title 2    | Medium  | 57            | 66               | Bold              |
| Title 3    | Medium  | 48            | 56               | Bold              |
| Headline   | Medium  | 38            | 46               | Bold              |
| Subtitle 1 | Regular | 38            | 46               | Medium            |
| Callout    | Medium  | 31            | 38               | Bold              |
| Body       | Medium  | 29            | 36               | Bold              |
| Caption 1  | Medium  | 25            | 32               | Bold              |
| Caption 2  | Medium  | 23            | 30               | Bold              |

Point size based on image resolution of 72 ppi for @1x and 144 ppi for @2x designs.

### [watchOS Dynamic Type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-Dynamic-Type-sizes)

- [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [Small](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [Large](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xxLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [xxxLarge](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [xSmall](https://developer.apple.com/design/human-interface-guidelines/typography#xSmall)

| Style       | Weight   | Size (points) | Leading (points) | Emphasized weight |
| ----------- | -------- | ------------- | ---------------- | ----------------- |
| Large Title | Regular  | 30            | 32.5             | Bold              |
| Title 1     | Regular  | 28            | 30.5             | Semibold          |
| Title 2     | Regular  | 24            | 26.5             | Semibold          |
| Title 3     | Regular  | 17            | 19.5             | Semibold          |
| Headline    | Semibold | 14            | 16.5             | Semibold          |
| Body        | Regular  | 14            | 16.5             | Semibold          |
| Caption 1   | Regular  | 13            | 15.5             | Semibold          |
| Caption 2   | Regular  | 12            | 14.5             | Semibold          |
| Footnote 1  | Regular  | 11            | 13.5             | Semibold          |
| Footnote 2  | Regular  | 10            | 12.5             | Semibold          |

### [watchOS larger accessibility type sizes](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-larger-accessibility-type-sizes)

- [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX2](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [AX3](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [AX1](https://developer.apple.com/design/human-interface-guidelines/typography#AX1)

| Style       | Weight   | Size (points) | Leading (points) | Emphasized weight |
| ----------- | -------- | ------------- | ---------------- | ----------------- |
| Large Title | Regular  | 44            | 46.5             | Bold              |
| Title 1     | Regular  | 42            | 44.5             | Semibold          |
| Title 2     | Regular  | 34            | 41               | Semibold          |
| Title 3     | Regular  | 24            | 26.5             | Semibold          |
| Headline    | Semibold | 21            | 23.5             | Semibold          |
| Body        | Regular  | 21            | 23.5             | Semibold          |
| Caption 1   | Regular  | 18            | 20.5             | Semibold          |
| Caption 2   | Regular  | 17            | 19.5             | Semibold          |
| Footnote 1  | Regular  | 16            | 18.5             | Semibold          |
| Footnote 2  | Regular  | 15            | 17.5             | Semibold          |

### [Tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#Tracking-values)

#### [iOS, iPadOS, visionOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#iOS-iPadOS-visionOS-tracking-values)

- [SF Pro](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [SF Pro Rounded](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [New York](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [SF Pro](https://developer.apple.com/design/human-interface-guidelines/typography#SF-Pro)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.33             |
| 53            | +6                   | +0.31             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [macOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#macOS-tracking-values)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.31             |
| 53            | +6                   | +0.33             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [tvOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#tvOS-tracking-values)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +41                  | +0.24             |
| 7             | +34                  | +0.23             |
| 8             | +26                  | +0.21             |
| 9             | +19                  | +0.17             |
| 10            | +12                  | +0.12             |
| 11            | +6                   | +0.06             |
| 12            | 0                    | 0.0               |
| 13            | -6                   | -0.08             |
| 14            | -11                  | -0.15             |
| 15            | -16                  | -0.23             |
| 16            | -20                  | -0.31             |
| 17            | -26                  | -0.43             |
| 18            | -25                  | -0.44             |
| 19            | -24                  | -0.45             |
| 20            | -23                  | -0.45             |
| 21            | -18                  | -0.36             |
| 22            | -12                  | -0.26             |
| 23            | -4                   | -0.10             |
| 24            | +3                   | +0.07             |
| 25            | +6                   | +0.15             |
| 26            | +8                   | +0.22             |
| 27            | +11                  | +0.29             |
| 28            | +14                  | +0.38             |
| 29            | +14                  | +0.40             |
| 30            | +14                  | +0.40             |
| 31            | +13                  | +0.39             |
| 32            | +13                  | +0.41             |
| 33            | +12                  | +0.40             |
| 34            | +12                  | +0.40             |
| 35            | +11                  | +0.38             |
| 36            | +10                  | +0.37             |
| 37            | +10                  | +0.36             |
| 38            | +10                  | +0.37             |
| 39            | +10                  | +0.38             |
| 40            | +10                  | +0.37             |
| 41            | +9                   | +0.36             |
| 42            | +9                   | +0.37             |
| 43            | +9                   | +0.38             |
| 44            | +8                   | +0.37             |
| 45            | +8                   | +0.35             |
| 46            | +8                   | +0.36             |
| 47            | +8                   | +0.37             |
| 48            | +8                   | +0.35             |
| 49            | +7                   | +0.33             |
| 50            | +7                   | +0.34             |
| 51            | +7                   | +0.35             |
| 52            | +6                   | +0.31             |
| 53            | +6                   | +0.33             |
| 54            | +6                   | +0.32             |
| 56            | +6                   | +0.30             |
| 58            | +5                   | +0.28             |
| 60            | +4                   | +0.26             |
| 62            | +4                   | +0.24             |
| 64            | +4                   | +0.22             |
| 66            | +3                   | +0.19             |
| 68            | +2                   | +0.17             |
| 70            | +2                   | +0.14             |
| 72            | +2                   | +0.14             |
| 76            | +1                   | +0.07             |
| 80            | 0                    | 0                 |
| 84            | 0                    | 0                 |
| 88            | 0                    | 0                 |
| 92            | 0                    | 0                 |
| 96            | 0                    | 0                 |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x and 216 ppi for @3x designs.

#### [watchOS tracking values](https://developer.apple.com/design/human-interface-guidelines/typography#watchOS-tracking-values)

- [SF Compact](https://developer.apple.com/design/human-interface-guidelines/typography#)
- [SF Compact Rounded](https://developer.apple.com/design/human-interface-guidelines/typography#)

#### [SF Compact](https://developer.apple.com/design/human-interface-guidelines/typography#SF-Compact)

| Size (points) | Tracking (1/1000 em) | Tracking (points) |
| ------------- | -------------------- | ----------------- |
| 6             | +50                  | +0.29             |
| 7             | +30                  | +0.21             |
| 8             | +30                  | +0.23             |
| 9             | +30                  | +0.26             |
| 10            | +30                  | +0.29             |
| 11            | +24                  | +0.26             |
| 12            | +20                  | +0.23             |
| 13            | +16                  | +0.20             |
| 14            | +14                  | +0.19             |
| 15            | +4                   | +0.06             |
| 16            | 0                    | 0.00              |
| 17            | -4                   | -0.07             |
| 18            | -8                   | -0.14             |
| 19            | -12                  | -0.22             |
| 20            | 0                    | 0.00              |
| 21            | -2                   | -0.04             |
| 22            | -4                   | -0.09             |
| 23            | -6                   | -0.13             |
| 24            | -8                   | -0.19             |
| 25            | -10                  | -0.24             |
| 26            | -11                  | -0.28             |
| 27            | -12                  | -0.30             |
| 28            | -12                  | -0.34             |
| 29            | -14                  | -0.38             |
| 30            | -14                  | -0.42             |
| 31            | -15                  | -0.45             |
| 32            | -16                  | -0.50             |
| 33            | -17                  | -0.55             |
| 34            | -18                  | -0.60             |
| 35            | -18                  | -0.63             |
| 36            | -20                  | -0.69             |
| 37            | -20                  | -0.72             |
| 38            | -20                  | -0.74             |
| 39            | -20                  | -0.76             |
| 40            | -20                  | -0.78             |
| 41            | -20                  | -0.80             |
| 42            | -20                  | -0.82             |
| 43            | -20                  | -0.84             |
| 44            | -20                  | -0.86             |
| 45            | -20                  | -0.88             |
| 46            | -20                  | -0.92             |
| 47            | -20                  | -0.94             |
| 48            | -20                  | -0.96             |
| 49            | -21                  | -1.00             |
| 50            | -21                  | -1.03             |
| 51            | -21                  | -1.05             |
| 52            | -21                  | -1.07             |
| 53            | -22                  | -1.11             |
| 54            | -22                  | -1.13             |
| 56            | -22                  | -1.20             |
| 58            | -22                  | -1.25             |
| 60            | -22                  | -1.32             |
| 62            | -22                  | -1.36             |
| 64            | -23                  | -1.44             |
| 66            | -24                  | -1.51             |
| 68            | -24                  | -1.56             |
| 70            | -24                  | -1.64             |
| 72            | -24                  | -1.69             |
| 76            | -25                  | -1.86             |
| 80            | -26                  | -1.99             |
| 84            | -26                  | -2.13             |
| 88            | -26                  | -2.28             |
| 92            | -28                  | -2.47             |
| 96            | -28                  | -2.62             |

Not all apps express tracking values as 1/1000 em. Point size based on image resolution of 144 ppi for @2x designs.

## [Resources](https://developer.apple.com/design/human-interface-guidelines/typography#Resources)

#### [Related](https://developer.apple.com/design/human-interface-guidelines/typography#Related)

[Fonts for Apple platforms](https://developer.apple.com/fonts/)

[SF Symbols](https://developer.apple.com/design/human-interface-guidelines/sf-symbols)

#### [Developer documentation](https://developer.apple.com/design/human-interface-guidelines/typography#Developer-documentation)

[Text input and output](https://developer.apple.com/documentation/SwiftUI/Text-input-and-output) — SwiftUI

[Text display and fonts](https://developer.apple.com/documentation/UIKit/text-display-and-fonts) — UIKit

[Fonts](https://developer.apple.com/documentation/AppKit/fonts) — AppKit

#### [Videos](https://developer.apple.com/design/human-interface-guidelines/typography#Videos)

[Get started with Dynamic Type](https://developer.apple.com/videos/play/wwdc2024/10074)

[Meet the expanded San Francisco font family](https://developer.apple.com/videos/play/wwdc2022/110381)

[The details of UI typography](https://developer.apple.com/videos/play/wwdc2020/10175)

## [Change log](https://developer.apple.com/design/human-interface-guidelines/typography#Change-log)

| Date               | Changes                                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| December 16, 2025  | Added emphasized weights to the Dynamic Type style specifications for each platform.                                                                           |
| March 7, 2025      | Expanded guidance for Dynamic Type.                                                                                                                            |
| June 10, 2024      | Added guidance for using Apple’s Unity plug-ins to support Dynamic Type in a Unity-based game and enhanced guidance on billboarding in a visionOS app or game. |
| September 12, 2023 | Added artwork illustrating system font weights, and clarified tvOS specification table descriptions.                                                           |
| June 21, 2023      | Updated to include guidance for visionOS.                                                                                                                      |

# why is it called sf and ny for apple fonts

Apple names its flagship fonts **SF (San Francisco)** and **NY (New York)** <mark>to honor a classic company tradition started by Steve Jobs in 1983</mark>. When the original Macintosh was being developed, Jobs decreed that all system fonts should be named after **"world-class cities"**. [link](https://medium.com/martiancraft-s-syndicate/why-san-francisco-b86bd45f3273)

### The History of the City Names

- **The original 1980s rule:** Legendary Apple designer Susan Kare originally named the first Mac fonts after towns along the Roseburg, Oregon train line (like Eleanor and Genoa). Steve Jobs intervened, demanding grander names. This gave birth to iconic fonts like _Chicago_, _Geneva_, _Monaco_, _Cairo_, and the original _San Francisco_ and _New York_. [link](https://medium.com/martiancraft-s-syndicate/why-san-francisco-b86bd45f3273)
- **The modern revival:** When Apple began designing its own modern typefaces in 2014, it chose to resurrect these exact city names from its roots to signal a return to form. [link](https://medium.com/martiancraft-s-syndicate/why-san-francisco-b86bd45f3273)

### What SF and NY Stand For Today

The two fonts serve completely different visual purposes in the Apple ecosystem:

- **SF (San Francisco):** This is Apple’s signature **sans-serif font** (letters without small feet). Introduced alongside the Apple Watch in 2014, it was engineered for maximum legibility on digital screens. It includes variants like SF Pro, SF Compact, and SF Mono. [link](https://developer.apple.com/fonts/)
- **NY (New York):** This is Apple's companion **serif font** (letters with small feet). Released in 2019, it is a modern reimagining of the historical 1983 typeface, designed to bring a classic, literary tone to apps like Apple Books and Apple Music Classical. [link](https://en.wikipedia.org/wiki/San%5FFrancisco%5F%28sans-serif%5Ftypeface%29)

Would you like to know how to download these fonts for design mockups, or do you want to learn about the technical differences between **SF Pro** and **SF Compact**?

- [link](https://developer.apple.com/fonts/)\
  Fonts - Apple Developer\
  SF Pro is designed to: \* Provide a consistent, legible, and friendly typographic voice \* Adapt intelligently to different contexts...\
  Apple
- [link](https://medium.com/martiancraft-s-syndicate/why-san-francisco-b86bd45f3273)\
  Why San Francisco - by Nick Keppol - Medium\
  Jan 22, 2016 — We got our first glimpse of Apple's new san-serif typeface, San Francisco, when the Apple Watch was unveiled in September of 2014 ...\
  Medium·Nick Keppol
- [link](https://en.wikipedia.org/wiki/San%5FFrancisco%5F%28sans-serif%5Ftypeface%29)\
  San Francisco (sans-serif typeface) - Wikipedia\
  New York. ... New York is a serif font also created by Apple Inc. It was introduced as SF Serif (codename Serif UI) at WWDC 2018 a...\
  Wikipedia

Show all

## why sf for sans and ny for serif

Apple chose **San Francisco for the sans-serif font** and **New York for the serif font** by <mark>matching the visual style of each typeface with the cultural identity and architectural vibe of the city it represents</mark>.

### Why San Francisco is Sans-Serif

- **Modern aesthetic:** San Francisco is a global hub for the high-tech industry and forward-thinking design.
- **Clean layout:** Sans-serif fonts feature clean, geometric lines without decorative feet.
- **Industrial vibe:** The style perfectly mirrors the sleek, utilitarian architecture of the West Coast tech world.
- **Digital utility:** The minimalist structure makes it highly readable on small screens like the Apple Watch.

### Why New York is Serif

- **Traditional aesthetic:** New York City represents historic publishing, literature, and the birthplace of classic American print media.
- **Classic layout:** Serif fonts feature small decorative strokes, or "feet," at the ends of the letters.
- **Editorial vibe:** The style mirrors the timeless, established look of newspapers like _The New York Times_.
- **Literary utility:** The elegant, bookish structure makes it ideal for reading long-form text in applications like Apple Books.

If you want to dive deeper, I can explain how these fonts **dynamically change their shapes** based on text size, or show you how to **install them on a Windows PC** for design work. Which direction should we go?

- [link](https://www.namecheap.com/guru-guides/sans-serif-vs-serif-font-styles/)\
  Sans Serif vs. Serif: What’s The Difference, And What’s Best?\
  Apr 20, 2026 — 2. Apple As one of the largest consumer technology companies out there, it's no surprise that Apple opts for the modern, digital-f...\
  \
  \
  Namecheap
- [link](https://medium.muz.li/https-medium-com-ayadighait-apple-released-a-serif-font-6bd697520955)\
  Apple released a serif font: What that tells us about the state of visual design | by Ayadi Ghaith | Muzli\
  Jul 23, 2019 — Apple released a serif font: What that tells us about the state of visual design So Apple just dropped Serif font. Much like All S...\
  \
  \
  Muzli - Design inspiration hub
- [link](https://geniusee.com/single-blog/font-readability-research-famous-designers-vs-scientists)\
  Font Readability Research: Serif vs Sans Serif Font\
  Jun 30, 2021 — Sans serif font Sans is a French word meaning “without”. Thus, a sans serif is a typeface that has no traces or lines extending fr...\
  \
  \
  Geniusee

Show all

# . thinking

apple places accessibility at first. it's deeply flawed.

anyway seems it sorts alphabetically.

i think it doesnt solve the problem. it's simply an excuse or workaround.

i mean, in textbook/wiki, you should sort things alphabetically unless you want ppl to read like this.

and i think it's already flawed just to place things like "privacy" "accessibilty" "inclusivity".

things are technical. things should be technical. these are not.

yeah. elitism. right wing. i definitely believe it. and it's absolutely wrong to place left ideas in docs, meant to be served for everyone.

# what does content design include

11:39 AM

<mark><strong>Content design includes using data and evidence to determine the most effective format and structure for information so users can complete tasks easily</strong></mark>**.** While it relies heavily on language, it is a holistic problem-solving discipline rather than just a writing role. It ensures that information is delivered to the user at the exact moment they need it, in a format that makes sense. [link](https://uxcontent.com/content-design/)

### Core Pillars of Content Design

- **User Research:** Analyzing user feedback, search analytics, and testing to understand vocabulary and behaviors.
- **Information Architecture:** Mapping out sitemaps, structural hierarchies, navigation flows, and labels across an application.
- **Format Selection:** Determining if text, a calculator, a chart, or video is best to solve a user problem.
- **Interface Text (UX Writing):** Crafting concise microcopy like button labels, onboarding screens, tooltips, and clear error messages.
- **Systems & Governance:** Building scalable style guides, terminology frameworks, content heuristics, and localized content systems. [link](https://uxcontent.com/content-design/)

### Content Design vs. Related Fields

| Discipline           | Primary Focus                                | Key Deliverables                                |
| -------------------- | -------------------------------------------- | ----------------------------------------------- |
| **Content Design**   | How information solves a user problem        | User journeys, wireframe logic, format strategy |
| **UX Writing**       | Microcopy inside the interface panels        | Button text, form field prompts, error states   |
| **Content Strategy** | High-level business governance and timelines | Audits, content calendars, channel taxonomies   |
| **Copywriting**      | Persuasion, conversion, and driving sales    | Ads, landing pages, marketing email campaigns   |

To look deeper into standard frameworks, you can review the foundation guides established by [Sarah Winters via Content Design London](https://contentdesign.london/blog/what-is-content-design) who originally pioneered the discipline. [link](https://contentdesign.london/blog/what-is-content-design)

Are you looking to **transition into a content design role**, or are you looking to **integrate content design principles** into an existing project?

- [link](https://www.reddit.com/r/UXDesign/comments/vsbsn6/can%5Fsomeone%5Fgive%5Fme%5Fa%5Freally%5Fsimple%5Fexplanation/)\
  r/UXDesign on Reddit: Can someone give me a really simple ...\
  Content Designers should be included in any meetings where a Product Designer is invited. As a Product Designer, it would be good ...\
  Reddit
- [link](https://uxcontent.com/content-design/)\
  What is content design? A complete guide\
  Defining content design: meaning, scope, and practice Content design is the practice of identifying user needs and designing conte...\
  UX Content Collective
- [link](https://uxcontent.com/11-key-content-design-considerations/)\
  11 key content design considerations\
  Interested in content design? Check out our complete guide to content design (and how it's different from UX writing). I'm a conte...\
  UX Content Collective

Show all

## what does format selection include

<mark><strong><span>Format selection includes choosing the most effective asset type to present information based on data, user needs, and context.</span></strong></mark> Content designers evaluate how people process information to decide whether text, data visualization, or an interactive tool will best solve a user problem. It moves the focus away from "how do we write this?" to "what is the best medium for this?"

### Key Elements of Format Selection

- **User Intent Assessment:** Analyzing if a user needs to compare, calculate, learn, or decide.
- **Context Mapping:** Matching the format to the user's emotional state, device, and physical environment.
- **Accessibility Evaluation:** Ensuring the chosen format complies with WCAG guidelines for screen readers and assistive tech.
- **Cognitive Load Minimization:** Selecting formats that reduce mental effort, such as using a bulleted list instead of a heavy paragraph.
- **Asset Auditing:** Deciding between static formats like text and dynamic formats like interactive tools or audio.

### Common Formats and When to Use Them

- **Interactive Tools:** Calculators, wizards, and decision trees for complex, personalized calculations.
- **Data Visualizations:** Charts, graphs, and timelines for patterns, trends, or numerical comparisons.
- **Structured Text:** Bulleted lists, tables, and step-by-step guides for instructions or reference data.
- **Visual Media:** Videos, diagrams, and illustrations for spatial layouts or emotional storytelling.
- **Progressive Disclosure:** Accordions and tooltips to hide deep technical details until requested.

If you are working on a specific feature, tell me **what information you need to present** or **what your user is trying to accomplish**. I can help you select the ideal format for it.

- [link](https://guides.library.illinois.edu/ideals/prepare%5Ffiles%5Ffor%5Fdeposit)\
  Prepare Files for Deposit - IDEALS - LibGuides at University of Illinois at Urbana-Champaign\
  Feb 20, 2026 — What is the best format to provide content in? Outside of our file format recommendations (based on preservability), you should al...\
  \
  University of Illinois LibGuides
- [link](https://birdeatsbug.com/blog/wcag-success-criteria)\
  Complete Guide to WCAG 2.1 Success Criteria | Bug Tracking Blog\
  Oct 16, 2025 — How To Meet WCAG 2.1 Success Criteria Successfully meeting WCAG 2.1 success criteria requires thoughtful design decisions and reli...\
  \
  \
  Bird Eats Bug
- [link](https://www.pandadoc.com/blog/documentation-format/)\
  Mastering Documentation Format, Documentation Formatting Examples\
  Oct 12, 2023 — Accessibility Ensure that the chosen format is accessible to all potential readers, including those with disabilities. This might ...\
  \
  \
  PandaDoc

Show all

## what does ux writing include

<mark><strong><span>UX writing includes crafting the text users see and interact with inside a digital product's user interface.</span></strong></mark> Its primary goal is to guide users through an app, website, or software smoothly and intuitively. While content design looks at the broader strategy and format, UX writing focuses heavily on the specific language, microcopy, and tone used at every touchpoint of the user journey.

### Core Deliverables of UX Writing

- **Button Copy (CTAs):** Writing clear, action-oriented text for buttons like "Get Started" or "Save Draft."
- **Onboarding Flows:** Crafting welcome screens, quick tutorials, and setup guides for new users.
- **Error Messages:** Explaining exactly what went wrong, why it happened, and how to fix it without blame.
- **Form Labels & Placeholders:** Directing users on what information to enter in input fields and how to format it.
- **Tooltips & Helper Text:** Providing contextual clues and hints when a feature might confuse a user.
- **Success states:** Writing encouraging confirmation messages when a user finishes a task, like completing a purchase.
- **Empty States:** Guiding users on what step to take next when a screen has no data yet.

### Key Principles of Great UX Writing

- **Clarity First:** Prioritizing simple, unambiguous words over clever or jargon-filled language.
- **Conciseness:** Using the fewest words possible to deliver information without losing meaning.
- **Consistency:** Adhering strictly to established product glossaries, punctuation rules, and terms across screens.
- **Inclusivity:** Ensuring language is accessible, gender-neutral, and easily translated into other languages.
- **Tone Modulation:** Adjusting the emotional resonance (e.g., serious during a security breach, celebratory during a win).

Are you currently **writing copy for a specific feature** (like an error message or onboarding flow), or are you building a **product style guide**?

- [link](https://uxcontent.com/what-is-ux-writing/)\
  What is UX Writing? A Full Guide from UX Content Collective\
  Apr 21, 2025 — 1. What is UX writing? UX writing involves crafting the text that appears within digital products, such as buttons, menus, error m...\
  \
  \
  UX Content Collective
- [link](https://www.skillshare.com/en/blog/ux-writing-fundamentals-for-beginners/?srsltid=AfmBOooaCuRN1z7rqyWcQ8PBzcBMf9PCa7e7cP6TX8HOw3EdUUueV0z0)\
  UX Writing: Fundamentals for Beginners\
  Aug 14, 2024 — What is UX Writing? Three screens from a financial management app displayed side by side. The app features a bright blue, pink and...\
  \
  \
  Skillshare
- [link](https://ixdf.org/literature/topics/ux-writing)\
  What is UX Writing? — updated 2026\
  Mar 6, 2026 — How does UX writing differ from traditional copywriting? UX writing focuses on creating copy that enhances the user experience wit...\
  \
  \
  IxDF

Show all

# is accessibility highly influenced by politics

**Yes, accessibility is highly influenced by politics because it directly involves power, policy development, and the allocation of public resources.** Without political backing, accessibility standards often remain unenforced guidelines rather than societal realities. [link](https://buttondown.com/access-ability/archive/all-accessibility-is-political-understanding-the/)

Politics shapes the physical and digital landscape of accessibility through several core areas.

### Legislation and Policy Enforcement

- **Legal frameworks**: Groundbreaking legislation like the Americans with Disabilities Act (ADA) or the UN Convention on the Rights of Persons with Disabilities (CRPD) only exists because of political mobilization and legislative action. [link](https://www.youtube.com/watch?v=2iB%5FBcOUDKE\&t=467)
- **Enforcement gaps**: The existence of a law does not guarantee compliance. Underfunded federal or local agencies often under-enforce accessibility standards unless pushed by political leadership. [link](https://journalistsresource.org/home/barriers-to-voting-for-people-with-disabilities-an-explainer-and-research-roundup/)
- **Policy reversals**: Changes in political administrations can directly impact how aggressively civil rights laws are protected, directly affecting voting, civic, and consumer protections. [link](https://www.americanprogress.org/article/how-the-biden-harris-administration-is-ensuring-voting-accessibility/)

### Funding and Infrastructure Allocation

- **Resource competition**: Built environments require significant public funding. Budgets for accessible public transportation, curb cuts, and public buildings must be approved by politicians. [link](https://www.forbes.com/sites/andrewpulrang/2020/07/06/if-accessibility-is-important-to-you-tell-your-local-candidates/)
- **Project vulnerability**: Without continuous political will, funding earmarked for accessibility upgrades is frequently diverted to other municipal projects. [link](https://dl.acm.org/doi/10.1145/3432908)

### Access to Democracy

- **Voting barriers**: The ease with which disabled individuals can vote is highly dependent on state-level politics. Political choices regarding mail-in voting, signature-matching laws, and polling place setups create direct structural hurdles to civic participation. [link](https://www.americanprogress.org/article/enhancing-accessibility-u-s-elections/)
- **Representation**: People with disabilities are historically underrepresented in elected offices. Political party structures, campaign funding rules, and physical stage designs heavily impact whether disabled candidates can run for office. [link](https://www.tandfonline.com/doi/full/10.1080/09687599.2020.1751075)

### Digital and Civil Rights

- **Public portals**: Digital accessibility affects access to emergency updates, education, healthcare, and employment. Political commitments dictate whether government apps and commercial websites are legally mandated to be screen-reader or keyboard-navigable. [link](https://www.marinscope.com/digital-accessibility-as-a-political-commitment)

AI can make mistakes, so double-check responses

- [link](https://www.americanprogress.org/article/enhancing-accessibility-u-s-elections/)\
  Enhancing Accessibility in U.S. Elections\
  Jul 8, 2021 — Among disabled voters who voted in person and required assistance last year, one-sixth did not receive the help they needed. \* Ina...\
  Center for American Progress
- [link](https://journalistsresource.org/home/barriers-to-voting-for-people-with-disabilities-an-explainer-and-research-roundup/)\
  Barriers to voting for people with disabilities: A research roundup\
  Feb 6, 2024 — The findings show… \* People with disabilities are less likely to vote than people without disabilities and state laws that restric...\
  The Journalist's Resource
- [link](https://www.americanprogress.org/article/how-the-biden-harris-administration-is-ensuring-voting-accessibility/)\
  How the Biden-Harris Administration Is Ensuring Voting Accessibility\
  Oct 9, 2024 — The good news is that during the last presidential election, in 2020, disabled people participated in record numbers. Nearly 62 pe...\
  Center for American Progress

Show all

# what does it mean if sth is highly influenced by politics

If something is **highly influenced by politics**, it means its existence, development, or daily operation is heavily shaped by government power, political agendas, and ideological debates rather than just facts, logic, or free markets.

### Key Characteristics

- **Bias Over Objectivity:** Decisions prioritize political gain or party ideology over neutral, evidence-based facts.
- **Funding Dependencies:** Money and resources are granted or withheld based on who is in power.
- **Frequent Shifts:** Rules, leadership, and directions change rapidly whenever a new government is elected.
- **Public Controversy:** The topic often becomes a polarizing debate in the media and among citizens.

### Common Examples

- **Science and Public Health:** Decisions on vaccine rollouts, climate change policies, or research funding are often delayed or altered to align with political platforms.
- **The Judicial System:** The appointment of judges or the enforcement of specific laws can be steered by the political leanings of the ruling party.
- **Entertainment and Media:** News coverage, movie themes, and school textbooks are frequently altered to support or critique a specific government narrative.
- **The Economy:** Interest rates, corporate subsidies, and international trade deals are often used as tools to win votes rather than purely optimize financial growth.

***

To better understand this, would you like to explore a specific example, such as how politics influences **scientific research**, **the economy**, or **public education**?

AI can make mistakes, so double-check responses

- [link](https://ystudios.com/insights-place/environment-influences)\
  INSIGHTS | Place | Y Studios — How Our Environment Influences Our Life\
  Jul 25, 2019 — Political and Economic Influences Every governing body has a direct impact on our lives, regardless of whether or not each individ...\
  \
  \
  ystudios.com
- [link](https://www.saltwire.com/atlantic-canada/how-politics-affects-our-lives-83887)\
  How Politics Affects Our Lives | PNI Atlantic News\
  Jan 29, 2010 — The second common myth is “Politics doesn't affect my life.” Every aspect of our daily lives is influenced by politics. From how m...\
  \
  PNI Atlantic News

## why is it unwise to interact w such things

Interacting with highly political things can be exhausting and counterproductive.

Here is why it is often unwise to get involved:

### 1. Loss of Objectivity

- **Distorted Facts:** Political topics are filled with misinformation and heavy spin.
- **Emotional Manipulation:** Content is designed to trigger anger or fear, not logic.
- **Echo Chambers:** You risk losing a balanced view of reality.

### 2. High Personal Costs

- **Damaged Relationships:** Arguing over politics can permanently ruin friendships and family bonds.
- **Professional Risk:** Expressing strong political views can hurt your career or employment status.
- **Mental Burnout:** Constant exposure to polarizing debates causes high stress and anxiety.

### 3. Illusion of Impact

- **Wasted Energy:** Arguing online or debating partisan issues rarely changes anyone's mind.
- **Hidden Agendas:** You may be used as a pawn to boost someone else's power or media clicks.
- **Distraction:** It takes your focus away from practical things you can actually control in your life.

***

Are you currently dealing with a specific situation, like a **difficult conversation with coworkers**, a **divisive topic online**, or **political stress at home**? I can share tips on how to protect your peace.

- [link](https://medium.com/@patrick-oh-sglion65/why-people-fear-discussing-politics-power-conflict-and-belief-a33b10dc9304)\
  Why People Fear Discussing Politics: Power, Conflict, and Belief\
  Mar 6, 2025 — 4. Misinformation & Complexity of Political Issues Politics is a complex field, requiring knowledge of history, economics, law, an...\
  \
  \
  Medium
- [link](https://medium.com/practical-growth/blowing-up-how-emotional-reactivity-is-destroying-your-life-and-everyone-elses-too-fcdaaa9cc1b5)\
  Emotional Reactivity Is Destroying Your Life | Practical Growth\
  Mar 9, 2023 — Political parties also vie for your emotional bandwidth in order to more easily manipulate your votes and the actions that you tak...\
  \
  \
  Medium
- [link](https://brinkleybrown.com/how-to-keep-politics-from-ruining-your-family-relationships/)\
  How to Keep Politics From Ruining Your Family Relationships - Mental Health Therapists\
  Nov 7, 2025 — How to Keep Politics From Ruining Your Family Relationships In today's world, few topics create as much tension around the dinner ...\
  \
  \
  Brinkley Brown Mental Wellness

Show all


