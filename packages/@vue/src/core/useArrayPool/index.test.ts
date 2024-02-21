import { describe, expect, it } from 'vitest'
import { useArrayPool } from '.'

describe('useArrayPool', () => {
  const { pool, addPoolItem } = useArrayPool<number>(3)
  addPoolItem(1)
  addPoolItem(2)
  addPoolItem(3)
  addPoolItem(4)

  it('should return an array pool', () => {
    expect(pool.value).toEqual([2, 3, 4])
  })
})
