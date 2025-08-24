import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeContext, useThemeLogic } from '@/hooks/useTheme'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeLogic = useThemeLogic()

  return (
    <ThemeContext.Provider value={themeLogic}>
      <StyledThemeProvider theme={themeLogic.theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
