import React from 'react'
import { Text, View } from 'react-native'

import { type ITimer } from '../../models/Main'

interface ClockFaceProps {
  formatted: ITimer['formatted']
  running: boolean
}

const SmallClockFace = (props: ClockFaceProps): React.ReactNode => {
  return (
    <View className={'text-xs flex flex-row space-x-1'}>
      { props.formatted.hours > 0 && <Text className={'font-semibold'}>{props.formatted.hours}h</Text>}
      {props.formatted.minutes > 0 && <Text className={'font-semibold'}>{props.formatted.minutes}m</Text>}
      {props.running && <Text className={'font-semibold'}>{props.formatted.seconds}s</Text>}
    </View>
  )
}

export default SmallClockFace
