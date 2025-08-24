import styled, { css } from 'styled-components'

interface StyledSectionProps {
  $noPadding: boolean
  $backgroundColor: 'white' | 'light' | 'dark'
}

const backgroundColors = {
  white: css`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
  light: css`
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.textPrimary};
  `,
  dark: css`
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  `,
}

export const StyledSection = styled.section<StyledSectionProps>`
  width: 100%;
  position: relative;

  ${({ $backgroundColor }) => backgroundColors[$backgroundColor]}

  ${({ $noPadding, theme }) =>
    !$noPadding &&
    css`
      padding: ${theme.spacing[20]} 0;

      @media (max-width: ${theme.breakpoints.md}) {
        padding: ${theme.spacing[16]} 0;
      }

      @media (max-width: ${theme.breakpoints.sm}) {
        padding: ${theme.spacing[12]} 0;
      }
    `}
`
