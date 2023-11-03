import { View } from 'react-native'
import React, { useState, useEffect } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import Timer from '../components/Timer'
import TaskList from '../components/TaskList'

const MainScreen = (): React.ReactNode => {
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
      <Timer seconds={seconds} />
      <TaskList />
      <Controllers
        playAction={toggleRunning}
        resetAction={resetTimer}
        listAction={toggleListAction}
        running={running}
        seconds={seconds}
      />
    </View>
  )
}

export default MainScreen
