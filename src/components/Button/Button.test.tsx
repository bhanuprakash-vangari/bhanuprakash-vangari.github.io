import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '@/styles/themes'
import { Button } from './index'

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      {component}
    </ThemeProvider>
  )
}

describe('Button', () => {
  it('renders button with text', () => {
    renderWithTheme(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('renders as link when href is provided', () => {
    renderWithTheme(
      <Button as="a" href="https://example.com">
        Link Button
      </Button>
    )
    expect(screen.getByRole('link', { name: 'Link Button' })).toBeInTheDocument()
  })

  it('shows loading state', () => {
    renderWithTheme(<Button loading>Loading Button</Button>)
    expect(screen.getByRole('button', { name: 'Loading...' })).toBeInTheDocument()
  })

  it('disables button when disabled prop is true', () => {
    renderWithTheme(<Button disabled>Disabled Button</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
