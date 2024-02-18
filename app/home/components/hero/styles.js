'use client'

import styled from 'styled-components'
import { Display, GridWrapper, Normal, Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: inherit;
  
  z-index: ${Z_INDEX.hero};
  /* background-image: url('/gif.gif');
  background-repeat: no-repeat;
  background-size: cover; */
  opacity: 10%;
`
export const ContentWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ${media.thone`height: 70svh;`}

  .reveal-hero-1 {
    ${Display}
  }
  .offset {
    margin-left: -0.61vw;
  }
`
export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.phablet`flex-direction: column;`}
`
export const BottomLine = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -2vw;

  ${media.phablet`justify-content: flex-start;`}
`

export const FooterWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: flex-end;
  padding-bottom: 1.5vw;

  ${media.thone`
    grid-template-columns: 1fr auto;
    align-items: center;
    padding-bottom: 1rem;
  `}

  .reveal-hero-4 {
    color: ${({ theme }) => `rgb(${theme.gray})`};
    text-transform: uppercase;
    ${Normal}
  }
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 2vw;

  ${media.thone`gap: 1rem;`}
`
export const ParagraphWrapper = styled.div`
  grid-column: 2;
  &.hide {
    ${media.thone`display: none;`}
  }

  &:not(.hide) {
    display: none;
    ${media.thone`display: block;`}
  }

  .reveal-hero-3 {
    
    ${Normal}
    text-transform: uppercase;
  }
`

export const AnimatedLogo = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Cosi Times";
  padding: 1em;
  z-index: 1000;
`
