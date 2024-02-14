'use client'

import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import { Container } from 'styles'
import {
  InnerContent,
  StyledFooter,
  TitleWrapper,
  ContentWrapper,
  BottomWrapper,
  LinkWrapper,
} from './styles'
import gsap from 'gsap'
import CustomLink from 'components/link'
import Div100vh from 'react-div-100vh'
import { usePathname, useRouter, redirect } from 'next/navigation'



const Footer = () => {
  const sectionTarget = useRef()
  const lenis = useLenis()
  const path = usePathname()
  const router = useRouter()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      gsap.to(sectionTarget.current, {
        width: '80%',
        height: '70%',
        borderRadius: '8vw',
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom',
          toggleActions: 'play none none reset',
          scrub: true,
        },
      })
      tl.from(
        gsap.utils.toArray('.reveal-footer-1'),
        {
          yPercent: 100,
          duration: 1.5,
          stagger: 0.05,
          ease: 'power4.out',
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-footer-2'),
          {
            opacity: 0,
            duration: 1.5,
            stagger: 0.05,
            ease: 'power4.out',
          },
          0.5,
        )
        .from(
          gsap.utils.toArray('.reveal-footer-3'),
          {
            yPercent: 100,
            duration: 1.5,
            stagger: 0.05,
            ease: 'power4.out',
          },
          0.75,
        )
    })

    return () => ctx.revert()
  }, [])

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis ipsum vitae mi dignissim, non pellentesque felis congue.`

  return (
    <Div100vh>
      <StyledFooter>
        <InnerContent ref={sectionTarget}>
          <Container>
            <ContentWrapper>

              <TitleWrapper onClick={() => {
                window.open('https://www.thefork.es/restaurante/pampa-grill-malaga-r363341/menu', '_blank')
              }} style={{ cursor: 'pointer' }}>
                <div className="overflow" >
                  <div className="reveal-footer-1 enabled">Book&nbsp;</div>
                </div>
                <div className="overflow">
                  <div className="reveal-footer-1 enabled">a</div>
                </div>
                <br />
                <div className="overflow bottom">
                  <div className="reveal-footer-1 enabled">table</div>
                </div>



              </TitleWrapper>

              <CustomLink
                className="reveal-footer-2"
                href="mailto:info@pampagrillmalaga.com"
              >
                info@pampagrillmalaga.com
              </CustomLink>
              <CustomLink
                className="reveal-footer-2"
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0xd72f795803b8a73:0xb49e637824b7909f?sa=X&ved=2ahUKEwjW6o_LpaqEAxVKQPEDHWwxDZUQ4kB6BAgPEAA"
                target='_blank'
              >
                Calle&nbsp; Sánchez&nbsp; Pastor&nbsp; 10&nbsp; Málaga
                <br />
                13:00 &nbsp;- &nbsp;00:00
              </CustomLink>
              {/* <CustomLink
                className="reveal-footer-2"
                href="/"
              >
                13:00 &nbsp;- &nbsp;00:00
              </CustomLink> */}

            </ContentWrapper>

            <BottomWrapper>
              <LinkWrapper>
                <div className="overflow">
                  <CustomLink
                    to="https://www.instagram.com/pampagrillmalaga/"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    IG
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="https://www.tripadvisor.es/Restaurant_Review-g187438-d13200317-Reviews-Pampa_Grill_Malaga-Malaga_Costa_del_Sol_Province_of_Malaga_Andalucia.html"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    TA
                  </CustomLink>
                </div>
                <div className="overflow">
                  <CustomLink
                    to="https://www.thefork.es/restaurante/pampa-grill-malaga-r363341/menu"
                    target="_blank"
                    $dark
                    className="reveal-footer-3"
                  >
                    TF
                  </CustomLink>
                </div>

              </LinkWrapper>
              <div className="overflow">
                <CustomLink
                  to="/"
                  target="_blank"
                  $dark
                  className="reveal-footer-3 hide"
                  onClick={(e) => {
                    e.preventDefault()
                    lenis.scrollTo(0)
                  }}
                >
                  BACK TO TOP
                </CustomLink>
              </div>
            </BottomWrapper>
          </Container>
        </InnerContent>
      </StyledFooter>
    </Div100vh>
  )
}

export default Footer
