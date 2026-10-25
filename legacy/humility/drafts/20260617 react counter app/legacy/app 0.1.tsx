import { useState, useEffect } from "react"

function Counter({ count, setCount }: { count: number; setCount: (c: number) => void }) {
  return (
    <div>
      <input
        type="number"
        value={count}
        onChange={e => setCount(Number(e.target.value))}
      />
    </div>
  )
}

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
      {visible && <Counter count={count} setCount={setCount} />}
    </>
  )
}
