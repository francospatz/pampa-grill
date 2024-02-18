'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `rgb(${theme.black})`};
  z-index: ${Z_INDEX.transition};
  position: fixed;
  will-change: transform, border-bottom-left-radius, border-top-left-radius;
`

export default function TransitionElement() {
  return <Wrapper id="transition-element" />
}
