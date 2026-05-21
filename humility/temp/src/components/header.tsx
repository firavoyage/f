import { theme_switcher } from "./theme_switcher"
import type { Theme } from "../hooks/use_theme"

type Props = {
  theme: Theme
  on_theme_change: (theme: Theme) => void
}

export function header({ theme, on_theme_change }: Props) {
  return (
    <header className="header">
      <h1 className="header-title">Notes</h1>
      {theme_switcher({ theme, on_change: on_theme_change })}
    </header>
  )
}