import { bind, unbind } from 'web/lib/keyboard';
import { useEffect } from 'react';

type use_bind = Partial<{
  prevent_default: true
  stop_propagation: true
  global: true
}>

/**
 * bind an action to a shortcut
 * 
 * multiple actions can bind to the same shortcut simultaneously
 * 
 * global: fire the shortcut even inside an input/textarea/select
 * 
 * all flags default to on
 */
export function use_bind(shortcut: string, action: (event: KeyboardEvent) => void, options: use_bind = {}) {
  const { prevent_default = true, stop_propagation = true, global = true } = options

  useEffect(() => {
    const shortcutid = bind(shortcut, (e) => {
      prevent_default && e.preventDefault?.()
      stop_propagation && e.stopPropagation?.()

      action(e)
    }, global)

    return () => unbind(shortcutid)
  })
}
