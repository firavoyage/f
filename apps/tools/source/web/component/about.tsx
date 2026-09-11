import { Popup } from "./popup"

type about = {
  open
  toggle_open
  icon?
  name: string
  author?: string
}

export function About(props: about) {
  const { open, toggle_open, name, author } = props

  function close() {
    toggle_open(false)
  }

  use_bind('esc', close)

  return (
    <Popup {...p({ open, toggle_open })}>
      {name}
      {author}
    </Popup>
  )
}