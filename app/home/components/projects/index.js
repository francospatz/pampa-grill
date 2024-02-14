'use client'

import { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { CustomImage, Information } from 'components'
import { OverlayInfo, ProjectWrapper, ProjectsArray } from './styles'
import gsap from 'gsap'
import { NormalText } from 'styles'
import { animatePageOut } from 'lib'

const projectMap = [
  {
    src: '/menu/menu0.webp',
    blur: `LHCP-N0K00~q%NV@D%%M4nxu-;IA`,
    title: 'The Menu',
    link: '/menu',
  },
  {
    src: '/location/location1.webp',
    blur: `LMC?r]%M00D%~qt74nM{4nWB?bof`,
    title: 'Where we are located',
    link: '/location',
  },
  {
    src: '/team/team0.webp',
    blur: `L15}y}-;00DjDPV@yCtk00Rk~q%K`,
    title: 'Our team',
    link: '/team',
  },
]

const Projects = () => {
  const projectsRef = useRef()
  const sectionTarget = useRef()
  const router = useRouter()
  const pathname = usePathname()

  const handleHovering = (hoveredNum) => {
    for (let i = 1; i <= 3; i++) {
      gsap.to(projectsRef.current, {
        [`--fr-value-${i}`]: hoveredNum === i ? '2fr' : '1fr',
        duration: 1,
        ease: 'power4.out',
      })
    }
  }

  const handleLeave = () => handleHovering(null)

  return (
    <Information ref={sectionTarget} title="The Restaurant">
      <ProjectsArray ref={projectsRef} id="projects">
        {projectMap.map((project, index) => (
          <ProjectWrapper
            key={index}
            href={project.link}
            onMouseEnter={() => handleHovering(index + 1)}
            onMouseLeave={handleLeave}
            className="reveal-project"
            onClick={(e) => {
              e.preventDefault()
              animatePageOut(project.link, router, pathname)
            }}
          >
            <OverlayInfo>
              <NormalText>{project.title}</NormalText>
            </OverlayInfo>
            <CustomImage
              src={project.src}
              alt={project.title}
              blur={project.blur}
            />
          </ProjectWrapper>
        ))}
      </ProjectsArray>
    </Information>
  )
}

export default Projects
