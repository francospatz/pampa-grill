'use client'

import { Information } from 'components'
import { TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'

const Background = () => {
  let sectionTarget = useRef()
  const para1 = `Cras feugiat commodo dolor, ut pretium arcu fermentum eu. Praesent orci nisi, euismod at augue ac, efficitur dictum arcu. Nullam feugiat posuere laoreet. Suspendisse potenti. Ut vulputate, felis ac bibendum tincidunt, justo quam bibendum sem, sit amet lobortis risus est eget sem. Vivamus varius elementum dui, at finibus dui fermentum sed. Pellentesque pretium massa ac lacus sollicitudin aliquam. Cras placerat nulla vitae vehicula varius. Mauris magna ante, vulputate id enim luctus, dignissim porta ipsum.`
  const para2 = `Nam lacus neque, pretium rhoncus velit a, pretium sollicitudin risus. Nam vitae molestie magna. Pellentesque vestibulum fringilla vulputate.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(gsap.utils.toArray('.reveal-bg-1'), {
        yPercent: 100,
        duration: 1,
        stagger: 0.01,
        ease: 'power4.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Background" ref={sectionTarget}>
      <TextWrapper>
        {para1.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-bg-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
        <div className="para-2">
          {para2.split(' ').map((word, index) => (
            <div className="overflow" key={index}>
              <div className="reveal-bg-1 enabled">{word}&nbsp;</div>
            </div>
          ))}
        </div>
      </TextWrapper>
    </Information>
  )
}

export default Background
