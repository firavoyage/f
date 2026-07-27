import { bind, unbind } from 'web/lib/keyboard';
import { useEffect } from 'react';

/**
 * bind an action to a shortcut
 * 
 * multiple actions can bind to the same shortcut simultaneously
 * 
 * global: fire the shortcut even inside an input/textarea/select
 * 
 * all flags are on by default
 */
export function use_bind(shortcut: string, action: (event: KeyboardEvent) => void, options = { prevent_default: true, stop_propagation: true, global: true }) {
  const { prevent_default, stop_propagation, global } = options

  useEffect(() => {
    const shortcutid = bind(shortcut, (e) => {
      prevent_default && e.preventDefault?.()
      stop_propagation && e.stopPropagation?.()

      action(e)
    }, global)

    return () => unbind(shortcutid)
  })
}
