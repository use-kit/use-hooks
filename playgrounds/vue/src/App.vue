<script setup lang="ts">
import { useTime, useFormatDate, useRequest } from '@use-kit/vue-hooks'
import { onMounted } from 'vue'

import { useFetchList } from './hooks'

const time = useTime()
const format = useFormatDate('YYYY-MM-DD hh:mm:ss a')
const { loading, list } = useFetchList((x: number) => x < 3)

</script>

<template>
  <div>
    <div>vue test</div>
    <div>time: {{ time }}</div>
    <div>format: {{ format }}</div>
    <div>request: {{ loading ? 'Loading……' : list }}</div>
  </div>
</template>
