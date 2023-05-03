import { useMemo } from 'react'

export const useResizeObserver = (target: Element | null, callback: ResizeObserverCallback) => {
  const observer: ResizeObserver = new ResizeObserver(callback)

  useMemo(() => {
    target && observer.observe(target)

    return () => observer.unobserve(target as Element)
  }, [target])
}
