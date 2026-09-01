import { use_global } from "./app"

type menu = {
  app: string
}

export function Menu(props: menu) {
  const { app = 'App' } = props

  const [, toggle_hamburger] = use_global('appearance.layout.hamburger menu.is visible')

  return (
    <div className="menu">
      <button className="search_button">
        <Icon {...p({ name: 'search' })}></Icon>
      </button>
      <div className="name">{app}</div>
      <button className="hamburger_button" {...p({ onClick: toggle_hamburger })}>
        <Icon {...p({ name: 'menu' })}></Icon>
      </button>
    </div>
  )
}