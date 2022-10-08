import { describe, expect, it } from 'vitest'
import { useRequest } from '.'

function fetchList() {
  return new Promise(resolve => setTimeout(() => resolve([1, 2, 3]), 1000))
}

describe('should', () => {
  it('expect', () => {
    const { result } = useRequest(fetchList)
    expect(result.value).toMatchInlineSnapshot('null')
  })
})
