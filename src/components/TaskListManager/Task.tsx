import React from 'react'
import { Pressable, Text, View } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

interface ITask {
  title: string
  progress: number
  createdAt: string
}

const Task = (props: ITask): React.ReactNode => {
  return (
    <View className={'flex flex-row rounded px-3 mx-3 py-2 mb-2 justify-between bg-amber-50 shadow'}>
      {/* Task */}
      <View className={'flex flex-col'}>
        <View className={'flex flex-row items-center'}>
          <Text className={'text-green-700 font-bold'}>{props.progress}%</Text>
          <Text className={'font-bold'}> | </Text>
          <Text className={'font-semibold text-base'}>{props.title}</Text>
        </View>
        <Text className={'text-gray-600 text-xs'}>{props.createdAt}</Text>
      </View>
      {/* Controls */}
      <View className={'flex flex-row items-center'}>
        <Pressable className={'flex items-center justify-center px-2'}>
          <IonicIcon name={'close'} className={'text-gray-600 text-xs'} size={20} />
        </Pressable>
        <Pressable className={'flex items-center justify-center px-2'}>
          <IonicIcon name={'pencil-outline'} className={'text-gray-600 text-xs'} size={17} />
        </Pressable>
      </View>
    </View>
  )
}

export default Task
