'use client'

import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { parseCookies } from 'nookies'

import '@/app/_presentation/styles/global.css'
import { DM_Sans, Raleway } from '@next/font/google'
import { themeAtom } from '@/app/_presentation/atoms'

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
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useAtom(themeAtom)

  useEffect(() => {
    const { 'color-theme': colorTheme } = parseCookies()
    if (['light', 'dark'].includes(colorTheme)) {
      setTheme(colorTheme)
    }
    setMounted(true)
  }, [])

  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${raleway.variable} ${
        theme === 'light' ? '' : 'dark'
      } ${mounted ? 'visible' : 'invisible'}`}
    >
      <head />
      <body className="mx-auto flex w-full max-w-[1200px] flex-col px-6 md:px-8 xl:px-0">
        {children}
      </body>
    </html>
  )
}
