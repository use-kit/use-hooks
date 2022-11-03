import { useRef, useState } from 'react'
import {
  useFormatDate,
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

  const el = useRef(null)
  const [text, setText] = useState('')

  useResizeObserver(el.current, (entries) => {
    const [entry] = entries
    const { width, height } = entry.contentRect
    setText(`width: ${width} height: ${height}`)
  })

  return (
    <div className="App">
      react test
      <div>time: {time.toString()}</div>
      <div>format: {formateDate}</div>
      <div>request: {loading ? 'Loading...' : list}</div>
      <div>rect width: {rect?.width}</div>
      <textarea ref={el} disabled rows={3} cols={30} value={text} />
    </div>
  )
}

export default App
