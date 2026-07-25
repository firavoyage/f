import { useEffect } from 'react';

export function use_window_active() {
  useEffect(() => {
    function set_active() {
      document.documentElement.setAttribute("window", 'active');
    }
    function set_inactive() {
      document.documentElement.setAttribute("window", 'inactive');
    }

    const is_bg_tab = document.visibilityState == 'hidden';
    const is_browser_unfocused = !document.hasFocus();

    if (is_bg_tab || is_browser_unfocused) {
      set_inactive()
    } else {
      set_active()
    }

    window.addEventListener('blur', () => {
      set_inactive()
    });

    window.addEventListener('focus', () => {
      set_active()
    });

    // no need to cleanup
  })
}
