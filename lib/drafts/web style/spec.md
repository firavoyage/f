web/style

pipeline

- read design and components yaml
  - or a theme file, e.g. utilitarian.yaml
  - design and components are inherently coupled
  - i may see
    - keys of array values as modes
    - a specific hardcoded list of value types, such as color
    - it wont cause problems to generate redundant styles, e.g. palette
      - palette.gray -> --palette-gray and .palette_gray {...} (if i could parse it as utils, empty ones will be ignored)
      - first i will parse all design tokens, then components.
      - foo.bar p-4 -> --foo-bar and .foo_bar {padding: 1rem} (--foo-bar can be omitted wo references)
- filter all array values as modes
- parse all as design tokens
  - consider literal or an object of all literal values and keys representing subset of any mode as leaves
  - concat all path, escape special characters as hyphen
  - strip duplicate consecutive keys, e.g. `palette: gray: gray, 100, 200` -> `palette-gray` instead of `palette-gray-gray`
- iterate all (as) design tokens, dereference (e.g. color-primary: dark -> palette-gray-..., light -> ...)
  - split the string value by space ~~and a few css standard separators, like slash~~
    - space only. they are tokens, not css values now, yk.
  - for each part, check whether it's a reference to any known design token, if so replace and increase rc
  - concat back
- iterate all (as) components, after filtering all keys of object of literals, like `comp: element: util classes string`
  - for selector, make it `.comp_element` or `.comp` if element is named the same as comp
  - you may make `comp: element[state]` `.comp[state] .comp_element`
  - for style...
  - split the util classes. ideally by space, simply. you may handle `p-[arbitrary value]` or `[prop: value]` if you want
    - `[]` could not nest. you may match all starting and closing brackets, iterate chars and check whether it's a space and not inside a bracket, append to stops, and create parts of slices by stops.
  - for each util,
  - you may look up the glossary and find the matching prop and type
  - only append prop if it matches
  - e.g. `text-red`, you look up red in color (if existing), increase rc, and that's it
- produce the final css
  - for each design token, put it in the correct bracket (root or mode specific)
  - you may omit zero rc, if you can gurantee no false negatives
  - iterate and dump
  - for each component, iterate and sim
    - quite straightfwd

---

currently it might output variables that are referenced by variables that are not referenced.

e.g.

```
palette.gray: ...
color.primary: palette.gray
... # irrelevant
```

im not gonna fix it.

---

letter spacing (tracking) and line height (leading) names are not currently supported.

use numeric value instead.

---

there are some --tw utils which are effectively workarounds of css limitations

i might not use these.

---

clearly, yaml is the idiomatic way to style, and

you can easily write `foo:hover`, `foo[size=large]`.

however, currently you might not target the state of a parent, like the component itself

<!-- and it wont be fixed. -->

better to just pass down directly.

though, rarely do you nest components of the same, and i may consider hacking it, targeting the component directly if needed.


