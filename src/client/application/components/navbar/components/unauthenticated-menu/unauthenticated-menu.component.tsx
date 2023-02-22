import { Button, Navbar } from '@rubensdeoliveira-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { DarkModeSwitcher } from '../dark-mode-switcher'
import { Logo } from '../logo'
import { navbarNavigationItems } from './constants'
import { UnauthenticatedMenuModel } from './models'

export function UnauthenticatedMenu({
  logo,
  logoDark,
}: UnauthenticatedMenuModel) {
  const pathname = usePathname()

  const renderMenuItems = useMemo(
    () =>
      navbarNavigationItems.map(navbarNavigationItem => (
        <li
          key={navbarNavigationItem.link}
          className={`${
            pathname?.includes(navbarNavigationItem.link)
              ? 'font-medium'
              : 'font-normal text-gray-900/70 dark:text-white/70'
          }`}
        >
          <Link href={navbarNavigationItem.link} className="text-sm md:text-xl">
            {navbarNavigationItem.label}
          </Link>
        </li>
      )),
    [navbarNavigationItems, pathname],
  )

  return (
    <Navbar
      elementsLeft={<Logo logo={logo} logoDark={logoDark} />}
      className="bg-transparent dark:bg-transparent"
      paddingY={32}
      elementsRight={
        <div className="flex items-center gap-4">
          <DarkModeSwitcher />
          <Button
            label="Área do cliente"
            className="hidden bg-red500 md:flex"
          />
          <Button className="flex bg-red500 md:hidden" label="Á. do cliente" />
        </div>
      }
      navigationItems={<>{renderMenuItems}</>}
    />
  )
}
