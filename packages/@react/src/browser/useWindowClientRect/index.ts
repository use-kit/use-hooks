import { useMemo, useState } from 'react'

export const useWindowClientRect = () => {
  const [rect, setRect] = useState(document.firstElementChild?.getBoundingClientRect())

  const fn = () => {
    setRect(document.firstElementChild?.getBoundingClientRect())
  }

  useMemo(() => {
    window.addEventListener('resize', fn)

    return () => window.removeEventListener('resize', fn)
  }, [])

  return rect
}
