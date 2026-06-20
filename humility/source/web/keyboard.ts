import mousetrap from 'mousetrap';

let shortcutid = 0
let actions = new Map()
let shortcuts = {}
let bindings = {}

function call(shortcut, event) {
  if (shortcuts[shortcut]) {
    for (const shortcutid of shortcuts[shortcut]) {
      const action = actions.get(shortcutid)
      if (action) {
        action(event)
      } 
    }
  }
}

export function bind(shortcut, action) {
  actions.set(shortcutid, action)
  shortcuts[shortcut] = shortcuts[shortcut] || new Set()
  shortcuts[shortcut].add(shortcutid)
  bindings[shortcutid] = { shortcut }

  // it will work whether it overrides or not
  mousetrap.bind(shortcut, (event) => {
    call(shortcut, event)
  })

  return shortcutid++
}

export function unbind(shortcutid) {
  const shortcut = bindings[shortcutid]
  shortcuts[shortcut].delete(shortcutid)
  actions.delete(shortcutid)

  if (shortcuts[shortcut].size == 0) {
    mousetrap.unbind(shortcut)
  } 
}

/**
 * todo
 * 
 * - err invalid shortcut
 * - normalize ctrl ?
 */
