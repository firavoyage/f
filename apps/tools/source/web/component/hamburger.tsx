import { use_global } from "./app"

type hamburger = {
  children: any
}

export function Hamburger({ children, ...props }: hamburger) {
  const [hamburger] = use_global('appearance.layout.hamburger menu.is visible')

  return hamburger && (
    <div className="hamburger" {...p({ children })}>
      {children}
    </div>
  )
}