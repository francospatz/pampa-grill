import localFont from 'next/font/local'

const muller = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font-text2',
  preload: true,
  fallback: [
    'San Francisco',
    'SF Pro Text',
    '-apple-system',
    'system-ui',
    'sans-serif',
  ],
  src: [
    {
      path: '../public/fonts/MullerRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/MullerRegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/MullerMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/MullerMediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/MullerBold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/MullerBoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

export default muller 
