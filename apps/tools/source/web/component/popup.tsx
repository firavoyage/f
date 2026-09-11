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

  // useEvent('click', function (e) {
  //   if (!popup_ref.current) {
  //     return
  //   }

  //   if (!popup_ref.current.contains(e.target)) {
  //     click_outside()
  //   }
  // })

  return (
    <>
      {
        open &&
        <div className="popup" {...p({ open, ref: popup_ref })}>
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