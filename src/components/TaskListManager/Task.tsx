import React, { useContext, useEffect, useRef } from 'react'
import { Animated, Pressable, Text, View } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import { type Task } from '../../models/Main'
import { ThemeContext } from '../../context/ThemeProvider'

interface TaskProps {
  task: Task
  active?: boolean
  onDelete?: () => void
  onEdit?: () => void
}

const TaskView = (props: TaskProps): React.ReactNode => {
  const scaleAnim = useRef(new Animated.Value(1)).current
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: props.active ? 1.04 : 1,
      duration: 300,
      useNativeDriver: true
    }).start()
  }, [props.active])

  return (
    <Animated.View
      className={`
        flex flex-row rounded-xl px-3 mx-3 py-2 mb-2 justify-between bg-amber-50 shadow border-4
        ${theme.backgroundColor}
        ${props.active ? theme.accentBorderColor : theme.borderColor}
      `}
      style={{ transform: [{ scale: scaleAnim }] }}
    >
      {/* Task */}
      <View className={'flex flex-col'}>
        <View className={'flex flex-row items-center'}>
          {/* <Text className={'text-green-700 font-bold'}>20%</Text> */}
          {/* <Text className={'font-bold'}> | </Text> */}
          <Text className={'font-semibold text-base'}>{props.task.name}</Text>
        </View>
        <Text className={`${theme.secondaryTextColor} text-xs`}>Created: {props.task.createdAt}</Text>
      </View>
      {/* Controls */}
      <View className={'flex flex-row items-center'}>
        <Pressable onPress={props.onDelete} className={'flex items-center justify-center px-2'}>
          <IonicIcon name={'close'} className={'text-xs'} size={20} />
        </Pressable>
        <Pressable onPress={props.onEdit} className={'flex items-center justify-center px-2'}>
          <IonicIcon name={'pencil-outline'} className={'text-xs'} size={17} />
        </Pressable>
      </View>
    </Animated.View>
  )
}

export default TaskView
