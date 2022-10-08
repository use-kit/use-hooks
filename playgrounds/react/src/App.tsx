import { useTime, useFormatDate } from '@use-kit/react-hooks'
import './App.css'

function App() {
  const time = useTime()
  const formateDate = useFormatDate()
  console.log('format', formateDate)

  return (
    <div className="App">
      react test
      <div>time: { time.toString() }</div>
      <div>format: { formateDate }</div>
    </div>
  )
}

export default App
