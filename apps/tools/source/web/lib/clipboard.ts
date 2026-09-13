import { toast, use_global } from "web/component/app"

async function copy_text(text: string) {
  await navigator.clipboard.writeText(text);
}

export function copy(text: string) {
  copy_text(text)

  // use_global.set(() => {})
  toast('Copied to clipboard')
}

