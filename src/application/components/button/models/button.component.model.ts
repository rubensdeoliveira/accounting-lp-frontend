import { ButtonProps } from '@chakra-ui/react'
import React from 'react'

export type ButtonModel = ButtonProps & {
  children: React.ReactNode
  link: string
}
