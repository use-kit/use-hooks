import { useState } from 'react'

export function useArrayPool<T>(size = 200) {
  const [pool, setPool] = useState<T[]>([])

  function addPoolItem(item: T) {
    if (pool.length >= size) {
      setPool((prevPool) => {
        const newPool = [...prevPool]
        newPool.shift()
        newPool.push(item)
        return newPool
      })
    }
    else {
      setPool(prevPool => [...prevPool, item])
    }
  }

  return {
    pool,
    addPoolItem,
  }
}
