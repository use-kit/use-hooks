import { watch } from 'vue'

interface Options {
  root: Element
  rootMargin: string
  threshold: number
}

export const useIntersectionObserver = (
  target: Element,
  callback: IntersectionObserverCallback,
  params?: Partial<Options>,
) => {
  watch(target, (el) => {
    const options: Options = {
      root: target,
      rootMargin: params?.rootMargin ?? '0px',
      threshold: params?.threshold ?? 1.0,
    }

    const observer: IntersectionObserver = new IntersectionObserver(callback, options)

    el && observer.observe(el)
  })
}
