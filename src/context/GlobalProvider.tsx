import React from 'react'

import { TaskProvider } from './TaskProvider'
import { TimerProvider } from './TimerProvider'

interface GlobalProviderProps {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps): React.ReactNode => {
  return (
    <TaskProvider>
      <TimerProvider>
        {children}
      </TimerProvider>
    </TaskProvider>
  )
}

export default GlobalProvider
