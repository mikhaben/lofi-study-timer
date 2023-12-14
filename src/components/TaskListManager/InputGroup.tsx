import React, { useState } from 'react'
import { View, TextInput } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import { type ISubtask } from '../../models/Main'

interface InputGroupProps {
  subtask?: ISubtask
  mainAction: () => void
  onUpdated: (subtask: ISubtask) => void
  isAdd: boolean
}

const InputGroup = ({ mainAction, onUpdated, isAdd, subtask }: InputGroupProps): React.ReactNode => {
  const [name, setName] = useState(subtask?.name ?? '')
  const [timer, setTimer] = useState(subtask?.timer ?? 0)

  const setFormattedTimer = (value: string): void => {
    setTimer(Number(value))
    if (subtask) {
      onUpdated({ name, timer: Number(value), createdAt: subtask.createdAt, id: subtask.id })
    }
  }

  const setUpdatedName = (value: string): void => {
    setName(value)
    if (subtask) {
      onUpdated({ name: value, timer, createdAt: subtask.createdAt, id: subtask.id })
    }
  }

  return (
    <View className={'flex flex-row gap-2 items-center mb-2'}>

      <TextInput
        value={name}
        onChangeText={setUpdatedName}
        placeholder={'Task'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block basis-2/4 grow px-2 py-1 shadow-sm'}
      />

      <TextInput
        value={timer.toString()}
        onChangeText={setFormattedTimer}
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
