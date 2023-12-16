import { View } from 'react-native'

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
        icon={'stop'}
        iconSize={19}
        disabled={!props.running && props.seconds === 0}
      />
      <CButton
        onPress={playAction}
        icon={!props.running ? 'play' : 'pause'}
        iconSize={19}
      />
    </View>
  )
}

export default Controllers
