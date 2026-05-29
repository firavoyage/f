# what components should a component library have

May 26, 2026

A robust software user interface (UI) component library should have a structured breakdown of elements ranging from fundamental foundations to complex layout and data blocks. \[[1](https://mikkelrom.com/posts/the-benefits-of-component-libraries-and-when-not-to-use-one/), [2](https://www.sanity.io/glossary/component-library), [3](https://jonyablonski.com/articles/2022/crafting-component-libraries-the-elements/), [4](https://link.springer.com/chapter/10.1007/979-8-8688-1318-4%5F7), [5](https://clearleft.com/thinking/on-building-component-libraries)]

1\. Foundation & Design Tokens

These are the foundational design primitives that serve as the visual backbone of your library. They are typically defined as CSS variables or design tokens: \[[1](https://frankcongson.com/blog/creating-a-component-library/), [2](https://bradfrost.com/blog/post/the-design-system-ecosystem/), [3](https://mikkelrom.com/posts/the-benefits-of-component-libraries-and-when-not-to-use-one/)]

- **Typography**: Font families, sizes, line heights, and weights.
- **Color Palette**: Primary, secondary, semantic (error, success, warning), and neutral shades.
- **Spacing Scale**: Consistent padding and margin increments.
- **Elevation**: Shadows, borders, and z-index layers to handle depth. \[[1](https://medium.com/design-bootcamp/building-a-design-system-component-library-and-style-guide-8c9c9d448b87), [2](https://jonyablonski.com/articles/2022/crafting-component-libraries-the-elements/), [3](https://uxtbe.medium.com/component-documentation-e6ba498ee851), [4](https://mikkelrom.com/posts/the-benefits-of-component-libraries-and-when-not-to-use-one/), [5](https://frankcongson.com/blog/creating-a-component-library/)]

2\. Layout Elements

Structural components that organize and arrange space on a web page: \[[1](https://retool.com/blog/what-makes-a-great-component-library), [2](https://m3.material.io/components), [3](https://www.dhiwise.com/post/ultimate-guide-to-organizing-your-nextjs-components-folder)]

- **Grid**: Multi-column systems for complex structures.
- **Flexbox/Stack**: Vertical and horizontal layout blocks to easily group items.
- **Container**: Max-width wrapper blocks that keep content aligned across screen widths.
- **Divider**: Subtle visual lines to separate distinct content pieces. \[[1](https://medium.com/@wicar/the-ultimate-guide-to-react-component-libraries-02fe60e20f17), [2](https://www.calibraint.com/blog/ui-ux-design-elements), [3](https://doc.sitecore.com/ch/en/users/content-hub/organize-components-on-a-page.html), [4](https://www.sliderrevolution.com/design/ui-elements/), [5](https://m3.material.io/components)]

3\. Core Actions & Inputs

The primary interactive elements that users use to take action or input raw data: \[[1](https://dept-info.labri.fr/~baudon/Master/AO%5FMiage/2018/A%20Visual%20Guide%20to%20Swing%20Components.pdf), [2](https://www.theknowledgeacademy.com/blog/ui-elements/), [3](https://www.sanity.io/glossary/component-library), [4](https://m3.material.io/components)]

- **Button**: Standard buttons with multiple variants like primary, secondary, danger, and ghost.
- **Text Input**: Basic inputs, text areas, password fields, and validation states.
- **Checkbox / Radio**: Elements for binary or single-choice list options.
- **Switch**: Alternating toggle buttons for immediate on/off preferences.
- **Select / Dropdown**: Native or custom menus to pick options from a list. \[[1](https://www.reddit.com/r/nextjs/comments/160sfpp/i%5Fdont%5Fknow%5Fwho%5Fneeds%5Fto%5Fhear%5Fthis%5Fbut%5Fjust%5Fuse%5Fa/), [2](https://dev.to/kathryngrayson/case-study-building-a-component-library-e90), [3](https://medium.com/design-bootcamp/6-tips-for-designing-a-products-component-library-937460db65fa), [4](https://medium.com/design-bootcamp/building-a-design-system-component-library-and-style-guide-8c9c9d448b87), [5](https://m3.material.io/components), [6](https://retool.com/blog/what-makes-a-great-component-library)]

4\. Navigation & Structure

Elements that help users find their way around your application: \[[1](https://magicui.design/blog/what-is-a-component-library), [2](https://m3.material.io/components)]

- **Navbar / Header**: Global top banners holding brand logos and main links.
- **Sidebar / Drawer**: Collapsible menu trays that slide out from screen edges.
- **Tabs**: Localized views that hide and display content blocks on the same page.
- **Breadcrumbs**: Inline text links showing hierarchical file or page paths.
- **Pagination**: Interactive page numbers to split huge data dumps into pieces. \[[1](https://www.hassellinclusion.com/blog/html5-sectioning-elements-accessible-landmarks/), [2](https://bootstrap-vue.org/docs/components/), [3](https://www.designmonks.co/blog/user-interface-elements), [4](https://www.sanity.io/glossary/component-library)]

5\. Data Display & Feedback

Components meant to visually feed information to users or communicate system states: \[[1](https://www.contentful.com/blog/ultimate-guide-react-component-library/), [2](https://m3.material.io/components)]

- **Table**: Clean rows and columns for sorting tabular data.
- **Card**: Visual containers holding a cohesive image, title, and body text.
- **Badge / Tag**: Compact micro-labels used to categorize items or flag counts.
- **Avatar**: Rounded graphics showing user profile pictures or fallback initials.
- **Alert / Toast**: Status popups delivering brief success, warning, or error flags. \[[1](https://dev.to/jacobandrewsky/component-librarires-should-you-use-them-4ff7), [2](https://www.uiprompt.site/en/components), [3](https://tackmobile.com/blog/Card-Components-in-UI-Design.html), [4](https://medium.com/design-bootcamp/6-tips-for-designing-a-products-component-library-937460db65fa), [5](https://www.contentful.com/blog/ultimate-guide-react-component-library/)]

6\. Overlays & Content Interactivity

Temporary interactive windows that float over the main UI layers: \[[1](https://medium.com/design-bootcamp/6-tips-for-designing-a-products-component-library-937460db65fa), [2](https://m3.material.io/components)]

- **Modal / Dialog**: Darkened backdrop popups forcing users to focus on a concrete task.
- **Tooltip**: Subtle text labels showing info when hovering over elements.
- **Accordion**: Vertically stacked lists that expand or collapse sections.
- **Carousel**: Horizontal sliders to cycle through promotional slides or images. \[[1](https://www.scribd.com/document/849825182/UNIT-5-Bootstrap), [2](https://medium.com/@bruno.mazza87/5-overlooked-html-elements-every-frontend-developer-should-know-222ec06a6e00), [3](https://medium.com/design-bootcamp/6-tips-for-designing-a-products-component-library-937460db65fa), [4](https://www.sanity.io/glossary/component-library), [5](https://retool.com/blog/what-makes-a-great-component-library)]

7\. Non-Visual "Library" Essentials

A successful component library requires built-in features that extend far beyond raw code blocks: \[[1](https://www.reddit.com/r/Frontend/comments/183rke3/how%5Fdo%5Fyou%5Fguys%5Fbuild%5Fand%5Fmaintain%5Fa%5Fcomponent/), [2](https://clearleft.com/thinking/on-building-component-libraries), [3](https://uxcel.com/glossary/ui-components), [4](https://ionic.io/resources/articles/what-is-a-ui-component-library)]

- **Accessibility (WCAG)**: Built-in semantic HTML, full keyboard navigation, and ARIA attributes.
- **Theme Support**: Direct dark-mode configurations and customizable style variations.
- **Documentation Space**: Live playground tools like Storybook alongside clear usage code snippets. \[[1](https://medium.com/@andricokaroulla/what-is-a-component-library-and-should-you-build-your-own-d42a0d2dc73a), [2](https://dev.to/onurhandtr/building-a-component-library-from-scratch-dlp), [3](https://www.reddit.com/r/reactjs/comments/1jyxlrr/individual%5Fcomponents%5Fvs%5Ffull%5Fcomponent%5Flibraries/), [4](https://suryashakti1999.medium.com/building-your-own-component-library-and-why-i-did-it-2ecc06db9330), [5](https://www.reddit.com/r/Frontend/comments/183rke3/how%5Fdo%5Fyou%5Fguys%5Fbuild%5Fand%5Fmaintain%5Fa%5Fcomponent/), [6](https://frankcongson.com/blog/creating-a-component-library/), [7](https://dev.to/kathryngrayson/case-study-building-a-component-library-e90)]

To narrow down exactly what you should build first, tell me:

- What **framework** are you building this for (e.g., React, Vue, native Web Components)?

- Are you planning to build it **from scratch** or style it on top of a headless library like **Radix UI** or **[React Aria](https://react-aria.adobe.com/)**?

- Is this library for a **specific industry app** (like e-commerce or a data dashboard) or a **general-purpose** brand system?

- [link](https://www.reddit.com/r/nextjs/comments/160sfpp/i%5Fdont%5Fknow%5Fwho%5Fneeds%5Fto%5Fhear%5Fthis%5Fbut%5Fjust%5Fuse%5Fa/)\
  I don't know who needs to hear this, but just use a component library.\
  It made our job faster, and I learnt a lot about re-usable UI components, how you can make one and the React way of controlling co...\
  Reddit

- [link](https://dev.to/kathryngrayson/case-study-building-a-component-library-e90)\
  Case Study: Building a Component Library - DEV Community\
  Brad Frost calls this "Interface Inventory" and it's a hugely beneficial thing to do when you're first starting out. Once you have...\
  DEV Community

- [link](https://mikkelrom.com/posts/the-benefits-of-component-libraries-and-when-not-to-use-one/)\
  The benefits of component libraries and when not to use one\
  I typically have three general categories in the component libraries that I build: UI components, Functional components (I just me...\
  mikkelrom.com

Show all

# what components does mui have

May 26, 2026

**[MUI (Material UI)](https://mui.com/material-ui/all-components/)** offers a comprehensive collection of prebuilt React components implementing Google's Material Design principles. \[[1](https://mui.com/components/), [2](https://mui.com/material-ui/getting-started/)]

The core Material UI library organizes its components into the following primary categories: \[[1](https://mui.com/material-ui/all-components/)]

Layout Components

These handle responsive spacing, grouping, and nesting of items: \[[1](https://medium.com/@emciez89/working-with-material-ui-f9db9263e16e)]

- **Box**: A multipurpose wrapper component acting as a styled .
- **Container**: Standard blocks to keep layout content horizontally centered.
- **Grid**: A flexbox-based 12-column system optimized for multi-dimensional layouts.
- **Stack**: A layout utility optimized for one-dimensional horizontal or vertical lines.
- **ImageList**: Clean grids specifically designed to organize photo sets. \[[1](https://mui.com/system/getting-started/), [2](https://mui.com/material-ui/react-box/), [3](https://mui.com/components/), [4](https://medium.com/@emciez89/working-with-material-ui-f9db9263e16e)]

Input Components

Interactive controls meant to handle raw user inputs and forms: \[[1](https://m3.material.io/components), [2](https://mui.com/components/)]

- **Button & ButtonGroup**: Primary click triggers and action pairings.
- **TextField & NumberField**: Input bars handling basic typing, validation, or numeric fields.
- **Autocomplete**: Dropdowns backed by smart search suggestions.
- **Checkbox, RadioGroup & Switch**: Selection toggles handling binary or multi-choice items.
- **Select**: Menus to pick discrete values out of standard lists.
- **Slider & Rating**: Linear adjustment sliders and star scoring systems.
- **TransferList**: Side-by-side boxes used to move selected options back and forth. \[, [2](https://mui.com/components/), [3](https://mui.com/material-ui/getting-started/), [4](https://mui.com/material-ui/react-list/)]

Data Display Components

Elements meant to neatly bundle, categorize, or show complex information: \[[1](https://mui.com/components/), [2](https://m3.material.io/components)]

- **Avatar & Badge**: Profile circle graphics and mini overlapping flag counters.
- **Chip**: Compact tags displaying categorical labels or status flags.
- **List**: Vertically stacked rows handling structural line indexes.
- **Table**: Strict spreadsheets offering sorting, pagination, and data rows.
- **Tooltip**: Brief text info popups appearing on item hover.
- **Typography**: Consistent text rendering elements handling headers, subtitles, and body styles. \[[1](https://mui.com/material-ui/react-list/), [2](https://m3.material.io/components), [3](https://www.geeksforgeeks.org/reactjs/react-material-ui/), [4](https://mui.com/components/)]

Feedback Components

Built-in indicators communicating app updates or background events: \[[1](https://mui.com/components/), [2](https://m3.material.io/components)]

- **Alert**: Permanent inline banners signalling success, warnings, or errors.
- **Backdrop**: Layered screens dimming the app UI during explicit page processes.
- **Dialog**: Modal popup windows forcing focused interaction.
- **Progress**: Spinners (`CircularProgress`) or lines (`LinearProgress`) representing loading states.
- **Skeleton**: Placeholder wireframe boxes showing up while elements load.
- **Snackbar**: Brief message updates sliding in at the edges of the view. \[[1](https://mui.com/joy-ui/react-list/), [3](https://mui.com/components/), [4](https://m3.material.io/components)]

Navigation Components

Elements allowing users to swap tabs or navigate throughout a site: \[[1](https://mui.com/components/)]

- **AppBar**: Global top headers tracking branding, site titles, and core tools.
- **BottomNavigation**: Persistent footer action tabs optimized for mobile screens.
- **Breadcrumbs**: Trailing map links detailing page hierarchy paths.
- **Drawer**: Collapsible side menus tracking extensive menu trees.
- **Tabs**: Local navigation bars partitioning view panels.
- **Pagination**: Number increments splitting vast data indexes.
- **Stepper**: Multi-step workflows tracking progress (e.g., checkout pages). \[, [2](https://mui.com/components/), [3](https://m3.material.io/components)]

Surfaces & Utility Components

- **Paper & Card**: Background panel bases utilizing standard Material shadows.
- **Accordion**: Stacking collapse boxes hiding secondary description text.
- **Modal, Popover & Popper**: Overlay utilities powering custom dropdown positioning and focus layers. \[[1](https://mui.com/material-ui/react-card/), [2](https://mui.com/components/), [3](https://mui.com/material-ui/react-box/)]

***

Advanced Components ([MUI X](https://mui.com/x/))

For enterprise projects with dense requirements, MUI provides advanced, specialized tools separate from the core framework: \[[1](https://mui.com/x/introduction/), [2](https://mui.com/blog/mui-product-comparison/)]

- **Data Grid**: High-performance tables supporting massive datasets with sorting, filtering, and Excel exporting.
- **Date & Time Pickers**: Functional calendars, date ranges, and clocks.
- **Charts**: Interactive lines, bars, and pie graphs.
- **TreeView**: Hierarchical structure trees for directory layouts. \[[1](https://mui.com/material-ui/getting-started/), [2](https://mui.com/x/introduction/), [3](https://mui.com/blog/mui-product-comparison/)]

Are you planning to build an application using **Material UI (MUI)**, or are you looking to use its component structure as a **reference architecture** for your own custom library?

- [link](https://mui.com/material-ui/react-list/)\
  React List component - Material UI\
  Components. Checkbox. Floating Action Button. Number Field. New. Transfer List. Toggle Button. Icons. Material Icons. Backdrop. Di...\
  MUI
- [link](https://mui.com/material-ui/all-components/)\
  Material UI components\
  useMediaQuery \* Inputs. \* Data display. \* Feedback. \* Surface. \* Navigation. \* Layout. \* Lab. Utils.\
  MUI
- [link](https://mui.com/components/)\
  Components - MUI\
  Components - MUI. Ready-to-use foundational React components, free forever. Advanced and powerful components for complex use cases...\
  MUI

Show all

# what components does radix ui have

**Radix UI** provides a robust collection of low-level, unstyled, and highly accessible primitives designed for building modern web applications and custom design systems. Because these components focus strictly on <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">logic, keyboard navigation, and WAI-ARIA compliance</mark>, they come without any built-in styles, allowing developers complete visual control. \[[1](https://www.radix-ui.com/primitives), [2](https://www.shadcn.io/template/radix-ui-primitives), [3](https://github.com/radix-ui/primitives), [4](https://sumble.com/tech/radix-ui)]

The components available in [Radix Primitives](https://www.radix-ui.com/primitives/docs) are broken down by their common use cases below: \[[1](https://www.radix-ui.com/primitives/docs), [2](https://manupa.dev/blog/anatomy-of-shadcn-ui), [3](https://www.shadcn.io/template/radix-ui-primitives)]

Overlays & Dialogs

- **Dialog**: A modal window that sits on top of the main application content.
- **Alert Dialog**: A modal variant used specifically for important confirmations or critical interruptions.
- **Popover**: A floating container that triggers on a click, used for menus or displaying extra context.
- **Tooltip**: A brief informational popup that appears when hovering or focusing on an element.
- **Hover Card**: A preview card that unfolds when hovering over a link or anchor point.
- **Toast**: A temporary, non-disruptive notification that slides in to display system updates. \[[1](https://www.radix-ui.com/primitives/docs), [2](https://www.shadcn.io/template/radix-ui-primitives), [3](https://docs.webstudio.is/university/radix/dialog), [4](https://mockflow.com/resources/ui-design-patterns), [5](https://claritee.io/blog/8-essential-user-control-ui-patterns-every-design-team-should-embrace/)]

Navigation & Menus

- **Dropdown Menu**: A menu triggered by a button, supporting complex submenus and keyboard selection.
- **Context Menu**: A custom menu that appears upon a right-click or long-press action.
- **Menubar**: A persistent horizontal bar containing multiple dropdown menus, similar to native desktop applications.
- **Navigation Menu**: A highly accessible menu layout optimized for site headers and primary site navigation.
- **Toolbar**: A container used to group a set of controls, such as text formatting buttons. \[[1](https://www.radix-ui.com/primitives), [2](https://www.radix-ui.com/primitives/docs), [3](https://docs.avonnicomponents.com/flow/flow-components/explore-all-flow-screen-components), [4](https://www.radix-ui.com/primitives/docs/components/navigation-menu), [5](https://www.shadcnblocks.com/components/menubar)]

Forms & Inputs

- **Form**: A wrapper that handles accessible form validation, error messaging, and field relationships.
- **Select**: A customizable alternative to the native browser dropdown picklist.
- **Checkbox**: A control that allows users to toggle binary options.
- **Radio Group**: A set of checkable options where only one choice can be active at a time.
- **Slider**: An interactive track that allows users to select a single value or a range of values.
- **Switch**: A digital toggle control modeled after physical on/off switches.
- **One-Time Password Field**: A structured layout designed for securely capturing multi-digit verification codes.
- **Password Toggle Field**: An input element that lets users reveal or obscure typed characters.
- **Label**: An accessible text label bound directly to form inputs. \[[1](https://www.radix-ui.com/primitives), [2](https://vercel.com/academy/shadcn-ui/what-are-radix-primitives), [3](https://www.radix-ui.com/primitives/docs), [4](https://www.radix-ui.com/primitives/docs/components/select), [5](https://pwskills.com/blog/ui-ux/radix-ui), [6](https://docs.webstudio.is/university/radix)]

Structure & Layout Layouts

- **Accordion**: A vertically stacked list of items that can be expanded or collapsed individually.
- **Collapsible**: A basic toggle component used to hide or show secondary information.
- **Tabs**: A content organization structure that separates views into individual, tabbed panels.
- **Scroll Area**: A customizable scrollbar container that replaces inconsistent native browser styling.
- **Separator**: A thematic visual line used to separate content sections cleanly.
- **Aspect Ratio**: A utility wrapper that locks an element (like an image or video) into a specific scale ratio.
- **Avatar**: A fallback element for profile pictures that displays initials or icons if the source image fails to load.
- **Progress**: An indicator bar reflecting the completion status of a task or long-running operation. \[[1](https://www.radix-ui.com/primitives/docs), [2](https://vercel.com/academy/shadcn-ui/what-are-radix-primitives), [3](https://docs.webstudio.is/university/radix), [4](https://component.gallery/), [5](https://reetikag-mahajan.medium.com/4-important-design-elements-in-user-interface-ui-design-1be78c2f1320)]

Utility Primitives

- **Accessible Icon**: A utility ensuring that visual icons are properly announced by screen readers.
- **Portal**: A mechanism to render elements (like overlays) directly at the root of the document body.
- **Slot**: A composition utility used to merge Radix component behaviors directly onto your own custom HTML elements.
- **Visually Hidden**: A utility to hide text elements visually while keeping them discoverable for assistive technologies. \[[1](https://www.radix-ui.com/primitives/docs), [2](https://refine.dev/blog/radix-ui/), [3](https://refine.dev/blog/radix-ui/), [4](https://ui.docs.amplify.aws/react/components), [5](https://nordhealth.design/components/)]

Are you planning to build a custom design system from scratch, or are you looking to use Radix alongside an existing framework like **shadcn/ui** or **Tailwind CSS**? Turn this answer into a guide on **how to style Radix components**. \[[1](https://www.radix-ui.com/primitives/docs/guides/styling), [2](https://www.shadcn.io/template/radix-ui-primitives), [3](https://shadcnspace.com/blog/radix-ui-vs-base-ui), [4](https://vercel.com/academy/shadcn-ui)]

- [link](https://www.radix-ui.com/primitives)\
  Radix Primitives\
  Focus on your product. It's no secret that robust UI components are tricky to build. Nailing accessibility details and complex log...\
  Radix UI
- [link](https://www.radix-ui.com/primitives/docs/components/select)\
  Select – Radix Primitives\
  The component that pops out when the select is open. ... The transform-origin computed from the content and arrow positions/offset...\
  Radix UI
- [link](https://github.com/radix-ui/primitives)\
  Radix Primitives is an open-source UI component library for building high-quality, accessible design systems and web apps. Maintained by @workos. · GitHub\
  Radix Primitives is an open-source UI component library for building web apps and design systems. It focuses on accessibility, cus...\
  GitHub

Show all

You said: criticism

While Radix UI is highly praised for its accessibility and flexibility, developers frequently encounter several drawbacks when using it in production.

Implementation Complexity

- **No default styling**: You must write all CSS, Tailwind classes, or styled-components from scratch.
- **High boilerplate**: Basic elements require nesting multiple primitives (e.g., `Root`, `Trigger`, `Portal`, `Content`).
- **Steep learning curve**: Developers must understand complex state composition and slot patterns to customize behavior.

Technical & Performance Overhead

- **Bundle size**: Adding multiple primitives can noticeably increase your JavaScript bundle size compared to native HTML.
- **React dependency**: The core library is strictly tied to React, making it unusable for projects built on Vue, Svelte, or native Web Components.
- **DOM pollution**: The rendering mechanism often injects multiple wrapper layers and extra nodes into the DOM tree.

Integration Challenges

- **Animation friction**: Implementing entry and exit transitions requires coordination with external libraries like Framer Motion or specific CSS keyframes.
- **Component gaps**: The library lacks several complex patterns out-of-the-box, such as full Date Pickers, Data Tables, or Comboboxes.
- **Version fragmentation**: Heavy breaking changes can occur between major version updates of individual primitive packages.

Are you evaluating Radix UI for a **team project** or a **personal app**, and what **styling method** (like Tailwind, CSS Modules, or Vanilla Extract) do you plan to use? I can outline the specific integration challenges for your stack.

You said: criticism on inadequacy

When developers critique Radix UI for its **inadequacy**, they are usually referring to architectural limitations, missing core features, and developer friction that make it insufficient as a standalone solution for complex enterprise applications. \[[1](https://www.linkedin.com/posts/david-gerrells%5Fmaybe-we-should-stop-using-so-much-opensource-activity-7410441280050302976-U-1P)]

Missing Complex Components

- **No Combobox / Autocomplete**: Radix lacks a native searchable dropdown or combobox pattern. Developers must rely on third-party alternatives like `cmdk`.
- **No Complex Forms**: It lacks built-in primitives for advanced form structures like Date Pickers, Multi-Select dropdowns, or Number Inputs.
- **No Data Management**: There are no primitives for building complex Data Tables, pagination, or sorting systems. \[[1](https://www.reddit.com/r/Frontend/comments/169yt7k/what%5Fdo%5Fyou%5Fthink%5Fabout%5Fusing%5Fui%5Fcomponents%5Flike/), [2](https://www.youtube.com/watch?v=TLUWRThKijg\&t=43), [3](https://news.ycombinator.com/item?id=37096111)]

Rigid Architecture Constraints \[[1](https://www.linkedin.com/posts/david-gerrells%5Fmaybe-we-should-stop-using-so-much-opensource-activity-7410441280050302976-U-1P)]

- **The `asChild` Prop**: This behavior clones the child element and merges props. If a developer forgets to forward React references (`forwardRef`), the component silently breaks. Newer libraries like Base UI fix this adequacy gap by replacing it with a cleaner `render` prop API.
- **State Isolation**: Radix primitives encapsulate logic deeply, making it difficult to pull internal states (like whether a dropdown is currently open or focused) into your parent component without declaring messy uncontrolled-to-controlled state overrides. \[[1](https://www.radix-ui.com/primitives/docs/guides/composition), [2](https://github.com/radix-ui/primitives/discussions/2117), [3](https://www.youtube.com/watch?v=TLUWRThKijg\&t=43), [4](https://www.youtube.com/watch?v=lzG7Ojx%5FaH0\&t=131)]

Interaction & Layout Flaws

- **Aggressive Layout Shifting**: Elements utilizing `react-remove-scroll` (like Dialogs) forcefully hide browser scrollbars, causing jarring visual jank and white gutters on non-macOS layouts.
- **Nestability Bugs**: Nesting a `Select` component inside a modal `Dialog` or `Sheet` can occasionally break focus trapping, trapping pointer hover states, or making nested fields entirely un-interactable.
- **Re-rendering Overhead**: Simple user actions, like opening a standard select dropdown, can cause aggressive re-renders due to the deep provider and context injection tree used by the library. \[[1](https://github.com/radix-ui/primitives/discussions/3056), [2](https://github.com/radix-ui/primitives/issues/1927), [3](https://www.reddit.com/r/Frontend/comments/169yt7k/what%5Fdo%5Fyou%5Fthink%5Fabout%5Fusing%5Fui%5Fcomponents%5Flike/)]

Are you considering switching away from Radix UI due to these gaps? I can compare Radix against alternatives like **React Aria** or **Base UI** to see which library better solves your project's specific limitations. \[[1](https://x.com/shadcn/status/1936082723904565435), [2](https://www.youtube.com/watch?v=TLUWRThKijg\&t=43)]

- [link](https://www.youtube.com/watch?v=lzG7Ojx%5FaH0\&t=131)\
  Base UI vs Radix - I Tested Both (Here's What You Should ...\
  Jan 16, 2026 — and I find it really funny that this is the main reason why people are voting for base UI because shetsen was working perfectly ev...\
  2m\
  YouTube·OrcDev
- [link](https://x.com/shadcn/status/1936082723904565435)\
  Radix, component libraries, and shadcn/ui\
  Jun 20, 2025 — Some thoughts on Radix, component libraries, and shadcn/ui. We're at that point in the web dev cycle where we're talking about com...\
  X·shadcn
- [link](https://github.com/radix-ui/primitives/issues/1927)\
  \[Select] Make the \`hideOthers\` feature optional (ie. add non-modal ...\
  Feb 3, 2023 — Gigantic fat scrollbars with no background behind them when they disappear in a jarring fashion. Big fat scrollbars that are very ...\
  GitHub

Show all

# what components does shadcnui have

**shadcn/ui** features a highly comprehensive collection of accessible, reusable building blocks that you copy and paste directly into your code. Because it is a code-distribution system rather than a traditional npm package dependency, you get full ownership to modify these components to your liking. \[[1](https://shadcnstudio.com/components), [2](https://shadcnspace.com/components), [3](https://wrappixel.com/blog/shadcn-components?srsltid=AfmBOopC9r2R2l1b8UFFx7Fc5wRVuXYWbpwaXgZP705LsaNRhMfBJnyU), [4](https://v3.shadcn.com/)]

The core elements available in the official [shadcn/ui registry directory](https://ui.shadcn.com/docs/directory) are organized below by category: \[[1](https://v3.shadcn.com/docs), [2](https://ui.shadcn.com/docs/directory)]

🎛️ Form & Input Primitives

- **Button**: Interactive clickable element with multiple style variants.
- **Input**: Standard text field for data collection.
- **Textarea**: Multi-line text input field.
- **Checkbox**: Binary selection box.
- **Radio Group**: Set of checkable buttons where only one can be active.
- **Select**: Dropdown menu for picking from a list of options.
- **Switch**: Toggle element representing an on/off state.
- **Slider**: Range selector for picking fluid numeric values.
- **Input OTP**: Secure, split-box input built specifically for One-Time Passwords.
- **Form**: A wrapper integrating React Hook Form and Zod for built-in schema validation. \[[1](https://ui.shadcn.com/docs/components), [2](https://www.shadcn.io/ui), [3](https://shadcnuikit.com/components/input), [4](https://shadcnspace.com/components), [5](https://v3.shadcn.com/docs)]

🗺️ Navigation & Menus

- **Navigation Menu**: Top-bar menu with smooth dropdown panels for site routing.
- **Dropdown Menu**: Contextual overlay listing actions or links.
- **ContextMenu**: Menu that appears upon right-clicking a designated area.
- **Menubar**: Desktop-application style persistent top menu header.
- **Pagination**: Navigation controls for clicking through multi-page data.
- **Breadcrumb**: Path-based secondary navigation showing site hierarchy. \[[1](https://ui.shadcn.com/docs/components), [2](https://shadcnspace.com/components), [3](https://v3.shadcn.com/docs), [4](https://www.shadcndesign.com/components/menubar), [5](https://shadcnuikit.com/components/menubar)]

📦 Data Display & Layouts

- **Data Table**: Powerhouse grid wrapper built on TanStack Table for sorting, filtering, and pagination.
- **Table**: Semantic, cleanly-styled HTML table primitives.
- **Card**: Container structure with dedicated header, content, and footer sections.
- **Accordion**: Vertically collapsing stacked sections for FAQs or compact content.
- **Carousel**: Swipable slideshow gallery for images or cards.
- **Tabs**: Content organizer separating views via clickable upper labels.
- **Avatar**: Profile circular image frame with automated text fallback states.
- **Badge**: Small pill-shaped tag for counts, status, or categories.
- **Sidebar**: Completely collapsible application navigation layout panel. \[[1](https://ui.shadcn.com/docs/components), [2](https://www.shadcn.io/ui), [3](https://shadcnspace.com/components), [4](https://v3.shadcn.com/docs), [5](https://makerkit.dev/docs/next-supabase-turbo/components/shadcn)]

🔔 Overlays & Feedback

- **Dialog**: Center-aligned modal overlay that takes focus.
- **AlertDialog**: Focus-trapped modal that forces user acknowledgment before critical actions.
- **Sheet / Drawer**: Side-sliding or bottom-sliding content panels.
- **Popover**: Floating content box anchored directly to a trigger element.
- **Tooltip**: Brief informative popup appearing on hover or focus.
- **Hover Card**: Preview panel that appears when hovering over specific triggers.
- **Toast / Sonner**: Crisp, non-blocking notification alerts popping up on viewport edges. \[[1](https://ui.shadcn.com/docs/components), [2](https://www.shadcn.io/ui), [3](https://v3.shadcn.com/docs), [4](https://shadcnspace.com/components), [5](https://www.shadcndesign.com/components/dialog)]

📊 Utilities & Visuals

- **Calendar**: Interactive date-grid utility supporting single or range selections.
- **Date Picker**: Popover calendar input field.
- **Chart**: Beautifully themed, responsive data visualization wrapper built using Recharts.
- **Command**: Fast, keyboard-navigable command palette search dialog.
- **Combobox**: Searchable dropdown input combining input text with select lists.
- **Progress**: Linear completion loading bar.
- **Skeleton**: Placeholder loading shapes that mimic real UI layouts.
- **Resizable**: Grid layout structure that lets users drag and adjust panel sizing.
- **Scroll Area**: Custom-styled scrollbar utility uniform across all browser types. \[[1](https://ui.shadcn.com/docs/components), [2](https://shadcnspace.com/components), [3](https://dev.to/bytefer/10-component-libraries-you-must-know-to-use-shadcn-ui-3ma1), [4](https://v3.shadcn.com/docs), [5](https://www.shadcn.io/ui)]

If you are just getting started, you can explore the official [shadcn/ui documentation](https://ui.shadcn.com/docs) to copy code snippets or use their command-line interface to add any of these options directly to your React app. \[[1](https://ui.shadcn.com/docs), [2](https://shadcnspace.com/components)]

Are you planning to use **shadcn/ui** with **Next.js**, **Vite**, or another framework? I can walk you through the **CLI initialization process** or explain how to configure **custom color themes**. \[[1](https://v3.shadcn.com/docs), [2](https://www.reddit.com/r/reactjs/comments/1k6kml1/shadcnstudio%5Fbest%5Fopen%5Fsource%5Fshadcn%5Fui/), [3](https://wrappixel.com/blog/shadcn-components?srsltid=AfmBOopC9r2R2l1b8UFFx7Fc5wRVuXYWbpwaXgZP705LsaNRhMfBJnyU)]

- [link](https://ui.shadcn.com/docs/components)\
  Components - shadcn/ui\
  \* Accordion. \* Alert. \* Alert Dialog. \* Aspect Ratio. \* Avatar. \* Badge. \* Breadcrumb. \* Button Group. \* Carousel. \* Chart. \* Chec...\
  Shadcn
- [link](https://v3.shadcn.com/docs)\
  Introduction - shadcn/ui\
  \* Getting Started. IntroductionInstallationcomponents.jsonThemingDark modeCLIMonorepoTailwind v4NewNext.js 15 + React 19Typography...\
  v3.shadcn.com
- [link](https://shadcnstudio.com/components)\
  Shadcn Components - Base UI and Radix UI\
  What are Shadcn Components? Shadcn Components is a collection of customizable, interactive, and accessible UI components designed ...\
  Shadcn Studio

Show all

# what components does baseui from mui have

**Base UI** (formerly `@mui/base`) is MUI's headless, unstyled UI component library designed for building accessible design systems. It provides <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong>35 core components and low-level hooks</strong></mark> that handle all underlying logic, keyboard navigation, and ARIA attributes without forcing any default styling engine or CSS. \[[1](https://mui.com/base-ui/getting-started/), [2](https://base-ui.com/), [3](https://www.infoq.com/news/2026/02/baseui-v1-accessible/), [4](https://blog.codedthemes.com/what-is-base-ui/)]

The primary components available in Base UI are grouped by functionality below. \[[1](https://mui.com/base-ui/react-tabs/), [2](https://v5.mui.com/base-ui/all-components/)]

Inputs & Form Controls

- **Autocomplete**: Combo box input with built-in filtering and suggestion logic.
- **Button**: Standard button primitive handling focus states and keyboard interactions.
- **Checkbox**: Unstyled toggle box for binary form selections.
- **Form Control**: Context provider to manage form field states like error, disabled, and required.
- **Input**: Base text input field wrapper.
- **Number Field / Number Input**: Form input structured specifically for numeric values with increment/decrement handlers.
- **Radio Group**: Container and items for mutual-exclusion selection lists.
- **Select**: Dropdown select component handling complex option menus and multiple selections.
- **Slider**: Range selection bar with single or multi-thumb options.
- **Switch**: Toggle switch behavior for binary choices.
- **Textarea Autosize**: Textarea element that automatically scales height based on user input. \[[1](https://mui.com/base-ui/react-number-input/), [2](https://mui.com/base-ui/getting-started/quickstart/), [3](https://smithery.ai/skills/jackspace/base-ui-react), [4](https://mui.com/components/), [5](https://mui.com/base-ui/react-select/), [6](https://v5.mui.com/base-ui/all-components/)]

Navigation & Layout Windows

- **Accordion**: Collapsible content panels to toggle visible sections.
- **Menu / Dropdown**: Interactive dropdown menu trees with sub-components for menu buttons and items.
- **Table Pagination**: Controls for navigating split data sets across complex data tables.
- **Tabs**: Accessible tab containers (`Tabs`, `Tab`, `TabPanel`) for shifting between panel views. \[[1](https://mui.com/base-ui/react-tabs/), [2](https://smithery.ai/skills/jackspace/base-ui-react), [3](https://v5.mui.com/base-ui/all-components/), [4](https://mui.com/base-ui/react-menu/), [5](https://dev.to/kinginit/the-big-angular-ui-library-comparison-4ifp)]

Overlays & Popups

- **Dialog / Modal**: Base blocking dialog containers that manage underlying page focus.
- **Popper**: Low-level positioning engine used to output elements sitting on top of other content.
- **Popup**: General utility container for contextual element positioning.
- **Snackbar**: Floating toast alert mechanics to convey temporary feedback.
- **Tooltip**: Brief advisory hover/focus popups attached to target anchors. \[[1](https://mui.com/base-ui/react-tabs/), [2](https://v5.mui.com/base-ui/all-components/), [3](https://smithery.ai/skills/jackspace/base-ui-react)]

Functional Utilities

- **Click-Away Listener**: Event utility detecting trigger clicks made outside a target element.
- **Focus Trap**: Layout utility forcing keyboard navigation to loop solely inside a designated container.
- **No-SSR**: Utility wrapper preventing targeted inner elements from rendering during server-side processing.
- **Portal**: Layout utility rendering children nodes outside their current parent DOM tree hierarchy. \[[1](https://v5.mui.com/base-ui/all-components/), [2](https://mui.com/blog/mui-core-v5/)]

Would you like to see a code example showing how to style one of these components using **Tailwind CSS** or **CSS Modules**?

- [link](https://mui.com/base-ui/getting-started/)\
  MUI Base - Overview\
  Overview - MUI Base. 🎉 Material UI v7 is out now! Check out the announcement blog post. @mui/base has been deprecated and has bee...\
  MUI
- [link](https://base-ui.com/)\
  Unstyled UI components for accessible design systems · Base UI\
  Base UI is a library of unstyled UI components for building accessible component libraries, user interfaces, web applications, and...\
  Base UI
- [link](https://mui.com/base-ui/react-number-input/)\
  React Number Input component and hook - MUI Base\
  Anatomy. The MUI Base Number Input component consists of four slots: root : an outer\
  containing the other interior slots. input :\
  MUI

Show all
