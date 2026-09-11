import { use_bind } from "web/lib/use keyboard"

type popup = {
  open
  toggle_open
  backdrop?: boolean
  children
}

export function Popup(props: popup) {
  // const [open_state, toggle_open_state] = useToggle(false)

  // you must pass it down, otherwise (if local state) it could not be opened
  const { children, open, toggle_open, backdrop } = props

  function close() {
    toggle_open(false)
  }

  use_bind('esc', close)

  return (
    <>
      {
        open &&
        <div className="popup" {...p({ open })}>
          {children}
        </div>
      }
      <div className="backdrop" {...p({ onClick: close })}></div>
    </>

  )
}