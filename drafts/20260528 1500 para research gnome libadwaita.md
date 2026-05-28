<!-- the gnome gitlab non 200 in browser, but is surprisingly clonable -->

# how is gnome libadwaita written. where are the design tokens and components.

**GNOME's Libadwaita is written primarily in C** and leverages **GTK 4** as its core layout engine. It is structured as an extension library that implements the official GNOME Human Interface Guidelines (HIG). In addition to C logic, Libadwaita uses **Sass (SCSS)** to compile its central stylesheet, **XML** for GResource packaging, and standard **CSS variables** or **GTK named colors** for runtime customization. \[[1](https://www.reddit.com/r/gnome/comments/vj2fjq/libadwaita%5Fadwgtk3%5Fgtk%5Fnamed%5Fcolors/), [2](https://github.com/GNOME/libadwaita), [3](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/), [4](https://blogs.gnome.org/alatiera/2021/09/), [5](https://www.youtube.com/watch?v=xrNYEyNpBoA\&t=8), [6](https://medium.com/@codenomad/gnome-builder-using-python-libadwaita-and-blueprint-c9c3e138801e), [7](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/css-variables.html)]

The system's design tokens and UI components are organized within the official GNOME / libadwaita GitLab repository.

***

🎨 Where the Design Tokens Are Located

