import { useScroll } from "react-use"

type scroll = {
  children
  // scroll_top?: number
  // set_scroll_top?: fn
  toggle_is_top?: fn
  // set_is_top?: fn
}

export function Scroll({ children, toggle_is_top }: scroll) {
  const ref = useRef()

  const scroll_top = useScroll(ref)

  useEffect(() => {
    toggle_is_top?.(scroll_top.y == 0)
  })

  return (
    <div className="scroll" {...p({ ref })}>
      {children}
    </div>
  )
}