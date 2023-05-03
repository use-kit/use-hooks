import { useMemo } from 'react'

interface Options extends MutationObserverInit {}

export const useMutationObserver = (
  target: Element | null,
  callback: MutationCallback,
  options: Options = {
    attributes: true,
    characterData: true,
    childList: true,
  },
) => {
  useMemo(() => {
    const observer: MutationObserver = new MutationObserver(callback)

    target && observer.observe(target, options)
  }, [target])
}
