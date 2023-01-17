'use client'

import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { MenuItems } from './components'
import Drawer from 'react-modern-drawer'
import { CallToAction } from '@/app/components/header/components'

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState)
  }, [])

  return (
    <>
      <div className="flex md:hidden">
        <FiMenu size={30} onClick={toggleDrawer} />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          style={{ backgroundColor: 'red' }}
        >
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
