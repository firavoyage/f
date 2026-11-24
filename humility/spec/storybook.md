# Storybook

## Goal

Provide a local page for quickly prototyping and visually reviewing reusable web components with their normal styling and interactive states. The initial page is a simple list of eight atom components with working sample interactions and no component browser controls.

## User flow

1. A developer opens `web/storybook/index.html` through the existing Vite development server.
2. The page renders each component in the explicit list below, without a sidebar, picker, or other navigation controls.
3. Each sample displays the component name and enough props/state to demonstrate its ordinary appearance and interaction.
4. Controlled components receive state and a setter from `app()`. User changes update that state and are reflected in the rendered component.
5. Component styles come from `web/design/utilitarian.css`; Storybook-specific CSS arranges samples and supplies only simple defaults for components without existing styles.

## Page and files

Add:

- `web/storybook/index.html`: HTML entry with a root element and module script for `./index.ts`.
- `web/storybook/index.ts`: imports the project's CSS resets and global web prelude, `web/design/utilitarian.css`, and `./storybook.css`; mounts `h(app)` into the root using React's `createRoot`, following `web/index.ts`.
- `web/storybook/app.ts`: exports `app()`. Owns each sample's state and passes a record of named rendered elements to `storybook({ components })` using `h(component, props, ...children)`.
- `web/storybook/storybook.ts`: exports `storybook({ components })`, where `components` is a record from display name to rendered element. Returns a `main.storybook` containing a `div.storybook_components`; for each entry in insertion order, render an `section.storybook_component` with an `h2.storybook_component_name` and a `div.storybook_component_sample` containing the supplied element.
- `web/storybook/storybook.css`: styles the Storybook page, list, labels, and basic atom presentation where no component styling exists. It does not redesign existing component styles.

Do not modify `web/vite.config.ts`. The Storybook source and HTML live under `web/storybook`, and Vite is expected to serve the HTML entry like the existing app entry.

## Initial component set

Implement these eight standalone atom components under `web/component/` and include all eight in the Storybook list:

1. `button.ts` — `button({ children, ...props })`: clickable action using a native button element; accepts native button props and children. Existing component; retain its current `button.button` styling hook.
2. `input.ts` — `input({ value, set_value, ...props })`: controlled single-line text field; forwards remaining input props and calls `set_value` with the changed string. Existing component.
3. `textarea.ts` — `textarea({ value, set_value, ...props })`: controlled multiline text field; forwards remaining textarea props and calls `set_value` with the changed string. Existing component.
4. `checkbox.ts` — `checkbox({ checked, set_checked, ...props })`: controlled boolean checkbox; forwards native checkbox props and reports checked state changes.
5. `switch.ts` — `switch({ checked, set_checked, ...props })`: controlled boolean toggle switch; forwards relevant button props and reports toggled state.
6. `select.ts` — `select({ value, set_value, options, ...props })`: controlled native select; options are `{ value, label }[]`, and changes report the selected value.
7. `radio_group.ts` — `radio_group({ value, set_value, options, ...props })`: controlled single-choice group; options are `{ value, label }[]`, and changes report the selected value.
8. `slider.ts` — `slider({ value, set_value, min?, max?, step?, ...props })`: controlled range input; defaults are `min: 0`, `max: 100`, and `step: 1`; changes report a number.
Use native HTML elements for interactive atoms. Props should pass through to the underlying element except for component-specific props consumed by the component. Use controlled `value`/`checked` plus setter pairs for mutable selection and entry components. The existing `button`, `input`, and `textarea` modules may be updated to meet these signatures while preserving current behavior.

Do not include app-level compositions such as `sidebar`, `conversation`, or modal components.

## Samples and data flow

`app()` owns and initializes sample state as follows:

- `input` and `textarea`: empty string values.
- `checkbox` and `switch`: `false`.
- `select`: first option selected; options `One`, `Two`, and `Three` with corresponding lowercase values.
- `radio_group`: first option selected; options `One`, `Two`, and `Three` with corresponding lowercase values.
- `slider`: value `50`, defaults for min/max/step.
- `button`: label `Button`; no extra behavior required.
Each controlled sample receives its current state and setter. `storybook({ components })` receives already-created React elements, not component functions, so React renders component functions and their hooks normally. It renders entries in record insertion order. The Storybook wrapper does not provide additional controls beyond the component samples themselves.

## Returned markup anatomy

`storybook({ components })` returns this class structure:

```text
main.storybook
└── div.storybook_components
    └── section.storybook_component (one per component)
        ├── h2.storybook_component_name
        └── div.storybook_component_sample
            └── supplied component element
```

The component name heading contains the record key as visible text. The sample wrapper contains the supplied element without additional labels or controls. These class names are the Storybook layout hooks; individual atom classes belong to their component implementations.

## Styling

The Storybook entry imports `web/design/utilitarian.css`, as the main app does. The page uses existing surface, text, typography, spacing, and radius variables. Use a single-column list, page padding `var(--spacing-4)`, consistent list gap `var(--spacing-3)`, and sample section padding `var(--spacing-3)`. Keep the layout fluid at narrow widths; do not add a fixed-width canvas or device frame.

Existing `.button`, `.input`, and `.textarea` styles should be reused. Add minimal styles for the new atoms in `web/design/utilitarian.css` or `web/storybook/storybook.css` as appropriate, using the existing variables; avoid polished or elaborate variants. The switch should visually distinguish checked and unchecked states; checkbox, select, radio group, and slider should remain recognizable native controls.

Do not add keyboard-navigation abstractions, custom keyboard bindings, or an external component library as part of this feature.

## Not in initial scope

No sidebar, search, filtering, prop-editing controls, separate routes per component, code display, app-level compositions, or generalized keyboard-navigation abstraction.