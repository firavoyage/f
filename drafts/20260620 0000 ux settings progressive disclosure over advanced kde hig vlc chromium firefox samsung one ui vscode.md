what does kde hig say on advanced settings

The \*\***[KDE Human Interface Guidelines (HIG)](https://develop.kde.org/hig/)** explicitly state that developers should **avoid hiding settings on pages or views named "Advanced"**. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

The guideline, structured under KDE’s core "Powerful when needed" design mantra, outlines a specific approach to managing complex configurations without relying on a generic "Advanced" tab: \[[1](https://blogs.kde.org/2016/02/08/hig-about-simple-vs-advanced-settings/), [2](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

### 1. The Word "Advanced" is Meaningless

The HIG notes that the distinction between a "basic" and an "advanced" setting depends entirely on an individual user's needs and workflow. Labeling a category as "Advanced" communicates nothing concrete to the user about what configuration options are actually contained inside. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

### 2. Use Progressive Disclosure Instead

Rather than segmenting the interface into strict "Basic vs. Advanced" pages, the guidelines mandate a **progressive disclosure model**. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

- **Simplified Presentation**: A view should first present data or settings in a highly simplified form.
- **Contextual Access**: Optional, non-critical, or complex details should be tucked into a **sub-page, separate window, or a collapsed view** tied directly to the relevant item. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

### Example of the Right Approach

The HIG points to the **System Settings' Colors page** as the gold standard for this practice: \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

- **The Simplified View**: The user is presented with a simple accent color feature and a grid of installed color schemes.
- **The Hidden Power View**: To access deeper customization, the user clicks an explicit action button ("Edit" on a specific scheme), which opens a separate window where the color scheme can be fully configured. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

This method ensures that the user understands exactly what contents they are about to modify before they interact with the deeper layer of the interface. \[[1](https://develop.kde.org/hig/powerful%5Fwhen%5Fneeded/)]

If you are developing a specific application, would you like advice on **how to structure a particular settings page** using Kirigami layouts, or do you want to look at examples of **progressive disclosure** in other system modules? \[[1](https://pointieststick.com/category/user-interface-design/), [2](https://community.kde.org/KDE%5FVisual%5FDesign%5FGroup/System%5FSettings%5FApplication)]

- [link](https://blogs.kde.org/2016/02/08/hig-about-simple-vs-advanced-settings/)\
  HIG about Simple vs. Advanced Settings - KDE Blogs\
  Feb 8, 2016 — Purpose. The settings dialog provides user-customizable options how an application or plasma (KCM) should behave. The dialog is in...\
  KDE Blogs
- [link](https://pointieststick.com/category/user-interface-design/)\
  Category: User Interface Design - Adventures in Linux and KDE\
  Jul 25, 2024 — The new HIG had the following design goals: \* Make 100% of the content actionable. No filler text, no rambling philosophy, no redu...\
  Adventures in Linux and KDE
- [link](https://community.kde.org/KDE%5FVisual%5FDesign%5FGroup/System%5FSettings%5FApplication)\
  KDE Visual Design Group/System Settings Application\
  Mar 15, 2016 — UI Patterns A simple menu button or toolbar + menu button command pattern was chosen. The navigation pattern chosen for the overvi...\
  KDE

Show all

## You said: example how currently advanced settings would become if they had adopted kde philosophy

To transform a traditional, messy "Advanced" settings panel into the clean KDE style, you must replace the generic "Advanced" tab with **progressive disclosure** and **contextual actions**.

Here is a practical example of how a standard network settings page transforms when adopting the KDE philosophy.

### 1. The Traditional "Before" Design (Anti-Pattern)

In a traditional setup, you have a tabbed interface. The first tab is labeled "General" and the second is labeled "Advanced."

- **General Tab:**
  - Wi-Fi Name (SSID)
  - Password field
  - "Connect Automatically" checkbox
- **Advanced Tab (The generic bucket):**
  - IPv4 / IPv6 manual configuration
  - DNS Server IP fields
  - Proxy configuration toggle and URL
  - MAC Address Cloning setting

**Why KDE rejects this:** A user looking to change their DNS server has to guess that DNS falls under "Advanced," which is a meaningless bucket term.

***

### 2. The KDE Philosophy "After" Design

KDE eliminates the "Advanced" tab entirely. Instead, everything is grouped by **topic**, and complex features are hidden behind **contextual inline actions**.

- **Main Connection View (Simple & Focused):**
  - Wi-Fi Name (SSID)
  - Password field
  - "Connect Automatically" checkbox
  - _Visual Break / Section Header:_ **IP & DNS Routing**
  - A simple dropdown: "IP Address: \[ Automatic (DHCP) v ]"
- **The Progressive Disclosure Step:**
  - If the user changes the dropdown from "Automatic" to "**Manual**", the UI smoothly expands inline (or opens a sub-page) to reveal the specific IP, Gateway, and DNS fields.
  - _Visual Break / Section Header:_ **Proxy & Security**
  - A single, clear button: **"Configure Proxy Settings..."** or **"Spoof MAC Address..."** Clicking these opens a dedicated modal dialog or sub-view.

***

### Key Takeaways of the Transformation

- **No Guesswork:** Settings are grouped by function (IP, Proxy, MAC), not by how "hard" they are.
- **Clean by Default:** The page looks incredibly simple when you first open it.
- **Revealed on Demand:** Deep configuration options only appear when the user actively selects an action that requires them.

Would you like to see how to implement this using **Kirigami code components** (like `FormLayout`), or do you want to redesign a **specific settings page** you are currently working on?

## You said: example how currently advanced settings in vlc would become if they had adopted kde philosophy

If VLC completely adopted the **KDE Human Interface Guidelines (HIG)**, its famous **"Simple vs. All" radio button toggle** at the bottom of the preferences window would be entirely removed.

Instead of a massive, overwhelming tree view containing thousands of variables labeled as "Advanced", VLC would use **Progressive Disclosure** to surface technical features contextually.

***

### The Current Anti-Pattern in VLC

Currently, if a user wants to fix an audio syncing delay or change network streaming lag, they have to click **"All"** under Show Settings. They are immediately confronted with a daunting, unfiltered Linux-style configuration tree containing raw code components, plugin modules, and variables like `file-caching`, `network-caching`, and `clock-synchro`.

***

### The KDE Redesign: Subtitles & Audio Delay

Here is how two specific settings would transform if redesigned according to KDE philosophy:

### 1. Audio Synchronization Settings

- **VLC's Current Way:** In the "All" tree, the user must navigate down through _Audio_ → _Output modules_ → _Filters_ to find millisecond offset inputs.
- **The KDE Redesign:**
  - The user goes to the main, friendly **Audio** tab.
  - They see a standard slider for volume and a dropdown for the audio device.
  - Directly below the device picker, there is a section header labeled **"Timing & Sync"** with a single contextual link button: **"Adjust Audio/Video Alignment..."**.
  - Clicking this button reveals a small inline expanding tray with a slider to shift audio milliseconds forward or backward. The option is kept next to the basic audio controls because that is what it modifies.

### 2. Network Stream Caching (Buffer Size)

- **VLC's Current Way:** The user must open "All" settings, click _Input / Codecs_, scroll to the bottom, and manually type a number into a box labeled `Network caching (ms)`.
- **The KDE Redesign:**
  - The user goes to the main **Input & Codecs** tab.
  - They see a clean dropdown menu: `"Connection Speed Optimization: [ Normal Default v ]"`.
  - If they change it to `"Custom Buffer"`, a sub-option instantly slides open smoothly beneath it, allowing them to type in the exact caching milliseconds or choose presets (e.g., "Slow Wi-Fi", "Local Network").

***

### Comparison of Layout Philosophies

| Feature             | Current VLC "Advanced" Mode                              | KDE Philosophy Redesign                                       |
| ------------------- | -------------------------------------------------------- | ------------------------------------------------------------- |
| **Access Method**   | A global radio button changes the entire program layout. | Options stay exactly where their basic counterparts live.     |
| **Categorization**  | Arbitrary bucket based on developer difficulty.          | Functional grouping based on the task (Audio, Subtitles).     |
| **Interface Style** | Giant, raw text tree view listing developer variables.   | Visual sub-menus, expanding forms, and modal dialogs.         |
| **Discoverability** | Blind searching through deep sub-folders.                | Natural discovery via contextual "Configure..." action links. |

By eliminating the generic "Advanced" categorization, the app becomes **"Powerful when needed"** without scaring away casual users with a literal command-line configuration tree embedded inside a settings window.

Are there other heavy utility media features in VLC you would like to map out, or should we look at how **Kirigami layouts handle this** using expanders and contextual buttons?

- [link](https://ixdf.org/literature/topics/progressive-disclosure)\
  What is Progressive Disclosure? — updated 2026 | IxDF\
  Feb 22, 2023 — Progressive disclosure's goal is to improve usability for novice and experienced users. Progressive disclosure aims to show users ...\
  IxDF
- [link](https://www.sciencedirect.com/topics/computer-science/progressive-disclosure)\
  Progressive Disclosure - an overview | ScienceDirect Topics\
  Progressive Disclosure, in the context of Computer Science, refers to a dynamic method of grouping and simplifying content by disp...\
  ScienceDirect.com
- [link](https://medium.com/@mahfuzbd86/understanding-the-4-key-variants-of-progressive-disclosure-in-ux-design-7513c5360cb4)\
  Understanding the 4 Key Variants of Progressive Disclosure in UX Design | by Mahfuzur Rahman | Medium\
  Feb 25, 2026 — There are four types of progressive disclosure: \* \*\*Contextual disclosure\*\* Supporting details or explanations are presented exact...\
  Medium

Show all

## You said: how does chromium or firefox embrace this philosophy

Both **Google Chromium** and **Mozilla Firefox** fully embrace the KDE philosophy of progressive disclosure and functional grouping. Neither browser uses a generic, all-encompassing "Advanced" settings tab anymore. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]

They achieve a "simple by default, powerful when needed" layout through three primary interface patterns. \[[1](https://medium.com/@akshataa1004/progressive-disclosure-unveiling-information-at-the-right-time-for-optimal-user-experience-98757ccd8ff2)]

***

### 1. The Death of the "Advanced" Menu

Historically, both browsers had dedicated advanced buckets (Chrome used a dropdown at the very bottom of the page, and Firefox had an "Advanced" gear tab). Today, both have eliminated them completely. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]

Settings are organized strictly by **topic** (e.g., Performance, Privacy, Downloads) rather than difficulty. A casual user changing their download folder and a developer tweaking hardware acceleration will find their respective tools under the same "General" or "System" categories, differentiated only by visual hierarchy. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]

***

### 2. Chromium's Approach: Inline Expanders and Sub-pages

Chromium (Google Chrome) leans heavily into **inline progressive disclosure** and deep-linking to hide technical details until requested. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR), [2](https://www.newsletter.swirlai.com/p/agent-skills-progressive-disclosure)]

- **The Simplified View:** Under _Privacy and Security_ → _Clear Browsing Data_, Chromium presents a clean modal with just three basic checkboxes: Browsing history, Cookies, and Cached images. \[[1](https://www.aaronline.com/2021/01/08/how-to-control-and-delete-cookies-on-your-browser/)]
- **Contextual Elevation:** Right next to the tab title "Basic", there is a tab labeled "Advanced". However, this isn't a global advanced bucket; it is _strictly advanced options for clearing data_ (like clearing autofill form data or site settings). The complexity is confined exactly to the tool the user is interacting with.
- **The Sub-page Pattern:** Under _Performance_, Chromium shows a simple toggle for "Memory Saver". The deep, technical configuration—adding specific web domains to an exclusion list—is hidden entirely until the user clicks an explicit action button: **"Add"**.

***

### 3. Firefox's Approach: Section Toggles and Search Injection

Firefox handles complex features by embedding them directly below basic settings, utilizing subtle section headings and smart search behavior. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]

- **The Simplified View:** In Firefox Settings, under the _General_ tab, you will find a simple _Network Settings_ header showing whether you are connected. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR), [2](https://au.pcmag.com/system-performance/65735/mozilla-just-made-firefox-more-private-and-secure-for-us-users)]
- **Contextual Revelation:** There are no proxy settings cluttering the screen. Instead, there is a single, contextual action button at the bottom of the section: **"Settings..."**. Clicking this opens a dedicated modal window exclusively for proxy, DNS over HTTPS, and connection configurations. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]
- **The "Search to Disclose" Pattern:** Firefox relies heavily on its global settings search bar. If you scroll through the UI naturally, highly technical features like "FIPS security modules" or raw TLS settings are entirely hidden to keep the interface clean. However, if a power user types "TLS" or "Certificates" into the search bar, the UI dynamically injects those hidden, hyper-specific sub-panels right into view. \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)]

***

### Summary of Browser Implementation

| Design Tactic \[[1](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR), [2](https://www.aaronline.com/2021/01/08/how-to-control-and-delete-cookies-on-your-browser/), [3](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2009/EECS-2009-139.pdf), [4](https://medium.com/@johnphamous/customizing-firefox-quantums-about-config-8cbc6950bca4), [5](https://medium.com/@michaelswengel/this-firefox-replacement-actually-respects-your-privacy-e2ecbf3a4e98)] | Chromium Implementation                                                  | Firefox Implementation                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **Complex Networking**                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Tucked into a nested **"System"** sub-page.                              | Isolated behind a dedicated **"Settings..." button** inline.                            |
| **Experimental/Raw Tweaks**                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Isolated completely outside normal settings in `chrome://flags`.         | Isolated completely outside normal settings in `about:config`.                          |
| **Privacy Configurations**                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Simple toggles that reveal domain-specific exception lists when clicked. | Quick presets ("Standard" vs "Strict") that expand to show individual blocking details. |

By using these boundaries, both browsers prevent regular users from suffering from cognitive overload while ensuring that power users don't lose the fine-grained control they require. \[[1](https://medium.com/@akshataa1004/progressive-disclosure-unveiling-information-at-the-right-time-for-optimal-user-experience-98757ccd8ff2)]

Would you like to explore **how Chromium and Firefox handle their hidden power-user environments** (`about:config` and `chrome://flags`), or should we look at how to design an open-source settings app using these exact patterns?

- [link](https://medium.com/@akshataa1004/progressive-disclosure-unveiling-information-at-the-right-time-for-optimal-user-experience-98757ccd8ff2)\
  Progressive Disclosure: Unveiling Information at the Right ...\
  Jun 10, 2024 — ... upfront can lead to cognitive overload and decision paralysis. Instead, it advocates for a more nuanced approach, where inform...\
  Medium·Akshataa
- [link](https://acorn.firefox.com/latest/desktop/patterns/browser-settings-txAMsYCR)\
  Browser settings - Acorn Design System - Firefox\
  The majority of customization for overarching browsing features (e.g., Translations, Startup, Permissions) will then tend to live ...\
  Acorn Design System
- [link](https://www.newsletter.swirlai.com/p/agent-skills-progressive-disclosure)\
  Agent Skills: Progressive Disclosure as a System Design Pattern\
  Mar 11, 2026 — Progressive disclosure is a well-established design pattern, formalized by the Nielsen Norman Group for user interface design. The...\
  SwirlAI Newsletter

Show all

## You said: how does samsung one ui settings embrace this philosophy

**Samsung One UI** heavily embraces the KDE philosophy of progressive disclosure by organizing settings strictly by **functional topic** and shifting the screen layout to lower visual weight. \[[1](https://medium.com/design-bootcamp/progressive-disclosure-showing-information-gradually-9f47bbd92f24), [2](https://design.samsung.com/global/contents/one-ui/)]

Historically, Samsung’s older skin (TouchWiz) was notorious for the exact anti-pattern KDE fights against: a chaotic maze of nested tabs and checkboxes. One UI completely inverted this. While Samsung _does_ have a root folder titled "Advanced Features," it is used exclusively for platform integrations (like Android Auto, Link to Windows, and Multi-window tools) rather than technical variables. \[[1](https://www.youtube.com/watch?v=qm51IlrCjNo\&t=280), [2](https://design.samsung.com/global/contents/one-ui/)]

To handle raw technical depth without generic buckets, One UI utilizes four specific layout behaviors:

### 1. The Reachability Division (Visual Separation)

One UI splits menus into two distinct spatial zones to focus the user’s mind:

- **The Viewing Zone (Top)**: The upper 30–40% of the display shows giant, human-readable titles, massive status icons, or simple toggle summaries. \[[1](https://news.samsung.com/global/interview-how-designers-have-made-one-uis-usability-even-better-for-galaxy-users)]
- **The Action Zone (Bottom)**: All interactable settings live in the bottom half of the screen, grouped closely together so the thumb can reach them easily. \[[1](https://news.samsung.com/za/samsungs-one-ui-a-singular-smartphone-experience)]

By pushing actual configuration options further down the screen, casual users can read what a menu does before interacting with any individual inputs.

### 2. Contextual Expansion and Radio Summaries

Instead of giving a technical option its own page, One UI collapses highly complex configurations underneath broad toggle components. \[[1](https://medium.com/@liana.ghazaryan1995/progressive-disclosure-in-saas-ux-designing-for-clarity-and-control-672643fccfbd), [2](https://medium.com/design-bootcamp/progressive-disclosure-showing-information-gradually-9f47bbd92f24)]

- **Example (Battery Care)**: In the **Device Care** module, a user sees a straightforward menu option for "Battery Protection".
- **The Disclosure**: Instead of checking a basic on/off box, tapping the option smoothly opens a sub-menu showing visual cards explaining different charging limit profiles (Basic, Adaptive, or Maximum). The complex logic of background automation is wrapped in user-friendly terminology right where battery health is handled. \[[1](https://www.youtube.com/watch?v=WMKOMRaCvJY\&t=5), [2](https://medium.com/design-bootcamp/progressive-disclosure-showing-information-gradually-9f47bbd92f24), [3](https://www.xda-developers.com/one-ui-4-beta-features-overview/), [4](https://android.gadgethacks.com/how-to/all-new-features-changes-samsungs-one-ui-2-for-galaxy-devices-0213686/)]

### 3. "Looking For Something Else?" (Smart Links)

To avoid burying cross-functional features into arbitrary folders, Samsung embeds a dynamic section at the very bottom of almost every single setting menu.

- If you are under **Display**, you might be trying to adjust the touch sensitivity of a screen protector.
- Instead of digging through a nested system menu, the bottom of the Display page features a contextual recommendation block that reads: _"Looking for something else? -> Touch Sensitivity."_ Clicking it teleports the user directly to the relevant toggle, preserving functional grouping. \[[1](https://ixdf.org/literature/topics/progressive-disclosure), [2](https://www.cnet.com/tech/mobile/galaxy-s9-settings-to-change-right-away/)]

### 4. Hyper-Advanced "Sandbox" Modules

For extreme customization and raw variables that would instantly fail KDE's simplicity guidelines, Samsung isolates the configurations cleanly outside the standard settings app:

- **Developer Options**: To prevent accidental changes, the raw Android system tree is completely invisible. It requires the deliberate, secret action of tapping the OS Build Number 7 times to reveal itself at the absolute bottom of the app directory. \[[1](https://www.samsung.com/us/support/answer/ANS10003430/), [2](https://www.nngroup.com/articles/progressive-disclosure/), [3](https://www.youtube.com/watch?v=LXRGvheSWqA\&t=17)]
- **Good Lock & Labs**: Instead of bloating the core setting menus with granular experimental UI choices, Samsung ships standalone apps like **Good Lock**. Within core apps like the photo gallery, power users can uncover **"Gallery Labs"** by repeatedly tapping the app version code. This creates a hard wall: the core settings stay completely pristine and human-friendly, while enthusiasts get direct access to micro-adjustments. \[[1](https://www.youtube.com/watch?v=goLKLbJpJX4), [2](https://www.nngroup.com/articles/progressive-disclosure/), [3](https://www.instagram.com/reel/DZpSLE3yzL1/), [4](https://www.instagram.com/reel/DOb6EN-Da0p/), [5](https://www.slashgear.com/1623030/samsung-galaxy-gallery-apps-features/)]

Would you like to design a mobile application layout that mirrors **One UI’s top-viewing/bottom-acting reachability model**, or should we break down how another major operating system structures its menus?

- [link](https://medium.com/@liana.ghazaryan1995/progressive-disclosure-in-saas-ux-designing-for-clarity-and-control-672643fccfbd)\
  Progressive Disclosure in SaaS UX: Designing for Clarity and Control\
  Jun 25, 2025 — We used progressive disclosure in several ways: \* Tabbed Navigation by Category. We grouped settings into logical categories like ...\
  Medium·Liana Ghazaryan
- [link](https://design.samsung.com/global/contents/one-ui/)\
  One Thought, One UI\
  Mar 8, 2018 — One UI's design principles include: \* \*\*One keeps consistency\*\* One UI brings all smart device experiences together into a uniform...\
  Design Samsung
- [link](https://www.youtube.com/watch?v=goLKLbJpJX4)\
  How to customize One UI 8.5!\
  Jun 1, 2026 — so you've had 1 UI 8.5 installed on your device for a while now You want to know what to do with it Well I'm going to show you som...\
  11:51\
  YouTube·SamMobile

Show all

## You said: how does vscode embrace this philosophy

\*\***VS Code** is arguably the ultimate realization of the KDE philosophy at a massive scale. It handles an incredibly complex environment—thousands of settings for programming languages, compilers, and extensions—without using a generic "Advanced" tab. \[[1](https://socfortress.medium.com/visual-studio-code-vs-code-secure-installation-cis-hardening-guide-part-i-9843e1571ffb), [2](https://artoonsolutions.com/glossary/visual-studio-code/), [3](https://pullflow.com/blog/cursor-vs-code-fragmentation/)]

Instead, VS Code achieves a "simple by default, powerful when needed" layout using **deep progressive disclosure**, a **split GUI/JSON interface**, and **dynamic search scoping**. \[[1](https://javascript.plainenglish.io/my-ultimate-vs-code-setup-with-plugins-and-shortcuts-9fcc5392fe5d)]

***

### 1. Unified Functional Hierarchy (No "Advanced" Bucket)

If you open VS Code’s Settings UI (`Ctrl+,` or `Cmd+,`), you will not find an "Advanced" tab in the sidebar. Instead, every single configuration option is sorted strictly by **where it applies in your workflow**: \[[1](https://www.sitepoint.com/visual-studio-code-power-user-guide/), [2](https://blog.devgenius.io/change-to-vs-code-an-overview-with-a-minimal-setup-for-data-science-a67ba2e42571)]

- **User vs. Workspace**: Grouped by scope (global settings vs. project-specific settings).
- **Functional Categories**: _Text Editor, Workbench, Window, Features, Application, and Extensions._ \[[1](https://code.visualstudio.com/docs/getstarted/personalize-vscode), [2](https://vscode-docs.readthedocs.io/en/stable/customization/userandworkspace/), [3](https://developer.salesforce.com/blogs/2020/05/productive-development-with-visual-studio-code)]

Whether you are changing a simple font size or configuring a hyper-technical regex pattern for file exclusions, both options live together under the **Text Editor** tree.

***

### 2. Dual-Layer Progressive Disclosure (GUI to JSON)

VS Code natively handles the gap between casual users and core power users by maintaining two parallel representations of the exact same settings configuration.

### Layer 1: The Clean GUI (Simple Form Layouts)

By default, settings are rendered as a clean web form. Technical variables are hidden behind descriptive, human-readable labels.

- **The Simplified View**: Under _Text Editor_ → _Files_, you see a simple checkbox for "Auto Save."
- **Contextual Action Expansion**: For more complex settings like file formatting rules, VS Code provides a clean dropdown menu. If you need to edit complex object mappings, it doesn't clutter the UI with text boxes. Instead, it shows a single link button: **"Edit in settings.json"**.

### Layer 2: The Raw Sandbox (`settings.json`) \[[1](https://tms-outsource.com/blog/posts/what-is-vscode/)]

Clicking that contextual link bypasses the visual UI entirely and opens the underlying code file (`settings.json`). This is the equivalent of Firefox's `about:config`.

- The GUI keeps the interface approachable for quick tweaks.
- The JSON file gives developers direct, unbound access to raw variables, key-value pairs, and structural arrays without bloating the visual menus.

***

### 3. Dynamic Search Scoping

Because a developer can install dozens of extensions (each adding their own configuration options), navigating a manual tree folder would be impossible. VS Code relies heavily on **Search Injection**. \[[1](https://medium.com/analytics-vidhya/visual-studio-v-s-vs-code-ide-or-editor-find-out-what-you-need-make-an-informed-choice-5bb2a4f48ec2)]

- When you type a keyword like "Format" or "Git" into the settings search bar, VS Code instantly flattens the entire folder hierarchy.
- It dynamically surfaces only the precise inputs related to your query, complete with their extension origins. Highly niche, deeply technical options are invisible during normal navigation but appear instantly the exact second you explicitly ask for them. \[[1](https://code.visualstudio.com/docs/agent-customization/overview)]

***

### 4. Extensions Isolation \[[1](https://vscode-docs1.readthedocs.io/en/latest/extensionAPI/patterns-and-principles/)]

Rather than creating a global "Extension Settings" dumping ground, VS Code forces extension developers to map their custom configurations directly into the main sidebar tree.

- If you install a Git extension, its complex configurations don't hidden under an advanced plugin tab.
- They smoothly inject themselves directly into the core **Features** or **Extensions** categories, adopting the exact same visual hierarchy and layout rules as the native text editor settings.

Would you like to explore **how to structure extension settings in a manifest file** to match this philosophy, or do you want to look at how another heavy desktop application manages its configuration layout?

- [link](https://socfortress.medium.com/visual-studio-code-vs-code-secure-installation-cis-hardening-guide-part-i-9843e1571ffb)\
  Visual Studio Code (VS Code) — Secure Installation & CIS Hardening Guide — Part I\
  Jan 25, 2026 — Extremely Rich Extension Ecosystem The VS Code Marketplace contains tens of thousands of extensions, including: This allows organi...\
  \
  \
  SOCFortress – Medium
- [link](https://artoonsolutions.com/glossary/visual-studio-code/)\
  What is Visual Studio Code? Code Editor for Developers\
  VS Code ( Visual Studio Code ) supports a wide range of extensions that add functionality, such as language support, debuggers, li...\
  \
  Artoon Solutions
- [link](https://pullflow.com/blog/cursor-vs-code-fragmentation/)\
  The VS Code Fork Dilemma: Innovation at the Cost of Fragmentation?\
  Jul 24, 2025 — VS Code ( Visual Studio Code ) didn't just win; it won by empowering its community. And that's what makes the current situation so...\
  \
  \
  PullFlow

Show all

## You said: what do you think of vscode offering commonly used instead of advanced

The choice by VS Code to feature a **"Commonly Used"** section at the very top of its settings sidebar is a brilliant, highly effective design pattern that perfectly aligns with the spirit of the KDE Human Interface Guidelines.

By replacing an "Advanced" tab with a "Commonly Used" shortcut, VS Code flips the psychology of the interface from **exclusion to inclusion**.

Here is a breakdown of why this approach works so well and how it solves the core problems of settings design:

### 1. It Uses Positive Selection, Not Negative Labels

Labeling something as "Advanced" is inherently negative: it creates a psychological barrier telling the user, _"You might not be smart or experienced enough to touch this."_\
Conversely, **"Commonly Used"** is welcoming. It says, _"Here is what 90% of people come here to do."_ It doesn't gatekeep the rest of the settings; it simply highlights a shortcut gallery of high-traffic items (like Font Size, Tab Size, and Auto Save).

### 2. It Preserves a Single, Flattened Hierarchy

In a traditional "Basic vs. Advanced" split, a setting is forced into one bucket or the other. This creates a massive discovery problem: if a user wants to change their cursor blinking style, is that basic or advanced?\
VS Code solves this by keeping the cursor settings exactly where they belong logically (_Text Editor → Cursor_). The "Commonly Used" section doesn't pull the setting out of its natural home; it merely creates a **visual mirror** or pointer to it at the top of the page. The core tree structure remains completely uncompromised and organized strictly by function.

### 3. It Scales Dynamically with the Product

An "Advanced" tab is static and highly subjective—what a developer considers advanced today might be standard tomorrow. "Commonly Used," however, can be entirely data-driven. Telemetry can dictate exactly which settings appear in that list based on actual user behavior across the global ecosystem. If a new feature suddenly becomes a critical part of modern workflows, it can seamlessly float into the "Commonly Used" section without a designer needing to debate whether it is "advanced enough."

### 4. It Accelerates the "Time-to-Task"

Most users open a settings panel to fix a minor friction point, not to browse. By placing a punchy list of the top 6 or 7 most adjusted variables right at the landing zone, VS Code ensures that the vast majority of users never have to scroll, expand a tree, or type a single keyword into the search bar. They get in, fix their font or indentation, and get right back to writing code.

### The Summary Verdict

Featuring "Commonly Used" instead of "Advanced" is the gold standard of **progressive disclosure**. It respects the user's time by surfacing immediate answers to common problems, while keeping 100% of the application's deepest power completely accessible just one click below.

If you were to implement a similar shortcut section in your own project, do you want to look at **how to determine what qualifies as "commonly used"** without relying on intrusive tracking, or should we discuss **how to visually style a shortcut section** so it doesn't clutter the main menu?

## You said: what do you think from the ux perspective

From a strict **User Experience (UX) perspective**, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">substituting "Commonly Used" for "Advanced" is a masterclass in reducing <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">cognitive load</strong> and optimizing <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">user workflows</strong></mark>. \[[1](https://www.creative-blend.co.uk/the-psychological-theories-behind-effective-ux-design/)]

Here is how this design choice maps directly to core UX principles, behavioral psychology, and usability heuristics:

### 1. It Drastically Reduces Interaction Cost \[[1](https://medium.com/design-bootcamp/70-ways-to-get-started-in-ux-and-product-design-d1b5939dd384)]

According to Hick’s Law, the time it takes to make a decision increases with the number and complexity of choices. \[[1](https://medium.com/design-bootcamp/understanding-users-a-psychology-driven-approach-to-ux-design-e45400275bcc), [2](https://medium.com/design-bootcamp/design-for-the-human-mind-how-cognitive-science-shapes-ux-design-f0b83e3da6b6)]

- **The Problem:** VS Code has thousands of settings. Forcing a user to hunt through folders to fix something simple like a font size creates immense friction.
- **The Solution:** The "Commonly Used" section acts as a UX shortcut. By putting the most high-traffic toggles on the initial landing screen, the application satisfies the **80/20 rule** (80% of users only ever touch 20% of the settings). It drops the interaction cost to nearly zero for the majority of visits. \[[1](https://outwitly.com/resources/ux-design-when-not-to-go-mobile-first/)]

### 2. It Leverages "Recognition over Recall" \[[1](https://ux247.com/usability-principles/)]

One of Jakob Nielsen’s core usability heuristics is _Recognition Rather Than Recall_.\
When a user opens settings, they might not remember the exact technical term for what they want to fix (e.g., they might not recall the phrase "Tab Size" or "Insert Spaces"). When they see a clean list of "Commonly Used" items right in front of them, their brain instantly recognizes the visual option: _"Ah, yes, there is 'Tab Size' right there."_ They don't have to strain their memory or guess what folder it lives in. \[[1](https://uxdesign.cc/the-subtle-difference-between-ui-ux-design-809749afcb89)]

### 3. It Prevents the "Anxiety of the Unknown" \[[1](https://riseuplabs.com/ux-design-examples/)]

In UX design, labeling a button "Advanced" triggers a psychological phenomenon known as **action anxiety**. Users worry that entering that space might allow them to permanently break the application or change a setting they don't understand.\
"Commonly Used" acts as a psychological safety blanket. It signals to the user that everything on this screen is safe, standard, and heavily tested by peers. It builds confidence and encourages exploration. \[[1](https://uxdesign.cc/12-tips-for-better-product-usability-48a7889a38db)]

### 4. It Maintains "Information Architecture" Integrity \[[1](https://technicalwriterhq.com/career/ux-writer-vs-technical-writer/)]

Good UX relies on a predictable system of classification. A major flaw of an "Advanced" tab is that it destroys your Information Architecture (IA) by grouping things by _difficulty_ rather than _functionality_. \[[1](https://www.linkedin.com/posts/bgsmartin%5Fim-now-two-months-into-a-role-thats-more-activity-7466140722631569408-mNOc)]

- **The Advanced Flaw:** Splitting settings into basic and advanced forces a user to maintain a fragmented mental map of the app.
- **The Shortcut Success:** A "Commonly Used" section is an overlay, not a structural folder. It acts like a "Favorites" bar in a web browser. The underlying architecture remains pure and organized logically by system components, while the user gets a frictionless fast-lane.

### 5. It Avoids the "Expert Bias" Trap

Product developers often suffer from the "Curse of Knowledge"—they assume users know the system as well as they do. What a developer thinks is a "basic" setting might feel incredibly advanced to a beginner.\
By shifting the metric from **Skill Level (Basic vs. Advanced)** to **Frequency of Use (Common vs. Niche)**, the UX becomes completely objective and user-centric, stripping away developer bias entirely. \[[1](https://uxpsychology.substack.com/p/bridging-the-gap-navigating-the-curse), [2](https://www.useberry.com/blog/challenging-assumptions-in-ux-design/), [3](https://blog.prototypr.io/5-tips-to-start-practicing-ux-design-92e39919040a), [4](https://supercharge.design/blog/29-ui-ux-design-skills-you-need-to-have), [5](https://academic.oup.com/iwc/article/23/5/473/660020)]

If you are designing an interface, would you like to map out **how to implement a "Commonly Used" shortcut layer** for your specific layout, or should we look at **how to handle the visual transition** when a user decides to move past the common settings into the deeper menus?

- [link](https://www.creative-blend.co.uk/the-psychological-theories-behind-effective-ux-design/)\
  The psychological theories behind effective UX design\
  How it this relevant to UX? According to a 2020 study: Reducing cognitive load leads to all-around better user experience (UX), le...\
  \
  \
  www.creative-blend.co.uk
- [link](https://medium.com/design-bootcamp/70-ways-to-get-started-in-ux-and-product-design-d1b5939dd384)\
  70 ways to get started in UX and product design\
  Apr 18, 2021 — The sum of these is called interaction costs. We want to keep interaction costs low by making our UX flows as easy as possible to ...\
  \
  \
  Medium
- [link](https://medium.com/design-bootcamp/understanding-users-a-psychology-driven-approach-to-ux-design-e45400275bcc)\
  Understanding Users: A Psychology-Driven Approach to UX Design\
  Jul 7, 2024 — Hick's Law states that the time it takes to make a decision increases with the number of choices presented. Simplifying choices an...\
  \
  \
  Medium

Show all

## You said: what do you think of vscode not having fuzzy search in settings and commands, unlike gnome apps search or one ui

From a UX and architectural perspective, VS Code’s decision to limit aggressive fuzzy matching in its Settings UI and Command Palette—while mobile platforms like Samsung One UI and desktop shells like GNOME prioritize it—is a deliberate choice dictated by **user intent** and **muscle memory**. \[[1](https://github.com/microsoft/vscode/issues/1964)]

VS Code actually _does_ use fuzzy matching when you are searching for filenames (`Ctrl+P`) or code symbols (`Ctrl+T`), but it deliberately scales it back for settings and commands. \[[1](https://levelup.gitconnected.com/fuzzy-searches-in-vs-code-tips-to-increase-developer-focus-and-productivity-6809c0f3ce9a)]

The structural divide reveals key insights into how different environments handle search.

***

### 1. The Muscle Memory Problem (Command Palette vs. GNOME)

The VS Code development team noted that the primary issue with fuzzy matching is that it requires **dynamic fuzzy sorting**—shifting the most "relevant" results to the top based on a changing algorithm. \[[1](https://github.com/microsoft/vscode/issues/1964)]

- **VS Code's Goal**: The Command Palette relies entirely on muscle memory. Developers expect that typing `g i r` will _always_ pull up "Git: Rebase" in the exact same list position every time. True fuzzy search constantly shifts the index of the result list depending on what extensions are installed, destroying predictable, rapid keystroke habits. \[[1](https://github.com/microsoft/vscode/issues/1964)]
- **GNOME's Goal**: A desktop environment search is built for discovery and fault tolerance. If a user types `chrom`, GNOME needs to guess whether they want Google Chrome, Chromium, or a file named "chromebook\_receipt.pdf". It favors high recall (finding anything close) over precision. \[[1](https://news.ycombinator.com/item?id=33856544)]

### 2. High Density Precision vs. "Fat-Finger" Tolerance

The physical nature of the device drastically changes what constitutes "good UX."

- **Samsung One UI**: Designed for touchscreens and one-handed mobile use. Users frequently mistype letters due to keyboard sizes or walking while texting. Mobile searches _must_ use aggressive fuzzy logic (e.g., matching "btery" to "Battery") to counteract human input errors.
- **VS Code**: Tailored for power users sitting at a physical QWERTY keyboard. The cost of a typo is low, but the cost of noise is high. If a developer types `editor.tabSize`, they want options that strictly match that specific token string. Dropping in dozens of fuzzy adjacent matches (like `editor.fontSize`) creates cognitive clutter on a high-density screen. \[[1](https://bitfieldconsulting.com/posts/vs-code-go), [2](https://marketplace.visualstudio.com/items?itemName=rbaumier.go-to-fuzzy), [3](https://www.youtube.com/watch?v=5J01Qsc9Bjg)]

### 3. The Structural Nature of JSON Keys

VS Code settings are fundamentally code properties inside an underlying `settings.json` file.\
Because these targets are namespaces (`workbench.activityBar.location`), search behaves like a text filter rather than a natural language engine. If you use deep fuzzy matching on a namespace string, almost every single setting in the app would match a 4-letter query, rendering the search bar completely useless. Instead, VS Code uses **sub-string filtering and keyword mapping**, which keeps results isolated and accurate. \[[1](https://marketplace.visualstudio.com/items?itemName=zaidalsaheb.search-preview), [2](https://code.visualstudio.com/docs/configure/settings), [3](https://medium.com/towardsdev/visual-studio-code-settings-for-python-development-025b3d5ff4fe)]

***

### Summary Architectural Contrast

| Feature \[[1](https://github.com/microsoft/vscode/issues/1964), [2](https://www.turing.com/blog/vs-code-shortcuts-and-productivity-hacks), [3](https://marketplace.visualstudio.com/items?itemName=rbaumier.go-to-fuzzy)] | VS Code (Commands / Settings)                                      | GNOME Shell / One UI                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **Primary Input**                                                                                                                                                                                                         | Physical Keyboard (High Speed)                                     | Touchscreen / Global Hotkey (Variable Speed)                                 |
| **UX Metric**                                                                                                                                                                                                             | **Predictability**: List index must stay stable for muscle memory. | **Serendipity**: Finding the target even with major typos or partial memory. |
| **Result Type**                                                                                                                                                                                                           | Strict, functional text filters matching specific namespaces.      | Aggressive, broad database sweeps handling natural language.                 |

If you are building an interface, would you like to explore **how to code a prefix-matching algorithm** that protects muscle memory, or should we look at **how to design custom keyboard shortcuts** in VS Code to bypass searching altogether?

- [link](https://levelup.gitconnected.com/fuzzy-searches-in-vs-code-tips-to-increase-developer-focus-and-productivity-6809c0f3ce9a)\
  Fuzzy Searches in VS Code: Tips to increase developer focus and productivity | by Thomaz Moura\
  Feb 19, 2020 — You can use fuzzy search by: \* \*\*Filename search\*\* Use the native key binding \`ctrl+P\` \* \*\*Symbol search\*\* Use the native key bind...\
  Level Up Coding
- [link](https://github.com/microsoft/vscode/issues/1964)\
  Add fuzzy search to commands in palette · Issue #1964 - GitHub\
  Jan 12, 2016 — The issue with fuzzy matching is that you also need to do fuzzy sorting: more relevant results to the top. However for the command...\
  GitHub
- [link](https://marketplace.visualstudio.com/items?itemName=zaidalsaheb.search-preview)\
  Search Preview - Visual Studio Marketplace\
  Jul 8, 2025 — How to Use. Quick Open with Preview. Search Search Preview: Quick Open with Preview in the command pallete to open the enhanced qu...\
  Visual Studio Marketplace

Show all

## You said: what do you think of vscode not having fuzzy search in settings and commands, unlike gnome apps search or one ui. i mean fuzzy search like music to elisa, image to inkscape, convert to lowercase to transform to lowercase, prettier to format document

The examples provided highlight **semantic/synonym search** rather than basic character-level fuzzy search (like matching "btery" to "Battery"). What is being described is a **conceptual map**—the ability to type a generic category like "music" and have the system understand you mean a specific program like Elisa, or typing a functional intent like "convert to lowercase" and having it match "transform to lowercase."

From a UX perspective, VS Code's lack of this semantic synonym search in its Command Palette and settings is a **massive missed opportunity for user onboarding**, but a **deliberate engineering boundary** to maintain raw speed and control.

This layout choice creates specific pros and cons:

### 1. The Onboarding Tax (The Downside)

For a new user or someone switching from an ecosystem like Neovim or JetBrains, VS Code's search can feel incredibly rigid.

- **The Intent Gap**: If you type "prettier," you want the editor to run your formatting command. VS Code expects you to know that the engine-level command is actually titled **"Format Document"**. \[[1](https://www.reddit.com/r/vscode/comments/1jfqiyz/i%5Fmade%5Fan%5Fextension%5Fto%5Flet%5Fyou%5Ffuzzy%5Ffind%5Ffiles/)]
- **Cognitive Load**: Forcing the user to recall the _exact developer terminology_ used by the core team or an extension author violates the fundamental UX rule of prioritizing **Recognition over Recall**. It turns a tool meant for fast actions into a barrier where you have to pause your workflow to Google the correct phrase.

### 2. Why GNOME and One UI Can Do It (Scope and Scale)

Desktop environments and mobile operating systems handle a much narrower, predictable scope.

- **Limited Mapping**: A system designer can easily create a manual alias file mapping "music" to Elisa, or "image/drawing" to Inkscape because the app roster is relatively fixed.
- **System Indexing**: Mobile OS shells use heavyweight semantic indexing backends that can handle natural language queries without noticeably hurting system speed.

### 3. The Technical Hard Wall in VS Code

VS Code doesn't implement this type of semantic mapping for three critical reasons:

- **The Extension Explosion**: VS Code has tens of thousands of community extensions. If the core engine tried to guess synonyms for every custom command injected by third-party developers, the search index would become completely polluted with conflicting guesses. \[[1](https://medium.com/@siamsoftlab/the-dawn-of-a-new-era-google-antigravity-and-the-question-of-visual-studio-codes-future-51fcb0a6d190)]
- **Performance overhead**: In a massive workspace, the Command Palette must open and filter _instantly_ (under 10-20 milliseconds) with every keystroke. Running a natural-language semantic model or cross-checking a massive dictionary of synonyms with every letter typed would introduce noticeable latency.
- **The Command Palette's Secret Filter**: VS Code actually expects extension developers to add these aliases manually in their configuration manifests using keywords. For example, if a developer builds a formatting extension, they are supposed to tag it under the "Format" category so it appears when you search that keyword. When extensions fail to do this, the experience breaks down for the user.

### How VS Code is Bridging the Gap

The VS Code team recognizes this exact limitation. Instead of bloating the core offline search input with localized dictionaries, recent updates have started integrating **semantic AI search tools** directly into the interface. The global search bar now features a hybrid mode where power users can leverage localized Large Language Models (LLMs) via Github Copilot to handle natural language intents like "make this file a list of lowercase items". \[[1](https://stackoverflow.com/questions/35184509/make-selected-block-of-text-uppercase), [2](https://code.visualstudio.com/updates/), [3](https://github.com/BeaconBay/ck)]

If you are building an application registry, would you like to see **how to manually implement alias keywords** into an app's manifest file to fix this, or do you want to look at **how to structure extension categories** so they are easy to find?

- [link](https://github.com/BeaconBay/ck)\
  BeaconBay/ck: Local first semantic and hybrid BM25 grep / search ...\
  Features: Multiple Search Modes: Toggle between Semantic, Regex, and Hybrid search with Tab. Preview Modes: Switch between Heatmap...\
  GitHub
- [link](https://code.visualstudio.com/updates/)\
  October 2023 (version 1.84) - Visual Studio Code\
  Like the Command Palette, the Settings editor now runs a similar settings search to gather more relevant results for a given query...\
  Visual Studio Code
- [link](https://stackoverflow.com/questions/35184509/make-selected-block-of-text-uppercase)\
  visual studio code - Make selected block of text uppercase\
  Feb 3, 2016 — Now CTRL + SHIFT + U will capitalise selected text, even if multi line. In the same way, CTRL + SHIFT + L will make selected text ...\
  Stack Overflow

Show all

## You said: what do you think from the ux perspective

From a strict **User Experience (UX) perspective**, <mark style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 500; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">the absence of semantic and synonym search creates a sharp divide between <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">novice learnability</strong> and <strong style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; font-weight: 600; margin: 0px; text-decoration: none solid rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">expert efficiency</strong></mark>.

By forcing users to match the exact string of a command rather than their mental model of the task, VS Code prioritizes predictable automation at the cost of intuition.

***

### 1. The Clash of Mental Models

In UX design, a **mental model** is what the user _believes_ a system does, while the **system model** is how the system _actually_ works. \[[1](https://www.devinterface.com/en/blog/ux-design-for-outstanding-user-experiences), [2](https://developerrelations.com/talks/how-to-apply-ux-principles-and-methods-to-api-usability/), [3](https://www.softwareevaluation.de/en/foundations/mental-models-in-hci/)]

- **The UX Failure:** When a user types "convert to lowercase," their mental model is focused on the _outcome_. VS Code’s system model, however, requires the user to know the exact developer-defined label: `"Transform to Lowercase"`.
- **The Cognitive Friction:** This forces the user to pause, translate their human intent into developer jargon, and guess synonyms until a result appears. This breaks the state of "flow" that is critical for programmers. \[[1](https://www.uxpin.com/studio/blog/cognitive-friction-good-or-bad/)]

### 2. Violation of the "Fault Tolerance" Principle

Good UX dictates that a system should be resilient to human variation. A user shouldn't be penalized for thinking of a tool as a "beautifier" or "prettier" instead of a "formatter." \[[1](https://medium.com/design-bootcamp/how-ux-design-plays-a-major-role-in-our-daily-life-8a56f3eb144c)]

- **Mobile/Desktop (One UI & GNOME):** Embrace fault tolerance. They act as helpful concierges. If you type a generic category ("music"), they gracefully bridge the gap to the specific tool ("Elisa").
- **VS Code:** Operates with zero fault tolerance in this context. It acts like a strict terminal interface disguised as a modern GUI. If you don't know the exact keyword, the system effectively tells you that the command does not exist.

### 3. The Power-User Justification: Speed & Determinism

Despite these clear usability flaws for beginners, this strictness serves a highly specific UX goal for advanced professionals: **deterministic behavior**.

- For an expert developer, the Command Palette is an extension of their keyboard shortcuts. They type at blistering speeds using muscle memory (e.g., hitting `Ctrl+P`, typing `low`, and hitting `Enter` to lowercase text).
- If VS Code introduced a fluid, semantic search engine, typing `low` might suddenly surface a "Lower Audio volume" extension command or a "Low-contrast theme" toggle depending on a changing semantic algorithm.
- By keeping the search strictly string-based, the UX remains **100% predictable**. The same sequence of keystrokes will yield the exact same result every single day, which is the ultimate goal for professional productivity tools.

***

### The Verdict: A Missing "Onboarding" Layer

The ideal UX compromise—which VS Code currently lacks in its core search bar—is a **layered alias system**.

A perfect implementation would preserve strict string-matching for speed, but include a lightweight, static synonym dictionary under the hood. Typing "prettier" shouldn't trigger a complex AI calculation; it should simply look at a hardcoded list of tags and say: `prettier -> see: Format Document`. This would instantly rescue the onboarding experience for newer users without degrading performance or predictability for experts.

If you were designing a search interface for a complex app, would you like to map out **how to structure a static alias dictionary** to solve this issue, or should we look at **how to design visual search hints** that teach users the correct terminology while they type?

- [link](https://www.devinterface.com/en/blog/ux-design-for-outstanding-user-experiences)\
  UX Design for outstanding user experiences\
  Sep 2, 2024 — 7. Respect users' mental models First of all, a menta model is " what the user believes about the system (web, application, or oth...\
  \
  \
  DevInterface
- [link](https://developerrelations.com/talks/how-to-apply-ux-principles-and-methods-to-api-usability/)\
  How to apply UX principles and methods to API usability\
  So, a mental model is a user's understanding of how a system works; which can be wrong sometimes. In contrast, you might also have...\
  \
  \
  developerrelations.com
- [link](https://www.softwareevaluation.de/en/foundations/mental-models-in-hci/)\
  Mental Models in HCI | UX & Usability Toolkit\
  Nov 27, 2025 — system model - how the system actually works technically\
  \
  \
  www.softwareevaluation.de

Show all