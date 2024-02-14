'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX, media } from 'styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX.nav};
  color: ${({ theme }) => `rgb(${theme.text})`};
  mix-blend-mode: difference;
  padding: 2vw 0;
  opacity: 0;
  

  ${media.tablet`padding: 1.5rem 0;`}

  a {
    mix-blend-mode: difference;
    text-transform: uppercase;
  }
  .reveal-nav-2 {
    ${media.tablet`display: none;`}
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: center;

  ${media.tablet`grid-template-columns: 1fr auto;`}
`
export const LinksWrapper = styled.nav`
  display: flex;
  gap: 2vw;
  align-items: center;
  
  ${media.tablet`gap: 1rem;`}
`
