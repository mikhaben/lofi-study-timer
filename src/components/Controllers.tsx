import { View } from 'react-native'
import { useContext } from 'react'

import { TimerContext } from '../context/TimerProvider'

import CButton from './CButton'

interface ControllersProps {
  listAction: () => void
}

const Controllers = ({ listAction }: ControllersProps): any => {
  const { running, seconds, resetTimer, toggleRunning } = useContext(TimerContext)
  return (
    <View className="flex flex-row justify-center w-full pt-14 pb-3">
      <CButton onPress={listAction} title="L" disabled={false}/>
      <CButton
        onPress={resetTimer}
        icon={'stop'}
        iconSize={19}
        disabled={!running && seconds === 0}
      />
      <CButton
        onPress={toggleRunning}
        icon={!running ? 'play' : 'pause'}
        iconSize={19}
      />
    </View>
  )
}

export default Controllers
