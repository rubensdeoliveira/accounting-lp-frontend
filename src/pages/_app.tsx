import type { AppProps } from 'next/app'

import '@/application/styles/global.css'
import 'react-modern-drawer/dist/index.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
