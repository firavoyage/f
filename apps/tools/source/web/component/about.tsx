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
  credits: credits
}

type credits = Record<string, people>

type people = person[]

type person = string | {
  name: string
  // email?: string
  link?: string
}

async function copy(text: string) {
  await navigator.clipboard.writeText(text);
}

export function About(props: about) {
  const { open, toggle_open, icon, name, author, version, credits } = props

  const default_stack = ['About']

  function close() {
    // in case react state persists somehow
    // yeah, closed != unmounted
    set_stack(default_stack)

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
  const [stack, set_stack] = useState(default_stack)

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
    return map(credits, ([k, v]) => (
      <>
        <h1 className="h1">{k}</h1>
        <div className="links">
          {
            map(v, (person) => (
              <Button>
                {
                  typeof person == 'string' ?
                    <div className="label">
                      {person}
                    </div> :
                    <>
                      <div className="label">
                        {person.name}
                      </div>
                      <div className="action">
                        <Icon {...p({ name: 'open' })}></Icon>
                      </div>
                    </>
                }
              </Button>
            ))
          }
        </div>
      </>
    ))
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
            !is_on_homepage &&
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



