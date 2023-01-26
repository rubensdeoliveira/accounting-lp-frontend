import { DM_Sans, Raleway } from '@next/font/google'
import { cookies } from 'next/headers'

import '@/app/_presentation/styles/global.css'
import { DarkModeScript, DarkModeSwitcherScript } from './_presentation/scripts'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
  display: 'optional',
  weight: ['400', '500', '700'],
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'optional',
  weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nextCookies = cookies()
  const colorTheme = nextCookies.get('color-theme')
  console.log(colorTheme)

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${raleway.variable} ${
        colorTheme?.value === 'dark' ? 'dark' : ''
      }`}
    >
      <head>
        {/* <DarkModeScript />
        <DarkModeSwitcherScript /> */}
      </head>
      <body className="mx-auto flex w-full max-w-[1200px] flex-col px-6 md:px-8 xl:px-0">
        {children}
      </body>
    </html>
  )
}
