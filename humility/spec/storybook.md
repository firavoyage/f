# Storybook

## Goal

Provide a local page for quickly prototyping and visually reviewing the app's reusable web components with their normal styling and interactive states. Done means the page can be started through the existing Vite setup, renders the selected components in one simple list, and lets a developer exercise controlled components.

## User flow

1. A developer opens the Storybook page using the project's Vite development server.
2. The page renders each component in the explicitly defined component list, without a sidebar, component picker, or other navigation controls.
3. Each component is shown with enough sample props and state to make its appearance and normal interaction visible. For controlled components, interacting with the component updates the state supplied to it, and the updated value is rendered back into the component.
4. Component styles come from the existing `web/design/utilitarian.css`; Storybook-specific CSS only arranges the samples and should not redesign the components.

## Page and files

Add:

- `web/storybook/index.html`: Vite HTML entry with a root element and module script for `./index.ts`.
- `web/storybook/index.ts`: imports the existing CSS resets, global web prelude, and `./storybook.css`; mounts `h(app)` into the root using React's `createRoot`, following `web/index.ts`.
- `web/storybook/app.ts`: defines and exports `app()`. It owns sample state and calls `storybook({ components })` with a record of named component elements created with `h(component, props, ...children)`.
- `web/storybook/storybook.ts`: defines and exports `storybook({ components })`, where `components` is a record from display name to rendered element. It renders the entries as a plain list, with each name and its component sample.
- `web/storybook/storybook.css`: styles only the Storybook page/list layout and imports no component-specific redesign.

Add a Vite entry configuration for the Storybook HTML page in `web/vite.config.ts` so the page is served and built alongside the main app, without changing the main app's entry behavior.

## Initial component list

Use the existing reusable components that can be rendered as standalone samples:

- `button` from `web/component/button.ts`
- `input` from `web/component/input.ts`
- `textarea` from `web/component/textarea.ts`

Do not include app-level compositions such as `sidebar`, `conversation`, or modal components in this initial list.

## Sample behavior and data flow

`app()` owns a string value for the input and a separate string value for the textarea, initialized to `''`. It passes each value and its corresponding state setter as props to the controlled component. The button sample has a concise visible label and no additional behavior requirement.

`storybook({ components })` receives already-created React elements, not component functions, so React renders component functions and their hooks normally. It renders every record entry in insertion order. Each entry has its display name and sample content; there are no per-component controls other than the component's own props/interactions.

## Styling

The Storybook entry imports `web/design/utilitarian.css`, as the main app does. The Storybook page uses the existing surface, text, and typography variables for a consistent preview. Use a single-column list with a small, consistent gap between samples, page padding of `var(--spacing-4)`, and section padding of `var(--spacing-3)`. Keep the page usable at narrow viewport widths; do not add a fixed-width canvas or device frame.

Do not add keyboard navigation, accessibility-specific behavior, or an external component library as part of this feature.

## Not in initial scope

No sidebar, search, filtering, controls for changing component props, separate routes per component, code display, or generalized keyboard-navigation abstraction.