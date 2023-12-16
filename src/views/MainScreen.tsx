import { View } from 'react-native'
import React, { useState } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'
import BigClockFace from '../components/BigClockFace'
import { GlobalProvider } from '../context/GlobalContext'

import TaskListManage from './TaskListManage'

const MainScreen = (): React.ReactNode => {
  const [toggleList, setToggleList] = useState<boolean>(false)

  const toggleListAction = (): void => {
    setToggleList(!toggleList)
  }

  return (
    <GlobalProvider>
      <View className="flex-1 items-center justify-center w-full relative">
        <Menu />
        <BigClockFace />
        <TaskList />
        <TaskListManage
          visible={toggleList}
          closeAction={toggleListAction}
        />
        <Controllers
          listAction={toggleListAction}
        />
      </View>
    </GlobalProvider>
  )
}

export default MainScreen
