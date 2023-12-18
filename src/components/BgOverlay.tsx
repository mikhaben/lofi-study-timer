import React, { useContext, useEffect } from 'react'
import { Animated, Easing, View } from 'react-native'

import { ThemeContext } from '../context/ThemeProvider'

const AnimatedFlow = Animated.createAnimatedComponent(View)

const BgOverlay = (): React.ReactNode => {
  const { theme } = useContext(ThemeContext)
  const circleSize = new Animated.Value(0)
  const opacity = new Animated.Value(1)

  useEffect(() => {
    Animated.timing(circleSize, {
      toValue: 1000,
      duration: 700,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.ease)
    }).start(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }).start(() => {
        circleSize.setValue(0)
        opacity.setValue(1)
      })
    })
  }, [theme])

  return (
    <AnimatedFlow
      style={{
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize,
        position: 'absolute',
        right: '50%',
        top: '50%',
        transform: [{ translateX: 500 }, { translateY: -500 }],
        zIndex: 100,
        opacity
      }}
      className={theme.backgroundColor}
    />
  )
}

export default BgOverlay
