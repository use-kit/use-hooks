import { describe, expect, it } from 'vitest'
import { useRerender } from '.'

describe('should be change', () => {
  it('rerender', () => {
    const { renderKey, rerender } = useRerender()
    rerender()

    expect(renderKey.value).not.toBe(0)
  })
})
