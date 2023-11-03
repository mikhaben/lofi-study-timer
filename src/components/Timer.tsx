import { View, Text } from 'react-native'

interface TimerProps {
  seconds: number
}

const Timer = (props: TimerProps): any => {
  return (
    <View className={'w-full h-auto flex flex-row justify-end'}>
      <View className="flex flex-row items-baseline justify-center rounded-full mt-20 mr-5">
        <Text className="text-7xl mr-3">
          0
          <Text className="text-2xl">h</Text>
        </Text>
        <Text className="text-7xl mr-3">
          0
          <Text className="text-2xl">m</Text>
        </Text>
        <Text className="text-4xl">
          {props.seconds}
          <Text className="text-2xl">s</Text>
        </Text>
      </View>
    </View>
  )
}

export default Timer
