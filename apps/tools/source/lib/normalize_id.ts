export function normalize_id(name: string) {
  return name.toLowerCase().replaceAll(' ', '_')
}