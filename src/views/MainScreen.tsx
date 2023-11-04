import { View } from 'react-native'
import React, { useState } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import Timer from '../components/Timer'
import TaskList from '../components/TaskList'
import useTimer from '../hooks/useTimer'

const MainScreen = (): React.ReactNode => {
  const { running, seconds, toggleRunning, resetTimer } = useTimer()
  const [toggleList, setToggleList] = useState<boolean>(false)

  const toggleListAction = (): void => {
    setToggleList(!toggleList)
  }

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
