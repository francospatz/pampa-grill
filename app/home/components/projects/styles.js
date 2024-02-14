'use client'

import styled from 'styled-components'
import { Z_INDEX, media } from 'styles'

export const ProjectsArray = styled.div`
  grid-column: 1 / span 3;
  display: grid;
  --fr-value-1: 1fr;
  --fr-value-2: 1fr;
  --fr-value-3: 1fr;
  grid-template-columns: var(--fr-value-1) var(--fr-value-2) var(--fr-value-3);
  gap: 2vw;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2rem;
  `}
`
export const ProjectWrapper = styled.a`
  position: relative;
  width: 100%;
  height: 80svh;
  min-height: 40vw;
  border-radius: 2vw;
  pointer-events: all;
  text-decoration: none;
  transform-origin: top center;
  color: ${({ theme }) => `rgb(${theme.text})`};
  cursor: pointer;
`
export const OverlayInfo = styled.div`
  position: absolute;
  padding: 2vw;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  z-index: ${Z_INDEX.information_section + 1};
`
