<script setup lang="ts">
import { ref } from 'vue'
import {
  useFormatDate,
  useIntersectionObserver,
  useMutationObserver,
  useResizeObserver,
  useTime,
  useWindowClientRect,
} from '@use-kit/vue-hooks'

import { useFetchList } from './hooks'

const time = useTime()
const format = useFormatDate('YYYY-MM-DD hh:mm:ss a')
const { loading, list } = useFetchList((x: number) => x < 3)
const rect: DOMRect = useWindowClientRect()

const resizeEl = ref<Element>()
const text = ref('')
useResizeObserver(resizeEl as any, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width} height: ${height}`
})

const mutateEl = ref<Element>()
useMutationObserver(
  mutateEl as any,
  (mutations: MutationRecord[], observer: MutationObserver) => {
    console.log('mutations', mutations)
    console.log('observer', observer)
  },
)

setTimeout(() => {
  mutateEl.value?.setAttribute('style', 'background: yellow')

  setTimeout(() => {
    mutateEl.value?.setAttribute('style', '')
  }, 2000)
}, 1000)

const intersectEl = ref<Element>()
useIntersectionObserver(intersectEl as any, (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  console.log('entries', entries)
  console.log('observer', observer)
})
</script>

<template>
  <div ref="mutateEl">
    <div>vue test</div>
    <div>time: {{ time }}</div>
    <div>format: {{ format }}</div>
    <div>request: {{ loading ? 'Loading……' : list }}</div>

    <div>rect width: {{ rect.width }}, rect height: {{ rect.height }}</div>
    <textarea ref="resizeEl" class="resizer" disabled v-text="text" />

    <div ref="intersectEl" />
  </div>
</template>
