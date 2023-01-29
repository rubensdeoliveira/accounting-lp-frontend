import { AppProps, type AppType } from 'next/app'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

import '@/client/application/styles/global.css'
import { Providers } from '@/client/application/providers'
import { api } from '@/shared/utils'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
