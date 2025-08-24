import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      primaryDark: string
      white: string
      black: string
      light: string
      dark: string
      background: string
      backgroundSecondary: string
      surface: string
      textPrimary: string
      textSecondary: string
      textMuted: string
      textInverse: string
      success: string
      info: string
      warning: string
      danger: string
      border: string
      shadow: string
      overlay: string
      progressColor1: string
      progressColor2: string
      progressColor3: string
      progressColor4: string
      progressColor5: string
      progressColor6: string
      shadowColor: string
    }
    fonts: {
      primary: string
      mono: string
    }
    fontSizes: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
      '6xl': string
      '7xl': string
    }
    fontWeights: {
      thin: number
      extralight: number
      light: number
      normal: number
      medium: number
      semibold: number
      bold: number
      extrabold: number
      black: number
    }
    lineHeights: {
      none: number
      tight: number
      snug: number
      normal: number
      relaxed: number
      loose: number
    }
    spacing: {
      0: string
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      8: string
      10: string
      12: string
      16: string
      20: string
      24: string
      32: string
      40: string
      48: string
      56: string
      64: string
    }
    borderRadius: {
      none: string
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      full: string
    }
    shadows: {
      sm: string
      base: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    zIndices: {
      hide: number
      auto: string
      base: number
      docked: number
      dropdown: number
      sticky: number
      banner: number
      overlay: number
      modal: number
      popover: number
      skipLink: number
      toast: number
      tooltip: number
    }
    transitions: {
      fast: string
      base: string
      slow: string
      slower: string
    }
    portfolio: {
      navHeight: string
      heroMinHeight: string
      sectionPadding: string
      containerMaxWidth: string
      animationDuration: string
    }
  }
}
