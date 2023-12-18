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
  PINK = 'pink'
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
      id: '1',
      speed: 1
    },

    textColor: 'text-black',
    accentTextColor: 'text-amber-900',
    secondaryTextColor: 'text-gray-600',

    backgroundColor: 'bg-lime-50',
    accentBackgroundColor: 'bg-lime-600',
    secondaryBackgroundColor: 'bg-gray-300',

    borderColor: 'border-violet-50',
    accentBorderColor: 'border-amber-100'
  },
  [ThemeNames.PINK]: {
    splash: {
      name: 'work guy',
      file: require('../assets/lottie/chill-on-bad.json'),
      id: '1',
      speed: 0.4
    },

    textColor: 'text-black',
    accentTextColor: 'text-pink-900',
    secondaryTextColor: 'text-gray-600',

    backgroundColor: 'bg-blue-900',
    accentBackgroundColor: 'bg-pink-300',
    secondaryBackgroundColor: 'bg-zinc-300',

    borderColor: 'border-amber-50',
    accentBorderColor: 'border-pink-100'
  },
  default: {
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
    secondaryBackgroundColor: 'bg-zinc-300',

    borderColor: 'border-amber-50',
    accentBorderColor: 'border-violet-100'
  }
}
