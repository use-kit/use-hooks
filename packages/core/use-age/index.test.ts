import { describe, expect, it } from 'vitest'
import { useAge } from '.'

describe('should', () => {
  it('exported', () => {
    expect(useAge('1997-09-28')).toMatchInlineSnapshot('24')
  })
})
