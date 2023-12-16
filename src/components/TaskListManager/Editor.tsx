import React, { useContext, useEffect, useRef, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import DragList, { type DragListRenderItemInfo } from 'react-native-draglist'

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

  function keyExtractor (item: Subtask): string {
    return item.id.toString()
  }

  function renderItem (info: DragListRenderItemInfo<Subtask>): React.ReactNode {
    const { item, onDragStart, onDragEnd } = info

    return (
      <InputGroup
        subtask={item}
        onUpdated={updateSubtask}
        removeAction={removeAction.bind(this, item)}
        onPressIn={onDragStart}
        onPressOut={onDragEnd}
      />
    )
  }

  async function onReordered (fromIndex: number, toIndex: number): Promise<void> {
    const copy = [...subtasks] // Don't modify react data in-place
    const removed = copy.splice(fromIndex, 1)

    copy.splice(toIndex, 0, removed[0]) // Now insert at the new pos
    setSubtasks(copy)
  }

  return (
    <FadeInView>
      <View className={'flex flex-col mb-10 px-3'}>

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

        <Text className={'text-xs text-gray-600 px-2 mb-2'}>
          New items will appear at the bottom, you can drag and drop to reorder them
        </Text>

        <DragList
          data={subtasks}
          keyExtractor={keyExtractor}
          onReordered={onReordered}
          renderItem={renderItem}
        />
      </View>
    </FadeInView>
  )
}

export default Editor
