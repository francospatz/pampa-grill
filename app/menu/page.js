import Project from 'components/project'

const title = 'The Menu'
const description = `Our menu.`
const url = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/menu`
const image = `${process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.pampagrillmalaga.com'
  }/menu/astrostudios-2.webp`

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
        title="The&nbsp;Menu"
        heroImage={{
          src: '/menu/menu0.webp',
          alt: 'The Menu',
          blur: `LHCP-N0K00~q%NV@D%%M4nxu-;IA`,
        }}
        about={{
          subtitle: `Nam lacus neque, pretium rhoncus velit a, pretium sollicitudin risus. Nam vitae molestie magna. Pellentesque vestibulum fringilla vulputate. Nunc posuere lectus lacus, ac tempus lectus facilisis nec.`,
          paragraphs: [
            `Mauris porttitor dictum sapien eget rhoncus. Curabitur sed nulla id nunc tincidunt interdum nec et sem. Quisque augue massa, aliquet vel massa et, scelerisque ullamcorper purus. Aliquam non dui tellus. Suspendisse ultrices neque id metus aliquam placerat molestie vitae neque. Aliquam erat volutpat.​`
          ]

        }}
        images={[
          {
            src: '/menu/menu1.webp',
            alt: 'Menu',
            blur: `L039F6-@8w4mx|ofV;WBN1j?t3WF`,
          },
          {
            src: '/menu/menu2.webp',
            alt: 'Menu',
            blur: `LhM%QMWB00s:.ToLZ#WVNGkCo}e.`,
          },
          {
            src: '/menu/menu3.webp',
            alt: 'Menu',
            blur: `L49%]I-:03xuxvt6M}j[00D,~mRl`,
          },
          {
            src: '/menu/menu4.webp',
            alt: 'Menu',
            blur: `L6Lg*HY600zn?.s:MiS|-.kPX8Vi`,
          },
          {
            src: '/menu/menu5.webp',
            alt: 'Menu',
            blur: `L039F6-@8w4mx|ofV;WBN1j?t3WF`,
          }
        ]}
      />
    </>
  )
}
