import styled, { css } from 'styled-components'

interface StyledContainerProps {
  $fluid: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  ${({ $fluid, theme }) =>
    !$fluid &&
    css`
      max-width: ${theme.portfolio.containerMaxWidth};
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 ${({ theme }) => theme.spacing[6]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0 ${({ theme }) => theme.spacing[8]};
  }
`
