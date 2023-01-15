import { DM_Sans, Raleway } from '@next/font/google'

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
      <body>{children}</body>
    </html>
  )
}
