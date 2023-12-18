import React, { useContext } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import TaskView from '../../components/TaskListManager/Task'
import { type Task } from '../../models/Main'
import { TaskListManageContext } from '../../context/TaskListManagerContext'
import FadeInView from '../FadeInView'
import { ThemeContext } from '../../context/ThemeProvider'

const List = (): React.ReactNode => {
  const { theme } = useContext(ThemeContext)
  const {
    tasks,
    activeTask,
    pickTask,
    removeTask,
    setAsActive
  } = useContext(TaskListManageContext)

  return (
    <FadeInView>
      <ScrollView className={'flex flex-col mb-10'}>
        {!tasks?.length &&
          <View className={'mx-5'}>
            <Text className={'text-2xl text-center'}>No tasks for today</Text>
            <Text className={`text-sm text-center ${theme.accentTextColor}`}>Enjoy this moment 😊</Text>
          </View>
        }

        {tasks?.map((item: Task) => (
          <Pressable onPress={setAsActive.bind(this, item)} key={item.id}>
            <TaskView
              task={item}
              active={activeTask?.id === item.id}
              onEdit={pickTask.bind(this, item)}
              onDelete={removeTask.bind(this, item.id)}
            />
          </Pressable>
        ))}
      </ScrollView>
    </FadeInView>
  )
}

export default List
