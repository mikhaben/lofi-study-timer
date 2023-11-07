import { useState, useEffect } from 'react'

import { type ITimer } from '../models/Main'

export interface TimerHook extends ITimer {
  toggleRunning: () => void
  resetTimer: () => void
}

const useTimer = (): TimerHook => {
  const [seconds, setSeconds] = useState<number>(0)
  const [running, setRunning] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<any>(null)

  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  const formattedSeconds: number = seconds % 60

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
      seconds: formattedSeconds
    },
    toggleRunning,
    resetTimer
  }
}

export default useTimer
