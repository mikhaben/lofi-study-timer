import { useState, useEffect } from 'react'

import { type ITimer } from '../models/Main'
import { formatTime } from '../utils/timeUtils'

export interface TimerHook extends ITimer {
  toggleRunning: () => void
  resetTimer: () => void
}

const useTimer = (): TimerHook => {
  const [seconds, setSeconds] = useState<number>(0)
  const [running, setRunning] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<any>(null)

  const time = formatTime(seconds)
  const hours = time.remaining.hours
  const minutes = time.remaining.minutes
  const remainingSeconds: number = time.remaining.seconds

  const toggleRunning = (): void => {
    setRunning(!running)
    if (!running && intervalId === null) {
      const id = setInterval(() => { setSeconds(prev => prev + 1) }, 1000)
      setIntervalId(id)
    } else {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  const resetTimer = (): void => {
    clearInterval(intervalId)
    setIntervalId(null)
    setRunning(false)
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      if (intervalId !== null) clearInterval(intervalId)
    }
  }, [intervalId])

  return {
    running,
    seconds,
    formatted: {
      hours,
      minutes,
      seconds: remainingSeconds
    },
    toggleRunning,
    resetTimer
  }
}

export default useTimer
