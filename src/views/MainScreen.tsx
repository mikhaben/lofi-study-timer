import { View } from 'react-native'
import React, { useState } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'
import useTimer from '../hooks/useTimer'
import BigClockFace from '../components/ClockFace/BigClockFace'

import TaskListManage from './TaskListManage'

const MainScreen = (): React.ReactNode => {
  const { running, seconds, formatted, toggleRunning, resetTimer } = useTimer()
  const [toggleList, setToggleList] = useState<boolean>(false)

  const toggleListAction = (): void => {
    setToggleList(!toggleList)
  }

  return (
    <View className="flex-1 items-center justify-center w-full">
      <Menu />
      <BigClockFace formatted={formatted} />
      <TaskList />
      <Controllers
        playAction={toggleRunning}
        resetAction={resetTimer}
        listAction={toggleListAction}
        running={running}
        seconds={seconds}
      />

      <TaskListManage
        closeAction={toggleListAction}
        running={running}
        formatted={formatted}
        visible={toggleList}
      />
    </View>
  )
}

export default MainScreen
