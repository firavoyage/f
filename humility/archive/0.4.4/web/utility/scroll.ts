export function scroll_by(
  ref,
  distance: number,
  scroll_behavior: 'smooth' | 'instant' = 'instant',
) {
  if (!ref.current) {
    return
  }

  if (abs(distance) <= 1) {
    distance = ref.current.clientHeight * distance
  }

  ref.current.scrollBy({
    top: distance,
    behavior: scroll_behavior,
  })
}
