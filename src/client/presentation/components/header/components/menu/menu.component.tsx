'use client'

import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { CallToAction } from '@/client/presentation/components/header/components'
import { Drawer } from './components/drawer'
import { MenuItems } from './components'
import DarkModeSwitcher from '../dark-mode-switcher/dark-mode-switcher.component'

type MenuModel = {
  className?: string
}

export default function Menu({ className }: MenuModel) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <div className={className}>
      <div className="flex items-center gap-6 md:hidden">
        <DarkModeSwitcher />
        <FiMenu size={30} onClick={toggleDrawer} />
        <Drawer isOpen={isOpen} onSetIsOpen={toggleDrawer}>
          <div className="flex flex-col items-center justify-center text-center">
            <FiX
              size={30}
              onClick={toggleDrawer}
              className={'m-4 self-end text-white'}
            />
            <ul className="flex flex-col gap-6">
              <MenuItems />
              <CallToAction link="/area-do-cliente" />
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
