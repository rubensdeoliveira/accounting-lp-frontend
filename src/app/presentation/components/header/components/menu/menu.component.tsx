'use client'

import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { MenuItems } from './components'
import { CallToAction } from '@/app/presentation/components/header/components'
import Drawer from './components/drawer/drawer.component'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <>
      <div className="flex md:hidden">
        <FiMenu size={30} onClick={toggleDrawer} />
        <Drawer isOpen={isOpen} onSetIsOpen={toggleDrawer}>
          <div>
            <FiX size={30} onClick={toggleDrawer} />
            <ul>
              <MenuItems />
              <CallToAction />
            </ul>
          </div>
        </Drawer>
      </div>
      <ul className="mr-[10%] hidden md:flex">
        <MenuItems />
      </ul>
    </>
  )
}
