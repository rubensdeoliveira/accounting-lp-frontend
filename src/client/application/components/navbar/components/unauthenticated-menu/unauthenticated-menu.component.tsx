import { ResponsiveNavbar } from '@rubensdeoliveira-ui/react'
import { Logo } from '../logo'

import { UnauthenticatedMenuModel } from './models'

export function UnauthenticatedMenu({
  logo,
  logoDark,
  children,
}: UnauthenticatedMenuModel) {
  return (
    <ResponsiveNavbar
      navbarFixedItems={[{ liChildren: <p>teste</p> }]}
      navbarMenuItems={[{ liChildren: <p>teste</p>, isActive: true }]}
      navbarLogo={<Logo logo={logo} logoDark={logoDark} />}
    >
      {children}
    </ResponsiveNavbar>
  )
}
