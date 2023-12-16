import React, { memo, useContext } from 'react'
import { Text, View } from 'react-native'

import { GlobalContext } from '../context/GlobalContext'

const BigClockFace = (): React.ReactNode => {
  const { formatted } = useContext(GlobalContext)

  return (
    <View className={'w-full h-auto flex flex-row justify-end'}>
      <View className="flex flex-row items-baseline justify-center rounded-full mt-20 mr-5 space-x-3">
        {formatted.hours > 0 && (
          <Text>
            <Text className="text-7xl">{formatted.hours}</Text>
            <Text className="text-2xl">h</Text>
          </Text>
        )}
        {formatted.minutes > 0 && (
          <Text>
            <Text className="text-7xl text-5">{formatted.minutes}</Text>
            <Text className="text-2xl">m</Text>
          </Text>
        )}
        <Text>
          <Text className={formatted.minutes > 0 ? 'text-5xl' : 'text-7xl'}>{formatted.seconds}</Text>
          <Text className="text-2xl">s</Text>
        </Text>
      </View>
    </View>
  )
}

export default memo(BigClockFace)
