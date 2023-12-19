import React, { createContext, useEffect, useState } from 'react'

import { type ITheme, ThemeNames, Themes } from '../models/Theme'
import StorageService from '../services/StorageService'
import Loading from '../components/Loading'

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
  const [loading, setLoading] = useState(true)

  // Load the saved theme from storage when the component mounts
  useEffect(() => {
    const loadTheme = async (): Promise<void> => {
      try {
        const savedThemeName = await StorageService.getTheme()
        if (savedThemeName && Themes[savedThemeName as ThemeNames]) {
          setThemeName(savedThemeName as ThemeNames)
          setTheme(Themes[savedThemeName as ThemeNames])
        }
      } catch (error) {
        console.error('Failed to load theme from storage', error)
      }
      setLoading(false)
    }

    loadTheme().catch(console.error)
  }, [])

  const toggleTheme = async (): Promise<void> => {
    // Get an array of all theme names
    const themeNames = Object.values(ThemeNames)
    // Find the index of the current theme
    const currentIndex = themeNames.indexOf(themeName)
    // Calculate the index for the next theme
    // If at the end of the array, loop back to the beginning
    const nextIndex = (currentIndex + 1) % themeNames.length
    // Get the name of the next theme
    const newTheme = themeNames[nextIndex]
    // Set the new theme
    setThemeName(newTheme)
    setTheme(Themes[newTheme])
    // Save the new theme to storage
    await StorageService.saveTheme(newTheme)
  }

  if (loading) return <Loading />
  return (
    <ThemeContext.Provider value={{ theme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
