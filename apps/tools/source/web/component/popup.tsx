import { tabbable } from "tabbable"
import { use_bind } from "web/lib/use keyboard"

type popup = {
  open
  toggle_open
  children
  backdrop?: boolean
  click_outside?: fn
}

export function Popup(props: popup) {
  // const [open_state, toggle_open_state] = useToggle(false)

  // you must pass it down, otherwise (if local state) it could not be opened
  const { children, open, toggle_open, backdrop = true, click_outside = close } = props

  function close() {
    toggle_open(false)
  }

  const popup_ref = useRef()
  const prev_focus_ref = useRef()

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key !== 'Tab') return;

  //     // Cleanly fetches all visible, interactive keyboard-focusable nodes
  //     const focusable = tabbable(popup_ref.current);
  //     if (focusable.length === 0) return;

  //     const first_element = focusable[0];
  //     const last_element = focusable[focusable.length - 1];

  //     if (e.shiftKey && document.activeElement === first_element) {
  //       last_element.focus();
  //       e.preventDefault();
  //     } else if (!e.shiftKey && document.activeElement === last_element) {
  //       first_element.focus();
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // }, [open]);

  use_bind('tab', function (e) {
    if (!popup_ref.current || !open) {
      return
    }

    const focusable = tabbable(popup_ref.current);
    if (focusable.length == 0) {
      e.preventDefault()

      return
    };

    const first_element = focusable[0];
    const last_element = focusable[focusable.length - 1];

    if (document.activeElement == last_element) {
      first_element.focus()
      e.preventDefault()
    }
  }, {
    prevent_default: false
  })

  use_bind('shift+tab', function (e) {
    if (!popup_ref.current || !open) {
      return
    }

    const focusable = tabbable(popup_ref.current);
    if (focusable.length == 0) {
      e.preventDefault()

      return
    };

    const first_element = focusable[0];
    const last_element = focusable[focusable.length - 1];

    if (document.activeElement == first_element) {
      last_element.focus()
      e.preventDefault()
    }
  }, {
    prevent_default: false
  })

  // focus first element (or popup itself) when open, restore focus when exit
  useEffect(() => {
    if (!popup_ref.current) {
      return
    }

    if (open) {
      prev_focus_ref.current = document.activeElement

      // const focusable = tabbable(popup_ref.current);
      // const first_element = focusable[0];
      // first_element?.focus()
      popup_ref.current.focus()
    } else {
      prev_focus_ref.current?.focus()
    }

    return () => prev_focus_ref.current?.focus()
  }, [open])

  // trap keyboard when open


  // listen for outside clicks
  useEvent('mousedown', function (e) {
    if (backdrop) {
      // prevent focus loss (backdrop should not get focused)
      e?.preventDefault()
    }

    if (!popup_ref.current) {
      return
    }

    if (!popup_ref.current.contains(e.target)) {
      click_outside()
    }
  })

  return (
    <>
      {
        open &&
        <div className="popup" {...p({ open, ref: popup_ref, tabIndex: -1 })}>
          {children}
        </div>
      }
      {
        backdrop &&
        <div className="backdrop" {...p({ onClick: click_outside })}></div>
      }
    </>
  )
}