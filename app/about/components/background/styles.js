'use client'

import styled from 'styled-components'
import { Medium, media } from 'styles'

export const TextWrapper = styled.div`
  grid-column: 2 / span 3;
  ${media.tablet`grid-column: 1 / span 3;`}

  .reveal-bg-1 {
    ${Medium}
  }
  .para-2 {
    margin-top: 2vw;
    ${media.tablet`margin-top: 4rem;`}
  }
`
