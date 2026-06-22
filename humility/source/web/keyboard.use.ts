import { bind, unbind } from 'web/keyboard';
import { useEffect } from 'react';

export function use_bind(shortcut: string, action: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const shortcutid = bind(shortcut, action)

    return () => unbind(shortcutid)
  })
}
