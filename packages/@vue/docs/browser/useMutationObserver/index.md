# useMutationObserver

Provides the ability to watch for changes being made to the `DOM` tree

## Usage

```ts
import { useMutationObserver } from '@use-kit/vue-hooks'

const el = ref<HTMLDivElement>()

useMutationObserver(
  el,
  (mutations: MutationRecord[], observer: MutationObserver) => {
    console.log('mutations', mutations)
    console.log('observer', observer)
  },
)

setTimeout(() => {
  el.current?.setAttribute('style', 'background: yellow')

  setTimeout(() => {
    el.current?.setAttribute('style', '')
  }, 1000)
}, 1000)
```

```html
<template>
  <div ref="el" class="mutate" />
</template>
```

```css
.mutate {
  width: 200px;
  height: 200px;
}
```
