'use client'

import styled from 'styled-components'
import { Display, GridWrapper, Z_INDEX, media } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: inherit;
  opacity: 0;
  padding-top: 1rem;
  z-index: ${Z_INDEX.hero};
`
export const CustomGridWrapper = styled(GridWrapper)`
  height: 100%;
`
export const ImageWrapper = styled.div`
  grid-column: 2 / span 3;
  position: relative;
  display: flex;
  align-self: center;
  width: 100%;
  max-width: 35vmax;
  height: 80svh;
  min-height: 40vw;
  /* border-radius: 2vw; */

  ${media.desktop`max-width: 40vmax;`}
  ${media.tablet`grid-column: 1 / span 3;`}
  ${media.thone`
    max-width: 100%;
    height: 60svh;
  `}
`
export const RevealImg = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.hero};
  /* border-radius: 2vw; */
  transform-origin: bottom center;
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 3;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: -40%;
  z-index: ${Z_INDEX.hero + 1};

  ${media.tablet`
    margin-left: 0;
    right: 10%;
  `}
  ${media.thone`
    position: relative;
    grid-column: 1 / span 3;
    margin-left: 0;
    right: 0;
    transform: unset;
    text-align: center;
  `}

  .reveal-hero-1 {
    ${Display}
    text-transform: uppercase;
    padding-right: 1vw;
  }
`
