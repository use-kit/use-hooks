# useIntersectionObserver

Reactive element Rect

## Usage

```tsx
import { useElementRect } from '@use-kit/react-hooks'

const { domRef, domRect } = useElementRect()

return (
  <div>
    <div ref={domRef} />
  </div>
)
```
