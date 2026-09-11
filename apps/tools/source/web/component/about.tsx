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

  return (
    <Popup {...p({ open, toggle_open })}>
      {name}
      {author}
    </Popup>
  )
}