import { View, Text } from 'react-native'

const TaskList = (): any => {
  return (
    <View className={'w-full mt-auto px-3'}>
      <View className={'flex flex-row justify-between mb-1 opacity-10 p-1 px-2'}>
        <Text className={' text-right font-semibold'}>Sleep well</Text>
        <Text className={' text-right'}>8h 20m</Text>
      </View>
      <View className={'flex flex-row justify-between mb-1 opacity-30 p-1 px-2'}>
        <Text className={' text-right font-semibold'}>Make coffee ☕</Text>
        <Text className={' text-right'}>10m</Text>
      </View>
      <View className={'flex flex-row justify-between mb-1 opacity-50 p-1 px-2'}>
        <Text className={' text-right font-semibold'}>Make breakfast 🥪</Text>
        <Text className={' text-right'}>30m</Text>
      </View>
      <View className={'flex flex-row justify-between mb-1 opacity-70 p-1 px-2'}>
        <Text className={' text-right font-semibold'}>Play with dog and kids</Text>
        <Text className={' text-right'}>1h</Text>
      </View>
      <View className={'flex flex-row justify-between rounded py-1 px-2'}>
        <Text className={' text-right text-lg font-semibold'}>Fix the bug 👨‍💻</Text>
        <Text className={' text-right text-base'}>30m</Text>
      </View>
    </View>)
}

export default TaskList
