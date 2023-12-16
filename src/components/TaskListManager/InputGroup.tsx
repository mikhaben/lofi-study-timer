import React, { useEffect, useState } from 'react'
import { View, TextInput } from 'react-native'

import { Subtask } from '../../models/Main'
import CButton from '../CButton'
import { parseTimeFromString, stringifyTime } from '../../utils/timeUtils'

interface InputGroupProps {
  subtask?: Subtask
  removeAction: () => void
  onUpdated: (subtask: Subtask) => void
  onPressIn: () => void
  onPressOut: () => void
}

const InputGroup = ({ subtask, removeAction, onPressIn, onPressOut, onUpdated }: InputGroupProps): React.ReactNode => {
  const [name, setName] = useState(subtask?.name ?? '')
  const [time, setTime] = useState(subtask?.time ?? 0)

  const [formattedTime, setFormattedTime] = useState<string>(stringifyTime(time))

  useEffect(() => {
    const updatedSubtask = new Subtask({ name, time, id: subtask?.id })
    onUpdated(updatedSubtask)
  }, [name, time])

  const setUpdatedTime = (value: string): void => {
    setFormattedTime(value)
    const seconds = parseTimeFromString(value)
    setTime(seconds)
  }

  const setUpdatedName = (value: string): void => {
    setName(value)
  }

  return (
    <View className={'flex flex-row gap-2 mb-2 items-center justify-center'}>

      <TextInput
        value={name}
        onChangeText={setUpdatedName}
        placeholder={'Task'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block grow px-2 py-1 shadow-sm'}
      />

      <TextInput
        value={formattedTime}
        onChangeText={setUpdatedTime}
        placeholder={'0m 0s'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block px-2 py-1 basis-1/5 shadow-sm'}
      />

      <CButton
        onPress={removeAction}
        small={true}
        icon={'remove-outline'}
        iconSize={14}
        customClass={'mt-2 ml-2'}
      />

      <CButton
        small={true}
        icon={'swap-vertical-outline'}
        iconSize={14}
        customClass={'mt-2 ml-2'}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      />

    </View>
  )
}

export default InputGroup
