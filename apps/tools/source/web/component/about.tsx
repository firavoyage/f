import { Button } from "./button"
import { Popup } from "./popup"
import { Scroll } from "./scroll"

type about = {
  open
  toggle_open
  icon?
  name: string
  author?: string
  version?: string

}

export function About(props: about) {
  const { open, toggle_open, icon, name, author } = props

  function close() {
    toggle_open(false)
  }

  use_bind('esc', close)

  const [is_top, toggle_is_top] = useToggle(false)

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="about">
        <div className="titlebar">
          {
            !is_top &&
            <div className="title">
              About
            </div>
          }
          <Button {...p({ class: 'button_close', onClick: close })}>
            <Icon {...p({ name: 'close' })}></Icon>
          </Button>
        </div>
        <Scroll {...p({ toggle_is_top })}>
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