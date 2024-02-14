import localFont from 'next/font/local'

const gtwalsh = localFont({
  adjustFontFallback: 'Arial',
  variable: '--font-text',
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
      path: '../public/fonts/ArgentCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/ArgentCF-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/ArgentCF-DemiBold.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/ArgentCF-DemiBoldItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/ArgentCF-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/ArgentCF-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})

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

export default gtwalsh 
