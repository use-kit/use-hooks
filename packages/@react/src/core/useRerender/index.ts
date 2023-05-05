import { useState } from 'react'

export function useRerender() {
  const [renderKey, setRenderKey] = useState<number | string>(0)

  const rerender = () => {
    const change = renderKey as number + 1
    setRenderKey(change)
  }

  return {
    renderKey,
    rerender,
  }
}
