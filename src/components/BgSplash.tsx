import LottieView, { type AnimationObject } from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'

interface Splash {
  id: string
  name: string
  file: AnimationObject
  colorClass: string
  speed?: number
}

const Splashes: Splash[] = [
  {
    name: 'work guy',
    file: require('../assets/lottie/work-guy.json'),
    id: '1',
    colorClass: 'bg-amber-50',
    speed: 0.4
  },
  {
    name: 'chill on bad',
    file: require('../assets/lottie/chill-on-bad.json'),
    id: '1',
    colorClass: 'bg-cyan-50'
  }
]

const BgSplash = (): React.ReactNode => {
  const splash: Splash = Splashes[0]

  return (
    <View className={`absolute w-full h-full ${splash.colorClass}`}>
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
