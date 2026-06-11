drafts/20260610 refactor design tokens/todo remove component tokens

complete all tasks below in one go

do not read or write any files/folders not explicitly listed. do not overwork or overengineer.

all file/folders paths start from cwd. never put meaningful code inside drafts folder.

make sure your work satisfies the constraints or specs.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

read

- adwaita.yaml
- docs/convert.md
- knowledge/design tokens
- knowledge/web styling

revise

- adwaita.yaml
- components/[component].css

c

on sys layer, remove tokens like sys-color-bg-window, sys-color-bg-sidebar

they are repetitive and bad practice

remove sys tokens with raw values. they dont have to be special.

name like bg primary, bg secondary instead

e

no "dialog" "button" etc. seen on sys layer, whether bg fg border whatever

test

no testing. it will work.
