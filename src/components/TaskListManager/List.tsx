import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'

import TaskView from '../../components/TaskListManager/Task'
import { type Task } from '../../models/Main'
import { TaskListManageContext } from '../../context/TaskListManagerContext'
import FadeInView from '../FadeInView'

const List = (): React.ReactNode => {
  const {
    tasks,
    pickTask,
    removeTask
  } = useContext(TaskListManageContext)

  return (
    <FadeInView>
      <ScrollView className={'flex flex-col mb-10'}>
        {!tasks?.length &&
          <View className={'mx-5'}>
            <Text className={'text-2xl text-center'}>No tasks for today</Text>
            <Text className={'text-sm text-center text-violet-600'}>Enjoy this moment 😊</Text>
          </View>
        }

        {tasks?.map((item: Task) => (
          <TaskView
            key={item.id}
            task={item}
            onEdit={pickTask.bind(this, item)}
            onDelete={removeTask.bind(this, item.id)}
          />
        ))}
      </ScrollView>
    </FadeInView>
  )
}

export default List
