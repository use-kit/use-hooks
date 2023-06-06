# useElementRect

Reactive element Rect

## Usage

```tsx
import { useElementRect } from '@use-kit/vue-hooks'

const { domRef, domRect } = useElementRect()

return (
  <div>
    <div ref={domRef} />
  </div>
)
```
