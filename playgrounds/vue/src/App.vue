<script setup lang="ts">
import { useTime, useFormatDate } from '@use-kit/vue-hooks'

const time = useTime()
const format = useFormatDate('YYYY-MM-DD hh:mm:ss a')
</script>

<template>
  <div>
    <div>vue test</div>
    <div>time: {{ time }}</div>
    <div>format: {{ format }}</div>
  </div>
</template>
