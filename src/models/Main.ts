export interface ITimer {
  running: boolean
  seconds: number
  formatted: {
    hours: number
    minutes: number
    seconds: number
  }
}

export interface ISubtask {
  name: string
  id: number
  timer: number
  completedTime?: number
  // to sort by
  createdAt: string
}

export interface ITask {
  name: string
  id: number
  createdAt: string
  subtasks: ISubtask[]
}
