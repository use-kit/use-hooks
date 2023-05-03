import { useMemo } from 'react'

interface Options {
  root: Element | null
  rootMargin: string
  threshold: number
}

export const useIntersectionObserver = (
  target: Element | null,
  callback: IntersectionObserverCallback,
  params?: Partial<Options>,
) => {
  const options: Options = {
    root: target,
    rootMargin: params?.rootMargin ?? '0px',
    threshold: params?.threshold ?? 1.0,
  }

  const observer: IntersectionObserver = new IntersectionObserver(callback, options)

  useMemo(() => {
    target && observer.observe(target)

    return () => observer.disconnect()
  }, [target])
}
