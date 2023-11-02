import { Pressable, Text } from 'react-native'
import React from 'react'

interface ButtonProps {
  onPress: () => void
  title?: string
  variant?: string
  icon?: React.ReactNode
  disabled?: boolean
}

const Button = (props: ButtonProps): any => {
  return (
    <Pressable
      className={
        `${props.disabled ? 'bg-tertiary' : 'bg-secondary'} 
        rounded-full mx-3 shadow-sm w-10 h-10 flex justify-center items-center`
      }
      onPress={props.disabled ? undefined : props.onPress}
    >
      {props.icon ?? props.icon}
      {props.title && <Text className="text-dark font-bold uppercase text-lg">{props.title}</Text>}
    </Pressable>
  )
}

export default Button
