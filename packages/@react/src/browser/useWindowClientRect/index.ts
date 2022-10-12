import { useState, useMemo } from 'react';

export const useWindowClientRect = () => {
  const [rect, setRect] = useState(document.firstElementChild?.getBoundingClientRect())

  useMemo(() => {
    window.addEventListener('resize', () => {
      setRect(document.firstElementChild?.getBoundingClientRect())
    })
  }, [])

  return rect
}
