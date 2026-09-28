import { sync_theme } from 'web/lib/sync theme';
import { useEffect } from 'react';

import type { theme } from 'web/lib/sync theme'

/**
 * Add theme attr to root element
 * 
 * when theme = system, it will auto sync when color theme changes
 */
export function use_sync_theme(theme: theme) {
  useEffect(() => {
    sync_theme(theme)
  })
}
