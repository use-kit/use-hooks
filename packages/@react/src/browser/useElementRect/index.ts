import type React from 'react'
import { useMemo, useRef, useState } from 'react'

type Options = MutationObserverInit

export const useElementRect = (options: Options = {
  attributes: true,
  childList: true,
  subtree: false,
}): { domRef: React.Ref<HTMLElement | null>; domRect: DOMRect } => {
  const defaultRect = new DOMRect(0, 0, 0, 0)

  const domRef = useRef<HTMLElement | null>(null)
  const [rect, setRect] = useState<DOMRect>(defaultRect)

  useMemo(() => {
    const observer = new MutationObserver(() => {
      const dom = domRef.current
      setRect(dom?.getBoundingClientRect() ?? defaultRect)
      observer.observe(dom as Node, options)
    })
  }, [])

  return { domRef, domRect: rect }
}
