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



