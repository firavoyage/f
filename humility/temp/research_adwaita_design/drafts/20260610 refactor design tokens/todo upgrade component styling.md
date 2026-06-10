drafts/20260610 refactor design tokens/todo upgrade component styling

complete all tasks below in one go

do not read or write any files/folders not explicitly listed. do not overwork or overengineer.

all file/folders paths start from cwd. never put meaningful code inside drafts folder.

make sure your work satisfies the constraints or specs.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

read

- adwaita.yaml
- adwaita.css (outdated)
- adwaita_latest.css (latest converted from yaml)
- knowledge/design tokens
- knowledge/web styling
- docs/*
- drafts/20260609 research libadwaita design tokens/report
- ref/libadwaita (if needed, as cited by the report)

revise

- adwaita.yaml
- components/[component].css
- components/[component].tsx (if really needed)

c

adwaita.yaml contains some comp named tokens on sys

you do not need bg-window or bg-view. you need bg-primary bg secondary

too bloating

e

simplify to some good sys layer tokens

reference directly in component.css

c

adwaita css and adwaita latest css

e

only adwaita css, which is the latest, the old one removed and not imported

c

adwaita.yaml might not be comprehensive enough

e

expand with observations from the report

c

many components are not good enough. they do not use design tokens.

for example, not all interactive components have a consistent focus ring when tabbed by keyboard

e

be consistend. have all needed styles.

test

- run with tmux and parceljs (as global shell commands)
- open playwright