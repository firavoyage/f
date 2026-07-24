import { sync_theme } from 'web/lib/sync_theme';
import { useEffect } from 'react';

import type { theme } from 'web/lib/sync_theme'

export function use_sync_theme(theme: theme) {
  useEffect(() => {
    sync_theme(theme)
  })
}
