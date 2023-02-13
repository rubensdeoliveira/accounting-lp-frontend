import { useSession } from 'next-auth/react'

import { AuthenticatedMenu, UnauthenticatedMenu } from './components'
import { NavbarModel } from './models'

export function Navbar({ logo, logoDark, children }: NavbarModel) {
  const { status } = useSession()

  return status === 'authenticated' ? (
    <AuthenticatedMenu logo={logo} logoDark={logoDark}>
      {children}
    </AuthenticatedMenu>
  ) : (
    <UnauthenticatedMenu logo={logo} logoDark={logoDark}>
      {children}
    </UnauthenticatedMenu>
  )
}
