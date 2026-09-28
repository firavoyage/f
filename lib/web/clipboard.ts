let oncopy = () => {}

export function init_clipboard(options) {
  ({oncopy} = options)
}

async function copy_text(text: string) {
  await navigator.clipboard.writeText(text);
}

export function copy(text: string) {
  copy_text(text)

  // use_global.set(() => {})

  oncopy?.()
}

