export function Favicon() {
  return (
    <>
      <svg {...p({ viewBox: "-100 -100 200 200", fill: "#353535" })}>
        <circle {...p({ cx: 0, cy: 0, r: 100 })}></circle>
        <line {...p({
          x1: -20, y1: 50, x2: 20, y2: -50,
          strokeWidth: 10, stroke: '#233B57', strokeLinecap: 'round'
        })}></line>
      </svg>
    </>
  )
}