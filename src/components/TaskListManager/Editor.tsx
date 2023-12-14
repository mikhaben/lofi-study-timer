import React, { useEffect, useState } from 'react'
import { ScrollView, TextInput } from 'react-native'

import { type ITask } from '../../models/Main'

import InputGroup from './InputGroup'

interface EditorProps {
  task?: ITask
}

const Editor = (props: EditorProps): React.ReactNode => {
  const [subtasks, setSubtasks] = useState<any[]>([])

  useEffect(() => {
    console.log('props.task', props.task)
  }, [])

  const addAction = (): void => {
    setSubtasks([...subtasks, { name: ',ka', duration: 2 }])
  }

  const removeAction = (): void => {
    console.log('remove')
  }

  const isLast = (index: number): boolean => {
    return index === subtasks.length - 1
  }

  const isEmpty = (): boolean => {
    return subtasks.length === 0
  }

  return (
    <ScrollView className={'flex flex-col mb-10 px-5'}>

      {!props.task && <TextInput
        placeholder={'Task list name'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block grow px-2 py-2 shadow-sm mb-3'}
      />}

      <InputGroup
        mainAction={isEmpty() ? addAction : removeAction}
        isAdd={isEmpty()}
      />

      {subtasks.map((subtask, index) => (
        <InputGroup
          key={index}
          mainAction={isLast(index) ? addAction : removeAction}
          isAdd={isLast(index)}
        />
      ))}
    </ScrollView>
  )
}

export default Editor
