import { View, Text, Pressable } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'
import { useContext, useState } from 'react'

import { ThemeContext } from '../context/ThemeProvider'

interface MenuProps {
  togglePromo: () => void
}

const Menu = ({ togglePromo }: MenuProps): any => {
  const [isButtonBlocked, setIsButtonBlocked] = useState(false)
  const { toggleTheme, theme } = useContext(ThemeContext)

  const handleToggleTheme = (): void => {
    if (isButtonBlocked) return

    toggleTheme()
    setIsButtonBlocked(true)

    setTimeout(() => {
      setIsButtonBlocked(false)
    }, 1000)
  }

  return (
    <View className={'flex flex-row justify-end p-5 w-full items-center space-x-6'}>

      {/* <Pressable> */}
      {/*   <Text className={'text-base'}>Timer</Text> */}
      {/* </Pressable> */}

      <Pressable>
        <Text className={`text-base ${theme.accentTextColor}`}>Sprint</Text>
      </Pressable>

      <Pressable onPress={togglePromo}>
        <IonicIcon name={'time-outline'} size={22} />
      </Pressable>

      <Pressable onPress={handleToggleTheme}>
        <IonicIcon name={'paw-outline'} size={22} />
      </Pressable>

    </View>
  )
}

export default Menu
