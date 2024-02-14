'use client'

import { Information } from 'components'
import { TextWrapper } from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'
import { useRef } from 'react'

const Philosophy = () => {
  let sectionTarget = useRef()
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis ipsum vitae mi dignissim, non pellentesque felis congue. Suspendisse et diam et quam maximus convallis a vitae nunc. Nunc semper libero scelerisque magna accumsan rutrum. Etiam et odio sit amet nibh varius tincidunt et vitae risus. Pellentesque vel ullamcorper felis, ullamcorper elementum felis.`

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionTarget.current,
          start: 'top bottom-=10%',
          toggleActions: 'play none none reset',
        },
      })

      tl.from(gsap.utils.toArray('.reveal-phil-1'), {
        yPercent: 100,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Information title="Philosophy" ref={sectionTarget}>
      <TextWrapper>
        {text.split(' ').map((word, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-phil-1 enabled">{word}&nbsp;</div>
          </div>
        ))}
      </TextWrapper>
    </Information>
  )
}

export default Philosophy
