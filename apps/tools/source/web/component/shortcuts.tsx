import { use_bind } from 'web/lib/keyboard.use'

import type { shortcut } from 'web/component/app'

type shortcuts = {
  shortcuts: shortcut[]
  call: Function
}

export function Shortcuts(props: shortcuts) {
  const { shortcuts, call } = props

  map(shortcuts, (shortcut) => {
    const { key, command } = shortcut
    use_bind(key, () => call(command))
  })

  return (
    <div className="shortcuts"></div>
  )
}

