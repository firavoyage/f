# 0.1

atom components list

- button
- checkbox
- context menu
- select
- input
- number field
- progress
- scroll area
- slider
- switch
- toast
- toggle
- tooltip

variants

sizes

states

atoms patterns pages

# 0.2

in a design system, you should define design tokens and components.

think a component library as atoms, patterns, and pages.

atoms will be reused on virtually all apps.

patterns like sidebar and context menu might be reused. no need to abstract atoms out of a pattern, sidebar list item for example, which mainly serves for a specific pattern, the sidebar.

pages are not supposed to be reused, even if they can look similar.

atom components include

- button
- checkbox
- select
- input
- number field
- scroll area
- slider
- switch
- tooltip

it's a non exclusive list.

a component can have props like variants, sizes, and states.

for example, a button can have variants like primary, secondary, flat, and destructive, shapes like rounded and pill, sizes like small, medium, and large, and states like default, disabled, hover, focused, and pressed, with text or icon as children.
