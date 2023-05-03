# useResizeObserver

Reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement

## Usage

```ts
import { useResizeObserver } from '@use-kit/vue-hooks'

const el = ref<HTMLDivElement>()
const text = ref('')

useResizeObserver(el, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  text.value = `width: ${width} height: ${height}`
})
```

```html
<template>
  <textarea ref="el" disabled v-text="text" />
</template>
```
