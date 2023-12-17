import { View, Text, Pressable } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeProvider'

const Menu = (): any => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <View className={'flex flex-row justify-end p-5 w-full items-center space-x-6'}>

      <Pressable>
        <Text className={'text-base'}>Timer</Text>
      </Pressable>

      <Pressable>
        <Text className={'text-base text-violet-900'}>Sprint</Text>
      </Pressable>

      <Pressable>
        <IonicIcon name={'time-outline'} size={22} />
      </Pressable>

      <Pressable onPress={toggleTheme}>
        <IonicIcon name={'paw-outline'} size={22} />
      </Pressable>

    </View>
  )
}

export default Menu
