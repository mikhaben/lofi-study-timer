import { View, Text } from 'react-native'
import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { type Subtask } from '../models/Main'
import { stringifyTime } from '../utils/timeUtils'

const TaskList = (): any => {
  const { activeTask } = useContext(GlobalContext)
  const recentSubtasks = activeTask?.subtasks.slice(-5).reverse()

  const getSpecificClass = (idx: number): Record<string, string> => {
    if (!recentSubtasks?.length) return { container: '', text: '' }

    const lastIdx = recentSubtasks.length - 1
    switch (idx) {
      case lastIdx:
        // Style for the last (most recent) item
        return {
          container: 'opacity-100',
          text: 'text-lg font-semibold'
        }

      case lastIdx - 1:
        // Second item
        return {
          container: 'opacity-80',
          text: 'text-base'
        }

      case lastIdx - 2:
        // Third item
        return {
          container: 'opacity-60',
          text: 'text-base'
        }

      case lastIdx - 3:
        // Fourth item
        return {
          container: 'opacity-40',
          text: 'text-base'
        }

      default:
        // Style for other items, with decreasing opacity
        return {
          container: 'opacity-20',
          text: 'text-base'
        }
    }
  }

  return (
    <View className={'w-full mt-auto px-3'}>
      {recentSubtasks?.map((item: Subtask, idx: number) => {
        const specificClass = getSpecificClass(idx)
        return (
          <View key={item.id} className={`flex flex-row justify-between p-1 px-2 ${specificClass.container}`}>
            <Text className={`text-right ${specificClass.text}`}>{item.name}</Text>
            <Text className={'text-right'}>{stringifyTime(item.time)}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default TaskList
