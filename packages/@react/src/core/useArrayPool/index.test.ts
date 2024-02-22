import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react-hooks'
import { useArrayPool } from '.'

describe('useArrayPool', () => {
  const { result } = renderHook(() => useArrayPool<number>(2))

  act(() => {
    result.current.addPoolItem(1)
    result.current.addPoolItem(2)
    result.current.addPoolItem(3)
  })

  // TODO: not true
  it('should return an array pool', () => {
    expect(result.current.pool).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
      ]
    `)
  })
})
