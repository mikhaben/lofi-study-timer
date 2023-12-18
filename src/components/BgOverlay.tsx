import React, { useContext, useEffect, useRef } from 'react'
import { Animated, Easing, View } from 'react-native'

import { ThemeContext } from '../context/ThemeProvider'

const AnimatedFlow = Animated.createAnimatedComponent(View)

const BgOverlay = (): React.ReactNode => {
  const { theme } = useContext(ThemeContext)
  const circleSize = new Animated.Value(0)
  const circleSize2 = new Animated.Value(0)
  const opacity = new Animated.Value(1)
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      // First Circle Animation
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

      // Second Circle Animation
      Animated.timing(circleSize2, {
        toValue: 1000,
        duration: 700,
        useNativeDriver: false,
        easing: Easing.inOut(Easing.ease)
      }).start(() => {
        circleSize2.setValue(0)
      })
    } else {
      isMounted.current = true
    }
  }, [theme])

  return (
    <>
      <AnimatedFlow
        style={{
          position: 'absolute',
          right: '50%',
          top: '50%',
          zIndex: 100,
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize,
          opacity,
          transform: [{ translateX: 500 }, { translateY: -500 }]
        }}
        className={theme.backgroundColor}
      />

      <AnimatedFlow
        style={{
          position: 'absolute',
          left: '-50%',
          bottom: '-50%',
          zIndex: 99,
          width: circleSize2,
          height: circleSize2,
          borderRadius: circleSize2,
          transform: [{ translateX: 0 }, { translateY: 0 }]
        }}
        className={theme.accentBackgroundColor}
      />
    </>
  )
}

export default BgOverlay
