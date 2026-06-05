read

- spec create atom components
- knowledge web styling
- knowledge design tokens

create components folder. it's a flat folder. all work will be done there.

write a readme

```md
# atoms

- `Button` triggers an action when clicked
- ...
```

for each component, write a tsx and a css. filename is component name. use pascal case. use baseui. read docs on ref/baseui_docs. 

be simple. just copy the official example if possible. avoid any custom, possibly prone, code. it's more about theming.

the spec is not proven. trust the baseui docs over spec. if something could not be done easily, avoid that. simplicity is always the defacto standard.

reference design tokens on adwaita on parent folder. never hardcode. if some tokens are missing, write `adwaita_extended.css`. 

write index.html, index.tsx, App.css, and App.tsx inside components folder. import normalizecss from the parent folder. be simple. just show a clean storybook.

use tmux to serve. use parcel as a global shell command. do not use `pnpm exec parcel` even if it's best prac. 

test on playwright. make sure no error on index.html.
