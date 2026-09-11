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
  const { open, toggle_open, icon, name, author, version } = props

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
          <div className="info">
            <div className="about_icon">
              {icon}
            </div>
            <div className="name">
              {name}
            </div>
            <div className="author">
              {author}
            </div>
            <div className="version">
              0.5 (2026.08.22)
              {version}
            </div>
          </div>
          {/* <hr className="hr" /> */}
          <div className="links">
            <Button >
              <div className="label">
                Credits
              </div>
              <div className="action">
                <Icon {...p({ name: 'expand' })}></Icon>
              </div>
            </Button>
          </div>
        </Scroll>
      </div>
    </Popup>
  )
}