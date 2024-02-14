'use client'

import styled from 'styled-components'
import { Display, Medium, Z_INDEX, media } from 'styles'

export const StyledFooter = styled.footer`
  position: relative;
  width: 100vw;
  height: inherit;
  z-index: ${Z_INDEX.footer};
`
export const InnerContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  padding: 4vw 0;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => `transparent`};
`
export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .reveal-footer-2 {
    text-align: center;

    a {
      color: ${({ theme }) => `rgb(${theme.gray})`};
      ${Medium}
    }
  }
`
export const TitleWrapper = styled.div`
  text-align: center;
  padding-bottom: 4vw;

  ${media.thone`padding-bottom: 4rem;`}

  .bottom {
    margin-top: -2vw;
    ${media.thone`margin-top: 0;`}
  }
  .reveal-footer-1 {
    ${Display}
  }
`
export const BottomWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  padding: 3vw 4vw;
  width: 100%;
  bottom: 0;
  left: 0;

  .hide {
    ${media.phone`display: none;`}
  }

  ${media.thone`padding: 1.5rem 1.5rem;`}
`
export const LinkWrapper = styled.div`
  display: flex;
  gap: 2vw;

  ${media.thone`gap: 1rem;`}
`
