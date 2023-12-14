import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput } from 'react-native'

import { type ISubtask, type ITask } from '../../models/Main'
import IdGenerator from '../../utils/IdGenerator'
import StorageService from '../../services/StorageService'

import InputGroup from './InputGroup'

interface EditorProps {
  task?: ITask
}

const Editor = ({ task }: EditorProps): React.ReactNode => {
  const [subtasks, setSubtasks] = useState(task?.subtasks ?? [])
  const [name, setName] = useState(task?.name ?? '')
  // useRef is used to keep the value of subtasks in memory
  // when the component is unmounted
  const subtasksRef = useRef(subtasks)

  useEffect(() => {
    subtasksRef.current = subtasks
  }, [subtasks])

  useEffect(() => {
    const saveTask = async (): Promise<void> => {
      const taskToSave: ITask = {
        name,
        id: task?.id ?? IdGenerator.numericId(),
        createdAt: task?.createdAt ?? new Date().toISOString(),
        subtasks: subtasksRef.current
      }
      await StorageService.storeTask(taskToSave)
    }

    return () => {
      saveTask().catch(console.error)
    }
  }, [])

  const firstInputAction = (): void => {
    if (isEmpty()) {
      addAction()
    } else {
      removeAction(subtasks[0])
    }
  }

  const updateAction = (item?: ISubtask): any => {
    const isAdd = item ? isLast(subtasks.indexOf(item)) : isEmpty()
    if (isAdd) {
      addAction()
    } else {
      removeAction(item ?? subtasks[0])
    }
  }

  const addAction = (): void => {
    const emptySubtask: ISubtask = {
      name: '',
      timer: 0,
      id: IdGenerator.numericId(),
      createdAt: new Date().toISOString()
    }

    const updatedSubtasks = [...subtasks, emptySubtask]
    setSubtasks(updatedSubtasks)
  }

  const removeAction = (item: ISubtask): void => {
    const updatedSubtasks = subtasks.filter((task) => (item.id !== task.id))
    setSubtasks(updatedSubtasks)
  }

  const isLast = (index: number): boolean => {
    return index === subtasks.length - 1
  }

  const isEmpty = (): boolean => {
    return subtasks.length === 0
  }

  const updateSubtask = (item: ISubtask): void => {
    const updatedSubtasks = subtasks.map((subtask) => {
      if (subtask.id === item.id) {
        return item
      }
      return subtask
    })
    setSubtasks(updatedSubtasks)
  }

  return (
    <ScrollView className={'flex flex-col mb-10 px-5'}>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder={'Title'}
        className={'bg-amber-50 border border-violet-100 text-gray-900 rounded block grow px-2 py-2 shadow-sm mb-3'}
      />

      {/* <InputGroup */}
      {/*   mainAction={firstInputAction} */}
      {/*   isAdd={isEmpty()} */}
      {/* /> */}
      {subtasks.map((subtask, index) => (
        <InputGroup
          key={subtask.id}
          subtask={subtask}
          onUpdated={updateSubtask}
          mainAction={updateAction.bind(this, subtask)}
          isAdd={isLast(index)}
        />
      ))}
    </ScrollView>
  )
}

export default Editor
