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
- 
