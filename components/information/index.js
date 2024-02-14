'use client'

import { forwardRef, useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Container, NormalText } from 'styles'
import gsap from 'gsap'
import {
  InformationSectionWrapper,
  TitleWrapper,
  CustomGridWrapper,
  Line,
} from './styles'

const Information = forwardRef(function ({ title, subtitle, children }, ref) {
  const revealRef = useRef([])
  const lineRef = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        revealRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: 'power3.InOut',
        },
        0,
      ).from(
        lineRef.current,
        {
          scaleX: 0,
          duration: 1,
          ease: 'power3.inOut',
        },
        0,
      )
    })

    return () => ctx.revert()
  }, [ref])

  return (
    <InformationSectionWrapper ref={ref}>
      <Container>
        <TitleWrapper>
          {title ? (
            <NormalText
              className="enabled"
              ref={(el) => revealRef.current.push(el)}
            >
              {title}
            </NormalText>
          ) : (
            <div ref={(el) => revealRef.current.push(el)} />
          )}
          {subtitle && (
            <NormalText
              className="enabled"
              ref={(el) => revealRef.current.push(el)}
            >
              {subtitle}
            </NormalText>
          )}
        </TitleWrapper>
        <Line ref={lineRef} />
        <CustomGridWrapper>{children}</CustomGridWrapper>
      </Container>
    </InformationSectionWrapper>
  )
})

export default Information
