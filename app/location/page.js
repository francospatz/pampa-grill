import Project from 'components/project'

const title = 'Location'
const description = `Our location.`
const url = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/location`
const image = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/location/location0.webp`

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: { url: image, width: 1200, height: 630 },
  }
}

export default function Home() {
  return (
    <>
      <Project
        title="Location"
        heroImage={{
          src: '/location/location0.webp',
          alt: 'Location',
          blur: `LHCP-N0K00~q%NV@D%%M4nxu-;IA`,
        }}
        about={{
          subtitle: `C. Sánchez Pastor, 10, 29015 Málaga.`,
          paragraphs: [
            ``,
          ],
          live: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd72f795803b8a73:0xb49e637824b7909f?sa=X&ved=2ahUKEwiV6t21iaqEAxX7UKQEHcWGBbYQ4kB6BAgOEAA',
        }}
      /* images={[
        {
          src: '/location/location0.webp',
          alt: 'Location',
          blur: `LbRMb$oft7Rk~qWBWBay9FofWBWC`,
        },

      ]} */
      />
    </>
  )
}
