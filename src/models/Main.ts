import IdGenerator from '../utils/IdGenerator'

export interface ITimer {
  running: boolean
  seconds: number
  formatted: IFormattedTime
}

export interface IFormattedTime {
  hours: number
  minutes: number
  seconds: number
}

export class Task {
  name: string
  id: number
  createdAt: string
  subtasks: Subtask[]

  constructor (task: Partial<Task>) {
    this.name = task.name ?? ''
    this.id = task.id ?? IdGenerator.numericId()
    this.createdAt = task.createdAt ?? new Date().toISOString()
    this.subtasks = task.subtasks ?? []
  }
}

export class Subtask {
  name: string
  id: number
  time: number
  createdAt: string
  completedTime?: number

  constructor (subtask: Partial<Subtask>) {
    this.name = subtask.name ?? ''
    this.id = subtask.id ?? IdGenerator.numericId()
    this.time = subtask.time ?? 0
    this.completedTime = subtask.completedTime
    this.createdAt = subtask.createdAt ?? new Date().toISOString()
  }
}
