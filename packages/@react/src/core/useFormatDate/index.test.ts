import { describe, expect, it } from 'vitest'
import { useFormatDate } from '.'

describe('should', () => {
  it.skip('exported', () => {
    expect(useFormatDate('YYYY')).toMatchInlineSnapshot('"2022"')
  })
})
