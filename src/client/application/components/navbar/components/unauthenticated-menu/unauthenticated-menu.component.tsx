import { Button, Navbar } from '@rubensdeoliveira-ui/react'
import { space } from '@rubensdeoliveira-ui/tokens'
import { Logo } from '../logo'

import { UnauthenticatedMenuModel } from './models'

export function UnauthenticatedMenu({
  logo,
  logoDark,
}: UnauthenticatedMenuModel) {
  return (
    <Navbar
      ctaButton={<Button>Teste</Button>}
      logo={<Logo logo={logo} logoDark={logoDark} />}
      navigationItems={[{ liChildren: <p>Home</p> }]}
      style={{
        bar: 'bg-red500',
        container: 'py-8',
        mobileMenu: 'bg-yellow-500',
      }}
    />
  )
}
