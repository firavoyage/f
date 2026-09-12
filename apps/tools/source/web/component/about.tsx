import { Button } from "./button"
import { Popup } from "./popup"
import { Scroll } from "./scroll"

type about = {
  open
  toggle_open
  icon?
  name: string
  author: string
  version: string
  credits: credits
}

type credits = Record<string, people>

type people = link[]

// type person = string | {
//   name: string
//   // email?: string
//   link?: string
// }

type links = {
  links: link[]
}

type link = string | {
  name: string
  action: 'expand' | 'open'
  target: string
}

async function copy_text(text: string) {
  await navigator.clipboard.writeText(text);
}

function copy(text: string) {
  copy_text(text)

  // toast
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

  const [is_on_top, toggle_is_on_top] = useToggle(false)
  const [stack, set_stack] = useState(default_stack)

  function Links({ links }: links) {
    return (
      <div className="links">
        {
          map(links, (link) => {
            if (typeof link == 'string') {
              return (
                <Button {...p({ onClick() { copy(link) } })}>
                  <div className="label">
                    {link}
                  </div>
                </Button>
              )
            } else if (link.action == 'expand') {
              return (
                <Button {...p({ onClick() { navigate_into(link.target) } })}>
                  <div className="label">
                    {link.name}
                  </div>
                  <div className="action">
                    <Icon {...p({ name: 'expand' })}></Icon>
                  </div>
                </Button>
              )
            } else if (link.action == 'open') {
              return (
                <Button {...p({ tooltip: link.target })}>
                  <div className="label">
                    {link.name}
                  </div>
                  <div className="action">
                    <Icon {...p({ name: 'open' })}></Icon>
                  </div>
                </Button>
              )
            }
          })
        }
      </div>
    )
  }

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
          <Button {...p({ class: 'version', onClick() { copy(version) } })}>
            {version}
          </Button>
        </div>
        {/* <hr className="hr" /> */}
        <Links {...p({ links: [
          {
            name: 'Credits',
            action: 'expand',
            target: 'Credits',
          }
        ] })}></Links>
      </>
    )
  }

  function Credits() {
    return map(credits, ([work, people]) => (
      <>
        <h1 className="h1">{work}</h1>
        <Links {...p({ links: people })}></Links>
      </>
    ))
  }

  type page = keyof typeof pages
  const page: page = stack[stack.length - 1]

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



