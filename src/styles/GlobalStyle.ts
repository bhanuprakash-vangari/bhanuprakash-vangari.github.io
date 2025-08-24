import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  /* Import Poppins font */
  @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');

  /* CSS Reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: left;
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color ${({ theme }) => theme.transitions.base}, 
                color ${({ theme }) => theme.transitions.base};
  }

  /* Remove outline on focus for non-keyboard users */
  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    line-height: ${({ theme }) => theme.lineHeights.tight};
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    background-color: transparent;
    transition: color ${({ theme }) => theme.transitions.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
      text-decoration: underline;
    }

    &:not([href]):not([tabindex]) {
      color: inherit;
      text-decoration: none;

      &:hover,
      &:focus {
        color: inherit;
        text-decoration: none;
      }

      &:focus {
        outline: 0;
      }
    }
  }

  /* Lists */
  ol, ul, dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  /* Images */
  img {
    vertical-align: middle;
    border-style: none;
    max-width: 100%;
    height: auto;
  }

  /* SVG */
  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  /* Tables */
  table {
    border-collapse: collapse;
  }

  /* Forms */
  button {
    border-radius: 0;
    cursor: pointer;
    
    &:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* Utility classes for accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .sr-only-focusable:active,
  .sr-only-focusable:focus {
    position: static;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  /* Container utility */
  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.portfolio.containerMaxWidth};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing[4]};

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.spacing[6]};
    }
  }

  /* Animation classes for AOS-like effects */
  .fade-in {
    opacity: 0;
    animation: fadeIn ${({ theme }) => theme.portfolio.animationDuration} ease-in-out forwards;
  }

  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp ${({ theme }) => theme.portfolio.animationDuration} ease-in-out forwards;
  }

  .fade-in-left {
    opacity: 0;
    transform: translateX(-30px);
    animation: fadeInLeft ${({ theme }) => theme.portfolio.animationDuration} ease-in-out forwards;
  }

  .fade-in-right {
    opacity: 0;
    transform: translateX(30px);
    animation: fadeInRight ${({ theme }) => theme.portfolio.animationDuration} ease-in-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.light};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textSecondary};
    border-radius: ${({ theme }) => theme.borderRadius.base};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  /* Print styles */
  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }

    a:not(.btn) {
      text-decoration: underline;
    }

    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`
