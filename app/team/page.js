import Project from 'components/project'

const title = 'Our Team'
const description = `Sarah Khosla is an independent graphic designer and art director located in Los Angeles. Some of the clients she's worked with include Google, RobinHood, and HBO Max.`
const url = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/team`
const image = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/team/sarahkhosla-1.webp`

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
        title="Our&nbsp;Team"
        heroImage={{
          src: '/team/team0.webp',
          alt: 'Team',
          blur: `L15}y}-;00DjDPV@yCtk00Rk~q%K`,
        }}
        about={{
          subtitle: `Nulla fringilla augue eu risus tempus, eget dignissim quam auctor.`,
          paragraphs: [
            `Praesent tortor sem, efficitur sit amet lobortis ac, mattis ac erat. Fusce gravida commodo elementum. Etiam venenatis velit at orci consectetur malesuada. Mauris vehicula eleifend leo posuere rutrum. Integer vehicula, justo quis pulvinar venenatis, leo justo venenatis lectus, sit amet blandit ipsum sapien eget ex.`,
          ],

        }}
      /* images={[
        {
          src: '/team/team0.webp',
          alt: 'Team',
          blur: `L79%r5_3~j4T00-=Du.8IC00orn,`,
        },
      ]} */
      />
    </>
  )
}
