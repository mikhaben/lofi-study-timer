import AsyncStorage from '@react-native-async-storage/async-storage'

import { type Task } from '../models/Main'

export default class StorageService {
  private static logError (e: any): void {
    console.error(e)
  }

  static async storeTask (task: Task): Promise<void> {
    try {
      const tasks = await this.getTasks()
      // if same id exists, replace it
      const index = tasks.findIndex(t => t.id === task.id)
      if (index > -1) {
        tasks[index] = task
      } else {
        tasks.push(task)
      }
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (e) {
      this.logError(e)
    }
  }

  static async getTasks (): Promise<Task[]> {
    try {
      const value = await AsyncStorage.getItem('tasks')
      if (!value) {
        return []
      }
      return JSON.parse(value)
    } catch (e) {
      this.logError(e)
      return []
    }
  }

  static async removeTask (id: number): Promise<void> {
    try {
      const tasks = await this.getTasks()
      const filteredTasks = tasks.filter(task => task.id !== id)
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks))
    } catch (e) {
      this.logError(e)
    }
  }

  static async removeAllTasks (): Promise<void> {
    try {
      await AsyncStorage.removeItem('tasks')
    } catch (e) {
      this.logError(e)
    }
  }
}
