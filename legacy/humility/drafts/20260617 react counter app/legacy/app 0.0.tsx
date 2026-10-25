import { useState, useEffect } from "react"

export function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!visible) return
    const id = setInterval(() => setCount(c => c + 1), 1000)
    return () => clearInterval(id)
  }, [visible])

  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "hide" : "show"} counter
      </button>
      <button onClick={() => setCount(c => c + 1)}>
        increase count
      </button>
      {visible && (
        <div>
          <input type="text" value={count} readOnly/>
        </div>
      )}
    </>
  )
}
