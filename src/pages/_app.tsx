import type { AppProps } from 'next/app'

import '@/client/presentation/styles/global.css'
import { Providers } from '@/client/presentation/providers'
import { trpc } from '@/utils/trpc'

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default trpc.withTRPC(App)
