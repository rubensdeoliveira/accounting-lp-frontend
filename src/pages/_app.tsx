import { AppProps, type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import Script from 'next/script'

import '@/client/application/styles/global.css'
import '@rubensdeoliveira-ui/react/dist/index.css'
import { Providers } from '@/client/application/providers'
import { api } from '@/shared/utils'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Providers>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"
          strategy="beforeInteractive"
        />
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
