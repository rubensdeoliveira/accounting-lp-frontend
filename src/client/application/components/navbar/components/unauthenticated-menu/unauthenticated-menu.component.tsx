import { Button, Navbar } from '@rubensdeoliveira-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DarkModeSwitcher } from '../dark-mode-switcher'
import { Logo } from '../logo'
import { navbarNavigationItems } from './constants'
import { UnauthenticatedMenuModel } from './models'

export function UnauthenticatedMenu({
  logo,
  logoDark,
}: UnauthenticatedMenuModel) {
  const pathname = usePathname()

  function renderMenuItems() {
    return navbarNavigationItems.map(navbarNavigationItem => (
      <Link
        key={navbarNavigationItem.link}
        href={navbarNavigationItem.link}
        className={`${
          pathname?.includes(navbarNavigationItem.link)
            ? 'font-medium'
            : 'font-normal text-gray-900/70 dark:text-white/70'
        } text-sm hover:bg-slate-50 md:text-xl md:hover:bg-transparent`}
      >
        {navbarNavigationItem.label}
      </Link>
    ))
  }

  return (
    <Navbar
      elementsLeft={<Logo logo={logo} logoDark={logoDark} />}
      className="bg-transparent dark:bg-transparent"
      paddingY={32}
      elementsRight={[
        <DarkModeSwitcher />,
        <Button className="bg-red500" label="Área do cliente" />,
      ]}
      navigationItems={renderMenuItems()}
    />
  )
}
