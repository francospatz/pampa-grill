'use client'
/**
 * @file CustomButton.js
 * @desc A custom button component with various styles and animations.
 */

import React, { useRef, useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import gsap from 'gsap'
import styled, { css } from 'styled-components'
import { useIsTouchDevice } from 'hooks'
import { Normal, media } from 'styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import { animatePageOut } from 'lib'

const ButtonWrapper = styled.a`
  display: block;
  position: relative;
  padding: 0.4vw 2.5vw;
  border-radius: 0;
  border: 0.2vw solid
    ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.gray})` : `rgb(${theme.text})`};
  color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.gray})` : `rgb(${theme.text})`};
  text-decoration: none;
  height: fit-content;
  width: fit-content;
  will-change: transform;
  cursor: pointer;
  pointer-events: all;
  overflow: hidden;
  transform-origin: bottom left;
  --scale: 0;

  &:before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => `rgb(${theme.text})`};
    transform-origin: center bottom;
    inset: 0px;
    border-radius: 0;
    z-index: -1;
    mix-blend-mode: difference;

    transform: scale(var(--scale));
  }

  ${media.desktop`
  padding: 0.5rem 2rem;
  border-radius: 0;
  `}
`
const ButtonStyle = css`
  ${Normal}

  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  pointer-events: all;
  text-transform: uppercase;
  mix-blend-mode: difference;
  

  &:disabled {
    background-color: var(--black);
  }
`

const StyledSpan = styled.span`
  position: absolute;
`
const StyledButton = styled.div`
  ${ButtonStyle};
`

/**
 * CustomButton component.
 * @component
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.reverse - Reverse the colors.
 * @param {string} [props.href] - The URL to navigate when the button is clicked.
 * @param {string} [props.to] - The URL to navigate when the button is clicked (for Next.js Link component).
 * @param {string} [props.target] - The target attribute for the anchor tag.
 * @param {React.ReactNode} props.children - The content of the button.
 * @returns {React.ReactElement} CustomButton component.
 */
const CustomButton = (props) => {
  const { href, to, target, children, $reverse, onClick, className, ...rest } =
    props
  const isTouchDevice = useIsTouchDevice()
  const movingContainerRef = useRef(null)
  const router = useRouter()
  const pathName = usePathname()

  let line1 = useRef(null)
  let line2 = useRef(null)
  const tl = useRef()

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .set(line2, { yPercent: -100 })
      .to(line1, { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0)
      .to(line2, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return

      const bounds = movingContainerRef.current.getBoundingClientRect()

      // Calculate the distance from the cursor to the center of the element
      const centerX = bounds.left + bounds.width / 2
      const distanceX = e.clientX - centerX

      // Determine the magnet effect threshold (e.g., 100 pixels)
      const magnetThreshold = 100

      let xPosition
      if (Math.abs(distanceX) < magnetThreshold) {
        // Apply a magnet effect: the closer to the center, the stronger the pull
        xPosition = distanceX
      } else {
        // If the cursor is outside the magnet threshold, don't apply the magnet effect
        xPosition = bounds.clientWidth
      }

      // Apply the animation with GSAP
      gsap.to(movingContainerRef.current, {
        x: xPosition,
        y:
          (e.clientY - bounds.top - movingContainerRef.current.clientHeight) /
          2,
        scale: 1.1,
        duration: 1,
        ease: 'expo.out',
      })
    },
    [isTouchDevice],
  )

  const handleMouseEnter = useCallback(() => {
    tl.current.reverse()
    gsap.to(movingContainerRef.current, {
      '--scale': 1,
      duration: 1,
      ease: 'expo.out',
    })
  })

  const handleMouseExit = useCallback(() => {
    tl.current.play()

    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      '--scale': 0,
      ease: 'expo.out',
    })
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    animatePageOut(href, router, pathName)
  }

  if (href) {
    return (
      <div onClick={handleClick} className={className}>
        <ButtonWrapper
          href={href}
          ref={movingContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseExit}
          onClick={onClick}
          $reverse={$reverse}
          target={target === '_blank' ? '_blank' : undefined}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          role="button"
          {...rest}
        >
          <StyledButton>
            <div ref={(el) => (line1 = el)}>{children}</div>
            <StyledSpan ref={(el) => (line2 = el)}>{children}</StyledSpan>
          </StyledButton>
        </ButtonWrapper>
      </div>
    )
  }

  return (
    <ButtonWrapper
      href={to}
      ref={movingContainerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseExit}
      onClick={onClick}
      $reverse={$reverse}
      className={className}
      target={target === '_blank' ? '_blank' : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      role="button"
      {...rest}
    >
      <StyledButton>
        <div ref={(el) => (line1 = el)}>{children}</div>
        <StyledSpan ref={(el) => (line2 = el)}>{children}</StyledSpan>
      </StyledButton>
    </ButtonWrapper>
  )
}

export default CustomButton
