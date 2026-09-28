export function Tools() {
  return (
    <>
      <svg {...p({ xmlns: 'http://www.w3.org/2000/svg', viewBox: "-100 -100 200 200" })}>
        <circle {...p({
          cx: 0, cy: 0, r: 100, fill: '#3484e4',
          fillOpacity: '100%'
          // fillOpacity: '30%'
        })}></circle>
        <line {...p({
          x1: -20, y1: 50, x2: 20, y2: -50,
          strokeWidth: 10, stroke: 'white', strokeLinecap: 'round', strokeOpacity: '70%'
        })}></line>
      </svg>
    </>
  )
}

export function Code() {
  return (
    <>
      <svg {...p({ xmlns: 'http://www.w3.org/2000/svg', viewBox: "-200 -200 400 400" })}>
        <polygon {...p({
          points: '-100,0 0,100 100,0 0,-100',
          fill: 'orange',
          stroke: 'orange',
          strokeWidth: '20',
          strokeLinejoin: 'round'
        })}></polygon>
        {/* floating, light source */}
      </svg>
    </>
  )
}

export const Favicon = Code