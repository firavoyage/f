import { useScroll } from "react-use"

const { max } = Math

const min_thumb_length = 16

type scroll = {
  children
  // scroll_top?: number
  // set_scroll_top?: fn
  toggle_is_on_top?: fn
  // set_is_top?: fn
  scrollbar?: boolean
}

export function Scroll(props: scroll) {
  const { children, toggle_is_on_top, scrollbar = true } = props
  const [is_vertically_scrollable, toggle_is_vertically_scrollable] = useToggle(false)
  const [is_horizontally_scrollable, toggle_is_horizontally_scrollable] = useToggle(false)

  const content = useRef()
  const vertical_track = useRef()
  const vertical_thumb = useRef()
  const horizontal_track = useRef()
  const horizontal_thumb = useRef()

  const position = useScroll(content)

  useLayoutEffect(() => {
    toggle_is_on_top?.(position.y == 0)
  })

  useLayoutEffect(() => {
    if (!content.current) {
      return
    }

    const view = content.current

    toggle_is_vertically_scrollable(view.scrollHeight > view.clientHeight)
    toggle_is_horizontally_scrollable(view.scrollWidth > view.clientWidth)

    if (is_vertically_scrollable && vertical_track.current && vertical_thumb.current) {
      const track = vertical_track.current;
      const thumb = vertical_thumb.current;

      const view_height = view.clientHeight
      const content_height = view.scrollHeight
      const track_height = track.clientHeight
      const thumb_height = max((view_height / content_height) * track_height, min_thumb_length);
      thumb.style.height = `${thumb_height}px`
    }

    if (is_horizontally_scrollable && horizontal_track.current && horizontal_thumb.current) {
      const track = horizontal_track.current;
      const thumb = horizontal_thumb.current;

      const view_width = view.clientWidth
      const content_width = view.scrollWidth
      const track_width = track.clientWidth
      const thumb_width = max((view_width / content_width) * track_width, min_thumb_length);
      thumb.style.width = `${thumb_width}px`
    }
  })

  return (
    <div className="scroll" {...p(!scrollbar && { noscrollbar: true })}>
      <div className="scroll_content" {...p({ ref: content })}>
        {children}
      </div>
      {is_vertically_scrollable && (
        <div className="vertical_scrollbar">
          <div className="track" {...p({ ref: vertical_track })}>
            <div className="thumb" {...p({ ref: vertical_thumb })}></div>
          </div>
        </div>
      )}
      {is_horizontally_scrollable && (
        <div className="horizontal_scrollbar">
          <div className="track" {...p({ ref: horizontal_track })}>
            <div className="thumb" {...p({ ref: horizontal_thumb })}></div>
          </div>
        </div>
      )}
    </div>
  )
}