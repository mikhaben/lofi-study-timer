export interface ITimer {
  running: boolean
  seconds: number
  formatted: {
    hours: number
    minutes: number
    seconds: number
  }
}

export interface ITask {
  title: string
  progress: number
  createdAt: string
}
