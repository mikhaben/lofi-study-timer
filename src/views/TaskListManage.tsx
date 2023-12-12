import React, { useEffect, useRef, useState } from 'react'
import { View, Pressable, Animated, Modal, TouchableWithoutFeedback } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import CButton from '../components/CButton'
import SmallClockFace from '../components/ClockFace/SmallClockFace'
import List from '../components/TaskListManager/List'
import StorageService from '../services/StorageService'
import IdGenerator from '../utils/IdGenerator'

interface TaskListManageProps {
  closeAction: () => void
  running: boolean
  formatted: any
  visible: boolean
}

const TaskListManage = (props: TaskListManageProps): React.ReactNode => {
  const [showModal, setShowModal] = useState(props.visible)
  const slideAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    toggleModal()
  }, [props.visible])

  const toggleModal = (): void => {
    if (props.visible) {
      setShowModal(true)
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => { setShowModal(false) })
    }
  }

  const slideUpStyle = {
    transform: [{
      translateY: slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [700, 100] // Adjust these values for your modal
      })
    }]
  }

  const addItem = async (): Promise<void> => {
    const id = IdGenerator.numericId()
    await StorageService.storeTask({
      title: id.toString(),
      createdAt: new Date().toISOString(),
      id,
      subtasks: []
    })
    // await StorageService.removeAllTasks()
  }

  return (
    <Modal
      transparent
      visible={showModal}
      onRequestClose={props.closeAction}
    >

      <View className={'flex-1 justify-end'}>
        <TouchableWithoutFeedback onPress={props.closeAction}>
          <View className={'flex-1 absolute w-full h-full bg-black opacity-70'}/>
        </TouchableWithoutFeedback>

        {/* Actual model */}
        <Animated.View className={'rounded-t-xl relative'} style={slideUpStyle}>
          {/* Add btn */}
          <View className={'ml-auto pb-2 pr-1'}>
            <CButton
              onPress={addItem}
              icon={<IonicIcon name={'add'} size={21} />}
              disabled={false}
            />
          </View>

          <View className={'w-full h-4/5 py-2 rounded-2xl bg-amber-50'}>
            {/* Timer */}
            <View className={'flex flex-row justify-between pb-3 pt-1 mx-3'}>
              {props.running && <View className={'pl-4'}>
                <SmallClockFace formatted={props.formatted} running={props.running} />
              </View>}
              <Pressable onPress={props.closeAction} className={'ml-auto px-4'}>
                <IonicIcon name={'chevron-down-outline'} size={19} />
              </Pressable>
            </View>
            {/* List */}
            <List />
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

export default TaskListManage
