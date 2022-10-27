import { watch } from 'vue'

export const useResizeObserver = (target: Element, callback: ResizeObserverCallback) => {
  watch(target, (el) => {
    const observer: ResizeObserver = new ResizeObserver(callback)

    el && observer.observe(el)
  })
}
