import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useRerender } from '.'

describe('useRerender', () => {
  const { result } = renderHook(() => useRerender())

  it('should rerender the component', () => {
    result.current.rerender()

    expect(result.current.renderKey).not.toBe(0)
  })
})
