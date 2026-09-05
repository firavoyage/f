import { use_global } from "./app"
import { Button } from "./button"

type menu = {
  app: string
}

export function Menu(props: menu) {
  const { app = 'App' } = props

  const [, toggle_hamburger] = use_global('appearance.layout.hamburger menu.is visible')

  return (
    <div className="menu">
      <Button {...p({ class: 'button_search' })}>
        <Icon {...p({ name: 'search' })}></Icon>
      </Button>
      <div className="name">{app}</div>
      <Button {...p({ class: "button_hamburger", onClick: toggle_hamburger })}>
        <Icon {...p({ name: 'menu' })}></Icon>
      </Button>
    </div>
  )
}