'use client'

import { ThemeProvider } from 'next-themes'

type ProvidersModel = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersModel) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
