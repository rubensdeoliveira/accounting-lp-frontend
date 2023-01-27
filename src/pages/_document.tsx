import { Html, Head, Main, NextScript } from 'next/document'

import { dmSans, raleway } from '@/client/application/fonts'

export default function Document() {
  return (
    <Html lang="en" className={`${dmSans.variable} ${raleway.variable}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="mx-auto flex w-full max-w-[1200px] flex-col px-5 xl:px-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
