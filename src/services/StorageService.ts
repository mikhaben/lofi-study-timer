import AsyncStorage from '@react-native-async-storage/async-storage'

import { type ITask } from '../models/Main'

export default class StorageService {
  static async storeTask (task: ITask): Promise<void> {
    try {
      const tasks = await this.getTasks()
      tasks.push(task)
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (e) {

    }
  }

  static async getTasks (): Promise<ITask[]> {
    try {
      const value = await AsyncStorage.getItem('tasks')
      if (!value) {
        return []
      }
      return JSON.parse(value)
    } catch (e) {
      return []
    }
  }

  static async removeAllTasks (): Promise<void> {
    try {
      await AsyncStorage.removeItem('tasks')
    } catch (e) {
    }
  }
}
