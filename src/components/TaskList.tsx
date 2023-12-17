import { View, Text } from 'react-native'
import { useContext, useEffect, useState } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { type Subtask } from '../models/Main'
import { stringifyTime } from '../utils/timeUtils'

import FadeInView from './FadeInView'

const TaskList = (): any => {
  const { activeTask, seconds, running, toggleRunning, resetTimer } = useContext(GlobalContext)
  const [recent, setRecent] = useState<Subtask[]>([])
  const [total, setTotal] = useState<number>(0)
  const [completed, setCompleted] = useState<boolean>(false)

  useEffect(() => {
    // reset the timer if the active task changes
    if (running) resetTimer()
    setCompleted(false)
    calculateRemainingTime()
  }, [activeTask])

  useEffect(() => {
    // if the timer is reset, reset the completed state
    const isTask = activeTask && activeTask?.subtasks?.length > 0
    const isReset = seconds === 0 && !running && completed
    if (isTask && isReset) {
      setCompleted(false)
      setTotal(0)
      calculateRemainingTime()
    }

    if (completed) return

    calculateRemainingTime()
  }, [seconds])

  const calculateRemainingTime = (): void => {
    const updatedSubtasks: Subtask[] = []
    let cumulativeTime = 0
    let totalRemainingTime = 0

    if (!activeTask) return

    for (const subtask of activeTask.subtasks) {
      cumulativeTime += subtask.time
      if (cumulativeTime > seconds) {
        totalRemainingTime += (cumulativeTime > seconds && updatedSubtasks.length === 0)
          ? cumulativeTime - seconds
          : subtask.time
        updatedSubtasks.push(subtask)
      }
    }

    setTotal(totalRemainingTime)
    setRecent(updatedSubtasks.slice(0, 5).reverse())

    if (totalRemainingTime === 0) {
      toggleRunning()
      setCompleted(true)
    }
  }

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
          <FadeInView key={item.id}>
            <View className={`flex flex-row justify-between p-1 px-2 ${specificClass.container}`}>
              <Text className={`text-right ${specificClass.text}`}>{item.name}</Text>
              <Text className={'text-right'}>{stringifyTime(item.time)}</Text>
            </View>
          </FadeInView>
        )
      })}
      {activeTask && <Text className={'ml-auto px-2 text-violet-900 font-semibold'}>
        {total > 0 ? `Remaining: ${stringifyTime(total)}` : 'You have all done, great success!'}
      </Text>}
    </View>
  )
}

export default TaskList
