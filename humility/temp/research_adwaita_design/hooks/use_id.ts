import { useId as useReactId } from 'react'

export function useId(prefix = 'adwaita'): string {
  return `${prefix}-${useReactId()}`
}