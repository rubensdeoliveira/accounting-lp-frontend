import { useSession } from 'next-auth/react'
import { useMemo } from 'react'

import {
  AuthenticatedMenu,
  CallToAction,
  DarkModeSwitcher,
  Logo,
  UnauthenticatedMenu,
} from './components'
import { HeaderModel } from './models'

export function Header({ logo, logoDark }: HeaderModel) {
  const { status } = useSession()

  const handleAuthenticatedHeader = useMemo(
    () =>
      status === 'authenticated' && (
        <AuthenticatedMenu logo={logo} logoDark={logoDark} />
      ),
    [status],
  )

  const handleUnauthenticatedHeader = useMemo(
    () =>
      status === 'unauthenticated' && (
        <header className="flex w-full items-center justify-between py-4 md:py-6 lg:py-8">
          <Logo logo={logo} logoDark={logoDark} />
          <UnauthenticatedMenu />
          <div className="hidden items-center gap-6 md:flex">
            <DarkModeSwitcher />
            <CallToAction link="/area-do-cliente" />
          </div>
        </header>
      ),
    [status, logo, logoDark],
  )

  return (
    <>
      {handleAuthenticatedHeader}
      {handleUnauthenticatedHeader}
    </>
  )
}
