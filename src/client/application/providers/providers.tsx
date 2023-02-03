import { useSession } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

type ProvidersModel = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersModel) {
  const { status } = useSession()

  return (
    <ThemeProvider attribute="class">
      <div
        className={`mx-auto flex w-full ${
          status === 'unauthenticated' ? 'max-w-[1200px] px-5 xl:px-0' : ''
        } flex-col`}
      >
        {children}
      </div>
    </ThemeProvider>
  )
}
