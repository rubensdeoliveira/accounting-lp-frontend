import React from 'react'

export type DrawerModel = {
  children: React.ReactNode
  isOpen: boolean
  onSetIsOpen: () => void
}
