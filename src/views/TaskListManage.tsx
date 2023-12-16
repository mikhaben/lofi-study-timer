import React, { useEffect, useState } from 'react'
import { View } from 'react-native'

import List from '../components/TaskListManager/List'
import Editor from '../components/TaskListManager/Editor'
import CButton from '../components/CButton'
import CModal from '../components/CModal'
import SmallClockFace from '../components/ClockFace/SmallClockFace'
import { type Task } from '../models/Main'
import StorageService from '../services/StorageService'
import { TaskListManageContext } from '../context/TaskListManagerContext'

interface TaskListManageProps {
  running: boolean
  formatted: any
  visible: boolean
  closeAction: () => void
}

const TaskListManage = (props: TaskListManageProps): React.ReactNode => {
  const [isList, setIsList] = useState<boolean>(true)
  const [pickedTask, setPickedTask] = useState<Task | undefined>()
  const [activeTask, setActiveTask] = useState<Task | undefined>()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      const storedTasks = await StorageService.getTasks()
      setTasks(storedTasks)
    }
    fetchTasks().catch(console.error)
  }, [props.visible])

  const setAsActive = (task: Task): void => {
    setActiveTask(task)
  }

  const removeTask = async (id: number): Promise<void> => {
    const updated = tasks.filter((item: Task) => item.id !== id)
    setTasks(updated)
    await StorageService.removeTask(id)
  }

  const pickTask = (task: Task): void => {
    setPickedTask(task)
    setIsList(false)
  }

  const mainAction = (): void => {
    setPickedTask(undefined)
    setIsList(!isList)
  }

  const closeModal = (): void => {
    props.closeAction()
    setPickedTask(undefined)
    setIsList(true)
  }

  const addTask = async (task: Task): Promise<any> => {
    const index = tasks.findIndex(t => t.id === task.id)
    if (index !== -1) {
      const updated = tasks.map((item: Task) => {
        if (item.id === task.id) {
          return task
        }
        return item
      })
      setTasks(updated)
    } else {
      const updated = [...tasks, task]
      setTasks(updated)
    }

    await StorageService.storeTask(task)
  }

  return (
    <CModal
      visible={props.visible}
      closeAction={closeModal}
    >
      {/* Add btn */}
      <View className={'ml-auto pb-2 pr-1'}>
        <CButton
          onPress={mainAction}
          icon={isList ? 'add' : 'chevron-back-outline'}
        />
      </View>

      {/* Content */}
      <View className={'w-full h-4/5 py-2 rounded-2xl bg-amber-50'}>

        {/* Timer */}
        <View className={'flex flex-row justify-between pb-3 pt-1 mx-3'}>
          {props.running && <View className={'pl-4'}>
            <SmallClockFace formatted={props.formatted} running={props.running} />
          </View>}
        </View>

        {/* List, Editor */}
        <TaskListManageContext.Provider value={{
          removeTask,
          addTask,
          pickTask,
          setAsActive,
          pickedTask,
          activeTask,
          tasks
        }}>
          {isList ? <List /> : <Editor />}
        </TaskListManageContext.Provider>

      </View>
    </CModal>
  )
}

export default TaskListManage
