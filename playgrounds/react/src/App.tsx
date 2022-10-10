import { useTime, useFormatDate } from '@use-kit/react-hooks'
import { useFetchList } from './hooks'
import './App.css'

function App() {
  const time = useTime()
  const formateDate = useFormatDate()
  // console.log('format', formateDate)

  const { loading, list } = useFetchList()

  return (
    <div className="App">
      react test
      <div>time: { time.toString() }</div>
      <div>format: { formateDate }</div>
      <div>request: { loading ? 'Loading...' : list }</div>
    </div>
  )
}

export default App
