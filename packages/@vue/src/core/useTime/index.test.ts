import { describe, expect, it } from 'vitest'
import { unref } from 'vue'
import { useTime } from '.'

describe('useTime', () => {
  it('year', () => {
    const date = unref(useTime()).toString().split(' ')[3] // year
    expect(date).toEqual((new Date()).getFullYear().toString())
  })
})
