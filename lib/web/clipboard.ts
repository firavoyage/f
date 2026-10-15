let _on_copy: fn

export function init_clipboard(on_copy) {
  _on_copy = on_copy
}

async function copy_text(text: string) {
  await navigator.clipboard.writeText(text);
}

export function copy(text: string) {
  copy_text(text)

  _on_copy?.()
}

