'use client'

import styled from 'styled-components'
import { Huge, media } from 'styles'

export const TextWrapper = styled.div`
  grid-column: 2 / span 3;
  ${media.tablet`grid-column: 1 / span 3;`}

  .reveal-phil-1 {
    ${Huge}
  }
`
