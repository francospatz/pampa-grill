import { Hero, Background, Philosophy, Services } from './components'

export const metadata = {
  title: 'About',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Background />
      <Services />
    </>
  )
}
