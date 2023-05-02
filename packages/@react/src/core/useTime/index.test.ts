import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useTime } from '.'

describe('useTime', () => {
  it('year', () => {
    const { result } = renderHook(() => useTime())

    const date = result.current.toString().split(' ')[3] // year
    expect(date).toEqual((new Date()).getFullYear().toString())
  })
})
