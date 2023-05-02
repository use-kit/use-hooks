import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useFormatDate } from '.'

describe('useFormatDate', () => {
  it('year', () => {
    const { result } = renderHook(() => useFormatDate('YYYY'))

    expect(result.current).toEqual((new Date()).getFullYear().toString())
  })
})
