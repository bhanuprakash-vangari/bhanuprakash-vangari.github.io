import { useTheme } from '@/hooks/useTheme'
import { SunIcon, MoonIcon } from '@/components/Icons'
import { ThemeToggleButton, ThemeToggleIcon } from './styled'

export const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme()

  return (
    <ThemeToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} theme`}
      title={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} theme`}
    >
      <ThemeToggleIcon>
        {themeMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </ThemeToggleIcon>
    </ThemeToggleButton>
  )
}

export default ThemeToggle
