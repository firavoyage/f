# what if i run pnpm init inside a subfolder

3:39 AM

If you run `pnpm init` inside a subfolder, **pnpm will create a brand-new `package.json` file directly inside that subfolder**, treating it as its own isolated Node.js package. \[[1](https://www.codecapers.com.au/pnpm-workspaces/)]

How this affects your project depends entirely on whether your root folder is already set up as a **[pnpm Workspace](https://pnpm.io/workspaces)** or if it is just a standalone project. \[[1](https://pnpm.io/workspaces), [2](https://www.codecapers.com.au/pnpm-workspaces/)]

### Scenario A: Your root folder is a Monorepo / Workspace \[[1](https://nx.dev/blog/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx)]

If you have a `pnpm-workspace.yaml` file in your root folder, this is the intended way to create a multi-package repository. \[[1](https://www.codecapers.com.au/pnpm-workspaces/)]

- **The Outcome**: The subfolder becomes a distinct package (or "sub-package") in your monorepo.
- **Shared Configuration**: When you run `pnpm install` from the root, pnpm will automatically detect the new `package.json` in the subfolder. It will manage all dependencies through a single, shared `pnpm-lock.yaml` file at the root, optimizing your disk space.
- **Flag Differences**: If you use the `--init-package-manager` flag, pnpm will ignore it for the subfolder package, as it locks the pnpm version only at the workspace root. \[[1](https://pnpm.io/cli/install), [2](https://pnpm.io/cli/init), [3](https://pnpm.io/workspaces), [4](https://www.codecapers.com.au/pnpm-workspaces/), [5](https://nx.dev/blog/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx)]

### Scenario B: Your root folder is a standard single project

If you do not use pnpm workspaces and simply have a project with nested folders, running `pnpm init` in a subfolder creates a "nested project" structure. \[[1](https://stackoverflow.com/questions/31773546/the-best-way-to-run-npm-install-for-nested-folders)]

- **The Outcome**: The subfolder will completely ignore the root project's `package.json`.
- **Isolated Packages**: If you run while inside that subfolder, pnpm will track those dependencies separately from your root project.
- **The "Accidental Monorepo" Gotcha**: Running standard pnpm commands from the root will not automatically look inside or manage this subfolder unless you explicitly configure workspaces. \[[1](https://github.com/pnpm/pnpm/issues/1335), [2](https://www.codecapers.com.au/pnpm-workspaces/)]

### Summary of What Happens Inside the Subfolder

The newly generated `package.json` will automatically pull context clues from the subfolder itself: \[[1](https://pnpm.io/cli/init), [2](https://www.codecapers.com.au/pnpm-workspaces/)]

- **Name**: The `"name"` field in the `package.json` will default to the exact name of your subfolder (e.g., if the subfolder is `/packages/api`, the name will be `"api"`).
- **Version & Module**: It defaults to version `"1.0.0"` and uses the `"module"` type system unless specified otherwise via CLI arguments. \[[1](https://pnpm.io/cli/init)]

If you'd like to tailor this setup, tell me:

- Do you intend to build a **monorepo / multi-package project**?
- Do you already have a **`package.json` or `pnpm-workspace.yaml`** at your root level?

I can guide you through linking these folders together correctly!

- [link](https://stackoverflow.com/questions/31773546/the-best-way-to-run-npm-install-for-nested-folders)\
  The best way to run npm install for nested folders? - Stack Overflow\
  5 Comments. ... Use Case 1: If you want be able to run npm commands from within each subdirectory (where each package. json is), y...\
  Stack Overflow
- [link](https://pnpm.io/workspaces)\
  Workspace - PNPM\
  sharedWorkspaceLockfile​ ... If this is enabled, pnpm creates a single pnpm-lock. yaml file in the root of the workspace. This als...\
  PNPM
- [link](https://pnpm.io/cli/init)\
  pnpm init\
  Options​ \* --bare​ Added in: v10.25.0. Creates a package. json with only the required fields. \* --init-type ​ Default: module. Typ...\
  PNPM

Show all

# material three material you timeline

Google's design language has evolved significantly over more than a decade, with **Material Design 3 (Material You) serving as the current standard, recently updated via the Material 3 Expressive expansion.** \[[1](https://shakilbd.medium.com/material-design-the-revolution-of-android-eco-system-d3cbdb587b97)]

The complete development and release timeline spans from the inception of the system to its ongoing layout optimizations. \[[1](https://design.google/library/material-design-eras), [2](https://shakilbd.medium.com/material-design-the-revolution-of-android-eco-system-d3cbdb587b97)]

### Comprehensive Design System Timeline

- **2014 — Material Design 1.0**: Google introduced the original system at Google I/O. It relied on flat, paper-and-ink physics, grid-based layouts, and clean responsive transitions.
- **2018 — Material Design 2 (Material Theming)**: Google focused on brand customization. It introduced Material Theming, custom shape controls, and specialized typography packages to move away from rigid layout conformity.
- **May 2021 — Material You Revealed**: At Google I/O 2021, Google showcased **Material You**. It shifted UX priorities toward deeply personalized, highly adaptive, and accessible interfaces.
- **October 2021 — Material Design 3 (M3) Official Launch**: Coinciding with the release of Android 12 and the Pixel 6, Google launched **Material Design 3**, the formal framework for Material You. This release brought the "Monet" dynamic color engine, extracting UI palettes directly from a user's chosen wallpaper.
- **2022 to 2024 — Foundational Scale**: Google expanded the component catalog. It built cross-platform design token structures, multi-device adaptive layout systems for folding screens, and released the [Material Theme Builder](https://m3.material.io/blog/material-theme-builder).
- **May 2025 — Material 3 Expressive (M3E) Expansion**: Google announced "Material 3 Expressive" at Google I/O 2025. M3E is a functional layer added directly onto the existing M3 system rather than an entirely new "Material 4" version. It injected physics-based overshoot motion, varied button shapes, and a highly flexible, vibrant color palette.
- **Late 2025 — M3 Expressive Rollout**: Features officially deployed across the Google ecosystem via Android 16 and Wear OS 6 platforms. App overhauls were completed by December 2025 for key Google Workspace tools like Gmail, Docs, Keep, and Chrome.
- **2026 and Beyond — Core Adaption**: Present development centers on full code-base transitions to Jetpack Compose. The [Google Design Ecosystem](https://m3.material.io/) focuses heavily on making components accessible, adaptive to extreme display form-factors, and stable for third-party development. \[[1](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [2](https://www.youtube.com/watch?v=TlauiHqWf1s), [3](https://medium.com/@sotti/android-design-history-material-1-paper-ink-the-birth-of-material-design-8dd008396e59), [4](https://medium.com/@sotti/android-design-history-material-2-material-theming-cd9f781a61b2), [5](https://design.google/library/material-design-eras), [6](https://m3.material.io/blog/announcing-material-you), [7](https://medium.com/design-aware/everything-you-need-to-know-about-material-design-3-afdc3f1e8f15), [8](https://developer.android.com/develop/ui/compose/designsystems/material2-material3), [9](https://m3.material.io/blog/material-theme-builder), [10](https://m3.material.io/get-started), [11](https://en.wikipedia.org/wiki/Material%5FDesign), [12](https://m3.material.io/blog/building-with-m3-expressive), [13](https://www.youtube.com/watch?v=StTkiL8IXus), [14](https://www.youtube.com/watch?v=6IsFP3gD28E\&t=5), [15](https://www.androidauthority.com/google-material-3-expressive-features-changes-availability-supported-devices-3556392/), [16](https://m3.material.io/), [17](https://www.reddit.com/r/GooglePixel/comments/1sfzf37/where%5Fis%5Fthe%5Frest%5Fof%5Fmaterial%5F3%5Fexpressive/)]

### Summary of Key Era Shifts

| Era \[[1](https://shakilbd.medium.com/material-design-the-revolution-of-android-eco-system-d3cbdb587b97), [2](https://medium.com/@sotti/android-design-history-material-1-paper-ink-the-birth-of-material-design-8dd008396e59), [3](https://medium.com/@sotti/android-design-history-material-2-material-theming-cd9f781a61b2), [4](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [5](https://blog.google/products-and-platforms/platforms/android/material-3-expressive-android-wearos-launch/), [6](https://www.youtube.com/watch?v=VkI%5F0pEDWAo), [7](https://medium.com/design-aware/everything-you-need-to-know-about-material-design-3-afdc3f1e8f15), [8](https://www.youtube.com/watch?v=6IsFP3gD28E\&t=5), [9](https://www.youtube.com/watch?v=Yx-zMcIh8A4\&t=117)] | Key Theme                | Landmark Visual Attribute                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------------- |
| **Material 1 (2014)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Paper & Ink              | Drop shadows, rigid grids, clean primary accents            |
| **Material 2 (2018)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Brand Customization      | Custom rounded corners, custom typography                   |
| **Material 3 / You (2021)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Ultimate Personalization | Wallpaper dynamic color extraction, pills, huge sliders     |
| **M3 Expressive (2025)**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Emotional Engagement     | Spring/overshoot motion physics, asymmetrical button shapes |

If you are looking to integrate this into a specific project, let me know your **development environment** (e.g., Jetpack Compose, Flutter, or Web) so I can guide you through the appropriate **design tokens** or **theme migration steps**. \[[1](https://m3.material.io/blog/material-theme-builder), [2](https://m3.material.io/get-started)]

- [link](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4)\
  Android Design History — Material Design 3: Material You\
  Oct 19, 2025 — Material Design 1, 2 and 3 — October 2021. For years, Google's approach to naming its design system updates was focused on the exp...\
  Medium·Pablo Costa
- [link](https://m3.material.io/)\
  Material Design 3 - Google's latest open source design system\
  Material Design \* May 19, 2026What's new at Google I/O 2026Material's latest updates make it easier to create expressive, adaptive...\
  Material Design
- [link](https://en.wikipedia.org/wiki/Material%5FDesign)\
  Material Design - Wikipedia\
  At The Android Show: I/O Edition in May 2025, Google announced "Material 3 Expressive" for Android 16 and Wear OS 6. This version ...\
  Wikipedia

Show all

## You said: why doesnt mui adopt it

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>Material UI (MUI) has chosen not to fully adopt Material Design 3 (Material You) due to technical breaking changes, architectural conflicts, and shifting project priorities</strong></mark>**.** While Google designed Material 3 specifically to solve mobile, wallpaper-driven problems on Android, MUI's primary market consists of desktop web applications. \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [2](https://github.com/mui/material-ui/discussions/34738), [3](https://github.com/mui/material-ui/issues/44242), [4](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [5](https://github.com/mui/mui-design-kits/issues/103)]

The primary reasons behind MUI's deviation from the Material 3 specification include:

### 1. The Mobile vs. Desktop Optimization Conflict

Material 3 / Material You was built to extract dynamic UI color accents directly from a smartphone user's background wallpaper. \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [2](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [3](https://zoewave.medium.com/material-3-design-system-e91a15d303a0)]

- **Irrelevant for Web**: Desktop enterprise software and web portals do not use device wallpaper engines.
- **Layout Scaling Issues**: Many M3 components feature massive paddings, oversized target pills, and large sliders that \[look excellent on mobile screens but waste critical screen real estate on a dense desktop application dashboard. \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [2](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4)]

### 2. Severe Breaking Changes to the Core API

Directly adopting Material 3's typography and color specifications would require rewriting MUI's underlying token structures. \[]

- **Massive Performance Overhead**: Supporting both Material Design 2 and 3 simultaneously would require bundling code for both versions, massively \[bloating the framework's bundle sizes. \[[1](https://github.com/mui/material-ui/discussions/34738)]
- **Relaxed Type Safety**: Merging component parameters (like `variant` styles) across two vastly different design iterations drastically reduces runtime type safety for developers. \[[1](https://github.com/mui/material-ui/discussions/34738)]

### 3. Corporate Brand Constraints

The defining philosophy of Material You requires a user-driven, fluid color palette. \[[1](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [2](https://zoewave.medium.com/material-3-design-system-e91a15d303a0)]

- **Brand Eradication**: Companies building applications with [Material UI (MUI)](https://mui.com/material-ui/) demand strict control over their brand identities.
- **The Contrast Dilemma**: Dynamic coloring conflicts with brand identity. A company like Netflix or Spotify cannot let a user's phone wallpaper automatically override their signature brand colors. \[[1](https://mui.com/material-ui/), [2](https://medium.com/@sotti/android-design-history-material-design-3-material-you-9088dbe448f4), [3](https://www.linkedin.com/pulse/material-ui-overview-key-benefits-limitations-yuri-varshavsky-ikpef), [4](https://supercharge.design/blog/material-3-expressive)]

### 4. Technical Pivots inside the MUI Roadmap

MUI’s leadership redirected engineering resources toward foundational infrastructure over standard visual updates. \[[1](https://github.com/mui/material-ui/issues/44242)]

- **The Zero-Runtime Styling Push**: For its recent v6 and v7 updates, MUI focused heavily on launching a \[zero-runtime CSS-in-JS engine to properly support React Server Components. \[[1](https://mui.com/blog/2023-material-ui-v6-and-beyond/)]
- **Moving Past Material Entirely**: As officially noted in ongoing repository discussions, \[MUI intends to integrate its unstyled "Base UI" framework. Version 8 will push the library past standard Google conventions to help teams build entirely custom UI designs. \[[1](https://github.com/mui/material-ui/issues/44242)]

If you are currently choosing a library for a new web project, let me know if you **require strict compliance with Google's mobile guidelines** or if you want to **prioritize cross-platform web design**. I can help you evaluate alternate stacks.

- [link](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1)\
  Adopt Material Design 3 / Material You · Issue #29345 - GitHub\
  Oct 27, 2021 — Is the Google Pixel the only phone that really uses Android now? The large majority of the phones sold are based on a custom UI Sa...\
  GitHub
- [link](https://github.com/mui/material-ui/discussions/34738)\
  \[RFC] Material You support implementation strategy ... - GitHub\
  Oct 12, 2022 — 👍 Pros: Ease of implementation - will take least time to be implemented. 👎Cons: Increases the bundle-size of the components - th...\
  GitHub
- [link](https://mui.com/material-ui/)\
  Material UI: React components that implement Material Design\
  Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used...\
  MUI

Show all

## You said: i mean to split like mui 2 mui 3

**MUI decided against maintaining two separate, parallel libraries (like `@mui/material-v2` and `@mui/material-v3`) because it would fragment their team, double their maintenance work, and confuse their user base.** \[[1](https://github.com/mui/material-ui/discussions/34738)]

Early in the Material Design 3 lifecycle, developers proposed creating separate packages to allow a gradual migration. However, the core team explicitly bypassed this path for several key reasons: \[[1](https://github.com/mui/material-ui/discussions/34738)]

### 1. Devastating Maintenance Overhead

Splitting into two distinct libraries means managing two parallel codebases. \[[1](https://github.com/mui/material-ui/discussions/34738)]

- **Double the Bugs**: A bug found in a standard component like a `Select` dropdown or a `Modal` would have to be triaged, fixed, tested, and shipped across _both_ versions. \[[1](https://github.com/mui/material-ui/discussions/34738)]
- **Feature Parity Drag**: Every time the team introduced complex performance upgrades or React 19 compatibility features, they would have to implement them twice. This would cut the core team's productivity in half. \[[1](https://mui.com/blog/material-ui-2024-updates/), [2](https://github.com/mui/material-ui/discussions/34738)]

### 2. Ecosystem and Third-Party Fragmentation

The massive ecosystem of third-party plugins and MUI's own premium enterprise library, **MUI X** (which features complex Data Grids and Charts), would break. \[[1](https://www.reddit.com/r/reactjs/comments/1f2d191/material%5Fui%5Fv6%5Fis%5Fout%5Fnow%5Fmui/), [2](https://mui.com/blog/mui-product-comparison/), [3](https://blog.logrocket.com/mui-adoption-guide/)]

- If the team split the core library, the creators of MUI X would be forced to build and maintain two separate versions of their complex components to support both styling worlds.
- Community component libraries built on top of MUI would split, forcing developers into rigid ecosystem silos.

### 3. Conflicting Global Design Contexts

Material 2 and Material 3 use completely fundamentally different styling logic. \[[1](https://developer.android.com/develop/ui/compose/designsystems/material2-material3), [2](https://m3.material.io/blog/migrating-material-3)]

- **Material 2** relies on explicit style names (like `primary.main`, `secondary.dark`).
- **Material 3** shifts entirely to a highly atomic token layout (`md.sys.color.primary-container`, `md.sys.color.on-primary-container`).
- Running both context tokens simultaneously inside a single app container would cause severe theme provider collisions, making hybrid migrations a nightmare for developers. \[[1](https://github.com/mui/material-ui/discussions/34738), [2](https://moodup.team/material-design-2-vs-3-breaking-down-the-evolution-of-google-s-design-system/), [3](https://m3.material.io/blog/migrating-material-3), [4](https://pavelkorolev.xyz/blog/2025-05-09-material3-migration/)]

### 4. MUI's Pivot to "Base UI" Solved the Underlying Issue \[[1](https://github.com/mui/material-ui/discussions/34738)]

Instead of building a separate Material 3 library, MUI chose a smarter architectural path: **extracting unstyled components.**

- They invested engineering power into **Base UI**, a completely unstyled library that provides only the accessible logic, HTML structure, and state management of a component. \[[1](https://mui.com/blog/2026-and-beyond/), [2](https://mui.com/blog/mui-product-comparison/)]
- Because Base UI handles the functional engine, developers can easily layer Material 2, Material 3, or completely custom brand styles over it using modern styling engines without requiring MUI to manage separate, heavy visual libraries. \[[1](https://mui.com/blog/2026-and-beyond/)]

If you are trying to use Material 3 in a React project today, let me know if you would like me to point you toward **community-driven M3 alternatives**, or if you want to know how to **manually style modern MUI components** to mimic the M3 visual look. \[[1](https://www.reddit.com/r/reactjs/comments/1rauibn/i%5Fbuilt%5Fa%5Fzerodependency%5Fpixelperfect%5Fmaterial/), [2](https://github.com/mui/material-ui/issues/33186)]

- [link](https://github.com/mui/material-ui/issues/33186)\
  \[question/discussion] Any plans to develop Material Design 3 components/variants? · Issue #33186\
  Jun 16, 2022 — Material Design 3 (MD3) doesn't deviate too much from Material Design 2. However, some users would like to see MUI provide MUI v3 ...\
  GitHub
- [link](https://github.com/mui/material-ui/discussions/34738)\
  \[RFC] Material You support implementation strategy ... - GitHub\
  Oct 12, 2022 — copy @mui/material (v2) to @mui/material-base. extend from (import) @mui/material-base in @mui/material (v2), so feature-parity is...\
  GitHub
- [link](https://developer.android.com/develop/ui/compose/designsystems/material2-material3)\
  Migrate from Material 2 to Material 3 in Compose\
  Jun 2, 2026 — Approaches. In general, you should not use both M2 and M3 in a single app long-term. This is because the two design systems and re...\
  Android Developers

Show all

## You said: does mui want to write sth like mui 3 on top of mui baseui

**Yes, that was exactly the original plan, but MUI ultimately canceled the project because developer interest shifted completely away from Material Design.** \[[1](https://www.reddit.com/r/reactjs/comments/1pk18v9/base%5Fui%5F10%5Freleased/), [2](https://github.com/mui/material-ui/discussions/34738), [3](https://mui.com/blog/2021-developer-survey-results/)]

Between 2022 and 2024, the MUI team explicitly stated in their GitHub RFCs that their long-term roadmap was to build an experimental library called `@mui/material-next` on top of [MUI Base UI](https://mui.com/base-ui/getting-started/) to implement Material 3. \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [2](https://github.com/mui/material-ui/discussions/34738)]

However, they abandoned the idea for three major reasons:

### 1. Material Design Lost Global Traction

As the library matured, the MUI core team and the broader web development community realized that Material Design's popularity was declining rapidly for web applications. MUI maintainers openly noted that Material Design was losing momentum and that many developers no longer favored the aesthetics for desktop software. Building an entirely new Material 3 library became a bad business bet for the company. \[[1](https://www.reddit.com/r/reactjs/comments/1pk18v9/base%5Fui%5F10%5Freleased/)]

### 2. The Headless "Shadcn" Revolution

The massive rise of unstyled, headless components completely changed the React ecosystem. Developers stopped wanting heavy, opinionated visual themes preset by Google. They wanted bare-bones functional primitives that they could style entirely with their own CSS or Tailwind. This caused the team to shift 100% of their focus toward making Base UI a massive standalone product rather than just a stepping stone for Google styles. \[[1](https://mui.com/base-ui/getting-started/), [2](https://www.reddit.com/r/reactjs/comments/1pk18v9/base%5Fui%5F10%5Freleased/), [3](https://www.reddit.com/r/reactjs/comments/1qclkf7/i%5Fbuilt%5Fa%5Fzerodependency%5Fpixelperfect%5Fmaterial/), [4](https://mui.com/blog/base-ui-2024-plans/), [5](https://mui.com/blog/introducing-base-ui/)]

### 3. Google Abandoned Its Own Material Web Library \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1)]

Google's internal priorities shifted away from the web ecosystem. Google stopped active development on its official Material Web Components library, which relied on the Lit framework. With Google itself signaling that Material 3 was primarily a mobile OS design language (Android), the motivation for MUI to invest thousands of engineering hours porting it to React web development disappeared. \[[1](https://www.reddit.com/r/reactjs/comments/1qclkf7/i%5Fbuilt%5Fa%5Fzerodependency%5Fpixelperfect%5Fmaterial/), [2](https://news.ycombinator.com/item?id=40790414), [3](https://www.gsmarena.com/google%5Fpreviews%5Fandroid%5F16%5Fand%5Fwear%5Fos%5F6s%5Fmaterial%5F3%5Fexpressive%5Flook-news-67771.php)]

### Current Landscape If You Need Material 3

Because MUI decided not to build it, you have to look elsewhere if you strictly want a React-based Material 3 look: \[[1](https://www.testmuai.com/blog/material-ui-testing/)]

- **The Shadcn Approach (Recommended)**: You can take the unstyled Base UI components and manually layer Material 3 design tokens or Tailwind configs over them. \[[1](https://mui.com/base-ui/getting-started/), [2](https://djangostars.com/blog/shadcn-ui-and-material-design-comparison/)]
- **Community Ports**: Independent developers have stepped in to fill the void, creating lightweight, native React alternatives like React Material 3 Pure, which use CSS Modules to implement Google's pixel-perfect specifications without the framework bloat. \[[1](https://www.reddit.com/r/reactjs/comments/1qclkf7/i%5Fbuilt%5Fa%5Fzerodependency%5Fpixelperfect%5Fmaterial/)]

If you are starting a new application, let me know if you would like to see **how to apply Material 3 CSS tokens** onto an unstyled library, or if you prefer to evaluate a **different modern design system** like MUI Joy or Radix. \[[1](https://github.com/mui/material-ui/discussions/29024), [2](https://shadcnspace.com/blog/radix-ui-vs-base-ui), [3](https://mui.com/blog/first-look-at-joy/)]

- [link](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1)\
  Adopt Material Design 3 / Material You · Issue #29345 - GitHub\
  Oct 27, 2021 — Q2 2023 Done; Have the person focus on getting @mui/material-next to move forward, building with Base UI and Material Design v3. E...\
  GitHub
- [link](https://mui.com/base-ui/getting-started/)\
  MUI Base - Overview\
  Introduction. MUI Base is a library of unstyled React UI components and hooks. These components were extracted from Material UI, a...\
  MUI
- [link](https://www.reddit.com/r/reactjs/comments/1pk18v9/base%5Fui%5F10%5Freleased/)\
  Base UI 1.0 released! : r/reactjs - Reddit\
  Dec 11, 2025 — Do you have any insight on the status of MUI being built on top of Base UI? MUI already seems behind on their releases especially ...\
  Reddit·r/reactjs

Show all

## You said: md3 is very popular. why dont they do officially

**While Material Design 3 (MD3) is incredibly popular for mobile apps, it faces severe resistance in professional web development, which is MUI’s entire commercial customer base.** \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [2](https://trushitkasodiya.medium.com/material-design-3-for-flutter-modern-flutter-ui-components-made-simple-d27bd7298cc2)]

MUI is a for-profit company that makes its money selling enterprise UI software (like the **MUI X Data Grid** and corporate design kits). Despite MD3's massive consumer appeal on Android devices, it has two major flaws that prevent a large company like MUI from adopting it officially: \[[1](https://www.linkedin.com/posts/florian-gampert%5Fmui-is-not-a-design-system-its-the-output-activity-7432311021429657600-JMLT), [2](https://refine.dev/blog/ant-design-vs-mui/), [3](https://github.com/mui/mui-design-kits/issues/103)]

### 1. Web Developers Do Not Actually Want It

MD3 is popular with _end-users_ looking at their phone wallpapers, but it is deeply unpopular with _corporate web developers_. \[[1](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1)]

- **The "Too Big" Problem**: MD3 features massive rounded cards, heavily pill-shaped buttons, and giant mobile-first padding. When forced onto a desktop web layout, it wastes immense screen space, forcing enterprise dashboard users to scroll endlessly. \[[1](https://github.com/mui/material-ui/issues/33186), [2](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1), [4](https://octet.design/journal/gmail-material-3-redesign-secretly-rolled-out/)]
- **The Contrast Hazard**: MD3 uses soft, pastel color palettes designed for OLED phone screens. In a web dashboard environment, these low-contrast tones frequently fail strict global **WCAG Accessibility laws**, making them legally non-compliant for many corporate applications. \[[1](https://www.telerik.com/forums/kendo-theme-material-v11-not-backwards-compatible)]

### 2. Google Bypassed the Web Ecosystem Entirely

The primary blocker is that Google itself abandoned its own public web implementation of MD3. \[[1](https://news.ycombinator.com/item?id=40790414)]

- Google stopped actively maintaining its official **Material Web Components (MWC)** library. \[[1](https://news.ycombinator.com/item?id=40790414)]
- Instead, Google moved its engineering resources to focus entirely on mobile frameworks (Android, Flutter) and its own proprietary internal web tech called _Wiz_. \[[1](https://news.ycombinator.com/item?id=40790414)]
- For MUI to build an official MD3 web library, they would have to completely invent desktop layout adaptations from scratch without any guidelines or code support from Google. \[[1](https://github.com/mui/material-ui/discussions/27803)]

### 3. MUI Intentionally Rebranded Away from Google \[[1](https://blog.logrocket.com/mui-adoption-guide/)]

MUI's leadership realized that relying strictly on Google’s design language was a major business risk. \[[1](https://github.com/mui/material-ui/discussions/27803)]

- In 2021, they explicitly dropped their original name, **Material-UI**, and officially changed it to **MUI**.
- This move allowed them to launch non-Google design systems, such as **MUI Joy**, and focus on headless primitives (**Base UI**).
- Splitting focus to write a brand new, official `mui-v3` would derail their current product strategy, which aims to support the massive trend toward custom-branded, unstyled libraries. \[[1](https://github.com/mui/material-ui/discussions/27803), [2](https://www.youtube.com/watch?v=H-2WiOjK13Q), [3](https://talent500.com/blog/what-is-mui-and-what-do-you-need-to-know-about-it/), [4](https://adminlte.io/blog/shadcn-ui-vs-mui-vs-ant-design/), [5](https://proudlynerd.vidiemme.it/how-to-align-the-mui-config-to-your-design-system-7f5917b28c4e)]

If you love the MD3 aesthetic and are building a **mobile or hybrid app**, let me know if you would like recommendations for **frameworks where MD3 is officially supported** (such as Flutter or React Native alternatives).

- [link](https://github.com/mui/material-ui/discussions/27803)\
  \[RFC] Grow with Design · mui material-ui · Discussion #27803 - GitHub\
  Sep 20, 2021 — The new branding. Up to now, we've leveraged the traction that Material Design provided us. Since React is from Facebook, it seems...\
  GitHub
- [link](https://github.com/mui/material-ui/issues/29345?timeline%5Fpage=1)\
  Adopt Material Design 3 / Material You · Issue #29345 - GitHub\
  Oct 27, 2021 — Is the Google Pixel the only phone that really uses Android now? The large majority of the phones sold are based on a custom UI Sa...\
  GitHub
- [link](https://www.linkedin.com/posts/florian-gampert%5Fmui-is-not-a-design-system-its-the-output-activity-7432311021429657600-JMLT)\
  MUI is not a design system, it's a component library - LinkedIn\
  Feb 24, 2026 — MUI is not a design system. It's the output of one. And the difference matters more than people think. MUI gives you components. B...\
  LinkedIn·Florian Gampert

Show all


# 

