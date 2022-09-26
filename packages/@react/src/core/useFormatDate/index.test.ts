import { describe, expect, it } from 'vitest'
import { useFormatDate } from '.'

describe('should', () => {
  it('exported', () => {
    expect(useFormatDate('YYYY')).toMatchInlineSnapshot('"2022"')
  })
})
