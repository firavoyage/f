const { ceil, floor, abs } = Math

/**
 * - scale: create context
 *   - viewbox w h
 *   - graph~~%~~ x w y h
 *   - graph x% <-> x cord (a number when linear, like 0 end or begin end)
 *   - graph y% <-> y cord
 * - scale on svg: map cord props to svg viewbox xy
 *   - cord
 * - scale on graph: map mouse position to cord
 *   - mouse% on the svg
 */

type graph = {
  aspect_ratio?: number
  padding_left?: number
  padding_bottom?: number
  x: number[]
  y: number[]
}

export function Graph(props: graph) {
  const { aspect_ratio = 1, padding_left = 10, padding_bottom = 10,
    x, y
  } = props

  const [container, bounds] = use_measure()

  const width = bounds.width || 100
  const height = bounds.height || 100 / aspect_ratio
  const graph_width = width - padding_left
  // why floor?
  const graph_height = floor(graph_width / aspect_ratio)
  const x_begin = x[0]
  const x_end = x[x.length - 1]
  // assume x begin < x end
  const x_width = x_begin - x_end
  const y_begin = y[0]
  const y_end = y[y.length - 1]
  const y_height = y_begin - y_end

  function coordinate_on_viewbox(x: number, y: number) {
    const x_percentage = (x - x_begin) / x_width
    const x_viewbox = padding_left + graph_width * x_percentage

    const y_percentage = (y - y_begin) / y_height
    const y_viewbox = padding_left + graph_width * y_percentage

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

    const y_viewbox = height * y_percentage
    const y_coord = y_viewbox

    return {x: x_coord, y: y_coord}
  }

  useEffect(() => {
    log(bounds)

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
    <div className="graph" {...p({ ref: container, style: 'width: 1000px; height: 300px' })}>
      <svg {...p({
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: 'khaki'
        }, viewBox: `0 0 ${width} ${height}`,
        // preserveAspectRatio: 'none',
      })}>
        <rect x="0" y="0" width="80" height="50" />
      </svg>
    </div>
  )
}