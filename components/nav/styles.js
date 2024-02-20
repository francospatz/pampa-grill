'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX, media } from 'styles'
import React from 'react'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${Z_INDEX.nav};
  color: ${({ theme }) => `rgb(${theme.text})`};
  mix-blend-mode: difference;
  padding: 2vw 0;
  //opacity: 0;

  ${media.tablet`padding: 1.5rem 0;`}

  a {
    mix-blend-mode: difference;
    text-transform: uppercase;
  }
  /* .reveal-nav-2 {
    ${media.tablet`display: none;`}
  } */
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: center;
  justify-content: space-around;

  //${media.tablet`grid-template-columns: 1fr auto;`}
`
export const LinksWrapper = styled.nav`
  display: flex;
  gap: 2vw;
  align-items: center;
  justify-content: space-between;
  ${media.tablet`gap: 1rem;`}
`
export const StyledMenuContent = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  /* heihth: 100%; */
  //heigth: 100vh !important;
  //pointer-events: auto !important
  overflow-y: hidden;
  position: fixed;
  z-index: 9998;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  opacity: 0;
`

export const StyledMenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  jusify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  li {
    width: fit-content;
    overflow: hidden;
  }
`

export const StyledMenuLink = styled.a`
  font-weight: 700;
  font-size: 5rem;
  text-transform: uppercase;
  display: inline-block;
  transform: translateY(0);
  text-decoration: none;
  color: ${(props) => props.acolor};
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out; /*gecko*/
  -ms-transition: all 0.5s ease-out; /*IE10*/
  -o-transition: all 0.5s ease-out; /*opera 11.10+*/
  -pie-transition: all 0.5s ease-out; /*PIE*/
  transition: all 0.5s ease-out;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    padding-top: 1.8rem;
    padding-bottom: 1.1rem;
    font-size: 2.2rem;
  }

  &:hover {
    letter-spacing: 2px;
    //color: red;
    /* -webkit-text-fill-color: rgba(255, 255, 255, 0);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #fff; */
  }
`

export const ToggleBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer !important;
`

export const Burger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.75em 2em 1.5em 2em;
  background: rgba(255, 255, 255, 0);
  border-radius: 0.25em;
  outline: none;
  height: 20px;
  width: 28px;
  border: none;
  transition: all 400ms ease-out;
  transition-delay: 0.5s;
  cursor: pointer !important;

  &:before {
    content: "";
    width: 40px;
    height: 2px;
    position: absolute;
    background: #fff;
    transition: all 400ms ease-out;
    transition-delay: 0.5s;
    will-change: transform;
    transform: translateY(-3px);
  }

  &:after {
    content: "";
    width: 40px;
    height: 2px;
    position: absolute;
    background: #fff;
    transition: all 400ms ease-out;
    transition-delay: 0.5s;
    will-change: transform;
    transform: translateY(3px);
  }

  &.active:before {
    transform: translateY(0) rotate(35deg);
  }

  &.active:after {
    transform: translateY(0) rotate(-35deg);
  }
`