import { useRef, useState } from 'react'
import {
  useFormatDate,
  useIntersectionObserver,
  useMutationObserver,
  useResizeObserver,
  useTime,
  useWindowClientRect,
} from '@use-kit/react-hooks'
import { useFetchList } from './hooks'
import './App.css'

function App() {
  const time = useTime()
  const formateDate = useFormatDate()
  // console.log('format', formateDate)

  const { loading, list } = useFetchList()
  const rect = useWindowClientRect()

  const resizeEl = useRef(null)
  const [text, setText] = useState('')

  useResizeObserver(resizeEl.current, (entries) => {
    const [entry] = entries
    const { width, height } = entry.contentRect
    setText(`width: ${width} height: ${height}`)
  })

  const mutateEl = useRef<HTMLDivElement>(null)

  useMutationObserver(
    mutateEl.current as any,
    (mutations: MutationRecord[], observer: MutationObserver) => {
      console.log('mutations', mutations)
      console.log('observer', observer)
    },
  )

  // setTimeout(() => {
  //   mutateEl.current?.setAttribute('style', 'background: yellow')

  //   setTimeout(() => {
  //     mutateEl.current?.setAttribute('style', '')
  //   }, 2000)
  // }, 1000)

  const intersectEl = useRef<HTMLDivElement>(null)

  useIntersectionObserver(intersectEl.current as any, (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    console.log('entries', entries)
    console.log('observer', observer)
  })

  return (
    <div ref={mutateEl} className="App">
      react test
      <div>time: {time.toString()}</div>
      <div>format: {formateDate}</div>
      <div>request: {loading ? 'Loading...' : list}</div>

      <div>rect width: {rect?.width}</div>
      <textarea ref={resizeEl} disabled rows={3} cols={30} value={text} />

      <div ref={intersectEl} />
    </div>
  )
}

export default App
