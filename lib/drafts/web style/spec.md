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
- iterate all (as) design tokens, dereference (e.g. color-primary: dark -> palette-gray-..., light -> ...)
  - split the string value by space and a few css standard separators, like slash
  - for each part, check whether it's a reference to any known design token, if so replace and increase rc
  - concat back
- iterate all (as) components, after filtering all keys of object of literals, like `comp: element: util classes string`
  - 


