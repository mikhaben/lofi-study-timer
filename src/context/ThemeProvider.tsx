import React, { createContext, useState } from 'react'

import { type ITheme, ThemeNames, Themes } from '../models/Theme'

interface ThemeProviderProps {
  children: React.ReactNode
}

interface ThemeContextProps {
  theme: ITheme
  themeName: ThemeNames
  toggleTheme: () => void
}

const defaultContext: ThemeContextProps = {
  theme: Themes[ThemeNames.VIOLET],
  themeName: ThemeNames.VIOLET,
  toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContext)

export const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactNode => {
  const [themeName, setThemeName] = useState<ThemeNames>(ThemeNames.VIOLET)
  const [theme, setTheme] = useState<ITheme>(Themes[themeName])

  const toggleTheme = (): void => {
    // Get all theme values except the current one
    const themes = Object.values(ThemeNames).filter(t => t !== themeName)
    // Randomly select a new theme
    const newTheme = themes[Math.floor(Math.random() * themes.length)]
    // Set the new theme
    setThemeName(newTheme)
    setTheme(Themes[newTheme])
  }

  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
