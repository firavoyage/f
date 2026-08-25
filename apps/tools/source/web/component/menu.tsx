type menu = {
  app: string
}

export function Menu(props: menu) {
  const { app = 'App' } = props

  return (
    <div className="menu">
      <div className="search">search</div>
      <div className="app">{app}</div>
      <div className="hamburger">hamburger</div>
    </div>
  )
}