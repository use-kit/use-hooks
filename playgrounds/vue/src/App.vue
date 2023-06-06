<script setup lang="ts">
import { ref } from 'vue'
import chalk from 'chalk'
import {
  useFormatDate,
  useIntersectionObserver,
  useMutationObserver,
  useRerender,
  useResizeObserver,
  useTime,
  useWindowClientRect,
} from '@use-kit/vue-hooks'

import { useFetchList } from './hooks'

const time = useTime()
const format = useFormatDate('YYYY-MM-DD hh:mm:ss a')
const { loading, list } = useFetchList((x: number) => x < 3)
const rect: DOMRect = useWindowClientRect()

const resizeEl = ref<HTMLDivElement>()
const text = ref('')
useResizeObserver(resizeEl, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width} height: ${height}`
})

const mutateEl = ref<HTMLDivElement>()
useMutationObserver(
  mutateEl,
  (mutations: MutationRecord[], observer: MutationObserver) => {
    console.log(chalk.green('mutations'), mutations)
    console.log(chalk.green('observer'), observer)
  },
)

setTimeout(() => {
  mutateEl.value?.setAttribute('style', 'color: yellow')

  setTimeout(() => {
    mutateEl.value?.setAttribute('style', '')
  }, 1000)
}, 1000)

const intersectEl = ref<HTMLDivElement>()
useIntersectionObserver(intersectEl, (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  console.log(chalk.cyan('entries'), entries)
  console.log(chalk.cyan('observer'), observer)
})

const { renderKey, rerender } = useRerender()
setTimeout(() => {
  rerender()
  console.log(chalk.red('rerender'))
}, 2000)
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

    <div :key="renderKey" />
  </div>
</template>
