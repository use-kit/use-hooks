# useMutationObserver

Provides the ability to watch for changes being made to the `DOM` tree

## Usage

```tsx
import { useMutationObserver } from '@use-kit/react-hooks'

const el = useRef<HTMLDivElement>(null)

useMutationObserver(
  el.current,
  (mutations: MutationRecord[], observer: MutationObserver) => {
    console.log('mutations', mutations)
    console.log('observer', observer)
  },
)

setTimeout(() => {
  el.current?.setAttribute('style', 'color: yellow')

  setTimeout(() => {
    el.current?.setAttribute('style', '')
  }, 1000)
}, 1000)

return (
  <div>
    <div ref={el} />
  </div>
)
```
