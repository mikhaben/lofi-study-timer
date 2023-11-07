import { View } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import CButton from './CButton'

interface ControllersProps {
  playAction: () => void
  resetAction: () => void
  listAction: () => void
  running: boolean
  seconds: number
}

const Controllers = (props: ControllersProps): any => {
  const { playAction, resetAction, listAction } = props
  return (
    <View className="flex flex-row justify-center w-full pt-20 pb-3">
      <CButton onPress={listAction} title="L" disabled={false}/>
      <CButton
        onPress={resetAction}
        icon={<IonicIcon name={'stop'} size={19} />}
        disabled={!props.running && props.seconds === 0}
      />
      <CButton
        onPress={playAction}
        icon={<IonicIcon name={!props.running ? 'play' : 'pause'} size={19}/>}
      />
    </View>
  )
}

export default Controllers
