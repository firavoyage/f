import { createContext, useContext } from "react"

const { ceil, floor, abs } = Math

// Defaults
const rem = 16
const pl = 4 * rem
const pr = 1 * rem
const pt = 1 * rem
const pb = 2 * rem
const text_offset = 8
// const text_offset = padding / 2

const Coord = createContext()

type graph = {
  aspect_ratio?: number
  padding_left?: number
  padding_right?: number
  padding_top?: number
  padding_bottom?: number
  x: number[]
  y: number[]
  children?: any
}

export function Graph(props: graph) {
  const { aspect_ratio = 1,
    padding_left = pl, padding_right = pr,
    padding_top = pt, padding_bottom = pb,
    x, y,
    children,
    ...attrs
  } = props

  const [container, bounds] = use_measure()

  const width = bounds.width || 100
  const height = bounds.height || 100 / aspect_ratio
  let graph_width = width - padding_left - padding_right
  // why floor?
  let graph_height = floor(graph_width / aspect_ratio)

  if (graph_height + padding_top + padding_bottom > height) {
    graph_height = height - padding_top - padding_bottom
    graph_width = floor(graph_height * aspect_ratio)
  }

  const x_begin = x[0]
  const x_end = x[x.length - 1]
  // assume x begin < x end
  const x_width = x_end - x_begin
  const y_begin = y[0]
  const y_end = y[y.length - 1]
  const y_height = y_end - y_begin

  function coordinate_on_viewbox(x: number, y: number) {
    const x_percentage = (x - x_begin) / x_width
    const x_viewbox = padding_left + graph_width * x_percentage

    // origin on bottom left
    const y_percentage = 1 - (y - y_begin) / y_height
    const y_viewbox = padding_top + graph_height * y_percentage

    return { x: x_viewbox, y: y_viewbox }
  }

  /**
   * scale relative mouse position on viewbox
   * 
   * use percentage in case the viewbox width height desync or when not responsive
   * 
   * @param x_percentage relative mouse x / element width
   * @param y_percentage relative mouse y / element height
   */
  function mouse_on_coordinate(x_percentage: number, y_percentage: number) {
    const x_viewbox = width * x_percentage
    const x_coord = x_viewbox - padding_left

    // origin on bottom left
    const y_viewbox = height * (1 - y_percentage)
    const y_coord = y_viewbox

    return { x: x_coord, y: y_coord }
  }

  useEffect(() => {
    let element = container.current
    if (!element) {
      return
    }

    element.addEventListener('mousemove', (event) => {
      // 1. Relative to the target element itself (Recommended for UI/Canvas tracking)
      const rect = event.currentTarget.getBoundingClientRect();
      const elementX = event.clientX - rect.left;
      const elementY = event.clientY - rect.top;

      // 2. Relative to the browser viewport
      const viewportX = event.clientX;
      const viewportY = event.clientY;

      // 3. Relative to the entire monitor screen
      const screenX = event.screenX;
      const screenY = event.screenY;

      // console.log(`Pos inside element: X=${elementX}, Y=${elementY}`);
    });
  })

  return (
    <Coord value={{
      coordinate_on_viewbox,
      x_labels: x, x_begin, x_end,
      y_labels: y, y_begin, y_end
    }}>
      <div className="graph" {...p({ ref: container, ...attrs })}>
        <svg {...p({
          style: {
            width: '100%',
            height: '100%',
            display: 'block', // fix container height != svg height legacy quirk
          },
          viewBox: `0 0 ${floor(width)} ${floor(height)}`,
          // preserveAspectRatio: 'none',
        })}>
          {children}
        </svg>
      </div>
    </Coord>
  )
}

type line = {
  line: [k: number, b?: number] | number
  label?: string | number
}

function segment(line, x_begin, x_end, y_begin, y_end) {
  let sx, sy, ex, ey

  if (typeof line == 'number') {
    const x = line

    sx = ex = x
    sy = y_begin
    ey = y_end

    if (x < x_begin || x > x_end) {
      return nil
    }
  } else {
    const [k, b = 0] = line
    function fx(x: number) {
      return k * x + b
    }
    function fy(y: number) {
      return (y - b) / k
    }

    sy = fx(x_begin)
    if (sy < y_begin) {
      sx = fy(y_begin)
      sy = y_begin
    } else if (sy > y_end) {
      sx = fy(y_end)
      sy = y_end
    } else {
      sx = x_begin
      sy = sy
    }

    ey = fx(x_end)
    if (ey < y_begin) {
      ex = fy(y_begin)
      ey = y_begin
    } else if (ey > y_end) {
      ex = fy(y_end)
      ey = y_end
    } else {
      ex = x_end
      ey = ey
    }

    // it will work as expected (render nothing) when s = e, i.e. wholy above/below graph
    // no. it will err (warn) when "infinity", and it's not good prac.
    if (sx == ex && sy == ey) {
      return nil
    }
  }

  return { sx, sy, ex, ey }
}

