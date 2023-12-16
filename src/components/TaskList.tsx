import { View, Text } from 'react-native'
import { useContext, useEffect, useState } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { type Subtask } from '../models/Main'
import { stringifyTime } from '../utils/timeUtils'

const TaskList = (): any => {
  const { activeTask, seconds } = useContext(GlobalContext)
  const [recent, setRecent] = useState<Subtask[]>([])

  useEffect(() => {
    // Slice the first five subtasks, but don't reverse them yet
    const firstFive = activeTask?.subtasks.slice(0, 5) ?? []
    // Check if the first subtask (in the original order) has passed its time
    if (firstFive.length > 0 && firstFive[0].time <= seconds) {
      // Remove the first subtask
      firstFive.shift()
    }
    // Reverse the array for display
    const updated = firstFive.reverse()
    setRecent(updated)
  }, [activeTask?.subtasks, seconds])

  const getSpecificClass = (idx: number): Record<string, string> => {
    if (!recent?.length) return { container: '', text: '' }

    const lastIdx = recent.length - 1
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
      {recent?.map((item: Subtask, idx: number) => {
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
