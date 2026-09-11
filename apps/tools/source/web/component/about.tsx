import { Popup } from "./popup"
import { Scroll } from "./scroll"

type about = {
  open
  toggle_open
  icon?
  name: string
  author?: string
}

export function About(props: about) {
  const { open, toggle_open, icon, name, author } = props

  function close() {
    toggle_open(false)
  }

  use_bind('esc', close)

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="about">
        <Scroll>
          <div className="about_icon">
            {icon}
          </div>
          <div className="name">
            {name}
          </div>
          <div className="author">
            {author}
          </div>
        </Scroll>
      </div>
    </Popup>
  )
}