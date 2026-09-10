type popup = {
  open
  toggle_open
  backdrop: boolean
  children
}

export function Popup(props: popup) {
  // const [open_state, toggle_open_state] = useToggle(false)

  // you must pass it down, otherwise (if local state) it could not be opened
  const { children, open, toggle_open, backdrop } = props

  return (
    open &&
    <div className="popup">
      {children}
    </div>
  )
}