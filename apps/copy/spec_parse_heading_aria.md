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

input

```
<html><head></head><body><div role="heading" style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 20px; font-weight: 600; margin: 24px 0px 12px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Rendered Output Example</div><div style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"></div><div role="heading" style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 20px; font-weight: 600; margin: 24px 0px 12px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Heading 1</div><div style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"></div><div role="heading" style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 20px; font-weight: 600; margin: 24px 0px 12px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Heading 2</div><div style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 14px; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);"></div><div role="heading" style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 20px; font-weight: 600; margin: 24px 0px 12px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">Heading 3</div><div style="font-family: &quot;Google Sans&quot;, Roboto, Arial, sans-serif; font-size: 16px; margin: 12px 0px 16px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">This is a regular paragraph of text. You can easily apply emphasis like <span style="font-weight: 600; margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">bold text</span> or <em style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">italic text</em>. If a mistake is made, you can use <s style="margin: 0px; text-decoration-style: solid; text-decoration-color: rgb(230, 232, 240); border-bottom: 0px none rgb(230, 232, 240);">strikethrough</s></div></body></html>
```

current output

```md
Rendered Output Example

Heading 1

Heading 2

Heading 3

This is a regular paragraph of text. You can easily apply emphasis like **bold text** or _italic text_. If a mistake is made, you can use ~~strikethrough~~
```

expected output

```md
### Rendered Output Example

### Heading 1

### Heading 2

### Heading 3

This is a regular paragraph of text. You can easily apply emphasis like **bold text** or _italic text_. If a mistake is made, you can use ~~strikethrough~~
```


