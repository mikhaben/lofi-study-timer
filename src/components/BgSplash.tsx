import LottieView from 'lottie-react-native'
import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'

import { ThemeContext } from '../context/ThemeProvider'

const BgSplash = (): React.ReactNode => {
  const { theme } = useContext(ThemeContext)
  const [bgColor, setBgColor] = useState(theme.backgroundColor)
  const [newTheme, setNewTheme] = useState(theme)

  useEffect(() => {
    setTimeout(() => {
      setBgColor(theme.backgroundColor)
      setNewTheme(theme)
    }, 600)
  }, [theme])

  return (
    <View className={`absolute w-full h-full ${bgColor}`}>
      <LottieView
        source={newTheme.splash.file}
        autoPlay
        loop
        speed={newTheme.splash.speed ?? 1}
      />
    </View>
  )
}

export default BgSplash
