'use client'

import { useRef } from 'react'
import { CustomButton, Information } from 'components'
import { ContentTextWrapper, TitleTextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const About = () => {
  const text = `Specializing in creating exquisite Argentinian culinary experiences, blending modern gastronomic techniques for discerning diners who value a refined dining image.`
  const description = `Celebrating gourmet Argentinian heritage, our expertly crafted dishes blend tradition and innovation for an unforgettable dining experience.`
  const sectionTarget = useRef()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(
        gsap.utils.toArray('.reveal-about-1'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power4.out',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-about-2'),
          {
            yPercent: 100,
            duration: 1.5,
            stagger: 0.02,
            ease: 'power4.out',
          },
          0,
        )
        .from(
          '.reveal-about-3',
          {
            opacity: 0,
            duration: 1,
            ease: 'power3.inOut',
          },
          0.5,
        )
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="About" ref={sectionTarget}>
      <TitleTextWrapper>
        {text.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-about-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
      </TitleTextWrapper>
      <ContentTextWrapper>
        {description.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-about-2 enabled">{word}&nbsp;</div>
          </div>
        ))}
        <CustomButton className="reveal-about-3" href="/about">
          Learn more
        </CustomButton>
      </ContentTextWrapper>
    </Information>
  )
}

export default About
