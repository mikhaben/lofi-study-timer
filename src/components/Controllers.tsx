import { View } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import CButton from './CButton'

interface ControllersProps {
  playAction: () => void
  resetAction: () => void
  listAction: () => void
  isPlaying: boolean
}

const Controllers = (props: ControllersProps): any => {
  const { playAction, resetAction, listAction } = props
  return (
    <View className="flex flex-row mt-auto">
      <CButton
        onPress={playAction}
        icon={<IonicIcon name={'play'} size={19}/>}
      />
      <CButton onPress={resetAction} icon={<IonicIcon name={'stop'} size={19}/>} />
      <CButton onPress={listAction} title="L" disabled={true}/>
    </View>
  )
}

export default Controllers