Libadwaita handles design tokens (colors, spacing, and geometry) through a pipeline of Sass files that compile into CSS variables and named colors. In the source tree, these are located in the **`src/stylesheet/`** directory: \[[1](https://www.reddit.com/r/gnome/comments/vj2fjq/libadwaita%5Fadwgtk3%5Fgtk%5Fnamed%5Fcolors/), [2](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/css-variables.html), [3](https://blogs.gnome.org/alatiera/2021/09/), [4](https://github.com/GNOME/libadwaita/blob/main/doc/styles-and-appearance.md), [5](https://midrocket.com/en/guides/design-tokens-guide/)]

1\. Primitive and Contextual Colors (`src/stylesheet/_palette.scss`)

This file defines GNOME’s primary, hardcoded color variables (the base palette). It maps them to contextual names like `@accent_bg_color`, `@window_bg_color`, and `@view_bg_color`. These mapping choices support the runtime recoloring API. \[[1](https://gitlab.zrythm.org/zrythm/libadwaita/-/blob/644da40057e4d37e121cae5decc4b0967d4dd3ce/doc/named-colors.md), [2](https://www.youtube.com/watch?v=xrNYEyNpBoA\&t=8), [3](https://en.wikipedia.org/wiki/Adwaita%5F%28design%5Flanguage%29)]

2\. Public CSS Variables (`src/stylesheet/_bootstrap.scss` & `_colors.scss`)

Libadwaita exposes public design tokens that developers can tap into. These include:

- **Accent Colors**: `--accent-blue`, `--accent-green`, etc.
- **Card and Base Elements**: `--card-bg-color`, `--card-fg-color`
- **Overriding**: Developers can view the full documentation on [Libadwaita CSS Variables](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/css-variables.html) to see which tokens are customizable. \[[1](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/main/css-variables.html), [2](https://github.com/GNOME/libadwaita/blob/main/doc/css-variables.md)]

3\. Sizing and Spacing Tokens (`src/stylesheet/_defaults.scss`) \[[1](https://stefaniefluin.medium.com/the-pyramid-design-token-structure-the-best-way-to-format-organize-and-name-your-design-tokens-ca81b9d8836d)]

This file contains the internal design tokens for typography sizes, border-radii, animations, and spacing metrics (e.g., standard padding values for list rows or header bars).

***

🧩 Where the UI Components Are Located

Libadwaita splits its components into two parts: backend functional logic written in C and frontend visual styles written in SCSS. \[[1](https://github.com/GNOME/libadwaita), [2](https://github.com/GNOME/libadwaita/blob/main/doc/adaptive-layouts.md)]

1\. C Core Logic (`src/`)

The foundational logic for components is located directly in the root `src/` directory. Each component typically consists of:

- **`adw-[component-name].c`**: The structural behavior, properties, signals, and layout logic.
- **`adw-[component-name].h`**: The public API header file.
- **`adw-[component-name].ui`**: XML files defining the widget layout blueprints.

Key components can be found here:

- `adw-window.c` (The primary application container)
- `adw-navigation-split-view.c` (Adaptive sidebar layout)
- `adw-preferences-window.c` (Standardized settings pages) \[[1](https://github.com/GNOME/libadwaita/blob/main/doc/adaptive-layouts.md)]

2\. Component Style sheets (`src/stylesheet/components/`)

The visual rules (borders, padding states, hovers) for individual widgets are compartmentalized into dedicated SCSS files inside `src/stylesheet/components/`.

- For example, the visual styles for buttons reside in `_buttons.scss`, headers in `_header-bar.scss`, and tab views in `_tab-view.scss`.

***

If you are building an app or looking to modify theme elements, would you like to see an example of how to **override these design tokens** in your own code, or are you more interested in how Libadwaita handles **adaptive mobile layouts**? \[[1](https://discourse.gnome.org/t/why-and-how-libadwaita-prevents-theming/17079), [3](https://github.com/GNOME/libadwaita/blob/main/doc/adaptive-layouts.md)]

- [link](https://medium.com/@codenomad/gnome-builder-using-python-libadwaita-and-blueprint-c9c3e138801e)\
  GNOME Builder: Using Python, Libadwaita and Blueprint\
  Dec 4, 2023 — This build magic will populate the ui\_files variable with filepaths that can be injected as dependencies during the build process.\
  Medium·codenomad
- [link](https://en.wikipedia.org/wiki/Adwaita%5F%28design%5Flanguage%29)\
  Adwaita (design language) - Wikipedia\
  The libadwaita library was created to further develop Adwaita as a more closely-adherent component of the GNOME Human Interface Gu...\
  Wikipedia
- [link](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/)\
  Libadwaita: Splitting GTK and Design Language\
  Jun 3, 2024 — Libadwaita: the Successor§ Because of all the above problems, libadwaita was created: libhandy's successor that will accompany GTK...\
  TheEvilSkeleton

Show all

You said: where is the repo

The official repository for Libadwaita is hosted on GNOME's self-hosted GitLab instance.

You can access the source code directly via the browser or clone it using Git:

- **Browser Link:** GNOME / libadwaita GitLab Repository
- **Git Clone URL:** `https://gnome.org`

***

If you plan to explore or build the source code, would you like instructions on how to **compile it locally using Meson**, or do you need help **finding a specific source file** in the repository structure?

You said: link. put the link inside a code block.

text

```
https://gnome.org
```

Use code with caution.

***

Would you like help with the **Git commands** to clone this repository, or are you looking to browse a **specific folder** on the site?

You said: convert to base64

text

```
aHR0cHM6Ly9naXRsYWIuZ25vbWUub3JnL0dOT01FL2xpYmFkd2FpdGE=
```

Use code with caution.

***

Would you like me to show you how to **decode this string** back to plain text, or do you need a **different text string** converted to Base64?

# how does gnome workbench work

**GNOME Workbench** is a live sandboxed code playground designed for learning, testing, and prototyping user interfaces and features built on the [GNOME platform](https://apps.gnome.org/Workbench/). It <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">allows developers to instantly visualize and experiment with GTK and Libadwaita code without setting up a full-scale app production environment</mark>. \[[1](https://gsoc.gnome.org/2023/), [2](https://apps.gnome.org/Workbench/), [3](https://www.youtube.com/watch?v=8gVP8FroU2E), [4](https://en.ubunlog.com/workbench-becomes-part-of-the-gnome-circle-news-this-week/), [5](https://www.reddit.com/r/vala/comments/vr2yv8/github%5Fsonnypworkbench%5Flearn%5Fand%5Fprototype%5Fwith/), [6](https://github.com/workbenchdev/Workbench), [7](https://gitlab.gnome.org/Teams/Engagement/internship-project-ideas/-/issues/27)]

Core Workflow

The application operates on a split-screen layout designed to automate compilation and rendering loops:

- **Real-Time Rendering**: You write user interface markup or script logic on one side, and the live interface renders instantly on the other side.
- **Blueprint or XML Syntax**: You define the structural layout of the window using either the modern, streamlined [Blueprint syntax](https://github.com/workbenchdev/Workbench) or standard GTK XML `.ui` formats.
- **Multi-Language Logic**: You attach dynamic behaviors, event handlers, and callbacks to your UI elements using Javascript, Python, Rust, TypeScript, or Vala.
- **The "Run" Loop**: Pressing the active runner executes your script sandbox immediately. Any design modifications or styling adjustments via CSS update dynamically without requiring manual re-compilation. \[[1](https://www.vixalien.com/blog/workbench-typescript/), [2](https://medium.com/@codenomad/gnome-builder-using-python-libadwaita-and-blueprint-c9c3e138801e), [3](https://www.reddit.com/r/gnome/comments/1doc53w/how%5Fto%5Factually%5Fuse%5Fworkbench%5Fcode/), [4](https://github.com/workbenchdev/Workbench), [5](https://apps.gnome.org/Workbench/)]

Key Features

- **Built-in Library**: It features an embedded catalog of over 100 localized interactive demonstrations. These blueprints showcase how to leverage specific GTK4/Libadwaita widgets, system portals, styling behaviors, and core [GLib/Gio APIs](https://gsoc.gnome.org/2023/).
- **Code Assistance**: Built-in autocompletion, real-time code diagnostics, and a formatter guide clean coding directly within the sandbox.
- **Isolated Environment**: The environment runs isolated from your host configuration via Flatpak isolation rules, meaning crash testing code templates will not compromise system stability. \[[1](https://www.youtube.com/shorts/cADfQ2Ls2s4), [2](https://flathub.org/en/apps/re.sonny.Workbench), [3](https://gsoc.gnome.org/2023/), [4](https://gitlab.gnome.org/Teams/Engagement/internship-project-ideas/-/issues/27), [5](https://apps.gnome.org/Workbench/), [6](https://medium.com/@codenomad/gnome-builder-using-python-libadwaita-and-blueprint-c9c3e138801e)]

Transitioning to Production

Workbench is not a full-featured Integrated Development Environment (IDE) meant to publish standalone software binaries. Once you perfect a specific UI configuration, widget arrangement, or logic snippet within Workbench, you manually **copy and paste that verified code** block out of the playground into an actual workspace manager like GNOME Builder to bundle it into a production-ready Linux application. \[[1](https://www.reddit.com/r/gnome/comments/1geohaz/i%5Flove%5Fgnome%5Fhow%5Fcan%5Fi%5Flearn%5Fto%5Fdevelop%5Fgnome/), [2](https://www.dimins.com/online-help/workbench/72/basics/workbench-basics-overview.html), [3](https://www.reddit.com/r/linux/comments/1rhx73m/is%5Fgnome%5Fbuilder%5Fany%5Fgood/), [4](https://welcome.gnome.org/team/programming/), [5](https://www.vixalien.com/blog/workbench-typescript/)]

Are you hoping to **prototype a specific widget layout**, or are you looking for a **step-by-step example** of linking interactive code to a blueprint layout within Workbench?

- [link](https://www.reddit.com/r/gnome/comments/1doc53w/how%5Fto%5Factually%5Fuse%5Fworkbench%5Fcode/)\
  How to actually use Workbench code? : r/gnome - Reddit\
  Jun 25, 2024 — I'm kind of a beginner in GJS, and I'm having a hard time finding things in the documentation. Thankfully, there are a lot of exam...\
  Reddit·r/gnome
- [link](https://www.vixalien.com/blog/workbench-typescript/)\
  Workbench + TypeScript - vixalien's blog\
  Aug 26, 2024 — Workbench is an app that simply allows you to write the UI interface of your app, write some accompanying behavior code and with a...\
  www.vixalien.com
- [link](https://gsoc.gnome.org/2023/)\
  GNOME + GSoC | 2023 Project Ideas\
  Make GNOME platform demos for Workbench Workbench is an application with a focus on teaching and experimenting with GNOME technolo...\
  GNOME + GSoC = ❤️

Show all

# how does libadwaita work

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Libadwaita works as an extension library built on top of the GTK 4 framework to implement the GNOME Human Interface Guidelines (HIG)</span></strong></mark>. Rather than functioning as a standalone graphical toolkit, it sits between [GTK 4](https://www.gtk.org/) and the application code. It bundles predefined UI structures, adaptive layout logic, and a locked-in visual stylesheet to ensure apps look and feel native to the **GNOME desktop environment**. \[[1](https://www.reddit.com/r/gnome/comments/tj8ejc/what%5Fis%5Fthe%5Fdifference%5Fbetween%5Fgtk4%5Fand%5Flibadwaita/), [2](https://discourse.gnome.org/t/what-is-libadwaita/24422), [3](https://gtk-kn.org/developer-guide/bindings/adwaita/), [4](https://gtk-rs.org/gtk4-rs/stable/latest/book/libadwaita.html), [5](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/)]

***

1\. Architectural Relationship with GTK 4

Historically, GTK 3 bundled the default GNOME design language ("Adwaita") directly into the core framework. With GTK 4, developers split the project: \[[1](https://unix.stackexchange.com/questions/799470/relationship-between-libadwaita-and-gtk), [2](https://www.osnews.com/story/139865/libadwaita-splitting-gtk-and-design-language/), [3](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/)]

- **GTK 4** acts as a platform-agnostic, low-level toolkit focusing on fundamental widgets (buttons, labels, boxes) and rendering.
- **Libadwaita** functions as the GNOME-specific platform layer. It consumes GTK 4 primitives and combines them into highly complex, specialized GNOME interface patterns. \[[1](https://www.reddit.com/r/gnome/comments/tj8ejc/what%5Fis%5Fthe%5Fdifference%5Fbetween%5Fgtk4%5Fand%5Flibadwaita/), [2](https://discourse.gnome.org/t/what-is-libadwaita/24422), [3](https://www.osnews.com/story/139865/libadwaita-splitting-gtk-and-design-language/), [4](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/), [5](https://news.ycombinator.com/item?id=40565357)]

2\. Core Functional Pillars

Prebuilt Human Interface Guideline (HIG) Widgets \[[1](https://gtk-rs.org/gtk4-rs/stable/latest/book/libadwaita.html)]

Libadwaita saves developers from manually coding complex layouts. It introduces dedicated UI components prefixed with `Adw` instead of GTK's `Gtk`: \[[1](https://github.com/xournalpp/xournalpp/discussions/5301), [2](https://gtk-kn.org/developer-guide/bindings/adwaita/)]

- **`AdwHeaderBar`**: Manages title bars with integrated window controls, sub-titles, and window decoration.
- **`AdwPreferencesWindow`**: Instantly structures application settings into standardized rows, groups, and sub-pages.
- **`AdwViewStack` / `AdwViewSwitcher`**: Automatically links bottom navigation bars or sidebars to different UI views. \[[1](https://www.youtube.com/watch?v=u3hBpYQFvhs), [2](https://nyaa.place/blog/libadwaita-1-8/)]

Responsive, Adaptive Layouts \[[1](https://en.wikipedia.org/wiki/Adwaita%5F%28design%5Flanguage%29)]

One of Libadwaita’s primary roles is bridging the gap between desktop and mobile Linux form factors (like phones and tablets). \[[1](https://discourse.gnome.org/t/what-is-libadwaita/24422), [2](https://github.com/xournalpp/xournalpp/discussions/5301)]

- It uses adaptive containers like **`AdwBreakpoint`** and **`AdwLeaflet`**.
- When a window shrinks, these widgets dynamically fold sidepanes out of view or transform multi-column desktop layouts into a singular, swipeable mobile stack.
- Developers can use an **Adaptive Preview Mode** inside the GTK Inspector to simulate different device screen dimensions on the fly. \[[1](https://www.youtube.com/watch?v=u3hBpYQFvhs), [2](https://en.wikipedia.org/wiki/Adwaita%5F%28design%5Flanguage%29), [3](https://nyaa.place/blog/libadwaita-1-7/), [4](https://blogs.gnome.org/alicem/2024/12/19/mobile-testing-in-libadwaita/)]

Deep System Integration

Libadwaita ties directly into modern XDG Desktop Portals to match the user's host environment seamlessly. It queries system-level keys to automatically manage global dark mode toggles and dynamically map system-wide accent color variations using high-accuracy Oklch color matching. \[[1](https://blogs.gnome.org/alicem/2024/09/13/libadwaita-1-6/), [2](https://gtk-rs.org/gtk4-rs/stable/latest/book/libadwaita.html)]

***

3\. The Enforced Stylesheet & Theming Control

Unlike traditional toolkits that read external CSS themes from local directory paths (`~/.config/gtk-4.0`), Libadwaita hardcodes its production stylesheet directly into the compiled library binary. \[[1](https://www.youtube.com/watch?v=urh44tg9t3c\&t=115), [2](https://discourse.gnome.org/t/why-and-how-libadwaita-prevents-theming/17079?page=2)]

| Feature \[[1](https://forum.zorin.com/t/how-much-libadwaita-has-removed/50705), [2](https://www.youtube.com/watch?v=u3hBpYQFvhs), [3](https://www.youtube.com/watch?v=urh44tg9t3c\&t=115), [4](https://github.com/xournalpp/xournalpp/discussions/5301), [5](https://gtk-rs.org/gtk4-rs/stable/latest/book/libadwaita.html), [6](https://www.reddit.com/r/kde/comments/ry20h7/are%5Fthere%5Fany%5Fplans%5Fby%5Fkde%5Fto%5Ftry%5Fand%5Ftame%5Fthe/), [7](https://www.reddit.com/r/gnome/comments/qrlw9s/what%5Fare%5Feveryones%5Fopinions%5Fon%5Flibadwaita/), [8](https://discourse.gnome.org/t/why-and-how-libadwaita-prevents-theming/17079), [9](https://www.reddit.com/r/gnome/comments/wu8388/what%5Fis%5Fthe%5Fendgame%5Ffor%5Flibadwaita/)] | How Libadwaita Handles It                                     | Impact on Users/DEs                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **System Theming**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ignores external GTK themes.                                  | Prevents third-party desktop environments (like KDE Plasma) or custom distributions from globally changing application styles.       |
| **Developer Customization**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Exposes a runtime recoloring API with explicit CSS variables. | Application developers (rather than the user) maintain full control over the branding and pixel-perfect design of their UI.          |
| **App Stability**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Eliminates visual bugs caused by random user theme overrides. | Ensures that application layouts never accidentally break, stretch, or become unreadable due to poorly optimized custom stylesheets. |

***

If you are thinking about building a Linux app, let me know:

- What **programming language** are you planning to use (C, Rust, Python, etc.)?
- Is your app **exclusively for GNOME**, or do you want it to look native on **other desktops** like KDE or Windows? \[[1](https://discourse.gnome.org/t/what-is-libadwaita/24422), [2](https://gtk-rs.org/gtk4-rs/stable/latest/book/libadwaita.html), [3](https://www.reddit.com/r/kde/comments/1n7pqc1/why%5Fflathub%5Fapplications%5Fare%5Fmostly/), [4](https://www.reddit.com/r/gnome/comments/1khi2em/how%5Fto%5Flearn%5Fgtk%5Fand%5Flibadwaita/), [5](https://www.youtube.com/watch?v=u3hBpYQFvhs), [6](https://discourse.gnome.org/t/using-libadwaita-on-linux-windows-apps/29181)]

I can help you decide whether to integrate Libadwaita or stick with pure GTK 4. \[[1](https://discourse.gnome.org/t/what-is-libadwaita/24422)]

- [link](https://www.reddit.com/r/gnome/comments/tj8ejc/what%5Fis%5Fthe%5Fdifference%5Fbetween%5Fgtk4%5Fand%5Flibadwaita/)\
  What is the difference between gtk4 and libadwaita? - Reddit\
  Mar 21, 2022 — Dabaduck. What is the difference between gtk4 and libadwaita? Question. As title says what is the difference between gtk4 and liba...\
  Reddit·r/gnome
- [link](https://discourse.gnome.org/t/what-is-libadwaita/24422)\
  What is libadwaita? - Development - GNOME Discourse\
  Oct 9, 2024 — ebassi (Emmanuele Bassi) October 9, 2024, 8:41am 2. d47081: Please describe in few words - is this library used for new / testing ...\
  GNOME Discourse
- [link](https://www.youtube.com/watch?v=u3hBpYQFvhs)\
  Linux Mint Just Forked Libadwaita\
  May 18, 2025 — i don't really talk much about Linux Mint. but there is one topic that comes up from time to time mint Gnome apps. and liid waiter...\
  16:04\
  YouTube·Brodie Robertson

Show all

You said: how does it work w css

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Libadwaita uses standard CSS to style applications, but it modifies how that CSS is loaded, bundled, and applied compared to traditional GTK apps.</span></strong></mark> It relies on the GTK 4 CSS engine, which mimics web standards but implements a specialized subset of properties tailored for desktop widgets.

***

1\. The Hardcoded Base Stylesheet

In regular GTK 4, styling is determined by the system's selected theme. Libadwaita changes this by bundling its own production stylesheet (`adwaita.css`) directly inside the library's compiled binary as a GResource.

- **Automatic Loading**: When an application initializes Libadwaita (`adw_init()`), the library automatically injects this stylesheet into the top of the GTK style provider stack.
- **Theming Priority**: Because it is loaded directly by the application layer, it overrides external system-wide GTK themes set by the user or the operating system distributions.

2\. The Dynamic Named Colors API

Instead of hardcoding static hex colors into your app's custom CSS, Libadwaita exposes a standardized set of **semantic CSS variables** (Named Colors). These variables dynamically update when a user switches between light and dark modes, or changes their system accent color.

| CSS Variable Name       | Purpose / Usage                                          | Light Mode Value | Dark Mode Value |
| ----------------------- | -------------------------------------------------------- | ---------------- | --------------- |
| `@window_bg_color`      | Main application window background                       | `#fafafa`        | `#242424`       |
| `@window_fg_color`      | Default text color on windows                            | `#000000`        | `#ffffff`       |
| `@view_bg_color`        | Background for lists, text boxes, and grids              | `#ffffff`        | `#1e1e1e`       |
| `@accent_bg_color`      | Background for primary buttons, active states, and focus | System Accent    | System Accent   |
| `@destructive_bg_color` | Background for dangerous actions (e.g., Delete buttons)  | `#e01b24`        | `#c01c28`       |

3\. Implementing Custom App CSS

Developers can still use custom CSS to fine-tune their application's specific layout or visual identity without breaking the native GNOME look.

Step A: Bundle the CSS File

Create a standard `.css` file in your project directory and bundle it into your application binary using a `gresources.xml` file.

xml

```
<?xml version="1.0" encoding="UTF-8"?>
<gresources>
  <gresource prefix="/com/example/myapp">
    <file>style.css</file>
  </gresource>
</gresources>
```

Use code with caution.

Step B: Use Named Colors in Your CSS

Inside your `style.css` file, use the built-in Libadwaita variables to ensure your custom elements still adapt perfectly to dark mode and accent color changes.

css

```
/* Style a custom card widget */
.my-custom-card {
  background-color: @view_bg_color;
  color: @window_fg_color;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 12px;
}

/* Highlight a custom important label using the system accent */
.status-important {
  color: @accent_color;
  font-weight: bold;
}
```

Use code with caution.

Step C: Load the Style Provider in Code

In your application initialization code (shown here in Python), read the resource file and attach it to the default display screen.

python

```
from gi.repository import Gtk, Gdk

def load_custom_css():
    css_provider = Gtk.CssProvider()
    # Load the CSS file from the compiled application resources
    css_provider.load_from_resource("/com/example/myapp/style.css")

    # Apply it globally to all widgets on the default screen
    Gtk.StyleContext.add_provider_for_display(
        Gdk.Display.get_default(),
        css_provider,
        Gtk.STYLE_PROVIDER_PRIORITY_APPLICATION
    )
```

Use code with caution.

***

If you want to start writing styling rules for your application, let me know:

- Do you need to **override light/dark mode defaults** for specific sections of your UI?
- Are you trying to style a **standard widget** (like a button or header) or a completely **custom interface element**?

I can provide the exact CSS selectors or code snippets you need to achieve the layout.

You said: does it do things a web browser do

**No, Libadwaita does not act like a web browser**, even though it utilizes CSS for styling. It cannot render a website, parse HTML, execute JavaScript, or handle internet protocols. \[[1](https://www.reddit.com/r/gnome/comments/wuwicl/a%5Fgtk4%5Ffirefox%5Fwith%5Flibwaita%5Fis%5Fthe%5Fnext%5Fstep/)]

Libadwaita is a **native desktop application framework**. It shares superficial similarities with how browsers process styles, but operates under a completely different architecture. \[[1](https://discourse.gnome.org/t/what-is-libadwaita/24422), [2](https://www.reddit.com/r/gnome/comments/wuwicl/a%5Fgtk4%5Ffirefox%5Fwith%5Flibwaita%5Fis%5Fthe%5Fnext%5Fstep/)]

***

Key Architectural Differences

| Feature \[[1](https://news.ycombinator.com/item?id=39970803), [2](https://planet.webkitgtk.org/rss10.xml), [3](https://discourse.gnome.org/t/what-is-libadwaita/24422), [4](https://en.wikipedia.org/wiki/GTK), [5](https://www.loskutoff.com/blog/50-shades-of-rust/), [6](https://planet.igalia.com/webkit/), [7](https://www.reddit.com/r/gnome/comments/1abvp47/libadwaita%5Fbut%5Fin%5Fthe%5Fweb/), [8](https://docs.gtk.org/gtk4/css-properties.html), [9](https://planet.webkitgtk.org/)] | Web Browser (Chromium / Firefox)                                                 | Libadwaita (via GTK 4)                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| **Core UI Engine**                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | **HTML DOM Tree**: Everything is a flexible, highly unpredictable document node. | **C-Based Widget Tree**: Rigid, predefined system elements (windows, buttons, text fields). |
| **Rendering Backend**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | WebGL / WebGPU / Canvas (heavily sandboxed).                                     | Direct system access via **Vulkan / OpenGL**.                                               |
| **CSS Capabilities**                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Full W3C Web Standards (Flexbox, Grid, Animations, Transitions).                 | A **specialized subset** of CSS layout properties mapped onto native binary UI code.        |
| **Resource Costs**                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | High memory/CPU overhead (spawns separate rendering processes for safety).       | **Extremely lightweight**; executes as native compiled machine code.                        |

***

What it Borrows from Browsers

While they are fundamentally different, Libadwaita (built on top of GTK 4) borrows two specific workflow concepts from modern web development:

1\. Inspector Debugging Tools

Just like hitting `F12` in a browser, Libadwaita apps can launch the **GTK Inspector**. This tool lets developers click on native desktop widgets, inspect their margins and paddings, and alter CSS stylesheets live while the application is running. \[[1](https://www.reddit.com/r/rust/comments/1jveeid/choosing%5Fthe%5Fright%5Frust%5Fgui%5Flibrary%5Fin%5F2025%5Fwhy/)]

2\. Media Queries & Breakpoints

Similar to how responsive web design handles layouts, Libadwaita utilizes a component called `AdwBreakpoint`. This behaves exactly like CSS Media Queries, measuring the application window's width in pixels and shifting elements dynamically when scaled down to a mobile touch screen layout. \[[1](https://blogs.gnome.org/alicem/2024/09/13/libadwaita-1-6/), [2](https://blogs.gnome.org/tbernard/category/development/)]

***

What happens if you actually want a browser in your app?

If you build a Libadwaita application and need to display an actual webpage (like an embedded map, an OAuth login page, or a web preview), **Libadwaita cannot do it alone.**

Instead, developers must embed **WebKitGTK** into the app. This is an entirely separate library that takes a full open-source web engine (the same engine powering Apple Safari) and packages it into a native GTK widget, allowing a real browser window to sit inside a Libadwaita interface. \[[1](https://planet.webkitgtk.org/)]

Are you deciding between building your app as a **native desktop framework** (like Libadwaita) or using a **web-based desktop framework** (like Electron or Tauri)? Let me know your application's goals and I can break down the performance trade-offs. \[[1](https://news.ycombinator.com/item?id=39970803), [2](https://www.reddit.com/r/gnome/comments/wuwicl/a%5Fgtk4%5Ffirefox%5Fwith%5Flibwaita%5Fis%5Fthe%5Fnext%5Fstep/)]

- [link](https://discourse.gnome.org/t/what-is-libadwaita/24422)\
  What is libadwaita? - Development - GNOME Discourse\
  Oct 9, 2024 — ebassi (Emmanuele Bassi) October 9, 2024, 8:41am 2. d47081: Please describe in few words - is this library used for new / testing ...\
  GNOME Discourse
- [link](https://www.reddit.com/r/gnome/comments/1abvp47/libadwaita%5Fbut%5Fin%5Fthe%5Fweb/)\
  libadwaita but in the web : r/gnome - Reddit\
  Jan 26, 2024 — Also, Adwaita styling is mostly done in CSS. It's not fully browser-compatible, but with some work, it can be converted. ... Cool ...\
  Reddit·r/gnome
- [link](https://en.wikipedia.org/wiki/GTK)\
  GTK - Wikipedia\
  GTK is an object-oriented widget toolkit written in the programming language C; it uses GObject (that is, the GLib object system) ...\
  Wikipedia

Show all

You said: does it do something a web browser does when working w css

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Yes, Libadwaita does exactly what a web browser does when processing CSS styles.</span></strong></mark> Under the hood, the GTK 4 engine runs a style resolution process that mirrors a web browser's rendering workflow.

***

1\. It Computes the "Cascade" and Specificity

Just like a web browser, Libadwaita resolves conflicting styles using **CSS Specificity** rules.

- If you target a widget generic name (like `button`), it has low priority.
- If you target a specific style class (like `.suggested-action`), it overrides the generic rule.
- If two rules match perfectly, the last one loaded wins.

2\. It Inherits Properties Down the Widget Tree

Libadwaita handles style inheritance exactly like a browser's DOM (Document Object Model).

- If you apply a rule like `font-family: monospace;` or `color: @accent_color;` to a top-level window container (`AdwWindow`), those properties automatically **cascade down** to every child label, text box, and button inside that window, unless explicitly overridden.

3\. It Simulates Interactive Pseudo-classes

Libadwaita tracks user input states and updates styles dynamically using the exact same pseudo-classes a web browser uses for hyperlinks and buttons:

- **`:hover`**: Triggered when the mouse pointer glides over a widget.
- **`:active`**: Triggered the exact millisecond a user clicks or presses down on a button.
- **`:disabled`**: Triggered when a widget is grayed out and unclickable.
- **`:focus`**: Triggered when a user navigates to a text input field using the `Tab` key.

4\. It Parses Standard CSS Syntax and Units

The engine reads and validates standard CSS syntax rules, formats, and spacing structures. It natively understands web measurements such as:

- **`px`** (Pixels) for absolute widget sizing.
- **`pt`** (Points) for typography scaling.
- **`em` / `rem`** for relative scaling based on font sizes.
- **`rgba()`** and **`linear-gradient()`** functions for advanced alpha channel coloring and backgrounds.

***

Where the Browser and Libadwaita Diverge

While the _logic_ of reading the CSS is the same, how they translate that CSS into visuals is fundamentally different:

```
[ Browser ] ---> Parses CSS ---> Calculates Flexbox/Grid Layout ---> Renders HTML DOM Pixels
[ Libadwaita ] -> Parses CSS ---> Maps CSS to Native C Code Props -> Renders Vulkan/OpenGL Widgets
```

A browser uses CSS to physically **layout** elements on a blank page (using rules like `display: flex;` or `grid`). Libadwaita **cannot do this**. In Libadwaita, the layout structure is rigidly controlled by C/Rust binary code containers (like `AdwBox`). CSS in Libadwaita is strictly restricted to **painting** the existing widgets (handling borders, margins, colors, fonts, and shadows).

If you are trying to write a specific style rule, let me know:

- What **visual property** are you trying to change (e.g., margins, gradients, font sizes)?
- Are you trying to style an **interactive state** (like a hover effect)?

I can give you the exact CSS code block that Libadwaita will accept.

You said: does css in libadwaita look much like css props in web standard

**Yes, the vast majority of CSS properties in Libadwaita look exactly like web standard CSS, but the engine completely excludes web-layout properties.** If you already know web CSS, you will instantly recognize [GTK 4's styling syntax](https://docs.gtk.org/gtk4/css-properties.html). \[[1](https://docs.gtk.org/gtk4/css-properties.html)]

However, because Libadwaita targets native desktop binary widgets instead of an open web page, it only uses CSS for visual painting, not structural arrangement. \[[1](https://stackoverflow.com/questions/32162372/which-gtk-elements-support-which-css-properties)]

***

1\. Properties That Are Exactly the Same

For text formatting, colors, and box model aesthetics, Libadwaita uses standard W3C web naming conventions: \[[1](https://stackoverflow.com/questions/32162372/which-gtk-elements-support-which-css-properties)]

css

```
/* This is valid in both a Web Browser and Libadwaita */
.my-custom-widget {
  background-color: #242424;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: bold;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}
```

Use code with caution.

2\. Properties That Are Completely Missing

You cannot use CSS to move, align, or scale boxes relative to each other in Libadwaita. The engine ignores web layout modules entirely: \[[1](https://stackoverflow.com/questions/32162372/which-gtk-elements-support-which-css-properties)]

- ❌ **No Flexbox**: Properties like `display: flex;`, `flex-direction`, or `justify-content` do not exist.
- ❌ **No CSS Grid**: Properties like `display: grid;` or `grid-template-columns` will throw syntax errors.
- ❌ **No Positioning**: Properties like `position: absolute;`, `position: fixed;`, `top`, `left`, or `z-index` are entirely unsupported.

_How it works instead:_ Structural layout is handled in your application backend (using native UI templates or code) via C/Rust widgets like `AdwBox` or `GtkGrid`. CSS only decorates the boundaries of those widgets after they are placed. \[[1](https://devdocs.io/gtk~4.0/), [2](https://stackoverflow.com/questions/32162372/which-gtk-elements-support-which-css-properties)]

***

3\. Unique "GTK-Only" Additions

To handle native desktop environments seamlessly, Libadwaita features a few specialized CSS properties and functions that you will not find in standard web browsers:

Custom Color Math Functions

Historically, GTK added unique procedural color adjustments like `alpha()`, `mix()`, or `shade()` right inside the stylesheet. This allows widgets to calculate shades dynamically on the fly based on user selection: \[[1](https://blogs.gnome.org/alicem/2024/06/07/css-happenings/)]

css

```
/* Creates a background that is always 10% opacity of whatever the text color is */
background-color: alpha(currentColor, 0.1);
```

Use code with caution.

Engine-Specific Engine Prefixes

You will occasionally spot rendering properties prefixed with `-gtk-` to tweak low-level toolkit parameters that browsers never encounter: \[[1](https://docs.gtk.org/gtk4/css-properties.html), [2](https://stackoverflow.com/questions/26165128/is-there-a-manual-list-of-special-gtk-css-properties)]

css

```
/* Tells the native font engine how heavily to clip text paths */
-gtk-icon-transform: rotate(45deg);
-gtk-dpi: 96;
```

Use code with caution.

Widget Node Selectors

Instead of selecting standard HTML tags like , , or , you select native toolkit nodes. \[[1](https://docs.gtk.org/gtk4/css-overview.html)]

css

```
/* Targets a standard button text label element */
button > label {
  text-shadow: none;
}

/* Targets the structural row container inside a preferences group */
preferencesgroup > list {
  background-color: @view_bg_color;
}
```

Use code with caution.

***

If you are porting designs over, let me know:

- Are there **specific CSS layout concepts** (like transitions or alignments) you are trying to recreate?
- Are you trying to match a **Figma/web design mock** directly into a Linux application framework?

I can map out how to translate those specific visual features into compliant Libadwaita styling.

- [link](https://blogs.gnome.org/alicem/2024/06/07/css-happenings/)\
  CSS Happenings - GNOME Blogs\
  Jun 7, 2024 — GTK deprecations GTK has a bunch of non-standard additions to CSS, related to colors: most notably, @define-color and named colors...\
  GNOME Blogs
- [link](https://docs.gtk.org/gtk4/css-properties.html)\
  Gtk – 4.0: GTK CSS Properties\
  Basic types. All properties support the following keywords: inherit, initial, unset, with the same meaning as defined in the CSS C...\
  The GTK Project
- [link](https://stackoverflow.com/questions/26165128/is-there-a-manual-list-of-special-gtk-css-properties)\
  Is there a manual/list of special Gtk CSS properties?\
  Oct 2, 2014 — Let's set up your homepage Select a few topics you're interested in: python javascript c# reactjs java android html flutter c++ no...\
  Stack Overflow

Show all

# are legacy versions of gnome libadwaita stored in the same repo

**Yes, legacy versions of GNOME's Libadwaita are stored in the same repository.**

All versions of Libadwaita—from its initial releases up to the current versions—are tracked within the official [GNOME Libadwaita GitLab Repository](https://gitlab.gnome.org/GNOME/libadwaita). \[[1](https://gitlab.gnome.org/GNOME/libadwaita)]

How to Access Legacy Versions

You can target and extract older codebases within the main repository using standard Git references:

- **Git Tags**: Every stable release and point release (such as `1.0.0`, `1.4.0`, or `1.5.3`) is frozen as a permanent tag. You can view the full list on the [Libadwaita Tags Page](https://gitlab.gnome.org/GNOME/libadwaita/-/tags) or checkout a specific version locally using:\
  bash

<!---->

```
git checkout tags/1.4.0
```

Use code with caution.

- **Stable Branches**: Long-term support and maintenance for older major versions are managed in dedicated branches, such as `libadwaita-1-5` or `libadwaita-1-6`.
- **GitLab Releases**: You can view the release notes and download standalone source code archives (tarballs or zip files) for any legacy version directly from the [Libadwaita Releases Page](https://gitlab.gnome.org/GNOME/libadwaita/-/releases). \[[1](https://gitlab.gnome.org/GNOME/libadwaita/-/merge%5Frequests/1234), [2](https://gitlab.gnome.org/GNOME/libadwaita/-/tags), [3](https://gitlab.gnome.org/GNOME/libadwaita/-/releases), [4](https://gitlab.gnome.org/GNOME/libadwaita)]

Important Nuances Regarding "Legacy"

- **Libadwaita vs. Libhandy**: If you are looking for the absolute earliest historical "legacy" versions of this design language from the GTK3 era, that software was actually an entirely separate project called **Libhandy**. Libhandy is housed in its own distinct Libhandy GitLab Repository. Libadwaita was created as the direct successor to Libhandy specifically to target GTK4.
- **Adwaita Legacy Icons**: If your search is related to assets rather than application logic, GNOME splits off its older styling assets into a standalone project called [Adwaita Legacy Icon Theme](https://gitlab.gnome.org/GNOME/adwaita-icon-theme-legacy). \[[1](https://www.reddit.com/r/gnome/comments/tzktiy/why%5Fdidnt%5Fgnome%5Fdevelopers%5Fcreated%5Flibadwatia/), [2](https://github.com/beeware/toga/issues/3069), [3](https://gitlab.gnome.org/GNOME/adwaita-icon-theme-legacy), [4](https://blogs.gnome.org/alicem/2021/12/31/libadwaita-1-0/)]

If you are trying to resolve a specific issue, let me know if you are looking to **compile an older version**, **patch a stylesheet**, or **migrate an older application** to a newer version of the API. \[[1](https://www.reddit.com/r/gnome/comments/1k2rzy1/does%5Fanyone%5Fknow%5Fwhy%5Fcolours%5Fin%5Fthe%5Fdefault/), [2](https://askubuntu.com/questions/1542761/i-tried-to-compile-libadwaita-but-i-end-up-getting-errors-about-missing-gir-file), [3](https://www.reddit.com/r/gnome/comments/1c6rn0s/the%5Fultimate%5Fsolution/), [4](https://news.ycombinator.com/item?id=40565357), [5](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.8/build-howto.html)]

- [link](https://news.ycombinator.com/item?id=40565357)\
  Libadwaita: Splitting GTK and Design Language | Hacker News\
  Jun 3, 2024 — No they are not. The GtkMenuBar widget got dropped because a replacement already exists. Another comment below provided the refere...\
  Hacker News
- [link](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.8/build-howto.html)\
  Adw – 1: Compiling with Libadwaita - GNOME\
  Using pkg-config \* Like other GNOME libraries, Libadwaita uses pkg-config to provide compiler options. The package name is libadwa...\
  GNOME
- [link](https://github.com/beeware/toga/issues/3069)\
  Upgrade to GTK4 and libadwaita for Linux #3069 - GitHub\
  Jan 3, 2025 — GTK4 was initially released 4 years ago, and it is in all distros at this point (even Debian stable). Libadwaita 1.0 is also every...\
  GitHub

Show all

# gnome libhandy

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><code dir="ltr" style="font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 1px solid rgb(44, 46, 53);">libhandy</code> is a software library developed for the GNOME desktop environment to help build adaptive, mobile-friendly user interfaces using GTK 3</strong></mark>**.** It provides interface building blocks that allow a single Linux application to scale dynamically from large desktop monitors down to the small touchscreens of Linux smartphones like the Purism Librem 5 or PinePhone. \[[1](https://github.com/GNOME/libhandy), [2](https://gnome.pages.gitlab.gnome.org/libhandy/), [3](https://gnome.pages.gitlab.gnome.org/libhandy/doc/main/), [4](https://archlinux.org/packages/extra/x86%5F64/libhandy/), [5](https://discourse.gnome.org/t/gtk-4-and-android/2808)]

Current Status: Legacy & Deprecated

If you are starting a new project, **do not use `libhandy`**. \[[1](https://discourse.gnome.org/t/libhandy-documentation-links-does-not-work-for-latest-versions/23188)]

- **The Successor:** With the transition from GTK 3 to GTK 4, `libhandy` was completely reworked and rebranded into **`libadwaita`**. `libadwaita` is now the standard visual engine for all modern [GNOME](https://en.wikipedia.org/wiki/GNOME) applications.
- **Sunset Phase:** The GNOME runtime environment officially targets the removal of `libhandy` from its default packages. Developers still maintaining older GTK 3 apps are advised to migrate them to GTK 4 and `libadwaita`. \[[1](https://www.reddit.com/r/gnome/comments/mh6rql/libhandy%5Fbecomes%5Flibadwaita%5Fthe%5Fmissing%5Fcode%5Fpart/), [2](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html), [3](https://forums.puri.sm/t/trying-to-understand-libhandy/12488), [4](https://en.wikipedia.org/wiki/GNOME), [5](https://discourse.gnome.org/t/upcoming-gnome-51-flatpak-runtime-will-drop-gcr-3-and-libhandy/35111), [6](https://discourse.gnome.org/t/libhandy-documentation-links-does-not-work-for-latest-versions/23188)]

Key Features of libhandy

For existing applications, `libhandy` provides several specialized widgets designed to improve user experience across different screen configurations: \[[1](https://gnome.pages.gitlab.gnome.org/libhandy/), [2](https://gnome.pages.gitlab.gnome.org/libhandy/doc/main/), [3](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/)]

- **Adaptive Layouts:** Widgets like `HdyLeaflet` and `HdyFlap` act as dynamic split-views. On a wide desktop, they display multiple panels side-by-side. On a narrow phone screen, they automatically fold into a layered swipe-to-reveal mobile navigation pattern.
- **Touch-Friendly Controls:** Features specialized UI elements such as `HdyCarousel` for swipeable paginated content, `HdyKeypad` for pin entry, and touch-optimized list rows (`HdyActionRow`).
- **Visual Polish:** Includes uniform design systems like `HdyAvatar` for clean user profile images and built-in dark mode styling elements via a style manager. \[[1](https://gitlab.gnome.org/GNOME/libhandy/-/issues), [2](https://gnome.pages.gitlab.gnome.org/libhandy/doc/main/)]

How to Use It (For GTK 3 Maintenance)

If you must build or maintain a legacy application requiring `libhandy`, you can link against it via `pkg-config` using the package name **`libhandy-1`**. \[[1](https://gnome.pages.gitlab.gnome.org/libhandy/doc/main/build-howto.html)]

On Debian or Ubuntu-based distributions, install the runtime and development assets using:

bash

```
sudo apt install libhandy-1-0 libhandy-1-dev
```

Use code with caution.

Are you looking to **port an older app** from `libhandy` to `libadwaita`, or are you looking for help **setting up a new project** using modern GTK 4?

- [link](https://www.reddit.com/r/gnome/comments/mh6rql/libhandy%5Fbecomes%5Flibadwaita%5Fthe%5Fmissing%5Fcode%5Fpart/)\
  libhandy becomes libadwaita, "the missing code part ... - Reddit\
  Mar 31, 2021 — libhandy becomes libadwaita, "the missing code part" of GNOME's visual language : r/gnome. Skip to main content libhandy becomes l...\
  Reddit·r/gnome
- [link](https://github.com/GNOME/libhandy)\
  GNOME/libhandy: Read-only mirror of https://gitlab ... - GitHub\
  Handy. The aim of the Handy library is to help with developing UI for mobile devices using GTK/GNOME.\
  GitHub
- [link](https://gnome.pages.gitlab.gnome.org/libhandy/)\
  Handy - GNOME\
  Building blocks for modern adaptive GNOME applications. Handy offers application developers many widgets and objects to build GNOM...\
  GNOME

Show all

# compare libhandy and libadwaita

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Libadwaita is the direct successor to Libhandy</span></strong></mark>**.** While both libraries were created to provide advanced UI components for the GNOME ecosystem (especially adaptive layouts for mobile and desktop screens), they target entirely different generations of the [GTK toolkit](https://www.gtk.org/) and handle design identity differently. \[[1](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html), [2](https://discourse.gnome.org/t/what-is-libadwaita/24422)]

Core Differences

| Feature \[[1](https://adrienplazas.com/blog/2021/03/31/introducing-libadwaita.html), [2](https://www.phoronix.com/news/libadwaita-1.0), [3](https://www.youtube.com/watch?v=urh44tg9t3c\&t=115), [4](https://blogs.gnome.org/alicem/2021/12/31/libadwaita-1-0/), [5](https://www.youtube.com/watch?v=0BCxq%5FxQSkk\&t=8), [6](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html), [7](https://discourse.gnome.org/t/what-is-libadwaita/24422)] | Libhandy                          | Libadwaita                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------ |
| **GTK Version**                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | GTK 3                             | GTK 4                                      |
| **Status**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Deprecated / Legacy               | Active / Current standard                  |
| **Theming & Design**                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Relies on GTK's theme engine      | Hardcodes the Adwaita design language      |
| **Dark Mode Preference**                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Manual opt-in (in later versions) | Automatic, system-wide integration         |
| **Primary Focus**                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Mobile convergence & adaptability | Enforcing GNOME Human Interface Guidelines |

***

Key Areas Compared

1\. Lifecycle and Toolkit Integration

- **Libhandy** was built to extend **GTK 3**. It introduced adaptive widgets (like `HdyLeaflet` and `HdyCarousel`) to help apps scale gracefully from desktops down to Linux smartphones like the Librem 5 and PinePhone. It is now in maintenance mode.
- **Libadwaita** is built from the ground up for **GTK 4**. When GTK 4 was released, the GNOME team decided to split the core, platform-agnostic graphics toolkit (GTK) from GNOME's specific design patterns. Libadwaita became the dedicated library for implementing the [GNOME Human Interface Guidelines (HIG)](https://developer.gnome.org/hig/). \[[1](https://blogs.gnome.org/alicem/category/libhandy/), [2](https://www.osnews.com/story/139865/libadwaita-splitting-gtk-and-design-language/), [3](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html), [4](https://discourse.gnome.org/t/what-is-libadwaita/24422), [5](https://adrienplazas.com/blog/2021/03/31/introducing-libadwaita.html), [6](https://www.youtube.com/watch?v=0BCxq%5FxQSkk\&t=8)]

2\. Theming and Customization (The Controversy)

- **Libhandy** applications respected system-wide GTK 3 themes (like Yaru, Arc, or Numix) set by the user or the Linux distribution.
- **Libadwaita** explicitly includes and enforces the **Adwaita stylesheet**. It bypasses traditional GTK themes, making it significantly harder for distributions to custom-theme applications. While this prevents third-party themes from breaking app interfaces, it restricts visual customization primarily to accent colors and light/dark mode toggles. \[[1](https://www.youtube.com/watch?v=urh44tg9t3c\&t=115), [2](https://www.phoronix.com/news/libadwaita-1.0), [3](https://www.phoronix.com/news/GNOME-41-libadwaita)]

3\. Feature Set and Widgets

- **Libhandy** pioneered mobile-friendly components but required manual boilerplate code to handle sophisticated behaviors like UI animations and complex window corner clipping.
- **Libadwaita** native widgets are more mature, extensible, and easier to maintain. It includes advanced features like runtime CSS recoloring, streamlined notification layouts, and sophisticated responsive tools like `AdwBreakpoint` and `AdwMultiLayoutView` to change UI layouts dynamically based on window size. \[[1](https://discourse.gnome.org/t/what-is-libadwaita/24422), [2](https://blogs.gnome.org/alicem/category/libhandy/), [3](https://tesk.page/2024/06/03/libadwaita-splitting-gtk-and-design-language/), [4](https://www.phoronix.com/news/libadwaita-1.0), [5](https://blogs.gnome.org/alicem/category/libadwaita/), [6](https://news.ycombinator.com/item?id=30945209)]

4\. Dark Mode Support

- **Libhandy** backported a dark style manager in its late 1.6 release, but developers had to explicitly write code to make their apps look for and respect the system's dark mode toggle.
- **Libadwaita** handles dark mode natively. Any application built using Libadwaita automatically shifts between light and dark modes based on the desktop environment's settings without extra work from the developer. \[[1](https://blogs.gnome.org/alicem/2022/03/19/libadwaita-1-1-libhandy-1-6/), [2](https://blogs.gnome.org/alicem/2021/12/31/libadwaita-1-0/)]

***

If you are developing a new application, you should **ignore Libhandy and use Libadwaita alongside GTK 4**, unless you are explicitly targeting older GTK 3 environments. \[[1](https://www.reddit.com/r/gnome/comments/mh6rql/libhandy%5Fbecomes%5Flibadwaita%5Fthe%5Fmissing%5Fcode%5Fpart/), [2](https://lobste.rs/s/nykxf6/libadwaita%5Fsplitting%5Fgtk%5Fdesign), [3](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html)]

If you want to know more, tell me:

- Are you looking to **port an existing legacy app** from GTK 3 to GTK 4?

- Do you want to build an app that **looks native on non-GNOME desktops** (like KDE or XFCE)?

- Are you looking for **code examples** for responsive widgets? \[[1](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html), [2](https://www.reddit.com/r/linuxquestions/comments/ty281r/making%5Flibadwaita%5Fapps%5Flook%5Fconsistent%5Fon/), [3](https://en.wikipedia.org/wiki/Adwaita%5F%28design%5Flanguage%29)]

- [link](https://gnome.pages.gitlab.gnome.org/libadwaita/doc/1.2/migrating-libhandy-1-4-to-libadwaita.html)\
  Adw – 1: Migrating from Libhandy 1.4 to Libadwaita\
  Libadwaita is being developed as a successor to Libhandy 1.4. As such, it offers to GTK 4 many features Libhandy was offering to G...\
  GNOME

- [link](https://discourse.gnome.org/t/what-is-libadwaita/24422)\
  What is libadwaita? - Development - GNOME Discourse\
  Oct 9, 2024 — Is this final point or it's better to work with GTK for long term applications support? ... d47081: Please describe in few words -\
  GNOME Discourse

- [link](https://blogs.gnome.org/alicem/2021/12/31/libadwaita-1-0/)\
  Libadwaita 1.0 - GNOME Blogs\
  Dec 31, 2021 — Libadwaita splits all of that into small manageable files. It removes the complicated mixins, because the new style is simple enou...\
  GNOME Blogs

Show all

You said: compare on ui

**Libadwaita looks modern and unified, while Libhandy looks like classic GTK 3.**

Because Libadwaita enforces a strict design language, it fundamentally changes how applications look, feel, and animate compared to Libhandy.

UI Element Comparison

1\. Window Styling and Corners

- **Libhandy:** Windows have sharp bottom corners and a traditional title bar. Applications often look fragmented because the header bar is visually separated from the main window content.
- **Libadwaita:** Windows feature fully rounded bottom corners and unified header bars. The window content flows seamlessly into the top bar, creating a cleaner, "sheet-like" modern aesthetic.

2\. Adaptivity and Responsiveness

- **Libhandy:** Uses widgets like `HdyLeaflet` or `HdySqueezer` to slide columns or hide menus on mobile screens. Transitions can occasionally feel rigid or require manual padding tweaks.
- **Libadwaita:** Introduces `AdwBreakpoint`. This allows the UI to radically and fluidly morph at exact window sizes. Sidebars completely tuck away into bottom sheets or swipe-out drawers with physics-based, mobile-native animations.

3\. Standard Components and Controls

- **Libhandy:** Uses standard GTK 3 checkmarks, switches, and flat lists. Lists often require custom CSS to look modern.
- **Libadwaita:** Features "Preference Rows" (`AdwPreferencesRow`). These build beautiful, standardized, rounded-box lists natively. They include built-in spacing, subtitles, and icons that match GNOME’s system settings exactly.

4\. Tabs and Navigation

- **Libhandy:** Uses standard browser-style tabs that are square and take up fixed space.
- **Libadwaita:** Uses `AdwTabView` and `AdwTabBar`. Tabs are rounded, dynamically resize, can be pinned, and feature smooth drag-and-drop reordering animations.

5\. Widgets Comparison at a Glance

| UI Element           | Libhandy (GTK 3)         | Libadwaita (GTK 4)       | UI Impact                                                                   |
| -------------------- | ------------------------ | ------------------------ | --------------------------------------------------------------------------- |
| **Window Base**      | `HdyWindow`              | `AdwWindow`              | Libadwaita adds rounded bottom corners.                                     |
| **Split Views**      | `HdyLeaflet`             | `AdwNavigationSplitView` | Libadwaita handles sidebar-to-mobile transitions automatically.             |
| **Settings / Lists** | Manual GTK Lists         | `AdwPreferencesPage`     | Libadwaita creates beautifully grouped card layouts natively.               |
| **Carousels**        | `HdyCarousel`            | `AdwCarousel`            | Libadwaita features smoother, hardware-accelerated swiping.                 |
| **Toasts / Alerts**  | `HdyStatusPage` (Static) | `AdwToastOverlay`        | Libadwaita introduces modern, floating, timed notifications inside the app. |

***

If you are trying to decide which style fits your project, let me know:

- Do you prefer a **traditional desktop layout** or a **mobile-first interface**?
- Are you designing **complex settings menus** with lots of toggles?
- Would you like to see visual **code mockups** comparing how a list row is built in both?

# where is gnome hig repo

The official repository for the GNOME Human Interface Guidelines (HIG) website is hosted on the <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><strong><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><a rel="noopener" href="https://gitlab.gnome.org/Teams/Websites/developer.gnome.org-hig" style="font-weight: 500; margin: 0px; text-decoration-thickness: 1px; text-decoration-style: solid; text-decoration-color: rgb(153, 195, 255); border-bottom: 0px none rgb(153, 195, 255);">GNOME GitLab instance</a></span></strong></mark>. \[[1](https://gitlab.gnome.org/Teams/Websites/developer.gnome.org-hig), [2](https://github.com/GNOME/eog/blob/master/README.md)]

Core Repositories

- **Main HIG Content Website**: The source code and text content that powers the live [GNOME HIG website](https://developer.gnome.org/hig/) is located at the **developer.gnome.org-hig Repository**.
- **Design Assets & Resources**: If you are looking for design elements, app icons, and templates used alongside the guidelines, they are managed by the GNOME Design Team under the **[HIG App Icons Repository](https://gitlab.gnome.org/Teams/Design/HIG-app-icons)** and the broader **[GNOME Design Team Group](https://gitlab.gnome.org/Teams/Design)**. \[[1](https://developer.gnome.org/hig/), [2](https://gitlab.gnome.org/Teams/Design/HIG-app-icons), [3](https://gitlab.gnome.org/Teams/Design), [4](https://gitlab.gnome.org/Teams/Websites/developer.gnome.org-hig)]

_Note: Older versions of the HIG were previously tracked in a `gnome-devel-docs` module on GNOME's old Git infrastructure, but all modern, active development has migrated to GitLab._ \[[1](https://discourse.gnome.org/t/new-hig-website/2479), [2](https://github.com/gnome-design-team/gnome-hig)]

Are you looking to **contribute documentation updates**, or do you need to find **specific UI design templates** (like Figma/Inkscape stencils)? Let me know how you intend to use it, and I can point you directly to the right assets. \[[1](https://www.reddit.com/r/gnome/comments/waiz2d/gnome%5Fhuman%5Finterface%5Fcomponent%5Flibrary%5Ffor%5Ffigma/)]

- [link](https://discourse.gnome.org/t/new-hig-website/2479)\
  New HIG website - Development - GNOME Discourse\
  Jan 17, 2020 — I think so, yes. It would solve the issue of copying the content from the wiki and publishing it into developer.gnome.org for the ...\
  GNOME Discourse
- [link](https://www.reddit.com/r/gnome/comments/waiz2d/gnome%5Fhuman%5Finterface%5Fcomponent%5Flibrary%5Ffor%5Ffigma/)\
  GNOME Human Interface component library for Figma - Reddit\
  Jul 28, 2022 — Comments Section \* archanox. • 4y ago. I would love to see this made available on figma. I know svg-stencils.github.io has some so...\
  Reddit·r/gnome
- [link](https://gitlab.gnome.org/Teams/Design/HIG-app-icons)\
  Teams / Design / HIG-app-icons - GitLab\
  Jul 18, 2018 — Teams / Design / HIG-app-icons · GitLab.\
  GNOME

Show all
