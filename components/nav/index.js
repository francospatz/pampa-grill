'use client'
import { useRef, useState, useEffect } from 'react'
import { Container } from 'styles'
import {
  CustomGridWrapper,
  HeaderWrapper,
  LinksWrapper,
  StyledMenuContent,
  StyledMenuList,
  StyledMenuLink,
  ToggleBtn,
  Burger
} from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useLenis } from '@studio-freight/react-lenis'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from 'lib'
import { CustomLink, CustomButton } from 'components'

const Nav = () => {
  const sectionRef = useRef()
  const lenis = useLenis()
  const router = useRouter()
  const path = usePathname()

  const overlayRef = useRef(null)
  const linkRefs = useRef([])
  const timeline = useRef(gsap.timeline())
  const [isReversed, setIsReversed] = useState(false)

  useIsomorphicLayoutEffect(() => {
    for (let i = linkRefs.current.length - 1; i >= 0; i--) {
      timeline.current.to(linkRefs.current[i], {
        yPercent: 100,
        duration: 0.2,
        delay: 0.1,
        ease: 'power1.out',
      })
    }

    timeline.current
      .to(overlayRef.current, {
        height: 0,
        duration: 0.3,
        delay: 0,
        //ease: 'power1.out',
      })
      .progress(1)

    gsap.set(overlayRef.current, { opacity: 1 })

    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.set(sectionRef.current, { opacity: 1 })
      tl.from(
        gsap.utils.toArray('.logo'),
        {
          yPercent: 100,
          duration: 2,
          ease: 'power4.out',
          delay: 0.25,
        },
        0,
      )
        .from(
          gsap.utils.toArray('.reveal-nav-1'),
          {
            yPercent: 100,
            duration: 2,
            stagger: 0.02,
            ease: 'power4.out',
          },
          0.5,
        )
        .from(
          '.reveal-nav-2',
          { opacity: 0, duration: 1, ease: 'power4.out' },
          0.5,
        )
    })

    return () => ctx.revert()
  }, [])

  const handleActivate = () => {
    timeline.current.reversed(!isReversed)
    setIsReversed(!isReversed)
  }

  const [hoverColor, setHoverColor] = useState('white')
  const [self, setSelf] = useState(null)

  return (
    <>
      <HeaderWrapper ref={sectionRef}>
        <Container>
          <CustomGridWrapper>
            <div>
              <div className="overflow">
                <CustomLink
                  href="/"
                  className="logo enabled"
                  onClick={(e) => {
                    e.preventDefault()
                    handleActivate()
                    if (path === '/') setTimeout(lenis.scrollTo(0), 1000)
                    else animatePageOut('/', router, path)
                  }}
                >
                  <img
                    src="/logovaca.svg"
                    alt=""
                    style={{ width: 'auto', height: '4.5vh' }}
                  />
                </CustomLink>
              </div>
            </div>
            <LinksWrapper>
              {/* <div className="overflow">
                <CustomLink
                  className="reveal-nav-1 enabled"
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault()
                    if (path === '/about') lenis.scrollTo(0)
                    else animatePageOut('/about', router, path)
                  }}
                >
                  About
                </CustomLink>
              </div>

              <div className="overflow">
                <CustomLink
                  className="reveal-nav-1 enabled"
                  onClick={(e) => {
                    e.preventDefault()
                    lenis.scrollTo('bottom')
                  }}
                >
                  Contact
                </CustomLink>
              </div>
              <CustomButton
                style={{ pointerEvents: 'all' }}
                id="burger"
                onClick={() => handleActivate()}
              >
                menu
              </CustomButton> */}
              <ToggleBtn style={{ pointerEvents: 'all' }}
                id="burger"
                onClick={() => handleActivate()}>
                <Burger className={isReversed ? 'active' : ''} />
              </ToggleBtn>
            </LinksWrapper>
            {/* <CustomButton
            className="reveal-nav-2"
            aria-label="Contact"
            onClick={(e) => {
              e.preventDefault()
              window.open('https://www.thefork.es/restaurante/pampa-grill-malaga-r363341/menu', '_blank')
            }} style={{ cursor: 'pointer' }}
          >
            reservations
          </CustomButton> */}
          </CustomGridWrapper>
        </Container>
      </HeaderWrapper>
      <StyledMenuContent ref={overlayRef} className="exclude">
        <StyledMenuList className="exclude">
          <li>
            <StyledMenuLink
              onMouseEnter={() => {
                setHoverColor('#484847')
                setSelf(0)
              }}
              onMouseLeave={() => {
                setHoverColor('white')
                setSelf(null)
              }}
              acolor={self === 0 ? 'white' : hoverColor}
              ref={(el) => (linkRefs.current[0] = el)}
              onClick={(e) => {
                handleActivate()
                e.preventDefault()
                if (path === '/about') lenis.scrollTo(0)
                else animatePageOut('/about', router, path)
              }}
              href="#"
              className="title exclude"
            >
              About
            </StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink
              onMouseEnter={() => {
                setHoverColor('#484847')
                setSelf(1)
              }}
              onMouseLeave={() => {
                setHoverColor('white')
                setSelf(null)
              }}
              acolor={self === 1 ? 'white' : hoverColor}
              ref={(el) => (linkRefs.current[1] = el)}
              onClick={(e) => {
                handleActivate()
                e.preventDefault()
                if (path === '/menu') lenis.scrollTo(0)
                else animatePageOut('/menu', router, path)
              }}
              href="#"
              className="title exclude"
            >
              The Menu
            </StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink
              onMouseEnter={() => {
                setHoverColor('#484847')
                setSelf(2)
              }}
              onMouseLeave={() => {
                setHoverColor('white')
                setSelf(null)
              }}
              acolor={self === 2 ? 'white' : hoverColor}
              ref={(el) => (linkRefs.current[2] = el)}
              onClick={(e) => {
                handleActivate()
                e.preventDefault()
                if (path === '/location') lenis.scrollTo(0)
                else animatePageOut('/location', router, path)
              }}
              href="#"
              className="title exclude"
            >
              Location
            </StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink
              onMouseEnter={() => {
                setHoverColor('#484847')
                setSelf(3)
              }}
              onMouseLeave={() => {
                setHoverColor('white')
                setSelf(null)
              }}
              acolor={self === 3 ? 'white' : hoverColor}
              ref={(el) => (linkRefs.current[3] = el)}
              onClick={(e) => {
                handleActivate()
                e.preventDefault()
                if (path === '/team') lenis.scrollTo(0)
                else animatePageOut('/team', router, path)
              }}
              href="#"
              className="title exclude"
            >
              Our Team
            </StyledMenuLink>
          </li>
          <li>
            <StyledMenuLink
              onMouseEnter={() => {
                setHoverColor('#484847')
                setSelf(4)
              }}
              onMouseLeave={() => {
                setHoverColor('white')
                setSelf(null)
              }}
              acolor={self === 4 ? 'white' : hoverColor}
              ref={(el) => (linkRefs.current[4] = el)}
              onClick={(e) => {
                handleActivate()
                e.preventDefault()
                lenis.scrollTo('bottom')
              }}
              href="#"
              className="title exclude"
            >
              Contact
            </StyledMenuLink>
          </li>
        </StyledMenuList>
      </StyledMenuContent>
    </>
  )
}

export default Nav
