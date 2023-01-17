import { DM_Sans, Raleway } from '@next/font/google'
import 'react-modern-drawer/dist/index.css'

import '@/app/presentation/styles/global.css'

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
  return (
    <html lang="en" className={`${dmSans.variable} ${raleway.variable}`}>
      <head />
      <body className="mx-auto flex w-full max-w-[1200px] flex-col px-6 pb-16 md:px-8 xl:px-0">
        {children}
      </body>
    </html>
  )
}
