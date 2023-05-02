import { describe, expect, it } from 'vitest'
import { useFormatDate } from '.'

describe('useFormatDate', () => {
  it.skip('year', () => {
    expect(useFormatDate('YYYY')).toEqual((new Date()).getFullYear().toString())
  })
})
