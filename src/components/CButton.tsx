import { Pressable, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
  onPress: () => void
  title?: string
  variant?: string
  icon?: React.ReactNode
  disabled?: boolean
}

const CButton = (props: ButtonProps): any => {
  return (
    <Pressable
      className={
        `${props.disabled ? 'bg-zinc-300' : 'bg-violet-300'} 
        rounded-full mx-3 shadow-sm w-12 h-12 flex justify-center items-center`
      }
      onPress={props.disabled ? undefined : props.onPress}
    >
      {props.icon ?? props.icon}
      {props.title && <Text className="font-bold uppercase text-lg">{props.title}</Text>}
    </Pressable>
  )
}

export default CButton
