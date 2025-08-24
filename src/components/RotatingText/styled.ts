import styled, { keyframes } from 'styled-components'

const cursorBlink = keyframes`
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
`

export const RotatingTextWrapper = styled.span`
  display: inline-block;
  position: relative;
`

export const RotatingTextCursor = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.textSecondary};
  width: 2px;
  height: 1em;
  margin-left: 2px;
  animation: ${cursorBlink} 1s infinite;
  vertical-align: text-bottom;
`
