import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'
import React from 'react'

import MainScreen from './src/views/MainScreen'
import BgSplash from './src/components/BgSplash'

const App = (): React.ReactNode => {
  return (
    <View className="flex-1 flex-col">
      <BgSplash />
      <SafeAreaView className="flex-1 w-full h-auto">
        <MainScreen/>
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  )
}

export default App
