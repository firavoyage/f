import mousetrap from 'mousetrap';

let shortcutid = 0
let actions = {}
let shortcuts = {}
let bindings = {}

function call(shortcut) {
  if (shortcuts[shortcut]) {
    for (const actionid of shortcuts[shortcut]) {
      if (actions[actionid]) {
        actions[actionid]()
      }
    }
  }
}

export function bind(shortcut, action) {
  actions[shortcutid] = action
  shortcuts[shortcut] = shortcuts[shortcut] || new Set()
  shortcuts[shortcut].add(shortcutid)
  bindings[shortcutid] = { shortcut }

  mousetrap.bind(shortcut, () => call(shortcut))

  return shortcutid++
}

export function unbind(shortcutid) {
  shortcuts[shortcutid]
}
