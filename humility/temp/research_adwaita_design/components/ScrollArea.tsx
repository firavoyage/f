import * as BaseUI from '@base-ui/react'
import './ScrollArea.css'

type RootProps = {
  children: React.ReactNode
}

function Root({ children }: RootProps) {
  return (
    <BaseUI.ScrollArea.Root className="ScrollArea">
      {children}
    </BaseUI.ScrollArea.Root>
  )
}

type ViewportProps = {
  className?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

function Viewport({ className, children, style }: ViewportProps) {
  return (
    <BaseUI.ScrollArea.Viewport className={['ScrollArea_viewport', className].filter(Boolean).join(' ')} style={style}>
      {children}
    </BaseUI.ScrollArea.Viewport>
  )
}

type ContentProps = {
  className?: string
  children: React.ReactNode
}

function Content({ className, children }: ContentProps) {
  return (
    <div className={['ScrollArea_content', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

const ScrollArea = { Root, Viewport, Content }

export { ScrollArea }
export default ScrollArea