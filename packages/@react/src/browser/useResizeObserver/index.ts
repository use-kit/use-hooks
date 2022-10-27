import { useMemo } from 'react'

export const useResizeObserver = (target: Element | null, callback: ResizeObserverCallback) => {
  useMemo(() => {
    const observer: ResizeObserver = new ResizeObserver(callback)

    target && observer.observe(target)
  }, [target])
}
