import { useCallback, useState } from 'react'
import { XCircleIcon, HomeIcon } from '@heroicons/react/24/solid'
import { Button } from '@rubensdeoliveira-ui/react'

import { Drawer } from './components/drawer'
import { MenuItems } from './components'
import { DarkModeSwitcher } from '../dark-mode-switcher'

type MenuModel = {
  className?: string
}

export function UnauthenticatedMenu({ className }: MenuModel) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <div className={className}>
      <div className="flex items-center gap-6 md:hidden">
        <DarkModeSwitcher />
        <HomeIcon onClick={toggleDrawer} />
        <Drawer isOpen={isOpen} onSetIsOpen={toggleDrawer}>
          <div className="flex flex-col items-center justify-center text-center">
            <XCircleIcon onClick={toggleDrawer} />
            <ul className="flex flex-col gap-6">
              <MenuItems />
              <Button label="Área do Cliente" />
            </ul>
          </div>
        </Drawer>
      </div>
      <ul className="mr-[10%] hidden md:flex md:items-center md:gap-16">
        <MenuItems />
      </ul>
    </div>
  )
}
