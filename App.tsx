import { StatusBar } from 'expo-status-bar'
import { View, SafeAreaView } from 'react-native'

import MainScreen from './src/views/MainScreen'

const App = (): any => {
  return (
    <View className="flex-1 bg-primary">
      <SafeAreaView className="flex-1 w-full">
        <MainScreen/>
        <StatusBar style="dark" />
      </SafeAreaView>
    </View>
  )
}

export default App