export function Line({ line, label }: line) {
  const { coordinate_on_viewbox: viewbox, x_begin, x_end, y_begin, y_end } = useContext(Coord)

  const seg = segment(line, x_begin, x_end, y_begin, y_end)
  if (!is_given(seg)) {
    return
  }
  const { sx, sy, ex, ey } = seg

  const s = viewbox(sx, sy)
  const e = viewbox(ex, ey)

  return (
    <>
      <g className="line">
        <line {...p({ x1: s.x, y1: s.y, x2: e.x, y2: e.y })}></line>
      </g>
      {
        label &&
        <g className="label line_label">
          <Text {...p({ ...viewbox(ex, ey), anchor: 'right', baseline: 'bottom' })}>
            {label}
          </Text>
        </g>
      }
    </>
  )
}

type range = {
  line1: [k: number, b?: number] | number
  line2: [k: number, b?: number] | number
  label?: string | number
}

export function Range({ line1, line2, label }: range) {
  const { coordinate_on_viewbox: viewbox, x_begin, x_end, y_begin, y_end } = useContext(Coord)

  const segment1 = segment(line1, x_begin, x_end, y_begin, y_end)
  const segment2 = segment(line2, x_begin, x_end, y_begin, y_end)

  if (segment1 == nil && segment2 == nil) {
    return 
  } 

  let points = []

  const top_left = {x: x_begin, y: y_end}
  const top_bottom = {x: x_begin, y: ystart}
  const top_left = {x: x_begin, y: y_end}
  const top_left = {x: x_begin, y: y_end}

  if (segment1 == nil) {
    const { sx, sy, ex, ey } = segment2

    points.push({x: sx, y: sy}, {x: ex, y: ey})

    if (sy < ey) {
      
    } 
  } 
}

type text = {
  x: number
  y: number
  anchor?: 'left' | 'center' | 'right' // horizontal alignment
  baseline?: 'top' | 'center' | 'alphabetic' | 'bottom' // vertical alignment
  children?: any
}

/**
 * render text on viewbox x y (labels do not have to be inside graph)
 */
export function Text(props: text) {
  const { x, y, anchor = 'center',
    baseline = 'center', // for graph 
    // baseline = 'alphabetic', 
    children, ...attrs } = props

  const textAnchor = {
    left: 'start',
    center: 'middle',
    right: 'end',
    // inherit: 'inherit',
  }[anchor] ?? anchor

  const dominantBaseline = {
    top: 'text-before-edge',
    center: 'central',
    alphabetic: 'alphabetic',
    bottom: 'text-after-edge',
  }[baseline] ?? baseline

  return (
    <text {...p({ class: 'text', x, y, textAnchor, dominantBaseline, ...attrs })}>
      {children}
    </text>
  )
}

export function XAxis() {
  const { coordinate_on_viewbox: viewbox,
    x_labels, x_begin, x_end,
    y_labels, y_begin, y_end } = useContext(Coord)

  return (
    <g className="axis x_axis">
      <Line {...p({ line: [0, y_begin] })}></Line>
      <g className="labels">
        {
          map(x_labels, (x_label: number) => {
            const x = viewbox(x_label, y_begin).x
            const y = viewbox(x_label, y_begin).y + text_offset

            return (
              <Text {...p({ x, y, baseline: 'top' })}>
                {x_label}
              </Text>
            )
          })
        }
      </g>
    </g>
  )
}

export function YAxis() {
  const { coordinate_on_viewbox: viewbox,
    x_labels, x_begin, x_end,
    y_labels, y_begin, y_end } = useContext(Coord)

  return (
    // g (instead of div) is used inside svg
    <g className="axis y_axis">
      <Line {...p({ line: x_begin })}></Line>
      <g className="labels">
        {
          map(y_labels, (y_label: number) => {
            const x = viewbox(x_begin, y_label).x - text_offset
            const y = viewbox(x_begin, y_label).y

            return (
              <Text {...p({ x, y, anchor: 'right' })}>
                {y_label}
              </Text>
            )
          })
        }
      </g>
    </g>
  )
}

export function Grid() {
  const { coordinate_on_viewbox: viewbox,
    x_labels, x_begin, x_end,
    y_labels, y_begin, y_end } = useContext(Coord)

  return (
    <g className="grid">
      {/* grid x can be ambiguous. horizontal, or vertical mapping x axis? */}
      <g className="horizontal_grid">
        {
          map(y_labels, (y_label: number) => (
            <Line {...p({ line: [0, y_label] })}></Line>
          ))
        }
      </g>
      <g className="vertical_grid">
        {
          map(x_labels, (x_label: number) => (
            <Line {...p({ line: x_label })}></Line>
          ))
        }
      </g>
    </g>
  )
}
