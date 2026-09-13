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

  const popup = useRef()
  const prev_focus = useRef()

  // focus first element (or popup itself) when open, restore focus when exit
  useEffect(() => {
    if (!popup.current) {
      return
    }

    if (open) {
      // always true i guess, just in case
      if (!popup.current.contains(document.activeElement)) {
        prev_focus.current = document.activeElement

        // const focusable = tabbable(popup_ref.current);
        // const first_element = focusable[0];
        // first_element?.focus()
        popup.current.focus()
      }
    } else {
      prev_focus.current?.focus()
      prev_focus.current = nil
    }

    return () => prev_focus.current?.focus()
  }, [open])

  // trap keyboard when open
  use_bind('tab', function (e) {
    if (!popup.current || !open) {
      return
    }

    const focusable = tabbable(popup.current);
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
    if (!popup.current || !open) {
      return
    }

    const focusable = tabbable(popup.current);
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

  // listen for outside clicks when open
  useEvent('mousedown', function (e) {
    if (!open) {
      return 
    } 

    if (backdrop) {
      // prevent focus loss (backdrop should not get focused)
      e?.preventDefault()
    }

    if (!popup.current) {
      return
    }

    if (!popup.current.contains(e.target)) {
      click_outside()
    }
  })

  return (
    <>
      {
        open &&
        <div className="popup" {...p({ open, ref: popup, tabIndex: -1 })}>
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