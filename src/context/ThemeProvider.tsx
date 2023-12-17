import React, { createContext, useState } from 'react'

interface ThemeProviderProps {
  children: React.ReactNode
}

export enum Theme {
  VIOLET = 'violet',
  AMBER = 'amber',
  PINK = 'pink'
}

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const defaultContext: ThemeContextProps = {
  theme: Theme.VIOLET,
  toggleTheme: () => {}
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContext)

export const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactNode => {
  const [theme, setTheme] = useState<Theme>(Theme.VIOLET)

  const toggleTheme = (): void => {
    // Get all theme values except the current one
    const themes = Object.values(Theme).filter(t => t !== theme)
    // Randomly select a new theme
    const newTheme = themes[Math.floor(Math.random() * themes.length)]
    // Set the new theme
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
