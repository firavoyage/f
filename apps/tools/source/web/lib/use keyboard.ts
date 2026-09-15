import { bind, unbind } from 'web/lib/keyboard';
import { useEffect } from 'react';

type use_keyboard = Partial<{
  prevent_default: boolean
  stop_propagation: boolean
  global: boolean
  priority: number
  when: boolean
}>

/**
 * Bind an action to a shortcut
 * 
 * multiple actions can bind to the same shortcut simultaneously
 * 
 * global: fire the shortcut even inside an input/textarea/select
 * 
 * all flags default to on
 */
export function use_keyboard(shortcut: string, action: (event: KeyboardEvent) => void, options: use_keyboard = {}) {
  const { prevent_default = true, stop_propagation = true, global = true, priority = 0,
    when = true
  } = options

  useEffect(() => {
    if (!when) {
      return
    }

    const shortcutid = bind(shortcut, (e) => {
      prevent_default && e.preventDefault?.()
      stop_propagation && e.stopPropagation?.()

      action(e)
    }, { global, priority }
    )

    return () => unbind(shortcutid)
  }, [when])
}
