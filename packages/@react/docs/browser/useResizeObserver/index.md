# useResizeObserver

Reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement

## Usage

```tsx
import { useResizeObserver } from '@use-kit/react-hooks'

const el = useRef(null)
const [text, setText] = useState('')

useResizeObserver(el.current, (entries) => {
  const [entry] = entries
  const { width, height } = entry.contentRect
  setText(`width: ${width} height: ${height}`)
})

return (
  <div>
    <textarea ref={el} disabled rows={3} cols={30} value={text} />
  </div>
)
```
