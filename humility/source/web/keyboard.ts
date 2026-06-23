import mousetrap from 'mousetrap';

const shift_keys = {
  "!": "shift+1",
  "@": "shift+2",
  "#": "shift+3",
  "$": "shift+4",
  "%": "shift+5",
  "^": "shift+6",
  "&": "shift+7",
  "*": "shift+8",
  "(": "shift+9",
  ")": "shift+0",
  "_": "shift+-",
  // "+": "shift+=", // could not work, use shift+= instead
  "~": "shift+`",
  ":": "shift+;",
  "\"": "shift+'",
  "<": "shift+,",
  ">": "shift+.",
  "?": "shift+/",
  "{": "shift+[",
  "}": "shift+]",
  "|": "shift+\\"
}

type shortcutid = number
type action = (event: KeyboardEvent) => void

let shortcutid: shortcutid = 0
const bindings: Map<shortcutid, { shortcut: string, action: action }> = new Map()
const shortcuts: Map<string, Set<shortcutid>> = new Map()

function call(shortcut: string, event: KeyboardEvent) {
  for (const shortcutid of shortcuts.get(shortcut) ?? []) {
    bindings.get(shortcutid)?.action(event)
  }
}

function normalize(shortcut: string) {
  let normalized_shortcut = shortcut
  for (const [key, shift_key] of Object.entries(shift_keys)) {
    normalized_shortcut = normalized_shortcut.replaceAll(key, shift_key)
  }
  return normalized_shortcut
}

export function bind(shortcut: string, action: action): number {
  shortcut = normalize(shortcut)

  if (!shortcuts.has(shortcut)) {
    shortcuts.set(shortcut, new Set())
  }
  shortcuts.get(shortcut)?.add(shortcutid)
  bindings.set(shortcutid, { shortcut, action })

  // it will work whether it overrides or not
  mousetrap.bind(shortcut, (event: KeyboardEvent) => {
    call(shortcut, event)
  })

  return shortcutid++
}

export function unbind(shortcutid: number) {
  const { shortcut } = bindings.get(shortcutid)!

  shortcuts.get(shortcut)?.delete(shortcutid)
  bindings.delete(shortcutid)

  if (shortcuts.get(shortcut)?.size == 0) {
    // @ts-expect-error
    mousetrap.unbind(shortcut)
  }
}
