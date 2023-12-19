import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { ThemeContext } from '../context/ThemeProvider'

import CModal from './CModal'
import CButton from './CButton'

interface PromoProps {
  visible: boolean
  closeAction: () => void
}

// Paywall modal
const Promo = ({ visible, closeAction }: PromoProps): React.ReactNode => {
  const { theme } = useContext(ThemeContext)

  return (
    <CModal visible={visible} closeAction={closeAction}>
      <View className={`w-full h-4/5 py-2 rounded-2xl ${theme.backgroundColor}`}>
        <View className={'flex flex-col px-3'}>
          <Text className={`font-bold text-2xl mb-6 mt-4 text-center ${theme.textColor}`}>Unlock the Full Potential</Text>

          <View className={`flex flex-col mb-3 px-3 py-1 rounded-xl shadow gap-1 ${theme.backgroundColor}`}>
            <Text className={`${theme.textColor} text-lg font-semibold`}>✨ Theme Changer & Exclusive Themes</Text>
            <Text className={`${theme.textColor} text-base`}>Personalize your experience with our theme changer. Plus, get early access to all new themes we release!</Text>
          </View>

          <View className={`flex flex-col mb-3 px-3 py-1 rounded-xl shadow gap-1 ${theme.backgroundColor}`}>
            <Text className={`${theme.textColor} text-lg font-semibold`}>🕒 Complete History at Your Fingertips</Text>
            <Text className={`${theme.textColor} text-base`}>Keep track of your progress with full access to your task history. Reflect, learn, and grow!</Text>
          </View>

          <View className={`flex flex-col mb-3 px-3 py-1 rounded-xl shadow ${theme.backgroundColor}`}>
            <Text className={`${theme.textColor} text-lg font-semibold`}>🌟 Unlimited task list</Text>
            <Text className={`${theme.textColor} text-base`}>Dive into an unlimited list of tasks. Manage more, do more!</Text>
          </View>

          <View className={'flex flex-col pt-12'}>
            <Text className={`pl-5 text-xs ${theme.secondaryTextColor}`}>Cancel anytime. No questions asked.</Text>
            <TouchableOpacity>
              <View className={`flex flex-row items-center justify-between rounded-lg py-2 px-4 ${theme.backgroundColor}`}>
                <Text className={`text-center text-lg font-bold ${theme.textColor}`}>All this for just $1/month!</Text>
                <CButton icon={'rocket-outline'} onPress={() => {}} />
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </CModal>
  )
}

export default Promo
