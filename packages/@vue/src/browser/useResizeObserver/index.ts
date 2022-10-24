import { onMounted } from 'vue'

export const useResizeObserver = (target: Element, callback: ResizeObserverCallback) => {
  onMounted(() => {
    const observer: ResizeObserver = new ResizeObserver(callback)

    observer.observe(target)
  })
}
