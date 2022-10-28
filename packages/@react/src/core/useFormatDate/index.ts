import day from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import { useTime } from '../'

export function useFormatDate(format = 'YYYY-MM-DD hh:mm:ss') {
  const [formatTime, setFormatTime] = useState('')
  const date = useTime()

  useMemo(() => setFormatTime(day(date).format(format)), [date])

  // useEffect(() => setFormatTime(day(date).format(format)), [date])

  return formatTime
}
