import { describe, expect, it } from 'vitest'
import { useTime } from '.'

describe('useTime', () => {
  it.skip('year', () => {
    const date = useTime().toString().split(' ')[3] // year
    expect(date).toEqual((new Date()).getFullYear().toString())
  })
})
