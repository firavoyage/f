import type { Theme } from "../hooks/use_theme"

type Props = {
  theme: Theme
  on_change: (theme: Theme) => void
}

export function theme_switcher({ theme, on_change }: Props) {
  return (
    <select
      className="select"
      value={theme}
      on_change={(e) => on_change(e.target.value as Theme)}
    >
      <option value="adwaita">Adwaita (GNOME)</option>
      <option value="md3">Material 3</option>
    </select>
  )
}