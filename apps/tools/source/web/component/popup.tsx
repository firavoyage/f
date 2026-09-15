import { tabbable } from "tabbable"
import { use_bind } from "web/lib/use keyboard"

type popup = {
  open
  toggle_open
  children
  backdrop?: boolean
  align?: 'center' | 'top'
  initial_focus?: 'popup_container' | 'first_element'
  // focus?: 'popup_body' | 'first_element'
  click_outside?: fn
}

export function Popup(props: popup) {
  // const [open_state, toggle_open_state] = useToggle(false)

  // you must pass it down, otherwise (if local state) it could not be opened
  const { children, open, toggle_open,
    backdrop = true,
    align = 'center',
    initial_focus = 'popup_container',
    click_outside = close } = props

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

        if (initial_focus == 'popup_container') {
          /**
           * fix quirk: popup container should show no outline, 
           * yet when focused, everything inside becomes focus visible
           */
          document.activeElement?.blur?.();
          // popup.current.focus()
        } else if (initial_focus == 'first_element') {
          const focusable = tabbable(popup.current);
          const first_element = focusable[0];
          first_element?.focus()
        }
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

    // harden keyboard trap
    if (document.activeElement == last_element || !popup.current.contains(document.activeElement)) {
    // if (document.activeElement == last_element) {
      first_element.focus()
      e.preventDefault()
    }
  }, {
    prevent_default: false,
    priority: -1
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

    // harden keyboard trap
    if (document.activeElement == first_element || !popup.current.contains(document.activeElement)) {
    // if (document.activeElement == first_element) {
      last_element.focus()
      e.preventDefault()
    }
  }, {
    prevent_default: false,
    priority: -1
  })

  // listen for outside clicks when open
  use_event('mousedown', function (e) {
    if (!open || !popup.current) {
      return
    }

    if (!popup.current.contains(e.target)) {
      click_outside()

      // prevent focus loss due to a quirk when backdrop z index shifts after focused
      if (e.target.closest('.backdrop')) {
        e?.preventDefault()
      }
    }
  })

  return (
    <>
      {
        open &&
        <div className="popup" {...p({ open, backdrop, align, ref: popup, tabIndex: -1 })}>
          {children}
        </div>
      }
    </>
  )
}