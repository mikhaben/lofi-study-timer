import { Pressable, Text } from 'react-native'
import React from 'react'
import IonicIcon from '@expo/vector-icons/Ionicons'

interface ButtonProps {
  onPress: () => void
  title?: string
  icon?: string | any
  iconSize?: number
  disabled?: boolean
  small?: boolean
  customClass?: string
}

const CButton = (props: ButtonProps): any => {
  const iconSize = props.iconSize ?? (props.small ? 14 : 21)

  return (
    <Pressable
      className={`
        ${props.disabled ? 'bg-zinc-300' : 'bg-violet-300'}
        ${props.small ? 'w-6 h-6 rounded-md' : 'w-12 h-12 rounded-2xl mx-3'}
        ${props.customClass ?? ''}
        shadow-sm flex justify-center items-center`
      }
      onPress={props.disabled ? undefined : props.onPress}
    >
      {props.icon && <IonicIcon name={props.icon} size={iconSize}/> }
      {props.title && <Text className="font-bold uppercase text-lg">{props.title}</Text>}
    </Pressable>
  )
}

export default CButton
