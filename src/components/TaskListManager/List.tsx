import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'

import { type ITask } from '../../models/Main'
import StorageService from '../../services/StorageService'

import Task from './Task'

const List = (): React.ReactNode => {
  const [items, setItems] = useState<ITask[]>([])

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      const retrievedItems = await StorageService.getTasks()
      setItems(retrievedItems)
    }
    fetchTasks().catch(console.error)
  }, [])

  return (
    <ScrollView className={'flex flex-col mb-10'}>

      {items.map((item: ITask, index: number) => (
        <Task
          key={index}
          title={item.title}
          progress={item.progress}
          createdAt={item.createdAt}
        />
      ))}

    </ScrollView>
  )
}

export default List
