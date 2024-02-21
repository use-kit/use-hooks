import { ref } from 'vue'

export function useArrayPool<T>(size = 200) {
  const pool = ref<T[]>([])

  function addPoolItem(item: T) {
    if (pool.value.length >= size)
      pool.value.shift()

    pool.value.push(item as any)
  }

  return {
    pool,
    addPoolItem,
  }
}
