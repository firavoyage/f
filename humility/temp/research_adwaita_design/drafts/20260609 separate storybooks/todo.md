drafts/20260609 separate storybooks/todo.md

complete all tasks in one go no stop. make sure your work satisfies the constraints.

only complete tasks below. do not read or write any files/folders not explicitly listed. do not overwork or overengineer.

all file/folders start from cwd. never put meaningful code inside drafts folder.

<!-- p: previous, c: current, e: expected, i: example input, o: example output -->

read

- components/

revise

- (the storybook)

app.tsx is the storybook.

abstract `Component`, which is a component name and a demo

parse the url query

if: `app?component=Button` (there is component param and it's a valid component), only show that component

otherwise, show all components one by one

declare 

```
components {
  Button: () => demo jsx,
  MyComponent: () => ...
}
```

write

- docs/storybook.md
