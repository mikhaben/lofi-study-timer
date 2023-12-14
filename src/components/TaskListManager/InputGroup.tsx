import React from 'react'
import { View, TextInput } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

interface InputGroupProps {
  mainAction: () => void
  isAdd: boolean
}

const InputGroup = ({ mainAction, isAdd }: InputGroupProps): React.ReactNode => {
  return (
    <View className={'flex flex-row gap-2 items-center mb-2'}>

      <TextInput
        placeholder={'my ez task'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block basis-2/4 grow px-2 py-1 shadow-sm'}
      />

      <TextInput
        placeholder={'0m 0s'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block basis-1/4 px-2 py-1 shadow-sm'}
      />

      <IonicIcon
        onPress={mainAction}
        name={isAdd ? 'add' : 'remove-outline'}
        size={19}
      />

    </View>
  )
}

export default InputGroup
