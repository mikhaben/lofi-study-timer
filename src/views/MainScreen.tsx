import { Text, View } from 'react-native'
import { useState, useEffect } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'

const MainScreen = (): any => {
  const [seconds, setSeconds] = useState<number>(0)
  const [running, setRunning] = useState<boolean>(false)
  const [toggleList, setToggleList] = useState<boolean>(false)
  const [intervalId, setIntervalId] = useState<any>(null)

  const toggleListAction = (): void => {
    setToggleList(!toggleList)
  }

  const toggleRunning = (): void => {
    setRunning(!running)
    if (!running && intervalId === null) {
      const id = setInterval(() => { setSeconds(prev => prev + 1) }, 1000)
      setIntervalId(id)
    } else {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  const resetTimer = (): void => {
    clearInterval(intervalId)
    setIntervalId(null)
    setRunning(false)
    setSeconds(0)
  }

  useEffect(() => {
    return () => {
      if (intervalId !== null) clearInterval(intervalId)
    }
  }, [intervalId])

  return (
    <View className="flex-1 items-center justify-center w-full">
      <Menu />
      <Text className="text-black text-7xl">{seconds}</Text>
      <TaskList />
      <Controllers
        playAction={toggleRunning}
        resetAction={resetTimer}
        listAction={toggleListAction}
        isPlaying={running}
      />
    </View>
  )
}

export default MainScreen
