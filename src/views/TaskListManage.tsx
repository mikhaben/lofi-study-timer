import React, { useEffect, useState } from 'react'
import { Pressable, View, Text } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import List from '../components/TaskListManager/List'
import Editor from '../components/TaskListManager/Editor'
import CButton from '../components/CButton'
import CModal from '../components/CModal'
import SmallClockFace from '../components/ClockFace/SmallClockFace'
import { type ITask } from '../models/Main'
import IdGenerator from '../utils/IdGenerator'
import StorageService from '../services/StorageService'

interface TaskListManageProps {
  running: boolean
  formatted: any
  visible: boolean
  closeAction: () => void
}

const TaskListManage = (props: TaskListManageProps): React.ReactNode => {
  const [showEditor, setShowEditor] = useState<boolean>(false)
  const [showList, setShowList] = useState<boolean>(false)
  const [pickedTask, setPickedTask] = useState<ITask | undefined>()

  useEffect(() => {
    setShowList(props.visible)
  }, [props.visible])

  const mainAction = (): void => {
    if (showList) {
      setShowList(false)
      setShowEditor(true)
    } else {
      setPickedTask(undefined)
      setShowList(true)
      setShowEditor(false)
    }
  }

  const closeModal = (): void => {
    props.closeAction()
    setShowList(true)
    setShowEditor(false)
  }

  const pickTaskToEdit = (task: ITask): void => {
    setPickedTask(task)
    setShowList(false)
    setShowEditor(true)
  }

  const addTask = async (): Promise<any> => {
    const id = IdGenerator.numericId()
    const task: ITask = {
      name: id.toString(),
      id,
      createdAt: new Date().toISOString(),
      subtasks: [
        {
          name: 'subtask 1',
          id: IdGenerator.numericId(),
          createdAt: new Date().toISOString(),
          timer: 2321
        },
        {
          name: 'subtask 2',
          id: IdGenerator.numericId(),
          createdAt: new Date().toISOString(),
          timer: 200
        }
      ]
    }
    await StorageService.storeTask(task)
  }

  return (
    <CModal
      visible={props.visible}
      closeAction={closeModal}
    >
      {/* Add btn */}
      <View className={'ml-auto pb-2 pr-1'}>
        <CButton
          onPress={mainAction}
          icon={<IonicIcon name={showList ? 'add' : 'chevron-back-outline'} size={21} />}
          disabled={false}
        />
      </View>
      {/* Content */}
      <View className={'w-full h-4/5 py-2 rounded-2xl bg-amber-50'}>
        {/* Timer */}
        <View className={'flex flex-row justify-between pb-3 pt-1 mx-3'}>
          {props.running && <View className={'pl-4'}>
            <SmallClockFace formatted={props.formatted} running={props.running} />
          </View>}
          {/* <Pressable onPress={closeModal} className={'ml-auto px-4'}> */}
          {/*   <IonicIcon name={'chevron-down-outline'} size={19} /> */}
          {/* </Pressable> */}
        </View>
        <Pressable onPress={addTask}><Text>ADD</Text></Pressable>
        {/* List */}
        {showList && <List pickTask={pickTaskToEdit} />}
        {/* Editor */}
        {showEditor && <Editor task={pickedTask} />}
      </View>
    </CModal>
  )
}

export default TaskListManage
