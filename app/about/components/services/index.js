'use client'

import { useRef } from 'react'
import { Information } from 'components'
import { Col, ServicesCols, TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Services = () => {
  let sectionTarget = useRef()
  const text = `Nunc posuere lectus lacus, ac tempus lectus facilisis nec. Mauris porttitor dictum sapien eget rhoncus. Curabitur sed nulla id nunc tincidunt interdum nec et sem.`

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
        gsap.utils.toArray('.reveal-services-1'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        },
        0,
      ).from(
        gsap.utils.toArray('.reveal-services-2'),
        {
          yPercent: 100,
          duration: 1,
          stagger: 0.02,
          ease: 'power4.out',
        },
        0.75,
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Services" ref={sectionTarget}>
      <TextWrapper>
        {text.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-services-1 enabled">{word}&nbsp;</div>
          </div>
        ))}

      </TextWrapper>
      <ServicesCols>
        <Col>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 1</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 2</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 3</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">
              Service 4
            </div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 5</div>
          </div>
        </Col>
        <Col>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 6</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 7</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 8</div>
          </div>
          <div className="overflow">
            <div className="reveal-services-2 enabled">Service 9</div>
          </div>
        </Col>
      </ServicesCols>
    </Information>
  )
}

export default Services
