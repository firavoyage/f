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

type action = (event: KeyboardEvent) => void

let shortcutid = 0
const actions: Map<number, action> = new Map()
const bindings: Record<number, string> = {}
const shortcuts: Record<string, Set<number>> = {}

function call(shortcut: string, event: KeyboardEvent) {
  if (shortcuts[shortcut]) {
    for (const shortcutid of shortcuts[shortcut]) {
      const action = actions.get(shortcutid)
      if (action) {
        action(event)
      }
    }
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

  actions.set(shortcutid, action)
  shortcuts[shortcut] = shortcuts[shortcut] || new Set()
  shortcuts[shortcut].add(shortcutid)
  bindings[shortcutid] = shortcut

  // it will work whether it overrides or not
  mousetrap.bind(shortcut, (event) => {
    call(shortcut, event)
  })

  return shortcutid++
}

export function unbind(shortcutid: number) {
  const shortcut = bindings[shortcutid]

  shortcuts[shortcut].delete(shortcutid)
  actions.delete(shortcutid)

  if (shortcuts[shortcut].size == 0) {
    // @ts-expect-error
    mousetrap.unbind(shortcut)
  }
}
