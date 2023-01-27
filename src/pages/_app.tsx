import type { AppProps } from 'next/app'

import '@/client/application/styles/global.css'
import { Providers } from '@/client/application/providers'
import { api } from '@/utils/api'

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default api.withTRPC(App)
