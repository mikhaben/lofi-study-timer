import React, { createContext, useState } from 'react'

import { type IFormattedTime, type Task } from '../models/Main'
import useTimer from '../hooks/useTimer'

interface GlobalContextProps {
  children: React.ReactNode
}

export interface GlobalState {
  activeTask: Task | undefined
  setActiveTask: (task: Task) => void

  running: boolean
  seconds: number
  formatted: IFormattedTime
  toggleRunning: () => void
  resetTimer: () => void
}

export const GlobalContext = createContext<GlobalState>({
  activeTask: undefined,
  setActiveTask: () => {},

  running: false,
  seconds: 0,
  formatted: { hours: 0, minutes: 0, seconds: 0 },
  toggleRunning: () => {},
  resetTimer: () => {}
})

export const GlobalProvider = ({ children }: GlobalContextProps): React.ReactNode => {
  const { running, seconds, formatted, toggleRunning, resetTimer } = useTimer()
  const [activeTask, setActiveTask] = useState<any>()

  return (
    <GlobalContext.Provider value={{
      activeTask,
      setActiveTask,

      running,
      seconds,
      formatted,
      toggleRunning,
      resetTimer
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
