import { describe, expect, it } from 'vitest'
import { useTime } from '.'

describe('should', () => {
  it('expect', () => {
    expect(useTime().value).toEqual(new Date())
  })
})
