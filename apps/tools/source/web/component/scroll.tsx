import { useScroll } from "react-use"

type scroll = {
  children
  // scroll_top?: number
  // set_scroll_top?: fn
  set_is_top?: fn
}

export function Scroll({ children, set_is_top }: scroll) {
  const ref = useRef()

  const scroll_top = useScroll(ref)

  useEffect(() => {
    if (scroll_top.y == 0) {
      set_is_top?.(true)
    } 
  })

  return (
    <div className="scroll" {...p({ ref })}>
      {children}
    </div>
  )
}