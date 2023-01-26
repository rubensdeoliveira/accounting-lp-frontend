import { ServerThemeProvider } from '@wits/next-themes'

import '@/app/_presentation/styles/global.css'
import { Providers } from '@/app/providers'
import { dmSans, raleway } from '@/app/_presentation/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider>
      <html lang="en" className={`${dmSans.variable} ${raleway.variable}`}>
        <head />
        <body className="mx-auto flex w-full max-w-[1200px] flex-col px-6 md:px-8 xl:px-0">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
