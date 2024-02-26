import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useRequest } from '.'

describe('useRequest', () => {
  const { result } = renderHook(() => useRequest(async () => setTimeout(() => 1, 1000)))

  it.skip('should return loading', async () => {
    expect(result.current.loading).toBe(true)
  })

  it.skip('should return data', async () => {
    expect(result.current.result).toBe(1)
  })
})
