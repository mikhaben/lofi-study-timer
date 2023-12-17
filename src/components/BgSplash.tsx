import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'

import { ThemeNames, Themes } from '../models/Theme'

const BgSplash = (): React.ReactNode => {
  const theme = Themes[ThemeNames.VIOLET]
  const splash = theme.splash
  const colorClass = theme.backgroundColor
  console.log(colorClass)

  return (
    <View className={`absolute w-full h-full ${colorClass}`}>
      <LottieView
        source={splash.file}
        autoPlay
        loop
        speed={splash.speed ?? 1}
      />
    </View>
  )
}

export default BgSplash
