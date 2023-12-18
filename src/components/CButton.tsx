import { Pressable, Text } from 'react-native'
import React, { useContext } from 'react'
import IonicIcon from '@expo/vector-icons/Ionicons'

import { ThemeContext } from '../context/ThemeProvider'

interface ButtonProps {
  title?: string
  icon?: string | any
  iconSize?: number
  disabled?: boolean
  small?: boolean
  customClass?: string
  onPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
}

const CButton = (props: ButtonProps): any => {
  const { theme } = useContext(ThemeContext)
  const iconSize = props.iconSize ?? (props.small ? 14 : 21)

  return (
    <Pressable
      className={`
        ${props.disabled ? theme.secondaryBackgroundColor : theme.accentBackgroundColor}
        ${props.small ? 'w-6 h-6 rounded-md' : 'w-12 h-12 rounded-2xl mx-3'}
        ${props.customClass ?? ''}
        shadow-sm flex justify-center items-center`
      }
      onPress={props.onPress}
      onPressIn={props.onPressIn}
      onPressOut={props.onPressOut}
      disabled={props.disabled}
    >
      {props.icon && <IonicIcon name={props.icon} size={iconSize}/> }
      {props.title && <Text className="font-bold uppercase text-lg">{props.title}</Text>}
    </Pressable>
  )
}

export default CButton
