import React, { useEffect, useState } from 'react'

export function useTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000)

    return () => clearInterval(intervalId)
  }, [])

  return time
}
