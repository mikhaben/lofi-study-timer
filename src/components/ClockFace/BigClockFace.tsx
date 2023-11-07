import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { type ITimer } from '../../models/Main'

const BigClockFace = (props: { formatted: ITimer['formatted'] }): React.ReactNode => {
  return (
    <View className={'w-full h-auto flex flex-row justify-end'}>
      <View className="flex flex-row items-baseline justify-center rounded-full mt-20 mr-5 space-x-3">
        {props.formatted.hours > 0 && (
          <Text>
            <Text className="text-7xl">{props.formatted.hours}</Text>
            <Text className="text-2xl">h</Text>
          </Text>
        )}
        {props.formatted.minutes > 0 && (
          <Text>
            <Text className="text-7xl text-5">{props.formatted.minutes}</Text>
            <Text className="text-2xl">m</Text>
          </Text>
        )}
        <Text>
          <Text className={props.formatted.minutes > 0 ? 'text-5xl' : 'text-7xl'}>{props.formatted.seconds}</Text>
          <Text className="text-2xl">s</Text>
        </Text>
      </View>
    </View>
  )
}

export default memo(BigClockFace)
