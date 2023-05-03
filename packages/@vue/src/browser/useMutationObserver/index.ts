import type { Ref } from 'vue'
import { onUnmounted, watch } from 'vue'

interface Options extends MutationObserverInit {}

export const useMutationObserver = (
  target: Ref<HTMLDivElement | Node | undefined>,
  callback: MutationCallback,
  options: Options = {
    attributes: true,
    characterData: true,
    childList: true,
  },
) => {
  const observer: MutationObserver = new MutationObserver(callback)

  watch(target as Ref<Element>, (el: Element) => {
    el && observer.observe(el, options)
  })

  onUnmounted(() => observer.disconnect())
}
