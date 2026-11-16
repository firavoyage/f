web vimlike navigation

---

```ts
const jk_scroll_distance = 60
const du_scroll_percentage = 0.5
const space_scroll_percentage = 0.9
// const space_scroll_percentage = 0.9
const scroll_behavior: 'smooth' | 'instant' = 'instant'
const scroll_shortcuts = {
  'ctrl+j': jk_scroll_distance,
  'ctrl+k': -jk_scroll_distance,
  'ctrl+d': du_scroll_percentage,
  'ctrl+u': -du_scroll_percentage,
  space: space_scroll_percentage,
  'shift+space': -space_scroll_percentage,
}
const field_tags = ['input', 'textarea']

app(){

  map(scroll_shortcuts, ([shortcut, distance]) => {
    use_keyboard(
      shortcut,
      () => {
        scroll_by(distance)
      },
      {
        when: () =>
          !(
            shortcut == 'space' &&
            has(field_tags, document.activeElement?.tagName.toLowerCase()) &&
            prompt
          ),
      },
    )
  })


  function scroll_by(distance: number) {
    if (!content.current) {
      return
    }

    let element = content.current

    if (abs(distance) <= 1) {
      distance = element.clientHeight * distance
    }

    element.scrollBy({
      top: distance,
      behavior: scroll_behavior,
    })
  }
}
```

typically vimium would handle it.

clearly you can have i/esc rather than mod key.
