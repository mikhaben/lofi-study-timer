import React, { useContext, useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput, View } from 'react-native'

import { Subtask, Task } from '../../models/Main'
import { TaskListManageContext } from '../../context/TaskListManagerContext'
import FadeInView from '../FadeInView'
import CButton from '../CButton'

import InputGroup from './InputGroup'

const Editor = (): React.ReactNode => {
  const {
    addTask,
    pickedTask
  } = useContext(TaskListManageContext)

  const [subtasks, setSubtasks] = useState(pickedTask?.subtasks ?? [])
  const [name, setName] = useState(pickedTask?.name ?? '')
  // useRef is used to keep the value of subtasks in memory
  // when the component is unmounted
  const subtasksRef = useRef(subtasks)
  const nameRef = useRef(name)

  useEffect(() => {
    nameRef.current = name
  }, [name])

  useEffect(() => {
    subtasksRef.current = subtasks
  }, [subtasks])

  useEffect(() => {
    const saveTask = async (): Promise<void> => {
      const taskToSave = new Task({
        name: nameRef.current || 'Untitled',
        id: pickedTask?.id,
        createdAt: pickedTask?.createdAt,
        subtasks: subtasksRef.current
      })
      addTask(taskToSave)
    }

    return () => {
      saveTask().catch(console.error)
    }
  }, [])

  const addAction = (): void => {
    const defaultSubtask = new Subtask({ name: '' })
    const updatedSubtasks = [...subtasks, defaultSubtask]
    setSubtasks(updatedSubtasks)
  }

  const removeAction = (item: Subtask): void => {
    const updatedSubtasks = subtasks.filter((task) => (item.id !== task.id))
    setSubtasks(updatedSubtasks)
  }

  const updateSubtask = (item: Subtask): void => {
    const updatedSubtasks = subtasks.map((subtask) => {
      if (subtask.id === item.id) {
        return item
      }
      return subtask
    })
    setSubtasks(updatedSubtasks)
  }

  return (
    <FadeInView>
      <ScrollView className={'flex flex-col mb-10 px-3'}>

        <View className={'flex flex-row items-center justify-center mb-3'}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder={'Title'}
            className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block grow px-2 py-2 shadow-sm'}
          />
          <CButton
            onPress={addAction}
            small={true}
            icon={'add'}
            iconSize={14}
            customClass={'ml-2 w-9 h-9'}
          />
        </View>

        {subtasks.map((subtask) => (
          <InputGroup
            key={subtask.id}
            subtask={subtask}
            onUpdated={updateSubtask}
            removeAction={removeAction.bind(this, subtask)}
          />
        ))}
      </ScrollView>
    </FadeInView>
  )
}

export default Editor
