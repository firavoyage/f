import { bind, unbind } from 'web/lib/keyboard';
import { useEffect } from 'react';

export function use_bind(shortcut: string, action: (event: KeyboardEvent) => void, { prevent_default } = { prevent_default: true }) {
  useEffect(() => {
    const shortcutid = prevent_default ? bind(shortcut, (e) => {
      log(1)
      e.preventDefault()
      action(e)
    }) : bind(shortcut, action)

    return () => unbind(shortcutid)
  })
}
