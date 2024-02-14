'use client'

import styled from 'styled-components'
import { Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  padding: 8vw 0;
  width: 100%;
  z-index: ${Z_INDEX.information_section};

  ${media.thone`padding: 4rem 0;`}
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90svh;
  min-height: 50vw;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  /* ${media.thone`height: 20rem;`} */

  &:not(:first-child) {
    margin-top: 4vw;

    ${media.desktop`margin-top: 4rem;`}
  }
`
