import type { Ref } from 'vue'
import { onUnmounted, unref, watch } from 'vue'

interface Options {
  root: Element | Document
  rootMargin: string
  threshold: number
}

export const useIntersectionObserver = (
  target: Ref<HTMLDivElement | Document | undefined>,
  callback: IntersectionObserverCallback,
  params?: Partial<Options>,
) => {
  const options: Options = {
    root: unref(target as unknown as Element),
    rootMargin: params?.rootMargin ?? '0px',
    threshold: params?.threshold ?? 1.0,
  }
  const observer: IntersectionObserver = new IntersectionObserver(callback, options)

  watch(target as Ref<Element>, (el: Element) => {
    el && observer.observe(el as Element)
  })

  onUnmounted(() => observer.disconnect())
}
