import { describe, expect, it } from 'vitest'
import { useFormatDate } from '.'

describe('useFormateData', () => {
  it('year', () => {
    expect(useFormatDate('YYYY').value).toEqual((new Date()).getFullYear().toString())
  })
})
