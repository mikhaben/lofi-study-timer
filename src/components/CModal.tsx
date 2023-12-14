import React, { useEffect, useRef, useState } from 'react'
import { View, Animated, Modal, TouchableWithoutFeedback } from 'react-native'

interface ICModalProps {
  children: React.ReactNode
  visible: boolean
  closeAction: () => void
}

const CModal = (props: ICModalProps): React.ReactNode => {
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
        <Animated.View className={'rounded-t-xl relative'} style={slideUpStyle}>
          {props.children}
        </Animated.View>
      </View>
    </Modal>
  )
}

export default CModal
