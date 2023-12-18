import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'
import React from 'react'

import MainScreen from './src/views/MainScreen'
import BgSplash from './src/components/BgSplash'
import { ThemeProvider } from './src/context/ThemeProvider'
import BgOverlay from './src/components/BgOverlay'

const App = (): React.ReactNode => {
  return (
    <ThemeProvider>
      <View className="flex-1 flex-col">
        <BgSplash />
        <SafeAreaView className="flex-1 w-full h-auto">
          <MainScreen/>
          <StatusBar style="dark" />
        </SafeAreaView>
        <BgOverlay />
      </View>
    </ThemeProvider>
  )
}

export default App
