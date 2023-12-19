import type { AnimationObject } from 'lottie-react-native'

export interface ITheme {
  splash: Splash

  textColor: string
  accentTextColor: string
  secondaryTextColor: string

  backgroundColor: string
  accentBackgroundColor: string
  secondaryBackgroundColor: string

  borderColor: string
  accentBorderColor: string
}

export type IThemes = Record<string, ITheme>

interface Splash {
  id: string
  name: string
  file: AnimationObject
  speed?: number
}

export enum ThemeNames {
  VIOLET = 'violet',
  LIME = 'lime',
  ROSE = 'rose',
  YELLOW = 'yellow',
}

export const Themes: IThemes = {
  [ThemeNames.VIOLET]: {
    splash: {
      name: 'work guy',
      file: require('../assets/lottie/work-guy.json'),
      id: '1',
      speed: 0.4
    },

    textColor: 'text-black',
    accentTextColor: 'text-violet-900',
    secondaryTextColor: 'text-gray-600',

    backgroundColor: 'bg-amber-50',
    accentBackgroundColor: 'bg-violet-300',
    secondaryBackgroundColor: 'bg-gray-300',

    borderColor: 'border-amber-50',
    accentBorderColor: 'border-violet-100'
  },
  [ThemeNames.LIME]: {
    splash: {
      name: 'study girl',
      file: require('../assets/lottie/study-girl.json'),
      id: '2',
      speed: 1
    },

    textColor: 'text-black',
    accentTextColor: 'text-green-900',
    secondaryTextColor: 'text-gray-700',

    backgroundColor: 'bg-rose-50',
    accentBackgroundColor: 'bg-lime-600',
    secondaryBackgroundColor: 'bg-gray-300',

    borderColor: 'border-rose-50',
    accentBorderColor: 'border-lime-100'
  },
  [ThemeNames.ROSE]: {
    splash: {
      name: 'meditation rose',
      file: require('../assets/lottie/meditation-rose.json'),
      id: '3',
      speed: 0.8
    },

    textColor: 'text-white',
    accentTextColor: 'text-rose-700',
    secondaryTextColor: 'text-gray-600',

    backgroundColor: 'bg-blue-50',
    accentBackgroundColor: 'bg-rose-400',
    secondaryBackgroundColor: 'bg-zinc-300',

    borderColor: 'border-blue-50',
    accentBorderColor: 'border-rose-100'
  },
  [ThemeNames.YELLOW]: {
    splash: {
      name: 'study boy yellow',
      file: require('../assets/lottie/study-boy-yellow.json'),
      id: '4',
      speed: 1
    },

    textColor: 'text-black',
    accentTextColor: 'text-orange-900',
    secondaryTextColor: 'text-gray-600',

    backgroundColor: 'bg-amber-50',
    accentBackgroundColor: 'bg-yellow-300',
    secondaryBackgroundColor: 'bg-zinc-300',

    borderColor: 'border-amber-50',
    accentBorderColor: 'border-yellow-100'
  }
}
