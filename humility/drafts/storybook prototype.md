storybook

# intent

have some ready to use components so you can prototype easier and reach sth similar w final look.

# details

new files

```
web/storybook/storybook.css
web/storybook/storybook.ts # storybook({components: record component name -> fn})
web/storybook/index.ts
web/storybook/index.html
web/storybook/app.ts # import ..., app = states, storybook {components: {button: h(button, {some state})}}
web/component/(component).ts
```

define styles for these on utilitarian.css.

learn the structure of index and app from the main app.

storybook should show components wo much styling. take utilitarian.css on app.ts.

just list all components wo sidebar or controls for now.

define a list of components.

components should generally be controlled, like taking `value, set_value` from props.

---

you want keyboard navigation. though better to not abstract or hardcode specific keys. sometimes advanced keyboard navigation like vimium is needed. you may expose somehow, like scrolling if relevant.

you may use floating ui.

no aria or compliance.

---

on implementation, you may look into `@base-ui/react` `radix-ui` `@mantine/core @mantine/hooks` on node modules to learn from.

do not reference them when writing the spec.
