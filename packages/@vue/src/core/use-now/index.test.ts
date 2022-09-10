import { describe, expect, it } from 'vitest'
import { useNow } from '.'

describe('should', () => {
  it('expect', () => {
    expect(useNow().value).toEqual(new Date())
  })
})
