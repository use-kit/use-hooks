import { describe, expect, it } from 'vitest'
import { useTime } from '.'

describe('should', () => {
  it.skip('expect', () => {
    const date = useTime().toString().split(' ')[3] // year
    expect(date).toEqual((new Date()).getFullYear().toString())
  })
})
