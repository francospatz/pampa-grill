'use client'

import { styled } from 'styled-components'
import { Huge, Medium, Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  padding: 8vw 0;
  z-index: ${Z_INDEX.information_section};

  ${media.thone`padding: 4rem 0;`}

  .reveal-about-1 {
    ${Huge};
  }

  .reveal-about-2 {
    ${Medium};
  }
`
export const ContentWrapper = styled.div`
  max-width: 75%;
  padding-bottom: 8vw;

  ${media.thone`
    max-width: 100%;
    padding-bottom: 4rem;
  `}
`
export const TitleWrapper = styled.div`
  max-width: 90%;
`
export const ParagraphWrapper = styled.div`
  grid-column: 2 / span 3;

  ${media.thone`grid-column: 1 / 4;`}
`
export const ButtonWrapper = styled.div`
  grid-column: 2 / span 3;
  margin-top: 4vw;
  transform-origin: left;

  ${media.thone`
    grid-column: 1 / 4;
    margin-top: 2rem;
  `}
`
