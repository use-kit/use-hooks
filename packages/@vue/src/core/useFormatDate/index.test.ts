import { describe, expect, it } from 'vitest'
import { useFormatDate } from '.'

describe('should', () => {
  it('exported', () => {
    expect(useFormatDate('YYYY').value).toMatchInlineSnapshot('"2022"')
  })
})
