let toast_: fn

export function init_clipboard({toast}) {
  toast_ = toast
}

async function copy_text(text: string) {
  await navigator.clipboard.writeText(text);
}

export function copy(text: string) {
  copy_text(text)

  // use_global.set(() => {})
  toast_('Copied to clipboard')
}

