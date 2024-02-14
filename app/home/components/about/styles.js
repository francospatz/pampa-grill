'use client'

import styled from 'styled-components'
import { Huge, Normal, media } from 'styles'

export const TitleTextWrapper = styled.div`
  grid-column: 1 / span 3;
  max-width: 70%;
  
  ${media.tablet`max-width: 100%;`}

  .reveal-about-1 {
    ${Huge}
  }
`
export const ContentTextWrapper = styled.div`
  grid-column: 2 / span 3;
  max-width: 41%;
  margin-top: 4vw;

  ${media.tablet`
    grid-column: 1 / span 3;
    max-width: 70%;
  `}
  ${media.thone`
    grid-column: 1 / span 3;
    max-width: 100%;
    margin-top: 1rem;
  `}

  .reveal-about-2 {
    ${Normal}
    text-transform: uppercase;
    color: ${({ theme }) => `rgb(${theme.gray})`};
  }
  .reveal-about-3 {
    margin-top: 2vw;

    ${media.tablet`margin-top: 2rem;`}
  }
`
