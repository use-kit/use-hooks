# useRerender

Manually re-render the dom somewhere you want.

## Usage

```ts
import { useRerender } from '@use-kit/react-hooks'

const { renderKey, rerender } = useRerender()

rerender() // somewhere you want to re-render
```

```html
<some-dom :key="renderKey" />

<!-- or -->
<some-dom :key="generateRenderKey()" />
```
