drafts/20260610 refactor design tokens/todo oklch

complete all tasks below in one go

do not read or write any files/folders not explicitly listed. do not overwork or overengineer.

all file/folders paths start from cwd. never put meaningful code inside drafts folder.

make sure your work satisfies the constraints or specs.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

read

- adwaita.yaml
- knowledge/design tokens
- knowledge/web styling

revise

- adwaita.yaml

c

there are some hardcoded raw value tokens on sys layer, esp dark mode gray

they all have hue 286 on oklch

e

name them like `gray: ...` on ref

have a scale. zero chroma. sequential lightness.

all sys reference ref
