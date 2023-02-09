import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

import { menuItems } from './constants'

export function MenuItems() {
  const pathname = usePathname()

  const resolveMenuSelected = useMemo(
    () => menuItems.find(menuItem => menuItem && menuItem.link === pathname),
    [pathname, menuItems],
  )

  const renderMenuItems = useMemo(
    () =>
      menuItems.length > 0 &&
      menuItems.map(menuItem => (
        <li
          key={menuItem.label}
          className={`leading-[1.2]  ${
            resolveMenuSelected === menuItem
              ? 'font-medium text-white md:text-gray-900 md:dark:text-white'
              : 'font-normal text-white/70 md:text-gray-900/70 md:dark:text-white/70'
          }`}
        >
          <Link href={menuItem.link} className="leading-[1.2]">
            {menuItem.label}
          </Link>
        </li>
      )),
    [],
  )

  return <>{renderMenuItems}</>
}
