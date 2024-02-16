'use client'

import { useRef, useState, forwardRef } from 'react'
import {
    StyledMenuContent,
    StyledMenuList,
    StyledMenuLink
} from './styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'


const Offcanvas = forwardRef(function Offcanvas(timeline) {

    const overlayRef = useRef(null);
    const linkRefs = useRef([]);
    const tl = useRef(timeline)

    useIsomorphicLayoutEffect(() => {
        tl.current.to(linkRefs.current, {
            yPercent: 100,
            duration: 0.5,
        });

        tl.current.to(overlayRef.current, {
            width: 0,
        }).progress(1);

        gsap.set(overlayRef.current, { opacity: 1 });
    }, []);

    return (
        <StyledMenuContent ref={overlayRef}>
            <StyledMenuList>
                <li>
                    <StyledMenuLink ref={(el) => (linkRefs.current[0] = el)} href='#' className='title'>
                        About
                    </StyledMenuLink>
                </li>
                <li>
                    <StyledMenuLink ref={(el) => (linkRefs.current[1] = el)} href='#' className='title'>
                        Projects
                    </StyledMenuLink>
                </li>
                <li>
                    <StyledMenuLink ref={(el) => (linkRefs.current[2] = el)} href='#' className='title'>
                        Contact
                    </StyledMenuLink>
                </li>
            </StyledMenuList>
        </StyledMenuContent>
    )
})

export default Offcanvas
