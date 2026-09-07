import { useRef } from "react"

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

export function Graph() {
  const svg = useRef()

  useEffect(() => {
    let element = svg.current

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

      console.log(`Pos inside element: X=${elementX}, Y=${elementY}`);
    });
  })

  return (
    <div className="graph">
      <svg {...p({
        ref: svg, style: {
          backgroundColor: 'khaki'
        }, viewBox: "0 0 100 100", width: 300, height: 100,
        // preserveAspectRatio: 'none',
      })}>
        <rect x="0" y="0" width="80" height="50" />
      </svg>
    </div>
  )
}