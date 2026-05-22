import { useState, useEffect } from "react"

const STORAGE_KEY = "design-system"

export type Theme = "adwaita" | "md3"

export function use_theme() {
  const [theme, set_theme] = useState<Theme>(() => {
    if (typeof window == "undefined") return "adwaita"
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored == "md3" ? "md3" : "adwaita"
  })

  useEffect(() => {
    document.body.setAttribute("data-theme", theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, set_theme }
}