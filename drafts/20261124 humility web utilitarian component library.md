# . sh

```
 ~ % cd Documents/f/humility/source
 ...f/humility/source % npm install @base-ui/react

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [20]
Saved lockfile

+ lib@github:firahq/lib#c7b946e

installed @base-ui/react@1.9.0

6 packages installed [3.41s]
 ...f/humility/source % npm install radix-ui

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [277]

installed radix-ui@1.8.1

69 packages installed [5.87s]
Saved lockfile
 ...f/humility/source % npm install @mantine/core @mantine/hooks

bun add v1.3.14 (0d9b296a)
Resolving dependencies
Resolved, downloaded and extracted [23]

installed @mantine/core@9.8.2
installed @mantine/hooks@9.8.2

5 packages installed [4.38s]
Saved lockfile
```

# what do ppl say on mui baseui

Developers generally view **MUI Base UI** (`@base-ui/react`) as a **reliable, well-backed successor to Radix UI**. Since hitting v1.0 in December 2025, it has gained strong traction for combining solid accessibility with zero default styling. [](https://news.ycombinator.com/item?id=46245401)

_(Note: The older `@mui/base` package is deprecated and has been officially replaced by `@base-ui/react`.)_ [](https://www.untitledui.com/blog/untitled-ui-vs-base-ui)

### What Developers Like

* **Strong long-term backing.** Following uncertainty around Radix UI after its acquisition, developers on [Hacker News](https://news.ycombinator.com/item?id=46245401) praise Base UI's stability because it is backed by MUI with a dedicated full-time team. Notably, several original creators of Radix and Floating UI joined MUI to build it. [](https://github.com/mui/base-ui/issues/3579)
* **Familiar API and easy migration.** The component structure mirrors Radix closely, making it straightforward for teams to switch. Even popular libraries like shadcn/ui have added support for Base UI as an underlying primitive layer. [](https://www.infoq.com/news/2026/02/baseui-v1-accessible/)
* **Richer component set.** Reviewers note that Base UI includes higher-level components out of the box—such as native multi-select, autocomplete, number fields, and meters—that Radix lacks. [](https://www.youtube.com/shorts/NjTjF1V61xs)
* **True styling freedom.** Developers appreciate that it enforces zero CSS opinions, working smoothly with Tailwind CSS, CSS Modules, CSS-in-JS, or plain CSS while handling complex focus management and ARIA attributes automatically. [](https://news.ycombinator.com/item?id=46245401)

### Common Questions & Caveats

* **Branding and package confusion.** Because the name has evolved—and overlaps with Uber's Base Web (`baseui`)—some developers point out that AI coding assistants occasionally hallucinate old import paths like `@mui/base` or `@base-ui-components/react` instead of `@base-ui/react`.
* **Comparisons to React Aria.** In discussions on Reddit, developers often weigh Base UI against Adobe's React Aria and Ariakit. Maintainers and users note that while React Aria is deeply thorough, its hook-heavy API feels very different, whereas Base UI favors a more familiar JSX composition pattern.
* **Unstyled means building from scratch.** As highlighted on [GitHub](https://github.com/mui/base-ui/issues/3579), newcomers sometimes confuse Base UI with styled kits like Chakra or Mantine. It strictly provides behavior and accessibility, meaning your team is responsible for all visual design. [](https://github.com/mui/base-ui/issues/3579)

Are you evaluating Base UI for a **new project** or looking to **migrate from another library** like Radix or Material UI? If you share your styling setup (like Tailwind or CSS Modules), I can walk through how well it fits.

* [](https://github.com/mui/base-ui/issues/3579)  
GitHub  
Is base-ui a reliable choice for enterprise frontend libraries?  
December 18, 2025 — Base UI is our proposal for unstyled components. Those are libraries that focus on behavior and a11y, not on design. the underlyin...
* [](https://www.infoq.com/news/2026/02/baseui-v1-accessible/)  
infoq.com  
MUI Releases Base UI 1 with 35 Accessible Components - InfoQ  
February 6, 2026 — Base UI components come completely unstyled, allowing teams to implement their own design systems without fighting against default...
* [](https://news.ycombinator.com/item?id=46245401)  
Hacker News  
Show HN: Base UI v1.0 Unstyled UI Components from the Creators of Radix and MUI | Hacker News  
January 2, 2026 — Unstyled React UI library from creators of Radix and MUI (35 accessible, configurable, composable, customizable components; no bun...

Show all

# example of mui baseui

**Base UI** (`@base-ui/react`) is an unstyled, accessible React component library created by the teams behind MUI, Radix, and Floating UI. Unlike Material UI, it comes with zero default styles, giving you complete control over CSS while handling keyboard navigation, ARIA attributes, and state out of the box. [](https://base-ui.com/)

### 1\. Code Example: Unstyled Popover with Tailwind CSS

To use Base UI, you install `@base-ui/react` and assemble components using composable sub-parts (like `Root`, `Trigger`, and `Popup`). [](https://base-ui.com/react/overview/quick-start)

bash

```
npm install @base-ui/react

```



Here is a complete example of an accessible **Popover** styled with Tailwind CSS: [](https://base-ui.com/react/overview/quick-start)

tsx

```
import * as React from 'react';
import { Popover } from '@base-ui/react/popover';

export default function NotificationPopover() {
  return (
    <Popover.Root>
      {/* The button that opens the popover */}
      <Popover.Trigger className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Notifications
      </Popover.Trigger>

      {/* Portal ensures the popup renders above other stacking contexts */}
      <Popover.Portal>
        <Popover.Positioner sideOffset={8}>
          <Popover.Popup className="w-64 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
            <Popover.Title className="text-base font-semibold text-gray-900">
              Recent Updates
            </Popover.Title>
            <Popover.Description className="mt-1 text-sm text-gray-600">
              You have 3 unread messages in your inbox.
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}

```



### 2\. Required Root Setup

For floating elements like popovers, menus, and dialogs to layer properly, [Base UI Quick Start](https://base-ui.com/react/overview/quick-start) recommends isolating your app's root stacking context in your global CSS: [](https://base-ui.com/react/overview/quick-start)

css

```
.root {
  isolation: isolate;
}

```



### 3\. Real-World Examples & Libraries Built with Base UI

Because Base UI is a headless foundation, several popular tools and design systems use it under the hood: [](https://news.ycombinator.com/item?id=46245401)

* **shadcn/ui** uses Base UI as an unstyled primitive foundation for copy-pasteable components.
* **Production apps** such as Paper, Zed, and Unsplash use Base UI in production.
* **Open-source component libraries** built on top of Base UI include Coss UI, Basecn, and Pure UI. [](https://news.ycombinator.com/item?id=46245401)

You can explore more live interactive code sandboxes in the [Base UI Official Documentation](https://base-ui.com/) or on [StackBlitz](https://stackblitz.com/github/mui/base-ui/tree/master/examples/src/%2A). 

Would you like to see a code example for a specific component (such as a **Combobox**, **Dialog**, or **Select**), or an example using **CSS Modules** instead of Tailwind?

* [](https://base-ui.com/)  
Base UI  
Unstyled UI components for accessible design systems · Base UI  
Base UI: React UI component library. Works with Tailwind, CSS Modules, CSS-in-JS, plain CSS, Motion, and any styling/animation lib...
* [](https://base-ui.com/react/overview/quick-start)  
Base UI  
Quick start · Base UI  
Import unstyled components. Pre-styled: shadcn/ui uses Base UI as an unstyled foundation. LLMs: Use … sidebar for AI assistants.
* [](https://news.ycombinator.com/item?id=46245401)  
Hacker News  
Show HN: Base UI v1.0 Unstyled UI Components from the Creators of Radix and MUI | Hacker News  
January 2, 2026 — Unstyled React UI library from creators of Radix and MUI. Works with Tailwind, CSS Modules, Production at Paper, Zed, Unsplash;

Show all

# compare mui/baseui and shadcn ui

**MUI Base UI** (`@base-ui-components/react`) and **shadcn/ui** are not direct competitors; they operate at different layers of your frontend stack.  \[Highlight start\] **Base UI** is an unstyled, headless React primitive library that handles behavior and accessibility, while **shadcn/ui** is a copy-pasteable collection of pre-styled Tailwind CSS components that actually uses Base UI (alongside Radix UI) under the hood \[Highlight end\] . [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)

In practice, choosing between them is deciding whether you want to **build and style every component from a blank slate** (Base UI) or **start with ready-to-use, pre-styled components that you own in your codebase** (shadcn/ui). [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)

### Core Differences

| Feature             | MUI Base UI (mui/base-ui)                            | shadcn/ui                                                                    |
| ------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Stack Layer**     | Headless behavior & accessibility primitives.        | Pre-styled UI component layer & CLI.                                         |
| **Styling**         | Zero CSS included; completely styling-agnostic.      | Pre-styled using Tailwind CSS v4 and CSS variables.                          |
| **Distribution**    | Installed via npm as a versioned package dependency. | Copied directly into your repository via CLI.                                |
| **Code Ownership**  | Maintained by the MUI team; updated via npm bumps.   | You own the component source code and edit it directly.                      |
| **Composition API** | Uses a render prop and mergeProps utility.           | Uses the underlying primitive's API (render for Base UI, asChild for Radix). |
| **Setup Speed**     | Slower initial setup since you write all styles.     | Fast start with polished defaults out of the box.                            |

### How They Work Together

Created by a team including the original authors of Radix UI, Floating UI, and Material UI, Base UI reached v1.0 in December 2025\. Because it provides a modern, actively maintained primitive layer, shadcn/ui made Base UI its default foundation for new projects in July 2026\. When you install a shadcn/ui component today, you are often downloading a Tailwind-styled wrapper built directly on top of Base UI primitives. [](https://www.youtube.com/watch?v=9vtSp7pL27w)

### When to Choose Which

**Choose MUI Base UI directly if:**

* **You do not use Tailwind CSS.** Base UI works cleanly with CSS Modules, vanilla CSS, Sass, or CSS-in-JS libraries without forcing Tailwind into your stack. [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)
* **You are building a custom design system from scratch.** Starting with zero default styles prevents you from having to strip out or override visual opinions you did not choose. [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)
* **You are publishing a shared component library.** Delivering an unstyled or custom-styled package via npm avoids forcing consumers to adopt shadcn/ui's Tailwind configuration. [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)
* **You want centralized primitive updates.** Installing Base UI as a standard dependency lets you receive accessibility and bug fixes through normal package updates. [](https://www.youtube.com/watch?v=9vtSp7pL27w)

**Choose shadcn/ui if:**

* **You want to ship quickly.** You get accessible, production-ready components that look cohesive immediately.
* **Your team already uses Tailwind CSS.** shadcn/ui integrates natively into a Tailwind workflow with built-in dark mode and CSS variable theming.
* **You want full control over the markup.** Because the CLI copies the files into your project, you can freely modify variants, animations, and layout structure without fighting library APIs.
* **You want pre-configured complex recipes.** shadcn/ui includes ready-to-use setups for charts, data tables, and forms alongside standard interactive primitives. [](https://www.shadcndeck.com/blog/shadcn-vs-material-ui)

If you're deciding for an active project, let me know:

* Your **styling setup** (Tailwind CSS, CSS Modules, or something else?)
* Whether you are building a **single app** or a **shared internal design system**

I can recommend the cleanest architecture and setup steps for your stack.

* [](https://shadcnstudio.com/blog/base-ui-vs-shadcn-ui/)  
Shadcn Studio  
Base UI vs Shadcn UI - Understanding the Key Differences  
June 23, 2026 — You want to ship fast — pre-styled, accessible components save real time Your team already uses Tailwind CSS — shadcn/ui fits natu...
* [](https://www.shadcndeck.com/blog/shadcn-vs-material-ui)  
www.shadcndeck.com  
shadcn/ui vs Material UI: which should you use in 2026?  
June 9, 2026 — The work is translating styling, not markup. An MUI button becomes a shadcn button whose variants you control in your own source:
* [](https://www.youtube.com/watch?v=9vtSp7pL27w)  
YouTube·KTG Analysis  
Base UI vs Radix - Which Should Power Your ShadCN App?  
Apr 14, 2026 — Base UI consolidates all 39 components into a single package, simplifying installation. Both libraries prioritize accessibility,  
19:01

Show all

# popularity of mui/baseui, radix, react aria, and shadcn ui

 \[Highlight start\] **shadcn/ui** leads overall developer mindshare and GitHub popularity, while **Radix UI** maintains the largest legacy install base and **MUI Base UI** is experiencing the fastest adoption growth \[Highlight end\] . **React Aria** holds a steady, dedicated niche among teams prioritizing strict accessibility and internationalization. [](https://www.untitledui.com/blog/base-ui-vs-react-aria)

Because **shadcn/ui** sits on top of the other three as a styled, copy-paste code layer, shifts inside shadcn/ui heavily dictate the adoption rates of the underlying headless primitives. [](https://www.pkgpulse.com/guides/shadcn-ui-vs-base-ui-vs-radix-components-2026)

### Popularity & Adoption Breakdown

| Library         | GitHub Stars           | npm Weekly Downloads                     | Current Trajectory & Ecosystem Role                                                                                                                |
| --------------- | ---------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **shadcn/ui**   | \~129,000              | \~3.9M (CLI tool)                        | **Dominant top-layer default.** Surpassed Material UI as the most-starred React UI repository.                                                     |
| **Radix UI**    | \~19,000               | \~130M/month (\~30M+/wk across packages) | **Largest installed base, slowing momentum.** Development slowed after its WorkOS acquisition, though it remains widely deployed in existing apps. |
| **MUI Base UI** | \~11,100               | \~19.3M/wk                               | **Fastest-growing primitive.** Built by MUI and original Radix creators. Replaced Radix as shadcn/ui's default primitive layer.                    |
| **React Aria**  | \~15,900 (shared repo) | \~5.9M/wk                                | **Steady enterprise & accessibility standard.** Backed by Adobe, with support as an official \--base aria option in shadcn/ui.                     |

### Key Trends Driving Adoption

* **The shadcn/ui Distribution Effect.** In July 2026, shadcn/ui switched its default primitive layer from Radix UI to Base UI. Before the switch, developers using the shadcn project generator were already selecting Base UI over Radix at a 2-to-1 ratio. [](https://www.alekseialeinikov.com/en/blog/topics/programming/shadcn-ui-vs-mui-vs-mantine)
* **Radix Maintenance Shift.** Following WorkOS's acquisition of Radix UI, updates to complex primitives stalled. Several original Radix authors joined MUI to build Base UI, prompting many teams starting greenfield projects to migrate away from Radix. [](https://news.ycombinator.com/item?id=48791806)
* **React Aria's Specialized Niche.** While React Aria has lower raw download numbers than Radix or Base UI, it remains the top choice for design systems needing complex components out of the box. Unlike Base UI and Radix, Adobe's library includes built-in date pickers, color pickers, tables, trees, and localization for over 30 languages. [](https://www.untitledui.com/blog/base-ui-vs-react-aria)
* **Community Consensus on Maturity.** On [Reddit](https://www.reddit.com/r/reactjs/comments/1veiovb/react%5Faria%5Fvs%5Fbase%5Fui/), developers generally agree that Base UI offers a slick developer experience and familiar API for Radix users, while React Aria is viewed as more battle-tested with deeper accessibility coverage. [](https://www.reddit.com/r/reactjs/comments/1veiovb/react%5Faria%5Fvs%5Fbase%5Fui/)

Are you evaluating these libraries for a **new project** or looking to **migrate an existing design system**? Let me know your stack (such as Tailwind CSS or custom styling) and key component needs so I can help compare the technical trade-offs.

* [](https://www.untitledui.com/blog/base-ui-vs-react-aria)  
Untitled UI  
Base UI vs. React Aria Components - Untitled UI  
Sep 17, 2026 — It became shadcn/ui's default primitive layer in July 2026,
* [](https://www.alekseialeinikov.com/en/blog/topics/programming/shadcn-ui-vs-mui-vs-mantine)  
Aleksei Aleinikov  
shadcn/ui vs MUI vs Mantine: Which React UI Library to Pick  
October 7, 2026 — \# July 2026: Base UI becomes the default. The reasons shadcn gives: Base UI was stable at 1.6, past 6 million weekly downloads, an...
* [](https://dualite.dev/blogs/best-react-ui-libraries)  
Dualite  
Best React UI Libraries in 2026: shadcn/ui vs MUI vs Radix vs ...  
Jun 14, 2026 — shadcn/ui is the top pick for most new React projects, Radix UI leads for custom designs needing accessibility, and MUI remains th...

Show all

# adopters of mui/baseui, radix, react aria, and shadcn ui

1:10 AM

### adopters of mui/baseui, radix, react aria, and shadcn ui

Adoption across **MUI / Base UI**, **Radix UI**, **React Aria**, and **shadcn/ui** spans high-growth AI startups, developer platforms, and Fortune 500 enterprises. Because **shadcn/ui** acts as a styling layer on top of **Radix UI**, **Base UI**, or **React Aria**, many modern engineering teams appear in multiple ecosystems simultaneously. [](https://www.shadcnblocks.com/docs/primitive-libraries/overview)

#### Radix UI

**Radix UI** remains the most widely detected headless primitive layer on the web, powering over 1.8 million websites and serving as the historical default for **shadcn/ui**. [](https://www.untitledui.com/blog/base-ui-vs-react-aria)

* **AI & Developer Platforms.** Companies like **OpenAI** (ChatGPT and platform portals), **Anthropic** (Claude), **Vercel**, **Cursor**, **Supabase**, **Linear**, **PostHog**, and **Expo** rely on Radix Primitives for accessible interactive components. [](https://www.radix-ui.com/primitives/case-studies)
* **Enterprise & Consumer Brands.** Major organizations running Radix UI on public web properties include **Nike**, **NVIDIA** (`build.nvidia.com`), **IBM**, **PayPal**, **Shopify**, **Electronic Arts**, **British Airways**, and **Wells Fargo**. [](https://technologychecker.io/technology/radix-ui)
* **Official Case Studies.** You can explore architectural deep dives from **Linear**, **Vercel**, **Supabase**, **CodeSandbox**, and **Liveblocks** on the [Radix Primitives Case Studies](https://www.radix-ui.com/primitives/case-studies) page. [](https://www.radix-ui.com/primitives/case-studies)

#### shadcn/ui

**shadcn/ui** is the default UI layer for new Tailwind CSS projects, with over 540,000 detected domains and rapid adoption across AI tools, SaaS apps, and enterprise subdomains. [](https://www.wappalyzer.com/technologies/ui-frameworks/shadcn-ui/)

* **AI & Modern SaaS.** Prominent web apps built with shadcn/ui include **Vercel**, **ElevenLabs**, **Lovable**, **OpenRouter**, **Polymarket**, **PostHog**, **Supabase**, and **Qonto**. [](https://www.reddit.com/r/nextjs/comments/1gtyjph/websites%5Fusing%5Fshadcnui/)
* **Enterprise & Healthcare.** Large institutions using shadcn/ui on customer-facing portals include **Ericsson**, **PayPal** (checkout flows), **Baylor Scott & White Health**, **Mount Sinai Health System**, **Baidu**, and **Nothing Tech**. [](https://technologychecker.io/technology/shadcn-ui)
* **Community Showcases.** Browse live implementations and open-source templates in the shadcn/ui Awesome Websites directory.

#### MUI & Base UI

**Base UI** (which replaced MUI Base and hit v1.0 in late 2025) is built by the **MUI** team alongside original Radix creators. In 2026, **shadcn/ui** officially adopted Base UI as its default primitive engine for new projects, driving rapid organic adoption. [](https://dev.to/greedy%5Freader/shadcnui-vs-mui-in-2026-styling-accessibility-and-component-trade-offs-for-saas-pdd)

* **Direct & shadcn-Driven Base UI Adopters.** Because Base UI is consolidated into a single npm package and serves as the default for new shadcn/ui CLI setups, thousands of newly launched AI apps, design systems, and SaaS dashboards use Base UI under the hood.
* **Broader MUI Ecosystem Enterprise Adopters.** Across the wider MUI ecosystem, major engineering teams include **Netflix**, **Spotify**, **Tesla**, **JPMorgan Chase**, **Walmart**, **Docker**, **Unity**, **Samsung**, **T-Mobile**, and **AT&T**.
* **Official Customer Stories.** Read how **Unity**, **Docker**, **Loggi**, and **Particl** scale their design systems on the [MUI Customers](https://mui.com/customers/) showcase. [](https://mui.com/customers/)

#### React Aria (Adobe)

**React Aria** is favored by organizations that require strict WCAG compliance, internationalized date/number pickers, complex data tables, and mobile screen reader support. [](https://react-aria.adobe.com/)

* **Adobe & Creative Ecosystems.** Adobe uses React Aria and React Spectrum extensively across its own web applications, including **Adobe Express**, **Photoshop Web**, and **Adobe Experience Cloud**.
* **High-Traffic Tech & Marketplaces.** According to [Wappalyzer's React Aria tracking](https://www.wappalyzer.com/technologies/javascript-libraries/react-aria/), notable adopters include **Stripe** (`docs.stripe.com`), **Spotify** (`open.spotify.com`), **Box**, **Calendly**, **Mercado Libre**, **Yandex**, **Vercel**, and **Qonto**. [](https://www.wappalyzer.com/technologies/javascript-libraries/react-aria/)

#### Adoption Summary Comparison

| Library           | Core Layer                          | Typical Adopter Profile                           | Notable Public Adopters                              |
| ----------------- | ----------------------------------- | ------------------------------------------------- | ---------------------------------------------------- |
| **Radix UI**      | Headless primitives                 | AI startups, dev tools, custom enterprise portals | OpenAI, Anthropic, Linear, Vercel, Nike, NVIDIA      |
| **shadcn/ui**     | Copy-paste styled components        | New Tailwind/React 19 apps, AI tools, SaaS        | Vercel, ElevenLabs, Supabase, PayPal, Mount Sinai    |
| **MUI / Base UI** | Headless primitives & full UI suite | Enterprise platforms, new shadcn/ui v4+ projects  | Netflix, JPMorgan Chase, Docker, Unity, Tesla        |
| **React Aria**    | Headless hooks & components         | Data-heavy apps, strict accessibility/i18n teams  | Adobe, Stripe, Spotify, Box, Calendly, Mercado Libre |

Are you evaluating these libraries for a **new design system** or **migrating an existing codebase**? Let me know your **styling setup** (such as Tailwind CSS or CSS-in-JS) and **accessibility requirements**, and I can help compare their trade-offs for your stack.

+17

* [](https://www.radix-ui.com/primitives/case-studies)  
Radix UI  
Case studies – Radix Primitives  
Case studies. Learn how teams behind everyone's favorite products use Radix to save time, boost quality, and set the bar for acces...
* [](https://www.untitledui.com/blog/base-ui-vs-react-aria)  
Untitled UI  
Base UI vs. React Aria Components  
Radix UI: the library that popularized the category, and still by far the most downloaded. shadcn/ui's changelog. It replaced MUI ...
* [](https://www.wappalyzer.com/technologies/ui-frameworks/radix-ui/)  
Wappalyzer  
Websites using Radix UI  
Radix UI is a React-based user interface component library that offers accessible, responsive, and customizable components for bui...

Show all

## why is shadcn/ui related to tailwind

why is shadcn/ui related to tailwind

1:33 AM

### why is shadcn/ui related to tailwind

**shadcn/ui** is built specifically on top of **Tailwind CSS** because  \[Highlight start\] Tailwind provides the exact styling foundation needed to make copy-paste, unbundled components work cleanly without a heavy runtime CSS library \[Highlight end\] .

#### How They Fit Together

* **No Separate Stylesheets Required.** Instead of installing a package that injects its own CSS files or CSS-in-JS runtime, shadcn/ui components are plain React files styled directly with Tailwind utility classes (`flex`, `rounded-md`, `border`, etc.).
* **CSS Variables for Theming.** shadcn/ui configures a set of semantic CSS variables in your global stylesheet (like `--background`, `--primary`, and `--muted`) and maps them to Tailwind utility classes (`bg-background`, `text-primary`). Changing a single hex/OKLCH value updates your entire app's theme and dark mode automatically.
* **Variant Management via Tailwind Tools.** Under the hood, shadcn/ui pairs Tailwind CSS with **`class-variance-authority` (CVA)** and **`tailwind-merge`**. This lets you pass props like `<Button variant="destructive" size="sm" />` and cleanly override default styles with your own `className` without Tailwind class conflicts.
* **Complete Code Ownership.** Because the styling lives right inside the component file as standard Tailwind classes, you can inspect, tweak, or redesign any component directly in your editor without fighting library overrides or `!important` rules.

Are you setting up a project with **Tailwind CSS**, or are you looking for a component setup that works with **plain CSS, CSS Modules, or CSS-in-JS** instead? Let me know your stack and I can point you to the cleanest approach.

## is it styled

is it styled

1:34 AM

### is it styled

**Yes, shadcn/ui is pre-styled** out of the box, unlike unstyled "headless" libraries like Radix UI, Base UI, or React Aria.

#### How Styling Works in shadcn/ui

* **Ready-to-Use Visuals:** Every component comes with clean, modern defaults for colors, borders, shadows, spacing, typography, and animations.
* **Two-Layer Architecture:** It pairs an **unstyled primitive** (for keyboard navigation, focus traps, and screen reader accessibility) with a **Tailwind CSS styling layer** on top.
* **Editable Defaults:** Because the component code is copied directly into your project folder, those styles act as a starting template rather than locked-in library CSS—you can modify or completely replace them anytime.

Are you looking for **ready-to-use styles** out of the box, or do you prefer **completely unstyled components** so you can build your own visual design from scratch?

## does shadcn/ui often make a site boring

does shadcn/ui often make a site boring

1:34 AM

### does shadcn/ui often make a site boring

 \[Highlight start\] **Yes, if you leave the default theme untouched, shadcn/ui can make your site look generic and "template-like."** \[Highlight end\]  Because thousands of AI tools, SaaS dashboards, and developer sites use its default monochrome Zinc/Slate palette, 1px borders, and Inter typography without customization, users immediately recognize the "shadcn look."

#### Why Sites End Up Looking Generic

* **Overuse of Default Themes:** Most developers copy-paste components and keep the default neutral grays, black primary buttons, and subtle borders, making different apps look nearly identical.
* **AI Code Generation Habits:** Modern AI coding assistants (like v0, Cursor, and Lovable) default to standard shadcn/ui layouts, flooding the web with the exact same card grids and sidebar patterns.
* **Lack of Visual Hierarchy:** Its minimalist, low-contrast aesthetic works great for dense developer dashboards, but can feel flat or sterile for consumer brands or marketing pages.

#### How to Make shadcn/ui Stand Out

Because you own the component files directly in your codebase, avoiding the "boring" look is straightforward once you customize a few core levers:

* **Rewrite the CSS Variables:** Swap out the default neutral palette in your global CSS (`--primary`, `--radius`, `--border`, `--background`) to match your brand's colors and corner roundness.
* **Change Typography & Spacing:** Pair a distinct display font with custom letter-spacing and generous padding rather than sticking to tight dashboard defaults.
* **Customize Component Variants:** Open `components/ui/button.tsx` or `card.tsx` and add custom shadows, gradients, thicker borders, or micro-interactions directly in the Tailwind classes.
* **Use Custom Registries:** Pull in pre-styled variants from community registries (like Magic UI, Aceternity UI, or custom Figma-to-shadcn themes) rather than sticking strictly to the base registry.

Are you building a **consumer-facing brand site** where visual personality is critical, or an **internal tool / SaaS dashboard** where clean utility matters more? Let me know and I can suggest specific ways to customize the theme.

## what do ppl say

what do ppl say

1:34 AM

### what do ppl say

Developers and designers have strong, divided opinions on **shadcn/ui**: it is widely praised for **code ownership and speed**, while simultaneously criticized for creating **"shadcn slop" (visual sameness)** and **long-term maintenance burdens**.

#### The Praise: Why Developers Love It

* **"Owning, Not Renting" Components.** Many developers—such as in this [Medium breakdown on switching from traditional libraries](https://medium.com/@ananyavhegde2001/shadcn-ui-why-im-never-going-back-to-traditional-component-libraries-10c49babb496)—love that copying source code directly into their repo eliminates fighting library overrides, `!important` hacks, and rigid wrapper APIs. [](https://medium.com/@ananyavhegde2001/shadcn-ui-why-im-never-going-back-to-traditional-component-libraries-10c49babb496)
* **Unmatched Prototyping & AI Speed.** Because LLMs and AI coding tools (like v0, Cursor, and Lovable) generate Tailwind + shadcn/ui fluently, solo founders and engineers can ship accessible, clean MVPs in hours rather than weeks. [](https://dantedecodes.vercel.app/articles/why-i-avoid-shadcn/)
* **Solid Accessibility Baseline.** Non-designers and backend-heavy developers appreciate getting keyboard navigation, screen reader support, and clean spacing out of the box without hiring a full design team. [](https://www.reddit.com/r/UI%5FDesign/comments/1s0uvk7/the%5Fshadcn%5Fslop%5Fis%5Fgetting%5Fannoying%5Fbut%5Fidk%5Fhow/)

#### The Criticism: Why People Push Back

* **"The New Bootstrap" & AI Slop.** On [Reddit's r/reactjs](https://www.reddit.com/r/reactjs/comments/1vv8060/all%5Fthe%5Fdefault%5Fshadcnui%5Fwebsites%5Flook%5Fso%5Fsloppy/), commenters widely agree that shadcn/ui has replicated the Bootstrap era: because most developers never customize the default monochrome Zinc/Slate theme, thousands of SaaS apps and AI wrappers look identical.
* **Mixed Views on "Boring" Dashboards.** On [Reddit's r/Frontend](https://www.reddit.com/r/Frontend/comments/1opi3h3/is%5Fanyone%5Felse%5Ftired%5Fof%5Fevery%5Ftailwindshadcn%5Fapp/), opinions are split—some developers argue the visual sameness stems from lazy default usage rather than the tool itself, while others counter that functional dashboards _should_ feel familiar and predictable rather than experimental.
* **Maintenance & Version Drift.** Critics point out that because components are copied rather than installed as a versioned npm package, you become responsible for fixing bugs, updating underlying primitives, and preventing visual inconsistency across large teams, as detailed in [Hamid Yaftian's analysis on when shadcn isn't the right choice](https://itshamid.me/blog/shadcn-is-not-for-every-project).
* **When Teams Rebuild From Scratch.** Engineering teams with strict, bespoke brand identities—such as the creators of Twenty CRM on [Hacker News](https://news.ycombinator.com/item?id=37808836)—often note that if you plan to heavily redesign every single element anyway, building directly on headless primitives (like Radix or Base UI) is cleaner than stripping out shadcn's defaults. [](https://www.reddit.com/r/Frontend/comments/1opi3h3/is%5Fanyone%5Felse%5Ftired%5Fof%5Fevery%5Ftailwindshadcn%5Fapp/)

Are you trying to decide whether to **use shadcn/ui as-is**, **heavily customize it**, or **start directly from unstyled primitives** (like Base UI or React Aria) for your project? Let me know your **team size** and **timeline** and I can help you weigh which fits best.

+6

* [](https://www.reddit.com/r/Frontend/comments/1opi3h3/is%5Fanyone%5Felse%5Ftired%5Fof%5Fevery%5Ftailwindshadcn%5Fapp/)  
Reddit·r/Frontend  
Is anyone else tired of every Tailwind/shadcn app looking the ...  
Tailwind and Shadcn applications look similar, particularly when using default styles or AI-generated components, this is not an i...
* [](https://www.reddit.com/r/reactjs/comments/1vv8060/all%5Fthe%5Fdefault%5Fshadcnui%5Fwebsites%5Flook%5Fso%5Fsloppy/)  
Reddit·r/reactjs  
all the default shadcn/ui websites look so sloppy - Reddit  
Commenters agree that the ubiquity and visual sameness of shadcn/ui replicate historical patterns previously observed with framewo...
* [](https://www.reddit.com/r/reactjs/comments/1cb86y7/what%5Fi%5Fdont%5Flike%5Fabout%5Fshadcnui/)  
Reddit·Dev Leonardo  
What I DON'T like about shadcn/ui : r/reactjs  
Shadcn/ui is not a component library in the traditional sense. When you use a component from Shadcn/ui, you are not installing it ...  
[28s](https://www.reddit.com/r/reactjs/comments/1cb86y7/what%5Fi%5Fdont%5Flike%5Fabout%5Fshadcnui/)

Show all

# example of shadcn/ui

An example of **shadcn/ui** is  \[Highlight start\] a copy-and-paste **React component setup** built on Tailwind CSS and Radix UI primitives \[Highlight end\] . Unlike traditional npm libraries, you add component source code directly into your project so you own and control the styling.

### Code Example: Card and Button

Here is how a typical login card is built after running `npx shadcn@latest add button card input label`:

tsx

```
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email to access your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  )
}

```



### Live Official Examples

You can explore interactive layouts and source code directly in the official documentation:

* **Analytics Dashboard.** The [shadcn/ui Dashboard Example](https://ui.shadcn.com/examples/dashboard) demonstrates sidebars, interactive charts, stat cards, and sortable data tables.
* **AI Playground.** The [shadcn/ui Playground Example](https://ui.shadcn.com/examples/playground) showcases sliders, model selectors, preset loaders, and tabbed editors.
* **Production Apps.** Open-source tools like Cal.com (scheduling) and Midday (finance) use shadcn/ui for their core user interfaces. [](https://ui.shadcn.com/examples/dashboard)

### Community Extensions

Because shadcn/ui uses an open registry format, third-party libraries provide specialized blocks you can install with the same CLI: [](https://www.shadcndeck.com/blog/shadcn-ui-projects-examples-2026)

* **Animated Components.** Libraries like Aceternity UI and Magic UI add Framer Motion animations and marketing hero sections.
* **SaaS & AI Blocks.** Collections like Origin UI and Kokonut UI offer specialized inputs, date pickers, and AI chat interfaces. [](https://www.shadcndeck.com/blog/shadcn-ui-projects-examples-2026)

If you are looking to build something specific, let me know:

* Your **framework** (Next.js, Vite, Astro, etc.)
* The **type of interface** (dashboard, landing page, form, data table)

I can generate a complete **shadcn/ui component snippet** or **CLI setup guide** tailored to your project.

* [](https://ui.shadcn.com/examples/dashboard)  
Shadcn  
The Foundation for your Design System - shadcn/ui  
Total Visitors Total for. View Outline Outline Past Performance 3 Key Personnel 2 Focus Documents Customize ColumnsColumns Add Sec...
* [](https://ui.shadcn.com/examples/playground)  
Shadcn  
Playground - shadcn/ui  
A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own.
* [](https://www.shadcndeck.com/blog/shadcn-ui-projects-examples-2026)  
www.shadcndeck.com  
25 Best shadcn/ui Projects and Examples to Learn From (2026) | ShadcnDeck  
May 20, 2026 — Aceternity UI: Animated Components \* You record your screen or webcam, edit with backgrounds and effects, over 1,000 shadcn/ui com...



# what if you install dev deps as deps on package json

Installing development tools under `dependencies` instead of `devDependencies` in `package.json`  \[Highlight start\] **will not break your app locally, nor will it usually bloat a frontend bundle** \[Highlight end\] , because modern bundlers rely on static imports rather than `package.json` keys. However, it introduces significant issues for **deployment, security, and published libraries**. [](https://www.youtube.com/watch?v=fbcMoP8C3tc)

### What Happens in Different Scenarios

* **Published npm Packages and Libraries.** If you publish your project to the npm registry, anyone who installs your package will automatically download everything listed in `dependencies`. Your users will be forced to download heavy tools like ESLint, Jest, or TypeScript even though they never run your tests or build scripts. [](https://oneuptime.com/blog/post/2026-01-22-nodejs-dependencies-vs-devdependencies/view)
* **Backend and Server Deployments.** Production servers often run `npm install --omit=dev` (or set `NODE_ENV=production`) to skip development tools. If dev tools are in `dependencies`, your production server installs them anyway, leading to slower deployment times, wasted disk space, and larger Docker images. [](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)
* **Frontend Web Applications.** Modern bundlers like Vite, Webpack, or Rollup only include code that is explicitly imported in your source files. Putting a linter or test runner in `dependencies` will not increase the final JavaScript bundle size sent to users' browsers, though it will still slow down your CI/CD build pipelines.
* **Security Audits and Vulnerability Alerts.** Security scanners and tools like `npm audit` flag vulnerabilities in production `dependencies` with much higher urgency than `devDependencies`. Misclassifying dev tools creates false-positive production alerts for packages that never actually run in your live environment.

### How to Fix Misplaced Dependencies

If you accidentally installed a dev package without the `-D` flag, you can move it cleanly using the [npm CLI](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/): 

1. **Move via command line.** Run `npm install <package-name> --save-dev` (or `-D`). Modern versions of npm will automatically move the entry from `dependencies` to `devDependencies` in your `package.json` and update your lockfile.
2. **Edit manually.** Cut the package line from the `"dependencies"` object in `package.json`, paste it into `"devDependencies"`, and run `npm install` to sync your `package-lock.json`. [](https://www.reddit.com/r/learnjavascript/comments/v18ezu/installing%5Fpackages%5Fas%5Fdev%5Fdependencies/)

If you're organizing a specific project, let me know:

* Whether it's a **frontend app, backend server, or published library**
* Which **packages** you're unsure about

I can help you sort them into the right section.

* [](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencie)  
Stack Overflow  
node.js - What's the difference between dependencies ...  
September 18, 2013 — To prevent \`devDependencies\` from being installed, use \`npm install --production\` or set the \`NODE\_ENV=production\` environment var...
* [](https://www.youtube.com/watch?v=fbcMoP8C3tc)  
YouTube·A shot of code  
Package JSON Demystified - Dependencies and ...  
Aug 1, 2021 — This video explains the difference between \`dependencies\` and \`devDependencies\` in a \`package.json\` file for JavaScript projects m...  
11:30
* [](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file/)  
npm Docs  
Specifying dependencies and devDependencies in a package.json file | npm Docs  
Adding via command line: \`npm install … \`npm install --save-dev\` (or \`-D\`) for devDependencies in the root directory.

Show all

# how to install mui/baseui, radix, react aria, and shadcn ui

You can install **Base UI**, **Radix UI**, and **React Aria** directly as npm packages, whereas **shadcn/ui** is initialized via a CLI that copies component source code into your project. [](https://base-ui.com/react/overview/quick-start)

Note that **shadcn/ui** actually sits on top of the other three—you can choose Base UI (default), Radix, or React Aria as the underlying primitive engine when initializing shadcn/ui. [](https://www.pegasusdesignsystem.com/blog/shadcn-ui-components)

### 1\. Base UI (formerly MUI Base)

MUI deprecated `@mui/base` and replaced it with a standalone package called `@base-ui/react`. It includes all 35+ unstyled, tree-shakable components in a single install. [](https://www.npmjs.com/package/@mui/base)

* **Install via npm.** Run the installation command from the [Base UI Quick Start](https://base-ui.com/react/overview/quick-start) in your React project:  
bash  
```  
npm install @base-ui/react  
```  

* **Legacy package.** Only install `@mui/base` if you are maintaining an older project that specifically relies on the deprecated v5/v6 beta package. [](https://mui.com/base-ui/getting-started/quickstart/)

---

### 2\. Radix UI (Primitives)

Radix consolidated its individual component packages into a single unified, tree-shakable package. [](https://www.radix-ui.com/primitives/docs/overview/introduction)

* **Install the unified package.** Follow the [Radix Primitives Getting Started](https://www.radix-ui.com/primitives/docs/overview/getting-started) guide to install all primitives at once:  
bash  
```  
npm install radix-ui  
```  

* **Install individual primitives (optional).** If you prefer granular dependencies, you can still install single components like `@radix-ui/react-dialog` separately. [](https://www.radix-ui.com/primitives/docs/overview/getting-started)

---

### 3\. React Aria (Adobe)

Adobe offers both high-level composable components and low-level hooks. For most modern React applications, the unified component package is recommended. [](https://zaidahmaddev.com/blog/react-aria-accessible-components-without-the-style-lock-in)

* **Install React Aria Components.** Use the command from the [React Aria Getting Started](https://react-aria.adobe.com/getting-started) docs to get all 50+ pre-wired, unstyled components:  
bash  
```  
npm install react-aria-components  
```  

* **Install hooks only (optional).** If you need to attach behavior to completely custom DOM elements without wrappers, install `react-aria` and `react-stately` instead. [](https://www.npmjs.com/package/react-aria-components)

---

### 4\. shadcn/ui

Rather than installing a traditional node module, **shadcn/ui** uses a CLI to configure Tailwind CSS and copy component files directly into your codebase. [](https://ui.shadcn.com/docs/cli)

* **Initialize the project.** Run the initialization command from the [shadcn/ui CLI Docs](https://ui.shadcn.com/docs/cli) inside an existing React + Tailwind project (or let it scaffold a new one): [](https://ui.shadcn.com/docs/installation)  
bash  
```  
npx shadcn@latest init  
```  

* **Choose your primitive base.** By default, `init` configures **Base UI** under the hood. You can pass the `-b` flag to pick a different underlying library:
  * `npx shadcn@latest init -b base` (Base UI)
  * `npx shadcn@latest init -b radix` (Radix UI)
  * `npx shadcn@latest init -b aria` (React Aria) [](https://ui.shadcn.com/docs/cli)
* **Add individual components.** Once initialized, pull specific styled components (along with their required primitive dependencies) into your folder structure: [](https://shadcnstudio.com/blog/base-ui-vs-radix-ui/)  
bash  
```  
npx shadcn@latest add button dialog  
```  


---

### Quick Summary

| Library        | Install Command                   | Architecture                                     |
| -------------- | --------------------------------- | ------------------------------------------------ |
| **Base UI**    | npm install @base-ui/react        | Headless npm package                             |
| **Radix UI**   | npm install radix-ui              | Headless npm package                             |
| **React Aria** | npm install react-aria-components | Headless npm package                             |
| **shadcn/ui**  | npx shadcn@latest init            | CLI code generator (Tailwind + any of the above) |

If you're setting up a new project, let me know:

* Which **framework** you are using (Next.js, Vite, Astro, etc.)
* Whether you want **pre-styled Tailwind components** or **completely unstyled primitives**

I can walk you through the exact folder setup and your first component import.

* [](https://www.untitledui.com/blog/base-ui-vs-react-aria)  
Untitled UI  
Base UI vs. React Aria Components  
September 17, 2026 — It isn't deprecated: shadcn/ui's changelog says Radix "is not being deprecated. We still support it, It replaced MUI Base. the mul...
* [](https://www.pegasusdesignsystem.com/blog/shadcn-ui-components)  
Pegasus Design System  
shadcn/ui components explained: the CLI, registry, and theming  
October 30, 2026 — shadcn/ui is a set of accessible React components styled with Tailwind CSS, plus a CLI and registry format … new projects build th...
* [](https://base-ui.com/react/overview/quick-start)  
Base UI  
Quick start - Base UI  
Install Base UI using a package manager. Installation command. pnpm npm i @base-ui/react. All components are included in a single ...

Show all

# what do ppl say on shadcn ui

Developers broadly view **shadcn/ui** as a game-changing shift away from rigid component libraries. Instead of installing a heavy package via npm, you use its CLI to copy source code directly into your project. Most teams love the control and speed it offers, though some warn about maintenance overhead and websites starting to look identical. [](https://www.reddit.com/r/reactjs/comments/1oeobkr/i%5Fdont%5Funderstand%5Fwhy%5Fso%5Fmany%5Fpeople%5Fuse%5Fshadcn%5Fui/)

### What Developers Love

* **Full Code Ownership.** Because components live directly in your codebase, you never have to fight black-box abstractions or override complex CSS. Reviewers on [Product Hunt](https://www.producthunt.com/products/shadcn-ui/reviews) consistently highlight this balance of speed and flexibility. [](https://github.com/shadcn-ui/ui/discussions/6699)
* **Great AI Compatibility.** Engineers note on [Medium](https://medium.com/@ananyavhegde2001/shadcn-ui-why-im-never-going-back-to-traditional-component-libraries-10c49babb496) that its predictable, flat-file structure makes it easy for AI coding tools to read, generate, and modify. [](https://ui.shadcn.com/docs)
* **Flexible Foundations.** While early versions relied heavily on Radix UI, updates in 2026 added Base UI as the default headless foundation alongside React Aria. Developers appreciate having options that handle tricky keyboard navigation and accessibility out of the box. [](https://www.youtube.com/watch?v=yKZdMgiDtJM&t=24)
* **Custom Registries.** Teams use the [shadcn/ui CLI](https://ui.shadcn.com/docs) as a distribution system to share their own internal components across multiple projects. [](https://forum.rescript-lang.org/t/interest-in-shadcn-ui/6103)

### Common Criticisms & Drawbacks

* **Design Homogenization.** Because the default minimalist look is so clean, many developers skip customizing it. Critics on [YouTube](https://www.youtube.com/watch?v=BXcI9rh58oQ) point out that this makes modern web apps look identical, similar to the early days of Bootstrap.
* **Manual Updates.** Since it is not a traditional npm package, there is no single command to update existing components. As detailed in a [2026 themes.dev guide](https://www.themes.dev/blog/shadcn-ui/), maintaining and patching copied files becomes your own responsibility.
* **Basic Component Scope.** Developers note that it acts more like a design system starter kit than a full enterprise suite. If you need complex, pre-built data grids or advanced date pickers immediately, libraries like Material UI may save more time.
* **Strict Tech Stack Lock-In.** It is built specifically for React and relies deeply on Tailwind CSS, making it a poor fit if your team prefers other frameworks or styling methods. [](https://www.youtube.com/watch?v=BXcI9rh58oQ)

Are you evaluating **shadcn/ui** for a specific project? Let me know your **tech stack** or **timeline**, and I can help you decide if it fits better than an alternative like Material UI or Chakra UI.

* [](https://www.reddit.com/r/reactjs/comments/1oeobkr/i%5Fdont%5Funderstand%5Fwhy%5Fso%5Fmany%5Fpeople%5Fuse%5Fshadcn%5Fui/)  
Reddit·r/reactjs  
I don't understand, why so many people use Shadcn ui? - Reddit  
Oct 24, 2025 — Shadcn optimizes for velocity, flexibility, and long-term maintainability at the app level.
* [](https://www.youtube.com/watch?v=BXcI9rh58oQ)  
YouTube·Jan Marshal  
The BIG Problem With Shadcn UI…  
Oct 1, 2025 — These concerns stem from fundamental design choices, poorly maintained underlying dependencies, limited customization options, and...  
17:53
* [](https://www.youtube.com/watch?v=yKZdMgiDtJM&t=24)  
YouTube·Awesome  
Intro to shadcn/ui  
Sep 16, 2025 — leverage Radix UI for unstyled, accessible React components that handle keyboard navigation, focus management, and state logic.  
7m

Show all

# what do ppl criticize on shadcn ui

1:37 AM

### what do ppl criticize on shadcn ui

Developers primarily criticize **shadcn/ui** for  \[Highlight start\] the **long-term maintenance burden of its copy-paste architecture** and the **visual homogenization of the web** \[Highlight end\] . While owning your component code provides full customization, it shifts update responsibilities directly onto your team. [](https://www.reddit.com/r/reactjs/comments/18968oq/any%5Fexperiences%5Fgood%5For%5Fbad%5Fwith%5Fshadcn%5Fui%5Fover/)

#### Maintenance & Upgrade Overhead

* **Manual bug fixes.** Because you copy component source code directly into your repository rather than installing a package, you cannot run a simple `npm update` to get upstream patches. On [Reddit](https://www.reddit.com/r/reactjs/comments/18968oq/any%5Fexperiences%5Fgood%5For%5Fbad%5Fwith%5Fshadcn%5Fui%5Fover/), opinions are mixed regarding this model: some developers worry about manually integrating accessibility and security fixes, while others appreciate having full control over the code. [](https://www.reddit.com/r/reactjs/comments/1cb86y7/what%5Fi%5Fdont%5Flike%5Fabout%5Fshadcnui/)
* **Underlying dependency friction.** Most components wrap primitives from libraries like Radix UI. Developers note that updating an underlying primitive can introduce breaking changes into your copied local components, forcing you to manually debug and rewrite code. [](https://www.reddit.com/r/reactjs/comments/18968oq/any%5Fexperiences%5Fgood%5For%5Fbad%5Fwith%5Fshadcn%5Fui%5Fover/)
* **Repository backlog.** Critics point out that the official shadcn/ui GitHub repository frequently accumulates a large backlog of unresolved issues and pull requests, raising concerns about active maintenance. [](https://www.youtube.com/watch?v=BXcI9rh58oQ)

#### Design & Ecosystem Drawbacks

* **"Bootstrap-ification" of the web.** Because shadcn/ui is meant to be a starting point rather than a finished theme, developers who leave the default styles untouched make their apps look identical. Critics often compare this trend to the early Bootstrap era, noting that many modern websites look like clones of Vercel's documentation. [](https://dantedecodes.vercel.app/articles/why-i-avoid-shadcn/)
* **Requires design skills to shine.** According to [SISL's production review](https://sisl.pl/en/blog/shadcn-ui-production-pros-cons-year), shadcn/ui is a poor fit for teams without in-house design resources or Tailwind CSS experience. Customizing components beyond basic color tokens requires significant manual styling effort. [](https://github.com/shadcn-ui/ui/discussions/6699)
* **Basic component catalog.** Unlike comprehensive enterprise suites such as Material UI or PrimeReact, shadcn/ui offers a relatively small set of foundational primitives. Teams often have to build complex data tables, date pickers, or specialized inputs from scratch.

#### Technical Annoyances

* **IDE auto-import confusion.** Developers frequently complain that code editors like VS Code suggest auto-importing components directly from `@radix-ui` instead of your local `@/components/ui` folder, leading to broken styling and runtime errors.
* **Inconsistency at scale.** Reviewers on [Product Hunt](https://www.producthunt.com/products/shadcn-ui/reviews) note that giving every developer direct access to component source code makes it easy for teammates to make ad-hoc tweaks, eroding design consistency across large teams.
* **Utility overhead and security.** Some developers critique technical choices like the default `cn` helper function for adding minor runtime overhead, while security researchers have warned about supply-chain risks when pulling unverified code from third-party shadcn registries. [](https://medium.com/@pablo.haller/something-i-dont-like-from-shadcn-ui-3b71c9080a7d)

Are you evaluating **shadcn/ui** for a specific project? If you tell me your **team size** and **design resources**, I can help you weigh it against traditional libraries like Mantine, Radix Themes, or Material UI.

+8

* [](https://www.reddit.com/r/reactjs/comments/18968oq/any%5Fexperiences%5Fgood%5For%5Fbad%5Fwith%5Fshadcn%5Fui%5Fover/)  
Reddit·r/reactjs  
Any experiences good or bad with Shadcn UI over the ... - Reddit  
major underlying components like Radix UI provide their own update paths. Shadcn UI is primarily a set of pre-styled components bu...
* [](https://www.youtube.com/watch?v=BXcI9rh58oQ)  
YouTube·Jan Marshal  
The BIG Problem With Shadcn UI…  
fundamental design choices, poorly maintained underlying dependencies, limited customization options, While Shadcn UI is designed ...  
17:53
* [](https://leonardomontini.dev/shadcn-ui-use-with-caution/)  
Leonardo Montini  
What I DON'T like about shadcn/ui - Leonardo Montini  
Most of the components are simply customizations of headless components coming from another great library that is Radix-ui. Let's ...

Show all

## alternatives

alternatives

1:37 AM

### alternatives

The top alternatives to **shadcn/ui** fall into two main categories: **standard npm-installed libraries** that eliminate copy-paste maintenance, and **headless primitives** that offer total styling freedom without bloated codebases.

#### 1\. Batteries-Included UI Libraries (Best to Avoid Maintenance Overhead)

If your main goal is avoiding manual code updates and getting complex components (like date pickers and data tables) out of the box, use a traditional package-based library.

* **[Mantine](https://mantine.dev/):** Widely considered the strongest all-in-one React UI library. It includes over 100 customizable components, built-in hooks, form management, and rich text editors, all maintained via standard `npm` updates.
* **[HeroUI (formerly NextUI)](https://www.heroui.com/):** Built on top of Tailwind CSS and React Aria, it offers a sleek, modern aesthetic similar to shadcn/ui. Unlike shadcn, it installs as a standard dependency with built-in animations and cohesive theming.
* **[Chakra UI](https://www.chakra-ui.com/):** Known for its strong developer experience and style-props API. Version 3 modernized its architecture around Ark UI, offering great accessibility and rapid prototyping without writing raw CSS.

#### 2\. Headless UI Primitives (Best for Custom Design Systems)

If you like shadcn/ui's unopinionated nature and accessibility—but want to write your own markup and styles from scratch without copying boilerplate—go directly to the underlying engines.

* **[Radix Primitives](https://www.radix-ui.com/primitives):** The unstyled, accessible engine that powers most of shadcn/ui. Using Radix directly lets you install individual packages (e.g., `@radix-ui/react-dialog`) and style them purely with your own CSS or Tailwind classes.
* **React Aria Components:** Maintained by Adobe, this library offers industry-leading accessibility, internationalization, and mobile touch support. It provides unstyled components that are much easier to customize than legacy ARIA hooks.
* **[Base UI](https://base-ui.com/):** Created by the team behind Material UI (MUI), Base UI provides completely unstyled, accessible primitives designed to work seamlessly with Tailwind CSS or plain CSS.
* **[Headless UI](https://headlessui.com/):** Built by the creators of Tailwind CSS. It has a smaller component catalog than Radix or React Aria, but offers the tightest, cleanest integration with Tailwind utility classes.

#### 3\. Copy-Paste & Registry Alternatives

If you actually like the copy-paste ownership model of shadcn/ui, several projects expand on it with different aesthetics or frameworks.

* **[Park UI](https://park-ui.com/):** Works just like shadcn/ui, but builds on Ark UI and Panda CSS (or Tailwind). Its major advantage is multi-framework support—it works across React, Solid, and Vue.
* **[DaisyUI](https://daisyui.com/):** A pure CSS plugin for Tailwind that adds semantic class names (like `btn` or `card`). It adds zero JavaScript bundle overhead and makes global theme switching effortless.

#### Quick Comparison

| Alternative          | Architecture | Styling Approach              | Best For                                                |
| -------------------- | ------------ | ----------------------------- | ------------------------------------------------------- |
| **Mantine**          | NPM Package  | CSS Modules / PostCSS         | Full-featured apps needing complex inputs & tables fast |
| **HeroUI**           | NPM Package  | Tailwind CSS                  | Modern, animated UIs without copy-paste overhead        |
| **React Aria**       | Headless NPM | Bring Your Own (Tailwind/CSS) | Strict enterprise accessibility & custom design systems |
| **Radix Primitives** | Headless NPM | Bring Your Own (Tailwind/CSS) | Building your own shadcn-style system from scratch      |
| **Park UI**          | Copy-Paste   | Panda CSS / Tailwind          | Teams using Vue or Solid alongside React                |

Which **styling setup** (e.g., Tailwind CSS, CSS Modules) and **project type** (e.g., data-heavy dashboard, marketing site) are you working with? I can narrow these down to the single best fit for your stack.

AI responses may include mistakes. For financial advice, consult a professional. [Learn more](https://support.google.com/websearch?p=aimode&gl=us)

## how to install each via npm

how to install each via npm

1:38 AM

### how to install each via npm

Each alternative installs via **npm** using a standard package command, though several also require a quick CSS import or provider setup afterward.

#### 1\. Batteries-Included UI Libraries

* **[Mantine](https://mantine.dev/getting-started/)**  
bash  
```  
npm install @mantine/core @mantine/hooks  
```  
  
_(Note: Requires importing `@mantine/core/styles.css` in your root file and setting up PostCSS)._
* **[HeroUI (v3)](https://heroui.com/en/docs/react/getting-started/quick-start)**  
bash  
```  
npm install @heroui/styles @heroui/react  
```  
  
_(Note: Requires importing `@import "@heroui/styles";` right after Tailwind CSS in your main CSS file)._
* **[Chakra UI (v3)](https://chakra-ui.com/docs/get-started/installation)**  
bash  
```  
npm install @chakra-ui/react @emotion/react  
```  
  
_(Note: You can also run `npx @chakra-ui/cli snippet add` afterward to generate pre-configured provider and theme snippets)._ [](https://mantine.dev/getting-started/)

#### 2\. Headless UI Primitives

* **[Radix Primitives](https://www.radix-ui.com/primitives/docs/overview/getting-started)**  
bash  
```  
npm install radix-ui  
```  
  
_(Note: Radix now provides a unified package so you don't have to install individual `@radix-ui/react-*` packages one by one)._
* **[React Aria Components](https://react-aria.adobe.com/getting-started)**  
bash  
```  
npm install react-aria-components  
```  

* **[Base UI](https://base-ui.com/react/overview/quick-start)**  
bash  
```  
npm install @base-ui/react  
```  
  
_(Note: Replaces the deprecated `@mui/base` package)._
* **Headless UI** [](https://www.npmjs.com/package/@headlessui/react)  
bash  
```  
npm install @headlessui/react  
```  


#### 3\. Copy-Paste & CSS Plugin Alternatives

* **[Park UI](https://park-ui.com/docs/installation)**  
bash  
```  
npm install @ark-ui/react lucide-react  
npx @park-ui/cli init  
```  
  
_(Note: Because Park UI uses a registry model like shadcn/ui, you install its underlying engine via npm and use its CLI to initialize components)._
* **[DaisyUI](https://daisyui.com/docs/install/)**  
bash  
```  
npm install -D daisyui@latest  
```  
  
_(Note: Requires adding `@plugin "daisyui";` inside your main CSS file alongside `@import "tailwindcss";`)._ [](https://daisyui.com/docs/install/)

Are you using **Next.js**, **Vite**, or another framework? Let me know which library caught your eye and I can share the exact **root provider and CSS configuration** needed to get your first component rendering.

+12

* [](https://www.npmjs.com/package/@headlessui/react)  
NPM  
@headlessui/react - npm  
npm install @headlessui/react
* [](https://base-ui.com/react/overview/quick-start)  
Base UI  
Quick start - Base UI  
A quick guide to getting started with Base UI. Install the library Install Base UI using a package manager. Installation command p...
* [](https://react-aria.adobe.com/getting-started)  
React Aria  
Getting started | React Aria  
React Aria: Install via \`npm install react-aria-components\`. Quick start: copy/paste CSS or Tailwind examples, download ZIP, open ...

Show all

## pros cons of each headless options

pros cons of each headless options

1:39 AM

### pros cons of each headless options

Each headless library trades off **component coverage, API ergonomics, and maintenance velocity**—with **React Aria** leading in enterprise complexity, **Base UI** offering the most modern active development, and **Headless UI** providing the simplest Tailwind integration. [](https://www.shadcndeck.com/blog/radix-vs-base-ui)

#### 1\. Base UI (`@base-ui/react`)

Created by the MUI team alongside several original Radix and Floating UI creators, Base UI has quickly become the modern successor to Radix—even becoming the default underlying engine for new shadcn/ui projects. [](https://dev.to/edriso/shadcn-vs-radix-vs-base-ui-which-one-should-a-junior-pick-in-2026-1jml)

* **Pros:**
  * **High development velocity.** Backed by full-time MUI engineers shipping frequent updates, modern features, and built-in RTL support.
  * **Cleaner composition API.** Replaces Radix's sometimes-finicky `asChild` pattern with an explicit `render` prop and state-aware styling functions.
  * **Better component coverage than Radix.** Includes built-in **Combobox**, **Autocomplete**, and **Number Field** primitives out of the box. [](https://www.youtube.com/watch?v=9vtSp7pL27w&t=936)
* **Cons:**
  * **Newer ecosystem.** Because it reached v1.0 later than its peers, it has fewer third-party tutorials, Stack Overflow threads, and AI code-generation training examples.
  * **Missing a few niche primitives.** Still lacks a few specialized components found elsewhere, such as a dedicated Date Picker, Data Table, or Context Menu. [](https://www.untitledui.com/blog/base-ui-vs-react-aria)

#### 2\. Radix Primitives (`radix-ui`)

The library that popularized headless UI in React. According to [ShadcnDeck's technical breakdown](https://www.shadcndeck.com/blog/radix-vs-base-ui), it remains battle-tested across millions of production apps, though its update pace has slowed significantly. 

* **Pros:**
  * **Massive ecosystem and stability.** Virtually every React developer and AI coding assistant knows its API, and its core components are heavily battle-tested.
  * **Ergonomic, uncontrolled-first API.** Handles internal state automatically for modals, dropdowns, and tabs without requiring boilerplate state hooks.
  * **Unified package option.** You can now install the single `radix-ui` package with reliable tree-shaking rather than managing dozens of separate dependencies. [](https://www.youtube.com/watch?v=lzG7Ojx%5FaH0)
* **Cons:**
  * **Slow maintenance.** After WorkOS acquired Modulz and key creators left to build Base UI, feature development largely stalled.
  * **Gaps in complex inputs.** Still lacks native Combobox, Multi-select, and Date Picker primitives, forcing you to bring in extra libraries like `cmdk`.
  * **`asChild` composition friction.** Passing custom components or refs through `asChild` can occasionally cause confusing DOM or ref-forwarding bugs. [](https://www.reddit.com/r/reactjs/comments/1989sd3/radixui%5Fvs%5Freact%5Faria%5Fvs%5Fheadless%5Fui/)

#### 3\. React Aria Components (`react-aria-components`)

Maintained by Adobe, this is the heavy-duty enterprise option built for strict compliance and complex data interfaces. As noted in [Untitled UI's deep-dive comparison](https://www.untitledui.com/blog/base-ui-vs-react-aria), it is the only major headless library that ships dates, colors, tables, and trees together. [](https://www.pkgpulse.com/guides/react-aria-vs-radix-primitives-2026)

* **Pros:**
  * **Unmatched component catalog.** Ships over 50 primitives, including complex **Date/Time Pickers**, **Color Pickers**, **Tables**, **GridLists**, and **Tree Views**.
  * **Gold-standard accessibility & i18n.** Built-in support for over 30 languages, 13 calendar systems, RTL layouts, and strict mobile/desktop screen-reader edge cases.
  * **Built-in form validation.** Integrates seamlessly with native HTML constraint validation and custom validation rules. [](https://www.pkgpulse.com/guides/react-aria-vs-headless-ui-vs-radix-primitives-2026)
* **Cons:**
  * **Steeper learning curve.** Its API is more verbose and explicit than Radix or Base UI, requiring more upfront reading to master.
  * **Larger bundle size.** Rich internationalization and interaction logic make it noticeably heavier than minimal alternatives.

#### 4\. Headless UI (`@headlessui/react`)

Built by Tailwind Labs, this library focuses on simplicity and tight integration with Tailwind CSS rather than exhaustive component coverage. [](https://medium.com/@mutasimbillahtoha/headless-ui-libraries-for-react-learning-from-the-best-to-build-the-next-342140411146)

* **Pros:**
  * **Fastest learning curve.** Has the smallest, simplest API surface—ideal if you just want a dialog, menu, or listbox working in minutes.
  * **First-class Tailwind ergonomics.** Exposes clean `data-*` state attributes (like `data-open` or `data-focus`) tailored directly to Tailwind utility variants.
  * **Vue support.** Also ships an official Vue package if your organization maintains apps in both frameworks.
* **Cons:**
  * **Very small component catalog.** Offers roughly 16 core components. You will not find sliders, accordions, tooltips, toast managers, or date pickers here.
  * **Limited low-level customization.** Sacrifices some granular composition hooks in favor of keeping its API simple. [](https://blog.logrocket.com/headless-ui-alternatives/)

#### Summary Comparison

| Library              | Best For                                            | Component Count | Biggest Drawback                              |
| -------------------- | --------------------------------------------------- | --------------- | --------------------------------------------- |
| **Base UI**          | New React design systems wanting modern APIs        | \~35+           | Newer ecosystem with fewer community examples |
| **Radix Primitives** | Teams wanting proven stability & AI familiarity     | \~30+           | Slow updates; missing Combobox & Date Picker  |
| **React Aria**       | Enterprise apps needing Dates, Tables & strict i18n | 50+             | Larger bundle size & steeper learning curve   |
| **Headless UI**      | Simple Tailwind sites needing basic modals & menus  | \~16            | Very small component selection                |

Which **specific UI components** are critical for your app (such as date pickers, searchable comboboxes, or data tables)? Let me know and I can confirm which library handles them cleanest without extra dependencies.

+10

* [](https://www.youtube.com/watch?v=lzG7Ojx%5FaH0)  
YouTube·OrcDev  
Base UI vs Radix - I Tested Both (Here's What You Should Use)  
Radix is not maintaining it that much like before some Radix developers went to base UI. would choose Big UI over Radics UI. AI is...  
7:46
* [](https://www.reddit.com/r/reactjs/comments/1989sd3/radixui%5Fvs%5Freact%5Faria%5Fvs%5Fheadless%5Fui/)  
Reddit·r/reactjs  
Radix-ui vs React Aria vs Headless UI : r/reactjs - Reddit  
Radix UI: Radix UI is considered a good option for headless components, especially when integrated with shadcn for a copy-paste co...
* [](https://www.shadcndeck.com/blog/radix-vs-base-ui)  
www.shadcndeck.com  
Radix vs Base UI: which headless React library should you use in 2026? | ShadcnDeck  
Both libraries provide … 30+ components, and powers millions of apps through shadcn/ui. for production React applications.

Show all

## pros cons of each styled options

pros cons of each styled options

1:39 AM

### pros cons of each styled options

Styled UI libraries trade off **out-of-the-box speed and polish against styling lock-in and upgrade friction**—with **Mantine** leading in sheer feature breadth, **HeroUI** delivering the sharpest modern aesthetics, **Chakra UI** excelling at component-prop ergonomics, and **DaisyUI** offering zero-JavaScript CSS simplicity.

#### 1\. Mantine (`@mantine/core`)

The heavyweight champion for data-rich applications and internal dashboards, built on CSS Modules with zero runtime styling overhead. [](https://generalistprogrammer.com/comparisons/chakra-ui-vs-mantine)

* **Pros:**
  * **Unmatched feature breadth.** Ships over 120 components alongside 70+ utility hooks, form management (`@mantine/form`), rich text editors, charts, notifications, and advanced date pickers for free.
  * **High shipping velocity.** Ideal for small teams or MVPs that need complex UI features working immediately without assembling five different third-party packages. [](https://designrevision.com/compare/mantine-vs-material-ui)
* **Cons:**
  * **Painful major upgrades.** As highlighted in [ShadcnDeck's comparison](https://www.shadcndeck.com/blog/mantine-vs-shadcn), Mantine ships frequent major versions (v7, v8, v9) with breaking API changes that force real migration work.
  * **Doesn't use Tailwind natively.** Relies on CSS Modules and PostCSS, which can feel disconnected if your team prefers Tailwind utility classes. [](https://www.shadcndeck.com/blog/mantine-vs-shadcn)

#### 2\. HeroUI (`@heroui/react`, formerly NextUI)

Built on Tailwind CSS v4 and Adobe's React Aria, HeroUI v3 is a ground-up rewrite focused on high-end visual polish and AI-assisted workflows. [](https://www.infoq.com/news/2026/07/heroui-v3-rewrite/)

* **Pros:**
  * **Best default aesthetics.** Ships with smooth CSS-driven animations, modern OKLCH color tokens, and refined visual defaults that require almost no design tweaking.
  * **Strong accessibility & Next.js support.** Inherits enterprise-grade WCAG accessibility from React Aria and works cleanly across React Server Components and App Router. [](https://designrevision.com/compare/heroui-vs-shadcn)
* **Cons:**
  * **Distinctive look can be hard to escape.** According to [DesignRevision's review](https://designrevision.com/compare/heroui-vs-shadcn), its signature polished aesthetic is opinionated; overriding it into a completely different brand look takes effort.
  * **Smaller ecosystem than older giants.** Because it underwent major architectural rewrites (rebranding from NextUI and rebuilding for v3), third-party integrations and legacy tutorials can be inconsistent.

#### 3\. Chakra UI (`@chakra-ui/react`)

Famous for popularizing "style props" (e.g., `<Box p={4} bg="gray.100">`), Chakra v3 rebuilt its internals on Ark UI and zero-runtime styling. [](https://adminlte.io/blog/mantine-vs-chakra-ui-vs-mui/)

* **Pros:**
  * **Intuitive style-props API.** Developers who dislike long Tailwind class strings love writing responsive styles directly as typed JSX props.
  * **Clean v3 architecture.** Modernized state management via Zag.js state machines and eliminated legacy runtime CSS-in-JS performance bottlenecks. [](https://medium.com/@a.heydari.dev/simplifying-chakra-ui-v3-recipes-vs-chakra-factory-a-developers-perspective-4020b62f1b4d)
* **Cons:**
  * **No built-in complex data grid.** As noted in [FrontFamily's guide](https://www.frontfamily.com/guides/mui-vs-chakra), Chakra's table is just a styled HTML table—you still have to wire up TanStack Table manually for sorting or pagination.
  * **v2-to-v3 ecosystem split.** On [Reddit](https://www.reddit.com/r/reactjs/comments/1j2f1i0/is%5Fchakra%5Fui%5Fv3%5Fstill%5Frelevant%5Fmigration%5Ffrom/), opinions are mixed regarding v3: while some developers transitioned smoothly, others found the breaking API changes and CLI snippet model frustrating. [](https://www.reddit.com/r/reactjs/comments/1j2f1i0/is%5Fchakra%5Fui%5Fv3%5Fstill%5Frelevant%5Fmigration%5Ffrom/)

#### 4\. DaisyUI (`daisyui`)

A pure CSS plugin for Tailwind that replaces verbose utility chains with semantic component classes like `btn`, `card`, and `modal`. [](https://shadcnspace.com/blog/daisy-ui-vs-shadcn-ui)

* **Pros:**
  * **Zero JavaScript bundle overhead.** Purely CSS-based, meaning it works in any framework (React, Vue, Svelte, plain HTML) and keeps bundles tiny.
  * **Effortless global theming.** Includes dozens of built-in themes and a theme generator that lets you restyle your entire app by changing a single HTML attribute. [](https://daisyui.com/blog/daisyui-2025-wrapped/)
* **Cons:**
  * **No JavaScript behavior or accessibility.** Because it is only CSS, interactive components like modals, dropdowns, and comboboxes lack built-in focus trapping, keyboard navigation, and ARIA state management unless you code them yourself or pair it with a headless library.
  * **Harder to customize the "last 5%."** As [ShadcnSpace notes](https://shadcnspace.com/blog/daisy-ui-vs-shadcn-ui), overriding pre-packaged CSS classes for bespoke design tweaks can get messy as an app scales.

#### 5\. Park UI (`@ark-ui/react` \+ `@park-ui/cli`)

Essentially "shadcn/ui for Ark UI," offering copy-paste components powered by Panda CSS or Tailwind.

* **Pros:**
  * **Multi-framework support.** Unlike shadcn/ui (React-only), Park UI works across React, Solid, and Vue using the same underlying state machines.
  * **Richer components than Radix.** Inherits Date Pickers, Color Pickers, and Tree Views directly from Ark UI. [](https://www.untitledui.com/blog/base-ui-vs-react-aria)
* **Cons:**
  * **Retains shadcn's copy-paste maintenance.** You still own the copied component files and have to manage upstream updates manually.
  * **Smaller community.** Far fewer community registries, templates, and AI training examples compared to shadcn/ui or Mantine.

#### Summary Comparison

| Library       | Styling Engine       | JS Behavior Included?     | Biggest Strength                           | Biggest Drawback                            |
| ------------- | -------------------- | ------------------------- | ------------------------------------------ | ------------------------------------------- |
| **Mantine**   | CSS Modules          | Yes (120+ components)     | Massive feature & hook catalog             | Breaking changes on major updates           |
| **HeroUI**    | Tailwind CSS v4      | Yes (75+ components)      | Best out-of-the-box visuals & animations   | Opinionated aesthetic is harder to override |
| **Chakra UI** | Panda / Zero-runtime | Yes (\~50+ components)    | Ergonomic JSX style props                  | No built-in sorting/filtering Data Table    |
| **DaisyUI**   | Pure Tailwind CSS    | **No** (CSS classes only) | Zero JS overhead & instant theme switching | Lacks built-in ARIA/keyboard interactivity  |
| **Park UI**   | Panda CSS / Tailwind | Yes (via Ark UI)          | Works in React, Vue, and Solid             | Still requires copy-paste code maintenance  |

Between **speed of shipping** (like Mantine or HeroUI) and **total visual customization** (like a headless library + Tailwind), which priority matters more for what you're building right now?

+16

* [](https://blog.logrocket.com/headless-ui-alternatives/)  
LogRocket Blog  
Headless UI alternatives: Radix Primitives vs. React Aria vs ...  
Headless UI Alternatives: Radix Primitives, React Aria, Ark UI. Using React component libraries is a popular way to quickly build ...
* [](https://generalistprogrammer.com/comparisons/chakra-ui-vs-mantine)  
generalistprogrammer.com  
Chakra UI vs Mantine: Complete Comparison 2025  
Ideal for admin dashboards, internal tools, data-heavy applications, and projects where rapid development with full-featured compo...
* [](https://designrevision.com/compare/mantine-vs-material-ui)  
DesignRevision  
Mantine vs Material UI (MUI): Which to Use? (2026)  
Mantine v7+ uses CSS Modules with no runtime styling. Mantine bundles a big hooks library, forms, dates, and charts for free. Both...

Show all

## stack of mantine

stack of mantine

1:43 AM

### stack of mantine

**Mantine** is  \[Highlight start\] built on **React 19.2+, TypeScript, native CSS Modules, and PostCSS** \[Highlight end\] , deliberately avoiding external headless UI wrappers in favor of its own internal primitives and hooks. [](https://mantine.dev/getting-started/)

#### Core Architecture & Styling Stack

* **Framework & Language:** Written entirely in TypeScript for React. As of Mantine v9, the library requires **React 19.2+**, utilizing modern React hooks like `useEffectEvent` internally for stable event handling. [](https://www.reddit.com/r/reactjs/comments/1s8lebb/mantine%5F90%5Fis%5Fout%5F200%5Fhooks%5Fand%5Fcomponents%5Fnew/)
* **Styling Engine:** Uses static [CSS Modules](https://mantine.dev/styles/css-modules/) paired with native CSS variables (`--mantine-*`). This eliminates runtime CSS-in-JS overhead (it dropped Emotion starting in v7) and supports React Server Components out of the box. [](https://mantine.dev/styles/css-modules/)
* **CSS Tooling:** Relies on PostCSS via `postcss-preset-mantine` and `postcss-simple-vars` to handle responsive mixins, dark/light color scheme selectors, and theme tokens at build time.
* **Positioning & Overlays:** Uses Floating UI under the hood to power tooltips, popovers, dropdown menus, and floating windows. [](https://github.com/mantinedev/mantine/blob/master/packages/@mantine/core/src/components/FloatingWindow/FloatingWindow.tsx)

#### Modular Package Ecosystem

Rather than bundling everything into one giant download, Mantine splits its stack into version-locked `@mantine/*` packages (all installed packages must share the exact same version number): [](https://help.mantine.dev/q/how-to-update-dependencies)

* **Mandatory Core:** `@mantine/core` (120+ UI components) and `@mantine/hooks` (70+ state and DOM utility hooks). [](https://mantine.dev/)
* **Zero-Dependency Form Engine:** `@mantine/form` (\~6.3 kB gzipped), built purely on React without requiring Formik or React Hook Form.
* **Wrapped Third-Party Integrations:** For specialized UI features, Mantine builds thin, theme-integrated wrappers around proven libraries:
  * **Rich Text:** `@mantine/tiptap` (built on Tiptap)
  * **Charts:** `@mantine/charts` (built on Recharts)
  * **Carousels:** `@mantine/carousel` (built on Embla Carousel)
  * **Dates:** `@mantine/dates` (powered by Day.js) [](https://www.mantine-react-table.com/docs/getting-started/install)

#### Framework & AI Compatibility

* **Meta-Frameworks:** Works natively with **Next.js** (App & Pages Router), **Vite**, and **React Router**.
* **AI Tooling:** Ships with official `llms.txt` documentation files and an `@mantine/mcp-server` package for AI code editors.

_(Note: If you meant Mantine's layout component named `<Stack>`, it is a vertical flexbox container from `@mantine/core` used to space child elements evenly via `gap`, `align`, and `justify` props.)_ [](https://mantine.dev/core/stack/)

Are you looking to integrate Mantine into an existing **Next.js** or **Vite** project, or checking how it plays alongside **Tailwind CSS**? Let me know your setup and I can share the exact config files.

+8

* [](https://mantine.dev/core/stack/)  
Mantine  
Stack - Mantine  
Stack is a vertical flex container. If you need a horizontal flex container, use Group component instead. If you need to have full...
* [](https://help.mantine.dev/q/how-to-update-dependencies)  
Mantine  
How to update Mantine dependencies?  
{ "name": "your-project", "version": "1.0.0", "scripts": {}, "dependencies": { "@mantine/core": "^7.2.2", "@mantine/hooks": "^7.2.
* [](https://mantine.dev/getting-started/)  
Mantine  
Getting started | Mantine  
Install dependencies: npm install @mantine/core @mantine/hooks postcss postcss-preset-mantine postcss-simple-vars PostCSS without ...

Show all

# example of mantine ui

**Mantine UI** is an open-source collection of over 120 responsive, pre-built React components and page sections built on top of the Mantine core library. It lets you quickly assemble dashboards, forms, and landing pages with built-in dark mode support and TypeScript compatibility. [](https://ui.mantine.dev/)

### Code Example: Interactive Login Card

To use Mantine components, wrap your application in a `MantineProvider` and import elements from `@mantine/core`. Below is a complete example of a clean authentication card using Mantine's layout, input, and button primitives. [](https://mantine.dev/form/recipes/)

tsx

```
import '@mantine/core/styles.css';
import {
  MantineProvider,
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Container,
} from '@mantine/core';

export function AuthenticationExample() {
  return (
    <MantineProvider defaultColorScheme="light">
      <Container size={420} my={40}>
        <Title ta="center">Welcome back!</Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Container>
    </MantineProvider>
  );
}

```



### Popular Component Categories & Live Demos

You can browse and copy ready-made code snippets directly from the official [Mantine UI Gallery](https://ui.mantine.dev/): 

* **Application UI.** Includes responsive `AppShell` layouts, navbars, user profile menus, drag-and-drop lists, and data tables.
* **Marketing & Page Sections.** Offers pre-styled hero headers, feature grids, pricing cards, FAQ accordions, and error pages.
* **Dashboards & Templates.** Community projects like [Mantine Boards](https://mantine-boards.vercel.app/) demonstrate full analytics interfaces combining charts, stat cards, and responsive grids.
* **Forms & Hooks.** Pairs inputs with the `@mantine/form` package and utility hooks like `useDisclosure` or `useClipboard` to handle validation and state without extra boilerplate. [](https://mantine-boards.vercel.app/)

### Developer Perspective

One point of agreement among users on [Reddit](https://www.reddit.com/r/reactjs/comments/wuiz65/example%5Fmantine%5Fapps%5Frunning%5Fin%5Fproduction/) is that Mantine offers a "batteries-included" developer experience with polished default styling, allowing teams to ship interfaces without writing custom CSS. [](https://www.reddit.com/r/reactjs/comments/wuiz65/example%5Fmantine%5Fapps%5Frunning%5Fin%5Fproduction/)

If you are looking to build a specific interface, let me know:

* **What type of component** you need (e.g., data table, multi-step form, navigation shell, or chart)
* Your **React framework** (e.g., Next.js, Vite, or Remix)

I can generate a tailored, copy-pasteable code snippet for your project.

* [](https://www.reddit.com/r/reactjs/comments/wuiz65/example%5Fmantine%5Fapps%5Frunning%5Fin%5Fproduction/)  
Reddit·r/reactjs  
Example mantine apps running in production? : r/reactjs - Reddit  
August 22, 2022 — Mantine provides a positive developer experience, being described as "gorgeous," and "battery included." ability to build sites wi...
* [](https://ui.mantine.dev/)  
Mantine  
Mantine UI  
Mantine UI: 123 free, open-source, MIT-licensed responsive components built with Mantine theme, supporting light/dark color scheme...
* [](https://mantine.dev/form/recipes/)  
Mantine  
Recipes - Mantine  
Recipes. use-form examples · Set initial values with async request. TextInput, Checkbox } Save form values to local storage. List ...

Show all

# adopters of mantine ui

**Mantine UI** is adopted by thousands of companies, open-source projects, and SaaS platforms—with web technology trackers like [Wappalyzer](https://www.wappalyzer.com/technologies/ui-frameworks/mantine/) detecting it across roughly **6,700 live websites** and the project seeing over **5 million monthly downloads**. [](https://www.wappalyzer.com/technologies/ui-frameworks/mantine/)

### Official Sponsors & Notable Backers

Organizations that financially sponsor and build with the [Mantine](https://mantine.dev/) ecosystem include: [](https://mantine.dev/)

* **Metabase.** An open-source business intelligence and analytics platform.
* **Medplum.** A healthcare developer platform for building clinical and EHR applications.
* **PropelAuth.** A B2B authentication and user management service.
* **N-iX.** A global software engineering and consulting company. [](https://mantine.dev/)

### Notable Production Websites & SaaS Platforms

According to technology tracking data from Wappalyzer and [BuiltWith](https://trends.builtwith.com/websitelist/Mantine), Mantine is heavily favored for data-dense web apps, admin panels, and customer dashboards across several well-known companies: [](https://trends.builtwith.com/websitelist/Mantine)

* **Analytics & E-Commerce Tools.** Platforms like **Triple Whale** (`app.triplewhale.com`), **Northbeam** (`dashboard.northbeam.io`), **AccuRanker** (`app.accuranker.com`), **Lightdash** (`app.lightdash.cloud`), and **ShipStation** (`ship14.shipstation.com`) use Mantine in their web interfaces. [](https://www.wappalyzer.com/technologies/ui-frameworks/mantine/)
* **Developer, Cloud & AI Platforms.** Companies including **Fastly** (`manage.fastly.com`), **Cockroach Labs**, **Qdrant** (`demo.qdrant.tech`), and **Civitai** (`civitai.com`) utilize Mantine for web portals and demos. [](https://www.wappalyzer.com/technologies/ui-frameworks/mantine/)
* **Enterprise & Consumer Services.** Organizations such as **Sunrun** (`scheduling.sunrun.com`), **Rakuten** (`r-ai.tsd.public.rakuten-it.com`), **Brevo**, **BizReach**, and **Paymob** deploy Mantine across scheduling, helpdesk, and internal portals. [](https://www.wappalyzer.com/technologies/ui-frameworks/mantine/)

### Open-Source & Community Projects

Users on [Reddit's r/reactjs](https://www.reddit.com/r/reactjs/comments/wuiz65/example%5Fmantine%5Fapps%5Frunning%5Fin%5Fproduction/) also point to several prominent open-source and indie developer products running Mantine in production: [](https://www.reddit.com/r/reactjs/comments/wuiz65/example%5Fmantine%5Fapps%5Frunning%5Fin%5Fproduction/)

* **Novu.** An open-source notification infrastructure platform.
* **LibrePhotos.** A self-hosted open-source photo management service.
* **Sizzy.** A specialized browser built for web developers and designers.
* **Refine.** The React-based framework for internal tools offers an official, first-class [Refine Mantine integration](https://refine.dev/blog/mantine-ui-react/) for building CRUD apps and admin panels. [](https://refine.dev/blog/mantine-ui-react/)

### Who Adopts Mantine Most?

* **Company Size.** Adoption is concentrated among small-to-midsize tech companies (between **2 and 200 employees**), where fast shipping and out-of-the-box components like date pickers, modals, and data forms save engineering time. [](https://www.reddit.com/r/reactjs/comments/16h1a9z/what%5Fdo%5Fyou%5Fthink%5Fof%5Fmantine%5Fwhy%5Fdo%5Fyou%5Fprefer%5Fit/)
* **Primary Use Cases.** Teams commonly choose it over alternatives like Material UI or Chakra UI for **internal tools, B2B SaaS dashboards, and admin portals** because of its built-in hooks (`@mantine/hooks`), native dark mode, and minimal styling boilerplate. [](https://www.linkedin.com/posts/florian-rappl%5F120-responsive-components-built-with-mantine-activity-7305150502617403392-h0WB)

Are you evaluating **Mantine** for a specific type of project (like an **admin dashboard**, **public SaaS**, or **design system**)? Let me know what features matter most to you, and I can compare how Mantine stacks up against alternatives like **shadcn/ui** or **MUI**.

* [](https://mantine.dev/)  
Mantine  
Mantine  
Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components and 7...
* [](https://www.reddit.com/r/reactjs/comments/16h1a9z/what%5Fdo%5Fyou%5Fthink%5Fof%5Fmantine%5Fwhy%5Fdo%5Fyou%5Fprefer%5Fit/)  
Reddit·r/reactjs  
What do you think of mantine? Why do you prefer it or why not ...  
September 13, 2023 — Mantine is often preferred over MUI due to feeling more polished and modern, requiring less customization by default for component...
* [](https://dev.to/saltorgil/why-i-chose-mantine-as-my-react-ui-library-34nm)  
DEV Community  
Why I Chose Mantine as my React UI Library - DEV Community  
June 18, 2025 — React UI library selected over MUI (restrictive free Figma kit) and Ant Design … for tight-deadline small-scale application.

Show all


