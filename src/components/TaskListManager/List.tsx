import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import type { ITask } from '../../models/Main'
import StorageService from '../../services/StorageService'
import Task from '../../components/TaskListManager/Task'

interface ListProps {
  pickTask: (task: ITask) => void
}

const List = ({ pickTask }: ListProps): React.ReactNode => {
  const [items, setItems] = useState<ITask[]>([])

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      const retrievedItems = await StorageService.getTasks()
      setItems(retrievedItems)
    }
    fetchTasks().catch(console.error)
  }, [])

  const editTask = (task: ITask): void => {
    pickTask(task)
  }

  const deleteTask = async (task: ITask): Promise<void> => {
    const updatedItems = items.filter(item => item.id !== task.id)
    setItems(updatedItems)
    await StorageService.removeTask(task.id)
    console.log('deleteTask', task)
  }

  return (
    <ScrollView className={'flex flex-col mb-10'}>
      {items.map((item: ITask, index: number) => (
        <Task
          key={item.id}
          task={item}
          onEdit={editTask.bind(this, item)}
          onDelete={deleteTask.bind(this, item)}
        />
      ))}
    </ScrollView>
  )
}

export default List
