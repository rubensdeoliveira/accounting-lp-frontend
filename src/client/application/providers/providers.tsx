import { useSession } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

type ProvidersModel = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersModel) {
  const { status } = useSession()

  return (
    <ThemeProvider attribute="class">
      <div>{children}</div>
    </ThemeProvider>
  )
}
