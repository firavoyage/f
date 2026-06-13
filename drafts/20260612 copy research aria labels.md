<!-- i might need it? -->

# what are the aria attrs

June 12, 2026

**ARIA attributes** (Accessible Rich Internet Applications) are <mark style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">specialized HTML attributes that communicate an element's role, state, and properties to assistive technologies like screen readers</mark>. They bridge the gap when native HTML elements fall short, helping developers build highly accessible complex or dynamic web applications. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), [2](https://web.dev/learn/accessibility/aria-html), [3](https://www.youtube.com/watch?v=3BPxDkj9UzQ)]

Crucially, ARIA attributes **do not change the behavior or appearance** of a web page; they only modify how the element is announced in the browser's accessibility tree. All functional behavior (like keyboard tracking or toggling states) must still be handled via JavaScript. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required), [2](http://web-accessibility.carnegiemuseums.org/foundations/aria/), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)]

ARIA attributes are broadly categorized into four main types. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), [2](http://web-accessibility.carnegiemuseums.org/foundations/aria/)]

### 1. Roles

The `role` attribute defines **what an element is or does** when semantic HTML elements cannot be used. Once assigned, a role promises a specific user experience to the assistive technology. \[[1](https://accessibleweb.com/question-answer/what-is-aria/), [2](https://www.youtube.com/shorts/vCqoWDFl2z4), [3](https://www.alephaccessibility.net/resources/the-most-common-aria-attributes-explained), [4](https://www.angulararchitects.io/blog/aria-roles-attributes/)]

- `role="button"`: Instructs a screen reader to treat a non-semantic element (like a clickable ) as a button.
- `role="dialog"`: Identifies a modal window or overlay panel.
- `role="progressbar"`: Indicates that the element represents a loading progress bar. \[[1](https://accessibilityinsights.io/info-examples/web/aria-required-attr/), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), [4](https://accessibleweb.com/question-answer/what-is-aria/), [5](https://www.youtube.com/shorts/vCqoWDFl2z4)]

### 2. Widget States

States are dynamic characteristics that **change frequently in response to user interaction**. They must be continually updated via JavaScript. \[[1](https://adasitecompliance.com/role-aria-enhancing-website-accessibility-comprehensive-guide/), [2](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/), [3](https://www.a11yproject.com/posts/getting-started-aria/), [4](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), [5](https://accessibleweb.com/question-answer/what-is-aria/)]

- `aria-expanded="true/false"`: Indicates whether a collapsible section (like an accordion or mobile hamburger menu) is open or closed.
- `aria-checked="true/false"`: Reflects the current state of a custom checkbox or toggle.
- `aria-disabled="true/false"`: Informs assistive technology that an element is present but currently unavailable for interaction. \[[1](https://www.youtube.com/watch?v=38JDscMbB4I\&t=1), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [3](https://www.w3.org/TR/html-aria/), [4](https://www.accessibilitychecker.org/blog/aria-accessibility/), [5](https://accessibleweb.com/question-answer/what-is-aria/)]

### 3. Widget Properties

Properties represent **essential characteristics of an element** that are less likely to change dynamically compared to states. \[[1](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/), [2](https://www.boia.org/blog/what-are-the-three-types-of-aria-attributes), [3](https://designsystem.gov.ae/insights/the-vital-role-of-aria-in-enhancing-web-accessibility), [4](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)]

- `aria-label`: Provides an explicit, invisible text label for an element that lacks a visible text description (e.g., an icon-only button).
- `aria-labelledby`: References the ID of another visible element in the DOM to serve as the accessible name.
- `aria-describedby`: References another element containing a longer, more detailed description of the current item.
- `aria-required="true/false"`: Signals to assistive technology that a form field must be completed before submission. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby), [2](https://openclassrooms.com/en/courses/6663461-code-an-accessible-website-in-html-css/7119811-improve-your-html-with-aria-attributes), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), [4](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)]

### 4. Relationship Attributes

These attributes establish **programmatic relationships between elements** when the hierarchy cannot be easily determined directly from the HTML DOM structure. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns), [2](https://www.youtube.com/watch?v=3BPxDkj9UzQ)]

- `aria-controls`: Identifies the element (or elements) whose content or presence is controlled by the current element (e.g., a tab control pointing to its corresponding tab panel).
- `aria-owns`: Defines a parent-child relationship where a child element lives in an entirely separate part of the visual DOM tree. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)]

### 💡 The First Rule of ARIA

According to the [W3C ARIA Authoring Practices](https://www.w3.org/WAI/standards-guidelines/aria/) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), the golden rule of ARIA is: **If you can use a native HTML element instead of an ARIA attribute, do it.** Native elements (like , , or ) already feature robust, built-in accessibility definitions and structural styles across all browsers without requiring manual JavaScript overhead. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), [2](https://www.youtube.com/watch?v=3BPxDkj9UzQ), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)]

Are you currently troubleshooting a **specific accessibility issue**, or are you looking to build a **custom interactive widget** (like a slider or modal dialog)? Tell me what you're working on so I can provide the exact code snippets you need.

- [link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)\
  ARIA - Accessibility - MDN Web Docs - Mozilla\
  ARIA. Accessible Rich Internet Applications ( ARIA ) is a set of roles and attributes that define ways to make web content and web...\
  MDN Web Docs
- [link](https://web.dev/learn/accessibility/aria-html)\
  ARIA and HTML - web.dev\
  Introduction to ARIA ARIA was first developed in 2008 by the Web Accessibility Initiative (WAI) group—a subset of the overarching ...\
  web.dev
- [link](https://accessibleweb.com/question-answer/what-is-aria/)\
  What is ARIA? - Accessible Web\
  For example, imagine you have an interactive element that saves the user's settings. This element performs an action, so it's a bu...\
  Accessible Web

Show all

## You said: all aria attrs

June 12, 2026

The complete list of standard **ARIA attributes** (states and properties) is categorized by their core functionality according to the [W3C Specification](https://www.w3.org/TR/wai-aria-1.0/states%5Fand%5Fproperties) and [MDN Web Docs Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes). \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes), [2](https://www.w3.org/TR/wai-aria-1.0/states%5Fand%5Fproperties)]

***

### 1. Widget Attributes

These attributes track user input, behaviors, values, and visual states on individual user interface components. \[[1](https://www.w3.org/TR/wai-aria-1.0/states%5Fand%5Fproperties)]

- `aria-autocomplete`: Predicts user input (values: `none`, `inline`, `list`, `both`).
- `aria-checked`: Tracks checkboxes or radio buttons (`true`, `false`, `mixed`).
- `aria-current`: Highlights the current item within a set (e.g., `page`, `step`, `date`).
- `aria-disabled`: Marks a widget as visually present but un-interactable (`true`, `false`).
- `aria-expanded`: Toggles collapsible panels, menus, or accordions (`true`, `false`).
- `aria-haspopup`: Alerts that the element triggers a sub-menu or popup (e.g., `dialog`, `menu`).
- `aria-hidden`: Hides content layout blocks entirely from screen readers (`true`, `false`).
- `aria-invalid`: Notes form validation failure states (`true`, `false`, `grammar`, `spelling`).
- `aria-label`: Defines a flat string literal to label elements lacking visible text.
- `aria-level`: Sets hierarchical structural depth (e.g., nesting levels in tree trees).
- `aria-modal`: Isolates focus exclusively within an overlay or modal dialog layout (`true`, `false`).
- `aria-multiline`: Flags text fields supporting multi-line formatting breaks (`true`, `false`).
- `aria-multiselectable`: Allows choosing multiple items within select lists (`true`, `false`).
- `aria-orientation`: Explicitly sets control element alignment geometry (`horizontal`, `vertical`).
- `aria-placeholder`: Fallback semantic value hint text printed before value entries.
- `aria-pressed`: Tracks toggle button visual click latch states (`true`, `false`, `mixed`).
- `aria-readonly`: Disallows editing form field values but retains text focus rules (`true`, `false`).
- `aria-required`: Validates that form data input is strictly mandatory (`true`, `false`).
- `aria-selected`: Isolates highlighted selections inside tablists or grids (`true`, `false`).
- `aria-sort`: Tracks layout ordering configurations on data headers (`ascending`, `descending`, `other`).
- `aria-valuemax`: Minimum boundary value allowed on ranges/spinbuttons.
- `aria-valuemin`: Maximum boundary value allowed on ranges/spinbuttons.
- `aria-valuenow`: Exact current decimal scale metric position for sliders/progressbars.
- `aria-valuetext`: Human-readable text label proxy summarizing numeric data ranges. \[[1](http://web-accessibility.carnegiemuseums.org/foundations/aria/), [2](https://github.com/filipelinhares/WAI-ARIA-cheatsheet), [3](https://ucfcdl.github.io/techrangers-handbook/best-practices/accessibility/aria.html), [4](https://vispero.com/resources/what-state-aria-in/), [5](https://www.w3.org/TR/wai-aria-1.0/states%5Fand%5Fproperties)]

***

### 2. Relationship Attributes

These attributes link disparate blocks together when elements cannot be nested inside direct DOM hierarchies. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques), [2](https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility)]

- `aria-activedescendant`: Targets a child tracking indicator ID when handling comboboxes or grids.
- `aria-colcount`: Explicitly hardcodes total grid table column structures.
- `aria-colindex`: Declares specific indexed columns within a data matrix grid row.
- `aria-colindextext`: Human-readable text alternative value for a specific column index.
- `aria-colspan`: Spans cell tracking blocks across multiple table grid layout lanes.
- `aria-controls`: Targets component element container IDs mutated by the parent control.
- `aria-describedby`: Pairs element descriptions with other visible document copy text strings.
- `aria-description`: Directly assigns explicit long string data context labels.
- `aria-details`: Points via element ID to comprehensive documents or breakdown info pages.
- `aria-errormessage`: Links invalid input text fields to target warning label alert IDs.
- `aria-flowto`: Overrides standard document order flow to route focus paths.
- `aria-labelledby`: Selects source descriptive string label tags via referenced target layout IDs.
- `aria-owns`: Artificially forces a parent-to-child tree hierarchy map outside normal DOM parsing.
- `aria-posinset`: Specifies item row tracking indices when elements are dynamically loaded.
- `aria-rowcount`: Explicitly states total grid data cell table rows.
- `aria-rowindex`: Explicitly states standard numeric index position markers on rows.
- `aria-rowindextext`: Human-readable text alternative value for a specific row index.
- `aria-rowspan`: Stretches cells vertically down multiple matrix table grids.
- `aria-setsize`: Communicates list lengths when partial collections load dynamically. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description), [2](https://www.digitala11y.com/wai-aria-1-1-cheat-sheet/), [3](https://github.com/mdn/content/blob/main/files/en-us/web/accessibility/aria/reference/attributes/aria-details/index.md?plain=1), [4](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/rules/aria-activedescendant-has-tabindex/), [5](https://rebeccamdeprey.com/blog/building-an-accessible-autocomplete-component-with-react)]

***

### 3. Live Region Attributes

These attributes control how screen readers dynamically announce background page mutations and content injections. \[[1](https://webaim.org/techniques/aria/), [2](https://dev.to/aman%5Fsingh/thinking-about-accessibility-a-few-tips-to-make-a-difference-461i)]

- `aria-atomic`: Announces entire parent trees or just the specific edited element (`true`, `false`).
- `aria-busy`: Halts screen readers from reading regions undergoing massive DOM updates (`true`, `false`).
- `aria-live`: Configures announcement priority settings (`off`, `polite`, `assertive`).
- `aria-relevant`: Limits announced updates to matching structural conditions (`additions`, `removals`, `text`, `all`). \[[1](https://dev.to/garybyrne/introduction-to-aria-live-regions-2m0g), [2](https://www.mass.gov/info-details/coding-web-applications-using-advanced-aria-techniques), [3](https://www.uxpin.com/studio/blog/aria-live-regions-for-dynamic-content/), [4](https://dev.to/garybyrne/introduction-to-aria-live-regions-2m0g), [5](https://www.nordburg.ca/tutorials/aria/)]

***

### 4. Specialist and Assistive Device Attributes

These niche attributes configure alternative hardware outputs or structural identity flags. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)]

- `aria-braillelabel`: Provides a dedicated label string optimized exclusively for Braille text displays.
- `aria-brailleroledescription`: Overrides default control component type announcements specifically on Braille displays.
- `aria-keyshortcuts`: Informs screen reader users of specific hotkeys associated with a control element.
- `aria-roledescription`: Modifies standard component category names announced to a user.
- `aria-dropeffect` _(Deprecated)_: Historically tracked drag target actions (`copy`, `move`, `link`, `execute`).
- `aria-grabbed` _(Deprecated)_: Historically flagged active drag item selection status (`true`, `false`). \[[1](https://a11y-guidelines.orange.com/en/articles/aria-1-3-new-accessibility-features/), [2](https://www.craigabbott.co.uk/blog/2024/a-look-at-the-new-wai-aria-1-3-draft/), [3](https://learn.microsoft.com/en-us/javascript/api/@azure/communication-react/controlbarbuttonprops?view=azure-node-latest), [4](https://a11y-guidelines.orange.com/en/articles/aria-1-3-new-accessibility-features/), [5](https://rocketvalidator.com/accessibility-validation/axe/4.11)]

Would you like a functional code example demonstrating how to combine specific relationship attributes like **`aria-controls`** and **`aria-expanded`** to make a fully accessible custom component?

- [link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes)\
  ARIA states and properties (attributes) - MDN Web Docs\
  Many of the above attributes are global, meaning they can be included on any element unless specifically disallowed: \* aria-atomic...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)\
  ARIA - Accessibility - MDN Web Docs - Mozilla\
  Help improve MDN \* Accessibility. \* Guides. \* Information for web authors. \* Personalization to help browse safely. \* Accessible w...\
  MDN Web Docs
- [link](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Techniques)\
  Using ARIA: Roles, states, and properties - MDN Web Docs\
  Relationship attributes \* aria-activedescendant. \* aria-colcount. \* aria-colindex. \* aria-colspan. \* aria-controls. \* aria-describ...\
  MDN Web Docs

Show all

## You said: all possible roles

The complete list of standard **ARIA roles** defines what an element is or does. Under the W3C ARIA Specification and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA), roles are divided into six primary categories based on their structural or interactive purposes. \[[1](https://www.levelaccess.com/blog/aria-roles-explained-a-practical-guide-for-web-developers/), [2](https://digitalaccessibility.uchicago.edu/training/training-into-to-aria/)]

***

### 1. Widget Roles

These roles represent standalone interactive user interface components. They require explicit JavaScript keyboard interaction management. \[[1](https://www.digitala11y.com/widget-role/), [2](https://deliciousbrains.com/using-aria-roles-for-accessibility-in-wordpress/), [3](https://blog.pope.tech/2026/02/10/does-your-navigation-need-an-aria-menu-probably-not/)]

- `button`: An interactive element that triggers an action when pressed.
- `checkbox`: A dual-state checkable element.
- `gridcell`: A single cell within a grid structure.
- `link`: A hyperlink that navigates to a new resource or section.
- `menuitem`: A choice option inside a menu.
- `menuitemcheckbox`: A checkable choice option inside a menu.
- `menuitemradio`: A mutually exclusive choice option inside a menu.
- `option`: A selectable item inside a listbox.
- `progressbar`: An element displaying loading or task completion progress.
- `radio`: A single mutually exclusive choice option in a group.
- `scrollbar`: A control that scrolls a viewable content pane.
- `searchbox`: A single-line text field optimized for search entries.
- `separator` _(when focusable)_: A divider that can be adjusted or navigated.
- `slider`: A control representing a range of values where a user selects a single metric.
- `spinbutton`: A form input type allowing users to choose from a range of discrete values.
- `switch`: A checkbox variation representing an on/off toggle.
- `tab`: A focusable selector element that toggles its corresponding tabpanel.
- `tabpanel`: The container wrapping content tied to a specific tab.
- `textbox`: A field allowing raw alphanumeric text input.
- `treeitem`: An item node within a hierarchical tree structure. \[[1](https://birdeatsbug.com/blog/aria-roles), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/button%5Frole), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox%5Frole), [4](https://www.a11y-collective.com/blog/aria-selected/), [5](https://frontendlead.com/system-design/aria-roles-attributes-web-accessibility-guide)]

***

### 2. Composite Widget Roles

These roles serve as container elements that manage collections of interactive child widgets. \[[1](https://dequeuniversity.com/rules/axe/4.3/aria-required-attr?application=webdriverjs\&lang=fr), [2](https://www.codemag.com/Article/2411051/First-Rule-of-ARIA-Don%E2%80%99t-Use-ARIA)]

- `combobox`: An input widget that controls another element, like a listbox, to filter options.
- `grid`: A tabular structure containing rows of interactive focusable cells.
- `listbox`: A container widget grouping selectable options.
- `menu`: A container panel hosting a list of choice options.
- `menubar`: A persistent horizontal configuration or strip of menu containers.
- `radiogroup`: A container grouping collection clusters of radio buttons.
- `tablist`: A structural container grouping tab selectors together.
- `tree`: A multi-level nested structure of selectable nodes.
- `treegrid`: An interactive grid layout whose structural rows can expand and collapse hierarchically. \[[1](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/combobox%5Frole), [2](https://quorumlanguage.com/tutorials/accessibility/introductiontoARIA.html), [3](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/grid%5Frole), [4](https://whatsock.com/training/matrices/), [5](https://www.w3.org/WAI/ARIA/apg/patterns/)]

***

### 3. Document Structure Roles

These roles provide structural scaffolding to organize document layout content. They are generally non-interactive. \[[1](https://birdeatsbug.com/blog/aria-roles), [2](https://www.a11yproject.com/posts/getting-started-aria/), [3](https://dev.to/kayla/document-structure-roles-table-roles-introduction-to-wai-aria-part-3-2ca1)]

- `application`: Declares a web region as a complex desktop-like web application.
- `article`: A self-contained composition forming an independent piece of content.
- `blockquote`: A section containing a significant quote from another source.
- `caption`: Text content that labels or describes a table, figure, or grid.
- `cell`: A generic data cell inside a structural table row.
- `code`: A section representing a fragment of computer code.
- `columnheader`: A specific header cell defining a data column.
- `definition`: A definition statement explaining a corresponding term.
- `deletion`: Content marked as removed or deleted during editing.
- `directory` _(Deprecated)_: Historically defined a list of references or members.
- `document`: A structural zone containing cohesive web content screen readers can read.
- `emphasis`: Text highlighted with structural stress or importance.
- `figure`: An isolated illustration, diagram, photo, or code snippet block.
- `generic`: A structural element with no semantic meaning (like a default ).
- `group`: A collection of related elements that does not form a distinct page landmark.
- `heading`: A section heading corresponding to structural levels 1 through 6.
- `img`: A container wrapping one or more elements to be treated as a single image.
- `insertion`: Content marked as added or inserted during editing.
- `list`: A non-interactive group of standard item nodes.
- `listitem`: A single structural child node residing inside a list.
- `math`: A block displaying complex mathematical expressions or formulas.
- `meter`: An element representing a scalar measurement within a known range.
- `none`: Strips all native semantic mapping properties entirely from an element (alias of `presentation`).
- `note`: Supplementary or parenthetical commentary details.
- `paragraph`: A structural paragraph text block.
- `presentation`: Strips native accessibility tree semantics from an element.
- `row`: A horizontal row structure mapping a collection of cells.
- `rowgroup`: Groups collections of structural rows (e.g., , ).
- `rowheader`: A header cell defining an entire row structure.
- `separator` _(when non-focusable)_: A visual horizontal or vertical dividing line.
- `strong`: Text representing strong structural importance or urgency.
- `subscript`: Text formatted lower and smaller than standard body copy.
- `superscript`: Text formatted higher and smaller than standard body copy.
- `table`: A non-interactive tabular structure displaying data columns and rows.
- `term`: A word or phrase associated with a definition block.
- `time`: A block identifying a specific date, time, or duration string. \[[1](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/), [2](https://www.digitala11y.com/article-role/), [3](https://www.digitala11y.com/wai-aria-roleblockquote/), [4](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/structural%5Froles), [5](https://whatsock.com/training/matrices/)]

***

### 4. Landmark Roles

Landmarks provide global navigation structures. Screen readers use these to instantly hop around core layouts of a web page. \[[1](https://accessibility.asu.edu/articles/aria), [2](https://birdeatsbug.com/blog/aria-roles)]

- `banner`: The global site header containing branding and global navigation elements.
- `complementary`: Supporting sidebar blocks layout items that remain distinct from main body copy.
- `contentinfo`: The global site footer containing copyrights, privacy policies, and contact links.
- `form`: A regional collection of form controls that creates a landmark zone.
- `main`: The central dominant content block containing the primary topic of the document.
- `navigation`: A block wrapping navigational links used to navigate the site or page.
- `region`: A generic landmark layout block that contains important user content.
- `search`: A landmark region dedicated to wrapping search form controls. \[[1](https://www.a11y-collective.com/blog/aria-landmark-roles/), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/banner%5Frole), [3](https://www.scottohara.me/blog/2018/03/03/landmarks.html), [4](https://www.a11y-collective.com/blog/aria-landmark-roles/), [5](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/complementary%5Frole)]

***

### 5. Live Region Roles

These roles instruct screen readers to automatically monitor elements for dynamic DOM updates and announce changes in real time. \[[1](https://www.levelaccess.com/blog/aria-roles-explained-a-practical-guide-for-web-developers/), [2](https://developer.mozilla.org/en-US/docs/Learn%5Fweb%5Fdevelopment/Core/Accessibility/WAI-ARIA%5Fbasics), [3](https://uxpatterns.dev/glossary/l/live-regions)]

- `alert`: A dynamic notification block containing critical, urgent information.
- `log`: A sequential log region where new message additions stack at the bottom.
- `marquee`: A region displaying scrolling or moving presentations (e.g., a stock ticker).
- `status`: A dynamic notice panel container housing non-critical update text strings.
- `timer`: A visual ticking container element tracking active elapsed time metrics. \[[1](https://birdeatsbug.com/blog/aria-roles), [2](https://accesstive.com/blog/aria-best-practices-and-examples/), [3](https://www.linkedin.com/pulse/understanding-aria-live-regions-assertive-polite-mohd-irfan-cpacc-gghkc), [4](https://accessibility.ecampusontario.ca/wp-content/uploads/2024/03/ARIA-Guidelines-20240318.pdf), [5](https://wpshout.com/wai-aria-roles/)]

***

### 6. Window Roles

These roles break outside normal document flows to build separate structural sub-windows or overlays on the viewport. \[[1](https://webaim.org/blog/aria-cause-solution/)]

- `dialog`: An application sub-window or dialog overlay panel.
- `alertdialog`: A highly critical modal confirmation dialog designed to interrupt workflows. \[[1](https://www.boia.org/blog/introduction-to-aria-for-web-accessibility), [2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/dialog%5Frole), [3](https://www.a11yproject.com/posts/an-indepth-guide-to-aria-roles/), [4](https://www.codemag.com/Article/2411051/First-Rule-of-ARIA-Don%E2%80%99t-Use-ARIA), [5](https://www.w3.org/TR/2018/NOTE-wai-aria-practices-1.1-20180726/)]

Which interactive pattern are you planning to construct? I can provide an accurate blueprint mapping out exactly **how to orchestrate** these roles with matching **ARIA attributes** and **keyboard focus** rules.

- [link](https://www.levelaccess.com/blog/aria-roles-explained-a-practical-guide-for-web-developers/)\
  ARIA Roles Explained: A Practical Guide for Web Developers\
  Apr 30, 2026 — ARIA roles define what an element is.\
  \
  \
  Level Access
- [link](https://digitalaccessibility.uchicago.edu/training/training-into-to-aria/)\
  Introduction to ARIA | Center for Digital Accessibility\
  So there are three main features of ARIA: roles, properties, and states. Roles define what an element is or does, and many of thes...\
  \
  The University of Chicago
- [link](https://www.digitala11y.com/widget-role/)\
  WAI-ARIA: Role=Widget • DigitalA11Y\
  Apr 23, 2024 — Widgets are discrete user interface objects with which the user can interact. Widget roles map to standard features in accessibili...\
  \
  \
  DigitalA11Y

Show all