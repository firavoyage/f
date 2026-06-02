# can tab not just focus a nav item but also go there

<mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"><span style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">No, the </span><strong>Tab</strong> key is strictly designed to navigate (focus) between interactive elements, not to activate them</mark>. Activating a focused item requires an additional keystroke. \[[1](https://www.linkedin.com/pulse/screen-reader-navigation-vs-keyboard-girijesh-tripathi), [2](https://accesstive.com/glossary/tab-navigation/), [3](https://docs.gitlab.com/development/fe%5Fguide/accessibility/best%5Fpractices/), [4](https://www.reddit.com/r/MacOS/comments/1dy2rls/navigating%5Fwebsites%5Fusing%5Fjust%5Fkeyboard%5Fon%5Fmacos/)]

Standard Keyboard Behavior

- **Tab**: Moves focus to the next item.
- **Shift + Tab**: Moves focus to the previous item.
- **Enter / Space**: Activates the focused link or button. \[[1](https://prepp.in/question/when-navigating-through-options-in-a-dialog-box-or-68665987b6fc14bdd5ca118a), [2](https://testbook.com/question-answer/when-navigating-through-options-in-a-dialog-box-or--6867758b116a138582054940), [3](https://www.naviteer.com/help/topics/idh-topic1190.htm), [4](https://getuikit.com/docs/tab)]

Why It Works This Way

- **Accessibility**: Users who rely on screen readers or keyboard navigation need to pass through items to hear what they are without accidentally triggering a page load or action.
- **Predictability**: Automatically navigating on focus breaks standard web design conventions and confuses users. \[[1](https://www.buildo.com/blog-posts/mastering-focus-for-accessible-user-interfaces)]

How to Achieve Automatic Navigation (For Developers)

If you are building a website and want a focused item to trigger an action immediately, you must use JavaScript. \[[1](https://zellwk.com/blog/style-hover-focus-active-states/)]

- **The Focus Event**: Listen for the `focus` event on your navigation elements.
- **The Action**: Use `window.location.href` to redirect the user as soon as the element gains focus. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Keyboard-navigable%5FJavaScript%5Fwidgets)]

_Warning: Implementing this is strongly discouraged as it creates a frustrating user experience and violates web accessibility standards (WCAG)._ \[[1](https://news.ycombinator.com/item?id=2764332), [2](https://accessuse.eu/en/tabbed-interfaces.html)]

If you are trying to build a specific navigation menu, let me know:

- What **framework** you are using (HTML/JS, React, WordPress, etc.)
- The **type of menu** you are creating (tabs, dropdowns, top nav)
- Who the **target audience** is \[[1](https://www.youtube.com/watch?v=0MoGIj-9xuA), [2](https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-navs.php)]

I can help you build an accessible and user-friendly navigation system.

- [link](https://www.linkedin.com/pulse/screen-reader-navigation-vs-keyboard-girijesh-tripathi)\
  Screen reader navigation Vs Keyboard navigation\
  Jul 24, 2020 — Here is where we draw an important distinction: keyboard focus and screen reader focus are not the same thing! Keyboard focus is r...\
  \
  \
  LinkedIn
- [link](https://accesstive.com/glossary/tab-navigation/)\
  Tab Navigation: Essential Web Accessibility Guide\
  Tab navigation refers to moving through interactive elements on a web page by pressing the Tab key (and Shift+Tab to go backward).\
  \
  \
  Accesstive
- [link](https://docs.gitlab.com/development/fe%5Fguide/accessibility/best%5Fpractices/)\
  Accessibility best practices\
  Support keyboard-only use Tab and Shift-Tab should only move between interactive elements, not static content. When you add :hover...\
  \
  GitLab Docs

Show all

You said: gnome resources opens the pages when you tab through apps, processes, processor, etc. what do you think of this from the ux perspective.

From a UX perspective, the behavior you are describing in the [GNOME Resources](https://apps.gnome.org/Resources/) app (and similar [libadwaita](https://github.com/nokyan/resources) apps) is a **deliberate design choice that favors modern dashboard exploration, but breaks traditional accessibility rules.** \[[1](https://apps.gnome.org/Resources/), [2](https://github.com/nokyan/resources)]

Instead of standard tabs, these apps often use a sidebar or header list designed for "selection-on-focus." Here is a UX breakdown of why this happens, why it works for some, and why it frustrates others.

🌟 The Good: Why GNOME Does It

- **Zero-Click Exploration**: When using an app like Resources to diagnose a lagging computer, you want answers fast. Tabbing directly into a page lets you quickly skim the CPU graph, jump to Memory, and check the Disk without pressing `Enter` every single time. It treats navigation like turning pages in a book. \[[1](https://mastodon.mossy.page/@gnomeapps/111252223890882590), [2](https://uxdesign.cc/hey-where-did-that-tab-go-digging-deeper-into-browser-ux-402d9df2946d), [3](https://www.freshconsulting.com/insights/blog/uiux-principle-21-when-and-when-not-to-use-tabs/)]
- **Flawless Touch & Gesture UX**: GNOME prioritizes touchscreens, trackpad swipes, and fluid animations. For a touchscreen user, tapping a sidebar item or sliding through views instantly loads the content. The keyboard behavior mimics this instant, seamless transition. \[[1](https://www.reddit.com/r/linux/comments/lkqx9n/gnome%5Fshell%5F40%5Fux%5Fchanges%5Fthe%5Fresearch/), [2](https://blogs.gnome.org/shell-dev/page/2/)]
- **Designed for "Non-Destructive" Views**: Changing tabs in a system monitor doesn't submit a form, delete data, or navigate away from the app entirely. Because switching views is safe and instant, the design prioritizes speed over caution.

⚠️ The Bad: Where It Fails UX Best Practices

- **Breaks the Principle of Least Surprise**: Users expect the `Tab` key to move a focal ring _around_ the interface so they can choose what to activate. Forcing a page load on focus strips away that preview step.
- **Accessibility (a11y) Violations**: For users relying on screen readers, this behavior can be a nightmare. A screen reader user tabbing through the menu will suddenly be hit with an explosion of new text as the entire page changes, disorienting them before they can even decide if they wanted to visit that page.
- **Heavy Interface "Jank"**: If a page is heavy to load (like a massive list of running system processes), tabbing _past_ that item to get to the next one causes the app to freeze momentarily while it renders the page you didn't even want to see.

🏁 The Verdict

It is a **highly opinionated, "dashboard-style" UX pattern.**

For a power user navigating a system utility entirely via keyboard shortcuts, it feels incredibly fast and fluid. However, as a general rule of web and application design, it should be avoided. It compromises standard universal accessibility in exchange for minor aesthetic speed.

If you are thinking about implementing a menu like this, let me know:

- Is this for a **desktop app** or a **website**?
- What **kind of data** will live inside the different tabs?
- Do you expect your users to navigate primarily with a **mouse, keyboard, or touch**?

I can help you weigh the accessibility risks for your specific project.

- [link](https://www.reddit.com/r/linux/comments/lkqx9n/gnome%5Fshell%5F40%5Fux%5Fchanges%5Fthe%5Fresearch/)\
  GNOME Shell 40 UX Changes: The Research : r/linux - Reddit\
  Feb 16, 2021 — It's not that it's bad for "office work" specifically, it's bad for workflows that aren't extremely focused in general. It's reall...\
  Reddit·r/linux
- [link](https://blogs.gnome.org/shell-dev/page/2/)\
  Page 2 – GNOME Shell & Mutter\
  Default configuration As mentioned already, GNOME 40 will continue to default to only showing workspaces on the primary display. W...\
  GNOME Blogs
- [link](https://apps.gnome.org/Resources/)\
  Resources - Apps for GNOME\
  Keep an eye on system resources. Resources allows you to check the utilization of your system resources and control your running p...\
  Gnome Apps

Show all

You said: is it wise to do so for its target users

Yes, **it is a very wise choice for its specific target users**, even if it breaks traditional web design rules.

The success of any UX pattern depends entirely on context. The [GNOME Resources](https://apps.gnome.org/Resources/) app is a specialized native desktop utility, which means its user base, intent, and hardware environment are drastically different from a casual web browser. \[[1](https://apps.gnome.org/Resources/), [2](https://github.com/nokyan/resources)]

Evaluating this decision through the lens of its target audience reveals why it works so well.

1\. The Target Audience is Power-Users and "Tinkerers"

- **The Intent**: Nobody opens a system resource monitor to casually browse. Users open it with a strict mission: _Why is my fan spinning? Why is my RAM maxed out? Is my network bottlenecked?_ \[[1](https://apps.gnome.org/SystemMonitor/), [2](https://mastodon.mossy.page/@gnomeapps/111252223890882590)]
- **The UX Payoff**: Because the user is looking for an immediate metric, forcing them to hit `Tab` + `Enter` over and over just to check different hardware stats adds unnecessary friction. "Selection-on-focus" reduces physical keystrokes, allowing them to rapidly scan the state of the machine.

2\. Native System Performance Eliminates "Jank"

- **The Intent**: In web design, loading on focus is hated because fetching a new webpage takes time, causing a laggy, disjointed experience.
- **The UX Payoff**: GNOME Resources is a native Linux application built with high-performance [Rust and GTK 4 / libadwaita](https://github.com/nokyan/resources). The data pages (CPU graphs, process lists) render almost instantly because they pull data directly from the local Linux kernel. Because there is zero network latency, tabbing through the items feels like seamlessly flipping through cards rather than waiting for pages to load. \[[1](https://github.com/nokyan/resources), [2](https://mastodon.mossy.page/@gnomeapps/111252223890882590)]

3\. Alignment with GNOME Ecosystem Muscle Memory

- **The Intent**: GNOME users choose the desktop environment because they heavily favor its specific keyboard-driven workflow (using the `Super` key, workspace switching, and built-in search overlays). \[[1](https://forum.zorin.com/t/gnome-46-is-just-terrible/45115), [2](https://mairin.wordpress.com/2010/02/10/gnome-shell-usability-test-plan/)]
- **The UX Payoff**: The target users already expect fluid, immediate layout changes from their desktop environment. The app's tab behavior aligns perfectly with the core [GNOME Human Interface Guidelines](https://developer.gnome.org/hig/guidelines/navigation.html) for view switchers, matching the muscle memory the user has already developed across the rest of the OS. \[[1](https://developer.gnome.org/hig/patterns/nav.html)]

Summary Table: Web vs. GNOME Resources

| UX Factor \[[1](https://darker.ink/writings/Design-research-on-Web-browsing), [2](https://mastodon.mossy.page/@gnomeapps/111252223890882590), [3](https://apps.gnome.org/SystemMonitor/), [4](https://github.com/nokyan/resources)] | On a Standard Website                      | Inside GNOME Resources                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------- |
| **User Goal**                                                                                                                                                                                                                       | Reading, shopping, browsing                | Urgent troubleshooting, diagnosing      |
| **Action Cost**                                                                                                                                                                                                                     | High (network load, page redraws)          | Near Zero (instant native rendering)    |
| **Expectation**                                                                                                                                                                                                                     | Safety (don't leave the page accidentally) | Speed (show me the metrics immediately) |
| **Verdict**                                                                                                                                                                                                                         | **Unwise** (Frustrating & inaccessible)    | **Wise** (Efficient & highly optimized) |

If you want to apply this pattern to your own project, tell me:

- Are you building a **system dashboard** or a **data-heavy app**?
- Is it **web-based** or a **native desktop/mobile app**?

I can help you determine if your target audience would appreciate this pattern or find it frustrating.

- [link](https://darker.ink/writings/Design-research-on-Web-browsing)\
  Design research on Web browsing - Darker Ink\
  Jun 2, 2017 — Many participants used tabs for revisitation more often than the back button, up to the point where, for frequent tabs users, tab ...\
  darker.ink
- [link](https://mairin.wordpress.com/2010/02/10/gnome-shell-usability-test-plan/)\
  GNOME Shell Usability Test Plan - Máirín Duffy\
  Feb 10, 2010 — The GNOME Shell design is based upon a few assumptions about users' desktop actions. While many of these assumptions are informed ...\
  WordPress.com
- [link](https://apps.gnome.org/Resources/)\
  Resources - Apps for GNOME\
  Keep an eye on system resources. Resources allows you to check the utilization of your system resources and control your running p...\
  Gnome Apps

Show all

