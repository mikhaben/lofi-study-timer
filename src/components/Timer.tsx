import { View, Text } from 'react-native'
import React, { memo } from 'react'

interface TimerProps {
  seconds: number
}

const Timer = (props: TimerProps): React.ReactNode => {
  const hours = Math.floor(props.seconds / 3600)
  const minutes = Math.floor((props.seconds - hours * 3600) / 60)
  const formattedSeconds: number = props.seconds % 60

  return (
    <View className={'w-full h-auto flex flex-row justify-end'}>
      <View className="flex flex-row items-baseline justify-center rounded-full mt-20 mr-5 space-x-3">
        {hours > 0 && (
          <Text>
            <Text className="text-7xl">{hours}</Text>
            <Text className="text-2xl">h</Text>
          </Text>
        )}
        {minutes > 0 && (
          <Text>
            <Text className="text-7xl text-5">{minutes}</Text>
            <Text className="text-2xl">m</Text>
          </Text>
        )}
        <Text>
          <Text className={`text-${minutes > 0 ? '4xl' : '7xl'}`}>{formattedSeconds}</Text>
          <Text className="text-2xl">s</Text>
        </Text>
      </View>
    </View>
  )
}

export default memo(Timer)
