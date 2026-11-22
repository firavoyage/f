import { useScroll, useUpdate } from 'react-use'

const min_thumb_length = 16
const scroll_hint_duration = 500

type scroll = {
  children
  scrollbar?: boolean
  should_preserve_position_on_resize?: boolean
  ref
}

export function scroll(props: scroll) {
  const {
    children,
    scrollbar = true,
    should_preserve_position_on_resize = true,
    ref = {}
  } = props
  const [is_vertically_scrollable, toggle_is_vertically_scrollable] =
    useToggle(false)
  const [is_horizontally_scrollable, toggle_is_horizontally_scrollable] =
    useToggle(false)

  // recalc thumb position/length
  const handle_resize = useUpdate()

  const [hover, set_hover] = useState(false)
  const [did_scroll, set_did_scroll] = useState(false)

  const container = useRef()
  // const [container] = useMeasure()
  const content = useRef()
  const vertical_track = useRef()
  const vertical_thumb = useRef()
  const horizontal_track = useRef()
  const horizontal_thumb = useRef()

  const [is_dragging, set_is_dragging] = useState(false)
  const drag_start = useRef({
    mouse_pos: 0,
    scroll_pos: 0,
    orientation: '' as 'v' | 'h' | '',
  })

  const position = useScroll(content)

  // bound container w h to parent, mimicing flex grow 1
  useLayoutEffect(() => {
    if (!container.current || !content.current) {
      return
    }

    bound_size_to_parent()

    let container_node = container.current
    let content_node = content.current

    const parent = container_node.parentElement

    const observer = new ResizeObserver(() => {
      bound_size_to_parent()
      handle_resize()
    })

    observer.observe(parent)
    observer.observe(container_node)
    observer.observe(content_node)
  }, [])

  // show scrollbar track for a while when position changes
  useEffect(() => {
    set_did_scroll(true)

    const timer = setTimeout(function () {
      set_did_scroll(false)
    }, scroll_hint_duration)

    return () => {
      clearTimeout(timer)
    }
  }, [JSON.stringify(position)])

  useLayoutEffect(() => {
    if (!content.current) {
      return
    }

    const view = content.current

    toggle_is_vertically_scrollable(view.scrollHeight > view.clientHeight)
    toggle_is_horizontally_scrollable(view.scrollWidth > view.clientWidth)

    if (
      is_vertically_scrollable &&
      vertical_track.current &&
      vertical_thumb.current
    ) {
      const track = vertical_track.current
      const thumb = vertical_thumb.current

      const view_height = view.clientHeight
      const content_height = view.scrollHeight
      const track_height = track.clientHeight
      const thumb_height = max(
        (view_height / content_height) * track_height,
        min_thumb_length,
      )
      thumb.style.height = `${thumb_height}px`

      const max_scroll_y = content_height - view_height
      const max_track_y = track_height - thumb_height

      const scroll_ratio = position.y / max_scroll_y
      const thumb_y = scroll_ratio * max_track_y

      thumb.style.transform = `translateY(${thumb_y}px)`
    }

    if (
      is_horizontally_scrollable &&
      horizontal_track.current &&
      horizontal_thumb.current
    ) {
      const track = horizontal_track.current
      const thumb = horizontal_thumb.current

      const view_width = view.clientWidth
      const content_width = view.scrollWidth
      const track_width = track.clientWidth
      const thumb_width = max(
        (view_width / content_width) * track_width,
        min_thumb_length,
      )
      thumb.style.width = `${thumb_width}px`

      const max_scroll_x = content_width - view_width
      const max_track_x = track_width - thumb_width

      const scroll_ratio = position.x / max_scroll_x
      const thumb_x = scroll_ratio * max_track_x

      thumb.style.transform = `translateX(${thumb_x}px)`
    }
  })

  // window can capture mouse up outside body
  use_event(
    'mousemove',
    (e) => {
      const view = content.current
      const { orientation, mouse_pos, scroll_pos } = drag_start.current
      if (!view) return

      if (
        orientation == 'v' &&
        vertical_track.current &&
        vertical_thumb.current
      ) {
        const delta_y = e.clientY - mouse_pos
        const max_thumb_travel =
          vertical_track.current.clientHeight -
          vertical_thumb.current.offsetHeight
        const max_scroll = view.scrollHeight - view.clientHeight

        view.scrollTop = scroll_pos + (delta_y / max_thumb_travel) * max_scroll
      }

      if (
        orientation == 'h' &&
        horizontal_track.current &&
        horizontal_thumb.current
      ) {
        const delta_x = e.clientX - mouse_pos
        const max_thumb_travel =
          horizontal_track.current.clientWidth -
          horizontal_thumb.current.offsetWidth
        const max_scroll = view.scrollWidth - view.clientWidth

        view.scrollLeft = scroll_pos + (delta_x / max_thumb_travel) * max_scroll
      }

      // prevent select
      e.preventDefault()
    },
    window,
    { when: is_dragging },
  )

  use_event('mouseup', () => set_is_dragging(false), window, {
    when: is_dragging,
  })

  use_event('mouseenter', check_hover, content)
  use_event('mousemove', check_hover)

  useEffect(() => {
    ref.current = content.current
  })

  // consider hover regardless on content or on track/thumb
  function check_hover(e) {
    if (!content.current) {
      return
    }

    let element = content.current

    const rect = element.getBoundingClientRect()

    const does_hover =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom

    set_hover(does_hover)
  }

  function bound_size_to_parent() {
    if (!container.current || !content.current) {
      return
    }

    let container_node = container.current
    let content_node = content.current

    const container_parent = container_node.parentElement

    if (!container_parent) return

    const anchor = document.elementFromPoint(window.innerWidth / 2, 100)

    const before = anchor.getBoundingClientRect().top

    container_node.style.maxHeight = nil
    if (container_parent.scrollHeight > container_parent.clientHeight) {
      let delta = container_parent.scrollHeight - container_parent.clientHeight

      let height = container_node.clientHeight - delta

      container_node.style.maxHeight = `${height}px`
    }

    container_node.style.maxWidth = nil
    if (container_parent.scrollWidth > container_parent.clientWidth) {
      let delta = container_parent.scrollWidth - container_parent.clientWidth

      let width = container_node.clientWidth - delta

      container_node.style.maxWidth = `${width}px`
    }

    if (should_preserve_position_on_resize) {
      const after = anchor.getBoundingClientRect().top
      content_node.scrollBy(0, after - before)
      // requestAnimationFrame(() => {
      //   const after = anchor.getBoundingClientRect().top
      //   content_node.scrollBy(0, after - before)
      // })
    }
  }

  const show = hover || did_scroll

  return h(
    'scroll',
    { drag: is_dragging, ref: container },
    h('scroll_content', { ref: content }, children),
    scrollbar && is_vertically_scrollable &&
      h(
        'scroll_vertical_scrollbar',
        h(
          'scroll_vertical_track',
          { ref: vertical_track, show },
          h('scroll_vertical_thumb', {
            ref: vertical_thumb,
            onMouseDown(e) {
              if (!content.current) return
              set_is_dragging(true)

              drag_start.current = {
                orientation: 'v',
                mouse_pos: e.clientY,
                scroll_pos: position.y,
              }
              // document.body.style.userSelect = "none"
            },
          }),
        ),
      ),
    scrollbar && is_horizontally_scrollable &&
      h(
        'scroll_horizontal_scrollbar',
        h(
          'scroll_horizontal_track',
          { ref: horizontal_track, show },
          h('scroll_horizontal_thumb', {
            ref: horizontal_thumb,
            onMouseDown(e) {
              if (!content.current) return
              set_is_dragging(true)

              drag_start.current = {
                orientation: 'h',
                mouse_pos: e.clientX,
                scroll_pos: position.x,
              }
              // document.body.style.userSelect = "none"
            },
          }),
        ),
      ),
  )
}
