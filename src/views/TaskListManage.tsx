import React from 'react'
import { View, Text, Pressable } from 'react-native'
import IonicIcon from '@expo/vector-icons/Ionicons'

import CButton from '../components/CButton'
import SmallClockFace from '../components/ClockFace/SmallClockFace'

interface TaskListManageProps {
  closeAction: () => void
  running: boolean
  formatted: any
}

const TaskListManage = (props: TaskListManageProps): React.ReactNode => {
  const addItem = (): void => {}

  return (
    <View className={'absolute w-full h-full bottom-0 left-0'}>
      <View className={'ml-auto pb-2'}>
        <CButton
          onPress={addItem}
          icon={<IonicIcon name={'add'} size={21} />}
          disabled={false}
        />
      </View>

      <View className={'w-full h-4/5 px-3 py-2 rounded-2xl bg-violet-50'}>

        <View className={'flex flex-row justify-between pb-3 pt-1'}>
          {props.running && <View className={'pl-4'}>
            <SmallClockFace formatted={props.formatted} running={props.running} />
          </View>}
          <Pressable onPress={props.closeAction} className={'ml-auto px-4'}>
            <IonicIcon name={'chevron-down-outline'} size={19} />
          </Pressable>
        </View>

        <View className={'flex flex-col gap-y-2'}>
          <View className={'flex rounded bg-violet-50 px-3 py-2 shadow'}>
            <View className={'flex flex-row justify-between'}>
              <Text className={'font-semibold text-base'}>⚙️ Do smt...</Text>
              <Text className={'text-green-700 font-bold'}>23%</Text>
            </View>
            <Text className={'text-gray-600 pl-1 text-xs'}>23.22.22</Text>
          </View>

          <View className={'flex rounded bg-violet-50 px-3 py-2 shadow'}>
            <View className={'flex flex-row justify-between'}>
              <Text className={'font-semibold text-base'}>Wash my hand</Text>
              <Text className={'text-green-700 font-bold'}>98%</Text>
            </View>
            <Text className={'text-gray-600 pl-1 text-xs'}>23.22.22</Text>
          </View>

          <View className={'flex rounded bg-violet-50 px-3 py-2 shadow'}>
            <View className={'flex flex-row justify-between'}>
              <Text className={'font-semibold text-base'}>Feed cat</Text>
              <Text className={'text-green-700 font-bold'}>52%</Text>
            </View>
            <Text className={'text-gray-600 pl-1 text-xs'}>23.22.22</Text>
          </View>

        </View>
      </View>
    </View>
  )
}

export default TaskListManage
