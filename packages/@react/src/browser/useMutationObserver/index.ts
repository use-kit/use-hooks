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
  const observer: MutationObserver = new MutationObserver(callback)

  useMemo(() => {
    target && observer.observe(target, options)

    return () => observer.disconnect()
  }, [target])
}
