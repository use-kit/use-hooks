<script setup lang="ts">
import {
  useFormatDate,
  useRequest,
  useResizeObserver,
  useTime,
  useWindowClientRect,
} from '@use-kit/vue-hooks'
import { onMounted, ref } from 'vue'

import { useFetchList } from './hooks'

const time = useTime()
const format = useFormatDate('YYYY-MM-DD hh:mm:ss a')
const { loading, list } = useFetchList((x: number) => x < 3)
const rect = useWindowClientRect()

const el = ref(null)
const text = ref('')

useResizeObserver(el, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width} height: ${height}`
})
</script>

<template>
  <div>
    <div>vue test</div>
    <div>time: {{ time }}</div>
    <div>format: {{ format }}</div>
    <div>request: {{ loading ? 'Loading……' : list }}</div>
    <div>rect width: {{ rect.width }}, rect height: {{ rect.height }}</div>
    <textarea ref="el" class="resizer" disabled v-text="text" />
  </div>
</template>
