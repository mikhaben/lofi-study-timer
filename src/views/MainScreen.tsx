import { View } from 'react-native'
import React, { useState } from 'react'

import Controllers from '../components/Controllers'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'
import BigClockFace from '../components/BigClockFace'
import GlobalProvider from '../context/GlobalProvider'
import Promo from '../components/Promo'

import TaskListManage from './TaskListManage'

const MainScreen = (): React.ReactNode => {
  const [toggleList, setToggleList] = useState<boolean>(false)
  const [togglePromo, setTogglePromo] = useState<boolean>(false)

  const toggleListAction = (): void => {
    setToggleList(!toggleList)
  }

  const togglePromoAction = (): void => {
    setTogglePromo(!togglePromo)
  }

  return (
    <GlobalProvider>
      <View className="flex-1 items-center justify-center w-full relative">
        <Menu togglePromo={togglePromoAction} />
        <BigClockFace />
        <TaskList />
        <TaskListManage
          visible={toggleList}
          closeAction={toggleListAction}
        />
        <Promo
          visible={togglePromo}
          closeAction={togglePromoAction}
        />
        <Controllers
          listAction={toggleListAction}
        />
      </View>
    </GlobalProvider>
  )
}

export default MainScreen
