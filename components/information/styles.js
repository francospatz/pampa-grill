'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX, media } from 'styles'

export const InformationSectionWrapper = styled.section`
  position: relative;
  width: 100%;
  z-index: ${Z_INDEX.information_section};
  padding: 8vw 0;

  ${media.tablet`padding: 4rem 0;`}
`
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  p {
    color: ${({ theme }) => `rgb(${theme.gray})`};
    text-transform: uppercase;
  }
`
export const CustomGridWrapper = styled(GridWrapper)``
export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => `rgb(${theme.gray})`};
  margin: 2vw 0 4vw;
  mix-blend-mode: difference;
  transform-origin: left;
  will-change: transform;

  ${media.tablet`margin: 2rem 0 4rem;`}
`
