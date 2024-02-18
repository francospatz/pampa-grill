'use client'

import { Container } from 'styles'
import {
  BottomLine,
  ContentWrapper,
  CustomGridWrapper,
  FooterWrapper,
  LinkWrapper,
  ParagraphWrapper,
  SectionWrapper,
  TopLine,
} from './styles'
import { useIsomorphicLayoutEffect, useWindowSize } from 'react-use'
import gsap from 'gsap'
import { CustomLink } from 'components'
import { useRef } from 'react'
import Div100vh from 'react-div-100vh'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Hero = () => {
  const sectionRef = useRef()
  const { width } = useWindowSize()

  /* const line1 = '' */
  const line2 = 'Crafting gourmet Argentinian dishes for diverse tastes.'

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(sectionRef.current, { opacity: 1 })
      tl.from(
        gsap.utils.toArray('.reveal-hero-1'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.2,
          delay: 0.2,
          ease: 'power4.out',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-hero-2'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.05,
            ease: 'power4.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-hero-3'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.02,
            ease: 'power4.out',
          },
          0.5,
        )
      /* .from(
        gsap.utils.toArray('.reveal-hero-4'),
        {
          yPercent: 100,
          duration: 2,
          stagger: 0.2,
          ease: 'power4.out',
        },
        0.5,
      ) */
    })

    /*  gsap.registerPlugin(ScrollTrigger);
     ScrollTrigger.create({
       animation: gsap.from(".text-logo", {
         y: "50vh",
         scale: 6,
         yPercent: -50,
       }),
       scrub: true,
       trigger: ".logo-scroll-trigger",
       start: "top bottom",
       endTrigger: ".logo-scroll-trigger",
       end: "top center",
     });
  */
    return () => ctx.revert()
  }, [])

  return (<>
    <Div100vh>
      <SectionWrapper ref={sectionRef}>
        <Container>
          <ContentWrapper>
            <TopLine className='text-logo'>
              <div className="offset">
                <div className="reveal-hero-1 enabled">PAMPA</div>
              </div>
              <div className="offset">
                <div className="reveal-hero-1 enabled">—GRILL</div>
              </div>
            </TopLine>
            <BottomLine>
              <div className="">
                <div className="reveal-hero-1 enabled">Málaga</div>
              </div>
            </BottomLine>
          </ContentWrapper>
          <ParagraphWrapper>
            {/*  {line1.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-hero-3 enabled">{word}&nbsp;</div>
              </div>
            ))} */}
            {line2.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-hero-3 enabled">{word}&nbsp;</div>
              </div>
            ))}
          </ParagraphWrapper>
        </Container>
        <FooterWrapper>
          <Container>
            <CustomGridWrapper>
              <LinkWrapper className="enabled">
                <div className="overflow">
                  <CustomLink
                    to="/"

                    $dark
                    className="reveal-hero-2"
                  >
                    EN
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="/"

                    $dark
                    className="reveal-hero-2"
                  >
                    ES
                  </CustomLink>
                </div>


              </LinkWrapper>

              <ParagraphWrapper className="hide">
                {/* {line1.split(' ').map((word, index) => (
                  <div className="overflow" key={index}>
                    <div className="reveal-hero-3 enabled">{word}&nbsp;</div>
                  </div>
                ))} */}
                <br />
                {line2.split(' ').map((word, index) => (
                  <div className="overflow" key={index}>
                    <div className="reveal-hero-3 enabled">{word}&nbsp;</div>
                  </div>
                ))}
              </ParagraphWrapper>

              {/* <div className="overflow">
                <div className="reveal-hero-4">Scroll down</div>
              </div> */}
            </CustomGridWrapper>
          </Container>
        </FooterWrapper>
      </SectionWrapper>
    </Div100vh>
    <div className='logo-scroll-trigger'>
    </div>
  </>
  )
}

export default Hero
