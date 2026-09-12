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

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

export function About(props: about) {
  const { open, toggle_open, icon, name, author, version } = props

  function close() {
    toggle_open(false)
  }

  function navigate_back() {
    if (stack.length == 1) {
      close()
    } else {
      set_stack(stack.slice(0, -1))
    }
  }

  function navigate_into(page: page) {
    set_stack([...stack, page])
  }

  use_bind('esc', navigate_back)

  function copy_version() {
    copy(version)

    // toast
  }

  const [is_on_top, toggle_is_on_top] = useToggle(false)
  const [stack, set_stack] = useState(['About'])

  type page = keyof typeof pages
  const page: page = stack[stack.length - 1]

  function AboutPage() {
    return (
      <>
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
          <Button {...p({ class: 'version', onClick: copy_version })}>
            {version}
          </Button>
        </div>
        {/* <hr className="hr" /> */}
        <div className="links">
          <Button {...p({ onClick() { navigate_into('Credits') } })}>
            <div className="label">
              Credits
            </div>
            <div className="action">
              <Icon {...p({ name: 'expand' })}></Icon>
            </div>
          </Button>
        </div>
      </>
    )
  }

  function Credits() {

  }

  const pages = {
    About: AboutPage,
    Credits
  }

  const Page = pages[page]

  const is_on_homepage = page == 'About'

  return (
    <Popup {...p({ open, toggle_open })}>
      <div className="about">
        <div className="titlebar">
          {
            <Button {...p({ class: 'button_back', onClick: navigate_back })}>
              <Icon {...p({ name: 'back' })}></Icon>
            </Button>
          }
          {
            (!is_on_homepage || !is_on_top) &&
            <div className="title">
              {page}
            </div>
          }
          <Button {...p({ class: 'button_close', onClick: close, focusable: false })}>
            <Icon {...p({ name: 'close' })}></Icon>
          </Button>
        </div>
        <Scroll {...p({ toggle_is_on_top })}>
          <Page></Page>
        </Scroll>
      </div>
    </Popup>
  )
}

type credits = {

}


