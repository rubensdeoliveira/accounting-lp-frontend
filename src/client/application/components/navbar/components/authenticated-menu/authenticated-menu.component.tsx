import { AuthenticatedMenuModel } from './models'
import { FixedNavbar } from '@rubensdeoliveira-ui/react'

export function AuthenticatedMenu({
  logo,
  logoDark,
  children,
}: AuthenticatedMenuModel) {
  return (
    <FixedNavbar navbarMainItems={[]} navbarSecondaryItems={[]} user={{}}>
      {children}
    </FixedNavbar>
  )
}
