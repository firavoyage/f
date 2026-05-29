import { createRoot } from 'react-dom/client'
import { useEffect, useRef } from 'react'
import App from './app'

function Root() {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    document.querySelectorAll('[data-var]').forEach((el) => {
      const varName = el.getAttribute('data-var')
      if (varName) {
        const value = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`).trim()
        el.textContent = value || `var(--${varName})`
      }
    })

    document.querySelectorAll('[data-bg]').forEach((el) => {
      const varName = el.getAttribute('data-bg')
      if (varName) {
        const value = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`).trim()
        el.style.background = value || `var(--${varName})`
      }
    })

    document.querySelectorAll('[data-preview]').forEach((el) => {
      const varName = el.getAttribute('data-preview')
      if (varName) {
        const value = getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`).trim()
        el.textContent = value || `var(--${varName})`
      }
    })
  }, [])

  return <App />
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<Root />)
}