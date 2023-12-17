import { createContext, useState } from 'react'

import { type Task } from '../models/Main'

interface TaskProviderProps {
  children: React.ReactNode
}

export interface TaskState {
  activeTask: Task | undefined
  setActiveTask: (task: Task) => void
}

export const TaskContext = createContext<TaskState>({
  activeTask: undefined,
  setActiveTask: () => {}
})

export const TaskProvider = ({ children }: TaskProviderProps): React.ReactNode => {
  const [activeTask, setActiveTask] = useState<Task | undefined>()

  return (
    <TaskContext.Provider value={{ activeTask, setActiveTask }}>
      {children}
    </TaskContext.Provider>
  )
}
