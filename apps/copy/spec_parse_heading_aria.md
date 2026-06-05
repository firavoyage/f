for elements with role heading and aria-level, parse and consider it markdown heading.

input

```html
<div aria-level="3" role="heading">foo</div> 
```

current output

```md
foo
```

expected output

```md
### foo
```

input

```html
<div aria-level="6" role="heading">foo</div> 
```

expected output

```md
###### foo
```

