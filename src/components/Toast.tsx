import React, { createContext, useState } from 'react'
import { View, Text } from 'react-native'

interface ToastProps {
  children: React.ReactNode
}

interface IToastContext {
  showToast: (message: string) => void
}

export const ToastContext = createContext<IToastContext>({
  showToast: () => {}
})

export const ToastProvider = ({ children }: ToastProps): React.ReactNode => {
  const [message, setMessage] = useState('')

  const showToast = (msg: string): void => {
    setMessage(msg)
    setTimeout(() => { setMessage('') }, 3000)
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {/* Toast */}
      {message &&
        <View className={'px-5 py-2 bg-red-300 text-center text-black rounded-xl absolute top-0'}>
          <Text>{message}</Text>
        </View>}
      {/* Content */}
      {children}
    </ToastContext.Provider>
  )
}
