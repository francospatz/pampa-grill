'use client'

import { useIsTouchDevice } from 'hooks'
import { useEffect, useRef } from 'react'
import { Z_INDEX } from 'styles'
import webGLFluidEnhanced from 'webgl-fluid-enhanced'

const Cursor = () => {
  const canvasRef = useRef(null)
  const touchDevice = useIsTouchDevice()

  useEffect(() => {

    if (touchDevice) return (
      <div style={{
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        <div style={{
          zIndex: 1,
          mixBlendMode: 'screen',
          backgroundImage: "url('/gif.gif')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: 'absolute',
          overflow: 'hidden',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
        }}>
        </div>

      </div>

    )
    else {
      webGLFluidEnhanced.simulation(canvasRef.current, {
        PRESSURE: 0.2,
        SUNRAYS: false,
        START_SPLATS: 0,
        SPLAT_AMOUNT: 10,
        SPLAT_FORCE: 1500,
        DENSITY_DISSIPATION: 3,
        CURL: 0,
        COLOR_PALETTE: ['#C89868'],
        BLOOM: true,
      })
    }
  }, [touchDevice])

  if (touchDevice) return (
    <div style={{
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        zIndex: 1,
        mixBlendMode: 'screen',
        backgroundImage: "url('/gif.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
      }}>

      </div>

    </div>

  )

  return (
    <>
      <div style={{
        zIndex: 1,
        mixBlendMode: 'screen',
        backgroundImage: "url('/gif.gif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        filter: 'blur(2px)',
      }}>
      </div>
      <canvas
        ref={canvasRef}
        className="w-screen h-screen"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'all',
          /* zIndex: Z_INDEX.canvas, */


        }}
      />

    </>
  )
}

export default Cursor
