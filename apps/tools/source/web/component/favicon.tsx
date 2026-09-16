export function Favicon() {
  return (
    <svg viewBox="-100 -100 200 200" {...p({ style: {
      maxHeight: '100vh'
    } })}>
      <circle {...p({ cx: 0, cy: 0, r: 90 })}></circle>
    </svg>
  )
}