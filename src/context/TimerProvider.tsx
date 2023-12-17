import React, { createContext } from 'react'

import { type IFormattedTime } from '../models/Main'
import useTimer from '../hooks/useTimer'

interface TimerProviderProps {
  children: React.ReactNode
}

export interface TimerState {
  running: boolean
  seconds: number
  formatted: IFormattedTime
  toggleRunning: () => void
  resetTimer: () => void
}

export const TimerContext = createContext<TimerState>({
  running: false,
  seconds: 0,
  formatted: { hours: 0, minutes: 0, seconds: 0 },
  toggleRunning: () => {},
  resetTimer: () => {}
})

export const TimerProvider = ({ children }: TimerProviderProps): React.ReactNode => {
  const { running, seconds, formatted, toggleRunning, resetTimer } = useTimer()

  return (
    <TimerContext.Provider value={{ running, seconds, formatted, toggleRunning, resetTimer }}>
      {children}
    </TimerContext.Provider>
  )
}
