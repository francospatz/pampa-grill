'use client'

import styled from 'styled-components'
import { Huge, Normal, media } from 'styles'

export const TextWrapper = styled.div`
  grid-column: 2 / span 3;
  ${media.tablet`grid-column: 1 / span 3;`}

  .reveal-services-1 {
    ${Huge}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export const ServicesCols = styled.div`
  grid-column: 2 / span 3;
  display: flex;
  gap: 6vw;
  padding-top: 4vw;

  ${media.tablet`grid-column: 1 / span 3;`}
`
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;

  .reveal-services-2 {
    ${Normal}
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
`
