'use client'

import gsap from 'gsap'

export const animatePageIn = () => {
  const transitionElement = document.getElementById('transition-element')

  if (transitionElement) {
    const tl = gsap.timeline()

    tl.set(transitionElement, {
      yPercent: 0,
    })
      .to(transitionElement, {
        yPercent: 100,
        duration: 1.2,
        ease: 'power3.inOut',
      })
      .to(
        transitionElement,
        {
          /* borderTopLeftRadius: '100vh',
          borderBottomLeftRadius: '100vh', */
          duration: 1,
          ease: 'power3.inOut',
        },
        '<',
      )
  }
}

export const animatePageOut = (href, router, pathName) => {
  if (pathName === href) return null
  if (pathName === '/' && href === '/#projects') return null

  const animationWrapper = document.getElementById('transition-element')

  if (animationWrapper) {
    const tl = gsap.timeline()

    tl.set(animationWrapper, {
      yPercent: 100,
      /* borderTopRightRadius: '100vh',
      borderBottomRightRadius: '100vh', */
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    })
      .to(animationWrapper, {
        yPercent: 0,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          router.push(href)
        },
      })
      .to(
        animationWrapper,
        {
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
          duration: 1,
          ease: 'power3.inOut',
        },
        '<',
      )
  }
}

export default animatePageOut
