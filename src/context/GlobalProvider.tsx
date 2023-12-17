import React from 'react'

import { TaskProvider } from './TaskProvider'
import { TimerProvider } from './TimerProvider'
import { ThemeProvider } from './ThemeProvider'

interface GlobalProviderProps {
  children: React.ReactNode
}

const GlobalProvider = ({ children }: GlobalProviderProps): React.ReactNode => {
  return (
    <TaskProvider>
      <TimerProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </TimerProvider>
    </TaskProvider>
  )
}

export default GlobalProvider
