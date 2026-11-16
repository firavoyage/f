web focus on input

```ts
app(){
  // focus on input
  for (const char of each(1, 26)) {
    const letter = String.fromCodePoint('a'.charCodeAt(0) + char - 1)

    use_keyboard(
      letter,
      () => {
        if (!field.current) {
          return
        }

        set_prompt(prompt + letter)
        field.current.focus()
      },
      {
        when: () => !is_focused(),
      },
    )
  }
  for (const char of each(0, 9)) {
    const key = str(char)
    use_keyboard(
      key,
      () => {
        if (!field.current) {
          return
        }

        set_prompt(prompt + key)
        field.current.focus()
      },
      {
        when: () => !is_focused(),
      },
    )
  }
}
```

you may handle cjk im. and captitalized first msg maybe.

