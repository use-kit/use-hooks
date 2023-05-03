import { useMemo, useRef, useState } from 'react'
import chalk from 'chalk'
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
    mutateEl.current,
    (mutations: MutationRecord[], observer: MutationObserver) => {
      console.log(chalk.green('mutations'), mutations)
      console.log(chalk.green('observer'), observer)
    },
  )

  useMemo(() => {
    setTimeout(() => {
      mutateEl.current?.setAttribute('style', 'color: yellow')

      setTimeout(() => {
        mutateEl.current?.setAttribute('style', '')
      }, 1000)
    }, 1000)
  }, [mutateEl.current])

  const intersectEl = useRef<HTMLDivElement>(null)

  useIntersectionObserver(intersectEl.current as any, (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    console.log(chalk.cyan('entries'), entries)
    console.log(chalk.cyan('observer'), observer)
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
