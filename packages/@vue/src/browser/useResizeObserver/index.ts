import type { Ref } from 'vue'
import { onUnmounted, unref, watch } from 'vue'

export const useResizeObserver = (
  target: Ref<HTMLDivElement | undefined>,
  callback: ResizeObserverCallback,
) => {
  const observer: ResizeObserver = new ResizeObserver(callback)

  watch(target as Ref<Element>, (el: Element) => {
    el && observer.observe(el)
  })

  onUnmounted(() => observer.unobserve(unref(target) as Element))
}
