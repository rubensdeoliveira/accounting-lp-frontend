import { useCallback, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { CallToAction } from '../call-to-action'
import { MenuItems } from './components'
import Drawer from 'react-modern-drawer'

export function Menu() {
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
      <ul className="hidden md:flex mr-[10%]">
        <MenuItems />
      </ul>
    </>
  )
}
