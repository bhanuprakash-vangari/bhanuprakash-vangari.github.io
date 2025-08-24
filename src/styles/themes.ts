export const lightTheme = {
  colors: {
    // Primary brand colors
    primary: '#007bff',
    primaryDark: '#0056b3',
    
    // Background colors
    white: '#ffffff',
    black: '#000000',
    light: '#f8f9fa',
    dark: '#343a40',
    background: '#ffffff',
    backgroundSecondary: '#f8f9fa',
    surface: '#ffffff',
    
    // Text colors
    textPrimary: '#212529',
    textSecondary: '#6c757d',
    textMuted: '#6c757d',
    textInverse: '#ffffff',
    
    // Status colors
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545',
    
    // UI colors
    border: '#dee2e6',
    shadow: 'rgba(0, 0, 0, 0.1)',
    overlay: 'rgba(0, 0, 0, 0.5)',
    
    // Progress bar colors
    progressColor1: '#007bff',
    progressColor2: '#28a745',
    progressColor3: '#ffc107',
    progressColor4: '#dc3545',
    progressColor5: '#17a2b8',
    progressColor6: '#6f42c1',
    
    // Legacy colors for compatibility
    shadowColor: 'rgba(0, 0, 0, 0.1)',
  },
  
  fonts: {
    primary: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  
  fontSizes: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
    '7xl': '4.5rem',   // 72px
  },
  
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
    40: '10rem',    // 160px
    48: '12rem',    // 192px
    56: '14rem',    // 224px
    64: '16rem',    // 256px
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
    slower: '500ms ease-in-out',
  },
  
  // Custom portfolio-specific values
  portfolio: {
    navHeight: '70px',
    heroMinHeight: '100vh',
    sectionPadding: '80px 0',
    containerMaxWidth: '1140px',
    animationDuration: '800ms',
  }
} as const

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    // Background colors
    white: '#ffffff',
    black: '#000000',
    light: '#404040',
    dark: '#1a1a1a',
    background: '#1a1a1a',
    backgroundSecondary: '#2d2d2d',
    surface: '#2d2d2d',
    
    // Text colors
    textPrimary: '#ffffff',
    textSecondary: '#b3b3b3',
    textMuted: '#999999',
    textInverse: '#1a1a1a',
    
    // UI colors
    border: '#404040',
    shadow: 'rgba(0, 0, 0, 0.3)',
    overlay: 'rgba(0, 0, 0, 0.7)',
    
    // Legacy colors for compatibility
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  },
} as const

export type Theme = typeof lightTheme
export type ThemeMode = 'light' | 'dark'

// Export default theme for backward compatibility
export const theme = lightTheme
export default lightTheme
