import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

interface FadeInViewProps {
  children: React.ReactNode
  style?: any
}

const FadeInView = ({ children, style }: FadeInViewProps): React.ReactNode => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true
    }).start()
  }, [])

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim
      }}
    >
      {children}
    </Animated.View>
  )
}

export default FadeInView
