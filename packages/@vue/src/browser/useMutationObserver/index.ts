import { watch } from 'vue'

interface Options extends MutationObserverInit {}

export const useMutationObserver = (
  target: Element | Node,
  callback: MutationCallback,
  options: Options = {
    attributes: true,
    characterData: true,
    childList: true,
  },
) => {
  watch(target, (el) => {
    const observer: MutationObserver = new MutationObserver(callback)

    el && observer.observe(el, options)
  })
}
