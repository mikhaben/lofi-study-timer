import { createContext } from 'react'

import { type Task } from '../models/Main'

interface ITaskListManageContext {
  removeTask: (id: number) => void
  addTask: (task: Task) => void
  pickTask: (task: Task) => void
  pickedTask?: Task
  tasks?: Task[]
}

export const TaskListManageContext = createContext<ITaskListManageContext>({
  removeTask: () => {},
  addTask: () => {},
  pickTask: () => {}
})
