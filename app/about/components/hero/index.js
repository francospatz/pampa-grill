'use client'

import { Container, sizes } from 'styles'
import {
  CustomGridWrapper,
  HeroWrapper,
  ImageWrapper,
  RevealImg,
  TextWrapper,
} from './styles'
import { CustomImage } from 'components'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'
import Div100vh from 'react-div-100vh'

const Hero = () => {
  const sectionTarget = useRef()
  const { width } = useWindowSize()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(sectionTarget.current, { opacity: 1 })
      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.2,
          ease: 'power4.out',
          delay: 0.8,
        },
        0,
      ).to(
        '.reveal-hero-2',
        {
          scaleY: 0,
          duration: 2,
          ease: 'power4.inOut',
        },
        1.7,
      )

      if (width > sizes.thone) {
        tl.from(
          gsap.utils.toArray('.text-wrapper'),
          {
            xPercent: 30,
            duration: 2,
            stagger: 0.2,
            ease: 'power4.inOut',
          },
          1.3,
        )
      }
    })

    return () => ctx.revert()
  }, [width])

  return (
    <Div100vh>
      <HeroWrapper ref={sectionTarget}>
        <Container>
          <CustomGridWrapper>
            <TextWrapper>
              <div className="overflow text-wrapper">
                <div className="reveal-hero-1 enabled">Pampa</div>
              </div>
              <br />
              <div className="overflow text-wrapper">
                <div className="reveal-hero-1 enabled">Grill</div>
              </div>
            </TextWrapper>
            <ImageWrapper>
              <RevealImg className="reveal-hero-2" />
              <CustomImage
                src="/img1.webp"
                alt="Pampa Grill"
                blur={`L5EooR~m3Y5t0J%J%2Os0JRr%2_2`}
              />
            </ImageWrapper>
          </CustomGridWrapper>
        </Container>
      </HeroWrapper>
    </Div100vh>
  )
}

export default Hero
