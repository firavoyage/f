import React, { createContext, useContext, useState, useRef, useEffect } from 'react'
import './scroll_area.css'

type ScrollAreaContextValue = {
  scrollbarSize: number
}

const ScrollAreaContext = createContext<ScrollAreaContextValue>({ scrollbarSize: 8 })

function useScrollAreaContext() {
  return useContext(ScrollAreaContext)
}

type RootProps = {
  children: React.ReactNode
}

function Root({ children }: RootProps) {
  const [scrollbarSize] = useState(8)

  return (
    <ScrollAreaContext.Provider value={{ scrollbarSize }}>
      <div className="ScrollArea">{children}</div>
    </ScrollAreaContext.Provider>
  )
}

type ViewportProps = {
  className?: string
  children: React.ReactNode
}

function Viewport({ className, children }: ViewportProps) {
  const { scrollbarSize } = useScrollAreaContext()
  const ref = useRef<HTMLDivElement>(null)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      setHasOverflow(el.scrollHeight > el.clientHeight)
      setScrollY(el.scrollTop)
      setScrollHeight(el.scrollHeight)
      setClientHeight(el.clientHeight)
    }

    update()
    el.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const trackHeight = clientHeight - scrollbarSize * 2
  const thumbHeight = Math.max((clientHeight / scrollHeight) * trackHeight, 20)
  const thumbTop = (scrollY / (scrollHeight - clientHeight)) * (trackHeight - thumbHeight) || 0

  return (
    <div className="ScrollArea_viewport" ref={ref}>
      <div className={['ScrollArea_content', className].filter(Boolean).join(' ')}>
        {children}
      </div>
      {hasOverflow && (
        <div className="ScrollArea_scrollbar">
          <div
            className="ScrollArea_thumb"
            style={{ height: `${thumbHeight}px`, top: `${thumbTop + scrollbarSize}px` }}
          />
        </div>
      )}
    </div>
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

type ScrollbarProps = {
  className?: string
  children: React.ReactNode
}

function Scrollbar({ className, children }: ScrollbarProps) {
  return (
    <div className={['ScrollArea_scrollbar', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}

type ThumbProps = {
  className?: string
}

function Thumb({ className }: ThumbProps) {
  return (
    <div className={['ScrollArea_thumb', className].filter(Boolean).join(' ')} />
  )
}

const ScrollArea = { Root, Viewport, Content, Scrollbar, Thumb }

export { ScrollArea }
export default ScrollArea